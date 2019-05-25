<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DownloadPOs.aspx.cs" Inherits="DownloadPOs" %>

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
    <title>ApproveIt - Export POs</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link href="css/sumoselect.css" rel="stylesheet">
    <style>
        div.dd_chk_drop {
            background-color: white;
            border: 1px solid #CCCCCC;
            text-align: left;
            z-index: 1000;
            left: -1px;
            top: 33px !important;
            min-width: 100%;
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
            }

        .popover-content {
            min-width: 250px;
        }

        .dd_chk_select {
            display: block;
            width: 100% !important;
            height: 34px !important;
            padding: 6px 12px !important;
            font-size: 12px;
            line-height: 1.42857143;
            color: #555;
            background: #F2F2F2 !important;
            background-color: #fff;
            background-image: none;
            border: 1px solid #888888;
            border-radius: 0px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
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

            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                <div class=" container-fluid  cd-main-content">

                    <section class="grid_7" style="padding-top: 0px">
                        <!-- the tabs -->
                        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
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
                                <asp:PostBackTrigger ControlID="btnExportPO" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 100%; margin-top: 50px">

                                    <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div id="dvHeader" class="page-title"><%-- <span class="font-awesome-icon-block"><i class="fa fa-plus" aria-hidden="true"></i></span>--%>Export POs</div>

                                        </div>
                                        <div class="clearfix"></div>
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                            <div id="dvError" runat="server" class="mb20" style="color: Red; font-weight: bold">
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                            <div class="col-sm-5" style="display: inline-flex;">
                                                <label class="form-label label_setting">Select Period:</label>
                                            </div>
                                            <div class="col-sm-7">
                                                <asp:DropDownList ID="ddlPeriod" runat="server"
                                                    CssClass="form-control selectpicker" data-live-search="true" onchange="showDateWindow()">
                                                    <asp:ListItem Value="1" Text="Last Year"></asp:ListItem>
                                                    <asp:ListItem Value="2" Text="Last Quarter"></asp:ListItem>
                                                    <asp:ListItem Value="3" Text="Last Month"></asp:ListItem>
                                                    <asp:ListItem Value="4" Text="Between Dates"></asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div id="dvDateWindow" style="display: none" runat="server">
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <label class="form-label label_setting" for="orgcode">From:</label>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="input-group date" data-date-format="mm/dd/yyyy" style="z-index: 0">
                                                        <asp:TextBox ID="txtFrom" runat="server" CssClass="date form-control" Width="100px" autocomplete="off"></asp:TextBox>
                                                        <div class="input-group-addon">
                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div class="col-sm-5">
                                                    <label class="form-label label_setting" for="orgcode">To:</label>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="input-group date" data-date-format="mm/dd/yyyy" style="z-index: 0">
                                                        <asp:TextBox ID="txtTo" runat="server" CssClass="date form-control" Width="100px" autocomplete="off"></asp:TextBox>
                                                        <div class="input-group-addon">
                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                            <div class="col-sm-5" style="display: inline-flex;">
                                                <label class="form-label label_setting">Status :</label>
                                            </div>
                                            <div class="col-sm-7">
                                                <%--<asp:DropDownList ID="ddlStatus" runat="server"
                                                        CssClass="form-control selectpicker" data-live-search="true">
                                                    </asp:DropDownList>--%>
                                                <%--<asp:DropDownCheckBoxes ID="ddlStatus" runat="server" UseButtons="true" UseSelectAllNode="true" OnSelectedIndexChanged="ddlStatus_SelectedIndexChanged" CssClass="form-control selectpicker dd_chk_select" data-live-search="true">
                                                    <Texts OkButton="Yes" CancelButton="No" SelectAllNode="ALL" SelectBoxCaption="Select multiple" />
                                                </asp:DropDownCheckBoxes>--%>
                                                
                                                <asp:ListBox ID="ddlStatus" runat="server" SelectionMode="Multiple" Visible="false"></asp:ListBox>

                                                <asp:CheckBoxList ID="cblStatus" runat="server" RepeatColumns="4" RepeatDirection="Horizontal" Width="700px">
                                                </asp:CheckBoxList>

                                                <asp:HiddenField ID="hdnStatus" runat="server" />
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <asp:Button ID="btnExportPO" runat="server" OnClick="btnExportPO_Click" Text="Export POs" CssClass="btn btn-success pull-left" />
                                        </div>
                                    </div>
                                </div>
                                </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
                <!--footer-->
                <uc5:footer ID="footer" runat="server" />
                <!--footer-->
            </div>
        </div>

    </form>

    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/modernizr.js"></script>
    <%--<script src="js/jquery.tools.min.js"></script>--%>

    <script src="latestdesign/js/bootstrap.min.js"></script>
    <%--<script src="js/jquery.ui.min.js"></script>--%>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/main.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="js/jquery.sumoselect.min.js"></script>
    <script>
        function DoOnAjaxPostback() {

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
                orientation: "bottom auto",
            }).on('changeDate', function (ev) {
                $(this).datepicker('hide');
            });
        }


        $('.date').datepicker({
            format: "mm/dd/yyyy",
            autoclose: true,
            showOnFocus: true,
            todayHighlight: true,
            orientation: "bottom auto",
        }).on('changeDate', function (ev) {
            $(this).datepicker('hide');
        });

        function showDateWindow() {
            if (document.getElementById("ddlPeriod").value == 4)
                document.getElementById("dvDateWindow").style.display = "block";
            else
                document.getElementById("dvDateWindow").style.display = "none";
        }
    </script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
</body>
</html>

