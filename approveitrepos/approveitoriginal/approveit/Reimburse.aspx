<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Reimburse.aspx.cs" Inherits="Reimburse" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">

        (function () {

            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {

                document.createElement(html5elmeents[i]);

            }

        }

  )();

    </script>
    <title>ApproveIt - Reimburse</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css"/>
    <script src="js/Validation.js"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/DateSetup.js"></script>
    <script type="text/javascript">

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function refreshNotes() {
            window.location = window.location;
        }

        function DoOnAjaxPostback() {
            setupDatePicker();
        }

        function refreshUsers() {
            $(".btnRefresh").click();
        }

        function reimbtType() {
            document.getElementById('dvReimError').innerHTML = '';
            var type = document.getElementById('ddlPayMode').value;
            if (type == 'Cheque')
                document.getElementById('Cheque1').style.display = "block";
            else
                document.getElementById('Cheque1').style.display = "none";
        }

    </script>
    <style>
        label
        {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em
            {
                font-weight: bold;
            }

        .lbl
        {
            text-align: right;
        }

        #gvReimbursejEsCoOl_headerDiv div table tbody tr th
        {
            height: 30px;
            background-image: url('img/th.png');
            background-repeat: no-repeat;
            color: white;
            text-shadow: #012b4d 2px 2px 2px;
            text-align: center;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            font-weight: normal;
        }

        #gvReimburse tbody tr td
        {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
        }

        #gvReimbursejEsCoOl_mainDiv
        {
            width: 500px;
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvReimburse TR TD, #gvReimburse TR TH, #gvReimburse TR TH div, #gvReimburse TR TD div
        {
            overflow: visible;
        }

        .tab td
        {
            padding: 5px;
            vertical-align: top;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position:fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <asp:ScriptManager ID="ScriptManager2" runat="server">
        </asp:ScriptManager>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server"/>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="padding-top: 0px;">
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
                                <div class="main-content" style="min-height: 560px; width: 565px">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="82%">
                                                    <h2>Reimburse
                                                    </h2>
                                                </td>
                                                <td width="28%">
                                                    <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="SaveReimburse" />&nbsp;&nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <b>
                                            <div id="dvEr1" runat="server">
                                            </div>
                                        </b>
                                        <div class="divfieldset" style="height: 530px">
                                            <div class="grid_6" style="margin-left: 42px">
                                                <div id="dvReimbinv" runat="server">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvReimburse" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                    Width="300px" Height="200px" OnRowDataBound="gvReimburse_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="PayModes" HeaderStyle-Width="198px" ControlStyle-Width="198px">
                                                                            <ItemTemplate>
                                                                                <%#Eval("payMode")%>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Amount">
                                                                            <ItemTemplate>
                                                                                <%#Eval("totalAmount")%>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px"><label>No data to display.</label></div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <br />
                                                <table>
                                                    <tr>
                                                        <td class="lbl">
                                                            <small>
                                                                <label>
                                                                    <b>CashAdvance:</b>
                                                                </label>
                                                            </small>
                                                        </td>
                                                        <td>
                                                            <asp:Label ID="Label1" runat="server">&nbsp;&nbsp;&nbsp;<%=Session["cashAdv"]%></asp:Label>
                                                        </td>
                                                        <td class="lbl">
                                                            <small>
                                                                <label>
                                                                    &nbsp;&nbsp;&nbsp;<b> ReqID:</b>
                                                                </label>
                                                            </small>
                                                            <td>
                                                                <asp:Label ID="Label2" runat="server">&nbsp;&nbsp;<%=Session["ReimbReqID"]%></asp:Label>
                                                            </td>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <br />
                                                <div id="dvReimError" runat="server" style="color: Red; font-weight: bold">
                                                </div>
                                                <table width="50%" class="tab">
                                                    <tr>
                                                        <td style="text-align: right">
                                                            <small>
                                                                <label>
                                                                    Reimburse Type:</label></small>
                                                        </td>
                                                        <td style="text-align: left">
                                                            <asp:DropDownList ID="ddlPayMode" runat="server" OnChange="javascript:reimbtType();" Width="130px">
                                                                <asp:ListItem Value="Cheque" Text="Cheque"></asp:ListItem>
                                                                <asp:ListItem Value="Cash" Text="Cash"></asp:ListItem>
                                                            </asp:DropDownList>
                                                            <asp:HiddenField ID="hdnExpAmount" runat="server" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>Amount:
                                                                </label>
                                                            </small>
                                                        </td>
                                                        <td style="text-align: left">
                                                            <asp:TextBox runat="server" ID="txAmount" />
                                                        </td>
                                                    </tr>
                                                    <tr>
<%--                                                        <td style="text-align: right">
                                                            <small>
                                                                <label>
                                                                    <em>*</em>Description:
                                                                </label>
                                                            </small>
                                                        </td>
                                                        <td style="text-align: left">
                                                            <asp:TextBox runat="server" ID="txtDesc" />
                                                        </td>
                                                    </tr>--%>
                                                    <tr>
                                                        <td colspan="2">
                                                            <div id="Cheque1" runat="server">
                                                                <table width="108%">
                                                                    <tr>
                                                                        <td style="text-align: right">
                                                                            <small>
                                                                                <label>
                                                                                    <em>*</em>Cheque:
                                                                                </label>
                                                                            </small>
                                                                        </td>
                                                                        <td style="text-align: left">
                                                                            <asp:TextBox runat="server" ID="txtchqNO" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="text-align: right">
                                                                            <small>
                                                                                <label>
                                                                                    <em>*</em>Cheque Date:
                                                                                </label>
                                                                            </small>
                                                                        </td>
                                                                        <td style="text-align: left">
                                                                            <asp:TextBox runat="server" ID="txtChqDate" class="date" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <div id="dvBankDetails" runat="server">
                                                                                <table width="155%">
                                                                                    <tr>
                                                                                        <td style="text-align: right">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Bank:
                                                                                                </label>
                                                                                            </small>
                                                                                        </td>
                                                                                        <td style="text-align: left">
                                                                                            <asp:TextBox runat="server" ID="txtBank" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="text-align: right">
                                                                            <small>
                                                                                <label>
                                                                                    <em>*</em>Payable To:
                                                                                </label>
                                                                            </small>
                                                                        </td>
                                                                        <td style="text-align: left">
                                                                            <asp:TextBox runat="server" ID="txtPayableTo" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
            <!-- Main Section End -->
        </div>
        <div id="push">
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
