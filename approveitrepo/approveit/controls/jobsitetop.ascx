<%@ Control Language="C#" AutoEventWireup="true" CodeFile="jobsitetop.ascx.cs" Inherits="controls_jobsitetop" %>
 <div class="container-fluid">
<div class="row">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;margin:0px;" >
<header class="cd-main-header">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2" style="padding:0px;margin:0px;" >
             <!--Logo-->
                <div class="cd-logo">
                    <a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx">
                        <img src="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>latestdesign/img/approveIt_logo.png" style="width:130px;height:50px; padding: 0px; margin: 0px; overflow: hidden;margin:0 auto; text-align:center;" alt="ApproveIt" /></a>
                </div>
               <%-- &emsp;<span class="companyname">&emsp;<%=Session["SOrgName"] %></span>--%>
              <a href="#0" class="cd-nav-trigger"><span></span></a>
                <!--Logo-->
        </div>
         <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style="padding:0px;margin:0px;" >
           
    <nav class="cd-nav">
        <ul class="cd-top-nav">
            
            <!--QuickLinks-->
            <li class="has-children quickLinks"  style="margin-right: -3px;">
                <a href="#0"><span class="small"><i class="glyphicon glyphicon-random"></i>&nbsp;&nbsp;Quick Links</span></a>
                <ul>
                    <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                      {
                          if (Session["PwdUpdated"].ToString().ToLower() == "true")
                          {
                              if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
                              {%>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                        onclick="showProgress();" >Home</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();" >Create Expense</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ExportBudgDetails.aspx"
                        onclick="showProgress();" >Forecast</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                        onclick="showProgress();" >Reports</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                        onclick="showProgress();" >Policy Docs</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PONotes.aspx"
                        onclick="showProgress();" >Notes</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DownloadPOs.aspx"
                        onclick="showProgress();" >Export POs</a></li>
                    <%}
                              else
                              {
                    %>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>DashBoard.aspx"
                        onclick="showProgress();" >Home</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();" >Create Expense</a> </li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Reports.aspx"
                        onclick="showProgress();" >Reports</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>PolicyDocs.aspx"
                        onclick="showProgress();" >Policy Docs</a></li>

                    <%}
                          }
                      }%>
                </ul>
            </li>
            <!--QuickLinks-->
            <!--Welcome User-->
            <li class="has-children account">
                <a href="#0">
                    <%--<img src="img/cd-avatar.png" alt="avatar" />--%><span class="small">Welcome&nbsp;<span class="label"><%= Session["username"]%></span></span>
                </a>
                <ul>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MyAccount.aspx" onclick="showProgress();">My Account</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>EditPassword.aspx"
                        onclick="showProgress();">Change Password</a></li>
                    <li><a href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Logout.aspx" onclick="showProgress();">Sign out</a></li>
                </ul>
            </li>
            <!--Welcome User-->
        </ul>
    </nav>
         </div>
    </div>
   
    
    <!--Org name-->
    <%--<div class="grid_2">
        <div style="height: 11px;">
            &nbsp;
        </div>
        <span style="color: white; text-transform: capitalize"><%=Session["SOrgName"] %></span>
    </div>--%>
    <!--Org name-->
</header>
</div>
</div>