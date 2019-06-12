using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class DashboardFrame : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Load Chart

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            string str = string.Empty;
            if (Request.QueryString["e"] == "er")
            {
                if (Request.QueryString["typ"] == "2")
                {
                    str = xms.erDashBoardExpGlobal(ut.NullSafeInteger(Session["OrgID"]), Session["Email"].ToString(), Session["SelCC"].ToString(), "BAR", ut.NullSafeInteger(Request.QueryString["yr"]), ut.NullSafeInteger(Request.QueryString["dt"]));
                    lnk.Style["display"] = "block";
                }
                else
                    str = xms.erDashBoardByExpYearWise(ut.NullSafeInteger(Session["OrgID"]), Session["Email"].ToString(), Session["SelCC"].ToString(), "BAR", 2);
                hdnExpType.Value = "ER";
            }
            else if (Request.QueryString["e"] == "po")
            {
                if (Request.QueryString["typ"] == "2")
                {
                    str = xms.erDashBoardGlobal(ut.NullSafeInteger(Session["OrgID"]), Session["Email"].ToString(), Session["SelCC"].ToString(), "BAR", ut.NullSafeInteger(Request.QueryString["yr"]), ut.NullSafeInteger(Request.QueryString["dt"]));
                    lnk.Style["display"] = "block";
                }
                else
                    str = xms.erDashBoardByYearWise(ut.NullSafeInteger(Session["OrgID"]), Session["Email"].ToString(), Session["SelCC"].ToString(), "BAR", 2);
                hdnExpType.Value = "PO";
            }
            lt1.Text = str;
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + " -- DashboardFrame", ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    #endregion
}