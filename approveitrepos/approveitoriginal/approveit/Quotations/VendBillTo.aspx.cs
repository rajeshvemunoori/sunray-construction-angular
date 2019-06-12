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

public partial class Quotations_VendBillTo : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region BillTo Details

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            btnSave.Attributes.Add("onclick", "javascript:return validateVendBillTo();");
            btnReset.Attributes.Add("onclick", "javascript:return resetBillTo();");
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvMsg');");
            txtPhone2.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone2', 'dvMsg');");
            txtFax.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtFax', 'dvMsg');");
            if (!IsPostBack)
            {
                txtBillNum.Focus();
                FillDropdowns();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void FillDropdowns()
    {
        string expCodes = xms.getExpCodes(0, string.Empty, 2);
        string[] arrExpCodes = new string[2];
        arrExpCodes = expCodes.Split('~');
        List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
        DataTable dt = Utility.ConvertToDataTable(codes);
        DataView dtview = new DataView(dt);
        dtview.Sort = "CodeID ASC";
        DataTable dtCodes = dtview.ToTable();

        /////Fill Payment Modes
        string exprPymt = "CodeID='PAYMENT'";
        DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
        ddlPayMode.DataSource = viewPymt;
        ddlPayMode.DataTextField = "Description";
        ddlPayMode.DataValueField = "CodeKey";
        ddlPayMode.DataBind();
        ddlPayMode.Items.Insert(0, "Please Select");
        ddlPayMode.Items.FindByText("Please Select").Value = "0";

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

        /////Fill Currency
        string exprCurr = "CodeID='CURRENCY'";
        DataView viewCurr = new DataView(dtCodes, exprCurr, "CODEID", DataViewRowState.CurrentRows);
        ddlCurrency.DataSource = viewCurr;
        ddlCurrency.DataTextField = "CodeKey";
        ddlCurrency.DataValueField = "CodeKey";
        ddlCurrency.DataBind();
        ddlCurrency.Items.Insert(0, "Please Select");
        ddlCurrency.Items.FindByText("Please Select").Value = "0";
    }

    protected void SaveDetails(object sender, EventArgs e)
    {
        int multi = chkMultiLoc.Checked ? 1 : 0;
        VendorVO vend = new VendorVO();
        vend.addedBy = "0";
        vend.addedOn = DateTime.Now.ToShortDateString();
        vend.city = ddlCity.SelectedValue;
        vend.countryCd = ddlCountry.SelectedValue;
        vend.currency = ddlCurrency.SelectedValue;
        vend.email = txtEmail.Text;
        vend.fax = txtFax.Text;
        vend.locationName = string.Empty;
        vend.modifiedBy = "0";
        vend.modifiedOn = DateTime.Now.ToShortDateString();
        vend.multiLoc = chkMultiLoc.Checked ? "Y" : "N";
        vend.password = txtPassword.Text;
        vend.paymentMode = ddlPayMode.SelectedValue;
        vend.paymentTerms = txtPayterms.Text;
        vend.phone1 = txtPhone.Text;
        vend.phone2 = txtPhone2.Text;
        vend.stateCode = ddlStates.SelectedValue;
        vend.type = 1;
        vend.vendBillAddress1 = txtAddr1.Text;
        vend.vendBillAddress2 = txtAddr2.Text;
        vend.vendBillAddress3 = txtAddr3.Text;
        vend.vendBillId = 0;
        vend.vendBillName1 = txtVendName2.Text;
        vend.vendBillName2 = txtVendName2.Text;
        vend.vendBillNum = txtBillNum.Text;
        vend.vendBillPreferName = txtVendPrefName.Text;
        vend.vendCategory = txtCat.Text;
        vend.vendorId = "0";
        vend.vendSubCategory = txtSubCat.Text;
        vend.website = txtWebsite.Text;
        vend.zipCode = txtZip.Text;
        string retStr = xms.addVendBillDetails(vend);

        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);

            ////Temporary process
            var memberDetails = xms.getUserDetails(txtEmail.Text);
            List<UserVO> users = ser.Deserialize<List<UserVO>>(memberDetails);
            DataSet dsUser = new DataSet();
            dsUser.Tables.Add(Utility.ConvertToDataTable(users));
            Session["UserID"] = dsUser.Tables[0].Rows[0]["UserID"];
            Session["LogEmail"] = dsUser.Tables[0].Rows[0]["email"].ToString();
            Session["VendBillID"] = dsUser.Tables[0].Rows[0]["employeeId"];
            Session["username"] = dsUser.Tables[0].Rows[0]["fName"].ToString();
            Session["lastname"] = dsUser.Tables[0].Rows[0]["lName"].ToString();
            Session["SOrgName"] = dsUser.Tables[0].Rows[0]["subDomain"].ToString();
            ////Temporary process

            ClearFields();
            if (multi == 1)
                Response.Redirect("VendShipTo.aspx");
            //Response.Write("<script>setTimeout('redirectPage(1)', 20000)</script>");
            else
                Response.Redirect("VendContacts.aspx");
            // Response.Write("<script>setTimeout('redirectPage(2)', 20000)</script>");
        }
        else
            DisplayMsg("Red", retStr);
    }

    protected void btnBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("../Login.aspx");
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMsg.InnerHtml = msg;
        dvMsg.Style["color"] = color;
    }

    private void ClearFields()
    {
        txtBillNum.Text = txtVendName1.Text = txtVendName2.Text = txtVendPrefName.Text = txtEmail.Text = txtPassword.Text = txtConfPwd.Text = txtAddr1.Text =
            txtAddr2.Text = txtAddr3.Text = txtZip.Text = txtWebsite.Text = txtPhone.Text = txtPhone2.Text = txtFax.Text = txtPayterms.Text = txtCat.Text = txtSubCat.Text = string.Empty;
        ddlCity.SelectedIndex = ddlStates.SelectedIndex = ddlCountry.SelectedIndex = ddlCurrency.SelectedIndex = ddlPayMode.SelectedIndex = 0;
        chkMultiLoc.Checked = false;
    }

    #endregion
}