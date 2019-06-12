using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html.simpleparser;

public partial class DownloadFile : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Downloads

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");
            string typ = Request.QueryString["typ"];
            if (typ == "999")
                DownloadReports();
            else if (typ == "3")
                DownloadBudgDetails(typ);
            else if (typ == "4")
                DownloadBatchDetails();
            else if (typ == "5")
                DownloadLogo(typ);
            else if (typ == "6")
                DownloadInvoice();
            else if (typ == "2")
                DownloadLogo(typ);
            else if (typ == "7" || typ == "8" || typ == "9" || typ == "10" || typ == "14" || typ == "15" || typ == "18" || typ == "19")
                DownloadTemplates(typ);
            else if (typ == "11")
                DownloadExpensesData();
            else if (typ == "12")
                DownLoadForecast();
            else if (typ == "13")
                DownloadJobData();
            else if (typ == "16")
                DownloadVendDataForQB();
            else if (typ == "17")
                DownloadItemDataForQB();
            else if (typ == "20")
                DownloadAccountDataForQB();
            else if (typ == "21")
                DownloadBillsDataForQB();
            else if (typ == "22")
                DownloadDashboardCharts();
            else
                DownloadAttachments(typ);
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + "-- From Download.aspx", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void DownloadReports()
    {
        Response.Charset = "";
        Response.Clear();
        Response.AddHeader("content-disposition", "attachment; filename=Report.xls");
        Response.Charset = "";
        Response.ContentType = "application/vnd.xls";
        Response.Write(Session["str"].ToString());
        Response.End();
    }

    void DownloadAttachments(string typ)
    {
        string aID = Request.QueryString["aid"];
        string ext = Request.QueryString["ext"];
        byte[] bytes = xms.getAttachmentById(Convert.ToInt32(aID), Convert.ToInt32(typ));
        string extension = Path.GetExtension(ext);
        Response.Clear();
        MemoryStream ms = new MemoryStream(bytes);

        if (extension.ToLower().Contains("pdf"))
            Response.ContentType = "application/pdf";
        else
            Response.ContentType = "image/jpeg";

        Response.AddHeader("content-disposition", "attachment;filename=" + ext.Replace(' ', '_'));
        Response.Buffer = true;
        ms.WriteTo(Response.OutputStream);
        Response.End();
    }

    void DownloadBudgDetails(string typ)
    {
        string orgID = Request.QueryString["oid"];
        string orgName = Request.QueryString["onm"];
        string compCode = Request.QueryString["cc"];
        string year = Request.QueryString["yr"];
        string month = Request.QueryString["mn"];
        string email = Request.QueryString["email"];

        string str = xms.getPODetailsByDept(Convert.ToInt32(orgID), compCode, ut.NullSafeInteger(year), month, email, 1);
        Response.Clear();
        Response.ContentType = "application/vnd.ms-excel";
        Response.AddHeader("content-disposition", "attachment;filename= " + orgName.ToUpper() + "_" + month.ToUpper() + ".xls");
        Response.Charset = "";
        System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        stringWrite.WriteLine(str);
        System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        Response.Write(stringWrite.ToString());
        Response.BufferOutput = true;
        Response.Flush();
        Response.Close();
    }

    void DownloadLogo(string typ)
    {
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string aID = Request.QueryString["aid"].Replace(' ', '+');
        string ext = Request.QueryString["ext"].Replace(' ', '+');
        string filepath = enc.Decrypt(aID, key);
        string fileName = enc.Decrypt(ext, key);
        byte[] Logo = xms.getExpDraftsById(filepath, 1);
        string extension = Path.GetExtension(fileName);
        Response.Clear();
        MemoryStream ms = new MemoryStream(Logo);
        if (extension.ToLower().Contains("pdf"))
            Response.ContentType = "application/pdf";
        else
            Response.ContentType = "image/jpeg";

        Response.AddHeader("content-disposition", "attachment;filename=" + fileName);
        Response.Buffer = true;
        ms.WriteTo(Response.OutputStream);
        Response.End();
    }

    void DownloadBatchDetails()
    {
        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = (DataTable)Session["ExportBatch"];

        BoundField dgc_CompId = new BoundField();
        dgc_CompId.DataField = "companyId";
        dgc_CompId.HeaderText = "CompanyID";
        dgDgrid.Columns.Add(dgc_CompId);

        BoundField dgc_PropID = new BoundField();
        dgc_PropID.DataField = "propertyId";
        dgc_PropID.HeaderText = "PropertyID";
        dgDgrid.Columns.Add(dgc_PropID);

        BoundField dgc_VendNo = new BoundField();
        dgc_VendNo.DataField = "vendorNo";
        dgc_VendNo.HeaderText = "Vendor Number";
        dgDgrid.Columns.Add(dgc_VendNo);

        BoundField dgc_PrefVend = new BoundField();
        dgc_PrefVend.DataField = "preferredVendor";
        dgc_PrefVend.HeaderText = "Vendor Name";
        dgDgrid.Columns.Add(dgc_PrefVend);

        BoundField dgc_Phone = new BoundField();
        dgc_Phone.DataField = "phone";
        dgc_Phone.HeaderText = "Phone";
        dgDgrid.Columns.Add(dgc_Phone);

        BoundField dgc_VendMail = new BoundField();
        dgc_VendMail.DataField = "vendorEmail";
        dgc_VendMail.HeaderText = "Email";
        dgDgrid.Columns.Add(dgc_VendMail);

        BoundField dgc_Addr1 = new BoundField();
        dgc_Addr1.DataField = "addressLine1";
        dgc_Addr1.HeaderText = "AddressLine1";
        dgDgrid.Columns.Add(dgc_Addr1);

        BoundField dgc_Addr2 = new BoundField();
        dgc_Addr2.DataField = "addressLine2";
        dgc_Addr2.HeaderText = "AddressLine2";
        dgDgrid.Columns.Add(dgc_Addr2);

        BoundField dgc_CitySt = new BoundField();
        dgc_CitySt.DataField = "cityState";
        dgc_CitySt.HeaderText = "City";
        dgDgrid.Columns.Add(dgc_CitySt);

        BoundField dgc_Zip = new BoundField();
        dgc_Zip.DataField = "zip";
        dgc_Zip.HeaderText = "Zip";
        dgDgrid.Columns.Add(dgc_Zip);

        BoundField dgc_contact = new BoundField();
        dgc_contact.DataField = "contactName";
        dgc_contact.HeaderText = "ContactName";
        dgDgrid.Columns.Add(dgc_contact);

        BoundField dgc_invNo = new BoundField();
        dgc_invNo.DataField = "invNo";
        dgc_invNo.HeaderText = "Invoice#";
        dgDgrid.Columns.Add(dgc_invNo);

        BoundField dgc_invLineNum = new BoundField();
        dgc_invLineNum.DataField = "invLineNum";
        dgc_invLineNum.HeaderText = "Invoice Seq.";
        dgDgrid.Columns.Add(dgc_invLineNum);

        BoundField dgc_invAmount = new BoundField();
        dgc_invAmount.DataField = "invAmount";
        dgc_invAmount.HeaderText = "Invoice Line Amount";
        dgDgrid.Columns.Add(dgc_invAmount);

        BoundField dgc_invDate = new BoundField();
        dgc_invDate.DataField = "invDate";
        dgc_invDate.HeaderText = "Invoice Date";
        dgDgrid.Columns.Add(dgc_invDate);

        BoundField dgc_postDate = new BoundField();
        dgc_postDate.DataField = "postDate";
        dgc_postDate.HeaderText = "Post Date";
        dgDgrid.Columns.Add(dgc_postDate);

        BoundField dgc_dueDate = new BoundField();
        dgc_dueDate.DataField = "dueDate";
        dgc_dueDate.HeaderText = "Due Date";
        dgDgrid.Columns.Add(dgc_dueDate);

        BoundField dgc_totalInvAmt = new BoundField();
        dgc_totalInvAmt.DataField = "amount";
        dgc_totalInvAmt.HeaderText = "Total Inv. Amount";
        dgDgrid.Columns.Add(dgc_totalInvAmt);

        BoundField dgc_AccCode = new BoundField();
        dgc_AccCode.DataField = "accountCode";
        dgc_AccCode.HeaderText = "Account#";
        dgDgrid.Columns.Add(dgc_AccCode);

        BoundField dgc_acctName = new BoundField();
        dgc_acctName.DataField = "acctName";
        dgc_acctName.HeaderText = "Account Name";
        dgDgrid.Columns.Add(dgc_acctName);

        BoundField dgc_Descr = new BoundField();
        dgc_Descr.DataField = "description";
        dgc_Descr.HeaderText = "Item Description";
        dgDgrid.Columns.Add(dgc_Descr);

        BoundField dgc_ourRefNo = new BoundField();
        dgc_ourRefNo.DataField = "ourRefNo";
        dgc_ourRefNo.HeaderText = "PO#";
        dgDgrid.Columns.Add(dgc_ourRefNo);

        BoundField dgc_expLineNo = new BoundField();
        dgc_expLineNo.DataField = "expLineNo";
        dgc_expLineNo.HeaderText = "PO Line#";
        dgDgrid.Columns.Add(dgc_expLineNo);

        BoundField dgc_POAmnt = new BoundField();
        dgc_POAmnt.DataField = "poAmount";
        dgc_POAmnt.HeaderText = "PO Line Amount";
        dgDgrid.Columns.Add(dgc_POAmnt);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();
        dgDgrid.Caption = "<b><h3>Batch Details</h3></b>";

        if (dgDgrid.Rows.Count > 0)
        {
            Response.Clear();
            Response.Charset = "";
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["username"].ToString() + "_" + Session["lastname"].ToString() + "_BatchDetails.xls");
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownloadInvoice()
    {
        string qs = Request.QueryString["dwType"];
        if (qs.ToLower() == "loc")
        {
            Encryption enc = new Encryption();
            string ext = Request.QueryString["fn"].Replace(' ', '+');
            string key = enc.GenerateAPassKey("JamesScott");
            string fName = enc.Decrypt(ext, key);
            HttpPostedFile hpf = (HttpPostedFile)Session["hpf"];
            Stream stream = hpf.InputStream;
            byte[] invBytes = new byte[hpf.ContentLength];
            stream.Read(invBytes, 0, 2097152);
            string extension = Path.GetExtension(fName);
            Response.Clear();
            MemoryStream ms = new MemoryStream(invBytes);
            if (extension.ToLower().Contains("pdf"))
                Response.ContentType = "application/pdf";
            else
                Response.ContentType = "image/jpeg";
            Response.AddHeader("content-disposition", "attachment;filename=" + fName.Replace(' ', '_'));
            Response.Buffer = true;
            ms.WriteTo(Response.OutputStream);
            Response.End();
        }
        else if (qs.ToLower() == "db")
        {
            Encryption enc = new Encryption();
            string ext = Request.QueryString["fn"].Replace(' ', '+');
            string key = enc.GenerateAPassKey("JamesScott");
            string fName = enc.Decrypt(ext, key);
            byte[] invAtt = xms.getExpDraftsById(fName, 1);
            string extension = Path.GetExtension(fName);
            Response.Clear();
            MemoryStream ms = new MemoryStream(invAtt);
            if (extension.ToLower().Contains("pdf"))
                Response.ContentType = "application/pdf";
            else
                Response.ContentType = "image/jpeg";
            Response.AddHeader("content-disposition", "attachment;filename=" + fName.Replace(' ', '_'));
            Response.Buffer = true;
            ms.WriteTo(Response.OutputStream);
            Response.End();
        }
    }

    void DownloadTemplates(string type)
    {
        if (type == "7")//Download Budget Details template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= BudgetDetailsUpload_Template.xls");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//BudgetDetailsUpload_Template.xls"));
            Response.Flush();
            Response.End();
        }
        else if (type == "8")//Download ExpItems template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= AccountDetailsUpload_Template.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//AccountDetailsUpload_Template.xlsx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "9")//Download Vendor Details template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= VendorDetailsUpload_Template.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//VendorDetailsUpload_Template.xlsx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "10")//Download FiscalCalendar template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= FiscalCalendarUpload_Template.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//FiscalCalendarUpload_Template.xlsx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "14")//Download Signature template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-word";
            Response.AddHeader("content-disposition", "attachment;filename= SignatureTemplate.docx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//SignatureTemplate.docx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "15")//Download PO template
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= POUploadTemplate.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//POUploadTemplate.xlsx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "18")//Download vendor data template for QB desktop
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= VendorDetailsUpload_QBDesktop_Template.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//VendorDetailsUpload_QBDesktop_Template.xlsx"));
            Response.Flush();
            Response.End();
        }
        else if (type == "19")//Download item data template for QB desktop
        {
            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= ItemDetailsUpload_QBDesktop_Template.xlsx");
            Response.Charset = "";
            Response.WriteFile(Server.MapPath("DataTemplates//ItemDetailsUpload_QBDesktop_Template.xlsx"));
            Response.Flush();
            Response.End();
        }
    }

    void DownloadExpensesData()
    {
        string expType = Request.QueryString["exp"] == "po" ? "PurchaseOrders" : "Expenses";
        GridView dgDgrid = (GridView)Session["dgDgrid"];
        if (dgDgrid.Rows.Count > 0)
        {
            Response.Clear();
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["username"].ToString() + "_" + Session["lastname"].ToString() + "_" + expType + ".xls");
            Response.Charset = "";
            Response.ContentType = "application/vnd.xls";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownLoadForecast()
    {
        string str = Session["ForeCastHTML"].ToString();
        Response.Clear();
        Response.ContentType = "application/vnd.ms-excel";
        Response.AddHeader("content-disposition", "attachment;filename= RoomsForecast_" + Request.QueryString["cc"] + "_" + DateTime.Now.Year + "_" + Request.QueryString["mn"] + ".xls");
        Response.Charset = "";
        System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        stringWrite.WriteLine(str);
        System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        Response.Write(stringWrite.ToString());
        Response.BufferOutput = true;
        Response.Flush();
        Response.Close();
    }

    void DownloadJobData()
    {
        GridView dgDJobGrid = (GridView)Session["dgDJobGrid"];
        if (dgDJobGrid.Rows.Count > 0)
        {
            Response.Clear();
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["SOrgName"].ToString().Replace(' ', '_') + "_" + Session["CompCode"].ToString() + "_JobDetails.xls");
            Response.Charset = "";
            Response.ContentType = "application/vnd.xls";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDJobGrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownloadVendDataForQB()
    {
        //download vendors data for qb desktop
        GridView dgDgrid = (GridView)Session["gridExportVendDataForQB"];
        if (dgDgrid.Rows.Count > 0)
        {
            Response.Clear();
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["SOrgName"].ToString().Replace(' ', '_') + "_" + Session["CompCode"].ToString() + "_Vendors.xls");
            Response.Charset = "";
            Response.ContentType = "application/vnd.xls";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownloadItemDataForQB()
    {
        //download Items data for qb desktop
        GridView dgDgrid = (GridView)Session["gridExportItemDataForQB"];
        if (dgDgrid.Rows.Count > 0)
        {
            Response.Clear();
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["SOrgName"].ToString().Replace(' ', '_') + "_" + Session["CompCode"].ToString() + "_Items.xls");
            Response.Charset = "";
            Response.ContentType = "application/vnd.xls";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownloadAccountDataForQB()
    {
        //download Accounts data for qb desktop
        GridView dgDgrid = (GridView)Session["gridExportAccountsForQB"];
        if (dgDgrid.Rows.Count > 0)
        {
            string fileName = Session["SOrgName"].ToString().Replace(' ', '_') + "_" + Session["CompCode"].ToString() + "_Accounts.xls";
            Response.Clear();
            Response.AddHeader("content-disposition", "attachment;filename= " + fileName);
            Response.Charset = "";
            Response.ContentType = "application/vnd.ms-excel";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    void DownloadBillsDataForQB()
    {
        //download Accounts data for qb desktop
        GridView dgDgrid = (GridView)Session["gridExportBillsForQB"];
        //if (dgDgrid.Rows.Count > 0)
        //{
        string fileName = Session["SOrgName"].ToString().Replace(' ', '_') + "_" + Session["CompCode"].ToString() + "_Bills.xls";
        Response.Clear();
        Response.AddHeader("content-disposition", "attachment;filename= " + fileName);
        Response.Charset = "";
        Response.ContentType = "application/vnd.ms-excel";
        System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        dgDgrid.RenderControl(htmlWrite);
        Response.Write(stringWrite.ToString());
        Response.End();
        //}
    }

    void DownloadDashboardCharts()
    {
        string type = Request.QueryString["it"];
        string email = Request.QueryString["em"];
        string orgID = Request.QueryString["oid"];
        string compCode = Request.QueryString["cc"];
        string year = Request.QueryString["yr"];
        string quarter = Request.QueryString["qt"];
        string month = Request.QueryString["mn"];
        string name = Request.QueryString["nm"].Replace("`", "&");

        if (type.ToLower().Contains("1"))//Vendors
        {
            string str = xms.erGetVendorDetailsFromDashBoard(ut.NullSafeInteger(orgID), compCode, email, ut.NullSafeInteger(year),
                ut.NullSafeInteger(quarter), month, name);
            List<DashBoardVO> lst = ser.Deserialize<List<DashBoardVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);

            //create dynamic gridview
            GridView dgDgrid = new GridView();
            dgDgrid.AllowPaging = false;
            dgDgrid.DataSource = dt;

            BoundField dgc_REQUESTID = new BoundField();
            dgc_REQUESTID.DataField = "reqId";
            dgc_REQUESTID.HeaderText = "REQUEST ID";
            dgDgrid.Columns.Add(dgc_REQUESTID);

            BoundField dgc_LINENO = new BoundField();
            dgc_LINENO.DataField = "expLineNo";
            dgc_LINENO.HeaderText = "LINE NO";
            dgDgrid.Columns.Add(dgc_LINENO);

            BoundField dgc_PURPOSE = new BoundField();
            dgc_PURPOSE.DataField = "purpose";
            dgc_PURPOSE.HeaderText = "PURPOSE";
            dgDgrid.Columns.Add(dgc_PURPOSE);

            BoundField dgc_STARTDATE = new BoundField();
            dgc_STARTDATE.DataField = "startDate";
            dgc_STARTDATE.HeaderText = "START DATE";
            dgDgrid.Columns.Add(dgc_STARTDATE);

            BoundField dgc_ACCOUNTNAME = new BoundField();
            dgc_ACCOUNTNAME.DataField = "acctName";
            dgc_ACCOUNTNAME.HeaderText = "ACCOUNT NAME";
            dgDgrid.Columns.Add(dgc_ACCOUNTNAME);

            BoundField dgc_ACCOUNTCODE = new BoundField();
            dgc_ACCOUNTCODE.DataField = "accountCode";
            dgc_ACCOUNTCODE.HeaderText = "ACCOUNT CODE";
            dgDgrid.Columns.Add(dgc_ACCOUNTCODE);

            BoundField dgc_EXPENSEDATE = new BoundField();
            dgc_EXPENSEDATE.DataField = "expenseDate";
            dgc_EXPENSEDATE.HeaderText = "EXPENSE DATE";
            dgDgrid.Columns.Add(dgc_EXPENSEDATE);

            BoundField dgc_CITYVISITED = new BoundField();
            dgc_CITYVISITED.DataField = "citiesVisited";
            dgc_CITYVISITED.HeaderText = "CITY VISITED";
            dgDgrid.Columns.Add(dgc_CITYVISITED);

            BoundField dgc_SALESTAX = new BoundField();
            dgc_SALESTAX.DataField = "salesTax";
            dgc_SALESTAX.HeaderText = "SALES TAX";
            dgDgrid.Columns.Add(dgc_SALESTAX);

            BoundField dgc_FOODTAX = new BoundField();
            dgc_FOODTAX.DataField = "foodTax";
            dgc_FOODTAX.HeaderText = "FOOD TAX";
            dgDgrid.Columns.Add(dgc_FOODTAX);

            BoundField dgc_LINEAMOUNT = new BoundField();
            dgc_LINEAMOUNT.DataField = "amount";
            dgc_LINEAMOUNT.HeaderText = "LINE AMOUNT";
            dgDgrid.Columns.Add(dgc_LINEAMOUNT);

            BoundField dgc_PAYMODE = new BoundField();
            dgc_PAYMODE.DataField = "payMode";
            dgc_PAYMODE.HeaderText = "PAY MODE";
            dgDgrid.Columns.Add(dgc_PAYMODE);

            BoundField dgc_DESCRIPTION = new BoundField();
            dgc_DESCRIPTION.DataField = "comments";
            dgc_DESCRIPTION.HeaderText = "DESCRIPTION";
            dgDgrid.Columns.Add(dgc_DESCRIPTION);

            BoundField dgc_PAYAMOUNT = new BoundField();
            dgc_PAYAMOUNT.DataField = "payAmount";
            dgc_PAYAMOUNT.HeaderText = "PAY AMOUNT";
            dgDgrid.Columns.Add(dgc_PAYAMOUNT);

            BoundField dgc_PAIDTO = new BoundField();
            dgc_PAIDTO.DataField = "payableTo";
            dgc_PAIDTO.HeaderText = "CHEQUE ISSUED TO";
            dgDgrid.Columns.Add(dgc_PAIDTO);

            BoundField dgc_PAIDON = new BoundField();
            dgc_PAIDON.DataField = "paidDate";
            dgc_PAIDON.HeaderText = "PAID ON";
            dgDgrid.Columns.Add(dgc_PAIDON);

            BoundField dgc_VENDOR = new BoundField();
            dgc_VENDOR.DataField = "preVendor";
            dgc_VENDOR.HeaderText = "VENDOR";
            dgDgrid.Columns.Add(dgc_VENDOR);

            BoundField dgc_PREFERREDVENDOR = new BoundField();
            dgc_PREFERREDVENDOR.DataField = "isPreferVend";
            dgc_PREFERREDVENDOR.HeaderText = "PREFERRED VENDOR";
            dgDgrid.Columns.Add(dgc_PREFERREDVENDOR);

            dgDgrid.AutoGenerateColumns = false;
            dgDgrid.DataBind();
            dgDgrid.Caption = "<b><h3>" + name + " Details</h3></b>";

            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= " + name.Replace(" ", "_") + "_Details.xls");
            Response.Charset = "";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
        else if (type.ToLower().Contains("2"))//Accounts
        {
            string str = xms.erGetAcctDetailsFromDashBoard(ut.NullSafeInteger(orgID), compCode, email, ut.NullSafeInteger(year),
                ut.NullSafeInteger(quarter), month, name);
            List<DashBoardVO> lst = ser.Deserialize<List<DashBoardVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);

            DashBoardVO d = new DashBoardVO();
            

            //create dynamic gridview
            GridView dgDgrid = new GridView();
            dgDgrid.AllowPaging = false;
            dgDgrid.DataSource = dt;

            BoundField dgc_REQUESTID = new BoundField();
            dgc_REQUESTID.DataField = "reqId";
            dgc_REQUESTID.HeaderText = "REQUEST ID";
            dgDgrid.Columns.Add(dgc_REQUESTID);

            BoundField dgc_LINENO = new BoundField();
            dgc_LINENO.DataField = "expLineNo";
            dgc_LINENO.HeaderText = "LINE NO";
            dgDgrid.Columns.Add(dgc_LINENO);

            BoundField dgc_ACCOUNTNAME = new BoundField();
            dgc_ACCOUNTNAME.DataField = "acctName";
            dgc_ACCOUNTNAME.HeaderText = "ACCOUNT NAME";
            dgDgrid.Columns.Add(dgc_ACCOUNTNAME);

            BoundField dgc_ACCOUNTCODE = new BoundField();
            dgc_ACCOUNTCODE.DataField = "accountCode";
            dgc_ACCOUNTCODE.HeaderText = "ACCOUNT CODE";
            dgDgrid.Columns.Add(dgc_ACCOUNTCODE);

            BoundField dgc_PURPOSE = new BoundField();
            dgc_PURPOSE.DataField = "purpose";
            dgc_PURPOSE.HeaderText = "PURPOSE";
            dgDgrid.Columns.Add(dgc_PURPOSE);

            BoundField dgc_STARTDATE = new BoundField();
            dgc_STARTDATE.DataField = "startDate";
            dgc_STARTDATE.HeaderText = "START DATE";
            dgDgrid.Columns.Add(dgc_STARTDATE);

            BoundField dgc_EXPENSEDATE = new BoundField();
            dgc_EXPENSEDATE.DataField = "expenseDate";
            dgc_EXPENSEDATE.HeaderText = "EXPENSE DATE";
            dgDgrid.Columns.Add(dgc_EXPENSEDATE);

            BoundField dgc_CITYVISITED = new BoundField();
            dgc_CITYVISITED.DataField = "citiesVisited";
            dgc_CITYVISITED.HeaderText = "CITY VISITED";
            dgDgrid.Columns.Add(dgc_CITYVISITED);

            BoundField dgc_VENDOR = new BoundField();
            dgc_VENDOR.DataField = "preVendor";
            dgc_VENDOR.HeaderText = "VENDOR";
            dgDgrid.Columns.Add(dgc_VENDOR);

            BoundField dgc_SALESTAX = new BoundField();
            dgc_SALESTAX.DataField = "salesTax";
            dgc_SALESTAX.HeaderText = "SALES TAX";
            dgDgrid.Columns.Add(dgc_SALESTAX);

            BoundField dgc_FOODTAX = new BoundField();
            dgc_FOODTAX.DataField = "foodTax";
            dgc_FOODTAX.HeaderText = "FOOD TAX";
            dgDgrid.Columns.Add(dgc_FOODTAX);

            BoundField dgc_LINEAMOUNT = new BoundField();
            dgc_LINEAMOUNT.DataField = "amount";
            dgc_LINEAMOUNT.HeaderText = "LINE AMOUNT";
            dgDgrid.Columns.Add(dgc_LINEAMOUNT);

            BoundField dgc_PAYMODE = new BoundField();
            dgc_PAYMODE.DataField = "payMode";
            dgc_PAYMODE.HeaderText = "PAY MODE";

            BoundField dgc_DESCRIPTION = new BoundField();
            dgc_DESCRIPTION.DataField = "comments";
            dgc_DESCRIPTION.HeaderText = "DESCRIPTION";
            dgDgrid.Columns.Add(dgc_DESCRIPTION);

            BoundField dgc_PAYAMOUNT = new BoundField();
            dgc_PAYAMOUNT.DataField = "payAmount";
            dgc_PAYAMOUNT.HeaderText = "PAY AMOUNT";
            dgDgrid.Columns.Add(dgc_PAYAMOUNT);

            BoundField dgc_PAIDTO = new BoundField();
            dgc_PAIDTO.DataField = "payableTo";
            dgc_PAIDTO.HeaderText = "CHEQUE ISSUED TO";
            dgDgrid.Columns.Add(dgc_PAIDTO);

            BoundField dgc_PAIDON = new BoundField();
            dgc_PAIDON.DataField = "paidDate";
            dgc_PAIDON.HeaderText = "PAID ON";
            dgDgrid.Columns.Add(dgc_PAIDON);

            BoundField dgc_ACCOUNTTYPE = new BoundField();
            dgc_ACCOUNTTYPE.DataField = "acctType";
            dgc_ACCOUNTTYPE.HeaderText = "ACCOUNT TYPE";
            dgDgrid.Columns.Add(dgc_ACCOUNTTYPE);

            BoundField dgc_BANKTYPE = new BoundField();
            dgc_BANKTYPE.DataField = "bankingType";
            dgc_BANKTYPE.HeaderText = "ACCOUNT BANK TYPE";
            dgDgrid.Columns.Add(dgc_BANKTYPE);

            BoundField dgc_CONTROLACCOUNT = new BoundField();
            dgc_CONTROLACCOUNT.DataField = "ctrlAccnt";
            dgc_CONTROLACCOUNT.HeaderText = "CONTROL ACCOUNT";
            dgDgrid.Columns.Add(dgc_CONTROLACCOUNT);

            dgDgrid.AutoGenerateColumns = false;
            dgDgrid.DataBind();
            dgDgrid.Caption = "<b><h3>" + name + " Details</h3></b>";

            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= " + name.Replace(" ", "_") + "_Details.xls");
            Response.Charset = "";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
        else if (type.ToLower().Contains("3"))//Cheques
        {
            string str = xms.erGetChequeDetailsFromDashBoard(ut.NullSafeInteger(orgID), compCode, email, ut.NullSafeInteger(year),
                ut.NullSafeInteger(quarter), month, name);
            List<DashBoardVO> lst = ser.Deserialize<List<DashBoardVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);

            //create dynamic gridview
            GridView dgDgrid = new GridView();
            dgDgrid.AllowPaging = false;
            dgDgrid.DataSource = dt;

            BoundField dgc_REQUESTID = new BoundField();
            dgc_REQUESTID.DataField = "reqId";
            dgc_REQUESTID.HeaderText = "REQUEST ID";
            dgDgrid.Columns.Add(dgc_REQUESTID);

            BoundField dgc_LINENO = new BoundField();
            dgc_LINENO.DataField = "expLineNo";
            dgc_LINENO.HeaderText = "LINE NO";
            dgDgrid.Columns.Add(dgc_LINENO);

            BoundField dgc_PURPOSE = new BoundField();
            dgc_PURPOSE.DataField = "purpose";
            dgc_PURPOSE.HeaderText = "PURPOSE";
            dgDgrid.Columns.Add(dgc_PURPOSE);

            BoundField dgc_STARTDATE = new BoundField();
            dgc_STARTDATE.DataField = "startDate";
            dgc_STARTDATE.HeaderText = "START DATE";
            dgDgrid.Columns.Add(dgc_STARTDATE);

            BoundField dgc_ACCOUNTNAME = new BoundField();
            dgc_ACCOUNTNAME.DataField = "acctName";
            dgc_ACCOUNTNAME.HeaderText = "ACCOUNT NAME";
            dgDgrid.Columns.Add(dgc_ACCOUNTNAME);

            BoundField dgc_ACCOUNTCODE = new BoundField();
            dgc_ACCOUNTCODE.DataField = "accountCode";
            dgc_ACCOUNTCODE.HeaderText = "ACCOUNT CODE";
            dgDgrid.Columns.Add(dgc_ACCOUNTCODE);

            BoundField dgc_EXPENSEDATE = new BoundField();
            dgc_EXPENSEDATE.DataField = "expenseDate";
            dgc_EXPENSEDATE.HeaderText = "EXPENSE DATE";
            dgDgrid.Columns.Add(dgc_EXPENSEDATE);

            BoundField dgc_CITYVISITED = new BoundField();
            dgc_CITYVISITED.DataField = "citiesVisited";
            dgc_CITYVISITED.HeaderText = "CITY VISITED";
            dgDgrid.Columns.Add(dgc_CITYVISITED);

            BoundField dgc_VENDOR = new BoundField();
            dgc_VENDOR.DataField = "preVendor";
            dgc_VENDOR.HeaderText = "VENDOR";
            dgDgrid.Columns.Add(dgc_VENDOR);

            BoundField dgc_SALESTAX = new BoundField();
            dgc_SALESTAX.DataField = "salesTax";
            dgc_SALESTAX.HeaderText = "SALES TAX";
            dgDgrid.Columns.Add(dgc_SALESTAX);

            BoundField dgc_FOODTAX = new BoundField();
            dgc_FOODTAX.DataField = "foodTax";
            dgc_FOODTAX.HeaderText = "FOOD TAX";
            dgDgrid.Columns.Add(dgc_FOODTAX);

            BoundField dgc_LINEAMOUNT = new BoundField();
            dgc_LINEAMOUNT.DataField = "unitPrice";
            dgc_LINEAMOUNT.HeaderText = "LINE AMOUNT";
            dgDgrid.Columns.Add(dgc_LINEAMOUNT);

            BoundField dgc_PAYMODE = new BoundField();
            dgc_PAYMODE.DataField = "payMode";
            dgc_PAYMODE.HeaderText = "PAY MODE";
            dgDgrid.Columns.Add(dgc_PAYMODE);

            BoundField dgc_DESCRIPTION = new BoundField();
            dgc_DESCRIPTION.DataField = "comments";
            dgc_DESCRIPTION.HeaderText = "DESCRIPTION";
            dgDgrid.Columns.Add(dgc_DESCRIPTION);

            BoundField dgc_PAYAMOUNT = new BoundField();
            dgc_PAYAMOUNT.DataField = "amount";
            dgc_PAYAMOUNT.HeaderText = "PAY AMOUNT";
            dgDgrid.Columns.Add(dgc_PAYAMOUNT);

            BoundField dgc_PAIDTO = new BoundField();
            dgc_PAIDTO.DataField = "payableTo";
            dgc_PAIDTO.HeaderText = "CHEQUE ISSUED TO";
            dgDgrid.Columns.Add(dgc_PAIDTO);

            BoundField dgc_PAIDON = new BoundField();
            dgc_PAIDON.DataField = "paidDate";
            dgc_PAIDON.HeaderText = "PAID ON";
            dgDgrid.Columns.Add(dgc_PAIDON);

            dgDgrid.AutoGenerateColumns = false;
            dgDgrid.DataBind();
            dgDgrid.Caption = "<b><h3>" + name + " Details</h3></b>";

            Response.Clear();
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename= " + name.Replace(" ", "_") + " Details.xls");
            Response.Charset = "";
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
            dgDgrid.RenderControl(htmlWrite);
            Response.Write(stringWrite.ToString());
            Response.End();
        }
    }

    #endregion
}