<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CustQuote.aspx.cs" Inherits="Quotations_CustQuote" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>ApproveIt - Quotations</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/Ajax.js"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlQuoteStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlContType").ufd({ log: true });
            });
            $(function () {
                $("#ddlStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlQuoteID").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorBillTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorBillTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorShipTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlContact").ufd({ log: true });
            });
        });

        function DoOnAjaxPostback() {
            //setupDatePicker();
            //$('#date').dateinput({
            //    format: 'mm/dd/yyyy',
            //    trigger: false
            //});
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlQuoteStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlContType").ufd({ log: true });
            });
            $(function () {
                $("#ddlStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlQuoteID").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorBillTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorBillTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendorShipTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlContact").ufd({ log: true });
            });
            $(function () {
                $('#gvQuoteDetails tr').find('select[id*=ddlItemSpec]').ufd({ log: true });
            });
            //$('#gvQuoteDetails tr').find('input[id*=txtRDD]').dateinput({
            //    format: 'mm/dd/yyyy',
            //    trigger: false
            //});
        }

    </script>
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
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
            padding: 3px;
            vertical-align: top;
        }

        .tbBorder td {
            padding: 10px;
            border: 1px solid #000;
        }

        .lnk {
            text-decoration: underline;
            color: White;
        }

        #gvQuoteListjEsCoOl_headerDiv, #gvQuoteDetailsjEsCoOl_headerDiv, #gvVendListjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvQuoteListjEsCoOl_headerDiv div table tbody tr th, #gvQuoteDetailsjEsCoOl_headerDiv div table tbody tr th, #gvVendListjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvQuoteList tbody tr td, #gvQuoteDetails tbody tr td, #gvVendList tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvQuoteListjEsCoOl_mainDiv, #gvQuoteDetailsjEsCoOl_mainDiv, #gvVendListjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvQuoteDetails .cal_Theme1 tr td {
            padding: 0px;
            height: 17px;
            border: 0px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
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
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%">
                                                        <h2>My Quotations
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnNewQuote" runat="server" Text="New Quotation" CssClass="buttonnew-blue" OnClick="PlaceNewQuote" />
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
                                                                    <div id="dvSearchError">&nbsp;</div>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <label>
                                                                            <em>*</em>Response Date</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="right">
                                                                        <label>
                                                                            From:&nbsp;</label>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:TextBox ID="txtFrom" runat="server" Width="90px" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="cal1" runat="server" TargetControlID="txtFrom" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td align="right">
                                                                        <label>
                                                                            To:&nbsp;</label>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:TextBox ID="txtTo" runat="server" Width="90px" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtTo" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                        </cc1:CalendarExtender>
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
                                                                    <label>
                                                                        Status:</label><br />
                                                                    <asp:DropDownList ID="ddlStatus" runat="server" Width="200px" AutoPostBack="true"
                                                                        OnSelectedIndexChanged="GetSelectedQuotesByStatus">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        QuoteID:</label><br />
                                                                    <asp:DropDownList ID="ddlQuoteID" runat="server" Width="200px" AutoPostBack="true"
                                                                        OnSelectedIndexChanged="GetSelectedQuotesByQuoteID">
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
                                                <isx:CoolGridView ID="gvQuoteList" runat="server" Width="900px" Height="250px" AutoGenerateColumns="false"
                                                    GridLines="None" OnRowDataBound="gvQuoteList_RowDataBound" ShowHeader="true">
                                                    <Columns>
                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Right">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHQuoteID" runat="server" Text="Quote ID" CommandArgument="quoteId"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><asp:LinkButton ID="lnkQuoteID" runat="server" Text='<%#Eval("quoteId") %>' OnClick="Edit"></asp:LinkButton></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Left">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHQuoteNum" runat="server" Text="Quote#" CommandArgument="quoteNum"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("quoteNum")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="250px" ItemStyle-Width="250px" ItemStyle-HorizontalAlign="Left">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHQuoteDescr" runat="server" Text="Quote Descr." CommandArgument="quoteDesc"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("quoteDesc")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Left">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHStatus" runat="server" Text="Quote Status" CommandArgument="quoteStatus"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("quoteStatus")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Process" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <ItemTemplate>
                                                                <label>Saved</label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Right">
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
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 250px">
                                                            <label>
                                                                No quotations to display.</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnIsEdit" runat="server" />
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlQuote" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; height: 500px; width: 100%">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <%if (hdnIsEdit.Value == "Y")
                                                                      {%>
                                                                View Quotation
                                                                <%}
                                                                      else
                                                                      {  %>
                                                                New Quotation<%} %>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveQuote" />
                                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="SubmitQuote" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="CloseWindow" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server">
                                                        </div>
                                                        <table class="tab">
                                                            <%--<tr>
                                                                <td colspan="4">
                                                                    <small>
                                                                        <label>
                                                                            Organization:&nbsp;<b><%=Session["SOrgName"].ToString() %></b></label></small>
                                                                </td>
                                                            </tr>--%>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Quote ID:&nbsp;
                                                                    <span style="font-size: 1.5em; font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold'">
                                                                        <asp:Label ID="lblQuoteID" runat="server"></asp:Label></span></label></small></td>

                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Company Code:</label></small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                        Width="150px" onchange="javascript: return GetShipLoc();">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Shipping Location:</label></small><br />
                                                                    <asp:TextBox ID="txtShipLoc" runat="server" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Quote Status:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlQuoteStatus" runat="server" Width="150px">
                                                                        <asp:ListItem>OPEN</asp:ListItem>
                                                                        <asp:ListItem>CLOSED</asp:ListItem>
                                                                        <asp:ListItem>CANCELLED</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Quote Number:</label></small><br />
                                                                    <asp:TextBox ID="txtQuoteNum" runat="server" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Response By:</label></small><br />
                                                                    <asp:TextBox ID="txtRespBy" runat="server" class="date" Width="135px"></asp:TextBox>
                                                                    <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtRespBy" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                    </cc1:CalendarExtender>
                                                                    <asp:HiddenField ID="hdnCurrDate" runat="server" />
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Quote Descr.:</label></small><br />
                                                                    <asp:TextBox ID="txtQuoteDesc" runat="server" TextMode="MultiLine" MaxLength="200" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <div id="dvResponse" runat="server">
                                                                        <small>
                                                                            <label>
                                                                                Quote Response:</label></small>
                                                                        <div style="width: 100%; height: 20px; border: #ccc 1px solid; border-radius: 8px">
                                                                            <div id="dvRespPic" runat="server" style="background-color: green; height: 20px; border-radius: 8px"></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>&nbsp;<%--<asp:LinkButton ID="lnkShowVendResp" runat="server" Text="Vendor Response" OnClick="LoadSupplierResponse"></asp:LinkButton>--%>
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Contact Name:</label></small><br />
                                                                    <asp:TextBox ID="txtContName" runat="server" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Contact Type:</label></small><br />
                                                                    <asp:DropDownList ID="ddlContType" runat="server" Width="150px">
                                                                        <asp:ListItem Value="0">Please Select</asp:ListItem>
                                                                        <asp:ListItem>Sales</asp:ListItem>
                                                                        <asp:ListItem>AR</asp:ListItem>
                                                                        <asp:ListItem>AP</asp:ListItem>
                                                                        <asp:ListItem>CS</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Phone:</label></small><br />
                                                                    <asp:TextBox ID="txtContPhone" runat="server" MaxLength="20" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Email:</label></small><br />
                                                                    <asp:TextBox ID="txtEmail" runat="server" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Fax:</label></small><br />
                                                                    <asp:TextBox ID="txtContFax" runat="server" MaxLength="20" Width="135px"></asp:TextBox>
                                                                </td>
                                                                <td style="vertical-align: bottom">
                                                                    <asp:Button ID="btnAddLine" runat="server" Text="Add New Line" OnClick="AddNewLine" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div id="dvInnerGrid">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView ID="gvQuoteDetails" runat="server" AutoGenerateColumns="false"
                                                                            Width="900px" Height="180px" OnRowDataBound="gvQuoteDetails_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Line#" ControlStyle-Width="60px" HeaderStyle-Width="60px">
                                                                                    <ItemTemplate>
                                                                                        <asp:Label ID="lblLineNum" runat="server"></asp:Label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="ItemID" ControlStyle-Width="120px" HeaderStyle-Width="150px">
                                                                                    <ItemTemplate>
                                                                                        <asp:DropDownList ID="ddlItemSpec" runat="server">
                                                                                        </asp:DropDownList>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Item Descr" ControlStyle-Width="140px" HeaderStyle-Width="170px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtItemDesc" runat="server"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Qty" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtQty" runat="server"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="UoM" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtUnitOfMsr" runat="server"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Req. Del. Dt." ControlStyle-Width="90px" HeaderStyle-Width="120px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtRDD" runat="server" class="date"></asp:TextBox>
                                                                                        <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtRDD" Format="MM/dd/yyyy" CssClass=" cal_Theme1"></cc1:CalendarExtender>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Alt. Prod. Allowed" HeaderStyle-Width="120px">
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chkAltProd" runat="server" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Action" HeaderStyle-Width="70px">
                                                                                    <ItemTemplate>
                                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" OnClick="DeleteDetail">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </isx:CoolGridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
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
                                        <asp:Panel ID="pnlVend" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 800px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">Submit Quotation
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnVendSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="SubmitQuoteToVendor" />
                                                                <asp:Button ID="btnCloseVend" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                                <asp:Button ID="btnVendReset" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ResetVendList"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvVendMsg" runat="server">
                                                        </div>
                                                        <table class="tab" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Select Vendor BillTo:</label></small><br />
                                                                    <asp:DropDownList ID="ddlVendorBillTo" runat="server" AutoPostBack="true" OnSelectedIndexChanged="LoadShipTosbyBilltos">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Select Vendor ShipTo:</label></small><br />
                                                                    <asp:DropDownList ID="ddlVendorShipTo" runat="server" AutoPostBack="true" OnSelectedIndexChanged="LoadContactsByVendorID">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Select Contact:</label></small><br />
                                                                    <asp:DropDownList ID="ddlContact" runat="server" OnSelectedIndexChanged="ddlContact_SelectedIndexChanged" AutoPostBack="true">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td colspan="2">
                                                                    <asp:Button ID="btnVendAdd" runat="server" Text="Add To List" OnClick="AddVendorToList" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4">
                                                                    <isx:CoolGridView ID="gvVendList" runat="server" AutoGenerateColumns="false" Width="700px"
                                                                        Height="250px">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="VendorBillTo" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("VendorBillTo")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="VendorShipTo" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("VendorShipTo")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Contact PreferName" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <%#Eval("Contact")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Action">
                                                                                <ItemTemplate>
                                                                                    <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Remove" OnClick="RemoveVendorFromList">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Remove"/></asp:LinkButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkVend" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popVend" runat="server" DropShadow="false" TargetControlID="lnkVend"
                                            PopupControlID="pnlVend" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseVend">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlVendResponse" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 800px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">Vendor Response
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnCloseVendResp" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tab" width="70%">
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Organization:&nbsp;<b>XMS Technologies</b></label></small>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        CompCode:&nbsp;<b>IOSMAC</b></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Quote Description:&nbsp;<b><asp:Label ID="lblRespQuoteDescr" runat="server"></asp:Label></b></label></small>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Quote Status:&nbsp;<asp:Label ID="lblRespQuoteStatus" runat="server" Style="font-size: 1.5em"></asp:Label>
                                                                        </label>
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <isx:CoolGridView ID="gvVendResp" runat="server" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                        OnRowDataBound="gvVendResp_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Quote#">
                                                                                <ItemTemplate></ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Line#">
                                                                                <ItemTemplate></ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Product">
                                                                                <ItemTemplate></ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Descr">
                                                                                <ItemTemplate></ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Qty">
                                                                                <ItemTemplate></ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkVendResponse" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popVendResponse" runat="server" PopupControlID="pnlVendResponse"
                                            DropShadow="false" CancelControlID="btnCloseVendResp" TargetControlID="lnkVendResponse"
                                            BackgroundCssClass="modalBackground1">
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
