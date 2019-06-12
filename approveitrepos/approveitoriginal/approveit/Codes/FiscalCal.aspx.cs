using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Text;
using System.Data.OleDb;
using System.IO;

public partial class Codes_FiscalCal : System.Web.UI.Page
{
    #region Private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;
    string newPath = ("ERTemp");

    #endregion

    #region Fiscal Calendar

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            if (!IsPostBack)
            {
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
        //lblOrgID.Text = Session["SOrgName"].ToString().ToUpper();
        GetCompCodes();
        BindYears();
        GetData();
    }

    private void GetCompCodes()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string strCmpCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> lstCmpCodes = ser.Deserialize<List<CompanyCodesVO>>(strCmpCodes);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(lstCmpCodes));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    private void BindYears()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Year");
        int yr = DateTime.Now.AddYears(0).Year;
        for (int i = yr; i <= (yr + 10); i++)
        {
            dr = dt.NewRow();
            dr["Year"] = i;
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        ddlYear.DataSource = dt;
        ddlYear.DataTextField = "Year";
        ddlYear.DataValueField = "Year";
        ddlYear.DataBind();
    }

    private void GetData()
    {
        string str = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(ddlYear.SelectedValue));
        List<FiscalCalendarVO> lst = ser.Deserialize<List<FiscalCalendarVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        gvFC.DataSource = dt;
        gvFC.DataBind();
        Session["FiscCal"] = dt;
        if (dt.Rows.Count > 0)
        {
            btnModCal.Visible = true;
            btnAdd.Visible = false;
            btnCopyFromComp.Visible = false;
            btnCopyFromYear.Visible = false;
            btnUploadCal.Visible = false;
        }
        else
        {
            btnModCal.Visible = false;
            btnAdd.Visible = true;
            btnCopyFromComp.Visible = true;
            btnCopyFromYear.Visible = true;
            btnUploadCal.Visible = true;
        }
    }

    private void BindPeriods()
    {
        //Load Periods
        DataTable dt = new DataTable();
        dt.Columns.Add("Period");
        DataRow dr;
        for (int i = 1; i <= 12; i++)
        {
            dr = dt.NewRow();
            dr["Period"] = i;
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        lblPeriod1.Text = dt.Rows[0]["Period"].ToString();
        lblPeriod2.Text = dt.Rows[1]["Period"].ToString();
        lblPeriod3.Text = dt.Rows[2]["Period"].ToString();
        lblPeriod4.Text = dt.Rows[3]["Period"].ToString();
        lblPeriod5.Text = dt.Rows[4]["Period"].ToString();
        lblPeriod6.Text = dt.Rows[5]["Period"].ToString();
        lblPeriod7.Text = dt.Rows[6]["Period"].ToString();
        lblPeriod8.Text = dt.Rows[7]["Period"].ToString();
        lblPeriod9.Text = dt.Rows[8]["Period"].ToString();
        lblPeriod10.Text = dt.Rows[9]["Period"].ToString();
        lblPeriod11.Text = dt.Rows[10]["Period"].ToString();
        lblPeriod12.Text = dt.Rows[11]["Period"].ToString();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        LoadData();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblHelp.Text = string.Empty;
        GetData();
    }

    protected void GetFiscalCalendarByYear(object sender, EventArgs e)
    {
        GetData();
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

    protected void gvFC_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "right";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    #endregion

    #region Add Calendar

    protected void AddCalendar(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return validateDates();");
        AssignAttibutes();
        ResetInputFields();
        BindPeriods();
        txtFromDate1.Focus();
        hdnIsCopy.Value = "0";
        dvAddFiscalCal.InnerHtml = "Add Calendar";
        dvCompCopy.Style["display"] = "none";
        dvYearCopy.Style["display"] = "none";
        dvUploadCal.Style["display"] = "none";
        dvCalendar.Style["display"] = "block";
        FreezeFields(false);
        btnSave.Visible = true;
        popAddFC.Show();
    }

    protected void ModifyCalendar(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return validateDates();");
        AssignAttibutes();
        ResetInputFields();

        DataTable dt = (DataTable)Session["FiscCal"];
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            Label lblPeriod = (Label)this.FindControl("lblPeriod" + (i + 1));
            HiddenField hdnPeriod = (HiddenField)this.FindControl("hdnPeriod" + (i + 1));
            TextBox txtFromDate = (TextBox)this.FindControl("txtFromDate" + (i + 1));
            TextBox txtToDate = (TextBox)this.FindControl("txtToDate" + (i + 1));
            Label lblNoOfWeeks = (Label)this.FindControl("lblNoOfWeeks" + (i + 1));
            HiddenField hdnCalendarID = (HiddenField)this.FindControl("hdnCalendarID" + (i + 1));
            lblPeriod.Text = dt.Rows[i]["period"].ToString();
            hdnPeriod.Value = dt.Rows[i]["period"].ToString();
            txtFromDate.Text = dt.Rows[i]["fromDate"].ToString();
            txtToDate.Text = dt.Rows[i]["toDate"].ToString();
            lblNoOfWeeks.Text = dt.Rows[i]["weeks"].ToString();
            hdnCalendarID.Value = dt.Rows[i]["calendarId"].ToString();
        }

        hdnIsCopy.Value = "0";
        dvAddFiscalCal.InnerHtml = "Modify Calendar";
        dvCompCopy.Style["display"] = "none";
        dvYearCopy.Style["display"] = "none";
        dvUploadCal.Style["display"] = "none";
        dvCalendar.Style["display"] = "block";
        FreezeFields(false);
        btnSave.Visible = true;
        popAddFC.Show();
    }

    protected void SaveCalendar(object sender, EventArgs e)
    {
        string str = string.Empty;
        FiscalCalendarVO fc = new FiscalCalendarVO();
        fc.addedBy = Convert.ToInt32(Session["UserID"]);
        fc.modifiedBy = Convert.ToInt32(Session["UserID"]);
        fc.orgId = Convert.ToInt32(Session["OrgID"]);
        fc.compCode = ddlCompCode.SelectedValue;
        fc.year = ut.NullSafeInteger(ddlYear.SelectedValue);
        if (hdnIsCopy.Value == "1" || hdnIsCopy.Value == "2")
        {
            fc.fromCompCode = hdnIsCopy.Value == "1" ? Utility.NullSafeString(ddlCopyCompCode.SelectedValue) : Utility.NullSafeString(ddlCompCode.SelectedValue);
            fc.fromYear = hdnIsCopy.Value == "1" ? ut.NullSafeInteger(ddlYear.SelectedValue) : ut.NullSafeInteger(ddlCopyYear.SelectedValue);
            fc.month = string.Empty;
            fc.fromDate = string.Empty;
            fc.toDate = string.Empty;
            fc.weeks = 0;
            fc.calendarId = 0;
            str = xms.addFiscalCalendar(fc);
            if (str.ToLower().Contains("succes"))
                lblHelp.Style["color"] = "Green";
            else
                lblHelp.Style["color"] = "Red";
            lblHelp.Text = str;
        }
        else
        {
            fc.fromCompCode = string.Empty;
            fc.fromYear = 0;
            //month1
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod1.Text));
            fc.period = ut.NullSafeInteger(lblPeriod1.Text);
            fc.fromDate = txtFromDate1.Text;
            fc.toDate = txtToDate1.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod1.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID1.Value);
            str = xms.addFiscalCalendar(fc);

            //month2
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod2.Text));
            fc.period = ut.NullSafeInteger(lblPeriod2.Text);
            fc.fromDate = txtFromDate2.Text;
            fc.toDate = txtToDate2.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod2.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID2.Value);
            str = xms.addFiscalCalendar(fc);

            //month3
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod3.Text));
            fc.period = ut.NullSafeInteger(lblPeriod3.Text);
            fc.fromDate = txtFromDate3.Text;
            fc.toDate = txtToDate3.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod3.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID3.Value);
            str = xms.addFiscalCalendar(fc);

            //month4
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod4.Text));
            fc.period = ut.NullSafeInteger(lblPeriod4.Text);
            fc.fromDate = txtFromDate4.Text;
            fc.toDate = txtToDate4.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod4.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID4.Value);
            str = xms.addFiscalCalendar(fc);

            //month5
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod5.Text));
            fc.period = ut.NullSafeInteger(lblPeriod5.Text);
            fc.fromDate = txtFromDate5.Text;
            fc.toDate = txtToDate5.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod5.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID5.Value);
            str = xms.addFiscalCalendar(fc);

            //month6
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod6.Text));
            fc.period = ut.NullSafeInteger(lblPeriod6.Text);
            fc.fromDate = txtFromDate6.Text;
            fc.toDate = txtToDate6.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod6.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID6.Value);
            str = xms.addFiscalCalendar(fc);

            //month7
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod7.Text));
            fc.period = ut.NullSafeInteger(lblPeriod7.Text);
            fc.fromDate = txtFromDate7.Text;
            fc.toDate = txtToDate7.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod7.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID7.Value);
            str = xms.addFiscalCalendar(fc);

            //month8
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod8.Text));
            fc.period = ut.NullSafeInteger(lblPeriod8.Text);
            fc.fromDate = txtFromDate8.Text;
            fc.toDate = txtToDate8.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod8.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID8.Value);
            str = xms.addFiscalCalendar(fc);

            //month9
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod9.Text));
            fc.period = ut.NullSafeInteger(lblPeriod9.Text);
            fc.fromDate = txtFromDate9.Text;
            fc.toDate = txtToDate9.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod9.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID9.Value);
            str = xms.addFiscalCalendar(fc);

            //month10
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod10.Text));
            fc.period = ut.NullSafeInteger(lblPeriod10.Text);
            fc.fromDate = txtFromDate10.Text;
            fc.toDate = txtToDate10.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod10.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID10.Value);
            str = xms.addFiscalCalendar(fc);

            //month11
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod11.Text));
            fc.period = ut.NullSafeInteger(lblPeriod11.Text);
            fc.fromDate = txtFromDate11.Text;
            fc.toDate = txtToDate11.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod11.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID11.Value);
            str = xms.addFiscalCalendar(fc);

            //month12
            fc.month = GetMonth(ut.NullSafeInteger(lblPeriod12.Text));
            fc.period = ut.NullSafeInteger(lblPeriod12.Text);
            fc.fromDate = txtFromDate12.Text;
            fc.toDate = txtToDate12.Text;
            fc.weeks = ut.NullSafeInteger(hdnPeriod12.Value);
            fc.calendarId = ut.NullSafeInteger(hdnCalendarID12.Value);
            str = xms.addFiscalCalendar(fc);

            lblHelp.Style["color"] = "Green";
            lblHelp.Text = "Calendar updated successfully.";
        }
        ClearFields();
        GetData();
        popAddFC.Hide();
    }

    private string GetMonth(int period)
    {
        System.Globalization.DateTimeFormatInfo mfi = new System.Globalization.DateTimeFormatInfo();
        return mfi.GetMonthName(period).ToString().ToUpper();
    }

    #endregion

    #region Copy Calendar

    protected void CopyFromComp(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        LoadExistingCompCodeCalendar();
    }

    protected void CopyFromYear(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        LoadPreviousYearCalender();
    }

    private void LoadCalendar(DataTable dt)
    {
        txtFromDate1.Text = dt.Rows[0]["FromDate"].ToString() == string.Empty ? dt.Rows[0]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[0]["FromDate"]).ToShortDateString();
        txtFromDate2.Text = dt.Rows[1]["FromDate"].ToString() == string.Empty ? dt.Rows[1]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[1]["FromDate"]).ToShortDateString();
        txtFromDate3.Text = dt.Rows[2]["FromDate"].ToString() == string.Empty ? dt.Rows[2]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[2]["FromDate"]).ToShortDateString();
        txtFromDate4.Text = dt.Rows[3]["FromDate"].ToString() == string.Empty ? dt.Rows[3]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[3]["FromDate"]).ToShortDateString();
        txtFromDate5.Text = dt.Rows[4]["FromDate"].ToString() == string.Empty ? dt.Rows[4]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[4]["FromDate"]).ToShortDateString();
        txtFromDate6.Text = dt.Rows[5]["FromDate"].ToString() == string.Empty ? dt.Rows[5]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[5]["FromDate"]).ToShortDateString();
        txtFromDate7.Text = dt.Rows[6]["FromDate"].ToString() == string.Empty ? dt.Rows[6]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[6]["FromDate"]).ToShortDateString();
        txtFromDate8.Text = dt.Rows[7]["FromDate"].ToString() == string.Empty ? dt.Rows[7]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[7]["FromDate"]).ToShortDateString();
        txtFromDate9.Text = dt.Rows[8]["FromDate"].ToString() == string.Empty ? dt.Rows[8]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[8]["FromDate"]).ToShortDateString();
        txtFromDate10.Text = dt.Rows[9]["FromDate"].ToString() == string.Empty ? dt.Rows[9]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[9]["FromDate"]).ToShortDateString();
        txtFromDate11.Text = dt.Rows[10]["FromDate"].ToString() == string.Empty ? dt.Rows[10]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[10]["FromDate"]).ToShortDateString();
        txtFromDate12.Text = dt.Rows[11]["FromDate"].ToString() == string.Empty ? dt.Rows[11]["FromDate"].ToString() : Convert.ToDateTime(dt.Rows[11]["FromDate"]).ToShortDateString();

        txtToDate1.Text = dt.Rows[0]["ToDate"].ToString() == string.Empty ? dt.Rows[0]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[0]["ToDate"]).ToShortDateString();
        txtToDate2.Text = dt.Rows[1]["ToDate"].ToString() == string.Empty ? dt.Rows[1]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[1]["ToDate"]).ToShortDateString();
        txtToDate3.Text = dt.Rows[2]["ToDate"].ToString() == string.Empty ? dt.Rows[2]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[2]["ToDate"]).ToShortDateString();
        txtToDate4.Text = dt.Rows[3]["ToDate"].ToString() == string.Empty ? dt.Rows[3]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[3]["ToDate"]).ToShortDateString();
        txtToDate5.Text = dt.Rows[4]["ToDate"].ToString() == string.Empty ? dt.Rows[4]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[4]["ToDate"]).ToShortDateString();
        txtToDate6.Text = dt.Rows[5]["ToDate"].ToString() == string.Empty ? dt.Rows[5]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[5]["ToDate"]).ToShortDateString();
        txtToDate7.Text = dt.Rows[6]["ToDate"].ToString() == string.Empty ? dt.Rows[6]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[6]["ToDate"]).ToShortDateString();
        txtToDate8.Text = dt.Rows[7]["ToDate"].ToString() == string.Empty ? dt.Rows[7]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[7]["ToDate"]).ToShortDateString();
        txtToDate9.Text = dt.Rows[8]["ToDate"].ToString() == string.Empty ? dt.Rows[8]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[8]["ToDate"]).ToShortDateString();
        txtToDate10.Text = dt.Rows[9]["ToDate"].ToString() == string.Empty ? dt.Rows[9]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[9]["ToDate"]).ToShortDateString();
        txtToDate11.Text = dt.Rows[10]["ToDate"].ToString() == string.Empty ? dt.Rows[10]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[10]["ToDate"]).ToShortDateString();
        txtToDate12.Text = dt.Rows[11]["ToDate"].ToString() == string.Empty ? dt.Rows[11]["ToDate"].ToString() : Convert.ToDateTime(dt.Rows[11]["ToDate"]).ToShortDateString();
        dvCalendar.Style["display"] = "block";
    }

    private void LoadExistingCompCodeCalendar()
    {
        lblHelp.Text = string.Empty;
        hdnIsCopy.Value = "1";
        dvAddFiscalCal.InnerHtml = "Copy Calendar";
        dvCompCopy.Style["display"] = "block";
        dvYearCopy.Style["display"] = "none";
        dvUploadCal.Style["display"] = "none";
        ResetInputFields();
        DataTable dtCY = CopyCalendar();

        //Bind Compcode dropdown
        string expr = "year = " + ddlYear.SelectedValue;
        DataView view = new DataView(dtCY, expr, "CompCode", DataViewRowState.CurrentRows);
        if (view.ToTable().Rows.Count > 0)
        {
            if (ddlCopyCompCode.Items.Count == 0)
            {
                ddlCopyCompCode.DataSource = view.ToTable(true, "CompCode");
                ddlCopyCompCode.DataTextField = "compCode";
                ddlCopyCompCode.DataValueField = "compCode";
                ddlCopyCompCode.DataBind();
                BindPeriods();
            }
            //Fetch Dates for selected Compcode
            string expr1 = "CompCode = '" + ddlCopyCompCode.SelectedValue + "' And Year = " + ddlYear.SelectedValue;
            DataView view1 = new DataView(dtCY, expr1, "CompCode", DataViewRowState.CurrentRows);
            DataTable dt = view1.ToTable();
            if (dt.Rows.Count > 0)
                LoadCalendar(dt);
            FreezeFields(true);
            btnSave.Visible = true;
            popAddFC.Show();
        }
        else
        {
            lblHelp.Style["color"] = "Red";
            lblHelp.Text = "No Calendar details available for the selected year in any CompCode";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('HideMsg()', 3000);", true);
        }
    }

    private void LoadPreviousYearCalender()
    {
        lblHelp.Text = string.Empty;
        hdnIsCopy.Value = "2";
        dvAddFiscalCal.InnerHtml = "Copy Calendar";
        dvCompCopy.Style["display"] = "none";
        dvYearCopy.Style["display"] = "block";
        dvUploadCal.Style["display"] = "none";
        ResetInputFields();
        DataTable dtCY = CopyCalendar();

        //Bind years dropdown
        string expr = "CompCode = '" + ddlCompCode.SelectedValue + "'";
        DataView view = new DataView(dtCY, expr, "CompCode", DataViewRowState.CurrentRows);
        if (view.ToTable().Rows.Count > 0)
        {
            if (ddlCopyYear.Items.Count == 0)
            {
                ddlCopyYear.DataSource = view.ToTable(true, "Year");
                ddlCopyYear.DataTextField = "Year";
                ddlCopyYear.DataValueField = "Year";
                ddlCopyYear.DataBind();
                BindPeriods();
            }
            //Fetch Dates for selected Year
            string expr1 = "CompCode = '" + ddlCompCode.SelectedValue + "' And Year = " + ddlCopyYear.SelectedValue;
            DataView view1 = new DataView(dtCY, expr1, "CompCode", DataViewRowState.CurrentRows);
            DataTable dt = view1.ToTable();
            if (dt.Rows.Count > 0)
                LoadCalendar(dt);
            FreezeFields(true);
            btnSave.Visible = true;
            popAddFC.Show();
        }
        else
        {
            lblHelp.Style["color"] = "Red";
            lblHelp.Text = "No Calendar details available for the selected year in the selected CompCode";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('HideMsg()', 3000);", true);
        }
    }

    protected void ChangedCompCodeToCopy(object sender, EventArgs e)
    {
        LoadExistingCompCodeCalendar();
    }

    protected void ChangedYearToCopy(object sender, EventArgs e)
    {
        LoadPreviousYearCalender();
    }

    protected void SaveCopiedCalendar(object sender, EventArgs e)
    {

    }

    private DataTable CopyCalendar()
    {
        DataTable dt = new DataTable();
        if (Session["dtCopyCal"] == null)
        {
            string str = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), string.Empty, 0);
            List<FiscalCalendarVO> lst = ser.Deserialize<List<FiscalCalendarVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtCopyCal"] = dt;
        }
        else
            dt = (DataTable)Session["dtCopyCal"];
        return dt;
    }

    #endregion

    #region Upload

    protected void UploadCalendar(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        Session.Remove("dtUploadCal");
        ResetInputFields();
        dvAddFiscalCal.InnerHtml = "Upload Calendar";
        dvCompCopy.Style["display"] = "none";
        dvYearCopy.Style["display"] = "none";
        dvUploadCal.Style["display"] = "block";
        dvCalendar.Style["display"] = "none";
        btnSave.Visible = false;
        btnClearData.Visible = false;
        popAddFC.Show();
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        hdnIsCopy.Value = "3";
        DataTable dt = GetUploadedData();
        Session["dtUploadCal"] = dt;
    }

    protected void LoadUploadedCalendar(object sender, EventArgs e)
    {
        if (Session["dtUploadCal"] != null)
        {
            if (Path.GetExtension(Session["UploadedFileName"].ToString()) == ".xls" || Path.GetExtension(Session["UploadedFileName"].ToString()) == ".xlsx" || Path.GetExtension(Session["UploadedFileName"].ToString()) == ".csv")
            {
                BindPeriods();
                DataTable dt = (DataTable)Session["dtUploadCal"];
                LoadCalendar(dt);
                FreezeFields(true);
                dvCalendar.Style["display"] = "block";
                int cnt = 0;
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    //if (dt.Rows[i]["FromDate"].ToString() == string.Empty || Convert.ToDateTime(dt.Rows[i]["FromDate"]).Year != ut.NullSafeInteger(ddlYear.SelectedValue))
                    if (dt.Rows[i]["FromDate"].ToString() == string.Empty || (i != 0 && Convert.ToDateTime(dt.Rows[i]["FromDate"]).Year != ut.NullSafeInteger(ddlYear.SelectedValue)))
                    {
                        TextBox txt = (TextBox)this.FindControl("txtFromDate" + (ut.NullSafeInteger(i) + 1));
                        txt.Style["border"] = "1px solid Red";
                        cnt++;
                    }
                    else
                    {
                        TextBox txt = (TextBox)this.FindControl("txtFromDate" + (ut.NullSafeInteger(i) + 1));
                        txt.Style["border"] = "1px solid #ccc";
                    }
                    if (dt.Rows[i]["ToDate"].ToString() == string.Empty || Convert.ToDateTime(dt.Rows[i]["ToDate"]).Year != ut.NullSafeInteger(ddlYear.SelectedValue))
                    {
                        TextBox txt = (TextBox)this.FindControl("txtToDate" + (ut.NullSafeInteger(i) + 1));
                        txt.Style["border"] = "1px solid Red";
                        cnt++;
                    }
                    else
                    {
                        TextBox txt = (TextBox)this.FindControl("txtToDate" + (ut.NullSafeInteger(i) + 1));
                        txt.Style["border"] = "1px solid #ccc";
                    }
                }
                if (cnt > 0)
                {
                    dvMsg.Style["color"] = "Red";
                    dvMsg.InnerHtml = "Uploaded file contains incomplete or invalid data. Please check and upload.";
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "validateDates() ;", true);
                    btnSave.Visible = true;
                }
                btnClearData.Visible = true;
            }
            else
            {
                dvMsg.Style["color"] = "Red";
                dvMsg.InnerHtml = "Please select a file with extension .xls/.xlsx/.csv.";
            }
        }
        else
        {
            dvMsg.Style["color"] = "Red";
            dvMsg.InnerHtml = "Please select a file to upload.";
        }
        popAddFC.Show();
    }

    protected void ClearUploadedCalendar(object sender, EventArgs e)
    {
        ResetInputFields();
        btnClearData.Visible = false;
        dvCalendar.Style["display"] = "none";
        popAddFC.Show();
    }

    private bool ValidateUploadedCalendar(DataTable dt)
    {
        int cnt = 0;
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            if (dt.Rows[i]["FromDate"].ToString() != string.Empty)
            {
                if (Convert.ToDateTime(dt.Rows[i]["FromDate"]).Year != ut.NullSafeInteger(ddlYear.SelectedValue))
                {
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$1('txtFromDate" + i + 1 + "').style.border = '1px solid Red';", true);
                    cnt++;
                }
                else
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$1('txtFromDate" + i + 1 + "').style.border = '1px solid #ccc';", true);

                if (Convert.ToDateTime(dt.Rows[i]["ToDate"]).Year != ut.NullSafeInteger(ddlYear.SelectedValue))
                {
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$1('txtToDate" + i + 1 + "').style.border = '1px solid Red';", true);
                    cnt++;
                }
                else
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$1('txtToDate" + i + 1 + "').style.border = '1px solid #ccc';", true);
            }
        }
        if (cnt > 0)
            return false;
        else
            return true;
    }

    private DataTable GetUploadedData()
    {
        string connectionString = "";
        string fileName = Path.GetFileName(fupdCal.PostedFile.FileName);
        string fileExtension = Path.GetExtension(fupdCal.PostedFile.FileName);
        string path = Server.MapPath("..");
        string fileLocation = path + "\\" + newPath + "\\" + fileName;
        fupdCal.SaveAs(fileLocation);
        Session["UploadedFileName"] = fupdCal.PostedFile.FileName;
        //Check whether file extension is xls or xslx
        if (fileExtension == ".xls")
            connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
        else if (fileExtension == ".xlsx")
            connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";

        //Create OleDB Connection and OleDb Command
        OleDbConnection con = new OleDbConnection(connectionString);
        OleDbCommand cmd = new OleDbCommand();
        cmd.CommandType = System.Data.CommandType.Text;
        cmd.Connection = con;
        OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
        DataTable dtExcelRecords = new DataTable();
        con.Open();
        DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
        cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
        dAdapter.SelectCommand = cmd;
        dAdapter.Fill(dtExcelRecords);
        con.Close();
        System.IO.File.Delete(fileLocation);
        return dtExcelRecords;
    }

    #endregion

    #region Input Field Operations

    private void ClearFields()
    {
        txtFromDate1.Text = txtFromDate2.Text = txtFromDate3.Text = txtFromDate4.Text = txtFromDate5.Text = txtFromDate6.Text = txtFromDate7.Text = txtFromDate8.Text = txtFromDate9.Text = txtFromDate10.Text = txtFromDate11.Text = txtFromDate12.Text = string.Empty;
        txtToDate1.Text = txtToDate2.Text = txtToDate3.Text = txtToDate4.Text = txtToDate5.Text = txtToDate6.Text = txtToDate7.Text = txtToDate8.Text = txtToDate9.Text = txtToDate10.Text = txtToDate11.Text = txtToDate12.Text = dvMsg.InnerHtml = string.Empty;
    }

    private void FreezeFields(bool readOnly)
    {
        txtFromDate1.ReadOnly = txtFromDate2.ReadOnly = txtFromDate3.ReadOnly = txtFromDate4.ReadOnly = txtFromDate5.ReadOnly = txtFromDate6.ReadOnly =
            txtFromDate7.ReadOnly = txtFromDate8.ReadOnly = txtFromDate9.ReadOnly = txtFromDate10.ReadOnly = txtFromDate11.ReadOnly = txtFromDate12.ReadOnly =
        txtToDate1.ReadOnly = txtToDate2.ReadOnly = txtToDate3.ReadOnly = txtToDate4.ReadOnly = txtToDate5.ReadOnly = txtToDate6.ReadOnly = txtToDate7.ReadOnly =
            txtToDate8.ReadOnly = txtToDate9.ReadOnly = txtToDate10.ReadOnly = txtToDate11.ReadOnly = txtToDate12.ReadOnly = readOnly;
    }

    private void ResetInputFields()
    {
        ClearFields();
        ResetFieldBorder();
    }

    private void ResetFieldBorder()
    {
        foreach (Control c in this.Controls)
        {
            if (c is TextBox)
            {
                TextBox txt = (TextBox)c;
                txt.Style["border"] = "#ccc";
            }
        }
    }

    private void AssignAttibutes()
    {
        txtFromDate2.Attributes.Add("readonly", "readonly");
        txtFromDate3.Attributes.Add("readonly", "readonly");
        txtFromDate4.Attributes.Add("readonly", "readonly");
        txtFromDate5.Attributes.Add("readonly", "readonly");
        txtFromDate6.Attributes.Add("readonly", "readonly");
        txtFromDate7.Attributes.Add("readonly", "readonly");
        txtFromDate8.Attributes.Add("readonly", "readonly");
        txtFromDate9.Attributes.Add("readonly", "readonly");
        txtFromDate10.Attributes.Add("readonly", "readonly");
        txtFromDate11.Attributes.Add("readonly", "readonly");
        txtFromDate12.Attributes.Add("readonly", "readonly");

        //Display limiited period in the calendar
        //txtFromDate1.Attributes.Add("min", ut.NullSafeInteger(ddlYear.SelectedValue) - 1 + "-12-01");
        //txtToDate1.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate2.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate3.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate4.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate5.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate6.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate7.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate8.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate9.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate10.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate11.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");
        //txtToDate12.Attributes.Add("min", ddlYear.SelectedValue + "-01-01");

        //txtFromDate1.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate1.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate2.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate3.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate4.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate5.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate6.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate7.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate8.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate9.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");   
        //txtToDate10.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate11.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
        //txtToDate12.Attributes.Add("max", ddlYear.SelectedValue + "-12-31");
    }

    #endregion
}