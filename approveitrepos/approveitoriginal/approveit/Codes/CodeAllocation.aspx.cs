using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Text;

public partial class CodeAllocation : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    #endregion

    #region Display Codes

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
            if (!Page.IsPostBack)
            {
                //lblOrgID.Text = Session["SOrgName"].ToString();
                //hdnOrgName.Value = Session["SOrgName"].ToString();
                GetCompCodes();
                BindSyTextLangGrid();
                txtKeywordSearch.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
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
        ddlCompCode.Items.Insert(0, "All");
        ddlCompCode.Items.FindByText("All").Value = "0";
        if (Session["GAdmin"] == "false")
        {
            ddlCompCode.SelectedValue = Session["CompCode"].ToString();
            ddlCompCode.Enabled = false;
        }
        else
            ddlCompCode.Enabled = true;
    }

    private void BindSyTextLangGrid()
    {
        if (Session["GAdmin"] == "true")
        {
            string strCodes = string.Empty;
            DataSet dsCodes = new DataSet();
            if (Session["dsSyCodes"] == null)
            {
                if (ddlCompCode.SelectedItem.Text == "All")
                    strCodes = xms.getExpCodeTypes(string.Empty, Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedItem.Text, 1);
                else
                    strCodes = xms.getExpCodeTypes(string.Empty, Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, 2);
                List<SyCodeVO> lstCodes = ser.Deserialize<List<SyCodeVO>>(strCodes);
                dsCodes.Tables.Add(Utility.ConvertToDataTable(lstCodes));
                Session["dsSyCodes"] = dsCodes;
            }
            else
                dsCodes = (DataSet)Session["dsSyCodes"];
            gvCodeAlloc.DataSource = dsCodes;
            txtKeywordSearch.Visible = true;
        }
        else
        {
            lblHelp.Text = "You are not authorized to view Codes since you do not have Global Admin profile assigned.";
            lblHelp.Style["color"] = "Red";
            txtKeywordSearch.Visible = false;
        }
        gvCodeAlloc.DataBind();
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("dsSyCodes");
        BindSyTextLangGrid();
        Session.Remove("dsEditCode");
        txtKeywordSearch.Focus();
    }

    protected void gvCodeAlloc_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvCodeAlloc.PageIndex = e.NewPageIndex;
        SortgvCodeAlloc();
    }

    protected void gvCodeAlloc_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox chkEnable = (CheckBox)e.Row.FindControl("chkEnable");
            LinkButton lnkCodeID = (LinkButton)e.Row.FindControl("lnkCodeID");
            DataSet dsCodes = (DataSet)Session["dsSyCodes"];
            string expr = "CodeId = '" + lnkCodeID.Text + "' and OrgID = " + Session["OrgId"].ToString();
            DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
            DataTable dtCodes = view.ToTable();
            chkEnable.Checked = dtCodes.Rows[0]["isDeletable"].ToString().ToUpper() == "Y" ? true : false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "left";
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_CdAlloc"] != null && Session["Control_CdAlloc"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_CdAlloc"].ToString());
                if (Session["SortDir_CdAlloc"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void OnDataBound(object sender, EventArgs e)
    {
        GridViewRow row = new GridViewRow(0, 0, DataControlRowType.Header, DataControlRowState.Normal);
        for (int i = 0; i < gvCodeAlloc.Columns.Count; i++)
        {
            TableHeaderCell cell = new TableHeaderCell();
            TextBox txtSearch = new TextBox();
            txtSearch.Attributes["placeholder"] = gvCodeAlloc.Columns[i].HeaderText;
            txtSearch.CssClass = "search_textbox";
            cell.Controls.Add(txtSearch);
            row.Controls.Add(cell);
        }
        gvCodeAlloc.HeaderRow.Parent.Controls.AddAt(1, row);
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("dsSyCodes");
        SortgvCodeAlloc();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CdAlloc"] = lnk.ID;

        if (Session["SortDir_CdAlloc"] == null || Session["SortDir_CdAlloc"].ToString() == "Desc")
            Session["SortDir_CdAlloc"] = "Asc";
        else
            Session["SortDir_CdAlloc"] = "Desc";

        Session["SortExpr_CdAlloc"] = e.CommandArgument;
        SortgvCodeAlloc();
    }

    private void SortgvCodeAlloc()
    {
        DataSet dsCodes = new DataSet();
        if (Session["dsSyCodes"] == null)
            BindSyTextLangGrid();

        dsCodes = (DataSet)Session["dsSyCodes"];
        if ((Session["SortExpr_CdAlloc"] != null) && Session["SortDir_CdAlloc"] != null)
        {
            DataView view = new DataView(dsCodes.Tables[0]);
            view.Sort = Session["SortExpr_CdAlloc"].ToString() + " " + Session["SortDir_CdAlloc"].ToString();
            gvCodeAlloc.DataSource = view;
        }
        else
            gvCodeAlloc.DataSource = dsCodes;
        gvCodeAlloc.DataBind();
    }

    private bool _refreshExp = false;
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

    #region EditCode

    protected void Edit(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        Session.Remove("SortExpr_Edit");
        Session.Remove("SortDir_Edit");
        lblCompCode.Text = ddlCompCode.SelectedItem.Text;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnCodeID = (HiddenField)row.FindControl("hdnCodeID");
        HiddenField hdnDescr = (HiddenField)row.FindControl("hdnDescr");
        lblCodeID.Text = hdnCodeID.Value;
        lblCodeDescr.Text = hdnDescr.Value;
        dvErrMsg.InnerHtml = string.Empty;
        BindEditCodeGrid();
        //txtKeywordSearch.Text = string.Empty;
        popDisplayCode.Show();
    }

    protected void gvEditCode_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {
            DataTable dtEditCode = (DataTable)Session["dtEditCode"];
            LinkButton lblHeaderLabel1 = (LinkButton)e.Row.FindControl("lblHeaderLabel1");
            LinkButton lblHeaderLabel2 = (LinkButton)e.Row.FindControl("lblHeaderLabel2");
            LinkButton lblHeaderLabel3 = (LinkButton)e.Row.FindControl("lblHeaderLabel3");
            LinkButton lblHeaderLabel4 = (LinkButton)e.Row.FindControl("lblHeaderLabel4");
            LinkButton lblHeaderLabel5 = (LinkButton)e.Row.FindControl("lblHeaderLabel5");
            LinkButton lblHeaderLabel6 = (LinkButton)e.Row.FindControl("lblHeaderLabel6");
            LinkButton lblHeaderLabel7 = (LinkButton)e.Row.FindControl("lblHeaderLabel7");

            lblHeaderLabel1.Text = dtEditCode.Rows[0]["CodeLabel"].ToString();
            lblHeaderLabel2.Text = dtEditCode.Rows[0]["DescrLabel"].ToString();
            lblHeaderLabel3.Text = dtEditCode.Rows[0]["CodeLabel1"].ToString();
            lblHeaderLabel4.Text = dtEditCode.Rows[0]["CodeLabel2"].ToString();
            lblHeaderLabel5.Text = dtEditCode.Rows[0]["CodeLabel3"].ToString();
            lblHeaderLabel6.Text = dtEditCode.Rows[0]["CodeLabel4"].ToString();
            lblHeaderLabel7.Text = dtEditCode.Rows[0]["CodeLabel5"].ToString();

            if (Session["SortDir_Edit"] != null && Session["Control_Edit"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Edit"].ToString());
                if (Session["SortDir_Edit"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Process gvEditCode in a way to hide empty columns
            //Gridview header labels
            LinkButton lblHeaderLabel1 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel1");
            LinkButton lblHeaderLabel2 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel2");
            LinkButton lblHeaderLabel3 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel3");
            LinkButton lblHeaderLabel4 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel4");
            LinkButton lblHeaderLabel5 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel5");
            LinkButton lblHeaderLabel6 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel6");
            LinkButton lblHeaderLabel7 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel7");

            //Check header text and display/hide columns
            if (lblHeaderLabel1.Text == string.Empty)
                gvEditCode.Columns[1].Visible = false;
            else
                gvEditCode.Columns[1].Visible = true;
            if (lblHeaderLabel2.Text == string.Empty)
                gvEditCode.Columns[2].Visible = false;
            else
                gvEditCode.Columns[2].Visible = true;
            if (lblHeaderLabel3.Text == string.Empty)
                gvEditCode.Columns[3].Visible = false;
            else
                gvEditCode.Columns[3].Visible = true;
            if (lblHeaderLabel4.Text == string.Empty)
                gvEditCode.Columns[4].Visible = false;
            else
                gvEditCode.Columns[4].Visible = true;
            if (lblHeaderLabel5.Text == string.Empty)
                gvEditCode.Columns[5].Visible = false;
            else
                gvEditCode.Columns[5].Visible = true;
            if (lblHeaderLabel6.Text == string.Empty)
                gvEditCode.Columns[6].Visible = false;
            else
                gvEditCode.Columns[6].Visible = true;
            if (lblHeaderLabel7.Text == string.Empty)
                gvEditCode.Columns[7].Visible = false;
            else
                gvEditCode.Columns[7].Visible = true;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "left";
            e.Row.Cells[4].Style["text-align"] = "left";
            e.Row.Cells[5].Style["text-align"] = "left";
        }
    }

    protected void gvEditCode_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        if (gvEditCode.Rows.Count > 0)
        {
            popAlert.Show();
            popDisplayCode.Show();
        }
    }

    protected void gvEditCode_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
            hdnCodeKey.Value = e.CommandArgument.ToString();
            popAlert.Show();
            popDisplayCode.Show();
        }
    }

    protected void SortExpressionEdit(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Edit"] = lnk.ID;

        if (Session["SortDir_Edit"] == null || Session["SortDir_Edit"].ToString() == "Asc")
            Session["SortDir_Edit"] = "Desc";
        else
            Session["SortDir_Edit"] = "Asc";

        Session["SortExpr_Edit"] = e.CommandArgument;
        BindEditCodeGrid();
        popDisplayCode.Show();
    }

    private void BindEditCodeGridForSort(DataTable dt)
    {
        if ((Session["SortExpr_Edit"] != null) && Session["SortDir_Edit"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_Edit"].ToString() + " " + Session["SortDir_Edit"].ToString();
            gvEditCode.DataSource = view;
        }
        else
            gvEditCode.DataSource = dt;
        gvEditCode.DataBind();

        //Avoid overlap of header over first row if its length exceeds29 characters
        if (gvEditCode.HeaderRow != null)
        {
            LinkButton lblHeaderLabel2 = (LinkButton)gvEditCode.HeaderRow.FindControl("lblHeaderLabel2");
            Label lblBreak = (Label)gvEditCode.HeaderRow.FindControl("lblBreak");
            if (lblHeaderLabel2.Text.Length > 29)
                lblBreak.Text = "<br />";
            else
                lblBreak.Text = string.Empty;
        }
    }

    private void BindEditCodeGrid()
    {
        DataSet dsEditCode = new DataSet();
        if (Session["dsEditCode"] == null)
        {
            string strEditCode = string.Empty;
            strEditCode = xms.getCodeLabels(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue == "0" ? "All" : ddlCompCode.SelectedValue, lblCodeID.Text);
            List<SyTextLangVO> lstEditCode = ser.Deserialize<List<SyTextLangVO>>(strEditCode);
            dsEditCode.Tables.Add(Utility.ConvertToDataTable(lstEditCode));
            Session["dsEditCode"] = dsEditCode;
        }
        else
            dsEditCode = (DataSet)Session["dsEditCode"];

        string expr = string.Empty;
        if (lblCompCode.Text != "All")
            expr = "CompCode = '" + lblCompCode.Text + "' And CodeID = '" + lblCodeID.Text + "'";
        else
            expr = "CodeID = '" + lblCodeID.Text + "'";
        DataView view = new DataView(dsEditCode.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtEditCode = view.ToTable();
        Session["dtEditCode"] = dtEditCode;
        if (dtEditCode.Rows.Count == 1)
        {
            if (dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty && dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty &&
                dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty && dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty &&
                dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty && dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty &&
                dtEditCode.Rows[0]["CodeKey"].ToString() == string.Empty)
            {
                gvEditCode.DataSource = null;
                gvEditCode.DataBind();
            }
            else
                BindEditCodeGridForSort(dtEditCode);
        }
        else
            BindEditCodeGridForSort(dtEditCode);

        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr1 = "CodeID = '" + lblCodeID.Text + "'";
        DataView view1 = new DataView(dsCodes.Tables[0], expr1, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view1.ToTable();

        //Display Delete button in the grid depending on isDeletable attribute of the Code
        foreach (GridViewRow row1 in gvEditCode.Rows)
        {
            LinkButton lnkDeleteCode = (LinkButton)row1.FindControl("lnkDeleteCode");
            if (dtCodes.Rows[0]["isDeletable"].ToString() == "N")
                lnkDeleteCode.Visible = false;
            else
                lnkDeleteCode.Visible = true;
        }

        //Display Add button depending on gridview rows count and IsOneRow attribute of the Code
        if (dtCodes.Rows.Count > 0)
        {
            if ((dtCodes.Rows[0]["isOneRow"].ToString() == "N" || gvEditCode.Rows.Count == 0) && dtCodes.Rows[0]["SystemDef"].ToString() == "N")
                btnAddLkpCode.Visible = true;
            else
            {
                btnAddLkpCode.Visible = false;
                if (dtCodes.Rows[0]["SystemDef"].ToString() == "Y")
                    dvErrMsg.InnerHtml = "This is a system default code.";
            }
        }
        else
            btnAddLkpCode.Visible = true;
    }

    protected void RefreshCodeData(object sender, EventArgs e)
    {
        Session.Remove("dsEditCode");
        BindEditCodeGrid();
        popDisplayCode.Show();
    }

    #endregion

    #region Edit Lkpcode

    protected void AddLkpCode(object sender, EventArgs e)
    {
        Session.Remove("IsLkpCodeUpdate");
        dvErrEditLkpCode.InnerHtml = string.Empty;
        lblHEditLkpCode.Text = "Add New Code";
        txtEditCodeLabel.Text = txtEditCodeDescr.Text = txtEditCodeLabel1.Text = txtEditCodeLabel2.Text = txtEditCodeLabel3.Text = txtEditCodeLabel4.Text = txtEditCodeLabel5.Text = string.Empty;
        btnEditLkpCodeDelete.Visible = false;
        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr = "CodeID = '" + lblCodeID.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view.ToTable();

        if (dtCodes.Rows[0]["CodeLabel"].ToString() != null)
        {
            lblEditCodeLabel.Text = dtCodes.Rows[0]["CodeLabel"].ToString();
            dvEditCodeLabel.Style["display"] = "block";
        }
        else
            dvEditCodeLabel.Style["display"] = "none";
        if (dtCodes.Rows[0]["DescrLabel"].ToString() != null)
        {
            lblEditCodeDescr.Text = dtCodes.Rows[0]["DescrLabel"].ToString();
            dvEditCodeDescr.Style["display"] = "block";
        }
        else
            dvEditCodeDescr.Style["display"] = "none";
        if (dtCodes.Rows[0]["CodeLabel1"].ToString() != string.Empty)
        {
            lblEditCodeLabel1.Text = dtCodes.Rows[0]["CodeLabel1"].ToString();
            dvEditCodeLabel1.Style["display"] = "block";
        }
        else
            dvEditCodeLabel1.Style["display"] = "none";

        if (dtCodes.Rows[0]["CodeLabel2"].ToString() != string.Empty)
        {
            lblEditCodeLabel2.Text = dtCodes.Rows[0]["CodeLabel2"].ToString();
            dvEditCodeLabel2.Style["display"] = "block";
        }
        else
            dvEditCodeLabel2.Style["display"] = "none";
        if (dtCodes.Rows[0]["CodeLabel3"].ToString() != string.Empty)
        {
            lblEditCodeLabel3.Text = dtCodes.Rows[0]["CodeLabel3"].ToString();
            dvEditCodeLabel3.Style["display"] = "block";
        }
        else
            dvEditCodeLabel3.Style["display"] = "none";
        if (dtCodes.Rows[0]["CodeLabel4"].ToString() != string.Empty)
        {
            lblEditCodeLabel4.Text = dtCodes.Rows[0]["CodeLabel4"].ToString();
            dvEditCodeLabel4.Style["display"] = "block";
        }
        else
            dvEditCodeLabel4.Style["display"] = "none";
        if (dtCodes.Rows[0]["CodeLabel5"].ToString() != string.Empty)
        {
            lblEditCodeLabel5.Text = dtCodes.Rows[0]["CodeLabel5"].ToString();
            dvEditCodeLabel5.Style["display"] = "block";
        }
        else
            dvEditCodeLabel5.Style["display"] = "none";

        if (dtCodes.Rows[0]["isOneRow"].ToString() == "Y")
        {
            txtEditCodeLabel.Enabled = true;
            txtEditCodeDescr.Enabled = true;
            txtEditCodeLabel1.Enabled = false;
            txtEditCodeLabel2.Enabled = false;
            txtEditCodeLabel3.Enabled = false;
            txtEditCodeLabel4.Enabled = false;
            txtEditCodeLabel5.Enabled = false;
        }
        else
        {
            txtEditCodeLabel.Enabled = true;
            txtEditCodeDescr.Enabled = true;
            txtEditCodeLabel1.Enabled = true;
            txtEditCodeLabel2.Enabled = true;
            txtEditCodeLabel3.Enabled = true;
            txtEditCodeLabel4.Enabled = true;
            txtEditCodeLabel5.Enabled = true;
        }

        btnEditLkpCodeSave.Attributes.Add("onclick", "javascript:return ValidateLkpCode('" + lblEditCodeLabel.Text + "', '" + lblEditCodeDescr.Text + "', '" +
            lblEditCodeLabel1.Text + "', '" + lblEditCodeLabel2.Text + "', '" + lblEditCodeLabel3.Text + "', '" + lblEditCodeLabel4.Text + "', '" + lblEditCodeLabel5.Text + "', '" +
            dtCodes.Rows[0]["IsMandatoryValue1"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue2"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue3"].ToString() +
            "', '" + dtCodes.Rows[0]["IsMandatoryValue4"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue5"].ToString() + "');");

        //Display calendar control on text fields depending on the datatype defined
        EnableDateFields();
        txtEditCodeLabel.Focus();
        //popDisplayCode.Show();
        popEditLkpcode.Show();
    }

    protected void EditLkpCode(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");

        dvErrEditLkpCode.InnerHtml = string.Empty;
        lblHEditLkpCode.Text = "Edit Code";
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        DataTable dtEditCode = (DataTable)Session["dtEditCode"];
        lblEditCodeLabel.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel"].ToString();
        txtEditCodeLabel.Text = dtEditCode.Rows[row.RowIndex]["CodeKey"].ToString();
        Session["orgapappr"] = dtEditCode.Rows[row.RowIndex]["CodeKey"].ToString();
        lblEditCodeDescr.Text = dtEditCode.Rows[row.RowIndex]["DescrLabel"].ToString();
        txtEditCodeDescr.Text = dtEditCode.Rows[row.RowIndex]["Description"].ToString();
        btnEditLkpCodeDelete.Visible = true;

        if (dtEditCode.Rows[row.RowIndex]["CodeLabel1"].ToString() != string.Empty)
        {
            lblEditCodeLabel1.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel1"].ToString();
            txtEditCodeLabel1.Text = dtEditCode.Rows[row.RowIndex]["CodeValue1"].ToString();
            dvEditCodeLabel1.Style["display"] = "block";
        }
        else
            dvEditCodeLabel1.Style["display"] = "none";

        if (dtEditCode.Rows[row.RowIndex]["CodeLabel2"].ToString() != string.Empty)
        {
            lblEditCodeLabel2.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel2"].ToString();
            txtEditCodeLabel2.Text = dtEditCode.Rows[row.RowIndex]["CodeValue2"].ToString();
            dvEditCodeLabel2.Style["display"] = "block";
        }
        else
            dvEditCodeLabel2.Style["display"] = "none";
        if (dtEditCode.Rows[row.RowIndex]["CodeLabel3"].ToString() != string.Empty)
        {
            lblEditCodeLabel3.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel3"].ToString();
            txtEditCodeLabel3.Text = dtEditCode.Rows[row.RowIndex]["CodeValue3"].ToString();
            dvEditCodeLabel3.Style["display"] = "block";
        }
        else
            dvEditCodeLabel3.Style["display"] = "none";
        if (dtEditCode.Rows[row.RowIndex]["CodeLabel4"].ToString() != string.Empty)
        {
            lblEditCodeLabel4.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel4"].ToString();
            txtEditCodeLabel4.Text = dtEditCode.Rows[row.RowIndex]["CodeValue4"].ToString();
            dvEditCodeLabel4.Style["display"] = "block";
        }
        else
            dvEditCodeLabel4.Style["display"] = "none";
        if (dtEditCode.Rows[row.RowIndex]["CodeLabel5"].ToString() != string.Empty)
        {
            lblEditCodeLabel5.Text = dtEditCode.Rows[row.RowIndex]["CodeLabel5"].ToString();
            txtEditCodeLabel5.Text = dtEditCode.Rows[row.RowIndex]["CodeValue5"].ToString();
            dvEditCodeLabel5.Style["display"] = "block";
        }
        else
            dvEditCodeLabel5.Style["display"] = "none";

        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr = "CodeID = '" + lblCodeID.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view.ToTable();

        if (dtCodes.Rows[0]["isDeletable"].ToString() == "Y")
            btnEditLkpCodeDelete.Visible = true;
        else
            btnEditLkpCodeDelete.Visible = false;

        //Disable/Enable all the fields depending SystemDef attribute of the code
        if (dtCodes.Rows[0]["SystemDef"].ToString() == "Y")
            EnableAllFields(false, false, false, false, false, false, false);
        else
        {
            //Disable/Enable specific fields depending on IsOneRow attribute of the code
            if (dtCodes.Rows[0]["isOneRow"].ToString() == "Y")
                EnableAllFields(true, true, false, false, false, false, false);
            else
                EnableAllFields(false, true, true, true, true, true, true);
        }
        if (lblCodeID.Text == "AUTOAPAPPROVAL")
            if (Session["OrgSelfAppr"].ToString() == "1")
            {
                txtEditCodeLabel.Enabled = false;
                dvErrEditLkpCode.Style["color"] = "Red";
                dvErrEditLkpCode.InnerHtml = "This Organization has SelfApproval enabled.";
            }
            else
            {
                txtEditCodeLabel.Enabled = true;
                dvErrEditLkpCode.InnerHtml = string.Empty;
            }

        btnEditLkpCodeSave.Attributes.Add("onclick", "javascript:return ValidateLkpCode('" + lblEditCodeLabel.Text + "', '" + lblEditCodeDescr.Text + "', '" +
           lblEditCodeLabel1.Text + "', '" + lblEditCodeLabel2.Text + "', '" + lblEditCodeLabel3.Text + "', '" + lblEditCodeLabel4.Text + "', '" + lblEditCodeLabel5.Text + "', '" +
           dtCodes.Rows[0]["IsMandatoryValue1"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue2"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue3"].ToString() +
           "', '" + dtCodes.Rows[0]["IsMandatoryValue4"].ToString() + "', '" + dtCodes.Rows[0]["IsMandatoryValue5"].ToString() + "');");

        //Display calendar control on text fields depending on the datatype defined
        EnableDateFields();

        Session["IsLkpCodeUpdate"] = "Y";
        txtEditCodeLabel.Focus();
        popEditLkpcode.Show();
    }

    private DataTable BindGroups(string compcode)
    {
        DataTable dtGrup = new DataTable();
        if (Session["Groups"] == null)
        {
            UserGroupVO uGroup = new UserGroupVO();
            uGroup.addedBy = 0;
            uGroup.compCode = compcode;
            uGroup.groupId = 0;
            uGroup.modifiedBy = 0;
            uGroup.orgId = Convert.ToInt32(Session["OrgID"]);
            uGroup.userGroup = string.Empty;
            uGroup.userProfile = string.Empty;
            var str1 = xms.getUserGrpProfile(uGroup);
            List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str1);
            dtGrup = Utility.ConvertToDataTable(listGroups);
            Session["Groups"] = dtGrup;
        }
        else
            dtGrup = (DataTable)Session["Groups"];
        return dtGrup;
    }

    protected void SaveLkpCode(object sender, EventArgs e)
    {
        dvErrEditLkpCode.InnerHtml = string.Empty;
        if (lblCodeID.Text.ToLower() == "autoapapproval")
        {
            if (txtEditCodeLabel.Text.ToLower() == "n" && Session["orgapappr"].ToString() == "Y")
            {
                //Get all managers in the org & comp
                int cnt = 0;
                string str = xms.getManagers(0, Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue == "0" ? "All" : ddlCompCode.SelectedValue, 5);
                List<UserVO> lst = ser.Deserialize<List<UserVO>>(str);
                DataSet dsUsers1 = new DataSet();
                dsUsers1.Tables.Add(Utility.ConvertToDataTable(lst));
                for (int i = 0; i < dsUsers1.Tables[0].Rows.Count; i++)
                {
                    DataTable dtGrp = BindGroups(ddlCompCode.SelectedValue == "0" ? Session["CompCode"].ToString() : ddlCompCode.SelectedValue);
                    string expr = "userGroup = '" + dsUsers1.Tables[0].Rows[i]["UserGroup"].ToString() + "'";
                    DataView dv = new DataView(dtGrp, expr, "userGroup", DataViewRowState.CurrentRows);
                    for (int j = 0; j < dv.ToTable().Rows.Count; j++)
                    {
                        if (dv.ToTable().Rows[j]["userProfile"].ToString().ToLower() == "ap")
                            cnt++;
                    }
                }
                if (cnt == 0)
                {
                    popDisplayCode.Show();
                    popEditLkpcode.Show();
                    popAssignRole.Show();

                    //Select Distinct Email from dsUsers dataset
                    DataTable dtDistEmail = dsUsers1.Tables[0].DefaultView.ToTable(true, "Email");

                    //Sort the list with Email in Ascending order
                    DataView dvUsers = dsUsers1.Tables[0].DefaultView;
                    dvUsers.Sort = "Email Asc";
                    DataTable dtUsers1 = dvUsers.ToTable();

                    //Create new datatable for inserting unique data
                    DataTable dtEmail = new DataTable();
                    dtEmail.Columns.Add("UserID");
                    dtEmail.Columns.Add("Email");
                    DataRow dr;
                    for (int i = 0; i < dtDistEmail.Rows.Count; i++)
                    {
                        string expr1 = "Email = '" + dtDistEmail.Rows[i]["Email"] + "'";
                        DataView view1 = new DataView(dsUsers1.Tables[0], expr1, "Email", DataViewRowState.CurrentRows);
                        DataTable dtSelected = view1.ToTable();
                        for (int j = 0; j < 1; j++)
                        {
                            dr = dtEmail.NewRow();
                            dr["Email"] = dtSelected.Rows[j]["Email"];
                            dr["UserID"] = dtSelected.Rows[j]["UserID"];
                            dtEmail.Rows.Add(dr);
                        }
                    }
                    ddlARUsers.DataSource = dtEmail;
                    ddlARUsers.DataBind();
                }
                else
                {
                    SaveLkpData();
                    Session["AppFlag"] = "N";
                }
            }
            else if (txtEditCodeLabel.Text.ToLower() == "y" && Session["orgapappr"].ToString() == "N")
            {
                string strAPExp = string.Empty;
                if (ddlCompCode.SelectedItem.Text == "All")
                    strAPExp = xms.getRequestsForAPApproval(Convert.ToInt32(Session["OrgID"]), 2, string.Empty, 3);
                else
                    strAPExp = xms.getRequestsForAPApproval(Convert.ToInt32(Session["OrgID"]), 2, ddlCompCode.SelectedValue == "0" ? "All" : ddlCompCode.SelectedValue, 3);

                List<ApproveRequestsVO> lstApExp = ser.Deserialize<List<ApproveRequestsVO>>(strAPExp);
                DataSet dsExp = new DataSet();
                dsExp.Tables.Add(Utility.ConvertToDataTable(lstApExp));
                if (dsExp.Tables[0].Rows.Count > 0)
                    popAlertforAPSts.Show();
                else
                {
                    SaveLkpData();
                    Session["AppFlag"] = "Y";
                }
            }
            else
                SaveLkpData();
        }
        else
            SaveLkpData();
        Session.Remove("orgapappr");
    }

    private void SaveLkpData()
    {
        string retStr = string.Empty;
        CodeValueVO codeValue = new CodeValueVO();
        codeValue.addedBy = Session["UserID"].ToString();
        codeValue.addedOn = DateTime.Now.ToShortDateString();
        codeValue.codeId = lblCodeID.Text;
        codeValue.codeKey = txtEditCodeLabel.Text;
        codeValue.codeValue1 = txtEditCodeLabel1.Text;
        codeValue.codeValue2 = txtEditCodeLabel2.Text;
        codeValue.codeValue3 = txtEditCodeLabel3.Text;
        codeValue.codeValue4 = txtEditCodeLabel4.Text;
        codeValue.codeValue5 = txtEditCodeLabel5.Text;
        codeValue.compCode = ddlCompCode.SelectedValue == "0" ? "All" : ddlCompCode.SelectedValue;
        codeValue.description = txtEditCodeDescr.Text;
        codeValue.modifiedBy = Session["UserID"].ToString();
        codeValue.modifiedOn = DateTime.Now.ToShortDateString();
        codeValue.orgId = Session["OrgID"].ToString();
        if (gvEditCode.Rows.Count == 0)
            retStr = xms.addCodeValues(codeValue, 1);//first row is updated in ER_LkpCodeValues
        else if (Session["IsLkpCodeUpdate"] == null)
            retStr = xms.addCodeValues(codeValue, 2);//Adding New CodeKey to ER_LkpCodeValues
        else
            retStr = xms.addCodeValues(codeValue, 3);//Updating existing CodeKey in ER_LkpCodeValues
        if (retStr.ToLower().Contains("succes"))
        {
            dvErrEditLkpCode.Style["color"] = "Green";
            Session.Remove("dsEditCode");
            BindEditCodeGrid();
            Session["AppFlag"] = "N";
            if (ddlCompCode.SelectedValue == "0" || ddlCompCode.SelectedValue == Session["CompCode"].ToString())
            {
                Session.Remove("dsCodes");
                string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
                string[] arrExpCodes = new string[2];
                arrExpCodes = expCodes.Split('~');
                List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
                DataTable dtCodes = new DataTable();
                dtCodes = Utility.ConvertToDataTable(codes);
                Session["dsCodes"] = dtCodes;
            }
        }
        else
        {
            dvErrEditLkpCode.Style["color"] = "Red";
            Session["AppFlag"] = "Y";
            Session.Remove("IsAP");
        }
        dvErrEditLkpCode.InnerHtml = retStr;
        popEditLkpcode.Show();
    }

    protected void DeleteLkpCode(object sender, EventArgs e)
    {
        hdnCodeKey.Value = txtEditCodeLabel.Text;
        popDisplayCode.Show();
        popEditLkpcode.Show();
        popAlert.Show();
    }

    private void EnableDateFields()
    {
        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr = "CodeID = '" + (lblCodeID.Text == string.Empty ? txtCCCodeID.Text : lblCodeID.Text) + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view.ToTable();

        if (dtCodes.Rows[0]["DataElmntCodeName"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel.CssClass.Replace("date", "");
        if (dtCodes.Rows[0]["DataElmntCodeDescr"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeDescr.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeDescr.CssClass.Replace("date", "");
        if (dtCodes.Rows[0]["DataElmntValue1"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel1.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel1.CssClass.Replace("date", "");

        if (dtCodes.Rows[0]["DataElmntValue2"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel2.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel2.CssClass.Replace("date", "");
        if (dtCodes.Rows[0]["DataElmntValue3"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel3.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel3.CssClass.Replace("date", "");
        if (dtCodes.Rows[0]["DataElmntValue4"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel4.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel4.CssClass.Replace("date", "");
        if (dtCodes.Rows[0]["DataElmntValue5"].ToString().ToLower().Contains("date"))
        {
            txtEditCodeLabel5.CssClass = "date";
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
        }
        else
            txtEditCodeLabel5.CssClass.Replace("date", "");
    }

    private void EnableAllFields(bool bool1, bool bool2, bool bool3, bool bool4, bool bool5, bool bool6, bool bool7)
    {
        txtEditCodeLabel.Enabled = bool1;
        txtEditCodeDescr.Enabled = bool2;
        txtEditCodeLabel1.Enabled = bool3;
        txtEditCodeLabel2.Enabled = bool4;
        txtEditCodeLabel3.Enabled = bool5;
        txtEditCodeLabel4.Enabled = bool6;
        txtEditCodeLabel5.Enabled = bool7;
    }

    protected void UpdateAutoAPFlag(object sender, EventArgs e)
    {
        Session.Remove("IsAP");
        SaveLkpData();
    }

    protected void btnEditLkpCodeClose_Click(object sender, EventArgs e)
    {
        popEditLkpcode.Hide();
        popDisplayCode.Show();
    }

    #endregion

    #region EditSyCodeID

    protected void AddNewCode(object sender, EventArgs e)
    {
        btnCCSave.Attributes.Add("onclick", "javascript:return ValidateSyCode();");
        dvErrCreateCode.InnerHtml = string.Empty;
        Session.Remove("IsSyCodeUpdate");
        lblHCreateCode.Text = "Create New Code";
        EnableCreateCodeFields();
        DisableFieldsOnOneRow(true);
        ClearCreateCodefields();
        btnCCDelete.Visible = false;
        //txtKeywordSearch.Text = string.Empty;
        popCreateCode.Show();
        txtCCCodeID.Focus();
    }

    protected void EditSyCode(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        dvErrCreateCode.InnerHtml = string.Empty;
        Session.Remove("IsSyCodeUpdate");
        ClearCreateCodefields();
        lblHCreateCode.Text = "Edit Code";
        CreateLengthFields();
        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr = "CodeID = '" + lblCodeID.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view.ToTable();
        //lblCCOrgID.Text = dtCodes.Rows[0]["OrgID"].ToString();
        txtCCCodeID.Text = dtCodes.Rows[0]["CodeID"].ToString();
        txtCCCodeID.Enabled = false;
        txtCCDescription.Text = dtCodes.Rows[0]["Descr"].ToString();

        if (dtCodes.Rows[0]["AllCompCodes"] != null)
        {
            if (dtCodes.Rows[0]["AllCompCodes"].ToString() == "Y")
                rblOrgLevel.SelectedValue = "1";
            else
                rblOrgLevel.SelectedValue = "2";
        }

        chkIsDeletable.Checked = (dtCodes.Rows[0]["isDeletable"].ToString().ToUpper() == "Y" ? true : false);
        chkIsOneRow.Checked = (dtCodes.Rows[0]["isOneRow"].ToString().ToUpper() == "Y" ? true : false);

        if (dtCodes.Rows[0]["DataElmntCodeName"] == null || dtCodes.Rows[0]["DataElmntCodeName"].ToString() == string.Empty)
            ddlCodeKeyFType.SelectedValue = "Varchar2";
        else
            ddlCodeKeyFType.SelectedValue = dtCodes.Rows[0]["DataElmntCodeName"].ToString();

        if (dtCodes.Rows[0]["DataElmntCodeDescr"] == null || dtCodes.Rows[0]["DataElmntCodeDescr"].ToString() == string.Empty)
            ddlDescFType.SelectedValue = "Varchar2";
        else
            ddlDescFType.SelectedValue = dtCodes.Rows[0]["DataElmntCodeDescr"].ToString();

        if (dtCodes.Rows[0]["DataElmntValue1"] == null || dtCodes.Rows[0]["DataElmntValue1"].ToString() == string.Empty)
            ddlCV1FType.SelectedValue = "Varchar2";
        else
            ddlCV1FType.SelectedValue = dtCodes.Rows[0]["DataElmntValue1"].ToString();

        if (dtCodes.Rows[0]["DataElmntValue2"] == null || dtCodes.Rows[0]["DataElmntValue2"].ToString() == string.Empty)
            ddlCV2FType.SelectedValue = "Varchar2";
        else
            ddlCV2FType.SelectedValue = dtCodes.Rows[0]["DataElmntValue2"].ToString();

        if (dtCodes.Rows[0]["DataElmntValue3"] == null || dtCodes.Rows[0]["DataElmntValue3"].ToString() == string.Empty)
            ddlCV3FType.SelectedValue = "Varchar2";
        else
            ddlCV3FType.SelectedValue = dtCodes.Rows[0]["DataElmntValue3"].ToString();

        if (dtCodes.Rows[0]["DataElmntValue4"] == null || dtCodes.Rows[0]["DataElmntValue4"].ToString() == string.Empty)
            ddlCV4FType.SelectedValue = "Varchar2";
        else
            ddlCV4FType.SelectedValue = dtCodes.Rows[0]["DataElmntValue4"].ToString();

        if (dtCodes.Rows[0]["DataElmntValue5"] == null || dtCodes.Rows[0]["DataElmntValue5"].ToString() == string.Empty)
            ddlCV5FType.SelectedValue = "Varchar2";
        else
            ddlCV5FType.SelectedValue = dtCodes.Rows[0]["DataElmntValue5"].ToString();

        EnableCreateCodeFields();

        txtCodeKeyLabel.Text = dtCodes.Rows[0]["CodeLabel"].ToString();
        txtDescLabel.Text = dtCodes.Rows[0]["DescrLabel"].ToString();
        txtCV1Label.Text = dtCodes.Rows[0]["CodeLabel1"].ToString();
        txtCV2Label.Text = dtCodes.Rows[0]["CodeLabel2"].ToString();
        txtCV3Label.Text = dtCodes.Rows[0]["CodeLabel3"].ToString();
        txtCV4Label.Text = dtCodes.Rows[0]["CodeLabel4"].ToString();
        txtCV5Label.Text = dtCodes.Rows[0]["CodeLabel5"].ToString();

        if (dtCodes.Rows[0]["dataElmntLenCodeName"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenCodeName"].ToString().Split(',');
            ddlCodeKeyLength.SelectedValue = arr[0];
            txtCodeKeyDecimals.Text = arr[1];
        }
        else
        {
            ddlCodeKeyLength.SelectedValue = dtCodes.Rows[0]["dataElmntLenCodeName"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenCodeName"].ToString();
            txtCodeKeyDecimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenCodeDescr"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenCodeDescr"].ToString().Split(',');
            ddlDescLength.SelectedValue = arr[0];
            txtDescDecimals.Text = arr[1];
        }
        else
        {
            ddlDescLength.SelectedValue = dtCodes.Rows[0]["dataElmntLenCodeDescr"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenCodeDescr"].ToString();
            txtDescDecimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenValue1"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenValue1"].ToString().Split(',');
            ddlCV1Length.SelectedValue = arr[0];
            txtCV1Decimals.Text = arr[1];
        }
        else
        {
            ddlCV1Length.SelectedValue = dtCodes.Rows[0]["dataElmntLenValue1"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenValue1"].ToString();
            txtCV1Decimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenValue2"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenValue2"].ToString().Split(',');
            ddlCV2Length.SelectedValue = arr[0];
            txtCV2Decimals.Text = arr[1];
        }
        else
        {
            ddlCV2Length.SelectedValue = dtCodes.Rows[0]["dataElmntLenValue2"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenValue2"].ToString();
            txtCV2Decimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenValue3"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenValue3"].ToString().Split(',');
            ddlCV3Length.SelectedValue = arr[0];
            txtCV3Decimals.Text = arr[1];
        }
        else
        {
            ddlCV3Length.SelectedValue = dtCodes.Rows[0]["dataElmntLenValue3"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenValue3"].ToString();
            txtCV3Decimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenValue4"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenValue4"].ToString().Split(',');
            ddlCV4Length.SelectedValue = arr[0];
            txtCV4Decimals.Text = arr[1];
        }
        else
        {
            ddlCV4Length.SelectedValue = dtCodes.Rows[0]["dataElmntLenValue4"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenValue4"].ToString();
            txtCV4Decimals.Text = string.Empty;
        }
        if (dtCodes.Rows[0]["dataElmntLenValue5"].ToString().Contains(","))
        {
            string[] arr = new string[2];
            arr = dtCodes.Rows[0]["dataElmntLenValue5"].ToString().Split(',');
            ddlCV5Length.SelectedValue = arr[0];
            txtCV5Decimals.Text = arr[1];
        }
        else
        {
            ddlCV5Length.SelectedValue = dtCodes.Rows[0]["dataElmntLenValue5"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["dataElmntLenValue5"].ToString();
            txtCV5Decimals.Text = string.Empty;
        }

        //Check Mandatory fields
        if (dtCodes.Rows[0]["isMandatoryValue1"].ToString() == "Y")
            chkCV1Mnd.Checked = true;
        if (dtCodes.Rows[0]["isMandatoryValue2"].ToString() == "Y")
            chkCV2Mnd.Checked = true;
        if (dtCodes.Rows[0]["isMandatoryValue3"].ToString() == "Y")
            chkCV3Mnd.Checked = true;
        if (dtCodes.Rows[0]["isMandatoryValue4"].ToString() == "Y")
            chkCV4Mnd.Checked = true;
        if (dtCodes.Rows[0]["isMandatoryValue5"].ToString() == "Y")
            chkCV5Mnd.Checked = true;

        //check if the code has already data/values defined or not. If there are values existing, restrict user to modify corresponding datatypes.
        DataSet dsEditCode = (DataSet)Session["dsEditCode"];
        DataView dvEditCode = new DataView(dsEditCode.Tables[0], "CODEID = '" + dtCodes.Rows[0]["CodeID"].ToString() + "'", "", DataViewRowState.CurrentRows);
        int codeValueCount = dvEditCode.ToTable().Rows.Count;
        if (codeValueCount > 0)
            DisableFieldsByCodevalueCount(false);
        //check if the code has already data/values defined or not. If there are values existing, restrict user to modify corresponding datatypes.

        //Disable/Enable CodeValue related fields depending on IsOneRow attribute of the code
        if (chkIsOneRow.Checked)
            DisableFieldsOnOneRow(false);
        //else
        //    DisableFieldsOnOneRow(true);
        //Disable/Enable all fields depending on SystemDef attribute of the code

        bool isSysDef = dtCodes.Rows[0]["systemDef"].ToString() == "Y" ? true : false;

        if (isSysDef)
            DisableFieldsOnSysDef(false);
        //else
        //{
        //    if (!chkIsOneRow.Checked)
        //        DisableFieldsOnSysDef(true);
        //}
        Session["IsSyCodeUpdate"] = "Y";
        txtCCDescription.Focus();
        //popDisplayCode.Show();
        popCreateCode.Show();
    }

    protected void SaveNewSyCode(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        int typesUpdFlg = 0;
        int labelsUpdFlg = 0;
        int valuesUpdFlg = 0;
        DataSet dsCodes = (DataSet)Session["dsSyCodes"];
        string expr = "CodeID = '" + lblCodeID.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCodes = view.ToTable();

        if (chkIsOneRow.Checked)
        {
            txtCV1Label.Text = string.Empty;
            txtCV2Label.Text = string.Empty;
            txtCV3Label.Text = string.Empty;
            txtCV4Label.Text = string.Empty;
            txtCV5Label.Text = string.Empty;
            chkCV1Mnd.Checked = false;
            chkCV2Mnd.Checked = false;
            chkCV3Mnd.Checked = false;
            chkCV4Mnd.Checked = false;
            chkCV5Mnd.Checked = false;
        }

        if (Session["IsSyCodeUpdate"] != null)
        {
            if (txtCCCodeID.Text != dtCodes.Rows[0]["CodeID"].ToString())
            {
                typesUpdFlg = 1;
                labelsUpdFlg = 1;
                valuesUpdFlg = 1;
            }
            if (txtCCDescription.Text != dtCodes.Rows[0]["Descr"].ToString())
                labelsUpdFlg = 1;
            if (rblOrgLevel.SelectedValue != (dtCodes.Rows[0]["AllCompCodes"].ToString() == "Y" ? "1" : "2"))
            {
                typesUpdFlg = 1;
                valuesUpdFlg = 1;
            }
            if (chkIsDeletable.Checked != (dtCodes.Rows[0]["isDeletable"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (chkIsOneRow.Checked != (dtCodes.Rows[0]["isOneRow"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (txtCodeKeyLabel.Text != dtCodes.Rows[0]["CodeLabel"].ToString())
                labelsUpdFlg = 1;
            if (txtDescLabel.Text != dtCodes.Rows[0]["DescrLabel"].ToString())
                labelsUpdFlg = 1;
            if (ddlCodeKeyFType.SelectedItem.Text != dtCodes.Rows[0]["DataElmntCodeName"].ToString())
                typesUpdFlg = 1;
            if (ddlDescFType.Text != dtCodes.Rows[0]["DataElmntCodeDescr"].ToString())
                typesUpdFlg = 1;
            if (txtCV1Label.Text != dtCodes.Rows[0]["CodeLabel1"].ToString())
                labelsUpdFlg = 1;
            if (txtCV2Label.Text != dtCodes.Rows[0]["CodeLabel2"].ToString())
                labelsUpdFlg = 1;
            if (txtCV3Label.Text != dtCodes.Rows[0]["CodeLabel3"].ToString())
                labelsUpdFlg = 1;
            if (txtCV4Label.Text != dtCodes.Rows[0]["CodeLabel4"].ToString())
                labelsUpdFlg = 1;
            if (txtCV5Label.Text != dtCodes.Rows[0]["CodeLabel5"].ToString())
                labelsUpdFlg = 1;

            if (ddlCV1FType.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntValue1"].ToString() == string.Empty ? "Varchar2" : dtCodes.Rows[0]["DataElmntValue1"].ToString()))
                typesUpdFlg = 1;
            if (ddlCV2FType.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntValue2"].ToString() == string.Empty ? "Varchar2" : dtCodes.Rows[0]["DataElmntValue2"].ToString()))
                typesUpdFlg = 1;
            if (ddlCV3FType.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntValue3"].ToString() == string.Empty ? "Varchar2" : dtCodes.Rows[0]["DataElmntValue3"].ToString()))
                typesUpdFlg = 1;
            if (ddlCV4FType.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntValue4"].ToString() == string.Empty ? "Varchar2" : dtCodes.Rows[0]["DataElmntValue4"].ToString()))
                typesUpdFlg = 1;
            if (ddlCV5FType.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntValue5"].ToString() == string.Empty ? "Varchar2" : dtCodes.Rows[0]["DataElmntValue5"].ToString()))
                typesUpdFlg = 1;
            if (chkCV1Mnd.Checked != (dtCodes.Rows[0]["isMandatoryValue1"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (chkCV2Mnd.Checked != (dtCodes.Rows[0]["isMandatoryValue2"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (chkCV3Mnd.Checked != (dtCodes.Rows[0]["isMandatoryValue3"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (chkCV4Mnd.Checked != (dtCodes.Rows[0]["isMandatoryValue4"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;
            if (chkCV5Mnd.Checked != (dtCodes.Rows[0]["isMandatoryValue5"].ToString().ToUpper() == "Y" ? true : false))
                typesUpdFlg = 1;

            if (dtCodes.Rows[0]["CodeLabel1"].ToString() == string.Empty && txtCV1Label.Text != string.Empty ||
                dtCodes.Rows[0]["CodeLabel2"].ToString() == string.Empty && txtCV2Label.Text != string.Empty ||
                dtCodes.Rows[0]["CodeLabel3"].ToString() == string.Empty && txtCV3Label.Text != string.Empty ||
                dtCodes.Rows[0]["CodeLabel4"].ToString() == string.Empty && txtCV4Label.Text != string.Empty ||
                dtCodes.Rows[0]["CodeLabel5"].ToString() == string.Empty && txtCV5Label.Text != string.Empty)
                typesUpdFlg = 1;

            if (typesUpdFlg == 0)
            {
                //CodeKey datatype
                if (ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenCodeName"].ToString().Split(',');
                    if (ddlCodeKeyLength.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCodeKeyDecimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCodeKeyLength.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenCodeName"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenCodeName"].ToString()))
                        typesUpdFlg = 1;
                }

                //Description datatype
                if (ddlDescFType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenCodeDescr"].ToString().Split(',');
                    if (ddlDescLength.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtDescDecimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlDescFType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlDescLength.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenCodeDescr"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenCodeDescr"].ToString()))
                        typesUpdFlg = 1;
                }

                //CodeValue1 datatype
                if (ddlCV1FType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenValue1"].ToString().Split(',');
                    if (ddlCV1Length.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCV1Decimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCV1FType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCV1Length.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenValue1"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenValue1"].ToString()))
                        typesUpdFlg = 1;
                }

                //CodeValue2 datatype
                if (ddlCV2FType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenValue2"].ToString().Split(',');
                    if (ddlCV2Length.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCV2Decimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCV2FType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCV2Length.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenValue2"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenValue2"].ToString()))
                        typesUpdFlg = 1;
                }

                //CodeValue3 datatype
                if (ddlCV3FType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenValue3"].ToString().Split(',');
                    if (ddlCV3Length.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCV3Decimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCV3FType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCV3Length.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenValue3"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenValue3"].ToString()))
                        typesUpdFlg = 1;
                }

                //CodeValue4 datatype
                if (ddlCV4FType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenValue4"].ToString().Split(',');
                    if (ddlCV4Length.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCV4Decimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCV4FType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCV4Length.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenValue4"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenValue4"].ToString()))
                        typesUpdFlg = 1;
                }

                //CodeValue5 datatype
                if (ddlCV5FType.SelectedItem.Text.ToLower().Contains("numeric"))
                {
                    string[] arr = new string[2];
                    arr = dtCodes.Rows[0]["DataElmntLenValue5"].ToString().Split(',');
                    if (ddlCV5Length.SelectedItem.Text != arr[0])
                        typesUpdFlg = 1;
                    if (txtCV5Decimals.Text != arr[1])
                        typesUpdFlg = 1;
                }
                else if (ddlCV5FType.SelectedItem.Text.ToLower().Contains("varchar"))
                {
                    if (ddlCV5Length.SelectedItem.Text != (dtCodes.Rows[0]["DataElmntLenValue5"].ToString() == string.Empty ? "50" : dtCodes.Rows[0]["DataElmntLenValue5"].ToString()))
                        typesUpdFlg = 1;
                }
            }
        }
        else
            typesUpdFlg = labelsUpdFlg = valuesUpdFlg = 1;
        if (typesUpdFlg == 1 || labelsUpdFlg == 1 || valuesUpdFlg == 1)
        {
            if (typesUpdFlg == 1)
            {
                SyCodeVO sycode = new SyCodeVO();
                sycode.allCompCodes = rblOrgLevel.SelectedValue == "1" ? "Y" : "N";
                sycode.compCode = rblOrgLevel.SelectedValue == "1" ? "All" : string.Empty;
                sycode.isOneRow = chkIsOneRow.Checked == true ? "Y" : "N";
                sycode.isDeletable = chkIsDeletable.Checked == true ? "Y" : "N";
                sycode.codeId = txtCCCodeID.Text.ToUpper();
                sycode.codeId1 = string.Empty;
                sycode.codeId2 = string.Empty;
                sycode.codeLabel = string.Empty;
                sycode.codeLabel1 = string.Empty;
                sycode.codeLabel2 = string.Empty;
                sycode.codeLabel3 = string.Empty;
                sycode.codeLabel4 = string.Empty;
                sycode.codeLabel5 = string.Empty;
                sycode.codeType = string.Empty;

                sycode.dataElmntCodeName = (txtCodeKeyLabel.Text == string.Empty ? string.Empty : ddlCodeKeyFType.SelectedItem.Text);
                sycode.dataElmntCodeDescr = (txtDescLabel.Text == string.Empty ? string.Empty : ddlDescFType.SelectedItem.Text);
                sycode.dataElmntLenCodeName = txtCodeKeyLabel.Text == string.Empty ? string.Empty : (ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCodeKeyLength.SelectedItem.Text + "," + (txtCodeKeyDecimals.Text == string.Empty ? "0" : txtCodeKeyDecimals.Text) : (ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("date") || ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCodeKeyLength.SelectedItem.Text));
                sycode.dataElmntLenCodeDescr = txtDescLabel.Text == string.Empty ? string.Empty : (ddlDescFType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlDescLength.SelectedItem.Text + "," + (txtDescDecimals.Text == string.Empty ? "0" : txtDescDecimals.Text) : (ddlDescFType.SelectedItem.Text.ToLower().Contains("date") || ddlDescFType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlDescLength.SelectedItem.Text));

                //Pass values if IsOneRow attribute is set False
                if (chkIsOneRow.Checked == false)
                {
                    sycode.dataElmntValue1 = (txtCV1Label.Text == string.Empty ? string.Empty : ddlCV1FType.SelectedItem.Text);
                    sycode.dataElmntValue2 = (txtCV2Label.Text == string.Empty ? string.Empty : ddlCV2FType.SelectedItem.Text);
                    sycode.dataElmntValue3 = (txtCV3Label.Text == string.Empty ? string.Empty : ddlCV3FType.SelectedItem.Text);
                    sycode.dataElmntValue4 = (txtCV4Label.Text == string.Empty ? string.Empty : ddlCV4FType.SelectedItem.Text);
                    sycode.dataElmntValue5 = (txtCV5Label.Text == string.Empty ? string.Empty : ddlCV5FType.SelectedItem.Text);

                    sycode.isMandatoryValue1 = (txtCV1Label.Text == string.Empty ? string.Empty : (chkCV1Mnd.Checked == true ? "Y" : "N"));
                    sycode.isMandatoryValue2 = (txtCV2Label.Text == string.Empty ? string.Empty : (chkCV2Mnd.Checked == true ? "Y" : "N"));
                    sycode.isMandatoryValue3 = (txtCV3Label.Text == string.Empty ? string.Empty : (chkCV3Mnd.Checked == true ? "Y" : "N"));
                    sycode.isMandatoryValue4 = (txtCV4Label.Text == string.Empty ? string.Empty : (chkCV4Mnd.Checked == true ? "Y" : "N"));
                    sycode.isMandatoryValue5 = (txtCV5Label.Text == string.Empty ? string.Empty : (chkCV5Mnd.Checked == true ? "Y" : "N"));

                    sycode.dataElmntLenValue1 = txtCV1Label.Text == string.Empty ? string.Empty : (ddlCV1FType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCV1Length.SelectedItem.Text + "," + (txtCV1Decimals.Text == string.Empty ? "0" : txtCV1Decimals.Text) : (ddlCV1FType.SelectedItem.Text.ToLower().Contains("date") || ddlCV1FType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCV1Length.SelectedItem.Text));
                    sycode.dataElmntLenValue2 = txtCV2Label.Text == string.Empty ? string.Empty : (ddlCV2FType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCV2Length.SelectedItem.Text + "," + (txtCV2Decimals.Text == string.Empty ? "0" : txtCV2Decimals.Text) : (ddlCV2FType.SelectedItem.Text.ToLower().Contains("date") || ddlCV2FType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCV2Length.SelectedItem.Text));
                    sycode.dataElmntLenValue3 = txtCV3Label.Text == string.Empty ? string.Empty : (ddlCV3FType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCV3Length.SelectedItem.Text + "," + (txtCV3Decimals.Text == string.Empty ? "0" : txtCV3Decimals.Text) : (ddlCV3FType.SelectedItem.Text.ToLower().Contains("date") || ddlCV3FType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCV3Length.SelectedItem.Text));
                    sycode.dataElmntLenValue4 = txtCV4Label.Text == string.Empty ? string.Empty : (ddlCV4FType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCV4Length.SelectedItem.Text + "," + (txtCV4Decimals.Text == string.Empty ? "0" : txtCV4Decimals.Text) : (ddlCV4FType.SelectedItem.Text.ToLower().Contains("date") || ddlCV4FType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCV4Length.SelectedItem.Text));
                    sycode.dataElmntLenValue5 = txtCV5Label.Text == string.Empty ? string.Empty : (ddlCV5FType.SelectedItem.Text.ToLower().Contains("numeric") ? ddlCV5Length.SelectedItem.Text + "," + (txtCV5Decimals.Text == string.Empty ? "0" : txtCV5Decimals.Text) : (ddlCV5FType.SelectedItem.Text.ToLower().Contains("date") || ddlCV5FType.SelectedItem.Text.ToLower().Contains("yesno") ? string.Empty : ddlCV5Length.SelectedItem.Text));
                }
                //Pass empty values if IsOneRow attribute is set True
                else
                {
                    sycode.dataElmntValue1 = sycode.dataElmntValue2 = sycode.dataElmntValue3 = sycode.dataElmntValue4 = sycode.dataElmntValue5 = string.Empty;
                    sycode.isMandatoryValue1 = sycode.isMandatoryValue2 = sycode.isMandatoryValue3 = sycode.isMandatoryValue4 = sycode.isMandatoryValue5 = string.Empty;
                    sycode.dataElmntLenValue1 = sycode.dataElmntLenValue2 = sycode.dataElmntLenValue3 = sycode.dataElmntLenValue4 = sycode.dataElmntLenValue5 = string.Empty;
                }

                sycode.descr = string.Empty;
                sycode.descrLabel = string.Empty;
                sycode.isAutoLoad = "N";
                sycode.langCode = string.Empty;
                sycode.minaAccess = "0";
                sycode.orgId = Session["OrgID"].ToString();
                sycode.systemDef = "N";
                if (Session["IsSyCodeUpdate"] != null)
                    retStr = xms.addCodeTypes(sycode, 1);
                else
                    retStr = xms.addCodeTypes(sycode, 0);
            }
            if (retStr.ToLower().Contains("succes") || typesUpdFlg == 0)
            {
                if (labelsUpdFlg == 1)
                {
                    SyTextLangVO syText = new SyTextLangVO();
                    syText.addedBy = string.Empty;
                    syText.addedOn = string.Empty;
                    syText.codeId = txtCCCodeID.Text.ToUpper();
                    syText.codeId1 = "-";
                    syText.codeId2 = "--";
                    syText.codeKey = string.Empty;
                    syText.codeLabel = txtCodeKeyLabel.Text;
                    syText.codeLabel1 = txtCV1Label.Text;
                    syText.codeLabel2 = txtCV2Label.Text;
                    syText.codeLabel3 = txtCV3Label.Text;
                    syText.codeLabel4 = txtCV4Label.Text;
                    syText.codeLabel5 = txtCV5Label.Text;
                    syText.codeType = "COD";
                    syText.codeValue1 = string.Empty;
                    syText.codeValue2 = string.Empty;
                    syText.codeValue3 = string.Empty;
                    syText.codeValue4 = string.Empty;
                    syText.codeValue5 = string.Empty;
                    syText.compCode = rblOrgLevel.SelectedValue == "1" ? "All" : string.Empty;
                    syText.descr = txtCCDescription.Text;
                    syText.description = string.Empty;
                    syText.descrLabel = txtDescLabel.Text;
                    syText.langCode = "ENG";
                    syText.modifiedBy = string.Empty;
                    syText.modifiedOn = string.Empty;
                    syText.orgId = Session["OrgID"].ToString();
                    if (Session["IsSyCodeUpdate"] != null)
                        retStr = xms.addCodeLabels(syText, 1);
                    else
                        retStr = xms.addCodeLabels(syText, 0);
                }
            }
            if (retStr.ToLower().Contains("succes") || labelsUpdFlg == 0 || typesUpdFlg == 0)
            {
                if (valuesUpdFlg == 1)
                {
                    CodeValueVO codeValue = new CodeValueVO();
                    codeValue.addedBy = Session["UserID"].ToString();
                    codeValue.addedOn = DateTime.Now.ToShortDateString();
                    codeValue.codeId = txtCCCodeID.Text.ToUpper();
                    codeValue.codeKey = string.Empty;
                    codeValue.codeValue1 = string.Empty;
                    codeValue.codeValue2 = string.Empty;
                    codeValue.codeValue3 = string.Empty;
                    codeValue.codeValue4 = string.Empty;
                    codeValue.codeValue5 = string.Empty;
                    codeValue.compCode = rblOrgLevel.SelectedValue == "1" ? "All" : string.Empty;
                    codeValue.description = string.Empty;
                    codeValue.modifiedBy = Session["UserID"].ToString();
                    codeValue.modifiedOn = DateTime.Now.ToShortDateString();
                    codeValue.orgId = Session["OrgID"].ToString();
                    if (Session["IsSyCodeUpdate"] != null)
                        retStr = xms.addCodeValues(codeValue, 5);
                    else
                        retStr = xms.addCodeValues(codeValue, 0);
                }
            }
            if (retStr.ToLower().Contains("succes"))
            {
                dvErrCreateCode.Style["color"] = "Green";
                Session.Remove("dsSyCodes");
                SortgvCodeAlloc();
                Session.Remove("dsEditCode");
                BindEditCodeGrid();
                lblCodeDescr.Text = txtCCDescription.Text;
                EnableDateFields();
                Session["IsSyCodeUpdate"] = "Y";
            }
            else
                dvErrCreateCode.Style["color"] = "Red";
            dvErrCreateCode.InnerHtml = retStr;
        }
        else
        {
            dvErrCreateCode.Style["color"] = "Red";
            dvErrCreateCode.InnerHtml = "No changes to update!";
        }
        if (Session["IsSyCodeUpdate"] != null)
            popDisplayCode.Show();
        popCreateCode.Show();
    }

    protected void ChangeLengths(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Length");
        int x = 0;
        if (ddl.SelectedItem.Text.ToLower().Contains("varchar"))
            x = 50;
        else if (ddl.SelectedItem.Text.ToLower().Contains("num"))
            x = 10;
        for (int i = 1; i <= x; i++)
        {
            dr = dt.NewRow();
            dr["Length"] = i;
            dt.Rows.Add(dr);
        }

        if (ddl.ID.ToLower().Contains("ddlcodekey"))
            DisplayFields(txtCodeKeyDecimals, ddlCodeKeyLength, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddldesc"))
            DisplayFields(txtDescDecimals, ddlDescLength, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddlcv1"))
            DisplayFields(txtCV1Decimals, ddlCV1Length, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddlcv2"))
            DisplayFields(txtCV2Decimals, ddlCV2Length, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddlcv3"))
            DisplayFields(txtCV3Decimals, ddlCV3Length, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddlcv4"))
            DisplayFields(txtCV4Decimals, ddlCV4Length, ddl, dt);
        else if (ddl.ID.ToLower().Contains("ddlcv5"))
            DisplayFields(txtCV5Decimals, ddlCV5Length, ddl, dt);

        if (Session["IsSyCodeUpdate"] != null)
            popDisplayCode.Show();
        popCreateCode.Show();
        ddl.Focus();
    }

    protected void btnCCClose_Click(object sender, EventArgs e)
    {
        if (lblHCreateCode.Text.ToLower().Contains("edit"))
        {
            popCreateCode.Hide();
            popDisplayCode.Show();
        }
        else
            popCreateCode.Hide();
    }

    #endregion

    #region Delete Confirmation

    protected void DeleteCode(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        CodeValueVO codeValue = new CodeValueVO();
        codeValue.addedBy = Session["UserID"].ToString();
        codeValue.addedOn = DateTime.Now.ToShortDateString();
        codeValue.codeId = lblCodeID.Text;
        codeValue.codeKey = hdnCodeKey.Value;
        codeValue.codeValue1 = string.Empty;
        codeValue.codeValue2 = string.Empty;
        codeValue.codeValue3 = string.Empty;
        codeValue.codeValue4 = string.Empty;
        codeValue.codeValue5 = string.Empty;
        codeValue.compCode = lblCompCode.Text;
        codeValue.description = "Desc";
        codeValue.modifiedBy = Session["UserID"].ToString();
        codeValue.modifiedOn = DateTime.Now.ToShortDateString();
        codeValue.orgId = Session["OrgID"].ToString();
        retStr = xms.addCodeValues(codeValue, 4);

        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("dsEditCode");
            BindEditCodeGrid();
        }
        popDisplayCode.Show();
        popAlert.Hide();
    }

    #endregion

    #region AssignAPRole

    protected void RedirectToUserCreation(object sender, EventArgs e)
    {
        SaveLkpData();
        popAssignRole.Hide();
        Response.Redirect("../Admin/CreateUser.aspx");
    }

    protected void AssignAPRole(object sender, EventArgs e)
    {
        SaveLkpData();
        //AssignRole();
    }

    private void AssignRole()
    {
        string retStr = string.Empty;
        retStr = xms.addAPForApprFlag(Convert.ToInt32(ddlARUsers.SelectedValue));
        if (retStr.ToLower().Contains("succes"))
            dvErrAssignRole.Style["color"] = "Green";
        else
            dvErrAssignRole.Style["color"] = "Red";
        dvErrAssignRole.InnerHtml = retStr;
    }

    #endregion

    #region Input Field Operations

    private void ClearCreateCodefields()
    {
        txtCCCodeID.Text = txtCCDescription.Text = txtCodeKeyLabel.Text = txtCodeKeyDecimals.Text = txtDescLabel.Text =
            txtDescDecimals.Text = txtCV1Label.Text = txtCV1Decimals.Text = txtCV2Label.Text =
                    txtCV2Decimals.Text = txtCV3Label.Text = txtCV3Decimals.Text = txtCV4Label.Text = txtCV4Decimals.Text =
                            txtCV5Label.Text = txtCV5Decimals.Text = string.Empty;
        ddlDescFType.SelectedValue = ddlCV1FType.SelectedValue = ddlCV2FType.SelectedValue = ddlCV3FType.SelectedValue = ddlCV4FType.SelectedValue =
            ddlCV5FType.SelectedValue = ddlCodeKeyFType.SelectedValue = "Varchar2";
        CreateLengthFields();
        ddlCodeKeyLength.SelectedValue = ddlDescLength.SelectedValue = ddlCV1Length.SelectedValue = ddlCV2Length.SelectedValue = ddlCV3Length.SelectedValue =
            ddlCV4Length.SelectedValue = ddlCV5Length.SelectedValue = "50";
        chkCV1Mnd.Checked = chkCV2Mnd.Checked = chkCV3Mnd.Checked = chkCV4Mnd.Checked = chkCV5Mnd.Checked = false;
        rblOrgLevel.ClearSelection();
        txtCCCodeID.Enabled = true;
        chkIsDeletable.Checked = false;
        chkIsOneRow.Checked = false;
        EnableCreateCodeFields();
    }

    private void EnableCreateCodeFields()
    {
        txtCCDescription.Enabled = true;
        rblOrgLevel.Enabled = true;
        chkIsDeletable.Enabled = chkIsOneRow.Enabled = txtCodeKeyLabel.Enabled = ddlCodeKeyFType.Enabled = txtDescLabel.Enabled = ddlDescFType.Enabled = true;
        ddlCodeKeyLength.Enabled = ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCodeKeyDecimals.Enabled = ddlCodeKeyFType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlDescLength.Enabled = ddlDescFType.SelectedItem.Text.ToLower().Contains("numeric") || ddlDescFType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtDescDecimals.Enabled = ddlDescFType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlCV1Length.Enabled = ddlCV1FType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCV1FType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCV1Decimals.Enabled = ddlCV1FType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlCV2Length.Enabled = ddlCV2FType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCV2FType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCV2Decimals.Enabled = ddlCV2FType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlCV3Length.Enabled = ddlCV3FType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCV3FType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCV3Decimals.Enabled = ddlCV3FType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlCV4Length.Enabled = ddlCV4FType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCV4FType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCV4Decimals.Enabled = ddlCV4FType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
        ddlCV5Length.Enabled = ddlCV5FType.SelectedItem.Text.ToLower().Contains("numeric") || ddlCV5FType.SelectedItem.Text.ToLower().Contains("varchar") ? true : false;
        txtCV5Decimals.Enabled = ddlCV5FType.SelectedItem.Text.ToLower().Contains("numeric") ? true : false;
    }

    private void CreateLengthFields()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Length");
        for (int i = 1; i <= 50; i++)
        {
            dr = dt.NewRow();
            dr["Length"] = i;
            dt.Rows.Add(dr);
        }

        ddlCodeKeyLength.DataSource = ddlDescLength.DataSource = ddlCV1Length.DataSource = ddlCV2Length.DataSource = ddlCV3Length.DataSource =
            ddlCV4Length.DataSource = ddlCV5Length.DataSource = dt;
        ddlCodeKeyLength.DataBind();
        ddlDescLength.DataBind();
        ddlCV1Length.DataBind();
        ddlCV2Length.DataBind();
        ddlCV3Length.DataBind();
        ddlCV4Length.DataBind();
        ddlCV5Length.DataBind();
    }

    private void DisableFieldsOnOneRow(bool check)
    {
        txtCV1Label.Enabled = txtCV2Label.Enabled = txtCV3Label.Enabled = txtCV4Label.Enabled = txtCV5Label.Enabled =
            ddlCV1FType.Enabled = ddlCV2FType.Enabled = ddlCV3FType.Enabled = ddlCV4FType.Enabled = ddlCV5FType.Enabled =
            ddlCV1Length.Enabled = ddlCV2Length.Enabled = ddlCV3Length.Enabled = ddlCV4Length.Enabled = ddlCV5Length.Enabled =
            txtCV1Decimals.Enabled = txtCV2Decimals.Enabled = txtCV3Decimals.Enabled = txtCV4Decimals.Enabled = txtCV5Decimals.Enabled =
            chkCV1Mnd.Enabled = chkCV2Mnd.Enabled = chkCV3Mnd.Enabled = chkCV4Mnd.Enabled = chkCV5Mnd.Enabled = check;
    }

    private void DisableFieldsOnSysDef(bool check)
    {
        txtCCDescription.Enabled = check;
        rblOrgLevel.Enabled = check;
        chkIsDeletable.Enabled = check;
        chkIsOneRow.Enabled = check;
        txtCodeKeyLabel.Enabled = check;
        txtCodeKeyDecimals.Enabled = check;
        ddlCodeKeyFType.Enabled = check;
        ddlCodeKeyLength.Enabled = check;
        txtDescLabel.Enabled = check;
        txtDescDecimals.Enabled = check;
        ddlDescFType.Enabled = check;
        ddlDescLength.Enabled = check;
        DisableFieldsOnOneRow(check);
    }

    private void DisableFieldsByCodevalueCount(bool check)
    {
        ddlDescFType.Enabled = ddlCodeKeyFType.Enabled = ddlCV1FType.Enabled = ddlCV2FType.Enabled = ddlCV3FType.Enabled = ddlCV4FType.Enabled = ddlCV5FType.Enabled = check;
    }

    private void DisplayFields(TextBox txtDec, DropDownList ddlLen, DropDownList ddlFT, DataTable dt)
    {
        ddlLen.DataSource = dt;
        ddlLen.DataBind();
        if (ddlFT.SelectedItem.Text.ToLower().Contains("varchar2"))
        {
            ddlLen.Enabled = true;
            txtDec.Enabled = false;
            ddlLen.SelectedValue = "50";
            txtDec.Text = string.Empty;
        }
        else if (ddlFT.SelectedItem.Text.ToLower().Contains("numeric"))
        {
            ddlLen.Enabled = true;
            txtDec.Enabled = true;
        }
        else
        {
            ddlLen.Enabled = false;
            txtDec.Enabled = false;
            txtDec.Text = string.Empty;
            ddlLen.Items.Clear();
        }
    }

    #endregion

    #region JobStatus

    protected void btnJobStatus_Click(object sender, EventArgs e)
    {
        Session.Remove("JobStatus");
        LoadJobDetails();
    }

    private void LoadJobDetails()
    {
        DataTable dt = GetJobDetails();

        DataTable dtJobs = dt.DefaultView.ToTable(true, "JobName");
        ddlJobName.DataSource = dtJobs;
        ddlJobName.DataTextField = "JobName";
        ddlJobName.DataValueField = "JobName";
        ddlJobName.DataBind();

        gvJobStatus.DataSource = dt;
        gvJobStatus.DataBind();
        popJobStatus.Show();
    }

    private DataTable GetJobDetails()
    {
        DataTable dt = new DataTable();
        if (Session["JobStatus"] == null)
        {
            string str = xms.getJobStatusDetails();
            List<JobStatusVO> lst = ser.Deserialize<List<JobStatusVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["JobStatus"] = dt;
        }
        else
            dt = (DataTable)Session["JobStatus"];
        return dt;
    }

    protected void ddlJobName_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = (DataTable)Session["JobStatus"];
        DataView dv = new DataView(dt, "JobName = '" + ddlJobName.SelectedValue + "'", "JobName", DataViewRowState.CurrentRows);
        gvJobStatus.DataSource = dv;
        gvJobStatus.DataBind();
        popJobStatus.Show();
    }

    protected void gvJobStatus_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

        }
        if (e.Row.RowType == DataControlRowType.Header)
        {

        }
    }

    protected void btnRefreshJobs_Click(object sender, EventArgs e)
    {
        Session.Remove("JobStatus");
        LoadJobDetails();
        popJobStatus.Show();
    }

    #endregion
}