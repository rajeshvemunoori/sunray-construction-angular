<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AttImage.aspx.cs" Inherits="AttImage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ApproveIt - Attachment</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link rel="stylesheet" media="screen" href="css/buttons.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div style="padding: 30px">
            <asp:Image ID="imgAtt" runat="server" />
            <br />
            <br />
            <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" />
            <%--<asp:Button ID="btnRotateLeft" runat="server" Text="Rotate Left" CssClass="buttonnew-blue" OnClick="btnRotateLeft_Click" />
            <asp:Button ID="btnRotateRight" runat="server" Text="Rotate Right" CssClass="buttonnew-blue" OnClick="btnRotateRight_Click" />--%>
            <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
        </div>
    </form>
</body>
</html>
