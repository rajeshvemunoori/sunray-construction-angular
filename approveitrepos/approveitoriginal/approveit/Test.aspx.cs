using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Web.Script.Serialization;
using ExpenseServiceBeta;
using System.Configuration;
using System.IO;
using System.Data.OleDb;
using System.Drawing;
using Westwind.Web;
using Westwind.Tools;
using System.Drawing.Imaging;
using System.Globalization;
using System.Web.UI.DataVisualization.Charting;
using AjaxControlToolkit;
using System.Net;
using System.Threading;

public partial class Test : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private object Radius;

    #endregion

    private static ManualResetEvent allDone = new ManualResetEvent(false);
    private static string strResponse = string.Empty;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            WebRequest request = WebRequest.Create("https://kvnreddy.com:453/ReportServer_SQLEXPRESS/Pages/ReportViewer.aspx?/Sage/Accounts+Receivable+Aging+Summary&rs:Embed=true");
            request.Credentials = new NetworkCredential("XMS-CORP\\Administrator", "Venkat@123");
            request.Method = "POST";
            request.ContentType = "application/json";
            request.ContentLength = 41;
            request.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), request);
            allDone.WaitOne();

            if (!string.IsNullOrEmpty(strResponse))
                dv.InnerHtml = strResponse;
            else
                dv.InnerHtml = "No response received.";
        }
    }

    private static void GetRequestStreamCallback(IAsyncResult asynchronousResult)
    {
        HttpWebRequest request = (HttpWebRequest)asynchronousResult.AsyncState;

        // End the operation
        Stream postStream = request.EndGetRequestStream(asynchronousResult);

        string postData = "Please enter the input data to be posted:";

        // Convert the string into a byte array. 
        byte[] byteArray = System.Text.Encoding.UTF8.GetBytes(postData);

        // Write to the request stream.
        postStream.Write(byteArray, 0, postData.Length);
        postStream.Close();

        // Start the asynchronous operation to get the response
        request.BeginGetResponse(new AsyncCallback(GetResponseCallback), request);
    }

    private static void GetResponseCallback(IAsyncResult asynchronousResult)
    {
        HttpWebRequest request = (HttpWebRequest)asynchronousResult.AsyncState;

        // End the operation
        HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(asynchronousResult);
        Stream streamResponse = response.GetResponseStream();
        StreamReader streamRead = new StreamReader(streamResponse);
        string responseString = streamRead.ReadToEnd();
        strResponse = responseString;
        // Close the stream object
        streamResponse.Close();
        streamRead.Close();

        // Release the HttpWebResponse
        response.Close();
        allDone.Set();
    }

}
