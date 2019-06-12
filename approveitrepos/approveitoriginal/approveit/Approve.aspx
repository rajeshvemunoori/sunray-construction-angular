<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Approve.aspx.cs" Inherits="Approve" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title></title>
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function redirectPage() {
            window.location = 'Login.aspx';
        }
    </script>
    <style>
        label {
            /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
            font-weight: normal;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="wrapper">
            <header>
            <h1 class="grid_1">
                ApproveIt
            </h1>
        </header>
            <div class="login-box main-content">
                <header>
                <h1>
                    <label>
                        Organization <br /><br />Approval</label>
                </h1><br />
            </header>
                <section>
                <div id="dvMsg" runat="server">
                    <label>
                        Approved</label>
                </div>
            </section>
            </div>
        </div>
    </form>
</body>
</html>
