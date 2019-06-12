<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ExportBudgDetails.aspx.cs"
    Inherits="ExportBudgDetails" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Forecast Details</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/TabStyle.css" rel="stylesheet" type="text/css" />
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css"/>
    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function showProgress() {
            var updateProgress = document.getElementById("UpdateProgress1");
            updateProgress.style.display = "block";
        }
    </script>
    <style>
        .rowcolor
        {
            background-color: #EEB4B4;
        }

        .lnk
        {
            color: #0D4F8B;
        }

        label
        {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .pnlCSS
        {
            /* font-weight: bold;*/
            cursor: pointer;
            border: solid 1px #c0c0c0;
            width: 99%;
        }

        .pnlColl
        {
            border: 1px solid #cadcea;
            background: #e1f2fc;
            background: -webkit-gradient(linear, left top, left bottom, from(#e1f2fc), to(#cae9fd));
            background: -moz-linear-gradient(top, #e1f2fc, #cae9fd);
            -pie-background: linear-gradient(top, #e1f2fc, #cae9fd);
            color: #225b86;
            text-shadow: 0 1px 0 #fff;
        }

        /*TabsStyle*/
        .tabWeeks .ajax__tab_header
        {
            font-family: "Helvetica Neue", Arial, Sans-Serif;
            font-size: 14px;
            font-weight: bold;
            display: block;
        }

            .tabWeeks .ajax__tab_header .ajax__tab_outer
            {
                border-color: #222;
                color: #222;
                padding-left: 10px;
                margin-right: 3px;
                border: solid 1px #d7d7d7;
            }

            .tabWeeks .ajax__tab_header .ajax__tab_inner
            {
                border-color: #666;
                color: #666;
                padding: 3px 10px 2px 0px;
            }

        .tabWeeks .ajax__tab_hover .ajax__tab_outer
        {
            background-color: #9c3;
        }

        .tabWeeks .ajax__tab_hover .ajax__tab_inner
        {
            color: #fff;
        }

        .tabWeeks .ajax__tab_active .ajax__tab_outer
        {
            border-bottom-color: #ffffff;
            background-color: #d7d7d7;
        }

        .tabWeeks .ajax__tab_active .ajax__tab_inner
        {
            color: #000;
            border-color: #333;
        }

        .tabWeeks .ajax__tab_body
        {
            font-family: verdana,tahoma,helvetica;
            font-size: 10pt;
            background-color: #fff;
            border-top-width: 0;
            border: solid 1px #d7d7d7;
            border-top-color: #ffffff;
        }

        /*Department Tab Style*/
        .tabDept .ajax__tab_header
        {
            font-family: "Helvetica Neue", Arial, Sans-Serif;
            font-size: 14px;
            font-weight: bold;
            display: block;
        }

            .tabDept .ajax__tab_header .ajax__tab_outer
            {
                border-color: #222;
                color: #222;
                padding-left: 10px;
                margin-right: 3px;
                border: solid 1px #d7d7d7;
            }

            .tabDept .ajax__tab_header .ajax__tab_inner
            {
                border-color: #666;
                color: #666;
                padding: 3px 10px 2px 0px;
            }

        .tabDept .ajax__tab_hover .ajax__tab_outer
        {
            background-color: #9c3;
        }

        .tabDept .ajax__tab_hover .ajax__tab_inner
        {
            color: #fff;
        }

        .tabDept .ajax__tab_active .ajax__tab_outer
        {
            border-bottom-color: #ffffff;
            background-color: #d7d7d7;
        }

        .tabDept .ajax__tab_active .ajax__tab_inner
        {
            color: #000;
            border-color: #333;
        }

        .tabDept .ajax__tab_body
        {
            font-family: verdana,tahoma,helvetica;
            font-size: 10pt;
            background-color: #fff;
            border-top-width: 0;
            border: solid 1px #d7d7d7;
            border-top-color: #ffffff;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position:fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server"/>
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
                                        <img src="images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="btnGetWeekData" />
                                <asp:PostBackTrigger ControlID="tc1$tpWeek1$lnkExportWeek1" />
                                <asp:PostBackTrigger ControlID="tc1$tpWeek2$lnkExportWeek2" />
                                <asp:PostBackTrigger ControlID="tc1$tpWeek3$lnkExportWeek3" />
                                <asp:PostBackTrigger ControlID="tc1$tpWeek4$lnkExportWeek4" />
                                <asp:PostBackTrigger ControlID="tc1$tpWeek5$lnkExportWeek5" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                <div class="main-content" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <h2>
                                                <%= Session["SOrgName"].ToString()%>
                                            Forecast Details
                                            </h2>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table width="100%">
                                                <tr>
                                                    <td>
                                                        <div class="message info">
                                                            Please Select Company Code, Year and Month and click on Export button to export
                                                        Budget details.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table width="100%">
                                                            <tr>
                                                                <td width="10%">
                                                                    <small>
                                                                        <label>
                                                                            Organization:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left" style="font-size: 13px;" width="90%">
                                                                    <b>
                                                                        <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
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
                                                        <table width="80%">
                                                            <tr>
                                                                <td width="25%">
                                                                    <small>
                                                                        <label>
                                                                            Company Code:</label></small>&nbsp;&nbsp;
                                                                <asp:DropDownList ID="ddlCompCode" runat="server">
                                                                </asp:DropDownList>
                                                                </td>
                                                                <td width="15%">
                                                                    <small>
                                                                        <label>
                                                                            Year:</label></small>&nbsp;&nbsp;
                                                                <asp:DropDownList ID="ddlYear" runat="server">
                                                                </asp:DropDownList>
                                                                </td>
                                                                <td width="20%">
                                                                    <small>
                                                                        <label>
                                                                            Month:
                                                                        </label>
                                                                    </small>
                                                                    &nbsp;&nbsp;
                                                                <asp:DropDownList ID="ddlMonth" runat="server">
                                                                </asp:DropDownList>
                                                                </td>
                                                                <td width="10%">
                                                                    <asp:Button ID="btnGetWeekData" runat="server" CssClass="buttonnew-blue" Text="Get Data" OnClick="GetWeekWiseData" />
                                                                </td>
                                                                <td width="10%"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <br />
                                            <br />
                                            <div id="dvWeekTabs" runat="server" style="display: none">
                                                <asp:Panel ID="pnlClick" runat="server" CssClass="pnlCSS">
                                                    <div class="pnlColl">
                                                        <div style="float: left; padding: 5px">
                                                            View Week wise data
                                                        </div>
                                                        <div style="float: right; padding: 5px">
                                                            <asp:Label ID="lblMessage" runat="server" Text="Label" />
                                                            <asp:Image ID="imgArrows" runat="server" />
                                                        </div>
                                                        <div style="clear: both">
                                                        </div>
                                                    </div>
                                                </asp:Panel>
                                                <br />
                                                <asp:Panel ID="pnlCollapsable" runat="server" Height="0" CssClass="pnlCSS">
                                                    <div>
                                                        <cc1:TabContainer ID="tc1" runat="server" CssClass="ajax__tab_lightblue-theme">
                                                            <!-- Week1 Tab Starts Here -->
                                                            <cc1:TabPanel ID="tpWeek1" runat="server">
                                                                <HeaderTemplate>
                                                                    Week1
                                                                </HeaderTemplate>
                                                                <ContentTemplate>
                                                                    <asp:Panel ID="pnlWeel1" runat="server">
                                                                        <section>
                                                                            <table width="98%">
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <asp:LinkButton ID="lnkExportWeek1" runat="server" Text="Export Data" CssClass="buttonnew-blue" OnCommand="ExportLnkDetails" CommandArgument="1"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:PlaceHolder ID="pcWeek1" runat="server"></asp:PlaceHolder>
                                                                        </section>
                                                                    </asp:Panel>
                                                                </ContentTemplate>
                                                            </cc1:TabPanel>
                                                            <!-- Week2 Tab Starts Here -->
                                                            <cc1:TabPanel ID="tpWeek2" runat="server">
                                                                <HeaderTemplate>
                                                                    Week2
                                                                </HeaderTemplate>
                                                                <ContentTemplate>
                                                                    <asp:Panel ID="pnlWeek2" runat="server">
                                                                        <section>
                                                                            <table width="98%">
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <asp:LinkButton ID="lnkExportWeek2" runat="server" Text="Export Data" CssClass="buttonnew-blue" OnCommand="ExportLnkDetails" CommandArgument="2"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:PlaceHolder ID="pcWeek2" runat="server"></asp:PlaceHolder>
                                                                        </section>
                                                                    </asp:Panel>
                                                                </ContentTemplate>
                                                            </cc1:TabPanel>
                                                            <!-- Week3 Tab Starts Here -->
                                                            <cc1:TabPanel ID="tpWeek3" runat="server">
                                                                <HeaderTemplate>
                                                                    Week3
                                                                </HeaderTemplate>
                                                                <ContentTemplate>
                                                                    <asp:Panel ID="pnlWeek3" runat="server">
                                                                        <section>
                                                                            <table width="98%">
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <asp:LinkButton ID="lnkExportWeek3" runat="server" Text="Export Data" CssClass="buttonnew-blue" OnCommand="ExportLnkDetails" CommandArgument="3"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:PlaceHolder ID="pcWeek3" runat="server"></asp:PlaceHolder>
                                                                        </section>
                                                                    </asp:Panel>
                                                                </ContentTemplate>
                                                            </cc1:TabPanel>
                                                            <!-- Week4 Tab Starts Here -->
                                                            <cc1:TabPanel ID="tpWeek4" runat="server">
                                                                <HeaderTemplate>
                                                                    Week4
                                                                </HeaderTemplate>
                                                                <ContentTemplate>
                                                                    <asp:Panel ID="pnlWeek4" runat="server">
                                                                        <section>
                                                                            <table width="98%">
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <asp:LinkButton ID="lnkExportWeek4" runat="server" Text="Export Data" CssClass="buttonnew-blue" OnCommand="ExportLnkDetails" CommandArgument="4"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:PlaceHolder ID="pcWeek4" runat="server"></asp:PlaceHolder>
                                                                        </section>
                                                                    </asp:Panel>
                                                                </ContentTemplate>
                                                            </cc1:TabPanel>
                                                            <!-- Week5 Tab Starts Here -->
                                                            <cc1:TabPanel ID="tpWeek5" runat="server">
                                                                <HeaderTemplate>
                                                                    Week5
                                                                </HeaderTemplate>
                                                                <ContentTemplate>
                                                                    <asp:Panel ID="pnlWeek5" runat="server">
                                                                        <section>
                                                                            <table width="98%">
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <asp:LinkButton ID="lnkExportWeek5" runat="server" Text="Export Data" CssClass="buttonnew-blue" OnCommand="ExportLnkDetails"
                                                                                            CommandArgument="5"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:PlaceHolder ID="pcWeek5" runat="server"></asp:PlaceHolder>
                                                                        </section>
                                                                    </asp:Panel>
                                                                </ContentTemplate>
                                                            </cc1:TabPanel>
                                                        </cc1:TabContainer>
                                                    </div>
                                                </asp:Panel>
                                                <cc1:CollapsiblePanelExtender ID="CollapsiblePanelExtender1" runat="server" CollapseControlID="pnlClick"
                                                    Collapsed="true" ExpandControlID="pnlClick" TextLabelID="lblMessage" CollapsedText="Show"
                                                    ExpandedText="Hide" ImageControlID="imgArrows" CollapsedImage="images/downarrow.jpg"
                                                    ExpandedImage="images/uparrow.jpg" ExpandDirection="Vertical" TargetControlID="pnlCollapsable"
                                                    ScrollContents="false">
                                                </cc1:CollapsiblePanelExtender>
                                            </div>
                                            <div id="dvDeptTabs" runat="server" style="display: none">
                                                <asp:Panel ID="pnlClick_Dept" runat="server" CssClass="pnlCSS">
                                                    <div class="pnlColl">
                                                        <div style="float: left; padding: 5px">
                                                            View Department wise data
                                                        </div>
                                                        <div style="float: right; padding: 5px">
                                                            <asp:Label ID="lblMessage_Dept" runat="server" Text="Label" />
                                                            <asp:Image ID="imgArrows_Dept" runat="server" />
                                                        </div>
                                                        <div style="clear: both">
                                                        </div>
                                                    </div>
                                                </asp:Panel>
                                                <br />
                                                <asp:Panel ID="pnlCollapsible_Dept" runat="server" Height="0" CssClass="pnlCSS">
                                                    <asp:PlaceHolder ID="plc" runat="server"></asp:PlaceHolder>
                                                </asp:Panel>
                                                <cc1:CollapsiblePanelExtender ID="CollapsiblePanelExtender2" runat="server" CollapseControlID="pnlClick_Dept"
                                                    Collapsed="true" ExpandControlID="pnlClick_Dept" TextLabelID="lblMessage_Dept"
                                                    CollapsedText="Show" ExpandedText="Hide" ImageControlID="imgArrows_Dept" CollapsedImage="images/downarrow.jpg"
                                                    ExpandedImage="images/uparrow.jpg" ExpandDirection="Vertical" TargetControlID="pnlCollapsible_Dept"
                                                    ScrollContents="false">
                                                </cc1:CollapsiblePanelExtender>
                                            </div>
                                        </div>
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
