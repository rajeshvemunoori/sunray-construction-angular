<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Test.aspx.cs" Inherits="Test" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
    <title></title>
</head>
<body>
    <form runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
        <asp:Label ID="L4" runat="server" Text='<%# (Convert.ToDouble(Eval("Stock_Qty")) - Convert.ToDouble(Eval("Req_Qty"))).ToString("#.##") %>'></asp:Label>
        <div id="dv" runat="server"></div>
    </form>
    <script type="text/javascript">

    </script>
</body>
</html>
