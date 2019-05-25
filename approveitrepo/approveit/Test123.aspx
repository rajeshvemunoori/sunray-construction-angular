<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Test123.aspx.cs" Inherits="Test123" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
    <title></title>

    <style>
    </style>
</head>
<body>
    <form runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
        <div id="dv" runat="server" />
        <br />
        <br />
        <br />
        <br />
        <input id="txt" type="text" />
        <input id="btn" type="submit" onclick="return weeks_between();" value="Submit" />

        <br />
        <br />
    </form>
    <script type="text/javascript">

        function weeks_between() {
            var date1 = new Date("02/01/2017");
            var date2 = new Date("03/05/2017");
            // The number of milliseconds in one week
            var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
            // Convert both dates to milliseconds
            var date1_ms = date1.getTime();
            var date2_ms = date2.getTime();
            // Calculate the difference in milliseconds
            var difference_ms = Math.abs(date1_ms - date2_ms);
            // Convert back to weeks and return hole weeks

            //document.write(date1);
            //document.write("<br />");
            //document.write("<br />");
            //document.write(date2);
            //document.write("<br />");
            //document.write("<br />");
            //document.write("Exact Number of Weeks: " + difference_ms / ONE_WEEK);
            //document.write("<br />");
            //document.write("Number of Weeks rounded: " + Math.round(difference_ms / ONE_WEEK));
            //document.write("<br />");
            //document.write("Number of Weeks Absolute: " + Math.abs(difference_ms / ONE_WEEK));
            //document.write("<br />");
            //document.write("Number of Weeks floor: " + Math.floor(difference_ms / ONE_WEEK));

            //document.write("<br />");
            //document.write("<br />");


            //document.write("Exact : " + 4.9514);
            //document.write("<br />");
            //document.write("Floor : " + Math.floor(4.9514));
            //document.write("<br />");
            //document.write("Absolute : " + Math.abs(4.9514));
            //document.write("<br />");
            //document.write("Rounded : " + Math.round(4.9514));

            if (!isNaN(document.getElementById("txt").value))
                alert("Number");
            else
                alert("Not a Number");

            document.getElementById("dv").innerHTML = "Number of Weeks div: " + Math.floor(difference_ms / ONE_WEEK);
            return false;
        }
    </script>
</body>
</html>
