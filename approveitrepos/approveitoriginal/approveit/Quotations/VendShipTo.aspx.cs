using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Web.UI.HtmlControls;
using System.Web.Services;

public partial class Quotations_VendShipTo : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dt = new DataTable();
    bool _refreshExp = false;

    #endregion

    #region ShipTo Details

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            btnSave.Attributes.Add("onclick", "javascript:return validateVendShipTo();");
            btnReset.Attributes.Add("onclick", "javascript:return resetShipTo();");
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvMsg');");
            txtPhone2.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone2', 'dvMsg');");
            txtFax.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtFax', 'dvMsg');");
            if (!IsPostBack)
                LoadData();
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_VendShip"] = lnk.ID;

        if (Session["SortDir_VendShip"] == null || Session["SortDir_VendShip"].ToString() == "Asc")
            Session["SortDir_VendShip"] = "Desc";
        else
            Session["SortDir_VendShip"] = "Asc";
        Session["SortExpr_VendShip"] = e.CommandArgument;
        LoadData();
    }

    private void LoadData()
    {
        if (Session["VendShipDetails"] == null)
        {
            string str = xms.getBillShiptToDetails(ut.NullSafeInteger(Session["VendBillID"]), 1);
            List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["VendShipDetails"] = dt;
        }
        else
            dt = (DataTable)Session["VendShipDetails"];
        if ((Session["SortExpr_VendShip"] != null) && Session["SortDir_VendShip"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_VendShip"].ToString() + " " + Session["SortDir_VendShip"].ToString();
            gvShipDetails.DataSource = sortedView;
        }
        else
            gvShipDetails.DataSource = dt;
        gvShipDetails.DataBind();
    }

    private void FillDropdowns()
    {
        DataTable dtCodes = new DataTable();
        if (Session["Codes"] == null)
        {
            string expCodes = xms.getExpCodes(0, string.Empty, 2);
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            DataTable dt = Utility.ConvertToDataTable(codes);
            DataView dtview = new DataView(dt);
            dtview.Sort = "CodeID ASC";
            dtCodes = dtview.ToTable();
            Session["Codes"] = dtCodes;
        }
        else
            dtCodes = (DataTable)Session["Codes"];

        /////Fill Cities
        string exprCity = "CodeID='REGIONCD'";
        DataView viewCity = new DataView(dtCodes, exprCity, "CODEID", DataViewRowState.CurrentRows);
        ddlCity.DataSource = viewCity;
        ddlCity.DataTextField = "Description";
        ddlCity.DataValueField = "Description";
        ddlCity.DataBind();
        ddlCity.Items.Insert(0, "Please Select");
        ddlCity.Items.FindByText("Please Select").Value = "0";

        /////Fill States
        ddlStates.DataSource = viewCity;
        ddlStates.DataTextField = "CodeKey";
        ddlStates.DataValueField = "CodeKey";
        ddlStates.DataBind();
        ddlStates.Items.Insert(0, "Please Select");
        ddlStates.Items.FindByText("Please Select").Value = "0";
    }

    protected void SaveDetails(object sender, EventArgs e)
    {
        VendorVO vend = new VendorVO();
        vend.vendShipNum = txtShipNum.Text;
        vend.vendorName1 = txtVendName1.Text;
        vend.vendorName2 = txtVendName2.Text;
        vend.vendorPerferName = txtVendPrefName.Text;
        vend.shipEmail = txtEmail.Text;
        vend.vendorAddress1 = txtAddr1.Text;
        vend.vendorAddress2 = txtAddr2.Text;
        vend.vendorAddress3 = txtAddr3.Text;
        vend.shipCity = ddlCity.SelectedValue;
        vend.shipStateCode = ddlStates.SelectedValue;
        vend.countryCode = ddlCountry.SelectedValue;
        vend.shipZipCode = txtZip.Text;
        vend.shipWebSite = txtWebsite.Text;
        vend.shipPhone1 = txtPhone.Text;
        vend.shipPhone2 = txtPhone2.Text;
        vend.shipFax = txtFax.Text;
        vend.vendBillId = ut.NullSafeInteger(Session["VendBillID"]);
        vend.currency = string.Empty;
        vend.locationName = string.Empty;
        vend.multiLoc = "Y";
        vend.addedBy = Session["UserID"].ToString();
        vend.modifiedBy = Session["UserID"].ToString();
        vend.type = hdnIsEdit.Value == "N" ? 1 : 0;

        string retStr = xms.addVendShipDetails(vend);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMainMsg("Green", retStr);
            Session.Remove("VendShipDetails");
            LoadData();//Fetch data from database on successful save
            //Response.Write("<script>setTimeout('redirectPage()', 20000)</script>");
            popNewShip.Hide();
        }
        else
        {
            DisplayMsg("Red", retStr);
            popNewShip.Show();
        }
    }

    protected void gvShipDetails_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_VendShip"] != null && Session["Control_VendShip"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_VendShip"].ToString());
                if (Session["SortDir_VendShip"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
    }

    private void DisplayMainMsg(string color, string msg)
    {
        dvMainMsg.InnerHtml = msg;
        dvMainMsg.Style["color"] = color;
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMsg.InnerHtml = msg;
        dvMsg.Style["color"] = color;
    }

    private void ClearFields()
    {
        txtShipNum.Text = txtVendName1.Text = txtVendName2.Text = txtVendPrefName.Text = txtEmail.Text = txtAddr1.Text = txtAddr2.Text = txtAddr3.Text = txtZip.Text =
            txtWebsite.Text = txtPhone.Text = txtPhone2.Text = txtFax.Text = string.Empty;
        ddlCity.SelectedIndex = ddlStates.SelectedIndex = ddlCountry.SelectedIndex = 0;
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("VendShipDetails");
        dvMainMsg.InnerHtml = string.Empty;
        LoadData();
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

    #region Edit ShipTo

    protected void CreateNewShipTo(object sender, EventArgs e)
    {
        FillDropdowns();
        txtShipNum.Focus();
        hdnIsEdit.Value = "N";
        popNewShip.Show();
        ClearFields();
    }

    protected void Edit(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        hdnIsEdit.Value = "Y";
        Label lblShipNum = (Label)row.FindControl("lblShipNum");
        dt = (DataTable)Session["VendShipDetails"];
        DataView dv = new DataView(dt, "vendShipNum = '" + lblShipNum.Text + "'", "vendShipNum", DataViewRowState.CurrentRows);
        DataTable dtTemp = dv.ToTable();
        FillDropdowns();
        txtShipNum.Text = lblShipNum.Text;
        txtVendName1.Text = dtTemp.Rows[0]["vendorName1"].ToString();
        txtVendName2.Text = dtTemp.Rows[0]["vendorName2"].ToString();
        txtVendPrefName.Text = dtTemp.Rows[0]["vendorPerferName"].ToString();
        txtEmail.Text = dtTemp.Rows[0]["shipEmail"].ToString();
        txtAddr1.Text = dtTemp.Rows[0]["vendorAddress1"].ToString();
        txtAddr2.Text = dtTemp.Rows[0]["vendorAddress2"].ToString();
        txtAddr3.Text = dtTemp.Rows[0]["vendorAddress3"].ToString();
        ddlCity.SelectedValue = dtTemp.Rows[0]["shipCity"].ToString();
        ddlStates.SelectedValue = dtTemp.Rows[0]["shipStateCode"].ToString();
        ddlCountry.SelectedValue = dtTemp.Rows[0]["countryCode"].ToString();
        txtZip.Text = dtTemp.Rows[0]["shipZipCode"].ToString();
        txtWebsite.Text = dtTemp.Rows[0]["shipWebSite"].ToString();
        txtPhone.Text = dtTemp.Rows[0]["shipPhone1"].ToString();
        txtPhone2.Text = dtTemp.Rows[0]["shipPhone2"].ToString();
        txtFax.Text = dtTemp.Rows[0]["shipFax"].ToString();
        popNewShip.Show();
    }

    #endregion
}