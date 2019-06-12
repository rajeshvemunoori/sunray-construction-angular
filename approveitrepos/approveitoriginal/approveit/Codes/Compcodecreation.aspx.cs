using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Web.Services;

public partial class Compcodecreation : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region CompCodes

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");

            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                Session.Remove("Control");
                BindOrganizations();
                BindCompCodes();
                txtKeywordSearch.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void BindOrganizations()
    {
        string str = xms.getCSOrgDetails(0);
        List<CustomerServiceVO> lst = ser.Deserialize<List<CustomerServiceVO>>(str);
        DataTable dtOrg = Utility.ConvertToDataTable(lst);
        Session["dtOrgs"] = dtOrg;
        DataTable dtDistinctOrg = dtOrg.DefaultView.ToTable(true, "orgname");
        ddlOrg.DataSource = dtDistinctOrg;
        ddlOrg.DataTextField = "orgname";
        ddlOrg.DataValueField = "orgname";
        ddlOrg.DataBind();
        if (ut.NullSafeInteger(Session["OrgID"]) != 0)
        {
            ddlOrg.SelectedValue = Session["SOrgName"].ToString();
            ddlOrg.Enabled = false;
        }
        else
            ddlOrg.Enabled = true;
    }

    protected void SelectedOrganization(object sender, EventArgs e)
    {
        Session.Remove("CompCodesList");
        dvMainMsg.InnerHtml = string.Empty;
        BindCompCodes();
    }

    private void BindCompCodes()
    {
        DataSet dtCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string str = xms.getCompCodes(ddlOrg.SelectedValue, 1);
            List<CompanyCodesVO> lst = ser.Deserialize<List<CompanyCodesVO>>(str);
            dtCompCodes.Tables.Add(Utility.ConvertToDataTable(lst));
            Session["CompCodesList"] = dtCompCodes;
        }
        else
            dtCompCodes = (DataSet)Session["CompCodesList"];
        //c.Address1
        //c.City
        gvCompCodes.DataSource = dtCompCodes.Tables[0];
        gvCompCodes.DataBind();
    }

    protected void gvCompCodes_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvCompCodes.PageIndex = e.NewPageIndex;
        BindCompCodes();
    }

    protected void gvCompCodes_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
            if (gvCompCodes.Rows.Count == 1)
                dvMainMsg.InnerHtml = "You cannot delete single Company Codes.";
            else
            {
                string[] arr = e.CommandArgument.ToString().Split('~');
                hdnCode.Value = arr[0];
                hdnCountry.Value = arr[1];
                hdnOrgID.Value = arr[2];
                if (hdnCode.Value == Session["CompCode"].ToString())
                    lblAlert.Text = "Are you sure you want to delete this code? Your session will be terminated by deactivating this Company Code. Click Ok to continue.";
                else
                    lblAlert.Text = "Are you sure you want to delete this code?";
                popAlert.Show();
            }
        }
    }

    protected void gvCompCodes_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {

    }

    protected void gvCompCodes_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_CdCreatn"] != null && Session["Control_CdCreatn"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_CdCreatn"].ToString());
                if (Session["SortDir_CdCreatn"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }

        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            DataSet dtCompCodes = (DataSet)Session["CompCodesList"];
            LinkButton lnkDeleteCompCode = (LinkButton)e.Row.FindControl("lnkDeleteCompCode");
            if (dtCompCodes.Tables[0].Rows.Count == 1)
                lnkDeleteCompCode.Visible = false;
            else
                lnkDeleteCompCode.Visible = true;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "left";
            e.Row.Cells[4].Style["text-align"] = "left";

        }
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CdCreatn"] = lnk.ID;

        if (Session["SortDir_CdCreatn"] == null || Session["SortDir_CdCreatn"].ToString() == "Asc")
            Session["SortDir_CdCreatn"] = "Desc";
        else
            Session["SortDir_CdCreatn"] = "Asc";

        Session["SortExpr_CdCreatn"] = e.CommandArgument;
        SortCompCodeGrid();
    }

    private void SortCompCodeGrid()
    {
        DataSet dsCompCodes = new DataSet();
        DataTable dtCompCodes = new DataTable();
        if (Session["CompCodesList"] == null)
            BindCompCodes();
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        dtCompCodes = dsCompCodes.Tables[0];

        if ((Session["SortExpr_CdCreatn"] != null) && Session["SortDir_CdCreatn"] != null)
        {
            DataView view = new DataView(dtCompCodes);
            view.Sort = Session["SortExpr_CdCreatn"].ToString() + " " + Session["SortDir_CdCreatn"].ToString();
            gvCompCodes.DataSource = view;
        }
        else
            gvCompCodes.DataSource = dtCompCodes;
        gvCompCodes.DataBind();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("dsCompCodes");
        BindCompCodes();
    }

    private bool _refreshExp = false;
    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);

            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshAlarms", "setTimeout('refreshExp();', 800);", true);
        }

    }

    #endregion

    #region EditCompCode

    protected void AddNewCompCode(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        btnSave.Attributes.Add("onclick", "javascript:return ValidateCompCode();");
        dvMainMsg.InnerHtml = string.Empty;
        ClearFields();
        BindCities();
        BindBillCompCodes();
        lblHCompCode.Text = "Create Company Code";
        btnDelete.Visible = false;
        btnSave.Visible = true;
        chkBillAddr.Checked = true;
        DisplayCopyOptions(true);
        ddlCopyCodes.DataSource = (DataSet)Session["CompCodesList"];
        ddlCopyCodes.DataBind();
        foreach (GridViewRow row in gvCompCodes.Rows)
        {
            HiddenField hdnRowOrgID = (HiddenField)row.FindControl("hdnRowOrgID");
            hdnOrgID.Value = hdnRowOrgID.Value;
        }
        popAddCompCode.Show();
    }

    private void BindCities()
    {
        DataSet dsRgnCode = new DataSet();
        var RgnData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), "ALL", "REGIONCD");
        List<CodeValueVO> RgnCod = ser.Deserialize<List<CodeValueVO>>(RgnData);
        dsRgnCode.Tables.Add(Utility.ConvertToDataTable(RgnCod));
        ddlRgnCode.DataSource = dsRgnCode;
        ddlRgnCode.DataTextField = "CodeKey";
        ddlRgnCode.DataValueField = "CodeKey";
        ddlRgnCode.DataBind();
        ddlRgnCode.Items.Insert(0, "Please Select");
        ddlRgnCode.Items.FindByText("Please Select").Value = "0";

        DataSet dsCities = new DataSet();
        var city = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "USCITIES");
        List<CodeValueVO> cities = ser.Deserialize<List<CodeValueVO>>(city);
        dsCities.Tables.Add(Utility.ConvertToDataTable(cities));
        //ddlCities.DataSource = dsCities;
        //ddlCities.DataBind();
        //ddlCities.Items.Insert(0, "Please Select");
        //ddlCities.Items.FindByText("Please Select").Value = "0";

        DataSet dsCountries = new DataSet();
        var country = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "ERCOUNTRYCD");
        List<CodeValueVO> countries = ser.Deserialize<List<CodeValueVO>>(country);
        dsCountries.Tables.Add(Utility.ConvertToDataTable(countries));
        ddlCountry.DataSource = dsCountries;
        ddlCountry.DataBind();
        ddlCountry.Items.Insert(0, "Please Select");
        ddlCountry.Items.FindByText("Please Select").Value = "0";
    }

    private void BindBillCompCodes()
    {
        DataTable dt = ((DataSet)Session["CompCodesList"]).Tables[0];
        if (!dt.Columns.Contains("CompBillAddress"))
            dt.Columns.Add("CompBillAddress");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["CompBillAddress"] = dt.Rows[i]["CompCode"].ToString() + " -- " + dt.Rows[i]["Address1"].ToString();
        dt.AcceptChanges();
        ddlBillComp.DataSource = dt;
        ddlBillComp.DataBind();
    }

    protected void EditCompCode(object sender, EventArgs e)
    {
        dvMainMsg.InnerHtml = string.Empty;
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        btnSave.Attributes.Add("onclick", "javascript:return ValidateCompCode();");
        ClearFields();
        BindCities();
        lblHCompCode.Text = "Edit Company Code";
        btnDelete.Visible = true;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnRowOrgID = (HiddenField)row.FindControl("hdnRowOrgID");
        HiddenField hdnRowCompCode = (HiddenField)row.FindControl("hdnRowCompCode");
        DataSet dtCompCodes = (DataSet)Session["CompCodesList"];
        //Filter Selected compcode from organization compcodes
        string expr = "CompCode = '" + hdnRowCompCode.Value + "' and OrgId = " + hdnRowOrgID.Value;
        DataView view = new DataView(dtCompCodes.Tables[0], expr, "CompCode", DataViewRowState.CurrentRows);
        DataTable dtView = view.ToTable();

        txtCompCode.Text = dtView.Rows[0]["CompCode"].ToString();
        txtCompName.Text = dtView.Rows[0]["CompName"].ToString();
        txtCompCode.Enabled = false;
        txtCompName.Enabled = false;
        txtAddr1.Text = dtView.Rows[0]["Address1"].ToString();
        txtAddr2.Text = dtView.Rows[0]["Address2"].ToString();
        if (dtView.Rows[0]["State"].ToString() != "0" || dtView.Rows[0]["State"].ToString() != string.Empty)
            ddlRgnCode.SelectedValue = dtView.Rows[0]["State"].ToString() == string.Empty ? "0" : dtView.Rows[0]["State"].ToString();
        txtCities.Text = dtView.Rows[0]["City"].ToString() == string.Empty ? " " : dtView.Rows[0]["City"].ToString();
        if (dtView.Rows[0]["CountryCode"].ToString() != "0" || dtView.Rows[0]["CountryCode"].ToString() != string.Empty)
            ddlCountry.SelectedValue = dtView.Rows[0]["CountryCode"].ToString() == string.Empty ? "0" : dtView.Rows[0]["CountryCode"].ToString();
        txtZipCode.Text = dtView.Rows[0]["ZipCode"].ToString();
        hdnCountry.Value = dtView.Rows[0]["CountryCode"].ToString();
        hdnOrgID.Value = dtView.Rows[0]["orgId"].ToString();
        hdnCode.Value = txtCompCode.Text;
        DisplayCopyOptions(false);
        btnSave.Visible = true;

        //Display delete button if more that one compcode are registered
        if (gvCompCodes.Rows.Count == 1)
            btnDelete.Visible = false;
        else
            btnDelete.Visible = true;
        //Display delete button if more that one compcode are registered

        //display BillTo compcode details
        BindBillCompCodes();
        if (dtView.Rows[0]["billToCompCode"].ToString() == dtView.Rows[0]["CompCode"].ToString())
        {
            chkBillAddr.Checked = true;
            dvBillComp.Style["display"] = "none";
        }
        else
        {
            chkBillAddr.Checked = false;
            dvBillComp.Style["display"] = "block";
            ddlBillComp.SelectedValue = dtView.Rows[0]["billToCompCode"].ToString();
        }
        //display BillTo compcode details

        popAddCompCode.Show();
    }

    protected void SaveCompCode(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        CompCodeVO compCode = new CompCodeVO();
        compCode.compCode = txtCompCode.Text;
        compCode.compName = txtCompName.Text;
        compCode.orgId = hdnOrgID.Value;
        compCode.state = ddlRgnCode.SelectedItem.Text;
        compCode.city = txtCities.Text;
        compCode.modifiedBy = Session["UserID"].ToString();
        compCode.addedBy = Session["UserID"].ToString();
        compCode.address1 = txtAddr1.Text;
        compCode.address2 = txtAddr2.Text;
        compCode.businessType = "0";
        compCode.countryCode = ddlCountry.SelectedValue;
        compCode.zipCode = txtZipCode.Text;
        compCode.expItemFlag = chkCopyExpItems.Checked ? "Y" : "N";
        compCode.vendorFlag = chkCopyVendors.Checked ? "Y" : "N";
        compCode.codevaluesFlag = chkCopyCodes.Checked ? "Y" : "N";
        compCode.fiscalFlag = chkCopyFiscCal.Checked ? "Y" : "N";
        compCode.billToCompCode = chkBillAddr.Checked ? txtCompCode.Text : ddlBillComp.SelectedValue;

        if (lblHCompCode.Text.ToLower().Contains("edit"))
            compCode.cloneCompCode = "1";
        else
        {
            if (chkCopyCodes.Checked || chkCopyExpItems.Checked || chkCopyFiscCal.Checked || chkCopyVendors.Checked)
                compCode.cloneCompCode = ddlCopyCodes.SelectedItem.Text;
            else
                compCode.cloneCompCode = string.Empty;
        }
        retStr = xms.addCompCodes(compCode);

        if (retStr.ToLower().Contains("succes"))
        {
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = retStr;
            Session.Remove("CompCodesList");
            BindCompCodes();
            popAddCompCode.Hide();
        }
        else
        {
            dvErrMsg.Style["color"] = "Red";
            dvErrMsg.InnerHtml = retStr;
            popAddCompCode.Show();
        }
    }

    protected void DeleteCompCode(object sender, EventArgs e)
    {
        if (gvCompCodes.Rows.Count == 1)
            dvErrMsg.InnerHtml = "You cannot delete single Company Codes.";
        else
        {
            hdnCode.Value = txtCompCode.Text;
            lblAlert.Text = "Are you sure you want to delete this code?";
            popAlert.Show();
        }
        popAddCompCode.Show();
    }

    [WebMethod]
    public static string[] searchCity(string cityname)
    {
        XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
        JavaScriptSerializer ser = new JavaScriptSerializer();
        string str = xms.searchCity(cityname);
        List<OrgListVO> cityList = ser.Deserialize<List<OrgListVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(cityList);
        string[] arr = new string[dt.Rows.Count];
        for (int i = 0; i < dt.Rows.Count; i++)
            arr[i] = dt.Rows[i]["City"].ToString();
        return arr;
    }

    #endregion

    #region DeleteCompCode

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        CompCodeVO CompCode = new CompCodeVO();
        CompCode.compCode = hdnCode.Value;
        CompCode.compName = string.Empty;
        CompCode.orgId = hdnOrgID.Value;
        CompCode.state = string.Empty;
        CompCode.city = string.Empty;
        CompCode.modifiedBy = Session["UserID"].ToString();
        CompCode.addedBy = Session["UserID"].ToString();
        CompCode.cloneCompCode = "0";
        CompCode.address1 = txtAddr1.Text;
        CompCode.address2 = txtAddr2.Text;
        CompCode.businessType = string.Empty;
        CompCode.countryCode = hdnCountry.Value;
        CompCode.zipCode = txtZipCode.Text;
        CompCode.expItemFlag = "0";
        CompCode.vendorFlag = "0";
        CompCode.codevaluesFlag = "0";
        CompCode.fiscalFlag = "0";

        retStr = xms.addCompCodes(CompCode);
        if (retStr.ToLower().Contains("succes"))
        {
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = retStr;
            BindCompCodes();
            if (hdnCode.Value == Session["CompCode"].ToString())
                Response.Redirect("../Logout.aspx");
            popAddCompCode.Hide();
        }
        else
        {
            dvErrMsg.Style["color"] = "Red";
            dvErrMsg.InnerHtml = retStr;
            popAddCompCode.Show();
        }
        popAlert.Hide();
    }

    #endregion

    #region Input Field Operations

    private void ClearFields()
    {
        txtCompCode.Text = txtCompName.Text = string.Empty;
        txtCompCode.Enabled = txtCompName.Enabled = true;
        txtCities.Enabled = true;
        txtCities.Text = string.Empty;
        ddlRgnCode.Enabled = true;
        ddlRgnCode.Items.Clear();
        ddlCountry.Items.Clear();
        txtZipCode.Text = string.Empty;
        txtAddr2.Text = string.Empty;
        txtAddr1.Text = string.Empty;
        chkCopyCodes.Checked = false;
        chkCopyVendors.Checked = false;
        chkCopyFiscCal.Checked = false;
        chkCopyExpItems.Checked = false;
        dvErrMsg.InnerHtml = string.Empty;
        chkBillAddr.Checked = true;
        dvBillComp.Style["display"] = "none";
    }

    private void DisplayCopyOptions(bool check)
    {
        chkCopyCodes.Visible = check;
        chkCopyVendors.Visible = check;
        chkCopyExpItems.Visible = check;
        chkCopyFiscCal.Visible = check;
        dvCopyOptions.Style["display"] = check ? "block" : "none";
    }

    #endregion
}