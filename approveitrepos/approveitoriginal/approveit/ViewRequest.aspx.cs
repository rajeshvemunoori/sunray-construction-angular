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
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using Money = System.Double;
using Shares = System.Double;
using System.Data.OleDb;
using System.Net.Mail;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html.simpleparser;
using System.Security;
using System.Web.Services;
using System.Text;
using System.Text.RegularExpressions;
using System.Globalization;
using System.Web.UI.DataVisualization.Charting;

public partial class ViewRequest : System.Web.UI.Page
{
    #region public variables View Exp

    public int reqId = 0;
    public int seqId = 0;
    public int reqCnt = 0;
    public int cnt = 0;
    public DataSet dsExpID = new DataSet();
    string status = string.Empty;
    string city = string.Empty;
    int statusId = 0;
    bool allReq = false;
    DataRow drPO;
    public int ddlTypeVar = 0;
    public string listFiltervendors = null;
    public string listFilterUsers = null;
    DataSet dsCnt = new DataSet();
    DateTime expenseDate = System.DateTime.Now;
    Utility ut = new Utility();
    DataSet dsSt = new DataSet();
    Mails mails = new Mails();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
    private bool _refreshExp = false;
    public char currencySymbol;

    #endregion

    #region public variables Edit Exp

    int id = 0;
    int doUpdate = 0;
    int statusCnt = 0;
    public string navfrom = string.Empty;
    public string expType = string.Empty;
    DataTable dt = new DataTable();
    DataTable dtPO = new DataTable();
    DataSet dsDrafts = new DataSet();
    DataSet dsFiscalDate = new DataSet();
    DataTable dtSelDfts = new DataTable();
    string tripMonth = string.Empty;
    DataRow dr;
    int expId = 0;
    int rblOnClose = 0;
    string newPath = ("ERTemp");
    string attachmentPath = ("Attachments");
    public string[] resultFileNames;
    string delExp = string.Empty;
    DataSet dsApEmail = new DataSet();
    int maxDays = 0;
    bool AddedFlag = false;
    public double expTotal = 0, autoTotal = 0, grandTotal = 0, preExpTotal = 0;

    string expItem, expLineNo, expDate, citiesVstd, comments, expenseType, jobCode, phaseCode, JCatCode, compCode, purpose, preAmount, currency,
                sts, stsId, managerId, startDate, payMode, preApproved, actualAmount, othercity, userId, preApproval, detailsFlag, masterFlag, autoFlag, agentName,
                fromCity, toCity, preferredVendor, itinararyNo, fromDate, toDate, accCode, amntSpent, apReview, codeId, codeVal, exp, lessNorm, mgrEmail, reimbursement,
                stateId, className, classRefId, sendToQB;

    #endregion

    #region public variables Auto Exp

    public int autoid = 0;
    public double ppm;
    string delAuto = string.Empty;
    DataTable dt_Auto = new DataTable();
    string autoId, from, to, tDate, totTrip, lNorm, reimbt, amount, startDate1, userId1, statusId1, reqId2, orgId2, managerId1, purpose1, preApproved1, createdOn, travelDate;

    #endregion

    #region ViewExpenses

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx?rurl=" + GetEncryptedPageName());
            else
            {
                if (!IsPostBack)
                {
                    txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                    txtKeywordSearch.Attributes.Add("onchange", "Filter(this);");
                    btnGo.Attributes.Add("onclick", "return validateReceiptStoreGoClick('" + DateTime.Now.ToShortDateString() + "');");
                    Session.Remove("dsSt");
                    Session.Remove("ReqCnt");
                    Session.Remove("ReqID");
                    Session.Remove("Cnt");
                    Session.Remove("dt");
                    Session.Remove("dtExpItem");
                    Session.Remove("dgDgrid");
                    Session.Remove("NewReqID");
                    Session.Remove("Classes");
                    hdnExp.Value = "newexpense";
                    if (Request.QueryString.Count > 0)
                        CreateBasicSessions();//Create sessions which were to be created in dashboard
                    BindExpProcessTypes();
                    if (Session["FromSession"] != null)
                    {
                        ddlTypeVar = Convert.ToInt32(Session["FromSession"]);
                        ddlType.SelectedValue = ddlTypeVar == 0 ? "ER" : ddlTypeVar == 1 ? "PA" : "PO";
                    }
                    else
                    {
                        if (Session["Expense_Vreq"] != null)
                            ddlTypeVar = Session["Expense_Vreq"].ToString() == "newexpense" ? 0 : Session["Expense_Vreq"].ToString() == "preapproved" ? 1 : 2;
                        else
                            ddlTypeVar = hdnExpProcessType.Value == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
                    }
                    if (ddlTypeVar == 0)
                    {
                        if (Session["FDate_VreqExp"] != null)
                            txtFrom.Text = Session["FDate_VreqExp"].ToString();
                        else
                            txtFrom.Text = System.DateTime.Now.AddDays(-30).ToString("MM/dd/yyyy");
                        if (Session["TDate_VreqExp"] != null)
                            txtTo.Text = Session["TDate_VreqExp"].ToString();
                        else
                            txtTo.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
                        if (Session["Expense_Vreq"] != null)
                            Session["Expense_Vreq"] = "newexpense";
                        hdnExp.Value = "newexpense";
                        ShowAddButton("Expense");
                        lblPageHead.Text = "My Expenses";
                    }
                    else if (ddlTypeVar == 1)
                    {
                        if (Session["FDate_VreqPre"] != null)
                            txtFrom.Text = Session["FDate_VreqPre"].ToString();
                        else
                            txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
                        if (Session["TDate_VreqPre"] != null)
                            txtTo.Text = Session["TDate_VreqPre"].ToString();
                        else
                            txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
                        if (Session["Expense_Vreq"] != null)
                            Session["Expense_Vreq"] = "preapproved";
                        hdnExp.Value = "preapproved";
                        ShowAddButton("Expense");
                        lblPageHead.Text = "My Expenses";
                    }
                    else if (ddlTypeVar == 2)
                    {
                        if (Session["FDate_VreqPo"] != null)
                            txtFrom.Text = Session["FDate_VreqPo"].ToString();
                        else
                            txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
                        if (Session["TDate_VreqPo"] != null)
                            txtTo.Text = Session["TDate_VreqPo"].ToString();
                        else
                            txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
                        if (Session["Expense_Vreq"] != null)
                            Session["Expense_Vreq"] = "PO";
                        hdnExp.Value = "PO";
                        ShowAddButton("PO");
                        lblPageHead.Text = "My Purchase Orders";
                    }
                    Session.Remove("FromSession");
                    LoadData();
                    if (Request.QueryString.Count > 0)
                        DisplayRequestedData();
                    BindCities();
                    txtKeywordSearch.Focus();
                }
                GetCurrencySymbol();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + " -- ViewExpenses", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private string GetEncryptedPageName()
    {
        string key = "xmserp";
        Encryption enc = new Encryption();
        return enc.Encrypt(Path.GetFileName(Request.Url.AbsolutePath), key);
    }

    private void CreateBasicSessions()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string strCompCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> lstCompCode = ser.Deserialize<List<CompanyCodesVO>>(strCompCodes);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(lstCompCode));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];


        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            DataTable dtCodes = new DataTable();
            dtCodes = Utility.ConvertToDataTable(codes);
            Session["dsCodes"] = dtCodes;
        }

        ////Get Tax details/////
        if (Session["Tax"] == null)
        {
            string expression1 = "CompCode ='" + Session["CompCode"].ToString() + "'";
            DataTable dtCompCodes = dsCompCodes.Tables[0];
            DataView dvCompCodes = new DataView(dtCompCodes, expression1, "CompCode", DataViewRowState.CurrentRows);

            DataView view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'REGIONCD'", "CodeID", DataViewRowState.CurrentRows);
            DataTable dt = view.ToTable();

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                if (dvCompCodes.ToTable().Rows[0]["State"].ToString() == dt.Rows[i]["CodeKey"].ToString())
                    Session["Tax"] = dt.Rows[i]["CodeValue1"].ToString();
            }
        }
    }

    private void DisplayRequestedData()
    {
        //int expType = Request.QueryString["tp"] == "4" ? 2 : 0;
        int expType = ut.NullSafeInteger(Request.QueryString["pr"]);
        string str = xms.getExpensesByReqID(Request.QueryString["rq"], Convert.ToInt32(Session["OrgID"]), expType);
        List<ExpDetailsPagesVO> lst = ser.Deserialize<List<ExpDetailsPagesVO>>(str);
        DataTable dtPOTemp = Utility.ConvertToDataTable(lst);
        if (dtPOTemp.Rows.Count > 0 && ut.NullSafeInteger(dtPOTemp.Rows[0]["UserID"]) == ut.NullSafeInteger(Session["UserID"]))
        {
            if (expType == 2)
                GetPOLineData(dtPOTemp.Rows[0]["RequestID"].ToString(), dtPOTemp.Rows[0]["Status"].ToString(), dtPOTemp.Rows[0]["StatusID"].ToString(),
                    dtPOTemp.Rows[0]["actionDate"].ToString(), dtPOTemp.Rows[0]["StartDate"].ToString(), dtPOTemp.Rows[0]["Purpose"].ToString(),
                    dtPOTemp.Rows[0]["CommentsCnt"].ToString());
            else
                GetExpLineData(dtPOTemp.Rows[0]["RequestID"].ToString(), dtPOTemp.Rows[0]["Status"].ToString(), dtPOTemp.Rows[0]["StatusID"].ToString(),
                    dtPOTemp.Rows[0]["actionDate"].ToString(), dtPOTemp.Rows[0]["StartDate"].ToString(), dtPOTemp.Rows[0]["Purpose"].ToString(),
                    dtPOTemp.Rows[0]["CommentsCnt"].ToString(), dtPOTemp.Rows[0]["LimitExceeded"].ToString(), dtPOTemp.Rows[0]["PreApproved"].ToString(),
                     dtPOTemp.Rows[0]["IsMgrPreApproved"].ToString(), dtPOTemp.Rows[0]["onBeHalfOf"].ToString(), dtPOTemp.Rows[0]["sendtoqb"].ToString());
        }
    }

    private void BindExpProcessTypes()
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        hdnExpProcessType.Value = dt1.Rows[0]["CodeKey"].ToString();

        view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'ORGEXPTYPELIST'", "CodeID", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        ddlType.DataSource = dt;
        ddlType.DataBind();
        if (Session["Expense_Vreq"] != null)
            ddlType.SelectedValue = Session["Expense_Vreq"] == "newexpense" ? "ER" : Session["Expense_Vreq"] == "preapproved" ? "PA" : "PO";
        else
            ddlType.SelectedValue = hdnExpProcessType.Value;
    }

    private void LoadData()
    {
        Session.Remove("dsSt");
        BindDropDowns(txtFrom.Text, txtTo.Text, 0);
        if (dsExpID.Tables.Count > 0 && dsExpID.Tables[0].Rows.Count > 0)
        {
            SelectAllReq();
            SortGrid();
        }
        else
        {
            gvExpDetails.DataSource = null;
            gvExpDetails.DataBind();
            Chart1.Visible = false;
        }

        if (gvExpDetails.Rows.Count > 0 && ddlType.SelectedValue == "PO")
            btnRetainedPO.Visible = true;
        else
            btnRetainedPO.Visible = false;
    }

    private void BindData()
    {
        ListControl lstReq = (ListControl)this.FindControl("ddlExpenseID");
        int cnt = 0;
        foreach (System.Web.UI.WebControls.ListItem item in lstReq.Items)
        {
            if (item.Selected)
                cnt++;
        }
        if (cnt == ddlExpenseID.Items.Count)
            allReq = true;
        else
            allReq = false;
        //GetRequestId();
        if (allReq == true)
            SortGrid();
        else
            BindEDGrid(reqId);
    }

    //private void BindEDGrid_AllReq(string from, string to)
    //{
    //    int uID = Convert.ToInt32(Session["UserID"]);
    //    DataSet dsExp_All = new DataSet();
    //    var strExp_All = string.Empty;
    //    ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

    //    strExp_All = xms.getExpenses(uID, from, to, ddlTypeVar);
    //    List<ExpDetailsPagesVO> lstExp_All = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp_All);
    //    dsSt.Tables.Add(Utility.ConvertToDataTable(lstExp_All));

    //    if (dsSt.Tables[0].Rows.Count > 0)
    //        ddlExpenseID.Visible = true;

    //    gvExpDetails.DataSource = dsSt;
    //    gvExpDetails.DataBind();
    //}

    private void BindDropDowns(string from, string to, int type)
    {
        ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        int uID = ut.NullSafeInteger(Session["UserID"]);
        int cnt = xms.getReqCnt(uID, 3);
        if (cnt > 0)
        {
            Session["ReqCnt"] = cnt;
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            if (type == 0)
            {
                string expr = "CODEID = 'STATUS'";
                DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
                ddlStatus.DataSource = view.ToTable();
                ddlStatus.DataTextField = "Description";
                ddlStatus.DataValueField = "Description";
                ddlStatus.DataBind();
                ddlStatus.Style.SelectBoxWidth = 250;
                ddlStatus.Style.SelectBoxCssClass = "";
                ddlStatus.AutoPostBack = false;
                SelectAllStatus();
                if (Session["Status_Vreq"] != null)
                    ddlStatus.SelectedValue = Session["Status_Vreq"].ToString();
            }
            if (Session["ReqIDDropDown"] == null)
            {
                var strReq = xms.getRequestIDs(uID, Convert.ToDateTime(from).ToShortDateString(), Convert.ToDateTime(to).ToShortDateString(),
                ddlTypeVar, Convert.ToInt32(Session["OrgID"]));
                List<DropDownVO> lstReq = ser.Deserialize<List<DropDownVO>>(strReq);
                dsExpID.Tables.Clear();
                dsExpID.Tables.Add(Utility.ConvertToDataTable(lstReq));
                Session["ReqIDDropDown"] = dsExpID;
            }
            else
                dsExpID = (DataSet)Session["ReqIDDropDown"];
            DataTable dtReq = new DataTable();
            if (ddlStatus.SelectedValue != string.Empty)
                dtReq = GetDataFromDropdownSelected(lstStatus, dsExpID.Tables[0], "CodeKey", 0);
            else
                dtReq = dsExpID.Tables[0];
            if (dtReq.Rows.Count > 0)
            {
                ddlExpenseID.DataSource = dtReq;
                ddlExpenseID.DataValueField = dtReq.Columns["CodeID"].ToString();
                ddlExpenseID.DataTextField = dtReq.Columns["Description"].ToString();
                ddlExpenseID.DataBind();
                ddlExpenseID.Style.SelectBoxWidth = 250;
                ddlExpenseID.AutoPostBack = false;
                //Session["ReqID"] = ddlExpenseID.SelectedValue;
                Session["Cnt"] = "1";
                ddlExpenseID.Visible = true;
                if (Session["View_ExpReqID"] != null && ddlTypeVar == 0)
                    ddlExpenseID.SelectedValue = Session["View_ExpReqID"].ToString() == null ? "All" : Session["View_ExpReqID"].ToString();
                else if (Session["View_PreReqID"] != null && ddlTypeVar == 1)
                    ddlExpenseID.SelectedValue = Session["View_PreReqID"].ToString() == null ? "All" : Session["View_PreReqID"].ToString();
                else if (Session["View_PoReqID"] != null && ddlTypeVar == 2)
                    ddlExpenseID.SelectedValue = Session["View_PoReqID"].ToString() == null ? "All" : Session["View_PoReqID"].ToString();
            }
            else
            {
                //ddlExpenseID.Visible = false;
                //Session["Cnt"] = null;
                gvExpDetails.DataBind();
            }
        }
        else
            Session["ReqCnt"] = 0;
        ShowExpGridRecordCount();
    }

    private void SelectAllReq()
    {
        ListControl lstReq = (ListControl)this.FindControl("ddlExpenseID");
        if (lstReq.Items.Count > 0)
        {
            foreach (System.Web.UI.WebControls.ListItem item in lstReq.Items)
                item.Selected = true;
        }
    }

    private void SelectAllStatus()
    {
        ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        if (lstStatus.Items.Count > 0)
        {
            foreach (System.Web.UI.WebControls.ListItem item in lstStatus.Items)
                item.Selected = true;
        }
    }

    private DataTable GetDataFromDropdownSelected(ListControl lst, DataTable dtExp, string col, int ddlType)
    {
        string str = string.Empty;
        foreach (System.Web.UI.WebControls.ListItem item in lst.Items)
        {
            if (item.Selected)
                str += item.Value + "#";
        }
        str = str.TrimEnd('#');
        if (ddlType == 0)
            Session["DdlSelStatus"] = str;
        else
            Session["DdlSelReq"] = str;
        string expr = col + " in ('" + str.Replace("#", "','") + "')";
        DataView dv = new DataView(dtExp, expr, col, DataViewRowState.CurrentRows);
        return dv.ToTable();
    }

    private void BindEDGrid(int reqID)
    {
        ListControl lstReq = (ListControl)this.FindControl("ddlExpenseID");
        dsSt = (DataSet)Session["dsSt"];
        DataTable dtReq = GetDataFromDropdownSelected(lstReq, dsSt.Tables[0], "RequestID", 1);
        dtReq.DefaultView.Sort = "StartDate DESC, RequestID DESC";
        gvExpDetails.DataSource = dtReq;
        gvExpDetails.DataBind();
        ShowExpGridRecordCount();
    }

    protected void gvExpDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            Label lblPurpose = (Label)e.Row.FindControl("lblPurpose");
            LinkButton lnkSentToVend = (LinkButton)e.Row.FindControl("lnkSentToVend");
            HiddenField hdnPreApproved = (HiddenField)e.Row.FindControl("hdnPreApproved");
            if (hdnPreApproved.Value == "0")
                lblAmnt.Text = ut.NullSafeDouble(DataBinder.Eval(e.Row.DataItem, "ActualAmount")).ToString("#.##");
            else
                lblAmnt.Text = ut.NullSafeDouble(DataBinder.Eval(e.Row.DataItem, "PreAmount")).ToString("#.##");

            if (hdnPreApproved.Value == "2")
            {
                lblPurpose.Text = DataBinder.Eval(e.Row.DataItem, "PreferredVendor").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
                lnkSentToVend.Text = DataBinder.Eval(e.Row.DataItem, "vendorFlag").ToString();
                lnkSentToVend.Enabled = false;
                lnkSentToVend.Style["color"] = "Black";
                gvExpDetails.Columns[1].ItemStyle.Width = 220;
                gvExpDetails.Columns[1].HeaderStyle.Width = 220;
                gvExpDetails.Columns[2].ItemStyle.Width = 320;
                gvExpDetails.Columns[2].HeaderStyle.Width = 320;
                gvExpDetails.Columns[3].Visible = false;
                e.Row.Cells[0].Style["text-align"] = "right";
                e.Row.Cells[1].Style["text-align"] = "left";
                e.Row.Cells[2].Style["text-align"] = "left";
                e.Row.Cells[3].Style["text-align"] = "right";
                e.Row.Cells[4].Style["text-align"] = "right";
                e.Row.Cells[5].Style["text-align"] = "center";
                e.Row.Cells[6].Style["text-align"] = "center";
                e.Row.Cells[7].Style["text-align"] = "center";
            }
            else
            {
                lblPurpose.Text = DataBinder.Eval(e.Row.DataItem, "Purpose").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
                lnkSentToVend.Text = DataBinder.Eval(e.Row.DataItem, "ReimburseFlag").ToString();
                if (lnkSentToVend.Text.ToLower() == "n")
                {
                    lnkSentToVend.Enabled = false;
                    lnkSentToVend.Style["color"] = "Black";
                }
                else
                {
                    lnkSentToVend.Enabled = true;
                    lnkSentToVend.Style["color"] = "Blue";
                }
                gvExpDetails.Columns[1].ItemStyle.Width = 110;
                gvExpDetails.Columns[1].HeaderStyle.Width = 110;
                gvExpDetails.Columns[2].ItemStyle.Width = 240;
                gvExpDetails.Columns[2].HeaderStyle.Width = 240;
                gvExpDetails.Columns[3].ItemStyle.Width = 240;
                gvExpDetails.Columns[3].HeaderStyle.Width = 240;
                gvExpDetails.Columns[3].Visible = true;
                e.Row.Cells[0].Style["text-align"] = "right";
                e.Row.Cells[1].Style["text-align"] = "right";
                e.Row.Cells[2].Style["text-align"] = "left";
                e.Row.Cells[3].Style["text-align"] = "left";
                e.Row.Cells[4].Style["text-align"] = "right";
                e.Row.Cells[5].Style["text-align"] = "center";
                e.Row.Cells[6].Style["text-align"] = "center";
                e.Row.Cells[7].Style["text-align"] = "center";
            }

            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");
            int x = 0;
            if (hdnLmtExceeded.Value.ToLower() == "y" && hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit and one of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "One of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnLmtExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit.";
            }

            if (x > 0)
                e.Row.Style["background-color"] = "#FFCCCC";

            HiddenField hdStatus = (HiddenField)e.Row.FindControl("hdStatus");
            HiddenField hdnStatusID = (HiddenField)e.Row.FindControl("hdnStatusID");
            string status = hdnStatusID.Value;

            Label lblColor = (Label)e.Row.FindControl("lblColor");
            if (status == "1")
            {
                lblColor.Style.Add("background-image", "url(images/icons/user_suit.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "2")
            {
                lblColor.Style.Add("background-image", "url(images/icons/Chief.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "3")
            {
                lblColor.Style.Add("background-image", "url(images/icons/disk.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "4")
            {
                lblColor.Style.Add("background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "5" || status == "6")
            {
                lblColor.Style.Add("background-image", "url(images/icons/delet_cancel.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "7")
            {
                lblColor.Style.Add("background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "11")
            {
                lblColor.Style.Add("background-image", "url(images/icons/cancelled.png)");
                lblColor.ToolTip = hdStatus.Value;
            }
            else if (status == "17" || status == "18")
            {
                lblColor.Style.Add("background-image", "url(images/icons/park.png)");
                lblColor.ToolTip = hdStatus.Value;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkActAmount = (LinkButton)e.Row.FindControl("lnkActAmount");
            LinkButton lnkPurpose = (LinkButton)e.Row.FindControl("lnkPurpose");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            LinkButton lnkHSentToVend = (LinkButton)e.Row.FindControl("lnkHSentToVend");
            if (ddlType.SelectedValue == "PO")
            {
                lnkPurpose.Text = "Preferred Vendor";
                lnkPurpose.CommandArgument = "PreferredVendor";
                lnkActAmount.CommandArgument = "PreAmount";
                lnkRequestID.Text = "PO No.";
                lnkRequestID.CommandArgument = "OurRefNo";
                lnkHSentToVend.Text = "Sent To Vendor";
                //lnkHSentToVend.CommandArgument = "Sent To Vendor";
            }
            else
            {
                lnkPurpose.Text = "Purpose";
                lnkPurpose.CommandArgument = "Purpose";
                if (ddlType.SelectedValue == "PA")
                    lnkActAmount.CommandArgument = "PreAmount";
                else if (ddlType.SelectedValue == "ER")
                    lnkActAmount.CommandArgument = "ActualAmount";
                lnkRequestID.Text = "Request Id";
                lnkRequestID.CommandArgument = "RequestId";
                lnkHSentToVend.Text = "Reimbursed";
                //lnkHSentToVend.CommandArgument = "Sent To Vendor";
            }
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            if (ddlTypeVar == 0)
            {
                if (Session["SortDir_ViewExp"] != null && Session["Control_ViewExp"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ViewExp"].ToString());
                    if (Session["SortDir_ViewExp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 1)
            {
                if (Session["SortDir_ViewPre"] != null && Session["Control_ViewPre"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ViewPre"].ToString());
                    if (Session["SortDir_ViewPre"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 2)
            {
                if (Session["SortDir_ViewPo"] != null && Session["Control_ViewPo"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ViewPo"].ToString());
                    if (Session["SortDir_ViewPo"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
        }
    }

    protected void ddlExpenseID_SelectedIndexChanged(object sender, EventArgs e)
    {
        //ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        //if (ddlTypeVar == 0)
        //    Session["View_ExpReqID"] = ddlExpenseID.SelectedValue;
        //else if (ddlTypeVar == 1)
        //    Session["View_PreReqID"] = ddlExpenseID.SelectedValue;
        //else if (ddlTypeVar == 2)
        //    Session["View_PoReqID"] = ddlExpenseID.SelectedValue;    
        //BindEDGrid(reqId);
        popAdvSearch.Show();
    }

    protected void ddlStatus_SelectedIndexChanged(object sender, EventArgs e)
    {
        //if (Session["dsSt"] != null)
        //{
        //    dsSt = (DataSet)Session["dsSt"];
        //    ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        //    BindDropDowns(txtFrom.Text, txtTo.Text, 1);
        //    DataTable dtReq = GetDataFromDropdownSelected(lstStatus, dsSt.Tables[0], "Status", 0);
        //    gvExpDetails.DataSource = dtReq;
        //    gvExpDetails.DataBind();
        //    ShowExpGridRecordCount();
        //    SelectAllReq();
        //    //Session["Status_Vreq"] = ddlStatus.SelectedItem.Text;
        //}
        popAdvSearch.Show();
    }

    private DataTable GetAdvSearchedData()
    {
        string statusList = string.Empty;
        string requestList = string.Empty;
        string amount = string.Empty;
        string expr = string.Empty;
        string amountField = string.Empty;
        if (ddlType.SelectedValue == "ER")
            amountField = "ActualAmount";
        else
            amountField = "PreAmount";
        ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        ListControl lstExpenseID = (ListControl)this.FindControl("ddlExpenseID");

        foreach (System.Web.UI.WebControls.ListItem item in lstStatus.Items)
            if (item.Selected)
                statusList += item.Value + "#";

        foreach (System.Web.UI.WebControls.ListItem item in lstExpenseID.Items)
            if (item.Selected)
                requestList += item.Value + "#";

        statusList = statusList.TrimEnd('#');
        requestList = requestList.TrimEnd('#');

        if (!string.IsNullOrEmpty(txtAmountFilter.Text))
            expr = "Status IN ('" + statusList.Replace("#", "','") + "') AND RequestID IN ('" + requestList.Replace("#", "','") + "') AND " + amountField + ddlAmountFilter.SelectedValue + " " + txtAmountFilter.Text;
        else
            expr = "Status IN ('" + statusList.Replace("#", "','") + "') AND RequestID IN ('" + requestList.Replace("#", "','") + "')";

        dsSt = (DataSet)Session["dsSt"];
        DataView dv = new DataView(dsSt.Tables[0], expr, "RequestID", DataViewRowState.CurrentRows);
        return dv.ToTable();
    }

    protected void btnAmntFilter_Click(object sender, EventArgs e)
    {
        gvExpDetails.DataSource = GetAdvSearchedData();
        gvExpDetails.DataBind();
        ShowExpGridRecordCount();

        //if (!string.IsNullOrEmpty(txtAmountFilter.Text))
        //{
        //    dsSt = (DataSet)Session["dsSt"];
        //    string amountField = string.Empty;
        //    if (ddlType.SelectedValue == "ER")
        //        amountField = "ActualAmount";
        //    else
        //        amountField = "PreAmount";
        //    DataView dv = new DataView(dsSt.Tables[0], amountField + ddlAmountFilter.SelectedValue + " " + txtAmountFilter.Text, "RequestID", DataViewRowState.CurrentRows);
        //    gvExpDetails.DataSource = dv;
        //    gvExpDetails.DataBind();
        //    ShowExpGridRecordCount();
        //}
        //else
        //    SortGrid();
    }

    protected void lnkClearSearch_Click(object sender, EventArgs e)
    {
        ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        ListControl lstExpenseID = (ListControl)this.FindControl("ddlExpenseID");

        foreach (System.Web.UI.WebControls.ListItem item in lstStatus.Items)
            item.Selected = true;

        foreach (System.Web.UI.WebControls.ListItem item in lstExpenseID.Items)
            item.Selected = true;

        ddlAmountFilter.SelectedValue = "=";
        txtAmountFilter.Text = string.Empty;

        SortGrid();
    }

    private void SortByStatus()
    {
        DataSet dsSt = new DataSet();
        if (Session["dsSt"] == null)
            SortGrid();

        dsSt = (DataSet)Session["dsSt"];
        string expr = "Status = " + "'" + ddlStatus.SelectedItem.Text + "'";
        DataView dsStView = new DataView(dsSt.Tables[0], expr, "Status", DataViewRowState.CurrentRows);
        DataTable dt = dsStView.ToTable();
        gvExpDetails.DataSource = dt;
        gvExpDetails.DataBind();
        ShowExpGridRecordCount();
    }

    private void GetRequestId()
    {
        if (ut.NullSafeInteger(ddlExpenseID.SelectedValue) == 0)
            allReq = true;
        else
        {
            reqId = ut.NullSafeInteger(ddlExpenseID.SelectedValue);
            allReq = false;
        }
    }

    protected void btnGo_Click(object sender, EventArgs e)
    {
        Session.Remove("ReqIDDropDown");
        BindDropDowns(txtFrom.Text, txtTo.Text, 1);
        SelectAllReq();
        SelectAllStatus();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            Session["FDate_VreqExp"] = txtFrom.Text;
            Session["TDate_VreqExp"] = txtTo.Text;
        }
        else if (ddlTypeVar == 1)
        {
            Session["FDate_VreqPre"] = txtFrom.Text;
            Session["TDate_VreqPre"] = txtTo.Text;
        }
        else if (ddlTypeVar == 2)
        {
            Session["FDate_VreqPo"] = txtFrom.Text;
            Session["TDate_VreqPo"] = txtTo.Text;
        }
        //if (dsExpID.Tables[0].Rows.Count > 0)
        //{
        Session.Remove("dsSt");
        SortGrid();
        dsSt = (DataSet)Session["dsSt"];
        ListControl lstStatus = (ListControl)this.FindControl("ddlStatus");
        DataTable dtReq = GetDataFromDropdownSelected(lstStatus, dsSt.Tables[0], "Status", 0);
        gvExpDetails.DataSource = dtReq;
        gvExpDetails.DataBind();
        ShowExpGridRecordCount();
        if (gvExpDetails.Rows.Count > 0 && ddlTypeVar == 2)
            btnRetainedPO.Visible = true;
        else
            btnRetainedPO.Visible = false;
        UpdateProgress1.Visible = false;
        //}
    }

    protected void rblExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            if (Session["FDate_VreqExp"] != null)
                txtFrom.Text = Session["FDate_VreqExp"].ToString();
            else
                txtFrom.Text = System.DateTime.Now.AddDays(-30).ToString("MM/dd/yyyy");
            if (Session["TDate_VreqExp"] != null)
                txtTo.Text = Session["TDate_VreqExp"].ToString();
            else
                txtTo.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
            Session["Expense_Vreq"] = "newexpense";
            hdnExp.Value = "newexpense";
            ShowAddButton("Expense");
            lblPageHead.Text = "My Expenses";
        }
        else if (ddlTypeVar == 1)
        {
            if (Session["FDate_VreqPre"] != null)
                txtFrom.Text = Session["FDate_VreqPre"].ToString();
            else
                txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
            if (Session["TDate_VreqPre"] != null)
                txtTo.Text = Session["TDate_VreqPre"].ToString();
            else
                txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
            Session["Expense_Vreq"] = "preapproved";
            hdnExp.Value = "preapproved";
            ShowAddButton("Expense");
            lblPageHead.Text = "My Expenses";
        }
        else if (ddlTypeVar == 2)
        {
            if (Session["FDate_VreqPo"] != null)
                txtFrom.Text = Session["FDate_VreqPo"].ToString();
            else
                txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
            if (Session["TDate_VreqPo"] != null)
                txtTo.Text = Session["TDate_VreqPo"].ToString();
            else
                txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
            Session["Expense_Vreq"] = "PO";
            hdnExp.Value = "PO";
            ShowAddButton("PO");
            lblPageHead.Text = "My Purchase Orders";
        }

        Session.Remove("dsSt");
        Session.Remove("ReqIDDropDown");
        BindDropDowns(txtFrom.Text, txtTo.Text, 0);
        SelectAllReq();
        //SortGrid();
        GetRequestData();
        DisplaySummaryChart();
        if (dsExpID.Tables[0].Rows.Count > 0)
            BindEDGrid(1);
        if (gvExpDetails.Rows.Count > 0 && ddlType.SelectedValue == "PO")
            btnRetainedPO.Visible = true;
        else
            btnRetainedPO.Visible = false;
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            Session["Control_ViewExp"] = lnk.ID;
            if (Session["SortDir_ViewExp"] == null || Session["SortDir_ViewExp"].ToString() == "Desc")
                Session["SortDir_ViewExp"] = "Asc";
            else
                Session["SortDir_ViewExp"] = "Desc";
        }
        else if (ddlTypeVar == 1)
        {
            Session["Control_ViewPre"] = lnk.ID;
            if (Session["SortDir_ViewPre"] == null || Session["SortDir_ViewPre"].ToString() == "Desc")
                Session["SortDir_ViewPre"] = "Asc";
            else
                Session["SortDir_ViewPre"] = "Desc";
        }
        else if (ddlTypeVar == 2)
        {
            Session["Control_ViewPo"] = lnk.ID;
            if (Session["SortDir_ViewPo"] == null || Session["SortDir_ViewPo"].ToString() == "Desc")
                Session["SortDir_ViewPo"] = "Asc";
            else
                Session["SortDir_ViewPo"] = "Desc";
        }
        if (ddlTypeVar == 0)
            Session["SortExpr_ViewExp"] = e.CommandArgument;
        else if (ddlTypeVar == 1)
            Session["SortExpr_ViewPre"] = e.CommandArgument;
        else if (ddlTypeVar == 2)
            Session["SortExpr_ViewPo"] = e.CommandArgument;

        SortGrid();
    }

    private void GetRequestData()
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        var strExp = xms.getExpenses(Convert.ToInt32(Session["UserID"]), txtFrom.Text, txtTo.Text, ddlTypeVar);
        List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
        dsSt.Tables.Clear();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstExp));
        Session["dsSt"] = dsSt;
    }

    private void SortGrid()
    {
        int uID = Convert.ToInt32(Session["UserID"]);
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (Session["dsSt"] == null)
        {
            GetRequestData();
            dsSt = (DataSet)Session["dsSt"];
            if (dsSt.Tables[0].Rows.Count > 0)
                Session["UserNameToExp"] = dsSt.Tables[0].Rows[0]["userName"].ToString();
        }
        else
            dsSt = (DataSet)Session["dsSt"];

        if (dsSt.Tables[0].Rows.Count > 0)
            ddlExpenseID.Visible = true;
        if (ddlTypeVar == 0)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);
            if ((Session["SortExpr_ViewExp"] != null) && Session["SortDir_ViewExp"] != null)
            {
                if (Session["SortExpr_ViewExp"].ToString() == "ActualAmount")
                {
                    DataTable dt = dsSt.Tables[0];
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                    {
                        dt2.ImportRow(dr);
                    }
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_ViewExp"].ToString() + " " + Session["SortDir_ViewExp"].ToString();
            }
            else
                sortedView.Sort = "StartDate Desc";
            gvExpDetails.DataSource = sortedView;
        }
        else if (ddlTypeVar == 1)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);
            if ((Session["SortExpr_ViewPre"] != null) && Session["SortDir_ViewPre"] != null)
            {
                if (Session["SortExpr_ViewPre"].ToString() == "PreAmount")
                {
                    DataTable dt = dsSt.Tables[0];
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                    {
                        dt2.ImportRow(dr);
                    }
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_ViewPre"].ToString() + " " + Session["SortDir_ViewPre"].ToString();
            }
            else
                sortedView.Sort = "StartDate Desc";
            gvExpDetails.DataSource = sortedView;
        }
        else if (ddlTypeVar == 2)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);

            if ((Session["SortExpr_ViewPo"] != null) && Session["SortDir_ViewPo"] != null)
            {
                if (Session["SortExpr_ViewPo"].ToString() == "PreAmount")
                {
                    DataTable dt = dsSt.Tables[0];
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                    {
                        dt2.ImportRow(dr);
                    }
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_ViewPo"].ToString() + " " + Session["SortDir_ViewPo"].ToString();
            }
            else
                sortedView.Sort = "StartDate Desc";
            gvExpDetails.DataSource = sortedView;
        }
        else
            gvExpDetails.DataSource = dsSt;

        gvExpDetails.DataBind();
        ShowExpGridRecordCount();
        DisplaySummaryChart();
    }

    private void ShowExpGridRecordCount()
    {
        if (gvExpDetails.Rows.Count > 0)
        {
            dvExpGridRecCount.Style["display"] = "block";

            //display row count
            //lblExpGridRowCount.Text = gvExpDetails.Rows.Count.ToString();

            //display total amount and row count
            double totAmnt = 0;
            int count = 0;
            foreach (GridViewRow row in gvExpDetails.Rows)
            {
                Label lblAmnt = (Label)row.FindControl("lblAmnt");
                HiddenField hdnStatusID = (HiddenField)row.FindControl("hdnStatusID");
                if (hdnStatusID.Value != "11")
                {
                    totAmnt += ut.NullSafeDouble(lblAmnt.Text);
                    count++;
                }
            }
            lblExpGridRowCount.Text = count.ToString();
            lblExpGridTotalAmount.Text = totAmnt.ToString("0,0.00", CultureInfo.InvariantCulture);
            updNotes.Update();
        }
        else
            dvExpGridRecCount.Style["display"] = "none";
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        if (Convert.ToInt32(Session["ReqCnt"]) > 0)
            LoadData();
    }

    protected void GetRetainedPOs(object sender, EventArgs e)
    {
        dsSt = (DataSet)Session["dsSt"];
        string expr = "vendorFlag = 'N'";
        DataView dv = new DataView(dsSt.Tables[0], expr, "vendorFlag", DataViewRowState.CurrentRows);

        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dv.ToTable();

        BoundField dgc_RequestID = new BoundField();
        dgc_RequestID.DataField = "RequestID";
        dgc_RequestID.HeaderText = "Request ID";
        dgDgrid.Columns.Add(dgc_RequestID);

        BoundField dgc_OurRefNo = new BoundField();
        dgc_OurRefNo.DataField = "OurRefNo";
        dgc_OurRefNo.HeaderText = "PO Number";
        dgDgrid.Columns.Add(dgc_OurRefNo);

        BoundField dgc_PreferredVendor = new BoundField();
        dgc_PreferredVendor.DataField = "PreferredVendor";
        dgc_PreferredVendor.HeaderText = "Preferred Vendor";
        dgDgrid.Columns.Add(dgc_PreferredVendor);

        BoundField dgc_StartDate = new BoundField();
        dgc_StartDate.DataField = "StartDate";
        dgc_StartDate.HeaderText = "Start Date";
        dgDgrid.Columns.Add(dgc_StartDate);

        BoundField dgc_Purpose = new BoundField();
        dgc_Purpose.DataField = "Purpose";
        dgc_Purpose.HeaderText = "Purpose";
        dgDgrid.Columns.Add(dgc_Purpose);

        BoundField dgc_PreAmount = new BoundField();
        dgc_PreAmount.DataField = "PreAmount";
        dgc_PreAmount.HeaderText = "Line Amount";
        dgDgrid.Columns.Add(dgc_PreAmount);

        BoundField dgc_ActualAmount = new BoundField();
        dgc_ActualAmount.DataField = "ActualAmount";
        dgc_ActualAmount.HeaderText = "Invoice Amount";
        dgDgrid.Columns.Add(dgc_ActualAmount);

        BoundField dgc_Status = new BoundField();
        dgc_Status.DataField = "Status";
        dgc_Status.HeaderText = "Status";
        dgDgrid.Columns.Add(dgc_Status);

        BoundField dgc_LimitExceeded = new BoundField();
        dgc_LimitExceeded.DataField = "LimitExceeded";
        dgc_LimitExceeded.HeaderText = "Exceeded Allowed Department Limit";
        dgDgrid.Columns.Add(dgc_LimitExceeded);

        BoundField dgc_BudgetLimit = new BoundField();
        dgc_BudgetLimit.DataField = "BudgetLimit";
        dgc_BudgetLimit.HeaderText = "Exceeded Allowed Budget Limit";
        dgDgrid.Columns.Add(dgc_BudgetLimit);

        BoundField dgc_vendFlag = new BoundField();
        dgc_BudgetLimit.DataField = "vendorFlag";
        dgc_BudgetLimit.HeaderText = "Sent To Vendor";
        dgDgrid.Columns.Add(dgc_vendFlag);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();

        string type = string.Empty;
        dgDgrid.Caption = "<b><h3>Purchase Order Details from " + txtFrom.Text + " to " + txtTo.Text + "</h3></b>";
        type = "po";

        Session["dgDgrid"] = dgDgrid;
        Response.Redirect("DownloadFile.aspx?typ=11&exp=" + type);
    }

    private void UpdateApprovalReqCount(string mgrUserID)
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        //Get Manager usergroup
        int expType = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA") ? 1 : 2);
        string[] arr = new string[3];
        if (expType == 2)
            arr = ddlPOMgrEmail.SelectedItem.Text.Split('-');
        else
            arr = ddlManagerEmail.SelectedItem.Text.Split('-');
        //Get Manager usergroup
        if ((ddlType.SelectedValue == dt1.Rows[0]["CodeKey"].ToString()) && (Session["UserGroup"].ToString() == arr[1]))
        {
            string strReqMgr = xms.getReqForApprovalMgr(Convert.ToInt32(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), 1, expType);
            List<ApproveRequestVO> lstReqMgr = ser.Deserialize<List<ApproveRequestVO>>(strReqMgr);
            dt = Utility.ConvertToDataTable(lstReqMgr);
            Session["MgrPendingExpensesCnt"] = dt.Rows.Count;
        }
    }

    private void UpdateAPApprovalReqCount()
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        int expType = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA") ? 1 : 2);
        if ((ddlType.SelectedValue == dt1.Rows[0]["CodeKey"].ToString()) && (Session["IsAP"] != null) && (Session["AppFlag"].ToString().ToLower() == "n"))
        {
            string strAPExp = xms.getRequestsForAPApproval(ut.NullSafeInteger(Session["OrgID"]), 2, Session["CompCode"].ToString(), expType);
            List<ApproveRequestVO> lstApExp = ser.Deserialize<List<ApproveRequestVO>>(strAPExp);
            dt = Utility.ConvertToDataTable(lstApExp);
            Session["APPendingExpensesCnt"] = dt.Rows.Count;
        }
    }

    protected void AddNewExpensePO(object sender, EventArgs e)
    {
        Session.Remove("NewReqID");
        if (btnAddNew.Text.ToLower().Contains("expense"))
            Response.Redirect("newexpense.aspx?sel=1");
        else
            Response.Redirect("pogen.aspx");
    }

    private void ShowAddButton(string addStr)
    {
        btnAddNew.Text = "   Create " + addStr;
    }

    protected void ShowExpReimburseDetails(object sender, EventArgs e)
    {
        LinkButton lnkReqEdit = new LinkButton();
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        lnkReqEdit = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
        GetReimburseDetails(ut.NullSafeInteger(lnkReqEdit.Text));
        popReimbDetails.Show();
    }

    private void GetReimburseDetails(int requestID)
    {
        string strReimb = xms.getExpReimburseDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), requestID, 2);
        List<ReimburseVO> lstReimb = ser.Deserialize<List<ReimburseVO>>(strReimb);
        DataTable dt = Utility.ConvertToDataTable(lstReimb);

        txtReimbPayMode.Text = dt.Rows[0]["payMode"].ToString();
        txtPayableTo.Text = dt.Rows[0]["payableTO"].ToString();
        if (txtReimbPayMode.Text.ToLower().Contains("cheque") || txtReimbPayMode.Text.ToLower().Contains("check"))
            dvCheque.Style.Add("display", "block");
        else
            dvCheque.Style.Add("display", "none");

        if (txtReimbPayMode.Text.ToLower().Contains("cheque") || txtReimbPayMode.Text.ToLower().Contains("check"))
        {
            txtChqDate.Text = dt.Rows[0]["payModeDate"].ToString();
            txtchqNO.Text = dt.Rows[0]["payModeDetail1"].ToString();
            //txtBank.Text = dt.Rows[0]["payModeDetail2"].ToString();
            //txtBank.ReadOnly = true;
            //txtChqDate.ReadOnly = true;
            //txtchqNO.ReadOnly = true;
            //dvBankDetails.Style["display"] = "none";
        }
        //txtDesc.Text = dt.Rows[0]["comments"].ToString();
        //txAmount.ReadOnly = true;
        //txtDesc.ReadOnly = true;
        //txtReimbPayMode.ReadOnly = true;
        txAmount.Text = dt.Rows[0]["totalAmount"].ToString();
        GetCurrencySymbol();
    }

    private void BindCities()
    {
        DataTable dt = new DataTable();
        if (Session["Cities"] == null)
        {
            string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "USCITIES");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Cities"] = dt;
        }
        else
            dt = (DataTable)Session["Cities"];
    }

    #region Export Expenses Data to Excel

    protected void ExportExpensesToExcel(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        if (Session["dsSt"] != null)
        {
            //dsSt = (DataSet)Session["dsSt"];
            DataTable dt = new DataTable();
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            //if (ddlStatus.SelectedItem.Text != "All")
            //{
            //    ListControl lstReq = (ListControl)this.FindControl("ddlExpenseID");
            //    dt = GetDataFromDropdownSelected(lstReq, dsSt.Tables[0], "RequestID", 1);
            //}
            //else
            dt = GetAdvSearchedData();

            GridView dgDgrid = new GridView();
            dgDgrid.AllowPaging = false;
            dgDgrid.DataSource = dt;

            BoundField dgc_RequestID = new BoundField();
            dgc_RequestID.DataField = "RequestID";
            dgc_RequestID.HeaderText = "Request ID";
            dgDgrid.Columns.Add(dgc_RequestID);

            if (ddlTypeVar == 2)
            {
                BoundField dgc_OurRefNo = new BoundField();
                dgc_OurRefNo.DataField = "OurRefNo";
                dgc_OurRefNo.HeaderText = "PO Number";
                dgDgrid.Columns.Add(dgc_OurRefNo);

                BoundField dgc_PreferredVendor = new BoundField();
                dgc_PreferredVendor.DataField = "PreferredVendor";
                dgc_PreferredVendor.HeaderText = "Preferred Vendor";
                dgDgrid.Columns.Add(dgc_PreferredVendor);
            }

            BoundField dgc_StartDate = new BoundField();
            dgc_StartDate.DataField = "StartDate";
            dgc_StartDate.HeaderText = "Start Date";
            dgDgrid.Columns.Add(dgc_StartDate);

            BoundField dgc_Purpose = new BoundField();
            dgc_Purpose.DataField = "Purpose";
            dgc_Purpose.HeaderText = "Purpose";
            dgDgrid.Columns.Add(dgc_Purpose);

            BoundField dgc_PreAmount = new BoundField();
            dgc_PreAmount.DataField = "PreAmount";
            dgc_PreAmount.HeaderText = (ddlTypeVar == 2 ? "PO Amount" : "Pre-Amount");
            dgDgrid.Columns.Add(dgc_PreAmount);

            BoundField dgc_ActualAmount = new BoundField();
            dgc_ActualAmount.DataField = "ActualAmount";
            dgc_ActualAmount.HeaderText = (ddlTypeVar == 2 ? "Invoice Amount" : "Actual Amount");
            dgDgrid.Columns.Add(dgc_ActualAmount);

            BoundField dgc_Status = new BoundField();
            dgc_Status.DataField = "Status";
            dgc_Status.HeaderText = "Status";
            dgDgrid.Columns.Add(dgc_Status);

            BoundField dgc_LimitExceeded = new BoundField();
            dgc_LimitExceeded.DataField = "LimitExceeded";
            dgc_LimitExceeded.HeaderText = "Exceeded Dept. Limit";
            dgDgrid.Columns.Add(dgc_LimitExceeded);

            BoundField dgc_BudgetLimit = new BoundField();
            dgc_BudgetLimit.DataField = "BudgetLimit";
            dgc_BudgetLimit.HeaderText = "Exceeded Budg. Limit";
            dgDgrid.Columns.Add(dgc_BudgetLimit);

            dgDgrid.AutoGenerateColumns = false;
            dgDgrid.DataBind();

            string type = string.Empty;
            if (ddlTypeVar != 2)
            {
                dgDgrid.Caption = "<b><h3>Expense Details from " + txtFrom.Text + " to " + txtTo.Text + "</h3></b>";
                type = "exp";
            }
            else
            {
                dgDgrid.Caption = "<b><h3>Purchase Order Details from " + txtFrom.Text + " to " + txtTo.Text + "</h3></b>";
                type = "po";
            }
            Session["dgDgrid"] = dgDgrid;
            Response.Redirect("DownloadFile.aspx?typ=11&exp=" + type);
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout(ShowExportNullMsg(), 5000);", true);
        }
    }

    #endregion

    #region Chart

    private void DisplaySummaryChart()
    {
        string[] x = new string[4];
        int[] y = new int[4];
        int cnt = 0;

        dsSt = (DataSet)Session["dsSt"];
        DataView dv = new DataView(dsSt.Tables[0], "StatusID = 3", "StatusID", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            x[0] = "Saved";
            y[0] = dv.ToTable().Rows.Count;
            cnt++;
        }

        DataView dv1 = new DataView(dsSt.Tables[0], "StatusID in (1,2)", "StatusID", DataViewRowState.CurrentRows);
        if (dv1.ToTable().Rows.Count > 0)
        {
            x[1] = "Pending";
            y[1] = dv1.ToTable().Rows.Count;
            cnt++;
        }

        DataView dv2 = new DataView(dsSt.Tables[0], "StatusID in (5,6)", "StatusID", DataViewRowState.CurrentRows);
        if (dv2.ToTable().Rows.Count > 0)
        {
            x[2] = "Rejected";
            y[2] = dv2.ToTable().Rows.Count;
            cnt++;
        }

        DataView dv3 = new DataView(dsSt.Tables[0], "StatusID in (4,12,13,14,15,16)", "StatusID", DataViewRowState.CurrentRows);
        if (dv3.ToTable().Rows.Count > 0)
        {
            x[3] = "Approved";
            y[3] = dv3.ToTable().Rows.Count;
            cnt++;
        }
        if (cnt > 0)
        {
            Chart1.Visible = true;
            Chart1.Series[0].Points.DataBindXY(x, y);
            Chart1.Series[0].ChartType = SeriesChartType.Doughnut;

            Chart1.ChartAreas["ChartArea1"].Area3DStyle.Enable3D = true;
            Chart1.Legends[0].Enabled = true;
            Chart1.Legends[0].Docking = Docking.Right;
        }
        else
            Chart1.Visible = false;
    }

    #endregion

    #endregion

    #region Edit Expense

    protected void Edit(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        //Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("ReqID");
        Session.Remove("popup");
        Session.Remove("dtSelDfts");
        Session.Remove("fStream");
        Session.Remove("RctFileName");
        Session.Remove("FileExt");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            dvPoError.InnerHtml = string.Empty;
            LoadEditPOData(sender);
        }
        else
            LoadEditData(sender);
        DisplaySummaryChart();
    }

    private DataTable GetPrefVendors()
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
        return dt;
    }

    private void BindPrefVendors()
    {
        GetPrefVendors();
        DataTable dt = (DataTable)Session["PreferredVendorList"];
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);

        ddlPreVendor.DataSource = dv;
        ddlPreVendor.DataBind();
        ddlPreVendor.Items.Insert(0, "Please Select");
        ddlPreVendor.Items.FindByText("Please Select").Value = "0";
    }

    private void LoadEditPOData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("LmtExceeded");
        Session.Remove("fStreamPO");
        Session.Remove("FileExtPO");
        Session.Remove("RctFileNamePO");
        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnStatus = new HiddenField();
        HiddenField hdnStatusID = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnReq = new HiddenField();
        HiddenField hdnActionDate = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnStatus = (HiddenField)row.Cells[0].FindControl("hdStatus");
            hdnStatusID = (HiddenField)row.Cells[0].FindControl("hdnStatusID");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnReq = (HiddenField)row.Cells[0].FindControl("hdnReq");
            hdnActionDate = (HiddenField)row.Cells[0].FindControl("hdnActionDate");
            hdnHeaderStartdate.Value = hdnStartDate.Value;
            hdnHeaderPurpose.Value = hdnPurpose.Value;
        }
        else
        {
            foreach (GridViewRow row1 in gvExpDetails.Rows)
            {
                hdnReq = (HiddenField)row1.FindControl("hdnReq");
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(hdnReq.Value) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnStatus = (HiddenField)row1.FindControl("hdStatus");
                    hdnStatusID = (HiddenField)row1.FindControl("hdnStatusID");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnActionDate = (HiddenField)row1.FindControl("hdnActionDate");
                    break;
                }
            }
            hdnHeaderStartdate.Value = hdnStartDate.Value;
            hdnHeaderPurpose.Value = hdnPurpose.Value;
        }
        //Fetch details grid data and master fields
        GetPOLineData(hdnReq.Value, hdnStatus.Value, hdnStatusID.Value, hdnActionDate.Value, hdnStartDate.Value, hdnPurpose.Value, hdnCommentsCnt.Value);
    }

    private void GetPOLineData(string req, string status, string statusID, string actionDate, string startDate, string purpose, string CommentsCnt)
    {
        reqId = Convert.ToInt32(req);
        Session["ReqID"] = reqId;
        hdPOCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
        Session["Status"] = status;
        Session["StatusID"] = statusID;
        Session["ActionDate"] = actionDate;

        if (statusID == "1" || statusID == "2")
            btnPORemind.Visible = true;
        else
            btnPORemind.Visible = false;

        if (statusID == "3" || statusID == "6" || statusID == "5")
        {
            lblPOHeading.Text = "Edit PO Details";
            btnPOSubmit.Visible = true;
            btnAddPoExpense.Visible = true;
            btnPOSave.Visible = true;
            if (status.ToLower().ToString() == "saved")
                spnPOStatus.Style.Add("color", "Blue");
            else
                spnPOStatus.Style.Add("color", "Red");
            ddlPOMgrEmail.Enabled = true;
            ddlPreVendor.Enabled = true;
        }
        else
        {
            lblPOHeading.Text = "View PO Details";
            dvExpDetails.Visible = false;
            btnPOSubmit.Visible = false;
            btnAddPoExpense.Visible = false;
            btnPOSave.Visible = false;
            ddlPOMgrEmail.Enabled = false;
            ddlPreVendor.Enabled = false;
            if (status.ToLower().ToString() == "manager review" || status.ToLower().ToString() == "ap review")
                spnPOStatus.Style.Add("color", "Orange");
            else
                spnPOStatus.Style.Add("color", "Green");
        }

        //hide cancel option if status is Approved or Cancelled
        hdnExpVoid.Value = string.Empty;
        if (statusID == "4" || statusID == "11")
            btnCancelPO.Visible = false;
        else
            btnCancelPO.Visible = true;
        //hide cancel option if status is Approved or Cancelled

        DataSet dsPoReq = new DataSet();
        string strPoReqID = xms.getExpDetailsByReqId(Convert.ToInt32(req), Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstPOBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strPoReqID);
        dsPoReq.Tables.Add(Utility.ConvertToDataTable(lstPOBtReq));

        if (dsPoReq != null)
        {
            dtPO = dsPoReq.Tables[0];
            Session["dtPo"] = dtPO;
            GetPOData();
        }
        hdnManagerGrpCode.Value = dsPoReq.Tables[0].Rows[0]["mgrGroupCode"].ToString();
        BindPrefVendors();
        try
        {
            ddlPreVendor.SelectedValue = dsPoReq.Tables[0].Rows[0]["PreferredVendor"].ToString();

            //get qb vendor id
            DataTable dtVend = (DataTable)Session["PreferredVendorList"];
            DataView dv = new DataView(dtVend, "PreferredVendor = '" + ddlPreVendor.SelectedValue.Replace("'", "''") + "'", "PreferredVendor", DataViewRowState.CurrentRows);
            hdnQBVendID.Value = dv.ToTable().Rows[0]["qbVendId"].ToString();
            //get qb vendor id
        }
        catch
        {
            ddlPreVendor.SelectedValue = "0";
        }

        try
        {
            //Get discount offered by selected vendor
            DataTable dtClss = (DataTable)Session["PreferredVendorList"];
            string vendor = ddlPreVendor.SelectedValue;
            string expr = "PreferredVendor = '" + vendor.Replace("'", "''") + "'";
            DataView dv1 = new DataView(dtClss, expr, "PreferredVendor", DataViewRowState.CurrentRows);
            hdnVendDiscount.Value = dv1.ToTable().Rows[0]["vendDiscPercent"].ToString();
            hdnVendPromoCode.Value = dv1.ToTable().Rows[0]["promoCode"].ToString();
            //Get discount offered by selected vendor 
        }
        catch
        {
            hdnVendDiscount.Value = "0";
            hdnVendPromoCode.Value = string.Empty;
        }

        hdnPreVendor.Value = ddlPreVendor.SelectedValue;
        txtPOTripStrtDate.Text = startDate;
        txtPoPurpose.Text = purpose;

        double grandTotal = 0;
        for (int i = 0; i < dtPO.Rows.Count; i++)
        {
            grandTotal += Convert.ToDouble(dtPO.Rows[i]["PreAmount"]);
        }
        Session["POGrandTotal"] = grandTotal;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = dsPoReq.Tables[0].Rows[0]["ManagerID"].ToString();
        drManager["Email"] = dsPoReq.Tables[0].Rows[0]["ManagerEmail"].ToString() + "-" + dsPoReq.Tables[0].Rows[0]["mgrGroupCode"].ToString();
        dtManager.Rows.Add(drManager);
        Session["MngrID"] = dsPoReq.Tables[0].Rows[0]["ManagerID"].ToString();

        ddlPOMgrEmail.DataSource = dtManager;
        ddlPOMgrEmail.DataBind();

        Session["PONum"] = Utility.NullSafeString(dsPoReq.Tables[0].Rows[0]["ourRefNo"]);

        int cmnts = ut.NullSafeInteger(CommentsCnt);
        if (cmnts > 0)
        {
            lnkPOComments.Enabled = true;
            lnkPOComments.Style["text-decoration"] = "none";
            //lnkPOComments.Style["text-decoration"] = "underline";
            lnkPOComments.CssClass = "button button-blue";
            lnkPOComments.ToolTip = "Click to view comments";
        }
        else
        {
            lnkPOComments.Enabled = false;
            lnkPOComments.CssClass = "button button-gray";
            lnkPOComments.ToolTip = "No comments for this PO.";
            lnkPOComments.Style["text-decoration"] = "none";
        }

        btnPOSave.Attributes.Add("onclick", "javascript:return validateExpViewMaster();");
        btnPOSubmit.Attributes.Add("onclick", "javascript:return validateExpViewMaster();");
        btnAddPoExpense.Attributes.Add("onclick", "javascript:return validateExpViewMaster();");

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;
        hdnYear.Value = year.ToString();

        MonthFilter(year, txtPOTripStrtDate.Text);
        ddlPOMgrEmail.Focus();

        //Show Ship/Bill addresses
        GetShippingAddress();
        GetBillingAddress();

        //Get Jobs
        BindJobs();
        if (!string.IsNullOrEmpty(dsPoReq.Tables[0].Rows[0]["jobCode"].ToString()))
        {
            //string[] arrJob = dsPoReq.Tables[0].Rows[0]["jobCode"].ToString().Split('-');
            //if (!string.IsNullOrEmpty(arrJob[0]))
            ddlJobs.SelectedValue = (dsPoReq.Tables[0].Rows[0]["jobCode"].ToString().Split('-')[0]);//arrJob[0]
        }

        //Get PO attachments count
        Attachments(0);
        ds = (DataSet)Session["AttchList"];
        btnAttach.Text = "   Attachments(" + ds.Tables[0].Rows.Count + ")";
        //Get PO attachments count
        pop_EditPO.Show();
    }

    private string MonthFilter(int year, string startDate)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDate"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(startDate) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(startDate) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth;
    }

    private void GetPOData()
    {
        dtPO = (DataTable)Session["dtPO"];
        gvPO.DataSource = dtPO;
        gvPO.DataBind();
    }

    private void GetShippingAddress()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            lblShipAddr.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipCompName.Text = dv.ToTable().Rows[0]["CompName"].ToString();
            lblShipAddr1.Text = dv.ToTable().Rows[0]["Address1"].ToString();
            lblShipAddr2.Text = dv.ToTable().Rows[0]["Address2"].ToString();
            lblShipCity.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipState.Text = dv.ToTable().Rows[0]["State"].ToString();
            lblShipCountry.Text = dv.ToTable().Rows[0]["CountryCode"].ToString();
            lblShipZipCode.Text = dv.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void GetBillingAddress()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        DataView dvBillComp = new DataView(dsCompCode.Tables[0], "CompCode = '" + dv.ToTable().Rows[0]["billToCompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dvBillComp.ToTable().Rows.Count > 0)
        {
            lblBillAddr.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillCompName.Text = dvBillComp.ToTable().Rows[0]["CompName"].ToString();
            lblBillAddr1.Text = dvBillComp.ToTable().Rows[0]["Address1"].ToString();
            lblBillAddr2.Text = dvBillComp.ToTable().Rows[0]["Address2"].ToString();
            lblBillCity.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillState.Text = dvBillComp.ToTable().Rows[0]["State"].ToString();
            lblBillCountry.Text = dvBillComp.ToTable().Rows[0]["CountryCode"].ToString();
            lblBillZipCode.Text = dvBillComp.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void LoadEditData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        dvError.InnerHtml = string.Empty;
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
        HiddenField hdnActionDate = new HiddenField();
        HiddenField hdnOnBehalfOf = new HiddenField();
        HiddenField hdnSendToQB = new HiddenField();

        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnStatus = (HiddenField)row.Cells[0].FindControl("hdStatus");
            hdnStatusID = (HiddenField)row.Cells[0].FindControl("hdnStatusID");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnActionDate = (HiddenField)row.Cells[0].FindControl("hdnActionDate");
            hdnOnBehalfOf = (HiddenField)row.Cells[0].FindControl("hdnOnBehalfOf");
            hdnSendToQB = (HiddenField)row.Cells[0].FindControl("hdnSendToQB");
            hdnHeaderStartdate.Value = hdnStartDate.Value;
            hdnHeaderPurpose.Value = hdnPurpose.Value;
            hdnHeaderOnBehalfOf.Value = hdnOnBehalfOf.Value;
        }
        else
        {
            foreach (GridViewRow row1 in gvExpDetails.Rows)
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
                    hdnActionDate = (HiddenField)row1.FindControl("hdnActionDate");
                    hdnOnBehalfOf = (HiddenField)row1.FindControl("hdnOnBehalfOf");
                    hdnSendToQB = (HiddenField)row1.FindControl("hdnSendToQB");
                    break;
                }
            }
            hdnHeaderStartdate.Value = hdnStartDate.Value;
            hdnHeaderPurpose.Value = hdnPurpose.Value;
            hdnHeaderOnBehalfOf.Value = hdnOnBehalfOf.Value;
        }
        GetExpLineData(lblReqID.Text, hdnStatus.Value, hdnStatusID.Value, hdnActionDate.Value, hdnStartDate.Value, hdnPurpose.Value, hdnCommentsCnt.Value,
            hdnLmtExceeded.Value, hdnPreApproved.Value, hdnIsMgrPreApproved.Value, hdnOnBehalfOf.Value, hdnSendToQB.Value);
    }

    private void GetExpLineData(string req, string status, string statusID, string actionDate, string startDate, string purpose, string CommentsCnt, string lmtExcd, string preApprd, string isMgrPreApprd, string onBehalfOf, string sendToQB)
    {
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = lmtExcd;
        hdnPreType.Value = preApprd;
        reqId = Convert.ToInt32(req);
        Session["ReqID"] = reqId;
        hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
        hdtripStrtDate.Value = startDate;
        Session["ActionDate"] = actionDate;

        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            expType = "1";
            hdnExp.Value = "newexpense";
            Session["PreApproval"] = false;
            //if (Session["AppFlag"].ToString().ToLower() == "y")
            //    if (Session["AppLmt"] != null)
            //        if (Session["AppLmt"].ToString() == hdnMaxApprLimit.Value)
            //            hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 2).ToString();
            //        else
            //            hdnMaxApprLimit.Value = "99999";
        }
        else if (ddlTypeVar == 1)
        {
            expType = "2";
            hdnExp.Value = "preapproved";
            Session["PreApproval"] = true;
            //if (Session["AppLmt"] != null)
            //    if (Session["AppLmt"].ToString() == hdnMaxApprLimit.Value)
            //        hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 2).ToString();
        }
        Session["IsMgrPreApproved"] = isMgrPreApprd;
        //Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));

        txtPurpose.Text = purpose;
        txtTripStartDate.Text = startDate;
        //Session.Remove("PreferredVendorList");
        BindOnBehalfOfList();
        txtOnBehalfOf.Text = onBehalfOf;
        //display send to QB checkbox only if QB integration is enable.
        CheckSendToQB(sendToQB);
        //if (string.IsNullOrEmpty(Session["AccountBy"].ToString()))
        //    ChkSendToQB.Visible = false;
        //else
        //{
        //    ChkSendToQB.Visible = true;
        //    ChkSendToQB.Checked = sendToQB.ToLower() == "y" ? true : false;
        //}

        //enable/disable PreAmount and ActualAmount text fields.
        if (preApprd == "1" && isMgrPreApprd == "0")
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
        Session["Status"] = status;
        Session["StatusID"] = statusID;

        if (statusID == "1" || statusID == "2")
            btnRemind.Visible = true;
        else
            btnRemind.Visible = false;

        if (statusID == "3" || statusID == "6" || statusID == "5")
        {
            lblHeading.Text = "Edit Expense";
            btnSubmit.Visible = true;
            btnAddExpense.Visible = true;
            btnSave.Visible = true;
            btnConvert.Visible = false;
            dvExpDetails.Visible = true;
            if (status.ToLower().ToString() == "saved")
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
            if (isMgrPreApprd == "1" && status == "PreApproved")
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
            if (status.ToLower() == "manager review" || status.ToLower() == "ap review")
                spnStatus.Style.Add("color", "Orange");
            else
                spnStatus.Style.Add("color", "Green");
        }

        //hide cancel option if status is Approved or Cancelled
        hdnExpVoid.Value = string.Empty;
        if (statusID == "1" || statusID == "2" || statusID == "4" || statusID == "11")
            btnCancelExp.Visible = false;
        else
            btnCancelExp.Visible = true;
        //hide cancel option if status is Approved or Cancelled

        //Bind epense line grid
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
        //Bind epense line grid

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = dsExp.Tables[0].Rows[0]["ManagerID"].ToString();
        drManager["Email"] = dsExp.Tables[0].Rows[0]["ManagerEmail"].ToString() + "-" + dsExp.Tables[0].Rows[0]["mgrGroupCode"].ToString();
        Session["MngrID"] = dsExp.Tables[0].Rows[0]["ManagerID"].ToString();
        dtManager.Rows.Add(drManager);

        ddlManagerEmail.DataSource = dtManager;
        ddlManagerEmail.DataBind();

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(CommentsCnt);
        if (cmnts > 0)
        {
            lknCmnt.Enabled = true;
            lknCmnt.Style["text-decoration"] = "none";
            lknCmnt.CssClass = "buttonnew-blue";
            lknCmnt.ToolTip = "Click to view comments";
        }
        else
        {
            lknCmnt.Enabled = false;
            lknCmnt.Style["text-decoration"] = "none";
            lknCmnt.CssClass = "buttonnew-gray";
            lknCmnt.ToolTip = "No comments for this expense";
        }

        //Add attributes to buttons for validations
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        btnSave.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
        btnSubmit.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
        btnAddExpense.Attributes.Add("onclick", "javascript:return check_View('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
        btnAddExpense.Attributes.Add("onfocus", "javascript: return validateOnBehalfOf();");

        //Calculate Expense totals
        expTotal = 0; grandTotal = 0; preExpTotal = 0;

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblGrandTotalAmnt.Text = grandTotal.ToString();
        Session["AmountToExp"] = lblGrandTotalAmnt.Text;
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

        //Fetch max aproval limit in the organization
        hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 1).ToString();
        //if (Session["AppLmt"] != null)
        //{
        //    if (Session["AppLmt"].ToString() == hdnMaxApprLimit.Value)
        //        hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 2).ToString();
        //}

        ddlManagerEmail.Focus();
        popup.Show();
    }

    private void ClearPOFields()
    {
        //ddlExpItem.SelectedIndex = 0;
        txtUnitPrice.Text = string.Empty;
        txtCurrBal.Text = "0";
        txtDescr.Text = string.Empty;
        txtBudget.Text = "0";
        txtBalAfterPO.Text = "0";
        txtPoAmount.Text = string.Empty;
        txtPkgUnit.Text = string.Empty;
        txtRemain.Text = "0";
        txtQuantity.Text = "1";
        txtAccCode.Text = string.Empty;
        txtBalAfterPO.Text = string.Empty;
        txtVendPtNo.Text = string.Empty;
        txtShipCost.Text = string.Empty;
    }

    private void BindPoExpenseItems()
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();

        string deptCode = string.Empty;
        //dept = ddlDepartment.SelectedValue;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = ddlDepartment.SelectedValue;
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = string.Empty;

        if (Session["dtExpItem"] == null)
        {
            string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), deptCode, 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            DataView dtview = new DataView(dt);
            //dtview.Sort = "expItem ASC";
            dtv = dtview.ToTable();

            //add new column containing account number and account name seperated with --
            if (!dtv.Columns.Contains("AcountClss"))
                dtv.Columns.Add("AcountClss");

            for (int i = 0; i < dtv.Rows.Count; i++)
                dtv.Rows[i]["AcountClss"] = dtv.Rows[i]["acctLongCode"].ToString() + "--" + dtv.Rows[i]["accName"].ToString();
            //add new column containing account number and account name seperated with --

            Session["dtExpItem"] = dtv;
        }
        else
            dtv = (DataTable)Session["dtExpItem"];
    }

    private void BindDepartments(DropDownList ddl, int type)
    {
        //Bind Departments
        DataTable dt = new DataTable();
        if (Session["DeptCodes"] == null)
        {
            string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["DeptCodes"] = dt;
        }
        else
            dt = (DataTable)Session["DeptCodes"];

        if (type == 1)
        {
            ddl.DataSource = dt;
            ddl.DataBind();
            //ddl.Items.Insert(0, "All");
            //ddl.Items.FindByText("All").Value = "0";
        }
    }

    private void BindJobs()
    {
        DataTable dt = new DataTable();
        if (Session["TSJobsList"] == null)
        {
            string str = xms.getTSJobs(ut.NullSafeInteger(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSJobsList"] = dt;
        }
        else
            dt = (DataTable)Session["TSJobsList"];
        ddlJobs.DataSource = dt;
        ddlJobs.DataTextField = "JobName";
        ddlJobs.DataValueField = "jobCode";
        ddlJobs.DataBind();
        ddlJobs.Items.Insert(0, "Please Select");
        ddlJobs.Items.FindByText("Please Select").Value = "0";
    }

    private void BindPriceFlag()
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'PRICINGFLAG'";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        ddlPriceFlag.DataSource = dv;
        ddlPriceFlag.DataTextField = "Description";
        ddlPriceFlag.DataValueField = "CodeKey";
        ddlPriceFlag.DataBind();
    }

    protected void AddNewPo(object sender, EventArgs e)
    {
        int edFlag = 0;
        pop_EditPO.Show();
        if (txtPOTripStrtDate.Text != hdnHeaderStartdate.Value || ddlPreVendor.SelectedValue != hdnPreVendor.Value || txtPoPurpose.Text != hdnHeaderPurpose.Value)
            edFlag = 1;
        if (edFlag == 1)
            popSaveHeaderConf.Show();
        else
            AddNewLineItem();
        DisplaySummaryChart();
    }

    protected void btnAppendPO_Click(object sender, EventArgs e)
    {
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }

        int uID = 0;
        uID = Convert.ToInt32(Session["UserID"]);

        dvPoError.InnerHtml = string.Empty;
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        int seqId = GetSeqId();

        //get QBITemID according to selected item code.
        DataTable dtExpItem = (DataTable)Session["dtExpItem"];
        DataView dvItem = new DataView(dtExpItem, "accName = '" + ddlExpItem.SelectedValue + "' AND ITEMCODE = '" + ddlItemCode.SelectedValue + "'", "", DataViewRowState.CurrentRows);
        hdnQBItemID.Value = dvItem.ToTable().Rows[0]["qbItemId"].ToString();
        //get QBITemID according to selected item code.

        if (Session["dtPo"] == null)
        {
            drPO["expItem"] = ddlExpItem.SelectedValue;
            drPO["accountCode"] = txtAccCode.Text;
            drPO["quantity"] = txtQuantity.Text;
            drPO["packageUnit"] = txtPkgUnit.Text;
            drPO["unitPrice"] = txtUnitPrice.Text;
            drPO["shippingCost"] = txtShipCost.Text;
            double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
            drPO["TaxPercent"] = taxPercent;
            //double chkTax = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent)) / 100) : 0;
            //double tax = ut.NullSafeDouble(((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax).ToString("#.##"));
            //double POamnt = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax))) + ut.NullSafeDouble(txtShipCost.Text)).ToString("#.##"));
            drPO["preAmount"] = txtPoAmount.Text;
            drPO["comments"] = txtDescr.Text;
            //txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal) + ut.NullSafeDouble(POamnt))).ToString();
            drPO["taxAmount1"] = txttax.Text;
            drPO["balAfterPO"] = txtBalAfterPO.Text;
            Session["balAfterPO"] = drPO["balAfterPO"];
            drPO["vendpartno"] = txtVendPtNo.Text;
            //Modified Today
            //string[] arr = new string[3];
            //arr = ddlManagerEmail.SelectedItem.Text.Split('-');
            drPO["MgrGroupCode"] = string.Empty;
            drPO["DeptCode"] = ddlDepartment.SelectedValue;
            drPO["DeptChgCmt"] = txtchangeComnts.Text;
            drPO["ItemCode"] = ddlItemCode.SelectedValue;
            drPO["discountFlag"] = chkDisc.Checked ? "Y" : "N";
            drPO["discount"] = ut.NullSafeDouble(txtDisc.Text);
            drPO["promoCode"] = txtLinePromoCode.Text;
            dtPO.Rows.Add(drPO);
        }
        else
            dtPO = (DataTable)Session["dtPo"];

        string retStr = string.Empty;
        ExpeseDetailsVO expenseDetails = new ExpeseDetailsVO();
        expenseDetails.citiesVstd = string.Empty;
        expenseDetails.othercity = string.Empty;
        expenseDetails.compCode = Session["CompCode"].ToString();
        expenseDetails.currency = string.Empty;
        expenseDetails.exp = string.Empty;
        expenseDetails.expDate = string.Empty;
        expenseDetails.expLineNo = seqId;
        expenseDetails.expType = string.Empty;
        expenseDetails.orgId = Convert.ToInt32(Session["OrgID"]);
        expenseDetails.reqId = reqId;
        expenseDetails.LNorm = 0;
        expenseDetails.totTrip = 0;
        expenseDetails.reimbt = 0;
        expenseDetails.purpose = txtPoPurpose.Text;
        expenseDetails.startDate = txtPOTripStrtDate.Text;
        expenseDetails.stateId = string.Empty;
        expenseDetails.status = Session["Status"].ToString();
        expenseDetails.statusId = Convert.ToInt32(Session["StatusID"]);
        expenseDetails.amtSpent = 0;
        expenseDetails.JCatCode = string.Empty;
        expenseDetails.jobCode = string.Empty;
        expenseDetails.phaseCode = string.Empty;
        expenseDetails.actualAmount = 0;
        expenseDetails.payMode = string.Empty;
        expenseDetails.detailsFlag = 1;
        expenseDetails.masterFlag = 0;
        expenseDetails.automileageFlag = 1;
        expenseDetails.agentName = string.Empty;
        expenseDetails.bookedDate = string.Empty;
        expenseDetails.fromCity = string.Empty;
        expenseDetails.otherFromCity = string.Empty;
        expenseDetails.toCity = string.Empty;
        expenseDetails.otherToCity = string.Empty;
        expenseDetails.preferredVendor = ddlPreVendor.SelectedItem.Text;
        expenseDetails.itinararyNo = string.Empty;
        expenseDetails.fromDate = string.Empty;
        expenseDetails.toDate = string.Empty;
        expenseDetails.codeId = string.Empty;
        expenseDetails.codeValue = string.Empty;
        expenseDetails.managerEmail = string.Empty;
        expenseDetails.managerId = Convert.ToInt32(ddlPOMgrEmail.SelectedValue);
        expenseDetails.userId = uID;
        expenseDetails.preApproved = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2));
        expenseDetails.companyCar = string.Empty;
        expenseDetails.otherPlace = string.Empty;
        expenseDetails.outOfCity = false;
        expenseDetails.expItem = ddlExpItem.SelectedValue;
        expenseDetails.unitPrice = ut.NullSafeDouble(txtUnitPrice.Text);
        expenseDetails.packageUnit = txtPkgUnit.Text;
        expenseDetails.quantity = ut.NullSafeDouble(txtQuantity.Text);
        expenseDetails.accountCode = txtAccCode.Text;
        expenseDetails.comments = txtDescr.Text;
        double taxPercent1 = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
        expenseDetails.taxPercent = taxPercent1;
        double chkTax2 = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent1)) / 100) : 0;
        double tax2 = ut.NullSafeDouble(((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax2).ToString("#.##"));
        expenseDetails.preAmount = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax2))) + ut.NullSafeDouble(txtShipCost.Text)).ToString("#.##"));
        expenseDetails.shippingCost = ut.NullSafeDouble(txtShipCost.Text);

        double POamnt1 = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax2))) + ut.NullSafeDouble(txtShipCost.Text)).ToString("#.##"));
        expenseDetails.balAfterPO = ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal) + ut.NullSafeDouble(POamnt1)));

        expenseDetails.taxAmount1 = tax2;
        expenseDetails.taxAmount2 = 0;
        expenseDetails.taxAmount3 = 0;
        expenseDetails.reimbursable = string.Empty;
        expenseDetails.taxCalculated = chkCalTax.Checked == true ? 1 : 0;
        expenseDetails.vendPartno = txtVendPtNo.Text;
        expenseDetails.polineseq = 0;
        expenseDetails.csuserid = 0;
        expenseDetails.mgrGroupCode = hdnManagerGrpCode.Value;
        expenseDetails.itemCode = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
        expenseDetails.deptChgCmt = txtchangeComnts.Text == string.Empty ? " " : txtchangeComnts.Text;
        expenseDetails.deptCode = ddlDepartment.SelectedValue;
        expenseDetails.discount = ut.NullSafeDouble(txtDisc.Text);
        expenseDetails.discountFlag = chkDisc.Checked ? "Y" : "N";
        expenseDetails.promoCode = txtLinePromoCode.Text;
        expenseDetails.reqDeliveryDate = txtReqDelDate.Text;
        expenseDetails.onBeHalfOf = string.Empty;
        expenseDetails.lastUpdSource = "Web";
        expenseDetails.qbAcctId = ut.NullSafeInteger(hdnQBAcctID.Value);
        expenseDetails.qbVendId = ut.NullSafeInteger(hdnQBVendID.Value);
        expenseDetails.qbItemId = ut.NullSafeInteger(hdnQBItemID.Value);
        expenseDetails.className = string.Empty;
        expenseDetails.classRefId = "0";
        expenseDetails.sendtoqb = string.Empty;
        expenseDetails.priceFlag = ddlPriceFlag.SelectedValue;

        retStr = xms.addExpense(expenseDetails);

        if (retStr.ToLower().Contains("fail"))
        {
            dvError.Style["color"] = "Red";
            dvError.InnerHtml = retStr;
        }
        else if (retStr.ToLower().Contains("succes"))
        {
            dvError.Style["color"] = "Green";

            drPO = dtPO.NewRow();
            drPO["expItem"] = ddlExpItem.SelectedValue;
            drPO["accountCode"] = txtAccCode.Text;
            drPO["quantity"] = ut.NullSafeDouble(txtQuantity.Text);
            drPO["packageUnit"] = txtPkgUnit.Text;
            drPO["unitPrice"] = ut.NullSafeDouble(txtUnitPrice.Text);
            double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
            drPO["TaxPercent"] = taxPercent;
            //double chkTax1 = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent)) / 100) : 0;
            //double tax1 = (ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax1;
            //double POamnt = (((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax1))) + ut.NullSafeDouble(txtShipCost.Text);
            drPO["preAmount"] = txtPoAmount.Text;
            drPO["comments"] = txtDescr.Text;
            drPO["ShippingCost"] = ut.NullSafeDouble(txtShipCost.Text);
            drPO["balAfterPO"] = txtBalAfterPO.Text;//ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal) + ut.NullSafeDouble(POamnt)));
            Session["balAfterPO"] = drPO["balAfterPO"];
            drPO["taxCalCulated"] = chkCalTax.Checked;
            drPO["vendpartno"] = txtVendPtNo.Text;
            drPO["MgrGroupCode"] = string.Empty;
            drPO["DeptCode"] = ddlDepartment.SelectedValue;
            drPO["DeptChgCmt"] = txtchangeComnts.Text;
            drPO["ItemCode"] = ddlItemCode.SelectedItem.Text;
            drPO["discountFlag"] = chkDisc.Checked ? "Y" : "N";
            drPO["discount"] = ut.NullSafeDouble(txtDisc.Text);
            drPO["promoCode"] = txtLinePromoCode.Text;
            dtPO.Rows.Add(drPO);

            dtPO.AcceptChanges();
            foreach (GridViewRow row1 in gvPO.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                if (lblPOAccCode.Text == txtAccCode.Text)
                    dtPO.Rows[row1.RowIndex]["balAfterPO"] = Session["balAfterPO"].ToString();
            }
            Session.Remove("dtPO");
            LoadEditPOData(null);
            Session.Remove("dsSt");
            SortGrid();
            ClearPOFields();
            dvPOErrMsg.InnerHtml = retStr;
        }
        else
        {
            dvPoError.Style["color"] = "Red";
            dvPoError.InnerHtml = "An error occurred while processing the request. Please try again.";
        }
        btnSubmit.Visible = true;
        btnSave.Visible = true;
    }

    protected void btnPOSave_Click(object sender, EventArgs e)
    {
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dtPo = (DataTable)Session["dtPo"];
        int edFlag = 0;

        if (txtPOTripStrtDate.Text != hdnHeaderStartdate.Value)
            edFlag = 1;
        else if (ddlPreVendor.SelectedValue != hdnPreVendor.Value)
            edFlag = 1;
        else if (txtPoPurpose.Text != hdnHeaderPurpose.Value)
            edFlag = 1;
        if (edFlag == 1)
        {
            SaveHeader(dtPo);
        }
        else
        {
            dvPoError.Visible = true;
            dvPoError.Style["color"] = "Red";
            dvPoError.InnerHtml = "No changes to update!";
        }
        pop_EditPO.Show();
    }

    protected void btnPOSubmit_Click(object sender, EventArgs e)
    {
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dtPo"];

        if (Convert.ToDateTime(txtPOTripStrtDate.Text) < Convert.ToDateTime(hdPOCurrDate.Value))
        {
            dvError.InnerHtml = string.Empty;
            pop_DWarn.Show();
            pop_EditPO.Show();
        }
        else
        {
            if (Session["statusID"].ToString() == "5" || Session["statusID"].ToString() == "6")
            {
                widgetComments.InnerHtml = ShowPreviousComments();
                btnCommentsSave.Visible = true;
                txtPopComments.Visible = true;
                btnCommentsClose.Visible = true;
                txtPopComments.Focus();
                pop_EditPO.Show();
                popup_Comments.Show();
            }
            else
            {
                string status = string.Empty;
                int statusId = 0;
                string[] arr = new string[3];
                arr = ddlPOMgrEmail.SelectedItem.Text.Split('-');
                if (ValidateBelowToleranceAmount())
                {
                    DataTable dtCodes = (DataTable)Session["dsCodes"];
                    string expr = "CodeID = 'STATUS' and CodeKey = 'APPR'";
                    DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
                    status = dv.ToTable().Rows[0]["Description"].ToString();
                    statusId = ut.NullSafeInteger(dv.ToTable().Rows[0]["CodeValue1"].ToString());
                }
                AddExpensesVO addexp = new AddExpensesVO();
                addexp.reqId = reqId.ToString();
                addexp.expItem = string.Empty;
                addexp.expLineNo = "0";
                addexp.expDate = string.Empty;
                addexp.citiesVstd = string.Empty;
                addexp.comments = string.Empty;
                addexp.orgId = Session["OrgID"].ToString();
                addexp.expType = string.Empty;
                addexp.jobCode = string.Empty;
                addexp.phaseCode = string.Empty;
                addexp.JCatCode = string.Empty;
                addexp.compCode = Session["CompCode"].ToString();
                addexp.purpose = txtPoPurpose.Text;
                addexp.preAmount = "0";
                addexp.currency = string.Empty;
                addexp.status = status;
                addexp.statusId = statusId.ToString();
                addexp.managerId = ddlPOMgrEmail.SelectedValue;
                addexp.managerEmail = ddlPOMgrEmail.SelectedItem.Text;
                addexp.startDate = txtPOTripStrtDate.Text;
                addexp.payMode = string.Empty;
                addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
                addexp.actualAmount = "0";
                addexp.othercity = string.Empty;
                if (ddlPreVendor.SelectedValue != hdnPreVendor.Value)
                    addexp.detailsFlag = "2";
                else
                    addexp.detailsFlag = "0";
                addexp.masterFlag = "1";
                addexp.automileageFlag = "0";
                addexp.agentName = string.Empty;
                addexp.bookedDate = string.Empty;
                addexp.fromCity = string.Empty;
                addexp.otherFromCity = string.Empty;
                addexp.toCity = string.Empty;
                addexp.otherToCity = string.Empty;
                addexp.preferredVendor = ddlPreVendor.SelectedValue;
                addexp.itinararyNo = string.Empty;
                addexp.fromDate = string.Empty;
                addexp.toDate = string.Empty;
                addexp.accountCode = string.Empty;
                addexp.quantity = "0";
                addexp.packageUnit = string.Empty;
                addexp.unitPrice = "0";
                addexp.userId = Session["UserID"].ToString();
                addexp.LNorm = "0";
                addexp.reimbt = "0";
                addexp.stateId = string.Empty;
                addexp.totTrip = "0";
                addexp.accountCode = string.Empty;
                addexp.companyCar = string.Empty;
                addexp.otherPlace = string.Empty;
                addexp.outOfCity = string.Empty;
                addexp.shippingCost = "0";
                addexp.balAfterPO = "0";
                addexp.taxAmount1 = "0";
                addexp.taxAmount2 = "0";
                addexp.taxAmount3 = "0";
                addexp.reimbursable = string.Empty;
                addexp.taxCalculated = "0";
                addexp.vendPartno = string.Empty;
                addexp.polineseq = "0";
                addexp.csuserid = "0";
                addexp.taxPercent = "0";
                addexp.mgrGroupCode = arr[1];
                addexp.itemCode = string.Empty;
                addexp.deptChgCmt = string.Empty;
                addexp.deptCode = string.Empty;
                addexp.discount = "0";
                addexp.discountFlag = string.Empty;
                addexp.promoCode = string.Empty;
                addexp.reqDeliveryDate = string.Empty;
                addexp.onBeHalfOf = string.Empty;
                addexp.lastUpdSource = "Web";
                addexp.qbAcctId = "0";
                addexp.qbVendId = "0";
                addexp.qbItemId = "0";
                addexp.className = string.Empty;
                addexp.classRefId = "0";
                addexp.sendtoqb = string.Empty;
                addexp.priceFlag = string.Empty;
                string retStr = xms.addExpense1(addexp);

                ddlPOMgrEmail.SelectedIndex = 0;
                xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
                ClearPOFields();
                gvPO.DataSource = dt;
                Session.Remove("dsSt");
                LoadEditPOData(null);
                SortGrid();
                dvPODetails.Visible = false;
                btnPOSave.Visible = false;
                btnPOSubmit.Visible = false;
                btnAddPoExpense.Visible = false;
                dvPoError.Visible = true;
                dvPoError.InnerHtml = retStr;
                if (retStr.ToLower().Contains("succes"))
                    dvPoError.Style["color"] = "Green";
                else
                    dvPoError.Style["color"] = "Red";

                pop_EditPO.Show();
                lblPOHeading.Text = "View Expense";
                if (retStr.Contains("AP Review"))
                {
                    UpdateAPApprovalReqCount();
                    btnPORemind.Visible = true;
                    Session["Status"] = "AP Review";
                    spnPOStatus.Style.Add("color", "Orange");
                    Session["statusID"] = 2;
                }
                else if (retStr.Contains("Manager Review"))
                {
                    UpdateApprovalReqCount(ddlPOMgrEmail.SelectedValue);
                    btnPORemind.Visible = true;
                    Session["Status"] = "Manager Review";
                    spnPOStatus.Style.Add("color", "Orange");
                    Session["statusID"] = 1;
                }
                else if (retStr.Contains("Approved"))
                {
                    Session["Status"] = "Approved";
                    spnPOStatus.Style.Add("color", "Green");
                    Session["statusID"] = 4;
                }
                else
                    btnPORemind.Visible = false;
                gvPO.DataBind();
            }
        }
    }

    private bool ValidateBelowToleranceAmount()
    {
        DataTable dtPO = (DataTable)Session["dtPo"];
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'ERUSERGROUPS' and CodeKey = '" + hdnManagerGrpCode.Value + "'";
        DataView dvGrp = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        double totalAmnt = 0;
        for (int i = 0; i < dtPO.Rows.Count; i++)
        {
            totalAmnt += ut.NullSafeDouble(dtPO.Rows[i]["preamount"]);
        }
        double toleranceAmnt = ut.NullSafeDouble(dvGrp.ToTable().Rows[0]["CodeValue2"]);
        if (totalAmnt > toleranceAmnt)
            return false;
        else
            return true;
    }

    protected void btnRemind_Click(object sender, EventArgs e)
    {
        lblConfirm.Text = "Are you sure you want to Remind your manager?";
        popConfirmCancelPO.Show();
        Session["Remind"] = "1";
        string TypeVar = ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2");
        if (TypeVar == "2")
            pop_EditPO.Show();
        else
            popup.Show();
    }

    protected void btnCancelPO_Click(object sender, EventArgs e)
    {
        lblConfirm.Text = "Are you sure you want to cancel this PO?";
        popConfirmCancelPO.Show();
        pop_EditPO.Show();
    }

    protected void ConfirmCancelPO(object sender, EventArgs e)
    {
        string UID = Session["UserID"].ToString();

        int TypeVar = ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2);

        if (!string.IsNullOrEmpty(hdnExpVoid.Value))
        {
            string retStr = SaveCancelledRequest(txtPurpose.Text, ddlManagerEmail.SelectedValue, ddlManagerEmail.SelectedItem.Text, txtTripStartDate.Text);

            dvError.Visible = true;
            dvError.InnerHtml = retStr;
            if (!retStr.ToLower().Contains("succes"))
                dvError.Style["color"] = "Red";
            else
            {
                dvError.Style["color"] = "Green";
                Session["Status"] = "Cancelled";
                spnStatus.Style.Add("color", "Red");
                Session["statusID"] = 11;
                Session.Remove("dsSt");
                btnSave.Visible = false;
                btnSubmit.Visible = false;
                btnCancelExp.Visible = false;
                btnAddExpense.Visible = false;
                btnRemind.Visible = false;
                foreach (GridViewRow row1 in gvExp.Rows)
                {
                    LinkButton lnkEdit = (LinkButton)row1.FindControl("lnkEdit");
                    LinkButton lnkDelete = (LinkButton)row1.FindControl("lnkDelete");
                    lnkDelete.Visible = false;
                    lnkEdit.Visible = false;
                }

                SortGrid();
                if (retStr.Contains("AP Review"))
                    UpdateAPApprovalReqCount();
                else if (retStr.Contains("Manager Review"))
                    UpdateApprovalReqCount(ddlManagerEmail.SelectedValue);
            }

            lknCmnt.Visible = true;
            popConfirmReson.Hide();
        }
        else
        {
            if (Session["Remind"] == "1")
            {
                ApproveRequestVO Appreq = new ApproveRequestVO();
                Appreq.actualAmount = ddlType.SelectedValue == "PO" ? Convert.ToDouble(Session["POGrandTotal"]) : Convert.ToDouble(lblGrandTotalAmnt.Text);
                Appreq.status = Session["Status"].ToString();
                Appreq.statusId = Convert.ToInt32(Session["StatusID"]);
                Appreq.userId = Convert.ToInt32(UID);
                Appreq.managerId = Convert.ToInt32(Session["MngrID"]);
                Appreq.managerEmail = Session["Email"].ToString();
                Appreq.preferredVendor = (ddlType.SelectedValue == "PO" ? ddlPreVendor.SelectedItem.Text : string.Empty);
                Appreq.purpose = (ddlType.SelectedValue == "PO" ? txtPoPurpose.Text : txtPurpose.Text);
                Appreq.ourRefNo = ddlType.SelectedValue == "PO" ? Session["PONum"].ToString() : string.Empty;
                Appreq.actionDate = Session["ActionDate"].ToString();
                Appreq.requestId = Convert.ToInt32(Session["ReqID"]);
                Appreq.preApproved = ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2);
                Appreq.startDate = ddlType.SelectedValue == "PO" ? txtPOTripStrtDate.Text : txtTripStartDate.Text;
                Appreq.orgId = Convert.ToInt32(Session["OrgID"]);
                Appreq.compCode = Session["CompCode"].ToString();
                string ret = xms.erRemindManager(Appreq);
                if (ret.ToLower().Contains("succes"))
                {
                    if (TypeVar == 0 || TypeVar == 1)
                    {
                        dvError.Style.Add("color", "Green");
                        dvError.InnerHtml = ret;
                    }
                    else
                    {
                        dvPoError.Style.Add("color", "Green");
                        dvPoError.InnerHtml = ret;
                    }
                }
                Session.Remove("Remind");
                popConfirmCancelPO.Hide();
            }
            else
            {
                string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "REASONCD");
                List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
                DataTable dtReason = Utility.ConvertToDataTable(lst);
                ddlReasonsCodes.DataSource = dtReason;
                ddlReasonsCodes.DataBind();
                popConfirmReson.Show();
                lblConfirm.Text = "Are you sure you want to cancel this PO?";
                popConfirmCancelPO.Show();
            }
        }
        if (TypeVar == 2)
            pop_EditPO.Show();
        else
            popup.Show();
    }

    protected void CnfrmwithReason(object sender, EventArgs e)
    {
        string UID = Session["UserID"].ToString();
        string comm = xms.addComment(Convert.ToInt32(Session["ReqID"]), ddlReasonsCodes.SelectedItem.Text, Convert.ToInt32(Session["OrgID"]), Convert.ToInt32(UID));
        if (comm.ToLower().Contains("succes"))
        {
            string retStr = SaveCancelledRequest(txtPoPurpose.Text, ddlPOMgrEmail.SelectedValue, ddlPOMgrEmail.SelectedItem.Text, txtPOTripStrtDate.Text);

            dvPoError.Visible = true;
            dvPoError.InnerHtml = retStr;
            if (!retStr.ToLower().Contains("succes"))
                dvPoError.Style["color"] = "Red";
            else
            {
                dvPoError.Style["color"] = "Green";
                Session["Status"] = "Cancelled";
                spnPOStatus.Style.Add("color", "Red");
                Session["statusID"] = 11;
                Session.Remove("dsSt");
                btnPOSave.Visible = false;
                btnPOSubmit.Visible = false;
                btnCancelPO.Visible = false;
                btnAddPoExpense.Visible = false;
                btnPORemind.Visible = false;
                foreach (GridViewRow row1 in gvPO.Rows)
                {
                    LinkButton lnkPOEdit = (LinkButton)row1.FindControl("lnkPOEdit");
                    LinkButton lnkPODelete = (LinkButton)row1.FindControl("lnkPODelete");
                    lnkPODelete.Visible = false;
                    lnkPOEdit.Visible = false;
                }
                SortGrid();
                if (retStr.Contains("AP Review"))
                    UpdateAPApprovalReqCount();
                else if (retStr.Contains("Manager Review"))
                    UpdateApprovalReqCount(ddlPOMgrEmail.SelectedValue);
            }

            lknCmnt.Visible = true;
            popConfirmReson.Hide();
            popConfirmCancelPO.Hide();
        }
        else
        {
            dvReasonError.Style["color"] = "Red";
            dvReasonError.InnerHtml = comm;
            popConfirmReson.Show();
            lblConfirm.Text = "Are you sure you want to cancel this PO?";
            popConfirmCancelPO.Show();
        }
        pop_EditPO.Show();
    }

    private string SaveCancelledRequest(string purpose, string mgrId, string mgrEmail, string startDate)
    {
        DataView view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'STATUS'", "CodeID", DataViewRowState.CurrentRows);
        DataTable dtCancel = view.ToTable();

        string expr = "CODEKEY = 'CAN'";
        view = new DataView(dtCancel, expr, "CodeValue1", DataViewRowState.CurrentRows);
        DataTable dtCan = view.ToTable();
        reqId = Convert.ToInt32(Session["ReqID"]);

        AddExpensesVO addexp = new AddExpensesVO();
        addexp.reqId = reqId.ToString();
        addexp.expItem = string.Empty;
        addexp.expLineNo = "0";
        addexp.expDate = string.Empty;
        addexp.citiesVstd = string.Empty;
        addexp.comments = string.Empty;
        addexp.orgId = Session["OrgID"].ToString();
        addexp.expType = string.Empty;
        addexp.jobCode = string.Empty;
        addexp.phaseCode = string.Empty;
        addexp.JCatCode = string.Empty;
        addexp.compCode = Session["CompCode"].ToString();
        addexp.purpose = purpose;
        addexp.preAmount = "0";
        addexp.currency = string.Empty;
        addexp.status = dtCan.Rows[0]["Description"].ToString();
        addexp.statusId = dtCan.Rows[0]["CodeValue1"].ToString();
        addexp.managerId = mgrId;
        addexp.managerEmail = mgrEmail;
        addexp.startDate = startDate;
        addexp.payMode = string.Empty;
        addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
        addexp.actualAmount = "0";
        addexp.othercity = string.Empty;
        addexp.detailsFlag = "0";
        addexp.masterFlag = "1";
        addexp.automileageFlag = "0";
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
        addexp.accountCode = string.Empty;
        addexp.quantity = "0";
        addexp.packageUnit = string.Empty;
        addexp.unitPrice = "0";
        addexp.LNorm = "0";
        addexp.reimbt = "0";
        addexp.stateId = string.Empty;
        addexp.totTrip = "0";
        addexp.accountCode = string.Empty;
        addexp.companyCar = string.Empty;
        addexp.otherPlace = string.Empty;
        addexp.outOfCity = string.Empty;
        addexp.shippingCost = "0";
        addexp.balAfterPO = "0";
        addexp.taxAmount1 = "0";
        addexp.taxAmount2 = "0";
        addexp.taxAmount3 = "0";
        addexp.taxCalculated = "0";
        addexp.vendPartno = string.Empty;
        addexp.userId = Session["UserID"].ToString();
        addexp.reimbursable = string.Empty;
        addexp.polineseq = "0";
        addexp.csuserid = "0";
        addexp.taxPercent = "0";
        addexp.mgrGroupCode = string.Empty;
        addexp.itemCode = string.Empty;
        addexp.deptChgCmt = string.Empty;
        addexp.deptCode = string.Empty;
        addexp.discount = "0";
        addexp.discountFlag = string.Empty;
        addexp.promoCode = string.Empty;
        addexp.reqDeliveryDate = string.Empty;
        addexp.onBeHalfOf = string.Empty;
        addexp.lastUpdSource = "Web";
        addexp.qbAcctId = "0";
        addexp.qbVendId = "0";
        addexp.qbItemId = "0";
        addexp.className = string.Empty;
        addexp.classRefId = "0";
        addexp.sendtoqb = string.Empty;
        addexp.priceFlag = string.Empty;
        string retStr = xms.addExpense1(addexp);
        return retStr;
    }

    protected void SavePastDate(object sender, EventArgs e)
    {
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dtPo"];

        if (Session["statusID"].ToString() == "5" || Session["statusID"].ToString() == "6")
        {
            widgetComments.InnerHtml = ShowPreviousComments();
            btnCommentsSave.Visible = true;
            txtPopComments.Visible = true;
            btnCommentsClose.Visible = true;
            popup_Comments.Show();
            pop_DWarn.Show();
            pop_EditPO.Show();
            Session["PastDate"] = "1";
        }
        else
        {
            string status = string.Empty;
            int statusId = 0;
            if (ValidateBelowToleranceAmount())
            {
                DataTable dtCodes = (DataTable)Session["dsCodes"];
                string expr = "CodeID = 'STATUS' and CodeKey = 'APPR'";
                DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
                status = dv.ToTable().Rows[0]["Description"].ToString();
                statusId = ut.NullSafeInteger(dv.ToTable().Rows[0]["CodeValue1"].ToString());
            }
            AddExpensesVO addexp = new AddExpensesVO();
            addexp.reqId = reqId.ToString();
            addexp.expItem = string.Empty;
            addexp.expLineNo = "0";
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Session["OrgID"].ToString();
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPoPurpose.Text;
            addexp.preAmount = "0";
            addexp.currency = string.Empty;
            addexp.status = status;
            addexp.statusId = statusId.ToString();
            addexp.managerId = ddlPOMgrEmail.SelectedValue;
            addexp.managerEmail = ddlPOMgrEmail.SelectedItem.Text;
            addexp.startDate = txtPOTripStrtDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
            addexp.actualAmount = "0";
            addexp.othercity = string.Empty;
            if (ddlPreVendor.SelectedValue != hdnPreVendor.Value)
                addexp.detailsFlag = "2";
            else
                addexp.detailsFlag = "0";
            addexp.masterFlag = "1";
            addexp.automileageFlag = "0";
            addexp.agentName = string.Empty;
            addexp.bookedDate = string.Empty;
            addexp.fromCity = string.Empty;
            addexp.otherFromCity = string.Empty;
            addexp.toCity = string.Empty;
            addexp.otherToCity = string.Empty;
            addexp.preferredVendor = ddlPreVendor.SelectedValue;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            addexp.accountCode = string.Empty;
            addexp.quantity = "0";
            addexp.packageUnit = string.Empty;
            addexp.unitPrice = "0";
            addexp.userId = Session["UserID"].ToString();
            addexp.LNorm = "0";
            addexp.reimbt = "0";
            addexp.stateId = string.Empty;
            addexp.totTrip = "0";
            addexp.accountCode = string.Empty;
            addexp.companyCar = string.Empty;
            addexp.otherPlace = string.Empty;
            addexp.outOfCity = string.Empty;
            addexp.shippingCost = "0";
            addexp.balAfterPO = "0";
            addexp.taxAmount1 = "0";
            addexp.taxAmount2 = "0";
            addexp.taxAmount3 = "0";
            addexp.reimbursable = string.Empty;
            addexp.taxCalculated = "0";
            addexp.vendPartno = string.Empty;
            addexp.polineseq = "0";
            addexp.csuserid = "0";
            addexp.taxPercent = "0";
            addexp.mgrGroupCode = string.Empty;
            addexp.itemCode = string.Empty;
            addexp.deptChgCmt = string.Empty;
            addexp.deptCode = string.Empty;
            addexp.discount = "0";
            addexp.discountFlag = string.Empty;
            addexp.promoCode = string.Empty;
            addexp.reqDeliveryDate = string.Empty;
            addexp.onBeHalfOf = string.Empty;
            addexp.lastUpdSource = "Web";
            addexp.qbAcctId = "0";
            addexp.qbVendId = "0";
            addexp.qbItemId = "0";
            addexp.className = string.Empty;
            addexp.classRefId = "0";
            addexp.sendtoqb = string.Empty;
            addexp.priceFlag = string.Empty;
            string retStr = xms.addExpense1(addexp);
            ddlPOMgrEmail.SelectedIndex = 0;

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearPOFields();
            gvPO.DataSource = dt;
            Session.Remove("dsSt");
            SortGrid();
            dvPODetails.Visible = false;
            btnPOSave.Visible = false;
            btnPOSubmit.Visible = false;
            btnAddPoExpense.Visible = false;
            dvPoError.Visible = true;
            dvPoError.InnerHtml = retStr;
            if (retStr.ToLower().Contains("fail"))
                dvPoError.Style["color"] = "Red";
            else
                dvPoError.Style["color"] = "Green";

            pop_DWarn.Hide();
            pop_EditPO.Show();
            lblPOHeading.Text = "View Expense";
            if (retStr.Contains("AP Review"))
            {
                UpdateAPApprovalReqCount();
                Session["Status"] = "AP Review";
                spnPOStatus.Style.Add("color", "Orange");
                Session["statusID"] = 2;
            }
            else if (retStr.Contains("Manager Review"))
            {
                UpdateApprovalReqCount(ddlPOMgrEmail.SelectedValue);
                Session["Status"] = "Manager Review";
                spnPOStatus.Style.Add("color", "Orange");
                Session["statusID"] = 1;
            }
            else if (retStr.Contains("Approved"))
            {
                Session["Status"] = "Approved";
                spnPOStatus.Style.Add("color", "Green");
                Session["statusID"] = 4;
            }
            gvPO.DataBind();
        }
    }

    private void BindVendors(string expItem, string prefVendor, string city)
    {
        GetPrefVendors();
        //listFiltervendors = null;
        //listFiltervendors = BindSearchPrefName(expItem, city);
        //Session["VendorsList"] = listFiltervendors;
        //hdnVendors.Value = listFiltervendors;
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", " var dsvend=null; dsvend = " + listFiltervendors + ";jq( \"#txtPrefVendor\" ).autocomplete({source: dsvend});", true);
    }

    private void BindOnBehalfOfList()
    {
        DataTable dt = GetPrefVendors();
        //StringBuilder output = new StringBuilder();
        //output.Append("[");
        //for (int i = 0; i < dt.Rows.Count; ++i)
        //{
        //    output.Append("\"" + dt.Rows[i]["PreferredVendor"].ToString() + "\"");
        //    if (i != (dt.Rows.Count - 1))
        //        output.Append(",");
        //}
        //output.Append("];");
        //listFilterUsers = output.ToString();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", " var dsusers=null; dsusers = " + listFilterUsers + ";jq( \"#txtOnBehalfOf\" ).autocomplete({source: dsusers});", true);
    }

    //private string BindSearchPrefName(string expItem, string city)
    //{
    //    txtPrefVendor.Text = string.Empty;
    //    DataTable dt = null;
    //    dt = GetPrefVendors();
    //    StringBuilder output = new StringBuilder();
    //    output.Append("[");
    //    for (int i = 0; i < dt.Rows.Count; ++i)
    //    {
    //        output.Append("\"" + dt.Rows[i]["PreferredVendor"].ToString() + "\"");

    //        if (i != (dt.Rows.Count - 1))
    //        {
    //            output.Append(",");
    //        }
    //    }
    //    output.Append("];");
    //    return output.ToString();
    //}

    protected void VendorSearch(object sender, EventArgs e)
    {
        //DataTable dt = (DataTable)Session["PreferredVendorList"];

        //string exp = "PreferredVendor like '%" + txtPrefVendor.Text.Replace("'", "''") + "%'";
        //DataView dtv = new DataView(dt, exp, "PreferredVendor", DataViewRowState.CurrentRows);
        //DataTable dt1 = dtv.ToTable();
        //if (dt1.Rows.Count == 0)
        //{
        //    popVendCreatAlert.Show();
        //    //popup_Edit.Show();
        //}
        //if (dt1.Rows.Count > 0)
        //{
        //    Session["dsVendAgents"] = dt1;
        //    hdnQBVendID.Value = dt1.Rows[0]["qbVendId"].ToString();
        //    if (txtPrefVendor.Text == string.Empty)
        //        txtEditItNo.Enabled = false;
        //    else
        //        txtEditItNo.Enabled = true;

        //    //Display attachments in line data if already exists
        //    if (Session["RctFileName"] != null)
        //        lblFileName.Text = Session["RctFileName"].ToString();

        //}
        //popup.Show();
        //popup_Edit.Show();
    }

    private void BindExpData()
    {
        DataSet dsCodes = new DataSet();
        DataTable dtCodes = new DataTable();
        DataSet dsItems = new DataSet();
        DataTable dtCodes1 = new DataTable();
        DataSet dsCodes1 = new DataSet();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
            DataTable dtTable = dsCodes1.Tables[0];
            DataView dtview = new DataView(dtTable);
            dtview.Sort = "CodeID ASC";
            dtCodes1 = dtview.ToTable();
            Session["dsCodes"] = dtCodes1;

        }
        else
            dtCodes1 = (DataTable)Session["dsCodes"];

        dtCodes = dtCodes1;

        //Classifications
        GetAccountCodeByExpenseItem();

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
        txtCityVisited.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();
        txtFromCity.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();

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
        string exprPPM = "CodeID = 'PPM'";
        DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
        hdnPPM.Value = viewPPM[1]["CodeValue1"].ToString();
        hdnCPM.Value = viewPPM[0]["CodeValue1"].ToString();
        hdnCmpCar.Value = viewPPM[0]["CodeValue2"].ToString();
        hdnPrsnCar.Value = viewPPM[1]["CodeValue2"].ToString();

        //Food Tax
        string exprFt = "CodeID = 'FOODTAX'";
        DataView viewFT = new DataView(dtCodes, exprFt, "CODEID", DataViewRowState.CurrentRows);
        hdnFoodTax.Value = string.IsNullOrEmpty(viewFT[0]["CodeKey"].ToString()) ? "0" : viewFT[0]["CodeKey"].ToString(); ;

        //CompCar
        ddlCompCar.DataSource = viewPPM;
        ddlCompCar.DataTextField = "CodeValue2";
        ddlCompCar.DataValueField = "CodeValue2";
        ddlCompCar.DataBind();

        //Jobs
        dvEditJob.Style["display"] = "none";
        dvEditPhs.Style["display"] = "none";
        dvEditJC.Style["display"] = "none";

        //classes
        GetClasses();
    }

    private void GetClasses()
    {
        DataTable dt = new DataTable();
        if (Session["Classes"] == null)
        {
            string str = xms.getClassRef(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
            List<ImportQBClasVO> lst = ser.Deserialize<List<ImportQBClasVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Classes"] = GetHierarchicalData(dt, "className");
        }
        else
            dt = (DataTable)Session["Classes"];

        ddlClass.DataSource = dt;
        ddlClass.DataTextField = "className";
        ddlClass.DataValueField = "classRefId";
        ddlClass.DataBind();
        ddlClass.Items.Insert(0, "Please Select");
        ddlClass.Items.FindByText("Please Select").Value = "0";
    }

    private void CheckSendToQB(string sendToQB)
    {
        string str = xms.getIntegrationDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<IntegrationVO> lst = ser.Deserialize<List<IntegrationVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        if (dt.Rows.Count > 0)
        {
            if (dt.Rows[0]["sendtoqb"].ToString().ToLower() == "y")
            {
                ChkSendToQB.Visible = true;
                ChkSendToQB.Checked = sendToQB.ToLower() == "y" ? true : false;
            }
            else
                ChkSendToQB.Visible = false;
        }
        else
            ChkSendToQB.Visible = false;
    }

    protected void AddNewExpense(object sender, EventArgs e)
    {
        int edFlag = 0;
        popup.Show();
        if (txtTripStartDate.Text != hdnHeaderStartdate.Value || txtPurpose.Text != hdnHeaderPurpose.Value || txtOnBehalfOf.Text != hdnHeaderOnBehalfOf.Value)
            edFlag = 1;
        if (edFlag == 1)
        {
            BindOnBehalfOfList();
            popSaveHeaderConf.Show();
        }
        else
            AddNewLineItem();
    }

    private void AddNewLineItem()
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)//PO
        {
            dvPOErrMsg.InnerHtml = string.Empty;
            lblPOEditHead.Text = "Add PO Item";

            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(false);
            else
            {
                //bind departments
                BindDepartments(ddlDepartment, 1);
                ddlDepartment.SelectedValue = Session["DepartmentCode"].ToString();

                //Bind budget classifications
                BindPoExpenseItems();
                DataTable dtv = GetHierarchicalData((DataTable)Session["dtExpItem"], "AcountClss");
                ddlExpItem.DataSource = dtv.DefaultView.ToTable(true, "AcountClss", "accName");
                ddlExpItem.DataBind();
                ddlExpItem.Items.Insert(0, "Please Select");
                ddlExpItem.Items.FindByText("Please Select").Value = "0";
            }
            ClearPOFields();
            txtchangeComnts.Text = string.Empty;
            dvCommts.Visible = false;
            ddlItemCode.Items.Clear();
            ToggleFields(true);
            btnAppendPO.Visible = true;
            btnDeletePOItem.Visible = false;
            btnSavePOItem.Visible = false;
            btnAppendPO.Attributes.Add("onclick", "javascript:return ValidateNewPO();");
            MakeCalcFieldsReadOnly();
            hdnIsPOEdit.Value = "false";
            txtPkgUnit.Text = "EACH";
            chkDisc.Checked = true;
            txtDisc.Text = hdnVendDiscount.Value;
            txtLinePromoCode.Text = hdnVendPromoCode.Value;
            chkCalTax.Checked = true;
            Session.Remove("Edit");
            txtTaxPercent.Text = Session["Tax"].ToString();
            txttax.Text = ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(Session["Tax"])) / 100)).ToString();
            hdnTax.Value = txtTaxPercent.Text;
            txttax.ReadOnly = true;
            hdnAgreementCnt.Value = "0";
            BindPriceFlag();
            DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
            int year = dateTime.Year;
            if (Session["dsFiscalDate"] == null)
                MonthFilter(year, txtPOTripStrtDate.Text);

            //get qb vendor id
            DataTable dtVend = (DataTable)Session["PreferredVendorList"];
            DataView dv = new DataView(dtVend, "PreferredVendor = '" + ddlPreVendor.SelectedValue.Replace("'", "''") + "'", "PreferredVendor", DataViewRowState.CurrentRows);
            hdnQBVendID.Value = dv.ToTable().Rows[0]["qbVendId"].ToString();
            //get qb vendor id

            ///hide item inventory link
            lnkShowItemInventory.Style["display"] = "none";
            lnkAgreement.Style["display"] = "none";

            if (tripMonth != "" || tripMonth != string.Empty)
                popAddPO.Show();
            pop_EditPO.Hide();
            ddlExpItem.Focus();
        }
        else
        {
            if (ddlTypeVar == 1)//Expense
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
            ValidateMaxApprLimit();
            BindDrafts();
            int seqId = GetSeqId();
            chkReimb.Checked = false;
            Session["NewSeqId"] = seqId;
            hdnSeq1.Value = seqId.ToString();
            if (gvDrafts.Rows.Count > 0)
                lnkShowDraft.Style["display"] = "block";
            else
                lnkShowDraft.Style["display"] = "none";
            Session["AddedFlag"] = 1;
            txtEditExpDate.Text = txtTripStartDate.Text;
            txtEditFromdate.Text = txtTripStartDate.Text;
            hdnisExpLineDisplayed.Value = "Y";
            btnExpLineHistory.Visible = false;
            ddlEditExpType.Focus();
            popup_Edit.Show();
            popup.Hide();
        }
        Session.Remove("fStream");
        Session.Remove("RctFileName");
        Session.Remove("FileExt");
    }

    private DataTable LoadDetailsByJob(bool deptLoaded)
    {
        string str = xms.getJobDetail(ddlJobs.SelectedValue, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
        DataTable dtJobs = Utility.ConvertToDataTable(lst);

        if (!deptLoaded)
        {
            //Load departments
            DataView dvDept = dtJobs.DefaultView;
            dvDept = dvDept.ToTable(true, "DeptCode").DefaultView;

            BindDepartments(ddlDepartment, 0);
            DataTable dt = (DataTable)Session["DeptCodes"];
            DataTable dtDept = dt.Clone();
            string[] arrDept = dvDept.ToTable().AsEnumerable().Select(r => r.Field<string>("DeptCode")).ToArray();

            for (int i = 0; i < dt.Rows.Count; i++)
                if (arrDept.Contains(dt.Rows[i]["CodeKey"].ToString()))
                    dtDept.ImportRow(dt.Rows[i]);

            ddlDepartment.DataSource = dtDept;
            ddlDepartment.DataBind();
            //ddlDepartment.Items.Insert(0, "All");
            //ddlDepartment.Items.FindByText("All").Value = "0";
            ddlDepartment.SelectedValue = Session["DepartmentCode"].ToString();

        }
        //load accounts
        if (Session["dtExpItem"] == null)
            BindPoExpenseItems();
        DataTable dtBdgClss = (DataTable)Session["dtExpItem"];
        DataTable dtCloneBdgClss = dtBdgClss.Clone();
        string[] arrAcc = dtJobs.AsEnumerable().Select(r => r.Field<string>("AccountCode")).ToArray();
        for (int i = 0; i < dtBdgClss.Rows.Count; i++)
            if (arrAcc.Contains(dtBdgClss.Rows[i]["AccountCode"]))
                dtCloneBdgClss.ImportRow(dtBdgClss.Rows[i]);
        ddlExpItem.DataSource = dtCloneBdgClss.DefaultView.ToTable(true, "AcountClss", "accName");
        ddlExpItem.DataBind();
        ddlExpItem.Items.Insert(0, "Please Select");
        ddlExpItem.Items.FindByText("Please Select").Value = "0";
        ddlItemCode.Items.Clear();
        return dtCloneBdgClss;

    }

    private void BindJobs(DropDownList ddl)
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

    private void BindPhases(DropDownList ddlP, DropDownList ddlJ)
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

    private void BindCategories(DropDownList ddlC, DropDownList ddlP)
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
        int seqId = Convert.ToInt32(Session["NewSeqId"]);
        int uID = Convert.ToInt32(Session["UserID"]);
        if (Session["RctFileName"] != null || Session["dtSelDfts"] != null)
            str = UploadFiles(Server.MapPath(newPath), seqId);
        else
            str = "File exists";

        if (str != string.Empty || Convert.ToBoolean(Session["PreApproval"]) == true || hdnCodeValue6.Value.ToLower() == "y" || hdnDftCnt.Value != null)
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
                dt.Columns.Add("companyCar", Type.GetType("System.String"));
                dt.Columns.Add("otherPlace", Type.GetType("System.String"));
                dt.Columns.Add("outOfCity", Type.GetType("System.String"));
                dt.Columns.Add("Reimbursable", Type.GetType("System.String"));
                dt.Columns.Add("balAfterpo", Type.GetType("System.String"));
            }
            else
                dt = (DataTable)Session["dt"];

            //Get account code from selected classification
            string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            string retStr = string.Empty;
            ExpeseDetailsVO expenseDetails = new ExpeseDetailsVO();
            if (dvEditCV.Style["display"] == "block")
            {
                if (txtCityVisited.Text == string.Empty)
                    expenseDetails.citiesVstd = string.Empty;
                else
                    expenseDetails.citiesVstd = txtCityVisited.Text;
                expenseDetails.othercity = string.Empty;
            }
            else
            {
                expenseDetails.othercity = string.Empty;
                expenseDetails.citiesVstd = txtFromCity.Text;
            }
            expenseDetails.comments = txtEditComments.Text;
            expenseDetails.compCode = Session["CompCode"].ToString();
            expenseDetails.currency = string.Empty;
            expenseDetails.exp = string.Empty;
            expenseDetails.expDate = txtEditExpDate.Text;
            expenseDetails.expItem = arr[1].Trim();//ddlEditExpenseItem.SelectedItem.Text;
            expenseDetails.expLineNo = seqId;
            expenseDetails.expType = ddlEditExpType.SelectedValue;
            expenseDetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expenseDetails.reqId = Convert.ToInt32(Session["ReqID"]);
            expenseDetails.LNorm = ut.NullSafeInteger(txtEditLNorm.Text);
            expenseDetails.totTrip = ut.NullSafeInteger(txtEditTotTrip.Text);
            expenseDetails.reimbt = ut.NullSafeInteger(txtEditReimbt.Text);
            expenseDetails.accountCode = arr[0].Trim();
            expenseDetails.purpose = string.Empty;
            expenseDetails.startDate = txtTripStartDate.Text;
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
            //if (dvEditAgName.Style["display"] == "block")
            //{
            //    if (ddlEditAgName.SelectedValue == "0")
            //        expenseDetails.agentName = string.Empty;
            //    else
            expenseDetails.agentName = txtEditAgentName.Text;
            //}
            //else
            //    expenseDetails.agentName = string.Empty;
            expenseDetails.bookedDate = string.Empty;
            if (dvEditFromcity.Style["display"] == "block")
            {
                if (txtFromCity.Text == string.Empty)
                    expenseDetails.fromCity = string.Empty;
                else
                    expenseDetails.fromCity = txtFromCity.Text;
                expenseDetails.otherFromCity = string.Empty;
            }
            else
            {
                expenseDetails.fromCity = string.Empty;
                expenseDetails.otherFromCity = string.Empty;
            }
            if (dvEditToCity.Style["display"] == "block")
            {
                if (txtToCity.Text == string.Empty)
                    expenseDetails.toCity = string.Empty;
                else
                    expenseDetails.toCity = txtToCity.Text;
                expenseDetails.otherToCity = string.Empty;
            }
            else
            {
                expenseDetails.toCity = string.Empty;
                expenseDetails.otherToCity = string.Empty;
            }
            if (dvEditVendor.Style["display"] == "block")
            {
                if (txtPrefVendor.Text == string.Empty)
                    expenseDetails.preferredVendor = string.Empty;
                else
                    expenseDetails.preferredVendor = txtPrefVendor.Text;
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
            expenseDetails.userId = uID;
            expenseDetails.preApproved = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2));
            expenseDetails.companyCar = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
            expenseDetails.otherPlace = txtEditLocalLocation.Text;
            expenseDetails.outOfCity = chkIsOutOfCity.Checked;
            expenseDetails.quantity = 0;
            expenseDetails.packageUnit = string.Empty;
            expenseDetails.unitPrice = 0;
            expenseDetails.shippingCost = 0;
            expenseDetails.balAfterPO = ut.NullSafeDouble(txtExpBalAfter.Text);
            expenseDetails.taxAmount1 = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
            expenseDetails.taxAmount2 = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
            expenseDetails.taxAmount3 = 0;
            expenseDetails.reimbursable = chkReimb.Checked == true ? "Y" : "N";
            expenseDetails.taxCalculated = 0;
            expenseDetails.vendPartno = string.Empty;
            expenseDetails.polineseq = 0;
            expenseDetails.csuserid = 0;
            expenseDetails.taxPercent = 0;
            expenseDetails.mgrGroupCode = string.Empty;
            expenseDetails.itemCode = string.Empty;
            expenseDetails.deptChgCmt = string.Empty;
            expenseDetails.deptCode = Session["DepartmentCode"].ToString();
            expenseDetails.reqDeliveryDate = string.Empty;
            expenseDetails.onBeHalfOf = txtOnBehalfOf.Text;
            expenseDetails.lastUpdSource = "Web";
            expenseDetails.addedOn = string.Empty;
            expenseDetails.apReview = string.Empty;
            expenseDetails.attCnt = 0;
            expenseDetails.budget = 0;
            expenseDetails.contactCnt = 0;
            expenseDetails.discount = 0;
            expenseDetails.discountFlag = string.Empty;
            expenseDetails.expItemAccCode = ddlAccountCodes.SelectedItem.Text;
            expenseDetails.invCnt = 0;
            expenseDetails.invLineNo = 0;
            expenseDetails.poAmount = 0;
            expenseDetails.poInvAmount = 0;
            expenseDetails.promoCode = string.Empty;
            expenseDetails.qtyReceived = 0;
            expenseDetails.receiveCnt = 0;
            expenseDetails.remaining = 0;
            expenseDetails.fiscalMonth = string.Empty;
            expenseDetails.qbAcctId = ut.NullSafeInteger(hdnQBAcctID.Value);
            expenseDetails.qbVendId = ut.NullSafeInteger(hdnQBVendID.Value);
            expenseDetails.qbItemId = 0;
            expenseDetails.className = (ddlClass.SelectedValue == "0" ? string.Empty : ddlClass.SelectedItem.Text.Trim());
            expenseDetails.classRefId = ddlClass.SelectedValue;
            expenseDetails.sendtoqb = string.Empty;
            expenseDetails.priceFlag = string.Empty;

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
                    dr["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                    dr["otherPlace"] = txtEditLocalLocation.Text;
                    dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "True" : "False";
                    dr["JCatCode"] = string.Empty;
                    dr["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                    dr["accountCode"] = arr[0].Trim();
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
                    //if (dvEditAgName.Style["display"] == "block")
                    //{
                    //    if (ddlEditAgName.SelectedValue == "0")
                    //        dr["agentName"] = string.Empty;
                    //    else
                    dr["agentName"] = txtEditAgentName.Text;
                    //}
                    //else
                    //    dr["agentName"] = string.Empty;
                    dr["amtSpent"] = 0;
                    dr["apReview"] = string.Empty;
                    dr["automileageFlag"] = 0;
                    dr["bookedDate"] = string.Empty;
                    dr["otherCity"] = string.Empty;
                    if (dvEditCV.Style["display"] == "block")
                    {
                        if (txtCityVisited.Text == string.Empty)
                            dr["citiesVstd"] = string.Empty;
                        else
                            dr["citiesVstd"] = txtCityVisited.Text;
                        dr["otherCity"] = string.Empty;
                    }
                    else
                    {
                        dr["otherCity"] = string.Empty;
                        dr["citiesVstd"] = txtFromCity.Text;
                    }
                    dr["codeId"] = string.Empty;
                    dr["codeValue"] = string.Empty;
                    dr["comments"] = txtEditComments.Text;
                    dr["compCode"] = Session["CompCode"].ToString();
                    dr["currency"] = string.Empty;
                    dr["detailsFlag"] = 0;
                    dr["exp"] = string.Empty;
                    dr["expDate"] = txtEditExpDate.Text;
                    dr["expItem"] = arr[1].Trim();//ddlEditExpenseItem.SelectedItem.Text;
                    dr["expLineNo"] = seqId;
                    dr["expType"] = ddlEditExpType.SelectedItem.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (txtFromCity.Text == string.Empty)
                            dr["fromCity"] = string.Empty;
                        else
                            dr["fromCity"] = txtFromCity.Text;
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
                        if (txtPrefVendor.Text == string.Empty)
                            dr["preferredVendor"] = string.Empty;
                        else
                            dr["preferredVendor"] = txtPrefVendor.Text;
                    }
                    else
                        dr["preferredVendor"] = string.Empty;
                    dr["purpose"] = string.Empty;
                    dr["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                    dr["reqId"] = Convert.ToInt32(Session["ReqID"]);
                    dr["startDate"] = string.Empty;
                    dr["stateId"] = string.Empty;
                    dr["status"] = string.Empty;
                    dr["statusId"] = 0;
                    dr["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";

                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (txtToCity.Text == string.Empty)
                            dr["toCity"] = string.Empty;
                        else
                            dr["toCity"] = txtToCity.Text;
                        dr["otherToCity"] = string.Empty;
                    }
                    else
                    {
                        dr["toCity"] = string.Empty;
                        dr["otherToCity"] = string.Empty;
                    }
                    dr["toDate"] = txtEditTodate.Text;
                    dr["totTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                    dr["userId"] = 0;
                    dr["balAfterpo"] = ut.NullSafeDouble(txtExpBalAfter.Text);
                    dr["taxAmount1"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                    dr["taxAmount2"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                }
                else
                {
                    dr["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                    dr["otherPlace"] = txtEditLocalLocation.Text;
                    dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "True" : "False";
                    dr["JCatCode"] = ddlEditCategories.SelectedItem.Text;
                    dr["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                    dr["accountCode"] = arr[0].Trim();
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
                    //if (dvEditAgName.Style["display"] == "block")
                    //{
                    //    if (ddlEditAgName.SelectedValue == "0")
                    //        dr["agentName"] = string.Empty;
                    //    else
                    dr["agentName"] = txtEditAgentName.Text;
                    //}
                    //else
                    //    dr["agentName"] = string.Empty;
                    dr["amtSpent"] = 0;
                    dr["apReview"] = ddlEditJobs.SelectedValue;
                    dr["automileageFlag"] = 0;
                    dr["bookedDate"] = string.Empty;
                    dr["otherCity"] = string.Empty;
                    if (dvEditCV.Style["display"] == "block")
                    {
                        if (txtCityVisited.Text == string.Empty)
                            dr["citiesVstd"] = string.Empty;
                        else
                            dr["citiesVstd"] = txtCityVisited.Text;
                        dr["otherCity"] = string.Empty;
                    }
                    else
                    {
                        dr["otherCity"] = string.Empty;
                        dr["citiesVstd"] = txtFromCity.Text;
                    }
                    dr["codeId"] = ddlEditPhases.SelectedValue;
                    dr["codeValue"] = ddlEditCategories.SelectedValue;
                    dr["comments"] = txtEditComments.Text;
                    dr["compCode"] = string.Empty;
                    dr["currency"] = string.Empty;
                    dr["detailsFlag"] = 1;
                    dr["exp"] = string.Empty;
                    dr["expDate"] = txtEditExpDate.Text;
                    dr["expItem"] = arr[1].Trim();// ddlEditExpenseItem.SelectedItem.Text;
                    dr["expLineNo"] = seqId;
                    dr["expType"] = ddlEditExpType.SelectedItem.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (txtFromCity.Text == string.Empty)
                            dr["fromCity"] = string.Empty;
                        else
                            dr["fromCity"] = txtFromCity.Text;
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
                        if (txtPrefVendor.Text == string.Empty)
                            dr["preferredVendor"] = string.Empty;
                        else
                            dr["preferredVendor"] = txtPrefVendor.Text;
                    }
                    else
                        dr["preferredVendor"] = string.Empty;
                    dr["purpose"] = string.Empty;
                    dr["reimbt"] = ut.NullSafeInteger(txtEditReimbt.Text);
                    dr["reqId"] = Convert.ToInt32(Session["ReqID"]);
                    dr["startDate"] = string.Empty;
                    dr["stateId"] = string.Empty;
                    dr["status"] = string.Empty;
                    dr["statusId"] = 0;
                    dr["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";

                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (txtToCity.Text == string.Empty)
                            dr["toCity"] = string.Empty;
                        else
                            dr["toCity"] = txtToCity.Text;
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
                    dr["balAfterpo"] = ut.NullSafeDouble(txtExpBalAfter.Text);
                    dr["taxAmount1"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                    dr["taxAmount2"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                }

                dt.Rows.Add(dr);
                dt.AcceptChanges();
                Session["dt"] = dt;
                LnkcurrAttachments.Style["display"] = "block";
                Session.Remove("dsSt");
                Session.Remove("dtSelDfts");
                Session.Remove("AddedFlag");
                Session.Remove("AddFrmDrfts");
                SortGrid();
                LoadEditData(null);
                ClearFields();
                BindOnBehalfOfList();
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
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 2MB";
        popup.Show();
    }

    private void ClearFields()
    {
        ddlEditJobs.Items.Clear();
        ddlEditPhases.Items.Clear();
        ddlEditCategories.Items.Clear();
        ddlAccountCodes.SelectedValue = "0";
        //txtEditOtherCity.Text = string.Empty;
        txtEditExpDate.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditComments.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
        // ddlEditCity.SelectedIndex = 0;
        txtEditFromdate.Text = string.Empty;
        txtEditTodate.Text = string.Empty;
        //if (ddlEditPreVendor.Items.Count > 0)
        //    ddlEditPreVendor.SelectedIndex = 0;
        txtPrefVendor.Text = string.Empty;
        txtEditAgentName.Text = string.Empty;
        //if (ddlEditAgName.Items.Count > 0)
        //    ddlEditAgName.SelectedIndex = 0;
        txtEditItNo.Text = string.Empty;
        //ddlEditFromcity.SelectedIndex = 0;
        //txtEditOtherFromCity.Text = string.Empty;
        //txtEditOtherToCity.Text = string.Empty;
        //ddlEditTocity.SelectedIndex = 0;
        txtCityVisited.Text = string.Empty;
        txtFromCity.Text = string.Empty;
        txtToCity.Text = string.Empty;
        txtEditTotTrip.Text = string.Empty;
        txtEditLNorm.Text = string.Empty;
        txtEditReimbt.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
        txtEditSalesTax.Text = string.Empty;
        txtEditFoodTax.Text = string.Empty;
        txtExpBudg.Text = txtExpCurrBal.Text = txtExpRemBudg.Text = txtExpBalAfter.Text = string.Empty;
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1.PostedFile.FileName);
        int len = fupd1.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".pdf")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2MB, need to be 10485760 (10MB)
            {
                Session["fStream"] = fupd1.FileContent;
                Session["FileExt"] = Path.GetExtension(fupd1.PostedFile.FileName);
                Session["RctFileName"] = fupd1.PostedFile.FileName;
            }
            else
                ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 10MB');", true);
        }
        else
            ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 2MB');", true);
    }

    private byte[] SavedFileData()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStream"];
        BinaryReader br = new BinaryReader(sf);
        sf.Position = 0;
        if (Session["FileExt"].ToString().ToLower() == ".pdf")
        {
            int fileSize;
            fileSize = ut.NullSafeInteger(sf.Length);
            Stream fileStream = sf;
            fileData = new byte[fileSize];
            fileStream.Read(fileData, 0, 2097152);
            hdnRctFileType.Value = "2";
        }
        else
        {
            fileData = br.ReadBytes((int)sf.Length);
            hdnRctFileType.Value = "1";
        }
        return fileData;
    }

    private string UploadFiles(string path1, int expId)
    {
        string str = string.Empty;
        if (Session["RctFileName"] != null)
        {
            byte[] fileData = null;
            Random random = new Random();
            reqId = Convert.ToInt32(Session["hdnReq"]);
            int index = Session["RctFileName"].ToString().IndexOf('.');
            string fName = Session["RctFileName"].ToString().Substring(0, index);
            string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            AttachmentVO att = new AttachmentVO();
            att.addedOn = DateTime.Now.ToShortDateString();
            att.attachmentId = 0;
            att.compCode = Session["CompCode"].ToString();
            att.expLineNo = expId;
            //att.fileName = Session["ReqID"].ToString() + "_" + expId + "_" + Session["OrgID"].ToString() + "_" + ddlEditExpenseItem.SelectedItem.Text.Replace('/', '_') + "_" + fName + random.Next();
            att.fileName = Session["ReqID"].ToString() + "_" + expId + "_" + Session["OrgID"].ToString() + "_" + arr[1].Trim().Replace('/', '_') + "_" + fName + random.Next();
            att.orgId = Convert.ToInt32(Session["OrgID"]);
            att.orgName = string.Empty;
            att.requestId = Convert.ToInt32(Session["ReqID"]);
            fileData = SavedFileData();
            str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 2);
        }
        return str;
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dt"];
        int edFlag = 0;

        if (txtTripStartDate.Text != hdnHeaderStartdate.Value)
            edFlag = 1;
        else if (txtPurpose.Text != hdnHeaderPurpose.Value)
            edFlag = 1;
        else if (txtOnBehalfOf.Text != hdnHeaderOnBehalfOf.Value)
            edFlag = 1;
        if (edFlag == 1)
            SaveHeader(dt);
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
        //Session["SeqCnt"] = "0";
        reqId = Convert.ToInt32(Session["ReqID"]);
        dt = (DataTable)Session["dt"];

        string strOnBehalfOf = string.Empty;
        string user = Session["username"] + " " + Session["lastname"] + "(" + Session["EmpID"] + ")";
        //if (!string.IsNullOrEmpty(txtOnBehalfOf.Text))
        //{
        //    if (txtOnBehalfOf.Text.Contains(','))
        //    {
        //        string[] arrOnBehalfOf = txtOnBehalfOf.Text.Split(',');
        //        strOnBehalfOf = arrOnBehalfOf[0].Trim();
        //    }
        //    else
        strOnBehalfOf = (string.Compare(user, txtOnBehalfOf.Text) == 0) ? string.Empty : txtOnBehalfOf.Text;
        //}
        //else
        //    strOnBehalfOf = " ";

        if (Session["statusID"].ToString() == "5" || Session["statusID"].ToString() == "6")
        {
            widgetComments.InnerHtml = ShowPreviousComments();
            btnCommentsSave.Visible = true;
            txtPopComments.Visible = true;
            btnCommentsClose.Visible = true;
            txtPopComments.Focus();
            popup.Show();
            popup_Comments.Show();
        }
        else
        {
            AddExpensesVO addexp = new AddExpensesVO();
            addexp.reqId = reqId.ToString();
            addexp.expItem = string.Empty;
            addexp.expLineNo = "0";
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Session["OrgID"].ToString();
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPurpose.Text;
            addexp.preAmount = "0";
            addexp.currency = string.Empty;
            addexp.status = string.Empty;
            addexp.statusId = "0";
            addexp.managerId = ddlManagerEmail.SelectedValue;
            addexp.managerEmail = ddlManagerEmail.SelectedItem.Text;
            addexp.startDate = txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
            addexp.actualAmount = "0";
            addexp.othercity = string.Empty;
            addexp.detailsFlag = "0";
            addexp.masterFlag = "1";
            addexp.automileageFlag = "0";
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
            addexp.quantity = "0";
            addexp.packageUnit = string.Empty;
            addexp.unitPrice = "0";
            addexp.shippingCost = "0";
            addexp.balAfterPO = "0";
            addexp.taxAmount1 = "0";
            addexp.taxAmount2 = "0";
            addexp.taxAmount3 = "0";
            addexp.reimbursable = string.Empty;
            addexp.taxCalculated = "0";
            addexp.vendPartno = string.Empty;
            addexp.polineseq = "0";
            addexp.csuserid = "0";
            addexp.taxPercent = "0";
            addexp.mgrGroupCode = string.Empty;
            addexp.itemCode = string.Empty;
            addexp.deptChgCmt = string.Empty;
            addexp.deptCode = string.Empty;
            addexp.userId = Session["UserID"].ToString();
            addexp.LNorm = "0";
            addexp.reimbt = "0";
            addexp.stateId = string.Empty;
            addexp.totTrip = "0";
            addexp.accountCode = string.Empty;
            addexp.companyCar = string.Empty;
            addexp.otherPlace = string.Empty;
            addexp.outOfCity = string.Empty;
            addexp.discount = "0";
            addexp.discountFlag = string.Empty;
            addexp.promoCode = string.Empty;
            addexp.reqDeliveryDate = string.Empty;
            addexp.onBeHalfOf = strOnBehalfOf;
            addexp.lastUpdSource = "Web";
            addexp.qbAcctId = "0";
            addexp.qbVendId = "0";
            addexp.qbItemId = "0";
            addexp.className = string.Empty;
            addexp.classRefId = string.Empty;
            addexp.sendtoqb = ChkSendToQB.Checked ? "Y" : "N";
            addexp.priceFlag = string.Empty;
            string retStr = xms.addExpense1(addexp);

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
            if (retStr.ToLower().Contains("fail"))
                dvError.Style["color"] = "Red";
            else
                dvError.Style["color"] = "Green";

            popup.Show();
            lblHeading.Text = "View Expense";
            if (retStr.ToLower().Contains("ap review"))
            {
                UpdateAPApprovalReqCount();
                btnRemind.Visible = true;
                Session["Status"] = "AP Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 2;
            }
            else if (retStr.ToLower().Contains("manager review"))
            {
                UpdateApprovalReqCount(ddlManagerEmail.SelectedValue);
                btnRemind.Visible = true;
                Session["Status"] = "Manager Review";
                spnStatus.Style.Add("color", "Orange");
                Session["statusID"] = 1;
            }
            else
                btnRemind.Visible = false;
            gvExp.DataBind();
        }
    }

    private void SaveHeader(DataTable dtExpPO)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            AddExpensesVO addexp = new AddExpensesVO();
            addexp.reqId = reqId.ToString();
            addexp.expItem = ddlExpItem.SelectedValue;
            addexp.expLineNo = "0";
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Session["OrgID"].ToString();
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPoPurpose.Text;
            addexp.preAmount = "0";
            addexp.currency = string.Empty;
            addexp.status = Session["Status"].ToString();
            addexp.statusId = Session["StatusID"].ToString();
            addexp.managerId = ddlPOMgrEmail.SelectedValue;
            addexp.managerEmail = ddlPOMgrEmail.SelectedItem.Text;
            addexp.startDate = txtPOTripStrtDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
            addexp.actualAmount = "0";
            addexp.othercity = string.Empty;
            if (ddlPreVendor.SelectedValue != hdnPreVendor.Value)
                addexp.detailsFlag = "2";
            else
                addexp.detailsFlag = "0";
            addexp.masterFlag = "1";
            addexp.automileageFlag = "0";
            addexp.agentName = string.Empty;
            addexp.bookedDate = string.Empty;
            addexp.fromCity = string.Empty;
            addexp.otherFromCity = string.Empty;
            addexp.toCity = string.Empty;
            addexp.otherToCity = string.Empty;
            addexp.preferredVendor = ddlPreVendor.SelectedValue;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            addexp.accountCode = string.Empty;
            addexp.quantity = "0";
            addexp.packageUnit = string.Empty;
            addexp.unitPrice = "0";
            addexp.userId = Session["UserID"].ToString();
            addexp.LNorm = "0";
            addexp.reimbt = "0";
            addexp.stateId = string.Empty;
            addexp.totTrip = "0";
            addexp.accountCode = string.Empty;
            addexp.companyCar = string.Empty;
            addexp.otherPlace = string.Empty;
            addexp.outOfCity = string.Empty;
            addexp.shippingCost = "0";
            addexp.balAfterPO = "0";
            addexp.taxAmount1 = "0";
            addexp.taxAmount2 = "0";
            addexp.taxAmount3 = "0";
            addexp.reimbursable = string.Empty;
            addexp.taxCalculated = "0";
            addexp.vendPartno = string.Empty;
            addexp.polineseq = "0";
            addexp.csuserid = "0";
            addexp.taxPercent = "0";
            addexp.mgrGroupCode = string.Empty;
            addexp.itemCode = string.Empty;
            addexp.deptChgCmt = string.Empty;
            addexp.deptCode = string.Empty;
            addexp.discount = "0";
            addexp.discountFlag = string.Empty;
            addexp.promoCode = string.Empty;
            addexp.reqDeliveryDate = string.Empty;
            addexp.onBeHalfOf = string.Empty;
            addexp.lastUpdSource = "Web";
            addexp.qbAcctId = "0";
            addexp.qbVendId = "0";
            addexp.qbItemId = "0";
            addexp.className = string.Empty;
            addexp.classRefId = "0";
            addexp.sendtoqb = string.Empty;
            addexp.priceFlag = string.Empty;
            string retStr = xms.addExpense1(addexp);

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearPOFields();
            gvPO.DataSource = dtExpPO;
            gvPO.DataBind();
            Session.Remove("dsSt");
            LoadEditPOData(null);
            SortGrid();
            dvPoError.Visible = true;
            dvPoError.InnerHtml = retStr;
            if (retStr.ToLower().Contains("fail") || retStr.ToLower().Contains("unable"))
                dvPoError.Style["color"] = "Red";
            else
                dvPoError.Style["color"] = "Green";
        }
        else
        {

            string strOnBehalfOf = string.Empty;
            string user = Session["username"] + " " + Session["lastname"] + "(" + Session["EmpID"] + ")";
            //if (!string.IsNullOrEmpty(txtOnBehalfOf.Text))
            //{
            //    if (txtOnBehalfOf.Text.Contains(','))
            //    {
            //        string[] arrOnBehalfOf = txtOnBehalfOf.Text.Split(',');
            //        strOnBehalfOf = arrOnBehalfOf[0].Trim();
            //    }
            //    else
            strOnBehalfOf = (string.Compare(user, txtOnBehalfOf.Text) == 0) ? string.Empty : txtOnBehalfOf.Text;
            //}
            //else
            //    strOnBehalfOf = " ";

            AddExpensesVO addexp = new AddExpensesVO();
            addexp.reqId = reqId.ToString();
            addexp.expItem = string.Empty;
            addexp.expLineNo = "0";
            addexp.expDate = string.Empty;
            addexp.citiesVstd = string.Empty;
            addexp.comments = string.Empty;
            addexp.orgId = Session["OrgID"].ToString();
            addexp.expType = string.Empty;
            addexp.jobCode = string.Empty;
            addexp.phaseCode = string.Empty;
            addexp.JCatCode = string.Empty;
            addexp.compCode = Session["CompCode"].ToString();
            addexp.purpose = txtPurpose.Text;
            addexp.preAmount = "0";
            addexp.currency = string.Empty;
            addexp.status = Session["Status"].ToString();
            addexp.statusId = Session["StatusID"].ToString();
            addexp.managerId = ddlManagerEmail.SelectedValue;
            addexp.managerEmail = ddlManagerEmail.SelectedItem.Text;
            addexp.startDate = txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (ddlType.SelectedValue == "ER" ? "0" : (ddlType.SelectedValue == "PA" ? "1" : "2"));
            addexp.actualAmount = "0";
            addexp.othercity = string.Empty;
            addexp.masterFlag = "1";
            addexp.detailsFlag = "0";
            addexp.automileageFlag = "0";
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
            addexp.quantity = "0";
            addexp.packageUnit = string.Empty;
            addexp.unitPrice = "0";
            addexp.shippingCost = "0";
            addexp.balAfterPO = "0";
            addexp.taxAmount1 = "0";
            addexp.taxAmount2 = "0";
            addexp.taxAmount3 = "0";
            addexp.reimbursable = string.Empty;
            addexp.taxCalculated = "0";
            addexp.vendPartno = string.Empty;
            addexp.polineseq = "0";
            addexp.csuserid = "0";
            addexp.taxPercent = "0";
            addexp.userId = Session["UserID"].ToString();
            addexp.LNorm = "0";
            addexp.reimbt = "0";
            addexp.stateId = string.Empty;
            addexp.totTrip = "0";
            addexp.accountCode = string.Empty;
            addexp.companyCar = string.Empty;
            addexp.otherPlace = string.Empty;
            addexp.outOfCity = string.Empty;
            addexp.mgrGroupCode = string.Empty;
            addexp.itemCode = string.Empty;
            addexp.deptChgCmt = string.Empty;
            addexp.deptCode = string.Empty;
            addexp.discount = "0";
            addexp.discountFlag = string.Empty;
            addexp.promoCode = string.Empty;
            addexp.reqDeliveryDate = string.Empty;
            addexp.onBeHalfOf = strOnBehalfOf;
            addexp.lastUpdSource = "Web";
            addexp.qbAcctId = "0";
            addexp.qbVendId = "0";
            addexp.qbItemId = "0";
            addexp.className = string.Empty;
            addexp.classRefId = "0";
            addexp.sendtoqb = ChkSendToQB.Checked ? "Y" : "N";
            addexp.priceFlag = string.Empty;
            string retStr = xms.addExpense1(addexp);

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearFields();
            gvExp.DataSource = dt;
            gvExp.DataBind();
            CalculateTotals();
            Session.Remove("dsSt");
            SortGrid();
            dvError.Visible = true;
            dvError.InnerHtml = retStr;
            if (retStr.ToLower().Contains("fail") || retStr.ToLower().Contains("unable"))
                dvError.Style["color"] = "Red";
            else
                dvError.Style["color"] = "Green";
        }
    }

    protected void btnCancelExp_Click(object sender, EventArgs e)
    {
        hdnExpVoid.Value = "Y";
        lblConfirm.Text = "Are you sure you want to cancel this Expense Request?";
        popup.Show();
        popConfirmCancelPO.Show();
    }

    private int GetSeqId()
    {
        int seq = xms.getExpLineNo(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
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

    protected void gvExp_RowEditing(object sender, GridViewEditEventArgs e)
    {

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
        }
        else
        {
            dvError.InnerHtml = "You cannot delete single line item.";
            dvError.Style["color"] = "Red";
        }
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
            Label lblFromCity = (Label)e.Row.FindControl("lblFromCity");
            Label lblFromOtherCity = (Label)e.Row.FindControl("lblFromOtherCity");
            lblCity.Text = (lblCity.Text == string.Empty ? (lblFromCity.Text.ToLower() == "other" ? lblFromOtherCity.Text : lblFromCity.Text) : lblCity.Text);

            if (lblCity != null && lblCity.Text == "Other")
                lblCity.Visible = false;

            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            ///////Display Line in color depending budget availability
            //DataTable dsCodes = new DataTable();
            //DataSet dsCodes1 = new DataSet();
            //DataTable dt = new DataTable();
            //DataView view;
            //if (Session["dsCodes"] != null)
            //{
            //    dsCodes = (DataTable)Session["dsCodes"];
            //    string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //    view = new DataView(dsCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //    dt = view.ToTable();
            //}
            //else
            //{
            //    string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
            //    List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
            //    dsCodes1.Tables.Add(Utility.ConvertToDataTable(lstExp));
            //    dt = dsCodes1.Tables[0];
            //}
            //string lmt = dt.Rows[0]["CodeValue2"].ToString();
            //if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
            //    {
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //    }
            //}
            //else
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
            //    {
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //    }
            //}

            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This expense item has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }
            ///////Display Line in color depending budget availability

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

    private void CalculateTotals()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;

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
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

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
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "LoadCities", "LoadCityList();", true);
        popup.Show();
    }

    protected void ddlJobs_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlJobs")
        {
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
        //DropDownList ddl = sender as DropDownList;
        //DataTable dsCodes = (DataTable)Session["dsCodes"];
        //DataSet dsItems = (DataSet)Session["dsItems"];
        //DataTable dtItems = dsItems.Tables[0];

        //DataTable dt = new DataTable();
        //dt = dsCodes.Clone();
        //dt.Rows.Clear();

        //for (int i = 0; i < dsCodes.Rows.Count; i++)
        //{
        //    for (int j = 0; j < dtItems.Rows.Count; j++)
        //    {
        //        if (dsCodes.Rows[i]["Description"].ToString() == dtItems.Rows[j]["ExpItem"].ToString())
        //            dt.ImportRow(dsCodes.Rows[i]);
        //    }
        //}

        //for (int k = 0; k < dtItems.Rows.Count; k++)
        //{
        //    if (dtItems.Rows[k]["expItem"].ToString() == ddlEditExpenseItem.SelectedItem.Text)
        //        chkReimb.Checked = dtItems.Rows[k]["reimb"].ToString() == "Y" ? true : false;
        //}

        //string expr = "CodeID = 'EXPITEM' and Description = '" + ddl.SelectedItem.Text + "'";
        //DataView view = new DataView(dsCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
        //DataTable dtEItems = view.ToTable();

        //if (dtEItems.Rows.Count > 0)
        //{
        //    hdnAcc.Value = dtEItems.Rows[0]["CodeValue1"].ToString();
        //    hdnExpItem.Value = dtEItems.Rows[0]["codeKey"].ToString();
        //    hdnAttMandtry.Value = dtEItems.Rows[0]["CodeValue5"].ToString() == string.Empty ? "N" : dtEItems.Rows[0]["CodeValue5"].ToString();
        //}
        //else
        //{
        //    hdnAcc.Value = string.Empty;
        //    hdnExpItem.Value = string.Empty;
        //    hdnAttMandtry.Value = "N";
        //}

        popup.Hide();
    }

    private void GetAccountCodeByExpenseItem()
    {
        //Load all account codes and create a corresponding a session
        DataTable dt = new DataTable();
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = Session["DepartmentCode"].ToString();
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = string.Empty;
        if (Session["AccountCodes"] == null)
        {
            //string str = xms.getAccCodeForExp(Session["CompCode"].ToString(), Convert.ToInt32(Session["OrgID"]), Session["DepartmentCode"].ToString());
            //List<AccCodeVO> lst = ser.Deserialize<List<AccCodeVO>>(str);
            string str = xms.erGetClassificDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), deptCode, "ER");
            List<ClassificationVO> lst = ser.Deserialize<List<ClassificationVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["AccountCodes"] = dt;
        }
        else
            dt = (DataTable)Session["AccountCodes"];

        //Concatenate Account Code and Classification
        if (!dt.Columns.Contains("AccountClss"))
            dt.Columns.Add("AccountClss");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AccountClss"] = dt.Rows[i]["accountCode"].ToString() + "--" + dt.Rows[i]["expItem"].ToString();
        //Concatenate Account Code and Classification

        if (dt.Rows.Count > 0)
        {
            dvExpError.InnerHtml = string.Empty;
            if (ddlAccountCodes.Items.Count == 0)
            {
                ddlAccountCodes.DataSource = GetHierarchicalData(dt, "AccountClss");
                ddlAccountCodes.DataBind();
                ddlAccountCodes.Items.Insert(0, "Please Select");
                ddlAccountCodes.Items.FindByText("Please Select").Value = "0";
                ddlAccountCodes.SelectedValue = "0";
            }

            //Display default account code depending on selected expense item
            //DataView dv = new DataView(dt, "ExpItem = '" + ddlAccountCodes.SelectedValue + "'", "ExpItem", DataViewRowState.CurrentRows);
            //if (dv.ToTable().Rows.Count > 0)
            //{
            //    ddlAccountCodes.SelectedValue = dv.ToTable().Rows[0]["expCode"].ToString();
            //    GetBudgetData();
            //}
            //else
            //    ddlAccountCodes.SelectedValue = "0";
        }
        else
        {
            dvExpError.Style["color"] = "Red";
            dvExpError.InnerHtml = "No Account Codes registered.";
        }
    }

    protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
        {
            Session.Remove("dtExpItem");
            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(true);
            else
            {
                var str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlDepartment.SelectedValue, 2, string.Empty);
                List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
                DataTable dt1 = Utility.ConvertToDataTable(lst);

                //add new column containing account number and account name seperated with --
                if (!dt1.Columns.Contains("AcountClss"))
                    dt1.Columns.Add("AcountClss");

                for (int i = 0; i < dt1.Rows.Count; i++)
                    dt1.Rows[i]["AcountClss"] = dt1.Rows[i]["acctLongCode"].ToString() + "--" + dt1.Rows[i]["accName"].ToString();
                //add new column containing account number and account name seperated with --

                Session["dtExpItem"] = GetHierarchicalData(dt1, "AcountClss");
                ddlExpItem.DataSource = dt1.DefaultView.ToTable(true, "AcountClss", "accName");
                ddlExpItem.DataBind();
                ddlExpItem.Items.Insert(0, "Please Select");
                ddlExpItem.Items.FindByText("Please Select").Value = "0";
            }
        }
        if (Session["DepartmentCode"].ToString() != ddlDepartment.SelectedValue)
            dvCommts.Visible = true;
        else
            dvCommts.Visible = false;
        popAddPO.Show();
    }

    private void BindItemsCode()
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        string exp = "accName='" + ddlExpItem.SelectedValue + "'";
        DataView dt1 = new DataView(dt, exp, "accName", DataViewRowState.CurrentRows);
        ddlItemCode.DataSource = dt1;
        ddlItemCode.DataBind();
        ddlItemCode.Items.Insert(0, "Please Select");
        ddlItemCode.Items.FindByText("Please Select").Value = "0";
        Session["ItemCodes"] = dt1.ToTable();
    }

    protected void ddlItemCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlItemCode.SelectedValue != "0")
        {
            DataTable dt = (DataTable)Session["ItemCodes"];
            string exp = "ItemCode='" + ddlItemCode.SelectedItem.Text + "'";
            DataView dvitems = new DataView(dt, exp, "ItemCode", DataViewRowState.CurrentRows);
            DataTable dtemp = dvitems.ToTable();
            txtDescr.Text = dtemp.Rows[0]["Description"].ToString();

            //Load selected item inventory details
            DataTable dtInv = GetItemInventoryDetails(ddlItemCode.SelectedValue);
            DataView dvInv = dtInv.DefaultView;
            gvItemInventory.DataSource = dvInv.ToTable(true, "locCode", "locName", "locAddress1");
            gvItemInventory.DataBind();
            lnkShowItemInventory.Style["display"] = "block";
        }
        else if (ddlItemCode.SelectedValue == "0")
            lnkShowItemInventory.Style["display"] = "none";
        popAddPO.Show();
    }

    protected void ddlPOExpItem_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindItemsCode();
        DataTable dt = (DataTable)Session["dtExpItem"];
        string expr = "accName = '" + ddlExpItem.SelectedValue + "'";
        DataView view = new DataView(dt, expr, "accName", DataViewRowState.CurrentRows);
        if (view.ToTable().Rows.Count > 0)
        {
            txtAccCode.Text = view.ToTable().Rows[0]["accountCode"].ToString();
            hdnQBAcctID.Value = view.ToTable().Rows[0]["qbAccID"].ToString();
        }

        txtTaxPercent.Text = Session["Tax"].ToString();
        hdnTax.Value = txtTaxPercent.Text;

        double allRowsAmntVal = 0;
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;

        txtQuantity.Text = "1";
        txtUnitPrice.Text = "0";
        txtPoAmount.Text = "0";
        txtShipCost.Text = "0";
        CalOnAccCode();
        txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(txtPoAmount.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        popAddPO.Show();
    }

    private void CalOnAccCode()
    {
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtPOTripStrtDate.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }

            else
                dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtAccCode.Text;
        budget.compCode = Session["CompCOde"].ToString();
        budget.deptCode = ddlDepartment.SelectedValue;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;

        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

        string expression = "accountCode = '" + txtAccCode.Text + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();

        if (dtAcccode.Rows.Count == 0)
        {
            dvPOErrMsg.Style["color"] = "Red";
            dvPOErrMsg.InnerHtml = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
        }
        else
        {
            dvPOErrMsg.InnerHtml = string.Empty;
            if (dtAcccode.Rows.Count > 0)
            {
                txtBudget.Text = dtAcccode.Rows[0]["budget"].ToString();
                txtCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
                txtRemain.Text = dtAcccode.Rows[0]["remaining"].ToString();
            }
            //if (Session["Edit"] == "y")
            //    txtBalAfterPO.Text = txtRemain.Text;
        }
    }

    private DataView GetExpItemSections(DataTable dt)
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

    protected void CitiesTextChanged(object sender, EventArgs e)
    {
        //DropDownList ddlCity = sender as DropDownList;
        TextBox txtcity = sender as TextBox;
        DataView view = (DataView)Session["Sectiondt"];
        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                BindVendors(string.Empty, txtPrefVendor.Text, txtcity.Text);
                txtEditAgentName.Text = string.Empty;
                //ddlEditAgName.Items.Clear();
                RetainVendorFields();
            }
        }

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                if (chkIsOutOfCity.Checked)
                {
                    dvEditToCity.Style["display"] = "block";
                    dvLocalLocation.Style["display"] = "none";
                }
                else
                {
                    dvEditToCity.Style["display"] = "none";
                    dvLocalLocation.Style["display"] = "block";
                }
            }
        }
        popup.Hide();
        popup_Edit.Show();
    }

    protected void btnCommentsSave_Click(object sender, EventArgs e)
    {
        if (txtPopComments.Text != string.Empty)
        {
            int uID = 0;
            string retStr = string.Empty;
            uID = Convert.ToInt32(Session["UserID"]);

            string retCmt = xms.addComment(Convert.ToInt32(Session["ReqID"]), txtPopComments.Text, Convert.ToInt32(Session["OrgID"]), uID);
            txtPopComments.Text = string.Empty;
            popup_Comments.Hide();

            //Session["SeqCnt"] = "0";
            reqId = Convert.ToInt32(Session["ReqID"]);
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

            if (ddlTypeVar == 2)
                dt = (DataTable)Session["dtPo"];
            else
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
            addexp.purpose = ddlType.SelectedValue == "PO" ? txtPoPurpose.Text : txtPurpose.Text;
            addexp.preAmount = 0;
            addexp.currency = string.Empty;
            addexp.status = string.Empty;
            addexp.statusId = 0;
            addexp.managerId = ddlType.SelectedValue == "PO" ? Convert.ToInt32(ddlPOMgrEmail.SelectedValue) : Convert.ToInt32(ddlManagerEmail.SelectedValue);
            addexp.startDate = ddlType.SelectedValue == "PO" ? txtPOTripStrtDate.Text : txtTripStartDate.Text;
            addexp.payMode = string.Empty;
            addexp.preApproved = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2));
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
            addexp.preferredVendor = ddlType.SelectedValue == "PO" ? ddlPreVendor.SelectedValue : string.Empty;
            addexp.itinararyNo = string.Empty;
            addexp.fromDate = string.Empty;
            addexp.toDate = string.Empty;
            addexp.companyCar = string.Empty;
            addexp.otherPlace = string.Empty;
            addexp.outOfCity = false;
            addexp.quantity = 0;
            addexp.unitPrice = 0;
            addexp.packageUnit = "0";
            addexp.shippingCost = 0;
            addexp.balAfterPO = 0;
            addexp.taxAmount1 = 0;
            addexp.taxAmount2 = 0;
            addexp.taxAmount3 = 0;
            addexp.reimbursable = string.Empty;
            addexp.taxCalculated = 0;
            addexp.vendPartno = string.Empty;
            addexp.polineseq = 0;
            addexp.csuserid = 0;
            addexp.taxPercent = 0;
            addexp.mgrGroupCode = string.Empty;
            addexp.itemCode = string.Empty;
            addexp.deptChgCmt = string.Empty;
            addexp.deptCode = string.Empty;
            addexp.userId = Convert.ToInt32(Session["UserID"]);
            addexp.LNorm = 0;
            addexp.reimbt = 0;
            addexp.stateId = string.Empty;
            addexp.totTrip = 0;
            addexp.accountCode = string.Empty;
            addexp.discount = 0;
            addexp.discountFlag = string.Empty;
            addexp.promoCode = string.Empty;
            addexp.reqDeliveryDate = string.Empty;
            addexp.onBeHalfOf = txtOnBehalfOf.Text;
            addexp.lastUpdSource = "Web";
            addexp.qbAcctId = 0;
            addexp.qbVendId = 0;
            addexp.qbItemId = 0;
            addexp.className = string.Empty;
            addexp.classRefId = "0";
            addexp.sendtoqb = ChkSendToQB.Checked ? "Y" : "N";
            addexp.priceFlag = string.Empty;
            retStr = xms.addExpense(addexp);

            ddlManagerEmail.SelectedIndex = 0;

            xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
            ClearFields();
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            if (ddlTypeVar == 2)
            {
                gvPO.DataSource = dt;
                dvPoError.Visible = true;
                dvPoError.InnerHtml = retStr;
                if (retStr.ToLower().Contains("fail"))
                    dvPoError.Style["color"] = "Red";
                else
                    dvPoError.Style["color"] = "Green";
            }
            else
            {
                gvExp.DataSource = dt;
                CalculateTotals();
                dvError.Visible = true;
                dvError.InnerHtml = retStr;
                if (retStr.ToLower().Contains("fail"))
                    dvError.Style["color"] = "Red";
                else
                    dvError.Style["color"] = "Green";
            }
            Session.Remove("dsSt");
            SortGrid();
            dvExpDetails.Visible = false;

            lblHeading.Text = "View Expense";

            if (retStr.Contains("AP Review"))
            {
                UpdateAPApprovalReqCount();
                Session["Status"] = "AP Review";
                Session["statusID"] = 2;
                if (ddlTypeVar == 2)
                {
                    spnPOStatus.Style.Add("color", "Orange");
                    btnPOSave.Visible = false;
                    btnPOSubmit.Visible = false;
                    btnAddPoExpense.Visible = false;
                }
                else
                {
                    spnStatus.Style.Add("color", "Orange");
                    btnSave.Visible = false;
                    btnSubmit.Visible = false;
                    btnAddExpense.Visible = false;
                }
            }
            else if (retStr.Contains("Manager Review"))
            {
                UpdateApprovalReqCount(ddlManagerEmail.SelectedValue);
                Session["Status"] = "Manager Review";
                Session["statusID"] = 1;
                if (ddlTypeVar == 2)
                {
                    spnPOStatus.Style.Add("color", "Orange");
                    btnPOSave.Visible = false;
                    btnPOSubmit.Visible = false;
                    btnAddPoExpense.Visible = false;
                }
                else
                {
                    spnStatus.Style.Add("color", "Orange");
                    btnSave.Visible = false;
                    btnSubmit.Visible = false;
                    btnAddExpense.Visible = false;
                }
            }
            if (ddlTypeVar == 2)
                gvPO.DataBind();
            else
                gvExp.DataBind();
        }
        else
        {
            dvErrorc.Style["color"] = "Red";
            dvErrorc.InnerHtml = "Please provide comments.";
            popup_Comments.Show();
        }
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            //if (Session["PastDate"] == "1")
            //{
            //    pop_DWarn.Show();
            //    Session.Remove("PastDate");
            //}
            pop_EditPO.Show();
        }
        else
            popup.Show();
    }

    protected void DeleteExpItem(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(hdnRowIndex.Value);
        int seq = Convert.ToInt32(hdnSeq1.Value);
        dt = (DataTable)Session["dt"];
        dt.Rows[index].Delete();
        dt.AcceptChanges();
        Session["dt"] = dt;
        xms.deleteExpense(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]));

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

    protected void RetainDialog(object sender, EventArgs e)
    {
        CalculateTotals();
        if (Session["auto"].ToString() == "false")
        {
            popup.Show();
            if (Session["popup"].ToString() == "true")
                popup_Edit.Show();
        }
        popAlert.Hide();
    }

    protected void ReloadEditData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("dsSt");
        SortGrid();
        LoadEditData(null);
    }

    protected void ReloadPOData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        LoadEditPOData(null);
    }

    private void RetainFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();

            //ExpenseDate Fields
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

            //From/To Date Fields
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

            //CitiesVisited Fields
            if (dt.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Style["display"] = "block";
                hdnCodeValue4.Value = dt.Rows[0]["CodeValue4"].ToString();
                if (Session["City"].ToString() == "")
                    txtCityVisited.Text = string.Empty;
                //ddlEditCity.SelectedValue = "0";
                else
                    txtCityVisited.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();
                //ddlEditCity.SelectedValue = Session["City"].ToString() == string.Empty ? "0" : Session["City"].ToString();
                //if (ddlEditCity.SelectedValue.ToLower() == "other")
                //    dvEditOtherCity.Style["display"] = "block";
                //else
                //{
                //    dvEditOtherCity.Style["display"] = "none";
                if (lblPopHeading.Text.ToLower().Contains("new"))
                {
                    DataView view1 = (DataView)Session["Sectiondt"];
                    if (view1 != null)
                    {
                        DataTable dt1 = view1.ToTable();
                        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                        {
                            BindVendors(string.Empty, txtPrefVendor.Text, txtCityVisited.Text);
                            txtEditAgentName.Text = string.Empty;
                            //ddlEditAgName.Items.Clear();
                            RetainVendorFields();
                        }
                    }
                }
                //}
            }
            else
            {
                dvEditCV.Style["display"] = "none";
                hdnCodeValue4.Value = string.Empty;
            }

            //From/To City Fields
            if (dt.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Style["display"] = "block";
                dvEditToCity.Style["display"] = "block";
                hdnCodeValue5.Value = dt.Rows[0]["CodeValue5"].ToString();
                if (Session["City"].ToString() == "")
                    txtFromCity.Text = string.Empty;
                else
                    txtFromCity.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();

                if (lblPopHeading.Text.ToLower().Contains("new"))
                {
                    DataView view1 = (DataView)Session["Sectiondt"];
                    if (view1 != null)
                    {
                        DataTable dt1 = view1.ToTable();
                        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                        {
                            BindVendors(string.Empty, txtPrefVendor.Text, txtFromCity.Text);
                            txtEditAgentName.Text = string.Empty;
                            //ddlEditAgName.Items.Clear();
                            RetainVendorFields();
                        }
                    }
                }
            }
            else
            {
                dvEditFromcity.Style["display"] = "none";
                dvEditToCity.Style["display"] = "none";
                hdnCodeValue5.Value = string.Empty;
            }

            //AutoMileage Fields
            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Style["display"] = "block";
                dvEditLN.Style["display"] = "block";
                dvChkOutOfCity.Style["display"] = "block";
                txtEditActAmnt.ReadOnly = true;
                txtEditPreAmnt.ReadOnly = true;
                chkIsOutOfCity.Checked = true;
                dvEditCompCar.Style["display"] = "block";
                ddlCompCar.SelectedValue = Session["CompCar"].ToString().ToLower() == "false" ? hdnPrsnCar.Value : hdnCmpCar.Value;
                hdnCodeValue6.Value = dt.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvChkOutOfCity.Style["display"] = "none";
                dvEditCompCar.Style["display"] = "none";
                dvLocalLocation.Style["display"] = "none";
                dvEditTT.Style["display"] = "none";
                dvEditLN.Style["display"] = "none";
                txtEditLocalLocation.Text = string.Empty;
                txtEditTotTrip.Text = string.Empty;
                txtEditLNorm.Text = string.Empty;
                hdnCodeValue6.Value = string.Empty;
                txtEditActAmnt.ReadOnly = false;
                txtEditPreAmnt.ReadOnly = false;
            }
        }
        else
        {
            dvLocalLocation.Style["display"] = "none";
            dvChkOutOfCity.Style["display"] = "none";
            dvEditCompCar.Style["display"] = "none";
            if (Session["TestViewExp"] == "1")
            {
                dvEditED.Style["display"] = "block";
                hdnCodeValue2.Value = "Y";
            }
            else
            {
                dvEditED.Style["display"] = "none";
                hdnCodeValue2.Value = string.Empty;
            }
            dvEditFD.Style["display"] = "none";
            dvEditTD.Style["display"] = "none";
            if (Session["TestViewExp"] == "1")
            {
                hdnCodeValue4.Value = "Y";
                dvEditCV.Style["display"] = "block";
            }
            else
            {
                hdnCodeValue4.Value = string.Empty;
                dvEditCV.Style["display"] = "none";
            }
            dvEditFromcity.Style["display"] = "none";
            dvEditToCity.Style["display"] = "none";
            dvEditTT.Style["display"] = "none";
            dvEditLN.Style["display"] = "none";
            txtEditLocalLocation.Text = string.Empty;
            txtEditTotTrip.Text = string.Empty;
            txtEditLNorm.Text = string.Empty;
            txtEditReimbt.Text = string.Empty;
            txtEditFromdate.Text = string.Empty;
            txtEditTodate.Text = string.Empty;
            txtEditItNo.Text = string.Empty;
            txtEditActAmnt.ReadOnly = false;
            txtEditPreAmnt.ReadOnly = false;
            hdnCodeValue1.Value = string.Empty;
            hdnCodeValue3.Value = string.Empty;
            hdnCodeValue5.Value = string.Empty;
            hdnCodeValue6.Value = string.Empty;
        }

    }

    private void RetainVendorFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")//&& ddlEditPreVendor.Items.Count > 1)
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

    private void BlockFields()
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
        //dvEditFromOther.Style["display"] = "none";
        //dvEditToOther.Style["display"] = "none";
        dvEditVendor.Style["display"] = "none";
        dvEditAgName.Style["display"] = "none";
        dvEditItNo.Style["display"] = "none";
        //dvEditOtherCity.Style["display"] = "none";

    }

    private void BlockViewFields()
    {
        dvEditVPreVendor.Style["display"] = "none";
        dvEditVAgName.Style["display"] = "none";
        dvEditVItNo.Style["display"] = "none";
        dvEditVED.Style["display"] = "none";
        dvEditVCV.Style["display"] = "none";
        //SpVOthercity.Style["display"] = "none";
        dvEditVFromcity.Style["display"] = "none";
        // dvEditVFromOther.Style["display"] = "none";
        dvEditVToCity.Style["display"] = "none";
        //dvEditVToOther.Style["display"] = "none";
        dvEditVFD.Style["display"] = "none";
        dvEditVTD.Style["display"] = "none";
        dvEditVTT.Style["display"] = "none";
        dvEditVLN.Style["display"] = "none";
        dvEditVReimbt.Style["display"] = "none";

    }

    private void ValidateMaxApprLimit()
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        //if (ddlTypeVar == 2)
        //{
        //    hdnTotalActAmnt.Value = hdnTotalPreAmnt.Value = lblGrandTotalAmnt.Text.ToString();
        //    hdnCurrExpAmnt.Value = ut.NullSafeDouble(txtPoAmount.Text).ToString();
        //}
        //else
        //{
        hdnTotalActAmnt.Value = hdnTotalPreAmnt.Value = lblGrandTotalAmnt.Text.ToString();
        hdnCurrExpAmnt.Value = Convert.ToBoolean(Session["PreApproval"]) == true ? ut.NullSafeDouble(txtEditPreAmnt.Text).ToString() : ut.NullSafeDouble(txtEditActAmnt.Text).ToString();
        //}
    }

    private void BindStatesAndCountry()
    {
        string str = xms.getRegions();
        List<RegionVO> lst = ser.Deserialize<List<RegionVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "State ASC";
        ddlRgnCode.DataSource = dv;
        ddlRgnCode.DataTextField = "state";
        ddlRgnCode.DataValueField = "regionCode";
        ddlRgnCode.DataBind();
        ddlRgnCode.Items.Insert(0, "Please Select");
        ddlRgnCode.Items.FindByText("Please Select").Value = "0";

        DataTable dtC = (DataTable)Session["dsCodes"];
        DataView dvC = new DataView(dtC, "CodeID = 'ERCOUNTRYCD'", "CodeKey", DataViewRowState.CurrentRows);
        ddlCountry.DataSource = dvC;
        ddlCountry.DataBind();
    }

    private void BindCurrencyAndPayTerms()
    {
        //LOAD CURRENCY
        string currencyData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "CURRENCY");
        List<CodeValueVO> currency = ser.Deserialize<List<CodeValueVO>>(currencyData);
        ddlVendCurrency.DataSource = currency;
        ddlVendCurrency.DataBind();
        ddlVendCurrency.Items.Insert(0, "Please Select");
        ddlVendCurrency.Items.FindByText("Please Select").Value = "0";

        //LOAD PAYMENT TERMS
        string strPayTerm = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "PAYTERMS");
        List<CodeValueVO> lstPayTerm = ser.Deserialize<List<CodeValueVO>>(strPayTerm);
        ddlPayTerms.DataSource = lstPayTerm;
        ddlPayTerms.DataBind();
        ddlPayTerms.Items.Insert(0, "Please Select");
        ddlPayTerms.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        string str = xms.getCities(ddlRgnCode.SelectedValue);
        List<CityVO> lst = ser.Deserialize<List<CityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        dt.Columns.Add("CityZip");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["CityZip"] = dt.Rows[i]["City"].ToString() + "-" + dt.Rows[i]["ZipCode"].ToString();

        dt.AcceptChanges();
        DataView dv = dt.DefaultView;
        dv.Sort = "City ASC";
        Session["CitiesByRegion"] = dv.ToTable();
        //txtCities.Text = string.Empty;
        txtVendZip.Text = string.Empty;
        txtVendCity.Text = string.Empty;
        lblVendNo.Text = hdnVendCode.Value;
        txtVendCity.Focus();
        popAddVendor.Show();
    }

    protected void CreateVendor(object sender, EventArgs e)
    {
        btnVendSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendorNew();");
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvErrMsg');");
        txtVendAltPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtVendAltPhone', 'dvErrMsg');");
        txtAgentPh.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtAgentPh', 'dvErrMsg');");
        if (dvEditCV.Style["display"] == "block")
            txtVendCity.Text = txtCityVisited.Text;
        else if (dvEditFromcity.Style["display"] == "block")
            txtVendCity.Text = txtFromCity.Text;
        txtVendName.Text = txtPrefVendor.Text;
        BindStatesAndCountry();
        BindCurrencyAndPayTerms();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "GetVendNum", "getVendCode();", true);
        txtVendName.Focus();
        popAddVendor.Show();
        //popup_Edit.Show();
    }

    protected void btnVendColse_Click(object sender, EventArgs e)
    {
        txtPrefVendor.Text = string.Empty;

        //Display attachments in line data if already exists
        if (Session["RctFileName"] != null)
            lblFileName.Text = Session["RctFileName"].ToString();

        popAddVendor.Hide();
        popup_Edit.Show();
    }

    protected void btnVendNo_Click(object sender, EventArgs e)
    {
        //string listFiltervendors1 = string.Empty;
        //listFiltervendors1 = Session["VendorsList"].ToString();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", " var dsvend=null; dsvend = " + listFiltervendors1 + ";jq( \"#txtPrefVendor\" ).autocomplete({source: dsvend});", true);
        txtPrefVendor.Text = string.Empty;
        txtPrefVendor.Focus();

        //Display attachments in line data if already exists
        if (Session["RctFileName"] != null)
            lblFileName.Text = Session["RctFileName"].ToString();

        popup_Edit.Show();
    }

    protected void SaveVendor(object sender, EventArgs e)
    {
        //split city and zipcode
        string city = string.Empty;
        if (!string.IsNullOrEmpty(txtVendCity.Text))
        {
            if (txtVendCity.Text.Contains('-'))
            {
                string[] arrCity = txtVendCity.Text.Split('-');
                city = arrCity[0];
            }
            else
                city = txtVendCity.Text;
        }
        //split city and zipcode

        VendorsVO vend = new VendorsVO();
        vend.acceptSysOrders = chkSysOrders.Checked == true ? 1 : 0;
        vend.acctNum = txtVendAccNum.Text;
        vend.addedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.agentName = txtAgentName.Text;
        vend.agentPhoneNo = txtAgentPh.Text;
        vend.altContact = txtVendAltContact.Text;
        vend.altPhoneno = txtVendAltPhone.Text;
        vend.city = city;
        vend.comments = string.Empty;
        vend.compCode = Session["CompCode"].ToString();
        vend.country = ddlCountry.SelectedValue;
        vend.currency = ddlVendCurrency.SelectedValue;

        if (chkSysOrders.Checked)
        {
            vend.emailFlag = rblEmail.SelectedIndex == 0 ? 1 : 0;
            if (rblEmail.SelectedIndex == 0)
            {
                vend.vendorEmail = txtEmailFax.Text;
                vend.fax = string.Empty;
            }
            else if (rblEmail.SelectedIndex == 1)
            {
                vend.fax = txtEmailFax.Text;
                vend.vendorEmail = string.Empty;
            }
        }
        else
        {
            vend.emailFlag = 0;
            vend.fax = string.Empty;
            vend.vendorEmail = string.Empty;
        }

        vend.expenseItem = string.Empty;
        vend.expiryDate = txtExpiryDate.Text;
        vend.familyName = "";
        vend.firstName = txtVendFirstName.Text;
        vend.isPreferVend = "N";
        vend.lastName = txtVendLastName.Text;
        vend.middleName = txtVendMidName.Text;
        vend.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.openBal = txtVendBalance.Text;
        vend.orgId = Session["OrgID"].ToString();
        vend.payTerm = ddlPayTerms.SelectedValue;
        vend.preferagent = txtAgent.Text;
        vend.preference = string.Empty;
        vend.preferredVendor = txtVendName.Text;
        vend.promoCode = txtPromoCode.Text;
        vend.qbVendId = 0;
        vend.shipAddress1 = string.Empty;
        vend.shipAddress2 = string.Empty;
        vend.shipAddress3 = string.Empty;
        vend.startDate = txtStartDate.Text;
        vend.state = ddlRgnCode.SelectedValue;
        vend.taxCode = txtVendTaxCode.Text;
        vend.title = (ddlVendTitle.SelectedValue == "0" ? string.Empty : ddlVendTitle.SelectedValue);
        vend.type = 1;
        vend.vend1099 = txt1099.Text;
        vend.vendAddress1 = txtVendAddr1.Text;
        vend.vendAddress2 = txtVendAddr2.Text;
        vend.vendAddress3 = txtVendAddr3.Text;
        vend.vendContact = txtVendContact.Text;
        vend.vendDiscPercent = txtVendDisc.Text == string.Empty ? 0 : Convert.ToInt32(txtVendDisc.Text);
        vend.vendorId = "0";
        vend.vendorno = lblVendNo.Text;
        vend.vendPhoneNo = txtPhone.Text;
        vend.vendStatus = "";
        vend.vendZipCode = txtVendZip.Text;
        vend.website = txtUrl.Text;
        string ret = xms.addPreferredVend(vend);
        if (ret.ToLower().Contains("succes"))
        {
            dvExpError.InnerHtml = ret;
            Session["VenSaved"] = "1";
            dvExpError.Style["color"] = "Green";
            Session["NVend"] = txtVendName.Text;
            BindVendors(string.Empty, string.Empty, txtVendCity.Text);

            DataTable dt = (DataTable)Session["PreferredVendorList"];
            string exp = "PreferredVendor like '%" + Session["NVend"].ToString().Replace("'", "''") + "%'";
            DataView dtv = new DataView(dt, exp, "PreferredVendor", DataViewRowState.CurrentRows);
            DataTable dt1 = dtv.ToTable();
            if (dt1.Rows.Count > 0)
            {
                hdnQBVendID.Value = dt1.Rows[0]["qbVendId"].ToString();
                txtEditAgentName.Text = dt1.Rows[0]["AgentName"].ToString();
            }
            txtPrefVendor.Text = Session["NVend"].ToString();
            Session.Remove("NVend");

            //Display attachments in line data if already exists
            if (Session["RctFileName"] != null)
                lblFileName.Text = Session["RctFileName"].ToString();

            popup_Edit.Show();
            popAddVendor.Hide();
        }
        else
        {
            dvErrMsg.InnerHtml = ret;
            dvExpError.Style["color"] = "Red";
            popAddVendor.Show();
        }
    }

    protected void ConfirmSaveHeader(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            //Save Header Data
            //Session["SeqCnt"] = "0";
            reqId = Convert.ToInt32(Session["ReqID"]);
            DataTable dtPo = (DataTable)Session["dtPo"];
            SaveHeader(dtPo);
            pop_EditPO.Hide();
        }
        else
        {
            //Save Header Data
            //Session["SeqCnt"] = "0";
            reqId = Convert.ToInt32(Session["ReqID"]);
            dt = (DataTable)Session["dt"];
            SaveHeader(dt);
            popup.Hide();
        }
        //Add New Line
        AddNewLineItem();
    }

    protected void NoSaveHeader(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            //Restore Header Data
            txtPOTripStrtDate.Text = hdnHeaderStartdate.Value;
            ddlPreVendor.SelectedValue = hdnPreVendor.Value;
            txtPoPurpose.Text = hdnHeaderPurpose.Value;
        }
        else
        {
            //Restore Header Data
            txtTripStartDate.Text = hdnHeaderStartdate.Value;
            txtPurpose.Text = hdnHeaderPurpose.Value;
            txtOnBehalfOf.Text = hdnHeaderOnBehalfOf.Value;
        }
        //Add New Line
        AddNewLineItem();
    }

    protected void btnAddOnBehalfOf_Click(object sender, EventArgs e)
    {
        string onBehalfOf = txtOnBehalfOf.Text + "(external)";
        VendorsVO vend = new VendorsVO();
        vend.addedBy = Convert.ToInt32(Session["UserID"]);
        vend.agentName = string.Empty;
        vend.agentPhoneNo = string.Empty;
        vend.city = string.Empty;
        vend.compCode = Session["CompCode"].ToString();
        vend.expenseItem = string.Empty;
        vend.modifiedBy = Convert.ToInt32(Session["UserID"]);
        vend.orgId = Session["OrgID"].ToString();
        vend.preferagent = string.Empty;
        vend.preference = string.Empty;
        vend.preferredVendor = onBehalfOf;
        vend.type = 1;
        vend.vendAddress1 = string.Empty;
        vend.vendAddress2 = string.Empty;
        vend.vendAddress3 = string.Empty;
        vend.vendContact = string.Empty;
        vend.vendorno = string.Empty;
        vend.vendorId = "0";
        vend.vendPhoneNo = string.Empty;
        vend.vendZipCode = string.Empty;
        vend.promoCode = string.Empty;
        vend.vendDiscPercent = 0;
        vend.startDate = string.Empty;
        vend.expiryDate = string.Empty;
        vend.emailFlag = 0;
        vend.vendorEmail = string.Empty;
        vend.isPreferVend = "N";
        string ret = xms.addPreferredVend(vend);
        if (ret.ToLower().Contains("succes"))
        {
            Session.Remove("PreferredVendorList");
            BindVendors(string.Empty, string.Empty, string.Empty);
            BindOnBehalfOfList();
            txtOnBehalfOf.Text = onBehalfOf;
            dvError.Style["color"] = "Green";
        }
        else
            dvError.Style["color"] = "Red";
        //dvError.InnerHtml = ret;
        popup.Show();
    }

    [WebMethod]
    public static string[] searchCity(string cityname)
    {
        XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
        JavaScriptSerializer ser = new JavaScriptSerializer();
        string str = xms.searchCity(cityname);
        List<OrgListVO> cityList = ser.Deserialize<List<OrgListVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(cityList);
        string[] arr = new string[dt.Rows.Count];
        for (int i = 0; i < dt.Rows.Count; i++)
            arr[i] = dt.Rows[i]["City"].ToString();
        return arr;
    }

    #endregion

    # region Export

    protected void Export(object sender, EventArgs e)
    {
        dvExpDataMsg.InnerHtml = string.Empty;
        DisplaySummaryChart();
        if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            popup.Show();
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    private void PrintAndEmail()
    {
        string pdfText = xms.getExpReceiptToAttach(ut.NullSafeInteger(Session["ReqID"]), ut.NullSafeInteger(Session["OrgID"]), ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStrtDate.Text, Session["Email"].ToString());

        string[] arrExpCodes = new string[txtMulEmail.Text.Split(',').Length];
        arrExpCodes = txtMulEmail.Text.Split(',');
        for (int i = 0; i < arrExpCodes.Length; i++)
        {
            string retStr;
            //if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            //    retStr = xms.sendMail(arrExpCodes[i], string.Empty, "Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + ut.NullSafeDouble(Session["AmountToExp"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNameToExp"].ToString() + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            //else
            //    retStr = xms.sendMail(arrExpCodes[i], string.Empty, "PO Report PONO:" + Session["PONum"].ToString() + " - $" + ut.NullSafeDouble(Session["POGrandTotal"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["username"].ToString() + Session["lastname"] + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + ut.NullSafeDouble(Session["AmountToExp"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNameToExp"].ToString() + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            else
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + ut.NullSafeDouble(Session["POGrandTotal"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["username"].ToString() + Session["lastname"] + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
        }
        if (dvCCEmail.Style["display"] == "block" && txtCCEmail.Text != null)
        {
            string[] arrCCEmails = new string[txtCCEmail.Text.Split(',').Length];
            arrCCEmails = txtCCEmail.Text.Split(',');
            for (int i = 0; i < arrCCEmails.Length; i++)
            {
                string retStr;
                if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + ut.NullSafeDouble(Session["AmountToExp"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNameToExp"].ToString() + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                else
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + ut.NullSafeDouble(Session["POGrandTotal"]) + " - " + Session["username"].ToString() + Session["lastname"], "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["username"].ToString() + Session["lastname"] + ".<br />Amount&nbsp;:$" + ut.NullSafeDouble(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            }
        }
        txtMulEmail.Text = string.Empty;
        txtCCEmail.Text = string.Empty;
    }

    protected void ExportAndEmail(object sender, EventArgs e)
    {
        btnNExpEmail.Attributes.Add("onclick", "javascript:return ValEmail();");
        btnNExpEmail.Attributes.Add("onclick", "javascript:return validateMultipleEmailsCommaSeparated('" + txtMulEmail.ClientID + "',',');");
        DivEmailErr.InnerHtml = string.Empty;
        txtMulEmail.Text = string.Empty;
        lnkCCEmail.Visible = true;
        dvCCEmail.Style["display"] = "none";
        popMulEmail.Show();
        if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            popup.Show();
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    protected void AddCCEmail(object sender, EventArgs e)
    {
        dvCCEmail.Style["display"] = "block";
        lnkCCEmail.Visible = false;
        txtCCEmail.Text = string.Empty;
        popMulEmail.Show();
        if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            popup.Show();
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    protected void ValidateEmail(object sender, EventArgs e)
    {
        try
        {
            PrintAndEmail();
            dvPoError.Style["color"] = "Green";
            dvPoError.InnerHtml = "Mail sent successfully.";
            popExpData.Hide();
            popMulEmail.Hide();
        }
        catch (Exception ex)
        {
            DivEmailErr.Style["color"] = "Red";
            DivEmailErr.InnerHtml = "Unable to send email. Please try again.";
            popExpData.Show();
            popMulEmail.Show();
        }
        if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            popup.Show();
        else
            pop_EditPO.Show();
    }

    protected void PrintPO(object sender, EventArgs e)
    {
        string startDate = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStrtDate.Text;

        //encrypt email
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Encrypt(Session["Email"].ToString(), key);
        //encrypt email

        ScriptManager.RegisterStartupScript(this, GetType(), "Print Expense", "window.open('print.aspx?rq=" + Session["ReqID"].ToString() + "&sd=" + startDate + "&em=" + eMail + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);
        DisplaySummaryChart();
        if (ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA")
            popup.Show();
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    protected void btnDownloadPDF_Click(object sender, EventArgs e)
    {
        string fileName = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? "ExpenseReport_" + Session["username"] + "_" + Session["lastname"] + "_" + Session["ReqID"] + ".pdf" : "PurchaseOrder_" + Session["username"] + "_" + Session["lastname"] + "_" + Session["ReqID"] + ".pdf";
        byte[] bytes = xms.getExpReceiptToPDF(ut.NullSafeInteger(Session["ReqID"]), ut.NullSafeInteger(Session["OrgID"]), ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStrtDate.Text, Session["Email"].ToString());
        Response.Clear();
        MemoryStream ms = new MemoryStream(bytes);
        Response.ContentType = "application/pdf";
        Response.AddHeader("content-disposition", "attachment;filename=" + fileName);
        Response.Buffer = true;
        ms.WriteTo(Response.OutputStream);
        Response.End();
    }

    #endregion

    #region Comments

    protected void Comments(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPO.Show();
        else
        {
            CalculateTotals();
            popup.Show();
        }
        dvError.InnerHtml = string.Empty;
        dvErrorc.InnerHtml = string.Empty;
        txtPopComments.Visible = false;
        btnCommentsSave.Visible = false;
        btnCommentsClose.Visible = true;
        widgetComments.Visible = true;
        widgetComments.InnerHtml = ShowPreviousComments();
        popup_Comments.Show();
    }

    private string ShowPreviousComments()
    {
        var strCmnts = xms.getComments(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataSet dsComments = new DataSet();
        dsComments.Tables.Add(Utility.ConvertToDataTable(lstCmnts));

        string str = "<table width='100%'>";
        for (int i = 0; i < dsComments.Tables[0].Rows.Count; i++)
        {
            str += "<tr><td>" + dsComments.Tables[0].Rows[i]["Comments"] + "</td></tr><tr><td>&nbsp;</td></tr><tr><td style='color:Black;'><small><i>by " + dsComments.Tables[0].Rows[i]["Email"] + " on " + dsComments.Tables[0].Rows[i]["AddedOn"] + "</i></small></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
        }
        str += "</table>";
        return str;
    }

    protected void btnCommentsClose_Click(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (ddlTypeVar == 2)
            pop_EditPO.Show();
        else
            popup.Show();
        popup_Comments.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        dvAtt.InnerText = string.Empty;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        Session["SeqIdForAtt"] = hdnSeq.Value;
        Attachments(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        btnDeleteSelected.Style["display"] = "none";
        btnDeleteSelected.Attributes.Add("onclick", "javascript:return CheckAttDel();");
        popup.Show();
        popup_Att.Show();
    }

    private string Attachments(int seq)
    {
        string str = xms.getAttachmentItems(ut.NullSafeInteger(Session["ReqID"]), seq, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        Session["AttchList"] = ds;
        string str1 = string.Empty;
        return str1;
    }

    protected void gvAttchmnts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
                if (extension.ToLower().Contains("pdf"))
                    imgAttchmnt.ImageUrl = "images/pdfIcon.png";
                else
                {
                    byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                    string base64ImageString = ConvertBytesToBase64(bytes);
                    imgAttchmnt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
                }
            }

            statusCnt = Convert.ToInt32(Session["statusID"]);
            CheckBox chkDelAtt = (CheckBox)e.Row.FindControl("chkDelAtt");
            if (ds.Tables[0].Rows.Count == 1)
                chkDelAtt.Visible = false;
            else if (statusCnt == 3 || statusCnt == 5 || statusCnt == 6)
                chkDelAtt.Visible = true;
            else
                chkDelAtt.Visible = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnAttClose_Click(object sender, EventArgs e)
    {
        CalculateTotals();
        popup.Show();
        popup_Att.Hide();
    }

    protected void DownLdAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgName");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgName");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);

        ImageButton img = (ImageButton)sender;
        if (img.ID == "imgAttchmnt")
            popup_Att.Show();
        else if (img.ID == "imgDraft")
            popDraftsAtt.Show();
        if (hdnisExpLineDisplayed.Value.ToLower() == "y")
            popup_Edit.Show();
        popup.Show();
    }

    protected void DisplayLineAttachments(object sender, EventArgs e)
    {
        dvAtt.InnerText = string.Empty;
        Session["SeqIdForAtt"] = hdnSeq1.Value;
        Attachments(Convert.ToInt32(hdnSeq1.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        popup_Edit.Show();
        popup_Att.Show();
    }

    protected void DelAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnattId = (HiddenField)row.Cells[0].FindControl("hdnattId");
        HiddenField hdnAttOrgName = (HiddenField)row.Cells[0].FindControl("hdnAttOrgName");
        HiddenField hdnAttName = (HiddenField)row.Cells[0].FindControl("hdnAttName");
        Session["hdnattId"] = hdnattId.Value;
        Session["hdnAttOrgName"] = hdnAttOrgName.Value;
        Session["hdnAttName"] = hdnAttName.Value;
        popup_Att.Show();
        popup.Show();
        popDelAtt.Show();
    }

    protected void ConfirmDelete(object sender, EventArgs e)
    {
        string attId = string.Empty;
        foreach (GridViewRow row in gvAttchmnts.Rows)
        {
            CheckBox chkDelAtt = (CheckBox)row.FindControl("chkDelAtt");
            HiddenField hdnattId = (HiddenField)row.FindControl("hdnattId");
            if (chkDelAtt.Checked)
                attId += hdnattId.Value + "~";
        }
        attId = attId.TrimEnd('~');
        string retStr = xms.deleteMulAttachment(attId, 2, string.Empty, 0, 0, string.Empty);
        if (retStr.ToLower().Contains("succes"))
        {
            dvAtt.InnerText = retStr;
            dvAtt.Style["color"] = "Green";
            dvAtt.Style["font-weight"] = "normal";
            Attachments(Convert.ToInt32(Session["SeqIdForAtt"]));
            ds = (DataSet)Session["AttchList"];
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
            popup_Att.Show();
        }
        else
        {
            dvAtt.InnerText = "An error occured while deleting draft please try later";
            dvAtt.Style["color"] = "Red";
            dvAtt.Style["font-weight"] = "bold";
        }
        popDelAtt.Hide();
        popup.Show();
    }

    protected void RetainAttDialog(object sender, EventArgs e)
    {
        Attachments(Convert.ToInt32(Session["SeqIdForAtt"]));
    }

    protected void DeleteSelectedAttachments(object sender, EventArgs e)
    {
        btnDeleteSelected.Style["display"] = "block";
        popup.Show();
        popup_Att.Show();
        popDelAtt.Show();
    }

    #endregion

    #region Drafts

    protected void DisplayDrafts(object sender, EventArgs e)
    {
        BindDrafts();

        foreach (GridViewRow gvr in gvDrafts.Rows)
        {
            //Get a programmatic reference to the CheckBox control
            CheckBox cb = (CheckBox)gvr.FindControl("chkgvDft");

            ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
        }
        popDraftsAtt.Show();
        popup_Edit.Show();
        popup.Show();
    }

    private void BindDrafts()
    {
        var strDrafts = xms.getDraftItems(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(Session["UserID"]));
        List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(strDrafts);
        dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
        Session["dsDrafts"] = dsDrafts;

        gvDrafts.DataSource = dsDrafts;
        gvDrafts.DataBind();
    }

    protected void SelectDrafts(object sender, EventArgs e)
    {
        DataRow drSelRow;
        dtSelDfts.Columns.Add("SelFile");
        dtSelDfts.Columns.Add("DraftID");
        foreach (GridViewRow row1 in gvDrafts.Rows)
        {
            CheckBox chk = (CheckBox)row1.FindControl("chkgvDft");
            dsDrafts = (DataSet)Session["dsDrafts"];

            if (chk.Checked == true)
            {
                drSelRow = dtSelDfts.NewRow();
                drSelRow["SelFile"] = dsDrafts.Tables[0].Rows[row1.RowIndex]["fileName"].ToString();
                drSelRow["DraftID"] = dsDrafts.Tables[0].Rows[row1.RowIndex]["attachmentId"].ToString();
                dtSelDfts.Rows.Add(drSelRow);
            }
        }
        if (dtSelDfts.Rows.Count > 0)
        {
            Session["dtSelDfts"] = dtSelDfts;
            //hdnDftCnt.Value = dtSelDfts.Rows.Count.ToString();
            AddDrafts(dtSelDfts);
        }
        else
        {
            Session.Remove("dtSelDfts");
            LnkcurrAttachments.Style["display"] = "none";
        }
        //popDraftsAtt.Hide();
        popup.Show();
        popup_Edit.Show();
    }

    private void AddDrafts(DataTable dtSelDfts)
    {
        Session["dtSelDfts"] = dtSelDfts;
        StringBuilder sb = new StringBuilder();
        string dft = string.Empty;
        for (int i = 0; i < dtSelDfts.Rows.Count; i++)
        {
            dft = sb.Append(dtSelDfts.Rows[i]["DraftID"].ToString() + ",").ToString();
        }
        string FinalDft = dft.TrimEnd(',');

        ImagesVO img = new ImagesVO();
        img.requestId = Convert.ToInt32(Session["ReqID"]);
        img.compCode = Session["Compcode"].ToString();
        img.attachmentId = 0;
        img.expLineNo = Convert.ToInt32(hdnSeq1.Value);
        img.orgId = Convert.ToInt32(Session["OrgID"]);
        img.orgName = string.Empty;
        img.fileName = dtSelDfts.Rows[0]["SelFile"].ToString();//sending random file name,as not considered in db
        img.draftIds = FinalDft;
        string ret = xms.addExpensewithDrafts(img);

        if (ret.ToLower().Contains("fail"))
        {
            LnkcurrAttachments.Style["display"] = "none";
            dvDrftErr.Style["color"] = "Red";
            dvDrftErr.InnerHtml = ret;
            popDraftsAtt.Show();
        }
        else
        {
            dvDrftErr.InnerHtml = ret;
            dvDrftErr.Style["color"] = "Green";
            LnkcurrAttachments.Style["display"] = "block";
            if (gvDrafts.Rows.Count > 1)
                lnkShowDraft.Style["display"] = "block";
            else
                lnkShowDraft.Style["display"] = "none";
            Session["AddFrmDrfts"] = 1;
            Session["AddedFlag"] = 1;
            hdnDftCnt.Value = FinalDft;
            hdnAttIdsRet.Value = ret;
            lblEAttMsg.Style["display"] = "none";
            lblEAttMsg.Text = string.Empty;
            popDraftsAtt.Hide();
        }
    }

    protected void gvDrafts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnDrftName = (HiddenField)e.Row.FindControl("hdnDrftName");
            ImageButton imgDraft = (ImageButton)e.Row.FindControl("imgDraft");
            byte[] strReq = xms.getExpDraftsById(hdnDrftName.Value, 2);
            string base64ImageString = ConvertBytesToBase64(strReq);
            imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void ConfirmDraftDel(object sender, EventArgs e)
    {
        string delstr = string.Empty;
        string Attret = string.Empty;
        string tilted = string.Empty;
        string sp = hdnAttIdsRet.Value.TrimStart('`');
        string[] firstAtts = new string[2];
        firstAtts = sp.Split('`');
        foreach (string att in firstAtts)
        {
            string[] secAtts = new string[2];
            secAtts = att.Split('~');
            Attret = secAtts[0];
            tilted += Attret + '~';
        }
        delstr = xms.deleteMulAttachment(tilted.TrimEnd('~'), 1, hdnAttIdsRet.Value.TrimStart('`'), Convert.ToInt32(Session["LogUID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        if (delstr.ToLower().Contains("succes"))
            popup_Edit.Hide();
        else
        {
            dvExpError.InnerText = "An error occured while deleting draft please try later.";
            popup_Edit.Show();
        }
        Session.Remove("AddedFlag");
        Session.Remove("AddFrmDrfts");
        CalculateTotals();
        popup.Show();
    }

    #endregion

    #region Edit ExpenseItem

    protected void EditNewDetails(object sender, CommandEventArgs e)
    {
        Session.Remove("AttCnt");
        Session.Remove("dtSelDfts");
        Session.Remove("fStream");
        Session.Remove("RctFileName");
        Session.Remove("FileExt");
        lblPopHeading.Text = "Edit Expense";
        ddlEditExpType.Focus();
        btnExpLineHistory.Visible = true;
        btnSaveExp.Visible = true;
        btnDelete.Visible = true;
        btnAppend.Visible = false;
        btnPrev.Visible = true;
        btnNext.Visible = true;
        int id = 0;
        if (Convert.ToBoolean(Session["PreApproval"]) == true)
            id = 2;
        else
            id = 1;
        btnSaveExp.Attributes.Add("onclick", "javascript:return validateExpLineItem('" + id + "', '');");
        dvExpError.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
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
        AssignAttributesToBudgetFields();

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            if (hdnAccCode.Value == dsExpEditDetails.Rows[index]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
        }
        hdnExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(dsExpEditDetails.Rows[index]["preamount"])).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;
        GetExpItemData(dsExpEditDetails, index);
        ValidateMaxApprLimit();

        foreach (GridViewRow gvr in gvDrafts.Rows)
        {
            //Get a programmatic reference to the CheckBox control
            CheckBox cb = (CheckBox)gvr.FindControl("chkgvDft");
            ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
        }
        ddlEditExpType.Focus();
    }

    protected void btnSaveExp_Click(object sender, EventArgs e)
    {
        dvExpError.Visible = true;
        dvExpError.InnerHtml = string.Empty;
        int uID = 0;
        uID = Convert.ToInt32(Session["UserID"]);

        //Get Account Code from selected classification
        string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);

        dt = (DataTable)Session["dt"];
        DataTable dt_Temp = (DataTable)Session["dt_Temp"];
        if (Session["RctFileName"] != null || Session["dtSelDfts"] != null)
            str = UploadFiles(string.Empty, Convert.ToInt32(dt_Temp.Rows[0]["expLineNo"]));
        else
            str = "File exists";

        if (str != string.Empty || hdnCodeValue6.Value.ToLower() == "y" || hdnDftCnt.Value != null)
        {
            string pre = string.Empty;
            if (hdnPreType.Value == "1")
                pre = "GENERAL";
            else
                pre = ddlEditExpType.SelectedValue;

            int edFlag = 0;
            if (ddlEditExpType.SelectedItem.Text != dt_Temp.Rows[0]["expType"].ToString())
                edFlag = 1;
            else if (ddlClass.SelectedValue != dt_Temp.Rows[0]["classRefId"].ToString())
                edFlag = 1;
            else if (txtEditExpDate.Text != dt_Temp.Rows[0]["expDate"].ToString())
                edFlag = 1;
            else if (txtEditSalesTax.Text != dt_Temp.Rows[0]["taxAmount1"].ToString())
                edFlag = 1;
            else if (txtEditFoodTax.Text != dt_Temp.Rows[0]["taxAmount2"].ToString())
                edFlag = 1;
            else if (txtEditPreAmnt.Text != dt_Temp.Rows[0]["preAmount"].ToString())
                edFlag = 1;
            else if (txtEditActAmnt.Text != dt_Temp.Rows[0]["actualAmount"].ToString())
                edFlag = 1;
            else if (ddlEditPaymentType.Text != dt_Temp.Rows[0]["payMode"].ToString())
                edFlag = 1;
            else if (txtEditComments.Text != dt_Temp.Rows[0]["comments"].ToString())
                edFlag = 1;
            else if (dvEditCV.Style["display"] == "block")
            {
                if (txtCityVisited.Text != dt_Temp.Rows[0]["citiesVstd"].ToString())
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
                if (txtPrefVendor.Text != dt_Temp.Rows[0]["preferredVendor"].ToString())
                    edFlag = 1;
            }
            if (dvEditAgName.Style["display"] == "block")
            {
                if (txtEditAgentName.Text != dt_Temp.Rows[0]["agentName"].ToString())
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
            if (dvChkOutOfCity.Style["display"] == "block")
                if (chkIsOutOfCity.Checked != (dt_Temp.Rows[0]["outOfCity"].ToString() == "True" ? true : false))
                    edFlag = 1;
            if (dvLocalLocation.Style["display"] == "block")
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["otherPlace"].ToString())
                    edFlag = 1;
            if (dvEditCompCar.Style["display"] == "block")
                if (ddlCompCar.SelectedItem.Text != dt_Temp.Rows[0]["companyCar"].ToString())
                    edFlag = 1;
            if (str.ToLower() == "y")
                edFlag = 1;
            if (Session["AddFrmDrfts"] != null)
                edFlag = 1;
            if (edFlag == 1)
            {
                ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();
                expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
                expensedetails.expLineNo = Convert.ToInt32(hdnSeq1.Value);
                expensedetails.expItem = arr[1].Trim();
                expensedetails.expDate = txtEditExpDate.Text;
                if (dvEditCV.Style["display"] == "block")
                    expensedetails.citiesVstd = txtCityVisited.Text;
                else
                    expensedetails.citiesVstd = string.Empty;
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
                //server side calculation of Mileage reimbursed
                double amnt = 0;
                if (hdnCodeValue6.Value == "Y")
                {
                    if (hdnPreType.Value == "1")
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                    else
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
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
                    if (Convert.ToInt32(Session["IsMgrPreApproved"]) != 1)
                        expensedetails.preAmount = 0;
                    else
                        expensedetails.preAmount = ut.NullSafeDouble(txtEditPreAmnt.Text);
                }

                expensedetails.status = "Saved";
                expensedetails.statusId = 3;
                expensedetails.stateId = string.Empty;
                expensedetails.startDate = txtTripStartDate.Text;
                expensedetails.managerId = 0;
                expensedetails.amtSpent = 0;
                expensedetails.purpose = string.Empty;
                //if (dvEditAgName.Style["display"] == "block")
                //{
                //    if (ddlEditAgName.SelectedValue == "0")
                //        expensedetails.agentName = string.Empty;
                //    else
                expensedetails.agentName = txtEditAgentName.Text;
                //}
                //else
                //    expensedetails.agentName = string.Empty;
                expensedetails.bookedDate = string.Empty;
                expensedetails.detailsFlag = 1;
                expensedetails.masterFlag = 0;
                expensedetails.automileageFlag = 0;
                if (dvEditFromcity.Style["display"] == "block")
                    expensedetails.fromCity = txtFromCity.Text;
                else
                    expensedetails.fromCity = string.Empty;
                expensedetails.otherFromCity = string.Empty;
                if (dvEditToCity.Style["display"] == "block")
                    expensedetails.toCity = txtToCity.Text;
                else
                    expensedetails.toCity = string.Empty;
                expensedetails.otherToCity = string.Empty;
                if (dvEditVendor.Style["display"] == "block")
                    expensedetails.preferredVendor = txtPrefVendor.Text;
                else
                    expensedetails.preferredVendor = string.Empty;
                expensedetails.itinararyNo = txtEditItNo.Text;
                expensedetails.fromDate = txtEditFromdate.Text;
                expensedetails.toDate = txtEditTodate.Text;
                expensedetails.currency = string.Empty;
                expensedetails.exp = string.Empty;
                expensedetails.accountCode = arr[0].Trim();
                expensedetails.codeId = string.Empty;
                expensedetails.codeValue = string.Empty;
                expensedetails.managerEmail = string.Empty;
                expensedetails.managerId = 0;
                expensedetails.LNorm = ut.NullSafeDouble(txtEditLNorm.Text);
                expensedetails.totTrip = ut.NullSafeDouble(txtEditTotTrip.Text);
                expensedetails.reimbt = ut.NullSafeDouble(txtEditReimbt.Text);
                expensedetails.userId = uID;
                expensedetails.preApproved = (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2));
                expensedetails.companyCar = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                expensedetails.otherPlace = txtEditLocalLocation.Text;
                expensedetails.outOfCity = chkIsOutOfCity.Checked;
                expensedetails.unitPrice = 0;
                expensedetails.quantity = 0;
                expensedetails.packageUnit = string.Empty;
                expensedetails.balAfterPO = ut.NullSafeDouble(txtExpBalAfter.Text);
                expensedetails.taxAmount1 = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                expensedetails.taxAmount2 = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                expensedetails.taxAmount3 = 0;
                expensedetails.reimbursable = chkReimb.Checked == true ? "Y" : "N";
                expensedetails.taxCalculated = 0;
                expensedetails.polineseq = 0;
                expensedetails.csuserid = 0;
                expensedetails.taxPercent = 0;
                expensedetails.mgrGroupCode = string.Empty;
                expensedetails.itemCode = string.Empty;
                expensedetails.deptChgCmt = string.Empty;
                expensedetails.deptCode = Session["DepartmentCode"].ToString();
                expensedetails.discount = 0;
                expensedetails.discountFlag = string.Empty;
                expensedetails.promoCode = string.Empty;
                expensedetails.reqDeliveryDate = string.Empty;
                expensedetails.onBeHalfOf = string.Empty;
                expensedetails.lastUpdSource = "Web";
                expensedetails.addedOn = string.Empty;
                expensedetails.apReview = string.Empty;
                expensedetails.attCnt = 0;
                expensedetails.budget = 0;
                expensedetails.contactCnt = 0;
                expensedetails.expItemAccCode = ddlAccountCodes.SelectedItem.Text;
                expensedetails.invCnt = 0;
                expensedetails.invLineNo = 0;
                expensedetails.poAmount = 0;
                expensedetails.poInvAmount = 0;
                expensedetails.qtyReceived = 0;
                expensedetails.receiveCnt = 0;
                expensedetails.remaining = 0;
                expensedetails.budgetLimit = string.Empty;
                expensedetails.fiscalMonth = string.Empty;
                expensedetails.shippingCost = 0;
                expensedetails.vendPartno = string.Empty;
                expensedetails.vendorEmail = string.Empty;
                expensedetails.vendorFlag = string.Empty;
                expensedetails.qbAcctId = ut.NullSafeInteger(hdnQBAcctID.Value);
                expensedetails.qbVendId = ut.NullSafeInteger(hdnQBVendID.Value);
                expensedetails.qbItemId = 0;
                expensedetails.className = (ddlClass.SelectedValue == "0" ? string.Empty : ddlClass.SelectedItem.Text.Trim());
                expensedetails.classRefId = ddlClass.SelectedValue;
                expensedetails.sendtoqb = string.Empty;
                expensedetails.priceFlag = string.Empty;
                string retStr = xms.addExpense(expensedetails);

                if (retStr.ToLower().Contains("fail"))
                {
                    dvExpError.Style["color"] = "Red";
                    dvExpError.InnerHtml = retStr;
                    popup_Edit.Show();
                }
                else if (retStr.ToLower().Contains("succes"))
                {
                    dvError.Style["color"] = "Green";
                    dvError.InnerHtml = retStr;

                    int index = Convert.ToInt32(hdnRowIndex.Value);
                    if (pre == "GENERAL")
                    {
                        dt.Rows[index]["companyCar"] = dt_Temp.Rows[0]["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                        dt.Rows[index]["otherPlace"] = dt_Temp.Rows[0]["otherPlace"] = txtEditLocalLocation.Text;
                        dt.Rows[index]["outOfCity"] = dt_Temp.Rows[0]["outOfCity"] = chkIsOutOfCity.Checked ? "True" : "False";
                        dt.Rows[index]["JCatCode"] = dt_Temp.Rows[0]["JCatCode"] = string.Empty;
                        dt.Rows[index]["LNorm"] = dt_Temp.Rows[0]["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                        dt.Rows[index]["accountCode"] = dt_Temp.Rows[0]["accountCode"] = arr[0].Trim();
                        dt.Rows[index]["actualAmount"] = dt_Temp.Rows[0]["actualAmount"] = txtEditActAmnt.Text;
                        dt.Rows[index]["addedOn"] = dt_Temp.Rows[0]["addedOn"] = pre;
                        //if (dvEditAgName.Style["display"] == "block")
                        //{
                        //    if (ddlEditAgName.SelectedValue == "0")
                        //        dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        //    else
                        dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = txtEditAgentName.Text;
                        //}
                        //else
                        //    dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        dt.Rows[index]["amtSpent"] = dt_Temp.Rows[0]["amtSpent"] = 0;
                        dt.Rows[index]["apReview"] = dt_Temp.Rows[0]["apReview"] = string.Empty;
                        dt.Rows[index]["automileageFlag"] = dt_Temp.Rows[0]["automileageFlag"] = 0;
                        dt.Rows[index]["bookedDate"] = dt_Temp.Rows[0]["bookedDate"] = string.Empty;
                        dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                        if (dvEditCV.Style["display"] == "block")
                        {
                            if (txtCityVisited.Text == string.Empty)
                            {
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                                dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                            }
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = txtCityVisited.Text;
                        }
                        else
                        {
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                            dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                        }
                        dt.Rows[index]["codeId"] = dt_Temp.Rows[0]["codeId"] = string.Empty;
                        dt.Rows[index]["codeValue"] = dt_Temp.Rows[0]["codeValue"] = string.Empty;
                        dt.Rows[index]["comments"] = dt_Temp.Rows[0]["comments"] = txtEditComments.Text;
                        dt.Rows[index]["compCode"] = dt_Temp.Rows[0]["compCode"] = string.Empty;
                        dt.Rows[index]["currency"] = dt_Temp.Rows[0]["currency"] = string.Empty;
                        dt.Rows[index]["detailsFlag"] = dt_Temp.Rows[0]["detailsFlag"] = 1;
                        dt.Rows[index]["exp"] = dt_Temp.Rows[0]["exp"] = string.Empty;
                        dt.Rows[index]["expDate"] = dt_Temp.Rows[0]["expDate"] = txtEditExpDate.Text;
                        dt.Rows[index]["expItem"] = dt_Temp.Rows[0]["expItem"] = arr[1].Trim();
                        dt.Rows[index]["expLineNo"] = dt_Temp.Rows[0]["expLineNo"] = Convert.ToInt32(hdnSeq1.Value);
                        dt.Rows[index]["expType"] = dt_Temp.Rows[0]["expType"] = pre;
                        if (dvEditFromcity.Style["display"] == "block")
                        {
                            if (txtFromCity.Text == string.Empty)
                            {
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            }
                            else
                            {
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = txtFromCity.Text;
                                dt.Rows[index]["otherFromCity"] = dt_Temp.Rows[0]["otherFromCity"] = string.Empty;
                            }
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
                            if (txtPrefVendor.Text == string.Empty)
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                            else
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = txtPrefVendor.Text;
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
                        dt.Rows[index]["Reimbursable"] = dt_Temp.Rows[0]["Reimbursable"] == (chkReimb.Checked == true ? "Y" : "N");
                        if (dvEditToCity.Style["display"] == "block")
                        {
                            if (txtToCity.Text == string.Empty)
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            else
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = txtToCity.Text;
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
                        dt.Rows[index]["taxAmount1"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                        dt.Rows[index]["taxAmount2"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                    }
                    else
                    {
                        dt.Rows[index]["companyCar"] = dt_Temp.Rows[0]["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                        dt.Rows[index]["otherPlace"] = dt_Temp.Rows[0]["otherPlace"] = txtEditLocalLocation.Text;
                        dt.Rows[index]["outOfCity"] = dt_Temp.Rows[0]["outOfCity"] = chkIsOutOfCity.Checked ? "True" : "False";
                        dt.Rows[index]["JCatCode"] = dt_Temp.Rows[0]["JCatCode"] = ddlEditCategories.SelectedItem.Text;
                        dt.Rows[index]["LNorm"] = dt_Temp.Rows[0]["LNorm"] = ut.NullSafeInteger(txtEditLNorm.Text);
                        dt.Rows[index]["accountCode"] = dt_Temp.Rows[0]["accountCode"] = arr[0].Trim();
                        dt.Rows[index]["actualAmount"] = dt_Temp.Rows[0]["actualAmount"] = txtEditActAmnt.Text;
                        dt.Rows[index]["addedOn"] = dt_Temp.Rows[0]["addedOn"] = ddlEditExpType.SelectedValue;
                        //if (dvEditAgName.Style["display"] == "block")
                        //{
                        //    if (ddlEditAgName.SelectedValue == "0")
                        //        dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        //    else
                        dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = txtEditAgentName.Text;
                        //}
                        //else
                        //    dt.Rows[index]["agentName"] = dt_Temp.Rows[0]["agentName"] = string.Empty;
                        dt.Rows[index]["amtSpent"] = dt_Temp.Rows[0]["amtSpent"] = 0;
                        dt.Rows[index]["apReview"] = dt_Temp.Rows[0]["apReview"] = ddlEditJobs.SelectedValue;
                        dt.Rows[index]["automileageFlag"] = dt_Temp.Rows[0]["automileageFlag"] = 0;
                        dt.Rows[index]["bookedDate"] = dt_Temp.Rows[0]["bookedDate"] = string.Empty;
                        dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                        if (dvEditCV.Style["display"] == "block")
                        {
                            if (txtCityVisited.Text == string.Empty)
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                            else
                                dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = txtCityVisited.Text;
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                        }
                        else
                        {
                            dt.Rows[index]["otherCity"] = dt_Temp.Rows[0]["otherCity"] = string.Empty;
                            dt.Rows[index]["citiesVstd"] = dt_Temp.Rows[0]["citiesVstd"] = string.Empty;
                        }
                        dt.Rows[index]["codeId"] = dt_Temp.Rows[0]["codeId"] = ddlEditPhases.SelectedValue;
                        dt.Rows[index]["codeValue"] = dt_Temp.Rows[0]["codeValue"] = ddlEditCategories.SelectedValue;
                        dt.Rows[index]["comments"] = dt_Temp.Rows[0]["comments"] = txtEditComments.Text;
                        dt.Rows[index]["compCode"] = dt_Temp.Rows[0]["compCode"] = string.Empty;
                        dt.Rows[index]["currency"] = dt_Temp.Rows[0]["currency"] = string.Empty;
                        dt.Rows[index]["detailsFlag"] = dt_Temp.Rows[0]["detailsFlag"] = 1;
                        dt.Rows[index]["exp"] = dt_Temp.Rows[0]["exp"] = string.Empty;
                        dt.Rows[index]["expDate"] = dt_Temp.Rows[0]["expDate"] = txtEditExpDate.Text;
                        dt.Rows[index]["expItem"] = dt_Temp.Rows[0]["expItem"] = arr[1].Trim();
                        dt.Rows[index]["expLineNo"] = dt_Temp.Rows[0]["expLineNo"] = Convert.ToInt32(hdnSeq1.Value);
                        dt.Rows[index]["expType"] = dt_Temp.Rows[0]["expType"] = pre;
                        dt.Rows[index]["Reimbursable"] = dt_Temp.Rows[0]["Reimbursable"] == (chkReimb.Checked == true ? "Y" : "N");
                        if (dvEditFromcity.Style["display"] == "block")
                        {
                            if (txtFromCity.Text == string.Empty)
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = string.Empty;
                            else
                                dt.Rows[index]["fromCity"] = dt_Temp.Rows[0]["fromCity"] = txtFromCity.Text;
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
                            if (txtPrefVendor.Text == string.Empty)
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = string.Empty;
                            else
                                dt.Rows[index]["preferredVendor"] = dt_Temp.Rows[0]["preferredVendor"] = txtPrefVendor.Text;
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
                            if (txtToCity.Text == string.Empty)
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = string.Empty;
                            else
                                dt.Rows[index]["toCity"] = dt_Temp.Rows[0]["toCity"] = txtToCity.Text;
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
                        dt.Rows[index]["taxAmount1"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                        dt.Rows[index]["taxAmount2"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                    }
                    dt.AcceptChanges();
                    GetData();
                    Session.Remove("dsSt");
                    Session.Remove("dtSelDfts");
                    if (Convert.ToInt32(dt.Rows[index]["attCnt"]) > 0)
                    {
                        LnkcurrAttachments.Style["display"] = "block";
                        lblEAttMsg.Style["display"] = "none";
                        lblEAttMsg.Text = string.Empty;
                    }
                    else
                    {
                        LnkcurrAttachments.Style["display"] = "none";
                        lblEAttMsg.Style["display"] = "block";
                        lblEAttMsg.Text = "<div class='message info' style='padding:5px'>No attachments to display.</div>";
                    }
                    SortGrid();
                    LoadEditData(null);
                    BindOnBehalfOfList();
                    popup_Edit.Hide();
                }
                else
                {
                    dvExpError.Style["color"] = "Red";
                    dvExpError.InnerHtml = "An error occurred while processing the request. Please try again.";
                    popup_Edit.Show();
                }
            }
            else
            {
                dvExpError.Style["color"] = "Red";
                dvExpError.InnerHtml = "No changes to update!";
                popup_Edit.Show();
            }
            CalculateTotals();
        }
        else
        {
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 2MB";
            popup_Edit.Show();
        }
        popup.Show();
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        if (gvExp.Rows.Count > 1)
        {
            BindData();
            CalculateTotals();
            Session["popup"] = "true";
            popup.Show();
            popAlert.Show();
            popup_Edit.Hide();
        }
        else
        {
            dvExpError.InnerHtml = "You cannot delete this line as the current expense contains only one line.";
            dvExpError.Style["color"] = "Red";
            popup.Show();
            popup_Edit.Show();
        }
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        if (Session["AddFrmDrfts"] != null)
        {
            if (Session["AddFrmDrfts"].ToString() == "1" && Session["AddedFlag"].ToString() == "1")
            {
                popAlertDrftDel.Show();
                popup_Edit.Show();
            }
            else
            {
                popAlertDrftDel.Hide();
                popup_Edit.Hide();
            }
        }
        CalculateTotals();
        BindOnBehalfOfList();
        hdnisExpLineDisplayed.Value = "N";
        popup.Show();
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

        btnExpLineHistoryView.Visible = true;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
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
        hdnisExpLineDisplayed.Value = "N";
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
        Session["AttCnt"] = dsExpEditDetails.Rows[index]["attCnt"].ToString();
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
        Session["AttCnt"] = dsExpEditDetails.Rows[index]["attCnt"].ToString();
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
        Session["AttCnt"] = dsExpEditDetails.Rows[index]["attCnt"].ToString();
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
        Session["AttCnt"] = dsExpEditDetails.Rows[index]["attCnt"].ToString();
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

    private void GetExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockFields();
        dvError.InnerHtml = string.Empty;
        dvExpError.InnerHtml = string.Empty;
        dvExpError1.InnerHtml = string.Empty;
        if (dsExpEditDetails.Rows.Count > 0)
        {
            if (Session["dsCodes"] == null)
                BindExpData();

            DataTable dtCodes = (DataTable)Session["dsCodes"];

            GetAccountCodeByExpenseItem();
            DataTable dtAcc = (DataTable)Session["AccountCodes"];
            DataView dvAcc = new DataView(dtAcc, "TRIM(AccountCode) = '" + dsExpEditDetails.Rows[index]["AccountCode"].ToString() + "'", "AccountCode", DataViewRowState.CurrentRows);
            ddlAccountCodes.SelectedValue = dvAcc.ToTable().Rows[0]["expCode"].ToString();
            GetClassificationAttributes();

            string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            //string expHdnItem = "description='" + lblVExpCd.Text + "'";
            string expHdnItem = "description='" + arr[1].Trim() + "' and CodeID LIKE '%EXPITEMSECTION%'";
            DataView viewExpItem1 = new DataView(dtCodes, expHdnItem, "CODEID", DataViewRowState.CurrentRows);
            dt = viewExpItem1.ToTable();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();
            //hdnExpItem.Value = ddlAccountCodes.SelectedValue;

            //Classes
            GetClasses();
            if (dsExpEditDetails.Rows[index]["classRefId"].ToString().Trim() != string.Empty)
                ddlClass.SelectedValue = dsExpEditDetails.Rows[index]["classRefId"].ToString();
            //Classes

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

            //ExpenseTypes
            string exprExpType = "CodeID='EXPTYPE'";
            DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
            ddlEditExpType.DataSource = viewExpType;
            ddlEditExpType.DataBind();
            ddlEditExpType.Items.Insert(0, "Please Select");
            ddlEditExpType.Items.FindByText("Please Select").Value = "0";
            ddlEditExpType.SelectedValue = dsExpEditDetails.Rows[index]["expType"].ToString();

            string exprPPM = "CodeID = 'PPM'";
            DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
            hdnPPM.Value = viewPPM[1]["CodeValue1"].ToString();
            hdnCPM.Value = viewPPM[0]["CodeValue1"].ToString();
            hdnCmpCar.Value = viewPPM[0]["CodeValue2"].ToString();

            //CompCar
            ddlCompCar.DataSource = viewPPM;
            ddlCompCar.DataTextField = "CodeValue2";
            ddlCompCar.DataValueField = "CodeValue2";
            ddlCompCar.DataBind();

            //Food Tax
            string exprFt = "CodeID = 'FOODTAX'";
            DataView viewFT = new DataView(dtCodes, exprFt, "CODEID", DataViewRowState.CurrentRows);
            hdnFoodTax.Value = string.IsNullOrEmpty(viewFT[0]["CodeKey"].ToString()) ? "0" : viewFT[0]["CodeKey"].ToString();

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

            string city = string.Empty;
            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = new DataTable();
            Session["TestVIewExp1"] = "1";
            if (viewSec != null)
            {
                Session.Remove("TestVIewExp1");
                dtSec = viewSec.ToTable();

                Session["Sectiondt"] = viewSec;
                DataView view = (DataView)Session["Sectiondt"];

                if (view != null)
                {
                    Session.Remove("TestExp1");
                    DataTable dtTempCode = view.ToTable();
                    if (dtTempCode.Rows[1]["CodeValue1"].ToString() == "Y")
                        hdnCodeValue6.Value = dtTempCode.Rows[1]["CodeValue1"].ToString();
                }
                //Display fields Begin
                //depending on the values fetched from database for a selected ExpenseItem
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
                        txtCityVisited.Text = string.Empty;
                    else
                    {
                        txtCityVisited.Text = dsExpEditDetails.Rows[index]["citiesVstd"].ToString();
                        city = txtCityVisited.Text;
                    }
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
                        txtFromCity.Text = string.Empty;
                    else
                    {
                        txtFromCity.Text = dsExpEditDetails.Rows[index]["fromCity"].ToString();
                        city = txtFromCity.Text;
                    }

                    //Assign values to ToCity field
                    if (dsExpEditDetails.Rows[index]["toCity"].ToString() == string.Empty)
                        txtToCity.Text = string.Empty;
                    else
                        txtToCity.Text = dsExpEditDetails.Rows[index]["toCity"].ToString();
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
                    dvEditCompCar.Style["display"] = "block";
                    dvEditSalesTax.Style["display"] = "none";
                    dvLocalLocation.Style["display"] = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "True" ? "block" : "none";
                    chkIsOutOfCity.Checked = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "True" ? true : false;
                    txtEditLocalLocation.Text = dsExpEditDetails.Rows[index]["otherPlace"].ToString();
                    ddlCompCar.SelectedValue = dsExpEditDetails.Rows[index]["companyCar"].ToString();
                    txtEditTotTrip.Text = dsExpEditDetails.Rows[index]["TotTrip"].ToString();
                    txtEditLNorm.Text = dsExpEditDetails.Rows[index]["LNorm"].ToString();
                    txtEditReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                    txtEditActAmnt.ReadOnly = true;
                    txtEditPreAmnt.ReadOnly = true;
                    dvChkOutOfCity.Style["display"] = "block";
                    if (chkIsOutOfCity.Checked)
                    {
                        dvEditToCity.Style["display"] = "block";
                        dvLocalLocation.Style["display"] = "none";
                    }
                    else
                    {
                        dvEditToCity.Style["display"] = "none";
                        dvLocalLocation.Style["display"] = "block";
                    }
                    hdnCodeValue6.Value = dtSec.Rows[1]["CodeValue1"].ToString();
                }
                else
                {
                    dvEditTT.Style["display"] = "none";
                    dvEditLN.Style["display"] = "none";
                    dvEditCompCar.Style["display"] = "none";
                    dvEditSalesTax.Style["display"] = "block";
                    txtEditActAmnt.ReadOnly = false;
                    txtEditPreAmnt.ReadOnly = false;
                    hdnCodeValue6.Value = string.Empty;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    BindVendors(string.Empty, txtPrefVendor.Text, city);
                    DataTable dsVendors = (DataTable)Session["PreferredVendorList"];
                    if (dsVendors.Rows.Count >= 1)
                    {
                        dvEditVendor.Style["display"] = "block";
                        dvEditAgName.Style["display"] = "block";
                        dvEditItNo.Style["display"] = "block";
                        if (dsExpEditDetails.Rows[index]["preferredVendor"].ToString() == string.Empty)
                            txtPrefVendor.Text = string.Empty;
                        else
                        {
                            txtPrefVendor.Text = dsExpEditDetails.Rows[index]["preferredVendor"].ToString();
                            //get AB vendor id
                            DataTable dt1 = (DataTable)Session["PreferredVendorList"];
                            string exp = "PreferredVendor like '%" + txtPrefVendor.Text.Replace("'", "''") + "%'";
                            DataView dtv = new DataView(dt1, exp, "PreferredVendor", DataViewRowState.CurrentRows);
                            hdnQBVendID.Value = dtv.ToTable().Rows[0]["qbVendId"].ToString();
                        }
                        //if (dsExpEditDetails.Rows[index]["agentName"].ToString() == string.Empty)
                        //    ddlEditAgName.SelectedValue = "0";
                        //else
                        //    ddlEditAgName.SelectedValue = dsExpEditDetails.Rows[index]["agentName"].ToString();
                        txtEditAgentName.Text = dsExpEditDetails.Rows[index]["agentName"].ToString();
                        hdnCodeValue1.Value = "Y";
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
                    hdnCodeValue1.Value = string.Empty;
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditED.Style["display"] = "block";
                txtEditExpDate.Text = dsExpEditDetails.Rows[index]["ExpDate"].ToString();
                dvEditCV.Style["display"] = "block";
                txtCityVisited.Text = dsExpEditDetails.Rows[index]["CitiesVstd"].ToString();
                hdnCodeValue2.Value = "Y";
                hdnCodeValue4.Value = "Y";
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditED.Style["display"] = "none";
                dvEditCV.Style["display"] = "none";
                hdnCodeValue2.Value = string.Empty;
                hdnCodeValue4.Value = string.Empty;
            }
            //Display fields End

            hdnAcc.Value = dsExpEditDetails.Rows[index]["accountCode"].ToString();
            txtEditSalesTax.Text = dsExpEditDetails.Rows[index]["taxAmount1"].ToString();
            txtEditFoodTax.Text = dsExpEditDetails.Rows[index]["taxAmount2"].ToString();
            txtEditPreAmnt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();
            txtEditActAmnt.Text = dsExpEditDetails.Rows[index]["actualAmount"].ToString();
            txtEditComments.Text = dsExpEditDetails.Rows[index]["comments"].ToString();
            chkReimb.Checked = dsExpEditDetails.Rows[index]["Reimbursable"].ToString() == "Y" ? true : false;

            GetBudgetData();

            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LnkcurrAttachments.Style["display"] = "block";
                //lblEditAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq1.Value));
                lblEAttMsg.Style["display"] = "none";
                lblEAttMsg.Text = string.Empty;
            }
            else
            {
                LnkcurrAttachments.Style["display"] = "none";
                lblEAttMsg.Style["display"] = "block";
                lblEAttMsg.Text = "<div class='message info' style='padding:5px'>No attachments to display.</div>";
            }

            BindDrafts();
            if (gvDrafts.Rows.Count > 0)
                lnkShowDraft.Style["display"] = "block";
            else
                lnkShowDraft.Style["display"] = "none";

            DivEdit.Visible = true;
            DivView.Visible = false;
            hdnisExpLineDisplayed.Value = "Y";
            popup_Edit.Show();
            popup.Hide();
        }
    }

    private void GetViewExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockViewFields();
        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataTable dsCodes = new DataTable();
            DataTable dtCodes = new DataTable();
            if (Session["dsCodes"] == null)
                BindExpData();

            dsCodes = (DataTable)Session["dsCodes"];
            dtCodes = dsCodes;

            DataSet dsItems = new DataSet();
            dsItems = (DataSet)Session["dsItems"];

            //lblVExpCd.Text = dsExpEditDetails.Rows[index]["expItem"].ToString();
            //txtVAccCode.Text = dsExpEditDetails.Rows[index]["expItemAccCode"].ToString();
            txtVAccCode.Text = dsExpEditDetails.Rows[index]["AccountCode"].ToString() + "--" + dsExpEditDetails.Rows[index]["expItem"].ToString();
            //string[] arr = txtVAccCode.Text.Split('-');
            //string expHdnItem = "description='" + lblVExpCd.Text + "'";
            string expHdnItem = "description='" + dsExpEditDetails.Rows[index]["expItem"].ToString().Trim() + "' and CodeID LIKE '%EXPITEMSECTION%'";
            DataView viewExpItem1 = new DataView(dtCodes, expHdnItem, "CODEID", DataViewRowState.CurrentRows);
            dt = viewExpItem1.ToTable();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();

            //class
            txtVClass.Text = dsExpEditDetails.Rows[index]["className"].ToString();

            if (hdnPreType.Value != "1")
            {
                dvEditVPA.Style["display"] = "none";
                dvEditVAmt.Style["display"] = "block";
            }
            else
            {

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

            lblVDate.Text = dsExpEditDetails.Rows[index]["expDate"].ToString();

            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = new DataTable();
            Session["TestViewExp1"] = "1";
            if (viewSec != null)
            {
                Session.Remove("TestViewExp1");
                dtSec = viewSec.ToTable();
                Session["Sectiondt"] = viewSec;
                DataView view = (DataView)Session["Sectiondt"];

                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVDate.Text = dsExpEditDetails.Rows[index]["expDate"].ToString();
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

                }
                else
                    dvEditVCV.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVFromcity.Style["display"] = "block";
                    dvEditVToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVFromcity.Text = dsExpEditDetails.Rows[index]["FromCity"].ToString();

                    //Assign values to ToCity field
                    lblVTocity.Text = dsExpEditDetails.Rows[index]["ToCity"].ToString();

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
                    //dvEditVAmt.Style["display"] = "block";
                    dvVEditCompCar.Style["display"] = "block";
                    dvEditVSalesTax.Style["display"] = "none";
                    dvVLocalLocation.Style["display"] = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "True" ? "block" : "none";
                    chkVIsOutOfCity.Checked = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "True" ? true : false;
                    chkVIsOutOfCity.Enabled = false;
                    lblEditLocalLocation.Text = dsExpEditDetails.Rows[index]["otherPlace"].ToString();
                    lblVCompCar.SelectedValue = dsExpEditDetails.Rows[index]["companyCar"].ToString();
                    lblVTotTrip.Text = dsExpEditDetails.Rows[index]["TotTrip"].ToString();
                    lblVLNorm.Text = dsExpEditDetails.Rows[index]["LNorm"].ToString();
                    lblVReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                    lblVActAmt.ReadOnly = true;
                    lblVPreAmt.ReadOnly = true;
                    dvVChkOutOfCity.Style["display"] = "block";
                    if (chkIsOutOfCity.Checked)
                    {
                        dvEditVToCity.Style["display"] = "block";
                        dvVLocalLocation.Style["display"] = "none";
                    }
                    else
                    {
                        dvEditVToCity.Style["display"] = "none";
                        dvVLocalLocation.Style["display"] = "block";
                    }
                }
                else
                {
                    dvEditVTT.Style["display"] = "none";
                    dvEditVLN.Style["display"] = "none";
                    dvVEditCompCar.Style["display"] = "none";
                    //dvEditVAmt.Style["display"] = "none";
                    dvEditVSalesTax.Style["display"] = "block";
                    lblVActAmt.ReadOnly = false;
                    lblVPreAmt.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    lblVPreVendor.Text = dsExpEditDetails.Rows[index]["preferredVendor"].ToString();
                    //if (lblVPreVendor.Text != "" || lblVPreVendor.Text != string.Empty)
                    //{
                    dvEditVPreVendor.Style["display"] = "block";
                    dvEditVAgName.Style["display"] = "block";
                    lblAgName.Text = dsExpEditDetails.Rows[index]["AgentName"].ToString();
                    //}
                    //else
                    //{
                    //    dvEditVPreVendor.Style["display"] = "none";
                    //    dvEditVAgName.Style["display"] = "none";
                    //}
                    //if (lblVPreVendor.Text != "" || lblVPreVendor.Text != string.Empty)
                    //{
                    dvEditVItNo.Style["display"] = "block";
                    lblVItNo.Text = dsExpEditDetails.Rows[index]["ItinararyNo"].ToString();
                    //}
                    //else
                    //    dvEditVItNo.Style["display"] = "none";
                }
                else
                {
                    dvEditVPreVendor.Style["display"] = "none";
                    dvEditVAgName.Style["display"] = "none";
                    dvEditVItNo.Style["display"] = "none";
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditVED.Style["display"] = "block";
                lblVDate.Text = dsExpEditDetails.Rows[index]["ExpDate"].ToString();
                dvEditVCV.Style["display"] = "block";
                lblVCity.Text = dsExpEditDetails.Rows[index]["CitiesVstd"].ToString();
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditED.Style["display"] = "none";
                dvEditCV.Style["display"] = "none";
            }

            lblVSalesTax.Text = dsExpEditDetails.Rows[index]["taxAmount1"].ToString();
            lblVFoodTax.Text = dsExpEditDetails.Rows[index]["taxAmount2"].ToString();
            lblVActAmt.Text = dsExpEditDetails.Rows[index]["actualAmount"].ToString();
            lblVPreAmt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();

            lblVPayMode.Text = dsExpEditDetails.Rows[index]["payMode"].ToString();
            lblVCity.Text = dsExpEditDetails.Rows[index]["citiesVstd"].ToString();

            lblVcomnts.Text = dsExpEditDetails.Rows[index]["comments"].ToString();
            chkVReimb.Checked = dsExpEditDetails.Rows[index]["Reimbursable"].ToString() == "Y" ? true : false;
            GetViewBudgetData(dsExpEditDetails.Rows[index]["accountCode"].ToString());

            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LinkViewAttachments.Style["display"] = "block";
                //lblViewAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq1.Value));
                lblAttMsg.Style["display"] = "none";
                lblAttMsg.Text = string.Empty;
            }
            else
            {
                LinkViewAttachments.Style["display"] = "none";
                lblAttMsg.Style["display"] = "block";
                lblAttMsg.Text = "<div class='message info' style='padding:5px'>No attachments to display.</div>";
            }

            DivEdit.Visible = false;
            DivView.Visible = true;
            hdnisExpLineDisplayed.Value = "Y";
            popup_Edit.Show();
            //popup.Show();
        }
    }

    #endregion

    #region Credit card Transactions

    string str = string.Empty;
    DataSet ds = new DataSet();
    bool isEmpty = true;

    protected void UploadCCT(object sender, EventArgs e)
    {
        btnImport.Visible = false;
        ClearFields();
        CalculateTotals();
        popup.Show();
        popup_CC.Show();
    }

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        Session.Remove("dataset");
        Session.Remove("colmod");
        string filename = Session["ReqID"] + "_" + Session["OrgID"] + "_" + fUpdCC.FileName;
        string path = Server.MapPath(newPath) + "\\" + filename;
        if (Path.GetExtension(path).ToLower() == ".qif")
        {
            fUpdCC.SaveAs(path);
            var pq = new QIFParser(path, QIFParserBase.LoadOptions.Transactions);
            ds = (DataSet)Session["dataset"];
            ValidateCCData(ds, path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else if (Path.GetExtension(path).ToLower() == ".csv")
        {
            fUpdCC.SaveAs(path);
            DataTable dt = readCSV(path);
            ds.Tables.Add(dt);
            Session["dataset"] = ds;
            ValidateCCData(ds, path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else if (Path.GetExtension(path).ToLower() == ".qbt")
        {
            fUpdCC.SaveAs(path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else
        {
            dvErrCC.InnerHtml = "Please upload a file of type .QIF, .CSV or .QBT!";
            popup_CC.Show();
        }
        CalculateTotals();
        popup.Show();
    }

    private void ValidateCCData(DataSet ds, string path)
    {
        //Remove empty rows in the dataset

        if (ds != null)
        {
            for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            {
                isEmpty = true;
                for (int j = 0; j < ds.Tables[0].Columns.Count; j++)
                {
                    if (string.IsNullOrEmpty(ds.Tables[0].Rows[i][j].ToString()) == false)
                    {
                        isEmpty = false;
                        break;
                    }
                }
                if (isEmpty == true)
                {
                    ds.Tables[0].Rows.RemoveAt(i);
                    i--;
                }
            }
            BindGridData(ds);
            foreach (GridViewRow gvr in gvCC.Rows)
            {
                //Get a programmatic reference to the CheckBox control
                CheckBox cb = (CheckBox)gvr.FindControl("chkgvQIF");

                ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
            }
            System.IO.File.Delete(path);
        }
        else
        {
            dvErrCC.InnerHtml = "Please upload a valid file!";
            popup_CC.Show();
        }
    }

    private void BindGridData(DataSet ds)
    {
        gvCC.Visible = true;
        gvCC.DataSource = ds;
        gvCC.DataBind();
        DataSet dsCodes = new DataSet();
        DataTable dtCodes = new DataTable();
        DataTable dtCodes1 = new DataTable();
        DataSet dsCodes1 = new DataSet();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
            DataTable dtTable = dsCodes1.Tables[0];
            DataView dtview = new DataView(dtTable);
            dtview.Sort = "CodeID ASC";
            dtCodes1 = dtview.ToTable();
            Session["dsCodes"] = dtCodes1;
        }
        else
            dtCodes1 = (DataTable)Session["dsCodes"];

        //dtCodes = dtCodes1;
        //string exprExpItem = "CodeID='EXPITEM'";
        //DataView viewExpItem = new DataView(dtCodes, exprExpItem, "CODEID", DataViewRowState.CurrentRows);

        //foreach (GridViewRow row in gvCC.Rows)
        //{
        //    DropDownList ddlCCExpItems = (DropDownList)row.FindControl("ddlCCExpItems");
        //    ddlCCExpItems.DataSource = viewExpItem;
        //    ddlCCExpItems.DataBind();
        //    ddlCCExpItems.Items.Insert(0, "Please Select");
        //    ddlCCExpItems.Items.FindByText("Please Select").Value = "0";
        //}

        btnImport.Visible = true;
        popup_CC.Show();
    }

    protected void gvCC_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvCC.PageIndex = e.NewPageIndex;
        BindGridData((DataSet)Session["dataset"]);
    }

    protected void gvCC_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox childchk = (CheckBox)e.Row.FindControl("chkgvQIF");
            childchk.Attributes.Add("onclick", "javascript:ChangeHeaderAsNeeded()");

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnImport_Click(object sender, EventArgs e)
    {
        int x = 0;
        DataSet ds = (DataSet)Session["dataset"];

        if (Session["colmod"] == null)
        {
            ds.Tables[0].Columns["Posted Date"].ColumnName = "ExpenseDate";
            ds.Tables[0].Columns["Amount"].ColumnName = "ActualAmount";
            Session["colmod"] = 1;
        }

        foreach (GridViewRow row in gvCC.Rows)
        {
            CheckBox chkgvQIF = (CheckBox)row.FindControl("chkgvQIF");
            DropDownList ddlCCExpItems = (DropDownList)row.FindControl("ddlCCExpItems");
            Label lblCodeID = (Label)row.FindControl("lblCodeID");

            if (chkgvQIF.Checked == true)
            {
                if (ddlCCExpItems.SelectedIndex == 0)
                {
                    dvErrCC.InnerHtml = "Please select Expense item for selected transactions!";
                    ddlCCExpItems.Focus();
                    x = 0;
                }
                else
                {
                    int seqId = GetSeqId();

                    ExpeseDetailsVO expenseDetails = new ExpeseDetailsVO();
                    expenseDetails.citiesVstd = string.Empty;
                    expenseDetails.comments = string.Empty;
                    expenseDetails.compCode = Session["CompCode"].ToString();
                    expenseDetails.expDate = Convert.ToDateTime(ds.Tables[0].Rows[row.RowIndex]["ExpenseDate"]).ToShortDateString();
                    expenseDetails.expItem = ddlCCExpItems.SelectedItem.Text;
                    expenseDetails.expLineNo = seqId;
                    expenseDetails.expType = "GENERAL";
                    expenseDetails.orgId = Convert.ToInt32(Session["OrgID"]);
                    expenseDetails.reqId = Convert.ToInt32(Session["ReqID"]);
                    expenseDetails.amtSpent = Convert.ToDouble(ds.Tables[0].Rows[row.RowIndex]["ActualAmount"]);
                    expenseDetails.JCatCode = string.Empty;
                    expenseDetails.jobCode = string.Empty;
                    expenseDetails.phaseCode = string.Empty;
                    xms.addExpDetails_Temp(expenseDetails);

                    if (Session["dt"] != null)
                        dt = (DataTable)Session["dt"];

                    dr = dt.NewRow();
                    dr["JCatCode"] = string.Empty;
                    dr["LNorm"] = 0;
                    dr["accountCode"] = lblCodeID.Text;
                    dr["actualAmount"] = ds.Tables[0].Rows[row.RowIndex]["ActualAmount"].ToString();
                    dr["addedOn"] = "GENERAL";
                    dr["agentName"] = string.Empty;
                    dr["amtSpent"] = 0;
                    dr["apReview"] = string.Empty;
                    dr["automileageFlag"] = 0;
                    dr["bookedDate"] = string.Empty;
                    dr["otherCity"] = string.Empty;
                    dr["citiesVstd"] = string.Empty;
                    dr["codeId"] = string.Empty;
                    dr["codeValue"] = string.Empty;
                    dr["comments"] = string.Empty;
                    dr["compCode"] = Session["CompCode"].ToString();
                    dr["currency"] = string.Empty;
                    dr["detailsFlag"] = 0;
                    dr["exp"] = string.Empty;
                    dr["expDate"] = Convert.ToDateTime(ds.Tables[0].Rows[row.RowIndex]["ExpenseDate"]).ToShortDateString();
                    dr["expItem"] = ddlCCExpItems.SelectedItem.Text;
                    dr["expLineNo"] = seqId;
                    dr["expType"] = "GENERAL";
                    dr["fromCity"] = string.Empty;
                    dr["fromDate"] = string.Empty;
                    dr["itinararyNo"] = string.Empty;
                    dr["jobCode"] = string.Empty;
                    dr["managerEmail"] = string.Empty;
                    dr["managerId"] = 0;
                    dr["masterFlag"] = 0;
                    dr["orgId"] = Convert.ToInt32(Session["OrgID"]);
                    dr["payMode"] = string.Empty;
                    dr["phaseCode"] = string.Empty;
                    dr["preAmount"] = Convert.ToInt32(Session["ReqID"]);
                    dr["preApproved"] = Convert.ToBoolean(Session["PreApproval"]);
                    dr["preferredVendor"] = string.Empty;
                    dr["purpose"] = string.Empty;
                    dr["reimbt"] = 0;
                    dr["reqId"] = Convert.ToInt32(Session["ReqID"]);
                    dr["startDate"] = string.Empty;
                    dr["stateId"] = string.Empty;
                    dr["status"] = string.Empty;
                    dr["statusId"] = 0;
                    dr["toCity"] = string.Empty;
                    dr["toDate"] = string.Empty;
                    dr["totTrip"] = 0;
                    dr["userId"] = 0;
                    dt.Rows.Add(dr);
                    dt.AcceptChanges();
                    x++;
                }
            }
        }
        if (x == 0)
        {
            popup_CC.Show();
        }
        else
        {
            Session["dt"] = dt;
            this.GetData();
            gvCC.DataSource = null;
            gvCC.DataBind();
            popup_CC.Hide();
            //lnkCCT.Visible = false;
            ClearFields();
            CalculateTotals();
            btnSubmit.Visible = true;
            btnSave.Visible = true;
            ddlEditJobs.Items.Clear();
            ddlEditPhases.Items.Clear();
            ddlEditCategories.Items.Clear();
            dvEditJob.Style["display"] = "none";
            dvEditPhs.Style["display"] = "none";
            dvEditJC.Style["display"] = "none";
        }
        CalculateTotals();
        popup.Show();
    }

    protected void btnCCClose_Click(object sender, EventArgs e)
    {
        popup.Show();
        popup_CC.Hide();
    }

    protected void ddlCCExpItems_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        GridViewRow row = (GridViewRow)ddl.NamingContainer;
        Label lblCodeID = (Label)row.FindControl("lblCodeID");

        DataSet dsCodes = new DataSet();
        DataTable dtCodes = new DataTable();
        DataTable dtCodes1 = new DataTable();
        DataSet dsCodes1 = new DataSet();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
            DataTable dtTable = dsCodes1.Tables[0];
            DataView dtview = new DataView(dtTable);
            dtview.Sort = "CodeID ASC";
            dtCodes1 = dtview.ToTable();
            Session["dsCodes"] = dtCodes1;

        }
        else
            dtCodes1 = (DataTable)Session["dsCodes"];

        dtCodes = dtCodes1;

        string expr = "CodeID = 'EXPITEM' and Description = '" + ddl.SelectedItem.Text + "'";
        DataView view = new DataView(dsCodes.Tables[0], expr, "CodeValue1", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        lblCodeID.Text = dt.Rows[0]["CodeValue1"].ToString();
        popup_CC.Show();
        popup.Show();
    }

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
                // oWrite_Vendor.WriteLine(date + "\t" + action + "\t" + purpose + "\t" + place + "\t" + amount);
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

            //   Utils.WriteLine(ticker + "\t" + name + "\t" + type);
        }

        protected override void AddTransaction(DateTime date, string action, string companyName, double price, double shares, double amount, double notKnownT, double commission, string comment)
        {

            if (!nameToTicker.ContainsKey(companyName))
                Utils.Exception("Reading transactions, There is no ticker for " + companyName);

            //  Utils.WriteLine(date + "\t" + action + "\t" + companyName + "\t" + price + "\t" + shares + "\t" + amount + "\t" + commission + "\t" + comment);
        }

        protected override void AddPrice(DateTime date, string ticker, double price)
        {

            if (!nameToTicker.ContainsValue(ticker))
                Utils.Exception("Reading prices, There is not company for " + ticker);
            //Utils.WriteLine(date + "\t" + ticker + "\t" + price);
        }
    }

    static class Utils
    {
        //public static void WriteLine(string s)
        //{
        //    StreamWriter oWrite_Vendor = new StreamWriter(@"D:\RajeshVemunooriDir\MyProjects\ExpenseReports\ReadQBTFile\NewTextDocument.txt");
        //    oWrite_Vendor.WriteLine(s);
        //    oWrite_Vendor.Close();
        //    //Console.WriteLine(s);
        //}

        public static void Exception(string s)
        {
            Console.WriteLine(s.ToUpper());
            //throw new Exception(s);
        }
    }

    #endregion

    #region CSV

    private static DataTable readCSV(string filename)
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

    #region QBT

    #endregion

    #endregion

    #region RequestHistory

    protected void ShowHistory(object sender, EventArgs e)
    {
        TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
        GetRequestHistory();
        //DataTable dt = new DataTable();
        //DataRow dr;
        //dt.Columns.Add("Date");
        //dt.Columns.Add("Details");
        //dt.Columns.Add("Manager");
        //dt.Columns.Add("ColType");
        //for (int i = 0; i < dsHist.Tables[0].Rows.Count; i++)
        //{
        //    dr = dt.NewRow();
        //    dr["Date"] = dsHist.Tables[0].Rows[i]["UpdatedOn"];
        //    dr["Manager"] = dsHist.Tables[0].Rows[i]["Manager"];

        //    //convert column type to camel case
        //    dsHist.Tables[0].Rows[i]["colType"] = textInfo.ToTitleCase(dsHist.Tables[0].Rows[i]["colType"].ToString().ToLower());
        //    //convert column type to camel case

        //    dr["ColType"] = dsHist.Tables[0].Rows[i]["ColType"];
        //    if (dr["ColType"].ToString().ToLower().Contains("status"))
        //    {
        //        if (string.IsNullOrEmpty(dsHist.Tables[0].Rows[i]["OldStatus"].ToString()) && string.IsNullOrEmpty(dsHist.Tables[0].Rows[i]["NStatus"].ToString()))
        //            dr["Details"] = dsHist.Tables[0].Rows[i]["MgrEmail"];
        //        else if (dsHist.Tables[0].Rows[i]["OldStatus"].ToString() != string.Empty)
        //            dr["Details"] = "<i>Request</i> Changed from <b>" + dsHist.Tables[0].Rows[i]["OldStatus"] + "</b> to <b>" + dsHist.Tables[0].Rows[i]["NStatus"] + "</b> by " + dsHist.Tables[0].Rows[i]["EmpId"];
        //        else
        //            dr["Details"] = "<i>Request</i> has been placed and is under <b>" + dsHist.Tables[0].Rows[i]["NStatus"] + "</b> status";
        //    }
        //    else if (dr["colType"].ToString().ToLower().Contains("payable to"))
        //    {
        //        if (!string.IsNullOrEmpty(dsHist.Tables[0].Rows[i]["OldStatus"].ToString()))
        //            dr["Details"] = "<i>" + dsHist.Tables[0].Rows[i]["ColType"].ToString() + "</i> updated from <b>" + dsHist.Tables[0].Rows[i]["OldStatus"].ToString() +
        //                "</b> to <b>" + dsHist.Tables[0].Rows[i]["NStatus"].ToString() + "</b>";
        //        else
        //            dr["Details"] = "<i>" + dsHist.Tables[0].Rows[i]["ColType"].ToString() + "</i> updated to <b>" + dsHist.Tables[0].Rows[i]["NStatus"].ToString() + "</b>";
        //    }
        //    dt.Rows.Add(dr);
        //}
    }

    protected void SortReqMastHistExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ReqMastHist"] = lnk.ID;

        if (Session["SortDir_ReqMastHist"] == null || Session["SortDir_ReqMastHist"].ToString() == "Desc")
            Session["SortDir_ReqMastHist"] = "Asc";
        else
            Session["SortDir_ReqMastHist"] = "Desc";

        Session["SortExpr_ReqMastHist"] = e.CommandArgument;
        GetRequestHistory();
    }

    private void GetRequestHistory()
    {
        DataSet ds = new DataSet();
        if (Session["ExpMasterHist"] == null)
        {
            string str = xms.getReqHist(ut.NullSafeInteger(Session["ReqID"]), ut.NullSafeInteger(Session["UserID"]), ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
            List<ReqStatusVO> lst = ser.Deserialize<List<ReqStatusVO>>(str);
            ds.Tables.Add(Utility.ConvertToDataTable(lst));
            Session["ExpMasterHist"] = ds;
        }
        else
            ds = (DataSet)Session["ExpMasterHist"];

        if ((Session["SortExpr_ReqMastHist"] != null) && Session["SortDir_ReqMastHist"] != null)
        {
            DataView view = new DataView(ds.Tables[0]);
            view.Sort = Session["SortExpr_ReqMastHist"].ToString() + " " + Session["SortDir_ReqMastHist"].ToString();
            gvHist.DataSource = view;
        }
        else
            gvHist.DataSource = ds;
        gvHist.DataBind();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPO.Show();
        else
        {
            CalculateTotals();
            popup.Show();
        }
        popHist.Show();
    }

    protected void btnExpLineHistory_Click(object sender, EventArgs e)
    {
        GetCurrencySymbol();
        SortExpLineHist();
        //GetCurrencySymbol();
        //DataTable dt = new DataTable();
        //DataRow dr;
        //dt.Columns.Add("Date");
        //dt.Columns.Add("Details");
        //dt.Columns.Add("Manager");
        //for (int i = 0; i < dtHist.Rows.Count; i++)
        //{
        //    dr = dt.NewRow();
        //    dr["Date"] = dtHist.Rows[i]["updateOn"];
        //    //convert column type to camel case
        //    dtHist.Rows[i]["colType"] = textInfo.ToTitleCase(dtHist.Rows[i]["colType"].ToString().ToLower());
        //    //convert column type to camel case

        //    //display $ symbol for amount type
        //    char currency = (dtHist.Rows[i]["colType"].ToString().ToLower().Contains("amount")) ? currencySymbol : '\0';
        //    //display $ symbol for amount type

        //    dr["Details"] = "<i>" + dtHist.Rows[i]["colType"].ToString() + "</i> updated from <b>" + currency + dtHist.Rows[i]["valueOld"].ToString() +
        //        "</b> to <b>" + currency + dtHist.Rows[i]["valueNew"].ToString() + "</b>";
        //    dt.Rows.Add(dr);
        //}
    }

    protected void SortReqLineHistExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ReqLineHist"] = lnk.ID;

        if (Session["SortDir_ReqLineHist"] == null || Session["SortDir_ReqLineHist"].ToString() == "Desc")
            Session["SortDir_ReqLineHist"] = "Asc";
        else
            Session["SortDir_ReqLineHist"] = "Desc";

        Session["SortExpr_ReqLineHist"] = e.CommandArgument;
        GetReqLineHistory();
    }

    private void SortExpLineHist()
    {
        DataTable dt = new DataTable();
        if (Session["ExpLineHist"] == null)
        {
            dt = GetReqLineHistory();
            Session["ExpLineHist"] = dt;
        }
        else
            dt = (DataTable)Session["ExpLineHist"];

        if ((Session["SortExpr_ReqLineHist"] != null) && Session["SortDir_ReqLineHist"] != null)
        {
            DataView view = new DataView(dt);
            view.Sort = Session["SortExpr_ReqLineHist"].ToString() + " " + Session["SortDir_ReqLineHist"].ToString();
            gvExpLineHist.DataSource = view;
        }
        else
            gvExpLineHist.DataSource = dt;
        gvExpLineHist.DataBind();

        popup_Edit.Show();
        popExpLineHist.Show();
    }

    private DataTable GetReqLineHistory()
    {
        HistVO hist = new HistVO();
        hist.colType = "";
        hist.compCode = Session["CompCode"].ToString();
        hist.expLine = ut.NullSafeInteger(hdnSeq1.Value);
        hist.valueNew = "";
        hist.valueOld = "";
        hist.orgId = ut.NullSafeInteger(Session["OrgID"]);
        hist.reqId = ut.NullSafeInteger(Session["ReqID"]);
        hist.updateOn = "";
        string str = xms.getExpDetailsHist(hist);

        List<HistVO> lst = ser.Deserialize<List<HistVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        return dt;
    }

    protected void gvHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblColType = (Label)e.Row.FindControl("lblColType");
            lblColType.Text = textInfo.ToTitleCase(lblColType.Text.ToLower());

            //align columns
            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "left";
            //align columns
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_ReqMastHist"] != null && Session["Control_ReqMastHist"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ReqMastHist"].ToString());
                if (Session["SortDir_ReqMastHist"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    protected void gvExpLineHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

            Label lblColType = (Label)e.Row.FindControl("lblColType");
            Label lblValueOld = (Label)e.Row.FindControl("lblValueOld");
            Label lblValueNew = (Label)e.Row.FindControl("lblValueNew");
            lblColType.Text = textInfo.ToTitleCase(lblColType.Text.ToLower());

            //align columns
            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "left";
            if (lblColType.Text.ToLower().Contains("amount"))
            {
                lblValueOld.Text = currencySymbol + lblValueOld.Text;
                lblValueNew.Text = currencySymbol + lblValueNew.Text;
            }
            //align columns
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_ReqLineHist"] != null && Session["Control_ReqLineHist"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ReqLineHist"].ToString());
                if (Session["SortDir_ReqLineHist"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";

            }
        }
    }

    #endregion

    # region EditPO

    double allRowsAmntVal = 0;

    protected void EditPODetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        lblPOEditHead.Text = "Edit PO Item";
        ToggleFields(true);
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtPOTripStrtDate.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }
        if (tripMonth != "" || tripMonth != string.Empty)
        {
            btnSavePOItem.Attributes.Add("onclick", "javascript:return ValidateNewPO();");
            MakeCalcFieldsReadOnly();

            dvPOErrMsg.InnerHtml = string.Empty;
            dvPoDError.InnerHtml = string.Empty;

            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            string[] arg = new string[2];
            arg = e.CommandArgument.ToString().Split(';');
            hdnRowIndex.Value = arg[0];
            int index = Convert.ToInt32(arg[0]);
            hdnSeq1.Value = arg[1];

            dtPO = (DataTable)Session["dtPO"];
            DataTable dtPO_Temp = dtPO.Clone();
            dtPO_Temp.ImportRow(dtPO.Rows[index]);
            Session["dtPO_Temp"] = dtPO_Temp;
            lblHeading.Text = "Edit PO Details";
            hdnRowIndex.Value = index.ToString();
            GetPOLineItemData(dtPO, index);

            foreach (GridViewRow row1 in gvPO.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
                if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                    allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
            }
            hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            Session["Edit"] = "y";
            ToggleFields(true);
            txtTaxPercent.Enabled = chkCalTax.Checked == true ? true : false;

            hdnPOOldAmount.Value = txtPoAmount.Text;
            hdnIsPOEdit.Value = "true";
            btnSavePOItem.Visible = true;
            btnDeletePOItem.Visible = true;
        }
        else
        {
            dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
            pop_EditPO.Show();
        }
        txtDescr.Focus();
        popAddPO.Show();
    }

    protected void ViewPODetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        lblPOEditHead.Text = "View PO Item";
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        dtPO = (DataTable)Session["dtPO"];

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;
        if (Session["dsFiscalDate"] == null)
            MonthFilter(year, txtPOTripStrtDate.Text);
        GetPOLineItemData(dtPO, index);

        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;
        lblHeading.Text = "View PO Details";
        ToggleFields(false);
        btnSavePOItem.Visible = false;
        btnDeletePOItem.Visible = false;
        popAddPO.Show();
    }

    private void MakeCalcFieldsReadOnly()
    {
        txtDisc.Attributes.Add("readonly", "readonly");
        txttax.Attributes.Add("readonly", "readonly");
        txtPoAmount.Attributes.Add("readonly", "readonly");
        txtBudget.Attributes.Add("readonly", "readonly");
        txtCurrBal.Attributes.Add("readonly", "readonly");
        txtRemain.Attributes.Add("readonly", "readonly");
        txtBalAfterPO.Attributes.Add("readonly", "readonly");
        txtLinePromoCode.Attributes.Add("readonly", "readonly");
    }

    private void GetPOLineItemData(DataTable dt, int index)
    {
        DataTable dtv = new DataTable();
        if (ddlJobs.SelectedValue != "0")
            dtv = LoadDetailsByJob(false);
        else
        {
            BindDepartments(ddlDepartment, 1);
            ddlDepartment.SelectedValue = dt.Rows[index]["DeptCode"].ToString();

            //Bind Budget Classifications
            BindPoExpenseItems();
            //DeptVO d = new DeptVO();
            //d.accName
            dtv = (DataTable)Session["dtExpItem"];
            dtv = GetHierarchicalData(dtv, "AcountClss");
            ddlExpItem.DataSource = dtv.DefaultView.ToTable(true, "AcountClss", "accName");
            ddlExpItem.DataBind();
            ddlExpItem.Items.Insert(0, "Please Select");
            ddlExpItem.Items.FindByText("Please Select").Value = "0";

        }
        ddlExpItem.SelectedValue = dt.Rows[index]["expItem"].ToString();
        //Get account code and QB account code
        string expr = "accName = '" + ddlExpItem.SelectedValue + "'";
        DataView view = new DataView(dtv, expr, "accName", DataViewRowState.CurrentRows);
        txtAccCode.Text = view.ToTable().Rows[0]["accountCode"].ToString();
        hdnQBAcctID.Value = view.ToTable().Rows[0]["qbAccID"].ToString();

        txtQuantity.Text = dt.Rows[index]["quantity"].ToString();
        txtPkgUnit.Text = dt.Rows[index]["packageUnit"].ToString();
        txtUnitPrice.Text = ut.NullSafeDouble(dt.Rows[index]["unitPrice"]).ToString("#.##");
        txtPoAmount.Text = dt.Rows[index]["PreAmount"].ToString();
        txtDescr.Text = dt.Rows[index]["comments"].ToString();
        txtShipCost.Text = (ut.NullSafeDouble(dt.Rows[index]["shippingCost"])).ToString();
        txtBalAfterPO.Text = dt.Rows[index]["balAfterPo"].ToString();
        Session["balAfterPO"] = txtBalAfterPO.Text;
        chkCalTax.Checked = Convert.ToBoolean(dt.Rows[index]["taxCalCulated"]);
        txtTaxPercent.Text = chkCalTax.Checked == true ? dt.Rows[index]["taxPercent"].ToString() : Session["Tax"].ToString();
        txtTaxPercent.Enabled = chkCalTax.Checked == true ? true : false;
        double x = ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(dt.Rows[index]["taxPercent"].ToString() == string.Empty ? "0" : dt.Rows[index]["taxPercent"].ToString())) / 100));
        txttax.Text = chkCalTax.Checked == true ? (x.ToString() != "0" ? x.ToString("#.##") : x.ToString()) : "0.00";//dt.Rows[index]["taxAmount1"].ToString();
        hdnTax.Value = txtTaxPercent.Text;
        txtReqDelDate.Text = dt.Rows[index]["reqDeliveryDate"].ToString();
        BindItemsCode();
        try
        {
            ddlItemCode.SelectedValue = dt.Rows[index]["ItemCode"].ToString();
        }
        catch
        {
            ddlItemCode.SelectedValue = "0";
        }
        txtchangeComnts.Text = dt.Rows[index]["DeptChgCmt"].ToString();

        //Show item inventory and purchase history
        LoadItemInvAndPurchaseHist();

        //show agreement and price flag
        BindPriceFlag();
        try
        {
            ddlItemCode.SelectedValue = dt.Rows[index]["priceFlag"].ToString();
        }
        catch
        {
            //ddlItemCode.SelectedValue = "AG";
        }
        txtVendPtNo.Text = dt.Rows[index]["vendpartno"].ToString();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "Agreement", "getVendItemAgrmntInit('ddlPreVendor');", true);

        hdnPOOldExpItem.Value = ddlExpItem.SelectedValue;
        hdnPOOldAmount.Value = txtPoAmount.Text;
        CalOnAccCode();
        statusCnt = Convert.ToInt32(Session["statusID"]);
        if (statusCnt == 4)
            txtBalAfterPO.Text = txtRemain.Text;
        if (gvPO.Rows.Count > 1)
            btnDeletePOItem.Visible = true;
        else
            btnDeletePOItem.Visible = false;

        if (Session["DepartmentCode"].ToString() != ddlDepartment.SelectedValue)
            dvCommts.Visible = true;
        else
            dvCommts.Visible = false;

        chkDisc.Checked = dt.Rows[index]["discountFlag"].ToString() == "Y" ? true : false;
        txtDisc.Text = dt.Rows[index]["discount"].ToString();
        txtLinePromoCode.Text = dt.Rows[index]["promoCode"].ToString();

        btnAppendPO.Visible = false;
        btnSavePOItem.Visible = true;
        pop_EditPO.Hide();
    }

    protected void gvPO_RowEditing(object sender, GridViewEditEventArgs e)
    {

    }

    protected void gvPO_RowDeleting(object sender, GridViewDeleteEventArgs e)
    { }

    protected void gvPO_RowCommand(object sender, GridViewCommandEventArgs e)
    {
    }

    protected void gvPO_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            statusCnt = Convert.ToInt32(Session["statusID"]);
            LinkButton lnkPOEdit = (LinkButton)e.Row.FindControl("lnkPOEdit");
            LinkButton lnkPOview = (LinkButton)e.Row.FindControl("lnkPOview");
            LinkButton lnkPODelete = (LinkButton)e.Row.FindControl("lnkPODelete");
            LinkButton lnkItemCode = (LinkButton)e.Row.FindControl("lnkItemCode");
            Label lblItemCode = (Label)e.Row.FindControl("lblItemCode");
            Label lblDept = (Label)e.Row.FindControl("lblDept");
            HiddenField hdnRowStatusID = (HiddenField)e.Row.FindControl("hdnRowStatusID");
            HiddenField hdnRowStatus = (HiddenField)e.Row.FindControl("hdnRowStatus");
            HiddenField hdnItemNote = (HiddenField)e.Row.FindControl("hdnItemNote");
            if (lnkPOEdit != null && lnkPOview != null)
            {
                if (statusCnt == 3 || statusCnt == 5 || statusCnt == 6)
                {
                    lnkPOEdit.Visible = true;
                    lnkPODelete.Visible = true;
                }
                else
                {
                    lnkPOEdit.Visible = false;
                    lnkPODelete.Visible = false;
                }
            }

            if (lblDept.Text != Session["DepartmentCode"].ToString())
            {
                e.Row.Cells[2].Style["background-color"] = "#FFFF99";
                lblDept.Style["color"] = "Red";
                //e.Row.Cells[2].ToolTip = "Not actual department";
                e.Row.Cells[2].ToolTip = Session["username"] + " " + Session["lastname"] + " does not belong to this department.";
            }

            Label lblPOColor = (Label)e.Row.FindControl("lblPOColor");
            if (hdnRowStatusID.Value == "11")
            {
                lblPOColor.Style.Add("background-image", "url(images/icons/cancelInvicon.png)");
                lblPOColor.ToolTip = hdnRowStatus.Value;
            }
            else if (hdnRowStatusID.Value == "15")
            {
                lblPOColor.Style.Add("background-image", "url(images/icons/aprRecvBtn.png)");
                lblPOColor.ToolTip = hdnRowStatus.Value;
            }
            else
            {
                lblPOColor.Style.Add(" background-image", "url(images/icons/openDoorIcon.png)");
                lblPOColor.ToolTip = hdnRowStatus.Value;
            }

            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }

            if (hdnItemNote.Value.Trim() == string.Empty)
            {
                lblItemCode.Visible = true;
                lnkItemCode.Visible = false;
            }
            else
            {
                lblItemCode.Visible = false;
                lnkItemCode.Visible = true;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void ToggleFields(bool check)
    {
        ddlDepartment.Enabled = check;
        ddlExpItem.Enabled = check;
        ddlItemCode.Enabled = check;
        txtVendPtNo.Enabled = check;
        txtAccCode.Enabled = check;
        txtQuantity.Enabled = check;
        txtPkgUnit.Enabled = check;
        txtUnitPrice.Enabled = check;
        txtPoAmount.Enabled = check;
        txtDescr.Enabled = check;
        txtShipCost.Enabled = check;
        txttax.Enabled = check;
        txtTaxPercent.Enabled = check;
        txtBalAfterPO.Enabled = check;
        txtPromoCode.Enabled = check;
        txtDisc.Enabled = check;
        chkCalTax.Enabled = check;
        chkDisc.Enabled = check;
        txtReqDelDate.Enabled = check;
        ddlPriceFlag.Enabled = check;
    }

    //Delete from Edit line item popup
    protected void DeletePOLineItem(object sender, EventArgs e)
    {
        //int index = Convert.ToInt32(hdnRowIndex.Value);
        //dtPO = dtPO = (DataTable)Session["dtPO"];
        //dtPO.Rows[index].Delete();
        //dtPO.AcceptChanges();
        //Session["dtPO"] = dtPO;
        //GetPOData();
        //if (gvPO.Rows.Count > 0)
        //{
        // btnPOSave.Visible = false;
        // btnPOSubmit.Visible = false;
        // ddlType.Enabled = true;
        //}
        //else
        //{
        // btnPOSave.Visible = true;
        // btnPOSubmit.Visible = true;
        //}
        if (gvPO.Rows.Count > 1)
        {
            pop_EditPO.Show();
            popAddPO.Hide();
            popAlert.Show();
        }
        else
        {
            dvPOErrMsg.Style["color"] = "Red";
            dvPOErrMsg.InnerHtml = "You cannot delete single line item.";
            popAddPO.Show();
            pop_EditPO.Show();
        }
    }

    protected void btnSavePO_Click(object sender, EventArgs e)
    {
        int uID = Convert.ToInt32(Session["UserID"]);
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt1.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();

        if (Session["dtPO"] == null)
        {
            dtPO.Columns.Add("expItem");
            dtPO.Columns.Add("accountCode");
            dtPO.Columns.Add("quantity");
            dtPO.Columns.Add("packageUnit");
            dtPO.Columns.Add("unitPrice");
            dtPO.Columns.Add("preAmount");
            dtPO.Columns.Add("comments");
            dtPO.Columns.Add("budget");
            dtPO.Columns.Add("currentBalance");
            dtPO.Columns.Add("remaining");
            dtPO.Columns.Add("balAfterpo");
            dtPO.Columns.Add("shippingCost");
            dtPO.Columns.Add("taxCalCulated");
            dtPO.Columns.Add("vendpartno");
            dtPO.Columns.Add("TaxPercent");
            dtPO.Columns.Add("ItemCode");
            dtPO.Columns.Add("MgrGroupCode");
            dtPO.Columns.Add("DeptCode");
            dtPO.Columns.Add("DeptChgCmt");
            dtPO.Columns.Add("discountFlag");
            dtPO.Columns.Add("discount");
            dtPO.Columns.Add("promoCode");
            dtPO.Columns.Add("taxAmount1");
            dtPO.Columns.Add("reqDeliveryDate");
        }
        else
            dtPO = (DataTable)Session["dtPO"];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = (DataTable)Session["dtPO_Temp"];

        double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;

        //get QBITemID according to selected item code.
        DataTable dtExpItem = (DataTable)Session["dtExpItem"];
        DataView dvItem = new DataView(dtExpItem, "accName = '" + ddlExpItem.SelectedValue + "' AND ITEMCODE = '" + ddlItemCode.SelectedValue + "'", "", DataViewRowState.CurrentRows);
        hdnQBItemID.Value = dvItem.ToTable().Rows[0]["qbItemId"].ToString();
        //get QBITemID according to selected item code.

        int edPOFlag = 0;
        if (ddlExpItem.SelectedValue != dtPO_Temp.Rows[0]["expItem"].ToString())
            edPOFlag = 1;
        else if (txtAccCode.Text != dtPO_Temp.Rows[0]["accountCode"].ToString())
            edPOFlag = 1;
        if (ddlItemCode.SelectedItem.Text != dtPO_Temp.Rows[0]["ITEMCODE"].ToString())
            edPOFlag = 1;
        else if (txtQuantity.Text != dtPO_Temp.Rows[0]["quantity"].ToString())
            edPOFlag = 1;
        else if (txtPkgUnit.Text != dtPO_Temp.Rows[0]["packageUnit"].ToString())
            edPOFlag = 1;
        else if (txtUnitPrice.Text != dtPO_Temp.Rows[0]["unitPrice"].ToString())
            edPOFlag = 1;
        else if (txtPoAmount.Text != dtPO_Temp.Rows[0]["PreAmount"].ToString())
            edPOFlag = 1;
        else if (txtDescr.Text != dtPO_Temp.Rows[0]["comments"].ToString())
            edPOFlag = 1;
        else if (txtShipCost.Text != dtPO_Temp.Rows[0]["shippingCost"].ToString())
            edPOFlag = 1;
        else if (txtVendPtNo.Text != dtPO_Temp.Rows[0]["vendpartno"].ToString())
            edPOFlag = 1;
        else if (txtReqDelDate.Text != dtPO_Temp.Rows[0]["reqDeliveryDate"].ToString())
            edPOFlag = 1;
        else if (chkCalTax.Checked != Convert.ToBoolean(dtPO_Temp.Rows[0]["taxCalCulated"]))
            edPOFlag = 1;
        else if (txttax.Text != dtPO_Temp.Rows[0]["taxAmount1"].ToString())
            edPOFlag = 1;
        else if (chkDisc.Checked != (dtPO_Temp.Rows[0]["discountFlag"].ToString() == "Y" ? true : false))
            edPOFlag = 1;
        if (edPOFlag == 1)
        {
            int row = Convert.ToInt32(hdnRowIndex.Value);
            ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();
            expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
            expensedetails.expLineNo = Convert.ToInt32(hdnSeq1.Value);
            expensedetails.expItem = ddlExpItem.SelectedValue;
            expensedetails.quantity = ut.NullSafeDouble(txtQuantity.Text);
            expensedetails.packageUnit = txtPkgUnit.Text;
            expensedetails.unitPrice = ut.NullSafeDouble(txtUnitPrice.Text);
            expensedetails.actualAmount = 0;
            expensedetails.comments = txtDescr.Text;
            expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expensedetails.compCode = Session["CompCode"].ToString();
            expensedetails.expDate = string.Empty;
            expensedetails.citiesVstd = string.Empty;
            expensedetails.othercity = string.Empty;
            expensedetails.expType = string.Empty;
            expensedetails.payMode = string.Empty;
            expensedetails.jobCode = string.Empty;
            expensedetails.phaseCode = string.Empty;
            expensedetails.JCatCode = string.Empty;
            expensedetails.preAmount = ut.NullSafeDouble(txtPoAmount.Text);//POamnt;
            expensedetails.status = "Saved";
            expensedetails.statusId = 3;
            expensedetails.stateId = string.Empty;
            expensedetails.startDate = txtPOTripStrtDate.Text;
            expensedetails.amtSpent = 0;
            expensedetails.purpose = string.Empty;
            expensedetails.agentName = string.Empty;
            expensedetails.bookedDate = string.Empty;
            expensedetails.detailsFlag = 1;
            expensedetails.masterFlag = 0;
            expensedetails.automileageFlag = 0;
            expensedetails.fromCity = string.Empty;
            expensedetails.otherFromCity = string.Empty;
            expensedetails.toCity = string.Empty;
            expensedetails.otherToCity = string.Empty;
            expensedetails.preferredVendor = ddlPreVendor.SelectedItem.Text;
            expensedetails.itinararyNo = string.Empty;
            expensedetails.fromDate = string.Empty;
            expensedetails.toDate = string.Empty;
            expensedetails.currency = string.Empty;
            expensedetails.exp = string.Empty;
            expensedetails.accountCode = txtAccCode.Text;
            expensedetails.codeId = string.Empty;
            expensedetails.codeValue = string.Empty;
            expensedetails.managerEmail = string.Empty;
            expensedetails.managerId = Convert.ToInt32(ddlPOMgrEmail.SelectedValue);
            expensedetails.LNorm = 0;
            expensedetails.totTrip = 0;
            expensedetails.reimbt = 0;
            expensedetails.userId = uID;
            expensedetails.preApproved = 2;
            expensedetails.companyCar = string.Empty;
            expensedetails.otherPlace = string.Empty;
            expensedetails.outOfCity = false;
            expensedetails.shippingCost = ut.NullSafeDouble(txtShipCost.Text);
            expensedetails.taxPercent = taxPercent;
            expensedetails.balAfterPO = ut.NullSafeDouble(txtBalAfterPO.Text);//ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt1.Value) + ut.NullSafeDouble(POamnt)));
            expensedetails.taxAmount1 = ut.NullSafeDouble(txttax.Text);
            expensedetails.taxAmount2 = 0;
            expensedetails.taxAmount3 = 0;
            expensedetails.reimbursable = string.Empty;
            expensedetails.taxCalculated = chkCalTax.Checked == true ? 1 : 0;
            expensedetails.vendPartno = txtVendPtNo.Text;
            expensedetails.polineseq = ut.NullSafeInteger(hdnRowIndex.Value);
            expensedetails.csuserid = 0;
            expensedetails.mgrGroupCode = hdnManagerGrpCode.Value;
            expensedetails.itemCode = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
            expensedetails.deptChgCmt = txtchangeComnts.Text == string.Empty ? " " : txtchangeComnts.Text;
            expensedetails.deptCode = ddlDepartment.SelectedValue;
            expensedetails.discount = ut.NullSafeDouble(txtDisc.Text);
            expensedetails.discountFlag = chkDisc.Checked ? "Y" : "N";
            expensedetails.promoCode = txtLinePromoCode.Text;
            expensedetails.reqDeliveryDate = txtReqDelDate.Text;
            expensedetails.onBeHalfOf = txtReqDelDate.Text;
            expensedetails.lastUpdSource = "Web";
            expensedetails.polineseq = ut.NullSafeInteger(dtPO_Temp.Rows[0]["polineseq"].ToString());
            expensedetails.qbAcctId = ut.NullSafeInteger(hdnQBAcctID.Value);
            expensedetails.qbVendId = ut.NullSafeInteger(hdnQBVendID.Value);
            expensedetails.qbItemId = ut.NullSafeInteger(hdnQBItemID.Value);
            expensedetails.priceFlag = ddlPriceFlag.SelectedValue;
            expensedetails.className = string.Empty;
            expensedetails.classRefId = "0";
            expensedetails.sendtoqb = string.Empty;
            string retStr = xms.addExpense(expensedetails);

            if (retStr.ToLower().Contains("fail"))
            {
                dvPOErrMsg.Style["color"] = "Red";
                dvPOErrMsg.InnerHtml = retStr;
                popAddPO.Show();
            }
            else if (retStr.ToLower().Contains("succes"))
            {
                dvPoError.Style["color"] = "Green";
                dvPoError.InnerHtml = retStr;
                dtPO.Rows[row]["expItem"] = ddlExpItem.SelectedValue;
                dtPO.Rows[row]["accountCode"] = txtAccCode.Text;
                dtPO.Rows[row]["quantity"] = Convert.ToDouble(txtQuantity.Text);
                dtPO.Rows[row]["packageUnit"] = txtPkgUnit.Text;
                dtPO.Rows[row]["unitPrice"] = txtUnitPrice.Text;
                double taxPercent1 = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
                dtPO.Rows[row]["TaxPercent"] = taxPercent1;
                //double chkTax1 = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent1)) / 100) : 0;
                //double tax1 = (ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax1;
                //double POamnt1 = (((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax1))) + ut.NullSafeDouble(txtShipCost.Text);
                dtPO.Rows[row]["PreAmount"] = txtPoAmount.Text;
                dtPO.Rows[row]["comments"] = txtDescr.Text;
                dtPO.Rows[row]["balAfterpo"] = txtBalAfterPO.Text;//ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt1.Value) + ut.NullSafeDouble(POamnt1)));
                Session["balAfterPO"] = dtPO.Rows[row]["balAfterpo"];
                dtPO.Rows[row]["taxCalCulated"] = chkCalTax.Checked;
                dtPO.Rows[row]["vendpartno"] = txtVendPtNo.Text;
                hdnTax.Value = chkCalTax.Checked == true ? taxPercent1.ToString() : Session["Tax"].ToString();
                dtPO.Rows[row]["MgrGroupCode"] = string.Empty;
                dtPO.Rows[row]["DeptCode"] = ddlDepartment.SelectedValue;
                dtPO.Rows[row]["DeptChgCmt"] = txtchangeComnts.Text == string.Empty ? " " : txtchangeComnts.Text;
                dtPO.Rows[row]["ItemCode"] = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedItem.Text;
                dtPO.Rows[row]["discountFlag"] = chkDisc.Checked == true ? "Y" : "N";
                dtPO.Rows[row]["discount"] = ut.NullSafeDouble(txtDisc.Text);
                dtPO.Rows[row]["promoCode"] = txtLinePromoCode.Text;
                dtPO.Rows[row]["taxAmount1"] = txttax.Text;
                dtPO.Rows[row]["reqDeliveryDate"] = txtReqDelDate.Text;
                popAddPO.Hide();
            }
        }
        else
        {
            dvPOErrMsg.InnerHtml = "No changes to Update";
            popAddPO.Show();
        }
        dtPO.AcceptChanges();
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == txtAccCode.Text)
                dtPO.Rows[row1.RowIndex]["balAfterpo"] = Session["balAfterPO"].ToString();
        }
        Session.Remove("dtPO");
        LoadEditPOData(null);

        //dtPO = (DataTable)Session["dtPO"];
        //DataTable dtPO_Temp1 = dtPO.Clone();
        //dtPO_Temp1.ImportRow(dtPO.Rows[ut.NullSafeInteger(hdnRowIndex.Value)]);
        //Session["dtPO_Temp"] = dtPO_Temp1;

        //GetPOLineItemData(dtPO_Temp1, 0);

        Session.Remove("dsSt");
        SortGrid();
        btnSave.Visible = true;
        btnSubmit.Visible = true;
        pop_EditPO.Show();
    }

    //Delete from gridview
    protected void DeletePO(object sender, CommandEventArgs e)
    {
        string[] arr = new string[2];
        arr = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arr[0];
        hdnSeq1.Value = arr[1];
        if (gvPO.Rows.Count > 1)
            popPOAlert.Show();
        else
        {
            dvPoDError.Style["color"] = "Red";
            dvPoDError.InnerHtml = "You cannot delete this line as the current PO contains only one line.";
        }
        pop_EditPO.Show();
    }

    //Delete from alert box confirmation
    protected void DeletePOItem(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(hdnRowIndex.Value);
        int seq = Convert.ToInt32(hdnSeq1.Value);
        dt = (DataTable)Session["dtPO"];

        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == dt.Rows[index]["accountCode"].ToString())
                dt.Rows[row1.RowIndex]["balafterpo"] = (ut.NullSafeDouble(dt.Rows[row1.RowIndex]["balafterpo"]) + (ut.NullSafeDouble(dt.Rows[index]["preamount"]))).ToString("#.##");
        }

        dt.Rows[index].Delete();
        dt.AcceptChanges();
        Session["dtPO"] = dt;
        xms.deleteExpense(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]));
        GetPOData();

        if (gvPO.Rows.Count == 0)
        {
            btnPOSave.Visible = false;
            btnPOSubmit.Visible = false;
        }
        else
        {
            btnPOSave.Visible = true;
            btnPOSubmit.Visible = true;
        }
        pop_EditPO.Show();
        popPOAlert.Hide();
    }

    protected void btnClosePOItem_Click(object sender, EventArgs e)
    {
        popAddPO.Hide();
        pop_EditPO.Show();
    }

    protected void DisplayItemNotes(object sender, CommandEventArgs e)
    {
        string[] itemNotes = e.CommandArgument.ToString().Split(';');
        lblDispItemCode.Text = itemNotes[0];
        lblItemNotes.Text = itemNotes[1];
        pop_EditPO.Show();
        popItemNotes.Show();
    }

    protected void LoadItemInvAndPurchaseHist()
    {
        //Load selected item inventory details
        DataTable dtInv = GetItemInventoryDetails(ddlItemCode.SelectedValue);
        DataView dvInv = dtInv.DefaultView;
        gvItemInventory.DataSource = dvInv.ToTable(true, "locCode", "locName", "locAddress1");
        gvItemInventory.DataBind();
        lnkShowItemInventory.Style["display"] = "block";

        //load item purchase history
        //Display currency symbol at unit price.
        GetCurrencySymbol();
        string retStr = xms.getItemPurchaseList(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ddlItemCode.SelectedValue, ut.NullSafeDouble(txtUnitPrice.Text));
        List<ExpeseDetailsVO> lst = ser.Deserialize<List<ExpeseDetailsVO>>(retStr);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["ItemPurchHist"] = dt;
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

    #region Calculate Budget

    protected void AccountCodeChanged(object sender, EventArgs e)
    {
        GetBudgetData();
        GetClassificationAttributes();
        hdnExpItem.Value = ddlAccountCodes.SelectedValue;
        Session["Sectiondt"] = GetExpItemSections((DataTable)Session["dsCodes"]);
        txtCityVisited.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();
        txtFromCity.Text = Session["City"].ToString() == string.Empty ? " " : Session["City"].ToString();
        dvEditVendor.Style["display"] = "none";
        dvEditAgName.Style["display"] = "none";
        dvEditItNo.Style["display"] = "none";
        Session["TestVIewExp"] = "1";
        RetainFields();
        Session.Remove("TestVIewExp");
        //GetAccountCodeByExpenseItem();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "LoadCities", "LoadCityList();", true);
        popup_Edit.Show();
        popup_Edit.Show();
    }

    private void GetClassificationAttributes()
    {
        //get reimbursable and attachment attributes
        DataTable dtAcc = (DataTable)Session["AccountCodes"];
        string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
        DataView dvAcc = new DataView(dtAcc, "acctCode = '" + arr[0].Trim() + "'", "AccountCode", DataViewRowState.CurrentRows);
        if (dvAcc != null)
            if (dvAcc.ToTable().Rows.Count > 0)
            {
                string reimb = dvAcc.ToTable().Rows[0]["reimbursable"].ToString();
                string attch = dvAcc.ToTable().Rows[0]["attachment"].ToString();
                hdnQBAcctID.Value = dvAcc.ToTable().Rows[0]["qbAccID"].ToString();
                chkReimb.Checked = (string.IsNullOrEmpty(reimb) ? false : (reimb == "Y" ? true : false));
                hdnAttMandtry.Value = (string.IsNullOrEmpty(attch) ? "N" : attch);
            }
        //get reimbursable and attachment attributes
    }

    private void GetBudgetData()
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDate.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtTripStartDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvExpError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        ////Fetch budget details by selected classification
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = Session["DepartmentCode"].ToString();
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = "All";

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = ddlAccountCodes.SelectedValue;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = deptCode;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
        string expression = "TRIM(accountCode) = '" + arr[0].Trim() + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();

        if (dtAcccode.Rows.Count == 0 || ut.NullSafeDouble(dtAcccode.Rows[0]["budget"].ToString()) == 0)
        {
            txtExpBudg.Text = txtExpCurrBal.Text = txtExpRemBudg.Text = txtExpBalAfter.Text = string.Empty;
            dvExpError.Style["color"] = "Red";
            dvExpError.InnerHtml = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
        }
        else
        {
            dvExpError.InnerHtml = string.Empty;
            txtExpBudg.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtExpCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtExpRemBudg.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                if (hdnAccCode.Value == ddlAccountCodes.SelectedValue)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtEditActAmnt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            statusCnt = Convert.ToInt32(Session["statusID"]);
            if (statusCnt == 4)
                txtExpBalAfter.Text = txtExpRemBudg.Text;
            else
                txtExpBalAfter.Text = (ut.NullSafeDouble(txtExpRemBudg.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(txtEditActAmnt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    private void GetViewBudgetData(string accCode)
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDate.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtTripStartDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        ////Fetch budget details by selected classification
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = Session["DepartmentCode"].ToString();
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = "All";

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtVAccCode.Text;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = deptCode;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string expression = "accountCode = '" + accCode + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();

        if (dtAcccode.Rows.Count == 0)
        {
            dvExpError.Style["color"] = "Red";
            dvExpError.InnerHtml = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
        }
        else
        {
            txtVExpBudg.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtVExpCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtVExpRemBudg.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                string strAccCode = txtVAccCode.Text.Split('-')[0];
                if (hdnAccCode.Value == strAccCode)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnVExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(lblVActAmt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            statusCnt = Convert.ToInt32(Session["statusID"]);
            if (statusCnt == 4)
                txtVExpBalAfter.Text = txtVExpRemBudg.Text;
            else
                txtVExpBalAfter.Text = (ut.NullSafeDouble(txtVExpRemBudg.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(lblVActAmt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFields()
    {
        txtExpBalAfter.Attributes.Add("readonly", "readonly");
        txtExpCurrBal.Attributes.Add("readonly", "readonly");
        txtExpRemBudg.Attributes.Add("readonly", "readonly");
        txtExpBudg.Attributes.Add("readonly", "readonly");
    }

    #endregion

    #region PO Attachments

    protected void btnAttach_Click(object sender, EventArgs e)
    {
        if (Session["AttchList"] == null)
            Attachments(0);
        ds = (DataSet)Session["AttchList"];
        gvAttchmntsPO.DataSource = ds;
        gvAttchmntsPO.DataBind();
        btnDeleteSelectedPO.Style["display"] = "none";
        btnDeleteSelectedPO.Attributes.Add("onclick", "javascript:return CheckPOAttDel();");

        //Display/Hide fileupload control depending on status
        statusCnt = Convert.ToInt32(Session["statusID"]);
        if (statusCnt == 3 || statusCnt == 5 || statusCnt == 6)
        {
            fupd1PO.Visible = true;
            btnUploadPOAtt.Visible = true;
        }
        else
        {
            fupd1PO.Visible = false;
            btnUploadPOAtt.Visible = false;
        }
        //Display/Hide fileupload control depending on status
        pop_EditPO.Show();
        popup_AttPO.Show();
    }

    protected void fileUploadCompletePO(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1PO.PostedFile.FileName);
        int len = fupd1PO.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".pdf")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2097152 (2MB), need to be 10485760 (10MB)
            {
                Session["fStreamPO"] = fupd1PO.FileContent;
                Session["FileExtPO"] = Path.GetExtension(fupd1PO.PostedFile.FileName);
                Session["RctFileNamePO"] = fupd1PO.PostedFile.FileName;
            }
            else
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
        }
        else
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
    }

    protected void UploadPOAttachments(object sender, EventArgs e)
    {
        string str = string.Empty;
        if (Session["RctFileNamePO"] != null)
        {
            byte[] fileData = null;
            Random random = new Random();
            int index = Session["RctFileNamePO"].ToString().IndexOf('.');
            string fName = Session["RctFileNamePO"].ToString().Substring(0, index);
            AttachmentVO att = new AttachmentVO();
            att.addedOn = DateTime.Now.ToShortDateString();
            att.attachmentId = 0;
            att.compCode = Session["CompCode"].ToString();
            att.expLineNo = 0;
            att.fileName = Session["ReqID"].ToString() + "_0_" + Session["OrgID"].ToString() + "_" + ddlPreVendor.SelectedItem.Text.Replace('/', '_') + "_" + fName + random.Next();
            att.orgId = Convert.ToInt32(Session["OrgID"]);
            att.orgName = string.Empty;
            att.requestId = Convert.ToInt32(Session["ReqID"]);
            fileData = SavedFileDataPO();
            str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 2);
            if (str.ToLower().Contains("y"))
            {
                dvAttPO.Style["color"] = "Green";
                dvAttPO.InnerHtml = "File attached successfully";
                Attachments(0);
                ds = (DataSet)Session["AttchList"];
                gvAttchmntsPO.DataSource = ds;
                gvAttchmntsPO.DataBind();
                btnAttach.Text = "   Attachments(" + gvAttchmntsPO.Rows.Count + ")";
            }
            else
            {
                dvAttPO.Style["color"] = "Red";
                dvAttPO.InnerHtml = "An error occurred while uploading file. Please try again.";
            }
        }
        pop_EditPO.Show();
        popup_AttPO.Show();
    }

    private byte[] SavedFileDataPO()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStreamPO"];
        BinaryReader br = new BinaryReader(sf);
        sf.Position = 0;
        if (Session["FileExtPO"].ToString().ToLower() == ".pdf")
        {
            int fileSize;
            fileSize = ut.NullSafeInteger(sf.Length);
            Stream fileStream = sf;
            fileData = new byte[fileSize];
            fileStream.Read(fileData, 0, 2097152);
            hdnRctFileType.Value = "2";//for pdf format
        }
        else
        {
            fileData = br.ReadBytes((int)sf.Length);
            hdnRctFileType.Value = "1";//for image (.jpg/.jpeg/.tiff/.png)
        }
        return fileData;
    }

    private string UploadFilesPO()
    {
        string str = string.Empty;
        if (Session["RctFileNamePO"] != null)
        {
            byte[] fileData = null;
            Random random = new Random();
            int index = Session["RctFileNamePO"].ToString().IndexOf('.');
            string fName = Session["RctFileNamePO"].ToString().Substring(0, index);
            AttachmentVO att = new AttachmentVO();
            att.addedOn = DateTime.Now.ToShortDateString();
            att.attachmentId = 0;
            att.compCode = Session["CompCode"].ToString();
            att.expLineNo = 0;
            att.fileName = Session["ReqID"].ToString() + "_0_" + Session["OrgID"].ToString() + "_" + ddlPreVendor.SelectedValue.Replace('/', '_') + "_" + fName + random.Next();
            att.orgId = Convert.ToInt32(Session["OrgID"]);
            att.orgName = string.Empty;
            att.requestId = Convert.ToInt32(Session["ReqID"]);
            fileData = SavedFileDataPO();
            str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 2);
        }
        return str;
    }

    protected void gvAttchmntsPO_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmntPO");
            DataSet ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
                if (extension.ToLower().Contains("pdf"))
                    imgAttchmnt.ImageUrl = "images/pdfIcon.png";
                else
                {
                    byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                    string base64ImageString = ConvertBytesToBase64(bytes);
                    imgAttchmnt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
                }
            }

            statusCnt = Convert.ToInt32(Session["statusID"]);
            CheckBox chkDelAtt = (CheckBox)e.Row.FindControl("chkDelAttPO");
            if (statusCnt == 3 || statusCnt == 5 || statusCnt == 6)
                chkDelAtt.Visible = true;
            else
                chkDelAtt.Visible = false;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void DownLdAttPO(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgNamePO");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgNamePO");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        pop_EditPO.Show();
        popup_AttPO.Show();
    }

    protected void DeleteSelectedPOAttachments(object sender, EventArgs e)
    {
        btnDeleteSelectedPO.Style["display"] = "block";
        popup_AttPO.Show();
        popDelAttPO.Show();
    }

    protected void ConfirmDeletePOAtt(object sender, EventArgs e)
    {
        string attId = string.Empty;
        foreach (GridViewRow row in gvAttchmntsPO.Rows)
        {
            CheckBox chkDelAttPO = (CheckBox)row.FindControl("chkDelAttPO");
            HiddenField hdnattIdPO = (HiddenField)row.FindControl("hdnattIdPO");
            if (chkDelAttPO.Checked)
                attId += hdnattIdPO.Value + "~";
        }
        attId = attId.TrimEnd('~');
        string retStr = xms.deleteMulAttachment(attId, 2, string.Empty, 0, 0, string.Empty);
        if (retStr.ToLower().Contains("succes"))
        {
            dvAttPO.InnerText = retStr;
            dvAttPO.Style["color"] = "Green";
            dvAttPO.Style["font-weight"] = "normal";
            Attachments(0);
            ds = (DataSet)Session["AttchList"];
            gvAttchmntsPO.DataSource = ds;
            gvAttchmntsPO.DataBind();
            btnDeleteSelectedPO.Style["display"] = "none";
            popup_AttPO.Show();
        }
        else
        {
            dvAttPO.InnerText = "An error occured while deleting draft please try later";
            dvAttPO.Style["color"] = "Red";
            dvAttPO.Style["font-weight"] = "bold";
        }
        popDelAttPO.Hide();
        pop_EditPO.Show();
    }

    #endregion

    #region Add Expense Item

    protected void AddExpenseItem(object sender, EventArgs e)
    {
        btnAddExpItemSave.Attributes.Add("onclick", "javascript:return validateAddNewExpItem();");
        ClearAddExpItemFields();
        txtAddExpCode.Focus();
        GetCurrencySymbol();
        popup_Edit.Hide();
        popAddExpItem.Show();
    }

    private void GetCurrencySymbol()
    {
        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv.ToTable().Rows[0]["CodeValue1"]);
    }

    protected void btnAddExpItemSave_Click(object sender, EventArgs e)
    {
        CodeValueVO code = new CodeValueVO();
        code.addedBy = Session["UserID"].ToString();
        code.addedOn = DateTime.Now.ToShortDateString();
        code.codeId = " EXPITEM";
        code.codeKey = txtAddExpCode.Text;
        code.codeValue1 = txtAddExpAccCode.Text;
        code.codeValue2 = txtAddExpMaxLmt.Text;
        code.codeValue3 = rdTravelSpec.SelectedValue;
        code.codeValue4 = rdReimb.SelectedValue;
        code.codeValue5 = rdAtt.SelectedValue;
        code.compCode = "ALL";
        code.description = txtAddExpDescr.Text;
        code.modifiedBy = Session["UserID"].ToString();
        code.modifiedOn = DateTime.Now.ToShortDateString();
        code.orgId = Session["OrgID"].ToString();
        string retStr = xms.addCodeValues(code, 2);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayAddExpItemMessage("Green", retStr);
            Session.Remove("dsItems");
            BindExpItemsAfterAdd(txtAddExpDescr.Text);
            txtCityVisited.Text = Session["City"].ToString();
            Session["TestExp"] = "1";
            RetainFields();
            GetAccountCodeByExpenseItem();
            ClearAddExpItemFields();
            popAddExpItem.Hide();
            popup_Edit.Show();
        }
        else
        {
            DisplayAddExpItemMessage("Red", retStr);
            popAddExpItem.Show();
            popup_Edit.Hide();
        }
    }

    protected void btnAddExpItemCancel_Click(object sender, EventArgs e)
    {
        popAddExpItem.Hide();
        popup_Edit.Show();
    }

    private void ClearAddExpItemFields()
    {
        txtAddExpCode.Text = txtAddExpAccCode.Text = txtAddExpDescr.Text = txtAddExpMaxLmt.Text = string.Empty;
    }

    void DisplayAddExpItemMessage(string color, string msg)
    {
        dvAddExpItemErr.Style["color"] = color;
        dvAddExpItemErr.InnerHtml = msg;
    }

    private void BindExpItemsAfterAdd(string expItemValue)
    {
        //DataSet dsItems = new DataSet();
        //string expItem = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["DepartmentCode"].ToString(), 1, string.Empty);
        //List<DeptVO> eItems = ser.Deserialize<List<DeptVO>>(expItem);
        //dsItems.Tables.Add(Utility.ConvertToDataTable(eItems));
        //Session["dsItems"] = dsItems;
        //ddlEditExpenseItem.DataSource = dsItems;
        //ddlEditExpenseItem.DataBind();
        //ddlEditExpenseItem.Items.Insert(0, "Please Select");
        //ddlEditExpenseItem.Items.FindByText("Please Select").Value = "0";
        //ddlEditExpenseItem.SelectedValue = expItemValue;
    }

    #endregion

    #region Create Item Code

    protected void AddItemCode(object sender, EventArgs e)
    {
        ClearItemFields();
        if (ddlExpItem.SelectedValue == "0")
            DisplayItemMessage("Red", "Please select Budget Classification before creating Item Code.");
        else
            lblBdgClssForItem.Text = ddlExpItem.SelectedValue.Trim();
        btnSaveAddItemCode.Attributes.Add("onclick", "javascript:return validatePOItemCode();");
        txtItemCode.Focus();
        popAddPO.Hide();
        popAddItemCode.Show();
    }

    protected void SaveItemCode(object sender, EventArgs e)
    {
        ItemCodesVO item = new ItemCodesVO();
        item.addedBy = ut.NullSafeInteger(Session["UserID"]);
        item.budgetClassification = lblBdgClssForItem.Text;
        item.compCode = Session["CompCode"].ToString();
        item.description = txtItemDescription.Text;
        item.itemCode = txtItemCode.Text;
        item.itemId = 0;
        item.itemNotes = txtItemNotes.Text;
        item.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        item.orgId = ut.NullSafeInteger(Session["OrgID"]);
        item.type = 1;
        item.deptCode = ddlDepartment.SelectedValue;
        item.qbAccId = ut.NullSafeInteger(hdnQBAcctID.Value);
        item.qbItemId = 0;
        string retStr = xms.addItemCodes(item);
        if (retStr.ToLower().Contains("succes"))
        {
            dvPOErrMsg.Style["color"] = "Green";
            dvPOErrMsg.InnerHtml = retStr;
            Session.Remove("dtExpItem");
            Session.Remove("ItemCodes");
            BindPoExpenseItems();
            BindItemsCode();
            ClearItemFields();
            lnkShowItemInventory.Style["display"] = "none";
            popAddItemCode.Hide();
            popAddPO.Show();
        }
        else
        {
            DisplayItemMessage("Red", retStr);
            popAddItemCode.Show();
        }
    }

    protected void CancelAddItemCode(object sender, EventArgs e)
    {
        ClearItemFields();
        popAddItemCode.Hide();
        popAddPO.Show();
    }

    private void DisplayItemMessage(string color, string msg)
    {
        dvItemErrMsg.Style["color"] = color;
        dvItemErrMsg.InnerHtml = msg;
    }

    private void ClearItemFields()
    {
        dvItemErrMsg.InnerHtml = lblBdgClssForItem.Text = txtItemCode.Text = txtItemDescription.Text = txtItemNotes.Text = string.Empty;
    }

    #endregion

    #region Item Inventory and Purchase History

    protected void gvItemInventory_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblLocation = (Label)e.Row.FindControl("lblLocation");
            Label lblTotalQty = (Label)e.Row.FindControl("lblTotalQty");
            GridView gvItemInventoryLot = (GridView)e.Row.FindControl("gvItemInventoryLot");
            DataTable dt = (DataTable)Session["ItemInventory"];
            DataView dv = new DataView(dt, "LocCode = '" + lblLocation.Text + "'", "LotNum", DataViewRowState.CurrentRows);

            // Display total qty in all the lots of the location
            double totQty = 0;
            for (int i = 0; i < dv.ToTable().Rows.Count; i++)
                totQty += ut.NullSafeDouble(dv.ToTable().Rows[i]["QtyLot"]);
            lblTotalQty.Text = totQty.ToString();

            InventoryVO inv = new InventoryVO();
            //inv.availUse
            //inv.allocatedJobs
            //inv.expItem
            //bind inner grid with list of lots of selected location
            gvItemInventoryLot.DataSource = dv;
            gvItemInventoryLot.DataBind();

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvItemInventoryLot_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private DataTable GetItemInventoryDetails(string itemCode)
    {
        string str = xms.getInvItemDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), itemCode);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["ItemInventory"] = dt;
        return dt;
    }

    protected void gvItemPurchHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

        }
        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    protected void DisplayItemPurchHistory(object sender, EventArgs e)
    {
        //Display currency symbol at unit price.
        GetCurrencySymbol();

        //load data grid
        if (Session["ItemPurchHist"] != null)
        {
            DataTable dt = (DataTable)Session["ItemPurchHist"];
            LoadItemPurchaseHist(dt);
        }
        else
            gvItemPurchHist.DataBind();

        popItemPurchHist.Show();
        popAddPO.Show();
    }

    private void LoadItemPurchaseHist(DataTable dt)
    {
        DataView dv = dt.DefaultView;
        dv.Sort = "unitPrice ASC";
        gvItemPurchHist.DataSource = dv;
        gvItemPurchHist.DataBind();
    }

    #endregion

    #region Item Agreement

    protected void lnkAgreement_Click(object sender, EventArgs e)
    {
        if (Session["VendItemAgreement"] != null)
        {
            DataTable dt = (DataTable)Session["VendItemAgreement"];
            txtAgreementCode.Text = dt.Rows[0]["agreementCode"].ToString();
            txtAgreementDescr.Text = dt.Rows[0]["agreementDescr"].ToString();
            txtDiscType.Text = (dt.Rows[0]["discntType"].ToString() == "0" ? "Price" : "Percentage");
            txtDiscVal.Text = dt.Rows[0]["discntValue"].ToString();
            txtValidFrom.Text = Convert.ToDateTime(dt.Rows[0]["validFrom"]).ToShortDateString();
            txtValidTo.Text = Convert.ToDateTime(dt.Rows[0]["validTo"]).ToShortDateString();
            txtListPrice.Text = dt.Rows[0]["listPrice"].ToString();
            txtOurPrice.Text = dt.Rows[0]["ourPrice"].ToString();
            chkIsVolDisc.Checked = (dt.Rows[0]["isVolumeDiscnt"].ToString() == "Y" ? true : false);
            if (chkIsVolDisc.Checked)
            {
                DataView dv = dt.DefaultView;
                dv.Sort = "fromQty ASC";
                gvAgrQtyBreaks.DataSource = dv;
                gvAgrQtyBreaks.DataBind();
                dvMsgVolDisc.Style["display"] = "block";
            }
            else
                dvMsgVolDisc.Style["display"] = "none";
            chkIsVolDisc.Enabled = false;
            lnkAgreement.Style["display"] = "block";
            popAddPO.Show();
            popAgreement.Show();
        }
    }

    #endregion

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCities(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["CitiesByRegion"];
        DataView dv = new DataView(dt, "CityZip LIKE '%" + prefixText + "%'", "CityZip", DataViewRowState.CurrentRows);
        string[] cities = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            cities[i] = dv.ToTable().Rows[i][6].ToString();
        return cities;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCitiesWithOutReg(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Cities"];
        DataView dv = new DataView(dt, "CodeKey LIKE '%" + prefixText + "%'", "CodeKey", DataViewRowState.CurrentRows);
        string[] cities = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            cities[i] = dv.ToTable().Rows[i]["CodeKey"].ToString();
        return cities;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetVendors(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["PreferredVendorList"];
        DataView dv = new DataView(dt, "PreferredVendor LIKE '%" + prefixText + "%'", "PreferredVendor", DataViewRowState.CurrentRows);
        string[] vendors = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            vendors[i] = dv.ToTable().Rows[i]["PreferredVendor"].ToString();
        return vendors;
    }
}