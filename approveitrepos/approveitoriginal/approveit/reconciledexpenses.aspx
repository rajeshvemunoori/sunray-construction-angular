<%@ Page Language="C#" AutoEventWireup="true" CodeFile="reconciledexpenses.aspx.cs" Inherits="Reconciledexpenses" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Reconciled Expenses</title>
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
    <link href="Autosuggest/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>
    <script>
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();
    </script>
    <style>
        .lnk {
            color: white;
        }

        #gvExpDetailsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvExpDetailsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvExpDetails tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding: 5px;
            text-align: center;
            /*text-overflow: ellipsis;
            overflow: hidden;*/
        }

        #gvExpDetailsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvExpDetails TR TD, #gvExpDetails TR TH, #gvExpDetails TR TH div, #gvExpDetails TR TD div {
            overflow: visible;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .multi label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
            padding: 5px;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
        <asp:ScriptManager ID="Scr1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
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

                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 115%; margin-left: 0;">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <h2>Reconciled Expenses
                                                    </h2>
                                                </td>
                                                <td style="width: 50%; text-align: right">
                                                    <asp:Button ID="btnRefresh" runat="server" CssClass="buttonnew-blue" Text="Refresh" OnClick="BtnRefresh_Click" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div id="dvMainMessage" runat="server" style="text-align: center; font-size: 1.4em"></div>
                                        <div class="message info" style="width: 460px">
                                            <small>
                                                <label><b><em>*</em></b>&nbsp;Select which months transactions to reconcile.</label>
                                        </div>
                                        <div>
                                            <asp:DropDownCheckBoxes ID="ddlEmployee" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                Width="170px" CssClass="multi" OnSelectedIndexChanged="DdlEmployee_SelectedIndexChanged" AutoPostBack="true">
                                                <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Employee(s)" />
                                            </asp:DropDownCheckBoxes>&nbsp;&nbsp;&nbsp;&nbsp;
                                             <asp:DropDownCheckBoxes ID="ddlMonth" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                 Width="150px" CssClass="multi" OnSelectedIndexChanged="DdlMonth_SelectedIndexChanged" AutoPostBack="true">
                                                 <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Month(s)" />
                                             </asp:DropDownCheckBoxes>
                                            <%-- <asp:DropDownList ID="ddlMonth" runat="server" Width="150px">
                                            </asp:DropDownList>--%>&nbsp;&nbsp;&nbsp;&nbsp;                                            
                                            <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="BtnGo_Click" />
                                        </div>
                                        <br />
                                        <isx:CoolGridView AllowPaging="false" ID="gvExpDetails" runat="server" AutoGenerateColumns="false"
                                            Width="950px" Height="450px" GridLines="None" ShowHeader="true" OnRowDataBound="GvExpDetails_RowDataBound">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Request ID">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkRequestID" runat="server" Text="Request ID" CommandArgument="ReqID"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblRequestId" runat="server" Text='<%#Eval("ReqID")%>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkAccount" runat="server" Text="Account" CommandArgument="expItem"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblExpAccount" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkAccountCode" runat="server" Text="Code" CommandArgument="comments"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblExpAccountCode" runat="server" Text='<%#Eval("accountCode") %>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkStartDate" runat="server" Text="Expense Date" CommandArgument="expDate"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblExpStartDate" runat="server" Text='<%#Eval("expDate") %>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Amount($)">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkActAmount" runat="server" Text="Amount($)" CommandArgument="actualAmount"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblExpAmount" runat="server" Text='<%#Eval("actualAmount") %>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="purpose"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("purpose") %></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkCCRefNo" runat="server" Text="CC Reference#" CommandArgument="comments"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("comments") %></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <EmptyDataTemplate>
                                                <div style="width: 150px">
                                                    <label>No data found.</label>
                                                </div>
                                            </EmptyDataTemplate>
                                        </isx:CoolGridView>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
                <div id="push">
                </div>
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
