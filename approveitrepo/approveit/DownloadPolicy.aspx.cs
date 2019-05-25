using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Net;
using System.IO;

public partial class DownloadPolicy : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    #endregion

    #region Download Policy Documents

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            DataSet ds = (DataSet)Session["dsPolicies"];
            string expr = "PolicyID = " + Request.QueryString["pid"].ToString();
            DataView view = new DataView(ds.Tables[0], expr, "PolicyID", DataViewRowState.CurrentRows);
            DataTable dt = view.ToTable();
            string fName = dt.Rows[0]["DirPath"].ToString();
            Response.Clear();
            Response.AppendHeader("content-disposition", "Attachment; FileName=" + Path.GetFileName(fName.Replace(' ', '_')));
            Response.ContentType = ("application/octet-stream");
            Response.WriteFile(fName);
            Response.Flush();
            Response.End();
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + "-- From Download.aspx", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    #endregion
}