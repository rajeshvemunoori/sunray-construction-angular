using System;
using System.Collections.Generic;
using System.Data;
using System.DirectoryServices;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Authenticate("rvemunoori", "XMS123@TEST");
    }

    private bool Authenticate(string strUser, string strPwd)
    {
        bool authentic = false;
        try
        {
            DirectoryEntry entry = new DirectoryEntry("LDAP://XMS-CORP", strUser, strPwd);
            object nativeObject = entry.NativeObject;
            authentic = true;
        }
        catch (Exception ex)
        {
            //lblStatus.Text = ex.Message;
            ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('" + ex.Message + "');", true);
            return false;
        }
        return authentic;

        // set up domain context -- no domain name needed, uses default domain  
        //PrincipalContext ctx = new PrincipalContext(ContextType.Domain);  
        //// find a user 
        //UserPrincipal user = UserPrincipal.FindByIdentity(ctx, strUser);
        //authentic = true;

        //if (user != null)
        //{
        //    return authentic;
        //}
        //else
        //    return false;
    }        
}