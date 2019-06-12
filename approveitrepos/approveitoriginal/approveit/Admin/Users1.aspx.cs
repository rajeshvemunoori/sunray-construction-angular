using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Web.Services;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Text;


public partial class Users1 : System.Web.UI.Page
{
    #region public variables

    public int uId = 0;
    public int isMgr = 0;
    public int ApCnt = 0;
    public char currencySymbol;

    #endregion

    #region private variables

    int orgID = 0;
    int userID = 0;
    int mgrId = 0;
    DataSet dsUser = new DataSet();
    DataSet dslist = new DataSet();
    Mails mails = new Mails();
    Utility ut = new Utility();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    private bool _refreshExp = false;
    #endregion

    #region Users List

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            else
            {
                orgID = Convert.ToInt32(Session["OrgID"]);
                txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
                btnSubmit1.Attributes.Add("onclick", "javascript:return validateEditUserList();");
                if (!IsPostBack)
                    LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        if (Request.QueryString.Count > 0)
        {
            lblMsg.Text = "Updated successfully";
            lblMsg.Style["color"] = "Green";
        }
        else
            lblMsg.Text = string.Empty;
        Session.Remove("SortExpr");
        Session.Remove("SortDir");
        Session["RemoveAdmin"] = "0";
        string returnCnt = xms.getUsersCnt(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        string[] strCnt = new string[3];
        strCnt = returnCnt.Split(',');
        hdnAPCount.Value = strCnt[0];
        hdnMgrCount.Value = strCnt[1];
        hdnAdminCount.Value = strCnt[2];
        BindAllCompCodes();
        Session.Remove("Users");
        SortGrid();
    }

    private void BindUserList()
    {
        string compCode = ddlAllCompCodes.SelectedValue == "0" ? string.Empty : ddlAllCompCodes.SelectedValue;
        var usersList = xms.getUsersList(Convert.ToInt32(Session["OrgID"]), compCode);
        List<UserVO> users = ser.Deserialize<List<UserVO>>(usersList);
        dsUser.Tables.Add(Utility.ConvertToDataTable(users));
        gvUsersList.DataSource = dsUser;
        gvUsersList.DataBind();
        Session["Users"] = dsUser;
    }

    private void BindAllCompCodes()
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
        ddlAllCompCodes.DataSource = dsCompCodes;
        ddlAllCompCodes.DataBind();
        ddlAllCompCodes.Items.Insert(0, "All");
        ddlAllCompCodes.Items.FindByText("All").Value = "0";
        if (Session["GAdmin"] == null)
        {
            ddlAllCompCodes.SelectedValue = Session["CompCode"].ToString();
            ddlAllCompCodes.Enabled = false;
        }
        else
            ddlAllCompCodes.Enabled = true;
        if (Session["ULCompCode"] != null)
            ddlAllCompCodes.SelectedValue = Session["ULCompCode"].ToString();
        Session["AllCompCodes"] = dsCompCodes;
    }

    protected void gvUsersList_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkBinDelete = (LinkButton)e.Row.FindControl("lnkBinDelete");
            HiddenField hdnIsActive = (HiddenField)e.Row.FindControl("hdnIsActive");
            lnkBinDelete.Style.Add("color", "white");
            if (!string.IsNullOrEmpty(hdnIsActive.Value))
            {
                if (hdnIsActive.Value.ToLower() == "true")
                {
                    lnkBinDelete.Style.Add("background-image", "url(../images/icons/tick.png)");
                    lnkBinDelete.ToolTip = "Active User. Click to deactivate.";
                }
                else
                {
                    lnkBinDelete.Style.Add("background-image", "url(../images/icons/delet_cancel.png)");
                    lnkBinDelete.ToolTip = "Inactive User. Click to activate.";
                }
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_EditUser"] != null && Session["Control_EditUser"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_EditUser"].ToString());
                if (Session["SortDir_EditUser"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_EditUser"] = lnk.ID;

        if (Session["SortDir_EditUser"] == null || Session["SortDir_EditUser"].ToString() == "Asc")
            Session["SortDir_EditUser"] = "Desc";
        else
            Session["SortDir_EditUser"] = "Asc";
        Session["SortExpr_EditUser"] = e.CommandArgument;
        SortGrid();
    }

    private void SortGrid()
    {
        if (Session["ULCompCode"] != null)
            ddlAllCompCodes.SelectedValue = Session["ULCompCode"].ToString();

        if (Session["Users"] == null)
        {
            var usersList = xms.getUsersList(Convert.ToInt32(Session["OrgID"]), ddlAllCompCodes.SelectedValue == "0" ? "All" : ddlAllCompCodes.SelectedValue);
            List<UserVO> users = ser.Deserialize<List<UserVO>>(usersList);
            dsUser.Tables.Add(Utility.ConvertToDataTable(users));
            Session["Users"] = dsUser;
        }
        else
            dsUser = (DataSet)Session["Users"];
        if (dsUser.Tables[0].Rows.Count > 0)
        {
            DataTable dtUsers = new DataTable();
            if (ddlAllCompCodes.SelectedValue != "0")
            {
                string exp = "compCode='" + ddlAllCompCodes.SelectedValue + "'";
                DataView dvSet = new DataView(dsUser.Tables[0], exp, "compCode", DataViewRowState.CurrentRows);
                dtUsers = dvSet.ToTable();
            }
            else
            {
                dtUsers = dsUser.Tables[0];
            }
            if (dtUsers.Rows.Count > 0)
            {
                if ((Session["SortExpr_EditUser"] != null) && Session["SortDir_EditUser"] != null)
                {
                    DataView sortedView = new DataView(dtUsers);
                    sortedView.Sort = Session["SortExpr_EditUser"].ToString() + " " + Session["SortDir_EditUser"].ToString();
                    gvUsersList.DataSource = sortedView;
                }
                else
                    gvUsersList.DataSource = dtUsers;
            }
            gvUsersList.DataBind();
        }
    }

    protected void ddlAllCompCodes_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session["ULCompCode"] = ddlAllCompCodes.SelectedValue;
        SortGrid();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        LoadData();
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

    #endregion

    #region Edit Users

    protected void Edit(object sender, EventArgs e)
    {
        lblMsg.Text = string.Empty;
        dvError.InnerHtml = string.Empty;
        orgID = Convert.ToInt32(Session["OrgID"]);
        Session.Remove("SelUserID");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSelUserID = (HiddenField)row.Cells[0].FindControl("hdnSelUserID");
        HiddenField hdnSelEmail = (HiddenField)row.Cells[0].FindControl("hdnSelEmail");
        HiddenField hdnSelAppFlag = (HiddenField)row.Cells[0].FindControl("hdnSelAppFlag");
        HiddenField hdnSelSelfFlag = (HiddenField)row.Cells[0].FindControl("hdnSelSlfFlag");

        uId = Convert.ToInt32(hdnSelUserID.Value);
        Session["SelEmail"] = hdnSelEmail.Value;
        Session["SelAppFlag"] = hdnSelAppFlag.Value;
        Session["SelUserID"] = uId;
        Session["SelSelfFlag"] = hdnSelSelfFlag.Value;

        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        else
        {
            int i = 0;
            Session.Remove("NoManagers");
            Session.Remove("LvlID");
            Session["AdminCnt"] = 0;
            Session["MgrCnt"] = 0;
            Session["UserCnt"] = 0;
            Session["ApCnt"] = 0;
            Session["ReceiveMgrCnt"] = 0;
            Session["ReqManager"] = "0";
            dslist = (DataSet)Session["Users"];
            for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
            {
                if (Convert.ToInt32(dslist.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                    break;
            }
            string mulId = string.Empty;

            for (int j = 0; j < dslist.Tables[0].Rows.Count; j++)
            {
                if (dslist.Tables[0].Rows[j]["Email"].ToString() == Session["SelEmail"].ToString())
                    mulId += dslist.Tables[0].Rows[j]["LevelID"] + ",";
            }
            if (mulId.Contains("3"))
                Session["UserCnt"] = 1;

            if (dslist.Tables[0].Rows.Count > 0)
            {
                int lvlId = Convert.ToInt32(dslist.Tables[0].Rows[i]["LevelID"]);
                txtFirstName.Text = dslist.Tables[0].Rows[i]["FName"].ToString();
                txtLastName.Text = dslist.Tables[0].Rows[i]["LName"].ToString();
                txtEmail.Text = dslist.Tables[0].Rows[i]["Email"].ToString();
                txtPhone.Text = dslist.Tables[0].Rows[i]["Phone"].ToString();
                txtDesignation.Text = dslist.Tables[0].Rows[i]["Designation"].ToString();
                txtCities.Text = dslist.Tables[0].Rows[i]["City"].ToString();
                txtCompCode.Text = dslist.Tables[0].Rows[i]["CompCode"].ToString();
                BindDeptCodes();
                if (dslist.Tables[0].Rows[i]["DepartmentCode"].ToString() != "0" || dslist.Tables[0].Rows[i]["DepartmentCode"].ToString() != string.Empty)
                    ddlDeptCodes.SelectedValue = dslist.Tables[0].Rows[i]["DepartmentCode"].ToString() == string.Empty ? "0" : dslist.Tables[0].Rows[i]["DepartmentCode"].ToString();
                try
                {
                    if (dslist.Tables[0].Rows[i]["regionCode"].ToString() != "0" || dslist.Tables[0].Rows[i]["regionCode"].ToString() != string.Empty)
                        ddlRgnCode.SelectedValue = dslist.Tables[0].Rows[i]["regionCode"].ToString() == string.Empty ? "0" : dslist.Tables[0].Rows[i]["regionCode"].ToString();
                }
                catch (Exception ex)
                { }
                BindCities();
                chkCompCar.Checked = Convert.ToBoolean(dslist.Tables[0].Rows[i]["CompanyCar"]);
                txtCashAdv.Text = dslist.Tables[0].Rows[i]["cashAdv"].ToString();
                txtEmpID.Text = dslist.Tables[0].Rows[i]["EmployeeID"].ToString();
                if (dslist.Tables[0].Rows[i]["csEnableFlag"].ToString() == "1")
                {
                    chkCSEnb.Checked = true;
                    dvReview.Style["display"] = "block";
                    if (dslist.Tables[0].Rows[i]["reviewFlag"].ToString() == "1")
                        chkReview.Checked = true;
                    else
                        chkReview.Checked = false;
                }
                else
                {
                    chkCSEnb.Checked = false;
                    dvReview.Style["display"] = "none";
                    chkReview.Checked = false;
                }

                if (dslist.Tables[0].Rows[i]["IsActive"].ToString().ToLower() == "false")
                    btnSubmit1.Visible = false;
                else
                    btnSubmit1.Visible = true;

                BindGroups(txtCompCode.Text);
                ddlGroups.SelectedValue = dslist.Tables[0].Rows[i]["userGroup"].ToString();
                Session["SelectedGroup"] = ddlGroups.SelectedValue;
                string returnCnt = xms.getUsersCnt(Convert.ToInt32(Session["OrgID"]), dslist.Tables[0].Rows[i]["CompCode"].ToString());
                string[] strCnt = new string[3];
                strCnt = returnCnt.Split(',');
                hdnAPCount.Value = strCnt[0];
                hdnMgrCount.Value = strCnt[1];
                hdnAdminCount.Value = strCnt[2];

                var apmanagersList = xms.getManagers(Convert.ToInt32(Session["SelUserID"]), Convert.ToInt32(Session["OrgID"]), txtCompCode.Text, 2);
                List<UserVO> apmanagers = ser.Deserialize<List<UserVO>>(apmanagersList);
                DataSet dsmanager = new DataSet();
                dsmanager.Tables.Add(Utility.ConvertToDataTable(apmanagers));

                DataTable dttrimMgrs = dsmanager.Tables[0];
                DataTable dataMgrs = dttrimMgrs.Clone();
                foreach (DataRow dr in dttrimMgrs.Rows)
                {
                    dataMgrs.ImportRow(dr);
                }
                int m = 0;
                string[] dsMgrArray = new string[1];
                for (m = 0; m < dataMgrs.Rows.Count; m++)
                {
                    dsMgrArray = dsmanager.Tables[0].Rows[m]["Email"].ToString().Split('-');
                    dataMgrs.Rows[m]["Email"] = dsMgrArray[0].Trim();
                }

                Session["TrimMgrs"] = dataMgrs;
                Session["APManagers"] = dsmanager;
                DataTable dtGrup = (DataTable)Session["Groups"];
                DataView dvGroup = dtGrup.DefaultView;
                dvGroup.Sort = "userGroup ASC";

                string exp = "userGroup='" + ddlGroups.SelectedValue + "'";
                DataView dv1Group = new DataView(dtGrup, exp, "userGroup", DataViewRowState.CurrentRows);
                DataTable dtGroup = dv1Group.ToTable();
                string[] arr = null;
                arr = dtGroup.AsEnumerable().Select(row1 => row1.Field<string>("userProfile")).ToArray();
                Session["LoadArr"] = arr;

                if (arr.Contains("ADMIN"))
                {
                    dvLmtAmnt.Style.Add("display", "none"); //ApprLimit textbox
                    Session["AdminCnt"] = 1;
                }
                if (arr.Contains("AP"))
                {
                    dvLmtAmnt.Style.Add("display", "none"); //ApprLimit textbox
                    Session["ApCnt"] = 1;
                    ApCnt = 1;
                }
                //Display group approval limit
                DataTable dtCodes = (DataTable)Session["dsCodes"];
                string expr = "CodeID = 'ERUSERGROUPS' and CodeKey = '" + ddlGroups.SelectedValue + "'";
                DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
                lblApprovalLimit.Text = dv.ToTable().Rows[0]["CodeValue1"].ToString();
                if (ut.NullSafeDouble(lblApprovalLimit.Text) > 0)
                {
                    dvLmtAmnt.Style.Add("display", "block"); //ApprLimit textbox
                    Session["MgrCnt"] = 1;
                }
                else
                {
                    dvLmtAmnt.Style.Add("display", "none");
                    lblApprovalLimit.Text = "0";
                }
                if (arr.Contains("USER"))
                {
                    dvLmtAmnt.Style["display"] = "none";
                    dvSelfAppr.Style["display"] = "none";
                }
                else
                    dvSelfAppr.Style["display"] = "block";
                //Check SelfApproval Flag
                if (Session["SelSelfFlag"].ToString() == "1" && (arr.Contains("MGR") || arr.Contains("RECMGR")))
                {
                    chkSelfAppr.Checked = true;
                    ddlManagers.Enabled = false;
                }
                else
                {
                    chkSelfAppr.Checked = false;
                    ddlManagers.Enabled = true;
                }

                if (dsmanager.Tables[0].Rows.Count > 0)
                {
                    DataTable dtMod = new DataTable();
                    DataTable dttemp = dvGroup.ToTable();
                    DataTable dtModUG = dttemp.Clone();
                    DataTable dtmanagers = dsmanager.Tables[0];
                    dtMod = dtmanagers.Clone();
                    DataTable dtModGp = FilteredManagers(dtmanagers, dtModUG, dttemp);
                    if (dtModGp.Rows.Count > 0)
                    {
                        ddlManagers.DataSource = dtModGp;
                        ddlManagers.DataBind();
                        ddlManagers.Items.Insert(0, "Please Select");
                        ddlManagers.Items.FindByText("Please Select").Value = "0";
                        try
                        {
                            ddlManagers.SelectedValue = dslist.Tables[0].Rows[i]["ManagerID"].ToString();
                        }
                        catch (Exception ex)
                        {
                            ddlManagers.SelectedValue = "0";
                        }
                    }
                    else
                    {
                        ddlManagers.Enabled = false;
                        dvError.InnerHtml = "No other manager profiles exist greater than selected profile's approval limit.";
                        dvError.Style["color"] = "Red";
                    }
                }
                else
                {
                    ddlManagers.Enabled = false;
                    dvError.InnerHtml = "No Manager profiles exist.";
                    dvError.Style["color"] = "Red";
                }
            }
        }
        popup.Show();
    }

    private DataTable FilteredManagers(DataTable dtmanagers, DataTable dtModUG, DataTable dttemp)
    {
        string expr = string.Empty;
        DataSet dsCompCodes = (DataSet)Session["CompCodesList"];
        DataView dvComp = new DataView(dsCompCodes.Tables[0], "CompCode = '" + txtCompCode.Text + "'", "CompCode", DataViewRowState.CurrentRows);
        string compAppFlag = dvComp.ToTable().Rows[0]["appFlag"].ToString();
        if (compAppFlag.ToLower() == "y")
            expr = "approvalLimit >= " + lblApprovalLimit.Text;
        else
            expr = "(approvalLimit >= " + lblApprovalLimit.Text + ") OR (approvalLimit = 0)";
        DataView dv = new DataView(dtmanagers, expr, "approvalLimit", DataViewRowState.CurrentRows);
        return dv.ToTable();
    }

    private void BindGroups(string compcode)
    {
        DataTable dtGrup = new DataTable();
        if (Session["Groups"] == null)
        {
            UserGroupVO uGroup = new UserGroupVO();
            uGroup.addedBy = 0;
            uGroup.compCode = compcode;
            uGroup.groupId = 0;
            uGroup.modifiedBy = 0;
            uGroup.orgId = Convert.ToInt32(Session["OrgID"]);
            uGroup.userGroup = string.Empty;
            uGroup.userProfile = string.Empty;
            var str1 = xms.getUserGrpProfile(uGroup);
            List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str1);
            dtGrup = Utility.ConvertToDataTable(listGroups);
            Session["Groups"] = dtGrup;
        }
        else
            dtGrup = (DataTable)Session["Groups"];
        ddlGroups.DataSource = dtGrup.DefaultView.ToTable(true, "groupDesc", "userGroup");
        ddlGroups.DataBind();
    }

    private void BindDeptCodes()
    {
        //Get departments
        var deptData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), txtCompCode.Text, "DEPT");
        List<CodeValueVO> dept = ser.Deserialize<List<CodeValueVO>>(deptData);

        ddlDeptCodes.DataSource = dept;
        ddlDeptCodes.DataBind();
        ddlDeptCodes.Items.Insert(0, "Please Select");
        ddlDeptCodes.Items.FindByText("Please Select").Value = "0";
        ddlDeptCodes.Enabled = true;

        //Get regions
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

        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv1 = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv1.ToTable().Rows[0]["CodeValue1"]);
    }

    private void BindCities()
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

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        bool validateAppr = false;
        bool save = true;
        string displayMsg = string.Empty;
        int i = 0;
        DataSet dsUserDetails = (DataSet)Session["Users"];
        DataSet dsmanager = (DataSet)Session["APManagers"];
        for (i = 0; i < dsUserDetails.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dsUserDetails.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                break;
        }

        if (Session["ReqManager"] == "1")
        {
            if (ddlManagers.Enabled == true && ddlManagers.SelectedIndex == 0)
            {
                validateAppr = false;
                displayMsg = "Please select ManagerEmail.";
                dvError.Style["color"] = "Red";
            }
            else
                validateAppr = true;
        }
        else
            validateAppr = true;

        if (validateAppr)
        {
            save = true;
            if (save)
            {
                string returnStr = string.Empty;
                bool isAp = false;
                bool isAdmin = false;
                bool isManager = false;
                double apprLimit = 0;
                if (dvLmtAmnt.Visible == true)
                    apprLimit = Convert.ToDouble(lblApprovalLimit.Text);

                UserVO memberDetails = new UserVO();
                memberDetails.userId = Convert.ToInt32(Session["SelUserID"]);
                memberDetails.fName = txtFirstName.Text;
                memberDetails.lName = txtLastName.Text;
                memberDetails.email = txtEmail.Text;
                memberDetails.password = dsUserDetails.Tables[0].Rows[i]["Password"].ToString();
                memberDetails.phone = txtPhone.Text;
                memberDetails.designation = txtDesignation.Text;
                memberDetails.employeeId = txtEmpID.Text;
                memberDetails.city = txtCities.Text;
                string[] mgrArray = new string[2];
                if (ddlManagers.Items.Count > 0)
                {
                    if (ddlManagers.SelectedValue == "0")
                    {
                        memberDetails.managerId = 0;
                        memberDetails.managerEmail = string.Empty;
                    }
                    else
                    {
                        mgrArray = ddlManagers.SelectedItem.Text.Split('-');
                        memberDetails.managerId = Convert.ToInt32(ddlManagers.SelectedValue);
                        memberDetails.managerEmail = mgrArray[0].Trim();
                    }
                }
                else
                {
                    memberDetails.managerId = 0;
                    memberDetails.managerEmail = string.Empty;
                }
                if (Session["UserID"] == Session["SelUserID"])
                {
                    Session["ManagerEmail"] = memberDetails.managerEmail;
                    Session["ManagerID"] = memberDetails.managerId;
                }
                if (Session["Email"].ToString() == Session["SelEmail"].ToString())
                {
                    if (chkSelfAppr.Checked == true)
                    {
                        Session["ManagerEmail"] = Session["SelEmail"];
                        Session["ManagerID"] = Session["SelUserID"];
                    }
                }
                memberDetails.levelId = 0;
                memberDetails.userGroup = ddlGroups.SelectedValue;
                Session["RecvGroups"] = ddlGroups.SelectedValue;
                memberDetails.orgId = Convert.ToInt32(Session["OrgID"]);
                memberDetails.approvalLimit = apprLimit;
                memberDetails.departmentCode = ddlDeptCodes.SelectedValue;
                memberDetails.pwdUpdated = true;
                memberDetails.isActive = true;
                memberDetails.modifiedDate = DateTime.Now.ToShortDateString();
                memberDetails.compCode = txtCompCode.Text;
                memberDetails.isAdmin = isAdmin;
                memberDetails.isAp = isAp;
                memberDetails.isManager = isManager;
                memberDetails.type = 2;
                memberDetails.cashAdv = Convert.ToDouble(txtCashAdv.Text);
                memberDetails.regionCode = ddlRgnCode.SelectedValue;
                memberDetails.isSelfApproval = chkSelfAppr.Checked ? 1 : 0;
                memberDetails.modifiedBy = Convert.ToInt32(Session["UserID"]);
                memberDetails.addedBy = 0;
                memberDetails.csEnableFlag = chkCSEnb.Checked == true ? 1 : 0;
                memberDetails.reviewFlag = chkReview.Checked == true ? 1 : 0;
                memberDetails.companyCar = chkCompCar.Checked ? true : false;
                memberDetails.receivingMgr = 0;
                returnStr = xms.updateUser(memberDetails, 0);
                dvError.Visible = true;
                if (returnStr.ToLower().Contains("succes"))
                {
                    dvError.InnerHtml = returnStr;
                    dvError.Style["color"] = "Green";
                    if (Session["RemoveAdmin"].ToString() == "1")
                        Response.Redirect("Logout.aspx");
                    Session["ReqManager"] = "0";
                    if (Session["Email"].ToString() == Session["SelEmail"].ToString())
                    {
                        Session["AppLmt"] = lblApprovalLimit.Text;
                        Session["DepartmentCode"] = ddlDeptCodes.SelectedValue;
                        Session["CompCode"] = txtCompCode.Text;
                        Session["EmpID"] = txtEmpID.Text;
                        Session["City"] = txtCities.Text;
                        Response.Redirect("Users1.aspx?erst=" + "0");
                    }
                    else
                    {
                        Session.Remove("Users");
                        SortGrid();
                        popup.Show();
                    }
                }
                else
                {
                    dvError.InnerHtml = returnStr;
                    dvError.Style["color"] = "Red";
                    Session.Remove("Users");
                    SortGrid();
                    popup.Show();
                }
            }
            else
            {
                dvError.InnerHtml = displayMsg;
                Session.Remove("Users");
                SortGrid();
                popup.Show();
            }
        }
        else
        {
            dvError.InnerHtml = displayMsg;
            Session.Remove("Users");
            SortGrid();
            popup.Show();
        }
    }

    protected void ddlGroups_SelectedIndexChanged(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        Session["GrupChange"] = "1";
        int i = 0;
        dslist = (DataSet)Session["Users"];
        for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dslist.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                break;
        }
        string grpID = dslist.Tables[0].Rows[i]["userGroup"].ToString();
        Session["grpID"] = grpID;
        int lvlId = Convert.ToInt32(dslist.Tables[0].Rows[i]["LevelID"]);
        DataTable dsManager = (DataTable)Session["TrimMgrs"];
        DataSet dsmanager = (DataSet)Session["APManagers"];
        DataTable dtGrup = (DataTable)Session["Groups"];
        string[] arr = (string[])Session["LoadArr"];
        string[] arr1 = null;

        string exp1 = "usergroup='" + ddlGroups.SelectedValue + "'";
        DataView dvg = new DataView(dtGrup, exp1, "userGroup", DataViewRowState.CurrentRows);
        DataTable dttemp = dvg.ToTable();

        arr1 = dttemp.AsEnumerable().Select(row1 => row1.Field<string>("userProfile")).ToArray();
        Session["ChngdArr"] = arr1;

        if (chkSelfAppr.Checked && arr1.Contains("AP"))
        {
            ddlGroups.SelectedValue = Session["SelectedGroup"].ToString();
            dvError.InnerHtml = "You cannot change UserGroup to AP as SelfApproval is enabled.";
        }
        else
        {
            //Display group approval limit
            DataTable dtCodes = (DataTable)Session["dsCodes"];
            string expr = "CodeID = 'ERUSERGROUPS' and CodeKey = '" + ddlGroups.SelectedValue + "'";
            DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
            lblApprovalLimit.Text = dv.ToTable().Rows[0]["CodeValue1"].ToString();

            //Change Group
            int reqCnt = 0;
            int noAP = 0;
            int noMgr = 0;
            int noAdm = 0;
            if (ut.NullSafeDouble(lblApprovalLimit.Text) > 0)
                dvLmtAmnt.Style["display"] = "block";
            else
            {
                dvLmtAmnt.Style["display"] = "none";
                lblApprovalLimit.Text = "0";
            }
            if ((arr.Contains("ADMIN") || arr.Contains("GADMIN")) && (!arr1.Contains("ADMIN") && !arr1.Contains("GADMIN")))
                if (Convert.ToInt32(hdnAdminCount.Value) == 1)
                    noAdm = 1;
            if (arr.Contains("AP") && !arr1.Contains("AP"))
                if (Convert.ToInt32(hdnAPCount.Value) == 1)
                    noAP = 1;
            if ((arr.Contains("MGR") || arr.Contains("RECMGR")) && (!arr1.Contains("MGR") && !arr1.Contains("RECMGR")))
                if (Convert.ToInt32(hdnMgrCount.Value) == 1)
                    noMgr = 1;
            if (arr1.Contains("USER"))
                dvSelfAppr.Style["display"] = "none";
            else
                dvSelfAppr.Style["display"] = "block";
            if (noAP == 1 || noMgr == 1 || noAdm == 1)
            {
                if (noAP == 1 && noMgr == 1 && noAdm == 1)
                    dvError.InnerHtml = "No other Admin/AP/Manager profile exists, please select other usergroup which has these profiles.";
                else if (noAdm == 1 && noAP == 1)
                    dvError.InnerHtml = "No other Admin/AP profile exits, please select other usergroup which has these profiles.";
                else if (noAP == 1 && noMgr == 1)
                    dvError.InnerHtml = "No other AP/Manager profile exits, please select other usergroup which has these profiles.";
                else if (noAdm == 1 && noMgr == 1)
                    dvError.InnerHtml = "No other Admin/Manager profile exits, please select other usergroup which has these profiles.";
                else if (noAP == 1)
                    dvError.InnerHtml = "No other AP profile exits, please select other usergroup which has AP profile.";
                else if (noMgr == 1)
                    dvError.InnerHtml = "No other Mgr profile exits, please select other usergroup which has Manager profile.";
                else if (noAdm == 1)
                    dvError.InnerHtml = "No other Admin profile exits, please select other usergroup which has Admin profile.";
                ddlGroups.SelectedValue = grpID.ToString();
            }

            int cnt = 0;
            if ((arr.Contains("MGR") || arr.Contains("RECMGR")) && (arr1.Contains("MGR") || arr1.Contains("RECMGR")))
                cnt++;

            ///BindManagers
            if (cnt == 0)
            {
                DataTable dtModUG = dtGrup.Clone();
                DataTable dtMgrList = FilteredManagers(dsmanager.Tables[0], dtModUG, dtGrup);

                Session["LvlChngMgrs"] = dtMgrList;
                if (dtMgrList.Rows.Count > 0)
                {
                    reqCnt = xms.getReqCnt(Convert.ToInt32(Session["SelUserID"]), 1);
                    if (reqCnt > 0)
                    {
                        dvReqError.InnerHtml = "Are you sure to assign the pending expenses to selected profile.";
                        popReqMgrs.Show();
                    }
                    ddlManagers.DataSource = dtMgrList;
                    ddlManagers.DataBind();
                    ddlManagers.Items.Insert(0, "Please Select");
                    ddlManagers.Items.FindByText("Please Select").Value = "0";
                    ddlManagers.Enabled = true;
                }
                else
                {
                    dvError.InnerHtml = "No profile exists with higher approval limit.";
                    ddlManagers.Enabled = false;
                }
            }
            ///BindManagers

            if (chkSelfAppr.Checked)
            {
                ddlManagers.SelectedValue = "0";
                ddlManagers.Enabled = false;
            }
            else
                ddlManagers.Enabled = true;
            //Change Group
        }
        popup.Show();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        BindDeptCodes();
        popup.Show();
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindCities();
        txtCities.Text = string.Empty;
        txtCities.Focus();
        popup.Show();
    }

    protected void btnMsgOK_Click(object sender, EventArgs e)
    {
        if (Session["RemoveAdmin"].ToString() != "1")
            ChangeLevel();
        popMessage.Hide();
        popup.Show();
    }

    protected void btnMsgCancel_Click(object sender, EventArgs e)
    {
        if (Session["RemoveAdmin"].ToString() == "1")
            Session["RemoveAdmin"] = "0";
        popMessage.Hide();
        popup.Show();
    }

    private void ChangeLevel()
    {
        DataTable dsMgrs = (DataTable)Session["TrimMgrs"];
        DataSet dsmanager = (DataSet)Session["APManagers"];

        dslist = (DataSet)Session["Users"];
        int i = 0;
        for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dslist.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                break;
        }
        string exp = string.Empty;
        exp = "(ApprovalLimit = 0 or ApprovalLimit >= " + Convert.ToDouble(dslist.Tables[0].Rows[i]["ManagerApprovalLimit"].ToString()) + ") and (levelId <>3) and email <> '" + Session["SelEmail"].ToString() + "'";

        DataTable dtUserMgrs = dsMgrs;
        DataView dvUserLevel = new DataView(dtUserMgrs, exp, "ManagerID", DataViewRowState.CurrentRows);
        DataTable dtMgrDetails = dvUserLevel.ToTable();

        DataTable dtBindMgrs = dsmanager.Tables[0].Clone();
        for (int k = 0; k < dvUserLevel.ToTable().Rows.Count; k++)
        {
            string expr11 = "UserID = " + dvUserLevel.ToTable().Rows[k]["UserID"].ToString();
            DataView view11 = new DataView(dsmanager.Tables[0], expr11, "Email", DataViewRowState.CurrentRows);
            dtBindMgrs.ImportRow(view11.ToTable().Rows[0]);
        }

        if (dtMgrDetails.Rows.Count == 0)
        {
            dvError.Style["color"] = "Red";
            dvError.InnerHtml = "Message: Please create Manager profiles before creating a user.";
            ddlManagers.Enabled = false;
        }
        else
        {
            ddlManagers.DataSource = dtMgrDetails;
            ddlManagers.DataBind();
            ddlManagers.Items.Insert(0, "Please Select");
            ddlManagers.Items.FindByText("Please Select").Value = "0";
            ddlManagers.Enabled = true;
        }
        dvLmtAmnt.Style.Add("display", "none");
        popup.Show();
    }

    protected void DeleteManager(object sender, EventArgs e)
    {
        DataTable dtLvlChngMgrs = (DataTable)Session["LvlChngMgrs"];
        ddlManagers.DataSource = dtLvlChngMgrs;
        ddlManagers.DataBind();
        ddlManagers.Items.Insert(0, "Please Select");
        ddlManagers.Items.FindByText("Please Select").Value = "0";
        Session["ReqManager"] = "1";
        ddlManagers.Enabled = true;
        popReqMgrs.Hide();
        popup.Show();
    }

    protected void RetainDialog(object sender, EventArgs e)
    {
        if (Session["GrupChange"] == "1")
            ddlGroups.SelectedValue = Session["grpID"].ToString();

        DataSet dsmanager = (DataSet)Session["APManagers"];
        ddlManagers.DataSource = dsmanager;
        ddlManagers.DataBind();
        ddlManagers.Items.Insert(0, "Please Select");
        ddlManagers.Items.FindByText("Please Select").Value = "0";
        if (Session["SelSelfFlag"].ToString() == "1")
            ddlManagers.Enabled = false;
        else
            ddlManagers.Enabled = true;
        popReqMgrs.Hide();
        popup.Show();
    }

    protected void chkSelfAppr_CheckChanged(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        int i;
        dslist = (DataSet)Session["Users"];
        for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dslist.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                break;
        }
        string grpID = dslist.Tables[0].Rows[i]["userGroup"].ToString();
        if (chkSelfAppr.Checked)
        {
            string[] arr = null;
            if (grpID == ddlGroups.SelectedValue)
                arr = (string[])Session["LoadArr"];
            else
                arr = (string[])Session["ChngdArr"];

            if (ut.NullSafeDouble(lblApprovalLimit.Text) > 0)
                dvLmtAmnt.Style.Add("display", "block");
            if (Session["AppFlag"].ToString().ToLower() == "y")
            {
                if (!arr.Contains("MGR") && !arr.Contains("RECMGR"))
                {
                    dvError.InnerHtml = "Please select manager profile before you check self approval flag.";
                    chkSelfAppr.Checked = false;
                }
                else
                {
                    ddlManagers.Enabled = false;
                    Session["ReqManager"] = "1";
                }
            }
            else
            {
                ddlManagers.Enabled = false;
                Session["ReqManager"] = "1";
            }
        }
        else
        {
            ddlManagers.Enabled = true;
            string[] arr = null;
            if (grpID != ddlGroups.SelectedValue && Session["GrupChange"] == "1")
                arr = (string[])Session["ChngdArr"];
            else
                arr = (string[])Session["LoadArr"];

            if (ut.NullSafeDouble(lblApprovalLimit.Text) > 0)
                dvLmtAmnt.Style.Add("display", "block");
            else
            {
                dvLmtAmnt.Style.Add("display", "none");
                lblApprovalLimit.Text = string.Empty;
            }
            DataSet dsmanager = (DataSet)Session["APManagers"];
            DataTable dtGrup = (DataTable)Session["Groups"];

            DataTable dtModUG = dtGrup.Clone();
            DataTable dtMgrList = FilteredManagers(dsmanager.Tables[0], dtModUG, dtGrup);

            int reqCnt = xms.getReqCnt(Convert.ToInt32(Session["SelUserID"]), 1);
            if (reqCnt > 0)
            {
                Session["LvlChngMgrs"] = dtMgrList;
                if (dtMgrList.Rows.Count > 0)
                {
                    ddlManagers.DataSource = dtMgrList;
                    ddlManagers.DataBind();
                    ddlManagers.Items.Insert(0, "Please Select");
                    ddlManagers.Items.FindByText("Please Select").Value = "0";
                    dvReqError.InnerHtml = "Are you sure to assign the pending expenses to selected profile.";
                    if (Session["SelSelfFlag"] == "1")
                        popReqMgrs.Show();
                }
                else
                {
                    dvError.InnerHtml = "No other Manager profile exits to assign for your requests of subordinates.";
                    chkSelfAppr.Checked = true;
                }
            }
        }
        popup.Show();
    }

    protected void chkCSEnb_Changed(object sender, EventArgs e)
    {
        if (chkCSEnb.Checked)
        {
            DataTable dtCsCode = new DataTable();
            var str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), txtCompCode.Text, "CSDRAFTCOST");
            List<CodeValueVO> CsCod = ser.Deserialize<List<CodeValueVO>>(str);
            dtCsCode = Utility.ConvertToDataTable(CsCod);
            dvError.InnerHtml = "This flag will enable Customer Service to review your Drafts folder and create Expenses for you to review and submit. This will cost $" + Convert.ToDouble(dtCsCode.Rows[0]["codeKey"]) + " for each drafts that is converted into expense.";
            dvReview.Style.Add("display", "block");
        }
        else
        {
            dvError.InnerHtml = string.Empty;
            dvReview.Style.Add("display", "none");
        }
        popup.Show();
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

    #region Delete Users

    protected void Delete(object sender, EventArgs e)
    {
        lblMsg.Text = string.Empty;
        orgID = Convert.ToInt32(Session["OrgID"]);
        userID = Convert.ToInt32(Session["UserID"]);
        Session.Remove("SelUserID");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnLvl = (HiddenField)row.Cells[0].FindControl("hdnLvl");
        HiddenField hdnLvlID = (HiddenField)row.Cells[0].FindControl("hdnLvlID");
        HiddenField hdnSelUserID = (HiddenField)row.Cells[0].FindControl("hdnSelUserID");
        HiddenField hdnIsActive = (HiddenField)row.Cells[0].FindControl("hdnIsActive");
        HiddenField hdnSelAppLimit = (HiddenField)row.Cells[0].FindControl("hdnSelAppLimit");
        HiddenField hdnSelEmail = (HiddenField)row.Cells[0].FindControl("hdnSelEmail");
        HiddenField hdnSelSelfFlag = (HiddenField)row.Cells[0].FindControl("hdnSelSlfFlag");
        HiddenField hdnUserGroup = (HiddenField)row.Cells[0].FindControl("hdnUserGroup");
        HiddenField hdnCompCode = (HiddenField)row.Cells[0].FindControl("hdnCompCode");

        hdnIsActive1.Value = hdnIsActive.Value;
        DataSet dsmanager = new DataSet();
        uId = Convert.ToInt32(hdnSelUserID.Value);
        dvError1.InnerHtml = string.Empty;
        Session["SelUserID"] = uId;
        Session["LevelID"] = hdnLvlID.Value;
        Session["SelEmail"] = hdnSelEmail.Value;
        Session["SelSelfFlag"] = hdnSelSelfFlag.Value;
        if (Session["Groups"] == null)
            BindGroups(hdnCompCode.Value);
        DataTable dtGrup = (DataTable)Session["Groups"];
        int i = 0;
        dslist = (DataSet)Session["Users"];
        for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dslist.Tables[0].Rows[i]["UserID"]) == Convert.ToInt32(Session["SelUserID"]))
                break;
        }
        string exp = "userGroup='" + hdnUserGroup.Value + "'";
        DataView dv1Group = new DataView(dtGrup, exp, "userGroup", DataViewRowState.CurrentRows);
        DataTable dtGroup = dv1Group.ToTable();
        string[] Delarr = null;
        Delarr = dtGroup.AsEnumerable().Select(row1 => row1.Field<string>("userProfile")).ToArray();
        Session["DeleteLoadArr"] = Delarr;
        bool delete = false;
        if (hdnIsActive.Value.ToLower() == "true")
        {
            if ((Delarr.Contains("MGR") || Delarr.Contains("RECMGR")) && (hdnMgrCount.Value == "1"))
            {
                dvError1.Style["color"] = "Red";
                dvError1.InnerHtml = "Warning! <br/>You cannot delete this profile, as this company does not have other Manager profile. Please create one Manager profile before deleting this profile .";
                dvManagers1.Visible = false;
                ddlManagers1.Visible = false;
                delete = false;
            }
            else if ((Delarr.Contains("AP")) && (hdnAPCount.Value == "1"))
            {
                if (Session["AppFlag"].ToString().ToLower() == "y")
                {
                    delete = true;
                    dvManagers1.Visible = false;
                    ddlManagers1.Visible = false;
                    dvError1.Style["color"] = "Red";
                    dvError1.InnerHtml = "Are you sure you want to delete selected profile .";
                }
                else
                {
                    dvError1.Style["color"] = "Red";
                    dvError1.InnerHtml = "Warning! <br/>You cannot delete this profile, as this company does not have other AP profile. Please create one AP profile before deleting selected profile .";
                    dvManagers1.Visible = false;
                    ddlManagers1.Visible = false;
                    delete = false;
                }
            }
            else if ((Delarr.Contains("ADMIN") || Delarr.Contains("GADMIN")) && (hdnAdminCount.Value == "1"))
            {
                dvError1.Style["color"] = "Red";
                dvError1.InnerHtml = "Warning! <br/>You cannot delete this profile, as this company does not have other Admin profile. Please create one Admin profile before deleting selected profile.";
                dvManagers1.Visible = false;
                ddlManagers1.Visible = false;
                delete = false;
            }
            else if ((Delarr.Contains("MGR") || Delarr.Contains("RECMGR")) || (Delarr.Contains("AP")) || (Delarr.Contains("ADMIN") || Delarr.Contains("GADMIN")))
            {
                DataSet dsmanager1 = new DataSet();
                if (Session["APManagers"] == null)
                {
                    var apmanagersList = xms.getManagers(Convert.ToInt32(Session["SelUserID"]), Convert.ToInt32(Session["OrgID"]), hdnCompCode.Value, 2);
                    List<UserVO> apmanagers = ser.Deserialize<List<UserVO>>(apmanagersList);
                    dsmanager1.Tables.Add(Utility.ConvertToDataTable(apmanagers));
                    Session["APManagers"] = dsmanager1;
                }
                else
                    dsmanager1 = (DataSet)Session["APManagers"];
                DataTable dtDelMgr = dsmanager1.Tables[0];
                DataTable dtModUG = dtGrup.Clone();
                DataView dv1;
                DataTable dtMod = new DataTable();
                int apCnt = 0;
                DataRow row1;

                //Split Managers with '--' and capture in dv1
                for (int k = 0; k < dtDelMgr.Rows.Count; k++)
                {
                    row1 = dtModUG.NewRow();
                    string[] arr1 = dtDelMgr.Rows[k]["email"].ToString().Split(new string[] { " -- " }, StringSplitOptions.None);
                    string email = arr1[0];
                    string grpID = arr1[1];
                    row1["UserGroup"] = grpID;
                    dtModUG.Rows.Add(row1);
                }
                DataTable dtUGUnique = dtModUG.DefaultView.ToTable(true, "UserGroup");
                for (int j = 0; j < dtUGUnique.Rows.Count; j++)
                {
                    apCnt = 0;
                    string expr1 = "userGroup = '" + dtUGUnique.Rows[j]["UserGroup"].ToString() + "'";
                    dv1 = new DataView(dtGrup, expr1, "userGroup", DataViewRowState.CurrentRows);

                    string expr3 = string.Empty;
                    expr3 = "UserProfile = 'AP'";
                    DataView dv4 = new DataView(dv1.ToTable(), expr3, "UserProfile", DataViewRowState.CurrentRows);
                    if (dv4.ToTable().Rows.Count > 0)
                        apCnt++;

                    string expr2 = string.Empty;
                    if (dtDelMgr.Rows[0]["appFlag"].ToString().ToLower() == "n")
                    {
                        if (apCnt > 0)
                            expr2 = "email like '%-- " + dtUGUnique.Rows[j]["UserGroup"].ToString() + "' And managerId<>'" + Session["SelUserID"].ToString() + "'";
                        else
                            expr2 = "email like '%-- " + dtUGUnique.Rows[j]["UserGroup"].ToString() + "' and ManagerApprovalLimit >= '" + ut.NullSafeDouble(dslist.Tables[0].Rows[i]["ApprovalLimit"]) + "'And managerId<>'" + Session["SelUserID"].ToString() + "'";
                        DataView dv2 = new DataView(dtDelMgr, expr2, "email", DataViewRowState.CurrentRows);
                        dtMod.Merge(dv2.ToTable());
                    }
                    else
                    {
                        expr2 = "email like '%-- " + dtUGUnique.Rows[j]["UserGroup"].ToString() + "' and ManagerApprovalLimit >= '" + ut.NullSafeDouble(dslist.Tables[0].Rows[i]["ApprovalLimit"]) + "'And managerId<>'" + Session["SelUserID"].ToString() + "'";
                        DataView dv2 = new DataView(dtDelMgr, expr2, "email", DataViewRowState.CurrentRows);
                        dtMod.Merge(dv2.ToTable());
                    }
                }
                if (dtMod.Rows.Count > 0)
                {
                    dvManagers1.Visible = true;
                    ddlManagers1.Visible = true;
                    ddlManagers1.DataSource = dtMod;
                    ddlManagers1.DataBind();
                    ddlManagers1.Items.Insert(0, "Please Select");
                    ddlManagers1.Items.FindByText("Please Select").Value = "0";
                    delete = true;
                }
                else
                {
                    dvError1.Style["color"] = "Red";
                    dvError1.InnerHtml = "Warning! <br/>Please create a similar profile before deleting this profile.";
                    dvManagers1.Visible = false;
                    ddlManagers1.Visible = false;
                    delete = false;
                }
            }
            else
            {
                if (Delarr.Contains("USER"))
                {
                    dvError1.Style["color"] = "Red";
                    dvError1.InnerHtml = "Are you sure you want to delete the selected profile";
                    dvManagers1.Visible = false;
                    ddlManagers1.Visible = false;
                    delete = true;
                }
            }
        }
        else
        {
            dvManagers1.Visible = false;
            ddlManagers1.Visible = false;
            dvError1.Style["color"] = "Green";
            dvError1.InnerHtml = "Click OK to activate the user";
            delete = true;
        }
        if (delete)
            btnOk.Visible = true;
        else
            btnOk.Visible = false;
        popDelete.Show();
    }

    protected void btnOk_Click(object sender, EventArgs e)
    {
        int userId = ut.NullSafeInteger(Session["SelUserID"]);
        int levelId = ut.NullSafeInteger(Session["LevelID"]);
        if (ddlManagers1.Visible == false)
        {
            TransferResponsibility(userId, 0);
            popDelete.Hide();
        }
        else if (ddlManagers1.Visible == true)
        {
            if (ddlManagers1.SelectedIndex == 0)
            {
                dvError1.InnerHtml = "<br/><br/>Please select Manager or AP.";
                popDelete.Show();
            }
            else
            {
                TransferResponsibility(userId, ut.NullSafeInteger(ddlManagers1.SelectedValue));
                if (userId == ut.NullSafeInteger(Session["UserID"]))
                {
                    string s = ddlManagers1.SelectedItem.Text;
                    int index = s.IndexOf(' ');
                    string str = s.Substring(0, index);
                    Session["ManagerEmail"] = str.TrimEnd(' ');
                    Session["ManagerID"] = ddlManagers1.SelectedValue;
                }
            }
        }
    }

    private void TransferResponsibility(int userID, int mgrId)
    {
        lblMsg.Text = string.Empty;
        int i = 0;
        DataSet dsUserDetails = (DataSet)Session["Users"];
        for (i = 0; i < dsUserDetails.Tables[0].Rows.Count; i++)
        {
            if (Convert.ToInt32(dsUserDetails.Tables[0].Rows[i]["UserID"]) == userID)
                break;
        }
        DataSet dslogUser = (DataSet)Session["LogUserdetails"];
        string[] delArr = (string[])Session["DeleteLoadArr"];
        string AdminID = string.Empty;
        for (int j = 0; j < dslogUser.Tables[0].Rows.Count; j++)
        {
            if (Convert.ToInt32(dslogUser.Tables[0].Rows[j]["LevelID"]).ToString() == "0")
                AdminID = dslogUser.Tables[0].Rows[j]["UserID"].ToString();
        }
        if (dsUserDetails.Tables[0].Rows.Count > 0)
        {
            int ret = 0;
            string returnStr = string.Empty;
            if (hdnIsActive1.Value.ToLower() == "true")
            {
                ret = xms.updateManager(mgrId, userID);
                returnStr = xms.updateUserStatus(userID, false, mgrId, Convert.ToInt32(AdminID));
                if (returnStr.ToLower().Contains("succes"))
                {
                    if (Session["Email"].ToString() == Session["SelEmail"].ToString())
                    {
                        if (Convert.ToInt32(Session["LevelID"]) == 2)
                            Session["IsManager"] = "false";
                        else if (Convert.ToInt32(Session["LevelID"]) == 1)
                            Session["IsAP"] = "false";
                        Response.Redirect("Users1.aspx");
                    }
                }
            }
            else
            {
                returnStr = xms.updateUserStatus(userID, true, 0, Convert.ToInt32(Session["UserId"]));
                if (returnStr.ToLower().Contains("succes"))
                {
                    if (Session["Email"].ToString() == Session["SelEmail"].ToString())
                    {
                        if (Convert.ToInt32(Session["LevelID"]) == 2)
                            Session["IsManager"] = "true";
                        else if (Convert.ToInt32(Session["LevelID"]) == 1)
                            Session["IsAP"] = "true";
                        Response.Redirect("Users1.aspx");
                    }
                }
            }
            if (returnStr.ToLower().Contains("succes"))
                lblMsg.Style["color"] = "Green";
            else
                lblMsg.Style["color"] = "Red";
            lblMsg.Text = returnStr;
            popDelete.Hide();
            Session.Remove("Users");
            SortGrid();
        }
        else
        {
            dvError1.InnerHtml = "false";
            Session.Remove("Users");
            SortGrid();
            popDelete.Hide();
        }
    }

    #endregion

    #region CashAdvance History

    protected void DisplayCashAdvHistory(object sender, EventArgs e)
    {
        Session.Remove("dtCAHist");
        BindCAHistGrid();
        popup.Show();
        popCAHist.Show();
    }

    protected void SortExpression_CAHist(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CAHist"] = lnk.ID;

        if (Session["SortDir_CAHist"] == null || Session["SortDir_CAHist"].ToString() == "Asc")
            Session["SortDir_CAHist"] = "Desc";
        else
            Session["SortDir_CAHist"] = "Asc";
        Session["SortExpr_CAHist"] = e.CommandArgument;
        SortGrid();
    }

    private void BindCAHistGrid()
    {
        DataTable dt = new DataTable();
        if (Session["dtCAHist"] == null)
        {
            string str = xms.getCashAdvHist(Convert.ToInt32(Session["SelUserID"]));
            List<CashAdvHistVO> lst = ser.Deserialize<List<CashAdvHistVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtCAHist"] = dt;
        }
        else
            dt = (DataTable)Session["dtCAHist"];

        if ((Session["SortExpr_CAHist"] != null) && Session["SortDir_CAHist"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_CAHist"].ToString() + " " + Session["SortDir_CAHist"].ToString();
            gvCAHist.DataSource = sortedView;
        }
        else
            gvCAHist.DataSource = dt;
        gvCAHist.DataBind();
    }

    protected void gvCAHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_CAHist"] != null && Session["Control_CAHist"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_CAHist"].ToString());
                if (Session["SortDir_CAHist"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblModifiedBy = (Label)e.Row.FindControl("lblModifiedBy");
            LinkButton lnkEditCAReqHist = (LinkButton)e.Row.FindControl("lnkEditCAReqHist");
            if (lblModifiedBy.Text == "0")
                lnkEditCAReqHist.Visible = true;
            else
                lnkEditCAReqHist.Visible = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    #region ReqHistory

    protected void DisplayCAReqHist(object sender, CommandEventArgs e)
    {
        Session.Remove("dtCAReqHist");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblModfifiedOn = (Label)row.FindControl("lblModfifiedOn");
        hdnReqModDate.Value = lblModfifiedOn.Text;
        BindCAReqHistData(hdnReqModDate.Value);
        popup.Show();
        popCAHist.Show();
        popCAReqHist.Show();
    }

    protected void SortExpression_CAReqHist(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CAReqHist"] = lnk.ID;
        if (Session["SortDir_CAReqHist"] == null || Session["SortDir_CAReqHist"].ToString() == "Asc")
            Session["SortDir_CAReqHist"] = "Desc";
        else
            Session["SortDir_CAReqHist"] = "Asc";
        Session["SortExpr_CAReqHist"] = e.CommandArgument;
        BindCAReqHistData(hdnReqModDate.Value);
    }

    void BindCAReqHistData(string modDate)
    {
        DataTable dt = new DataTable();
        if (Session["dtCAReqHist"] == null)
        {
            string str = xms.getCashAdvReqId(Convert.ToInt32(Session["SelUserID"]), modDate);
            List<ApproveRequestsVO> lst = ser.Deserialize<List<ApproveRequestsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtCAReqHist"] = dt;
        }
        else
            dt = (DataTable)Session["dtCAReqHist"];
        if ((Session["SortExpr_CAReqHist"] != null) && Session["SortDir_CAReqHist"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_CAReqHist"].ToString() + " " + Session["SortDir_CAReqHist"].ToString();
            gvCAReqHist.DataSource = sortedView;
        }
        else
            gvCAReqHist.DataSource = dt;
        gvCAReqHist.DataBind();
    }

    #endregion

    #endregion
}
