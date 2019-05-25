<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ReceivePO.aspx.cs" Inherits="ReceivePO" %>

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
    <title>ApproveIt - Receive Purchase Order</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <!-- CSS reset -->
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <%--    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <%-- <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />--%>

    <style>
        #overlay {
            position: fixed;
            z-index: 999999999;
            top: 0px;
            left: 0px;
            background-color: #fff;
            width: 100%;
            height: 100%;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
        }

        #gvDetails_RecvjEsCoOl_mainDiv {
            width: 100% !important;
        }

        #gvDetails_RecvjEsCoOl_mainDiv {
            width: 100%;
        }

        .rowcolor {
            background-color: #EEB4B4;
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

        .markItUp {
            width: 300px;
        }

        .lnk {
            color: White;
            text-decoration: underline;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            color: #555555;
        }

        #gvDetails_PenjEsCoOl_headerDiv, #gvDetails_RecvjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

        #gvDetails_Pen_ctl02_pnlLoc {
            position: absolute;
            visibility: visible;
            top: 41%;
            left: 28%;
        }

        #gvDetails_PenjEsCoOl_headerDiv div table tbody tr th, #gvDetails_RecvjEsCoOl_headerDiv div table tbody tr th {
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

        #gvDetails_Pen_ctl02_pnlLoc {
            left: 50% !important;
        }

        #gvDetails_Pen tbody tr td, #gvDetails_Recv tbody tr td {
            height: 30px;
            line-height: 27px;
            border: 0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px !important;
        }

        #gvDetails_PenjEsCoOl_mainDiv, #gvDetails_RecvjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvDetails_Pen TR TD, #gvDetails_Pen TR TH, #gvDetails_Pen TR TH div, #gvDetails_Pen TR TD div,
        #gvDetails_Recv TR TD, #gvDetails_Recv TR TH, #gvDetails_Recv TR TH div, #gvDetails_Recv TR TD div {
            overflow: visible;
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
            list-style: none;
            text-align: left;
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

        .tablemain td {
            padding: 5px;
            text-align: left;
            width: 100%;
            border: none;
            text-align: left;
        }

        .rowLot {
        }

        .rowLoc {
        }

        .rowItem {
        }

        #gvDetails_Pen_ctl04_pnlLoc {
            position: absolute;
            visibility: visible;
            left: 50% !important;
            top: 50% !important;
            z-index: 1000;
        }
        /*custom tab styling begin*/
        .approvaltabs {
            list-style: none;
            margin: 0 !important;
            padding: 0;
            height: 45px;
            border-bottom: 1px solid #aaa;
        }

            /* single tab */
            .approvaltabs li {
                float: left;
                text-indent: 0;
                padding: 0;
                margin: 0 2px 0 0 !important;
                list-style-image: none !important;
                border-top: 1px solid #aaa;
                border-left: 1px solid #aaa;
                border-right: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 4px;
        -webkit-border-top-right-radius: 4px;
        -khtml-border-top-left-radius: 4px;
        -khtml-border-top-right-radius: 4px;
        -moz-border-radius: 4px 4px 0 0;
        border-radius: 4px 4px 0 0;*/
            }

            .approvaltabs .pend {
                border-top: 7px solid #FFFFAA;
                border-bottom: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                font-size: 1em;
                display: block;
                height: 44px;
                line-height: 35px;
                width: 120px;
                text-align: center;
                text-decoration: none;
                color: #000;
                padding: 0px;
                margin: 0px;
                position: relative;
                top: 0px;
                -webkit-background-clip: padding-box;
                filter: alpha(opacity=50);
                opacity: 0.5;
            }

                .approvaltabs .pend:active {
                    outline: none;
                }

                /* when mouse enters the tab move the background image */
                .approvaltabs .pend:hover {
                    border-top: 7px solid #FFFF00;
                    color: Black;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

                /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
                .approvaltabs .pend .current, .approvaltabs .pend .current:hover, .approvaltabs li .pend.current {
                    border-bottom: 1px solid #fff;
                    border-top: 7px solid #FFFF00;
                    cursor: default !important;
                    color: #000 !important;
                    color: Black !important;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

            .approvaltabs .appr {
                border-top: 7px solid #93DB70;
                border-bottom: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                font-size: 1em;
                display: block;
                height: 44px;
                line-height: 35px;
                width: 120px;
                text-align: center;
                text-decoration: none;
                color: #000;
                padding: 0px;
                margin: 0px;
                position: relative;
                top: 0px;
                -webkit-background-clip: padding-box;
                filter: alpha(opacity=50);
                opacity: 0.5;
            }

                .approvaltabs .appr:active {
                    outline: none;
                }

                /* when mouse enters the tab move the background image */
                .approvaltabs .appr:hover {
                    border-top: 7px solid #49E20E;
                    color: Black;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

                /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
                .approvaltabs .appr .current, .approvaltabs .appr .current:hover, .approvaltabs li .appr.current {
                    border-bottom: 1px solid #fff;
                    border-top: 7px solid #49E20E;
                    cursor: default !important;
                    color: #000 !important;
                    /*text-shadow: 0 1px 0 #fff;*/
                    color: Black !important;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

            .approvaltabs .rejected {
                border-top: 7px solid #FFC1C1;
                border-bottom: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                font-size: 1em;
                display: block;
                height: 25px;
                line-height: 26px;
                width: 120px;
                text-align: center;
                text-decoration: none;
                color: #000;
                padding: 0px;
                margin: 0px;
                position: relative;
                /*text-shadow: 0 1px 0 #fff;*/
                top: 0px;
                -webkit-background-clip: padding-box;
                filter: alpha(opacity=50);
                opacity: 0.5;
            }

                .approvaltabs .rejected:active {
                    outline: none;
                }

                /* when mouse enters the tab move the background image */
                .approvaltabs .rejected:hover {
                    border-top: 7px solid #FC1501;
                    /*background: #FC1501;
                    -pie-background: #FC1501;*/
                    color: Black;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

                /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
                .approvaltabs .rejected .current, .approvaltabs .rejected .current:hover, .approvaltabs li .rejected.current {
                    border-bottom: 1px solid #fff;
                    border-top: 7px solid #FC1501;
                    cursor: default !important;
                    color: #000 !important;
                    color: Black !important;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

            .approvaltabs .parked {
                border-top: 7px solid #B0E2FF;
                border-bottom: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                font-size: 1em;
                display: block;
                height: 25px;
                line-height: 26px;
                width: 120px;
                text-align: center;
                text-decoration: none;
                color: #000;
                padding: 0px;
                margin: 0px;
                position: relative;
                /*text-shadow: 0 1px 0 #fff;*/
                top: 0px;
                -webkit-background-clip: padding-box;
                filter: alpha(opacity=50);
                opacity: 0.5;
            }

                .approvaltabs .parked:active {
                    outline: none;
                }

                /* when mouse enters the tab move the background image */
                .approvaltabs .parked:hover {
                    border-top: 7px solid #0276FD;
                    color: Black;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

                /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
                .approvaltabs .parked .current, .approvaltabs .parked .current:hover, .approvaltabs li .parked.current {
                    border-bottom: 1px solid #fff;
                    border-top: 7px solid #0276FD;
                    cursor: default !important;
                    color: #000 !important;
                    /*text-shadow: 0 1px 0 #fff;*/
                    color: Black !important;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

            .approvaltabs .forward {
                border-top: 7px solid #FFFFAA;
                border-bottom: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                font-size: 1em;
                display: block;
                height: 25px;
                line-height: 26px;
                width: 120px;
                text-align: center;
                text-decoration: none;
                color: #000;
                padding: 0px;
                margin: 0px;
                position: relative;
                /*text-shadow: 0 1px 0 #fff;*/
                top: 0px;
                -webkit-background-clip: padding-box;
                filter: alpha(opacity=50);
                opacity: 0.5;
            }

                .approvaltabs .forward:active {
                    outline: none;
                }

                /* when mouse enters the tab move the background image */
                .approvaltabs .forward:hover {
                    border-top: 7px solid #FFFF00;
                    color: Black;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }

                /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
                .approvaltabs .forward .current, .approvaltabs .forward .current:hover, .approvaltabs li .forward.current {
                    border-bottom: 1px solid #fff;
                    border-top: 7px solid #FFFF00;
                    cursor: default !important;
                    color: #000 !important;
                    /*text-shadow: 0 1px 0 #fff;*/
                    color: Black !important;
                    filter: alpha(opacity=100);
                    opacity: 10;
                }
        /*custom tab styling end*/
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="cd-main-content">
            <div class="row menu-bg">
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                </div>
                <!-- Main Section -->
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                    <div class=" container-fluid  cd-main-content">
                        <section class="grid_7" style="padding-top: 0px; margin-top: 70px;">
                            <div class="main-content grid_4 alpha">

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                        <div class="page-title">Receive Purchase Order</div>
                                    </div>

                                    <div class="clearfix"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  " style="margin-top: 10px;">
                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning pull-right" OnClick="btnReloadData_Click" />

                                    </div>
                                </div>


                                <section>
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
                                    <div>
                                        <ul class="approvaltabs">
                                            <li><a href="#" class="pend">PendingPO</a></li>
                                            <li><a href="#" class="appr">ReceivedPO</a></li>
                                        </ul>
                                        <!-- tab "panes" -->
                                        <div class="panes clearfix">
                                            <!-- Pending Tab Starts Here -->
                                            <section>
                                                <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                                                </asp:Timer>
                                                <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updPend">
                                                    <ProgressTemplate>
                                                        <div id="overlay">
                                                            <div id="modalprogress">
                                                                <img src="images/Loaders/image_855859.gif" />
                                                            </div>
                                                        </div>
                                                    </ProgressTemplate>
                                                </asp:UpdateProgress>
                                                <asp:UpdatePanel ID="updPend" runat="server" UpdateMode="Conditional">
                                                    <Triggers>
                                                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                                        <%--<asp:PostBackTrigger ControlID="btnRecvPO" />--%>
                                                    </Triggers>
                                                    <ContentTemplate>
                                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                        <div class="divfieldset">

                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20 text-center mb20" style="margin-top: 10px;">
                                                                <div id="dvRevErr" runat="server" style="font-weight: bold"></div>
                                                            </div>

                                                            <div class="clearfix"></div>
                                                            <div class="row">
                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <div class="col-sm-5">
                                                                        <label class="form-label label_setting" for="orgcode">Organization:</label>
                                                                    </div>
                                                                    <div class="col-sm-7" style="padding-top: 7px; font-weight: bold;">
                                                                        <asp:Label ID="lblOrg_Pend" runat="server"></asp:Label>
                                                                    </div>
                                                                </div>

                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <div class="col-sm-5">
                                                                        <label class="form-label label_setting" for="orgcode">CompCode: </label>
                                                                    </div>
                                                                    <div class="col-sm-7" style="padding-top: 7px; font-weight: bold;">
                                                                        <asp:Label ID="lblComp_Pen" runat="server"> </asp:Label>
                                                                    </div>
                                                                </div>


                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <asp:Button ID="btnRecvPO" runat="server" Text="Receive PO" CssClass="btn btn-success"
                                                                        OnClick="SaveReceivePO"></asp:Button>
                                                                </div>

                                                                <div class="clearfix"></div>


                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <div class="col-sm-5">
                                                                        <label class="form-label label_setting" for="orgcode">Select Vendor: </label>
                                                                    </div>
                                                                    <div class="col-sm-7">
                                                                        <asp:DropDownList ID="ddlVendor" runat="server" CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" DataValueField="PreferredVendor"
                                                                            DataTextField="PreferredVendor" OnSelectedIndexChanged="GetPODetails_Pending" Width="200px">
                                                                        </asp:DropDownList>
                                                                        <asp:HiddenField ID="hdnInvCnt" runat="server" />
                                                                        <asp:HiddenField ID="hdnDispAlert" runat="server" />
                                                                        <asp:HiddenField ID="hdnSeqRowIndex" runat="server" />
                                                                        <asp:HiddenField ID="hdnShippingCst" runat="server" />
                                                                        <asp:HiddenField ID="hdnRowCancelFlg" runat="server" />
                                                                    </div>

                                                                </div>

                                                                <%--<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                     <div class="alert alert-info">
                                                          <label style="font-size:15px;font-weight:normal;line-height:24px">Please select inventory location and corresponding Lot# (new Lot# will be automatically saved) before receiving PO. Upon clicking on ReceivePO, 
                                                                                        POs which have selected locations will only be received.</label>
                                                     </div>
                                             </div> --%>
                                                            </div>
                                                        </div>
                                                        <div class=" ">
                                                            <isx:CoolGridView AllowPaging="false" ID="gvDetails_Pen" runat="server" AutoGenerateColumns="false"
                                                                Width="1130px" Height="250px" GridLines="None" OnRowDataBound="gvDetails_Pen_RowDataBound"
                                                                OnRowCommand="gvDetails_Pen_RowCommand">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                        <HeaderTemplate>
                                                                            <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this);" />
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this)" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="PO#" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditPONO" runat="server" Text="PO#" CommandArgument="ourRefNo"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditPONO" runat="server" Text='<%#Eval("ourRefNo")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="LineNo" HeaderStyle-Width="65px" ControlStyle-Width="65px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditExpLineNo" runat="server" Text="LineNo" CommandArgument="expLineNo"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditLineNO" runat="server" Text='<%#Eval("expLineNo")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="LineSeq" HeaderStyle-Width="55px" ControlStyle-Width="55px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditPOLineSeq" runat="server" Text="LineSeq" CommandArgument="PoLineSeq"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditPOLineSeq" runat="server" Text='<%#Eval("PoLineSeq")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="PO Date">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditPODate" runat="server" Text='<%#Eval("PoDate")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="PO Amt">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditPOAmnt" runat="server" Text='<%#Eval("PoAmt")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="InvoiceAmt" HeaderStyle-Width="75px" ControlStyle-Width="75px">
                                                                        <ItemTemplate>
                                                                            <asp:HiddenField ID="hdnTaxPercent" runat="server" Value='<%#Eval("taxPercent") %>' />
                                                                            <asp:HiddenField ID="hdnUnitPrce" runat="server" Value='<%#Eval("unitPrice") %>' />
                                                                            <label>
                                                                                <asp:Label ID="lblEditInvAmnt" runat="server" Text='<%#Eval("invAmt") %>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="ShippingCost">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtEditshipCost" runat="server" CssClass="form-control" Width="40px" Text='<%#Eval("shippingCost")%>'></asp:TextBox>
                                                                            <asp:HiddenField ID="hdnShipCst" runat="server" Value='<%#Eval("shippingCost") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Item Code" HeaderStyle-Width="170px" ItemStyle-Width="170px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditItemCode" runat="server" Text='<%#Eval("itemCode") %>' CssClass="rowItem"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty" HeaderStyle-Width="55px" ControlStyle-Width="55px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblEditInvQnty" runat="server" Text='<%#Eval("qty")%>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty. Received">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtEditInvQntyRcv" runat="server" CssClass="form-control" Width="40px" Text='<%#Eval("qtyReceived")%>'></asp:TextBox>
                                                                            <asp:HiddenField ID="hdnCancelledRow" runat="server" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>

                                                                    <asp:TemplateField HeaderText="Location" HeaderStyle-Width="75px" ItemStyle-Width="75px">
                                                                        <ItemTemplate>
                                                                            <img id="imgLoc" runat="server" src="images/icons/pencil.png" title="Click to select Location and Lot/Bin" />
                                                                            <asp:Panel ID="pnlLoc" runat="server" Style="display: none">
                                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: white; max-width: 350px; width: 300px">

                                                                                    <div class="page-title">
                                                                                        <div id="dvCloseBtn" style="text-align: right; vertical-align: top; height: 20px">
                                                                                            <a href="#" id="ancClose" runat="server">
                                                                                                <img alt="close" src="images/icons/cross.png" /></a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="divfieldset">

                                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                                                                            <div id="dvAddLotErr" runat="server" style="font-weight: bold">
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="clearfix"></div>

                                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                            <div class="col-sm-5">
                                                                                                <label class="form-label label_setting" for="orgcode">Location</label>
                                                                                            </div>
                                                                                            <div class="col-sm-7">
                                                                                                <asp:TextBox ID="txtLoc" runat="server" Width="150px" CssClass="rowLoc form-control"></asp:TextBox>
                                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLoc"
                                                                                                    MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                                    ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                    CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                                </cc1:AutoCompleteExtender>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="clearfix"></div>

                                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                            <div class="col-sm-5">
                                                                                                <label class="form-label label_setting" for="orgcode">Lot/Bin# </label>
                                                                                            </div>
                                                                                            <div class="col-sm-7">
                                                                                                <asp:TextBox ID="txtLot" runat="server" Width="100px" CssClass="rowLot form-control"></asp:TextBox>
                                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtLot"
                                                                                                    MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                                    ServiceMethod="GetLotsByLocation" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                    CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                                </cc1:AutoCompleteExtender>
                                                                                                <a id="ancAddNewLot" runat="server" href="#" title="Add new lot" class="addItem btn btn-info btn-sm mt20" style="text-decoration: none">Add new lot</a>
                                                                                                <asp:HiddenField ID="hdnSubLot" runat="server" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="clearfix"></div>
                                                                                        <div id="dvAddLot" runat="server" style="display: none; width: 100%">
                                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                                <div class="col-sm-5">
                                                                                                    <label class="form-label label_setting" for="orgcode">Sublot </label>
                                                                                                </div>
                                                                                                <div class="col-sm-7">
                                                                                                    <asp:TextBox ID="txtSubLot" runat="server" CssClass="form-control" Width="100px"></asp:TextBox>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                                <asp:LinkButton ID="btnSaveLot" runat="server" OnClick="SaveNewLot" Text="Save Lot" CssClass="btn btn-success" Style="text-decoration: none; text-align: center">
                                                                                                </asp:LinkButton>
                                                                                            </div>


                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                            <cc1:PopupControlExtender ID="popLoc" runat="server" TargetControlID="imgLoc"
                                                                                PopupControlID="pnlLoc" Position="Bottom" OffsetX="-100">
                                                                            </cc1:PopupControlExtender>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px; font-weight: bold;">
                                                                        <label>
                                                                            No data to display.</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </div>
                                                        <asp:Panel ID="pnlAlert" runat="server" Style="display: none">
                                                            <div class="main-content" id="Div1" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px; min-height: 20px; min-width: 400px">

                                                                <div class="pop-page-title">
                                                                    <div class="row">
                                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                            <div class="pop-page-title-inner">Alert   </div>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                            <div class="pull-right">
                                                                                <asp:Button ID="btnYes" runat="server" OnClick="ConfirmChanges" Text="Yes" CssClass="btn btn-success" />
                                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" OnClick="RejectChanges" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div style="padding: 10px">
                                                                    <div class="divfieldset alert alert-danger">
                                                                        <asp:Label ID="lblAlertText" runat="server"></asp:Label>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </asp:Panel>
                                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1">
                                                        </cc1:ModalPopupExtender>
                                                    </ContentTemplate>
                                                </asp:UpdatePanel>
                                            </section>
                                            <!--Pending Tab Ends Here-->
                                            <!-- Received Tab Starts Here -->
                                            <section>
                                                <asp:Timer ID="Timer2" runat="server" Interval="100000000">
                                                </asp:Timer>
                                                <asp:UpdateProgress ID="UpdateProgress2" runat="server" AssociatedUpdatePanelID="updRec">
                                                    <ProgressTemplate>
                                                        <div id="overlay">
                                                            <div id="modalprogress">
                                                                <img src="images/Loaders/image_855859.gif" />
                                                            </div>
                                                        </div>
                                                    </ProgressTemplate>
                                                </asp:UpdateProgress>
                                                <asp:UpdatePanel ID="updRec" runat="server" UpdateMode="Conditional">
                                                    <Triggers>
                                                        <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
                                                        <asp:AsyncPostBackTrigger ControlID="btnRefresh_Rec" EventName="Click" />
                                                    </Triggers>
                                                    <ContentTemplate>
                                                        <asp:Button ID='btnRefresh_Rec' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                        <div class="divfieldset">

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Organization:</label>
                                                                </div>
                                                                <div class="col-sm-7" style="padding-top: 7px; font-weight: bold;">
                                                                    <asp:Label ID="lblOrg_Recv" runat="server"> </asp:Label>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">CompCode: </label>
                                                                </div>
                                                                <div class="col-sm-7" style="padding-top: 7px; font-weight: bold;">
                                                                    <asp:Label ID="lblComp_Recv" runat="server"> </asp:Label>
                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Select Vendor: </label>
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <asp:DropDownList ID="ddlVendor_Recv" runat="server" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true" DataValueField="PreferredVendor"
                                                                        DataTextField="PreferredVendor" OnSelectedIndexChanged="GetPODetails_Receiving" Width="200px">
                                                                    </asp:DropDownList>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="clearfix">
                                                            <br />
                                                        </div>
                                                        <div class=" ">
                                                            <isx:CoolGridView AllowPaging="false" ID="gvDetails_Recv" runat="server" AutoGenerateColumns="false"
                                                                Width="911px" Height="250px" GridLines="None">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="PO#">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditPONO_Recv" runat="server" Text="PO#" CommandArgument="ourRefNo"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <%#Eval("ourRefNo")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="LineNo">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditExpLineNo_Recv" runat="server" Text="LineNo" CommandArgument="expLineNo"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <%#Eval("expLineNo") %>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="LineSeq">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkEditPOLineSeq_Recv" runat="server" Text="LineSeq" CommandArgument="PoLineSeq"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <%#Eval("PoLineSeq")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="PO Date">
                                                                        <ItemTemplate>
                                                                            <%#Eval("PoDate")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="PO Amt">
                                                                        <ItemTemplate>
                                                                            <%#Eval("PoAmt")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="InvoiceAmt">
                                                                        <ItemTemplate>
                                                                            <%#Eval("invAmt") %>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="shippingCost">
                                                                        <ItemTemplate>
                                                                            <%#Eval("shippingCost") %>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty">
                                                                        <ItemTemplate>
                                                                            <%#Eval("qty") %>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="QtyReceived">
                                                                        <ItemTemplate>
                                                                            <%#Eval("qtyReceived") %>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px">
                                                                        <label>
                                                                            No data to display.</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </div>
                                                    </ContentTemplate>
                                                </asp:UpdatePanel>
                                            </section>
                                            <!--Received Tab Ends Here-->
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>
    <!--footer-->
    <uc5:footer ID="footer" runat="server" />
    <!--footer-->

    <script src="latestdesign/js/modernizr.js"></script>
    <script type="text/javascript" src="js/Validation.js"></script>
    <script type="text/javascript" src="js/jquery.tools.min.js"></script>
    <script type="text/javascript" src="js/Ajax.js"></script>
    <script type="text/javascript" src="js/jquery.ui.min.js"></script>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script src="latestdesign/js/main.js"></script>
    <script type="text/javascript" src="js/Tab.js"></script>
    <%--<script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>

    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        document.createElement("section");
        document.createElement("hgroup");
        document.createElement("header");

        var jq = $.noConflict();



        function $1(id) {
            return document.getElementById(id);
        }
        function validateQty(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test(id) || id == '') {
                return true;
            }
        }
        function DoOnAjaxPostback() {


            $('.selectpicker').selectpicker({
                liveSearch: true,
                showTick: true,
                width: 'auto'
            });


            //jq(function () {
            //    jq("#ddlVendor").ufd({ log: true });
            //});
            //jq(function () {
            //    jq("#ddlVendor_Recv").ufd({ log: true });
            //});
        }

        function OnChangeQty(QtyRec, Qty, InvAmt, rowIndex, cnclFlg, HdnshipCst) {
            var quatyRec = $1(QtyRec).value;
            if (validateQty(quatyRec)) {
                if (parseFloat(Qty) > parseFloat(quatyRec)) {
                    if (parseFloat(InvAmt) == 0) {
                        $1('hdnSeqRowIndex').value = rowIndex;
                        if (cnclFlg != '1' || cnclFlg == '') {
                            DisplayAlert("0", "AddSeq", "visible", "visible", "hidden", '0');
                        }
                        else {
                            UpdateCancelledRow(rowIndex, HdnshipCst);
                        }
                    }
                    else if (parseFloat(InvAmt) > 0) {
                        $1('hdnSeqRowIndex').value = rowIndex;
                        DisplayAlert("1", "NoSeq", "visible", "visible", "hidden", '0');
                    }
                }
            }
            else {
                $1('dvRevErr').style.color = "Red";
                $1('dvRevErr').innerHTML = "Please enter valid QtyReceived";
            }
        }

        //Update InvoiceAmnt and QtyReceived of Cancelled row.
        function UpdateCancelledRow(rowIndex, HdnshipCst) {
            var str = HdnshipCst;
            var str_array = str.split(',');
            for (var i = 0; i < str_array.length; i++) {
                str_array[i] = str_array[i];
            }
            var grid = $1('<%=gvDetails_Pen.ClientID %>');
            var i = parseInt(rowIndex) + 2;
            if (i <= 9) {
                i = '0' + i;
            }
            var poNo = $1(grid.id + '_ctl' + i + '_lblEditPONO').innerHTML;
            var poLineNo = $1(grid.id + '_ctl' + i + '_lblEditLineNO').innerHTML;
            var poLineSeq = $1(grid.id + '_ctl' + i + '_lblEditPOLineSeq').innerHTML;
            var invAmnt = $1(grid.id + '_ctl' + i + '_lblEditInvAmnt').value;
            var qty = $1(grid.id + '_ctl' + i + '_lblEditInvQnty').innerHTML;
            var qtyRec = $1(grid.id + '_ctl' + i + '_txtEditInvQntyRcv').value;
            var EditShip = $1(grid.id + '_ctl' + i + '_txtEditshipCost').value;
            var untPrce = $1(grid.id + '_ctl' + i + '_hdnUnitPrce').value;
            var taxPercent = $1(grid.id + '_ctl' + i + '_hdnTaxPercent').value;
            var shipCst = $1(grid.id + '_ctl' + i + '_hdnShipCst').value;
            for (var j = 2; j <= grid.rows.length + 1; j++) {
                if (j <= 9) {
                    j = '0' + j;
                }
                if (($1(grid.id + '_ctl' + j + '_lblEditPONO').innerHTML == poNo) && ($1(grid.id + '_ctl' + j + '_lblEditLineNO').innerHTML == poLineNo) && ($1(grid.id + '_ctl' + j + '_lblEditPOLineSeq').innerHTML == parseInt(poLineSeq) + 1)) {
                    $1(grid.id + '_ctl' + j + '_txtEditshipCost').value = parseFloat(parseFloat(str_array[rowIndex]) - parseFloat(EditShip)).toFixed(2);
                    var finalShip = $1(grid.id + '_ctl' + j + '_txtEditshipCost').innerHTML;
                    var notaxAmnt = parseFloat((parseFloat(qty) - parseFloat(qtyRec)) * parseFloat(untPrce));
                    var poamnt = parseFloat(notaxAmnt * parseFloat(taxPercent) / 100) + parseFloat(notaxAmnt) + parseFloat(finalShip == '' ? '0' : finalShip);
                    $1(grid.id + '_ctl' + j + '_lblEditPOAmnt').innerHTML = parseFloat(poamnt).toFixed(2);
                    $1(grid.id + '_ctl' + j + '_lblEditInvQnty').innerHTML = parseFloat(parseFloat(qty) - parseFloat(qtyRec)).toFixed(2);
                }
            }
        }


        function DisplayAlert(invAmnt, dispAlrt, IsYBVisible, isNBVisible, isCBVisible, type) {
            $1('hdnDispAlert').value = dispAlrt;
            $1('hdnInvCnt').value = invAmnt;
            $1('lblAlertText').innerHTML = 'Is this final Shipment?';
            //$find(Sys.Extended.UI.ModalPopupBehavior, { "CancelControlID": "btnNo", "id": "popAlert" }, null, null, $get("lnkAlert"));
            $find('popAlert').show();
        }

        //Load Lots/Bins with selected location
        function loadLots(loc, itemCode, lot) {
            $11(lot).value = '';
            var location = $11(loc).value;
            var url = 'Invoice.ashx?func=13&loc=' + location + '&item=' + itemCode;
            LoadLotsByLoc(url, '');
            $11(lot).focus();
        }

        //show input fields to add lot
        function addLot(dv, loc, dvError) {
            if ($11(loc).value == '' || $11(loc).value == ' ') {
                $11(dvError).style.color = "Red";
                $11(dvError).innerHTML = "Please enter Location.";
            }
            else {
                $11(dv).style.display = "block";
            }
            return false;
        }

        function validateLotByItem(rowIndex, locFieldId, lotFieldId, itemVal) {
            var grid = $11('<%=gvDetails_Pen.ClientID %>');
            var rowLots = grid.getElementsByClassName("rowLot");
            var rowLocs = grid.getElementsByClassName("rowLoc");
            var rowItems = grid.getElementsByClassName("rowItem");

            var loc = $11(locFieldId).value;
            var lot = $11(lotFieldId).value;
            var cnt = 0;
            for (var i = 0; i < grid.rows.length; i++)
                if (rowItems[i].innerHTML != itemVal && rowLocs[i].value == loc && rowLots[i].value == lot)
                    cnt++;

            if (cnt > 0) {
                $11('dvRevErr').style.color = "Red";
                $11('dvRevErr').innerHTML = "This lot has already been selected for different item.";
            }
            else
                $11('dvRevErr').innerHTML = "";
        }

        //validate lotnum in popup.
        function validateLotPop(locCode, lotNum, pop, dvMsg) {
            if ($11(locCode).value.length > 0 && $11(lotNum).value == 0) {
                $11(dvMsg).style.color = "Red";
                $11(dvMsg).innerHTML = "Please provide Lot/Bin#.";
            }
            else
                $find(pop).hidePopup();
            return false;
        }

    </script>
</body>
</html>
