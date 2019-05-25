<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendQuote.aspx.cs" Inherits="Quotations_VendQuote" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ApproveIt - Quotations</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/DateSetup.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $("input[id$=txtPromiseDt]").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
        }

        /*Validations for Header and Line item fields in Vendor Quotation screen*/
        function validateVendQuoteMaster() {
            //var errStr = 'Please select ';
            //$11('dvMsg').innerHTML = '';
            //$11('dvMsg').style.color = "red";
            //if ($11('txtDiscCode').value == 0)
            //    errStr += 'DiscountCode, ';
            //errStr = errStr.substring(0, errStr.length - 2);
            //if (errStr.length > 13) {
            //    $11('dvMsg').innerHTML = errStr;
            //    return false;
            //}
            //else
            return true;
        }

        function validateVendQuoteDetails() {
            if (validateVendQuoteMaster()) {
                var errStyle = "1px solid Red";
                var normStyle = "1px solid #ccc";
                var grid = $11('<%=gvQuoteDetails.ClientID %>');
                if (grid != null) {
                    var len = grid.rows.length;
                    if (len > 0) {
                        var cnt = 0;
                        for (var i = 2; i <= len + 1; i++) {
                            if (i <= 9) {
                                i = '0' + i;
                            }
                            //if ($11(grid.id + '_ctl' + i + '_txtComments').value == "0" || $11(grid.id + '_ctl' + i + '_txtComments').value == '') {
                            //    cnt++;
                            //    $11(grid.id + '_ctl' + i + '_txtComments').style.border = errStyle;
                            //}
                            //else
                            //    $11(grid.id + '_ctl' + i + '_txtComments').style.border = normStyle;
                            if ($11(grid.id + '_ctl' + i + '_txtVendProd').value == "0" || $11(grid.id + '_ctl' + i + '_txtVendProd').value == '') {
                                cnt++;
                                $11(grid.id + '_ctl' + i + '_txtVendProd').style.border = errStyle;
                            }
                            else
                                $11(grid.id + '_ctl' + i + '_txtVendProd').style.border = normStyle;
                            if ($11(grid.id + '_ctl' + i + '_txtVendProdDescr').value == "0" || $11(grid.id + '_ctl' + i + '_txtVendProdDescr').value == '') {
                                cnt++;
                                $11(grid.id + '_ctl' + i + '_txtVendProdDescr').style.border = errStyle;
                            }
                            else
                                $11(grid.id + '_ctl' + i + '_txtVendProdDescr').style.border = normStyle;
                            if ($11(grid.id + '_ctl' + i + '_txtAvailQty').value == "0" || $11(grid.id + '_ctl' + i + '_txtAvailQty').value == '' || isNaN($11(grid.id + '_ctl' + i + '_txtAvailQty').value)) {
                                cnt++;
                                $11(grid.id + '_ctl' + i + '_txtAvailQty').style.border = errStyle;
                            }
                            else
                                $11(grid.id + '_ctl' + i + '_txtAvailQty').style.border = normStyle;
                            if ($11(grid.id + '_ctl' + i + '_txtUnitPrice').value == "0" || $11(grid.id + '_ctl' + i + '_txtUnitPrice').value == '' || isNaN($11(grid.id + '_ctl' + i + '_txtUnitPrice').value)) {
                                cnt++;
                                $11(grid.id + '_ctl' + i + '_txtUnitPrice').style.border = errStyle;
                            }
                            else
                                $11(grid.id + '_ctl' + i + '_txtUnitPrice').style.border = normStyle;
                            //if ($11(grid.id + '_ctl' + i + '_txtTRSPMode').value == "0" || $11(grid.id + '_ctl' + i + '_txtTRSPMode').value == '') {
                            //    cnt++;
                            //    $11(grid.id + '_ctl' + i + '_txtTRSPMode').style.border = errStyle;
                            //}
                            //else
                            //    $11(grid.id + '_ctl' + i + '_txtTRSPMode').style.border = normStyle
                            if ($11(grid.id + '_ctl' + i + '_txtPromiseDt').value == "0" || $11(grid.id + '_ctl' + i + '_txtPromiseDt').value == '' || Date.parse($11(grid.id + '_ctl' + i + '_txtPromiseDt').value) < Date.parse($11('hdnCurrDate').value)) {
                                cnt++;
                                $11(grid.id + '_ctl' + i + '_txtPromiseDt').style.border = errStyle;
                            }
                            else
                                $11(grid.id + '_ctl' + i + '_txtPromiseDt').style.border = normStyle;
                        }
                        if (cnt > 0) {
                            $11("dvMsg").innerHTML = "Please provide valid inputs.";
                            $11("dvMsg").style.color = "Red";
                            return false;
                        }
                    }
                }
            }
            else
                return false;
        }
        /*Validations for Header and Line item fields in Vendor Quotation screen*/

        /*Calculating Line amount and Line Total*/
        function validateNumber(id) {
            if (isNaN(id.value)) {
                id.style.border = "1px solid Red";
                $11("dvMsg").innerHTML = "Please provide only numbers.";
                return false;
            }
            else {
                id.style.border = "1px solid #ccc";
                $11("dvMsg").innerHTML = "";
                return true;
            }
        }

        function CalculateLineTotalAmount(aQ, uP, lA, t1, t2, t3, sC, dP, dA, lT) {
            var availQty, unitPrice, tax1, tax2, tax3, shipCost, discPrcnt, discAmnt, lintTotal, lineAmnt;

            //Validate input parameters
            if (validateNumber(aQ))
                availQty = aQ.value == '' ? 0 : parseFloat(aQ.value);
            if (validateNumber(uP))
                unitPrice = uP.value == '' ? 0 : parseFloat(uP.value);
            if (validateNumber(t1))
                tax1 = t1.value == '' ? 0 : parseFloat(t1.value);
            if (validateNumber(t2))
                tax2 = t2.value == '' ? 0 : parseFloat(t2.value);
            if (validateNumber(t3))
                tax3 = t3.value == '' ? 0 : parseFloat(t3.value);
            if (validateNumber(sC))
                shipCost = sC.value == '' ? 0 : parseFloat(sC.value);
            if (validateNumber(dP))
                discPrcnt = dP.value == '' ? 0 : parseFloat(dP.value);
            //Validate input parameters

            //Calculate LineAmount
            lA.value = availQty * unitPrice;
            lineAmnt = lA.value = parseFloat(lA.value).toFixed(2);
            //Calculate LineAmount

            //Calculate Discount Amount
            dA.value = (discPrcnt * lineAmnt) / 100;
            discAmnt = dA.value = parseFloat(dA.value).toFixed(2);
            //Calculate Discount Amount

            //Calculate Line Total Amount
            lT.innerHTML = parseFloat((parseFloat(lineAmnt) + parseFloat(tax1) + parseFloat(tax2) + parseFloat(tax3) + parseFloat(shipCost)) - parseFloat(discAmnt)).toFixed(2);
            //Calculate Line Total Amount
        }
        /*Calculating Line amount and Line Total*/

    </script>
    <style>
        .modalBackground {
            /*background-color: #F8F8F8;
            filter: alpha(opacity=70);
            opacity: 0.9;
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: Red;
                font-size: 1em;
                font-weight: bold;
            }

        .smalltab td {
            padding: 5px;
        }

        .tab td {
            padding: 15px;
            vertical-align: top;
        }

        .tbBorder td {
            padding: 10px;
            border: 1px solid #000;
        }

        .lnk {
            color: White;
        }

        #gvQuoteListjEsCoOl_headerDiv,#gvQuoteDetailsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvQuoteListjEsCoOl_headerDiv div table tbody tr th,#gvQuoteDetailsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-shadow: #012b4d 2px 2px 2px;
                text-align: center;
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvQuoteList tbody tr td,#gvQuoteDetails tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
        }

        #gvQuoteListjEsCoOl_mainDiv,#gvQuoteDetailsjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        /*#gvQuoteDetailsjEsCoOl_headerDiv div table tbody tr th {
            height: 30px;
            background-image: url('../img/th.png');
            background-repeat: no-repeat;
            color: white;
            text-shadow: #012b4d 2px 2px 2px;
            text-align: center;           
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
        }

        #gvQuoteDetails tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvQuoteDetailsjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvQuoteDetails TR TD, #gvQuoteDetails TR TH, #gvQuoteDetails TR TH div, #gvQuoteDetails TR TD div {
            overflow: visible;
        }*/
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc1:vTop ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc2:vLeft ID="left1" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
                        <!-- the tabs -->
                        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server" ScriptMode="Release">
                        </cc1:ToolkitScriptManager>
                        <script type="text/javascript">
                            var prm = Sys.WebForms.PageRequestManager.getInstance();
                            prm.add_initializeRequest(InitializeRequest);
                            prm.add_endRequest(EndRequest);
                            function InitializeRequest(sender, args) {
                            }
                            function EndRequest(sender, args) {
                            }
                        </script>
                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="../images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                <div class="main-content grid_4 alpha" style="width: 1080px; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%">
                                                        <h2>Quotations
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div class="divfieldset">
                                                            <table class="smalltab">
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Response Date</label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="right">
                                                                        <small>
                                                                            <label>
                                                                                From:</label></small>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:TextBox ID="txtFrom" runat="server" Width="90px" class="date"></asp:TextBox>
                                                                    </td>
                                                                    <td align="right">
                                                                        <small>
                                                                            <label>
                                                                                To:</label></small>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:TextBox ID="txtTo" runat="server" Width="90px" class="date"></asp:TextBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="FetchDataBetweenDates" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <table class="tab">
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Status:&nbsp;</label></small><br />
                                                                    <asp:DropDownList ID="ddlStatus" runat="server" Width="200px" AutoPostBack="true"
                                                                        OnSelectedIndexChanged="GetSelectedQuotesByStatus">
                                                                        <asp:ListItem Text="All" Value="0"></asp:ListItem>
                                                                        <asp:ListItem Text="OPEN" Value="OPEN">OPEN</asp:ListItem>
                                                                        <asp:ListItem Text="CLOSED" Value="CLOSED">CLOSED</asp:ListItem>
                                                                        <asp:ListItem Text="CANCELLED" Value="CANCELLED">CANCELLED</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Customer Name:&nbsp;</label></small><br />
                                                                    <asp:DropDownList ID="ddlCustName" runat="server" Width="200px" AutoPostBack="true"
                                                                        OnSelectedIndexChanged="GetSelectedQuotesByCustName">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </table>
                                            <br />
                                            <div id="dvMainGrid">
                                                <isx:CoolGridView ID="gvQuoteList" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvQuoteList_RowDataBound"
                                                    Width="700px" Height="300px">
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHQuoteID" runat="server" Text="Quote ID" CommandArgument="quoteId"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><asp:LinkButton ID="lnkQuoteID" runat="server" Text='<%#Eval("quoteId") %>' OnClick="Edit"></asp:LinkButton></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHCustName" runat="server" Text="Cust. Name" CommandArgument="customerName"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("customerName")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHShipID" runat="server" Text="Ship ID" CommandArgument="vendShipId"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("vendShipId")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHQuoteStatus" runat="server" Text="Quote Status" CommandArgument="status"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("status")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHRespBy" runat="server" Text="Response By" CommandArgument="responseBy"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Convert.ToDateTime(Eval("responseBy")).ToShortDateString()%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="View">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkEdit" runat="server" OnClick="Edit" Text="View"><img src="../images/icons/arrow_out.png" /></asp:LinkButton>
                                                                <asp:HiddenField ID="hdnOrgID" runat="server" Value='<%#Eval("OrgID") %>' />
                                                                <asp:HiddenField ID="hdnCompCode" runat="server" Value='<%#Eval("compCode") %>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                </isx:CoolGridView>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlQuote" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 1000px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">View Quotation
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveQuote" />
                                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="SubmitDetails" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="CloseWindow"></asp:Button>
                                                                <asp:Button ID="btnReloadDetails" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadQuote"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server">
                                                        </div>
                                                        <table class="tab">
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Quote ID:&nbsp; <b>
                                                                            <asp:Label ID="lblQuoteID" runat="server"></asp:Label></b></label>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Quote Descr.:</label><br />
                                                                    <asp:TextBox ID="txtQuoteDesc" runat="server" TextMode="MultiLine" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Shipping Location:</label><br />
                                                                    <asp:TextBox ID="txtShipLoc" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Quote Status:&nbsp;
                                                                    <asp:Label ID="lblQuoteStatus" runat="server" Style="font-size: 1.5em"></asp:Label>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Customer Name:</label><br />
                                                                    <asp:TextBox ID="txtCustName" runat="server" ReadOnly="true"></asp:TextBox>
                                                                    <asp:HiddenField ID="hdnQuoteOrgID" runat="server" />
                                                                    <asp:HiddenField ID="hdnQuoteCompCode" runat="server" />
                                                                    <asp:HiddenField ID="hdnCurrDate" runat="server" />
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Customer Contact:</label><br />
                                                                    <asp:TextBox ID="txtCustContact" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Vendor BillTo:</label><br />
                                                                    <asp:TextBox ID="txtVendBillTo" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Vendor ShipTo:</label><br />
                                                                    <asp:TextBox ID="txtVendShipTo" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Currency:</label><br />
                                                                    <%--<asp:TextBox ID="txtCurrency" runat="server"></asp:TextBox>--%>
                                                                    <asp:DropDownList ID="ddlCurrency" runat="server" Width="170px">
                                                                        <asp:ListItem Text="AUD" Value="AUD"></asp:ListItem>
                                                                        <asp:ListItem Text="EUR" Value="EUR"></asp:ListItem>
                                                                        <asp:ListItem Text="INR" Value="INR"></asp:ListItem>
                                                                        <asp:ListItem Text="USD" Value="USD" Selected="True"></asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Discount Code:</label><br />
                                                                    <asp:TextBox ID="txtDiscCode" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Quote Date:</label><br />
                                                                    <asp:TextBox ID="txtQuoteDt" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Response Date:</label><br />
                                                                    <asp:TextBox ID="txtRespDt" runat="server" ReadOnly="true"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div id="dvInnerGrid">
                                                            <isx:CoolGridView ID="gvQuoteDetails" runat="server" AutoGenerateColumns="false"
                                                                OnRowDataBound="gvQuoteDetails_RowDataBound" Width="900px" Height="150px">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="Line#" HeaderStyle-Width="70px" ItemStyle-Width="70px">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblLineNum" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Cust. Prod." HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblCustProd" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Cust. Prod. Descr." HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblCustProdDescr" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Alt. Prod.">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblAltProd" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Comments" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtComments" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Vend. Prod." HeaderStyle-Width="150px" ControlStyle-Width="130px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtVendProd" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Vend. Prod. Descr." HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtVendProdDescr" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Cust. Qty.">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblCustQty" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Avail. Qty." HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtAvailQty" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Unit Price" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtUnitPrice" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Line Amnt." HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtLineAmnt" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax1" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtTax1" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax2" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtTax2" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax3" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtTax3" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Ship. Cost" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtShipCost" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Disc(%)" HeaderStyle-Width="70px" ControlStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtDiscPercnt" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Disc. Amnt." HeaderStyle-Width="80px" ControlStyle-Width="60px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtDiscAmount" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Line Total" HeaderStyle-Width="90px" ControlStyle-Width="70px">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblLineTotal" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="TRSP Mode" HeaderStyle-Width="100px" ControlStyle-Width="80px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtTRSPMode" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Promise Dt." HeaderStyle-Width="100px" ControlStyle-Width="80px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtPromiseDt" runat="server"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Req. Del. Dt." HeaderStyle-Width="100px" ControlStyle-Width="80px">
                                                                        <ItemTemplate>
                                                                            <label><asp:Label ID="lblRDD" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkQuote" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popQuote" runat="server" BackgroundCssClass="modalBackground"
                                            TargetControlID="lnkQuote" PopupControlID="pnlQuote" CancelControlID="btnClose"
                                            DropShadow="false">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
