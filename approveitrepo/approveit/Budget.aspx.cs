using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Globalization;

public partial class Budget : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;
    string newPath = ("ERTemp");
    string accountCode, amount, balanceAfterPO, budget, budgetClassification, compCode, currentBalance, deptCode, description,
        expLineNo, fixedCost, modifiedBy, month, orgId, ourRefNo, packageUnit, period, prefVendor, quantity, remaining,
        remainingFlag, reqId, startDate, type, unitPrice, year, invAmt;
    public char currencySymbol;

    #endregion

    #region Budget

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");

            if (!Page.IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                Session.Remove("SortExpr");
                Session.Remove("SortDir");
                Session.Remove("IsBudgetEdit");
                txtKeywordSearch.Focus();
                LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        Session.Remove("dtBudget");
        //lblOrgID.Text = Session["SOrgName"].ToString();
        BindCompCodes();
        BindDept();
        BindYears();
        BindMonths(ddlMonth);
        BindBudgetGrid();
        CalculateBudgetTotals();
        ShowPeriod();
        GetCurrencySymbol();
        btnSaveGrid.Visible = false;
        btnCancelEditGrid.Visible = false;
    }

    private void ShowPeriod()
    {
        DataTable dtBudget = (DataTable)Session["dtBudget"];
        int isOpen = 0;
        if (ddlDept.SelectedValue == "0")
        {
            for (int i = 0; i < dtBudget.Rows.Count; i++)
            {
                if (dtBudget.Rows[i]["period"].ToString().ToLower() == "open" || dtBudget.Rows[i]["period"].ToString() == string.Empty)
                {
                    isOpen++;
                    break;
                }
            }
            if (isOpen > 0)
                txtPeriod.Text = "OPEN";
            else
                txtPeriod.Text = "CLOSE";
        }
        else
        {
            if (dtBudget.Rows.Count > 0)
                txtPeriod.Text = dtBudget.Rows[0]["period"].ToString() == string.Empty ? "OPEN" : dtBudget.Rows[0]["period"].ToString();
            else
                txtPeriod.Text = string.Empty;
        }

        if (txtPeriod.Text.ToLower() == "open")
        {
            btnSavePeriod.Text = "Close";
            btnSavePeriod.Visible = true;
        }
        else if (txtPeriod.Text.ToLower() == "close" || txtPeriod.Text == string.Empty)
        {
            btnSavePeriod.Text = "Open";
            btnSavePeriod.Visible = true;
        }
        else
            btnSavePeriod.Visible = false;
    }

    string GetOrgName()
    {
        var orgDetails = xms.getOrgDetails(ut.NullSafeInteger(Session["OrgID"]), Session["Email"].ToString());
        List<OrgListVO> org = ser.Deserialize<List<OrgListVO>>(orgDetails);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(org));
        return ds.Tables[0].Rows[0]["Name"].ToString();
    }

    private void BindCompCodes()
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
        ddlCompCode.DataTextField = "BusinessType";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        if (Session["PrevBudgetCompCd"] == null)
            ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        else
            ddlCompCode.SelectedValue = Session["PrevBudgetCompCd"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    private void BindDept()
    {
        string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        ddlDept.DataSource = dt;
        ddlDept.DataTextField = "Description";
        ddlDept.DataValueField = "CodeKey";
        ddlDept.DataBind();
        ddlDept.Items.Insert(0, "All");
        ddlDept.Items.FindByText("All").Value = "0";
        if (Session["PrevBudgetDept"] != null)
            ddlDept.SelectedValue = Session["PrevBudgetDept"].ToString();
    }

    private void BindYears()
    {
        DataTable dt1 = new DataTable();
        POBudgetVO budget = new POBudgetVO();
        budget.compCode = ddlCompCode.SelectedValue;
        budget.deptCode = string.Empty;
        budget.orgId = ut.NullSafeInteger(Session["OrgID"]);
        budget.month = string.Empty;
        budget.year = 0;
        budget.budgetClassification = string.Empty;
        budget.balanceAfterPO = 0;
        budget.fixedCost = 0;
        budget.remainingFlag = string.Empty;
        budget.prefVendor = string.Empty;
        budget.budget = 0;
        string str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lst = ser.Deserialize<List<POBudgetVO>>(str);
        dt1 = Utility.ConvertToDataTable(lst);
        Session["PrevBudget"] = dt1;



        ddlYear.DataSource = dt1;
        ddlYear.DataTextField = "budget";
        ddlYear.DataValueField = "budget";
        ddlYear.DataBind();

        if (Session["BudgetYear"] != null)
            ddlYear.SelectedValue = Session["BudgetYear"].ToString();
        else
            ddlYear.SelectedValue = DateTime.Now.Year.ToString();
    }

    private void BindMonths(DropDownList ddl)
    {
        DateTime month = Convert.ToDateTime("1/1/2000");
        for (int i = 0; i < 12; i++)
        {
            DateTime NextMont = month.AddMonths(i);
            ListItem list = new ListItem();
            list.Text = NextMont.ToString("MMMM").ToUpper();
            list.Value = NextMont.ToString("MMMM").ToUpper();
            ddl.Items.Add(list);
        }
        if (Session["BudgetMonth"] != null)
            ddl.SelectedValue = Session["BudgetMonth"].ToString();
        else
            ddl.SelectedValue = DateTime.Now.AddMonths(0).ToString("MMMM").ToUpper();
    }

    private void BindBudgetClassification()
    {
        //string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ddlDept.SelectedValue == "0" ? "All" : ddlDept.SelectedValue, 2, string.Empty);
        //List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        //DataTable dt = Utility.ConvertToDataTable(lst);
        //ddlBudgClss.DataSource = dt;
        //ddlBudgClss.DataTextField = "ExpItem";
        //ddlBudgClss.DataTextField = "ExpItem";
        //ddlBudgClss.DataBind();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        if (Session["IsBudgetEdit"] == null)
        {
            LinkButton lnk = sender as LinkButton;
            Session["Control_Budget"] = lnk.ID;

            if (Session["SortDir_Budget"] == null || Session["SortDir_Budget"].ToString() == "Desc")
                Session["SortDir_Budget"] = "Asc";
            else
                Session["SortDir_Budget"] = "Desc";

            Session["SortExpr_Budget"] = e.CommandArgument;
            BindBudgetGrid();
        }
    }

    private void BindBudgetGrid()
    {
        DataTable dt = new DataTable();
        if (Session["dtBudget"] == null)
        {
            POBudgetVO budget = new POBudgetVO();
            budget.compCode = ddlCompCode.SelectedValue;
            budget.deptCode = ddlDept.SelectedValue == "0" ? "All" : ddlDept.SelectedValue;
            budget.orgId = ut.NullSafeInteger(Session["OrgID"]);
            budget.month = ddlMonth.SelectedValue;
            budget.year = ut.NullSafeInteger(ddlYear.SelectedValue);
            budget.budgetClassification = string.Empty;
            budget.balanceAfterPO = 0;
            budget.fixedCost = 0;
            budget.remainingFlag = string.Empty;
            budget.prefVendor = string.Empty;
            string str = xms.getDeptBudgetDetails(budget);
            List<POBudgetVO> lst = ser.Deserialize<List<POBudgetVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["dtBudget"] = dt;
        }
        else
            dt = (DataTable)Session["dtBudget"];

        if ((Session["SortExpr_Budget"] != null) && Session["SortDir_Budget"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Budget"].ToString() + " " + Session["SortDir_Budget"].ToString();
            gvBudget.DataSource = view;
            DataTable dtSorted = view.ToTable();
            //Session["dtBudget"] = dtSorted;
            Session["dtBudget"] = GetHierarchicalData(dtSorted, "budgetClassification");
        }
        else
        {
            gvBudget.DataSource = GetHierarchicalData(dt, "budgetClassification");
            //gvBudget.DataSource = dt;
        }
        gvBudget.DataBind();
        if (gvBudget.Rows.Count == 0)
            btnEditGrid.Visible = false;
        else
            btnEditGrid.Visible = true;
        btnSaveGrid.Visible = false;
        btnCancelEditGrid.Visible = false;
    }

    protected void gvBudget_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvBudget.PageIndex = e.NewPageIndex;
        BindBudgetGrid();
    }

    protected void gvBudget_RowCommand(object sender, GridViewCommandEventArgs e)
    { }

    protected void gvBudget_RowEditing(object sender, GridViewEditEventArgs e)
    { }

    protected void gvBudget_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnRemFlag = (HiddenField)e.Row.FindControl("hdnRemFlag");

            if (hdnRemFlag.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "";
                e.Row.Style["background-color"] = "#FFCCCC";
            }

            TextBox txtEditBudget = (TextBox)e.Row.FindControl("txtEditBudget");
            TextBox txtEditFxdCost = (TextBox)e.Row.FindControl("txtEditFxdCost");
            TextBox txtEditDescr = (TextBox)e.Row.FindControl("txtEditDescr");
            TextBox txtEditRem = (TextBox)e.Row.FindControl("txtEditRem");
            HiddenField hdnCurrEditBudget = (HiddenField)e.Row.FindControl("hdnCurrEditBudget");
            HiddenField hdnCurrEditFxdCost = (HiddenField)e.Row.FindControl("hdnCurrEditFxdCost");
            HiddenField hdnCurrEditRem = (HiddenField)e.Row.FindControl("hdnCurrEditRem");
            Label lblBudget = (Label)e.Row.FindControl("lblBudget");
            Label lblRem = (Label)e.Row.FindControl("lblRem");
            LinkButton lnkBdgHistory = (LinkButton)e.Row.FindControl("lnkBdgHistory");
            txtEditBudget.Attributes.Add("onkeyup", "javascript:return OnChangeGridBudget('" + txtEditBudget.ClientID + "', '" + txtEditRem.ClientID + "', '" + txtEditFxdCost.ClientID + "', '" + hdnCurrEditBudget.ClientID + "', '" + hdnCurrEditFxdCost.ClientID + "',  '" + hdnCurrEditRem.ClientID + "','" + e.Row.RowIndex + "', event);");
            txtEditFxdCost.Attributes.Add("onkeyup", "javascript:return OnChangeGridBudget('" + txtEditBudget.ClientID + "', '" + txtEditRem.ClientID + "', '" + txtEditFxdCost.ClientID + "', '" + hdnCurrEditBudget.ClientID + "', '" + hdnCurrEditFxdCost.ClientID + "',  '" + hdnCurrEditRem.ClientID + "','" + e.Row.RowIndex + "', event);");
            txtEditDescr.Attributes.Add("onkeyup", "javascript:return OnChangeGridBudget('" + txtEditBudget.ClientID + "', '" + txtEditRem.ClientID + "', '" + txtEditFxdCost.ClientID + "', '" + hdnCurrEditBudget.ClientID + "', '" + hdnCurrEditFxdCost.ClientID + "',  '" + hdnCurrEditRem.ClientID + "','" + e.Row.RowIndex + "', event);");
            txtEditRem.Attributes.Add("readonly", "readonly");
            if (ut.NullSafeDouble(lblBudget.Text) != ut.NullSafeDouble(lblRem.Text))
                lnkBdgHistory.Visible = true;
            else
                lnkBdgHistory.Visible = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over


            //align columns
            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "right";
            e.Row.Cells[4].Style["text-align"] = "right";
            e.Row.Cells[5].Style["text-align"] = "right";
            e.Row.Cells[6].Style["text-align"] = "left";
            //e.Row.Cells[3].HorizontalAlign = HorizontalAlign.Left;
            //align columns
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Budget"] != null && Session["Control_Budget"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Budget"].ToString());
                if (Session["SortDir_Budget"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("SortExpr");
        Session.Remove("SortDir");
        LoadData();
    }

    protected void GetBudgetDetails(object sender, EventArgs e)
    {
        dvCopyConfMsg.InnerHtml = string.Empty;
        Session.Remove("dtBudget");
        Session["PrevBudgetCompCd"] = ddlCompCode.SelectedValue;
        Session["PrevBudgetDept"] = ddlDept.SelectedValue;
        Session["BudgetYear"] = ddlYear.SelectedValue;
        Session["BudgetMonth"] = ddlMonth.SelectedValue;
        BindBudgetGrid();
        CalculateBudgetTotals();
        ShowPeriod();
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

    private void CalculateBudgetTotals()
    {
        DataTable dt = (DataTable)Session["dtBudget"];
        if (dt.Rows.Count > 0)
        {
            double totAllc = 0;
            double totRem = 0;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                totAllc += ut.NullSafeDouble(dt.Rows[i]["budget"]);
                totRem += ut.NullSafeDouble(dt.Rows[i]["remaining"]);
            }
            lblTotAllcAmnt.Text = totAllc == 0 ? "0" : totAllc.ToString("#.###");
            lblTotRemAmnt.Text = totRem == 0 ? "0" : totRem.ToString("#.###");
            dvTotals.Style["display"] = "block";
        }
        else
            dvTotals.Style["display"] = "none";
    }

    protected void SaveCategory(object sender, EventArgs e)
    {
        if (gvBudget.Rows.Count > 0)
        {
            if (ddlDept.SelectedValue != "0")
                SavePeriod();
            else
            {
                lblConfirmPeriodChange.Text = "This period will be updated to all the departments. Are you sure you want to continue?";
                popConfirmPeriodUpd.Show();
            }
        }
        else
        {
            dvCopyConfMsg.Style["color"] = "Red";
            dvCopyConfMsg.InnerHtml = "You cannot change Period for an empty Budget data.";
        }
    }

    private void SavePeriod()
    {
        dvMsg.InnerHtml = string.Empty;
        POBudgetVO budget = new POBudgetVO();
        budget.compCode = ddlCompCode.SelectedValue;
        budget.deptCode = ddlDept.SelectedValue == "0" ? "All" : ddlDept.SelectedValue;
        budget.orgId = ut.NullSafeInteger(Session["OrgID"]);
        budget.month = ddlMonth.SelectedValue;
        budget.year = ut.NullSafeInteger(ddlYear.SelectedValue);
        budget.budgetClassification = string.Empty;
        budget.balanceAfterPO = 0;
        budget.fixedCost = 0;
        budget.remainingFlag = string.Empty;
        budget.prefVendor = string.Empty;
        budget.period = txtPeriod.Text.ToLower() == "open" ? "CLOSE" : "OPEN";
        budget.type = 3;
        string str = xms.updatePOBudget(budget);
        if (str.ToLower().Contains("succes"))
        {
            dvCopyConfMsg.Style["color"] = "Green";
            Session.Remove("dtBudget");
            BindBudgetGrid();
            DataTable dtBudget = (DataTable)Session["dtBudget"];
            txtPeriod.Text = dtBudget.Rows[0]["period"].ToString();
            // btnSavePeriod.Text = txtPeriod.Text.ToLower() == "open" ? "CLOSE" : "OPEN";
            if (txtPeriod.Text.ToLower() == "open")
                btnSavePeriod.Text = "Close";
            else
                btnSavePeriod.Text = "Open";
            GetCurrencySymbol();
        }
        else
            dvCopyConfMsg.Style["color"] = "Red";
        dvCopyConfMsg.InnerHtml = str;
    }

    protected void ConfirmPeriodChange(object sender, EventArgs e)
    {
        SavePeriod();
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

    #region History

    private void GetCurrencySymbol()
    {
        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv.ToTable().Rows[0]["CodeValue1"]);
    }

    protected void DisplayBudgetHistory(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        dvMsg.InnerHtml = string.Empty;
        Session.Remove("BudgetHist");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblAccCode = (Label)row.FindControl("lblAccCode");
        HiddenField hdnDept = (HiddenField)row.FindControl("hdnDept");
        hdnSelAccCode.Value = lblAccCode.Text;
        hdnDeptExt.Value = hdnDept.Value;
        BindBudgetHistGrid();
        popHist.Show();
    }

    private void BindBudgetHistGrid()
    {
        DataTable dt = new DataTable();
        if (Session["BudgetHist"] == null)
        {
            POBudgetVO budget = new POBudgetVO();
            budget.accountCode = hdnSelAccCode.Value;
            budget.budgetClassification = string.Empty;
            budget.compCode = ddlCompCode.SelectedValue;
            budget.deptCode = hdnDeptExt.Value;
            budget.month = ddlMonth.SelectedValue;
            budget.orgId = ut.NullSafeInteger(Session["OrgID"]);
            budget.year = ut.NullSafeInteger(ddlYear.SelectedValue);
            string str = xms.getPOBudgetHist(budget);
            List<POBudgetVO> lst = ser.Deserialize<List<POBudgetVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["BudgetHist"] = dt;
        }
        else
            dt = (DataTable)Session["BudgetHist"];
        if ((Session["SortExpr_Hist"] != null) && Session["SortDir_Hist"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Hist"].ToString() + " " + Session["SortDir_Hist"].ToString();
            gvHist.DataSource = view;
        }
        else
            gvHist.DataSource = dt;
        gvHist.DataBind();
        ShowBudgHistTransCount();
    }

    private void ShowBudgHistTransCount()
    {
        if (gvHist.Rows.Count > 0)
        {
            dvBudgHistGridRecCount.Style["display"] = "block";
            //display row count
            lblBudgHistGridRowCount.Text = gvHist.Rows.Count.ToString();

            //display total amount
            GetCurrencySymbol();
            double totAmnt = 0;
            DataTable dt = (DataTable)Session["BudgetHist"];
            foreach (DataRow row in dt.Rows)
                totAmnt += ut.NullSafeDouble(row["amount"].ToString());

            lblBudgHistGridTotalAmount.Text = currencySymbol + totAmnt.ToString("0,0.0",
                CultureInfo.InvariantCulture);
        }
        else
            dvBudgHistGridRecCount.Style["display"] = "none";
    }

    protected void SortExpression_Hist(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Hist"] = lnk.ID;

        if (Session["SortDir_Hist"] == null || Session["SortDir_Hist"].ToString() == "Desc")
            Session["SortDir_Hist"] = "Asc";
        else
            Session["SortDir_Hist"] = "Desc";

        Session["SortExpr_Hist"] = e.CommandArgument;
        BindBudgetHistGrid();
        popHist.Show();
    }

    protected void gvHist_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvHist.PageIndex = e.NewPageIndex;
        BindBudgetHistGrid();
    }

    protected void gvHist_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_Hist"] != null && Session["Control_Hist"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Hist"].ToString());
                if (Session["SortDir_Hist"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    #endregion

    #region Copy Budget Details

    protected void CopyBudgetDetails(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");

        ClearCalendars();
        BindYears(1, ddlCopyFromYear);
        BindYears(2, ddlCopyToYear);
        BindMonths(ddlCopyFromMonth);
        BindMonths(ddlCopyToMonth);
        hdnCopyType.Value = "2";
        popCopyBudget.Show();
    }

    protected void CopyAccountCodes(object sender, EventArgs e)
    {
        hdnCopyType.Value = "1";
        lblCopyAlert.Text = "Are you sure you want to copy AccountCodes of December month to next year?";
        popCopyConfirm.Show();
    }

    private void BindYears(int type, DropDownList ddl)
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Year");
        if (type == 1)
        {
            int yr = DateTime.Now.AddYears(-1).Year;
            for (int i = yr; i <= (yr + 1); i++)
            {
                dr = dt.NewRow();
                dr["Year"] = i;
                dt.Rows.Add(dr);
            }
        }
        else
        {
            int yr = DateTime.Now.AddYears(0).Year;
            for (int i = yr; i <= (yr + 2); i++)
            {
                dr = dt.NewRow();
                dr["Year"] = i;
                dt.Rows.Add(dr);
            }
        }
        dt.AcceptChanges();
        ddl.DataSource = dt;
        ddl.DataTextField = "Year";
        ddl.DataValueField = "Year";
        ddl.DataBind();
    }

    protected void CopySelected(object sender, EventArgs e)
    {
        lblCopyAlert.Text = "Are you sure you want to copy Budget details to selected month?";
        popCopyConfirm.Show();
        popCopyBudget.Show();
    }

    protected void ConfirmCopy(object sender, EventArgs e)
    {
        AddPOBudgetVO budg = new AddPOBudgetVO();
        budg.addedBy = ut.NullSafeInteger(Session["UserID"]);
        budg.compCode = Session["CompCode"].ToString();
        budg.deptCode = ddlDept.SelectedValue == "0" ? "All" : ddlDept.SelectedValue;
        budg.orgId = ut.NullSafeInteger(Session["OrgID"]);
        if (hdnCopyType.Value == "1")
        {
            DataTable dt = (DataTable)Session["PrevBudget"];
            //budg.fromYear = DateTime.Now.Year;
            budg.fromYear = ut.NullSafeInteger(dt.Rows[0]["Budget"]);
            budg.fromMonth = string.Empty;
            budg.toMonth = string.Empty;
            //budg.toYear = DateTime.Now.AddYears(1).Year;
            budg.toYear = ut.NullSafeInteger(dt.Rows[0]["Budget"]) + 1;
            budg.type = 1;
        }
        else
        {
            budg.fromYear = ut.NullSafeInteger(ddlCopyFromYear.SelectedValue);
            budg.fromMonth = ddlCopyFromMonth.SelectedValue;
            budg.toMonth = ddlCopyToMonth.SelectedValue;
            budg.toYear = ut.NullSafeInteger(ddlCopyToYear.SelectedValue);
            budg.type = 2;
        }
        string retStr = xms.addPOBudget(budg);
        if (retStr.ToLower().Contains("succes"))
        {
            if (hdnCopyType.Value == "2")
                dvMainMsg.Style["color"] = "Green";
            else
                dvMainMsg.Style["color"] = "Green";
            Session.Remove("dtBudget");
            BindYears();
            BindBudgetGrid();
            popCopyConfirm.Hide();
        }
        else
        {
            dvMainMsg.Style["color"] = "Red";
            popCopyConfirm.Show();
        }
        dvMainMsg.InnerHtml = retStr;
    }

    void ClearCalendars()
    {
        ddlCopyToMonth.Items.Clear();
        ddlCopyFromMonth.Items.Clear();
        ddlCopyFromYear.Items.Clear();
        ddlCopyToYear.Items.Clear();
    }

    #endregion

    #region EditBudgetData

    protected void EditBudgetGrid(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        dvMsg.InnerHtml = string.Empty;
        dvCopyConfMsg.InnerHtml = string.Empty;
        if (txtPeriod.Text.ToLower() == "open")
        {
            foreach (GridViewRow row in gvBudget.Rows)
            {
                Label lblBudget = (Label)row.FindControl("lblBudget");
                Label lblRem = (Label)row.FindControl("lblRem");
                Label lblFxdCost = (Label)row.FindControl("lblFxdCost");
                Label lblDescr = (Label)row.FindControl("lblDescr");

                TextBox txtEditBudget = (TextBox)row.FindControl("txtEditBudget");
                TextBox txtEditFxdCost = (TextBox)row.FindControl("txtEditFxdCost");
                TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
                TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");

                HiddenField hdnCurrEditBudget = (HiddenField)row.FindControl("hdnCurrEditBudget");
                HiddenField hdnCurrEditRem = (HiddenField)row.FindControl("hdnCurrEditRem");
                HiddenField hdnCurrEditFxdCost = (HiddenField)row.FindControl("hdnCurrEditFxdCost");

                txtEditBudget.Text = lblBudget.Text;
                txtEditFxdCost.Text = lblFxdCost.Text;
                txtEditDescr.Text = lblDescr.Text;
                txtEditRem.Text = lblRem.Text;
                hdnCurrEditBudget.Value = lblBudget.Text;
                hdnCurrEditRem.Value = lblRem.Text;
                hdnCurrEditFxdCost.Value = lblFxdCost.Text;
                txtEditDescr.Style["border"] = "1px solid #ccc";
            }
            ToggleGridFields(false, true);

            btnEditGrid.Visible = false;
            btnSaveGrid.Visible = true;
            btnCancelEditGrid.Visible = true;
            Session["IsBudgetEdit"] = "Y";
        }
        else
        {
            dvCopyConfMsg.Style["color"] = "Red";
            if (ddlDept.SelectedValue == "0")
                dvCopyConfMsg.InnerHtml = "Cannot Edit Data since all the Departments are CLOSED or have period unassigned.";
            else
                dvCopyConfMsg.InnerHtml = "Cannot Edit Data since selected Department is CLOSED or has period unassigned.";
        }
    }

    protected void SaveBudgetGrid(object sender, EventArgs e)
    {
        bool updated = false;
        bool mandatoryDesc = false;
        DataTable dtBudget = (DataTable)Session["dtBudget"];

        string[] arr = new string[gvBudget.Rows.Count];
        foreach (GridViewRow row in gvBudget.Rows)
        {
            TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");
            TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
            if (ut.NullSafeDouble(txtEditRem.Text) != ut.NullSafeDouble(dtBudget.Rows[row.RowIndex]["remaining"]) && (txtEditDescr.Text == dtBudget.Rows[row.RowIndex]["description"].ToString() || txtEditDescr.Text == string.Empty))
            {
                txtEditDescr.Style["border"] = "1px solid Red";
                dvMsg.Style["color"] = "Red";
                dvMsg.InnerHtml = "Please provide reason for Budget Remaining change.";
                mandatoryDesc = true;
                arr[row.RowIndex] = txtEditDescr.ID;
            }
        }

        if (mandatoryDesc == false)
        {
            foreach (GridViewRow row in gvBudget.Rows)
            {
                TextBox txtEditBudget = (TextBox)row.FindControl("txtEditBudget");
                TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");
                TextBox txtEditFxdCost = (TextBox)row.FindControl("txtEditFxdCost");
                TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
                Label lblAccCode = (Label)row.FindControl("lblAccCode");
                HiddenField hdnDept = (HiddenField)row.FindControl("hdnDept");

                if (ut.NullSafeDouble(txtEditBudget.Text) != ut.NullSafeDouble(dtBudget.Rows[row.RowIndex]["budget"]) ||
                       ut.NullSafeDouble(txtEditRem.Text) != ut.NullSafeDouble(dtBudget.Rows[row.RowIndex]["remaining"]) ||
                       ut.NullSafeDouble(txtEditFxdCost.Text) != ut.NullSafeDouble(dtBudget.Rows[row.RowIndex]["fixedCost"]) ||
                       txtEditDescr.Text != dtBudget.Rows[row.RowIndex]["description"].ToString())
                {
                    POBudgetVO budget = new POBudgetVO();
                    budget.accountCode = lblAccCode.Text;
                    budget.amount = 0;
                    budget.balanceAfterPO = 0;
                    budget.budget = ut.NullSafeDouble(txtEditBudget.Text);
                    budget.budgetClassification = string.Empty;
                    budget.compCode = ddlCompCode.SelectedValue;
                    budget.currentBalance = 0;
                    budget.deptCode = hdnDept.Value;
                    budget.description = txtEditDescr.Text;
                    budget.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
                    budget.month = ddlMonth.SelectedValue;
                    budget.orgId = ut.NullSafeInteger(Session["OrgID"]);
                    budget.ourRefNo = string.Empty;
                    budget.packageUnit = string.Empty;
                    budget.prefVendor = string.Empty;
                    budget.quantity = 0;
                    budget.remaining = ut.NullSafeDouble(txtEditRem.Text);
                    budget.reqId = 0;
                    budget.startDate = string.Empty;
                    budget.unitPrice = 0;
                    budget.year = ut.NullSafeInteger(ddlYear.SelectedValue);
                    budget.fixedCost = ut.NullSafeDouble(txtEditFxdCost.Text);
                    budget.type = 2;
                    budget.period = txtPeriod.Text;
                    string retStr = xms.updatePOBudget(budget);
                    if (retStr.ToLower().Contains("succes"))
                    {
                        updated = true;
                        txtEditDescr.Style["border"] = "1px solid #ccc";
                    }
                }

            }
            if (mandatoryDesc == false)
            {
                if (updated == true)
                {
                    dvMsg.Style["color"] = "Green";
                    Session.Remove("dtBudget");
                    BindBudgetGrid();
                    CalculateBudgetTotals();
                    dvMsg.InnerHtml = "Details updated successfully.";
                    Clearfields();
                    ToggleGridFields(true, false);
                    btnEditGrid.Visible = true;
                    btnSaveGrid.Visible = false;
                    btnCancelEditGrid.Visible = false;
                    Session.Remove("IsBudgetEdit");
                }
                else
                {
                    dvMsg.Style["color"] = "Red";
                    dvMsg.InnerHtml = "No changes to update.";
                }
            }
        }
        else
        {
            foreach (GridViewRow row in gvBudget.Rows)
            {
                TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");
                TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
                if (txtEditRem.Text != dtBudget.Rows[row.RowIndex]["remaining"].ToString() && txtEditDescr.Text == string.Empty)
                {
                    txtEditRem.Focus();
                    break;
                }
            }
        }
    }

    protected void CancelGridEdit(object sender, EventArgs e)
    {
        dvMsg.InnerHtml = string.Empty;
        ToggleGridFields(true, false);
        btnEditGrid.Visible = true;
        btnSaveGrid.Visible = false;
        btnCancelEditGrid.Visible = false;

        foreach (GridViewRow row in gvBudget.Rows)
        {
            TextBox txtEditBudget = (TextBox)row.FindControl("txtEditBudget");
            TextBox txtEditFxdCost = (TextBox)row.FindControl("txtEditFxdCost");
            TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
            TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");

            HiddenField hdnCurrEditBudget = (HiddenField)row.FindControl("hdnCurrEditBudget");
            HiddenField hdnCurrEditRem = (HiddenField)row.FindControl("hdnCurrEditRem");
            HiddenField hdnCurrEditFxdCost = (HiddenField)row.FindControl("hdnCurrEditFxdCost");

            txtEditBudget.Text = string.Empty;
            txtEditFxdCost.Text = string.Empty;
            txtEditDescr.Text = string.Empty;
            txtEditRem.Text = string.Empty;
            hdnCurrEditBudget.Value = string.Empty;
            hdnCurrEditRem.Value = string.Empty;
            hdnCurrEditFxdCost.Value = string.Empty;
        }
        Session.Remove("IsBudgetEdit");
    }

    private void ToggleGridFields(bool lblEnabled, bool txtEnabled)
    {
        DataTable dtBudget = (DataTable)Session["dtBudget"];
        foreach (GridViewRow row in gvBudget.Rows)
        {
            Label lblBudget = (Label)row.FindControl("lblBudget");
            Label lblFxdCost = (Label)row.FindControl("lblFxdCost");
            Label lblDescr = (Label)row.FindControl("lblDescr");
            Label lblRem = (Label)row.FindControl("lblRem");
            HiddenField hdnAccntCtrlFlg = (HiddenField)row.FindControl("hdnAccntCtrlFlg");

            TextBox txtEditBudget = (TextBox)row.FindControl("txtEditBudget");
            TextBox txtEditFxdCost = (TextBox)row.FindControl("txtEditFxdCost");
            TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
            TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");
            HtmlControl lblMandt = (HtmlControl)row.FindControl("lblMandt");

            if (dtBudget.Rows[row.RowIndex]["period"].ToString().ToLower() == "open" || string.IsNullOrEmpty(dtBudget.Rows[row.RowIndex]["period"].ToString().ToLower()))
            {
                lblRem.Visible = lblBudget.Visible = lblFxdCost.Visible = lblDescr.Visible = lblEnabled;
                txtEditRem.Visible = txtEditBudget.Visible = txtEditFxdCost.Visible = txtEditDescr.Visible =
                   lblMandt.Visible = txtEnabled;

                //if (hdnAccntCtrlFlg.Value.ToLower() == "y")
                //    txtEditBudget.Visible = txtEditFxdCost.Visible = txtEditDescr.Visible = txtEditRem.Visible = false;
                //else if (txtEnabled)
                //    txtEditBudget.Visible = txtEditFxdCost.Visible = txtEditDescr.Visible = txtEditRem.Visible = true;
                //else
                //    txtEditBudget.Visible = txtEditFxdCost.Visible = txtEditDescr.Visible = txtEditRem.Visible = txtEnabled;
            }
        }
    }

    private void Clearfields()
    {
        foreach (GridViewRow row in gvBudget.Rows)
        {
            TextBox txtEditBudget = (TextBox)row.FindControl("txtEditBudget");
            TextBox txtEditFxdCost = (TextBox)row.FindControl("txtEditFxdCost");
            TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");
            TextBox txtEditRem = (TextBox)row.FindControl("txtEditRem");
            txtEditBudget.Text = string.Empty;
            txtEditFxdCost.Text = string.Empty;
            txtEditDescr.Text = string.Empty;
            txtEditRem.Text = string.Empty;
        }
    }

    #endregion

    #region Import Budget Data

    protected void btlDisplayData_Click(object sender, EventArgs e)
    {
        dvDisplay.Style["display"] = "none";
        dvUpload.Style["display"] = "block";
        dvUploadErr.InnerHtml = string.Empty; string fileExtension = Path.GetExtension(fupdBudget.PostedFile.FileName);
        if (fileExtension == ".xls" || fileExtension == ".xlsx")
        {
            DataTable dt = GetUploadedData();
            DataTable dtUpd = RemoveBlankRows(dt);
            //Add extra column in the datatable to show failure messages if any
            if (!(dtUpd.Columns.Contains("FailureMessage")))
                dtUpd.Columns.Add("FailureMessage");
            Session["dtUpd_Budget"] = dtUpd;
            gvImpBudg.DataSource = dtUpd;
            gvImpBudg.DataBind();
            gvImpBudg.Columns[0].Visible = false;
        }
        popUpload.Show();
    }

    protected void btnClearData_Click(object sender, EventArgs e)
    {
        Session.Remove("dtUpd_Budget");
        gvImpBudg.DataBind();
        popUpload.Show();
        dvDisplay.Style["display"] = "block";
        dvUpload.Style["display"] = "none";
        dvUploadErr.InnerHtml = string.Empty;
    }

    protected void UploadBudgetData(object sender, EventArgs e)
    {
        btnDisplayData.Attributes.Add("onclick", "javascript:return  CheckForFile();");
        dvDisplay.Style["display"] = "block";
        dvUpload.Style["display"] = "none";
        dvUploadErr.InnerHtml = string.Empty;
        dvMsg.InnerHtml = string.Empty;
        dvUploadErr.Style["color"] = "Red";
        dvUploadErr.InnerHtml = "Please browse and select a file of type .xls or .xlsx";
        Session.Remove("dtUpd_Budget");
        gvImpBudg.DataBind();
        popUpload.Show();
    }

    protected void UploadBudget(object sender, EventArgs e)
    {
        DataTable dtUpd = (DataTable)Session["dtUpd_Budget"];
        ValidateBudgetData(dtUpd);
    }

    private DataTable RemoveBlankRows(DataTable dt)
    {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            if (dt.Rows[i]["DEPARTMENT"] == DBNull.Value && dt.Rows[i]["YEAR"] == DBNull.Value && dt.Rows[i]["MONTH"] == DBNull.Value &&
                dt.Rows[i]["ACCOUNTNAME"] == DBNull.Value && dt.Rows[i]["ACCOUNTCODE"] == DBNull.Value && dt.Rows[i]["BUDGET"] == DBNull.Value)
                dt.Rows[i].Delete();
        }
        dt.AcceptChanges();
        return dt;
    }

    private DataTable GetUploadedData()
    {
        string connectionString = "";
        string fileName = Path.GetFileName(fupdBudget.PostedFile.FileName);
        string fileExtension = Path.GetExtension(fupdBudget.PostedFile.FileName);
        string fileLocation = Server.MapPath(newPath) + "\\" + fileName;
        fupdBudget.SaveAs(fileLocation);

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

    private void ValidateBudgetData(DataTable dtUpd)
    {
        bool oneOrg = true;
        bool validComp = true;
        bool validDept = true;
        bool success = false;
        DataTable dtFailed = new DataTable();
        dtFailed = dtUpd.Clone();

        if (oneOrg)
        {
            if (validComp)
            {
                List<string> lstDeptCodes = new List<string>();
                List<string> lstDeptValues = new List<string>();
                for (int i = 0; i < dtUpd.Rows.Count; i++)
                {
                    GetDeptList(ddlCompCode.SelectedValue, out lstDeptCodes, out lstDeptValues);
                    if (!lstDeptCodes.Contains(dtUpd.Rows[i]["DEPARTMENT"].ToString()) && !lstDeptValues.Contains(dtUpd.Rows[i]["DEPARTMENT"].ToString()))
                    {
                        //If DeptCode is invalid send the failed record to dtFailed
                        validDept = false;
                        dtUpd.Rows[i]["FailureMessage"] = "Invalid Department";
                        dtFailed.ImportRow(dtUpd.Rows[i]);
                        dtUpd.Rows[i].Delete();
                    }
                }
                if (validDept)
                {
                    if (dtUpd.Rows.Count > 0)
                    {
                        string appString = "###";
                        for (int i = 0; i < dtUpd.Rows.Count; i++)
                        {
                            if (!string.IsNullOrEmpty(dtUpd.Rows[i]["DEPARTMENT"].ToString()) && !string.IsNullOrEmpty(dtUpd.Rows[i]["YEAR"].ToString()) &&
                                !string.IsNullOrEmpty(dtUpd.Rows[i]["MONTH"].ToString()) && !string.IsNullOrEmpty(dtUpd.Rows[i]["ACCOUNTNAME"].ToString()) &&
                                !string.IsNullOrEmpty(dtUpd.Rows[i]["ACCOUNTCODE"].ToString()) && !string.IsNullOrEmpty(dtUpd.Rows[i]["BUDGET"].ToString()))
                            {
                                accountCode += dtUpd.Rows[i]["ACCOUNTCODE"].ToString() + appString;
                                amount += "0" + appString;
                                balanceAfterPO += "0" + appString;
                                budget += dtUpd.Rows[i]["BUDGET"].ToString() + appString;
                                budgetClassification += dtUpd.Rows[i]["ACCOUNTNAME"].ToString() + appString;
                                compCode += ddlCompCode.SelectedValue + appString;
                                currentBalance += "0" + appString;
                                deptCode += dtUpd.Rows[i]["DEPARTMENT"].ToString() + appString;
                                description += " " + appString;
                                expLineNo += "0" + appString;
                                fixedCost += "0" + appString;
                                invAmt += "0" + appString;
                                modifiedBy += Session["UserID"].ToString() + appString;
                                month += dtUpd.Rows[i]["MONTH"].ToString() + appString;
                                orgId += Session["OrgID"].ToString() + appString;
                                ourRefNo += " " + appString;
                                packageUnit += " " + appString;
                                period += " " + appString;
                                prefVendor += " " + appString;
                                quantity += "0" + appString;
                                remaining += dtUpd.Rows[i]["BUDGET"].ToString() + appString;
                                remainingFlag += " " + appString;
                                reqId += "0" + appString;
                                startDate += " " + appString;
                                type += "2" + appString;
                                unitPrice += "0" + appString;
                                year += dtUpd.Rows[i]["YEAR"].ToString() + appString;
                            }
                        }

                        POBudgetMulVO budg = new POBudgetMulVO();
                        budg.accountCode = accountCode.Substring(0, accountCode.Length - 3);
                        budg.amount = amount.Substring(0, amount.Length - 3);
                        budg.balanceAfterPO = balanceAfterPO.Substring(0, balanceAfterPO.Length - 3);
                        budg.budget = budget.Substring(0, budget.Length - 3);
                        budg.budgetClassification = budgetClassification.Substring(0, budgetClassification.Length - 3);
                        budg.compCode = compCode.Substring(0, compCode.Length - 3);
                        budg.currentBalance = currentBalance.Substring(0, currentBalance.Length - 3);
                        budg.deptCode = deptCode.Substring(0, deptCode.Length - 3);
                        budg.description = description.Substring(0, description.Length - 3);
                        budg.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
                        budg.fixedCost = fixedCost.Substring(0, fixedCost.Length - 3);
                        budg.invAmt = invAmt.Substring(0, invAmt.Length - 3);
                        budg.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
                        budg.month = month.Substring(0, month.Length - 3);
                        budg.orgId = orgId.Substring(0, orgId.Length - 3);
                        budg.ourRefNo = ourRefNo.Substring(0, ourRefNo.Length - 3);
                        budg.packageUnit = packageUnit.Substring(0, packageUnit.Length - 3);
                        budg.period = period.Substring(0, period.Length - 3);
                        budg.prefVendor = prefVendor.Substring(0, prefVendor.Length - 3);
                        budg.quantity = quantity.Substring(0, quantity.Length - 3);
                        budg.remaining = remaining.Substring(0, remaining.Length - 3);
                        budg.remainingFlag = remainingFlag.Substring(0, remainingFlag.Length - 3);
                        budg.reqId = reqId.Substring(0, reqId.Length - 3);
                        budg.startDate = startDate.Substring(0, startDate.Length - 3);
                        budg.type = type.Substring(0, type.Length - 3);
                        budg.unitPrice = unitPrice.Substring(0, unitPrice.Length - 3);
                        budg.year = year.Substring(0, year.Length - 3);
                        string retStr = xms.updatePOBudgetMul(budg);
                    }
                }
                else
                {
                    dvUploadErr.Style["color"] = "Red";
                    dvUploadErr.InnerHtml = "Invalid Department Code. Please upload with valid data.";
                }
            }
            else
            {
                dvUploadErr.Style["color"] = "Red";
                dvUploadErr.InnerHtml = "Invalid Company Code. Please upload with valid data.";
            }
        }
        else
        {
            dvUploadErr.Style["color"] = "Red";
            dvUploadErr.InnerHtml = "Please provide only one Organization name for all the data.";
        }
        if (dtFailed.Rows.Count > 0)
        {
            dvUploadErr.Style["color"] = "Red";
            dvUploadErr.InnerHtml = "Data import is not completely successful. Please check below for failed data.";
            gvImpBudg.DataSource = dtFailed;
            gvImpBudg.DataBind();
            gvImpBudg.Columns[0].Visible = true;
            popUpload.Show();
        }
        else
        {
            Session.Remove("dtUpd_Budget");
            Session.Remove("dtBudget");
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = "<b>Data imported successfully</b>";
            BindBudgetGrid();
            popUpload.Hide();
        }
    }

    private void GetDeptList(string compCode, out List<string> lstDeptCodes, out List<string> lstDeptValues)
    {
        DataTable dtDept = new DataTable();
        lstDeptCodes = new List<string>();
        lstDeptValues = new List<string>();
        if (Session["DEPT"] == null)
        {
            string str1 = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), compCode, "DEPT");
            List<CodeValueVO> lst1 = ser.Deserialize<List<CodeValueVO>>(str1);
            dtDept = Utility.ConvertToDataTable(lst1);
            Session["DEPT"] = dtDept;
        }
        else dtDept = (DataTable)Session["DEPT"];

        foreach (DataRow row in dtDept.Rows)
        {
            lstDeptCodes.Add(row["CodeKey"].ToString());
            lstDeptValues.Add(row["Description"].ToString());
        }
    }

    #endregion
}