<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ViewInvc.aspx.cs" Inherits="ViewInvc" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="keywords" Src="Controls/jobsitekeywords.ascx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - View Invoice</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground2 {
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
                font-weight: bold;
                color: Red;
            }

        #gvInvDetailsjEsCoOl_headerDiv div table tbody tr th, #gvDetailsjEsCoOl_headerDiv div table tbody tr th {
            background-color: #3B6AA0;
        }

        #gvInvDetailsjEsCoOl_headerDiv div table tbody tr th, #gvDetailsjEsCoOl_headerDiv div table tbody tr th {
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        #gvInvDetails tbody tr td, #gvDetails tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvInvDetailsjEsCoOl_mainDiv, #gvDetailsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvDetails TR TD, #gvDetails TR TH, #gvDetails TR TH div, #gvDetails TR TD div {
            overflow: visible;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <script type="text/javascript">
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_initializeRequest(InitializeRequest);
            prm.add_endRequest(EndRequest);
            function InitializeRequest(sender, args) {
            }
            function EndRequest(sender, args) {
                //$(".date").datepicker();
                //
            }
        </script>
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
                    <section class="main-section grid_7" style="padding-top: 0px">
                        <asp:HiddenField ID="hdnExp" runat="server" />
                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="images/Loaders/image_855859.gif" />
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
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style='display: none' />
                                <div class="main-content grid_4 alpha" style="width: 115%">
                                    <header style="color: Fuchsia">
                                        <table width="100%">
                                            <tr>
                                                <td width="35%" style="vertical-align: top">
                                                    <h2>View Invoice
                                                    </h2>
                                                </td>
                                                <td width="65%" align="right">
                                                    <asp:Button ID="Batchdetails" runat="server" CssClass="buttonnew-blue"
                                                        OnClick="BatchData" Text="BatchDetails" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReloadData_Click" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table width="100%">
                                                <tr>
                                                    <td>
                                                        <table width="50%">
                                                            <tr>
                                                                <td style="width: 20%">
                                                                    <small>
                                                                        <label>
                                                                            Select Vendor:&nbsp
                                                                        </label>
                                                                    </small>
                                                                </td>
                                                                <td style="width: 80%">
                                                                    <asp:DropDownList ID="ddlPreVendor" runat="server" DataTextField="PreferredVendor"
                                                                        DataValueField="PreferredVendor" AutoPostBack="True" OnSelectedIndexChanged="ddlPreVendor_SelectedIndexChanged"
                                                                        Width="200px">
                                                                    </asp:DropDownList>
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
                                                        <div class="divfieldset">
                                                            <table style="width: 40%">
                                                                <tr>
                                                                    <td colspan="3">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Invoice Date</label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <small>
                                                                            <label>
                                                                                From:&nbsp;
                                                                            </label>
                                                                        </small>
                                                                        <asp:TextBox ID="txtFrom" runat="server" Width="100px" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender3" runat="server" TargetControlID="txtFrom" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <small>
                                                                            <label>
                                                                                To:&nbsp;
                                                                            </label>
                                                                        </small>
                                                                        <asp:TextBox ID="txtTo" runat="server" Width="100px" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender4" runat="server" TargetControlID="txtTo" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="btnGo_click" />
                                                                        <asp:HiddenField ID="hdnCompCode" runat="server" />
                                                                        <asp:HiddenField ID="hdnOrgID" runat="server" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table width="100%">
                                                            <tr>
                                                                <%if (ddlInv.Items.Count > 0)
                                                                  { %>
                                                                <div id="dvInvNo" runat="server">
                                                                    <td width="25%">
                                                                        <small>
                                                                            <label>
                                                                                Select Invoice No.:&nbsp;&nbsp;</label></small>
                                                                        <asp:DropDownList ID="ddlInv" runat="server" AutoPostBack="true" DataValueField="invNo"
                                                                            DataTextField="invNo" Width="170px" OnSelectedIndexChanged="ddlInv_SelectedIndexChanged">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </div>
                                                                <%} %>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div class="clearfix">
                                                <br />
                                            </div>
                                            <isx:CoolGridView AllowPaging="false" ID="gvDetails" runat="server" AutoGenerateColumns="false"
                                                Width="100%" Height="250px" GridLines="None" OnRowDataBound="gvDetails_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="InvoiceNO" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkInvNO" runat="server" Text="InvoiceNO" CommandArgument="invNo"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:LinkButton ID="lnkInvEdit" runat="server" CommandArgument="test" Text='<%#Eval("invNo")%>'
                                                                    OnClick="Edit" Font-Bold="false" Font-Underline="true"></asp:LinkButton></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Vendor" HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkVendor" runat="server" Text="Vendor" CommandArgument="PreferredVendor"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("preferredVendor")%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="InvDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("invDate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="DueDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("dueDate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField>
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkActAmount" runat="server" Text="InvAmount" CommandArgument="totalInvAmt"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("totalInvAmt")%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="PostDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("postdate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Invoice">
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblAttDwnld" runat="server"></asp:Label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="View">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" Text="Edit"
                                                                OnClick="Edit" ToolTip="View Details"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                            <asp:HiddenField ID="hdndueDate" runat="server" Value='<%#Eval("dueDate") %>' />
                                                            <asp:HiddenField ID="hdnInvNo" runat="server" Value='<%#Eval("invNo") %>' />
                                                            <asp:HiddenField ID="hdnInvDate" runat="server" Value='<%#Eval("invDate") %>' />
                                                            <asp:HiddenField ID="hdnAmount" runat="server" Value='<%#Eval("totalInvAmt") %>' />
                                                            <asp:HiddenField ID="hdnPrefVendor" runat="server" Value='<%# Eval("preferredVendor") %>' />
                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%# Eval("invPath") %>' />
                                                            <asp:HiddenField ID="hdnInvPostDate" runat="server" Value='<%#Convert.ToDateTime(Eval("postdate")).ToShortDateString()%>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 500px">
                                                        <label>No Invoices to display within the date range.</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                        </div>
                                        <asp:Panel ID="pnlEditInv" runat="server" Style="display: none">
                                            <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 526px; width: 100%">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="60%" style="vertical-align: top">
                                                                <h2 class="pophead">Invoice
                                                                </h2>
                                                            </td>
                                                            <td width="40%" align="right">
                                                                <%if (gvInvDetails.Rows.Count > 0)
                                                                  { %>
                                                                <asp:Button ID="btnSaveInv" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveInvoiceDetails" />
                                                                <%} %>
                                                                <asp:Button ID="btnReloadEditData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section style="padding: 20px;">
                                                    <div class="divfieldset">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <b>
                                                                        <div id="dvMsg" runat="server">
                                                                        </div>
                                                                    </b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="vertical-align: top">
                                                                    <table>
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Name:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtVendor" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Invoice No:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvNumber" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="vertical-align: top">
                                                                    <table width="90%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Amount:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvAmount" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Posted Date:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvPostedDate" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Invoice Date:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvDate" runat="server" autocomplete="off" class="date"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtInvDate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                            </td>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Due Date:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvDueDate" runat="server" autocomplete="off" class="date"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtInvDueDate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Remaining Allocation:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtInvRemAlloc" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <div id="DvBatch" runat="server">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td align="right">
                                                                                                <small>
                                                                                                    <label>
                                                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Batch ID:&nbsp;&nbsp;</label></small>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtBatchcnt" runat="server"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
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
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        PO Search:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:DropDownList ID="ddlInvPONO" runat="server" DataTextField="OurRefNo" DataValueField="RequestID"
                                                                                    Width="235px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td>
                                                                    <table width="79%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <label>
                                                                                    Upload Invoice:&nbsp;&nbsp;</label>
                                                                            </td>
                                                                            <td>
                                                                                <cc1:AsyncFileUpload ID="fupdInv" runat="server"
                                                                                    UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" Width="250px" />
                                                                                <div style="float: left; padding-left: 0.5em">
                                                                                    <a href="#" id="tooltip">
                                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                        <span><small>
                                                                                            <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf.</label></small>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="message info" id="dvInvFile" runat="server">
                                                                                    <asp:Label ID="lblInvFiileDownload" runat="server"></asp:Label>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td>
                                                                                <asp:Label ID="Throbber" runat="server" Style="display: none">
            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                                </asp:Label>
                                                                            </td>
                                                                            <td></td>
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
                                                                    <table width="57%">
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Button ID="btnApplyToPO" runat="server" Text="Apply To Invoice" CssClass="buttonnew-blue"
                                                                                    OnClick="AppendPOInvLine" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div>
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <%if (gvInvDetails.Rows.Count > 0)
                                                                          { %>
                                                                        <isx:CoolGridView ID="gvInvDetails" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                            Height="180px" OnRowDataBound="gvInvDetails_OnRowDataBound" CellPadding="30"
                                                                            CellSpacing="30">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="PO#" ControlStyle-Width="100px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPONO" runat="server" Text='<%#Eval("ourRefNo")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:HiddenField ID="hdnEditPONO" runat="server" Value='<%#Eval("ourRefNo")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="POLine#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOLineNo" runat="server" Text='<%#Eval("expLineNo")%>'></asp:Label>
                                                                                        </label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="POLineSeq" ControlStyle-Width="100px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOLineSeq" runat="server" Text='<%#Eval("polineseq")%>'></asp:Label>
                                                                                        </label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Account#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvAccCode" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoAccCode" runat="server" Visible="false" Text='<%#Eval("accountCode")%>'
                                                                                            CssClass="autosuggest"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Description" ControlStyle-Width="90px" HeaderStyle-Width="120px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvDescr" runat="server"></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoDescr" runat="server" Visible="false"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Amount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOAmnt" runat="server"></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoAmnt" runat="server" Visible="false"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Quantity" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvQnty" runat="server" Text='<%#Eval("quantity")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoQnty" runat="server" Visible="false" Text='<%#Eval("quantity")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvQty" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvQntyRcv" runat="server" Text='<%#Eval("qtyReceived")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="TaxAmount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvTaxAmnt1" runat="server" Text='<%#Eval("taxAmount1")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="ShippingCost" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvShipCst" runat="server" Text='<%#Eval("shippingCost")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvoiceAmount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvAmnt" runat="server" Text='<%#Eval("poInvAmount")%>'></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnCurrInvAmnt" runat="server" Value='<%#Eval("poInvAmount")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvoiceLine#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvLineNo" runat="server" Text='<%#Eval("invLineNo")%>'></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnCancelledRow" runat="server" />
                                                                                        <asp:HiddenField ID="hdnRowCancelFlg" runat="server" Value='<%#Eval("detailsFlag") %>' />
                                                                                        <asp:HiddenField ID="hdnUnitPrice" runat="server" Value='<%#Eval("unitPrice") %>' />
                                                                                        <asp:HiddenField ID="hdnReqID" runat="server" Value='<%#Eval("reqId") %>' />
                                                                                        <asp:HiddenField ID="hdnRequestID" runat="server" Value='<%#Eval("requestId") %>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </isx:CoolGridView>
                                                                        <%} %>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvMisc">
                                                            <asp:HiddenField ID="hdnDispAlert" runat="server" />
                                                            <asp:HiddenField ID="hdnTotInvAmnt" runat="server" />
                                                            <asp:HiddenField ID="hdnMisc" runat="server" />
                                                            <asp:HiddenField ID="hdnCurrRemaining" runat="server" />
                                                            <asp:HiddenField ID="hdnIsFileAttached" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileName" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileType" runat="server" />
                                                            <asp:HiddenField ID="hdnSelectedVend" runat="server" />
                                                            <asp:HiddenField ID="hdnInitialRem" runat="server" />
                                                            <asp:HiddenField ID="hdnSeqRowIndex" runat="server" />
                                                            <asp:HiddenField ID="hdnAccessedFrom" runat="server" />
                                                            <asp:HiddenField ID="hdnCurrInvAmnt1" runat="server" />
                                                            <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkInv" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popInv" runat="server" PopupControlID="pnlEditInv" DropShadow="false"
                                            TargetControlID="lnkInv" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 30%;">
                                                                <h2>Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 75%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="ConfirmChanges" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RejectChanges" />
                                                                <asp:Button ID="btnAlertclose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>
                                                            <asp:Label ID="lblAlertText" runat="server"></asp:Label></label></small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground2">
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

    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
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

        function refreshNotes() {
            window.location = window.location;
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlPreVendor").ufd({ log: true });
            });
            $(function () {
                $("#ddlInv").ufd({ log: true });
            });
            $(function () {
                $("#ddlInvPONO").ufd({ log: true });
            });
            searchAcc();
        });

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlPreVendor").ufd({ log: true });
            });
            $(function () {
                $("#ddlInv").ufd({ log: true });
            });
            $(function () {
                $("#ddlInvPONO").ufd({ log: true });
            });
            searchAcc();
        }

        function $1(id) {
            return document.getElementById(id);
        }

        function pageLoad() {
            searchAcc();
        }

        //Validate Amounts
        function validateInvoiceAmount1(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test($1(id).value) || $1(id).value == '') {
                return true;
            }
        }

        //Assign Amount to remaining amnt
        function CalcRemaining(amnt, rem) {
            if (validateInvoiceAmount1(amnt)) {
                var remAmount;
                try {
                    remAmount = parseFloat($1(amnt).value == '' ? '0' : $1(amnt).value) - parseFloat(CalculateTotalInvAmounts());
                }
                catch (err) {
                    remAmount = parseFloat($1(amnt).value == '' ? '0' : $1(amnt).value);
                }
                $1(rem).value = parseFloat(remAmount).toFixed(2);
                $1("hdnInitialRem").value = $1(rem).value;
                $1('dvMsg').innerHTML = "";
            }
            else {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Please enter valid Amount";
            }
        }

        //Calculate Remaining based on InvoiceAmount changes in gridview
        function OnChangeInvAmount(invAmnt, currInvAmnt, totInvAmnt, rem, currRem) {
            if (validateInvoiceAmount1(invAmnt)) {
                $1(totInvAmnt).value = parseFloat(CalculateTotalInvAmounts());
                $1(rem).value = parseFloat($1('txtInvAmount').value == '' ? '0' : $1('txtInvAmount').value) - parseFloat($1(totInvAmnt).value);
                $1('dvMsg').innerHTML = "";
                $1(invAmnt).style.border = '1px solid #ccc';
            }
            else {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Please enter valid Amount";
                $1(invAmnt).style.border = "1px solid Red";
            }
        }

        //Calculate total of InvAmounts in the Invoice grid
        function CalculateTotalInvAmounts() {
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            if (grid.rows.length > 0) {
                var inputs = grid.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].name.indexOf("txtEditInvAmnt") > 1) {
                        if (inputs[i].value != "") {
                            total = parseFloat(total) + parseFloat(inputs[i].value);
                        }
                    }
                }
            }
            return total;
        }

        //Validate QtyReceived and differevce between POAmount and InvoiceAmount on InvoiceAmount change
        function ValidateQtyRec(poAmnt, qty, qR, iA, rowIndex, uPr, sC, tX, poNo, clFlg, oldInvAmnt) {
            $1('dvMsg').style.color = "Red";
            var unitPr = $1(uPr).value;
            var qtyRec = $1(qR).value;
            var invAmnt = $1(iA).value == '' ? '0' : $1(iA).value;
            var Initialrem = $1("hdnInitialRem").value;
            var rem = $1("txtInvRemAlloc").value;
            var totInvAmnt = CalculateTotalInvAmounts();
            var shipCst = $1(sC).value;
            var txAmnt = $1(tX).value;
            var grid = $1('<%=gvInvDetails.ClientID %>');
            if (poNo == 'NOPO') {
                var i = parseInt(rowIndex) + 2;
                if (i <= 9) {
                    i = '0' + i;
                }
                poAmnt = $1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').value;
                qty = $1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').value;
                if (qty > 0)
                    unitPr = (parseFloat(poAmnt) - parseFloat(txAmnt) - parseFloat(shipCst)) / qty;
                else
                    unitPr = 0;
            }
            var x = parseFloat(Initialrem) - (parseFloat(totInvAmnt) - parseFloat(invAmnt));
            var calAmnt = (parseFloat(qtyRec) * parseFloat(unitPr)) + parseFloat(shipCst) + parseFloat(txAmnt);
            var url = window.location.href;
            if (invAmnt == '0') {
                if (grid.rows.length > 0) {
                    $1('btnNo').setAttribute("onclick", "RetainInvAmnt(" + rowIndex + ")");
                    $1('hdnRowIndex').value = rowIndex;
                    if (grid.rows.length > 2)
                        DisplayAlert("Making InvoiceAmount 0 deletes the row. Are you sure you want to do it?", "DelRow", "visible", "visible", "hidden", '1');
                    else {
                        $1(iA).value = oldInvAmnt;
                        $1('dvMsg').innerHTML = "You cannot delete single invoice.";
                    }
                }
            }
            else {
                try {
                    $1('btnNo').removeAttribute("onclick");
                }
                catch (err) {
                }
                if (parseFloat(rem) < 0 && (parseFloat(poAmnt) > parseFloat(invAmnt))) {
                    if (clFlg != '1') {
                        $1('dvMsg').innerHTML = "Remaining Allocation can not be -ve,Please adjust invoice amount and Qty Received";
                        //                        $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Qty Received";
                        $1(iA).style.border = "1px solid Red";
                        $1(qR).focus();
                        $1(qR).style.border = "1px solid Red";
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (poNo != 'NOPO') {
                            DisplayAlert("Is this final Invoice?", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                    }
                    else {
                        if (calAmnt != parseFloat(invAmnt)) {
                            $1('dvMsg').innerHTML = "Please adjust Amount details to match invoice amount";
                            //                            $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Amount details to match invoice amount";
                            $1(iA).style.border = "1px solid Red";
                            UpdateCancelledRow(rowIndex);
                            $1(iA).focus();
                        }
                    }
                }
                else if (parseFloat(rem) < 0) {
                    $1('dvMsg').innerHTML = "Remaining Allocation can not be -ve,Please adjust invoice amount.";
                    //                    $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x;

                    $1(iA).style.border = "1px solid Red";
                }
                else if (parseFloat(poAmnt) > parseFloat(invAmnt)) {
                    if (clFlg != '1') {
                        $1('dvMsg').innerHTML = "Please adjust Qty Received";
                        $1(qR).style.border = "1px solid Red";
                        $1(qR).focus();
                        $1(qR).title = "Please adjust Qty Received";
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (poNo != 'NOPO') {
                            DisplayAlert("Is this final Invoice?", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                    }
                    else {
                        if (calAmnt != parseFloat(invAmnt)) {
                            $1('dvMsg').innerHTML = "Please adjust Amount details to match invoice amount";
                            $1(iA).style.border = "1px solid Red";
                            UpdateCancelledRow(rowIndex);
                            $1(iA).focus();
                        }
                    }
                }
                else {
                    $1('dvMsg').innerHTML = "";
                    $1(iA).style.border = "1px solid #ccc";
                    $1(qR).style.border = "1px solid #ccc";
                }
            }
        }

        //Update InvoiceAmnt and QtyReceived of Cancelled row.
        function UpdateCancelledRow(rowIndex) {
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var i = parseInt(rowIndex) + 2;
            if (i <= 9) {
                i = '0' + i;
            }
            var poNo = $1(grid.id + '_ctl' + i + '_lblEditInvPONO').innerHTML;
            var poLineNo = $1(grid.id + '_ctl' + i + '_lblEditInvPOLineNo').innerHTML;
            var poLineSeq = $1(grid.id + '_ctl' + i + '_lblEditInvPOLineSeq').innerHTML;
            var poAmnt = $1(grid.id + '_ctl' + i + '_lblEditInvPOAmnt').innerHTML;
            var invAmnt = $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value;
            var qty = $1(grid.id + '_ctl' + i + '_lblEditInvQnty').innerHTML;
            var qtyRec = $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value;
            for (var j = 2; j <= grid.rows.length; j++) {
                if (j <= 9) {
                    j = '0' + j;
                }
                if (($1(grid.id + '_ctl' + j + '_lblEditInvPONO').innerHTML == poNo) && ($1(grid.id + '_ctl' + j + '_lblEditInvPOLineNo').innerHTML == poLineNo) && ($1(grid.id + '_ctl' + j + '_lblEditInvPOLineSeq').innerHTML == parseInt(poLineSeq) + 1)) {
                    $1(grid.id + '_ctl' + j + '_lblEditInvPOAmnt').innerHTML = parseFloat(parseFloat(poAmnt) - parseFloat(invAmnt)).toFixed(2);
                    $1(grid.id + '_ctl' + j + '_lblEditInvQnty').innerHTML = parseFloat(parseFloat(qty) - parseFloat(qtyRec)).toFixed(2);
                }
            }
        }

        //Display alert
        function DisplayAlert(alrtText, dispAlrt, IsYBVisible, isNBVisible, isCBVisible, type) {
            $1('lblAlertText').innerHTML = alrtText;
            $1('hdnDispAlert').value = dispAlrt;
            $1('btnYes').style.visibility = IsYBVisible;
            $1('btnNo').style.visibility = isNBVisible;
            try {
                $1('btnAlertclose').style.visibility = isCBVisible;
            }
            catch (err) { }
            if (type == '1')
                $find(Sys.Extended.UI.ModalPopupBehavior, { "CancelControlID": "btnNo", "id": "popAlert" }, null, null, $get("lnkAlert"));
            $find('popAlert').show();
        }

        //Validate negative Remaining Allocation value
        function ValidateInvQtyRec() {
            $1('dvMsg').style.color = "Red";
            if (parseFloat($1('txtInvRemAlloc').value) < 0) {
                $1('dvMsg').innerHTML = "Remaining Allocation is less than zero. Please adjust Invoice amounts.";
                return false;
            }
            else
                $1('dvMsg').innerHTML = "";
        }

        //Validate invoice line numbers
        function ValidateInvLineNo(lineNo) {
            $1('dvMsg').style.color = "Red";
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            if (grid.rows.length > 0) {
                var inputs = grid.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].name.indexOf("txtEditInvLineNo") > 1 && inputs[i] != $1(lineNo)) {
                        if (inputs[i].value == $1(lineNo).value) {
                            total++;
                        }
                    }
                }
            }
            if (total > 0) {
                $1('dvMsg').innerHTML = "InvoiceLineNo already exists.";
                $1(lineNo).value = '';
                $1(lineNo).focus();
            }
            else {
                $1('dvMsg').innerHTML = "";
            }
        }

        //Validate input fields in Inoice details GridView upon clicking Save
        function ValidateNOPOFields() {
            $1('dvMsg').style.color = "Red";
            ValidateInvQtyRec();
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            for (var i = 2; i <= grid.rows.length; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($1(grid.id + '_ctl' + i + '_hdnEditPONO').value == "NOPO") {
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoAccCode').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoAccCode').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoDescr').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoDescr').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').style.border = "1px solid Red";
                        total++;
                    }
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvTaxAmnt1').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvTaxAmnt1').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvShipCst').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvShipCst').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvLineNo').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvLineNo').style.border = "1px solid Red";
                    total++;
                }
            }
            if (total > 0) {
                $1('dvMsg').innerHTML = "Please enter required fields.";
                return false;
            }
            else {
                $1('dvMsg').innerHTML = "";
            }
        }

        //Capture Invoice amount upon its focus
        function CaptureInvAmnt(invAmnt) {
            $1('hdnCurrInvAmnt1').value = $1(invAmnt).value;
        }

        //Retain Invoice amount upon cancelling confirmation to delete
        function RetainInvAmnt(index) {
            var i = index + 2;
            if (i < 9) {
                i = '0' + i;
            }
            var grid = $1('<%=gvInvDetails.ClientID %>');
            $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value = $1('hdnCurrInvAmnt1').value;
            $1('hdnMisc').value = '0';
        }

        function RetainPop() {
            if (parseFloat($1('txtInvRemAlloc').value) != 0) {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Remaining Allocation should be equal to zero.";
                return false;
            }
            else {
                $find('popInv').hide();
            }
        }

        //Fill DueDate
        window.setInterval(function () {
            setdate();
        }, 1000);

        function setdate() {
            if (document.getElementById('txtInvDueDate').value == '' && document.getElementById('txtInvDate').value != '') {
                var invDate = new Date($('#<%= txtInvDate.ClientID %>').val());
                var numberOfDaysToAdd = 30;
                invDate.setDate(invDate.getDate() + numberOfDaysToAdd);

                var dd = invDate.getDate();
                var mm = invDate.getMonth() + 1;
                var y = invDate.getFullYear();

                if (dd < 10)
                    dd = '0' + dd;
                if (mm < 10)
                    mm = '0' + mm;
                var someFormattedDate = mm + '/' + dd + '/' + y;
                document.getElementById('txtInvDueDate').value = someFormattedDate;
            }
        }

        function searchAcc(AccCode) {
            $(".autosuggest").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ViewInvc.aspx/searchAccCode",
                        data: "{'accCode':'" + document.getElementById(AccCode).value + "','OrgID':'" + document.getElementById('hdnOrgID').value + "','CompCode':'" + document.getElementById('hdnCompCode').value + "'}",
                        dataType: "json",
                        success: function (data) {
                            response(data.d);
                        },
                        error: function (result) {
                            dvMsg.innerHTML = "An error occurred while fetching the data. Please press Reset and try again.";
                        }
                    });
                }
            });
        }
    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
-->
    <script type="text/javascript">
        function AjaxEndRequestHandler(sender, args) {
            var p = sender._updatePanelClientIDs;
            if (p != null)
                for (var j = 0; j < p.length; j++) {
                    var scripts = $get(p[j]).getElementsByTagName("script");
                    // .text is necessary for IE.
                    for (var i = 0; i < scripts.length; i++) {
                        try {
                            eval(scripts[i].innerHTML || scripts[i].text);
                        } catch (e2) { }
                    }
                }
        }

        try { Sys.WebForms.PageRequestManager.getInstance().add_endRequest(AjaxEndRequestHandler); }
        catch (e) { }
    </script>
</body>
</html>
