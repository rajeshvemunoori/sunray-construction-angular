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
using System.Data.OleDb;
using System.IO;

public partial class Codes_ItemCodes : System.Web.UI.Page
{
    #region Private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;
    string appStr = "###";
    string newPath = ("ERTemp");

    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserId"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                btnSyncWithQB.Attributes.Add("onclick", "javascript:transferToSync();");
                lblOrgID.Text = Session["SOrgName"].ToString().ToUpper();
                Session.Remove("ItemCodes");
                BindCompCodes();

                //Check whether Third party integration is active for ITEMS or not.
                if (CheckItemIsIntegrated())
                {
                    ddlDepartment.Visible = ddlClassification.Visible = false;
                    ddlIntDepartment.Visible = ddlIntClassification.Visible = true;
                    hdnIsThirdPartyIntegrated.Value = "1";
                    //LoadIntegratedItemCodes();
                    dvQBItemInput.Style["display"] = "block";
                    dvAIItemInput.Style["display"] = "none";
                    hdnIsQBItemVisible.Value = "1";
                }
                else
                {
                    ddlDepartment.Visible = ddlClassification.Visible = true;
                    ddlIntDepartment.Visible = ddlIntClassification.Visible = false;
                    hdnIsThirdPartyIntegrated.Value = "0";
                    dvQBItemInput.Style["display"] = "none";
                    dvAIItemInput.Style["display"] = "block";
                    hdnIsQBItemVisible.Value = "0";
                }

                BindDept();
                BindAllBudgClss();
                Session["AllClasses"] = string.Empty;
                LoadData(string.Empty, 0);
                ClearFields();
                Session["ddlClassification"] = ddlClassification;

                if (!string.IsNullOrEmpty(Session["AccountBy"].ToString()))
                    btnImportExport.Visible = false;
                else
                    btnImportExport.Visible = true;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("ItemCodes");
        Session["AllClasses"] = string.Empty;
        LoadData(string.Empty, 0);
    }

    protected void ddlDepartment_SelectedIndexChanged(object sender, EventArgs e)
    {
        LoadClassificationsByDept();
    }

    protected void ddlClassification_SelectedIndexChanged1(object sender, EventArgs e)
    {
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlClassification");
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
            if (i == ddl.Items.Count)
                ddl.Texts.SelectBoxCaption = "ALL";
            else
            {
                ddl.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
                expStr = (i + 1).ToString() + "," + expStr;
            }
        }
    }

    protected void ddlIntDepartment_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("dtExpItem");
        BindIntBudgetClss();
    }

    protected void AllClassificationChanged(object sender, EventArgs e)
    {
        string expStr = string.Empty;

        foreach (ListItem item in (sender as ListControl).Items)
            if (item.Selected)
                expStr += item + appStr;

        Session["AllClasses"] = expStr.Substring(0, expStr.Length - 3);
        LoadData(Session["AllClasses"].ToString(), 1);
        expStr = string.Empty;
        foreach (ListItem item in (sender as ListControl).Items)
            if (item.Selected)
                expStr += item + ",";

        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlAllClass");
        ddl.Texts.SelectBoxCaption = expStr.TrimEnd(',');
    }

    protected void AddItemCode(object sender, EventArgs e)
    {
        string errStr = "Please enter ";
        string dept = string.Empty;
        string expStr = string.Empty;
        string itemId = string.Empty;
        string itemCd = string.Empty;
        string descr = string.Empty;
        string notes = string.Empty;
        string userID = string.Empty;
        string type = string.Empty;
        string orgID = string.Empty;
        string compCode = string.Empty;
        string qbItemID = string.Empty;
        dvMainMsg.InnerHtml = string.Empty;
        if (hdnIsThirdPartyIntegrated.Value == "1")
        {
            if (ddlIntDepartment.SelectedValue == "0")
                errStr += "Department, ";
            if (ddlIntClassification.SelectedValue == "0")
                errStr += "Classification, ";
            if (txtItemCode.Text == string.Empty && ddlImpItemCodes.SelectedValue == "0")
                errStr += "ItemCode, ";
            if (txtDescr.Text == string.Empty)
                errStr += "Description, ";
            if (txtDescr.Text.Length > 200)
                errStr += "Description not exceeding 200 chars, ";
            if (txtItemNotes.Text.Length > 500)
                errStr += "Notes not exceeding 500 chars, ";
            errStr = errStr.Substring(0, errStr.Length - 2);
            if (errStr.Length > 13)
            {
                dvMainMsg.Style["color"] = "Red";
                dvMainMsg.InnerHtml = errStr;
                ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('clearData()', 5000) ;", true);
            }
            else
            {
                dvMainMsg.InnerHtml = string.Empty;
                string itemCode = "";
                if (hdnIsQBItemVisible.Value == "1")
                {
                    itemCode = ddlImpItemCodes.SelectedValue;
                    DataTable dtInt = (DataTable)Session["QBItems"];
                    DataView dvInt = new DataView(dtInt, "itemCode = '" + ddlImpItemCodes.SelectedValue + "'", "ItemCode", DataViewRowState.CurrentRows);
                    hdnQBItemID.Value = dvInt.ToTable().Rows[0]["qbItemId"].ToString();
                }
                else if (hdnIsQBItemVisible.Value == "0")
                    itemCode = txtItemCode.Text;

                //Get QB ID of selected classification.
                DataTable dtClss = (DataTable)Session["dtExpItem"];
                DataView dvClss = new DataView(dtClss, "expcode = '" + ddlIntClassification.SelectedValue + "'", "expcode", DataViewRowState.CurrentRows);
                int clssQBAccID = ut.NullSafeInteger(dvClss.ToTable().Rows[0]["QBAccId"].ToString());
                //Get QB ID of selected classification.

                string[] arr = ddlIntClassification.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);

                AddItemLine(ut.NullSafeInteger(Session["UserID"]), arr[1].Trim(), txtDescr.Text, itemCode, 0, ut.NullSafeInteger(Session["UserID"]), 1, txtItemNotes.Text.Trim(), ddlIntDepartment.SelectedValue, ut.NullSafeInteger(clssQBAccID));
            }
        }
        else if (hdnIsThirdPartyIntegrated.Value == "0")
        {
            DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlClassification");
            DropDownCheckBoxes ddlDepartment = (DropDownCheckBoxes)this.FindControl("ddlDepartment");
            foreach (ListItem itemDept in (ddlDepartment as ListControl).Items)
            {
                if (itemDept.Selected)
                {
                    foreach (ListItem item in (ddl as ListControl).Items)
                    {
                        if (item.Selected)
                        {
                            string[] arr = item.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                            expStr += arr[1].Trim() + appStr;
                            itemId += "0" + appStr;
                            itemCd += txtItemCode.Text + appStr;
                            descr += txtDescr.Text + appStr;
                            notes += txtItemNotes.Text == string.Empty ? " " + appStr : txtItemNotes.Text.Trim() + appStr;
                            userID += Session["UserID"].ToString() + appStr;
                            type += "1" + appStr;
                            orgID += Session["OrgID"].ToString() + appStr;
                            compCode += ddlCompCode.SelectedValue + appStr;
                            dept += itemDept.Value + appStr;
                            qbItemID += "0" + appStr;
                        }
                    }
                }
            }
            if (dept == string.Empty)
                errStr += "Department, ";
            if (expStr == string.Empty)
                errStr += "Classification, ";
            if (txtItemCode.Text == string.Empty)
                errStr += "ItemCode, ";
            if (txtDescr.Text == string.Empty)
                errStr += "Description, ";
            if (txtDescr.Text.Length > 200)
                errStr += "Description not exceeding 200 chars, ";
            if (txtItemNotes.Text.Length > 500)
                errStr += "Notes not exceeding 500 chars, ";
            errStr = errStr.Substring(0, errStr.Length - 2);
            if (errStr.Length > 13)
            {                
                dvMainMsg.Style["color"] = "Red";
                dvMainMsg.InnerHtml = errStr;
                ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('clearData()', 5000) ;", true);
            }
            else
            {
                dvMainMsg.InnerHtml = string.Empty;
                AddMultiItemLine(userID.TrimEnd('#'), expStr.TrimEnd('#'), descr.TrimEnd('#'), itemCd.TrimEnd('#'), itemId.TrimEnd('#'), userID.TrimEnd('#'), type.TrimEnd('#'), notes.TrimEnd('#'), orgID.TrimEnd('#'), compCode.TrimEnd('#'), dept.TrimEnd('#'), qbItemID.TrimEnd('#'));
            }
        }
    }

    protected void gvItemCd_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.DataRow && (e.Row.RowState & DataControlRowState.Edit) == DataControlRowState.Edit)
        {
            // Here you will get the Control you need like:
            Label lblEditItemCode = (Label)e.Row.FindControl("lblEditItemCode");
            TextBox txtEditDescr = (TextBox)e.Row.FindControl("txtEditDescr");
            TextBox txtEditNotes = (TextBox)e.Row.FindControl("txtEditNotes");
            Label lblEditBudgClss = (Label)e.Row.FindControl("lblEditBudgClss");
            LinkButton lnkUpdate = (LinkButton)e.Row.FindControl("lnkUpdate");
            lnkUpdate.Attributes.Add("onclick", "javascript:return validateItemCodes('" + txtEditDescr.ClientID + "', '" + txtEditNotes.ClientID + "');");
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_ItemCode"] != null && Session["Control_ItemCode"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ItemCode"].ToString());
                if (Session["SortDir_ItemCode"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvItemCd_RowEditing(object sender, GridViewEditEventArgs e)
    {
        DisplayMsg(string.Empty, string.Empty);
        gvItemCd.EditIndex = e.NewEditIndex;
        LoadData(Session["AllClasses"].ToString(), 1);
    }

    protected void gvItemCd_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {
        DisplayMsg(string.Empty, string.Empty);
        Label lblEditBudgClss = (Label)gvItemCd.Rows[e.RowIndex].FindControl("lblEditBudgClss");
        TextBox txtEditDescr = (TextBox)gvItemCd.Rows[e.RowIndex].FindControl("txtEditDescr");
        Label lblEditItemCode = (Label)gvItemCd.Rows[e.RowIndex].FindControl("lblEditItemCode");
        TextBox txtEditNotes = (TextBox)gvItemCd.Rows[e.RowIndex].FindControl("txtEditNotes");
        HiddenField hdnEditItemId = (HiddenField)gvItemCd.Rows[e.RowIndex].FindControl("hdnEditItemId");
        HiddenField hdnDept = (HiddenField)gvItemCd.Rows[e.RowIndex].FindControl("hdnDept");
        gvItemCd.EditIndex = -1;
        AddItemLine(ut.NullSafeInteger(Session["UserID"]), lblEditBudgClss.Text, txtEditDescr.Text, lblEditItemCode.Text, ut.NullSafeInteger(hdnEditItemId.Value), ut.NullSafeInteger(Session["UserID"]), 2, txtEditNotes.Text.Trim(), hdnDept.Value, 0);
    }

    protected void gvItemCd_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
    {
        DisplayMsg(string.Empty, string.Empty);
        gvItemCd.EditIndex = -1;
        LoadData(Session["AllClasses"].ToString(), 1);
    }

    protected void gvItemCd_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        DisplayMsg("Green", string.Empty);
        DisplayMsg("Green", string.Empty);
        HiddenField hdnItemId = (HiddenField)gvItemCd.Rows[e.RowIndex].FindControl("hdnItemId");
        hdnMisc.Value = hdnItemId.Value;
        popAlert.Show();
    }

    protected void gvItemCd_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Edit")
        {

        }

        if (e.CommandName == "Delete")
        {

        }

        if (e.CommandName == "Update")
        {

        }

        if (e.CommandName == "Cancel")
        {

        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ItemCode"] = lnk.ID;

        if (Session["SortDir_ItemCode"] == null || Session["SortDir_ItemCode"].ToString() == "Desc")
            Session["SortDir_ItemCode"] = "Asc";
        else
            Session["SortDir_ItemCode"] = "Desc";

        Session["SortExpr_ItemCode"] = e.CommandArgument;
        SortGrid();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("ItemCodes");
        DisplayMsg(string.Empty, string.Empty);
        LoadData(Session["AllClasses"].ToString(), 0);
    }

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        AddItemLine(0, string.Empty, string.Empty, string.Empty, ut.NullSafeInteger(hdnMisc.Value), 0, 3, string.Empty, string.Empty, 0);
        popAlert.Hide();
    }

    protected void ddlClassification_SelectedIndexChanged(object sender, EventArgs e)
    {
        //DataTable dt = (DataTable)Session["ItemCodes"];
    }

    protected void txtItemCode_TextChanged(object sender, EventArgs e)
    {
        DataTable dtClss = (DataTable)Session["dtExpItem"];
        DataTable dtTemp = dtClss.DefaultView.ToTable(true, "expItem");
        ddlClassification.Items.Clear();
        //Filter Classifications which have similar itemCodes
        string expr = "itemCode = '" + txtItemCode.Text + "'";
        DataView dv = new DataView(dtClss, expr, "itemCode", DataViewRowState.CurrentRows);

        string strFilter = string.Empty;
        string expr1 = string.Empty;
        //Filter Classifications which are not equal to filtered expCode
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            strFilter += "'" + dv.ToTable().Rows[i]["expCode"] + "', ";
        if (dv.ToTable().Rows.Count > 0)
            expr1 = "expCode not in (" + strFilter.TrimEnd(' ').TrimEnd(',') + ")";
        else
            expr1 = "expCode <> ''";
        DataView dv1 = new DataView(dtClss, expr1, "expCode", DataViewRowState.CurrentRows);
        DataTable dtTemp1 = dv1.ToTable(true, "expItem", "expcode");
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlClassification");

        if (dtTemp1.Rows.Count > 0)
        {
            ddlClassification.DataSource = dtTemp1;
            ddlClassification.DataBind();
            ListControl lstAllClass = (ListControl)this.FindControl("ddlClassification");
            string expStr = string.Empty;
            foreach (ListItem item in lstAllClass.Items)
            {
                item.Selected = true;
                string[] arr = item.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                expStr += arr[1].Trim() + ",";
            }
            //ddl.Texts.SelectBoxCaption = expStr.TrimEnd(',');
        }
        else
            ddl.Texts.SelectBoxCaption = "Please Select";
        txtDescr.Focus();
    }

    protected void ddlIntClassification_SelectedIndexChanged(object sender, EventArgs e)
    {
        LoadIntegratedItemCodes();
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

    #region private methods

    private bool CheckItemIsIntegrated()
    {
        int cnt = 0;
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dvCodes = new DataView(dtCodes, "CodeID = 'INTEGRATION' AND CODEKEY = 'QUICK BOOKS'", "CODEKEY", DataViewRowState.CurrentRows);

        string strInt = xms.getIntegrationDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<IntegrationVO> lstInt = ser.Deserialize<List<IntegrationVO>>(strInt);
        DataTable dtInt = Utility.ConvertToDataTable(lstInt);
        if (dtInt.Rows.Count > 0)
        {
            DataView dvInt = new DataView(dtInt, "INTEGRATIONTYPE = '" + dvCodes.ToTable().Rows[0]["Description"] + "'", "", DataViewRowState.CurrentRows);
            //if(dvInt.ToTable().Rows[0]["actionType"].ToString().ToLower().Contains("ITEM")        
            if (!string.IsNullOrEmpty(dvInt.ToTable().Rows[0]["actionType"].ToString()))
            {
                string[] arr = dvInt.ToTable().Rows[0]["actionType"].ToString().Split(',');
                for (int i = 0; i < arr.Length; i++)
                {
                    if (arr[i] == "ITEM")
                    {
                        cnt++;
                        break;
                    }
                }
            }
            if (cnt > 0)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    private void LoadIntegratedItemCodes()
    {
        string strInt = xms.erGetIntegrationItem(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), 1, ddlIntDepartment.SelectedValue, ddlIntClassification.SelectedItem.Text);
        List<IntegrationItemVO> lstInt = ser.Deserialize<List<IntegrationItemVO>>(strInt);
        DataTable dtInt = Utility.ConvertToDataTable(lstInt);
        //IntegrationItemVO i = new IntegrationItemVO();
        //i.qbItemId
        ddlImpItemCodes.DataSource = dtInt;
        ddlImpItemCodes.DataBind();
        ddlImpItemCodes.Items.Insert(0, "Please Select");
        ddlImpItemCodes.Items.FindByText("Please Select").Value = "0";
        Session["QBItems"] = dtInt;
    }

    private DataTable LoadData(string allClass, int type)
    {
        DataTable dtCode = new DataTable();
        DataTable dt = new DataTable();
        if (Session["ItemCodes"] == null)
        {
            string str = xms.getItemCodes(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, string.Empty);
            List<ItemCodesVO> lst = ser.Deserialize<List<ItemCodesVO>>(str);
            dtCode = Utility.ConvertToDataTable(lst);
            Session["ItemCodes"] = dtCode;
        }
        else
            dtCode = (DataTable)Session["ItemCodes"];
        dt = dtCode;
        if (!string.IsNullOrEmpty(allClass))
        {
            string[] arrClss = allClass.Split(new string[] { "--" }, StringSplitOptions.None);
            string expr = "budgetClassification in ('" + arrClss[1].Trim().Replace("#", "','") + "')";
            DataView dv = new DataView(dtCode, expr, "budgetClassification", DataViewRowState.CurrentRows);
            dt = dv.ToTable();
        }
        gvItemCd.DataSource = dt;
        gvItemCd.DataBind();
        return dt;
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
    }

    private void BindDept()
    {
        DataTable dt = new DataTable();
        if (Session["DeptCodes"] == null)
        {
            string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
        }
        else
            dt = (DataTable)Session["DeptCodes"];
        if (hdnIsThirdPartyIntegrated.Value == "1")
        {
            ddlIntDepartment.DataSource = dt;
            ddlIntDepartment.DataBind();
            ddlIntDepartment.Items.Insert(0, "Please Select");
            ddlIntDepartment.Items.FindByText("Please Select").Value = "0";
        }
        else
        {
            ddlDepartment.DataSource = dt;            
            ddlDepartment.DataBind();
        }
    }

    private void LoadClassificationsByDept()
    {
        Session.Remove("dtExpItem");
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlDepartment");
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
            if (i == ddl.Items.Count)
                ddl.Texts.SelectBoxCaption = "ALL";
            else
            {
                ddl.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
                expStr = (i + 1).ToString() + "," + expStr;
            }
        }
        else
            ddlDepartment.Texts.SelectBoxCaption = "Select Multiple Departments";
        Session.Remove("dtExpItem");
        BindBudgetClss(expStr.TrimEnd(','));
    }

    private void BindBudgetClss(string dept)
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();
        if (Session["dtExpItem"] == null)
        {
            string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), dept, 3, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            DataView dtview = new DataView(dt);
            //dtview.Sort = "expItem ASC";
            dtv = dtview.ToTable();
            Session["dtExpItem"] = dtv;
        }
        else
            dtv = (DataTable)Session["dtExpItem"];

        //combine account num and account name to display
        if (!dtv.Columns.Contains("AccountClss"))
            dtv.Columns.Add("AccountClss");
        for (int i = 0; i < dtv.Rows.Count; i++)
            dtv.Rows[i]["AccountClss"] = dtv.Rows[i]["accountCode"].ToString() + "--" + dtv.Rows[i]["expItem"].ToString();

        ddlClassification.DataSource = dtv;
        ddlClassification.DataBind();
        ddlClassification.Texts.SelectBoxCaption = "Select Multiple Accounts";
    }

    private void BindIntBudgetClss()
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();
        if (Session["dtExpItem"] == null)
        {
            string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ddlIntDepartment.SelectedValue, 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            DataView dtview = new DataView(dt);
            //dtview.Sort = "expItem ASC";
            dtv = dtview.ToTable();
            Session["dtExpItem"] = dtv;
        }
        else
            dtv = (DataTable)Session["dtExpItem"];

        //combine account num and account name to display
        if (!dtv.Columns.Contains("AccountClss"))
            dtv.Columns.Add("AccountClss");
        for (int i = 0; i < dtv.Rows.Count; i++)
            dtv.Rows[i]["AccountClss"] = dtv.Rows[i]["accountCode"].ToString() + "--" + dtv.Rows[i]["expItem"].ToString();

        ddlIntClassification.DataSource = dtv.DefaultView.ToTable(true, "AccountClss", "expcode");
        ddlIntClassification.DataBind();
        ddlIntClassification.Items.Insert(0, "Please Select");
        ddlIntClassification.Items.FindByText("Please Select").Value = "0";
    }

    private void BindAllBudgClss()
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();
        string str = xms.getExpItemsByDept(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), Session["DepartmentCode"].ToString(), 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        dt = Utility.ConvertToDataTable(lst);
        DataView dtview = new DataView(dt);
        //dtview.Sort = "expItem ASC";
        dtv = dtview.ToTable();
        Session["dtExpItem"] = dtv;

        //combine account num and account name to display
        if (!dtv.Columns.Contains("AccountClss"))
            dtv.Columns.Add("AccountClss");
        for (int j = 0; j < dtv.Rows.Count; j++)
            dtv.Rows[j]["AccountClss"] = dtv.Rows[j]["accountCode"].ToString() + "--" + dtv.Rows[j]["expItem"].ToString();

        ddlAllClass.DataSource = dtv.DefaultView.ToTable(true, "AccountClss", "expcode");
        ddlAllClass.DataBind();
        ListControl lstAllClass = (ListControl)this.FindControl("ddlAllClass");

        string expStr = string.Empty;
        int i = 1;
        foreach (ListItem item in lstAllClass.Items)
        {
            item.Selected = true;
            if (i == 1)
                expStr += item + ",";
            i++;
        }
        if (i > 1)
            expStr = expStr.TrimEnd(',') + "..";
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlAllClass");
        ddl.Texts.SelectBoxCaption = expStr;
    }

    private void AddItemLine(int addedBy, string budgClss, string descr, string itemCd, int itemId, int modBy, int type, string itemNotes, string dept, int qbAccId)
    {
        ItemCodesVO item = new ItemCodesVO();
        item.addedBy = addedBy;
        item.budgetClassification = budgClss;
        item.compCode = ddlCompCode.SelectedValue;
        item.description = descr;
        item.itemCode = itemCd;
        item.itemId = itemId;
        item.modifiedBy = modBy;
        item.orgId = ut.NullSafeInteger(Session["OrgID"]);
        item.type = type;
        item.itemNotes = itemNotes;
        item.deptCode = dept;
        item.qbAccId = qbAccId;
        item.qbItemId = ut.NullSafeInteger(hdnQBItemID.Value);
        string retStr = xms.addItemCodes(item);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            Session.Remove("ItemCodes");
            LoadData(Session["AllClasses"].ToString(), 0);
            ClearFields();
        }
        else
            DisplayMsg("Red", retStr);
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('clearData()', 5000) ;", true);
    }

    private void AddMultiItemLine(string addedBy, string budgClss, string descr, string itemCd, string itemId, string modBy, string type, string itemNotes, string orgID, string compCode, string dept, string qbItemID)
    {
        ItemCodesMulVO item = new ItemCodesMulVO();
        item.addedBy = addedBy;
        item.budgetClassification = budgClss;
        item.compCode = compCode;
        item.description = descr;
        item.itemCode = itemCd;
        item.itemId = itemId;
        item.modifiedBy = modBy;
        item.orgId = orgID;
        item.type = type;
        item.itemNotes = itemNotes;
        item.deptCode = dept;
        string retStr = xms.addItemCodesMul(item);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            Session.Remove("ItemCodes");
            LoadData(Session["AllClasses"].ToString(), 0);
            ClearFields();
            DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl("ddlClassification");
            ddl.Texts.SelectBoxCaption = "Select Multiple Accounts";

        }
        else
            DisplayMsg("Red", retStr);
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('clearData()', 5000) ;", true);
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMainMsg.Style["color"] = color;
        dvMainMsg.InnerHtml = msg;
    }

    private void SortGrid()
    {
        DataTable dtCode = new DataTable();
        if (Session["ItemCodes"] == null)
            LoadData(Session["AllClasses"].ToString(), 1);
        dtCode = (DataTable)Session["ItemCodes"];

        if ((Session["SortExpr_ItemCode"] != null) && Session["SortDir_ItemCode"] != null)
        {
            DataView view = new DataView(dtCode);
            view.Sort = Session["SortExpr_ItemCode"].ToString() + " " + Session["SortDir_ItemCode"].ToString();
            gvItemCd.DataSource = view;
        }
        else
            gvItemCd.DataSource = dtCode;
        gvItemCd.DataBind();
    }

    private void ClearFields()
    {
        txtItemNotes.Text = txtDescr.Text = txtItemCode.Text = string.Empty;
        ddlClassification.Items.Clear();
        ddlDepartment.ClearSelection();
        ddlClassification.Texts.SelectBoxCaption = "Select Multiple Accounts";
        ddlDepartment.Texts.SelectBoxCaption = "Select Multiple Departments";
        ddlIntClassification.Items.Clear();
        ddlIntDepartment.SelectedValue = "0";
        txtItemCode.Focus();
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

    #region Import/Export Items to QB

    protected void fupImpExpQBItem_UploadedComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupImpExpQBItem.PostedFile.FileName);
        int len = fupImpExpQBItem.PostedFile.ContentLength;
        if (ext.ToLower() == ".xls" || ext.ToLower() == ".xlsx")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2097152 (2MB), need to be 10485760 (10MB)
            {
                string connectionString = "";
                string fileName = Path.GetFileName(fupImpExpQBItem.PostedFile.FileName);
                string fileExtension = Path.GetExtension(fupImpExpQBItem.PostedFile.FileName);
                string path = Server.MapPath("..");
                string fileLocation = path + "\\" + newPath + "\\" + fileName;
                fupImpExpQBItem.SaveAs(fileLocation);

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
                Session["dtImpQBItem"] = dtExcelRecords;
            }
            else
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of type .xls or .xlsx');", true);
        }
    }

    protected void btnImportExport_Click(object sender, EventArgs e)
    {
    }

    private void ImportQBItems()
    {
        DataTable dt = (DataTable)Session["dtImpQBItem"];
        string addedBy, budgetClassification, compCode, deptCode, description, itemCode, itemNotes, modifiedBy, orgId, type, itemId;
        addedBy = budgetClassification = compCode = deptCode = description = itemCode = itemNotes = modifiedBy = orgId = type = itemId = string.Empty;
        DataTable dtFailed = new DataTable();
        int count = 0;
        dtFailed = dt.Clone();

        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                addedBy += Session["UserID"].ToString() + appStr;
                budgetClassification += (string.IsNullOrEmpty(dt.Rows[i]["Account"].ToString()) ? " " : dt.Rows[i]["Account"].ToString()) + appStr;
                compCode += ddlCompCode.SelectedValue + appStr;
                deptCode += "IT" + appStr;
                description += (string.IsNullOrEmpty(dt.Rows[i]["Description"].ToString()) ? " " : dt.Rows[i]["Description"].ToString()) + appStr;
                itemCode += (string.IsNullOrEmpty(dt.Rows[i]["Item"].ToString()) ? " " : dt.Rows[i]["Item"].ToString()) + appStr;
                itemId += "0" + appStr;
                itemNotes += (string.IsNullOrEmpty(dt.Rows[i]["Purchase Description"].ToString()) ? " " : dt.Rows[i]["Purchase Description"].ToString()) + appStr;
                modifiedBy += Session["UserID"].ToString() + appStr;
                orgId += Session["OrgID"].ToString() + appStr;
                type += "1" + appStr;
                count++;
            }
            ItemCodesMulVO item = new ItemCodesMulVO();
            item.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            item.budgetClassification = budgetClassification.Substring(0, budgetClassification.Length - 3);
            item.compCode = compCode.Substring(0, compCode.Length - 3);
            item.deptCode = deptCode.Substring(0, deptCode.Length - 3);
            item.description = description.Substring(0, description.Length - 3);
            item.itemCode = itemCode.Substring(0, itemCode.Length - 3);
            item.itemId = itemId.Substring(0, itemId.Length - 3);
            item.itemNotes = itemNotes.Substring(0, itemNotes.Length - 3);
            item.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            item.orgId = orgId.Substring(0, orgId.Length - 3);
            item.type = type.Substring(0, type.Length - 3);
            string str = "";// xms.addItemCodesMul(item);
        }
        if (dtFailed.Rows.Count > 0)
        {
            dvImpExpErr.Style["color"] = "Red";
            dvImpExpErr.InnerHtml = "Data upload is not completely successfull.";
            //gv.DataSource = dtFailed;
            //gvImpVend.DataBind();
            //gvImpVend.Columns[0].Visible = true;
            popImpExpQBItem.Show();
        }
        else
        {
            Session.Remove("dtImpQBItem");
            Session.Remove("ItemCodes");
            dvMainMsg.Style["color"] = "Green";
            dvMainMsg.InnerHtml = count + " Items data uploaded successfully";
            popImpExpQBItem.Hide();
        }
    }

    protected void btnImpExpQBItemConfirm_Click(object sender, EventArgs e)
    {
        ImportQBItems();
    }

    protected void lnkExportQBItemData_Click(object sender, EventArgs e)
    {
        ExportQBItems();
        popImpExpQBItem.Hide();
    }

    private void ExportQBItems()
    {
        DataTable dtItems = new DataTable();//get vendors data from database
        if (Session["ItemCodes"] == null)
        {
            LoadData(string.Empty, 0);
            Session["ItemCodes"] = dtItems;
        }
        else
            dtItems = (DataTable)Session["ItemCodes"];


        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dtItems;

        BoundField dgc_ItemName = new BoundField();
        dgc_ItemName.DataField = "itemCode";
        dgc_ItemName.HeaderText = "Item Name";
        dgDgrid.Columns.Add(dgc_ItemName);

        BoundField dgc_ItemType = new BoundField();
        dgc_ItemType.DataField = "";
        dgc_ItemType.HeaderText = "Item Type";
        dgDgrid.Columns.Add(dgc_ItemType);

        BoundField dgc_IsActive = new BoundField();
        dgc_IsActive.DataField = "";
        dgc_IsActive.HeaderText = "Is Active";
        dgDgrid.Columns.Add(dgc_IsActive);

        //BoundField dgc_Description = new BoundField();
        //dgc_Description.DataField = "description";
        //dgc_Description.HeaderText = "Description";
        //dgDgrid.Columns.Add(dgc_Description);

        BoundField dgc_SalesDescription = new BoundField();
        dgc_SalesDescription.DataField = "description";
        dgc_SalesDescription.HeaderText = "Sales Description";
        dgDgrid.Columns.Add(dgc_SalesDescription);

        BoundField dgc_PurchaseDescription = new BoundField();
        dgc_PurchaseDescription.DataField = "";
        dgc_PurchaseDescription.HeaderText = "Purchase Description";
        dgDgrid.Columns.Add(dgc_PurchaseDescription);

        BoundField dgc_TaxCode = new BoundField();
        dgc_TaxCode.DataField = "";
        dgc_TaxCode.HeaderText = "Tax Code";
        dgDgrid.Columns.Add(dgc_TaxCode);

        BoundField dgc_IncomeAccount = new BoundField();
        dgc_IncomeAccount.DataField = "incomeAccnt";
        dgc_IncomeAccount.HeaderText = "Account/Income Account";
        dgDgrid.Columns.Add(dgc_IncomeAccount);

        BoundField dgc_COGSAccount = new BoundField();
        dgc_COGSAccount.DataField = "";
        dgc_COGSAccount.HeaderText = "Expense/COGS Account";
        dgDgrid.Columns.Add(dgc_COGSAccount);

        BoundField dgc_AssetAccount = new BoundField();
        dgc_AssetAccount.DataField = "";
        dgc_AssetAccount.HeaderText = "Asset Account";
        dgDgrid.Columns.Add(dgc_AssetAccount);

        BoundField dgc_Cost = new BoundField();
        dgc_Cost.DataField = "";
        dgc_Cost.HeaderText = "Cost";
        dgDgrid.Columns.Add(dgc_Cost);

        BoundField dgc_PreferredVendor = new BoundField();
        dgc_PreferredVendor.DataField = "";
        dgc_PreferredVendor.HeaderText = "Preferred Vendor";
        dgDgrid.Columns.Add(dgc_PreferredVendor);

        BoundField dgc_Price = new BoundField();
        dgc_Price.DataField = "price";
        dgc_Price.HeaderText = "Price or %";
        dgDgrid.Columns.Add(dgc_Price);

        BoundField dgc_MPN = new BoundField();
        dgc_MPN.DataField = "";
        dgc_MPN.HeaderText = "Manuf Part Number";
        dgDgrid.Columns.Add(dgc_MPN);

        //BoundField dgc_AccumulatedDepreciation = new BoundField();
        //dgc_AccumulatedDepreciation.DataField = "";
        //dgc_AccumulatedDepreciation.HeaderText = "Accumulated Depreciation";
        //dgDgrid.Columns.Add(dgc_AccumulatedDepreciation);

        //BoundField dgc_QuantityOnHand = new BoundField();
        //dgc_QuantityOnHand.DataField = "";
        //dgc_QuantityOnHand.HeaderText = "Quantity On Hand";
        //dgDgrid.Columns.Add(dgc_QuantityOnHand);

        //BoundField dgc_TaxAgency = new BoundField();
        //dgc_TaxAgency.DataField = "";
        //dgc_TaxAgency.HeaderText = "Tax Agency";
        //dgDgrid.Columns.Add(dgc_TaxAgency);

        //BoundField dgc_ReorderPoint = new BoundField();
        //dgc_ReorderPoint.DataField = "";
        //dgc_ReorderPoint.HeaderText = "Reorder Point";
        //dgDgrid.Columns.Add(dgc_ReorderPoint);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();
        //dgDgrid.Caption = "<b><h3>Item Details</h3></b>";
        Session["gridExportItemDataForQB"] = dgDgrid;
        Response.Redirect("../DownloadFile.aspx?typ=17");
    }

    #endregion

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetVendors(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["ItemCodes"];
        DataView dv = new DataView(dt, "itemCode LIKE '%" + prefixText + "%'", "itemCode", DataViewRowState.CurrentRows);
        dv = dv.ToTable(true, "itemCode").DefaultView;
        string[] VendorNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            VendorNames[i] = dv.ToTable().Rows[i]["itemCode"].ToString();
        return VendorNames;
    }
}