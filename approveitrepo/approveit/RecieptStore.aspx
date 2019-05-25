<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RecieptStore.aspx.cs" Inherits="RecieptStore" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
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
    <title>ApproveIt - Reciept Store</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
     <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
     <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <<%--link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .popover-content {
            width:200px;
        }
        .modalBackground3 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .markItUp {
            width: 300px;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            color: #555555;
            text-align:left;
        }

        .lnk {
            color: White;
        }

        #gvAttchmntsjEsCoOl_headerDiv, #gvRctStorejEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th, #gvRctStorejEsCoOl_headerDiv div table tbody tr th, #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
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

        #gvAttchmnts tbody tr td, #gvRctStore tbody tr td, #gvDrafts tbody tr td {
            height: 30px;
                line-height:27px;
           border:0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
             font-size:12px !important;
        }

        #gvAttchmntsjEsCoOl_mainDiv, #gvRctStorejEsCoOl_mainDiv, #gvDraftsjEsCoOl_mainDiv {
            width: 500px;
            height: 200px;
            overflow: hidden;
            margin:0 auto;
        }

        #gvRctStore TR TD, #gvRctStore TR TH, #gvRctStore TR TH div, #gvRctStore TR TD div, #gvAttchmnts TR TD, #gvAttchmnts TR TH, #gvAttchmnts TR TH div, #gvAttchmnts TR TD div,
        #gvDrafts TR TD, #gvDrafts TR TH, #gvDrafts TR TH div, #gvDrafts TR TD div {
            overflow: visible;
        }

        /*Calendar Control CSS*/
        .cal_Theme1 .ajax__calendar_container {
            background-color: #DEF1F4;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_header {
            background-color: #ffffff;
            margin-bottom: 4px;
        }

        .cal_Theme1 .ajax__calendar_title,
        .cal_Theme1 .ajax__calendar_next,
        .cal_Theme1 .ajax__calendar_prev {
            color: #004080;
            padding-top: 3px;
        }

        .cal_Theme1 .ajax__calendar_body {
            background-color: #ffffff;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_dayname {
            text-align: center;
            font-weight: bold;
            margin-bottom: 4px;
            margin-top: 2px;
            color: #004080;
        }

        .cal_Theme1 .ajax__calendar_day {
            color: #004080;
            text-align: center;
        }

        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_day,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_month,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_year,
        .cal_Theme1 .ajax__calendar_active {
            color: #004080;
            font-weight: bold;
            background-color: #DEF1F4;
        }

        .cal_Theme1 .ajax__calendar_today {
            font-weight: bold;
        }

        .cal_Theme1 .ajax__calendar_other,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_today,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_title {
            color: #bbbbbb;
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
                //$(".date").datepicker();
                //
            }
        </script>
        <!--header-->
        <uc2:top ID="top1" runat="server" />
 <!--header-->

      
 <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
           <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="main-section grid_7">
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
                <div class="main-content grid_4 alpha" style="margin-top:70px">
                    <div class="page-title">  <span class="font-awesome-icon-block"><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>Reciept Store</div>
                     <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="pull-right btn btn-warning" OnClick="ReloadData" />
                     
                    <section>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:AsyncPostBackTrigger ControlID="gvRctStore" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="divfieldset">
                                    <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes " Style='display: none' /> 
                            <div class=" ">                   
                                                     <%if (Convert.ToInt32(Session["ReqCnt"]) > 0)
                                          { %>
                                       
                                <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                    <div class="col-sm-5 padd-zero">
                                     <label class="form-label label_setting" for="orgcode"> Select Type:</label>
                                         </div>                                    
                                    <div class="col-sm-7 padd-zero">
                                         <asp:DropDownList ID="ddlExpType" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                AutoPostBack="True" OnSelectedIndexChanged="rblExpType_SelectedIndexChanged" class="selectpicker form-control" data-show-subtext="true" data-live-search="true"  >
                                                            </asp:DropDownList>
                                                            <asp:HiddenField ID="hdnExpProcessType" runat="server" />
                                    </div>
                                    </div>
                                 <div class="clearfix"></div>
                                         <div id="dvSearchError">&nbsp;</div>
                                         <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                             <div class="col-sm-5 padd-zero">
                                     <label class="form-label label_setting" for="orgcode"> From:</label>
                                         </div>                                    
                                    <div class="col-sm-7 padd-zero">
                                          <div class="input-group date" data-date-format="dd.mm.yyyy"  style="z-index:0"  >
                                                    <asp:TextBox ID="txtFrom" runat="server"   class="form-control"></asp:TextBox>
                                                            <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                                 </div>
                                             </div>
                                               </div> 
                                
                                 <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                             <div class="col-sm-2 padd-zero">
                                     <label class="form-label label_setting" for="orgcode"> To :</label>
                                         </div>                                    
                                    <div class="col-sm-7 padd-zero">
                                           <div class="input-group date" data-date-format="dd.mm.yyyy"  style="z-index:0" >
                                                    <asp:TextBox ID="txtTo" runat="server" Width="100px" class="date"  CssClass="form-control"></asp:TextBox>
                                                            
                                                                 <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                                 </div> 
                                        </div>
                                     </div>   
                                  <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                  <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="btn btn-success" OnClick="btnGo_Click" />
                                      </div>
                                                 <div class="clearfix"></div>     
                                         <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                              <%if (Session["Cnt"] == "1")
                                                  { %>
                                             <div class="col-sm-5 padd-zero">
                                     <label class="form-label label_setting" for="orgcode"> Select RequestID:</label>
                                         </div>                                    
                                    <div class="col-sm-7 padd-zero">
                                         <asp:DropDownList ID="ddlExpenseID" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlExpenseID_SelectedIndexChanged" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                            </asp:DropDownList>
                                        </div>
                                            
                                        
                                        
                                               
                                                 
                                                <%}
                                                  }
                                          else
                                          { %>
                                                <span id="newBtn" runat="server">
                                                    <input type="button" value="New Expense" class="buttonnew-blue btn btn-success" onclick="window.location.href = 'NewExpense.aspx'; showProgress()" /></span>
                                                <%} %>
                                            </div>

                                        
                                       <div class="clearfix"></div>
                                      <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  " style="padding:0px;">
                                          <div class="form-group   has-feedback"  >       
                                              <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server"   placeholder="Type to search expenses.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                                
                                            </td>
                                      </div>
                                         
                                     
                                    <isx:CoolGridView AllowPaging="false" ID="gvRctStore" runat="server" AutoGenerateColumns="false"
                                        Width="100%"   ShowHeader="true" OnRowDataBound="gvRctStore_RowDataBound">
                                        <Columns>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    <asp:LinkButton ID="lnkRequestID" runat="server"
                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:Label ID="lblReqId" runat="server"></asp:Label></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    <asp:LinkButton ID="lnkExpenseItem" runat="server"
                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:Label ID="lblExpItem" runat="server"></asp:Label></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    <asp:LinkButton ID="lnkDate" runat="server"
                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:Label ID="lblExpDate" runat="server"></asp:Label></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    <asp:LinkButton ID="lnkActAmount" runat="server"
                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    Status
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField  >
                                                <HeaderTemplate>
                                                    Action
                                                </HeaderTemplate>
                                                <ItemTemplate>
                                                    <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                        ToolTip="Click to view attachments"></asp:LinkButton>
                                                    <asp:HiddenField ID="hdStatus" runat="server" Value='<%#Eval("Status")%>' />
                                                    <asp:HiddenField ID="hdnReq" runat="server" Value='<%# Eval("reqId")%>' />
                                                    <asp:HiddenField ID="hdnSeq" runat="server" Value='<%# Eval("expLineNo")%>' />
                                                    <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%# Eval("statusId")%>' />
                                                    <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%# Eval("attCnt")%>' />
                                                    <asp:HiddenField ID="hdnExpItem" runat="server" Value='<%# Eval("expItem")%>' />
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                        </Columns>
                                        <EmptyDataTemplate>
                                           <div style="width: 500px">
                                                <label>
                                                    No Receipts to display with in the date range.</label>
                                            </div>
                                        </EmptyDataTemplate>
                                    </isx:CoolGridView>
                                    <asp:Panel ID="pnlAtt" runat="server" CssClass="modalPopup" Style="display: none">
                                        <div class="main-content">
                                            <div class="pop-page-title">
                                                 <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">Attachments   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                          <asp:Button ID="btnUpload" OnClick="UploadMoreFiles" runat="server" Text="Upload"  CssClass="btn btn-success" />
                                                            <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="btn btn-primary" />
                                                        </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                               <section style="height: 455px">
                                                <div class="divfieldset" style="  width: 675px">

                                                    <div id="dvAtt" runat="server">
                                                    </div>
                                                    <table>
                                                        <tr>
                                                            <div id="dvMoreUpload" runat="server">
                                                                
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero" style="display:inline-flex">   
                                                            <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                        <asp:HiddenField ID="hdnRctFileName" runat="server" />
                                                        <cc1:AsyncFileUpload ID="fUpdMore" CompleteBackColor="White" runat="server"
                                                            UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber"
                                                            OnUploadedComplete="fileUploadComplete" OnClientUploadComplete="showConfirmation"  CssClass="form-control"  /> 
                                                             <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB"><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                          </div>
                                                    </div>
                                                        <br />
                                                        <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                        <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                        </asp:Label>
                                                        <br />
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="buttonnew-blue" OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                                </td>
                                                                <td>&nbsp;
                                                                </td>
                                                                <td>
                                                                    <asp:Button ID="btnShowDraft" runat="server" OnClick="DisplayDrafts" Text="Get from Drafts" CssClass="btn btn-info" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                            <td>
                                                <div  >
                                                                <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false"  
                                                                     AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                    OnRowDataBound="gvAttchmnts_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Attachment">
                                                                            <ItemTemplate>
                                                                                <asp:ImageButton runat="server" ID="imgAttchmnt"   OnClick="DownLdAtt"></asp:ImageButton>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Remove">
                                                                            <ItemTemplate>
                                                                                <asp:CheckBox ID="chkDelAtt" runat="server" onchange="showDeleteButton();" />
                                                                                <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                       <div style="width: 500px">
                                                                            <label>
                                                                                No Data to display</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                    </div>
                                                            </td>
                                                            <td>
                                                                <div id="LargeImageContainerDiv" style="  float: right; text-align: center; vertical-align: middle">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                        TargetControlID="lnkAtt" BackgroundCssClass="modalBackground" CancelControlID="btnAttClose">
                                    </cc1:ModalPopupExtender>
                                    <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
                                        <div class="main-content" id="Div10" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                            
                                            <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">Alert   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                          <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="btn btn-success" />
                                                            <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="btn btn-danger"
                                                                OnClick="RetainAttDialog" />

                                                    </div>
                                                          </div>
                                                     </div> 
                                            </div>
 
                                            <section style="padding:27px">
                                                <small class="alert alert-danger">
                                                    <label>Are you sure you want to delete this Attachment?</label></small>
                                                 
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                        TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground3">
                                    </cc1:ModalPopupExtender>
                                    <asp:Panel ID="pnlDraftAtt" runat="server" Style="display: none">
                                        <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 300px;">
                                           <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">Drafts   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnDftOk" runat="server" OnClick="SelectDrafts" Text="Ok" CssClass="btn btn-success" />
                                                            <asp:Button ID="btnDraftsClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                     </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                             
                                            <section>
                                                <div id="dvDrftError" runat="server">
                                                </div>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <isx:CoolGridView ID="gvDrafts" runat="server" AllowPaging="false" Width="580px"
                                                                Height="300px" AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                                ShowFooter="true" OnRowDataBound="gvDrafts_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="Attachment">
                                                                        <ItemTemplate>
                                                                            <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                            <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                            <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName")%>' />
                                                                            <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdDrafts" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("compCode")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField>
                                                                        <HeaderTemplate>
                                                                            <asp:CheckBox ID="checkAll" runat="server" CssClass="chkHeader" />
                                                                            Select All
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkgvDft" runat="server" CssClass="chkItem" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 500px">
                                                                        <label>
                                                                            No data to display</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </td>
                                                        <td>
                                                            <%--<div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                            --%></td>
                                                    </tr>
                                                </table>
                                                <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkDraftAtt" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popDraftsAtt" runat="server" DropShadow="false" PopupControlID="pnlDraftAtt"
                                        TargetControlID="lnkDraftAtt" BackgroundCssClass="modalBackground3" CancelControlID="btnDraftsClose">
                                    </cc1:ModalPopupExtender>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                        <br />
                        <br />
                    </section>
                </div>
            </section>
            <!-- Main Section End -->
        </div>
            </div>
     </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/bootstrap-select.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
         <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
        <script>
            $('.input-group.date').datepicker({ 
             
                format: "mm/dd/yyyy",
                autoclose: true,
                showonfocus: true,
                todayhighlight: true,

            });

            $(function () {
                $('[data-toggle="popover"]').popover()
            })
    </script>
        <%--<script src="js/global.js"></script>--%>
       <%-- <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
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

            function DoOnAjaxPostback() {

                $('.selectpicker').selectpicker({
                            livesearch: true,
                            showtick: true,
                            width: 'auto'
                        });
                        $('.date').datepicker({
                            format: "mm/dd/yyyy",
                            autoclose: true,
                            showonfocus: true,
                            todayhighlight: true,
                        }).on('changedate', function (ev) {
                            $(this).datepicker('hide');
                        });

                        $(function () {
                            $('[data-toggle="popover"]').popover()
                        })
                //$(function () {
                //    $("#ddlExpenseID").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlExpType").ufd({ log: true });
                //});
                Filter(document.getElementById('txtKeywordSearch'));
            }

            function refreshAlarms() {
                $(".btnRefresh").click();
            }

            //$(document).ready(function () {
            //    $(function () {
            //        $("#ddlExpenseID").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlExpType").ufd({ log: true });
            //    });
            //});

            //function pageLoad() {
            //    $(function () {
            //        $("#ddlExpenseID").ufd({ log: true });
            //    });
            //}

            function $1(id) {
                return document.getElementById(id);
            }

            function ShowBiggerImage(obj) {
                $1("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
            }

            function ShowDefaultImage(obj) {
                $1("LargeImageContainerDiv").innerHTML = "";
            }

            function move_Area(event) {
                event = event || window.event;
                LargeImageContainerDiv.style.left = event.clientX + document.body.scrollLeft + 10;
                LargeImageContainerDiv.style.top = event.clientY + document.body.scrollTop + 10;
            }

            function ShowBiggerImageDrft(obj) {
                $1("LargeImageContainerDivDrft").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
            }

            function ShowDefaultImageDrft(obj) {
                $1("LargeImageContainerDivDrft").innerHTML = "";
            }

            function move_Area1(event) {
                event = event || window.event;
                LargeImageContainerDivDrft.style.left = event.clientX + document.body.scrollLeft + 10;
                LargeImageContainerDivDrft.style.top = event.clientY + document.body.scrollTop + 10;
            }

            function CheckAttDel() {
                var total = 0;
                var grid = $1('<%=gvAttchmnts.ClientID %>');
                for (var i = 2; i <= grid.rows.length + 1; i++) {
                    if (i <= 9) {
                        i = '0' + i;
                    }
                    if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                        total++;
                    }
                }
                if (parseInt(total) == parseInt(grid.rows.length)) {
                    $1('dvAtt').innerHTML = "You cannot delete all the attachments.";
                    $1('dvAtt').style.color = "Red";
                    return false;
                }
            }

            function showDeleteButton() {
                $1('dvAtt').innerHTML = '';
                var total = 0;
                var grid = $1('<%=gvAttchmnts.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                    total++;
                }
            }
            if (parseInt(total) > 0)
                $1("btnDeleteSelected").style.display = "block";
            else
                $1("btnDeleteSelected").style.display = "none";
        }

        function showConfirmation(sender, args) {
            document.getElementById('lblFileName').innerHTML = args.get_fileName();
        }

        //Filter receipt store grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvRctStore');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.focus();
        }
        //Filter receipt store grid with text provided in search box

        function AjaxEndRequestHandler(sender, args) {
            var p = sender._updatePanelClientIDs;
            if (p != null)
                for (var j = 0; j < p.length; j++) {
                    var scripts = $get(p[j]).getElementsByTagName("script");
                    // .text is necessary for IE.
                    for (var i = 0; i < scripts.length; i++) {
                        try {
                            eval(scripts[i].innerHTML || scripts[i].text);
                        } catch (e2) { }
                    }
                }
        }

        try { Sys.WebForms.PageRequestManager.getInstance().add_endRequest(AjaxEndRequestHandler); }
        catch (e) { }

        </script>
          <script>
              $(function () {
                  $('[data-toggle="popover"]').popover()
              })
</script>
    </form>
</body>
</html>
