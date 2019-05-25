<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Reports.aspx.cs" Inherits="Reports" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>

<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Reports</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    	<link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <!-- CSS reset -->
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <style>
        label {
            /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }
    </style>
</head>

<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div id="wrapper">
            <!-- Sidebar -->
           <div class="row ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
            <section class="grid_7" style="padding-top: 0px">
                <!-- the tabs -->
                <asp:ScriptManager ID="ScriptManager1" runat="server">
                </asp:ScriptManager>
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
                <div class="clear">
                    <br />
                </div>
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                    </Triggers>
                    <ContentTemplate>
                             <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                <div class="row " style="margin-top:70px;">
                     <div class="row ">
                           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                   <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Reports</div>
                           </div>
                     </div>  
                    <div class="row ">
                           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                      <div id="dvError" runat="server">
                                            </div>
                               </div>
                     </div> 
                     <div class="row ">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">  Select Type:     </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						  <asp:DropDownList ID="ddlType" runat="server" OnSelectedIndexChanged="ddlType_SelectedIndexChanged"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
                                                    AutoPostBack="true">
                                                    <asp:ListItem>Expenses Request</asp:ListItem>
                                                    <asp:ListItem>Purchase Order</asp:ListItem>
                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                  Type of Report:     </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
					                                	<asp:DropDownList ID="ddlVendors" runat="server" OnSelectedIndexChanged="ddlVendors_SelectedIndexChanged"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
                                                     AutoPostBack="true">
                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  &nbsp;
                                              </div>
	
                                         </div>
                    <div class="row ">
                           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                      <div id="dvReport" runat="server">
                                                            <asp:PlaceHolder ID="pcReport" runat="server"></asp:PlaceHolder>
                                                        </div>
                               </div>
                     </div>
                       
                    </div>
                </div>
                                 </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
            <!-- Main Section End -->
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <%--<script src="js/html5shiv.js" type="text/javascript"></script>
        <script src="js/jquery.tools.min.js" type="text/javascript"></script>--%>
        <%--<script src="js/DateSetup.js" type="text/javascript"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
            <script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
        <script>
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            (function () {
                var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
                for (var i = 0; i < html5elmeents.length; i++) {
                    document.createElement(html5elmeents[i]);
                }
            })();

            function refreshExp() {
                $(".btnRefresh").click();
            }
            function showProgress() {
                var updateProgress = document.getElementById("UpdateProgress1");
                updateProgress.style.display = "block";
            }
        </script>
    </form>
</body>
</html>
