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

public partial class EditPassword : System.Web.UI.Page
{
    Encryption encrypt = new Encryption();
    int ret = 0;
    string email;
    DataSet ds = new DataSet();
    string password = string.Empty;
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            btnSave.Attributes.Add("onclick", "javascript:return ValidateEditPassword()");
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + " -- From EditPassword page", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (txtOldPassword.Text == Session["Password"].ToString())
        {
            if (Session["PwdUpdated"].ToString().ToLower() == "false")
            {
                string ret = xms.changePassword(Convert.ToInt32(Session["UserID"]), txtNewPassword.Text);
                dvError.InnerHtml = ret;
                if (ret.Contains("success"))
                {
                    dvError.Style["color"] = "Green";
                    Session["Password"] = txtNewPassword.Text;
                    Session["PwdUpdated"] = true;
                    if (Convert.ToInt32(Session["OrgID"]) == 0)
                        Response.Redirect("HostIndex.aspx");
                    else
                        Response.Redirect("DashBoard.aspx");
                    //Response.Redirect("ViewRequest.aspx");
                }
            }
            else
            {
                string ret = xms.changePassword(Convert.ToInt32(Session["UserID"]), txtNewPassword.Text);
                dvError.InnerHtml = ret;
                if (ret.Contains("success"))
                {
                    dvError.Style["color"] = "Green";
                    Session["Password"] = txtNewPassword.Text;
                    Session["PwdUpdated"] = true;
                }
            }
        }
        else
        {
            dvError.Style["color"] = "Red";
            dvError.InnerHtml = "Invalid Old Password.";
        }
    }

}