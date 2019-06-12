<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserAccess.aspx.cs" Inherits="UserAccess" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Assign Screen Access Rights</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js" type="text/javascript"></script>
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
                $("#ddlProfiles").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlProfiles").ufd({ log: true });
            });
        });

        function $11(id) {
            return document.getElementById(id);
        }

        function mouseOverRow(obj) {
            obj.originalstyle = obj.style.backgroundColor;
            obj.style.backgroundColor = '#C6E2FF'
        }

        function mouseOutRow(obj) {
            obj.style.backgroundColor = obj.originalstyle;
        }

        function selectRowGvAll(obj, hdn, type) {
            if (type == "1") {
                if ($11(hdn).value == '0') {
                    obj.style.backgroundColor = '#C6E2FF';
                    $11(hdn).value = '1';
                } else if ($11(hdn).value == '1') {
                    obj.style.backgroundColor = 'White';
                    $11(hdn).value = '0';
                }
            }
            else if (type == "0") {
                var obj1 = obj.parent.parent;
                obj1.style.backgroundColor = '#C6E2FF';
                $11(hdn).value = '1';
            }
            return false;
        }

        function addNewProfile() {
            $find('popNewProfile').show();
            return false;
        }

        function validateNewProfile() {
            var errStr = 'Please enter ';
            $11('dvNewProfErr').innerHTML = '';
            $11('dvNewProfErr').style.color = "red";
            if ($11('txtProfile').value == 0) {
                errStr += 'Profile, ';
            }
            if ($11('txtProfile').value.length > 50) {
                errStr += 'Profile not exceeding 50 characters, ';
            }
            if ($11('txtProfDescr').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtProfDescr').value.length > 50) {
                errStr += 'Description not exceeding 50 characters';
            }
            errStr = errStr.substring(0, errStr.length - 2);
            //console.log($11('txtProfile').value + ' -- ' + $11('txtProfile').value.length + ' -- ' + $11('txtProfDescr').value + ' -- ' + $11('txtProfDescr').value.length + ' -- ' + errStr);
            if (errStr.length > 13) {
                $11('dvNewProfErr').innerHTML = errStr;
                return false;
            }
        }

        //Close New profile creation popup
        function closeNewProfilePop() {
            $find('popNewProfile').hidePopup();
        }

    </script>
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .navlnk {
            font-weight: bold;
            font-size: 1.5em;
            width: 40px;
            font-family: Franklin Gothic Demi;
        }

        #gvAllScreens tbody tr td, #gvSelectedScreens tbody tr td {
            height: 35px;
            padding-left: 5px;
        }

        .radioRW td {
        }

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 5px;
            }

        #txtProfile, #txtProfDescr {
            font-size: 3em;
            width: 270px;
            height: 30px;
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
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="60%">
                                                    <hgroup>
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td style="width: 70%">
                                                                    <h2>Assign Screen Access Rights
                                                                    </h2>
                                                                </td>
                                                                <td style="width: 30%; text-align: right">
                                                                    <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnRefresh_Click" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </hgroup>
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvGroupErr" runat="server" style="color: Red; font-size: small">
                                            </div>
                                            <table>
                                                <tr>
                                                    <td colspan="3">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Profile:</label></small>
                                                                    <asp:DropDownList ID="ddlProfiles" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                        OnSelectedIndexChanged="ddlProfiles_SelectedIndexChanged" AutoPostBack="true">
                                                                    </asp:DropDownList>
                                                                    <label><a href="#" id="acnNewProf" runat="server" onclick="addNewProfile();">Create new profile.</a></label>
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
                                                    <td colspan="3">
                                                        <div class="message info">
                                                            <b><span style="color: Red">*</span></b>Please note, assigning/blocking
                                                        access to screen(s) will be saved to database automatically.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            List of Screens:</label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvAllScreens" runat="server" AutoGenerateColumns="false" ShowHeader="false" OnRowDataBound="gv_RowDataBound"
                                                                        Width="320px" Height="300px">
                                                                        <Columns>
                                                                            <asp:TemplateField ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblScreenDescr" runat="server" Text='<%#Eval("Description") %>'></asp:Label></label>
                                                                                    <asp:HiddenField ID="hdnSelect" runat="server" Value="0" />
                                                                                    <asp:HiddenField ID="hdnCodeKey" runat="server" Value='<%#Eval("CodeKey") %>' />
                                                                                    <asp:HiddenField ID="hdnCodeValue1" runat="server" Value='<%#Eval("CodeValue1") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                <ItemTemplate>
                                                                                    <asp:RadioButtonList ID="rblRW" runat="server" RepeatDirection="Horizontal" TextAlign="Right" CssClass="radioRW">
                                                                                        <asp:ListItem Selected="True" Value="R" Text="Read"></asp:ListItem>
                                                                                        <asp:ListItem Value="W" Text="Write"></asp:ListItem>
                                                                                    </asp:RadioButtonList>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="padding: 20px">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkAssSelectedScreens" runat="server" OnClick="AllowSelectedScreens"
                                                                        CssClass="button button-blue" Text=">" ToolTip="Allow Selected Screen" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkAssMulScreens" runat="server" OnClick="AllowMultipleScreens"
                                                                        CssClass="button button-blue" Text=">>" ToolTip="Allow All Screens" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkRemSelectedScreens" runat="server" OnClick="BlockSelectedScreens"
                                                                        CssClass="button button-blue" Text="<" ToolTip="Block Selected Profile" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkRemMulScreens" runat="server" OnClick="BlockMultipleScreens"
                                                                        CssClass="button button-blue" Text="<<" ToolTip="Block All Screens" Width="40px" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Allowed Screens:</label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvSelectedScreens" runat="server" AutoGenerateColumns="false" ShowHeader="false" OnRowDataBound="gvSelectedScreens_RowDataBound"
                                                                        Width="320px" Height="300px">
                                                                        <Columns>
                                                                            <asp:TemplateField ItemStyle-Width="300px" HeaderStyle-Width="300px">
                                                                                <ItemTemplate>
                                                                                    <label><%#Eval("Description") %></label>
                                                                                    <asp:HiddenField ID="hdnSelect" runat="server" Value="0" />
                                                                                    <asp:HiddenField ID="hdnCrossID" runat="server" Value='<%#Eval("crossId") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <asp:Panel ID="pnlNewProfile" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; background-color: white; min-height: 95px; width: 430px">
                                                <div id="dvCloseBtn" style="text-align: right; vertical-align: top; height: 20px">
                                                    <a href="javascript:void(0);" id="ancClose" runat="server" onclick="closeNewProfilePop();">
                                                        <img alt="close" src="images/icons/cross.png" /></a>
                                                </div>
                                                <div class="divfieldset">
                                                    <div id="dvNewProfErr" runat="server"></div>
                                                    <table class="tablemain">
                                                        <tr>
                                                            <td style="text-align: left"><small>
                                                                <label>Profile:</label></small><br />
                                                                <asp:TextBox ID="txtProfile" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: left"><small>
                                                                <label>Description:</label></small><br />
                                                                <asp:TextBox ID="txtProfDescr" runat="server"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <asp:Button ID="btnSaveProfile" runat="server" OnClick="SaveProfile" Text="Save" CssClass="buttonnew-green" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <cc1:ModalPopupExtender ID="popNewProfile" runat="server" TargetControlID="acnNewProf" PopupControlID="pnlNewProfile" BackgroundCssClass="modalBackground" DropShadow="false" CancelControlID="ancClose">
                                        </cc1:ModalPopupExtender>
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
