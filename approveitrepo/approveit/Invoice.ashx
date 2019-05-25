<%@ WebHandler Language="C#" Class="Invoice" %>

using System;
using System.Web;
using System.Data;
using System.Web.SessionState;
using System.Collections.Generic;
using System.Text;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public class Invoice : IHttpHandler, IRequiresSessionState
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataSet dsInvDetails = new DataSet();
    DataTable dtClss = new DataTable();
    DataTable dtTemp = new DataTable();
    DataTable dtTemp1 = new DataTable();
    DataView dv;
    string str = string.Empty;
    string strFilter = string.Empty;
    string expr1 = string.Empty;
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        int func = ut.NullSafeInteger(context.Request.QueryString["func"].ToString());
        if (func == 1)
        {
            string invid = context.Request.QueryString["invid"].ToString();
            string vend = context.Request.QueryString["vend"].ToString();
            var inv = xms.getPOInvoiceDetails(Convert.ToInt32(context.Session["OrgID"]), (context.Session["CompCode"]).ToString(), string.Empty, 0, 0, 0, invid, vend);
            List<InvoiceVO> InvD = ser.Deserialize<List<InvoiceVO>>(inv);
            dsInvDetails.Tables.Add(Utility.ConvertToDataTable(InvD));
            context.Response.Write(dsInvDetails.Tables[0].Rows.Count);
        }
        if (func == 2)
        {
            string itemCode = context.Request.QueryString["itemCode"];
            dtClss = (DataTable)context.Session["dtExpItem"];
            dtTemp = dtClss.DefaultView.ToTable(true, "expItem");

            //Filter expCodes which have similar itemCodes
            string expr = "itemCode = '" + itemCode + "'";
            dv = new DataView(dtClss, expr, "itemCode", DataViewRowState.CurrentRows);

            //Filter expcodes which are not equal to filtered expCode
            for (int i = 0; i < dv.ToTable().Rows.Count; i++)
                strFilter += "'" + dv.ToTable().Rows[i]["expCode"] + "', ";
            if (dv.ToTable().Rows.Count > 0)
                expr1 = "expCode not in (" + strFilter.TrimEnd(' ').TrimEnd(',') + ")";
            else
                expr1 = "expCode = ''";
            DataView dv1 = new DataView(dtClss, expr1, "expCode", DataViewRowState.CurrentRows);
            dtTemp1 = dv1.ToTable(true, "expItem", "expcode");

            if (dtTemp1.Rows.Count > 0)
            {
                str = "0:Please Select~";
                for (int i = 0; i < dtTemp1.Rows.Count; i++)
                    str += dtTemp1.Rows[i]["expcode"] + ":" + dtTemp1.Rows[i]["expItem"] + "~";
            }
            else
                str = "0:Please Select~";
            context.Response.Write(str);
        }

        //Fetch list of cities for autocomplete
        if (func == 3)
        {
            if (context.Session["Cities"] == null)
            {
                string str = xms.getCodes(Convert.ToInt32(context.Session["OrgID"]), context.Session["CompCode"].ToString(), "USCITIES");
                List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
                dtClss = Utility.ConvertToDataTable(lst);
                context.Session["Cities"] = dtClss;
            }
            else
                dtClss = (DataTable)context.Session["Cities"];
            StringBuilder output = new StringBuilder();
            output.Append("[");
            for (int i = 0; i < dtClss.Rows.Count; ++i)
            {
                output.Append("\"" + dtClss.Rows[i]["CodeKey"].ToString() + "\"");
                if (i != (dtClss.Rows.Count - 1))
                    output.Append(",");
            }
            output.Append("]");
            context.Response.Write(output.ToString());
        }
        //Fetch list of cities for autocomplete

        //Fetch Orgcode/VendorNumber with the given Org name/Vendor name respectively.
        if (func == 4)
        {
            string code = xms.convertOrgnameToCode(context.Request.QueryString["orgname"], ut.NullSafeInteger(context.Request.QueryString["typ"]));
            context.Response.Write(code);
        }
        //Fetch Orgcode/VendorNumber with the given Org name/Vendor name respectively.

        if (func == 5)
        {
            string type = context.Request.QueryString["type"];
            str = "0:Please Select" + "~";
            if (type.ToLower() == "b")
                str += context.Session["VendBillID"].ToString() + ":" + context.Session["VendBillID"].ToString() + "~";
            else
            {
                if (context.Session["VendShips"] == null)
                {
                    string retStr = xms.getBillShiptToDetails(ut.NullSafeInteger(context.Session["VendBillID"]), 1);
                    List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(retStr);
                    dtClss = Utility.ConvertToDataTable(lst);
                    context.Session["VendShips"] = dtClss;
                }
                else
                    dtClss = (DataTable)context.Session["VendShips"];
                for (int i = 0; i < dtClss.Rows.Count; i++)
                    str += dtClss.Rows[i]["vendshipId"] + ":" + dtClss.Rows[i]["vendshipId"] + "~";
            }
            context.Response.Write(str);
        }
        if (func == 6)
        {
            DataSet dsCompCodes = (DataSet)context.Session["CompCodesList"];
            DataView dv = new DataView(dsCompCodes.Tables[0], "CompCode = '" + context.Request.QueryString["compCode"] + "'", "CompCode", DataViewRowState.CurrentRows);
            str = dv.ToTable().Rows[0]["City"].ToString();
            context.Response.Write(str);
        }
        //Fetch vendor discount and corresponding PromoCode for the selected Preferred Vendor while creating PO.
        if (func == 7)
        {
            dtClss = (DataTable)context.Session["PreferredVendorList"];
            string vendor = context.Request.QueryString["vend"].Replace("`", "&");
            string expr = "PreferredVendor = '" + vendor.Replace("'", "''") + "'";
            dv = new DataView(dtClss, expr, "PreferredVendor", DataViewRowState.CurrentRows);
            str = dv.ToTable().Rows[0]["vendDiscPercent"].ToString() + "," + dv.ToTable().Rows[0]["promoCode"].ToString();
            context.Response.Write(str);
        }
        //Fetch vendor discount and corresponding PromoCode for the selected Preferred Vendor while creating PO.

        if (func == 8)
        {
            string compName = context.Request.QueryString["compname"];
            string orgName = context.Request.QueryString["orgname"];
        }

        //Fetch pending + parked expenses/POs of Manager Approval
        if (func == 9)
        {
            string preAppr = context.Request.QueryString["preappr"];
            int expType = (preAppr == "ER" ? 0 : (preAppr == "PA" ? 1 : 2));
            string strReqMgr = xms.getReqForApprovalMgr(ut.NullSafeInteger(context.Session["OrgID"]), ut.NullSafeInteger(context.Session["UserID"]), 1, expType);
            List<ApproveRequestVO> lstReqMgr = ser.Deserialize<List<ApproveRequestVO>>(strReqMgr);
            dtTemp = Utility.ConvertToDataTable(lstReqMgr);
            context.Session["MgrPendingExpensesCnt"] = dtTemp.Rows.Count;
        }
        //Fetch pending + parked expenses/POs of Manager Approval

        //Fetch pending + parked expenses/POs of AP Approval
        if (func == 10)
        {
            string preAppr = context.Request.QueryString["preappr"];
            int expType = (preAppr == "ER" ? 0 : (preAppr == "PA" ? 1 : 2));
            string strAPExp = xms.getRequestsForAPApproval(ut.NullSafeInteger(context.Session["OrgID"]), 2, context.Session["CompCode"].ToString(), expType);
            List<ApproveRequestVO> lstApExp = ser.Deserialize<List<ApproveRequestVO>>(strAPExp);
            dtTemp = Utility.ConvertToDataTable(lstApExp);
            context.Session["APPendingExpensesCnt"] = dtTemp.Rows.Count;
        }
        //Fetch pending + parked expenses/POs of AP Approval

        //check whether selected obBehalfOf user belongs to list of vendors or not.
        if (func == 11)
        {
            string onBehalfOf = context.Request.QueryString["obh"].Replace("`", "&");
            string user = context.Session["username"] + " " + context.Session["lastname"] + "(" + context.Session["EmpID"] + ")";
            DataTable dt = (DataTable)context.Session["PreferredVendorList"];
            DataView dv = new DataView(dt, "PreferredVendor = '" + onBehalfOf.Replace("'", "''") + "'", "PreferredVendor", DataViewRowState.CurrentRows);
            if (string.Compare(user, onBehalfOf, true) == 0)
                context.Response.Write("1");
            else if (dv.ToTable().Rows.Count > 0)
                context.Response.Write("1");
            else
                context.Response.Write("0");
        }
        //check whether selected obBehalfOf user belongs to list of vendors or not.

        //Fetch Cities by Region
        if (func == 12)
        {
            string regionCode = context.Request.QueryString["rgn"];
            string str = xms.getCities(regionCode);
            List<CityVO> lst = ser.Deserialize<List<CityVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);
            dt.Columns.Add("CityZip");
            for (int i = 0; i < dt.Rows.Count; i++)
                dt.Rows[i]["CityZip"] = dt.Rows[i]["City"].ToString() + "-" + dt.Rows[i]["ZipCode"].ToString();

            dt.AcceptChanges();
            DataView dv = dt.DefaultView;
            dv.Sort = "City ASC";
            context.Session["CitiesByRegion"] = dv.ToTable();
        }
        //Fetch Cities by Region

        //Fetch lots/bins list based on selected location and item in INVENTORY MODULE.
        if (func == 13)
        {
            context.Session.Remove("LotByLocation");
            string loc = context.Request.QueryString["loc"];
            string item = context.Request.QueryString["item"];

            //split location text to get location code
            string[] locArr = loc.Split('-');
            string retStr = xms.getInvLotInfo(ut.NullSafeInteger(context.Session["OrgID"]), context.Session["CompCode"].ToString(), item, locArr[0]);
            List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(retStr);
            DataTable dt = Utility.ConvertToDataTable(lst);
            context.Session["LotByLocation"] = dt;
        }
        //Fetch lots/bins list based on selected location and item in INVENTORY MODULE.

        //Get Selected item purchase history in PO creation -- Item history in PO line
        if (func == 14)
        {
            context.Session.Remove("ItemPurchHist");
            string item = context.Request.QueryString["item"];
            double unitPrice = ut.NullSafeDouble(context.Request.QueryString["up"]);
            string retStr = xms.getItemPurchaseList(ut.NullSafeInteger(context.Session["OrgID"]), context.Session["CompCode"].ToString(), item, unitPrice);
            List<ExpeseDetailsVO> lst = ser.Deserialize<List<ExpeseDetailsVO>>(retStr);
            DataTable dt = Utility.ConvertToDataTable(lst);
            context.Session["ItemPurchHist"] = dt;
        }

        //Get Selected item purchase history in PO creation

        //Show available lot quantity of destination lot -- Inventory module
        if (func == 15)
        {
            if (context.Session["LotByLocation"] != null)
            {
                string strQty = string.Empty;
                string strJob = string.Empty;
                string lotNum = context.Request.QueryString["lot"];
                string lot = lotNum.Split(' ')[0];
                DataTable dt = (DataTable)context.Session["LotByLocation"];
                DataView dv = new DataView(dt, "LotNum = '" + lot + "'", "LotNum", DataViewRowState.CurrentRows);
                if (dv.ToTable().Rows.Count > 0)
                {
                    strQty = dv.ToTable().Rows[0]["qtyLot"].ToString();
                    strJob = dv.ToTable().Rows[0]["jobCode"].ToString();
                }
                //string strSubLot = dv.ToTable().Rows[0]["subLot"].ToString();
                context.Response.Write(strQty + "~" + strJob);
            }
        }
        //Check whether already batch exported or not -- BATCH DETAILS
        if (func == 16)
        {
            string batchNo = context.Request.QueryString["batchno"];
            string strBatchExp = string.Empty;
            DataTable dt = (DataTable)context.Session["BatchData"];
            DataView dv = new DataView(dt, "batchNo='" + batchNo + "'", "batchNo", DataViewRowState.CurrentRows);
            if (dv.ToTable().Rows.Count > 0)
                strBatchExp = dv.ToTable().Rows[0]["isExported"].ToString();
            context.Response.Write(strBatchExp);
        }
        //Update Exported flag for a batch -- BATCH DETAILS
        if (func == 17)
        {
            string batchNo = context.Request.QueryString["batchno"];
            BatchVO batch = new BatchVO();
            batch.accountCode = string.Empty;
            batch.amountWithOutTax = 0;
            batch.approvedBy = string.Empty;
            batch.batchDate = string.Empty;
            batch.batchNo = ut.NullSafeInteger(batchNo);
            batch.budgetClassification = string.Empty;
            batch.compCode = context.Session["OrgID"].ToString();
            batch.description = string.Empty;
            batch.email = string.Empty;
            batch.expLineNo = 0;
            batch.fromDate = string.Empty;
            batch.isExported = "Y";
            batch.orgId = ut.NullSafeInteger(context.Session["OrgID"]);
            batch.ourRefNo = string.Empty;
            batch.packageUnit = string.Empty;
            batch.poAmount = 0;
            batch.poDate = string.Empty;
            batch.preferredVendor = string.Empty;
            batch.quantity = 0;
            batch.requestid = 0;
            batch.submittedBy = string.Empty;
            batch.taxAmount = 0;
            batch.toDate = string.Empty;
            batch.totalAmount = 0;
            batch.unitPrice = 0;
            string retStr = xms.getBatchdetails(batch, 6);
        }
        if (func == 18)
        {
            string draftName = context.Request.QueryString["dn"].Replace("~", "/");
            byte[] strReq = xms.getExpDraftsById(draftName, 1);
            string base64ImageString = Convert.ToBase64String(strReq);
            context.Response.Write(base64ImageString);
        }
        if (func == 19)
        {
            string vendor = context.Request.QueryString["vend"].Replace("`", "&");
            string amount = context.Request.QueryString["amt"];
            string str = xms.checkVendorExist(ut.NullSafeInteger(context.Session["OrgID"]), context.Session["CompCode"].ToString(),
                ut.NullSafeInteger(context.Session["UserID"]), vendor, ut.NullSafeInteger(amount));
            context.Response.Write(str);
        }
        if (func == 20)
        {
            dtClss = (DataTable)context.Session["PreferredVendorList"];
            string vendor = context.Request.QueryString["vend"].Replace("`", "&");
            string expr = "PreferredVendor = '" + vendor.Replace("'", "''") + "'";
            dv = new DataView(dtClss, expr, "PreferredVendor", DataViewRowState.CurrentRows);
            if (dv.ToTable().Rows.Count > 0)
                str = dv.ToTable().Rows[0]["qbVendId"].ToString() + "~" + dv.ToTable().Rows[0]["preferagent"].ToString();
            else
                str = string.Empty;
            context.Response.Write(str);
        }
        if (func == 21)
        {
            string vendor = context.Request.QueryString["vend"].Replace("`", "&");
            string item = context.Request.QueryString["item"].Replace("`", "&");
            string str = xms.getVendItemAgreements(vendor, item, ut.NullSafeInteger(context.Session["OrgID"]));
            List<AgreementVO> lst = ser.Deserialize<List<AgreementVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);
            DataView dv = dt.DefaultView;
            dv.Sort = "toQty ASC";
            if (dv.ToTable().Rows.Count > 0)
            {
                context.Session["VendItemAgreement"] = dv.ToTable();
                if (string.IsNullOrEmpty(dv.ToTable().Rows[0]["agreementCode"].ToString()) || string.IsNullOrEmpty(dv.ToTable().Rows[0]["agreementCode"].ToString()))
                    context.Response.Write("-1");
                else
                    context.Response.Write(dt.Rows[0]["ourPrice"].ToString());
            }
            else
                context.Response.Write("-1");
        }
        if (func == 22)
        {
            if (context.Session["VendItemAgreement"] != null)
            {
                DataTable dt = (DataTable)context.Session["VendItemAgreement"];
                double qty = ut.NullSafeDouble(context.Request.QueryString["qty"]);
                if (dt.Rows.Count > 0)
                {
                    if (dt.Rows[0]["isVolumeDiscnt"].ToString().ToLower() == "y")
                    {
                        if (qty > 0)
                        {
                            int i = 0;
                            int cnt = -1;
                            for (i = 0; i < dt.Rows.Count; i++)
                                if (qty >= ut.NullSafeDouble(dt.Rows[i]["toQty"].ToString()))
                                    cnt = i;

                            if (cnt >= 0)
                            {
                                int discType = ut.NullSafeInteger(dt.Rows[0]["discntType"]);
                                double ourPrice = 0;
                                double discVal = ut.NullSafeDouble(dt.Rows[cnt]["lineDscntVal"]);
                                double listPrice = ut.NullSafeDouble(dt.Rows[cnt]["listPrice"]);
                                if (discType == 0)//price
                                    ourPrice = listPrice - discVal;
                                else if (discType == 1)//percentage
                                    ourPrice = listPrice - ((discVal * listPrice) / 100);
                                context.Response.Write(ourPrice);
                            }
                            else
                                context.Response.Write(ut.NullSafeDouble(dt.Rows[0]["listPrice"]));
                        }
                        context.Response.Write(string.Empty);
                    }
                    else
                        context.Response.Write(ut.NullSafeDouble(dt.Rows[0]["ourPrice"]));
                }
                context.Response.Write(string.Empty);
            }
        }
        if (func == 23)
        {
            if (context.Session["VendItemAgreement"] != null)
            {
                DataTable dt = (DataTable)context.Session["VendItemAgreement"];
                if (dt.Rows.Count > 0)
                    context.Response.Write(dt.Rows[0]["listPrice"].ToString());
                else
                    context.Response.Write(string.Empty);
            }
            else
                context.Response.Write(string.Empty);
        }
        if (func == 24)
        {
            if (context.Session["AllItems"] != null)
            {
                DataTable dt = (DataTable)context.Session["AllItems"];
                string item = context.Request.QueryString["item"].Replace("`", "&");
                DataView dv = new DataView(dt, "itemCode='" + item + "'", "itemCode", DataViewRowState.CurrentRows);
                if (dv.ToTable().Rows.Count > 0)
                    context.Response.Write(dv.ToTable().Rows[0]["itemDesc"].ToString());
                else
                    context.Response.Write(string.Empty);
            }
        }
    }
    
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}