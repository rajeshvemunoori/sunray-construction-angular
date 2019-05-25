<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>ApproveIt - Login</title>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <!-- Bootstrap -->
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="latestdesign/css/animate.css" rel="stylesheet">
    <link href="latestdesign/css/approveiti2.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        html {
            background: url(latestdesign/img/BG.png) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }
    </style>
</head>
<body>
    <form id="form1" method="post" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <header>
            <img class="applogo" src="latestdesign/img/approveIt_logo.png">
            <div class="head">
            </div>
        </header>
        <div>
            <section>
                <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                </asp:Timer>
                <%--<asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                    <ProgressTemplate>
                        <div id="overlay">
                            <div id="modalprogress">
                                <img src="images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>--%>
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                        <asp:PostBackTrigger ControlID="btnSubmit" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <asp:Panel ID="p" runat="server" DefaultButton="btnSubmit">
                            <div class="container login-container absolute-center">
                                <div class="row">
                                    <div class="col-md-8 col-md-offset-2 login-form">
                                        <h3 class="form-header-txt">LOGIN</h3>
                                        <div class="login-block-setting">
                                            <div id="dvError" runat="server" style="color: Red">
                                            </div>
                                            <div class="form-group">
                                                <asp:TextBox ID="txtEmail" runat="server" class="form-control form-rounded" placeholder="Your Email *"></asp:TextBox>
                                            </div>
                                            <div class="form-group">
                                                <asp:TextBox ID="txtPassword" TextMode="Password" runat="server" class="form-control form-rounded" placeholder="Your Password *"></asp:TextBox>
                                            </div>
                                            <div class="form-group">
                                                <asp:Button ID="lnkRegisterBtn" runat="server" Text="Sign Up" class="btnSubmit"></asp:Button>
                                                <asp:Button ID="btnSubmit" runat="server" Text="Sign in" class="btnSignup" OnClick="btnSubmit_Click" />
                                            </div>
                                            <div class="form-group">
                                              <%--  <asp:CheckBox ID="chkRemember" runat="server" name="remember" class="styled-checkbox"></asp:CheckBox>
                                                <label for="remember">Remember me</label>--%>
                                                 <div class="checkbox col-md-6">
                                                    <label>
                                                      <input type="checkbox" ID="chkRemember" runat="server" />
                                                      <i class="input-helper"></i>
                                                      <span>Remember me</span>
                                                    </label>
                                                  </div>   
                                                <div class="pull-right forgot-password-div-setting col-md-6 text-right">
                                                    <asp:LinkButton ID="lnkpwdBtn" runat="server" OnClick="Pwd_Click"
                                                        Text="Forgot your password?" class="ForgetPwd  color-green"></asp:LinkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <%--<asp:LinkButton ID="lnkRegisterBtn" runat="server"
                                                                        Text="Sign Up"></asp:LinkButton>--%>
                                </div>
                            </div>
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
                            <div class="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="margin-top: 15%;">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="H1">Contact Admin</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label class="form-label" for="pwd">Your account is inactive. Please comment and send it to your administrator.</label>
                                            </div>
                                            <div id="dvErrorc" runat="server" style="color: Red">
                                            </div>
                                            <div class="form-group">
                                                <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <asp:Button ID="btnOk" runat="server" Text="Ok" class="btn btn-warning"
                                                OnClick="btnOk_Click" />
                                            <asp:Button ID="btnClose" runat="server" Text="Close" class="btn btn-success"
                                                OnClick="btnClose_Click" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkInactive" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_InfoAdmin" runat="server" DropShadow="false" PopupControlID="pnlInactive"
                            TargetControlID="lnkInactive" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="PnlForgotPwd" runat="server" Style="display: none"
                            DefaultButton="btnSubmit1">
                            <div id="forgotpswd" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="margin-top: 15%;">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>
                                                <div id="dvError1" runat="server" style="color: Red">
                                                </div>
                                            </p>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label class="form-label">Enter Email:</label>
                                                    <asp:TextBox ID="txtEmail1" runat="server" class="form-control form-rounded" placeholder="Email"></asp:TextBox>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label" for="pwd">Your password will be mailed to the above email id.</label>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <asp:Button ID="btnSubmit1" runat="server" Text="Submit" class="btn btn-success"
                                                    OnClick="btnSubmit1_Click" />
                                                <asp:Button ID="btnCancel" runat="server" Text="Close" class="btn btn-warning" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </asp:Panel>
                        <asp:LinkButton ID="lnkPwd" runat="server"></asp:LinkButton>
                        <cc1:ModalPopupExtender ID="popup_ForPwd" runat="server" PopupControlID="PnlForgotPwd"
                            TargetControlID="lnkPwd" BackgroundCssClass="modalBackground">
                        </cc1:ModalPopupExtender>
                        <asp:Panel ID="pnlUserOrganization" runat="server" Style="display: none;">
                            <div id="signuphere" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="H2">Signup </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            </button>
                                        </div>
                                        <div class="modal-body">

                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="block-setting block1">
                                                        <div class="icon-block"><i class="fa fa-user fa-2x" ></i></div>
                                                        <div class="text-block"><a href="UsersReg.aspx">USER </a></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                     <div class="block-setting block2">
                                                        <div class="icon-block"><i class="fa fa-sitemap fa-2x" ></i></div>
                                                        <div class="text-block"><a href="CreateOrganization.aspx">ORGANIZATION </a></div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="block-setting block3">
                                                        <div class="icon-block"><i class="fa fa-shopping-bag fa-2x" ></i></div>
                                                        <div class="text-block"><a href="Quotations/VendBillTo.aspx">VENDOR </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                        <div class="modal-footer">
                                            <asp:Button ID="btnPopClose" runat="server" Text="Close" class="btn btn-warning" /></td>        
                                        </div>
                                    </div>
                                </div>
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
        <footer id="footer" class="row">
            <div class="container text-center">
                <span class="fr">&copy; 2018. All rights reserved. </span><strong>Xtramile Soft</strong> | ApproveIt        
            </div>
        </footer>
    </form>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <%--<script src="js/jquery.tools.min.js"></script>--%>
    <script src="js/jquery.ui.min.js"></script>
    <%--<script src="js/global.js"></script>--%>
    <%--<script type="text/javascript" src="js/alert.js"></script>--%>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/lazyload.min.js"></script>
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();

        $(document).ready(function () {

            $('.burger').click(function () {
                $('header').toggleClass('clicked');
            });

            $('nav ul li').click(function () {
                $('nav ul li').removeClass('selected');
                $('nav ul li').addClass('notselected');
                $(this).toggleClass('selected');
                $(this).removeClass('notselected');
            });

        });
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
