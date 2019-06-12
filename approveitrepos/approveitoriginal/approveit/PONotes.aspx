<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PONotes.aspx.cs" Inherits="PONotes" %>

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
    <title>ApproveIt - Notes</title>
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
    <link rel="stylesheet" href="Styles/leftmenu/styles.css"/>
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function $11(id) {
            return document.getElementById(id);
        }
        var MaxLength = 3000;
        $(document).ready(function () {
            $11('dvCharCnt').style.display = 'none';
            checkNotes();
        });

        function DoOnAjaxPostback() {
            $11('dvCharCnt').style.display = 'none';
            checkNotes();
        }

        function checkNotes() {
            $11('lblCharCnt').innerHTML = '3000';
            $('#txtNotes').keyup(function (e) {
                $11('dvCharCnt').style.display = 'block';
                if ($(this).val().length >= MaxLength) {
                    e.preventDefault();
                }
                $11('lblCharCnt').innerHTML = MaxLength - $(this).val().length;
            });
        }

        function hideMsg() {
            $11('dvMsg').innerHTML = '';
        }

        function ValidateText() {
            if ($11('txtNotes').value == 0) {
                $11('dvMsg').innerHTML = 'Please enter Notes';
                $11('dvMsg').style.color = 'Red';
                return false;
            }
        }

        function showProgress() {
            var updateProgress = $11("UpdateProgress1");
            updateProgress.style.display = "block";
        }

    </script>
    <style>
        label
        {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .lnk
        {
            text-decoration: underline;
            color: White;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position:fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server"/>
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
                                        <img src="images/Loaders/image_855859.gif" />
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
                                <div class="main-content grid_4 alpha" style="width: 750px; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="20%">
                                                        <h2>Notes
                                                        </h2>
                                                    </td>
                                                    <td width="20%" align="right">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveNotes" Visible="true"></asp:Button>
                                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvMsg" runat="server">
                                            </div>
                                            <br />
                                            <table width="100%">
                                                <tr>
                                                    <td width="20%" align="right">
                                                        <small>
                                                            <label>
                                                                Organization:&nbsp;&nbsp;</label></small>
                                                    </td>
                                                    <td width="80%" align="left" style="font-size: 13px" colspan="3">
                                                        <b>
                                                            <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="20%" align="right">
                                                        <small>
                                                            <label>
                                                                Company Code:&nbsp;&nbsp;</label></small>
                                                    </td>
                                                    <td width="35">
                                                        <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="CompCode" DataValueField="CompCode"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged">
                                                        </asp:DropDownList>
                                                    </td>
                                                    <td width="10%" align="right">
                                                        <small>
                                                            <label>
                                                                Type:&nbsp;&nbsp;</label></small>
                                                    </td>
                                                    <td width="35%">
                                                        <asp:DropDownList ID="ddlNotesType" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlNotesType_SelectedIndexChanged">
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div style="padding: 20px">
                                                <table width="100%">
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div class="message info">
                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            <small>
                                                                                <label>
                                                                                    Please Enter text (or copy and paste from any document). Maximum length allowed
                                                                            is 3000 characters.</label></small>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:TextBox ID="txtNotes" runat="server" TextMode="MultiLine" Width="500px" Height="115px"></asp:TextBox>
                                                                        <asp:HiddenField ID="hdnNotesID" runat="server" />
                                                                        <asp:HiddenField ID="hdnNotesCnt" runat="server" />
                                                                    </td>
                                                                    <td style="padding: 10px; vertical-align: top">
                                                                        <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="DeleteNotes" Visible="true"></asp:Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div id="dvCharCnt" runat="server">
                                                                            <small>
                                                                                <label>
                                                                                    Charaters left&nbsp;</label>
                                                                                <label id="lblCharCnt">
                                                                                </label>
                                                                                <label>
                                                                                    .</label></small>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
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
