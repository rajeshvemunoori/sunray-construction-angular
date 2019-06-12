<%@ Page Language="C#" AutoEventWireup="true" CodeFile="License.aspx.cs" Inherits="Codes_License" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
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
    <title>ApproveIt - License</title>
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
    <script type="text/javascript">

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function Displayddl() {
            if (document.getElementById('chkCopyCodes').checked)
                document.getElementById('dvCopyCodes').style.display = "block";
            else
                document.getElementById('dvCopyCodes').style.display = "none";
        }
    </script>
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground {
            /*background-color: #F8F8F8;
            filter: alpha(opacity=70);
            opacity: 0.9;
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground1 {
            /*position: absolute;
            background-color: #F8F8F8;
            filter: alpha(opacity=70);
            opacity: 0.7;
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

        .Cpagination {
            line-height: 50px;
        }

            .Cpagination td {
                border-width: 0;
                padding: 0 2px; /*font-weight: bold;*/
                color: #fff;
            }

            .Cpagination a:hover {
                border: solid 1px #486694;
                text-decoration: none;
            }

            .Cpagination span {
                padding: 2px 6px 2px 6px;
                border: solid 1px #9ECDE7;
                text-decoration: none;
                white-space: nowrap;
                background: #486694;
                background-color: White;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: #555;
                text-shadow: 1 1px 0 #fff;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
            }

            .Cpagination:hover {
                text-decoration: none;
            }

            .Cpagination a, .Cpagination a:visited {
                background: #f1f1f1;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: #555;
                text-shadow: 1 1px 0 #fff;
                text-decoration: none;
                padding: 2px 6px 2px 6px;
                white-space: nowrap;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
                background: #ececec;
                background: -webkit-gradient(linear, left top, left bottom, from(#e1e1e1), to(#c1c1c1));
                background: -moz-linear-gradient(top, #e1e1e1, #c1c1c1);
                -pie-background: linear-gradient(top, #e1e1e1, #c1c1c1);
            }

        .rbl input[type="radio"] {
            margin-left: -100%;
            margin-right: 5%;
        }

        .lnk {
            color: #0D4F8B;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        .radioButtonList td {
            vertical-align: bottom;
            text-align: right;
            font-weight: bold;
        }

        .radioButtonList input[type="radio"] {
            float: right;
            margin: 3px -20px 0px -150px;
        }

        .radioButtonList label {
            width: 180px;
            display: block;
        }

        label {
            /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
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
                    <!-- the tabs -->
                    <section class="grid_7" style="padding-top: 0px">
                        <asp:ScriptManager ID="ScriptManager1" runat="server">
                        </asp:ScriptManager>
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
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content grid_4 alpha" style="width: 800px; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="60%">
                                                    <hgroup>
                                                        <h2>View Licenses
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="40%" align="right">
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div id="dvErr" runat="server">
                                        </div>
                                        <table width="100%">
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>
                                                        LicenseID :
                                                    </label>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtLicID" runat="server"></asp:TextBox>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>
                                                        Organization Name :
                                                    </label>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtOrgName" runat="server"></asp:TextBox>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>
                                                        Total Licenses :
                                                    </label>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtTotLics" runat="server"></asp:TextBox>
                                                </td>
                                                <td>
                                                    <label>
                                                        Available Licenses :
                                                    </label>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtAvlLics" runat="server"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>
                                                        License Flag :
                                                    </label>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtLicFlg" runat="server"></asp:TextBox>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <asp:Button ID="btnBuyLic" runat="server" CssClass="button button-blue" Text="Buy Licenses"
                                                        OnClick="BuyLicenses" />
                                                </td>
                                                <td>
                                                    <asp:Button ID="btnAllcLics" runat="server" CssClass="button button-blue" Text="Allocate Licenses"
                                                        OnClick="AllocateLicenses" />
                                                </td>
                                                <td></td>
                                            </tr>
                                        </table>
                                        <asp:Panel ID="pnlBuyLicns" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: -55px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 570px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2>Buy Licenses
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnBuyLicnsClose" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="form_edit" style="border: 1px solid #0099CC; padding: 20px;">
                                                        <div id="dvErrBuyLics">
                                                        </div>
                                                        <table width="100%">
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        LicenseID :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyLicID" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Organization Name :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyOrgName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Total Licenses :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyTotLics" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Available Licenses :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyAvlLics" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        License/Month :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyLicPerMonth" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        New Licenses :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyNewLics" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <label>
                                                                        Total Cost/Year :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyTotCostPerYear" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>
                                                                        Renew Date :
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtBuyRenewDt" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td></td>
                                                                <td>
                                                                    <asp:Button ID="btnPayForLics" runat="server" CssClass="button button-blue" Text="Pay For Licenses"
                                                                        OnClick="PayForLicenses" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnk" runat="server"></asp:LinkButton>
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
