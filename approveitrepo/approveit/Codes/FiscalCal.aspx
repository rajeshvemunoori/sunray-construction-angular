<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FiscalCal.aspx.cs" Inherits="Codes_FiscalCal" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
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
    <title>ApproveIt - Fiscal Calendar Maintenance</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <%--<link rel="stylesheet" href="../latestdesign/css/reset.css">--%>
    <link href="../latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">

    <style>
        .panel-group {
            z-index: 22;
        }

        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .lnk {
            color: #0D4F8B;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px;
            background-color: Black;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvFCjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvFCjEsCoOl_headerDiv div table tbody tr th {
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

        gvFC #gvFC tbody tr td {
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

        #gvFCjEsCoOl_mainDiv {
            width: 500px;
            height: 200px;
            overflow: hidden;
        }

        #gvFC TR TD, #gvFC TR TH, #gvFC TR TH div, #gvFC TR TD div {
            overflow: visible;
        }

        .date {
            width: 100% !important;
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
                line-height: 27px;
                color: white;
                text-align: center;
                font-family: "Open Sans", sans-serif;
                font-size: 13px !important;
                font-weight: normal;
                border: 0.5px solid rgba(0,0,0,0.1);
                padding: 0px 5px;
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
                line-height: 27px;
                color: white;
                text-align: center;
                font-family: "Open Sans", sans-serif;
                font-size: 13px !important;
                font-weight: normal;
                border: 0.5px solid rgba(0,0,0,0.1);
                padding: 0px 5px;
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

        .pnlCSS {
            /* font-weight: bold;*/
            cursor: pointer;
            border: solid 1px #c0c0c0;
            width: 99%;
            height: 30px;
            background-color: #e8edfc;
            margin-bottom: 5px;
        }

        .pnlColl {
            border: 1px solid #cadcea;
            /*background: #e1f2fc;
            background: -webkit-gradient(linear, left top, left bottom, from(#e1f2fc), to(#cae9fd));
            background: -moz-linear-gradient(top, #e1f2fc, #cae9fd);
            -pie-background: linear-gradient(top, #e1f2fc, #cae9fd);*/
            color: #225b86;
            text-shadow: 0 1px 0 #fff;
        }

        .tblRpt {
            width: 50%;
        }

            .tblRpt tr td {
                /*padding: 5px;*/
                border: 1px solid #ccc;
                padding: 4px 3px;
            }

                .tblRpt tr td input[type=text], .tblRpt tr td label {
                    /*margin: 5px;*/
                    /*border: 1px solid #ccc;*/
                }

            .tblRpt tr:nth-child(even) {
                background-color: #e8edfc;
            }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">

            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                <uc8:leftmenu ID="leftmenu" runat="server" />
            </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px; padding-bottom: 100px;">
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
                                <div class="main-content grid_4 alpha" style="padding-top: 0px">

                                    <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div class="page-title"><span>Fiscal Calendar</span></div>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div class="pull-right">
                                                <%--<asp:Button ID="btnAdd" runat="server" Text="Add Calendar" CssClass="btn btn-success" OnClick="AddCalendar" />--%>
                                                <asp:Button ID="btnSaveNew" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveCalendar"></asp:Button>&nbsp;
                                                <asp:Button ID="btnCopyFromComp" runat="server" Text="Copy From CompCode" CssClass="btn btn-info" OnClick="CopyFromComp" />
                                                <asp:Button ID="btnCopyFromYear" runat="server" Text="Copy From Another Year" CssClass="btn btn-info" OnClick="CopyFromYear" />
                                                <asp:Button ID="btnUploadCal" runat="server" Text="Upload Calendar" CssClass="btn btn-info" OnClick="UploadCalendar" />
                                                <%--<asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning pull-right" OnClick="ReloadData" />--%>
                                            </div>
                                        </div>
                                    </div>

                                    <section>
                                        <div class="divfieldset">
                                            <div class="row ">
                                                <div class="text-center text-bold col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20">
                                                    <asp:Label ID="lblHelp" runat="server"></asp:Label>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Company Code: </label>
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <asp:DropDownList ID="ddlCompCode" runat="server" data-live-search="true" CssClass="form-control selectpicker" DataTextField="BusinessType" DataValueField="CompCode"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" Width="200px">
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                    <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Show Fiscal Calendar for the year: </label>
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <asp:DropDownList ID="ddlYear" runat="server" data-live-search="true" CssClass="form-control selectpicker" OnSelectedIndexChanged="GetFiscalCalendarByYear"
                                                            AutoPostBack="true">
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>

                                                <div class="clearfix"></div>

                                                <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20">
                                                    <%--<div class="pull-left">
                                                        <asp:Button ID="btnModCal" runat="server" Text="Modify Calendar" CssClass="btn btn-info "
                                                            OnClick="ModifyCalendar" />
                                                    </div>--%>
                                                </div>

                                                <div class="clearfix"></div>
                                                <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                    <asp:HiddenField ID="hdnCalType" runat="server" />
                                                    <div id="dvWeeklyFC" runat="server" style="overflow-y: scroll; overflow-x: hidden; height: 370px;">
                                                        <asp:Repeater ID="rptFiscal" runat="server" OnItemDataBound="rptFiscal_ItemDataBound">
                                                            <ItemTemplate>
                                                                <asp:Panel ID="pnlClick" runat="server" CssClass="pnlCSS">
                                                                    <div class="pnlColl">
                                                                        <div style="float: left; padding: 5px">
                                                                            <label>
                                                                                <asp:Label ID="lblRptMonth" runat="server"></asp:Label></label>
                                                                        </div>
                                                                        <div style="float: right; padding: 5px">
                                                                            <asp:Image ID="imgArrows" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </asp:Panel>
                                                                <asp:Panel ID="pnlCollapsable" runat="server" Style="padding-bottom: 5px;">
                                                                    <table class="tblRpt">
                                                                        <tr>
                                                                            <td style="width: 20%">
                                                                                <label>Week1</label>
                                                                                <asp:HiddenField ID="hdnCalendarID100" runat="server" />
                                                                            </td>
                                                                            <td style="width: 40%">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptFromDate100" runat="server" class="form-control date" placeholder="From Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>


                                                                            </td>
                                                                            <td style="width: 40%">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptToDate100" runat="server" class="form-control date" placeholder="To Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                                <%--<cc1:CalendarExtender ID="CalendarExtender3" runat="server" TargetControlID="txtRptToDate100" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>--%>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>Week2</label><asp:HiddenField ID="hdnCalendarID200" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptFromDate200" runat="server" class="form-control" placeholder="From Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptToDate200" runat="server" class="form-control" placeholder="To Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                                <%-- <cc1:CalendarExtender ID="CalendarExtender5" runat="server" TargetControlID="txtRptToDate200" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>--%>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>Week3</label><asp:HiddenField ID="hdnCalendarID300" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptFromDate300" runat="server" class="form-control" placeholder="From Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptToDate300" runat="server" class="form-control" placeholder="To Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                                <%--<cc1:CalendarExtender ID="CalendarExtender6" runat="server" TargetControlID="txtRptToDate300" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>--%>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>Week4</label><asp:HiddenField ID="hdnCalendarID400" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptFromDate400" runat="server" class="form-control" placeholder="From Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptToDate400" runat="server" class="form-control" placeholder="To Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                                <%-- <cc1:CalendarExtender ID="CalendarExtender8" runat="server" TargetControlID="txtRptToDate400" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>--%>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <label>Week5</label><asp:HiddenField ID="hdnCalendarID500" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptFromDate500" runat="server" CssClass="form-control" placeholder="From Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                            <td>
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtRptToDate500" runat="server" CssClass="form-control" placeholder="To Date"></asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                                <%--<cc1:CalendarExtender ID="CalendarExtender10" runat="server" TargetControlID="txtRptToDate500" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>--%>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </asp:Panel>
                                                                <cc1:CollapsiblePanelExtender ID="ccp" runat="server" CollapseControlID="pnlClick"
                                                                    Collapsed="true" ExpandControlID="pnlClick" TextLabelID="lblMessage" CollapsedText="Show"
                                                                    ExpandedText="Hide" ImageControlID="imgArrows" CollapsedImage="../images/downarrow.jpg"
                                                                    ExpandedImage="../images/uparrow.jpg" ExpandDirection="Vertical" TargetControlID="pnlCollapsable"
                                                                    ScrollContents="false" >
                                                                </cc1:CollapsiblePanelExtender>
                                                            </ItemTemplate>
                                                        </asp:Repeater>
                                                    </div>

                                                    <div id="dvCalendar" runat="server">
                                                        <table id="fch">
                                                            <tr>
                                                                <th>Periods
                                                                </th>
                                                                <th>Beginning Date
                                                                </th>
                                                                <th>Ending Date
                                                                </th>
                                                                <th>Weeks
                                                                </th>
                                                            </tr>
                                                        </table>
                                                        <div style="overflow-x: hidden; overflow-y: auto; height: 300px">
                                                            <table id="fc">
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod1" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod1" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID1" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate1" runat="server" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtFromDate1" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate1" runat="server" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="cal1" runat="server" TargetControlID="txtToDate1" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks1" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod2" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod2" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID2" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate2" runat="server" onfocus="javascript:AddDaysToDate('txtToDate1', 'txtFromDate2')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender5" runat="server" TargetControlID="txtFromDate2" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate2" runat="server" onfocus="javascript:AddDaysToDate('txtToDate1', 'txtFromDate2')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtToDate2" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks2" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod3" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod3" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID3" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate3" runat="server" onfocus="javascript:AddDaysToDate('txtToDate2', 'txtFromDate3')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender3" runat="server" TargetControlID="txtFromDate3" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate3" runat="server" onfocus="javascript:AddDaysToDate('txtToDate2', 'txtFromDate3')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender4" runat="server" TargetControlID="txtToDate3" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks3" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod4" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod4" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID4" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate4" runat="server" onfocus="javascript:AddDaysToDate('txtToDate3', 'txtFromDate4')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender6" runat="server" TargetControlID="txtFromDate4" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate4" runat="server" onfocus="javascript:AddDaysToDate('txtToDate3', 'txtFromDate4')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender7" runat="server" TargetControlID="txtToDate4" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks4" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod5" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod5" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID5" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate5" runat="server" onfocus="javascript:AddDaysToDate('txtToDate4', 'txtFromDate5')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender8" runat="server" TargetControlID="txtFromDate5" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate5" runat="server" onfocus="javascript:AddDaysToDate('txtToDate4', 'txtFromDate5')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender9" runat="server" TargetControlID="txtToDate5" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks5" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod6" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod6" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID6" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate6" runat="server" onfocus="javascript:AddDaysToDate('txtToDate5', 'txtFromDate6')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender10" runat="server" TargetControlID="txtFromDate6" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate6" runat="server" onfocus="javascript:AddDaysToDate('txtToDate5', 'txtFromDate6')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender11" runat="server" TargetControlID="txtToDate6" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks6" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod7" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod7" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID7" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate7" runat="server" onfocus="javascript:AddDaysToDate('txtToDate6', 'txtFromDate7')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender12" runat="server" TargetControlID="txtFromDate7" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate7" runat="server" onfocus="javascript:AddDaysToDate('txtToDate6', 'txtFromDate7')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender13" runat="server" TargetControlID="txtToDate7" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks7" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod8" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod8" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID8" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate8" runat="server" onfocus="javascript:AddDaysToDate('txtToDate7', 'txtFromDate8')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender14" runat="server" TargetControlID="txtFromDate8" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                </cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate8" runat="server" onfocus="javascript:AddDaysToDate('txtToDate7', 'txtFromDate8')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender15" runat="server" TargetControlID="txtToDate8" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks8" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod9" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod9" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID9" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate9" runat="server" onfocus="javascript:AddDaysToDate('txtToDate8', 'txtFromDate9')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender16" runat="server" TargetControlID="txtFromDate9" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate9" runat="server" onfocus="javascript:AddDaysToDate('txtToDate8', 'txtFromDate9')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender17" runat="server" TargetControlID="txtToDate9" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks9" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod10" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod10" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID10" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate10" runat="server" onfocus="javascript:AddDaysToDate('txtToDate9', 'txtFromDate10')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender18" runat="server" TargetControlID="txtFromDate10" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate10" runat="server" onfocus="javascript:AddDaysToDate('txtToDate9', 'txtFromDate10')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender19" runat="server" TargetControlID="txtToDate10" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks10" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod11" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod11" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID11" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate11" runat="server" onfocus="javascript:AddDaysToDate('txtToDate10', 'txtFromDate11')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender20" runat="server" TargetControlID="txtFromDate11" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate11" runat="server" onfocus="javascript:AddDaysToDate('txtToDate10', 'txtFromDate11')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender21" runat="server" TargetControlID="txtToDate11" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks11" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblPeriod12" runat="server"></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnPeriod12" runat="server" />
                                                                        <asp:HiddenField ID="hdnCalendarID12" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFromDate12" runat="server" onfocus="javascript:AddDaysToDate('txtToDate11', 'txtFromDate12')" class="date" Width="145px"></asp:TextBox>
                                                                        <%--<cc1:CalendarExtender ID="CalendarExtender22" runat="server" TargetControlID="txtFromDate12" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>--%>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtToDate12" runat="server" onfocus="javascript:AddDaysToDate('txtToDate11', 'txtFromDate12')" class="date" Width="145px"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender23" runat="server" TargetControlID="txtToDate12" Format="MM/dd/yyyy" CssClass="cal_Theme1"></cc1:CalendarExtender>
                                                                    </td>
                                                                    <td>
                                                                        <label>
                                                                            <asp:Label ID="lblNoOfWeeks12" runat="server"></asp:Label></label>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <%--<table width="100%">
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvFC" runat="server" AutoGenerateColumns="false" Width="520px"
                                                                    Height="320px" OnRowDataBound="gvFC_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Period">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("Period")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="From Date" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("FromDate") %></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="To Date" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("ToDate") %></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Weeks">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("Weeks")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 200px">
                                                                            <label>No calendar generated.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>--%>
                                                </div>
                                            </div>

                                            <asp:Panel ID="pnlAddNewFC" runat="server" Style="display: none">
                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; max-width: 630px;">
                                                    <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                    <div id="dvAddFiscalCal" runat="server"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                    <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveCalendar"></asp:Button>&nbsp;
                                                            <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <section>
                                                        <div style="padding: 5px;">
                                                            <div class="divfieldset">
                                                                <div id="dvMsg" runat="server" class="mt10 mb20 text-center">
                                                                </div>
                                                                <div id="dvCompCopy" runat="server">
                                                                    <small>
                                                                        <label>
                                                                            Copy Fiscal Calendar from CompCode :&nbsp;&nbsp;</label></small>
                                                                    <asp:DropDownList ID="ddlCopyCompCode" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ChangedCompCodeToCopy">
                                                                    </asp:DropDownList>
                                                                </div>
                                                                <div id="dvYearCopy" runat="server">
                                                                    <small>
                                                                        <label>
                                                                            Copy Fiscal Calendar from the year :&nbsp;&nbsp;</label></small>
                                                                    <asp:DropDownList ID="ddlCopyYear" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ChangedYearToCopy">
                                                                    </asp:DropDownList>
                                                                </div>
                                                                <div id="dvUploadCal" runat="server">
                                                                    <div class="row">

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Upload Calendar :</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <cc1:AsyncFileUpload ID="fupdCal" CompleteBackColor="White" runat="server" Style="float: left; border: 1px solid #aaaaaa" Width="300px"
                                                                                    CssClass="form-control" UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete" />

                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div style="float: right; padding-left: 0.5em">
                                                                                <a href="#" id="tooltip" style="display: inline-flex">
                                                                                    <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />&nbsp;
                                                                            <span><small>
                                                                                <label style="font-size: 15px;">
                                                                                File types allowd are .csv, .xls and .xlsx</labe></small>
                                                                            </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                        <div class="clearfix"></div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <a href="../DownloadFile.aspx?typ=10" style="padding: 15px;">Download Template</a>
                                                                            <asp:Label ID="Throbber" runat="server" Style="display: none"><img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                                            </asp:Label>
                                                                        </div>



                                                                        <div class=" col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                                            <asp:Button ID="btnLoadUploadedCal" runat="server" Text="Load Calendar" CssClass="btn btn-success" OnClick="LoadUploadedCalendar" />
                                                                            <asp:Button ID="btnClearData" runat="server" Text="Clear Calendar" CssClass="btn btn-warning" OnClick="ClearUploadedCalendar" />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <asp:HiddenField ID="hdnIsCopy" runat="server" />
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </asp:Panel>
                                            <asp:LinkButton ID="lnkAddNewFC" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popAddFC" runat="server" TargetControlID="lnkAddNewFC"
                                                CancelControlID="btnCancel" PopupControlID="pnlAddNewFC" BackgroundCssClass="modalBackground"
                                                DropShadow="false">
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
                <script src="../js/Validation.js" type="text/javascript"></script>
                <script src="../latestdesign/js/jquery-2.1.4.js"></script>
                <script src="../latestdesign/js/bootstrap-select.min.js"></script>



                <script src="../latestdesign/js/bootstrap.min.js"></script>
                <script src="../latestdesign/js/jquery.menu-aim.js"></script>
                <script src="../latestdesign/js/main.js"></script>

                <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
                <script src="../latestdesign/js/bootstrap-select.min.js"></script>



                <script>
                    $('.date').datepicker({
                        format: 'mm/dd/yyyy',
                        showOnFocus: true,
                        autoclose: true

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

                    function DoOnAjaxPostback() {
                        //setupDatePicker();
                        //$('#date').dateinput({
                        //    format: 'mm/dd/yyyy',
                        //    trigger: false
                        //});
                        $('.date').datepicker({
                            format: 'mm/dd/yyyy',
                            showOnFocus: true,
                            autoclose: true

                        });
                    }

                    function AddDaysToDate(todt, nxtFromdt) {
                        if ($11(todt).value != '') {
                            var someDate = new Date($11(todt).value);
                            var numberOfDaysToAdd = 1;
                            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                            var dd = someDate.getDate();
                            var mm = someDate.getMonth() + 1;
                            var y = someDate.getFullYear();
                            var someFormattedDate = mm + '/' + dd + '/' + y;
                            $11(nxtFromdt).value = someFormattedDate;
                        }
                    }

                    function validateDates() {
                        $11('dvMsg').style.color = "Red";
                        var cnt1 = 0;
                        var cnt = 0;
                        for (var j = 1; j <= 12; j++) {
                            if ($11('txtFromDate' + j).value == '') {
                                $11('txtFromDate' + j).style.border = "1px solid Red";
                                cnt1++;
                            }
                            if ($11('txtToDate' + j).value == '') {
                                $11('txtToDate' + j).style.border = "1px solid Red";
                                cnt1++;
                            }
                        }
                        if (cnt1 == 0) {
                            for (var i = 1; i <= 12; i++) {
                                if (Date.parse($11('txtToDate' + i).value) < Date.parse($11('txtFromDate' + i).value)) {
                                    $11('txtToDate' + i).style.border = "1px solid Red";
                                    $11('txtFromDate' + i).style.border = "1px solid Red";
                                    cnt++;
                                }
                                else {
                                    $11('txtToDate' + i).style.border = "1px solid #ccc";
                                    $11('txtFromDate' + i).style.border = "1px solid #ccc";
                                }
                            }
                            if (cnt > 0) {
                                $11('dvMsg').innerHTML = "ToDate cannot be prior to FromDate";
                                return false;
                            }
                        }
                        else {
                            $11('dvMsg').innerHTML = "Please enter all the dates";
                            return false;
                        }
                    }

                    function HideMsg() {
                        $11('lblHelp').innerHTML = "";
                    }

                    //Calculate number of weeks between selected beginning and ending dates
                    function weeks_between(date1, date2) {
                        // The number of milliseconds in one week
                        var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
                        // Convert both dates to milliseconds
                        var date1_ms = date1.getTime();
                        var date2_ms = date2.getTime();
                        // Calculate the difference in milliseconds
                        var difference_ms = Math.abs(date1_ms - date2_ms);
                        // Convert back to weeks and return hole weeks
                        return Math.round(difference_ms / ONE_WEEK);
                    }



                    window.setInterval(function () {
                        if ($11('txtFromDate1').value != '' && $11('txtToDate1').value != '') {
                            if (CompareDates($11('txtFromDate1').value, $11('txtToDate1').value)) {
                                var date1 = new Date($11('txtFromDate1').value);
                                var date2 = new Date($11('txtToDate1').value);
                                $11('lblNoOfWeeks1').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod1').value = $11('lblNoOfWeeks1').innerHTML;
                            }
                            else {
                                $11('txtFromDate1').style.border = "1px solid red";
                                $11('txtToDate1').style.border = "1px solid red";
                                $11('lblNoOfWeeks1').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate2').value != '' && $11('txtToDate2').value != '') {
                            if (CompareDates($11('txtFromDate2').value, $11('txtToDate2').value)) {
                                var date1 = new Date($11('txtFromDate2').value);
                                var date2 = new Date($11('txtToDate2').value);
                                $11('lblNoOfWeeks2').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod2').value = $11('lblNoOfWeeks2').innerHTML;
                            }
                            else {
                                $11('txtFromDate2').style.border = "1px solid red";
                                $11('txtToDate2').style.border = "1px solid red";
                                $11('lblNoOfWeeks2').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate3').value != '' && $11('txtToDate3').value != '') {
                            if (CompareDates($11('txtFromDate3').value, $11('txtToDate3').value)) {
                                var date1 = new Date($11('txtFromDate3').value);
                                var date2 = new Date($11('txtToDate3').value);
                                $11('lblNoOfWeeks3').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod3').value = $11('lblNoOfWeeks3').innerHTML;
                            }
                            else {
                                $11('txtFromDate3').style.border = "1px solid red";
                                $11('txtToDate3').style.border = "1px solid red";
                                $11('lblNoOfWeeks3').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate4').value != '' && $11('txtToDate4').value != '') {
                            if (CompareDates($11('txtFromDate4').value, $11('txtToDate4').value)) {
                                var date1 = new Date($11('txtFromDate4').value);
                                var date2 = new Date($11('txtToDate4').value);
                                $11('lblNoOfWeeks4').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod4').value = $11('lblNoOfWeeks4').innerHTML;
                            }
                            else {
                                $11('txtFromDate4').style.border = "1px solid red";
                                $11('txtToDate4').style.border = "1px solid red";
                                $11('lblNoOfWeeks4').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate5').value != '' && $11('txtToDate5').value != '') {
                            if (CompareDates($11('txtFromDate5').value, $11('txtToDate5').value)) {
                                var date1 = new Date($11('txtFromDate5').value);
                                var date2 = new Date($11('txtToDate5').value);
                                $11('lblNoOfWeeks5').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod5').value = $11('lblNoOfWeeks5').innerHTML;
                            }
                            else {
                                $11('txtFromDate5').style.border = "1px solid red";
                                $11('txtToDate5').style.border = "1px solid red";
                                $11('lblNoOfWeeks5').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate6').value != '' && $11('txtToDate6').value != '') {
                            if (CompareDates($11('txtFromDate6').value, $11('txtToDate6').value)) {
                                var date1 = new Date($11('txtFromDate6').value);
                                var date2 = new Date($11('txtToDate6').value);
                                $11('lblNoOfWeeks6').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod6').value = $11('lblNoOfWeeks6').innerHTML;
                            }
                            else {
                                $11('txtFromDate6').style.border = "1px solid red";
                                $11('txtToDate6').style.border = "1px solid red";
                                $11('lblNoOfWeeks6').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate7').value != '' && $11('txtToDate7').value != '') {
                            if (CompareDates($11('txtFromDate7').value, $11('txtToDate7').value)) {
                                var date1 = new Date($11('txtFromDate7').value);
                                var date2 = new Date($11('txtToDate7').value);
                                $11('lblNoOfWeeks7').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod7').value = $11('lblNoOfWeeks7').innerHTML;
                            }
                            else {
                                $11('txtFromDate7').style.border = "1px solid red";
                                $11('txtToDate7').style.border = "1px solid red";
                                $11('lblNoOfWeeks7').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate8').value != '' && $11('txtToDate8').value != '') {
                            if (CompareDates($11('txtFromDate8').value, $11('txtToDate8').value)) {
                                var date1 = new Date($11('txtFromDate8').value);
                                var date2 = new Date($11('txtToDate8').value);
                                $11('lblNoOfWeeks8').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod8').value = $11('lblNoOfWeeks8').innerHTML;
                            }
                            else {
                                $11('txtFromDate8').style.border = "1px solid red";
                                $11('txtToDate8').style.border = "1px solid red";
                                $11('lblNoOfWeeks8').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate9').value != '' && $11('txtToDate9').value != '') {
                            if (CompareDates($11('txtFromDate9').value, $11('txtToDate9').value)) {
                                var date1 = new Date($11('txtFromDate9').value);
                                var date2 = new Date($11('txtToDate9').value);
                                $11('lblNoOfWeeks9').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod9').value = $11('lblNoOfWeeks9').innerHTML;
                            }
                            else {
                                $11('txtFromDate9').style.border = "1px solid red";
                                $11('txtToDate9').style.border = "1px solid red";
                                $11('lblNoOfWeeks9').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate10').value != '' && $11('txtToDate10').value != '') {
                            if (CompareDates($11('txtFromDate10').value, $11('txtToDate10').value)) {
                                var date1 = new Date($11('txtFromDate10').value);
                                var date2 = new Date($11('txtToDate10').value);
                                $11('lblNoOfWeeks10').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod10').value = $11('lblNoOfWeeks10').innerHTML;
                            }
                            else {
                                $11('txtFromDate10').style.border = "1px solid red";
                                $11('txtToDate10').style.border = "1px solid red";
                                $11('lblNoOfWeeks10').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate11').value != '' && $11('txtToDate11').value != '') {
                            if (CompareDates($11('txtFromDate11').value, $11('txtToDate11').value)) {
                                var date1 = new Date($11('txtFromDate11').value);
                                var date2 = new Date($11('txtToDate11').value);
                                $11('lblNoOfWeeks11').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod11').value = $11('lblNoOfWeeks11').innerHTML;
                            }
                            else {
                                $11('txtFromDate11').style.border = "1px solid red";
                                $11('txtToDate11').style.border = "1px solid red";
                                $11('lblNoOfWeeks11').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                        if ($11('txtFromDate12').value != '' && $11('txtToDate12').value != '') {
                            if (CompareDates($11('txtFromDate12').value, $11('txtToDate12').value)) {
                                var date1 = new Date($11('txtFromDate12').value);
                                var date2 = new Date($11('txtToDate12').value);
                                $11('lblNoOfWeeks12').innerHTML = weeks_between(date1, date2);
                                $11('hdnPeriod12').value = $11('lblNoOfWeeks12').innerHTML;
                            }
                            else {
                                $11('txtFromDate12').style.border = "1px solid red";
                                $11('txtToDate12').style.border = "1px solid red";
                                $11('lblNoOfWeeks12').innerHTML = "0";
                                dvMsg.style.color = "red";
                                dvMsg.innerHTML = "Ending date should be greater than Beginning date";
                            }
                        }
                    }, 1000);

                </script>
    </form>
</body>
</html>
