﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Jobs.aspx.cs" Inherits="TimeSheet_Jobs" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Job Maintenance</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="../js/DateSetup.js"></script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update panel.
-->
    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {

            $(function () {
                $("#ddlHStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlJobType").ufd({ log: true });
            });
            $(function () {
                $("#ddlHoursPer").ufd({ log: true });
            });
            $(function () {
                $("#ddlDept").ufd({ log: true });
            });
            $(function () {
                $("#ddlAccountCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlStatus").ufd({ log: true });
            });
            $(function () {
                $("#ddlManager").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlHStatus").ufd({ log: true });
            });
        });

        //Calculate total cost of the job
        function calculateTotalCost(hrs, rate, totCost) {
            var hours = $11(hrs).value;
            var ratePerHour = $11(rate).value;
            $11(totCost).innerHTML = parseFloat(hours == '' ? '0' : hours) * parseFloat(ratePerHour == '' ? '0' : ratePerHour);
        }
        //Calculate total cost of the job

        function selectAcc() {
            $find('popAcc').show();
            $find('popViewJob').show();
            //$find('popAcc').showPopup();
            ////$11('hdnPopRight').value = $find('popAcc').style.right;
            ////$11('hhdnPopLeft').value = $find('popAcc').style.left;
            return false;
        }

        function closeAccPop() {
            $find('popAcc').hide();
            $find('popViewJob').show();
            return false;
        }

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
                color: red;
            }

        .tab td {
            padding: 5px;
        }

        .tabst {
            width: 100%;
        }

        .tdlbl {
            text-align: right;
        }

        .tdfld {
            text-align: left;
        }

        .regicon {
            filter: alpha(opacity=70);
            opacity: 0.7;
        }

            .regicon:hover {
                filter: alpha(opacity=100);
                opacity: 1.0;
            }

        .reganc {
            font-family: "Trebuchet MS",Arial,Helvetica,sans-serif;
            font-size: 1.0em;
            text-decoration: none;
            text-decoration-line: none;
            font-weight: 900;
        }

        .exptab td {
            background-image: url(../images/overlay/white.png);
            background-size: cover;
            padding: 30px;
            text-align: center;
            height: 80px;
        }

        #gvJobsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvJobsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvJobs tbody tr td {
             padding: 5px;
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            text-overflow: ellipsis;
        }

        #gvJobsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvJobs TR TD, #gvJobs TR TH, #gvJobs TR TH div, #gvJobs TR TD div {
            overflow: visible;
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
                        <%-- <asp:ScriptManager ID="ScriptManager2" runat="server" ScriptMode="Release">
                    </asp:ScriptManager>--%>
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
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="lnkExcelExport" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                <div class="main-content grid_4 alpha" style="width: 900px; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td>
                                                        <h2>Jobs
                                                        </h2>
                                                    </td>
                                                    <td style="text-align: right">
                                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div>
                                                <div id="dvMainMsg" runat="server"></div>
                                                <table class="tab" width="100%">
                                                    <tr>
                                                        <td width="30%">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td class="tdlbl">

                                                                        <small>
                                                                            <label>From Date:</label></small></td>
                                                                    <td class="tdfld">
                                                                        <asp:TextBox ID="txtFromDate" runat="server" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="cal1" runat="server" TargetControlID="txtFromDate" Format="MM/dd/yyyy">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td width="30%">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td class="tdlbl">
                                                                        <small>
                                                                            <label>To Date:</label></small></td>
                                                                    <td class="tdfld">
                                                                        <asp:TextBox ID="txtToDate" runat="server" class="date"></asp:TextBox>
                                                                        <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtToDate" Format="MM/dd/yyyy">
                                                                        </cc1:CalendarExtender>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td width="10%">
                                                            <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="btnGo_Click" />
                                                        </td>
                                                        <td width="30%">
                                                            <asp:Button ID="btnAddJob" runat="server" Text="Add New Job" CssClass="buttonnew-blue" OnClick="AddNewJob" Style="float: right" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div>
                                                <table class="tab" width="50%">
                                                    <tr>
                                                        <td class="tdlbl" width="17%"><small>
                                                            <label>Filter by:</label></small></td>
                                                        <td width="70%">
                                                            <asp:DropDownList ID="ddlHStatus" runat="server" Width="150px" OnSelectedIndexChanged="ddlHStatus_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList></td>
                                                        <td width="13%"></td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div>
                                                <isx:CoolGridView ID="gvJobs" runat="server" AutoGenerateColumns="false" AllowPaging="false" Width="800px" Height="300px"
                                                    OnRowDataBound="gvJobs_RowDataBound" BorderWidth="0" GridLines="None">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Job Code">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkJobCode" runat="server" Text="Job Code" CommandArgument="jobCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><asp:LinkButton ID="lnkJobCode" runat="server" Text='<%#Eval("jobCode")%>' ToolTip="View/Edit Job" CommandArgument='<%#Eval("jobId") %>'
                                                                    OnCommand="EditJob"></asp:LinkButton></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Job Name" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkJobName" runat="server" Text="Job Name" CommandArgument="jobName"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("jobName")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkDescription" runat="server" Text="Description" CommandArgument="jobDescription"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("jobDescription")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Status">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkStatus" runat="server" Text="Status" CommandArgument="status"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("status")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Active">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkIsActive" runat="server" Text="Active" CommandArgument="isActive"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <asp:CheckBox ID="chkIsActive" runat="server" />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Action">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkEditJob" runat="server" ToolTip="View/Edit Job" CommandArgument='<%#Eval("jobId") %>'
                                                                    OnCommand="EditJob"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;
                                                                    <asp:HiddenField ID="hdnIsActive" runat="server" Value='<%#Eval("isActive") %>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 150px"><label>
                                                            No data to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnJobID" runat="server" />
                                            </div>
                                            <div>
                                                <asp:Panel ID="pnlViewJob" runat="server" Style="display: none;"
                                                    DefaultButton="btnSave">
                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 650px; height: 525px;">
                                                        <header style="height: 4%">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td width="50%">
                                                                        <h2 class="pophead">
                                                                            <asp:Label ID="lblHViewJob" runat="server"></asp:Label>
                                                                        </h2>
                                                                    </td>
                                                                    <td width="50%" align="right">
                                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveJob"></asp:Button>
                                                                        <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </header>
                                                        <section>
                                                            <div class="divfieldset">
                                                                <div id="dvErr" runat="server"></div>
                                                                <table class="tab">
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label><em>*</em>Job Code:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtJobCode" runat="server"></asp:TextBox></td>
                                                                        <td class="tdlbl"><small>
                                                                            <label><em>*</em>Job Name:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtJobName" runat="server"></asp:TextBox></td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Job Type:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:DropDownList ID="ddlJobType" runat="server" Width="135px"></asp:DropDownList>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Start Date:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtStartDate" runat="server" class="date"></asp:TextBox>
                                                                            <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtStartDate" Format="MM/dd/yyyy">
                                                                            </cc1:CalendarExtender>
                                                                        </td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>End Date:</label></small>
                                                                        </td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtEndDate" runat="server" class="date"></asp:TextBox>
                                                                            <cc1:CalendarExtender ID="CalendarExtender3" runat="server" TargetControlID="txtEndDate" Format="MM/dd/yyyy">
                                                                            </cc1:CalendarExtender>
                                                                        </td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Role:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtRole" runat="server"></asp:TextBox></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Detartment:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <%--<asp:DropDownList ID="ddlDept" runat="server" Width="135px" AutoPostBack="true" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged"></asp:DropDownList>--%>
                                                                            <asp:DropDownCheckBoxes ID="ddlDept" runat="server" UseButtons="true" UseSelectAllNode="true"
                                                                                DataTextField="Description" DataValueField="CodeKey" Width="135px" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged" AutoPostBack="true">
                                                                                <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple" />
                                                                            </asp:DropDownCheckBoxes>
                                                                        </td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>
                                                                                <em>*</em><a href="#" id="lnkAccounts" onclick="selectAcc();">Select Accounts</a></label></small>
                                                                        </td>
                                                                        <td class="tdfld">&nbsp;
                                                                            <%--<asp:DropDownList ID="ddlAccountCode" runat="server" Width="135px"></asp:DropDownList>--%>
                                                                            <%--<asp:DropDownCheckBoxes ID="ddlAccountCode" runat="server" UseButtons="true" UseSelectAllNode="true"
                                                                                Width="135px">
                                                                                <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple" />
                                                                            </asp:DropDownCheckBoxes>--%>
                                                                        </td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Status:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:DropDownList ID="ddlStatus" runat="server" Width="135px"></asp:DropDownList></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Is Active:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:CheckBox ID="chkIsActive" runat="server" />
                                                                        </td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Manager:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:DropDownList ID="ddlManager" runat="server" Width="135px" OnSelectedIndexChanged="ddlManager_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Description:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine" Width="135px" Height="70px"></asp:TextBox></td>
                                                                        <td colspan="4">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td><i>
                                                                                        <label>UnAssigned Users</label></i></td>
                                                                                    <td></td>
                                                                                    <td><i>
                                                                                        <label>Assigned Users</label></i></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="tdfld">
                                                                                        <asp:ListBox ID="lstUsers" runat="server" Width="205px" SelectionMode="Multiple" Height="150px"></asp:ListBox>
                                                                                    </td>
                                                                                    <td>
                                                                                        <table>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <asp:Button ID="btnAssignSelected" runat="server" Text=">" CssClass="button button-blue" Width="40px" OnClick="AssignSelectedUsers" ToolTip="Click to assign selected users" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <asp:Button ID="btnAssignAll" runat="server" Text=">>" CssClass="button button-blue" Width="40px" OnClick="AssignAllUsers" ToolTip="Click to assign all users" />
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <asp:Button ID="btnRemoveSelected" runat="server" Text="<" CssClass="button button-blue" Width="40px" OnClick="RemoveSelectedUsers" ToolTip="Click to remove selected users" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <asp:Button ID="btnRemoveAll" runat="server" Text="<<" CssClass="button button-blue" Width="40px" OnClick="RemoveAllUsers" ToolTip="Click to remove all users" /></td>
                                                                                            </tr>

                                                                                        </table>
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:ListBox ID="lstAssignedUsers" runat="server" Width="205px" SelectionMode="Multiple" Height="150px"></asp:ListBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="6">
                                                                            <div class="message info">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class="tdlbl"><small>
                                                                                            <label><em>*</em>Total Job Hours:</label></small></td>
                                                                                        <td class="tdfld">
                                                                                            <asp:TextBox ID="txtHours" runat="server"></asp:TextBox></td>
                                                                                        <td class="tdlbl"><small>
                                                                                            <label>
                                                                                                Rate/Hour(<%=currencySymbol %>):</label></small></td>
                                                                                        <td class="tdfld">
                                                                                            <asp:TextBox ID="txtRate" runat="server"></asp:TextBox></td>
                                                                                        <td class="tdlbl"><small>
                                                                                            <label>Total Cost(<%=currencySymbol %>):</label></small></td>
                                                                                        <td class="tdfld">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblTotalCost" runat="server"></asp:Label></label></small></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </asp:Panel>
                                                <asp:LinkButton ID="lnkViewJob" runat="server"></asp:LinkButton>
                                                <cc1:ModalPopupExtender ID="popViewJob" runat="server" DropShadow="false" PopupControlID="pnlViewJob"
                                                    TargetControlID="lnkViewJob" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
                                                </cc1:ModalPopupExtender>
                                                <asp:Panel ID="pnlExport" runat="server" Style="display: none; opacity: 0.9"
                                                    DefaultButton="btnSave">
                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 400px; height: 240px;">
                                                        <header style="height: 10%">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td width="50%">
                                                                        <h2 class="pophead">Export Jobs
                                                                        </h2>
                                                                    </td>
                                                                    <td width="50%" align="right">
                                                                        <asp:Button ID="btnExportCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </header>
                                                        <section>
                                                            <div class="divfieldset">
                                                                <table class="exptab" width="100%">
                                                                    <tr>
                                                                        <td>
                                                                            <span class="regicon">
                                                                                <asp:LinkButton ID="lnkExcelExport" runat="server" ToolTip="Click to export jobs to excel" class="reganc">
                                                                            <img src="../images/TimeSheetExport/excel1.png" alt="Export to Excel" />
                                                                            <br />
                                                                            Export to Excel</asp:LinkButton>
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span class="regicon">
                                                                                <asp:LinkButton ID="lnkPDFExport" runat="server" ToolTip="Click to export jobs to pdf" class="reganc">
                                                                                <img src="../images/TimeSheetExport/pdf1.png" alt="Export to PDF" />
                                                                                <br />
                                                                                Export to PDF</asp:LinkButton>
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </asp:Panel>
                                                <asp:LinkButton ID="lnkExport" runat="server"></asp:LinkButton>
                                                <cc1:ModalPopupExtender ID="popExport" runat="server" DropShadow="false" PopupControlID="pnlExport"
                                                    TargetControlID="lnkExport" BackgroundCssClass="modalBackground" CancelControlID="btnExportCancel">
                                                </cc1:ModalPopupExtender>
                                                <asp:Panel ID="pnlSelAccnt" runat="server" Style="background-color: white; display: none">
                                                    <div class="main-content" style="margin: 0px; padding: 10px; min-height: 95px; min-width: 400px">
                                                        <div class="divfieldset">
                                                            <div id="dvAccErr" runat="server">
                                                            </div>
                                                            <table class="tab">
                                                                <tr>
                                                                    <td colspan="3" style="text-align: right">
                                                                        <asp:Button ID="btnCloseAcc" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:ListBox ID="lstAllAcc" runat="server" Width="205px" SelectionMode="Multiple" Height="150px"></asp:ListBox>
                                                                    </td>
                                                                    <td>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:LinkButton ID="btnAssignSelectedAcc" runat="server" Text=">" CssClass="button button-blue" Width="40px" OnClick="AssignSelectedAcc" ToolTip="Click to assign selected accounts" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:LinkButton ID="btnAssignAllAcc" runat="server" Text=">>" CssClass="button button-blue" Width="40px" OnClick="AssignAllAcc" ToolTip="Click to assign all accounts" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:LinkButton ID="btnRemoveSelectedAcc" runat="server" Text="<" CssClass="button button-blue" Width="40px" OnClick="RemoveSelectedAcc" ToolTip="Click to remove selected accounts" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:LinkButton ID="btnRemoveAllAcc" runat="server" Text="<<" CssClass="button button-blue" Width="40px" OnClick="RemoveAllAcc" ToolTip="Click to remove all accounts" /></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td>
                                                                        <asp:ListBox ID="lstAssignedAcc" runat="server" Width="205px" SelectionMode="Multiple" Height="150px"></asp:ListBox>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </asp:Panel>
                                                <asp:LinkButton ID="lnkSelAcc" runat="server"></asp:LinkButton>
                                                <cc1:ModalPopupExtender ID="popAcc" runat="server" TargetControlID="lnkSelAcc" PopupControlID="pnlSelAccnt"
                                                    DropShadow="false" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseAcc">
                                                </cc1:ModalPopupExtender>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
