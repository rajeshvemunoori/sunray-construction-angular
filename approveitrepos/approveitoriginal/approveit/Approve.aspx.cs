using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Approve : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (!Page.IsPostBack)
            {
                if (!string.IsNullOrEmpty(Request.QueryString["OrgID"]))
                {
                    string orgId = Request.QueryString["OrgID"].Replace(" ", "+");
                    int ret = xms.approveOrg(orgId);
                    if (ret > 0)
                    {
                        dvMsg.InnerHtml = "Organization Approved Successfully.";
                        Response.Write("<script>setTimeout('redirectPage()', 3000)</script>");
                    }
                    else
                    {
                        if (ret == -2 || ret == -1)
                            dvMsg.InnerHtml = "Organization already Approved.";
                        else if (ret == -3)
                            dvMsg.InnerHtml = "Organization does not exist.";

                        Response.Write("<script>setTimeout('redirectPage()', 3000)</script>");
                    }
                    //Response.Redirect("Login.aspx");
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), 0);
            dvMsg.InnerHtml = "Organization does not exist.";
        }
    }
}