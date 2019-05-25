using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Web.Script.Serialization;
using ExpenseServiceBeta;

public partial class Inventory_InventoryMgmt : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;

    #endregion

    #region Load Inventory Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                txtFilterItemHist.Attributes.Add("onkeyup", "Filter(this);");
                Session.Remove("InvDetails");
                LoadDefaultData();
                txtLocations.Focus();
                ShowHistoryOptions(true);
                LoadItems();
                LoadBlocksByReason();
                //btnSave.Attributes.Add("onclick", "javascript: return validateAdjFieldsOnSave();");
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void LoadDefaultData()
    {
        //Fetch Locations
        if (Session["locations"] == null)
        {
            string strLoc = xms.getInvLocations(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
            List<InventoryVO> lstLoc = ser.Deserialize<List<InventoryVO>>(strLoc);
            DataTable dtLoc = Utility.ConvertToDataTable(lstLoc);
            Session["locations"] = dtLoc;
            //InventoryVO inv = new InventoryVO();
            //inv.qtyLot
        }

        //Fetch Reasons
        string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "TRCAUSE");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        ddlReason.DataSource = lst;
        ddlReason.DataBind();

        btnSave.Visible = false;
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        //Load Inv Adjustent Data
        dvMainMag.InnerHtml = string.Empty;
        string[] locArr = txtLocations.Text.Split('-');
        DataTable dtInv = LoadLocationData(locArr[0]);
        LoadInventoryData(dtInv);
        LoadBlocksByReason();

        //Load history data
        string[] locArrHist = txtLocHist.Text.Split('-');
        GetInvHistData(locArrHist[0]);
    }

    protected void txtLocations_TextChanged(object sender, EventArgs e)
    {
        string[] locArr = txtLocations.Text.Split('-');
        DataTable dtInv = LoadLocationData(locArr[0]);
        LoadInventoryData(dtInv);
        LoadBlocksByReason();
    }

    protected void ddlReason_SelectedIndexChanged(object sender, EventArgs e)
    {
        LoadBlocksByReason();
    }

    private void LoadBlocksByReason()
    {
        if (ddlReason.SelectedValue == "7") //transfer quantity
        {
            dvNormalAdj.Style["display"] = "none";
            dvTrasfrQty.Style["display"] = "block";
            txtLocations.Enabled = false;
            btnSave.Visible = false;
            //btnTransferItem.Attributes.Add("onclick", "javascript: return validatelotQtyTrsfr(0);");
            txtItemTrsfr.Focus();
        }
        else//normal adjustment
        {
            dvNormalAdj.Style["display"] = "block";
            dvTrasfrQty.Style["display"] = "none";
            txtLocations.Enabled = true;
            if (gvInvItemData.Rows.Count > 0)
                btnSave.Visible = true;
        }
    }

    private DataTable LoadLocationData(string locCode)
    {
        string str = xms.getInvDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), locCode, string.Empty, string.Empty);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["InvDetails"] = dt;
        return dt;
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

    #region Inventory Adjustments

    protected void ShowInventory(object sender, EventArgs e)
    {
        ShowHistoryOptions(true);
    }

    private void LoadInventoryData(DataTable dtInv)
    {
        DataTable dtAllInvData = dtInv;
        DataView dv = dtInv.DefaultView;
        dv.Sort = "expItem ASC";
        gvInvItemData.DataSource = dv.ToTable(true, "expItem", "qtyStock");
        gvInvItemData.DataBind();

        if (dtInv.Rows.Count > 0)
            btnSave.Visible = true;
        else
            btnSave.Visible = false;
    }

    protected void gvInvItemData_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblItem = (Label)e.Row.FindControl("lblItem");
            DataTable dtInv = (DataTable)Session["InvDetails"];
            DataView dvInv = new DataView(dtInv, "expItem = '" + lblItem.Text + "'", "lotNum", DataViewRowState.CurrentRows);

            GridView gvInvLots = (GridView)e.Row.FindControl("gvInvLots");
            //gvInvLots.DataSource = dvInv.ToTable(true, "expItem", "lotNum", "qtyStock", "qtyLot");
            gvInvLots.DataSource = dvInv.ToTable();
            gvInvLots.DataBind();

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    protected void gvInvLots_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Label lblLotNum = (Label)e.Row.FindControl("lblLotNum");
            //Label lblLotTotalQty = (Label)e.Row.FindControl("lblLotTotalQty");
            //HiddenField hdnItem = (HiddenField)e.Row.FindControl("hdnItem");

            //DataTable dtInv = (DataTable)Session["InvDetails"];
            //DataView dvInv = new DataView(dtInv, "expItem = '" + hdnItem.Value + "' AND lotNum = '" + lblLotNum.Text + "'", "jobCode", DataViewRowState.CurrentRows);

            ////Calculate total qty in all the jobs per lot
            //double qty = 0;
            //for (int i = 0; i < dvInv.ToTable().Rows.Count; i++)
            //    qty += ut.NullSafeDouble(dvInv.ToTable().Rows[i]["qtyLot"]);

            //lblLotTotalQty.Text = qty.ToString();

            //GridView gvInvJobs = (GridView)e.Row.FindControl("gvInvJobs");
            //gvInvJobs.DataSource = dvInv;
            //gvInvJobs.DataBind();

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //manipulate given quantity
            //TextBox txtAdjQty = (TextBox)e.Row.FindControl("txtAdjQty");
            //Label lblJobQtyLot = (Label)e.Row.FindControl("lblJobQtyLot");
            //HiddenField hdnQty = (HiddenField)e.Row.FindControl("hdnQty");
            //txtAdjQty.Attributes.Add("onchange", "javascript:return manipulateAdjustQty('" + txtAdjQty.Text + "', '" + hdnQty.ClientID + "', '" + lblJobQtyLot.Text + "');");
        }
    }

    protected void gvInvJobs_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        { }
    }

    protected void SaveAdjustedInventory(object sender, EventArgs e)
    {
        string appString = "###";
        int cnt = 0;
        //Declare variables to pass data
        string accntCode, city, compCode, detailFlag, expiredDate, expItem, jobCode, locAddress1, locAddress2, locCode, locId, locName, lotId, lotNum, lotTransId,
             mstrFlag, orgId, poLineNo, poLineSeq, psreservId, qtyLot, qtyStock, qtyTrans, retCause, rowPOs, rowSeq, rowSubPOs, subLot, transDate,
             transId, transRefno, trcause, trwDate, userId;
        accntCode = city = compCode = detailFlag = expiredDate = expItem = jobCode = locAddress1 = locAddress2 = locCode = locId = locName = lotId = lotNum = lotTransId =
             mstrFlag = orgId = poLineNo = poLineSeq = psreservId = qtyLot = qtyStock = qtyTrans = retCause = rowPOs = rowSeq = rowSubPOs = subLot = transDate =
             transId = transRefno = trcause = trwDate = userId = string.Empty;

        //Get selected location code

        string[] locArr = txtLocations.Text.Split('-');
        DataTable dtLoc = (DataTable)Session["locations"];
        DataView dvLoc = new DataView(dtLoc, "locCode = '" + locArr[0] + "'", "locCode", DataViewRowState.CurrentRows);

        foreach (GridViewRow row in gvInvItemData.Rows)
        {
            Label lblItem = (Label)row.FindControl("lblItem");
            Label lblQtyStock = (Label)row.FindControl("lblQtyStock");
            GridView gvInvLots = (GridView)row.FindControl("gvInvLots");
            foreach (GridViewRow row1 in gvInvLots.Rows)
            {
                Label lblLotNum = (Label)row1.FindControl("lblLotNum");
                Label lblJobcode = (Label)row1.FindControl("lblJobcode");
                Label lblJobQtyLot = (Label)row1.FindControl("lblJobQtyLot");
                TextBox txtAdjQty = (TextBox)row1.FindControl("txtAdjQty");
                HiddenField hdnSubLot = (HiddenField)row1.FindControl("hdnSubLot");
                string[] arrSubLot = hdnSubLot.Value.Split(',');
                hdnSubLot.Value = arrSubLot[0];
                txtAdjQty.Text = txtAdjQty.Text.Replace(",", string.Empty);

                if (txtAdjQty.Text.Length > 0 && !string.IsNullOrEmpty(txtAdjQty.Text) && txtAdjQty.Text != " ")
                {
                    //Add given quantity to actual quantity
                    double fltAddQty = ut.NullSafeDouble(txtAdjQty.Text);
                    //Add given quantity to actual quantity

                    accntCode += " " + appString;
                    city += " " + appString;
                    compCode += Session["CompCode"].ToString() + appString;
                    detailFlag += "1" + appString;
                    expiredDate += DateTime.Now.ToShortDateString() + appString;
                    expItem += lblItem.Text + appString;
                    jobCode += ((string.IsNullOrEmpty(lblJobcode.Text) || lblJobcode.Text.ToLower() == "not available") ? " " : lblJobcode.Text) + appString;
                    locAddress1 += " " + appString;
                    locAddress2 += " " + appString;
                    locCode += locArr[0] + appString;
                    locId += dvLoc.ToTable().Rows[0]["locId"].ToString() + appString;
                    locName += locArr[1] + appString;
                    lotId += "0" + appString;
                    lotNum += lblLotNum.Text + appString;
                    lotTransId += "0" + appString;
                    mstrFlag += "1" + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    poLineNo += "0" + appString;
                    poLineSeq += "0" + appString;
                    psreservId += "0" + appString;
                    qtyLot += fltAddQty.ToString() + appString;
                    qtyStock += fltAddQty.ToString() + appString;
                    qtyTrans += fltAddQty.ToString() + appString;
                    retCause += " " + appString;
                    rowPOs += "0" + appString;
                    rowSeq += "0" + appString;
                    rowSubPOs += "0" + appString;
                    subLot += (hdnSubLot.Value == string.Empty ? " " : hdnSubLot.Value) + appString;
                    transDate += DateTime.Now.ToShortDateString() + appString;
                    transId += "0" + appString;
                    transRefno += "0" + appString;
                    trcause += ddlReason.SelectedValue + appString;
                    trwDate += DateTime.Now.ToShortDateString() + appString;
                    userId += Session["UserId"].ToString() + appString;
                    cnt++;
                }
            }
        }

        if (cnt > 0)
        {
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
            string retStr = xms.addInvAdjustMul(inv);
            if (retStr.ToLower().Contains("succes"))
            {
                DisplayMessage(retStr, "Green");
                DataTable dtInv = LoadLocationData(locArr[0]);
                LoadInventoryData(dtInv);
                LoadBlocksByReason();
            }
            else
                DisplayMessage(retStr, "Red");
        }
        else
            DisplayMessage("No changes to update!", "Red");
    }

    private void ShowHistoryOptions(bool show)
    {
        if (show)
        {
            dvMainMag.InnerHtml = string.Empty;
            dvInvAdjustment.Style["display"] = "block";
            dvInvHist.Style["display"] = "none";
            dvInvTransferHist.Style["display"] = "none";
            btnInvAdjust.Visible = false;
            btnInvHist.Visible = true;
            lblInvHeaderLabel.Text = "Inventory";
            txtLocations.Focus();
        }
        else
        {
            if (ddlReason.SelectedValue == "7")
            {
                dvInvTransferHist.Style["display"] = "block";
                dvInvHist.Style["display"] = "none";
                txtItemTrsfrHist.Focus();
            }
            else
            {
                dvInvHist.Style["display"] = "block";
                dvInvTransferHist.Style["display"] = "none";
                txtLocHist.Focus();
            }
            dvInvAdjustment.Style["display"] = "none";
            btnInvAdjust.Visible = true;
            btnInvHist.Visible = false;
            lblInvHeaderLabel.Text = "Inv. Adj. History";
        }
    }

    private void DisplayMessage(string msg, string color)
    {
        dvMainMag.InnerHtml = msg;
        dvMainMag.Style["color"] = color;
    }

    #endregion

    #region Inventory Transaction History

    protected void ShowTransactionHistory(object sender, EventArgs e)
    {
        //string[] locArr = txtLocHist.Text.Split('-');
        ShowHistoryOptions(false);
        //ClearHistoryData();
        //txtLocHist.Focus();
        //popTransHist.Show();
    }

    private void GetInvHistData(string locCode)
    {
        string str = xms.getInvHistry(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), locCode);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["InvItemHist"] = dt;
        DataView dv = dt.DefaultView;
        dv.Sort = "expItem ASC";
        gvInvItemHist.DataSource = dv.ToTable(true, "expItem", "qtyStock");
        gvInvItemHist.DataBind();
    }

    protected void txtLocHist_TextChanged(object sender, EventArgs e)
    {
        string[] locArr = txtLocHist.Text.Split('-');
        GetInvHistData(locArr[0]);
        //popTransHist.Show();
    }

    protected void gvInvItemHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblItem = (Label)e.Row.FindControl("lblItem");
            GridView gvInvItemLotHist = (GridView)e.Row.FindControl("gvInvItemLotHist");

            //Bind lot gridview
            DataTable dt = (DataTable)Session["InvItemHist"];
            DataView dv = new DataView(dt, "expItem = '" + lblItem.Text + "'", "LotNum", DataViewRowState.CurrentRows);
            dv.Sort = "LotNum ASC";
            gvInvItemLotHist.DataSource = dv;
            gvInvItemLotHist.DataBind();

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvInvItemLotHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void ReloadTransactionHistory(object sender, EventArgs e)
    {
        //popTransHist.Show();
    }

    private void ClearHistoryData()
    {
        txtLocHist.Text = string.Empty;
        gvInvItemHist.DataSource = null;
        gvInvItemHist.DataBind();
    }

    #endregion

    #region Inventory Transfers

    private void LoadItems()
    {
        DataTable dtCode = new DataTable();
        if (Session["ItemCodes"] == null)
        {
            string str = xms.getItemCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty);
            List<ItemCodesVO> lst = ser.Deserialize<List<ItemCodesVO>>(str);
            dtCode = Utility.ConvertToDataTable(lst);
            Session["ItemCodes"] = dtCode;
        }
        else
            dtCode = (DataTable)Session["ItemCodes"];
    }

    protected void txtItemTrsfr_TextChanged(object sender, EventArgs e)
    {
        string[] arr = txtItemTrsfr.Text.Split('-');
        LoadDataByItem(arr[0].Trim());
        LoadDestinationLoc(arr[0].Trim());
        txtTrsfrToLot.Text = string.Empty;
        gvFromLotList.DataSource = null;
        gvFromLotList.DataBind();
        dvLotList.InnerHtml = string.Empty;
    }

    private void LoadDataByItem(string item)
    {
        //Get locations and lots based on selected item
        string str = xms.getInvLotInfo(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), item, string.Empty);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["LocByItem"] = dt;
        DataView dv = dt.DefaultView;
        ddlTrsfrFromLoc.DataSource = dv.ToTable(true, "LocCode", "LocName");
        ddlTrsfrFromLoc.DataTextField = "LocName";
        ddlTrsfrFromLoc.DataValueField = "LocCode";
        ddlTrsfrFromLoc.DataBind();
        ddlTrsfrFromLoc.Items.Insert(0, "Please Select");
        ddlTrsfrFromLoc.Items.FindByText("Please Select").Value = "0";
    }

    private void LoadDestinationLoc(string item)
    {
        DataTable dt = (DataTable)Session["locations"];
        ddlTrsfrToLoc.DataSource = dt;
        ddlTrsfrToLoc.DataTextField = "LocName";
        ddlTrsfrToLoc.DataValueField = "LocCode";
        ddlTrsfrToLoc.DataBind();
        ddlTrsfrToLoc.Items.Insert(0, "Please Select");
        ddlTrsfrToLoc.Items.FindByText("Please Select").Value = "0";

        ddlTrsfrToLoc.Attributes.Add("onchange", "javascript: return loadLots('" + ddlTrsfrToLoc.ClientID + "', '" + item + "')");
    }

    protected void ddlTrsfrFromLoc_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = (DataTable)Session["LocByItem"];
        DataView dv = new DataView(dt, "LocCode = '" + ddlTrsfrFromLoc.SelectedValue + "'", "LotNum", DataViewRowState.CurrentRows);
        dv.Sort = "LotNum ASC";
        DisplayDynamicLotList(dv.ToTable());
    }

    protected void ddlTrsfrToLoc_SelectedIndexChanged(object sender, EventArgs e)
    {

    }

    private void DisplayDynamicLotList(DataTable dt)
    {
        double totQtyAvail = 0;

        gvFromLotList.DataSource = dt;
        gvFromLotList.DataBind();

        for (int i = 0; i < dt.Rows.Count; i++)
            totQtyAvail += ut.NullSafeDouble(dt.Rows[i]["QtyLot"]);

        //display total quantities
        lblTotalQtyAvailFrom.Text = totQtyAvail.ToString();
        lblTotalQtyAftrTrsfrFrom.Text = totQtyAvail.ToString();
        lblTotalItemQtyTrsfr.Text = "0";
    }

    protected void gvFromLotList_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblQtyAvailLot = (Label)e.Row.FindControl("lblQtyAvailLot");
            TextBox txtLotSelQty = (TextBox)e.Row.FindControl("txtLotSelQty");
            HiddenField hdnJobStatus = (HiddenField)e.Row.FindControl("hdnJobStatus");
            HiddenField hdnJobStsVal = (HiddenField)e.Row.FindControl("hdnJobStsVal");
            hdnJobStsVal.Value = (hdnJobStatus.Value == "OPEN" || string.IsNullOrEmpty(hdnJobStatus.Value) || string.IsNullOrEmpty(hdnJobStatus.Value)) ? "1" : "0";
            txtLotSelQty.Attributes.Add("onkeyup", "validatelotQtyTrsfr(" + lblQtyAvailLot.Text + ", '" + hdnJobStatus.Value + "', '" + hdnJobStsVal.ClientID + "')");
            txtLotSelQty.Attributes.Add("onchange", "validatelotQtyTrsfr(" + lblQtyAvailLot.Text + ", '" + hdnJobStatus.Value + "', '" + hdnJobStsVal.ClientID + "')");
        }
        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    protected void InitiateItemTransfer(object sender, EventArgs e)
    {
        //declare and initialize parameter variables
        string accntCode, addedBy, addedOn, adjQtyLot, allocatedJobs, availUse, city, compCode, description, detailFlag, djobCode, dlocId, dlotNum,
            expireDate, expiredDate, expItem, jobCode, locAddress1, locAddress2, locCode, locId, locName, lotId, lotNum, lotTransId, modifiedBy, modifiedOn,
            mstrFlag, orgId, poLineNo, poLineSeq, psreservId, qtyLot, qtyStock, qtyTrans, retCause, rowPOs, rowSeq, rowSubPOs,
            subLot, transDate, transId, transRefno, trcause, trwDate, userId, userName;

        accntCode = addedBy = addedOn = adjQtyLot = allocatedJobs = availUse = city = compCode = description = detailFlag = djobCode = dlocId = dlotNum =
            expireDate = expiredDate = expItem = jobCode = locAddress1 = locAddress2 = locCode = locId = locName = lotId = lotNum = lotTransId = modifiedBy = modifiedOn =
            mstrFlag = orgId = poLineNo = poLineSeq = psreservId = qtyLot = qtyStock = qtyTrans = retCause = rowPOs = rowSeq = rowSubPOs =
            subLot = transDate = transId = transRefno = trcause = trwDate = userId = userName = string.Empty;
        string appString = "###";

        //get source and destination location ids
        DataTable dtSLoc = (DataTable)Session["LocByItem"];
        DataTable dtDLoc = (DataTable)Session["locations"];

        DataView dvSLoc = new DataView(dtDLoc, "locCode = '" + ddlTrsfrFromLoc.SelectedValue + "'", "locCode", DataViewRowState.CurrentRows);
        DataView dvDLoc = new DataView(dtDLoc, "locCode = '" + ddlTrsfrToLoc.SelectedValue + "'", "locCode", DataViewRowState.CurrentRows);

        foreach (GridViewRow row in gvFromLotList.Rows)
        {
            Label lblLotNum = (Label)row.FindControl("lblLotNum");
            Label lblLotJob = (Label)row.FindControl("lblLotJob");
            HiddenField hdnJobStatus = (HiddenField)row.FindControl("hdnJobStatus");
            Label lblQtyAvailLot = (Label)row.FindControl("lblQtyAvailLot");
            TextBox txtLotSelQty = (TextBox)row.FindControl("txtLotSelQty");

            orgId += ut.NullSafeInteger(Session["OrgID"]) + appString;
            compCode += Session["CompCode"].ToString() + appString;
            expItem += txtItemTrsfr.Text.Split('-')[0].Trim() + appString;
            locId += ut.NullSafeInteger(dvSLoc.ToTable().Rows[0]["locId"]) + appString;
            dlocId += ut.NullSafeInteger(dvDLoc.ToTable().Rows[0]["locId"]) + appString;
            jobCode += ((string.IsNullOrEmpty(lblLotJob.Text) || lblLotJob.Text.ToLower() == "not available") ? " " : lblLotJob.Text) + appString;
            djobCode += ((string.IsNullOrEmpty(hdnTrsfrToJob.Value) || hdnTrsfrToJob.Value.ToLower() == "not available") ? " " : hdnTrsfrToJob.Value) + appString;
            //djobCode += (string.IsNullOrEmpty(hdnTrsfrToJob.Value) ? " " : hdnTrsfrToJob.Value) + appString;
            qtyLot += ut.NullSafeDouble(lblQtyAvailLot.Text) + appString;
            adjQtyLot += ut.NullSafeDouble(txtLotSelQty.Text) + appString;
            lotNum += lblLotNum.Text + appString;
            dlotNum += txtTrsfrToLot.Text.Split(' ')[0] + appString;
            subLot += " " + appString;
            expiredDate += DateTime.Now.ToShortDateString() + appString;
            userId += ut.NullSafeInteger(Session["UserID"]) + appString;
            trcause += ut.NullSafeInteger(ddlReason.SelectedValue) + appString;
        }

        InventoryMulVO inv = new InventoryMulVO();
        inv.orgId = orgId.Substring(0, orgId.Length - 3);
        inv.compCode = compCode.Substring(0, compCode.Length - 3);
        inv.expItem = expItem.Substring(0, expItem.Length - 3);
        inv.locId = locId.Substring(0, locId.Length - 3);
        inv.dlocId = dlocId.Substring(0, dlocId.Length - 3);
        inv.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        inv.djobCode = djobCode.Substring(0, djobCode.Length - 3);
        inv.qtyLot = qtyLot.Substring(0, qtyLot.Length - 3);
        inv.adjQtyLot = adjQtyLot.Substring(0, adjQtyLot.Length - 3);
        inv.lotNum = lotNum.Substring(0, lotNum.Length - 3);
        inv.dlotNum = dlotNum.Substring(0, dlotNum.Length - 3);
        inv.subLot = subLot.Substring(0, subLot.Length - 3);
        inv.expiredDate = expiredDate.Substring(0, expiredDate.Length - 3);
        inv.userId = userId.Substring(0, userId.Length - 3);
        inv.trcause = trcause.Substring(0, trcause.Length - 3);
        string retStr = xms.updateInvAdjMul(inv);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage(retStr, "Green");
            ClearTransfers();
        }
        else if (retStr.ToLower().Contains("fail"))
            DisplayMessage(retStr, "Red");
    }

    private void ClearTransfers()
    {
        ddlTrsfrFromLoc.Items.Clear();
        ddlTrsfrToLoc.Items.Clear();
        gvFromLotList.DataBind();
        lblTotalItemQtyTrsfr.Text = lblTotalQtyAftrTrsfrFrom.Text = lblTotalQtyAvailFrom.Text = lblTotalQtyAvailTo.Text = txtItemTrsfr.Text =
            txtTrsfrToLot.Text = string.Empty;
    }

    #endregion

    #region Inventory Transfer History

    protected void txtItemTrsfrHist_TextChanged(object sender, EventArgs e)
    {
        LoadInvTransferHist();
    }

    private void LoadInvTransferHist()
    {
        string[] arr = txtItemTrsfrHist.Text.Split('-');

        string str = xms.getInvTransHistry(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), arr[0].Trim());
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        InventoryVO inv = new InventoryVO();

        DataTable dt = Utility.ConvertToDataTable(lst);
        gvInvTrsfrHist.DataSource = dt;
        gvInvTrsfrHist.DataBind();
    }

    protected void gvInvTrsfrHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    #endregion

    #region Web Methods

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetLocations(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["locations"];
        DataView dv = new DataView(dt, "locCode LIKE '%" + prefixText + "%' OR locName LIKE '%" + prefixText + "%'", "locName", DataViewRowState.CurrentRows);
        string[] locationNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            locationNames[i] = dv.ToTable().Rows[i]["locCode"].ToString() + '-' + dv.ToTable().Rows[i]["locName"].ToString();
        return locationNames;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetReasons(string prefixText, int count, string contextKey)
    {
        string[] reason = new string[9];
        return reason;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetItems(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["ItemCodes"];
        DataTable dtTemp = dt.DefaultView.ToTable(true, "itemCode", "description");
        DataView dv = new DataView(dtTemp, "itemCode LIKE '%" + prefixText + "%' OR description LIKE '%" + prefixText + "%'", "description", DataViewRowState.CurrentRows);
        string[] itemNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            itemNames[i] = dv.ToTable().Rows[i]["itemCode"].ToString() + '-' + dv.ToTable().Rows[i]["description"].ToString();
        return itemNames;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetLotsByLocation(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["LotByLocation"];
        DataView dv = new DataView(dt, "lotNum LIKE '%" + prefixText + "%'", "lotNum", DataViewRowState.CurrentRows);
        string[] lotNumbers = new string[dv.ToTable().Rows.Count];
        int i;
        for (i = 0; i < dv.ToTable().Rows.Count; i++)
            lotNumbers[i] = dv.ToTable().Rows[i]["lotNum"].ToString() + " (Quantity:" + dv.ToTable().Rows[i]["qtyLot"].ToString() + ")";
        return lotNumbers;
    }

    #endregion
}