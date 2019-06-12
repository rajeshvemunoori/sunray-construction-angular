using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Frame : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        int type = Convert.ToInt32(Request.QueryString["type"]);
        int dlType = Convert.ToInt32(Request.QueryString["dlType"]);
        string ds = Request.QueryString["ds"];
        string str = string.Empty;
        if (ds == "1")
        {
            if (Session["DashBoard"] == null)
                str = xms.erDashBoardByBudget(Convert.ToInt32(Session["OrgID"]), Session["Email"].ToString(), Session["CompCode"].ToString(), "BAR", 2013);
            else
                str = Session["DashBoard"].ToString();
            ltReports.Text = str;
            Session["DashBoard"] = str;
        }
        else
        {
            if (dlType == 1)
            {
                if (Session["Reports"] == null)
                    str = xms.erReportByExpType(Convert.ToInt32(Session["OrgID"]), "BAR", type, string.Empty, string.Empty, string.Empty, Session["Email"].ToString());
                else
                    str = Session["Reports"].ToString();
            }
            else
                if (Session["Reports"] == null)
                    str = xms.erReportByPoExpType(Convert.ToInt32(Session["OrgID"]), "BAR", type, string.Empty, string.Empty, string.Empty, Session["Email"].ToString());
                else
                    str = Session["Reports"].ToString();
            ltReports.Text = str;
            Session["str"] = str;
            Session["Reports"] = str;
        }
    }
}