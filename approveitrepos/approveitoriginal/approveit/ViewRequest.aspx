<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ViewRequest.aspx.cs" Inherits="ViewRequest" %>

<%@ Register Assembly="System.Web.DataVisualization, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" Namespace="System.Web.UI.DataVisualization.Charting" TagPrefix="asp" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - My Expenses</title>
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
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/html5shiv.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="js/DateSetup.js" type="text/javascript"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .modalBackground2 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .modalBackground3 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99999 !important;
        }

        .modalBackground4 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999999 !important;
        }

        .modalBackground5 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999999 !important;
        }

        .lnk {
            color: White;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain td {
                padding: 1px;
            }

                .tablemain td div {
                    padding: 3px;
                }

            .tablemain input[type=text] {
                width: 135px;
            }

            .tablemain input[type=checkbox] {
                width: 25px;
            }

            .tablemain label {
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
                }

        .tableatt td div {
            padding: 0px;
        }

        .tablemaincc td {
            padding: 10px;
        }

        .lbl {
            text-align: left;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        .cell {
            vertical-align: top;
        }

        .budgfld {
            background-color: #CDCDCD;
        }

        #gvExpDetailsjEsCoOl_headerDiv, #gvExpjEsCoOl_headerDiv, #gvAttchmntsjEsCoOl_headerDiv, #gvPOjEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv,
        #gvHistjEsCoOl_headerDiv, #gvAttchmntsPOjEsCoOl_headerDiv, #gvItemPurchHistjEsCoOl_headerDiv, #gvExpLineHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvExpDetailsjEsCoOl_headerDiv div table tbody tr th, #gvExpjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th,
            #gvPOjEsCoOl_headerDiv div table tbody tr th, #gvDraftsjEsCoOl_headerDiv div table tbody tr th, #gvHistjEsCoOl_headerDiv div table tbody tr th,
            #gvAttchmntsPOjEsCoOl_headerDiv div table tbody tr th, #gvItemPurchHistjEsCoOl_headerDiv div table tbody tr th, #gvExpLineHistjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvExp tbody tr td, #gvAttchmnts tbody tr td, #gvPO tbody tr td, #gvDrafts tbody tr td, #gvAttchmntsPO tbody tr td, #gvItemInventory tbody tr td, #gvItemPurchHist tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding: 5px;
            text-overflow: ellipsis;
        }

        #gvExpDetails tbody tr td, #gvExpLineHist tbody tr td, #gvHist tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding: 5px;
            text-align: center;
        }

        #gvExpDetailsjEsCoOl_mainDiv, #gvExpjEsCoOl_mainDiv, #gvAttchmntsjEsCoOl_mainDiv, #gvPOjEsCoOl_mainDiv, #gvDraftsjEsCoOl_mainDiv, #gvHistjEsCoOl_mainDiv,
        #gvAttchmntsPOjEsCoOl_mainDiv, #gvItemInventoryjEsCoOl_mainDiv, #gvItemPurchHistjEsCoOl_mainDiv, #gvExpLineHistjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvExpDetails TR TD, #gvExpDetails TR TH, #gvExpDetails TR TH div, #gvExpDetails TR TD div,
        #gvExp TR TD, #gvExp TR TH, #gvExp TR TH div, #gvExp TR TD div,
        #gvDrafts TR TD, #gvDrafts TR TH, #gvDrafts TR TH div, #gvDrafts TR TD div,
        #gvHist TR TD, #gvHist TR TH, #gvHist TR TH div, #gvHist TR TD div,
        #gvAttchmntsPO TR TD, #gvAttchmntsPO TR TH, #gvAttchmntsPO TR TH div, #gvAttchmntsPO TR TD div,
        #gvItemInventory TR TD, #gvItemInventory TR TH, #gvItemInventory TR TH div, #gvItemInventory TR TD div,
        #gvItemPurchHist TR TD, #gvItemPurchHist TR TH, #gvItemPurchHist TR TH div, #gvItemPurchHist TR TD div,
        #gvExpLineHist TR TD, #gvExpLineHist TR TH, #gvExpLineHist TR TH div, #gvExpLineHist TR TD div {
            overflow: visible;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 200px;
            width: 200px;
            overflow: auto;
            background-color: #FFFFFF;
            border-radius: 3px 3px;
            font-family: Verdana,Arial,sans-serif;
            font-size: 1.4em;
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

        .tablemainreimb td {
            padding: 5px;
        }

        .tablemainreimb input[type=text] {
            width: 150px;
        }

        #ChkSendToQB {
            margin: 6px;
        }

        .tabsearch td {
            padding: 10px;
        }
        /*Calendar Control CSS*/
        .cal_Theme1 .ajax__calendar_container {
            background-color: #DEF1F4;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_header {
            background-color: #ffffff;
            margin-bottom: 4px;
        }

        .cal_Theme1 .ajax__calendar_title,
        .cal_Theme1 .ajax__calendar_next,
        .cal_Theme1 .ajax__calendar_prev {
            color: #004080;
            padding-top: 3px;
        }

        .cal_Theme1 .ajax__calendar_body {
            background-color: #ffffff;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_dayname {
            text-align: center;
            font-weight: bold;
            margin-bottom: 4px;
            margin-top: 2px;
            color: #004080;
        }

        .cal_Theme1 .ajax__calendar_day {
            color: #004080;
            text-align: center;
        }

        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_day,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_month,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_year,
        .cal_Theme1 .ajax__calendar_active {
            color: #004080;
            font-weight: bold;
            background-color: #DEF1F4;
        }

        .cal_Theme1 .ajax__calendar_today {
            font-weight: bold;
        }

        .cal_Theme1 .ajax__calendar_other,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_today,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_title {
            color: #bbbbbb;
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
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|iframe|icon-cross".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
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

        var jq = $.noConflict();

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function pageLoad() {
            searchableDropdowns();
        }

        function searchableDropdowns() {
            jq(function () {
                jq("#ddlType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlAmountFilter").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlManagerEmail").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlEditExpType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlEditJobs").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlEditPhases").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlAccountCodes").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlClass").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlEditAgName").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCompCar").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlEditPaymentType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCCExpItems").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlPOMgrEmail").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlPreVendor").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlJobs").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlDepartment").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlExpItem").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlItemCode").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlReasonsCodes").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlVendTitle").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCountry").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlRgnCode").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlPayTerms").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlVendCurrency").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlPriceFlag").ufd({ log: true });
            });
        }

        function collapse(lnk, col) {
            if ($11(col).style.display == "block") {
                $11(col).style.display = "none";
                $11(lnk).innerHTML = "[+] Show details";
            }
            else {
                $11(col).style.display = "block";
                $11(lnk).innerHTML = "[-] Hide details";
            }
        }

        function onchangeoutofcity(chk) {
            if ($11(chk).checked) {
                $11('dvLocalLocation').style.display = 'none';
                $11('dvEditToCity').style.display = 'block';
                $11('txtEditLocalLocation').value = '';

                //display 'other' text fields if city selected is Other.
                var ddl2 = $11('ddlEditTocity');
                if (ddl2.options[ddl2.selectedIndex].text == 'Other') {
                    $11('dvEditToOther').style.display = 'block';
                }
                else {
                    $11('dvEditToOther').style.display = 'none';
                }
            }
            else {
                $11('dvLocalLocation').style.display = 'block';
                $11('dvEditToCity').style.display = 'none';
                $11('dvEditToOther').style.display = 'none';
            }
        }

        function validateReason() {
            var ddl = $11('ddlReasonsCodes');
            if ($11('ddlReasonsCodes').selectedIndex == 0) {
                $11('dvReasonError').innerHTML = 'Message: Please select ReasonCode.';
                $11('ddlReasonsCodes').focus();
                return false;
            }
        }

        function checkEmail(form1, email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtMulEmail').value)) {
                return true;
            }
        }

        function ValEmail() {
            if ($11('txtMulEmail').value == 0) {
                if (!checkEmail()) {
                    $11('DivEmailErr').style.color = "red";
                    $11('DivEmailErr').innerHTML = 'Please enter valid email.';
                    $11('txtMulEmail').focus();
                    return false;
                }
            }
        }

        function validateMultipleEmailsCommaSeparated(emailInputControl, seperator) {
            $11('DivEmailErr').innerHTML = '';
            var val = $11(emailInputControl).value;
            if (val != '') {
                var result = val.split(seperator);
                for (var i = 0; i < result.length; i++) {
                    if (result[i] != '') {
                        if (!validateEmail(result[i])) {
                            emailInputControl.focus();
                            $11('DivEmailErr').style.color = "red";
                            $11('DivEmailErr').innerHTML = ('Please check, `' + result[i] + '` email addresses not valid!');
                            return false;
                        }
                        else
                            $11('DivEmailErr').innerHTML = '';
                    }
                }
            }
            else {
                $11('DivEmailErr').style.color = "red";
                $11('DivEmailErr').innerHTML = 'Please enter validate Email.';
                return false;
            }
        }

        function validateEmail(field) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return (regex.test(field)) ? true : false;
        }

        function validateBudgetAmount1(id) {
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
                return false;
            }
            else if (!validateBudgetAmount1('txtUnitPrice')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for UnitPrice.";
                return false;
            }
            else if (!validateBudgetAmount1('txtShipCost')) {
                $11('dvPOErrMsg').style.color = "Red";
                $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for shippingCost.";
                return false;
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
                    calTax = parseFloat($11('txtTaxPercent').value == '' ? 0 : $11('txtTaxPercent').value);
                }
                else {
                    $11('txtTaxPercent').disabled = true;
                    calTax = 0;
                    $11('txtTaxPercent').value = parseFloat($11('hdnTax').value == '' ? 0 : $11('hdnTax').value);
                    x = 2;
                }
                /*Calculate tax amount with tax percentage based on checkbox checked*/

                /*Include tax in line amount*/
                var amnt = (noTaxAmnt * parseFloat(calTax == '' ? '0' : calTax) / 100) + (noTaxAmnt);
                /*Include tax in line amount*/
                var sample = parseFloat(noTaxAmnt * parseFloat(calTax == '' ? '0' : calTax) / 100);
                var newnumber = Math.round(sample * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txttax').value = newnumber;
                var newpo = Math.round((parseFloat(amnt + ShipCost)) * Math.pow(10, 4)) / Math.pow(10, 4);
                $11('txtPoAmount').value = newpo;
                /*Calculate Balance After PO*/
                if (parseFloat($11('hdnPORowTotAmnt').value == '' ? 0 : $11('hdnPORowTotAmnt').value) > 0) {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - (parseFloat($11('hdnPORowTotAmnt').value) + parseFloat($11('txtPoAmount').value));
                }
                else {
                    bal = parseFloat($11('txtRemain').value == '' ? 0 : $11('txtRemain').value) - parseFloat($11('txtPoAmount').value);
                }
                $11('txtBalAfterPO').value = parseFloat(bal).toFixed(2);
                /*Calculate Balance After PO*/
            }
        }

        function CheckAttDel() {
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
            if (parseInt(total) == parseInt(grid.rows.length)) {
                $11('dvAtt').innerHTML = "You cannot delete all the attachments.";
                $11('dvAtt').style.color = "Red";
                return false;
            }
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

        function showPOAttDeleteButton() {
            $11('dvAttPO').innerHTML = '';
            var total = 0;
            var grid = $11('<%=gvAttchmntsPO.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($11(grid.id + '_ctl' + i + '_chkDelAttPO').checked) {
                    total++;
                }
            }
            if (parseInt(total) > 0)
                $11("btnDeleteSelectedPO").style.display = "block";
            else
                $11("btnDeleteSelectedPO").style.display = "none";
        }

        function showConfirmation(sender, args) {
            $11('lblFileName').innerHTML = args.get_fileName();
        }

        function ShowBiggerImage(obj) {
            $11("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImage(obj) {
            $11("LargeImageContainerDiv").innerHTML = "";
        }

        function move_Area(event) {
            event = event || window.event;
            LargeImageContainerDiv.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDiv.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowBiggerImageDrft(obj) {
            $11("LargeImageContainerDivDrft").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImageDrft(obj) {
            $11("LargeImageContainerDivDrft").innerHTML = "";
        }

        function move_Area1(event) {
            event = event || window.event;
            LargeImageContainerDivDrft.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDivDrft.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowExportNullMsg() {
            $11('dvExtErr').innerHTML = 'No data to Export';
        }

        function CalcExpenseBudget(type) {
            if (!validateBudgetAmount1('txtEditActAmnt')) {
                $11('dvExpError').style.color = "Red";
                $11('dvExpError').innerHTML = "Please enter valid Numeric values for Amount.";
            }
            else {
                var bal;
                $11('dvExpError').innerHTML = "";
                if (parseFloat($11('hdnExpRowTotAmnt').value == '' ? 0 : $11('hdnExpRowTotAmnt').value) > 0) {
                    bal = parseFloat($11('txtExpRemBudg').value == '' ? 0 : $11('txtExpRemBudg').value) - (parseFloat($11('hdnExpRowTotAmnt').value) + parseFloat($11('txtEditActAmnt').value));
                }
                else {
                    bal = parseFloat($11('txtExpRemBudg').value == '' ? 0 : $11('txtExpRemBudg').value) - parseFloat($11('txtEditActAmnt').value == '' ? 0 : $11('txtEditActAmnt').value);
                }
                $11('txtExpBalAfter').value = parseFloat(bal).toFixed(2);
                if (type == 2)
                    validateFoodTax();
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

        function showConfirmationPO(sender, args) {
            $11('lblFileNamePO').innerHTML = args.get_fileName();
        }

        function ShowBiggerImagePO(obj) {
            $11("LargeImageContainerDivPO").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImagePO(obj) {
            $11("LargeImageContainerDivPO").innerHTML = "";
        }

        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for Manager Approvals
        function showApprovalCountOnSubmit(id) {
            GetPendingExp(id.value);
        }
        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for Manager Approvals

        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for AP Approvals
        function showAPApprovalCountOnSubmit(id) {
            GetAPPendingExp(id.value);
        }
        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for AP Approvals

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

        //Split City and Zip from City text field
        function splitCityZip(txt) {
            var arr = txt.value.split("-");
            document.getElementById('txtVendZip').value = arr[1];
        }
        //Split City and Zip from City text field

        //Display fields in reimburse screen based on selected pay mode
        function reimbtType() {
            document.getElementById('dvReimError').innerHTML = '';
            var type = document.getElementById('ddlPayMode').value;
            if (type == 'Cheque')
                document.getElementById('Cheque1').style.display = "block";
            else
                document.getElementById('Cheque1').style.display = "none";
        }
        //Display fields in reimburse screen based on selected pay mode

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

        //filter request data in the grid
        function Filter(Obj) {
            var grid = document.getElementById('gvExpDetails');
            var terms = Obj.value.toUpperCase();
            var cnt = 0; //your grid cellindex like name
            var amnt = 0;
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0) {
                    grid.rows[r].style.display = '';
                    if ($11('ddlType').value == 'ER' || $11('ddlType').value == 'PA') {
                        var rowAmnt = grid.rows[r].cells[4].getElementsByTagName("span");
                        var rowInput = grid.rows[r].cells[7].getElementsByTagName("input");
                        for (var i = 0; i < rowInput.length; i++) {
                            if (rowInput[i].type == "hidden" && rowInput[i].id.indexOf("hdnStatusID") > 0 && rowInput[i].value != "11") {
                                amnt += parseFloat(rowAmnt[0].innerHTML);
                                cnt++;
                            }
                        }
                    }
                    else {
                        var rowAmnt = grid.rows[r].cells[3].getElementsByTagName("span");
                        var rowInput = grid.rows[r].cells[6].getElementsByTagName("input");
                        for (var i = 0; i < rowInput.length; i++) {
                            if (rowInput[i].type == "hidden" && rowInput[i].id.indexOf("hdnStatusID") > 0 && rowInput[i].value != "11") {
                                amnt += parseFloat(rowAmnt[0].innerHTML);
                                cnt++;
                            }
                        }
                    }
                }
                else grid.rows[r].style.display = 'none';
            }
            $11('lblExpGridRowCount').innerHTML = cnt;
            $11('lblExpGridTotalAmount').innerHTML = amnt.toFixed(2);
            Obj.focus();
        }
        //filter request data in the grid

        //adjust width of autocomplete list of AutoCompleteExtender
        function onListPopulated1() {
            var completionList = $find("AutoCompleteExtender1").get_completionList();
            completionList.style.width = 'auto';
        }
        function onListPopulated2() {
            var completionList = $find("AutoCompleteExtender2").get_completionList();
            completionList.style.width = 'auto';
        }
        function onListPopulated3() {
            var completionList = $find("AutoCompleteExtender3").get_completionList();
            completionList.style.width = 'auto';
        }
        function onListPopulated4() {
            var completionList = $find("AutoCompleteExtender4").get_completionList();
            completionList.style.width = 'auto';
        }
        function onListPopulated5() {
            var completionList = $find("AutoCompleteExtender5").get_completionList();
            completionList.style.width = 'auto';
        }
        function onListPopulated6() {
            var completionList = $find("AutoCompleteExtender6").get_completionList();
            completionList.style.width = 'auto';
        }
        //adjust width of autocomplete list of AutoCompleteExtender

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
    <form id="form" runat="server">
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
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top" runat="server" />
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
                        <asp:HiddenField ID="hdnExp" runat="server" />
                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="btnUpload" />
                                <asp:PostBackTrigger ControlID="btnExportExpenses" />
                                <asp:PostBackTrigger ControlID="btnRetainedPO" />
                                <asp:PostBackTrigger ControlID="btnDownloadPDF" />
                                <asp:PostBackTrigger ControlID="btnPODownloadPDF" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style='display: none' />
                                <div class="main-content grid_4 alpha" style="width: 115%;">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <h2><%--My Expenses--%>
                                                        <asp:Label ID="lblPageHead" runat="server"></asp:Label>
                                                    </h2>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnRetainedPO" runat="server" Text="Retained POs" CssClass="buttonnew-blue" OnClick="GetRetainedPOs" ToolTip="" />
                                                    <asp:Button ID="btnExportExpenses" runat="server" OnClick="ExportExpensesToExcel" Text="Export Data" CssClass="buttonnew-blue"></asp:Button>
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvExtErr" style="color: Red; font-weight: bold">
                                            </div>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 70%">
                                                        <table width="100%">
                                                            <%if (Convert.ToInt32(Session["ReqCnt"]) > 0)
                                                              { %>
                                                            <tr>
                                                                <td colspan="3">
                                                                    <table width="60%">
                                                                        <tr>
                                                                            <td style="vertical-align: top; text-align: right">
                                                                                <small>
                                                                                    <label>
                                                                                        Type:&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                            </td>
                                                                            <td style="vertical-align: top">
                                                                                <asp:DropDownList ID="ddlType" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                    AutoPostBack="True" OnSelectedIndexChanged="rblExpType_SelectedIndexChanged"
                                                                                    Width="200px">
                                                                                </asp:DropDownList>
                                                                                <asp:HiddenField ID="hdnExpProcessType" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:Button ID="btnAddNew" runat="server" CssClass="buttonnew-blue" OnClick="AddNewExpensePO" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3">
                                                                    <table width="50%">
                                                                        <tr>
                                                                            <div id="dvSearchError">&nbsp;</div>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        From:&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                                <asp:TextBox ID="txtFrom" runat="server" Width="80px" CssClass="date" Height="19px"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="cal1" runat="server" TargetControlID="txtFrom" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        To:&nbsp;
                                                                                    </label>
                                                                                </small>
                                                                                <asp:TextBox ID="txtTo" runat="server" Width="80px" CssClass="date" Height="19px"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="cal2" runat="server" TargetControlID="txtTo" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                            </td>
                                                                            <td>
                                                                                <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="btnGo_Click" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <%if (Session["Cnt"] == "1")
                                                                                  { %>
                                                                                <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="300px" placeholder="Type in RequestId, Purpose or Start Date to search.." />&nbsp;&nbsp;
                                                                    <%--<a id="toggle3" runat="server" href="#" onclick="showFilterOptions();">Advanced</a>--%>
                                                                                <%--<a id="toggle3" runat="server" href="javascript:void(0);">Advanced</a>--%>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:LinkButton ID="toggle3" runat="server" Text="Advanced" OnClientClick="javascript:return showAdvPopup();"></asp:LinkButton></label></small>&nbsp;<span style="font-size: 1.5em;">|</span>&nbsp;
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:LinkButton ID="lnkClearSearch" runat="server" Text="Clear Filters" OnClick="lnkClearSearch_Click"></asp:LinkButton></label></small>
                                                                                <%} %>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <%}
                                                              else
                                                              { %>
                                                            <tr>
                                                                <td colspan="3">
                                                                    <span runat="server" id="newBtn">
                                                                        <input type="button" value="Create Expense" class="buttonnew-blue" onclick="window.location.href = 'NewExpense.aspx'; showProgress()" /></span>
                                                                </td>
                                                            </tr>
                                                            <%} %>
                                                        </table>
                                                    </td>
                                                    <td style="width: 30%">
                                                        <div>
                                                            <asp:Chart ID="Chart1" runat="server" Width="270px" Height="150px" BackImageAlignment="Right">
                                                                <Titles>
                                                                    <asp:Title Text="Requests by Status" />
                                                                </Titles>
                                                                <Legends>
                                                                    <asp:Legend Alignment="Center" Docking="Bottom" IsTextAutoFit="False" Name="Default" LegendStyle="Column" />
                                                                </Legends>
                                                                <Series>
                                                                    <asp:Series Name="Series1" IsValueShownAsLabel="true" IsVisibleInLegend="true"></asp:Series>
                                                                </Series>
                                                                <ChartAreas>
                                                                    <asp:ChartArea Name="ChartArea1"></asp:ChartArea>
                                                                </ChartAreas>
                                                            </asp:Chart>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            <script type="text/javascript">
                                                function showAdvPopup() {
                                                    $find('popAdvSearch').show();
                                                    return false;
                                                }
                                            </script>
                                            <asp:LinkButton ID="lnkAdvSearch" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popAdvSearch" runat="server" TargetControlID="lnkAdvSearch"
                                                PopupControlID="pnlAdvSearch" DropShadow="false" BackgroundCssClass="modalBackground">
                                            </cc1:ModalPopupExtender>
                                            <asp:Panel ID="pnlAdvSearch" runat="server" Style="display: none" DefaultButton="btnAmntFilter">
                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; background-color: white; min-height: 80px; width: 300px">
                                                    <div id="dvFilterOptions" class="divfieldset">
                                                        <div id="dvCloseBtn" style="text-align: right; vertical-align: top; height: 20px">
                                                            <a href="javascript:void(0);" id="ancClose" runat="server" onclick="$find('popAdvSearch').hide();">
                                                                <img alt="close" src="images/icons/cross.png" /></a>
                                                        </div>
                                                        <table class="tabsearch" width="100%">
                                                            <tr>
                                                                <td id="trStatus" runat="server" width="30%" align="left">
                                                                    <small>
                                                                        <label>
                                                                            Select Status:</label></small><br />
                                                                    <asp:DropDownCheckBoxes ID="ddlStatus" runat="server" UseButtons="true" UseSelectAllNode="true" OnSelectedIndexChanged="ddlStatus_SelectedIndexChanged">
                                                                        <Texts OkButton="Yes" CancelButton="No" SelectAllNode="ALL" SelectBoxCaption="Select multiple" />
                                                                    </asp:DropDownCheckBoxes>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="30%" align="left">
                                                                    <small>
                                                                        <label>
                                                                            Select RequestID:</label></small><br />
                                                                    <asp:DropDownCheckBoxes ID="ddlExpenseID" runat="server" UseButtons="true" UseSelectAllNode="true" OnSelectedIndexChanged="ddlExpenseID_SelectedIndexChanged">
                                                                        <Texts OkButton="Yes" CancelButton="No" SelectAllNode="ALL" SelectBoxCaption="Select multiple" />
                                                                    </asp:DropDownCheckBoxes>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="30%" style="text-align: left; vertical-align: bottom"><small>
                                                                    <label>Amount:</label></small><br />
                                                                    <asp:DropDownList ID="ddlAmountFilter" runat="server" Height="27px" Width="150px">
                                                                        <asp:ListItem Text="Equal to" Value="="></asp:ListItem>
                                                                        <asp:ListItem Text="Less than" Value="<"></asp:ListItem>
                                                                        <asp:ListItem Text="Greater than" Value=">"></asp:ListItem>
                                                                        <asp:ListItem Text="Less than or equal to" Value="<="></asp:ListItem>
                                                                        <asp:ListItem Text="Greater than or equal to" Value=">="></asp:ListItem>
                                                                    </asp:DropDownList>
                                                                    <asp:TextBox ID="txtAmountFilter" runat="server" Height="19px" placeholder="Type in amount" Width="85px"></asp:TextBox>
                                                                    <br />
                                                                    <div id="dvAmntFilterErr" runat="server" style="color: red"></div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:Button ID="btnAmntFilter" runat="server" Text="   Search" CssClass="buttonnew-blue" OnClick="btnAmntFilter_Click" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </asp:Panel>
                                            <isx:CoolGridView AllowPaging="false" ID="gvExpDetails" runat="server" AutoGenerateColumns="false"
                                                Width="100%" Height="250px" GridLines="None" ShowHeader="true" OnRowDataBound="gvExpDetails_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkStartDate" runat="server" Text="Start Date" CommandArgument="StartDate"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("StartDate") %></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Request ID">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkRequestID" runat="server" Text="Request ID" CommandArgument="RequestID"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test" OnClick="Edit"
                                                                    Text='<%#Eval("RequestID")%>' Font-Bold="false"></asp:LinkButton></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblPurpose" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Payable To" ControlStyle-Width="170px" HeaderStyle-Width="170px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkPayableTo" runat="server" Text="Payable To" CommandArgument="OnBeHalfOf"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("OnBeHalfOf") %></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Amount">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkActAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Status" HeaderStyle-Width="80px" ItemStyle-Width="80px">
                                                        <HeaderTemplate>
                                                            Status
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Sent To Vendor">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkHSentToVend" runat="server" Text="Sent To Vendor"
                                                                CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:LinkButton ID="lnkSentToVend" runat="server" OnClick="ShowExpReimburseDetails"></asp:LinkButton></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Invoice NO">
                                                        <HeaderTemplate>
                                                            View Details
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" OnClick="Edit" Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                            <asp:HiddenField ID="hdStatus" runat="server" Value='<%#Eval("Status")%>' />
                                                            <asp:HiddenField ID="hdnReq" runat="server" Value='<%#Eval("RequestID")%>' />
                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsMgrPreApproved")%>' />
                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                            <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%#Eval("StatusID")%>' />
                                                            <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                            <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("userId")%>' />
                                                            <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                            <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                            <asp:HiddenField ID="hdnActionDate" runat="server" Value='<%#Eval("actionDate")%>' />
                                                            <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                                            <asp:HiddenField ID="hdnOnBehalfOf" runat="server" Value='<%#Eval("onBeHalfOf")%>' />
                                                            <asp:HiddenField ID="hdnSendToQB" runat="server" Value='<%#Eval("sendToqb")%>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 300px">
                                                        <label>No data found. Expand your search criteria.</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                            <asp:HiddenField ID="hdnHeaderStartdate" runat="server" />
                                            <asp:HiddenField ID="hdnHeaderPurpose" runat="server" />
                                            <asp:HiddenField ID="hdnHeaderVendor" runat="server" />
                                            <asp:HiddenField ID="hdnHeaderOnBehalfOf" runat="server" />
                                            <br />
                                            <div class="message info" id="dvExpGridRecCount" runat="server">
                                                <table style="width: 70%">
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                No. of Expenses:&nbsp;<asp:Label ID="lblExpGridRowCount" runat="server"></asp:Label>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                Total Amount(<%=currencySymbol %>):&nbsp;<asp:Label ID="lblExpGridTotalAmount" runat="server"></asp:Label>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlAddEdit" runat="server" Style="display: none;">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="20%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHeading" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="80%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" Visible="true"></asp:Button>
                                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" Visible="true" OnClick="btnSubmit_Click" />
                                                                <asp:Button ID="btnConvert" runat="server" Text="Convert To Expense" CssClass="buttonnew-blue" Visible="false" OnClick="btnConvert_Click" />
                                                                <asp:Button ID="btnRemind" runat="server" Text="Remind" CssClass="buttonnew-blue" Visible="false" OnClick="btnRemind_Click" />
                                                                <asp:Button ID="btnCancelExp" runat="server" Text="Void Expense" CssClass="buttonnew-blue" OnClick="btnCancelExp_Click" />
                                                                <asp:Button ID="btnHistLoad" runat="server" OnClick="ShowHistory" Text="Show History" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnDownloadPDF" runat="server" Text="Download as PDF" CssClass="buttonnew-blue" OnClick="btnDownloadPDF_Click" />
                                                                <asp:Button ID="btnExpData" runat="server" OnClick="Export" Text="Print/Email" CssClass="buttonnew-blue"></asp:Button>
                                                                <asp:Button ID="btnReloadEditData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadEditData" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section style="padding: 20px;">
                                                    <div class="divfieldset">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvError" runat="server" style="color: Red; font-weight: bold">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td width="33%">
                                                                                <small>
                                                                                    <label>RequestID:</label>
                                                                                </small>
                                                                                <span style="font-size: 1.5em; font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold'">
                                                                                    <label>
                                                                                        &nbsp;
                                                                                        <%=Session["ReqID"]%>
                                                                                    </label>
                                                                                </span>
                                                                            </td>
                                                                            <td width="33%">
                                                                                <small>
                                                                                    <label>Status:</label>
                                                                                </small>
                                                                                <label>&nbsp;<span id="spnStatus" runat="server"><%=Session["Status"] %></span></label>
                                                                            </td>
                                                                            <td width="33%" align="right">
                                                                                <asp:HiddenField ID="hdnPreType" runat="server" />
                                                                                <asp:LinkButton ID="lknCmnt" runat="server" CommandArgument="test" OnClick="Comments"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;</asp:LinkButton>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="90%">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label><em>*</em>Manager Email:</label>
                                                                                    <small>
                                                                                        <br />
                                                                                        <asp:DropDownList ID="ddlManagerEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                            Width="183px">
                                                                                        </asp:DropDownList>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label><em>*</em>Start Date:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtTripStartDate" runat="server" class="date"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="cal3" runat="server" TargetControlID="txtTripStartDate"
                                                                                    Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                                <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                                <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                                <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                                <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                                <asp:HiddenField ID="hdnPreVendor" runat="server" />
                                                                                <asp:HiddenField ID="hdnAttMandtry" runat="server" />
                                                                                <asp:HiddenField ID="hdnQBAcctID" runat="server" />
                                                                                <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                                                <asp:HiddenField ID="hdnQBItemID" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label><em>*</em>Purpose:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPurpose" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>Payable To:</label></small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtOnBehalfOf" runat="server" onchange="javascript:return validateOnBehalfOf();"></asp:TextBox>
                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender6" runat="server" TargetControlID="txtOnBehalfOf"
                                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetVendors" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                    CompletionListItemCssClass="listItem"
                                                                                    CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated6">
                                                                                </cc1:AutoCompleteExtender>
                                                                                <asp:HiddenField ID="hdnOnBehalfOfCnt" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <asp:CheckBox ID="ChkSendToQB" runat="server" Text="Send to QB" TextAlign="Right" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <a id="lnk" href="javascript:void(0)" onclick="collapse('lnk', 'col')">[-] Hide details</a>
                                                    <div id="col" class="divfieldset" style="text-align: right; display: block">
                                                        <table width="54%" align="right">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvExpError1" runat="server" style="color: Red">
                                                                    </div>
                                                                    <div id="dvExpDetails" runat="server" style="width: 60%; float: right">
                                                                        <%--<asp:Button ID="lnkCCT" runat="server" OnClick="UploadCCT" Text="    Import Creditcard Transactions" CssClass="buttonnew-blue" />--%>
                                                                        <asp:Button ID="btnAddExpense" runat="server" OnClick="AddNewExpense" Text="   Add New Expense" CssClass="buttonnew-blue" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div class="clearfix">
                                                            <br />
                                                        </div>
                                                        <br />
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvExp" runat="server" AllowPaging="false" AutoGenerateColumns="False"
                                                                        Height="200px" GridLines="None" ShowHeader="true" OnRowEditing="gvExp_RowEditing"
                                                                        OnRowCommand="gvExp_RowCommand" OnRowDataBound="gvExp_RowDataBound"
                                                                        OnRowDeleting="gvExp_RowDeleting">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Action" HeaderStyle-Width="130px" ControlStyle-Width="15px">
                                                                                <ItemTemplate>
                                                                                    <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" OnCommand="EditNewDetails" ToolTip="Edit"
                                                                                        CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkview" CommandName="View" OnCommand="ViewNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>' ToolTip="View"><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex + ";" +Eval("expLineNo")%>'
                                                                                    CommandName="Delete" ToolTip="Delete"><img src="images/icons/dialog_cancel.png"/></asp:LinkButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="ExpenseType">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label>
                                                                                    <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label>
                                                                                    <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label>
                                                                                    <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label>
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' /></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" />
                                                                                    <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" />
                                                                                    <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" />
                                                                                    <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Expense Date">
                                                                                <ItemTemplate>
                                                                                    <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("fromDate")%>' Style="display: none" />
                                                                                    <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("toDate")%>' Style="display: none" />
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Pre-Amount">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label>
                                                                                    <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Total Amount (with Tax)" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label>
                                                                                    <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' Visible="false" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText=" City" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' />
                                                                                        <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label>
                                                                                    <asp:Label runat="server" ID="lblFromCity" Text='<%#Eval("fromCity")%>' Visible="false" />
                                                                                    <asp:Label runat="server" ID="lblFromOtherCity" Text='<%#Eval("otherFromCity")%>'
                                                                                        Visible="false" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Attachments">
                                                                                <ItemTemplate>
                                                                                    <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                    <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                        Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                    <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                    <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                    <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                    <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                    <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                    <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                    <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                                    <asp:HiddenField ID="hdnSeq1" runat="server" />
                                                                    <asp:HiddenField ID="hdnMaxApprLimit" runat="server" />
                                                                    <asp:HiddenField ID="hdnTotalPreAmnt" runat="server" />
                                                                    <asp:HiddenField ID="hdnTotalActAmnt" runat="server" />
                                                                    <asp:HiddenField ID="hdnCurrExpAmnt" runat="server" />
                                                                    <asp:HiddenField ID="hdnPPM" runat="server" />
                                                                    <asp:HiddenField ID="hdnCPM" runat="server" />
                                                                    <asp:HiddenField ID="hdnCmpCar" runat="server" />
                                                                    <asp:HiddenField ID="hdnPrsnCar" runat="server" />
                                                                    <asp:HiddenField ID="hdnFoodTax" runat="server" />
                                                                    <asp:HiddenField ID="hdnComments" runat="server" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="divfieldset">
                                                        <table style="font-weight: bold; width: 100%" align="center">
                                                            <tr>
                                                                <td style="text-align: right; width: 12%">
                                                                    <small>
                                                                        <label3>Pre-Expenses Total:&nbsp;</label3>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: left; width: 12%">
                                                                    <small>
                                                                        <label3> <%=preExpTotal %></label3>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: right; width: 12%">
                                                                    <small>
                                                                        <label3>Expenses Total:&nbsp;</label3>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: left; width: 12%">
                                                                    <small>
                                                                        <label3> <%=expTotal %></label3>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: right; width: 12%; color: Green">
                                                                    <small>
                                                                        <label3><asp:Label ID="lblGrandTotal" Text = "Grand Total:" runat="server"></asp:Label>&nbsp;</label3>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: left; width: 12%; color: Green">
                                                                    <small>
                                                                        <label3> <asp:Label ID="lblGrandTotalAmnt" runat="server"></asp:Label></label3>
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <asp:HiddenField ID="hdnExpVoid" runat="server" />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkFake" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                                            CancelControlID="btnClose" TargetControlID="lnkFake" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlComments" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 66%;">
                                                                <h2 class="pophead">Comments</h2>
                                                            </td>
                                                            <td align="right" style="width: 34%">
                                                                <asp:Button ID="btnCommentsSave" runat="server" Text="   Submit" CssClass="buttonnew-green" OnClick="btnCommentsSave_Click"></asp:Button>
                                                                <asp:Button ID="btnCommentsClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div style="overflow: hidden; overflow-y: scroll; height: 275px; width: 500px">
                                                            <div id="dvErrorc" runat="server" style="color: Red">
                                                            </div>
                                                            <br />
                                                            <div id="dvCommentsPop" runat="server">
                                                                <div id="widgetComments" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                </div>
                                                                <br />
                                                                <asp:TextBox ID="txtPopComments" runat="server" TextMode="MultiLine" Width="399px"
                                                                    Height="150px"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkFake_Cmt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Comments" runat="server" DropShadow="false" PopupControlID="pnlComments"
                                            TargetControlID="lnkFake_Cmt" BackgroundCssClass="modalBackground1" CancelControlID="btnCommentsClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 90%;">
                                                                <h2 class="pophead">Attachments</h2>
                                                            </td>
                                                            <td align="right" style="width: 10%">
                                                                <asp:Button ID="btnAttClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div id="dvAtt" runat="server">
                                                    </div>
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="380px"
                                                                    Height="400px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
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
                                                                </isx:CoolGridView>
                                                            </td>
                                                            <td>
                                                                <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <asp:Button ID="btnDeleteSelected" runat="server" Text="   Remove Selected" CssClass="buttonnew-blue"
                                                                    OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground3" CancelControlID="btnAttClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
                                            <div class="main-content" id="Div10" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="   Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnAttDelNo" runat="server" Text="   No" CssClass="buttonnew-blue" OnClick="RetainAttDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        Are you sure you want to delete this attachment?
                                                <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                            TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground4">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlVAddEdit" runat="server" DefaultButton="btnSaveExp"
                                            Style="display: none;">
                                            <div class="main-content" id="DivEdit" runat="server" style="margin: 0px 0px 0px -15px; background-color: White; padding: 0 0px 10px 0px; min-height: 200px; width: 110%;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="30%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblPopHeading" runat="server"></asp:Label></h2>
                                                            </td>
                                                            <td width="70%" align="right">
                                                                <asp:Button ID="btnSaveExp" runat="server" Text="   Save" CssClass="buttonnew-green" OnClick="btnSaveExp_Click" />
                                                                <asp:Button ID="btnDelete" runat="server" Text="   Delete" CssClass="buttonnew-blue" OnClick="btnDelete_Click" />
                                                                <asp:Button ID="btnAppend" runat="server" Text="   Done" CssClass="buttonnew-blue" OnClick="btnAppend_Click" />
                                                                <asp:Button ID="btnExpLineHistory" runat="server" Text="   History" CssClass="buttonnew-blue" OnClick="btnExpLineHistory_Click" />
                                                                <asp:Button ID="btnCancel" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnCancel_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td style="width: 60%">
                                                                    <b>
                                                                        <div id="dvExpError" runat="server" style="color: Red; font-weight: bold; text-align: left">
                                                                        </div>
                                                                    </b>
                                                                </td>
                                                                <td style="width: 40%; text-align: right">
                                                                    <div style="text-align: right">
                                                                        <asp:Button ID="btnPrev" runat="server" Text="   Previous" CssClass="buttonnew-blue" OnClick="PreviousExp" />
                                                                        <asp:Button ID="btnNext" runat="server" Text="   Next" CssClass="buttonnew-blue" OnClick="NextExp" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="divExptype" runat="server">
                                                                                    <div id="dvEditType" style="float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Expense Type
                                                                                            </label>
                                                                                        </small>
                                                                                        <br />
                                                                                        <asp:DropDownList ID="ddlEditExpType" runat="server" DataValueField="Description"
                                                                                            DataTextField="Description" Width="120px" AutoPostBack="true" OnSelectedIndexChanged="ddlExpType_SelectedIndexChanged">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditJob" runat="server" style="display: none; float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Job Code
                                                                                            </label>
                                                                                        </small>
                                                                                        <br />
                                                                                        <asp:DropDownList ID="ddlEditJobs" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            OnSelectedIndexChanged="ddlJobs_SelectedIndexChanged" Width="180px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditPhs" runat="server" style="display: none; float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Phase Code</label></small><br />
                                                                                        <asp:DropDownList ID="ddlEditPhases" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            OnSelectedIndexChanged="ddlPhases_SelectedIndexChanged" Width="180px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditJC" runat="server" style="display: none; float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Job Category</label></small><br />
                                                                                        <asp:DropDownList ID="ddlEditCategories" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            Width="180px">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="dvAccCode" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label><em>*</em>Account Name:</label></small><br />
                                                                                    <asp:DropDownList ID="ddlAccountCodes" runat="server" DataTextField="AccountClss" DataValueField="ExpCode" Width="150px"
                                                                                        AutoPostBack="true" OnSelectedIndexChanged="AccountCodeChanged">
                                                                                    </asp:DropDownList>
                                                                                    </small>
                                                                                    <%--<asp:Button ID="btnAddExpItem" runat="server" Text="+" CssClass="button-blue" Width="30px" Height="23px"
                                                                                        OnClick="AddExpenseItem" ToolTip="Click to add new Account Name" />--%>
                                                                                    <small>
                                                                                        <p>
                                                                                            <asp:CheckBox ID="chkReimb" runat="server" Text="Reimbursable" Enabled="false" TextAlign="right" />
                                                                                        </p>
                                                                                    </small>
                                                                                    <asp:HiddenField ID="hdnCodeValue6" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue5" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue4" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue3" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue2" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue1" runat="server" />
                                                                                    <asp:HiddenField ID="hdnExpItem" runat="server" />
                                                                                    <asp:HiddenField ID="hdnAcc" runat="server" />
                                                                                    <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                                                    <asp:HiddenField ID="hdnRctFileName" runat="server" />
                                                                                </div>
                                                                                <div id="dvClass" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Class
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:DropDownList ID="ddlClass" runat="server" Width="150px"></asp:DropDownList>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td width="100%">
                                                                                <div id="dvEditED" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Expense Date</label></small><br />
                                                                                    <asp:TextBox runat="server" ID="txtEditExpDate" Width="135px" class="date" /><cc1:CalendarExtender
                                                                                        ID="cal4" runat="server" TargetControlID="txtEditExpDate" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                    </cc1:CalendarExtender>
                                                                                </div>
                                                                                <div id="dvEditCV" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Cities visited</label></small><br />
                                                                                    <%--<asp:TextBox ID="txtCityVisited" runat="server" OnTextChanged="CitiesTextChanged"
                                                                                        AutoPostBack="true"></asp:TextBox>--%>
                                                                                    <asp:TextBox ID="txtCityVisited" runat="server"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtCityVisited"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCitiesWithOutReg" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated2">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                    <asp:HiddenField ID="hdnVendors" runat="server" />
                                                                                </div>
                                                                                <div id="dvEditFromcity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>From City</label></small><br />
                                                                                    <asp:TextBox ID="txtFromCity" runat="server"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender3" runat="server" TargetControlID="txtFromCity"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCitiesWithOutReg" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated3">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </div>
                                                                                <div id="dvEditToCity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>To City</label></small><br />
                                                                                    <asp:TextBox ID="txtToCity" runat="server"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender4" runat="server" TargetControlID="txtToCity"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCitiesWithOutReg" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated4">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </div>
                                                                                <div id="dvEditFD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>From Date</label></small><br />
                                                                                    <asp:TextBox ID="txtEditFromdate" runat="server" Width="170px" class="date"></asp:TextBox><cc1:CalendarExtender
                                                                                        ID="cal5" runat="server" TargetControlID="txtEditFromdate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                    </cc1:CalendarExtender>
                                                                                </div>
                                                                                <div id="dvEditTD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>To Date</label></small><br />
                                                                                    <asp:TextBox ID="txtEditTodate" runat="server" Width="170px" class="date"></asp:TextBox><cc1:CalendarExtender
                                                                                        ID="cal6" runat="server" TargetControlID="txtEditTodate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                    </cc1:CalendarExtender>
                                                                                </div>
                                                                                <div id="dvLocalLocation" runat="server" style="float: left; display: none">
                                                                                    <small>
                                                                                        <label>
                                                                                            Location</label></small><br />
                                                                                    <asp:TextBox ID="txtEditLocalLocation" runat="server" Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvChkOutOfCity" runat="server" style="width: 16%; float: left; display: none">
                                                                                    <asp:CheckBox ID="chkIsOutOfCity" runat="server" Text="Out Of City" TextAlign="Right"
                                                                                        onclick="javascript: onchangeoutofcity('chkIsOutOfCity');" />

                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="60%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVendor" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Vendor</label></small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtPrefVendor" runat="server" onchange="javascript:return getVendAgentInit(this);"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender5" runat="server" TargetControlID="txtPrefVendor"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetVendors" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated5">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </div>
                                                                                <div id="dvEditAgName" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Agent Name</label></small><br />
                                                                                    <asp:TextBox ID="txtEditAgentName" runat="server"></asp:TextBox>
                                                                                    <%-- <asp:DropDownList ID="ddlEditAgName" runat="server" DataTextField="Description" DataValueField="Description"
                                                                                        Width="130px">
                                                                                    </asp:DropDownList>--%>
                                                                                </div>
                                                                                <div id="dvEditItNo" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Itinary Number</label></small><br />
                                                                                    <asp:TextBox ID="txtEditItNo" runat="server" Width="135px"></asp:TextBox>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditCompCar" runat="server" style="display: none; float: left;">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Type of Car</label></small><br />
                                                                                    <asp:DropDownList ID="ddlCompCar" runat="server" Width="140px" onchange='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'>
                                                                                        <asp:ListItem>Company Car</asp:ListItem>
                                                                                        <asp:ListItem>Personal Car</asp:ListItem>
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditTT" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Total Trip</label></small><br />
                                                                                    <asp:TextBox ID="txtEditTotTrip" runat="server" Width="130px" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditLN" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            LessNorm</label></small><br />
                                                                                    <asp:TextBox ID="txtEditLNorm" runat="server" Width="130px" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditReimbt" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Reimbursement</label></small><br />
                                                                                    <asp:TextBox ID="txtEditReimbt" runat="server" Width="130px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditSalesTax" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>Sales Tax</label></small><br />
                                                                                    <asp:TextBox ID="txtEditSalesTax" runat="server" Width="65px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditFoodTax" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>Food Tax</label></small><br />
                                                                                    <asp:TextBox ID="txtEditFoodTax" runat="server" Width="65px" onchange="javascript:return validateFoodTax();"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditPA" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Pre-Amount</label></small><br />
                                                                                    <asp:TextBox runat="server" ID="txtEditPreAmnt" Width="130px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditAmt" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Total Amount (with Tax)</label></small><br />
                                                                                    <asp:TextBox runat="server" ID="txtEditActAmnt" Width="130px" onkeyup='javascript:CalcExpenseBudget(1);' onchange='javascript:CalcExpenseBudget(2);' />
                                                                                </div>
                                                                                <div id="dvEditPM" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Payment Mode</label></small><br />
                                                                                    <asp:DropDownList ID="ddlEditPaymentType" runat="server" DataTextField="Description"
                                                                                        DataValueField="Description" Width="150px">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditCmt" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Description</label></small><br />
                                                                                    <asp:TextBox runat="server" ID="txtEditComments" TextMode="MultiLine" Width="170px" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="vertical-align: top; width: 35%">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Budget</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtExpBudg" CssClass="budgfld" />
                                                                                            <asp:HiddenField ID="hdnExpYear" runat="server" />
                                                                                            <asp:HiddenField ID="hdnExpRowTotAmnt" runat="server" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Current Balance</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtExpCurrBal" CssClass="budgfld" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Remaining$</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtExpRemBudg" CssClass="budgfld" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Bal. After Expense</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtExpBalAfter" CssClass="budgfld" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="vertical-align: top; width: 65%">
                                                                    <table class="tableatt">
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td colspan="2">
                                                                                                <div style="float: left">
                                                                                                    <small>
                                                                                                        <label>Add Attachment</label></small>
                                                                                                    <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server"
                                                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete"
                                                                                                        OnClientUploadComplete="showConfirmation" Style="border: 1px solid #aaaaaa" Width="250px" />
                                                                                                </div>
                                                                                                <div style="padding-left: 0.5em">
                                                                                                    <a href="#" id="tooltip">
                                                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                                        <span><small>
                                                                                                            <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB.</label></small>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                                <br />
                                                                                                <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                                                <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                                                </asp:Label>
                                                                                                <asp:Label ID="lblEditAtt" runat="server" Style="display: none"></asp:Label>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="padding-top:10px">
                                                                                                <asp:LinkButton ID="LnkcurrAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                                    Text="View Current attachments" Style="margin-top: 13px; width: 145px"></asp:LinkButton>
                                                                                                <asp:Label ID="lblEAttMsg" runat="server"></asp:Label></td>
                                                                                            <td style="padding-top:10px">
                                                                                                <asp:LinkButton ID="lnkShowDraft" runat="server" CommandArgument="test" OnClick="DisplayDrafts"
                                                                                                    Width="115px" Text="Attach from Drafts" ToolTip="Click to import attachments from Drafts"
                                                                                                    CssClass="button button-blue"></asp:LinkButton></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="main-content" id="DivView" runat="server" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: auto; width: 100%">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="40%" style="vertical-align: top">
                                                                <h2 class="pophead">View Expense</h2>
                                                            </td>
                                                            <td width="60%" align="right">
                                                                <asp:Button ID="btnExpLineHistoryView" runat="server" Text="   History" CssClass="buttonnew-blue" OnClick="btnExpLineHistory_Click" />
                                                                <asp:Button ID="btnVCancel" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnVCancel_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <div style="text-align: right">
                                                            <asp:Button ID="btnVPrev" runat="server" Text="   Previous" CssClass="buttonnew-blue" OnClick="ViewPreviousExp" />
                                                            <asp:Button ID="btnVNext" runat="server" Text="   Next" CssClass="buttonnew-blue" OnClick="ViewNextExp" />
                                                        </div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVType" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Expense Type:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblddlVExpType" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVJob" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Job Code:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblddlVJobCd" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPhs" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Phase Code:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVPhcd" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVJC" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Job Category:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVCatCode" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <%--<div id="dvEditVItem" runat="server" style="width: 15%; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Account Name:</label></small>
                                                                                    <asp:TextBox ID="lblVExpCd" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>--%>
                                                                                <div id="dvVAccCode" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Account Name:</label></small><br />
                                                                                    <asp:TextBox ID="txtVAccCode" runat="server"></asp:TextBox>
                                                                                    <small>
                                                                                        <p>
                                                                                            <asp:CheckBox ID="chkVReimb" runat="server" Enabled="false" Text="Reimbursable" TextAlign="Right" />
                                                                                        </p>
                                                                                    </small>
                                                                                </div>
                                                                                <div id="dvVClass" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Class:</label></small><br />
                                                                                    <asp:TextBox ID="txtVClass" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVED" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Expense Date:</label></small><br />
                                                                                    <asp:TextBox ID="lblVDate" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVCV" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Cities visited:</label></small><br />
                                                                                    <asp:TextBox ID="lblVCity" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVFromcity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            From City:</label></small><br />
                                                                                    <asp:TextBox ID="lblVFromcity" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVToCity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            To City:</label></small><br />
                                                                                    <asp:TextBox ID="lblVTocity" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVFD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            From Date:</label></small><br />
                                                                                    <asp:TextBox ID="lblVFromdate" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVTD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            To Date:</label></small><br />
                                                                                    <asp:TextBox ID="lblVTodate" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvVLocalLocation" runat="server" style="float: left; display: none">
                                                                                    <small>
                                                                                        <label>
                                                                                            Location:</label></small><br />
                                                                                    <asp:TextBox ID="lblEditLocalLocation" runat="server"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvVChkOutOfCity" runat="server" style="float: left; display: none">
                                                                                    <asp:CheckBox ID="chkVIsOutOfCity" runat="server" Text="Out Of City" TextAlign="Right"
                                                                                        onclick="javascript: onchangeoutofcity('chkIsOutOfCity');" />

                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="60%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVPreVendor" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Vendor:</label></small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVPreVendor" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVAgName" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Agent Name:</label></small><br />
                                                                                    <asp:TextBox ID="lblAgName" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVItNo" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Itinarary Number:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVItNo" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvVEditCompCar" runat="server" style="display: none; float: left;">
                                                                                    <small>
                                                                                        <label>
                                                                                            Type of Car:</label></small><br />
                                                                                    <asp:DropDownList ID="lblVCompCar" runat="server">
                                                                                        <asp:ListItem>Company Car</asp:ListItem>
                                                                                        <asp:ListItem>Personal Car</asp:ListItem>
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditVTT" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Total Trip:</label></small><br />
                                                                                    <asp:TextBox ID="lblVTotTrip" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVLN" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            LessNorm:</label></small><br />
                                                                                    <asp:TextBox ID="lblVLNorm" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVReimbt" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Reimbursement:</label></small><br />
                                                                                    <asp:TextBox ID="lblVReimbt" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVSalesTax" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>Sales Tax:</label></small><br />
                                                                                    <asp:TextBox ID="lblVSalesTax" runat="server" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVFoodTax" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>Food Tax:</label></small><br />
                                                                                    <asp:TextBox ID="lblVFoodTax" runat="server" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPA" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Pre-Amount:</label></small><br />
                                                                                    <asp:TextBox ID="lblVPreAmt" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVAmt" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Total Amount (with Tax):</label></small><br />
                                                                                    <asp:TextBox ID="lblVActAmt" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPM" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Payment Mode:</label></small><br />
                                                                                    <asp:TextBox ID="lblVPayMode" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="Div3" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Description:</label></small><br />
                                                                                    <asp:TextBox ID="lblVcomnts" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                        Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="vertical-align: top; width: 35%">
                                                                    <table>
                                                                        <%-- <tr>
                                                                            <td>
                                                                                <div class="subheader">
                                                                                    <h4>Budget Details</h4>
                                                                                </div>
                                                                            </td>
                                                                        </tr>--%>
                                                                        <tr>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Budget</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpBudg" CssClass="budgfld" ReadOnly="true" />
                                                                                            <asp:HiddenField ID="hdnVYear" runat="server" />
                                                                                            <asp:HiddenField ID="hdnVExpRowTotAmnt" runat="server" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Current Balance</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpCurrBal" CssClass="budgfld" ReadOnly="true" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Remaining$</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpRemBudg" CssClass="budgfld" ReadOnly="true" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Bal. After Expense</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpBalAfter" CssClass="budgfld" ReadOnly="true" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="vertical-align: top; width: 65%">
                                                                    <table>
                                                                        <%--<tr>
                                                                            <td>
                                                                                <div class="subheader">
                                                                                    <h4>Attachment Details</h4>
                                                                                </div>
                                                                            </td>
                                                                        </tr>--%>
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                    <asp:LinkButton ID="LinkViewAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                        Text="View Current Attachments" CssClass="button button-blue" Width="145px"></asp:LinkButton>
                                                                                    <asp:Label ID="lblAttMsg" runat="server"></asp:Label>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkVEdit" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Edit" runat="server" DropShadow="false" PopupControlID="pnlVAddEdit"
                                            TargetControlID="lnkVEdit" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlCC" runat="server" Style="display: none">
                                            <div id="dvCCT" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 1000px; height: 518px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 70%;">
                                                                <h2 class="pophead">Credit Card Transactions</h2>
                                                            </td>
                                                            <td align="right" style="width: 30%">
                                                                <asp:Button ID="btnImport" runat="server" Text="   Import Transactions" CssClass="buttonnew-blue" OnClick="btnImport_Click" />&nbsp;&nbsp;&nbsp;
                                                            <asp:Button ID="btnCCClose" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnCCClose_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="overflow: hidden; overflow-y: scroll; overflow-x: scroll; height: 425px; width: 1000px">
                                                        <div id="dvErrCC" runat="server" style="color: Red">
                                                            Files of type .QIF, .CSV and .QBT are accepted.
                                                        </div>
                                                        <div id="dvfUpdCC">
                                                            <br />
                                                            <asp:FileUpload ID="fUpdCC" runat="server" />&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <asp:Button ID="btnUpload" runat="server" Text="   Import Transactions" CssClass="buttonnew-blue" OnClick="btnUpload_Click" />
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div id="dvGirdCC">
                                                            <isx:CoolGridView ID="gvCC" runat="server" AutoGenerateColumns="false" Width="100%" Height="300px"
                                                                GridLines="None" ShowHeader="true" OnRowDataBound="gvCC_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField>
                                                                        <HeaderTemplate>
                                                                            <asp:CheckBox ID="checkAll" runat="server" onclick="javascript:return ChangeAllCheckBoxStates(this);" />
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkgvQIF" runat="server" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Account Name">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                                            <asp:DropDownList ID="ddlCCExpItems" runat="server" DataTextField="Description" DataValueField="Description"
                                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlCCExpItems_SelectedIndexChanged">
                                                                            </asp:DropDownList>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Posted Date">
                                                                        <ItemTemplate>
                                                                            <%# Eval("Posted Date")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description">
                                                                        <ItemTemplate>
                                                                            <%# Eval("Payee")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Reference Amount">
                                                                        <ItemTemplate>
                                                                            <%# Eval("Amount")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                            <br />
                                                            <br />
                                                        </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCC" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_CC" runat="server" DropShadow="false" PopupControlID="pnlCC"
                                            TargetControlID="lnkCC" BackgroundCssClass="modalBackground1" CancelControlID="btnCCClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div1" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="   Yes" CssClass="buttonnew-blue" />&nbsp;&nbsp;&nbsp;
                                                            <asp:Button ID="btnNo" runat="server" Text="   No" CssClass="buttonnew-blue" OnClick="RetainDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>
                                                                Are you sure you want to delete this item?
                                                            </label>
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
                                        <asp:Panel ID="pnlHist" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 550px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">History</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnHistClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <isx:CoolGridView ID="gvHist" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                            Width="730px" Height="300px" OnRowDataBound="gvHist_RowDataBound">
                                                            <Columns>
                                                                <%--<asp:TemplateField HeaderText="Date" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <ItemTemplate>
                                                                        <%# Convert.ToDateTime(Eval("Date"))%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Details" HeaderStyle-Width="400px" ControlStyle-Width="400px">
                                                                    <ItemTemplate>
                                                                        <%#Eval("Details")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                 <asp:TemplateField HeaderText="Owner" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <ItemTemplate>
                                                                        <%#Eval("Manager")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>--%>
                                                                <asp:TemplateField HeaderStyle-Width="160px" ControlStyle-Width="160px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkDate" runat="server" Text="Date" CommandArgument="UpdatedOn"
                                                                            OnCommand="SortReqMastHistExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <%# Convert.ToDateTime(Eval("UpdatedOn"))%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkColType" runat="server" Text="Type" CommandArgument="colType"
                                                                            OnCommand="SortReqMastHistExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lblColType" runat="server" Text='<%#Eval("colType")%>'></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Old" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <ItemTemplate>
                                                                        <%#Eval("OldStatus")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="New" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <ItemTemplate>
                                                                        <%#Eval("NStatus")%>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 200px">
                                                                    <label>
                                                                        No history to display</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkHist" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender runat="server" ID="popHist" DropShadow="false" PopupControlID="pnlHist"
                                            TargetControlID="lnkHist" BackgroundCssClass="modalBackground1" CancelControlID="btnHistClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlExportData" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">Export Data
                                                                </h2>
                                                            </td>
                                                            <td width="50%" style="text-align: right">
                                                                <asp:Button ID="btnExpDataclose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvExpDataMsg" runat="server">
                                                        </div>
                                                        <br />
                                                        <asp:Button ID="btnPrintPO" runat="server" Text="   Print" CssClass="buttonnew-blue" OnClick="PrintPO" />
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnExpEmail" runat="server" Text="   Email" CssClass="buttonnew-blue" OnClick="ExportAndEmail" />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkExportData" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender runat="server" ID="popExpData" DropShadow="false" PopupControlID="pnlExportData"
                                            TargetControlID="lnkExportData" BackgroundCssClass="modalBackground1" CancelControlID="btnExpDataclose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDraftAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 60%;">
                                                                <h2 class="pophead">Drafts</h2>
                                                            </td>
                                                            <td align="right" style="width: 40%">
                                                                <asp:Button ID="btnDftOk" runat="server" OnClick="SelectDrafts" Text="   Ok" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnDraftsClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div id="dvDrftErr" runat="server">
                                                    </div>
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <isx:CoolGridView ID="gvDrafts" runat="server" Width="380px" Height="250px" AutoGenerateColumns="false"
                                                                    GridLines="None" ShowHeader="true" ShowFooter="true" OnRowDataBound="gvDrafts_RowDataBound">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Attachment">
                                                                            <ItemTemplate>
                                                                                <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdAtt" />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Description">
                                                                            <ItemTemplate>
                                                                                <%#Eval("compCode")%>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Select All">
                                                                            <HeaderTemplate>
                                                                                <asp:CheckBox ID="checkAll" runat="server" CssClass="chkHeader" />
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <asp:CheckBox ID="chkgvDft" runat="server" CssClass="chkItem" />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <label>
                                                                            <div style="width: 200px">
                                                                            </div>
                                                                        </label>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </td>
                                                            <td>
                                                                <div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <asp:HiddenField ID="hdnAttIdsRet" runat="server" />
                                                    <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                                    <asp:HiddenField ID="hdnisExpLineDisplayed" runat="server" />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDraftAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDraftsAtt" runat="server" DropShadow="false" PopupControlID="pnlDraftAtt"
                                            TargetControlID="lnkDraftAtt" BackgroundCssClass="modalBackground3" CancelControlID="btnDraftsClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlPOAddEdit" runat="server" Style="display: none;">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; width: auto; height: 518px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="20%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblPOHeading" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="80%" align="right">
                                                                <asp:Button ID="btnPOSave" runat="server" Text="   Save" CssClass="buttonnew-green" Visible="true" OnClick="btnPOSave_Click"></asp:Button>
                                                                <asp:Button ID="btnPOSubmit" runat="server" Text="   Submit" CssClass="buttonnew-blue" Visible="true" OnClick="btnPOSubmit_Click" />
                                                                <asp:Button ID="btnPORemind" runat="server" Text="   Remind" CssClass="buttonnew-blue" Visible="false" OnClick="btnRemind_Click" />
                                                                <asp:Button ID="btnCancelPO" runat="server" Text="   Cancel PO" CssClass="buttonnew-blue" OnClick="btnCancelPO_Click" />
                                                                <asp:Button ID="Button1" runat="server" OnClick="ShowHistory" Text="   Show History" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnPODownloadPDF" runat="server" Text="   Download as PDF" CssClass="buttonnew-blue" OnClick="btnDownloadPDF_Click" />
                                                                <asp:Button ID="btnPOExportData" runat="server" OnClick="Export" Text="   Print/Email" CssClass="buttonnew-blue"></asp:Button>
                                                                <asp:Button ID="btnPORefresh" runat="server" Text="   Refresh" CssClass="buttonnew-blue" OnClick="ReloadPOData" />
                                                                <asp:Button ID="btnPOClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section style="padding: 20px;">
                                                    <div class="divfieldset" style="width: auto">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="3">
                                                                    <div id="dvPoError" runat="server" style="color: Red; font-weight: bold">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        PO Number:&nbsp;</label>
                                                                                </small>
                                                                                <span style="font-size: 1.5em; font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold'">
                                                                                    <label><%=Session["PONum"]%></label>
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>Status:</label>
                                                                                </small>
                                                                                <label>&nbsp;<span id="spnPOStatus" runat="server"><%=Session["Status"] %></span></label>
                                                                            </td>
                                                                            <td>
                                                                                <%--<asp:HiddenField ID="hdnPOPrint" runat="server" />--%>
                                                                                <asp:LinkButton ID="lnkPOComments" runat="server" CommandArgument="test" OnClick="Comments"
                                                                                    CssClass="button-skyblue"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Company Code:
                                                                                    </label>
                                                                                </small><i>
                                                                                    <label><%=Session["CompCode"] %></label></i></td>
                                                                            <td>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Shipping Address:
                                                                                                </label>
                                                                                            </small><i>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblShipAddr" runat="server"></asp:Label></label></i>
                                                                                            <cc1:HoverMenuExtender ID="hveShipAddr" runat="server" TargetControlID="btnShipAddress" PopupControlID="pnlShipAddr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                            <asp:Panel ID="pnlShipAddr" runat="server">
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
                                                                                            <asp:Label ID="btnShipAddress" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="&nbsp;&nbsp;...&nbsp;&nbsp;"></asp:Label>
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
                                                                                            <asp:Panel ID="pnlBillAddr" runat="server">
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
                                                                                            <asp:Label ID="btnBillAddr" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="&nbsp;&nbsp;...&nbsp;&nbsp;"></asp:Label>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 100%">
                                                                    <table style="width: 100%">
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label><b><em>*</em></b>Manager Email</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlPOMgrEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                    Width="150px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label><b><em>*</em></b>Start Date:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPOTripStrtDate" runat="server" Width="90px" CssClass="date"></asp:TextBox>
                                                                                <cc1:CalendarExtender ID="cal7" runat="server" TargetControlID="txtPOTripStrtDate"
                                                                                    Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                </cc1:CalendarExtender>
                                                                                <asp:HiddenField ID="hdPOCurrDate" runat="server" />
                                                                                <asp:HiddenField ID="hdnYear" runat="server" />
                                                                                <asp:HiddenField ID="hdnTax" runat="server" />
                                                                                <asp:HiddenField ID="HiddenField5" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label><b><em>*</em></b>Select Vendor:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:DropDownList ID="ddlPreVendor" runat="server" DataTextField="PreferredVendor"
                                                                                    DataValueField="PreferredVendor" Width="150px" onchange="javascript:return GetVendDisc(this);">
                                                                                </asp:DropDownList>
                                                                                <asp:HiddenField ID="hdnVendDiscount" runat="server" />
                                                                                <asp:HiddenField ID="hdnVendPromoCode" runat="server" />
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        <b><em>*</em></b>Purpose:</label>
                                                                                </small>
                                                                                <br />
                                                                                <asp:TextBox ID="txtPoPurpose" runat="server"></asp:TextBox>
                                                                            </td>
                                                                            <td>
                                                                                <small>
                                                                                    <label>Job</label></small><br />
                                                                                <asp:DropDownList ID="ddlJobs" runat="server" Width="150px"></asp:DropDownList>
                                                                            </td>
                                                                            <td style="vertical-align: bottom">
                                                                                <asp:Button ID="btnAttach" runat="server" Text="   Attachments" CssClass="buttonnew-blue" OnClick="btnAttach_Click" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <a id="A1" href="javascript:void(0)" onclick="collapse('A1', 'Div8')">[-] Hide details</a>
                                                    <div id="Div8" class="divfieldset" style="width: auto; display: block">
                                                        <table width="80%">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvPoDError" runat="server" style="color: Red">
                                                                    </div>
                                                                    <div id="dvPODetails" runat="server" style="width: 12%; float: right">
                                                                        <table>
                                                                            <tr>
                                                                                <td align="center">
                                                                                    <asp:Button ID="btnAddPoExpense" runat="server" Text="   Add New PO Line" CssClass="buttonnew-blue" OnClick="AddNewPo" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                    <div id="dvpoHistDetails" runat="server" style="width: 20%; float: right">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div class="clearfix">
                                                            <br />
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvPO" runat="server" AllowPaging="false" AutoGenerateColumns="false" Height="200px"
                                                                        GridLines="None" OnRowEditing="gvPO_RowEditing" OnRowDeleting="gvPO_RowDeleting"
                                                                        OnRowCommand="gvPO_RowCommand" OnRowDataBound="gvPO_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Action">
                                                                                <ItemTemplate>
                                                                                    <asp:LinkButton runat="server" ID="lnkPOEdit" CommandName="Edit" Text="Edit" OnCommand="EditPODetails" ToolTip="Edit"
                                                                                        CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkPOview" Text="View" CommandName="View" OnCommand="ViewPODetails" ToolTip="View"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkPODelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>' ToolTip="Delete"
                                                                                    OnCommand="DeletePO"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Line No">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("expLineNo")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Line Seq">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("poLineSeq")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Department">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblDept" runat="server" Text='<%# Eval("deptCode")%>'></asp:Label></label>
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
                                                                            <asp:TemplateField HeaderText="Item Code">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblItemCode" runat="server" Text='<%#Eval("itemCode") %>'></asp:Label>
                                                                                        <asp:LinkButton ID="lnkItemCode" runat="server" Text='<%#Eval("itemCode") %>' OnCommand="DisplayItemNotes"
                                                                                            CommandArgument='<%#Eval("itemCode") + ";" + Eval("othercity") %>' ToolTip="Click to view Item Notes"></asp:LinkButton>
                                                                                    </label>
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
                                                                            <asp:TemplateField HeaderText="PoAmnt">
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("preamount")%>'></asp:Label></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="InvAmnt">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("actualAmount ")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Budget">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("budget")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="BalanceAfterPO">
                                                                                <ItemTemplate>
                                                                                    <label><%# Eval("balAfterPo")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="status">
                                                                                <ItemTemplate>
                                                                                    <asp:Label ID="lblPOColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label>
                                                                                    <asp:HiddenField ID="hdnRowStatus" runat="server" Value='<%# Eval("status") %>' />
                                                                                    <asp:HiddenField ID="hdnRowStatusID" runat="server" Value='<%# Eval("statusId") %>' />
                                                                                    <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit")%>' />
                                                                                    <asp:HiddenField ID="hdnItemNote" runat="server" Value='<%#Eval("othercity") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <asp:HiddenField runat="server" ID="hdnPORowTotAmnt1" />
                                                        <asp:HiddenField runat="server" ID="hdnPORowTotAmnt" />
                                                        <asp:HiddenField runat="server" ID="hdnPOOldAmount" />
                                                        <asp:HiddenField runat="server" ID="hdnPOOldExpItem" />
                                                        <asp:HiddenField runat="server" ID="hdnIsPOEdit" />
                                                        <asp:HiddenField ID="HiddenField2" runat="server" />
                                                        <asp:HiddenField ID="HiddenField3" runat="server" />
                                                        <asp:HiddenField ID="HiddenField4" runat="server" />
                                                        <asp:HiddenField ID="hdnManagerGrpCode" runat="server" />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="pop_EditPO" runat="server" DropShadow="false" PopupControlID="pnlPOAddEdit"
                                            CancelControlID="btnPOClose" TargetControlID="lnkPO" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddPO" runat="server" Style="display: none" DefaultButton="btnSavePOItem">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 700px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblPOEditHead" runat="server"></asp:Label></h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnDeletePOItem" runat="server" Text="   Delete" CssClass="buttonnew-blue" OnClick="DeletePOLineItem" />
                                                                <asp:Button ID="btnSavePOItem" runat="server" Text="   Save" CssClass="buttonnew-green" OnClick="btnSavePO_Click" />
                                                                <asp:Button ID="btnAppendPO" runat="server" Text="   Done" CssClass="buttonnew-blue" OnClick="btnAppendPO_Click" />
                                                                <asp:Button ID="btnClosePOItem" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnClosePOItem_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvPOErrMsg" runat="server" style="font-size: 1.15em; color: Red">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table class="tablemain">
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
                                                                                            <div id="dvCommts" runat="server">
                                                                                                <small>
                                                                                                    <label>
                                                                                                        <em>*</em>Comments:
                                                                                                    </label>
                                                                                                </small>
                                                                                                <br />
                                                                                                <asp:TextBox ID="txtchangeComnts" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="lbl cell" colspan="3">
                                                                                            <small>
                                                                                                <label>
                                                                                                    <em>*</em>Account Name:</label></small>

                                                                                            <br />
                                                                                            <asp:DropDownList ID="ddlExpItem" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlPOExpItem_SelectedIndexChanged" Width="170px">
                                                                                            </asp:DropDownList></td>
                                                                                        <td class="lbl cell" colspan="3"><small>
                                                                                            <label>
                                                                                                <em>*</em>Account Code:</label></small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtAccCode" runat="server" ReadOnly="true" Width="70px"></asp:TextBox>
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
                                                                                                    <em>*</em>ItemCode:</label></small>
                                                                                            <br />
                                                                                            <asp:DropDownList ID="ddlItemCode" runat="server" DataValueField="ItemCode" DataTextField="ItemCode"
                                                                                                OnSelectedIndexChanged="ddlItemCode_SelectedIndexChanged" AutoPostBack="true">
                                                                                            </asp:DropDownList>
                                                                                            <asp:Button ID="btnAddItemCode" runat="server" Text="+" CssClass="button-blue" Width="30px" Height="23px"
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
                                                                                            <asp:TextBox ID="txtVendPtNo" runat="server" Width="70px" onchange="javascript: getVendItemAgrmntInit('ddlPreVendor');"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnAgreementCnt" runat="server" />
                                                                                            <br />
                                                                                            <asp:LinkButton ID="lnkAgreement" runat="server" Text="View Agreement" OnClick="lnkAgreement_Click"></asp:LinkButton>
                                                                                        </td>
                                                                                        <td class="lbl cell">
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
                                                                                                <br />
                                                                                                <asp:TextBox ID="txtReqDelDate" runat="server" Width="100px" class="date"></asp:TextBox><cc1:CalendarExtender
                                                                                                    ID="cal10" runat="server" TargetControlID="txtReqDelDate" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                                                </cc1:CalendarExtender></td>
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
                                                                                                    Estimated shipping Cost:
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
                                                                                                <asp:CheckBox ID="chkDisc" runat="server" Text="Include Vendor Discount" TextAlign="Left" onclick="javascript:CalcBudgetDetails();" />
                                                                                            </small></td>
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
                                                                                                <asp:CheckBox ID="chkCalTax" runat="server" onclick="javascript:CalcBudgetDetails();" Text="Calculate TaxAmt" />
                                                                                            </small>
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
                                                                                                    <em>*</em>Line Amount:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtPoAmount" runat="server" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td>&nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table style="background-color: #499CF4">
                                                                                    <tr>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    <em>*</em>Budget:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtBudget" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    <em>*</em>Current Balance:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtCurrBal" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    <em>*</em>Remaining $:
                                                                                                </label>
                                                                                            </small>
                                                                                            <br />
                                                                                            <asp:TextBox ID="txtRemain" runat="server" BackColor="#9AA3AB" Width="70px"></asp:TextBox>
                                                                                        </td>
                                                                                        <td class="lbl">
                                                                                            <small>
                                                                                                <label style="color: Black">
                                                                                                    <em>*</em>Balance after PO:
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
                                            TargetControlID="lnkAddPO" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlPOAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div7" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnPOAlertYes" runat="server" OnClick="DeletePOItem" Text="   Yes" CssClass="buttonnew-blue" />&nbsp;
                                                            <asp:Button ID="btnPOAlertNo" runat="server" Text="   No" CssClass="buttonnew-blue"
                                                                OnClick="RetainDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <br />
                                                        <small>
                                                            <label>
                                                                Are you sure you want to delete this item?</label></small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkPOAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popPOAlert" runat="server" DropShadow="false" PopupControlID="pnlPOAlert"
                                            TargetControlID="lnkPOAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnPOAlertNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlMultEmail" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Send Email</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnNExpEmail" runat="server" Text="   Email" CssClass="buttonnew-blue" Visible="true" OnClick="ValidateEmail"></asp:Button>&nbsp;
                                                            <asp:Button ID="btnEmailClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />&nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div class="message info">
                                                            <label><em>*</em>Seperate multiple email addresses with a comma ( , ).</label>
                                                        </div>
                                                        <div id="DivEmailErr" runat="server">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <asp:TextBox ID="txtMulEmail" runat="server" TextMode="MultiLine" placeholder="Enter Email" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',');"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:LinkButton ID="lnkCCEmail" runat="server" OnClick="AddCCEmail" CssClass="button button-blue"
                                                                        Text="AddCC"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </td>
                                                                <td>
                                                                    <div id="dvCCEmail" runat="server" style="display: none">
                                                                        <asp:TextBox ID="txtCCEmail" runat="server" TextMode="MultiLine" placeholder="Enter CC Email" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',');">
                                                                        </asp:TextBox>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkEmail" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popMulEmail" runat="server" DropShadow="false" PopupControlID="pnlMultEmail"
                                            CancelControlID="btnEmailClose" TargetControlID="lnkEmail" BackgroundCssClass="modalBackground3">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlCancelPO" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div9" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYesCancelPO" runat="server" OnClick="ConfirmCancelPO" Text="   Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNoCancelPO" runat="server" Text="   No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <br />
                                                        <label>
                                                            <small>
                                                                <asp:Label ID="lblConfirm" runat="server"></asp:Label>
                                                            </small>
                                                        </label>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkConfirmCancelPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popConfirmCancelPO" runat="server" DropShadow="false"
                                            PopupControlID="pnlCancelPO" TargetControlID="lnkConfirmCancelPO" BackgroundCssClass="modalBackground1"
                                            CancelControlID="btnNoCancelPO">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlReason" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div5" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 40%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 60%">
                                                                <asp:Button ID="btnReason" runat="server" OnClick="CnfrmwithReason" Text="   Cancel PO" CssClass="buttonnew-blue" />&nbsp;
                                                            <asp:Button ID="btnReasonClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvReasonError" runat="server">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Select Reason:</label></small>
                                                                    <asp:DropDownList ID="ddlReasonsCodes" runat="server" DataTextField="Description"
                                                                        DataValueField="CodeKey">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkReasonCd" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popConfirmReson" runat="server" DropShadow="false" PopupControlID="pnlReason"
                                            TargetControlID="lnkReasonCd" BackgroundCssClass="modalBackground1" CancelControlID="btnReasonClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlPastDWarn" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert!</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnWarnYes" runat="server" OnClick="SavePastDate" Text="   Yes" CssClass="buttonnew-blue" />&nbsp;
                                                            <asp:Button ID="btnWarnNo" runat="server" Text="   No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>
                                                            PODATE is past date, are you sure you want to proceed?</label></small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkWarn" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="pop_DWarn" runat="server" DropShadow="false" PopupControlID="pnlPastDWarn"
                                            TargetControlID="lnkWarn" BackgroundCssClass="modalBackground1" CancelControlID="btnWarnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnldelAddedDrft" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert!</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnDelDrft" runat="server" OnClick="ConfirmDraftDel" Text="   Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCancelDelDrft" runat="server" Text="   No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>
                                                            Your changes will be lost if you close without saving! Are you sure you want to close?</label></small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDelAddDrft" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlertDrftDel" runat="server" DropShadow="false" PopupControlID="pnldelAddedDrft"
                                            TargetControlID="lnkDelAddDrft" BackgroundCssClass="modalBackground3" CancelControlID="btnCancelDelDrft">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none;"
                                            DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 1200px; height: 537px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHVend" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnVendSave" runat="server" Text="   Save" CssClass="buttonnew-green" OnClick="SaveVendor"></asp:Button>&nbsp;
                                                            <asp:Button ID="btnVendColse" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnVendColse_Click"></asp:Button>
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
                                                                                <asp:TextBox ID="txtVendName" runat="server"></asp:TextBox>
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
                                                                                    CompletionListHighlightedItemCssClass="itemHighlighted" OnClientPopulated="onListPopulated1">
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
                                            TargetControlID="lnkAddVendor" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlVendCreatAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div12" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnVendC" runat="server" OnClick="CreateVendor" Text="   Yes" CssClass="buttonnew-blue" />&nbsp;
                                                            <asp:Button ID="btnVendNo" runat="server" Text="   No" CssClass="buttonnew-blue" OnClick="btnVendNo_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        This vendor doesnot exist in theVendor list, Do you want to add this preferred vendor
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkConfVendAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popVendCreatAlert" runat="server" DropShadow="false"
                                            PopupControlID="pnlVendCreatAlert" TargetControlID="lnkConfVendAlert" BackgroundCssClass="modalBackground3">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemNotes" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Item Notes</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnCloseItemNotes" runat="server" Text="   Ok" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            Item Code:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblDispItemCode" runat="server"></asp:Label></label></small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            Item Notes:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblItemNotes" runat="server"></asp:Label></label></small>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkItemNotes" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popItemNotes" runat="server" DropShadow="false" CancelControlID="btnCloseItemNotes"
                                            PopupControlID="pnlItemNotes" TargetControlID="lnkItemNotes" BackgroundCssClass="modalBackground3">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAttPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Attachments</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnUploadPOAtt" runat="server" Text="   Upload" CssClass="buttonnew-blue" OnClick="UploadPOAttachments" />
                                                                <asp:Button ID="btnAttClosePO" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvAttPO" runat="server" style="font-weight: bolder">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <cc1:AsyncFileUpload ID="fupd1PO" CompleteBackColor="White" runat="server"
                                                                        UploaderStyle="Modern" UploadingBackColor="#CCFFFF" ThrobberID="ThrobberPO" OnUploadedComplete="fileUploadCompletePO"
                                                                        OnClientUploadComplete="showConfirmationPO" Style="float: left; border: 1px solid #aaaaaa" Width="300px" />
                                                                    <div style="float: left; padding-left: 0.5em">
                                                                        <a href="#" id="tooltip1">
                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                            <span><small>
                                                                                <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif, .pdf, .doc and .docx. Maximum file size should be 10MB.</label></small>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                    <br />
                                                                    <asp:Label ID="lblFileNamePO" runat="server"></asp:Label>
                                                                    <asp:Label ID="ThrobberPO" runat="server" Style="display: none">
                                                                        <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                    </asp:Label>
                                                                    <asp:HiddenField ID="hdnRctFileTypePO" runat="server" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvAttchmntsPO" runat="server" AllowPaging="false" Width="300px"
                                                                        Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                        OnRowDataBound="gvAttchmntsPO_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                <ItemTemplate>
                                                                                    <asp:ImageButton runat="server" ID="imgAttchmntPO" Width="55px" Height="65px" OnClick="DownLdAttPO"></asp:ImageButton>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Remove">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkDelAttPO" runat="server" onchange="showPOAttDeleteButton();" />
                                                                                    <asp:HiddenField ID="hdnattIdPO" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                    <asp:HiddenField ID="hdnAttOrgNamePO" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                    <asp:HiddenField ID="hdnOrgNamePO" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                    <asp:HiddenField ID="hdnDrftNamePO" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                                <td>
                                                                    <div id="LargeImageContainerDivPO" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <asp:Button ID="btnDeleteSelectedPO" runat="server" Text="Remove Selected" CssClass="button button-blue"
                                                                        OnClick="DeleteSelectedPOAttachments" Style="display: none" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <asp:HiddenField ID="hdnAttIdsRetPO" runat="server" />
                                                        <asp:HiddenField ID="hdnDftCntPO" runat="server" />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_AttPO" runat="server" DropShadow="false" PopupControlID="pnlAttPO"
                                            TargetControlID="lnkAttPO" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClosePO">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDelAttPO" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnAttDelYesPO" runat="server" OnClick="ConfirmDeletePOAtt" Text="   Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnAttDelNoPO" runat="server" Text="   No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete this attachment?</label>
                                                        </small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttDelAlertPO" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDelAttPO" runat="server" PopupControlID="pnlDelAttPO"
                                            TargetControlID="lnkAttDelAlertPO" CancelControlID="btnAttDelNoPO" BackgroundCssClass="modalBackground4">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlSaveHeaderConf" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnSaveHeaderConfYes" runat="server" OnClick="ConfirmSaveHeader" Text="   Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnSaveHeaderConfNo" runat="server" OnClick="NoSaveHeader" Text="   No" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnSaveHeaderConfCancel" runat="server" Text="   Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Do you want to save the changes made in the header of current Expense/PO?</label>
                                                        </small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkSaveHeaderConf" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popSaveHeaderConf" runat="server" PopupControlID="pnlSaveHeaderConf"
                                            TargetControlID="lnkSaveHeaderConf" BackgroundCssClass="modalBackground4" CancelControlID="btnSaveHeaderConfCancel">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddExpItem" runat="server" DefaultButton="btnAddExpItemSave" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 510px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Add Account</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnAddExpItemSave" runat="server" OnClick="btnAddExpItemSave_Click" Text="   Save" CssClass="buttonnew-green" />&nbsp;
                                                            <asp:Button ID="btnAddExpItemCancel" runat="server" OnClick="btnAddExpItemCancel_Click" Text="   Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div id="dvAddExpItemErr" runat="server">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Expense Code:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtAddExpCode" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Description:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtAddExpDescr" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            Account Code:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtAddExpAccCode" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Maximum Limit(<%=currencySymbol %>):</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtAddExpMaxLmt" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Travel Specific:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:RadioButtonList ID="rdTravelSpec" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                                    </asp:RadioButtonList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Reimbursable:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:RadioButtonList ID="rdReimb" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                                    </asp:RadioButtonList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Attachment:</label></small>&nbsp;&nbsp;
                                                                </td>
                                                                <td align="left">
                                                                    <asp:RadioButtonList ID="rdAtt" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="100px">
                                                                        <asp:ListItem Value="Y" Text="Yes"></asp:ListItem>
                                                                        <asp:ListItem Value="N" Text="No" Selected="True"></asp:ListItem>
                                                                    </asp:RadioButtonList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddExpItem" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddExpItem" runat="server" DropShadow="false" PopupControlID="pnlAddExpItem"
                                            TargetControlID="lnkAddExpItem" BackgroundCssClass="modalBackground1">
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
                                                                <asp:Button ID="btnSaveAddItemCode" runat="server" OnClick="SaveItemCode" Text="   Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnCancelAddItemCode" runat="server" Text="   Cancel" CssClass="buttonnew-blue" OnClick="CancelAddItemCode" />
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
                                        <asp:Panel ID="pnlAddOnBehalfOf" runat="server" DefaultButton="btnAddOnBehalfOf" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 560px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 15%;">
                                                                <h2 class="pophead">Create</h2>
                                                            </td>
                                                            <td align="right" style="width: 85%">
                                                                <asp:Button ID="btnAddOnBehalfOf" runat="server" OnClick="btnAddOnBehalfOf_Click" Text="   Yes, the name is accurate." CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCancelOnBehalfOf" runat="server" Text="   No! I want to change the name." CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>
                                                                <%--This user does not exist in the list. In order to place expense on behalf of this user, you need to add this user to the list. You want to do this now?
                                                                This name is printed on cheque. Please make sure the name is accurate.--%>
                                                                <asp:Label ID="lblOnBehalfOfConfText" runat="server"></asp:Label>
                                                            </label>
                                                        </small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddOnBehalfOf" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddOnBehalfOf" runat="server" DropShadow="false" PopupControlID="pnlAddOnBehalfOf"
                                            TargetControlID="lnkAddOnBehalfOf" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlReimbDetails" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 560px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 60%;">
                                                                <h2 class="pophead">Reimbursement Details</h2>
                                                            </td>
                                                            <td align="right" style="width: 40%">
                                                                <asp:Button ID="btnReimbClose" runat="server" Text="  Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemainreimb">
                                                            <tr>
                                                                <td style="text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            Reimburse Type:</label></small>
                                                                </td>
                                                                <td style="text-align: left">
                                                                    <asp:TextBox ID="txtReimbPayMode" runat="server" ReadOnly="true"></asp:TextBox>
                                                                    <asp:HiddenField ID="hdnExpAmount" runat="server" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            Amount(<%=currencySymbol %>):
                                                                        </label>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: left">
                                                                    <asp:TextBox runat="server" ID="txAmount" ReadOnly="true" />
                                                                </td>
                                                            </tr>
                                                            <%--<tr>
                                                                <td style="text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            Description:
                                                                        </label>
                                                                    </small>
                                                                </td>
                                                                <td style="text-align: left">
                                                                    <asp:TextBox runat="server" ID="txtDesc" ReadOnly="true" />
                                                                </td>
                                                            </tr>--%>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div id="dvCheque" runat="server">
                                                                        <table width="107%">
                                                                            <tr>
                                                                                <td style="text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Cheque#:
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td style="text-align: left">
                                                                                    <asp:TextBox runat="server" ID="txtchqNO" ReadOnly="true" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Cheque Date:
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td style="text-align: left">
                                                                                    <asp:TextBox runat="server" ID="txtChqDate" ReadOnly="true" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <%--<div id="dvBankDetails" runat="server">
                                                                                        <table>
                                                                                            <tr>
                                                                                                <td style="text-align: right">
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            Bank:
                                                                                                        </label>
                                                                                                    </small>
                                                                                                </td>
                                                                                                <td style="text-align: left">
                                                                                                    <asp:TextBox runat="server" ID="txtBank" ReadOnly="true" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>--%>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Payable To:
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td style="text-align: left">
                                                                                    <asp:TextBox runat="server" ID="txtPayableTo" ReadOnly="true" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkReimbDetails" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popReimbDetails" runat="server" DropShadow="false" PopupControlID="pnlReimbDetails"
                                            TargetControlID="lnkReimbDetails" CancelControlID="btnReimbClose" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlItemInventory" runat="server" Style="display: none; background-color: white">
                                            <div class="main-content" style="margin: 0px; padding: 10px; min-height: 95px; min-width: 400px">
                                                <div class="divfieldset">
                                                    <table>
                                                        <tr>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="btnCloseItemInventory" runat="server" Text="   Close" CssClass="buttonnew-blue" />
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
                                                                <asp:Button ID="btnCloseItemPurchHist" runat="server" Text="   Close" CssClass="buttonnew-blue" />
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
                                        <asp:Panel ID="pnlExpLineHist" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 60%;">
                                                                <h2 class="pophead">History</h2>
                                                            </td>
                                                            <td align="right" style="width: 40%">
                                                                <asp:Button ID="btnExpLineHistClose" runat="server" Text="  Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <isx:CoolGridView ID="gvExpLineHist" runat="server" GridLines="None" AutoGenerateColumns="false" Width="730px" Height="300px" OnRowDataBound="gvExpLineHist_RowDataBound">
                                                            <Columns>
                                                                <asp:TemplateField HeaderStyle-Width="160px" ItemStyle-Width="160px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkDate" runat="server" Text="Date" CommandArgument="updateOn"
                                                                            OnCommand="SortReqLineHistExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <%# Convert.ToDateTime(Eval("updateOn")) %>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkColType" runat="server" Text="Type" CommandArgument="colType"
                                                                            OnCommand="SortReqLineHistExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lblColType" runat="server" Text='<%#Eval("colType")%>'></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Old" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lblValueOld" runat="server" Text='<%#Eval("valueOld")%>'></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="New" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lblValueNew" runat="server" Text='<%#Eval("valueNew")%>'></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <%-- <asp:TemplateField HeaderText="Details" HeaderStyle-Width="400px" ItemStyle-Width="400px">
                                                                    <ItemTemplate>
                                                                        <%#Eval("Details") %>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>--%>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 150px">
                                                                    <label>No history to display.</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkExpLineHist" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popExpLineHist" runat="server" DropShadow="false" BackgroundCssClass="modalBackground3"
                                            TargetControlID="lnkExpLineHist" PopupControlID="pnlExpLineHist" CancelControlID="btnExpLineHistClose">
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
