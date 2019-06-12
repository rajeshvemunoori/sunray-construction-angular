using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Web.UI.HtmlControls;

public partial class Quotations_vendagreement : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Agreements

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            btnAddAggr.Attributes.Add("onclick", "javascript:return animateDiv('#" + dvAggrDetails.ClientID + "', '" + dvAggrDetails.ClientID + "', '" + dvAggrMsg.ClientID + "');");
            btnCloseAggrAdd.Attributes.Add("onclick", "javascript:return  clearFields('" + dvAggrDetails.ClientID + "', '#" + dvAggrGrid.ClientID + "');");
            btnSaveAggr.Attributes.Add("onclick", "javascript:return validateAgreement();");
            txtFilterAgr.Attributes.Add("onkeyup", "Filter(this);");
            if (!IsPostBack)
            {
                Session.Remove("Agreements");
                GetCustomers();
                LoadAgreementGrid();
                txtDiscVal.Text = "0";
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void GetCustomers()
    {
        //Load Customers
        DataTable dtCust = new DataTable();
        if (Session["Customers"] == null)
        {
            string strCust = xms.getCSOrgDetails(0);
            List<CustomerServiceVO> lstCust = ser.Deserialize<List<CustomerServiceVO>>(strCust);
            dtCust = Utility.ConvertToDataTable(lstCust);
            Session["Customers"] = dtCust.DefaultView.ToTable(true, "orgname", "orgid");
        }
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Agr"] = lnk.ID;

        if (Session["SortDir_Agr"] == null || Session["SortDir_Agr"].ToString() == "Desc")
            Session["SortDir_Agr"] = "Asc";
        else
            Session["SortDir_Agr"] = "Desc";

        Session["SortExpr_Agr"] = e.CommandArgument;
        LoadAgreementGrid();
    }

    private void LoadAgreementGrid()
    {
        DataTable dt = LoadAgreements();
        DataTable dtAgr = dt.DefaultView.ToTable(true, "agreementCode", "agreementDescr", "discntType", "discntValue", "validFrom", "validTo", "isVolumeDiscnt", "customerID");
        if ((Session["SortExpr_Agr"] != null) && Session["SortDir_Agr"] != null)
        {
            DataView view = dtAgr.DefaultView;
            view.Sort = Session["SortExpr_Agr"].ToString() + " " + Session["SortDir_Agr"].ToString();
            gvAgreements.DataSource = view;
        }
        else
            gvAgreements.DataSource = dtAgr;
        gvAgreements.DataBind();
    }

    private DataTable LoadAgreements()
    {
        DataTable dt = new DataTable();
        if (Session["Agreements"] == null)
        {
            string str = xms.getVendorAgreements(ut.NullSafeInteger(Session["VendBillID"]), string.Empty, string.Empty);
            List<AgreementVO> lst = ser.Deserialize<List<AgreementVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Agreements"] = dt;
        }
        else
            dt = (DataTable)Session["Agreements"];
        return dt;
    }

    protected void gvAgreements_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnIsVolDisc = (HiddenField)e.Row.FindControl("hdnIsVolDisc");
            HiddenField hdnDiscType = (HiddenField)e.Row.FindControl("hdnDiscType");
            HiddenField hdnDiscVal = (HiddenField)e.Row.FindControl("hdnDiscVal");
            HiddenField hdnCustID = (HiddenField)e.Row.FindControl("hdnCustID");
            Label lblDiscType = (Label)e.Row.FindControl("lblDiscType");
            Label lblCust = (Label)e.Row.FindControl("lblCust");
            Label lblDiscVal = (Label)e.Row.FindControl("lblDiscVal");
            CheckBox chkHIsVolDisc = (CheckBox)e.Row.FindControl("chkHIsVolDisc");

            //Get Customer Name
            lblCust.Text = GetCustName(ut.NullSafeInteger(hdnCustID.Value));
            //Get Customer Name

            //display is vol discount checkbox
            chkHIsVolDisc.Checked = hdnIsVolDisc.Value == "Y" ? true : false;
            chkHIsVolDisc.Enabled = false;

            //display disc type description
            if (hdnDiscType.Value == "0")
            {
                lblDiscType.Text = "Price";
                lblDiscVal.Text = hdnDiscVal.Value + "$";
            }
            else if (hdnDiscType.Value == "1")
            {
                lblDiscType.Text = "Percentage";
                ////lblSymbol.Text = "%";
                lblDiscVal.Text = hdnDiscVal.Value + "%";
            }

            e.Row.Cells[0].Style["text-align"] = "center";
            e.Row.Cells[5].Style["text-align"] = "right";
            e.Row.Cells[8].Style["text-align"] = "center";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Agr"] != null && Session["Control_Agr"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Agr"].ToString());
                if (Session["SortDir_Agr"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnSaveAggr_Click(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        string appString = "###";
        int mFlag = 0;

        string agreementCode, agreementDescr, discntType, discntValue, isActive, isVolumeDiscnt, lineDscntVal, lineNo, validFrom, validTo, vendorID, userID, masterFlag,
            detailsFlag, fromQty, toQty, customerID;
        agreementCode = agreementDescr = discntType = discntValue = isActive = isVolumeDiscnt = lineDscntVal = lineNo = validFrom = validTo = vendorID = userID =
            masterFlag = detailsFlag = fromQty = toQty = customerID = string.Empty;

        if (chkIsVolDisc.Checked)//if the agreement is of type volume discount add quantity break rows with multiple input method
        {
            foreach (GridViewRow row in gvQty.Rows)
            {
                //TextBox txtQtyFrom = (TextBox)row.FindControl("txtQtyFrom");
                TextBox txtQtyTo = (TextBox)row.FindControl("txtQtyTo");
                TextBox txtDiscVal = (TextBox)row.FindControl("txtDiscVal");
                if (!string.IsNullOrEmpty(txtQtyTo.Text) && !string.IsNullOrEmpty(txtDiscVal.Text))
                {
                    customerID += GetCustID(txtCust.Text.Trim()) + appString;
                    agreementCode += txtAggrCode.Text.Trim() + appString;
                    agreementDescr += txtAggrDescr.Text.Trim() + appString;
                    discntType += ddlDiscType.SelectedValue + appString;
                    discntValue += "0" + appString;
                    isActive += "Y" + appString;
                    isVolumeDiscnt += "Y" + appString;
                    lineDscntVal += txtDiscVal.Text.Trim() + appString;
                    lineNo += (row.RowIndex + 1) + appString;
                    validFrom += txtValidFrom.Text.Trim() + appString;
                    validTo += txtValidTo.Text.Trim() + appString;
                    vendorID += Session["VendBillID"].ToString() + appString;
                    userID += Session["UserID"].ToString() + appString;
                    if (mFlag == 0)
                    {
                        masterFlag += 1 + appString;
                        mFlag = 1;
                    }
                    else
                        masterFlag += 0 + appString;
                    detailsFlag += "1" + appString;
                    fromQty += "0" + appString;
                    toQty += txtQtyTo.Text.Trim() + appString;
                }
            }
            AgreementMulVO agr = new AgreementMulVO();
            agr.agreementCode = agreementCode.Substring(0, agreementCode.Length - 3);
            agr.agreementDescr = agreementDescr.Substring(0, agreementDescr.Length - 3);
            agr.customerID = customerID.Substring(0, customerID.Length - 3);
            agr.discntType = discntType.Substring(0, discntType.Length - 3);
            agr.discntValue = discntValue.Substring(0, discntValue.Length - 3);
            agr.isActive = isActive.Substring(0, isActive.Length - 3);
            agr.isVolumeDiscnt = isVolumeDiscnt.Substring(0, isVolumeDiscnt.Length - 3);
            agr.lineDscntVal = lineDscntVal.Substring(0, lineDscntVal.Length - 3);
            agr.lineNo = lineNo.Substring(0, lineNo.Length - 3);
            agr.validFrom = validFrom.Substring(0, validFrom.Length - 3);
            agr.validTo = validTo.Substring(0, validTo.Length - 3);
            agr.vendorID = vendorID.Substring(0, vendorID.Length - 3);
            agr.userID = userID.Substring(0, userID.Length - 3);
            agr.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
            agr.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
            agr.fromQty = fromQty.Substring(0, fromQty.Length - 3);
            agr.toQty = toQty.Substring(0, toQty.Length - 3);
            retStr = xms.addVendAgreementsMul(agr);
        }
        else//if the agreement is of type volume discount add quantity break rows with multiple input method
        {
            AgreementVO agr = new AgreementVO();
            agr.agreementCode = txtAggrCode.Text.Trim();
            agr.agreementDescr = txtAggrDescr.Text.Trim();
            agr.discntType = ddlDiscType.SelectedValue;
            agr.discntValue = ut.NullSafeInteger(txtDiscVal.Text);
            agr.isActive = "Y";
            agr.isVolumeDiscnt = "N";
            agr.lineDscntVal = 0;
            agr.lineNo = 0;
            agr.validFrom = txtValidFrom.Text;
            agr.validTo = txtValidTo.Text;
            agr.vendorID = ut.NullSafeInteger(Session["VendBillID"]);
            agr.userID = ut.NullSafeInteger(Session["UserID"]);
            agr.masterFlag = "1";
            agr.detailsFlag = "0";
            agr.fromQty = 0;
            agr.toQty = 0;
            agr.customerID = GetCustID(txtCust.Text.Trim());
            retStr = xms.addVendAgreements(agr);
        }
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage(dvAggrMainMsg, retStr, "Green");
            Session.Remove("Agreements");
            LoadAgreementGrid();
            ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "clearFields('" + dvAggrDetails.ClientID + "', '#" + dvAggrGrid.ClientID + "')", true);
        }
        else
        {
            DisplayMessage(dvAggrMainMsg, retStr, "Red");
            dvAggrDetails.Style["display"] = "block";
        }
    }

    protected void btnReload_Click(object sender, EventArgs e)
    {
        Session.Remove("Agreements");
        LoadAgreementGrid();
    }

    private int GetCustID(string custName)
    {
        int custId = 0;
        DataTable dt = (DataTable)Session["Customers"];
        DataView dv = new DataView(dt, "orgName = '" + custName + "'", "orgName", DataViewRowState.CurrentRows);
        custId = ut.NullSafeInteger(dv.ToTable().Rows[0]["orgid"]);
        return custId;
    }

    private string GetCustName(int custId)
    {
        string custName = string.Empty;
        GetCustomers();
        DataTable dt = (DataTable)Session["Customers"];
        DataView dv = new DataView(dt, "orgId = " + custId, "orgId", DataViewRowState.CurrentRows);
        custName = dv.ToTable().Rows[0]["orgName"].ToString();
        return custName;
    }

    #endregion

    #region Edit Agreement

    protected void lnkDetails_Click(object sender, EventArgs e)
    {
        int custID = GetCustID(txtCust.Text);
        var custDetails = xms.getOrgDetails(custID, string.Empty);
        List<OrgListVO> lst = ser.Deserialize<List<OrgListVO>>(custDetails);
        DataTable dt = Utility.ConvertToDataTable(lst);
        //OrgListVO o = new OrgListVO();

        lblCustName.Text = dt.Rows[0]["Name"].ToString();
        lblAddress1.Text = dt.Rows[0]["Address1"].ToString();
        lblAddress2.Text = dt.Rows[0]["Address2"].ToString();
        lblCity.Text = dt.Rows[0]["City"].ToString();
        lblState.Text = dt.Rows[0]["State"].ToString();
        lblZip.Text = dt.Rows[0]["ZipCode"].ToString();
        lblIndType.Text = dt.Rows[0]["BusinessType"].ToString();
        lblCurrency.Text = dt.Rows[0]["Currency"].ToString();
        dvAggrDetails.Style["display"] = "block";
        popCustDetails.Show();
    }

    protected void lnkEditAgreement_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnAgreementCode = (HiddenField)row.FindControl("hdnAgreementCode");

        DataTable dt = (DataTable)Session["Agreements"];
        DataView dv = new DataView(dt, "agreementCode = '" + hdnAgreementCode.Value + "'", "", DataViewRowState.CurrentRows);
        txtCust.Text = GetCustName(ut.NullSafeInteger(dv.ToTable().Rows[0]["customerID"]));
        txtAggrCode.Text = dv.ToTable().Rows[0]["agreementCode"].ToString();
        txtAggrDescr.Text = dv.ToTable().Rows[0]["agreementDescr"].ToString();
        ddlDiscType.SelectedValue = dv.ToTable().Rows[0]["discntType"].ToString();
        txtDiscVal.Text = dv.ToTable().Rows[0]["discntValue"].ToString();
        txtValidFrom.Text = Convert.ToDateTime(dv.ToTable().Rows[0]["validFrom"]).ToShortDateString();
        txtValidTo.Text = Convert.ToDateTime(dv.ToTable().Rows[0]["validTo"]).ToShortDateString();
        chkIsVolDisc.Checked = dv.ToTable().Rows[0]["isVolumeDiscnt"].ToString() == "Y" ? true : false;

        if (chkIsVolDisc.Checked)
        {
            //bind qty breaks grid
            dv.Sort = "toQty ASC";
            gvQty.DataSource = dv;
            gvQty.DataBind();
            dvQtyBreaks.Style["display"] = "block";
        }
        else
            dvQtyBreaks.Style["display"] = "none";
        ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "animateDiv('#" + dvAggrDetails.ClientID + "', '" + dvAggrDetails.ClientID + "', '" + dvAggrMsg.ClientID + "')", true);
    }

    #endregion

    #region Qty Brackets

    protected void gvQtyBreaks_RowDataBound(object sender, GridViewRowEventArgs e)
    {

    }

    private DataTable AddColumns(DataTable dt)
    {
        //dt.Columns.Add("fromQty");
        dt.Columns.Add("toQty");
        dt.Columns.Add("lineDscntVal");
        return dt;
    }

    private DataRow AddEmptyRow(DataRow dr)
    {
        dr["toQty"] = dr["lineDscntVal"] = string.Empty;
        return dr;
    }

    private void SetInitialData(DataTable dt)
    {
        DataRow dr;
        for (int i = 0; i < gvQty.Rows.Count; i++)
        {
            //TextBox txtQtyFrom = (TextBox)gvQty.Rows[i].Cells[0].FindControl("txtQtyFrom");
            TextBox txtQtyTo = (TextBox)gvQty.Rows[i].Cells[0].FindControl("txtQtyTo");
            TextBox txtDiscVal = (TextBox)gvQty.Rows[i].Cells[0].FindControl("txtDiscVal");

            dr = dt.NewRow();
            //dr["fromQty"] = txtQtyFrom.Text;
            dr["toQty"] = txtQtyTo.Text;
            dr["lineDscntVal"] = txtDiscVal.Text;
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        gvQty.DataSource = dt;
    }

    private void SetPreviousData(DataTable dt)
    {
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                //TextBox txtQtyFrom = (TextBox)gvQty.Rows[i].Cells[0].FindControl("txtQtyFrom");
                TextBox txtQtyTo = (TextBox)gvQty.Rows[i].Cells[1].FindControl("txtQtyTo");
                TextBox txtDiscVal = (TextBox)gvQty.Rows[i].Cells[2].FindControl("txtDiscVal");
                //txtQtyFrom.Text = dt.Rows[i]["fromQty"].ToString();
                txtQtyTo.Text = dt.Rows[i]["toQty"].ToString();
                txtDiscVal.Text = dt.Rows[i]["lineDscntVal"].ToString();
            }
        }
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        DataTable dt = new DataTable();
        dt = AddColumns(dt);
        SetInitialData(dt);
        DataRow dr = dt.NewRow();
        dt.Rows.Add(AddEmptyRow(dr));
        gvQty.DataSource = dt;
        gvQty.DataBind();
        SetPreviousData(dt);
        DisplayAgrAddDiv();
    }

    protected void btnDel_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((Button)sender).Parent.Parent;
        DataTable dt = new DataTable();
        dt = AddColumns(dt);
        SetInitialData(dt);
        dt.Rows.RemoveAt(row.RowIndex);
        dt.AcceptChanges();
        gvQty.DataSource = dt;
        gvQty.DataBind();
        SetPreviousData(dt);
        DisplayAgrAddDiv();
    }

    #endregion

    #region Misc

    private void DisplayMessage(HtmlGenericControl dv, string msg, string color)
    {
        dv.Style["color"] = color;
        dv.InnerHtml = msg;
    }

    private void DisplayAgrAddDiv()
    {
        dvAggrDetails.Style["display"] = "block";
        dvQtyBreaks.Style["display"] = "block";
    }

    #endregion

    #region Web Methods

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCustomers(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Customers"];
        DataView dv = new DataView(dt, "orgname LIKE '%" + prefixText + "%'", "orgname", DataViewRowState.CurrentRows);
        string[] cust = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            cust[i] = dv.ToTable().Rows[i]["orgname"].ToString();
        return cust;
    }

    #endregion
}

//if ($11('chkIsVolDisc').checked) {
//    var cnt = 0;
//    var grid = $11('<%=gvQty.ClientID %>');
//    if (grid.rows.length > 0) {
//        var inputList = grid.getElementsByTagName("input");
//        for (var i = 0; i < inputList.length; i++) {
//            if (inputList[i].value == 0 || !validateAgreementDisc(inputList[i].value)) {
//                cnt++;
//                DisplayErrFields(inputList[i]);
//            }
//        }
//        if (cnt > 0) {
//            $11('dvAggrMsg').innerHTML = 'Please enter required fields, ';
//            return false;
//        }
//    }
//}