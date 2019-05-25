<%@ Page Language="C#" AutoEventWireup="true" CodeFile="HostIndex.aspx.cs" Inherits="HostIndex" %>

<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Xtramilesoft Technologies Pvt. Ltd.</title>
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
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function showProgress() {
            document.getElementById('UpdateProgress1').style.display = "block";
        }
    </script>
    <style>
        .mainlabel {
            font-family: Arial;
            font-size: 2.5em;
            font-style: italic;
            color: #6CA6CD;
        }

        .maintable {
            font-family: Arial;
            font-size: 1.15em;
            font-style: italic;
            background-color: #D2E9F7;
            padding: 10px;
            color: #325C74;
        }

        .symbol {
            font-style: normal;
            font-family: Lucida Sans Unicode;
            font-size: 1.45em;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="Scr1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="padding-top: 0px">
                        <div class="main-content grid_4" style="width: 1000px; margin-left: 0;">
                            <header>
                                <h2>ApproveIt - Home
                                </h2>
                            </header>
                            <section class="">
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
                                        <div class="divfieldset" style="height: 400px; padding: 20px">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td class="mainlabel">
                                                                    <a href="Codes/Compcodecreation.aspx" style="text-decoration: none; color: inherit">Company Codes</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="maintable">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td colspan="2" align="right">
                                                                                <asp:LinkButton ID="lnkRefreshOrg" runat="server" OnClick="RefreshOrganizations"
                                                                                    Style="text-decoration: none; color: inherit;"> <span class="message symbol">&#x27F3;</span></asp:LinkButton>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%">Total Organizations Registered
                                                                            </td>
                                                                            <td width="20%">20
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%">Organizations Licensed
                                                                            </td>
                                                                            <td width="20%">10
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%">Organizations Not Licensed
                                                                            </td>
                                                                            <td width="20%">10
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%"></td>
                                                                            <td width="20%"></td>
                                                                        </tr>
                                                                    </table>
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
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td class="mainlabel">
                                                                    <a href="CSNewExpense.aspx" style="text-decoration: none; color: inherit">Expenses</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="maintable">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td colspan="2" align="right">
                                                                                <asp:LinkButton ID="lnkExpRefresh" runat="server" OnClick="RefreshExpenses" Style="text-decoration: none; color: inherit;"> <span class="message symbol">&#x27F3;</span></asp:LinkButton>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%">Total Pending
                                                                            </td>
                                                                            <td width="20%">30
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%">Total Placed
                                                                            </td>
                                                                            <td width="20%">50
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%"></td>
                                                                            <td width="20%"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="80%"></td>
                                                                            <td width="20%"></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
