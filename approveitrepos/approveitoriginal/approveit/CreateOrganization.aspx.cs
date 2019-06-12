using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Text;

public partial class CreateOrganization : System.Web.UI.Page
{
    #region private Variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    int ret = 0;
    Mails mails = new Mails();
    Encryption encrypt = new Encryption();
    Utility ut = new Utility();
    byte[] fileData = null;
    public string listFilter = null;

    #endregion

    #region Organization

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
            btnSave.Attributes.Add("onclick", "javascript:return validateOrganization();");

            if (!Page.IsPostBack)
            {
                Session.Remove("fStream");
                Session.Remove("fName");
                FillDropdowns();
                listFilter = BindName();
                BindStates();
                BindGroups();
                txtOrgcode.Attributes.Add("disabled", "true");
                txtZipCode.Attributes.Add("disabled", "true");
                txtOrganizationName.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + " -- From CreateOrganization", ex.ToString(), 0);
        }
    }

    void BindGroups()
    {
        DataTable dsGroupsList = new DataTable();
        UserGroupVO uGroup = new UserGroupVO();
        uGroup.addedBy = 0;
        uGroup.compCode = null;
        uGroup.groupId = 0;
        uGroup.modifiedBy = 0;
        uGroup.orgId = 0;
        uGroup.userGroup = null;
        uGroup.userProfile = null;
        var str1 = xms.getUserGrpProfile(uGroup);
        List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str1);
        dsGroupsList = Utility.ConvertToDataTable(listGroups);
        DataTable dttemp = dsGroupsList.Clone();
        for (int i = 0; i < dsGroupsList.Rows.Count; i++)
        {
            if (dsGroupsList.Rows[i]["userProfile"].ToString() == "ADMIN" || dsGroupsList.Rows[i]["userProfile"].ToString() == "GADMIN")
                dttemp.ImportRow(dsGroupsList.Rows[i]);
        }
        ddlGroup.DataSource = dttemp.DefaultView.ToTable(true, "groupDesc", "userGroup");
        ddlGroup.DataBind();
        ddlGroup.Items.Insert(0, "Please Select");
        ddlGroup.Items.FindByText("Please Select").Value = "0";
    }

    private string BindName()
    {
        DataTable dt = null;
        string str = xms.searchOrg(string.Empty);
        List<OrgListVO> productList = ser.Deserialize<List<OrgListVO>>(str);
        dt = Utility.ConvertToDataTable(productList);

        StringBuilder output = new StringBuilder();
        output.Append("[");
        for (int i = 0; i < dt.Rows.Count; ++i)
        {
            output.Append("\"" + dt.Rows[i]["Name"].ToString() + "\"");
            if (i != (dt.Rows.Count - 1))
                output.Append(",");
        }
        output.Append("];");
        return output.ToString();
    }

    void FillDropdowns()
    {
        //Fetch CURRENCY, MEASURE, DEPT, AUTOAPAPPROVAL, REGIONCD, ERCOUNTRYCD, ERUSERGROUPS and ERBUSINESSTYPE Codes
        string str = xms.getExpCodes(0, "ALL", 3);
        string[] arr = str.Split('~');
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(arr[0]);
        DataTable dt = Utility.ConvertToDataTable(lst);

        //Load Currency
        DataView dvCurrency = new DataView(dt, "CodeID = 'CURRENCY'", "CodeKey", DataViewRowState.CurrentRows);
        bindDropDowns(ddlCurrency, dvCurrency, "USD");

        //Load Measure
        DataView dvMeasure = new DataView(dt, "CodeID = 'MEASURE'", "CodeKey", DataViewRowState.CurrentRows);
        bindDropDowns(ddlMeasure, dvMeasure, "MILES");

        //Get AutoApprovalFlag
        DataView dvAP = new DataView(dt, "CodeID = 'AUTOAPAPPROVAL'", "CodeKey", DataViewRowState.CurrentRows);
        Session["dtSt"] = dvAP.ToTable();
        if (dvAP.ToTable().Rows[0]["codeKey"].ToString().ToLower() == "y")
            hdnApp.Value = "1";

        //Load RegionCodes
        //DataView dvReg = new DataView(dt, "CodeID = 'REGIONCD'", "CodeKey", DataViewRowState.CurrentRows);
        //bindDropDowns(ddlRgnCode, dvReg, string.Empty);

        //Load CountryCodes
        DataView dvCountry = new DataView(dt, "CodeID = 'ERCOUNTRYCD'", "CodeKey", DataViewRowState.CurrentRows);
        bindDropDowns(ddlCountry, dvCountry, string.Empty);

        //Load BusinessTypes
        DataView dvBType = new DataView(dt, "CodeID = 'ERBUSINESSTYPE'", "CodeKey", DataViewRowState.CurrentRows);
        bindDropDowns(ddlIndType, dvBType, string.Empty);

        DataView dvGroup = new DataView(dt, "CodeID = 'ERUSERGROUPS'", "CodeKey", DataViewRowState.CurrentRows);
        Session["GroupCode"] = dvGroup.ToTable();

        //Load Departments
        DataView dvDept = new DataView(dt, "CodeID = 'DEPT'", "CodeKey", DataViewRowState.CurrentRows);
        bindDropDowns(ddlDept, dvDept, string.Empty);

        //Fetch UserGroups and assigned Profiles 
        //UserGroupVO ug = new UserGroupVO();
        //ug.addedBy = 0;
        //ug.compCode = "ALL";
        //ug.groupId = 0;
        //ug.modifiedBy = 0;
        //ug.orgId = 0;
        //ug.userGroup = string.Empty;
        //ug.userProfile = string.Empty;
        //string strUgp = xms.getUserGrpProfile(ug);
        //List<UserGroupVO> lstUgp = ser.Deserialize<List<UserGroupVO>>(strUgp);
        //Session["dtUgp"] = Utility.ConvertToDataTable(lstUgp);
    }

    private void BindStates()
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
        txtCities.Text = string.Empty;
        txtZipCode.Text = string.Empty;
        txtCities.Focus();
    }

    void bindDropDowns(DropDownList ddl, DataView dv, string selectedValue)
    {       
        ddl.DataSource = dv;
        ddl.DataBind();
        if (selectedValue.Length == 0 & ddl != ddlCountry)
        {
            ddl.Items.Insert(0, "Please Select");
            ddl.Items.FindByText("Please Select").Value = "0";
        }
        else
            ddl.SelectedValue = selectedValue;
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1.PostedFile.FileName);
        int len = fupd1.PostedFile.ContentLength;
        if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".tiff")
        {
            if (len > 0 && len < 1048576)
            {
                HttpPostedFile hpf = fupd1.PostedFile;
                Session["fStream"] = fupd1.FileContent;
                Session["fName"] = fupd1.FileName;
            }
            else
            {
                dvError.InnerHtml = "Please upload file of size not exceeding 2MB.";
                dvError.Style["color"] = "Red";
            }
        }
        else
        {
            dvError.InnerHtml = "Please upload file of type .png/.jpg/.jpeg/.tiff/.pdf.";
            dvError.Style["color"] = "Red";
        }
    }

    byte[] SavedFileData()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStream"];
        System.Drawing.Image img = System.Drawing.Bitmap.FromStream(sf);
        fileData = ImageToByte2(img);
        return fileData;
    }

    public static byte[] ImageToByte2(System.Drawing.Image img)
    {
        byte[] byteArray = new byte[0];
        using (MemoryStream stream = new MemoryStream())
        {
            img.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
            stream.Close();
            byteArray = stream.ToArray();
        }
        return byteArray;
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        DataTable dtSt = (DataTable)Session["dtSt"];
        if (txtCompName.Text.ToString().Trim() == string.Empty)
            txtCompName.Text = txtOrganizationName.Text;
        if (txtCompCode.Text.ToString().Trim() == string.Empty)
        {
            if (txtOrganizationName.Text.Length > 3)
                txtCompCode.Text = txtOrganizationName.Text.Substring(0, 3);
            else
                txtCompCode.Text = txtOrganizationName.Text;
        }
        if (txtCompCode.Text.Substring(0, 3).ToLower() == "all")
        {
            dvError.Style["color"] = "Red";
            dvError.InnerHtml += "Please enter Compcode which is not 'ALL'";
            txtPassword.Attributes.Add("value", txtPassword.Text);
            txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
        }
        else if (Session["fStream"] != null)
        {
            fileData = SavedFileData();
            if (fileData != null)
                SaveInfo();
        }
        else
            SaveInfo();
    }

    void SaveInfo()
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

        OrganizationVO orgDetails = new OrganizationVO();
        orgDetails.orgId = "0";
        orgDetails.orgName = txtOrganizationName.Text;
        orgDetails.phone = txtPhone.Text;
        orgDetails.url = txtUrl.Text;
        orgDetails.currency = ddlCurrency.SelectedItem.Text;
        orgDetails.measurement = ddlMeasure.SelectedItem.Text;
        orgDetails.isActive = false;
        orgDetails.compName = txtCompName.Text;
        orgDetails.isSelfApproval = chkSelfAppr.Checked ? 1 : 0;
        orgDetails.city = city;
        orgDetails.state = ddlRgnCode.SelectedValue;
        orgDetails.modifiedBy = Convert.ToInt32(Session["UserID"]);
        orgDetails.address1 = txtAddr1.Text;
        orgDetails.address2 = txtAddr2.Text;
        orgDetails.countryCode = ddlCountry.SelectedValue;
        orgDetails.businessType = ddlIndType.SelectedItem.Text;
        orgDetails.zipCode = txtZipCode.Text;
        orgDetails.orgCode = txtOrgcode.Text;
        orgDetails.logo = fileData;
        orgDetails.logoPath = fileData != null ? txtOrganizationName.Text.Trim() : string.Empty;

        UserVO memberDetails = new UserVO();
        memberDetails.userId = 0;
        memberDetails.fName = txtAdminFName.Text;
        memberDetails.lName = txtAdminLName.Text;
        memberDetails.email = txtAdminEmail.Text;
        memberDetails.password = txtPassword.Text;
        memberDetails.phone = txtPhone.Text;
        memberDetails.designation = txtJobTitle.Text;
        memberDetails.employeeId = txtEmpID.Text;
        memberDetails.subDomain = string.Empty;
        memberDetails.managerId = 0;
        memberDetails.levelId = 0;
        memberDetails.orgId = 0;
        memberDetails.approvalLimit = ut.NullSafeDouble(lblApprovalLimit.Text);
        memberDetails.addEdon = DateTime.Now.ToShortDateString();
        memberDetails.departmentCode = ddlDept.SelectedValue;
        memberDetails.pwdUpdated = true;
        memberDetails.isActive = true;
        memberDetails.modifiedDate = DateTime.Now.ToShortDateString();
        memberDetails.compCode = txtCompCode.Text;
        memberDetails.isAdmin = false;
        memberDetails.isAp = false;
        memberDetails.isManager = false;
        memberDetails.userGroup = ddlGroup.SelectedValue;
        memberDetails.type = 1;
        memberDetails.csEnableFlag = 0;
        memberDetails.reviewFlag = 0;
        memberDetails.receivingMgr = 0;
        memberDetails.businessType = string.Empty;
        string returnStr = xms.addOrganization(orgDetails, memberDetails);

        if (returnStr.ToLower().Contains("succes"))
        {
            dvError.Style["color"] = "Green";
            ClearFields();
            dvError.InnerHtml = returnStr;
            lblFileName.Text = string.Empty;
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('redirectPage()', 2000);", true);
        }
        else
        {
            dvError.Style["color"] = "Red";
            txtPassword.Attributes.Add("value", txtPassword.Text);
            txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
            txtCompCode.Text = string.Empty;
            dvError.InnerHtml = returnStr;
        }
    }

    void ClearFields()
    {
        txtOrganizationName.Text = txtPhone.Text = txtUrl.Text = txtAdminFName.Text = txtAdminLName.Text = txtAdminEmail.Text = txtPassword.Text = txtConfirmPwd.Text =
            txtCompName.Text = txtCompCode.Text = txtZipCode.Text = txtAddr1.Text = txtAddr2.Text = txtUrl.Text = lblApprovalLimit.Text = txtCities.Text = txtOrgcode.Text =
            txtEmpID.Text = txtJobTitle.Text = string.Empty;
        ddlIndType.SelectedIndex = ddlCountry.SelectedIndex = ddlRgnCode.SelectedIndex = ddlDept.SelectedIndex = 0;

        chkSelfAppr.Checked = false;
        txtPassword.Attributes.Clear();
        txtConfirmPwd.Attributes.Clear();
        ddlCurrency.SelectedValue = "USD";
        ddlMeasure.SelectedValue = "MILES";
    }

    protected void btnBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("Login.aspx");
    }

    protected void btnOk_Click(object sender, EventArgs e)
    {
        Response.Redirect("Login.aspx");
    }

    protected void GroupSelected(object sender, EventArgs e)
    {
        if (ddlGroup.SelectedValue != "0")
        {
            DataTable dtUgp = (DataTable)Session["GroupCode"];
            DataView dv = new DataView(dtUgp, "CodeKey = '" + ddlGroup.SelectedValue + "'", "CodeKey", DataViewRowState.CurrentRows);
            lblApprovalLimit.Text = dv.ToTable().Rows[0]["CodeValue1"].ToString();
            if (ut.NullSafeDouble(lblApprovalLimit.Text) > 0)
                dvApprLmt.Style["display"] = "block";
            else
                dvApprLmt.Style["display"] = "none";
        }
        else
            dvApprLmt.Style["display"] = "none";
        RetainPasswords();
        if (Session["fName"] != null)
            lblFileName.Text = Session["fName"].ToString();
    }

    void RetainPasswords()
    {
        txtPassword.Attributes.Add("value", txtPassword.Text);
        txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);
        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback();", true);
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ClearFields();
        dvApprLmt.Style.Add("display", "none");
    }

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
    #endregion
}