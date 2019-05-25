<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserActivity.aspx.cs" Inherits="TimeSheet_UserActivity" %>

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

    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - User Activity Recording</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link href="../latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" /> 
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <!-- CSS reset -->
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <style>
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

        .tab td {
            padding: 5px;
        }

        .tdlbl {
            text-align: right;
            vertical-align: top;
        }

        .tdfld {
            text-align: left;
            vertical-align: top;
        }

        .tabst {
            width: 100%;
        }

        .lbltime {
            font-size: 20px;
        }

        #dvDayWise label {
        font-size:18px !important ;
        }
        #gvTimeTrackjEsCoOl_headerDiv div table tbody tr th, #gvAlltimesheetjEsCoOl_headerDiv, #gvTimeTrackjEsCoOl_footerDiv {
            background-color: #3B6AA0;
        }

        #gvTimeTrackjEsCoOl_headerDiv div table tbody tr th {
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

        #gvAlltimesheetjEsCoOl_headerDiv div table tbody tr th {
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

        #gvTimeTrackjEsCoOl_footerDiv div table tbody tr td {
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

            #gvTimeTrackjEsCoOl_footerDiv div table tbody tr td label {
                color: white;
            }

        #gvTimeTrack tbody tr td, #gvAlltimesheet tbody tr td {
           height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
        }

        #gvTimeTrackjEsCoOl_mainDiv, #gvAlltimesheetjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvTimeTrack TR TD, #gvTimeTrack TR TH, #gvTimeTrack TR TH div, #gvTimeTrack TR TD div,
        #gvAlltimesheet TR TD, #gvAlltimesheet TR TH, #gvAlltimesheet TR TH div, #gvAlltimesheet TR TD div {
            overflow: visible;
        }

        #aid.tip {
            position: relative;
            text-decoration: none;
        }

            #aid.tip:hover:before {
                display: block;
                position: absolute;
                padding: .5em;
                content: attr(title);
                /*min-width: 120px;*/
                text-align: center;
                width: auto;
                height: auto;
                white-space: nowrap;
                top: -37px;
                background: rgba(255,255,255,1);
                -moz-border-radius: 5px;
                -webkit-border-radius: 5px;
                border-radius: 5px;
                color: red;
                font-size: 1.5em;
                border: 3px solid Red;
                z-index: 999999;
            }

            #aid.tip:hover:after {
                /*position: absolute;
                display: block;
                content: "";
                border-color: rgba(255,255,255,1) transparent transparent transparent;
                border-style: solid;
                border-width: 10px;
                height: 0;
                width: 0;
                position: absolute;
                top: -10px;
                left: 0em;*/
            }

        .hrs {
            font-size: 18px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }

        .pnlcss {
            cursor: pointer;
            border: solid 1px #c0c0c0;
            width: 99%;
        }

        .pnlhistcss {
            border: solid 1px #c0c0c0;
            width: 99%;
        }

        .pnlColl {
            border: 1px solid #cadcea;
            background: #e1f2fc;
            background: -webkit-gradient(linear, left top, left bottom, from(#e1f2fc), to(#cae9fd));
            background: -moz-linear-gradient(top, #e1f2fc, #cae9fd);
            -pie-background: linear-gradient(top, #e1f2fc, #cae9fd);
            color: #225b86;
            text-shadow: 0 1px 0 #fff;
            font-size: 1.5em;
        }

        .date {
            background-image: url(../images/icons/calendar_view_week.png);
            background-repeat: no-repeat;
            background-position: right;
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
            <section class="grid_7" style="padding-top: 0px;margin-top:70px;">
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
                <asp:Timer ID="Timer" runat="server" Interval="100000000">
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
                        <div class="main-content grid_4 alpha" style=" padding-top: 0px">

                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title">My Timesheet</div>
                                </div>

                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="pull-right">
                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveWeekTimeSheet" />
                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="SubmitTimeSheet" Visible="false"></asp:Button>
                                                <asp:Button ID="btnGoToTimesheet" runat="server" Text="Go To Timesheet" CssClass="btn btn-info" OnClick="btnGoToTimesheet_Click" />
                                                <asp:Button ID="btnShowAllTimesheet" runat="server" Text="Show All Timesheet" CssClass="btn btn-info" OnClick="btnShowAllTimesheet_Click" Visible="false" />
                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                           
                                    </div>
                                </div>
                            </div>
 
                            <section>
                                <div class="divfieldset">
                                    <div id="dvAllTS" runat="server">
                                        <div id="dvMainMessage" runat="server"></div>
                                        <br />
                                        <div id="dvDates" style="width: 100%">
                                            <div class="main-content" style="width: 100%; min-height: 100px">
                                                <header class="mb30" style="width:60%">
                                                    <h2 class="subheader ">Select Start Date</h2>
                                                </header>
                                                <section>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> From: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index:0">
                                                                 <asp:TextBox ID="txtFromDate" runat="server" class="  form-control"></asp:TextBox> 
                                                                      <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                       </div>                                                                  
                                                                 </div>     
                                                 </div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">To : </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <div class="input-group date" data-date-format="dd/mm/yyyy" style="z-index:0">   
                                                                  <asp:TextBox ID="txtToDate" runat="server" class="  form-control"></asp:TextBox> 
                                                                      <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                       </div>                                                               
                                                                 </div>     
                                                </div>
                                                     <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="btn btn-success" OnClick="btnGo_Click" />
                                                         </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                        <div>
                                            <br />
                                        </div>
                                        <div id="dvMainGrid">
                                            <div  style="width:100%;overflow-x:auto;"   >
                                            <isx:CoolGridView ID="gvAlltimesheet" runat="server" Width="1000px" Height="300px" AutoGenerateColumns="false" ShowHeader="true" OnRowDataBound="gvAlltimesheet_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                        <ItemTemplate>
                                                            <img alt="" style="cursor: pointer" src="../images/downarrow.jpg" />
                                                            <asp:Panel ID="pnlTasks" runat="server" Style="display: none;">
                                                                <asp:GridView ID="gvAllTSTasks" runat="server" AutoGenerateColumns="false" Width="850px" HeaderStyle-Height="30px" GridLines="Vertical" BackColor="White" BorderColor="#999999" BorderStyle="None" BorderWidth="1px" CellPadding="3">
                                                                    <AlternatingRowStyle BackColor="#DCDCDC"></AlternatingRowStyle>
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Task">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("taskInfo") %></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%# GetTimeFormattedData(Eval("Day1").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day2").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day3").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day4").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day5").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day6").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("Day7").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Total Hours" ItemStyle-HorizontalAlign="Center">
                                                                            <ItemTemplate>
                                                                                <label><%#GetTimeFormattedData(Eval("weekTotalHrs").ToString())%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <FooterStyle BackColor="#CCCCCC" ForeColor="Black"></FooterStyle>
                                                                    <HeaderStyle BackColor="#3B6AA0" Font-Bold="false" ForeColor="White" Height="30px"></HeaderStyle>
                                                                    <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                    <RowStyle BackColor="#EEEEEE" ForeColor="Black"></RowStyle>
                                                                    <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                </asp:GridView>
                                                            </asp:Panel>
                                                            <asp:HiddenField ID="hdnJobID" runat="server" Value='<%#Eval("jobId")%>' />
                                                            <asp:HiddenField ID="hdnJobDescr" runat="server" Value='<%#Eval("jobDescription") %>' />
                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%# Convert.ToDateTime(Eval("startDate")).ToString("MM/dd/yyyy")%>' />
                                                            <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%#Eval("statusId")%>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField ControlStyle-Width="250px" HeaderStyle-Width="250px" ItemStyle-Width="250px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkJobName" runat="server" Text="Job" CommandArgument="jobName"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("jobName") %></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField ControlStyle-Width="250px" HeaderStyle-Width="250px" ItemStyle-Width="250px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkJobDescr" runat="server" Text="Description" CommandArgument="jobDescription"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("jobDescription") %></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField ItemStyle-HorizontalAlign="Center" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkStartDate" runat="server" Text="Start Date" CommandArgument="startDate"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%# Convert.ToDateTime(Eval("startDate")).ToString("MM/dd/yyyy")%></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField ItemStyle-HorizontalAlign="Center">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkStatus" runat="server" Text="Status" CommandArgument="statusId"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="View" ItemStyle-HorizontalAlign="Center">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" OnClick="ViewTimesheet" Text="Edit" ToolTip="View Expense"><img src="../images/icons/arrow_out.png" /></asp:LinkButton>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 150px">
                                                        <label>No data to display</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                                </div>
                                        </div>
                                    </div>
                                    <div id="dvManageTS" runat="server" style="display: none">
                                        <div id="dvErr" runat="server" style="font-size: 17px;font-weight:bold;margin-bottom:20px;text-align: center"></div>
                                           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Tracking Type:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                  <asp:DropDownList ID="ddlTrackingType" runat="server" CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="ddlTrackingType_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>                                                                   
                                                                 </div>     
                                                             </div>
                                                             
                                                            <%if (!ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
                                                              { %>

                                                            <div id="dvYear" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Year:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:DropDownList ID="ddlYear" runat="server" CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="ddlYear_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>                                                                  
                                                                 </div>     
                                                             </div>
                                                             
                                                            <%} %>

                                                            
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Task Start Date:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <asp:TextBox ID="txtTaskDate" CssClass="form-control" runat="server"></asp:TextBox>
                                                                <asp:DropDownList ID="ddlStartDate" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlStartDate_SelectedIndexChanged"   CssClass="form-control selectpicker" data-live-search="true" ></asp:DropDownList>
                                                                <asp:HiddenField ID="hdnCurrentDate" runat="server" />
                                                                <asp:HiddenField ID="hdnMaxJobHrs" runat="server" />
                                                                <asp:HiddenField ID="hdnMinTaskTime" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedInDay" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnMonday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnTuesday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnWednesday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnThursday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnFriday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnSaturday" runat="server" />
                                                                <asp:HiddenField ID="hdnTotalHrsWorkedOnSunday" runat="server" />
                                                                <asp:HiddenField ID="hdnIsDayWorkHoursExceeded" runat="server" />
                                                                <asp:HiddenField ID="hdnIsSaveTimeSheet" runat="server" />                                                                  
                                                                 </div>     
                                                            </div>
                                                            
                                                            <div class="clearfix"></div>
                                                         
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Job Name:</label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:DropDownList ID="ddlJobName" runat="server"  CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlJobName_SelectedIndexChanged"></asp:DropDownList>
                                                                <span id="aid" runat="server" class="tip" style="display: none; float: right; right: 10%">
                                                                    <img id="imgErr" src="../images/icons/1406303339_Error.PNG" /></span>                                                                  
                                                                 </div>     
                                                            </div>
                                                           
                                                            <%if (ddlTrackingType.SelectedValue.ToLower().Contains("auto"))
                                                              { %>

                                                            <div id="dvTaskName" runat="server" class=" form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Task Name: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:DropDownList ID="ddlTaskName" runat="server"  CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlTaskName_SelectedIndexChanged"></asp:DropDownList>                                                                  
                                                                 </div>     
                                                             </div>
                                                            
                                                            <%} %>

                                                            <div class="clearfix"></div>
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Job Description:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                  <asp:TextBox ID="txtJobDescr" CssClass="form-control" runat="server" TextMode="MultiLine" ReadOnly="true"></asp:TextBox>                                                                   
                                                                 </div>     
                                                        </div>

                                               </div>
                                          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <table class="tab" width="100%">
                                                        <tr>
                                                
                                                <td width="45%" style="vertical-align: top">
                                                    <table width="100%">
                                                        <tr>
                                                            <td class="tdfld" colspan="4">
                                                                <div id="dvDayWise" runat="server" style="display: block">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td colspan="3" class="tdfld">
                                                                                <asp:Button ID="btnStartTask" runat="server" Width="120px" Text="Start" CssClass="btn btn-success" OnClick="StartTask" />
                                                                                <asp:Button ID="btnEndTask" runat="server" Width="120px" Text="End" CssClass="btn btn-danger" OnClick="EndTask" Visible="false" />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td style="padding: 10px; border: 1px solid #ccc; text-align: center; width: 33.3%">
                                                                                            <small>
                                                                                                <label>Start Time</label></small>
                                                                                            <br />
                                                                                            <br />
                                                                                            <label>
                                                                                                <asp:Label ID="lblStartTime" runat="server" CssClass="lbltime" Text="00:00"></asp:Label></label>
                                                                                            <asp:HiddenField ID="hdnCurrentTimeLong" runat="server" />
                                                                                            <asp:HiddenField ID="hdnStartTaskTime" runat="server" />
                                                                                            <asp:HiddenField ID="hdnCurrentTimeForTimerTick" runat="server" />
                                                                                        </td>
                                                                                        <td style="padding: 10px; border: 1px solid #ccc; text-align: center; width: 33.3%">
                                                                                            <small>
                                                                                                <label>End Time</label></small>
                                                                                            <br />
                                                                                            <br />
                                                                                            <label>
                                                                                                <asp:Label ID="lblEndTime" runat="server" CssClass="lbltime" Text="00:00"></asp:Label></label>
                                                                                            <asp:HiddenField ID="hdnEndTaskTime" runat="server" />
                                                                                        </td>
                                                                                        <td style="padding: 10px; border: 1px solid #ccc; text-align: center; width: 33.3%">
                                                                                            <asp:UpdatePanel ID="updDuration" runat="server" UpdateMode="Conditional">
                                                                                                <Triggers>
                                                                                                    <%--<asp:AsyncPostBackTrigger ControlID="timer1" EventName="Tick" />--%>
                                                                                                </Triggers>
                                                                                                <ContentTemplate>
                                                                                                    <small>
                                                                                                        <label>Duration(HH:MM:SS)</label></small>
                                                                                                    <br />
                                                                                                    <br />
                                                                                                    <label>
                                                                                                        <asp:Label ID="lblDuration" runat="server" CssClass="lbltime" Text="00:00:00"></asp:Label></label>
                                                                                                </ContentTemplate>
                                                                                            </asp:UpdatePanel>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvAutoNotes" runat="server">
                                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                             <div class="col-sm-2">
                                                                                            <label class="form-label label_setting" for="orgcode" style="    font-size: 12px !important;">Notes: </label>
                                                                                                 </div>
                                                                                             <div class="col-sm-7">   
                                                                                                   <asp:TextBox ID="txtAutoTSNotes" runat="server" TextMode="MultiLine" CssClass="form-control" placeholder="Enter notes (if any) before you end task." Width="250px" Height="80px"></asp:TextBox>                                                                
                                                                                                 </div>     
                                                                         </div> 
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                            <td class="tdfld" style="vertical-align: top">
                                                                <div id="dvStComments" runat="server">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvComments" runat="server">
                                                                                    <asp:LinkButton ID="lknCmnt" runat="server" CommandArgument="test" OnClick="Comments"
                                                                                        ToolTip="View Comments" CssClass="button button-blue"><img src="../images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                             <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label class="label_setting" style="font-weight:bold;">Status:</label></small>
                                                                                <asp:Label ID="lblStatus" runat="server" Font-Size="Medium"></asp:Label>
                                                                                <asp:HiddenField ID="hdnStatusID" runat="server" />
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
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div id="dvWeekWise" runat="server" style="display: none">
                                        <div  style="width:100%;overflow-x:auto;"   >
                                        <table class="tab">
                                            <tr>
                                                <td>
                                                    <isx:CoolGridView ID="gvTimeTrack" runat="server" Width="1010px" Height="300px" AutoGenerateColumns="false" OnRowDataBound="gvTimeTrack_RowDataBound"
                                                        ShowFooter="true">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="Sl#" HeaderStyle-Width="60px" ItemStyle-Width="60px">
                                                                <ItemTemplate>
                                                                    <label><%#((GridViewRow)Container).RowIndex + 1%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Task Name" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("Description")%></label>
                                                                    <asp:HiddenField ID="hdnTaskID" runat="server" Value='<%#Eval("taskId")%>' />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    Total:
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHMonday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtMonday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveMondayNotes" runat="server" TargetControlID="imgMondayNotes"
                                                                        PopupControlID="pnlMondayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgMondayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlMondayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">                                                                            
                                                                            <div class="pop-page-title">
                                                                             <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner"> 
                                                                                            Notes </div>
                                                                                </div> 
                                                                                 </div> 
                                                                                 </div>
                                                                           
                                                                            <section>
                                                                                <asp:TextBox ID="txtMondayNotes" runat="server" TextMode="MultiLine" CssClass="form-control" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnMondayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTMonday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHTuesday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtTuesday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveTuesdayNotes" runat="server" TargetControlID="imgTuesdayNotes"
                                                                        PopupControlID="pnlTuesdayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgTuesdayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlTuesdayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtTuesdayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnTuesdayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTTuesday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHWednesday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtWednesday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveWednesdayNotes" runat="server" TargetControlID="imgWednesdayNotes"
                                                                        PopupControlID="pnlWednesdayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgWednesdayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlWednesdayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtWednesdayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnWednesdayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTWednesday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHThursday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtThursday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveThursdayNotes" runat="server" TargetControlID="imgThursdayNotes"
                                                                        PopupControlID="pnlThursdayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgThursdayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlThursdayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtThursdayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnThursdayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTThursday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHFriday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtFriday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveFridayNotes" runat="server" TargetControlID="imgFridayNotes"
                                                                        PopupControlID="pnlFridayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgFridayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlFridayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtFridayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnFridayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTFriday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHSaturday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtSaturday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveSaturdayNotes" runat="server" TargetControlID="imgSaturdayNotes"
                                                                        PopupControlID="pnlSaturdayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgSaturdayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlSaturdayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtSaturdayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnSaturdayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTSaturday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="90px" ItemStyle-Width="90px">
                                                                <HeaderTemplate>
                                                                    <asp:Label ID="lblHSunday" runat="server"></asp:Label>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:TextBox ID="txtSunday" runat="server" Width="40px" placeholder="HH:MM"></asp:TextBox>
                                                                    <cc1:HoverMenuExtender ID="hveSundayNotes" runat="server" TargetControlID="imgSundayNotes"
                                                                        PopupControlID="pnlSundayNotes" PopupPosition="Center">
                                                                    </cc1:HoverMenuExtender>
                                                                    <asp:Image ID="imgSundayNotes" runat="server" ImageUrl="../images/icons/note.png" />
                                                                    <asp:Panel ID="pnlSundayNotes" runat="server">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: White; padding: 0 0px 5px 0px; min-height: 80%; min-width: 230px; height: 150px;">
                                                                            <header style="height: 7px">
                                                                                <h2 class="pophead">Notes</h2>
                                                                            </header>
                                                                            <section>
                                                                                <asp:TextBox ID="txtSundayNotes" runat="server" TextMode="MultiLine" Width="180px" Height="70px"></asp:TextBox>
                                                                            </section>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:HiddenField ID="hdnSundayDate" runat="server" />
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTSunday" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Total Time(Hrs)">
                                                                <ItemTemplate>
                                                                    <asp:Label ID="lblTotalTime" runat="server"></asp:Label>
                                                                </ItemTemplate>
                                                                <FooterTemplate>
                                                                    <asp:Label ID="lblFTTotalHours" runat="server"></asp:Label>
                                                                </FooterTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 300px">
                                                                <label>No Tasks assigned for the selected job.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                    <asp:HiddenField ID="hdnTimesheetID" runat="server" />
                                                </td>
                                            </tr>
                                        </table>
                                            </div>
                                    </div>
                                    <div id="dvTotalHrs" runat="server" style="display: none" class="alert alert-info">
                                        <table width="100%">
                                            <tr>
                                                <td>Job Hours(HH:MM):&nbsp;&nbsp;<span class="hrs"><%=jobHrs%></span></td>
                                                <td>Hours Spent(HH:MM):&nbsp;&nbsp;<span class="hrs"><%=hrsSpent%></span></td>
                                                <td>Hours Remaining(HH:MM):&nbsp;&nbsp;<span class="hrs"><%=hrsRem%></span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <asp:Panel ID="pnlComments" runat="server" CssClass="modalBackground5" Style="display: none">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                               <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                                Comments </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                         <asp:Button ID="btnCommentsSave" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="btnCommentsSave_Click"></asp:Button>
                                                    <asp:Button ID="btnCommentsClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                           
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
                               
                                <section>
                                    <div class="divfieldset" style="padding:20px;">
                                        <div style="overflow: hidden; overflow-y: auto; height: 275px; width: 500px">
                                            <div id="dvErrorc" runat="server" style="color: Red;text-align:center">  </div>
                                            <br />
                                            <div id="dvCommentsPop" runat="server">
                                                <div id="dvWidgetComments" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                </div>
                                                <br />
                                                <asp:TextBox ID="txtPopComments" runat="server" CssClass="form-control" TextMode="MultiLine" Width="399px"
                                                    Height="150px"></asp:TextBox>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkFake_Cmt" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_Comments" runat="server" DropShadow="false" PopupControlID="pnlComments"
                            TargetControlID="lnkFake_Cmt" BackgroundCssClass="modalBackground1" CancelControlID="btnCommentsClose">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlMinTaskTimeVal" runat="server" Style="display: none" CssClass="modalBackground5">
                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                               <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                                 Alert
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                       <asp:Button ID="btnYesMinTaskTimeVal" runat="server" OnClick="ConfirmEndTask" Text="Yes" CssClass="btn btn-success" />
                                                       <asp:Button ID="btnNoMinTaskTimeVal" runat="server" Text="No" CssClass="btn btn-danger" />
                                                                </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                
                                <section>
                                    <div class="divfieldset" style="padding:27px;">
                                        <small>
                                            <label class="alert alert-danger">
                                                <asp:Label ID="lblConf" runat="server"></asp:Label></label>
                                        </small>
                                    </div>
                                </section>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkMinTaskTimeVal" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popMinTaskTimeVal" runat="server" PopupControlID="pnlMinTaskTimeVal"
                            TargetControlID="lnkMinTaskTimeVal" CancelControlID="btnNoMinTaskTimeVal" BackgroundCssClass="modalBackground1">
                        </cc1:ModalPopupExtender>
                    </ContentTemplate>
                </asp:UpdatePanel>

                <%--<asp:Timer ID="timer1" runat="server"
                            Interval="1000" OnTick="timer1_tick">
                        </asp:Timer>--%>
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
  <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%--<script src="../js/html5shiv.js" type="text/javascript"></script>
        <script src="../js/jquery.tools.min.js"></script>--%>
      
        <%--<script src="../js/jquery.ui.min.js"></script>--%>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script> 
              <script src="../latestdesign/js/bootstrap-select.min.js"></script>
            <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
          
        <%--<script src="../js/global.js"></script>--%>
        <%--   <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
      

            <script>
                $('.input-group.date').datepicker({
                    format: "mm-dd-yyyy",
                    autoclose: true,
                    showonfocus: true,
                    todayhighlight: true,
                });

                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
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


            function pageLoad() {

               

                $(function () {
                    $('[data-toggle="popover"]').popover()
                })
                 
            }
            var jq = $.noConflict();
            function DoOnAjaxPostback() {
                
                $('.date').datepicker({
                    format: "dd/mm/yyyy",
                    autoclose: true,
                    showOnFocus: true,
                    todayHighlight: true,
                }).on('changeDate', function (ev) {
                    $(this).datepicker('hide');
                });


                //$(function () {
                //    $("#ddlTrackingType").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlJobName").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlTaskName").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlYear").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlStartDate").ufd({ log: true });
                //});
            }

            $(document).ready(function () {
                //$(function () {
                //    $("#ddlTrackingType").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlJobName").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlTaskName").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlYear").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlStartDate").ufd({ log: true });
                //});
            });

            function onchangeTime(id) {
                var regExp = /^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])$/;
                if (regExp.test($11(id).value) || $11(id).value == '' || !isNaN($11(id).value))
                    return true;
                else
                    return false;
            }

            function ReplaceIntegers(id, colIndex) {
                if (!isNaN($11(id).value)) {
                    if ($11(id).value == ' ' || $11(id).value == '' || parseInt($11(id).value) == "0")
                        $11(id).value = "00:00";
                    else if (parseInt($11(id).value) <= 9)
                        $11(id).value = "0" + $11(id).value + ":00";
                    else
                        $11(id).value = $11(id).value + ":00";
                }
                return validateMaxJobHrs(colIndex);
            }

            //Validate Maximum Job Hours
            function validateMaxJobHrs(colIndex) {
                //Get Total work hours on each day
                var val = '';
                var grid = $11('<%=gvTimeTrack.ClientID%>');
                var len = parseInt(grid.rows.length) + 2;
                if (len <= 9)
                    len = '0' + len;
                var min1 = 0, min2 = 0, min3 = 0, min4 = 0, min5 = 0, min6 = 0, min7 = 0;
                var m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0, m6 = 0, m7 = 0;
                var n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0, n7 = 0;
                for (var i = 2; i < parseInt(grid.rows.length) + 2; i++) {
                    if (i <= 9)
                        i = '0' + i;
                    if (colIndex == 1) {
                        m1 = ($11(grid.id + '_ctl' + i + '_txtMonday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtMonday').value);
                        min1 += (m1.substring(0, m1.indexOf(':')) - 0) * 60 + (m1.substring(m1.indexOf(':') + 1, m1.length) - 0);
                    }
                    else if (colIndex == 2) {
                        m2 = ($11(grid.id + '_ctl' + i + '_txtTuesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtTuesday').value);
                        min2 += (m2.substring(0, m2.indexOf(':')) - 0) * 60 + (m2.substring(m2.indexOf(':') + 1, m2.length) - 0);
                    }
                    else if (colIndex == 3) {
                        m3 = ($11(grid.id + '_ctl' + i + '_txtWednesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtWednesday').value);
                        min3 += (m3.substring(0, m3.indexOf(':')) - 0) * 60 + (m3.substring(m3.indexOf(':') + 1, m3.length) - 0);
                    }
                    else if (colIndex == 4) {
                        m4 = ($11(grid.id + '_ctl' + i + '_txtThursday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtThursday').value);
                        min4 += (m4.substring(0, m4.indexOf(':')) - 0) * 60 + (m4.substring(m4.indexOf(':') + 1, m4.length) - 0);
                    }
                    else if (colIndex == 5) {
                        m5 = ($11(grid.id + '_ctl' + i + '_txtFriday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtFriday').value);
                        min5 += (m5.substring(0, m5.indexOf(':')) - 0) * 60 + (m5.substring(m5.indexOf(':') + 1, m5.length) - 0);
                    }
                    else if (colIndex == 6) {
                        m6 = ($11(grid.id + '_ctl' + i + '_txtSaturday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSaturday').value);
                        min6 += (m6.substring(0, m6.indexOf(':')) - 0) * 60 + (m6.substring(m6.indexOf(':') + 1, m6.length) - 0);
                    }
                    else if (colIndex == 7) {
                        m7 = ($11(grid.id + '_ctl' + i + '_txtSunday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSunday').value);
                        min7 += (m7.substring(0, m7.indexOf(':')) - 0) * 60 + (m7.substring(m7.indexOf(':') + 1, m7.length) - 0);
                    }
                }
                if (colIndex == 1) {
                    n1 = $11('hdnTotalHrsWorkedOnMonday').value;
                    min1 += (n1.substring(0, n1.indexOf(':')) - 0) * 60 + (n1.substring(n1.indexOf(':') + 1, n1.length) - 0);
                    h1 = Math.floor(min1 / 60);
                    var temp = (min1 - (h1 * 60)).toString();
                    val = h1 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 2) {
                    n2 = $11('hdnTotalHrsWorkedOnTuesday').value;
                    min2 += (n2.substring(0, n2.indexOf(':')) - 0) * 60 + (n2.substring(n2.indexOf(':') + 1, n2.length) - 0);
                    h2 = Math.floor(min2 / 60);
                    var temp = (min2 - (h2 * 60)).toString();
                    val = h2 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 3) {
                    n3 = $11('hdnTotalHrsWorkedOnWednesday').value;
                    min3 += (n3.substring(0, n3.indexOf(':')) - 0) * 60 + (n3.substring(n3.indexOf(':') + 1, n3.length) - 0);
                    h3 = Math.floor(min3 / 60);
                    var temp = (min3 - (h3 * 60)).toString();
                    val = h3 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 4) {
                    n4 = $11('hdnTotalHrsWorkedOnThursday').value;
                    min4 += (n4.substring(0, n4.indexOf(':')) - 0) * 60 + (n4.substring(n4.indexOf(':') + 1, n4.length) - 0);
                    h4 = Math.floor(min4 / 60);
                    var temp = (min4 - (h4 * 60)).toString();
                    val = h4 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 5) {
                    n5 = $11('hdnTotalHrsWorkedOnFriday').value;
                    min5 += (n5.substring(0, n5.indexOf(':')) - 0) * 60 + (n5.substring(n5.indexOf(':') + 1, n5.length) - 0);
                    h5 = Math.floor(min5 / 60);
                    var temp = (min5 - (h5 * 60)).toString();
                    val = h5 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 6) {
                    n6 = $11('hdnTotalHrsWorkedOnSaturday').value;
                    min6 += (n6.substring(0, n6.indexOf(':')) - 0) * 60 + (n6.substring(n6.indexOf(':') + 1, n6.length) - 0);
                    h6 = Math.floor(min6 / 60);
                    var temp = (min6 - (h6 * 60)).toString();
                    val = h6 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }
                else if (colIndex == 7) {
                    n7 = $11('hdnTotalHrsWorkedOnSunday').value;
                    min7 += (n7.substring(0, n7.indexOf(':')) - 0) * 60 + (n7.substring(n7.indexOf(':') + 1, n7.length) - 0);
                    h7 = Math.floor(min7 / 60);
                    var temp = (min7 - (h7 * 60)).toString();
                    val = h7 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                }

                //Get Total work hours on each day
                var maxJobHrs = $11('hdnMaxJobHrs').value;
                var maxCnt = parseInt(lkpMaxHoursValidation(val, maxJobHrs));
                //Display error when any of above conditions satisfy
                if (maxCnt > 0) {
                    $11('hdnIsDayWorkHoursExceeded').value = "true";
                    makeGridFieldsHighlighted(grid, "1px solid Red", colIndex);
                    $11("dvErr").style.display = "block";
                    $11("dvErr").innerHTML = "Duration for all the jobs in a day cannot be more than " + maxJobHrs + " hours";
                    $11("dvErr").style.color = "Red";
                    return false;
                }
                else {
                    makeGridFieldsHighlighted(grid, "1px solid #ccc", colIndex);
                    $11("dvErr").innerHTML = "";
                    return true;
                }
            }
            //Validate Maximum Job Hours

            //Misselleneous
            function makeGridFieldsHighlighted(grid, borderStyle, colIndex) {
                var days = grid.getElementsByTagName("input");
                for (var i = 0; i < days.length; i++) {
                    if (days[i].type == 'text') {
                        if (colIndex == 1) {
                            if (days[i].id.indexOf('txtMonday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 2) {
                            if (days[i].id.indexOf('txtTuesday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 3) {
                            if (days[i].id.indexOf('txtWednesday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 4) {
                            if (days[i].id.indexOf('txtThursday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 5) {
                            if (days[i].id.indexOf('txtFriday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 6) {
                            if (days[i].id.indexOf('txtSaturday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                        else if (colIndex == 7) {
                            if (days[i].id.indexOf('txtSunday') > 0)
                                days[i].style["border"] = borderStyle;
                        }
                    }
                }
            }
            //Misselleneous

            //Calculate totals        
            function calcRowTotal(rowIndex, txt, img) {
                var grid = $11('<%=gvTimeTrack.ClientID%>');
                //////Validate input
                if (onchangeTime(txt)) {
                    $11(txt).style.border = "1px solid #ccc";
                    //////Validate input
                    ////// Calculate row totals //////
                    var i = parseInt(rowIndex + 2);
                    if (i <= 9)
                        i = '0' + i;

                    var m1 = ($11(grid.id + '_ctl' + i + '_txtSunday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSunday').value);
                    var m2 = ($11(grid.id + '_ctl' + i + '_txtMonday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtMonday').value);
                    var m3 = ($11(grid.id + '_ctl' + i + '_txtTuesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtTuesday').value);
                    var m4 = ($11(grid.id + '_ctl' + i + '_txtWednesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtWednesday').value);
                    var m5 = ($11(grid.id + '_ctl' + i + '_txtThursday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtThursday').value);
                    var m6 = ($11(grid.id + '_ctl' + i + '_txtFriday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtFriday').value);
                    var m7 = ($11(grid.id + '_ctl' + i + '_txtSaturday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSaturday').value);

                    var m = (m1.substring(0, m1.indexOf(':')) - 0) * 60 + (m1.substring(m1.indexOf(':') + 1, m1.length) - 0) +
                        (m2.substring(0, m2.indexOf(':')) - 0) * 60 + (m2.substring(m2.indexOf(':') + 1, m2.length) - 0) +
                        (m3.substring(0, m3.indexOf(':')) - 0) * 60 + (m3.substring(m3.indexOf(':') + 1, m3.length) - 0) +
                        (m4.substring(0, m4.indexOf(':')) - 0) * 60 + (m4.substring(m4.indexOf(':') + 1, m4.length) - 0) +
                        (m5.substring(0, m5.indexOf(':')) - 0) * 60 + (m5.substring(m5.indexOf(':') + 1, m5.length) - 0) +
                        (m6.substring(0, m6.indexOf(':')) - 0) * 60 + (m6.substring(m6.indexOf(':') + 1, m6.length) - 0) +
                        (m7.substring(0, m7.indexOf(':')) - 0) * 60 + (m7.substring(m7.indexOf(':') + 1, m7.length) - 0);
                    var h = Math.floor(m / 60);
                    var temp = (m - (h * 60)).toString();
                    $11(grid.id + '_ctl' + i + '_lblTotalTime').innerHTML = h + ':' + (temp.length == 1 ? ("0" + temp) : temp);

                    if ($11(txt).value.length > 0 && $11(txt).value != "0" && $11(txt).value != "00:00" && $11(txt).value != " ")
                        $11(img).style.visibility = "visible";
                    else
                        $11(img).style.visibility = "hidden";

                    ////// Calculate column totals //////
                    calcColumnTotal();
                }
                else {
                    $11(txt).style.border = "1px solid Red";
                    $11('dvErr').innerHTML = 'Invalid Time';
                    $11('dvErr').style.color = 'Red';
                    return false;
                }
            }

            function calcColumnTotal() {
                var grid = $11('<%=gvTimeTrack.ClientID%>');
                var min1 = 0, min2 = 0, min3 = 0, min4 = 0, min5 = 0, min6 = 0, min7 = 0, min8 = 0;
                var h1 = 0, h2 = 0, h3 = 0, h4 = 0, h5 = 0, h6 = 0, h7 = 0, h8 = 0;
                var len = parseInt(grid.rows.length) + 2;
                if (len <= 9)
                    len = '0' + len;
                for (var i = 2; i < parseInt(grid.rows.length) + 2; i++) {
                    var j = i;
                    if (j <= 9)
                        j = '0' + j;

                    var m1 = ($11(grid.id + '_ctl' + j + '_txtSunday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtSunday').value);
                    var m2 = ($11(grid.id + '_ctl' + j + '_txtMonday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtMonday').value);
                    var m3 = ($11(grid.id + '_ctl' + j + '_txtTuesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtTuesday').value);
                    var m4 = ($11(grid.id + '_ctl' + j + '_txtWednesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtWednesday').value);
                    var m5 = ($11(grid.id + '_ctl' + j + '_txtThursday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtThursday').value);
                    var m6 = ($11(grid.id + '_ctl' + j + '_txtFriday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtFriday').value);
                    var m7 = ($11(grid.id + '_ctl' + j + '_txtSaturday').value == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_txtSaturday').value);
                    var m8 = ($11(grid.id + '_ctl' + j + '_lblTotalTime').innerHTML == '' ? '00:00' : $11(grid.id + '_ctl' + j + '_lblTotalTime').innerHTML);

                    min1 += (m1.substring(0, m1.indexOf(':')) - 0) * 60 + (m1.substring(m1.indexOf(':') + 1, m1.length) - 0);
                    min2 += (m2.substring(0, m2.indexOf(':')) - 0) * 60 + (m2.substring(m2.indexOf(':') + 1, m2.length) - 0);
                    min3 += (m3.substring(0, m3.indexOf(':')) - 0) * 60 + (m3.substring(m3.indexOf(':') + 1, m3.length) - 0);
                    min4 += (m4.substring(0, m4.indexOf(':')) - 0) * 60 + (m4.substring(m4.indexOf(':') + 1, m4.length) - 0);
                    min5 += (m5.substring(0, m5.indexOf(':')) - 0) * 60 + (m5.substring(m5.indexOf(':') + 1, m5.length) - 0);
                    min6 += (m6.substring(0, m6.indexOf(':')) - 0) * 60 + (m6.substring(m6.indexOf(':') + 1, m6.length) - 0);
                    min7 += (m7.substring(0, m7.indexOf(':')) - 0) * 60 + (m7.substring(m7.indexOf(':') + 1, m7.length) - 0);
                    min8 += (m8.substring(0, m8.indexOf(':')) - 0) * 60 + (m8.substring(m8.indexOf(':') + 1, m8.length) - 0);
                }
                h1 = Math.floor(min1 / 60);
                h2 = Math.floor(min2 / 60);
                h3 = Math.floor(min3 / 60);
                h4 = Math.floor(min4 / 60);
                h5 = Math.floor(min5 / 60);
                h6 = Math.floor(min6 / 60);
                h7 = Math.floor(min7 / 60);
                h8 = Math.floor(min8 / 60);
                var temp = (min1 - (h1 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTSunday').innerHTML = h1 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min2 - (h2 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTMonday').innerHTML = h2 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min3 - (h3 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTTuesday').innerHTML = h3 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min4 - (h4 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTWednesday').innerHTML = h4 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min5 - (h5 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTThursday').innerHTML = h5 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min6 - (h6 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTFriday').innerHTML = h6 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min7 - (h7 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTSaturday').innerHTML = h7 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                temp = (min8 - (h8 * 60)).toString();
                $11(grid.id + '_ctl' + len + '_lblFTTotalHours').innerHTML = h8 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
            }
            //Calculate totals

            //Show alert on data loss
            function AlertDataLoss(type) {
                var ret;
                if ($11(type).value.toLowerCase().indexOf('auto') > -1)
                    ret = confirm("The changes will be lost. Are you sure you want to change the Track Type?");
                if (ret)
                    return true;
                else
                    return false;
            }
            //Show alert on data loss

            //Validations on Start button click
            function validateStartTask() {
                if ($11('ddlJobName').value == '0') {
                    $11('dvErr').innerHTML = 'Please select a Job Name';
                    $11('dvErr').style.color = 'Red';
                    return false;
                }
                else
                    return true;
            }
            //Validations on Start button click

            //Validations for weekly timesheet upon Save/Submit
            function validateWeeklyTS() {
                var maxJobHrs = $11('hdnMaxJobHrs').value;
                var minTaskTime = $11('hdnMinTaskTime').value;
                var grid = $11('<%=gvTimeTrack.ClientID%>');
            if (grid != null) {
                var len = grid.rows.length;
                if (len > 0) {
                    var cnt = 0;
                    var cnt1 = 0;
                    var count = 0;
                    var minCount = 0;
                    var min1 = 0, min2 = 0, min3 = 0, min4 = 0, min5 = 0, min6 = 0, min7 = 0, min8 = 0;
                    var h1 = 0, h2 = 0, h3 = 0, h4 = 0, h5 = 0, h6 = 0, h7 = 0;
                    var x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0;
                    for (var i = 2; i <= len + 1; i++) {
                        if (i <= 9) {
                            i = '0' + i;
                        }

                        //Get cell values in time format
                        var m1 = $11(grid.id + '_ctl' + i + '_txtMonday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtMonday').value;
                        var m2 = $11(grid.id + '_ctl' + i + '_txtTuesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtTuesday').value;
                        var m3 = $11(grid.id + '_ctl' + i + '_txtWednesday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtWednesday').value;
                        var m4 = $11(grid.id + '_ctl' + i + '_txtThursday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtThursday').value;
                        var m5 = $11(grid.id + '_ctl' + i + '_txtFriday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtFriday').value;
                        var m6 = $11(grid.id + '_ctl' + i + '_txtSaturday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSaturday').value;
                        var m7 = $11(grid.id + '_ctl' + i + '_txtSunday').value == '' ? '00:00' : $11(grid.id + '_ctl' + i + '_txtSunday').value;

                        min1 += (m1.substring(0, m1.indexOf(':')) - 0) * 60 + (m1.substring(m1.indexOf(':') + 1, m1.length) - 0);
                        min2 += (m2.substring(0, m2.indexOf(':')) - 0) * 60 + (m2.substring(m2.indexOf(':') + 1, m2.length) - 0);
                        min3 += (m3.substring(0, m3.indexOf(':')) - 0) * 60 + (m3.substring(m3.indexOf(':') + 1, m3.length) - 0);
                        min4 += (m4.substring(0, m4.indexOf(':')) - 0) * 60 + (m4.substring(m4.indexOf(':') + 1, m4.length) - 0);
                        min5 += (m5.substring(0, m5.indexOf(':')) - 0) * 60 + (m5.substring(m5.indexOf(':') + 1, m5.length) - 0);
                        min6 += (m6.substring(0, m6.indexOf(':')) - 0) * 60 + (m6.substring(m6.indexOf(':') + 1, m6.length) - 0);
                        min7 += (m7.substring(0, m7.indexOf(':')) - 0) * 60 + (m7.substring(m7.indexOf(':') + 1, m7.length) - 0);
                        //Get cell values in time format                                     

                        //Validate field values to contain atleast one input in the grid
                        if ($11(grid.id + '_ctl' + i + '_txtMonday').value != 0 || $11(grid.id + '_ctl' + i + '_txtTuesday').value != 0 || $11(grid.id + '_ctl' + i + '_txtWednesday').value != 0 ||
                            $11(grid.id + '_ctl' + i + '_txtThursday').value != 0 || $11(grid.id + '_ctl' + i + '_txtFriday').value != 0 || $11(grid.id + '_ctl' + i + '_txtSaturday').value != 0 ||
                            $11(grid.id + '_ctl' + i + '_txtSunday').value != 0) {
                            cnt++;
                        }
                        //Validate field values to contain atleast one input in the grid

                        //Validate fidl value for correct format
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtMonday')) {
                            $11(grid.id + '_ctl' + i + '_txtMonday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtTuesday')) {
                            $11(grid.id + '_ctl' + i + '_txtTuesday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtWednesday')) {
                            $11(grid.id + '_ctl' + i + '_txtWednesday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtThursday')) {
                            $11(grid.id + '_ctl' + i + '_txtThursday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtFriday')) {
                            $11(grid.id + '_ctl' + i + '_txtFriday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtSaturday')) {
                            $11(grid.id + '_ctl' + i + '_txtSaturday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        if (!onchangeTime(grid.id + '_ctl' + i + '_txtSunday')) {
                            $11(grid.id + '_ctl' + i + '_txtSunday').style["border"] = "1px solid Red";
                            cnt1--;
                        }
                        //Validate fidl value for correct format
                    }
                    if (cnt == 0) {
                        $11("dvErr").style.display = "block";
                        $11("dvErr").innerHTML = "Please provide atleast one input.";
                        $11("dvErr").style.color = "Red";
                        return false;
                    }
                    else if (cnt1 < 0) {
                        $11("dvErr").style.display = "block";
                        $11("dvErr").innerHTML = "Please provide valid input in the format HH:MM.";
                        $11("dvErr").style.color = "Red";
                        return false;
                    }
                    else if (cnt > 0) {
                        //h1 = Math.floor(min1 / 60);
                        //h2 = Math.floor(min2 / 60);
                        //h3 = Math.floor(min3 / 60);
                        //h4 = Math.floor(min4 / 60);
                        //h5 = Math.floor(min5 / 60);
                        //h6 = Math.floor(min6 / 60);
                        //h7 = Math.floor(min7 / 60);

                        //var temp = (min1 - (h1 * 60)).toString();
                        //x1 = h1 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min2 - (h2 * 60)).toString();
                        //x2 = h2 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min3 - (h3 * 60)).toString();
                        //x3 = h3 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min4 - (h4 * 60)).toString();
                        //x4 = h4 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min5 - (h5 * 60)).toString();
                        //x5 = h5 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min6 - (h6 * 60)).toString();
                        //x6 = h6 + ':' + (temp.length == 1 ? ("0" + temp) : temp);
                        //temp = (min7 - (h7 * 60)).toString();
                        //x7 = h7 + ':' + (temp.length == 1 ? ("0" + temp) : temp);

                        ////validate monday fields
                        //cnt = 0;
                        //count = parseInt(lkpMaxHoursValidation(x1, maxJobHrs));//txtMonday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtMonday');
                        ////validate monday fields

                        ////validate tuesday fields
                        //count = parseInt(lkpMaxHoursValidation(x2, maxJobHrs));//txtTuesday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtTuesday');
                        ////validate tuesday fields

                        ////validate wednesday fields
                        //count = parseInt(lkpMaxHoursValidation(x3, maxJobHrs));//txtWednesday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtWednesday');
                        ////validate wednesday fields

                        ////validate thursday fields
                        //count = parseInt(lkpMaxHoursValidation(x4, maxJobHrs));//txtThursday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtThursday');
                        ////validate thursday fields

                        ////validate friday fields
                        //count = parseInt(lkpMaxHoursValidation(x5, maxJobHrs));//txtFriday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtFriday');
                        ////validate friday fields

                        ////validate saturday fields
                        //count = parseInt(lkpMaxHoursValidation(x6, maxJobHrs));//txtSaturday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtSaturday');
                        ////validate saturday fields

                        ////validate sunday fields
                        //count = parseInt(lkpMaxHoursValidation(x7, maxJobHrs));//txtSunday
                        //cnt += lkpColMaxHoursValidation(count, grid, 'txtSunday');
                        ////validate sunday fields
                        //if (cnt > 0)
                        //    return false;
                    }
                }
            }
        }
        //Validations for weekly timesheet upon Save/Submit 

        //lookup function for validating column max hours
        function lkpColMaxHoursValidation(count, grid, day) {
            var cnt = 0;
            var maxJobHrs = $11('hdnMaxJobHrs').value;
            var weekDay = grid.getElementsByTagName("input");
            if (count > 0) {
                for (var i = 0; i < weekDay.length; i++) {
                    if (weekDay[i].type == "text" && weekDay[i].id.indexOf(day) > 0) {
                        weekDay[i].style["border"] = "1px solid Red";
                        $11("dvErr").style.display = "block";
                        $11("dvErr").innerHTML = "Duration in a day cannot be more than " + maxJobHrs + " hours";
                        $11("dvErr").style.color = "Red";
                        cnt++;
                    }
                }
            }
            return cnt;
        }
        //lookup function for validating column max hours

        //Validate comments
        function validateComments(txt) {
            $11('dvErrorc').style.color = "Red";
            var cnt = 0;
            if ($11(txt).value == 0) {
                $11('dvErrorc').innerHTML = "Please provide comments.";
                cnt++;
            }
            if ($11(txt).value.length > 500) {
                $11('dvErrorc').innerHTML = "Comments length cannot exceed 500 characters.";
                cnt++;
            }
            if (cnt > 0)
                return false;
            else
                return true;
        }
        //Validate comments

        //lookup function for validating Max job hours
        function lkpMaxHoursValidation(val, maxHrs) {
            var arrMaxJobHrs = maxHrs.split(':');
            var arrVal = val.split(':');
            var cnt = 0;
            if (parseInt(arrVal[0]) > parseInt(arrMaxJobHrs[0]))//Check if textbox value exceeds Max job hours(hours comparision).
                cnt++;
            else if (parseInt(arrVal[0]) == parseInt(arrMaxJobHrs[0])) {//Check if textbox value exceeds Max job hours(minutes comparision).
                if (parseInt(arrVal[1]) > parseInt(arrMaxJobHrs[1]))
                    cnt++;
            }
            return cnt;
        }
        //lookup function for validating Max job hours

        //lookup function for validating Min Task hours
        function lkpMinTaskHoursValidation(val, maxHrs) {
            var arrMaxJobHrs = maxHrs.split(':');
            var arrVal = val.split(':');
            var cnt = 0;
            if (parseInt(arrVal[0]) < parseInt(arrMaxJobHrs[0]))//Check if textbox value exceeds Max job hours(hours comparision).
                cnt++;
            else if (parseInt(arrVal[0]) == parseInt(arrMaxJobHrs[0])) {//Check if textbox value exceeds Max job hours(minutes comparision).
                if (parseInt(arrVal[1]) < parseInt(arrMaxJobHrs[1]))
                    cnt++;
            }
            return cnt;
        }
        //lookup function for validating Min Task hours

        //This javascript code is required if you are using a CoolGridView inside an update pannel.
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
        //This javascript code is required if you are using a CoolGridView inside an update pannel.

        jq("[src*=down]").live("click", function () {
            jq(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + jq(this).next().html() + "</td></tr>")
            jq(this).attr("src", "../images/uparrow.jpg");
        });
        jq("[src*=up]").live("click", function () {
            jq(this).attr("src", "../images/downarrow.jpg");
            jq(this).closest("tr").next().remove();
        });

        //Automatic Tracking
        var dvDate;
        var interval;
        function getLocaltime(type) {
            var localTime = new Date();
            var hours = localTime.getHours();
            var ampm = (hours >= 12 ? 'PM' : 'AM');
            hours = hours % 12;
            hours = hours ? hours : 12;
            var minutes = localTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = localTime.getSeconds();
            var lbl;
            //alert(type);
            if (type == 1) {
                getCurrentDate();
                $11("hdnStartTaskTime").value = hours + ":" + minutes + " " + ampm;
                $11("hdnCurrentTimeLong").value = hours + ":" + minutes + ":" + seconds + " " + ampm;
                interval = window.setInterval(displayTimeDuration, 1000);
                return true;
            }
            else {
                var timeDiff = showDiff();
                if (timeDiff != '') {
                    if (compareTwoTimeDurations($11('hdnMinTaskTime').value, timeDiff, ':') > 0) {
                        $11('lblConf').innerText = 'Duration is less than minimum task duration. Are you sure you want to end?';
                        $find('popMinTaskTimeVal').show();
                        return false;
                    }
                }
                else {
                    window.clearInterval(interval);
                    $11("hdnEndTaskTime").value = hours + ":" + minutes + " " + ampm;
                    return true;
                }
            }
        }

        function displayTimeDuration() {
            $11("lblDuration").innerText = showDiff();
        }

        function getLocalLongTimeForTimer() {
            var localTime = new Date();
            var year = localTime.getFullYear();
            var month = localTime.getMonth();
            var date = localTime.getDate();
            var hours = localTime.getHours();
            var ampm = (hours >= 12 ? 'PM' : 'AM');
            hours = hours % 12;
            hours = hours ? hours : 12;
            var minutes = localTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = localTime.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            var hdn = $11('hdnCurrentTimeForTimerTick');
            hdn.value = month + '/' + date + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        }

        function getCurrentDate() {
            var localTime = new Date();
            var year = localTime.getFullYear();
            var month = localTime.getMonth();
            month = month < 10 ? '0' + month : month;
            var date = localTime.getDate();
            date = date < 10 ? '0' + date : date;
            var hours = localTime.getHours();
            var ampm = (hours >= 12 ? 'PM' : 'AM');
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0' + hours : hours;
            var minutes = localTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = localTime.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            dvDate = month + "/" + date + "/" + year;
        }

        function getTimeFormatted() {
            var localTime = new Date();
            var year = localTime.getFullYear();
            var month = localTime.getMonth();
            month = month < 10 ? '0' + month : month;
            var date = localTime.getDate();
            date = date < 10 ? '0' + date : date;
            var hours = localTime.getHours();
            var ampm = (hours >= 12 ? 'PM' : 'AM');
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0' + hours : hours;
            var minutes = localTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = localTime.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            return hours + ":" + minutes + ":" + seconds + " " + ampm;
        }

        function showDiff() {

            var dvStartTime = $11("hdnStartTaskTime");

            var date1 = new Date();
            //var date2 = new Date("04/13/2017 02:00:00 PM");
            var date2 = new Date(dvDate + " " + dvStartTime.value);

            var diff = (date2 - date1) / 1000;
            var diff = Math.abs(Math.floor(diff));

            var days = Math.floor(diff / (24 * 60 * 60));
            var leftSec = diff - days * 24 * 60 * 60;

            var hrs = Math.floor(leftSec / (60 * 60));
            hrs = hrs < 10 ? '0' + hrs : hrs;
            var leftSec = leftSec - hrs * 60 * 60;

            var min = Math.floor(leftSec / (60));
            min = min < 10 ? '0' + min : min;
            var leftSec = leftSec - min * 60;
            leftSec = leftSec < 10 ? '0' + leftSec : leftSec;

            return hrs + ":" + min + ":" + leftSec;
        }

        function compareTwoTimeDurations(timeDur1, timeDur2, seperator) {
            var arrTimeDur1 = timeDur1.split(seperator);
            var arrTimeDur2 = timeDur2.split(seperator);
            var count = 0;
            if (parseInt(arrTimeDur2[0]) > parseInt(arrTimeDur1[0]))
                count++;
            else if (parseInt(arrTimeDur2[0]) == parseInt(arrTimeDur1[0]))
                if (parseInt(arrTimeDur2[1]) < parseInt(arrTimeDur1[1]))
                    count++;
            return count;
        }

        //Automatic Tracking
        </script>
    </form>
</body>
</html>
