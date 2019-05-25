using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Data.OleDb;
using System.Text;
using System.Web.Services;

public partial class Codes_PrefVend : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;
    string newPath = ("ERTemp");
    string appString = "###";
    string acceptSysOrders, acctNum, addedBy, agentName, agentPhoneNo, altContact, altPhoneno, city, comments, compCode, country,
        currency, emailFlag, expenseItem, modifiedBy, openBal, orgId, payTerm, preferagent, preference, preferredVendor, promoCode,
        qbVendId, shipAddress1, shipAddress2, shipAddress3, startDate, state, taxCode, vendorEmail, vendorId, vendorno,
        vendPhoneNo, vendStatus, vendZipCode, website, expiryDate, familyName, fax, firstName, isPreferVend, lastName, middleName,
        title, type, vend1099, vendAddress1, vendAddress2, vendAddress3, vendContact, vendDiscPercent;

    #endregion

    #region Display vendors

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserId"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                //txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this, '" + gvPrefVend.ClientID + "');");
                btnSyncWithQB.Attributes.Add("onclick", "javascript:transferToSync();");
                //lnkImportQBVend.Attributes.Add("onclick", "javascript:return showImportPop();");
                //lblOrgID.Text = Session["SOrgName"].ToString();
                hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
                BindCompCodes();
                BindVendors();
                BindVendorGrid();
                Session.Remove("dtImpQBVend");
                txtKeywordSearch.Focus();

                if (!string.IsNullOrEmpty(Session["AccountBy"].ToString()))
                    btnImportExport.Visible = false;
                else
                    btnImportExport.Visible = true;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void BindVendorGrid()
    {
        DataSet dsVend = new DataSet();
        DataTable dtVend = new DataTable();

        if (Session["Vendors"] == null)
            BindVendors();
        dsVend = (DataSet)Session["Vendors"];
        dtVend = dsVend.Tables[0];

        if ((Session["SortExpr_PrefVend"] != null) && Session["SortDir_PreVend"] != null)
        {
            DataView view = new DataView(dtVend);
            view.Sort = Session["SortExpr_PrefVend"].ToString() + " " + Session["SortDir_PreVend"].ToString();
            gvPrefVend.DataSource = view;
        }
        else
            gvPrefVend.DataSource = dtVend;

        gvPrefVend.DataBind();
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

    private void BindVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), ddlCompCodes.SelectedValue, string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataSet dsVend = new DataSet();
        dsVend.Tables.Add(Utility.ConvertToDataTable(lst));
        Session["Vendors"] = dsVend;
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("Vendors");
        Session.Remove("dsCodes");
        BindCompCodes();
        BindVendors();
        BindVendorGrid();
    }

    protected void gvPrefVend_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox chkIsPrefVend = (CheckBox)e.Row.FindControl("chkIsPrefVend");
            string isPrefVend = DataBinder.Eval(e.Row.DataItem, "isPreferVend").ToString();
            chkIsPrefVend.Checked = isPrefVend == "Y" ? true : false;
            chkIsPrefVend.Enabled = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //align columns
            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "left";
            //align columns
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_PreVend"] != null && Session["Control_PreVend"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_PreVend"].ToString());
                if (Session["SortDir_PreVend"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvPrefVend_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
            string[] arg = new string[4];
            arg = e.CommandArgument.ToString().Split(',');
            hdnPrefVendExt.Value = arg[0];
            hdnExpItemExt.Value = arg[1];
            hdnVendorID.Value = arg[2];
            hdnCityExt.Value = arg[3].Replace("~", ",");
            popAlert.Show();
        }
    }

    protected void gvPrefVend_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {

    }

    protected void ddlExpItemsMain_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindVendorGrid();
    }

    protected void ddlCompCodes_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("Vendors");
        BindVendorGrid();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_PreVend"] = lnk.ID;

        if (Session["SortDir_PreVend"] == null || Session["SortDir_PreVend"].ToString() == "Desc")
            Session["SortDir_PreVend"] = "Asc";
        else
            Session["SortDir_PreVend"] = "Desc";

        Session["SortExpr_PrefVend"] = e.CommandArgument;
        BindVendorGrid();
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

    [WebMethod]
    public static string[] searchCity(string cityname)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["VendorCities"];
        string expr = "City Like '%" + cityname + "%'";
        DataView view1 = new DataView(dt, expr, "City", DataViewRowState.CurrentRows);
        string[] arr = new string[view1.ToTable().Rows.Count];
        for (int i = 0; i < view1.ToTable().Rows.Count; i++)
            arr[i] = view1.ToTable().Rows[i]["City"].ToString();
        return arr;
    }

    #endregion

    #region Edit Vendor

    protected void AddNewVend(object sender, EventArgs e)
    {
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvErrMsg');");
        txtAgentPh.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtAgentPh', 'dvErrMsg');");
        txtVendAltPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtVendAltPhone', 'dvErrMsg');");
        btnSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendor();");
        dvErrMsg.InnerHtml = string.Empty;
        lblHVend.Text = "Add Vendor Details";
        dvSysOrders.Style["display"] = "none";
        Session.Remove("EditVend");
        ClearFields();
        BindStatesAndCountry();
        BindCurrencyAndPayTerms();
        btnDelete.Visible = false;
        btnApprove.Visible = false;
        btnReject.Visible = false;
        txtVendZip.Attributes.Add("readonly", "readonly");

        //Avoid normal users check IsPreferVend option
        if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
            chkIsPrefVend.Enabled = true;
        else
            chkIsPrefVend.Enabled = false;
        //Avoid normal users check IsPreferVend option

        txtVendName.Focus();
        popAddVendor.Show();
    }

    protected void EditVendor(object sender, EventArgs e)
    {
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvErrMsg');");
        txtAgentPh.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtAgentPh', 'dvErrMsg');");
        txtVendAltPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtVendAltPhone', 'dvErrMsg');");
        btnSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendor();");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblCity = (Label)row.FindControl("lblCity");
        Label lblPrefVend = (Label)row.FindControl("lblPrefVend");
        HiddenField hdnExpItem = (HiddenField)row.FindControl("hdnExpItem");
        HiddenField hdnVendID = (HiddenField)row.FindControl("hdnVendID");
        DataSet dsVend = (DataSet)Session["Vendors"];
        string expr = "ExpenseItem = '" + hdnExpItem.Value + "' and City = '" + lblCity.Text + "' and PreferredVendor = '" + lblPrefVend.Text + "'";
        DataView view = new DataView(dsVend.Tables[0], expr, "PreferredVendor", DataViewRowState.CurrentRows);
        DataTable dtVend = view.ToTable();
        Session["dtVend_Temp"] = dtVend;
        hdnVendorID.Value = hdnVendID.Value;
        BindStatesAndCountry();
        BindCurrencyAndPayTerms();
        txtVendName.Text = lblPrefVend.Text;
        txtVendContact.Text = dtVend.Rows[0]["VendContact"].ToString();
        txtPhone.Text = dtVend.Rows[0]["VendPhoneNo"].ToString();
        txtVendAddr1.Text = dtVend.Rows[0]["VendAddress1"].ToString();
        txtVendAddr2.Text = dtVend.Rows[0]["VendAddress2"].ToString();
        txtVendAddr3.Text = dtVend.Rows[0]["VendAddress3"].ToString();
        try
        {
            if (!string.IsNullOrEmpty(dtVend.Rows[0]["country"].ToString()))
                ddlCountry.SelectedValue = dtVend.Rows[0]["country"].ToString();
            if (!string.IsNullOrEmpty(dtVend.Rows[0]["state"].ToString()))
                ddlRgnCode.SelectedValue = dtVend.Rows[0]["state"].ToString();
        }
        catch { }
        GetCitiesByRegion();
        txtCities.Text = lblCity.Text;
        //txtCities.Enabled = false;
        txtVendZip.Text = dtVend.Rows[0]["VendZipCode"].ToString();
        txtVendZip.Attributes.Add("readonly", "readonly");

        //ddlVendPref.SelectedValue = dtVend.Rows[0]["Preference"].ToString();
        txtPromoCode.Text = dtVend.Rows[0]["promoCode"].ToString();
        txtVendDisc.Text = dtVend.Rows[0]["vendDiscPercent"].ToString();
        txtStartDate.Text = dtVend.Rows[0]["startDate"].ToString();
        txtExpiryDate.Text = dtVend.Rows[0]["expiryDate"].ToString();
        txtAgent.Text = dtVend.Rows[0]["PreferAgent"].ToString();
        txtAgentName.Text = dtVend.Rows[0]["AgentName"].ToString();
        txtAgentPh.Text = dtVend.Rows[0]["AgentPhoneNo"].ToString();
        ddlVendTitle.SelectedValue = dtVend.Rows[0]["title"].ToString() == string.Empty ? "0" : dtVend.Rows[0]["title"].ToString();
        txtVendFirstName.Text = dtVend.Rows[0]["firstName"].ToString();
        txtVendMidName.Text = dtVend.Rows[0]["middleName"].ToString();
        txtVendLastName.Text = dtVend.Rows[0]["lastName"].ToString();
        txtVendAccNum.Text = dtVend.Rows[0]["acctNum"].ToString();
        try
        {
            ddlPayTerms.SelectedValue = dtVend.Rows[0]["payTerm"].ToString() == string.Empty ? "0" : dtVend.Rows[0]["payTerm"].ToString();
        }
        catch
        {
            ddlPayTerms.SelectedValue = "0";
        }
        txtVendBalance.Text = dtVend.Rows[0]["openBal"].ToString();
        ddlVendCurrency.SelectedValue = dtVend.Rows[0]["currency"].ToString() == string.Empty ? "0" : dtVend.Rows[0]["currency"].ToString();
        txtVendTaxCode.Text = dtVend.Rows[0]["taxCode"].ToString();
        txtVendAltContact.Text = dtVend.Rows[0]["altContact"].ToString();
        txtVendAltPhone.Text = dtVend.Rows[0]["altPhoneno"].ToString();
        txt1099.Text = dtVend.Rows[0]["vend1099"].ToString();
        hdnQBVendID.Value = dtVend.Rows[0]["qbVendId"].ToString();

        lblVendNo.Text = dtVend.Rows[0]["vendorno"].ToString();
        string strIsPrefVend = dtVend.Rows[0]["isPreferVend"].ToString();
        chkIsPrefVend.Checked = string.IsNullOrEmpty(strIsPrefVend) ? false : (strIsPrefVend == "N" ? false : true);

        //Avoid normal users check IsPreferVend option
        if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
            chkIsPrefVend.Enabled = true;
        else
            chkIsPrefVend.Enabled = false;
        //Avoid normal users check IsPreferVend option

        if (dtVend.Rows[0]["acceptSysOrders"].ToString() == "1")
        {
            chkSysOrders.Checked = true;
            dvSysOrders.Style["display"] = "block";
            if (dtVend.Rows[0]["EmailFlag"].ToString() == "1")
                rblEmail.SelectedIndex = 0;
            else
                rblEmail.SelectedIndex = 1;
            txtEmailFax.Text = dtVend.Rows[0]["VendorEmail"].ToString();
        }
        else
        {
            dvSysOrders.Style["display"] = "none";
            chkSysOrders.Checked = false;
            txtEmailFax.Text = string.Empty;
        }

        hdnPrefVendExt.Value = lblPrefVend.Text;
        hdnExpItemExt.Value = hdnExpItem.Value;
        hdnCityExt.Value = lblCity.Text;
        Session["EditVend"] = "Y";
        lblHVend.Text = "Edit Vendor Details";
        dvErrMsg.InnerHtml = string.Empty;
        btnDelete.Visible = true;
        btnApprove.Visible = false;
        btnReject.Visible = false;
        popAddVendor.Show();
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

        DataTable dtC = (DataTable)Session["dsCodes"];
        DataView dvC = new DataView(dtC, "CodeID = 'ERCOUNTRYCD'", "CodeKey", DataViewRowState.CurrentRows);
        ddlCountry.DataSource = dvC;
        ddlCountry.DataBind();
    }

    private void BindCurrencyAndPayTerms()
    {
        //LOAD CURRENCY
        string currencyData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "CURRENCY");
        List<CodeValueVO> currency = ser.Deserialize<List<CodeValueVO>>(currencyData);
        ddlVendCurrency.DataSource = currency;
        ddlVendCurrency.DataBind();
        ddlVendCurrency.Items.Insert(0, "Please Select");
        ddlVendCurrency.Items.FindByText("Please Select").Value = "0";

        //LOAD PAYMENT TERMS
        string strPayTerm = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "PAYTERMS");
        List<CodeValueVO> lstPayTerm = ser.Deserialize<List<CodeValueVO>>(strPayTerm);
        ddlPayTerms.DataSource = lstPayTerm;
        ddlPayTerms.DataBind();
        ddlPayTerms.Items.Insert(0, "Please Select");
        ddlPayTerms.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        GetCitiesByRegion();
        //txtCities.Text = string.Empty;
        txtVendZip.Text = string.Empty;
        lblVendNo.Text = hdnVendCode.Value;
        txtCities.Focus();
        popAddVendor.Show();
    }

    private void GetCitiesByRegion()
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
    }

    private string SendVendDetails(int type)
    {
        //split city and zipcode
        string city = string.Empty;
        if (!string.IsNullOrEmpty(txtCities.Text))
        {
            if (txtCities.Text.Contains('-'))
            {
                string[] arrCity = txtCities.Text.Split('-');
                city = arrCity[0];
            }
            else
                city = txtCities.Text;
        }
        //split city and zipcode

        VendorsVO vend = new VendorsVO();
        vend.acceptSysOrders = chkSysOrders.Checked == true ? 1 : 0;
        vend.acctNum = txtVendAccNum.Text;
        vend.addedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.agentName = txtAgentName.Text;
        vend.agentPhoneNo = txtAgentPh.Text;
        vend.altContact = txtVendAltContact.Text;
        vend.altPhoneno = txtVendAltPhone.Text;
        vend.city = city;
        vend.comments = string.Empty;
        vend.compCode = ddlCompCodes.SelectedValue;
        vend.country = ddlCountry.SelectedValue;
        vend.currency = ddlVendCurrency.SelectedValue == "0" ? string.Empty : ddlVendCurrency.SelectedValue;

        if (chkSysOrders.Checked)
        {
            vend.emailFlag = rblEmail.SelectedIndex == 0 ? 1 : 0;
            if (rblEmail.SelectedIndex == 0)
            {
                vend.vendorEmail = txtEmailFax.Text;
                vend.fax = string.Empty;
            }
            else if (rblEmail.SelectedIndex == 1)
            {
                vend.fax = txtEmailFax.Text;
                vend.vendorEmail = string.Empty;
            }
        }
        else
        {
            vend.emailFlag = 0;
            vend.fax = string.Empty;
            vend.vendorEmail = string.Empty;
        }

        vend.expenseItem = string.Empty;
        vend.expiryDate = txtExpiryDate.Text;
        vend.familyName = "";
        vend.firstName = txtVendFirstName.Text;
        vend.isPreferVend = chkIsPrefVend.Checked ? "Y" : "N";
        vend.lastName = txtVendLastName.Text;
        vend.middleName = txtVendMidName.Text;
        vend.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.openBal = txtVendBalance.Text;
        vend.orgId = Session["OrgID"].ToString();
        vend.payTerm = ddlPayTerms.SelectedValue == "0" ? string.Empty : ddlPayTerms.SelectedValue;
        vend.preferagent = txtAgent.Text;
        vend.preference = string.Empty;
        vend.preferredVendor = txtVendName.Text;
        vend.promoCode = txtPromoCode.Text;
        vend.shipAddress1 = string.Empty;
        vend.shipAddress2 = string.Empty;
        vend.shipAddress3 = string.Empty;
        vend.startDate = txtStartDate.Text;
        vend.state = ddlRgnCode.SelectedValue == "0" ? string.Empty : ddlRgnCode.SelectedValue;
        vend.taxCode = txtVendTaxCode.Text;
        vend.title = (ddlVendTitle.SelectedValue == "0" ? string.Empty : ddlVendTitle.SelectedValue);
        vend.type = type;
        vend.vend1099 = txt1099.Text;
        vend.vendAddress1 = txtVendAddr1.Text;
        vend.vendAddress2 = txtVendAddr2.Text;
        vend.vendAddress3 = txtVendAddr3.Text;
        vend.vendContact = txtVendContact.Text;
        vend.vendDiscPercent = ut.NullSafeInteger(txtVendDisc.Text);
        if (type == 1)
        {
            vend.vendorId = "0";
            vend.qbVendId = 0;
        }
        else
        {
            vend.vendorId = hdnVendorID.Value;
            vend.qbVendId = ut.NullSafeInteger(hdnQBVendID.Value);
        }
        vend.vendorno = lblVendNo.Text;
        vend.vendPhoneNo = txtPhone.Text;
        vend.vendStatus = "";
        vend.vendZipCode = txtVendZip.Text;
        vend.website = txtUrl.Text;
        return xms.addPreferredVend(vend);
    }

    protected void SaveVendor(object sender, EventArgs e)
    {
        bool update = false;
        if (Session["dtVend_Temp"] != null)
        {
            DataTable dtVend = (DataTable)Session["dtVend_Temp"];
            if (txtCities.Text != dtVend.Rows[0]["City"].ToString())
                update = true;
            if (txtVendName.Text != dtVend.Rows[0]["preferredVendor"].ToString())
                update = true;
            if (txtVendContact.Text != dtVend.Rows[0]["VendContact"].ToString())
                update = true;
            if (txtPhone.Text != dtVend.Rows[0]["VendPhoneNo"].ToString())
                update = true;
            if (txtVendAddr1.Text != dtVend.Rows[0]["VendAddress1"].ToString())
                update = true;
            if (txtVendAddr2.Text != dtVend.Rows[0]["VendAddress2"].ToString())
                update = true;
            if (txtVendAddr3.Text != dtVend.Rows[0]["VendAddress3"].ToString())
                update = true;
            if (txtVendZip.Text != dtVend.Rows[0]["VendZipCode"].ToString())
                update = true;
            //if (ddlVendPref.SelectedValue != dtVend.Rows[0]["Preference"].ToString())
            //    update = true;
            if (txtPromoCode.Text != dtVend.Rows[0]["promoCode"].ToString())
                update = true;
            if (txtVendDisc.Text != dtVend.Rows[0]["vendDiscPercent"].ToString())
                update = true;
            if (txtStartDate.Text != dtVend.Rows[0]["startDate"].ToString())
                update = true;
            if (txtExpiryDate.Text != dtVend.Rows[0]["expiryDate"].ToString())
                update = true;
            if (txtAgent.Text != dtVend.Rows[0]["PreferAgent"].ToString())
                update = true;
            if (txtAgentName.Text != dtVend.Rows[0]["AgentName"].ToString())
                update = true;
            if (txtAgentPh.Text != dtVend.Rows[0]["AgentPhoneNo"].ToString())
                update = true;
            string acceptSysOrders = chkSysOrders.Checked == true ? "1" : "0";
            if (acceptSysOrders != dtVend.Rows[0]["acceptSysOrders"].ToString())
                update = true;
            string emailflag = rblEmail.SelectedIndex == 0 ? "1" : "0";
            if (emailflag != dtVend.Rows[0]["EmailFlag"].ToString())
                update = true;
            if (txtEmailFax.Text != dtVend.Rows[0]["VendorEmail"].ToString())
                update = true;
            if (lblVendNo.Text != dtVend.Rows[0]["vendorno"].ToString())
                update = true;
            if (lblVendNo.Text != dtVend.Rows[0]["vendorno"].ToString())
                update = true;
            string isPreferVend = chkIsPrefVend.Checked ? "Y" : "N";
            if (isPreferVend != dtVend.Rows[0]["isPreferVend"].ToString())
                update = true;
        }
        else
        {
            update = true;
            Session["NwPrefVend"] = "1";
        }

        if (update == true)
        {
            string retStr = string.Empty;
            if (Session["EditVend"] == null)
                retStr = SendVendDetails(1);
            else
                retStr = SendVendDetails(2);

            if (retStr.ToLower().Contains("succes"))
            {
                Session.Remove("Vendors");
                BindVendorGrid();
                ClearFields();
                Session.Remove("PreferredVendorList");
                if (Session["NwPrefVend"] == "1")
                {
                    dvErrMsg.InnerHtml = retStr;
                    dvErrMsg.Style["color"] = "Green";
                    popAddVendor.Show();
                    popNewAlert.Show();
                    Session.Remove("NwPrefVend");
                }
                else
                {
                    dvMainMsg.InnerHtml = retStr;
                    dvMainMsg.Style["color"] = "Green";
                    popAddVendor.Hide();
                    Session.Remove("dtVend_Temp");
                }
            }
            else
            {
                dvErrMsg.Style["color"] = "Red";
                dvErrMsg.InnerHtml = retStr;
                popAddVendor.Show();
            }
        }
        else
        {
            dvErrMsg.Style["color"] = "Red";
            dvErrMsg.InnerHtml = "No changes to update!";
            popAddVendor.Show();
        }
    }

    protected void DeleteVendor(object sender, EventArgs e)
    {
        popAddVendor.Show();
        popAlert.Show();
    }

    private void ClearFields()
    {
        chkSysOrders.Checked = false;
        dvSysOrders.Style["display"] = "none";
        txtEmailFax.Text = string.Empty;
        txtCities.Enabled = true;
        txtCities.Text = "All";
        txtVendName.Text = string.Empty;
        txtVendContact.Text = string.Empty;
        txtPhone.Text = string.Empty;
        txtVendAddr1.Text = string.Empty;
        txtVendAddr2.Text = string.Empty;
        txtVendAddr3.Text = string.Empty;
        txtVendZip.Text = string.Empty;
        txtPromoCode.Text = string.Empty;
        txtVendDisc.Text = "0";
        txtStartDate.Text = string.Empty;
        txtExpiryDate.Text = string.Empty;
        //ddlVendPref.SelectedValue = "1";
        txtAgent.Text = string.Empty;
        txtAgentName.Text = string.Empty;
        txtAgentPh.Text = string.Empty;
        lblVendNo.Text = string.Empty;
    }

    protected void CreateNew(object sender, EventArgs e)
    {
        dvErrMsg.InnerHtml = string.Empty;
        //dvEmail.Style["display"] = "none";
        //Session.Remove("EditVend");
        //BindCodeValues(ddlExpItem);
        btnDelete.Visible = false;
        popAddVendor.Show();
    }

    protected void RetainMainDialog(object sender, EventArgs e)
    {
        popAddVendor.Hide();
        popNewAlert.Hide();
    }

    #endregion

    #region Delete Vendor

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        VendorsVO vend = new VendorsVO();
        vend.addedBy = 0;
        vend.agentName = string.Empty;
        vend.agentPhoneNo = string.Empty;
        vend.city = hdnCityExt.Value;
        vend.compCode = ddlCompCodes.SelectedValue;
        vend.expenseItem = hdnExpItemExt.Value;
        vend.modifiedBy = 0;
        vend.orgId = Session["OrgID"].ToString();
        vend.preferagent = string.Empty;
        vend.preference = string.Empty;
        vend.preferredVendor = hdnPrefVendExt.Value;
        vend.type = 3;
        vend.vendAddress1 = string.Empty;
        vend.vendAddress2 = string.Empty;
        vend.vendAddress3 = string.Empty;
        vend.vendContact = string.Empty;
        vend.vendorId = "0";
        vend.vendPhoneNo = string.Empty;
        vend.vendZipCode = string.Empty;
        vend.vendorno = hdnVendorID.Value;
        string retStr = xms.addPreferredVend(vend);
        if (!retStr.ToLower().Contains("succes"))
        {
            dvErrMsg.Style["color"] = "Red";
            dvErrMsg.InnerHtml = retStr;
        }
        else
        {
            Session.Remove("Vendors");
            BindVendorGrid();
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = retStr;
        }
        popAlert.Hide();
    }

    #endregion

    #region Upload Vendor Data

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        btnDisplayData.Attributes.Add("onclick", "javascript:return  CheckForFile();");
        dvUploadErr.InnerHtml = string.Empty;
        dvUpload.Style["display"] = "none";
        dvDisplay.Style["display"] = "block";
        //btnUploadVendors.Visible = false;
        //btnClearData.Visible = false;
        //btnDisplayData.Visible = true;
        dvFailurMsg.InnerHtml = string.Empty;
        dvUploadErr.Style["color"] = "Red";
        dvUploadErr.InnerHtml = "Please browse and select a file of type .xls or .xlsx";
        Session.Remove("dtUpd_Vend");
        gvImpVend.DataBind();
        popUpload.Show();
    }

    protected void UploadVendors(object sender, EventArgs e)
    {
        ValidateVendorData((DataTable)Session["dtUpd_Vend"]);
    }

    protected void btnDisplayData_Click(object sender, EventArgs e)
    {
        dvUpload.Style["display"] = "block";
        dvDisplay.Style["display"] = "none";
        //btnUploadVendors.Visible = true;
        //btnClearData.Visible = true;
        //btnDisplayData.Visible = false;
        dvUploadErr.InnerHtml = string.Empty;
        string fileExtension = Path.GetExtension(fupdVend.PostedFile.FileName);
        if (fileExtension == ".xls" || fileExtension == ".xlsx")
        {
            DataTable dtUpd = GetUploadedData();
            //Add extra column in the datatable to show failure messages if any
            if (!(dtUpd.Columns.Contains("FailureMessage")))
                dtUpd.Columns.Add("FailureMessage");
            Session["dtUpd_Vend"] = dtUpd;
            dtUpd.Columns["VENDORDISCOUNT(%)"].ColumnName = "VENDORDISCOUNT";
            dtUpd.Columns["Mr#/Mrs##"].ColumnName = "TITLE";
            //dtUpd.Columns["ALTCONTACT"].ColumnName = "ALTCONTACT";
            //dtUpd.Columns["ALTPHONE"].ColumnName = "ALTPHONE";
            gvImpVend.DataSource = dtUpd;
            gvImpVend.DataBind();
            gvImpVend.Columns[0].Visible = false;
        }
        popUpload.Show();
    }

    protected void btnClearData_Click(object sender, EventArgs e)
    {
        Session.Remove("dtUpd_Vend");
        gvImpVend.DataBind();
        popUpload.Show();
        dvUpload.Style["display"] = "none";
        dvDisplay.Style["display"] = "block";
        //btnUploadVendors.Visible = false;
        //btnClearData.Visible = false;
        //btnDisplayData.Visible = true;
        dvUploadErr.InnerHtml = string.Empty;
    }

    private DataTable GetUploadedData()
    {
        string connectionString = "";
        string fileName = Path.GetFileName(fupdVend.PostedFile.FileName);
        string fileExtension = Path.GetExtension(fupdVend.PostedFile.FileName);
        string path = Server.MapPath("..");
        string fileLocation = path + "\\" + newPath + "\\" + fileName;
        fupdVend.SaveAs(fileLocation);

        //Check whether file extension is xls or xslx
        if (fileExtension == ".xls")
            connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
        else if (fileExtension == ".xlsx")
            connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";

        //Create OleDB Connection and OleDb Command
        OleDbConnection con = new OleDbConnection(connectionString);
        OleDbCommand cmd = new OleDbCommand();
        cmd.CommandType = System.Data.CommandType.Text;
        cmd.Connection = con;
        OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
        DataTable dtExcelRecords = new DataTable();
        con.Open();
        DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
        cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
        dAdapter.SelectCommand = cmd;
        dAdapter.Fill(dtExcelRecords);
        con.Close();
        System.IO.File.Delete(fileLocation);
        return dtExcelRecords;
    }

    private void ValidateVendorData(DataTable dtUpd)
    {
        bool oneOrg = true;
        bool validComp = true;
        bool success = false;
        DataTable dtFailed = new DataTable();
        int count = 0;

        dtFailed = dtUpd.Clone();
        if (oneOrg)
        {
            if (validComp)
            {
                if (dtUpd.Rows.Count > 0)
                {
                    for (int i = 0; i < dtUpd.Rows.Count; i++)
                    {
                        acceptSysOrders += "0" + appString;
                        acctNum += " " + appString;
                        addedBy += ut.NullSafeInteger(Session["UserID"]) + appString;
                        agentName += (string.IsNullOrEmpty(dtUpd.Rows[i]["AGENTNAME"].ToString()) ? " " : dtUpd.Rows[i]["AGENTNAME"].ToString()) + appString;
                        agentPhoneNo += (string.IsNullOrEmpty(dtUpd.Rows[i]["AGENTPHONE"].ToString()) ? " " : dtUpd.Rows[i]["AGENTPHONE"].ToString()) + appString;
                        altContact += (string.IsNullOrEmpty(dtUpd.Rows[i]["ALT#CONTACT"].ToString()) ? " " : dtUpd.Rows[i]["ALT#CONTACT"].ToString()) + appString;
                        altPhoneno += (string.IsNullOrEmpty(dtUpd.Rows[i]["ALT#PHONE"].ToString()) ? " " : dtUpd.Rows[i]["ALT#PHONE"].ToString()) + appString;
                        city += (string.IsNullOrEmpty(dtUpd.Rows[i]["CITY"].ToString()) ? " " : dtUpd.Rows[i]["CITY"].ToString()) + appString;
                        comments += " " + appString;
                        compCode += ddlCompCodes.SelectedValue + appString;
                        country += (string.IsNullOrEmpty(dtUpd.Rows[i]["COUNTRY"].ToString()) ? " " : dtUpd.Rows[i]["COUNTRY"].ToString()) + appString;
                        currency += (string.IsNullOrEmpty(dtUpd.Rows[i]["CURRENCY"].ToString()) ? " " : dtUpd.Rows[i]["CURRENCY"].ToString()) + appString;
                        emailFlag += "0" + appString;
                        expenseItem += " " + appString;
                        expiryDate += (string.IsNullOrEmpty(dtUpd.Rows[i]["EXPIRYDATE"].ToString()) ? " " : dtUpd.Rows[i]["EXPIRYDATE"].ToString()) + appString;
                        familyName += " " + appString;
                        fax += (string.IsNullOrEmpty(dtUpd.Rows[i]["FAX"].ToString()) ? " " : dtUpd.Rows[i]["FAX"].ToString()) + appString;
                        firstName += (string.IsNullOrEmpty(dtUpd.Rows[i]["FIRSTNAME"].ToString()) ? " " : dtUpd.Rows[i]["FIRSTNAME"].ToString()) + appString;
                        isPreferVend += "Y" + appString;
                        lastName += (string.IsNullOrEmpty(dtUpd.Rows[i]["LASTNAME"].ToString()) ? " " : dtUpd.Rows[i]["LASTNAME"].ToString()) + appString;
                        middleName += (string.IsNullOrEmpty(dtUpd.Rows[i]["MIDDLENAME"].ToString()) ? " " : dtUpd.Rows[i]["MIDDLENAME"].ToString()) + appString;
                        modifiedBy += ut.NullSafeInteger(Session["UserID"]) + appString;
                        openBal += " " + appString;
                        orgId += ut.NullSafeInteger(Session["OrgId"]) + appString;
                        payTerm += (string.IsNullOrEmpty(dtUpd.Rows[i]["PAYTERMS"].ToString()) ? " " : dtUpd.Rows[i]["PAYTERMS"].ToString()) + appString;
                        preferagent += (string.IsNullOrEmpty(dtUpd.Rows[i]["AGENT"].ToString()) ? " " : dtUpd.Rows[i]["AGENT"].ToString()) + appString;
                        preference += " " + appString;
                        preferredVendor += (string.IsNullOrEmpty(dtUpd.Rows[i]["VENDOR"].ToString()) ? " " : dtUpd.Rows[i]["VENDOR"].ToString()) + appString;
                        promoCode += (string.IsNullOrEmpty(dtUpd.Rows[i]["PROMOCODE"].ToString()) ? " " : dtUpd.Rows[i]["PROMOCODE"].ToString()) + appString;
                        qbVendId += "0" + appString;
                        shipAddress1 += (string.IsNullOrEmpty(dtUpd.Rows[i]["SHIPADDRESS1"].ToString()) ? " " : dtUpd.Rows[i]["SHIPADDRESS1"].ToString()) + appString;
                        shipAddress2 += (string.IsNullOrEmpty(dtUpd.Rows[i]["SHIPADDRESS2"].ToString()) ? " " : dtUpd.Rows[i]["SHIPADDRESS2"].ToString()) + appString;
                        shipAddress3 += (string.IsNullOrEmpty(dtUpd.Rows[i]["SHIPADDRESS3"].ToString()) ? " " : dtUpd.Rows[i]["SHIPADDRESS3"].ToString()) + appString;
                        startDate += (string.IsNullOrEmpty(dtUpd.Rows[i]["STARTDATE"].ToString()) ? " " : dtUpd.Rows[i]["STARTDATE"].ToString()) + appString;
                        state += (string.IsNullOrEmpty(dtUpd.Rows[i]["STATE"].ToString()) ? " " : dtUpd.Rows[i]["STATE"].ToString()) + appString;
                        taxCode += (string.IsNullOrEmpty(dtUpd.Rows[i]["TAXCODE"].ToString()) ? " " : dtUpd.Rows[i]["TAXCODE"].ToString()) + appString;
                        title += (string.IsNullOrEmpty(dtUpd.Rows[i]["TITLE"].ToString()) ? " " : dtUpd.Rows[i]["TITLE"].ToString()) + appString;
                        type += "1" + appString;
                        vend1099 += (string.IsNullOrEmpty(dtUpd.Rows[i]["1099"].ToString()) ? " " : dtUpd.Rows[i]["1099"].ToString()) + appString;
                        vendAddress1 += (string.IsNullOrEmpty(dtUpd.Rows[i]["ADDRESS1"].ToString()) ? " " : dtUpd.Rows[i]["ADDRESS1"].ToString()) + appString;
                        vendAddress2 += (string.IsNullOrEmpty(dtUpd.Rows[i]["ADDRESS2"].ToString()) ? " " : dtUpd.Rows[i]["ADDRESS2"].ToString()) + appString;
                        vendAddress3 += (string.IsNullOrEmpty(dtUpd.Rows[i]["ADDRESS3"].ToString()) ? " " : dtUpd.Rows[i]["ADDRESS3"].ToString()) + appString;
                        vendContact += (string.IsNullOrEmpty(dtUpd.Rows[i]["VENDORCONTACT"].ToString()) ? " " : dtUpd.Rows[i]["VENDORCONTACT"].ToString()) + appString;
                        vendDiscPercent += (string.IsNullOrEmpty(dtUpd.Rows[i]["VENDORDISCOUNT"].ToString()) ? "0" : dtUpd.Rows[i]["VENDORDISCOUNT"].ToString()) + appString;
                        vendorEmail += (string.IsNullOrEmpty(dtUpd.Rows[i]["EMAIL"].ToString()) ? " " : dtUpd.Rows[i]["EMAIL"].ToString()) + appString;
                        vendorId += "0" + appString;
                        vendorno += " " + appString;
                        vendPhoneNo += (string.IsNullOrEmpty(dtUpd.Rows[i]["VENDORPHONE"].ToString()) ? " " : dtUpd.Rows[i]["VENDORPHONE"].ToString()) + appString;
                        vendStatus += " " + appString;
                        vendZipCode += (string.IsNullOrEmpty(dtUpd.Rows[i]["ZIPCODE"].ToString()) ? " " : dtUpd.Rows[i]["ZIPCODE"].ToString()) + appString;
                        website += (string.IsNullOrEmpty(dtUpd.Rows[i]["URL"].ToString()) ? " " : dtUpd.Rows[i]["URL"].ToString()) + appString;
                        count++;
                    }
                    VendorsMulVO vend = new VendorsMulVO();
                    vend.acceptSysOrders = acceptSysOrders.Substring(0, acceptSysOrders.Length - 3);
                    vend.acctNum = acctNum.Substring(0, acctNum.Length - 3);
                    vend.addedBy = addedBy.Substring(0, addedBy.Length - 3);
                    vend.agentName = agentName.Substring(0, agentName.Length - 3);
                    vend.agentPhoneNo = agentPhoneNo.Substring(0, agentPhoneNo.Length - 3);
                    vend.altContact = altContact.Substring(0, altContact.Length - 3);
                    vend.altPhoneno = altPhoneno.Substring(0, altPhoneno.Length - 3);
                    vend.city = city.Substring(0, city.Length - 3);
                    vend.comments = comments.Substring(0, comments.Length - 3);
                    vend.compCode = compCode.Substring(0, compCode.Length - 3);
                    vend.country = country.Substring(0, country.Length - 3);
                    vend.currency = currency.Substring(0, currency.Length - 3);
                    vend.emailFlag = emailFlag.Substring(0, emailFlag.Length - 3);
                    vend.expenseItem = expenseItem.Substring(0, expenseItem.Length - 3);
                    vend.expiryDate = expiryDate.Substring(0, expiryDate.Length - 3);
                    vend.familyName = familyName.Substring(0, familyName.Length - 3);
                    vend.fax = fax.Substring(0, fax.Length - 3);
                    vend.firstName = firstName.Substring(0, firstName.Length - 3);
                    vend.isPreferVend = isPreferVend.Substring(0, isPreferVend.Length - 3);
                    vend.lastName = lastName.Substring(0, lastName.Length - 3);
                    vend.middleName = middleName.Substring(0, middleName.Length - 3);
                    vend.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
                    vend.openBal = openBal.Substring(0, openBal.Length - 3);
                    vend.orgId = orgId.Substring(0, orgId.Length - 3);
                    vend.payTerm = payTerm.Substring(0, payTerm.Length - 3);
                    vend.preferagent = preferagent.Substring(0, preferagent.Length - 3);
                    vend.preference = preference.Substring(0, preference.Length - 3);
                    vend.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
                    vend.promoCode = promoCode.Substring(0, promoCode.Length - 3);
                    vend.qbVendId = qbVendId.Substring(0, qbVendId.Length - 3);
                    vend.shipAddress1 = shipAddress1.Substring(0, shipAddress1.Length - 3);
                    vend.shipAddress2 = shipAddress2.Substring(0, shipAddress2.Length - 3);
                    vend.shipAddress3 = shipAddress3.Substring(0, shipAddress3.Length - 3);
                    vend.startDate = startDate.Substring(0, startDate.Length - 3);
                    vend.state = state.Substring(0, state.Length - 3);
                    vend.taxCode = taxCode.Substring(0, taxCode.Length - 3);
                    vend.title = title.Substring(0, title.Length - 3);
                    vend.type = type.Substring(0, type.Length - 3);
                    vend.vend1099 = vend1099.Substring(0, vend1099.Length - 3);
                    vend.vendAddress1 = vendAddress1.Substring(0, vendAddress1.Length - 3);
                    vend.vendAddress2 = vendAddress2.Substring(0, vendAddress2.Length - 3);
                    vend.vendAddress3 = vendAddress3.Substring(0, vendAddress3.Length - 3);
                    vend.vendContact = vendContact.Substring(0, vendContact.Length - 3);
                    vend.vendDiscPercent = vendDiscPercent.Substring(0, vendDiscPercent.Length - 3);
                    vend.vendorEmail = vendorEmail.Substring(0, vendorEmail.Length - 3);
                    vend.vendorId = vendorId.Substring(0, vendorId.Length - 3);
                    vend.vendorno = vendorno.Substring(0, vendorno.Length - 3);
                    vend.vendPhoneNo = vendPhoneNo.Substring(0, vendPhoneNo.Length - 3);
                    vend.vendStatus = vendStatus.Substring(0, vendStatus.Length - 3);
                    vend.vendZipCode = vendZipCode.Substring(0, vendZipCode.Length - 3);
                    vend.website = website.Substring(0, website.Length - 3);
                    string retStr = xms.addPreferredVendMul(vend);
                }
            }
            if (dtFailed.Rows.Count > 0)
            {
                dvUploadErr.Style["color"] = "Red";
                dvUploadErr.InnerHtml = "Data upload is not completely successfull. Please check below for failed data.";
                gvImpVend.DataSource = dtFailed;
                gvImpVend.DataBind();
                gvImpVend.Columns[0].Visible = true;
                popUpload.Show();
            }
            else
            {
                Session.Remove("dtUpd_Exp");
                Session.Remove("Vendors");
                dvMainMsg.Style["color"] = "Green";
                dvMainMsg.InnerHtml = count + "Vendors data uploaded successfully";
                BindVendorGrid();
                popUpload.Hide();
            }
        }
    }

    #endregion

    #region Vendor Approval

    protected void btnApprove_Click(object sender, EventArgs e)
    {

    }

    protected void btnReject_Click(object sender, EventArgs e)
    {

    }

    #endregion

    #region Import/Export QB Vendors Data

    protected void fupdQBVendors_UploadedComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupImpExpQBVend.PostedFile.FileName);
        int len = fupImpExpQBVend.PostedFile.ContentLength;
        if (ext.ToLower() == ".xls" || ext.ToLower() == ".xlsx" || ext.ToLower() == ".csv")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2097152 (2MB), need to be 10485760 (10MB)
            {
                string connectionString = "";
                string fileName = Path.GetFileName(fupImpExpQBVend.PostedFile.FileName);
                string fileExtension = Path.GetExtension(fupImpExpQBVend.PostedFile.FileName);
                string path = Server.MapPath("..");
                string fileLocation = path + "\\" + newPath + "\\" + fileName;
                fupImpExpQBVend.SaveAs(fileLocation);

                //Check whether file extension is xls or xslx
                if (fileExtension == ".xls")
                    connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
                else if (fileExtension == ".xlsx")
                    connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";
                //Create OleDB Connection and OleDb Command

                OleDbConnection con = new OleDbConnection(connectionString);
                OleDbCommand cmd = new OleDbCommand();
                cmd.CommandType = System.Data.CommandType.Text;
                cmd.Connection = con;
                OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
                DataTable dtExcelRecords = new DataTable();
                con.Open();
                DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
                string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
                cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
                dAdapter.SelectCommand = cmd;
                dAdapter.Fill(dtExcelRecords);
                con.Close();
                System.IO.File.Delete(fileLocation);
                Session["dtImpQBVend"] = dtExcelRecords;
            }
            else
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
        }
        else
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of type .csv, .xls or .xlsx');", true);
    }

    private void ImportQBVendors()
    {
        DataTable dtUpd = (DataTable)Session["dtImpQBVend"];
        dtUpd.Columns["Mr#/Ms#/###"].ColumnName = "TITLE";
        DataTable dtFailed = new DataTable();
        int count = 0;
        dtFailed = dtUpd.Clone();

        if (dtUpd.Rows.Count > 0)
        {
            for (int i = 0; i < dtUpd.Rows.Count; i++)
            {
                acceptSysOrders += "0" + appString;
                acctNum += " " + appString;
                addedBy += ut.NullSafeInteger(Session["UserID"]) + appString;
                agentName += " " + appString;
                agentPhoneNo += " " + appString;
                altContact += (string.IsNullOrEmpty(dtUpd.Rows[i]["Alt# Contact"].ToString()) ? " " : dtUpd.Rows[i]["Alt# Contact"].ToString()) + appString;
                altPhoneno += (string.IsNullOrEmpty(dtUpd.Rows[i]["Alt# Phone"].ToString()) ? " " : dtUpd.Rows[i]["Alt# Phone"].ToString()) + appString;
                city += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 3"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 3"].ToString()) + appString;
                comments += " " + appString;
                compCode += (string.IsNullOrEmpty(dtUpd.Rows[i]["Company"].ToString()) ? " " : dtUpd.Rows[i]["Company"].ToString()) + appString;
                country += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 5"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 5"].ToString()) + appString;
                currency += " " + appString;
                emailFlag += "0" + appString;
                expenseItem += " " + appString;
                expiryDate += " " + appString;
                familyName += " " + appString;
                fax += (string.IsNullOrEmpty(dtUpd.Rows[i]["Fax"].ToString()) ? " " : dtUpd.Rows[i]["Fax"].ToString()) + appString;
                firstName += (string.IsNullOrEmpty(dtUpd.Rows[i]["First Name"].ToString()) ? " " : dtUpd.Rows[i]["First Name"].ToString()) + appString;
                isPreferVend += "Y" + appString;
                lastName += (string.IsNullOrEmpty(dtUpd.Rows[i]["Last Name"].ToString()) ? " " : dtUpd.Rows[i]["Last Name"].ToString()) + appString;
                middleName += (string.IsNullOrEmpty(dtUpd.Rows[i]["M#I#"].ToString()) ? " " : dtUpd.Rows[i]["M#I#"].ToString()) + appString;
                modifiedBy += ut.NullSafeInteger(Session["UserID"]) + appString;
                openBal += " " + appString;
                orgId += ut.NullSafeInteger(Session["OrgId"]) + appString;
                payTerm += " " + appString;
                preferagent += " " + appString;
                preference += " " + appString;
                preferredVendor += (string.IsNullOrEmpty(dtUpd.Rows[i]["Vendor"].ToString()) ? " " : dtUpd.Rows[i]["Vendor"].ToString()) + appString;
                promoCode += " " + appString;
                qbVendId += "0" + appString;
                shipAddress1 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Ship from 1"].ToString()) ? " " : dtUpd.Rows[i]["Ship from 1"].ToString()) + appString;
                shipAddress2 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Ship from 2"].ToString()) ? " " : dtUpd.Rows[i]["Ship from 2"].ToString()) + appString;
                shipAddress3 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Ship from 3"].ToString()) ? " " : dtUpd.Rows[i]["Ship from 3"].ToString()) + appString;
                startDate += " " + appString;
                state += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 4"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 4"].ToString()) + appString;
                taxCode += " " + appString;
                title += (string.IsNullOrEmpty(dtUpd.Rows[i]["TITLE"].ToString()) ? " " : dtUpd.Rows[i]["TITLE"].ToString()) + appString;
                type += "1" + appString;
                vend1099 += " " + appString;
                vendAddress1 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 1"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 1"].ToString()) + appString;
                vendAddress2 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 2"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 2"].ToString()) + appString;
                vendAddress3 += (string.IsNullOrEmpty(dtUpd.Rows[i]["Bill from 3"].ToString()) ? " " : dtUpd.Rows[i]["Bill from 3"].ToString()) + appString;
                vendContact += (string.IsNullOrEmpty(dtUpd.Rows[i]["Contact"].ToString()) ? " " : dtUpd.Rows[i]["Contact"].ToString()) + appString;
                vendDiscPercent += "0" + appString;
                vendorEmail += (string.IsNullOrEmpty(dtUpd.Rows[i]["Email"].ToString()) ? " " : dtUpd.Rows[i]["Email"].ToString()) + appString;
                vendorId += "0" + appString;
                vendorno += " " + appString;
                vendPhoneNo += (string.IsNullOrEmpty(dtUpd.Rows[i]["Phone"].ToString()) ? " " : dtUpd.Rows[i]["Phone"].ToString()) + appString;
                vendStatus += " " + appString;
                vendZipCode += " " + appString;
                website += " " + appString;
                count++;
            }
            VendorsMulVO vend = new VendorsMulVO();
            vend.acceptSysOrders = acceptSysOrders.Substring(0, acceptSysOrders.Length - 3);
            vend.acctNum = acctNum.Substring(0, acctNum.Length - 3);
            vend.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            vend.agentName = agentName.Substring(0, agentName.Length - 3);
            vend.agentPhoneNo = agentPhoneNo.Substring(0, agentPhoneNo.Length - 3);
            vend.altContact = altContact.Substring(0, altContact.Length - 3);
            vend.altPhoneno = altPhoneno.Substring(0, altPhoneno.Length - 3);
            vend.city = city.Substring(0, city.Length - 3);
            vend.comments = comments.Substring(0, comments.Length - 3);
            vend.compCode = compCode.Substring(0, compCode.Length - 3);
            vend.country = country.Substring(0, country.Length - 3);
            vend.currency = currency.Substring(0, currency.Length - 3);
            vend.emailFlag = emailFlag.Substring(0, emailFlag.Length - 3);
            vend.expenseItem = expenseItem.Substring(0, expenseItem.Length - 3);
            vend.expiryDate = expiryDate.Substring(0, expiryDate.Length - 3);
            vend.familyName = familyName.Substring(0, familyName.Length - 3);
            vend.fax = fax.Substring(0, fax.Length - 3);
            vend.firstName = firstName.Substring(0, firstName.Length - 3);
            vend.isPreferVend = isPreferVend.Substring(0, isPreferVend.Length - 3);
            vend.lastName = lastName.Substring(0, lastName.Length - 3);
            vend.middleName = middleName.Substring(0, middleName.Length - 3);
            vend.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            vend.openBal = openBal.Substring(0, openBal.Length - 3);
            vend.orgId = orgId.Substring(0, orgId.Length - 3);
            vend.payTerm = payTerm.Substring(0, payTerm.Length - 3);
            vend.preferagent = preferagent.Substring(0, preferagent.Length - 3);
            vend.preference = preference.Substring(0, preference.Length - 3);
            vend.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
            vend.promoCode = promoCode.Substring(0, promoCode.Length - 3);
            vend.qbVendId = qbVendId.Substring(0, qbVendId.Length - 3);
            vend.shipAddress1 = shipAddress1.Substring(0, shipAddress1.Length - 3);
            vend.shipAddress2 = shipAddress2.Substring(0, shipAddress2.Length - 3);
            vend.shipAddress3 = shipAddress3.Substring(0, shipAddress3.Length - 3);
            vend.startDate = startDate.Substring(0, startDate.Length - 3);
            vend.state = state.Substring(0, state.Length - 3);
            vend.taxCode = taxCode.Substring(0, taxCode.Length - 3);
            vend.title = title.Substring(0, title.Length - 3);
            vend.type = type.Substring(0, type.Length - 3);
            vend.vend1099 = vend1099.Substring(0, vend1099.Length - 3);
            vend.vendAddress1 = vendAddress1.Substring(0, vendAddress1.Length - 3);
            vend.vendAddress2 = vendAddress2.Substring(0, vendAddress2.Length - 3);
            vend.vendAddress3 = vendAddress3.Substring(0, vendAddress3.Length - 3);
            vend.vendContact = vendContact.Substring(0, vendContact.Length - 3);
            vend.vendDiscPercent = vendDiscPercent.Substring(0, vendDiscPercent.Length - 3);
            vend.vendorEmail = vendorEmail.Substring(0, vendorEmail.Length - 3);
            vend.vendorId = vendorId.Substring(0, vendorId.Length - 3);
            vend.vendorno = vendorno.Substring(0, vendorno.Length - 3);
            vend.vendPhoneNo = vendPhoneNo.Substring(0, vendPhoneNo.Length - 3);
            vend.vendStatus = vendStatus.Substring(0, vendStatus.Length - 3);
            vend.vendZipCode = vendZipCode.Substring(0, vendZipCode.Length - 3);
            vend.website = website.Substring(0, website.Length - 3);
            string retStr = "";// xms.addPreferredVendMul(vend);
        }

        if (dtFailed.Rows.Count > 0)
        {
            dvImpExpErr.Style["color"] = "Red";
            dvImpExpErr.InnerHtml = "Data upload is not completely successfull.";
            //gvImpVend.DataSource = dtFailed;
            //gvImpVend.DataBind();
            //gvImpVend.Columns[0].Visible = true;
            popImpExpQBVend.Show();
        }
        else
        {
            Session.Remove("dtImpQBVend");
            Session.Remove("Vendors");
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = count + "Vendors data uploaded successfully";
            BindVendorGrid();
            popImpExpQBVend.Hide();
        }
    }

    protected void btnImpExpQBVendConfirm_Click(object sender, EventArgs e)
    {
        ImportQBVendors();
        popImpExpQBVend.Show();
    }

    protected void lnkExportQBVendData_Click(object sender, EventArgs e)
    {
        ExportQBVendors();
    }

    private void ExportQBVendors()
    {
        //get vendors data from database
        DataSet dsVend = new DataSet();
        if (Session["Vendors"] == null)
        {
            string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), ddlCompCodes.SelectedValue, string.Empty, string.Empty);
            List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
            dsVend = new DataSet();
            dsVend.Tables.Add(Utility.ConvertToDataTable(lst));
            Session["Vendors"] = dsVend;
        }
        else
            dsVend = (DataSet)Session["Vendors"];

        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dsVend;

        BoundField dgc_Vendor = new BoundField();
        dgc_Vendor.DataField = "preferredVendor";
        dgc_Vendor.HeaderText = "Vendor";
        dgDgrid.Columns.Add(dgc_Vendor);

        BoundField dgc_ActiveStatus = new BoundField();
        dgc_ActiveStatus.DataField = "";
        dgc_ActiveStatus.HeaderText = "Is Active";
        dgDgrid.Columns.Add(dgc_ActiveStatus);

        BoundField dgc_Company = new BoundField();
        dgc_Company.DataField = "compCode";
        dgc_Company.HeaderText = "Company Name";
        dgDgrid.Columns.Add(dgc_Company);

        BoundField dgc_MrMrs = new BoundField();
        dgc_MrMrs.DataField = "title";
        dgc_MrMrs.HeaderText = "Salutation";
        dgDgrid.Columns.Add(dgc_MrMrs);

        BoundField dgc_FirstName = new BoundField();
        dgc_FirstName.DataField = "firstName";
        dgc_FirstName.HeaderText = "First Name";
        dgDgrid.Columns.Add(dgc_FirstName);

        BoundField dgc_MI = new BoundField();
        dgc_MI.DataField = "middleName";
        dgc_MI.HeaderText = "M.I.";
        dgDgrid.Columns.Add(dgc_MI);

        BoundField dgc_LastName = new BoundField();
        dgc_LastName.DataField = "lastName";
        dgc_LastName.HeaderText = "Last Name";
        dgDgrid.Columns.Add(dgc_LastName);

        BoundField dgc_Contact = new BoundField();
        dgc_Contact.DataField = "vendContact";
        dgc_Contact.HeaderText = "Contact";
        dgDgrid.Columns.Add(dgc_Contact);

        BoundField dgc_Phone = new BoundField();
        dgc_Phone.DataField = "vendPhoneNo";
        dgc_Phone.HeaderText = "Phone";
        dgDgrid.Columns.Add(dgc_Phone);

        BoundField dgc_Fax = new BoundField();
        dgc_Fax.DataField = "fax";
        dgc_Fax.HeaderText = "Fax";
        dgDgrid.Columns.Add(dgc_Fax);

        BoundField dgc_AltPhone = new BoundField();
        dgc_AltPhone.DataField = "altPhoneno";
        dgc_AltPhone.HeaderText = "Alt. Phone";
        dgDgrid.Columns.Add(dgc_AltPhone);

        BoundField dgc_AltContact = new BoundField();
        dgc_AltContact.DataField = "altContact";
        dgc_AltContact.HeaderText = "Alt. Contact";
        dgDgrid.Columns.Add(dgc_AltContact);

        BoundField dgc_Email = new BoundField();
        dgc_Email.DataField = "vendorEmail";
        dgc_Email.HeaderText = "Email";
        dgDgrid.Columns.Add(dgc_Email);

        BoundField dgc_PrintonCheck = new BoundField();
        dgc_PrintonCheck.DataField = "";
        dgc_PrintonCheck.HeaderText = "Print on Check";
        dgDgrid.Columns.Add(dgc_PrintonCheck);

        BoundField dgc_Billfrom1 = new BoundField();
        dgc_Billfrom1.DataField = "vendAddress1";
        dgc_Billfrom1.HeaderText = "Address Line1";
        dgDgrid.Columns.Add(dgc_Billfrom1);

        BoundField dgc_Billfrom2 = new BoundField();
        dgc_Billfrom2.DataField = "vendAddress2";
        dgc_Billfrom2.HeaderText = "Address Line2";
        dgDgrid.Columns.Add(dgc_Billfrom2);

        BoundField dgc_Billfrom3 = new BoundField();
        dgc_Billfrom3.DataField = "vendAddress3";
        dgc_Billfrom3.HeaderText = "Address Line3";
        dgDgrid.Columns.Add(dgc_Billfrom3);

        BoundField dgc_Billfrom4 = new BoundField();
        dgc_Billfrom4.DataField = "";
        dgc_Billfrom4.HeaderText = "Address Line4";
        dgDgrid.Columns.Add(dgc_Billfrom4);

        BoundField dgc_AddressCity = new BoundField();
        dgc_AddressCity.DataField = "city";
        dgc_AddressCity.HeaderText = "Address City";
        dgDgrid.Columns.Add(dgc_AddressCity);

        BoundField dgc_AddressState = new BoundField();
        dgc_AddressState.DataField = "state";
        dgc_AddressState.HeaderText = "Address State";
        dgDgrid.Columns.Add(dgc_AddressState);

        BoundField dgc_AddressPostalCode = new BoundField();
        dgc_AddressPostalCode.DataField = "vendZipCode";
        dgc_AddressPostalCode.HeaderText = "Address PostalCode";
        dgDgrid.Columns.Add(dgc_AddressPostalCode);

        BoundField dgc_AddressCountry = new BoundField();
        dgc_AddressCountry.DataField = "country";
        dgc_AddressCountry.HeaderText = "Address Country";
        dgDgrid.Columns.Add(dgc_AddressCountry);

        BoundField dgc_VendorType = new BoundField();
        dgc_VendorType.DataField = "";
        dgc_VendorType.HeaderText = "Vendor Type";
        dgDgrid.Columns.Add(dgc_VendorType);

        BoundField dgc_Terms = new BoundField();
        dgc_Terms.DataField = "payTerm";
        dgc_Terms.HeaderText = "Terms";
        dgDgrid.Columns.Add(dgc_Terms);

        BoundField dgc_TaxID = new BoundField();
        dgc_TaxID.DataField = "taxCode";
        dgc_TaxID.HeaderText = "Tax ID";
        dgDgrid.Columns.Add(dgc_TaxID);

        BoundField dgc_Eligiblefor1099 = new BoundField();
        dgc_Eligiblefor1099.DataField = "vend1099";
        dgc_Eligiblefor1099.HeaderText = "Eligible for 1099";
        dgDgrid.Columns.Add(dgc_Eligiblefor1099);

        BoundField dgc_AccountNumber = new BoundField();
        dgc_AccountNumber.DataField = "acctNum";
        dgc_AccountNumber.HeaderText = "Account Number";
        dgDgrid.Columns.Add(dgc_AccountNumber);

        BoundField dgc_CreditLimit = new BoundField();
        dgc_CreditLimit.DataField = "";
        dgc_CreditLimit.HeaderText = "Credit Limit";
        dgDgrid.Columns.Add(dgc_CreditLimit);

        BoundField dgc_Notes = new BoundField();
        dgc_Notes.DataField = "";
        dgc_Notes.HeaderText = "Notes";
        dgDgrid.Columns.Add(dgc_Notes);

        //BoundField dgc_Shipfrom1 = new BoundField();
        //dgc_Shipfrom1.DataField = "";
        //dgc_Shipfrom1.HeaderText = "Ship from 1";
        //dgDgrid.Columns.Add(dgc_Shipfrom1);

        //BoundField dgc_Shipfrom2 = new BoundField();
        //dgc_Shipfrom2.DataField = "";
        //dgc_Shipfrom2.HeaderText = "Ship from 2";
        //dgDgrid.Columns.Add(dgc_Shipfrom2);

        //BoundField dgc_Shipfrom3 = new BoundField();
        //dgc_Shipfrom3.DataField = "";
        //dgc_Shipfrom3.HeaderText = "Ship from 3";
        //dgDgrid.Columns.Add(dgc_Shipfrom3);

        //BoundField dgc_Shipfrom4 = new BoundField();
        //dgc_Shipfrom4.DataField = "";
        //dgc_Shipfrom4.HeaderText = "Ship from 4";
        //dgDgrid.Columns.Add(dgc_Shipfrom4);

        //BoundField dgc_Shipfrom5 = new BoundField();
        //dgc_Shipfrom5.DataField = "";
        //dgc_Shipfrom5.HeaderText = "Ship from 5";
        //dgDgrid.Columns.Add(dgc_Shipfrom5);

        //BoundField dgc_Balance = new BoundField();
        //dgc_Balance.DataField = "";
        //dgc_Balance.HeaderText = "Balance";
        //dgDgrid.Columns.Add(dgc_Balance);

        //BoundField dgc_BalanceTotal = new BoundField();
        //dgc_BalanceTotal.DataField = "";
        //dgc_BalanceTotal.HeaderText = "Balance Total";
        //dgDgrid.Columns.Add(dgc_BalanceTotal);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();
        //dgDgrid.Caption = "<b><h3>Vendor Details</h3></b>";
        Session["gridExportVendDataForQB"] = dgDgrid;
        Response.Redirect("../DownloadFile.aspx?typ=16");
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

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetVendors(string prefixText, int count, string contextKey)
    {
        DataSet ds = (DataSet)HttpContext.Current.Session["Vendors"];
        DataView dv = new DataView(ds.Tables[0], "preferredVendor LIKE '%" + prefixText + "%'", "preferredVendor", DataViewRowState.CurrentRows);
        string[] VendorNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            VendorNames[i] = dv.ToTable().Rows[i]["preferredVendor"].ToString();
        return VendorNames;
    }
}