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

public partial class Invoice : System.Web.UI.Page
{
    #region constructors
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dtPO = new DataTable();
    DataSet dsCopy = new DataSet();
    DataTable dtInv = new DataTable();
    DataTable dtfilterd = new DataTable();
    #endregion

    #region private properties
    private string accountCode, addedBy, amtPaid, cancelFlag, comments, compCode, description, detailsFlag, dueDate, expLineNo, invDate, invLineNo, invName, invNo, invoiceId,
            invPath, masterFlag, modifiedBy, orgId, ourRefNo, payMode, payModeDate, payModeDetail1, payModeDetail2, payModeDetail3, payModeDetail4, poAmount,
            poInvAmount, poLineSeq, preferredVendor, qtyReceived, quantity, requestId, totalInvAmt, type, shippingCost, taxAmount1;
    private bool _refreshExp = false;
    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        if (!IsPostBack)
        {
            Session.Remove("SortDir");
            Session.Remove("Control");
            Session.Remove("SortExpr");
            Session.Remove("dtInv");
            Session.Remove("hpf");
            if (Request.QueryString.Count > 0)
            {
                //if (!string.IsNullOrEmpty(Request.QueryString["in"]))
                //    dvNav.Style["display"] = "block";
                //else
                //    dvNav.Style["display"] = "none";
                InvMaster.Style["display"] = "none";
                InvFrmPOMaster.Style["display"] = "block";
            }
            else
            {
                //dvNav.Style["display"] = "none";
                InvMaster.Style["display"] = "block";
                InvFrmPOMaster.Style["display"] = "none";
            }
            hdnCompCode.Value = Session["CompCode"].ToString();
            hdnOrgID.Value = Session["OrgID"].ToString();
            LoadData(sender);
            txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
            btnBack.Attributes.Add("onclick", "javascript:history.go(-1)");
        }
    }

    protected void gvInvMaster_OnRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
            DataTable dt_temp = (DataTable)Session["FilterdTemp"];
            if (dt_temp.Rows[e.Row.RowIndex]["invPath"].ToString().Length > 0)
            {
                lnkShowAtt.Style.Add(" background-image", "url(images/icons/attachment_blue_24x24.png)");
                lnkShowAtt.Text = "";
                lnkShowAtt.Width = 25;
                lnkShowAtt.Height = 25;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("JamesScott");
        DataTable dt_temp = (DataTable)Session["FilterdTemp"];
        string str1 = enc.Encrypt(dt_temp.Rows[row.RowIndex]["invPath"].ToString(), key);
        Response.Redirect("downloadfile.aspx?typ=6&dwType=db&fn=" + str1);
    }

    protected void PreviousInv(object sender, EventArgs e)
    {
        hdnQrystrcnt.Value = "1";
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) - 1).ToString();
        DataTable dtApInv = (DataTable)Session["ApInv"];
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dtDistinct = (DataTable)Session["distinct"];
        GetApInvoiceDetails(dtApInv, index);
        //if (index == 0)
        //    btnPrev.Visible = false;
        //else
        //    btnPrev.Visible = true;
        //if (index == dtDistinct.Rows.Count - 1)
        //    btnNext.Visible = false;
        //else
        //    btnNext.Visible = true;
    }

    protected void NextInv(object sender, EventArgs e)
    {
        hdnQrystrcnt.Value = "1";
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) + 1).ToString();
        DataTable dtApInv = (DataTable)Session["ApInv"];
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dtDistinct = (DataTable)Session["distinct"];
        GetApInvoiceDetails(dtApInv, index);
        //if (index == 0)
        //    btnPrev.Visible = false;
        //else
        //    btnPrev.Visible = true;
        //if (index == dtDistinct.Rows.Count - 1)
        //    btnNext.Visible = false;
        //else
        //    btnNext.Visible = true;
    }

    protected void Edit(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        foreach (GridViewRow gvr in gvInvMaster.Rows)
            gvr.Style["background-color"] = "none";

        row.Style["background-color"] = "#B0E2FF";
        DataTable dtApInv = (DataTable)Session["ApInv"];
        GetApInvoiceDetails(dtApInv, row.RowIndex);
    }

    protected void SaveInvoiceDetails(object sender, EventArgs e)
    {
        if (fupdInv.HasFile)
            UploadInvoice();
        if (ut.NullSafeDouble(txtInvRemAlloc.Text) > 0)
        {
            lblAlertText.Text = "You cannot save as Remaining Allocated amount is more than zero. Please add more lines.";
            hdnDispAlert.Value = "RemExceeded";
            DisplayButtons(false, true, "btnClose");
            popAlert.Show();
        }
        else
            SaveInvDetails();
    }

    protected void ClearInvoiceData(object sender, EventArgs e)
    {
        if (fupdInv.HasFile)
            UploadInvoice();
        lblAlertText.Text = "Are you sure you want to clear all the data?";
        hdnDispAlert.Value = "ClearData";
        DisplayButtons(true, false, "btnNo");
        popAlert.Show();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("dtInv");
        Session.Remove("hpf");
        ClearFields();
        LoadData(null);
    }

    protected void ddlInvVendors_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (fupdInv.HasFile)
            UploadInvoice();
        if (gvInvDetails.Rows.Count > 0)
        {
            hdnDispAlert.Value = "VendorChange";
            lblAlertText.Text = "Current changes will be lost if you select a new Vendor. <br/>Are you sure you want to continue?";
            DisplayButtons(true, false, "btnNo");
            popAlert.Show();
        }
        else
        {
            BindInvGrid();
            //BindPONumbers();
        }
    }

    protected void ConfirmChanges(object sender, EventArgs e)
    {
        if (hdnDispAlert.Value.ToLower() == "vendorchange")
        {
            txtInvRemAlloc.Text = txtInvAmount.Text;
            //BindPONumbers();
            Session.Remove("dtInv");
            BindInvGrid();
            //gvInvDetails.DataBind();
        }
        else if (hdnDispAlert.Value.ToLower() == "cleardata")
        {
            txtInvRemAlloc.Text = txtInvAmount.Text;
            Session.Remove("dtInv");
            gvInvDetails.DataBind();
        }
        else if (hdnDispAlert.Value.ToLower() == "remexceeded")
            SaveInvDetails();
        else if (hdnDispAlert.Value.ToLower() == "addseq")
        {
            CloneDataRow("Y");
        }
        else if (hdnDispAlert.Value.ToLower() == "delrow")
        {
            string ourRefNo = string.Empty;
            int expLineNo = 0;
            int invSeq = 0;
            string pono = string.Empty;
            int reqId = 0;
            foreach (GridViewRow row in gvInvDetails.Rows)
            {
                if (row.RowIndex == ut.NullSafeInteger(hdnRowIndex.Value))
                {
                    HiddenField hdnEditPONO = (HiddenField)row.FindControl("hdnEditPONO");
                    HiddenField hdnReqID = (HiddenField)row.FindControl("hdnReqID");
                    Label lblEditInvPOLineNo = (Label)row.FindControl("lblEditInvPOLineNo");
                    Label lblEditInvPOLineSeq = (Label)row.FindControl("lblEditInvPOLineSeq");
                    expLineNo = ut.NullSafeInteger(lblEditInvPOLineNo.Text);
                    invSeq = ut.NullSafeInteger(lblEditInvPOLineSeq.Text);
                    pono = hdnEditPONO.Value;
                    reqId = ut.NullSafeInteger(hdnReqID.Value);
                }
            }
            string str = xms.deletePOInvoices(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), txtInvNumber.Text, pono, reqId, expLineNo, invSeq, ddlInvVendors.SelectedValue);
            if (str.ToLower().Contains("succes"))
            {
                DisplayMsg(str, "Green");
                DataTable dtApInv = new DataTable();
                Encryption enc = new Encryption();
                string key = enc.GenerateAPassKey("POExistInv");
                string req = enc.Decrypt((Request.QueryString["ir"]).Replace(' ', '+'), key);
                string vend = enc.Decrypt((Request.QueryString["pv"]).Replace(' ', '+'), key);
                string refNo = enc.Decrypt((Request.QueryString["ore"]).Replace(' ', '+'), key);
                var apInv = xms.getPOInvoiceDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), refNo, ut.NullSafeInteger(req), 0, 0, "0", vend);
                List<InvoiceVO> lst = ser.Deserialize<List<InvoiceVO>>(apInv);
                dtApInv = Utility.ConvertToDataTable(lst);
                DataTable dtDistinct = dtApInv.DefaultView.ToTable(true, "invNo");
                Session["distinct"] = dtDistinct;
                Session["ApInv"] = dtApInv;
                //if (dtDistinct.Rows.Count > 1)
                //{
                //    // dvNav.Style["display"] = "block";
                //    btnNext.Visible = true;
                //    btnPrev.Visible = false;
                //}
                //else
                //{
                //    //dvNav.Style["display"] = "none";
                //}
                hdnRowIndex.Value = "0";
                GetApInvoiceDetails(dtApInv, 0);
            }
            else
                DisplayMsg(str, "Red");
        }
    }

    protected void RejectChanges(object sender, EventArgs e)
    {
        if (hdnMisc.Value != "0")
            CloneDataRow("N");
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

    protected void gvInvDetails_OnRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblEditInvPOAmnt = (Label)e.Row.FindControl("lblEditInvPOAmnt");
            Label lblEditInvDescr = (Label)e.Row.FindControl("lblEditInvDescr");
            dtInv = (DataTable)Session["dtInv"];
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("poAmount"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("poAmount");
                dtInv.Rows[e.Row.RowIndex]["poAmount"] = dtInv.Rows[e.Row.RowIndex]["PreAmount"];
            }
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("Description"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("Description");
                dtInv.Rows[e.Row.RowIndex]["Description"] = dtInv.Rows[e.Row.RowIndex]["Comments"];
            }
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("PreAmount"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("PreAmount");
                dtInv.Rows[e.Row.RowIndex]["PreAmount"] = dtInv.Rows[e.Row.RowIndex]["poAmount"];
            }
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("Comments"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("Comments");
                dtInv.Rows[e.Row.RowIndex]["Comments"] = dtInv.Rows[e.Row.RowIndex]["Description"];
            }
            Session["dtInv"] = dtInv;
            if (hdnQrystrcnt.Value == "1")
            {
                lblEditInvPOAmnt.Text = DataBinder.Eval(e.Row.DataItem, "poAmount").ToString();
                lblEditInvDescr.Text = DataBinder.Eval(e.Row.DataItem, "Description").ToString();
            }
            else
            {
                lblEditInvPOAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lblEditInvDescr.Text = DataBinder.Eval(e.Row.DataItem, "Comments").ToString();
            }

            Label lblEditInvPONO = (Label)e.Row.FindControl("lblEditInvPONO");
            Label lblEditInvQnty = (Label)e.Row.FindControl("lblEditInvQnty");
            TextBox txtEditInvQntyRcv = (TextBox)e.Row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)e.Row.FindControl("txtEditInvAmnt");
            TextBox txtEditInvLineNo = (TextBox)e.Row.FindControl("txtEditInvLineNo");
            TextBox txtEditInvShipCst = (TextBox)e.Row.FindControl("txtEditInvShipCst");
            TextBox txtEditInvTaxAmnt1 = (TextBox)e.Row.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditNoPoAccCode = (TextBox)e.Row.FindControl("txtEditNoPoAccCode");
            HiddenField hdnUnitPrice = (HiddenField)e.Row.FindControl("hdnUnitPrice");
            HiddenField hdnCurrInvAmnt = (HiddenField)e.Row.FindControl("hdnCurrInvAmnt");
            HiddenField hdnRowCancelFlg = (HiddenField)e.Row.FindControl("hdnRowCancelFlg");
            CheckBox chk = (CheckBox)e.Row.FindControl("chk");
            if (hdnQrystrcnt.Value == "1")
            {
                txtEditInvQntyRcv.ReadOnly = true;
                txtEditInvTaxAmnt1.ReadOnly = true;
                txtEditInvShipCst.ReadOnly = true;
                txtEditInvAmnt.ReadOnly = true;
                txtEditInvLineNo.ReadOnly = true;
            }
            else
            {
                txtEditInvQntyRcv.ReadOnly = false;
                txtEditInvTaxAmnt1.ReadOnly = false;
                txtEditInvShipCst.ReadOnly = false;
                txtEditInvAmnt.ReadOnly = false;
                txtEditInvLineNo.ReadOnly = false;
            }
            txtEditInvAmnt.Attributes.Add("onkeyup", "javascript:return OnChangeInvAmount('" + txtEditInvAmnt.ClientID + "', '" + hdnCurrInvAmnt.ClientID + "', '" + hdnTotInvAmnt.ClientID + "', '" + txtInvRemAlloc.ClientID + "', '" + hdnInitialRem.ClientID + "', event);");
            txtEditInvAmnt.Attributes.Add("onchange", "javascript:return ValidateQtyRec('" + lblEditInvPOAmnt.Text + "', '" + lblEditInvQnty.Text + "', '" + txtEditInvQntyRcv.ClientID + "', '" + txtEditInvAmnt.ClientID + "', " + e.Row.RowIndex + ", '" + hdnUnitPrice.ClientID + "', '" + txtEditInvShipCst.ClientID + "', '" + txtEditInvTaxAmnt1.ClientID + "', '" + lblEditInvPONO.Text + "', '" + hdnRowCancelFlg.Value + "')");
            txtEditInvAmnt.Attributes.Add("onfocus", "javascript:return CaptureInvAmnt('" + txtEditInvAmnt.ClientID + "')");
            txtEditInvAmnt.Attributes.Add("autocomplete", "off");
            txtEditInvQntyRcv.Attributes.Add("autocomplete", "off");
            txtEditInvLineNo.Attributes.Add("autocomplete", "off");
            txtEditInvLineNo.Attributes.Add("onchange", "javascript:return ValidateInvLineNo('" + txtEditInvLineNo.ClientID + "');");
            txtEditNoPoAccCode.Attributes.Add("onkeyup", "javascript:return searchAcc('" + txtEditNoPoAccCode.ClientID + "')");
            chk.Attributes.Add("onclick", "javascript:Check_Click(this); CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir"] != null && Session["Control"] != null)
            {
                foreach (TableCell cell in e.Row.Cells)
                {
                    LinkButton sortLink = (LinkButton)cell.FindControl(Session["Control"].ToString());
                    if (Session["SortDir"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            CheckBox chkHeader = (CheckBox)e.Row.FindControl("chkHeader");
            chkHeader.Attributes.Add("onclick", "javascript:checkAll(this); CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
        }
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
        BindInvGrid();
    }

    //protected void AppendPOInvLine(object sender, EventArgs e)
    //{
    //    bool append = false;
    //    if (fupdInv.HasFile && Session["hpf"] == null)
    //    {
    //        if (ValidateInvoiceFile())
    //        {
    //            UploadInvoice();
    //            append = true;
    //        }
    //    }
    //    else
    //        append = true;
    //    if (append)
    //    {
    //        if (Session["dtInv"] == null)
    //            AddColumns();
    //        else
    //            dtInv = (DataTable)Session["dtInv"];

    //        if (!dtInv.Columns.Contains("CancelFlag"))
    //            dtInv.Columns.Add("CancelFlag");
    //        if (ddlInvPONO.SelectedValue.ToLower() == "nopo")
    //        {
    //            DataRow dr = dtInv.NewRow();
    //            dr["ourRefNo"] = "NOPO";
    //            dr["expLineNo"] = 0;
    //            dr["polineseq"] = "0";
    //            dr["accountCode"] = "";
    //            dr["comments"] = "";
    //            dr["preAmount"] = "0";
    //            dr["quantity"] = "1";
    //            dr["qtyReceived"] = "1";
    //            dr["poInvAmount"] = "0";
    //            dr["invLineNo"] = 0;
    //            dr["preferredVendor"] = ddlInvVendors.SelectedValue;
    //            dr["taxAmount1"] = "0";
    //            dr["shippingCost"] = "0";
    //            dr["shippingCost"] = "0";
    //            dtInv.Rows.Add(dr);
    //            dtInv.AcceptChanges();
    //            dtInv = AppendInvLineNumbers();
    //            Session["dtInv"] = dtInv;
    //            BindGridToDataTable();
    //            gvInvDetails.DataSource = dtInv;
    //            gvInvDetails.DataBind();
    //        }
    //        else
    //        {
    //            DataTable dt_temp = new DataTable();
    //            if (dtInv.Rows.Count > 0)
    //            {
    //                BindGridToDataTable();
    //                string expr = string.Empty;
    //                DataTable dtMain = GetMulReqData(ddlInvPONO.SelectedValue);
    //                dt_temp = dtMain.Clone();
    //                DataTable dt = new DataTable();
    //                for (int i = 0; i < dtMain.Rows.Count; i++)
    //                {
    //                    expr = "(OurRefNo='" + ddlInvPONO.SelectedItem.Text + "') and expLineNo<>'" + dtMain.Rows[i]["expLineNo"] + "' and polineseq<>'" + dtMain.Rows[i]["polineseq"] + "'";
    //                    DataView view1 = new DataView(dtInv, expr, "OurRefNo", DataViewRowState.CurrentRows);
    //                    dt = view1.ToTable();
    //                    for (int j = 0; j < dtInv.Rows.Count; j++)
    //                    {
    //                        if ((dtMain.Rows[i]["OurRefNo"].ToString() == dtInv.Rows[j]["OurRefNo"].ToString() && dtMain.Rows[i]["expLineNo"].ToString() == dtInv.Rows[j]["expLineNo"].ToString() && dtMain.Rows[i]["polineseq"].ToString() == dtInv.Rows[j]["polineseq"].ToString()))
    //                            dt_temp.ImportRow(dtInv.Rows[j]);
    //                    }
    //                }
    //            }
    //            else
    //            {
    //                string[] arr = new string[2];
    //                arr = ddlInvPONO.SelectedItem.Text.Split('-');
    //                string expr = "OurRefNo = '" + ddlInvPONO.SelectedItem.Text + "'";
    //                DataView view = new DataView(dtInv, expr, "OurRefNo", DataViewRowState.CurrentRows);
    //                dt_temp = view.ToTable();
    //            }
    //            if (dt_temp.Rows.Count > 0)
    //                DisplayMsg("PONO already selected", "Red");
    //            else
    //            {
    //                foreach (GridViewRow row in gvInvDetails.Rows)
    //                {
    //                    TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
    //                    TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
    //                    TextBox txtEditInvLineNo = (TextBox)row.FindControl("txtEditInvLineNo");
    //                    TextBox txtEditInvTaxAmnt1 = (TextBox)row.FindControl("txtEditInvTaxAmnt1");
    //                    TextBox txtEditInvShipCst = (TextBox)row.FindControl("txtEditInvShipCst");
    //                    dtInv.Rows[row.RowIndex]["qtyReceived"] = txtEditInvQntyRcv.Text;
    //                    dtInv.Rows[row.RowIndex]["poInvAmount"] = txtEditInvAmnt.Text;
    //                    dtInv.Rows[row.RowIndex]["invLineNo"] = txtEditInvLineNo.Text;
    //                    dtInv.Rows[row.RowIndex]["taxAmount1"] = txtEditInvTaxAmnt1.Text;
    //                    dtInv.Rows[row.RowIndex]["shippingCost"] = txtEditInvShipCst.Text;
    //                }
    //                BindInvGrid();
    //                DisplayMsg(string.Empty, string.Empty);
    //            }
    //            GetInvtotalAmount();
    //        }
    //        DisplayFieldsForNOPO();
    //        BindGridToDataTable();
    //        if (gvInvDetails.Rows.Count > 0)
    //        {
    //            if (ddlInvPONO.SelectedValue.ToLower() == "nopo")
    //                ((TextBox)gvInvDetails.Rows[0].FindControl("txtEditNoPoAccCode")).Focus();
    //            else
    //                ((TextBox)gvInvDetails.Rows[0].FindControl("txtEditInvQntyRcv")).Focus();
    //        }
    //    }
    //}

    #endregion

    #region private members

    private void LoadData(object sender)
    {
        BindVendors();
        GetInvReasons();
        if (Request.QueryString.Count > 0)
        {
            hdnQrystrcnt.Value = "1";
            DataTable dtApInv = new DataTable();
            Encryption enc = new Encryption();
            string key = enc.GenerateAPassKey("POExistInv");
            string req = enc.Decrypt((Request.QueryString["ir"]).Replace(' ', '+'), key);
            string vend = enc.Decrypt((Request.QueryString["pv"]).Replace(' ', '+'), key);
            string refNo = enc.Decrypt((Request.QueryString["ore"]).Replace(' ', '+'), key);
            var apInv = xms.getPOInvoiceDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), refNo, ut.NullSafeInteger(req), 0, 0, "0", vend);
            List<InvoiceVO> lst = ser.Deserialize<List<InvoiceVO>>(apInv);
            dtApInv = Utility.ConvertToDataTable(lst);
            DataTable dtDistinct = dtApInv.DefaultView.ToTable(true, "invNo");
            List<string> lstInvIDs = new List<string>();
            Session["distinct"] = dtDistinct;
            Session["ApInv"] = dtApInv;
            hdnRowIndex.Value = "0";
            DataTable dt_temp = dtApInv.Clone();
            for (int i = 0; i < dtDistinct.Rows.Count; i++)
            {
                FilteredInvList(dtApInv, i);
                dt_temp.ImportRow(dtfilterd.Rows[0]);
            }
            Session["FilterdTemp"] = dt_temp;
            gvInvMaster.DataSource = dt_temp;
            gvInvMaster.DataBind();
            GetApInvoiceDetails(dtApInv, 0);
            gvInvMaster.Rows[0].Style["background-color"] = "#B0E2FF";
            InvMaster.Style["display"] = "none";
            InvFrmPOMaster.Style["display"] = "block";
            //btnApplyToPO.Visible = false;
            btnSaveInv.Visible = false;
            //btnClearInvData.Visible = false;
        }
        else
        {
            //btnApplyToPO.Visible = true;
            btnSaveInv.Visible = true;
            //btnClearInvData.Visible = true;
            InvMaster.Style["display"] = "block";
            InvFrmPOMaster.Style["display"] = "none";
            hdnQrystrcnt.Value = "0";
            ddlInvVendors.Enabled = true;
            txtInvNumber.Enabled = true;
            GetInvDetails();
            dvInvFile.Style["display"] = "none";
        }
        //btnApplyToPO.Attributes.Add("onclick", "javascript:return ValidateInvDetails('" + DateTime.Now.ToShortDateString() + "');");
        btnSaveInv.Attributes.Add("onclick", "javascript:return ValidateNOPOFields();");
        txtInvAmount.Attributes.Add("onkeyup", "javascript:return CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
        txtInvAmount.Attributes.Add("onchange", "javascript:return CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
        txtInvNumber.Attributes.Add("onchange", "javascript:return invDetails();");
        txtInvRemAlloc.Attributes.Add("readonly", "readonly");
        txtInvRemAlloc.Style["background-color"] = "#ccc";
        //if (ddlInvVendors.Items.Count > 0)
        //    BindPONumbers();
        txtInvNumber.Focus();
    }

    private void FilteredInvList(DataTable dtApInv, int index)
    {
        DataTable dtDistinct = (DataTable)Session["distinct"];
        string exp = "invNo='" + dtDistinct.Rows[index]["invNo"].ToString() + "'";
        DataView view = new DataView(dtApInv, exp, "invNo", DataViewRowState.CurrentRows);
        dtfilterd = view.ToTable();
        Session["dtInv"] = dtfilterd;
    }

    private void GetApInvoiceDetails(DataTable dtApInv, int index)
    {
        DataTable dtDistinct = (DataTable)Session["distinct"];

        if (dtDistinct.Rows.Count > 0)
        {
            FilteredInvList(dtApInv, index);
            dtfilterd = (DataTable)Session["dtInv"];
            gvInvDetails.DataSource = dtfilterd;
            gvInvDetails.DataBind();
            txtInvNumber.Text = dtfilterd.Rows[0]["invNo"].ToString();
            txtInvAmount.Text = dtfilterd.Rows[0]["totalInvAmt"].ToString();
            txtInvDate.Text = dtfilterd.Rows[0]["invDate"].ToString();
            txtInvDueDate.Text = dtfilterd.Rows[0]["dueDate"].ToString();
            ddlInvVendors.SelectedValue = dtfilterd.Rows[0]["preferredVendor"].ToString();
            ddlInvVendors.Enabled = false;
            txtInvNumber.Enabled = false;
            //BindPONumbers();

            double amnt = 0;
            foreach (GridViewRow row1 in gvInvDetails.Rows)
            {
                TextBox txtEditInvAmnt = (TextBox)row1.FindControl("txtEditInvAmnt");
                amnt += ut.NullSafeDouble(txtEditInvAmnt.Text);
            }
            txtInvRemAlloc.Text = (ut.NullSafeDouble(txtInvAmount.Text) - amnt).ToString();
            hdnInitialRem.Value = txtInvRemAlloc.Text;
            if (dtfilterd.Rows[0]["invPath"].ToString().Length > 0)
            {
                Encryption enc = new Encryption();
                string key = enc.GenerateAPassKey("JamesScott");
                string str1 = enc.Encrypt(dtfilterd.Rows[0]["invPath"].ToString(), key);
                dvInvFile.Style["display"] = "block";
                dvInvFile.InnerHtml = "<a href='downloadfile.aspx?typ=6&dwType=db&fn=" + str1 + "' style='text-decoration:underline'>Invoice Attached</a>";
            }
            else
                dvInvFile.Style["display"] = "none";

            if (dtfilterd.Rows[0]["batchcnt"].ToString() == "0")
            {
                //btnApplyToPO.Visible = true;
                btnSaveInv.Visible = true;
                //btnClearInvData.Visible = true;
                foreach (GridViewRow row1 in gvInvDetails.Rows)
                {
                    ((TextBox)row1.FindControl("txtEditNoPoAccCode")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoDescr")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoAmnt")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoQnty")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditInvQntyRcv")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditInvAmnt")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditInvLineNo")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditInvShipCst")).Attributes.Remove("readonly");
                    ((TextBox)row1.FindControl("txtEditInvTaxAmnt1")).Attributes.Remove("readonly");
                }
            }
            else
            {
                //btnApplyToPO.Visible = false;
                btnSaveInv.Visible = false;
                //btnClearInvData.Visible = false;
                foreach (GridViewRow row1 in gvInvDetails.Rows)
                {
                    ((TextBox)row1.FindControl("txtEditNoPoAccCode")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoDescr")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoAmnt")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditNoPoQnty")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditInvQntyRcv")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditInvAmnt")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditInvLineNo")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditInvShipCst")).Attributes.Add("readonly", "readonly");
                    ((TextBox)row1.FindControl("txtEditInvTaxAmnt1")).Attributes.Add("readonly", "readonly");
                }
            }
        }
        else
            DisplayMsg("No Data to display", "Red");
    }

    private void BindVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);

        ddlInvVendors.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlInvVendors.DataBind();
        ddlInvVendors.Items.Insert(0, "Please select");
        ddlInvVendors.Items.FindByText("Please select").Value = "0";
        hdnSelectedVend.Value = ddlInvVendors.SelectedValue;
    }

    //private void BindPONumbers()
    //{
    //    var strExp = xms.getExpenses(Convert.ToInt32(Session["UserID"]), string.Empty, string.Empty, 3);
    //    List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
    //    dsCopy.Tables.Add(Utility.ConvertToDataTable(lstExp));

    //    string expression = "preferredVendor='" + ddlInvVendors.SelectedItem.Text + "'";
    //    DataView pref = new DataView(dsCopy.Tables[0], expression, "OurRefNo", DataViewRowState.CurrentRows);
    //    DataTable dtPref = pref.ToTable();
    //    DataTable dt = new DataTable();
    //    dt.Columns.Add("RequestID");
    //    dt.Columns.Add("OurRefNo");
    //    DataRow dr;
    //    for (int i = 0; i < dtPref.Rows.Count; i++)
    //    {
    //        dr = dt.NewRow();
    //        dr["OurRefNo"] = dtPref.Rows[i]["Purpose"].ToString() == string.Empty ? dtPref.Rows[i]["OurRefNo"].ToString() : dtPref.Rows[i]["OurRefNo"].ToString() + "--" + dtPref.Rows[i]["Purpose"].ToString();
    //        dr["RequestID"] = dtPref.Rows[i]["RequestID"].ToString();
    //        dt.Rows.Add(dr);
    //    }
    //    dr = dt.NewRow();
    //    dr["OurRefNo"] = "NOPO";
    //    dr["RequestID"] = "NOPO";
    //    dt.Rows.Add(dr);
    //    dt.AcceptChanges();

    //    if (dt.Rows.Count > 0)
    //    {
    //        ddlInvPONO.DataSource = dt;
    //        ddlInvPONO.DataBind();
    //        DisplayMsg(string.Empty, string.Empty);
    //    }
    //    else
    //        DisplayMsg("No PO exists with selected Vendor.", "Red");
    //}

    private void GetInvDetails()
    {
        ClearInvFields();
        string str = "[]";
        //str = xms.getInvoiceDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), lblInvPONum.Text, ut.NullSafeInteger(lblInvReqID.Text), ut.NullSafeInteger(lblInvPOLineNo.Text));
        if (str == "[]")
            gvInvDetails.DataBind();
        else
        {
            List<InvoiceVO> lst = ser.Deserialize<List<InvoiceVO>>(str);
            DataTable dtInv = Utility.ConvertToDataTable(lst);
            gvInvDetails.DataSource = dtInv;
            gvInvDetails.DataBind();
        }
    }

    private void GetInvReasons()
    {
        DataTable dtInvRsn = new DataTable();
        if (Session["InvReasons"] == null)
        {
            string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "INVAMTRSN");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dtInvRsn = Utility.ConvertToDataTable(lst);
            Session["InvReasons"] = dtInvRsn;
        }
        else
            dtInvRsn = (DataTable)Session["InvReasons"];
    }

    private void ClearInvFields()
    {
        txtInvNumber.Text = txtInvDate.Text = txtInvAmount.Text = txtInvDueDate.Text = string.Empty;
    }

    private void CloneDataRow(string cancelFlg)
    {
        DisplayMsg("Please adjust Qty Received", "Red");
        BindGridToDataTable();
        dtInv = (DataTable)Session["dtInv"];
        int index = ut.NullSafeInteger(hdnSeqRowIndex.Value);

        dtInv.Rows[index]["detailsFlag"] = "1";
        dtInv.Rows[index]["masterFlag"] = cancelFlg == "Y" ? "1" : "2";
        string selectedPONo = dtInv.Rows[index]["ourRefNo"].ToString();
        string selectedPOLineNo = dtInv.Rows[index]["expLineNo"].ToString();
        string expr = "ourRefNo = '" + selectedPONo + "' and expLineNo = " + selectedPOLineNo + " and  CancelFlag <> 'Y'";
        DataView view = new DataView(dtInv, expr, "ourRefNo", DataViewRowState.CurrentRows);
        int maxLineSeq = ut.NullSafeInteger(view.ToTable().Compute("MAX(polineseq)", string.Empty));

        string expr1 = "ourRefNo = '" + selectedPONo + "' and expLineNo = " + selectedPOLineNo;
        DataView view1 = new DataView(dtInv, expr1, "ourRefNo", DataViewRowState.CurrentRows);

        int newseqIndex = 0;
        int cnt = 0;
        for (int i = 0; i < dtInv.Rows.Count; i++)
        {
            if ((ut.NullSafeInteger(dtInv.Rows[i]["polineseq"]) == maxLineSeq + 1) && (dtInv.Rows[i]["expLineNo"].ToString() == selectedPOLineNo) && (dtInv.Rows[i]["ourRefNo"].ToString() == selectedPONo))
            {
                newseqIndex = i;
                cnt++;
            }
        }

        //Check whether duplicate row already exists or not to update data
        if (cnt > 0)
        {
            dtInv.Rows[newseqIndex]["polineseq"] = ut.NullSafeDouble(dtInv.Rows[index]["polineseq"]) + 1;
            dtInv.Rows[newseqIndex]["preAmount"] = ut.NullSafeDouble(ut.NullSafeDouble(dtInv.Rows[index]["preAmount"]) - ut.NullSafeDouble(dtInv.Rows[index]["poInvAmount"])).ToString("#.##");
            dtInv.Rows[newseqIndex]["quantity"] = ut.NullSafeDouble(dtInv.Rows[index]["quantity"]) - ut.NullSafeDouble(dtInv.Rows[index]["qtyReceived"]);
            dtInv.Rows[newseqIndex]["qtyReceived"] = 0;
            dtInv.Rows[newseqIndex]["poInvAmount"] = 0;
            dtInv.Rows[newseqIndex]["invLineNo"] = 0;
            dtInv.Rows[newseqIndex]["taxAmount1"] = 0;
            dtInv.Rows[newseqIndex]["shippingCost"] = 0;
        }
        else
        {
            DataTable dt = dtInv.Clone();
            dt.ImportRow(dtInv.Rows[index]);
            dt.Rows[0]["polineseq"] = ut.NullSafeDouble(dtInv.Rows[index]["polineseq"]) + 1;
            dt.Rows[0]["preAmount"] = ut.NullSafeDouble(ut.NullSafeDouble(dtInv.Rows[index]["preAmount"]) - ut.NullSafeDouble(dtInv.Rows[index]["poInvAmount"])).ToString("#.##");
            dt.Rows[0]["quantity"] = ut.NullSafeDouble(dtInv.Rows[index]["quantity"]) - ut.NullSafeDouble(dtInv.Rows[index]["qtyReceived"]);
            dt.Rows[0]["qtyReceived"] = 0;
            dt.Rows[0]["poInvAmount"] = 0;
            dt.Rows[0]["invLineNo"] = 0;
            dt.Rows[0]["taxAmount1"] = 0;
            dt.Rows[0]["shippingCost"] = 0;
            dtInv.ImportRow(dt.Rows[0]);
            for (int i = 0; i < dtInv.Rows.Count; i++)
            {
                if (ut.NullSafeInteger(dtInv.Rows[i]["polineseq"]) == ut.NullSafeInteger(dtInv.Rows[index]["polineseq"]) + 1)
                    newseqIndex = i;
            }
        }
        dtInv.Rows[newseqIndex]["CancelFlag"] = cancelFlg == "Y" ? "Y" : "N";
        Session["dtInv"] = dtInv;
        gvInvDetails.DataSource = dtInv;
        gvInvDetails.DataBind();
        DisplayFieldsForNOPO();
        BindGridToDataTable();

        //Make gridview row highlighted if cancelflag is 'Y'
        foreach (GridViewRow gvRow in gvInvDetails.Rows)
        {
            TextBox txtEditInvQntyRcv = (TextBox)gvRow.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)gvRow.FindControl("txtEditInvAmnt");
            TextBox txtEditInvLineNo = (TextBox)gvRow.FindControl("txtEditInvLineNo");
            TextBox txtEditInvTaxAmnt1 = (TextBox)gvRow.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditInvShipCst = (TextBox)gvRow.FindControl("txtEditInvShipCst");
            HiddenField hdnRowAdded = (HiddenField)gvRow.FindControl("hdnRowAdded");
            hdnRowAdded.Value = dtInv.Rows[gvRow.RowIndex]["CancelFlag"].ToString();
            if (dtInv.Rows[gvRow.RowIndex]["CancelFlag"].ToString().ToLower() == "y")
            {
                HiddenField hdnCancelledRow = (HiddenField)gvRow.FindControl("hdnCancelledRow");

                gvRow.Style["background-color"] = "#FFCCCC";
                gvRow.ToolTip = "Row Cancelled";
                txtEditInvQntyRcv.Attributes.Add("readonly", "readonly");
                txtEditInvAmnt.Attributes.Add("readonly", "readonly");
                txtEditInvLineNo.Attributes.Add("readonly", "readonly");
                txtEditInvTaxAmnt1.Attributes.Add("readonly", "readonly");
                txtEditInvShipCst.Attributes.Add("readonly", "readonly");
                txtEditInvQntyRcv.Style["background-color"] = "#ccc";
                txtEditInvAmnt.Style["background-color"] = "#ccc";
                txtEditInvLineNo.Style["background-color"] = "#ccc";
                txtEditInvTaxAmnt1.Style["background-color"] = "#ccc";
                txtEditInvShipCst.Style["background-color"] = "#ccc";
                hdnCancelledRow.Value = "Y";
            }
            else if (dtInv.Rows[gvRow.RowIndex]["CancelFlag"].ToString().ToLower() == "n")
            {
                txtEditInvQntyRcv.Attributes.Add("readonly", "readonly");
                txtEditInvAmnt.Attributes.Add("readonly", "readonly");
                txtEditInvLineNo.Attributes.Add("readonly", "readonly");
                txtEditInvTaxAmnt1.Attributes.Add("readonly", "readonly");
                txtEditInvShipCst.Attributes.Add("readonly", "readonly");
                txtEditInvQntyRcv.Style["background-color"] = "#ccc";
                txtEditInvAmnt.Style["background-color"] = "#ccc";
                txtEditInvLineNo.Style["background-color"] = "#ccc";
                txtEditInvTaxAmnt1.Style["background-color"] = "#ccc";
                txtEditInvShipCst.Style["background-color"] = "#ccc";
            }
        }
    }

    private void UploadInvoice()
    {
        HttpPostedFile hpf = fupdInv.PostedFile;
        string vendName = ddlInvVendors.SelectedValue.Replace(".", "");
        vendName = vendName.Replace("&", "");
        vendName = vendName.Replace("/", "");
        vendName = vendName.Replace("\\", "");
        vendName = vendName.Replace(";", "");
        vendName = vendName.Replace(":", "");
        vendName = vendName.Replace(",", "");
        int index = hpf.FileName.IndexOf('.');
        string fName = vendName + '_' + txtInvNumber.Text;
        hdnInvFileName.Value = fName;
        Session["hpf"] = hpf;
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("JamesScott");
        string str = enc.Encrypt(hdnInvFileName.Value, key);
        dvInvFile.InnerHtml = "<a href='downloadfile.aspx?typ=6&dwType=loc&fn=" + str + "' style='text-decoration:underline'>Invoice Attached</a>";
        dvInvFile.Style["display"] = "block";
    }

    private byte[] SavedFileData()
    {
        byte[] fileData = null;
        HttpPostedFile hpf = (HttpPostedFile)Session["hpf"];
        string ext = Path.GetExtension(hpf.FileName);
        if (ext.ToLower() == ".pdf")
        {
            int fileSize;
            //Uploading a file browser->web server
            //get file size (theFile is a VS "file field" component )
            fileSize = hpf.ContentLength;
            //get file as binary stream
            Stream fileStream = hpf.InputStream;
            //create byte array to keep file as bytes
            fileData = new byte[fileSize];
            //load array from stream
            fileStream.Read(fileData, 0, 2097152);
            hdnInvFileType.Value = "2";
        }
        else
        {
            using (var binaryReader = new BinaryReader(hpf.InputStream))
            {
                fileData = binaryReader.ReadBytes(hpf.ContentLength);
            }
            hdnInvFileType.Value = "1";
        }
        return fileData;
        //return Convert.ToBase64String(fileData);
    }

    private void ClearFields()
    {
        txtInvAmount.Text = txtInvDate.Text = txtInvDueDate.Text = txtInvNumber.Text = txtInvRemAlloc.Text = string.Empty;
    }

    private void DisplayButtons(bool IsYesNo, bool IsClose, string cancelCtrl)
    {
        btnYes.Visible = IsYesNo;
        btnNo.Visible = IsYesNo;
        btnClose.Visible = IsClose;
        popAlert.CancelControlID = cancelCtrl;
    }

    private void DisplayFieldsForNOPO()
    {
        int x = 1;
        foreach (GridViewRow row in gvInvDetails.Rows)
        {
            Label lblEditInvPONO = (Label)row.FindControl("lblEditInvPONO");
            TextBox txtEditNoPoAccCode = (TextBox)row.FindControl("txtEditNoPoAccCode");
            TextBox txtEditNoPoDescr = (TextBox)row.FindControl("txtEditNoPoDescr");
            TextBox txtEditNoPoAmnt = (TextBox)row.FindControl("txtEditNoPoAmnt");
            TextBox txtEditNoPoQnty = (TextBox)row.FindControl("txtEditNoPoQnty");

            Label lblEditInvAccCode = (Label)row.FindControl("lblEditInvAccCode");
            Label lblEditInvDescr = (Label)row.FindControl("lblEditInvDescr");
            Label lblEditInvPOAmnt = (Label)row.FindControl("lblEditInvPOAmnt");
            Label lblEditInvQnty = (Label)row.FindControl("lblEditInvQnty");
            if (lblEditInvPONO.Text.ToLower() == "nopo")
            {
                Label lblEditInvPOLineNo = (Label)row.FindControl("lblEditInvPOLineNo");
                txtEditNoPoAccCode.Visible = true;
                txtEditNoPoDescr.Visible = true;
                txtEditNoPoAmnt.Visible = true;
                txtEditNoPoQnty.Visible = true;
                lblEditInvAccCode.Visible = false;
                lblEditInvDescr.Visible = false;
                lblEditInvPOAmnt.Visible = false;
                lblEditInvQnty.Visible = false;
                lblEditInvPOLineNo.Text = x.ToString();
                x++;
            }
            else
            {
                txtEditNoPoAccCode.Visible = false;
                txtEditNoPoDescr.Visible = false;
                txtEditNoPoAmnt.Visible = false;
                txtEditNoPoQnty.Visible = false;
                lblEditInvAccCode.Visible = true;
                lblEditInvDescr.Visible = true;
                lblEditInvPOAmnt.Visible = true;
                lblEditInvQnty.Visible = true;
            }
        }
    }

    private void AddColumns()
    {
        dtInv.Columns.Add("ExtensionData", Type.GetType("System.String"));
        dtInv.Columns.Add("JCatCode", Type.GetType("System.String"));
        dtInv.Columns.Add("LNorm", Type.GetType("System.String"));
        dtInv.Columns.Add("actualAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("addedOn", Type.GetType("System.String"));
        dtInv.Columns.Add("agentName", Type.GetType("System.String"));
        dtInv.Columns.Add("amtSpent", Type.GetType("System.String"));
        dtInv.Columns.Add("apReview", Type.GetType("System.String"));
        dtInv.Columns.Add("automileageFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("bookedDate", Type.GetType("System.String"));
        dtInv.Columns.Add("citiesVstd", Type.GetType("System.String"));
        dtInv.Columns.Add("codeId", Type.GetType("System.String"));
        dtInv.Columns.Add("codeValue", Type.GetType("System.String"));
        dtInv.Columns.Add("compCode", Type.GetType("System.String"));
        dtInv.Columns.Add("currency", Type.GetType("System.String"));
        dtInv.Columns.Add("detailsFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("exp", Type.GetType("System.String"));
        dtInv.Columns.Add("expDate", Type.GetType("System.String"));
        dtInv.Columns.Add("expItem", Type.GetType("System.String"));
        dtInv.Columns.Add("expType", Type.GetType("System.String"));
        dtInv.Columns.Add("fromCity", Type.GetType("System.String"));
        dtInv.Columns.Add("fromDate", Type.GetType("System.String"));
        dtInv.Columns.Add("itinararyNo", Type.GetType("System.String"));
        dtInv.Columns.Add("jobCode", Type.GetType("System.String"));
        dtInv.Columns.Add("managerEmail", Type.GetType("System.String"));
        dtInv.Columns.Add("managerId", Type.GetType("System.String"));
        dtInv.Columns.Add("masterFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("orgId", Type.GetType("System.String"));
        dtInv.Columns.Add("otherCity", Type.GetType("System.String"));
        dtInv.Columns.Add("payMode", Type.GetType("System.String"));
        dtInv.Columns.Add("phaseCode", Type.GetType("System.String"));
        dtInv.Columns.Add("preApproved", Type.GetType("System.String"));
        dtInv.Columns.Add("purpose", Type.GetType("System.String"));
        dtInv.Columns.Add("reimbt", Type.GetType("System.String"));
        dtInv.Columns.Add("reqId", Type.GetType("System.String"));
        dtInv.Columns.Add("startDate", Type.GetType("System.String"));
        dtInv.Columns.Add("stateId", Type.GetType("System.String"));
        dtInv.Columns.Add("status", Type.GetType("System.String"));
        dtInv.Columns.Add("statusId", Type.GetType("System.String"));
        dtInv.Columns.Add("toCity", Type.GetType("System.String"));
        dtInv.Columns.Add("toDate", Type.GetType("System.String"));
        dtInv.Columns.Add("totTrip", Type.GetType("System.String"));
        dtInv.Columns.Add("otherToCity", Type.GetType("System.String"));
        dtInv.Columns.Add("otherFromCity", Type.GetType("System.String"));
        dtInv.Columns.Add("userId", Type.GetType("System.String"));
        dtInv.Columns.Add("companyCar", Type.GetType("System.String"));
        dtInv.Columns.Add("otherPlace", Type.GetType("System.String"));
        dtInv.Columns.Add("outOfCity", Type.GetType("System.String"));
        dtInv.Columns.Add("ourRefNo", Type.GetType("System.String"));
        dtInv.Columns.Add("expLineNo", Type.GetType("System.String"));
        dtInv.Columns.Add("polineseq", Type.GetType("System.String"));
        dtInv.Columns.Add("accountCode", Type.GetType("System.String"));
        dtInv.Columns.Add("comments", Type.GetType("System.String"));
        dtInv.Columns.Add("preAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("quantity", Type.GetType("System.String"));
        dtInv.Columns.Add("qtyReceived", Type.GetType("System.String"));
        dtInv.Columns.Add("poInvAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("invLineNo", Type.GetType("System.String"));
        dtInv.Columns.Add("preferredVendor", Type.GetType("System.String"));
        dtInv.Columns.Add("rem", Type.GetType("System.String"));
        dtInv.Columns.Add("poAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("taxAmount1", Type.GetType("System.String"));
        dtInv.Columns.Add("shippingCost", Type.GetType("System.String"));
        dtInv.Columns.Add("unitPrice", Type.GetType("System.String"));
    }

    private void SaveInvDetails()
    {
        string mFlag = "0";
        string appString = "###";
        string fileDataStr = string.Empty;
        byte[] fileData = null;
        dtInv = (DataTable)Session["dtInv"];
        BindGridToDataTable();

        if (Session["hpf"] != null)
            fileData = SavedFileData();

        for (int i = 0; i < dtInv.Rows.Count; i++)
        {
            HiddenField hdnCancelledRow = (HiddenField)gvInvDetails.Rows[i].FindControl("hdnCancelledRow");
            HiddenField hdnRowIndexCFg = (HiddenField)gvInvDetails.Rows[i].FindControl("hdnRowIndexCFg");
            CheckBox chk = (CheckBox)gvInvDetails.Rows[i].FindControl("chk");
            if (chk.Checked)
            {
                if (ut.NullSafeDouble(dtInv.Rows[i]["poInvAmount"]) > 0 && hdnCancelledRow.Value.ToLower() != "y")
                {
                    accountCode += dtInv.Rows[i]["accountCode"].ToString() + appString;
                    addedBy += Session["UserID_AP"].ToString() + appString;
                    amtPaid += "0" + appString;
                    //cancelFlag += dtInv.Rows[i]["CancelFlag"].ToString() == string.Empty ? " " + appString : dtInv.Rows[i]["CancelFlag"].ToString() + appString;
                    cancelFlag += dtInv.Rows[i]["masterFlag"].ToString() == string.Empty ? " " + appString : (dtInv.Rows[i]["masterFlag"].ToString() == "1" ? "Y" + appString : (dtInv.Rows[i]["masterFlag"].ToString() == "2" ? "N" + appString : " " + appString));
                    comments += dtInv.Rows[i]["comments"].ToString() == string.Empty ? " " + appString : dtInv.Rows[i]["comments"].ToString() + appString;
                    compCode += Session["CompCode"].ToString() + appString;
                    description += dtInv.Rows[i]["comments"].ToString() == string.Empty ? " " + appString : dtInv.Rows[i]["comments"].ToString() + appString;
                    detailsFlag += "1" + appString;
                    dueDate += txtInvDueDate.Text + appString;
                    expLineNo += dtInv.Rows[i]["expLineNo"].ToString() + appString;
                    // invarray += fileDataStr == string.Empty ? " " + appString : fileDataStr + appString;
                    invDate += txtInvDate.Text + appString;
                    invLineNo += dtInv.Rows[i]["invLineNo"].ToString() + appString;
                    invName += hdnInvFileName.Value == string.Empty ? " " + appString : hdnInvFileName.Value + appString;
                    invNo += txtInvNumber.Text + appString;
                    invoiceId += hdnInvFileType.Value == string.Empty ? "0" + appString : hdnInvFileType.Value + appString;
                    invPath += hdnInvFileName.Value == string.Empty ? " " + appString : hdnInvFileName.Value + appString;
                    if (mFlag == "0")
                    {
                        masterFlag += "1" + appString;
                        mFlag = "1";
                    }
                    else
                        masterFlag += "0" + appString;
                    modifiedBy += Session["UserID_AP"].ToString() + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    ourRefNo += dtInv.Rows[i]["ourRefNo"].ToString() + appString;
                    payMode += " " + appString;
                    payModeDate += " " + appString;
                    payModeDetail1 += " " + appString;
                    payModeDetail2 += " " + appString;
                    payModeDetail3 += " " + appString;
                    payModeDetail4 += " " + appString;
                    poAmount += dtInv.Rows[i]["preAmount"].ToString() == string.Empty ? " " : dtInv.Rows[i]["preAmount"].ToString() + appString;
                    poInvAmount += dtInv.Rows[i]["poInvAmount"].ToString() + appString;
                    poLineSeq += dtInv.Rows[i]["poLineSeq"].ToString() + appString;
                    preferredVendor += dtInv.Rows[i]["preferredVendor"].ToString() + appString;
                    qtyReceived += dtInv.Rows[i]["qtyReceived"].ToString() + appString;
                    quantity += dtInv.Rows[i]["quantity"].ToString() + appString;
                    requestId += dtInv.Rows[i]["ourRefNo"].ToString().ToLower() == "nopo" ? "0" + appString : dtInv.Rows[i]["reqId"].ToString() + appString;
                    totalInvAmt += txtInvAmount.Text + appString;
                    type += "1" + appString;
                    taxAmount1 += dtInv.Rows[i]["taxAmount1"].ToString() == "" ? "0" + appString : dtInv.Rows[i]["taxAmount1"].ToString() + appString;
                    shippingCost += dtInv.Rows[i]["shippingCost"].ToString() + appString;
                }
            }
        }

        InvoiceMulVO inv = new InvoiceMulVO();
        inv.accountCode = accountCode.Substring(0, accountCode.Length - 3);
        inv.addedBy = addedBy.Substring(0, addedBy.Length - 3);
        inv.amtPaid = amtPaid.Substring(0, amtPaid.Length - 3);
        inv.cancelFlag = cancelFlag.Substring(0, cancelFlag.Length - 3);
        inv.comments = comments.Substring(0, comments.Length - 3);
        inv.compCode = compCode.Substring(0, compCode.Length - 3);
        inv.description = description.Substring(0, description.Length - 3);
        inv.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
        inv.dueDate = dueDate.Substring(0, dueDate.Length - 3);
        inv.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
        inv.invarray = fileData;
        inv.invDate = invDate.Substring(0, invDate.Length - 3);
        inv.invLineNo = invLineNo.Substring(0, invLineNo.Length - 3);
        inv.invName = invName.Substring(0, invName.Length - 3);
        inv.invNo = invNo.Substring(0, invNo.Length - 3);
        inv.invoiceId = invoiceId.Substring(0, invoiceId.Length - 3);
        inv.invPath = invPath.Substring(0, invPath.Length - 3);
        inv.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
        inv.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
        inv.orgId = orgId.Substring(0, orgId.Length - 3);
        inv.ourRefNo = ourRefNo.Substring(0, ourRefNo.Length - 3);
        inv.payMode = payMode.Substring(0, payMode.Length - 3);
        inv.payModeDate = payModeDate.Substring(0, payModeDate.Length - 3);
        inv.payModeDetail1 = payModeDetail1.Substring(0, payModeDetail1.Length - 3);
        inv.payModeDetail2 = payModeDetail2.Substring(0, payModeDetail2.Length - 3);
        inv.payModeDetail3 = payModeDetail3.Substring(0, payModeDetail3.Length - 3);
        inv.payModeDetail4 = payModeDetail4.Substring(0, payModeDetail4.Length - 3);
        inv.poAmount = poAmount.Substring(0, poAmount.Length - 3);
        inv.poInvAmount = poInvAmount.Substring(0, poInvAmount.Length - 3);
        inv.polineseq = poLineSeq.Substring(0, poLineSeq.Length - 3);
        inv.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
        inv.qtyReceived = qtyReceived.Substring(0, qtyReceived.Length - 3);
        inv.quantity = quantity.Substring(0, quantity.Length - 3);
        inv.requestId = requestId.Substring(0, requestId.Length - 3);
        inv.totalInvAmt = totalInvAmt.Substring(0, totalInvAmt.Length - 3);
        inv.type = type.Substring(0, type.Length - 3);
        inv.taxAmount1 = taxAmount1.Substring(0, taxAmount1.Length - 3);
        inv.shippingCost = shippingCost.Substring(0, shippingCost.Length - 3);
        string retStr = xms.addPOInvoiceDetailsMul(inv);

        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg(retStr, "Green");
            Session["FromInv"] = "1";
            Response.Write("<script>setTimeout('redirectPage()', 3000)</script>");
        }
        else
            DisplayMsg(retStr, "Red");
    }

    private void GetInvtotalAmount()
    {
        double totAmnt = 0;
        foreach (GridViewRow row in gvInvDetails.Rows)
        {
            TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
            totAmnt += ut.NullSafeDouble(txtEditInvAmnt.Text);
        }
        hdnTotInvAmnt.Value = totAmnt.ToString();
    }

    private void BindInvGrid()
    {
        DataTable dt = GetMulReqData();
        dtInv = dt.Clone();
        if (!dtInv.Columns.Contains("CancelFlag"))
            dtInv.Columns.Add("CancelFlag");
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            dt.Rows[i]["qtyReceived"] = dt.Rows[i]["quantity"].ToString();
            dt.Rows[i]["poInvAmount"] = dt.Rows[i]["PreAmount"].ToString();
            dtInv.ImportRow(dt.Rows[i]);
        }
        dtInv = AppendInvLineNumbers();
        Session["dtInv"] = dtInv;

        if ((Session["SortExpr"] != null) && Session["SortDir"] != null)
        {
            DataView sortedView = new DataView(dtInv);
            sortedView.Sort = Session["SortExpr"].ToString() + " " + Session["SortDir"].ToString();
            gvInvDetails.DataSource = sortedView;
        }
        else
            gvInvDetails.DataSource = dtInv;
        gvInvDetails.DataBind();
    }

    private void BindGridToDataTable()
    {
        dtInv = (DataTable)Session["dtInv"];
        foreach (GridViewRow row in gvInvDetails.Rows)
        {
            Label lblEditInvPONO = (Label)row.FindControl("lblEditInvPONO");
            if (lblEditInvPONO.Text.ToLower() == "nopo")
            {
                TextBox txtEditNoPoAccCode = (TextBox)row.FindControl("txtEditNoPoAccCode");
                TextBox txtEditNoPoDescr = (TextBox)row.FindControl("txtEditNoPoDescr");
                TextBox txtEditNoPoAmnt = (TextBox)row.FindControl("txtEditNoPoAmnt");
                TextBox txtEditNoPoQnty = (TextBox)row.FindControl("txtEditNoPoQnty");
                Label lblEditInvPOLineNo = (Label)row.FindControl("lblEditInvPOLineNo");
                string[] arr = new string[2];
                arr = txtEditNoPoAccCode.Text.Split('-');
                txtEditNoPoAccCode.Text = arr[0];
                dtInv.Rows[row.RowIndex]["accountCode"] = txtEditNoPoAccCode.Text;
                dtInv.Rows[row.RowIndex]["comments"] = txtEditNoPoDescr.Text;
                dtInv.Rows[row.RowIndex]["preAmount"] = txtEditNoPoAmnt.Text;
                dtInv.Rows[row.RowIndex]["quantity"] = txtEditNoPoQnty.Text;
                dtInv.Rows[row.RowIndex]["expLineNo"] = lblEditInvPOLineNo.Text;
            }
            TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
            TextBox txtEditInvLineNo = (TextBox)row.FindControl("txtEditInvLineNo");
            TextBox txtEditInvTaxAmnt1 = (TextBox)row.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditInvShipCst = (TextBox)row.FindControl("txtEditInvShipCst");
            dtInv.Rows[row.RowIndex]["qtyReceived"] = txtEditInvQntyRcv.Text;
            dtInv.Rows[row.RowIndex]["poInvAmount"] = txtEditInvAmnt.Text;
            dtInv.Rows[row.RowIndex]["invLineNo"] = txtEditInvLineNo.Text;
            dtInv.Rows[row.RowIndex]["taxAmount1"] = txtEditInvTaxAmnt1.Text;
            dtInv.Rows[row.RowIndex]["shippingCost"] = txtEditInvShipCst.Text;
        }
        Session.Remove("dtInv");
        Session["dtInv"] = dtInv;
    }

    private void DisplayMsg(string msg, string color)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    private DataTable GetMulReqData()
    {
        string str = xms.getMultipleExpDetailsByReqId(ddlInvVendors.SelectedValue, Convert.ToInt32(Session["OrgID"]), 1);
        List<ExpeseDetailsVO> lst = ser.Deserialize<List<ExpeseDetailsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        return dt;
    }

    private DataTable AppendInvLineNumbers()
    {
        for (int i = 0; i < dtInv.Rows.Count; i++)
            dtInv.Rows[i]["invLineNo"] = i + 1;
        return dtInv;
    }

    private bool ValidateQtyRec()
    {
        int isValid = 0;
        foreach (GridViewRow row in gvInvDetails.Rows)
        {
            Label lblEditInvPOAmnt = (Label)row.FindControl("lblEditInvPOAmnt");
            Label lblEditInvQnty = (Label)row.FindControl("lblEditInvQnty");
            TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
            if ((ut.NullSafeDouble(lblEditInvPOAmnt.Text) > ut.NullSafeDouble(txtEditInvAmnt.Text)) && (ut.NullSafeDouble(lblEditInvQnty.Text) < ut.NullSafeDouble(txtEditInvQntyRcv.Text)))
            {
                isValid++;
                txtEditInvQntyRcv.Style["border"] = "1px solid Red";
            }
            else
                txtEditInvQntyRcv.Style["border"] = "1px solid #ccc";
        }
        if (isValid > 0)
        {
            DisplayMsg("Please adjust Quantity Received which should be less than Quantity", "Red");
            return false;
        }
        else
            return true;
    }

    private bool ValidateInvoiceFile()
    {
        bool Isvalid = false;
        string fileExt = Path.GetExtension(fupdInv.FileName);
        int fileContent = fupdInv.PostedFile.ContentLength;
        if (fileExt.ToLower() == ".pdf" || fileExt.ToLower() == ".jpg" || fileExt.ToLower() == ".jpeg" || fileExt.ToLower() == ".png" || fileExt.ToLower() == ".tif")
        {
            if (fileContent > 0 && fileContent < 2097152)
            {
                Isvalid = true;
                UploadInvoice();
            }
            else
            {
                Isvalid = false;
                DisplayMsg("Please upload file size greater than 0Mb not exceeding 2Mb", "Red");
            }
        }
        else
        {
            Isvalid = false;
            DisplayMsg("Please upload file of type .pdf/.jpg/.jpeg/.png/.tif", "Red");
        }
        return Isvalid;
    }

    #endregion

    #region webmethods

    [WebMethod]
    public static string[] searchAccCode(string accCode, string OrgID, string CompCode)
    {
        XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
        JavaScriptSerializer ser = new JavaScriptSerializer();
        string str = xms.searchAccCode(Convert.ToInt32(OrgID), CompCode, accCode);
        List<AccountCodeVO> acctCode = ser.Deserialize<List<AccountCodeVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(acctCode);
        string[] arr = new string[dt.Rows.Count];
        for (int i = 0; i < dt.Rows.Count; i++)
            arr[i] = dt.Rows[i]["accountCode"].ToString();
        return arr;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetInvReason(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["InvReasons"];
        DataView dv = new DataView(dt, "Description LIKE '%" + prefixText + "%'", "Description", DataViewRowState.CurrentRows);
        string[] invReasons = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            invReasons[i] = dv.ToTable().Rows[i][6].ToString();
        return invReasons;
    }

    #endregion
}