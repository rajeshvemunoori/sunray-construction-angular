<%@ Control Language="C#" AutoEventWireup="true" CodeFile="leftmenu.ascx.cs" Inherits="controls_leftmenu" %>

<nav class="cd-side-nav" style="s">
    <%if (Session["PwdUpdated"].ToString().ToLower() == "true")
      { %>
    <ul>
        <li class="cd-label">App Links</li>
        <%=str %>
    </ul>
    <%} %>
</nav>
 
