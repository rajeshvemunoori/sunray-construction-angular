using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.Services;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Text;

public partial class UsersReg : System.Web.UI.Page
{
    #region private variables

    int ret = 0;
    int UserId;
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Mails mails = new Mails();
    Encryption encrypt = new Encryption();
    Utility ut = new Utility();

    #endregion

    #region User Registration

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
            btnSave.Attributes.Add("onclick", "javascript:return validateUser();");

            if (!IsPostBack)
            {
                dvDept.Style["display"] = "none";
                BindName();
                txtOrganization.Focus();
            }
        }

        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), 0);
            ClearFields();
        }
    }

    private void GetUserGroups()
    {
        UserGroupVO ug = new UserGroupVO();
        ug.addedBy = 0;
        ug.compCode = string.Empty;
        ug.modifiedBy = 0;
        ug.orgId = 0;
        ug.userGroup = string.Empty;
        ug.userProfile = string.Empty;
        string str = xms.getUserGrpProfile(ug);
        List<UserGroupVO> lst = ser.Deserialize<List<UserGroupVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        string expr = "userGroup = 'USER' AND userProfile = 'USER'";
        DataView dv = new DataView(dt, expr, "userGroup", DataViewRowState.CurrentRows);
        ddlGroup.DataSource = dv;
        ddlGroup.DataBind();
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        //if (cbUser.Checked == true)
        saveUserInfo();
        //else if (cbManager.Checked == true)
        //{
        //    DataSet dsmgr = new DataSet();
        //    var mgrs = xms.getManagers(0, Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, 1);
        //    List<UserVO> managers = ser.Deserialize<List<UserVO>>(mgrs);
        //    dsmgr.Tables.Add(Utility.ConvertToDataTable(managers));

        //    if (dsmgr.Tables[0].Rows.Count > 0)
        //    {
        //        //Begin filter to split email with '-'//
        //        DataTable dttrimMgrs = dsmgr.Tables[0];
        //        DataTable dataMgrs = dttrimMgrs.Clone();
        //        foreach (DataRow dr in dttrimMgrs.Rows)
        //        {
        //            dataMgrs.ImportRow(dr);
        //        }
        //        int m = 0;
        //        string[] dsMgrArray = new string[1];
        //        for (m = 0; m < dataMgrs.Rows.Count; m++)
        //        {
        //            dsMgrArray = dsmgr.Tables[0].Rows[m]["Email"].ToString().Split('-');
        //            dataMgrs.Rows[m]["Email"] = dsMgrArray[0].Trim();
        //        }
        //        //End filter to split email with '-'//

        //        for (int i = 0; i < dataMgrs.Rows.Count; i++)
        //        {
        //            if (txtManager.Text == dataMgrs.Rows[i]["Email"].ToString())
        //            {
        //                if (Convert.ToInt32(txtApprLimit.Text) > Convert.ToInt32(dsmgr.Tables[0].Rows[i]["approvalLimit"]))
        //                {
        //                    dvError.InnerHtml = " Approval limit can not be more than Managers approval limit (" + dsmgr.Tables[0].Rows[i]["approvalLimit"] + ")";
        //                    Retainpwd();
        //                }
        //                else
        //                    saveUserInfo();
        //            }
        //            else
        //            {
        //                dvError.InnerHtml = " Manager does not exists for this organization! ";
        //                Retainpwd();
        //            }
        //        }
        //    }
        //    dvApprLmt.Style["display"] = "block";
        //}
        //else
        //{
        //    dvError.InnerHtml = "Please select User or Manager profile to create.";
        //    Retainpwd();
        //}
    }

    void saveUserInfo()
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

        UserVO memberDetails = new UserVO();
        memberDetails.addedBy = 0;
        memberDetails.addEdon = DateTime.Now.ToShortDateString();
        memberDetails.appFlag = string.Empty;
        memberDetails.approvalLimit = 0;
        memberDetails.businessType = string.Empty;
        memberDetails.cashAdv = 0;
        memberDetails.city = city;
        memberDetails.compAddress = string.Empty;
        memberDetails.companyCar = chkCompCar.Checked;
        memberDetails.compCode = ddlCompCode.SelectedItem.Text;
        memberDetails.csEnableFlag = 0;
        memberDetails.currency = string.Empty;
        memberDetails.departmentCode = ddlDeptCodes.SelectedItem.Text;
        memberDetails.designation = txtDesignation.Text.Trim();
        memberDetails.digitalFlag = 0;
        memberDetails.email = txtEmail.Text.Trim();
        memberDetails.employeeId = txtEmpID.Text.Trim();
        memberDetails.fName = txtFirstName.Text.Trim();
        memberDetails.isActive = true;
        memberDetails.isAdmin = false;
        memberDetails.isAp = false;
        memberDetails.isManager = false;
        memberDetails.isSelfApproval = 0;
        memberDetails.levelId = 0;
        memberDetails.lName = txtLastName.Text.Trim();
        memberDetails.maintenanceFlag = string.Empty;
        memberDetails.managerApprovalLimit = 0;
        memberDetails.managerEmail = txtManager.Text;
        memberDetails.managerId = 0;
        memberDetails.managerName = string.Empty;
        memberDetails.measure = string.Empty;
        memberDetails.modifiedBy = 0;
        memberDetails.modifiedDate = DateTime.Now.ToShortDateString();
        memberDetails.orgId = ut.NullSafeInteger(Session["OrgID"]);
        memberDetails.password = txtPassword.Text.Trim();
        memberDetails.phone = txtPhone.Text.Trim();
        memberDetails.pwdUpdated = true;
        memberDetails.receivingMgr = 0;
        memberDetails.regionCode = ddlRgnCode.SelectedValue;
        memberDetails.reviewFlag = 0;
        memberDetails.signatureText = string.Empty;
        memberDetails.subDomain = string.Empty;
        memberDetails.type = 2;
        memberDetails.userGroup = ddlGroup.SelectedValue;
        memberDetails.userId = 0;
        memberDetails.userSelfApproval = 0;
        memberDetails.vendorFlag = string.Empty;

        string returnStr = xms.addUser(memberDetails, txtOrganization.Text.Trim(), txtManager.Text.Trim(), ddlCompCode.SelectedItem.Text);

        if (returnStr.ToLower().Contains("succes"))
        {
            dvError.Style["color"] = "Green";
            ClearFields();
        }
        else
        {
            dvError.Style["color"] = "Red";
            Retainpwd();
        }
        dvError.InnerHtml = returnStr;
    }

    void Retainpwd()
    {
        txtPassword.Attributes.Add("value", txtPassword.Text);
        txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
    }

    void ClearFields()
    {
        txtFirstName.Text = string.Empty;
        txtLastName.Text = string.Empty;
        txtEmail.Text = string.Empty;
        txtPassword.Text = string.Empty;
        txtConfirmPwd.Text = string.Empty;
        txtPhone.Text = string.Empty;
        txtDesignation.Text = string.Empty;
        txtManager.Text = string.Empty;
        txtOrganization.Text = string.Empty;
        txtEmpID.Text = string.Empty;
        dvDept.Style["display"] = "none";
        ddlCompCode.Items.Clear();
        ddlDeptCodes.Items.Clear();
        ddlRgnCode.Items.Clear();
        txtPassword.Attributes.Clear();
        txtConfirmPwd.Attributes.Clear();
        txtCities.Text = string.Empty;
        //cbUser.Checked = false;
        //cbManager.Checked = false;
        //txtApprLimit.Text = string.Empty;
        //dvApprLmt.Style["display"] = "none";
        ScriptManager.RegisterStartupScript(this, this.GetType(), "load fields", "LoadList();", true);
    }

    private string BindName()
    {
        DataTable dt = null;
        string str = xms.searchOrg(string.Empty);
        List<OrgListVO> productList = ser.Deserialize<List<OrgListVO>>(str);
        dt = Utility.ConvertToDataTable(productList);

        Session["OrgList"] = dt;

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

    protected void btnBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("Login.aspx");
    }

    protected void txtOrganization_TextChanged(object sender, EventArgs e)
    {
        DataSet dt = new DataSet();
        var compData = xms.getCompCodes(txtOrganization.Text, 1);
        List<CompanyCodesVO> compCodes = ser.Deserialize<List<CompanyCodesVO>>(compData);
        dt.Tables.Add(Utility.ConvertToDataTable(compCodes));
        if (dt.Tables[0].Rows.Count > 0)
        {
            ddlCompCode.DataSource = compCodes;
            ddlCompCode.DataBind();
            ddlCompCode.Items.Insert(0, "Please Select");
            ddlCompCode.Items.FindByText("Please Select").Value = "0";
            ddlDeptCodes.Enabled = false;
            ddlRgnCode.Enabled = false;
            dvDept.Style["display"] = "block";
            Session["OrgID"] = dt.Tables[0].Rows[0]["OrgID"].ToString();
            // BindCities();
        }
        else
        {
            dvDept.Style["display"] = "none";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "InvalidOrganization", "alert('Organization does not exist.'); document.getElementById('txtOrganization').value = '';", true);
        }
        ScriptManager.RegisterStartupScript(this, this.GetType(), "load fields", "LoadList();", true);
        Retainpwd();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlCompCode.SelectedValue != "0")
        {
            var deptData = xms.getCodes(0, "ALL", "DEPT");
            List<CodeValueVO> dept = ser.Deserialize<List<CodeValueVO>>(deptData);
            bindDropDowns(ddlDeptCodes, dept);

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
            ddlRgnCode.Enabled = true;
            GetUserGroups();
        }

        ScriptManager.RegisterStartupScript(this, this.GetType(), "load fields", "LoadList();", true);
        txtPassword.Attributes.Add("value", txtPassword.Text);
        txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
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
        txtFirstName.Focus();
    }

    void bindDropDowns(DropDownList ddl, List<CodeValueVO> codes)
    {
        ddl.DataSource = codes;
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
        ddl.Enabled = true;
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ClearFields();
        dvError.InnerHtml = string.Empty;
        ScriptManager.RegisterStartupScript(this, this.GetType(), "load fields", "LoadList();", true);

    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);
        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback();", true);
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

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetOrgs(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["OrgList"];
        DataView dv = new DataView(dt, "Name LIKE '%" + prefixText + "%'", "Name", DataViewRowState.CurrentRows);
        string[] orgNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            orgNames[i] = dv.ToTable().Rows[i][1].ToString();
        return orgNames;
    }
    #endregion
}
