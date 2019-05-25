<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EditOrganization.aspx.cs"
    EnableEventValidation="false" Inherits="EditOrganization" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>

<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
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
    <title>ApproveIt-Edit Organization</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
     <link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
   <%-- <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 135px;
            }

        .lbl {
            text-align: right;
        }

        .uploader input {
            width: 200px;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            border-radius: 3px 3px;
            font-family: Verdana,Arial,sans-serif;
            font-size: 0.8em;
            border: 1px solid #aaaaaa;
        }

        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            border-radius: 3px;
            border: 1px solid #aaaaaa;
        }
        .popover-content {

            min-width:250px;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
                          <!-- Sidebar -->
                  

 <div class="row menu-bg">
	                    
	        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
                  <uc8:leftmenu ID="leftmenu" runat="server" />
                </div>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;margin:0px;">
        	<div class=" container-fluid  cd-main-content"  >

                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="../images/Loaders/image_855859.gif" />
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
                                <div class="">
                                    <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 70px;">
                                            <div class="page-title">ORGANIZATION INFO</div>

                                            <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                                <div id="dvError" runat="server" style="color: Red;font-size:17px !important;text-align:center;margin-bottom:20px; ">
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                                                    <div class="block-title">ORGANIZATION DETAILS</div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-12  col-lg-12  " style="margin-top: 10px;padding:0px;">

                                                    <div class="align-center">
                                                        <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Organization Name</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtOrganizationName" runat="server" class="form-control"></asp:TextBox>
                                                            <asp:TextBox ID="txtAdminName" runat="server" Visible="false" class="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Email</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                            <asp:TextBox ID="txtAdminEmail" runat="server" class="form-control"></asp:TextBox>
                                                            <asp:HiddenField ID="hdnManager" runat="server" />
                                                                 </div>

                                                        </div>
                                                      
                                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Phone</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtPhone" runat="server" class="form-control"></asp:TextBox>
                                                                </div>
                                                        </div>
                                                         <div class="clearfix"></div> 

                                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="companyname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Address1</label>
                                                           </div>
                                                            <div class="col-sm-7">
                                                                 <textarea id="txtAddr1" runat="server" class="form-control" rows="2"></textarea>
                                                                </div>
                                                        </div>
                                                         
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="companycode">Address2</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                             <textarea id="txtAddr2" runat="server" class="form-control" rows="2"></textarea>
                                                                </div>
                                                        </div>
                                                        
                                                          <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;City</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtCities" runat="server" onchange="javascript:splitCityZip(this);" class="form-control"></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem"
                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                                </div>
                                                        </div>
                                                         <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="selectWrapper">
                                                                <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="addr1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Country</label><br />
                                                               </div>
                                                                <div class="col-sm-7">
                                                                     <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
                                                                      name="ddlCountry" ClientIDMode="Static">
                                                                     </asp:DropDownList>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr2"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;State</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                            <asp:DropDownList ID="ddlRgnCode" runat="server" DataTextField="state" DataValueField="regionCode"
                                                                class="selectpicker form-control" data-show-subtext="true" data-live-search="true" name="ddlRgnCode" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true">
                                                            </asp:DropDownList>
                                                                </div>
                                                        </div>
                                                        

                                                      
                                                       
                                                       
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr2"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Zip</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtZipCode" runat="server" class="form-control"></asp:TextBox>
                                                                </div>
                                                        </div>
                                                          <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="selectWrapper">
                                                                <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="country"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Industry</label><br />
                                                                    </div>
                                                                <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlIndType" runat="server" DataTextField="Description" DataValueField="Description"
                                                                    class="selectpicker form-control" data-show-subtext="true" data-live-search="true" name="ddlIndType" ClientIDMode="Static">
                                                                </asp:DropDownList>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                      
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr2">Organization Code</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtOrgcode" runat="server" class="form-control"></asp:TextBox>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="selectWrapper">
                                                                <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="country"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Measures</label> 
                                                                    </div>
                                                                <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlMeasure" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                    class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                </asp:DropDownList>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                           <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="selectWrapper">
                                                                <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="state"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Currency</label><br />
                                                                    </div>
                                                                <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                    class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                </asp:DropDownList>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                       

                                                       
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="addr2">Url</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                            <asp:TextBox ID="txtUrl" runat="server" class="form-control"></asp:TextBox>
                                                            <asp:HiddenField ID="hdnAPCount" runat="server" />
                                                            <asp:HiddenField ID="hdnMgrCount" runat="server" />
                                                            <asp:HiddenField ID="hdnLmtAmnt1" runat="server" />
                                                            <asp:HiddenField ID="hdnVarAP" runat="server" />
                                                            <asp:HiddenField ID="hdnVarMgr" runat="server" />
                                                            <asp:HiddenField ID="hdnLogoCnt" runat="server" />
                                                            <asp:HiddenField ID="hdnIsActive" runat="server" />
                                                                </div>
                                                        </div>
                                                         
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label for="companylogo" class="form-label label_setting" style="display:initial">Company Logo &nbsp;<a href="#" data-toggle="popover" data-trigger="hover" data-content="This email will be your login email as admin user for this organization and company."><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a></label>
                                                                
                                                            </div>
                                                            <div class="col-sm-7"> 
                                                                 <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server" UploaderStyle="Traditional"
                                                                CssClass="uploader form-control" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnClientUploadComplete="showConfirmation"
                                                                OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" Width="200px" />
                                                               
                                                            
                                                            <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                 <img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                            </asp:Label>
                                                            <asp:Label ID="lblFileName" runat="server" ></asp:Label>
                                                          
                                                        <div id="divLogoatt" runat="server">
                                                        </div>
                                                                 </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                                                    <div class="block-title">ADDITIONAL ROLES DETAILS</div>
                                                </div>

                                                <div class="col-xs-12 col-sm-12 col-md-12   col-lg-12 ">
                                                    <div class="align-center">
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <a href="#" data-toggle="popover" data-trigger="hover" data-content="This feature allows you to Approve/Reject requests placed by you and your sub-ordinates."><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                            <label for="styled-checkbox-1" style="color: #434a4f">Small Business Self Approval</label>                                                           
                                                            <asp:CheckBox ID="chkSelfAppr" runat="server"  />
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="form-group padd-zero btn-lg col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div class="btn-group pull-right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" class="btn btn-success mr20" OnClick="btnSave_Click"></asp:Button> 
                                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" class="btn btn-warning" OnClick="ReloadData" />
                                                            </div>
                                                        </div>
                                                  
                                                <%--<div style="float: left; padding-left: 0.5em">
                                                    <a href="#" id="tooltip1">
                                                        <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                        <span><small>
                                                            <label>This feature allows you to Approve/Reject requests placed by you and your sub-ordinates.</label></small>
                                                        </span>
                                                    </a>
                                                </div>--%>
                                            </asp:Panel>
                                            <asp:Panel ID="pnlAtt_Appr" runat="server" Style="display: none">
                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                    <header>
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="width: 90%;">
                                                                    <h2 class="pophead">Logo</h2>
                                                                </td>
                                                                <td align="right" style="width: 10%">
                                                                    <asp:Button ID="btnAttClose_Appr" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <div style="padding: 20px;">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvLogo" runat="server">
                                                                        <asp:ImageButton runat="server" ID="imgDraft" Width="225px" Height="500px" OnClick="DownLoadLogo" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </asp:Panel>
                                            <asp:LinkButton ID="lnkAtt_Appr" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt_Appr"
                                                TargetControlID="lnkAtt_Appr" CancelControlID="btnAttClose_Appr">
                                            </cc1:ModalPopupExtender>
                                        </div>
                                    </div>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>
            
            <!-- Main Section End -->
         </div>
     
     </div>

        </div>
         
      

        <script src="../latestdesign/js/modernizr.js"></script>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%--<script type="text/javascript" src="../js/html5shiv.js"></script>--%>
        <%--<script src="../js/jquery.tools.min.js"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
      <%--  <script src="../js/jquery.ui.min.js"></script>--%>
        <%--<script src="../js/global.js"></script>--%>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
        <script src="../latestdesign/js/bootstrap-select.min.js"></script>

       <%-- <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        
        <script>

            //document.onmousedown = disableclick;
            //function disableclick(e) {
            //    if (e.button == 2) {
            //        alert("Right Click Disabled");
            //        return false;
            //    }
            //}

           function DoOnAjaxPostback() {

            $('.selectpicker').selectpicker({
                        liveSearch: true,
                        showTick: true,
                        width: 'auto'
                    });
                     

            //    $(function () {
            //        $("#ddlIndType").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlRgnCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCountry").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlMeasure").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCurrency").ufd({ log: true });
            //    });
             }

            //$(document).ready(function () {
            //    $(function () {
            //        $("#ddlIndType").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlRgnCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCountry").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlMeasure").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCurrency").ufd({ log: true });
            //    });
            //});



           function pageLoad() {

               $('.selectpicker').selectpicker({
                   liveSearch: true,
                   showTick: true,
                   width: 'auto'
               });

               $(function () {
                   $('[data-toggle="popover"]').popover()
               })

           }
            function showConfirmation(sender, args) {
                document.getElementById('lblFileName').innerHTML = args.get_fileName();
            }

            //Split City and Zip from City text field
            function splitCityZip(txt) {
                if (txt.value.indexOf("-") != -1) {
                    var arr = txt.value.split("-");
                    document.getElementById('txtZipCode').value = arr[1];
                }
                else
                    document.getElementById('txtZipCode').value = "";
            }
            //Split City and Zip from City text field
        </script>

        <script>
            $(function () {
                $('[data-toggle="popover"]').popover()
            })
</script>
        
    </form>
     <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer--> 
</body>
</html>
