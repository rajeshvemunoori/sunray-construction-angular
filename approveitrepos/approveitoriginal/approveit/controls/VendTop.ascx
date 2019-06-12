<%@ Control Language="C#" AutoEventWireup="true" CodeFile="VendTop.ascx.cs" Inherits="controls_VendTop" %>
<header>
    <div class="container_8 clearfix">
        <h1 class="grid_1">
            <a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/VendShipTo.aspx">
                <img src="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>images/approveIt_logo.png" alt="ApproveIt" width="100" /></a> </h1>
        <nav class="grid_6">
            <ul class="clearfix">
                <li class="fr"><a href="#">Welcome&nbsp;<%= Session["username"]%>
                    <span class="arrow-down"></span></a>
                    <ul>
                        <%--  <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MyAccount.aspx" onclick="showProgress();">
                            My Account</a></li>--%>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>EditPassword.aspx"
                            onclick="showProgress();">Change Password</a></li>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Logout.aspx" onclick="showProgress();">Sign out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</header>
