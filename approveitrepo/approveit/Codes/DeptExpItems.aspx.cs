using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Data.OleDb;
using Saplin.Controls;

public partial class Codes_DeptExpItems : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;
    string newPath = ("ERTemp");
    string accntCode, accntName, compCode, fromDept, orgId, toDept, type, userId;
    string appString = "###";

    #endregion

    #region Classifications

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                btnSyncWithQB.Attributes.Add("onclick", "javascript:transferToSync();");
                Session.Remove("SortExpr");
                Session.Remove("SortDir");
                Session.Remove("Classes");
                LoadData();
                txtKeywordSearch.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        DataSet ds = new DataSet();
        lblOrgID.Text = Session["SOrgName"].ToString();
        BindCompCodes();
        BindDept(ddlDept);
        SortGrid();
        Session.Remove("PrevComp");
        Session.Remove("PrevDept");
        if (!string.IsNullOrEmpty(Session["AccountBy"].ToString()))
        {
            dvMainMsg.InnerHtml = "You cannot create or modify Classification/Account from this screen as third party integration is active for Accounts.";
            dvMainMsg.Style["color"] = "Red";
            lnkAddNewExp.Visible = false;
            btnUpload.Visible = false;
            foreach (GridViewRow row in gvDeptExp.Rows)
            {
                LinkButton lnkDelete = (LinkButton)row.FindControl("lnkDelete");
                lnkDelete.Visible = false;
            }
        }
        else if (string.IsNullOrEmpty(Session["AccountBy"].ToString()))
        {
            lnkAddNewExp.Visible = true;
            btnUpload.Visible = true;
            foreach (GridViewRow row in gvDeptExp.Rows)
            {
                LinkButton lnkDelete = (LinkButton)row.FindControl("lnkDelete");
                lnkDelete.Visible = true;
            }
        }
    }

    private void BindData()
    {
        string dept = ddlDept.SelectedValue == "0" ? "All" : ddlDept.SelectedValue;
        string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, dept, 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["DeptExpdt"] = GetHierarchicalData(dt, "expItem");
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
        ddlCompCode.DataBind();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        Session["PrevComp"] = ddlCompCode.SelectedValue;
    }

    private void BindDept(DropDownList ddl)
    {
        //Bind Departments
        string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        ddl.DataSource = dt;
        ddl.DataBind();
        Session["PrevDept"] = ddlDept.SelectedValue;

        if (Session["AccountBy"].ToString() == "COMP")
        {
            ddl.Items.Insert(0, "All");
            ddl.Items.FindByText("All").Value = "0";
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("DeptExpdt");
        LoadData();
    }

    protected void gvDeptExp_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox chkTravelSpec = (CheckBox)e.Row.FindControl("chkTravelSpec");
            CheckBox chkReimbursible = (CheckBox)e.Row.FindControl("chkReimbursible");
            CheckBox chkAttachment = (CheckBox)e.Row.FindControl("chkAttachment");
            TextBox txtMaxAmount = (TextBox)e.Row.FindControl("txtMaxAmount");
            chkTravelSpec.Enabled = false;
            chkReimbursible.Enabled = false;
            chkAttachment.Enabled = false;
            txtMaxAmount.Enabled = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //display hover menu extender on mouse over on entire row.
            //AjaxControlToolkit.HoverMenuExtender hveAction = (AjaxControlToolkit.HoverMenuExtender)e.Row.FindControl("hveAction");
            //e.Row.ID = e.Row.RowIndex.ToString();
            //hveAction.TargetControlID = e.Row.ID;
            //display hover menu extender on mouse over on entire row.
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_ExpByDept"] != null && Session["Control_ExpByDept"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ExpByDept"].ToString());
                if (Session["SortDir_ExpByDept"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void gvDeptExp_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
            hdnDeptExpSeqID.Value = e.CommandArgument.ToString();
            lblAlert.Text = "Are you sure you want to delete this ExpenseItem?";
            hdnAlertType.Value = "delete";
            popAlert.Show();
        }
    }

    protected void gvDeptExp_RowDeleting(object sender, GridViewDeleteEventArgs e)
    { }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ExpByDept"] = lnk.ID;

        if (Session["SortDir_ExpByDept"] == null || Session["SortDir_ExpByDept"].ToString() == "Desc")
            Session["SortDir_ExpByDept"] = "Asc";
        else
            Session["SortDir_ExpByDept"] = "Desc";

        Session["SortExpr_ExpByDept"] = e.CommandArgument;
        SortGrid();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        SortGrid();
        BindDept(ddlDept);
        Session["PrevComp"] = ddlCompCode.SelectedValue;
        ddlDept.SelectedValue = Session["PrevDept"] == null ? ddlDept.Items[0].ToString() : Session["PrevDept"].ToString();
    }

    protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        SortGrid();
        Session["PrevDept"] = ddlDept.SelectedValue;
        ddlCompCode.SelectedValue = Session["PrevComp"] == null ? Session["CompCode"].ToString() : Session["PrevComp"].ToString();
    }

    private void SortGrid()
    {
        DataTable dt = new DataTable();
        BindData();
        dt = (DataTable)Session["DeptExpdt"];
        if ((Session["SortExpr_ExpByDept"] != null) && Session["SortDir_ExpByDept"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_ExpByDept"].ToString() + " " + Session["SortDir_ExpByDept"].ToString();
            gvDeptExp.DataSource = view.ToTable(true, "expItem", "seqId", "expcode", "accountCode", "acctType", "bankType", "accName");
        }
        else
            gvDeptExp.DataSource = dt.DefaultView.ToTable(true, "expItem", "seqId", "expcode", "accountCode", "acctType", "bankType", "accName");
        gvDeptExp.DataBind();
    }

    protected void SaveAllClassifications(object sender, EventArgs e)
    {
        string appString = "###";
        string accountCode = string.Empty;
        string addedBy = string.Empty;
        string classificId = string.Empty;
        string classificType = string.Empty;
        string compCode = string.Empty;
        string expCode = string.Empty;
        string expItem = string.Empty;
        string maxAmt = string.Empty;
        string orgId = string.Empty;
        string qbAccID = string.Empty;
        string reimbursable = string.Empty;
        string travelSpecific = string.Empty;
        string attachment = string.Empty;
        DataTable dt = (DataTable)Session["DeptExpdt"];
        foreach (GridViewRow row in gvDeptExp.Rows)
        {

            CheckBox chkIsExpenseRequest = (CheckBox)row.FindControl("chkIsExpenseRequest");
            CheckBox chkTravelSpec = (CheckBox)row.FindControl("chkTravelSpec");
            CheckBox chkReimbursible = (CheckBox)row.FindControl("chkReimbursible");
            CheckBox chkAttachment = (CheckBox)row.FindControl("chkAttachment");
            TextBox txtMaxAmount = (TextBox)row.FindControl("txtMaxAmount");
            Label lblAcc = (Label)row.FindControl("lblAcc");
            Label lblExpCode = (Label)row.FindControl("lblExpCode");
            Label lblExpItem = (Label)row.FindControl("lblExpItem");
            HiddenField hdnSeqID = (HiddenField)row.FindControl("hdnSeqID");
            if (chkIsExpenseRequest.Checked)
            {
                accountCode += lblAcc.Text + appString;
                addedBy += Session["UserID"].ToString() + appString;
                classificId += dt.Rows[row.RowIndex]["seqId"] + appString;
                //classificType += (chkIsExpenseRequest.Checked ? "ER" : "PO") + appString;
                classificType += "ER" + appString;
                compCode += Session["CompCode"].ToString() + appString;
                expCode += lblExpCode.Text + appString;
                expItem += lblExpItem.Text.Trim() + appString;
                maxAmt += (string.IsNullOrEmpty(txtMaxAmount.Text) ? "0" : txtMaxAmount.Text) + appString;
                orgId += Session["OrgID"].ToString() + appString;
                qbAccID += "0" + appString;
                reimbursable += (chkReimbursible.Checked ? "Y" : "N") + appString;
                //reimbursable += "Y" + appString;
                travelSpecific += (chkTravelSpec.Checked ? "Y" : "N") + appString;
                attachment += (chkAttachment.Checked ? "Y" : "N") + appString;
            }
        }
        ClassificMulVO clss = new ClassificMulVO();
        clss.accountCode = accountCode.Substring(0, accountCode.Length - 3);
        clss.addedBy = addedBy.Substring(0, addedBy.Length - 3);
        clss.classificId = classificId.Substring(0, classificId.Length - 3);
        clss.classificType = classificType.Substring(0, classificType.Length - 3);
        clss.compCode = compCode.Substring(0, compCode.Length - 3);
        clss.expCode = expCode.Substring(0, expCode.Length - 3);
        clss.expItem = expItem.Substring(0, expItem.Length - 3);
        clss.maxAmt = maxAmt.Substring(0, maxAmt.Length - 3);
        clss.orgId = orgId.Substring(0, orgId.Length - 3);
        clss.qbAccID = qbAccID.Substring(0, qbAccID.Length - 3);
        clss.reimbursable = reimbursable.Substring(0, reimbursable.Length - 3);
        clss.travelSpecific = travelSpecific.Substring(0, travelSpecific.Length - 3);
        clss.attachment = attachment.Substring(0, attachment.Length - 3);
        string retStr = xms.addClassificationsMul(clss);
        if (retStr.ToLower().Contains("succes"))
        {
            dvMainMsg.Style["color"] = "Green";
            Session.Remove("dsCodes");
            GetCodes();
        }
        else
            dvMainMsg.Style["color"] = "Red";
        dvMainMsg.InnerHtml = retStr;
    }

    private void GetCodes()
    {
        string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
        string[] arrExpCodes = new string[2];
        arrExpCodes = expCodes.Split('~');
        List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
        DataTable dtCodes = new DataTable();
        dtCodes = Utility.ConvertToDataTable(codes);
        Session["dsCodes"] = dtCodes;
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

    #region Edit Classifications

    protected void AddNewExp(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Logout.aspx");

        if (Session["AccountBy"].ToString() == "COMP")
            dvErrMsg.InnerHtml = "Changes get reflected to all the departments since accounts are maintained by company for your organization.";

        btnSave.Attributes.Add("onclick", "javascript:return ValidateDeptExpItem();");
        Clearfields();
        BindDept(ddlEditDept);
        ddlEditDept.SelectedValue = ddlDept.SelectedValue;
        BindDropdowns();
        Session["DeptExpEdit"] = "N";
        lblHDeptExp.Text = "Add Account";
        //DataTable dt = GetQBAccounts();
        //Session["QBAccounts"] = dt;
        //if (dt.Rows.Count > 0)
        //{
        //    ddlQBAccCode.DataSource = dt;
        //    ddlQBAccCode.DataTextField = "accName";
        //    ddlQBAccCode.DataValueField = "accNum";
        //    ddlQBAccCode.DataBind();
        //    ddlQBAccCode.Items.Insert(0, "All");
        //    ddlQBAccCode.Items.FindByText("All").Value = "All";

        //    ddlQBAccCode.Visible = true;
        //    txtAccCode.Visible = false;
        //}
        //else
        //{
        //    ddlQBAccCode.Visible = false;
        //    txtAccCode.Visible = true;
        //}
        txtExpItem.Focus();
        popDeptExp.Show();
    }

    protected void Edit(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Logout.aspx");

        btnSave.Attributes.Add("onclick", "javascript:return ValidateDeptExpItem();");
        Clearfields();
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblExpItem = (Label)row.FindControl("lblExpItem");
        HiddenField hdnSeqID = (HiddenField)row.FindControl("hdnSeqID");
        DataTable dt = new DataTable();
        if (Session["DeptExpdt"] == null)
            BindData();
        BindDept(ddlEditDept);
        dt = (DataTable)Session["DeptExpdt"];
        string expr = "ExpItem = '" + lblExpItem.Text + "'";
        DataView view = new DataView(dt, expr, "ExpItem", DataViewRowState.CurrentRows);
        ddlEditDept.SelectedValue = ddlDept.SelectedValue;
        BindDropdowns();
        hdnDeptExpSeqID.Value = hdnSeqID.Value;
        txtAccCode.Text = view.ToTable().Rows[0]["accountCode"] == null ? string.Empty : view.ToTable().Rows[0]["accountCode"].ToString();
        txtExpItem.Text = view.ToTable().Rows[0]["expItem"] == null ? string.Empty : view.ToTable().Rows[0]["expItem"].ToString();
        txtExpItem.Text = txtExpItem.Text.Trim();
        //txtCodeKey.Text = view.ToTable().Rows[0]["expcode"] == null ? string.Empty : view.ToTable().Rows[0]["expcode"].ToString();
        hdnQBID.Value = view.ToTable().Rows[0]["QBID"] == null ? string.Empty : view.ToTable().Rows[0]["QBID"].ToString();

        DeptVO d = new DeptVO();
        //d.accName
        //d.ctrlAccntFlag
        //d.ctrlAcct
        //d.bankType
        //d.acctType
        ddlCtrlAccnt.SelectedValue = (string.IsNullOrEmpty(view.ToTable().Rows[0]["ctrlAcct"].ToString()) || string.IsNullOrEmpty(view.ToTable().Rows[0]["ctrlAcct"].ToString())) ? "0" : view.ToTable().Rows[0]["ctrlAcct"].ToString();
        try
        {
            ddlAccntType.SelectedValue = (string.IsNullOrEmpty(view.ToTable().Rows[0]["acctType"].ToString()) || string.IsNullOrEmpty(view.ToTable().Rows[0]["acctType"].ToString())) ? "0" : view.ToTable().Rows[0]["acctType"].ToString();
        }
        catch
        {
            ddlAccntType.SelectedValue = "0";
        }
        try
        {
            ddlBankingType.SelectedValue = (string.IsNullOrEmpty(view.ToTable().Rows[0]["bankType"].ToString()) || string.IsNullOrEmpty(view.ToTable().Rows[0]["bankType"].ToString())) ? "0" : view.ToTable().Rows[0]["bankType"].ToString();
        }
        catch
        {
            ddlBankingType.SelectedValue = "0";
        }
        Session["DeptExpEdit"] = "Y";
        lblHDeptExp.Text = "Modify Account";
        ToggleEditFields();
        popDeptExp.Show();
    }

    private void ToggleEditFields()
    {
        bool visible = false;
        if (!string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            visible = false;
        else
            visible = true;
        btnSave.Visible = visible;
        ddlEditDept.Enabled = ddlCtrlAccnt.Enabled = txtExpItem.Enabled = ddlAccntType.Enabled = txtAccCode.Enabled = ddlBankingType.Enabled = visible;
    }

    private DataTable GetQBAccounts()
    {
        DataTable dt = new DataTable();
        string str = string.Empty;//xms.erGetQBAccounts(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 2);
        List<ImportQBAccVO> lst = ser.Deserialize<List<ImportQBAccVO>>(str);
        return Utility.ConvertToDataTable(lst);
    }

    private void BindDropdowns()
    {
        //Bind Account Types
        string strAccType = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, "ACCOUNTTYPE");
        List<CodeValueVO> lstAccType = ser.Deserialize<List<CodeValueVO>>(strAccType);
        ddlAccntType.DataSource = lstAccType;
        ddlAccntType.DataTextField = "CodeValue1";
        ddlAccntType.DataValueField = "CodeValue1";
        ddlAccntType.DataBind();
        ddlAccntType.Items.Insert(0, "Please Select");
        ddlAccntType.Items.FindByText("Please Select").Value = "0";

        //Bind Control Accounts
        BindControlAccounts();

        //Bind Banking Types
        string strBankType = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, "ACCNTBANKTYPE");
        List<CodeValueVO> lstBankType = ser.Deserialize<List<CodeValueVO>>(strBankType);
        ddlBankingType.DataSource = lstBankType;
        ddlBankingType.DataTextField = "CodeValue1";
        ddlBankingType.DataValueField = "CodeValue1";
        ddlBankingType.DataBind();
        ddlBankingType.Items.Insert(0, "Please Select");
        ddlBankingType.Items.FindByText("Please Select").Value = "0";
    }

    private void BindControlAccounts()
    {
        string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ddlEditDept.SelectedValue, 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        //add new column containing account number and account name seperated with --
        if (!dt.Columns.Contains("AcountClss"))
            dt.Columns.Add("AcountClss");

        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AcountClss"] = dt.Rows[i]["acctLongCode"].ToString() + "--" + dt.Rows[i]["accName"].ToString();
        //add new column containing account number and account name seperated with --

        dt = GetHierarchicalData(dt, "AcountClss");
        DataTable dtTemp = dt.DefaultView.ToTable(true, "AcountClss", "accountCode", "accName");
        DataView dv = dtTemp.DefaultView;
        //dv.Sort = "expItem ASC";
        ddlCtrlAccnt.DataSource = dv;
        ddlCtrlAccnt.DataTextField = "AcountClss";
        ddlCtrlAccnt.DataValueField = "accountCode";
        ddlCtrlAccnt.DataBind();
        ddlCtrlAccnt.Items.Insert(0, "Please Select");
        ddlCtrlAccnt.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlEditDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindControlAccounts();
        txtExpItem.Focus();
        popDeptExp.Show();
    }

    protected void SaveDeptExp(object sender, EventArgs e)
    {
        if (Session["DeptExpEdit"].ToString() == "Y")
            SaveData(1);
        else
            SaveData(2);
    }

    protected void DeleteDeptExp(object sender, EventArgs e)
    {
        hdnAlertType.Value = "delete";
        popAlert.Show();
    }

    private void SaveData(int type)
    {
        int qbAccId = 0;
        if (type != 3)
        {
            DataTable dt = (DataTable)Session["QBAccounts"];
            bool isQBAcc = string.IsNullOrEmpty(txtAccCode.Text);
            if (isQBAcc)
            {
                DataView dv = new DataView(dt, "accName = '" + ddlQBAccCode.SelectedItem.Text + "'", "accName", DataViewRowState.CurrentRows);
                qbAccId = ut.NullSafeInteger(dv.ToTable().Rows[0]["qbAccId"]);
            }
        }
        string retStr = string.Empty;
        DeptVO dept = new DeptVO();
        //dept.accName = (isQBAcc ? ddlQBAccCode.SelectedItem.Text : string.Empty);
        dept.accName = string.Empty;
        dept.accntInterCompFlag = string.Empty;
        dept.accntLevelCode = string.Empty;
        dept.accntSegments = string.Empty;
        dept.accntSublegCode = string.Empty;
        dept.accountCode = txtAccCode.Text;
        dept.accountName = string.Empty;
        dept.acctHier = string.Empty;
        dept.acctLongCode = string.Empty;
        dept.acctType = ddlAccntType.SelectedValue == "0" ? string.Empty : ddlAccntType.SelectedValue;
        dept.addedBy = ut.NullSafeInteger(Session["UserID"]);
        dept.addedOn = DateTime.Now.ToShortDateString();
        dept.bankType = ddlBankingType.SelectedValue == "0" ? string.Empty : ddlBankingType.SelectedValue;
        dept.compCode = ddlCompCode.SelectedValue;
        if (ddlCtrlAccnt.SelectedValue == "0")
        {
            dept.ctrlAccntFlag = "N";
            dept.ctrlAcct = string.Empty;
        }
        else
        {
            dept.ctrlAccntFlag = "Y";
            dept.ctrlAcct = ddlCtrlAccnt.SelectedValue;
        }
        //dept.ctrlAccntFlag = (ddlCtrlAccnt.SelectedValue == "0") ? "N" : "Y";
        //dept.ctrlAcct = ddlCtrlAccnt.SelectedValue == "0" ? string.Empty : ddlCtrlAccnt.SelectedValue;
        dept.deptCode = ddlEditDept.SelectedValue;
        dept.expcode = string.Empty;
        dept.expItem = txtExpItem.Text.Trim();
        dept.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        dept.modifiedOn = DateTime.Now.ToShortDateString();
        dept.orgId = ut.NullSafeInteger(Session["OrgID"]);
        dept.QBAccId = qbAccId;
        dept.QBID = string.IsNullOrEmpty(hdnQBID.Value) ? 0 : ut.NullSafeInteger(hdnQBID.Value);
        dept.seqId = string.IsNullOrEmpty(hdnDeptExpSeqID.Value) ? 0 : ut.NullSafeInteger(hdnDeptExpSeqID.Value);
        if (type == 1)//Edit
        {
            dept.type = 1;
            retStr = xms.updateItemByDept(dept);
            if (retStr.ToLower().Contains("succes"))
            {
                dvMainMsg.Style["color"] = "Green";
                dvMainMsg.InnerHtml = retStr;
                Session.Remove("DeptExpdt");
                Session.Remove("DeptExpEdit");
                SortGrid();
                popDeptExp.Hide();
            }
            else
            {
                dvErrMsg.Style["color"] = "Red";
                dvErrMsg.InnerHtml = retStr;
                popDeptExp.Show();
            }
        }
        else if (type == 2)//Add new
        {
            dept.type = 0;
            retStr = xms.addExpItemByDept(dept);
            if (retStr.ToLower().Contains("succes"))
            {
                dvMainMsg.Style["color"] = "Green";
                dvMainMsg.InnerHtml = retStr;
                Clearfields();
                Session.Remove("DeptExpdt");
                SortGrid();
                popDeptExp.Hide();
            }
            else
            {
                dvErrMsg.Style["color"] = "Red";
                dvErrMsg.InnerHtml = retStr;
                popDeptExp.Show();
            }
        }
        else//Delete
        {
            dept.type = 2;
            retStr = xms.updateItemByDept(dept);
            if (retStr.ToLower().Contains("succes"))
            {
                Session.Remove("DeptExpdt");
                SortGrid();
                popDeptExp.Hide();
            }
            popAlert.Hide();
        }
    }

    private void Clearfields()
    {
        dvErrMsg.InnerHtml = txtAccCode.Text = txtExpItem.Text = string.Empty;
    }

    #endregion

    #region Delete Classification

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        lblAlert.Text = string.Empty;
        if (string.Compare(hdnAlertType.Value, "delete", true) == 0)
            SaveData(3);
    }

    #endregion

    #region Import Classification Data

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        btnDisplayData.Attributes.Add("onclick", "javascript:return  CheckForFile();");
        dvDisplay.Style["display"] = "block";
        dvUpload.Style["display"] = "none";
        //btnUploadExpItems.Visible = false;
        //btnClearData.Visible = false;
        //btnDisplayData.Visible = true;
        dvUploadErr.Style["color"] = "Red";
        dvUploadErr.InnerHtml = "Please browse and select a file of type .xls or .xlsx";
        Session.Remove("dtUpd_Exp");
        gvImpExpItems.DataBind();
        popUpload.Show();
    }

    protected void btlDisplayData_Click(object sender, EventArgs e)
    {
        //btnUploadExpItems.Visible = true;
        //btnClearData.Visible = true;
        //btnDisplayData.Visible = false;
        dvDisplay.Style["display"] = "none";
        dvUpload.Style["display"] = "block";
        dvUploadErr.InnerHtml = string.Empty;
        string fileExtension = Path.GetExtension(fupdExp.PostedFile.FileName);
        if (fileExtension == ".xls" || fileExtension == ".xlsx")
        {
            DataTable dtUpd = GetUploadedData();
            //Add extra column in the datatable to show failure messages if any
            if (!(dtUpd.Columns.Contains("FailureMessage")))
                dtUpd.Columns.Add("FailureMessage");
            Session["dtUpd_Exp"] = dtUpd;
            gvImpExpItems.DataSource = dtUpd;
            gvImpExpItems.DataBind();
            gvImpExpItems.Columns[0].Visible = false;
        }
        popUpload.Show();
    }

    protected void btnClearData_Click(object sender, EventArgs e)
    {
        Session.Remove("dtUpd_Exp");
        gvImpExpItems.DataBind();
        popUpload.Show();
        //btnUploadExpItems.Visible = false;
        //btnClearData.Visible = false;
        //btnDisplayData.Visible = true;
        dvDisplay.Style["display"] = "block";
        dvUpload.Style["display"] = "none";
        dvUploadErr.InnerHtml = string.Empty;
    }

    protected void UploadExpItems(object sender, EventArgs e)
    {
        ValidateExpItemData((DataTable)Session["dtUpd_Exp"]);
    }

    private DataTable GetUploadedData()
    {
        string connectionString = "";
        string fileName = Path.GetFileName(fupdExp.PostedFile.FileName);
        string fileExtension = Path.GetExtension(fupdExp.PostedFile.FileName);
        string path = Server.MapPath("..");
        string fileLocation = path + "\\" + newPath + "\\" + fileName;
        fupdExp.SaveAs(fileLocation);

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

    private void ValidateExpItemData(DataTable dtUpd)
    {
        bool oneOrg = true;
        bool validComp = true;
        bool validDept = true;
        DataTable dtFailed = new DataTable();
        int count = 0;

        dtFailed = dtUpd.Clone();

        //Validate Organization
        //for (int i = 0; i < dtUpd.Rows.Count; i++)
        //{
        //    if (dtUpd.Rows[0]["Organization"].ToString() != dtUpd.Rows[i]["Organization"].ToString())
        //    {
        //        oneOrg = false;
        //        dtUpd.Rows[i]["FailureMessage"] = "Organization names are not unique";
        //        dtFailed.ImportRow(dtUpd.Rows[i]);
        //        dtUpd.Rows[i].Delete();
        //    }
        //}
        if (oneOrg)
        {
            //string str = xms.getCompCodes(dtUpd.Rows[0]["Organization"].ToString(), 1);
            //List<CompanyCodesVO> lst = ser.Deserialize<List<CompanyCodesVO>>(str);
            //DataTable dtCompCodes = Utility.ConvertToDataTable(lst);
            ////ValidateOrgName
            //if (dtCompCodes.Rows.Count > 0)
            //{
            //if (dtCompCodes.Rows[0]["OrgID"].ToString() == Session["OrgID"].ToString())
            //{
            //Validate all the CompCodes
            //List<string> lstCC = new List<string>();
            //foreach (DataRow row in dtCompCodes.Rows)
            //{
            //    //Add all the CompanyCodes go from db by passing orgname to a list
            //    lstCC.Add(row["CompCode"].ToString());
            //}

            //for (int i = 0; i < dtUpd.Rows.Count; i++)
            //{
            //    //validate each CompanyCode of the uploaded data whether contains in the List or not and send the failed record to dtFailed
            //    if (!lstCC.Contains(dtUpd.Rows[i]["CompCode"].ToString()))
            //    {
            //        validComp = false;
            //        dtUpd.Rows[i]["FailureMessage"] = "Invalid CompanyCode";
            //        dtFailed.ImportRow(dtUpd.Rows[i]);
            //        dtUpd.Rows[i].Delete();
            //    }
            //}
            if (validComp)
            {
                //check for valid Department Codes
                List<string> lstDept = new List<string>();
                for (int i = 0; i < dtUpd.Rows.Count; i++)
                {
                    //if (i == 0)
                    lstDept = GetDeptList(ddlCompCode.SelectedValue);
                    //else
                    //{
                    //    //Check whether current row and previous row have similar Compcode to avoid unnecessary db call
                    //    if (dtUpd.Rows[i]["CompCode"].ToString() != dtUpd.Rows[i - 1]["CompCode"].ToString())
                    //        lstDept = GetDeptList(dtUpd.Rows[i]["CompCode"].ToString());
                    //}
                    if (!lstDept.Contains(dtUpd.Rows[i]["DEPARTMENTCODE"].ToString()))
                    {
                        //If DeptCode is invalid send the failed record to dtFailed
                        validDept = false;
                        dtUpd.Rows[i]["FailureMessage"] = "Invalid DepartmentCode";
                        dtFailed.ImportRow(dtUpd.Rows[i]);
                        dtUpd.Rows[i].Delete();
                    }
                }
                if (validDept)
                {
                    if (dtUpd.Rows.Count > 0)
                    {
                        //decalre variables for parameters
                        string appString = "###";
                        string accName, accntInterCompFlag, accntLevelCode, accntSegments, accntSublegCode, accountCode, accountName, acctHier,
                            acctLongCode, acctType, addedBy, addedOn, bankType, seqId, type, compCode, ctrlAccntFlag, ctrlAcct, deptCode, expcode,
                            expItem, modifiedBy, modifiedOn, orgId, QBAccId, QBID, qbItemId, reimb;
                        accName = accntInterCompFlag = accntLevelCode = accntSegments = accntSublegCode = accountCode = accountName = acctHier =
                            acctLongCode = acctType = addedBy = addedOn = bankType = seqId = type = compCode = ctrlAccntFlag = ctrlAcct = deptCode = expcode =
                            expItem = modifiedBy = modifiedOn = orgId = QBAccId = QBID = qbItemId = reimb = string.Empty;
                        //decalre variables for parameters

                        for (int i = 0; i < dtUpd.Rows.Count; i++)
                        {
                            accName += " " + appString;
                            accntInterCompFlag += " " + appString;
                            accntLevelCode += " " + appString;
                            accntSegments += " " + appString;
                            accntSublegCode += " " + appString;
                            accountCode += (dtUpd.Rows[i]["ACCOUNTNUMBER"].ToString() == string.Empty ? " " : dtUpd.Rows[i]["ACCOUNTNUMBER"].ToString()) + appString;
                            accountName += " " + appString;
                            acctHier += " " + appString;
                            acctLongCode += " " + appString;
                            acctType += (dtUpd.Rows[i]["ACCOUNTTYPE"].ToString() == string.Empty ? " " : dtUpd.Rows[i]["ACCOUNTTYPE"].ToString()) + appString;
                            addedBy += Session["UserID"].ToString() + appString;
                            addedOn += DateTime.Now.ToShortDateString() + appString;
                            bankType += (dtUpd.Rows[i]["BANKINGTYPE"].ToString() == string.Empty ? " " : dtUpd.Rows[i]["BANKINGTYPE"].ToString()) + appString;
                            compCode += ddlCompCode.SelectedValue + appString;
                            ctrlAccntFlag += " " + appString;
                            ctrlAcct += (dtUpd.Rows[i]["CTRLACCOUNTNUMBER"].ToString() == string.Empty ? " " : dtUpd.Rows[i]["CTRLACCOUNTNUMBER"].ToString()) + appString;
                            deptCode += dtUpd.Rows[i]["DEPARTMENTCODE"].ToString() + appString;
                            expcode += " " + appString;
                            expItem += dtUpd.Rows[i]["ACCOUNTNAME"].ToString() + appString;
                            modifiedBy += Session["UserID"].ToString() + appString;
                            modifiedOn += DateTime.Now.ToShortDateString() + appString;
                            orgId += Session["OrgID"].ToString() + appString;
                            QBAccId += "0" + appString;
                            QBID += "0" + appString;
                            qbItemId += "0" + appString;
                            reimb += " " + appString;
                            seqId += "0" + appString;
                            type += "0" + appString;
                            count++;
                            //    DeptVO dept = new DeptVO();
                            //    dept.accountCode = dtUpd.Rows[i]["ACCOUNTCODE"].ToString();
                            //    dept.addedBy = ut.NullSafeInteger(Session["UserID"]);
                            //    dept.addedOn = DateTime.Now.ToShortDateString();
                            //    dept.compCode = dtUpd.Rows[i]["COMPCODE"].ToString();
                            //    dept.deptCode = dtUpd.Rows[i]["DEPARTMENTCODE"].ToString();
                            //    dept.expItem = dtUpd.Rows[i]["EXPENSEITEM"].ToString();
                            //    dept.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
                            //    dept.modifiedOn = DateTime.Now.ToShortDateString();
                            //    dept.orgId = ut.NullSafeInteger(Session["OrgID"]);
                            //    dept.expcode = dtUpd.Rows[i]["CODEKEY"].ToString();
                            //    dept.seqId = 0;
                            //    dept.type = 2;
                            //    string retStr = xms.addExpItemByDept(dept);
                            //    if (!retStr.ToLower().Contains("succes") || retStr.ToLower().Contains("fail"))
                            //    {
                            //        dtUpd.Rows[i]["FailureMessage"] = retStr;
                            //        dtFailed.ImportRow(dtUpd.Rows[i]);
                            //        dtUpd.Rows[i].Delete();
                            //    }
                        }

                        DeptMulVO dept = new DeptMulVO();
                        dept.accName = accName.Substring(0, accName.Length - 3);
                        dept.accntInterCompFlag = accntInterCompFlag.Substring(0, accntInterCompFlag.Length - 3);
                        dept.accntLevelCode = accntLevelCode.Substring(0, accntLevelCode.Length - 3);
                        dept.accntSegments = accntSegments.Substring(0, accntSegments.Length - 3);
                        dept.accntSublegCode = accntSublegCode.Substring(0, accntSublegCode.Length - 3);
                        dept.accountCode = accountCode.Substring(0, accountCode.Length - 3);
                        dept.accountName = accountName.Substring(0, accountName.Length - 3);
                        dept.acctHier = acctHier.Substring(0, acctHier.Length - 3);
                        dept.acctLongCode = acctLongCode.Substring(0, acctLongCode.Length - 3);
                        dept.acctType = acctType.Substring(0, acctType.Length - 3);
                        dept.addedBy = addedBy.Substring(0, addedBy.Length - 3);
                        dept.addedOn = addedOn.Substring(0, addedOn.Length - 3);
                        dept.bankType = bankType.Substring(0, bankType.Length - 3);
                        dept.compCode = compCode.Substring(0, compCode.Length - 3);
                        dept.ctrlAccntFlag = ctrlAccntFlag.Substring(0, ctrlAccntFlag.Length - 3);
                        dept.ctrlAcct = ctrlAcct.Substring(0, ctrlAcct.Length - 3);
                        dept.deptCode = deptCode.Substring(0, deptCode.Length - 3);
                        dept.expcode = expcode.Substring(0, expcode.Length - 3);
                        dept.expItem = expItem.Substring(0, expItem.Length - 3);
                        dept.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
                        dept.modifiedOn = modifiedOn.Substring(0, modifiedOn.Length - 3);
                        dept.orgId = orgId.Substring(0, orgId.Length - 3);
                        dept.QBAccId = QBAccId.Substring(0, QBAccId.Length - 3);
                        dept.QBID = QBID.Substring(0, QBID.Length - 3);
                        dept.qbItemId = qbItemId.Substring(0, qbItemId.Length - 3);
                        dept.reimb = reimb.Substring(0, reimb.Length - 3);
                        dept.seqId = seqId.Substring(0, seqId.Length - 3);
                        dept.type = type.Substring(0, type.Length - 3);
                        string retStr = xms.addExpItemByDeptMul(dept);
                    }
                }
            }
            else
            {
                dvUploadErr.Style["color"] = "Red";
                dvUploadErr.InnerHtml = "Invalid Company Code. Please upload with valid data.";
            }
            //}
            //else
            //{
            //    dvUploadErr.Style["color"] = "Red";
            //    dvUploadErr.InnerHtml = "Invalid Organization name. Please upload with valid data.";
            //}
            //}
            //else
            //{
            //    dvUploadErr.Style["color"] = "Red";
            //    dvUploadErr.InnerHtml = "Invalid Organization name. Please upload with valid data.";
            //}
        }
        //else
        //{
        //    dvUploadErr.Style["color"] = "Red";
        //    dvUploadErr.InnerHtml = "Please provide only one Organization name for all the data.";
        //}
        if (dtFailed.Rows.Count > 0)
        {
            dvUploadErr.Style["color"] = "Red";
            dvUploadErr.InnerHtml = "Data upload is not completely successful. Please check below for failed data.";
            gvImpExpItems.DataSource = dtFailed;
            gvImpExpItems.DataBind();
            gvImpExpItems.Columns[0].Visible = true;
            popUpload.Show();
        }
        else
        {
            Session.Remove("dtUpd_Exp");
            Session.Remove("DeptExpdt");
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = "Data uploaded successfully";
            SortGrid();
            popUpload.Hide();
        }
    }

    private List<string> GetDeptList(string compCode)
    {
        DataTable dtDept = new DataTable();
        List<string> lstDept = new List<string>();
        string str1 = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), compCode, "DEPT");
        List<CodeValueVO> lst1 = ser.Deserialize<List<CodeValueVO>>(str1);
        dtDept = Utility.ConvertToDataTable(lst1);
        foreach (DataRow row in dtDept.Rows)
        {
            lstDept.Add(row["CodeKey"].ToString());
        }
        return lstDept;
    }

    #endregion

    #region Change Accounts Department

    protected void btnChangeAccDept_Click(object sender, EventArgs e)
    {
        ClearData();
        LoadDefaultDataForAccDept();
        popChangeAccDept.Show();
    }

    private void LoadDefaultDataForAccDept()
    {
        //Load From and To Departmentsm
        string strDept = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
        List<CodeValueVO> lstDept = ser.Deserialize<List<CodeValueVO>>(strDept);
        DataTable dtDept = Utility.ConvertToDataTable(lstDept);

        ddlFromDept.DataSource = dtDept;
        ddlFromDept.DataTextField = "Description";
        ddlFromDept.DataValueField = "CodeKey";
        ddlFromDept.DataBind();
        ddlFromDept.Items.Insert(0, "Please Select");
        ddlFromDept.Items.FindByText("Please Select").Value = "0";

        ddlToDept.DataSource = dtDept;
        ddlToDept.DataTextField = "Description";
        ddlToDept.DataValueField = "CodeKey";
        ddlToDept.DataBind();
    }

    private void BindLists(ListBox lst, string dept, int type)
    {
        string strAcc = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, dept, type, string.Empty);
        List<DeptVO> lstAcc = ser.Deserialize<List<DeptVO>>(strAcc);
        DataTable dt = Utility.ConvertToDataTable(lstAcc);

        //filter data with selected department
        //DataView dv = new DataView(dt, "deptCode IN (" + dept + ")", "accName", DataViewRowState.CurrentRows);
        //DataTable dtv = dv.ToTable();
        //filter data with selected department

        //add new column containing account number and account name seperated with --
        if (!dt.Columns.Contains("AcountClss"))
            dt.Columns.Add("AcountClss");

        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AcountClss"] = dt.Rows[i]["acctLongCode"].ToString() + "--" + dt.Rows[i]["accName"].ToString();
        //add new column containing account number and account name seperated with --

        DataTable dtTemp = dt.DefaultView.ToTable(true, "AcountClss", "accName");

        //load list with hierarchical data
        lst.DataSource = GetHierarchicalData(dtTemp, "AcountClss");
        lst.DataTextField = "AcountClss";
        lst.DataValueField = "accName";
        lst.DataBind();
        //load list with hierarchical data
    }

    protected void ddlFromDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        DisplayMsg(string.Empty, string.Empty);
        BindLists(lstFromDept, ddlFromDept.SelectedValue, 2);
        popChangeAccDept.Show();
    }

    protected void ddlToDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        DisplayMsg(string.Empty, string.Empty);
        string str = string.Empty;
        int i = 0;

        //get multi selected destination departments
        DropDownCheckBoxes ddlToDept = (DropDownCheckBoxes)this.FindControl("ddlToDept");
        foreach (ListItem itemDept in (ddlToDept as ListControl).Items)
        {
            if (itemDept.Selected)
            {
                str += itemDept.Value + ",";
                i++;
            }
        }

        if (i > 0)
            str = (i + 1).ToString() + "," + str;
        ddlToDept.Texts.SelectBoxCaption = i + "selected";
        BindLists(lstToDept, str.TrimEnd(','), 3);
        popChangeAccDept.Show();
    }

    protected void btnCopyAccDept_Click(object sender, EventArgs e)
    {
        int cnt = 0;
        if (lstFromDept.Items.Count > 0)
        {
            foreach (ListItem item in lstFromDept.Items)
                if (item.Selected)
                    cnt++;
        }
        if (cnt > 0)
        {
            DisplayMsg(string.Empty, string.Empty);
            int deptCnt = 0;
            DropDownCheckBoxes ddlToDept = (DropDownCheckBoxes)this.FindControl("ddlToDept");
            foreach (ListItem itemDept in (ddlToDept as ListControl).Items)
                if (itemDept.Selected && itemDept.Value == ddlFromDept.SelectedValue)
                    deptCnt++;
            if (deptCnt > 0)
                DisplayMsg("You cannot copy account(s) within same department.", "Red");
            else
            {
                hdnCopyType.Value = "1";
                ShowChangeAccDeptAlert("Are you sure you want to copy selected account(s)?", true, "   No");
            }
        }
        else
        {
            if (lstFromDept.Items.Count == 0)
                DisplayMsg("Please select department which has accounts assigned.", "Red");
            else
                DisplayMsg("Please select atleast one account to process.", "Red");
        }
        popChangeAccDept.Show();
    }

    protected void btnMoveAccDept_Click(object sender, EventArgs e)
    {
        int cnt = 0;
        if (lstFromDept.Items.Count > 0)
        {
            foreach (ListItem item in lstFromDept.Items)
                if (item.Selected)
                    cnt++;
        }
        if (cnt > 0)
        {
            DisplayMsg(string.Empty, string.Empty);
            int deptCnt = 0;
            DropDownCheckBoxes ddlToDept = (DropDownCheckBoxes)this.FindControl("ddlToDept");
            foreach (ListItem itemDept in (ddlToDept as ListControl).Items)
                if (itemDept.Selected && itemDept.Value == ddlFromDept.SelectedValue)
                    deptCnt++;
            if (deptCnt > 0)
                DisplayMsg("You cannot move account(s) within same department.", "Red");
            else
            {
                hdnCopyType.Value = "2";
                bool valid = GetPendingRequestCount();
                if (valid)
                    ShowChangeAccDeptAlert("Are you sure you want to move selected account(s)?", true, "   No");
            }
        }
        else
        {
            if (lstFromDept.Items.Count == 0)
                DisplayMsg("Please select department which has accounts assigned.", "Red");
            else
                DisplayMsg("Please select atleast one account to process.", "Red");
        }
        popChangeAccDept.Show();
    }

    protected void btnNullAccDept_Click(object sender, EventArgs e)
    {
        int cnt = 0;
        if (lstFromDept.Items.Count > 0)
        {
            foreach (ListItem item in lstFromDept.Items)
                if (item.Selected)
                    cnt++;
        }
        if (cnt > 0)
        {
            DisplayMsg(string.Empty, string.Empty);
            hdnCopyType.Value = "3";
            bool valid = GetPendingRequestCount();
            if (valid)
                ShowChangeAccDeptAlert("Are you sure you want to remove department for selected account(s)?", true, "   No");
        }
        else
        {
            if (lstFromDept.Items.Count == 0)
                DisplayMsg("Please select department which has accounts assigned.", "Red");
            else
                DisplayMsg("Please select atleast one account to process.", "Red");
        }
        popChangeAccDept.Show();
    }

    protected void btnConfChangeAccDept_Click(object sender, EventArgs e)
    {
        //bool valid = true;
        //if (hdnCopyType.Value == "2" || hdnCopyType.Value == "3")
        //    valid = GetPendingRequestCount();
        //if (valid)
        PerformRequiredAction();
    }

    private void ShowChangeAccDeptAlert(string msg, bool confVisible, string confText)
    {
        lblMsgChangeAccDept.Text = msg;
        btnConfChangeAccDept.Visible = confVisible;
        btnCancelChangeAccDept.Text = confText;
        popAlertChangeAccDept.Show();
    }

    private void PerformRequiredAction()
    {
        string retStr = CopyAccntsToDept();
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg(retStr, "Green");
            //load from accounts list
            BindLists(lstFromDept, ddlFromDept.SelectedValue, 2);

            //load to accounts list
            //get multi selected destination departments
            string str = string.Empty;
            str = GetSelectedToDept();
            BindLists(lstToDept, str.TrimEnd(','), 3);
        }
        else
            DisplayMsg(retStr, "Red");
        popChangeAccDept.Show();
    }

    private string CopyAccntsToDept()
    {
        foreach (ListItem item in lstFromDept.Items)
        {
            if (item.Selected)
            {
                string[] arr = item.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                accntCode += arr[0].Trim() + appString;
                accntName += arr[1].Trim() + appString;
                compCode += ddlCompCode.SelectedValue + appString;
                fromDept += ddlFromDept.SelectedValue + appString;
                orgId += Session["OrgID"] + appString;
                toDept += GetSelectedToDept() + appString;
                type += hdnCopyType.Value + appString;
                userId += Session["UserID"] + appString;
            }
        }

        CopyAccntsDeptMulVO copyAcc = new CopyAccntsDeptMulVO();
        copyAcc.accntCode = accntCode.Substring(0, accntCode.Length - 3);
        copyAcc.accntName = accntName.Substring(0, accntName.Length - 3);
        copyAcc.compCode = compCode.Substring(0, compCode.Length - 3);
        copyAcc.fromDept = fromDept.Substring(0, fromDept.Length - 3);
        copyAcc.orgId = orgId.Substring(0, orgId.Length - 3);
        copyAcc.toDept = toDept.Substring(0, toDept.Length - 3);
        copyAcc.type = type.Substring(0, type.Length - 3);
        copyAcc.userId = userId.Substring(0, userId.Length - 3);
        return xms.copyAccntsToDeptMul(copyAcc);
    }

    private bool GetPendingRequestCount()
    {
        string strAcc = string.Empty;
        string retStr = string.Empty;
        bool valid = true;
        int count = 0;
        //format string with selected accounts to fetch pending requests count
        foreach (ListItem itemAcc in lstFromDept.Items)
        {
            if (itemAcc.Selected)
            {
                string[] arr = itemAcc.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                strAcc += arr[0].Trim() + ",";
                count++;
            }
        }
        strAcc = (count + 1) + "," + strAcc.TrimEnd(',');

        //get pending requests count for the selected accounts
        CopyAccntsDeptVO copy = new CopyAccntsDeptVO();
        copy.accntCode = strAcc;
        copy.accntName = string.Empty;
        copy.compCode = Session["CompCode"].ToString();
        copy.count = string.Empty;
        copy.deptName = ddlFromDept.SelectedValue;
        copy.fromDept = string.Empty;
        copy.orgId = ut.NullSafeInteger(Session["OrgID"]);
        copy.toDept = "";
        copy.type = 0;
        copy.userId = ut.NullSafeInteger(Session["UserID"]);
        retStr = xms.getRequestAcctCnt(copy);
        List<CopyAccntsDeptVO> lst = ser.Deserialize<List<CopyAccntsDeptVO>>(retStr);
        DataTable dtPend = Utility.ConvertToDataTable(lst);

        if (!string.IsNullOrEmpty(dtPend.Rows[0]["count"].ToString()))
        {
            string[] arr = dtPend.Rows[0]["count"].ToString().Split('~');
            string strForm = string.Empty;
            strForm += "<b>Pending requests exists with the selected account(s) in department " + ddlFromDept.SelectedValue + ".</b></br></br>";
            for (int i = 0; i < arr.Length; i++)
                //strForm += arr[i].Split(',')[1] + " has " + arr[i].Split(',')[0] +" pending requests.</br>";
                strForm += arr[i].Split(',')[0] + " requests are with account " + arr[i].Split(',')[1] + ".</br>";


            ShowChangeAccDeptAlert(strForm, false, "   Close");
            valid = false;
        }
        return valid;
    }

    private void DisplayMsg(string msg, string color)
    {
        dvChgAccDeptMsg.InnerHtml = msg;
        dvChgAccDeptMsg.Style["color"] = color;
    }

    private void ClearData()
    {
        lstFromDept.Items.Clear();
        lstToDept.Items.Clear();
        DisplayMsg(string.Empty, string.Empty);
    }

    private string GetSelectedToDept()
    {
        string str = string.Empty;
        int count = 0;
        DropDownCheckBoxes ddlToDept = (DropDownCheckBoxes)this.FindControl("ddlToDept");
        foreach (ListItem itemDept in (ddlToDept as ListControl).Items)
        {
            if (itemDept.Selected)
            {
                str += itemDept.Value + ",";
                count++;
            }
        }
        str = (count + 1) + "," + str;
        return str.TrimEnd(',');
    }

    #endregion

    #region Classes

    protected void ShowClasses(object sender, EventArgs e)
    {
        txtFilterClass.Attributes.Add("onkeyup", "FilterClass(this);");
        SortClassGrid();
        popClass.Show();
    }

    protected void SortClassExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Class"] = lnk.ID;

        if (Session["SortDir_Class"] == null || Session["SortDir_Class"].ToString() == "Desc")
            Session["SortDir_Class"] = "Asc";
        else
            Session["SortDir_Class"] = "Desc";

        Session["SortExpr_Class"] = e.CommandArgument;
        SortClassGrid();
    }

    private void LoadClasses()
    {
        DataTable dt = new DataTable();
        if (Session["Classes"] == null)
        {
            string str = xms.getClassRef(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue);
            List<ImportQBClasVO> lst = ser.Deserialize<List<ImportQBClasVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Classes"] = GetHierarchicalData(dt, "className");
        }
        else
            dt = (DataTable)Session["Classes"];
    }

    private void SortClassGrid()
    {
        DataTable dt = new DataTable();
        LoadClasses();
        dt = (DataTable)Session["Classes"];
        if ((Session["SortExpr_Class"] != null) && Session["SortDir_Class"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Class"].ToString() + " " + Session["SortDir_Class"].ToString();
            gvClass.DataSource = view.ToTable();
        }
        else
            gvClass.DataSource = dt.DefaultView.ToTable();
        gvClass.DataBind();
    }

    protected void gvClass_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnIsActive = (HiddenField)e.Row.FindControl("hdnIsActive");
            CheckBox chkClssActive = (CheckBox)e.Row.FindControl("chkClssActive");

            if (hdnIsActive.Value.ToLower() == "true")
                chkClssActive.Checked = true;
            else
                chkClssActive.Checked = false;

            chkClssActive.Enabled = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortExpr_Class"] != null && Session["Control_Class"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Class"].ToString());
                if (Session["SortExpr_Class"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    #endregion
}