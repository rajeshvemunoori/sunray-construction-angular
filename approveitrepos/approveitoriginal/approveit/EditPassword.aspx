<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EditPassword.aspx.cs" Inherits="EditPassword" %>

<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="vendtop" Src="~/controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc7" TagName="vendleftmenu" Src="Controls/VendLeft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc9" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

    </script>
    <title>ApproveIt - Edit Password</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
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
    <script src="js/global.js"></script>
    <script src="js/Ajax.js"></script>
    <script src="js/DateSetup.js" type="text/javascript"></script>
    <style>
        label em {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form id="form" runat="server" autocomplete="off">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <!--header-->
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <%if (Convert.ToInt32(Session["OrgID"]) != 0)
              {%>
            <uc2:top ID="top" runat="server" />
            <% }
              else if (Session["VendBillID"] != null)
              {
            %>
            <uc6:vendtop ID="vendtop" runat="server" />
            <%
              } %>
        </div>
        <!--header-->
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                      {%>
                    <uc9:leftmenu ID="leftmenu" runat="server" />
                    <%
                      }
                      else if (Session["VendBillID"] != null)
                      {
                    %>
                    <uc7:vendleftmenu ID="vendleftmenu" runat="server" />
                    <%
                      }
                      else
                      {%>
                    <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
                    <%} %>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7">
                        <div class="main-content grid_4" style="width: 115%">
                            <header>
                                <table width="100%">
                                    <tr>
                                        <td style="width: 55%;">
                                            <h2>Change Password
                                            </h2>
                                        </td>
                                        <td align="right" style="width: 45%">
                                            <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click"></asp:Button>&nbsp;
                                        </td>
                                    </tr>
                                </table>
                            </header>
                            <section class="container_6 clearfix">
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
                                        <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                            <div class="form grid_4">
                                                <fieldset>
                                                    <div id="dvError" runat="server" style="text-align: center">
                                                    </div>
                                                    <br />
                                                    <small>
                                                        <label><em>*</em>Old Password:</label>
                                                    </small>
                                                    <asp:TextBox ID="txtOldPassword" TextMode="Password" runat="server"></asp:TextBox>
                                                    <small>
                                                        <label><em>*</em>New Password:</label>
                                                    </small>
                                                    <asp:TextBox ID="txtNewPassword" TextMode="Password" runat="server"></asp:TextBox>
                                                    <small>
                                                        <label><em>*</em>Re-enter New Password:</label>
                                                    </small>
                                                    <asp:TextBox ID="txtReenterPassword" TextMode="Password" runat="server"></asp:TextBox>
                                                </fieldset>
                                            </div>
                                        </asp:Panel>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </section>
                        </div>
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
