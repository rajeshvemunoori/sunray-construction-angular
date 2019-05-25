using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Drawing;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using AjaxControlToolkit;
using System.IO;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using Money = System.Double;
using Shares = System.Double;
using System.Data.OleDb;
using System.Drawing;
using System.Net.Mail;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html.simpleparser;

public partial class SearchResults : System.Web.UI.Page
{
    #region public variables Search

    public int reqId = 0;
    public int seqId = 0;
    public int eReqId = 0;
    public int reqCnt = 0;
    public int cnt = 0;
    public string cSymbol = string.Empty;
    public DataSet dsExpID = new DataSet();
    public DataSet dsCities = new DataSet();
    public DataSet dsAmounts = new DataSet();
    string status = string.Empty;
    string codeValue = string.Empty;
    string city = string.Empty;
    int statusId = 0;
    int pageNum = 1;
    float totalPrice = 0;
    double gTotal = 0;
    bool allReq = false;
    object pageCnt;
    Int32 page = 0;
    DataSet dsCnt = new DataSet();
    DateTime expenseDate = System.DateTime.Now;
    Utility ut = new Utility();
    DataSet dsSt = new DataSet();
    Mails mails = new Mails();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Encryption encrypt = new Encryption();

    #endregion

    #region public variables Edit Exp

    int id = 0;
    int doUpdate = 0;
    int statusCnt = 0;
    public string navfrom = string.Empty;
    public string expType = string.Empty;
    DataTable dt = new DataTable();
    DataRow dr;
    int expId = 0;
    int rblOnClose = 0;
    string newPath = ("ERTemp");
    string attachmentPath = ("Attachments");
    public string[] resultFileNames;
    string delExp = string.Empty;
    DataSet dsApEmail = new DataSet();
    int maxDays = 0;
    public double expTotal = 0, autoTotal = 0, grandTotal = 0, preExpTotal = 0;
    string str = string.Empty;

    string reqId1, expItem, expLineNo, expDate, citiesVstd, comments, orgId1, expenseType, jobCode, phaseCode, JCatCode, compCode, purpose, preAmount, currency,
                sts, stsId, managerId, startDate, payMode, preApproved, actualAmount, othercity, userId, preApproval, detailsFlag, masterFlag, autoFlag, agentName, bookedDate,
                fromCity, toCity, preferredVendor, itinararyNo, fromDate, toDate, accCode, amntSpent, apReview, codeId, codeVal, exp, lessNorm, mgrEmail, reimbursement, stateId, totalTrip;


    #endregion

    #region public variables Auto Exp

    public int autoid = 0;
    public double ppm;
    string delAuto = string.Empty;
    DataTable dt_Auto = new DataTable();

    #endregion

    #region Search Results

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
            {
                Response.Redirect("Logout.aspx");
            }
            else
            {
                if (!IsPostBack)
                {
                    Session.Remove("SortExpr");
                    Session.Remove("SortDir");
                    Session.Remove("dsSt");
                    SortGrid();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void gvResults_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            /***Display Automileage link if autodetails exist for the selected request***/

            Label lblAt = (Label)e.Row.FindControl("lblAt");
            Label lblReq = (Label)e.Row.FindControl("lblReq");

            /********/

            HiddenField hdStatus = (HiddenField)e.Row.FindControl("hdStatus");
            string status = hdStatus.Value;

            Label lblColor = (Label)e.Row.FindControl("lblColor");
            if (status == "Approved")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = "Approved";
            }
            else if (status == "AP Review")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/user_suit.png)");
                lblColor.ToolTip = "AP Review";
            }
            else if (status == "Rejected by Manager" || status == "Rejected by AP")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/delete.png)");
                lblColor.ToolTip = "Rejected";
            }
            else if (status == "Saved")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/disk.png)");
                lblColor.ToolTip = "Saved";
            }
            else
            {
                lblColor.Style.Add(" background-image", "url(images/icons/user_suit.png)");
                lblColor.ToolTip = "Manager Review";
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvResults_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvResults.PageIndex = e.NewPageIndex;
        SortGrid();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        if (Session["SortDir"] == null || Session["SortDir"].ToString() == "Desc")
        {
            Session["SortDir"] = "Asc";
        }
        else
        {
            Session["SortDir"] = "Desc";
        }
        Session["SortExpr"] = e.CommandArgument;
        SortGrid();
    }

    void SortGrid()
    {
        DataSet dsSt = new DataSet();
        DataSet ds = new DataSet();
        int uID = 0;

        if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            uID = Convert.ToInt32(Session["UserID_Mgr"]);
        else
            uID = Convert.ToInt32(Session["UserID"]);


        string key = encrypt.GenerateAPassKey("ExpenseReporting");

        string dcStr = encrypt.Decrypt(Request.QueryString["stxt"], key);

        if (dcStr.Contains(','))
        {
            string[] arr = dcStr.Split(',');
            for (int i = 0; i < arr.Length - 1; i++)
            {
                ds.Tables.Clear();
                var strExp = xms.getSearchResults(uID, "%" + arr[i] + "%");
                List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
                ds.Tables.Add(Utility.ConvertToDataTable(lstExp));
                dsSt.Merge(ds);
            }
        }
        else
        {
            var strExp = xms.getSearchResults(uID, "%" + dcStr + "%");
            List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
            dsSt.Tables.Add(Utility.ConvertToDataTable(lstExp));
        }
        Session["dsSr"] = dsSt;

        if ((Session["SortExpr"] != null) && Session["SortDir"] != null)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);
            sortedView.Sort = Session["SortExpr"].ToString() + " " + Session["SortDir"].ToString();
            gvResults.DataSource = sortedView;
        }
        else
            gvResults.DataSource = dsSt;

        gvResults.DataBind();
    }

    #endregion

    #region Edit Expense

    protected void Edit(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("ReqID");
        Session.Remove("popup");
        LoadEditData(sender);
    }

    void LoadEditData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        dvError.InnerHtml = string.Empty;
        //txtEditExpDate.Text = string.Empty;
        //txtEditPreAmnt.Text = string.Empty;
        //txtEditActAmnt.Text = string.Empty;
        //txtEditComments.Text = string.Empty;
        Session.Remove("LmtExceeded");

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnStatus = new HiddenField();
        HiddenField hdnStatusID = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnAttCnt = new HiddenField();

        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnStatus = (HiddenField)row.Cells[0].FindControl("hdStatus");
            hdnStatusID = (HiddenField)row.Cells[0].FindControl("hdnStatusID");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            Session["hdnStartDate"] = hdnStartDate.Value;
            Session["hdnPurpose"] = hdnPurpose.Value;
        }
        else
        {

            foreach (GridViewRow row1 in gvResults.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnStatus = (HiddenField)row1.FindControl("hdStatus");
                    hdnStatusID = (HiddenField)row1.FindControl("hdnStatusID");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    Session["hdnStartDate"] = hdnStartDate.Value;
                    Session["hdnPurpose"] = hdnPurpose.Value;
                    break;
                }
            }
        }
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = hdnLmtExceeded.Value;
        hdnPreType.Value = hdnPreApproved.Value;
        reqId = Convert.ToInt32(lblReqID.Text);
        Session["ReqID"] = reqId;
        hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
        hdtripStrtDate.Value = hdnStartDate.Value;
        ReqID.Value = reqId.ToString();

        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");

        if (hdnPreApproved.Value == "1")
        {
            expType = "2";
            hdnExp.Value = "preapproved";
            Session["PreApproval"] = true;
        }
        else
        {
            expType = "1";
            hdnExp.Value = "newexpense";
            Session["PreApproval"] = false;
        }
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;
        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));

        //dvEditJob.Style["display"] = "none";
        //dvEditPhs.Style["display"] = "none";
        //dvEditJC.Style["display"] = "none";

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = Session["ManagerID"].ToString();
        drManager["Email"] = Session["ManagerEmail"].ToString();
        dtManager.Rows.Add(drManager);

        ddlManagerEmail.DataSource = dtManager;
        ddlManagerEmail.DataBind();

        txtPurpose.Text = hdnPurpose.Value.ToString();
        txtTripStartDate.Text = hdnStartDate.Value.ToString();
        //enable/disable PreAmount and ActualAmount text fields.
        if (hdnPreApproved.Value == "1" && hdnIsMgrPreApproved.Value == "0")
        {
            dvEditPA.Style["display"] = "block";
            dvEditAmt.Style["display"] = "none";
        }
        else
        {
            dvEditPA.Style["display"] = "none";
            dvEditAmt.Style["display"] = "block";
        }


        //Display/Hide buttons depending on status
        Session["Status"] = hdnStatus.Value;
        Session["StatusID"] = hdnStatusID.Value;
        if (hdnStatusID.Value.ToString() == "3" || hdnStatusID.Value.ToString() == "6" || hdnStatusID.Value.ToString() == "5")
        {
            lblHeading.Text = "Edit Expense";
            btnSubmit.Visible = true;
            btnAddExpense.Visible = true;
            btnSave.Visible = true;
            btnConvert.Visible = false;
            dvExpDetails.Visible = true;
            if (hdnStatus.Value.ToLower().ToString() == "saved")
                spnStatus.Style.Add("color", "Blue");
            else
                spnStatus.Style.Add("color", "Red");
        }
        else
        {
            lblHeading.Text = "View Expense";
            dvExpDetails.Visible = false;
            btnSubmit.Visible = false;
            btnAddExpense.Visible = false;
            btnSave.Visible = false;
            if (hdnIsMgrPreApproved.Value == "1" && hdnStatus.Value.ToString() == "PreApproved")
            {
                if (Convert.ToDateTime(txtTripStartDate.Text) <= DateTime.Now)
                    btnConvert.Visible = true;
                else
                {
                    btnConvert.Visible = false;
                    dvError.Style.Add("color", "Red");
                    dvError.InnerHtml = "As Trip StartDate is more than current date you cannot convert the Expense.";
                }
            }
            if (hdnStatus.Value.ToLower().ToString() == "manager review" || hdnStatus.Value.ToLower().ToString() == "ap review")
                spnStatus.Style.Add("color", "Orange");
            else
                spnStatus.Style.Add("color", "Green");
        }

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dt = dsExp.Tables[0];
            Session["dt"] = dt;
            GetData();
        }

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
            lknCmnt.Visible = true;
        else
            lknCmnt.Visible = false;

        ////Add attributes to buttons for validations

        if (hdnPreType.Value == "1")
            id = 2;
        else
            id = 1;
        btnSave.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','" + id + "');");
        btnSubmit.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','" + id + "');");
        btnAddExpense.Attributes.Add("onclick", "javascript:return ValidationExpMaster();");


        //Calculate totals
        expTotal = 0; //autoTotal = 0;
        grandTotal = 0; preExpTotal = 0;

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);

            //HiddenField hdnAmount = (HiddenField)row1.FindControl("hdnAmount");
            //autoTotal = Convert.ToDouble(hdnAmount.Value);
            //Session["autoTotal"] = autoTotal;
        }

        grandTotal = expTotal + preExpTotal;//+ autoTotal 

        //if (autoTotal == 0)
        //    lbtnAuto.Visible = false;
        //else
        //    lbtnAuto.Visible = true;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;// +autoTotal;

        lblGrandTotalAmnt.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblGrandTotal.Style["color"] = lblGrandTotalAmnt.Style["color"] = "Red";
            lblGrandTotal.ToolTip = lblGrandTotalAmnt.ToolTip = "Amount has exceeded the maximum limit.";
        }
        else
        {
            lblGrandTotal.Style["color"] = lblGrandTotalAmnt.Style["color"] = "Green";
            lblGrandTotal.ToolTip = lblGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
        popup.Show();
    }

    protected void AddNewExpense(object sender, EventArgs e)
    {
        if (hdnPreType.Value == "1")
            id = 2;
        else
            id = 1;
        btnAppend.Attributes.Add("onclick", "javascript:return validateExpLineItem('" + id + "', 'false');");

        Session.Remove("Sectiondt");

        lblPopHeading.Text = "Add New Expense";
        ddlEditExpType.SelectedValue = "GENERAL";
        ddlEditPaymentType.SelectedValue = "Credit Card Corporate";
        btnSaveExp.Visible = false;
        btnDelete.Visible = false;
        btnAppend.Visible = true;
        btnPrev.Visible = false;
        btnNext.Visible = false;
        DivEdit.Visible = true;
        DivView.Visible = false;
        LnkcurrAttachments.Style["display"] = "none";
        hdnExpItem.Value = string.Empty;
        dvExpError.InnerHtml = string.Empty;
        dvError.InnerHtml = string.Empty;
        dvExpError1.InnerHtml = string.Empty;
        BindExpData();
        RetainFields();
        RetainVendorFields();
        ClearFields();
        popup.Show();
        popup_Edit.Show();
    }

    void BindVendors(string expItem, DropDownList ddlV, string city)
    {
        string strVend = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), expItem, city);
        List<VendorsVO> lstVend = ser.Deserialize<List<VendorsVO>>(strVend);
        DataSet dsVend = new DataSet();
        dsVend.Tables.Add(Utility.ConvertToDataTable(lstVend));
        Session["dsvend"] = dsVend;

        if (dsVend.Tables[0].Rows.Count > 0)
        {
            //Bind Preferred Vendors
            ddlV.DataSource = dsVend;
            ddlV.DataTextField = "PreferredVendor";
            ddlV.DataValueField = "PreferredVendor";
            ddlV.DataBind();
            ddlV.Items.Insert(0, "Please Select");
            ddlV.Items.FindByText("Please Select").Value = "0";
        }
    }

    void BindAgents()
    {
        DataSet dsVend = (DataSet)Session["dsvend"];
        //Bind Agents
        string exprVendor = "PreferredVendor='" + ddlEditPreVendor.SelectedItem.Text + "'";
        DataTable dt = dsVend.Tables[0];
        DataView viewExpType = new DataView(dt, exprVendor, "PreferredVendor", DataViewRowState.CurrentRows);
        if (viewExpType.Table.Rows.Count > 1)
        {
            ddlEditAgName.DataSource = viewExpType;
            ddlEditAgName.DataTextField = "AgentName";
            ddlEditAgName.DataValueField = "AgentName";
            ddlEditAgName.DataBind();
            ddlEditAgName.Items.Insert(0, "Please Select");
            ddlEditAgName.Items.FindByText("Please Select").Value = "0";
        }
        DivEdit.Visible = true;
        DivView.Visible = false;
        popup.Show();
        popup_Edit.Show();
    }

    protected void ddlEditPreVendor_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindAgents();
        if (ddlEditPreVendor.SelectedValue == "0")
            txtEditItNo.Enabled = false;
        else
            txtEditItNo.Enabled = true;
    }

    protected void EditAuto(object sender, EventArgs e)
    {
        Session["Auto"] = "1";
        Session.Remove("dsAuto");
        Session.Remove("Status");
        Session.Remove("User_Req");
        // LoadAutoData(null);
        popup.Show();
        popup_Auto.Show();
    }

    void BindAutoGrid()
    {
        txtELessNorm.Text = "0";
        txtEReimbt.Text = "0";
        txtETotTrip.Text = "0";
        txtEReimbt.Attributes.Add("readonly", "readonly");

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = Session["ManagerID"].ToString();
        drManager["Email"] = Session["ManagerEmail"].ToString();
        dtManager.Rows.Add(drManager);
        ddlManagerEmail_Auto.DataSource = dtManager;
        ddlManagerEmail_Auto.DataBind();
        ddlManagerEmail_Auto.SelectedValue = Session["ManagerID"].ToString();

        ddlManagerEmail_Auto.Enabled = false;
        txtPurpose_Auto.ReadOnly = true;
        txtTripStartDate_Auto.ReadOnly = true;

        statusId = Convert.ToInt32(Session["StatusID"]);
        if (statusId == 3 || statusId == 5 || statusId == 6)
        {
            btnAutoAppend.Visible = true;
            btnAutoSave.Visible = true;
            dvAutoDetails.Visible = true;
        }
        else
        {
            btnAutoAppend.Visible = false;
            btnAutoSave.Visible = false;
            dvAutoDetails.Visible = false;
        }

        DataSet dsAuto = new DataSet();

        //var strAutoDetails = xms.getAutoDetailsByRequestID(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), Convert.ToInt32(Session["User_Req"]));
        //List<AutoDetailsVO> lstAutoDetails = ser.Deserialize<List<AutoDetailsVO>>(strAutoDetails);
        //dsAuto.Tables.Add(Utility.ConvertToDataTable(lstAutoDetails));
        //Session["dsAuto"] = dsAuto;

        if (dsAuto != null)
        {
            dt_Auto = dsAuto.Tables[0];
            Session["dt_Auto"] = dt_Auto;
            GetData_Auto();
        }
    }

    void BindExpData()
    {
        DataSet dsCodes = new DataSet();
        DataTable dtCodes = new DataTable();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes.Tables.Add(Utility.ConvertToDataTable(codes));
            Session["dsCodes"] = dsCodes.Tables[0];
        }
        else
            dsCodes = (DataSet)Session["dsCodes"];

        dtCodes = dsCodes.Tables[0];

        //Expense Items
        //string exprExpItem = "CodeID='EXPITEM'";
        //DataView viewExpItem = new DataView(dtCodes, exprExpItem, "CODEID", DataViewRowState.CurrentRows);
        //viewExpItem.Sort = "Description ASC";
        //ddlEditExpenseItem.DataSource = viewExpItem;
        //ddlEditExpenseItem.DataBind();
        //ddlEditExpenseItem.Items.Insert(0, "Please Select");
        //ddlEditExpenseItem.Items.FindByText("Please Select").Value = "0";

        //Payment Types
        string exprPymt = "CodeID='PAYMENT'";
        DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
        ddlEditPaymentType.DataSource = viewPymt;
        ddlEditPaymentType.DataBind();
        ddlEditPaymentType.Items.Insert(0, "Please Select");
        ddlEditPaymentType.Items.FindByText("Please Select").Value = "0";

        //Cities
        string exprCities = "CodeID='USCITIES'";
        DataView viewCities = new DataView(dtCodes, exprCities, "CODEID", DataViewRowState.CurrentRows);
        viewCities.Sort = "CodeKey ASC";
        ddlEditCity.DataSource = viewCities;
        ddlEditCity.DataBind();
        ddlEditCity.Items.Insert(0, "Please Select");
        ddlEditCity.Items.FindByText("Please Select").Value = "0";
        //ddlEditCity.Items.Insert(ddlEditCity.Items.Count, "Other");
        //ddlEditCity.Items.FindByText("Other").Value = "Other";

        ddlEditFromcity.DataSource = viewCities;
        ddlEditFromcity.DataBind();
        ddlEditFromcity.Items.Insert(0, "Please Select");
        ddlEditFromcity.Items.FindByText("Please Select").Value = "0";
        //ddlEditFromcity.Items.Insert(ddlEditFromcity.Items.Count, "Other");
        //ddlEditFromcity.Items.FindByText("Other").Value = "Other";

        ddlEditTocity.DataSource = viewCities;
        ddlEditTocity.DataBind();
        ddlEditTocity.Items.Insert(0, "Please Select");
        ddlEditTocity.Items.FindByText("Please Select").Value = "0";
        //ddlEditTocity.Items.Insert(ddlEditTocity.Items.Count, "Other");
        //ddlEditTocity.Items.FindByText("Other").Value = "Other";

        //ExpenseTypes
        string exprExpType = "CodeID='EXPTYPE'";
        DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
        ddlEditExpType.DataSource = viewExpType;
        ddlEditExpType.DataBind();
        ddlEditExpType.Items.Insert(0, "Please Select");
        ddlEditExpType.Items.FindByText("Please Select").Value = "0";

        //Max Days
        string exprMaxD = "CodeID='MAXD'";
        DataView viewMaxD = new DataView(dtCodes, exprMaxD, "CODEID", DataViewRowState.CurrentRows);
        maxDays = Convert.ToInt32(viewMaxD[0]["CodeValue1"]);
        hdMaxDate.Value = System.DateTime.Now.AddDays(-maxDays).ToString("MM/dd/yyyy");
        hdMaxDays.Value = maxDays.ToString();

        //PPM
        string exprPPM = "CodeID='PPM'";
        DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
        //ppm = Convert.ToInt32(viewPPM["CodeValue1"]);
        DataTable dtPpm = viewPPM.ToTable();
        ppm = Convert.ToDouble(dtPpm.Rows[0]["CodeValue1"]);
        Session["PPM"] = ppm;
        hdnPPM.Value = ppm.ToString();
        //Jobs
        dvEditJob.Style["display"] = "none";
        dvEditPhs.Style["display"] = "none";
        dvEditJC.Style["display"] = "none";
    }

    void BindJobs(DropDownList ddl)
    {
        var strJob = xms.getJobCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<JobVO> lstJob = ser.Deserialize<List<JobVO>>(strJob);
        DataSet dsJob = new DataSet();
        dsJob.Tables.Add(Utility.ConvertToDataTable(lstJob));
        Session["dsJob"] = dsJob;
        ddl.DataSource = dsJob;
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
    }

    void BindPhases(DropDownList ddlP, DropDownList ddlJ)
    {
        var strPh = xms.getPhsCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlJ.SelectedValue);
        List<JobVO> lstPh = ser.Deserialize<List<JobVO>>(strPh);
        DataSet dsPh = new DataSet();
        dsPh.Tables.Add(Utility.ConvertToDataTable(lstPh));
        ddlP.DataSource = dsPh;
        ddlP.DataBind();
        ddlP.Items.Insert(0, "Please Select");
        ddlP.Items.FindByText("Please Select").Value = "0";
    }

    void BindCategories(DropDownList ddlC, DropDownList ddlP)
    {
        var strJC = xms.getJobCatCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlP.SelectedValue);
        List<JobVO> lstJC = ser.Deserialize<List<JobVO>>(strJC);
        DataSet dsJC = new DataSet();
        dsJC.Tables.Add(Utility.ConvertToDataTable(lstJC));
        ddlC.DataSource = dsJC;
        ddlC.DataBind();
        ddlC.Items.Insert(0, "Please Select");
        ddlC.Items.FindByText("Please Select").Value = "0";
    }

    private void GetData()
    {
        dt = (DataTable)Session["dt"];
        gvExp.DataSource = dt;
        gvExp.DataBind();
    }

    protected void btnAppend_Click(object sender, EventArgs e)
    {
        dvExpError1.InnerHtml = string.Empty;
        dvError.InnerHtml = string.Empty;
        reqId = Convert.ToInt32(Session["ReqID"]);
        int seqId = GetSeqId();
        if (fupd1.HasFile)
            str = UploadFiles(Server.MapPath(newPath), seqId);
        if (str.ToLower() == "y")
        {
            if (Session["dt"] == null)
            {
                dt.Columns.Add("ExtensionData", Type.GetType("System.String"));
                dt.Columns.Add("JCatCode", Type.GetType("System.String"));
                dt.Columns.Add("LNorm", Type.GetType("System.String"));
                dt.Columns.Add("accountCode", Type.GetType("System.String"));
                dt.Columns.Add("actualAmount", Type.GetType("System.String"));
                dt.Columns.Add("addedOn", Type.GetType("System.String"));
                dt.Columns.Add("agentName", Type.GetType("System.String"));
                dt.Columns.Add("amtSpent", Type.GetType("System.String"));
                dt.Columns.Add("apReview", Type.GetType("System.String"));
                dt.Columns.Add("automileageFlag", Type.GetType("System.String"));
                dt.Columns.Add("bookedDate", Type.GetType("System.String"));
                dt.Columns.Add("citiesVstd", Type.GetType("System.String"));
                dt.Columns.Add("codeId", Type.GetType("System.String"));
                dt.Columns.Add("codeValue", Type.GetType("System.String"));
                dt.Columns.Add("comments", Type.GetType("System.String"));
                dt.Columns.Add("compCode", Type.GetType("System.String"));
                dt.Columns.Add("currency", Type.GetType("System.String"));
                dt.Columns.Add("detailsFlag", Type.GetType("System.String"));
                dt.Columns.Add("exp", Type.GetType("System.String"));
                dt.Columns.Add("expDate", Type.GetType("System.String"));
                dt.Columns.Add("expItem", Type.GetType("System.String"));
                dt.Columns.Add("expLineNo", Type.GetType("System.String"));
                dt.Columns.Add("expType", Type.GetType("System.String"));
                dt.Columns.Add("fromCity", Type.GetType("System.String"));
                dt.Columns.Add("fromDate", Type.GetType("System.String"));
                dt.Columns.Add("itinararyNo", Type.GetType("System.String"));
                dt.Columns.Add("jobCode", Type.GetType("System.String"));
                dt.Columns.Add("managerEmail", Type.GetType("System.String"));
                dt.Columns.Add("managerId", Type.GetType("System.String"));
                dt.Columns.Add("masterFlag", Type.GetType("System.String"));
                dt.Columns.Add("orgId", Type.GetType("System.String"));
                dt.Columns.Add("otherCity", Type.GetType("System.String"));
                dt.Columns.Add("payMode", Type.GetType("System.String"));
                dt.Columns.Add("phaseCode", Type.GetType("System.String"));
                dt.Columns.Add("preAmount", Type.GetType("System.String"));
                dt.Columns.Add("preApproved", Type.GetType("System.String"));
                dt.Columns.Add("preferredVendor", Type.GetType("System.String"));
                dt.Columns.Add("purpose", Type.GetType("System.String"));
                dt.Columns.Add("reimbt", Type.GetType("System.String"));
                dt.Columns.Add("reqId", Type.GetType("System.String"));
                dt.Columns.Add("startDate", Type.GetType("System.String"));
                dt.Columns.Add("stateId", Type.GetType("System.String"));
                dt.Columns.Add("status", Type.GetType("System.String"));
                dt.Columns.Add("statusId", Type.GetType("System.String"));
                dt.Columns.Add("toCity", Type.GetType("System.String"));
                dt.Columns.Add("toDate", Type.GetType("System.String"));
                dt.Columns.Add("totTrip", Type.GetType("System.String"));
                dt.Columns.Add("otherToCity", Type.GetType("System.String"));
                dt.Columns.Add("otherFromCity", Type.GetType("System.String"));
                dt.Columns.Add("userId", Type.GetType("System.String"));
            }
            else
                dt = (DataTable)Session["dt"];

            /***file upload to temp directory**/


            ExpeseDetailsVO expenseDetails = new ExpeseDetailsVO();
            if (dvEditCV.Style["display"] == "block")
            {
                if (ddlEditCity.SelectedValue == "0")
                    expenseDetails.citiesVstd = string.Empty;
                else if (ddlEditCity.SelectedItem.Text == "Other")
                {
                    dvEditOtherCity.Style["display"] = "block";
                    expenseDetails.othercity = txtEditOtherCity.Text;
                    expenseDetails.citiesVstd = ddlEditCity.SelectedItem.Text;
                }
                else
                    expenseDetails.citiesVstd = ddlEditCity.SelectedItem.Text;
            }
            else
            {
                if (ddlEditTocity.SelectedItem.Text == "Other")
                {
                    expenseDetails.othercity = txtEditOtherToCity.Text;
                    expenseDetails.citiesVstd = ddlEditTocity.SelectedItem.Text;
                }
                else
                    expenseDetails.citiesVstd = ddlEditTocity.SelectedItem.Text;
            }
            if (ddlEditCity.SelectedItem.Text == "Other")
            {
                expenseDetails.othercity = txtEditOtherCity.Text;
            }
            else
                expenseDetails.othercity = string.Empty;

            expenseDetails.comments = txtEditComments.Text;
            expenseDetails.compCode = Session["CompCode"].ToString();
            expenseDetails.currency = string.Empty;
            expenseDetails.exp = string.Empty;
            expenseDetails.expDate = txtEditExpDate.Text;
            expenseDetails.expItem = ddlEditExpenseItem.SelectedItem.Text;
            expenseDetails.expLineNo = seqId;
            expenseDetails.expType = ddlEditExpType.SelectedValue;
            expenseDetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expenseDetails.reqId = reqId;
            expenseDetails.LNorm = ut.NullSafeInteger(txtEditLNorm.Text);
            expenseDetails.totTrip = ut.NullSafeInteger(txtEditTotTrip.Text);
            expenseDetails.reimbt = ut.NullSafeInteger(txtEditReimbt.Text);
            expenseDetails.accountCode = hdnAcc.Value;
            expenseDetails.purpose = string.Empty;
            expenseDetails.startDate = string.Empty;
            expenseDetails.stateId = string.Empty;
            expenseDetails.status = Session["Status"].ToString();
            expenseDetails.statusId = Convert.ToInt32(Session["StatusID"]);
            expenseDetails.amtSpent = 0;

            if (ddlEditExpType.SelectedItem.Text == "GENERAL")
            {
                expenseDetails.JCatCode = string.Empty;
                expenseDetails.jobCode = string.Empty;
                expenseDetails.phaseCode = string.Empty;
            }
            else
            {
                expenseDetails.JCatCode = ddlEditCategories.SelectedValue;
                expenseDetails.jobCode = ddlEditJobs.SelectedValue;
                expenseDetails.phaseCode = ddlEditPhases.SelectedValue;
            }
            if (Session["PreApproval"].ToString().ToLower() == "false")
            {
                expenseDetails.actualAmount = ut.NullSafeDouble(txtEditActAmnt.Text);
                expenseDetails.preAmount = 0;
            }
            else
            {
                expenseDetails.actualAmount = 0;
                expenseDetails.preAmount = ut.NullSafeDouble(txtEditPreAmnt.Text);
            }
            expenseDetails.payMode = ddlEditPaymentType.SelectedItem.Text;
            expenseDetails.detailsFlag = 1;
            expenseDetails.masterFlag = 0;
            expenseDetails.automileageFlag = 1;
            if (dvEditAgName.Style["display"] == "block")
            {
                if (ddlEditAgName.SelectedValue == "0")
                    expenseDetails.agentName = string.Empty;
                else
                    expenseDetails.agentName = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
            }
            else
                expenseDetails.agentName = string.Empty;
            expenseDetails.bookedDate = string.Empty;
            if (dvEditFromcity.Style["display"] == "block")
            {
                if (ddlEditFromcity.SelectedValue == "0")
                    expenseDetails.fromCity = string.Empty;
                else
                    expenseDetails.fromCity = ddlEditFromcity.SelectedItem.Text;
                if (ddlEditFromcity.SelectedItem.Text == "Other")
                    expenseDetails.otherFromCity = txtEditOtherFromCity.Text;
                else
                    expenseDetails.otherFromCity = string.Empty;
            }
            else
            {
                expenseDetails.fromCity = string.Empty;
                expenseDetails.otherFromCity = string.Empty;
            }
            if (dvEditToCity.Style["display"] == "block")
            {
                if (ddlEditTocity.SelectedValue == "0")
                    expenseDetails.toCity = string.Empty;
                else
                    expenseDetails.toCity = ddlEditTocity.SelectedItem.Text;
                if (ddlEditTocity.SelectedItem.Text == "Other")
                    expenseDetails.otherToCity = txtEditOtherToCity.Text;
                else
                    expenseDetails.otherToCity = string.Empty;
            }
            else
            {
                expenseDetails.toCity = string.Empty;
                expenseDetails.otherToCity = string.Empty;
            }
            if (dvEditVendor.Style["display"] == "block")
            {
                if (ddlEditPreVendor.SelectedValue == "0")
                    expenseDetails.preferredVendor = string.Empty;
                else
                    expenseDetails.preferredVendor = ddlEditPreVendor.SelectedItem.Text;
            }
            else
                expenseDetails.preferredVendor = string.Empty;
            expenseDetails.itinararyNo = txtEditItNo.Text;
            expenseDetails.fromDate = txtEditFromdate.Text;
            expenseDetails.toDate = txtEditTodate.Text;
            expenseDetails.codeId = string.Empty;
            expenseDetails.codeValue = string.Empty;
            expenseDetails.managerEmail = string.Empty;
            expenseDetails.managerId = 0;
            expenseDetails.userId = 0;
            expenseDetails.preApproved = (Convert.ToBoolean(Session["PreApproval"]) == false ? 0 : 1);
            expenseDetails.lastUpdSource = "Web";
            string retStr = string.Empty;

            retStr = xms.addExpense(expenseDetails);


            if (retStr.ToLower().Contains("fail"))
            {
                dvError.Style["color"] = "Red";
                dvError.InnerHtml = retStr;
            }
            else if (retStr.ToLower().Contains("succes"))
            {
                dvError.Style["color"] = "Green";

                if (txtEditPreAmnt.Text == string.Empty)
                    txtEditPreAmnt.Text = "0";
                if (txtEditActAmnt.Text == string.Empty)
                    txtEditActAmnt.Text = "0";

                /***file upload to temp directory**/

                dr = dt.NewRow();
                if (ddlEditExpType.SelectedValue == "GENERAL")
                {
                    dr["JCatCode"] = string.Empty;
                    dr["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                    dr["accountCode"] = hdnAcc.Value;
                    if (Session["PreApproval"].ToString().ToLower() == "false")
                    {
                        dr["actualAmount"] = txtEditActAmnt.Text;
                        dr["preAmount"] = "0";
                    }
                    else
                    {
                        dr["actualAmount"] = "0";
                        dr["preAmount"] = txtEditPreAmnt.Text;
                    }
                    dr["addedOn"] = ddlEditExpType.SelectedValue;
                    if (dvEditAgName.Style["display"] == "block")
                    {
                        if (ddlEditAgName.SelectedValue == "0")
                            dr["agentName"] = string.Empty;
                        else
                            dr["agentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    }
                    else
                        dr["agentName"] = string.Empty;
                    dr["amtSpent"] = 0;
                    dr["apReview"] = string.Empty;
                    dr["automileageFlag"] = 0;
                    dr["bookedDate"] = string.Empty;
                    if (ddlEditCity.SelectedItem.Text == "Other")
                        dr["otherCity"] = txtEditOtherCity.Text;
                    else
                        dr["otherCity"] = string.Empty;
                    if (dvEditCV.Style["display"] == "block")
                    {
                        if (ddlEditCity.SelectedValue == "0")
                            dr["citiesVstd"] = string.Empty;
                        else if (ddlEditCity.SelectedItem.Text == "Other")
                        {
                            dvEditOtherCity.Style["display"] = "block";
                            dr["otherCity"] = txtEditOtherCity.Text;
                            dr["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                            dr["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                    {
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                        {
                            dr["otherCity"] = txtEditOtherToCity.Text;
                            dr["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                        }
                        else
                            dr["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                    }
                    dr["codeId"] = string.Empty;
                    dr["codeValue"] = string.Empty;
                    dr["comments"] = txtEditComments.Text;
                    dr["compCode"] = Session["CompCode"].ToString();
                    dr["currency"] = string.Empty;
                    dr["detailsFlag"] = 0;
                    dr["exp"] = string.Empty;
                    dr["expDate"] = txtEditExpDate.Text;
                    dr["expItem"] = ddlEditExpenseItem.SelectedItem.Text;
                    dr["expLineNo"] = seqId;
                    dr["expType"] = ddlEditExpType.SelectedItem.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (ddlEditFromcity.SelectedValue == "0")
                            dr["fromCity"] = string.Empty;
                        else
                            dr["fromCity"] = ddlEditFromcity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dr["otherFromCity"] = txtEditOtherToCity.Text;
                        else
                            dr["otherFromCity"] = string.Empty;
                    }
                    else
                    {
                        dr["fromCity"] = string.Empty;
                        dr["otherFromCity"] = string.Empty;
                    }
                    dr["fromDate"] = txtEditFromdate.Text;
                    dr["itinararyNo"] = txtEditItNo.Text;
                    dr["jobCode"] = string.Empty;
                    dr["managerEmail"] = string.Empty;
                    dr["managerId"] = 0;
                    dr["masterFlag"] = 0;
                    dr["orgId"] = Convert.ToInt32(Session["OrgID"]);
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dr["payMode"] = string.Empty;
                    else
                        dr["payMode"] = ddlEditPaymentType.SelectedItem.Text;
                    dr["phaseCode"] = string.Empty;
                    dr["preApproved"] = Convert.ToBoolean(Session["PreApproval"]);
                    if (dvEditVendor.Style["display"] == "block")
                    {
                        if (ddlEditPreVendor.SelectedValue == "0")
                            dr["preferredVendor"] = string.Empty;
                        else
                            dr["preferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                    }
                    else
                        dr["preferredVendor"] = string.Empty;
                    dr["purpose"] = string.Empty;
                    dr["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                    dr["reqId"] = reqId;
                    dr["startDate"] = string.Empty;
                    dr["stateId"] = string.Empty;
                    dr["status"] = string.Empty;
                    dr["statusId"] = 0;
                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (ddlEditTocity.SelectedValue == "0")
                            dr["toCity"] = string.Empty;
                        else
                            dr["toCity"] = ddlEditTocity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dr["otherToCity"] = txtEditOtherToCity.Text;
                        else
                            dr["otherToCity"] = string.Empty;
                    }
                    else
                    {
                        dr["toCity"] = string.Empty;
                        dr["otherToCity"] = string.Empty;
                    }
                    dr["toDate"] = txtEditTodate.Text;
                    dr["totTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                    dr["userId"] = 0;
                }
                else
                {
                    dr["JCatCode"] = ddlEditCategories.SelectedItem.Text;
                    dr["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                    dr["accountCode"] = hdnAcc.Value;
                    if (Session["PreApproval"].ToString().ToLower() == "false")
                    {
                        dr["actualAmount"] = txtEditActAmnt.Text;
                        dr["preAmount"] = "0";
                    }
                    else
                    {
                        dr["actualAmount"] = "0";
                        dr["preAmount"] = txtEditPreAmnt.Text;
                    }
                    dr["addedOn"] = ddlEditExpType.SelectedValue;
                    if (dvEditAgName.Style["display"] == "block")
                    {
                        if (ddlEditAgName.SelectedValue == "0")
                            dr["agentName"] = string.Empty;
                        else
                            dr["agentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    }
                    else
                        dr["agentName"] = string.Empty;
                    dr["amtSpent"] = 0;
                    dr["apReview"] = ddlEditJobs.SelectedValue;
                    dr["automileageFlag"] = 0;
                    dr["bookedDate"] = string.Empty;
                    if (ddlEditCity.SelectedItem.Text == "Other")
                        dr["otherCity"] = txtEditOtherCity.Text;
                    else
                        dr["otherCity"] = string.Empty;
                    if (dvEditCV.Style["display"] == "block")
                    {
                        if (ddlEditAgName.SelectedValue == "0")
                            dr["citiesVstd"] = string.Empty;
                        else if (ddlEditCity.SelectedItem.Text == "Other")
                        {
                            dvEditOtherCity.Style["display"] = "block";
                            dr["otherCity"] = txtEditOtherCity.Text;
                            dr["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                            dr["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                    }
                    else
                    {
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                        {
                            dr["otherCity"] = txtEditOtherToCity.Text;
                            dr["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                        }
                        else
                            dr["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                    }
                    dr["codeId"] = ddlEditPhases.SelectedValue;
                    dr["codeValue"] = ddlEditCategories.SelectedValue;
                    dr["comments"] = txtEditComments.Text;
                    dr["compCode"] = string.Empty;
                    dr["currency"] = string.Empty;
                    dr["detailsFlag"] = 1;
                    dr["exp"] = string.Empty;
                    dr["expDate"] = txtEditExpDate.Text;
                    dr["expItem"] = ddlEditExpenseItem.SelectedItem.Text;
                    dr["expLineNo"] = seqId;
                    dr["expType"] = ddlEditExpType.SelectedItem.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (ddlEditFromcity.SelectedValue == "0")
                            dr["fromCity"] = string.Empty;
                        else
                            dr["fromCity"] = ddlEditFromcity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dr["otherFromCity"] = txtEditOtherToCity.Text;
                        else
                            dr["otherFromCity"] = string.Empty;
                    }
                    else
                    {
                        dr["fromCity"] = string.Empty;
                        dr["otherFromCity"] = string.Empty;
                    }
                    dr["fromDate"] = txtEditFromdate.Text;
                    dr["itinararyNo"] = txtEditItNo.Text;
                    dr["jobCode"] = ddlEditJobs.SelectedItem.Text;
                    dr["managerEmail"] = string.Empty;
                    dr["managerId"] = 0;
                    dr["masterFlag"] = 0;
                    dr["orgId"] = 0;
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dr["payMode"] = string.Empty;
                    else
                        dr["payMode"] = ddlEditPaymentType.SelectedItem.Text;
                    dr["phaseCode"] = ddlEditPhases.SelectedItem.Text;
                    dr["preApproved"] = Convert.ToBoolean(Session["PreApproval"]);
                    if (dvEditVendor.Style["display"] == "block")
                    {
                        if (ddlEditPreVendor.SelectedValue == "0")
                            dr["preferredVendor"] = string.Empty;
                        else
                            dr["preferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                    }
                    else
                        dr["preferredVendor"] = string.Empty;
                    dr["purpose"] = string.Empty;
                    dr["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                    dr["reqId"] = reqId;
                    dr["startDate"] = string.Empty;
                    dr["stateId"] = string.Empty;
                    dr["status"] = string.Empty;
                    dr["statusId"] = 0;

                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (ddlEditTocity.SelectedValue == "0")
                            dr["toCity"] = string.Empty;
                        else
                            dr["toCity"] = ddlEditTocity.SelectedItem.Text;
                        if (ddlEditTocity.SelectedItem.Text == "Other")
                            dr["otherToCity"] = txtEditOtherToCity.Text;
                        else
                            dr["otherToCity"] = string.Empty;
                    }
                    else
                    {
                        dr["toCity"] = string.Empty;
                        dr["otherToCity"] = string.Empty;
                    }
                    dr["toDate"] = txtEditTodate.Text;
                    dr["totTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                    dr["userId"] = 0;
                }

                dt.Rows.Add(dr);
                dt.AcceptChanges();
                Session["dt"] = dt;
                //this.GetData();
                LnkcurrAttachments.Style["display"] = "block";
                //lblEditAtt.InnerHtml = Attachments(Convert.ToInt32(dt.Rows[0]["expLineNo"]));
                Session.Remove("dsSt");
                SortGrid();
                LoadEditData(null);
                ClearFields();
                dvError.InnerHtml = retStr;
            }
            else
            {
                dvError.Style["color"] = "Red";
                dvError.InnerHtml = "An error occurred while processing the request. Please try again.";
            }
            btnSubmit.Visible = true;
            btnSave.Visible = true;
            CalculateTotals();
        }
        else
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 4MB";
        popup.Show();
    }

    void ClearFields()
    {
        ddlEditJobs.Items.Clear();
        ddlEditPhases.Items.Clear();
        ddlEditCategories.Items.Clear();
        txtEditOtherCity.Text = string.Empty;
        txtEditExpDate.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditComments.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
        ddlEditCity.SelectedIndex = 0;
        txtEditFromdate.Text = string.Empty;
        txtEditTodate.Text = string.Empty;
        if (ddlEditPreVendor.Items.Count > 0)
            ddlEditPreVendor.SelectedIndex = 0;
        if (ddlEditAgName.Items.Count > 0)
            ddlEditAgName.SelectedIndex = 0;
        txtEditItNo.Text = string.Empty;
        ddlEditFromcity.SelectedIndex = 0;
        txtEditOtherFromCity.Text = string.Empty;
        txtEditOtherToCity.Text = string.Empty;
        ddlEditTocity.SelectedIndex = 0;
        txtEditTotTrip.Text = string.Empty;
        txtEditLNorm.Text = string.Empty;
        txtEditReimbt.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;

    }

    string UploadFiles(string path1, int expId)
    {
        Random random = new Random();
        reqId = Convert.ToInt32(Session["ReqID"]);
        HttpFileCollection hfc = Request.Files;
        string[] orgFileNames = new string[hfc.Count];
        for (int i = 0; i < hfc.Count - 1; i++)
        {
            HttpPostedFile hpf = hfc[i];
            if (hpf.ContentLength > 0 && hpf.ContentLength < 2097152)
            {
                // byte[] fileArray = File.ReadAllBytes(hpf.FileName);


                string ext = Path.GetExtension(hpf.FileName);
                int index = hpf.FileName.IndexOf('.');
                string fName = hpf.FileName.Substring(0, index);
                AttachmentVO att = new AttachmentVO();
                att.addedOn = DateTime.Now.ToShortDateString();
                att.attachmentId = 0;
                att.compCode = Session["CompCode"].ToString();
                att.expLineNo = expId;
                att.fileName = reqId.ToString() + "_" + expId + "_" + Session["OrgID"].ToString() + "_" + ddlEditExpenseItem.SelectedItem.Text.Replace('/', '_') + "_" + fName + random.Next();
                att.orgId = Convert.ToInt32(Session["OrgID"]);
                att.orgName = string.Empty;
                att.requestId = reqId;
                if (ext.ToLower() == ".pdf")
                {
                    int fileSize;
                    //Uploading a file browser->web server
                    //get file size (theFile is a VS "file field" component )
                    fileSize = fupd1.PostedFile.ContentLength;
                    //get file as binary stream
                    Stream fileStream = fupd1.PostedFile.InputStream;
                    //create byte array to keep file as bytes
                    byte[] bArray = new byte[fileSize];
                    //load array from stream
                    fileStream.Read(bArray, 0, 2097152);
                    //At this point bArray is saved to DataBase
                    str = xms.addAttachmentsNew(bArray, att, 2, 2);
                }
                else
                {
                    byte[] fileData = null;
                    using (var binaryReader = new BinaryReader(Request.Files[i].InputStream))
                    {
                        fileData = binaryReader.ReadBytes(Request.Files[i].ContentLength);
                    }
                    str = xms.addAttachmentsNew(fileData, att, 1, 2);
                }
            }
            else
                ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 4MB');", true);
        }
        return str;
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dt"];
        string appString = "#";
        int edFlag = 0;

        if (txtTripStartDate.Text != Session["hdnStartDate"].ToString())
            edFlag = 1;
        else if (txtPurpose.Text != Session["hdnPurpose"].ToString())
            edFlag = 1;
        if (edFlag == 1)
        {
            //foreach (GridViewRow row1 in gvExp.Rows)
            //{
            //    Label lblExpType = (Label)row1.FindControl("lblExpType");
            //    Label lblExpItem = (Label)row1.FindControl("lblExpItem");
            //    Label lblJobs = (Label)row1.FindControl("lblJobs");
            //    Label lblPhases = (Label)row1.FindControl("lblPhases");
            //    Label lblCategories = (Label)row1.FindControl("lblCategories");
            //    Label lblCodeID_ET = (Label)row1.FindControl("lblCodeID_ET");
            //    Label lblCode_Job = (Label)row1.FindControl("lblCode_Job");
            //    Label lblCode_Phs = (Label)row1.FindControl("lblCode_Phs");
            //    Label lblCode_JC = (Label)row1.FindControl("lblCode_JC");
            //    Label lblCodeID = (Label)row1.FindControl("lblCodeID");
            //    Label lblExpDate = (Label)row1.FindControl("lblExpDate");
            //    Label lblCity = (Label)row1.FindControl("lblCity");
            //    Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            //    Label lblComments = (Label)row1.FindControl("lblComments");
            //    HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");
            //    Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            //    Label lblPaymentID = (Label)row1.FindControl("lblPaymentID");
            //    Label lblOtherCity = (Label)row1.FindControl("lblOtherCity");
            //    HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");

            //    lblCodeID_ET.Text = dt.Rows[row1.RowIndex]["addedOn"].ToString();
            //    lblCode_Job.Text = dt.Rows[row1.RowIndex]["apReview"].ToString();
            //    lblCode_Phs.Text = dt.Rows[row1.RowIndex]["codeId"].ToString();
            //    lblCode_JC.Text = dt.Rows[row1.RowIndex]["codeValue"].ToString();

            //    if (lblActAmnt.Text == string.Empty)
            //        lblActAmnt.Text = "0";
            //    if (lblPreAmnt.Text == string.Empty)
            //        lblPreAmnt.Text = "0";
            //    if (lblOtherCity.Text == string.Empty)
            //        lblOtherCity.Text = " ";
            //    if (lblCode_Job.Text == string.Empty)
            //        lblCode_Job.Text = " ";
            //    if (lblCode_Phs.Text == string.Empty)
            //        lblCode_Phs.Text = " ";
            //    if (lblCode_JC.Text == string.Empty)
            //        lblCode_JC.Text = " ";
            //    if (lblComments.Text == string.Empty)
            //        lblComments.Text = " ";

            //    reqId1 += reqId.ToString() + appString;
            //    expItem += lblExpItem.Text + appString;
            //    expLineNo += hdnSeq.Value + appString;
            //    expDate += lblExpDate.Text + appString;
            //    citiesVstd += lblCity.Text + appString;
            //    comments += lblComments.Text + appString;
            //    orgId1 += Session["OrgID"].ToString() + appString;
            //    expenseType += lblCodeID_ET.Text + appString;
            //    jobCode += lblCode_Job.Text + appString;
            //    phaseCode += lblCode_Phs.Text + appString;
            //    JCatCode += lblCode_JC.Text + appString;
            //    compCode += Session["CompCode"].ToString() + appString;
            //    purpose += txtPurpose.Text + appString;
            //    preAmount += lblPreAmnt.Text + appString;
            //    currency += Session["Currency"].ToString() + appString;
            //    sts += Session["Status"].ToString() + appString;
            //    stsId += Session["StatusID"].ToString() + appString;
            //    managerId += ddlManagerEmail.SelectedValue + appString;
            //    startDate += txtTripStartDate.Text + appString;
            //    payMode += lblPaymentID.Text + appString;
            //    preApproved += Session["PreApproval"].ToString() + appString;
            //    actualAmount += lblActAmnt.Text + appString;
            //    othercity += lblOtherCity.Text + appString;
            //    detailsFlag += 0 + appString;
            //    masterFlag += 1 + appString;
            //    autoFlag += 0 + appString;
            //    agentName += dt.Rows[row1.RowIndex]["agentName"].ToString() + appString;
            //    bookedDate += " " + appString;
            //    fromCity += dt.Rows[row1.RowIndex]["fromCity"].ToString() + appString;
            //    toCity += dt.Rows[row1.RowIndex]["toCity"].ToString() + appString;
            //    preferredVendor += dt.Rows[row1.RowIndex]["preferredVendor"].ToString() + appString;
            //    itinararyNo += dt.Rows[row1.RowIndex]["itinararyNo"].ToString() + appString;
            //    fromDate += dt.Rows[row1.RowIndex]["fromDate"].ToString() + appString;
            //    toDate += dt.Rows[row1.RowIndex]["toDate"].ToString() + appString;
            //    amntSpent += "0" + appString;
            //    apReview += " " + appString;
            //    codeId += " " + appString;
            //    codeVal += " " + appString;
            //    exp += " " + appString;
            //    lessNorm += dt.Rows[row1.RowIndex]["LNorm"].ToString() + appString;
            //    reimbursement += dt.Rows[row1.RowIndex]["reimbt"].ToString() + appString;
            //    stateId += "0" + appString;
            //    totalTrip += dt.Rows[row1.RowIndex]["totTrip"].ToString() + appString;
            //    mgrEmail += " " + appString;
            //    accCode += hdnAccCode.Value + appString;

            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        userId += Session["UserID_Mgr"].ToString() + appString;
            //    else
            //        userId += Session["UserID"].ToString() + appString;
            //}
            ExpeseDetailsVO addexp = new ExpeseDetailsVO();
            addexp.reqId = reqId;
            addexp.expItem = string.Empty;
            addexp.expLineNo = 0;
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Convert.ToInt32(Session["OrgID"]);
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPurpose.Text;
            addexp.preAmount = 0;
            addexp.currency = string.Empty;
            addexp.status = Session["Status"].ToString();
            addexp.statusId = Convert.ToInt32(Session["StatusID"]);
            addexp.managerId = Convert.ToInt32(ddlManagerEmail.SelectedValue);
            addexp.startDate = txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (Convert.ToBoolean(Session["PreApproval"]) == false ? 0 : 1);
            addexp.actualAmount = 0;
            addexp.othercity = string.Empty;
            addexp.detailsFlag = 0;
            addexp.masterFlag = 1;
            addexp.automileageFlag = 0;
            addexp.agentName = string.Empty;
            addexp.bookedDate = string.Empty;
            addexp.fromCity = string.Empty;
            addexp.otherFromCity = string.Empty;
            addexp.toCity = string.Empty;
            addexp.otherToCity = string.Empty;
            addexp.preferredVendor = string.Empty;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            //if (Session["AppFlag"].ToString() == "N")
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            //else
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true")
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            if (Session["AppFlag"].ToString() == "N")
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }
            else
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["UserID_APNull"] == "1" && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }

            //addexp.amtSpent = 0;
            //addexp.apReview = string.Empty;
            //addexp.codeId = string.Empty;
            //addexp.codeValue = string.Empty;
            //addexp.exp = string.Empty;
            addexp.LNorm = 0;
            //addexp.managerEmail = string.Empty;
            addexp.reimbt = 0;
            addexp.stateId = string.Empty;
            addexp.totTrip = 0;
            addexp.accountCode = string.Empty;
            addexp.lastUpdSource = "Web";
            string retStr = xms.addExpense(addexp);

            //if (Session["delExp"] != null)
            //{
            //    delExp = Session["delExp"].ToString();
            //    delChar = delExp.Split('|');
            //    for (int j = 0; j < delChar.Length; j++)
            //    {
            //        eBLL.DeleteExpense(reqId, Convert.ToInt32(delChar[j]));

            //        int seq = Convert.ToInt32(delChar[j]);

            //        DataSet ds1 = eBLL.GetAttachmentsDelete(reqId, seq, Convert.ToInt32(Session["OrgID"]));
            //        resultFileNames = (Directory.GetFiles(Server.MapPath(attachmentPath)).Select(f => Path.GetFileName(f))).ToArray();
            //        foreach (string fileName in resultFileNames)
            //        {
            //            for (int i = 0; i < ds1.Tables[0].Rows.Count; i++)
            //            {
            //                if (fileName.Contains(reqId.ToString() + "_" + seq + "_" + Session["OrgID"] + "_" + ds1.Tables[0].Rows[i]["OrgFName"].ToString()))
            //                {
            //                    if (System.IO.File.Exists(ds1.Tables[0].Rows[i]["FileName"].ToString()))
            //                    {
            //                        System.IO.File.Delete(ds1.Tables[0].Rows[i]["FileName"].ToString());
            //                        eBLL.DeleteAttachment(reqId, seq, Convert.ToInt32(Session["OrgID"]));
            //                    }
            //                }
            //            }

            //        }
            //    }
            //}

            //DataSet dsAtt = eBLL.GetSeqAtt_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            //for (int k = 0; k < dsAtt.Tables[0].Rows.Count; k++)
            //{
            //    DataSet ds = eBLL.GetAtt_Temp(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), Convert.ToInt32(Session["OrgID"]));
            //    resultFileNames = (Directory.GetFiles(Server.MapPath(newPath)).Select(f => Path.GetFileName(f))).ToArray();
            //    foreach (string fileName in resultFileNames)
            //    {
            //        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            //        {
            //            string fromFile = reqId.ToString() + "_" + Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]) + "_" + Session["OrgID"] + "_" + ds.Tables[0].Rows[i]["OrgFName"].ToString();
            //            if (fileName.Contains(fromFile))
            //            {
            //                if (System.IO.File.Exists(ds.Tables[0].Rows[i]["FileName"].ToString()))
            //                {
            //                    string toFile = Server.MapPath("Attachments") + "\\" + fromFile;
            //                    if (!System.IO.File.Exists(toFile))
            //                    {
            //                        System.IO.File.Move(ds.Tables[0].Rows[i]["FileName"].ToString(), toFile);
            //                    }
            //                    eBLL.AddAttachments(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), toFile, ds.Tables[0].Rows[i]["OrgFName"].ToString(), Convert.ToInt32(Session["OrgID"]));
            //                }
            //            }
            //        }
            //    }
            //}

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearFields();
            gvExp.DataSource = dt;
            gvExp.DataBind();
            CalculateTotals();
            Session.Remove("dsSt");
            SortGrid();
            dvError.Visible = true;
            dvError.InnerHtml = retStr;
            //dvError.InnerHtml = "Message: Your request details have been updated.";
            if (retStr.ToLower().Contains("fail"))
                dvError.Style["color"] = "Red";
            else
                dvError.Style["color"] = "Green";
        }
        else
        {
            dvError.Visible = true;
            dvError.Style["color"] = "Red";
            dvError.InnerHtml = "No changes to update!";
        }


        popup.Show();
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dt"];
        string appString = "#";

        if (Session["statusID"].ToString() == "5" || Session["statusID"].ToString() == "6")
        {
            widgetComments.InnerHtml = ShowPreviousComments();
            btnCommentsSave.Visible = true;
            txtPopComments.Visible = true;
            btnCommentsClose.Visible = true;
            popup_Comments.Show();
        }
        else
        {
            //foreach (GridViewRow row1 in gvExp.Rows)
            //{
            //    Label lblExpType = (Label)row1.FindControl("lblExpType");
            //    Label lblExpItem = (Label)row1.FindControl("lblExpItem");
            //    Label lblJobs = (Label)row1.FindControl("lblJobs");
            //    Label lblPhases = (Label)row1.FindControl("lblPhases");
            //    Label lblCategories = (Label)row1.FindControl("lblCategories");
            //    Label lblCodeID_ET = (Label)row1.FindControl("lblCodeID_ET");
            //    Label lblCode_Job = (Label)row1.FindControl("lblCode_Job");
            //    Label lblCode_Phs = (Label)row1.FindControl("lblCode_Phs");
            //    Label lblCode_JC = (Label)row1.FindControl("lblCode_JC");
            //    Label lblCodeID = (Label)row1.FindControl("lblCodeID");
            //    Label lblExpDate = (Label)row1.FindControl("lblExpDate");
            //    Label lblCity = (Label)row1.FindControl("lblCity");
            //    Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            //    Label lblComments = (Label)row1.FindControl("lblComments");
            //    HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");
            //    Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            //    Label lblPaymentID = (Label)row1.FindControl("lblPaymentID");
            //    Label lblOtherCity = (Label)row1.FindControl("lblOtherCity");
            //    HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");

            //    lblCodeID_ET.Text = dt.Rows[row1.RowIndex]["addedOn"].ToString();
            //    lblCode_Job.Text = dt.Rows[row1.RowIndex]["apReview"].ToString();
            //    lblCode_Phs.Text = dt.Rows[row1.RowIndex]["codeId"].ToString();
            //    lblCode_JC.Text = dt.Rows[row1.RowIndex]["codeValue"].ToString();

            //    if (lblActAmnt.Text == string.Empty)
            //        lblActAmnt.Text = "0";
            //    if (lblPreAmnt.Text == string.Empty)
            //        lblPreAmnt.Text = "0";
            //    if (lblOtherCity.Text == string.Empty)
            //        lblOtherCity.Text = " ";
            //    if (lblCode_Job.Text == string.Empty)
            //        lblCode_Job.Text = " ";
            //    if (lblCode_Phs.Text == string.Empty)
            //        lblCode_Phs.Text = " ";
            //    if (lblCode_JC.Text == string.Empty)
            //        lblCode_JC.Text = " ";
            //    if (lblComments.Text == string.Empty)
            //        lblComments.Text = " ";

            //    reqId1 += reqId.ToString() + appString;
            //    expItem += lblExpItem.Text + appString;
            //    expLineNo += hdnSeq.Value + appString;
            //    expDate += lblExpDate.Text + appString;
            //    citiesVstd += lblCity.Text + appString;
            //    comments += lblComments.Text + appString;
            //    orgId1 += Session["OrgID"].ToString() + appString;
            //    expenseType += lblCodeID_ET.Text + appString;
            //    jobCode += lblCode_Job.Text + appString;
            //    phaseCode += lblCode_Phs.Text + appString;
            //    JCatCode += lblCode_JC.Text + appString;
            //    compCode += Session["CompCode"].ToString() + appString;
            //    purpose += txtPurpose.Text + appString;
            //    preAmount += lblPreAmnt.Text + appString;
            //    currency += Session["Currency"].ToString() + appString;
            //    sts += " " + appString;
            //    stsId += "0" + appString;
            //    managerId += ddlManagerEmail.SelectedValue + appString;
            //    startDate += txtTripStartDate.Text + appString;
            //    payMode += lblPaymentID.Text + appString;
            //    preApproved += Session["PreApproval"].ToString() + appString;
            //    actualAmount += lblActAmnt.Text + appString;
            //    othercity += lblOtherCity.Text + appString;
            //    detailsFlag += 0 + appString;
            //    masterFlag += 1 + appString;
            //    autoFlag += 0 + appString;
            //    agentName += dt.Rows[row1.RowIndex]["agentName"].ToString() + appString;
            //    bookedDate += " " + appString;
            //    fromCity += dt.Rows[row1.RowIndex]["fromCity"].ToString() + appString;
            //    toCity += dt.Rows[row1.RowIndex]["toCity"].ToString() + appString;
            //    preferredVendor += dt.Rows[row1.RowIndex]["preferredVendor"].ToString() + appString;
            //    itinararyNo += dt.Rows[row1.RowIndex]["itinararyNo"].ToString() + appString;
            //    fromDate += dt.Rows[row1.RowIndex]["fromDate"].ToString() + appString;
            //    toDate += dt.Rows[row1.RowIndex]["toDate"].ToString() + appString;
            //    amntSpent += "0" + appString;
            //    apReview += " " + appString;
            //    codeId += " " + appString;
            //    codeVal += " " + appString;
            //    exp += " " + appString;
            //    lessNorm += dt.Rows[row1.RowIndex]["LNorm"].ToString() + appString;
            //    reimbursement += dt.Rows[row1.RowIndex]["reimbt"].ToString() + appString;
            //    stateId += "0" + appString;
            //    totalTrip += dt.Rows[row1.RowIndex]["totTrip"].ToString() + appString;
            //    mgrEmail += " " + appString;
            //    accCode += hdnAccCode.Value + appString;

            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        userId += Session["UserID_Mgr"].ToString() + appString;
            //    else
            //        userId += Session["UserID"].ToString() + appString;
            //}
            ExpeseDetailsVO addexp = new ExpeseDetailsVO();
            addexp.reqId = reqId;
            addexp.expItem = string.Empty;
            addexp.expLineNo = 0;
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Convert.ToInt32(Session["OrgID"]);
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPurpose.Text;
            addexp.preAmount = 0;
            addexp.currency = string.Empty;
            addexp.status = string.Empty;
            addexp.statusId = 0;
            addexp.managerId = Convert.ToInt32(ddlManagerEmail.SelectedValue);
            addexp.startDate = txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (Convert.ToBoolean(Session["PreApproval"]) == false ? 0 : 1);
            addexp.actualAmount = 0;
            addexp.othercity = string.Empty;
            addexp.detailsFlag = 0;
            addexp.masterFlag = 1;
            addexp.automileageFlag = 0;
            addexp.agentName = string.Empty;
            addexp.bookedDate = string.Empty;
            addexp.fromCity = string.Empty;
            addexp.otherFromCity = string.Empty;
            addexp.toCity = string.Empty;
            addexp.otherToCity = string.Empty;
            addexp.preferredVendor = string.Empty;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            //if (Session["AppFlag"].ToString() == "N")
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            //else
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true")
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            if (Session["AppFlag"].ToString() == "N")
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }
            else
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["UserID_APNull"] == "1" && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }


            //addexp.amtSpent = 0;
            //addexp.apReview = string.Empty;
            //addexp.codeId = string.Empty;
            //addexp.codeValue = string.Empty;
            //addexp.exp = string.Empty;
            addexp.LNorm = 0;
            //addexp.managerEmail = string.Empty;
            addexp.reimbt = 0;
            addexp.stateId = string.Empty;
            addexp.totTrip = 0;
            addexp.accountCode = string.Empty;
            addexp.lastUpdSource = "Web";
            string retStr = xms.addExpense(addexp);

            ddlManagerEmail.SelectedIndex = 0;

            //DataSet dsAtt = eBLL.GetSeqAtt_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            //for (int k = 0; k < dsAtt.Tables[0].Rows.Count; k++)
            //{
            //    DataSet ds = eBLL.GetAtt_Temp(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), Convert.ToInt32(Session["OrgID"]));
            //    resultFileNames = (Directory.GetFiles(Server.MapPath(newPath)).Select(f => Path.GetFileName(f))).ToArray();
            //    foreach (string fileName in resultFileNames)
            //    {
            //        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            //        {
            //            string fromFile = reqId.ToString() + "_" + Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]) + "_" + Session["OrgID"] + "_" + ds.Tables[0].Rows[i]["OrgFName"].ToString();
            //            if (fileName.Contains(fromFile))
            //            {
            //                if (System.IO.File.Exists(ds.Tables[0].Rows[i]["FileName"].ToString()))
            //                {
            //                    string toFile = Server.MapPath("Attachments") + "\\" + fromFile;
            //                    System.IO.File.Move(ds.Tables[0].Rows[i]["FileName"].ToString(), toFile);
            //                    eBLL.AddAttachments(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), toFile, ds.Tables[0].Rows[i]["OrgFName"].ToString(), Convert.ToInt32(Session["OrgID"]));
            //                }
            //            }
            //        }
            //    }
            //}
            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearFields();
            gvExp.DataSource = dt;
            CalculateTotals();
            Session.Remove("dsSt");
            SortGrid();
            dvExpDetails.Visible = false;
            btnSave.Visible = false;
            btnSubmit.Visible = false;
            btnAppend.Visible = false;
            dvError.Visible = true;
            dvError.InnerHtml = retStr;
            //dvError.InnerHtml = "Message: Your request details have been submitted.";
            if (retStr.ToLower().Contains("fail"))
                dvError.Style["color"] = "Red";
            else
                dvError.Style["color"] = "Green";

            popup.Show();
            lblHeading.Text = "View Expense";
            if (retStr.Contains("AP Review"))
            {
                Session["Status"] = "AP Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 2;
            }
            else if (retStr.Contains("Manager Review"))
            {
                Session["Status"] = "Manager Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 1;
            }
            gvExp.DataBind();

        }
    }

    int GetSeqId()
    {
        int seq = 0;
        if (Convert.ToInt32(Session["SeqCnt"]) == 0)
            seq = xms.getExpLineNo(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
        else
            seq = xms.getExpLineNo(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);

        Session["SeqCnt"] = "1";
        return seq;
    }

    protected void gvExp_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {

            //DataSet ds = eBLL.GetAtt_Temp(reqId, seq, Convert.ToInt32(Session["OrgID"]));
            //resultFileNames = (Directory.GetFiles(Server.MapPath(newPath)).Select(f => Path.GetFileName(f))).ToArray();
            //foreach (string fileName in resultFileNames)
            //{
            //    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            //    {
            //        if (fileName.Contains(reqId.ToString() + "_" + seq + "_" + Session["OrgID"] + "_" + ds.Tables[0].Rows[i]["OrgFName"].ToString()))
            //        {
            //            if (System.IO.File.Exists(ds.Tables[0].Rows[i]["FileName"].ToString()))
            //            {
            //                System.IO.File.Delete(ds.Tables[0].Rows[i]["FileName"].ToString());
            //                eBLL.Delete_Temp(reqId, seq, Convert.ToInt32(Session["OrgID"]));
            //            }
            //        }
            //    }

            //}

            //GetData();
            //gvExp.DataSource = dt;
            //gvExp.DataBind();

            //if (gvExp.Rows.Count == 0)
            //{
            //    btnSave.Visible = false;
            //    btnSubmit.Visible = false;
            //}
            //else
            //{
            //    btnSave.Visible = true;
            //    btnSubmit.Visible = true;
            //}
            popup.Show();
        }
    }

    protected void gvExp_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        if (gvExp.Rows.Count > 1)
        {
            hdnRowIndex.Value = e.RowIndex.ToString();
            dt = (DataTable)Session["dt"];
            hdnSeq1.Value = dt.Rows[e.RowIndex]["expLineNo"].ToString();
            Session["popup"] = "false";
            Session["auto"] = "false";
            CalculateTotals();
            popAlert.Show();
            popup_EditAuto.Hide();
        }
        else
        {
            dvError.InnerHtml = "You cannot delete single line item.";
            dvError.Style["color"] = "Red";
        }
    }

    protected void gvExp_RowEditing(object sender, GridViewEditEventArgs e)
    {
    }

    protected void gvExp_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvExp.PageIndex = e.NewPageIndex;
        dt = (DataTable)Session["dt"];
        GetData();
        CalculateTotals();
        popup.Show();
    }

    protected void gvExp_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            statusCnt = Convert.ToInt32(Session["statusID"]);
            LinkButton lnkEdit = (LinkButton)e.Row.FindControl("lnkEdit");
            LinkButton lnkview = (LinkButton)e.Row.FindControl("lnkview");
            LinkButton lnkDelete = (LinkButton)e.Row.FindControl("lnkDelete");
            if (lnkEdit != null && lnkview != null)
            {
                if (statusCnt == 3 || statusCnt == 5 || statusCnt == 6)
                {
                    lnkEdit.Visible = true;
                    lnkDelete.Visible = true;
                }
                else
                {
                    lnkEdit.Visible = false;
                    lnkDelete.Visible = false;
                }
            }

            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            if (hdnSeq != null)
            {
                LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
                if (Convert.ToInt32(hdnAttCnt.Value) > 0)
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }

            Label lblCity = (Label)e.Row.FindControl("lblCity");
            if (lblCity != null && lblCity.Text == "Other")
                lblCity.Visible = false;

            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            HtmlControl td1 = (HtmlControl)e.Row.FindControl("td1");
            HtmlControl td2 = (HtmlControl)e.Row.FindControl("td2");
            HtmlControl td3 = (HtmlControl)e.Row.FindControl("td3");
            HtmlControl td4 = (HtmlControl)e.Row.FindControl("td4");
            HtmlControl td5 = (HtmlControl)e.Row.FindControl("td5");
            HtmlControl td6 = (HtmlControl)e.Row.FindControl("td6");
            HtmlControl td7 = (HtmlControl)e.Row.FindControl("td7");
            HtmlControl td8 = (HtmlControl)e.Row.FindControl("td8");

            DataSet dsCodes = new DataSet();
            DataTable dt = new DataTable();
            DataView view;
            if (Session["dsCodes"] != null)
            {
                dsCodes = (DataSet)Session["dsCodes"];
                string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
                view = new DataView(dsCodes.Tables[0], expr, "CodeValue1", DataViewRowState.CurrentRows);
                dt = view.ToTable();
            }
            else
            {
                string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
                List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
                dsCodes.Tables.Add(Utility.ConvertToDataTable(lstExp));
                dt = dsCodes.Tables[0];
            }
            string lmt = dt.Rows[0]["CodeValue2"].ToString();
            if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            {
                if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
                {
                    e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
                    td1.Style["background-color"] = "#FFCCCC";
                    td2.Style["background-color"] = "#FFCCCC";
                    td3.Style["background-color"] = "#FFCCCC";
                    td4.Style["background-color"] = "#FFCCCC";
                    td5.Style["background-color"] = "#FFCCCC";
                    td6.Style["background-color"] = "#FFCCCC";
                    td7.Style["background-color"] = "#FFCCCC";
                    td8.Style["background-color"] = "#FFCCCC";
                }
            }
            else
            {
                if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
                {
                    e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
                    td1.Style["background-color"] = "#FFCCCC";
                    td2.Style["background-color"] = "#FFCCCC";
                    td3.Style["background-color"] = "#FFCCCC";
                    td4.Style["background-color"] = "#FFCCCC";
                    td5.Style["background-color"] = "#FFCCCC";
                    td6.Style["background-color"] = "#FFCCCC";
                    td7.Style["background-color"] = "#FFCCCC";
                    td8.Style["background-color"] = "#FFCCCC";
                }
            }
            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
                lblExpDate.Text = lblFromDate.Text;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    void CalculateTotals()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;//autoTotal = 0; 

        if (Session["Auto"] != "2")
        {
            if (Session["autoTotal"] != null)
                autoTotal = Convert.ToDouble(Session["autoTotal"]);
        }
        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);

            //if (autoTotal == 0)
            //{
            //    HiddenField hdnAmount = (HiddenField)row1.FindControl("hdnAmount");
            //    if (Convert.ToDouble(hdnAmount.Value) != 0)
            //    {
            //        Session["autoTotal"] = hdnAmount.Value;
            //        autoTotal = Convert.ToDouble(hdnAmount.Value);
            //    }
            //    else
            //        autoTotal = Convert.ToDouble(Session["autoTotal"]);
            //}
        }

        grandTotal = expTotal + preExpTotal;// + autoTotal

        //if (autoTotal == 0)
        //    lbtnAuto.Visible = false;
        //else
        //    lbtnAuto.Visible = true;

        if (expTotal == 0)
            grandTotal = preExpTotal;// + autoTotal;
        else
            grandTotal = expTotal;// +autoTotal;

        lblGrandTotalAmnt.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblGrandTotal.Style["color"] = lblGrandTotalAmnt.Style["color"] = "Red";
            lblGrandTotal.ToolTip = lblGrandTotalAmnt.ToolTip = "Amount has exceeded the maximum limit.";
        }
        else
        {
            lblGrandTotal.Style["color"] = lblGrandTotalAmnt.Style["color"] = "Green";
            lblGrandTotal.ToolTip = lblGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
    }

    protected void btnConvert_Click(object sender, EventArgs e)
    {
        xms.convertPAToExp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session.Remove("PreApproval");
        popup.Show();
        dvError.Visible = true;
        dvError.InnerHtml = "Message: Your Request has been converted from Pre-Approval to Normal Expense.";
        dvError.Style["color"] = "Green";
        btnSubmit.Visible = true;
        btnAppend.Visible = true;
        btnSave.Visible = true;
        dvExpDetails.Visible = true;
        btnConvert.Visible = false;
        Session["statusID"] = "3";
        Session["Status"] = "Saved";
        spnStatus.Style.Add("color", "Blue");
        Session.Remove("dsSt");
        CalculateTotals();
        btnSave.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','1');");
        btnSubmit.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','1');");
        btnAddExpense.Attributes.Add("onclick", "javascript:return ValidationExpMaster();");
        SortGrid();
        lblHeading.Text = "Edit Expense";
        gvExp.DataSource = Session["dt"];
        gvExp.DataBind();
        btnAddExpense.Visible = true;
    }

    protected void btnClose_Click(object sender, EventArgs e)
    {
        ClearFields();
        popup.Hide();
    }

    protected void ddlExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;

        if (ddl.ID == "ddlExpType")
        {
            //if (ddlExpType.SelectedValue == "JOB")
            //{
            //     dvJob.Style["display"] = "block";

            //    BindJobs(ddlJobs);
            //}
            //else if (ddlExpType.SelectedValue == "GENERAL")
            //{
            //    dvJob.Style["display"] = "none";
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";

            //    ddlJobs.Items.Clear();
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();

            //}
            //else
            //{
            //    ddlJobs.Items.Clear();
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();

            //    dvJob.Style["display"] = "none";
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";
            //}
            //CalculateTotals();
            //RetainFields();
        }
        else
        {
            if (ddl.SelectedValue == "JOB")
            {
                dvEditJob.Style["display"] = "block";
                BindJobs(ddlEditJobs);
            }
            else if (ddl.SelectedValue == "GENERAL")
            {
                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";

                ddlEditJobs.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();
            }
            else
            {
                ddlEditJobs.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();

                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            popup_Edit.Show();
        }
        CalculateTotals();
        popup.Show();
    }

    protected void ddlJobs_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlJobs")
        {
            //if (ddlJobs.SelectedValue == "0")
            //{
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";
            //}
            //else
            //{
            //    dvPhs.Style["display"] = "block";
            //    BindPhases(ddlPhases, ddlJobs);
            //}
            //CalculateTotals();
            //RetainFields();
        }
        else
        {
            if (ddlEditJobs.SelectedValue == "0")
            {
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditPhs.Style["display"] = "block";
                BindPhases(ddlEditPhases, ddlEditJobs);
            }
            popup_Edit.Show();
        }
        CalculateTotals();
        popup.Show();
    }

    protected void ddlPhases_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;

        if (ddl.ID == "ddlPhases")
        {
            //if (ddlPhases.SelectedValue == "0")
            //{
            //    ddlCategories.Items.Clear();
            //    dvJC.Style["display"] = "none";
            //}
            //else
            //{
            //    dvJC.Style["display"] = "block";
            //    BindCategories(ddlCategories, ddlPhases);
            //}
            //CalculateTotals();
            //RetainFields();
        }
        else
        {
            if (ddlEditPhases.SelectedValue == "0")
            {
                ddlEditCategories.Items.Clear();
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditJC.Style["display"] = "block";
                BindCategories(ddlEditCategories, ddlEditPhases);
            }
            popup_Edit.Show();
        }
        CalculateTotals();
        popup.Show();
    }

    protected void ddlExpenseItem_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        DataSet dsCodes = (DataSet)Session["dsCodes"];

        string expr = "CodeID = 'EXPITEM' and Description = '" + ddl.SelectedItem.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeValue1", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        if (dt.Rows.Count > 0)
        {
            hdnAcc.Value = dt.Rows[0]["CodeValue1"].ToString();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();
        }
        else
        {
            hdnAcc.Value = string.Empty;
            hdnExpItem.Value = string.Empty;
        }

        Session["Sectiondt"] = GetExpItemSections(dsCodes.Tables[0]);

        ddlEditCity.SelectedValue = "0";
        ddlEditFromcity.SelectedValue = "0";
        ddlEditTocity.SelectedValue = "0";
        dvEditVendor.Style["display"] = "none";
        dvEditAgName.Style["display"] = "none";
        dvEditItNo.Style["display"] = "none";

        RetainFields();
        popup_Edit.Show();
        popup.Show();
    }

    DataView GetExpItemSections(DataTable dt)
    {
        DataTable dt1 = dt;
        dt1.DefaultView.RowFilter = "CodeID LIKE '%EXPITEMSECTION%'";
        DataTable dt2 = dt1.DefaultView.ToTable();
        dt2.DefaultView.RowFilter = "CODEKEY = '" + hdnExpItem.Value + "'";
        DataTable dt3 = dt2.DefaultView.ToTable();

        DataView view1 = dt3.DefaultView;
        view1.Sort = "CodeID Asc";
        return view1.ToTable().Rows.Count > 0 ? view1 : null;
    }

    protected void CitiesSelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddlCity = sender as DropDownList;

        DataView view = (DataView)Session["Sectiondt"];
        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, ddlCity.SelectedItem.Text);
                ddlEditAgName.Items.Clear();
                RetainVendorFields();
            }
        }

        if (ddlCity.ID == "ddlEditCity")
        {
            if (ddlCity.SelectedItem.Text == "Other")
                txtEditOtherCity.Visible = true;
            else
                txtEditOtherCity.Visible = false;
        }
        else
        {
            if (ddlCity.SelectedItem.Text == "Other")
                txtEditOtherFromCity.Visible = true;
            else
                txtEditOtherFromCity.Visible = false;
        }
        if (ddlEditTocity.SelectedItem.Text == "Other")
            dvEditToOther.Style["display"] = "block";
        else
            dvEditToOther.Style["display"] = "none";
        popup.Show();
        popup_Edit.Show();
    }

    protected void btnCommentsSave_Click(object sender, EventArgs e)
    {
        if (txtPopComments.Text != string.Empty)
        {
            int uID = 0;

            //if (Session["AppFlag"].ToString() == "N")
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        uID = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        uID = Convert.ToInt32(Session["UserID"]);
            //}
            //else
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true")
            //        uID = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        uID = Convert.ToInt32(Session["UserID"]);
            //}
            if (Session["AppFlag"].ToString() == "N")
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
                    uID = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    uID = Convert.ToInt32(Session["UserID"]);
            }
            else
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["UserID_APNull"] == "1" && Session["IsManager"] != null))
                    uID = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    uID = Convert.ToInt32(Session["UserID"]);
            }

            string retCmt = xms.addComment(Convert.ToInt32(Session["ReqID"]), txtPopComments.Text, Convert.ToInt32(Session["OrgID"]), uID);
            txtPopComments.Text = string.Empty;
            popup_Comments.Hide();

            Session["SeqCnt"] = "0";
            reqId = Convert.ToInt32(Session["ReqID"]);
            dt = (DataTable)Session["dt"];

            ExpeseDetailsVO addexp = new ExpeseDetailsVO();
            addexp.reqId = reqId;
            addexp.expItem = string.Empty;
            addexp.expLineNo = 0;
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Convert.ToInt32(Session["OrgID"]);
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPurpose.Text;
            addexp.preAmount = 0;
            addexp.currency = string.Empty;
            addexp.status = string.Empty;
            addexp.statusId = 0;
            addexp.managerId = Convert.ToInt32(ddlManagerEmail.SelectedValue);
            addexp.startDate = txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (Convert.ToBoolean(Session["PreApproval"]) == false ? 0 : 1);
            addexp.actualAmount = 0;
            addexp.othercity = string.Empty;
            addexp.detailsFlag = 0;
            addexp.masterFlag = 1;
            addexp.automileageFlag = 0;
            addexp.agentName = string.Empty;
            addexp.bookedDate = string.Empty;
            addexp.fromCity = string.Empty;
            addexp.otherFromCity = string.Empty;
            addexp.toCity = string.Empty;
            addexp.otherToCity = string.Empty;
            addexp.preferredVendor = string.Empty;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            //if (Session["AppFlag"].ToString() == "N")
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            //else
            //{
            //    if (Session["IsAdmin"].ToString().ToLower() == "true")
            //        addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
            //    else
            //        addexp.userId = Convert.ToInt32(Session["UserID"]);
            //}
            if (Session["AppFlag"].ToString() == "N")
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }
            else
            {
                if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["UserID_APNull"] == "1" && Session["IsManager"] != null))
                    addexp.userId = Convert.ToInt32(Session["UserID_Mgr"]);
                else
                    addexp.userId = Convert.ToInt32(Session["UserID"]);
            }


            //addexp.amtSpent = 0;
            //addexp.apReview = string.Empty;
            //addexp.codeId = string.Empty;
            //addexp.codeValue = string.Empty;
            //addexp.exp = string.Empty;
            addexp.LNorm = 0;
            //addexp.managerEmail = string.Empty;
            addexp.reimbt = 0;
            addexp.stateId = string.Empty;
            addexp.totTrip = 0;
            addexp.accountCode = string.Empty;
            addexp.lastUpdSource = "Web";
            string retStr = xms.addExpense(addexp);

            ddlManagerEmail.SelectedIndex = 0;

            //DataSet dsAtt = eBLL.GetSeqAtt_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            //for (int k = 0; k < dsAtt.Tables[0].Rows.Count; k++)
            //{
            // DataSet ds = eBLL.GetAtt_Temp(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), Convert.ToInt32(Session["OrgID"]));
            // resultFileNames = (Directory.GetFiles(Server.MapPath(newPath)).Select(f => Path.GetFileName(f))).ToArray();
            // foreach (string fileName in resultFileNames)
            // {
            // for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            // {
            // string fromFile = reqId.ToString() + "_" + Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]) + "_" + Session["OrgID"] + "_" + ds.Tables[0].Rows[i]["OrgFName"].ToString();
            // if (fileName.Contains(fromFile))
            // {
            // if (System.IO.File.Exists(ds.Tables[0].Rows[i]["FileName"].ToString()))
            // {
            // string toFile = Server.MapPath("Attachments") + "\\" + fromFile;
            // System.IO.File.Move(ds.Tables[0].Rows[i]["FileName"].ToString(), toFile);
            // eBLL.AddAttachments(reqId, Convert.ToInt32(dsAtt.Tables[0].Rows[k]["ExpID"]), toFile, ds.Tables[0].Rows[i]["OrgFName"].ToString(), Convert.ToInt32(Session["OrgID"]));
            // }
            // }
            // }
            // }
            //}

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearFields();
            gvExp.DataSource = dt;
            CalculateTotals();
            Session.Remove("dsSt");
            SortGrid();
            dvExpDetails.Visible = false;
            btnSave.Visible = false;
            btnSubmit.Visible = false;
            btnAppend.Visible = false;
            dvError.Visible = true;
            dvError.InnerHtml = retStr;
            //dvError.InnerHtml = "Message: Your request details have been submitted.";
            if (retStr.ToLower().Contains("fail"))
                dvError.Style["color"] = "Red";
            else
                dvError.Style["color"] = "Green";

            popup.Show();
            lblHeading.Text = "View Expense";

            if (retStr.Contains("AP Review"))
            {
                Session["Status"] = "AP Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 2;
            }
            else if (retStr.Contains("Manager Review"))
            {
                Session["Status"] = "Manager Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 1;
            }
            gvExp.DataBind();
        }
        else
        {
            dvErrorc.Style["color"] = "Red";
            dvErrorc.InnerHtml = "Please provide comments.";
            popup_Comments.Show();
        }
        popup.Show();
    }

    protected void DeleteExpItem(object sender, EventArgs e)
    {
        if (Session["auto"].ToString() == "false")
        {
            int index = Convert.ToInt32(hdnRowIndex.Value);
            int seq = Convert.ToInt32(hdnSeq1.Value);
            dt = (DataTable)Session["dt"];
            dt.Rows[index].Delete();
            dt.AcceptChanges();
            Session["dt"] = dt;
            xms.deleteExpense(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]));

            //DataSet ds = eBLL.GetAtt_Temp(reqId, Convert.ToInt32(hdnSeq1.Value), Convert.ToInt32(Session["OrgID"]));
            //resultFileNames = (Directory.GetFiles(Server.MapPath(newPath)).Select(f => Path.GetFileName(f))).ToArray();
            //foreach (string fileName in resultFileNames)
            //{
            //    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            //    {
            //        if (fileName.Contains(reqId.ToString() + "_" + Convert.ToInt32(hdnSeq1.Value) + "_" + Session["OrgID"] + "_" + ds.Tables[0].Rows[i]["OrgFName"].ToString()))
            //        {
            //            if (System.IO.File.Exists(ds.Tables[0].Rows[i]["FileName"].ToString()))
            //            {
            //                System.IO.File.Delete(ds.Tables[0].Rows[i]["FileName"].ToString());
            //                eBLL.Delete_Temp(reqId, Convert.ToInt32(hdnSeq1.Value), Convert.ToInt32(Session["OrgID"]));
            //            }
            //        }
            //    }
            //}

            GetData();
            if (gvExp.Rows.Count == 0)
            {
                btnSave.Visible = false;
                btnSubmit.Visible = false;
            }
            else
            {
                btnSave.Visible = true;
                btnSubmit.Visible = true;
            }
            popup.Show();
            CalculateTotals();
            Session.Remove("dsSt");
            SortGrid();
            LoadEditData(null);
            dvError.InnerHtml = "Expense deleted successfully.";
            dvError.Style["color"] = "Green";
        }
        else
        {
            int index = Convert.ToInt32(hdnRowIndex.Value);
            int autoid = Convert.ToInt32(Session["AutoId"]);
            dt_Auto = (DataTable)Session["dt_Auto"];
            dt_Auto.Rows[index].Delete();
            dt_Auto.AcceptChanges();
            Session["dt_Auto"] = dt_Auto;

            GetData_Auto();
            //if (autoid != null)
            //    xms.deleteAutodetails(Convert.ToInt32(Session["ReqID"]), autoid.ToString());

            if (gvEditAuto.Rows.Count > 0)
                btnAutoSave.Visible = true;
            else
                btnAutoSave.Visible = false;

            popup_EditAuto.Hide();
            popup_Auto.Show();
            if (Session["Auto"] != "2")
                popup.Show();
        }
    }

    protected void RetainDialog(object sender, EventArgs e)
    {
        CalculateTotals();
        if (Session["auto"].ToString() == "false")
        {
            popup.Show();
            if (Session["popup"].ToString() == "true")
                popup_Edit.Show();
        }
        else
        {
            if (Session["popup"].ToString() == "true")
                popup_EditAuto.Show();
            if (Session["Auto"] != "2")
                popup.Show();
            popup_Auto.Show();
        }
        popAlert.Hide();
    }

    protected void ReloadEditData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        LoadEditData(null);
    }

    void RetainFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditED.Style["display"] = "block";
                hdnCodeValue2.Value = dt.Rows[0]["CodeValue2"].ToString();
            }
            else
            {
                dvEditED.Style["display"] = "none";
                txtEditExpDate.Text = string.Empty;
                hdnCodeValue2.Value = string.Empty;
            }

            if (dt.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditFD.Style["display"] = "block";
                dvEditTD.Style["display"] = "block";
                hdnCodeValue3.Value = dt.Rows[0]["CodeValue3"].ToString();
            }
            else
            {
                dvEditFD.Style["display"] = "none";
                dvEditTD.Style["display"] = "none";
                txtEditFromdate.Text = string.Empty;
                txtEditTodate.Text = string.Empty;
                hdnCodeValue3.Value = string.Empty;
            }

            if (dt.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Style["display"] = "block";
                hdnCodeValue4.Value = dt.Rows[0]["CodeValue4"].ToString();
            }
            else
            {
                dvEditCV.Style["display"] = "none";
                hdnCodeValue4.Value = string.Empty;
            }

            if (dt.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Style["display"] = "block";
                dvEditToCity.Style["display"] = "block";
                hdnCodeValue5.Value = dt.Rows[0]["CodeValue5"].ToString();
            }
            else
            {
                dvEditFromcity.Style["display"] = "none";
                dvEditToCity.Style["display"] = "none";
                hdnCodeValue5.Value = string.Empty;
            }

            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Style["display"] = "block";
                dvEditLN.Style["display"] = "block";
                hdnCodeValue6.Value = dt.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvEditTT.Style["display"] = "none";
                dvEditLN.Style["display"] = "none";
                txtEditTotTrip.Text = string.Empty;
                txtEditLNorm.Text = string.Empty;
                hdnCodeValue6.Value = string.Empty;
            }
        }
        else
        {
            dvEditED.Style["display"] = "none";
            dvEditFD.Style["display"] = "none";
            dvEditTD.Style["display"] = "none";
            dvEditCV.Style["display"] = "none";
            dvEditFromcity.Style["display"] = "none";
            dvEditToCity.Style["display"] = "none";
            dvEditTT.Style["display"] = "none";
            dvEditLN.Style["display"] = "none";
            txtEditTotTrip.Text = string.Empty;
            txtEditLNorm.Text = string.Empty;
            txtEditReimbt.Text = string.Empty;
            txtEditFromdate.Text = string.Empty;
            txtEditTodate.Text = string.Empty;
            txtEditItNo.Text = string.Empty;
        }

    }

    void RetainVendorFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y" && ddlEditPreVendor.Items.Count > 1)
            {
                dvEditVendor.Style["display"] = "block";
                dvEditAgName.Style["display"] = "block";
                dvEditItNo.Style["display"] = "block";
                hdnCodeValue1.Value = dt.Rows[0]["CodeValue1"].ToString();
            }
            else
            {
                dvEditVendor.Style["display"] = "none";
                dvEditAgName.Style["display"] = "none";
                dvEditItNo.Style["display"] = "none";
                hdnCodeValue1.Value = string.Empty;
            }
        }
        else
        {
            dvEditVendor.Style["display"] = "none";
            dvEditAgName.Style["display"] = "none";
            dvEditItNo.Style["display"] = "none";
        }
    }

    void BlockFields()
    {
        dvEditFromcity.Style["display"] = "none";
        dvEditToCity.Style["display"] = "none";
        dvEditFD.Style["display"] = "none";
        dvEditTD.Style["display"] = "none";
        dvEditED.Style["display"] = "none";
        dvEditCV.Style["display"] = "none";
        dvEditTT.Style["display"] = "none";
        dvEditLN.Style["display"] = "none";
        dvEditReimbt.Style["display"] = "none";
        dvEditFromOther.Style["display"] = "none";
        dvEditToOther.Style["display"] = "none";
        dvEditVendor.Style["display"] = "none";
        dvEditAgName.Style["display"] = "none";
        dvEditItNo.Style["display"] = "none";
        dvEditOtherCity.Style["display"] = "none";
    }

    void BlockViewFields()
    {
        dvEditVPreVendor.Style["display"] = "none";
        dvEditVAgName.Style["display"] = "none";
        dvEditVItNo.Style["display"] = "none";
        dvEditVED.Style["display"] = "none";
        dvEditVCV.Style["display"] = "none";
        SpVOthercity.Style["display"] = "none";
        dvEditVFromcity.Style["display"] = "none";
        dvEditVFromOther.Style["display"] = "none";
        dvEditVToCity.Style["display"] = "none";
        dvEditVToOther.Style["display"] = "none";
        dvEditVFD.Style["display"] = "none";
        dvEditVTD.Style["display"] = "none";
        dvEditVTT.Style["display"] = "none";
        dvEditVLN.Style["display"] = "none";
        dvEditVReimbt.Style["display"] = "none";
        dvEditVPA.Style["display"] = "none";
    }

    # region Export

    void SendMail(StringWriter stw)
    {
        MailMessage mail = new MailMessage();
        mail.IsBodyHtml = true;
        mail.To.Add(new MailAddress("rajesh@xtramilesoft.com"));
        mail.Subject = "Expense Report";
        System.Text.Encoding Enc = System.Text.Encoding.ASCII;
        //byte[] mBArray = Enc.GetBytes(stw.ToString());
        byte[] mBArray = (from ch in stw.ToString() select (byte)ch).ToArray();
        System.IO.MemoryStream mAtt = new System.IO.MemoryStream(mBArray, false);
        mail.Attachments.Add(new Attachment(mAtt, "Rajesh_Vemunoori_ExpenseReport.pdf", System.Net.Mime.MediaTypeNames.Application.Pdf));
        mail.Body = "Hi! </br></br> Attached is your Expense Report.";
        SmtpClient smtp = new SmtpClient();
        mail.From = new MailAddress("support@xtramilesoft.com", "Xtramilesoft");
        smtp.Host = "smtp.bizmail.yahoo.com";
        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        smtp.UseDefaultCredentials = true;
        smtp.Credentials = new System.Net.NetworkCredential(@"support@xtramilesoft.com", "xms123@test");
        smtp.EnableSsl = false;
        smtp.Send(mail);
    }

    protected void Export(object sender, EventArgs e)
    {
        Print();
        dvError.Visible = true;
        dvError.InnerHtml = "Expense Details Exported sucessfully and send to registerd mail";
        popup.Show();
    }


    void Print()
    {
        dt = (DataTable)Session["dt"];

        //create dynamic gridview
        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dt;

        //Create bound fields
        BoundField dgc_reqId = new BoundField();
        dgc_reqId.DataField = "reqId";
        dgc_reqId.HeaderText = "RequestID";
        dgDgrid.Columns.Add(dgc_reqId);

        BoundField dgc_expItem = new BoundField();
        dgc_expItem.DataField = "expItem";
        dgc_expItem.HeaderText = "Expense Item";
        dgDgrid.Columns.Add(dgc_expItem);

        BoundField dgc_expDate = new BoundField();
        dgc_expDate.DataField = "expDate";
        dgc_expDate.HeaderText = "Expense Date";
        dgDgrid.Columns.Add(dgc_expDate);

        BoundField dgc_fromDate = new BoundField();
        dgc_fromDate.DataField = "fromDate";
        dgc_fromDate.HeaderText = "From Date";
        dgDgrid.Columns.Add(dgc_fromDate);

        BoundField dgc_cities = new BoundField();
        dgc_cities.DataField = "citiesVstd";
        dgc_cities.HeaderText = "Cities Visited";
        dgDgrid.Columns.Add(dgc_cities);

        BoundField dgc_fromCity = new BoundField();
        dgc_fromCity.DataField = "fromCity";
        dgc_fromCity.HeaderText = "From City";
        dgDgrid.Columns.Add(dgc_fromCity);

        BoundField dgc_preAmount = new BoundField();
        dgc_preAmount.DataField = "preAmount";
        dgc_preAmount.HeaderText = "Amount";
        dgDgrid.Columns.Add(dgc_preAmount);

        BoundField dgc_actAmount = new BoundField();
        dgc_actAmount.DataField = "actualAmount";
        dgc_actAmount.HeaderText = "Actual Amount";
        dgDgrid.Columns.Add(dgc_actAmount);

        BoundField dgc_payMode = new BoundField();
        dgc_payMode.DataField = "payMode";
        dgc_payMode.HeaderText = "Payment Mode";
        dgDgrid.Columns.Add(dgc_payMode);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();
        dgDgrid.Caption = "<b>Rajesh Vemunoori Expense Details</b>";

        ////Generate Microsoft Excel file
        //Response.Clear();
        //Response.AddHeader("content-disposition", "attachment;filename= Rajesh_Vemunoori_ExpenseReport.xls");
        //Response.Charset = "";
        //Response.ContentType = "application/vnd.xls";
        //System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        //stringWrite.WriteLine("<table ><tr><td>" + dgDgrid.Caption + "</td></tr><br/><tr><td><b>TripStartDate:</b>6/21/2013</td></tr><br/><tr><td><b>Purpose:</b>Business</td></tr></table>");
        //System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        //dgDgrid.RenderControl(htmlWrite);
        //SendMail(stringWrite);
        ////Response.Write(stringWrite.ToString());
        ////Response.End();


        //Generate PDF file
        //Response.ContentType = "application/pdf";
        //Response.AddHeader("content-disposition", "attachment;filename= " + Session["username"] + "_ExpenseReport.pdf");
        //Response.Cache.SetCacheability(HttpCacheability.NoCache);
        StringWriter sw = new StringWriter();
        sw.WriteLine("<table align=center><tr><td>" + dgDgrid.Caption + "</td></tr></table>");
        sw.WriteLine("<br /><br />");
        HtmlTextWriter hw = new HtmlTextWriter(sw);
        sw.WriteLine("<table ><tr><td>" + dgDgrid.Caption + "</td></tr><br/><tr><td><b>TripStartDate:</b>" + txtTripStartDate.Text + "</td></tr><br/><tr><td><b>Purpose:</b>" + txtPurpose.Text + "</td></tr></table>");
        dgDgrid.RenderControl(hw);
        StringReader sr = new StringReader(sw.ToString());
        Document pdfDoc = new Document(PageSize.A5, 10f, 10f, 10f, 0f);
        HTMLWorker htmlparser = new HTMLWorker(pdfDoc);
        PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
        pdfDoc.Open();
        pdfDoc.AddHeader("Head", "Project Report");
        htmlparser.Parse(sr);
        pdfDoc.Close();
        SendMail(sw);
        //Response.Write(pdfDoc);
        //Response.End();
    }

    #endregion


    #endregion

    #region Edit Auto-Mileage

    protected void Auto(object sender, EventArgs e)
    {
        btnAutoAppend.Attributes.Add("onclick", "javascript:return validateAutoDetail();");
        if (Session["UserID"] == null)
        {
            ClientScript.RegisterStartupScript(this.GetType(), "RedirectScript", "window.parent.location = 'logout.aspx'", true);
        }
        Session.Remove("Status");
        Session["Auto"] = "2";
        dvAutoError.InnerHtml = string.Empty;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");

        HiddenField hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
        HiddenField hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
        HiddenField hdnStatus = (HiddenField)row.Cells[0].FindControl("hdStatus");
        HiddenField hdnStatusID = (HiddenField)row.Cells[0].FindControl("hdnStatusID");
        HiddenField hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
        HiddenField hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
        HiddenField hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");

        reqId = Convert.ToInt32(lblReqID.Text);
        Session["ReqID"] = reqId;
        hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
        hdtripStrtDate.Value = hdnStartDate.Value.ToString();

        DataSet dsCodes = new DataSet();
        DataTable dtCodes = new DataTable();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            
            dsCodes.Tables.Add(Utility.ConvertToDataTable(codes));
            dtCodes = dsCodes.Tables[0];
            Session["dsCodes"] = dtCodes;
        }else
            dtCodes = (DataTable)Session["dsCodes"];

        string exprPPM = "CodeID='PPM'";
        DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
        //ppm = Convert.ToInt32(viewPPM["CodeValue1"]);
        DataTable dtPpm = viewPPM.ToTable();
        ppm = Convert.ToDouble(dtPpm.Rows[0]["CodeValue1"]);
        Session["PPM"] = ppm;
        hdnPPM.Value = ppm.ToString();

        txtPurpose_Auto.Text = hdnPurpose.Value.ToString();
        txtTripStartDate_Auto.Text = hdnStartDate.Value.ToString();
        hdnExpType.Value = hdnPreApproved.Value.ToString();
        statusId = Convert.ToInt32(hdnStatusID.Value.ToString());
        Session["Status"] = hdnStatus.Value;
        BindAutoGrid();

        popup_Auto.Show();
    }

    protected void btnAutoSave_Click(object sender, EventArgs e)
    {
        AddAutoDetails();
        ClearFields_Auto();
        popup_Auto.Show();
    }

    void AddAutoDetails()
    {
        foreach (GridViewRow row1 in gvEditAuto.Rows)
        {
            string[] delChar;
            Label lblFrom = (Label)row1.FindControl("lblFrom");
            Label lblTo = (Label)row1.FindControl("lblTo");
            Label lblTravelDate = (Label)row1.FindControl("lblTravelDate");
            Label lblTotalTrip = (Label)row1.FindControl("lblTotalTrip");
            Label lblLessNorm = (Label)row1.FindControl("lblLessNorm");
            Label lblReimbt = (Label)row1.FindControl("lblReimbt");
            Label lblAutoId = (Label)row1.FindControl("lblAutoId");
            double ppm = Convert.ToDouble(hdnPPM.Value.ToString());
            double amnt = Convert.ToDouble((lblReimbt.Text)) * (ppm);


            //AutoDetailsVO autoDetails = new AutoDetailsVO();

            //int uID = 0;
            //if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
            //    uID = Convert.ToInt32(Session["UserID_Mgr"]);
            //else
            //    uID = Convert.ToInt32(Session["UserID"]);

            //autoDetails.userId = uID;

            //autoDetails.reqId = Convert.ToInt32(Session["ReqID"]);
            //autoDetails.from = lblFrom.Text;
            //autoDetails.to = lblTo.Text;
            //autoDetails.tDate = lblTravelDate.Text;
            //autoDetails.totTrip = Convert.ToDouble(lblTotalTrip.Text);
            //autoDetails.lNorm = Convert.ToDouble(lblLessNorm.Text);
            //autoDetails.reimbt = Convert.ToDouble(lblReimbt.Text);
            //autoDetails.amount = amnt;
            //autoDetails.autoId = ut.NullSafeInteger(lblAutoId.Text);
            //xms.addAutoMileage(autoDetails);

            //if (Session["delAuto"] != null)
            //{
            //    delAuto = Session["delAuto"].ToString();
            //    delChar = delAuto.Split('|');
            //    for (int i = 0; i < delChar.Length; i++)
            //    {
            //        xms.deleteAutodetails(Convert.ToInt32(Session["ReqID"]), delChar[i].ToString());
            //    }
            //}

            dvAutoError.InnerHtml = "Message: Your automileage details have been updated.";
            dvAutoError.Style["color"] = "Green";
        }
    }

    private void GetData_Auto()
    {
        gvEditAuto.DataSource = dt_Auto;
        gvEditAuto.DataBind();
    }

    protected void btnAutoAppend_Click(object sender, EventArgs e)
    {
        if (txtEReimbt.Text.IndexOf('-') != 0)
        {
            hdnEReimbt.Value = txtEReimbt.Text;

            dvError.InnerHtml = "";
            if (Session["dt_Auto"] == null)
            {

                dt_Auto.Columns.Add("ExtensionData", Type.GetType("System.String"));
                dt_Auto.Columns.Add("Amount", Type.GetType("System.String"));
                dt_Auto.Columns.Add("AutoMileageID", Type.GetType("System.String"));
                dt_Auto.Columns.Add("CreatedOn ", Type.GetType("System.String"));
                dt_Auto.Columns.Add("From", Type.GetType("System.String"));
                dt_Auto.Columns.Add("LessNorm", Type.GetType("System.String"));
                dt_Auto.Columns.Add("ManagerID", Type.GetType("System.String"));
                dt_Auto.Columns.Add("OrgId", Type.GetType("System.String"));
                dt_Auto.Columns.Add("Purpose", Type.GetType("System.String"));
                dt_Auto.Columns.Add("Reimbursement", Type.GetType("System.String"));
                dt_Auto.Columns.Add("RequestId", Type.GetType("System.String"));
                dt_Auto.Columns.Add("StartDate", Type.GetType("System.String"));
                dt_Auto.Columns.Add("StatusId", Type.GetType("System.String"));
                dt_Auto.Columns.Add("TDate", Type.GetType("System.String"));
                dt_Auto.Columns.Add("To", Type.GetType("System.String"));
                dt_Auto.Columns.Add("TotalTrip", Type.GetType("System.String"));
                dt_Auto.Columns.Add("TravelDate", Type.GetType("System.String"));
                dt_Auto.Columns.Add("UserId", Type.GetType("System.String"));
            }
            else
                dt_Auto = (DataTable)Session["dt_Auto"];

            dr = dt_Auto.NewRow();

            dr[1] = Convert.ToDouble(hdnEReimbt.Value) * ppm;
            dr[2] = 0;
            dr[3] = DateTime.Now;
            dr[4] = txtEFrom.Text;
            dr[5] = txtELessNorm.Text;
            dr[6] = ddlManagerEmail_Auto.SelectedValue;
            dr[7] = Convert.ToInt32(Session["OrgID"]);
            dr[8] = txtPurpose_Auto.Text;
            dr[9] = txtEReimbt.Text;
            dr[10] = reqId;
            dr[11] = txtTripStartDate_Auto.Text;
            dr[12] = 3;
            dr[13] = DateTime.Now;
            dr[14] = txtETo.Text;
            dr[15] = txtETotTrip.Text;
            dr[16] = txtETravelDate.Text;
            dr[17] = Convert.ToInt32(Session["UserID"]);
            //dr[9] = Convert.ToDouble(txtEReimbt.Text) * ppm;
            dt_Auto.Rows.Add(dr);
            dt_Auto.AcceptChanges();
            Session["dt_Auto"] = dt_Auto;
            this.GetData_Auto();
            ClearFields_Auto();
            btnAutoSave.Visible = true;
        }
        else
            dvAutoError.InnerHtml = "Lessnorm cannot be more then Total trip.";

        popup_Auto.Show();
    }

    void ClearFields_Auto()
    {
        txtEFrom.Text = string.Empty;
        txtETo.Text = string.Empty;
        txtETravelDate.Text = string.Empty;
        txtETotTrip.Text = string.Empty;
        txtELessNorm.Text = string.Empty;
        txtEReimbt.Text = string.Empty;
    }

    protected void gvEditAuto_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvEditAuto.PageIndex = e.NewPageIndex;
        dt_Auto = (DataTable)Session["dt_Auto"];
        gvEditAuto.DataBind();
        popup_Auto.Show();
    }

    protected void gvEditAuto_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Edit")
        {
        }
        else if (e.CommandName == "Update")
        {
            btnAutoSave.Visible = true;
            btnAutoAppend.Visible = true;
            popup_Auto.Show();
        }
        else if (e.CommandName == "Delete")
        {
            string[] arg = new string[2];
            arg = e.CommandArgument.ToString().Split(';');
            int index = Convert.ToInt32(arg[0]);
            dt_Auto = (DataTable)Session["dt_Auto"];
            dt_Auto.Rows[index].Delete();
            dt_Auto.AcceptChanges();
            GetData_Auto();
            if (arg[1] != string.Empty)
            {
                int aId = Convert.ToInt32(arg[1]);
                Session["delAuto"] = aId;
                delAuto += Session["delAuto"].ToString() + "|";
                delAuto = delAuto.TrimEnd('|');
                Session["delAuto"] = delAuto;
            }

            if (gvEditAuto.Rows.Count > 0)
                btnSave.Visible = true;
            else
                btnSave.Visible = false;
        }
        else if (e.CommandName == "Cancel")
        {

        }
    }

    protected void gvEditAuto_RowEditing(object sender, GridViewEditEventArgs e)
    {
        gvEditAuto.EditIndex = e.NewEditIndex;
        dt_Auto = (DataTable)Session["dt_Auto"];
        GetData_Auto();
        btnAutoSave.Visible = false;
        btnAutoAppend.Visible = false;
        dvAutoError.InnerHtml = "";
        popup_Auto.Show();
    }

    protected void gvEditAuto_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {
        int index = e.RowIndex;
        dt_Auto = (DataTable)Session["dt_Auto"];
        TextBox EFrom = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditFrom") as TextBox;
        TextBox ETo = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditTo") as TextBox;
        TextBox ETravelDate = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditTravelDate") as TextBox;
        TextBox ETotTrip = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditTotTrip") as TextBox;
        TextBox ELessNorm = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditLessNorm") as TextBox;
        Label EReimbt = gvEditAuto.Rows[e.RowIndex].FindControl("txtEditReimbt") as Label;
        HiddenField hdnEReimbt = gvEditAuto.Rows[e.RowIndex].FindControl("hdnEReimbt") as HiddenField;

        int i;
        for (i = 0; i < dt_Auto.Rows.Count; i++)
        {
            if (i == index)
            {
                dt_Auto.Rows[i][0] = EFrom.Text;
                dt_Auto.Rows[i][1] = ETo.Text;
                dt_Auto.Rows[i][2] = ETravelDate.Text;
                dt_Auto.Rows[i][3] = ETotTrip.Text;
                dt_Auto.Rows[i][4] = ELessNorm.Text;
                dt_Auto.Rows[i][5] = hdnEReimbt.Value;
                dt_Auto.Rows[i][7] = Convert.ToDouble(hdnEReimbt.Value) * Convert.ToDouble(hdnPPM.Value);

                dt_Auto.AcceptChanges();
            }
        }
        gvEditAuto.EditIndex = -1;
        GetData_Auto();
        popup_Auto.Show();
    }

    protected void gvEditAuto_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
    {
        gvEditAuto.EditIndex = -1;
        dt_Auto = (DataTable)Session["dt_Auto"];
        GetData_Auto();
        btnAutoSave.Visible = true;
        btnAutoAppend.Visible = true;
        popup_Auto.Show();
    }

    protected void gvEditAuto_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {

    }

    protected void gvEditAuto_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton btnEdit = (LinkButton)e.Row.FindControl("btnEdit");
            LinkButton btnDelete = (LinkButton)e.Row.FindControl("btnDelete");
            if (btnEdit != null && btnDelete != null)
            {
                if (Session["statusID"].ToString() == "3" || Session["statusID"].ToString() == "6" || Session["statusID"].ToString() == "5")
                {
                    btnEdit.Visible = true;
                    btnDelete.Visible = true;
                }
                else
                {
                    btnEdit.Visible = false;
                    btnDelete.Visible = false;
                }
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnAutoClose_Click(object sender, EventArgs e)
    {
        popup_Auto.Hide();
        ClearFields_Auto();
        reqId = Convert.ToInt32(Session["ReqID"]);
        if (Session["Auto"] == "1")
        {
            CalculateTotals();
            popup.Show();
        }
    }

    #endregion

    #region Comments

    protected void Comments(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        dvErrorc.InnerHtml = string.Empty;
        txtPopComments.Visible = false;
        btnCommentsSave.Visible = false;
        btnCommentsClose.Visible = true;
        widgetComments.Visible = true;
        widgetComments.InnerHtml = ShowPreviousComments();
        CalculateTotals();
        popup.Show();
        popup_Comments.Show();
    }

    string ShowPreviousComments()
    {
        var strCmnts = xms.getComments(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataSet dsComments = new DataSet();
        dsComments.Tables.Add(Utility.ConvertToDataTable(lstCmnts));

        string str = "<table width='100%'>";
        for (int i = 0; i < dsComments.Tables[0].Rows.Count; i++)
        {
            str += "<tr><td>" + dsComments.Tables[0].Rows[i]["Comments"] + "</td></tr><tr><td>&nbsp;</td></tr><tr><td style='color:Black;'><i>by " + dsComments.Tables[0].Rows[i]["Email"] + " on " + dsComments.Tables[0].Rows[i]["AddedOn"] + "</i></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
        }
        str += "</table>";
        return str;
    }

    protected void btnCommentsClose_Click(object sender, EventArgs e)
    {
        popup.Show();
        popup_Comments.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        dvAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq.Value));
        popup.Show();
        popup_Att.Show();
    }

    string Attachments(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        string str1 = string.Empty;
        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            str1 += "<a href='downloadFile.aspx?aid=" + ds.Tables[0].Rows[i]["attachmentId"] + "&ext=" + ds.Tables[0].Rows[i]["orgName"] + "&typ=" + 2 + "'>" + ds.Tables[0].Rows[i]["orgName"] + "</a></br>";

        return str1;
    }

    protected void btnAttClose_Click(object sender, EventArgs e)
    {
        CalculateTotals();
        popup.Show();
        popup_Att.Hide();
    }

    protected void DisplayLineAttachments(object sender, EventArgs e)
    {
        dvAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq1.Value));
        //popup.Show();
        popup_Edit.Show();
        popup_Att.Show();
    }

    #endregion

    #region Edit ExpenseItem

    protected void EditNewDetails(object sender, CommandEventArgs e)
    {
        Session.Remove("AttCnt");
        lblPopHeading.Text = "Edit Expense";
        ddlEditExpType.Focus();
        btnSaveExp.Visible = true;
        btnDelete.Visible = true;
        btnAppend.Visible = false;
        btnPrev.Visible = true;
        btnNext.Visible = true;
        int id = 0;
        if (hdnPreType.Value == "1")
            id = 2;
        else
            id = 1;
        btnSaveExp.Attributes.Add("onclick", "javascript:return validateExpLineItem('" + id + "', '');");
        dvExpError.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;
        lblEditAtt.Text = hdnAttCnt.Value;
        if (row.RowIndex == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (row.RowIndex == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;

        reqId = Convert.ToInt32(Session["ReqID"]);
        hdnSeq1.Value = hdnSeq.Value;

        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;
        GetExpItemData(dsExpEditDetails, index);
    }

    protected void btnSaveExp_Click(object sender, EventArgs e)
    {
        dvExpError.Visible = true;
        dvExpError.InnerHtml = string.Empty;
        dt = (DataTable)Session["dt"];
        DataTable dt_Temp = (DataTable)Session["dt_Temp"];
        if (fupd1.HasFile)
            str = UploadFiles(string.Empty, Convert.ToInt32(dt_Temp.Rows[0]["expLineNo"]));
        else
            str = "File exists";
        if (str != string.Empty)
        {
            string pre = string.Empty;
            if (hdnPreType.Value == "1")
                pre = "GENERAL";
            else
                pre = ddlEditExpType.SelectedValue;

            int edFlag = 0;
            if (ddlEditExpType.SelectedItem.Text != dt_Temp.Rows[0]["expType"].ToString())
                edFlag = 1;
            else if (ddlEditExpenseItem.SelectedItem.Text != dt_Temp.Rows[0]["expItem"].ToString())
                edFlag = 1;
            else if (txtEditExpDate.Text != dt_Temp.Rows[0]["expDate"].ToString())
                edFlag = 1;
            else if (txtEditPreAmnt.Text != dt_Temp.Rows[0]["preAmount"].ToString())
                edFlag = 1;
            else if (txtEditActAmnt.Text != dt_Temp.Rows[0]["actualAmount"].ToString())
                edFlag = 1;
            else if (ddlEditPaymentType.Text != dt_Temp.Rows[0]["payMode"].ToString())
                edFlag = 1;
            else if (dvEditCV.Style["display"] == "block")
            {
                if (ddlEditCity.SelectedItem.Text != dt_Temp.Rows[0]["citiesVstd"].ToString())
                    edFlag = 1;
            }
            else if (txtEditComments.Text != dt_Temp.Rows[0]["comments"].ToString())
                edFlag = 1;
            if (ddlEditCity.SelectedItem.Text == "Other")
            {
                if (txtEditOtherCity.Text != dt_Temp.Rows[0]["othercity"].ToString())
                    edFlag = 1;
            }
            if (ddlEditExpType.SelectedItem.Text == "JOB")
            {
                if (ddlEditJobs.SelectedItem.Text != dt_Temp.Rows[0]["jobCode"].ToString())
                    edFlag = 1;
                else if (ddlEditPhases.SelectedItem.Text != dt_Temp.Rows[0]["phaseCode"].ToString())
                    edFlag = 1;
                else if (ddlEditCategories.SelectedItem.Text != dt_Temp.Rows[0]["JCatCode"].ToString())
                    edFlag = 1;
            }
            if (dvEditVendor.Style["display"] == "block")
            {
                if (dt_Temp.Rows[0]["preferredVendor"].ToString() == string.Empty)
                    if (ddlEditPreVendor.SelectedItem.Text != "Please Select")
                        edFlag = 1;
            }
            if (dvEditAgName.Style["display"] == "block" && ddlEditAgName.Items.Count > 0)
            {
                if (dt_Temp.Rows[0]["agentName"].ToString() == string.Empty)
                    if (ddlEditAgName.SelectedItem.Text != "Please Select")
                        edFlag = 1;
            }
            if (dvEditItNo.Style["display"] == "block")
                if (txtEditItNo.Text != dt_Temp.Rows[0]["itinararyNo"].ToString())
                    edFlag = 1;
            if (dvEditFD.Style["display"] == "block")
                if (txtEditFromdate.Text != dt_Temp.Rows[0]["fromDate"].ToString())
                    edFlag = 1;
            if (dvEditTD.Style["display"] == "block")
                if (txtEditTodate.Text != dt_Temp.Rows[0]["toDate"].ToString())
                    edFlag = 1;
            if (dvEditTT.Style["display"] == "block")
                if (txtEditTotTrip.Text != dt_Temp.Rows[0]["totTrip"].ToString())
                    edFlag = 1;
            if (dvEditLN.Style["display"] == "block")
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["LNorm"].ToString())
                    edFlag = 1;
            if (dvEditReimbt.Style["display"] == "block")
                if (txtEditReimbt.Text != dt_Temp.Rows[0]["reimbt"].ToString())
                    edFlag = 1;
            if (dvEditFromcity.Style["display"] == "block")
                if (ddlEditFromcity.SelectedItem.Text != dt_Temp.Rows[0]["fromCity"].ToString())
                    edFlag = 1;
            if (dvEditToCity.Style["display"] == "block")
                if (ddlEditTocity.SelectedItem.Text != dt_Temp.Rows[0]["toCity"].ToString())
                    edFlag = 1;
            if (str.ToLower() == "y")
                edFlag = 1;
            if (edFlag == 1)
            {
                ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();
                expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
                expensedetails.expLineNo = Convert.ToInt32(hdnSeq1.Value);
                expensedetails.expItem = ddlEditExpenseItem.SelectedItem.Text;
                expensedetails.expDate = txtEditExpDate.Text;
                if (dvEditCV.Style["display"] == "block")
                {
                    if (ddlEditCity.SelectedValue == "0")
                        expensedetails.citiesVstd = string.Empty;
                    else if (ddlEditCity.SelectedItem.Text == "Other")
                    {
                        expensedetails.othercity = txtEditOtherCity.Text;
                        expensedetails.citiesVstd = ddlEditCity.SelectedItem.Text;
                    }
                    else
                        expensedetails.citiesVstd = ddlEditCity.SelectedItem.Text;
                }
                else
                {
                    if (ddlEditTocity.SelectedItem.Text == "Other")
                    {
                        expensedetails.othercity = txtEditOtherToCity.Text;
                        expensedetails.citiesVstd = ddlEditTocity.SelectedItem.Text;
                    }
                    else
                        expensedetails.citiesVstd = ddlEditTocity.SelectedItem.Text;
                }
                if (ddlEditCity.SelectedItem.Text == "Other")
                    expensedetails.othercity = txtEditOtherCity.Text;
                else
                    expensedetails.othercity = string.Empty;
                expensedetails.comments = txtEditComments.Text;
                expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
                expensedetails.expType = pre;
                expensedetails.compCode = Session["CompCode"].ToString();
                expensedetails.payMode = ddlEditPaymentType.SelectedItem.Text;
                if (pre == "GENERAL")
                {
                    expensedetails.jobCode = string.Empty;
                    expensedetails.phaseCode = string.Empty;
                    expensedetails.JCatCode = string.Empty;
                }
                else
                {
                    expensedetails.jobCode = ddlEditJobs.SelectedValue;
                    expensedetails.phaseCode = ddlEditPhases.SelectedValue;
                    expensedetails.JCatCode = ddlEditCategories.SelectedValue;
                }
                //if (txtEditPreAmnt.Text == "0")
                //    expensedetails.preAmount = 0;
                //else
                //    expensedetails.preAmount = ut.NullSafeDouble(txtEditPreAmnt.Text);
                //if (txtEditActAmnt.Text == "0")
                //    expensedetails.actualAmount = 0;
                //else
                //    expensedetails.actualAmount = ut.NullSafeDouble(txtEditActAmnt.Text);

                double amnt = 0;
                if (hdnCodeValue6.Value == "Y")
                {
                    if (hdnPreType.Value == "1")
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * Convert.ToDouble(hdnPPM.Value);
                    else
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * Convert.ToDouble(hdnPPM.Value);
                }
                else
                {
                    if (hdnPreType.Value == "1")
                        amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                    else
                        amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                }

                if (hdnPreType.Value == "1")
                {
                    expensedetails.preAmount = amnt;
                    expensedetails.actualAmount = 0;
                    txtEditPreAmnt.Text = amnt.ToString();
                }
                else
                {
                    txtEditActAmnt.Text = amnt.ToString();
                    expensedetails.actualAmount = amnt;
                    expensedetails.preAmount = 0;
                }

                expensedetails.status = "Saved";
                expensedetails.statusId = 3;
                expensedetails.stateId = string.Empty;
                expensedetails.startDate = string.Empty;
                expensedetails.managerId = 0;
                expensedetails.amtSpent = 0;
                expensedetails.purpose = string.Empty;
                if (dvEditAgName.Style["display"] == "block")
                {
                    if (ddlEditAgName.SelectedValue == "0")
                        expensedetails.agentName = string.Empty;
                    else
                        expensedetails.agentName = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                }
                else
                    expensedetails.agentName = string.Empty;
                expensedetails.bookedDate = string.Empty;
                expensedetails.detailsFlag = 1;
                expensedetails.masterFlag = 0;
                expensedetails.automileageFlag = 0;
                if (dvEditFromcity.Style["display"] == "block")
                {
                    if (ddlEditFromcity.SelectedValue == "0")
                        expensedetails.fromCity = string.Empty;
                    else
                        expensedetails.fromCity = ddlEditFromcity.SelectedItem.Text;
                    if (ddlEditFromcity.SelectedItem.Text == "Other")
                        expensedetails.otherFromCity = txtEditOtherFromCity.Text;
                    else
                        expensedetails.otherFromCity = string.Empty;
                }
                else
                {
                    expensedetails.fromCity = string.Empty;
                    expensedetails.otherFromCity = string.Empty;
                }
                if (dvEditToCity.Style["display"] == "block")
                {
                    if (ddlEditTocity.SelectedValue == "0")
                        expensedetails.toCity = string.Empty;
                    else
                        expensedetails.toCity = ddlEditTocity.SelectedItem.Text;
                    if (ddlEditTocity.SelectedItem.Text == "Other")
                        expensedetails.otherToCity = txtEditOtherToCity.Text;
                    else
                        expensedetails.otherToCity = string.Empty;
                }
                else
                {
                    expensedetails.toCity = string.Empty;
                    expensedetails.otherToCity = string.Empty;
                }
                if (dvEditVendor.Style["display"] == "block")
                {
                    if (ddlEditPreVendor.SelectedValue == "0")
                        expensedetails.preferredVendor = string.Empty;
                    else
                        expensedetails.preferredVendor = ddlEditPreVendor.SelectedItem.Text;
                }
                else
                    expensedetails.preferredVendor = string.Empty;
                expensedetails.itinararyNo = txtEditItNo.Text;
                expensedetails.fromDate = txtEditFromdate.Text;
                expensedetails.toDate = txtEditTodate.Text;
                expensedetails.currency = string.Empty;
                expensedetails.exp = string.Empty;
                expensedetails.accountCode = string.Empty;
                expensedetails.codeId = string.Empty;
                expensedetails.codeValue = string.Empty;
                expensedetails.managerEmail = string.Empty;
                expensedetails.managerId = 0;
                expensedetails.LNorm = ut.NullSafeDouble(txtEditLNorm.Text);
                expensedetails.totTrip = ut.NullSafeDouble(txtEditTotTrip.Text);
                expensedetails.reimbt = ut.NullSafeDouble(txtEditReimbt.Text);
                expensedetails.userId = 0;
                expensedetails.preApproved = (Convert.ToBoolean(Session["PreApproval"]) == false ? 0 : 1);
                expensedetails.lastUpdSource = "Web";

                string retStr = xms.addExpense(expensedetails);


                if (retStr.ToLower().Contains("fail"))
                {
                    dvExpError.Style["color"] = "Red";
                    dvExpError.InnerHtml = retStr;
                }
                else if (retStr.ToLower().Contains("succes"))
                {
                    dvExpError.Style["color"] = "Green";
                    dvExpError.InnerHtml = retStr;

                    int index = Convert.ToInt32(hdnRowIndex.Value);
                    if (pre == "GENERAL")
                    {
                        dt.Rows[index]["JCatCode"] = dt_Temp.Rows[0]["JCatCode"] = string.Empty;
                        dt.Rows[index]["LNorm"] = dt_Temp.Rows[0]["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                        dt.Rows[index]["accountCode"] = dt_Temp.Rows[0]["accountCode"] = hdnAcc.Value;
                        dt.Rows[index]["actualAmount"] = dt_Temp.Rows[0]["actualAmount"] = txtEditActAmnt.Text;
                        dt.Rows[index]["addedOn"] = dt_Temp.Rows[0]["addedOn"] = pre;
                        if (dvEditAgName.Style["display"] == "block")
                        {
                            if (ddlEditAgName.SelectedValue == "0")
                                dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                            else
                                dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                        }
                        else
                            dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        dt.Rows[index]["amtSpent"] = dt_Temp.Rows[0]["amtSpent"] = 0;
                        dt.Rows[index]["apReview"] = dt_Temp.Rows[0]["apReview"] = string.Empty;
                        dt.Rows[index]["automileageFlag"] = dt_Temp.Rows[0]["automileageFlag"] = 0;
                        dt.Rows[index]["bookedDate"] = dt_Temp.Rows[0]["bookedDate"] = string.Empty;
                        if (ddlEditCity.SelectedItem.Text == "Other")
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherCity.Text;
                        else
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                        if (dvEditCV.Style["display"] == "block")
                        {
                            if (ddlEditCity.SelectedValue == "0")
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                            else if (ddlEditCity.SelectedItem.Text == "Other")
                            {
                                dvEditOtherCity.Style["display"] = "block";
                                dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherCity.Text;
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                            }
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                        {
                            if (ddlEditTocity.SelectedItem.Text == "Other")
                            {
                                dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherToCity.Text;
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                            }
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                        }
                        dt.Rows[index]["codeId"] = dt_Temp.Rows[0]["codeId"] = string.Empty;
                        dt.Rows[index]["codeValue"] = dt_Temp.Rows[0]["codeValue"] = string.Empty;
                        dt.Rows[index]["comments"] = dt_Temp.Rows[0]["comments"] = txtEditComments.Text;
                        dt.Rows[index]["compCode"] = dt_Temp.Rows[0]["compCode"] = string.Empty;
                        dt.Rows[index]["currency"] = dt_Temp.Rows[0]["currency"] = string.Empty;
                        dt.Rows[index]["detailsFlag"] = dt_Temp.Rows[0]["detailsFlag"] = 1;
                        dt.Rows[index]["exp"] = dt_Temp.Rows[0]["exp"] = string.Empty;
                        dt.Rows[index]["expDate"] = dt_Temp.Rows[0]["expDate"] = txtEditExpDate.Text;
                        dt.Rows[index]["expItem"] = dt_Temp.Rows[0]["expItem"] = ddlEditExpenseItem.SelectedItem.Text;
                        dt.Rows[index]["expLineNo"] = dt_Temp.Rows[0]["expLineNo"] = Convert.ToInt32(hdnSeq1.Value);
                        dt.Rows[index]["expType"] = dt_Temp.Rows[0]["expType"] = pre;
                        if (dvEditFromcity.Style["display"] == "block")
                        {
                            if (ddlEditFromcity.SelectedValue == "0")
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            else
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = ddlEditFromcity.SelectedItem.Text;
                            if (ddlEditFromcity.SelectedItem.Text == "Other")
                                dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = txtEditOtherFromCity.Text;
                            else
                                dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = string.Empty;
                        }
                        else
                        {
                            dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = string.Empty;
                        }
                        dt.Rows[index]["fromDate"] = dt_Temp.Rows[0]["fromDate"] = txtEditFromdate.Text;
                        dt.Rows[index]["itinararyNo"] = dt_Temp.Rows[0]["itinararyNo"] = txtEditItNo.Text;
                        dt.Rows[index]["jobCode"] = dt_Temp.Rows[0]["jobCode"] = string.Empty;
                        dt.Rows[index]["managerEmail"] = dt_Temp.Rows[0]["managerEmail"] = string.Empty;
                        dt.Rows[index]["managerId"] = dt_Temp.Rows[0]["managerId"] = 0;
                        dt.Rows[index]["masterFlag"] = dt_Temp.Rows[0]["masterFlag"] = 0;
                        dt.Rows[index]["orgId"] = dt_Temp.Rows[0]["orgId"] = 0;
                        if (ddlEditPaymentType.SelectedValue == "0")
                            dt.Rows[index]["payMode"] = dt_Temp.Rows[0]["payMode"] = string.Empty;
                        else
                            dt.Rows[index]["payMode"] = dt_Temp.Rows[0]["payMode"] = ddlEditPaymentType.SelectedItem.Text;
                        dt.Rows[index]["phaseCode"] = dt_Temp.Rows[0]["phaseCode"] = string.Empty;
                        dt.Rows[index]["preAmount"] = dt_Temp.Rows[0]["preAmount"] = txtEditPreAmnt.Text;
                        dt.Rows[index]["preApproved"] = dt_Temp.Rows[0]["preApproved"] = Convert.ToBoolean(Session["PreApproval"]);
                        if (dvEditVendor.Style["display"] == "block")
                        {
                            if (ddlEditPreVendor.SelectedValue == "0")
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                            else
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                        }
                        else
                            dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                        dt.Rows[index]["purpose"] = dt_Temp.Rows[0]["purpose"] = string.Empty;
                        dt.Rows[index]["reimbt"] = dt_Temp.Rows[0]["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                        dt.Rows[index]["reqId"] = dt_Temp.Rows[0]["reqId"] = Convert.ToInt32(Session["ReqID"]);
                        dt.Rows[index]["startDate"] = dt_Temp.Rows[0]["startDate"] = string.Empty;
                        dt.Rows[index]["stateId"] = dt_Temp.Rows[0]["stateId"] = string.Empty;
                        dt.Rows[index]["status"] = dt_Temp.Rows[0]["status"] = string.Empty;
                        dt.Rows[index]["statusId"] = dt_Temp.Rows[0]["statusId"] = 0;
                        if (dvEditToCity.Style["display"] == "block")
                        {
                            if (ddlEditTocity.SelectedValue == "0")
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            else
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = ddlEditTocity.SelectedItem.Text;
                            if (ddlEditTocity.SelectedItem.Text == "Other")
                                dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = txtEditOtherToCity.Text;
                            else
                                dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = string.Empty;
                        }
                        else
                        {
                            dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = string.Empty;
                        }
                        dt.Rows[index]["toDate"] = dt_Temp.Rows[0]["toDate"] = txtEditTodate.Text;
                        dt.Rows[index]["totTrip"] = dt_Temp.Rows[0]["totTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                        dt.Rows[index]["userId"] = dt_Temp.Rows[0]["userId"] = 0;
                    }
                    else
                    {
                        dt.Rows[index]["JCatCode"] = dt_Temp.Rows[0]["JCatCode"] = ddlEditCategories.SelectedItem.Text;
                        dt.Rows[index]["LNorm"] = dt_Temp.Rows[0]["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                        dt.Rows[index]["accountCode"] = dt_Temp.Rows[0]["accountCode"] = hdnAcc.Value;
                        dt.Rows[index]["actualAmount"] = dt_Temp.Rows[0]["actualAmount"] = txtEditActAmnt.Text;
                        dt.Rows[index]["addedOn"] = dt_Temp.Rows[0]["addedOn"] = ddlEditExpType.SelectedValue;
                        if (dvEditAgName.Style["display"] == "block")
                        {
                            if (ddlEditAgName.SelectedValue == "0")
                                dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                            else
                                dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                        }
                        else
                            dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        dt.Rows[index]["amtSpent"] = dt_Temp.Rows[0]["amtSpent"] = 0;
                        dt.Rows[index]["apReview"] = dt_Temp.Rows[0]["apReview"] = ddlEditJobs.SelectedValue;
                        dt.Rows[index]["automileageFlag"] = dt_Temp.Rows[0]["automileageFlag"] = 0;
                        dt.Rows[index]["bookedDate"] = dt_Temp.Rows[0]["bookedDate"] = string.Empty;
                        if (ddlEditCity.SelectedItem.Text == "Other")
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherCity.Text;
                        else
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                        if (dvEditCV.Style["display"] == "block")
                        {
                            if (ddlEditCity.SelectedValue == "0")
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                            else if (ddlEditCity.SelectedItem.Text == "Other")
                            {
                                dvEditOtherCity.Style["display"] = "block";
                                dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherCity.Text;
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                            }
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditCity.SelectedItem.Text;
                        }
                        else
                        {
                            if (ddlEditTocity.SelectedItem.Text == "Other")
                            {
                                dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = txtEditOtherToCity.Text;
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                            }
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = ddlEditTocity.SelectedItem.Text;
                        }
                        dt.Rows[index]["codeId"] = dt_Temp.Rows[0]["codeId"] = ddlEditPhases.SelectedValue;
                        dt.Rows[index]["codeValue"] = dt_Temp.Rows[0]["codeValue"] = ddlEditCategories.SelectedValue;
                        dt.Rows[index]["comments"] = dt_Temp.Rows[0]["comments"] = txtEditComments.Text;
                        dt.Rows[index]["compCode"] = dt_Temp.Rows[0]["compCode"] = string.Empty;
                        dt.Rows[index]["currency"] = dt_Temp.Rows[0]["currency"] = string.Empty;
                        dt.Rows[index]["detailsFlag"] = dt_Temp.Rows[0]["detailsFlag"] = 1;
                        dt.Rows[index]["exp"] = dt_Temp.Rows[0]["exp"] = string.Empty;
                        dt.Rows[index]["expDate"] = dt_Temp.Rows[0]["expDate"] = txtEditExpDate.Text;
                        dt.Rows[index]["expItem"] = dt_Temp.Rows[0]["expItem"] = ddlEditExpenseItem.SelectedItem.Text;
                        dt.Rows[index]["expLineNo"] = dt_Temp.Rows[0]["expLineNo"] = Convert.ToInt32(hdnSeq1.Value);
                        dt.Rows[index]["expType"] = dt_Temp.Rows[0]["expType"] = pre;
                        if (dvEditFromcity.Style["display"] == "block")
                        {
                            if (ddlEditFromcity.SelectedValue == "0")
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            else
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = ddlEditFromcity.SelectedItem.Text;
                            if (ddlEditTocity.SelectedItem.Text == "Other")
                                dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = txtEditOtherToCity.Text;
                            else
                                dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = string.Empty;
                        }
                        else
                        {
                            dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = string.Empty;
                        }
                        dt.Rows[index]["fromDate"] = dt_Temp.Rows[0]["fromDate"] = txtEditFromdate.Text;
                        dt.Rows[index]["itinararyNo"] = dt_Temp.Rows[0]["itinararyNo"] = txtEditItNo.Text;
                        dt.Rows[index]["jobCode"] = dt_Temp.Rows[0]["jobCode"] = ddlEditJobs.SelectedItem.Text;
                        dt.Rows[index]["managerEmail"] = dt_Temp.Rows[0]["managerEmail"] = string.Empty;
                        dt.Rows[index]["managerId"] = dt_Temp.Rows[0]["managerId"] = 0;
                        dt.Rows[index]["masterFlag"] = dt_Temp.Rows[0]["masterFlag"] = 0;
                        dt.Rows[index]["orgId"] = dt_Temp.Rows[0]["orgId"] = 0;
                        if (ddlEditPaymentType.SelectedValue == "0")
                            dt.Rows[index]["payMode"] = dt_Temp.Rows[0]["payMode"] = string.Empty;
                        else
                            dt.Rows[index]["payMode"] = dt_Temp.Rows[0]["payMode"] = ddlEditPaymentType.SelectedItem.Text;
                        dt.Rows[index]["phaseCode"] = dt_Temp.Rows[0]["phaseCode"] = ddlEditPhases.SelectedItem.Text;
                        dt.Rows[index]["preAmount"] = dt_Temp.Rows[0]["preAmount"] = txtEditPreAmnt.Text;
                        dt.Rows[index]["preApproved"] = dt_Temp.Rows[0]["preApproved"] = Convert.ToBoolean(Session["PreApproval"]);
                        if (dvEditVendor.Style["display"] == "block")
                        {
                            if (ddlEditPreVendor.SelectedValue == "0")
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                            else
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = ddlEditPreVendor.SelectedItem.Text;
                        }
                        else
                            dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                        dt.Rows[index]["purpose"] = dt_Temp.Rows[0]["purpose"] = string.Empty;
                        dt.Rows[index]["reimbt"] = dt_Temp.Rows[0]["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                        dt.Rows[index]["reqId"] = dt_Temp.Rows[0]["reqId"] = Convert.ToInt32(Session["ReqID"]);
                        dt.Rows[index]["startDate"] = dt_Temp.Rows[0]["startDate"] = string.Empty;
                        dt.Rows[index]["stateId"] = dt_Temp.Rows[0]["stateId"] = string.Empty;
                        dt.Rows[index]["status"] = dt_Temp.Rows[0]["status"] = string.Empty;
                        dt.Rows[index]["statusId"] = dt_Temp.Rows[0]["statusId"] = 0;
                        if (dvEditToCity.Style["display"] == "block")
                        {
                            if (ddlEditTocity.SelectedValue == "0")
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            else
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = ddlEditTocity.SelectedItem.Text;
                            if (ddlEditTocity.SelectedItem.Text == "Other")
                                dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = txtEditOtherToCity.Text;
                            else
                                dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = string.Empty;
                        }
                        else
                        {
                            dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            dt.Rows[index]["otherToCity"] = dt_Temp.Rows[0]["otherToCity"] = string.Empty;
                        }
                        dt.Rows[index]["toDate"] = dt_Temp.Rows[0]["toDate"] = txtEditTodate.Text;
                        dt.Rows[index]["totTrip"] = dt_Temp.Rows[0]["totTrip"] = ut.NullSafeInteger(txtEditTotTrip.Text);
                        dt.Rows[index]["userId"] = dt_Temp.Rows[0]["userId"] = 0;
                    }
                    dt.AcceptChanges();
                    GetData();
                    Session.Remove("dsSt");
                    LnkcurrAttachments.Style["display"] = "block";
                    SortGrid();

                    LoadEditData(null);
                    //RetainFields();
                    //RetainVendorFields();

                    //if (ddlEditTocity.SelectedItem.Text == "Other")
                    //    dvEditToOther.Style["display"] = "block";
                    //if (ddlEditFromcity.SelectedItem.Text == "Other")
                    //    dvEditFromOther.Style["display"] = "block";
                    //if (ddlEditCity.SelectedItem.Text == "Other")
                    //    dvEditOtherCity.Style["display"] = "block";
                }
                else
                {
                    dvExpError.Style["color"] = "Red";
                    dvExpError.InnerHtml = "An error occurred while processing the request. Please try again.";
                }

            }
            else
            {
                dvExpError.Style["color"] = "Red";
                dvExpError.InnerHtml = "No changes to update!";
            }
            CalculateTotals();
        }
        else
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 4MB";
        popup.Show();
        popup_Edit.Show();
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        if (gvExp.Rows.Count > 1)
        {
            //BindData();
            CalculateTotals();
            Session["popup"] = "true";
            popup.Show();
            popAlert.Show();
            popup_Edit.Hide();
        }
        else
        {
            dvExpError.InnerHtml = "You cannot delete single line item.";
            dvExpError.Style["color"] = "Red";
        }
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        CalculateTotals();
        popup.Show();
        popup_Edit.Hide();
    }

    protected void ViewNewDetails(object sender, CommandEventArgs e)
    {
        Session.Remove("AttCnt");
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;

        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        GetViewExpItemData(dsExpEditDetails, index);
    }

    protected void btnVCancel_Click(object sender, EventArgs e)
    {
        CalculateTotals();
        popup.Show();
        popup_Edit.Hide();
    }

    protected void PreviousExp(object sender, EventArgs e)
    {
        dvExpError.InnerHtml = string.Empty;
        ClearFields();
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockFields();
        Session.Remove("dsvend");
        GetExpItemData(dsExpEditDetails, index);
        if (index == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;
    }

    protected void NextExp(object sender, EventArgs e)
    {
        dvExpError.InnerHtml = string.Empty;
        ClearFields();
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockFields();
        Session.Remove("dsvend");
        GetExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;
    }

    protected void ViewPreviousExp(object sender, EventArgs e)
    {
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewFields();
        GetViewExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;
    }

    protected void ViewNextExp(object sender, EventArgs e)
    {
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewFields();
        GetViewExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;
    }

    void GetExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockFields();
        dvError.InnerHtml = string.Empty;
        dvExpError.InnerHtml = string.Empty;
        dvExpError1.InnerHtml = string.Empty;
        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataSet dsCodes = new DataSet();
            DataTable dtCodes = new DataTable();
            if (Session["dsCodes"] == null)
                BindExpData();

            dsCodes = (DataSet)Session["dsCodes"];
            dtCodes = dsCodes.Tables[0];

            //Expense Items
            //string exprExpItem = "CodeID='EXPITEM'";
            //DataView viewExpItem = new DataView(dtCodes, exprExpItem, "CODEID", DataViewRowState.CurrentRows);
            //viewExpItem.Sort = "Description ASC";
            //ddlEditExpenseItem.DataSource = viewExpItem;
            //ddlEditExpenseItem.DataBind();
            //ddlEditExpenseItem.Items.Insert(0, "Please Select");
            //ddlEditExpenseItem.Items.FindByText("Please Select").Value = "0";
            //ddlEditExpenseItem.SelectedValue = dsExpEditDetails.Rows[index]["expItem"].ToString();

            string expHdnItem = "description='" + ddlEditExpenseItem.SelectedValue + "'";
            DataView viewExpItem1 = new DataView(dtCodes, expHdnItem, "CODEID", DataViewRowState.CurrentRows);
            dt = viewExpItem1.ToTable();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();


            //Payment Types
            string exprPymt = "CodeID='PAYMENT'";
            DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
            ddlEditPaymentType.DataSource = viewPymt;
            ddlEditPaymentType.DataBind();
            ddlEditPaymentType.Items.Insert(0, "Please Select");
            ddlEditPaymentType.Items.FindByText("Please Select").Value = "0";
            if (dsExpEditDetails.Rows[index]["payMode"].ToString() == string.Empty)
                ddlEditPaymentType.SelectedValue = "0";
            else
                ddlEditPaymentType.SelectedValue = dsExpEditDetails.Rows[index]["payMode"].ToString();

            //US Cities
            string exprCities = "CodeID='USCITIES'";
            DataView viewCities = new DataView(dtCodes, exprCities, "CODEID", DataViewRowState.CurrentRows);
            viewCities.Sort = "CodeKey ASC";
            ddlEditCity.DataSource = viewCities;
            ddlEditCity.DataBind();
            ddlEditCity.Items.Insert(0, "Please Select");
            ddlEditCity.Items.FindByText("Please Select").Value = "0";


            ddlEditFromcity.DataSource = viewCities;
            ddlEditFromcity.DataBind();
            ddlEditFromcity.Items.Insert(0, "Please Select");
            ddlEditFromcity.Items.FindByText("Please Select").Value = "0";
            //ddlEditFromcity.Items.Insert(ddlEditFromcity.Items.Count, "Other");
            //ddlEditFromcity.Items.FindByText("Other").Value = "Other";

            ddlEditTocity.DataSource = viewCities;
            ddlEditTocity.DataBind();
            ddlEditTocity.Items.Insert(0, "Please Select");
            ddlEditTocity.Items.FindByText("Please Select").Value = "0";
            //ddlEditTocity.Items.Insert(ddlEditTocity.Items.Count, "Other");
            //ddlEditTocity.Items.FindByText("Other").Value = "Other";

            //ExpenseTypes
            string exprExpType = "CodeID='EXPTYPE'";
            DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
            ddlEditExpType.DataSource = viewExpType;
            ddlEditExpType.DataBind();
            ddlEditExpType.Items.Insert(0, "Please Select");
            ddlEditExpType.Items.FindByText("Please Select").Value = "0";
            ddlEditExpType.SelectedValue = dsExpEditDetails.Rows[index]["expType"].ToString();

            string exprPPM = "CodeID='PPM'";
            DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
            //ppm = Convert.ToInt32(viewPPM["CodeValue1"]);
            DataTable dtPpm = viewPPM.ToTable();
            ppm = Convert.ToDouble(dtPpm.Rows[0]["CodeValue1"]);
            Session["PPM"] = ppm;
            hdnPPM.Value = ppm.ToString();



            if (ddlEditExpType.SelectedItem.Text == "GENERAL")
            {
                ddlEditCategories.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditJobs.Items.Clear();
                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditJob.Style["display"] = "block";
                dvEditPhs.Style["display"] = "block";
                dvEditJC.Style["display"] = "block";
                BindJobs(ddlEditJobs);
                ddlEditJobs.SelectedValue = dsExpEditDetails.Rows[index]["apReview"].ToString();
                BindPhases(ddlEditPhases, ddlEditJobs);
                ddlEditPhases.SelectedValue = dsExpEditDetails.Rows[index]["codeId"].ToString();
                BindCategories(ddlEditCategories, ddlEditPhases);
                ddlEditCategories.SelectedValue = dsExpEditDetails.Rows[index]["codeValue"].ToString();
            }

            if (hdnPreType.Value != "1")
            {
                txtEditPreAmnt.Enabled = false;
                txtEditPreAmnt.Text = string.Empty;
                txtEditActAmnt.Enabled = true;
            }
            else
            {
                txtEditPreAmnt.Enabled = true;
                txtEditActAmnt.Text = string.Empty;
                txtEditActAmnt.Enabled = false;
            }

            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = viewSec.ToTable();

            Session["Sectiondt"] = viewSec;
            DataView view = (DataView)Session["Sectiondt"];

            if (view != null)
            {
                DataTable dtTempCode = view.ToTable();
                if (dtTempCode.Rows[1]["CodeValue1"].ToString() == "Y")
                    hdnCodeValue6.Value = dtTempCode.Rows[1]["CodeValue1"].ToString();
            }

            //Display fields Begin
            //depending on the values fetched from database for a selected ExpenseItem

            string city = string.Empty;

            if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditED.Style["display"] = "block";
                //Assign values to ExpenseDate field
                txtEditExpDate.Text = dsExpEditDetails.Rows[index]["expDate"].ToString();
                hdnCodeValue2.Value = dtSec.Rows[0]["CodeValue2"].ToString();
            }
            else
            {
                dvEditED.Style["display"] = "none";
                hdnCodeValue2.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditFD.Style["display"] = "block";
                dvEditTD.Style["display"] = "block";
                //Assign values to From/To Dates field
                txtEditFromdate.Text = dsExpEditDetails.Rows[index]["fromDate"].ToString();
                txtEditTodate.Text = dsExpEditDetails.Rows[index]["toDate"].ToString();
                hdnCodeValue3.Value = dtSec.Rows[0]["CodeValue3"].ToString();
            }
            else
            {
                dvEditFD.Style["display"] = "none";
                dvEditTD.Style["display"] = "none";
                hdnCodeValue3.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Style["display"] = "block";
                //Assign values to CitiesVisited field
                if (dsExpEditDetails.Rows[index]["citiesVstd"].ToString() == string.Empty)
                    ddlEditCity.SelectedValue = "0";
                else
                {
                    ddlEditCity.SelectedValue = dsExpEditDetails.Rows[index]["citiesVstd"].ToString();
                    city = ddlEditCity.SelectedItem.Text;
                }
                if (ddlEditCity.SelectedItem.Text == "Other")
                {
                    dvEditOtherCity.Style.Add("Display", "block");
                    txtEditOtherCity.Text = dsExpEditDetails.Rows[index]["OtherCity"].ToString();
                    city = txtEditOtherCity.Text;
                }
                else
                    dvEditOtherCity.Style.Add("Display", "none");
                hdnCodeValue4.Value = dtSec.Rows[0]["CodeValue4"].ToString();
            }
            else
            {
                dvEditCV.Style["display"] = "none";
                hdnCodeValue4.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Style["display"] = "block";
                dvEditToCity.Style["display"] = "block";
                //Assign values to FromCity field
                if (dsExpEditDetails.Rows[index]["fromCity"].ToString() == string.Empty)
                    ddlEditFromcity.SelectedValue = "0";
                else
                {
                    ddlEditFromcity.SelectedValue = dsExpEditDetails.Rows[index]["fromCity"].ToString();
                    city = ddlEditFromcity.SelectedItem.Text;
                }

                if (ddlEditFromcity.SelectedValue.ToLower() == "other")
                {
                    dvEditFromOther.Style["display"] = "block";
                    txtEditOtherFromCity.Text = dsExpEditDetails.Rows[index]["otherFromCity"].ToString();
                    city = txtEditOtherFromCity.Text;
                }
                else
                    dvEditFromOther.Style.Add("Display", "none");

                //Assign values to ToCity field
                if (dsExpEditDetails.Rows[index]["toCity"].ToString() == string.Empty)
                    ddlEditTocity.SelectedValue = "0";
                else
                    ddlEditTocity.SelectedValue = dsExpEditDetails.Rows[index]["toCity"].ToString();

                if (ddlEditTocity.SelectedValue.ToLower() == "other")
                {
                    dvEditToOther.Style["display"] = "block";
                    txtEditOtherToCity.Text = dsExpEditDetails.Rows[index]["otherToCity"].ToString();
                }
                else
                    dvEditToOther.Style.Add("Display", "none");
                hdnCodeValue5.Value = dtSec.Rows[0]["CodeValue5"].ToString();
            }
            else
            {
                dvEditFromcity.Style["display"] = "none";
                dvEditToCity.Style["display"] = "none";
                hdnCodeValue5.Value = string.Empty;
            }

            if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Style["display"] = "block";
                dvEditLN.Style["display"] = "block";
                //dvEditAmt.Style["display"] = "block";
                txtEditTotTrip.Text = dsExpEditDetails.Rows[index]["TotTrip"].ToString();
                txtEditLNorm.Text = dsExpEditDetails.Rows[index]["LNorm"].ToString();
                txtEditReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                txtEditActAmnt.ReadOnly = true;
                txtEditPreAmnt.ReadOnly = true;
                hdnCodeValue6.Value = dtSec.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvEditTT.Style["display"] = "none";
                dvEditLN.Style["display"] = "none";
                //dvEditAmt.Style["display"] = "none";
                txtEditActAmnt.ReadOnly = false;
                txtEditPreAmnt.ReadOnly = false;
                hdnCodeValue6.Value = string.Empty;
            }

            if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
            {

                BindVendors(ddlEditExpenseItem.SelectedItem.Text, ddlEditPreVendor, city);
                DataSet dsVend = (DataSet)Session["dsvend"];
                DataTable dsVendors = dsVend.Tables[0];
                if (dsVendors.Rows.Count >= 1)
                {
                    dvEditVendor.Style["display"] = "block";
                    dvEditAgName.Style["display"] = "block";
                    dvEditItNo.Style["display"] = "block";
                    if (dsExpEditDetails.Rows[index]["preferredVendor"].ToString() == string.Empty)
                        ddlEditPreVendor.SelectedValue = "0";
                    else
                        ddlEditPreVendor.SelectedValue = dsExpEditDetails.Rows[index]["preferredVendor"].ToString();
                    BindAgents();
                    if (dsExpEditDetails.Rows[index]["agentName"].ToString() == string.Empty)
                        ddlEditAgName.SelectedValue = "0";
                    else
                        ddlEditAgName.SelectedValue = dsExpEditDetails.Rows[index]["agentName"].ToString();
                }
                else
                {
                    dvEditVendor.Style["display"] = "none";
                    dvEditAgName.Style["display"] = "none";
                    dvEditItNo.Style["display"] = "none";
                }
            }
            else
            {
                dvEditVendor.Style["display"] = "none";
                dvEditAgName.Style["display"] = "none";
                dvEditItNo.Style["display"] = "none";
            }

            //Display fields End

            hdnAcc.Value = dsExpEditDetails.Rows[index]["accountCode"].ToString();
            txtEditPreAmnt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();
            txtEditActAmnt.Text = dsExpEditDetails.Rows[index]["actualAmount"].ToString();
            txtEditComments.Text = dsExpEditDetails.Rows[index]["comments"].ToString();

            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LnkcurrAttachments.Style["display"] = "block";
                //lblEditAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq1.Value));
            }
            else
                LnkcurrAttachments.Style["display"] = "none";


            DivEdit.Visible = true;
            DivView.Visible = false;
            popup_Edit.Show();
            popup.Show();
        }
    }

    void GetViewExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockViewFields();
        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataSet dsCodes = (DataSet)Session["dsCodes"];
            DataTable dtCodes = dsCodes.Tables[0];

            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = viewSec.ToTable();

            if (hdnPreType.Value != "1")
            {
                txtEditPreAmnt.Enabled = false;
                txtEditActAmnt.Enabled = true;
                dvEditVPA.Style["display"] = "none";
                dvEditVAmt.Style["display"] = "block";
            }
            else
            {
                txtEditPreAmnt.Enabled = true;
                txtEditActAmnt.Enabled = false;
                dvEditVPA.Style["display"] = "block";
                dvEditVAmt.Style["display"] = "none";
            }

            lblddlVExpType.Text = dsExpEditDetails.Rows[index]["expType"].ToString();
            if (lblddlVExpType.Text == "GENERAL")
            {
                lblVCatCode.Text = string.Empty;
                lblddlVJobCd.Text = string.Empty;
                lblVPhcd.Text = string.Empty;
                dvEditVJob.Style["display"] = "none";
                dvEditVPhs.Style["display"] = "none";
                dvEditVJC.Style["display"] = "none";
            }
            else
            {
                dvEditVJob.Style["display"] = "block";
                dvEditVPhs.Style["display"] = "block";
                dvEditVJC.Style["display"] = "block";
                lblddlVJobCd.Text = dsExpEditDetails.Rows[index]["jobCode"].ToString();
                lblVPhcd.Text = dsExpEditDetails.Rows[index]["phaseCode"].ToString();
                lblVCatCode.Text = dsExpEditDetails.Rows[index]["JCatCode"].ToString();
            }

            lblVExpCd.Text = dsExpEditDetails.Rows[index]["expItem"].ToString();
            lblVDate.Text = dsExpEditDetails.Rows[index]["expDate"].ToString();

            if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditVED.Style["display"] = "block";
                //Assign values to ExpenseDate field
                lblVDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
            }
            else
            {
                dvEditVED.Style["display"] = "none";
            }
            if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditVFD.Style["display"] = "block";
                dvEditVTD.Style["display"] = "block";
                //Assign values to From/To Dates field
                lblVFromdate.Text = dsExpEditDetails.Rows[index]["FromDate"].ToString();
                lblVTodate.Text = dsExpEditDetails.Rows[index]["ToDate"].ToString();
            }
            else
            {
                dvEditVFD.Style["display"] = "none";
                dvEditVTD.Style["display"] = "none";
            }
            if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditVCV.Style["display"] = "block";
                //Assign values to CitiesVisited field
                lblVCity.Text = dsExpEditDetails.Rows[index]["citiesVstd"].ToString();
                if (lblVCity.Text == "Other")
                {
                    SpVOthercity.Style.Add("Display", "block");
                    lblVOther.Text = dsExpEditDetails.Rows[index]["OtherCity"].ToString();
                }
                else
                    SpVOthercity.Style.Add("Display", "none");
            }
            else
                dvEditVCV.Style["display"] = "none";

            if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditVFromcity.Style["display"] = "block";
                dvEditVToCity.Style["display"] = "block";
                //Assign values to FromCity field
                lblVFromcity.Text = dsExpEditDetails.Rows[index]["FromCity"].ToString();
                if (lblVOtherFromCity.Text == "Other")
                {
                    dvEditVFromOther.Style["display"] = "block";
                    lblVOtherFromCity.Text = dsExpEditDetails.Rows[index]["FromOtherCity"].ToString();
                }
                else
                    dvEditVFromOther.Style.Add("Display", "none");

                //Assign values to ToCity field
                lblVTocity.Text = dsExpEditDetails.Rows[index]["ToCity"].ToString();
                if (lblVTocity.Text == "Other")
                {
                    dvEditVToOther.Style["display"] = "block";
                    txtEditOtherToCity.Text = dsExpEditDetails.Rows[index]["ToOtherCity"].ToString();
                }
                else
                    dvEditVToOther.Style["display"] = "none";
            }
            else
            {
                dvEditVFromcity.Style["display"] = "none";
                dvEditVToCity.Style["display"] = "none";
            }

            if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditVTT.Style["display"] = "block";
                dvEditVLN.Style["display"] = "block";
                dvEditVAmt.Style["display"] = "block";
                lblVTotTrip.Text = dsExpEditDetails.Rows[index]["TotalTrip"].ToString();
                lblVLNorm.Text = dsExpEditDetails.Rows[index]["LessNorm"].ToString();
                lblVReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                lblVActAmt.ReadOnly = true;
                lblVPreAmt.ReadOnly = true;
            }
            else
            {
                dvEditVTT.Style["display"] = "none";
                dvEditVLN.Style["display"] = "none";
                dvEditVAmt.Style["display"] = "none";
                lblVActAmt.ReadOnly = false;
                lblVPreAmt.ReadOnly = false;
            }

            if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                dvEditVPreVendor.Style["display"] = "block";
                dvEditVAgName.Style["display"] = "block";
                dvEditVItNo.Style["display"] = "block";
                lblVPreVendor.Text = dsExpEditDetails.Rows[index]["PreferredVendor"].ToString();
                lblAgName.Text = dsExpEditDetails.Rows[index]["AgentName"].ToString();
                lblVItNo.Text = dsExpEditDetails.Rows[index]["ItinararyNo"].ToString();
            }
            else
            {
                dvEditVPreVendor.Style["display"] = "none";
                dvEditVAgName.Style["display"] = "none";
                dvEditVItNo.Style["display"] = "none";
            }

            lblVActAmt.Text = dsExpEditDetails.Rows[index]["actualAmount"].ToString();
            lblVPreAmt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();

            lblVPayMode.Text = dsExpEditDetails.Rows[index]["payMode"].ToString();
            lblVCity.Text = dsExpEditDetails.Rows[index]["citiesVstd"].ToString();
            if (lblVCity.Text == "Other")
            {
                SpVOthercity.Visible = true;
                lblVOther.Text = dsExpEditDetails.Rows[index]["otherCity"].ToString();
            }
            else
                SpVOthercity.Visible = false;

            lblVcomnts.Text = dsExpEditDetails.Rows[index]["comments"].ToString();

            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LinkViewAttachments.Style["display"] = "block";
                //lblViewAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq1.Value));
            }
            else
                LinkViewAttachments.Style["display"] = "none";


            DivEdit.Visible = false;
            DivView.Visible = true;
            popup_Edit.Show();
            popup.Show();
        }
    }

    #endregion

    #region Edit AutoLineItems

    protected void EditAutoLineItem(object sender, CommandEventArgs e)
    {
        btnSubmitEdit.Attributes.Add("onclick", "javascript:return validateEditAutoDetail();");

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int autoId = Convert.ToInt32(arg[1]);
        DataTable dsDetails = (DataTable)Session["dt_Auto"];
        int i = Convert.ToInt32(hdnRowIndex.Value);
        Session["AutoId"] = autoId;


        txtEditFrom.Text = dsDetails.Rows[i]["From"].ToString();
        txtEditTo.Text = dsDetails.Rows[i]["To"].ToString();
        txtEditTravelDate.Text = dsDetails.Rows[i]["travelDate"].ToString();
        txtEditTotTrip.Text = dsDetails.Rows[i]["totTrip"].ToString();
        txtEditLessNorm.Text = dsDetails.Rows[i]["LNorm"].ToString();
        txtEditReimbt.Text = dsDetails.Rows[i]["Reimbt"].ToString();
        lblAmnt.Text = dsDetails.Rows[i]["Amount"].ToString();
        hdnEReimbt.Value = txtEditReimbt.Text;

        dvEditAuto.Visible = true;
        dvViewAuto.Visible = false;
        popup_EditAuto.Show();

        if (gvEditAuto.Rows.Count > 1)
            btnDeleteEdit.Visible = true;
        else
            btnDeleteEdit.Visible = false;
    }

    protected void btnSubmitEdit_Click(object sender, EventArgs e)
    {

        int index = Convert.ToInt32(hdnRowIndex.Value);
        int autoId = Convert.ToInt32(Session["AutoId"]);
        dt_Auto = (DataTable)Session["dt_Auto"];


        int i;
        for (i = 0; i < dt_Auto.Rows.Count; i++)
        {
            if (i == index)
            {
                dt_Auto.Rows[i][1] = Convert.ToDouble(hdnEReimbt.Value) * Convert.ToDouble(Session["PPM"]);
                dt_Auto.Rows[i][2] = autoId;
                dt_Auto.Rows[i][3] = DateTime.Now;
                dt_Auto.Rows[i][4] = txtEditFrom.Text;
                dt_Auto.Rows[i][5] = txtEditLessNorm.Text;
                dt_Auto.Rows[i][6] = ddlManagerEmail_Auto.SelectedValue;
                dt_Auto.Rows[i][7] = Convert.ToInt32(Session["OrgID"]);
                dt_Auto.Rows[i][8] = txtPurpose_Auto.Text;
                dt_Auto.Rows[i][9] = hdnEReimbt.Value;
                dt_Auto.Rows[i][10] = reqId;
                dt_Auto.Rows[i][11] = txtTripStartDate_Auto.Text;
                dt_Auto.Rows[i][12] = 3;
                dt_Auto.Rows[i][13] = DateTime.Now;
                dt_Auto.Rows[i][14] = txtEditTo.Text;
                dt_Auto.Rows[i][15] = txtEditTotTrip.Text;
                dt_Auto.Rows[i][16] = txtEditTravelDate.Text;
                dt_Auto.Rows[i][17] = Convert.ToInt32(Session["UserID"]);

                dt_Auto.AcceptChanges();
            }
        }
        gvEditAuto.EditIndex = -1;
        GetData_Auto();
        btnSave.Visible = true;

        popup_Auto.Show();
        btnAutoSave.Visible = true;
        btnAutoAppend.Visible = true;

        //btnReset.Visible = true;

    }

    protected void btnDeleteEdit_Click(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(hdnRowIndex.Value);
        int autoid = Convert.ToInt32(Session["AutoId"]);
        dt_Auto = (DataTable)Session["dt_Auto"];
        dt_Auto.Rows[index].Delete();
        dt_Auto.AcceptChanges();

        GetData_Auto();
        if (autoid != null)
        {
            Session["delAuto"] = autoid;
            delAuto += Session["delAuto"].ToString() + "|";
            delAuto = delAuto.TrimEnd('|');
            Session["delAuto"] = delAuto;
        }


        if (gvEditAuto.Rows.Count > 0)
            btnSave.Visible = false;
        else
            btnSave.Visible = true;

        popup_EditAuto.Hide();
        popup_Auto.Show();
        btnAutoSave.Visible = true;
    }

    protected void ViewAutoDetails(object sender, CommandEventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[0];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];

        int index = Convert.ToInt32(hdnRowIndex.Value);


        DataTable dsAutoEditDetails = (DataTable)Session["dt_Auto"];
        if (dsAutoEditDetails.Rows.Count > 0)
        {

            lblVFrom.Text = dsAutoEditDetails.Rows[index]["From"].ToString();
            lblVTo.Text = dsAutoEditDetails.Rows[index]["To"].ToString();
            lblVTravelDate.Text = dsAutoEditDetails.Rows[index]["TravelDate"].ToString();
            lblVTotTrip.Text = dsAutoEditDetails.Rows[index]["TotTrip"].ToString();
            lblVLessNorm.Text = dsAutoEditDetails.Rows[index]["LNorm"].ToString();
            lblVReiembt.Text = dsAutoEditDetails.Rows[index]["Reimbt"].ToString();
            lblVAmount.Text = dsAutoEditDetails.Rows[index]["Amount"].ToString();

            dvEditAuto.Visible = false;
            dvViewAuto.Visible = true;
            popup_EditAuto.Show();
        }
    }

    protected void btnAVCancel_Click(object sender, EventArgs e)
    {
        popup_EditAuto.Hide();
        popup_Auto.Show();
    }

    protected void btnCancelEdit_Click(object sender, EventArgs e)
    {
        gvEditAuto.EditIndex = -1;
        popup_EditAuto.Hide();
        popup_Auto.Show();
        btnAppend.Visible = true;

        if (gvEditAuto.Rows.Count > 0)
            btnSave.Visible = false;
        else
            btnSave.Visible = true;
        popup_Auto.Show();
    }

    #endregion

    #region RequestHistory

    protected void ShowHistory(object sender, EventArgs e)
    {
        DataSet dsHist = GetRequestHistory();
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Date");
        dt.Columns.Add("Text");
        for (int i = 0; i < dsHist.Tables[0].Rows.Count; i++)
        {
            dr = dt.NewRow();
            dr["Date"] = dsHist.Tables[0].Rows[i]["ModifiedOn"];
            if (dsHist.Tables[0].Rows[i]["OldStatus"].ToString() != string.Empty)
                dr["Text"] = "Request Changed from " + dsHist.Tables[0].Rows[i]["OldStatus"] + " to " + dsHist.Tables[0].Rows[i]["NStatus"] + " by " + dsHist.Tables[0].Rows[i]["EmpId"];
            else
                dr["Text"] = "Request has been placed and is under " + dsHist.Tables[0].Rows[i]["NStatus"] + "status";

            dt.Rows.Add(dr);
        }
        gvHist.DataSource = dt;
        gvHist.DataBind();
        popup.Show();
        popHist.Show();
    }

    DataSet GetRequestHistory()
    {
        int uID = 0;
        DataSet ds = new DataSet();
        if (Session["AppFlag"].ToString() == "N")
        {
            if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["IsAP"] != null && Session["IsManager"] != null))
                uID = Convert.ToInt32(Session["UserID_Mgr"]);
            else
                uID = Convert.ToInt32(Session["UserID"]);
        }
        else
        {
            if (Session["IsAdmin"].ToString().ToLower() == "true" || (Session["UserID_APNull"] == "1" && Session["IsManager"] != null))
                uID = Convert.ToInt32(Session["UserID_Mgr"]);
            else
                uID = Convert.ToInt32(Session["UserID"]);
        }
        string str = xms.getReqHist(Convert.ToInt32(Session["ReqID"]), uID, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<ReqStatusVO> lst = ser.Deserialize<List<ReqStatusVO>>(str);
        ds.Tables.Add(Utility.ConvertToDataTable(lst));
        return ds;
    }

    protected void gvHist_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {

    }

    #endregion
}