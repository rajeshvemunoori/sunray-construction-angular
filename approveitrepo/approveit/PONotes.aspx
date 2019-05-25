<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PONotes.aspx.cs" Inherits="PONotes" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
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
    <title>ApproveIt - Notes</title>
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
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .lnk {
            text-decoration: underline;
            color: White;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="cd-main-content"rec>
            <!-- Sidebar -->
           <div class="row ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
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
                    </Triggers>
                    <ContentTemplate>
                        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                        <div class="main-content grid_4 alpha">
                            <div class="row " style="margin-top:70px;"> 
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                     <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Notes</div>
                                </div>   
                            </div>
                            <div class="row " > 
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                     <div class="pull-right">
                                                 <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveNotes" Visible="true"></asp:Button>
                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="ReloadData" />
                                    </div>
                                </div>   
                         </div>
                            <section>
                            <div class="divfieldset">
                             <div class="row " > 
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                     <div id="dvMsg" runat="server">
                                    </div>
                                </div>   
                            </div>
 

                                     <div class="row ">
                                         <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting">Organization   </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
					                                	  <b>
                                                      <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
			                                      </div>
                                              </div>
                                              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting"> Company Code     </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                             <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="CompCode" DataValueField="CompCode"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
                                                    AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged">
                                                </asp:DropDownList>
                                                  
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting">Type    </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                              <asp:DropDownList ID="ddlNotesType" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlNotesType_SelectedIndexChanged" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                </asp:DropDownList>
			                                      </div>
                                              </div>
                                             
                                         </div>
                                <div class="row ">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="message info">
                                                                 
                                                                   
                                                                        <label class="form-label label_setting">   <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            Please Enter text (or copy and paste from any document). Maximum length allowed
                                                                            is 3000 characters.</label> 
                                                   </div>
                                                  <asp:TextBox ID="txtNotes" runat="server" TextMode="MultiLine" class=" form-control" ></asp:TextBox>
                                                                <asp:HiddenField ID="hdnNotesID" runat="server" />
                                                                <asp:HiddenField ID="hdnNotesCnt" runat="server" />
                                                  <div id="dvCharCnt" runat="server">
                                                                    <small>
                                                                         <label class="form-label label_setting">
                                                                            Charaters left 
                                                                          <span class="form-label label_setting"  id="lblCharCnt">
                                                                        </span>
                                                                        <label>
                                                                            .</label></small>
                                                                </div>
                                              </div>
                                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                 <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="DeleteNotes" Visible="true"></asp:Button>
                                                </div>
                                         </div>    
                                         
	                                                
                                         </div>
                                    
                                
                                </div>
                            </section>
                        </div>
                </div>
                            </div>
                        </div>

                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
        <%--<script src="js/html5shiv.js" type="text/javascript"></script>
       <script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
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

            function $11(id) {
                return document.getElementById(id);
            }
            var MaxLength = 3000;
            $(document).ready(function () {
                $11('dvCharCnt').style.display = 'none';
                checkNotes();
            });

            function DoOnAjaxPostback() {
                $11('dvCharCnt').style.display = 'none';
                checkNotes();
            }

            function checkNotes() {
                $11('lblCharCnt').innerHTML = '3000';
                $('#txtNotes').keyup(function (e) {
                    $11('dvCharCnt').style.display = 'block';
                    if ($(this).val().length >= MaxLength) {
                        e.preventDefault();
                    }
                    $11('lblCharCnt').innerHTML = MaxLength - $(this).val().length;
                });
            }

            function hideMsg() {
                $11('dvMsg').innerHTML = '';
            }

            function ValidateText() {
                if ($11('txtNotes').value == 0) {
                    $11('dvMsg').innerHTML = 'Please enter Notes';
                    $11('dvMsg').style.color = 'Red';
                    return false;
                }
            }

            function showProgress() {
                var updateProgress = $11("UpdateProgress1");
                updateProgress.style.display = "block";
            }

        </script>
    </form>
</body>
</html>
