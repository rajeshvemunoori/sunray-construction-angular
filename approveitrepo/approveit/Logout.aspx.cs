using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Logout : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //FormsAuthentication.SignOut();
        //Session.Clear();
        Session.Abandon();
        Cookie_Details.DeleteCookie("UserName");
        Cookie_Details.DeleteCookie("Password");   
         
        Response.Redirect("Login.aspx");
    }
}