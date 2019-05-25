<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DashBoard.aspx.cs" Inherits="DashBoard" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11"/>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10"/>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9"/>
    <title>ApproveIt - Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <link href="css/TabStyle.css" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'/>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico"/>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="latestdesign/css/reset.css"/>
    <!-- CSS reset -->
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css"/>
    <!-- Resource style -->
    <script src="latestdesign/js/modernizr.js"></script>
    <script>

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
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        
            <!-- Sidebar -->
             <div class="row menu-bg">
	                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
                    </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" ">
        <div class=" container-fluid  cd-main-content"  >
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
                                <img alt="Loader" src="images/Loaders/image_855859.gif" />
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
                         
                            <div class="row " style="margin-top:70px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <header class="clearfix">

                                    <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-pie-chart "></i></span>Welcome         <%=Session["username"] + " " + Session["lastname"] %></div>
                      
                                </header>
                                <section>
                                    <div id="dvCompCode" runat="server" style="text-align: left; padding: 5px">
                                        <small>
                                            <label>
                                                Company Code:&nbsp;</label></small>
                                        <asp:DropDownList ID="ddlCompCode" runat="server"
                                            OnSelectedIndexChanged="GetDashBoardData" CssClass="form-control" AutoPostBack="true">
                                        </asp:DropDownList>
                                    </div>
                                    <table>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </table>
                                    <div class="table-responsive">
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
                                        </div>
                                </section>
                                </div>
                            </div>
                         
                    </ContentTemplate>
                </asp:UpdatePanel>
            </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->

        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
                 </div>
            </div>
    </form>
   
</body>
</html>
