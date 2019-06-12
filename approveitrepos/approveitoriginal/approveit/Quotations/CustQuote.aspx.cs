using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Web.UI.HtmlControls;
using System.Web.Services;

public partial class Quotations_CustQuote : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dt = new DataTable();
    DataTable dtQuote = new DataTable();
    bool _refreshExp = false;
    string addedBy, altProdAlwed, check, compCode, contactEmail, contactFax, contactName, contactPhone, contactType, detailsFlag, itemDesc, itemId, lineNo,
        masterFlag, modifiedBy, orgId, qty, quoteDesc, quoteId, quoteNum, reqDelvryDate, responseBy, shipLoc, type, uom, userId, vendBillId, vendorBillId,
        vendorFlag, vendorShipId;
    string appString = "###";

    #endregion

    #region public variables

    public int quoteID = 0;
    public string quoteStatus = string.Empty;

    #endregion

    #region ShowQuotes

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                btnGo.Attributes.Add("onclick", "return validateReceiptStoreGoClick('" + DateTime.Now.ToShortDateString() + "');");
                txtFrom.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
                txtTo.Text = System.DateTime.Now.AddDays(30).ToString("MM/dd/yyyy");
                Session.Remove("BillShipTos");
                Session.Remove("dtQuote");
                Session.Remove("QuoteList");
                LoadStatus();
                LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void LoadStatus()
    {
        DataTable dt = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dt, "CODEID = 'QUOTESTATUS'", "CodeKey", DataViewRowState.CurrentRows);
        ddlStatus.DataSource = dv;
        ddlStatus.DataTextField = "CodeKey";
        ddlStatus.DataValueField = "CodeKey";
        ddlStatus.DataBind();
        ddlStatus.Items.Insert(0, "All");
        ddlStatus.Items.FindByText("All").Value = "0";
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_CustQuote"] = lnk.ID;

        if (Session["SortDir_CustQuote"] == null || Session["SortDir_CustQuote"].ToString() == "Asc")
            Session["SortDir_CustQuote"] = "Desc";
        else
            Session["SortDir_CustQuote"] = "Asc";
        Session["SortExpr_CustQuote"] = e.CommandArgument;
        LoadData();
    }

    protected void LoadData()
    {
        if (Session["QuoteList"] == null)
        {
            string str = xms.getCustQuote(Convert.ToInt32(Session["UserID"]), txtFrom.Text, txtTo.Text);
            List<CustomerQuoteVO> lst = ser.Deserialize<List<CustomerQuoteVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["QuoteList"] = dt;
        }
        else
            dt = (DataTable)Session["QuoteList"];
        if ((Session["SortExpr_CustQuote"] != null) && Session["SortDir_CustQuote"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_CustQuote"].ToString() + " " + Session["SortDir_CustQuote"].ToString();
            gvQuoteList.DataSource = sortedView;
        }
        else
            gvQuoteList.DataSource = dt;
        gvQuoteList.DataBind();
        FillDropdowns(dt);
    }

    protected void FillDropdowns(DataTable dtQuote)
    {
        DataView dv;
        if (ddlStatus.SelectedValue != "0")
            dv = new DataView(dtQuote, "QuoteStatus = '" + ddlStatus.SelectedValue + "'", "QuoteStatus", DataViewRowState.CurrentRows);
        else
            dv = dtQuote.DefaultView;
        ddlQuoteID.DataSource = dv;
        ddlQuoteID.DataTextField = "QuoteDescription";
        ddlQuoteID.DataValueField = "QuoteId";
        ddlQuoteID.DataBind();
        gvQuoteList.DataSource = dv;
        gvQuoteList.DataBind();
        if (dv.ToTable().Rows.Count > 0)
        {
            ddlQuoteID.Items.Insert(0, "All");
            ddlQuoteID.Items.FindByText("All").Value = "0";
            gvQuoteList.EmptyDataText = "No Data to display";
        }
    }

    protected void FetchDataBetweenDates(object sender, EventArgs e)
    {
        Session.Remove("QuoteList");
        LoadData();
    }

    protected void GetSelectedQuotesByStatus(object sender, EventArgs e)
    {
        dtQuote = (DataTable)Session["QuoteList"];
        FillDropdowns(dtQuote);
    }

    protected void GetSelectedQuotesByQuoteID(object sender, EventArgs e)
    {
        DataView dv;
        dtQuote = (DataTable)Session["QuoteList"];
        if (ddlQuoteID.SelectedValue != "0")
            dv = new DataView(dtQuote, "QuoteID = " + ddlQuoteID.SelectedValue, "QuoteID", DataViewRowState.CurrentRows);
        else if (ddlStatus.SelectedValue != "0")
            dv = new DataView(dtQuote, "QuoteStatus = '" + ddlStatus.SelectedValue + "'", "QuoteStatus", DataViewRowState.CurrentRows);
        else
            dv = dtQuote.DefaultView;
        gvQuoteList.DataSource = dv;
        gvQuoteList.DataBind();
    }

    protected void Open(object sender, EventArgs e)
    {
        quoteID = 12345;
        popQuote.Show();
    }

    protected void gvQuoteList_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //e.Row.Cells[0].Style["text-align"] = "right";
            //e.Row.Cells[1].Style["text-align"] = "left";
            //e.Row.Cells[2].Style["text-align"] = "left";
            //e.Row.Cells[3].Style["text-align"] = "left";
            //e.Row.Cells[4].Style["text-align"] = "left";
            //e.Row.Cells[5].Style["text-align"] = "left";
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_CustQuote"] != null && Session["Control_CustQuote"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_CustQuote"].ToString());
                if (Session["SortDir_CustQuote"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("BillShipTos");
        Session.Remove("dtQuote");
        Session.Remove("QuoteList");
        Session.Remove("VendContacts");
        LoadData();
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

    #region ManageQuote

    protected void PlaceNewQuote(object sender, EventArgs e)
    {
        btnAddLine.Attributes.Add("onclick", "javascript:return validateCustQuoteHeader();");
        btnSave.Attributes.Add("onclick", "javascript:return validateCustQuoteHeader();");
        txtContPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtContPhone', 'dvMsg');");
        ClearHeaderFields();
        hdnIsEdit.Value = "N";
        hdnCurrDate.Value = DateTime.Now.ToShortDateString();
        GetCompCodes();
        Session.Remove("dtQuote");
        gvQuoteDetails.DataBind();
        btnSave.Visible = false;
        btnSubmit.Visible = false;
        dvResponse.Style["display"] = "none";
        lblQuoteID.Text = GenerateQuoteID();
        popQuote.Show();
    }

    protected void Edit(object sender, EventArgs e)
    {
        btnAddLine.Attributes.Add("onclick", "javascript:return validateCustQuoteHeader();");
        txtContPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtContPhone', 'dvMsg');");
        ClearHeaderFields();
        hdnIsEdit.Value = "Y";
        hdnCurrDate.Value = DateTime.Now.ToShortDateString();
        GetCompCodes();

        //Get Selected row details
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkQuoteID = (LinkButton)row.FindControl("lnkQuoteID");
        dtQuote = (DataTable)Session["QuoteList"];
        DataView dvQuote = new DataView(dtQuote, "quoteId = " + lnkQuoteID.Text, "quoteId", DataViewRowState.CurrentRows);
        //Get Header data based on selected QuoteID
        ddlCompCode.SelectedValue = dvQuote.ToTable().Rows[0]["compCode"].ToString();
        txtShipLoc.Text = dvQuote.ToTable().Rows[0]["ShipLocation"].ToString();
        ddlQuoteStatus.SelectedValue = dvQuote.ToTable().Rows[0]["quoteStatus"].ToString();
        lblQuoteID.Text = dvQuote.ToTable().Rows[0]["quoteId"].ToString();
        txtQuoteNum.Text = dvQuote.ToTable().Rows[0]["quoteNum"].ToString();
        txtQuoteDesc.Text = dvQuote.ToTable().Rows[0]["quoteDesc"].ToString();
        txtRespBy.Text = dvQuote.ToTable().Rows[0]["responseBy"].ToString();
        txtContName.Text = dvQuote.ToTable().Rows[0]["contactName"].ToString();
        ddlContType.SelectedValue = dvQuote.ToTable().Rows[0]["contactType"].ToString();
        txtContPhone.Text = dvQuote.ToTable().Rows[0]["contactPhone"].ToString();
        txtEmail.Text = dvQuote.ToTable().Rows[0]["contactEmail"].ToString();
        txtContFax.Text = dvQuote.ToTable().Rows[0]["contactFax"].ToString();
        ShowQuoteResponse();

        //Get Details data based on selected QuoteID
        string str = xms.getCustQuoteDetails(ut.NullSafeInteger(lnkQuoteID.Text), Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue);
        List<CustomerQuoteVO> lst = ser.Deserialize<List<CustomerQuoteVO>>(str);
        DataTable dtQuoteDt = Utility.ConvertToDataTable(lst);
        gvQuoteDetails.DataSource = dtQuoteDt;
        gvQuoteDetails.DataBind();
        Session["dtQuote"] = dtQuoteDt;
        SetPreviousData(dtQuoteDt);

        //dvResponse.Style["display"] = "none";
        if (gvQuoteDetails.Rows.Count > 0)
        {
            btnSubmit.Visible = true;
            btnSave.Visible = true;
        }
        else
        {
            btnSubmit.Visible = false;
            btnSave.Visible = false;
        }
        popQuote.Show();
    }

    private void ShowQuoteResponse()
    {
        //int r = 75;
        //dvRespPic.Style["width"] = r + "%";
        //dvResponse.Style["display"] = "block";
        //dvRespPic.Attributes.Add("title", "Quote Response is " + r + "%");
    }

    protected void LoadERUsers()
    {
        DataSet dsUser = new DataSet();
        if (Session["Users"] == null)
        {
            var usersList = xms.getUsersList(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue);
            List<UserVO> users = ser.Deserialize<List<UserVO>>(usersList);
            dsUser.Tables.Add(Utility.ConvertToDataTable(users));
            Session["Users"] = dsUser;
        }
        else
            dsUser = (DataSet)Session["Users"];
    }

    protected string GenerateQuoteID()
    {
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "QUOTEID");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        dt = Utility.ConvertToDataTable(lst);
        return dt.Rows[0]["CodeValue1"].ToString();
    }

    protected void GetCompCodes()
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
        DataView dv = new DataView(dsCompCodes.Tables[0], "CompCode = '" + ddlCompCode.SelectedValue + "'", "CompCode", DataViewRowState.CurrentRows);
        txtShipLoc.Text = dv.ToTable().Rows[0]["City"].ToString();
        if (Session["GAdmin"] == null)
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    protected void AddNewLine(object sender, EventArgs e)
    {
        //Add columns if not already exist
        if (Session["dtQuote"] == null)
            AddColumns();
        dtQuote = (DataTable)Session["dtQuote"];
        //Capture grid data to datatable
        SetData();

        //Add new empty row to datatable
        DataRow dr = dtQuote.NewRow();
        dtQuote.Rows.Add(AddEmptyRow(dr));
        dtQuote.AcceptChanges();
        //Bind the datatable to the gridview
        gvQuoteDetails.DataSource = dtQuote;
        gvQuoteDetails.DataBind();

        //Set previous grid data
        SetPreviousData(dtQuote);
        btnSubmit.Visible = true;
        btnSave.Visible = true;
        GenerateLineNum();
        popQuote.Show();
    }

    protected void GenerateLineNum()
    {
        int num = 1;
        foreach (GridViewRow row in gvQuoteDetails.Rows)
        {
            Label lblLineNum = (Label)row.FindControl("lblLineNum");
            lblLineNum.Text = num.ToString();
            num++;
        }
    }

    protected void SetData()
    {
        dtQuote = (DataTable)Session["dtQuote"];
        if (dtQuote.Rows.Count > 0)
        {
            for (int i = 0; i < dtQuote.Rows.Count; i++)
            {
                Label lblLineNum = (Label)gvQuoteDetails.Rows[i].FindControl("lblLineNum");
                DropDownList ddlItemSpec = (DropDownList)gvQuoteDetails.Rows[i].FindControl("ddlItemSpec");
                TextBox txtItemDesc = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtItemDesc");
                TextBox txtQty = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtQty");
                TextBox txtUnitOfMsr = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtUnitOfMsr");
                TextBox txtRDD = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtRDD");
                CheckBox chkAltProd = (CheckBox)gvQuoteDetails.Rows[i].FindControl("chkAltProd");

                dtQuote.Rows[i]["orgId"] = ut.NullSafeInteger(Session["OrgID"]);
                dtQuote.Rows[i]["compCode"] = ddlCompCode.SelectedValue;
                dtQuote.Rows[i]["lineNo"] = ut.NullSafeInteger(lblLineNum.Text);
                dtQuote.Rows[i]["itemId"] = ddlItemSpec.SelectedValue;
                dtQuote.Rows[i]["itemDesc"] = txtItemDesc.Text;
                dtQuote.Rows[i]["qty"] = ut.NullSafeDouble(txtQty.Text);
                dtQuote.Rows[i]["uom"] = txtUnitOfMsr.Text;
                dtQuote.Rows[i]["reqDelvryDate"] = txtRDD.Text;
                dtQuote.Rows[i]["altProductAlwed"] = chkAltProd.Checked;
            }
            Session["dtQuote"] = dtQuote;
        }
    }

    protected void BindClassifications(DropDownList ddl)
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();
        if (Session["ItemSpecList"] == null)
        {
            string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, Session["DepartmentCode"].ToString(), 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["ItemSpecList"] = dt;
        }
        else
            dt = (DataTable)Session["ItemSpecList"];
        DataView dtview = new DataView(dt);
        dtview.Sort = "expItem ASC";
        dtv = dtview.ToTable();
        Session["dtExpItem"] = dtv;
        ddl.DataSource = dtv.DefaultView.ToTable(true, "expItem");
        ddl.DataTextField = "expItem";
        ddl.DataValueField = "expItem";
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
    }

    protected DataRow AddEmptyRow(DataRow dr)
    {
        dr["compCode"] = dr["itemId"] = dr["itemDesc"] = dr["uom"] = dr["reqDelvryDate"] = dr["altProductAlwed"] = string.Empty;
        dr["orgId"] = dr["lineNo"] = dr["qty"] = 0;
        return dr;
    }

    protected void AddColumns()
    {
        dtQuote.Columns.Add("orgId");
        dtQuote.Columns.Add("compCode");
        dtQuote.Columns.Add("lineNo");
        dtQuote.Columns.Add("itemId");
        dtQuote.Columns.Add("itemDesc");
        dtQuote.Columns.Add("qty");
        dtQuote.Columns.Add("uom");
        dtQuote.Columns.Add("reqDelvryDate");
        dtQuote.Columns.Add("altProductAlwed");
        Session["dtQuote"] = dtQuote;
    }

    protected void SetPreviousData(DataTable dtQuote)
    {
        if (dtQuote.Rows.Count > 0)
        {
            for (int i = 0; i < dtQuote.Rows.Count; i++)
            {
                Label lblLineNum = (Label)gvQuoteDetails.Rows[i].FindControl("lblLineNum");
                DropDownList ddlItemSpec = (DropDownList)gvQuoteDetails.Rows[i].FindControl("ddlItemSpec");
                TextBox txtItemDesc = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtItemDesc");
                TextBox txtQty = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtQty");
                TextBox txtUnitOfMsr = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtUnitOfMsr");
                TextBox txtRDD = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtRDD");
                CheckBox chkAltProd = (CheckBox)gvQuoteDetails.Rows[i].FindControl("chkAltProd");

                //Load Item Spec
                BindClassifications(ddlItemSpec);
                lblLineNum.Text = dtQuote.Rows[i]["lineNo"].ToString();
                ddlItemSpec.SelectedValue = dtQuote.Rows[i]["itemId"].ToString();
                txtItemDesc.Text = dtQuote.Rows[i]["itemDesc"].ToString();
                txtQty.Text = dtQuote.Rows[i]["qty"].ToString();
                txtUnitOfMsr.Text = dtQuote.Rows[i]["uom"].ToString();
                txtRDD.Text = dtQuote.Rows[i]["reqDelvryDate"].ToString();
                chkAltProd.Checked = ut.NullSafeBoolean(dtQuote.Rows[i]["altProductAlwed"]);
            }
        }
    }

    protected void ResetQuote(object sender, EventArgs e)
    {

    }

    protected void SaveQuote(object sender, EventArgs e)
    {
        SendDetails(string.Empty, string.Empty, string.Empty, "1");
    }

    protected void SubmitQuote(object sender, EventArgs e)
    {
        btnVendSubmit.Visible = false;
        gvVendList.Visible = false;
        Session.Remove("VendList");
        DisplayVendMsg("Red", "Please provide vendor details to submit the quotation.");
        btnVendAdd.Visible = false;
        GetVendors();
        popQuote.Show();
        popVend.Show();
    }

    protected void CloseWindow(object sender, EventArgs e)
    {

    }

    protected void SendDetails(string vbID, string vsID, string vFlag, string tp)
    {
        int mFlag = 0;
        dtQuote = (DataTable)Session["dtQuote"];
        SetData();
        for (int i = 0; i < dtQuote.Rows.Count; i++)
        {
            addedBy += Session["UserID"].ToString() + appString;
            altProdAlwed += ut.NullSafeBoolean(dtQuote.Rows[i]["altProductAlwed"]) ? "Y" + appString : "N" + appString;
            check += Session["UserID"].ToString() + appString;
            compCode += ddlCompCode.SelectedValue + appString;
            contactEmail += txtEmail.Text + appString;
            contactFax += txtContFax.Text == string.Empty ? " " + appString : txtContFax.Text + appString;
            contactName += txtContName.Text + appString;
            contactPhone += txtContPhone.Text + appString;
            contactType += ddlContType.SelectedValue + appString;
            detailsFlag += 1 + appString;
            itemDesc += dtQuote.Rows[i]["itemDesc"].ToString() + appString;
            itemId += dtQuote.Rows[i]["itemId"].ToString() + appString;
            lineNo += dtQuote.Rows[i]["lineNo"].ToString() + appString;
            if (mFlag == 0)
            {
                masterFlag += "1" + appString;
                mFlag = 1;
            }
            else
                masterFlag += "0" + appString;
            modifiedBy += Session["UserID"].ToString() + appString;
            orgId += Session["OrgID"].ToString() + appString;
            qty += dtQuote.Rows[i]["qty"].ToString() + appString;
            quoteDesc += txtQuoteDesc.Text + appString;
            quoteId += lblQuoteID.Text + appString;
            quoteNum += txtQuoteNum.Text == string.Empty ? " " + appString : txtQuoteNum.Text + appString;
            quoteStatus += ddlQuoteStatus.SelectedValue + appString;
            reqDelvryDate += dtQuote.Rows[i]["reqDelvryDate"].ToString() + appString;
            responseBy += txtRespBy.Text + appString;
            shipLoc += txtShipLoc.Text + appString;
            type += tp + appString;
            uom += dtQuote.Rows[i]["uom"].ToString() + appString;
            userId += Session["UserID"].ToString() + appString;
            vendBillId += vbID == string.Empty ? "0" + appString : vbID + appString;
            vendorBillId += vbID == string.Empty ? "0" + appString : vbID + appString;
            vendorFlag += vFlag == string.Empty ? "0" + appString : vFlag + appString;
            vendorShipId += vsID == string.Empty ? "0" + appString : vsID + appString;
        }
        AddCustVendQuoteMulVO quote = new AddCustVendQuoteMulVO();
        quote.addedBy = addedBy.TrimEnd('#');
        quote.altProdAlwed = altProdAlwed.TrimEnd('#');
        quote.check = check.TrimEnd('#');
        quote.compCode = compCode.TrimEnd('#');
        quote.contactEmail = contactEmail.TrimEnd('#');
        quote.contactFax = contactFax.TrimEnd('#');
        quote.contactName = contactName.TrimEnd('#');
        quote.contactPhone = contactPhone.TrimEnd('#');
        quote.contactType = contactType.TrimEnd('#');
        quote.detailsFlag = detailsFlag.TrimEnd('#');
        quote.itemDesc = itemDesc.TrimEnd('#');
        quote.itemId = itemId.TrimEnd('#');
        quote.lineNo = lineNo.TrimEnd('#');
        quote.masterFlag = masterFlag.TrimEnd('#');
        quote.modifiedBy = modifiedBy.TrimEnd('#');
        quote.orgId = orgId.TrimEnd('#');
        quote.qty = qty.TrimEnd('#');
        quote.quoteDesc = quoteDesc.TrimEnd('#');
        quote.quoteId = quoteId.TrimEnd('#');
        quote.quoteNum = quoteNum.TrimEnd('#');
        quote.quoteStatus = quoteStatus.TrimEnd('#');
        quote.reqDelvryDate = reqDelvryDate.TrimEnd('#');
        quote.responseBy = responseBy.TrimEnd('#');
        quote.shipLoc = shipLoc.TrimEnd('#');
        quote.type = type.TrimEnd('#');
        quote.uom = uom.TrimEnd('#');
        quote.userId = userId.TrimEnd('#');
        quote.vendBillId = vendBillId.TrimEnd('#');
        quote.vendorBillId = vendorBillId.TrimEnd('#');
        quote.vendorFlag = vendorFlag.TrimEnd('#');
        quote.vendorShipId = vendorShipId.TrimEnd('#');
        string retStr = xms.addCustVendQuoteMul(quote);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            Session.Remove("QuoteList");
            LoadData();
        }
        else
            DisplayMsg("Red", retStr);
        popQuote.Show();
    }

    protected void DisplayMsg(string color, string msg)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    protected void DeleteDetail(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        dtQuote = (DataTable)Session["dtQuote"];
        //Fill datatble with gridview rows
        SetData();
        DataRow dr = dtQuote.Rows[row.RowIndex];
        //Remove selected row from datatable
        dtQuote.Rows.Remove(dr);
        dtQuote.AcceptChanges();
        Session["dtQuote"] = dtQuote;
        //Bind the datatable to the gridview
        gvQuoteDetails.DataSource = dtQuote;
        gvQuoteDetails.DataBind();
        //Set previous data to the gridview
        SetPreviousData(dtQuote);
        if (gvQuoteDetails.Rows.Count > 0)
        {
            btnSubmit.Visible = true;
            btnSave.Visible = true;
        }
        else
        {
            btnSubmit.Visible = false;
            btnSave.Visible = false;
        }
        GenerateLineNum();
        popQuote.Show();
    }

    protected void gvQuoteDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
        }
    }

    protected void ClearHeaderFields()
    {
        txtQuoteNum.Text = txtQuoteDesc.Text = txtRespBy.Text = txtContName.Text = txtContPhone.Text = txtEmail.Text = txtContFax.Text = dvMsg.InnerHtml = string.Empty;
        ddlContType.SelectedValue = "0";
    }

    protected void MakeFieldsAccessible(bool isEnabled)
    {
        //Make header fields in Customer Quote Enable/Disable
        ddlCompCode.Enabled = txtShipLoc.Enabled = ddlQuoteStatus.Enabled = txtQuoteNum.Enabled = txtQuoteDesc.Enabled = txtRespBy.Enabled = txtContName.Enabled =
            ddlContType.Enabled = txtContPhone.Enabled = txtEmail.Enabled = txtContFax.Enabled = isEnabled;

        //Make fields in details gridview of Customer Quote Enable/Disable
        foreach (GridViewRow row in gvQuoteDetails.Rows)
            foreach (Control c in row.Controls)
                if (c is TextBox || c is CheckBox || c is LinkButton)
                    ((TextBox)c).Enabled = isEnabled;
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("ItemSpecList");
        dtQuote = (DataTable)Session["dtQuote"];
        gvQuoteDetails.DataSource = dtQuote;
        gvQuoteDetails.DataBind();

        //Set previous grid data
        SetPreviousData(dtQuote);
        btnSubmit.Visible = true;
        btnSave.Visible = true;
        popQuote.Show();
    }

    #endregion

    #region Vendor Submit

    protected void GetVendors()
    {
        if (Session["BillShipTos"] == null)
        {
            string str = xms.getBillShiptToDetails(0, 2);
            List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["BillShipTos"] = dt;
        }
        else
            dt = (DataTable)Session["BillShipTos"];
        //DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlVendorBillTo.DataSource = dt;//dv.ToTable(true, "vendBillId", "bPreferName");
        ddlVendorBillTo.DataTextField = "bPreferName";
        ddlVendorBillTo.DataValueField = "vendBillId";
        ddlVendorBillTo.DataBind();
        ddlVendorBillTo.Items.Insert(0, "Please Select");
        ddlVendorBillTo.Items.FindByText("Please Select").Value = "0";
    }

    protected void FilterContactsByBillShip(DataTable dt)
    {
        DataView dv;
        dv = new DataView(dt, "VendorId like '%" + ddlVendorShipTo.SelectedValue + "%'", "VendorId", DataViewRowState.CurrentRows);

        if (dv.ToTable().Rows.Count == 0)
            dv = new DataView(dt, "VendorId like '%" + ddlVendorBillTo.SelectedValue + "%'", "VendorId", DataViewRowState.CurrentRows);

        if (dv.ToTable().Rows.Count == 0)
        {
            DisplayVendMsg("Red", "No contacts for this vendor.");
            ddlContact.Items.Clear();
        }
        else
        {
            DisplayVendMsg("", string.Empty);
            ddlContact.DataSource = dv;
            ddlContact.DataTextField = "contactPerferName";
            ddlContact.DataValueField = "contactId";
            ddlContact.DataBind();
            ddlContact.Items.Insert(0, "Please Select");
            ddlContact.Items.FindByText("Please Select").Value = "0";
        }
    }

    protected void LoadShipTosbyBilltos(object sender, EventArgs e)
    {
        if (ddlVendorBillTo.SelectedValue != "0")
        {
            dt = (DataTable)Session["BillShipTos"];
            DataView dv = new DataView(dt, "vendBillId = " + ddlVendorBillTo.SelectedValue, "vendBillId", DataViewRowState.CurrentRows);

            ddlVendorShipTo.DataSource = dv;
            ddlVendorShipTo.DataTextField = "sPreferName";
            ddlVendorShipTo.DataValueField = "vendShipId";
            ddlVendorShipTo.DataBind();
            ddlVendorShipTo.Items.Insert(0, "Please Select");
            ddlVendorShipTo.Items.FindByText("Please Select").Value = "0";
        }
        popQuote.Show();
        popVend.Show();
    }

    protected void LoadContactsByVendorID(object sender, EventArgs e)
    {
        if (Session["VendContacts"] == null)
        {
            string str = xms.getBSContacts(ut.NullSafeInteger(ddlVendorBillTo.SelectedValue), 2);
            List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["VendContacts"] = dt;
        }
        else
            dt = (DataTable)Session["VendContacts"];
        FilterContactsByBillShip(dt);
        popQuote.Show();
        popVend.Show();
    }

    protected void ddlContact_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlContact.SelectedIndex != 0)
            btnVendAdd.Visible = true;
        else
            btnVendAdd.Visible = false;
        popQuote.Show();
        popVend.Show();
    }

    protected void AddVendorToList(object sender, EventArgs e)
    {
        DataTable dtVend = new DataTable();
        DataRow dr;
        btnVendSubmit.Visible = true;
        gvVendList.Visible = true;
        //Add columns if not already exist
        if (Session["VendList"] == null)
        {
            dtVend.Columns.Add("VendorBillID");
            dtVend.Columns.Add("VendorBillTo");
            dtVend.Columns.Add("VendorShipID");
            dtVend.Columns.Add("VendorShipTo");
            dtVend.Columns.Add("Contact");
            dtVend.Columns.Add("ContactID");
        }
        else
            dtVend = (DataTable)Session["VendList"];

        //Capture fields to datatable
        dr = dtVend.NewRow();
        dr["VendorBillID"] = ddlVendorBillTo.SelectedValue;
        dr["VendorBillTo"] = ddlVendorBillTo.SelectedItem.Text;
        dr["VendorShipID"] = ddlVendorShipTo.SelectedValue;
        dr["VendorShipTo"] = ddlVendorShipTo.SelectedItem.Text;
        dr["Contact"] = ddlContact.SelectedItem.Text;
        dr["ContactID"] = ddlContact.SelectedValue;
        dtVend.Rows.Add(dr);
        dtVend.AcceptChanges();

        //Append row to gridview
        gvVendList.DataSource = dtVend;
        gvVendList.DataBind();
        Session["VendList"] = dtVend;
        //ddlVendorBillTo.Items.Remove(ddlVendorBillTo.SelectedValue);
        popQuote.Show();
        popVend.Show();
    }

    protected void RemoveVendorFromList(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        DataTable dtVend = (DataTable)Session["VendList"];
        DataRow dr = dtVend.Rows[row.RowIndex];
        dtVend.Rows.Remove(dr);
        dtVend.AcceptChanges();
        Session["VendList"] = dtVend;
        gvVendList.DataSource = dtVend;
        gvVendList.DataBind();
        if (gvVendList.Rows.Count == 0)
        {
            btnVendSubmit.Visible = false;
            gvVendList.Visible = false;
        }
        else
        {
            btnVendSubmit.Visible = true;
            gvVendList.Visible = true;
        }
        popQuote.Show();
        popVend.Show();
    }

    protected void SubmitQuoteToVendor(object sender, EventArgs e)
    {
        SendDetails(string.Empty, string.Empty, string.Empty, "1");
        SubmitToVendor();
    }

    protected void SubmitToVendor()
    {
        string contId = string.Empty, qtId = string.Empty, cCode = string.Empty, oId = string.Empty, tp = string.Empty, uId = string.Empty, vbId = string.Empty,
            vsId = string.Empty;
        DataTable dtVend = (DataTable)Session["VendList"];
        for (int i = 0; i < dtVend.Rows.Count; i++)
        {
            cCode += ddlCompCode.SelectedValue + appString;
            contId += dtVend.Rows[i]["ContactID"].ToString() + appString;
            oId += Session["OrgID"].ToString() + appString;
            qtId += lblQuoteID.Text + appString;
            tp += "1" + appString;
            uId += Session["UserID"].ToString() + appString;
            vbId += dtVend.Rows[i]["VendorBillID"].ToString() + appString;
            vsId += dtVend.Rows[i]["VendorShipID"].ToString() + appString;
        }
        CustqtoVendqMulVO cv = new CustqtoVendqMulVO();
        cv.compCode = cCode.TrimEnd('#');
        cv.contactId = contId.TrimEnd('#');
        cv.orgId = oId.TrimEnd('#');
        cv.quoteId = qtId.TrimEnd('#');
        cv.type = tp.TrimEnd('#');
        cv.userId = uId.TrimEnd('#');
        cv.vendBillId = vbId.TrimEnd('#');
        cv.vendShipId = vsId.TrimEnd('#');
        string retStr = xms.addCustQToVendQMul(cv);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            popQuote.Hide();
            popVend.Hide();
        }
        else
        {
            DisplayVendMsg("Red", retStr);
            popVend.Show();
        }
    }

    protected void ResetVendList(object sender, EventArgs e)
    {

    }

    protected void DisplayVendMsg(string color, string msg)
    {
        dvVendMsg.Style["color"] = color;
        dvVendMsg.InnerHtml = msg;
    }

    #endregion

    #region Supplier Response

    protected void LoadSupplierResponse(object sender, EventArgs e)
    {
        popVendResponse.Show();
    }

    protected void gvVendResp_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

        }
        if (e.Row.RowType == DataControlRowType.Header)
        {

        }
        if (e.Row.RowType == DataControlRowType.Footer)
        {

        }
    }

    #endregion
}