<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Invoice.aspx.cs" Inherits="Invoice" %>

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
    <title>ApproveIt - Inovice</title>
    <link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: #0D4F8B;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        #gvInvDetailsjEsCoOl_headerDiv, #gvInvMasterjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvInvDetailsjEsCoOl_headerDiv div table tbody tr th, #gvInvMasterjEsCoOl_headerDiv div table tbody tr th {
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

        #gvInvDetails tbody tr td, #gvInvMaster tbody tr td {
            height: 30px;
            line-height: 27px;
            border: 0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px !important;
        }

        #gvInvDetailsjEsCoOl_mainDiv, #gvInvMasterjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvInvDetailsjEsCoOl_mainDiv {
            width: 87% !important;
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
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
            border: 1px solid #aaaaaa;
        }

        .popover-content {
            min-width: 250px;
        }

        .pono {
        }

        .noPOAccCode {
        }

        .noPoDescr {
        }

        .noPoAmnt {
        }

        .noPoQnty {
        }

        .invQntyRcv {
        }

        .invTaxAmnt1 {
        }

        .invShipCst {
        }

        .invAmnt {
        }

        .invLineNo {
        }

        .lblpolineno {
        }

        .lblpolineseqno {
        }

        .lblpoinvamnt {
        }

        .lblpoinvqty {
        }

        .invcomments {
        }

        .cancelledrow {
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
        <div id="wrapper">
            <div class="row menu-bg">

                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                </div>
                <!-- Main Section -->
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                    <div class=" container-fluid  cd-main-content">
                        <section class="grid_7" style="padding-top: 0px; margin-top: 70px;">
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
                                    <%--<asp:PostBackTrigger ControlID="btnApplyToPO" />--%>
                                    <asp:PostBackTrigger ControlID="btnSaveInv" />
                                    <%--<asp:PostBackTrigger ControlID="btnClearInvData" />--%>
                                </Triggers>
                                <ContentTemplate>
                                    <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                    <div class="main-content grid_4 alpha" style="padding-top: 0px">
                                        <div class="row ">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                                <div class="page-title">Invoice</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                                <div class="pull-right">
                                                    <%if (gvInvDetails.Rows.Count > 0)
                                                      { %>
                                                    <asp:Button ID="btnSaveInv" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveInvoiceDetails" />
                                                    <%} %>
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                                    <%if (Request.QueryString.Count > 0)
                                                      { %>
                                                    <asp:Button ID="btnBack" runat="server" Text="Back" CssClass="btn btn-warning" />
                                                    <%} %>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="clear-fix "></div>

                                        <div class="row ">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <section>
                                                    <div class="divfieldset" style="width: 99%">
                                                        <div id="InvMaster" runat="server">
                                                            <div class="col-xs-12 col-sm-12 col-md-12  col-lg-12 text-center mb20" style="font-weight: bold !important;">
                                                                <div id="dvMsg" runat="server">
                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Vendor:</label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:DropDownList ID="ddlInvVendors" runat="server" data-live-search="true" DataTextField="PreferredVendor"
                                                                        DataValueField="PreferredVendor" CssClass="form-control selectpicker" Width="235px" AutoPostBack="true" OnSelectedIndexChanged="ddlInvVendors_SelectedIndexChanged">
                                                                    </asp:DropDownList>
                                                                    <asp:HiddenField ID="hdnCompCode" runat="server" />
                                                                    <asp:HiddenField ID="hdnOrgID" runat="server" />
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Invoice#:</label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtInvNumber" autocomplete="off" CssClass="form-control" runat="server"></asp:TextBox>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Amount: </label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtInvAmount" autocomplete="off" CssClass="form-control" runat="server"></asp:TextBox>
                                                                </div>
                                                            </div>

                                                            <div class="clear-fix"></div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Invoice Date: </label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <div class="input-group date" data-date-format="mm/dd/yyyy">
                                                                        <asp:TextBox ID="txtInvDate" runat="server" autocomplete="off" CssClass="date form-control"></asp:TextBox>
                                                                        <div class="input-group-addon">
                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Due Date:</label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <div class="input-group date" data-date-format="mm/dd/yyyy">
                                                                        <asp:TextBox ID="txtInvDueDate" runat="server" autocomplete="off" class="date form-control"></asp:TextBox>
                                                                        <div class="input-group-addon">
                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Remaining Allocation:</label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:TextBox ID="txtInvRemAlloc" runat="server" CssClass="form-control"></asp:TextBox>
                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>

                                                            <%-- <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">PO Search:</label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:DropDownList ID="ddlInvPONO" runat="server" data-live-search="true" CssClass="form-control selectpicker" DataTextField="OurRefNo" DataValueField="RequestID"
                                                                        Width="235px">
                                                                    </asp:DropDownList>
                                                                </div>
                                                            </div>--%>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">
                                                                        Upload Invoice:
                                                                <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf." data-original-title="" title=""><span class="infoicon" style="margin-left: -3px !important;"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>

                                                                    </label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:FileUpload ID="fupdInv" runat="server" CssClass="form-control" onchange="javascript:return OnSelect();" Style="border: 1px solid #aaaaaa" Width="250px" />
                                                                </div>
                                                                <div class="message info" id="dvInvFile" runat="server" style="width: 80%">
                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>
                                                            <%--  <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                <asp:Button ID="btnApplyToPO" runat="server" Text="Apply To Invoice" CssClass="btn btn-success pull-left"
                                                                    OnClick="AppendPOInvLine" />
                                                                <%if (gvInvDetails.Rows.Count > 0)
                                                                  { %>

                                                                <asp:Button ID="btnClearInvData" runat="server" Text="Clear All Lines" CssClass="btn btn-warning pull-right"
                                                                    OnClick="ClearInvoiceData" OnClientClick="showProgress()" />

                                                                <%} %>
                                                            </div>--%>
                                                        </div>
                                                        <div id="InvFrmPOMaster" runat="server">
                                                            <table class="table   table-responsive" style="width: 100%">
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <isx:CoolGridView ID="gvInvMaster" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                                Width="100%" Height="200px" OnRowDataBound="gvInvMaster_OnRowDataBound">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderText="VENDOR NAME">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblMstrInvPONO" runat="server" Text='<%#Eval("preferredVendor")%>'></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="INVOICE#">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblMstrInvNO" runat="server" Text='<%#Eval("invNo")%>'></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="AMOUNT">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblMstrInvTotAmnt" runat="server" Text='<%#Eval("totalInvAmt")%>'></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="INVOICE DATE">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblMstrInvDate" runat="server" Text='<%#Eval("invDate")%>'></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="DUE DATE#">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblMstrInvDueDate" runat="server" Text='<%#Eval("dueDate")%>'></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ATTACHMENT">
                                                                                        <ItemTemplate>
                                                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                                ToolTip="Click to view attachments"></asp:LinkButton>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="VIEW">
                                                                                        <ItemTemplate>
                                                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" OnClick="Edit"
                                                                                                Text="Edit" ToolTip="View Invoice"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </isx:CoolGridView>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <br />
                                                        <div class=" ">
                                                            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 " style="padding: 0px;">
                                                                <div class="form-group   has-feedback">
                                                                    <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server" placeholder="Type in vendor name to search.." />
                                                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div style="width: 100%">
                                                            <table class="table   table-responsive" style="width: 100%">
                                                                <tr>
                                                                    <td style="border: 0">
                                                                        <%if (gvInvDetails.Rows.Count > 0)
                                                                          { %>
                                                                        <div>
                                                                            <isx:CoolGridView ID="gvInvDetails" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                                Width="1050px" Height="200px" OnRowDataBound="gvInvDetails_OnRowDataBound" ShowHeader="true" ShowFooter="true">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                                        <HeaderTemplate>
                                                                                            <asp:CheckBox ID="chkHeader" runat="server" />
                                                                                        </HeaderTemplate>
                                                                                        <ItemTemplate>
                                                                                            <asp:CheckBox ID="chk" runat="server" />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="PO#" HeaderStyle-Width="170px" ControlStyle-Width="170px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvPONO" runat="server" Text='<%#Eval("ourRefNo")%>'></asp:Label>
                                                                                            </label>
                                                                                            <div class="pono">
                                                                                                <asp:HiddenField ID="hdnEditPONO" runat="server" Value='<%#Eval("ourRefNo")%>' />
                                                                                            </div>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Line#" HeaderStyle-Width="50px" ControlStyle-Width="50px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvPOLineNo" runat="server" Text='<%#Eval("expLineNo")%>' CssClass="lblpolineno"></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="LineSeq" HeaderStyle-Width="50px" ControlStyle-Width="50px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvPOLineSeq" runat="server" Text='<%#Eval("polineseq")%>' CssClass="lblpolineseqno"></asp:Label>
                                                                                            </label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Account#" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvAccCode" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label>
                                                                                            </label>
                                                                                            <asp:TextBox ID="txtEditNoPoAccCode" runat="server" Visible="false" Width="73px"
                                                                                                Text='<%#Eval("accountCode")%>' CssClass="autosuggest"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvDescr" runat="server"></asp:Label>
                                                                                            </label>
                                                                                            <asp:TextBox ID="txtEditNoPoDescr" runat="server" Visible="false" Width="90px" CssClass="noPoDescr form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Quantity">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvQnty" runat="server" Text='<%#Eval("quantity")%>' CssClass="lblpoinvqty"></asp:Label>
                                                                                            </label>
                                                                                            <asp:TextBox ID="txtEditNoPoQnty" runat="server" Visible="false" Width="40px" Text='<%#Eval("quantity")%>' CssClass="noPoQnty form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Amount" HeaderStyle-Width="75px" ControlStyle-Width="75px">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblEditInvPOAmnt" runat="server" CssClass="lblpoinvamnt"></asp:Label>
                                                                                            </label>
                                                                                            <asp:TextBox ID="txtEditNoPoAmnt" runat="server" Visible="false" Width="50px" CssClass="noPoAmnt form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="InvQty">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEditInvQntyRcv" runat="server" Width="40px" Text='<%#Eval("qtyReceived")%>' CssClass="invQntyRcv form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="TaxAmount">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEditInvTaxAmnt1" runat="server" Width="40px" Text='<%#Eval("taxAmount1")%>' CssClass="invTaxAmnt1v form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ShippingCost">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEditInvShipCst" runat="server" Width="40px" Text='<%#Eval("shippingCost")%>' CssClass="invShipCst form-control"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="InvoiceAmount">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEditInvAmnt" runat="server" Width="40px" Text='<%#Eval("poInvAmount")%>' CssClass="invAmnt form-control"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnCurrInvAmnt" runat="server" Value='<%#Eval("poInvAmount")%>' />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="InvoiceLine#">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEditInvLineNo" runat="server" Width="40px" Text='<%#Eval("invLineNo")%>' CssClass="invLineNo form-control"></asp:TextBox>
                                                                                            <div class="cancelledrow">
                                                                                                <asp:HiddenField ID="hdnRowAdded" runat="server" />
                                                                                            </div>
                                                                                            <asp:HiddenField ID="hdnCancelledRow" runat="server" />
                                                                                            <asp:HiddenField ID="hdnRowCancelFlg" runat="server" Value='<%#Eval("detailsFlag") %>' />
                                                                                            <asp:HiddenField ID="hdnUnitPrice" runat="server" Value='<%#Eval("unitPrice") %>' />
                                                                                            <asp:HiddenField ID="hdnReqID" runat="server" Value='<%#Eval("reqId") %>' />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Comments" HeaderStyle-Width="150px" ControlStyle-Width="120px">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtInvComments" runat="server" CssClass="invcomments form-control" Width="120px"></asp:TextBox>
                                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtInvComments"
                                                                                                MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetInvReason" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                CompletionListItemCssClass="listItem"
                                                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                            </cc1:AutoCompleteExtender>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </isx:CoolGridView>
                                                                        </div>
                                                                        <%} %>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvMisc">
                                                            <asp:HiddenField ID="hdnDispAlert" runat="server" />
                                                            <asp:HiddenField ID="hdnTotInvAmnt" runat="server" />
                                                            <asp:HiddenField ID="hdnMisc" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileName" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileType" runat="server" />
                                                            <asp:HiddenField ID="hdnSelectedVend" runat="server" />
                                                            <asp:HiddenField ID="hdnInitialRem" runat="server" />
                                                            <asp:HiddenField ID="hdnSeqRowIndex" runat="server" />
                                                            <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                            <asp:HiddenField ID="hdnQrystrcnt" runat="server" />
                                                            <asp:HiddenField ID="hdnCurrInvAmnt1" runat="server" />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>

                                    <asp:Panel ID="pnlAlert" runat="server" Style="display: none">
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
                                                            <asp:Button ID="btnYes" runat="server" OnClick="ConfirmChanges" Text="Yes" CssClass="btn btn-success" />
                                                            <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-warning" OnClick="RejectChanges" />
                                                            <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <section>
                                                <div class="divfieldset" style="padding: 27px">
                                                    <small class="alert alert-danger">
                                                        <label>
                                                            <asp:Label ID="lblAlertText" runat="server"></asp:Label></label></small>
                                                    <br />
                                                    <br />
                                                </div>
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                        TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1">
                                    </cc1:ModalPopupExtender>
                                </ContentTemplate>
                            </asp:UpdatePanel>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!--footer-->
    <uc5:footer ID="footer" runat="server" />
    <!--footer-->
    <script src="latestdesign/js/modernizr.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <%--<script src="js/html5shiv.js" type="text/javascript"></script>--%>


    <%--<script src="js/global.js"></script>--%>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
    <script src="latestdesign/js/main.js"></script>

    <%--<script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>


    <script>
        $('.input-group.date').datepicker({
            format: "mm-dd-yyyy",
            autoclose: true,
            showonfocus: true,
            todayhighlight: true,
        });

    </script>

    <script>

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        $(document).ready(function () {
        });

        function DoOnAjaxPostback() {

            $('.selectpicker').selectpicker({
                liveSearch: true,
                showTick: true,
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
        }



        function $1(id) {
            return document.getElementById(id);
        }

        function pageLoad() {
        }

        //Validate InvoiceNo
        function invDetails() {
            var ddl = $1('ddlInvVendors');
            var selVend = (ddl.options[ddl.selectedIndex].text).replace('&', '~');
            var url = 'Invoice.ashx?func=1&invid=' + $1('txtInvNumber').value + '&vend=' + selVend;
            GetInvNo(url, 'GetDetails');
        }

        var currentpageurl = "";
        function GetInvNo(UpdateURL, pagename) {
            if (UpdateURL != "") {
                currentpageurl = pagename;
                MakeAjaxRequest(UpdateURL, UpdateSuccess, false)
            }
        }

        function UpdateSuccess(response) {
            $1('dvMsg').style.color = "Red";
            var ResultType = "";
            ResultType = response.responseText;
            if (currentpageurl == "GetDetails") {
                if (parseInt(ResultType) > 0) {
                    $1('dvMsg').innerHTML = 'Invoice No already exists.';
                    $1('txtInvNumber').value = '';
                    $1('txtInvNumber').focus();
                }
                else {
                    $1('dvMsg').innerHTML = '';
                }
            }
        }

        //Validate Amounts
        function validateInvoiceAmount1(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test($1(id).value) || $1(id).value == '') {
                return true;
            }
        }

        //Assign Amount to remaining amnt
        function CalcRemaining(amnt, rem) {
            if (validateInvoiceAmount1(amnt)) {
                var remAmount;
                try {
                    var totalLineAmt = parseFloat(CalculateTotalInvAmounts());
                    remAmount = parseFloat($1(amnt).value == '' ? '0' : $1(amnt).value) - totalLineAmt;
                }
                catch (err) {
                    remAmount = parseFloat($1(amnt).value == '' ? '0' : $1(amnt).value);
                }
                $1(rem).value = parseFloat(remAmount).toFixed(2);
                $1("hdnInitialRem").value = $1(rem).value;
                $1('dvMsg').innerHTML = "";
            }
            else {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Please enter valid Amount";
            }
        }

        //Calculate Remaining based on InvoiceAmount changes in gridview
        function OnChangeInvAmount(invAmnt, currInvAmnt, totInvAmnt, rem, currRem) {
            if (validateInvoiceAmount1(invAmnt)) {
                $1(totInvAmnt).value = parseFloat(CalculateTotalInvAmounts());
                $1(rem).value = parseFloat($1('txtInvAmount').value == '' ? '0' : $1('txtInvAmount').value) - parseFloat($1(totInvAmnt).value);
                $1('dvMsg').innerHTML = "";
                $1(invAmnt).style.border = '1px solid #ccc';
            }
            else {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Please enter valid Amount";
                $1(invAmnt).style.border = "1px solid Red";
            }
        }

        //Calculate total of InvAmounts in the Invoice grid
        function CalculateTotalInvAmounts() {
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            if (grid.rows.length > 0) {
                for (var i = 0; i < grid.rows.length; i++) {
                    var inputs = grid.rows[i].getElementsByTagName("input");
                    var checkedcount = 0;
                    for (var j = 0; j < inputs.length; j++) {
                        if (inputs[j] != null && inputs[j] != undefined)
                            if (inputs[j].type == "checkbox")
                                if (inputs[j].checked)
                                    checkedcount++;
                    }
                    if (checkedcount > 0)
                        for (var j = 0; j < inputs.length; j++)
                            if (inputs[j].name.indexOf("txtEditInvAmnt") > 1)
                                if (inputs[j].value != "")
                                    total = parseFloat(total) + parseFloat(inputs[j].value);
                }
                //var inputs = grid.getElementsByTagName("input");
                //var chk = grid.getElementsByClassName("chk");
                //var count = 0;
                //for (var i = 0; i < inputs.length; i++) {
                //    if (chk[i].checked) {
                //        if (inputs[i].name.indexOf("txtEditInvAmnt") > 1) {
                //            if (inputs[i].value != "") {
                //                total = parseFloat(total) + parseFloat(inputs[i].value);
                //            }
                //        }
                //    }
                //}
            }
            return total;
        }

        //Validate QtyReceived and differevce between POAmount and InvoiceAmount on InvoiceAmount change
        function ValidateQtyRec(poAmnt, qty, qR, iA, rowIndex, uPr, sC, tX, poNo, clFlg) {
            $1('dvMsg').style.color = "Red";
            var unitPr = $1(uPr).value;
            var qtyRec = $1(qR).value;
            var invAmnt = $1(iA).value == '' ? '0' : $1(iA).value;
            var Initialrem = $1("hdnInitialRem").value;
            var rem = $1("txtInvRemAlloc").value;
            var totInvAmnt = CalculateTotalInvAmounts();
            var shipCst = $1(sC).value;
            var txAmnt = $1(tX).value;
            var grid = $1('<%=gvInvDetails.ClientID %>');
            if (poNo == 'NOPO') {
                var i = parseInt(rowIndex);

                //controls with class name
                var noPoAmntList = $11(grid.id).getElementsByClassName("noPoAmnt");
                var noPoQntyList = $11(grid.id).getElementsByClassName("noPoQnty");

                poAmnt = noPoAmntList[i].value;
                qty = noPoQntyList[i].value;
                if (qty > 0)
                    unitPr = (parseFloat(poAmnt) - parseFloat(txAmnt) - parseFloat(shipCst)) / qty;
                else
                    unitPr = 0;
            }
            var x = parseFloat(Initialrem) - (parseFloat(totInvAmnt) - parseFloat(invAmnt));
            var calAmnt = (parseFloat(qtyRec) * parseFloat(unitPr)) + parseFloat(shipCst) + parseFloat(txAmnt);
            var url = window.location.href;
            if ((url.indexOf('?ir=') != -1) && (invAmnt == '0')) {
                if (grid.rows.length > 0) {
                    $1('btnNo').setAttribute("onclick", "RetainInvAmnt(" + rowIndex + ")");
                    $1('hdnRowIndex').value = rowIndex;
                    DisplayAlert("Making InvoiceAmount 0 deletes the row. Are you sure you want to do it?", "DelRow", "visible", "visible", "hidden", '1');
                }
            }
            else {
                try {
                    $1('btnNo').removeAttribute("onclick");
                }
                catch (err) {
                }
                if (parseFloat(rem) < 0 && (parseFloat(poAmnt) > parseFloat(invAmnt))) {
                    if (clFlg != 'Y') {
                        $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Qty Received";
                        $1(iA).style.border = "1px solid Red";
                        $1(qR).focus();
                        $1(qR).style.border = "1px solid Red";
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (poNo != 'NOPO') {
                            DisplayAlert("Is this final Invoice?", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                    }
                    else {
                        if (calAmnt != parseFloat(invAmnt)) {
                            $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Amount details to match invoice amount";
                            $1(iA).style.border = "1px solid Red";
                            UpdateCancelledRow(rowIndex);
                            $1(iA).focus();
                        }
                    }
                }
                else if (parseFloat(rem) < 0) {
                    $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x;
                    $1(iA).style.border = "1px solid Red";
                }
                else if (parseFloat(poAmnt) > parseFloat(invAmnt)) {
                    if (clFlg != 'Y') {
                        $1('dvMsg').innerHTML = "Please adjust Qty Received";
                        $1(qR).style.border = "1px solid Red";
                        $1(qR).focus();
                        $1(qR).title = "Please adjust Qty Received";
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (poNo != 'NOPO') {
                            DisplayAlert("Is this final Invoice?", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                    }
                    else {
                        if (calAmnt != parseFloat(invAmnt)) {
                            $1('dvMsg').innerHTML = "Please adjust Amount details to match invoice amount";
                            $1(iA).style.border = "1px solid Red";
                            UpdateCancelledRow(rowIndex);
                            $1(iA).focus();
                        }
                    }
                }
                else {
                    $1('dvMsg').innerHTML = "";
                    $1(iA).style.border = "1px solid #ccc";
                    $1(qR).style.border = "1px solid #ccc";
                }
            }
        }

        //Update InvoiceAmnt and QtyReceived of Cancelled row.
        function UpdateCancelledRow(rowIndex) {
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var i = parseInt(rowIndex);

            //controls by class name
            var ponoList = $11(grid.id).getElementsByClassName("pono");
            var poLineNoList = $11(grid.id).getElementsByClassName("lblpolineno");
            var poLineSeqList = $11(grid.id).getElementsByClassName("lblpolineseqno");
            var poAmntList = $11(grid.id).getElementsByClassName("lblpoinvamnt");
            var invAmountList = $11(grid.id).getElementsByClassName("invAmnt");
            var qtyList = $11(grid.id).getElementsByClassName("lblpoinvqty");
            var qtyRecList = $11(grid.id).getElementsByClassName("invQntyRcv");

            var hdnPONOVal = ponoList[i].getElementsByTagName("input");

            for (var j = 0; j < grid.rows.length; j++) {
                var hdnInnerPONOVal = ponoList[j].getElementsByTagName("input");
                if ((hdnInnerPONOVal[j].value == hdnPONOVal[0].value) && (poLineNoList[j].innerHTML == poLineNoList[i].innerHTML) && (poLineSeqList[j].innerHTML == parseInt(poLineSeqList[i].innerHTML) + 1)) {
                    poAmntList[j].innerHTML = parseFloat(parseFloat(poAmntList[i].innerHTML) - parseFloat(invAmountList[i].innerHTML)).toFixed(2);
                    qtyList[j].innerHTML = parseFloat(parseFloat(qtyList[i].innerHTML) - parseFloat(qtyRecList[i].innerHTML)).toFixed(2);
                }
            }
        }

        //Display alert
        function DisplayAlert(alrtText, dispAlrt, IsYBVisible, isNBVisible, isCBVisible, type) {
            $1('lblAlertText').innerHTML = alrtText;
            $1('hdnDispAlert').value = dispAlrt;
            $1('btnYes').style.visibility = IsYBVisible;
            $1('btnNo').style.visibility = isNBVisible;
            try {
                $1('btnClose').style.visibility = isCBVisible;
            }
            catch (err) { }
            if (type == '1')
                $find(Sys.Extended.UI.ModalPopupBehavior, { "CancelControlID": "btnNo", "id": "popAlert" }, null, null, $get("lnkAlert"));
            $find('popAlert').show();
        }

        //Validate negative Remaining Allocation value
        function ValidateInvQtyRec() {
            $1('dvMsg').style.color = "Red";
            if (parseFloat($1('txtInvRemAlloc').value) < 0) {
                $1('dvMsg').innerHTML = "Remaining Allocation is less than zero. Please adjust Invoice amounts.";
                return false;
            }
            else {
                $1('dvMsg').innerHTML = "";
                return true;
            }
        }

        //Validate invoice line numbers
        function ValidateInvLineNo(lineNo) {
            $1('dvMsg').style.color = "Red";
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            if (grid.rows.length > 0) {
                var inputs = grid.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].name.indexOf("txtEditInvLineNo") > 1 && inputs[i] != $1(lineNo)) {
                        if (inputs[i].value == $1(lineNo).value) {
                            total++;
                        }
                    }
                }
            }
            if (total > 0) {
                $1('dvMsg').innerHTML = "Invoice LineNo already exists.";
                $1(lineNo).value = '';
                $1(lineNo).focus();
            }
            else {
                $1('dvMsg').innerHTML = "";
            }
        }

        //Validate input fields in GridView upon clicking Save
        function ValidateNOPOFields() {
            $1('dvMsg').style.color = "Red";
            if (!ValidateInvQtyRec())
                return false;
            var grid = $11('<%=gvInvDetails.ClientID %>');


            var ponoList = $11(grid.id).getElementsByClassName("pono");
            var noPOAccCodeList = $11(grid.id).getElementsByClassName("noPOAccCode");
            var noPoDescrList = $11(grid.id).getElementsByClassName("noPoDescr");
            var noPoAmntList = $11(grid.id).getElementsByClassName("noPoAmnt");
            var noPoQntyList = $11(grid.id).getElementsByClassName("noPoQnty");
            var invQntyRcvList = $11(grid.id).getElementsByClassName("invQntyRcv");
            var invTaxAmnt1List = $11(grid.id).getElementsByClassName("invTaxAmnt1");
            var invShipCstList = $11(grid.id).getElementsByClassName("invShipCst");
            var invAmntList = $11(grid.id).getElementsByClassName("invAmnt");
            var invLineNoList = $11(grid.id).getElementsByClassName("invLineNo");
            var invCommentsList = $11(grid.id).getElementsByClassName("invcomments");
            var poAmntList = $11(grid.id).getElementsByClassName("lblpoinvamnt");
            var cancelledrowList = $11(grid.id).getElementsByClassName("cancelledrow");

            var total = 0;
            var commentsByTotal = 0;
            for (var i = 0; i < grid.rows.length; i++) {
                var hdnCancelledRowVal = cancelledrowList[i].getElementsByTagName("input");
                var hdnPONOVal = ponoList[i].getElementsByTagName("input");
                if (hdnCancelledRowVal[0].value == "") {
                    if (hdnPONOVal[0].value == "NOPO") {
                        if (noPOAccCodeList[i].value == "") {
                            noPOAccCodeList[i].style.border = "1px solid Red";
                            total++;
                        }
                        if (noPoDescrList[i].value == "") {
                            noPoDescrList[i].style.border = "1px solid Red";
                            total++;
                        }
                        if (noPoAmntList[i].value == "") {
                            noPoAmntList[i].style.border = "1px solid Red";
                            total++;
                        }
                        if (noPoQntyList[i].value == "") {
                            noPoQntyList[i].style.border = "1px solid Red";
                            total++;
                        }
                    }
                    if (invQntyRcvList[i].value == "" || invQntyRcvList[i].value == "0") {
                        invQntyRcvList[i].style.border = "1px solid Red";
                        total++;
                    }
                    if (invTaxAmnt1List[i].value == "") {
                        invTaxAmnt1List[i].style.border = "1px solid Red";
                        total++;
                    }
                    if (invShipCstList[i].value == "") {
                        invShipCstList[i].style.border = "1px solid Red";
                        total++;
                    }
                    if (invAmntList[i].value == "" || invAmntList[i].value == "0") {
                        invAmntList[i].style.border = "1px solid Red";
                        total++;
                    }
                    if (invAmntList[i].value == "") {
                        invAmntList[i].style.border = "1px solid Red";
                        total++;
                    }
                    if (parseFloat(invAmntList[i].value) > parseFloat(poAmntList[i].innerHTML)) {
                        invCommentsList[i].style.border = "1px solid Red";
                        invCommentsList[i].scrollIntoView(false);
                        invCommentsList[i].focus();
                        commentsByTotal++;
                    }
                    else {
                        invCommentsList[i].style.border = "1px solid #ccc";
                    }
                }
            }

            if (total > 0) {
                $1('dvMsg').innerHTML = "Please enter required fields.";
                return false;
            }
            else if (commentsByTotal > 0) {
                $1('dvMsg').innerHTML = "Please provide comments as invoice amount is more than PO amount.";
                return false;
            }
            else {
                $1('dvMsg').innerHTML = "";
                return true;
            }
        }

        //Capture Invoice amount upon its focus
        function CaptureInvAmnt(invAmnt) {
            $1('hdnCurrInvAmnt1').value = $1(invAmnt).value;
        }

        //Retain Invoice amount upon cancelling confirmation to delete
        function RetainInvAmnt(index) {
            var i = index;
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var invAmntList = $11(grid.id).getElementsByClassName("invAmnt");

            invAmntList[i].value = $1('hdnCurrInvAmnt1').value;
            $1('hdnMisc').value = '0';
        }

        //Fill DueDate
        window.setInterval(function () {
            setdate();
        }, 1000);

        function setdate() {
            if (document.getElementById('txtInvDueDate').value == '' && document.getElementById('txtInvDate').value != '') {
                var invDate = new Date($('#<%= txtInvDate.ClientID %>').val());
                var numberOfDaysToAdd = 30;
                invDate.setDate(invDate.getDate() + numberOfDaysToAdd);

                var dd = invDate.getDate();
                var mm = invDate.getMonth() + 1;
                var y = invDate.getFullYear();

                if (dd < 10)
                    dd = '0' + dd;
                if (mm < 10)
                    mm = '0' + mm;
                var someFormattedDate = mm + '/' + dd + '/' + y;
                document.getElementById('txtInvDueDate').value = someFormattedDate;
            }


        }

        //Validate Uploaded filetype
        function OnSelect() {
            $1('dvMsg').style.color = "Red";
            if (!(document.getElementById('fupdInv').value.toLowerCase().indexOf('.png') > 0) && !(document.getElementById('fupdInv').value.toLowerCase().indexOf('.jpg') > 0)
            && !(document.getElementById('fupdInv').value.toLowerCase().indexOf('.jpeg') > 0) && !(document.getElementById('fupdInv').value.toLowerCase().indexOf('.tif') > 0)
            && !(document.getElementById('fupdInv').value.toLowerCase().indexOf('.pdf') > 0)) {
                document.getElementById('fupdInv').value = '';
                document.getElementById('dvMsg').innerHTML = 'Please upload files of type .png, .jpg, .jpeg, .tif or .pdf';
            }
            else
                document.getElementById('dvMsg').innerHTML = '';
        }

        //Redirect Page after saving invoice
        function redirectPage() {
            var ddl = $1('ddlInvVendors');
            var selVend1 = (ddl.options[ddl.selectedIndex].text).replace('&', '~');
            window.location = 'ViewInvc.aspx?vend=' + selVend1;
        }

        function searchAcc(AccCode) {
            var accsplit = document.getElementById(AccCode).value;
            var sp = accsplit.split("-");
            $(".autosuggest").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ViewInvc.aspx/searchAccCode",
                        data: "{'accCode':'" + sp + "','OrgID':'" + document.getElementById('hdnOrgID').value + "','CompCode':'" + document.getElementById('hdnCompCode').value + "'}",
                        dataType: "json",
                        success: function (data) {
                            response(data.d);
                        },
                        error: function (result) {
                            dvMsg.innerHTML = "An error occurred while fetching the data. Please press Reset and try again.";
                        }
                    });
                }
            });
        }

        //PO search for invoice
        function Filter(Obj) {
            var grid = document.getElementById('gvInvDetails');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.focus();
        }
        //PO search for invoice

        function showButtons(msg) {
        };

    </script>
    <script>
        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    </script>

</body>
</html>
