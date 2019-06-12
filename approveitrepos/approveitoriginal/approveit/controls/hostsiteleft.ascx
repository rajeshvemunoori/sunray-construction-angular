<%@ Control Language="C#" AutoEventWireup="true" CodeFile="hostsiteleft.ascx.cs"
    Inherits="controls_hostsiteleft" %>
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
            <%if (Request.RawUrl.ToLower().Contains("hostindex.aspx"))
              {%>
            <li class="active"><a onclick="test('expUl', 'sp1')" class="nav-icon icon-money"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="sp1">-</span></a>
                <ul id="expUl" style="display: block">
                    <li class="active"><a class="nav-icon icon-house" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>HostIndex.aspx"
                        onclick="showProgress();">Home</a> </li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CompCodeCreation.aspx"
                        onclick="showProgress();">Company Codes</a> </li>
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>CSNewExpense.aspx"
                        onclick="showProgress();">CS New Expense</a> </li>
                </ul>
            </li>
            <%} %>
            <%if (Request.RawUrl.ToLower().Contains("compcodecreation.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul1', 'Span1')" class="nav-icon icon-money"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="Span1">-</span></a>
                <ul id="Ul1" style="display: block">
                    <li><a class="nav-icon icon-house" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>HostIndex.aspx"
                        onclick="showProgress();">Home</a> </li>
                    <li class="active"><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CompCodeCreation.aspx"
                        onclick="showProgress();">Company Codes</a> </li>
                    <li><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>CSNewExpense.aspx"
                        onclick="showProgress();">CS New Expense</a> </li>
                </ul>
            </li>
            <%} %>
            <%if (Request.RawUrl.ToLower().Contains("csnewexpense.aspx"))
              {%>
            <li class="active"><a onclick="test('Ul2', 'Span2')" class="nav-icon icon-money"
                href="javascript:void(0)">Admin&nbsp;&nbsp;&nbsp;<span id="Span2">-</span></a>
                <ul id="Ul2" style="display: block">
                    <li><a class="nav-icon icon-house" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>HostIndex.aspx"
                        onclick="showProgress();">Home</a> </li>
                    <li><a class="nav-icon icon-addcode" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>Codes/CompCodeCreation.aspx"
                        onclick="showProgress();">Company Codes</a> </li>
                    <li class="active"><a class="nav-icon icon-newexp" href="<%= ConfigurationManager.AppSettings["BetaSiteLink"] %>CSNewExpense.aspx"
                        onclick="showProgress();">CS New Expense</a> </li>
                </ul>
            </li>
            <%} %>
        </ul>
    </nav>
</aside>