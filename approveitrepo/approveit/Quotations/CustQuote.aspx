<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CustQuote.aspx.cs" Inherits="Quotations_CustQuote" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ApproveIt - Quotations</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <%--<link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground1 {
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
        }

            label em {
                color: Red;
                font-size: 1em;
                font-weight: bold;
            }

        .smalltab td {
            padding: 5px;
        }

        .tab td {
            padding: 3px;
            vertical-align: top;
        }

        .tbBorder td {
            padding: 10px;
            border: 1px solid #000;
        }

        .lnk {
            text-decoration: underline;
            color: White;
        }
        #dvInnerGrid table {
        
        margin:0px auto;
         
        }

        #gvQuoteListjEsCoOl_headerDiv, #gvQuoteDetailsjEsCoOl_headerDiv, #gvVendListjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvQuoteListjEsCoOl_headerDiv div table tbody tr th, #gvQuoteDetailsjEsCoOl_headerDiv div table tbody tr th, #gvVendListjEsCoOl_headerDiv div table tbody tr th {
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

        #gvQuoteList tbody tr td, #gvQuoteDetails tbody tr td, #gvVendList tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            border: 0.5px solid #eaeaea;
        }

        #gvQuoteListjEsCoOl_mainDiv, #gvQuoteDetailsjEsCoOl_mainDiv, #gvVendListjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvQuoteDetails .cal_Theme1 tr td {
            padding: 0px;
            height: 17px;
            border: 0px;
        }

        #gvQuoteList tbody tr td, #gvQuoteDetails tbody tr td, #gvVendList tbody tr td label {
            font-family: "Open Sans", sans-serif !important;
            font-size: 11px !important;
            text-align: left !important;
            padding: 10px;
            color: #555555;
        }
        
        #gvVendListjEsCoOl_mainDiv
        {
            margin:0px auto;
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
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px; ">
        	<div class=" container-fluid  cd-main-content"  >
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
                                <img src="../images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                        <div class="main-content grid_4 alpha" style="margin-top:70px; padding-top: 0px">

                             <div class="row " >
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title"><%--<span class="font-awesome-icon-block"><i class="fa fa-info-circle"></i></span>--%>My Quotations</div>
                                </div>
                            </div>
                            <div class="clear-fix "></div>
                             <div class="row " style="padding: 0px; height: 0px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="pull-right">
                                  <asp:Button ID="Button1" runat="server" Text="New Quotation" CssClass="btn btn-primary" OnClick="PlaceNewQuote" />
                                <asp:Button ID="Button2" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData"></asp:Button>
                                        </div>
                                </div>
                            </div>
                            <div class="clear-fix "></div>
                             
                            <section>
                                <div class="divfieldset">
                                    <div class="row">
                                        
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                             <div id="dvSearchError">&nbsp;</div>
                                            </div>

                                         <div class="clear-fix "></div>
                                         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:-20px;">
                                             <label class="subheader" style="width:70%"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Response Date</label> 
                                        </div>
                                         <div class="clear-fix "></div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                           
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-3">
                                                            <label class="form-label label_setting" for="orgcode"> From </label>
                                                                 </div>
                                                             <div class="col-sm-6">   
                                                                 <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                  <asp:TextBox ID="txtFrom" runat="server" CssClass="form-control" class="date"></asp:TextBox>                                                                   
                                                                <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                              </div> 
                                                                                                                         
                                                                 </div>     
                                         </div>

                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-4">
                                                            <label class="form-label label_setting" for="orgcode">  To</label>
                                                                 </div>
                                                             <div class="col-sm-6">
                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                  <asp:TextBox ID="txtTo" runat="server" CssClass="form-control" class="date"></asp:TextBox>
                                                                     <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                              </div>                                                
                                                                 </div>     
                                         </div>

                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="btn btn-success" OnClick="FetchDataBetweenDates" />
                                                </div>

                                        </div>
<div class="clear-fix "></div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">

                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-3">
                                                            <label class="form-label label_setting" for="orgcode"> Status: </label>
                                                                 </div>
                                                             <div class="col-sm-6">   
                                                                   <asp:DropDownList ID="ddlStatus" runat="server"  CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true"
                                                                OnSelectedIndexChanged="GetSelectedQuotesByStatus">
                                                            </asp:DropDownList>                                                                
                                                                 </div>     
                                         </div>


                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-4">
                                                            <label class="form-label label_setting" for="orgcode">  QuoteID:</label>
                                                                 </div>
                                                             <div class="col-sm-6"> 
                                                                  <asp:DropDownList ID="ddlQuoteID" runat="server" CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true"
                                                                OnSelectedIndexChanged="GetSelectedQuotesByQuoteID">
                                                            </asp:DropDownList>                                                                  
                                                                 </div>     
                                         </div>



                                         </div> 
                                    </div>
                                    
                                    <br />
                                    <div class="table-responsive">
                                    <div id="dvMainGrid">
                                        <isx:CoolGridView ID="gvQuoteList" runat="server" Width="1000px" Height="250px" AutoGenerateColumns="false"
                                            GridLines="None" OnRowDataBound="gvQuoteList_RowDataBound" ShowHeader="true">
                                            <Columns>
                                                <asp:TemplateField ItemStyle-HorizontalAlign="Right">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkHQuoteID" runat="server" Text="Quote ID" CommandArgument="quoteId"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:LinkButton ID="lnkQuoteID" runat="server" Text='<%#Eval("quoteId") %>' OnClick="Edit"></asp:LinkButton></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-HorizontalAlign="Left">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkHQuoteNum" runat="server" Text="Quote#" CommandArgument="quoteNum"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("quoteNum")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="250px" ItemStyle-Width="250px" ItemStyle-HorizontalAlign="Left">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkHQuoteDescr" runat="server" Text="Quote Descr." CommandArgument="quoteDesc"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("quoteDesc")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-HorizontalAlign="Left">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkHStatus" runat="server" Text="Quote Status" CommandArgument="quoteStatus"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("quoteStatus")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Process" HeaderStyle-Width="250px" ItemStyle-Width="250px">
                                                    <ItemTemplate>
                                                        <label>Saved</label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-HorizontalAlign="Right">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkHRespBy" runat="server" Text="Response By" CommandArgument="responseBy"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                       
                                                        <label><%#Convert.ToDateTime(Eval("responseBy")).ToShortDateString()%></label>
                                                       
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="View">
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnkEdit" runat="server" OnClick="Edit" Text="View"><img src="../images/icons/arrow_out.png" /></asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <EmptyDataTemplate>
                                                <div style="width: 250px">
                                                    <label>
                                                        No quotations to display.</label>
                                                </div>
                                            </EmptyDataTemplate>
                                        </isx:CoolGridView>
                                        <asp:HiddenField ID="hdnIsEdit" runat="server" />
                                    </div>
                                </div>
                                <asp:Panel ID="pnlQuote" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; height: 560px; width: 1100px;">
                                        

                                         <div class="pop-page-title">
                                                 <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> <%if (hdnIsEdit.Value == "Y")
                                                              {%>
                                                                View Quotation
                                                                <%}
                                                              else
                                                              {  %>
                                                                New Quotation<%} %>   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                            <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-info" OnClick="SaveQuote" />
                                                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="SubmitQuote" />
                                                        <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-danger" OnClick="CloseWindow" />
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                        <section>
                                            <div class="divfieldset">
                                                <div class=" ">
                                                    
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                                        <div id="dvMsg" runat="server">   </div>
                                            </div>
                                                    <div class="clearfix"></div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Quote ID: </label>
                                                                 </div>
                                                             <div class="col-sm-7">    
                                                                <label class="form-control"><asp:Label ID="lblQuoteID" runat="server"></asp:Label>  </label>                                                              
                                                                 </div>     
                                                    </div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Company Code:</label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                  <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                CssClass="form-control selectpicker" data-live-search="true" onchange="javascript: return GetShipLoc();">
                                                            </asp:DropDownList>                                                                 
                                                                 </div>     
                                                    </div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Shipping Location:</label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                 <asp:TextBox ID="txtShipLoc" runat="server"  CssClass="form-control"></asp:TextBox>                                                                
                                                                 </div>     
                                                    </div>

                                                    <div class="clearfix"></div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Quote Status:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                   <asp:DropDownList ID="ddlQuoteStatus" runat="server"  CssClass="form-control selectpicker" data-live-search="true">
                                                                <asp:ListItem>OPEN</asp:ListItem>
                                                                <asp:ListItem>CLOSED</asp:ListItem>
                                                                <asp:ListItem>CANCELLED</asp:ListItem>
                                                            </asp:DropDownList>                                                                  
                                                                 </div>     
                                                    </div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Quote Number:</label>
                                                                 </div>
                                                             <div class="col-sm-7">    
                                                                 <asp:TextBox ID="txtQuoteNum" runat="server"  CssClass="form-control"></asp:TextBox>                                                               
                                                                 </div>     
                                                    </div>


                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">

                                                            <label class="form-label label_setting" for="orgcode"><em>*</em>Response By:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                 <asp:TextBox ID="txtRespBy" runat="server" class="date"  CssClass="form-control"></asp:TextBox>
                                                             <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                              </div> 
                                                            <asp:HiddenField ID="hdnCurrDate" runat="server" />                                                                  
                                                                 </div>     
                                                    </div>
                                                    <div class="clearfix"></div>
                                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> <em>*</em>Quote Descr.:</label>
                                                                </div>
                                                            <div class="col-sm-7">   
                                                                <asp:TextBox ID="txtQuoteDesc" runat="server" TextMode="MultiLine" MaxLength="200"  CssClass="form-control"></asp:TextBox>                                                                
                                                                </div>     
                                                </div>

                                                     <div id="dvResponse" runat="server">
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                           
                                                                  <div class="col-sm-5">
                                                                       <label class="form-label label_setting" for="orgcode"> Quote Response: </label></div>
                                                                <div class="col-sm-7">  
                                                                <div style="width: 100%; height: 20px; border: #ccc 1px solid; border-radius: 8px">
                                                                    <div id="dvRespPic" runat="server" style="background-color: green; height: 20px; border-radius: 8px"></div>
                                                                </div>
                                                                    </div>
                                                            </div>     
                                                </div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"><em>*</em>Contact Name:</label>
                                                                </div>
                                                            <div class="col-sm-7">   
                                                                 <asp:TextBox ID="txtContName" runat="server"  CssClass="form-control"></asp:TextBox>                                                                
                                                                </div>     
                                                </div>

                                                     
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> <em>*</em>Contact Type:</label>
                                                                </div>
                                                            <div class="col-sm-7">  
                                                                <asp:DropDownList ID="ddlContType" runat="server"  CssClass="form-control selectpicker" data-live-search="true">
                                                                <asp:ListItem Value="0">Please Select</asp:ListItem>
                                                                <asp:ListItem>Sales</asp:ListItem>
                                                                <asp:ListItem>AR</asp:ListItem>
                                                                <asp:ListItem>AP</asp:ListItem>
                                                                <asp:ListItem>CS</asp:ListItem>
                                                            </asp:DropDownList>                                                                 
                                                                </div>     
                                                </div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 clear-fix">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> <em>*</em>Phone:</label></label>
                                                                </div>
                                                            <div class="col-sm-7"> 
                                                                <asp:TextBox ID="txtContPhone" runat="server" MaxLength="20"  CssClass="form-control"></asp:TextBox>                                                                  
                                                                </div>     
                                                </div>



                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode"> <em>*</em>Email:</label>
                                                                </div>
                                                            <div class="col-sm-7">
                                                                 <asp:TextBox ID="txtEmail" runat="server"  CssClass="form-control"></asp:TextBox>                                                                   
                                                                </div>     
                                                </div>


                                                  
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Fax:</label>
                                                                </div>
                                                            <div class="col-sm-7">  
                                                                 <asp:TextBox ID="txtContFax" runat="server" MaxLength="20"  CssClass="form-control"></asp:TextBox>                                                                 
                                                                </div>     
                                                </div>
                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                         <asp:Button ID="btnAddLine" runat="server" Text="Add New Line" OnClick="AddNewLine" CssClass="btn btn-success" />
                                                        </div> 
                                                </div>
                                                  <div class="clearfix"></div>
                                                <table class="tab">
                                                    <%--<tr>
                                                                <td colspan="4">
                                                                    <small>
                                                                        <label>
                                                                            Organization:&nbsp;<b><%=Session["SOrgName"].ToString() %></b></label></small>
                                                                </td>
                                                            </tr>--%> 
                                                    
                                                    <tr>  
                                                        <td>&nbsp;<%--<asp:LinkButton ID="lnkShowVendResp" runat="server" Text="Vendor Response" OnClick="LoadSupplierResponse"></asp:LinkButton>--%>
                                                        </td>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                  
                                                </table>

                                                <div class="table-responsive"> 
                                                <div id="dvInnerGrid">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvQuoteDetails" runat="server" AutoGenerateColumns="false"
                                                                    Width="900px" Height="180px" OnRowDataBound="gvQuoteDetails_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Line#" ControlStyle-Width="60px" HeaderStyle-Width="60px">
                                                                            <ItemTemplate>
                                                                                <asp:Label ID="lblLineNum" runat="server"></asp:Label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="ItemID" ControlStyle-Width="120px" HeaderStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <asp:DropDownList ID="ddlItemSpec" runat="server" CssClass="form-control selectpicker" data-live-search="true">
                                                                                </asp:DropDownList>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Item Descr" ControlStyle-Width="140px" HeaderStyle-Width="170px">
                                                                            <ItemTemplate>
                                                                                <asp:TextBox ID="txtItemDesc" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Qty" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                            <ItemTemplate>
                                                                                <asp:TextBox ID="txtQty" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="UoM" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                            <ItemTemplate>
                                                                                <asp:TextBox ID="txtUnitOfMsr" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Req. Del. Dt." ControlStyle-Width="90px" HeaderStyle-Width="120px">
                                                                            <ItemTemplate>
                                                                                <asp:TextBox ID="txtRDD" runat="server" CssClass="form-control date" ></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtRDD" Format="MM/dd/yyyy" CssClass=" cal_Theme1"></cc1:CalendarExtender>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Alt. Prod. Allowed" HeaderStyle-Width="120px">
                                                                            <ItemTemplate>
                                                                                <asp:CheckBox ID="chkAltProd" runat="server" />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Action" HeaderStyle-Width="70px">
                                                                            <ItemTemplate>
                                                                                <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" OnClick="DeleteDetail">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                                </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkQuote" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popQuote" runat="server" BackgroundCssClass="modalBackground"
                                    TargetControlID="lnkQuote" PopupControlID="pnlQuote" CancelControlID="btnClose"
                                    DropShadow="false">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlVend" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 50px; width: 1000px">
                                        
                                         <div class="pop-page-title">
                                                 <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">Submit Quotation   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                           <asp:Button ID="btnVendSubmit" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="SubmitQuoteToVendor" />
                                                        <asp:Button ID="btnCloseVend" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                        <asp:Button ID="btnVendReset" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ResetVendList"></asp:Button>
                                                     </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                        <section>

                                            <div class="row">
                                                <div class="divfieldset">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20" style="margin-top:10px;">
                                                     <div id="dvVendMsg" runat="server" class="text-center"> </div>
                                                </div>
                                                
                                                    <div class="clearfix"></div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><em>*</em>Select Vendor BillTo: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:DropDownList ID="ddlVendorBillTo" runat="server" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="LoadShipTosbyBilltos">
                                                            </asp:DropDownList>                                                                  
                                                                 </div>     
                                                    </div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> <em>*</em>Select Vendor ShipTo: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                 <asp:DropDownList ID="ddlVendorShipTo" runat="server" AutoPostBack="true"  CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="LoadContactsByVendorID">
                                                            </asp:DropDownList>                                                                 
                                                                 </div>     
                                                    </div>

                                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><em>*</em>Select Contact:</label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                  <asp:DropDownList ID="ddlContact" runat="server" OnSelectedIndexChanged="ddlContact_SelectedIndexChanged"  CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true">
                                                            </asp:DropDownList>                                                                
                                                                 </div>     
                                                      </div>

                                                     <div class="clearfix"></div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;margin-left: -6px;">
                                                        <asp:Button ID="btnVendAdd" runat="server" Text="Add To List" OnClick="AddVendorToList"  CssClass="btn btn-success pull-right  " />
                                                        </div>

                                                     <table class="tab" width="100%"> 
                                                    <tr>
                                                        <td colspan="4">
                                                            <isx:CoolGridView ID="gvVendList" runat="server" AutoGenerateColumns="false" Width="700px"
                                                                Height="250px">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="VendorBillTo" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                                        <ItemTemplate>
                                                                            <%#Eval("VendorBillTo")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="VendorShipTo" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                                        <ItemTemplate>
                                                                            <%#Eval("VendorShipTo")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Contact PreferName" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <%#Eval("Contact")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Action">
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Remove" OnClick="RemoveVendorFromList">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Remove"/></asp:LinkButton>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                        </td>
                                                    </tr>
                                                </table>
                                                    </div>
                                            </div>
                                             
                                               
                                               
                                            
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkVend" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popVend" runat="server" DropShadow="false" TargetControlID="lnkVend"
                                    PopupControlID="pnlVend" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseVend">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlVendResponse" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 800px">
                                           <div class="pop-page-title">
                                                 <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">Vendor Response   </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                          <asp:Button ID="btnCloseVendResp" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                     </div>
                                                          </div>
                                                     </div> 
                                            </div>

                                        
                                        <section>
                                            <div class="divfieldset">

                                                <div class="row"> 
                                                     <table class="tab" width="70%">
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    Organization:&nbsp;<b>XMS Technologies</b></label></small>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                CompCode:&nbsp;<b>IOSMAC</b></label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    Quote Description:&nbsp;<b><asp:Label ID="lblRespQuoteDescr" runat="server"></asp:Label></b></label></small>
                                                        </td>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    Quote Status:&nbsp;<asp:Label ID="lblRespQuoteStatus" runat="server" Style="font-size: 1.5em"></asp:Label>
                                                                </label>
                                                            </small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <isx:CoolGridView ID="gvVendResp" runat="server" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                OnRowDataBound="gvVendResp_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="Quote#">
                                                                        <ItemTemplate></ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Line#">
                                                                        <ItemTemplate></ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Product">
                                                                        <ItemTemplate></ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Descr">
                                                                        <ItemTemplate></ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty">
                                                                        <ItemTemplate></ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                        </td>
                                                    </tr>
                                                </table>


                                                </div>
                                               
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkVendResponse" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popVendResponse" runat="server" PopupControlID="pnlVendResponse"
                                    DropShadow="false" CancelControlID="btnCloseVendResp" TargetControlID="lnkVendResponse"
                                    BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
        
            <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="../latestdesign/js/modernizr.js"></script>
       
        <%--<script src="../js/html5shiv.js" type="text/javascript"></script>--%>
        <%--<script src="../js/jquery.tools.min.js"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <%--<script src="../js/jquery.ui.min.js"></script>--%>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
        <script src="../js/Ajax.js"></script>
            <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
            <script src="../latestdesign/js/bootstrap-select.min.js"></script>
             <script src="../js/Validation.js" type="text/javascript"></script>
       <%-- <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script>
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            //$(document).ready(function () {
            //    $(function () {
            //        $("#ddlCompCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlQuoteStatus").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlContType").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlStatus").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlQuoteID").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlVendorBillTo").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlVendorBillTo").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlVendorShipTo").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlContact").ufd({ log: true });
            //    });
            //});

            function DoOnAjaxPostback() {
                //setupDatePicker();
                //$('#date').dateinput({
                //    format: 'mm/dd/yyyy',
                //    trigger: false
                //});
                //$(function () {
                //    $("#ddlCompCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlQuoteStatus").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlContType").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlStatus").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlQuoteID").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlVendorBillTo").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlVendorBillTo").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlVendorShipTo").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlContact").ufd({ log: true });
                //});
                //$(function () {
                //    $('#gvQuoteDetails tr').find('select[id*=ddlItemSpec]').ufd({ log: true });
                //});
                //$('#gvQuoteDetails tr').find('input[id*=txtRDD]').dateinput({
                //    format: 'mm/dd/yyyy',
                //    trigger: false
                //});

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

        </script>
            <script>
                $('.input-group.date').datepicker({
                    format: "mm/dd/yyyy",
                    autoclose: true,
                    showOnFocus: true,
                    todayHighlight: true
                });
    </script>
            </div>
            </div>
        </div>
    </form>
</body>
</html>
