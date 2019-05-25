<%@ Page Language="C#" AutoEventWireup="true" CodeFile="APApproveReject.aspx.cs"
    Inherits="APApproveReject" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Accounts Payable Approvals</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <%-- <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="Autosuggest/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <script src="latestdesign/js/modernizr.js"></script>

    <script src="js/jquery.tools.min.js"></script>

    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="latestdesign/js/main.js"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>
    <script type="text/javascript">
        document.createElement("section");
        document.createElement("hgroup");
        document.createElement("header");

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        $(document).ready(function () {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
        });

        function DoOnAjaxPostback() {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $("input[id$=txtFrmDtAdvSearchAppr]").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $("input[id$=txtToDtAdvSearchAppr]").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $("input[id$=txtExtendParkDate]").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $("input[id$=txtChqDate]").dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            Filter(document.getElementById('txtKeywordSearch'));
            FilterAppr(document.getElementById('txtKeywordSearchAppr'));
            FilterRej(document.getElementById('txtKeywordSearchRej'));
            FilterPark(document.getElementById('txtKeywordSearchPark'));
        }

        function showLoadOnTypeChnge() {
            showProgressAppr();
        }

        function hideProgressAppr() {
            var updateProgressAppr = document.getElementById("UpdateProgress_Appr");
            updateProgressAppr.style.display = "none";
        }

        function validateComents(txt, dv) {
            if (document.getElementById(txt).value == 0) {
                document.getElementById(dv).innerHTML = 'Message: Please enter Comments.';
                document.getElementById(txt).focus();
                return false;
            }
            showLoadOnTypeChnge();
        }

        function refreshNotes() {
            closePane();
            $(".btnRefreshNotes").click();
        }

        function collapse(lnk, col) {
            if (document.getElementById(col).style.display == "block") {
                document.getElementById(col).style.display = "none";
                document.getElementById(lnk).innerHTML = "[+] Show details";
            }
            else {
                document.getElementById(col).style.display = "block";
                document.getElementById(lnk).innerHTML = "[-] Hide details";
            }
        }

        function DisplayFields() {
            var ddl = document.getElementById('ddlPayMode');
            if (ddl.options[ddl.selectedIndex].value == 'CC' || ddl.options[ddl.selectedIndex].value == 'CP') {
                document.getElementById('dvCheque').style.display = "block";
                document.getElementById('dvCreditCard').style.display = "none";
            }
            else if (ddl.options[ddl.selectedIndex].value == 'CCC' || ddl.options[ddl.selectedIndex].value == 'PCC') {
                document.getElementById('dvCheque').style.display = "none";
                document.getElementById('dvCreditCard').style.display = "block";
            }
            else {
                document.getElementById('dvCheque').style.display = "none";
                document.getElementById('dvCreditCard').style.display = "none";
            }
        }

        function checkEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(email).value)) {
                return true;
            }
        }

        function ValEmail(txtEmail, dvMsg) {
            if (!checkEmail(txtEmail)) {
                document.getElementById(dvMsg).style.color = "red";
                document.getElementById(dvMsg).innerHTML = 'Please enter validate Email.';
                document.getElementById(txtEmail).focus();
                return false;
            }
            showLoadOnTypeChnge();
        }

        function validateMultipleEmailsCommaSeparated(emailInputControl, seperator, div) {
            document.getElementById(div).innerHTML = '';
            var value = emailInputControl.value;
            if (value != '') {
                var result = value.split(seperator);
                for (var i = 0; i < result.length; i++) {
                    if (result[i] != '') {
                        if (!validateEmail(result[i])) {
                            emailInputControl.focus();
                            document.getElementById(div).style.color = "red";
                            document.getElementById(div).innerHTML = ('Please check, `' + result[i] + '` email addresses not valid!');
                            return false;
                        }
                        else
                            document.getElementById(div).innerHTML = '';
                    }
                }
            }
            else {
                document.getElementById(div).style.color = "red";
                document.getElementById(div).innerHTML = 'Please enter validate Email.';
                return false;
            }
        }

        function validateEmail(field) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return (regex.test(field)) ? true : false;
        }

        function ShowBiggerImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImage(obj) {
            document.getElementById("LargeImageContainerDiv").innerHTML = "";
        }

        function move_Area(event) {
            event = event || window.event;
            LargeImageContainerDiv.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDiv.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowBiggerImageAppr(obj) {
            document.getElementById("LargeImageContainerDivAppr").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc' >";
        }

        function ShowDefaultImageAppr(obj) {
            document.getElementById("LargeImageContainerDivAppr").innerHTML = "";
        }

        function move_AreaAppr(event) {
            event = event || window.event;
            LargeImageContainerDivAppr.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDivAppr.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowBiggerImageRej(obj) {
            document.getElementById("LargeImageContainerDivRej").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImageRej(obj) {
            document.getElementById("LargeImageContainerDivRej").innerHTML = "";
        }

        function move_AreaRej(event) {
            event = event || window.event;
            LargeImageContainerDivRej.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDivRej.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowBiggerImagePO(obj) {
            $11("LargeImageContainerDivPO").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImagePO(obj) {
            $11("LargeImageContainerDivPO").innerHTML = "";
        }

        function ShowBiggerImagePOAppr(obj) {
            $11("LargeImageContainerDivPOAppr").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImagePOAppr(obj) {
            $11("LargeImageContainerDivPOAppr").innerHTML = "";
        }

        function ShowBiggerImagePORej(obj) {
            $11("LargeImageContainerDivPORej").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImagePORej(obj) {
            $11("LargeImageContainerDivPORej").innerHTML = "";
        }

        function ShowBiggerImagePOPark(obj) {
            $11("LargeImageContainerDivPOPark").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImagePOPark(obj) {
            $11("LargeImageContainerDivPOPark").innerHTML = "";
        }

        /*Display Shipping Address*/
        function showShipAddress(type, lblH, dvS, dvB, pop) {
            if (type == '1') {
                $11(lblH).innerHTML = 'Shipping Address';
                $11(dvS).style.display = "block";
                $11(dvB).style.display = "none";
            }
            else {
                $11(lblH).innerHTML = 'Billing Address';
                $11(dvB).style.display = "block";
                $11(dvS).style.display = "none";
            }
            $find(pop).show();
        }
        /*Display Shipping Address*/

        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for AP Approvals
        function getAPApprovalReqCnt(id) {
            GetAPPendingExp(id.value);
        }
        //Code for calling handler to update session carrying count of pending (+Parked) expenses/POs for AP Approvals

        /*Processing multiple requests*/

        /*When checkbox in the row is checked*/
        function Check_Click(objRef) {
            //Get the Row based on checkbox
            var row = objRef.parentNode.parentNode.parentNode.parentNode.parentNode;
            //Get the reference of GridView
            var GridView = row.parentNode;
            //Get all input elements in Gridview
            var inputList = GridView.getElementsByTagName("input");
            var checkCnt = 0;
            var unCheckCnt = 0;
            for (var i = 0; i < inputList.length; i++) {
                //The First element is the Header Checkbox
                var headerCheckBox = inputList[0];

                //Based on all or none checkboxes
                //are checked check/uncheck Header Checkbox
                var checked = true;
                if (inputList[i].type == "checkbox" && inputList[i] != headerCheckBox) {
                    if (!inputList[i].checked) {
                        checked = false;
                        unCheckCnt++;//break;
                    }
                    else
                        checkCnt++;
                }
            }
            if (checkCnt > 0) {
                showButtons("block");
                //$("[src*=plus]").trigger("click");
                //ShowInnerRowsForVendorDetails(1, objRef, "block");
            }
            else {
                showButtons("none");
                //$("[src*=minus]").trigger("click");
                //ShowInnerRowsForVendorDetails(1, objRef, "none");
            }
            if (unCheckCnt > 0)
                headerCheckBox.checked = false;
            else
                headerCheckBox.checked = true;
        }
        /*When checkbox in the row is checked*/

        /*When checkbox in the header row is checked*/
        function checkAll(objRef) {
            var GridView = objRef.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var inputList = GridView.getElementsByTagName("input");
            var cnt = 0;
            for (var i = 0; i < inputList.length; i++) {
                //Get the Cell To find out ColumnIndex
                var row = inputList[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                if (inputList[i].type == "checkbox" && objRef != inputList[i]) {
                    if (objRef.checked) {
                        //If the header checkbox is checked
                        //check all checkboxes
                        if (!inputList[i].disabled) {
                            inputList[i].checked = true;
                            cnt++
                        };
                    }
                    else {
                        //If the header checkbox is checked
                        //uncheck all checkboxes
                        inputList[i].checked = false;
                    }
                }
            }
            if (cnt > 0)
                showButtons("block");
            else
                showButtons("none");
        }
        /*When checkbox in the header row is checked*/

        /*Show/Hide Approve/Park buttons*/
        function showButtons(visibleParam) {
            $11('dvHButtons').style.display = visibleParam;
        }
        /*Show/Hide Approve/Park buttons*/

        /*Enable/disable Email-Fax radios depending on the flag*/
        function sendToVendorMulPO(id, radioId, txtEmailFaxId, gv, rowIndex) {
            var objRef = $11(id);
            var rdEmailFax = $11(radioId);
            var txtEmailFax = $11(txtEmailFaxId);
            var grid = $11(gv);
            var i = parseInt(rowIndex) + 2;
            if (i <= 9) {
                i = '0' + i;
            }
            var rbItems = rdEmailFax.getElementsByTagName('input');
            if (objRef.checked) {
                for (var i = 0; i < rbItems.length; i++) {
                    rbItems[i].disabled = false;
                }
                txtEmailFax.disabled = false;
            }
            else {
                for (var i = 0; i < rbItems.length; i++) {
                    rbItems[i].disabled = true;
                }
                txtEmailFax.value = '';
                txtEmailFax.disabled = true;
            }
            txtEmailFax.style.border = "1px solid #ccc";
        }
        /*Enable/disable Email-Fax radios depending on the flag*/

        /*Validations for Email/Fax fields*/
        function checkVendorEmail(email) {
            if (email.value != 0) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
                    return true;
            }
        }

        function validateVendorPhone(phone) {
            if (phone.value != 0) {
                if (/^\(?([2-9][0-9][0-9])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone.value))
                    return true;
                else if (!isNaN(phone.value) && phone.value.length == 10)
                    return true;
            }
        }

        function DisplayErrMsg(color, msg, div) {
            $11(div).innerHTML = msg;
            $11(div).style.color = color;
        }

        function validateMultiPOVendorDetails() {
            var grid = $11('<%=gvMultiPOApprove.ClientID %>');
            var total = 0;
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9)
                    i = '0' + i;
                var chk = $11(grid.id + '_ctl' + i + '_chk');
                var rdEmailFax = $11(grid.id + '_ctl' + i + '_rdEmailFax');
                var txtEmailFax = $11(grid.id + '_ctl' + i + '_txtEmailFax');
                if (chk.checked) {
                    var rbItems = rdEmailFax.getElementsByTagName('input');
                    if (rbItems[0].checked) {
                        if (txtEmailFax.value == 0 || !checkVendorEmail(txtEmailFax)) {
                            txtEmailFax.style.border = "1px solid Red";
                            if (total == 0)
                                txtEmailFax.focus();
                            total++;
                        }
                        else
                            txtEmailFax.style.border = "1px solid #ccc";
                    }
                    else if (rbItems[1].checked) {
                        if (txtEmailFax.value == 0 || !validateVendorPhone(txtEmailFax)) {
                            txtEmailFax.style.border = "1px solid Red";
                            if (total == 0)
                                txtEmailFax.focus();
                            total++;
                        }
                        else
                            txtEmailFax.style.border = "1px solid #ccc";
                    }
                }
                else
                    txtEmailFax.style.border = "1px solid #ccc";
            }
            if (total > 0) {
                DisplayErrMsg("Red", "Please provide valid contact details according to the option(s) selected.", "dvMultiPOErr");
                return false;
            }
            else
                DisplayErrMsg("Green", "", "dvMultiPOErr");
        }
        /*Validations for Email/Fax fields*/
        /*Processing multiple requests*/


        /*Display action  popup upon mouseover in Approved tab*/
        function showActionPopup(rowIndex, pop) {
            var i = rowIndex + 2;
            if (i <= 9)
                i = '0' + i;
            var grid = $11('<%=gvApproved.ClientID %>');
            var expType = $11('ddlType').value;
            var email = $11('lblLoggedInUserEmail').innerHTML;
            var reqMgrEmail = $11(grid.id + '_ctl' + i + '_hdnManagerEmail').value;
            var invoiceCnt = $11(grid.id + '_ctl' + i + '_hdnInvoiceCnt').value;
            var statusId = $11(grid.id + '_ctl' + i + '_hdnStatusId').value;
            var reimburseCnt = $11(grid.id + '_ctl' + i + '_hdnReimbCnt').value;
            var typeVar = (expType == "ER" ? 0 : (expType == "PA" ? 1 : 2));

            if (email.toLowerCase() == reqMgrEmail.toLowerCase()) {
                if (parseInt(invoiceCnt) == 0) {
                    $11('lnkRevertSts').style.visibility = "visible";
                    $11('dvRevertst').style.display = "block";
                }
                else {
                    $11('lnkRevertSts').style.visibility = "hidden";
                    $11('dvRevertst').style.display = "none";
                }
            }
            else {
                $11('lnkRevertSts').style.visibility = "hidden";
                $11('dvRevertst').style.display = "none";
            }

            if (typeVar != 2) {
                if (parseInt(statusId) == 4 && parseInt(reimburseCnt) == 0) {
                    $11('lnkReimburse').style.visibility = "visible";
                    $11('lnkOpnReimburse').style.visibility = "hidden";
                }
                else if (parseInt(statusId) == 4 && parseInt(reimburseCnt) == 1) {
                    $11('lnkReimburse').style.visibility = "hidden";
                    $11('lnkOpnReimburse').style.visibility = "visible";
                }
                else {
                    $11('lnkReimburse').style.visibility = "hidden";
                    $11('lnkOpnReimburse').style.visibility = "hidden";
                }
            }
            else {
                $11('lnkReimburse').style.visibility = "hidden";
                $11('lnkOpnReimburse').style.visibility = "hidden";
            }
            $find(pop).show();
        }
        /*Display action  popup upon mouseover in Approved tab*/

        //filter request data in the pending expenses grid
        function Filter(Obj) {
            if (Obj != null) {
                var grid = document.getElementById('gvApDetails');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.focus();
            }
        }
        //filter request data in the pending expenses grid

        //filter request data in the approved expenses grid
        function FilterAppr(Obj) {
            if (Obj != null) {
                var grid = document.getElementById('gvApproved');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.focus();
            }
        }
        //filter request data in the approved expenses grid

        //filter request data in the rejected expenses grid
        function FilterRej(Obj) {
            if (Obj != null) {
                var grid = document.getElementById('gvRejected');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.focus();
            }
        }
        //filter request data in the rejected expenses grid

        //filter request data in the parked expenses grid
        function FilterPark(Obj) {
            if (Obj != null) {
                var grid = document.getElementById('gvApDetailsPark');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                if (grid != null) {
                    for (var r = 0; r < grid.rows.length; r++) {
                        //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                        ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                        if (ele.toUpperCase().indexOf(terms) >= 0)
                            grid.rows[r].style.display = '';
                        else grid.rows[r].style.display = 'none';
                    }
                }
                Obj.focus();
            }
        }
        //filter request data in the parked expenses grid

        //Advanced filteration
        function validateAdvSearch() {
            var cnt = 0;
            if ($11('txtFrmDtAdvSearchAppr').value != '' || $11('txtToDtAdvSearchAppr').value != '') {
                if ($11('txtFrmDtAdvSearchAppr').value == 0) {
                    $11('dvAmntErrAdvSearchAppr').innerHTML = "Please enter From date.";
                    $11('dvAmntErrAdvSearchAppr').style.color = "Red";
                    cnt++;
                }
                if ($11('txtToDtAdvSearchAppr').value == 0) {
                    $11('dvAmntErrAdvSearchAppr').innerHTML = "Please enter To date.";
                    $11('dvAmntErrAdvSearchAppr').style.color = "Red";
                    cnt++;
                }
                if (Date.parse($11('txtFrmDtAdvSearchAppr').value) > Date.parse($11('txtToDtAdvSearchAppr').value)) {
                    $11('dvAmntErrAdvSearchAppr').innerHTML = "Please enter From date which is prior to To date.";
                    $11('dvAmntErrAdvSearchAppr').style.color = "Red";
                    cnt++;
                }
            }
            if (!validateBudgetAmount1('txtAmntSearchAdvSearchAppr')) {
                $11('dvAmntErrAdvSearchAppr').innerHTML = "Please enter valid amount.";
                $11('dvAmntErrAdvSearchAppr').style.color = "Red";
                cnt++;
            }
            if (cnt > 0)
                return false;
            else
                return true;
        }

        function clearAdvSearch() {
            $11('txtFrmDtAdvSearchAppr').value = '';
            $11('txtToDtAdvSearchAppr').value = '';
            $11('ddlAmntSearchAdvSearchAppr').value = '=';
            $11('txtAmntSearchAdvSearchAppr').value = '';
            return false;
        }
        //Advanced filteration

        //reimburse screen options toggle
        function reimbtType() {
            document.getElementById('dvReimError').innerHTML = '';
            var type = document.getElementById('ddlPayModeReimb').value;
            if (type == 'Cheque')
                document.getElementById('Cheque1').style.display = "block";
            else
                document.getElementById('Cheque1').style.display = "none";
        }
        //reimburse screen options toggle
    </script>
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
        /*custom tab styling begin*/
        .approvaltabs {
            list-style: none;
            margin: 0 !important;
            padding: 0;
            height: 33px;
            border-bottom: 1px solid #aaa;
        }

            /* single tab */
            .approvaltabs li {
                float: left;
                text-indent: 0;
                padding: 0;
                margin: 0 2px 0 0 !important;
                list-style-image: none !important;
                border-top: 1px solid #aaa;
                border-left: 1px solid #aaa;
                border-right: 1px solid #aaa;
                /*-webkit-border-top-left-radius: 4px;
        -webkit-border-top-right-radius: 4px;
        -khtml-border-top-left-radius: 4px;
        -khtml-border-top-right-radius: 4px;
        -moz-border-radius: 4px 4px 0 0;
        border-radius: 4px 4px 0 0;*/
            }

        #gvExp_RejjEsCoOl_mainDiv {
            width: 91.9% !important;
        }

        #gvPOjEsCoOl_mainDiv {
            width: 70% !important;
        }

        .approvaltabs .pend {
            border-top: 7px solid #FFFFAA;
            border-bottom: 1px solid #aaa;
            /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            font-size: 11px;
            display: block;
            height: 25px;
            line-height: 26px;
            width: 120px;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding: 0px;
            margin: 0px;
            position: relative;
            top: 0px;
            -webkit-background-clip: padding-box;
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

            .approvaltabs .pend:active {
                outline: none;
            }

            /* when mouse enters the tab move the background image */
            .approvaltabs .pend:hover {
                border-top: 7px solid #FFFF00;
                color: Black;
                filter: alpha(opacity=100);
                opacity: 10;
            }

            /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
            .approvaltabs .pend .current, .approvaltabs .pend .current:hover, .approvaltabs li .pend.current {
                border-bottom: 1px solid #fff;
                border-top: 7px solid #FFFF00;
                cursor: default !important;
                color: #000 !important;
                color: Black !important;
                filter: alpha(opacity=100);
                opacity: 10;
            }

        .approvaltabs .appr {
            border-top: 7px solid #93DB70;
            border-bottom: 1px solid #aaa;
            /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            font-size: 11px;
            display: block;
            height: 25px;
            line-height: 26px;
            width: 120px;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding: 0px;
            margin: 0px;
            position: relative;
            top: 0px;
            -webkit-background-clip: padding-box;
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

        .mb10 {
            margin-bottom: 10px !important;
        }

        .approvaltabs .appr:active {
            outline: none;
        }

        /* when mouse enters the tab move the background image */
        .approvaltabs .appr:hover {
            border-top: 7px solid #49E20E;
            color: Black;
            filter: alpha(opacity=100);
            opacity: 10;
        }

        /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
        .approvaltabs .appr .current, .approvaltabs .appr .current:hover, .approvaltabs li .appr.current {
            border-bottom: 1px solid #fff;
            border-top: 7px solid #49E20E;
            cursor: default !important;
            color: #000 !important;
            /*text-shadow: 0 1px 0 #fff;*/
            color: Black !important;
            filter: alpha(opacity=100);
            opacity: 10;
        }

        .approvaltabs .rejected {
            border-top: 7px solid #FFC1C1;
            border-bottom: 1px solid #aaa;
            /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            font-size: 11px;
            display: block;
            height: 25px;
            line-height: 26px;
            width: 120px;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding: 0px;
            margin: 0px;
            position: relative;
            /*text-shadow: 0 1px 0 #fff;*/
            top: 0px;
            -webkit-background-clip: padding-box;
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

            .approvaltabs .rejected:active {
                outline: none;
            }

            /* when mouse enters the tab move the background image */
            .approvaltabs .rejected:hover {
                border-top: 7px solid #FC1501;
                /*background: #FC1501;
                    -pie-background: #FC1501;*/
                color: Black;
                filter: alpha(opacity=100);
                opacity: 10;
            }

            /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
            .approvaltabs .rejected .current, .approvaltabs .rejected .current:hover, .approvaltabs li .rejected.current {
                border-bottom: 1px solid #fff;
                border-top: 7px solid #FC1501;
                cursor: default !important;
                color: #000 !important;
                color: Black !important;
                filter: alpha(opacity=100);
                opacity: 10;
            }

        .approvaltabs .parked {
            border-top: 7px solid #B0E2FF;
            border-bottom: 1px solid #aaa;
            /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            font-size: 11px;
            display: block;
            height: 25px;
            line-height: 26px;
            width: 120px;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding: 0px;
            margin: 0px;
            position: relative;
            /*text-shadow: 0 1px 0 #fff;*/
            top: 0px;
            -webkit-background-clip: padding-box;
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

            .approvaltabs .parked:active {
                outline: none;
            }

            /* when mouse enters the tab move the background image */
            .approvaltabs .parked:hover {
                border-top: 7px solid #0276FD;
                color: Black;
                filter: alpha(opacity=100);
                opacity: 10;
            }

            /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
            .approvaltabs .parked .current, .approvaltabs .parked .current:hover, .approvaltabs li .parked.current {
                border-bottom: 1px solid #fff;
                border-top: 7px solid #0276FD;
                cursor: default !important;
                color: #000 !important;
                /*text-shadow: 0 1px 0 #fff;*/
                color: Black !important;
                filter: alpha(opacity=100);
                opacity: 10;
            }

        .approvaltabs .forward {
            border-top: 7px solid #FFFFAA;
            border-bottom: 1px solid #aaa;
            /*-webkit-border-top-left-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;*/
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            font-size: 11px;
            display: block;
            height: 25px;
            line-height: 26px;
            width: 120px;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding: 0px;
            margin: 0px;
            position: relative;
            /*text-shadow: 0 1px 0 #fff;*/
            top: 0px;
            -webkit-background-clip: padding-box;
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

            .approvaltabs .forward:active {
                outline: none;
            }

            /* when mouse enters the tab move the background image */
            .approvaltabs .forward:hover {
                border-top: 7px solid #FFFF00;
                color: Black;
                filter: alpha(opacity=100);
                opacity: 10;
            }

            /* active tab uses a class name "current". it's highlight is also done by moving the background image. */
            .approvaltabs .forward .current, .approvaltabs .forward .current:hover, .approvaltabs li .forward.current {
                border-bottom: 1px solid #fff;
                border-top: 7px solid #FFFF00;
                cursor: default !important;
                color: #000 !important;
                /*text-shadow: 0 1px 0 #fff;*/
                color: Black !important;
                filter: alpha(opacity=100);
                opacity: 10;
            }
        /*custom tab styling end*/

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

        .modalBackground3 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .modalBackground4 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99999 !important;
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

            .tablemain input {
                width: 135px;
            }

            .tablemain label {
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
                }

        .tablemaincc td {
            padding: 10px;
        }

        .lbl {
            text-align: left;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvExpjEsCoOl_headerDiv, #gvPOjEsCoOl_headerDiv, #gvExp_ApprjEsCoOl_headerDiv, #gvPO_ApprjEsCoOl_headerDiv, #gvExp_RejjEsCoOl_headerDiv,
        #gvPO_RejjEsCoOl_headerDiv, #gvApDetailsjEsCoOl_headerDiv, #gvApprovedjEsCoOl_headerDiv, #gvRejectedjEsCoOl_headerDiv, #gvPO_FwdjEsCoOl_headerDiv,
        #gvHistFwdjEsCoOl_headerDiv, #gvAttchmntsPOjEsCoOl_headerDiv, #gvAttchmntsPOApprjEsCoOl_headerDiv, #gvAttchmntsPORejjEsCoOl_headerDiv,
        #gvAttchmntsPOParkjEsCoOl_headerDiv, #gvApDetailsParkjEsCoOl_headerDiv, #gvExpParkjEsCoOl_headerDiv, #gvPOParkjEsCoOl_headerDiv,
        #gvMultiPOApprovejEsCoOl_headerDiv, #gvAttchmntsjEsCoOl_headerDiv, #gvAttchmnts_ApprjEsCoOl_headerDiv, #gvAttchmntsRejjEsCoOl_headerDiv,
        #gvAttchmntsParkjEsCoOl_headerDiv, #gvReimbursejEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvExpjEsCoOl_headerDiv div table tbody tr th, #gvPOjEsCoOl_headerDiv div table tbody tr th, #gvExp_ApprjEsCoOl_headerDiv div table tbody tr th,
            #gvPO_ApprjEsCoOl_headerDiv div table tbody tr th, #gvExp_RejjEsCoOl_headerDiv div table tbody tr th, #gvPO_RejjEsCoOl_headerDiv div table tbody tr th,
            #gvApDetailsjEsCoOl_headerDiv div table tbody tr th, #gvApprovedjEsCoOl_headerDiv div table tbody tr th, #gvRejectedjEsCoOl_headerDiv div table tbody tr th,
            #gvPO_FwdjEsCoOl_headerDiv div table tbody tr th, #gvHistFwdjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsPOjEsCoOl_headerDiv div table tbody tr th,
            #gvAttchmntsPOApprjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsPORejjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsPOParkjEsCoOl_headerDiv div table tbody tr th,
            #gvApDetailsParkjEsCoOl_headerDiv div table tbody tr th, #gvExpParkjEsCoOl_headerDiv div table tbody tr th, #gvPOParkjEsCoOl_headerDiv div table tbody tr th,
            #gvMultiPOApprovejEsCoOl_headerDiv div table tbody tr th,
            #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th, #gvAttchmnts_ApprjEsCoOl_headerDiv div table tbody tr th, #gvAttchmntsRejjEsCoOl_headerDiv div table tbody tr th,
            #gvAttchmntsParkjEsCoOl_headerDiv div table tbody tr th,
            #gvReimbursejEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvExp tbody tr td, #gvPO tbody tr td, #gvExp_Appr tbody tr td, #gvPO_Appr tbody tr td, #gvExp_Rej tbody tr td, #gvPO_Rej tbody tr td, #gvApDetails tbody tr td,
        #gvApproved tbody tr td, #gvRejected tbody tr td, #gvAttchmntsPO tbody tr td, #gvAttchmntsPOAppr tbody tr td, #gvAttchmntsPORej tbody tr td, #gvAttchmntsPOPark tbody tr td,
        #gvApDetailsPark tbody tr td, #gvExpPark tbody tr td, #gvPOPark tbody tr td, #gvMultiPOApprove tbody tr td, #gvAttchmnts tbody tr td, #gvAttchmnts_Appr tbody tr td, #gvAttchmntsRej tbody tr td, #gvAttchmntsPark tbody tr td,
        #gvReimburse tbody tr td {
            padding: 5px;
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            text-overflow: ellipsis;
        }

        #gvExpjEsCoOl_mainDiv, #gvPOjEsCoOl_mainDiv, #gvExp_ApprjEsCoOl_mainDiv, #gvPO_ApprjEsCoOl_mainDiv, #gvExp_RejjEsCoOl_mainDiv, #gvPO_RejjEsCoOl_mainDiv,
        #gvApDetailsjEsCoOl_mainDiv, #gvApprovedjEsCoOl_mainDiv, #gvRejectedjEsCoOl_mainDiv, #gvAttchmntsPOjEsCoOl_mainDiv, #gvAttchmntsPOApprjEsCoOl_mainDiv,
        #gvAttchmntsPORejjEsCoOl_mainDiv, #gvAttchmntsPOParkjEsCoOl_mainDiv, #gvApDetailsParkjEsCoOl_mainDiv, #gvExpParkjEsCoOl_mainDiv, #gvPOParkjEsCoOl_mainDiv,
        #gvMultiPOApprovejEsCoOl_mainDiv, #gvAttchmntsjEsCoOl_mainDiv,
        #gvAttchmnts_ApprjEsCoOl_mainDiv, #gvAttchmntsRejjEsCoOl_mainDiv, #gvAttchmntsParkjEsCoOl_mainDiv, #gvReimbursejEsCoOl_mainDiv {
            overflow: hidden;
        }

        #gvApDetails TR TD, #gvApDetails TR TH, #gvApDetails TR TH div, #gvApDetails TR TD div, #gvApproved TR TD, #gvApproved TR TH, #gvApproved TR TH div,
        #gvApproved TR TD div, #gvRejected TR TD, #gvRejected TR TH, #gvRejected TR TH div, #gvRejected TR TD div, #gvAttchmntsPO TR TD, #gvAttchmntsPO TR TH,
        #gvAttchmntsPO TR TH div, #gvAttchmntsPO TR TD div, #gvAttchmntsPOAppr TR TD, #gvAttchmntsPOAppr TR TH, #gvAttchmntsPOAppr TR TH div,
        #gvAttchmntsPOAppr TR TD div, #gvAttchmntsPORej TR TD, #gvAttchmntsPORej TR TH, #gvAttchmntsPORej TR TH div, #gvAttchmntsPORej TR TD div,
        #gvAttchmntsPOPark TR TD, #gvAttchmntsPOPark TR TH, #gvAttchmntsPOPark TR TH div, #gvAttchmntsPOPark TR TD div, #gvApDetailsPark TR TD,
        #gvApDetailsPark TR TH, #gvApDetailsPark TR TH div, #gvApDetailsPark TR TD div, #gvExpPark TR TD, #gvExpPark TR TH, #gvExpPark TR TH div,
        #gvExpPark TR TD div, #gvPOPark TR TD, #gvPOPark TR TH, #gvPOPark TR TH div, #gvPOPark TR TD div, #gvMultiPOApprove TR TD, #gvMultiPOApprove TR TH,
        #gvMultiPOApprove TR TH div, #gvMultiPOApprove TR TD div, #gvAttchmnts TR TD, #gvAttchmnts TR TH, #gvAttchmnts TR TH div, #gvAttchmnts TR TD div,
        #gvAttchmnts_Appr TR TD, #gvAttchmnts_Appr TR TH, #gvAttchmnts_Appr TR TH div, #gvAttchmnts_Appr TR TD div,
        #gvAttchmntsRej TR TD, #gvAttchmntsRej TR TH, #gvAttchmntsRej TR TH div, #gvAttchmntsRej TR TD div,
        #gvAttchmntsPark TR TD, #gvAttchmntsPark TR TH, #gvAttchmntsPark TR TH div, #gvAttchmntsPark TR TD div,
        #gvApDetailsPark TR TD, #gvApDetailsPark TR TH, #gvApDetailsPark TR TH div, #gvApDetailsPark TR TD div,
        #gvReimburse TR TD, #gvReimburse TR TH, #gvReimburse TR TH div, #gvReimburse TR TD div {
            overflow: visible;
        }

        .tabsearch td {
            padding: 10px;
        }

        .tab td {
            padding: 5px;
            vertical-align: top;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">

            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                <uc8:leftmenu ID="leftmenu" runat="server" />
            </div>
            <!-- Main Section -->
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                <div class=" container-fluid  cd-main-content">
                    <asp:UpdateProgress ID="UpdateProgress_Appr" runat="server">
                        <ProgressTemplate>
                              <div id="overlay">
                                <div id="modalprogress">
                                    <img src="images/Loaders/image_855859.gif" />
                                </div>
                            </div>
                        </ProgressTemplate>
                    </asp:UpdateProgress>
                    <section class="grid_7" style="padding-top: 0px">
                        <div class="main-content grid_4 alpha" style="padding-top: 0px">
                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 70px;">
                                    <div class="page-title">Accounts Payable Approval</div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right">
                                    <div class="pull-right">
                                        <asp:Button ID="Batchdetails" runat="server" CssClass="btn btn-info"
                                            OnClick="BatchData" Text="BatchDetails" />
                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="ReloadData" />
                                    </div>
                                </div>
                            </div>

                            <section>
                                <!-- the tabs -->
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
                                <div>
                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div class="col-sm-5">
                                            <label class="form-label label_setting" for="orgcode">Select Type:</label>
                                        </div>
                                        <div class="col-sm-7">
                                            <asp:DropDownList ID="ddlType" runat="server" DataTextField="Description" CssClass="form-control selectpicker" data-live-search="true" DataValueField="CodeKey"
                                                AutoPostBack="True" OnSelectedIndexChanged="rblExpType_SelectedIndexChanged"
                                                onchange="javascript:showLoadOnTypeChnge(); getAPApprovalReqCnt(this);" Width="200px">
                                            </asp:DropDownList>
                                            <asp:HiddenField ID="hdnExpProcessType" runat="server" />
                                            <asp:HiddenField ID="HiddenField6" runat="server" />
                                            <asp:HiddenField ID="hdnPreApproved_Mgr" runat="server" />
                                            <asp:HiddenField ID="hdnIsMgrPreApproved_Mgr" runat="server" />
                                        </div>
                                    </div>

                                    <div class="clearfix"></div>
                                    <!-- tab "panes" -->
                                    <ul class="nav nav-tabs" role="tablist">
                                        <% if (Session["AppFlag"].ToString().ToLower() == "n")
                                           {%>
                                        <li role="presentation" class="active"><a href="#pending" aria-controls="pending" class="pend" role="tab" data-toggle="tab">
                                            <label>Pending(<%=pendReqNum%>)</label></a></li>
                                        <% }%>
                                        <li role="presentation"><a href="#approved" aria-controls="approved" class="appr" role="tab" data-toggle="tab">
                                            <label>Approved(<%=apprReqNum%>)</label></a></li>
                                        <% if (Session["AppFlag"].ToString().ToLower() == "n")
                                           {%>
                                        <li role="presentation"><a href="#rejected" aria-controls="rejected" class="rejected" role="tab" data-toggle="tab">
                                            <label>Rejected(<%=rejReqNum%>)</label></a></li>
                                        <li role="presentation"><a href="#parked" aria-controls="parked" class="parked" role="tab" data-toggle="tab">
                                            <label>Parked(<%=parkedReqNum%>)</label></a></li>
                                        <%} %>
                                    </ul>
                                    <!-- tab "panes" -->
                                    <div class="tab-content" style="padding-bottom: 100px;">
                                        <!-- Pending Tab Starts Here -->
                                        <div role="tabpanel" class="tab-pane active" id="pending" style="overflow-x: auto;">
                                            <asp:PlaceHolder ID="plcPending" runat="server">
                                                <section>
                                                    <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                                                    </asp:Timer>
                                                    <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                                                        <Triggers>
                                                            <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                                            <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                                            <asp:PostBackTrigger ControlID="btnSendToVendYes" />
                                                            <asp:PostBackTrigger ControlID="btnSendToVendNo" />
                                                            <asp:PostBackTrigger ControlID="btnCommentsSave" />
                                                            <asp:PostBackTrigger ControlID="btnParkAndSubmit" />
                                                            <asp:PostBackTrigger ControlID="btnApprove" />
                                                            <asp:PostBackTrigger ControlID="btnExportApproved" />
                                                        </Triggers>
                                                        <ContentTemplate>
                                                            <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                            <asp:HiddenField ID="ReqID" runat="server" />
                                                            <div id="dvMainMsg" runat="server"></div>
                                                            <div id="dvHButtons" runat="server" style="display: none">
                                                                <asp:HiddenField ID="hdnMainApproval" runat="server" />
                                                                <% if (ddlType.SelectedValue == "PO")
                                                                   {%>
                                                                <asp:Button ID="btnHPark" runat="server" Text="Park PO" CssClass="btn btn-info" OnClick="ParkPO_Header" />
                                                                <%} %>
                                                                <asp:Button ID="btnHApprove" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="Approve_Header" />
                                                                <br />
                                                                <br />
                                                            </div>
                                                            <div>
                                                                <div class="form-group   has-feedback" style="width: 350px !important;">
                                                                    <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server" Width="300px" placeholder="Type in any column details to search.." />
                                                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                                </div>

                                                            </div>
                                                            <br />
                                                            <isx:CoolGridView AllowPaging="false" ID="gvApDetails" runat="server" AutoGenerateColumns="false"
                                                                Height="550%" Width="1000px" GridLines="None"
                                                                OnRowDataBound="gvApDetails_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                        <HeaderTemplate>
                                                                            <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this);" />
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this)" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="RequestID">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkRequestID" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                                OnCommand="SortExpressionPen" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test" OnClick="Edit"
                                                                                    Text='<%#Eval("RequestID")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="AppliedBy" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("UserName")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="SubmittedOn">
                                                                        <ItemTemplate>
                                                                            <label><%#Convert.ToDateTime(Eval("ActionDate")).ToShortDateString()%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPreAmount" runat="server" Text="Pre-Amount" CommandArgument="PreAmount"
                                                                                OnCommand="SortExpressionPen" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblPAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                                OnCommand="SortExpressionPen" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Purpose" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                                OnCommand="SortExpressionPen" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("Purpose")%></label>
                                                                            <asp:HiddenField ID="hdnMGReqID" runat="server" Value='<%#Eval("requestId")%>' />
                                                                            <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("UserID")%>' />
                                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsManagerPreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                                            <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                                            <asp:HiddenField ID="hdnManagerID" runat="server" Value='<%#Eval("ManagerID")%>' />
                                                                            <asp:HiddenField ID="hdnPreAmnt" runat="server" Value='<%#Eval("PreAmount")%>' />
                                                                            <asp:HiddenField ID="hdnActAmnt" runat="server" Value='<%#Eval("ActualAmount")%>' />
                                                                            <asp:HiddenField ID="hdnManagerEmail" runat="server" Value='<%#Eval("ManagerEmail")%>' />
                                                                            <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                                            <asp:HiddenField ID="hdnUserName" runat="server" Value='<%#Eval("UserName")%>' />
                                                                            <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                                                            <asp:HiddenField ID="hdnOnBehalfOf" runat="server" Value='<%#Eval("onBeHalfOf")%>' />
                                                                            <asp:HiddenField ID="hdnVendor" runat="server" Value='<%#Eval("PreferredVendor")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="View">
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" OnClick="Edit"
                                                                                Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px">
                                                                        <label>
                                                                            No data to display</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                            <asp:Panel ID="pnlAddEdit" runat="server" Style="display: none;">
                                                                <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 600px; width: 1100px;">


                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnApprove" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="btnApprove_Click" />
                                                                                    <asp:Button ID="btnReject" runat="server" Text="Reject" CssClass="btn btn-info" OnClick="btnReject_Click" />
                                                                                    <asp:Button ID="btnPOExportData_pen" runat="server" OnClick="ExportPen" Text="   Print/Email" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadEditData" Text="Refresh" CssClass="btn btn-info" runat="server" OnClick="LoadEditData" />
                                                                                    <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>



                                                                    <div style="padding: 15px">
                                                                        <div class="divfieldset">
                                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div id="dvError_Pen" runat="server" style="color: Red"></div>
                                                                            </div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">RequestID</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <%=Session["ReqID"]%>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <asp:HiddenField ID="HiddenField1" runat="server" />
                                                                                <asp:LinkButton ID="lknCmnt" runat="server" CommandArgument="test" OnClick="Comments"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                            </div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Manager Email:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:DropDownList ID="ddlManagerEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                        CssClass="form-control selectpicker" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                    <asp:TextBox ID="txtManagerEmail" CssClass="form-control" runat="server" Visible="false"></asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Start Date:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="txtTripStartDate" CssClass="form-control" runat="server" class="date"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                                        <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Purpose:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:TextBox CssClass="form-control" ID="txtPurpose" runat="server"></asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Payable To:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:TextBox CssClass="form-control" ID="txtOnBehalfOf" runat="server"></asp:TextBox></td>		   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="lnk" href="javascript:void(0)" onclick="collapse('lnk', 'col')" style="float: left; margin-top: -13px; margin-bottom: 10px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="col" class="divfieldset" style="display: block">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvExp" runat="server" AllowPaging="false" AutoGenerateColumns="False"
                                                                                                Height="184px" GridLines="None" OnRowDataBound="gvExp_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkPenView" Text="View" OnCommand="ViewPendingDetails"
                                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex %>' ToolTip="View Details">
                                                                                                            <img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseType">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseDate">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                                                            <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label>
                                                                                                            <label>
                                                                                                                <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' />
                                                                                                            </label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Total Amount (with Tax)">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="AccountCode">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:LinkButton runat="server" ID="lnkAccCode" Text='<%#Eval("AccountCode") %>' CommandArgument='<%# Eval("AccountCode")+ ";" +Eval("expLineNo")%>'
                                                                                                                    OnCommand="EditAccountCode"></asp:LinkButton></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="payment Type" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="City">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' />
                                                                                                            </label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Attachments">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                                                Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                                            <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                                            <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                                            <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                                            <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="IsReimbursable">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:HiddenField ID="hdnReimbChk" runat="server" Value='<%#Eval("Reimbursable") %>' />
                                                                                                            <asp:CheckBox ID="chkIsPenReimb" runat="server" />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                            </isx:CoolGridView>
                                                                                            <asp:HiddenField ID="hdnPRowIndex" runat="server" />
                                                                                            <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                                                            <asp:HiddenField ID="hdnSeq1" runat="server" />
                                                                                            <asp:HiddenField ID="hdSeq1" runat="server" />
                                                                                            <asp:HiddenField ID="hdnPSeq1" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="hdnComments" />
                                                                            </div>
                                                                        </div>
                                                                        <br />

                                                                        <div class="divfieldset alert alert-info">
                                                                            <table style="font-weight: bold; width: 100%" align="center">
                                                                                <tr>
                                                                                    <td style="text-align: right; width: 12%">
                                                                                        <label>Pre-Expenses Total:</label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%">
                                                                                        <label><%=preExpTotal%></label>
                                                                                    </td>
                                                                                    <td style="text-align: right; width: 12%">
                                                                                        <label>Expenses Total:</label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%">
                                                                                        <label><%=expTotal%></label>
                                                                                    </td>
                                                                                    <td style="text-align: right; width: 12%; color: Green">
                                                                                        <label>
                                                                                            <asp:Label ID="lblPGrandTotal" Text="Grand Total: " runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%; color: Green">
                                                                                        <label>
                                                                                            <asp:Label ID="lblPGrandTotalAmnt" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                                                                TargetControlID="lnkFake" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                                            </cc1:ModalPopupExtender>
                                                            <!-- view EXP Pending starts here-->
                                                            <asp:Panel ID="pnlVPending" runat="server" Style="display: none">
                                                                <div class="main-content" id="dvViewPending" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0px 0px 10px 0px; height: 400px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnVPCancel" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <%--
                                                    <section>--%>
                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div style="text-align: right">
                                                                                <asp:Button ID="btnVPPrev" runat="server" Text="Previous" CssClass="btn btn-info" OnClick="ViewPreviousExp_Pending" />
                                                                                <asp:Button ID="btnVPNext" runat="server" Text="Next" CssClass="btn btn-info" OnClick="ViewNextExp_Pending" />
                                                                            </div>

                                                                            <div id="dvEditVPType" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Type</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <
                                                                                    <asp:TextBox ID="lblddlVPExpType" runat="server" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPJob" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Code</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVPJobCd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPPhs" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Phase Code</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPPhcd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPJC" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Category</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPCatCode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVAccCode" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Account Name:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVAccCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVClass" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Class:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVClass" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>

                                                                            <div class="subheader mb10">
                                                                                <h4>Expense Details</h4>
                                                                            </div>


                                                                            <div id="dvEditVPED" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVPDate" runat="server" CssClass="form-control" ReadOnly="true">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPCV" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Cities visited<</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPCity" runat="server" CssClass="form-control" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="SpVPOthercity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPOther" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPFromcity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPFromcity" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPFromOther" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPOtherFromCity" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPToCity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPTocity" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPToOther" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPOtherToCity" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPFD" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVPFromdate" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPTD" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVPTodate" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>
                                                                            <div id="dvEditVPPreVendor" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Preferred Vendor</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPPreVendor" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div id="dvEditVPAgName" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Agent Name</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblPAgName" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPItNo" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Itinarary number</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPItNo" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>

                                                                            <div id="dvEditVPTT" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Trip</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPTotTrip" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPLN" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">LessNorm</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPLNorm" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPReimbt" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Reimbursement</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPReimbt" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVSalesTax" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Sales Tax:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVSalesTax" CssClass="form-control" runat="server" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVFoodTax" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Food Tax:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVFoodTax" runat="server" ReadOnly="true" Width="65px"></asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div id="dvEditVPPA" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Pre-Amount</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPPreAmt" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPAmt" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Amount (with Tax)</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPActAmt" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVPPM" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Payment Mode</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPPayMode" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="Div3" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Comments</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPcomnts" CssClass="form-control" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                        Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>
                                                                            <div class="subheader mb10">
                                                                                <h4>Budget Details</h4>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Budget</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBudg" CssClass="budgfld form-control" />
                                                                                    <asp:HiddenField ID="hdnVYear" runat="server" />
                                                                                    <asp:HiddenField ID="hdnVExpRowTotAmnt" runat="server" />
                                                                                </div>
                                                                            </div>



                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Current Balance</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpCurrBal" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Remaining$</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpRemBudg" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Bal. After Expense</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBalAfter" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="clearfix"></div>
                                                                            <div class="subheader mb10">
                                                                                <h4>Attachment Details</h4>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:LinkButton ID="LinkViewAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                    Text="View attachments"></asp:LinkButton>
                                                                                <label id="lblPenAtt" runat="server" style="display: none">
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkVPending" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_PendingExp" runat="server" DropShadow="false" PopupControlID="pnlVPending"
                                                                TargetControlID="lnkVPending" BackgroundCssClass="modalBackground1" CancelControlID="btnVPCancel">
                                                            </cc1:ModalPopupExtender>
                                                            <!-- view EXP Pending ends here-->
                                                            <asp:Panel ID="pnlComments" runat="server" Style="display: none">
                                                                <div id="dvCmnts" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Comments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCommentsSave" runat="server" Text="Ok" CssClass="btn btn-info" OnClick="btnCommentsSave_Click"></asp:Button>
                                                                                    <asp:Button ID="btnCommentsClose" runat="server" Text="Close" CssClass="btn btn-info" OnClick="btnCommentsClose_Click" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvCommentsEntry" runat="server">
                                                                                <p>
                                                                                    <asp:Label ID="lblCmntLabel" runat="server"></asp:Label>
                                                                                </p>
                                                                                <div id="dvErrorc" runat="server" style="color: Red">
                                                                                </div>
                                                                                <br />
                                                                                <!-- input form. you can press enter too -->
                                                                            </div>
                                                                            <div id="dvCommentsPop" runat="server">
                                                                                <div id="widgetComments" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                            <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_Cmt" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Comments" runat="server" DropShadow="false" PopupControlID="pnlComments"
                                                                TargetControlID="lnkFake_Cmt" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div id="dvAtt" runat="server">
                                                                        </div>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="200px" Height="300px"
                                                                                        AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                                        OnRowDataBound="gvAttchmnts_RowDataBound">
                                                                                        <Columns>
                                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                                <ItemTemplate>
                                                                                                    <asp:ImageButton runat="server" ID="imgAttchmnt" Width="55px" Height="65px" OnClick="DownLdAtt" />
                                                                                                    <asp:HiddenField ID="hdnAttName" runat="server" Value='<%# Eval("fileName")%>' />
                                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                    <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                        </Columns>
                                                                                    </isx:CoolGridView>
                                                                                </td>
                                                                                <td>
                                                                                    <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                                                TargetControlID="lnkAtt" BackgroundCssClass="modalBackground3" CancelControlID="btnAttClose">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAcc" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    AccountCode
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAccSave" runat="server" OnClick="btnAccSave_Click" Text="Save" CssClass="buttonnew-green" />
                                                                                    &nbsp;
                                                                            <asp:Button ID="btnAccClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div id="dvAccMsg" runat="server">
                                                                        </div>
                                                                        <br />
                                                                        Account Code for the selected Account is:&nbsp;
                                                                <asp:TextBox ID="txtEditAccCode" CssClass="form-control" runat="server"></asp:TextBox>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAcc" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popAcc" runat="server" DropShadow="false" PopupControlID="pnlAcc"
                                                                TargetControlID="lnkAcc" BackgroundCssClass="modalBackground1" CancelControlID="btnAccClose">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlConfirm" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 380px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Alert
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSendToVendYes" runat="server" Text="Yes" CssClass="btn btn-info" OnClick="btnSendToVendYes_Click" />
                                                                                    <asp:Button ID="btnSendToVendNo" runat="server" Text="No" CssClass="btn btn-info" OnClick="btnSendToVendNo_Click" />

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div id="dvVendMsg" runat="server">
                                                                            </div>
                                                                            <small>
                                                                                <label>
                                                                                    Send this PO to the Vendor :</label></small><br />
                                                                            <br />
                                                                            <asp:RadioButtonList ID="rblVend" runat="server" RepeatDirection="Horizontal" CssClass="rbl"
                                                                                Width="100px">
                                                                                <asp:ListItem>Email</asp:ListItem>
                                                                                <asp:ListItem>Fax</asp:ListItem>
                                                                            </asp:RadioButtonList>
                                                                            <br />
                                                                            <br />
                                                                            <asp:TextBox ID="txtVendEmailAppr" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            <asp:HiddenField ID="hdnSysOrderFlg" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendEmail" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendEmailFlg" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkConfirm" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popConfirm" runat="server" DropShadow="false" PopupControlID="pnlConfirm"
                                                                TargetControlID="lnkConfirm" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlPOAddEdit" runat="server" Style="display: none;">
                                                                <div id="Div5" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px; width: 1100px;">


                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View PO details
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnParkIt" runat="server" OnClick="ParkPOApproval" Text="Park PO" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnApprovePO" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="btnApprove_Click" />
                                                                                    <asp:Button ID="btnRejectPO" runat="server" Text="Reject" CssClass="btn btn-info" OnClick="btnReject_Click" />
                                                                                    <asp:Button ID="btnPOShwHist" runat="server" Text="Show History" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnPOExport" runat="server" Text="Export Data" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadEditPOData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="LoadEditPOData" />
                                                                                    <asp:Button ID="btnPOClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                                                                <div id="dvPoError" runat="server" style="color: Red; font-weight: bold">
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">PO Number:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <label><%=Session["PONum"]%></label>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Company Code:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <label><%=Session["CompCode"] %></label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:HiddenField ID="HiddenField7" runat="server" />
                                                                                <asp:LinkButton ID="lnkPOCmnts" runat="server" CommandArgument="test" OnClick="Comments"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="clear: both">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Shipping Address:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:Label ID="lblShipAddr" runat="server"></asp:Label>
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
                                                                                    <asp:Button ID="btnShipAddress" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Billing Address:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:Label ID="lblBillAddr" runat="server"></asp:Label>
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
                                                                                    <asp:Button ID="btnBillAddr" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Manager Email:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:DropDownList ID="ddlPOMgrEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                        CssClass="form-control selectpicker" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Start Date:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="txtPOTripStrtDate" runat="server" CssClass="form-control" class="date" ReadOnly="true"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnYear" runat="server" />
                                                                                        <asp:HiddenField ID="hdnTax" runat="server" />
                                                                                        <asp:HiddenField ID="HiddenField10" runat="server" />
                                                                                        <asp:HiddenField ID="HiddenField11" runat="server" />
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">PreferredVendor:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:DropDownList ID="ddlPreVendor" runat="server" DataTextField="PreferredVendor"
                                                                                        DataValueField="PreferredVendor" CssClass="form-control selectpicker" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Purpose:</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:TextBox ID="txtPoPurpose" CssClass="form-control" runat="server"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job</label>
                                                                                </div>
                                                                                <div class="col-sm-7 ">
                                                                                    <asp:DropDownList ID="ddlJobs" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:Button ID="btnAttach" runat="server" Text="Attachments" CssClass="btn btn-info" OnClick="btnAttachPO_Click" />
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="A1" href="javascript:void(0)" onclick="collapse('lnk', 'col')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="Div14" class="divfieldset">
                                                                                <div class="clearfix">
                                                                                    <br />
                                                                                </div>
                                                                                <br />
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvPO" runat="server" AllowPaging="false" PageSize="10" AutoGenerateColumns="False"
                                                                                                Height="200px" GridLines="None" OnRowCommand="gvPO_RowCommand"
                                                                                                OnRowDataBound="gvPO_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkpoEdit" Text="View" CommandName="View" OnCommand="EditPODetails"
                                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;
                                                                                                <asp:LinkButton runat="server" ID="lnkPOview" Text="View" CommandName="View" OnCommand="ViewPODetails"
                                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText=" Line No">
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
                                                                                                    <asp:TemplateField HeaderText="Account Code">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="250px"
                                                                                                        HeaderStyle-Width="250px">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("expItem")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Item Code">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblItemCode" runat="server" Text='<%#Eval("itemCode") %>'></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:LinkButton ID="lnkItemCode" runat="server" Text='<%#Eval("itemCode") %>' OnCommand="DisplayItemNotes"
                                                                                                                    CommandArgument='<%#Eval("itemCode") + ";" + Eval("othercity") %>'></asp:LinkButton></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Description">
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
                                                                                                    <asp:TemplateField HeaderText="POAmnt">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("PreAmount")%>'></asp:Label></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Budget">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("budget")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="BalanceAfterPO" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("balAfterPo")%></label>
                                                                                                            <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit")%>' />
                                                                                                            <asp:HiddenField ID="hdnItemNote" runat="server" Value='<%#Eval("othercity") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                            </isx:CoolGridView>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="hdnPORowTotAmnt" />
                                                                                <asp:HiddenField runat="server" ID="hdnPOOldAmount" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkPO" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="pop_EditPO" runat="server" DropShadow="false" PopupControlID="pnlPOAddEdit"
                                                                CancelControlID="btnPOClose" TargetControlID="lnkPO" BackgroundCssClass="modalBackground">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAddPO" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div18" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 1100px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    <asp:Label ID="lbPOlHeading_pen" runat="server"></asp:Label></h2>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btSaveEditPO" runat="server" Text="Save" CssClass="btn btn-info" OnClick="btSaveEditPO_Click" />
                                                                                    <asp:Button ID="btnClosePOItem" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px">
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
                                                                                        <table>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Department<em>*</em> :</label><br />
                                                                                                                <asp:DropDownList ID="ddlDepartment" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                                                    AutoPostBack="true" OnSelectedIndexChanged="ddlDepartment_SelectedIndexChanged" CssClass="form-control selectpicker" data-live-search="true">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Name<em>*</em> :</label>
                                                                                                                </label>
                                                                                                        <br />
                                                                                                                <asp:DropDownList ID="ddlExpItem" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                                    CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlExpItem_SelectedIndexChanged">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Code<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtAccCode" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Item Code<em>*</em> :</label>
                                                                                                                <br />
                                                                                                                <asp:DropDownList ID="ddlItemCode" runat="server" DataValueField="ItemCode" DataTextField="ItemCode"
                                                                                                                    OnSelectedIndexChanged="ddlItemCode_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true">
                                                                                                                </asp:DropDownList>
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
                                                                                                                <label>
                                                                                                                    Description<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtDescr" CssClass="form-control" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <div id="dvCommts_Pen" runat="server" visible="false">
                                                                                                                    <label>
                                                                                                                        Comment<em>*</em> :
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <asp:TextBox ID="txtComnts" CssClass="form-control" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Vendor Part No:
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtVendPtNo" CssClass="form-control" runat="server" onkeydown="TabIndex('txtQuantity', event)"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl cell">
                                                                                                                <small>
                                                                                                                    <label>
                                                                                                                        Req. Del. Date:
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                                        <asp:TextBox ID="txtReqDelDate" CssClass="form-control" runat="server" Width="70px" class="date"></asp:TextBox>
                                                                                                                        <div class="input-group-addon">
                                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                                        </div>
                                                                                                                    </div></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Quantity<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtQuantity" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Unit Price<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtUnitPrice" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Estimated shipping Cost<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtShipCost" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Package/Unit<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPkgUnit" CssClass="form-control" runat="server"></asp:TextBox>
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
                                                                                                                <label align="left">
                                                                                                                    Calculate TaxAmt :
                                                                                                                </label>
                                                                                                                <asp:CheckBox ID="chkCalTax" runat="server" CssClass="form3Checkbox4" Width="24px" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');" />
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Percent<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTaxPercent" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txttax" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Line Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPoAmount" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
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
                                                                                                                <label style="color: Black">
                                                                                                                    Budget<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBudget" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Current Balance<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtCurrBal" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Remaining $<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtRemain" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Balance after PO<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBalAfterPO" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
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
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAddPO" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popAddPO" runat="server" DropShadow="false" PopupControlID="pnlAddPO"
                                                                TargetControlID="lnkAddPO" CancelControlID="btnClosePOItem" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlExportData_Pen" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Export Data
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnExpDataclose_pen" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px;">
                                                                            <div id="dvExpDataMsg_pen" runat="server">
                                                                            </div>
                                                                            <asp:Button ID="btnPrintPO_pen" runat="server" Text="Print" CssClass="btn btn-info" OnClick="PrintPO_Pen" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpEmail_Pen" runat="server" Text="Email" CssClass="btn btn-info" OnClick="PenExportAndEmail" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpVendEmail_pen" runat="server" Text="Vendor Email" CssClass="btn btn-info" OnClick="SendExpVendorEmail_pen"></asp:Button>
                                                                            <asp:HiddenField ID="hdnMailTo_pen" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkExportData_pen" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender runat="server" ID="popExpData_Pen" DropShadow="false" PopupControlID="pnlExportData_Pen"
                                                                TargetControlID="lnkExportData_pen" BackgroundCssClass="modalBackground1" CancelControlID="btnExpDataclose_pen">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlMultEmail_pen" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div25" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Send Email
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSave_pen" runat="server" Text="Email" CssClass="btn btn-info" Visible="true" OnClick="ValidateEmail_pen"></asp:Button>&nbsp;
                                                                                    <asp:Button ID="btnEmailClose_Pen" runat="server" Text="Close" CssClass="btn btn-info" />&nbsp;
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="alert alert-info">
                                                                                <small>
                                                                                    <label><em>*</em>Seperate multiple email addresses with a comma ( , ).</label>
                                                                                </small>
                                                                            </div>
                                                                            <div id="DivEmailErr_pen" runat="server">
                                                                            </div>
                                                                            <label style="vertical-align: top">
                                                                                Mail to:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <asp:TextBox ID="txtMulEmail_pen" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_pen');"></asp:TextBox>
                                                                            <br />
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:LinkButton ID="lnkCCEmail_pen" runat="server" OnClick="AddPenCCEmail" CssClass="button button-blue"
                                                                                            Text="AddCC"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="dvCCEmail_pen" runat="server" style="display: none">
                                                                                            <asp:TextBox ID="txtCCEmail_pen" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_pen');">
                                                                                            </asp:TextBox>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkEmail_pen" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popMulEmail_pen" runat="server" DropShadow="false" PopupControlID="pnlMultEmail_pen"
                                                                CancelControlID="btnEmailClose_Pen" TargetControlID="lnkEmail_pen" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlParkPO" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div29" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Park PO
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnParkAndSubmit" runat="server" Text="Submit" CssClass="btn btn-info" Visible="true" OnClick="ParkAndSubmitApproval"></asp:Button>&nbsp;
                                                                                 <asp:Button ID="btnCloseParkPO" runat="server" Text="Close" CssClass="btn btn-info" OnClick="CloseParkPO" />&nbsp;  
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvParkMsg" runat="server" style="font-weight: bold">
                                                                            </div>
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td width="100%" colspan="2">
                                                                                        <label>
                                                                                            Please provide Number of Days and Comments to Park PO and click Submit to proceed.
                                                                                    Click Close to cancel.</label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="25%" align="right">
                                                                                        <label>
                                                                                            <em>*</em>Park PO Until:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td width="75%" align="left">
                                                                                        <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                            <asp:TextBox ID="txtParkingDate" runat="server" CssClass="form-control" class="date"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnCurrentDate" runat="server" />
                                                                                            <div class="input-group-addon">
                                                                                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                            </div>
                                                                                        </div>

                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="25%" align="right">
                                                                                        <label>
                                                                                            <em>*</em>Comments:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td width="75%" align="left">
                                                                                        <asp:TextBox ID="txtParkComments" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkPartPO" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popParkPO" runat="server" DropShadow="false" PopupControlID="pnlParkPO"
                                                                TargetControlID="lnkPartPO" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlItemNotes" runat="server" DefaultButton="btnCloseItemNotes" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Item Notes
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCloseItemNotes" runat="server" Text="Ok" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Code:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblDispItemCode" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Notes:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblItemNotes" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <br />
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkItemNotes" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popItemNotes" runat="server" DropShadow="false" CancelControlID="btnCloseItemNotes"
                                                                PopupControlID="pnlItemNotes" TargetControlID="lnkItemNotes" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAttPO" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClosePO" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvAttPO" runat="server">
                                                                            </div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <isx:CoolGridView ID="gvAttchmntsPO" runat="server" AllowPaging="false" Width="300px"
                                                                                            Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                                            OnRowDataBound="gvAttchmntsPO_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:ImageButton runat="server" ID="imgAttchmntPO" Width="55px" Height="65px" OnClick="DownLdAttPO"></asp:ImageButton>
                                                                                                        <asp:HiddenField ID="hdnattIdPO" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                        <asp:HiddenField ID="hdnAttOrgNamePO" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                        <asp:HiddenField ID="hdnOrgNamePO" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                        <asp:HiddenField ID="hdnDrftNamePO" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                            <EmptyDataTemplate>
                                                                                                <div style="width: 200px">
                                                                                                    <label></label>
                                                                                                    No attachments to display</label>
                                                                                                </div>
                                                                                            </EmptyDataTemplate>
                                                                                        </isx:CoolGridView>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivPO" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:HiddenField ID="hdnAttIdsRetPO" runat="server" />
                                                                            <asp:HiddenField ID="hdnDftCntPO" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAttPO" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_AttPO" runat="server" DropShadow="false" PopupControlID="pnlAttPO"
                                                                TargetControlID="lnkAttPO" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClosePO">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlMultiPOApproval" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Approve POs
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnPOMultiApprove" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="Approve_MultiPO" />
                                                                                    <asp:Button ID="btnClosePOMultiApprove" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 15px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvMultiPOErr" runat="server"></div>
                                                                            <isx:CoolGridView ID="gvMultiPOApprove" runat="server" AllowPaging="false" AutoGenerateColumns="false"
                                                                                Height="300px" Width="970px" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                                OnRowDataBound="gvMultiPOApprove_RowDataBound">
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderText="OurRef#" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("OurRefNo") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Vendor" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                        <ItemTemplate>
                                                                                            <label><%#Eval("Vendor") %></label>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Purpose" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                        <ItemTemplate>
                                                                                            <itemtemplate><label><%#Eval("Purpose") %></label></itemtemplate>
                                                                                            <asp:HiddenField ID="hdnOurRefNo" Value='<%#Eval("OurRefNo") %>' runat="server" />
                                                                                            <asp:HiddenField ID="hdnUserID" Value='<%#Eval("UserID") %>' runat="server" />
                                                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("MgrPreApproved")%>' />
                                                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Send To Vendor" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                        <ItemTemplate>
                                                                                            <asp:CheckBox ID="chk" runat="server" />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Contact Options" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                                        <ItemTemplate>
                                                                                            <asp:RadioButtonList ID="rdEmailFax" runat="server" RepeatDirection="Horizontal" TextAlign="Right" Width="150px" Enabled="false">
                                                                                                <asp:ListItem Value="1" Text="Email" Selected="True"></asp:ListItem>
                                                                                                <asp:ListItem Value="2" Text="Fax"></asp:ListItem>
                                                                                            </asp:RadioButtonList>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                    <asp:TemplateField HeaderText="Contact Details" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                                        <ItemTemplate>
                                                                                            <asp:TextBox ID="txtEmailFax" CssClass="form-control" runat="server" Enabled="false"></asp:TextBox>
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </isx:CoolGridView>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkMultiPOApproval" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popMultiPOApproval" runat="server" DropShadow="false" PopupControlID="pnlMultiPOApproval"
                                                                TargetControlID="lnkMultiPOApproval" BackgroundCssClass="modalBackground" CancelControlID="btnClosePOMultiApprove">
                                                            </cc1:ModalPopupExtender>
                                                        </ContentTemplate>
                                                    </asp:UpdatePanel>
                                                </section>
                                            </asp:PlaceHolder>
                                        </div>
                                        <!-- Pending Tab Ends Here -->
                                        <!-- Approved Tab Starts Here -->
                                        <div role="tabpanel" class="tab-pane " id="approved" style="overflow-x: auto;">
                                            <asp:PlaceHolder ID="plcApproved" runat="server">
                                                <section>
                                                    <asp:Timer ID="Timer2" runat="server" Interval="100000000">
                                                    </asp:Timer>
                                                    <asp:UpdatePanel ID="updApproved" runat="server" UpdateMode="Conditional">
                                                        <Triggers>
                                                            <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
                                                            <asp:AsyncPostBackTrigger ControlID="btnRefresh1" EventName="Click" />
                                                        </Triggers>
                                                        <ContentTemplate>
                                                            <asp:Button ID='btnRefresh1' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                            <asp:HiddenField ID="hdnOnBehalfOfAppr" runat="server" />
                                                            <asp:Label ID="lblLoggedInUserEmail" runat="server" Style="display: none"><%=Session["Email"] %></asp:Label>
                                                            <div id="dvApprovedMainMsg" runat="server"></div>
                                                            <div>
                                                                <table width="98%">
                                                                    <tr>
                                                                        <td width="60%">
                                                                            <div class="form-group   has-feedback" style="width: 350px !important;">
                                                                                <asp:TextBox ID="txtKeywordSearchAppr" CssClass="filterdata form-control" runat="server" Width="300px" placeholder="Type in any column details to search.." />
                                                                                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                                            </div>

                                                                            <a id="lnkAdvSearchAppr" runat="server" href="#" onclick="$find('popAdvSearchAppr').show();">Advanced</a>&nbsp;<span style="font-size: 1.5em;">|</span>&nbsp;<asp:LinkButton ID="lnkClearSearch" runat="server" Text="Clear Filters" OnClick="lnkClearSearch_Click"></asp:LinkButton>
                                                                            <cc1:ModalPopupExtender ID="popAdvSearchAppr" runat="server" TargetControlID="lnkAdvSearchAppr"
                                                                                PopupControlID="pnlAdvSearchAppr" Y="280">
                                                                            </cc1:ModalPopupExtender>
                                                                            <asp:Panel ID="pnlAdvSearchAppr" runat="server" Style="display: none">
                                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; background-color: white; min-height: 80px; width: 300px">
                                                                                    <div class="divfieldset">
                                                                                        <div id="dvCloseBtn" style="text-align: right; vertical-align: top; height: 20px">
                                                                                            <a href="javascript:void(0);" id="ancClose" runat="server" onclick="$find('popAdvSearchAppr').hide();">
                                                                                                <img alt="close" src="images/icons/cross.png" /></a>
                                                                                        </div>
                                                                                        <div id="dvAmntErrAdvSearchAppr" runat="server"></div>
                                                                                        <table class="tabsearch">
                                                                                            <tr>
                                                                                                <td><small>
                                                                                                    <label>From:</label></small></td>
                                                                                                <td>
                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                        <asp:TextBox ID="txtFrmDtAdvSearchAppr" CssClass="form-control" runat="server" class="date"></asp:TextBox>
                                                                                                        <div class="input-group-addon">
                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td><small>
                                                                                                    <label>To:</label></small></td>
                                                                                                <td>
                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                        <asp:TextBox ID="txtToDtAdvSearchAppr" CssClass="form-control" runat="server" class="date"></asp:TextBox>
                                                                                                        <div class="input-group-addon">
                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><small>
                                                                                                    <label>Amount:</label></small><br />
                                                                                                    <asp:DropDownList ID="ddlAmntSearchAdvSearchAppr" runat="server" CssClass="form-control selectpicker" data-live-search="true">
                                                                                                        <asp:ListItem Text="Equal to" Value="="></asp:ListItem>
                                                                                                        <asp:ListItem Text="Less than" Value="<"></asp:ListItem>
                                                                                                        <asp:ListItem Text="Greater than" Value=">"></asp:ListItem>
                                                                                                        <asp:ListItem Text="Less than or equal to" Value="<="></asp:ListItem>
                                                                                                        <asp:ListItem Text="Greater than or equal to" Value=">="></asp:ListItem>
                                                                                                    </asp:DropDownList>
                                                                                                    <asp:TextBox ID="txtAmntSearchAdvSearchAppr" runat="server" Height="19px" placeholder="Type in amount" CssClass="form-control"></asp:TextBox>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2">
                                                                                                    <asp:Button ID="btnAdvSearchAppr" runat="server" Text="Search" CssClass="btn btn-info" OnClick="btnAdvSearchAppr_Click" />
                                                                                                    <asp:Button ID="btnClearAdvSearch" runat="server" Text="Clear" CssClass="btn btn-info" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                        </td>
                                                                        <td width="38%" align="right">
                                                                            <asp:Button ID="btnExportApproved" runat="server" Text="Export" OnClick="btnExportApproved_Click" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <br />
                                                            <isx:CoolGridView AllowPaging="false" ID="gvApproved" runat="server" AutoGenerateColumns="false"
                                                                Height="370px" Width="100%" GridLines="None" OnRowDataBound="gvApproved_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="RequestID" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkRequestID" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test"
                                                                                    Text='<%#Eval("RequestID")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton></label>
                                                                            <cc1:HoverMenuExtender ID="hveAction" runat="server" TargetControlID="lnkReqEdit"
                                                                                PopupControlID="pnlAct" PopupPosition="Bottom">
                                                                            </cc1:HoverMenuExtender>
                                                                            <asp:Panel ID="pnlAct" runat="server">
                                                                                <div class="main-content popover-in-grid-style" style="">
                                                                                    <div style="padding: 10px;">
                                                                                        <div class="divfieldset">
                                                                                            <asp:LinkButton ID="lnkOpenExpense" runat="server" Text="Open Expense" OnClick="OpenExpense"
                                                                                                CssClass="actionLnk"></asp:LinkButton>
                                                                                            <asp:LinkButton ID="lnkRevertSts" runat="server" Text="Revert Status" OnClick="RevertStatus"
                                                                                                CssClass="actionLnk"></asp:LinkButton>
                                                                                            <asp:LinkButton ID="lnkReimburse" runat="server" Text="Remiburse" OnClick="Reimburse"
                                                                                                CssClass="actionLnk"></asp:LinkButton>
                                                                                            <asp:LinkButton ID="lnkOpnReimburse" runat="server" Text="OpenRemiburse" OnClick="OpenReimburse"
                                                                                                CssClass="actionLnk"></asp:LinkButton>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Sent To Vendor" ControlStyle-Width="100px" HeaderStyle-Width="100px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("VendorFlag")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="AppliedBy" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("UserName")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Approved By" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("actionBy")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPreAmount" runat="server" Text="Pre-Amount" CommandArgument="PreAmount"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblPAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Amount">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField>
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkReimbAmount" runat="server" Text="Reimbursed Amnt" CommandArgument="reimburseCnt"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblReimbAmount" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Paid To">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("userTitle")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="InvoiceAmnt">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPOINVAmount" runat="server" Text="InvoiceAmnt" CommandArgument="ActualAmount"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("ActualAmount")%></label>
                                                                            <asp:HiddenField ID="hdnActAmnt" runat="server" Value='<%#Eval("ActualAmount")%>' />
                                                                            <asp:HiddenField ID="hdnPreamnt" runat="server" Value='<%#Eval("PreAmount")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("Purpose")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Invoice">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkIn" runat="server" CommandArgument="test" OnClick="Edit_Inv"
                                                                                    Text="" ToolTip="Invoice"></asp:LinkButton></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Sent To QB">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkHSentToQB" runat="server" Text="Exported" CommandArgument="intrSyncFlag"
                                                                                OnCommand="SortExpressionApp" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkSentToQB" runat="server" OnClick="lnkSentToQB_Click"></asp:LinkButton>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText=" View">
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" OnClick="Edit_Appr"
                                                                                Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                            <asp:HiddenField ID="hdnMGReqID" runat="server" Value='<%#Eval("requestId")%>' />
                                                                            <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("UserID")%>' />
                                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsManagerPreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                                            <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                                            <asp:HiddenField ID="hdnManagerID" runat="server" Value='<%#Eval("ManagerID")%>' />
                                                                            <asp:HiddenField ID="hdnManagerEmail" runat="server" Value='<%#Eval("ManagerEmail")%>' />
                                                                            <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                                            <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                                                            <asp:HiddenField ID="hdnInvoiceCnt" runat="server" Value='<%#Eval("InvCnt")%>' />
                                                                            <asp:HiddenField ID="hdnprefVend" runat="server" Value='<%#Eval("preferredVendor")%>' />
                                                                            <asp:HiddenField ID="hdnOurRefNo" runat="server" Value='<%#Eval("OurRefNo")%>' />
                                                                            <asp:HiddenField ID="hdnUserName" runat="server" Value='<%#Eval("UserName")%>' />
                                                                            <asp:HiddenField ID="hdnActnDate" runat="server" Value='<%#Eval("ActionDate")%>' />
                                                                            <asp:HiddenField ID="hdnReimbCnt" runat="server" Value='<%#Eval("reimburseCnt")%>' />
                                                                            <asp:HiddenField ID="hdnStatusId" runat="server" Value='<%#Eval("statusId")%>' />
                                                                            <asp:HiddenField ID="hdnOnBehalfOf" runat="server" Value='<%#Eval("onBeHalfOf")%>' />
                                                                            <asp:HiddenField ID="hdnIntgrSyncFlag" runat="server" Value='<%#Eval("intrSyncFlag")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 300px">
                                                                        <label>
                                                                            No data found. Expand your search criteria.</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                            <asp:Panel ID="pnlAddEdit_Appr" runat="server" Style="display: none;">
                                                                <div id="Div6" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 550px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="Button1" runat="server" OnClick="Export" Text="Print/Email" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadApprEditData" Text="Refresh" CssClass="btn btn-info" runat="server" OnClick="LoadApprEditData" />
                                                                                    <asp:Button ID="btnClose_Appr" runat="server" Text="Close" CssClass="btn btn-info" />&nbsp;   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 15px">
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                            <div id="dvError_Appr" runat="server" style="color: Red; margin-bottom: 20px; text-align: center"></div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">RequestID:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <label style="font-weight: bold; padding-top: 7px"><%=Session["ReqID"]%></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                                            <asp:HiddenField ID="HiddenField4" runat="server" />
                                                                            <asp:LinkButton ID="lnkCmnt_Appr" runat="server" CommandArgument="test" OnClick="Comments_Appr"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                                            <cc1:HoverMenuExtender ID="hveShowIntgrSyncInfo" runat="server" TargetControlID="imgIntgrSync"
                                                                                PopupControlID="pnlShowIntgrSyncInfo" PopupPosition="Left">
                                                                            </cc1:HoverMenuExtender>
                                                                            <asp:Panel ID="pnlShowIntgrSyncInfo" runat="server">
                                                                                <div>
                                                                                    <div class="message info alert alert-info" style="font-size: 1.2em; margin-top: 35px;" id="dvIntgrSync" runat="server"></div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                            <asp:ImageButton ID="imgIntgrSync" runat="server" OnClick="imgPOIntgrSync_Click" />
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Manager Email</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:DropDownList ID="ddlManagerEmail_Appr" runat="server" DataTextField="Email"
                                                                                    DataValueField="UserID" CssClass="form-control selectpicker" data-live-search="true">
                                                                                </asp:DropDownList>
                                                                                <asp:TextBox ID="txtManagerEmail_Appr" runat="server" CssClass="form-control" Visible="false"></asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Start Date</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtTripStartDate_Appr" runat="server" class="date" CssClass="form-control"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdMaxDays_Appr" runat="server" />
                                                                                    <asp:HiddenField ID="hdMaxDate_Appr" runat="server" />
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Purpose</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtPurpose_Appr" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Payable To:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtOnBehalfOfAppr" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>



                                                                        <div class="clearfix"></div>
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="Alnk" href="javascript:void(0)" onclick="collapse('Alnk', 'Acol')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="Acol" class="table table-responsive">
                                                                                <br />
                                                                                <div style="text-align: right;">
                                                                                </div>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvExp_Appr" runat="server" AllowPaging="false"
                                                                                                AutoGenerateColumns="False" Height="174px" GridLines="None"
                                                                                                OnRowDataBound="gvExp_Appr_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkApprove" Text="View" OnCommand="ViewApprovedDetails"
                                                                                                                Style="margin-left: -24px" CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'
                                                                                                                ToolTip="View Details">
                                                                                                            <img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseType">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Expense Date">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                                                            <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label>
                                                                                                            <label>
                                                                                                                <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' />
                                                                                                            </label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Total Amount (with Tax)">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Payement Type" ControlStyle-Width="250px" HeaderStyle-Width="250px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="City">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' />
                                                                                                            </label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Attachments">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments_Appr"
                                                                                                                Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                                            <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                                            <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                                            <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                                            <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                            </isx:CoolGridView>
                                                                                            <asp:HiddenField ID="hdnARowIndex" runat="server" />
                                                                                            <asp:HiddenField ID="hdnASeq1" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="hdnComments_Appr" />
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="clearfix"></div>

                                                                        <%--</section>--%>
                                                                    </div>
                                                                    <div class="divfieldset alert alert-info mt10" style="width: 99%; margin: 0px;">
                                                                        <table style="font-weight: bold;" align="center">
                                                                            <tr>
                                                                                <td style="text-align: right; width: 12%">
                                                                                    <label>Pre-Expenses Total:</label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%">
                                                                                    <label><%=preExpTotal%></label>
                                                                                </td>
                                                                                <td style="text-align: right; width: 12%">
                                                                                    <label>Expenses Total:</label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%">
                                                                                    <label><%=expTotal%></label>
                                                                                </td>
                                                                                <td style="text-align: right; width: 12%; color: Green">
                                                                                    <label>
                                                                                        <asp:Label ID="lblAGrandTotal" Text="Grand Total: " runat="server"></asp:Label></label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%; color: Green">
                                                                                    <label>
                                                                                        <asp:Label ID="lblAGrandTotalAmnt" runat="server"></asp:Label></label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_Appr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Appr" runat="server" DropShadow="false" PopupControlID="pnlAddEdit_Appr"
                                                                TargetControlID="lnkFake_Appr" BackgroundCssClass="modalBackground" CancelControlID="btnClose_Appr">
                                                            </cc1:ModalPopupExtender>
                                                            <!--View Approved Exp starts here-->
                                                            <asp:Panel ID="pnlVApproved" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0 0px 10px 0px; height: 600px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnVAppCancel" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div style="text-align: right">
                                                                                <asp:Button ID="btnVAPrev" runat="server" Text="Previous" CssClass="btn btn-info" OnClick="ViewPreviousExp_Appr" />
                                                                                </td>
                                                                    <asp:Button ID="btnVANext" runat="server" Text="Next" CssClass="btn btn-info" OnClick="ViewNextExp_Appr" />
                                                                            </div>

                                                                            <div id="dvEditVAType" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Type</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVAExpType" runat="server" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAJob" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Code</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVAJobCd" runat="server" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAPhs" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Phase Code</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAPhcd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAJC" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Category</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVACatCode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVAAccCode" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Account Name:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVAAccCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVAClass" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Class:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVAClass" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>

                                                                            <div class="subheader mb10">
                                                                                <h4>Expense Details</h4>
                                                                            </div>


                                                                            <div id="dvEditVAED" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVADate" runat="server" ReadOnly="true" CssClass="form-control date">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVACV" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Cities visited</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVACity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="SpVAOthercity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAOther" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAFromcity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAFromcity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAFromOther" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAOtherFromCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAToCity" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVATocity" runat="server" ReadOnly="true" Width="170px" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAToOther" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAOtherToCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAFD" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVAFromdate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVATD" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVATodate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>
                                                                            <div id="dvEditVAPreVendor" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Preferred Vendor</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAPreVendor" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div id="dvEditVAAgName" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Agent Name</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblAAgName" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAItNo" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Itinarary number</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAItNo" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>

                                                                            <div id="dvEditVATT" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Trip</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVATotTrip" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVALN" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">LessNorm</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVALNorm" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAReimbt" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Reimbursement</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAReimbt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVASalesTax" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Sales Tax:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVASalesTax" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAFoodTax" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Food Tax:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAFoodTax" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div id="dvEditVAPA" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Pre-Amount</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAPreAmt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAAmt" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Amount (with Tax)</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAActAmt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVAPM" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Payment Mode</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAPayMode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="Div1" runat="server" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Comments</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVAcomnts" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                        CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>
                                                                            <div class="subheader mb10">
                                                                                <h4>Budget Details</h4>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Budget</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBudgAppr" CssClass="budgfld form-control" />
                                                                                    <asp:HiddenField ID="hdnVYearAppr" runat="server" />
                                                                                    <asp:HiddenField ID="hdnVExpRowTotAmntAppr" runat="server" />
                                                                                </div>
                                                                            </div>



                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Current Balance</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpCurrBalAppr" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Remaining$</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpRemBudgAppr" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Bal. After Expense</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBalAfterAppr" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="clearfix"></div>
                                                                            <div class="subheader mb10">
                                                                                <h4>Attachment Details</h4>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:LinkButton ID="LinkViewAppAttachments" runat="server" CommandArgument="test"
                                                                                    OnClick="DisplayAPPLineAttachments" Text="View attachments"></asp:LinkButton>
                                                                                <label id="lblAppAtt" runat="server" style="display: none">
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkVApproved" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="Popup_ApprovedExp" runat="server" DropShadow="false"
                                                                CancelControlID="btnVAppCancel" PopupControlID="pnlVApproved" TargetControlID="lnkVApproved"
                                                                BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <!--View Approved Exp ends here-->
                                                            <asp:Panel ID="pnlComments_Appr" runat="server" Style="display: none">
                                                                <div id="Div17" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Comments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCommentsClose_Appr" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvCommentsPop_Appr" runat="server">
                                                                                <div id="widgetComments_Appr" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_Cmt_Appr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Comments_Appr" runat="server" DropShadow="false"
                                                                CancelControlID="btnCommentsClose_Appr" PopupControlID="pnlComments_Appr" TargetControlID="lnkFake_Cmt_Appr"
                                                                BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAtt_Appr" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClose_Appr" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px;">
                                                                        <div id="dvAtt_Appr" runat="server">
                                                                        </div>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <isx:CoolGridView ID="gvAttchmnts_Appr" runat="server" AllowPaging="false" Width="200px" Height="300px"
                                                                                        AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                                        OnRowDataBound="gvAttchmnts_Appr_RowDataBound">
                                                                                        <Columns>
                                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                                <ItemTemplate>
                                                                                                    <asp:ImageButton runat="server" ID="imgAttchmnt_Appr" Width="55px" Height="65px" OnClick="DownLdAttAppr" />
                                                                                                    <asp:HiddenField ID="hdnAttName" runat="server" Value='<%# Eval("fileName")%>' />
                                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                    <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                        </Columns>
                                                                                    </isx:CoolGridView>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivAppr" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAtt_Appr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Att_Appr" runat="server" DropShadow="false" PopupControlID="pnlAtt_Appr"
                                                                TargetControlID="lnkAtt_Appr" BackgroundCssClass="modalBackground3" CancelControlID="btnAttClose_Appr">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlPOAddEdit_Appr" runat="server" Style="display: none;">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Approved PO details
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSendToVend" runat="server" OnClick="SendToVendor" Visible="false" Text="Send To Vendor" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnPOExport_Appr" runat="server" OnClick="Export" Text="Print/Email" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadApprEditPOData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="LoadApprEditPOData" />
                                                                                    <asp:Button ID="btnPOClose_Appr" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                                                                <div id="Div15" runat="server" style="color: Red; font-weight: bold">
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">PO Number:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <label><%=Session["PONum"]%></label>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Company Code:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <label><%=Session["CompCode"] %></label>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                                                    <asp:HiddenField ID="hdnPOPrint" runat="server" />
                                                                                    <asp:HiddenField ID="HiddenField12" runat="server" />
                                                                                    <asp:LinkButton ID="lnkPOCmnts_Appr" runat="server" CommandArgument="test" OnClick="Comments_Appr"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                                </div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                                                    <cc1:HoverMenuExtender ID="hvePOShowIntgrSyncInfo" runat="server" TargetControlID="imgPOIntgrSync"
                                                                                        PopupControlID="pnlPOShowIntgrSyncInfo" PopupPosition="Left">
                                                                                    </cc1:HoverMenuExtender>
                                                                                    <asp:Panel ID="pnlPOShowIntgrSyncInfo" runat="server">
                                                                                        <div>
                                                                                            <div class="alert alert-info" style="font-size: 1.2em" id="dvPOIntgrSync" runat="server"></div>
                                                                                        </div>
                                                                                    </asp:Panel>
                                                                                    <asp:ImageButton ID="imgPOIntgrSync" runat="server" OnClick="imgPOIntgrSync_Click" />

                                                                                </div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="clear: both">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Shipping Address:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:Label ID="lblShipAddrAppr" runat="server"></asp:Label>
                                                                                        <cc1:HoverMenuExtender ID="hveShipAddrAppr" runat="server" TargetControlID="btnShipAddressAppr" PopupControlID="pnlShipAddrAppr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                        <asp:Panel ID="pnlShipAddrAppr" runat="server">
                                                                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                                <div id="dvshipAddrAppr">
                                                                                                    <div class="divfieldset">
                                                                                                        <table class="tablemaincc" width="100%">
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Company Name:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCompNameAppr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address1:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipAddr1Appr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address2:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipAddr2Appr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>City:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCityAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>State:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipStateAppr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Country:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCountryAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>ZipCode:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipZipCodeAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </asp:Panel>
                                                                                        <asp:Button ID="btnShipAddressAppr" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Billing Address:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:Label ID="lblBillAddrAppr" runat="server"></asp:Label>
                                                                                        <cc1:HoverMenuExtender ID="hveBillAddrAppr" runat="server" TargetControlID="btnBillAddrAppr" PopupControlID="pnlBillAddrAppr" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                        <asp:Panel ID="pnlBillAddrAppr" runat="server">
                                                                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                                <div class="divfieldset">
                                                                                                    <div id="dvBillAddrAppr">
                                                                                                        <table class="tablemaincc" width="100%">
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Company Name:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCompNameAppr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address1:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillAddr1Appr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address2:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillAddr2Appr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>City:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCityAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>State:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillStateAppr" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Country:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCountryAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>ZipCode:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillZipCodeAppr" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </asp:Panel>
                                                                                        <asp:Button ID="btnBillAddrAppr" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Manager Email:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlPOMgrEmail_Appr" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                            CssClass="form-control selectpicker" data-live-search="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Start Date:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                            <asp:TextBox ID="txtPOTripStartDate_Appr" runat="server" CssClass="date form-control"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnYear_Appr" runat="server" />
                                                                                            <asp:HiddenField ID="HiddenField14" runat="server" />
                                                                                            <asp:HiddenField ID="HiddenField15" runat="server" />
                                                                                            <asp:HiddenField ID="HiddenField16" runat="server" />
                                                                                            <div class="input-group-addon">
                                                                                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">PreferredVendor:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlPreVendor_Appr" runat="server" DataTextField="PreferredVendor"
                                                                                            DataValueField="PreferredVendor" CssClass="form-control selectpicker" data-live-search="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Purpose:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:TextBox ID="txtPoPurpose_Appr" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Job</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlJobsAppr" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <asp:Button ID="btnAttachPOAppr" runat="server" Text="Attachments" CssClass="btn btn-info" OnClick="btnAttachPOAppr_Click" />
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                                <a id="A2" href="javascript:void(0)" onclick="collapse('A2', 'Div16')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                                <div id="Div16" class="divfieldset">
                                                                                    <div class="clearfix">
                                                                                        <br />
                                                                                    </div>
                                                                                    <br />
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <isx:CoolGridView ID="gvPO_Appr" runat="server" AllowPaging="false" Height="174px"
                                                                                                    AutoGenerateColumns="False" GridLines="None" OnRowCommand="gvPO_Appr_RowCommand"
                                                                                                    OnRowDataBound="gvPO_Appr_RowDataBound">
                                                                                                    <Columns>
                                                                                                        <asp:TemplateField HeaderText="Action">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:LinkButton runat="server" ID="lnkPOview" Text="View" CommandName="View" OnCommand="ViewPOApprDetails"
                                                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                                    <asp:HiddenField ID="hdnInvCnt" runat="server" Value='<%#Eval("invCnt")%>' />
                                                                                                                <asp:HiddenField ID="hdnPOLineNo" runat="server" Value='<%#Eval("expLineNo")%>' />
                                                                                                                <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit")%>' />
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText=" Line No">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("expLineNo")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText=" Line Seq">
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
                                                                                                        <asp:TemplateField HeaderText="Account Code">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Account Name">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("expItem")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Item Code">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblItemCode" runat="server" Text='<%#Eval("itemCode") %>'></asp:Label></label>
                                                                                                                <label>
                                                                                                                    <asp:LinkButton ID="lnkItemCode" runat="server" Text='<%#Eval("itemCode") %>' OnCommand="DisplayItemNotesAppr"
                                                                                                                        CommandArgument='<%#Eval("itemCode") + ";" + Eval("othercity") %>'></asp:LinkButton></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Description">
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
                                                                                                        <asp:TemplateField HeaderText="POAmnt">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("PreAmount")%>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="INV Amnt">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="Label1" runat="server" Text='<%# Eval("ActualAmount")%>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Budget">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("budget")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="BalAfterPO">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("balAfterPo")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Invoice">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:LinkButton ID="lnkInvGen" runat="server" OnClick="Edit_Inv"><img src="images/icons/invoice.png"/>
                                                                                                                </asp:LinkButton>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Status">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:Label ID="lblPOColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label>
                                                                                                                <asp:HiddenField ID="hdnRowStatusID" runat="server" Value='<%# Eval("statusId") %>' />
                                                                                                                <asp:HiddenField ID="hdnItemNote" runat="server" Value='<%#Eval("othercity") %>' />
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                    </Columns>
                                                                                                </isx:CoolGridView>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <asp:HiddenField runat="server" ID="HiddenField17" />
                                                                                    <asp:HiddenField runat="server" ID="HiddenField18" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkPO_Appr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popEditPO_Appr" runat="server" DropShadow="false" PopupControlID="pnlPOAddEdit_Appr"
                                                                CancelControlID="btnPOClose_Appr" TargetControlID="lnkPO_Appr" BackgroundCssClass="modalBackground">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAddPO_Appr" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div11" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 565px">
                                                                    <header>
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td style="width: 50%;">
                                                                                    <h2 class="pophead">
                                                                                        <asp:Label ID="lbPOlHeading_App" runat="server"></asp:Label></h2>
                                                                                </td>
                                                                                <td align="right" style="width: 50%">
                                                                                    <asp:Button ID="btnSavePO_Appr" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSavePO_Appr_Click" />
                                                                                    <asp:Button ID="btnPOCloseLineItem_Appr" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </header>
                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table class="tablemain">
                                                                                <tr>
                                                                                    <td>
                                                                                        <div id="dvEditPOError_Appr" runat="server" style="font-size: 1.15em; color: Red">
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
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Department<em>*</em> :</label><br />
                                                                                                                <asp:DropDownList ID="ddlDepartment_Appr" runat="server" DataTextField="Description" CssClass="form-control selectpicker" data-live-search="true"
                                                                                                                    DataValueField="CodeKey" AutoPostBack="true" OnSelectedIndexChanged="ddlDepartment_Appr_SelectedIndexChanged">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Name<em>*</em> :</label>
                                                                                                                <br />
                                                                                                                <asp:DropDownList ID="ddlExpItem_Appr" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                                    CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlExpItem_Appr_SelectedIndexChanged">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Code<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtAccCode_Appr" runat="server" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Item Code<em>*</em> :</label>
                                                                                                                <br />
                                                                                                                <asp:DropDownList ID="ddlItemCode_Appr" runat="server" DataValueField="ItemCode" CssClass="form-control selectpicker" data-live-search="true"
                                                                                                                    DataTextField="ItemCode" OnSelectedIndexChanged="ddlItemCode_Appr_SelectedIndexChanged"
                                                                                                                    AutoPostBack="true">
                                                                                                                </asp:DropDownList>
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
                                                                                                                <label>
                                                                                                                    Description<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtDescr_Appr" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <div id="dvCommts_Appr" runat="server" visible="false">
                                                                                                                    <label>
                                                                                                                        Comment<em>*</em> :
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <asp:TextBox ID="txtcommnt_Appr" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Vendor Part No :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtVendPtNo_Appr" runat="server" onkeydown="TabIndex('txtQuantity', event)" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl cell">
                                                                                                                <small>
                                                                                                                    <label>
                                                                                                                        Req. Del. Date:
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                                        <asp:TextBox ID="txtReqDelDateAppr" runat="server" Width="70px" class="date" CssClass="form-control"></asp:TextBox>
                                                                                                                        <div class="input-group-addon">
                                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                                        </div>
                                                                                                                    </div></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Quantity<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtQuantity_Appr" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity_Appr','txtunitPrice_Appr','txtShipCost_Appr','dvEditPOError_Appr','chkCalTax_Appr','txtTaxPercent_Appr','txtTax_Appr','txtAmount_Appr','txtRemain_Appr','txtBalAfterPO_Appr');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Unit Price<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtunitPrice_Appr" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity_Appr','txtunitPrice_Appr','txtShipCost_Appr','dvEditPOError_Appr','chkCalTax_Appr','txtTaxPercent_Appr','txtTax_Appr','txtAmount_Appr','txtRemain_Appr','txtBalAfterPO_Appr');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Estimated shipping Cost<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtShipCost_Appr" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity_Appr','txtunitPrice_Appr','txtShipCost_Appr','dvEditPOError_Appr','chkCalTax_Appr','txtTaxPercent_Appr','txtTax_Appr','txtAmount_Appr','txtRemain_Appr','txtBalAfterPO_Appr');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Package/Unit<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPckUnit_Appr" runat="server"></asp:TextBox>
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
                                                                                                                <label align="left">
                                                                                                                    Calculate TaxAmt :
                                                                                                                </label>
                                                                                                                <asp:CheckBox ID="chkCalTax_Appr" runat="server" class="form3Checkbox4" Width="24px"
                                                                                                                    onkeyup="javascript:CalcBudgetDetails('txtQuantity_Appr','txtunitPrice_Appr','txtShipCost_Appr','dvEditPOError_Appr','chkCalTax_Appr','txtTaxPercent_Appr','txtTax_Appr','txtAmount_Appr','txtRemain_Appr','txtBalAfterPO_Appr');" />
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Percent<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTaxPercent_Appr" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity_Appr','txtunitPrice_Appr','txtShipCost_Appr','dvEditPOError_Appr','chkCalTax_Appr','txtTaxPercent_Appr','txtTax_Appr','txtAmount_Appr','txtRemain_Appr','txtBalAfterPO_Appr');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTax_Appr" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtAmount_Appr" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
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
                                                                                                                <label style="color: Black">
                                                                                                                    Budget<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBudget_Appr" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Current Balance<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtCurrBal_appr" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Remaining $<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtRemain_Appr" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Balance after PO<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBalAfterPO_Appr" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
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
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAddPO_Appr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popAddPO_Appr" runat="server" DropShadow="false" PopupControlID="pnlAddPO_Appr"
                                                                TargetControlID="lnkAddPO_Appr" CancelControlID="btnPOCloseLineItem_Appr" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlExportData" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Export Data
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnExpDataclose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px;">
                                                                            <div id="dvExpDataMsg" runat="server">
                                                                            </div>
                                                                            <asp:Button ID="btnPrintPO" runat="server" Text="Print" CssClass="btn btn-info" OnClick="PrintPO" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpEmail" runat="server" Text="Email" CssClass="btn btn-info" OnClick="ExportAndEmail" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpVendEmail" runat="server" Text="Vendor Email" CssClass="btn btn-info" OnClick="SendExpVendorEmail"></asp:Button>
                                                                            <asp:HiddenField ID="hdnMailTo" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkExportData" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender runat="server" ID="popExpData" DropShadow="false" PopupControlID="pnlExportData"
                                                                TargetControlID="lnkExportData" BackgroundCssClass="modalBackground1" CancelControlID="btnExpDataclose">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlMultEmail" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div26" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Send Email
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSave" runat="server" Text="Email" CssClass="btn btn-info" Visible="true" OnClick="ValidateEmail"></asp:Button>
                                                                                    <asp:Button ID="btnEmailClose" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="alert alert-info">
                                                                                <small>
                                                                                    <label><em>*</em>Seperate multiple email addresses with a comma ( , ).</label>
                                                                                </small>
                                                                            </div>
                                                                            <div id="DivEmailErr" runat="server">
                                                                            </div>
                                                                            <label style="vertical-align: top">
                                                                                Mail to:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <asp:TextBox ID="txtMulEmail" runat="server" TextMode="MultiLine" CssClass="form-control" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr');"></asp:TextBox>
                                                                            <br />
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:LinkButton ID="lnkCCEmail" runat="server" OnClick="AddCCEmail" CssClass="button button-blue"
                                                                                            Text="AddCC"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="dvCCEmail" runat="server" style="display: none">
                                                                                            <asp:TextBox ID="txtCCEmail" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr');">
                                                                                            </asp:TextBox>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkEmail" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popMulEmail" runat="server" DropShadow="false" PopupControlID="pnlMultEmail"
                                                                CancelControlID="btnEmailClose" TargetControlID="lnkEmail" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlSendToVend" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div30" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Send Email
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnConfSendToVendor" runat="server" Text="Yes" CssClass="btn btn-info" OnClick="ConfirmSendToVendor" />
                                                                                    <asp:Button ID="btnCancSendToVendor" runat="server" Text="No" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div id="dvApprVendMsg" runat="server">
                                                                            </div>
                                                                            <div id="dvApprVendConf" runat="server">
                                                                                <label>
                                                                                    Are you sure you want to send this PO to Vendor?</label>
                                                                                <asp:HiddenField ID="hdnApprVendEmail" runat="server" />
                                                                            </div>
                                                                            <div id="dvApprNoVendEmail" runat="server">
                                                                                <label>
                                                                                    Please enter Vendor email and Click Yes to Proceed.</label>
                                                                                <br />
                                                                                <br />
                                                                                <asp:TextBox CssClass="form-control" ID="txtApprVendEmail" runat="server"></asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkSendToVend" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popSendVend" runat="server" DropShadow="false" PopupControlID="pnlSendToVend"
                                                                CancelControlID="btnCancSendToVendor" TargetControlID="lnkSendToVend" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlItemNotesAppr" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Item Notes
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCloseItemNotesAppr" runat="server" Text="Ok" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Code:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblDispItemCodeAppr" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Notes:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblItemNotesAppr" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <br />
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkItemNotesAppr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popItemNotesAppr" runat="server" DropShadow="false" CancelControlID="btnCloseItemNotesAppr"
                                                                PopupControlID="pnlItemNotesAppr" TargetControlID="lnkItemNotesAppr" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAttPOAppr" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClosePOAppr" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvAttPOAppr" runat="server">
                                                                            </div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <isx:CoolGridView ID="gvAttchmntsPOAppr" runat="server" AllowPaging="false" Width="300px"
                                                                                            Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                                            OnRowDataBound="gvAttchmntsPOAppr_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:ImageButton runat="server" ID="imgAttchmntPO" Width="55px" Height="65px" OnClick="DownLdAttPOAppr"></asp:ImageButton>
                                                                                                        <asp:HiddenField ID="hdnattIdPO" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                        <asp:HiddenField ID="hdnAttOrgNamePO" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                        <asp:HiddenField ID="hdnOrgNamePO" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                        <asp:HiddenField ID="hdnDrftNamePO" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                            <EmptyDataTemplate>
                                                                                                <div style="width: 200px">
                                                                                                    <label>No attachments to display</label>
                                                                                                </div>
                                                                                            </EmptyDataTemplate>
                                                                                        </isx:CoolGridView>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivPOAppr" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:HiddenField ID="hdnAttIdsRetPOAppr" runat="server" />
                                                                            <asp:HiddenField ID="hdnDftCntPOAppr" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAttPOAppr" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_AttPOAppr" runat="server" DropShadow="false" PopupControlID="pnlAttPOAppr"
                                                                TargetControlID="lnkAttPOAppr" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClosePOAppr">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlReimb" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSaveReimb" runat="server" Text="Save" CssClass="btn btn-info" OnClick="SaveReimburse" />
                                                                                    <asp:Button ID="btnCloseReimb" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvEr1" runat="server">
                                                                            </div>
                                                                            <div id="dvReimbinv" runat="server">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvReimburse" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                                                Width="300px" Height="200px" OnRowDataBound="gvReimburse_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="PayModes" HeaderStyle-Width="198px" ControlStyle-Width="198px">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%#Eval("payMode")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%#Eval("totalAmount")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
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
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Reimburse Type:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:DropDownList ID="ddlPayModeReimb" runat="server" OnChange="javascript:reimbtType();" CssClass="form-control selectpicker" data-live-search="true">
                                                                                        <asp:ListItem Value="Cheque" Text="Cheque"></asp:ListItem>
                                                                                        <asp:ListItem Value="Cash" Text="Cash"></asp:ListItem>
                                                                                    </asp:DropDownList>
                                                                                    <asp:HiddenField ID="hdnExpAmount" runat="server" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode"><em>*</em>Amount:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txAmount" CssClass="form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div id="Cheque1" runat="server">
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode"><em>*</em>Cheque:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7">
                                                                                        <asp:TextBox runat="server" ID="txtchqNO" CssClass="form-control" />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode"><em>*</em>Cheque Date:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7">
                                                                                        <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                            <asp:TextBox runat="server" ID="txtChqDate" CssClass="date form-control" />
                                                                                            <div class="input-group-addon">
                                                                                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode"><em>*</em>Bank:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7">
                                                                                        <asp:TextBox runat="server" ID="txtBank" CssClass="form-control" />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode"><em>*</em>Payable To:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7">
                                                                                        <asp:TextBox runat="server" ID="txtPayableTo" CssClass="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkReimb" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popReimb" runat="server" PopupControlID="pnlReimb" TargetControlID="lnkReimb"
                                                                DropShadow="false" BackgroundCssClass="modalBackground" CancelControlID="btnCloseReimb">
                                                            </cc1:ModalPopupExtender>
                                                        </ContentTemplate>
                                                    </asp:UpdatePanel>
                                                </section>
                                            </asp:PlaceHolder>
                                        </div>
                                        <!-- Approved Tab Ends Here -->
                                        <!-- Rejected Tab Starts Here -->
                                        <div role="tabpanel" class="tab-pane " id="rejected" style="overflow-x: auto;">
                                            <asp:PlaceHolder ID="plcRejected" runat="server">
                                                <section>
                                                    <asp:Timer ID="Timer3" runat="server" Interval="100000000">
                                                    </asp:Timer>
                                                    <asp:UpdatePanel ID="updRejected" runat="server" UpdateMode="Conditional">
                                                        <Triggers>
                                                            <asp:AsyncPostBackTrigger ControlID="Timer3" EventName="Tick" />
                                                            <asp:AsyncPostBackTrigger ControlID="btnRefresh1_Rej" EventName="Click" />
                                                        </Triggers>
                                                        <ContentTemplate>
                                                            <asp:Button ID='btnRefresh1_Rej' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                            <asp:HiddenField ID="HiddenField3" runat="server" />
                                                            <div>
                                                                <div class="form-group   has-feedback" style="width: 350px !important;">
                                                                    <asp:TextBox ID="txtKeywordSearchRej" CssClass="filterdata form-control" runat="server" Width="300px" placeholder="Type in any column details to search.." />
                                                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                                </div>

                                                            </div>
                                                            <br />
                                                            <isx:CoolGridView AllowPaging="false" ID="gvRejected" runat="server" AutoGenerateColumns="false"
                                                                Height="300px" Width="100%" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                OnRowDataBound="gvRejected_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="RequestID" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkRequestID" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                                OnCommand="SortExpressionRej" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test" OnClick="Edit_Rej"
                                                                                    Text='<%#Eval("RequestID")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="AppliedBy" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("UserName")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Rejected By" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("actionBy")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="RejectedOn">
                                                                        <ItemTemplate>
                                                                            <label><%#Convert.ToDateTime(Eval("ActionDate")).ToShortDateString()%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Pre-Amount" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPreAmount" runat="server" Text="Pre-Amount" CommandArgument="PreAmount"
                                                                                OnCommand="SortExpressionRej" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblPAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Amount" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                                OnCommand="SortExpressionRej" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Purpose">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                                OnCommand="SortExpressionRej" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("Purpose")%></label>
                                                                            <asp:HiddenField ID="hdnMGReqID" runat="server" Value='<%#Eval("requestId")%>' />
                                                                            <asp:HiddenField ID="hdnRequestID" runat="server" Value='<%#Eval("RequestID")%>' />
                                                                            <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("UserID")%>' />
                                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsManagerPreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                                            <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                                            <asp:HiddenField ID="hdnManagerID" runat="server" Value='<%#Eval("ManagerID")%>' />
                                                                            <asp:HiddenField ID="hdnManagerEmail" runat="server" Value='<%#Eval("ManagerEmail")%>' />
                                                                            <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                                            <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                                                            <asp:HiddenField ID="hdnOnBehalfOf" runat="server" Value='<%#Eval("onBeHalfOf")%>' />
                                                                            <asp:HiddenField ID="hdnUserName" runat="server" Value='<%#Eval("UserName")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="View">
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" OnClick="Edit_Rej"
                                                                                Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px">
                                                                        <label>
                                                                            No data to display</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                            <asp:Panel ID="pnlAddEdit_Rej" runat="server" Style="display: none;">
                                                                <div id="Div7" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnRej" runat="server" OnClick="ExportRej" Text="Print/Email" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadRejEditData" Text="Refresh" CssClass="btn btn-info" runat="server" OnClick="LoadRejEditData" />
                                                                                    <asp:Button ID="btnClose_Rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 15px">
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                            <div id="Div8" runat="server" style="color: Red">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">RequestID:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <label style="font-weight: bold; padding-top: 7px"><%=Session["ReqID"]%></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <asp:HiddenField ID="HiddenField5" runat="server" />
                                                                            <asp:LinkButton ID="lnkCmnt_Rej" runat="server" CommandArgument="test" OnClick="Comments_Rej"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                        </div>
                                                                        <div id="dvRejectedComments1" visible="false" runat="server" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                                            <div style="padding: 20px">
                                                                                <div class="divfieldset">
                                                                                    <div style="overflow: hidden; overflow-y: scroll; height: 275px; width: 500px">
                                                                                        <div id="dvCommentsPop_Rej1" runat="server">
                                                                                            <div id="widgetComments_Rej1" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                            </div>
                                                                                            <br />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Manager Email</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:DropDownList ID="ddlManagerEmail_Rej" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                    CssClass="form-control selectpicker" data-live-search="true">
                                                                                </asp:DropDownList>
                                                                                <asp:TextBox ID="txtManagerEmail_Rej" runat="server" CssClass="form-control" Visible="false"></asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Start Date</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtTripStartDate_Rej" runat="server" CssClass="date form-control"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdMaxDays_Rej" runat="server" />
                                                                                    <asp:HiddenField ID="hdMaxDate_Rej" runat="server" />
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Purpose</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtPurpose_Rej" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Payable To:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtOnBehalfOfRej" runat="server" CssClass="form-control"></asp:TextBox></td>
                                                                            </div>
                                                                        </div>



                                                                        <div class="clearfix"></div>
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="Rlnk" href="javascript:void(0)" onclick="collapse('Rlnk', 'Rcol')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="Rcol" class="divfieldset" style="display: block">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvExp_Rej" runat="server" AllowPaging="false"
                                                                                                AutoGenerateColumns="False" Height="174px" GridLines="None"
                                                                                                OnRowDataBound="gvExp_Rej_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkRejview" Text="View" OnCommand="ViewRejDetails"
                                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex %>' ToolTip="View Details">
                                                                                                            <img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseType">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="210px" HeaderStyle-Width="210px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseDate">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                                                            <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label>
                                                                                                            <label>
                                                                                                                <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' />
                                                                                                            </label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Total Amount (with Tax)">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="payment Type" ControlStyle-Width="210px" HeaderStyle-Width="210px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="City">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' />
                                                                                                            </label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Attachments">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments_Rej"
                                                                                                                Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                                            <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                                            <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                                            <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                                            <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                            </isx:CoolGridView>
                                                                                            <asp:HiddenField ID="hdnRRowIndex" runat="server" />
                                                                                            <asp:HiddenField ID="hdnRSeq1" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="hdnComments_Rej" />
                                                                            </div>
                                                                            <br />
                                                                            <div class="clearfix"></div>

                                                                            <%--</section>--%>
                                                                        </div>
                                                                        <div class="divfieldset alert alert-info mt10" style="width: 99%; margin: 0px; clear: both;">
                                                                            <table style="font-weight: bold;" align="center">
                                                                                <tr>
                                                                                    <td style="text-align: right; width: 12%">
                                                                                        <label>Pre-Expenses Total:</label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%">
                                                                                        <label><%=preExpTotal%></label>
                                                                                    </td>
                                                                                    <td style="text-align: right; width: 12%">
                                                                                        <label>Expenses Total:</label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%">
                                                                                        <label><%=expTotal%></label>
                                                                                    </td>
                                                                                    <td style="text-align: right; width: 12%; color: Green">
                                                                                        <label>
                                                                                            <asp:Label ID="lblRGrandTotal" Text="Grand Total: " runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                    <td style="text-align: left; width: 12%; color: Green">
                                                                                        <label>
                                                                                            <asp:Label ID="lblRGrandTotalAmnt" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Rej" runat="server" DropShadow="false" PopupControlID="pnlAddEdit_Rej"
                                                                TargetControlID="lnkFake_Rej" BackgroundCssClass="modalBackground" CancelControlID="btnClose_Rej">
                                                            </cc1:ModalPopupExtender>
                                                            <!-- viewRejected Tab starts Here -->
                                                            <asp:Panel ID="pnlVRej" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div10" runat="server" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0 0px 10px 0px; height: 543px; width: 1100px">


                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnVRCancel" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <%-- <section>--%>
                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div style="text-align: right">
                                                                                <asp:Button ID="btnVRPrev" runat="server" Text="Previous" CssClass="btn btn-info" OnClick="ViewPreviousExp_Rej" />
                                                                                <asp:Button ID="btnVRNext" runat="server" Text="Next" CssClass="btn btn-info" OnClick="ViewNextExp_Rej" />
                                                                            </div>

                                                                            <div id="dvEditVRType" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Type</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVRExpType" runat="server" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRJob" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Code </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVRJobCd" runat="server" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div id="dvEditVRPhs" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Phase Code </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRPhcd" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div id="dvEditVRJC" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Category  </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRCatCode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVRAccCode" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Account Name: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVRAccCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVRClass" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Class: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVRClass" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>

                                                                            <div id="dvEditVRPreVendor" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Preferred Vendor </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRPreVendor" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRAgName" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Agent Name </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblRAgName" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRItNo" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Itinarary number </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRItNo" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>


                                                                            <div id="dvEditVRED" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Date </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVRDate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRCV" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Cities visited</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="SpVROthercity" runat="server" style="text-align: right; display: none" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVROther" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRFromcity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From City </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRFromcity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRFromOther" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City  </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVROtherFromCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRToCity" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To City< </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRTocity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRToOther" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVROtherToCity" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRFD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">From Date </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVRFromdate" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRTD" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">To Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVRTodate" runat="server" ReadOnly="true" CssClass="form-control">	
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRTT" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Trip </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRTotTrip" CssClass="form-control" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRLN" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">LessNorm</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRLNorm" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div id="dvEditVRReimbt" runat="server" cssclass="form-control" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Reimbursement</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRReimbt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRSalesTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Sales Tax: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRSalesTax" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRFoodTax" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Food Tax: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRFoodTax" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRPA" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Pre-Amount </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRPreAmt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRAmt" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Total Amount (with Tax) </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRActAmt" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVRPM" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Payment Mode</i> </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRPayMode" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="Div4" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Comments </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVRcomnts" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                        CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div class="clearfix"></div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Budget </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBudgRej" CssClass="budgfld form-control" />
                                                                                    <asp:HiddenField ID="hdnVYearRej" runat="server" />
                                                                                    <asp:HiddenField ID="hdnVExpRowTotAmntRej" runat="server" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Current Balance </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpCurrBalRej" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Remaining$ </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpRemBudgRej" CssClass="budgfld form-control" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Bal. After Expense<</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox runat="server" ID="txtVExpBalAfterRej" CssClass="budgfld form-control" />

                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div style="overflow: hidden; overflow-y: auto; height: 52px; font-weight: bold; text-align: center; padding-top: 10px;">
                                                                                    <asp:LinkButton ID="LinkViewRejAttachments" runat="server" CommandArgument="test"
                                                                                        OnClick="DisplayRejLineAttachments" Text="View attachments"></asp:LinkButton>
                                                                                    <label id="lblRejAtt" runat="server" style="display: none">
                                                                                    </label>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <%-- </section>--%>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkVRej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="Popup_RejExp" runat="server" DropShadow="false" PopupControlID="pnlVRej"
                                                                CancelControlID="btnVRCancel" TargetControlID="lnkVRej" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <!-- viewRejected Tab Ends Here -->
                                                            <asp:Panel ID="pnlComments_Rej" runat="server" Style="display: none">
                                                                <div id="Div12" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Comments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCommentsClose_Rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div style="overflow: hidden; overflow-y: scroll; height: 275px; width: 500px">
                                                                                <div id="dvCommentsPop_Rej" runat="server">
                                                                                    <div id="widgetComments_Rej" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                    </div>
                                                                                    <br />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_Cmt_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Comments_Rej" runat="server" DropShadow="false"
                                                                CancelControlID="btnCommentsClose_Rej" PopupControlID="pnlComments_Rej" TargetControlID="lnkFake_Cmt_Rej"
                                                                BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAtt_Rej" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClose_Rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div id="dvAtt_Rej" runat="server">
                                                                        </div>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <isx:CoolGridView ID="gvAttchmntsRej" runat="server" AllowPaging="false" Width="200px" Height="300px"
                                                                                        AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                                        OnRowDataBound="gvAttchmntsRej_RowDataBound">
                                                                                        <Columns>
                                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                                <ItemTemplate>
                                                                                                    <asp:ImageButton runat="server" ID="imgAttchmnt_Rej" Width="55px" Height="65px"
                                                                                                        OnClick="DownLdAttRej" />
                                                                                                    <asp:HiddenField ID="hdnAttName" runat="server" Value='<%# Eval("fileName")%>' />
                                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                    <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />

                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                        </Columns>
                                                                                    </isx:CoolGridView>
                                                                                </td>
                                                                                <td>
                                                                                    <div id="LargeImageContainerDivRej" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAtt_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_Att_Rej" runat="server" DropShadow="false" PopupControlID="pnlAtt_Rej"
                                                                TargetControlID="lnkAtt_Rej" BackgroundCssClass="modalBackground3" CancelControlID="btnAttClose_Rej">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlPOAddEdit_Rej" runat="server" Style="display: none;">
                                                                <div id="Div20" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View PO details
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnShwHist_Rej" runat="server" Text="Show History" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnExport_Rej" runat="server" Text="Print/Email" CssClass="btn btn-info" OnClick="ExportRej"></asp:Button>
                                                                                    <asp:Button ID="btnRejPOEditData" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="LoadRejPOEditData" />
                                                                                    <asp:Button ID="btnPOClose_Rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">


                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div id="Div21" runat="server" style="color: Red; font-weight: bold">
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="display: none;">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">PO Number:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <label style="font-weight: bold; padding-top: 7px;">&nbsp;<%=Session["PONum"]%></label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Company Code:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <label style="font-weight: bold; padding-top: 7px;"><%=Session["CompCode"] %></label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:HiddenField ID="HiddenField19" runat="server" />
                                                                                <%--<asp:LinkButton ID="lnkPOCmnts_Rej" runat="server" CommandArgument="test" OnClick="Comments_Rej"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>--%>
                                                                                <div id="dvRejectedComments" visible="false" runat="server" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; width: 1100px">
                                                                                    <div style="overflow: hidden; overflow-y: auto; height: 75px; width: 500px">
                                                                                        <div style="padding: 20px">
                                                                                            <div class="divfieldset">
                                                                                                <div id="Div9" runat="server">
                                                                                                    <div id="Div13" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                                    </div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>



                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Shipping Address:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:Label ID="lblShipAddrRej" runat="server"></asp:Label></label></i>
                                                                                        <cc1:HoverMenuExtender ID="hveShipAddrRej" runat="server" TargetControlID="btnShipAddrRej" PopupControlID="pnlShipAddrRej" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                    <asp:Panel ID="pnlShipAddrRej" runat="server">
                                                                                        <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                            <div class="divfieldset" style="box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); -webkit-box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); padding: 10px;">
                                                                                                <div id="dvshipAddrRej">
                                                                                                    <table class="tablemaincc" width="100%">
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Company Name:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipCompNameRej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address1:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipAddr1Rej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address2:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipAddr2Rej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">City:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipCityRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">State:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipStateRej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Country:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipCountryRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">ZipCode:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblShipZipCodeRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </asp:Panel>
                                                                                    <asp:Button ID="btnShipAddrRej" runat="server" ToolTip="View full address" CssClass="btn btn-info" Style="cursor: pointer" Text="..." />

                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Billing Address:</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:Label ID="lblBillAddrRej" runat="server"></asp:Label>
                                                                                    <cc1:HoverMenuExtender ID="hveBillAddrRej" runat="server" TargetControlID="btnBillAddrRej" PopupControlID="pnlBillAddrRej" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                    <asp:Panel ID="pnlBillAddrRej" runat="server">
                                                                                        <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                            <div class="divfieldset" style="box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); -webkit-box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28); padding: 10px;">
                                                                                                <div id="dvBillAddrRej">
                                                                                                    <table class="tablemaincc" width="100%">
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Company Name:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillCompNameRej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address1:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillAddr1Rej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Address2:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillAddr2Rej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">City:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillCityRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">State:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillStateRej" runat="server"></asp:Label></label></i></td>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">Country:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillCountryRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td align="right"><b><small>
                                                                                                                <label style="font-weight: bold; margin-right: 15px;">ZipCode:&nbsp;</label></small></b></td>
                                                                                                            <td><i>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblBillZipCodeRej" runat="server"></asp:Label></label></i></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </asp:Panel>
                                                                                    <asp:Button ID="btnBillAddrRej" runat="server" ToolTip="View full address" CssClass="btn btn-info" Style="cursor: pointer" Text="..." />

                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode"><em>*</em>Manager Email</label></label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:DropDownList ID="ddlPOMgrEmail_Rej" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                        CssClass="form-control selectpicker" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode"><em>*</em>Start Date</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="txtPOTripStartDate_Rej" runat="server" CssClass="form-control date"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnYear_Rej" runat="server" />
                                                                                        <asp:HiddenField ID="HiddenField21" runat="server" />
                                                                                        <asp:HiddenField ID="HiddenField22" runat="server" />
                                                                                        <asp:HiddenField ID="HiddenField23" runat="server" />
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode"><em>*</em>Vendor</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:DropDownList ID="ddlPreVendor_Rej" runat="server" DataTextField="PreferredVendor"
                                                                                        DataValueField="PreferredVendor" CssClass="form-control selectpicker" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode"><em>*</em>Purpose</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtPoPurpose_Rej" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:DropDownList ID="ddlJobsRej" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                                </div>
                                                                            </div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <asp:Button ID="btnAttachPORej" runat="server" Text="Attachments" CssClass="btn btn-info" OnClick="btnAttachPORej_Click" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="A3" href="javascript:void(0)" onclick="collapse('A3', 'Div22')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="Div22" class="divfieldset">
                                                                                <div style="text-align: right;">
                                                                                </div>
                                                                                <div class="clearfix">
                                                                                    <br />
                                                                                </div>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvPO_Rej" runat="server" AllowPaging="false"
                                                                                                AutoGenerateColumns="False" Height="174px" Width="1028px" GridLines="None" OnRowCommand="gvPO_Rej_RowCommand"
                                                                                                OnRowDataBound="gvPO_Rej_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkPOview" Text="View" CommandName="View" OnCommand="ViewPORejDetails"
                                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
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
                                                                                                    <asp:TemplateField HeaderText="Account Code">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="220px"
                                                                                                        HeaderStyle-Width="220px">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("expItem")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Item Code">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblItemCode" runat="server" Text='<%#Eval("itemCode") %>'></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:LinkButton ID="lnkItemCode" runat="server" Text='<%#Eval("itemCode") %>' OnCommand="DisplayItemNotesRej"
                                                                                                                    CommandArgument='<%#Eval("itemCode") + ";" + Eval("othercity") %>'></asp:LinkButton></label>
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
                                                                                                    <asp:TemplateField HeaderText="POAmnt">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("PreAmount")%>'></asp:Label></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Budget">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("budget")%></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="BalaceAfterPO" ControlStyle-Width="190px" HeaderStyle-Width="190px">
                                                                                                        <ItemTemplate>
                                                                                                            <label><%# Eval("balAfterPo")%></label>
                                                                                                            <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit")%>' />
                                                                                                            <asp:HiddenField ID="hdnItemNote" runat="server" Value='<%#Eval("othercity") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                            </isx:CoolGridView>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="HiddenField24" />
                                                                                <asp:HiddenField runat="server" ID="HiddenField25" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkPO_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popEditPO_Rej" runat="server" DropShadow="false" PopupControlID="pnlPOAddEdit_Rej"
                                                                CancelControlID="btnPOClose_Rej" TargetControlID="lnkPO_Rej" BackgroundCssClass="modalBackground">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAddPO_Rej" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div23" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 740px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    <asp:Label ID="lbPOlHeading_Rej" runat="server"></asp:Label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnPOCloseLineItem_Rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <%--  <section>--%>
                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table class="tablemain">
                                                                                <tr>
                                                                                    <td>
                                                                                        <div id="Div24" runat="server" style="font-size: 1.15em; color: Red">
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
                                                                                                            <td class="lbl" colspan="2">
                                                                                                                <label>
                                                                                                                    Account Name<em>*</em> :</label>
                                                                                                                </label>
                                                                                                        <br />
                                                                                                                <asp:DropDownList ID="ddlExpItem_Rej" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                                    CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Code<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtAccCode_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
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
                                                                                                                <label>
                                                                                                                    Description<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtDescr_Rej" runat="server" ReadOnly="true" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                            </td>
                                                                                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Vendor Part No :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtVendPtNo_Rej" runat="server" onkeydown="TabIndex('txtQuantity', event)" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl cell">
                                                                                                                <small>
                                                                                                                    <label>
                                                                                                                        Req. Del. Date:
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                                        <asp:TextBox ID="txtReqDelDateRej" runat="server" Width="70px" CssClass="date form-control"></asp:TextBox>
                                                                                                                        <div class="input-group-addon">
                                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                                        </div>
                                                                                                                    </div></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Quantity<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtquantity_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Unit Price<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtUnitPrice_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Estimated shipping Cost<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtShipCost_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Package/Unit<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPackUnit_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
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
                                                                                                                <label align="left">
                                                                                                                    Calculate TaxAmt :
                                                                                                                </label>
                                                                                                                <asp:CheckBox ID="chkCalTax_Rej" runat="server" class="form3Checkbox4" Width="24px"
                                                                                                                    onclick="javascript:CalcBudgetDetails();" />
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Percent<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTaxPercent_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTax_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Line Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPOAmount_Rej" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
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
                                                                                                                <label style="color: Black">
                                                                                                                    Budget<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBudget_Rej" runat="server" ReadOnly="true" BackColor="#9AA3AB" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Current Balance<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtCurrBal_Rej" runat="server" ReadOnly="true" BackColor="#9AA3AB" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Remaining $<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtRemain_Rej" runat="server" ReadOnly="true" BackColor="#9AA3AB" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Balance after PO<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBalAfterPO_Rej" runat="server" ReadOnly="true" BackColor="#9AA3AB" CssClass="form-control"></asp:TextBox>
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
                                                                    </div>
                                                                    <%--  </section>--%>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAddPO_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popAddPO_Rej" runat="server" DropShadow="false" PopupControlID="pnlAddPO_Rej"
                                                                TargetControlID="lnkAddPO_Rej" CancelControlID="btnPOCloseLineItem_Rej" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlExportData_rej" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Export Data
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnExpDataclose_rej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px;">
                                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px;">
                                                                            <div id="dvExpDataMsg_rej" runat="server">
                                                                            </div>
                                                                            <asp:Button ID="btnPrintPO_Rej" runat="server" Text="Print" CssClass="btn btn-info" OnClick="PrintPO_Rej" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpEmail_Rej" runat="server" Text="Email" CssClass="btn btn-info" OnClick="RejExportAndEmail" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpVendEmail_Rej" runat="server" Text="Vendor Email" CssClass="btn btn-info" OnClick="SendExpVendorEmail_Rej"></asp:Button>
                                                                            <asp:HiddenField ID="hdnMailTo_Rej" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkExportData_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender runat="server" ID="popExpData_Rej" DropShadow="false" PopupControlID="pnlExportData_rej"
                                                                TargetControlID="lnkExportData_Rej" BackgroundCssClass="modalBackground1" CancelControlID="btnExpDataclose_rej">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlMultEmail_Rej" runat="server" Style="display: none">
                                                                <div class="main-content" id="Div28" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Send Email
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSave_Rej" runat="server" Text="Email" CssClass="btn btn-info" Visible="true" OnClick="ValidateEmail_Rej"></asp:Button>&nbsp;
                                                                            <asp:Button ID="btnEmailClose_Rej" runat="server" Text="Close" CssClass="btn btn-info" />&nbsp;   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="alert alert-info">
                                                                                <small>
                                                                                    <label><em>*</em>Seperate multiple email addresses with a comma ( , ).</label>
                                                                                </small>
                                                                            </div>
                                                                            <div id="DivEmailErr_Rej" runat="server">
                                                                            </div>
                                                                            <label style="vertical-align: top">
                                                                                Mail to:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <asp:TextBox ID="txtMulEmail_Rej" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_Rej');"></asp:TextBox>
                                                                            <br />
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:LinkButton ID="lnkCCEmail_Rej" runat="server" OnClick="AddRejCCEmail" CssClass="button button-blue"
                                                                                            Text="AddCC"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="dvCCEmail_Rej" runat="server" style="display: none">
                                                                                            <asp:TextBox ID="txtCCEmail_Rej" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_Rej');">
                                                                                            </asp:TextBox>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkEmail_Rej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popMulEmail_Rej" runat="server" DropShadow="false" PopupControlID="pnlMultEmail_Rej"
                                                                CancelControlID="btnEmailClose_Rej" TargetControlID="lnkEmail_Rej" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlItemNotesRej" runat="server" DefaultButton="btnCloseItemNotesRej" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Item Notes
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCloseItemNotesRej" runat="server" Text="Ok" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Code:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblDispItemCodeRej" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Notes:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblItemNotesRej" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <br />
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkItemNotesRej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popItemNotesRej" runat="server" DropShadow="false" CancelControlID="btnCloseItemNotesRej"
                                                                PopupControlID="pnlItemNotesRej" TargetControlID="lnkItemNotesRej" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAttPORej" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClosePORej" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvAttPORej" runat="server">
                                                                            </div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <isx:CoolGridView ID="gvAttchmntsPORej" runat="server" AllowPaging="false" Width="300px"
                                                                                            Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                                            OnRowDataBound="gvAttchmntsPORej_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:ImageButton runat="server" ID="imgAttchmntPO" Width="55px" Height="65px" OnClick="DownLdAttPORej"></asp:ImageButton>
                                                                                                        <asp:HiddenField ID="hdnattIdPO" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                        <asp:HiddenField ID="hdnAttOrgNamePO" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                        <asp:HiddenField ID="hdnOrgNamePO" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                        <asp:HiddenField ID="hdnDrftNamePO" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                            <EmptyDataTemplate>
                                                                                                <div style="width: 200px">
                                                                                                    <label>No attachments to display</label>
                                                                                                </div>
                                                                                            </EmptyDataTemplate>
                                                                                        </isx:CoolGridView>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivPORej" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:HiddenField ID="hdnAttIdsRetPORej" runat="server" />
                                                                            <asp:HiddenField ID="hdnDftCntPORej" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAttPORej" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_AttPORej" runat="server" DropShadow="false" PopupControlID="pnlAttPORej"
                                                                TargetControlID="lnkAttPORej" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClosePORej">
                                                            </cc1:ModalPopupExtender>
                                                        </ContentTemplate>
                                                    </asp:UpdatePanel>
                                                </section>
                                            </asp:PlaceHolder>
                                        </div>
                                        <!-- Rejected Tab Ends Here -->
                                        <!-- Parked Tab Starts Here -->
                                        <div role="tabpanel" class="tab-pane " id="parked" style="overflow-x: auto;">
                                            <asp:PlaceHolder ID="plcParkPO" runat="server">
                                                <section>
                                                    <asp:Timer ID="Timer4" runat="server" Interval="100000000">
                                                    </asp:Timer>
                                                    <asp:UpdatePanel ID="updPark" runat="server" UpdateMode="Conditional">
                                                        <Triggers>
                                                            <asp:AsyncPostBackTrigger ControlID="Timer4" EventName="Tick" />
                                                            <asp:AsyncPostBackTrigger ControlID="btnRefreshPark" EventName="Click" />
                                                            <asp:PostBackTrigger ControlID="btnSendToVendYesPark" />
                                                            <asp:PostBackTrigger ControlID="btnSendToVendNoPark" />
                                                            <asp:PostBackTrigger ControlID="btnCommentsSavePark" />
                                                            <asp:PostBackTrigger ControlID="btnExtendParkSubmit" />
                                                        </Triggers>
                                                        <ContentTemplate>
                                                            <asp:Button ID='btnRefreshPark' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                            <asp:HiddenField ID="hdnPreApprovedPark" runat="server" />
                                                            <asp:HiddenField ID="hdnIsMgrPreApprovedPark" runat="server" />
                                                            <asp:HiddenField ID="ReqIDPark" runat="server" />
                                                            <div>
                                                                <div class="form-group   has-feedback" style="width: 350px !important;">
                                                                    <asp:TextBox ID="txtKeywordSearchPark" CssClass="filterdata form-control" runat="server" Width="300px" placeholder="Type in any column details to search.." />
                                                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                                </div>

                                                            </div>
                                                            <br />
                                                            <isx:CoolGridView AllowPaging="false" ID="gvApDetailsPark" runat="server" AutoGenerateColumns="false"
                                                                Height="300px" Width="850px" GridLines="None"
                                                                OnRowDataBound="gvApDetailsPark_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="RequestID" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkRequestID" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                                OnCommand="SortExpressionPark" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test" OnClick="EditPark"
                                                                                    Text='<%#Eval("RequestID")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="ParkedOn (Days)" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <label><%#Convert.ToDateTime(Eval("ActionDate")).ToShortDateString()%>&nbsp;(<%#Eval("parkDays")%>)</label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Comments">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("parkComment")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="AppliedBy" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("UserName")%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="SubmittedOn">
                                                                        <ItemTemplate>
                                                                            <label><%#Convert.ToDateTime(Eval("ActionDate")).ToShortDateString()%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPreAmount" runat="server" Text="Pre-Amount" CommandArgument="PreAmount"
                                                                                OnCommand="SortExpressionPark" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblPAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                                OnCommand="SortExpressionPark" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Purpose" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                                OnCommand="SortExpressionPark" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("Purpose")%></label>
                                                                            <asp:HiddenField ID="hdnMGReqID" runat="server" Value='<%#Eval("requestId")%>' />
                                                                            <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("UserID")%>' />
                                                                            <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsManagerPreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                                            <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                                            <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                                            <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                                            <asp:HiddenField ID="hdnManagerID" runat="server" Value='<%#Eval("ManagerID")%>' />
                                                                            <asp:HiddenField ID="hdnPreAmnt" runat="server" Value='<%#Eval("PreAmount")%>' />
                                                                            <asp:HiddenField ID="hdnActAmnt" runat="server" Value='<%#Eval("ActualAmount")%>' />
                                                                            <asp:HiddenField ID="hdnManagerEmail" runat="server" Value='<%#Eval("ManagerEmail")%>' />
                                                                            <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                                            <asp:HiddenField ID="hdnBudgetLimitExceeded" runat="server" Value='<%#Eval("BudgetLimit")%>' />
                                                                            <asp:HiddenField ID="hdnUserName" runat="server" Value='<%#Eval("UserName")%>' />
                                                                            <asp:HiddenField ID="hdnParkedUser" runat="server" Value='<%#Eval("ParkedUser")%>' />
                                                                            <asp:HiddenField ID="hdnOnBehalfOf" runat="server" Value='<%#Eval("onBeHalfOf")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="View">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkEditBtn" runat="server" CommandArgument="test" OnClick="EditPark"
                                                                                    Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px">
                                                                        <label>
                                                                            No data to display</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                            <asp:Panel ID="pnlAddEditPark" runat="server" Style="display: none;">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnApprovePark" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="btnApprovePark_Click" />
                                                                                    <asp:Button ID="btnRejectPark" runat="server" Text="Reject" CssClass="btn btn-info" OnClick="btnRejectPark_Click" />
                                                                                    <asp:Button ID="btnExpExportPark" runat="server" OnClick="ExportPark" Text="Print/Email" CssClass="btn btn-info"></asp:Button>
                                                                                    <asp:Button ID="btnLoadEditDataPark" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="LoadEditDataPark" />
                                                                                    <asp:Button ID="btnClosePark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 15px">
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                            <div id="dvErrorPark" runat="server" style="color: Red">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">RequestID:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <label style="font-weight: bold; padding-top: 7px"><%=Session["ReqID"]%></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <asp:HiddenField ID="hdn1Park" runat="server" />
                                                                            <asp:LinkButton ID="lknCmntPark" runat="server" CommandArgument="test" OnClick="CommentsPark"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>
                                                                        </div>



                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Manager Email</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:DropDownList ID="ddlManagerEmailPark" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                    CssClass="form-control selectpicker" data-live-search="true">
                                                                                </asp:DropDownList>
                                                                                <asp:TextBox ID="txtManagerEmailPark" runat="server" Visible="false" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Start Date</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="txtTripStartDatePark" runat="server" CssClass="date form-control"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdMaxDaysPark" runat="server" />
                                                                                    <asp:HiddenField ID="hdMaxDatePark" runat="server" />
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Purpose</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtPurposePark" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Payable To:</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="txtOnBehalfOfPark" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>



                                                                        <div class="clearfix"></div>
                                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                            <a id="lnkPark" href="javascript:void(0)" onclick="collapse('lnkPark', 'colPark')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                            <div id="colPark" class="table table-responsive">
                                                                                <br />
                                                                                <div style="text-align: right;">
                                                                                </div>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <isx:CoolGridView ID="gvExpPark" runat="server" AllowPaging="false"
                                                                                                AutoGenerateColumns="False" Height="174px" GridLines="None"
                                                                                                OnRowDataBound="gvExpPark_RowDataBound">
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Action">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" ID="lnkview" CommandName="View" OnCommand="ViewExpDetailsPark"
                                                                                                                CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseType">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" /></label>
                                                                                                            <label>
                                                                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label></label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="ExpenseDate">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                                                            <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Pre-Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label>
                                                                                                            <label>
                                                                                                                <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' />
                                                                                                            </label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Amount">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText=" payment Type" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="City">
                                                                                                        <ItemTemplate>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' />
                                                                                                            </label>
                                                                                                            <label>
                                                                                                                <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Attachments">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                                                Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                                            <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                                            <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                                            <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                                            <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="IsReimbursable">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:HiddenField ID="hdnReimbChk" runat="server" Value='<%#Eval("Reimbursable") %>' />
                                                                                                            <asp:CheckBox ID="chkIsPenReimb" runat="server" />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                                <EmptyDataTemplate>
                                                                                                    <div style="width: 350px">
                                                                                                        <label>
                                                                                                            No expenses to display within the date range.</label>
                                                                                                    </div>
                                                                                                </EmptyDataTemplate>
                                                                                            </isx:CoolGridView>
                                                                                            <asp:HiddenField ID="hdnRowIndexPark" runat="server" />
                                                                                            <asp:HiddenField ID="hdnSeq1Park" runat="server" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                <asp:HiddenField runat="server" ID="hdnCommentsPark" />
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="clearfix"></div>

                                                                        <%--</section>--%>
                                                                    </div>
                                                                    <div class="divfieldset alert alert-info mt10" style="width: 99%; margin: 0px;">
                                                                        <table style="font-weight: bold; width: 100%" align="center">
                                                                            <tr>
                                                                                <td style="text-align: right; width: 12%">
                                                                                    <label>Pre-Expenses Total:</label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%">
                                                                                    <label><%=preExpTotal%></label>
                                                                                </td>
                                                                                <td style="text-align: right; width: 12%">
                                                                                    <label>Expenses Total:</label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%">
                                                                                    <label><%=expTotal%></label>
                                                                                </td>
                                                                                <td style="text-align: right; width: 12%; color: Green">
                                                                                    <label>
                                                                                        <asp:Label ID="lblGrandTotalPark" Text="Grand Total: " runat="server"></asp:Label></label>
                                                                                </td>
                                                                                <td style="text-align: left; width: 12%; color: Green">
                                                                                    <label>
                                                                                        <asp:Label ID="lblGrandTotalAmntPark" runat="server"></asp:Label></label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFakePark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popupPark" runat="server" DropShadow="false" PopupControlID="pnlAddEditPark"
                                                                TargetControlID="lnkFakePark" BackgroundCssClass="modalBackground" CancelControlID="btnClosePark">
                                                            </cc1:ModalPopupExtender>
                                                            <!--View ExpDetails starts here-->
                                                            <asp:Panel ID="pnlVExpDetailsPark" runat="server" Style="display: none">
                                                                <div id="Div19" class="main-content" runat="server" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0 0px 10px 0px; height: 400px; width: 1100px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View Expense
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnVCancelPark" runat="server" Text="Close" CssClass="btn btn-info" OnClick="btnVCancelPark_Click" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div style="text-align: right">
                                                                                <asp:Button ID="btnVPrevPark" runat="server" Text="Previous" CssClass="btn btn-info" OnClick="ViewPreviousExpPark" />
                                                                                <asp:Button ID="btnVNextPark" runat="server" Text="Next" CssClass="btn btn-info" OnClick="ViewNextExpPark" />
                                                                            </div>

                                                                            <div id="dvEditVTypePark" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Type</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVExpTypePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVJobPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Code </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblddlVJobCdPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div id="dvEditVPhsPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Phase Code </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVPhcdPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <div id="dvEditVJCPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Job Category  </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVCatCodePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVAccCodePark" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Account Name: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVAccCodePark" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="dvVClassPark" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Class: </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="txtVClassPark" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div class="clearfix"></div>





                                                                            <div id="dvEditVEDPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Expense Date </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                        <asp:TextBox ID="lblVDatePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                        </asp:TextBox>
                                                                                        <div class="input-group-addon">
                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>

                                                                            <div id="dvEditVCVPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Cities visited</label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVCityPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                            <div id="SpVOthercityPark" runat="server" style="text-align: right; display: none" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                                    <label class="form-label label_setting" for="orgcode">Other City </label>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <asp:TextBox ID="lblVOtherPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVFromcityPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">From City </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVFromcityPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVFromOtherPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Other City  </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVOtherFromCityPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVToCityPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">To City< </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVTocityPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVToOtherPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Other City</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVOtherToCityPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVFDPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">From Date </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="lblVFromdatePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVTDPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">To Date</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                    <asp:TextBox ID="lblVTodatePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                    </asp:TextBox>
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>


                                                                        <div id="dvEditVPreVendorPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Preferred Vendor </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVPreVendorPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVAgNamePark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Agent Name </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblAgNamePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVItNoPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Itinarary number </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVItNoPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>



                                                                        <div id="dvEditVTTPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Total Trip </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVTotTripPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVLNPark" runat="server" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">LessNorm</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVLNormPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>

                                                                            </div>
                                                                        </div>
                                                                        <div id="dvEditVReimbtPark" runat="server" cssclass="form-control" style="display: none; float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Reimbursement</label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVReimbtPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVSalesTaxPark" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Sales Tax: </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVSalesTaxPark" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditFoodTaxPark" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Food Tax: </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVFoodTaxPark" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVPAPark" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Pre-Amount </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVPreAmtPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVAmtPark" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Total Amount (with Tax) </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVActAmtPark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dvEditVPMPark" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Payment Mode</i> </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVPayModePark" runat="server" ReadOnly="true" CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>

                                                                        <div id="dv3Park" runat="server" style="float: left" class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                                <label class="form-label label_setting" for="orgcode">Comments </label>
                                                                            </div>
                                                                            <div class="col-sm-7">
                                                                                <asp:TextBox ID="lblVcomntsPark" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                    CssClass="form-control">
                                                                                </asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="clearfix"></div>
                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                        <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Budget </label>
                                                                        </div>
                                                                        <div class="col-sm-7">
                                                                            <asp:TextBox runat="server" ID="txtVExpBudgPark" CssClass="budgfld form-control" />
                                                                            <asp:HiddenField ID="hdnVYearPark" runat="server" />
                                                                            <asp:HiddenField ID="hdnVExpRowTotAmntPark" runat="server" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                        <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Current Balance </label>
                                                                        </div>
                                                                        <div class="col-sm-7">
                                                                            <asp:TextBox runat="server" ID="txtVExpCurrBalPark" CssClass="budgfld form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                        <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Remaining$ </label>
                                                                        </div>
                                                                        <div class="col-sm-7">
                                                                            <asp:TextBox runat="server" ID="txtVExpRemBudgPark" CssClass="budgfld form-control" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                        <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Bal. After Expense<</label>
                                                                        </div>
                                                                        <div class="col-sm-7">
                                                                            <asp:TextBox runat="server" ID="txtVExpBalAfterPark" CssClass="budgfld form-control" />

                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                        <asp:LinkButton ID="lnkViewAttachmentsPark" runat="server" OnClick="DisplayLineAttachmentsPark"
                                                                            Text="View attachments"></asp:LinkButton>
                                                                        <label id="lblPenAttPark" runat="server" style="display: none">
                                                                        </label>
                                                                    </div>

                                                                </div>
                                                                </div>
                                                    </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkVEditPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_VExpPark" runat="server" DropShadow="false" PopupControlID="pnlVExpDetailsPark"
                                                                TargetControlID="lnkVEditPark" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <!--View ExpDetails ends here-->
                                                            <asp:Panel ID="pnlCommentsPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Comments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCommentsSavePark" runat="server" Text="Ok" CssClass="btn btn-info" OnClick="btnCommentsSavePark_Click"></asp:Button>
                                                                                    <asp:Button ID="btnCommentsClosePark" runat="server" Text="Close" CssClass="btn btn-info" OnClick="btnCommentsClosePark_Click" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div id="dvErrorcPark" runat="server" style="color: Red; padding: 13px">
                                                                    </div>
                                                                    <div style="overflow: hidden; overflow-y: scroll; height: 245px; width: 436px; padding: 13px">
                                                                        <div id="dvCommentsEntryPark" runat="server">
                                                                            <div style="float: right">
                                                                                <p>
                                                                                    <asp:Label ID="lblCmntLabelPark" runat="server"></asp:Label>
                                                                                </p>
                                                                            </div>
                                                                            <br />
                                                                            <div id="dvCommentsPopPark" runat="server">
                                                                                <div id="widgetCommentsPark" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                            <!-- input form. you can press enter too -->
                                                                            <asp:TextBox ID="txtCommentsPark" runat="server" TextMode="MultiLine" Width="374px"
                                                                                Height="160" Style="margin-left: 18px"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <%-- </section>--%>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkFake_CmtPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_CommentsPark" runat="server" DropShadow="false"
                                                                PopupControlID="pnlCommentsPark" TargetControlID="lnkFake_CmtPark" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAttPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClosePark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 8px;">
                                                                        <div style="border: 1px solid #0099CC; padding: 8px;">
                                                                            <div id="dvAttPark" runat="server">
                                                                            </div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <isx:CoolGridView ID="gvAttchmntsPark" runat="server" AllowPaging="false" Width="200px" Height="300px"
                                                                                            AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                                            OnRowDataBound="gvAttchmntsPark_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:ImageButton runat="server" ID="imgAttchmnt" Width="55px" Height="65px" OnClick="DownLdAttPark" />
                                                                                                        <asp:HiddenField ID="hdnAttName" runat="server" Value='<%# Eval("fileName")%>' />
                                                                                                        <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                        <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                        <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                        </isx:CoolGridView>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivPark" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAttPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_AttPark" runat="server" DropShadow="false" PopupControlID="pnlAttPark"
                                                                TargetControlID="lnkAttPark" BackgroundCssClass="modalBackground3" CancelControlID="btnAttClosePark">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlConfirmPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 380px;">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Alert
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSendToVendYesPark" runat="server" Text="Yes" CssClass="btn btn-info" OnClick="btnSendToVendYesPark_Click" />
                                                                                    <asp:Button ID="btnSendToVendNoPark" runat="server" Text="No" CssClass="btn btn-info" OnClick="btnSendToVendNoPark_Click" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div id="dvVendMsgPark" runat="server">
                                                                            </div>
                                                                            <small>
                                                                                <label>
                                                                                    Send this PO to the Vendor:</label></small><br />
                                                                            <br />
                                                                            <asp:RadioButtonList ID="rblVendPark" runat="server" RepeatDirection="Horizontal"
                                                                                CssClass="rbl" Width="100px">
                                                                                <asp:ListItem>Email</asp:ListItem>
                                                                                <asp:ListItem>Fax</asp:ListItem>
                                                                            </asp:RadioButtonList>
                                                                            <br />
                                                                            <br />
                                                                            <asp:TextBox ID="txtVendEmailApprPark"
                                                                                runat="server" CssClass="form-control"></asp:TextBox>
                                                                            <asp:HiddenField ID="hdnSysOrderFlgPark" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendEmailPark" runat="server" />
                                                                            <asp:HiddenField ID="hdnVendEmailFlgPark" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkConfirmPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popConfirmPark" runat="server" DropShadow="false" PopupControlID="pnlConfirmPark"
                                                                TargetControlID="lnkConfirmPark" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlPOAddEditPark" runat="server" Style="display: none;">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    View PO details
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnExtendParkPO" runat="server" OnClick="ExtendParkPOApproval" Text="Extend PO Parking" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnApprovePOPark" runat="server" Text="Approve" CssClass="btn btn-info" OnClick="btnApprovePark_Click" />
                                                                                    <asp:Button ID="btnRejectPOPark" runat="server" Text="Reject" CssClass="btn btn-info" OnClick="btnRejectPark_Click" />
                                                                                    <asp:Button ID="btnPOClosePark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                    <asp:Button ID="btnLoadEditPODataPark" runat="server" Text="Refresh" CssClass="btn btn-info" OnClick="LoadEditPODataPark" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                                                                <div id="dvPoErrorPark" runat="server" style="color: Red; font-weight: bold">
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">PO Number:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <label><%=Session["PONum"]%></label>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Company Code:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <label><%=Session["CompCode"] %></label>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <asp:HiddenField ID="HiddenField7Park" runat="server" />
                                                                                    <asp:LinkButton ID="lnkPOCmntsPark" runat="server" CommandArgument="test" OnClick="CommentsPark"><img src="images/icons/comments.png" alt="Comments"/>&nbsp;Comments</asp:LinkButton>

                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4" style="clear: both">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Shipping Address:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:Label ID="lblShipAddrPark" runat="server"></asp:Label>
                                                                                        <cc1:HoverMenuExtender ID="hveShipAddrPark" runat="server" TargetControlID="btnShipAddressPark" PopupControlID="pnlShipAddrPark" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                        <asp:Panel ID="pnlShipAddrPark" runat="server">
                                                                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                                <div class="divfieldset">
                                                                                                    <div id="dvshipAddrPark">
                                                                                                        <table class="tablemaincc" width="100%">
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Company Name:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCompNamePark" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address1:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipAddr1Park" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address2:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipAddr2Park" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>City:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCityPark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>State:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipStatePark" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Country:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipCountryPark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>ZipCode:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblShipZipCodePark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </asp:Panel>
                                                                                        <asp:Button ID="btnShipAddressPark" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Billing Address:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:Label ID="lblBillAddrPark" runat="server"></asp:Label>
                                                                                        <cc1:HoverMenuExtender ID="hveBillAddrPark" runat="server" TargetControlID="btnBillAddrPark" PopupControlID="pnlBillAddrPark" PopupPosition="Left"></cc1:HoverMenuExtender>
                                                                                        <asp:Panel ID="pnlBillAddrPark" runat="server">
                                                                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 10px; min-height: 20px; min-width: 400px">
                                                                                                <div class="divfieldset">
                                                                                                    <div id="dvBillAddrPark">
                                                                                                        <table class="tablemaincc" width="100%">
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Company Name:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCompNamePark" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address1:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillAddr1Park" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Address2:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillAddr2Park" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>City:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCityPark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>State:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillStatePark" runat="server"></asp:Label></label></i></td>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>Country:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillCountryPark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="right"><b><small>
                                                                                                                    <label>ZipCode:&nbsp;</label></small></b></td>
                                                                                                                <td><i>
                                                                                                                    <label>
                                                                                                                        <asp:Label ID="lblBillZipCodePark" runat="server"></asp:Label></label></i></td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </asp:Panel>
                                                                                        <asp:Button ID="btnBillAddrPark" runat="server" ToolTip="View full address" CssClass="button-blue" Style="cursor: pointer" Text="..." />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Manager Email:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlPOMgrEmailPark" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                            CssClass="form-control selectpicker" data-live-search="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Start Date:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                            <asp:TextBox ID="txtPOTripStrtDatePark" runat="server" CssClass="date form-control" ReadOnly="true"></asp:TextBox>
                                                                                            <asp:HiddenField ID="hdnYearPark" runat="server" />
                                                                                            <asp:HiddenField ID="hdnTaxPark" runat="server" />
                                                                                            <div class="input-group-addon">
                                                                                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">PreferredVendor:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlPreVendorPark" runat="server" DataTextField="PreferredVendor"
                                                                                            DataValueField="PreferredVendor" CssClass="form-control selectpicker" data-live-search="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Purpose:</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:TextBox ID="txtPoPurposePark" runat="server" CssClass="form-control"></asp:TextBox>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <div class="col-sm-5">
                                                                                        <label class="form-label label_setting" for="orgcode">Job</label>
                                                                                    </div>
                                                                                    <div class="col-sm-7 ">
                                                                                        <asp:DropDownList ID="ddlJobsPark" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                    <asp:Button ID="btnAttachPOPark" runat="server" Text="Attachments" CssClass="btn btn-info" OnClick="btnAttachPOPark_Click" />
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #eee; margin-bottom: 10px">
                                                                                <a id="A1Park" href="javascript:void(0)" onclick="collapse('A1Park', 'Div14Park')" class="btn btn-info" style="float: left; margin-top: -13px; color: #fff !important; padding: 3px; margin-bottom: 12px;">[-]Hide details</a>
                                                                                <div id="Div14Park" class="divfieldset">
                                                                                    <div class="clearfix">
                                                                                        <br />
                                                                                    </div>
                                                                                    <br />
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <isx:CoolGridView ID="gvPOPark" runat="server" AllowPaging="false"
                                                                                                    AutoGenerateColumns="False" Height="174px" GridLines="None" OnRowCommand="gvPOPark_RowCommand"
                                                                                                    OnRowDataBound="gvPOPark_RowDataBound">
                                                                                                    <Columns>
                                                                                                        <asp:TemplateField HeaderText="Action">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:LinkButton runat="server" ID="lnkpoEdit" Text="View" CommandName="View" OnCommand="EditPODetailsPark"
                                                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;
                                                                                                <asp:LinkButton runat="server" ID="lnkPOview" Text="View" CommandName="View" OnCommand="ViewPODetailsPark"
                                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText=" Line No">
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
                                                                                                        <asp:TemplateField HeaderText="Account Code">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblPOAccCode" runat="server" Text='<%# Eval("accountCode")%>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="250px"
                                                                                                            HeaderStyle-Width="250px">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("expItem")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Item Code">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblItemCode" runat="server" Text='<%#Eval("itemCode") %>'></asp:Label></label>
                                                                                                                <label>
                                                                                                                    <asp:LinkButton ID="lnkItemCode" runat="server" Text='<%#Eval("itemCode") %>' OnCommand="DisplayItemNotesRej"
                                                                                                                        CommandArgument='<%#Eval("itemCode") + ";" + Eval("othercity") %>'></asp:LinkButton></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Description">
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
                                                                                                        <asp:TemplateField HeaderText="POAmnt">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblPOAmnt" runat="server" Text='<%# Eval("PreAmount")%>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Budget">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("budget")%></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="BalanceAfterPO" ControlStyle-Width="120px" HeaderStyle-Width="120px">
                                                                                                            <ItemTemplate>
                                                                                                                <label><%# Eval("balAfterPo")%></label>
                                                                                                                <asp:HiddenField ID="hdnBdgLmt" runat="server" Value='<%#Eval("budgetLimit")%>' />
                                                                                                                <asp:HiddenField ID="hdnItemNote" runat="server" Value='<%#Eval("othercity") %>' />
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                    </Columns>
                                                                                                </isx:CoolGridView>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <asp:HiddenField runat="server" ID="hdnPORowTotAmntPark" />
                                                                                    <asp:HiddenField runat="server" ID="hdnPOOldAmountPark" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkPOPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="pop_EditPOPark" runat="server" DropShadow="false" PopupControlID="pnlPOAddEditPark"
                                                                CancelControlID="btnPOClosePark" TargetControlID="lnkPOPark" BackgroundCssClass="modalBackground">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAddPOPark" runat="server" Style="display: none">
                                                                <div id="Div32" class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 740px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    <asp:Label ID="lbPOlHeading_penPark" runat="server"></asp:Label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btSaveEditPOPark" runat="server" Text="Save" CssClass="btn btn-info" OnClick="btSaveEditPOPark_Click" />
                                                                                    <asp:Button ID="btnClosePOItemPark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table class="tablemain">
                                                                                <tr>
                                                                                    <td>
                                                                                        <div id="dvPOErrMsgPark" runat="server" style="font-size: 1.15em; color: Red">
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
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Department<em>*</em> :</label><br />
                                                                                                                <asp:DropDownList ID="ddlDepartmentPark" runat="server" DataTextField="Description" CssClass="form-control selectpicker" data-live-search="true"
                                                                                                                    DataValueField="CodeKey" AutoPostBack="true" OnSelectedIndexChanged="ddlDepartmentPark_SelectedIndexChanged">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Name<em>*</em> :</label>
                                                                                                                </label>
                                                                                                        <br />
                                                                                                                <asp:DropDownList ID="ddlExpItemPark" runat="server" DataTextField="AcountClss" DataValueField="accName"
                                                                                                                    CssClass="form-control selectpicker" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlExpItemPark_SelectedIndexChanged">
                                                                                                                </asp:DropDownList>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Account Code<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtAccCodePark" runat="server" ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Item Code<em>*</em> :</label>
                                                                                                                <br />
                                                                                                                <asp:DropDownList ID="ddlItemCodePark" runat="server" DataValueField="ItemCode" DataTextField="ItemCode" CssClass="form-control selectpicker" data-live-search="true"
                                                                                                                    OnSelectedIndexChanged="ddlItemCodePark_SelectedIndexChanged" AutoPostBack="true">
                                                                                                                </asp:DropDownList>
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
                                                                                                                <label>
                                                                                                                    Description<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtDescrPark" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <div id="dvCommts_PenPark" runat="server" visible="false">
                                                                                                                    <label>
                                                                                                                        Comment<em>*</em> :
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <asp:TextBox ID="txtComntsPark" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Vendor Part No :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtVendPtNoPark" runat="server" onkeydown="TabIndex('txtQuantity', event)" CssClass="form-control"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl cell">
                                                                                                                <small>
                                                                                                                    <label>
                                                                                                                        Req. Del. Date:
                                                                                                                    </label>
                                                                                                                    <br />
                                                                                                                    <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                                                        <asp:TextBox ID="txtReqDelDatePark" runat="server" Width="70px" CssClass="date form-control"></asp:TextBox>
                                                                                                                        <div class="input-group-addon">
                                                                                                                            <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                                                        </div>
                                                                                                                    </div></td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table>
                                                                                                        <tr>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Quantity<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtQuantityPark" runat="server" CssClass="form-control" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Unit Price<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtUnitPricePark" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Estimated shipping Cost<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtShipCostPark" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Package/Unit<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPkgUnitPark" runat="server" CssClass="form-control"></asp:TextBox>
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
                                                                                                                <label align="left">
                                                                                                                    Calculate TaxAmt :
                                                                                                                </label>
                                                                                                                <asp:CheckBox ID="chkCalTaxPark" runat="server" class="form3Checkbox4" Width="24px"
                                                                                                                    onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');" />
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Percent<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtTaxPercentPark" CssClass="form-control" runat="server" onkeyup="javascript:CalcBudgetDetails('txtQuantity','txtunitPrice','txtShipCost','dvPOErrMsg','chkCalTax','txtTaxPercent','txtTax','txtPoAmount','txtRemain','txtBalAfterPO');"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Tax Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txttaxPark" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label>
                                                                                                                    Line Amount<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtPoAmountPark" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
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
                                                                                                                <label style="color: Black">
                                                                                                                    Budget<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBudgetPark" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Current Balance<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtCurrBalPark" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Remaining $<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtRemainPark" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
                                                                                                            </td>
                                                                                                            <td class="lbl">
                                                                                                                <label style="color: Black">
                                                                                                                    Balance after PO<em>*</em> :
                                                                                                                </label>
                                                                                                                <br />
                                                                                                                <asp:TextBox ID="txtBalAfterPOPark" CssClass="form-control" runat="server" ReadOnly="true" BackColor="#9AA3AB"></asp:TextBox>
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
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAddPOPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popAddPOPark" runat="server" DropShadow="false" PopupControlID="pnlAddPOPark"
                                                                TargetControlID="lnkAddPOPark" CancelControlID="btnClosePOItemPark" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlExportData_PenPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Export Data
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnExpDataclose_penPark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div style="padding: 20px;">
                                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px;">
                                                                            <div id="dvExpDataMsg_penPark" runat="server">
                                                                            </div>
                                                                            <asp:Button ID="btnPrintPO_penPark" runat="server" Text="Print" CssClass="btn btn-info" OnClick="PrintPOPark" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpEmail_PenPark" runat="server" Text="Email" CssClass="btn btn-info" OnClick="PenExportAndEmailPark" />
                                                                            <br />
                                                                            <br />
                                                                            <asp:Button ID="btnExpVendEmail_penPark" runat="server" Text="Vendor Email" CssClass="btn btn-info" OnClick="SendExpVendorEmail_penPark"></asp:Button>
                                                                            <asp:HiddenField ID="hdnMailTo_penPark" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkExportData_penPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender runat="server" ID="popExpData_PenPark" DropShadow="false"
                                                                PopupControlID="pnlExportData_PenPark" TargetControlID="lnkExportData_penPark"
                                                                BackgroundCssClass="modalBackground1" CancelControlID="btnExpDataclose_penPark">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlMultEmail_penPark" runat="server" Style="display: none">
                                                                <div id="Div33" class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Send Email
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnSave_penPark" runat="server" Text="Email" CssClass="btn btn-info" Visible="true" OnClick="ValidateEmail_penPark"></asp:Button>
                                                                                    <asp:Button ID="btnEmailClose_PenPark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px;">
                                                                        <div class="divfieldset">
                                                                            <div class="alert alert-info">
                                                                                <small>
                                                                                    <label><em>*</em>Seperate multiple email addresses with a comma ( , ).</label>
                                                                                </small>
                                                                            </div>
                                                                            <div id="DivEmailErr_penPark" runat="server">
                                                                            </div>
                                                                            <label style="vertical-align: top">
                                                                                Mail to:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <asp:TextBox ID="txtMulEmail_penPark" runat="server" CssClass="form-control" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_pen');"></asp:TextBox>
                                                                            <br />
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:LinkButton ID="lnkCCEmail_penPark" runat="server" OnClick="AddPenCCEmailPark"
                                                                                            CssClass="button button-blue" Text="AddCC"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="dvCCEmail_penPark" runat="server" style="display: none">
                                                                                            <asp:TextBox ID="txtCCEmail_penPark" CssClass="form-control" runat="server" TextMode="MultiLine" onchange="javascript:return validateMultipleEmailsCommaSeparated(this,',', 'DivEmailErr_pen');">
                                                                                            </asp:TextBox>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkEmail_penPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popMulEmail_penPark" runat="server" DropShadow="false"
                                                                PopupControlID="pnlMultEmail_penPark" CancelControlID="btnEmailClose_PenPark"
                                                                TargetControlID="lnkEmail_penPark" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlExtendPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                                    <header>
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td style="width: 50%;">
                                                                                    <h2 class="pophead">Park PO</h2>
                                                                                </td>
                                                                                <td align="right" style="width: 50%">
                                                                                    <asp:Button ID="btnExtendParkSubmit" runat="server" Text="Submit" CssClass="btn btn-info" Visible="true" OnClick="ExtendParkAndSubmitApproval"></asp:Button>&nbsp;
                                                                        <asp:Button ID="btnExtendParkClose" runat="server" Text="Close" CssClass="btn btn-info" OnClick="CloseExtendParkPO" />&nbsp;
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </header>
                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvExtendParkMsg" runat="server" style="font-weight: bold">
                                                                            </div>
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td width="100%" colspan="2">
                                                                                        <small>
                                                                                            <label>
                                                                                                Please provide Date and Comments to Park PO and click Submit to proceed.
                                                                                Click Close to cancel.</label></small>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="25%" align="right">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Park PO Untill:</label></small>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td width="75%" align="left">
                                                                                        <div class="input-group date" data-date-format="dd.mm.yyyy">
                                                                                            <asp:TextBox ID="txtExtendParkDate" CssClass="form-control date" runat="server"></asp:TextBox>
                                                                                            <div class="input-group-addon">
                                                                                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                            </div>
                                                                                        </div>

                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="25%" align="right">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Comments:</label></small>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td width="75%" align="left">
                                                                                        <asp:TextBox ID="txtExtendParkComments" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkExtendPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popExtendPark" runat="server" DropShadow="false" PopupControlID="pnlExtendPark"
                                                                TargetControlID="lnkExtendPark" BackgroundCssClass="modalBackground1">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlItemNotesPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">


                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Item Notes
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnCloseItemNotesPark" runat="server" Text="Ok" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Code:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblDispItemCodePark" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <label>
                                                                                            Item Notes:</label>&nbsp;&nbsp;
                                                                                    </td>
                                                                                    <td align="left">
                                                                                        <label>
                                                                                            <asp:Label ID="lblItemNotesPark" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <br />
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkItemNotesPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popItemNotesPark" runat="server" DropShadow="false" CancelControlID="btnCloseItemNotesPark"
                                                                PopupControlID="pnlItemNotesPark" TargetControlID="lnkItemNotesPark" BackgroundCssClass="modalBackground3">
                                                            </cc1:ModalPopupExtender>
                                                            <asp:Panel ID="pnlAttPOPark" runat="server" Style="display: none">
                                                                <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">

                                                                    <div class="pop-page-title">
                                                                        <div class="row">
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                <div class="pop-page-title-inner">
                                                                                    Attachments
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                <div class="pull-right">
                                                                                    <asp:Button ID="btnAttClosePOPark" runat="server" Text="Close" CssClass="btn btn-info" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div style="padding: 20px">
                                                                        <div class="divfieldset">
                                                                            <div id="dvAttPOPark" runat="server">
                                                                            </div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <isx:CoolGridView ID="gvAttchmntsPOPark" runat="server" AllowPaging="false" Width="300px"
                                                                                            Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                                            OnRowDataBound="gvAttchmntsPOPark_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:ImageButton runat="server" ID="imgAttchmntPO" Width="55px" Height="65px" OnClick="DownLdAttPOPark"></asp:ImageButton>
                                                                                                        <asp:HiddenField ID="hdnattIdPO" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                                        <asp:HiddenField ID="hdnAttOrgNamePO" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                                        <asp:HiddenField ID="hdnOrgNamePO" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                                        <asp:HiddenField ID="hdnDrftNamePO" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                            <EmptyDataTemplate>
                                                                                                <div style="width: 200px">
                                                                                                    <label>No attachments to display</label>
                                                                                                </div>
                                                                                            </EmptyDataTemplate>
                                                                                        </isx:CoolGridView>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div id="LargeImageContainerDivPOPark" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <asp:HiddenField ID="hdnAttIdsRetPOPark" runat="server" />
                                                                            <asp:HiddenField ID="hdnDftCntPOPark" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </asp:Panel>
                                                            <asp:LinkButton ID="lnkAttPOPark" runat="server"></asp:LinkButton>
                                                            <cc1:ModalPopupExtender ID="popup_AttPOPark" runat="server" DropShadow="false" PopupControlID="pnlAttPOPark"
                                                                TargetControlID="lnkAttPOPark" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClosePOPark">
                                                            </cc1:ModalPopupExtender>
                                                        </ContentTemplate>
                                                    </asp:UpdatePanel>
                                                </section>
                                            </asp:PlaceHolder>
                                        </div>
                                        <!-- Parked Tab Ends Here -->
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <!-- Main Section End -->
                </div>
                <!--footer-->
                <uc5:footer ID="footer" runat="server" />
                <!--footer-->

            </div>
        </div>

    </form>
</body>
</html>
