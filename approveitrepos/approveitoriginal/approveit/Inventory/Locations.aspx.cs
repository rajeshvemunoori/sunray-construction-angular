using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Inventory_Locations : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;

    #endregion

    #region Load Locations

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserId"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                lblOrgID.Text = Session["SOrgName"].ToString();
                BindCompCodes();
                ReloadLocations();
                txtKeywordSearch.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadLocations()
    {
        DataTable dt = new DataTable();
        if (Session["locations"] == null)
        {
            string str = xms.getInvLocations(ut.NullSafeInteger(Session["OrgID"]), ddlCompCodes.SelectedValue);
            List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["locations"] = dt;
        }
        else
            dt = (DataTable)Session["locations"];

        if ((Session["SortExpr_Loc"] != null) && Session["SortDir_Loc"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Loc"].ToString() + " " + Session["SortDir_Loc"].ToString();
            gvLocations.DataSource = view;
        }
        else
            gvLocations.DataSource = dt;

        gvLocations.DataBind();
        //gvJQGrid.DataSource = dt;
        //gvJQGrid.DataBind();
    }

    private void BindCompCodes()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string strCmpCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> lstCmpCodes = ser.Deserialize<List<CompanyCodesVO>>(strCmpCodes);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(lstCmpCodes));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCodes.DataSource = dsCompCodes;
        ddlCompCodes.DataTextField = "BusinessType";
        ddlCompCodes.DataValueField = "CompCode";
        ddlCompCodes.DataBind();
        ddlCompCodes.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCodes.Enabled = false;
        else
            ddlCompCodes.Enabled = true;
    }

    protected void ddlCompCodes_SelectedIndexChanged(object sender, EventArgs e)
    {
        ReloadLocations();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        ReloadLocations();
    }

    private void ReloadLocations()
    {
        Session.Remove("locations");
        LoadLocations();
    }

    protected void gvLocations_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Loc"] != null && Session["Control_Loc"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Loc"].ToString());
                if (Session["SortDir_Loc"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvLocations_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {

    }

    protected void gvLocations_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
        }
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Loc"] = lnk.ID;

        if (Session["SortDir_Loc"] == null || Session["SortDir_Loc"].ToString() == "Desc")
            Session["SortDir_Loc"] = "Asc";
        else
            Session["SortDir_Loc"] = "Desc";

        Session["SortExpr_Loc"] = e.CommandArgument;
        LoadLocations();
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshExp", "setTimeout('refreshExp();', 800);", true);
        }
    }

    #endregion

    #region Manage Location

    protected void AddLocation(object sender, EventArgs e)
    {
        Session.Remove("dtLots");
        BindStatesAndCountry();
        ClearFields();
        gvLots.DataBind();
        btnSave.Attributes.Add("onclick", "javascript: return locationDetails();");
        //btnAddNewLot.Attributes.Add("onclick", "javascript: return locationDetails();");
        txtLocCode.Focus();
        popManageLoc.Show();
    }

    protected void EditLocation(object sender, EventArgs e)
    {
        Session.Remove("dtLots");
        BindStatesAndCountry();
        ClearFields();

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkLocCode = (LinkButton)row.FindControl("lnkLocCode");
        HiddenField hdnLocName = (HiddenField)row.FindControl("hdnLocName");
        HiddenField hdnAddr1 = (HiddenField)row.FindControl("hdnAddr1");
        HiddenField hdnAddr2 = (HiddenField)row.FindControl("hdnAddr2");
        HiddenField hdnCity = (HiddenField)row.FindControl("hdnCity");
        txtLocCode.Text = lnkLocCode.Text;
        txtLocName.Text = hdnLocName.Value;
        txtLocAddr1.Text = hdnAddr1.Value;
        txtLocAddr2.Text = hdnAddr2.Value;
        txtLocCity.Text = hdnCity.Value;
        GetLotDetailsByLocCode(lnkLocCode.Text);

        txtLocCode.Focus();
        popManageLoc.Show();
    }

    private void GetLotDetailsByLocCode(string locCode)
    {
        string str = xms.getInvLotLocations(ut.NullSafeInteger(Session["OrgID"]), ddlCompCodes.SelectedValue, locCode);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dtLots = Utility.ConvertToDataTable(lst);
        Session["dtLots"] = dtLots;
        gvLots.DataSource = dtLots;
        gvLots.DataBind();
    }

    private void BindStatesAndCountry()
    {
        string str = xms.getRegions();
        List<RegionVO> lst = ser.Deserialize<List<RegionVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "State ASC";
        ddlRgnCode.DataSource = dv;
        ddlRgnCode.DataTextField = "state";
        ddlRgnCode.DataValueField = "regionCode";
        ddlRgnCode.DataBind();
        ddlRgnCode.Items.Insert(0, "Please Select");
        ddlRgnCode.Items.FindByText("Please Select").Value = "0";

        //DataTable dtC = (DataTable)Session["dsCodes"];
        //DataView dvC = new DataView(dtC, "CodeID = 'ERCOUNTRYCD'", "CodeKey", DataViewRowState.CurrentRows);
        //ddlCountry.DataSource = dvC;
        //ddlCountry.DataBind();
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        string str = xms.getCities(ddlRgnCode.SelectedValue);
        List<CityVO> lst = ser.Deserialize<List<CityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        dt.Columns.Add("CityZip");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["CityZip"] = dt.Rows[i]["City"].ToString() + "-" + dt.Rows[i]["ZipCode"].ToString();

        dt.AcceptChanges();
        DataView dv = dt.DefaultView;
        dv.Sort = "City ASC";
        Session["CitiesByRegion"] = dv.ToTable();
        txtLocCity.Focus();
        popManageLoc.Show();
    }

    protected void gvLots_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvLots_RowCommand(object sender, GridViewCommandEventArgs e)
    {

    }

    protected void gvLots_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {

    }

    protected void btnAddNewLot_Click(object sender, EventArgs e)
    {
        DataTable dtLots = new DataTable();
        if (Session["dtLots"] == null)
            AddColumns(dtLots);
        else
            dtLots = (DataTable)Session["dtLots"];
        SetData();
        DataRow dr = dtLots.NewRow();
        dtLots.Rows.Add(AddEmptyRow(dr));
        dtLots.AcceptChanges();
        gvLots.DataSource = dtLots;
        gvLots.DataBind();
        SetPreviousData(dtLots);
        popManageLoc.Show();
    }

    private void AddColumns(DataTable dt)
    {
        dt.Columns.Add("locId");
        dt.Columns.Add("lotNum");
        dt.Columns.Add("expItem");
        dt.Columns.Add("qtyLot");
        dt.Columns.Add("subLot");
        //dt.Columns.Add("expiredDate");
        //dt.Columns.Add("expiredDate");
        Session["dtLots"] = dt;
    }

    private DataRow AddEmptyRow(DataRow dr)
    {
        dr["lotNum"] = dr["expItem"] = dr["subLot"] = string.Empty;
        dr["locId"] = dr["qtyLot"] = 0;
        return dr;
    }

    private void SetData()
    {
        DataTable dtLots = new DataTable();
        dtLots = (DataTable)Session["dtLots"];
        if (dtLots.Rows.Count > 0)
        {
            for (int i = 0; i < dtLots.Rows.Count; i++)
            {
                TextBox txtLotNum = (TextBox)gvLots.Rows[i].FindControl("txtLotNum");
                //Label lblItem = (Label)gvLots.Rows[i].FindControl("lblItem");
                //Label lblLotQty = (Label)gvLots.Rows[i].FindControl("lblLotQty");
                //TextBox txtSubLot = (TextBox)gvLots.Rows[i].FindControl("txtSubLot");
                //TextBox txtLotExpiryDate = (TextBox)gvLots.Rows[i].FindControl("txtLotExpiryDate");
                //Label lblTransactionDate = (Label)gvLots.Rows[i].FindControl("lblTransactionDate");

                dtLots.Rows[i]["lotNum"] = txtLotNum.Text;
                //dtLots.Rows[i]["expItem"] = lblItem.Text;
                //dtLots.Rows[i]["qtyLot"] = lblLotQty.Text;
                //dtLots.Rows[i]["subLot"] = txtSubLot.Text;
                //dtLots.Rows[i]["expiredDate"] = txtLotExpiryDate.Text;
                //dtLots.Rows[i]["expiredDate"] = txtLotExpiryDate.Text;
            }
            Session["dtLots"] = dtLots;
        }
    }

    private void SetPreviousData(DataTable dt)
    {
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                TextBox txtLotNum = (TextBox)gvLots.Rows[i].FindControl("txtLotNum");
                //Label lblItem = (Label)gvLots.Rows[i].FindControl("lblItem");
                //Label lblLotQty = (Label)gvLots.Rows[i].FindControl("lblLotQty");
                //TextBox txtSubLot = (TextBox)gvLots.Rows[i].FindControl("txtSubLot");
                //TextBox txtLotExpiryDate = (TextBox)gvLots.Rows[i].FindControl("txtLotExpiryDate");
                //Label lblTransactionDate = (Label)gvLots.Rows[i].FindControl("lblTransactionDate");

                txtLotNum.Text = dt.Rows[i]["lotNum"].ToString();
                //lblItem.Text = dt.Rows[i]["expItem"].ToString();
                //lblLotQty.Text = dt.Rows[i]["qtyLot"].ToString();
                //txtSubLot.Text = dt.Rows[i]["subLot"].ToString();
                //txtLotExpiryDate.Text = dt.Rows[i]["expiredDate"].ToString();
                //lblTransactionDate.Text = dt.Rows[i]["expiredDate"].ToString();
            }
        }
    }

    protected void SaveLocation(object sender, EventArgs e)
    {
        int mFlag = 0;
        string appString = "###";
        string accntCode, city, compCode, detailFlag, expiredDate, expItem, jobCode, locAddress1, locAddress2, locCode, locId, locName, lotId, lotNum, lotTransId,
             mstrFlag, orgId, poLineNo, poLineSeq, psreservId, qtyLot, qtyStock, qtyTrans, retCause, rowPOs, rowSeq, rowSubPOs, subLot, transDate,
             transId, transRefno, trcause, trwDate, userId;
        accntCode = city = compCode = detailFlag = expiredDate = expItem = jobCode = locAddress1 = locAddress2 = locCode = locId = locName = lotId = lotNum = lotTransId =
             mstrFlag = orgId = poLineNo = poLineSeq = psreservId = qtyLot = qtyStock = qtyTrans = retCause = rowPOs = rowSeq = rowSubPOs = subLot = transDate =
             transId = transRefno = trcause = trwDate = userId = string.Empty;

        //split city and zipcode
        string cityWithZip = string.Empty;
        if (!string.IsNullOrEmpty(txtLocCity.Text))
        {
            if (txtLocCity.Text.Contains('-'))
            {
                string[] arrCity = txtLocCity.Text.Split('-');
                cityWithZip = arrCity[0];
            }
            else
                cityWithZip = txtLocCity.Text;
        }
        //split city and zipcode
        int rowCnt = 1;
        if (gvLots.Rows.Count > 0)
            rowCnt = gvLots.Rows.Count;

        for (int i = 0; i < rowCnt; i++)
        {
            string rowLotNum = string.Empty;
            string rowSubLot = string.Empty;
            if (gvLots.Rows.Count > 0)
            {
                TextBox txtLotNum = (TextBox)gvLots.Rows[i].FindControl("txtLotNum");
                //TextBox txtSubLot = (TextBox)gvLots.Rows[i].FindControl("txtSubLot");
                rowLotNum = txtLotNum.Text;
                //rowSubLot = txtSubLot.Text;
            }

            accntCode += " " + appString;
            city += cityWithZip + appString;
            compCode += ddlCompCodes.SelectedValue + appString;
            detailFlag += 1 + appString;
            expiredDate += " " + appString;
            expItem += " " + appString;
            jobCode += " " + appString;
            locAddress1 += txtLocAddr1.Text + appString;
            locAddress2 += txtLocAddr2.Text == string.Empty ? " " + appString : txtLocAddr2.Text + appString;
            locCode += txtLocCode.Text.Trim() + appString;
            locId += 0 + appString;
            locName += txtLocName.Text.Trim() + appString;
            lotId += 0 + appString;
            lotNum += (rowLotNum.Trim() == string.Empty ? " " : rowLotNum.Trim()) + appString;
            lotTransId += 0 + appString;
            if (mFlag == 0)
            {
                mstrFlag += 1 + appString;
                mFlag = 1;
            }
            else
                mstrFlag += 0 + appString;
            orgId += Session["OrgID"].ToString() + appString;
            poLineNo += 0 + appString;
            poLineSeq += 0 + appString;
            psreservId += 0 + appString;
            qtyLot += 0 + appString;
            qtyStock += 0 + appString;
            qtyTrans += 0 + appString;
            retCause += " " + appString;
            rowPOs += 0 + appString;
            rowSeq += 0 + appString;
            rowSubPOs += 0 + appString;
            subLot += rowSubLot.Trim() == string.Empty ? " " + appString : rowSubLot.Trim() + appString;
            transDate += " " + appString;
            transId += 0 + appString;
            transRefno += 0 + appString;
            trcause += 0 + appString;
            trwDate += " " + appString;
            userId += Session["UserID"].ToString() + appString;
        }

        InventoryMulVO inv = new InventoryMulVO();
        inv.accntCode = accntCode.Substring(0, accntCode.Length - 3);
        inv.city = city.Substring(0, city.Length - 3);
        inv.compCode = compCode.Substring(0, compCode.Length - 3);
        inv.detailFlag = detailFlag.Substring(0, detailFlag.Length - 3);
        inv.expiredDate = expiredDate.Substring(0, expiredDate.Length - 3);
        inv.expItem = expItem.Substring(0, expItem.Length - 3);
        inv.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        inv.locAddress1 = locAddress1.Substring(0, locAddress1.Length - 3);
        inv.locAddress2 = locAddress2.Substring(0, locAddress2.Length - 3);
        inv.locCode = locCode.Substring(0, locCode.Length - 3);
        inv.locId = locId.Substring(0, locId.Length - 3);
        inv.locName = locName.Substring(0, locName.Length - 3);
        inv.lotId = lotId.Substring(0, lotId.Length - 3);
        inv.lotNum = lotNum.Substring(0, lotNum.Length - 3);
        inv.lotTransId = lotTransId.Substring(0, lotTransId.Length - 3);
        inv.mstrFlag = mstrFlag.Substring(0, mstrFlag.Length - 3);
        inv.orgId = orgId.Substring(0, orgId.Length - 3);
        inv.poLineNo = poLineNo.Substring(0, poLineNo.Length - 3);
        inv.poLineSeq = poLineSeq.Substring(0, poLineSeq.Length - 3);
        inv.psreservId = psreservId.Substring(0, psreservId.Length - 3);
        inv.qtyLot = qtyLot.Substring(0, qtyLot.Length - 3);
        inv.qtyStock = qtyStock.Substring(0, qtyStock.Length - 3);
        inv.qtyTrans = qtyTrans.Substring(0, qtyTrans.Length - 3);
        inv.retCause = retCause.Substring(0, retCause.Length - 3);
        inv.rowPOs = rowPOs.Substring(0, rowPOs.Length - 3);
        inv.rowSeq = rowSeq.Substring(0, rowSeq.Length - 3);
        inv.rowSubPOs = rowSubPOs.Substring(0, rowSubPOs.Length - 3);
        inv.subLot = subLot.Substring(0, subLot.Length - 3);
        inv.transDate = transDate.Substring(0, transDate.Length - 3);
        inv.transId = transId.Substring(0, transId.Length - 3);
        inv.transRefno = transRefno.Substring(0, transRefno.Length - 3);
        inv.trcause = trcause.Substring(0, trcause.Length - 3);
        inv.trwDate = trwDate.Substring(0, trwDate.Length - 3);
        inv.userId = userId.Substring(0, userId.Length - 3);
        string retStr = xms.addInvLocationMul(inv);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr.ToString(), dvMainMsg);
            ReloadLocations();
            popManageLoc.Hide();
        }
        else
        {
            DisplayMsg("Red", retStr.ToString(), dvMsg);
            popManageLoc.Show();
        }
    }

    private void DisplayMsg(string color, string msg, System.Web.UI.HtmlControls.HtmlGenericControl div)
    {
        div.InnerHtml = msg;
        div.Style["color"] = color;
    }

    protected void DeleteLot(object sender, CommandEventArgs e)
    {
        DataTable dtLot = (DataTable)Session["dtLots"];
        int rowIndex = ut.NullSafeInteger(e.CommandArgument);
        dtLot.Rows[rowIndex].Delete();
        dtLot.AcceptChanges();
        Session["dtLots"] = dtLot;
        gvLots.DataSource = dtLot;
        gvLots.DataBind();
        SetPreviousData(dtLot);
        popManageLoc.Show();
    }

    private void ClearFields()
    {
        txtLocCode.Text = txtLocName.Text = txtLocAddr1.Text = txtLocAddr2.Text = txtLocCity.Text = string.Empty;
        ddlRgnCode.SelectedValue = "0";
    }

    #endregion

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCities(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["CitiesByRegion"];
        DataView dv = new DataView(dt, "CityZip LIKE '%" + prefixText + "%'", "CityZip", DataViewRowState.CurrentRows);
        string[] CountryNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            CountryNames[i] = dv.ToTable().Rows[i][6].ToString();
        return CountryNames;
    }
}