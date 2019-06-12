<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ReceivePO.aspx.cs" Inherits="ReceivePO" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Receive Purchase Order</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />

    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground1 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 3000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .markItUp {
            width: 300px;
        }

        .lnk {
            color: White;
            text-decoration: underline;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvDetails_PenjEsCoOl_headerDiv, #gvDetails_RecvjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvDetails_PenjEsCoOl_headerDiv div table tbody tr th, #gvDetails_RecvjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvDetails_Pen tbody tr td, #gvDetails_Recv tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvDetails_PenjEsCoOl_mainDiv, #gvDetails_RecvjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvDetails_Pen TR TD, #gvDetails_Pen TR TH, #gvDetails_Pen TR TH div, #gvDetails_Pen TR TD div,
        #gvDetails_Recv TR TD, #gvDetails_Recv TR TH, #gvDetails_Recv TR TH div, #gvDetails_Recv TR TD div {
            overflow: visible;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            border-radius: 3px 3px;
            font-family: Verdana,Arial,sans-serif;
            font-size: 1em;
            border: 1px solid #aaaaaa;
            list-style: none;
            text-align: left;
        }

        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            border-radius: 3px;
            border: 1px solid #aaaaaa;
        }

        .tablemain td {
            padding: 5px;
            text-align: left;
            width: 100%;
            border: none;
            text-align: left;
        }

        .rowLot {
        }

        .rowLoc {
        }

        .rowItem {
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
                        <div class="main-content grid_4 alpha" style="width: 115%">
                            <header style="color: Fuchsia">
                                <table width="100%">
                                    <tr>
                                        <td width="95%" style="vertical-align: top">
                                            <h2>Receive Purchase Order
                                            </h2>
                                        </td>
                                        <td width="5%" align="right">
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReloadData_Click" />
                                        </td>
                                    </tr>
                                </table>
                            </header>
                            <section>
                                <!-- the tabs -->
                                <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
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
                                <div>
                                    <ul class="approvaltabs">
                                        <li><a href="#" class="pend">PendingPO</a></li>
                                        <li><a href="#" class="appr">ReceivedPO</a></li>
                                    </ul>
                                    <!-- tab "panes" -->
                                    <div class="panes clearfix">
                                        <!-- Pending Tab Starts Here -->
                                        <section>
                                            <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                                            </asp:Timer>
                                            <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updPend">
                                                <ProgressTemplate>
                                                    <div id="overlay">
                                                        <div id="modalprogress">
                                                            <img src="images/Loaders/image_855859.gif" />
                                                        </div>
                                                    </div>
                                                </ProgressTemplate>
                                            </asp:UpdateProgress>
                                            <asp:UpdatePanel ID="updPend" runat="server" UpdateMode="Conditional">
                                                <Triggers>
                                                    <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                                    <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                                    <%--<asp:PostBackTrigger ControlID="btnRecvPO" />--%>
                                                </Triggers>
                                                <ContentTemplate>
                                                    <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                    <div class="divfieldset">
                                                        <div id="dvRevErr" runat="server">
                                                        </div>
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="text-align: right">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td align="left" width="30px">
                                                                                <small>
                                                                                    <label>
                                                                                        Organization:&nbsp;&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                            </td>
                                                                            <td style="text-align: left">
                                                                                <b>
                                                                                    <asp:Label ID="lblOrg_Pend" runat="server"></asp:Label></b>
                                                                            </td>
                                                                            <td style="text-align: left" width="30px">
                                                                                <small>
                                                                                    <label>
                                                                                        CompCode:&nbsp;&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                            </td>
                                                                            <td style="text-align: left">
                                                                                <b>
                                                                                    <asp:Label ID="lblComp_Pen" runat="server"> </asp:Label></b>
                                                                            </td>
                                                                            <td style="text-align: right">
                                                                                <asp:Button ID="btnRecvPO" runat="server" Text="Receive PO" CssClass="buttonnew-blue"
                                                                                    OnClick="SaveReceivePO"></asp:Button>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td style="width: 35%">
                                                                                <small>
                                                                                    <label>
                                                                                        Select Vendor:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlVendor" runat="server" AutoPostBack="true" DataValueField="PreferredVendor"
                                                                                    DataTextField="PreferredVendor" OnSelectedIndexChanged="GetPODetails_Pending" Width="200px">
                                                                                </asp:DropDownList>
                                                                                <asp:HiddenField ID="hdnInvCnt" runat="server" />
                                                                                <asp:HiddenField ID="hdnDispAlert" runat="server" />
                                                                                <asp:HiddenField ID="hdnSeqRowIndex" runat="server" />
                                                                                <asp:HiddenField ID="hdnShippingCst" runat="server" />
                                                                                <asp:HiddenField ID="hdnRowCancelFlg" runat="server" />
                                                                            </td>
                                                                            <td style="width: 65%">
                                                                                <div class="message info">
                                                                                    <label>
                                                                                        <b><em>*</em></b></label>Please select inventory location and corresponding Lot# (new Lot# will be automatically saved) before receiving PO. Upon clicking on ReceivePO, 
                                                                                        POs which have selected locations will only be received.
                                                                                    
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <isx:CoolGridView AllowPaging="false" ID="gvDetails_Pen" runat="server" AutoGenerateColumns="false"
                                                        Width="1111px" Height="250px" GridLines="None" OnRowDataBound="gvDetails_Pen_RowDataBound"
                                                        OnRowCommand="gvDetails_Pen_RowCommand">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="PO#" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditPONO" runat="server" Text='<%#Eval("ourRefNo")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="LineNo" HeaderStyle-Width="65px" ControlStyle-Width="65px">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditLineNO" runat="server" Text='<%#Eval("expLineNo")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="LineSeq" HeaderStyle-Width="55px" ControlStyle-Width="55px">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditPOLineSeq" runat="server" Text='<%#Eval("PoLineSeq")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="PO Date">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditPODate" runat="server" Text='<%#Eval("PoDate")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="PO Amt">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditPOAmnt" runat="server" Text='<%#Eval("PoAmt")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="InvoiceAmt" HeaderStyle-Width="75px" ControlStyle-Width="75px">
                                                                <ItemTemplate>
                                                                    <asp:HiddenField ID="hdnTaxPercent" runat="server" Value='<%#Eval("taxPercent") %>' />
                                                                    <asp:HiddenField ID="hdnUnitPrce" runat="server" Value='<%#Eval("unitPrice") %>' />
                                                                    <label><asp:Label ID="lblEditInvAmnt" runat="server" Text='<%#Eval("invAmt") %>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="ShippingCost">
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtEditshipCost" runat="server" Width="40px" Text='<%#Eval("shippingCost")%>'></asp:TextBox>
                                                                    <asp:HiddenField ID="hdnShipCst" runat="server" Value='<%#Eval("shippingCost") %>' />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Item Code" HeaderStyle-Width="170px" ItemStyle-Width="170px">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditItemCode" runat="server" Text='<%#Eval("itemCode") %>' CssClass="rowItem"></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Qty" HeaderStyle-Width="55px" ControlStyle-Width="55px">
                                                                <ItemTemplate>
                                                                    <label><asp:Label ID="lblEditInvQnty" runat="server" Text='<%#Eval("qty")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Qty. Received">
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtEditInvQntyRcv" runat="server" Width="40px" Text='<%#Eval("qtyReceived")%>'></asp:TextBox>
                                                                    <asp:HiddenField ID="hdnCancelledRow" runat="server" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Location" HeaderStyle-Width="75px" ItemStyle-Width="75px">
                                                                <ItemTemplate>
                                                                    <img id="imgLoc" runat="server" src="images/icons/pencil.png" title="Click to select Location and Lot/Bin" />
                                                                    <asp:Panel ID="pnlLoc" runat="server" Style="display: none">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; background-color: white; min-height: 95px; width: 230px">
                                                                            <div id="dvCloseBtn" style="text-align: right; vertical-align: top; height: 20px">
                                                                                <a href="#" id="ancClose" runat="server">
                                                                                    <img alt="close" src="images/icons/cross.png" /></a>
                                                                            </div>
                                                                            <div class="divfieldset">
                                                                                <div id="dvAddLotErr" runat="server" style="font-weight: bold">
                                                                                </div>
                                                                                <table class="tablemain">
                                                                                    <tr>
                                                                                        <td style="text-align: left; padding: 5px; border: none">
                                                                                            <small>
                                                                                                <label>Location</label></small><br />
                                                                                            <asp:TextBox ID="txtLoc" runat="server" Height="22px" Width="150px" CssClass="rowLoc"></asp:TextBox>
                                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLoc"
                                                                                                MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                                ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                            </cc1:AutoCompleteExtender>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="text-align: left; padding: 5px; border: none">
                                                                                            <small>
                                                                                                <label>Lot/Bin#</label></small><br />
                                                                                            <asp:TextBox ID="txtLot" runat="server" Height="22px" Width="100px" CssClass="rowLot"></asp:TextBox>
                                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtLot"
                                                                                                MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                                ServiceMethod="GetLotsByLocation" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                            </cc1:AutoCompleteExtender>
                                                                                            <a id="ancAddNewLot" runat="server" href="#" title="Add new lot" class="addItem button-blue" style="text-decoration: none">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                                                            <asp:HiddenField ID="hdnSubLot" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <div id="dvAddLot" runat="server" style="display: none; width: 85%">
                                                                                    <table style="width: 100%; border: none">
                                                                                        <tr>
                                                                                            <td style="text-align: left; padding: 5px; border: none">
                                                                                                <small>
                                                                                                    <label>Sublot</label></small><br />
                                                                                                <asp:TextBox ID="txtSubLot" runat="server" Height="22px" Width="100px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="text-align: left; padding: 5px; border: none">
                                                                                                <asp:LinkButton ID="btnSaveLot" runat="server" OnClick="SaveNewLot" Text="Save Lot" CssClass="button button-blue" Style="text-decoration: none">
                                                                                                </asp:LinkButton>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <cc1:PopupControlExtender ID="popLoc" runat="server" TargetControlID="imgLoc"
                                                                        PopupControlID="pnlLoc" Position="Bottom" OffsetX="-100">
                                                                    </cc1:PopupControlExtender>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 150px">
                                                                <label>
                                                                    No data to display.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                    <asp:Panel ID="pnlAlert" runat="server" Style="display: none">
                                                        <div class="main-content" id="Div1" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px; min-height: 20px; min-width: 400px">
                                                            <header>
                                                                <table width="100%">
                                                                    <tr>
                                                                        <td style="width: 30%;">
                                                                            <h2 class="pophead">Alert</h2>
                                                                        </td>
                                                                        <td align="right" style="width: 70%">
                                                                            <asp:Button ID="btnYes" runat="server" OnClick="ConfirmChanges" Text="Yes" CssClass="buttonnew-blue" />
                                                                            <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RejectChanges" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </header>
                                                            <div style="padding: 10px">
                                                                <div class="divfieldset">
                                                                    <asp:Label ID="lblAlertText" runat="server"></asp:Label>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </asp:Panel>
                                                    <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                                    <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                                        TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1">
                                                    </cc1:ModalPopupExtender>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </section>
                                        <!--Pending Tab Ends Here-->
                                        <!-- Received Tab Starts Here -->
                                        <section>
                                            <asp:Timer ID="Timer2" runat="server" Interval="100000000">
                                            </asp:Timer>
                                            <asp:UpdateProgress ID="UpdateProgress2" runat="server" AssociatedUpdatePanelID="updRec">
                                               <ProgressTemplate>
                                                    <div id="overlay">
                                                        <div id="modalprogress">
                                                            <img src="images/Loaders/image_855859.gif" />
                                                        </div>
                                                    </div>
                                                </ProgressTemplate>
                                            </asp:UpdateProgress>
                                            <asp:UpdatePanel ID="updRec" runat="server" UpdateMode="Conditional">
                                                <Triggers>
                                                    <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
                                                    <asp:AsyncPostBackTrigger ControlID="btnRefresh_Rec" EventName="Click" />
                                                </Triggers>
                                                <ContentTemplate>
                                                    <asp:Button ID='btnRefresh_Rec' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                    <div class="divfieldset">
                                                        <table width="60%">
                                                            <tr>
                                                                <td style="text-align: right">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td align="left" width="30px">
                                                                                <small>
                                                                                    <label>
                                                                                        Organization:&nbsp;&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                            </td>
                                                                            <td style="text-align: left">
                                                                                <b>
                                                                                    <asp:Label ID="lblOrg_Recv" runat="server"> </asp:Label></b>
                                                                            </td>
                                                                            <td style="text-align: right">
                                                                                <small>
                                                                                    <label>
                                                                                        CompCode:&nbsp;&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                            </td>
                                                                            <td style="text-align: left">
                                                                                <b>
                                                                                    <asp:Label ID="lblComp_Recv" runat="server"> </asp:Label></b>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Select Vendor:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlVendor_Recv" runat="server" AutoPostBack="true" DataValueField="PreferredVendor"
                                                                                    DataTextField="PreferredVendor" OnSelectedIndexChanged="GetPODetails_Receiving" Width="200px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="clearfix">
                                                        <br />
                                                    </div>
                                                    <isx:CoolGridView AllowPaging="false" ID="gvDetails_Recv" runat="server" AutoGenerateColumns="false"
                                                        Width="911px" Height="250px" GridLines="None">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="PO#">
                                                                <ItemTemplate>
                                                                    <%#Eval("ourRefNo")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="LineNo">
                                                                <ItemTemplate>
                                                                    <%#Eval("expLineNo") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="LineSeq">
                                                                <ItemTemplate>
                                                                    <%#Eval("PoLineSeq")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="PO Date">
                                                                <ItemTemplate>
                                                                    <%#Eval("PoDate")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="PO Amt">
                                                                <ItemTemplate>
                                                                    <%#Eval("PoAmt")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="InvoiceAmt">
                                                                <ItemTemplate>
                                                                    <%#Eval("invAmt") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="shippingCost">
                                                                <ItemTemplate>
                                                                    <%#Eval("shippingCost") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Qty">
                                                                <ItemTemplate>
                                                                    <%#Eval("qty") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="QtyReceived">
                                                                <ItemTemplate>
                                                                    <%#Eval("qtyReceived") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 150px">
                                                                <label>
                                                                    No data to display.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </section>
                                        <!--Received Tab Ends Here-->
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </form>

    <script type="text/javascript" src="js/Validation.js"></script>
    <script type="text/javascript" src="js/jquery.tools.min.js"></script>
    <script type="text/javascript" src="js/Ajax.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.ui.min.js"></script>
    <script type="text/javascript" src="js/Tab.js"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>

    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        document.createElement("section");
        document.createElement("hgroup");
        document.createElement("header");

        var jq = $.noConflict();

        function DoOnAjaxPostback() {
        }

        function $1(id) {
            return document.getElementById(id);
        }
        function validateQty(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test(id) || id == '') {
                return true;
            }
        }
        function pageLoad() {
            //jq(function () {
            //    jq("#ddlVendor").ufd({ log: true });
            //});
            //jq(function () {
            //    jq("#ddlVendor_Recv").ufd({ log: true });
            //});
        }

        function OnChangeQty(QtyRec, Qty, InvAmt, rowIndex, cnclFlg, HdnshipCst) {
            var quatyRec = $1(QtyRec).value;
            if (validateQty(quatyRec)) {
                if (parseFloat(Qty) > parseFloat(quatyRec)) {
                    if (parseFloat(InvAmt) == 0) {
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (cnclFlg != '1' || cnclFlg == '') {
                            DisplayAlert("0", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                        else {
                            UpdateCancelledRow(rowIndex, HdnshipCst);
                        }
                    }
                    else if (parseFloat(InvAmt) > 0) {
                        $1('hdnSeqRowIndex').value = rowIndex;
                        DisplayAlert("1", "NoSeq", "visible", "visible", "hidden", '0');
                    }
                }
            }
            else {
                $1('dvRevErr').style.color = "Red";
                $1('dvRevErr').innerHTML = "Please enter valid QtyReceived";
            }
        }

        //Update InvoiceAmnt and QtyReceived of Cancelled row.
        function UpdateCancelledRow(rowIndex, HdnshipCst) {
            var str = HdnshipCst;
            var str_array = str.split(',');
            for (var i = 0; i < str_array.length; i++) {
                str_array[i] = str_array[i];
            }
            var grid = $1('<%=gvDetails_Pen.ClientID %>');
            var i = parseInt(rowIndex) + 2;
            if (i <= 9) {
                i = '0' + i;
            }
            var poNo = $1(grid.id + '_ctl' + i + '_lblEditPONO').innerHTML;
            var poLineNo = $1(grid.id + '_ctl' + i + '_lblEditLineNO').innerHTML;
            var poLineSeq = $1(grid.id + '_ctl' + i + '_lblEditPOLineSeq').innerHTML;
            var invAmnt = $1(grid.id + '_ctl' + i + '_lblEditInvAmnt').value;
            var qty = $1(grid.id + '_ctl' + i + '_lblEditInvQnty').innerHTML;
            var qtyRec = $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value;
            var EditShip = $1(grid.id + '_ctl' + i + '_txtEditshipCost').value;
            var untPrce = $1(grid.id + '_ctl' + i + '_hdnUnitPrce').value;
            var taxPercent = $1(grid.id + '_ctl' + i + '_hdnTaxPercent').value;
            var shipCst = $1(grid.id + '_ctl' + i + '_hdnShipCst').value;
            for (var j = 2; j <= grid.rows.length + 1; j++) {
                if (j <= 9) {
                    j = '0' + j;
                }
                if (($1(grid.id + '_ctl' + j + '_lblEditPONO').innerHTML == poNo) && ($1(grid.id + '_ctl' + j + '_lblEditLineNO').innerHTML == poLineNo) && ($1(grid.id + '_ctl' + j + '_lblEditPOLineSeq').innerHTML == parseInt(poLineSeq) + 1)) {
                    $1(grid.id + '_ctl' + j + '_txtEditshipCost').value = parseFloat(parseFloat(str_array[rowIndex]) - parseFloat(EditShip)).toFixed(2);
                    var finalShip = $1(grid.id + '_ctl' + j + '_txtEditshipCost').innerHTML;
                    var notaxAmnt = parseFloat((parseFloat(qty) - parseFloat(qtyRec)) * parseFloat(untPrce));
                    var poamnt = parseFloat(notaxAmnt * parseFloat(taxPercent) / 100) + parseFloat(notaxAmnt) + parseFloat(finalShip == '' ? '0' : finalShip);
                    $1(grid.id + '_ctl' + j + '_lblEditPOAmnt').innerHTML = parseFloat(poamnt).toFixed(2);
                    $1(grid.id + '_ctl' + j + '_lblEditInvQnty').innerHTML = parseFloat(parseFloat(qty) - parseFloat(qtyRec)).toFixed(2);
                }
            }
        }


        function DisplayAlert(invAmnt, dispAlrt, IsYBVisible, isNBVisible, isCBVisible, type) {
            $1('hdnDispAlert').value = dispAlrt;
            $1('hdnInvCnt').value = invAmnt;
            $1('lblAlertText').innerHTML = 'Is this final Shipment?';
            //$find(Sys.Extended.UI.ModalPopupBehavior, { "CancelControlID": "btnNo", "id": "popAlert" }, null, null, $get("lnkAlert"));
            $find('popAlert').show();
        }

        //Load Lots/Bins with selected location
        function loadLots(loc, itemCode, lot) {
            $11(lot).value = '';
            var location = $11(loc).value;
            var url = 'Invoice.ashx?func=13&loc=' + location + '&item=' + itemCode;
            LoadLotsByLoc(url, '');
            $11(lot).focus();
        }

        //show input fields to add lot
        function addLot(dv, loc, dvError) {
            if ($11(loc).value == '' || $11(loc).value == ' ') {
                $11(dvError).style.color = "Red";
                $11(dvError).innerHTML = "Please enter Location.";
            }
            else {
                $11(dv).style.display = "block";
            }
            return false;
        }

        function validateLotByItem(rowIndex, locFieldId, lotFieldId, itemVal) {
            var grid = $11('<%=gvDetails_Pen.ClientID %>');
            var rowLots = grid.getElementsByClassName("rowLot");
            var rowLocs = grid.getElementsByClassName("rowLoc");
            var rowItems = grid.getElementsByClassName("rowItem");

            var loc = $11(locFieldId).value;
            var lot = $11(lotFieldId).value;
            var cnt = 0;
            for (var i = 0; i < grid.rows.length; i++)
                if (rowItems[i].innerHTML != itemVal && rowLocs[i].value == loc && rowLots[i].value == lot)
                    cnt++;

            if (cnt > 0) {
                $11('dvRevErr').style.color = "Red";
                $11('dvRevErr').innerHTML = "This lot has already been selected for different item.";
            }
            else
                $11('dvRevErr').innerHTML = "";
        }

        //validate lotnum in popup.
        function validateLotPop(locCode, lotNum, pop, dvMsg) {
            if ($11(locCode).value.length > 0 && $11(lotNum).value == 0) {
                $11(dvMsg).style.color = "Red";
                $11(dvMsg).innerHTML = "Please provide Lot/Bin#.";
            }
            else
                $find(pop).hidePopup();
            return false;
        }

    </script>
</body>
</html>
