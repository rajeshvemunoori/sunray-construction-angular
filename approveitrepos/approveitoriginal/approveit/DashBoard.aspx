<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DashBoard.aspx.cs" Inherits="DashBoard" %>

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
    <title>ApproveIt - Home</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/TabStyle.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" type="text/css" />
    <script src="js/html5.js"></script>
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js" type="text/javascript"></script>
    <script>
        //document.onmousedown = disableclick;
        //function disableclick(e) {
        //    if (e.button == 2) {
        //        alert("Right Click Disabled");
        //        return false;
        //    }
        //}

        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();

        $(document).ready(function () {
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }
        function showProgress() {
            var updateProgress = document.getElementById("UpdateProgress1");
            updateProgress.style.display = "block";
        }

        function hideProgress() {
            var updateProgress = document.getElementById("UpdateProgress1");
            updateProgress.style.display = "none";
        }
    </script>
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
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
                    <uc8:leftmenu ID="leftmenu" runat="server"/>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px;">
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
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="60%">
                                                    <hgroup>
                                                        <h2>Welcome
                                                        <%=Session["username"] + " " + Session["lastname"] %>
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div id="dvCompCode" runat="server" style="text-align: left; padding: 5px">
                                            <small>
                                                <label>
                                                    Company Code:&nbsp;</label></small>
                                            <asp:DropDownList ID="ddlCompCode" runat="server"
                                                OnSelectedIndexChanged="GetDashBoardData" AutoPostBack="true">
                                            </asp:DropDownList>
                                        </div>
                                        <table>
                                            <tr>
                                                <td></td>
                                            </tr>
                                        </table>
                                        <table>
                                            <tr>
                                                <td>
                                                    <cc1:TabContainer ID="tc1" runat="server" CssClass="ajax__tab_lightblue-theme">
                                                        <!-- Expense Requests Tab Starts Here -->
                                                        <cc1:TabPanel ID="tpExp" runat="server">
                                                            <HeaderTemplate>
                                                                Expense Requests
                                                            </HeaderTemplate>
                                                            <ContentTemplate>
                                                                <asp:Panel ID="pnlExp" runat="server">
                                                                    <section>
                                                                        <asp:PlaceHolder ID="pcExpReport" runat="server"></asp:PlaceHolder>
                                                                    </section>
                                                                </asp:Panel>
                                                            </ContentTemplate>
                                                        </cc1:TabPanel>
                                                        <!-- Expense Requests Tab Ends Here -->
                                                        <!-- POs Tab Starts Here -->
                                                        <cc1:TabPanel ID="tpPOs" runat="server">
                                                            <HeaderTemplate>
                                                                Purchase Orders
                                                            </HeaderTemplate>
                                                            <ContentTemplate>
                                                                <asp:Panel ID="pnlPOs" runat="server">
                                                                    <section>
                                                                        <div id="dvReport" runat="server">
                                                                            <asp:PlaceHolder ID="pcReport" runat="server"></asp:PlaceHolder>
                                                                        </div>
                                                                    </section>
                                                                </asp:Panel>
                                                            </ContentTemplate>
                                                        </cc1:TabPanel>
                                                        <!-- POs Tab Ends Here -->
                                                    </cc1:TabContainer>
                                                </td>
                                            </tr>
                                        </table>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
        <div id="push">
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
