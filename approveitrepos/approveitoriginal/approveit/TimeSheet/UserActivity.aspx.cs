using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using System.Data;
using ExpenseServiceBeta;

public partial class TimeSheet_UserActivity : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private string appString = "###";
    private bool _refreshExp;
    private string createdDate, createdOn, day1, day2, day3, day4, day5, day6, day7, detailFlag, detailsTotalHrs, jobID, lstUpdSource, masterFlag, modifiedOn, notes1, notes2, notes3,
        notes4, notes5, notes6, notes7, startDate, status, statusID, taskDate, taskID,
    tsID, totalHrs, weeklyTimeSheetId, userID;
    public string jobHrs, hrsSpent, hrsRem;

    #endregion

    #region Load Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            btnStartTask.Attributes.Add("onclick", "javascript:return validateStartTask();");
            btnSave.Attributes.Add("onclick", "javascript:return validateWeeklyTS();");
            btnSubmit.Attributes.Add("onclick", "javascript:return validateWeeklyTS();");
            if (!IsPostBack)
            {
                Session.Remove("MainTS");
                Session.Remove("TSJobsList");
                Session.Remove("TSID");
                Session.Remove("TSGridData");
                Session.Remove("StartDates");
                dvAutoNotes.Style["display"] = "none";
                txtFromDate.Text = DateTime.Now.AddDays(-30).ToShortDateString();
                txtToDate.Text = DateTime.Now.ToShortDateString();
                LoadMainTimeSheet();
                btnSave.Visible = false;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserId"]));
        }
    }

    private DataTable GetJobData()
    {
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
        return dt;
    }

    private void LoadJobData()
    {
        DataTable dt = GetJobData();
        //DataTable dt = (DataTable)Session["TSJobsList"];

        //bind jobs dropdown
        ddlJobName.DataSource = dt;
        ddlJobName.DataTextField = "JobName";
        ddlJobName.DataValueField = "JobId";
        ddlJobName.DataBind();
        ddlJobName.Items.Insert(0, "Please Select");
        ddlJobName.Items.FindByText("Please Select").Value = "0";

        //Bind TrackType dropdown
        string str1 = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "TSTRACKTYPE");
        List<CodeValueVO> lst1 = ser.Deserialize<List<CodeValueVO>>(str1);
        DataTable dt1 = Utility.ConvertToDataTable(lst1);
        ddlTrackingType.DataSource = dt1;
        ddlTrackingType.DataTextField = "Description";
        ddlTrackingType.DataValueField = "CodeKey";
        ddlTrackingType.DataBind();

        //Set Task as current date by default
        hdnCurrentDate.Value = txtTaskDate.Text = DateTime.Now.ToShortDateString();
        ShowSelectedTrackType();
        FindPendingAutoTracked();
        dvMainMessage.InnerHtml = string.Empty;
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("MainTS");
        LoadMainTimeSheet();
    }

    protected void gvTimeTrack_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            TextBox txtMonday = (TextBox)e.Row.FindControl("txtMonday");
            TextBox txtTuesday = (TextBox)e.Row.FindControl("txtTuesday");
            TextBox txtWednesday = (TextBox)e.Row.FindControl("txtWednesday");
            TextBox txtThursday = (TextBox)e.Row.FindControl("txtThursday");
            TextBox txtFriday = (TextBox)e.Row.FindControl("txtFriday");
            TextBox txtSaturday = (TextBox)e.Row.FindControl("txtSaturday");
            TextBox txtSunday = (TextBox)e.Row.FindControl("txtSunday");

            Image imgMondayNotes = (Image)e.Row.FindControl("imgMondayNotes");
            Image imgTuesdayNotes = (Image)e.Row.FindControl("imgTuesdayNotes");
            Image imgWednesdayNotes = (Image)e.Row.FindControl("imgWednesdayNotes");
            Image imgThursdayNotes = (Image)e.Row.FindControl("imgThursdayNotes");
            Image imgFridayNotes = (Image)e.Row.FindControl("imgFridayNotes");
            Image imgSaturdayNotes = (Image)e.Row.FindControl("imgSaturdayNotes");
            Image imgSundayNotes = (Image)e.Row.FindControl("imgSundayNotes");

            //Add attributes to textboxes in the grid to calculate row total duration on onkeyup event
            txtMonday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMonday.ClientID + "', '" + imgMondayNotes.ClientID + "')");
            txtTuesday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtTuesday.ClientID + "', '" + imgTuesdayNotes.ClientID + "')");
            txtWednesday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtWednesday.ClientID + "', '" + imgWednesdayNotes.ClientID + "')");
            txtThursday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtThursday.ClientID + "', '" + imgThursdayNotes.ClientID + "')");
            txtFriday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtFriday.ClientID + "', '" + imgFridayNotes.ClientID + "')");
            txtSaturday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSaturday.ClientID + "', '" + imgSaturdayNotes.ClientID + "')");
            txtSunday.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSunday.ClientID + "', '" + imgSundayNotes.ClientID + "')");

            txtMonday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMonday.ClientID + "', '" + imgMondayNotes.ClientID + "')");
            txtTuesday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtTuesday.ClientID + "', '" + imgTuesdayNotes.ClientID + "')");
            txtWednesday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtWednesday.ClientID + "', '" + imgWednesdayNotes.ClientID + "')");
            txtThursday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtThursday.ClientID + "', '" + imgThursdayNotes.ClientID + "')");
            txtFriday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtFriday.ClientID + "', '" + imgFridayNotes.ClientID + "')");
            txtSaturday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSaturday.ClientID + "', '" + imgSaturdayNotes.ClientID + "')");
            txtSunday.Attributes.Add("onblur", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSunday.ClientID + "', '" + imgSundayNotes.ClientID + "')");

            //Add attributes to textboxes in the grid to calculate row total duration on onchange event
            txtMonday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtMonday.ClientID + "', 1)");
            txtTuesday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtTuesday.ClientID + "', 2)");
            txtWednesday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtWednesday.ClientID + "', 3)");
            txtThursday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtThursday.ClientID + "', 4)");
            txtFriday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtFriday.ClientID + "', 5)");
            txtSaturday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtSaturday.ClientID + "', 6)");
            txtSunday.Attributes.Add("onchange", "javascript:return ReplaceIntegers('" + txtSunday.ClientID + "', 7)");

            imgMondayNotes.Style["visibility"] = "hidden";
            imgTuesdayNotes.Style["visibility"] = "hidden";
            imgWednesdayNotes.Style["visibility"] = "hidden";
            imgThursdayNotes.Style["visibility"] = "hidden";
            imgFridayNotes.Style["visibility"] = "hidden";
            imgSaturdayNotes.Style["visibility"] = "hidden";
            imgSundayNotes.Style["visibility"] = "hidden";

            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[9].Style["text-align"] = "right";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            Label lblHMonday = (Label)e.Row.FindControl("lblHMonday");
            Label lblHTuesday = (Label)e.Row.FindControl("lblHTuesday");
            Label lblHWednesday = (Label)e.Row.FindControl("lblHWednesday");
            Label lblHThursday = (Label)e.Row.FindControl("lblHThursday");
            Label lblHFriday = (Label)e.Row.FindControl("lblHFriday");
            Label lblHSaturday = (Label)e.Row.FindControl("lblHSaturday");
            Label lblHSunday = (Label)e.Row.FindControl("lblHSunday");
            DataTable dt = LoadWeekDays();
            DataView dv = new DataView(dt, "Monday = '" + ddlStartDate.SelectedValue + "'", "Monday", DataViewRowState.CurrentRows);
            lblHMonday.Text = "Monday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Monday"]).ToShortDateString() + ")";
            lblHTuesday.Text = "Tuesday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Tuesday"]).ToShortDateString() + ")";
            lblHWednesday.Text = "Wednesday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Wednesday"]).ToShortDateString() + ")";
            lblHThursday.Text = "Thursday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Thursday"]).ToShortDateString() + ")";
            lblHFriday.Text = "Friday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Friday"]).ToShortDateString() + ")";
            lblHSaturday.Text = "Saturday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Saturday"]).ToShortDateString() + ")";
            lblHSunday.Text = "Sunday</br>(" + Convert.ToDateTime(dv.ToTable().Rows[0]["Sunday"]).ToShortDateString() + ")";
        }
    }

    protected void ddlJobName_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlJobName.SelectedValue != "0")
        {
            Session.Remove("TSGridData");
            DataTable dt = (DataTable)Session["TSJobsList"];
            string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
            DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
            txtJobDescr.Text = dv.ToTable().Rows[0]["jobDescription"].ToString();

            //Fill task data according to Timesheet Type
            DataTable dt1 = GetTaskDataByJobID(ut.NullSafeInteger(ddlJobName.SelectedValue));
            if (dt1.Rows.Count > 0)
            {
                ddlTaskName.DataSource = dt1;
                ddlTaskName.DataTextField = "Description";
                ddlTaskName.DataValueField = "TaskId";
                ddlTaskName.DataBind();

                ShowSelectedTrackType();
                if (!ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
                {
                    BindWeekGrid();
                    LoadWeeklyTimeSheetData();
                }
            }
            else
            {
                dvWeekWise.Style["display"] = "none";
                MakeAutoFieldsReadOnly(true, "No tasks assigned to the selected job.");
                ddlTaskName.Items.Clear();
            }

            //Display alert if job hours exceeded or job date expired
            IsJobDateExpired(DateTime.Now.ToShortDateString());
            //Display alert if job hours exceeded or job date expired

            //Display hours job hours and hours worked 
            GetJobHours(dv.ToTable());
            //Display hours job hours and hours worked 
        }
        else
        {
            txtJobDescr.Text = string.Empty;
            dvWeekWise.Style["display"] = "none";
            dvTotalHrs.Style["display"] = "none";
            MakeAutoFieldsReadOnly(true, "No tasks assigned to the selected job.");
            IsJobDateExpired(string.Empty);
            ddlTaskName.Items.Clear();
            gvTimeTrack.DataBind();
        }
    }

    private DataTable GetTaskDataByJobID(int jobId)
    {
        DataTable dt = new DataTable();
        if (Session["TSGridData"] == null)
        {
            string str = xms.getTSTasks(jobId);
            List<TSTasksVO> lst = ser.Deserialize<List<TSTasksVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSGridData"] = dt;
        }
        else
            dt = (DataTable)Session["TSGridData"];
        return dt;
    }

    protected void ddlTaskName_SelectedIndexChanged(object sender, EventArgs e)
    {
        //Display hours job hours and hours worked 
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 

        ResetTimesheet();
    }

    protected void ddlTrackingType_SelectedIndexChanged(object sender, EventArgs e)
    {
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "confirm", "AlertDataLoss('" + ddlTrackingType.ClientID + "');", true);
        //Display hours job hours and hours worked 
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 

        ShowSelectedTrackType();
        if (!ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
        {
            BindYears();
            LoadStartDates();
            BindWeekGrid();
            LoadWeeklyTimeSheetData();
        }
        else
        {
            DataTable dt2 = GetTaskDataByJobID(ut.NullSafeInteger(ddlJobName.SelectedValue));
            ddlTaskName.DataSource = dt2;
            ddlTaskName.DataTextField = "Description";
            ddlTaskName.DataValueField = "TaskId";
            ddlTaskName.DataBind();
        }
    }

    private void ShowSelectedTrackType()
    {
        if (ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
        {
            dvYear.Style["display"] = "none";
            dvWeekWise.Style["display"] = "none";
            dvDayWise.Style["display"] = "block";
            txtTaskDate.Text = hdnCurrentDate.Value;
            txtTaskDate.Attributes.Add("readonly", "readonly");
            btnSave.Visible = false;
            ddlStartDate.Visible = false;
            dvTaskName.Style["display"] = "block";
            txtTaskDate.Visible = true;
            btnSubmit.Visible = false;
            dvStComments.Style["display"] = "none";
            ResetTimesheet();
            ValidateAutoTSStatus();
            btnStartTask.Attributes.Add("onclick", "javascript: return getLocaltime(1);");
            btnEndTask.Attributes.Add("onclick", "javascript: return getLocaltime(2);");
        }
        else
        {
            dvYear.Style["display"] = "block";
            dvWeekWise.Style["display"] = "block";
            dvErr.Style["display"] = dvDayWise.Style["display"] = "none";
            txtTaskDate.Attributes.Remove("readonly");
            btnSave.Visible = true;
            ddlStartDate.Visible = true;
            dvTaskName.Style["display"] = "none";
            txtTaskDate.Visible = false;
            btnSubmit.Visible = true;
        }
    }

    private void ValidateAutoTSStatus()
    {
        DataTable dt = GetTimeSheetData(GetWeekStartDate(txtTaskDate.Text));
        if (dt.Rows.Count > 0)
        {
            if (dt.Rows[0]["statusId"].ToString() == "1" || dt.Rows[0]["statusId"].ToString() == "4")
                MakeAutoFieldsReadOnly(true, "Current day timesheet is under " + dt.Rows[0]["status"].ToString() + ". You cannot perform any task in this job now.");
            else if (MaxJobHoursForAutoTSExceeded((DataTable)Session["TSJobsList"]))
                DisplayMessage("Red", "Today's total duration has exceeded its Maximum Job Hours per day.");
            //MakeAutoFieldsReadOnly(true, "Today's total duration has exceeded its Maximum Job Hours per day. You cannot perform any task now.");
            else
                MakeAutoFieldsReadOnly(false, string.Empty);
        }
        else
            MakeAutoFieldsReadOnly(false, string.Empty);
    }

    private bool MaxJobHoursForAutoTSExceeded(DataTable dt)
    {
        string maxJobHours = hdnMaxJobHrs.Value;
        string timeSpentOnJob = GetTimeFormattedData(dt.Rows[0]["totalDayHrs"].ToString());//GetJobDurationInADay(dt);
        if (maxJobHours == timeSpentOnJob)
            return true;
        else if (CompareTwoTimeDurations(timeSpentOnJob, maxJobHours, ':') > 0)
            return true;
        else
            return false;
    }

    private void IsJobDateExpired(string date)
    {
        if (!string.IsNullOrEmpty(date))
        {
            string totalDayDuration = string.Empty;
            totalDayDuration = "10:00";//dt.Rows[0]["totalDayDuration"].ToString();
            DataTable dt = (DataTable)Session["TSJobsList"];
            DataView dv = new DataView(dt, "JobID = " + ddlJobName.SelectedValue, "JobID", DataViewRowState.CurrentRows);
            if (dv.ToTable().Rows.Count > 0)
            {
                bool jobHrsExceeded = false;
                bool jobEndDateExceeded = false;

                //check if the selected job's total hours is exceeded by total hours worked on the job and end date of the job expired
                if (Convert.ToDateTime(date) > Convert.ToDateTime(dv.ToTable().Rows[0]["endDate"]))
                    jobEndDateExceeded = true;
                if (CompareTwoTimeDurations(GetTimeFormattedData(dv.ToTable().Rows[0]["Hours"].ToString()), GetTimeFormattedData(dv.ToTable().Rows[0]["HoursPer"].ToString()), ':') == 0)
                    jobHrsExceeded = true;

                //Display message according to the above validations
                if (jobHrsExceeded && jobEndDateExceeded)
                    DisplayAlert("block", "This job's end date has expired and total hours worked on this job has exceeded defined job hours.");
                else if (jobHrsExceeded)
                    DisplayAlert("block", "Total hours worked on this job has exceeded defined job hours.");
                else if (jobEndDateExceeded)
                    DisplayAlert("block", "This job's end date has expired.");
                else
                    DisplayAlert("none", string.Empty);
            }
        }
        else
            DisplayAlert("none", string.Empty);
    }

    private void FindPendingAutoTracked()
    {
        string str = xms.getTimeSheet(ut.NullSafeInteger(Session["UserID"]), txtTaskDate.Text);
        List<UserActivityVO> lst = ser.Deserialize<List<UserActivityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        //Find pending tasks to be ended

        DataView dv = new DataView(dt, "EndTime = '' and StartTime <> ''", "TaskDate", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            Session["TSID"] = dv.ToTable().Rows[0]["timeSheetId"].ToString();
            ddlJobName.SelectedValue = dv.ToTable().Rows[0]["jobId"].ToString();

            //Get Job Description by JobId
            DataTable dt1 = new DataTable();
            dt1 = (DataTable)Session["TSJobsList"];
            DataView dv1 = new DataView(dt1, "jobId = " + ddlJobName.SelectedValue, "jobId", DataViewRowState.CurrentRows);
            txtJobDescr.Text = dv1.ToTable().Rows[0]["jobDescription"].ToString();
            //Get Job Description by JobId

            //Get Tasks data
            DataTable dt2 = GetTaskDataByJobID(ut.NullSafeInteger(ddlJobName.SelectedValue));
            ddlTaskName.DataSource = dt2;
            ddlTaskName.DataTextField = "Description";
            ddlTaskName.DataValueField = "TaskId";
            ddlTaskName.DataBind();
            ddlTaskName.SelectedValue = dv.ToTable().Rows[0]["taskId"].ToString();
            lblStartTime.Text = dv.ToTable().Rows[0]["startTime"].ToString();
            //dvDuration.Style["display"] = "block";

            //timer for duration
            if (Session["timeout1"] == null)
                Session["timeout1"] = Convert.ToDateTime(lblStartTime.Text).ToLongTimeString();
            Session["TS"] = "1";
            //timer for duration

            ManageFieldsOnStart();
        }
    }

    private void GetJobHours(DataTable dt)
    {
        dvTotalHrs.Style["display"] = "block";
        jobHrs = GetTimeFormattedData(dt.Rows[0]["Hours"].ToString());
        hrsSpent = GetTimeFormattedData(dt.Rows[0]["HoursPer"].ToString());
        hrsRem = GetTimeIntervalDifference(jobHrs, hrsSpent);
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback();", true);

            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshExp", "setTimeout('refreshExp();', 800);", true);
        }
    }

    #endregion

    #region Main timesheet

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_TS"] = lnk.ID;

        if (Session["SortDir_TS"] == null || Session["SortDir_TS"].ToString() == "Desc")
            Session["SortDir_TS"] = "Asc";
        else
            Session["SortDir_TS"] = "Desc";

        Session["SortExpr_TS"] = e.CommandArgument;
        LoadMainTimeSheet();
    }

    private void LoadMainTimeSheet()
    {
        string str = string.Empty;
        DataTable dt = new DataTable();
        DataView view;
        if (Session["MainTS"] == null)
        {
            str = xms.getWeeklyDetails(ut.NullSafeInteger(Session["UserID"]), txtFromDate.Text, txtToDate.Text);
            List<UserActivityVO> lst = ser.Deserialize<List<UserActivityVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            for (int i = 0; i < dt.Rows.Count; i++)
                dt.Rows[i]["startDate"] = Convert.ToDateTime(dt.Rows[i]["startDate"]).ToString("MM/dd/yyyy");
            Session["MainTS"] = dt;
        }
        else
            dt = (DataTable)Session["MainTS"];

        view = dt.DefaultView;
        DataTable dtTemp = view.ToTable(true, "jobId", "startDate", "jobName", "jobDescription", "statusId");
        dtTemp.DefaultView.Sort = "startDate Desc";

        if ((Session["SortExpr_TS"] != null) && Session["SortDir_TS"] != null)
        {
            view = new DataView(dtTemp);
            view.Sort = Session["SortExpr_TS"].ToString() + " " + Session["SortDir_TS"].ToString();
            gvAlltimesheet.DataSource = view;
        }
        else
            gvAlltimesheet.DataSource = dtTemp.DefaultView;
        gvAlltimesheet.DataBind();
    }

    protected void btnGo_Click(object sender, EventArgs e)
    {
        Session.Remove("MainTS");
        LoadMainTimeSheet();
    }

    protected void gvAlltimesheet_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnJobID = (HiddenField)e.Row.FindControl("hdnJobID");
            HiddenField hdnStartDate = (HiddenField)e.Row.FindControl("hdnStartDate");
            GridView gvAllTSTasks = (GridView)e.Row.FindControl("gvAllTSTasks");
            DataTable dt = (DataTable)Session["MainTS"];
            DataView dv = new DataView(dt, "jobId = " + hdnJobID.Value + " and StartDate = '" + hdnStartDate.Value + "'", "TaskInfo", DataViewRowState.CurrentRows);
            gvAllTSTasks.DataSource = dv;
            gvAllTSTasks.DataBind();

            //Display inner gridview header day/date
            gvAllTSTasks.HeaderRow.Cells[1].Text = "Monday</br>(" + hdnStartDate.Value + ")";
            gvAllTSTasks.HeaderRow.Cells[2].Text = "Tuesday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(2).ToShortDateString() + ")";
            gvAllTSTasks.HeaderRow.Cells[3].Text = "Wednesday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(3).ToShortDateString() + ")";
            gvAllTSTasks.HeaderRow.Cells[4].Text = "Thursday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(4).ToShortDateString() + ")";
            gvAllTSTasks.HeaderRow.Cells[5].Text = "Friday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(5).ToShortDateString() + ")";
            gvAllTSTasks.HeaderRow.Cells[6].Text = "Saturday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(6).ToShortDateString() + ")";
            gvAllTSTasks.HeaderRow.Cells[7].Text = "Sunday</br>(" + Convert.ToDateTime(hdnStartDate.Value).AddDays(7).ToShortDateString() + ")";
            //Display inner gridview header day/date

            //Display status icon based on StatusId
            HiddenField hdnStatusID = (HiddenField)e.Row.FindControl("hdnStatusID");

            Label lblColor = (Label)e.Row.FindControl("lblColor");
            if (hdnStatusID.Value == "4")
            {
                lblColor.Style.Add("background-image", "url(../images/icons/tick.png)");
                lblColor.ToolTip = "Approved";
            }
            else if (hdnStatusID.Value == "5")
            {
                lblColor.Style.Add("background-image", "url(../images/icons/delet_cancel.png)");
                lblColor.ToolTip = "Rejected";
            }
            else if (hdnStatusID.Value == "3")
            {
                lblColor.Style.Add("background-image", "url(../images/icons/disk.png)");
                lblColor.ToolTip = "Saved";
            }
            else if (hdnStatusID.Value == "1")
            {
                lblColor.Style.Add("background-image", "url(../images/icons/user_suit.png)");
                lblColor.ToolTip = "Manager Review";
            }
            //Display status icon based on StatusId

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_TS"] != null && Session["Control_TS"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_TS"].ToString());
                if (Session["SortDir_TS"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void ViewTimesheet(object sender, EventArgs e)
    {
        dvManageTS.Style["display"] = "block";
        dvAllTS.Style["display"] = "none";
        btnGoToTimesheet.Visible = false;
        btnShowAllTimesheet.Visible = true;
        btnRefresh.Visible = false;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnJobID = (HiddenField)row.FindControl("hdnJobID");
        HiddenField hdnStartDate = (HiddenField)row.FindControl("hdnStartDate");
        HiddenField hdnJobDescr = (HiddenField)row.FindControl("hdnJobDescr");
        DataTable dt = (DataTable)Session["MainTS"];
        DataView dv = new DataView(dt, "jobId = " + hdnJobID.Value + " and StartDate = '" + hdnStartDate.Value + "'", "TaskInfo", DataViewRowState.CurrentRows);
        GetMaxJobHours();
        LoadJobData();
        ddlTrackingType.SelectedValue = "MANUAL";
        ddlJobName.SelectedValue = hdnJobID.Value;
        txtJobDescr.Text = hdnJobDescr.Value;
        ShowSelectedTrackType();
        BindYears();
        LoadStartDates();
        ddlStartDate.SelectedValue = hdnStartDate.Value;
        Session.Remove("TSGridData");
        GetTaskDataByJobID(ut.NullSafeInteger(ddlJobName.SelectedValue));
        BindWeekGrid();
        LoadWeeklyTimeSheetData();
    }

    protected void btnGoToTimesheet_Click(object sender, EventArgs e)
    {
        GetJobData();
        DataTable dtJobs = (DataTable)Session["TSJobsList"];
        if (dtJobs.Rows.Count > 0)
        {
            dvAllTS.Style["display"] = "none";
            dvManageTS.Style["display"] = "block";
            btnGoToTimesheet.Visible = false;
            btnShowAllTimesheet.Visible = true;
            btnRefresh.Visible = false;
            DisplayManualTSFields(false);
            GetMaxJobHours();
            LoadJobData();
        }
        else
        {
            dvMainMessage.InnerHtml = "No Jobs created. Please <a href='Jobs.aspx'>click here</a> to create job(s) before going to timesheet.";
            dvMainMessage.Style["color"] = "Red";
        }
    }

    protected void btnShowAllTimesheet_Click(object sender, EventArgs e)
    {
        dvAllTS.Style["display"] = "block";
        dvManageTS.Style["display"] = "none";
        dvWeekWise.Style["display"] = "none";
        dvTotalHrs.Style["display"] = "none";
        btnGoToTimesheet.Visible = true;
        btnShowAllTimesheet.Visible = false;
        btnRefresh.Visible = true;
        btnSave.Visible = false;
        btnSubmit.Visible = false;
    }

    #endregion

    #region Automatic Tracking

    protected void StartTask(object sender, EventArgs e)
    {
        lblStartTime.Text = hdnStartTaskTime.Value;
        //dvDuration.Style["display"] = "block";
        //timer for duration
        if (Session["timeout1"] == null)
            Session["timeout1"] = hdnCurrentTimeLong.Value;
        Session["TS"] = "1";
        //timer for duration

        string retStr = SaveTimeSheet(string.Empty);
        if (retStr.ToLower().Contains("succes") || retStr.ToLower().Contains("start"))
        {
            string[] str = retStr.Split('-');
            Session["TSID"] = str[0].TrimEnd();
            ManageFieldsOnStart();
            DisplayMessage("Green", str[1].TrimEnd());
        }
        else if (retStr.ToLower().Contains("succes"))
            DisplayMessage("Red", retStr);
        else
            DisplayMessage("Red", "An error occurred while saving the data. Please try again");
    }

    protected void EndTask(object sender, EventArgs e)
    {
        string minTaskTime = hdnMinTaskTime.Value;
        string timeDiff = string.Empty;
        //string endTime = DateTime.Now.ToShortTimeString();
        lblEndTime.Text = hdnEndTaskTime.Value;
        string endTime = lblEndTime.Text;

        //Get time difference from start and end times
        if (!string.IsNullOrEmpty(endTime))
        {
            timeDiff = (Convert.ToDateTime(endTime).Subtract(Convert.ToDateTime(lblStartTime.Text))).Duration().ToString();
            timeDiff = timeDiff.Substring(0, timeDiff.Length - 3);
        }
        //Get time difference from start and end times

        if (!string.IsNullOrEmpty(timeDiff))
        {
            if (CompareTwoTimeDurations(minTaskTime, timeDiff, ':') > 0)
            {
                lblConf.Text = "Duration is less than minimum task duration. Are you sure you want to end?";
                popMinTaskTimeVal.Show();//Display alert if task difference is less than min task time
            }
            else
                SaveEndTask();//save to database if task difference is greater than or equal to min task time
        }
    }

    protected void ConfirmEndTask(object sender, EventArgs e)
    {
        if (ddlTrackingType.SelectedValue.ToLower() == "auto")
            SaveEndTask();//Save to database even if task difference is less than min task time as per user command
        else
        {
            if (hdnIsSaveTimeSheet.Value.ToLower() == "save")
            {
                DataTable dtCodes = (DataTable)Session["dsCodes"];
                string expr = "CodeID = 'STATUS' and CodeValue1 = " + hdnStatusID.Value;
                DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);

                SaveWeekTSDate(dv.ToTable().Rows[0]["Description"].ToString(), ut.NullSafeInteger(hdnStatusID.Value), ut.NullSafeInteger(hdnTimesheetID.Value));
            }
            else if (hdnIsSaveTimeSheet.Value.ToLower() == "submit")
            {
                if (hdnStatusID.Value != "5")
                {
                    DataTable dtCodes = (DataTable)Session["dsCodes"];
                    string expr = "CodeID = 'STATUS' and CodeValue1 = 1";
                    DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);

                    SaveWeekTSDate(dv.ToTable().Rows[0]["Description"].ToString(), 1, ut.NullSafeInteger(hdnTimesheetID.Value));
                }
                else
                {
                    btnCommentsSave.Attributes.Add("onclick", "javascript: return validateComments('" + txtPopComments.ClientID + "')");
                    dvWidgetComments.InnerHtml = ShowPreviousComments();
                    btnCommentsSave.Visible = true;
                    txtPopComments.Visible = true;
                    btnCommentsClose.Visible = true;
                    txtPopComments.Focus();
                    popup_Comments.Show();
                }
            }
        }
    }

    private void SaveEndTask()
    {
        //lblEndTime.Text = DateTime.Now.ToShortTimeString();

        //timer for duration
        Session.Remove("TS");
        Session.Remove("timeout1");
        //timer for duration

        string retStr = SaveTimeSheet(lblEndTime.Text);
        if (retStr.ToLower().Contains("succes") || retStr.ToLower().Contains("end") || retStr.ToLower().Contains("stop"))
        {
            string[] str = retStr.Split('-');
            ManageFieldsOnEnd();
            DisplayMessage("Green", str[1].TrimEnd());
        }
        else if (retStr.ToLower().Contains("fail"))
            DisplayMessage("Red", retStr);
        else
            DisplayMessage("Red", "An error occurred while saving the data. Please try again");
    }

    private string SaveTimeSheet(string endTime)
    {
        //Get status
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'STATUS' and CodeKey = 'SVD'";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);

        //calculate time difference
        string timeDiff = string.Empty;
        if (!string.IsNullOrEmpty(endTime))
        {
            timeDiff = (Convert.ToDateTime(endTime).Subtract(Convert.ToDateTime(lblStartTime.Text))).Duration().ToString();
            timeDiff = timeDiff.Substring(0, timeDiff.Length - 3);
        }
        //calculate time difference

        //Get selected job hourly rate
        double rate = 0;
        DataTable dtJobs = GetJobData();
        DataView dvJobs = new DataView(dtJobs, "jobId = " + ddlJobName.SelectedValue, "jobId", DataViewRowState.CurrentRows);
        rate = ut.NullSafeDouble(dvJobs.ToTable().Rows[0]["rate"]);
        //Get selected job hourly rate

        //Save timesheet
        UserActivityVO userAct = new UserActivityVO();
        userAct.activityId = 0;
        userAct.addedOn = DateTime.Now.ToShortDateString();
        userAct.endTime = endTime;
        userAct.jobId = ut.NullSafeInteger(ddlJobName.SelectedValue);
        userAct.lstUpdtdSrce = "Web";
        userAct.lastUpdSource = "Web";
        userAct.modifiedOn = DateTime.Now.ToShortDateString();
        userAct.notes = txtAutoTSNotes.Text;
        userAct.startTime = lblStartTime.Text;
        userAct.status = dv.ToTable().Rows[0]["Description"].ToString();
        userAct.taskDate = txtTaskDate.Text;
        userAct.taskId = ut.NullSafeInteger(ddlTaskName.SelectedValue);
        userAct.timeSheetId = ut.NullSafeInteger(Session["TSID"]);
        userAct.trackType = ddlTrackingType.SelectedValue;
        userAct.userId = ut.NullSafeInteger(Session["UserID"]);
        userAct.timeDiff = ut.NullSafeDouble(timeDiff.Replace(':', '.'));
        return xms.addTimeSheet(userAct);
        //Save timesheet
    }

    private void ManageFieldsOnStart()
    {
        btnStartTask.Visible = false;
        btnEndTask.Visible = true;
        ddlJobName.Enabled = false;
        ddlTaskName.Enabled = false;
        ddlTrackingType.Enabled = false;
        dvAutoNotes.Style["display"] = "block";
        lblEndTime.Text = "00:00";
        hdnEndTaskTime.Value = string.Empty;

        //Display hours job hours and hours worked 
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 
    }

    private void ManageFieldsOnEnd()
    {
        btnStartTask.Visible = true;
        btnEndTask.Visible = false;
        ddlTaskName.Enabled = true;
        ddlJobName.Enabled = true;
        ddlTrackingType.Enabled = true;
        dvAutoNotes.Style["display"] = "none";
        Session.Remove("TSID");

        //Display total duration between start and end times
        TimeSpan duration = DateTime.Parse(lblEndTime.Text).Subtract(DateTime.Parse(lblStartTime.Text));
        lblDuration.Text = duration.ToString();//.Substring(0, duration.ToString().Length - 3);
        //Display total duration between start and end times

        //Display hours job hours and hours worked 
        Session.Remove("TSJobsList");
        DataTable dt = GetJobData();
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 
    }

    protected void timer1_tick(object sender, EventArgs e)
    {
        //timer for duration
        if (Session["TS"] != null)
        {
            //string str = DateTime.Now.Subtract(Convert.ToDateTime(Session["timeout1"].ToString())).ToString();
            
            ScriptManager.RegisterStartupScript(this, this.GetType(), "confirm", "getLocalLongTimeForTimer();", true);
            
            string str = Convert.ToDateTime(hdnCurrentTimeForTimerTick.Value).Subtract(Convert.ToDateTime(Session["timeout1"].ToString())).ToString();
            lblDuration.Text = str.Substring(0, str.LastIndexOf('.'));
        }
        //timer for duration
    }

    #endregion

    #region Manual Week Wise Tracking

    private void BindYears()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Year");
        for (int i = -1; i < 2; i++)
        {
            dr = dt.NewRow();
            dr["Year"] = DateTime.Now.AddYears(i).Year;
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        DataView dv = dt.DefaultView;
        dv.Sort = "Year ASC";
        ddlYear.DataSource = dv;
        ddlYear.DataTextField = "Year";
        ddlYear.DataValueField = "Year";
        ddlYear.DataBind();
        ddlYear.SelectedValue = DateTime.Now.Year.ToString();
    }

    private void LoadWeeklyTimeSheetData()
    {
        DisplayManualTSFields(true);
        HideFieldsByJobID();
        if (ddlJobName.SelectedValue != "0")
        {
            DataTable dt = GetTimeSheetData(ddlStartDate.SelectedValue);
            if (dt.Rows.Count > 0)
            {
                if (dt.Rows[0]["weeklyTimeSheetId"].ToString() != "0")
                {
                    hdnStatusID.Value = dt.Rows[0]["statusId"].ToString();
                    hdnTimesheetID.Value = dt.Rows[0]["weeklyTimeSheetId"].ToString();
                    foreach (GridViewRow row in gvTimeTrack.Rows)
                    {
                        HiddenField hdnTaskID = (HiddenField)row.FindControl("hdnTaskID");
                        TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
                        TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
                        TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
                        TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
                        TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
                        TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
                        TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");
                        Label lblTotalTime = (Label)row.FindControl("lblTotalTime");

                        TextBox txtMondayNotes = (TextBox)row.FindControl("txtMondayNotes");
                        TextBox txtTuesdayNotes = (TextBox)row.FindControl("txtTuesdayNotes");
                        TextBox txtWednesdayNotes = (TextBox)row.FindControl("txtWednesdayNotes");
                        TextBox txtThursdayNotes = (TextBox)row.FindControl("txtThursdayNotes");
                        TextBox txtFridayNotes = (TextBox)row.FindControl("txtFridayNotes");
                        TextBox txtSaturdayNotes = (TextBox)row.FindControl("txtSaturdayNotes");
                        TextBox txtSundayNotes = (TextBox)row.FindControl("txtSundayNotes");

                        DataView dv = new DataView(dt, "taskID = " + hdnTaskID.Value, "TaskID", DataViewRowState.CurrentRows);
                        if (dv.Count > 0)
                        {
                            //Fill duration in each day
                            txtMonday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day1"].ToString());
                            txtTuesday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day2"].ToString());
                            txtWednesday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day3"].ToString());
                            txtThursday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day4"].ToString());
                            txtFriday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day5"].ToString());
                            txtSaturday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day6"].ToString());
                            txtSunday.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["day7"].ToString());
                            lblTotalTime.Text = GetTimeFormattedData(dv.ToTable().Rows[0]["weekTotalHrs"].ToString());

                            //Fill notes in each day(if exists)
                            txtMondayNotes.Text = dv.ToTable().Rows[0]["notes1"].ToString();
                            txtTuesdayNotes.Text = dv.ToTable().Rows[0]["notes2"].ToString();
                            txtWednesdayNotes.Text = dv.ToTable().Rows[0]["notes3"].ToString();
                            txtThursdayNotes.Text = dv.ToTable().Rows[0]["notes4"].ToString();
                            txtFridayNotes.Text = dv.ToTable().Rows[0]["notes5"].ToString();
                            txtSaturdayNotes.Text = dv.ToTable().Rows[0]["notes6"].ToString();
                            txtSundayNotes.Text = dv.ToTable().Rows[0]["notes7"].ToString();
                        }
                    }
                    //Display notes icons
                    DisplayNotes();

                    //Mark fields readonly depending on the status of the timesheet (Saved/Submitted)
                    if (dt.Rows[0]["StatusID"].ToString() == "1" || dt.Rows[0]["StatusID"].ToString() == "4")
                    {
                        MakeGridFieldsReadOnly(false);
                        btnSave.Visible = false;
                        btnSubmit.Visible = false;
                        DisplayStatus(dt.Rows[0]["StatusID"].ToString() == "1" ? "Orange" : "Green", dt.Rows[0]["Status"].ToString());
                    }
                    else
                    {
                        if (dt.Rows[0]["StatusID"].ToString() == "3")
                        {
                            dvComments.Style["display"] = "none";
                            DisplayStatus("Green", dt.Rows[0]["Status"].ToString());
                        }
                        else
                        {
                            dvComments.Style["display"] = "block";
                            DisplayStatus("Red", dt.Rows[0]["Status"].ToString());
                        }
                        btnSubmit.Visible = true;
                    }
                }
                //Display footer totals
                DisplayFooterTotals(dt);
                CheckTaskRunningOnCurrentDay();
            }
            else
            {
                hdnTimesheetID.Value = "0";
                hdnStatusID.Value = "3";
                btnSubmit.Visible = true;
                dvStComments.Style["display"] = "none";
                DisplayMessage("Green", string.Empty);
            }
            //Restrict user to modify data if the selected date is prior to 13 days (before last week)
            if (string.IsNullOrEmpty(hdnStatusID.Value) || hdnStatusID.Value == "3" || hdnStatusID.Value == "5")
                DisableFieldsofFutureDateInCurrentWeek();
            else
                DisplayMessage("Green", string.Empty);
            //Restrict user to modify data if the selected date is prior to 13 days (before last week)
        }
    }

    private DataTable GetTimeSheetData(string startDate)
    {
        string str = xms.getWeeklyTimeSheetDetails(ut.NullSafeInteger(Session["UserID"]), ut.NullSafeInteger(ddlJobName.SelectedValue), startDate);
        List<UserActivityVO> lst = ser.Deserialize<List<UserActivityVO>>(str);
        return Utility.ConvertToDataTable(lst);
    }

    private void DisplayStatus(string color, string sts)
    {
        dvStComments.Style["display"] = "block";
        lblStatus.Style["color"] = color;
        lblStatus.Text = sts;
    }

    private void DisplayFooterTotals(DataTable dt)
    {
        if (gvTimeTrack.Rows.Count > 0)
        {
            Label lblFTMonday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTMonday");
            Label lblFTTuesday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTTuesday");
            Label lblFTWednesday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTWednesday");
            Label lblFTThursday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTThursday");
            Label lblFTFriday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTFriday");
            Label lblFTSaturday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTSaturday");
            Label lblFTSunday = (Label)gvTimeTrack.FooterRow.FindControl("lblFTSunday");
            Label lblFTTotalHours = (Label)gvTimeTrack.FooterRow.FindControl("lblFTTotalHours");

            //Manipulate time data to calculate total time by column wise and display in grid footer
            double m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0, m6 = 0, m7 = 0, m8 = 0, h1 = 0, h2 = 0, h3 = 0, h4 = 0, h5 = 0, h6 = 0, h7 = 0, h8 = 0;
            foreach (GridViewRow row in gvTimeTrack.Rows)
            {
                TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
                TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
                TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
                TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
                TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
                TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");
                TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
                Label lblTotalTime = (Label)row.FindControl("lblTotalTime");

                if (!string.IsNullOrEmpty(txtMonday.Text))
                    m1 += (ut.NullSafeInteger(txtMonday.Text.Substring(0, txtMonday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtMonday.Text.Substring(txtMonday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtTuesday.Text))
                    m2 += (ut.NullSafeInteger(txtTuesday.Text.Substring(0, txtTuesday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtTuesday.Text.Substring(txtTuesday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtWednesday.Text))
                    m3 += (ut.NullSafeInteger(txtWednesday.Text.Substring(0, txtWednesday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtWednesday.Text.Substring(txtWednesday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtThursday.Text))
                    m4 += (ut.NullSafeInteger(txtThursday.Text.Substring(0, txtThursday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtThursday.Text.Substring(txtThursday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtFriday.Text))
                    m5 += (ut.NullSafeInteger(txtFriday.Text.Substring(0, txtFriday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtFriday.Text.Substring(txtFriday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtSaturday.Text))
                    m6 += (ut.NullSafeInteger(txtSaturday.Text.Substring(0, txtSaturday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtSaturday.Text.Substring(txtSaturday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(txtSunday.Text))
                    m7 += (ut.NullSafeInteger(txtSunday.Text.Substring(0, txtSunday.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(txtSunday.Text.Substring(txtSunday.Text.IndexOf(':') + 1));
                if (!string.IsNullOrEmpty(lblTotalTime.Text))
                    m8 += (ut.NullSafeInteger(lblTotalTime.Text.Substring(0, lblTotalTime.Text.IndexOf(':')))) * 60 + ut.NullSafeInteger(lblTotalTime.Text.Substring(lblTotalTime.Text.IndexOf(':') + 1));
            }

            h1 = Math.Floor(m1 / 60);
            h2 = Math.Floor(m2 / 60);
            h3 = Math.Floor(m3 / 60);
            h4 = Math.Floor(m4 / 60);
            h5 = Math.Floor(m5 / 60);
            h6 = Math.Floor(m6 / 60);
            h7 = Math.Floor(m7 / 60);
            h8 = Math.Floor(m8 / 60);
            //Manipulate time data to calculate total time by column wise and display in grid footer

            //Assign footer total to corresponding footer labels
            lblFTMonday.Text = h1.ToString() + ':' + ut.NullSafeInteger(m1 - (h1 * 60)).ToString("D2");
            lblFTTuesday.Text = h2.ToString() + ':' + ut.NullSafeInteger(m2 - (h2 * 60)).ToString("D2");
            lblFTWednesday.Text = h3.ToString() + ':' + ut.NullSafeInteger(m3 - (h3 * 60)).ToString("D2");
            lblFTThursday.Text = h4.ToString() + ':' + ut.NullSafeInteger(m4 - (h4 * 60)).ToString("D2");
            lblFTFriday.Text = h5.ToString() + ':' + ut.NullSafeInteger(m5 - (h5 * 60)).ToString("D2");
            lblFTSaturday.Text = h6.ToString() + ':' + ut.NullSafeInteger(m6 - (h6 * 60)).ToString("D2");
            lblFTSunday.Text = h7.ToString() + ':' + ut.NullSafeInteger(m7 - (h7 * 60)).ToString("D2");
            lblFTTotalHours.Text = h8.ToString() + ':' + ut.NullSafeInteger(m8 - (h8 * 60)).ToString("D2");
            //Assign footer total to corresponding footer labels

            //Get Total work hours in each day
            hdnTotalHrsWorkedOnMonday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY1HRS"].ToString()), GetTimeFormattedData(lblFTMonday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnTuesday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY2HRS"].ToString()), GetTimeFormattedData(lblFTTuesday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnWednesday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY3HRS"].ToString()), GetTimeFormattedData(lblFTWednesday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnThursday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY4HRS"].ToString()), GetTimeFormattedData(lblFTThursday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnFriday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY5HRS"].ToString()), GetTimeFormattedData(lblFTFriday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnSaturday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY6HRS"].ToString()), GetTimeFormattedData(lblFTSaturday.Text.Replace(':', '.')));
            hdnTotalHrsWorkedOnSunday.Value = GetTimeIntervalDifference(GetTimeFormattedData(dt.Rows[0]["TOTALDAY7HRS"].ToString()), GetTimeFormattedData(lblFTSunday.Text.Replace(':', '.')));
            //Get Total work hours in each day
        }
    }

    protected void ddlYear_SelectedIndexChanged(object sender, EventArgs e)
    {
        //Display hours job hours and hours worked 
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 

        ShowSelectedTrackType();
        Session.Remove("StartDates");
        LoadStartDates();
        BindWeekGrid();
        if (!ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
            LoadWeeklyTimeSheetData();
    }

    protected void ddlStartDate_SelectedIndexChanged(object sender, EventArgs e)
    {

        //Display hours job hours and hours worked 
        DataTable dt = (DataTable)Session["TSJobsList"];
        string expr = "jobId = '" + ddlJobName.SelectedValue + "'";
        DataView dv = new DataView(dt, expr, "JobName", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            GetJobHours(dv.ToTable());
        //Display hours job hours and hours worked 

        ShowSelectedTrackType();
        BindWeekGrid();
        if (!ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
            LoadWeeklyTimeSheetData();
    }

    private void BindWeekGrid()
    {
        DataTable dt = (DataTable)Session["TSGridData"];
        gvTimeTrack.DataSource = dt;
        gvTimeTrack.DataBind();
    }

    private void LoadStartDates()
    {
        DataTable dt = LoadWeekDays();

        DataView dv = new DataView(dt, "Monday <= #" + Convert.ToDateTime(GetWeekStartDate()) + "#", "Monday", DataViewRowState.CurrentRows);

        ddlStartDate.DataSource = dv;
        ddlStartDate.DataTextField = "Monday";
        ddlStartDate.DataValueField = "Monday";
        ddlStartDate.DataBind();
        if (ddlYear.SelectedValue == DateTime.Now.Year.ToString())
        {
            ddlStartDate.SelectedValue = GetWeekStartDate(DateTime.Now.ToString("MM/dd/yyyy"));
            ddlStartDate.SelectedIndex = ddlStartDate.Items.IndexOf(ddlStartDate.Items.FindByValue(GetWeekStartDate(DateTime.Now.ToString("MM/dd/yyyy"))));
        }
    }

    private DateTime GetWeekStartDate()
    {
        DateTime dt = DateTime.Now;
        int delta = DayOfWeek.Monday - dt.DayOfWeek;
        DateTime monday = dt.AddDays(delta);
        return monday;
    }

    DataTable LoadWeekDays()
    {
        DataTable dt = new DataTable();
        if (Session["StartDates"] == null)
        {
            string str = xms.getWeekDays(ut.NullSafeInteger(ddlYear.SelectedValue), ut.NullSafeInteger(Session["UserID"]));
            List<WeeksVO> lst = ser.Deserialize<List<WeeksVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["StartDates"] = dt;
        }
        else
            dt = (DataTable)Session["StartDates"];
        return dt;
    }

    protected void SaveWeekTimeSheet(object sender, EventArgs e)
    {
        hdnIsSaveTimeSheet.Value = "save";
        if (hdnIsDayWorkHoursExceeded.Value.ToLower() == "false")
        {
            DataTable dtCodes = (DataTable)Session["dsCodes"];
            string expr = "CodeID = 'STATUS' and CodeValue1 = " + hdnStatusID.Value;
            DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);

            SaveWeekTSDate(dv.ToTable().Rows[0]["Description"].ToString(), ut.NullSafeInteger(hdnStatusID.Value), ut.NullSafeInteger(hdnTimesheetID.Value));
        }
        else if (hdnIsDayWorkHoursExceeded.Value.ToLower() == "true")
        {
            lblConf.Text = "Maximum job hours exceeded. Are you sure you want to continue?";
            popMinTaskTimeVal.Show();
        }
    }

    protected void SubmitTimeSheet(object sender, EventArgs e)
    {
        hdnIsSaveTimeSheet.Value = "submit";
        if (hdnIsDayWorkHoursExceeded.Value.ToLower() == "false" || string.IsNullOrEmpty(hdnIsDayWorkHoursExceeded.Value))
        {
            if (hdnStatusID.Value != "5")
            {
                DataTable dtCodes = (DataTable)Session["dsCodes"];
                string expr = "CodeID = 'STATUS' and CodeValue1 = 1";
                DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);

                SaveWeekTSDate(dv.ToTable().Rows[0]["Description"].ToString(), 1, ut.NullSafeInteger(hdnTimesheetID.Value));
            }
            else
            {
                btnCommentsSave.Attributes.Add("onclick", "javascript: return validateComments('" + txtPopComments.ClientID + "')");
                dvWidgetComments.InnerHtml = ShowPreviousComments();
                btnCommentsSave.Visible = true;
                txtPopComments.Visible = true;
                btnCommentsClose.Visible = true;
                txtPopComments.Focus();
                popup_Comments.Show();
            }
        }
        else if (hdnIsDayWorkHoursExceeded.Value.ToLower() == "true")
        {
            lblConf.Text = "Maximum job hours exceeded. Are you sure you want to continue?";
            popMinTaskTimeVal.Show();
        }
    }

    private void SaveWeekTSDate(string sts, int stsId, int timeSheetID)
    {
        bool isUpdate = false;
        string mFlag = "0";
        foreach (GridViewRow row in gvTimeTrack.Rows)
        {
            HiddenField hdnTaskID = (HiddenField)row.FindControl("hdnTaskID");
            TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
            TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
            TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
            TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
            TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
            TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
            TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");

            if (txtMonday.Text != string.Empty || txtTuesday.Text != string.Empty || txtWednesday.Text != string.Empty || txtThursday.Text != string.Empty || txtFriday.Text != string.Empty ||
                txtSaturday.Text != string.Empty || txtSunday.Text != string.Empty)
            {
                TextBox txtMondayNotes = (TextBox)row.FindControl("txtMondayNotes");
                TextBox txtTuesdayNotes = (TextBox)row.FindControl("txtTuesdayNotes");
                TextBox txtWednesdayNotes = (TextBox)row.FindControl("txtWednesdayNotes");
                TextBox txtThursdayNotes = (TextBox)row.FindControl("txtThursdayNotes");
                TextBox txtFridayNotes = (TextBox)row.FindControl("txtFridayNotes");
                TextBox txtSaturdayNotes = (TextBox)row.FindControl("txtSaturdayNotes");
                TextBox txtSundayNotes = (TextBox)row.FindControl("txtSundayNotes");

                day1 += (txtMonday.Text == string.Empty ? "00.00" : txtMonday.Text.Replace(':', '.')) + appString;
                day2 += (txtTuesday.Text == string.Empty ? "00.00" : txtTuesday.Text.Replace(':', '.')) + appString;
                day3 += (txtWednesday.Text == string.Empty ? "00.00" : txtWednesday.Text.Replace(':', '.')) + appString;
                day4 += (txtThursday.Text == string.Empty ? "00.00" : txtThursday.Text.Replace(':', '.')) + appString;
                day5 += (txtFriday.Text == string.Empty ? "00.00" : txtFriday.Text.Replace(':', '.')) + appString;
                day6 += (txtSaturday.Text == string.Empty ? "00.00" : txtSaturday.Text.Replace(':', '.')) + appString;
                day7 += (txtSunday.Text == string.Empty ? "00.00" : txtSunday.Text.Replace(':', '.')) + appString;
                detailFlag += "1" + appString;
                jobID += ddlJobName.SelectedValue + appString;
                lstUpdSource += "Web" + appString;
                if (mFlag == "0")
                {
                    masterFlag += "1" + appString;
                    mFlag = "1";
                }
                else
                    masterFlag += "0" + appString;
                notes1 += (txtMondayNotes.Text == string.Empty ? " " : txtMondayNotes.Text) + appString;
                notes2 += (txtTuesdayNotes.Text == string.Empty ? " " : txtTuesdayNotes.Text) + appString;
                notes3 += (txtWednesdayNotes.Text == string.Empty ? " " : txtWednesdayNotes.Text) + appString;
                notes4 += (txtThursdayNotes.Text == string.Empty ? " " : txtThursdayNotes.Text) + appString;
                notes5 += (txtFridayNotes.Text == string.Empty ? " " : txtFridayNotes.Text) + appString;
                notes6 += (txtSaturdayNotes.Text == string.Empty ? " " : txtSaturdayNotes.Text) + appString;
                notes7 += (txtSundayNotes.Text == string.Empty ? " " : txtSundayNotes.Text) + appString;
                startDate += ddlStartDate.SelectedValue + appString;
                status += sts + appString;
                statusID += stsId.ToString() + appString;
                taskID += hdnTaskID.Value + appString;
                tsID += "0" + appString;
                userID += ut.NullSafeInteger(Session["UserID"]) + appString;
                weeklyTimeSheetId += timeSheetID.ToString() + appString;
                isUpdate = true;
            }
        }

        if (isUpdate)
        {
            UserActivityMulVO userAct = new UserActivityMulVO();
            userAct.day1 = day1.Substring(0, day1.Length - 3);
            userAct.day2 = day2.Substring(0, day2.Length - 3);
            userAct.day3 = day3.Substring(0, day3.Length - 3);
            userAct.day4 = day4.Substring(0, day4.Length - 3);
            userAct.day5 = day5.Substring(0, day5.Length - 3);
            userAct.day6 = day6.Substring(0, day6.Length - 3);
            userAct.day7 = day7.Substring(0, day7.Length - 3);
            userAct.detailFlag = detailFlag.Substring(0, detailFlag.Length - 3);
            userAct.jobId = jobID.Substring(0, jobID.Length - 3);
            userAct.lastUpdSource = lstUpdSource.Substring(0, lstUpdSource.Length - 3);
            userAct.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
            userAct.notes1 = notes1.Substring(0, notes1.Length - 3);
            userAct.notes2 = notes2.Substring(0, notes2.Length - 3);
            userAct.notes3 = notes3.Substring(0, notes3.Length - 3);
            userAct.notes4 = notes4.Substring(0, notes4.Length - 3);
            userAct.notes5 = notes5.Substring(0, notes5.Length - 3);
            userAct.notes6 = notes6.Substring(0, notes6.Length - 3);
            userAct.notes7 = notes7.Substring(0, notes7.Length - 3);
            userAct.startDate = startDate.Substring(0, startDate.Length - 3);
            userAct.status = status.Substring(0, status.Length - 3);
            userAct.statusId = statusID.Substring(0, statusID.Length - 3);
            userAct.taskId = taskID.Substring(0, taskID.Length - 3);
            userAct.timeSheetId = tsID.Substring(0, tsID.Length - 3);
            userAct.userId = userID.Substring(0, userID.Length - 3);
            userAct.weeklyTimeSheetId = weeklyTimeSheetId.Substring(0, weeklyTimeSheetId.Length - 3);
            string retStr = xms.addTimeSheetMul(userAct);
            if (retStr.ToLower().Contains("succes") || retStr.ToLower().Contains("saved") || retStr.ToLower().Contains("updated"))
            {
                string[] msg = retStr.Split('-');
                hdnTimesheetID.Value = msg[0];
                DisplayMessage("Green", msg[1]);
                hdnStatusID.Value = stsId.ToString();
                Session.Remove("TSJobsList");
                GetJobData();
                if (stsId.ToString() == "3" || stsId.ToString() == "5")
                {
                    MakeGridFieldsReadOnly(true);
                    DisplayNotes();
                    btnSave.Visible = true;
                    btnSubmit.Visible = true;
                    if (stsId.ToString() == "3")
                        DisplayStatus("Green", "Saved");
                    else
                        DisplayStatus("Red", "Rejected By Manager");
                }
                else if (stsId.ToString() == "1")
                {
                    MakeGridFieldsReadOnly(false);
                    DisplayNotes();
                    btnSave.Visible = false;
                    btnSubmit.Visible = false;
                    DisplayStatus("Orange", "Manager Review");
                }
            }
            else if (retStr.ToLower().Contains("fail"))
            {
                DisplayMessage("Red", retStr);
                DisplayNotes();
            }
            else
            {
                DisplayMessage("Red", "An error occurred while saving the details. Please try again.");
                DisplayNotes();
            }
        }
    }

    #endregion

    #region Comments

    protected void Comments(object sender, EventArgs e)
    {
        dvErrorc.InnerHtml = string.Empty;
        txtPopComments.Visible = false;
        btnCommentsSave.Visible = false;
        dvWidgetComments.Style["display"] = "block";
        dvWidgetComments.InnerHtml = ShowPreviousComments();
        popup_Comments.Show();
    }

    private string ShowPreviousComments()
    {
        var strCmnts = xms.getTSComments(ut.NullSafeInteger(hdnTimesheetID.Value), ut.NullSafeInteger(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataTable dtComments = Utility.ConvertToDataTable(lstCmnts);
        string str = string.Empty;
        if (dtComments.Rows.Count > 0)
        {
            str = "<table width='100%'>";
            for (int i = 0; i < dtComments.Rows.Count; i++)
                str += "<tr><td>" + dtComments.Rows[i]["Comments"] + "</td></tr><tr><td>&nbsp;</td></tr><tr><td style='color:Black;'><small><i>by " + dtComments.Rows[i]["Email"] + " on " + dtComments.Rows[i]["AddedOn"] + "</i></small></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
            str += "</table>";
        }
        else
            str = "No comments to display";
        return str;
    }

    protected void btnCommentsSave_Click(object sender, EventArgs e)
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'STATUS' and CodeValue1 = 1";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        SaveWeekTSDate(dv.ToTable().Rows[0]["Description"].ToString(), 1, ut.NullSafeInteger(hdnTimesheetID.Value));
    }

    #endregion

    #region Misc

    private void GetMaxJobHours()
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];

        //filter for CodeID = 'MAXJOBHRS'
        string expr = "CodeID = 'MAXJOBHRS' and CodeKey = 'MAXHRS'";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        hdnMaxJobHrs.Value = GetTimeFormattedData(dv.ToTable().Rows[0]["CodeValue1"].ToString());
        //filter for CodeID = 'MAXJOBHRS'

        //filter for CodeID = 'MINTASKHRS'
        string expr1 = "CodeID = 'MINTASKHRS' and CodeKey = 'MINTIME'";
        DataView dv1 = new DataView(dtCodes, expr1, "CodeKey", DataViewRowState.CurrentRows);
        hdnMinTaskTime.Value = GetTimeFormattedData("0.15");
        //filter for CodeID = 'MINTASKHRS'
    }

    private void DisplayManualTSFields(bool visible)
    {
        if (visible)
        {
            btnSubmit.Visible = true;
            dvStComments.Style["display"] = "block";
        }
        else
        {
            btnSubmit.Visible = false;
            dvStComments.Style["display"] = "none";
        }
    }

    private void DisplayMessage(string color, string message)
    {
        dvErr.Style["display"] = "block";
        dvErr.Style["color"] = color;
        dvErr.InnerHtml = message;
    }

    private void DisplayNotes()
    {
        foreach (GridViewRow row in gvTimeTrack.Rows)
        {
            TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
            TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
            TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
            TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
            TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
            TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
            TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");

            TextBox txtMondayNotes = (TextBox)row.FindControl("txtMondayNotes");
            TextBox txtTuesdayNotes = (TextBox)row.FindControl("txtTuesdayNotes");
            TextBox txtWednesdayNotes = (TextBox)row.FindControl("txtWednesdayNotes");
            TextBox txtThursdayNotes = (TextBox)row.FindControl("txtThursdayNotes");
            TextBox txtFridayNotes = (TextBox)row.FindControl("txtFridayNotes");
            TextBox txtSaturdayNotes = (TextBox)row.FindControl("txtSaturdayNotes");
            TextBox txtSundayNotes = (TextBox)row.FindControl("txtSundayNotes");

            Image imgMondayNotes = (Image)row.FindControl("imgMondayNotes");
            Image imgTuesdayNotes = (Image)row.FindControl("imgTuesdayNotes");
            Image imgWednesdayNotes = (Image)row.FindControl("imgWednesdayNotes");
            Image imgThursdayNotes = (Image)row.FindControl("imgThursdayNotes");
            Image imgFridayNotes = (Image)row.FindControl("imgFridayNotes");
            Image imgSaturdayNotes = (Image)row.FindControl("imgSaturdayNotes");
            Image imgSundayNotes = (Image)row.FindControl("imgSundayNotes");

            //if (hdnStatusID.Value == "2" || hdnStatusID.Value == "4")
            //{
            if (txtMonday.Text != string.Empty && txtMonday.Text != "00:00" && txtMonday.Text != "0" && txtMondayNotes.Text != string.Empty && txtMondayNotes.Text != " ")
                imgMondayNotes.Style["visibility"] = "visible";
            if (txtTuesday.Text != string.Empty && txtTuesday.Text != "00:00" && txtTuesday.Text != "0" && txtTuesdayNotes.Text != string.Empty && txtTuesdayNotes.Text != " ")
                imgTuesdayNotes.Style["visibility"] = "visible";
            if (txtWednesday.Text != string.Empty && txtWednesday.Text != "00:00" && txtWednesday.Text != "0" && txtWednesdayNotes.Text != string.Empty && txtWednesdayNotes.Text != " ")
                imgWednesdayNotes.Style["visibility"] = "visible";
            if (txtThursday.Text != string.Empty && txtThursday.Text != "00:00" && txtThursday.Text != "0" && txtThursdayNotes.Text != string.Empty && txtThursdayNotes.Text != " ")
                imgThursdayNotes.Style["visibility"] = "visible";
            if (txtFriday.Text != string.Empty && txtFriday.Text != "00:00" && txtFriday.Text != "0" && txtFridayNotes.Text != string.Empty && txtFridayNotes.Text != " ")
                imgFridayNotes.Style["visibility"] = "visible";
            if (txtSaturday.Text != string.Empty && txtSaturday.Text != "00:00" && txtSaturday.Text != "0" && txtSaturdayNotes.Text != string.Empty && txtSaturdayNotes.Text != " ")
                imgSaturdayNotes.Style["visibility"] = "visible";
            if (txtSunday.Text != string.Empty && txtSunday.Text != "00:00" && txtSunday.Text != "0" && txtSundayNotes.Text != string.Empty && txtSundayNotes.Text != " ")
                imgSundayNotes.Style["visibility"] = "visible";
            //}
            //else if (hdnStatusID.Value == "3" || hdnStatusID.Value == "5")
            //{
            //    if (txtMonday.Text != string.Empty && txtMonday.Text != "00:00" && txtMonday.Text != "0" && txtMonday.Text != "0:00")
            //        imgMondayNotes.Style["visibility"] = "visible";
            //    if (txtTuesday.Text != string.Empty && txtTuesday.Text != "00:00" && txtTuesday.Text != "0" && txtTuesday.Text != "0:00")
            //        imgTuesdayNotes.Style["visibility"] = "visible";
            //    if (txtWednesday.Text != string.Empty && txtWednesday.Text != "00:00" && txtWednesday.Text != "0" && txtWednesday.Text != "0:00")
            //        imgWednesdayNotes.Style["visibility"] = "visible";
            //    if (txtThursday.Text != string.Empty && txtThursday.Text != "00:00" && txtThursday.Text != "0" && txtThursday.Text != "0:00")
            //        imgThursdayNotes.Style["visibility"] = "visible";
            //    if (txtFriday.Text != string.Empty && txtFriday.Text != "00:00" && txtFriday.Text != "0" && txtFriday.Text != "0:00")
            //        imgFridayNotes.Style["visibility"] = "visible";
            //    if (txtSaturday.Text != string.Empty && txtSaturday.Text != "00:00" && txtSaturday.Text != "0" && txtSaturday.Text != "0:00")
            //        imgSaturdayNotes.Style["visibility"] = "visible";
            //    if (txtSunday.Text != string.Empty && txtSunday.Text != "00:00" && txtSunday.Text != "0" && txtSunday.Text != "0:00")
            //        imgSundayNotes.Style["visibility"] = "visible";
            //}
            //else
            //{
            //    imgMondayNotes.Style["visibility"] = "visible";
            //    imgTuesdayNotes.Style["visibility"] = "visible";
            //    imgWednesdayNotes.Style["visibility"] = "visible";
            //    imgThursdayNotes.Style["visibility"] = "visible";
            //    imgFridayNotes.Style["visibility"] = "visible";
            //    imgSaturdayNotes.Style["visibility"] = "visible";
            //    imgSundayNotes.Style["visibility"] = "visible";
            //}
        }
    }

    private void ClearGridFields()
    {
        foreach (GridViewRow row in gvTimeTrack.Rows)
        {
            TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
            TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
            TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
            TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
            TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
            TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
            TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");

            TextBox txtMondayNotes = (TextBox)row.FindControl("txtMondayNotes");
            TextBox txtTuesdayNotes = (TextBox)row.FindControl("txtTuesdayNotes");
            TextBox txtWednesdayNotes = (TextBox)row.FindControl("txtWednesdayNotes");
            TextBox txtThursdayNotes = (TextBox)row.FindControl("txtThursdayNotes");
            TextBox txtFridayNotes = (TextBox)row.FindControl("txtFridayNotes");
            TextBox txtSaturdayNotes = (TextBox)row.FindControl("txtSaturdayNotes");
            TextBox txtSundayNotes = (TextBox)row.FindControl("txtSundayNotes");

            Image imgMondayNotes = (Image)row.FindControl("imgMondayNotes");
            Image imgTuesdayNotes = (Image)row.FindControl("imgTuesdayNotes");
            Image imgWednesdayNotes = (Image)row.FindControl("imgWednesdayNotes");
            Image imgThursdayNotes = (Image)row.FindControl("imgThursdayNotes");
            Image imgFridayNotes = (Image)row.FindControl("imgFridayNotes");
            Image imgSaturdayNotes = (Image)row.FindControl("imgSaturdayNotes");
            Image imgSundayNotes = (Image)row.FindControl("imgSundayNotes");

            //make input fields in the gridview empty
            txtSunday.Text = txtMonday.Text = txtTuesday.Text = txtWednesday.Text = txtThursday.Text = txtFriday.Text = txtSaturday.Text =
                txtSundayNotes.Text = txtMondayNotes.Text = txtTuesdayNotes.Text = txtWednesdayNotes.Text = txtThursdayNotes.Text = txtFridayNotes.Text =
                txtSaturdayNotes.Text = string.Empty;

            //hide notes icons
            imgMondayNotes.Style["visibility"] = "hidden";
            imgTuesdayNotes.Style["visibility"] = "hidden";
            imgWednesdayNotes.Style["visibility"] = "hidden";
            imgThursdayNotes.Style["visibility"] = "hidden";
            imgFridayNotes.Style["visibility"] = "hidden";
            imgSaturdayNotes.Style["visibility"] = "hidden";
            imgSundayNotes.Style["visibility"] = "hidden";

        }
    }

    private void ResetTimesheet()
    {
        txtAutoTSNotes.Text = dvErr.InnerHtml = string.Empty;
        lblStartTime.Text = lblEndTime.Text = "00:00";
        dvErr.Style["display"] = dvAutoNotes.Style["display"] = "none";
    }

    private void MakeGridFieldsReadOnly(bool enable)
    {
        foreach (GridViewRow row in gvTimeTrack.Rows)
        {
            TextBox txtSunday = (TextBox)row.FindControl("txtSunday");
            TextBox txtMonday = (TextBox)row.FindControl("txtMonday");
            TextBox txtTuesday = (TextBox)row.FindControl("txtTuesday");
            TextBox txtWednesday = (TextBox)row.FindControl("txtWednesday");
            TextBox txtThursday = (TextBox)row.FindControl("txtThursday");
            TextBox txtFriday = (TextBox)row.FindControl("txtFriday");
            TextBox txtSaturday = (TextBox)row.FindControl("txtSaturday");
            TextBox txtSundayNotes = (TextBox)row.FindControl("txtSundayNotes");
            TextBox txtMondayNotes = (TextBox)row.FindControl("txtMondayNotes");
            TextBox txtTuesdayNotes = (TextBox)row.FindControl("txtTuesdayNotes");
            TextBox txtWednesdayNotes = (TextBox)row.FindControl("txtWednesdayNotes");
            TextBox txtThursdayNotes = (TextBox)row.FindControl("txtThursdayNotes");
            TextBox txtFridayNotes = (TextBox)row.FindControl("txtFridayNotes");
            TextBox txtSaturdayNotes = (TextBox)row.FindControl("txtSaturdayNotes");

            //Make input fields in the Weekly Timesheet gridview enable/disable depending on status of timesheet fetched
            txtSunday.Enabled = txtMonday.Enabled = txtTuesday.Enabled = txtWednesday.Enabled = txtThursday.Enabled = txtFriday.Enabled = txtSaturday.Enabled =
                txtSundayNotes.Enabled = txtMondayNotes.Enabled = txtTuesdayNotes.Enabled = txtWednesdayNotes.Enabled = txtThursdayNotes.Enabled = txtFridayNotes.Enabled =
                txtSaturdayNotes.Enabled = enable;
        }
    }

    public string GetTimeFormattedData(string value)
    {
        string retStr = string.Empty;
        if (value.Length <= 2)
        {
            if (value.Contains('.'))
            {
                string[] arr = value.Split('.');
                if (arr[1].Length == 1)
                    retStr = "00" + value.Replace('.', ':') + "0";
                else
                    retStr = "00" + value.Replace('.', ':');
            }
            else
                retStr = ((value == string.Empty || value == " " || value == "0") ? "00" : value) + ":00";
        }
        else if (value.Length > 2)
        {
            if (!value.Contains('.'))
                value = value + ".00";
            string[] arr = value.Split('.');
            if (arr[1].Length == 1)
                retStr = value.Replace('.', ':') + "0";
            else
                retStr = value.Replace('.', ':');
        }
        return retStr;
    }

    private bool MakeOldAndFutureDataReadOnly(string selectedDate)
    {
        if ((DateTime.Now - Convert.ToDateTime(selectedDate)).TotalDays > 13)
        {
            int count = 0;
            foreach (GridViewRow row in gvTimeTrack.Rows)
            {
                if (!string.IsNullOrEmpty(((TextBox)row.FindControl("txtMonday")).Text) || !string.IsNullOrEmpty(((TextBox)row.FindControl("txtTuesday")).Text) ||
                    !string.IsNullOrEmpty(((TextBox)row.FindControl("txtWednesday")).Text) || !string.IsNullOrEmpty(((TextBox)row.FindControl("txtThursday")).Text) ||
                    !string.IsNullOrEmpty(((TextBox)row.FindControl("txtFriday")).Text) || !string.IsNullOrEmpty(((TextBox)row.FindControl("txtSaturday")).Text) ||
                    !string.IsNullOrEmpty(((TextBox)row.FindControl("txtSunday")).Text))
                    count++;
            }
            if (count == 0)
            {
                dvStComments.Style["display"] = "none";
                btnSubmit.Visible = false;
                DisplayMessage("Green", string.Empty);
                DisplayMessage("Red", "Timesheet cannot be updated for date(s) prior to last week.");
            }
            return false;
        }
        else if (DateTime.Now < Convert.ToDateTime(selectedDate))
        {
            dvStComments.Style["display"] = "none";
            btnSubmit.Visible = false;
            DisplayMessage("Red", "Timesheet cannot be updated for future date(s).");
            return false;
        }
        else
        {
            DisplayMessage("Green", string.Empty);
            return true;
        }
    }

    private void MakeAutoFieldsReadOnly(bool visible, string status)
    {
        if (visible)
        {
            DisplayMessage("Red", status);
            dvDayWise.Style["display"] = "none";
        }
        else
        {
            DisplayMessage("Green", string.Empty);
            dvDayWise.Style["display"] = "block";
        }
    }

    private string GetWeekStartDate(string day)
    {
        DateTime input = Convert.ToDateTime(day);
        int delta = DayOfWeek.Monday - input.DayOfWeek;
        return (input.AddDays(delta)).ToString("MM/dd/yyyy");
    }

    private void HideFieldsByJobID()
    {
        if (ddlJobName.SelectedValue == "0")
        {
            dvStComments.Style["display"] = "none";
            btnSave.Visible = btnSubmit.Visible = false;
        }
        else
        {
            dvStComments.Style["display"] = "block";
            btnSave.Visible = btnSubmit.Visible = true;
        }
    }

    private int CompareTwoTimeDurations(string timeDur1, string timeDur2, char seperator)
    {
        //Get integer array from time difference and minimum task time
        string[] arrTimeDur1 = timeDur1.Split(seperator);
        string[] arrTimeDur2 = timeDur2.Split(seperator);
        //Get integer array from time difference and minimum task time
        int count = 0;

        //compare time difference and minimum task time
        if (ut.NullSafeInteger(arrTimeDur2[0]) < ut.NullSafeInteger(arrTimeDur1[0]))
            count++;
        else if (ut.NullSafeInteger(arrTimeDur2[0]) == ut.NullSafeInteger(arrTimeDur1[0]))
            if (ut.NullSafeInteger(arrTimeDur2[1]) < ut.NullSafeInteger(arrTimeDur1[1]))
                count++;
        //compare time difference and minimum task time
        return count;//if count > 0 timeDur2 is lessthan timeDur1
    }

    private int GetCurrentDayNumberInWeek()
    {
        return (int)DateTime.Now.DayOfWeek;
    }

    private string GetJobDurationInADay(DataTable dt)
    {
        double m = 0, h = 0;
        int dayNum = GetCurrentDayNumberInWeek();
        for (int i = 0; i < dt.Rows.Count; i++)
            m += ut.NullSafeInteger(GetTimeFormattedData(dt.Rows[i]["day" + dayNum].ToString()).Substring(0, GetTimeFormattedData(dt.Rows[i]["day" + dayNum].ToString()).IndexOf(':'))) * 60 +
                ut.NullSafeInteger(GetTimeFormattedData(dt.Rows[i]["day" + dayNum].ToString()).Substring(GetTimeFormattedData(dt.Rows[i]["day" + dayNum].ToString()).IndexOf(':') + 1));
        h = Math.Floor(m / 60);
        return GetTimeFormattedData(h.ToString() + '.' + (m - (h * 60)));
    }

    private void DisableFieldsofFutureDateInCurrentWeek()
    {
        string startDate = GetWeekStartDate(DateTime.Today.ToString("MM/dd/yyyy"));
        //check if current dates week start date is equal to selected start date
        if (Convert.ToDateTime(startDate).ToString("MM/dd/yyyy") == ddlStartDate.SelectedValue)
        {
            int dayNum = GetCurrentDayNumberInWeek();
            //Disable future date fields in current week
            foreach (GridViewRow row in gvTimeTrack.Rows)
                for (int i = 0; i < gvTimeTrack.Columns.Count; i++)
                    if (i >= dayNum + 2)
                        foreach (Control c in row.Cells[i].Controls)
                            if (c is TextBox)
                                ((TextBox)c).Enabled = false;
            //Disable future date fields in current week
        }
        else if (MakeOldAndFutureDataReadOnly(ddlStartDate.SelectedValue))//disable grid fields if selected start date is past or future
        {
            btnSave.Visible = true;
            MakeGridFieldsReadOnly(true);
        }
        else
        {
            btnSave.Visible = false;
            MakeGridFieldsReadOnly(false);
        }
    }

    private void DisplayAlert(string visible, string displayText)
    {
        aid.Style["display"] = visible;
        aid.Attributes.Add("title", displayText);
    }

    private string GetTimeIntervalDifference(string time1, string time2)
    {
        int m1 = ((ut.NullSafeInteger(time1.Substring(0, time1.IndexOf(':'))) * 60) + ut.NullSafeInteger(time1.Substring(time1.IndexOf(':') + 1)));
        int m2 = ((ut.NullSafeInteger(time2.Substring(0, time2.IndexOf(':'))) * 60) + ut.NullSafeInteger(time2.Substring(time2.IndexOf(':') + 1)));

        int m = m1 - m2;
        int hours = (m - m % 60) / 60;
        int min = m - hours * 60;
        string timeDiff = hours.ToString("00") + ":" + ((min < 0 ? min * -1 : min) == 0 ? "00" : (min < 0 ? min * -1 : min).ToString("D2"));
        //return (min < 0 ? ("-" + timeDiff) : timeDiff);
        return timeDiff;
    }

    private void CheckTaskRunningOnCurrentDay()
    {
        string str = xms.getTimeSheet(ut.NullSafeInteger(Session["UserID"]), DateTime.Now.ToShortDateString());
        List<UserActivityVO> lst = ser.Deserialize<List<UserActivityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        //Find pending tasks to be ended

        DataView dv = new DataView(dt, "EndTime = '' and StartTime <> ''", "TaskDate", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            int dayNum = GetCurrentDayNumberInWeek();
            //Disable future date fields in current week
            foreach (GridViewRow row in gvTimeTrack.Rows)
            {
                HiddenField hdnTaskID = (HiddenField)row.FindControl("hdnTaskID");
                if (hdnTaskID.Value == dv.ToTable().Rows[0]["taskID"].ToString())
                {
                    for (int i = 0; i < gvTimeTrack.Columns.Count; i++)
                    {
                        if (i == (dayNum + 1))
                        {
                            foreach (Control c in row.Cells[i].Controls)
                            {
                                if (c is TextBox)
                                {
                                    ((TextBox)c).Enabled = false;
                                    ((TextBox)c).ToolTip = "Already this task is running.";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    #endregion
}