<%@ Page Language="C#" AutoEventWireup="true" CodeFile="NewExpense.aspx.cs" Inherits="NewExpense" %>

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
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt-New Expense</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
   <%-- <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="Autosuggest/jquery-ui.css" rel="stylesheet" type="text/css" />
     <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
       <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <script src="latestdesign/js/modernizr.js"></script>
    
    <script src="js/jquery.tools.min.js"></script>
    
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
     <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
       <script src="js/Validation.js" type="text/javascript"></script>
    <script src="latestdesign/js/main.js"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>
       

    <style>

         /*TOOLTIP CSS*/

        .tooltip {
    position: absolute;
    display: inline-block;
    
    opacity: 1 !important;
}

.tooltip .tooltiptext {
        visibility: hidden;
    width: 200px;
    background-color: #f7f7f7;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 11px 3px;
    position: absolute;
    z-index: 1;
    top: -19px;
    left: 110%;
    font-weight: bold;
    font-size: 13px;
     border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top:-5px;
    border-width: 9px;
    border-style: solid;
    border-color: transparent #f7f7f7 transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

 


        .request_id {
            color: #31383d;
            font-weight: bold;
            margin-top: 19px;
            font-size: 20px;
        }
        .error_message {
          font-size:20px;
          color:#bb0000;
          font-weight:bold;
          text-align:center;
          margin-bottom:30px;
        }
        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

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

        .modalBackground2 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 5000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        #gvAttchmntsjEsCoOl_headerDiv, #gvExpjEsCoOl_headerDiv, #gvCCjEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th, #gvExpjEsCoOl_headerDiv div table tbody tr th, #gvCCjEsCoOl_headerDiv div table tbody tr th,
            #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
                   height: 30px;
    line-height: 27px;
    color: white;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 13px !important;
    font-weight: normal;
    border: 0.5px solid rgba(0,0,0,0.1);
    padding: 0px 5px;
            }

        #gvAttchmnts tbody tr td, #gvExp tbody tr td, #gvCC tbody tr td, #gvDrafts tbody tr td {
           height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
        }

        #gvAttchmntsjEsCoOl_mainDiv, #gvExpjEsCoOl_mainDiv, #gvCCjEsCoOl_mainDiv, #gvDraftsjEsCoOl_mainDiv {
            width: 500px;
            height: 200px;
            overflow: hidden;
        }

        .budgfld {
            background-color: #CDCDCD;
        }

        .vendNum {
            font-size: 1.5em;
            font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold';
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
            font-size: 1em;
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

        #ChkSendToQB {
            margin: 6px;
        }
        #fch {
            /*font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;*/
            width: 97%;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

            #fch th {
                background-color: #3B6AA0;
                width: 25%;
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
            }

        #fc {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            width: 100%;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

            #fc td {
                width: 25%;
                border: 1px solid #E6E4E4;
                padding: 3px 7px 2px 7px;
                text-align: right;
            }

            #fc th {
                height: 30px;
                background-image: url('../img/th.png');
                background-repeat: no-repeat;
                color: white;
                text-shadow: #012b4d 2px 2px 2px;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1em;
            }

            #fc tr.alt td {
                color: #000;
            }
            /*Calendar Control CSS*/

            #fc .cal_Theme1 tr td {
                padding: 0px;
            }

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
            /*width:200px;*/
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
            padding: -10px;
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
<body style="overflow-x:hidden;">
    <form id="form" runat="server">
      
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
        </cc1:ToolkitScriptManager>
         <!--header-->
        <uc2:top ID="top1" runat="server" />
 <!--header-->

  <div class="row menu-bg">
	                    
	    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
           <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" ">
        	<div class=" container-fluid  cd-main-content"  >      
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
                        <%--<asp:PostBackTrigger ControlID="gvDrafts" />
                                        <asp:PostBackTrigger ControlID="gvAttchmnts" />--%>
                        <asp:PostBackTrigger ControlID="btnUpload" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <!-- Main Section -->
                 <div class="row " style="margin-top:70px;">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 0px;">
                                             <div > 
                           <div id="dvHeader" class="page-title">  <span class="font-awesome-icon-block"><i class="fa fa-plus" aria-hidden="true"></i></span><%if (Request.QueryString["sel"] == "2")
                              { %>
                                    Create Pre-Approval Expense
                                    <%}
                              else
                              { %>
                                    Create New Expense
                                    <%} %>
                        </div></div>
                        <div id="dvinv" visible="true">
                            <asp:Panel ID="p" runat="server" DefaultButton="btnAddExpense">
                                <div class="divfieldset">
                                    <div class="row">
                                        <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                        <div id="dvError" runat="server" class="error_message">
                                            </div>
                                                </div>

                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display:none;">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Request ID:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 
                                                                 <span class="request_id"><%=Session["NewReqID"]%></span>
                                                                 </div>

                                    </div>
                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Expense Type:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                   <asp:DropDownList ID="ddlType" runat="server" onchange="rblSelectedValue('new');"
                                                                    CssClass="form-control selectpicker" data-live-search="true">
                                                                </asp:DropDownList>
                                                <asp:HiddenField ID="hdnExpProcessType" runat="server" />
                                                                 </div>

                                    </div>
                                       
                                        
                                        <div class=" padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Start Date:</label>
                                                                 </div>
                                                             <div class="col-sm-7 form-group">
                                                                 <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                     <asp:TextBox ID="txtTripStartDate" runat="server" autcomplete="false" autocomplete="off"  CssClass="form-control"></asp:TextBox>
                                                                <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                              </div>
                                                                   
                                             <%--   <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtTripStartDate" Format="MM/dd/yyyy" CssClass="cal_Theme1 form-control">
                                                </cc1:CalendarExtender>--%>
                                                <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                <asp:HiddenField ID="ReqID" runat="server" />
                                                <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                <asp:HiddenField ID="hdnRctFileName" runat="server" />
                                                <asp:HiddenField ID="hdnAttMandtry" runat="server" />
                                                <asp:HiddenField ID="hdnQBAcctID" runat="server" />
                                                <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                <asp:HiddenField ID="hdnFoodTax" runat="server" />
                                                                 </div>

                                    </div>
                                         <div class="clearfix"></div>
                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Manager Email:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                   <asp:DropDownList ID="ddlManagerEmail" runat="server" DataTextField="Email" DataValueField="UserID" CssClass="form-control selectpicker" data-live-search="true"  >
                                                </asp:DropDownList>
                                                                 </div>

                                    </div>

                                        

                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Purpose :</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtPurpose" CssClass="form-control" runat="server"></asp:TextBox> 
                                                                 </div>

                                    </div>
                        
                                        
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Payable To:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                     <asp:TextBox ID="txtOnBehalfOf" runat="server" CssClass="form-control" onchange="javascript:return validateOnBehalfOf();"></asp:TextBox>
                                                <asp:HiddenField ID="hdnOnBehalfOfCnt" runat="server" />
                                                                 </div>

                                    </div>

                                        <div class="clearfix"></div>
                                        
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             
                                                             <div class="col-sm-7">
                                                                      <asp:CheckBox ID="ChkSendToQB" runat="server" Text="Send to QB" TextAlign="Right" />
                                                                 </div>

                                                     </div>

                                         <div class="clearfix"></div>
                                        
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 pull-right">
                                                        <asp:Button ID="btnAddExpense" runat="server" OnClick="AddNewExpense" Text="Add New Expense" CssClass="btn btn-success pull-right mr20" />
                                                   </div>
                                                  

                                    </div>

                                    
                                    
                                </div>
                                <div class="divfieldset">
                                    <table width="100%" >
                                        <tr>
                                            <td style="text-align: right">
                                                <%--<asp:Button ID="lnkCCT" runat="server" OnClick="UploadCCT" Text="Import Creditcard Transactions" CssClass="buttonnew-blue" />--%>
                                                
                                            </td>
                                        </tr>
                                    </table>
                                    <br />
                                    <table>
                                        <tr>
                                            <td>
                                                <%if (gvExp.Rows.Count > 0)
                                                  {  %>
                                                <isx:CoolGridView ID="gvExp" runat="server" AutoGenerateColumns="False" OnRowDataBound="gvExp_RowDataBound"
                                                    OnRowEditing="gvExp_RowEditing" OnRowCommand="gvExp_RowCommand" OnRowDeleting="gvExp_RowDeleting"
                                                    Width="981px" Height="200px">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Action">
                                                            <ItemTemplate>
                                                                <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" Text="Edit" OnCommand="EditNewDetails"
                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkview" Text="View" CommandName="View" OnCommand="ViewNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'
                                                                                    CommandName="Delete"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="ExpenseType">
                                                            <ItemTemplate>
                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label>
                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label>
                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label>
                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label>
                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("EXP_TYPE")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("JOB_CODE")%>' Visible="false" />
                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("JPHS_CODE")%>' Visible="false" />
                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCAT_CODE")%>' Visible="false" />
                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                                <asp:Label runat="server" ID="lblExpItem" Visible="false" Text='<%#Eval("ExpenseItem")%>' />
                                                                <asp:Label runat="server" ID="lblClassification" Text='<%#Eval("AccountClss")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Expense Date">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("ExpenseDate")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Pre-Amount">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("PreAmount")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Total Amount (with Tax)" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("ActualAmount")%>' />
                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("PaymentType") %>' Visible="false" />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="City" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("CitiesVisited")%>' />
                                                                <asp:Label runat="server" ID="lblFromCity" Text='<%#Eval("FromCity")%>' Visible="false" />
                                                                <asp:Label runat="server" ID="lblFromOtherCity" Text='<%#Eval("FromOtherCity")%>'
                                                                    Visible="false" />
                                                                <span id="splblOtherCity" runat="server">
                                                                    <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("OtherCities")%>' />
                                                                </span>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Attachments">
                                                            <ItemTemplate>
                                                                <asp:Label runat="server" ID="lblComments" Text='<%#Eval("Comments")%>' Visible="false" />
                                                                <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                    Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                <asp:HiddenField ID="lblAtt" runat="server" Value='<%#Eval("AttachmentCnt") %>' />
                                                                <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("ExpLineNo") %>' />
                                                                <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                <asp:HiddenField ID="hdnBalAfterPO" runat="server" Value='<%#Eval("balanceAfterpo") %>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 150px">
                                                            <label>
                                                                No expense to display.</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <%} %>
                                                <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                <asp:HiddenField ID="hdnSeq1" runat="server" />
                                                <asp:HiddenField ID="hdnMaxApprLimit" runat="server" />
                                                <asp:HiddenField ID="hdnTotalPreAmnt" runat="server" />
                                                <asp:HiddenField ID="hdnTotalActAmnt" runat="server" />
                                                <asp:HiddenField ID="hdnCurrExpAmnt" runat="server" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </asp:Panel>
                            <div class="action" id="dvSave" runat="server">
                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="btn btn-warning" OnClick="btnReset_Click"  ></asp:Button>
                            </div>
                        </div>
                         <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                 <span id="Span1">Attachments</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right"> 
                                                                     <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="btn btn-danger pull-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                 
                                <section>
                                    <div id="dvAtt" runat="server">
                                    </div>
                                    <table>
                                        <tr>
                                            <td>
                                                <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="380px"
                                                    Height="400px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                    OnRowDataBound="gvAttchmnts_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Attachment">
                                                            <ItemTemplate>
                                                                <asp:ImageButton runat="server" ID="imgAttchmnt" Width="55px" Height="65px" OnClick="DownLdAtt"></asp:ImageButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Remove">
                                                            <ItemTemplate>
                                                                <asp:CheckBox ID="chkDelAtt" runat="server" onchange="showDeleteButton();" />
                                                                <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                </isx:CoolGridView>
                                            </td>
                                            <td>
                                                <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="btn btn-danger"
                                                    OnClick="DeleteSelectedAttachments" Style="display: none" />
                                            </td>
                                        </tr>
                                    </table>
                                    <asp:HiddenField ID="hdnAttIdsRet" runat="server" />
                                    <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClose">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
                            <div class="main-content" id="Div10" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                Alert
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                               <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="btn btn-danger" OnClick="RetainAttDialog" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                 
                                <section>
                                    <div class="divfieldset" style="padding:27px;">
                                        <small class="alert alert-danger">
                                            <label>Are you sure you want to delete this Attachment?</label>
                                        </small>
                                        <br />
                                        <br />
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                            TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground2">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlAddEdit" runat="server" DefaultButton="btnSaveExp" Style="display: none;">
                            <div class="main-content" id="DivEdit" runat="server" style="margin: 0px 0px 0px -15px; background-color: White; padding: 0 0px 10px 0px; width:1200px; min-height: 60px;overflow:auto;">
                               
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                 <asp:Label ID="lblPopHeading" runat="server"> </asp:Label>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                       <asp:Button ID="btnSaveExp" runat="server" Text="Save" CssClass="btn btn-success" OnClick="btnSaveExp_Click" />
                                                <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-danger" OnClick="btnDelete_Click" />
                                                <asp:Button ID="btnAppend" runat="server" Text="Done" CssClass="btn btn-success" OnClick="btnAppend_Click" />
                                                <asp:Button ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-danger" OnClick="btnCancel_Click" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
 
                                <div style="padding: 20px">
                                    <div class="divfieldset">
                                        <b>
                                            <div id="dvExpError" runat="server" style="color: Red; font-weight: bold;text-align:center;margin-bottom:20px;">
                                            </div>
                                        </b>
                                        <div style="text-align: right">
                                            <asp:Button ID="btnPrev" runat="server" Text="Previous" CssClass="btn btn-info mt10" OnClick="PreviousExp" />
                                            <asp:Button ID="btnNext" runat="server" Text="Next" CssClass="btn btn-info mt10" OnClick="NextExp" />
                                        </div>
                                         
                                                 
                                                     
                                                                <div id="divExptype" runat="server"> 
                                                                    <div id="dvEditType" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                     <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Expense Type </label>
                                                                         </div>
                                                                     <div class="col-sm-7">
                                                                          <asp:DropDownList ID="ddlEditExpType" runat="server" DataValueField="Description" CssClass="form-control selectpicker" data-live-search="true"
                                                                            DataTextField="Description" Width="120px" AutoPostBack="true" OnSelectedIndexChanged="ddlExpType_SelectedIndexChanged">
                                                                        </asp:DropDownList>                                                                   
                                                                    </div>     
                                                                  </div>

                                                                    <div id="dvEditJob" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Job Code </label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 <asp:DropDownList ID="ddlEditJobs" runat="server" DataTextField="Name" DataValueField="Code" CssClass="form-control selectpicker" data-live-search="true"
                                                                            OnSelectedIndexChanged="ddlJobs_SelectedIndexChanged" Width="150px" AutoPostBack="true">
                                                                        </asp:DropDownList>                                                                   
                                                                 </div>     
                                                             </div>

                                                                  <div id="dvEditPhs" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Phase Code </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <asp:DropDownList ID="ddlEditPhases" runat="server" DataTextField="Name" DataValueField="Code" CssClass="form-control selectpicker" data-live-search="true"
                                                                            OnSelectedIndexChanged="ddlPhases_SelectedIndexChanged" Width="150px" AutoPostBack="true">
                                                                        </asp:DropDownList>                                                                  
                                                                 </div>     
                                                             </div>   
                                                                       
                                                                      <div id="dvEditJC" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Job Category </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <asp:DropDownList ID="ddlEditCategories" runat="server" DataTextField="Name" DataValueField="Code"
                                                                       CssClass="form-control selectpicker" data-live-search="true"     Width="150px">
                                                                        </asp:DropDownList>                                                                  
                                                                 </div>     
                                                             </div>
                                                                   
                                                                   
                                                                 <div id="dvAccCode" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Account Name </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:DropDownList ID="ddlAccountCodes" runat="server" DataTextField="AccountClss" CssClass="form-control selectpicker" data-live-search="true" DataValueField="ExpCode" Width="150px" AutoPostBack="true" OnSelectedIndexChanged="AccountCodeChanged"></asp:DropDownList>
                                                                        <asp:HiddenField ID="hdnCodeValue6" runat="server" />
                                                                        <asp:HiddenField ID="hdnCodeValue5" runat="server" />
                                                                        <asp:HiddenField ID="hdnCodeValue4" runat="server" />
                                                                        <asp:HiddenField ID="hdnCodeValue3" runat="server" />
                                                                        <asp:HiddenField ID="hdnCodeValue2" runat="server" />
                                                                        <asp:HiddenField ID="hdnCodeValue1" runat="server" />
                                                                        <asp:HiddenField ID="hdnExpItem" runat="server" />
                                                                        <asp:HiddenField ID="hdnAtt" runat="server" />
                                                                        <asp:HiddenField ID="hdnAcc" runat="server" />
                                                                        <small>
                                                                            <p>
                                                                                <asp:CheckBox ID="chkReimb" runat="server" Text="Reimbursable" Enabled="false" TextAlign="right" Width="110px" />
                                                                            </p>
                                                                        </small>                                                                  
                                                                 </div>     
                                                                </div>

                                                                     <div id="dvClass" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Class </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                 <asp:DropDownList ID="ddlClass"   runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>                                                                 
                                                                 </div>     
                                                                    </div>
                                                                    
                                                                   
                                                                </div>
                                                     
                                                             <div id="dvEditED" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Expense Date </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:TextBox runat="server" ID="txtEditExpDate" class="date form-control"
                                                                        onkeydown="if(document.getElementById('txtEditPreAmnt').disabled == false){TabIndex('txtEditPreAmnt', event);}else{TabIndex('txtEditActAmnt', event);}" />
                                                                    <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtEditExpDate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                    </cc1:CalendarExtender>                                                                  
                                                                 </div>     
                                                             </div>

                                                                 <div id="dvEditFD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>From Date </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:TextBox ID="txtEditFromdate" runat="server" CssClass="form-control" class="date"></asp:TextBox>                                                                  
                                                                 </div>     
                                                                 </div>
                                                              
                                                                 <div id="dvEditTD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>To Date </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:TextBox ID="txtEditTodate" runat="server" CssClass="form-control" class="date"></asp:TextBox>                                                                  
                                                                 </div>     
                                                             </div>

                                                                 <div id="dvEditCV" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>City visited </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <asp:TextBox ID="txtCityVisited" runat="server" CssClass="form-control"></asp:TextBox>
                                                                    <asp:HiddenField ID="hdnVendors" runat="server" />                                                                  
                                                                 </div>     
                                                                </div>

                                                                <div id="dvEditFromcity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>From City </label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                  <asp:TextBox ID="txtFromCity" runat="server" CssClass="form-control" OnTextChanged="CitiesTextChanged" AutoPostBack="true"></asp:TextBox>                                                                
                                                                 </div>     
                     										</div>
                                                                
                                                             <div id="dvEditToCity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>To City </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                    <asp:TextBox ID="txtToCity"  CssClass="form-control" runat="server"></asp:TextBox>                                                                  
                                                                 </div>     
                     										</div>
                                                                 
                                                        <div id="dvLocalLocation" runat="server" style="float: left; display: none" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Location </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtEditLocalLocation" CssClass="form-control" runat="server" Width="170px"></asp:TextBox>                                                                   
                                                                </div>     
                     									</div>
                                                                 
                                                      <div id="dvChkOutOfCity" runat="server" style="float: left; display: none" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <asp:CheckBox ID="chkIsOutOfCity" runat="server" Text="Out Of City" TextAlign="Right"
                                                                            onclick="javascript: onchangeoutofcity('chkIsOutOfCity');" />
                     									</div>
                                                             
                                        <div class="clearfix"></div> 

                                                             <div id="dvEditVendor" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">
                                                             <%if (ddlType.SelectedValue != "PA")
                                                      { %>
                                                            <i class="fa fa-star maroon-text" aria-hidden="true"></i>
                                                                                            <%} %>
                                                             Vendor</label>
                                                                </div>
                                                            <div class="col-sm-7">    
                                                                 <asp:TextBox ID="txtPrefVendor" runat="server" CssClass="form-control" onchange="javascript:return getVendAgentInit(this);"></asp:TextBox>                                                               
                                                                </div>     
                     									</div>

                                                                <div id="dvEditAgName" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Agent Name </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="txtEditAgentName" CssClass="form-control" runat="server"></asp:TextBox>
                                                                </div>     
                     									</div>
                                                                
                                                         <div id="dvEditItNo" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Itinerary Number </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="txtEditItNo" CssClass="form-control" runat="server"></asp:TextBox>
                                                                </div>     
                     									</div>
                                                                <div class="clearfix"></div>   
                                                       <div id="dvEditCompCar" runat="server" style="display: none; float: left;" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Type of Car </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:DropDownList ID="ddlCompCar" CssClass="form-control selectpicker" data-live-search="true" runat="server"   onchange='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'>
                                                                    </asp:DropDownList>
                                                                </div>     
                     									</div>
                                                                 <asp:HiddenField ID="hdnCmpCar" runat="server" />
                                                                <asp:HiddenField ID="hdnPrsnCar" runat="server" />
                                                                 
                                                        <div id="dvEditTT" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Total Trip</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                     <asp:TextBox ID="txtEditTotTrip" runat="server" CssClass="form-control" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                </div>     
                     									</div>    
                                                                 
                                                            <div id="dvEditLN" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> LessNorm</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtEditLNorm" runat="server"  CssClass="form-control" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                </div>     
                     									</div>
                                                                
                                                         <div id="dvEditReimbt" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Reimbursement </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                      <asp:TextBox ID="txtEditReimbt" runat="server" CssClass="form-control" ></asp:TextBox>
                                                                </div>     
                     									</div>
                                            <div class="clearfix"></div> 
                                                              <div id="dvEditSalesTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Sales Tax </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                     <asp:TextBox ID="txtEditSalesTax" runat="server" CssClass="form-control" Width="65px"></asp:TextBox>
                                                                </div>     
                     									</div>

                                                         <div id="dvEditFoodTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Food Tax</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="txtEditFoodTax" runat="server" CssClass="form-control" Width="65px" onchange="javascript:return validateFoodTax();"></asp:TextBox>
                                                                </div>     
                     									</div>
                                                                 
                                                       <div id="dvEditPA" runat="server" style="float: left" class ="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Pre-Amount </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                  <asp:TextBox runat="server" ID="txtEditPreAmnt" CssClass="form-control" ></asp:TextBox> 
                                                                </div>     
                     									</div>      
                                                               
                                                     <div id="dvEditAmt" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Total Amount (with Tax)< </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox runat="server" ID="txtEditActAmnt" CssClass="form-control" onkeyup='javascript:CalcExpenseBudget(1);' onchange='javascript:CalcExpenseBudget(2);' />
                                                                </div>     
                     									</div>
                                                                   <div id="dvEditPM" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Payment Mode</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:DropDownList ID="ddlEditPaymentType" runat="server" CssClass="form-control selectpicker" data-live-search="true" DataTextField="Description" DataValueField="Description" Width="150px">
                                                                    </asp:DropDownList>
                                                                </div>     
                     									</div>

                                                              <div id="dvEditCmt" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Description</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                     <asp:TextBox runat="server" ID="txtEditComments" TextMode="MultiLine" CssClass="form-control" Width="170px" />
                                                                </div>     
                     									</div>
                                        
                                            <div class="clearfix"></div> 
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Budget </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox runat="server" ID="txtExpBudg" CssClass="budgfld form-control" />
                                                                            <asp:HiddenField ID="hdnYear" runat="server" />
                                                                            <asp:HiddenField ID="hdnExpRowTotAmnt" runat="server" />
                                                                </div>     
                     									</div>
                                                        
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Current Balance </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                      <asp:TextBox runat="server" ID="txtExpCurrBal" CssClass="budgfld form-control" />
                                                                </div>     
                     									</div>

                                                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Remaining$ </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox runat="server" ID="txtExpRemBudg" CssClass="budgfld form-control" />
                                                                </div>     
                     									</div>
                                                                             
                                            <div class="clearfix"></div> 
                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"> Bal. After Expense</label>
                                                                        </div>
                                                                    <div class="col-sm-7">
                                                                   <asp:TextBox runat="server" ID="txtExpBalAfter" CssClass="budgfld form-control" />
                                                                        </div>     
                     									        </div> 
                                                        
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Add Attachment
                                                             <a href="#" data-toggle="popover" data-trigger="hover" class="tooltip" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf." data-original-title="" title="">
                                                                                <span class="infoicon "><i class="fa fa-info-circle" aria-hidden="true"></i></span>                                                                                                                                                                 
                                                                                    <span class="tooltiptext">File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB.</span>                                                                                 
                                                                            </a>
                                                        </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                      <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server"
                                                                            UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete"
                                                                            OnClientUploadComplete="showConfirmation" CssClass="form-control" Style="border: 1px solid #aaaaaa" Width="200px" />
                                                                <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                    <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                                            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                                    <asp:HiddenField ID="hdnPPM" runat="server" />
                                                                    <asp:HiddenField ID="hdnCPM" runat="server" />
                                                                    <asp:Label ID="lblEditAtt" runat="server" Style="display: none"></asp:Label>
                                                                </div>     
                     									</div>

                                                    <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                              <asp:LinkButton ID="LnkcurrAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                    Text="View Current Attachments" Style="margin-top: 13px;  " CssClass="btn btn-infi"></asp:LinkButton>
                                                                                <asp:Label ID="lblEAttMsg" runat="server"></asp:Label> 
                     									</div>

                                        <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                               <asp:LinkButton ID="lnkShowDraft" runat="server" CommandArgument="test" OnClick="DisplayDrafts"
                                                                                      Text="Attach from Drafts" ToolTip="Click to import attachments from Drafts"
                                                                                    CssClass="btn btn-info"></asp:LinkButton>
                     									</div>
                                         
                                                 
                                    </div>
                                </div>
                            </div>
                            <div class="main-content" id="DivView" runat="server" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 400px; width: 1100px;overflow:auto">
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                               View Expense
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                    <asp:Button ID="btnVCancel" runat="server" Text="Close" CssClass="btn btn-danger" OnClick="btnVCancel_Click" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                 
                                <div style="padding: 20px">
                                    <div class="divfieldset">
                                        <div style="text-align: right">
                                            <asp:Button ID="btnVPrev" runat="server" Text="Previous" CssClass="btn btn-info" OnClick="ViewPreviousExp" />
                                            <asp:Button ID="btnVNext" runat="server" Text="Next" CssClass="btn btn-info" OnClick="ViewNextExp" />
                                        </div>

                                         <div id="dvEditVType" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Expense Type:</i> </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblddlVExpType" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                       <div id="dvEditVJob" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Job Code: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblddlVJobCd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>


                                         <div id="dvEditVPhs" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Phase Code:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVPhcd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                       <div id="dvEditVJC" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">  Job Category: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVCatCode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                         <div id="dvEditVItem" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">  Account Name: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVExpCd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                <small>
                                                                        <p>
                                                                            <asp:CheckBox ID="chkVReimb" runat="server" Enabled="false" Text="Reimbursable" TextAlign="Right" />
                                                                        </p>
                                                                    </small>
                                                                </div>     
                     									</div>
                                        <div id="dvVAccCode" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">  Account Code:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtVAccCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                </div>     
                     									</div>
                                          <div id="dvVClass" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Class: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="txtVClass" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div class="clearfix"></div>

                                         <div id="dvEditVED" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Expense Date: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVDate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                        <div id="dvEditVCV" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Cities visited: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div id="dvEditVFromcity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">From City:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVFromcity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div id="dvEditVToCity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">To City: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblVTocity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                       <div id="dvEditVFD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">From Date:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblVFromdate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div id="dvEditVTD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> To Date: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblVTodate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div class="clear-fix"></div>

                                         <div id="dvEditVPreVendor" runat="server" style="display: none; float: left" class="padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Preferred Vendor: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVPreVendor" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                       <div id="dvEditVAgName" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Agent Name: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblAgName" runat="server" ReadOnly="true" CssClass="form-control">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                        <div id="dvEditVItNo" runat="server" style="display: none; float: left" class="  padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Itinerary number: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                  <asp:TextBox ID="lblVItNo" runat="server" ReadOnly="true" CssClass="form-control"> 
                                                                    </asp:TextBox>  
                                                                </div>     
                     									</div>
                                        <div class="clearfix"></div>

                                       
                                                                <div id="dvEditVTT" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Total Trip: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVTotTrip" runat="server" CssClass="form-control" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                         <div id="dvEditVLN" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> LessNorm: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                      <asp:TextBox ID="lblVLNorm" runat="server"  CssClass="form-control" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                        <div id="dvEditVReimbt" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">  Reimbursement: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVReimbt" runat="server" CssClass="form-control" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                        <div id="dvEditVSalesTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Sales Tax: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVSalesTax" runat="server" CssClass="form-control" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                </div>     
                     									</div>
                                         <div id="dvEditVFoodTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Food Tax: </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVFoodTax" CssClass="form-control" runat="server" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                </div>     
                     									</div>

                                       <div id="dvEditVPA" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Pre-Amount:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVPreAmt" CssClass="form-control" runat="server" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>
                                       <div id="dvEditVAmt" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">  Total Amount (with Tax): </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVActAmt" CssClass="form-control" runat="server" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                        <div id="dvEditVPM" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Payment Mode:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox ID="lblVPayMode"  CssClass="form-control" runat="server" ReadOnly="true">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                         <div id="Div3" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Description:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                   <asp:TextBox ID="lblVcomnts" TextMode="MultiLine" runat="server" CssClass="form-control" ReadOnly="true"
                                                                        Width="170px">
                                                                    </asp:TextBox>
                                                                </div>     
                     									</div>

                                        <div class="clearfix"></div>
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Budget</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                     <asp:TextBox runat="server" ID="txtVExpBudg" CssClass="budgfld form-control" />
                                                                            <asp:HiddenField ID="hdnVYear" runat="server" />
                                                                            <asp:HiddenField ID="hdnVExpRowTotAmnt" runat="server" />
                                                                </div>     
                     									</div>

                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Current Balance</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox runat="server" ID="txtVExpCurrBal" CssClass="budgfld form-control" />
                                                                </div>     
                     									</div>

                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Remaining$  </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                     <asp:TextBox runat="server" ID="txtVExpRemBudg" CssClass="budgfld form-control" /> 
                                                                </div>     
                     									</div>

                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> Bal. After Expense  </label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                    <asp:TextBox runat="server" ID="txtVExpBalAfter" CssClass="budgfld form-control" />
                                                                </div>     
                     									</div>

                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            
                                                            <div class="col-sm-7">
                                                                    <asp:Label ID="lblViewAtt" runat="server"></asp:Label>
                                                                    <asp:LinkButton ID="LinkViewAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                        Text="View Current attachments"  CssClass="btn btn-info"></asp:LinkButton>
                                                                    <asp:Label ID="lblAttMsg" runat="server"></asp:Label>
                                                                </div>     
                     									</div>


 
                                    </div>
                                </div>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkEdit" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_Edit" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                            TargetControlID="lnkEdit" BackgroundCssClass="modalBackground">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlCC" runat="server" CssClass="modalPopup" Style="display: none">
                            <div id="dvCCT" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 1000px; height: 518px">
                              <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                  redit Card Transactions 
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                    <asp:Button ID="btnImport" runat="server" Text="Import" CssClass="btn btn-warning" OnClick="btnImport_Click" />&nbsp;&nbsp;&nbsp;
                                                            <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-danger" OnClick="btnClose_Click" />
                                                             </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                <section>
                                    <div style="overflow: hidden; overflow-y: scroll; overflow-x: scroll; height: 425px; width: 1000px">
                                        <div id="dvErrCC" runat="server" style="color: Red;text-align:center;margin-bottom:10px;">
                                            Files of type .QIF, .CSV and .QBT are accepted.
                                        </div>
                                        <div id="dvfUpdCC">
                                            <br />
                                            <asp:FileUpload ID="fUpdCC" runat="server" CssClass="form-control" />&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <asp:Button ID="btnUpload" runat="server" Text="Import" CssClass="btn btn-success" OnClick="btnUpload_Click" />
                                        </div>
                                        <br />
                                        <br />
                                        <div id="dvGirdCC">
                                            <isx:CoolGridView ID="gvCC" runat="server" AutoGenerateColumns="false" Width="100%"
                                                GridLines="None" ShowHeader="true" OnRowDataBound="gvCC_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField>
                                                        <HeaderTemplate>
                                                            <asp:CheckBox ID="checkAll" runat="server" onclick="javascript:return ChangeAllCheckBoxStates(this);" />
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:CheckBox ID="chkgvQIF" runat="server" />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Account Name">
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                            <asp:DropDownList ID="ddlCCExpItems" runat="server" DataTextField="Description" CssClass="form-control selectpicker" data-live-search="true" DataValueField="Description"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlCCExpItems_SelectedIndexChanged">
                                                            </asp:DropDownList>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Posted Date">
                                                        <ItemTemplate>
                                                            <%# Eval("Posted Date")%>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Description">
                                                        <ItemTemplate>
                                                            <%# Eval("Payee")%>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Reference Amount">
                                                        <ItemTemplate>
                                                            <%# Eval("Amount")%>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                            </isx:CoolGridView>
                                        </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkCC" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_CC" runat="server" DropShadow="false" PopupControlID="pnlCC"
                            TargetControlID="lnkCC" BackgroundCssClass="modalBackground">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                            <div class="main-content" id="Div1" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                 Alert
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                     <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="Yes" CssClass="btn btn-success" />
                                                                    <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                 
                                <section style="padding:27px;">
                                    <small class="alert alert-danger" >
                                        <label>Are you sure you want to delete this item?</label>
                                    </small>
                                    
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlDraftAtt" runat="server" CssClass="modalPopup" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px;">
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                Drafts
                                                                </div>
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
                                    <div class="divfieldset">
                                        <div id="dvDrftErr" runat="server" style="text-align:center;font-weight:bold;margin-bottom:20px">
                                        </div>
                                        <table>
                                            <tr>
                                                <td>
                                                    <isx:CoolGridView ID="gvDrafts" runat="server" Width="380px" Height="250px"
                                                        AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                        OnRowDataBound="gvDrafts_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <strong>Attachment</strong>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                    <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                                    <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdAtt" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <strong>Description</strong>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("compCode")%>
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
                                                    </isx:CoolGridView>
                                                </td>
                                                <td>
                                                    <div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkDraftAtt" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popDraftsAtt" runat="server" DropShadow="false" PopupControlID="pnlDraftAtt"
                            TargetControlID="lnkDraftAtt" BackgroundCssClass="modalBackground1" CancelControlID="btnDraftsClose">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnldelAddedDrft" runat="server" CssClass="modalPopup" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">
                                <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                Alert!
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right"> 
                                                                    <asp:Button ID="btnDelDrft" runat="server" OnClick="ConfirmDraftDel" Text="Yes" CssClass="btn btn-success" />
                                                                    <asp:Button ID="btnCancelDelDrft" runat="server" Text="No" CssClass="btn btn-success" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
 
                                <section style="padding:27px">
                                    <small class="alert alert-danger">
                                        <label>
                                            your changes will be lost if you close without saving.</label></small> 
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkDelAddDrft" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popAlertDrftDel" runat="server" DropShadow="false" PopupControlID="pnldelAddedDrft"
                            TargetControlID="lnkDelAddDrft" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelDelDrft">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none;"
                            DefaultButton="btnSave">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 1200px; height: 500px;overflow:auto">
                               
                                <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                   <asp:Label ID="lblHVend" runat="server"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         <asp:Button ID="btnVendSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveVendor"></asp:Button>
                                                <asp:Button ID="btnVendColse" runat="server" Text="Close" CssClass="btn btn-danger" OnClick="btnVendClose_Click"></asp:Button>
                                            </div>
                                                </div>
                                            </div>
                                            </div>
        
                                <section>
                                    <div class="divfieldset">
                                        <table class="tablemain">
                                            <tr>
                                                <td>
                                                    <div id="dvErrMsg" runat="server" style="font-size: 17px; color: red;text-align:center;margin-bottom:10px;">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table>
                                                        <tr>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        <em>*</em>Vendor No:</label></small><br />
                                                                <asp:Label ID="lblVendNo" runat="server" CssClass="vendNum form-control"></asp:Label>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        <em>*</em>Vendor Name:</label>
                                                                    </label></small><br />
                                                                <asp:TextBox ID="txtVendName" CssClass="form-control" runat="server"></asp:TextBox>
                                                                <asp:HiddenField ID="hdnVendCode" runat="server" />
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Title:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlVendTitle"  CssClass="form-control selectpicker" data-live-search="true"  runat="server" Width="135px">
                                                                    <asp:ListItem Value="0" Text="Please Select"></asp:ListItem>
                                                                    <asp:ListItem Value="Mr." Text="Mr."></asp:ListItem>
                                                                    <asp:ListItem Value="Mr." Text="Mrs."></asp:ListItem>
                                                                </asp:DropDownList>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        First Name:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendFirstName" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Middle Name:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendMidName" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Last Name:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendLastName" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Vendor Contact:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendContact"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Vendor Phone:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtPhone" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Address1:
                                                                    </label>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAddr1" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Address2:
                                                                    </label>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAddr2" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Address3:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendAddr3" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Country:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlCountry"  CssClass="form-control selectpicker" data-live-search="true" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                     >
                                                                </asp:DropDownList>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        State:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlRgnCode"  CssClass="form-control selectpicker" data-live-search="true" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                     >
                                                                </asp:DropDownList>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        City:</label></small><br />
                                                                <asp:TextBox ID="txtVendCity"  CssClass="form-control" runat="server" onchange="javascript:splitCityZip(this);"></asp:TextBox>
                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtVendCity"
                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                    CompletionListItemCssClass="listItem"
                                                                    CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                </cc1:AutoCompleteExtender>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        ZipCode:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendZip"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        URL:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtUrl" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Account#:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendAccNum"  CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Pay Terms:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlPayTerms"  CssClass="form-control selectpicker" data-live-search="true"  runat="server" DataTextField="CodeKey" DataValueField="CodeKey" ></asp:DropDownList>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Balance:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendBalance"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Currency:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlVendCurrency" CssClass="form-control selectpicker" data-live-search="true" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" ></asp:DropDownList>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Tax Code:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendTaxCode"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Alt. Contact:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendAltContact"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        Alt. Phone:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendAltPhone"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Vendor Discount(%):
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtVendDisc"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        StartDate:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                <asp:TextBox ID="txtStartDate"  CssClass="form-control" runat="server" class="date"></asp:TextBox>
                                                                    <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                                </div>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        ExpiryDate:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                <asp:TextBox ID="txtExpiryDate"  CssClass="form-control" runat="server" class="date"></asp:TextBox>
                                                                <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                                </div>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        PromoCode:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtPromoCode"  CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl">
                                                                <small>
                                                                    <label>
                                                                        1099:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txt1099"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="lbl"></td>
                                                            <td colspan="4">
                                                                <table width="30%">
                                                                    <tr>
                                                                        <td width="30%">
                                                                            <asp:CheckBox ID="chkSysOrders" runat="server" TextAlign="Right" onchange="DisplayEmailOption()" />
                                                                            <small>
                                                                                <label>
                                                                                    Accept System Orders</label></small>
                                                                        </td>
                                                                        <td width="70%">
                                                                            <div id="dvSysOrders" runat="server" style="width: 10%">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 0px">
                                                                                            <asp:RadioButtonList ID="rblEmail" runat="server" RepeatDirection="Horizontal" TextAlign="Right"
                                                                                                Width="150px">
                                                                                                <asp:ListItem>Email</asp:ListItem>
                                                                                                <asp:ListItem>Fax</asp:ListItem>
                                                                                            </asp:RadioButtonList>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:TextBox ID="txtEmailFax" runat="server"  CssClass="form-control" onchange="ValidateVendEmail();"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table>
                                                        <tr>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Agent:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtAgent"  CssClass="form-control" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Agent Name:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtAgentName" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                            <td class="lbl" style="text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Agent Phone:
                                                                    </label>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtAgentPh" CssClass="form-control"  runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAddVendor" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popAddVendor" runat="server" DropShadow="false" PopupControlID="pnlAddVendor"
                            TargetControlID="lnkAddVendor" BackgroundCssClass="modalBackground">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlVendCreatAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                               <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                        Alert
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         <asp:Button ID="btnVendC" runat="server" OnClick="CreateVendor" Text="Yes" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnVendNo" runat="server" Text="No" CssClass="btn btn-danger" OnClick="btnVendNo_Click" />
                                                   </div>
                                                </div>
                                            </div>
                                            </div>
                                 
                                <section>
                                    <div class="form_edit" style=" padding: 27px;">
                                        <small class="alert alert-danger">
                                            <label>
                                                This vendor doesnot exist in the Vendor list, Do you want to add this vendor to List?</label>
                                        </small>
                                         
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkConfVendAlert" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popVendCreatAlert" runat="server" DropShadow="false"
                            PopupControlID="pnlVendCreatAlert" TargetControlID="lnkConfVendAlert" BackgroundCssClass="modalBackground1">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlAddExpItem" runat="server" DefaultButton="btnAddExpItemSave" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 510px">
                               
                                <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    <span id="lblHCompCode">Add Account Name</span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right"> 
                                                <asp:Button ID="btnAddExpItemSave" runat="server" OnClick="btnAddExpItemSave_Click" Text="Save" CssClass="btn btn-success" />
                                                <asp:Button ID="btnAddExpItemCancel" runat="server" OnClick="btnAddExpItemCancel_Click" Text="Cancel" CssClass="btn btn-danger" />
                                            </div>
                                                </div>
                                            </div>
                                            </div> 
                                <section>
                                    <div class="divfieldset">
                                        <table width="100%">
                                            <tr>
                                                <td colspan="2">
                                                    <div id="dvAddExpItemErr" runat="server">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Expense Code:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtAddExpCode" CssClass="form-control" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Description:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtAddExpDescr" CssClass="form-control" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            Account Code:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtAddExpAccCode" CssClass="form-control" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Maximum Limit(<%=currencySymbol %>):</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtAddExpMaxLmt" CssClass="form-control" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Travel Specific:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:RadioButtonList ID="rdTravelSpec" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                    </asp:RadioButtonList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Reimbursable:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:RadioButtonList ID="rdReimb" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                    </asp:RadioButtonList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <small>
                                                        <label>
                                                            <em>*</em>Attachment:</label></small>&nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <asp:RadioButtonList ID="rdAtt" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                    </asp:RadioButtonList>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAddExpItem" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popAddExpItem" runat="server" DropShadow="false" PopupControlID="pnlAddExpItem"
                            TargetControlID="lnkAddExpItem" BackgroundCssClass="modalBackground1">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlAddOnBehalfOf" runat="server" DefaultButton="btnAddOnBehalfOf" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 540px">
                                <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                        Create
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right"> 
                                                         <asp:Button ID="btnAddOnBehalfOf" runat="server" OnClick="btnAddOnBehalfOf_Click" Text="Yes, the name is accurate" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnCancelOnBehalfOf" runat="server" Text="No! I want to change the name" CssClass="btn btn-warning" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                               
                                <section>
                                    <div class="divfieldset" style="padding:27px;">
                                        <small class="alert alert-danger">
                                            <label>
                                                <asp:Label ID="lblOnBehalfOfConfText" runat="server"></asp:Label>
                                            </label>
                                        </small>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkAddOnBehalfOf" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popAddOnBehalfOf" runat="server" DropShadow="false" PopupControlID="pnlAddOnBehalfOf"
                            TargetControlID="lnkAddOnBehalfOf" BackgroundCssClass="modalBackground1">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlSimilarVendAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                 <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                        Alert
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right"> 
                                                         <asp:Button ID="btnSimilarVendAlertYes" runat="server" OnClick="btnSimilarVendAlertYes_Click" Text="Yes" CssClass="btn btn-success" />
                                                      <asp:Button ID="btnSimilarVendAlertNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                            </div>
                                                </div>
                                            </div>
                                            </div>
                                  
                                <section style="padding:27px">
                                    <small class="alert alert-info">
                                        <label>The selected vendor has been already paid this amount? Are you sure you want to continue?</label>
                                    </small>
                                    <br />
                                    <br />
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkSimilarVendAlert" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popSimilarVendAlert" runat="server" DropShadow="false" PopupControlID="pnlSimilarVendAlert"
                            TargetControlID="lnkSimilarVendAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnSimilarVendAlertNo">
                        </cc1:ModalPopupExtender>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <!-- Main Section End -->
            </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>

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
          //window.onbeforeunload = function () {
          //    hideProgress();
          //    return 'Are you sure you want to leave?';
          //};

          //Validations Begin

          function refreshNotes() {
              window.location = window.location;
          }

          //function addDDLStyle() {
          //    $(function () {
          //        $("#ddlType").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlManagerEmail").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditExpType").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditJobs").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditPhases").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditCategories").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditExpenseItem").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlAccountCodes").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditAgName").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlCompCar").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlEditPaymentType").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlCountry").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlRgnCode").ufd({ log: true });
          //    });
          //    $(function () {
          //        $("#ddlClass").ufd({ log: true });
          //    });
          //}

          var x;
          function DoOnAjaxPostback() {
              // addDDLStyle();
              LoadCityList();

              $('.selectpicker').selectpicker({
                  liveSearch: true,
                  showTick: true,
                  width: 'auto'
              });

              $('.date').datepicker({
                  format: "mm/dd/yyyy",
                  autoclose: true,
                  showOnFocus: true,
                  todayHighlight: true,
              }).on('changeDate', function (ev) {
                  $(this).datepicker('hide');
              });
          }

          $(document).ready(function () {              
              LoadVendList();
          });

          var jq = $.noConflict();

          function refreshExp() {
              $(".btnRefresh").click();
          }

          function pageLoad() {
              // addDDLStyle();
              LoadVendList();
          }

          function TabIndex(lnk, e) {
              var evt = window.event || e;
              if (evt.keyCode == 9) {
                  if (document.getElementById(lnk)) {
                      setTimeout(function () { document.getElementById(lnk).focus(); }, 1);
                  }
                  if (!lnk.toLowerCase().contains('date')) {
                      $(document).ready(function () {
                          setupDatePicker();
                          $(".date").dateinput('hide');
                      });
                  }
              }
          }

          function EmailOption() {
              if (document.getElementById('chkEmail').checked) {
                  document.getElementById('dvEmail').style.display = "block";
              }
              else {
                  document.getElementById('dvEmail').style.display = "none";
              }
          }

          function onchangeoutofcity(chk) {
              if (document.getElementById(chk).checked) {
                  document.getElementById('dvLocalLocation').style.display = 'none';
                  document.getElementById('dvEditToCity').style.display = 'block';
                  document.getElementById('txtEditLocalLocation').value = '';

                  //display 'other' text fields if city selected is Other.
                  var ddl2 = document.getElementById('ddlEditTocity');
                  if (ddl2.options[ddl2.selectedIndex].text == 'Other') {
                      document.getElementById('dvEditToOther').style.display = 'block';
                  }
                  else {
                      document.getElementById('dvEditToOther').style.display = 'none';
                  }
              }
              else {
                  document.getElementById('dvLocalLocation').style.display = 'block';
                  document.getElementById('dvEditToCity').style.display = 'none';
                  document.getElementById('dvEditToOther').style.display = 'none';
              }
          }

          //Load Cities AutoSuggest  
        
          function LoadCityList() {
              MakeAjaxRequest('Invoice.ashx?func=3', LoadList, false);
          }

          function LoadList(response) {
              var dsCities = null;
              dsCities = jq.parseJSON(response.responseText);
              jq("#txtCityVisited").autocomplete({
                  source: dsCities
              });

              jq("#txtToCity").autocomplete({
                  source: dsCities
              });

              jq("#txtFromCity").autocomplete({
                  source: dsCities
              });
              LoadVendList();
          }
          //Load Cities AutoSuggest  

          //Load Preferred Vendors AutoSuggest   
          function LoadVendList() {
              var dsVend = null;
              dsVend = <%=listFiltervendors %>;
              jq("#txtPrefVendor").autocomplete({
                  source: dsVend
              });
              jq("#txtOnBehalfOf").autocomplete({
                  source: dsVend
              });
          }  
          //Load Preferred Vendors AutoSuggest  

          function ShowBiggerImage(obj) {
              document.getElementById("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
          }

          function ShowDefaultImage(obj) {
              document.getElementById("LargeImageContainerDiv").innerHTML = "";
          }

          function move_Area(event) {
              event = event || window.event;
              LargeImageContainerDiv.style.left = event.clientX + document.body.scrollLeft + 10;
              LargeImageContainerDiv.style.top = event.clientY + document.body.scrollTop + 10;
          }

          function ShowBiggerImageDrft(obj) {
              document.getElementById("LargeImageContainerDivDrft").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style='border: 10px solid #ccc'>";
          }

          function ShowDefaultImageDrft(obj) {
              document.getElementById("LargeImageContainerDivDrft").innerHTML = "";
          }

          function move_Area1(event) {
              event = event || window.event;
              LargeImageContainerDivDrft.style.left = event.clientX + document.body.scrollLeft + 10;
              LargeImageContainerDivDrft.style.top = event.clientY + document.body.scrollTop + 10;
          }

          function $1(id) {
              return document.getElementById(id);
          }

          function showAccCodes()
          {
              $find('popAccCode').show();
            
          }

          function CheckAttDel() {
              var total = 0;
              var grid = $1('<%=gvAttchmnts.ClientID %>');
                for (var i = 2; i <= grid.rows.length+1; i++) {
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
                for (var i = 2; i <= grid.rows.length+1; i++) {
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
        
            function validateBudgetAmount1(id) {
                //   var reg = /^[+]?[1-9]*\.?[0-9]+([eE]-+]?[0-9]+)?$/;
                var reg = /^(?:\d*\.\d{1,4}|\d+)$/;
                if (reg.test($11(id).value) || $11(id).value == '') {
                    return true;
                }
            }

            function CalcExpenseBudget(type) {
                if (!validateBudgetAmount1('txtEditActAmnt')) {
                    $11('dvExpError').style.color = "Red";
                    $11('dvExpError').innerHTML = "Please enter valid Numeric values for Amount.";
                }
                else {
                    var bal;
                    $11('dvExpError').innerHTML = "";
                    if (parseFloat($11('hdnExpRowTotAmnt').value == '' ? 0 : $11('hdnExpRowTotAmnt').value) > 0) {
                        bal = parseFloat($11('txtExpRemBudg').value == '' ? 0 : $11('txtExpRemBudg').value) - (parseFloat($11('hdnExpRowTotAmnt').value) + parseFloat($11('txtEditActAmnt').value));
                    }
                    else {
                        bal = parseFloat($11('txtExpRemBudg').value == '' ? 0 : $11('txtExpRemBudg').value) - parseFloat($11('txtEditActAmnt').value == '' ? 0 : $11('txtEditActAmnt').value);
                    }
                    $11('txtExpBalAfter').value = parseFloat(bal).toFixed(4);
                    if(type==2)
                        validateFoodTax();
                }
            }
        
            function DisplayEmailOption() {
                if ($11('chkSysOrders').checked) {
                    $11('dvSysOrders').style.display = "block";
                    var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
                    radioButtonlist[0].checked = true;
                    $11('txtEmailFax').value = '';
                } else
                    $11('dvSysOrders').style.display = "none";
            }
        
            //Get Vendor Number by passing Vendor name to db
            function getVendCode() {
                if ($11('txtVendName').value != '') {
                    var url = 'Invoice.ashx?func=4&orgname=' + $11('txtVendName').value + '&typ=3';
                    GetVendorNum(url, 'GetVendorNum');
                }
                else
                    $11('lblVendNo').value = '';
            }
            //Get Vendor Number by passing Vendor name to db
        
            //Split City and Zip from City text field
            function splitCityZip(txt) {
                var arr = txt.value.split("-");
                document.getElementById('txtVendZip').value = arr[1];
            }
            //Split City and Zip from City text field

        </script>
        <script>
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
                $('.input-group.date').datepicker({format: "mm-dd-yyyy",    
                    autoclose: true,
                    showOnFocus: true,
                    todayHighlight: true,}); 
    </script>
</body>
</html>
