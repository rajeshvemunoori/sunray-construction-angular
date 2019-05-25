using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class print : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    Encryption enc = new Encryption();
    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        string reqId = Request.QueryString["rq"];
        string startdt = Request.QueryString["sd"];
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Decrypt(Request.QueryString["em"].Replace(' ', '+'), key);
        byte[] byteArr = xms.getExpReceiptToPDF(ut.NullSafeInteger(reqId), ut.NullSafeInteger(Session["OrgID"]), startdt, eMail);
        Response.ContentType = "application/pdf";
        Response.AddHeader("content-length", byteArr.Length.ToString());
        Response.BinaryWrite(byteArr);
    }
}