using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Text;

public partial class Admin_CreateUser : System.Web.UI.Page
{
    #region public variables
    int ret = 0;
    int orgId = 0;
    public int userId = 0;
    int mgrId = 0;
    public int userid = 0;
    public int userid_AP = 0;
    DataSet dsmanager = new DataSet();
    DataTable dsfilterdmgrs = new DataTable();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dsCopmCodes = new DataTable();
    private bool _refreshExp = false;
    public char currencySymbol;

    #endregion

    #region CreateUser

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Logout.aspx");
        else
        {
            try
            {
                txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
                btnSave.Attributes.Add("onclick", "javascript:return validateAdminUser();");
                orgId = Convert.ToInt32(Session["OrgID"]);
                userId = Convert.ToInt32(Session["UserID"]);
                if (!IsPostBack)
                {
                    Session.Remove("Roles");
                    GetManagersList(Session["CompCode"].ToString());
                    BindCompCodes();
                    BindGroups();
                    BindStates();
                    dvGroupTip.Style["display"] = "none";
                    if (dsmanager.Tables[0].Rows.Count == 0)
                    {
                        if (Session["AppFlag"].ToString() == "Y")
                            Session["MgrCnt"] = "0";
                        else
                        {
                            Session["APCnt"] = "0";
                            dvLimit.Style.Add("display", "none");
                            lblApproval.Text = "0";
                        }
                        ddlManagers.Enabled = false;
                    }
                    else
                    {
                        lblApproval.Text = "0";
                        hdnMgrCnt.Value = dsmanager.Tables[0].Rows.Count.ToString();
                        if (dsmanager.Tables[0].Rows.Count > 0)
                            ddlManagers.Enabled = true;
                        else
                            ddlManagers.Enabled = false;
                    }
                    dvLimit.Style.Add("display", "none");
                    chkSelfAppr.Enabled = false;
                    dvReview.Style.Add("display", "none");
                    txtCashAdv.Text = "0";
                    chkPwd.Checked = true;
                    txtFirstName.Focus();
                }
            }
            catch (Exception ex)
            {
                xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
            }
        }
    }

    private void GetManagersList(string CompCode)
    {
        var managerDetails = xms.getManagers(0, Convert.ToInt32(Session["OrgID"]), CompCode, 2);
        List<UserVO> managers = ser.Deserialize<List<UserVO>>(managerDetails);
        dsmanager.Tables.Add(Utility.ConvertToDataTable(managers));
        Session["Roles"] = dsmanager;
    }

    private void BindDeptCodes()
    {
        var deptData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> dept = ser.Deserialize<List<CodeValueVO>>(deptData);
        ddlDeptCodes.DataSource = dept;
        ddlDeptCodes.DataBind();
        ddlDeptCodes.Items.Insert(0, "Please Select");
        ddlDeptCodes.Items.FindByText("Please Select").Value = "0";
        ddlDeptCodes.Enabled = true;
    }

    private void BindCompCodes()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            var compData = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> compCodes = ser.Deserialize<List<CompanyCodesVO>>(compData);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(compCodes));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];
        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataBind();
        ddlCompCode.Items.Insert(0, "Please Select");
        ddlCompCode.Items.FindByText("Please Select").Value = "0";
        Session["CompCodes"] = dsCompCodes;
        dvLimit.Style.Add("display", "none");
        if (Session["GAdmin"] == "false")
        {
            ddlCompCode.SelectedValue = Session["CompCode"].ToString();
            ddlCompCode.Enabled = false;
            BindFieldsByCompCode();
        }
        else
            ddlCompCode.Enabled = true;

        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv1 = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv1.ToTable().Rows[0]["CodeValue1"]);
    }

    private void BindManagers(DataSet dsBindManagers)
    {
        string expression = "CompCode=" + ddlCompCode.SelectedValue;
        DataTable dtManagers = dsBindManagers.Tables[0];
        DataView dvMgrLevel = new DataView(dtManagers, expression, "CompCode", DataViewRowState.CurrentRows);
        DataTable dtMgrDetails = dvMgrLevel.ToTable();
        ddlManagers.DataSource = dtMgrDetails;
        ddlManagers.DataTextField = "Email";
        ddlManagers.DataValueField = "UserID";
        ddlManagers.DataBind();
        ddlManagers.Items.Insert(0, "Please Select");
        ddlManagers.Items.FindByText("Please Select").Value = "0";
    }

    private void BindGroups()
    {
        DataTable dtGroupsList = new DataTable();
        if (Session["Groups"] == null)
        {
            UserGroupVO uGroup = new UserGroupVO();
            uGroup.addedBy = 0;
            uGroup.compCode = string.Empty;
            uGroup.groupId = 0;
            uGroup.modifiedBy = 0;
            uGroup.orgId = Convert.ToInt32(Session["OrgID"]);
            uGroup.userGroup = string.Empty;
            uGroup.userProfile = string.Empty;
            var str1 = xms.getUserGrpProfile(uGroup);
            List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str1);
            dtGroupsList = Utility.ConvertToDataTable(listGroups);
            Session["Groups"] = dtGroupsList;
        }
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

    private void ClearFields()
    {
        txtFirstName.Text = string.Empty;
        txtLastName.Text = string.Empty;
        txtEmail.Text = string.Empty;
        txtPassword.Text = string.Empty;
        txtConfirmPwd.Text = string.Empty;
        txtPhone.Text = string.Empty;
        txtDesignation.Text = string.Empty;
        lblApprLimit.Text = string.Empty;
        //txtlmtamnt.Text = string.Empty;
        if (Session["GAdmin"] == null)
        {
            ddlCompCode.SelectedValue = Session["CompCode"].ToString();
            ddlCompCode.Enabled = false;
        }
        else
        {
            ddlCompCode.SelectedValue = "0";
            ddlCompCode.Enabled = true;
        }
        ddlDeptCodes.Items.Clear();
        ddlRgnCode.SelectedValue = "0";
        ddlManagers.SelectedValue = "0";
        lblApproval.Text = string.Empty;
        txtEmpID.Text = string.Empty;
        txtPassword.Attributes.Clear();
        txtConfirmPwd.Attributes.Clear();
        txtCashAdv.Text = string.Empty;
        chkSelfAppr.Checked = false;
        chkCSEnb.Checked = false;
        txtCities.Text = string.Empty;
        ddlGroups.Items.Clear();
        ddlGroups.Enabled = true;
        chkPwd.Checked = true;
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        bool CsFlagSave = false;
        dvError.InnerHtml = string.Empty;

        if (ddlManagers.Items.Count > 0 || ddlManagers.Enabled == true)
        {
            if (chkCSEnb.Checked == true)
            {
                if (ddlManagers.SelectedValue == "0")
                {
                    dvError.InnerHtml = "Please select Manager Email";
                    dvError.Style["color"] = "Red";
                }
                else
                    CsFlagSave = true;
            }
            else
                CsFlagSave = true;
        }
        else
            CsFlagSave = true;
        if (CsFlagSave == true)
            SaveInfo();
    }

    private void SaveInfo()
    {
        if (orgId > 0)
        {
            int mgrID = 0;
            string[] mgrArray = new string[2];
            if (ddlManagers.Items.Count > 0 || ddlManagers.Enabled == true)
            {
                mgrArray = ddlManagers.SelectedItem.Text.Split('-');
                mgrID = ut.NullSafeInteger(ddlManagers.SelectedValue);
            }
            else
            {
                mgrArray[0] = string.Empty;
                mgrArray[1] = string.Empty;
                mgrID = 0;
            }

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
            memberDetails.userId = 0;
            memberDetails.fName = txtFirstName.Text;
            memberDetails.lName = txtLastName.Text;
            memberDetails.email = txtEmail.Text;
            memberDetails.password = txtPassword.Text;
            memberDetails.phone = txtPhone.Text;
            memberDetails.designation = txtDesignation.Text;
            memberDetails.employeeId = txtEmpID.Text;
            memberDetails.subDomain = string.Empty;
            memberDetails.managerId = mgrID;
            memberDetails.managerEmail = mgrArray[0].Trim();
            memberDetails.levelId = 0;
            memberDetails.orgId = Convert.ToInt32(Session["OrgID"]);
            memberDetails.approvalLimit = ut.NullSafeDouble(lblApprLimit.Text);
            memberDetails.addEdon = DateTime.Now.ToShortDateString();
            memberDetails.departmentCode = ddlDeptCodes.SelectedValue;
            memberDetails.pwdUpdated = chkPwd.Checked ? true : false;
            memberDetails.isActive = true;
            memberDetails.modifiedDate = DateTime.Now.ToShortDateString();
            memberDetails.compCode = ddlCompCode.SelectedValue;
            memberDetails.isAdmin = false;
            memberDetails.isAp = false;
            memberDetails.isManager = false;
            memberDetails.type = 2;
            memberDetails.cashAdv = ut.NullSafeDouble(txtCashAdv.Text);
            memberDetails.regionCode = ddlRgnCode.SelectedValue;
            memberDetails.isSelfApproval = chkSelfAppr.Checked ? 1 : 0;
            memberDetails.companyCar = chkCompCar.Checked;
            memberDetails.city = city;
            memberDetails.csEnableFlag = chkCSEnb.Checked ? 1 : 0;
            memberDetails.reviewFlag = chkReview.Checked ? 1 : 0;
            memberDetails.receivingMgr = 0;
            memberDetails.userGroup = ddlGroups.SelectedValue;
            memberDetails.businessType = string.Empty;
            //memberDetails.signArray = null;
            //memberDetails.signatureText = string.Empty;
            //memberDetails.signPath = string.Empty;
            //memberDetails.orgSignArray = null;
            //memberDetails.vendorFlag = string.Empty;
            //memberDetails.digitalFlag = 0;
            string returnStr = xms.createUser(memberDetails);

            if (returnStr.ToLower().Contains("succes"))
            {
                dvError.Visible = true;
                dvError.InnerHtml = returnStr;
                dvError.Style["color"] = "Green";
                dvApproval.Style.Add("display", "none");
                BindGroups();
                BindCompCodes();
                dvLimit.Style.Add("display", "none");
                lblApproval.Text = "0";
                dsmanager = (DataSet)Session["Roles"];
                if (dsmanager.Tables[0].Rows.Count > 0)
                {
                    hdnMgrCnt.Value = "1";
                    ddlManagers.DataSource = dsmanager;
                    ddlManagers.DataTextField = "Email";
                    ddlManagers.DataValueField = "UserID";
                    ddlManagers.DataBind();
                    ddlManagers.Items.Insert(0, "Please Select");
                    ddlManagers.Items.FindByText("Please Select").Value = "0";
                }
                else
                {
                    hdnMgrCnt.Value = "0";
                    ddlManagers.Enabled = false;
                }
                dvReview.Style.Add("display", "none");
                ClearFields();
            }
            else
            {
                dvError.Visible = true;
                dvError.InnerHtml = returnStr;
                dvError.Style["color"] = "Red";
                RetainPwd();
            }
        }
        else
            Response.Redirect("Logout.aspx");
    }

    protected void ddlGroups_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlGroups.SelectedValue != "0")
            dvGroupTip.Style["display"] = "block";
        else
            dvGroupTip.Style["display"] = "none";
        dvError.InnerHtml = string.Empty;
        DataTable dsGroupsList = (DataTable)Session["Groups"];
        string exp = "groupDesc = '" + ddlGroups.SelectedItem.Text + "'";
        DataView dtview = new DataView(dsGroupsList, exp, "userGroup", DataViewRowState.CurrentRows);
        DataTable dttempGroup = dtview.ToTable();
        string[] arr = dttempGroup.AsEnumerable().Select(row => row.Field<string>("userProfile")).ToArray();
        Session["profilearr"] = arr;

        //Display group approval limit
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'ERUSERGROUPS' and CodeKey = '" + ddlGroups.SelectedValue + "'";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            lblApprLimit.Text = dv.ToTable().Rows[0]["CodeValue1"].ToString();
        else
            lblApprLimit.Text = "0";
        //txtlmtamnt.Text = string.Empty;

        if (ut.NullSafeDouble(lblApprLimit.Text) > 0)
            dvLimit.Style.Add("display", "block");
        else
            dvLimit.Style.Add("display", "none");

        if ((Session["OrgSelfAppr"].ToString() == "1") && (arr.Contains("MGR")) && (arr.Contains("RECMGR")))
            chkSelfAppr.Enabled = true;
        chkSelfAppr.Checked = false;

        if (ddlGroups.SelectedValue == "0")
            ddlManagers.Items.Clear();
        else
        {
            DataTable dtfiltMgrs = FilteredCDMgrs();
            if (dtfiltMgrs.Rows.Count > 0)
            {
                ddlManagers.DataSource = FilteredCDMgrs();
                ddlManagers.DataTextField = "Email";
                ddlManagers.DataValueField = "UserID";
                ddlManagers.DataBind();
                ddlManagers.Items.Insert(0, "Please Select");
                ddlManagers.Items.FindByText("Please Select").Value = "0";
                ddlManagers.Enabled = true;
            }
            else
                ddlManagers.Enabled = false;
        }
        RetainPwd();
    }

    private DataTable FilteredCDMgrs()
    {
        DataSet dtManagers = (DataSet)Session["Roles"];
        string expr = string.Empty;
        DataSet dsCompCodes = (DataSet)Session["CompCodesList"];
        DataView dvComp = new DataView(dsCompCodes.Tables[0], "CompCode = '" + ddlCompCode.SelectedValue + "'", "CompCode", DataViewRowState.CurrentRows);
        string compAppFlag = dvComp.ToTable().Rows[0]["appFlag"].ToString();
        Session["CompAppFlag"] = compAppFlag;
        double apprLmt = lblApprLimit.Text == "" ? 0 : ut.NullSafeDouble(lblApprLimit.Text);
        if (compAppFlag.ToLower() == "y")
            expr = "approvalLimit >= " + apprLmt;
        else
            expr = "(approvalLimit >= " + apprLmt + ") OR (approvalLimit = 0)";
        DataView dv = new DataView(dtManagers.Tables[0], expr, "approvalLimit", DataViewRowState.CurrentRows);
        Session["SelCompCdMgr"] = dv.ToTable();
        return dv.ToTable();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindFieldsByCompCode();
        RetainPwd();
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
        txtCities.Focus();
    }

    private void BindFieldsByCompCode()
    {
        dvError.InnerHtml = string.Empty;
        if (ddlCompCode.SelectedValue == "0")
        {
            ddlGroups.Items.Clear();
            ddlDeptCodes.Items.Clear();
            ddlRgnCode.Items.Clear();
            ddlManagers.Items.Clear();
            dvLimit.Style.Add("display", "none");
            lblApprLimit.Text = string.Empty;
            //txtlmtamnt.Text = string.Empty;
        }
        else
        {
            GetManagersList(ddlCompCode.SelectedValue);
            if (Session["GAdmin"] == "false")
                BindGroups();
            DataTable dtGrup = (DataTable)Session["Groups"];
            string exp = "compCode ='" + ddlCompCode.SelectedValue + "'";
            DataView dtgrps = new DataView(dtGrup, exp, "compCode", DataViewRowState.CurrentRows);
            DataTable dt = dtgrps.ToTable();
            ddlGroups.DataSource = dt.DefaultView.ToTable(true, "groupDesc", "userGroup");
            ddlGroups.DataBind();
            ddlGroups.Items.Insert(0, "Please Select");
            ddlGroups.Items.FindByText("Please Select").Value = "0";

            BindDeptCodes();
            DataTable dtclnGroups = dt.Clone();
            DataTable dttemp = FilteredCDMgrs();
            DataTable dsfilterdmgrs = (DataTable)Session["SelCompCdMgr"];
            if (dsfilterdmgrs.Rows.Count == 0)
            {
                if (Session["CompAppFlag"].ToString().ToLower() == "y")
                {
                    for (int j = 0; j < dt.Rows.Count; j++)
                    {
                        if (dt.Rows[j]["userProfile"].ToString() == "MGR")
                            dtclnGroups.ImportRow(dt.Rows[j]);
                    }
                }
                else
                {
                    for (int j = 0; j < dt.Rows.Count; j++)
                    {
                        if (dt.Rows[j]["userProfile"].ToString() == "AP")
                            dtclnGroups.ImportRow(dt.Rows[j]);
                    }
                }
                ddlGroups.DataSource = dtclnGroups.DefaultView.ToTable(true, "groupDesc", "userGroup");
                ddlGroups.DataBind();
                ddlGroups.Items.Insert(0, "Please Select");
                ddlGroups.Items.FindByText("Please Select").Value = "0";
            }

            if (ddlGroups.SelectedValue == "0")
                chkSelfAppr.Enabled = false;
            else
                chkSelfAppr.Enabled = true;
        }
        chkCSEnb.Checked = false;
        dvReview.Style["display"] = "none";
        RetainPwd();
        ddlDeptCodes.Focus();
    }

    private void RetainPwd()
    {
        txtPassword.Attributes.Add("value", txtPassword.Text);
        txtConfirmPwd.Attributes.Add("value", txtConfirmPwd.Text);
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ClearFields();
        dvError.InnerHtml = string.Empty;
    }

    protected void chkSelfAppr_CheckChanged(object sender, EventArgs e)
    {
        if (chkSelfAppr.Checked)
        {
            string[] arr = (string[])Session["profilearr"];
            if (arr != null)
            {
                if (arr.Contains("MGR") || arr.Contains("RECMGR"))
                    ddlManagers.Enabled = false;
                else
                {
                    dvError.InnerHtml = "Please Select a Group which have Manager or Receive Manager Profiles.";
                    dvError.Style["color"] = "Red";
                    chkSelfAppr.Checked = false;
                }
            }
            else
            {
                dvError.InnerHtml = "Please Select a Group.";
                dvError.Style["color"] = "Red";
            }
        }
        else
            ddlManagers.Enabled = true;
        RetainPwd();
    }

    protected void chkCSEnb_Changed(object sender, EventArgs e)
    {
        if (chkCSEnb.Checked)
        {
            DataTable dtCsCode = new DataTable();
            if (ddlCompCode.SelectedValue != "0")
            {
                var str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "CSDRAFTCOST");
                List<CodeValueVO> CsCod = ser.Deserialize<List<CodeValueVO>>(str);
                dtCsCode = Utility.ConvertToDataTable(CsCod);
                dvError.InnerHtml = "This flag will enable Customer Service to review your Drafts folder and create Expenses for you to review and submit. This will cost $" + Convert.ToDouble(dtCsCode.Rows[0]["codeKey"]) + " for each drafts that is converted into expense.";
            }
            dvReview.Style.Add("display", "block");
        }
        else
        {
            dvReview.Style.Add("display", "none");
            dvError.InnerHtml = string.Empty;
        }
    }

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
