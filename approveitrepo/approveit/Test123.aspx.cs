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

public partial class Test123 : System.Web.UI.Page
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
        var date = new DateTimeOffset(2009, 9, 1, 0, 0, 0, 0, new TimeSpan(0L));
        var stringDate = date.ToString("u");

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
