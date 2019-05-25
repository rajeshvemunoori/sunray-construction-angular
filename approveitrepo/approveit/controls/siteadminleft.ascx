<%@ Control Language="C#" AutoEventWireup="true" CodeFile="siteadminleft.ascx.cs"
    Inherits="controls_siteadminleft" %>
<script>
    function test(col, sp) {
        if (document.getElementById(col).style.display == "block") {
            document.getElementById(col).style.display = "none";
            document.getElementById(sp).innerHTML = '+';
        }
        else {
            document.getElementById(col).style.display = "block";
            document.getElementById(sp).innerHTML = '-';
        }
    }
</script>
<aside class="grid_1">
    <nav class="global">
        <ul class="clearfix">
            <%if (Session["PwdUpdated"].ToString().ToLower() == "true")
              { %>
            <%if (Request.RawUrl.ToLower().Contains("createuser.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul1', 'sp1')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp1">-</span></a>
                <ul id="Ul1" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li class="active"><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul2', 'sp2')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp2">+</span></a>
                <ul id="Ul2" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%}%>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul3', 'sp3')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp3">+</span></a>
                <ul id="Ul3" style="display: none">
                    <%if (Session["IsAP"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                      if (Session["IsManager"] == "true")
                      {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%}%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("users1.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul7',
            'sp7')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp7">-</span></a>
                <ul id="Ul7" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li class="active"><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul8', 'sp8')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp8">+</span></a>
                <ul id="Ul8" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul9', 'sp9')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp9">+</span></a>
                <ul id="Ul9" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("editorganization.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul10', 'sp10')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp10">-</span></a>
                <ul id="Ul10" style="display: block">
                    <li class="active"><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul11', 'sp11')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp11">+</span></a>
                <ul id="Ul11" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul12', 'sp12')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp12">+</span></a>
                <ul id="Ul12" style="display: none">
                    <%if (Session["IsAP"] == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("newexpense.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: block">
                    <li class="active"><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("viewrequest.aspx"))
              {%>
            <li><a onclick="test('Ul19',
            'sp19')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp19">+</span></a>
                <ul id="Ul19" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul20',
            'sp20')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp20">-</span></a>
                <ul id="Ul20" style="display: block">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li class="active"><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul21', 'sp21')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp21">+</span></a>
                <ul id="Ul21" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("recieptstore.aspx"))
              {%>
            <li><a onclick="test('Ul22',
            'sp22')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp22">+</span></a>
                <ul id="Ul22" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul23',
            'sp23')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp23">-</span></a>
                <ul id="Ul23" style="display: block">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li class="active"><a class="nav-icon
            icon-rctstore"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul24', 'sp24')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp24">+</span></a>
                <ul id="Ul24" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("apapprovereject.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgressAppr();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgressAppr();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgressAppr();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgressAppr();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgressAppr();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgressAppr();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgressAppr();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgressAppr();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgressAppr();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgressAppr();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">-</span></a>
                <ul id="Ul27" style="display: block">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgressAppr();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgressAppr();">View Invoice</a></li>
                    <li class="active"><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgressAppr();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgressAppr();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("mgrapprovereject.aspx"))
              {%>
            <li><a onclick="test('Ul28',
            'sp28')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp28">+</span></a>
                <ul id="Ul28" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgressAppr();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgressAppr();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgressAppr();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgressAppr();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgressAppr();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgressAppr();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgressAppr();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul29', 'sp29')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp29">+</span></a>
                <ul id="Ul29" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgressAppr();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgressAppr();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgressAppr();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgressAppr();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul30', 'sp30')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp30">-</span></a>
                <ul id="Ul30" style="display: block">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgressAppr();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgressAppr();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgressAppr();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li class="active"><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgressAppr();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("myaccount.aspx"))
              {%>
            <li><a onclick="test('Ul31',
            'sp31')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp31">+</span></a>
                <ul id="Ul31" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul32', 'sp32')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp32">+</span></a>
                <ul id="Ul32" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul33', 'sp33')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp33">+</span></a>
                <ul id="Ul33" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("editpassword.aspx"))
              {%>
            <li><a onclick="test('Ul34',
            'sp34')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp34">+</span></a>
                <ul id="Ul34" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul35', 'sp35')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp35">+</span></a>
                <ul id="Ul35" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul36', 'sp36')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp36">+</span></a>
                <ul id="Ul36" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("policydocs.aspx"))
              {%>
            <li><a onclick="test('Ul37',
            'sp37')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp37">+</span></a>
                <ul id="Ul37" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul38', 'sp38')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp38">+</span></a>
                <ul id="Ul38" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul39', 'sp39')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp39">+</span></a>
                <ul id="Ul39" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("codeallocation.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li class="active"><a class="nav-icon icon-addcode" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"]
            == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New
                        Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("compcodecreation.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li class="active"><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("prefvend.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%}%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("reimburse.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("searchresults.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("deptexpitems.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("usergroups.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx"
                        onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("drafts.aspx"))
              {%>
            <li><a onclick="test('Ul22',
            'sp22')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp22">+</span></a>
                <ul id="Ul22" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul23',
            'sp23')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp23">-</span></a>
                <ul id="Ul23" style="display: block">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon
            icon-rctstore"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li class="active"><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul24', 'sp24')" class="nav-icon
            icon-tick"
                href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp24">+</span></a>
                <ul id="Ul24" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("pogen.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: block">
                    <li class="active"><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("budget.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("exportbudgdetails.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("batchcreation.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("invoice.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">-</span></a>
                <ul id="Ul27" style="display: block">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li class="active"><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("viewinvc.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">-</span></a>
                <ul id="Ul27" style="display: block">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li class="active"><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("reports.aspx"))
              {%>
            <li><a onclick="test('Ul13',
'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
== "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul14',
'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">-</span></a>
                <ul id="Ul14" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
== "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
%>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("dashboard.aspx"))
              {%>
            <li><a onclick="test('Ul13',
            'sp13')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp13">+</span></a>
                <ul id="Ul13" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul14',
            'sp14')"
                class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span
                    id="sp14">+</span></a>
                <ul id="Ul14" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%=
            ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View
                        Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul15',
            'sp15')"
                class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span
                    id="sp15">+</span></a>
                <ul id="Ul15" style="display: none">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("receivepo.aspx"))
              {%>
            <li><a onclick="test('Ul50',
            'sp50')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp50">+</span></a>
                <ul id="Ul50" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul51', 'sp51')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp51">-</span></a>
                <ul id="Ul51" style="display: block">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul52', 'sp52')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp52">+</span></a>
                <ul id="Ul52" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("fiscalcal.aspx"))
              {%>
            <li><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">-</span></a>
                <ul id="Ul40" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">+</span></a>
                <ul id="Ul41" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("itemcodes.aspx"))
              {%>
            <li><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">+</span></a>
                <ul id="Ul40" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">-</span></a>
                <ul id="Ul41" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("forecast.aspx"))
              {%>
            <li><a onclick="test('Ul40', 'sp40')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp40">+</span></a>
                <ul id="Ul40" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul41', 'sp41')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp41">-</span></a>
                <ul id="Ul41" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul42', 'sp42')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp42">+</span></a>
                <ul id="Ul42" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if (Request.RawUrl.ToLower().Contains("recurpo.aspx"))
              {%>
            <li><a onclick="test('Ul43', 'sp43')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp43">+</span></a>
                <ul id="Ul43" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul44', 'sp44')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp44">-</span></a>
                <ul id="Ul44" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <%} %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul45', 'sp45')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp45">+</span></a>
                <ul id="Ul45" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if (Request.RawUrl.ToLower().Contains("custquote.aspx"))
              {%>
            <li><a onclick="test('Ul43', 'sp43')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp43">+</span></a>
                <ul id="Ul43" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li class="active"><a onclick="test('Ul44', 'sp44')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp44">-</span></a>
                <ul id="Ul44" style="display: block">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
                    <li class="active"><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Quotations/CustQuote.aspx"
                        onclick="showProgress();">My Quotes</a></li>
                </ul>
            </li>
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul45', 'sp45')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp45">+</span></a>
                <ul id="Ul45" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if (Request.RawUrl.ToLower().Contains("ponotes.aspx"))
              {%>
            <li><a onclick="test('Ul43', 'sp43')" class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp43">+</span></a>
                <ul id="Ul43" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"] == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul44', 'sp44')" class="nav-icon icon-money"
                href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp44">-</span></a>
                <ul id="Ul44" style="display: none">
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx"
                        onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul45', 'sp45')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp45">+</span></a>
                <ul id="Ul45" style="display: none">
                    <% if (Session["IsAP"] == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%}
                       if (Session["IsManager"] == "true")
                       {         %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <%  }%>
                </ul>
            </li>
            <%
               }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("leftmenuctrl.aspx"))
              {%>
            <li><a onclick="test('Ul28',
            'sp28')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp28">+</span></a>
                <ul id="Ul28" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgressAppr();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgressAppr();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgressAppr();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul29', 'sp29')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp29">+</span></a>
                <ul id="Ul29" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgressAppr();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgressAppr();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgressAppr();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgressAppr();">Drafts</a></li>
                    <%if (Session["IsBudgAccessible"].ToString() == "1")
                      { %>
                    <li><a class="nav-icon icon-budget" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Budget.aspx"
                        onclick="showProgressAppr();">Budget</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li class="active"><a onclick="test('Ul30', 'sp30')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp30">-</span></a>
                <ul id="Ul30" style="display: block">
                    <% if (Session["IsAP"]
            == "true")
                       { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgressAppr();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgressAppr();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgressAppr();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                       { %>
                    <li class="active"><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgressAppr();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("integration.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp25">-</span></a>
                <ul id="Ul25" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li class="active"><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">+</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("jobs.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li class="active"><a onclick="test('Ul100', 'spn100')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn100">-</span></a>
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
              }
              else if
(Request.RawUrl.ToLower().Contains("tasks.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li class="active"><a onclick="test('Ul101', 'spn101')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn101">-</span></a>
                <ul id="Ul101" style="display: block">
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
              else if
(Request.RawUrl.ToLower().Contains("useractivity.aspx"))
              {%>
            <li><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">+</span></a>
                <ul id="Ul25" style="display: none">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>SyncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li class="active"><a onclick="test('Ul102', 'spn102')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn102">-</span></a>
                <ul id="Ul102" style="display: block">
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
              }
              else if
(Request.RawUrl.ToLower().Contains("syncacc.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">-</span></a>
                <ul id="Ul25" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li class="active"><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>syncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul102', 'spn102')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn102">+</span></a>
                <ul id="Ul102" style="display: none">
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
              }
              else if
(Request.RawUrl.ToLower().Contains("locations.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">-</span></a>
                <ul id="Ul25" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>syncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li class="active"><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul102', 'spn102')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn102">+</span></a>
                <ul id="Ul102" style="display: none">
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
              }
              else if
(Request.RawUrl.ToLower().Contains("inventorymgmt.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul25',
            'sp25')"
                class="nav-icon icon-chief" href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span
                    id="sp25">-</span></a>
                <ul id="Ul25" style="display: block">
                    <li><a class="nav-icon icon-org" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/EditOrganization.aspx"
                        onclick="showProgress();">Organization Info</a></li>
                    <%if (Session["GAdmin"] == "true")
                      { %>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/Compcodecreation.aspx"
                        onclick="showProgress();">Company Locations</a></li>
                    <%} %>
                    <li><a class="nav-icon icon-tenant" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Admin/Users1.aspx"
                        onclick="showProgress();">Users</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/CodeAllocation.aspx"
                        onclick="showProgress();">Code Allocation</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>Codes/PrefVend.aspx"
                        onclick="showProgress();">Pref. Vendors</a></li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/DeptExpItems.aspx"
                        onclick="showProgress();">Budget Classifications</a></li>
                    <li><a class="nav-icon icon-addcode"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>UserGroups.aspx" onclick="showProgress();">Group Profiles</a></li>
                    <li><a class="nav-icon icon-intgr" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Integration.aspx"
                        onclick="showProgress();">Integration</a></li>
                    <li><a class="nav-icon icon-recur" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>syncAcc.aspx"
                        onclick="showProgress();">Sync Data</a></li>
                    <li><a class="nav-icon icon-building" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/Locations.aspx"
                        onclick="showProgress();">Inv. Locations</a></li>
                    <li class="active"><a class="nav-icon icon-setting" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Inventory/InventoryMgmt.aspx"
                        onclick="showProgress();">Inv. Adjustments</a></li>
                </ul>
            </li>
            <%if (Session["IsAP"]
            == "true" || Session["IsManager"] == "true" || Session["AdminUser"] != null)
              {%>
            <li><a onclick="test('Ul26', 'sp26')" class="nav-icon icon-money" href="javascript:void(0)">Expenses&nbsp;&nbsp;&nbsp;<span id="sp26">+</span></a>
                <ul id="Ul26" style="display: none">
                    <li><a class="nav-icon
            icon-newexp"
                        href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>NewExpense.aspx" onclick="showProgress();">New Expense</a></li>
                    <li><a class="nav-icon icon-vwexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>ViewRequest.aspx"
                        onclick="showProgress();">View Expenses</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>RecieptStore.aspx"
                        onclick="showProgress();">Receipt Store</a></li>
                    <li><a class="nav-icon icon-rctstore" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Drafts.aspx"
                        onclick="showProgress();">Drafts</a></li>
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
            <% if (Session["IsAP"] == "true" || Session["IsManager"] == "true")
               {%>
            <li><a onclick="test('Ul27', 'sp27')" class="nav-icon icon-tick" href="javascript:void(0)">Approvals&nbsp;&nbsp;&nbsp;<span id="sp27">+</span></a>
                <ul id="Ul27" style="display: none">
                    <%if (Session["IsAP"]
            == "true")
                      { %>
                    <li><a class="nav-icon icon-inv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Invoice.aspx"
                        onclick="showProgress();">Invoice</a></li>
                    <li><a class="nav-icon icon-viewinv" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>ViewInvc.aspx"
                        onclick="showProgress();">View Invoice</a></li>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>APApproveReject.aspx"
                        onclick="showProgress();">AP Approval(<%=Session["APPendingExpensesCnt"] %>)</a></li>
                    <%} if (Session["IsManager"] == "true")
                      { %>
                    <li><a class="nav-icon icon-tick" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"]
            %>MgrApproveReject.aspx"
                        onclick="showProgress();">Mgr Approval(<%=Session["MgrPendingExpensesCnt"] %>)</a></li>
                    <% }%>
                </ul>
            </li>
            <% }%>
            <li><a onclick="test('Ul102', 'spn102')" class="nav-icon icon-time" href="javascript:void(0)">TimeSheet&nbsp;&nbsp;&nbsp;<span id="spn102">+</span></a>
                <ul id="Ul102" style="display: none">
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
              }
              }
            %>
        </ul>
    </nav>
</aside>
