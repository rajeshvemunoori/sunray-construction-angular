using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.IO;
using System.Web.Services;

public partial class ViewInvc : System.Web.UI.Page
{
    #region constructors
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    DataSet dsInv = new DataSet();
    DataSet dsCopy = new DataSet();
    DataTable dtInv = new DataTable();
    Utility ut = new Utility();
    #endregion

    #region private properties
    string accountCode, addedBy, amtPaid, cancelFlag, compCode, description, detailsFlag, dueDate, expLineNo, invarray, invDate, invLineNo, invName, invNo, invoiceId,
         invPath, masterFlag, modifiedBy, orgId, ourRefNo, payMode, payModeDate, payModeDetail1, payModeDetail2, payModeDetail3, payModeDetail4, poAmount,
         poInvAmount, poLineSeq, preferredVendor, qtyReceived, quantity, requestId, totalInvAmt, type, shippingCost, taxAmount1, comments;

    byte[] fileBytes;
    private bool _refreshExp = false;
    #endregion

    # region viewInv

    #region protected events

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
                    LoadData();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void ddlPreVendor_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["FDate_VInv"] != null)
            txtFrom.Text = Session["FDate_VInv"].ToString();
        else
            txtFrom.Text = System.DateTime.Now.AddDays(-30).ToString("MM/dd/yyyy");
        if (Session["TDate_VInv"] != null)
            txtTo.Text = Session["TDate_VInv"].ToString();
        else
            txtTo.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
        Session["ViewInv_Vend"] = ddlPreVendor.SelectedValue;
        Session.Remove("dsInv");
        Session.Remove("ViewInv_InvNo");
        SortGrid();
    }

    protected void ddlInv_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlInv.SelectedValue == "0")
            SortGrid();
        else
            BindInvMainGrid();
        //Session["ViewInv_InvNo"] = ddlInv.SelectedValue;
    }

    protected void btnGo_click(object sender, EventArgs e)
    {
        Session.Remove("dsInv");
        Session["FDate_VInv"] = txtFrom.Text;
        Session["TDate_VInv"] = txtTo.Text;
        SortGrid();
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_VInvc"] = lnk.ID;

        if (Session["SortDir_VInvc"] == null || Session["SortDir_VInvc"].ToString() == "Desc")
            Session["SortDir_VInvc"] = "Asc";
        else
            Session["SortDir_VInvc"] = "Desc";

        Session["SortExpr_VInvc"] = e.CommandArgument;
        SortGrid();
    }

    protected void gvDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lnkShowAtt = (Label)e.Row.FindControl("lblAttDwnld");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            HiddenField hdnStatus = (HiddenField)e.Row.FindControl("hdnStatus");
            CheckBox chk = (CheckBox)e.Row.FindControl("chk");
            DataView dsInvAtt = new DataView();
            if (ddlInv.SelectedValue == "0")
            {
                dsInv = (DataSet)Session["dsInv"];
                dsInvAtt = dsInv.Tables[0].DefaultView;
            }
            else
                dsInvAtt = (DataView)Session["dsView"];
            if (hdnAttCnt.Value.Length > 0)
            {
                Encryption enc = new Encryption();
                string key = enc.GenerateAPassKey("JamesScott");
                DataTable dtview = dsInvAtt.ToTable();
                string str1 = enc.Encrypt(dtview.Rows[e.Row.RowIndex]["invPath"].ToString(), key);
                lnkShowAtt.Visible = true;
                lnkShowAtt.Text = "<a href='downloadfile.aspx?typ=6&dwType=db&fn=" + str1 + "' style='text-decoration:underline;'><img src='images/icons/attachment_blue_24x24.png' /></a>";
            }
            else
                lnkShowAtt.Visible = false;

            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "left";
            e.Row.Cells[4].Style["text-align"] = "right";
            e.Row.Cells[5].Style["text-align"] = "left";

            //set Ready for Payment flag
            if (!string.IsNullOrEmpty(hdnStatus.Value))
            {
                chk.Checked = true;
            }
            //set Ready for Payment flag

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_VInvc"] != null && Session["Control_VInvc"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_VInvc"].ToString());
                if (Session["SortDir_VInvc"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnReloadData_Click(object sender, EventArgs e)
    {
        LoadData();
    }

    protected void BatchData(object sender, EventArgs e)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "showProgressAppr() ;", true);
        Response.Redirect("Codes/BatchCreation.aspx");
    }

    protected void btnSaveInvStatus_Click(object sender, EventArgs e)
    {
        string appString = "###";
        int count = 0;

        DataTable dt = (DataTable)Session["dsCodes"];

        DataView dv = new DataView(dt)
        {
            RowFilter = "CodeID = 'STATUS' and CodeValue1 = '20'"
        };

        foreach (GridViewRow row in gvDetails.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                LinkButton lnkInvEdit = (LinkButton)row.FindControl("lnkInvEdit");
                HiddenField hdnPrefVendor = (HiddenField)row.FindControl("hdnPrefVendor");
                orgId += Session["OrgID"].ToString() + appString;
                compCode += Session["CompCode"].ToString() + appString;
                preferredVendor += hdnPrefVendor.Value + appString;
                invNo += lnkInvEdit.Text + appString;
                modifiedBy += Session["UserID"].ToString() + appString;
                comments += dv.ToTable().Rows[0]["CodeKey"].ToString() + appString;
                count++;
            }
        }

        if (count > 0)
        {
            string ret = xms.updateInvoiceStatusMul(orgId.Substring(0, orgId.Length - 3), compCode.Substring(0, compCode.Length - 3),
                preferredVendor.Substring(0, preferredVendor.Length - 3), invNo.Substring(0, invNo.Length - 3), comments.Substring(0, comments.Length - 3),
                modifiedBy.Substring(0, modifiedBy.Length - 3));
            if (ret.ToLower().Contains("succes"))
                DisplayMainMsg(ret, "Green");
            else
                DisplayMainMsg(ret, "Red");
        }
        else
            DisplayMainMsg("Please select invoice(s).", "Red");
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

    #region private members

    private void LoadData()
    {
        Session.Remove("dsView");
        Session.Remove("dsInv");
        Session.Remove("fStream");
        if (Session["FDate_VInv"] != null)
            txtFrom.Text = Session["FDate_VInv"].ToString();
        else
            txtFrom.Text = System.DateTime.Now.AddDays(-30).ToString("MM/dd/yyyy");
        if (Session["TDate_VInv"] != null)
            txtTo.Text = Session["TDate_VInv"].ToString();
        else
            txtTo.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
        BindPrefVendors();
        hdnCompCode.Value = Session["CompCode"].ToString();
        hdnOrgID.Value = Session["OrgID"].ToString();
        SortGrid();
    }

    private void BindPrefVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlPreVendor.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlPreVendor.DataBind();
        ddlPreVendor.Items.Insert(0, "ALL");
        ddlPreVendor.Items.FindByText("ALL").Value = "0";
        if (Session["FromInv"] == "1")
            ddlPreVendor.SelectedValue = Request.QueryString["vend"].Replace('~', '&');
        else
        {
            if (Session["ViewInv_Vend"] != null)
                ddlPreVendor.SelectedValue = Session["ViewInv_Vend"].ToString();
        }
        Session.Remove("FromInv");

    }

    private void BindInvMainGrid()
    {
        dsInv = (DataSet)Session["dsInv"];
        //if (Session["ViewInv_InvNo"] != null)
        //    ddlInv.SelectedValue = Session["ViewInv_InvNo"].ToString();
        string expr = "invNo = '" + ddlInv.SelectedValue + "'";
        DataView view = new DataView(dsInv.Tables[0], expr, "invNo", DataViewRowState.CurrentRows);
        gvDetails.DataSource = view;
        gvDetails.DataBind();
        Session["dsView"] = view;

    }

    private void SortGrid()
    {
        if (Session["dsInv"] == null)
        {
            var inv = xms.getPOInvoices(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlPreVendor.SelectedItem.Text, txtFrom.Text, txtTo.Text, string.Empty);
            List<InvoiceVO> lstInv = ser.Deserialize<List<InvoiceVO>>(inv);
            dsInv.Tables.Add(Utility.ConvertToDataTable(lstInv));
            Session["dsInv"] = dsInv;
        }
        else
            dsInv = (DataSet)Session["dsInv"];

        if (ddlInv.Items.Count > 0)
            ddlInv.Items.Clear();
        DataTable dtin = dsInv.Tables[0];
        ddlInv.DataSource = dtin.DefaultView.ToTable(true, "invNo");
        //ddlInv.DataSource = dsInv;
        ddlInv.DataBind();
        if (dsInv.Tables[0].Rows.Count > 0)
        {
            ddlInv.Items.Insert(0, "All");
            ddlInv.Items.FindByText("All").Value = "0";
        }
        //if (Session["ViewInv_InvNo"] != null)
        //    ddlInv.SelectedValue = Session["ViewInv_InvNo"].ToString();

        if ((Session["SortExpr_VInvc"] != null) && Session["SortDir_VInvc"] != null)
        {
            DataView sortedView = new DataView(dsInv.Tables[0]);
            sortedView.Sort = Session["SortExpr_VInvc"].ToString() + " " + Session["SortDir_VInvc"].ToString();
            gvDetails.DataSource = sortedView;
        }
        else
            gvDetails.DataSource = dsInv;

        gvDetails.DataBind();
    }

    private void DisplayMainMsg(string msg, string color)
    {
        dvMainMsg.Style["color"] = color;
        dvMainMsg.InnerHtml = msg;
        dvMainMsg.Style["display"] = "block";
    }

    #endregion

    #endregion

    # region EditInv

    #region protected events

    protected void Edit(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        Session.Remove("SortDir");
        Session.Remove("Control");
        Session.Remove("SortExpr");
        Session.Remove("dtInv");
        Session.Remove("InvFileStr");
        Session.Remove("ExistinvPath");
        Session.Remove("hpf");
        txtInvAmount.Focus();
        LoadData(sender);
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("dtInv");
        Session.Remove("hpf");
        LoadData(null);
        popInv.Show();
    }

    protected void ConfirmChanges(object sender, EventArgs e)
    {
        //if (hdnDispAlert.Value.ToLower() == "vendorchange")
        //{
        //    txtInvRemAlloc.Text = txtInvAmount.Text;
        //    //BindPONumbers();
        //    Session.Remove("dtInv");
        //    gvInvDetails.DataBind();
        //}
        //else if (hdnDispAlert.Value.ToLower() == "cleardata")
        //{
        //    txtInvRemAlloc.Text = txtInvAmount.Text;
        //    Session.Remove("dtInv");
        //    gvInvDetails.DataBind();
        //}
        if (hdnDispAlert.Value.ToLower() == "remexceeded")
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
            string req = string.Empty;
            foreach (GridViewRow row in gvInvDetails.Rows)
            {
                if (row.RowIndex == ut.NullSafeInteger(hdnRowIndex.Value))
                {
                    Label lblEditInvPOLineNo = (Label)row.FindControl("lblEditInvPOLineNo");
                    TextBox txtEditInvLineNo = (TextBox)row.FindControl("txtEditInvLineNo");
                    Label lblEditInvPOLineSeq = (Label)row.FindControl("lblEditInvPOLineSeq");
                    Label lblEditInvPONO = (Label)row.FindControl("lblEditInvPONO");
                    HiddenField hdnEditPONO = (HiddenField)row.FindControl("hdnEditPONO");
                    HiddenField hdnReqID = (HiddenField)row.FindControl("hdnReqID");
                    expLineNo = ut.NullSafeInteger(lblEditInvPOLineNo.Text);
                    invSeq = ut.NullSafeInteger(lblEditInvPOLineSeq.Text);
                    ourRefNo = lblEditInvPONO.Text;
                    req = hdnReqID.Value;
                }
            }
            string str = xms.deletePOInvoices(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), txtInvNumber.Text, ourRefNo, ut.NullSafeInteger(req), expLineNo, invSeq, txtVendor.Text);
            if (str.ToLower().Contains("succes"))
            {
                BindGridToDataTable();
                DisplayMsg(str, "Green");
                dtInv = (DataTable)Session["dtInv"];
                dtInv.Rows[ut.NullSafeInteger(hdnRowIndex.Value)].Delete();
                dtInv.AcceptChanges();
                //GetInvDetails();
                gvInvDetails.DataSource = dtInv;
                gvInvDetails.DataBind();
            }
            else
                DisplayMsg(str, "Red");
        }
        else if (hdnDispAlert.Value.ToLower() == "file")
            UploadInvoice();
        popInv.Show();
    }

    protected void RejectChanges(object sender, EventArgs e)
    {
        if (hdnMisc.Value != "0")
            CloneDataRow("N");
        popInv.Show();
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupdInv.PostedFile.FileName);
        int len = fupdInv.PostedFile.ContentLength;
        if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".tiff" || ext == ".pdf")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2MB, need to be 10485760 (10MB)
                UploadInvoice();
            else
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
                //dvMsg.InnerHtml = "Please upload file of size not exceeding 2MB.";
                //dvMsg.Style["color"] = "Red";
            }
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of type .png/.jpg/.jpeg/.tiff/.pdf');", true);
            //dvMsg.InnerHtml = "Please upload file of type .png/.jpg/.jpeg/.tiff/.pdf.";
            //dvMsg.Style["color"] = "Red";
        }
    }

    protected void SaveInvoiceDetails(object sender, EventArgs e)
    {
        if (ut.NullSafeDouble(txtInvRemAlloc.Text) > 0)
        {
            lblAlertText.Text = "You cannot save as Remaining Allocated amount is more than zero. Please add more lines.";
            hdnDispAlert.Value = "RemExceeded";
            DisplayButtons(false, true, "btnAlertclose");
            popAlert.Show();
        }
        else if (ut.NullSafeDouble(txtInvRemAlloc.Text) < 0)
        {
            lblAlertText.Text = "You cannot save as Remaining Allocated amount is less than zero. Please adjust invoice amount.";
            hdnDispAlert.Value = "RemExceeded";
            DisplayButtons(false, true, "btnAlertclose");
            popAlert.Show();
        }
        else
        {
            BindGridToDataTable();
            SaveInvDetails();
        }
        popInv.Show();
    }

    //protected void SortExpression_Inv(Object sender, CommandEventArgs e)
    //{
    //    LinkButton lnk = sender as LinkButton;
    //    Session["Control"] = lnk.ID;

    //    if (Session["SortDir"] == null || Session["SortDir"].ToString() == "Desc")
    //        Session["SortDir"] = "Asc";
    //    else
    //        Session["SortDir"] = "Desc";

    //    Session["SortExpr"] = e.CommandArgument;
    //    BindInvGrid();
    //}

    //protected void AppendPOInvLine(object sender, EventArgs e)
    //{
    //    if (Session["dtInv"] == null)
    //        AddColumns();
    //    else
    //        dtInv = (DataTable)Session["dtInv"];

    //    if (!dtInv.Columns.Contains("CancelFlag"))
    //        dtInv.Columns.Add("CancelFlag");
    //    if (ddlInvPONO.SelectedValue.ToLower() == "nopo")
    //    {
    //        DataRow dr = dtInv.NewRow();
    //        dr["ourRefNo"] = "NOPO";
    //        dr["expLineNo"] = 1;
    //        dr["polineseq"] = "0";
    //        dr["accountCode"] = "";
    //        dr["comments"] = "";
    //        dr["preAmount"] = "0";
    //        dr["quantity"] = "1";
    //        dr["qtyReceived"] = "1";
    //        dr["poInvAmount"] = "0";
    //        dr["invLineNo"] = 0;
    //        dr["preferredVendor"] = txtVendor.Text;
    //        dr["taxAmount1"] = "0";
    //        dr["shippingCost"] = "0";
    //        dr["shippingCost"] = "0";
    //        dr["description"] = "";
    //        dtInv.Rows.Add(dr);
    //        dtInv.AcceptChanges();
    //        dtInv = AppendInvLineNumbers();
    //        Session["dtInv"] = dtInv;
    //        BindGridToDataTable();
    //        gvInvDetails.DataSource = dtInv;
    //        gvInvDetails.DataBind();
    //    }
    //    else
    //    {
    //        BindGridToDataTable();
    //        string expr = string.Empty;
    //        DataTable dtMain = GetMulReqData(ddlInvPONO.SelectedValue);
    //        DataTable dt_temp = dtMain.Clone();
    //        DataTable dt = new DataTable();
    //        for (int i = 0; i < dtMain.Rows.Count; i++)
    //        {
    //            expr = "(OurRefNo='" + ddlInvPONO.SelectedItem.Text + "') and expLineNo<>'" + dtMain.Rows[i]["expLineNo"] + "' and polineseq<>'" + dtMain.Rows[i]["polineseq"] + "'";
    //            DataView view = new DataView(dtInv, expr, "OurRefNo", DataViewRowState.CurrentRows);
    //            dt = view.ToTable();
    //            for (int j = 0; j < dtInv.Rows.Count; j++)
    //            {
    //                if ((dtMain.Rows[i]["OurRefNo"].ToString() == dtInv.Rows[j]["OurRefNo"].ToString() && dtMain.Rows[i]["expLineNo"].ToString() == dtInv.Rows[j]["expLineNo"].ToString() && dtMain.Rows[i]["polineseq"].ToString() == dtInv.Rows[j]["polineseq"].ToString()))
    //                    dt_temp.ImportRow(dtInv.Rows[j]);
    //            }
    //        }
    //        if (dt_temp.Rows.Count > 0)
    //            DisplayMsg("PONO already selected", "Red");
    //        else
    //        {
    //            hdnAccessedFrom.Value = "loc";
    //            foreach (GridViewRow row in gvInvDetails.Rows)
    //            {
    //                TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
    //                TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
    //                TextBox txtEditInvLineNo = (TextBox)row.FindControl("txtEditInvLineNo");
    //                TextBox txtEditInvTaxAmnt1 = (TextBox)row.FindControl("txtEditInvTaxAmnt1");
    //                TextBox txtEditInvShipCst = (TextBox)row.FindControl("txtEditInvShipCst");
    //                Label lblEditInvDescr = (Label)row.FindControl("lblEditInvDescr");
    //                Label lblEditInvPOAmnt = (Label)row.FindControl("lblEditInvPOAmnt");
    //                dtInv.Rows[row.RowIndex]["qtyReceived"] = txtEditInvQntyRcv.Text;
    //                dtInv.Rows[row.RowIndex]["poInvAmount"] = txtEditInvAmnt.Text;
    //                dtInv.Rows[row.RowIndex]["invLineNo"] = txtEditInvLineNo.Text;
    //                dtInv.Rows[row.RowIndex]["taxAmount1"] = txtEditInvTaxAmnt1.Text;
    //                dtInv.Rows[row.RowIndex]["shippingCost"] = txtEditInvShipCst.Text;
    //                dtInv.Rows[row.RowIndex]["comments"] = lblEditInvDescr.Text;
    //                dtInv.Rows[row.RowIndex]["PreAmount"] = lblEditInvPOAmnt.Text;
    //            }
    //            BindInvGrid();
    //            hdnCurrRemaining.Value = txtInvRemAlloc.Text;
    //            DisplayMsg(string.Empty, string.Empty);
    //        }
    //        GetInvtotalAmount();
    //    }
    //    DisplayFieldsForNOPO();
    //    BindGridToDataTable();
    //    popInv.Show();
    //}

    protected void gvInvDetails_OnRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblEditInvPOAmnt = (Label)e.Row.FindControl("lblEditInvPOAmnt");
            Label lblEditInvDescr = (Label)e.Row.FindControl("lblEditInvDescr");
            TextBox txtEditNoPoDescr = (TextBox)e.Row.FindControl("txtEditNoPoDescr");
            TextBox txtEditNoPoAmnt = (TextBox)e.Row.FindControl("txtEditNoPoAmnt");

            dtInv = (DataTable)Session["dtInv"];
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("poAmount"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("poAmount", Type.GetType("System.Double"));
                dtInv.Rows[e.Row.RowIndex]["poAmount"] = dtInv.Rows[e.Row.RowIndex]["PreAmount"];
                dtInv.Rows[e.Row.RowIndex]["Description"] = dtInv.Rows[e.Row.RowIndex]["Comments"];
            }
            if (!dtInv.Rows[e.Row.RowIndex].Table.Columns.Contains("PreAmount"))
            {
                dtInv.Rows[e.Row.RowIndex].Table.Columns.Add("PreAmount", Type.GetType("System.Double"));
                dtInv.Rows[e.Row.RowIndex]["PreAmount"] = dtInv.Rows[e.Row.RowIndex]["poAmount"];
                dtInv.Rows[e.Row.RowIndex]["Comments"] = dtInv.Rows[e.Row.RowIndex]["Description"];
            }

            Session["dtInv"] = dtInv;
            if (hdnAccessedFrom.Value == "page")
            {
                lblEditInvPOAmnt.Text = DataBinder.Eval(e.Row.DataItem, "poAmount").ToString();
                txtEditNoPoAmnt.Text = DataBinder.Eval(e.Row.DataItem, "poAmount").ToString();
                lblEditInvDescr.Text = DataBinder.Eval(e.Row.DataItem, "Comments").ToString();
                //lblEditInvDescr.Text = DataBinder.Eval(e.Row.DataItem, "Description").ToString();
                //txtEditNoPoDescr.Text = DataBinder.Eval(e.Row.DataItem, "Description").ToString();
            }
            else
            {
                lblEditInvPOAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                txtEditNoPoAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lblEditInvDescr.Text = DataBinder.Eval(e.Row.DataItem, "Comments").ToString();
                //txtEditNoPoDescr.Text = DataBinder.Eval(e.Row.DataItem, "Comments").ToString();
            }

            Label lblEditInvPONO = (Label)e.Row.FindControl("lblEditInvPONO");
            Label lblEditInvQnty = (Label)e.Row.FindControl("lblEditInvQnty");
            TextBox txtEditInvQntyRcv = (TextBox)e.Row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)e.Row.FindControl("txtEditInvAmnt");
            TextBox txtEditInvLineNo = (TextBox)e.Row.FindControl("txtEditInvLineNo");
            TextBox txtEditInvTaxAmnt1 = (TextBox)e.Row.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditInvShipCst = (TextBox)e.Row.FindControl("txtEditInvShipCst");
            HiddenField hdnUnitPrice = (HiddenField)e.Row.FindControl("hdnUnitPrice");
            HiddenField hdnCurrInvAmnt = (HiddenField)e.Row.FindControl("hdnCurrInvAmnt");
            HiddenField hdnRowCancelFlg = (HiddenField)e.Row.FindControl("hdnRowCancelFlg");
            TextBox txtEditNoPoAccCode = (TextBox)e.Row.FindControl("txtEditNoPoAccCode");
            CheckBox chk = (CheckBox)e.Row.FindControl("chk");

            txtEditInvAmnt.Attributes.Add("onfocus", "javascript:return CaptureInvAmnt('" + txtEditInvAmnt.ClientID + "')");
            txtEditInvAmnt.Attributes.Add("onkeyup", "javascript:return OnChangeInvAmount('" + txtEditInvAmnt.ClientID + "', '" + hdnCurrInvAmnt.ClientID + "', '" + hdnTotInvAmnt.ClientID + "', '" + txtInvRemAlloc.ClientID + "', '" + hdnInitialRem.ClientID + "', event);");
            txtEditInvAmnt.Attributes.Add("onchange", "javascript:return ValidateQtyRec('" + lblEditInvPOAmnt.Text + "', '" + lblEditInvQnty.Text + "', '" + txtEditInvQntyRcv.ClientID + "', '" + txtEditInvAmnt.ClientID + "', " + e.Row.RowIndex + ", '" + hdnUnitPrice.ClientID + "', '" + txtEditInvShipCst.ClientID + "', '" + txtEditInvTaxAmnt1.ClientID + "', '" + lblEditInvPONO.Text + "', '" + hdnRowCancelFlg.Value + "', '" + dtInv.Rows[e.Row.RowIndex]["poInvAmount"] + "')");
            txtEditInvAmnt.Attributes.Add("autocomplete", "off");
            txtEditInvQntyRcv.Attributes.Add("autocomplete", "off");
            txtEditInvLineNo.Attributes.Add("autocomplete", "off");
            txtEditInvLineNo.Attributes.Add("onchange", "javascript:return ValidateInvLineNo('" + txtEditInvLineNo.ClientID + "');");
            txtEditNoPoAccCode.Attributes.Add("onkeyup", "javascript:return searchAcc('" + txtEditNoPoAccCode.ClientID + "')");
            chk.Attributes.Add("onclick", "javascript:Check_Click(this); CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
            //txtEditNoPoAccCode.Attributes.Add("onchange", "javascript:return SplitAcc('" + txtEditNoPoAccCode.ClientID + "')");

            //if (Convert.ToInt32(dtInv.Rows[0]["batchcnt"]) > 0)
            //{
            //    txtEditInvAmnt.Attributes.Add("readonly", "readonly");
            //    txtEditInvAmnt.Style["background-color"] = "#ccc";
            //}

            if (dtInv.Rows[e.Row.RowIndex]["masterFlag"].ToString() != "0")
            {
                if (dtInv.Rows[e.Row.RowIndex]["CancelFlag"].ToString().ToLower() == "y")
                {
                    HiddenField hdnCancelledRow = (HiddenField)e.Row.FindControl("hdnCancelledRow");

                    e.Row.ToolTip = "Row Cancelled";
                    e.Row.Style["background-color"] = "#FFCCCC";
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
                else if (dtInv.Rows[e.Row.RowIndex]["CancelFlag"].ToString().ToLower() == "n")
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

    #endregion

    #region private members

    private void LoadData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("InvId");
        Session.Remove("dtInv");
        LinkButton lnkInvEdit = new LinkButton();
        HiddenField hdndueDate = new HiddenField();
        HiddenField hdnInvDate = new HiddenField();
        HiddenField hdnAmount = new HiddenField();
        HiddenField hdnAttCnt = new HiddenField();
        HiddenField hdnPrefVendor = new HiddenField();
        HiddenField hdnInvPostDate = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lnkInvEdit = (LinkButton)row.Cells[0].FindControl("lnkInvEdit");
            hdndueDate = (HiddenField)row.Cells[0].FindControl("hdndueDate");
            hdnInvDate = (HiddenField)row.Cells[0].FindControl("hdnInvDate");
            hdnAmount = (HiddenField)row.Cells[0].FindControl("hdnAmount");
            hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
            hdnPrefVendor = (HiddenField)row.Cells[0].FindControl("hdnPrefVendor");
            hdnInvPostDate = (HiddenField)row.Cells[0].FindControl("hdnInvPostDate");
        }
        else
        {
            foreach (GridViewRow row in gvDetails.Rows)
            {
                lnkInvEdit = (LinkButton)row.FindControl("lnkInvEdit");
                hdndueDate = (HiddenField)row.FindControl("hdndueDate");
                hdnInvDate = (HiddenField)row.FindControl("hdnInvDate");
                hdnAmount = (HiddenField)row.FindControl("hdnAmount");
                hdnAttCnt = (HiddenField)row.FindControl("hdnAttCnt");
                hdnPrefVendor = (HiddenField)row.FindControl("hdnPrefVendor");
                hdnInvPostDate = (HiddenField)row.FindControl("hdnInvPostDate");
            }
        }
        Session["InvId"] = lnkInvEdit.Text;
        if (ddlPreVendor.SelectedItem.Text == "ALL")
            txtVendor.Text = hdnPrefVendor.Value;
        else
            txtVendor.Text = ddlPreVendor.SelectedItem.Text;
        txtInvNumber.Text = lnkInvEdit.Text;
        txtVendor.Enabled = false;
        txtInvNumber.Enabled = false;
        txtInvDate.Text = hdnInvDate.Value;
        txtInvDueDate.Text = hdndueDate.Value;
        txtInvPostedDate.Text = hdnInvPostDate.Value;
        txtInvRemAlloc.Text = "0";
        //hdnAccessedFrom.Value = "page";

        //BindPONumbers();
        BindInvGrid();
        dtInv = GetInvDetails();
        txtInvAmount.Text = dtInv.Rows[0]["totalInvAmt"].ToString();
        DisplayFieldsForNOPO();
        if (hdnAttCnt.Value.Length > 0)
        {
            string vendName = txtVendor.Text.Replace(".", "");
            vendName = vendName.Replace("&", "");
            vendName = vendName.Replace("/", "");
            vendName = vendName.Replace("\\", "");
            vendName = vendName.Replace(";", "");
            vendName = vendName.Replace(":", "");
            vendName = vendName.Replace(",", "");
            string fName = vendName + '_' + txtInvNumber.Text;
            Session["ExistinvPath"] = fName;
            Encryption enc = new Encryption();
            string key = enc.GenerateAPassKey("JamesScott");
            string str1 = enc.Encrypt(dtInv.Rows[0]["invPath"].ToString(), key);
            dvInvFile.Style["display"] = "block";
            dvInvFile.InnerHtml = "<a href='downloadfile.aspx?typ=6&dwType=db&fn=" + str1 + "' style='text-decoration:underline'>Invoice Attached</a>";
        }
        else
            dvInvFile.Style["display"] = "none";

        //btnApplyToPO.Attributes.Add("onclick", "javascript:return ValidateInvDetails('" + DateTime.Now.ToShortDateString() + "');");
        btnSaveInv.Attributes.Add("onclick", "javascript:return ValidateNOPOFields();");
        txtInvAmount.Attributes.Add("onkeyup", "javascript:return CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
        txtInvAmount.Attributes.Add("onchange", "javascript:return CalcRemaining('" + txtInvAmount.ClientID + "', '" + txtInvRemAlloc.ClientID + "');");
        txtInvRemAlloc.Attributes.Add("readonly", "readonly");
        txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
        //btnClose.Attributes.Add("onclick", "javascript:return RetainPop();");

        double amnt = 0;
        foreach (GridViewRow row in gvInvDetails.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
                amnt += ut.NullSafeDouble(txtEditInvAmnt.Text);
            }
        }

        txtInvRemAlloc.Text = (ut.NullSafeDouble(txtInvAmount.Text) - amnt).ToString();
        hdnInitialRem.Value = txtInvRemAlloc.Text;
        txtInvNumber.Focus();
        popInv.Show();
    }

    //private void BindPONumbers()
    //{
    //    var strExp = xms.getExpenses(Convert.ToInt32(Session["UserID"]), string.Empty, string.Empty, 3);
    //    List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
    //    dsCopy.Tables.Add(Utility.ConvertToDataTable(lstExp));

    //    string expression = "preferredVendor='" + txtVendor.Text + "'";
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

    private DataTable GetInvDetails()
    {
        string str = string.Empty;
        str = xms.getPOInvoiceDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, 0, 0, 0, Session["InvId"].ToString(), txtVendor.Text);
        if (string.IsNullOrEmpty(str))
            gvInvDetails.DataBind();
        else
        {
            List<InvoiceVO> lst = ser.Deserialize<List<InvoiceVO>>(str);
            dtInv = Utility.ConvertToDataTable(lst);
            //Session["dtInv"] = dtInv;

            foreach (GridViewRow gridRow in gvInvDetails.Rows)
            {
                CheckBox chk = (CheckBox)gridRow.FindControl("chk");
                Label lblEditInvPONO = (Label)gridRow.FindControl("lblEditInvPONO");
                Label lblEditInvPOLineNo = (Label)gridRow.FindControl("lblEditInvPOLineNo");
                foreach (DataRow dataRow in dtInv.Rows)
                {
                    if ((dataRow["ourRefNo"].ToString() == lblEditInvPONO.Text) && (ut.NullSafeInteger(dataRow["expLineNo"]) == ut.NullSafeInteger(lblEditInvPOLineNo.Text)))
                    {
                        chk.Checked = true;
                        chk.Style["disabled"] = "true";
                    }
                }
            }

            //gvInvDetails.DataSource = dtInv;
            //gvInvDetails.DataBind();
            if (Convert.ToInt32(dtInv.Rows[0]["batchcnt"]) > 0)
            {
                //btnApplyToPO.Visible = false;
                btnSaveInv.Visible = false;
                btnReloadEditData.Visible = false;
                DvBatch.Style["display"] = "block";
                txtBatchcnt.ReadOnly = true;
                txtBatchcnt.Text = dtInv.Rows[0]["batchcnt"].ToString();
                dvMsg.Style["color"] = "Red";
                dvMsg.InnerHtml = "You can not edit as Batch created for this Invoice.";
            }
            else
            {
                DvBatch.Style["display"] = "none";
                //btnApplyToPO.Visible = true;
                btnSaveInv.Visible = true;
                btnReloadEditData.Visible = true;
                dvMsg.InnerHtml = string.Empty;
                dvMsg.Style["display"] = "none";
            }
        }
        return dtInv;
    }

    private void ClearInvFields()
    {
        txtInvNumber.Text = txtInvDate.Text = txtInvAmount.Text = txtInvDueDate.Text = string.Empty;
    }

    private void DisplayMsg(string msg, string color)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
        dvMsg.Style["display"] = "block";
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
        string expr = "ourRefNo = '" + selectedPONo + "' and expLineNo = " + selectedPOLineNo + " and CancelFlag <> 'Y'";
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

        if (cnt > 0)
        {
            dtInv.Rows[newseqIndex]["polineseq"] = ut.NullSafeDouble(dtInv.Rows[index]["polineseq"]) + 1;
            dtInv.Rows[newseqIndex]["preAmount"] = ut.NullSafeDouble(ut.NullSafeDouble(dtInv.Rows[index]["preAmount"]) - ut.NullSafeDouble(dtInv.Rows[index]["poInvAmount"])).ToString("#.##");
            dtInv.Rows[newseqIndex]["poAmount"] = ut.NullSafeDouble(ut.NullSafeDouble(dtInv.Rows[index]["poAmount"]) - ut.NullSafeDouble(dtInv.Rows[index]["poInvAmount"])).ToString("#.##");
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
            dt.Rows[0]["poAmount"] = ut.NullSafeDouble(ut.NullSafeDouble(dtInv.Rows[index]["poAmount"]) - ut.NullSafeDouble(dtInv.Rows[index]["poInvAmount"])).ToString("#.##");
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
    }

    private void UploadInvoice()
    {
        HttpPostedFile hpf = fupdInv.PostedFile;
        Session["fStream"] = fupdInv.FileContent;
        string vendName = txtVendor.Text.Replace(".", "");
        vendName = vendName.Replace("&", "");
        vendName = vendName.Replace("/", "");
        vendName = vendName.Replace("\\", "");
        vendName = vendName.Replace(";", "");
        vendName = vendName.Replace(":", "");
        vendName = vendName.Replace(",", "");
        int index = hpf.FileName.IndexOf('.');
        Session["InvFileExt"] = Path.GetExtension(hpf.FileName);
        string fName = vendName + '_' + txtInvNumber.Text;
        hdnInvFileName.Value = fName;
        Session["ExistinvPath"] = fName;
        Session["hpf"] = hpf;
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("JamesScott");
        string str = enc.Encrypt(hdnInvFileName.Value, key);
        lblInvFiileDownload.Text = "<a href='downloadfile.aspx?typ=6&dwType=loc&fn=" + str + "' style='text-decoration:underline'>Invoice Attached</a>";
        dvInvFile.Style["display"] = "block";
    }

    private byte[] SavedFileData()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStream"];
        BinaryReader br = new BinaryReader(sf);
        sf.Position = 0;
        if (Session["InvFileExt"].ToString().ToLower() == ".pdf")
        {
            int fileSize;
            fileSize = ut.NullSafeInteger(sf.Length);
            Stream fileStream = sf;
            fileData = new byte[fileSize];
            fileStream.Read(fileData, 0, 2097152);
            hdnInvFileType.Value = "2";
        }
        else
        {
            fileData = br.ReadBytes((int)sf.Length);
            hdnInvFileType.Value = "1";
        }
        return fileData;
    }

    private void DisplayButtons(bool IsYesNo, bool IsClose, string cancelCtrl)
    {
        btnYes.Visible = IsYesNo;
        btnNo.Visible = IsYesNo;
        btnAlertclose.Visible = IsClose;
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
        dtInv.Columns.Add("accountCode", Type.GetType("System.String"));
        dtInv.Columns.Add("addedBy", Type.GetType("System.String"));
        dtInv.Columns.Add("amtPaid", Type.GetType("System.String"));
        dtInv.Columns.Add("cancelFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("comments", Type.GetType("System.String"));
        dtInv.Columns.Add("compCode", Type.GetType("System.String"));
        dtInv.Columns.Add("description", Type.GetType("System.String"));
        dtInv.Columns.Add("detailsFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("dueDate", Type.GetType("System.String"));
        dtInv.Columns.Add("expLineNo", Type.GetType("System.String"));
        dtInv.Columns.Add("invarray", Type.GetType("System.String"));
        dtInv.Columns.Add("invDate", Type.GetType("System.String"));
        dtInv.Columns.Add("invLineNo", Type.GetType("System.String"));
        dtInv.Columns.Add("invName", Type.GetType("System.String"));
        dtInv.Columns.Add("invNo", Type.GetType("System.String"));
        dtInv.Columns.Add("invoiceId", Type.GetType("System.String"));
        dtInv.Columns.Add("invPath", Type.GetType("System.String"));
        dtInv.Columns.Add("masterFlag", Type.GetType("System.String"));
        dtInv.Columns.Add("modifiedBy", Type.GetType("System.String"));
        dtInv.Columns.Add("orgId", Type.GetType("System.String"));
        dtInv.Columns.Add("ourRefNo", Type.GetType("System.String"));
        dtInv.Columns.Add("payMode", Type.GetType("System.String"));
        dtInv.Columns.Add("payModeDate", Type.GetType("System.String"));
        dtInv.Columns.Add("payModeDetail1", Type.GetType("System.String"));
        dtInv.Columns.Add("payModeDetail2", Type.GetType("System.String"));
        dtInv.Columns.Add("payModeDetail3", Type.GetType("System.String"));
        dtInv.Columns.Add("payModeDetail4", Type.GetType("System.String"));
        dtInv.Columns.Add("poAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("poInvAmount", Type.GetType("System.String"));
        dtInv.Columns.Add("polineseq", Type.GetType("System.String"));
        dtInv.Columns.Add("postdate", Type.GetType("System.String"));
        dtInv.Columns.Add("preferredVendor", Type.GetType("System.String"));
        dtInv.Columns.Add("quantity", Type.GetType("System.String"));
        dtInv.Columns.Add("qtyReceived", Type.GetType("System.String"));
        dtInv.Columns.Add("requestId", Type.GetType("System.String"));
        dtInv.Columns.Add("totalInvAmt", Type.GetType("System.String"));
        dtInv.Columns.Add("type", Type.GetType("System.String"));
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

        if (Session["fStream"] != null)
            fileData = SavedFileData();

        for (int i = 0; i < dtInv.Rows.Count; i++)
        {
            HiddenField hdnCancelledRow = (HiddenField)gvInvDetails.Rows[i].FindControl("hdnCancelledRow");
            if (ut.NullSafeDouble(dtInv.Rows[i]["poInvAmount"]) > 0.0 && hdnCancelledRow.Value.ToLower() != "y")
            {
                accountCode += dtInv.Rows[i]["accountCode"].ToString() == string.Empty ? " " + appString : dtInv.Rows[i]["accountCode"].ToString() + appString;
                addedBy += Session["UserID_AP"].ToString() + appString;
                amtPaid += "0" + appString;
                cancelFlag += dtInv.Rows[i]["masterFlag"].ToString() == string.Empty ? " " + appString : (dtInv.Rows[i]["masterFlag"].ToString() == "1" ? "Y" + appString : (dtInv.Rows[i]["masterFlag"].ToString() == "2" ? "N" + appString : " " + appString));
                string comnt = dtInv.Rows[i]["ourRefNo"].ToString().ToLower() == "nopo" ? dtInv.Rows[i]["description"].ToString() : dtInv.Rows[i]["comments"].ToString();
                comments += comnt == string.Empty ? " " + appString : comnt + appString;
                compCode += Session["CompCode"].ToString() + appString;
                description += dtInv.Rows[i]["description"].ToString() == string.Empty ? " " + appString : dtInv.Rows[i]["description"].ToString() + appString;
                detailsFlag += "1" + appString;
                dueDate += txtInvDueDate.Text + appString;
                expLineNo += dtInv.Rows[i]["expLineNo"].ToString() + appString;
                invDate += txtInvDate.Text + appString;
                invLineNo += dtInv.Rows[i]["invLineNo"].ToString() + appString;
                string path = hdnInvFileName.Value == string.Empty ? (Session["ExistinvPath"] == null ? string.Empty : Session["ExistinvPath"].ToString()) : hdnInvFileName.Value;
                invName += path == string.Empty ? " " + appString : path + appString;
                invNo += txtInvNumber.Text + appString;
                invoiceId += hdnInvFileType.Value == string.Empty ? "0" + appString : hdnInvFileType.Value + appString;
                invPath += path == string.Empty ? " " + appString : path + appString;
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
                poAmount += dtInv.Rows[i]["poAmount"].ToString() == string.Empty ? "0" : dtInv.Rows[i]["poAmount"].ToString() + appString;
                poInvAmount += dtInv.Rows[i]["poInvAmount"].ToString() + appString;
                poLineSeq += dtInv.Rows[i]["polineseq"].ToString() + appString;
                preferredVendor += dtInv.Rows[i]["preferredVendor"].ToString() + appString;
                qtyReceived += dtInv.Rows[i]["qtyReceived"].ToString() + appString;
                quantity += dtInv.Rows[i]["quantity"].ToString() + appString;
                //string req = dtInv.Rows[i]["ourRefNo"].ToString().ToLower() == "nopo" ? "0" : dtInv.Rows[i]["requestId"].ToString();
                //requestId += req == string.Empty ? ddlInvPONO.SelectedValue + appString : req + appString;
                requestId += dtInv.Rows[i]["ourRefNo"].ToString().ToLower() == "nopo" ? "0" : dtInv.Rows[i]["requestId"].ToString();
                totalInvAmt += txtInvAmount.Text + appString;
                type += "1" + appString;
                taxAmount1 += dtInv.Rows[i]["taxAmount1"].ToString() + appString;
                shippingCost += dtInv.Rows[i]["shippingCost"].ToString() + appString;
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
            Session.Remove("dsInv");
            Session.Remove("dtInv");
            SortGrid();
            //BindPONumbers();
            GetInvDetails();
            for (int i = 0; i < dsInv.Tables[0].Rows.Count; i++)
            {
                if (txtInvNumber.Text == dsInv.Tables[0].Rows[i]["invNo"].ToString())
                {
                    if (dsInv.Tables[0].Rows[i]["invPath"].ToString().Length > 0)
                    {
                        Encryption enc = new Encryption();
                        string key = enc.GenerateAPassKey("JamesScott");
                        string str1 = enc.Encrypt(dsInv.Tables[0].Rows[i]["invPath"].ToString(), key);
                        dvInvFile.Style["display"] = "block";
                        dvInvFile.InnerHtml = "<a href='downloadfile.aspx?typ=6&dwType=db&fn=" + str1 + "' style='text-decoration:underline'>Invoice Attached</a>";
                    }
                    else
                        dvInvFile.Style["display"] = "none";
                }
            }
            DisplayMsg(retStr, "Green");
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
        //if (Session["dtInv"] != null)
        //    dtInv = (DataTable)Session["dtInv"];
        dtInv = dt.Clone();
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            dt.Rows[i]["qtyReceived"] = dt.Rows[i]["quantity"].ToString();
            dt.Rows[i]["poInvAmount"] = dt.Rows[i]["PreAmount"].ToString();
            dtInv.ImportRow(dt.Rows[i]);
        }
        if (!dtInv.Columns.Contains("CancelFlag"))
            dtInv.Columns.Add("CancelFlag");
        dtInv = AppendInvLineNumbers(dtInv);
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
            TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditInvAmnt = (TextBox)row.FindControl("txtEditInvAmnt");
            TextBox txtEditInvLineNo = (TextBox)row.FindControl("txtEditInvLineNo");
            TextBox txtEditInvTaxAmnt1 = (TextBox)row.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditInvShipCst = (TextBox)row.FindControl("txtEditInvShipCst");
            Label lblEditInvPONO = (Label)row.FindControl("lblEditInvPONO");
            TextBox txtEditNoPoDescr = (TextBox)row.FindControl("txtEditNoPoDescr");
            Label lblEditInvDescr = (Label)row.FindControl("lblEditInvDescr");
            if (lblEditInvPONO.Text.ToLower() == "nopo")
            {
                TextBox txtEditNoPoAccCode = (TextBox)row.FindControl("txtEditNoPoAccCode");
                string[] arr = new string[2];
                arr = txtEditNoPoAccCode.Text.Split('-');
                txtEditNoPoAccCode.Text = arr[0];
                TextBox txtEditNoPoAmnt = (TextBox)row.FindControl("txtEditNoPoAmnt");
                dtInv.Rows[row.RowIndex]["Description"] = txtEditNoPoDescr.Text;
                dtInv.Rows[row.RowIndex]["Comments"] = txtEditNoPoDescr.Text;
                dtInv.Rows[row.RowIndex]["accountCode"] = txtEditNoPoAccCode.Text;
                dtInv.Rows[row.RowIndex]["poAmount"] = ut.NullSafeDouble(txtEditNoPoAmnt.Text);
            }
            else
            {
                Label lblEditInvAccCode = (Label)row.FindControl("lblEditInvAccCode");
                Label lblEditInvPOAmnt = (Label)row.FindControl("lblEditInvPOAmnt");
                //dtInv.Rows[row.RowIndex]["Description"] = lblEditInvDescr.Text;
                dtInv.Rows[row.RowIndex]["accountCode"] = lblEditInvAccCode.Text;
                dtInv.Rows[row.RowIndex]["poAmount"] = ut.NullSafeDouble(lblEditInvPOAmnt.Text);
            }
            dtInv.Rows[row.RowIndex]["qtyReceived"] = ut.NullSafeDouble(txtEditInvQntyRcv.Text);
            dtInv.Rows[row.RowIndex]["poInvAmount"] = ut.NullSafeDouble(txtEditInvAmnt.Text);
            dtInv.Rows[row.RowIndex]["invLineNo"] = txtEditInvLineNo.Text;
            dtInv.Rows[row.RowIndex]["taxAmount1"] = ut.NullSafeDouble(txtEditInvTaxAmnt1.Text);
            dtInv.Rows[row.RowIndex]["shippingCost"] = ut.NullSafeDouble(txtEditInvShipCst.Text);
        }
        Session.Remove("dtInv");
        Session["dtInv"] = dtInv;
    }

    private DataTable GetMulReqData()
    {
        string str = xms.getMultipleExpDetailsByReqId(txtVendor.Text, Convert.ToInt32(Session["OrgID"]), 2);
        List<ExpeseDetailsVO> lst = ser.Deserialize<List<ExpeseDetailsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        return dt;
    }

    private DataTable AppendInvLineNumbers(DataTable dtInv)
    {
        int x = 0;
        for (int i = 0; i < dtInv.Rows.Count; i++)
        {
            if (dtInv.Rows[i]["CancelFlag"].ToString() == string.Empty)
            {
                x++;
                dtInv.Rows[i]["invLineNo"] = x;
            }
        }
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
            TextBox txtEditInvTaxAmnt1 = (TextBox)row.FindControl("txtEditInvTaxAmnt1");
            TextBox txtEditInvShipCst = (TextBox)row.FindControl("txtEditInvShipCst");
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

    #endregion

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

    [System.Web.Services.WebMethod]
    public static string getSelectedInvoiceDetails(string invoiceNo, string vendNo)
    {
        XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
        Utility ut = new Utility();

        if (invoiceNo != null)
        {
            DataTable dt = new DataTable();
            string str = xms.getPOInvoiceDetails(ut.NullSafeInteger(HttpContext.Current.Session["OrgID"]), HttpContext.Current.Session["CompCode"].ToString(), string.Empty, 0, 0, 0, invoiceNo, vendNo);
            return str;
        }
        else
            return "";
    }

    #endregion
}