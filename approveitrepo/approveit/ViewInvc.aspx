<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ViewInvc.aspx.cs" Inherits="ViewInvc" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="keywords" Src="Controls/jobsitekeywords.ascx" %>
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
    <title>ApproveIt - View Invoice</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>

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
                    margin-top: -5px;
                    border-width: 9px;
                    border-style: solid;
                    border-color: transparent #f7f7f7 transparent transparent;
                }

            .tooltip:hover .tooltiptext {
                visibility: visible;
            }





        /*TOOL TIP CSS END*/


        .gvInvDetailsjEsCoOl_mainDiv {
            width: 79% !important;
            overflow: auto !important;
        }





        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground2 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
                color: Red;
            }

        #gvInvDetailsjEsCoOl_headerDiv div table tbody tr th, #gvDetailsjEsCoOl_headerDiv div table tbody tr th {
            background-color: #3B6AA0;
        }

        #gvInvDetailsjEsCoOl_headerDiv div table tbody tr th, #gvDetailsjEsCoOl_headerDiv div table tbody tr th {
            height: 30px;
            line-height: 20px;
            color: white;
            text-align: center;
            font-family: "Open Sans", sans-serif;
            font-size: 13px !important;
            font-weight: normal;
            border: 0.5px solid rgba(0,0,0,0.1);
            padding: 0px 5px;
        }

        #gvInvDetails tbody tr td, #gvDetails tbody tr td {
            height: 30px;
            line-height: 27px;
            border-bottom: 0.5px solid rgba(0,0,0,0.1);
            text-align: center !important;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px !important;
        }

        #gvInvDetailsjEsCoOl_mainDiv, #gvDetailsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvInvDetails {
            width: 100%;
            overflow: auto;
        }


        #gvDetails TR TD, #gvDetails TR TH, #gvDetails TR TH div, #gvDetails TR TD div {
            overflow: visible;
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

            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                <uc8:leftmenu ID="leftmenu" runat="server" />
            </div>
            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                <div class=" container-fluid  cd-main-content">

                    <section class="main-section grid_7" style="padding-top: 0px; margin-top: 70px;">
                        <asp:HiddenField ID="hdnExp" runat="server" />
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
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style='display: none' />
                                <div class="main-content grid_4 alpha">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div class="page-title">View Invoice</div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div class="pull-right">
                                                <asp:Button ID="Batchdetails" runat="server" CssClass="btn btn-info" OnClick="BatchData" Text="BatchDetails" />
                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="btnReloadData_Click" />
                                            </div>
                                        </div>
                                    </div>
                                    <section>
                                        <div class="divfieldset">
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <label class="form-label label_setting" for="orgcode">Select Vendor: </label>
                                                </div>
                                                <div class="col-sm-7">
                                                    <asp:DropDownList ID="ddlPreVendor" runat="server" DataTextField="PreferredVendor"
                                                        DataValueField="PreferredVendor" AutoPostBack="True" CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="ddlPreVendor_SelectedIndexChanged"
                                                        Width="200px">
                                                    </asp:DropDownList>
                                                </div>
                                            </div>
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <%if (ddlInv.Items.Count > 0)
                                                  { %>
                                                <div id="dvInvNo" runat="server">

                                                    <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Select Invoice No.:</label>
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <asp:DropDownList ID="ddlInv" CssClass="form-control selectpicker" runat="server" AutoPostBack="true" DataValueField="invNo"
                                                            DataTextField="invNo" Width="170px" data-live-search="true" OnSelectedIndexChanged="ddlInv_SelectedIndexChanged">
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <%} %>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <label class="form-label label_setting" for="orgcode">Invoice From:</label>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index: 0">
                                                        <asp:TextBox ID="txtFrom" runat="server" CssClass="date form-control" Width="100px"></asp:TextBox>
                                                        <div class="input-group-addon">
                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <label class="form-label label_setting" for="orgcode">Invoice To:</label>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index: 0">
                                                        <asp:TextBox ID="txtTo" runat="server" CssClass="date form-control" Width="100px"></asp:TextBox>
                                                        <div class="input-group-addon">
                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="btn btn-success" OnClick="btnGo_click" />
                                                    <asp:HiddenField ID="hdnCompCode" runat="server" />
                                                    <asp:HiddenField ID="hdnOrgID" runat="server" />
                                                </div>
                                                <div class="col-sm-7">
                                                    <asp:Button ID="btnSaveInvStatus" runat="server" Text="Set Ready for Pymt" CssClass="btn btn-success" OnClick="btnSaveInvStatus_Click" />
                                                </div>
                                            </div>
                                            <div class="clearfix">
                                            </div>
                                            <b>
                                                <div id="dvMainMsg" runat="server" style="display: none"></div>
                                            </b>
                                            <br />
                                            <isx:CoolGridView AllowPaging="false" ID="gvDetails" runat="server" AutoGenerateColumns="false"
                                                Width="95%" Height="250px" GridLines="None" OnRowDataBound="gvDetails_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                        <ItemTemplate>
                                                            <img id="imgItemRowSelect" alt="" style="cursor: pointer" src="images/downarrow.jpg" onclick="onImgclick(this, <%# Container.DataItemIndex %>)" />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                        <HeaderTemplate>
                                                            <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this);" />
                                                            <label><small>Ready for Pymt</small></label>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this)" />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="InvoiceNO" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkInvNO" runat="server" Text="InvoiceNO" CommandArgument="invNo"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:LinkButton ID="lnkInvEdit" runat="server" CommandArgument="test" Text='<%#Eval("invNo")%>'
                                                                    OnClick="Edit" Font-Bold="false" Font-Underline="true" CssClass="detailrows"></asp:LinkButton></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Vendor" HeaderStyle-Width="230px" ControlStyle-Width="230px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkVendor" runat="server" Text="Vendor" CommandArgument="PreferredVendor"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label class="detailrowsVend"><%#Eval("preferredVendor")%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="InvDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("invDate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="DueDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("dueDate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField>
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkActAmount" runat="server" Text="InvAmount" CommandArgument="totalInvAmt"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("totalInvAmt")%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="PostDate">
                                                        <ItemTemplate>
                                                            <label><%#Convert.ToDateTime(Eval("postdate")).ToShortDateString()%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Attachment">
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblAttDwnld" runat="server"></asp:Label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="View">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" Text="Edit"
                                                                OnClick="Edit" ToolTip="View Details"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                            <asp:HiddenField ID="hdndueDate" runat="server" Value='<%#Eval("dueDate") %>' />
                                                            <asp:HiddenField ID="hdnInvNo" runat="server" Value='<%#Eval("invNo") %>' />
                                                            <asp:HiddenField ID="hdnInvDate" runat="server" Value='<%#Eval("invDate") %>' />
                                                            <asp:HiddenField ID="hdnAmount" runat="server" Value='<%#Eval("totalInvAmt") %>' />
                                                            <asp:HiddenField ID="hdnPrefVendor" runat="server" Value='<%# Eval("preferredVendor") %>' />
                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%# Eval("invPath") %>' />
                                                            <asp:HiddenField ID="hdnInvPostDate" runat="server" Value='<%#Convert.ToDateTime(Eval("postdate")).ToShortDateString()%>' />
                                                            <asp:HiddenField ID="hdnStatus" runat="server" Value='<%# Eval("Comments") %>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 500px">
                                                        <label>No Invoices to display within the date range.</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                        </div>
                                        <asp:Panel ID="pnlEditInv" runat="server" Style="display: none">
                                            <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; width: 1100px;">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                <div id="dvAddFiscalCal">Invoice</div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <%if (gvInvDetails.Rows.Count > 0)
                                                                  { %>
                                                                <asp:Button ID="btnSaveInv" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveInvoiceDetails" />
                                                                <%} %>
                                                                <asp:Button ID="btnReloadEditData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section style="padding: 20px;">
                                                    <div class="divfieldset" style="height: 400px; overflow-y: auto; overflow-x: hidden">
                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10">
                                                            <div id="dvMsg" runat="server" style="text-align: center; font-weight: bold; display: none">
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Vendor Name:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtVendor" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Invoice No: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtInvNumber" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Amount: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtInvAmount" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Posted Date:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index: 0">
                                                                    <asp:TextBox ID="txtInvPostedDate" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                    <div class="input-group-addon">
                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Invoice Date:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index: 0">
                                                                    <asp:TextBox ID="txtInvDate" runat="server" CssClass="form-control" autocomplete="off" class="date"></asp:TextBox>
                                                                    <div class="input-group-addon">
                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Due Date:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index: 0">
                                                                    <asp:TextBox ID="txtInvDueDate" runat="server" CssClass="form-control" autocomplete="off" class="date"></asp:TextBox>
                                                                    <div class="input-group-addon">
                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Remaining Allocation:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtInvRemAlloc" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" id="DvBatch" runat="server">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Batch ID:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtBatchcnt" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <%-- <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">PO Search:  </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlInvPONO" CssClass="form-control selectpicker" data-live-search="true" runat="server" DataTextField="OurRefNo" DataValueField="RequestID"
                                                                    Width="235px">
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>--%>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">
                                                                    Upload Invoice:

                                                                   <a href="#" data-toggle="popover" data-trigger="hover" class="tooltip" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf." data-original-title="" title="">
                                                                       <span class="infoicon "><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                                                                       <span class="tooltiptext">File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf.</span>
                                                                   </a>
                                                                </label>
                                                            </div>
                                                            <div class="col-sm-7" style="display: inline-flex">
                                                                <cc1:AsyncFileUpload ID="fupdInv" runat="server"
                                                                    UploaderStyle="Traditional" CssClass="form-control" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" Width="250px" />
                                                                <div style="float: left; padding-left: 0.5em">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="message info" id="dvInvFile" runat="server">
                                                                <asp:Label ID="lblInvFiileDownload" runat="server"></asp:Label>
                                                            </div>

                                                            <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                            </asp:Label>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <%-- <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20">
                                                            <asp:Button ID="btnApplyToPO" runat="server" Text="Apply To Invoice" CssClass="btn btn-success"
                                                                OnClick="AppendPOInvLine" />
                                                        </div>--%>
                                                        <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 " style="padding: 0px;">
                                                            <div class="form-group   has-feedback">
                                                                <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server" placeholder="Type in vendor name to search.." />
                                                                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                            </div>

                                                        </div>

                                                        <div class="clearfix"></div>
                                                        <div class="table-responsive">
                                                            <table class="table table-condensed">
                                                                <tr>
                                                                    <td>
                                                                        <%if (gvInvDetails.Rows.Count > 0)
                                                                          { %>
                                                                        <isx:CoolGridView ID="gvInvDetails" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                            Height="220px" OnRowDataBound="gvInvDetails_OnRowDataBound" CellPadding="30" Width="1000px"
                                                                            CellSpacing="30">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:CheckBox ID="chkHeader" runat="server" />
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chk" runat="server" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="PO#" ControlStyle-Width="100px" HeaderStyle-Width="200px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPONO" runat="server" Text='<%#Eval("ourRefNo")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:HiddenField ID="hdnEditPONO" runat="server" Value='<%#Eval("ourRefNo")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="POLine#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOLineNo" runat="server" Text='<%#Eval("expLineNo")%>'></asp:Label>
                                                                                        </label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="POLineSeq" ControlStyle-Width="100px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOLineSeq" runat="server" Text='<%#Eval("polineseq")%>'></asp:Label>
                                                                                        </label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Account#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvAccCode" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoAccCode" runat="server" Visible="false" Text='<%#Eval("accountCode")%>'
                                                                                            CssClass="autosuggest"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Description" ControlStyle-Width="90px" HeaderStyle-Width="120px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvDescr" runat="server"></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoDescr" runat="server" Visible="false"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Amount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvPOAmnt" runat="server"></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoAmnt" runat="server" Visible="false"></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Quantity" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditInvQnty" runat="server" Text='<%#Eval("quantity")%>'></asp:Label>
                                                                                        </label>
                                                                                        <asp:TextBox ID="txtEditNoPoQnty" runat="server" Visible="false" Text='<%#Eval("quantity")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvQty" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvQntyRcv" runat="server" Text='<%#Eval("qtyReceived")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="TaxAmount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvTaxAmnt1" runat="server" Text='<%#Eval("taxAmount1")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="ShippingCost" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvShipCst" runat="server" Text='<%#Eval("shippingCost")%>'></asp:TextBox>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvoiceAmount" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvAmnt" runat="server" Text='<%#Eval("poInvAmount")%>'></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnCurrInvAmnt" runat="server" Value='<%#Eval("poInvAmount")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="InvoiceLine#" ControlStyle-Width="70px" HeaderStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtEditInvLineNo" runat="server" Text='<%#Eval("invLineNo")%>'></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnCancelledRow" runat="server" />
                                                                                        <asp:HiddenField ID="hdnRowCancelFlg" runat="server" Value='<%#Eval("detailsFlag") %>' />
                                                                                        <asp:HiddenField ID="hdnUnitPrice" runat="server" Value='<%#Eval("unitPrice") %>' />
                                                                                        <asp:HiddenField ID="hdnReqID" runat="server" Value='<%#Eval("reqId") %>' />
                                                                                        <%--<asp:HiddenField ID="hdnRequestID" runat="server" Value='<%#Eval("requestId") %>' />--%>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </isx:CoolGridView>
                                                                        <%} %>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvMisc">
                                                            <asp:HiddenField ID="hdnDispAlert" runat="server" />
                                                            <asp:HiddenField ID="hdnTotInvAmnt" runat="server" />
                                                            <asp:HiddenField ID="hdnMisc" runat="server" />
                                                            <asp:HiddenField ID="hdnCurrRemaining" runat="server" />
                                                            <asp:HiddenField ID="hdnIsFileAttached" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileName" runat="server" />
                                                            <asp:HiddenField ID="hdnInvFileType" runat="server" />
                                                            <asp:HiddenField ID="hdnSelectedVend" runat="server" />
                                                            <asp:HiddenField ID="hdnInitialRem" runat="server" />
                                                            <asp:HiddenField ID="hdnSeqRowIndex" runat="server" />
                                                            <asp:HiddenField ID="hdnAccessedFrom" runat="server" />
                                                            <asp:HiddenField ID="hdnCurrInvAmnt1" runat="server" />
                                                            <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkInv" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popInv" runat="server" PopupControlID="pnlEditInv" DropShadow="false"
                                            TargetControlID="lnkInv" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                        </cc1:ModalPopupExtender>
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
                                                            <div class="pull-right mt10">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="ConfirmChanges" Text="Yes" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-info" OnClick="RejectChanges" />
                                                                <asp:Button ID="btnAlertclose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <section style="padding: 25px">
                                                    <small>
                                                        <label class="alert alert-danger">
                                                            <asp:Label ID="lblAlertText" runat="server"></asp:Label></label></small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground2">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
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

    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/main.js"></script>
    <%--  <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script>
        $('.input-group.date').datepicker({
            format: "mm-dd-yyyy",
            autoclose: true,
            showonfocus: true,
            todayhighlight: true,
        });

    </script>
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
                //for (var i = 0; i < inputs.length; i++) {
                //    if (inputs[i].name.indexOf("txtEditInvAmnt") > 1) {
                //        if (inputs[i].value != "") {
                //            total = parseFloat(total) + parseFloat(inputs[i].value);
                //        }
                //    }
                //}
            }
            return total;
        }

        //Validate QtyReceived and differevce between POAmount and InvoiceAmount on InvoiceAmount change
        function ValidateQtyRec(poAmnt, qty, qR, iA, rowIndex, uPr, sC, tX, poNo, clFlg, oldInvAmnt) {
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
                var i = parseInt(rowIndex) + 2;
                if (i <= 9) {
                    i = '0' + i;
                }
                poAmnt = $1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').value;
                qty = $1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').value;
                if (qty > 0)
                    unitPr = (parseFloat(poAmnt) - parseFloat(txAmnt) - parseFloat(shipCst)) / qty;
                else
                    unitPr = 0;
            }
            var x = parseFloat(Initialrem) - (parseFloat(totInvAmnt) - parseFloat(invAmnt));
            var calAmnt = (parseFloat(qtyRec) * parseFloat(unitPr)) + parseFloat(shipCst) + parseFloat(txAmnt);
            var url = window.location.href;
            if (invAmnt == '0') {
                if (grid.rows.length > 0) {
                    $1('btnNo').setAttribute("onclick", "RetainInvAmnt(" + rowIndex + ")");
                    $1('hdnRowIndex').value = rowIndex;
                    if (grid.rows.length > 2)
                        DisplayAlert("Making InvoiceAmount 0 deletes the row. Are you sure you want to do it?", "DelRow", "visible", "visible", "hidden", '1');
                    else {
                        $1(iA).value = oldInvAmnt;
                        $1('dvMsg').innerHTML = "You cannot delete single invoice.";
                    }
                }
            }
            else {
                try {
                    $1('btnNo').removeAttribute("onclick");
                }
                catch (err) {
                }
                if (parseFloat(rem) < 0 && (parseFloat(poAmnt) > parseFloat(invAmnt))) {
                    if (clFlg != '1') {
                        $1('dvMsg').innerHTML = "Remaining Allocation can not be -ve,Please adjust invoice amount and Qty Received";
                        //                        $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Qty Received";
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
                            $1('dvMsg').innerHTML = "Please adjust Amount details to match invoice amount";
                            //                            $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x + " and please adjust Amount details to match invoice amount";
                            $1(iA).style.border = "1px solid Red";
                            UpdateCancelledRow(rowIndex);
                            $1(iA).focus();
                        }
                    }
                }
                else if (parseFloat(rem) < 0) {
                    $1('dvMsg').innerHTML = "Remaining Allocation can not be -ve,Please adjust invoice amount.";
                    //                    $1('dvMsg').innerHTML = "You cannot enter Invoice Amount more than " + x;

                    $1(iA).style.border = "1px solid Red";
                }
                else if (parseFloat(poAmnt) > parseFloat(invAmnt)) {
                    if (clFlg != '1') {
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
            var i = parseInt(rowIndex) + 2;
            if (i <= 9) {
                i = '0' + i;
            }
            var poNo = $1(grid.id + '_ctl' + i + '_lblEditInvPONO').innerHTML;
            var poLineNo = $1(grid.id + '_ctl' + i + '_lblEditInvPOLineNo').innerHTML;
            var poLineSeq = $1(grid.id + '_ctl' + i + '_lblEditInvPOLineSeq').innerHTML;
            var poAmnt = $1(grid.id + '_ctl' + i + '_lblEditInvPOAmnt').innerHTML;
            var invAmnt = $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value;
            var qty = $1(grid.id + '_ctl' + i + '_lblEditInvQnty').innerHTML;
            var qtyRec = $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value;
            for (var j = 2; j <= grid.rows.length; j++) {
                if (j <= 9) {
                    j = '0' + j;
                }
                if (($1(grid.id + '_ctl' + j + '_lblEditInvPONO').innerHTML == poNo) && ($1(grid.id + '_ctl' + j + '_lblEditInvPOLineNo').innerHTML == poLineNo) && ($1(grid.id + '_ctl' + j + '_lblEditInvPOLineSeq').innerHTML == parseInt(poLineSeq) + 1)) {
                    $1(grid.id + '_ctl' + j + '_lblEditInvPOAmnt').innerHTML = parseFloat(parseFloat(poAmnt) - parseFloat(invAmnt)).toFixed(2);
                    $1(grid.id + '_ctl' + j + '_lblEditInvQnty').innerHTML = parseFloat(parseFloat(qty) - parseFloat(qtyRec)).toFixed(2);
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
                $1('btnAlertclose').style.visibility = isCBVisible;
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
                $1('dvMsg').innerHTML = "InvoiceLineNo already exists.";
                $1(lineNo).value = '';
                $1(lineNo).focus();
            }
            else {
                $1('dvMsg').innerHTML = "";
            }
        }

        //Validate input fields in Inoice details GridView upon clicking Save
        function ValidateNOPOFields() {
            $1('dvMsg').style.color = "Red";
            if (!ValidateInvQtyRec())
                return false;
            var grid = $1('<%=gvInvDetails.ClientID %>');
            var total = 0;
            for (var i = 2; i <= grid.rows.length; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($1(grid.id + '_ctl' + i + '_hdnEditPONO').value == "NOPO") {
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoAccCode').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoAccCode').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoDescr').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoDescr').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoAmnt').style.border = "1px solid Red";
                        total++;
                    }
                    if ($1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').value == "") {
                        $1(grid.id + '_ctl' + i + '_txtEditNoPoQnty').style.border = "1px solid Red";
                        total++;
                    }
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvTaxAmnt1').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvTaxAmnt1').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvShipCst').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvShipCst').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').style.border = "1px solid Red";
                    total++;
                }
                if ($1(grid.id + '_ctl' + i + '_txtEditInvLineNo').value == "") {
                    $1(grid.id + '_ctl' + i + '_txtEditInvLineNo').style.border = "1px solid Red";
                    total++;
                }
            }
            if (total > 0) {
                $1('dvMsg').innerHTML = "Please enter required fields.";
                return false;
            }
            else {
                $1('dvMsg').innerHTML = "";
            }
        }

        //Capture Invoice amount upon its focus
        function CaptureInvAmnt(invAmnt) {
            $1('hdnCurrInvAmnt1').value = $1(invAmnt).value;
        }

        //Retain Invoice amount upon cancelling confirmation to delete
        function RetainInvAmnt(index) {
            var i = index + 2;
            if (i < 9) {
                i = '0' + i;
            }
            var grid = $1('<%=gvInvDetails.ClientID %>');
            $1(grid.id + '_ctl' + i + '_txtEditInvAmnt').value = $1('hdnCurrInvAmnt1').value;
            $1('hdnMisc').value = '0';
        }

        function RetainPop() {
            if (parseFloat($1('txtInvRemAlloc').value) != 0) {
                $1('dvMsg').style.color = "Red";
                $1('dvMsg').innerHTML = "Remaining Allocation should be equal to zero.";
                return false;
            }
            else {
                $find('popInv').hide();
            }
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

        //toggle details row upon image click
        function onImgclick(img, index) {
            var grid = $11('<%=gvDetails.ClientID %>');
            getDetailsDataOnImgClick(img, index, grid);
        }
        //toggle details row upon image click

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


        /*Show/Hide Save invoice status buttons*/
        function showButtons(visibleParam) {
            //$11('btnSaveInvStatus').style.display = visibleParam;
        }
        /*Show/Hide Save invoice status buttons*/

    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
-->
    <script type="text/javascript">
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
</body>
</html>
