<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Policydocs.aspx.cs" Inherits="Policydocs" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">

        (function () {

            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {

                document.createElement(html5elmeents[i]);

            }

        }

  )();

    </script>
    <title>ApproveIt - Policy Documents</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <!-- CSS reset -->
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <style>
        .modalBackground {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
            font-weight: normal;
        }

        #gvPolicyDocsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvPolicyDocsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                line-height:27px;
                color: white;
                text-align: center;
               font-family: "Open Sans", sans-serif;
                font-size:13px !important;
                font-weight: normal;
                border:0.5px solid rgba(0,0,0,0.1);
                padding:0px 5px;
            }

        #gvPolicyDocs tbody tr td {
            height: 30px;
                line-height:27px;
           border:0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
             font-size:12px !important;
        }

        #gvPolicyDocsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvPolicyDocs TR TD, #gvPolicyDocs TR TH, #gvPolicyDocs TR TH div, #gvPolicyDocs TR TD div {
            overflow: visible;
        }
    </style>
</head>
<body style="overflow-x: hidden;">s
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
        </cc1:ToolkitScriptManager>
        <div class="cd-main-content">
            <!-- Sidebar -->
          
 <div class="row ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
            <section class="grid_7" style="padding-top: 0px;">
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
                        <asp:PostBackTrigger ControlID="btnUpload" />
                        <asp:PostBackTrigger ControlID="btnSaveEdit" />
                    </Triggers>
                    <ContentTemplate>
                         <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
                    
 <div class="row " style="margin-top:50px;">
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
               <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Policy Documents</div>
       </div>
 </div>   
                 <div class="row " >
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"  ">
           <div class="pull-right">
                                          <asp:Button ID="btnUploadPDocs" runat="server" Text="Upload New" CssClass="btn btn-info" OnClick="UploadNewDocs" />
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="ReloadData" />
               </div>
       </div>
 </div>                                
          
                         
                            <section>
                                 <div style="margin-top:40px;" class="table-responsive" >
                                                    <table width="100%">
                                                    <tr>
                                                        <td>
                                <div id="dvinv" runat="server" visible="true">
                                    <div class="grid_6" style="margin-left: 42px">
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <isx:CoolGridView ID="gvPolicyDocs" runat="server" ShowHeader="true" Height="300px"
                                            OnRowDataBound="gvPolicyDocs_RowDataBound" AutoGenerateColumns="false"
                                             GridLines="None">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sl#">
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:Label ID="lblSl" runat="server"></asp:Label>
                                                            <asp:Label ID="lblPolicyID" Visible="false" Text='<%#Eval("PolicyID") %>' runat="server"></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Description" HeaderStyle-Width="250px" ItemStyle-Width="250px" ItemStyle-HorizontalAlign="Left">
                                                    <ItemTemplate>
                                                        <label><%#Eval("Description") %></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Document" HeaderStyle-Width="300px" ItemStyle-Width="300px" ItemStyle-HorizontalAlign="Left">
                                                    <ItemTemplate>
                                                        <label><%#Eval("FileName") %></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Action" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                    <ItemTemplate>
                                                        <a href='DownloadPolicy.aspx?pid=<%#Eval("PolicyID") %>'>
                                                            <img src="images/icons/attachment_blue_24x24.png" /></a>&nbsp;&nbsp;&nbsp;
                                                                <asp:LinkButton ID="lnkEdit" runat="server" Text="Edit" OnCommand="EditPolicy" ToolTip="Update Document"><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete Document" CommandArgument='<%#Eval("PolicyID") %>' Text="Delete" OnCommand="DeletePolicy"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <EmptyDataTemplate>
                                                <div style="width: 300px">
                                                    <label>
                                                        No Policy documents to display</label>
                                                </div>
                                            </EmptyDataTemplate>
                                        </isx:CoolGridView>
                                        <asp:HiddenField ID="hdnPID" runat="server" />
                                    </div>
                                </div>
                                                                    
                                                            </td>
                                                        </tr>
                                                            </table>
                                                            </div>
                                <asp:Panel ID="pnlUpload" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; width: 700px;">
                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Company Travel Guidelines/Policies
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         <asp:Button ID="Button1" runat="server" Text="Close" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                     
                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvMsg" runat="server" style="font-weight: bold">
                                                </div>
                                                <small>
                                                    <label>OrgName:</label></small>
                                                <b>
                                                    <asp:Label ID="lblOrg" runat="server"></asp:Label></b>
                                                &nbsp;&nbsp;&nbsp;&nbsp;<small>
                                                    <label>CompName:</label></small>
                                                <b>
                                                    <asp:Label ID="lblComp" runat="server"></asp:Label></b>
                                               
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-hover table-condensed">
                                                        <tr>
                                                            <td>
                                                                <small>
                                                                    <label>Sl#</label></small>
                                                            </td>
                                                            <td align="center">
                                                                <small>
                                                                    <label>File</label></small>
                                                            </td>
                                                            <td align="center">
                                                                <small>
                                                                    <label>Description</label></small>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top">1
                                                            </td>
                                                            <td>
                                                                <asp:FileUpload ID="fupd1" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDesc1"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top">2
                                                            </td>
                                                            <td>
                                                                <asp:FileUpload ID="fupd2" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDesc2" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top">3
                                                            </td>
                                                            <td>
                                                                <asp:FileUpload ID="fupd3" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDesc3"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top">4
                                                            </td>
                                                            <td>
                                                                <asp:FileUpload ID="fupd4" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDesc4" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top">5
                                                            </td>
                                                            <td>
                                                                <asp:FileUpload ID="fupd5" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDesc5" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">
                                                                <div id="dvMore" runat="server" style="display: none">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td style="vertical-align: top">6
                                                                            </td>
                                                                            <td>
                                                                                <asp:FileUpload ID="fupd6" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtDesc6" CssClass="form-control"  runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="vertical-align: top">7
                                                                            </td>
                                                                            <td>
                                                                                <asp:FileUpload ID="fupd7" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtDesc7"  CssClass="form-control" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="vertical-align: top">8
                                                                            </td>
                                                                            <td>
                                                                                <asp:FileUpload ID="fupd8" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtDesc8" CssClass="form-control"  runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="vertical-align: top">9
                                                                            </td>
                                                                            <td>
                                                                                <asp:FileUpload ID="fupd9" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtDesc9" CssClass="form-control"  runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="vertical-align: top">10
                                                                            </td>
                                                                            <td>
                                                                                <asp:FileUpload ID="fupd10" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="txtDesc10" CssClass="form-control" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">
                                                                <asp:Button ID="btnMore" runat="server" Text="Add More" CssClass="btn btn-info" />
                                                                <asp:Button ID="btnUpload" runat="server" Text="Upload" CssClass="btn btn-info" OnClick="UploadFiles" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkUpd" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                    TargetControlID="lnkUpd" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlDelete" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Confirm Delete
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                          <asp:Button ID="Button2" runat="server" OnClick="DeleteConfirm" Text="Ok" CssClass="btn btn-info" />
                                                        <asp:Button ID="Button3" runat="server" Text="Cancel" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                     
                                        <section>
                                            <div class="divfieldset">
                                                <small>
                                                    <label>Are you sure you want to delete?</label></small>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkDel" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popDel" runat="server" DropShadow="false" PopupControlID="pnlDelete"
                                    TargetControlID="lnkDel" BackgroundCssClass="modalBackground" CancelControlID="btnDelClose">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlEditPolicy" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 700px;">
                                        
                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Company Travel Guidelines/Policies
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                      <asp:Button ID="btnSaveEdit" runat="server" OnClick="UpdatePolicy" Text="Save" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnCloseEdit" runat="server" Text="Close" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        
                                        <section>
                                            <div class="divfieldset" style="padding:15px;">
                                                

                                                <div class="row" >
                                                 
                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                                      <div id="dvMsgEdit" runat="server">
                                                                </div>
                                                </div>
                                              </div>
                                                 <div class="row ">
                                              <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">
			                                             File Name :     </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                  <asp:Label ID="lblFNameLnk"   CssClass="form-control" runat="server" ToolTip="Click to download"></asp:Label>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">Description    </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                 <asp:TextBox ID="txtEditDesc"  CssClass="form-control" runat="server"></asp:TextBox>
                                                         <asp:HiddenField ID="hdnDescr" runat="server" />
			                                      </div>
                                              </div>
                                              
	
                                         </div>
                                                <div class="row ">
                                             
                                             <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 "> 
                                                   <div id="DvUpPolicy" runat="server">
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">Replace Document    </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                 <asp:FileUpload CssClass="form-control" ID="fupdEdit" runat="server" />
                                                                
			                                      </div>
                                                       </div>
                                              </div>
                                              
	
                                         </div>
                                            
                                               
                                                </span>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkEdit" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popEdit" runat="server" DropShadow="false" PopupControlID="pnlEditPolicy"
                                    TargetControlID="lnkEdit" BackgroundCssClass="modalBackground" CancelControlID="btnCloseEdit">
                                </cc1:ModalPopupExtender>
                            </section>
                </div>
                             </div>
                        </div>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
            <!-- Main Section End -->
        </div>
            </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="js/Validation.js"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <%--<script src="js/global.js"></script>--%>
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

            });

            function refreshUsers() {
                $(".btnRefresh").click();
            }

            function validatePolicyUploads() {
                if (document.getElementById('fupd1').value == "" && document.getElementById('fupd2').value == "" && document.getElementById('fupd3').value == "" && document.getElementById('fupd4').value == "" && document.getElementById('fupd5').value == "") {
                    document.getElementById('dvMsg').style.color = "Red";
                    document.getElementById('dvMsg').innerHTML = "Please browse atleast one file and click Upload to upload filies or Click Add More to select more files.";
                    return false;
                }
            }

            function ShowMore() {
                if (document.getElementById('fupd1').value == "" || document.getElementById('fupd2').value == "" || document.getElementById('fupd3').value == "" || document.getElementById('fupd4').value == "" || document.getElementById('fupd5').value == "") {
                    document.getElementById('dvMsg').style.color = "Red";
                    document.getElementById('dvMsg').innerHTML = "Please select all the files and click Add More to select more files.";
                    return false;
                }
                else {
                    if (document.getElementById('dvMore').style.display == "block") {
                        document.getElementById('dvMore').style.display = "none";
                    }
                    else {
                        document.getElementById('dvMsg').innerHTML = '';
                        document.getElementById('dvMore').style.display = "block";
                        document.getElementById('btnMore').style.display = "none";
                    }
                    return false;
                }
            }
        </script>
    </form>
</body>
</html>
