<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProcessRequest.aspx.cs" Inherits="ProcessRequest" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Process Request</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <script>
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();

        function redirectPage(typ) {
            if (parseInt(typ) == 0)
                window.location = 'APApproveReject.aspx';
            else
                window.location = 'MgrApproveReject.aspx';
        }

        function validateComments() {
            if (document.getElementById('txtComments').value == '') {
                document.getElementById('dvMsgError').style.color = "Red";
                document.getElementById('dvMsgError').innerHTML = '<b>Please provide comments to reject the request.</b>';
                return false;
            }
        }

        function navigateHome() {
            window.location.href = 'DashBoard.aspx';
        }
    </script>
    <style>
        label
        {
            font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';
            font-size: 1.4em;
            color: #555555;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="wrapper">
        <header>
            <h1 class="grid_1">
                Xpense&nbsp;Reporting&nbsp;
            </h1>
        </header>
        <div class="login-box main-content">
            <header>
                <h2>
                    Request Approval
                </h2>
            </header>
            <section>
                <div class="divfieldset">
                    <div id="dvMsg" runat="server" style="font-weight: bold">
                    </div>
                    <br />
                    <div id="dvComments" runat="server" style="display: none">
                        <div id="dvMsgError" style="color: Red">
                            <small><label>
                                Please provide comments</label></small></div>
                        <br />
                        <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine"></asp:TextBox>
                        <br />
                        <asp:Button ID="btnReject" runat="server" Text="Reject" CssClass="buttonnew-blue" OnClick="btnReject_Click" />&nbsp;&nbsp;&nbsp;
                        <asp:Button ID="btnCancel" runat="server" Text="Cancel" CssClass="buttonnew-blue" OnClick="NavigateHome" />
                        <asp:HiddenField ID="hdnEMail" runat="server" />
                        <asp:HiddenField ID="hdnReqID" runat="server" />
                        <asp:HiddenField ID="hdnUserIDReq" runat="server" />
                        <asp:HiddenField ID="hdnPreApproved" runat="server" />
                        <asp:HiddenField ID="hdnStatus" runat="server" />
                        <asp:HiddenField ID="hdnApproved" runat="server" />
                        <asp:HiddenField ID="hdnType" runat="server" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    </form>
</body>
</html>
