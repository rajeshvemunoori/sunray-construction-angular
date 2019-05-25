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
using System.Security;
using iTextSharp.text.html;

public partial class DownloadExportedDate : System.Web.UI.Page
{
    #region Private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Download

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            DownloadData(Convert.ToInt32(Request.QueryString["rd"]), Convert.ToInt32(Request.QueryString["od"]));
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + "-- From DownloadExportedData.aspx", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void DownloadData(int reqId, int orgId)
    {
        //Generate PDF file
        string eMail = string.IsNullOrEmpty(Request.QueryString["em"]) ? string.Empty : Request.QueryString["em"];
        string poDate = string.IsNullOrEmpty(Request.QueryString["dt"]) ? string.Empty : Request.QueryString["dt"];
        string str = xms.getExpReceiptToAttach(reqId, orgId, poDate, eMail);
        Response.Clear();
        Response.ContentType = "application/pdf";
        if (Request.QueryString["po"] == "0")
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["username"] + "_" + Session["lastname"].ToString() + "_" + Session["ReqID"] + "_ExpenseReport.pdf");
        else
            Response.AddHeader("content-disposition", "attachment;filename= " + Session["username"] + "_" + Session["lastname"].ToString() + "_" + Session["PONum"] + "_PurchaseOrder.pdf");
        Response.Charset = "";
        StringWriter sw = new StringWriter();
        sw.WriteLine(str);
        StringReader sr = new StringReader(sw.ToString());
        //Document pdfDoc = new Document(PageSize.A2, 10f, 10f, 10f, 0f);
        //HTMLWorker htmlparser = new HTMLWorker(pdfDoc);
        //PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
        iTextSharp.text.html.simpleparser.StyleSheet style = new iTextSharp.text.html.simpleparser.StyleSheet();
        //style.LoadTagStyle("table", "font-family", "verdana,arial,sans-serif");
        //style.LoadTagStyle("table", "font-family", "verdana,arial,sans-serif");
        //style.LoadTagStyle("table", "font-size", "11px");
        //style.LoadTagStyle("table", "color", "#333333");
        //style.LoadTagStyle("table", "border-width", "1px");
        //style.LoadTagStyle("table", "border-color", "#666666");
        //style.LoadTagStyle("table", "border-collapse", "collapse");
        //style.LoadTagStyle("thead", "border-width", "1px");
        //style.LoadTagStyle("thead", "border-collapse", "collapse");
        //style.LoadTagStyle("thead", "padding", "8px");
        //style.LoadTagStyle("thead", "border-style", "solid");
        //style.LoadTagStyle("thead", "border-color", "#666666");
        //style.LoadTagStyle("thead", "background-color", "#dedede");
        //style.LoadTagStyle("tbody", "border-width", "1px");
        //style.LoadTagStyle("tbody", "border-collapse", "collapse");
        //style.LoadTagStyle("tbody", "padding", "8px");
        //style.LoadTagStyle("tbody", "border-style", "solid");
        //style.LoadTagStyle("tbody", "border-color", "#666666");
        //style.LoadTagStyle("tbody", "background-color", "#ffffff");
       
        Document document = new Document(PageSize.A2, 10f, 10f, 10f, 0f);
        using (document)
        {
            PdfWriter.GetInstance(document, Response.OutputStream);
            document.Open();
            List<IElement> objects = HTMLWorker.ParseToList(new StringReader(str), style);
            foreach (IElement element in objects)
            {
                document.Add(element);
            }
        }
        //pdfDoc.Open();
        //htmlparser.Parse(sr);
        //pdfDoc.Close();
        Response.Write(document);
        Response.BufferOutput = true;
        Response.Flush();
        Response.Close();
    }

    #endregion
}