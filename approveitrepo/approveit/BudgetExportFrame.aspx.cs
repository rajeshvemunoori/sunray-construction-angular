using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class BudgetExportFrame : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (!IsPostBack)
            {
                string str = Request.QueryString["str"];
                if (str.ToLower() == "week")
                    GetWeekData();
                else if (str.ToLower() == "dept")
                    GetDeptData();
                else
                    GetRoomsData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void GetWeekData()
    {
        int type = ut.NullSafeInteger(Request.QueryString["type"]);
        int year = ut.NullSafeInteger(Request.QueryString["yr"]);
        string month = Request.QueryString["mn"];
        string compCode = Request.QueryString["cc"];
        string str = xms.getPODetailsByDept(Convert.ToInt32(Session["OrgID"]), compCode, year, month, Session["Email"].ToString(), type);
        lt.Text = str;
    }

    void GetDeptData()
    {
        int year = ut.NullSafeInteger(Request.QueryString["yr"]);
        string month = Request.QueryString["mn"];
        string compCode = Request.QueryString["cc"];
        string dept = Request.QueryString["dt"];
        string str = xms.getPODetailsByDeptAcc(Convert.ToInt32(Session["OrgID"]), compCode, year, month, dept, Session["Email"].ToString(), 1, 0);
        lt.Text = str;
    }

    void GetRoomsData()
    {
        int year = ut.NullSafeInteger(Request.QueryString["yr"]);
        string month = Request.QueryString["mn"];
        string compCode = Request.QueryString["cc"];
        string dept = Request.QueryString["dt"];
        string adjPercent = Request.QueryString["prc"];
        string str = xms.getPODetailsByDeptAcc(Convert.ToInt32(Session["OrgID"]), compCode, year, month, dept, Session["Email"].ToString(), 2, ut.NullSafeDouble(adjPercent));
        Session["ForeCastHTML"] = str;
        lt.Text = str;
    }
}