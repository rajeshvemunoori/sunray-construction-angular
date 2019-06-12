<%@ Page Language="C#" AutoEventWireup="true" CodeFile="vendagreement.aspx.cs" Inherits="Quotations_vendagreement" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>ApproveIt - Vendor-Product Agreements</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: Red;
                font-size: 1em;
            }

        #lblDiscSymb {
            font-size: 2em;
            color: #A3A3A3;
        }

        .tab td {
            padding: 5px;
        }

        .maintab td {
            padding: 10px;
        }

        .navlnk {
            font-weight: bold;
            font-size: 1.5em;
            width: 40px;
            font-family: Franklin Gothic Demi;
        }

        input[type="text"] {
            font-size: 24px;
            width: 270px;
            height: 30px;
        }

        select {
            font-size: 3em;
            width: 290px;
            height: 40px;
        }

        textarea {
            width: 300px;
            height: 70px;
        }

        .tabqtybrk tr th {
            background-color: #3B6AA0;
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        .tabqtybrk tr td {
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        #gvAgreementsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAgreementsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvAgreements tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvAgreementsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border: none;
        }

        #gvAgreements TR TD, #gvAgreements TR TH, #gvAgreements TR TH div, #gvAgreements TR TD div {
            overflow: visible;
        }

        #txtAggrCode, #txtAggrDescr, #ddlDiscType, #txtDiscVal, #txtValidFrom, #txtValidTo, #txtCust {
            border-left-color: Red;
            border-left-style: solid;
            border-left-width: 5px;
        }

        .date {
            background-image: url(../images/icons/1435090493_calendar-alt.png);
            background-repeat: no-repeat;
            background-position: right;
        }
        /*Calendar Control CSS*/
        .cal_Theme1 .ajax__calendar_container {
            background-color: #DEF1F4;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_header {
            background-color: #ffffff;
            margin-bottom: 4px;
        }

        .cal_Theme1 .ajax__calendar_title,
        .cal_Theme1 .ajax__calendar_next,
        .cal_Theme1 .ajax__calendar_prev {
            color: #004080;
            padding-top: 3px;
        }

        .cal_Theme1 .ajax__calendar_body {
            background-color: #ffffff;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_dayname {
            text-align: center;
            font-weight: bold;
            margin-bottom: 4px;
            margin-top: 2px;
            color: #004080;
        }

        .cal_Theme1 .ajax__calendar_day {
            color: #004080;
            text-align: center;
        }

        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_day,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_month,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_year,
        .cal_Theme1 .ajax__calendar_active {
            color: #004080;
            font-weight: bold;
            background-color: #DEF1F4;
        }

        .cal_Theme1 .ajax__calendar_today {
            font-weight: bold;
        }

        .cal_Theme1 .ajax__calendar_other,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_today,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_title {
            color: #bbbbbb;
        }

        .completionList {
            border: solid 1px #ccc;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.2em;
            border: 1px solid #aaaaaa;
        }

        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            border: 1px solid #aaaaaa;
        }
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
                        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
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
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="35%">
                                                        <h2>Agreements
                                                        </h2>
                                                    </td>
                                                    <td width="65%" align="right">
                                                        <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReload_Click"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                        <div id="dvAggrMainMsg" runat="server">
                                        </div>
                                        <div id="dvAggrGrid" runat="server">
                                            <table class="tab" style="width: 100%">
                                                <tr>
                                                    <td>
                                                        <asp:TextBox ID="txtFilterAgr" runat="server" CssClass="filterdata" Height="30px" Width="400px" placeholder="Type in customer, agreement code, description or discount details to search.."></asp:TextBox>
                                                    </td>
                                                    <td style="text-align: right">
                                                        <asp:Button ID="btnAddAggr" runat="server" Text="New Agreement" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <isx:CoolGridView ID="gvAgreements" runat="server" AutoGenerateColumns="false" Width="1000px" Height="400px" OnRowDataBound="gvAgreements_RowDataBound">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="Action">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnkEditAgreement" runat="server" ToolTip="Edit Agreement"
                                                                            OnClick="lnkEditAgreement_Click"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHCust" runat="server" Text="Customer" CommandArgument="agreementCode"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCust" runat="server"></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHAgreementCode" runat="server" Text="Agreement Code" CommandArgument="agreementCode"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("agreementCode")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="250px" ControlStyle-Width="250px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHAgreementDescr" runat="server" Text="Description" CommandArgument="agreementDescr"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("agreementDescr")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHDiscntType" runat="server" Text="Disc. Type" CommandArgument="discntType"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblDiscType" runat="server"></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="80px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHDiscntValue" runat="server" Text="Disc. Value" CommandArgument="discntValue"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblDiscVal" runat="server"></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHValidFrom" runat="server" Text="Valid From" CommandArgument="validFrom"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%# Convert.ToDateTime(Eval("validFrom")).ToShortDateString()%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHValidTo" runat="server" Text="Valid To" CommandArgument="validTo"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%# Convert.ToDateTime(Eval("validTo")).ToShortDateString()%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHIsVolumeDiscnt" runat="server" Text="Vol. Disc." CommandArgument="isVolumeDiscnt"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <p>
                                                                            <asp:CheckBox ID="chkHIsVolDisc" runat="server" />
                                                                        </p>
                                                                        <asp:HiddenField ID="hdnAgreementCode" runat="server" Value='<%#Eval("agreementCode")%>' />
                                                                        <asp:HiddenField ID="hdnIsVolDisc" runat="server" Value='<%#Eval("isVolumeDiscnt")%>' />
                                                                        <asp:HiddenField ID="hdnDiscType" runat="server" Value='<%#Eval("discntType")%>' />
                                                                        <asp:HiddenField ID="hdnDiscVal" runat="server" Value='<%#Eval("discntValue")%>' />
                                                                        <asp:HiddenField ID="hdnCustID" runat="server" Value='<%#Eval("customerID")%>' />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 200px">
                                                                    <label>No data to display.</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="dvAggrDetails" runat="server" style="display: none">
                                            <div id="dvInputFields">
                                                <table class="tab" style="width: 80%">
                                                    <tr>
                                                        <td colspan="2">
                                                            <label>
                                                                <div id="dvAggrMsg" runat="server"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>Customer:</label>
                                                            <br />
                                                            <asp:TextBox ID="txtCust" runat="server"></asp:TextBox><span style="vertical-align: bottom"><asp:LinkButton ID="lnkDetails" runat="server" Text="details" OnClick="lnkDetails_Click"></asp:LinkButton></span>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtCust" MinimumPrefixLength="1"
                                                                EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCustomers" UseContextKey="True"
                                                                CompletionListCssClass="completionList" CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                Agreement Code:
                                                            </label>
                                                            <br />
                                                            <asp:TextBox ID="txtAggrCode" runat="server"></asp:TextBox>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                Description:
                                                            </label>
                                                            <br />
                                                            <asp:TextBox ID="txtAggrDescr" runat="server"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                Discount Type:
                                                            </label>
                                                            <br />
                                                            <asp:DropDownList ID="ddlDiscType" runat="server" onchange="javascript:return showDiscSymbol(this);">
                                                                <asp:ListItem Text="Price" Value="0"></asp:ListItem>
                                                                <asp:ListItem Text="Percentage" Value="1"></asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                Discount Value:
                                                            </label>
                                                            <br />
                                                            <asp:TextBox ID="txtDiscVal" runat="server"></asp:TextBox><label id="lblDiscSymb">$</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                Valid From:
                                                            </label>
                                                            <br />
                                                            <asp:TextBox ID="txtValidFrom" runat="server" CssClass="date" placeholder="MM/DD/YYYY"></asp:TextBox>
                                                            <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtValidFrom" CssClass=" cal_Theme1" />
                                                        </td>
                                                        <td>
                                                            <label>
                                                                Valid To:
                                                            </label>
                                                            <br />
                                                            <asp:TextBox ID="txtValidTo" runat="server" CssClass="date" placeholder="MM/DD/YYYY"></asp:TextBox>
                                                            <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtValidTo" CssClass=" cal_Theme1" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                <asp:CheckBox ID="chkIsVolDisc" runat="server" Text="&nbsp;&nbsp;Volume Discount"
                                                                    TextAlign="Right" onclick="showQtyBreaks(this);" />
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <label><a href="javascript:void(0);" onclick="navigate();">Associated Items</a></label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <div id="dvQtyBreaks" runat="server" style="display: none">
                                                                <table style="width: 100%">
                                                                    <tr>
                                                                        <td>
                                                                            <label>
                                                                                <i>Note: Click on 'Add Row' to start adding quantity intervals for the agreement.</i></label></td>
                                                                        <td style="text-align: right">
                                                                            <asp:Button ID="btnAdd" runat="server" Text="Add Row" OnClick="btnAdd_Click" CssClass="buttonnew-blue" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <asp:GridView ID="gvQty" runat="server" AutoGenerateColumns="false" GridLines="None" CssClass="tabqtybrk">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderText="Min. Quantity">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtQtyTo" runat="server" Text='<%#Eval("toQty")%>'></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Discount Value">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtDiscVal" runat="server" Text='<%#Eval("lineDscntVal") %>'></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField>
                                                                                        <ItemTemplate>
                                                                                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDel_Click" CssClass="buttonnew-blue" />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </asp:GridView>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <asp:Button ID="btnSaveAggr" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveAggr_Click" />
                                                            <asp:Button ID="btnCloseAggrAdd" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlCustDetails" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 300px">
                                                <header>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Customer Info
                                                                </h2>
                                                            </td>
                                                            <td style="width: 50%; text-align: right">
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server">
                                                        </div>
                                                        <table class="tab" style="width: 100%">
                                                            <tr>
                                                                <td style="width: 30%">
                                                                    <div style="border: 1px dashed #ccc; height: 100px; width: 100px" title="Logo not available"></div>
                                                                </td>
                                                                <td style="width: 70%;">
                                                                    <table style="width: 100%">
                                                                        <tr>
                                                                            <td style="vertical-align: top">
                                                                                <h2>
                                                                                    <asp:Label ID="lblCustName" runat="server"></asp:Label></h2>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>
                                                                                    <asp:Label ID="lblAddress1" runat="server"></asp:Label>,&nbsp;<asp:Label ID="lblAddress2" runat="server"></asp:Label></label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>
                                                                                    <asp:Label ID="lblCity" runat="server"></asp:Label>,&nbsp;
                                                                                <asp:Label ID="lblState" runat="server"></asp:Label>&nbsp;-&nbsp;
                                                                                    <asp:Label ID="lblZip" runat="server"></asp:Label></label>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label><i>Business Type:</i>&nbsp;<asp:Label ID="lblIndType" runat="server"></asp:Label></label></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label><i>Currency:</i>&nbsp;<asp:Label ID="lblCurrency" runat="server"></asp:Label></label></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCustDetails" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popCustDetails" runat="server" TargetControlID="lnkCustDetails" PopupControlID="pnlCustDetails"
                                            BackgroundCssClass="modalBackground" DropShadow="false" CancelControlID="btnClose">
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

    <script type="text/javascript">
        function $11(id) {
            return document.getElementById(id);
        }

        function animateDiv(dv, dvOrg, dvMsg) {
            $11(dvOrg).style.display = "block";
            $('html, body').animate({
                scrollTop: $(dv).offset().top
            }, 2000);
            $11(dvMsg).innerHTML = '';
            var inputList = document.getElementsByTagName("input");
            for (var i = 0; i < inputList.length; i++) {
                DisplayNormalFields(inputList[i]);
            }
            return false;
        }

        function clearFields(dvCurr, dvScrollTo) {
            var inputFields = $11(dvCurr).getElementsByTagName("input");
            var textAreaFields = $11(dvCurr).getElementsByTagName("textarea");
            for (var i = 0; i < inputFields.length; i++) {
                if (inputFields[i].type == "text")
                    inputFields[i].value = '';
                else if (inputFields[i].type == "checkbox")
                    inputFields[i].checked = false;
            }
            for (var i = 0; i < textAreaFields.length; i++) {
                textAreaFields[i].value = '';
            }

            //var grid = $11('gvQty');
            //if (grid.parentNode) {
            //    grid.parentNode.removeChild(elem);
            //}
            $("[id*=gvQty] tr").not($("[id*=gvQty] tr:first-child")).remove();

            $11(dvCurr).style.display = "none";
            $11('dvQtyBreaks').style.display = "none";
            $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
            });
            return false;
        }

        function Filter(Obj) {
            var grid = document.getElementById('gvAgreements');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.focus();
        }

        function showDiscSymbol(obj) {
            var discType = obj.value;
            if (discType == "0")
                $11('lblDiscSymb').innerHTML = '$';
            else if (discType == "1")
                $11('lblDiscSymb').innerHTML = '%';
            else
                $11('lblDiscSymb').innerHTML = '';
        }

        //show Qty breaks div on isVolDisc check
        function showQtyBreaks(obj) {
            var isVolDisc = obj.checked;
            if (isVolDisc) {
                $11('dvQtyBreaks').style.display = "block";
                animateDiv('#dvQtyBreaks', 'dvQtyBreaks');
            }
            else
                $11('dvQtyBreaks').style.display = "none";
            return false;
        }
        function validateAgreement() {
            var errStr = 'Please enter ';
            $11('dvAggrMsg').innerHTML = '';
            $11('dvAggrMsg').style.color = "red";
            if ($11('txtCust').value == 0) {
                errStr += 'Customer, ';
                DisplayErrFields($11('txtCust'));
            }
            if ($11('txtAggrCode').value == 0) {
                errStr += 'Agreement Code, ';
                DisplayErrFields($11('txtAggrCode'));
            }
            if ($11('txtAggrDescr').value == 0) {
                errStr += 'Description, ';
                DisplayErrFields($11('txtAggrDescr'));
            }
            if ($11('txtDiscVal').value.length == 0) {
                errStr += 'Discount Value, ';
                DisplayErrFields($11('txtDiscVal'));
            }
            if (!validateAgreementDisc('txtDiscVal')) {
                errStr += 'Numeric values for Discount Value, ';
                DisplayErrFields($11('txtDiscVal'));
            }
            if ($11('txtAggrDescr').value.length > 200) {
                errStr += 'Description must not me more than 200 chars.';
                DisplayErrFields($11('txtAggrDescr'));
            }
            if ($11('txtValidFrom').value.length == 0) {
                errStr += 'Valid From, ';
                DisplayErrFields($11('txtValidFrom'));
            }
            if ($11('txtValidTo').value.length == 0) {
                errStr += 'Valid To, ';
                DisplayErrFields($11('txtValidTo'));
            }
            if (Date.parse($11('txtValidFrom').value) > Date.parse($11('txtValidTo').value)) {
                errStr += "Valid To which is greater than Valid From, ";
                DisplayErrFields($11('txtValidFrom'));
                DisplayErrFields($11('txtValidTo'));
            }
            errStr = errStr.substring(0, errStr.length - 2);
            if (errStr.length > 13) {
                $11('dvAggrMsg').innerHTML = errStr;
                return false;
            }
        }

        function navigate() {
            var agrCode = $11('txtAggrCode').value;
            window.location.href = 'custagreements.aspx?a=' + agrCode;
            showProgress();
        }
    </script>
</body>
</html>
