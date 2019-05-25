using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using ExpenseServiceBeta;
using System.Data;

public partial class Codes_BatchCreation : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;


    #endregion

    #region Current Batches

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
            {
                LoadData();

                //display import/export option based on qb sync
                if (!string.IsNullOrEmpty(Session["AccountBy"].ToString()))
                    btnExportBills.Visible = false;
                else
                    btnExportBills.Visible = true;
                //display import/export option based on qb sync
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        Session.Remove("SortExpr");
        Session.Remove("SortDir");
        Session.Remove("Control");
        Session.Remove("BatchData");
        lblOrgID.Text = Session["SOrgName"].ToString();
        BindCompCodes();
        BindBatchGrid();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control"] = lnk.ID;

        if (Session["SortDir"] == null || Session["SortDir"].ToString() == "Desc")
            Session["SortDir"] = "Asc";
        else
            Session["SortDir"] = "Desc";

        Session["SortExpr"] = e.CommandArgument;
        BindBatchGrid();
    }

    private void BindBatchGrid()
    {
        DataTable dtBatch = new DataTable();
        string str = string.Empty;
        if (Session["BatchData"] == null)
        {
            str = GetBatchData(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, 0, string.Empty, string.Empty, string.Empty, 3, string.Empty, string.Empty, string.Empty);
            List<BatchVO> lst = ser.Deserialize<List<BatchVO>>(str);
            dtBatch = Utility.ConvertToDataTable(lst);
            Session["BatchData"] = dtBatch;
        }
        else
            dtBatch = (DataTable)Session["BatchData"];

        if ((Session["SortExpr"] != null) && Session["SortDir"] != null)
        {
            DataView view = new DataView(dtBatch);
            view.Sort = Session["SortExpr"].ToString() + " " + Session["SortDir"].ToString();
            gvBatchDetails.DataSource = view;
        }
        else
            gvBatchDetails.DataSource = dtBatch;
        gvBatchDetails.DataBind();
    }

    private string GetBatchData(int orgID, string compCode, int batchNo, string batchDate, string fDate, string tDate, int type, string email, string vendor, string isExported)
    {
        BatchVO batch = new BatchVO();
        batch.accountCode = string.Empty;
        batch.amountWithOutTax = 0;
        batch.approvedBy = string.Empty;
        batch.batchDate = batchDate;
        batch.batchNo = batchNo;
        batch.budgetClassification = string.Empty;
        batch.compCode = compCode;
        batch.description = string.Empty;
        batch.email = email;
        batch.expLineNo = 0;
        batch.fromDate = fDate;
        batch.isExported = "";
        batch.orgId = orgID;
        batch.ourRefNo = string.Empty;
        batch.packageUnit = string.Empty;
        batch.poAmount = 0;
        batch.poDate = string.Empty;
        batch.preferredVendor = vendor;
        batch.quantity = 0;
        batch.requestid = 0;
        batch.submittedBy = string.Empty;
        batch.taxAmount = 0;
        batch.toDate = tDate;
        batch.totalAmount = 0;
        batch.unitPrice = 0;
        string str = xms.getBatchdetails(batch, type);
        return str;
    }

    private string GetOrgName()
    {
        var orgDetails = xms.getOrgDetails(Convert.ToInt32(Session["OrgID"]), Session["Email"].ToString());
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
        ddlCompCode.DataTextField = "CompCode";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    protected void gvBatchDetails_OnRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //align columns
            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[1].Style["text-align"] = "right";
            e.Row.Cells[2].Style["text-align"] = "right";
            e.Row.Cells[3].Style["text-align"] = "right";
            e.Row.Cells[4].Style["text-align"] = "right";
            e.Row.Cells[5].Style["text-align"] = "right";
            e.Row.Cells[6].Style["text-align"] = "right";
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir"] != null && Session["Control"] != null)
            {
                foreach (TableCell cell in e.Row.Cells)
                {
                    LinkButton sortLink = (LinkButton)cell.FindControl(Session["Control"].ToString());
                    if (Session["SortDir"].ToString() == "Asc")
                        sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
        }
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("BatchData");
        BindBatchGrid();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
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

    #region New Batch

    protected void AddNewBatch(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        ClearFields();
        dvErr.InnerHtml = string.Empty;
        lblHBatch.Text = "New Batch";
        btnGetBatch.Visible = true;
        dvByDates.Style["display"] = "block";
        dvByVend.Style["display"] = "none";
        dvShowBatchHead.Style["display"] = "none";
        btnGetBatch.Visible = true;
        btnExport.Visible = false;
        btnCreateBatch.Visible = false;
        lnkShowPrevBatch.Visible = false;

        //Generate BatchID from db
        GetBatchID();

        //bind vendors
        BindVendors();

        //Display Last batch's ToDate in FromDate field
        string frDate = string.Empty;
        DataTable dtBatch = (DataTable)Session["BatchData"];
        string expr = "batchNo = MAX(batchNo)";
        DataView vwBatch = new DataView(dtBatch, expr, "batchNo", DataViewRowState.CurrentRows);
        if (vwBatch.ToTable().Rows.Count > 0)
            frDate = vwBatch.ToTable().Rows[0]["toDate"].ToString();

        if (!string.IsNullOrEmpty(frDate))
            txtFromDate.Text = Convert.ToDateTime(frDate).ToShortDateString();

        //Fill Hours and Minutes dropdowns
        FillTime();

        //Get NonPosted Data
        string str = GetBatchData(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(txtBatchNo.Text), string.Empty, string.Empty, txtFromDate.Text == string.Empty ? DateTime.Now.ToShortDateString() : txtFromDate.Text, 5, Session["Email"].ToString(), string.Empty, string.Empty);
        List<BatchVO> lst = ser.Deserialize<List<BatchVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        gvBatchReqdetails.DataSource = dt;
        gvBatchReqdetails.DataBind();
        if (gvBatchReqdetails.Rows.Count > 0)
            CalculateTotals();
        else
            dvTotals.Style["display"] = "none";
        txtFromDate.ReadOnly = txtToDate.ReadOnly = false;
        dvBatchDetails.Style["display"] = "none";
        btnGetBatch.Attributes.Add("onclick", "javascript:return OnGetBatch();");
        btnSelectByDates.Attributes.Add("onclick", "javascript:return selectBatchLoadType('1');");
        //btnSelectByVend.Attributes.Add("onclick", "javascript:return selectBatchLoadType('2');");
        popShowBatch.Show();
    }

    private void BindVendors()
    {
        DataTable dt = new DataTable();
        if (Session["PreferredVendorList"] == null)
        {
            string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["PreferredVendorList"] = dt;
        }
        else
            dt = (DataTable)Session["PreferredVendorList"];
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlVendors.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlVendors.DataTextField = "PreferredVendor";
        ddlVendors.DataValueField = "PreferredVendor";
        ddlVendors.DataBind();
        ddlVendors.Items.Insert(0, "Please Select");
        ddlVendors.Items.FindByText("Please Select").Value = "0";
    }

    private void GetBatchID()
    {
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "ERBATCHID");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        txtBatchNo.Text = dt.Rows[0]["CodeValue1"].ToString();
    }

    protected void ShowBatchData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("../Login.aspx");
        dvErr.InnerHtml = string.Empty;
        lblHBatch.Text = "View Batch";
        dvByDates.Style["display"] = "none";
        dvByVend.Style["display"] = "none";
        dvShowBatchHead.Style["display"] = "block";
        dvBatchDetails.Style["display"] = "block";
        btnCreateBatch.Visible = false;
        btnExport.Visible = true;
        btnGetBatch.Visible = false;

        //get sletced row values of main gridview
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkBatchID = (LinkButton)row.FindControl("lnkBatchID");
        LinkButton lnkBatchDate = (LinkButton)row.FindControl("lnkBatchDate");
        LinkButton lnkFromDate = (LinkButton)row.FindControl("lnkFromDate");
        LinkButton lnkToDate = (LinkButton)row.FindControl("lnkToDate");

        //get selected batch details
        string str = GetBatchData(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(lnkBatchID.Text), string.Empty, lnkFromDate.Text, lnkToDate.Text, 2, string.Empty, string.Empty, string.Empty);
        List<BatchVO> lst = ser.Deserialize<List<BatchVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "invNo, invLineNum ASC";

        //display data in header
        txtBatchNo.Text = lnkBatchID.Text;
        txtBatchDate.Text = lnkBatchDate.Text;
        lblFromPostDate.Text = lnkFromDate.Text;
        lblToPostDate.Text = lnkToDate.Text;
        txtBatchDate.ReadOnly = txtFromDate.ReadOnly = txtToDate.ReadOnly = true;

        //bind details gridview
        gvBatchReqdetails.Visible = true;
        gvBatchReqdetails.DataSource = dt;
        gvBatchReqdetails.DataBind();
        Session["ExportBatch"] = dt;//session for exporting batch

        //display previous batch details
        //get previous batch number
        DataTable dtAllBatchData = (DataTable)Session["BatchData"];
        DataView dvAllBatchData = new DataView(dtAllBatchData, "batchNo < " + lnkBatchID.Text, "batchNo", DataViewRowState.CurrentRows);
        if (dvAllBatchData.ToTable().Rows.Count > 0)
        {
            int prevBatchNo = dvAllBatchData.ToTable().AsEnumerable().Max(r => r.Field<int>("batchNo"));
            DataView dvPrevBatchData = new DataView(dtAllBatchData, "batchNo = " + prevBatchNo, "batchNo", DataViewRowState.CurrentRows);

            if (dvPrevBatchData.ToTable().Rows.Count > 0)
            {
                //load previous batch details
                lblPrevBatchNum.Text = dvPrevBatchData.ToTable().Rows[0]["batchNo"].ToString();
                lblPrevBatchDate.Text = Convert.ToDateTime(dvPrevBatchData.ToTable().Rows[0]["batchDate"]).ToString();
                lblPrevFromPostDate.Text = Convert.ToDateTime(dvPrevBatchData.ToTable().Rows[0]["fromDate"]).ToString();
                lblPrevToPostDate.Text = Convert.ToDateTime(dvPrevBatchData.ToTable().Rows[0]["toDate"]).ToString();
                lnkShowPrevBatch.Visible = true;
            }
            else
                lnkShowPrevBatch.Visible = false;
        }
        else
            lnkShowPrevBatch.Visible = false;

        if (gvBatchReqdetails.Rows.Count > 0)
        {
            CalculateTotals();
            btnExport.Visible = true;
        }
        else
        {
            dvTotals.Style["display"] = "none";
            btnExport.Visible = false;
        }
        btnExport.Attributes.Add("onclick", "javascript:return batchExportInit();");
        btnConfExport.Attributes.Add("onclick", "javascript:return updateAndExportInit();");
        popShowBatch.Show();
    }

    protected void ShowBatchTemp(object sender, EventArgs e)
    {
        string fromDateTime = string.Empty;
        string toDateTime = string.Empty;
        string vendor = string.Empty;
        if (hdnSelectedType.Value.ToLower() == "date" || string.IsNullOrEmpty(hdnSelectedType.Value))
        {
            fromDateTime = txtFromDate.Text + " " + ddlFromHours.SelectedValue + ":" + ddlFromMin.SelectedValue;
            toDateTime = txtToDate.Text + " " + ddlToHours.SelectedValue + ":" + ddlToMin.SelectedValue;
        }
        else if (hdnSelectedType.Value.ToLower() == "vend")
            vendor = ddlVendors.SelectedValue;

        string str = GetBatchData(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, 0, string.Empty, fromDateTime, toDateTime, 1, Session["Email"].ToString(), vendor, string.Empty);
        List<BatchVO> lst = ser.Deserialize<List<BatchVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        gvBatchReqdetails.DataSource = dt;
        gvBatchReqdetails.DataBind();
        if (gvBatchReqdetails.Rows.Count > 0)
        {
            btnCreateBatch.Visible = true;
            CalculateTotals();
            //btnGetBatch.Visible = false;
        }
        else
        {
            btnCreateBatch.Visible = false;
            dvTotals.Style["display"] = "none";
            //btnGetBatch.Visible = true;
        }
        ShowFilterOptions();
        popShowBatch.Show();
    }

    private void ShowFilterOptions()
    {
        if (hdnSelectedType.Value == "date")
        {
            dvByDates.Style["display"] = "block";
            dvByVend.Style["display"] = "none";
        }
        else if (hdnSelectedType.Value == "vend")
        {
            dvByDates.Style["display"] = "none";
            dvByVend.Style["display"] = "block";
        }
    }

    protected void GetSelectedBatchData(object sender, CommandEventArgs e)
    {
        int arg = ut.NullSafeInteger(e.CommandArgument);
        string[] arr = (string[])Session["BatchArray"];
        string str = (arg == 1 ? arr[0] : (arg == 2 ? arr[1] : arr[2]));
        List<BatchVO> lst = ser.Deserialize<List<BatchVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        gvBatchReqdetails.Visible = true;
        gvBatchReqdetails.DataSource = dt;
        gvBatchReqdetails.DataBind();
        if (gvBatchReqdetails.Rows.Count > 0)
            CalculateTotals();
        else
            dvTotals.Style["display"] = "none";
        popShowBatch.Show();
    }

    protected void CreateBatch(object sender, EventArgs e)
    {
        if (txtFromDate.Text != string.Empty && txtToDate.Text != string.Empty)
            lblConfirmText.Text = "A new Batch will be created between " + txtFromDate.Text + " " + ddlFromHours.SelectedValue + ":" + ddlFromMin.SelectedValue + " and " +
                txtToDate.Text + " " + ddlToHours.SelectedValue + ":" + ddlToMin.SelectedValue + ". Click Ok to continue.";
        else
            lblConfirmText.Text = "A new Batch will be created with this data. Click Ok to continue.";
        btnYes.Visible = true;
        btnConfExport.Visible = false;
        popShowBatch.Show();
        popConfirmCreate.Show();
    }

    protected void ConfirmCreateBatch(object sender, EventArgs e)
    {
        string fromDateTime = string.Empty;
        string toDateTime = string.Empty;
        string vendor = string.Empty;
        if (dvByDates.Style["display"] == "block")
        {
            fromDateTime = txtFromDate.Text;
            toDateTime = txtToDate.Text;
        }
        else if (dvByDates.Style["display"] == "block")
            vendor = ddlVendors.SelectedValue;

        GetBatchData(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(txtBatchNo.Text), string.Empty, fromDateTime, toDateTime, 4, Session["Email"].ToString(), vendor, string.Empty);
        dvErr.Style["color"] = "Green";
        dvErr.InnerHtml = "Batch created successfully.";

        lblHBatch.Text = "View Batch";
        btnGetBatch.Visible = false;
        ddlFromMin.Visible = false;
        ddlFromHours.Visible = false;
        ddlToMin.Visible = false;
        ddlToHours.Visible = false;
        btnCreateBatch.Visible = false;
        btnExport.Visible = true;
        dvBatchDetails.Style["display"] = "block";
        Session.Remove("BatchData");
        BindBatchGrid();
        //popShowBatch.Show();
        popConfirmCreate.Hide();
    }

    private void CalculateTotals()
    {
        lblTotPOAmnt.Text = "Total PO Amount: &nbsp;&nbsp;";
        lblRowCount.Text = "No. of Records: &nbsp;&nbsp;";
        lblTotInvAmnt.Text = "Total Invoice Amount : &nbsp;&nbsp;";
        dvTotals.Style["display"] = "block";
        double totPOAmnt = 0;
        double totInvAmnt = 0;
        foreach (GridViewRow row in gvBatchReqdetails.Rows)
        {
            Label lblPOAmount = (Label)row.FindControl("lblPOAmount");
            Label lblInvAmount = (Label)row.FindControl("lblInvAmount");
            totPOAmnt += ut.NullSafeDouble(lblPOAmount.Text);
            totInvAmnt += ut.NullSafeDouble(lblInvAmount.Text);
        }
        lblTotPOAmnt.Text += totPOAmnt.ToString();
        lblTotInvAmnt.Text += totInvAmnt.ToString();
        lblRowCount.Text += gvBatchReqdetails.Rows.Count.ToString();
    }

    private void ClearFields()
    {
        txtFromDate.Text = string.Empty;
        txtToDate.Text = string.Empty;
        ddlFromHours.Items.Clear();
        ddlToHours.Items.Clear();
        ddlFromMin.Items.Clear();
        ddlToMin.Items.Clear();
    }

    private void FillTime()
    {
        for (int i = 0; i <= 23; i++)
        {
            ListItem list = new ListItem();
            list.Text = i > 9 ? i.ToString() : "0" + i;
            list.Value = i > 9 ? i.ToString() : "0" + i;
            ddlFromHours.Items.Add(list);
            ddlToHours.Items.Add(list);
        }

        for (int i = 0; i <= 59; i++)
        {
            ListItem list = new ListItem();
            list.Text = i > 9 ? i.ToString() : "0" + i;
            list.Value = i > 9 ? i.ToString() : "0" + i;
            ddlFromMin.Items.Add(list);
            ddlToMin.Items.Add(list);
        }
    }

    protected void gvBatchReqdetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //align columns
            e.Row.Cells[0].Style["text-align"] = "left";//CompanyID
            e.Row.Cells[1].Style["text-align"] = "left";//PropertyID
            e.Row.Cells[2].Style["text-align"] = "left";//Vendor#
            e.Row.Cells[3].Style["text-align"] = "left";//Vend Name
            e.Row.Cells[4].Style["text-align"] = "left";//Phone
            e.Row.Cells[5].Style["text-align"] = "left";//Email
            e.Row.Cells[6].Style["text-align"] = "left";//Addr1
            e.Row.Cells[7].Style["text-align"] = "left";//Addr2
            e.Row.Cells[8].Style["text-align"] = "left";//City
            e.Row.Cells[9].Style["text-align"] = "right";//Zip
            e.Row.Cells[10].Style["text-align"] = "left";//ContactName
            e.Row.Cells[11].Style["text-align"] = "right";//Invoice#
            e.Row.Cells[12].Style["text-align"] = "right";//Line Seq
            e.Row.Cells[13].Style["text-align"] = "right";//Line Amount
            e.Row.Cells[14].Style["text-align"] = "right";//Inv Date
            e.Row.Cells[15].Style["text-align"] = "right";//Post Date
            e.Row.Cells[16].Style["text-align"] = "right";//Inv Due Date
            e.Row.Cells[17].Style["text-align"] = "right";//Total Inv. Amount
            e.Row.Cells[18].Style["text-align"] = "left";//Account#
            e.Row.Cells[19].Style["text-align"] = "left";//Account Name
            e.Row.Cells[20].Style["text-align"] = "left";//Item Descr.
            e.Row.Cells[21].Style["text-align"] = "left";//PO#
            e.Row.Cells[22].Style["text-align"] = "right";//PO Line#
            e.Row.Cells[23].Style["text-align"] = "right";//PO Line Amount.
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
        }
    }

    #endregion

    #region Export Batch to Excel
    /// <summary>
    /// exporting batch to excel.
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    const string CONFEXPWARNING = "This batch is already exported. Are you sure you want to export again?";
    protected void ExportToExcel(object sender, EventArgs e)
    {
        DataTable dt = (DataTable)Session["BatchData"];
        DataView dv = new DataView(dt, "batchNo='" + txtBatchNo.Text + "'", "batchNo", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows[0]["isExported"].ToString().ToLower() == "y")
        {
            btnYes.Visible = false;
            btnConfExport.Visible = true;
            lblConfirmText.Text = CONFEXPWARNING;
            popShowBatch.Show();
            popConfirmCreate.Show();
        }
        else
        {
            GetBatchData(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(txtBatchNo.Text), txtBatchDate.Text, string.Empty, string.Empty, 6, string.Empty, string.Empty, "Y");
            Session.Remove("BatchData");
            BindBatchGrid();
            Response.Redirect("../DownloadFile.aspx?typ=4");
        }
    }

    /// <summary>
    /// confirming excel export if already done so
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void ConfirmExport(object sender, EventArgs e)
    {
        GetBatchData(ut.NullSafeInteger(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(txtBatchNo.Text), txtBatchDate.Text, string.Empty, string.Empty, 6, string.Empty, string.Empty, "Y");
        Session.Remove("BatchData");
        BindBatchGrid();
        popShowBatch.Show();
        popConfirmCreate.Hide();
        Response.Redirect("../DownloadFile.aspx?typ=4");
    }

    private void AssignAsyncTrigger(int type)
    {
        AsyncPostBackTrigger async = new AsyncPostBackTrigger();
        async.ControlID = "btnExport";
        if (type == 1)
            UpdatePanel1.Triggers.Add(async);
        else if (type == 0)
            UpdatePanel1.Triggers.Remove(async);
    }

    #endregion

    #region Export QB Bills

    protected void ExportQBBills(object sender, EventArgs e)
    {
        string strAPExp = xms.getRequestsForAPApproval(Convert.ToInt32(Session["OrgID"]), 4, Session["CompCode"].ToString(), 0);
        List<ApproveRequestVO> lstApExp = ser.Deserialize<List<ApproveRequestVO>>(strAPExp);
        DataTable dt = new DataTable();
        dt = Utility.ConvertToDataTable(lstApExp);

        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dt;

        BoundField dgc_Vendor = new BoundField();
        dgc_Vendor.DataField = "preferredVendor";
        dgc_Vendor.HeaderText = "Vendor";
        dgDgrid.Columns.Add(dgc_Vendor);

        BoundField dgc_TransactionDate = new BoundField();
        dgc_TransactionDate.DataField = "startDate";
        dgc_TransactionDate.HeaderText = "Transaction Date";
        dgDgrid.Columns.Add(dgc_TransactionDate);

        BoundField dgc_RefNumber = new BoundField();
        dgc_RefNumber.DataField = "requestId";
        dgc_RefNumber.HeaderText = "RefNumber";
        dgDgrid.Columns.Add(dgc_RefNumber);

        BoundField dgc_BillDue = new BoundField();
        dgc_BillDue.DataField = "";
        dgc_BillDue.HeaderText = "Bill Due";
        dgDgrid.Columns.Add(dgc_BillDue);

        BoundField dgc_Terms = new BoundField();
        dgc_Terms.DataField = "";
        dgc_Terms.HeaderText = "Terms";
        dgDgrid.Columns.Add(dgc_Terms);

        BoundField dgc_Memo = new BoundField();
        dgc_Memo.DataField = "";
        dgc_Memo.HeaderText = "Memo";
        dgDgrid.Columns.Add(dgc_Memo);

        BoundField dgc_AddressLine1 = new BoundField();
        dgc_AddressLine1.DataField = "";
        dgc_AddressLine1.HeaderText = "Address Line1";
        dgDgrid.Columns.Add(dgc_AddressLine1);

        BoundField dgc_AddressLine2 = new BoundField();
        dgc_AddressLine2.DataField = "";
        dgc_AddressLine2.HeaderText = "Address Line2";
        dgDgrid.Columns.Add(dgc_AddressLine2);

        BoundField dgc_AddressLine3 = new BoundField();
        dgc_AddressLine3.DataField = "";
        dgc_AddressLine3.HeaderText = "Address Line3";
        dgDgrid.Columns.Add(dgc_AddressLine3);

        BoundField dgc_AddressLine4 = new BoundField();
        dgc_AddressLine4.DataField = "";
        dgc_AddressLine4.HeaderText = "Address Line4";
        dgDgrid.Columns.Add(dgc_AddressLine4);

        BoundField dgc_AddressCity = new BoundField();
        dgc_AddressCity.DataField = "";
        dgc_AddressCity.HeaderText = "Address City";
        dgDgrid.Columns.Add(dgc_AddressCity);

        BoundField dgc_AddressState = new BoundField();
        dgc_AddressState.DataField = "";
        dgc_AddressState.HeaderText = "Address State";
        dgDgrid.Columns.Add(dgc_AddressState);

        BoundField dgc_AddressPostalCode = new BoundField();
        dgc_AddressPostalCode.DataField = "";
        dgc_AddressPostalCode.HeaderText = "Address PostalCode";
        dgDgrid.Columns.Add(dgc_AddressPostalCode);

        BoundField dgc_AddressCountry = new BoundField();
        dgc_AddressCountry.DataField = "";
        dgc_AddressCountry.HeaderText = "Address Country";
        dgDgrid.Columns.Add(dgc_AddressCountry);

        BoundField dgc_VendorAcctNo = new BoundField();
        dgc_VendorAcctNo.DataField = "";
        dgc_VendorAcctNo.HeaderText = "Vendor Acct No";
        dgDgrid.Columns.Add(dgc_VendorAcctNo);

        BoundField dgc_ExpensesAccount = new BoundField();
        dgc_ExpensesAccount.DataField = "expItem";
        dgc_ExpensesAccount.HeaderText = "Expenses Account";
        dgDgrid.Columns.Add(dgc_ExpensesAccount);

        BoundField dgc_ExpensesAmount = new BoundField();
        dgc_ExpensesAmount.DataField = "expItem";
        dgc_ExpensesAmount.HeaderText = "Expenses Amount";
        dgDgrid.Columns.Add(dgc_ExpensesAmount);

        BoundField dgc_ExpensesMemo = new BoundField();
        dgc_ExpensesMemo.DataField = "";
        dgc_ExpensesMemo.HeaderText = "Expenses Memo";
        dgDgrid.Columns.Add(dgc_ExpensesMemo);

        BoundField dgc_ExpensesClass = new BoundField();
        dgc_ExpensesClass.DataField = "expItem";
        dgc_ExpensesClass.HeaderText = "Expenses Class";
        dgDgrid.Columns.Add(dgc_ExpensesClass);

        BoundField dgc_ExpensesCustomer = new BoundField();
        dgc_Vendor.DataField = "";
        dgc_Vendor.HeaderText = "Expenses Customer";
        dgDgrid.Columns.Add(dgc_Vendor);

        BoundField dgc_ExpensesBillable = new BoundField();
        dgc_ExpensesBillable.DataField = "";
        dgc_ExpensesBillable.HeaderText = "Expenses Billable";
        dgDgrid.Columns.Add(dgc_ExpensesBillable);

        BoundField dgc_ItemsItem = new BoundField();
        dgc_ItemsItem.DataField = "";
        dgc_ItemsItem.HeaderText = "Items Item";
        dgDgrid.Columns.Add(dgc_ItemsItem);

        BoundField dgc_ItemsQty = new BoundField();
        dgc_ItemsQty.DataField = "";
        dgc_ItemsQty.HeaderText = "Items Qty";
        dgDgrid.Columns.Add(dgc_ItemsQty);

        BoundField dgc_ItemsDescription = new BoundField();
        dgc_ItemsDescription.DataField = "";
        dgc_ItemsDescription.HeaderText = "Items Description";
        dgDgrid.Columns.Add(dgc_ItemsDescription);

        BoundField dgc_ItemsCost = new BoundField();
        dgc_ItemsCost.DataField = "";
        dgc_ItemsCost.HeaderText = "Items Cost";
        dgDgrid.Columns.Add(dgc_ItemsCost);

        BoundField dgc_ItemsClass = new BoundField();
        dgc_ItemsClass.DataField = "";
        dgc_ItemsClass.HeaderText = "Items Class";
        dgDgrid.Columns.Add(dgc_ItemsClass);

        BoundField dgc_ItemsCustomer = new BoundField();
        dgc_ItemsCustomer.DataField = "";
        dgc_ItemsCustomer.HeaderText = "Items Customer";
        dgDgrid.Columns.Add(dgc_ItemsCustomer);

        BoundField dgc_ItemsBillable = new BoundField();
        dgc_ItemsBillable.DataField = "";
        dgc_ItemsBillable.HeaderText = "Items Billable";
        dgDgrid.Columns.Add(dgc_ItemsBillable);

        BoundField dgc_APAccount = new BoundField();
        dgc_APAccount.DataField = "";
        dgc_APAccount.HeaderText = "AP Account";
        dgDgrid.Columns.Add(dgc_APAccount);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();
        Session["gridExportBillsForQB"] = dgDgrid;
        Response.Redirect("../DownloadFile.aspx?typ=21");
    }

    protected void GetChecksForPaidBills(object sender, EventArgs e)
    {

    }

    #endregion
}