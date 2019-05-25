using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Data.OleDb;
using System.Text;

public partial class RecieptStore : System.Web.UI.Page
{
    #region public variables

    int reqId = 0;
    DataSet dsCnt = new DataSet();
    bool allReq = false;
    int ddlTypeVar = 0;
    private bool _refreshAlarms = false;
    DataSet ds = new DataSet();
    DataSet dsDrafts = new DataSet();
    DataTable dtSelDfts = new DataTable();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Private variables

    public int reqCnt = 0;
    public DataSet dsExpID = new DataSet();
    public DataSet dsSt = new DataSet();

    #endregion

    #region RecieptStore

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            else
            {
                if (!IsPostBack)
                {
                    txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                    btnGo.Attributes.Add("onclick", "return validateReceiptStoreGoClick('" + DateTime.Now.ToShortDateString() + "');");
                    Session.Remove("fStream");
                    Session.Remove("RctFileName");
                    Session.Remove("FileExt");
                    BindExpProcessTypes();
                    ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
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
                    }
                    else if (ddlTypeVar == 1)
                    {
                        if (Session["FDate_VreqPre"] != null)
                            txtFrom.Text = Session["FDate_VreqPre"].ToString();
                        else
                            txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
                        if (Session["TDate_VrecpPre"] != null)
                            txtTo.Text = Session["TDate_VrecpPre"].ToString();
                        else
                            txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
                    }
                    else if (ddlTypeVar == 2)
                    {
                        if (Session["FDate_VreqPo"] != null)
                            txtFrom.Text = Session["FDate_VreqPo"].ToString();
                        else
                            txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
                        if (Session["TDate_VrecpPo"] != null)
                            txtTo.Text = Session["TDate_VrecpPo"].ToString();
                        else
                            txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
                    }
                    LoadData();
                }
                if (Session["Cnt"] == "1")
                    Session["ReqID"] = ddlExpenseID.SelectedValue;
            }
        }

        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    void LoadData()
    {
        BindData();
    }

    private void BindExpProcessTypes()
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        hdnExpProcessType.Value = dt1.Rows[0]["CodeKey"].ToString();

        view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'ORGEXPTYPELIST'", "CodeID", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        ddlExpType.DataSource = dt;
        ddlExpType.DataBind();
        if (Session["Expense_Vreq"] != null)
            ddlExpType.SelectedValue = Session["Expense_Vreq"] == "newexpense" ? "ER" : Session["Expense_Vreq"] == "preapproved" ? "PA" : "PO";
        else
            ddlExpType.SelectedValue = hdnExpProcessType.Value;
    }

    void BindData()
    {
        //Bind filteration dropdown
        BindDropDowns(txtFrom.Text, txtTo.Text);
        //Get Selected RequestID
        GetRequestId();
        if (allReq == true)
            SortGrid();
        else
            BindEDGrid(reqId, 1);
    }

    void BindDropDowns(string from, string to)
    {
        int uID = ut.NullSafeInteger(Session["UserID"]);

        int cnt = xms.getReqCnt(uID, 3);
        if (cnt > 0)
        {
            Session["ReqCnt"] = cnt;
            ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
            string strReq = xms.getAttachmentReqIDs(uID, from, to, ddlTypeVar, ut.NullSafeInteger(Session["OrgID"]));
            List<DropDownVO> lstReq = ser.Deserialize<List<DropDownVO>>(strReq);
            dsExpID.Tables.Add(Utility.ConvertToDataTable(lstReq));

            if (dsExpID.Tables[0].Rows.Count > 0)
            {
                Session["ReqCnt"] = dsExpID.Tables[0].Rows.Count;
                ddlExpenseID.Visible = true;
                ddlExpenseID.DataSource = dsExpID;
                ddlExpenseID.DataValueField = dsExpID.Tables[0].Columns["CodeID"].ToString();
                ddlExpenseID.DataTextField = dsExpID.Tables[0].Columns["Description"].ToString();
                ddlExpenseID.DataBind();
                ddlExpenseID.Items.Insert(0, "All");
                ddlExpenseID.Items.FindByText("All").Value = "0";
                if (Session["Recpt_ExpID"] != null)
                    ddlExpenseID.SelectedValue = Session["Recpt_ExpID"].ToString();
                Session["ReqID"] = ddlExpenseID.SelectedValue;
                Session["Cnt"] = "1";
            }
            else
            {
                ddlExpenseID.Visible = false;
                Session["Cnt"] = null;
            }
        }
        else
            Session["ReqCnt"] = 0;
    }

    void BindEDGrid(int reqID, int type)
    {
        string strExpbyReq = xms.getExpDetailsAttByReqID(reqId.ToString(), ut.NullSafeInteger(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        gvRctStore.DataSource = dsSt;
        gvRctStore.DataBind();
    }

    protected void gvRctStore_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            dsSt = (DataSet)Session["dsSt"];
            HiddenField hdnStatusID = (HiddenField)e.Row.FindControl("hdnStatusID");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");

            //Display attachments upload option depending on status of the request
            if (hdnStatusID.Value == "3" || hdnStatusID.Value == "5" || hdnStatusID.Value == "6")
            {
                if (ut.NullSafeInteger(hdnAttCnt.Value) > 0)
                {
                    lnkShowAtt.Style.Add("background-image", "url(images/icons/attachment_blue_24x24.png)");
                    lnkShowAtt.Text = "";
                    lnkShowAtt.Width = 25;
                    lnkShowAtt.Height = 25;
                }
                else
                {
                    lnkShowAtt.Style.Add("background-image", "url(images/icons/add-icon.gif)");
                    lnkShowAtt.Text = "";
                    lnkShowAtt.Width = 26;
                    lnkShowAtt.Height = 25;
                }
            }
            else
                if (ut.NullSafeInteger(hdnAttCnt.Value) > 0)
                {
                    lnkShowAtt.Style.Add("background-image", "url(images/icons/attachment_blue_24x24.png)");
                    lnkShowAtt.Text = "";
                    lnkShowAtt.Width = 25;
                    lnkShowAtt.Height = 25;
                }
            //Display attachments upload option depending on status of the request

            //Display fields depending on exp type
            Label lblReqId = (Label)e.Row.FindControl("lblReqId");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");
            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
            if (ddlTypeVar == 2)
            {
                //Set width of column Vendor
                gvRctStore.Columns[0].HeaderStyle.Width = 150;
                gvRctStore.Columns[0].ItemStyle.Width = 150;
                gvRctStore.Columns[1].HeaderStyle.Width = 300;
                gvRctStore.Columns[1].ItemStyle.Width = 300;
                e.Row.Cells[0].Style["text-align"] = "left";
                e.Row.Cells[1].Style["text-align"] = "left";
                //Set width of column Vendor
                //Make fields Date and Amount hidden
                gvRctStore.Columns[3].Visible = false;
                gvRctStore.Columns[2].Visible = false;
                //Make fields Date and Amount hidden

                lblReqId.Text = DataBinder.Eval(e.Row.DataItem, "ourRefNo").ToString();
                lblExpItem.Text = DataBinder.Eval(e.Row.DataItem, "preferredVendor").ToString();
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
            }
            else
            {
                //Set width of column ExpenseItem
                gvRctStore.Columns[1].HeaderStyle.Width = 300;
                gvRctStore.Columns[1].ItemStyle.Width = 300;
                e.Row.Cells[0].Style["text-align"] = "right";
                e.Row.Cells[1].Style["text-align"] = "left";
                e.Row.Cells[2].Style["text-align"] = "left";
                e.Row.Cells[3].Style["text-align"] = "right";
                //Set width of column ExpenseItem

                //Make fields Date and Amount visible
                gvRctStore.Columns[3].Visible = true;
                gvRctStore.Columns[2].Visible = true;
                //Make fields Date and Amount visible
                lblReqId.Text = DataBinder.Eval(e.Row.DataItem, "reqId").ToString();
                lblExpItem.Text = DataBinder.Eval(e.Row.DataItem, "expItem").ToString();
                lblExpDate.Text = DataBinder.Eval(e.Row.DataItem, "expDate").ToString();
                if (ddlTypeVar == 0)
                    lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();//for Normal ExpenseRequest
                else
                    lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();//for PreApproval ExpenseRequest
            }
            //Display fields depending on exp type

            //Status icon display
            HiddenField hdStatus = (HiddenField)e.Row.FindControl("hdStatus");
            string status = hdStatus.Value;

            Label lblColor = (Label)e.Row.FindControl("lblColor");
            if (status.ToLower().Contains("approved"))
            {
                lblColor.Style.Add("background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = "Approved";
            }
            else if (status.ToLower() == "ap review")
            {
                lblColor.Style.Add("background-image", "url(images/icons/Chief.png)");
                lblColor.ToolTip = "AP Review";
            }
            else if (status.ToLower() == "rejected by manager" || status.ToLower() == "rejected by ap")
            {
                lblColor.Style.Add("background-image", "url(images/icons/delet_cancel.png)");
                lblColor.ToolTip = "Rejected";
            }
            else if (status.ToLower() == "saved")
            {
                lblColor.Style.Add("background-image", "url(images/icons/disk.png)");
                lblColor.ToolTip = "Saved";
            }
            else if (status.ToLower() == "preapproved")
            {
                lblColor.Style.Add("background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = "PreApproved";
            }
            else if (status.ToLower().Contains("cancel"))
            {
                lblColor.Style.Add("background-image", "url(images/icons/cancelled.png)");
                lblColor.ToolTip = "Cancelled";
            }
            else if (status.ToLower().Contains("park"))
            {
                lblColor.Style.Add("background-image", "url(images/icons/park.png)");
                lblColor.ToolTip = "Parked";
            }
            else
            {
                lblColor.Style.Add("background-image", "url(images/icons/user_suit.png)");
                lblColor.ToolTip = "Manager Review";
            }
            //Status icon display

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            //Display header text depending on exp type
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            LinkButton lnkExpenseItem = (LinkButton)e.Row.FindControl("lnkExpenseItem");
            LinkButton lnkDate = (LinkButton)e.Row.FindControl("lnkDate");
            LinkButton lnkActAmount = (LinkButton)e.Row.FindControl("lnkActAmount");
            ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
            if (ddlTypeVar == 2)
            {
                lnkRequestID.Text = "OurRefNo";
                lnkRequestID.CommandArgument = "ourRefNo";
                lnkExpenseItem.Text = "Vendor";
                lnkExpenseItem.CommandArgument = "preferredVendor";
                lnkDate.Text = "Req.Del.Date";
                lnkDate.CommandArgument = "reqDeliveryDate";
                lnkActAmount.Text = "Amount";
                lnkActAmount.CommandArgument = "PreAmount";
            }
            else
            {
                lnkRequestID.Text = "RequestID";
                lnkRequestID.CommandArgument = "reqId";
                lnkExpenseItem.Text = "Account";
                lnkExpenseItem.CommandArgument = "expItem";
                lnkDate.Text = "Date";
                lnkDate.CommandArgument = "expDate";
                lnkActAmount.Text = "Amount";
                if (ddlTypeVar == 0)
                    lnkActAmount.CommandArgument = "ActualAmount";
                else
                    lnkActAmount.CommandArgument = "PreAmount";
            }
            //Display header text depending on exp type

            //Sorting image display
            if (ddlTypeVar == 0)
            {
                if (Session["SortDir_RecpExp"] != null && Session["Control_RecpExp"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_RecpExp"].ToString());
                    if (Session["SortDir_RecpExp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                    else
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 1)
            {
                if (Session["SortDir_RecpPre"] != null && Session["Control_RecpPre"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_RecpPre"].ToString());
                    if (Session["SortDir_RecpPre"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                    else
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 2)
            {
                if (Session["SortDir_RecpPo"] != null && Session["Control_RecpPo"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_RecpPo"].ToString());
                    if (Session["SortDir_RecpPo"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            //Sorting image display
        }
    }

    protected void ddlExpenseID_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ut.NullSafeInteger(ddlExpenseID.SelectedValue) == 0)
            SortGrid();
        else
        {
            Session["ReqID"] = ddlExpenseID.SelectedValue;
            reqId = ut.NullSafeInteger(ddlExpenseID.SelectedValue);
            BindEDGrid(reqId, 1);
        }
        Session["Recpt_ExpID"] = ddlExpenseID.SelectedValue;

    }

    void GetRequestId()
    {
        if (ut.NullSafeInteger(ddlExpenseID.SelectedValue) == 0)
            allReq = true;
        else
            reqId = ut.NullSafeInteger(ddlExpenseID.SelectedValue);
    }

    protected void btnGo_Click(object sender, EventArgs e)
    {
        BindDropDowns(txtFrom.Text, txtTo.Text);
        ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            Session["FDate_VreqExp"] = txtFrom.Text;
            Session["TDate_VreqExp"] = txtTo.Text;
        }
        else
        {
            Session["FDate_VreqPre"] = txtFrom.Text;
            Session["TDate_VreqPre"] = txtTo.Text;
        }
        if (dsExpID.Tables[0].Rows.Count > 0)
        {
            GetRequestId();
            if (allReq == true)
                SortGrid();
            else
                BindEDGrid(reqId, 1);
        }
        else
        {
            newBtn.Visible = false;
            gvRctStore.DataBind();
        }
    }

    protected void rblExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
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
            txtKeywordSearch.Attributes.Add("placeholder", "Type to search expenses..");
        }
        else if (ddlTypeVar == 1)
        {
            if (Session["FDate_VreqPre"] != null)
                txtFrom.Text = Session["FDate_VreqPre"].ToString();
            else
                txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
            if (Session["TDate_VrecpPre"] != null)
                txtTo.Text = Session["TDate_VrecpPre"].ToString();
            else
                txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
            txtKeywordSearch.Attributes.Add("placeholder", "Type to search expenses..");
        }
        else if (ddlTypeVar == 2)
        {
            if (Session["FDate_VreqPo"] != null)
                txtFrom.Text = Session["FDate_VreqPo"].ToString();
            else
                txtFrom.Text = System.DateTime.Now.AddDays(-15).ToString("MM/dd/yyyy");
            if (Session["TDate_VrecpPo"] != null)
                txtTo.Text = Session["TDate_VrecpPo"].ToString();
            else
                txtTo.Text = System.DateTime.Now.AddDays(+15).ToString("MM/dd/yyyy");
            txtKeywordSearch.Attributes.Add("placeholder", "Type to search purchase orders..");
        }
        BindData();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            Session["Control_RecpExp"] = lnk.ID;
            if (Session["SortDir_RecpExp"] == null || Session["SortDir_RecpExp"].ToString() == "Desc")
                Session["SortDir_RecpExp"] = "Asc";
            else
                Session["SortDir_RecpExp"] = "Desc";
        }
        else if (ddlTypeVar == 1)
        {
            Session["Control_RecpPre"] = lnk.ID;
            if (Session["SortDir_RecpPre"] == null || Session["SortDir_RecpPre"].ToString() == "Desc")
                Session["SortDir_RecpPre"] = "Asc";
            else
                Session["SortDir_RecpPre"] = "Desc";
        }
        else if (ddlTypeVar == 2)
        {
            Session["Control_RecpPo"] = lnk.ID;
            if (Session["SortDir_RecpPo"] == null || Session["SortDir_RecpPo"].ToString() == "Desc")
                Session["SortDir_RecpPo"] = "Asc";
            else
                Session["SortDir_RecpPo"] = "Desc";
        }

        if (ddlTypeVar == 0)
            Session["SortExpr_RecpExp"] = e.CommandArgument;
        else if (ddlTypeVar == 1)
            Session["SortExpr_RecpPre"] = e.CommandArgument;
        else if (ddlTypeVar == 2)
            Session["SortExpr_RecpPo"] = e.CommandArgument;
        SortGrid();
    }

    void SortGrid()
    {
        int uID = ut.NullSafeInteger(Session["UserID"]);
        ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
        var strExp = xms.getExpDetailsForAtt(uID, Convert.ToDateTime(txtFrom.Text).ToShortDateString(), Convert.ToDateTime(txtTo.Text).ToShortDateString(), ut.NullSafeInteger(Session["OrgID"]), ddlTypeVar);
        List<ExpeseDetailsVO> lstExp = ser.Deserialize<List<ExpeseDetailsVO>>(strExp);
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstExp));
        Session["dsSt"] = dsSt;
        if (ddlTypeVar == 0)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);
            if ((Session["SortExpr_RecpExp"] != null) && Session["SortDir_RecpExp"] != null)
            {
                if (Session["SortExpr_RecpExp"].ToString() == "ActualAmount")
                {
                    DataTable dt = dsSt.Tables[0];
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                        dt2.ImportRow(dr);
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_RecpExp"].ToString() + " " + Session["SortDir_RecpExp"].ToString();
            }
            gvRctStore.DataSource = sortedView;
        }
        else if (ddlTypeVar == 1)
        {
            DataView sortedView = new DataView(dsSt.Tables[0]);
            if ((Session["SortExpr_RecpExp"] != null) && Session["SortDir_RecpPre"] != null)
            {
                if (Session["SortExpr_RecpExp"].ToString() == "PreAmount")
                {
                    DataTable dt = dsSt.Tables[0];
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                        dt2.ImportRow(dr);
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_RecpExp"].ToString() + " " + Session["SortDir_RecpPre"].ToString();
            }
            gvRctStore.DataSource = sortedView;
        }
        else if (ddlTypeVar == 2)
        {
            DataTable dtDistinct = dsSt.Tables[0].DefaultView.ToTable(true, "ourRefNo", "preferredVendor", "attCnt", "Status", "statusId", "reqId");
            dtDistinct.Columns.Add("expLineNo");
            dtDistinct.Columns.Add("expItem");
            dtDistinct.Columns.Add("PreAmount");
            DataView sortedView = new DataView(dtDistinct);

            if ((Session["SortExpr_RecpPo"] != null) && Session["SortDir_RecpPo"] != null)
            {
                if (Session["SortExpr_RecpPo"].ToString() == "PreAmount")
                {
                    DataTable dt = dtDistinct;
                    DataTable dt2 = dt.Clone();
                    dt2.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                    foreach (DataRow dr in dt.Rows)
                        dt2.ImportRow(dr);
                    dt2.AcceptChanges();
                    sortedView = dt2.DefaultView;
                }
                sortedView.Sort = Session["SortExpr_RecpPo"].ToString() + " " + Session["SortDir_RecpPo"].ToString();
            }
            gvRctStore.DataSource = sortedView;
        }
        else
            gvRctStore.DataSource = dsSt;
        gvRctStore.DataBind();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        if (ut.NullSafeInteger(Session["ReqCnt"]) > 0)
            LoadData();
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);
        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
            if (_refreshAlarms)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshAlarms", "setTimeout('refreshAlarms();', 800);", true);
        }
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        dvAtt.InnerHtml = string.Empty;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;

        HiddenField hdnStatusID = row.FindControl("hdnStatusID") as HiddenField;
        Session["statusID"] = hdnStatusID.Value;
        HiddenField hdnExpItem = row.FindControl("hdnExpItem") as HiddenField;
        Session["hdnReq"] = hdnReq.Value;
        Session["hdnSeq"] = hdnSeq.Value;
        Session["hdnExpItem"] = hdnExpItem.Value;

        Attachments(ut.NullSafeInteger(hdnSeq.Value), ut.NullSafeInteger(hdnReq.Value));
        ds = (DataSet)Session["AttchList"];
        gvAttchmnts.DataSource = ds;
        gvAttchmnts.DataBind();
        ddlTypeVar = ddlExpType.SelectedValue == "ER" ? 0 : ddlExpType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar != 2)
        {
            btnShowDraft.Visible = true;
            BindDrafts();
            if (dsDrafts.Tables[0].Rows.Count > 0)
                btnShowDraft.Style["display"] = "block";
            else
                btnShowDraft.Style["display"] = "none";
        }
        else
            btnShowDraft.Visible = false;
        if (hdnStatusID.Value == "3" || hdnStatusID.Value == "5" || hdnStatusID.Value == "6")
            dvMoreUpload.Style["display"] = "block";
        else
            dvMoreUpload.Style["display"] = "none";

        btnDeleteSelected.Attributes.Add("onclick", "javascript:return CheckAttDel();");
        popup.Show();
    }

    string Attachments(int seq, int req)
    {
        string str = xms.getAttachmentItems(req, seq, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
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

            int statusCnt = ut.NullSafeInteger(Session["statusID"]);
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
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup.Show();
    }

    protected void DelAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnattId = (HiddenField)row.Cells[0].FindControl("hdnattId");
        Session["hdnattId"] = hdnattId.Value;
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
            dvAtt.InnerHtml = retStr;
            dvAtt.Style["color"] = "Green";
            Attachments(ut.NullSafeInteger(Session["hdnSeq"]), ut.NullSafeInteger(Session["hdnReq"]));
            ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                gvAttchmnts.DataSource = ds;
                gvAttchmnts.DataBind();
                popup.Show();
            }
            else
                popup.Hide();
        }
        else
        {
            dvAtt.InnerText = "An error occured while deleting attachment. Please try again later.";
            dvAtt.Style["color"] = "Red";
        }
        popDelAtt.Hide();
        popup.Show();
    }

    protected void RetainAttDialog(object sender, EventArgs e)
    {
        Attachments(ut.NullSafeInteger(Session["hdnSeq"]), ut.NullSafeInteger(Session["hdnReq"]));
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fUpdMore.PostedFile.FileName);
        int len = fUpdMore.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".pdf")
        {
            if (len > 0 && len < 10485760)
            {
                Session["fStream"] = fUpdMore.FileContent;
                Session["FileExt"] = Path.GetExtension(fUpdMore.PostedFile.FileName);
                Session["RctFileName"] = fUpdMore.PostedFile.FileName;
            }
            else
                ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 2MB');", true);
        }
        else
            ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 2MB');", true);
    }

    byte[] SavedFileData()
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

    protected void UploadMoreFiles(object sender, EventArgs e)
    {
        byte[] fileData = null;
        string str = string.Empty;
        Random random = new Random();
        reqId = ut.NullSafeInteger(Session["hdnReq"]);
        int index = Session["RctFileName"].ToString().IndexOf('.');
        string fName = Session["RctFileName"].ToString().Substring(0, index);
        AttachmentVO att = new AttachmentVO();
        att.addedOn = DateTime.Now.ToShortDateString();
        att.attachmentId = 0;
        att.compCode = Session["CompCode"].ToString();
        att.expLineNo = ut.NullSafeInteger(Session["hdnSeq"]);
        att.fileName = reqId.ToString() + "_" + ut.NullSafeInteger(Session["hdnSeq"]) + "_" + Session["OrgID"].ToString() + "_" + Session["hdnExpItem"].ToString().Replace('/', '_') + "_" + fName + random.Next();
        att.orgId = ut.NullSafeInteger(Session["OrgID"]);
        att.orgName = string.Empty;
        att.requestId = reqId;
        fileData = SavedFileData();
        str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 2);
        if (str == "Y")
        {
            Session.Remove("dsSt");
            Attachments(ut.NullSafeInteger(Session["hdnSeq"]), ut.NullSafeInteger(Session["hdnReq"]));
            ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                gvAttchmnts.DataSource = ds;
                gvAttchmnts.DataBind();
            }
            SortGrid();
            dvAtt.Style["color"] = "Green";
            dvAtt.InnerHtml = "File uploaded successfully";
        }
        popup.Show();
    }

    protected void btnAttClose_Click(object sender, EventArgs e)
    {
        //SortGrid();
    }

    protected void DeleteSelectedAttachments(object sender, EventArgs e)
    {
        btnDeleteSelected.Style["display"] = "block";
        popup.Show();
        popDelAtt.Show();
    }

    #endregion

    #region Drafts

    protected void DisplayDrafts(object sender, EventArgs e)
    {
        dsDrafts = (DataSet)Session["dsDrafts"];
        gvDrafts.DataSource = dsDrafts;
        gvDrafts.DataBind();

        foreach (GridViewRow gvr in gvDrafts.Rows)
        {
            //Get a programmatic reference to the CheckBox control
            CheckBox cb = (CheckBox)gvr.FindControl("chkgvDft");
            ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
        }
        popDraftsAtt.Show();
        popup.Show();
    }

    void BindDrafts()
    {
        var strDrafts = xms.getDraftItems(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ut.NullSafeInteger(Session["UserID"]));
        List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(strDrafts);
        dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
        Session["dsDrafts"] = dsDrafts;
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
            hdnDftCnt.Value = dtSelDfts.Rows.Count.ToString();
            AddDrafts(dtSelDfts);
        }
        else
            Session.Remove("dtSelDfts");
        popup.Show();
    }

    void AddDrafts(DataTable dtSelDfts)
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
        img.requestId = ut.NullSafeInteger(Session["hdnReq"]);
        img.compCode = Session["Compcode"].ToString();
        img.attachmentId = 0;
        img.expLineNo = ut.NullSafeInteger(Session["hdnSeq"]);
        img.orgId = ut.NullSafeInteger(Session["OrgID"]);
        img.orgName = string.Empty;
        img.fileName = dtSelDfts.Rows[0]["SelFile"].ToString();
        img.draftIds = FinalDft;
        string ret = xms.addExpensewithDrafts(img);

        if (ret.ToLower().Contains("fail"))
        {
            dvDrftError.InnerHtml = ret;
            popDraftsAtt.Show();
        }
        else
        {
            Attachments(ut.NullSafeInteger(Session["hdnSeq"]), ut.NullSafeInteger(Session["hdnReq"]));
            ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                gvAttchmnts.DataSource = ds;
                gvAttchmnts.DataBind();
            }
            popDraftsAtt.Hide();
            DataSet dsDrafts = (DataSet)Session["dsDrafts"];
            if (dsDrafts.Tables[0].Rows.Count > 1)
                btnShowDraft.Visible = true;
            else
                btnShowDraft.Visible = false;
        }
    }

    protected void DownLdDrafts(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgName");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgName");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popDraftsAtt.Show();
        popup.Show();
    }

    protected void gvDrafts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnDrftName = (HiddenField)e.Row.FindControl("hdnDrftName");
            ImageButton imgDraft = (ImageButton)e.Row.FindControl("imgDraft");
            string extension = Path.GetExtension(hdnDrftName.Value);
            if (extension.ToLower().Contains("pdf"))
                imgDraft.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] strReq = xms.getExpDraftsById(hdnDrftName.Value, 2);
                string base64ImageString = ConvertBytesToBase64(strReq);
                imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    #endregion
}