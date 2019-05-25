<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DashboardFrame.aspx.cs" Inherits="DashboardFrame" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<style>
    /*AJAX loader*/
    #overlay
    {
        /*position: fixed;
        z-index: 99;
        top: 0px;
        left: 0px;
        background-color: #f8f8f8;
        width: 100%;
        height: 100%;
        filter: Alpha(Opacity=95);
        opacity: 0.95;
        -moz-opacity: 0.95;
        background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );*/
        position: fixed;
        z-index: 999999999;
        top: 0px;
        left: 0px;
        background-color: #fff;
        width: 100%;
        height: 100%;
        filter: Alpha(Opacity=65);
        opacity: 0.65;
        -moz-opacity: 0.65;
    }

    #theprogress
    {
        /*background-color: #fff;*/
        /*background: rgb(255, 255, 255);
        border: 1px solid #ccc;
        padding: 10px;
        width: 300px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        filter: Alpha(Opacity=100);
        opacity: 1;
        -moz-opacity: 1;
        font-family: Verdana;
        font-weight: normal;*/
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        width: 300px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        filter: Alpha(Opacity=100);
        opacity: 1;
        -moz-opacity: 1;
        font-family: Verdana;
        font-weight: normal;
    }

    #modalprogress
    {
        position: absolute;
        z-index: 1000;
        top: 45%;
        left: 60%;
        margin: -11px 0 0 -150px;
        width: 130px;
        /*background-color: White;
    border-radius: 10px;*/
        filter: alpha(opacity=100);
        opacity: 1;
        -moz-opacity: 1;
    }
    /*AJAX loader*/
</style>
<form runat="server">
    <asp:hiddenfield id="hdnExpType" runat="server" />
    <div id="lnk" runat="server" style="display: none; padding: 3px; width: 3%">
        <%if (hdnExpType.Value == "PO")
          { %>
        <a href="DashboardFrame.aspx?e=po" onclick="document.getElementById('overlay').style.display = 'block';"
            title="Back">
            <img src="images/back_2.png" /></a>
        <%}
          else
          {%>
        <a href="DashboardFrame.aspx?e=er" onclick="document.getElementById('overlay').style.display = 'block';"
            title="Back">
            <img src="images/back_2.png" /></a>
        <%}%>
    </div>
    <asp:literal id="lt1" runat="server"></asp:literal>
    <div id="overlay" style="display: none" runat="server">
        <div id="modalprogress">
            <img src="images/Loaders/image_855859.gif" />
        </div>
    </div>
</form>
<script type='text/javascript'>
    function LoadData(year, data) {
        document.getElementById('overlay').style.display = "block";
        if (document.getElementById('hdnExpType').value == "PO")
            window.location = "DashboardFrame.aspx?e=po&typ=2&dt=" + data + "&yr=" + year;
        else
            window.location = "DashboardFrame.aspx?e=er&typ=2&dt=" + data + "&yr=" + year;
    }

    function exportChartToExcel(type, year, quarter, month, orgid, compcode, email, name) {
        ret = confirm("You want to download more details related to this chart?");
        if (ret)
            window.location = "DownloadFile.aspx?typ=22&it=" + type + "&yr=" + year + "&qt=" + quarter + "&mn=" + month + "&oid=" + orgid + "&cc=" + compcode + "&em=" + email + "&nm=" + name.replace("&", "`");
        else
            return false;
    }
</script>
