using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;

public partial class TimeSheet_Tasks : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp;

    #endregion

    #region Load Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            if (!IsPostBack)
            {
                Session.Remove("TSJobsList");
                Session.Remove("TSTasksList");
                LoadTaskData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserId"]));
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("TSTasksList");
        LoadTaskData();
    }

    private void LoadTaskData()
    {
        BindDropdowns();
        DataTable dt = (DataTable)Session["TSJobsList"];
        BindTasksGrid(ut.NullSafeInteger(ddlJobName.SelectedValue));
    }

    private void BindDropdowns()
    {
        //Bind Job Name dropdown
        DataTable dt = new DataTable();
        if (Session["TSJobsList"] == null)
        {
            string str = xms.getTSJobs(ut.NullSafeInteger(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSJobsList"] = dt;
        }
        else
            dt = (DataTable)Session["TSJobsList"];

        ddlJobName.DataSource = dt;
        ddlJobName.DataTextField = "JobName";
        ddlJobName.DataValueField = "JobId";
        ddlJobName.DataBind();
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Task"] = lnk.ID;

        if (Session["SortDir_Task"] == null || Session["SortDir_Task"].ToString() == "Desc")
            Session["SortDir_Task"] = "Asc";
        else
            Session["SortDir_Task"] = "Desc";

        Session["SortExpr_Task"] = e.CommandArgument;
        LoadTaskData();
    }

    private void BindTasksGrid(int jobId)
    {
        DataTable dt = new DataTable();
        if (Session["TSTasksList"] == null)
        {
            string str = xms.getTSTasks(jobId);
            List<TSTasksVO> lst = ser.Deserialize<List<TSTasksVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSTasksList"] = dt;
        }
        else
            dt = (DataTable)Session["TSTasksList"];
        if ((Session["SortExpr_Task"] != null) && Session["SortDir_Task"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Task"].ToString() + " " + Session["SortDir_Task"].ToString();
            gvTasks.DataSource = view;
        }
        else
            gvTasks.DataSource = dt;
        gvTasks.DataBind();
    }

    protected void gvTasks_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_Task"] != null && Session["Control_Task"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Task"].ToString());
                if (Session["SortDir_Task"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void ddlJobName_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("TSTasksList");
        BindTasksGrid(ut.NullSafeInteger(ddlJobName.SelectedValue));
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

    #region Manage Task

    protected void AddNewTask(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript: return validateTaskDetails()");
        ClearFields();
        lblHTask.Text = "Add New Task";
        LoadTaskDefaults();
        hdnExtTaskID.Value = "0";
        popViewTask.Show();
    }

    protected void EditTask(object sender, CommandEventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript: return validateTaskDetails()");
        string taskID = e.CommandArgument.ToString();
        lblHTask.Text = "View Task";
        ClearFields();
        LoadSelectedTaskDetails(sender, taskID);
        popViewTask.Show();
    }

    private void LoadTaskDefaults()
    {
        //Load Status
        var statusData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "JOBSTATUS");
        List<CodeValueVO> lstStatus = ser.Deserialize<List<CodeValueVO>>(statusData);
        ddlStatus.DataSource = lstStatus;
        ddlStatus.DataTextField = "Description";
        ddlStatus.DataValueField = "CodeKey";
        ddlStatus.DataBind();
        ddlStatus.Items.Insert(0, "Please Select");
        ddlStatus.Items.FindByText("Please Select").Value = "0";

        DataTable dt = new DataTable();
        dt = (DataTable)Session["TSJobsList"];
        ddlJobCode.DataSource = dt;
        ddlJobCode.DataTextField = "JobCode";
        ddlJobCode.DataValueField = "JobId";
        ddlJobCode.DataBind();
        ddlJobCode.Items.Insert(0, "Please Select");
        ddlJobCode.Items.FindByText("Please Select").Value = "0";
    }

    private void LoadSelectedTaskDetails(object sender, string taskID)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LoadTaskDefaults();
        DataTable dt = (DataTable)Session["TSTasksList"];
        string expr = "TaskID = " + taskID;
        DataView dv = new DataView(dt, expr, "TaskCode", DataViewRowState.CurrentRows);
        ddlJobCode.SelectedValue = dv.ToTable().Rows[0]["JobID"].ToString();
        ddlJobCode.Enabled = false;
        hdnExtJobID.Value = ddlJobCode.SelectedValue;
        txtTaskCode.Text = dv.ToTable().Rows[0]["taskCode"].ToString();
        ddlStatus.SelectedValue = dv.ToTable().Rows[0]["status"].ToString();
        chkIsActive.Checked = dv.ToTable().Rows[0]["isActive"].ToString().Trim() == "Y" ? true : false;
        txtDescr.Text = dv.ToTable().Rows[0]["description"].ToString();
        hdnExtTaskID.Value = dv.ToTable().Rows[0]["taskId"].ToString();
        //ddlJobCode.SelectedValue = 
    }

    protected void SaveTask(object sender, EventArgs e)
    {
        TSTasksVO ts = new TSTasksVO();
        ts.addedBy = ut.NullSafeInteger(Session["UserID"]);
        ts.addedOn = DateTime.Now.ToShortDateString();
        ts.description = txtDescr.Text;
        ts.isActive = chkIsActive.Checked ? "Y" : "N";
        ts.jobId = ut.NullSafeInteger(ddlJobCode.SelectedValue);
        ts.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        ts.modifiedOn = DateTime.Now.ToShortDateString();
        ts.status = ddlStatus.SelectedValue;
        ts.taskCode = txtTaskCode.Text;
        ts.taskId = ut.NullSafeInteger(hdnExtTaskID.Value);
        ts.type = 0;
        ts.userId = ut.NullSafeInteger(Session["UserID"]);
        string retStr = xms.addTSTasks(ts);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage("Green", retStr);
            Session.Remove("TSTasksList");
            BindTasksGrid(ut.NullSafeInteger(ddlJobName.SelectedValue));
        }
        else
            DisplayMessage("Red", retStr);
        popViewTask.Show();
    }

    #endregion

    #region Misc

    private void ClearFields()
    {
        txtTaskCode.Text = txtDescr.Text = hdnExtJobID.Value = hdnExtTaskID.Value = string.Empty;
        chkIsActive.Checked = true;
        ddlJobCode.Enabled = true;
        dvErr.InnerHtml = string.Empty;
        ddlStatus.Items.Clear();
    }

    private void DisplayMessage(string color, string message)
    {
        dvErr.Style["color"] = color;
        dvErr.InnerHtml = message;
    }

    #endregion
}