<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Integration.aspx.cs" Inherits="Integration" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc9" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt - Integration</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlTypes").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlTypes").ufd({ log: true });
            });
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function showIntOptions(obj) {
            $11('hdnChangesSaved').value = "1";
            var inputList = obj.getElementsByTagName('input');
            var labelList = obj.getElementsByTagName('label');
            for (var i = 0; i < inputList.length; i++) {
                if (inputList[i].checked) {
                    if (labelList[i].innerHTML.toUpperCase() == "ACCOUNTS") {
                        //$11('rblIntOptions').style.display = "block";
                        $11('dvAccntOptions').style.display = "block";
                    }
                    else {
                        $11('dvAccntOptions').style.display = "none";
                    }
                }
                else {
                    $11('dvAccntOptions').style.display = "none";
                }
            }
        }

        function displayMsg(obj) {
            $11('hdnChangesSaved').value = "1";
            for (var i = 0; i < obj.rows.length; ++i) {
                if (obj.rows[i].cells[0].firstChild.checked)
                    $11('dvMsgByOption').innerHTML = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' /><small><label>Using this option we will load all your account numbers to be accessed by every department for their expenses or purchases.</small></label>";
                else
                    $11('dvMsgByOption').innerHTML = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' /><small><label>By using this option you will be allowed to assign all your account numbers to different departments of your company in <a onclick='confirmChanges(1);' class='synclink'>Sync Data</a> screen.</small></label>";
            }
        }

        //Toggle message if selected QB offline/online
        function showOffLineMessage(obj) {
            for (var i = 0; i < obj.rows.length; ++i) {
                if (obj.rows[i].cells[0].firstChild.checked)
                    $11('dvQBOffLineMsg').innerHTML = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' /><small><label>If offline, data integration is done with desktop version of QuickBooks without internet connection.</small></label>";
                else
                    $11('dvQBOffLineMsg').innerHTML = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' /><small><label>If online, data integration is done with web version of QuickBooks <b>only</b> with internet connection.</small></label>";
            }
        }
        //Toggle message if selected QB offline/online

        function confirmChanges(type) {
            if (type == 1) {
                if ($11('hdnChangesSaved').value == "1")
                    $find("popAlert").show();
                else if ($11('hdnChangesSaved').value == "0") {
                    showProgress();
                    window.location.href = "SyncAcc.aspx";
                }
            }
            else if (type == 0) {
                showProgress();
                window.location.href = "SyncAcc.aspx";
            }
        }
    </script>
    <style>
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

        label em {
            font-weight: bold;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #cblExport label {
            margin-left: 10px;
        }

        #chkTempStop {
            margin: 6px;
        }

        #rblIntOptions td {
            padding: 10px;
        }

        .synclink {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
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
        <div id="wrapper">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                      {%>
                    <uc9:leftmenu ID="leftmenu" runat="server" />
                    <%
                      }
                      else
                      {%>
                    <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
                    <%} %>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="padding-top: 0px">
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
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content grid_4 alpha" style="width: 115%">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td style="width: 55%;">
                                                    <h2>Integration
                                                    </h2>
                                                </td>
                                                <td align="right" style="width: 45%">
                                                    <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green"
                                                        OnClick="btnSave_Click"></asp:Button>
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section class="container_6 clearfix">
                                        <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                            <div class="grid_4">
                                                <div class="divfieldset">
                                                    <div id="dvError" runat="server" style="text-align: center; font-weight: bold">
                                                    </div>
                                                    <br />
                                                    <table width="100%">
                                                        <tr>
                                                            <td align="center" style="padding: 5px;">
                                                                <small>
                                                                    <label>Select Type:&nbsp;&nbsp;</label>
                                                                </small>
                                                                <asp:DropDownList ID="ddlTypes" runat="server" OnSelectedIndexChanged="SelectedTypeChanged"
                                                                    AutoPostBack="true">
                                                                </asp:DropDownList>
                                                                <asp:HiddenField ID="hdnChangesSaved" runat="server" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div id="dvQuickBooks" style="display: none;" runat="server">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Company Id:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBCompanyId" runat="server"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnIntgrID" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Consumer Key:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBConsumerKey" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Consumer Secret:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBConsumerSecret" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Access Token:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBAccessToken" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Access Token Secret:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBAccessTokenSecret" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>App Token:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtQBAppToken" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <%--<tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td align="center">
                                                                                            <asp:RadioButtonList ID="rblQBOffline" runat="server" RepeatDirection="Horizontal" Width="200px" onclick="showOffLineMessage(this);">
                                                                                                <asp:ListItem Text="Offline" Value="0"></asp:ListItem>
                                                                                                <asp:ListItem Text="Online" Value="1"></asp:ListItem>
                                                                                            </asp:RadioButtonList>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div id="dvQBOffLineMsg" runat="server"></div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>--%>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div id="dvXero" style="display: none;" runat="server">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Consumer Key:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtXeroConsumerKey" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table width="100%">
                                                                                    <tr>
                                                                                        <td width="50%" align="right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Consumer Secret:&nbsp;&nbsp;</label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td width="50%" align="left">
                                                                                            <asp:TextBox ID="txtXeroConsumerSecret" runat="server"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div id="dvMicroDynamics" style="display: none;" runat="server">
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="right">
                                                                <label>
                                                                    <asp:Button ID="lnkTestConn" runat="server" Text="Test Connection" CssClass="buttonnew-blue" OnClick="lnkTestConn_Click" />
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="right">
                                                                <div id="dvConnMsg" runat="server"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td><small>
                                                                <label>
                                                                    <asp:CheckBox ID="chkTempStop" runat="server" Text="Send Expenses and PO's to QuickBooks" TextAlign="Right" /></label></small></td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div id="dvOptions" runat="server" style="display: none">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Integrate the following:</label>
                                                                                </small>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center">
                                                                                <asp:CheckBoxList ID="cblExport" runat="server" RepeatDirection="Horizontal" RepeatColumns="2"
                                                                                    Width="300px" onclick="showIntOptions(this);">
                                                                                </asp:CheckBoxList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvAccntOptions" runat="server">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td style="padding: 5px; text-align: center">
                                                                                                <b>
                                                                                                    <h3>
                                                                                                        <div id="dvAccntQtn" runat="server">
                                                                                                            <%--How do you wish to maintain your company account numbers?--%>
                                                                                                        </div>
                                                                                                    </h3>
                                                                                                </b>
                                                                                                <asp:RadioButtonList ID="rblIntOptions" runat="server" RepeatDirection="Horizontal" Width="300px" onclick="displayMsg(this);"></asp:RadioButtonList>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <div id="dvMsgByOption" runat="server"></div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="btnYes_Click" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="padding: 5px;">
                                                        <div class="divfieldset">
                                                            You have changes to be saved. Do you want to save now?
                                                            <br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlSyncConf" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYesSyncConf" runat="server" OnClick="btnYesSyncConf_Click" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNoSyncConf" runat="server" OnClick="btnNoSyncConf_Click" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="padding: 5px;">
                                                        <div class="divfieldset">
                                                            <br />
                                                            <small>
                                                                <label>
                                                                    <div id="dvSyncConfMsg" runat="server"></div>
                                                                </label>
                                                            </small>
                                                            <br />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkSyncConf" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popSyncConf" runat="server" DropShadow="false" PopupControlID="pnlSyncConf"
                                            TargetControlID="lnkSyncConf" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
                <div id="push">
                </div>
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
