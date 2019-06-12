using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using ExpenseServiceBeta;

public partial class controls_jobsitetop : System.Web.UI.UserControl
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    Encryption encrypt = new Encryption();

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {                
                if (Session["PwdUpdated"].ToString().ToLower() == "true")
                {
                    if (Session["IsAdmin"].ToString().ToLower() == "true")
                    {
                        if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
                            txtjobsiteSearch.Visible = true;
                        else
                            txtjobsiteSearch.Visible = false;
                    }
                    else
                        txtjobsiteSearch.Visible = true;
                }
                else
                    txtjobsiteSearch.Visible = false;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void txtjobsiteSearch_TextChanged(object sender, EventArgs e)
    {
        if (txtjobsiteSearch.Text != "Search...")
        {
            if (Session["IsAdmin"].ToString().ToLower() == "true")
            {
                string key = encrypt.GenerateAPassKey("ExpenseReporting");
                string dcStr = encrypt.Encrypt(txtjobsiteSearch.Text, key);
                Response.Redirect(ConfigurationManager.AppSettings["BetaSiteLink"] + "SearchResults.aspx?stxt=" + dcStr);
            }
        }
    }
}