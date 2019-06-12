using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class SyncAcc : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;

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
                txtKeywordSearchAssigned.Attributes.Add("onkeyup", "FilterAssngd(this, 1);");
                txtKeywordSearchUnAssigned.Attributes.Add("onkeyup", "FilterUnAssngd(this, 1);");
                txtItemKeywordSearchAssigned.Attributes.Add("onkeyup", "FilterAssngd(this, 2);");
                txtItemKeywordSearchUnAssigned.Attributes.Add("onkeyup", "FilterUnAssngd(this, 2);");

                Session.Remove("QBAccData");
                Session.Remove("QBItemsData");
                lblOrgID.Text = Session["SOrgName"].ToString();
                GetDefaultData();
                SortGrid();
                SortDeptAssidnedGrid();
                btnAllocate.Attributes.Add("onclick", "javascript:return validateAccCheckBoxes(1);");
                btnUnAllocate.Attributes.Add("onclick", "javascript:return validateAccCheckBoxes(2);");
                txtKeywordSearchUnAssigned.Focus();
                dvAlloc.Style["display"] = "none";
                dvUnAlloc.Style["display"] = "none";
                dvITemsAlloc.Style["display"] = "none";
                dvItemsUnAlloc.Style["display"] = "none";
                dvItems.Style["display"] = "none";
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("QBAccData");
        SortGrid();
    }

    protected void ddlTypes_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlTypes.SelectedValue == "ACCOUNTS")
        {
            dvAccounts.Style["display"] = "block";
            dvItems.Style["display"] = "none";
        }
        else if (ddlTypes.SelectedValue == "ITEM")
        {
            GetItemsDept();
            SortItemsGrid();
            SortDeptAssidnedItemsGrid();
            dvAccounts.Style["display"] = "none";
            dvItems.Style["display"] = "block";
        }
    }

    protected void gvAccounts_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_AccSync"] != null && Session["Control_AccSync"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_AccSync"].ToString());
                if (Session["SortDir_AccSync"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvAccountsByDept_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_AccSyncAssnd"] != null && Session["Control_AccSyncAssnd"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_AccSyncAssnd"].ToString());
                if (Session["SortDir_AccSyncAssnd"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void btnAllocate_Click(object sender, EventArgs e)
    {
        //assign selected department and save data
        DataTable dt = (DataTable)Session["QBAccData"];

        DataTable dtDeptAssnd = dt.Clone();
        int i = 0, j = 0;
        foreach (GridViewRow row in gvAccounts.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                dtDeptAssnd.ImportRow(dt.Rows[i]);
                dtDeptAssnd.Rows[j]["deptCode"] = ddlDept.SelectedValue;
                dtDeptAssnd.Rows[j]["description"] = ddlDept.SelectedItem.Text;
                dtDeptAssnd.Rows[j]["deptAssigned"] = "Y";
                j++;
            }
            i++;
        }
        SaveAccountsWithDept(dtDeptAssnd);
    }

    protected void btnUnAllocate_Click(object sender, EventArgs e)
    {
        //Remove assigned departments of the selected rows in second gridview and save the changes to the database.
        DataTable dtDeptAssnd = (DataTable)Session["DeptAssnd"];
        DataTable dtDeptUnAssnd = dtDeptAssnd.Clone();
        int i = 0, j = 0;
        foreach (GridViewRow row in gvAccountsByDept.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                dtDeptUnAssnd.ImportRow(dtDeptAssnd.Rows[i]);
                dtDeptUnAssnd.Rows[j]["deptCode"] = string.Empty;
                dtDeptUnAssnd.Rows[j]["description"] = string.Empty;
                dtDeptUnAssnd.Rows[j]["deptAssigned"] = string.Empty;
                j++;
            }
            i++;
        }
        SaveAccountsWithDept(dtDeptUnAssnd);
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_AccSync"] = lnk.ID;

        if (Session["SortDir_AccSync"] == null || Session["SortDir_AccSync"].ToString() == "Desc")
            Session["SortDir_AccSync"] = "Asc";
        else
            Session["SortDir_AccSync"] = "Desc";

        Session["SortExpr_AccSync"] = e.CommandArgument;
        SortGrid();
    }

    protected void SortExpressionDeptAssnd(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_AccSyncAssnd"] = lnk.ID;

        if (Session["SortDir_AccSyncAssnd"] == null || Session["SortDir_AccSyncAssnd"].ToString() == "Desc")
            Session["SortDir_AccSyncAssnd"] = "Asc";
        else
            Session["SortDir_AccSyncAssnd"] = "Desc";

        Session["SortExpr_AccSyncAssnd"] = e.CommandArgument;
        SortDeptAssidnedGrid();
    }

    protected void SortItemExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ItemSync"] = lnk.ID;

        if (Session["SortDir_ItemSync"] == null || Session["SortDir_ItemSync"].ToString() == "Desc")
            Session["SortDir_ItemSync"] = "Asc";
        else
            Session["SortDir_ItemSync"] = "Desc";

        Session["SortExpr_ItemSync"] = e.CommandArgument;
        SortGrid();
    }

    protected void SortItemExpressionDeptAssnd(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ItemSyncAssnd"] = lnk.ID;

        if (Session["SortDir_ItemSyncAssnd"] == null || Session["SortDir_ItemSyncAssnd"].ToString() == "Desc")
            Session["SortDir_ItemSyncAssnd"] = "Asc";
        else
            Session["SortDir_ItemSyncAssnd"] = "Desc";

        Session["SortExpr_ItemSyncAssnd"] = e.CommandArgument;
        SortDeptAssidnedGrid();
    }

    protected void btnSyncWithQB_Click(object sender, EventArgs e)
    {
        //chkAccounts.Checked = chkItems.Checked = chkVendors.Checked = false;
        lblAlert.Text = "Are you sure you want to import data for selected items?";
        popAlert.Show();
    }

    protected void SyncConfirm(object sender, EventArgs e)
    {
        string acc = chkAccounts.Checked ? "Y" : "N";
        string item = chkItems.Checked ? "Y" : "N";
        string vend = chkVendors.Checked ? "Y" : "N";
        string clss = chkClasses.Checked ? "Y" : "N";

        string retStrAcc = string.Empty;
        string retStrItem = string.Empty;
        string retStrVend = string.Empty;
        string retStrClss = string.Empty;
        string displayStr = string.Empty;

        if (chkAccounts.Checked)
            retStrAcc = xms.importQBAccounts(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (chkItems.Checked)
            retStrItem = xms.importQBItems(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (chkVendors.Checked)
            retStrVend = xms.importQBVend(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (chkClasses.Checked)
            retStrClss = xms.importQBClassRef(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));

        if (!string.IsNullOrEmpty(retStrAcc) && !retStrAcc.ToLower().Contains("fail"))
        {
            displayStr += "Accounts,";
            Session.Remove("QBAccData");
            SortGrid();
        }
        if (!string.IsNullOrEmpty(retStrItem) && !retStrItem.ToLower().Contains("fail"))
        {
            displayStr += " Items, ";
            Session.Remove("QBItemsData");
            SortItemsGrid();
        }
        if (!string.IsNullOrEmpty(retStrVend) && !retStrVend.ToLower().Contains("fail"))
            displayStr += " Vendors, ";
        if (!string.IsNullOrEmpty(retStrClss) && !retStrClss.ToLower().Contains("fail"))
            displayStr += " Classes";

        if (displayStr.Length > 0)
        {
            dvMsg.Style["color"] = "Green";
            dvMsg.InnerHtml = displayStr.Trim().TrimEnd(',') + " updated successfully.";
        }
        else
        {
            dvMsg.Style["color"] = "Red";
            dvMsg.InnerHtml = "Failed to import the data. Please try again.";
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("QBAccData");
        Session.Remove("DeptAssnd");
        SortGrid();
        SortDeptAssidnedGrid();
        Session.Remove("QBItemsData");
        Session.Remove("DeptAssndItems");
        SortItemsGrid();
        SortDeptAssidnedItemsGrid();
        dvMsg.InnerHtml = string.Empty;
        chkAccounts.Checked = chkItems.Checked = chkVendors.Checked = false;
    }

    protected void gvDeptUnAssignedItems_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_ItemSync"] != null && Session["Control_ItemSync"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ItemSync"].ToString());
                if (Session["SortDir_ItemSync"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvDeptAssignedItems_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_ItemSyncAssnd"] != null && Session["Control_ItemSyncAssnd"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ItemSyncAssnd"].ToString());
                if (Session["SortDir_ItemSyncAssnd"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void btnDeptITemAllocate_Click(object sender, EventArgs e)
    {
        //assign selected department and save data
        DataTable dt = (DataTable)Session["QBItemsData"];

        DataTable dtDeptAssnd = dt.Clone();
        int i = 0, j = 0;
        foreach (GridViewRow row in gvDeptUnAssignedItems.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                dtDeptAssnd.ImportRow(dt.Rows[i]);
                dtDeptAssnd.Rows[j]["deptCode"] = ddlItemDept.SelectedValue;
                dtDeptAssnd.Rows[j]["description"] = ddlItemDept.SelectedItem.Text;
                dtDeptAssnd.Rows[j]["deptAssigned"] = "Y";
                j++;
            }
            i++;
        }
        SaveITemsWithDept(dtDeptAssnd);
    }

    protected void btnDeptItemUnAllocate_Click(object sender, EventArgs e)
    {
        //Remove assigned departments of the selected rows in second gridview and save the changes to the database.
        DataTable dtDeptAssnd = (DataTable)Session["DeptAssndItems"];
        DataTable dtDeptUnAssnd = dtDeptAssnd.Clone();
        int i = 0, j = 0;
        foreach (GridViewRow row in gvDeptAssignedItems.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                dtDeptUnAssnd.ImportRow(dtDeptAssnd.Rows[i]);
                dtDeptUnAssnd.Rows[j]["deptCode"] = string.Empty;
                dtDeptUnAssnd.Rows[j]["description"] = string.Empty;
                dtDeptUnAssnd.Rows[j]["deptAssigned"] = string.Empty;
                j++;
            }
            i++;
        }
        SaveITemsWithDept(dtDeptUnAssnd);
    }

    protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        SortDeptAssidnedGrid();
        if (!string.IsNullOrEmpty(hdnAlloc.Value))
            dvAlloc.Style["display"] = hdnAlloc.Value;
    }

    protected void ddlItemDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        SortDeptAssidnedItemsGrid();
        if (!string.IsNullOrEmpty(hdnAlloc.Value))
            dvITemsAlloc.Style["display"] = hdnAlloc.Value;
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

    #region private methods

    private void GetItemsDept()
    {
        //Get Departments
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        ddlItemDept.DataSource = dt;
        ddlItemDept.DataBind();
        //Get Departments 
    }

    private void GetDefaultData()
    {
        //Get CompCodes
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
        //Get CompCodes

        //Get Departments
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        ddlDept.DataSource = dt;
        ddlDept.DataBind();
        //Get Departments

        //Get Types
        string strInt = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "INTTYPE");
        List<CodeValueVO> lstInt = ser.Deserialize<List<CodeValueVO>>(strInt);
        DataTable dtInt = Utility.ConvertToDataTable(lstInt);
        DataView dvInt = new DataView(dtInt, "CODEKEY IN ('ACCOUNTS', 'ITEM')", "CODEKEY", DataViewRowState.CurrentRows);
        //dvInt.Sort = "Description DESC";
        ddlTypes.DataSource = dvInt;
        ddlTypes.DataTextField = "Description";
        ddlTypes.DataValueField = "CodeKey";
        ddlTypes.DataBind();
        //Get Types
    }

    private void GetAccountsData()
    {
        DataTable dt = new DataTable();
        if (Session["QBAccData"] == null)
        {
            string str = xms.erGetQBAccounts(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, 1);
            List<ImportQBAccVO> lst = ser.Deserialize<List<ImportQBAccVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["QBAccData"] = dt;
        }
        else
            dt = (DataTable)Session["QBAccData"];
    }

    private void GetDeptAssignedAccountsData()
    {
        DataTable dt = new DataTable();
        if (Session["DeptAssnd"] == null)
        {
            string str = xms.erGetQBAccounts(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, 2);
            List<ImportQBAccVO> lst = ser.Deserialize<List<ImportQBAccVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["DeptAssnd"] = dt;
        }
        else
            dt = (DataTable)Session["DeptAssnd"];
    }

    private void GetItemsData()
    {
        DataTable dt = new DataTable();
        if (Session["QBItemsData"] == null)
        {
            string str = xms.erGetIntegrationItem(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 3, string.Empty, string.Empty);
            List<IntegrationItemVO> lst = ser.Deserialize<List<IntegrationItemVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["QBItemsData"] = dt;
        }
        dt = (DataTable)Session["QBItemsData"];
    }

    private void GetDeptAssignedItemsData()
    {
        DataTable dt = new DataTable();
        if (Session["DeptAssndItems"] == null)
        {
            string str = xms.erGetIntegrationItem(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 2, string.Empty, string.Empty);
            List<IntegrationItemVO> lst = ser.Deserialize<List<IntegrationItemVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["DeptAssndItems"] = dt;
        }
        dt = (DataTable)Session["DeptAssndItems"];
    }

    private void SortGrid()
    {
        DataTable dt = new DataTable();
        GetAccountsData();
        dt = (DataTable)Session["QBAccData"];
        if ((Session["SortExpr_AccSync"] != null) && Session["SortDir_AccSync"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_AccSync"].ToString() + " " + Session["SortDir_AccSync"].ToString();
            gvAccounts.DataSource = view;
            Session["QBAccData"] = view.ToTable();
        }
        else
            gvAccounts.DataSource = dt;
        gvAccounts.DataBind();
    }

    private void SortDeptAssidnedGrid()
    {
        DataTable dt = new DataTable();
        GetDeptAssignedAccountsData();
        dt = (DataTable)Session["DeptAssnd"];
        DataView dv = new DataView(dt, "DEPTCODE = '" + ddlDept.SelectedValue + "'", "DEPTCODE", DataViewRowState.CurrentRows);
        if ((Session["SortExpr_AccSyncAssnd"] != null) && Session["SortDir_AccSyncAssnd"] != null)
        {
            DataView view = new DataView(dv.ToTable());
            view.Sort = Session["SortExpr_AccSyncAssnd"].ToString() + " " + Session["SortDir_AccSyncAssnd"].ToString();
            gvAccountsByDept.DataSource = view;
        }
        else
            gvAccountsByDept.DataSource = dv.ToTable();
        gvAccountsByDept.DataBind();
    }

    private void SortItemsGrid()
    {
        DataTable dt = new DataTable();
        GetItemsData();
        dt = (DataTable)Session["QBItemsData"];
        if ((Session["SortExpr_ItemSync"] != null) && Session["SortDir_ItemSync"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_ItemSync"].ToString() + " " + Session["SortDir_ItemSync"].ToString();
            gvDeptUnAssignedItems.DataSource = view;
            Session["QBItemsData"] = view.ToTable();
        }
        else
            gvDeptUnAssignedItems.DataSource = dt;
        gvDeptUnAssignedItems.DataBind();
    }

    private void SortDeptAssidnedItemsGrid()
    {
        DataTable dt = new DataTable();
        GetDeptAssignedItemsData();
        dt = (DataTable)Session["DeptAssndItems"];
        DataView dv = new DataView(dt, "DEPTCODE = '" + ddlItemDept.SelectedValue + "'", "DEPTCODE", DataViewRowState.CurrentRows);
        if ((Session["SortExpr_ItemSyncAssnd"] != null) && Session["SortDir_ItemSyncAssnd"] != null)
        {
            DataView view = new DataView(dv.ToTable());
            view.Sort = Session["SortExpr_ItemSyncAssnd"].ToString() + " " + Session["SortDir_ItemSyncAssnd"].ToString();
            gvDeptAssignedItems.DataSource = view;
        }
        else
            gvDeptAssignedItems.DataSource = dv.ToTable();
        gvDeptAssignedItems.DataBind();
    }

    private void SaveAccountsWithDept(DataTable dt)
    {
        string appString = "###";
        string accAssigned = string.Empty, accName = string.Empty, accNum = string.Empty, accType = string.Empty, addedBy = string.Empty, addedOn = string.Empty, amount = string.Empty,
            check = string.Empty, compCode = string.Empty, deptAssigned = string.Empty, deptCode = string.Empty, orgId = string.Empty, qbAccId = string.Empty, type = string.Empty,
            userId = string.Empty, accntInterCompFlag = string.Empty, accntLevelCode = string.Empty, accntSegments = string.Empty, accntSublegCode = string.Empty,
            accountName = string.Empty, acctHier = string.Empty, acctLongCode = string.Empty, acctType = string.Empty, bankType = string.Empty,
            ctrlAccntFlag = string.Empty, ctrlAcct = string.Empty;

        int i = 0;
        for (i = 0; i < dt.Rows.Count; i++)
        {
            accAssigned += "Y" + appString;
            accName += dt.Rows[i]["accName"].ToString() + appString;
            accNum += dt.Rows[i]["accNum"].ToString() + appString;
            accType += dt.Rows[i]["accType"].ToString() + appString;
            addedBy += Session["UserID"].ToString() + appString;
            addedOn += DateTime.Now.ToShortDateString() + appString;
            amount += dt.Rows[i]["amount"].ToString() + appString;
            check += "N" + appString;
            compCode += ddlCompCode.SelectedValue + appString;
            deptAssigned += (string.IsNullOrEmpty(dt.Rows[i]["deptAssigned"].ToString()) ? " " : dt.Rows[i]["deptAssigned"].ToString()) + appString;
            deptCode += (string.IsNullOrEmpty(dt.Rows[i]["deptCode"].ToString()) ? " " : dt.Rows[i]["deptCode"].ToString()) + appString;
            orgId += Session["OrgID"].ToString() + appString;
            qbAccId += dt.Rows[i]["qbAccId"].ToString() + appString;
            type += "2" + appString;
            userId += Session["UserID"].ToString() + appString;
            accntInterCompFlag += (string.IsNullOrEmpty(dt.Rows[i]["accntInterCompFlag"].ToString()) ? " " : dt.Rows[i]["accntInterCompFlag"].ToString()) + appString;
            accntLevelCode += (string.IsNullOrEmpty(dt.Rows[i]["accntLevelCode"].ToString()) ? " " : dt.Rows[i]["accntLevelCode"].ToString()) + appString;
            accntSegments += (string.IsNullOrEmpty(dt.Rows[i]["accntSegments"].ToString()) ? " " : dt.Rows[i]["accntSegments"].ToString()) + appString;
            accntSublegCode += (string.IsNullOrEmpty(dt.Rows[i]["accntSublegCode"].ToString()) ? " " : dt.Rows[i]["accntSublegCode"].ToString()) + appString;
            accountName += (string.IsNullOrEmpty(dt.Rows[i]["accountName"].ToString()) ? " " : dt.Rows[i]["accountName"].ToString()) + appString;
            acctHier += (string.IsNullOrEmpty(dt.Rows[i]["acctHier"].ToString()) ? " " : dt.Rows[i]["acctHier"].ToString()) + appString;
            acctLongCode += (string.IsNullOrEmpty(dt.Rows[i]["acctLongCode"].ToString()) ? " " : dt.Rows[i]["acctLongCode"].ToString()) + appString;
            acctType += (string.IsNullOrEmpty(dt.Rows[i]["acctType"].ToString()) ? " " : dt.Rows[i]["acctType"].ToString()) + appString;
            bankType += (string.IsNullOrEmpty(dt.Rows[i]["bankType"].ToString()) ? " " : dt.Rows[i]["bankType"].ToString()) + appString;
            ctrlAccntFlag += (string.IsNullOrEmpty(dt.Rows[i]["ctrlAccntFlag"].ToString()) ? " " : dt.Rows[i]["ctrlAccntFlag"].ToString()) + appString;
            ctrlAcct += (string.IsNullOrEmpty(dt.Rows[i]["ctrlAcct"].ToString()) ? " " : dt.Rows[i]["ctrlAcct"].ToString()) + appString;
        }

        ImportQBAccMulVO imp = new ImportQBAccMulVO();
        imp.accAssigned = accAssigned.Substring(0, accAssigned.Length - 3);
        imp.accName = accName.Substring(0, accName.Length - 3);
        imp.accNum = accNum.Substring(0, accNum.Length - 3);
        imp.accType = accType.Substring(0, accType.Length - 3);
        imp.addedBy = addedBy.Substring(0, addedBy.Length - 3);
        imp.addedOn = addedOn.Substring(0, addedOn.Length - 3);
        imp.amount = amount.Substring(0, amount.Length - 3);
        imp.check = check.Substring(0, check.Length - 3);
        imp.compCode = compCode.Substring(0, compCode.Length - 3);
        imp.deptAssigned = deptAssigned.Substring(0, deptAssigned.Length - 3);
        imp.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        imp.orgId = orgId.Substring(0, orgId.Length - 3);
        imp.qbAccId = qbAccId.Substring(0, qbAccId.Length - 3);
        imp.type = type.Substring(0, type.Length - 3);
        imp.userId = userId.Substring(0, userId.Length - 3);
        imp.accntInterCompFlag = accntInterCompFlag.Substring(0, accntInterCompFlag.Length - 3);
        imp.accntLevelCode = accntLevelCode.Substring(0, accntLevelCode.Length - 3);
        imp.accntSegments = accntSegments.Substring(0, accntSegments.Length - 3);
        imp.accntSublegCode = accntSublegCode.Substring(0, accntSublegCode.Length - 3);
        imp.accountName = accountName.Substring(0, accountName.Length - 3);
        imp.acctHier = acctHier.Substring(0, acctHier.Length - 3);
        imp.acctLongCode = acctLongCode.Substring(0, acctLongCode.Length - 3);
        imp.acctType = acctType.Substring(0, acctType.Length - 3);
        imp.bankType = bankType.Substring(0, bankType.Length - 3);
        imp.ctrlAccntFlag = ctrlAccntFlag.Substring(0, ctrlAccntFlag.Length - 3);
        imp.ctrlAcct = ctrlAcct.Substring(0, ctrlAcct.Length - 3);

        string retStr = xms.addQBAccountsMul(imp);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage("Green", retStr);
            Session.Remove("QBAccData");
            Session.Remove("DeptAssnd");
            Session.Remove("dsCodes");
            GetCodes();
            SortGrid();
            SortDeptAssidnedGrid();
        }
        else
            DisplayMessage("Red", retStr);
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

    private void SaveITemsWithDept(DataTable dt)
    {
        string appString = "###";
        string addedOn = string.Empty, classification = string.Empty, compCode = string.Empty, deptAssigned = string.Empty, deptCode = string.Empty,
            description = string.Empty, itemAssigned = string.Empty, itemCode = string.Empty, itemDesc = string.Empty, itemSeqId = string.Empty,
            orgId = string.Empty, qbAccId = string.Empty, qbItemId = string.Empty, syncDate = string.Empty, type = string.Empty, userId = string.Empty;
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            addedOn += DateTime.Now.ToShortDateString() + appString;
            classification += dt.Rows[i]["classification"].ToString() + appString;
            compCode += ddlCompCode.SelectedValue + appString;
            deptAssigned += dt.Rows[i]["deptAssigned"].ToString() + appString;
            deptCode += dt.Rows[i]["deptCode"].ToString() + appString;
            description += dt.Rows[i]["description"].ToString() + appString;
            itemAssigned += "N" + appString;
            itemCode += dt.Rows[i]["itemCode"].ToString() + appString;
            itemDesc += dt.Rows[i]["itemDesc"].ToString() + appString;
            itemSeqId += dt.Rows[i]["itemSeqId"].ToString() + appString;
            orgId += Session["OrgID"].ToString() + appString;
            qbAccId += dt.Rows[i]["qbAccId"].ToString() + appString;
            qbItemId += dt.Rows[i]["qbItemId"].ToString() + appString;
            syncDate += DateTime.Now.ToShortDateString() + appString;
            type += "1" + appString;
            userId += Session["UserID"].ToString() + appString;
        }
        IntegrationItemMulVO intgr = new IntegrationItemMulVO();
        intgr.addedOn = addedOn.Substring(0, addedOn.Length - 3);
        intgr.classification = classification.Substring(0, classification.Length - 3);
        intgr.compCode = compCode.Substring(0, compCode.Length - 3);
        intgr.deptAssigned = deptAssigned.Substring(0, deptAssigned.Length - 3);
        intgr.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        intgr.description = description.Substring(0, description.Length - 3);
        intgr.itemAssigned = itemAssigned.Substring(0, itemAssigned.Length - 3);
        intgr.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        intgr.itemDesc = itemDesc.Substring(0, itemDesc.Length - 3);
        intgr.itemSeqId = itemSeqId.Substring(0, itemSeqId.Length - 3);
        intgr.orgId = orgId.Substring(0, orgId.Length - 3);
        intgr.qbAccId = qbAccId.Substring(0, qbAccId.Length - 3);
        intgr.qbItemId = qbItemId.Substring(0, qbItemId.Length - 3);
        intgr.syncDate = syncDate.Substring(0, syncDate.Length - 3);
        intgr.type = type.Substring(0, type.Length - 3);
        intgr.userId = userId.Substring(0, userId.Length - 3);
        string retStr = xms.addIntegrationItemMul(intgr);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage("Green", retStr);
            Session.Remove("QBItemsData");
            Session.Remove("DeptAssndItems");
            SortItemsGrid();
            SortDeptAssidnedItemsGrid();
        }
        else
            DisplayMessage("Red", retStr);
    }

    private void SyncAccountsData()
    {
        string retStr = xms.importQBAccounts(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("QBAccData");
            SortGrid();
            DisplayMessage("Green", retStr);
        }
        else
            DisplayMessage("Red", retStr);
    }

    private void SyncItemsData()
    {
        string retStr = xms.importQBItems(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (retStr.ToLower().Contains("succes"))
            DisplayMessage("Green", retStr);
        else
            DisplayMessage("Red", retStr);
    }

    private void SyncVendorsData()
    {
        string retStr = xms.importQBVend(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(Session["UserID"]));
        if (retStr.ToLower().Contains("succes"))
            DisplayMessage("Green", retStr);
        else
            DisplayMessage("Red", retStr);
    }

    private void DisplayMessage(string color, string msg)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    #endregion
}