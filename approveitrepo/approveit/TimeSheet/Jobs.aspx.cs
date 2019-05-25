using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using Saplin.Controls;

public partial class TimeSheet_Jobs : System.Web.UI.Page
{
    #region public variables

    public char currencySymbol;

    #endregion

    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp;

    #endregion

    #region Load Jobs

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            if (!IsPostBack)
            {
                txtHours.Attributes.Add("onkeyup", "javascript: calculateTotalCost('" + txtHours.ClientID + "', '" + txtRate.ClientID + "', '" + lblTotalCost.ClientID + "');");
                txtRate.Attributes.Add("onkeyup", "javascript: calculateTotalCost('" + txtHours.ClientID + "', '" + txtRate.ClientID + "', '" + lblTotalCost.ClientID + "');");
                txtHours.Attributes.Add("onchange", "javascript: calculateTotalCost('" + txtHours.ClientID + "', '" + txtRate.ClientID + "', '" + lblTotalCost.ClientID + "');");
                txtRate.Attributes.Add("onchange", "javascript: calculateTotalCost('" + txtHours.ClientID + "', '" + txtRate.ClientID + "', '" + lblTotalCost.ClientID + "');");
                Session.Remove("TSJobsList");
                txtFromDate.Text = "";
                txtToDate.Text = "";
                LoadJobData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserId"]));
        }
    }

    private void LoadJobData()
    {
        //Set From/To dates
        txtFromDate.Text = DateTime.Now.AddMonths(-6).ToShortDateString();
        txtToDate.Text = DateTime.Now.AddMonths(6).ToShortDateString();
        BindDropdowns();
        BindJobsGrid();

        //Get currency symbol
        GetCurrencySymbol();
    }

    private List<CodeValueVO> GetJobStatus()
    {
        string statusData = string.Empty;
        List<CodeValueVO> lstStatus = new List<CodeValueVO>();
        if (Session["JobStatus"] == null)
        {
            statusData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "JOBSTATUS");
            lstStatus = ser.Deserialize<List<CodeValueVO>>(statusData);
        }
        else
            lstStatus = (List<CodeValueVO>)Session["JobStatus"];
        return lstStatus;
    }

    private void GetCurrencySymbol()
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv.ToTable().Rows[0]["CodeValue1"]);
    }

    protected void btnGo_Click(object sender, EventArgs e)
    {
        Session.Remove("TSJobsList");
        BindJobsGrid();
    }

    private void BindDropdowns()
    {
        //Bind Status dropdown

        ddlHStatus.DataSource = GetJobStatus();
        ddlHStatus.DataTextField = "Description";
        ddlHStatus.DataValueField = "CodeKey";
        ddlHStatus.DataBind();
        ddlHStatus.Items.Insert(0, "Any Status");
        ddlHStatus.Items.FindByText("Any Status").Value = "0";

        //Bind Activity dropdown
        //ddlActive.Items.Insert(0, "Active/InActive");
        //ddlActive.Items.FindByText("Active/InActive").Value = "0";
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Job"] = lnk.ID;

        if (Session["SortDir_Job"] == null || Session["SortDir_Job"].ToString() == "Desc")
            Session["SortDir_Job"] = "Asc";
        else
            Session["SortDir_Job"] = "Desc";

        Session["SortExpr_Job"] = e.CommandArgument;
        LoadJobData();
    }

    private void BindJobsGrid()
    {
        DataTable dt = new DataTable();
        if (Session["TSJobsList"] == null)
        {
            string str = xms.getTSJobs(ut.NullSafeInteger(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), Session["CompCode"].ToString(), txtFromDate.Text, txtToDate.Text);
            List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSJobsList"] = dt;
        }
        else
            dt = (DataTable)Session["TSJobsList"];
        if ((Session["SortExpr_Job"] != null) && Session["SortDir_Job"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Job"].ToString() + " " + Session["SortDir_Job"].ToString();
            gvJobs.DataSource = view;
        }
        else
            gvJobs.DataSource = dt;
        gvJobs.DataBind();
    }

    protected void ddlHStatus_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["TSJobsList"];
        if (ddlHStatus.SelectedValue != "0")
        {
            string expr = "Status = '" + ddlHStatus.SelectedValue + "'";
            DataView dv = new DataView(dt, expr, "Status", DataViewRowState.CurrentRows);
            gvJobs.DataSource = dv;
        }
        else
            gvJobs.DataSource = dt;
        gvJobs.DataBind();
    }

    protected void gvJobs_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox chkIsActive = (CheckBox)e.Row.FindControl("chkIsActive");
            HiddenField hdnIsActive = (HiddenField)e.Row.FindControl("hdnIsActive");
            chkIsActive.Checked = hdnIsActive.Value.Trim() == "Y" ? true : false;
            chkIsActive.Enabled = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Job"] != null && Session["Control_Job"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Job"].ToString());
                if (Session["SortDir_Job"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        dvMainMsg.InnerHtml = string.Empty;
        Session.Remove("TSJobsList");
        LoadJobData();
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

    #region Export Jobs

    protected void btnExportJobs_Click(object sender, EventArgs e)
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["TSJobsList"];
        if (dt.Rows.Count > 0)
        {
            GridView dgDgrid = new GridView();
            dgDgrid.AllowPaging = false;
            dgDgrid.DataSource = dt;

            BoundField dgc_jobCode = new BoundField();
            dgc_jobCode.DataField = "jobCode";
            dgc_jobCode.HeaderText = "Job Code";
            dgDgrid.Columns.Add(dgc_jobCode);
            BoundField dgc_jobName = new BoundField();
            dgc_jobName.DataField = "jobName";
            dgc_jobName.HeaderText = "Job Name";
            dgDgrid.Columns.Add(dgc_jobName);
            BoundField dgc_jobDescription = new BoundField();
            dgc_jobDescription.DataField = "jobDescription";
            dgc_jobDescription.HeaderText = "Description";
            dgDgrid.Columns.Add(dgc_jobDescription);
            BoundField dgc_status = new BoundField();
            dgc_status.DataField = "status";
            dgc_status.HeaderText = "Status";
            dgDgrid.Columns.Add(dgc_status);
            BoundField dgc_isActive = new BoundField();
            dgc_isActive.DataField = "isActive";
            dgc_isActive.HeaderText = "isActive";
            dgDgrid.Columns.Add(dgc_isActive);

            dgDgrid.AutoGenerateColumns = false;
            dgDgrid.DataBind();
            Session["dgDJobGrid"] = dgDgrid;
            Response.Redirect("../DownloadFile.aspx?typ=13");
        }
        popExport.Show();
    }

    #endregion

    #region Manage Job

    protected void AddNewJob(object sender, EventArgs e)
    {
        //Session.Remove("RetJobUsersString");
        btnSave.Attributes.Add("onclick", "javascript: return validateJobDetails();");
        btnCloseAcc.Attributes.Add("onclick", "javascript: return closeAccPop();");
        ClearFields();
        lblHViewJob.Text = "Add New Job";
        LoadJobDefaults();
        GetCurrencySymbol();
        popViewJob.Show();
    }

    protected void EditJob(object sender, CommandEventArgs e)
    {
        //Session.Remove("RetJobUsersString");
        btnSave.Attributes.Add("onclick", "javascript: return validateJobDetails();");
        btnCloseAcc.Attributes.Add("onclick", "javascript: return closeAccPop();");
        string jobID = e.CommandArgument.ToString();
        ClearFields();
        lblHViewJob.Text = "View Job";
        LoadSelectedJobDetails(sender, jobID);
        GetCurrencySymbol();
        popViewJob.Show();
    }

    private void LoadJobDefaults()
    {
        //Load Job Type
        var jobTypeData = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "JOBTYPE");
        List<CodeValueVO> lstJobType = ser.Deserialize<List<CodeValueVO>>(jobTypeData);
        DataTable dtJobType = Utility.ConvertToDataTable(lstJobType);
        DataView dvJobType = dtJobType.DefaultView;
        dvJobType.Sort = "CodeValue1 ASC";
        ddlJobType.DataSource = dvJobType;
        ddlJobType.DataTextField = "Description";
        ddlJobType.DataValueField = "CodeKey";
        ddlJobType.DataBind();

        //Load Status
        DataTable dtstatus = Utility.ConvertToDataTable(GetJobStatus());
        DataView dvstatus = dtstatus.DefaultView;
        dvstatus.Sort = "CodeValue1 ASC";
        ddlStatus.DataSource = dvstatus;
        ddlStatus.DataTextField = "Description";
        ddlStatus.DataValueField = "CodeKey";
        ddlStatus.DataBind();
        try
        {
            ddlStatus.SelectedValue = "OPEN";
        }
        catch { }

        //Load Departments
        var deptData = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
        List<CodeValueVO> dept = ser.Deserialize<List<CodeValueVO>>(deptData);
        ddlDept.DataSource = dept;
        ddlDept.DataTextField = "Description";
        ddlDept.DataValueField = "CodeKey";
        ddlDept.DataBind();
        ddlDept.SelectedValue = Session["DepartmentCode"].ToString();
        string strDept = GetDeptSelectedValue(string.Empty);
        LoadAccountCodes(strDept, null);

        //Load managers and users
        LoadManagersAndUsers();
    }

    private void LoadManagersAndUsers()
    {
        //Load Managers
        DataTable dtManager = new DataTable();
        var strMgrsList = xms.getManagers(0, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 1);
        List<UserVO> lstMgrs = ser.Deserialize<List<UserVO>>(strMgrsList);
        dtManager = Utility.ConvertToDataTable(lstMgrs);

        //Get mangers of selected departments
        string strDeptSel = GetDeptSelectedValue("yes");
        DataView dv = new DataView(dtManager, "departmentCode IN (" + strDeptSel + ")", "Email", DataViewRowState.CurrentRows);
        //Get mangers of selected departments

        ddlManager.DataSource = dv;
        ddlManager.DataTextField = "Email";
        ddlManager.DataValueField = "UserID";
        ddlManager.DataBind();

        //ddlManager.SelectedValue = Session["ManagerID"].ToString();

        //Load Users
        DataTable dt = LoadUsersAccordingToManager(ut.NullSafeInteger(ddlManager.SelectedValue));
        lstUsers.DataSource = dt;
        lstUsers.DataTextField = "Email";
        lstUsers.DataValueField = "UserID";
        lstUsers.DataBind();

        foreach (ListItem item in lstUsers.Items)
            item.Attributes.Add("title", item.Text);
        //DataSet dsUser = new DataSet();
        //if (Session["Users"] == null)
        //{
        //    var usersList = xms.getUsersList(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        //    List<UserVO> users = ser.Deserialize<List<UserVO>>(usersList);
        //    dsUser.Tables.Add(Utility.ConvertToDataTable(users));
        //    Session["Users"] = dsUser;
        //}
        //else
        //    dsUser = (DataSet)Session["Users"];
        //lstUsers.DataSource = dsUser;
        //lstUsers.DataTextField = "Email";
        //lstUsers.DataValueField = "UserID";
        //lstUsers.DataBind();
    }

    private string ConvertToShortDate(string date)
    {
        if (!string.IsNullOrEmpty(date))
            date = Convert.ToDateTime(date).ToShortDateString();

        return date;
    }

    private void LoadSelectedJobDetails(object sender, string jobId)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LoadJobDefaults();
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "JobID = " + jobId;
        DataView dv = new DataView(dt, expr, "JobCode", DataViewRowState.CurrentRows);
        txtJobCode.Text = dv.ToTable().Rows[0]["JobCode"].ToString();
        txtJobName.Text = dv.ToTable().Rows[0]["JobName"].ToString();
        txtStartDate.Text = ConvertToShortDate(dv.ToTable().Rows[0]["startDate"].ToString());
        txtEndDate.Text = ConvertToShortDate(dv.ToTable().Rows[0]["endDate"].ToString());
        txtHours.Text = dv.ToTable().Rows[0]["hours"].ToString();
        txtRate.Text = dv.ToTable().Rows[0]["rate"].ToString();
        chkIsActive.Checked = dv.ToTable().Rows[0]["isActive"].ToString().Trim() == "Y" ? true : false;
        ddlStatus.SelectedValue = dv.ToTable().Rows[0]["status"].ToString();
        ddlManager.SelectedValue = dv.ToTable().Rows[0]["managerId"].ToString();
        txtDescr.Text = dv.ToTable().Rows[0]["jobDescription"].ToString();
        txtRole.Text = dv.ToTable().Rows[0]["jobRole"].ToString();
        ddlJobType.SelectedValue = dv.ToTable().Rows[0]["jobType"].ToString();
        hdnJobID.Value = dv.ToTable().Rows[0]["jobId"].ToString();
        Session["PrevAssgndUserList"] = dv.ToTable().Rows[0]["usersList"].ToString();
        lblTotalCost.Text = (ut.NullSafeDouble(txtRate.Text) * ut.NullSafeDouble(txtHours.Text)).ToString();

        //Load accounts and departments
        GetJobAccDetailsByJobCode(txtJobCode.Text);

        //bind users in the list boxes based on the saved values
        string[] str = dv.ToTable().Rows[0]["usersList"].ToString().Split(',');
        DataTable dtUsers = LoadUsersAccordingToManager(ut.NullSafeInteger(ddlManager.SelectedValue));
        DataTable dtUsersNotAssigned = dtUsers.Clone();
        DataTable dtUsersAssigned = dtUsers.Clone();

        for (int i = 0; i < dtUsers.Rows.Count; i++)
        {
            if (str.Contains(dtUsers.Rows[i]["UserID"].ToString()))
                dtUsersAssigned.ImportRow(dtUsers.Rows[i]);
            else
                dtUsersNotAssigned.ImportRow(dtUsers.Rows[i]);
        }

        lstUsers.DataSource = dtUsersNotAssigned;
        lstUsers.DataTextField = "Email";
        lstUsers.DataValueField = "UserID";
        lstUsers.DataBind();

        lstAssignedUsers.DataSource = dtUsersAssigned;
        lstAssignedUsers.DataTextField = "Email";
        lstAssignedUsers.DataValueField = "UserID";
        lstAssignedUsers.DataBind();
    }

    private void GetJobAccDetailsByJobCode(string jobCode)
    {
        string str = xms.getJobDetail(jobCode, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
        DataTable dtJob = Utility.ConvertToDataTable(lst);

        //select departments
        DataView dv = dtJob.DefaultView;
        SelectDeptDropdownOnEdit(dv.ToTable(true, "deptCode"));

        //Select Accounts
        string dept = GetDeptSelectedValue(string.Empty);
        LoadAccountCodes(dept, dtJob);
    }

    private void SelectDeptDropdownOnEdit(DataTable dt)
    {
        DropDownCheckBoxes ddl1 = (DropDownCheckBoxes)this.FindControl("ddlDept");
        string caption = string.Empty;
        foreach (ListItem item in ddl1.Items)
        {
            //if (item.Value == str)
            //{
            //    item.Selected = true;
            //    caption += item.Text + ",";
            //}
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                if (item.Value == dt.Rows[i]["DeptCode"].ToString())
                {
                    item.Selected = true;
                    caption += item.Text + ",";
                }
            }
        }

        if (!string.IsNullOrEmpty(caption))
            ddl1.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
    }

    private string GetDeptSelectedValue(string quote)
    {
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlDept");
        foreach (ListItem item in ddl.Items)
        {
            if (item.Selected)
            {
                if (i < 2)
                    caption += item + ",";
                if (!string.IsNullOrEmpty(quote))
                    expStr += "'" + item.Value + "'" + ",";
                else
                    expStr += item.Value + ",";
                i++;
            }
        }
        if (i > 0)
        {
            ddl.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
            if (string.IsNullOrEmpty(quote))
                expStr = (i + 1).ToString() + "," + expStr;
        }
        return expStr.TrimEnd(',');
    }

    protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        //Load Account Codes
        string dept = GetDeptSelectedValue(string.Empty);
        LoadAccountCodes(dept, null);
        //Load managers and users
        LoadManagersAndUsers();
        GetCurrencySymbol();
        popViewJob.Show();
    }

    private void LoadAccountCodes(string deptCode, DataTable dtAcc)
    {
        DataTable dt = new DataTable();
        string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), deptCode, 3, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        dt = Utility.ConvertToDataTable(lst);

        if (!dt.Columns.Contains("AcctWithDept"))
            dt.Columns.Add("AcctWithDept");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AcctWithDept"] = dt.Rows[i]["expItem"].ToString() + "--" + dt.Rows[i]["deptCode"].ToString();


        //dt = dt.DefaultView.ToTable(true, "expItem", "AccountCode");
        DataView dv = dt.DefaultView;
        dv.Sort = "AcctWithDept Asc";

        if (dtAcc == null)
        {
            lstAllAcc.DataSource = dv;
            lstAllAcc.DataTextField = "AcctWithDept";
            lstAllAcc.DataValueField = "AccountCode";
            lstAllAcc.DataBind();
        }
        else
        {
            DataTable dtAssignedAcc = dt.Clone();
            DataTable dtNotAssignedAccc = dt.Clone();
            string[] arrAcc = dtAcc.AsEnumerable().Select(r => r.Field<string>("AccountCode")).ToArray();
            for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            {
                if (arrAcc.Contains(dv.ToTable().Rows[i]["AccountCode"].ToString()))
                    dtAssignedAcc.ImportRow(dv.ToTable().Rows[i]);
                else
                    dtNotAssignedAccc.ImportRow(dv.ToTable().Rows[i]);
            }

            dtAssignedAcc.DefaultView.Sort = "AcctWithDept Asc";
            dtNotAssignedAccc.DefaultView.Sort = "AcctWithDept Asc";

            lstAllAcc.DataSource = dtNotAssignedAccc;
            lstAllAcc.DataTextField = "AcctWithDept";
            lstAllAcc.DataValueField = "AccountCode";
            lstAllAcc.DataBind();

            lstAssignedAcc.DataSource = dtAssignedAcc;
            lstAssignedAcc.DataTextField = "AcctWithDept";
            lstAssignedAcc.DataValueField = "AccountCode";
            lstAssignedAcc.DataBind();

            foreach (ListItem item in lstAssignedAcc.Items)
                item.Attributes.Add("title", item.Text);
        }
        foreach (ListItem item in lstAllAcc.Items)
            item.Attributes.Add("title", item.Text);
    }

    protected void ddlManager_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = LoadUsersAccordingToManager(ut.NullSafeInteger(ddlManager.SelectedValue));
        lstUsers.DataSource = dt;
        lstUsers.DataTextField = "Email";
        lstUsers.DataValueField = "UserID";
        lstUsers.DataBind();

        foreach (ListItem item in lstUsers.Items)
            item.Attributes.Add("title", item.Text);
        GetCurrencySymbol();
        popViewJob.Show();
    }

    private DataTable LoadUsersAccordingToManager(int mgrID)
    {
        string strUsers = xms.getManagers(mgrID, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 6);
        List<UserVO> listUsers = ser.Deserialize<List<UserVO>>(strUsers);
        DataTable dt = Utility.ConvertToDataTable(listUsers);
        return dt;
    }

    protected void SaveJob(object sender, EventArgs e)
    {
        string accountCode, addedBy, addedOn, compCode, deptCode, endDate, hours, hoursPer, isActive, jobCode, jobDescription, jobId, jobName, jobRole,
             jobType, managerId, modifiedOn, orgId, rate, startDate, status, type, userListSize, usersList, userId, appString;
        accountCode = addedBy = addedOn = compCode = deptCode = endDate = hours = hoursPer = isActive = jobCode = jobDescription = jobId = jobName = jobRole =
            jobType = managerId = modifiedOn = orgId = rate = startDate = status = type = userListSize = usersList = userId = string.Empty;
        appString = "###";

        int typeflg = 0;

        //Format assigned users as a string
        int userLstSize = 0;
        string str = string.Empty;
        foreach (ListItem item in lstAssignedUsers.Items)
        {
            str += item.Value + ":Y~";
            userLstSize++;
        }
        //include manager in userlist assigned to job
        str += ddlManager.SelectedValue + ":Y~";
        userLstSize++;

        if (Session["PrevAssgndUserList"] != null)
        {
            if (Session["PrevAssgndUserList"].ToString().Length > 0)
            {
                string[] strArray = Session["PrevAssgndUserList"].ToString().Split(',');
                string[] strArrayNotAssngd = new string[lstAssignedUsers.Items.Count];
                int k = 0;
                foreach (ListItem item in lstAssignedUsers.Items)
                {
                    strArrayNotAssngd[k] = item.Value;
                    k++;
                }
                for (int i = 0; i < strArray.Length; i++)
                {
                    if (!strArrayNotAssngd.Contains(strArray[i]))
                    {
                        str += strArray[i] + ":N~";
                        userLstSize++;
                    }
                }
            }
        }
        //Format assigned users as a string

        //Iterate thru list of accounts and departments
        foreach (ListItem item in lstAssignedAcc.Items)
        {
            string[] arrAcc = item.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            accountCode += item.Value + appString;
            addedBy += Session["UserID"] + appString;
            addedOn += DateTime.Now.ToShortDateString() + appString;
            compCode += Session["CompCode"].ToString() + appString;
            deptCode += arrAcc[1] + appString;//ddlDept.SelectedValue
            endDate += (txtEndDate.Text == string.Empty ? " " : txtEndDate.Text) + appString;
            hours += txtHours.Text + appString;
            hoursPer += " " + appString;
            isActive += (chkIsActive.Checked ? "Y" : "N") + appString;
            jobCode += txtJobCode.Text + appString;
            jobDescription += (txtDescr.Text == string.Empty ? " " : txtDescr.Text) + appString;
            jobId += (hdnJobID.Value == string.Empty ? "0" : hdnJobID.Value) + appString;
            jobName += txtJobName.Text + appString;
            jobRole += (txtRole.Text == string.Empty ? " " : txtRole.Text) + appString;
            jobType += ddlJobType.SelectedValue + appString;
            managerId += ddlManager.SelectedValue + appString;
            modifiedOn += DateTime.Now.ToShortDateString() + appString;
            orgId += Session["OrgID"] + appString;
            rate += (txtRate.Text == string.Empty ? "0" : txtRate.Text) + appString;
            startDate += (txtStartDate.Text == string.Empty ? " " : txtStartDate.Text) + appString;
            status += ddlStatus.SelectedValue + appString;
            if (typeflg == 0)
            {
                type += "1" + appString;
                typeflg = 1;
            }
            else
                type += "2" + appString;
            //type += (hdnJobID.Value == string.Empty ? "1" : "2") + appString;
            userListSize += userLstSize + appString;
            usersList += str.TrimEnd('~') + appString;
            userId += Session["UserID"] + appString;
        }
        //Iterate thru list of accounts and departments

        TSJobsMulVO ts = new TSJobsMulVO();
        //TSJobsVO ts = new TSJobsVO();
        ts.accountCode = accountCode.Substring(0, accountCode.Length - 3);//ddlAccountCode.SelectedValue;
        ts.addedBy = addedBy.Substring(0, addedBy.Length - 3);
        ts.addedOn = addedOn.Substring(0, addedOn.Length - 3);
        ts.compCode = compCode.Substring(0, compCode.Length - 3);
        ts.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        ts.endDate = endDate.Substring(0, endDate.Length - 3);
        ts.hours = hours.Substring(0, hours.Length - 3);
        ts.hoursPer = hoursPer.Substring(0, hoursPer.Length - 3);
        ts.isActive = isActive.Substring(0, isActive.Length - 3);
        ts.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        ts.jobDescription = jobDescription.Substring(0, jobDescription.Length - 3);
        ts.jobId = jobId.Substring(0, jobId.Length - 3);
        ts.jobName = jobName.Substring(0, jobName.Length - 3);
        ts.jobRole = jobRole.Substring(0, jobRole.Length - 3);
        ts.jobType = jobType.Substring(0, jobType.Length - 3);
        ts.managerId = managerId.Substring(0, managerId.Length - 3);
        ts.modifiedOn = modifiedOn.Substring(0, modifiedOn.Length - 3);
        ts.orgId = orgId.Substring(0, orgId.Length - 3);
        ts.rate = rate.Substring(0, rate.Length - 3);
        ts.startDate = startDate.Substring(0, startDate.Length - 3);
        ts.status = status.Substring(0, status.Length - 3);
        ts.type = type.Substring(0, type.Length - 3);
        ts.userListSize = userListSize.Substring(0, userListSize.Length - 3);
        ts.usersList = usersList.Substring(0, usersList.Length - 3);
        ts.userId = userId.Substring(0, userId.Length - 3);
        string retStr = xms.addTSJobsMul(ts);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMainMessage("Green", retStr);
            ClearFields();
            Session.Remove("TSJobsList");
            BindJobsGrid();
            popViewJob.Hide();
        }
        else
        {
            DisplayMessage("Red", retStr);
            GetCurrencySymbol();
            popViewJob.Show();
        }
    }

    private string CombineUsersSelectedString()
    {
        string str = string.Empty;
        if (Session["RetJobUsersString"] != null)
        {
            string[] prevStr = Session["RetJobUsersString"].ToString().Split(',');
            List<string> lst = new List<string>(prevStr);

            foreach (ListItem item in lstUsers.Items)
                if (!(item.Selected && prevStr.Contains(item.Value)))
                    str += item.Value + ":" + (item.Selected ? "Y" : "N") + "~";
        }
        else
        {
            foreach (ListItem item in lstUsers.Items)
                if (item.Selected)
                    str += item.Value + ":Y~";
        }
        return str.TrimEnd('~');
    }

    #endregion

    #region Assign Users to the Job

    protected void AssignSelectedUsers(object sender, EventArgs e)
    {
        if (lstUsers.SelectedIndex >= 0)
        {
            int cnt = lstUsers.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                if (lstUsers.Items[i].Selected)
                {
                    if (!lstAssignedUsers.Items.Contains(lstUsers.Items[i]))
                        lstAssignedUsers.Items.Add(lstUsers.Items[i]);
                }
            }

            //Remove selected items in Users Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstUsers.Items)
            {
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            }
            foreach (ListItem listItem in itemsToRemove)
            {
                lstUsers.Items.Remove(listItem);
            }
        }
        foreach (ListItem item in lstAssignedUsers.Items)
            item.Attributes.Add("title", item.Text);
        GetCurrencySymbol();
        popViewJob.Show();
    }

    protected void AssignAllUsers(object sender, EventArgs e)
    {
        List<string> lstMovedItems = new List<string>();
        if (lstUsers.Items.Count > 0)
        {
            int cnt = lstUsers.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                lstMovedItems.Add(lstUsers.Items[0].Value);
                //Assign Selected Users from Listbox1 to Listbox2
                lstAssignedUsers.Items.Add(lstUsers.Items[0]);
                //Remove selected items in Users Listbox
                lstUsers.Items.Remove(lstUsers.Items[0]);
            }
        }
        foreach (ListItem item in lstAssignedUsers.Items)
            item.Attributes.Add("title", item.Text);
        GetCurrencySymbol();
        popViewJob.Show();
    }

    protected void RemoveSelectedUsers(object sender, EventArgs e)
    {
        //Assign Selected Users from Listbox1 to Listbox2
        if (lstAssignedUsers.SelectedIndex >= 0)
        {
            string[] arr = new string[lstAssignedUsers.Items.Count];
            for (int i = 0; i < lstAssignedUsers.Items.Count; i++)
            {
                if (lstAssignedUsers.Items[i].Selected)
                    arr[i] = lstAssignedUsers.Items[i].Value;
            }

            int cnt = lstAssignedUsers.Items.Count;

            for (int i = 0; i < cnt; i++)
                if (lstAssignedUsers.Items[i].Selected)
                    if (!lstUsers.Items.Contains(lstAssignedUsers.Items[i]))
                        lstUsers.Items.Add(lstAssignedUsers.Items[i]);

            //Remove selected items in Users Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstAssignedUsers.Items)
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            foreach (ListItem listItem in itemsToRemove)
                lstAssignedUsers.Items.Remove(listItem);
        }
        GetCurrencySymbol();
        popViewJob.Show();
    }

    protected void RemoveAllUsers(object sender, EventArgs e)
    {
        if (lstAssignedUsers.Items.Count > 0)
        {
            string[] arr = new string[lstAssignedUsers.Items.Count];
            for (int i = 0; i < lstAssignedUsers.Items.Count; i++)
                arr[i] = lstAssignedUsers.Items[i].Value;

            int cnt = lstAssignedUsers.Items.Count;

            for (int i = 0; i < cnt; i++)
            {
                lstUsers.Items.Add(lstAssignedUsers.Items[0]);
                lstAssignedUsers.Items.Remove(lstAssignedUsers.Items[0]);
            }
        }
        GetCurrencySymbol();
        popViewJob.Show();
    }

    #endregion

    #region Assign Accounts

    protected void AssignSelectedAcc(object sender, EventArgs e)
    {
        if (lstAllAcc.SelectedIndex >= 0)
        {
            int cnt = lstAllAcc.Items.Count;
            for (int i = 0; i < cnt; i++)
                if (lstAllAcc.Items[i].Selected)
                    if (!lstAssignedAcc.Items.Contains(lstAllAcc.Items[i]))
                        lstAssignedAcc.Items.Add(lstAllAcc.Items[i]);

            //Remove selected items in Users Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstAllAcc.Items)
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);

            foreach (ListItem listItem in itemsToRemove)
                lstAllAcc.Items.Remove(listItem);
        }
        foreach (ListItem item in lstAssignedAcc.Items)
            item.Attributes.Add("title", item.Text);

        GetCurrencySymbol();
        popAcc.Show();
        popViewJob.Show();
    }

    protected void AssignAllAcc(object sender, EventArgs e)
    {
        List<string> lstMovedItems = new List<string>();
        if (lstAllAcc.Items.Count > 0)
        {
            int cnt = lstAllAcc.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                lstMovedItems.Add(lstAllAcc.Items[0].Value);
                //Assign Selected Users from Listbox1 to Listbox2
                lstAssignedAcc.Items.Add(lstAllAcc.Items[0]);
                //Remove selected items in Users Listbox
                lstAllAcc.Items.Remove(lstAllAcc.Items[0]);
            }
        }
        foreach (ListItem item in lstAssignedAcc.Items)
            item.Attributes.Add("title", item.Text);
        GetCurrencySymbol();
        //popAcc.Position = AjaxControlToolkit.PopupControlPopupPosition.Bottom;
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$find('" + popAcc.ClientID + "').showPopup() ;", true);
        popAcc.Show();
        popViewJob.Show();
    }

    protected void RemoveSelectedAcc(object sender, EventArgs e)
    {
        //Assign Selected Users from Listbox1 to Listbox2
        if (lstAssignedAcc.SelectedIndex >= 0)
        {
            string[] arr = new string[lstAssignedAcc.Items.Count];
            for (int i = 0; i < lstAssignedAcc.Items.Count; i++)
            {
                if (lstAssignedAcc.Items[i].Selected)
                    arr[i] = lstAssignedAcc.Items[i].Value;
            }

            int cnt = lstAssignedAcc.Items.Count;

            for (int i = 0; i < cnt; i++)
                if (lstAssignedAcc.Items[i].Selected)
                    if (!lstAllAcc.Items.Contains(lstAssignedAcc.Items[i]))
                        lstAllAcc.Items.Add(lstAssignedAcc.Items[i]);

            //Remove selected items in Users Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstAssignedAcc.Items)
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            foreach (ListItem listItem in itemsToRemove)
                lstAssignedAcc.Items.Remove(listItem);
        }
        GetCurrencySymbol();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$find('" + popAcc.ClientID + "').showPopup() ;", true);
        popAcc.Show();
        popViewJob.Show();
    }

    protected void RemoveAllAcc(object sender, EventArgs e)
    {
        if (lstAssignedAcc.Items.Count > 0)
        {
            string[] arr = new string[lstAssignedAcc.Items.Count];
            for (int i = 0; i < lstAssignedAcc.Items.Count; i++)
                arr[i] = lstAssignedAcc.Items[i].Value;

            int cnt = lstAssignedAcc.Items.Count;

            for (int i = 0; i < cnt; i++)
            {
                lstAllAcc.Items.Add(lstAssignedAcc.Items[0]);
                lstAssignedAcc.Items.Remove(lstAssignedAcc.Items[0]);
            }
        }
        GetCurrencySymbol();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$find('" + popAcc.ClientID + "').showPopup() ;", true);
        popAcc.Show();
        popViewJob.Show();
    }

    #endregion

    #region Misc

    private void ClearFields()
    {
        txtJobCode.Text = txtJobName.Text = txtStartDate.Text = txtEndDate.Text = txtHours.Text = txtRate.Text = txtDescr.Text = txtRole.Text = hdnJobID.Value = string.Empty;
        chkIsActive.Checked = true;
        dvErr.InnerHtml = string.Empty;
        ddlStatus.Items.Clear();
        //ddlAccountCode.Items.Clear();
        ddlManager.Items.Clear();
        ddlJobType.Items.Clear();
        lstUsers.Items.Clear();
        lstAssignedUsers.Items.Clear();
        lstAllAcc.Items.Clear();
        lstAssignedAcc.Items.Clear();
    }

    private void DisplayMessage(string color, string message)
    {
        dvErr.Style["color"] = color;
        dvErr.InnerHtml = message;
    }

    private void DisplayMainMessage(string color, string message)
    {
        dvMainMsg.Style["color"] = color;
        dvMainMsg.InnerHtml = message;
    }

    #endregion
}