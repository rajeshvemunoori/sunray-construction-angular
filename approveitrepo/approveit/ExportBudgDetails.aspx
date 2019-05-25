<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ExportBudgDetails.aspx.cs"
    Inherits="ExportBudgDetails" %>

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
    <title>ApproveIt - Forecast Details</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    	<link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <!-- CSS reset -->
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <style>
        .btn-style {
        background: #0f75bc;
            color: #ffffff;
             padding:9px;
             margin-right:2px;
        }
        .rowcolor {
            background-color: #EEB4B4;
        }

        .lnk {
            color: #0D4F8B;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .pnlCSS {
            /* font-weight: bold;*/
            cursor: pointer;
            border: solid 1px #c0c0c0;
            width: 99%;
        }

        .pnlColl {
            background: #0f75bc;
            color: #ffffff;
             padding:9px;
        }

        /*TabsStyle*/
        .tabWeeks .ajax__tab_header {
            font-family: "Helvetica Neue", Arial, Sans-Serif;
            font-size: 14px;
            font-weight: bold;
            display: block;
        }

            .tabWeeks .ajax__tab_header .ajax__tab_outer {
                border-color: #222;
                color: #222;
                padding-left: 10px;
                margin-right: 3px;
                border: solid 1px #d7d7d7;
            }

            .tabWeeks .ajax__tab_header .ajax__tab_inner {
                border-color: #666;
                color: #666;
                padding: 3px 10px 2px 0px;
            }

        .tabWeeks .ajax__tab_hover .ajax__tab_outer {
            background-color: #9c3;
        }

        .tabWeeks .ajax__tab_hover .ajax__tab_inner {
            color: #fff;
        }

        .tabWeeks .ajax__tab_active .ajax__tab_outer {
            border-bottom-color: #ffffff;
            background-color: #d7d7d7;
        }

        .tabWeeks .ajax__tab_active .ajax__tab_inner {
            color: #000;
            border-color: #333;
        }

        .tabWeeks .ajax__tab_body {
            font-family: verdana,tahoma,helvetica;
            font-size: 10pt;
            background-color: #fff;
            border-top-width: 0;
            border: solid 1px #d7d7d7;
            border-top-color: #ffffff;
        }

        /*Department Tab Style*/
        .tabDept .ajax__tab_header {
            font-family: "Helvetica Neue", Arial, Sans-Serif;
            font-size: 14px;
            font-weight: bold;
            display: block;
        }

            .tabDept .ajax__tab_header .ajax__tab_outer {
                border-color: #222;
                color: #222;
                padding-left: 10px;
                margin-right: 3px;
                border: solid 1px #d7d7d7;
            }

            .tabDept .ajax__tab_header .ajax__tab_inner {
                border-color: #666;
                color: #666;
                padding: 3px 10px 2px 0px;
            }

        .tabDept .ajax__tab_hover .ajax__tab_outer {
            background-color: #9c3;
        }

        .tabDept .ajax__tab_hover .ajax__tab_inner {
            color: #fff;
        }

        .tabDept .ajax__tab_active .ajax__tab_outer {
            border-bottom-color: #ffffff;
            background-color: #d7d7d7;
        }

        .tabDept .ajax__tab_active .ajax__tab_inner {
            color: #000;
            border-color: #333;
        }

        .tabDept .ajax__tab_body {
            font-family: verdana,tahoma,helvetica;
            font-size: 10pt;
            background-color: #fff;
            border-top-width: 0;
            border: solid 1px #d7d7d7;
            border-top-color: #ffffff;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="cd-main-content">
            <!-- Sidebar -->
           <div class="row ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
                  <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
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
                        <div class="main-content"  ; padding-top: 0px">
                            <div class="row " style="margin-top:70px;">
                                 <div class="row ">
                                       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                               <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span><%= Session["SOrgName"].ToString()%>
                                            Forecast Details</div>
                                       </div>
                                 </div>
                                <div class="row ">
                                       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                           <div class="alert alert-info">  <strong></strong> Please Select Company Code, Year and Month and click on Export button to export
                                                        Budget details.</strong></div>
                                        </div>
                                </div>
                            <section>
                                <div class="divfieldset">

                                     <div class="row ">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname"> Organization:    </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                          <asp:Label ID="lblOrgID" runat="server"></asp:Label>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                 &nbsp;
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                    &nbsp;
                                              </div>
	
                                         </div>


                                     <div class="row ">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname"> Company Code:  </label>
		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                 <asp:DropDownList ID="ddlCompCode"   CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true" runat="server">
                                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">Year </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                               <asp:DropDownList ID="ddlYear" runat="server" CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">Month </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                 <asp:DropDownList ID="ddlMonth" runat="server"  CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                          <div class="form-group col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
                                                   <asp:Button ID="btnGetWeekData" runat="server" CssClass="btn btn-info" Text="Get Data" OnClick="GetWeekWiseData" />
                                              </div>
	
                                         </div>
 
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
                                                         <div class="btn-style">   Week1</div>
                                                        </HeaderTemplate>
                                                        <ContentTemplate>
                                                            <asp:Panel ID="pnlWeel1" runat="server">
                                                                <section>
                                                                    <table width="98%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <asp:LinkButton ID="lnkExportWeek1" runat="server" Text="Export Data" CssClass="btn btn-info" OnCommand="ExportLnkDetails" CommandArgument="1"></asp:LinkButton>
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
                                                            <div class="btn-style">   Week2</div>
                                                        </HeaderTemplate>
                                                        <ContentTemplate>
                                                            <asp:Panel ID="pnlWeek2" runat="server">
                                                                <section>
                                                                    <table width="98%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <asp:LinkButton ID="lnkExportWeek2" runat="server" Text="Export Data" CssClass="btn btn-info" OnCommand="ExportLnkDetails" CommandArgument="2"></asp:LinkButton>
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
                                                            <div class="btn-style">   Week3</div>
                                                        </HeaderTemplate>
                                                        <ContentTemplate>
                                                            <asp:Panel ID="pnlWeek3" runat="server">
                                                                <section>
                                                                    <table width="98%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <asp:LinkButton ID="lnkExportWeek3" runat="server" Text="Export Data" CssClass="btn btn-info" OnCommand="ExportLnkDetails" CommandArgument="3"></asp:LinkButton>
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
                                                             <div class="btn-style">  Week4</div>
                                                        </HeaderTemplate>
                                                        <ContentTemplate>
                                                            <asp:Panel ID="pnlWeek4" runat="server">
                                                                <section>
                                                                    <table width="98%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <asp:LinkButton ID="lnkExportWeek4" runat="server" Text="Export Data" CssClass="btn btn-info" OnCommand="ExportLnkDetails" CommandArgument="4"></asp:LinkButton>
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
                                                             <div class="btn-style">  Week5</div>
                                                        </HeaderTemplate>
                                                        <ContentTemplate>
                                                            <asp:Panel ID="pnlWeek5" runat="server">
                                                                <section>
                                                                    <table width="98%">
                                                                        <tr>
                                                                            <td align="right">
                                                                                <asp:LinkButton ID="lnkExportWeek5" runat="server" Text="Export Data" CssClass="btn btn-info" OnCommand="ExportLnkDetails"
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
                                           <div style="" class="table-responsive">
                                                    <table width="100%">
                                                    <tr>
                                                        <td>
                                        <cc1:CollapsiblePanelExtender ID="CollapsiblePanelExtender1" runat="server" CollapseControlID="pnlClick"
                                            Collapsed="true" ExpandControlID="pnlClick" TextLabelID="lblMessage" CollapsedText="Show"
                                            ExpandedText="Hide" ImageControlID="imgArrows" CollapsedImage="images/downarrow.jpg"
                                            ExpandedImage="images/uparrow.jpg" ExpandDirection="Vertical" TargetControlID="pnlCollapsable"
                                            ScrollContents="false">
                                        </cc1:CollapsiblePanelExtender>
                                                               </td>
                                                        </tr>
                                                        </table>
                                                    </div>
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
                                         <div style="" class="table-responsive">
                                                    <table width="100%">
                                                    <tr>
                                                        <td>
                                        <cc1:CollapsiblePanelExtender ID="CollapsiblePanelExtender2" runat="server" CollapseControlID="pnlClick_Dept"
                                            Collapsed="true" ExpandControlID="pnlClick_Dept" TextLabelID="lblMessage_Dept"
                                            CollapsedText="Show" ExpandedText="Hide" ImageControlID="imgArrows_Dept" CollapsedImage="images/downarrow.jpg"
                                            ExpandedImage="images/uparrow.jpg" ExpandDirection="Vertical" TargetControlID="pnlCollapsible_Dept"
                                            ScrollContents="false">
                                        </cc1:CollapsiblePanelExtender>
                                                               </td>
                                                        </tr>
                                                        </table>
                                                    </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                            </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
                
            </section>
        </div>
                      </div>
               </div>
            </div>
        </div>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
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
    </form>
</body>
</html>
