<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RecurPO.aspx.cs" Inherits="RecurPO" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Recur PO</title>
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
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="js/jquery.ui.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function setupDatePicker() {
            // attach calendar to date inputs
            $(".date").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
        }

        $(document).ready(function () {
            setupDatePicker();
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendor").ufd({ log: true });
            });
            $(function () {
                $("#ddlDept").ufd({ log: true });
            });
            $(function () {
                $("#ddlSchID").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCodesMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlManagerEMail").ufd({ log: true });
            });
        });

        function DoOnAjaxPostback() {
            setupDatePicker();
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendor").ufd({ log: true });
            });
            $(function () {
                $("#ddlDept").ufd({ log: true });
            });
            $(function () {
                $("#ddlSchID").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCodesMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlVendMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptMain").ufd({ log: true });
            });
            $(function () {
                $("#ddlManagerEMail").ufd({ log: true });
            });
            $(function () {
                $('#gvPO tr').find('select[id*=ddlBudgClss]').ufd({ log: true });
            });
            $(function () {
                $('#gvPO tr').find('select[id*=ddlItemCode]').ufd({ log: true });
            });
        }

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function validateMaster() {
            var errStr = 'Please select ';
            $11('dvMsg').innerHTML = '';
            $11('dvMsg').style.color = "red";
            if ($11('ddlVendor').value == "0")
                errStr += 'BillTo/Vendor, ';
            if ($11('txtSchDate').value == 0)
                errStr += 'Schedule Date, ';
            errStr = errStr.substring(0, errStr.length - 2);
            if (errStr.length > 13) {
                $11('dvMsg').innerHTML = errStr;
                return false;
            }
            else
                return true;
        }

        function validateBeforeNewRow() {
            if (validateMaster()) {
                var grid = $11('<%=gvPO.ClientID %>');
                if (grid != null) {
                    var len = grid.rows.length;
                    if (len > 0) {
                        var cnt = 0;

                        var ddlBudgClss = $('#gvPO tr').find("select[id*=ddlBudgClss]");
                        var ddlItemCode = $('#gvPO tr').find("select[id*=ddlItemCode]");
                        var txtDescr = $('#gvPO tr').find("input[id*=txtDescr]");
                        var txtUnitPrice = $('#gvPO tr').find("input[id*=txtUnitPrice]");
                        var txtJan = $('#gvPO tr').find("input[id*=txtJan]");
                        var txtFeb = $('#gvPO tr').find("input[id*=txtFeb]");
                        var txtMar = $('#gvPO tr').find("input[id*=txtMar]");
                        var txtApr = $('#gvPO tr').find("input[id*=txtApr]");
                        var txtMay = $('#gvPO tr').find("input[id*=txtMay]");
                        var txtJun = $('#gvPO tr').find("input[id*=txtJun]");
                        var txtJul = $('#gvPO tr').find("input[id*=txtJul]");
                        var txtAug = $('#gvPO tr').find("input[id*=txtAug]");
                        var txtSep = $('#gvPO tr').find("input[id*=txtSep]");
                        var txtOct = $('#gvPO tr').find("input[id*=txtOct]");
                        var txtNov = $('#gvPO tr').find("input[id*=txtNov]");
                        var txtDec = $('#gvPO tr').find("input[id*=txtDec]");

                        for (var i = 0; i < len; i++) {
                            //if (i <= 9) {
                            //    i = '0' + i;
                            //}
                            if (ddlBudgClss[i].value == "0" || ddlBudgClss[i].value == '') {
                                cnt++;
                                ddlBudgClss[i].style.border = "1px solid Red";
                            }
                            else
                                ddlBudgClss[i].style.border = "1px solid #ccc";

                            if (ddlItemCode[i].value == "0" || ddlItemCode[i].value == '') {
                                cnt++;
                                ddlItemCode[i].style.border = "1px solid Red";
                            }
                            else
                                ddlItemCode[i].style.border = "1px solid #ccc";

                            if (txtDescr[i].value == 0) {
                                cnt++;
                                txtDescr[i].style.border = "1px solid Red";
                            }
                            else
                                txtDescr[i].style.border = "1px solid #ccc";

                            if (txtUnitPrice[i].value == 0 || isNaN(txtUnitPrice[i].value)) {
                                cnt++;
                                txtUnitPrice[i].style.border = "1px solid Red";
                            }
                            else
                                txtUnitPrice[i].style.border = "1px solid #ccc";

                            if (txtJan[i].value == 0 || isNaN(txtJan[i].value)) {
                                cnt++;
                                txtJan[i].style.border = "1px solid Red";
                            }
                            else
                                txtJan[i].style.border = "1px solid #ccc";

                            if (txtFeb[i].value == 0 || isNaN(txtFeb[i].value)) {
                                cnt++;
                                txtFeb[i].style.border = "1px solid Red";
                            }
                            else
                                txtFeb[i].style.border = "1px solid #ccc";

                            if (txtMar[i].value == 0 || isNaN(txtMar[i].value)) {
                                cnt++;
                                txtMar[i].style.border = "1px solid Red";
                            }
                            else
                                txtMar[i].style.border = "1px solid #ccc";

                            if (txtApr[i].value == 0 || isNaN(txtApr[i].value)) {
                                cnt++;
                                txtApr[i].style.border = "1px solid Red";
                            }
                            else
                                txtApr[i].style.border = "1px solid #ccc";

                            if (txtMay[i].value == 0 || isNaN(txtMay[i].value)) {
                                cnt++;
                                txtMay[i].style.border = "1px solid Red";
                            }
                            else
                                txtMay[i].style.border = "1px solid #ccc";

                            if (txtJun[i].value == 0 || isNaN(txtJun[i].value)) {
                                cnt++;
                                txtJun[i].style.border = "1px solid Red";
                            }
                            else
                                txtJun[i].style.border = "1px solid #ccc";

                            if (txtJul[i].value == 0 || isNaN(txtJul[i].value)) {
                                cnt++;
                                txtJul[i].style.border = "1px solid Red";
                            }
                            else
                                txtJul[i].style.border = "1px solid #ccc";

                            if (txtAug[i].value == 0 || isNaN(txtAug[i].value)) {
                                cnt++;
                                txtAug[i].style.border = "1px solid Red";
                            }
                            else
                                txtAug[i].style.border = "1px solid #ccc";

                            if (txtSep[i].value == 0 || isNaN(txtSep[i].value)) {
                                cnt++;
                                txtSep[i].style.border = "1px solid Red";
                            }
                            else
                                txtSep[i].style.border = "1px solid #ccc";

                            if (txtOct[i].value == 0 || isNaN(txtOct[i].value)) {
                                cnt++;
                                txtOct[i].style.border = "1px solid Red";
                            }
                            else
                                txtOct[i].style.border = "1px solid #ccc";

                            if (txtNov[i].value == 0 || isNaN(txtNov[i].value)) {
                                cnt++;
                                txtNov[i].style.border = "1px solid Red";
                            }
                            else
                                txtNov[i].style.border = "1px solid #ccc";

                            if (txtDec[i].value == 0 || isNaN(txtDec[i].value)) {
                                cnt++;
                                txtDec[i].style.border = "1px solid Red";
                            }
                            else
                                txtDec[i].style.border = "1px solid #ccc";
                        }
                        if (cnt > 0) {
                            $11("dvMsg").innerHTML = "Please provide valid inputs.";
                            $11("dvMsg").style.color = "Red";
                            return false;
                        }
                    }
                }
            }
            else
                return false;
        }

        function DisplayTitle(txtDesc) {
            txtDesc.title = txtDesc.value;
        }

        function ConfirmCancel(sel) {
            var ret;
            if (sel != "0")
                ret = confirm("Are you sure you want to cancel current schedule?");
            else
                ret = true;
            return ret;
        }

        function calcRowTotal(rowIndex, txt) {
            var curfield = $11(txt);
            if (isNaN(curfield.value)) {
                curfield.value = '';
                curfield.style.border = "1px solid Red";
                $11("dvMsg").innerHTML = "Please provide valid input.";
                $11("dvMsg").style.color = "Red";
                return false;
            }
            else {
                ////// Calculate row totals //////
                curfield.style.border = "1px solid #ccc";
                //var i = parseInt(rowIndex + 2);
                var i = parseInt(rowIndex);
                //if (i <= 9)
                //    i = '0' + i;
                var txtUnitPrice = $('#gvPO tr').find("input[id*=txtUnitPrice]");
                var txtJan = $('#gvPO tr').find("input[id*=txtJan]");
                var txtFeb = $('#gvPO tr').find("input[id*=txtFeb]");
                var txtMar = $('#gvPO tr').find("input[id*=txtMar]");
                var txtApr = $('#gvPO tr').find("input[id*=txtApr]");
                var txtMay = $('#gvPO tr').find("input[id*=txtMay]");
                var txtJun = $('#gvPO tr').find("input[id*=txtJun]");
                var txtJul = $('#gvPO tr').find("input[id*=txtJul]");
                var txtAug = $('#gvPO tr').find("input[id*=txtAug]");
                var txtSep = $('#gvPO tr').find("input[id*=txtSep]");
                var txtOct = $('#gvPO tr').find("input[id*=txtOct]");
                var txtNov = $('#gvPO tr').find("input[id*=txtNov]");
                var txtDec = $('#gvPO tr').find("input[id*=txtDec]");
                var lblTotal = $('#gvPO tr').find("span[id*=lblTotal]");
                var hdnTotal = $('#gvPO tr').find("input[id*=hdnTotal]");

                var up = txtUnitPrice[i].value == '' ? 0 : parseFloat(txtUnitPrice[i].value);
                var m1 = txtJan[i].value == '' ? 0 : parseFloat(txtJan[i].value);
                var m2 = txtFeb[i].value == '' ? 0 : parseFloat(txtFeb[i].value);
                var m3 = txtMar[i].value == '' ? 0 : parseFloat(txtMar[i].value);
                var m4 = txtApr[i].value == '' ? 0 : parseFloat(txtApr[i].value);
                var m5 = txtMay[i].value == '' ? 0 : parseFloat(txtMay[i].value);
                var m6 = txtJun[i].value == '' ? 0 : parseFloat(txtJun[i].value);
                var m7 = txtJul[i].value == '' ? 0 : parseFloat(txtJul[i].value);
                var m8 = txtAug[i].value == '' ? 0 : parseFloat(txtAug[i].value);
                var m9 = txtSep[i].value == '' ? 0 : parseFloat(txtSep[i].value);
                var m10 = txtOct[i].value == '' ? 0 : parseFloat(txtOct[i].value);
                var m11 = txtNov[i].value == '' ? 0 : parseFloat(txtNov[i].value);
                var m12 = txtDec[i].value == '' ? 0 : parseFloat(txtDec[i].value);
                var rowTotal;
                rowTotal = (up * m1) + (up * m2) + (up * m3) + (up * m4) + (up * m5) + (up * m6) + (up * m7) + (up * m8) + (up * m9) + (up * m10) + (up * m11) + (up * m12);
                lblTotal[i].innerHTML = rowTotal;
                hdnTotal[i].value = rowTotal;

                ////// Calculate column totals //////
                calcColumnTotal();
            }
        }

        function calcColumnTotal() {
            var grid = $11('<%=gvPO.ClientID %>');
            var total = 0, total1 = 0, total2 = 0, total3 = 0, total4 = 0, total5 = 0, total6 = 0, total7 = 0, total8 = 0, total9 = 0, total10 = 0, total11 = 0, total12 = 0, total13 = 0;
            var len = parseInt(grid.rows.length) + 2;
            //if (len <= 9)
            //    len = '0' + len;
            for (var i = 0; i < parseInt(grid.rows.length) ; i++) {
                //if (j <= 9)
                //    j = '0' + j;

                var txtUnitPrice = $('#gvPO tr').find("input[id*=txtUnitPrice]");
                var txtJan = $('#gvPO tr').find("input[id*=txtJan]");
                var txtFeb = $('#gvPO tr').find("input[id*=txtFeb]");
                var txtMar = $('#gvPO tr').find("input[id*=txtMar]");
                var txtApr = $('#gvPO tr').find("input[id*=txtApr]");
                var txtMay = $('#gvPO tr').find("input[id*=txtMay]");
                var txtJun = $('#gvPO tr').find("input[id*=txtJun]");
                var txtJul = $('#gvPO tr').find("input[id*=txtJul]");
                var txtAug = $('#gvPO tr').find("input[id*=txtAug]");
                var txtSep = $('#gvPO tr').find("input[id*=txtSep]");
                var txtOct = $('#gvPO tr').find("input[id*=txtOct]");
                var txtNov = $('#gvPO tr').find("input[id*=txtNov]");
                var txtDec = $('#gvPO tr').find("input[id*=txtDec]");
                var lblTotal = $('#gvPO tr').find("span[id*=lblTotal]");
                var hdnTotal = $('#gvPO tr').find("input[id*=hdnTotal]");

                //total += parseFloat($11(grid.id + '_ctl' + j + '_txtUnitPrice').value == '' ? '0' : $11(grid.id + '_ctl' + j + '_txtUnitPrice').value);
                total += parseFloat(txtUnitPrice[i].value == '' ? '0' : txtUnitPrice[i].value);
                total1 += parseFloat(txtJan[i].value == '' ? '0' : txtJan[i].value);
                total2 += parseFloat(txtFeb[i].value == '' ? '0' : txtFeb[i].value);
                total3 += parseFloat(txtMar[i].value == '' ? '0' : txtMar[i].value);
                total4 += parseFloat(txtApr[i].value == '' ? '0' : txtApr[i].value);
                total5 += parseFloat(txtMay[i].value == '' ? '0' : txtMay[i].value);
                total6 += parseFloat(txtJun[i].value == '' ? '0' : txtJun[i].value);
                total7 += parseFloat(txtJul[i].value == '' ? '0' : txtJul[i].value);
                total8 += parseFloat(txtAug[i].value == '' ? '0' : txtAug[i].value);
                total9 += parseFloat(txtSep[i].value == '' ? '0' : txtSep[i].value);
                total10 += parseFloat(txtOct[i].value == '' ? '0' : txtOct[i].value);
                total11 += parseFloat(txtNov[i].value == '' ? '0' : txtNov[i].value);
                total12 += parseFloat(txtDec[i].value == '' ? '0' : txtDec[i].value);
                total13 += parseFloat(lblTotal[i].innerHTML == '' ? '0' : lblTotal[i].innerHTML);
            }

            var hdnFtUnitPrice = $("input[id*=hdnFtUnitPrice]");
            var hdnFtJan = $("input[id*=hdnFtJan]");
            var hdnFtFeb = $("input[id*=hdnFtFeb]");
            var hdnFtMar = $("input[id*=hdnFtMar]");
            var hdnFtApr = $("input[id*=hdnFtApr]");
            var hdnFtMay = $("input[id*=hdnFtMay]");
            var hdnFtJun = $("input[id*=hdnFtJun]");
            var hdnFtJul = $("input[id*=hdnFtJul]");
            var hdnFtAug = $("input[id*=hdnFtAug]");
            var hdnFtSep = $("input[id*=hdnFtSep]");
            var hdnFtOct = $("input[id*=hdnFtOct]");
            var hdnFtNov = $("input[id*=hdnFtNov]");
            var hdnFtDec = $("input[id*=hdnFtDec]");
            var hdnFtTotal = $("input[id*=hdnFtTotal]");

            var lblFtUnitPrice = $("span[id*=lblFtUnitPrice]");
            var lblFtJan = $("span[id*=lblFtJan]");
            var lblFtFeb = $("span[id*=lblFtFeb]");
            var lblFtMar = $("span[id*=lblFtMar]");
            var lblFtApr = $("span[id*=lblFtApr]");
            var lblFtMay = $("span[id*=lblFtMay]");
            var lblFtJun = $("span[id*=lblFtJun]");
            var lblFtJul = $("span[id*=lblFtJul]");
            var lblFtAug = $("span[id*=lblFtAug]");
            var lblFtSep = $("span[id*=lblFtSep]");
            var lblFtOct = $("span[id*=lblFtOct]");
            var lblFtNov = $("span[id*=lblFtNov]");
            var lblFtDec = $("span[id*=lblFtDec]");
            var lblFtTotal = $("span[id*=lblFtTotal]");


            hdnFtUnitPrice[0].value = lblFtUnitPrice[0].innerHTML = total;
            hdnFtJan[0].value = lblFtJan[0].innerHTML = total1;
            hdnFtFeb[0].value = lblFtFeb[0].innerHTML = total2;
            hdnFtMar[0].value = lblFtMar[0].innerHTML = total3;
            hdnFtApr[0].value = lblFtApr[0].innerHTML = total4;
            hdnFtMay[0].value = lblFtMay[0].innerHTML = total5;
            hdnFtJun[0].value = lblFtJun[0].innerHTML = total6;
            hdnFtJul[0].value = lblFtJul[0].innerHTML = total7;
            hdnFtAug[0].value = lblFtAug[0].innerHTML = total8;
            hdnFtSep[0].value = lblFtSep[0].innerHTML = total9;
            hdnFtOct[0].value = lblFtOct[0].innerHTML = total10;
            hdnFtNov[0].value = lblFtNov[0].innerHTML = total11;
            hdnFtDec[0].value = lblFtDec[0].innerHTML = total12;
            hdnFtTotal[0].value = lblFtTotal[0].innerHTML = total13;
        }

        function validateSingleBudgClss(id) {
            var grid = $11('<%=gvPO.ClientID %>');
            var currBudgClss = $11(id).value;
            var len = parseInt(grid.rows.length) + 2;
            var cnt = 0;
            if (len > 3) {
                if (len <= 9)
                    len = '0' + len;
                for (var i = 2; i < len; i++) {
                    if ($11(grid.id + '_ctl' + i + '_ddlBudgClss').value == currBudgClss) {
                        cnt++;
                    }
                }
                if (parseInt(cnt) > 0) {
                    $11('dvMsg').innerHTML = "Please select different Account Name as this is already selected.";
                    $11('dvMsg').style.color = "Red";
                    return false;
                }
            }
        }
    </script>
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

        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .tdlabel {
            text-align: right;
        }

        .tddata {
            text-align: left;
        }

        #gvPOjEsCoOl_headerDiv, #gvSchedulesjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvPOjEsCoOl_headerDiv div table tbody tr th, #gvSchedulesjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvPO tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            text-align: center;
        }

        #gvSchedules tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvPOjEsCoOl_mainDiv, #gvSchedulesjEsCoOl_mainDiv {
            overflow: hidden;
        }

        #gvPOjEsCoOl_footerDiv {
        }

            #gvPOjEsCoOl_footerDiv div table tbody tr td {
                height: 30px;
                /*background-color: #82CFFD;*/
                border: 1px solid #E6E4E4;
                color: White;
                text-align: center;
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                font-size: 1.0em;
                font-weight: normal;
            }

        #gvSchedules TR TD, #gvSchedules TR TH, #gvSchedules TR TH div, #gvSchedules TR TD div,
        #gvPO TR TD, #gvPO TR TH, #gvPO TR TH div, #gvPO TR TD div {
            overflow: visible;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
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
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style='display: none' />
                                <div class="main-content" style="width: 900px">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <h2>Recur PO
                                                    </h2>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnNewSch" runat="server" Text="New Schedule" CssClass="buttonnew-blue" OnClick="NewSchedule" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvMainMsg" runat="server"></div>
                                            <div>
                                                <table width="90%">
                                                    <tr>
                                                        <td class="tdlabel">
                                                            <small>
                                                                <label>
                                                                    CompCode:&nbsp;&nbsp;</label></small>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="ddlCompCodesMain" runat="server" OnSelectedIndexChanged="CompCodesMainSelected"
                                                                AutoPostBack="true" Width="170px">
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td class="tdlabel">
                                                            <small>
                                                                <label>
                                                                    Depatrment:&nbsp;&nbsp;
                                                                </label>
                                                            </small>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="ddlDeptMain" runat="server" OnSelectedIndexChanged="DepartmentMainSelected"
                                                                AutoPostBack="true" Width="170px">
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tdlabel">
                                                            <small>
                                                                <label>
                                                                    Bill To/Vendor:&nbsp;&nbsp;</label></small>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="ddlVendMain" runat="server" OnSelectedIndexChanged="VendorMainSelected"
                                                                AutoPostBack="true" Width="170px">
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td class="tdlabel">
                                                            <small>
                                                                <label>
                                                                    Schedule ID:&nbsp;&nbsp;</label></small>
                                                        </td>
                                                        <td class="tddata">
                                                            <asp:DropDownList ID="ddlSchID" runat="server" OnSelectedIndexChanged="ScheduleIDSelected"
                                                                AutoPostBack="true" Width="170px">
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <br />
                                                <isx:CoolGridView ID="gvSchedules" AllowPaging="false" runat="server" GridLines="None" AutoGenerateColumns="false"
                                                    Width="720px" Height="250px" OnRowDataBound="gvSchedules_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="ScheduleID">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkSchID" runat="server" Text="ScheduleID" CommandArgument="schdId"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><asp:LinkButton ID="lnkScheduleID" runat="server" Text='<%#Eval("schdId")%>' OnClick="EditSchedule"></asp:LinkButton></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="BillTo/Vendor" HeaderStyle-Width="220px" ItemStyle-Width="220px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkVendor" runat="server" Text="BillTo/Vendor" CommandArgument="preferredVendor"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("preferredVendor")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Department" HeaderStyle-Width="170px" ItemStyle-Width="170px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkDept" runat="server" Text="Department" CommandArgument="deptCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("deptCode")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Sch. Date" HeaderStyle-Width="120px" ItemStyle-Width="120px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkSchDate" runat="server" Text="Sch. Date" CommandArgument="schdDate"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%# Convert.ToDateTime(Eval("schdDate")).ToShortDateString()%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Action">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkEditSch" runat="server" OnClick="EditSchedule" Text="Edit"
                                                                    ToolTip="Edit Schedule"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 150px"><label>
                                                            No data to display.</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlAddSchedule" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 50px; width: 100%;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">Create/Manage Schedule
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnCreateSch" runat="server" CssClass="buttonnew-blue" Text="Create/Save Schedule"
                                                                    OnClick="CreateSchedule" />
                                                                <asp:Button ID="btnCancelSch" runat="server" CssClass="buttonnew-blue" Text="Cancel Schedule"
                                                                    OnClick="CancelSchedule" />
                                                                <asp:Button ID="btnClose" runat="server" CssClass="buttonnew-blue" Text="Close" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server" style="text-align: center">
                                                        </div>
                                                        <table id="dvSchedulePO" runat="server" width="100%">
                                                            <tr>
                                                                <td class="tddata">
                                                                    <small>
                                                                        <label>
                                                                            ScheduleID:&nbsp;&nbsp;
                                                                        </label>
                                                                    </small>
                                                                    <label>
                                                                        <b>
                                                                            <asp:Label ID="lblSchID" runat="server"></asp:Label></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="tddata">
                                                                    <small>
                                                                        <label>
                                                                            Company Code:</label></small><br />
                                                                    <asp:DropDownList ID="ddlCompCode" runat="server" Width="160px" AutoPostBack="true"
                                                                        OnSelectedIndexChanged="CompCodeChanged">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="tddata">
                                                                    <small>
                                                                        <label>
                                                                            BillTo/Vendor:</label></small><br />
                                                                    <asp:DropDownList ID="ddlVendor" runat="server" Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="tddata"><small>
                                                                    <label>Manager Email:</label></small><br />
                                                                    <asp:DropDownList ID="ddlManagerEMail" runat="server" Width="160px"></asp:DropDownList>
                                                                </td>
                                                                <td class="tddata">
                                                                    <small>
                                                                        <label>
                                                                            Department:</label></small><br />
                                                                    <asp:DropDownList ID="ddlDept" runat="server" Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="tddata">
                                                                    <small>
                                                                        <label>
                                                                            Schedule Date:</label></small><br />
                                                                    <asp:TextBox ID="txtSchDate" runat="server" class="date">
                                                                    </asp:TextBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <div id="dvAddRow" runat="server" style="text-align: right">
                                                            <asp:Button ID="btnAddRow" runat="server" Text="Add New Item" CssClass="buttonnew-blue"
                                                                OnClick="AddNewRow" />
                                                            <asp:Button ID="btnClearData" runat="server" Text="Clear Data" CssClass="buttonnew-blue"
                                                                OnClick="ClearGridData" />
                                                            <asp:HiddenField ID="hdnRowLineNo" runat="server" />
                                                        </div>
                                                        <br />
                                                        <div style="overflow-x: hidden; overflow-y: auto; height: 300px">
                                                            <isx:CoolGridView ID="gvPO" runat="server" AutoGenerateColumns="False"
                                                                GridLines="None" OnRowDataBound="gvPO_RowDataBound" ShowFooter="True" OnRowCommand="gvPO_RowCommand"
                                                                OnRowDeleting="gvPO_RowDeleting">
                                                                <HeaderStyle CssClass="GridviewScrollHeader" />
                                                                <RowStyle CssClass="GridviewScrollItem" />
                                                                <PagerStyle CssClass="GridviewScrollPager" />
                                                                <Columns>
                                                                    <%--<asp:TemplateField HeaderText="Action">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" CommandName="Delete">
                                                                <img src="images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>--%>
                                                                    <asp:TemplateField HeaderText="Line#" HeaderStyle-Width="60px">
                                                                        <ItemTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblLineNum" runat="server"></asp:Label></label></small>
                                                                        </ItemTemplate>
                                                                        <HeaderStyle Width="60px" />
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Line Seq" HeaderStyle-Width="60px">
                                                                        <ItemTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblLineSeq" runat="server"></asp:Label></label></small>
                                                                        </ItemTemplate>
                                                                        <HeaderStyle Width="60px" />
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Account" HeaderStyle-Width="140px" ControlStyle-Width="120px">
                                                                        <ItemTemplate>
                                                                            <asp:DropDownList ID="ddlBudgClss" runat="server" AutoPostBack="true" OnSelectedIndexChanged="BudgetClassificationChanged">
                                                                            </asp:DropDownList>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Acc#">
                                                                        <ItemTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblAccCode" runat="server"></asp:Label></label></small>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Item#" HeaderStyle-Width="140px" ControlStyle-Width="120px">
                                                                        <ItemTemplate>
                                                                            <asp:DropDownList ID="ddlItemCode" runat="server" OnSelectedIndexChanged="ItemCodeChanged"
                                                                                AutoPostBack="true">
                                                                            </asp:DropDownList>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Descr">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtDescr" runat="server" Width="60px" placeholder="Item Descr." onmouseover="DisplayTitle(this)"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtTot" runat="server" Text="Total:"></asp:Label>
                                                                                </label>
                                                                            </small>
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="$/unit" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtUnitPrice" runat="server" Width="40px" placeholder="$/Unit"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtUnitPrice" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtUnitPrice" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="JAN" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtJan" runat="server" Width="40px" placeholder="JAN"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtJan" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtJan" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="FEB" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtFeb" runat="server" Width="40px" placeholder="FEB"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtFeb" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtFeb" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="MAR" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtMar" runat="server" Width="40px" placeholder="MAR"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtMar" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtMar" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="APR" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtApr" runat="server" Width="40px" placeholder="APR"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtApr" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtApr" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="MAY" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtMay" runat="server" Width="40px" placeholder="MAY"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtMay" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtMay" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="JUN" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtJun" runat="server" Width="40px" placeholder="JUN"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtJun" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtJun" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="JUL" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtJul" runat="server" Width="40px" placeholder="JUL"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtJul" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtJul" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="AUG" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtAug" runat="server" Width="40px" placeholder="AUG"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtAug" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtAug" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="SEP" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtSep" runat="server" Width="40px" placeholder="SEP"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtSep" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtSep" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="OCT" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtOct" runat="server" Width="40px" placeholder="OCT"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtOct" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtOct" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="NOV" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtNov" runat="server" Width="40px" placeholder="NOV"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtNov" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtNov" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="DEC" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtDec" runat="server" Width="40px" placeholder="DEC"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtDec" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtDec" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Tax%" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtTaxPercent" runat="server" Width="40px" placeholder="Tax%"></asp:TextBox>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Total" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblTotal" runat="server"></asp:Label></label>
                                                                            <asp:HiddenField ID="hdnTotal" runat="server" />
                                                                        </ItemTemplate>
                                                                        <FooterTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblFtTotal" runat="server"></asp:Label></label></small>
                                                                            <asp:HiddenField ID="hdnFtTotal" runat="server" />
                                                                        </FooterTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAddSchedule" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAddSch" runat="server" DropShadow="false" TargetControlID="lnkAddSchedule"
                                            PopupControlID="pnlAddSchedule" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
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
                                                        Are you sure you want to delete this line?
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
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
