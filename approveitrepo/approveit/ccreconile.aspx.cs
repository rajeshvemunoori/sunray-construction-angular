using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Globalization;
using System.Web.UI.HtmlControls;
using System.IO;
using Money = System.Double;
using Shares = System.Double;
using System.Data.OleDb;
using Saplin.Controls;
using System.Data;

public partial class Ccreconile : System.Web.UI.Page
{
    #region constructors

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region private variables

    private string newPath = "ERTemp";

    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                GetUsers();
                GetMonths();
                GetCCMonths();
                ResetVar();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void BtnGo_Click(object sender, System.EventArgs e)
    {
        if (ddlEmployee.SelectedValue != "0")
        {
            GetExpenses();
            dvExpErrMsg.InnerHtml = string.Empty;
        }
        else
            DisplayErrorMessage(dvExpErrMsg, "Please select Employee", "Red");
        ShowReconcileButtons();
    }

    protected void BtnUpload_Click(object sender, EventArgs e)
    {
        string filename = string.Empty;
        string path = string.Empty;
        DataSet ds = new DataSet();
        bool valid = false;
        if (fupd.HasFile)
        {
            filename = fupd.FileName;
            path = Server.MapPath(newPath) + "\\" + filename;
            fupd.SaveAs(path);
            valid = true;
        }
        else if (Session["ccFileName"] != null)
        {
            filename = (string)Session["ccFileName"];
            path = Server.MapPath(newPath) + "\\" + filename;
            valid = true;
        }
        else
            valid = false;
        if (valid)
        {
            if (Path.GetExtension(path).ToLower() == ".qif")
            {
                var pq = new QIFParser(path, QIFParserBase.LoadOptions.Transactions);
                ds = (DataSet)Session["dataset"];
                DataTable dtCCTrans = CreateCCDataset(ds.Tables[0]);
                ValidateCCData(ValidateNewCCTransactionsAgainstAlreadyLoaded(dtCCTrans), path);
                dvCCErrMsg.InnerHtml = string.Empty;
                ResetFileUpload();
            }
            else if (Path.GetExtension(path).ToLower() == ".csv")
            {
                DataTable dt = ReadCSV(path);
                ds.Tables.Add(dt);
                Session["dataset"] = ds;
                DataTable dtCCTrans = CreateCCDataset(ds.Tables[0]);
                ValidateCCData(ValidateNewCCTransactionsAgainstAlreadyLoaded(dtCCTrans), path);
                dvCCErrMsg.InnerHtml = string.Empty;
                ResetFileUpload();
            }
            else
                DisplayErrorMessage(dvCCErrMsg, "Please upload a file of type .QIF or .CSV!", "Red");
        }
        else
            DisplayErrorMessage(dvCCErrMsg, "Please upload a file of type .QIF or .CSV!", "Red");
        ShowReconcileButtons();
    }

    protected void FileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        lblFileName.Text = fupd.FileName;
        Session["ccFileName"] = fupd.FileName;
        string path = Server.MapPath(newPath) + "\\" + fupd.FileName;
        string extension = Path.GetExtension(path).ToLower();
        fupd.SaveAs(path);
    }

    protected void BtnMatch_Click(object sender, System.EventArgs e)
    {
        AutoReconcile();
    }

    protected void BtnManualMatch_Click(object sender, System.EventArgs e)
    {
        if (!gvExpDetails.Columns[0].Visible && !gvCC.Columns[0].Visible)
        {
            gvExpDetails.Columns[0].Visible = true;
            gvCC.Columns[0].Visible = true;

            foreach (GridViewRow expenseRow in gvExpDetails.Rows)
            {
                CheckBox chkExpRow = expenseRow.FindControl("chkExpRow") as CheckBox;
                HiddenField hdnExpReconciled = (HiddenField)expenseRow.FindControl("hdnReconciled");
                if (string.Equals(hdnExpReconciled.Value, "Y"))
                    chkExpRow.Enabled = false;
            }

            foreach (GridViewRow ccRow in gvCC.Rows)
            {
                CheckBox chkCCRow = ccRow.FindControl("chkCCRow") as CheckBox;
                HiddenField hdnExpReconciled = (HiddenField)ccRow.FindControl("hdnReconciled");
                if (string.Equals(hdnExpReconciled.Value, "Y"))
                    chkCCRow.Enabled = false;
            }
            SessionVar.reconcileType = "M";
            btnManualMatch.Text = "Turn Off Manual Reconciliation";
        }
        else
        {
            foreach (GridViewRow expenseRow in gvExpDetails.Rows)
            {
                CheckBox chkExpRow = expenseRow.FindControl("chkExpRow") as CheckBox;
                HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");
                if (chkExpRow.Checked)
                {
                    expenseRow.Style["background-color"] = "White";
                    hdnExpReconciledType.Value = string.Empty;
                    chkExpRow.Checked = false;
                }
            }

            foreach (GridViewRow ccRow in gvCC.Rows)
            {
                CheckBox chkCCRow = ccRow.FindControl("chkCCRow") as CheckBox;
                HiddenField hdnCCReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");
                if (chkCCRow.Checked)
                {
                    ccRow.Style["background-color"] = "White";
                    hdnCCReconciledType.Value = string.Empty;
                    chkCCRow.Checked = false;
                }
            }

            gvExpDetails.Columns[0].Visible = false;
            gvCC.Columns[0].Visible = false;
            btnManualMatch.Text = "Manual Reconciliation";
            SessionVar.reconcileType = string.Empty;
        }
    }

    protected void BtnMoveReconciled_Click(object sender, System.EventArgs e)
    {
        string reconciledRequests = string.Empty;
        string reconciledCCRefNo = string.Empty;
        string reconcileType = string.Empty;
        double manualExpAmount = 0;
        double manualCCAmount = 0;
        double tolerancePercent = GetCCReconcileTolerancePercent();
        double toleranceAmount = 0;
        bool validManualRecon = false;

        //validate manual reconciliation expenses
        foreach (GridViewRow expenseRow in gvExpDetails.Rows)
        {
            HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");
            CheckBox chkExpRow = (CheckBox)expenseRow.FindControl("chkExpRow");
            Label lblExpAmount = (Label)expenseRow.FindControl("lblExpAmount");
            if (chkExpRow.Checked)
                if (!string.IsNullOrEmpty(hdnExpReconciledType.Value))
                    manualExpAmount += ut.NullSafeDouble(lblExpAmount.Text);
        }
        foreach (GridViewRow ccRow in gvCC.Rows)
        {
            HiddenField hdnCCReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");
            CheckBox chkCCRow = (CheckBox)ccRow.FindControl("chkCCRow");
            Label lblCCAmount = (Label)ccRow.FindControl("lblCCAmount");
            Label lblCCRefNo = (Label)ccRow.FindControl("lblCCRefNo");
            if (chkCCRow.Checked)
            {
                if (!string.IsNullOrEmpty(hdnCCReconciledType.Value))
                {
                    manualCCAmount += ut.NullSafeDouble(lblCCAmount.Text);
                    reconciledCCRefNo += lblCCRefNo.Text + ",";
                }
            }
        }
        toleranceAmount = (manualExpAmount * tolerancePercent) / 100;

        if (manualExpAmount == manualCCAmount ||
            manualExpAmount >= manualCCAmount - toleranceAmount ||
            manualExpAmount <= manualCCAmount + toleranceAmount)
            validManualRecon = true;
        //validate manual reconciliation expenses

        if (validManualRecon)
        {
            AddCCTransactions();
            foreach (GridViewRow expenseRow in gvExpDetails.Rows)
            {
                HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");
                Label lblRequestId = (Label)expenseRow.FindControl("lblRequestId");
                Label lblExpCCRefNo = (Label)expenseRow.FindControl("lblExpCCRefNo");
                if (!string.IsNullOrEmpty(hdnExpReconciledType.Value))
                {
                    reconciledRequests += lblRequestId.Text + ",";
                    reconcileType = string.Equals(hdnExpReconciledType.Value, "A") ? "auto" : "manual";
                    if (string.Equals(hdnExpReconciledType.Value, "A"))
                        reconciledCCRefNo += lblExpCCRefNo.Text + ",";
                }
            }

            if (!string.IsNullOrEmpty(reconciledRequests))
                reconciledRequests = reconciledRequests.Substring(0, reconciledRequests.Length - 1);
            if (!string.IsNullOrEmpty(reconciledCCRefNo))
                reconciledCCRefNo = reconciledCCRefNo.Substring(0, reconciledCCRefNo.Length - 1);

            dvMainMessage.InnerHtml = UpdateReconRequest(reconciledRequests, reconciledCCRefNo, reconcileType);
            ResetReconcileScreen("Reconciliation Process successful! You have unmatched expenses which are not reconciled!");
        }
        else
            DisplayErrorMessage(dvMainMessage, "Amounts not matching for manual reconcilation", "Red");
        Page.SetFocus(dvMainMessage);
    }

    protected void BtnReconcile_Click(object sender, System.EventArgs e)
    {

    }

    protected void BtnResetData_Click(object sender, System.EventArgs e)
    {
        gvCC.DataBind();
        gvExpDetails.DataBind();
        ResetFields();
        ClearSessionVar();
    }

    protected void BtnUnmatchedCCTrans_Click(object sender, EventArgs e)
    {
        GetCCTransactions();
        DataTable dt = CreateCCDataset(SessionVar.dtCC);
        DataView dv = new DataView(dt, "Reconciled = 'N'", "Reconciled", DataViewRowState.CurrentRows);
        SessionVar.dtNonReconciledCCTransactions = dv.ToTable();
        dvMainRecon.Style["display"] = "none";
        dvUnmatchedCCTrans.Style["display"] = "block";
        btnResetData.Visible = btnUnmatchedCCTrans.Visible = false;
        btnBackToMainRecon.Visible = true;
        GetAccountCodes();
        gvUnMatchedCCTrans.DataSource = SessionVar.dtNonReconciledCCTransactions;
        gvUnMatchedCCTrans.DataBind();
        dvMainMessage.InnerHtml = string.Empty;
    }

    protected void BtnBackToMainRecon_Click(object sender, EventArgs e)
    {
        dvMainRecon.Style["display"] = "block";
        dvUnmatchedCCTrans.Style["display"] = "none";
        btnUnmatchedCCTrans.Visible = btnResetData.Visible = true;
        btnBackToMainRecon.Visible = false;
    }

    protected void BtnSubmitUnmatched_Click(object sender, EventArgs e)
    {

    }

    protected void GvExpDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            gvExpDetails.Columns[0].Visible = false;
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (!string.IsNullOrEmpty(Sort.SortDirExp) && !string.IsNullOrEmpty(Sort.ControlExp))
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Sort.ControlExp);
                if (Sort.SortDirExp == "Asc")
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void GvCC_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            gvCC.Columns[0].Visible = false;
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (!string.IsNullOrEmpty(Sort.SortDirCC) && !string.IsNullOrEmpty(Sort.ControlCC))
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Sort.ControlCC);
                if (Sort.SortDirCC == "Asc")
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                else
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void GvUnMatchedCCTrans_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            DropDownList ddlAccountCode = (DropDownList)e.Row.FindControl("ddlAccountCode");

            ddlAccountCode.DataSource = GetHierarchicalData(SessionVar.dtAccountCodes, "AccountClss");
            ddlAccountCode.DataTextField = "AccountClss";
            ddlAccountCode.DataValueField = "ExpCode";
            ddlAccountCode.DataBind();
            ddlAccountCode.Items.Insert(0, "Please Select");
            ddlAccountCode.Items.FindByText("Please Select").Value = "0";

            gvCC.Columns[0].Visible = false;
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Sort.ControlExp = lnk.ID;
        if (Sort.SortDirExp == null || Sort.SortDirExp == "Desc")
            Sort.SortDirExp = "Asc";
        else
            Sort.SortDirExp = "Desc";

        Sort.SortExprExp = e.CommandArgument.ToString();

        GetExpenses();
        if (SessionVar.reconcileType == "A")
            AutoReconcile();
    }

    protected void SortExpressionCC(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Sort.ControlCC = lnk.ID;
        if (Sort.SortDirCC == null || Sort.SortDirCC == "Desc")
            Sort.SortDirCC = "Asc";
        else
            Sort.SortDirCC = "Desc";

        Sort.SortExprCC = e.CommandArgument.ToString();
        DataSet ds = new DataSet();
        DataTable dtCopy = SessionVar.dtCC.Copy();
        ds.Tables.Add(dtCopy);
        BindGridData(ds.Tables[0]);
        if (SessionVar.reconcileType == "A")
            AutoReconcile();
    }

    protected void ChkExpRow_CheckedChanged(object sender, System.EventArgs e)
    {
        GridViewRow expenseRow = (GridViewRow)((CheckBox)sender).Parent.Parent;
        CheckBox chkExpRow = expenseRow.FindControl("chkExpRow") as CheckBox;
        HiddenField hdnExpReconciled = (HiddenField)expenseRow.FindControl("hdnReconciled");
        HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");

        if (chkExpRow.Checked)
        {
            expenseRow.Style["background-color"] = "#FA9A50";
            hdnExpReconciled.Value = "Y";
            hdnExpReconciledType.Value = "M";
            ShowMoveReconcileButtons(true);
            ShowLegends("block");
            ShowSummary("block");
            foreach (GridViewRow row in gvExpDetails.Rows)
            {
                CheckBox chk = row.FindControl("chkExpRow") as CheckBox;
                HiddenField hdnReconciledType = row.FindControl("hdnReconciledType") as HiddenField;
                HiddenField hdnReconciled = row.FindControl("hdnReconciled") as HiddenField;
                if (!int.Equals(expenseRow.RowIndex, row.RowIndex))
                {
                    row.Style["background-color"] = "White";
                    chk.Checked = false;
                    hdnReconciled.Value = string.Empty;
                    hdnReconciledType.Value = string.Empty;
                }
            }
        }
        else
        {
            expenseRow.Style["background-color"] = "White";
            hdnExpReconciled.Value = string.Empty;
            hdnExpReconciledType.Value = string.Empty;
            ShowMoveReconcileButtons(false);
            ShowLegends("none");
            ShowSummary("none");
        }
        CalculateTotals();
    }

    protected void ChkCCRow_CheckedChanged(object sender, System.EventArgs e)
    {
        GridViewRow ccRow = (GridViewRow)((CheckBox)sender).Parent.Parent;
        CheckBox chkCCRow = ccRow.FindControl("chkCCRow") as CheckBox;
        HiddenField hdnCCReconciled = (HiddenField)ccRow.FindControl("hdnReconciled");
        HiddenField hdnCCReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");

        if (chkCCRow.Checked)
        {
            ccRow.Style["background-color"] = "#FA9A50";
            hdnCCReconciled.Value = "Y";
            hdnCCReconciledType.Value = "M";
        }
        else
        {
            ccRow.Style["background-color"] = "White";
            hdnCCReconciled.Value = string.Empty;
            hdnCCReconciledType.Value = string.Empty;
        }
        CalculateTotals();
    }

    protected void DdlEmployee_SelectedIndexChanged(object sender, EventArgs e)
    {
        SessionVar.selectedEmployees = GetSelectedData(ddlEmployee);
    }

    protected void DdlMonth_SelectedIndexChanged(object sender, EventArgs e)
    {
        SessionVar.selectedMonths = GetSelectedData(ddlMonth);
    }

    protected void DdlCCMonth_SelectedIndexChanged(object sender, EventArgs e)
    {
        SessionVar.selectedCCMonths = GetSelectedData(ddlCCMonth);
        lblFileName.Text = (string)Session["ccFileName"];
    }

    protected void LnkSavedCCTransactions_Click(object sender, EventArgs e)
    {
        GetUnmatchedTransactions();
    }

    #endregion

    #region private methods

    private void GetUsers()
    {
        var users = xms.getUsersList(ut.NullSafeInteger(Session["OrgId"]), Session["CompCode"].ToString());
        List<UserVO> usersList = ser.Deserialize<List<UserVO>>(users);
        DataTable dtUsers = Utility.ConvertToDataTable(usersList);
        dtUsers.Columns.Add("fullName", typeof(string));

        foreach (DataRow row in dtUsers.Rows)
            row["fullName"] = row["fName"].ToString() + " " + row["lName"].ToString() + " (" + row["email"] + ")";

        ddlEmployee.DataSource = dtUsers;
        ddlEmployee.DataTextField = "fullName";
        ddlEmployee.DataValueField = "userId";
        ddlEmployee.DataBind();
    }

    private void GetMonths()
    {
        List<Months> monthsList = new List<Months>();

        for (int i = 1; i <= 12; i++)
        {
            Months month = new Months
            {
                monthId = i,
                monthName = DateTimeFormatInfo.CurrentInfo.GetMonthName(i)
            };
            monthsList.Add(month);
        }

        ddlMonth.DataSource = monthsList;
        ddlMonth.DataTextField = "monthName";
        ddlMonth.DataValueField = "monthId";
        ddlMonth.DataBind();
        //ddlMonth.Items.Insert(0, "Please select Month");
        //ddlMonth.Items.FindByText("Please select Month").Value = "0";
    }

    private void GetCCMonths()
    {
        List<Months> monthsList = new List<Months>();

        for (int i = 1; i <= 12; i++)
        {
            Months month = new Months
            {
                monthId = i,
                monthName = DateTimeFormatInfo.CurrentInfo.GetMonthName(i)
            };
            monthsList.Add(month);
        }

        ddlCCMonth.DataSource = monthsList;
        ddlCCMonth.DataTextField = "monthName";
        ddlCCMonth.DataValueField = "monthId";
        ddlCCMonth.DataBind();
        ddlCCMonth.Items.Insert(0, "Please select Month");
        ddlCCMonth.Items.FindByText("Please select Month").Value = "0";
    }

    private string GetSelectedData(DropDownCheckBoxes ddl)
    {
        return GetMultiDropdownFormatted(ddl);
    }

    private string GetMultiDropdownFormatted(DropDownCheckBoxes ddlId)
    {
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl(ddlId.ID);
        foreach (ListItem item in ddl.Items)
        {
            if (item.Selected)
            {
                if (i < 1)
                    caption += item + ",";
                expStr += item.Value + ",";
                i++;
            }
        }
        if (i > 0)
        {
            //if (i == ddl.Items.Count)
            //    ddl.Texts.SelectBoxCaption = "Select All";
            //else
            ddl.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
        }
        else
        {
            if (ddlId.ID == "ddlMonth" || ddlId.ID == "ddlCCMonth")
                ddlId.Texts.SelectBoxCaption = "Select Month(s)";
            else if (ddlId.ID == "ddlEmployee")
                ddlId.Texts.SelectBoxCaption = "Select Employee(s)";
        }
        return expStr.TrimEnd(',');
    }

    private string GetParamFormatted(string param)
    {
        string[] arr;
        if (param.Contains(","))
        {
            arr = new string[param.Split(',').Length];
            arr = param.Split(',');
        }
        else
        {
            List<String> lst = new List<string>
            {
                param
            };
            arr = lst.ToArray();
        }
        string str = string.Empty;
        for (int i = 0; i < arr.Length; i++)
            str += "'" + arr[i] + "', ";
        str = str.Substring(0, str.Length - 2);
        return str;
    }

    private void GetExpenses()
    {
        DataTable dtExpenses = new DataTable();
        if (SessionVar.dtAllExpenses == null)
        {
            var expenses = xms.getExpDetailsForAtt(ut.NullSafeInteger(ddlEmployee.SelectedValue), string.Empty, string.Empty, ut.NullSafeInteger(Session["OrgId"]), 3);
            List<ExpeseDetailsVO> expenseList = ser.Deserialize<List<ExpeseDetailsVO>>(expenses);
            dtExpenses = Utility.ConvertToDataTable(expenseList);
            SessionVar.dtAllExpenses = dtExpenses;
        }
        else
            dtExpenses = SessionVar.dtAllExpenses;

        DataView dvExpenses = new DataView(dtExpenses);
        string selectedEmployees = SessionVar.selectedEmployees;
        string selectedMonths = SessionVar.selectedMonths;

        if (ddlMonth.SelectedValue != "0" && !string.IsNullOrEmpty(ddlMonth.SelectedValue))
        {
            string rowFilter = string.Empty;
            string[] arrMonths = selectedMonths.Split(',');
            rowFilter = "(";

            for (int i = 0; i < arrMonths.Length; i++)
                rowFilter += "expDate LIKE '" + (arrMonths[i].Length == 2 ? arrMonths[i] : "0" + arrMonths[i]) + "/*' OR ";

            rowFilter = rowFilter.Substring(0, rowFilter.Length - 4);
            rowFilter += ") AND attCnt IN (" + GetParamFormatted(selectedEmployees) + ")";
            dvExpenses.RowFilter = rowFilter;
        }
        else
            dvExpenses.RowFilter = "attCnt IN (" + GetParamFormatted(selectedEmployees) + ")";
        if (dvExpenses.ToTable().Rows.Count > 0)
        {
            if ((!string.IsNullOrEmpty(Sort.SortExprExp)) && (!string.IsNullOrEmpty(Sort.SortDirExp)))
            {
                DataView dvSortedView = new DataView(dvExpenses.ToTable())
                {
                    Sort = Sort.SortExprExp + " " + Sort.SortDirExp
                };
                gvExpDetails.DataSource = dvSortedView;
            }
            else
                gvExpDetails.DataSource = dvExpenses;
        }
        gvExpDetails.DataBind();
        SessionVar.dtExpenses = dvExpenses.ToTable();
    }

    private void ValidateCCData(DataTable dt, string path)
    {
        //Remove empty rows in the dataset
        if (dt != null)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                bool isEmpty = true;
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    if (!string.IsNullOrEmpty(dt.Rows[i][j].ToString()))
                    {
                        isEmpty = false;
                        break;
                    }
                }
                if (isEmpty == true)
                {
                    dt.Rows.RemoveAt(i);
                    i--;
                }
            }
            BindGridData(dt);
            if (System.IO.File.Exists(path))
                System.IO.File.Delete(path);
        }
        else
            DisplayErrorMessage(dvCCErrMsg, "Please upload a valid file!", "Red");
        //dvCCErrMsg.InnerHtml = "Please upload a valid file!";
    }

    private void BindGridData(DataTable dt)
    {
        gvCC.Visible = true;
        DataView dvCCTransactions = new DataView(dt);
        string selectedMonths = SessionVar.selectedCCMonths;
        if (ddlCCMonth.SelectedValue != "0" && !string.IsNullOrEmpty(ddlCCMonth.SelectedValue))
        {
            string rowFilter = string.Empty;
            string[] arrMonths = selectedMonths.Split(',');
            rowFilter = "(";
            for (int i = 0; i < arrMonths.Length; i++)
                rowFilter += "Convert([Posted_Date], 'System.String')  LIKE '" + arrMonths[i] + "/*' OR ";

            rowFilter = rowFilter.Substring(0, rowFilter.Length - 4);
            rowFilter += ")";
            dvCCTransactions.RowFilter = rowFilter;
        }

        if (dvCCTransactions.ToTable().Rows.Count > 0)
        {
            if ((!string.IsNullOrEmpty(Sort.SortExprCC)) && (!string.IsNullOrEmpty(Sort.SortDirCC)))
            {
                DataView dvSortedView = new DataView(dvCCTransactions.ToTable())
                {
                    Sort = Sort.SortExprCC + " " + Sort.SortDirCC
                };
                gvCC.DataSource = dvSortedView;
            }
            else
                gvCC.DataSource = dvCCTransactions.ToTable();
        }
        gvCC.DataBind();
        SessionVar.dtCC = dvCCTransactions.ToTable();
    }

    private double GetCCReconcileTolerancePercent()
    {
        double percent = 0;
        string codes = xms.getCodes(ut.NullSafeInteger(Session["OrgId"]), Session["CompCode"].ToString(), "CCRECONTOLR");
        List<CodeValueVO> codesList = ser.Deserialize<List<CodeValueVO>>(codes);
        DataTable dtCodes = Utility.ConvertToDataTable(codesList);
        DataView dvCodes = new DataView(dtCodes)
        {
            RowFilter = "CODEID = 'CCRECONTOLR'"
        };

        if (dvCodes.ToTable().Rows.Count > 0)
            percent = ut.NullSafeInteger(dvCodes.ToTable().Rows[0]["DESCRIPTION"]);
        SessionVar.tolerancePercent = percent;
        return percent;
    }

    private string UpdateReconRequest(string requestId, string ccRefNo, string type)
    {
        return xms.updateReqReconciliation(requestId, ut.NullSafeInteger(Session["OrgId"]), Session["CompCode"].ToString(), ccRefNo, type);
    }

    private void AutoReconcile()
    {
        DataTable dtExpenses = SessionVar.dtExpenses;
        DataTable dtCC = SessionVar.dtCC;
        double tolerancePercent = (SessionVar.tolerancePercent == 0) ? GetCCReconcileTolerancePercent() : SessionVar.tolerancePercent;
        double toleranceAmount = 0;
        int count = 0;

        if (gvExpDetails.Rows.Count > 0 && gvCC.Rows.Count > 0)
        {
            foreach (GridViewRow expenseRow in gvExpDetails.Rows)
            {
                Label lblExpStartDate = (Label)expenseRow.FindControl("lblExpStartDate");
                Label lblExpAmount = (Label)expenseRow.FindControl("lblExpAmount");
                Label lblExpCCRefNo = (Label)expenseRow.FindControl("lblExpCCRefNo");
                HiddenField hdnExpReconciled = (HiddenField)expenseRow.FindControl("hdnReconciled");
                HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");
                foreach (GridViewRow ccRow in gvCC.Rows)
                {
                    Label lblCCPostedDate = (Label)ccRow.FindControl("lblCCPostedDate");
                    Label lblCCAmount = (Label)ccRow.FindControl("lblCCAmount");
                    Label lblCCRefNo = (Label)ccRow.FindControl("lblCCRefNo");
                    HiddenField hdnCCReconciled = (HiddenField)ccRow.FindControl("hdnReconciled");
                    HiddenField hdnCCReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");
                    if (expenseRow != gvExpDetails.HeaderRow && ccRow != gvCC.HeaderRow)
                    {
                        //ut.NullSafeDouble(lblExpAmount.Text) == ut.NullSafeDouble(lblCCAmount.Text) ||
                        //    ut.NullSafeDouble(lblExpAmount.Text) >= ut.NullSafeDouble(lblCCAmount.Text) - toleranceAmount ||
                        //    ut.NullSafeDouble(lblExpAmount.Text) <= ut.NullSafeDouble(lblCCAmount.Text) + toleranceAmount
                        toleranceAmount = (ut.NullSafeDouble(lblExpAmount.Text) * tolerancePercent) / 100;

                        if (Convert.ToDateTime(lblExpStartDate.Text) == Convert.ToDateTime(lblCCPostedDate.Text) &&
                            ut.NullSafeDouble(lblExpAmount.Text) - toleranceAmount <= ut.NullSafeDouble(lblCCAmount.Text) &&
                            ut.NullSafeDouble(lblExpAmount.Text) + toleranceAmount >= ut.NullSafeDouble(lblCCAmount.Text) &&
                            string.IsNullOrEmpty(hdnExpReconciledType.Value) &&
                            string.IsNullOrEmpty(hdnCCReconciledType.Value))
                        {
                            lblExpCCRefNo.Text = lblCCRefNo.Text;
                            expenseRow.Style["background-color"] = "#70DB93";
                            ccRow.Style["background-color"] = "#70DB93";
                            expenseRow.Style["color"] = "White";
                            ccRow.Style["color"] = "White";
                            hdnExpReconciled.Value = "Y";
                            hdnCCReconciled.Value = "Y";
                            hdnExpReconciledType.Value = "A";
                            hdnCCReconciledType.Value = "A";
                            count++;
                        }
                    }
                }
            }

            foreach (GridViewRow expenseRow in gvExpDetails.Rows)
            {
                HiddenField hdnExpReconciled = (HiddenField)expenseRow.FindControl("hdnReconciled");

                if (!string.Equals(hdnExpReconciled.Value, "Y"))
                    hdnExpReconciled.Value = "N";
            }

            foreach (GridViewRow ccRow in gvCC.Rows)
            {
                HiddenField hdnCCReconciled = (HiddenField)ccRow.FindControl("hdnReconciled");

                if (!string.Equals(hdnCCReconciled.Value, "Y"))
                    hdnCCReconciled.Value = "N";
            }

            if (count <= 0)
            {
                DisplayErrorMessage(dvMainMessage, "No matching expenses to reconcile", "Red");
                ShowSummary("none");
                ShowLegends("none");
                ShowMoveReconcileButtons(false);
            }
            else
            {
                SessionVar.reconcileType = "A";
                ShowLegends("block");
                ShowMoveReconcileButtons(true);
                CalculateTotals();
            }
        }
        else
        {
            DisplayErrorMessage(dvMainMessage, "Please select expenses and upload credit card transactions file", "Red");
            ShowSummary("none");
            ShowLegends("none");
            ShowMoveReconcileButtons(false);
        }
    }

    private void GetAccountCodes()
    {
        string str = xms.erGetClassificDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, "ER");
        List<ClassificationVO> lst = ser.Deserialize<List<ClassificationVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (!dt.Columns.Contains("AccountClss"))
            dt.Columns.Add("AccountClss");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AccountClss"] = dt.Rows[i]["accountCode"].ToString() + "--" + dt.Rows[i]["expItem"].ToString();
        SessionVar.dtAccountCodes = dt;
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

    private void DisplayErrorMessage(HtmlGenericControl div, string message, string color)
    {
        div.InnerHtml = message;
        div.Style["color"] = color;
    }

    private void ResetFields()
    {
        dvMainMessage.InnerHtml = string.Empty;
        btnHMoveReconciled.Visible = false;
        btnMoveReconciled.Visible = false;
        btnAutoMatch.Visible = false;
        btnManualMatch.Visible = false;
        dvExpErrMsg.InnerHtml = string.Empty;
        dvCCErrMsg.InnerHtml = string.Empty;
        dvExpLegend.Style["display"] = "none";
        dvCCLegend.Style["display"] = "none";
        dvExpReconcileSummary.Style["display"] = "none";
        dvCCReconcileSummary.Style["display"] = "none";
    }

    private void ClearSessionVar()
    {
        SessionVar.dtCC = null;
        SessionVar.dtExpenses = null;
        SessionVar.dtAllExpenses = null;
        SessionVar.dtNonReconciledCCTransactions = null;
        SessionVar.dtReconciledCCTransactions = null;
        SessionVar.dtReconciledExpenses = null;
        SessionVar.reconcileType = string.Empty;
    }

    private void ShowReconcileButtons()
    {
        if (gvExpDetails.Rows.Count > 0 && gvCC.Rows.Count > 0)
        {
            btnAutoMatch.Visible = true;
            btnManualMatch.Visible = true;
        }
        else
        {
            btnAutoMatch.Visible = false;
            btnManualMatch.Visible = false;
        }
    }

    private void ShowMoveReconcileButtons(bool visible)
    {
        btnMoveReconciled.Visible = visible;
        btnHMoveReconciled.Visible = visible;
    }

    private void ShowLegends(string display)
    {
        dvExpLegend.Style["display"] = display;
        dvCCLegend.Style["display"] = display;
    }

    private void ShowSummary(string display)
    {
        dvExpReconcileSummary.Style["display"] = display;
        dvCCReconcileSummary.Style["display"] = display;
    }

    private void ResetReconcileScreen(string message)
    {
        btnMoveReconciled.Visible = false;
        btnHMoveReconciled.Visible = false;
        btnManualMatch.Text = "Manual Reconciliation";
        SessionVar.dtAllExpenses = null;
        GetExpenses();
        ProcessNonReconciledCCTransactions();
        CalculateTotals();
        DisplayErrorMessage(dvMainMessage, message, "Green");
    }

    private void ProcessNonReconciledCCTransactions()
    {
        DataTable dtReconciledCCTransactions = new DataTable();
        DataTable dtNonReconciledCCTransactions = new DataTable();

        dtReconciledCCTransactions = SessionVar.dtCC.Clone();
        dtNonReconciledCCTransactions = SessionVar.dtCC.Clone();

        foreach (GridViewRow row in gvCC.Rows)
        {
            HiddenField hdnReconciledType = (HiddenField)row.FindControl("hdnReconciledType");
            Label lblCCRefNo = (Label)row.FindControl("lblCCRefNo");
            Label lblCCPostedDate = (Label)row.FindControl("lblCCPostedDate");
            Label lblCCAmount = (Label)row.FindControl("lblCCAmount");
            Label lblCCDesc = (Label)row.FindControl("lblCCDesc");

            List<string> lst = new List<string>
            {
                lblCCPostedDate.Text,
                lblCCRefNo.Text,
                lblCCDesc.Text,
                string.Empty,
                lblCCAmount.Text
            };

            if (!string.IsNullOrEmpty(hdnReconciledType.Value))
                dtReconciledCCTransactions.Rows.Add(lst.ToArray());
            else
                dtNonReconciledCCTransactions.Rows.Add(lst.ToArray());
        }
        dtReconciledCCTransactions.AcceptChanges();
        dtNonReconciledCCTransactions.AcceptChanges();

        SessionVar.dtReconciledCCTransactions = dtReconciledCCTransactions;
        SessionVar.dtNonReconciledCCTransactions = dtNonReconciledCCTransactions;

        gvCC.DataSource = dtNonReconciledCCTransactions;
        gvCC.DataBind();
    }

    private void CalculateTotals()
    {
        ShowSummary("block");
        //Expense totals
        double totalExpAmount = 0;
        double totalExpAmountRecon = 0;
        double totalExpAmountManualRecon = 0;
        double totalExpAmountNotRecon = 0;
        foreach (GridViewRow expenseRow in gvExpDetails.Rows)
        {
            Label lblExpAmount = (Label)expenseRow.FindControl("lblExpAmount");
            HiddenField hdnExpReconciled = (HiddenField)expenseRow.FindControl("hdnReconciled");
            HiddenField hdnExpReconciledType = (HiddenField)expenseRow.FindControl("hdnReconciledType");
            totalExpAmount += ut.NullSafeDouble(lblExpAmount.Text);
            if (string.Equals(hdnExpReconciledType.Value, "A"))
                totalExpAmountRecon += ut.NullSafeDouble(lblExpAmount.Text);
            else if (string.Equals(hdnExpReconciledType.Value, "M"))
                totalExpAmountManualRecon += ut.NullSafeDouble(lblExpAmount.Text);
            else if (string.IsNullOrEmpty(hdnExpReconciledType.Value))
                totalExpAmountNotRecon += ut.NullSafeDouble(lblExpAmount.Text);
        }

        lblExpTotalAmount.Text = "$ " + totalExpAmount.ToString();
        lblExpTotalAmountReconciled.Text = "$ " + totalExpAmountRecon.ToString();
        lblExpTotalAmountManualReconciled.Text = "$ " + totalExpAmountManualRecon.ToString();
        lblExpTotalAmountNotReconciled.Text = "$ " + totalExpAmountNotRecon.ToString();

        //cc totals
        double totalCCAmount = 0;
        double totalCCAmountRecon = 0;
        double totalCCAmountManualRecon = 0;
        double totalCCAmountNotRecon = 0;
        foreach (GridViewRow ccRow in gvCC.Rows)
        {
            Label lblCCAmount = (Label)ccRow.FindControl("lblCCAmount");
            HiddenField hdnCCReconciled = (HiddenField)ccRow.FindControl("hdnReconciled");
            HiddenField hdnCCReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");
            totalCCAmount += ut.NullSafeDouble(lblCCAmount.Text);
            if (string.Equals(hdnCCReconciledType.Value, "A"))
                totalCCAmountRecon += ut.NullSafeDouble(lblCCAmount.Text);
            if (string.Equals(hdnCCReconciledType.Value, "M"))
                totalCCAmountManualRecon += ut.NullSafeDouble(lblCCAmount.Text);
            else if (string.IsNullOrEmpty(hdnCCReconciledType.Value))
                totalCCAmountNotRecon += ut.NullSafeDouble(lblCCAmount.Text);
        }

        lblCCTotalAmount.Text = "$ " + totalCCAmount.ToString();
        lblCCTotalAmountReconciled.Text = "$ " + totalCCAmountRecon.ToString();
        lblCCTotalAmountManualReconciled.Text = "$ " + totalCCAmountManualRecon.ToString();
        lblCCTotalAmountNotReconciled.Text = "$ " + totalCCAmountNotRecon.ToString();
        lblCCTolerancePercentage.Text = SessionVar.tolerancePercent.ToString() + " %";
    }

    private void ResetVar()
    {
        Sort.SortDirCC = string.Empty;
        Sort.ControlCC = string.Empty;
        Sort.SortExprCC = string.Empty;
        Sort.SortDirExp = string.Empty;
        Sort.ControlExp = string.Empty;
        Sort.SortExprExp = string.Empty;
        Sort.ControlReconExp = string.Empty;
        Sort.SortDirReconExp = string.Empty;
        Sort.SortExprReconExp = string.Empty;
        SessionVar.reconcileType = string.Empty;
        SessionVar.dtExpenses = null;
        SessionVar.dtCC = null;
        SessionVar.dtAllExpenses = null;
    }

    private void ResetFileUpload()
    {
        Session.Remove("ccFileName");
        lblFileName.Text = string.Empty;
    }

    private void AddCCTransactions()
    {
        string orgId = string.Empty;
        string compCode = string.Empty;
        string reqId = string.Empty;
        string expDate = string.Empty;
        string purpose = string.Empty;
        string comments = string.Empty;
        string actualAmount = string.Empty;
        string discountFlag = string.Empty;
        string userId = string.Empty;

        foreach (GridViewRow ccRow in gvCC.Rows)
        {
            Label lblCCRefNo = (Label)ccRow.FindControl("lblCCRefNo");
            Label lblCCPostedDate = (Label)ccRow.FindControl("lblCCPostedDate");
            Label lblCCAmount = (Label)ccRow.FindControl("lblCCAmount");
            Label lblCCDesc = (Label)ccRow.FindControl("lblCCDesc");
            HiddenField hdnCCAddress = (HiddenField)ccRow.FindControl("hdnCCAddress");
            HiddenField hdnReconciledType = (HiddenField)ccRow.FindControl("hdnReconciledType");

            orgId += Session["OrgId"].ToString() + "###";
            compCode += Session["CompCode"].ToString() + "###";
            reqId += lblCCRefNo.Text + "###";
            expDate += lblCCPostedDate.Text + "###";
            purpose += lblCCDesc.Text + "###";
            comments += (string.IsNullOrEmpty(hdnCCAddress.Value) ? " " : hdnCCAddress.Value) + "###";
            actualAmount += lblCCAmount.Text + "###";
            discountFlag += (!string.IsNullOrEmpty(hdnReconciledType.Value) ? "Y" : "N") + "###";
            userId += Session["UserId"].ToString() + "###";
        }

        AddExpensesVO exp = new AddExpensesVO
        {
            orgId = orgId.Substring(0, orgId.Length - 3),
            compCode = compCode.Substring(0, compCode.Length - 3),
            reqId = reqId.Substring(0, reqId.Length - 3),
            expDate = expDate.Substring(0, expDate.Length - 3),
            purpose = purpose.Substring(0, purpose.Length - 3),
            comments = comments.Substring(0, comments.Length - 3),
            actualAmount = actualAmount.Substring(0, actualAmount.Length - 3),
            discountFlag = discountFlag.Substring(0, discountFlag.Length - 3),
            userId = userId.Substring(0, userId.Length - 3)
        };
        string returnMessage = xms.addCCTransaction(exp);
    }

    private void GetCCTransactions()
    {
        string ccTransactions = xms.getCCTranasactions();
        List<CCTransactionVO> ccTransactionsList = ser.Deserialize<List<CCTransactionVO>>(ccTransactions);
        DataTable dtCCTransactions = Utility.ConvertToDataTable(ccTransactionsList);
        SessionVar.dtCC = dtCCTransactions;
    }

    private DataTable CreateCCDataset(DataTable dt)
    {
        DataTable dtCCTrans = new DataTable();
        dtCCTrans.Columns.Add("Posted_Date", typeof(String));
        dtCCTrans.Columns.Add("Reference_Number", typeof(String));
        dtCCTrans.Columns.Add("Payee", typeof(String));
        dtCCTrans.Columns.Add("Address", typeof(String));
        dtCCTrans.Columns.Add("Amount", typeof(Double));
        dtCCTrans.Columns.Add("Reconciled", typeof(String));

        DataRow drCCTrans;
        foreach (DataRow dr in dt.Rows)
        {
            drCCTrans = dtCCTrans.NewRow();
            try
            {
                drCCTrans["Posted_Date"] = dr["Posted Date"];
            }
            catch
            {
                drCCTrans["Posted_Date"] = dr["Posted_Date"];
            }
            try
            {
                drCCTrans["Reference_Number"] = dr["Reference Number"];
            }
            catch
            {
                drCCTrans["Reference_Number"] = dr["Reference_Number"];
            }
            drCCTrans["Payee"] = dr["Payee"];
            drCCTrans["Address"] = dr["Address"];
            drCCTrans["Amount"] = dr["Amount"];
            try
            {
                drCCTrans["Reconciled"] = dr["Reconciled"];
            }
            catch
            {
                drCCTrans["Reconciled"] = "N";
            }

            dtCCTrans.Rows.Add(drCCTrans);
        }
        dtCCTrans.AcceptChanges();
        return dtCCTrans;
    }

    private void CaptureCCTransactionsFile()
    {
    }

    private DataTable ValidateNewCCTransactionsAgainstAlreadyLoaded(DataTable dtNew)
    {
        GetCCTransactions();
        DataTable dt = CreateCCDataset(SessionVar.dtCC);
        string refNoStr = string.Join(",", dt.AsEnumerable().Select(r => r.Field<string>("Reference_Number")).ToArray());
        string refNoList = GetParamFormatted(refNoStr);
        DataView dvNew = new DataView(dtNew)
        {
            RowFilter = "Reference_Number NOT IN (" + refNoList + ")"
        };
        return dvNew.ToTable();
    }

    private void GetUnmatchedTransactions()
    {
        GetCCTransactions();
        DataTable dt = CreateCCDataset(SessionVar.dtCC);
        DataView dv = new DataView(dt, "Reconciled = 'N'", "Reconciled", DataViewRowState.CurrentRows);
        ValidateCCData(dv.ToTable(), string.Empty);
        ShowReconcileButtons();
    }

    #endregion

    #region processing credit card statements

    #region QIF

    abstract class QIFParserBase
    {
        public enum LoadOptions
        {
            All,
            Prices,
            Securities,
            Transactions
        }

        protected abstract void AddPrice(DateTime date, string ticker, double price);
        protected abstract void AddTransaction(DateTime date, string action, string companyName, double price, double shares, double amount, double notKnownT, double commission, string comment);
        protected abstract void ParseHeader(string[] blocks);

        public QIFParserBase(string fileName, LoadOptions opt)
        {

            string content = File.ReadAllText(fileName);

            string[] blocks = content.Split(new string[] { "!Type:", "!Option:" }, StringSplitOptions.RemoveEmptyEntries);

            parseFuncs[opt](this, blocks);
        }

        static readonly Dictionary<LoadOptions, Action<QIFParserBase, string[]>> parseFuncs = new Dictionary<LoadOptions, Action<QIFParserBase, string[]>> {

        {LoadOptions.All, (q,c) => q.ParseAll(c)},
        {LoadOptions.Prices, (q,c) => q.ParsePricesBlocks(c)},
        {LoadOptions.Securities, (q,c) => q.ParseSecurityBlocks(c)},
        {LoadOptions.Transactions, (q,c) => q.ParseTransactionBlocks(c)}
    };

        private void ParseAll(string[] blocks)
        {

            ParseHeader(blocks);
            ParseSecurityBlocks(blocks);
            ParseTransactionBlocks(blocks);
            ParsePricesBlocks(blocks);
        }

        private void ParsePricesBlocks(string[] blocks)
        {

            var priceBlocks = from b in blocks
                              where b.StartsWith("Prices")
                              select b;

            foreach (var b in priceBlocks)
                ParsePriceBlock(b.Substring(7));
        }

        static readonly char[] trimChars = new char[] { '\n', '\r', '^', '"' };

        private void ParsePriceBlock(string b)
        {

            var subBlocks = b.Split(new string[] { "," }, StringSplitOptions.RemoveEmptyEntries);

            string ticker = subBlocks[0].Trim(trimChars);
            Money price = Money.Parse(subBlocks[1]);
            DateTime date = ParseDate(subBlocks[2].Trim(trimChars));

            AddPrice(date, ticker, price);
        }

        private void ParseTransactionBlocks(string[] blocks)
        {

            var tranBlocks = from b in blocks
                             where b.StartsWith("CCard")
                             select b;

            foreach (var t in tranBlocks)
                ParseTransactions(t);

        }

        private void ParseTransactions(string t)
        {
            //StreamWriter oWrite_Vendor = new StreamWriter(@"D:\RajeshVemunooriDir\MyProjects\ExpenseReports\ReadQBTFile\NewTextDocument.txt");
            var transactions = t.Substring(5).Split(new char[] { '^' }, StringSplitOptions.RemoveEmptyEntries);

            DataTable dt = new DataTable();
            DataColumn col = null;
            DataRow row = null;

            col = new DataColumn("Posted Date");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Reference Number");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Payee");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Address");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Amount");
            dt.Columns.Add(col);
            col = null;

            foreach (var tran in transactions)
            {
                var lines = tran.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

                DateTime date = new DateTime(); //D
                string action = "";  //N
                string purpose = ""; //Y
                string place = ""; //I
                Money amount = 0; //U

                row = dt.NewRow();
                foreach (var line in lines)
                {
                    if (line[0] == 'D')
                    {
                        date = ParseDate(line.Substring(1).Trim());
                        row["Posted Date"] = date;
                    }
                    if (line[0] == 'N')
                    {
                        action = line.Substring(1);
                        row["Reference Number"] = action;
                    }
                    if (line[0] == 'P')
                    {
                        purpose = line.Substring(1).Trim();
                        row["Payee"] = purpose;
                    }
                    if (line[0] == 'A')
                    {
                        place = line.Substring(1);
                        row["Address"] = place;
                    }
                    //if (line[0] == 'Q')
                    //{
                    //    shares = Shares.Parse(line.Substring(1));
                    //    row["shares"] = shares;
                    //}
                    if (line[0] == 'T')
                    {
                        amount = Money.Parse(line.Substring(1));
                        row["Amount"] = amount;
                    }
                    //if (line[0] == 'T')
                    //{
                    //    notKnownT = Money.Parse(line.Substring(1));
                    //    row["notKnownT"] = notKnownT;
                    //}
                    //if (line[0] == 'O')
                    //{
                    //    commission = Money.Parse(line.Substring(1));
                    //    row["commission"] = commission;
                    //}
                    //if (line[0] == 'M')
                    //{
                    //    comment = line.Substring(1).Trim();
                    //    row["comment"] = comment;
                    //}
                }
                //oWrite_Vendor.WriteLine(date + "\t" + action + "\t" + purpose + "\t" + place + "\t" + amount);
                dt.Rows.Add(row);
            }
            DataSet ds = new DataSet();
            ds.Tables.Add(dt);
            //oWrite_Vendor.Close();
            HttpContext.Current.Session["dataset"] = ds;
            //return ds;
            //ParseTransaction(tran);
        }

        private void ParseTransaction(string t)
        {
            var lines = t.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

            DataTable dt = new DataTable();
            DataColumn col = null;
            DataRow row = null;

            col = new DataColumn("date");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("action");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("companyName");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("price");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("shares");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("amount");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("notKnownT");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("commission");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("comment");
            dt.Columns.Add(col);
            col = null;

            DateTime date = new DateTime(); //D
            string action = "";  //N
            string companyName = ""; //Y
            Money price = 0; //I
            Shares shares = 0; //Q
            Money amount = 0; //U
            Money notKnownT = 0; //T
            Money commission = 0; //O
            string comment = ""; //M

            foreach (var line in lines)
            {
                if (line[0] == 'D')
                {
                    date = ParseDate(line.Substring(1).Trim());
                }
                if (line[0] == 'N')
                {
                    action = line.Substring(1);
                }
                if (line[0] == 'Y')
                {
                    companyName = line.Substring(1).Trim();
                }
                if (line[0] == 'I')
                {
                    price = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'Q')
                {
                    shares = Shares.Parse(line.Substring(1));
                }
                if (line[0] == 'U')
                {
                    amount = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'T')
                {
                    notKnownT = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'O')
                {
                    commission = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'M')
                {
                    comment = line.Substring(1).Trim();
                }
                //dt.Rows.Add(row);
            }
            if (companyName != "")
            {

                //AddTransaction(date, action, companyName, price, shares, amount, notKnownT, commission, comment);
            }
        }

        private DateTime ParseDate(string p)
        {

            string parseable = p.Replace('\'', '/').Replace(' ', '0');

            return DateTime.Parse(parseable);
        }

        private void ParseSecurityBlocks(string[] blocks)
        {

            var secBlocks = from b in blocks
                            where b.StartsWith("Security")
                            select b;

            foreach (var s in secBlocks)
                ParseSecBlock(s);
        }

        private void ParseSecBlock(string s)
        {

            string ticker = "";
            string name = "";
            string type = "";

            var subBlocks = s.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var sec in subBlocks)
            {

                if (sec[0] == 'N')
                    name = sec.Substring(1).Trim();
                if (sec[0] == 'S')
                    ticker = sec.Substring(1).Trim();
                if (sec[0] == 'T')
                    type = sec.Substring(1).Trim();
            }

            if (ticker != "")
                AddSecurity(ticker, name, type);
        }

        protected abstract void AddSecurity(string ticker, string name, string type);
    }

    class QIFParser : QIFParserBase
    {
        Dictionary<string, string> nameToTicker = new Dictionary<string, string>();

        public QIFParser(string fileName, LoadOptions lo) : base(fileName, lo) { }

        protected override void ParseHeader(string[] blocks) { }

        protected override void AddSecurity(string ticker, string name, string type)
        {

            if (!nameToTicker.ContainsKey(name))
                nameToTicker[name] = ticker;

            Utils.WriteLine(ticker + "\t" + name + "\t" + type);
        }

        protected override void AddTransaction(DateTime date, string action, string companyName, double price, double shares, double amount, double notKnownT, double commission, string comment)
        {

            if (!nameToTicker.ContainsKey(companyName))
                Utils.Exception("Reading transactions, There is no ticker for " + companyName);

            Utils.WriteLine(date + "\t" + action + "\t" + companyName + "\t" + price + "\t" + shares + "\t" + amount + "\t" + commission + "\t" + comment);
        }

        protected override void AddPrice(DateTime date, string ticker, double price)
        {

            if (!nameToTicker.ContainsValue(ticker))
                Utils.Exception("Reading prices, There is not company for " + ticker);
            Utils.WriteLine(date + "\t" + ticker + "\t" + price);
        }
    }

    static class Utils
    {
        public static void WriteLine(string s)
        {
            StreamWriter oWrite_Vendor = new StreamWriter(@"D:\RajeshVemunooriDir\MyProjects\ExpenseReports\ReadQBTFile\NewTextDocument.txt");
            oWrite_Vendor.WriteLine(s);
            oWrite_Vendor.Close();
            //Console.WriteLine(s);
        }

        public static void Exception(string s)
        {
            Console.WriteLine(s.ToUpper());
            //throw new Exception(s);
        }
    }

    #endregion

    #region CSV

    private static DataTable ReadCSV(string filename)
    {
        string path = System.IO.Path.GetDirectoryName(filename);
        string file = System.IO.Path.GetFileName(filename);

        DataTable dt = new DataTable();
        using (OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='" + path + "';Extended Properties='text;HDR=Yes;FMT=Delimited'"))
        {
            OleDbDataAdapter da = new OleDbDataAdapter("SELECT * FROM " + file, conn);
            da.Fill(dt);
        }
        return dt;
    }

    #endregion

    #endregion
}
