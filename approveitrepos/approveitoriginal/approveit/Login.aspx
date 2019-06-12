<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <title>ApproveIt - Login</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <meta name="description" content="Login" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link rel="stylesheet" media="screen" href="css/buttons.css" />
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .tab td {
            background-image: url(images/overlay/white.png);
            background-size: cover;
            padding: 30px;
            text-align: center;
        }

        .regicon {
            filter: alpha(opacity=70);
            opacity: 0.7;
        }

            .regicon:hover {
                filter: alpha(opacity=100);
                opacity: 1.0;
            }

        .reganc {
            font-family: "Trebuchet MS",Arial,Helvetica,sans-serif;
            font-size: 1.3em;
            text-decoration: none;
            text-decoration-line: none;
            color: #6487fa;
            text-transform: uppercase;
            font-weight: normal;
        }
    </style>
</head>
<body>
    <form id="form1" method="post" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <div id="wrapper">
            <header style="position: fixed">
                <div class="logo">
                    <img src="images/approveIt_logo.png" alt="ApproveIt" width="200" />
                </div>
            </header>
            <section>
                <div>

                    <section style="margin-left: 134px">
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
                                <asp:PostBackTrigger ControlID="btnSubmit" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="login-box main-content" style="height: 50%">
                                    <header>
                                        <h2>Login</h2>
                                    </header>
                                    <div>
                                        <asp:Panel ID="p" runat="server" DefaultButton="btnSubmit">
                                            <div id="dvError" runat="server" style="color: Red">
                                            </div>
                                            <p>
                                                <asp:TextBox ID="txtEmail" runat="server" class="emaildouble" placeholder="Email"></asp:TextBox>
                                            </p>
                                            <p>
                                                <asp:TextBox ID="txtPassword" TextMode="Password" runat="server" class="pwddouble" placeholder="Password"></asp:TextBox>
                                            </p>
                                            <p>
                                            </p>
                                            <p class="clearfix">
                                                <table width="100%">
                                                    <tr>
                                                        <td style="width: 70%">
                                                            <span class="fl">
                                                                <asp:CheckBox ID="chkRemember" runat="server" name="remember"></asp:CheckBox>
                                                                <small>
                                                                    <label class="choice" for="remember">
                                                                        Remember me</label></small>
                                                            </span>
                                                        </td>
                                                        <td style="width: 30%">
                                                            <asp:Button ID="btnSubmit" runat="server" Text="Sign in" Width="120px" CssClass="buttonnew-blue" OnClick="btnSubmit_Click" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    <asp:LinkButton ID="lnkpwdBtn" runat="server" OnClick="Pwd_Click"
                                                                        Text="Forgot your password?" Style="margin-left: 10px;"></asp:LinkButton>
                                                                </label>
                                                            </small>
                                                        </td>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    <asp:LinkButton ID="lnkRegisterBtn" runat="server"
                                                                        Text="Sign Up"></asp:LinkButton>
                                                                </label>
                                                            </small>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </p>
                                            <asp:HiddenField ID="hdnEMail" runat="server" />
                                            <asp:HiddenField ID="hdnReqID" runat="server" />
                                            <asp:HiddenField ID="hdnUserIDReq" runat="server" />
                                            <asp:HiddenField ID="hdnPreApproved" runat="server" />
                                            <asp:HiddenField ID="hdnStatus" runat="server" />
                                            <asp:HiddenField ID="hdnApproved" runat="server" />
                                            <asp:HiddenField ID="hdnType" runat="server" />
                                            <asp:HiddenField ID="hdnQSEmail" runat="server" />
                                        </asp:Panel>
                                        <asp:Panel ID="pnlInactive" runat="server" Style="display: none"
                                            DefaultButton="btnOk">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <h2 class="pophead">Contact Admin</h2>
                                                </header>
                                                <section>
                                                    <div runat="server">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p style="font-size: 13px; color: Red">
                                                                        Your account is inactive. Please comment and send it to your administrator.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <div id="dvErrorc" runat="server" style="color: Red">
                                                            </div>
                                                            <tr>
                                                                <td>
                                                                    <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <asp:Button ID="btnOk" runat="server" Text="Ok" CssClass="buttonnew-blue"
                                                OnClick="btnOk_Click" />
                                                            <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue"
                                                                OnClick="btnClose_Click" />
                                                        </p>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkInactive" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_InfoAdmin" runat="server" DropShadow="false" PopupControlID="pnlInactive"
                                            TargetControlID="lnkInactive" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="PnlForgotPwd" runat="server" Style="display: none"
                                            DefaultButton="btnSubmit1">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">Forgot Password</h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSubmit1" runat="server" Text="Submit" CssClass="buttonnew-blue"
                                                                    OnClick="btnSubmit1_Click" />
                                                                <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset" style="padding: 20px">
                                                        <p>
                                                            <div id="dvError1" runat="server" style="color: Red">
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <label><small>Enter Email:</small></label>
                                                            <asp:TextBox ID="txtEmail1" runat="server" class="emaildouble" placeholder="Email"></asp:TextBox>
                                                        </p>
                                                        <p>
                                                            <label><small>Your password will be mailed to the above email id.</small></label>
                                                        </p>
                                                        <p>
                                                        </p>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkPwd" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_ForPwd" runat="server" DropShadow="false" PopupControlID="PnlForgotPwd"
                                            TargetControlID="lnkPwd" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlUserOrganization" runat="server" Style="display: none;">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td>
                                                                <h2 class="pophead">Register
                                                                </h2>
                                                            </td>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="btnPopClose" runat="server" Text="Close" CssClass="buttonnew-blue" /></td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div>
                                                        <table class="tab" width="99%">
                                                            <tr>
                                                                <td width="33%"><span class="regicon">
                                                                    <a href="UsersReg.aspx" onclick="showProgress();" class="reganc">
                                                                        <img src="images/Registration/user.png" alt="User" />
                                                                        <br />
                                                                        User
                                                                    </a></span>
                                                                </td>
                                                                <td width="33%"><span class="regicon">
                                                                    <a href="CreateOrganization.aspx" onclick="showProgress();" class="reganc">
                                                                        <img src="images/Registration/organization.png" alt="User" />
                                                                        <br />
                                                                        Organization
                                                                    </a></span>
                                                                </td>
                                                                <td width="33%"><span class="regicon">
                                                                    <a href="Quotations/VendBillTo.aspx" onclick="showProgress();" class="reganc">
                                                                        <img src="images/Registration/shop.png" alt="User" />
                                                                        <br />
                                                                        VENDOR
                                                                    </a></span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUserOrg" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Registration" runat="server" DropShadow="false" CancelControlID="btnPopClose"
                                            PopupControlID="pnlUserOrganization" TargetControlID="lnkUserOrg" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                    </div>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
        <uc5:footer ID="footer" runat="server" />
    </form>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script type="text/javascript" src="js/alert.js"></script>
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();

        function redirectPage() {
            window.location = 'Login.aspx';
        }

        function openRegDialog() {
            $find('popup_Registration').show();
            return false;
        }

    </script>
</body>
</html>
