<%@ Control Language="C#" AutoEventWireup="true" CodeFile="jobsitetop.ascx.cs" Inherits="controls_jobsitetop" %>
<header>
    <style>
        .menu {
            text-align: left;
            display: inline;
            margin: 0;
            padding: 5px;
            list-style: none;
            -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        }

            .menu li {
                font: bold 12px/18px sans-serif;
                display: inline-block;
                margin-right: -4px;
                position: relative;
                padding: 15px 20px;
                background: #fff;
                cursor: pointer;
                -webkit-transition: all 0.2s;
                -moz-transition: all 0.2s;
                -ms-transition: all 0.2s;
                -o-transition: all 0.2s;
                transition: all 0.2s;
            }

                .menu li:hover {
                    background: #555;
                    color: #fff;
                }

                .menu li ul {
                    padding: 0;
                    position: absolute;
                    /*top: 48px;*/
                    left: 0;
                    width: 150px;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                    display: none;
                    opacity: 0;
                    visibility: hidden;
                    -webkit-transiton: opacity 0.2s;
                    -moz-transition: opacity 0.2s;
                    -ms-transition: opacity 0.2s;
                    -o-transition: opacity 0.2s;
                    -transition: opacity 0.2s;
                }

                    .menu li ul li {
                        background: #555;
                        display: block;
                        color: #fff;
                        text-shadow: 0 -1px 0 #000;
                    }

                        .menu li ul li:hover {
                            /*background: #666;*/
                        }

                .menu li:hover ul {
                    display: block;
                    opacity: 1;
                    visibility: visible;
                }
    </style>
    <div class="container_8 clearfix">
        <h1 class="grid_1">
            <a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx">
                <%--<img src="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>images/approveIt_logo.png" alt="ApproveIt" width="100" /></a> </h1>--%>
                <img src="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>images/approveIt_logo.png" alt="ApproveIt" width="100" /></a> </h1>
        <nav class="grid_5">
            <ul class="menu">
                <li>Quick Links
                            <ul>
                                <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                                  {
                                      if (Session["PwdUpdated"].ToString().ToLower() == "true")
                                      {
                                          if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
                                          {%>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Home'">Home</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'NewExpense'">Create Expense</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ExportBudgDetails.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Forecast Details'">Forecast</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Reports'">Reports</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Policy Documents'">Policy Docs</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PONotes.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Notes'">Notes</a></li>
                                <%}
                                          else
                                          {
                                %>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Dashboard'">Home</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'NewExpense'">Create Expense</a> </li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Reports'">Reports</a></li>
                                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                                    onclick="showProgress();" onmouseover="this.title = 'Policy Documents'">Policy Docs</a></li>
                            </ul>
                </li>
                <%}
                                      }
                                  }%>
            </ul>
        </nav>
        <nav class="grid_5">
            <ul>
                <li class="fr"><a href="#">Welcome&nbsp;<%= Session["username"]%>
                    <span class="arrow-down"></span></a>
                    <ul>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MyAccount.aspx" onclick="showProgress();">My Account</a></li>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>EditPassword.aspx"
                            onclick="showProgress();">Change Password</a></li>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Logout.aspx" onclick="showProgress();">Sign out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="grid_2">
            <div style="height: 7px;">
                &nbsp;
            </div>
            <asp:TextBox ID="txtjobsiteSearch" runat="server" class="full" placeholder="Search..."
                Width="150" OnTextChanged="txtjobsiteSearch_TextChanged" AutoPostBack="true"></asp:TextBox>
        </div>
        <div class="grid_2">
            <div style="height: 11px;">
                &nbsp;
            </div>
            <span style="color: white; text-transform: capitalize"><%=Session["SOrgName"] %></span>
        </div>
    </div>
    <%--<div class="container_8 clearfix">
        <h1 class="grid_1">
            <a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx">
                <img src="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>images/approveIt_logo.png" alt="ApproveIt" width="100" /></a> </h1>
        <nav class="grid_5">
            <ul class="clearfix">
                <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                  {
                      if (Session["PwdUpdated"].ToString().ToLower() == "true")
                      {
                          if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
                          {%>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'NewExpense'">
                    <span class="moneyadd"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Policy Documents'">
                    <span class="attach"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Dashboard'">
                    <span class="dashBoard"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Reports'">
                    <span class="report"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ExportBudgDetails.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Forecast Details'">
                    <span class="forecast"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PONotes.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Notes'">
                    <span class="pencil"></span>&nbsp;</a></li>
                <%}
                          else
                          {
                %>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'NewExpense'">
                    <span class="moneyadd"></span>&nbsp;</a> </li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Policy Documents'">
                    <span class="attach"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Dashboard'">
                    <span class="dashBoard"></span>&nbsp;</a></li>
                <li class="action"><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                    class="button button-blue" onclick="showProgress();" onmouseover="this.title = 'Reports'">
                    <span class="report"></span>&nbsp;</a></li>
                <%}
                      }
                  }%>
                <li class="fr"><a href="#">Welcome&nbsp;<%= Session["username"]%>
                    <span class="arrow-down"></span></a>
                    <ul>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MyAccount.aspx" onclick="showProgress();">My Account</a></li>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>EditPassword.aspx"
                            onclick="showProgress();">Change Password</a></li>
                        <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Logout.aspx" onclick="showProgress();">Sign out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="grid_2">
            <div style="height: 7px;">
                &nbsp;
            </div>
            <asp:TextBox ID="txtjobsiteSearch" runat="server" class="full" placeholder="Search..."
                Width="150" OnTextChanged="txtjobsiteSearch_TextChanged" AutoPostBack="true"></asp:TextBox>
        </div>
        <div class="grid_2">
            <div style="height: 11px;">
                &nbsp;
            </div>
            <span style="color: white; text-transform: capitalize"><%=Session["SOrgName"] %></span>
        </div>
    </div>--%>
</header>
