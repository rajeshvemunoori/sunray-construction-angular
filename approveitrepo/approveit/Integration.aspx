<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Integration.aspx.cs" Inherits="Integration" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc9" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt - Integration</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
   <%-- <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
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

        label em {
            font-weight: bold;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #cblExport label {
            margin-left: 10px;

            font-size:12px;
        }

        #chkTempStop {
            margin: 6px;
        }

        #rblIntOptions td {
            padding: 10px;
        }

        .synclink {
            cursor: pointer;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
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
        <!--header-->
        <uc2:top ID="top1" runat="server" />
 <!--header-->
            <!-- Sidebar -->
            <%if (Convert.ToInt32(Session["OrgID"]) != 0)
              {%>
            
        <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc9:leftmenu ID="leftmenu" runat="server" />
        </div>
            <%
                      }
              else
              {%>
            <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
            <%} %>
            <!-- Sidebar End -->
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="main-section grid_7" style="padding-top: 0px; margin-top:70px;">
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
                        <div class="main-content grid_4 alpha" style="">

                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title">Integration</div>
                                </div>

                                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                      <div class="pull-right">
                                       <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success"
                                                OnClick="btnSave_Click"></asp:Button>
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                          </div>
                                    </div>
                            </div>
 
                            <section class="container_6 clearfix">
                                <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                    <div class="grid_4">
                                        <div class="divfieldset">
                                            <div class="row">
                                                
                                            <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10 mb20">
                                                <div id="dvError" runat="server" style="text-align: center; font-weight: bold"> </div>
                                            </div> 

                                             
                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Select Type: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                  <asp:DropDownList ID="ddlTypes" runat="server" class="selectpicker form-control"   data-live-search="true"  OnSelectedIndexChanged="SelectedTypeChanged"
                                                            AutoPostBack="true">
                                                        </asp:DropDownList>
                                                        <asp:HiddenField ID="hdnChangesSaved" runat="server" />                                                                 
                                                                 </div>     
                                                 </div>
                                                 
                                                <div class="clearfix"></div>
                                                
                                                        <div id="dvQuickBooks" style="display: none;" runat="server">

                                                           
                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Company Id:</label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                   <asp:TextBox ID="txtQBCompanyId" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdnIntgrID" runat="server" />                                                                
                                                                 </div>     
                                                                </div>

                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Consumer Key: </label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                   <asp:TextBox ID="txtQBConsumerKey" runat="server" CssClass="form-control" ></asp:TextBox>                                                                
                                                                 </div>     
                                                             </div>
                                                               

                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Consumer Secret : </label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 <asp:TextBox ID="txtQBConsumerSecret" runat="server" CssClass="form-control" ></asp:TextBox>                                                                   
                                                                 </div>     
                                                         </div>
                                                                
                                                                 <div class="clearfix"></div>

                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode" > <em>*</em>Access Token:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:TextBox ID="txtQBAccessToken" runat="server" CssClass="form-control"></asp:TextBox>                                                                  
                                                                 </div>     
                                                               </div>
                                                               
                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Access Token Secret: </label>
                                                                 </div>
                                                             <div class="col-sm-7">       
                                                                   <asp:TextBox ID="txtQBAccessTokenSecret" runat="server" CssClass="form-control"></asp:TextBox>                                                            
                                                                 </div>     
                                                                </div>
                                                                
                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">   <em>*</em>Access Token Secret: </label>
                                                                 </div>
                                                             <div class="col-sm-7">    
                                                                   <asp:TextBox ID="txtQBAppToken" runat="server" CssClass="form-control"></asp:TextBox>                                                               
                                                                 </div>     
                                                                 </div> 
                                                        </div>
                                                    
                                                <div class="clearfix"></div>
                                                        <div id="dvXero" style="display: none;" runat="server">

                                                            
                                                               

                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><em>*</em>Consumer Key: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                  <asp:TextBox ID="txtXeroConsumerKey" runat="server" CssClass="form-control"></asp:TextBox>                                                                 
                                                                 </div>     
                                                             </div>
                                                               
                                                                
                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Consumer Secret:</label>
                                                                 </div>
                                                             <div class="col-sm-7">        
                                                                 <asp:TextBox ID="txtXeroConsumerSecret" runat="server" CssClass="form-control"></asp:TextBox>                                                           
                                                                 </div>     
                                                            </div>
                                                              
                                                                 
                                                          
                                                        </div>
                                                  
                                                        <div id="dvMicroDynamics" style="display: none;" runat="server">
                                                        </div>

                                                 <div class="clearfix"></div>


                                                  <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10 mb20">
                                                        <asp:Button ID="lnkTestConn" runat="server" Text="Test Connection" CssClass="btn btn-info btn-sm pull-right" OnClick="lnkTestConn_Click" />
                                                  </div>
                                               

                                                <div class="clearfix"></div>
                                                 <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10 mb20 text-center">
                                                     <div id="dvConnMsg" runat="server"></div>
                                                  </div>


                                                 <div class="clearfix"></div>
                                                 <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10 mb20  ">
                                                   <label style="font-size:14px;">
                                                            <asp:CheckBox ID="chkTempStop" runat="server" Text="Send Expenses and PO's to QuickBooks" TextAlign="Right" /></label>
                                                  </div>
                                               
                                                
                                                      <div id="dvOptions" runat="server" style="display: none;padding:20px;">
                                                          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 reset-row">
                                                                <div class="block-title">Integrate the following:</div>

                                                          </div>

                                                           <div class="clearfix"></div>


                                                          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                               <asp:CheckBoxList ID="cblExport" runat="server" RepeatDirection="Horizontal" RepeatColumns="2"
                                                                            Width="100%" onclick="showIntOptions(this);">
                                                                        </asp:CheckBoxList>
                                                              </div>


                                                            <div id="dvAccntOptions" runat="server">
                                                          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                               <div id="dvAccntQtn" runat="server">
                                                                                                    <%--How do you wish to maintain your company account numbers?--%>
                                                                          </div>

                                                              </div>


                                                          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero" style="font-size:12px;">
                                                                <asp:RadioButtonList ID="rblIntOptions" runat="server" RepeatDirection="Horizontal" Width="300px" onclick="displayMsg(this);"></asp:RadioButtonList>
                                                              </div>
                                                            </div>
                                                            <div class="clearfix"></div>

                                                              <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-zero" style="font-size:12px;">
                                                                   <div id="dvMsgByOption" runat="server" style="display: inline-flex;"></div>
                                                                  </div>
                                                           
                                                        </div>
                                                    
                                                 
                                               
                                                </div>
                                        </div>
                                    
                                </asp:Panel>
                                <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                              Alert  </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                          <asp:Button ID="btnYes" runat="server" OnClick="btnYes_Click" Text="Yes" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                        
                                        <section>
                                            <div style="padding: 5px;">
                                                <div class="divfieldset alert alert-danger">
                                                    You have changes to be saved. Do you want to save now?
                                                            <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                    TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlSyncConf" runat="server" DefaultButton="btnYes" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                                Alert  </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                       <asp:Button ID="btnYesSyncConf" runat="server" OnClick="btnYesSyncConf_Click" Text="Yes" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnNoSyncConf" runat="server" OnClick="btnNoSyncConf_Click" Text="No" CssClass="btn btn-danger" />
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                      
                                        <section>
                                            <div style="padding: 5px;">
                                                <div class="divfieldset">
                                                    <br />
                                                    <small>
                                                        <label class="alert alert-danger">
                                                            <div id="dvSyncConfMsg" runat="server"></div>
                                                        </label>
                                                    </small>
                                                    <br />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkSyncConf" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popSyncConf" runat="server" DropShadow="false" PopupControlID="pnlSyncConf"
                                    TargetControlID="lnkSyncConf" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
            <!-- Main Section End -->
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        
        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
            <script src="latestdesign/js/bootstrap-select.min.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
       <%-- <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script>
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function DoOnAjaxPostback() {
                //$(function () {
                //    $("#ddlTypes").ufd({ log: true });
                //});
                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });

            }

             

            $(document).ready(function () {
                //$(function () {
                //    $("#ddlTypes").ufd({ log: true });
                //});
            });

            function refreshExp() {
                $(".btnRefresh").click();
            }

            function showIntOptions(obj) {
                $11('hdnChangesSaved').value = "1";
                var inputList = obj.getElementsByTagName('input');
                var labelList = obj.getElementsByTagName('label');
                for (var i = 0; i < inputList.length; i++) {
                    if (inputList[i].checked) {
                        if (labelList[i].innerHTML.toUpperCase() == "ACCOUNTS") {
                            //$11('rblIntOptions').style.display = "block";
                            $11('dvAccntOptions').style.display = "block";
                        }
                        else {
                            $11('dvAccntOptions').style.display = "none";
                        }
                    }
                    else {
                        $11('dvAccntOptions').style.display = "none";
                    }
                }
            }

            function displayMsg(obj) {
                $11('hdnChangesSaved').value = "1";
                for (var i = 0; i < obj.rows.length; ++i) {
                    if (obj.rows[i].cells[0].firstChild.checked)
                        $11('dvMsgByOption').innerHTML = "<span class='infoicon'><i class='fa fa-info-circle' aria-hidden='true'></i> &nbsp;</span><small><label> Using this option we will load all your account numbers to be accessed by every department for their expenses or purchases.</small></label>";
                    else
                        $11('dvMsgByOption').innerHTML = "<span class='infoicon'><i class='fa fa-info-circle' aria-hidden='true'></i> </span>&nbsp;<small><label> By using this option you will be allowed to assign all your account numbers to different departments of your company in <a onclick='confirmChanges(1);' class='synclink'>Sync Data</a> screen.</small></label>";
                }
            }

            //Toggle message if selected QB offline/online
            function showOffLineMessage(obj) {
                for (var i = 0; i < obj.rows.length; ++i) {
                    if (obj.rows[i].cells[0].firstChild.checked)
                        $11('dvQBOffLineMsg').innerHTML = "<span class='infoicon'><i class='fa fa-info-circle' aria-hidden='true'></i></span> &nbsp;<small><label> If offline, data integration is done with desktop version of QuickBooks without internet connection.</small></label>";
                    else
                        $11('dvQBOffLineMsg').innerHTML = "<span class='infoicon'><i class='fa fa-info-circle' aria-hidden='true'></i></span> &nbsp;<small><label> If online, data integration is done with web version of QuickBooks <b>only</b> with internet connection.</small></label>";
                }
            }
            //Toggle message if selected QB offline/online

            function confirmChanges(type) {
                if (type == 1) {
                    if ($11('hdnChangesSaved').value == "1")
                        $find("popAlert").show();
                    else if ($11('hdnChangesSaved').value == "0") {
                        showProgress();
                        window.location.href = "SyncAcc.aspx";
                    }
                }
                else if (type == 0) {
                    showProgress();
                    window.location.href = "SyncAcc.aspx";
                }
            }
        </script>
            </div>
            </div>
        </div>
        
    </form>
</body>
</html>
