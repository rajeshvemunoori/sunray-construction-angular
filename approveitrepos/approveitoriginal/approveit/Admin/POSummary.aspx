<%@ Page Language="C#" AutoEventWireup="true" CodeFile="POSummary.aspx.cs" Inherits="Admin_POSummary" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|fieldset|label1|wrapper".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt-Create User</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <style>
        .modalBackground {
            background-color: #F8F8F8;
            filter: alpha(opacity=95);
            opacity: 0.9;
            position: absolute;
            z-index: 999999 !important;
        }

        .modalBackground1 {
            position: absolute;
            background-color: #F8F8F8;
            filter: alpha(opacity=95);
            opacity: 0.7;
            z-index: 3000000 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 135px;
            }

        .lbl {
            text-align: right;
        }
    </style>
    <script>
        function DoOnAjaxPostback() {

        }

        function refreshExp() {
            $(".btnRefresh").click();
        }
    </script>
</head>
<body>
    <form id="form" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <div id="wrapper">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server"/>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7">
                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                            <ProgressTemplate>
                                <div style="position: fixed; text-align: center; height: 100%; width: 100%; top: 0; right: 0; left: 0; z-index: 9999999; background-color: #000000; opacity: 0.7;">
                                    <asp:Image ID="imgUpdateProgress" runat="server" ImageUrl="../images/ajax-loader.gif"
                                        AlternateText="Loading ..." Style="padding: 10px; position: fixed; top: 45%; left: 50%;" />
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content">
                                    <header style="height: 30px">
                                        <table width="100%">
                                            <tr>
                                                <td width="55%" style="vertical-align: top">
                                                    <h2>PO Summary
                                                    </h2>
                                                </td>
                                                <td width="45%" align="right" style="vertical-align: top">
                                                    <asp:Button ID="btnReset" runat="server" Text="   Reset" CssClass="buttonnew-blue"></asp:Button>
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section class="container_1 clearfix">
                                        <div class="divfieldset">
                                            <asp:Repeater runat="server" ID="rptCompCodes" OnItemCommand="rptCompCodes_ItemCommand">
                                                <ItemTemplate>
                                                    <asp:ImageButton ID="btnView" runat="server" ImageUrl="~/images/icons/add.png" CommandArgument='<%#Eval("CompCode") %>'
                                                        CommandName="view" />
                                                    <asp:LinkButton ID="lbCompCodes" runat="server" Text='<%#Eval("CompCode") %>' CommandArgument='<%#Eval("CompCode") %>'
                                                        CommandName="show"></asp:LinkButton>
                                                    <asp:Repeater runat="server" ID="rptYears" OnItemCommand="rptYears_ItemCommand">
                                                        <ItemTemplate>
                                                            <br />
                                                            &nbsp;&nbsp;&nbsp;
                                                            <asp:ImageButton ID="btnViewMonths" runat="server" ImageUrl="~/images/icons/add.png"
                                                                CommandArgument='<%# Eval("Year") + "|" + Eval("CompCode") %>' CommandName="view" />
                                                            <asp:LinkButton ID="lbYear" runat="server" Text='<%#Eval("Year") %>' CommandArgument='<%# Eval("Year") + "|" + Eval("CompCode") %>'
                                                                CommandName="show"></asp:LinkButton>
                                                            <asp:Repeater ID="rptMonths" runat="server" OnItemCommand="rptMonths_ItemCommand">
                                                                <ItemTemplate>
                                                                    <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <asp:LinkButton ID="lbMonth" runat="server" CommandArgument='<%# Eval("Year") + "|" + Eval("Month") + "|" + Eval("CompCode") %>'
                                                                        CommandName="show"><%#Eval("Month") %>&nbsp;(<%#Eval("poCount")%>)</asp:LinkButton>
                                                                </ItemTemplate>
                                                            </asp:Repeater>
                                                        </ItemTemplate>
                                                    </asp:Repeater>
                                                    <br />
                                                </ItemTemplate>
                                            </asp:Repeater>
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
        <asp:Panel ID="pnlShowPODetails" runat="server" CssClass="modalBackground1" Style="display: none; filter: alpha(opacity=70); opacity: 0.9;">
            <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px">
                <header style="height: 4%">
                    <table width="100%">
                        <tr>
                            <td width="40%" style="vertical-align: top">
                                <h2 class="pophead">
                                    <asp:Label ID="lblHeading" runat="server"></asp:Label>
                                </h2>
                            </td>
                            <td width="60%" align="right">
                                <asp:Button ID="btnClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                            </td>
                        </tr>
                    </table>
                </header>
                <section>
                    <div class="fieldset">
                        <isx:CoolGridView AllowPaging="false" ID="gvPODetails" runat="server" AutoGenerateColumns="false"
                            Width="520px" Height="250px" GridLines="None" ShowHeader="true" OnRowDataBound="gvPODetails_RowDataBound"
                            ShowFooter="true">
                            <Columns>
                                <asp:TemplateField HeaderText="OurRefNo" HeaderStyle-CssClass="fixedcol" ItemStyle-CssClass="fixedcol">
                                    <HeaderTemplate>
                                        <asp:LinkButton ID="lnkOurRefNo" runat="server" Text="OurRefNo" CommandArgument="OurRefNo"
                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lnkOurRefNoEdit" runat="server" CommandArgument="test"
                                            Text='<%#Eval("OurRefNo")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Start Date" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                    <HeaderTemplate>
                                        <asp:LinkButton ID="lnkStartDate" runat="server" Text="StartDate" CommandArgument="StartDate"
                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:Label ID="lblStartDate" runat="server"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                    <HeaderTemplate>
                                        <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:Label ID="lblPurpose" runat="server"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Amount">
                                    <HeaderTemplate>
                                        <asp:LinkButton ID="lnkPreAmount" runat="server" Text="Amount" CommandArgument="PreAmount"
                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:Label ID="lblAmnt" runat="server"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Status">
                                    <HeaderTemplate>
                                        <strong>Status</strong>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Sent To Vendor">
                                    <ItemTemplate>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="InvoiceNO">
                                    <HeaderTemplate>
                                        <strong>View Details</strong>
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lnkEditBtn" runat="server" Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton><asp:HiddenField
                                            ID="hdStatus" runat="server" Value='<%#Eval("Status")%>' />
                                        <asp:HiddenField ID="hdnReq" runat="server" Value='<%#Eval("RequestID")%>' />
                                        <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsMgrPreApproved")%>' />
                                        <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                        <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%#Eval("StatusID")%>' />
                                        <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                        <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                        <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("userId")%>' />
                                        <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                        <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                        <asp:HiddenField ID="hdnActionDate" runat="server" Value='<%#Eval("actionDate")%>' />
                                        <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                            <EmptyDataTemplate>
                                <div style="width: 350px"><label>
                                    No expenses to display within the date range.</label>
                                </div>
                            </EmptyDataTemplate>
                        </isx:CoolGridView>
                    </div>
                </section>
            </div>
        </asp:Panel>
        <asp:LinkButton ID="lnkFake" runat="server"></asp:LinkButton>
        <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlShowPODetails"
            CancelControlID="btnClose" TargetControlID="lnkFake" BackgroundCssClass="modalBackground">
        </cc1:ModalPopupExtender>
    </form>
</body>
</html>
