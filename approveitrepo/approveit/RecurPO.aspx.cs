using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Text;

public partial class RecurPO : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dtPO = new DataTable();
    DataTable dtFooterPO = new DataTable();
    DataTable dt = new DataTable();
    DataView dv;
    string lineNum, lineSeq, budgClss, accCode, itemCode, descr, pricePerUnit, jan, feb, mar, apr, may, jun, jul, aug,
        sept, oct, nov, dec, taxPercent, compCode, orgId, vendor, schDate, dept, masterFlg, detailsFlg, addedBy, modifiedBy, pkgUnit, schId, userId, year, mgrID;
    string appString = "###";
    private bool _refreshExp = false;

    #endregion

    #region Recur PO Header

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                Session.Remove("dtRecurPO");
                BindCompCodes(ddlCompCodesMain);
                BindVendors(ddlCompCodesMain.SelectedValue, ddlVendMain);
                ddlVendMain.Items.Insert(0, "All");
                ddlVendMain.Items.FindByText("All").Value = "0";
                BindDepartments(ddlCompCodesMain.SelectedValue, ddlDeptMain);
                ddlDeptMain.Items.Insert(0, "All");
                ddlDeptMain.Items.FindByText("All").Value = "0";
                LoadScheduledData();
                btnAddRow.Attributes.Add("onclick", "javascript:return validateBeforeNewRow();");
                //btnCreateSch.Attributes.Add("onclick", "javascript:return validateBeforeNewRow();");
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_RecurPO"] = lnk.ID;

        if (Session["SortDir_RecurPO"] == null || Session["SortDir_RecurPO"].ToString() == "Asc")
            Session["SortDir_RecurPO"] = "Desc";
        else
            Session["SortDir_RecurPO"] = "Asc";
        Session["SortExpr_RecurPO"] = e.CommandArgument;
        LoadScheduledData();
    }

    private void LoadScheduledData()
    {
        if (Session["AllSchedules"] == null)
        {
            RecurrPOVO recur = new RecurrPOVO();
            recur.orgId = Convert.ToInt32(Session["OrgID"]);
            recur.compCode = ddlCompCodesMain.SelectedValue;
            string str = xms.getRecurrPO(recur);
            List<RecurrPOVO> lst = ser.Deserialize<List<RecurrPOVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["AllSchedules"] = dt;
        }
        dt = BindScheduleIDs();
        if (dt.Rows.Count > 0)
        {
            if ((Session["SortExpr_RecurPO"] != null) && Session["SortDir_RecurPO"] != null)
            {
                DataView sortedView = new DataView(dt);
                sortedView.Sort = Session["SortExpr_RecurPO"].ToString() + " " + Session["SortDir_RecurPO"].ToString();
                gvSchedules.DataSource = sortedView;
            }
            else
                gvSchedules.DataSource = dt;
        }
        gvSchedules.DataBind();
    }

    private DataTable BindScheduleIDs()
    {
        string expr = string.Empty;
        dt = (DataTable)Session["AllSchedules"];
        DataTable dtTemp = new DataTable();
        if (ddlDeptMain.SelectedValue != "0" || ddlVendMain.SelectedValue != "0")
        {
            if (ddlVendMain.SelectedValue != "0" && ddlDeptMain.SelectedValue != "0")
                expr = "preferredVendor = '" + ddlVendMain.SelectedValue.Replace("'", "''") + "' and deptCode = '" + ddlDeptMain.SelectedValue + "'";
            if (ddlVendMain.SelectedValue != "0")
                expr = "preferredVendor = '" + ddlVendMain.SelectedValue.Replace("'", "''") + "'";
            else if (ddlDeptMain.SelectedValue != "0")
                expr = "deptCode = '" + ddlDeptMain.SelectedValue + "'";
        }

        if (expr != string.Empty)
        {
            dv = new DataView(dt, expr, "compCode", DataViewRowState.CurrentRows);
            dtTemp = dv.ToTable(true, "schdId", "preferredVendor", "deptCode", "schdDate");//filter distinct data
            DataView dv1 = new DataView(dt, expr, "compCode", DataViewRowState.CurrentRows);
            ddlSchID.DataSource = dv1.ToTable(true, "schdId").DefaultView;
        }
        else
        {
            ddlSchID.DataSource = dt.DefaultView.ToTable(true, "schdId");
            dtTemp = dt;
        }
        ddlSchID.DataTextField = "schdId";
        ddlSchID.DataValueField = "schdId";
        ddlSchID.DataBind();
        return dtTemp;
    }

    protected void CompCodesMainSelected(object sender, EventArgs e)
    {
        BindVendors(ddlCompCodesMain.SelectedValue, ddlVendMain);
        BindDepartments(ddlCompCodesMain.SelectedValue, ddlDeptMain);
        LoadScheduledData();
    }

    protected void DepartmentMainSelected(object sender, EventArgs e)
    {
        LoadScheduledData();
    }

    protected void VendorMainSelected(object sender, EventArgs e)
    {
        LoadScheduledData();
    }

    protected void ScheduleIDSelected(object sender, EventArgs e)
    {
        LoadScheduledData();
    }

    protected void gvSchedules_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_RecurPO"] != null && Session["Control_RecurPO"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_RecurPO"].ToString());
                if (Session["SortDir_RecurPO"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px' />";
            }
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

    private void BindCompCodes(DropDownList ddl)
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

        ddl.DataSource = dsCompCodes;
        ddl.DataTextField = "BusinessType";
        ddl.DataValueField = "CompCode";
        ddl.DataBind();
        ddl.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddl.Enabled = false;
        else
            ddl.Enabled = true;
    }

    private void BindVendors(string compCode, DropDownList ddl)
    {
        DataTable dt = new DataTable();
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), compCode, string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddl.DataSource = dv.ToTable(true, "PreferredVendor");
        ddl.DataTextField = "PreferredVendor";
        ddl.DataValueField = "PreferredVendor";
        ddl.DataBind();
    }

    private void BindDepartments(string compCode, DropDownList ddl)
    {
        //Bind Departments
        DataTable dt = new DataTable();
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), compCode, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        dt = Utility.ConvertToDataTable(lst);
        ddl.DataSource = dt;
        ddl.DataTextField = "Description";
        ddl.DataValueField = "CodeKey";
        ddl.DataBind();
        ddl.SelectedValue = Session["DepartmentCode"].ToString();
    }

    private void GetScheduleID()
    {
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "SCHSEQ");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (dt.Rows.Count > 0)
            lblSchID.Text = dt.Rows[0]["CodeValue1"].ToString();
    }

    #endregion

    #region Recur PO Schedule Details

    protected void CompCodeChanged(object sender, EventArgs e)
    {
        GetScheduleID();
    }

    private void BindManagers(string mgrId)
    {
        string str = xms.getManagers(Convert.ToInt32(Session["UserID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
        List<UserVO> lst = ser.Deserialize<List<UserVO>>(str);
        DataTable dtManager = Utility.ConvertToDataTable(lst);
        ddlManagerEMail.DataSource = dtManager;
        ddlManagerEMail.DataTextField = "Email";
        ddlManagerEMail.DataValueField = "UserID";
        ddlManagerEMail.DataBind();
        try
        {
            ddlManagerEMail.SelectedValue = mgrId;
        }
        catch
        {
            ddlManagerEMail.SelectedValue = Session["ManagerID"].ToString();
        }
    }

    protected void NewSchedule(object sender, EventArgs e)
    {
        Session.Remove("dtRecurPO");
        BindCompCodes(ddlCompCode);
        BindDepartments(ddlCompCode.SelectedValue, ddlDept);
        BindVendors(ddlCompCode.SelectedValue, ddlVendor);
        BindManagers(Session["ManagerID"].ToString());
        ddlVendor.Items.Insert(0, "Please Select");
        ddlVendor.Items.FindByText("Please Select").Value = "0";
        ClearData();
        txtSchDate.Text = DateTime.Now.ToShortDateString();
        GetScheduleID();
        btnCreateSch.Visible = btnCancelSch.Visible = btnClearData.Visible = false;
        //gvPO.Visible = true;
        popAddSch.Show();
    }

    protected void EditSchedule(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkScheduleID = (LinkButton)row.FindControl("lnkScheduleID");
        int schID = ut.NullSafeInteger(lnkScheduleID.Text);
        lblSchID.Text = schID.ToString();
        dt = (DataTable)Session["AllSchedules"];
        string expr = "schdId = " + schID;
        dv = new DataView(dt, expr, "schdId", DataViewRowState.CurrentRows);
        BindCompCodes(ddlCompCode);
        ddlCompCode.SelectedValue = ddlCompCodesMain.SelectedValue;
        BindDepartments(ddlCompCode.SelectedValue, ddlDept);
        ddlDept.SelectedValue = dv.ToTable().Rows[0]["deptCode"].ToString();
        BindVendors(ddlCompCode.SelectedValue, ddlVendor);
        ddlVendor.Items.Insert(0, "Please Select");
        ddlVendor.Items.FindByText("Please Select").Value = "0";
        ddlVendor.SelectedValue = dv.ToTable().Rows[0]["preferredVendor"].ToString();
        BindManagers(dv.ToTable().Rows[0]["managerId"].ToString());
        txtSchDate.Text = dv.ToTable().Rows[0]["schdDate"].ToString();

        Session["dtRecurPO"] = dv.ToTable();
        gvPO.DataSource = dv.ToTable();
        gvPO.DataBind();
        btnCreateSch.Visible = btnCancelSch.Visible = btnClearData.Visible = true;
        //gvPO.Visible = true;
        SetPreviuosData(dv.ToTable());
        ShowGridTotals(dv.ToTable());

        //Disable fields in the grid depending on current month
        int month = DateTime.Now.Month;
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            int j = 0;
            for (int i = 1; i < 12; i++)
            {
                j = 7;
                if (i <= month)
                    foreach (Control c in row1.Cells[j].Controls)
                        if (c is TextBox)
                            ((TextBox)c).ReadOnly = true;
                j++;
            }
        }

        popAddSch.Show();
    }

    private void ShowGridTotals(DataTable dt)
    {
        if (dt.Rows.Count > 0)
        {
            //Add new column to store row total
            if (!dt.Columns.Contains("Total"))
                dt.Columns.Add("Total", typeof(double));
            //Add new column to store row total
            foreach (GridViewRow row in gvPO.Rows)
            {
                //Calculate months amounts and populate row totall
                Label lblTotal = (Label)row.FindControl("lblTotal");
                HiddenField hdnTotal = (HiddenField)row.FindControl("hdnTotal");
                double uP = ut.NullSafeDouble(dt.Rows[row.RowIndex]["unitPrice"]);
                double m1 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["january"]);
                double m2 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["february"]);
                double m3 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["march"]);
                double m4 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["april"]);
                double m5 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["may"]);
                double m6 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["june"]);
                double m7 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["july"]);
                double m8 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["august"]);
                double m9 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["september"]);
                double m10 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["october"]);
                double m11 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["november"]);
                double m12 = ut.NullSafeDouble(dt.Rows[row.RowIndex]["december"]);

                lblTotal.Text = hdnTotal.Value = ut.NullSafeDouble((uP * m1) + (uP * m2) + (uP * m3) + (uP * m4) + (uP * m5) + (uP * m6) + (uP * m7) + (uP * m8) + (uP * m9) + (uP * m10) + (uP * m11) + (uP * m12)).ToString();
                dt.Rows[row.RowIndex]["Total"] = ut.NullSafeDouble(lblTotal.Text);
                //Calculate months amounts and populate row totall
            }

            //Define footer fields
            HiddenField hdnFtUnitPrice = (HiddenField)gvPO.FooterRow.FindControl("hdnFtUnitPrice");
            HiddenField hdnFtJan = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJan");
            HiddenField hdnFtFeb = (HiddenField)gvPO.FooterRow.FindControl("hdnFtFeb");
            HiddenField hdnFtMar = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMar");
            HiddenField hdnFtApr = (HiddenField)gvPO.FooterRow.FindControl("hdnFtApr");
            HiddenField hdnFtMay = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMay");
            HiddenField hdnFtJun = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJun");
            HiddenField hdnFtJul = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJul");
            HiddenField hdnFtAug = (HiddenField)gvPO.FooterRow.FindControl("hdnFtAug");
            HiddenField hdnFtSep = (HiddenField)gvPO.FooterRow.FindControl("hdnFtSep");
            HiddenField hdnFtOct = (HiddenField)gvPO.FooterRow.FindControl("hdnFtOct");
            HiddenField hdnFtNov = (HiddenField)gvPO.FooterRow.FindControl("hdnFtNov");
            HiddenField hdnFtDec = (HiddenField)gvPO.FooterRow.FindControl("hdnFtDec");
            HiddenField hdnFtTotal = (HiddenField)gvPO.FooterRow.FindControl("hdnFtTotal");

            Label lblFtUnitPrice = (Label)gvPO.FooterRow.FindControl("lblFtUnitPrice");
            Label lblFtJan = (Label)gvPO.FooterRow.FindControl("lblFtJan");
            Label lblFtFeb = (Label)gvPO.FooterRow.FindControl("lblFtFeb");
            Label lblFtMar = (Label)gvPO.FooterRow.FindControl("lblFtMar");
            Label lblFtApr = (Label)gvPO.FooterRow.FindControl("lblFtApr");
            Label lblFtMay = (Label)gvPO.FooterRow.FindControl("lblFtMay");
            Label lblFtJun = (Label)gvPO.FooterRow.FindControl("lblFtJun");
            Label lblFtJul = (Label)gvPO.FooterRow.FindControl("lblFtJul");
            Label lblFtAug = (Label)gvPO.FooterRow.FindControl("lblFtAug");
            Label lblFtSep = (Label)gvPO.FooterRow.FindControl("lblFtSep");
            Label lblFtOct = (Label)gvPO.FooterRow.FindControl("lblFtOct");
            Label lblFtNov = (Label)gvPO.FooterRow.FindControl("lblFtNov");
            Label lblFtDec = (Label)gvPO.FooterRow.FindControl("lblFtDec");
            Label lblFtTotal = (Label)gvPO.FooterRow.FindControl("lblFtTotal");
            //Define footer fields

            //Assign values to footer fields
            lblFtUnitPrice.Text = hdnFtUnitPrice.Value = dt.Compute("Sum(unitPrice)", "").ToString();
            lblFtJan.Text = hdnFtJan.Value = dt.Compute("Sum(january)", "").ToString();
            lblFtFeb.Text = hdnFtFeb.Value = dt.Compute("Sum(february)", "").ToString();
            lblFtMar.Text = hdnFtMar.Value = dt.Compute("Sum(march)", "").ToString();
            lblFtApr.Text = hdnFtApr.Value = dt.Compute("Sum(april)", "").ToString();
            lblFtMay.Text = hdnFtMay.Value = dt.Compute("Sum(may)", "").ToString();
            lblFtJun.Text = hdnFtJun.Value = dt.Compute("Sum(june)", "").ToString();
            lblFtJul.Text = hdnFtJul.Value = dt.Compute("Sum(july)", "").ToString();
            lblFtAug.Text = hdnFtAug.Value = dt.Compute("Sum(august)", "").ToString();
            lblFtSep.Text = hdnFtSep.Value = dt.Compute("Sum(september)", "").ToString();
            lblFtOct.Text = hdnFtOct.Value = dt.Compute("Sum(october)", "").ToString();
            lblFtNov.Text = hdnFtNov.Value = dt.Compute("Sum(november)", "").ToString();
            lblFtDec.Text = hdnFtDec.Value = dt.Compute("Sum(december)", "").ToString();
            lblFtTotal.Text = hdnFtTotal.Value = dt.Compute("Sum(Total)", "").ToString();
            //Assign values to footer fields
        }
    }

    protected void CancelSchedule(object sender, EventArgs e)
    {
        Session.Remove("dtRecurPO");
        Session.Remove("dtFooterPO");
    }

    protected void AddNewRow(object sender, EventArgs e)
    {
        btnCancelSch.Attributes.Add("onclick", "javascript:return ConfirmCancel(' ');");
        btnClearData.Attributes.Add("onclick", "javascript:return ConfirmCancel(' ');");
        btnCreateSch.Visible = btnCancelSch.Visible = btnClearData.Visible = true;
        if (Session["dtRecurPO"] == null)
            AddColumns();
        dtPO = (DataTable)Session["dtRecurPO"];
        if (!dtPO.Columns.Contains("Total"))
            dtPO.Columns.Add("Total");
        SetData();
        SetFooterData();

        DataRow dr = dtPO.NewRow();
        dtPO.Rows.Add(AddEmptyRow(dr));
        dtPO.AcceptChanges();
        gvPO.DataSource = dtPO;
        gvPO.DataBind();
        foreach (GridViewRow row in gvPO.Rows)
        {
            DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
            BindClassifications(ddlBudgClss);
        }
        SetPreviuosData(dtPO);
        SetPreviousFooterData(dtFooterPO);

        popAddSch.Show();
    }

    protected void ClearGridData(object sender, EventArgs e)
    {
        Session.Remove("dtRecurPO");
        Session.Remove("dtFooterPO");
        foreach (GridViewRow row in gvPO.Rows)
            row.Cells.Clear();
        gvPO.FooterRow.Cells.Clear();
        gvPO.DataBind();
        btnCancelSch.Attributes.Remove("onclick");
        //gvPO.Visible = false;
        btnCreateSch.Visible = btnCancelSch.Visible = btnClearData.Visible = false;
        popAddSch.Show();
    }

    protected void BudgetClassificationChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        GridViewRow row = (GridViewRow)ddl.NamingContainer;
        DropDownList ddlItemCode = (DropDownList)row.FindControl("ddlItemCode");
        Label lblAccCode = (Label)row.FindControl("lblAccCode");
        TextBox txtDescr = (TextBox)row.FindControl("txtDescr");
        txtDescr.Text = string.Empty;
        BindItemCodes(ddlItemCode, ddl.SelectedValue, lblAccCode);
        popAddSch.Show();
    }

    protected void ItemCodeChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        GridViewRow row = (GridViewRow)ddl.NamingContainer;
        DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
        TextBox txtDescr = (TextBox)row.FindControl("txtDescr");
        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        string exp = "accName='" + ddlBudgClss.SelectedValue + "' and ItemCode = '" + ddl.SelectedValue + "'";
        DataView dt1 = new DataView(dt, exp, "accName", DataViewRowState.CurrentRows);
        if (dt1.ToTable().Rows.Count > 0)
            txtDescr.Text = dt1.ToTable().Rows[0]["Description"].ToString();
        else
            txtDescr.Text = string.Empty;
        popAddSch.Show();
    }

    protected void gvPO_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
        }
    }

    protected void gvPO_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        hdnRowLineNo.Value = e.RowIndex.ToString();
        popAddSch.Show();
        popAlert.Show();
    }

    protected void gvPO_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Find row controls
            TextBox txtUnitPrice = (TextBox)e.Row.FindControl("txtUnitPrice");
            TextBox txtJan = (TextBox)e.Row.FindControl("txtJan");
            TextBox txtFeb = (TextBox)e.Row.FindControl("txtFeb");
            TextBox txtMar = (TextBox)e.Row.FindControl("txtMar");
            TextBox txtApr = (TextBox)e.Row.FindControl("txtApr");
            TextBox txtMay = (TextBox)e.Row.FindControl("txtMay");
            TextBox txtJun = (TextBox)e.Row.FindControl("txtJun");
            TextBox txtJul = (TextBox)e.Row.FindControl("txtJul");
            TextBox txtAug = (TextBox)e.Row.FindControl("txtAug");
            TextBox txtSep = (TextBox)e.Row.FindControl("txtSep");
            TextBox txtOct = (TextBox)e.Row.FindControl("txtOct");
            TextBox txtNov = (TextBox)e.Row.FindControl("txtNov");
            TextBox txtDec = (TextBox)e.Row.FindControl("txtDec");
            DropDownList ddlBudgClss = (DropDownList)e.Row.FindControl("ddlBudgClss");
            //Find row controls

            //Add Attributes to row controls to calculate row/column totals
            txtUnitPrice.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtUnitPrice.ClientID + "')");
            txtJan.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJan.ClientID + "')");
            txtFeb.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtFeb.ClientID + "')");
            txtMar.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMar.ClientID + "')");
            txtApr.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtApr.ClientID + "')");
            txtMay.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMay.ClientID + "')");
            txtJun.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJun.ClientID + "')");
            txtJul.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJul.ClientID + "')");
            txtAug.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtAug.ClientID + "')");
            txtSep.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSep.ClientID + "')");
            txtOct.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtOct.ClientID + "')");
            txtNov.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtNov.ClientID + "')");
            txtDec.Attributes.Add("onkeyup", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtDec.ClientID + "')");

            txtUnitPrice.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtUnitPrice.ClientID + "')");
            txtJan.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJan.ClientID + "')");
            txtFeb.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtFeb.ClientID + "')");
            txtMar.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMar.ClientID + "')");
            txtApr.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtApr.ClientID + "')");
            txtMay.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtMay.ClientID + "')");
            txtJun.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJun.ClientID + "')");
            txtJul.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtJul.ClientID + "')");
            txtAug.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtAug.ClientID + "')");
            txtSep.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtSep.ClientID + "')");
            txtOct.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtOct.ClientID + "')");
            txtNov.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtNov.ClientID + "')");
            txtDec.Attributes.Add("onchange", "javascript:return calcRowTotal(" + e.Row.RowIndex + ", '" + txtDec.ClientID + "')");
            //ddlBudgClss.Attributes.Add("onchange", "javascript:return validateSingleBudgClss('" + ddlBudgClss.ClientID + "');");
            //Add Attributes to row controls to calculate row/column totals

            //Get line number and line sequence
            Label lblLineNum = (Label)e.Row.FindControl("lblLineNum");
            Label lblLineSeq = (Label)e.Row.FindControl("lblLineSeq");
            lblLineNum.Text = (e.Row.RowIndex + 1).ToString();
            lblLineSeq.Text = e.Row.RowIndex.ToString();
            //Get line number and line sequence

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {

        }
        if (e.Row.RowType == DataControlRowType.Footer)
        {

        }
    }

    protected void CreateSchedule(object sender, EventArgs e)
    {
        string retStr = SaveSchedule();
        if (retStr.ToLower().Contains("succes"))
        {
            dvMainMsg.InnerHtml = retStr;
            dvMainMsg.Style["color"] = "Green";
            ClearData();
            Session.Remove("AllSchedules");
            LoadScheduledData();
            popAddSch.Hide();
        }
        else
        {
            DisplayMessage("Red", retStr);
            popAddSch.Show();
        }
    }

    private void BindClassifications(DropDownList ddl)
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable(); 
        
        //check the accounts are by company or by department
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = ddlDept.SelectedValue;
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = string.Empty;
        //check the accounts are by company or by department

        if (Session["dtExpItem"] == null)
        {
            string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ddlDept.SelectedValue, 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtExpItem"] = dt;
        }
        else
            dt = (DataTable)Session["dtExpItem"];
        DataView dtview = new DataView(dt);
        dtv = dtview.ToTable();

        //add new column containing account number and account name seperated with '--'
        if (!dtv.Columns.Contains("AcountClss"))
            dtv.Columns.Add("AcountClss");

        for (int i = 0; i < dtv.Rows.Count; i++)
            dtv.Rows[i]["AcountClss"] = dtv.Rows[i]["acctLongCode"].ToString() + "--" + dtv.Rows[i]["accName"].ToString();
        //add new column containing account number and account name seperated with '--'

        DataTable dtTemp = GetHierarchicalData(dtv, "AcountClss");

        //Session["dtExpItem"] = dtTemp;
        ddl.DataSource = dtTemp.DefaultView.ToTable(true, "AcountClss", "accName");
        ddl.DataTextField = "AcountClss";
        ddl.DataValueField = "accName";
        ddl.DataBind();
        ddl.Items.Insert(0, "Select Account");
        ddl.Items.FindByText("Select Account").Value = "0";
    }

    private void BindItemCodes(DropDownList ddl, string budgClss, Label lblAccCode)
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        string exp = "accName='" + budgClss + "'";
        DataView dt1 = new DataView(dt, exp, "accName", DataViewRowState.CurrentRows);
        if (dt1.ToTable().Rows.Count > 0)
        {
            lblAccCode.Text = dt1.ToTable().Rows[0]["accountCode"].ToString();
            ddl.DataSource = dt1;
            ddl.DataTextField = "ItemCode";
            ddl.DataValueField = "ItemCode";
            ddl.DataBind();
            ddl.Items.Insert(0, "Select Item");
            ddl.Items.FindByText("Select Item").Value = "0";
        }
        else
        {
            lblAccCode.Text = string.Empty;
            ddl.Items.Clear();
        }
    }

    private void SetData()
    {
        dtPO = (DataTable)Session["dtRecurPO"];
        if (dtPO.Rows.Count > 0)
        {
            for (int i = 0; i < dtPO.Rows.Count; i++)
            {
                Label lblLineNum = (Label)gvPO.Rows[i].Cells[0].FindControl("lblLineNum");
                Label lblLineSeq = (Label)gvPO.Rows[i].Cells[1].FindControl("lblLineSeq");
                DropDownList ddlBudgClss = (DropDownList)gvPO.Rows[i].Cells[2].FindControl("ddlBudgClss");
                //BindClassifications(ddlBudgClss);
                Label lblAccCode = (Label)gvPO.Rows[i].Cells[3].FindControl("lblAccCode");
                DropDownList ddlItemCode = (DropDownList)gvPO.Rows[i].Cells[4].FindControl("ddlItemCode");
                //BindItemCodes(ddlItemCode, ddlBudgClss.SelectedValue);
                TextBox txtDescr = (TextBox)gvPO.Rows[i].Cells[5].FindControl("txtDescr");
                TextBox txtUnitPrice = (TextBox)gvPO.Rows[i].Cells[6].FindControl("txtUnitPrice");
                TextBox txtJan = (TextBox)gvPO.Rows[i].Cells[7].FindControl("txtJan");
                TextBox txtFeb = (TextBox)gvPO.Rows[i].Cells[8].FindControl("txtFeb");
                TextBox txtMar = (TextBox)gvPO.Rows[i].Cells[9].FindControl("txtMar");
                TextBox txtApr = (TextBox)gvPO.Rows[i].Cells[10].FindControl("txtApr");
                TextBox txtMay = (TextBox)gvPO.Rows[i].Cells[11].FindControl("txtMay");
                TextBox txtJun = (TextBox)gvPO.Rows[i].Cells[12].FindControl("txtJun");
                TextBox txtJul = (TextBox)gvPO.Rows[i].Cells[13].FindControl("txtJul");
                TextBox txtAug = (TextBox)gvPO.Rows[i].Cells[14].FindControl("txtAug");
                TextBox txtSep = (TextBox)gvPO.Rows[i].Cells[15].FindControl("txtSep");
                TextBox txtOct = (TextBox)gvPO.Rows[i].Cells[16].FindControl("txtOct");
                TextBox txtNov = (TextBox)gvPO.Rows[i].Cells[17].FindControl("txtNov");
                TextBox txtDec = (TextBox)gvPO.Rows[i].Cells[18].FindControl("txtDec");
                TextBox txtTaxPercent = (TextBox)gvPO.Rows[i].Cells[19].FindControl("txtTaxPercent");
                HiddenField hdnTotal = (HiddenField)gvPO.Rows[i].Cells[20].FindControl("hdnTotal");

                //dtPO.Rows[i]["lineNo"] = lblLineNum.Text;
                //dtPO.Rows[i]["lineSeq"] = lblLineSeq.Text;
                dtPO.Rows[i]["budgetClassification"] = ddlBudgClss.SelectedValue;
                dtPO.Rows[i]["accountCode"] = lblAccCode.Text;
                dtPO.Rows[i]["itemCode"] = ddlItemCode.SelectedValue;
                dtPO.Rows[i]["description"] = txtDescr.Text;
                dtPO.Rows[i]["unitPrice"] = ut.NullSafeDouble(txtUnitPrice.Text);
                dtPO.Rows[i]["january"] = ut.NullSafeDouble(txtJan.Text);
                dtPO.Rows[i]["february"] = ut.NullSafeDouble(txtFeb.Text);
                dtPO.Rows[i]["march"] = ut.NullSafeDouble(txtMar.Text);
                dtPO.Rows[i]["april"] = ut.NullSafeDouble(txtApr.Text);
                dtPO.Rows[i]["may"] = ut.NullSafeDouble(txtMay.Text);
                dtPO.Rows[i]["june"] = ut.NullSafeDouble(txtJun.Text);
                dtPO.Rows[i]["july"] = ut.NullSafeDouble(txtJul.Text);
                dtPO.Rows[i]["august"] = ut.NullSafeDouble(txtAug.Text);
                dtPO.Rows[i]["september"] = ut.NullSafeDouble(txtSep.Text);
                dtPO.Rows[i]["october"] = ut.NullSafeDouble(txtOct.Text);
                dtPO.Rows[i]["november"] = ut.NullSafeDouble(txtNov.Text);
                dtPO.Rows[i]["december"] = ut.NullSafeDouble(txtDec.Text);
                dtPO.Rows[i]["taxPercent"] = ut.NullSafeDouble(txtTaxPercent.Text);
                dtPO.Rows[i]["Total"] = ut.NullSafeDouble(hdnTotal.Value);
            }
            Session["dtRecurPO"] = dtPO;
        }
    }

    private DataRow AddEmptyRow(DataRow dr)
    {
        dr["budgetClassification"] = dr["accountCode"] = dr["itemCode"] = dr["description"] = string.Empty;
        //dr["unitPrice"] = dr["january"] = dr["february"] = dr["march"] = dr["april"] = dr["may"] = dr["june"] = dr["july"] = dr["august"] = dr["september"] =
        //    dr["october"] = dr["november"] = dr["december"] = dr["taxPercent"] = dr["Total"] = 0;
        return dr;
    }

    private void AddColumns()
    {
        dtPO.Columns.Add("lineNo");
        dtPO.Columns.Add("lineSeq");
        dtPO.Columns.Add("budgetClassification");
        dtPO.Columns.Add("accountCode");
        dtPO.Columns.Add("itemCode");
        dtPO.Columns.Add("description");
        dtPO.Columns.Add("unitPrice");
        dtPO.Columns.Add("january");
        dtPO.Columns.Add("february");
        dtPO.Columns.Add("march");
        dtPO.Columns.Add("april");
        dtPO.Columns.Add("may");
        dtPO.Columns.Add("june");
        dtPO.Columns.Add("july");
        dtPO.Columns.Add("august");
        dtPO.Columns.Add("september");
        dtPO.Columns.Add("october");
        dtPO.Columns.Add("november");
        dtPO.Columns.Add("december");
        dtPO.Columns.Add("taxPercent");
        dtPO.Columns.Add("Total");
        Session["dtRecurPO"] = dtPO;
    }

    private void SetPreviuosData(DataTable dtPO)
    {
        if (dtPO.Rows.Count > 0)
        {
            for (int i = 0; i < dtPO.Rows.Count; i++)
            {
                Label lblLineNum = (Label)gvPO.Rows[i].Cells[0].FindControl("lblLineNum");
                Label lblLineSeq = (Label)gvPO.Rows[i].Cells[1].FindControl("lblLineSeq");
                DropDownList ddlBudgClss = (DropDownList)gvPO.Rows[i].Cells[2].FindControl("ddlBudgClss");
                Label lblAccCode = (Label)gvPO.Rows[i].Cells[3].FindControl("lblAccCode");
                DropDownList ddlItemCode = (DropDownList)gvPO.Rows[i].Cells[4].FindControl("ddlItemCode");
                TextBox txtDescr = (TextBox)gvPO.Rows[i].Cells[5].FindControl("txtDescr");
                TextBox txtUnitPrice = (TextBox)gvPO.Rows[i].Cells[6].FindControl("txtUnitPrice");
                TextBox txtJan = (TextBox)gvPO.Rows[i].Cells[7].FindControl("txtJan");
                TextBox txtFeb = (TextBox)gvPO.Rows[i].Cells[8].FindControl("txtFeb");
                TextBox txtMar = (TextBox)gvPO.Rows[i].Cells[9].FindControl("txtMar");
                TextBox txtApr = (TextBox)gvPO.Rows[i].Cells[10].FindControl("txtApr");
                TextBox txtMay = (TextBox)gvPO.Rows[i].Cells[11].FindControl("txtMay");
                TextBox txtJun = (TextBox)gvPO.Rows[i].Cells[12].FindControl("txtJun");
                TextBox txtJul = (TextBox)gvPO.Rows[i].Cells[13].FindControl("txtJul");
                TextBox txtAug = (TextBox)gvPO.Rows[i].Cells[14].FindControl("txtAug");
                TextBox txtSep = (TextBox)gvPO.Rows[i].Cells[15].FindControl("txtSep");
                TextBox txtOct = (TextBox)gvPO.Rows[i].Cells[16].FindControl("txtOct");
                TextBox txtNov = (TextBox)gvPO.Rows[i].Cells[17].FindControl("txtNov");
                TextBox txtDec = (TextBox)gvPO.Rows[i].Cells[18].FindControl("txtDec");
                TextBox txtTaxPercent = (TextBox)gvPO.Rows[i].Cells[19].FindControl("txtTaxPercent");
                Label lblTotal = (Label)gvPO.Rows[i].Cells[20].FindControl("lblTotal");

                //lblLineNum.Text = dtPO.Rows[i]["lineNo"].ToString();
                //lblLineSeq.Text = dtPO.Rows[i]["lineSeq"].ToString();
                BindClassifications(ddlBudgClss);
                ddlBudgClss.SelectedValue = dtPO.Rows[i]["budgetClassification"].ToString();
                lblAccCode.Text = dtPO.Rows[i]["accountCode"].ToString();
                BindItemCodes(ddlItemCode, ddlBudgClss.SelectedValue, lblAccCode);
                ddlItemCode.SelectedValue = dtPO.Rows[i]["itemCode"].ToString();
                txtDescr.Text = dtPO.Rows[i]["description"].ToString();
                txtUnitPrice.Text = dtPO.Rows[i]["unitPrice"].ToString();
                txtJan.Text = dtPO.Rows[i]["january"].ToString();
                txtFeb.Text = dtPO.Rows[i]["february"].ToString();
                txtMar.Text = dtPO.Rows[i]["march"].ToString();
                txtApr.Text = dtPO.Rows[i]["april"].ToString();
                txtMay.Text = dtPO.Rows[i]["may"].ToString();
                txtJun.Text = dtPO.Rows[i]["june"].ToString();
                txtJul.Text = dtPO.Rows[i]["july"].ToString();
                txtAug.Text = dtPO.Rows[i]["august"].ToString();
                txtSep.Text = dtPO.Rows[i]["september"].ToString();
                txtOct.Text = dtPO.Rows[i]["october"].ToString();
                txtNov.Text = dtPO.Rows[i]["november"].ToString();
                txtDec.Text = dtPO.Rows[i]["december"].ToString();
                txtTaxPercent.Text = dtPO.Rows[i]["taxPercent"].ToString();
                if (dtPO.Columns.Contains("Total"))
                    lblTotal.Text = dtPO.Rows[i]["Total"].ToString();
            }
        }
    }

    private string SaveSchedule()
    {
        int mFlag = 0;
        foreach (GridViewRow row in gvPO.Rows)
        {
            Label lblLineNum = (Label)row.FindControl("lblLineNum");
            Label lblLineSeq = (Label)row.FindControl("lblLineSeq");
            DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
            Label lblAccCode = (Label)row.FindControl("lblAccCode");
            DropDownList ddlItemCode = (DropDownList)row.FindControl("ddlItemCode");
            TextBox txtDescr = (TextBox)row.FindControl("txtDescr");
            TextBox txtUnitPrice = (TextBox)row.FindControl("txtUnitPrice");
            TextBox txtJan = (TextBox)row.FindControl("txtJan");
            TextBox txtFeb = (TextBox)row.FindControl("txtFeb");
            TextBox txtMar = (TextBox)row.FindControl("txtMar");
            TextBox txtApr = (TextBox)row.FindControl("txtApr");
            TextBox txtMay = (TextBox)row.FindControl("txtMay");
            TextBox txtJun = (TextBox)row.FindControl("txtJun");
            TextBox txtJul = (TextBox)row.FindControl("txtJul");
            TextBox txtAug = (TextBox)row.FindControl("txtAug");
            TextBox txtSep = (TextBox)row.FindControl("txtSep");
            TextBox txtOct = (TextBox)row.FindControl("txtOct");
            TextBox txtNov = (TextBox)row.FindControl("txtNov");
            TextBox txtDec = (TextBox)row.FindControl("txtDec");
            TextBox txtTaxPercent = (TextBox)row.FindControl("txtTaxPercent");

            lineNum += lblLineNum.Text + appString;
            lineSeq += lblLineSeq.Text + appString;
            budgClss += ddlBudgClss.SelectedValue + appString;
            accCode += lblAccCode.Text + appString;
            itemCode += ddlItemCode.SelectedValue + appString;
            descr += txtDescr.Text + appString;
            pricePerUnit += txtUnitPrice.Text + appString;
            jan += txtJan.Text + appString;
            feb += txtFeb.Text + appString;
            mar += txtMar.Text + appString;
            apr += txtApr.Text + appString;
            may += txtMay.Text + appString;
            jun += txtJun.Text + appString;
            jul += txtJul.Text + appString;
            aug += txtAug.Text + appString;
            sept += txtSep.Text + appString;
            oct += txtOct.Text + appString;
            nov += txtNov.Text + appString;
            dec += txtDec.Text + appString;
            taxPercent += (txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text) + appString;
            compCode += ddlCompCode.SelectedValue + appString;
            orgId += Session["OrgID"].ToString() + appString;
            vendor += ddlVendor.SelectedValue + appString;
            schDate += txtSchDate.Text + appString;
            dept += ddlDept.SelectedValue + appString;
            detailsFlg += 1 + appString;
            if (mFlag == 0)
            {
                masterFlg += 1 + appString;
                mFlag = 1;
            }
            else
                masterFlg += 0 + appString;
            addedBy += Session["UserID"].ToString() + appString;
            modifiedBy += Session["UserID"].ToString() + appString;
            schId += lblSchID.Text + appString;
            pkgUnit += "EACH" + appString;
            userId += Session["UserID"].ToString() + appString;
            year += DateTime.Now.Year.ToString() + appString;
            mgrID += ut.NullSafeInteger(ddlManagerEMail.SelectedValue) + appString;
        }

        RecurrPOMulVO recur = new RecurrPOMulVO();
        recur.lineNo = lineNum.Substring(0, lineNum.Length - 3);
        recur.lineSeq = lineSeq.Substring(0, lineSeq.Length - 3);
        recur.budgetClassification = budgClss.Substring(0, budgClss.Length - 3);
        recur.accountCode = accCode.Substring(0, accCode.Length - 3);
        recur.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        recur.description = descr.Substring(0, descr.Length - 3);
        recur.unitPrice = pricePerUnit.Substring(0, pricePerUnit.Length - 3);
        recur.january = jan.Substring(0, jan.Length - 3);
        recur.february = feb.Substring(0, feb.Length - 3);
        recur.march = mar.Substring(0, mar.Length - 3);
        recur.april = apr.Substring(0, apr.Length - 3);
        recur.may = may.Substring(0, may.Length - 3);
        recur.june = jun.Substring(0, jun.Length - 3);
        recur.july = jul.Substring(0, jul.Length - 3);
        recur.august = aug.Substring(0, aug.Length - 3);
        recur.september = sept.Substring(0, sept.Length - 3);
        recur.october = oct.Substring(0, oct.Length - 3);
        recur.november = nov.Substring(0, nov.Length - 3);
        recur.december = dec.Substring(0, dec.Length - 3);
        recur.taxPercent = taxPercent.Substring(0, taxPercent.Length - 3);
        recur.compCode = compCode.Substring(0, compCode.Length - 3);
        recur.orgId = orgId.Substring(0, orgId.Length - 3);
        recur.detailsFlag = detailsFlg.Substring(0, detailsFlg.Length - 3);
        recur.masterFlag = masterFlg.Substring(0, masterFlg.Length - 3);
        recur.preferredVendor = vendor.Substring(0, vendor.Length - 3);
        recur.schdDate = schDate.Substring(0, schDate.Length - 3);
        recur.addedBy = addedBy.Substring(0, addedBy.Length - 3);
        recur.deptCode = dept.Substring(0, dept.Length - 3);
        recur.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
        recur.packageUnit = pkgUnit.Substring(0, pkgUnit.Length - 3);
        recur.schdId = schId.Substring(0, schId.Length - 3);
        recur.userId = userId.Substring(0, userId.Length - 3);
        recur.year = year.Substring(0, year.Length - 3);
        recur.managerId = mgrID.Substring(0, mgrID.Length - 3);
        return xms.addRecurrPOMul(recur);
    }

    void AddFooterColumns()
    {
        dtFooterPO.Columns.Add("FtUnitPrice");
        dtFooterPO.Columns.Add("FtJan");
        dtFooterPO.Columns.Add("FtFeb");
        dtFooterPO.Columns.Add("FtMar");
        dtFooterPO.Columns.Add("FtApr");
        dtFooterPO.Columns.Add("FtMay");
        dtFooterPO.Columns.Add("FtJun");
        dtFooterPO.Columns.Add("FtJul");
        dtFooterPO.Columns.Add("FtAug");
        dtFooterPO.Columns.Add("FtSep");
        dtFooterPO.Columns.Add("FtOct");
        dtFooterPO.Columns.Add("FtNov");
        dtFooterPO.Columns.Add("FtDec");
        dtFooterPO.Columns.Add("FtTotal");
        Session["dtFooterPO"] = dtFooterPO;
    }

    private void SetFooterData()
    {
        if (Session["dtFooterPO"] == null)
            AddFooterColumns();
        dtFooterPO = (DataTable)Session["dtFooterPO"];
        if (dtFooterPO.Rows.Count == 0)
        {
            DataRow dr = dtFooterPO.NewRow();
            dr["FtUnitPrice"] = string.Empty;
            dr["FtJan"] = string.Empty;
            dr["FtFeb"] = string.Empty;
            dr["FtMar"] = string.Empty;
            dr["FtApr"] = string.Empty;
            dr["FtMay"] = string.Empty;
            dr["FtJun"] = string.Empty;
            dr["FtJul"] = string.Empty;
            dr["FtAug"] = string.Empty;
            dr["FtSep"] = string.Empty;
            dr["FtOct"] = string.Empty;
            dr["FtNov"] = string.Empty;
            dr["FtDec"] = string.Empty;
            dr["FtTotal"] = string.Empty;
            dtFooterPO.Rows.Add(dr);
            dtFooterPO.AcceptChanges();
        }
        if (gvPO.Rows.Count > 0)
        {
            HiddenField hdnFtUnitPrice = (HiddenField)gvPO.FooterRow.FindControl("hdnFtUnitPrice");
            HiddenField hdnFtJan = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJan");
            HiddenField hdnFtFeb = (HiddenField)gvPO.FooterRow.FindControl("hdnFtFeb");
            HiddenField hdnFtMar = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMar");
            HiddenField hdnFtApr = (HiddenField)gvPO.FooterRow.FindControl("hdnFtApr");
            HiddenField hdnFtMay = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMay");
            HiddenField hdnFtJun = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJun");
            HiddenField hdnFtJul = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJul");
            HiddenField hdnFtAug = (HiddenField)gvPO.FooterRow.FindControl("hdnFtAug");
            HiddenField hdnFtSep = (HiddenField)gvPO.FooterRow.FindControl("hdnFtSep");
            HiddenField hdnFtOct = (HiddenField)gvPO.FooterRow.FindControl("hdnFtOct");
            HiddenField hdnFtNov = (HiddenField)gvPO.FooterRow.FindControl("hdnFtNov");
            HiddenField hdnFtDec = (HiddenField)gvPO.FooterRow.FindControl("hdnFtDec");
            HiddenField hdnFtTotal = (HiddenField)gvPO.FooterRow.FindControl("hdnFtTotal");

            dtFooterPO.Rows[0]["FtUnitPrice"] = hdnFtUnitPrice.Value;
            dtFooterPO.Rows[0]["FtJan"] = hdnFtJan.Value;
            dtFooterPO.Rows[0]["FtFeb"] = hdnFtFeb.Value;
            dtFooterPO.Rows[0]["FtMar"] = hdnFtMar.Value;
            dtFooterPO.Rows[0]["FtApr"] = hdnFtApr.Value;
            dtFooterPO.Rows[0]["FtMay"] = hdnFtMay.Value;
            dtFooterPO.Rows[0]["FtJun"] = hdnFtJun.Value;
            dtFooterPO.Rows[0]["FtJul"] = hdnFtJul.Value;
            dtFooterPO.Rows[0]["FtAug"] = hdnFtAug.Value;
            dtFooterPO.Rows[0]["FtSep"] = hdnFtSep.Value;
            dtFooterPO.Rows[0]["FtOct"] = hdnFtOct.Value;
            dtFooterPO.Rows[0]["FtNov"] = hdnFtNov.Value;
            dtFooterPO.Rows[0]["FtDec"] = hdnFtDec.Value;
            dtFooterPO.Rows[0]["FtTotal"] = hdnFtTotal.Value;
        }
        Session["dtFooterPO"] = dtFooterPO;
    }

    private void SetPreviousFooterData(DataTable dtFooterPO)
    {
        if (dtFooterPO.Rows.Count > 0)
        {
            HiddenField hdnFtUnitPrice = (HiddenField)gvPO.FooterRow.FindControl("hdnFtUnitPrice");
            HiddenField hdnFtJan = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJan");
            HiddenField hdnFtFeb = (HiddenField)gvPO.FooterRow.FindControl("hdnFtFeb");
            HiddenField hdnFtMar = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMar");
            HiddenField hdnFtApr = (HiddenField)gvPO.FooterRow.FindControl("hdnFtApr");
            HiddenField hdnFtMay = (HiddenField)gvPO.FooterRow.FindControl("hdnFtMay");
            HiddenField hdnFtJun = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJun");
            HiddenField hdnFtJul = (HiddenField)gvPO.FooterRow.FindControl("hdnFtJul");
            HiddenField hdnFtAug = (HiddenField)gvPO.FooterRow.FindControl("hdnFtAug");
            HiddenField hdnFtSep = (HiddenField)gvPO.FooterRow.FindControl("hdnFtSep");
            HiddenField hdnFtOct = (HiddenField)gvPO.FooterRow.FindControl("hdnFtOct");
            HiddenField hdnFtNov = (HiddenField)gvPO.FooterRow.FindControl("hdnFtNov");
            HiddenField hdnFtDec = (HiddenField)gvPO.FooterRow.FindControl("hdnFtDec");
            HiddenField hdnFtTotal = (HiddenField)gvPO.FooterRow.FindControl("hdnFtTotal");

            Label lblFtUnitPrice = (Label)gvPO.FooterRow.FindControl("lblFtUnitPrice");
            Label lblFtJan = (Label)gvPO.FooterRow.FindControl("lblFtJan");
            Label lblFtFeb = (Label)gvPO.FooterRow.FindControl("lblFtFeb");
            Label lblFtMar = (Label)gvPO.FooterRow.FindControl("lblFtMar");
            Label lblFtApr = (Label)gvPO.FooterRow.FindControl("lblFtApr");
            Label lblFtMay = (Label)gvPO.FooterRow.FindControl("lblFtMay");
            Label lblFtJun = (Label)gvPO.FooterRow.FindControl("lblFtJun");
            Label lblFtJul = (Label)gvPO.FooterRow.FindControl("lblFtJul");
            Label lblFtAug = (Label)gvPO.FooterRow.FindControl("lblFtAug");
            Label lblFtSep = (Label)gvPO.FooterRow.FindControl("lblFtSep");
            Label lblFtOct = (Label)gvPO.FooterRow.FindControl("lblFtOct");
            Label lblFtNov = (Label)gvPO.FooterRow.FindControl("lblFtNov");
            Label lblFtDec = (Label)gvPO.FooterRow.FindControl("lblFtDec");
            Label lblFtTotal = (Label)gvPO.FooterRow.FindControl("lblFtTotal");

            lblFtUnitPrice.Text = hdnFtUnitPrice.Value = dtFooterPO.Rows[0]["FtUnitPrice"].ToString();
            lblFtJan.Text = hdnFtJan.Value = dtFooterPO.Rows[0]["FtJan"].ToString();
            lblFtFeb.Text = hdnFtFeb.Value = dtFooterPO.Rows[0]["FtFeb"].ToString();
            lblFtMar.Text = hdnFtMar.Value = dtFooterPO.Rows[0]["FtMar"].ToString();
            lblFtApr.Text = hdnFtApr.Value = dtFooterPO.Rows[0]["FtApr"].ToString();
            lblFtMay.Text = hdnFtMay.Value = dtFooterPO.Rows[0]["FtMay"].ToString();
            lblFtJun.Text = hdnFtJun.Value = dtFooterPO.Rows[0]["FtJun"].ToString();
            lblFtJul.Text = hdnFtJul.Value = dtFooterPO.Rows[0]["FtJul"].ToString();
            lblFtAug.Text = hdnFtAug.Value = dtFooterPO.Rows[0]["FtAug"].ToString();
            lblFtSep.Text = hdnFtSep.Value = dtFooterPO.Rows[0]["FtSep"].ToString();
            lblFtOct.Text = hdnFtOct.Value = dtFooterPO.Rows[0]["FtOct"].ToString();
            lblFtNov.Text = hdnFtNov.Value = dtFooterPO.Rows[0]["FtNov"].ToString();
            lblFtDec.Text = hdnFtDec.Value = dtFooterPO.Rows[0]["FtDec"].ToString();
            lblFtTotal.Text = hdnFtTotal.Value = dtFooterPO.Rows[0]["FtTotal"].ToString();
        }
    }

    private void ClearFooter()
    {
        gvPO.FooterRow.Cells.Clear();
    }

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        int index = ut.NullSafeInteger(hdnRowLineNo.Value);
        DataTable dt = (DataTable)Session["dtRecurPO"];
        dt.Rows[index].Delete();
        dt.AcceptChanges();
        Session["dtRecurPO"] = dt;
        gvPO.DataSource = dt;
        gvPO.DataBind();
        SetPreviuosData(dt);
        ShowGridTotals(dt);
        popAddSch.Show();
        popAlert.Show();
    }

    #endregion

    #region Misc

    //void DisplayFields(string type)
    //{
    //    if (type.ToLower().Contains("new"))
    //    {
    //        lblSchID.Visible = true;
    //        ddlSchID.Visible = false;
    //        btnCreateSch.Visible = true;
    //        btnCancelSch.Visible = true;
    //        btnClearData.Visible = false;
    //        btnViewSch.Visible = true;
    //        btnNewSch.Visible = false;
    //    }
    //    else
    //    {
    //        lblSchID.Visible = false;
    //        ddlSchID.Visible = true;
    //        btnCreateSch.Visible = false;
    //        btnCancelSch.Visible = false;
    //        btnClearData.Visible = false;
    //        btnViewSch.Visible = false;
    //        btnNewSch.Visible = true;
    //    }
    //}

    void ClearFields()
    {
        txtSchDate.Text = string.Empty;
        ddlVendor.SelectedValue = "0";
    }

    void DisplayMessage(string color, string msg)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    void ClearData()
    {
        ddlVendor.SelectedValue = "0";
        txtSchDate.Text = string.Empty;
        foreach (GridViewRow row in gvPO.Rows)
            row.Cells.Clear();
        if (gvPO.FooterRow != null)
            gvPO.FooterRow.Cells.Clear();
        gvPO.DataBind();
    }

    private DataTable GetHierarchicalData(DataTable dt, string col)
    {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            int cnt = 0;
            string s = dt.Rows[i][col].ToString();
            char[] arr = dt.Rows[i][col].ToString().ToCharArray();
            for (int j = 0; j < arr.Length; j++)
            {
                if (arr[j] == ' ')
                    cnt++;
                else
                    break;
            }

            string c = "";
            for (int j = 0; j < cnt; j++)
                c += "&#160;";
            dt.Rows[i][col] = Server.HtmlDecode((c) + s);
        }
        return dt;
    }

    #endregion
}