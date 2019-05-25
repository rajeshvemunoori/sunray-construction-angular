<%@ Application Language="C#" %>
<script RunAt="server">
    void Application_Start(object sender, EventArgs e)
    {
        // Code that runs on application startup


    }

    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown

    }

    void Application_Error(object sender, EventArgs e)
    {
        // Code that runs when an unhandled error occurs
        //Response.Redirect(ConfigurationManager.AppSettings["BetaSiteLink"] + "ErrPage.aspx");
    }

    void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e)
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }

    public void Application_BeginRequest(object sender, System.EventArgs e)
    {
        string str = Request.Url.ToString();
        int iQuest = str.IndexOf("?");
        if (iQuest >= 0)
        {
            str = str.Substring(iQuest, str.Length - iQuest);
        }
        if (str.IndexOf(";") > -1 || str.ToLower().IndexOf("insert") > -1 || str.ToLower().IndexOf("delete") > -1 || str.ToLower().IndexOf("truncate") > -1 || str.ToLower().IndexOf("update") > -1 || str.IndexOf("script") > -1 || str.IndexOf("declare") > -1 || str.IndexOf("exec") > -1)
        {
            Response.Redirect(ConfigurationManager.AppSettings["BetaSiteLink"] + "Logout.aspx");
        }
    }
       
</script>
