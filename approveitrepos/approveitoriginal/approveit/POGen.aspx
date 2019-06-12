<%@ Page Language="C#" AutoEventWireup="true" CodeFile="POGen.aspx.cs" Inherits="POGen" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="keywords" Src="Controls/jobsitekeywords.ascx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - New Purchase Order</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />

    <script src="js/html5shiv.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/Ajax.js"></script>
    <script src="js/DateSetup.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        /////Alert when leaving the page
        //window.onbeforeunload = function () {
        //    hideProgress();            
        //    return 'Are you sure you want to leave?';
        //};
        /////Alert when leaving the page


        //Validations Begin

        function refreshNotes() {
            window.location = window.location;
        }

        $(document).ready(function () {
        });

        //function DoOnAjaxPostback() {
        //    setupDatePicker();
        //    $('#date').dateinput({
        //        format: 'mm/dd/yyyy',
        //        trigger: false
        //    });
        //    $(function () {
        //        $("#ddlBillTo").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlExpItem").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlManagerEmail").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlCopyPONum").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlType").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlItemCode").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlDepartment").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlCountry").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlRgnCode").ufd({ log: true });
        //    });
        //    $(function () {
        //        $("#ddlJobs").ufd({ log: true });
        //    });
        //}

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function pageLoad() {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $(function () {
                $("#ddlBillTo").ufd({ log: true });
            });
            $(function () {
                $("#ddlExpItem").ufd({ log: true });
            });
            $(function () {
                $("#ddlManagerEmail").ufd({ log: true });
            });
            $(function () {
                $("#ddlCopyPONum").ufd({ log: true });
            });
            $(function () {
                $("#ddlType").ufd({ log: true });
            });
            $(function () {
                $("#ddlItemCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDepartment").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlJobs").ufd({ log: true });
            });
            $(function () {
                $("#ddlPriceFlag").ufd({ log: true });
            });
        }

        function validateBudgetAmount1(id) {
            //   var reg = /^[+]?[1-9]*\.?[0-9]+([eE]-+]?[0-9]+)?$/;
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test($11(id).value) || $11(id).value == '') {
                return true;
            }
        }

        var x = 0;
        function CalcBudgetDetails() {
            if (!validateBudgetAmount1('txtQuantity')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for Quantity.";
            }
            else if (!validateBudgetAmount1('txtUnitPrice')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for UnitPrice.";
            }
            else if (!validateBudgetAmount1('txtShipCost')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for shippingCost.";
            }
            else {
                $11('dvPOErrMsg').innerHTML = "";
                var bal;
                var qnty = parseFloat($11('txtQuantity').value == '' ? '0' : $11('txtQuantity').value);
                var unitPrice = parseFloat($11('txtUnitPrice').value == '' ? '0' : $11('txtUnitPrice').value);
                var ShipCost = parseFloat($11('txtShipCost').value == '' ? '0' : $11('txtShipCost').value);
                var noTaxAmnt = (unitPrice * qnty);
                /*Calculate Discount and remove from amount based on checkbox checked*/
                var calDisc;
                if ($11('hdnVendDiscount').value == '')
                    calDisc = 0;
                else
                    calDisc = parseFloat($11('hdnVendDiscount').value) / 100;
                if ($11('chkDisc').checked) {
                    noTaxAmnt = noTaxAmnt - (noTaxAmnt * calDisc);
                    $11('txtDisc').disabled = false;
                }
                else
                    $11('txtDisc').disabled = true;

                /*Calculate Discount and remove from amount based on checkbox checked*/

                /*Calculate tax amount with tax percentage based on checkbox checked*/
                var calTax;
                var calTaxPercent;
                if ($11('chkCalTax').checked) {
                    if (x == 2)
                        x = 1;
                    calTaxPercent = parseFloat($11('hdnTax').value == '' ? 0 : $11('hdnTax').value);
                    $11('txtTaxPercent').disabled = false;
                    if (x == 2)
                        $11('txtTaxPercent').value = calTaxPercent;
                    calTax = parseFloat($11('txtTaxPercent').value == '' ? 0 : $11('txtTaxPercent').value) / 100;
                }
                else {
                    $11('txtTaxPercent').disabled = true;
                    calTax = 0;
                    $11('txtTaxPercent').value = parseFloat($11('hdnTax').value == '' ? 0 : $11('hdnTax').value);
                    x = 2;
                }
                /*Calculate tax amount with tax percentage based on checkbox checked*/

                /*Include tax in line amount*/
                var amnt = (noTaxAmnt * calTax) + (noTaxAmnt);
                /*Include tax in line amount*/

                //                $11('txttax').value = parseFloat(noTaxAmnt * calTax).toFixed(4);
                var newnumber = Math.round((parseFloat(noTaxAmnt * calTax)) * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txttax').value = newnumber;
                var newpo = Math.round((parseFloat(amnt + ShipCost)) * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txtPoAmount').value = newpo;

                /*Calculate Balance After PO*/
                if (parseFloat($11('hdnPORowTotAmnt').value == '' ? 0 : $11('hdnPORowTotAmnt').value) > 0) {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - (parseFloat($11('hdnPORowTotAmnt').value) + parseFloat($11('txtPoAmount').value));
                }
                else {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - parseFloat($11('txtPoAmount').value == '' ? 0 : $11('txtPoAmount').value);
                }
                $11('txtBalAfterPO').value = parseFloat(bal).toFixed(4);
                /*Calculate Balance After PO*/
            }
        }

        function EmailOption() {
            if (document.getElementById('chkEmail').checked) {
                document.getElementById('dvEmail').style.display = "block";
            }
            else {
                document.getElementById('dvEmail').style.display = "none";
            }
        }

        function showShipAddress(type) {
            if (type == '1') {
                $11('lblCompAddr').innerHTML = 'Shipping Address';
                $11('dvshipAddr').style.display = "block";
                $11('dvBillAddr').style.display = "none";
            }
            else {
                $11('lblCompAddr').innerHTML = 'Billing Address';
                $11('dvBillAddr').style.display = "block";
                $11('dvshipAddr').style.display = "none";
            }
            $find('popShipAddr').show();
        }

        function ShowBiggerImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "";
        }

        function showDeleteButton() {
            $11('dvAtt').innerHTML = '';
            var total = 0;
            var grid = $11('<%=gvAttchmnts.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($11(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                    total++;
                }
            }
            if (parseInt(total) > 0)
                $11("btnDeleteSelected").style.display = "block";
            else
                $11("btnDeleteSelected").style.display = "none";
        }

        function showConfirmation(sender, args) {
            $11('lblFileName').innerHTML = args.get_fileName();
            //$11('dvAtt').style.color = "Green";
            //$11('dvAtt').innerHTML = "File attached successfully.";
            //$11('btnAttach').value = '   Attachments(1)';
        }

        function showConfirmationUploadPO(sender, args) {
            $11('lblUploadPOFileName').innerHTML = args.get_fileName();
        }

        //Split City and Zip from City text field
        function splitCityZip(txt) {
            var arr = txt.value.split("-");
            document.getElementById('txtVendZip').value = arr[1];
        }
        //Split City and Zip from City text field

        function DisplayEmailOption() {
            if (document.getElementById('chkSysOrders').checked) {
                document.getElementById('dvSysOrders').style.display = "block";
                var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
                radioButtonlist[0].checked = true;
                document.getElementById('txtEmailFax').value = '';
            } else
                document.getElementById('dvSysOrders').style.display = "none";
        }

        //Get Vendor Number by passing Vendor name to db
        function getVendCode() {
            if (document.getElementById('txtVendName').value != '') {
                var url = 'Invoice.ashx?func=4&orgname=' + document.getElementById('txtVendName').value + '&typ=3';
                GetVendorNum(url, 'GetVendorNum');
            }
            else
                document.getElementById('lblVendNo').value = '';
        }
        //Get Vendor Number by passing Vendor name to db

        //Display selected item inventory details
        function showItemInventory() {
            $find('popItemInventory').show();
            return false;
        }
        //Display selected item inventory details

        //Show expand/collapse buttons
        $("[src*=down]").live("click", function () {
            $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>")
            $(this).attr("src", "images/uparrow.jpg");
        });
        $("[src*=up]").live("click", function () {
            $(this).attr("src", "images/downarrow.jpg");
            $(this).closest("tr").next().remove();
        });

        //Show expand/collapse buttons

        //Show Item Purchase history
        function GetItemPurchHistory(id) {
            var url = 'Invoice.ashx?func=14&item=' + document.getElementById('ddlItemCode').value + '&up=' + id.value;
            FetchItemPurchHist(url, 'FetchItemPurchHist');
        }
        //Show Item Purchase history

    </script>
    <script>
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
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground1 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 3000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .modalBackground2 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 5000000 !important;*/
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
            color: #0D4F8B;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        .rbl input[type="radio"] {
            margin-left: -100%;
            margin-right: -40%;
        }

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
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

            .tablemain label em {
                font-weight: bold;
            }


        .tablemaincc td {
            padding: 5px;
        }

        .lbl {
            text-align: left;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }
        /*gvUploadPOLines*/

        #gvPOrderjEsCoOl_headerDiv, #gvAttchmntsjEsCoOl_headerDiv,
        #gvItemPurchHistjEsCoOl_headerDiv, #gvUploadPOLinesjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvPOrderjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th,
            #gvItemPurchHistjEsCoOl_headerDiv div table tbody tr th, #gvUploadPOLinesjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvPOrder tbody tr td, #gvAttchmnts tbody tr td, #gvItemInventory tbody tr td, #gvItemPurchHist tbody tr td, #gvUploadPOLines tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvPOrderjEsCoOl_mainDiv, #gvAttchmntsjEsCoOl_mainDiv, #gvItemInventoryjEsCoOl_mainDiv, #gvItemPurchHistjEsCoOl_mainDiv,
        #gvUploadPOLinesjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvItemInventory TR TD, #gvItemInventory TR TH, #gvItemInventory TR TH div, #gvItemInventory TR TD div,
        #gvItemPurchHist TR TD, #gvItemPurchHist TR TH, #gvItemPurchHist TR TH div, #gvItemPurchHist TR TD div,
        #gvUploadPOLines TR TD, #gvUploadPOLines TR TH, #gvUploadPOLines TR TH div, #gvUploadPOLines TR TD div {
            overflow: visible;
        }

        .cell {
            vertical-align: top;
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

        .fupdpo input {
            height: 23px;
        }

        .tbagr td {
            padding: 10px;
        }

        .tabqtybrk tr th {
            background-color: #3B6AA0;
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        .tabqtybrk tr td {
            text-align: right;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
            padding: 10px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
        </cc1:ToolkitScriptManager>
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
                    <section class="main-section grid_7" style="padding-top: 0px">
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
                                <asp:PostBackTrigger ControlID="gvAttchmnts" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content grid_4" style="width: 115%; margin-left: 0;">
                                    <header>
                                        <h2>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%">New Purchase Order
                                                    </td>
                                                    <td width="50%" style="text-align: right">
                                                        <asp:Button ID="btnHSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                                        <asp:Button ID="btnHSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                                        <asp:Button ID="btnHReset" runat="server" Text="Reset" CssClass="buttonnew-blue" OnClick="btnReset_Click"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </h2>
                                    </header>
                                    <section>
                                        <div id="dvinv" visible="true">
                                            <div>
                                                <asp:Panel ID="p" runat="server">
                                                    <div class="divfieldset">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="4">
                                                                    <div id="dvError" runat="server" style="color: Red; font-weight: bold">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><small>
                                                                    <label>RequestID:</label></small>
                                                                    <span style="font-size: 1.5em; font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold'">
                                                                        <asp:Label ID="lblPONo" runat="server">
                                                                        </asp:Label></span>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Expense Type:
                                                                        </label>
                                                                    </small>
                                                                    <asp:DropDownList ID="ddlType" runat="server" onchange="rblSelectedValue('pref');"
                                                                        Width="200px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Company Code:
                                                                        </label>
                                                                    </small>
                                                                    <i>
                                                                        <label><%=Session["CompCode"] %></label></i>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Shipping Address:
                                                                                    </label>
                                                                                </small>
                                                                                <i>
                                                                                    <label>
                                                                                        <asp:Label ID="lblShipAddr" runat="server"></asp:Label>
                                                                                    </label>
                                                                                </i>
                                                                                <cc1:HoverMenuExtender ID="hveShipAddr" runat="server" TargetControlID="btnShipAddress" PopupControlID="pnlShipAddr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                <asp:Panel ID="pnlShipAddr" runat="server" Style="display: none">
                                                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                        <div class="divfieldset">
                                                                                            <div id="dvshipAddr">
                                                                                                <table class="tablemaincc" width="100%">
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Company Name:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipCompName" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Address1:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipAddr1" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Address2:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipAddr2" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>City:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipCity" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>State:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipState" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Country:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipCountry" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>ZipCode:</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblShipZipCode" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </asp:Panel>
                                                                                <asp:Button ID="btnShipAddress" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Billing Address:
                                                                                    </label>
                                                                                </small>
                                                                                <i>
                                                                                    <label>
                                                                                        <asp:Label ID="lblBillAddr" runat="server"></asp:Label>
                                                                                    </label>
                                                                                </i>
                                                                                <cc1:HoverMenuExtender ID="hveBillAddr" runat="server" TargetControlID="btnBillAddr" PopupControlID="pnlBillAddr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                <asp:Panel ID="pnlBillAddr" runat="server" Style="display: none">
                                                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                        <div class="divfieldset">
                                                                                            <div id="dvBillAddr">
                                                                                                <table class="tablemaincc" width="100%">
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Company Name:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillCompName" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Address1:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillAddr1" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Address2:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillAddr2" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>City:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillCity" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>State:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillState" runat="server"></asp:Label></label></i></td>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>Country:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillCountry" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="right"><b><small>
                                                                                                            <label>ZipCode:&nbsp;</label></small></b></td>
                                                                                                        <td><i>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblBillZipCode" runat="server"></asp:Label></label></i></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </asp:Panel>
                                                                                <asp:Button ID="btnBillAddr" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <tr>
                                                                        <td width="18%" align="left">
                                                                            <small>
                                                                                <label style="text-align: center">
                                                                                    <b><em>*</em></b>Manager Email</label></small><br />
                                                                            <asp:DropDownList ID="ddlManagerEmail" runat="server" Width="150px">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td width="12%" align="left">
                                                                            <small>
                                                                                <label style="text-align: center">
                                                                                    <b><em>*</em></b>Start Date</label></small><br />
                                                                            <asp:TextBox ID="txtPOTripStrtDate" runat="server" class="date" Width="80px"></asp:TextBox>
                                                                            <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                            <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                            <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                            <asp:HiddenField ID="ReqID" runat="server" />
                                                                            <asp:HiddenField ID="hdnddlType" runat="server" />
                                                                            <asp:HiddenField ID="hdnYear" runat="server" />
                                                                            <asp:HiddenField ID="hdnTax" runat="server" />
                                                                            <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                            <asp:HiddenField ID="hdnQBAcctID" runat="server" />
                                                                            <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                                            <asp:HiddenField ID="hdnQBItemID" runat="server" />
                                                                        </td>
                                                                        <td width="21%" align="left">
                                                                            <small>
                                                                                <label style="text-align: center">
                                                                                    <b><em>*</em></b>Select Vendor</label></small><br />
                                                                            <asp:DropDownList ID="ddlBillTo" runat="server" DataTextField="PreferredVendor" DataValueField="PreferredVendor"
                                                                                Width="150px" onchange="javascript:return GetVendDisc(this);">
                                                                            </asp:DropDownList>
                                                                            <asp:Button ID="btnAddVend" runat="server" Text="" CssClass="addItem button-blue" Width="30px" Height="23px"
                                                                                OnClick="AddVendor" ToolTip="Click to add new vendor" Style="cursor: pointer" />
                                                                            <asp:HiddenField ID="hdnVendDiscount" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendPromoCode" runat="server" />
                                                                        </td>
                                                                        <td width="16%" align="left">
                                                                            <small>
                                                                                <label style="text-align: center">
                                                                                    <b><em>*</em></b>Purpose</label></small><br />
                                                                            <asp:TextBox ID="txtPurpose" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td width="20%">
                                                                            <small>
                                                                                <label>Job</label></small><br />
                                                                            <asp:DropDownList ID="ddlJobs" runat="server" Width="150px"></asp:DropDownList>
                                                                        </td>
                                                                        <td width="20%" style="vertical-align: bottom">
                                                                            <asp:Button ID="btnAttach" runat="server" Text="Attachments" CssClass="buttonnew-blue" OnClick="btnAttach_Click" />
                                                                        </td>
                                                                    </tr>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div id="dvExpDetails" class="divfieldset">
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="width: 14%" align="right">
                                                                    <asp:Button ID="btnUploadPOLines" runat="server" OnClick="btnUploadPOLines_Click" Text="Upload PO Lines" CssClass="buttonnew-blue" />
                                                                    <asp:Button ID="btnCopyPODetails" runat="server" OnClick="AddCopyPO" Text="Copy From Existing PO" CssClass="buttonnew-blue" />
                                                                    <asp:Button ID="btnAddPO" runat="server" OnClick="AddNewPurchaseOrder" Text="Add New PO Line" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <%if (gvPOrder.Rows.Count > 0)
                                                                      {  %>
                                                                    <isx:CoolGridView ID="gvPOrder" runat="server" AutoGenerateColumns="False" Width="1031px"
                                                                        GridLines="None" CellPadding="4" OnRowDataBound="gvPOrder_RowDataBound" OnRowCommand="gvPOrder_RowCommand"
                                                                        OnRowEditing="gvPOrder_RowEditing" OnRowDeleting="gvPOrder_RowDeleting">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Action">
                                                                                <ItemTemplate>
                                                                                    <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" Text="Edit" OnCommand="EditNewDetails"
                                                                                        CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkview" Text="View" CommandName="View" OnCommand="ViewNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex%>'
                                                                                    CommandName="Delete"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="AccountCode">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("expItem")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("comments")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Quantity">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("quantity")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Unit Price">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("unitPrice ")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Amount">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("preamount")%>'></asp:Label></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Budget">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("budget")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="BalanceAfterPo">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("balAfterPO")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 150px">
                                                                                <label>
                                                                                    No expense to display.</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                    <%} %>
                                                                    <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                                    <asp:HiddenField ID="hdnSeq1" runat="server" />
                                                                    <asp:HiddenField ID="hdnMaxApprLimit" runat="server" />
                                                                    <asp:HiddenField ID="hdnTotalPreAmnt" runat="server" />
                                                                    <asp:HiddenField ID="hdnTotalActAmnt" runat="server" />
                                                                    <asp:HiddenField ID="hdnCurrExpAmnt" runat="server" />
                                                                    <asp:HiddenField runat="server" ID="hdnPORowTotAmnt" />
                                                                    <asp:HiddenField runat="server" ID="hdnIsPOEdit" />
                                                                    <asp:HiddenField runat="server" ID="hdnIsCopy" />
                                                                    <asp:HiddenField runat="server" ID="hdnCopyBud" />
                                                                    <asp:HiddenField runat="server" ID="hdnCopyCurrBal" />
                                                                    <asp:HiddenField runat="server" ID="hdnCopyRemain" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </asp:Panel>
                                            </div>
                                            <div class="action" id="dvSave" runat="server">
                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue" OnClick="btnReset_Click"></asp:Button>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlAddPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 700px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHeading" runat="server"></asp:Label></h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnSavePOItem" runat="server" OnClick="btnSavePO_Click" Text="Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnAppend" runat="server" Text="Done" CssClass="buttonnew-blue" OnClick="btnSavePO_Click" />
                                                                <asp:Button ID="btnClosePOItem" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnClosePOItem_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvPOErrMsg" runat="server" style="font-size: 1.15em">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Department:</label></small><br />
                                                                                            <asp:DropDownList ID="ddlDepartment" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged" Width="170px">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td class="lbl cell">
                                                                                            <div id="dvCommts" runat="server" style="display: none">
                                                                                                <small>
                                                                                                    <label>
                                                                                                        <em>*</em>Comments:
                                                                                                    </label>
                                                                                                </small>
                                                                                                <br />
                                                                                                <asp:TextBox ID="txtchangeComnts" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Account Name:</label></small>
                                                                                            <br />
                                                                                            <asp:DropDownList ID="ddlExpItem" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                OnSelectedIndexChanged="ddlExpItem_SelectedIndexChanged" AutoPostBack="true" Width="170px">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Account Code:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtAccCode" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Item Code:</label></small>
                                                                                            <br />
                                                                                            <asp:DropDownList ID="ddlItemCode" runat="server" DataValueField="ItemCode" DataTextField="ItemCode"
                                                                                                OnSelectedIndexChanged="ddlItemCode_SelectedIndexChanged" AutoPostBack="true" Width="150px">
                                                                                            </asp:DropDownList>
                                                                                            <asp:Button ID="btnAddItemCode" runat="server" Text="" CssClass="addItem button-blue" Width="30px" Height="23px"
                                                                                                OnClick="AddItemCode" ToolTip="Click to add new Item Code" Style="cursor: pointer" />
                                                                                            <br />
                                                                                            <a href="#" id="lnkShowItemInventory" runat="server" onclick="showItemInventory();">Check Inventory</a>
                                                                                        </td>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Vendor Part No:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtVendPtNo" runat="server" Width="70px" onchange="javascript: getVendItemAgrmntInit('ddlBillTo');"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnAgreementCnt" runat="server" />
                                                                                            <br />
                                                                                            <asp:LinkButton ID="lnkAgreement" runat="server" Text="View Agreement" OnClick="lnkAgreement_Click"></asp:LinkButton>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Description:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl cell">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Req. Del. Date:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtReqDelDate" runat="server" Width="70px" class="date"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>Price Flag:</label></small><br />
                                                                                <asp:DropDownList ID="ddlPriceFlag" runat="server" onchange="javascript:return modifyUnitPriceField();"></asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Quantity:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtQuantity" runat="server" onkeyup='javascript:getVolDiscUnitPriceInit();' Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Unit Price:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtUnitPrice" runat="server" onkeyup='javascript:CalcBudgetDetails();' onchange="javascript:GetItemPurchHistory(this)" Width="70px"></asp:TextBox>
                                                                                            <asp:LinkButton ID="lnkItemHistory" runat="server" Text="Show History" CommandArgument="test"
                                                                                                OnClick="DisplayItemPurchHistory" ToolTip="Show item purchase history">
                                                                                                        <img src="images/icons/history_clear.png" alt="Show History"/>
                                                                                            </asp:LinkButton>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Estimated Ship Cost:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtShipCost" runat="server" onkeyup='javascript:CalcBudgetDetails();' Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Package/Unit:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtPkgUnit" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label align="left">
                                                                                                    Include Vendor Discount:
                                                                                                </label>
                                                                                            </small>
                                                                                            <asp:CheckBox ID="chkDisc" runat="server" Width="24px" onclick="javascript:CalcBudgetDetails();" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Discount(%):</label></small><br />
                                                                                            <asp:TextBox ID="txtDisc" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Promocode:</label></small><br />
                                                                                            <asp:TextBox ID="txtLinePromoCode" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label align="left">
                                                                                                    Calculate TaxAmt:
                                                                                                </label>
                                                                                            </small>
                                                                                            <asp:CheckBox ID="chkCalTax" runat="server" Width="24px" onclick="javascript:CalcBudgetDetails();" />
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Tax Percent:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtTaxPercent" runat="server" onkeyup='javascript:CalcBudgetDetails();' Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Tax Amount:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txttax" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label>
                                                                                                    Line Amount:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtPoAmount" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table style="background-image: linear-gradient(#007FFF, #60AFFE); border-radius: 5px">
                                                                                    <tr>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    Budget:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtBudget" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    Current Balance:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtCurrBal" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    Remaining $:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtRemain" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    Balance After PO:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtBalAfterPO" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
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
                                        <asp:LinkButton ID="lnkAddPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddPO" runat="server" DropShadow="false" PopupControlID="pnlAddPO"
                                            TargetControlID="lnkAddPO" CancelControlID="btnClosePOItem" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete this item?</label></small>
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
                                        <asp:Panel ID="pnlCopyPO" runat="server" DefaultButton="btnOk" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Copy PO</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button Width="70" ID="btnOk" runat="server" OnClick="CopyPO" Text="Ok" CssClass="buttonnew-blue" />
                                                                <asp:Button Width="70" ID="btnCloseCopyPO" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>
                                                                Select a PO to copy the details</label></small>
                                                        <br />
                                                        <br />
                                                        <asp:DropDownList ID="ddlCopyPONum" runat="server" DataValueField="RequestID" DataTextField="ourRefNo"
                                                            Width="195px">
                                                        </asp:DropDownList>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCopyPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popCopyPO" runat="server" DropShadow="false" PopupControlID="pnlCopyPO"
                                            TargetControlID="lnkCopyPO" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseCopyPO">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none"
                                            DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 800px; height: 400px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHVend" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnVendSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveVendor"></asp:Button>
                                                                <asp:Button ID="btnVendColse" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvErrMsg" runat="server" style="font-size: 1.15em; color: red">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        <em>*</em>Vendor No:</label></small><br />
                                                                                <asp:Label ID="lblVendNo" runat="server" CssClass="vendNum"></asp:Label>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        <em>*</em>Vendor Name:</label>
                                                                                    </label></small><br />
                                                                                <asp:TextBox ID="txtVendName" runat="server" onchange="getVendCode();"></asp:TextBox>
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
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Contact:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendContact" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Vendor Phone:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address1:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtVendAddr1" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address2:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtVendAddr2" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Address3:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtVendAddr3" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Country:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                    Width="150px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        State:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                                    Width="150px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        City:</label></small><br />
                                                                                <asp:TextBox ID="txtVendCity" runat="server" onchange="javascript:splitCityZip(this);"></asp:TextBox>
                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtVendCity"
                                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                    CompletionListItemCssClass="listItem"
                                                                                    CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                </cc1:AutoCompleteExtender>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
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
                                                                            <td class="lbl" style="text-align: left">
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
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        StartDate:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtStartDate" runat="server" class="date"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        ExpiryDate:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtExpiryDate" runat="server" class="date"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
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
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <table width="30%">
                                                                                    <tr>
                                                                                        <td width="30%">
                                                                                            <asp:CheckBox ID="chkSysOrders" runat="server" TextAlign="Right" onchange="DisplayEmailOption()" />
                                                                                            <small>
                                                                                                <label>
                                                                                                    Accept System Orders</label></small>
                                                                                        </td>
                                                                                        <td width="70%">
                                                                                            <div id="dvSysOrders" runat="server" style="width: 10%">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td style="padding: 0px">
                                                                                                            <asp:RadioButtonList ID="rblEmail" runat="server" RepeatDirection="Horizontal" TextAlign="Right"
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
                                                                    <table>
                                                                        <tr>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Agent:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtAgent" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Agent Name:
                                                                                    </label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtAgentName" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td class="lbl" style="text-align: left">
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
                                            TargetControlID="lnkAddVendor" BackgroundCssClass="modalBackground" CancelControlID="btnVendColse">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Attachments</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnUpload" runat="server" Text="Upload" CssClass="buttonnew-blue" OnClick="UploadPOAttachments" />
                                                                <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvAtt" runat="server" style="font-weight: bolder">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server"
                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete"
                                                                        OnClientUploadComplete="showConfirmation" Style="float: left; border: 1px solid #aaaaaa" Width="300px" />
                                                                    <div style="float: left; padding-left: 0.5em">
                                                                        <a href="#" id="tooltip">
                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                            <span><small>
                                                                                <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif, .pdf, .doc and .docx. Maximum file size should be 10MB.</label></small>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                    <br />
                                                                    <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                    <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                                    <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="300px"
                                                                        Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                        OnRowDataBound="gvAttchmnts_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                <ItemTemplate>
                                                                                    <asp:ImageButton runat="server" ID="imgAttchmnt" Width="55px" Height="65px" OnClick="DownLdAtt"></asp:ImageButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Remove">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkDelAtt" runat="server" onchange="showDeleteButton();" />
                                                                                    <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                    <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 200px">
                                                                                <label>
                                                                                    No attachments to display</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                                <td>
                                                                    <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="buttonnew-blue"
                                                                        OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <asp:HiddenField ID="hdnAttIdsRet" runat="server" />
                                                        <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground" CancelControlID="btnAttClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete this Attachment?</label>
                                                        </small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                            TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddItemCode" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Add Item Code</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnSaveAddItemCode" runat="server" OnClick="SaveItemCode" Text="Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnCancelAddItemCode" runat="server" Text="Cancel" CssClass="buttonnew-blue" OnClick="CancelAddItemCode" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvItemErrMsg" runat="server"></div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Account Name:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblBdgClssForItem" runat="server"></asp:Label></label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Item Code:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemCode" runat="server"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label><em>*</em>Description:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemDescription" runat="server" TextMode="MultiLine"></asp:TextBox></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right"><small>
                                                                    <label>Notes:&nbsp;&nbsp;</label></small></td>
                                                                <td>
                                                                    <asp:TextBox ID="txtItemNotes" runat="server" TextMode="MultiLine"></asp:TextBox></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddItemCode" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddItemCode" runat="server" DropShadow="false" PopupControlID="pnlAddItemCode"
                                            TargetControlID="lnkAddItemCode" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemInventory" runat="server" Style="display: none; background-color: white">
                                            <div class="main-content" style="margin: 0px; padding: 10px; min-height: 95px; min-width: 400px">
                                                <div class="divfieldset">
                                                    <table>
                                                        <tr>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="btnCloseItemInventory" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvItemInventory" runat="server" AutoGenerateColumns="false" ShowHeader="true" Height="300px"
                                                                    Width="800px" OnRowDataBound="gvItemInventory_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                            <ItemTemplate>
                                                                                <img id="imgItemRowSelect" alt="expand" style="cursor: pointer" src="images/downarrow.jpg" />
                                                                                <asp:Panel ID="pnlItemInv" runat="server" Style="display: none">
                                                                                    <asp:GridView ID="gvItemInventoryLot" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvItemInventoryLot_RowDataBound"
                                                                                        Width="580px">
                                                                                        <Columns>
                                                                                            <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("lotNum") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Item">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("expItem") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Total Quantity">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("qtyLot") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Allocated to Jobs">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            <%#Eval("allocatedJobs") %></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderText="Available to Use">
                                                                                                <ItemTemplate>
                                                                                                    <small>
                                                                                                        <label style="color: green">
                                                                                                            <b><%#Eval("availUse") %></b></label></small>
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                        </Columns>
                                                                                        <FooterStyle BackColor="#CCCCCC" ForeColor="Black"></FooterStyle>
                                                                                        <HeaderStyle BackColor="#009ACD" Font-Bold="false" ForeColor="White" Height="30px"></HeaderStyle>
                                                                                        <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                                        <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                                        <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                                    </asp:GridView>
                                                                                </asp:Panel>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Location Code">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblLocation" runat="server" Text='<%#Eval("locCode") %>'></asp:Label></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Location Name">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <%#Eval("locName") %></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Address1">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <%#Eval("locAddress1") %></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Total Quantity">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblTotalQty" runat="server"></asp:Label></label></small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <HeaderStyle BackColor="#009ACD" Font-Bold="true" ForeColor="White" Height="30px"></HeaderStyle>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px">
                                                                            <label>
                                                                                No data to display</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkItemInventory" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popItemInventory" runat="server" PopupControlID="pnlItemInventory"
                                            TargetControlID="lnkItemInventory" DropShadow="false" CancelControlID="btnCloseItemInventory" BackgroundCssClass="modalBackground2">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemPurchHist" runat="server" Style="display: none;">
                                            <div class="main-content" style="margin: 0px; padding: 10px; min-height: 300px; min-width: 600px">
                                                <div class="divfieldset">
                                                    <table>
                                                        <tr>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="btnCloseItemPurchHist" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvItemPurchHist" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvItemPurchHist_RowDataBound" Width="700px" Height="350px">
                                                                    <Columns>
                                                                        <asp:BoundField HeaderText="Vendor" DataField="preferredVendor" ItemStyle-Width="150px" HeaderStyle-Width="150px" />
                                                                        <asp:BoundField HeaderText="Unit Price($)" DataField="unitPrice" />
                                                                        <asp:BoundField HeaderText="PO#" DataField="ourRefNo" />
                                                                        <asp:TemplateField HeaderText="Vendor Status" ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <%# Eval("vendorFlag").ToString().ToLower() == "y"?"Preferred":"Not preferred" %>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <%--<asp:BoundField HeaderText="Preferred Vendor" DataField="vendorFlag" />--%>
                                                                        <asp:TemplateField HeaderText="Date" ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                            <ItemTemplate>
                                                                                <%# Convert.ToDateTime(Eval("expDate")) %>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <%--<asp:BoundField HeaderText="Date" DataField="expDate" />--%>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px">
                                                                            <label>No data to display.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkItemPurchHist" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popItemPurchHist" runat="server" PopupControlID="pnlItemPurchHist" TargetControlID="lnkItemPurchHist"
                                            DropShadow="false" BackgroundCssClass="modalBackground2" CancelControlID="btnCloseItemPurchHist">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlUploadPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Upload PO</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnSaveUploadedPO" runat="server" OnClick="btnSaveUploadedPO_Click" Text="Save PO" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnuploadPOClose" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvUploadPOErr" runat="server"></div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvUpload" runat="server">
                                                                        <table class="tablemain">
                                                                            <tr>
                                                                                <td width="45%">
                                                                                    <cc1:AsyncFileUpload ID="fupdPOLines" CompleteBackColor="White" runat="server" CssClass="fupdpo"
                                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="lblUploadPOThrobber" OnUploadedComplete="fupdPOLines_UploadedComplete"
                                                                                        OnClientUploadComplete="showConfirmationUploadPO" style="float:left; border: 1px solid #aaaaaa" Width="300px"/>
                                                                                    <div style="float: left; padding-left: 0.5em">
                                                                                        <a href="#" id="tooltip1">
                                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                            <span><small>
                                                                                                <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif, .pdf, .doc and .docx. Maximum file size should be 10MB.</label></small>
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="55%">
                                                                                    <asp:Button ID="btnUploadPOConfirm" runat="server" OnClick="btnUploadPOConfirm_Click" Text="Upload and Validate" CssClass="buttonnew-blue" /></td>
                                                                                <td>
                                                                                    <asp:Button ID="btnClearUploadPO" runat="server" OnClick="btnClearUploadPO_Click" Text="Clear Data" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2"><a href="DownloadFile.aspx?typ=15">Click here</a> to download template.</td>
                                                                            </tr>
                                                                        </table>
                                                                        <asp:Label ID="lblUploadPOFileName" runat="server"></asp:Label>
                                                                        <asp:Label ID="lblUploadPOThrobber" runat="server" Style="display: none">
                                                                            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                        </asp:Label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvUploadPOLines" runat="server" AutoGenerateColumns="false" ShowHeader="true"
                                                                        OnRowDataBound="gvUploadPOLines_RowDataBound" Height="300px" Width="800px">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Failure Message" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblFailureMsg" runat="server" Text='<%#Eval("FailureMessage") %>' ForeColor="Red"></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Department">
                                                                                <ItemTemplate>
                                                                                    <asp:DropDownList ID="ddlDept" runat="server" AutoPostBack="true" OnSelectedIndexChanged="UploadDeptChanged" Width="70px"></asp:DropDownList>
                                                                                    <asp:HiddenField ID="hdnDeptCode" runat="server" Value='<%#Eval("DEPARTMENTCODE") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Comments">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtComments" runat="server" Text='<%#Eval("COMMENTS") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Vend. Part#">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtVendPart" runat="server" Text='<%#Eval("VENDPARTNUM") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Req. Del.Date">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtRDD" runat="server" CssClass="date" Text='<%#Eval("REQUESTDELIVERYDATE") %>' Width="50px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Account Name">
                                                                                <ItemTemplate>
                                                                                    <asp:DropDownList ID="ddlBudgClss" runat="server" AutoPostBack="true" OnSelectedIndexChanged="UploadClassChanged" Width="70px"></asp:DropDownList>
                                                                                    <asp:HiddenField ID="hdnBudgClss" runat="server" Value='<%#Eval("BUDGETCLASSIFICATION") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Account Code">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtAccCode" runat="server" Text='<%#Eval("ACCOUNTCODE") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Item Code">
                                                                                <ItemTemplate>
                                                                                    <asp:DropDownList ID="ddlItemCode" runat="server" Width="70px" AutoPostBack="true" OnSelectedIndexChanged="UploadItemChanged"></asp:DropDownList>
                                                                                    <asp:HiddenField ID="hdnItemCode" runat="server" Value='<%#Eval("ITEMCODE") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Description">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtDescr" runat="server" Text='<%#Eval("DESCRIPTION") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Qty">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtQty" runat="server" Text='<%#Eval("QUANTITY") %>' Width="50px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Unit Price">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtUnitPrice" runat="server" Text='<%#Eval("UNITPRICE") %>' Width="50px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Ship. Cost">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtShipCost" runat="server" Text='<%#Eval("SHIPCOST") %>' Width="50px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Package/Unit">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtPackageUnit" runat="server" Text='<%#Eval("PACKAGE_UNIT") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Vendor Disc.">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkVendDisc" runat="server" />
                                                                                    <asp:HiddenField ID="hdnVendDisc" runat="server" Value='<%#Eval("INCLUDEVENDORDISC") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Disc.(%)">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblDiscPercent" runat="server" Text='<%#Eval("DISCOUNTPERCENT") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Disc. Amount">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblDiscAmount" runat="server" Text='<%#Eval("DISCOUNTAMOUNT") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Promo Code">
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtPromoCode" runat="server" Text='<%#Eval("PROMOCODE") %>' Width="70px"></asp:TextBox>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Tax">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkTax" runat="server"></asp:CheckBox>
                                                                                    <asp:HiddenField ID="hdnTax" runat="server" Value='<%#Eval("INCLUDETAX") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Tax(%)">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblTaxPercent" runat="server" Text='<%#Eval("TAXPERCENT") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Tax Amount">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblTaxAmount" runat="server" Text='<%#Eval("TAXAMOUNT") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Line Amount">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblLineAmount" runat="server" Text='<%#Eval("LINEAMOUNT") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Budget">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblBudget" runat="server" Text='<%#Eval("BUDGET") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Curr. Balance">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblCurrBudg" runat="server" Text='<%#Eval("CURRBAL") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Remaining Budget">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblRemBudg" runat="server" Text='<%#Eval("REMAINING") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Bal. After PO">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblBalAftrPO" runat="server" Text='<%#Eval("BALAFTRPO") %>'></asp:Label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 150px">
                                                                                <label>
                                                                                    No data to display.</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUploadPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popUploadPO" runat="server" TargetControlID="lnkUploadPO" PopupControlID="pnlUploadPO"
                                            DropShadow="false" BackgroundCssClass="modalBackground1" CancelControlID="btnuploadPOClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAgreements" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 700px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Agreement Info</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnCloseAgr" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvAgrDetails">
                                                            <table class="tbagr">
                                                                <tr>
                                                                    <td><small>
                                                                        <label>Agreement Code:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtAgreementCode" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Agreement Descr:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtAgreementDescr" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Discount Type:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtDiscType" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Discount Value:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtDiscVal" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><small>
                                                                        <label>Valid From:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtValidFrom" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Valid To:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtValidTo" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>List Price:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtListPrice" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                    <td><small>
                                                                        <label>Our Price:</label></small><br />
                                                                        <label>
                                                                            <asp:TextBox ID="txtOurPrice" runat="server" ReadOnly="true"></asp:TextBox></label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <p>
                                                                            <asp:CheckBox ID="chkIsVolDisc" runat="server" Text="&nbsp;&nbsp;Volume Discount"
                                                                                TextAlign="Right" />
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvAgrqtyBreaks">
                                                            <table style="width: 100%">
                                                                <tr>
                                                                    <td style="padding-bottom: 10px">
                                                                        <div id="dvMsgVolDisc" runat="server">
                                                                            <label><i>Note: Quantity indicates minimum number to be purchased to receive that discount.</i></label>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:GridView ID="gvAgrQtyBreaks" runat="server" AutoGenerateColumns="false" CssClass="tabqtybrk" Width="400px">
                                                                            <Columns>
                                                                                <%--<asp:TemplateField HeaderText="Qty From">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("fromQty")%>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>--%>
                                                                                <asp:TemplateField HeaderText="Upto Quantity">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("toQty")%>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Disc Val">
                                                                                    <ItemTemplate>
                                                                                        <%#Eval("lineDscntVal") %>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </asp:GridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAgreementPop" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAgreement" runat="server" PopupControlID="pnlAgreements" TargetControlID="lnkAgreementPop"
                                            BackgroundCssClass="modalBackground2" DropShadow="false" CancelControlID="btnCloseAgr">
                                        </cc1:ModalPopupExtender>
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
