<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PrefVend.aspx.cs" Inherits="Codes_PrefVend" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Preferred Vendors</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="../js/DateSetup.js" type="text/javascript"></script>
    <script src="../js/Ajax.js" type="text/javascript"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();

        function DoOnAjaxPostback() {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $(function () {
                $("#ddlCompCodes").ufd({ log: true });
            });
            $(function () {
                $("#ddlExpItemsMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendCurrency").ufd({ log: true });
            });
            $(function () {
                $("#ddlPayTerms").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendTitle").ufd({ log: true });
            });
            Filter(document.getElementById('txtKeywordSearch'));
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlCompCodes").ufd({ log: true });
            });
            $(function () {
                $("#ddlExpItemsMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendCurrency").ufd({ log: true });
            });
            $(function () {
                $("#ddlPayTerms").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendTitle").ufd({ log: true });
            });
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }
        function pageLoad() {
        }

        function DisplayErrMsg(color, msg, div) {
            document.getElementById(div).innerHTML = msg;
            document.getElementById(div).style.color = color;
        }

        function checkVendorEmail(email) {
            if (document.getElementById(email).value != '') {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(email).value)) {
                    return true;
                }
                else
                    DisplayErrMsg('Red', 'Please enter valid email.', 'dvErrMsg');
            }
        }

        function validateVendorPhone(phone) {
            if (document.getElementById(phone).value != '') {
                if (/^\(?([2-9][0-9][0-9])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.getElementById(phone).value)) {
                    return true;
                }
                else
                    DisplayErrMsg('Red', 'Please enter valid Phone.', 'dvErrMsg');
            }
        }

        function DisplayEmailOption() {
            if (document.getElementById('chkSysOrders').checked) {
                document.getElementById('dvSysOrders').style.display = "block";
                var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
                radioButtonlist[0].checked = true;
                document.getElementById('txtEmailFax').value = '';
            } else {
                document.getElementById('dvSysOrders').style.display = "none";
                document.getElementById('dvErrMsg').innerHTML = '';
            }
        }

        function ValidateVendEmail() {
            var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
            var email = document.getElementById('txtEmailFax').value;
            if (radioButtonlist[0].checked) {
                checkVendorEmail('txtEmailFax');
            }
            else {
                if (isNaN(email) || email == '') {
                    document.getElementById('dvErrMsg').style.color = "red";
                    document.getElementById('dvErrMsg').innerHTML = 'Please enter valid Fax number with only numerics.';
                    document.getElementById('txtEmailFax').focus();
                    return false;
                }
                if (email.length != 10) {
                    document.getElementById('dvErrMsg').style.color = "red";
                    document.getElementById('dvErrMsg').innerHTML = 'Please enter 10 digit Fax number.';
                    document.getElementById('txtEmailFax').focus();
                    return false;
                }
            }
        }

        function CheckForFile() {
            document.getElementById('dvUploadErr').style.color = "Red";
            if (document.getElementById('fupdVend').value == 0) {
                document.getElementById('dvUploadErr').innerHTML = "Please browse and select a file of type .xls or .xlsx";
                return false;
            }
            showProgress();
        }

        //Filter vendors grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvPrefVend');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.focus();
        }

        //Split City and Zip from City text field
        function splitCityZip(txt) {
            if (txt.value.indexOf("-") != -1) {
                var arr = txt.value.split("-");
                document.getElementById('txtVendZip').value = arr[1];
            }
            else
                document.getElementById('txtVendZip').value = "";
        }
        //Split City and Zip from City text field

        //Redirect to Sync screen
        function transferToSync() {
            showProgress();
            window.location.href = "../SyncAcc.aspx";
        }
        //Redirect to Sync screen

        //Get Vendor Number by passing Vendor name to db
        function getVendCode() {
            if (document.getElementById('txtVendName').value != '') {
                var url = '../Invoice.ashx?func=4&orgname=' + document.getElementById('txtVendName').value + '&typ=3';
                GetVendorNum(url, 'GetVendorNum');
            }
            else
                document.getElementById('lblVendNo').value = '';
        }
        //Get Vendor Number by passing Vendor name to db

        //import QB vendors
        function showConfirmationImportQBVend(sender, args) {
            $11('lblImpExpQBVendFileName').innerHTML = args.get_fileName();
        }
        //import QB vendors

        //display import QB vendors popup 
        function showImportPop() {
            $find('popImpExpQBVend').show();
        }
        //display import QB vendors popup 

    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
-->
    <script type="text/javascript">
        function AjaxEndRequestHandler(sender, args) {
            var p = sender._updatePanelClientIDs;
            if (p != null)
                for (var j = 0; j < p.length; j++) {
                    var scripts = $get(p[j]).getElementsByTagName("script");
                    // .text is necessary for IE.
                    for (var i = 0; i < scripts.length; i++) {
                        try {
                            eval(scripts[i].innerHTML || scripts[i].text);
                        } catch (e2) { }
                    }
                }
        }

        try { Sys.WebForms.PageRequestManager.getInstance().add_endRequest(AjaxEndRequestHandler); }
        catch (e) { }
    </script>
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .markItUp {
            width: 300px;
        }

        .lnk {
            color: White;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px;
            background-color: Black;
        }

        .subheader {
            color: #fff;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain td {
                padding: 2px;
            }

            .tablemain input {
                /*width: 135px;*/
            }

            .tablemain label {
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
                }

        .lbl {
            text-align: left;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvImpVendjEsCoOl_headerDiv, #gvPrefVendjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvImpVendjEsCoOl_headerDiv div table tbody tr th, #gvPrefVendjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvImpVend tbody tr td, #gvPrefVend tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvImpVendjEsCoOl_mainDiv, #gvPrefVendjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvPrefVend TR TD, #gvPrefVend TR TH, #gvPrefVend TR TH div, #gvPrefVend TR TD div {
            overflow: visible;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            border-radius: 3px 3px;
            font-family: Verdana,Arial,sans-serif;
            font-size: 1em;
            border: 1px solid #aaaaaa;
        }

        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            border-radius: 3px;
            border: 1px solid #aaaaaa;
        }

        .vendNum {
            font-size: 1.5em;
            font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold';
        }

        .fupdqbvend input {
            height: 23px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
                        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
                        </cc1:ToolkitScriptManager>
                        <script type="text/javascript">
                            var prm = Sys.WebForms.PageRequestManager.getInstance();
                            prm.add_initializeRequest(InitializeRequest);
                            prm.add_endRequest(EndRequest);
                            function InitializeRequest(sender, args) {
                            }
                            function EndRequest(sender, args) {
                            }
                        </script>
                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="../images/Loaders/image_855859.gif" />
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
                                <asp:PostBackTrigger ControlID="btnDisplayData" />
                                <asp:PostBackTrigger ControlID="lnkExportQBVend" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="30%">
                                                    <hgroup>
                                                        <h2>Vendors
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="70%" align="right">
                                                    <asp:Button ID="lnkAddNewVend" OnClick="AddNewVend" runat="server" Text="Add Preferred Vendor" CssClass="buttonnew-blue"></asp:Button>
                                                    <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="buttonnew-blue" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table style="width: 100%;">
                                                <tr>
                                                    <td colspan="2">
                                                        <div id="dvMainMsg" runat="server">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <small>
                                                            <label>
                                                                Company Code:</label></small>
                                                        &nbsp;&nbsp;
                                                    <asp:DropDownList ID="ddlCompCodes" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlCompCodes_SelectedIndexChanged" Width="200px">
                                                    </asp:DropDownList>
                                                        <%-- <small>
                                                            <label>
                                                                Organization:</label></small>&nbsp;&nbsp; <b>
                                                                    <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>--%>
                                                    </td>
                                                    <td align="right">
                                                        <asp:Button ID="btnImportExport" runat="server" Text="Import Vendors From QuickBooks" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnUpload" runat="server" Text="Import Vendors From Excel" CssClass="buttonnew-blue"
                                                            OnClick="btnUpload_Click" />
                                                        <asp:Panel ID="pnlImportHover" runat="server" Style="display: none">
                                                            <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 100%; min-width: 130px; height: 85px;">
                                                                <div style="padding: 5px;">
                                                                    <div class="divfieldset" style="background-color: white">
                                                                        <table style="width: 100%">
                                                                            <tr>
                                                                                <td style="text-align: center">
                                                                                    <label>
                                                                                        <asp:LinkButton ID="lnkImportQBVend" runat="server" Text="Import"></asp:LinkButton></label></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <hr />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="text-align: center">
                                                                                    <label>
                                                                                        <asp:LinkButton ID="lnkExportQBVend" runat="server" Text="Export" OnClick="lnkExportQBVendData_Click"></asp:LinkButton></label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </asp:Panel>
                                                        <cc1:HoverMenuExtender ID="hveImpVend" runat="server" TargetControlID="btnImportExport"
                                                            PopupControlID="pnlImportHover" PopupPosition="Bottom">
                                                        </cc1:HoverMenuExtender>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <%--<tr>
                                                    <td align="left" colspan="2">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>--%>
                                                <tr>
                                                    <td colspan="2">
                                                        <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="300px" placeholder="Type in vendor name to search.." />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <isx:CoolGridView ID="gvPrefVend" runat="server" AutoGenerateColumns="false" Width="70%"
                                                            Height="300px" GridLines="None"
                                                            OnRowDataBound="gvPrefVend_RowDataBound" OnRowCommand="gvPrefVend_RowCommand"
                                                            OnRowDeleting="gvPrefVend_RowDeleting">
                                                            <Columns>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkCityState" runat="server" Text="City" CommandArgument="CityState"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCity" runat="server" Text='<%#Eval("city")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkPrefVend" runat="server" Text="Vendor Name" CommandArgument="PreferredVendor"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblPrefVend" runat="server" Text='<%#Eval("PreferredVendor")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkIsPrefVend" runat="server" Text="Preferred Vendor" CommandArgument="isPreferVend"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <asp:CheckBox ID="chkIsPrefVend" runat="server" />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Action">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnkEditVendor" runat="server" ToolTip="View Vendor" CommandArgument="test"
                                                                            OnClick="EditVendor"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;
                                                                    <asp:LinkButton ID="lnkDeleteVendor" runat="server" ToolTip="Delete Vendor" CommandArgument='<%#Eval("PreferredVendor")  + "," + Eval("expenseItem") + "," +  Eval("vendorno") + "," +  Eval("city").ToString().Replace(",", "~") %>'
                                                                        CommandName="Delete">
                                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                        <asp:HiddenField ID="hdnExpItem" runat="server" Value='<%#Eval("expenseItem") %>' />
                                                                        <asp:HiddenField ID="hdnVendID" runat="server" Value='<%#Eval("vendorId") %>' />
                                                                        <asp:HiddenField ID="hdnStatus" runat="server" />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 350px">
                                                                    <label>
                                                                        No Preferred Vendors to display.</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                        <asp:HiddenField ID="hdnCityExt" runat="server" />
                                                        <asp:HiddenField ID="hdnPrefVendExt" runat="server" />
                                                        <asp:HiddenField ID="hdnExpItemExt" runat="server" />
                                                        <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                        <asp:HiddenField ID="hdnVendorID" runat="server" />
                                                        <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none" DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 850px; height: 450px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHVend" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnApprove" runat="server" Text="Approve" CssClass="buttonnew-blue" OnClick="btnApprove_Click" />
                                                                <asp:Button ID="btnReject" runat="server" Text="Reject" CssClass="buttonnew-blue" OnClick="btnReject_Click" />
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveVendor"></asp:Button>
                                                                <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="DeleteVendor" />
                                                                <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvErrMsg" runat="server" style="font-size: 1.15em; color: Red">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor No:</label></small><br />
                                                                                <asp:Label ID="lblVendNo" runat="server" CssClass="vendNum"></asp:Label>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        <em>*</em>Vendor Name:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendName" runat="server" onchange="getVendCode();"></asp:TextBox>
                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtVendName"
                                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetVendors" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                    CompletionListItemCssClass="listItem"
                                                                                    CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                </cc1:AutoCompleteExtender>
                                                                                <asp:HiddenField ID="hdnVendCode" runat="server" />
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Title:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlVendTitle" runat="server" Width="135px">
                                                                                    <asp:ListItem Value="0" Text="Please Select"></asp:ListItem>
                                                                                    <asp:ListItem Value="Mr." Text="Mr."></asp:ListItem>
                                                                                    <asp:ListItem Value="Mr." Text="Mrs."></asp:ListItem>
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        First Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendFirstName" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Middle Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendMidName" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Last Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendLastName" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Contact:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendContact" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Phone:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                                                                            </td>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Address1:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAddr1" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Address2:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAddr2" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Address3:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAddr3" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Country:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                        Width="135px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            State:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                        Width="135px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            City:</label></small><br />
                                                                    <asp:TextBox ID="txtCities" runat="server" onchange="javascript:splitCityZip(this);"></asp:TextBox>
                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                        CompletionListItemCssClass="listItem"
                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                    </cc1:AutoCompleteExtender>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            ZipCode:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendZip" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            URL:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtUrl" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Account#:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAccNum" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Pay Terms:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlPayTerms" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" Width="135px"></asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Balance:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendBalance" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Currency:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:DropDownList ID="ddlVendCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" Width="135px"></asp:DropDownList>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Tax Code:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendTaxCode" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Alt. Contact:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAltContact" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Alt. Phone:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendAltPhone" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Vendor Discount(%):
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtVendDisc" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            StartDate:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtStartDate" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            ExpiryDate:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtExpiryDate" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            PromoCode:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txtPromoCode" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            1099:
                                                                        </label>
                                                                    </small>
                                                                    <br />
                                                                    <asp:TextBox ID="txt1099" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <asp:CheckBox ID="chkIsPrefVend" runat="server" TextAlign="Right"></asp:CheckBox>
                                                                    <small>
                                                                        <label>
                                                                            Preferred Vendor</label></small>
                                                                </td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4" style="vertical-align: middle">
                                                                    <table width="30%">
                                                                        <tr>
                                                                            <td width="40%">
                                                                                <asp:CheckBox ID="chkSysOrders" runat="server" TextAlign="Right" onchange="DisplayEmailOption()" />
                                                                                <small>
                                                                                    <label>
                                                                                        Accept System Orders</label></small>
                                                                            </td>
                                                                            <td width="60%">
                                                                                <div id="dvSysOrders" runat="server" style="width: 50%">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:RadioButtonList ID="rblEmail" runat="server" RepeatDirection="Horizontal"
                                                                                                    Width="150px">
                                                                                                    <asp:ListItem>Email</asp:ListItem>
                                                                                                    <asp:ListItem>Fax</asp:ListItem>
                                                                                                </asp:RadioButtonList>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEmailFax" runat="server" onchange="ValidateVendEmail();"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="subheader">
                                                                        <h4>Agent Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        <tr>
                                                            <td>
                                                                <table width="50%">
                                                                    <tr>
                                                                        <td class="lbl">
                                                                            <small>
                                                                                <label>
                                                                                    Agent:
                                                                                </label>
                                                                            </small>
                                                                            <br />
                                                                            <asp:TextBox ID="txtAgent" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td class="lbl">
                                                                            <small>
                                                                                <label>
                                                                                    Agent Name:
                                                                                </label>
                                                                            </small>
                                                                            <br />
                                                                            <asp:TextBox ID="txtAgentName" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td class="lbl">
                                                                            <small>
                                                                                <label>
                                                                                    Agent Phone:
                                                                                </label>
                                                                            </small>
                                                                            <br />
                                                                            <asp:TextBox ID="txtAgentPh" runat="server"></asp:TextBox>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddVendor" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddVendor" runat="server" DropShadow="false" PopupControlID="pnlAddVendor"
                                            TargetControlID="lnkAddVendor" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete these vendor details?</label>
                                                        </small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlUpload" runat="server" Style="display: none">
                                            <div id="Div1" class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td>
                                                                <h2 class="pophead">Import Vendors Data
                                                                </h2>
                                                            </td>
                                                            <td align="right">
                                                                <asp:Button ID="btnCancelUpload" runat="server" Text="Cancel" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvUploadErr" runat="server">
                                                        </div>
                                                        <br />
                                                        <div style="float: left">
                                                            <asp:FileUpload ID="fupdVend" runat="server" style="border: 1px solid #aaaaaa" Width="300px"/>
                                                        </div>
                                                        <div style="float: left; padding-left: 0.5em">
                                                            <a href="#" id="tooltip">
                                                                <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                <span><small>
                                                                    <label>File types allowd are .csv, .xls and .xlsx</label></small>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div id="dvDisplay" runat="server">
                                                            <asp:Button ID="btnDisplayData" runat="server" Text="Load Data" CssClass="buttonnew-blue" OnClick="btnDisplayData_Click" />
                                                            <a href="../DownloadFile.aspx?typ=9">Download Template</a>
                                                        </div>
                                                        <div id="dvUpload" runat="server">
                                                            <asp:Button ID="btnUploadVendors" runat="server" OnClick="UploadVendors" Text="Upload Vendors" CssClass="buttonnew-blue" />
                                                            <asp:Button ID="btnClearData" runat="server" Text="Clear Data" CssClass="buttonnew-blue" OnClick="btnClearData_Click" />
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div id="dvFailurMsg" runat="server">
                                                        </div>
                                                        <div>
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <%if (gvImpVend.Rows.Count > 0)
                                                                          { %>
                                                                        <div>
                                                                            <isx:CoolGridView ID="gvImpVend" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                                Width="1180px" Height="200px" CellPadding="30" CellSpacing="30">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderText="FailureMessage">
                                                                                        <ItemTemplate>
                                                                                            <span style="color: Red">
                                                                                                <label>
                                                                                                    <%#Eval("FailureMessage")%></span></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Name">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("VENDOR") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Name">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("FIRSTNAME") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Name">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("MIDDLENAME") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Name">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("LASTNAME") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Contact">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("VENDORCONTACT") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Phone">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("VENDORPHONE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Alt.Contact">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ALT#CONTACT") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Alt.Phone">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ALT#PHONE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Address1">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ADDRESS1") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Address2">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ADDRESS2") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Address3">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ADDRESS3") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="City">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("CITY") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="State">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("STATE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Country">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("COUNTRY") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ZipCode">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("ZIPCODE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="PromoCode">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("PROMOCODE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor Discount(%)">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("VENDORDISCOUNT") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Currency">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("CURRENCY") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="StartDate">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("STARTDATE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ExpiryDate">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("EXPIRYDATE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Email">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("EMAIL") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Fax">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("FAX") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="URL">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("URL") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Payterms">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("PAYTERMS") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="TaxCode">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("TAXCODE") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="1099">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("1099") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ShipAddress1">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("SHIPADDRESS1") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ShipAddress2">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("SHIPADDRESS2") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="ShipAddress3">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("SHIPADDRESS3") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Agent">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("AGENT") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Agent Name">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("AGENTNAME") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Agent Phone">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("AGENTPHONE ") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </isx:CoolGridView>
                                                                        </div>
                                                                        <%} %>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUpload" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popUpload" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                            TargetControlID="lnkUpload" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelUpload">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlNewAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div2" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnNewYes" runat="server" OnClick="CreateNew" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNoNewCreate" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RetainMainDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Vendor Added Sucessfully. Do you want to add one more Vendor?</label></small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkNewVend" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popNewAlert" runat="server" DropShadow="false" PopupControlID="pnlNewAlert"
                                            TargetControlID="lnkNewVend" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlImpExpQBVend" runat="server" Style="display: none">
                                            <div class="main-content" id="Div3" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 450px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Import/Export Vendors</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnImpExpQBVendClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="RetainMainDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvImpExpErr" runat="server"></div>
                                                        <div class="message info">
                                                            <label><em>*</em>This wizard allows you to integrate vendors data with Quick Books desktop version.</label>
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <table class="tablemain">
                                                                        <tr>
                                                                            <td width="30%">
                                                                                <cc1:AsyncFileUpload ID="fupImpExpQBVend" CompleteBackColor="White" runat="server" CssClass="fupdqbvend"
                                                                                    UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="lblImpExpQBVendThrobber" OnUploadedComplete="fupdQBVendors_UploadedComplete"
                                                                                    OnClientUploadComplete="showConfirmationImportQBVend" Style="float: left; border: 1px solid #aaaaaa" Width="300px"/>
                                                                                <div style="float: right; padding-left: 0.5em">
                                                                                    <a href="#" id="tooltip1">
                                                                                        <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                        <span><small>
                                                                                            <label>File types allowd are .csv, .xls and .xlsx</label></small>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="70%">
                                                                                <asp:Button ID="btnImpExpQBVendConfirm" runat="server" Text="Import" CssClass="buttonnew-blue"
                                                                                    OnClick="btnImpExpQBVendConfirm_Click" />
                                                                                <a href="../DownloadFile.aspx?typ=18">Click here</a> to download template.
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <asp:Label ID="lblImpExpQBVendFileName" runat="server"></asp:Label>
                                                                    <asp:Label ID="lblImpExpQBVendThrobber" runat="server" Style="display: none">
                                                                            <img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <cc1:ModalPopupExtender ID="popImpExpQBVend" runat="server" PopupControlID="pnlImpExpQBVend"
                                            CancelControlID="btnImpExpQBVendClose" DropShadow="false" BackgroundCssClass="modalBackground1" TargetControlID="lnkImportQBVend">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
                <div id="push">
                </div>
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
