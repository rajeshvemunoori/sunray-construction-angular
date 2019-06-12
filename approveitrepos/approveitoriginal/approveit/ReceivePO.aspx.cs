using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Text;

public partial class ReceivePO : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    DataTable dtRecvPO = new DataTable();
    Utility ut = new Utility();
    public string listshipCost = null;
    public double[] arr = null;
    string orgId, compCode, preferredVendor, requestId, expLineNo, poLineSeq, qty, qtyReceived, invAmt, cancelFlag, poAmt, addedBy, modifiedBy, poDate,
        ourRefNo, shipCost, itemCode, locCode, lotNum, subLot;

    #endregion

    #region Receive PO

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
                    listshipCost = BindShipCost();
                    GetLocations();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        lblOrg_Pend.Text = lblOrg_Recv.Text = Session["SOrgName"].ToString();
        lblComp_Pen.Text = lblComp_Recv.Text = Session["CompCode"].ToString();
        //BindCompCodes();
        BindPrefVendors();
        BindPendPO();
        BindReceivingPO();
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
        string strCmpCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
        List<CompanyCodesVO> lstCmpCodes = ser.Deserialize<List<CompanyCodesVO>>(strCmpCodes);
        //ddlCompCodes_Pend.DataSource = ddlCompCodes_Recv.DataSource = lstCmpCodes;
        //ddlCompCodes_Pend.DataTextField = ddlCompCodes_Recv.DataTextField = "CompCode";
        //ddlCompCodes_Pend.DataValueField = ddlCompCodes_Recv.DataValueField = "CompCode";
        //ddlCompCodes_Pend.DataBind();
        //ddlCompCodes_Recv.DataBind();
        //ddlCompCodes_Pend.SelectedValue = ddlCompCodes_Recv.SelectedValue = Session["CompCode"].ToString();
    }

    private void BindPrefVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlVendor.DataSource = ddlVendor_Recv.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlVendor.DataBind();
        ddlVendor_Recv.DataBind();
        //ddlVendor.Items.Insert(0, "Please Select");
        //ddlVendor.Items.FindByText("Please Select").Value = "0";
        //ddlVendor_Recv.Items.Insert(0, "Please Select");
        //ddlVendor_Recv.Items.FindByText("Please Select").Value = "0";
    }

    protected void GetPODetails_Pending(object sender, EventArgs e)
    {
        dvRevErr.InnerHtml = string.Empty;
        BindPendPO();
        listshipCost = BindShipCost();
    }

    protected void GetPODetails_Receiving(object sender, EventArgs e)
    {
        BindReceivingPO();
    }

    private DataTable GetPODetails(int type)
    {
        string str = string.Empty;
        if (type == 1)
            str = xms.getReceivingPODetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlVendor.SelectedValue, type);
        else
            str = xms.getReceivingPODetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlVendor_Recv.SelectedValue, type);
        List<POReceiveVO> lst = ser.Deserialize<List<POReceiveVO>>(str);
        POReceiveVO rec = new POReceiveVO();
        //rec.itemCode
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (type == 1)
            Session["dtRecvPO"] = dt;
        return dt;
    }

    private void BindPendPO()
    {
        GetPODetails(1);
        DataTable dt = (DataTable)Session["dtRecvPO"];
        gvDetails_Pen.DataSource = dt;
        gvDetails_Pen.DataBind();
        if (gvDetails_Pen.Rows.Count > 0)
            btnRecvPO.Visible = true;
        else
            btnRecvPO.Visible = false;
        arr = dt.AsEnumerable().Select(row => row.Field<double>("shippingCost")).ToArray();
        Session["shippinArray"] = arr;
        //ClientScript.RegisterArrayDeclaration("dsship", string.Concat("", shiparr, ""));
    }

    private string BindShipCost()
    {
        DataTable dt = (DataTable)Session["dtRecvPO"];
        StringBuilder output = new StringBuilder();
        for (int i = 0; i < dt.Rows.Count; ++i)
        {
            // output.Append("\"" + dt.Rows[i]["shippingCost"].ToString() + "\"");
            output.Append(dt.Rows[i]["shippingCost"].ToString() + ",");
        }
        return output.ToString();
    }

    private void BindReceivingPO()
    {
        gvDetails_Recv.DataSource = GetPODetails(2);
        gvDetails_Recv.DataBind();
    }

    protected void gvDetails_Pen_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            dtRecvPO = (DataTable)Session["dtRecvPO"];
            if (!dtRecvPO.Rows[e.Row.RowIndex].Table.Columns.Contains("MasterCanClag"))
                dtRecvPO.Rows[e.Row.RowIndex].Table.Columns.Add("MasterCanClag", Type.GetType("System.String"));

            Session["dtRecvPO"] = dtRecvPO;
            Label lblEditPONO = (Label)e.Row.FindControl("lblEditPONO");
            Label lblEditLineNO = (Label)e.Row.FindControl("lblEditLineNO");
            Label lblEditPOLineSeq = (Label)e.Row.FindControl("lblEditPOLineSeq");
            Label lblEditPODate = (Label)e.Row.FindControl("lblEditPODate");
            Label lblEditPOAmnt = (Label)e.Row.FindControl("lblEditPOAmnt");
            Label lblEditInvAmnt = (Label)e.Row.FindControl("lblEditInvAmnt");
            Label lblEditInvQnty = (Label)e.Row.FindControl("lblEditInvQnty");
            TextBox txtEditInvQntyRcv = (TextBox)e.Row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditshipCost = (TextBox)e.Row.FindControl("txtEditshipCost");

            //HiddenField hdnRowCancelFlg = (HiddenField)e.Row.FindControl("hdnRowCancelFlg");
            if (dtRecvPO.Rows[e.Row.RowIndex].Table.Columns.Contains("DetailsCanClag"))
                hdnRowCancelFlg.Value = dtRecvPO.Rows[e.Row.RowIndex]["DetailsCanClag"].ToString();
            else
                hdnRowCancelFlg.Value = "";

            hdnShippingCst.Value = BindShipCost();
            txtEditInvQntyRcv.Attributes.Add("onchange", "javascript:return OnChangeQty('" + txtEditInvQntyRcv.ClientID + "','" + lblEditInvQnty.Text + "','" + lblEditInvAmnt.Text + "', '" + e.Row.RowIndex + "', '" + hdnRowCancelFlg.Value + "','" + hdnShippingCst.Value + "')");
            txtEditshipCost.Attributes.Add("onchange", "javascript:return UpdateCancelledRow('" + e.Row.RowIndex + "','" + hdnShippingCst.Value + "')");
            //btnRecvPO.Attributes.Add("onclick", "javascript:return validateQty('" + txtEditInvQntyRcv.ClientID + "')");

            HiddenField hdnCancelledRow = (HiddenField)e.Row.FindControl("hdnCancelledRow");
            if (dtRecvPO.Rows[e.Row.RowIndex]["CancelFlag"].ToString().ToLower() == "y")
            {
                e.Row.ToolTip = "Row Cancelled";
                e.Row.Style["background-color"] = "#FFCCCC";
                txtEditInvQntyRcv.Attributes.Add("readonly", "readonly");
                txtEditshipCost.Attributes.Add("readonly", "readonly");
                hdnCancelledRow.Value = "Y";
            }
            else if (dtRecvPO.Rows[e.Row.RowIndex]["CancelFlag"].ToString().ToLower() == "n")
            {
                e.Row.Style["background-color"] = "#C0C0C0";
                txtEditInvQntyRcv.Attributes.Add("readonly", "readonly");
                txtEditshipCost.Attributes.Add("readonly", "readonly");
                hdnCancelledRow.Value = "N";
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //attributes for locations field to load lots/bins upon change
            TextBox txtLoc = (TextBox)e.Row.FindControl("txtLoc");
            TextBox txtLot = (TextBox)e.Row.FindControl("txtLot");
            Label lblEditItemCode = (Label)e.Row.FindControl("lblEditItemCode");
            txtLoc.Attributes.Add("onchange", "javascript: return loadLots('" + txtLoc.ClientID + "', '" + lblEditItemCode.Text + "', '" + txtLot.ClientID + "')");
            txtLot.Attributes.Add("onchange", "javascript: return validateLotByItem(" + e.Row.RowIndex + ", '" + txtLoc.ClientID + "', '" + txtLot.ClientID + "', '" + lblEditItemCode.Text + "');");

            //Display default quantity in adjust quantity input field
            if (string.IsNullOrEmpty(txtEditInvQntyRcv.Text) || txtEditInvQntyRcv.Text == "0")
                txtEditInvQntyRcv.Text = lblEditInvQnty.Text;

            //Attributes to HTML control to add new lot
            HtmlControl ancAddNewLot = (HtmlControl)e.Row.FindControl("ancAddNewLot");
            HtmlControl ancClose = (HtmlControl)e.Row.FindControl("ancClose");
            HtmlControl dvAddLot = (HtmlControl)e.Row.FindControl("dvAddLot");
            HtmlControl dvAddLotErr = (HtmlControl)e.Row.FindControl("dvAddLotErr");
            AjaxControlToolkit.PopupControlExtender popLoc = (AjaxControlToolkit.PopupControlExtender)e.Row.FindControl("popLoc");
            ancAddNewLot.Attributes.Add("onclick", "javascript: return addLot('" + dvAddLot.ClientID + "', '" + txtLoc.ClientID + "', '" + dvAddLotErr.ClientID + "')");
            ancClose.Attributes.Add("onclick", "javascript: return validateLotPop('" + txtLoc.ClientID + "', '" + txtLot.ClientID + "', '" + popLoc.ClientID + "', '" + dvAddLotErr.ClientID + "');");
        }
    }

    protected void gvDetails_Pen_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Click")
        {

        }
    }

    private void GetLocations()
    {
        //Fetch Locations
        if (Session["locations"] == null)
        {
            string strLoc = xms.getInvLocations(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
            List<InventoryVO> lstLoc = ser.Deserialize<List<InventoryVO>>(strLoc);
            DataTable dtLoc = Utility.ConvertToDataTable(lstLoc);
            Session["locations"] = dtLoc;
        }
    }

    protected void ConfirmChanges(object sender, EventArgs e)
    {
        if (hdnDispAlert.Value.ToLower() == "addseq")
            CloneDataRow("Y", "0");
        else if (hdnDispAlert.Value.ToLower() == "noseq")
            CloneDataRow("N", "1");
    }

    protected void RejectChanges(object sender, EventArgs e)
    {
        if (hdnInvCnt.Value == "0")
            CloneDataRow("N", "0");
        else if (hdnInvCnt.Value == "1")
            CloneDataRow("N", "1");
    }

    private void CloneDataRow(string cancelFlg, string invCnt)
    {
        int index = ut.NullSafeInteger(hdnSeqRowIndex.Value);
        double[] arr1 = (double[])Session["shippinArray"];
        double testship = arr1[index];
        //HiddenField hdnShipCst = (HiddenField)gvDetails_Pen.Rows[index].FindControl("hdnShipCst");
        BindGridToDatable();
        dtRecvPO = (DataTable)Session["dtRecvPO"];
        if (!dtRecvPO.Rows[index].Table.Columns.Contains("DetailsCanClag"))
        {
            dtRecvPO.Rows[index].Table.Columns.Add("DetailsCanClag", Type.GetType("System.String"));
            dtRecvPO.Rows[index]["DetailsCanClag"] = "1";
        }
        Session["dtRecvPO"] = dtRecvPO;
        if (invCnt == "0")
        {
            string selectedPONo = dtRecvPO.Rows[index]["ourRefNo"].ToString();
            string selectedPOLineNo = dtRecvPO.Rows[index]["expLineNo"].ToString();
            string expr = "ourRefNo = '" + selectedPONo + "' and expLineNo = " + selectedPOLineNo + " and CancelFlag <> 'Y'";
            DataView view = new DataView(dtRecvPO, expr, "ourRefNo", DataViewRowState.CurrentRows);
            int maxLineSeq = ut.NullSafeInteger(view.ToTable().Compute("MAX(PoLineSeq)", string.Empty));

            string expr1 = "ourRefNo = '" + selectedPONo + "' and expLineNo = " + selectedPOLineNo;
            DataView view1 = new DataView(dtRecvPO, expr1, "ourRefNo", DataViewRowState.CurrentRows);

            int newseqIndex = 0;
            int cnt = 0;
            for (int i = 0; i < dtRecvPO.Rows.Count; i++)
            {
                if ((ut.NullSafeInteger(dtRecvPO.Rows[i]["PoLineSeq"]) == maxLineSeq + 1) && (dtRecvPO.Rows[i]["expLineNo"].ToString() == selectedPOLineNo) && (dtRecvPO.Rows[i]["ourRefNo"].ToString() == selectedPONo))
                {
                    newseqIndex = i;
                    cnt++;
                }
            }

            if (cnt > 0)
            {
                dtRecvPO.Rows[newseqIndex]["PoLineSeq"] = ut.NullSafeDouble(dtRecvPO.Rows[index]["PoLineSeq"]) + 1;
                double shipCost = ut.NullSafeDouble(testship) - ut.NullSafeDouble(dtRecvPO.Rows[index]["shippingCost"]);
                dtRecvPO.Rows[newseqIndex]["shippingCost"] = ut.NullSafeDouble(shipCost);
                dtRecvPO.Rows[newseqIndex]["qty"] = ut.NullSafeDouble(dtRecvPO.Rows[index]["qty"]) - ut.NullSafeDouble(dtRecvPO.Rows[index]["qtyReceived"]);
                double notaxamnt = ut.NullSafeDouble((ut.NullSafeDouble(dtRecvPO.Rows[index]["qty"]) - ut.NullSafeDouble(dtRecvPO.Rows[index]["qtyReceived"])) * ut.NullSafeDouble(dtRecvPO.Rows[index]["unitPrice"]));
                double poamnt = (ut.NullSafeDouble(notaxamnt * ut.NullSafeDouble(dtRecvPO.Rows[index]["taxPercent"]) / 100)) + notaxamnt + ut.NullSafeDouble(shipCost);
                dtRecvPO.Rows[0]["PoAmt"] = (ut.NullSafeDouble(poamnt)).ToString("#.##");
                dtRecvPO.Rows[newseqIndex]["qtyReceived"] = 0;
                dtRecvPO.Rows[newseqIndex]["invAmt"] = 0;
                dtRecvPO.Rows[newseqIndex]["PoDate"] = Convert.ToDateTime(dtRecvPO.Rows[index]["PoDate"]).ToShortDateString();
            }
            else
            {
                DataTable dt = dtRecvPO.Clone();
                dt.ImportRow(dtRecvPO.Rows[index]);
                dt.Rows[0]["PoLineSeq"] = ut.NullSafeDouble(dtRecvPO.Rows[index]["PoLineSeq"]) + 1;
                double shipCost = ut.NullSafeDouble(testship) - ut.NullSafeDouble(dtRecvPO.Rows[index]["shippingCost"]);
                dt.Rows[0]["shippingCost"] = ut.NullSafeDouble(shipCost);
                dt.Rows[0]["qty"] = ut.NullSafeDouble(dtRecvPO.Rows[index]["qty"]) - ut.NullSafeDouble(dtRecvPO.Rows[index]["qtyReceived"]);
                double notaxamnt = ut.NullSafeDouble((ut.NullSafeDouble(dtRecvPO.Rows[index]["qty"]) - ut.NullSafeDouble(dtRecvPO.Rows[index]["qtyReceived"])) * ut.NullSafeDouble(dtRecvPO.Rows[index]["unitPrice"]));
                double poamnt = (ut.NullSafeDouble(notaxamnt * ut.NullSafeDouble(dtRecvPO.Rows[index]["taxPercent"]) / 100)) + notaxamnt + ut.NullSafeDouble(shipCost);
                dt.Rows[0]["PoAmt"] = (ut.NullSafeDouble(poamnt)).ToString("#.##");
                dt.Rows[0]["qtyReceived"] = 0;
                dt.Rows[0]["invAmt"] = 0;
                dt.Rows[0]["PoDate"] = Convert.ToDateTime(dtRecvPO.Rows[index]["PoDate"]).ToShortDateString();
                dtRecvPO.ImportRow(dt.Rows[0]);
                for (int i = 0; i < dtRecvPO.Rows.Count; i++)
                {
                    if (ut.NullSafeInteger(dtRecvPO.Rows[i]["PoLineSeq"]) == ut.NullSafeInteger(dtRecvPO.Rows[index]["PoLineSeq"]) + 1)
                        newseqIndex = i;
                }
            }
            dtRecvPO.Rows[newseqIndex]["CancelFlag"] = cancelFlg == "Y" ? "Y" : "N";
        }
        dtRecvPO.Rows[index]["MasterCanClag"] = cancelFlg;
        //Session["dtRecvPO"] = dtRecvPO;
        gvDetails_Pen.DataSource = dtRecvPO;
        gvDetails_Pen.DataBind();
        BindGridToDatable();
    }

    private void BindGridToDatable()
    {
        dtRecvPO = (DataTable)Session["dtRecvPO"];
        foreach (GridViewRow row in gvDetails_Pen.Rows)
        {
            Label lblEditPONO = (Label)row.FindControl("lblEditPONO");
            Label lblEditLineNO = (Label)row.FindControl("lblEditLineNO");
            Label lblEditPOLineSeq = (Label)row.FindControl("lblEditPOLineSeq");
            Label lblEditPODate = (Label)row.FindControl("lblEditPODate");
            Label lblEditPOAmnt = (Label)row.FindControl("lblEditPOAmnt");
            Label lblEditInvAmnt = (Label)row.FindControl("lblEditInvAmnt");
            Label lblEditInvQnty = (Label)row.FindControl("lblEditInvQnty");
            TextBox txtEditInvQntyRcv = (TextBox)row.FindControl("txtEditInvQntyRcv");
            TextBox txtEditshipCost = (TextBox)row.FindControl("txtEditshipCost");
            dtRecvPO.Rows[row.RowIndex]["ourRefNo"] = lblEditPONO.Text;
            dtRecvPO.Rows[row.RowIndex]["expLineNo"] = lblEditLineNO.Text;
            dtRecvPO.Rows[row.RowIndex]["PoLineSeq"] = lblEditPOLineSeq.Text;
            dtRecvPO.Rows[row.RowIndex]["PoDate"] = lblEditPODate.Text;
            dtRecvPO.Rows[row.RowIndex]["PoAmt"] = lblEditPOAmnt.Text;
            dtRecvPO.Rows[row.RowIndex]["qty"] = lblEditInvQnty.Text;
            dtRecvPO.Rows[row.RowIndex]["invAmt"] = lblEditInvAmnt.Text;
            dtRecvPO.Rows[row.RowIndex]["qtyReceived"] = txtEditInvQntyRcv.Text == string.Empty ? "0" : txtEditInvQntyRcv.Text;
            dtRecvPO.Rows[row.RowIndex]["shippingCost"] = txtEditshipCost.Text;
        }
        Session.Remove("dtRecvPO");
        Session["dtRecvPO"] = dtRecvPO;
    }

    protected void SaveReceivePO(object sender, EventArgs e)
    {
        dtRecvPO = (DataTable)Session["dtRecvPO"];
        BindGridToDatable();
        string appString = "###";
        int cnt = 0;
        for (int i = 0; i < dtRecvPO.Rows.Count; i++)
        {
            HiddenField hdnCancelledRow = (HiddenField)gvDetails_Pen.Rows[i].FindControl("hdnCancelledRow");
            Label lblEditItemCode = (Label)gvDetails_Pen.Rows[i].FindControl("lblEditItemCode");
            TextBox txtLoc = (TextBox)gvDetails_Pen.Rows[i].FindControl("txtLoc");
            TextBox txtLot = (TextBox)gvDetails_Pen.Rows[i].FindControl("txtLot");

            if (ut.NullSafeDouble(dtRecvPO.Rows[i]["qtyReceived"]) > 0 && !string.IsNullOrEmpty(txtLoc.Text))
            {
                //Get location, lot and sublots
                string lot = string.Empty;
                string loc = string.Empty;
                string strSubLot = string.Empty;
                if (txtLot.Text.Length > 0)
                {
                    lot = txtLot.Text.Split(' ')[0];
                    strSubLot = GetSubLot(lot);
                    //strSubLot = string.Empty;
                }
                if (txtLoc.Text.Length > 0)
                    loc = txtLoc.Text.Split('-')[0];

                orgId += Session["OrgID"].ToString() + appString;
                compCode += Session["CompCode"].ToString() + appString;
                preferredVendor += ddlVendor.SelectedValue + appString;
                requestId += dtRecvPO.Rows[i]["requestId"].ToString() + appString;
                expLineNo += dtRecvPO.Rows[i]["expLineNo"].ToString() + appString;
                poLineSeq += dtRecvPO.Rows[i]["PoLineSeq"].ToString() + appString;
                qty += dtRecvPO.Rows[i]["qty"].ToString() + appString;
                qtyReceived += dtRecvPO.Rows[i]["qtyReceived"].ToString() + appString;
                invAmt += dtRecvPO.Rows[i]["invAmt"].ToString() + appString;
                cancelFlag += (dtRecvPO.Rows[i]["MasterCanClag"].ToString() == string.Empty ? " " : dtRecvPO.Rows[i]["MasterCanClag"].ToString()) + appString;
                poAmt += dtRecvPO.Rows[i]["PoAmt"].ToString() + appString;
                addedBy += Session["UserID"].ToString() + appString;
                modifiedBy += Session["UserID"].ToString() + appString;
                poDate += dtRecvPO.Rows[i]["PoDate"].ToString() + appString;
                ourRefNo += dtRecvPO.Rows[i]["ourRefNo"].ToString() + appString;
                shipCost += dtRecvPO.Rows[i]["shippingCost"].ToString() + appString;
                itemCode += lblEditItemCode.Text + appString;
                locCode += loc + appString;
                lotNum += lot + appString;
                subLot += (strSubLot == string.Empty ? " " : strSubLot) + appString;
                cnt++;
            }
        }
        if (cnt > 0)
        {
            POReceiveMulVO poRecv = new POReceiveMulVO();
            poRecv.orgId = orgId.Substring(0, orgId.Length - 3);
            poRecv.compCode = compCode.Substring(0, compCode.Length - 3);
            poRecv.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
            poRecv.requestId = requestId.Substring(0, requestId.Length - 3);
            poRecv.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
            poRecv.poLineSeq = poLineSeq.Substring(0, poLineSeq.Length - 3);
            poRecv.qty = qty.Substring(0, qty.Length - 3);
            poRecv.qtyReceived = qtyReceived.Substring(0, qtyReceived.Length - 3);
            poRecv.invAmt = invAmt.Substring(0, invAmt.Length - 3);
            poRecv.cancelFlag = cancelFlag.Substring(0, cancelFlag.Length - 3);
            poRecv.poAmt = poAmt.Substring(0, poAmt.Length - 3);
            poRecv.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            poRecv.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            poRecv.poDate = poDate.Substring(0, poDate.Length - 3);
            poRecv.ourRefNo = ourRefNo.Substring(0, ourRefNo.Length - 3);
            poRecv.shippingCost = shipCost.Substring(0, shipCost.Length - 3);
            poRecv.itemCode = itemCode.Substring(0, itemCode.Length - 3);
            poRecv.locCode = locCode.Substring(0, locCode.Length - 3);
            poRecv.lotNum = lotNum.Substring(0, lotNum.Length - 3);
            poRecv.subLot = subLot.Substring(0, subLot.Length - 3);
            string retStr = xms.addPOReceiveMul(poRecv);

            if (retStr.ToLower().Contains("succes"))
            {
                dvRevErr.InnerHtml = retStr;
                dvRevErr.Style["color"] = "Green";
                Session.Remove("dtRecvPO");
                BindPendPO();
                BindReceivingPO();
            }
            else
            {
                dvRevErr.InnerHtml = retStr;
                dvRevErr.Style["color"] = "Red";
            }
        }
        else
        {
            dvRevErr.InnerHtml = "No changes to update";
            dvRevErr.Style["color"] = "Red";
        }
    }

    protected void SaveNewLot(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent.Parent;
        TextBox txtLoc = (TextBox)row.FindControl("txtLoc");
        TextBox txtLot = (TextBox)row.FindControl("txtLot");
        TextBox txtSubLot = (TextBox)row.FindControl("txtSubLot");
        Label lblEditItemCode = (Label)row.FindControl("lblEditItemCode");
        HtmlControl dvAddLotErr = (HtmlControl)row.FindControl("dvAddLotErr");
        AjaxControlToolkit.PopupControlExtender popLoc = (AjaxControlToolkit.PopupControlExtender)row.FindControl("popLoc");

        InventoryVO inv = new InventoryVO();
        inv.accntCode = string.Empty;
        inv.addedBy = ut.NullSafeInteger(Session["UserID"]);
        inv.addedOn = DateTime.Now.ToShortDateString();
        inv.city = string.Empty;
        inv.compCode = Session["CompCode"].ToString();
        inv.detailFlag = "1";
        inv.expiredDate = string.Empty;
        inv.expItem = string.Empty;
        inv.jobCode = string.Empty;
        inv.locAddress1 = string.Empty;
        inv.locAddress2 = string.Empty;
        inv.locCode = txtLoc.Text.Split('-')[0].Trim();
        inv.locId = 0;
        inv.locName = txtLoc.Text.Split('-')[1].Trim();
        inv.lotId = 0;
        inv.lotNum = txtLot.Text;
        inv.lotTransId = 0;
        inv.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        inv.modifiedOn = DateTime.Now.ToShortDateString();
        inv.mstrFlag = "0";
        inv.orgId = ut.NullSafeInteger(Session["OrgId"]);
        inv.poLineNo = 0;
        inv.poLineSeq = 0;
        inv.psreservId = 0;
        inv.qtyLot = 0;
        inv.qtyStock = 0;
        inv.qtyTrans = 0;
        inv.retCause = string.Empty;
        inv.rowPOs = 0;
        inv.rowSeq = 0;
        inv.rowSubPOs = 0;
        inv.subLot = txtSubLot.Text.Trim();
        inv.transDate = string.Empty;
        inv.transId = 0;
        inv.transRefno = "0";
        inv.trcause = string.Empty;
        inv.trwDate = string.Empty;
        inv.userId = ut.NullSafeInteger(Session["UserID"]);
        string str = xms.addInvLocation(inv);

        string retStr = xms.getInvLotInfo(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), lblEditItemCode.Text, txtLoc.Text.Split('-')[0].Trim());
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(retStr);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["LotByLocation"] = dt;

        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "$find('" + popLoc.ClientID + "').showPopup() ;", true);
    }

    private string GetSubLot(string lot)
    {
        DataTable dt = (DataTable)Session["LotByLocation"];
        DataView dv = new DataView(dt, "LotNum = '" + lot + "'", "LotNum", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            return dv.ToTable().Rows[0]["subLot"].ToString();
        else
            return string.Empty;
    }

    protected void btnReloadData_Click(object sender, EventArgs e)
    {
        dvRevErr.InnerHtml = string.Empty;
        LoadData();
        listshipCost = BindShipCost();
        GetLocations();
    }

    #endregion

    #region Web Methods

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetLocations(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["locations"];
        DataView dv = new DataView(dt, "locCode LIKE '%" + prefixText + "%' OR locName LIKE '%" + prefixText + "%'", "locName", DataViewRowState.CurrentRows);
        string[] locationNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            locationNames[i] = dv.ToTable().Rows[i]["locCode"].ToString() + '-' + dv.ToTable().Rows[i]["locName"].ToString();
        return locationNames;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetLotsByLocation(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["LotByLocation"];
        DataView dv = new DataView(dt, "lotNum LIKE '%" + prefixText + "%'", "lotNum", DataViewRowState.CurrentRows);
        string[] lotNumbers = new string[dv.ToTable().Rows.Count];
        int i;
        for (i = 0; i < dv.ToTable().Rows.Count; i++)
            lotNumbers[i] = dv.ToTable().Rows[i]["lotNum"].ToString() + " (Quantity:" + dv.ToTable().Rows[i]["qtyLot"].ToString() + ")";
        return lotNumbers;
    }

    #endregion
}