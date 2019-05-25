<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserGroups.aspx.cs" Inherits="UserGroups" %>

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
    <title>ApproveIt - Group Profiles</title>
    <link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <style>
        .modalBackground1 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 3000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            text-align:left !important;
            font-weight:bold;
            color: #555555;
        }

        .navlnk {
            font-weight: bold;
            font-size: 1.5em;
            width: 40px;
            font-family: Franklin Gothic Demi;
        }

        p label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: Black;
        }
        table.table-condensed tr td {
            border:0px !important; 
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
             <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
                   <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white"  ">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px">
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
                <div class="clear">
                    <br />
                </div>
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                    </Triggers>
                    <ContentTemplate>
                         <div class="row " style="margin-top:70px;">
                          <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <div class="main-content" style="width: 110%; padding-top: 0px">
                         <div class="row ">
                               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"  >
                                       <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Group Profiles</div>
                               </div>
                         </div>   
                            <section>
                                <div class="divfieldset">
                                    <div id="dvGroupErr" runat="server" style="color: Red; font-size: small">
                                    </div>
                                    <br />
                                         <div class="row">
                                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
		                                <div class="col-sm-5 padd-zero"> 
			                                <label class="form-label label_setting" for="lastname">   Comp Code:  </label> 
		                                </div> 
		                                <div class="col-sm-7 padd-zero"> 
                                             <asp:DropDownList ID="ddlCompCode" CssClass="form-control selectpicker"  data-live-search="true" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" Width="200px">
                                                            </asp:DropDownList>
		                                </div> 
                                     </div>

                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
		                                <div class="col-sm-5 padd-zero"> 
			                                <label class="form-label label_setting" for="lastname">     Groups:  </label> 
		                                </div> 
		                                <div class="col-sm-7 padd-zero"> 
                                              <asp:DropDownList ID="ddlGroups" CssClass="form-control selectpicker"  data-live-search="true" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                OnSelectedIndexChanged="ddlGroups_SelectedIndexChanged" AutoPostBack="true" Width="200px">
                                                            </asp:DropDownList>
		                                </div> 
                                     </div>

                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
		                                        <small><label> <asp:LinkButton ID="lnkCreateGroup" CssClass="btn btn-info" runat="server" Text="Click here"
                                                                OnClick="CreateGroup"></asp:LinkButton> to add new group.</label></small>
                                                 
                                             </div>
                                         <div class="row">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  " style="margin:0px 5px;">
                                                                                  <div class="message info">
                                                                                           <div class="alert alert-info"> <span style="color: Red">*</span><span style="color: Black">Please note, assigning/removing
                                                                                                    profile(s) will be saved to database automatically.</span></div>
                                                                                      </div>
                                                                                      
                                                  </div>
                                         </div>
                                              <div class="row">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  "  >
                                        <div class="table-responsiWve">
                                              <table class="table table-condensed " style="width:80%;margin-left:7%;">
                                                  <tr>
                                                      <td>
                                                            <table class="table table-striped">
                                                                <tr>
                                                                    <td>
                                                                        <small>
                                                                            <div class="lable label-info" style="padding:10px;color:#ffffff;">
                                                                                List of Profiles:</div></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                           <asp:ListBox ID="lstErRoles" CssClass="form-control" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                             SelectionMode="Multiple" Width="200px" Height="200px" style="overflow:auto;margin-top: -7px;"></asp:ListBox>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                      </td>
                                                       <td>
                                                          <table class="table table-striped" style="margin-top:70px;">
                                                    <tr>
                                                        <td style="margin:0 auto;text-align:center;">
                                                            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="AssignSelectedProfiles"
                                                                CssClass="btn btn-info" Text=">" ToolTip="Assign Selected Profile" Width="40px" />
                                                        </td>
                                                    </tr>
                                                     
                                                    <tr>
                                                        <td style="margin:0 auto;text-align:center;">
                                                            <asp:LinkButton ID="LinkButton2" runat="server" OnClick="AssignMultipleProfiles"
                                                                CssClass="btn btn-info" Text=">>" ToolTip="Assign All Profiles" Width="40px" />
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td style="margin:0 auto;text-align:center;">
                                                            <asp:LinkButton ID="LinkButton3" runat="server" OnClick="RemoveSelectedProfiles"
                                                               CssClass="btn btn-info" Text="<" ToolTip="Remove Selected Profile" Width="40px" />
                                                        </td>
                                                    </tr>
                                                     
                                                    <tr>
                                                        <td style="margin:0 auto;text-align:center;">
                                                            <asp:LinkButton ID="LinkButton4" runat="server" OnClick="RemoveMultipleProfiles"
                                                                CssClass="btn btn-info" Text="<<" ToolTip="Remove All Profiles" Width="40px" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                      </td>
                                                       <td>
                                                           <table  class="table table-condensed ">
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <div  class="lable label-info" style="padding:10px;color:#ffffff;">
                                                                    Assigned Profiles:</div></small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:ListBox ID="lstAssgnRoles" CssClass="form-control" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                SelectionMode="Multiple" Width="200px" Height="200px" style="overflow:auto"></asp:ListBox>
                                                        </td>
                                                    </tr>
                                                </table>
                                                      </td>
                                        </table>
                                            </div>
                                        </div>
                                              
                                          
                                              
                                             
                                         
                                    
                                </div>
                            </section>
                        </div>
                        <asp:Panel ID="pnlCreateGrp" runat="server" Style="display: none" DefaultButton="btnSaveGrp">
                            <div class="main-content" style="  min-height: 20px; min-width: 500px">

                                <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                     Create Group
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         
                                                        <asp:Button ID="btnSaveGrp" runat="server" OnClick="SaveGroup" Text="Save" CssClass="btn btn-success" />
                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                               
                                <section style="padding:10px;padding-bottom:30px;">
                                    <div class="divfieldset">
                                        <table width="100%">
                                            <tr>
                                                <td colspan="2">
                                                    <div id="dvError" runat="server">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    <small>
                                                        <label>
                                                            <em>*</em>GroupID:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox  CssClass="form-control" ID="txtGrpID" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    <small>
                                                        <label>
                                                            <em>*</em>Description:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox  CssClass="form-control" ID="txtDescr" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td  >
                                                    <small>
                                                        <label>
                                                            <em>*</em>Approval Limit:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td >
                                                    <asp:TextBox  CssClass="form-control" ID="txtApprLmt" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td  >
                                                    <small>
                                                        <label>
                                                            <em>*</em>Tolerance Amount:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td  >
                                                    <asp:TextBox  CssClass="form-control" ID="txtTolAmnt" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkCreateGrp" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popCreateGrp" runat="server" DropShadow="false" PopupControlID="pnlCreateGrp"
                            TargetControlID="lnkCreateGrp" CancelControlID="btnClose" BackgroundCssClass="modalBackground1">
                        </cc1:ModalPopupExtender>
                             </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
                </div>
                       </div>
                 </div>
             <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        </div>

        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
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
            function pageLoad() {

                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });
            }
        </script>
    </form>
</body>
</html>
