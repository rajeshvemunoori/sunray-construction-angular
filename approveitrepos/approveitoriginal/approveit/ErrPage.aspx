<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ErrPage.aspx.cs" Inherits="ErrPage" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <title>ApproveIt - Error!</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <meta name="description" content="Login" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link rel="stylesheet" media="screen" href="css/buttons.css" />
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }
    </style>
</head>
<body class="login">
    <form id="form1" method="post" class="clearfix" runat="server">
        <div id="wrapper">
            <header style="position: fixed">
                <div class="logo">
                    <img src="images/approveIt_logo.png" alt="ApproveIt" width="200" />
                </div>
            </header>
            <div class="login-box main-content">
                <header>
                    <h2>Error!</h2>
                </header>
                <section>
                    <div>
                        <label>An unexpected error occured. Please contact your administrator.</label></div>
                    <br />
                    <div>
                        <label><a href="#" onclick="navPrevScreen();">Click here</a> to go to previous screen.</label></div>
                </section>
            </div>
        </div>
    </form>
    <script>
        function navPrevScreen() {
            history.back(-1);
        }
    </script>
</body>
</html>
