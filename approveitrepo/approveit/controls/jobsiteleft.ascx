<%@ Control Language="C#" AutoEventWireup="true" CodeFile="jobsiteleft.ascx.cs" Inherits="controls_jobsiteleft" %>
<!-- Sidebar -->
<script>
    function test(col, sp) {
        if (document.getElementById(col).style.display == "block") {
            document.getElementById(col).style.display = "none";
            document.getElementById(sp).innerHTML = '+';
        }
        else {
            document.getElementById(col).style.display = "block"
            document.getElementById(sp).innerHTML = '-';
        }
    }
</script>
<aside class="grid_1">
    <nav class="global">
        <ul class="clearfix">
            <%if (Session["PwdUpdated"].ToString().ToLower() == "true")
              { %>
            <%if (Request.RawUrl.ToLower().Contains("newexpense.aspx"))
              {%>
            <li class="active"><a onclick="test('expUl', 'sp1')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp1">-</span></a>
                <ul id="expUl" style="display: block">
                    <li class="active"><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a> </li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a> </li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <%if (Session["IsBudgAccessible"].ToString() == "1")
                      { %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                        onclick="showProgress();">Budget</a></li>
                    <%} if (Session["ReceivngMgr"].ToString() == "1")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                        onclick="showProgress();">Receive PO</a></li>
                    <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                        onclick="showProgress();">Fiscal Calendar</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                        onclick="showProgress();">Item Codes</a></li>
                    <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                      { %>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                        onclick="showProgress();">Rooms ForeCast</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                        onclick="showProgress();">Recur PO</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('appUl', 'sp2')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp2">+</span></a>
                <ul id="appUl" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("viewrequest.aspx"))
              { %><li class="active"><a onclick="test('Ul3', 'sp5')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp5">-</span></a>
                  <ul id="Ul3" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li class="active"><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul4', 'sp6')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp6">+</span></a>
                <ul id="Ul4" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%
              }%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                  <ul id="Ul100" style="display: none">
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                          onclick="showProgress();">My Timesheet</a></li>
                      <%if (Session["IsManager"] == "true")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                          onclick="showProgress();">Jobs</a></li>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                          onclick="showProgress();">Tasks</a></li>
                      <%} %>
                  </ul>
              </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("recieptstore.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li class="active"><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("myaccount.aspx"))
              {%><li><a onclick="test('Ul7', 'sp9')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp9">+</span></a>
                  <ul id="Ul7" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul8', 'sp10')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp10">+</span></a>
                <ul id="Ul8" style="display: none">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {  %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("editpassword.aspx"))
              {%><li><a onclick="test('Ul9', 'sp11')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp11">+</span></a>
                  <ul id="Ul9" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul10', 'sp12')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp12">+</span></a>
                <ul id="Ul10" style="display: none">
                    <%
                  if (Session["IsAP"] != null)
                  {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                  if (Session["IsManager"] != null)
                  {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("searchresults.aspx"))
              {%><li><a onclick="test('Ul11', 'sp13')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp13">+</span></a>
                  <ul id="Ul11" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul12', 'sp14')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp14">+</span></a>
                <ul id="Ul12" style="display: none">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("apapprovereject.aspx"))
              { %><li><a onclick="test('Ul13', 'sp15')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp15">+</span></a>
                  <ul id="Ul13" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgressAppr();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgressAppr();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgressAppr();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgressAppr();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgressAppr();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgressAppr();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgressAppr();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgressAppr();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgressAppr();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgressAppr();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgressAppr();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul14', 'sp16')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp16">-</span></a>
                <ul id="Ul14" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgressAppr();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgressAppr();">View Invoice</a></li>
                    <li class="active"><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgressAppr();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgressAppr();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgressAppr();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgressAppr();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgressAppr();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("mgrapprovereject.aspx"))
              { %><li><a onclick="test('Ul15', 'sp17')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp17">+</span></a>
                  <ul id="Ul15" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgressAppr();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgressAppr();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgressAppr();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgressAppr();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgressAppr();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgressAppr();">Budget</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgressAppr();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgressAppr();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul16', 'sp18')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp18">-</span></a>
                <ul id="Ul16" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgressAppr();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgressAppr();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgressAppr();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li class="active"><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgressAppr();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("policydocs.aspx"))
              { %><li><a onclick="test('Ul16', 'sp18')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp18">+</span></a>
                  <ul id="Ul16" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul17', 'sp19')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp19">-</span></a>
                <ul id="Ul17" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }

              else if (Request.RawUrl.ToLower().Contains("reimburse.aspx"))
              { %><li><a onclick="test('Ul16', 'sp18')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp18">+</span></a>
                  <ul id="Ul16" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul17', 'sp19')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp19">-</span></a>
                <ul id="Ul17" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("drafts.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li class="active"><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("budget.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li class="active"><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("pogen.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li class="active"><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("prefvend.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("exportbudgdetails.aspx"))
              { %><li><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("batchcreation.aspx"))
              { %><li><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li class="active"><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: block">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("invoice.aspx"))
              { %><li><a onclick="test('Ul13', 'sp15')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp15">+</span></a>
                  <ul id="Ul13" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul14', 'sp16')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp16">-</span></a>
                <ul id="Ul14" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("viewinvc.aspx"))
              { %><li><a onclick="test('Ul13', 'sp15')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp15">+</span></a>
                  <ul id="Ul13" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul14', 'sp16')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp16">-</span></a>
                <ul id="Ul14" style="display: block">
                    <% if (Session["IsAP"] != null)
                       {%>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li class="active"><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] != null)
                       {     %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("reports.aspx"))
              { %><li><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("dashboard.aspx"))
              { %><li><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">+</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("receivepo.aspx"))
              { %><li><a onclick="test('Ul50', 'sp70')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp70">+</span></a>
                  <ul id="Ul50" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul51', 'sp71')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp71">+</span></a>
                <ul id="Ul51" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("fiscalcal.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li class="active"><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("itemcodes.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("forecast.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("recurpo.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li class="active"><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("custquote.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: block">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li class="active"><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("ponotes.aspx"))
              { %><li><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
                <ul id="Ul100" style="display: none">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("useractivity.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">-</span></a>
                <ul id="Ul100" style="display: block">
                    <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("jobs.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">-</span></a>
                <ul id="Ul100" style="display: block">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              else if (Request.RawUrl.ToLower().Contains("tasks.aspx"))
              { %><li class="active"><a onclick="test('Ul5', 'sp7')" class="nav-icon icon-money"
                  href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp7">-</span></a>
                  <ul id="Ul5" style="display: none">
                      <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                          onclick="showProgress();">New Expense</a></li>
                      <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                          onclick="showProgress();">View Expenses</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                          onclick="showProgress();">Receipt Store</a></li>
                      <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                          onclick="showProgress();">Drafts</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                          onclick="showProgress();">Pref. Vendors</a></li>
                      <%if (Session["IsBudgAccessible"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                          onclick="showProgress();">Budget</a></li>
                      <%} if (Session["ReceivngMgr"].ToString() == "1")
                        { %>
                      <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ReceivePO.aspx"
                          onclick="showProgress();">Receive PO</a></li>
                      <%} if (Session["IsAdmin"].ToString().ToLower() == "true" || Session["IsAP"] != null)
                        { %>
                      <li><a class="nav-icon icon-calendar" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/FiscalCal.aspx"
                          onclick="showProgress();">Fiscal Calendar</a></li>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/ItemCodes.aspx"
                          onclick="showProgress();">Item Codes</a></li>
                      <%if (Session["BusinessType"].ToString().ToLower().Contains("hospitality"))
                        { %>
                      <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Forecast.aspx"
                          onclick="showProgress();">Rooms ForeCast</a></li>
                      <%} %>
                      <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecurPO.aspx"
                          onclick="showProgress();">Recur PO</a></li>
                      <%}  %>
                      <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                          onclick="showProgress();">My Quotes</a></li>
                  </ul>
              </li>
            <%if (Session["IsAP"] != null || Session["IsManager"] != null)
              { %>
            <li><a onclick="test('Ul6', 'sp8')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul6" style="display: none">
                    <%if (Session["IsAP"] != null)
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] != null)
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }
                    %>
                </ul>
            </li>
            <%}%><li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">-</span></a>
                <ul id="Ul100" style="display: block">
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/UserActivity.aspx"
                        onclick="showProgress();">My Timesheet</a></li>
                    <%if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Jobs.aspx"
                        onclick="showProgress();">Jobs</a></li>
                    <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Timesheet/Tasks.aspx"
                        onclick="showProgress();">Tasks</a></li>
                    <%} %>
                </ul>
            </li>
            <%
              }
              }
            %>
        </ul>
    </nav>
</aside>
<!-- Sidebar End -->
