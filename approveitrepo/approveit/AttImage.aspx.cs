using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Drawing;

public partial class AttImage : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    Encryption enc = new Encryption();

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (!IsPostBack)
            {
                btnClose.Attributes.Add("onclick", "javascript:window.close();");
                string key = enc.GenerateAPassKey("POExistAtt");
                string att = enc.Decrypt(Request.QueryString["att"].Replace(' ', '+'), key);
                byte[] strReq = xms.getExpDraftsById(att, 2);
                if (att.ToLower().Contains(".jpg") || att.ToLower().Contains(".jpeg") || att.ToLower().Contains(".png") || att.ToLower().Contains(".tiff"))
                {
                    string base64ImageString = ConvertBytesToBase64(strReq);
                    imgAtt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
                }
                else if (att.ToLower().Contains(".pdf"))
                {
                    Response.ContentType = "application/pdf";
                    Response.AddHeader("content-length", strReq.Length.ToString());
                    Response.BinaryWrite(strReq);
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        Response.Redirect("downloadFile.aspx?aid=" + Request.QueryString["att"] + "&ext=" + Request.QueryString["org"] + "&typ=2");
    }

    protected void btnRotateLeft_Click(object sender, EventArgs e)
    {

    }

    protected void btnRotateRight_Click(object sender, EventArgs e)
    {

    }
}