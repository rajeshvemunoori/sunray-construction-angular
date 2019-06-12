<%@ Control Language="C#" AutoEventWireup="true" CodeFile="leftmenu.ascx.cs" Inherits="controls_leftmenu" %>
<aside>
    <nav class="global">
        <%if (Session["PwdUpdated"].ToString().ToLower() == "true")
          { %>
        <div id='cssmenu'>
            <ul>
                <%=str %>
            </ul>
        </div>
        <%} %>
    </nav>
</aside>
