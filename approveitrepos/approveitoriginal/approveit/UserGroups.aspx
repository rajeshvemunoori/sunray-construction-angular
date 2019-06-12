<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserGroups.aspx.cs" Inherits="UserGroups" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Group Profiles</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
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

        p label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: Black;
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
                                                        <h2>Group Profiles
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvGroupErr" runat="server" style="color: Red; font-size: small">
                                            </div>
                                            <br />
                                            <table>
                                                <tr>
                                                    <td colspan="3">
                                                        <table>
                                                            <%--<tr>
                                                                <td colspan="2">
                                                                    <small>
                                                                        <label>
                                                                            Organization:
                                                                        </label>
                                                                    </small>
                                                                    <b>
                                                                        <asp:Label ID="lblOrgName" runat="server"></asp:Label></b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>--%>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Comp Code:
                                                                        </label>
                                                                    </small>
                                                                    <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                        AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" Width="200px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Groups:</label></small>
                                                                    <asp:DropDownList ID="ddlGroups" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                        OnSelectedIndexChanged="ddlGroups_SelectedIndexChanged" AutoPostBack="true" Width="200px">
                                                                    </asp:DropDownList>
                                                                    &nbsp;&nbsp;<small><label><asp:LinkButton ID="lnkCreateGroup" runat="server" Text="Click here"
                                                                        OnClick="CreateGroup"></asp:LinkButton>
                                                                        to add new group.</label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
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
                                                            <span style="color: Red">*</span><span style="color: Black">Please note, assigning/removing
                                                            profile(s) will be saved to database automatically.</span>
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
                                                                            List of Profiles:</label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:ListBox ID="lstErRoles" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                        SelectionMode="Multiple" Width="200px" Height="200px"></asp:ListBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="padding: 20px">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkAssSelectedProfiles" runat="server" OnClick="AssignSelectedProfiles"
                                                                        CssClass="button button-blue" Text=">" ToolTip="Assign Selected Profile" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkAssMulProfiles" runat="server" OnClick="AssignMultipleProfiles"
                                                                        CssClass="button button-blue" Text=">>" ToolTip="Assign All Profiles" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkRemSelectedProfiles" runat="server" OnClick="RemoveSelectedProfiles"
                                                                        CssClass="button button-blue" Text="<" ToolTip="Remove Selected Profile" Width="40px" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkRemMulProfiles" runat="server" OnClick="RemoveMultipleProfiles"
                                                                        CssClass="button button-blue" Text="<<" ToolTip="Remove All Profiles" Width="40px" />
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
                                                                            Assigned Profiles:</label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:ListBox ID="lstAssgnRoles" runat="server" DataValueField="CodeKey" DataTextField="Description"
                                                                        SelectionMode="Multiple" Width="200px" Height="200px"></asp:ListBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </section>
                                </div>
                                <asp:Panel ID="pnlCreateGrp" runat="server" Style="display: none" DefaultButton="btnSaveGrp">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td style="width: 50%;">
                                                        <h2 class="pophead">Create Group</h2>
                                                    </td>
                                                    <td align="right" style="width: 50%">
                                                        <asp:Button ID="btnSaveGrp" runat="server" OnClick="SaveGroup" Text="Save" CssClass="buttonnew-green" />
                                                        <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <table width="100%">
                                                    <tr>
                                                        <td colspan="2">
                                                            <div id="dvError" runat="server">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>GroupID:</label></small>&nbsp;&nbsp;
                                                        </td>
                                                        <td align="left">
                                                            <asp:TextBox ID="txtGrpID" runat="server"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>Description:</label></small>&nbsp;&nbsp;
                                                        </td>
                                                        <td align="left">
                                                            <asp:TextBox ID="txtDescr" runat="server"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>Approval Limit:</label></small>&nbsp;&nbsp;
                                                        </td>
                                                        <td align="left">
                                                            <asp:TextBox ID="txtApprLmt" runat="server"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>Tolerance Amount:</label></small>&nbsp;&nbsp;
                                                        </td>
                                                        <td align="left">
                                                            <asp:TextBox ID="txtTolAmnt" runat="server"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCreateGrp" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCreateGrp" runat="server" DropShadow="false" PopupControlID="pnlCreateGrp"
                                    TargetControlID="lnkCreateGrp" CancelControlID="btnClose" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
