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
using AjaxControlToolkit;

public partial class Quotations_VendQuote : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;
    string appString = "#";
    DataTable dt = new DataTable();
    DataTable dtQuote = new DataTable();
    string alternateProduct, altProdDesc, avilabilityDate, compCode, comments, currency, customerContact, customerName, deliveryDate, discount, discountAmt, discountCode,
        fromRespBy, itemId, itemIdDescr, lineNo, modifiedBy, orgId, ownerLoginId, price, quoteDate, quoteDesc, quoteId, reqDelDt, responseBy, shipLoc, shippingCost, status, tax1, tax2, tax3, toRespBy,
        total, trspMode, userId, vendBillId, vendProductDesc, vendProductId, vendProductQty, vendProductUom, vendShipId;

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
                txtFrom.Text = System.DateTime.Now.AddDays(-30).ToString("MM/dd/yyyy");
                txtTo.Text = System.DateTime.Now.AddDays(30).ToString("MM/dd/yyyy");
                Session.Remove("QuoteList");
                LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_VendQuote"] = lnk.ID;

        if (Session["SortDir_VendQuote"] == null || Session["SortDir_VendQuote"].ToString() == "Asc")
            Session["SortDir_VendQuote"] = "Desc";
        else
            Session["SortDir_VendQuote"] = "Asc";
        Session["SortExpr_VendQuote"] = e.CommandArgument;
        LoadData();
    }

    private void LoadData()
    {
        if (Session["QuoteList"] == null)
        {
            string str = xms.getVendQuoteHeader(ut.NullSafeInteger(Session["VendBillID"]), txtFrom.Text, txtTo.Text);
            List<QuoteVO> lst = ser.Deserialize<List<QuoteVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["QuoteList"] = dt;
        }
        else
            dt = (DataTable)Session["QuoteList"];
        if ((Session["SortExpr_VendQuote"] != null) && Session["SortDir_VendQuote"] != null)
        {
            DataView sortedView = new DataView(dt);
            sortedView.Sort = Session["SortExpr_VendQuote"].ToString() + " " + Session["SortDir_VendQuote"].ToString();
            gvQuoteList.DataSource = sortedView;
        }
        else
            gvQuoteList.DataSource = dt;
        gvQuoteList.DataBind();
        FillDropdowns(dt);
    }

    private void FillDropdowns(DataTable dtQuote)
    {
        DataView dv;
        if (ddlStatus.SelectedValue != "0")
            dv = new DataView(dtQuote, "Status = '" + ddlStatus.SelectedValue + "'", "Status", DataViewRowState.CurrentRows);
        else
            dv = dtQuote.DefaultView;
        ddlCustName.DataSource = dv;
        ddlCustName.DataTextField = "CustomerName";
        ddlCustName.DataValueField = "OrgId";
        ddlCustName.DataBind();
        gvQuoteList.DataSource = dv;
        gvQuoteList.DataBind();
        if (dv.ToTable().Rows.Count > 0)
        {
            ddlCustName.Items.Insert(0, "All");
            ddlCustName.Items.FindByText("All").Value = "0";
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

    protected void GetSelectedQuotesByCustName(object sender, EventArgs e)
    {
        DataView dv;
        dtQuote = (DataTable)Session["QuoteList"];
        if (ddlCustName.SelectedValue != "0")
            dv = new DataView(dtQuote, "OrgId = " + ddlCustName.SelectedValue, "CustomerName", DataViewRowState.CurrentRows);
        else if (ddlStatus.SelectedValue != "0")
            dv = new DataView(dtQuote, "Status = '" + ddlStatus.SelectedValue + "'", "Status", DataViewRowState.CurrentRows);
        else
            dv = dtQuote.DefaultView;
        gvQuoteList.DataSource = dv;
        gvQuoteList.DataBind();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("QuoteList");
        LoadData();
    }

    protected void gvQuoteList_RowDataBound(object sender, GridViewRowEventArgs e)
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
            if (Session["SortDir_VendQuote"] != null && Session["Control_VendQuote"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_VendQuote"].ToString());
                if (Session["SortDir_VendQuote"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
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

    protected void Edit(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return validateVendQuoteDetails();");
        btnSubmit.Attributes.Add("onclick", "javascript:return validateVendQuoteDetails();");
        //Get Selected row details
        ClearFields();
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkQuoteID = (LinkButton)row.FindControl("lnkQuoteID");
        HiddenField hdnOrgID = (HiddenField)row.FindControl("hdnOrgID");
        HiddenField hdnCompCode = (HiddenField)row.FindControl("hdnCompCode");
        hdnCurrDate.Value = DateTime.Now.ToShortDateString();
        LoadQuoteData(ut.NullSafeInteger(lnkQuoteID.Text), ut.NullSafeInteger(hdnOrgID.Value), hdnCompCode.Value);
    }

    private void LoadQuoteData(int quoteID, int orgID, string compCode)
    {
        dtQuote = (DataTable)Session["QuoteList"];
        DataView dvQuote = new DataView(dtQuote, "quoteId = " + quoteID + " and orgId = " + orgID + " and compCode = '" + compCode
            + "'", "quoteId", DataViewRowState.CurrentRows);

        //Get Header data based on selected QuoteID
        lblQuoteID.Text = dvQuote.ToTable().Rows[0]["quoteId"].ToString();
        txtQuoteDesc.Text = dvQuote.ToTable().Rows[0]["quoteDesc"].ToString();
        txtShipLoc.Text = dvQuote.ToTable().Rows[0]["shipLoc"].ToString();

        //Show Quote Status
        if (dvQuote.ToTable().Rows[0]["status"].ToString().ToLower().Contains("open"))
            ShowQuoteStatus(dvQuote.ToTable().Rows[0]["status"].ToString(), "Green");
        else
            ShowQuoteStatus(dvQuote.ToTable().Rows[0]["status"].ToString(), "Red");

        txtCustName.Text = dvQuote.ToTable().Rows[0]["customerName"].ToString();
        txtCustContact.Text = dvQuote.ToTable().Rows[0]["customerContact"].ToString();
        txtVendBillTo.Text = dvQuote.ToTable().Rows[0]["vendBillId"].ToString();
        txtVendShipTo.Text = dvQuote.ToTable().Rows[0]["vendShipId"].ToString();
        ddlCurrency.SelectedValue = dvQuote.ToTable().Rows[0]["currency"].ToString();
        txtDiscCode.Text = dvQuote.ToTable().Rows[0]["discountCode"].ToString();
        txtQuoteDt.Text = string.IsNullOrEmpty(dvQuote.ToTable().Rows[0]["quoteDate"].ToString()) ? string.Empty : Convert.ToDateTime(dvQuote.ToTable().Rows[0]["quoteDate"]).ToShortDateString();
        txtRespDt.Text = Convert.ToDateTime(dvQuote.ToTable().Rows[0]["responseBy"]).ToShortDateString();
        hdnQuoteOrgID.Value = dvQuote.ToTable().Rows[0]["orgId"].ToString();
        hdnQuoteCompCode.Value = dvQuote.ToTable().Rows[0]["compCode"].ToString();

        //Get Details data based on selected QuoteID  
        string str = xms.getVendQuoteDetails(ut.NullSafeInteger(lblQuoteID.Text), ut.NullSafeInteger(hdnQuoteOrgID.Value), hdnQuoteCompCode.Value);
        List<QuoteVO> lst = ser.Deserialize<List<QuoteVO>>(str);
        DataTable dtQuoteDt = Utility.ConvertToDataTable(lst);
        gvQuoteDetails.DataSource = dtQuoteDt;
        gvQuoteDetails.DataBind();
        Session["dtQuote"] = dtQuoteDt;

        //Load fields in details gridview
        SetGridData(dtQuoteDt);
        txtDiscCode.Focus();
        popQuote.Show();
    }

    private void SetGridData(DataTable dt)
    {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            Label lblLineNum = (Label)gvQuoteDetails.Rows[i].FindControl("lblLineNum");
            Label lblCustProd = (Label)gvQuoteDetails.Rows[i].FindControl("lblCustProd");
            Label lblCustProdDescr = (Label)gvQuoteDetails.Rows[i].FindControl("lblCustProdDescr");
            Label lblAltProd = (Label)gvQuoteDetails.Rows[i].FindControl("lblAltProd");
            TextBox txtComments = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtComments");
            TextBox txtVendProd = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtVendProd");
            TextBox txtVendProdDescr = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtVendProdDescr");
            Label lblCustQty = (Label)gvQuoteDetails.Rows[i].FindControl("lblCustQty");
            TextBox txtAvailQty = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtAvailQty");
            TextBox txtUnitPrice = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtUnitPrice");
            TextBox txtLineAmnt = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtLineAmnt");
            TextBox txtTax1 = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtTax1");
            TextBox txtTax2 = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtTax2");
            TextBox txtTax3 = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtTax3");
            TextBox txtShipCost = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtShipCost");
            TextBox txtDiscPercnt = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtDiscPercnt");
            TextBox txtDiscAmount = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtDiscAmount");
            Label lblLineTotal = (Label)gvQuoteDetails.Rows[i].FindControl("lblLineTotal");
            TextBox txtTRSPMode = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtTRSPMode");
            TextBox txtPromiseDt = (TextBox)gvQuoteDetails.Rows[i].FindControl("txtPromiseDt");
            Label lblRDD = (Label)gvQuoteDetails.Rows[i].FindControl("lblRDD");

            lblLineNum.Text = dt.Rows[i]["lineNo"].ToString();
            lblCustProd.Text = dt.Rows[i]["itemId"].ToString();
            lblCustProdDescr.Text = dt.Rows[i]["itemDesc"].ToString();
            lblAltProd.Text = dt.Rows[i]["alternateProduct"].ToString();
            txtComments.Text = dt.Rows[i]["comment"].ToString();
            txtVendProd.Text = dt.Rows[i]["vendProductId"].ToString();
            txtVendProdDescr.Text = dt.Rows[i]["vendProductDesc"].ToString();
            lblCustQty.Text = dt.Rows[i]["qty"].ToString();
            txtAvailQty.Text = dt.Rows[i]["vendProductQty"].ToString();
            txtUnitPrice.Text = dt.Rows[i]["price"].ToString();
            txtTax1.Text = dt.Rows[i]["tax1"].ToString();
            txtTax2.Text = dt.Rows[i]["tax2"].ToString();
            txtTax3.Text = dt.Rows[i]["tax3"].ToString();
            txtShipCost.Text = dt.Rows[i]["shippingCost"].ToString();
            txtDiscPercnt.Text = dt.Rows[i]["discount"].ToString();
            txtDiscAmount.Text = dt.Rows[i]["discountAmt"].ToString();
            lblLineTotal.Text = dt.Rows[i]["total"].ToString();
            txtTRSPMode.Text = dt.Rows[i]["trspMode"].ToString();
            txtPromiseDt.Text = dt.Rows[i]["avilabilityDate"].ToString();
            lblRDD.Text = Convert.ToDateTime(dt.Rows[i]["reqDelvryDate"]).ToShortDateString();
        }
        popQuote.Show();
    }

    protected void ReloadQuote(object sender, EventArgs e)
    {
        ClearFields();
        LoadQuoteData(ut.NullSafeInteger(lblQuoteID.Text), ut.NullSafeInteger(hdnQuoteOrgID.Value), hdnQuoteCompCode.Value);
    }

    protected void SaveQuote(object sender, EventArgs e)
    {
        SendDetails(1);
    }

    protected void SubmitDetails(object sender, EventArgs e)
    {
        SendDetails(2);
    }

    protected void CloseWindow(object sender, EventArgs e)
    {

    }

    private void SendDetails(int type)
    {
        foreach (GridViewRow row in gvQuoteDetails.Rows)
        {
            Label lblLineNum = (Label)row.FindControl("lblLineNum");
            TextBox txtComments = (TextBox)row.FindControl("txtComments");
            TextBox txtVendProd = (TextBox)row.FindControl("txtVendProd");
            TextBox txtVendProdDescr = (TextBox)row.FindControl("txtVendProdDescr");
            TextBox txtAvailQty = (TextBox)row.FindControl("txtAvailQty");
            TextBox txtUnitPrice = (TextBox)row.FindControl("txtUnitPrice");
            TextBox txtLineAmnt = (TextBox)row.FindControl("txtLineAmnt");
            TextBox txtTax1 = (TextBox)row.FindControl("txtTax1");
            TextBox txtTax2 = (TextBox)row.FindControl("txtTax2");
            TextBox txtTax3 = (TextBox)row.FindControl("txtTax3");
            TextBox txtShipCost = (TextBox)row.FindControl("txtShipCost");
            TextBox txtDiscPercnt = (TextBox)row.FindControl("txtDiscPercnt");
            TextBox txtDiscAmount = (TextBox)row.FindControl("txtDiscAmount");
            TextBox txtTRSPMode = (TextBox)row.FindControl("txtTRSPMode");
            TextBox txtPromiseDt = (TextBox)row.FindControl("txtPromiseDt");
            Label lblLineTotal = (Label)row.FindControl("lblLineTotal");
            Label lblAltProd = (Label)row.FindControl("lblAltProd");

            alternateProduct += lblAltProd.Text == string.Empty ? " " + appString : lblAltProd.Text + appString;
            altProdDesc += " " + appString;
            avilabilityDate += txtPromiseDt.Text + appString;
            comments += txtComments.Text == string.Empty ? " " + appString : txtComments.Text + appString;
            compCode += hdnQuoteCompCode.Value + appString;
            currency += ddlCurrency.SelectedValue + appString;
            customerContact += txtCustContact.Text + appString;
            customerName += txtCustName.Text + appString;
            deliveryDate += txtPromiseDt.Text + appString;
            discount += txtDiscPercnt.Text == string.Empty ? " " + appString : txtDiscPercnt.Text + appString;
            discountAmt += txtDiscAmount.Text == string.Empty ? " " + appString : txtDiscAmount.Text + appString;
            discountCode += txtDiscCode.Text == string.Empty ? " " + appString : txtDiscCode.Text + appString;
            fromRespBy += " " + appString;
            itemId += " " + appString;
            itemIdDescr += " " + appString;
            lineNo += lblLineNum.Text + appString;
            modifiedBy += Session["UserID"].ToString() + appString;
            orgId += hdnQuoteOrgID.Value + appString;
            ownerLoginId += Session["UserID"].ToString() + appString;
            price += txtUnitPrice.Text + appString;
            quoteDate += txtQuoteDt.Text + appString;
            quoteDesc += txtQuoteDesc.Text + appString;
            quoteId += lblQuoteID.Text.ToString() + appString;
            reqDelDt += " " + appString;
            responseBy += txtRespDt.Text + appString;
            shipLoc += txtShipLoc.Text + appString;
            shippingCost += txtShipCost.Text == string.Empty ? " " + appString : txtShipCost.Text + appString;
            status += lblQuoteStatus.Text + appString;
            tax1 += txtTax1.Text == string.Empty ? " " + appString : txtTax1.Text + appString;
            tax2 += txtTax2.Text == string.Empty ? " " + appString : txtTax2.Text + appString;
            tax3 += txtTax3.Text == string.Empty ? " " + appString : txtTax3.Text + appString;
            toRespBy += " " + appString;
            total += lblLineTotal.Text + appString;
            trspMode += txtTRSPMode.Text + appString;
            userId += Session["UserID"].ToString() + appString;
            vendBillId += Session["VendBillID"].ToString() + appString;
            vendProductDesc += txtVendProdDescr.Text + appString;
            vendProductId += txtVendProd.Text + appString;
            vendProductQty += txtAvailQty.Text + appString;
            vendProductUom += " " + appString;
            vendShipId += txtVendShipTo.Text + appString;
        }
        QuoteMulVO qt = new QuoteMulVO();
        qt.alternateProduct = alternateProduct.TrimEnd('#');
        qt.altProdDesc = altProdDesc.TrimEnd('#');
        qt.avilabilityDate = avilabilityDate.TrimEnd('#');
        qt.comment = comments.TrimEnd('#');
        qt.compCode = compCode.TrimEnd('#');
        qt.currency = currency.TrimEnd('#');
        qt.customerContact = customerContact.TrimEnd('#');
        qt.customerName = customerName.TrimEnd('#');
        qt.deliveryDate = deliveryDate.TrimEnd('#');
        qt.discount = discount.TrimEnd('#');
        qt.discountAmt = discountAmt.TrimEnd('#');
        qt.discountCode = discountCode.TrimEnd('#');
        qt.lineNo = lineNo.TrimEnd('#');
        qt.orgId = orgId.TrimEnd('#');
        qt.price = price.TrimEnd('#');
        qt.quoteDate = quoteDate.TrimEnd('#');
        qt.quoteDesc = quoteDesc.TrimEnd('#');
        qt.quoteId = quoteId.TrimEnd('#');
        qt.shipLoc = shipLoc.TrimEnd('#');
        qt.shippingCost = shippingCost.TrimEnd('#');
        qt.status = status.TrimEnd('#');
        qt.tax1 = tax1.TrimEnd('#');
        qt.tax2 = tax2.TrimEnd('#');
        qt.tax3 = tax3.TrimEnd('#');
        qt.total = total.TrimEnd('#');
        qt.trspMode = trspMode.TrimEnd('#');
        qt.userId = userId.TrimEnd('#');
        qt.vendBillId = vendBillId.TrimEnd('#');
        qt.vendProductDesc = vendProductDesc.TrimEnd('#');
        qt.vendProductId = vendProductId.TrimEnd('#');
        qt.vendProductQty = vendProductQty.TrimEnd('#');
        qt.vendProductUom = vendProductUom.TrimEnd('#');
        qt.vendShipId = vendShipId.TrimEnd('#');
        string retStr = xms.updateVendQuoteMul(qt);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            Session.Remove("QuoteList");
            LoadData();
        }
        else
        {
            DisplayMsg("Red", retStr);
        }
        popQuote.Show();
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    private void ShowQuoteStatus(string txt, string color)
    {
        lblQuoteStatus.Text = txt;
        lblQuoteStatus.Style["color"] = color;
    }

    protected void gvQuoteDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {

        }
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            TextBox txtAvailQty = (TextBox)e.Row.FindControl("txtAvailQty");
            TextBox txtUnitPrice = (TextBox)e.Row.FindControl("txtUnitPrice");
            TextBox txtLineAmnt = (TextBox)e.Row.FindControl("txtLineAmnt");
            TextBox txtTax1 = (TextBox)e.Row.FindControl("txtTax1");
            TextBox txtTax2 = (TextBox)e.Row.FindControl("txtTax2");
            TextBox txtTax3 = (TextBox)e.Row.FindControl("txtTax3");
            TextBox txtShipCost = (TextBox)e.Row.FindControl("txtShipCost");
            TextBox txtDiscPercnt = (TextBox)e.Row.FindControl("txtDiscPercnt");
            TextBox txtDiscAmount = (TextBox)e.Row.FindControl("txtDiscAmount");
            Label lblLineTotal = (Label)e.Row.FindControl("lblLineTotal");
            txtAvailQty.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtUnitPrice.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtTax1.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtTax2.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtTax3.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtShipCost.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
            txtDiscPercnt.Attributes.Add("onkeyup", "javascript:return CalculateLineTotalAmount(" + txtAvailQty.ClientID + ", " + txtUnitPrice.ClientID + ", " + txtLineAmnt.ClientID + ", " + txtTax1.ClientID + ", " + txtTax2.ClientID + ", " + txtTax3.ClientID + ", " + txtShipCost.ClientID + ", " + txtDiscPercnt.ClientID + ", " + txtDiscAmount.ClientID + ", " + lblLineTotal.ClientID + ");");
        }
    }

    private void ClearFields()
    {
        ddlCurrency.SelectedValue = "USD";
        txtDiscCode.Text = string.Empty;
    }

    #endregion//dcsdcs
}