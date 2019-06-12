<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FiscalCal.aspx.cs" Inherits="Codes_FiscalCal" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Fiscal Calendar Maintenance</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/DateSetup.js" type="text/javascript"></script>
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
    <style>
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
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvFC tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
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
            width: 80px;
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
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
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
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%" style="vertical-align: top">
                                                        <h2>Fiscal Calendar
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table width="100%">
                                                <tr>
                                                    <td colspan="3">
                                                        <asp:Label ID="lblHelp" runat="server"></asp:Label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <%--<td width="20%" align="right">
                                                        <small>
                                                            <label>
                                                                Organization:&nbsp;&nbsp;</label></small>
                                                    </td>
                                                    <td width="30%" align="left" style="font-size: 13px">
                                                        <b>
                                                            <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
                                                        <asp:HiddenField ID="hdnOrgName" runat="server" />
                                                    </td>--%>
                                                    <td>
                                                        <small>
                                                            <label>
                                                                Company Code:&nbsp;&nbsp;</label></small>
                                                        <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" Width="200px">
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">
                                                        <small>
                                                            <label>
                                                                Show Fiscal Calendar for the year:&nbsp;&nbsp;</label></small>
                                                        <asp:DropDownList ID="ddlYear" runat="server" OnSelectedIndexChanged="GetFiscalCalendarByYear"
                                                            AutoPostBack="true">
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">
                                                        <asp:Button ID="btnModCal" runat="server" Text="Modify Calendar" CssClass="buttonnew-blue"
                                                            OnClick="ModifyCalendar" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4" style="text-align: right">
                                                        <asp:Button ID="btnAdd" runat="server" Text="Add Calendar" CssClass="buttonnew-blue" OnClick="AddCalendar" />
                                                        <asp:Button ID="btnCopyFromComp" runat="server" Text="Copy From CompCode" CssClass="buttonnew-blue" OnClick="CopyFromComp" />
                                                        <asp:Button ID="btnCopyFromYear" runat="server" Text="Copy From Another Year" CssClass="buttonnew-blue" OnClick="CopyFromYear" />
                                                        <asp:Button ID="btnUploadCal" runat="server" Text="Upload Calendar" CssClass="buttonnew-blue" OnClick="UploadCalendar" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%">
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
                                            </table>
                                        </div>
                                        <asp:Panel ID="pnlAddNewFC" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 630px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <div id="dvAddFiscalCal" runat="server"></div>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveCalendar"></asp:Button>&nbsp;
                                                            <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="padding: 5px;">
                                                        <div class="divfieldset">
                                                            <div id="dvMsg" runat="server">
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
                                                                <table>
                                                                    <tr>
                                                                        <td align="right">
                                                                            <small>
                                                                                <label>
                                                                                    Upload Calendar :&nbsp;&nbsp;</label></small>
                                                                        </td>
                                                                        <td>
                                                                            <cc1:AsyncFileUpload ID="fupdCal" CompleteBackColor="White" runat="server"  Style="float: left; border: 1px solid #aaaaaa" Width="300px"
                                                                                UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete" />

                                                                            <div style="float: right; padding-left: 0.5em">
                                                                                <a href="#" id="tooltip">
                                                                                    <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                    <span><small>
                                                                                        <label>File types allowd are .csv, .xls and .xlsx</label></small>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../DownloadFile.aspx?typ=10">Download Template</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>&nbsp;
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <asp:Label ID="Throbber" runat="server" Style="display: none"><img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                                            </asp:Label>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td align="right">
                                                                            <asp:Button ID="btnLoadUploadedCal" runat="server" Text="Load Calendar" CssClass="buttonnew-blue" OnClick="LoadUploadedCalendar" />
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </td>
                                                                        <td>
                                                                            <asp:Button ID="btnClearData" runat="server" Text="Clear Calendar" CssClass="buttonnew-blue" OnClick="ClearUploadedCalendar" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>&nbsp;
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <asp:HiddenField ID="hdnIsCopy" runat="server" />
                                                            <br />
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
                                                                    <table id="fc" width="100%">
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
                                                                                <asp:TextBox ID="txtFromDate2" runat="server" onfocus="javascript:AddDaysToDate('txtToDate1', 'txtFromDate2')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate3" runat="server" onfocus="javascript:AddDaysToDate('txtToDate2', 'txtFromDate3')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate4" runat="server" onfocus="javascript:AddDaysToDate('txtToDate3', 'txtFromDate4')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate5" runat="server" onfocus="javascript:AddDaysToDate('txtToDate4', 'txtFromDate5')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate6" runat="server" onfocus="javascript:AddDaysToDate('txtToDate5', 'txtFromDate6')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate7" runat="server" onfocus="javascript:AddDaysToDate('txtToDate6', 'txtFromDate7')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate8" runat="server" onfocus="javascript:AddDaysToDate('txtToDate7', 'txtFromDate8')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate9" runat="server" onfocus="javascript:AddDaysToDate('txtToDate8', 'txtFromDate9')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate10" runat="server" onfocus="javascript:AddDaysToDate('txtToDate9', 'txtFromDate10')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate11" runat="server" onfocus="javascript:AddDaysToDate('txtToDate10', 'txtFromDate11')" Width="145px"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtFromDate12" runat="server" onfocus="javascript:AddDaysToDate('txtToDate11', 'txtFromDate12')" Width="145px"></asp:TextBox>
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
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
