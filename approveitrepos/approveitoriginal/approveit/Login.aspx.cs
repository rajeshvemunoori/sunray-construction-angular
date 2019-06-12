using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Mail;
using System.IO;
using System.Web.Security;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.ComponentModel;
using System.Security.Cryptography;
using System.Text;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;

public partial class Login : System.Web.UI.Page
{
    #region private variables

    //XmsExpenseServiceBetaImplClient xms = new XmsExpenseServiceBetaImplClient();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    HttpCookie myCookie = new HttpCookie("myCookie");
    Encryption encrypt = new Encryption();
    Mails mails = new Mails();
    DataSet dsUser = new DataSet();
    int userId = 0;
    int adminId = 0;
    string email;
    string key = string.Empty;
    string dcPwd = string.Empty;

    #endregion

    #region User Login

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            btnSubmit.Attributes.Add("onclick", "javascript:return validateLogin();");
            btnSubmit1.Attributes.Add("onclick", "javascript:return validateEmail();");
            btnOk.Attributes.Add("onclick", "javascript:return validateComents();");
            lnkRegisterBtn.Attributes.Add("onclick", "javascript:return openRegDialog();");
            if (!Page.IsPostBack)
            {
                if (Session["UserID"] != null && Request.QueryString.Count == 0)
                    Response.Redirect("DashBoard.aspx");
                else
                {
                    if (Request.QueryString.Count > 0)
                    {
                        hdnType.Value = Request.QueryString["tp"];
                        if (hdnType.Value == "2")
                        {
                            hdnEMail.Value = Request.QueryString["em"];
                            hdnReqID.Value = Request.QueryString["rid"];
                            hdnUserIDReq.Value = Request.QueryString["ur"];
                            hdnPreApproved.Value = Request.QueryString["pr"];
                            hdnApproved.Value = Request.QueryString["ar"];
                            hdnQSEmail.Value = xms.getStrDecrypt(hdnEMail.Value);
                            txtEmail.Text = hdnQSEmail.Value;
                        }
                    }
                    if ((!string.IsNullOrEmpty(Cookie_Details.GetCookie("UserName"))) && (!string.IsNullOrEmpty(Cookie_Details.GetCookie("Password"))))
                    {
                        var memberDetails = xms.getUserDetails(Cookie_Details.GetCookie("UserName"));
                        List<UserVO> users = ser.Deserialize<List<UserVO>>(memberDetails);
                        dsUser.Tables.Add(Utility.ConvertToDataTable(users));
                        CheckUserExists(1);
                    }
                }
                txtEmail.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), 0);
        }
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (!string.IsNullOrEmpty(hdnQSEmail.Value))
        {
            if (hdnQSEmail.Value.Contains(','))// for comma seperated emails
            {
                string[] arr = hdnQSEmail.Value.Split(',');
                if (arr.Contains(txtEmail.Text))
                    GetUserDetails();
            }
            else
            {
                if (hdnQSEmail.Value == txtEmail.Text)
                    GetUserDetails();
                else
                {
                    dvError.Style["color"] = "Red";
                    dvError.InnerHtml = "Please enter a valid email.";
                }
            }
        }
        else
            GetUserDetails();
    }

    private void GetUserDetails()
    {
        var memberDetails = xms.getUserDetails(txtEmail.Text);
        List<UserVO> users = ser.Deserialize<List<UserVO>>(memberDetails);
        dsUser.Tables.Add(Utility.ConvertToDataTable(users));
        if (dsUser.Tables[0].Rows.Count > 0)
        {
            if (ut.NullSafeInteger(dsUser.Tables[0].Rows[0]["OrgID"]) == 0 && dsUser.Tables[0].Rows[0]["VendorFlag"].ToString().ToUpper() == "Y")
                VendorAccess();
            else
                CheckUserExists(2);
        }
        else
            CheckUserExists(2);
    }

    private void CheckUserExists(int type)
    {
        string desc = string.Empty;
        if (dsUser.Tables[0].Rows.Count > 0)
        {
            string[] firstAtts = new string[2];
            string sp = dsUser.Tables[0].Rows[0]["maintenanceFlag"].ToString();
            firstAtts = sp.Split('~');
            string flag = firstAtts[0];
            desc = firstAtts[1];
            if (flag.ToLower().Contains("n"))
            {
                Session["LogEmail"] = dsUser.Tables[0].Rows[0]["email"].ToString();
                Session["LogUserdetails"] = dsUser;
                Session["OrgID"] = Convert.ToInt32(dsUser.Tables[0].Rows[0]["OrgID"]);
                Session["CompCode"] = dsUser.Tables[0].Rows[0]["CompCode"].ToString();

                if (dsUser.Tables[0].Rows[0]["IsActive"].ToString().ToLower() == "true")
                {
                    key = encrypt.GenerateAPassKey("ExpenseReporting");
                    if (type == 1)
                        txtPassword.Text = Cookie_Details.GetCookie("Password").ToString();

                    if (dsUser.Tables[0].Rows[0]["Password"].ToString() == txtPassword.Text)
                    {
                        Session["Password"] = dsUser.Tables[0].Rows[0]["Password"].ToString();
                        string expression = "IsActive=1";
                        DataTable dt = dsUser.Tables[0];
                        DataView dvlevel = new DataView(dt, expression, "IsActive", DataViewRowState.CurrentRows);
                        DataTable dtUserDetails = dvlevel.ToTable();
                        if (chkRemember.Checked)
                        {
                            Cookie_Details.SetCookie("UserName", txtEmail.Text, 5);
                            Cookie_Details.SetCookie("Password", txtPassword.Text, 5);
                        }

                        Session["username"] = dsUser.Tables[0].Rows[0]["fName"].ToString();
                        Session["lastname"] = dsUser.Tables[0].Rows[0]["lName"].ToString();
                        Session["UserID"] = Convert.ToInt32(dsUser.Tables[0].Rows[0]["UserID"]);
                        Session["Currency"] = dsUser.Tables[0].Rows[0]["Currency"].ToString();
                        Session["Designation"] = dsUser.Tables[0].Rows[0]["Designation"].ToString();
                        Session["DepartmentCode"] = dsUser.Tables[0].Rows[0]["DepartmentCode"].ToString();
                        Session["AppFlag"] = dsUser.Tables[0].Rows[0]["appFlag"].ToString();
                        Session["OrgSelfAppr"] = dsUser.Tables[0].Rows[0]["IsSelfApproval"].ToString();
                        Session["UserSelfAppr"] = dsUser.Tables[0].Rows[0]["userSelfApproval"].ToString();
                        Session["CompCar"] = dsUser.Tables[0].Rows[0]["companyCar"].ToString();
                        Session["City"] = dsUser.Tables[0].Rows[0]["city"].ToString();
                        Session["EmpID"] = dsUser.Tables[0].Rows[0]["employeeId"].ToString();
                        Session["SOrgName"] = dsUser.Tables[0].Rows[0]["subDomain"].ToString();
                        Session["ReceivngMgr"] = dsUser.Tables[0].Rows[0]["receivingMgr"].ToString();
                        Session["UserGroup"] = dsUser.Tables[0].Rows[0]["userGroup"].ToString();
                        Session["BusinessType"] = dsUser.Tables[0].Rows[0]["businessType"].ToString();
                        //Session["MgrReviewCnt"] = dsUser.Tables[0].Rows[0]["mgrreviewCnt"].ToString();

                        //Fetch UserGroups data of current organization and compcode
                        //and filter with logged in user's UserGroup to get profiles assigned to the user's group
                        DataTable dtGroups = GetUserGroups(Convert.ToInt32(dsUser.Tables[0].Rows[0]["OrgID"]), dsUser.Tables[0].Rows[0]["CompCode"].ToString());
                        string expr = "userGroup = '" + dsUser.Tables[0].Rows[0]["userGroup"].ToString() + "'";
                        DataView dvProfiles = new DataView(dtGroups, expr, "userProfile", DataViewRowState.CurrentRows);
                        string[] arrProfiles = new string[dvProfiles.ToTable().Rows.Count];
                        for (int k = 0; k < dvProfiles.ToTable().Rows.Count; k++)
                            arrProfiles[k] = dvProfiles.ToTable().Rows[k]["userProfile"].ToString();

                        Session["ManagerID"] = dtUserDetails.Rows[0]["ManagerID"];
                        Session["ManagerEmail"] = dtUserDetails.Rows[0]["ManagerEmail"];
                        Session["ManagerName"] = dtUserDetails.Rows[0]["ManagerName"];
                        Session["AppLmt"] = dtUserDetails.Rows[0]["ApprovalLimit"];
                        Session["Admin_UserID_Mgr"] = dtUserDetails.Rows[0]["UserID"];
                        Session["UserID_AP"] = dtUserDetails.Rows[0]["UserID"];
                        Session["UserID_Mgr"] = dtUserDetails.Rows[0]["UserID"];
                        Session["City"] = dtUserDetails.Rows[0]["city"].ToString();
                        Session["AccountBy"] = dtUserDetails.Rows[0]["accntBy"].ToString();//-->Accounts by COMP/DEPT maintained in QB integration

                        if (arrProfiles.Contains("ADMIN"))
                        {
                            Session["IsAdmin"] = "true";
                            Session["AdminUser"] = "true";
                        }
                        else
                            Session["IsAdmin"] = "false";

                        if (arrProfiles.Contains("AP"))
                        {
                            Session["IsAP"] = "true";
                            Session["UserID_APNull"] = "1";
                        }
                        if (arrProfiles.Contains("MGR") || arrProfiles.Contains("RECMGR"))
                        {
                            Session["IsManager"] = "true";
                            if (arrProfiles.Contains("RECMGR"))
                                Session["ReceivngMgr"] = "1";
                        }
                        if (arrProfiles.Contains("GADMIN"))
                            Session["GAdmin"] = "true";
                        else
                            Session["GAdmin"] = "false";

                        Session["LevelID"] = dtUserDetails.Rows[0]["LevelID"];
                        Session["PwdUpdated"] = dtUserDetails.Rows[0]["PwdUpdated"];
                        Session["Email"] = dtUserDetails.Rows[0]["Email"].ToString();

                        /////Set Access permissions to Budget screen Begin/////
                        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "BUDGETACCESS");
                        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
                        DataTable dtBudget = Utility.ConvertToDataTable(lst);
                        if (dtBudget.Rows.Count > 0)
                        {
                            if (dtBudget.Rows[0]["CodeKey"].ToString() == "3")
                                Session["IsBudgAccessible"] = "1";
                            else if (dtBudget.Rows[0]["CodeKey"].ToString() == "2")
                            {
                                if (Session["IsManager"] != null || Session["IsAP"] != null || Session["IsAdmin"].ToString().ToLower() != "false")
                                    Session["IsBudgAccessible"] = "1";
                                else
                                    Session["IsBudgAccessible"] = "0";
                            }
                            else if (dtBudget.Rows[0]["CodeKey"].ToString() == "1")
                            {
                                if (Session["IsAP"] != null || Session["IsAdmin"].ToString().ToLower() != "false")
                                    Session["IsBudgAccessible"] = "1";
                                else
                                    Session["IsBudgAccessible"] = "0";
                            }
                            else if (dtBudget.Rows[0]["CodeKey"].ToString() == "0")
                            {
                                if (Session["IsAdmin"].ToString().ToLower() != "false")
                                    Session["IsBudgAccessible"] = "1";
                                else
                                    Session["IsBudgAccessible"] = "0";
                            }
                            else
                                Session["IsBudgAccessible"] = "0";
                        }
                        else
                            Session["IsBudgAccessible"] = "0";

                        /////Set Access permissions to Budget screen End/////
                        if (Convert.ToInt32(Session["OrgID"]) == 0)
                            Response.Redirect("HostIndex.aspx");
                        else if (Request.QueryString.Count > 0)
                        {
                            if (hdnType.Value == "2" || hdnType.Value == "0")//2-MgrApproval /// 0-APApproval
                                Response.Redirect("ProcessRequest.aspx?em=" + hdnEMail.Value + "&rid=" + hdnReqID.Value + "&ur=" + hdnUserIDReq.Value + "&pr=" + hdnPreApproved.Value + "&ar=" + hdnApproved.Value + "&tp=" + hdnType.Value);
                            else if (hdnType.Value == "4")//View Request by Manager
                                Response.Redirect("MgrApproveReject.aspx?rq=" + Request.QueryString["rq"] + "&tp=" + hdnPreApproved.Value);
                            else if (hdnType.Value == "5")//View Request by AP
                                Response.Redirect("APApproveReject.aspx?rq=" + Request.QueryString["rq"] + "&tp=" + hdnPreApproved.Value);
                            //else if (hdnType.Value == "3" || hdnType.Value == "4")//if QueryString == 3 || QueryString == 4
                            else if (hdnType.Value == "3")//if QueryString == 3 || QueryString == 4
                                Response.Redirect("ViewRequest.aspx?tp=" + hdnType.Value + "&oid=" + Request.QueryString["oid"] + "&rq=" + Request.QueryString["rq"]);
                        }
                        else
                        {
                            if (Session["IsAdmin"].ToString().ToLower() == "false")
                            {
                                if (Session["IsAP"] == "true")
                                {
                                    if (Session["PwdUpdated"].ToString().ToLower() == "false")
                                        Response.Redirect("EditPassword.aspx");
                                    else
                                        Response.Redirect("DashBoard.aspx");
                                }
                                else
                                {
                                    if (Session["PwdUpdated"].ToString().ToLower() == "false")
                                        Response.Redirect("EditPassword.aspx");
                                    else
                                        Response.Redirect("DashBoard.aspx");
                                }
                            }
                            else
                            {
                                if (Session["PwdUpdated"].ToString().ToLower() == "false")
                                    Response.Redirect("EditPassword.aspx");
                                else
                                    Response.Redirect("DashBoard.aspx");
                            }
                        }
                    }
                    else
                    {
                        dvError.Visible = true;
                        dvError.InnerHtml = "Invalid credentials!";
                        txtEmail.Focus();
                    }
                }
                else
                {
                    txtComments.Focus();
                    popup_InfoAdmin.Show();
                }
            }
            else
                dvError.InnerHtml = desc;
        }
        else
        {
            dvError.Visible = true;
            dvError.InnerHtml = "Invalid credentials!";
            txtEmail.Focus();
        }
    }

    private void VendorAccess()
    {
        if (dsUser.Tables[0].Rows[0]["Password"].ToString() == txtPassword.Text)
        {
            Session["UserID"] = dsUser.Tables[0].Rows[0]["UserID"];
            Session["LogEmail"] = dsUser.Tables[0].Rows[0]["email"].ToString();
            Session["VendBillID"] = dsUser.Tables[0].Rows[0]["employeeId"];
            Session["username"] = dsUser.Tables[0].Rows[0]["fName"].ToString();
            Session["lastname"] = dsUser.Tables[0].Rows[0]["lName"].ToString();
            Session["SOrgName"] = dsUser.Tables[0].Rows[0]["subDomain"].ToString();
            Response.Redirect("Quotations/VendQuote.aspx");
        }
        else
        {
            dvError.Visible = true;
            dvError.InnerHtml = "Invalid credentials!";
            txtEmail.Focus();
        }
    }

    private DataTable GetUserGroups(int orgID, string compCode)
    {
        UserGroupVO uGroup = new UserGroupVO();
        uGroup.addedBy = 0;
        uGroup.compCode = compCode;
        uGroup.groupId = 0;
        uGroup.modifiedBy = 0;
        uGroup.orgId = orgID;
        uGroup.userGroup = string.Empty;
        uGroup.userProfile = string.Empty;
        string str = xms.getUserGrpProfile(uGroup);
        List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str);
        return Utility.ConvertToDataTable(listGroups);
    }

    protected void btnSubmit1_Click(object sender, EventArgs e)
    {
        string forgotPassword = xms.getForgotPassword(txtEmail1.Text);
        txtEmail1.Text = string.Empty;
        dvError1.InnerHtml = forgotPassword;
        popup_ForPwd.Show();
    }

    protected void Register_Click(object sender, EventArgs e)
    {
        popup_Registration.Show();
    }

    protected void Pwd_Click(object sender, EventArgs e)
    {
        txtEmail1.Focus();
        dvError1.InnerHtml = string.Empty;
        popup_ForPwd.Show();
    }

    protected void btnPopClose_Click(object sender, EventArgs e)
    {
        popup_Registration.Hide();
    }

    protected void btnOk_Click(object sender, EventArgs e)
    {
        DataSet dsAdmin = new DataSet();
        string strEmail = xms.getAdminEmail(Convert.ToInt32(Session["OrgID"]));
        List<EMailVO> lstEmail = ser.Deserialize<List<EMailVO>>(strEmail);
        dsAdmin.Tables.Add(Utility.ConvertToDataTable(lstEmail));
        string body = txtComments.Text + "<br/>Email:&nbsp;" + txtEmail.Text;

        for (int i = 0; i < dsAdmin.Tables[0].Rows.Count; i++)
        {
            string retStr = xms.sendMail(dsAdmin.Tables[0].Rows[i]["Email"].ToString(), string.Empty, "Activate User", body, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["CompCode"].ToString());
        }
        popup_InfoAdmin.Hide();
        Session.Remove("OrgID");
        txtComments.Text = string.Empty;
    }

    protected void btnClose_Click(object sender, EventArgs e)
    {
        popup_InfoAdmin.Hide();
    }

    #endregion
}