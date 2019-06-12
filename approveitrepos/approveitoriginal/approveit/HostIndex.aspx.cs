using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class HostIndex : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");
            if (!IsPostBack)
            { }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void RefreshOrganizations(object sender, EventArgs e)
    {
        //System.Threading.Thread.Sleep(5000);
    }

    protected void RefreshExpenses(object sender, EventArgs e)
    { }

}