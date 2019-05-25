<%@ Page Language="C#" AutoEventWireup="true" CodeFile="POGen.aspx.cs" Inherits="POGen" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="keywords" Src="Controls/jobsitekeywords.ascx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
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
    <title>ApproveIt - New Purchase Order</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <%--<link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <%-- <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />--%>
    <%-- <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />--%>
    <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <style>
        #pnlAddVendor table tbody tr td small label {
            margin-bottom: 5px;
        }

        #pnlBillAddr, #pnlShipAddr {
            z-index: 1;
        }

        .contentWrap {
            display: none;
        }

        .rowcolor {
            background-color: #EEB4B4;
        }

        .mg-emial .dropdown-menu.open {
            margin-left: -45px;
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

        /*.markItUp {
            width: 300px;
        }

        .lnk {
            color: #0D4F8B;
        }*/

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        .rbl input[type="radio"] {
            margin-left: -100%;
            margin-right: -40%;
        }

        /*.subheader {
            color: #fff;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }*/

        /*.tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain td {
                padding: 2px;
            }

            .tablemain label em {
                font-weight: bold;
            }


        .tablemaincc td {
            padding: 5px;
        }

        .lbl {
            text-align: left;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }*/
        /*gvUploadPOLines*/

        #gvPOrderjEsCoOl_headerDiv, #gvAttchmntsjEsCoOl_headerDiv,
        #gvItemPurchHistjEsCoOl_headerDiv, #gvUploadPOLinesjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvPOrderjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th,
            #gvItemPurchHistjEsCoOl_headerDiv div table tbody tr th, #gvUploadPOLinesjEsCoOl_headerDiv div table tbody tr th {
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

        #gvPOrder tbody tr td, #gvAttchmnts tbody tr td, #gvItemInventory tbody tr td, #gvItemPurchHist tbody tr td, #gvUploadPOLines tbody tr td {
            height: 30px;
            line-height: 27px;
            border: 0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px !important;
        }

        #gvPOrderjEsCoOl_mainDiv, #gvAttchmntsjEsCoOl_mainDiv, #gvItemInventoryjEsCoOl_mainDiv, #gvItemPurchHistjEsCoOl_mainDiv,
        #gvUploadPOLinesjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvItemInventory TR TD, #gvItemInventory TR TH, #gvItemInventory TR TH div, #gvItemInventory TR TD div,
        #gvItemPurchHist TR TD, #gvItemPurchHist TR TH, #gvItemPurchHist TR TH div, #gvItemPurchHist TR TD div,
        #gvUploadPOLines TR TD, #gvUploadPOLines TR TH, #gvUploadPOLines TR TH div, #gvUploadPOLines TR TD div {
            overflow: visible;
        }

        .cell {
            vertical-align: top;
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

        .vendNum {
            font-size: 1.5em;
            font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold';
        }

        .fupdpo input {
            height: 23px;
        }

        /*.tbagr td {
            padding: 10px;
        }

        .tabqtybrk tr th {
            background-color: #3B6AA0;
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        .tabqtybrk tr td {
            text-align: right;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
            padding: 10px;
            border: 1px solid #ccc;
        }*/

        .popover-content {
            width: 200px;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
        </cc1:ToolkitScriptManager>
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">

            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                <uc8:leftmenu ID="leftmenu" runat="server" />
            </div>
            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="margin-top: 50px; padding: 0px;">
                <div class=" container-fluid  cd-main-content">
                    <div class="">
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
                                <asp:PostBackTrigger ControlID="gvAttchmnts" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content grid_4" style="margin-left: 0;">
                                    <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                            <div class="page-title"><span>New Purchase Order</span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right">
                                            <div class="pull-right">

                                                <asp:Button ID="btnHSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnHSubmit" runat="server" Text="Submit" CssClass="btn btn-info" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnHReset" runat="server" Text="Reset" CssClass="btn btn-info" OnClick="btnReset_Click"></asp:Button>
                                            </div>
                                        </div>
                                    </div>
                                    <section>
                                        <div id="dvinv" visible="true">
                                            <div>
                                                <asp:Panel ID="p" runat="server">
                                                    <div class="divfieldset">
                                                        <div class="col-xs-12 col-sm-12 col-md-12  col-lg-12 " style="margin-top: 10px;">
                                                            <div id="dvError" runat="server" style="color: Red; font-weight: bold; text-align: center;">
                                                            </div>



                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting" for="orgname">RequestID:</label>
                                                                </div>
                                                                <div class="col-sm-6" style="font-size: 17px; font-weight: bold; padding-top: 10px;">
                                                                    <span style="font-size: 17px; font-weight: bold; padding-top: 10px;">
                                                                        <asp:Label ID="lblPONo" runat="server">
                                                                        </asp:Label></span>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting" for="orgname">Expense Type:</label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <asp:DropDownList ID="ddlType" runat="server" CssClass="form-control selectpicker" data-live-search="true" onchange="rblSelectedValue('pref');">
                                                                    </asp:DropDownList>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting" for="orgname">Company Code:</label>
                                                                </div>
                                                                <div class="col-sm-6" style="font-size: 17px; font-weight: bold; padding-top: 10px;">
                                                                    <i>
                                                                        <span>
                                                                            <label><%=Session["CompCode"] %></label></span></i>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting"><b><em>*</em></b>Manager Email</label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <asp:DropDownList ID="ddlManagerEmail" runat="server" CssClass="form-control selectpicker" data-live-search="true">
                                                                    </asp:DropDownList>
                                                                </div>
                                                            </div>


                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting" for="orgname">
                                                                        Shipping Address: 
                                                                            <asp:Label ID="lblShipAddr" runat="server"></asp:Label></label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <cc1:HoverMenuExtender ID="hveShipAddr" runat="server" TargetControlID="btnShipAddress" PopupControlID="pnlShipAddr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                    <asp:Panel ID="pnlShipAddr" runat="server" Style="display: none">
                                                                        <div class="main-content" style="margin: 38px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px;">
                                                                            <div class="divfieldset" style="box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); -webkit-box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); padding: 10px;">
                                                                                <div id="dvshipAddr">
                                                                                    <table class="tablemaincc" width="100%" style="font-size: 12px; line-height: 20px;">
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Company Name1 :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label style="margin-right: 10px;">
                                                                                                    <asp:Label ID="lblShipCompName" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address1 :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipAddr1" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address2 :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipAddr2" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">City :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipCity" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">State :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipState" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Country :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipCountry" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">ZipCode :</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipZipCode" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:Button ID="btnShipAddress" runat="server" ToolTip="View full address" CssClass="btn btn-sm btn-info pull-left" Style="cursor: pointer" Text="..." />
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting" for="orgname">
                                                                        Billing Address: 
                                                                            <asp:Label ID="lblBillAddr" runat="server"></asp:Label></label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <cc1:HoverMenuExtender ID="hveBillAddr" runat="server" TargetControlID="btnBillAddr" PopupControlID="pnlBillAddr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                    <asp:Panel ID="pnlBillAddr" runat="server" Style="display: none">
                                                                        <div class="main-content" style="margin: 38px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                            <div class="divfieldset" style="box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); -webkit-box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); padding: 10px;">
                                                                                <div id="dvBillAddr">
                                                                                    <table class="tablemaincc" width="100%" style="font-size: 12px; line-height: 20px;">
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Company Name :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label style="margin-right: 10px;">
                                                                                                    <asp:Label ID="lblBillCompName" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address1 :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillAddr1" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address2 :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillAddr2" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">City :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillCity" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">State :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillState" runat="server"></asp:Label></label></i></td>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">Country :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillCountry" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right"><b><small>
                                                                                                <label style="font-weight: bold; margin-right: 15px;">ZipCode :&nbsp;</label></small></b></td>
                                                                                            <td><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblBillZipCode" runat="server"></asp:Label></label></i></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <asp:Button ID="btnBillAddr" runat="server" ToolTip="View full address" CssClass="btn btn-sm btn-info" Style="cursor: pointer" Text="..." />
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting"><b><em>*</em></b>Start Date</label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                        <asp:TextBox ID="txtPOTripStrtDate" runat="server" class="date form-control" Width="80px"></asp:TextBox>
                                                                        <div class="input-group-addon">
                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                    <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                    <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                    <asp:HiddenField ID="ReqID" runat="server" />
                                                                    <asp:HiddenField ID="hdnddlType" runat="server" />
                                                                    <asp:HiddenField ID="hdnYear" runat="server" />
                                                                    <asp:HiddenField ID="hdnTax" runat="server" />
                                                                    <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                    <asp:HiddenField ID="hdnQBAcctID" runat="server" />
                                                                    <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                                    <asp:HiddenField ID="hdnQBItemID" runat="server" />
                                                                </div>

                                                            </div>








                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting"><b><em>*</em></b>Select Vendor</label>
                                                                </div>
                                                                <div class="col-sm-6" style="display: inline-flex!important;">
                                                                    <asp:DropDownList ID="ddlBillTo" runat="server" DataTextField="PreferredVendor" DataValueField="PreferredVendor"
                                                                        onchange="javascript:return GetVendDisc(this);" CssClass="form-control selectpicker" data-live-search="true">
                                                                    </asp:DropDownList>
                                                                    <asp:Button ID="btnAddVend" runat="server" Text='+' CssClass="btn btn-info"
                                                                        OnClick="AddVendor" ToolTip="Click to add new vendor" Style="cursor: pointer; float: left; margin-left: 5px; font-size: 12px; font-weight: bold;" />
                                                                    <asp:HiddenField ID="hdnVendDiscount" runat="server" />
                                                                    <asp:HiddenField ID="hdnVendPromoCode" runat="server" />
                                                                </div>
                                                            </div>






                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting"><b><em>*</em></b>Purpose</label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <asp:TextBox ID="txtPurpose" runat="server" CssClass="form-control" TextMode="MultiLine"></asp:TextBox>
                                                                </div>
                                                            </div>



                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label label_setting">Job</label>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <asp:DropDownList ID="ddlJobs" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                </div>
                                                            </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 clear-fix" style="clear: both">
                                                                <div class="col-sm-5">
                                                                    <asp:Button ID="btnAttach" runat="server" Text="Attachments" CssClass="btn btn-warning" OnClick="btnAttach_Click" />
                                                                </div>

                                                            </div>







                                                            <div id="dvExpDetails" class="divfieldset">

                                                                <div class="col-xs-12 col-sm-12 col-md-12  col-lg-12  pull-right" style="margin-top: 10px;">
                                                                    <div class="pull-right">
                                                                        <asp:Button ID="btnUploadPOLines" runat="server" OnClick="btnUploadPOLines_Click" Text="Upload PO Lines" CssClass="btn btn-info" />
                                                                        <asp:Button ID="btnCopyPODetails" runat="server" OnClick="AddCopyPO" Text="Copy From Existing PO" CssClass="btn btn-danger" />
                                                                        <asp:Button ID="btnAddPO" runat="server" OnClick="AddNewPurchaseOrder" Text="Add New PO Line" CssClass="btn btn-warning" />
                                                                    </div>
                                                                </div>

                                                                <div class="clear-fix"></div>
                                                                <br />
                                                                <table style="margin: 0px auto;">
                                                                    <tr>
                                                                        <td>
                                                                            <%if (gvPOrder.Rows.Count > 0)
                                                                              {  %>
                                                                            <isx:CoolGridView ID="gvPOrder" runat="server" AutoGenerateColumns="False"
                                                                                GridLines="None" CellPadding="4" OnRowDataBound="gvPOrder_RowDataBound" OnRowCommand="gvPOrder_RowCommand"
                                                                                OnRowEditing="gvPOrder_RowEditing" OnRowDeleting="gvPOrder_RowDeleting">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                        <ItemTemplate>
                                                                                            <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" Text="Edit" OnCommand="EditNewDetails"
                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkview" Text="View" CommandName="View" OnCommand="ViewNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'
                                                                                    CommandName="Delete"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="AccountCode">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("expItem")%></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("comments")%></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Quantity">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("quantity")%></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Unit Price">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("unitPrice ")%></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Amount">
                                                                                        <ItemTemplate>
                                                                                            <label>
                                                                                                <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("preamount")%>'></asp:Label></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Budget">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("budget")%></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="BalanceAfterPo">
                                                                                        <ItemTemplate>
                                                                                            <label><%# Eval("balAfterPO")%></label>
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
                                                                            <asp:HiddenField runat="server" ID="hdnPORowTotAmnt" />
                                                                            <asp:HiddenField runat="server" ID="hdnIsPOEdit" />
                                                                            <asp:HiddenField runat="server" ID="hdnIsCopy" />
                                                                            <asp:HiddenField runat="server" ID="hdnCopyBud" />
                                                                            <asp:HiddenField runat="server" ID="hdnCopyCurrBal" />
                                                                            <asp:HiddenField runat="server" ID="hdnCopyRemain" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                </asp:Panel>
                                            </div>
                                            <div class="clear-fix"></div>
                                            <div class="action text-center mt10" id="dvSave" runat="server">
                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-danger" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="btn btn-info" OnClick="btnReset_Click" Visible="false"></asp:Button>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlAddPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; height: 600px; width: 1100px">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                <asp:Label ID="lblHeading" runat="server"></asp:Label>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnSavePOItem" runat="server" OnClick="btnSavePO_Click" Text="Save & Close" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnSaveAndNew" runat="server" Text="Save & New" CssClass="btn btn-info" OnClick="btnSaveAndNew_Click" />
                                                                <asp:Button ID="btnAppend" runat="server" Text="Done" CssClass="btn btn-info" OnClick="btnSavePO_Click" />
                                                                <asp:Button ID="btnClosePOItem" runat="server" Text="Close" CssClass="btn btn-danger" OnClick="btnClosePOItem_Click" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset">

                                                        <div class="Col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div id="dvPOErrMsg" runat="server" style="font-size: 17px; font-weight: bold; margin-bottom: 20px; text-align: center">
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Department: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlDepartment" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                    AutoPostBack="true" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged" CssClass="form-control selectpicker" data-live-search="true">
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" id="dvCommts" runat="server" style="display: none">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Comments:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtchangeComnts" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Account Name: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlExpItem" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                    OnSelectedIndexChanged="ddlExpItem_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true">
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Account Code:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtAccCode" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <div id="dvVendPartNo" runat="server">
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Vendor Part No:</label>
                                                                </div>
                                                                <div class="col-sm-7" style="display: inline-flex">
                                                                    <asp:DropDownList ID="ddlVendPtNo" runat="server" DataTextField="vendPartNo" DataValueField="vendPartNo" OnSelectedIndexChanged="ddlVendPtNo_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                    <%--<asp:TextBox ID="txtVendPtNo" runat="server" Width="70px" CssClass="form-control" onchange="javascript: getVendItemAgrmntInit('ddlBillTo');"></asp:TextBox>--%>
                                                                    <asp:HiddenField ID="hdnAgreementCnt" runat="server" />
                                                                    <br />
                                                                    <asp:LinkButton ID="lnkAgreement" runat="server" Text="View Agreement" OnClick="lnkAgreement_Click"></asp:LinkButton>
                                                                    <asp:Button ID="btnAddVendorPart" runat="server" OnClick="btnAddVendorPart_Click" Text="+" CssClass="addItem btn btn-sm btn-info"></asp:Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="dvVendPartDesc" runat="server">
                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="col-sm-5">
                                                                    <label class="form-label label_setting" for="orgcode">Vendor Part Descr.:</label>
                                                                </div>
                                                                <div class="col-sm-7" style="display: inline-flex">
                                                                    <asp:TextBox ID="txtVendPtDesc" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Item:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="display: inline-flex">
                                                                <asp:DropDownList ID="ddlItemCode" runat="server" DataValueField="ItemCode" DataTextField="ItemCodeDescription"
                                                                    OnSelectedIndexChanged="ddlItemCode_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true">
                                                                </asp:DropDownList>
                                                                <asp:Button ID="btnAddItemCode" runat="server" Text="+" CssClass="addItem btn btn-sm btn-info"
                                                                    OnClick="AddItemCode" ToolTip="Click to add new Item Code" Style="cursor: pointer" />
                                                                <br />
                                                                <a href="#" id="lnkShowItemInventory" runat="server" onclick="showItemInventory();">Check Inventory</a>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 clear-fix">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Description:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Req. Del. Date:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                    <asp:TextBox ID="txtReqDelDate" runat="server" Width="70px" class="date" CssClass="form-control"></asp:TextBox>
                                                                    <div class="input-group-addon">
                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <%--<div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Price Flag:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:DropDownList ID="ddlPriceFlag" runat="server" onchange="javascript:return modifyUnitPriceField();" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                            </div>
                                                        </div>--%>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 clear-fix">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Quantity: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtQuantity" runat="server" onkeyup='javascript:getVolDiscUnitPriceInit();' Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Unit Price:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="display: inline-flex;">
                                                                <asp:TextBox ID="txtUnitPrice" runat="server" onkeyup='javascript:CalcBudgetDetails();' onchange="javascript:GetItemPurchHistory(this)" Width="70px" CssClass="form-control"></asp:TextBox>
                                                                <asp:LinkButton ID="lnkItemHistory" runat="server" Text="Show History" CommandArgument="test"
                                                                    OnClick="DisplayItemPurchHistory" ToolTip="Show item purchase history">
                                                                                                        <img src="images/icons/history_clear.png" alt="Show History"/>
                                                                </asp:LinkButton>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Estimated Ship Cost: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtShipCost" runat="server" onkeyup='javascript:CalcBudgetDetails();' Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 clear-fix">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Package/Unit:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtPkgUnit" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Include Vendor Discount: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:CheckBox ID="chkDisc" runat="server" Width="24px" onclick="javascript:CalcBudgetDetails();" />
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Discount(%):</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtDisc" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Promocode:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtLinePromoCode" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>


                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Calculate TaxAmt:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:CheckBox ID="chkCalTax" runat="server" Width="24px" onclick="javascript:CalcBudgetDetails();" />
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Tax Percent: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtTaxPercent" runat="server" onkeyup='javascript:CalcBudgetDetails();' Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Tax Amount:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txttax" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Line Amount: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtPoAmount" runat="server" Width="70px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="clear-fix"></div>
                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Budget: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtBudget" runat="server" CssClass="form-control" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Current Balance:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtCurrBal" runat="server" CssClass="form-control" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Remaining $: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtRemain" runat="server" CssClass="form-control" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                                <label class="form-label label_setting" for="orgcode">Balance After PO:</label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                <asp:TextBox ID="txtBalAfterPO" runat="server" CssClass="form-control" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddPO" runat="server" DropShadow="false" PopupControlID="pnlAddPO"
                                            TargetControlID="lnkAddPO" CancelControlID="btnClosePOItem" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
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
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="Yes" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset" style="padding: 20px;">
                                                        <small>
                                                            <label class="alert alert-danger">Are you sure you want to delete this item?</label></small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlCopyPO" runat="server" DefaultButton="btnOk" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Copy PO
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button Width="70" ID="btnOk" runat="server" OnClick="CopyPO" Text="Ok" CssClass="btn btn-success" />
                                                                <asp:Button Width="70" ID="btnCloseCopyPO" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div class="row">
                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                <div class="col-sm-7 col-sm-offset-2">
                                                                    <label class="form-label label_setting">Select a PO to copy the details</label>
                                                                </div>
                                                                <div class="clear-fix"></div>
                                                                <div class="col-sm-8 col-sm-offset-2">

                                                                    <asp:DropDownList ID="ddlCopyPONum" runat="server" DataValueField="RequestID" DataTextField="ourRefNo"
                                                                        CssClass="form-control selectpicker" data-live-search="true">
                                                                    </asp:DropDownList>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCopyPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popCopyPO" runat="server" DropShadow="false" PopupControlID="pnlCopyPO"
                                            TargetControlID="lnkCopyPO" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseCopyPO">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none"
                                            DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 800px; height: 480px;">
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
                                                                <asp:Button ID="btnVendColse" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset">

                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvErrMsg" runat="server" style="font-size: 1.15em; color: red">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label class="">
                                                                                        <em>*</em>Vendor No:</label></small><br />
                                                                                <asp:Label ID="lblVendNo" runat="server" CssClass="vendNum"></asp:Label>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        <em>*</em>Vendor Name:</label>
                                                                                    </label></small><br />
                                                                                <asp:TextBox ID="txtVendName" runat="server" onchange="getVendCode();" CssClass="form-control"></asp:TextBox>
                                                                                <asp:HiddenField ID="hdnVendCode" runat="server" />
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Title:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlVendTitle" runat="server" CssClass="form-control selectpicker" data-live-search="true">
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
                                                                                <asp:TextBox ID="txtVendFirstName" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Middle Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendMidName" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Last Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendLastName" runat="server" CssClass="form-control"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtVendContact" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Phone:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPhone" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address1:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtVendAddr1" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address2:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtVendAddr2" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address3:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendAddr3" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Country:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                    CssClass="form-control selectpicker" data-live-search="true">
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
                                                                                <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                                    CssClass="form-control selectpicker" data-show-subtext="true" data-live-search="true">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        City:</label></small><br />
                                                                                <asp:TextBox ID="txtVendCity" runat="server" onchange="javascript:splitCityZip(this);" CssClass="form-control"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtVendZip" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        URL:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtUrl" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Account#:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendAccNum" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Pay Terms:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlPayTerms" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
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
                                                                                <asp:TextBox ID="txtVendBalance" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Currency:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlVendCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Tax Code:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendTaxCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Alt. Contact:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendAltContact" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Alt. Phone:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendAltPhone" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Discount(%):
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendDisc" runat="server" CssClass="form-control"></asp:TextBox>
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
                                                                                    <asp:TextBox ID="txtStartDate" runat="server" class="date" CssClass="form-control"></asp:TextBox>
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
                                                                                    <asp:TextBox ID="txtExpiryDate" runat="server" class="date" CssClass="form-control"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtPromoCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        1099:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txt1099" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <br />
                                                                                <asp:CheckBox ID="chkIsPrefVend" runat="server" TextAlign="Right" Style="padding-top: 20px;"></asp:CheckBox>
                                                                                <small>
                                                                                    <label>
                                                                                        Preferred Vendor</label></small>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
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
                                                                                                            <asp:TextBox ID="txtEmailFax" runat="server" onchange="ValidateVendEmail();"></asp:TextBox>
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
                                                                                <asp:TextBox ID="txtAgent" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Agent Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtAgentName" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Agent Phone:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtAgentPh" runat="server" CssClass="form-control"></asp:TextBox>
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
                                            TargetControlID="lnkAddVendor" BackgroundCssClass="modalBackground" CancelControlID="btnVendColse">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; max-width: 680px">

                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Attachments
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnUpload" runat="server" Text="Upload" CssClass="btn btn-success" OnClick="UploadPOAttachments" />
                                                                <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvAtt" runat="server" style="font-weight: bolder">
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm-12">

                                                                <div class="col-sm-7">
                                                                    <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server"
                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete"
                                                                        OnClientUploadComplete="showConfirmation" Style="float: left; border: 1px solid #aaaaaa" CssClass="form-control" />

                                                                </div>
                                                                <div class="col-sm-5">
                                                                    <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif, .pdf, .doc and .docx. Maximum file size should be 10MB." data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>

                                                                    <div style="float: left; padding-left: 0.5em">
                                                                    </div>
                                                                    <br />
                                                                    <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                    <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                                    <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="position: absolute; left: 30%;">
                                                                    <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="300px"
                                                                        Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
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
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 200px;">
                                                                                <label>
                                                                                    No attachments to display</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                                <td>
                                                                    <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
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
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground" CancelControlID="btnAttClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
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
                                                                <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                                <section>
                                                    <div class="divfieldset" style="padding: 20px;">
                                                        <small>
                                                            <label class="alert alert-danger">Are you sure you want to delete this Attachment?</label>
                                                        </small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                            TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddItemCode" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Add Item Code
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnSaveAddItemCode" runat="server" OnClick="SaveItemCode" Text="Save" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnCancelAddItemCode" runat="server" Text="Cancel" CssClass="btn btn-danger" OnClick="CancelAddItemCode" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset" style="padding: 30px;">
                                                        <div id="dvItemErrMsg" runat="server" style="font-size: 14px; padding: 5px;"></div>
                                                        <table class="tablemain" style="padding: 15px;">
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Account Name:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblBdgClssForItem" runat="server"></asp:Label></label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Item Code:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemCode" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Description:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemDescription" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Notes:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemNotes" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddItemCode" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddItemCode" runat="server" DropShadow="false" PopupControlID="pnlAddItemCode"
                                            TargetControlID="lnkAddItemCode" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddVendItem" runat="server" DefaultButton="btnSaveVendItem" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Add Vendor Part
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnSaveVendItem" runat="server" OnClick="btnSaveVendItem_Click" Text="Save" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnCancelVendorItem" runat="server" Text="Cancel" CssClass="btn btn-danger" OnClick="btnCancelVendorItem_Click" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section>
                                                    <div class="divfieldset" style="padding: 30px;">
                                                        <div id="dvVendItemError" runat="server" style="font-size: 14px; padding: 5px;"></div>
                                                        <table class="tablemain" style="padding: 15px;">
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Vendor:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <%=ddlBillTo.SelectedItem.Text %></label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Vendor Part#:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemPartNo" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Vendor Part Descr.:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemPartDescr" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>UOM:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemUOM" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>UnitPrice:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemUnitPrice" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Internal Item#:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemIntItem" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Internal Item Descr:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddVendItemIntItemDescr" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddVendItem" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddVendItem" runat="server" DropShadow="false" PopupControlID="pnlAddVendItem"
                                            TargetControlID="lnkAddVendItem" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemInventory" runat="server" Style="display: none; background-color: white">
                                            <div class="main-content" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; min-height: 95px; min-width: 400px">
                                                <div class="divfieldset">
                                                    <div class="pop-page-title">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                <div class="pop-page-title-inner">
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                <div class="pull-right">
                                                                    <asp:Button ID="btnCloseItemInventory" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table>

                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvItemInventory" runat="server" AutoGenerateColumns="false" ShowHeader="true" Height="300px"
                                                                    Width="800px" OnRowDataBound="gvItemInventory_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                            <ItemTemplate>
                                                                                <img id="imgItemRowSelect" alt="expand" style="cursor: pointer" src="images/downarrow.jpg" />
                                                                                <asp:Panel ID="pnlItemInv" runat="server" Style="display: none">
                                                                                    <asp:GridView ID="gvItemInventoryLot" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvItemInventoryLot_RowDataBound"
                                                                                        Width="580px">
                                                                                        <Columns>
                                                                                            <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("lotNum") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Item">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("expItem") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Total Quantity">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("qtyLot") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Allocated to Jobs">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("allocatedJobs") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Available to Use">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label style="color: green">
                                                                                                            <b><%#Eval("availUse") %></b></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                        </Columns>
                                                                                        <FooterStyle BackColor="#CCCCCC" ForeColor="Black"></FooterStyle>
                                                                                        <HeaderStyle BackColor="#009ACD" Font-Bold="false" ForeColor="White" Height="30px"></HeaderStyle>
                                                                                        <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                                        <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                                        <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                                    </asp:GridView>
                                                                                </asp:Panel>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Location Code">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblLocation" runat="server" Text='<%#Eval("locCode") %>'></asp:Label></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Location Name">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <%#Eval("locName") %></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Address1">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <%#Eval("locAddress1") %></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Total Quantity">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblTotalQty" runat="server"></asp:Label></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <HeaderStyle BackColor="#009ACD" Font-Bold="true" ForeColor="White" Height="30px"></HeaderStyle>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px">
                                                                            <label>
                                                                                No data to display</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkItemInventory" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popItemInventory" runat="server" PopupControlID="pnlItemInventory"
                                            TargetControlID="lnkItemInventory" DropShadow="false" CancelControlID="btnCloseItemInventory" BackgroundCssClass="modalBackground2">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemPurchHist" runat="server" Style="display: none;">
                                            <div class="main-content" style="margin: 0px; padding: 10px; min-height: 300px; min-width: 600px">
                                                <div class="divfieldset">
                                                    <table>
                                                        <tr>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="btnCloseItemPurchHist" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvItemPurchHist" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvItemPurchHist_RowDataBound" Width="700px" Height="350px">
                                                                    <Columns>
                                                                        <asp:BoundField HeaderText="Vendor" DataField="preferredVendor" ItemStyle-Width="150px" HeaderStyle-Width="150px" />
                                                                        <asp:BoundField HeaderText="Unit Price($)" DataField="unitPrice" />
                                                                        <asp:BoundField HeaderText="PO#" DataField="ourRefNo" />
                                                                        <asp:TemplateField HeaderText="Vendor Status" ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <%# Eval("vendorFlag").ToString().ToLower() == "y"?"Preferred":"Not preferred" %>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <%--<asp:BoundField HeaderText="Preferred Vendor" DataField="vendorFlag" />--%>
                                                                        <asp:TemplateField HeaderText="Date" ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                            <ItemTemplate>
                                                                                <%# Convert.ToDateTime(Eval("expDate")) %>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <%--<asp:BoundField HeaderText="Date" DataField="expDate" />--%>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px;">
                                                                            <label>No data to display.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkItemPurchHist" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popItemPurchHist" runat="server" PopupControlID="pnlItemPurchHist" TargetControlID="lnkItemPurchHist"
                                            DropShadow="false" BackgroundCssClass="modalBackground2" CancelControlID="btnCloseItemPurchHist">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlUploadPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; max-width: 680px;">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Upload PO
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnSaveUploadedPO" runat="server" OnClick="btnSaveUploadedPO_Click" Text="Save PO" CssClass="btn btn-success" />
                                                                <asp:Button ID="btnuploadPOClose" runat="server" Text="Cancel" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvUploadPOErr" runat="server"></div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvUpload" runat="server">
                                                                        <div class="row">
                                                                            <div class="col-sm-12">
                                                                                <div class="col-sm-6">

                                                                                    <cc1:AsyncFileUpload ID="fupdPOLines" CompleteBackColor="White" runat="server" CssClass="fupdpo form-control"
                                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="lblUploadPOThrobber" OnUploadedComplete="fupdPOLines_UploadedComplete"
                                                                                        OnClientUploadComplete="showConfirmationUploadPO" Style="float: left; border: 1px solid #aaaaaa" Width="300px" />
                                                                                </div>
                                                                                <div class="col-sm-6">
                                                                                    <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif, .pdf, .doc and .docx. Maximum file size should be 10MB." data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="row" style="margin-top: 20px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="col-sm-3">
                                                                                    <asp:Button ID="btnUploadPOConfirm" runat="server" OnClick="btnUploadPOConfirm_Click" Text="Upload and Validate" CssClass="btn btn-info" />
                                                                                </div>
                                                                                <div class="col-sm-3">
                                                                                    <asp:Button ID="btnClearUploadPO" runat="server" OnClick="btnClearUploadPO_Click" Text="Clear Data" CssClass="btn btn-success" />
                                                                                </div>

                                                                                <div class="col-sm-6">
                                                                                    <a href="DownloadFile.aspx?typ=15" style="margin-top: 10px;">Click here</a> to download template.
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                    <table class="tablemain">
                                                                        <tr>

                                                                            <td width="55%"></td>
                                                                            <td></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2"></td>
                                                                        </tr>
                                                                    </table>
                                                                    <asp:Label ID="lblUploadPOFileName" runat="server"></asp:Label>
                                                                    <asp:Label ID="lblUploadPOThrobber" runat="server" Style="display: none">
                                                                            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                    </div>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <isx:CoolGridView ID="gvUploadPOLines" runat="server" AutoGenerateColumns="false" ShowHeader="true"
                                                                OnRowDataBound="gvUploadPOLines_RowDataBound" Height="300px" Width="670px">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="Failure Message" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblFailureMsg" runat="server" Text='<%#Eval("FailureMessage") %>' ForeColor="Red"></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Department">
                                                                        <ItemTemplate>
                                                                            <asp:DropDownList ID="ddlDept" runat="server" AutoPostBack="true" OnSelectedIndexChanged="UploadDeptChanged" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                            <asp:HiddenField ID="hdnDeptCode" runat="server" Value='<%#Eval("DEPARTMENTCODE") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Comments">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtComments" runat="server" Text='<%#Eval("COMMENTS") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Vend. Part#">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtVendPart" runat="server" Text='<%#Eval("VENDPARTNUM") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Req. Del.Date">
                                                                        <ItemTemplate>
                                                                            <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                <asp:TextBox ID="txtRDD" runat="server" CssClass="date" Text='<%#Eval("REQUESTDELIVERYDATE") %>' Width="50px"></asp:TextBox>
                                                                                <div class="input-group-addon">
                                                                                    <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                </div>
                                                                            </div>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Account Name">
                                                                        <ItemTemplate>
                                                                            <asp:DropDownList ID="ddlBudgClss" runat="server" AutoPostBack="true" OnSelectedIndexChanged="UploadClassChanged" Width="70px" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                            <asp:HiddenField ID="hdnBudgClss" runat="server" Value='<%#Eval("BUDGETCLASSIFICATION") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Account Code">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtAccCode" runat="server" Text='<%#Eval("ACCOUNTCODE") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Item Code">
                                                                        <ItemTemplate>
                                                                            <asp:DropDownList ID="ddlItemCode" runat="server" Width="70px" AutoPostBack="true" OnSelectedIndexChanged="UploadItemChanged" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                            <asp:HiddenField ID="hdnItemCode" runat="server" Value='<%#Eval("ITEMCODE") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtDescr" runat="server" Text='<%#Eval("DESCRIPTION") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtQty" runat="server" Text='<%#Eval("QUANTITY") %>' Width="50px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Unit Price">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtUnitPrice" runat="server" Text='<%#Eval("UNITPRICE") %>' Width="50px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Ship. Cost">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtShipCost" runat="server" Text='<%#Eval("SHIPCOST") %>' Width="50px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Package/Unit">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtPackageUnit" runat="server" Text='<%#Eval("PACKAGE_UNIT") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Vendor Disc.">
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkVendDisc" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendDisc" runat="server" Value='<%#Eval("INCLUDEVENDORDISC") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Disc.(%)">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblDiscPercent" runat="server" Text='<%#Eval("DISCOUNTPERCENT") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Disc. Amount">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblDiscAmount" runat="server" Text='<%#Eval("DISCOUNTAMOUNT") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Promo Code">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtPromoCode" runat="server" Text='<%#Eval("PROMOCODE") %>' Width="70px"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax">
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkTax" runat="server"></asp:CheckBox>
                                                                            <asp:HiddenField ID="hdnTax" runat="server" Value='<%#Eval("INCLUDETAX") %>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax(%)">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblTaxPercent" runat="server" Text='<%#Eval("TAXPERCENT") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax Amount">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblTaxAmount" runat="server" Text='<%#Eval("TAXAMOUNT") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Line Amount">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblLineAmount" runat="server" Text='<%#Eval("LINEAMOUNT") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Budget">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblBudget" runat="server" Text='<%#Eval("BUDGET") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Curr. Balance">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblCurrBudg" runat="server" Text='<%#Eval("CURRBAL") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Remaining Budget">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblRemBudg" runat="server" Text='<%#Eval("REMAINING") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Bal. After PO">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblBalAftrPO" runat="server" Text='<%#Eval("BALAFTRPO") %>'></asp:Label>
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
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUploadPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popUploadPO" runat="server" TargetControlID="lnkUploadPO" PopupControlID="pnlUploadPO"
                                            DropShadow="false" BackgroundCssClass="modalBackground1" CancelControlID="btnuploadPOClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAgreements" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 700px">
                                                <div class="pop-page-title">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                            <div class="pop-page-title-inner">
                                                                Agreement Info
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                            <div class="pull-right">
                                                                <asp:Button ID="btnCloseAgr" runat="server" Text="Cancel" CssClass="btn btn-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvAgrDetails">
                                                            <table class="tbagr">
                                                                <tr>
                                                                    <td><small>
                                                                        <label>Agreement Code:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtAgreementCode" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Agreement Descr:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtAgreementDescr" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Discount Type:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtDiscType" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Discount Value:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtDiscVal" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><small>
                                                                        <label>Valid From:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtValidFrom" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Valid To:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtValidTo" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>List Price:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtListPrice" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Our Price:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtOurPrice" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <p>
                                                                            <asp:CheckBox ID="chkIsVolDisc" runat="server" Text="&nbsp;&nbsp;Volume Discount"
                                                                                TextAlign="Right" />
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvAgrqtyBreaks">
                                                            <table style="width: 100%">
                                                                <tr>
                                                                    <td style="padding-bottom: 10px">
                                                                        <div id="dvMsgVolDisc" runat="server">
                                                                            <label><i>Note: Quantity indicates minimum number to be purchased to receive that discount.</i></label>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:GridView ID="gvAgrQtyBreaks" runat="server" AutoGenerateColumns="false" CssClass="tabqtybrk" Width="400px">
                                                                            <Columns>
                                                                                <%--<asp:TemplateField HeaderText="Qty From">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("fromQty")%>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>--%>
                                                                                <asp:TemplateField HeaderText="Upto Quantity">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("toQty")%>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Disc Val">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("lineDscntVal") %>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </asp:GridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAgreementPop" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAgreement" runat="server" PopupControlID="pnlAgreements" TargetControlID="lnkAgreementPop"
                                            BackgroundCssClass="modalBackground2" DropShadow="false" CancelControlID="btnCloseAgr">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>
                    <!-- Main Section End -->
                </div>
                <!--footer-->
                <uc5:footer ID="footer" runat="server" />
                <!--footer-->
            </div>
        </div>
        </div>
    </form>

    <%--<script src="js/html5shiv.js"></script>--%>


    <%--  <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>

    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/main.js"></script>
    <script src="latestdesign/js/modernizr.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <%--<script src="js/jquery.tools.min.js"></script>--%>
    <%-- <script src="js/global.js"></script>--%>
    <script src="js/Ajax.js"></script>
    <%--<script src="js/DateSetup.js" type="text/javascript"></script>--%>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    <script>
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        /////Alert when leaving the page
        //window.onbeforeunload = function () {
        //    hideProgress();            
        //    return 'Are you sure you want to leave?';
        //};
        /////Alert when leaving the page


        //Validations Begin

        function refreshNotes() {
            window.location = window.location;
        }

        $(document).ready(function () {
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }

        $('select').selectpicker();



        function pageLoad() {

            $('select').selectpicker();
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


            $(function () {
                $('[data-toggle="popover"]').popover()
            })

        }

        //function pageLoad() {
        //    setupDatePicker();
        //    $('#date').dateinput({
        //        format: 'mm/dd/yyyy',
        //        trigger: false
        //    });
        //    $(function () {
        //        $("#ddlBillTo").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlExpItem").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlManagerEmail").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlCopyPONum").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlType").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlItemCode").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlDepartment").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlCountry").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlRgnCode").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlJobs").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlPriceFlag").ufd({ log: true });
        //    });
        //}

        function validateBudgetAmount1(id) {
            //   var reg = /^[+]?[1-9]*\.?[0-9]+([eE]-+]?[0-9]+)?$/;
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test($11(id).value) || $11(id).value == '') {
                return true;
            }
        }

        var x = 0;
        function CalcBudgetDetails() {
            console.log('beginning');
            if (!validateBudgetAmount1('txtQuantity')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for Quantity.";
            }
            else if (!validateBudgetAmount1('txtUnitPrice')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for UnitPrice.";
            }
            else if (!validateBudgetAmount1('txtShipCost')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for shippingCost.";
            }
            else {
                console.log('in else');
                $11('dvPOErrMsg').innerHTML = "";
                var bal;
                var qnty = parseFloat($11('txtQuantity').value == '' ? '0' : $11('txtQuantity').value);
                var unitPrice = parseFloat($11('txtUnitPrice').value == '' ? '0' : $11('txtUnitPrice').value);
                var ShipCost = parseFloat($11('txtShipCost').value == '' ? '0' : $11('txtShipCost').value);
                var noTaxAmnt = (unitPrice * qnty);
                /*Calculate Discount and remove from amount based on checkbox checked*/
                var calDisc;
                if ($11('hdnVendDiscount').value == '')
                    calDisc = 0;
                else
                    calDisc = parseFloat($11('hdnVendDiscount').value) / 100;
                console.log('in else, calDisc: ' + calDisc);
                if ($11('chkDisc').checked) {
                    noTaxAmnt = noTaxAmnt - (noTaxAmnt * calDisc);
                    $11('txtDisc').disabled = false;
                }
                else
                    $11('txtDisc').disabled = true;

                /*Calculate Discount and remove from amount based on checkbox checked*/

                /*Calculate tax amount with tax percentage based on checkbox checked*/
                var calTax;
                var calTaxPercent;
                if ($11('chkCalTax').checked) {
                    if (x == 2)
                        x = 1;
                    calTaxPercent = parseFloat($11('hdnTax').value == '' ? 0 : $11('hdnTax').value);
                    $11('txtTaxPercent').disabled = false;
                    if (x == 2)
                        $11('txtTaxPercent').value = calTaxPercent;
                    calTax = parseFloat($11('txtTaxPercent').value == '' ? 0 : $11('txtTaxPercent').value) / 100;
                }
                else {
                    $11('txtTaxPercent').disabled = true;
                    calTax = 0;
                    $11('txtTaxPercent').value = parseFloat($11('hdnTax').value == '' ? 0 : $11('hdnTax').value);
                    x = 2;
                }
                /*Calculate tax amount with tax percentage based on checkbox checked*/

                /*Include tax in line amount*/
                var amnt = (noTaxAmnt * calTax) + (noTaxAmnt);
                /*Include tax in line amount*/

                //                $11('txttax').value = parseFloat(noTaxAmnt * calTax).toFixed(4);
                var newnumber = Math.round((parseFloat(noTaxAmnt * calTax)) * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txttax').value = newnumber;
                var newpo = Math.round((parseFloat(amnt + ShipCost)) * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txtPoAmount').value = newpo;

                /*Calculate Balance After PO*/
                if (parseFloat($11('hdnPORowTotAmnt').value == '' ? 0 : $11('hdnPORowTotAmnt').value) > 0) {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - (parseFloat($11('hdnPORowTotAmnt').value) + parseFloat($11('txtPoAmount').value));
                }
                else {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - parseFloat($11('txtPoAmount').value == '' ? 0 : $11('txtPoAmount').value);
                }
                $11('txtBalAfterPO').value = parseFloat(bal).toFixed(4);
                /*Calculate Balance After PO*/
            }
            console.log('after else');
        }

        function EmailOption() {
            if (document.getElementById('chkEmail').checked) {
                document.getElementById('dvEmail').style.display = "block";
            }
            else {
                document.getElementById('dvEmail').style.display = "none";
            }
        }

        function showShipAddress(type) {
            if (type == '1') {
                $11('lblCompAddr').innerHTML = 'Shipping Address';
                $11('dvshipAddr').style.display = "block";
                $11('dvBillAddr').style.display = "none";
            }
            else {
                $11('lblCompAddr').innerHTML = 'Billing Address';
                $11('dvBillAddr').style.display = "block";
                $11('dvshipAddr').style.display = "none";
            }
            $find('popShipAddr').show();
        }

        function ShowBiggerImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "";
        }

        function showDeleteButton() {
            $11('dvAtt').innerHTML = '';
            var total = 0;
            var grid = $11('<%=gvAttchmnts.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($11(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                    total++;
                }
            }
            if (parseInt(total) > 0)
                $11("btnDeleteSelected").style.display = "block";
            else
                $11("btnDeleteSelected").style.display = "none";
        }

        function showConfirmation(sender, args) {
            $11('lblFileName').innerHTML = args.get_fileName();
            //$11('dvAtt').style.color = "Green";
            //$11('dvAtt').innerHTML = "File attached successfully.";
            //$11('btnAttach').value = '   Attachments(1)';
        }

        function showConfirmationUploadPO(sender, args) {
            $11('lblUploadPOFileName').innerHTML = args.get_fileName();
        }

        //Split City and Zip from City text field
        function splitCityZip(txt) {
            var arr = txt.value.split("-");
            document.getElementById('txtVendZip').value = arr[1];
        }
        //Split City and Zip from City text field

        function DisplayEmailOption() {
            if (document.getElementById('chkSysOrders').checked) {
                document.getElementById('dvSysOrders').style.display = "block";
                var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
                radioButtonlist[0].checked = true;
                document.getElementById('txtEmailFax').value = '';
            } else
                document.getElementById('dvSysOrders').style.display = "none";
        }

        //Get Vendor Number by passing Vendor name to db
        function getVendCode() {
            if (document.getElementById('txtVendName').value != '') {
                var url = 'Invoice.ashx?func=4&orgname=' + document.getElementById('txtVendName').value + '&typ=3';
                GetVendorNum(url, 'GetVendorNum');
            }
            else
                document.getElementById('lblVendNo').value = '';
        }
        //Get Vendor Number by passing Vendor name to db

        //Display selected item inventory details
        function showItemInventory() {
            $find('popItemInventory').show();
            return false;
        }
        //Display selected item inventory details

        //Show expand/collapse buttons
        //$("[src*=down]").live("click", function () {
        //    $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>")
        //    $(this).attr("src", "images/uparrow.jpg");
        //});
        //$("[src*=up]").live("click", function () {
        //    $(this).attr("src", "images/downarrow.jpg");
        //    $(this).closest("tr").next().remove();
        //});

        //Show expand/collapse buttons

        //Show Item Purchase history
        function GetItemPurchHistory(id) {
            var url = 'Invoice.ashx?func=14&item=' + document.getElementById('ddlItemCode').value + '&up=' + id.value;
            FetchItemPurchHist(url, 'FetchItemPurchHist');
        }
        //Show Item Purchase history

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
</body>
</html>
