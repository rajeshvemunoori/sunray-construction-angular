
var lastField;
var lastFieldIsValid = true;
var reqid = 0, seqid = 0;
var selectedValue = 0;
var currentpageurl = "";

function $11(id) {
    return document.getElementById(id);
}

function PhoneNumberFormat(id, dv) {
    var formfield = $11(id);
    var currentValue = new String(formfield.value);
    var id = formfield.id;
    var currentStrippedValue = ReplaceAll(ReplaceAll(ReplaceAll(ReplaceAll(currentValue, "-", ""), " ", ""), "(", ""), ")", ""); //strip the dashes or parentheses from phone number
    lastField = id;
    if (currentStrippedValue.length > 0) {
        if (isNaN(currentStrippedValue)) {
            //alert("Please Enter Numeric Values Only (### ###-####)"); //Make sure only numbers are entered
            $11(dv).innerHTML = "Please Enter Numeric Values Only (### ###-####)";
            $11(dv).style.color = "Red";
            formfield.value = "";
            formfield.select();
            lastFieldIsValid = false;
            formfield.focus();
            return lastFieldIsValid;
        }
        else {
            if (currentStrippedValue.length != 10) //Verify that the area code and telephone number are entered
            {
                //alert("Phone # Must Be 10 Numbers Long (### ###-####)");
                $11(dv).innerHTML = "Phone # Must Be 10 Numbers Long (### ###-####)";
                formfield.select();
                lastFieldIsValid = false;
                formfield.focus();
                return lastFieldIsValid;
            }
            else {
                lastFieldIsValid = true;
                formfield.value = "(" + currentStrippedValue.substring(0, 3) + ") " + currentStrippedValue.substring(3, 6) + "-" + currentStrippedValue.substring(6, 10); //Format the string for correct display
            }
        }
    }
}

function ReplaceAll(checkMe, toberep, repwith) {
    var temp = checkMe;
    var i = temp.indexOf(toberep);
    while (i > -1) { //Loop through and replace all instances
        temp = temp.replace(toberep, repwith);
        i = temp.indexOf(toberep);
    }
    return temp;
}

function checkVendEmail() {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtEmailFax').value)) {
    if (/^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($11('txtEmailFax').value)) {
        return true;
    }
}

function checkEmail(form1, email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtEmail').value)) {
    if (/^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($11('txtEmail').value)) {
        return true;
    }
}

function checkEmail3(form1, email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtEmail1').value)) {
    if (/^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($11('txtEmail1').value)) {
        return true;
    }
}

function checkEmail1(form1, email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtManager').value)) {
    if (/^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($11('txtManager').value)) {
        return true;
    }
}

function checkEmail2(form1, email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($11('txtAdminEmail').value)) {
    if (/^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($11('txtAdminEmail').value)) {
        return true;
    }
}

function validatePhoneNumber() {
    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test($11('txtPhone').value)) {
        return true;
    }
}

function validatePhone() {
    if (/^\(?([2-9][0-9][0-9])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test($11('txtPhone').value)) {
        return true;
    }
}

function validateAmount() {
    if (/^[1-9]\d*(?:\.\d{0,2})?$/.test($11('txtAmount').value)) {
        return true;
    }
}

function validateAmount1() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtlmtamnt').value)) {
        return true;
    }
}

function validateAmount2() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtETotTrip').value)) {
        return true;
    }
}

function validateAmount6() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtEditTotTrip').value)) {
        return true;
    }
}

function validateAmount3() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtELessNorm').value)) {
        return true;
    }
}

function validateAmount5() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtEditLessNorm').value)) {
        return true;
    }
}

function validateAmountforOrg() {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11('txtApprLimit').value)) {
        return true;
    }
}

function validateAmount4(id) {
    if (/^[1-9]\d*(?:\.\d{0,2})?$/.test($11(id).value)) {
        return true;
    }
}
//skips  zero value
function validateAmount5(id) {
    if (/^[0-9]\d*(?:\.\d{0,2})?$/.test($11(id).value)) {
        return true;
    }
}

function validateBudgetAmount(id) {
    var reg = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    if (reg.test($11(id).value)) {
        return true;
    }
}

function CompareDates(str1, str2) {
    var ch = Date.parse(str1);
    var currentdt = Date.parse(str2);
    if (currentdt > ch) {
        return true;
    }
    else {
        return false;
    }
}

function CompareDates1(str1, str2) {
    var ch = Date.parse(str1);
    var currentdt = Date.parse(str2);
    if (currentdt >= ch) {
        return true;
    }
    else {
        return false;
    }
}

function DisplayError(lnk, msg) {
    var warningSpan = document.createElement("div");
    warningSpan.className = 'validationMsg';
    warningSpan.innerHTML = ''
    warningSpan.innerHTML = msg;
    $11(lnk).parentNode.insertBefore(warningSpan, $11(lnk).nextSibling);
    setFading(warningSpan, 130, 0, 2000, function () { this.main.document.body.removeChild(warningSpan); });
    setTimeout(function () { warningSpan.style.display = 'none'; }, 5000);
}

function setFading(o, b, e, d, f) {
    var t = setInterval(
        function () {
            b = stepFX(b, e, 2);
            setOpacity(o, b / 100);
            if (b == e) {
                if (t) { clearInterval(t); t = null; }
                if (typeof f == 'function') { f(); }
            }
        }, d / 50
    );
}

function setOpacity(e, o) {
    // for IE
    e.style.filter = 'alpha(opacity=' + o * 100 + ')';
    // for others
    e.style.opacity = o;
}

function stepFX(b, e, s) {
    return b > e ? b - s > e ? b - s : e : b < e ? b + s < e ? b + s : e : b;
}

function validateUser() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtOrganization').value == 0) {
        errStr += 'Oraganization name, ';
    }
    if ($11('txtOrganization').value != 0) {
        if ($11('ddlCompCode').value == 0) {
            errStr += 'Company Code, ';
        }
    }
    if ($11('ddlCompCode').value != 0) {
        if ($11('ddlDeptCodes').value == 0) {
            errStr += 'Department Code, ';
        }
        if ($11('ddlRgnCode').value == 0) {
            errStr += 'Region Code, ';
        }
    }
    if ($11('txtFirstName').value == 0) {
        errStr += 'FirstName, ';
    }
    if ($11('txtLastName').value == 0) {
        errStr += 'LastName, ';
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone, ';
    }
    if ($11('txtPhone').value > 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone in the format xxx-xxx-xxxx, ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone Number, ';
        }
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if ($11('txtEmail').value != 0) {
        if (!checkEmail('txtEmail')) {
            errStr += 'valid Email, ';
        }
    }
    if ($11('txtPassword').value == 0) {
        errStr += 'Password, ';
    }
    if ($11('txtPassword').value != 0) {
        if ($11('txtPassword').value.length < 6) {
            errStr += 'Password of minimum 6 characters, ';
        }
    }
    if ($11('txtConfirmPwd').value == 0) {
        errStr += 'Confirm Password, ';
    }
    if (($11('txtPassword').value != 0) && ($11('txtConfirmPwd').value != 0)) {
        if ($11('txtPassword').value != $11('txtConfirmPwd').value) {
            errStr += 'matching Passwords, ';
        }
    }
    if ($11('txtDesignation').value == 0) {
        errStr += 'Job Title, ';
    }
    if ($11('ddlCompCode').selectedIndex == 0) {
        errStr += 'Company Code, ';
    }

    if ($11('ddlDeptCodes').selectedIndex == 0) {
        errStr += 'Department Code, ';
    }
    if ($11('ddlRgnCode').selectedIndex == 0) {
        errStr += 'Region Code, ';
    }
    if ($11('txtEmpID').value == 0) {
        errStr += 'Employee Id, ';
    }
    if ($11('txtManager').value == 0) {
        errStr += 'Manager Email, ';
    }
    if ($11('txtManager').value != 0) {
        if (!checkEmail1('txtManager')) {
            errStr += 'valid Manager Email, ';
        }
    }
    if ($11('txtCities').value == 0) {
        errStr += 'City, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        window.scroll(0, 0);
        return false;
    }
}

function validateOrganization() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtOrganizationName').value == 0) {
        errStr += 'OrganizationName, ';
    }
    if ($11('txtOrgcode').value == 0) {
        errStr += 'Organization Code, ';
    }
    if ($11('txtCompCode').value != 0) {
        if ($11('txtCompCode').value.length > 8) {
            errStr += 'Company Code which is not more than 8 characters, ';
        }
        var str = $11('txtCompCode').value;
        if (str.substring(0, 3).toLowerCase() == "all") {
            errStr += 'Compcode which is not "ALL",';
        }
    }
    if ($11('txtAddr1').value == 0) {
        errStr += 'Address1, ';
    }
    //if ($11('ddlCountry').selectedIndex == 0) {
    //    errStr += 'Country, ';
    //}
    if ($11('ddlRgnCode').selectedIndex == 0) {
        errStr += 'State, ';
    }
    if ($11('txtCities').value == 0) {
        errStr += 'City, ';
    }
    if ($11('txtZipCode').value == 0) {
        errStr += 'ZipCode, ';
    }
    if ($11('txtZipCode').value.length > 8) {
        errStr += 'Valid ZipCode, ';
    }
    if ($11('ddlIndType').selectedIndex == 0) {
        errStr += 'Industry Type, ';
    }
    if ($11('txtAdminFName').value == 0) {
        errStr += 'Admin FirstName, ';
    }
    if ($11('txtAdminLName').value == 0) {
        errStr += 'Admin LastName, ';
    }
    if ($11('txtAdminEmail').value == 0) {
        errStr += 'Admin Email, ';
    }
    if ($11('txtAdminEmail').value != 0) {
        if (!checkEmail2('txtAdminEmail')) {
            errStr += 'valid AdminEmail, ';
        }
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone, ';
    }
    if ($11('txtPhone').value != 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone in the format xxx-xxx-xxxx, ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone Number, ';
        }
    }
    if ($11('txtPassword').value == 0) {
        errStr += 'Password, ';
    }
    if ($11('txtPassword').value != 0) {
        if ($11('txtPassword').value.length < 6) {
            errStr += 'Password of minimum 6 characters, ';
        }
    }
    if ($11('txtConfirmPwd').value == 0) {
        errStr += 'Confirm Password, ';
    }
    if (($11('txtPassword').value != 0) && ($11('txtConfirmPwd').value != 0)) {
        if ($11('txtPassword').value != $11('txtConfirmPwd').value) {
            errStr += 'matching Passwords, ';
        }
    }
    //if ($11('ddlCurrency').selectedIndex == 0) {
    //    errStr += 'Currency, ';
    //}
    //if ($11('ddlMeasure').selectedIndex == 0) {
    //    errStr += 'Measures, ';
    //}
    if ($11('txtJobTitle').value == 0) {
        errStr += 'JobTitle, ';
    }
    if ($11('txtEmpID').value == 0) {
        errStr += 'EmployeeID, ';
    }
    if ($11('ddlDept').selectedIndex == 0) {
        errStr += 'Department, ';
    }
    if ($11('ddlGroup').selectedIndex == 0) {
        errStr += 'Group, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        window.scroll(0, 0);
        return false;
    }
    else {
        if ($11('cbManager').checked) {
            if (!$11('cbAP').checked) {
                $11('dvError').innerHTML = 'You can not create a manager profile without first creating AP profile.';
                window.scroll(0, 0);
                return false;
            }
        }
    }
    showProgress();
}

function validateEditOrganization() {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtAddr1').value == 0) {
        $11('dvError').innerHTML = 'Please enter Address1.';
        $11('txtAddr1').focus();
        return false;
    }
    if ($11('ddlCountry').selectedIndex == 0) {
        $11('dvError').innerHTML = 'Please select Country.';
        $11('ddlCountry').focus();
        return false;
    }
    if ($11('ddlRgnCode').selectedIndex == 0) {
        $11('dvError').innerHTML = 'Please select State.';
        $11('ddlRgnCode').focus();
        return false;
    }
    if ($11('txtCities').value == 0) {
        $11('dvError').innerHTML = 'Please enter City.';
        $11('txtCities').focus();
        return false;
    }
    if ($11('txtZipCode').value == 0) {
        $11('dvError').innerHTML = 'Please enter ZipCode.';
        $11('txtZipCode').focus();
        return false;
    }
    if ($11('txtZipCode').value.length > 8) {
        $11('dvError').innerHTML = 'Please enter valid ZipCode.';
        $11('txtZipCode').focus();
        return false;
    }
    if ($11('ddlIndType').selectedIndex == 0) {
        $11('dvError').innerHTML = 'Please select Industry Type.';
        $11('ddlIndType').focus();
        return false;
    }
    if ($11('ddlMeasure').selectedIndex == 0) {
        $11('dvError').innerHTML = 'Please select Measures.';
        $11('ddlMeasure').focus();
        return false;
    }
    if ($11('ddlCurrency').selectedIndex == 0) {
        $11('dvError').innerHTML = 'Please select Currency.';
        $11('ddlCurrency').focus();
        return false;
    }
    if ($11('txtPhone').value == 0) {
        $11('dvError').innerHTML = 'Please enter phone.';
        $11('txtPhone').focus();
        return false;
    }
    if (!(validatePhoneNumber())) {
        $11('dvError').innerHTML = 'Please enter Phone in the format xxx-xxx-xxxx.';
        $11('txtPhone').focus();
        return false;
    }
    if (!(validatePhone())) {
        $11('dvError').innerHTML = 'Please enter valid Phone Number.';
        $11('txtPhone').focus();
        return false;
    }
    if ($11('txtOrgcode').value == 0) {
        $11('dvError').innerHTML = 'Please enter Organization Code.';
        $11('txtOrgcode').focus();
        return false;
    }
    showProgress();
}

function validateNewExpense(id, obj) {
    $11('dvError').innerHTML = '';
    $11('dvExpError').innerHTML = '';
    $11('dvError').style.color = "red";
    $11('dvExpError').style.color = "red";
    if (id == 1) {
        if (!validateRadioButtonList('rblExpType')) {
            $11('dvError').innerHTML = 'Please select expense type.';
            $11('rblExpType').focus();
            return false;
        }
    }
    if (id == 2) {
        if (obj == 'false') {
            selectedValue = '1';
        } else if (obj == 'true') {
            selectedValue = '2';
        }
    }
    if (selectedValue == '1') {
        if ($11('txtTripStartDate').value == 0) {
            $11('dvError').innerHTML = 'Please select trip start date.';
            $11('txtTripStartDate').focus();
            return false;
        }
        if (CompareDates($11('hdCurrDate').value, $11('txtTripStartDate').value)) {
            $11('dvError').innerHTML = 'Please select earlier date.';
            $11('txtTripStartDate').focus();
            return false;
        }
        if (CompareDates1($11('txtTripStartDate').value, $11('hdMaxDate').value)) {
            $11('dvError').innerHTML = 'Startdate should not exceed ' + $11('hdMaxDays').value + ' days prior to current date.';
            $11('txtTripStartDate').focus();
            return false;
        }
        if ($11('txtPurpose').value == 0) {
            $11('dvError').innerHTML = 'Please enter Purpose.';
            $11('txtPurpose').focus();
            return false;
        }
        if ($11('txtPurpose').value.length > 200) {
            $11('dvError').innerHTML = 'Purpose length can not exceed 200 chars.';
            $11('txtPurpose').focus();
            return false;
        }
        var ddl = $11('ddlExpType');
        if ($11('ddlExpType').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select ExpenseType.';
            $11('ddlExpType').focus();
            return false;
        }
        if (ddl.options[ddl.selectedIndex].text == 'JOB') {
            if ($11('ddlJobs').selectedIndex == 0) {
                $11('dvExpError1').innerHTML = 'Please select Jobe Code.';
                $11('ddlJobs').focus();
                return false;
            }
            if ($11('ddlPhases').selectedIndex == 0) {
                $11('dvExpError1').innerHTML = 'Please select Phase Code.';
                $11('ddlPhases').focus();
                return false;
            }
            if ($11('ddlCategories').selectedIndex == 0) {
                $11('dvExpError1').innerHTML = 'Please select Job Category.';
                $11('ddlCategories').focus();
                return false;
            }
        }
        if ($11('ddlExpenseItem').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select Account Name.';
            $11('ddlExpenseItem').focus();
            return false;
        }
        if ($11('txtExpDate').value == 0) {
            $11('dvExpError1').innerHTML = 'Please select ExpenseDate.';
            $11('txtExpDate').focus();
            return false;
        }
        if (CompareDates($11('hdCurrDate').value, $11('txtExpDate').value)) {
            $11('dvExpError1').innerHTML = 'Please select earlier date.';
            $11('txtExpDate').focus();
            return false;
        }
        if (!CompareDates1($11('txtTripStartDate').value, $11('txtExpDate').value)) {
            $11('dvExpError1').innerHTML = 'Expense date cannot be less than trip start date.';
            $11('txtExpDate').focus();
            return false;
        }
        if ($11('txtActAmount').value == 0) {
            $11('dvExpError1').innerHTML = 'Please enter Amount.';
            $11('txtActAmount').focus();
            return false;
        }
        if (!validateAmount4('txtActAmount')) {
            $11('dvExpError1').innerHTML = 'Please enter valid Amount.';
            $11('txtActAmount').focus();
            return false;
        }
        if ($11('ddlPayments').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select payment mode.';
            $11('ddlPayments').focus();
            return false;
        }
        if ($11('ddlCities').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select city visited.';
            $11('ddlCities').focus();
            return false;
        }
        if ($11('dvOtherCity').style.display == 'block') {
            if ($11('txtOtherCity').value == 0) {
                $11('dvExpError1').innerHTML = 'Please enter city.';
                $11('txtOtherCity').focus();
                return false;
            }
        }
        if ($11('txtComments').value.length > 500) {
            $11('dvExpError1').innerHTML = 'Description Length can not exceed 500 characters.';
            $11('txtComments').focus();
            return false;
        }
        $11('dvError').scrollIntoView();
    }
    else if (selectedValue == 2) {
        if (!validatePreApproval()) {
            return false;
        }
    }
}

function validatePreApproval() {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtTripStartDate').value == 0) {
        $11('dvError').innerHTML = 'Please select trip start date.';
        $11('txtTripStartDate').focus();
        return false;
    }
    if (Date.parse($11('txtTripStartDate').value) <= Date.parse($11('hdCurrDate').value)) {
        $11('dvError').innerHTML = 'Pre approval can be done for future date.';
        $11('txtTripStartDate').focus();
        return false;
    }
    if ($11('txtPurpose').value == 0) {
        $11('dvError').innerHTML = 'Please enter Purpose.';
        $11('txtPurpose').focus();
        return false;
    }
    if ($11('txtPurpose').value.length > 200) {
        $11('dvError').innerHTML = 'Purpose length can not exceed 200 chars.';
        $11('dvError').style.color = "red";
        $11('txtPurpose').focus();
        return false;
    }
    var ddl = $11('ddlExpType');
    if ($11('ddlExpType').selectedIndex == 0) {
        $11('dvExpError1').innerHTML = 'Please select ExpenseType.';
        $11('ddlExpType').focus();
        return false;
    }
    if (ddl.options[ddl.selectedIndex].text == 'JOB') {
        if ($11('ddlJobs').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select Jobe Code.';
            $11('ddlJobs').focus();
            return false;
        }
        if ($11('ddlPhases').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select Phase Code.';
            $11('ddlPhases').focus();
            return false;
        }
        if ($11('ddlCategories').selectedIndex == 0) {
            $11('dvExpError1').innerHTML = 'Please select Job Category.';
            $11('ddlCategories').focus();
            return false;
        }
    }
    if ($11('ddlExpenseItem').selectedIndex == 0) {
        $11('dvExpError1').innerHTML = 'Please select Account Name.';
        $11('ddlExpenseItem').focus();
        return false;
    }
    if ($11('txtExpDate').value == 0) {
        $11('dvExpError1').innerHTML = 'Please select ExpenseDate.';
        $11('txtExpDate').focus();
        return false;
    }
    if (!CompareDates1($11('txtTripStartDate').value, $11('txtExpDate').value)) {
        $11('dvExpError1').innerHTML = 'Expense Date must be greater than Trip start date.';
        $11('txtExpDate').focus();
        return false;
    }
    if ($11('txtPreAmount').value == 0) {
        $11('dvExpError1').innerHTML = 'Please enter PreAmount.';
        $11('txtPreAmount').focus();
        return false;
    }
    if (!validateAmount4('txtPreAmount')) {
        $11('dvExpError1').innerHTML = 'Please enter valid PreAmount.';
        $11('txtPreAmount').focus();
        return false;
    }
    if ($11('ddlPayments').selectedIndex == 0) {
        $11('dvExpError1').innerHTML = 'Please select payment mode.';
        $11('ddlPayments').focus();
        return false;
    }
    if ($11('ddlCities').selectedIndex == 0) {
        $11('dvExpError1').innerHTML = 'Please select city visited.';
        $11('ddlCities').focus();
        return false;
    }
    if ($11('dvOtherCity').style.display == 'block') {
        if ($11('txtOtherCity').value == 0) {
            $11('dvExpError1').innerHTML = 'Please enter city.';
            $11('txtOtherCity').focus();
            return false;
        }
    }
    if ($11('txtComments').value.length > 500) {
        $11('dvExpError1').innerHTML = 'Description length can not exceed 500 characters.';
        $11('txtComments').focus();
        return false;
    }
    $11('dvError').scrollIntoView();
    return true;
}

function validateAdminUser() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtFirstName').value == 0) {
        errStr += 'FirstName, ';
    }
    if ($11('txtLastName').value == 0) {
        errStr += 'LastName, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if ($11('txtEmail').value != 0) {
        if (!checkEmail('txtEmail')) {
            errStr += 'valid Email, ';
        }
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone, ';
    }
    if ($11('txtPhone').value != 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone in the format xxx-xxx-xxxx, ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone Number, ';
        }
    }
    if ($11('txtPassword').value == 0) {
        errStr += 'Password, ';
    }
    if ($11('txtPassword').value != 0) {
        if ($11('txtPassword').value.length < 6) {
            errStr += 'Password which is minimum 6 characters, ';
        }
    }
    if ($11('txtConfirmPwd').value == 0) {
        errStr += 'Confirm Password, ';
    }
    if (($11('txtPassword').value != 0) && ($11('txtConfirmPwd').value != 0)) {
        if ($11('txtPassword').value != $11('txtConfirmPwd').value) {
            errStr += 'matching Passwords, ';
        }
    }
    if ($11('txtDesignation').value == 0) {
        errStr += 'Job Title, ';
    }
    if ($11('txtEmpID').value == 0) {
        errStr += 'Employee Id, ';
    }
    if ($11('ddlCompCode').selectedIndex == 0) {
        errStr += 'Company Code, ';
    }
    if ($11('ddlDeptCodes').selectedIndex == 0) {
        errStr += 'Department Code, ';
    }
    if ($11('txtCities').value == 0) {
        errStr += 'City, ';
    }
    if ($11('ddlRgnCode').selectedIndex == 0) {
        errStr += 'Region Code, ';
    }
    if ($11('ddlGroups').selectedIndex == 0) {
        errStr += 'Group, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        window.scroll(0, 0);
        return false;
    }
}

function validateEditUserList() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtFirstName').value == 0) {
        errStr += 'FirstName, ';
    }
    if ($11('txtLastName').value == 0) {
        errStr += 'LastName, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if ($11('txtEmail').value != 0) {
        if (!checkEmail('txtEmail')) {
            errStr += 'valid Email, ';
        }
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone, ';
    }
    if ($11('txtPhone').value != 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone in the format xxx-xxx-xxxx., ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone Number, ';
        }
    }
    if ($11('txtDesignation').value == 0) {
        errStr += 'Job Title, ';
    }
    if ($11('txtCities').value == 0) {
        errStr += 'City, ';
    }
    if ($11('ddlDeptCodes').selectedIndex == 0) {
        errStr += 'Department Code, ';
    }
    if ($11('txtEmpID').value == 0) {
        errStr += 'Employee Id, ';
    }
    if ($11('ddlRgnCode').selectedIndex == 0) {
        errStr += 'Region Code, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        $11('dvError').scrollIntoView();
        return false;
    }
}

function validateLogin() {
    $11('dvError').innerHTML = '';
    if ($11('txtEmail').value == 0) {
        $11('dvError').innerHTML = 'Please enter your Email.';
        $11('txtEmail').focus();
        return false;
    }
    if (!checkEmail('txtEmail')) {
        $11('dvError').innerHTML = 'Please enter a valid Email.';
        $11('txtEmail').focus();
        return false;
    }
    if ($11('txtPassword').value == 0) {
        $11('dvError').innerHTML = 'Please enter your Password.';
        $11('txtPassword').focus();
        return false;
    }
    $11('btnSubmit').value = 'Signing in...';
    //$11('txtEmail').disabled = true;
    //$11('txtPassword').disabled = true;
}

function validateEmail() {
    $11('dvError1').innerHTML = '';
    if ($11('txtEmail1').value == 0) {
        $11('dvError1').innerHTML = 'Please enter your Email.';
        $11('txtEmail1').focus();
        return false;
    }
    if (!checkEmail3('txtEmail1')) {
        $11('dvError1').innerHTML = 'Please enter a valid Email.';
        $11('txtEmail1').focus();
        return false;
    }
}

function validateMyAccount() {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtFirstName').value == 0) {
        $11('dvError').innerHTML = 'Please enter firstname.';
        $11('txtFirstName').focus();
        return false;
    }
    if ($11('txtLastName').value == 0) {
        $11('dvError').innerHTML = 'Please enter lastname.';
        $11('txtLastName').focus();
        return false;
    }
    if ($11('txtPhone').value == 0) {
        $11('dvError').innerHTML = 'Please enter Phone.';
        $11('txtPhone').focus();
        return false;
    }
    if (!(validatePhoneNumber())) {
        $11('dvError').innerHTML = 'Please enter Phone in the format xxx-xxx-xxxx.';
        $11('txtPhone').focus();
        return false;
    }
    if (!(validatePhone())) {
        $11('dvError').innerHTML = 'Please enter valid Phone Number.';
        $11('txtPhone').focus();
        return false;
    }
    if ($11('txtDesignation').value == 0) {
        $11('dvError').innerHTML = 'Please enter Job Title.';
        $11('txtDesignation').focus();
        return false;
    }
    //if ($11('chkDgtSign').checked) {
    //    if ($11('txtsignText').value == 0) {
    //        $11('dvError').innerHTML = 'Please enter Signature text.';
    //        $11('txtsignText').focus();
    //        return false;
    //    }
    //}
}

function ValidateEditPassword() {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    if ($11('txtOldPassword').value == 0) {
        $11('dvError').innerHTML = 'Please enter old password.';
        $11('txtOldPassword').focus();
        return false;
    }
    if ($11('txtNewPassword').value == 0) {
        $11('dvError').innerHTML = 'Please enter new password.';
        $11('txtNewPassword').focus();
        return false;
    }
    if ($11('txtNewPassword').value.length < 6) {
        $11('dvError').innerHTML = 'Password should be minimum 6 characters.';
        $11('txtNewPassword').focus();
        return false;
    }
    if ($11('txtNewPassword').value == $11('txtOldPassword').value) {
        $11('dvError').innerHTML = 'Please enter different New Password.';
        $11('txtNewPassword').focus();
        return false;
    }
    if ($11('txtReenterPassword').value == 0) {
        $11('dvError').innerHTML = 'Please re-enter password.';
        $11('txtReenterPassword').focus();
        return false;
    }
    if ($11('txtNewPassword').value != $11('txtReenterPassword').value) {
        $11('dvError').innerHTML = 'Password mismatch.';
        $11('txtReenterPassword').focus();
        return false;
    }
}

function validateExpLineItem(id, obj) {
    var errStr = 'Please enter ';
    $11('dvExpError').innerHTML = '';
    $11('dvExpError').style.color = "red";
    if (id == '1') {
        if (!validateRadioButtonList('rblExpType')) {
            errStr += 'Expense Type, ';
        }
    }
    if (id == '2') {
        if (obj == 'false') {
            selectedValue = '1';
        } else if (obj == 'true') {
            selectedValue = '2';
        }
    }
    var ddl = $11('ddlType');
    if (ddl.options[ddl.selectedIndex].value == 'ER') {
    }
    if (id == 1) {
        var ddl = $11('ddlEditExpType');
        if ($11('ddlEditExpType').selectedIndex == 0) {
            errStr += 'ExpenseType, ';
        }
        if (ddl.options[ddl.selectedIndex].text == 'JOB') {
            if ($11('ddlEditJobs').selectedIndex == 0) {
                errStr += 'Jobe Code, ';
            }
            if ($11('ddlEditPhases').selectedIndex == 0) {
                errStr += 'Phase Code, ';
            }
            if ($11('ddlEditCategories').selectedIndex == 0) {
                errStr += 'Job Category, ';
            }
        }
        var ddl = $11('ddlAccountCodes');
        if ($11('ddlAccountCodes').selectedIndex == 0) {
            errStr += 'Account Name, ';
        }
        if ($11('ddlAccountCodes').selectedIndex != 0) {
            if ($11('hdnCodeValue2').value == 'Y') {
                if ($11('txtEditExpDate').value == 0) {
                    errStr += 'ExpenseDate, ';
                }
                if ($11('txtEditExpDate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditExpDate').value)) {
                        errStr += 'Earlier ExpenseDate, ';
                    }
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditExpDate').value)) {
                        errStr += 'Expense date which is not less than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdMaxDate').value)) {
                        errStr += 'ExpenseDate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                    }
                }
            }
            if ($11('hdnCodeValue3').value == 'Y') {
                if ($11('txtEditFromdate').value == 0) {
                    errStr += 'FromDate, ';
                }
                if ($11('txtEditFromdate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditFromdate').value)) {
                        errStr += 'Earlier FromDate, ';
                    }
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditFromdate').value)) {
                        errStr += 'From date which is not less than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditFromdate').value) < Date.parse($11('hdMaxDate').value)) {
                        errStr += 'Fromdate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                    }
                }
                if ($11('txtEditTodate').value == 0) {
                    errStr += 'ToDate, ';
                }
                if ($11('txtEditTodate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditTodate').value)) {
                        errStr += 'Earlier ToDate, ';
                    }
                    if (Date.parse($11('txtEditFromdate').value) > Date.parse($11('txtEditTodate').value)) {
                        errStr += 'Todate which is not less than FromDate, ';
                    }
                }
            }
            if ($11('hdnCodeValue4').value == 'Y') {
                if ($11('txtCityVisited').value == 0) {
                    errStr += 'City Visited, ';
                }
            }
            if ($11('hdnCodeValue5').value == 'Y') {
                if ($11('txtFromCity').value == 0) {
                    errStr += 'FromCity, ';
                }
                if ($11('dvEditToCity').style.display == 'block') {
                    if ($11('txtToCity').value == 0) {
                        errStr += 'ToCity, ';
                    }
                }
                var ddl1 = $11('ddlEditFromcity');
                var ddl2 = $11('ddlEditTocity');
                if ($11('dvEditFromcity').style.display == 'block' && $11('dvEditToCity').style.display == 'block') {
                    if ($11('txtFromCity').value == $11('txtToCity').value) {
                        errStr += 'FromCity which is not similar to ToCity, ';
                    }
                }
            }
            if ($11('hdnCodeValue1').value == 'Y') {
                if ($11('txtPrefVendor').value == 0) {
                    errStr += 'Vendor, ';
                }
            }
            if ($11('hdnCodeValue6').value == 'Y') {
                if ($11('txtEditTotTrip').value == 0) {
                    errStr += 'TotalTrip, ';
                }
                if ($11('txtEditTotTrip').value != 0) {
                    if (!validateAmount4('txtEditTotTrip')) {
                        errStr += 'valid TotalTrip, ';
                    }
                }
                if (parseFloat($11('txtEditLNorm').value) >= parseFloat($11('txtEditTotTrip').value)) {
                    errStr += 'Lessnorm which is less than TotalTrip, ';
                }
            }
            if ($11('hdnCodeValue6').value == '') {
                if ($11('txtEditActAmnt').value == 0) {
                    errStr += 'Amount, ';
                }
                if ($11('txtEditActAmnt').value != 0) {
                    if (!validateAmount4('txtEditActAmnt')) {
                        errStr += 'valid Amount, ';
                    }
                }
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'Payment Mode, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
            if ($11('hdnCodeValue6').value == '' && $11('hdnAttMandtry').value == 'Y') {
                if ($11('lblFileName').innerHTML == '' && $11('hdnDftCnt').value == '') {
                    if ($11('lblEditAtt').innerHTML == 0) {
                        if (errStr.length > 13) {
                            errStr = errStr.substring(0, errStr.length - 2);
                            errStr += ' and Attach receipts. ';
                        }
                        else {
                            errStr = 'Please Attach receipts. ';
                        }
                    }
                }
            }
        }
        else {
            if ($11('txtEditActAmnt').value == 0) {
                errStr += 'Amount, ';
            }
            if ($11('txtEditActAmnt').value != 0) {
                if (!validateAmount4('txtEditActAmnt')) {
                    errStr += 'valid Amount, ';
                }
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'Payment Mode, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
            if ($11('hdnCodeValue6').value == '' && $11('hdnAttMandtry').value == 'Y') {
                if ($11('lblFileName').innerHTML == '' && $11('hdnDftCnt').value == '') {
                    if ($11('lblEditAtt').innerHTML == 0) {
                        if (errStr.length > 13) {
                            errStr = errStr.substring(0, errStr.length - 2);
                            errStr += ' and Attach receipts. ';
                        }
                        else {
                            errStr = 'Please Attach receipts. ';
                        }
                    }
                }
            }
        }
        errStr = errStr.substring(0, errStr.length - 2);
        if (errStr.length > 13) {
            $11('dvExpError').innerHTML = errStr;
            $11('dvExpError').scrollIntoView();
            return false;
        }
        else if (parseFloat(hdnMaxApprLimit.value) < ((parseFloat(hdnTotalActAmnt.value) - parseFloat(hdnCurrExpAmnt.value)) + parseFloat($11('txtEditActAmnt').value))) {
            $11('dvExpError').innerHTML = 'Total expense amount cannot exceed maximum approval limit (' + hdnMaxApprLimit.value + ')';
            return false;
        }
        showProgress();
    }
    else if (id == 2) {
        if (!validateEditPreApproval()) {
            return false;
        }
    }
}

function validateEditPreApproval() {
    var errStr = 'Please enter ';
    $11('dvExpError').innerHTML = '';
    $11('dvExpError').style.color = "red";
    var ddl = $11('ddlEditExpType');
    if ($11('ddlEditExpType').selectedIndex == 0) {
        errStr += 'ExpenseType, ';
    }
    if (ddl.options[ddl.selectedIndex].text == 'JOB') {
        if ($11('ddlEditJobs').selectedIndex == 0) {
            errStr += 'Job Code, ';
        }
        if ($11('ddlEditPhases').selectedIndex == 0) {
            errStr += 'Phase Code, ';
        }
        if ($11('ddlEditCategories').selectedIndex == 0) {
            errStr += 'Job Category, ';
        }
    }
    var ddl = $11('ddlEditExpenseItem');
    if ($11('ddlEditExpenseItem').selectedIndex == 0) {
        errStr += 'ExpenseItem, ';
    }
    if ($11('ddlEditExpenseItem').selectedIndex != 0) {
        if ($11('hdnCodeValue2').value == 'Y') {
            if ($11('txtEditExpDate').value == 0) {
                errStr += 'ExpenseDate, ';
            }
            if ($11('txtEditExpDate').value != 0) {
                if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdCurrDate').value)) {
                    errStr += 'Future ExpenseDate, ';
                }
                if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditExpDate').value)) {
                    errStr += 'Expense date which is not less than TripStartDate, ';
                }
                if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdMaxDate').value)) {
                    errStr += 'ExpenseDate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                }
            }
        }
        if ($11('hdnCodeValue3').value == 'Y') {
            if ($11('txtEditFromdate').value == 0) {
                errStr += 'FromDate, ';
            }
            if ($11('txtEditFromdate').value != 0) {
                if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditFromdate').value)) {
                    errStr += 'From Date which is greater than TripStartDate, ';
                }
                if (Date.parse($11('txtEditFromdate').value) < Date.parse($11('hdCurrDate').value)) {
                    errStr += 'FromDate which is future or current date, ';
                }
            }
            if ($11('txtEditTodate').value == 0) {
                errStr += 'FromDate, ';
            }
            if ($11('txtEditTodate').value != 0) {
                if (Date.parse($11('txtEditFromdate').value) > Date.parse($11('txtEditTodate').value)) {
                    errStr += 'To date which is not less than FromDate, ';
                }
            }
        }
        if ($11('hdnCodeValue4').value == 'Y') {
            if ($11('txtCityVisited').value == 0) {
                errStr += 'City Visited, ';
            }
        }

        if ($11('hdnCodeValue5').value == 'Y') {
            if ($11('txtFromCity').value == 0) {
                errStr += 'FromCity, ';
            }
            if ($11('dvEditToCity').style.display == 'block') {
                if ($11('txtFromCity').value == 0) {
                    errStr += 'ToCity, ';
                }
            }
            if ($11('dvEditFromcity').style.display == 'block' && $11('dvEditToCity').style.display == 'block') {
                if ($11('txtFromCity').value == $11('txtToCity').value) {
                    errStr += 'FromCity which is not similar to ToCity, ';
                }
            }
        }
        if ($11('hdnCodeValue6').value == 'Y') {
            if ($11('txtEditTotTrip').value == 0) {
                errStr += 'TotalTrip, ';
            }
            if ($11('txtEditTotTrip').value != 0) {
                if (!validateAmount4('txtEditTotTrip')) {
                    errStr += 'valid TotalTrip, ';
                }
            }
            if (parseFloat($11('txtEditLNorm').value) >= parseFloat($11('txtEditTotTrip').value)) {
                errStr += 'Lessnorm which is less than TotalTrip, ';
            }
        }
        if ($11('hdnCodeValue6').value == '') {
            if ($11('txtEditPreAmnt').value == 0) {
                errStr += 'Pre-Amount, ';
            }
            if ($11('txtEditPreAmnt').value != 0) {
                if (!validateAmount4('txtEditPreAmnt')) {
                    errStr += 'valid Pre-Amount, ';
                }
            }
        }
        if ($11('ddlEditPaymentType').selectedIndex == 0) {
            errStr += 'PaymentMode, ';
        }
        if ($11('txtEditComments').value == 0) {
            errStr += 'Description, ';
        }
        if ($11('txtEditComments').value.length > 500) {
            errStr += 'Description Length not exceeding 500 characters, ';
        }
    }
    else {
        if ($11('txtEditPreAmnt').value == 0) {
            errStr += 'Pre-Amount, ';
        }
        if ($11('txtEditPreAmnt').value != 0) {
            if (!validateAmount4('txtEditPreAmnt')) {
                errStr += 'valid Pre-Amount, ';
            }
        }
        if ($11('ddlEditPaymentType').selectedIndex == 0) {
            errStr += 'PaymentMode, ';
        }
        if ($11('txtEditComments').value == 0) {
            errStr += 'Description, ';
        }
        if ($11('txtEditComments').value.length > 500) {
            errStr += 'Description Length not exceeding 500 characters, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvExpError').innerHTML = errStr;
        $11('dvExpError').scrollIntoView();
        return false;
    }
    else if (parseFloat(hdnMaxApprLimit.value) < ((parseFloat(hdnTotalPreAmnt.value) - parseFloat(hdnCurrExpAmnt.value)) + parseFloat($11('txtEditPreAmnt').value))) {
        $11('dvExpError').innerHTML = 'Total expense amount cannot exceed maximum approval limit (' + hdnMaxApprLimit.value + ')';
        return false;
    }
    else {
        return true;
    }
    showProgress();
}

function showProgress() {
    var updateProgress = $11("UpdateProgress1");
    if (updateProgress != null)
        updateProgress.style.display = "block";
    else
        showProgressAppr();
}

function hideProgress() {
    var updateProgress = $11("UpdateProgress1");
    updateProgress.style.display = "none";
}

function showProgressAppr() {
    var updateProgressAppr = $11("UpdateProgress_Appr");
    updateProgressAppr.style.display = "block";
}

function GetAttachments(reqid, seqid) {
    var url = 'Attachments_temp.ashx?reqid=' + reqid + '&seqid=' + seqid;
    GetInfo(url, 'GetAttachments');
}

function validateRadioButtonList(radioButtonListId) {
    var listItemArray = document.getElementsByName(radioButtonListId);
    var isItemChecked = false;
    for (var i = 0; i < listItemArray.length; i++) {
        var listItem = listItemArray[i];
        if (listItem.checked) {
            isItemChecked = true;
            selectedValue = listItem.value;
        }
    }
    if (isItemChecked == false) {
    }
    return true;
}

function ValidateLkpCode(cLabel, cDesc, cv1, cv2, cv3, cv4, cv5, md1, md2, md3, md4, md5) {
    var errStr = 'Please enter ';
    $11('dvErrEditLkpCode').innerHTML = '';
    $11('dvErrEditLkpCode').style.color = "Red";
    if ($11('txtEditCodeLabel').value == 0) {
        errStr += cLabel + ', ';
        $11('txtEditCodeLabel').focus();
    }
    if ($11('txtEditCodeDescr').value == 0) {
        errStr += cDesc + ', ';
        $11('txtEditCodeDescr').focus();
    }
    if (md1 == 'Y') {
        if ($11('txtEditCodeLabel1').value == '') {
            errStr += cv1 + ', ';
            $11('txtEditCodeLabel1').focus();
        }
    }
    if (md2 == 'Y') {
        if ($11('txtEditCodeLabel2').value == '') {
            errStr += cv2 + ', ';
            $11('txtEditCodeLabel2').focus();
        }
    }
    if (md3 == 'Y') {
        if ($11('txtEditCodeLabel3').value == '') {
            errStr += cv3 + ', ';
            $11('txtEditCodeLabel3').focus();
        }
    }
    if (md4 == 'Y') {
        if ($11('txtEditCodeLabel4').value == '') {
            errStr += cv4 + ', ';
            $11('txtEditCodeLabel4').focus();
        }
    }
    if (md5 == 'Y') {
        if ($11('txtEditCodeLabel5').value == '') {
            errStr += cv5 + ', ';
            $11('txtEditCodeLabel5').focus();
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrEditLkpCode').innerHTML = errStr;
        return false;
    }
}

function ValidateSyCode() {
    var errStr = 'Please enter ';
    $11('dvErrCreateCode').innerHTML = '';
    $11('dvErrCreateCode').style.color = "Red";
    if ($11('txtCCCodeID').value == 0) {
        errStr += "CodeID, ";
    }
    if ($11('txtCCDescription').value == 0) {
        errStr += "Description, ";
    }
    if (!validateRadioButtonList('rblOrgLevel')) {
        errStr += "Company level, ";
    }
    if ($11('txtCodeKeyLabel').value == 0) {
        errStr += "CodeKey Label, ";
    }
    if ($11('txtDescLabel').value == 0) {
        errStr += "Description Label, ";
    }
    if ($11('txtCV1Label').value == 0) {
        if ($11('txtCV2Label').value != 0) {
            errStr += "values for CodeValue1 before creating CodeValue2, ";
        }
        if ($11('txtCV3Label').value != 0) {
            errStr += "values for CodeValue1 before creating CodeValue3, ";
        }
        if ($11('txtCV4Label').value != 0) {
            errStr += "values for CodeValue1 before creating CodeValue4, ";
        }
        if ($11('txtCV5Label').value != 0) {
            errStr += "values for CodeValue1 before creating CodeValue5, ";
        }
    }
    if ($11('txtCV2Label').value == 0) {
        if ($11('txtCV3Label').value != 0) {
            errStr += "values for CodeValue2 before creating CodeValue3, ";
        }
        if ($11('txtCV4Label').value != 0) {
            errStr += "values for CodeValue2 before creating CodeValue4, ";
        }
        if ($11('txtCV5Label').value != 0) {
            errStr += "values for CodeValue2 before creating CodeValue5, ";
        }
    }
    if ($11('txtCV3Label').value == 0) {
        if ($11('txtCV4Label').value != 0) {
            errStr += "values for CodeValue3 before creating CodeValue4, ";
        }
        if ($11('txtCV5Label').value != 0) {
            errStr += "values for CodeValue3 before creating CodeValue5, ";
        }
    }
    if ($11('txtCV4Label').value == 0) {
        if ($11('txtCV5Label').value != 0) {
            errStr += "values for CodeValue4 before creating CodeValue5, ";
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrCreateCode').innerHTML = errStr;
        $11('dvErrCreateCode').scrollIntoView();
        return false;
    }
}

function ValidateCompCode() {
    var errStr = 'Please enter ';
    $11('dvErrMsg').innerHTML = '';
    $11('dvErrMsg').style.color = "red";
    if ($11('txtCompName').value == 0) {
        errStr += "Company Name, ";
    }
    else {
        if (!isNaN($11('txtCompName').value)) {
            errStr += 'valid Company Name, ';
        }
    }
    if ($11('txtAddr1').value == 0) {
        errStr += "Address1, ";
    }
    if ($11('txtCities').value == 0) {
        errStr += 'City, ';
    }
    else {
        if (!isNaN($11('txtCities').value)) {
            errStr += 'valid City, ';
        }
    }
    if ($11('ddlRgnCode').selectedIndex == 0) {
        errStr += 'State, ';
    }
    if ($11('ddlCountry').selectedIndex == 0) {
        errStr += 'Country, ';
    }
    if ($11('txtZipCode').value == 0) {
        errStr += "zipCode, ";
    }
    if ($11('txtZipCode').value.length > 8 || isNaN($11('txtZipCode').value)) {
        errStr += "Valid ZipCode, ";
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrMsg').innerHTML = errStr;
        $11('dvErrMsg').scrollIntoView();
        return false;
    }
}

function ValidatePrefVendor() {
    var errStr = 'Please enter ';
    $11('dvErrMsg').innerHTML = '';
    $11('dvErrMsg').style.color = "Red";
    //if ($11('txtCities').value == 0) {
    //    errStr += "Citiy/State, ";
    //}
    if ($11('txtVendName').value == 0) {
        errStr += "Vendor Name, ";
    }
    if ($11('txtVendZip').value != 0) {
        if (isNaN($11('txtVendZip').value)) {
            errStr += "valid ZipCode with only numerics, ";
        }
    }
    if ($11('txtExpiryDate').value != '' || $11('txtStartDate').value != '') {
        if ($11('txtExpiryDate').value == 0) {
            errStr += "ExpiryDate, ";
        }
        if ($11('txtStartDate').value == 0) {
            errStr += "StartDate, ";
        }
        if (Date.parse($11('hdCurrDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater current date, ";
        }
        if (Date.parse($11('txtStartDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater than StartDate, ";
        }
    }
    if ($11('chkSysOrders').checked) {
        var radioButtonlist = $11('rblEmail');
        var radio = radioButtonlist.getElementsByTagName("input");
        if (radio[0].checked) {
            if (!checkVendEmail()) {
                errStr += 'valid Email, ';
            }
        }
        else {
            if (isNaN($11('txtEmailFax').value) || $11('txtEmailFax').value == '') {
                errStr += 'valid Fax number with only numerics, ';
            }
            else if ($11('txtEmailFax').value.length != 10) {
                errStr += '10 digit Fax number, ';
            }
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrMsg').innerHTML = errStr;
        $11('dvErrMsg').scrollIntoView();
        return false;
    }
}

function ValidatePrefVendorNew() {
    var errStr = 'Please enter ';
    $11('dvErrMsg').innerHTML = '';
    $11('dvErrMsg').style.color = "Red";
    if ($11('txtVendName').value == 0) {
        errStr += "Vendor Name, ";
    }
    if ($11('txtVendZip').value != 0) {
        if (isNaN($11('txtVendZip').value)) {
            errStr += "valid ZipCode with only numerics, ";
        }
    }
    if ($11('txtExpiryDate').value != null || $11('txtStartDate').value != null) {
        if (Date.parse($11('hdCurrDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater current date, ";
        }
        if (Date.parse($11('txtStartDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater than StartDate, ";
        }
    }
    if ($11('chkSysOrders').checked) {
        if (!checkEmail('txtEmail')) {
            errStr += 'valid Email, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrMsg').innerHTML = errStr;
        $11('dvErrMsg').scrollIntoView();
        return false;
    }
}

function ValidatePrefVendorPO() {
    var errStr = 'Please enter ';
    $11('dvErrMsg').innerHTML = '';
    $11('dvErrMsg').style.color = "Red";
    if ($11('ddlVendExpItem').selectedIndex == 0) {
        errStr += "Account Name, ";
    }
    if ($11('txtVendCity').value == 0) {
        errStr += "Citiy/State, ";
    }
    if ($11('txtVendNo').value == 0) {
        errStr += "Vendor No, ";
    }
    if ($11('txtVendName').value == 0) {
        errStr += "Vendor Name, ";
    }
    if ($11('txtPhone').value == 0) {
        errStr += "Vendor Phone, ";
    }
    if ($11('txtVendAddr1').value == 0) {
        errStr += "Address1, ";
    }
    if ($11('txtVendZip').value == 0) {
        errStr += "ZipCode, ";
    }
    if ($11('txtExpiryDate').value != '' || $11('txtStartDate').value != '') {
        if ($11('txtExpiryDate').value == 0) {
            errStr += "ExpiryDate, ";
        }
        if ($11('txtStartDate').value == 0) {
            errStr += "StartDate, ";
        }
        if (Date.parse($11('hdCurrDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater current date, ";
        }
        if (Date.parse($11('txtStartDate').value) > Date.parse($11('txtExpiryDate').value)) {
            errStr += "ExpiryDate which is greater than StartDate, ";
        }
    }
    if ($11('chkSysOrders').checked) {
        var radioButtonlist = $11('rblEmail');
        var radio = radioButtonlist.getElementsByTagName("input");
        if (radio[0].checked) {
            if (!checkVendEmail()) {
                errStr += 'valid Email, ';
            }
        }
        else {
            if (isNaN($11('txtEmailFax').value) || $11('txtEmailFax').value == '') {
                errStr += 'valid Fax number with only numerics, ';
            }
            else if ($11('txtEmailFax').value.length != 10) {
                errStr += '10 digit Fax number, ';
            }
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrMsg').innerHTML = errStr;
        $11('dvErrMsg').scrollIntoView();
        return false;
    }
}

function ValidateDeptExpItem() {
    var errStr = 'Please enter ';
    $11('dvErrMsg').innerHTML = '';
    $11('dvErrMsg').style.color = "Red";
    if ($11('txtExpItem').value == 0) {
        errStr += "Account, ";
    }
    //if ($11('txtCodeKey').value == 0) {
    //    errStr += "CodeKey, ";
    //}
    if ($11('txtAccCode').value == 0) {
        errStr += "AccountCode, ";
    }
    if (isNaN($11('txtAccCode').value)) {
        errStr += "AccountCode with only numerics, ";
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErrMsg').innerHTML = errStr;
        $11('dvErrMsg').scrollIntoView();
        return false;
    }
}

function capitaliseFirstLetter(txtId) {
    var name = $11(txtId).value;

    /* make first letter capital */
    //$11(txtId).value = name.charAt(0).toUpperCase() + name.slice(1);

    /* make first letter of each word capital */
    $11(txtId).value = name.replace(/\b./g, function (m) { return m.toUpperCase(); });
}

function captalize(txtId) {
    var name = $11(txtId).value;
    var orgN = name.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    $11(txtId).value = orgN;
}

function check_View(id, selectedValue) {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "Red";
    if (validateOnBehalfOf()) {
        if (selectedValue == 0) {
            if ($11('txtTripStartDate').value == 0) {
                $11('dvError').innerHTML = 'Please enter Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtTripStartDate').value)) {
                $11('dvError').innerHTML = 'Please select earlier Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdMaxDate').value)) {
                $11('dvError').innerHTML = 'Please enter Tripstartdate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if ($11('txtPurpose').value == 0) {
                $11('dvError').innerHTML = 'Please enter Purpose.';
                $11('txtPurpose').focus();
                return false;
            }
            var grid = $11(id);
            if (grid != null) {
                var Inputs = grid.getElementsByTagName("span");
                for (i = 0; i < Inputs.length; i++) {
                    if (Inputs[i].id.indexOf('lblExpDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('hdCurrDate').value) < Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please select earlier Expense date.';
                                return false;
                            }
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Expense date cannot be less than Tripstartdate.';
                                return false;
                            }
                        }
                    }
                    if (Inputs[i].id.indexOf('lblFromDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('hdCurrDate').value) < Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please select earlier date.';
                                return false;
                            }
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'From date cannot be less than Tripstartdate.';
                                return false;
                            }
                        }
                    }
                    if (Inputs[i].id.indexOf('lblActAmnt') >= 0) {
                        if (Inputs[i].innerHTML == 0) {
                            if (!(/^[1-9]\d*(?:\.\d{0,2})?$/.test(Inputs[i].innerHTML))) {
                                $11('dvError').innerHTML = 'Please enter valid actual Amount.';
                                return false;
                            }
                        }
                    }
                }
            }
        }
        else if (selectedValue == 1) {
            if ($11('txtTripStartDate').value == 0) {
                $11('dvError').innerHTML = 'Please enter Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdCurrDate').value)) {
                $11('dvError').innerHTML = 'Please select future or current date.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if ($11('txtPurpose').value == 0) {
                $11('dvError').innerHTML = 'Please enter Purpose.';
                $11('txtPurpose').focus();
                return false;
            }
            var grid = $11(id);
            if (grid != null) {
                var Inputs = grid.getElementsByTagName("span");
                for (i = 0; i < Inputs.length; i++) {
                    if (Inputs[i].id.indexOf('lblExpDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please enter Expense date which is greater than or equal to Trip start date.';
                                return false;
                            }
                        }
                    }
                    if (Inputs[i].id.indexOf('FromDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please enter From date which is greater than or equal to Trip start date.';
                                return false;
                            }
                        }
                    }
                }
            }
        }
        if (parseFloat(hdnMaxApprLimit.value) < parseFloat(lblGrandTotalAmnt.value)) {
            $11('dvError').innerHTML = 'Total expense amount cannot exceed maimum approval limit (' + hdnMaxApprLimit.value + ').';
            return false;
        }
    }
    else
        return false;
}

function check_New(id, selectedValue) {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "Red";
    if (validateOnBehalfOf()) {
        if (selectedValue == 0) {
            if ($11('txtTripStartDate').value == 0) {
                $11('dvError').innerHTML = 'Please enter Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtTripStartDate').value)) {
                $11('dvError').innerHTML = 'Please select earlier Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdMaxDate').value)) {
                $11('dvError').innerHTML = 'Tripstartdate should not exceed ' + $11('hdMaxDays').value + ' days prior to current date.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if ($11('txtPurpose').value == 0) {
                $11('dvError').innerHTML = 'Please enter Purpose.';
                $11('txtPurpose').focus();
                return false;
            }
            var grid = $11(id);
            if (grid != null) {
                var Inputs = grid.getElementsByTagName("span");
                for (i = 0; i < Inputs.length; i++) {
                    if (Inputs[i].id.indexOf('lblExpDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('hdCurrDate').value) < Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please select earlier Expense date.';
                                return false;
                            }
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Expense date cannot be less than Tripstartdate.';
                                return false;
                            }
                        }
                    }
                    if (Inputs[i].id.indexOf('lblFromDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('hdCurrDate').value) < Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please select earlier date.';
                                return false;
                            }
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'From date which is less than Tripstartdate.';
                                return false;
                            }
                        }
                    }
                }
            }
            if (parseFloat(hdnMaxApprLimit.value) < parseFloat(hdnTotalActAmnt.value)) {
                $11('dvError').innerHTML = 'Total expense amount cannot exceed maimum approval limit (' + hdnMaxApprLimit.value + ').';
                return false;
            }
        }
        else if (selectedValue == 1) {
            if ($11('txtTripStartDate').value == 0) {
                $11('dvError').innerHTML = 'Please enter Tripstartdate.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdCurrDate').value)) {
                $11('dvError').innerHTML = 'Please select future or current date.';
                $11('txtTripStartDate').focus();
                return false;
            }
            if ($11('txtPurpose').value == 0) {
                $11('dvError').innerHTML = 'Please enter Purpose.';
                $11('txtPurpose').focus();
                return false;
            }
            var grid = $11(id);
            if (grid != null) {
                var Inputs = grid.getElementsByTagName("span");
                for (i = 0; i < Inputs.length; i++) {
                    if (Inputs[i].id.indexOf('lblExpDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please enter Expense date which is greater than or equal to Trip start date.';
                                return false;
                            }
                        }
                    }
                    if (Inputs[i].id.indexOf('FromDate') >= 0) {
                        if (Inputs[i].innerHTML != 0) {
                            if (Date.parse($11('txtTripStartDate').value) > Date.parse(Inputs[i].innerHTML)) {
                                $11('dvError').innerHTML = 'Please enter From date which is greater than or equal to Trip start date.';
                                return false;
                            }
                        }
                    }
                }
            }
            if (parseFloat(hdnMaxApprLimit.value) < parseFloat(hdnTotalPreAmnt.value)) {
                $11('dvError').innerHTML = 'Total expense amount cannot exceed maimum approval limit (' + hdnMaxApprLimit.value + ').';
                return false;
            }
        }
    }
    else
        return false;
}

function validateRadioButtonList1(radioButtonListId) {
    var listItemArray = document.getElementsByName(radioButtonListId);
    var isItemChecked = false;
    for (var i = 0; i < listItemArray.length; i++) {
        var listItem = listItemArray[i];
        if (listItem.checked) {
            isItemChecked = true;
            selectedValue = listItem.value;
        }
    }
    if (isItemChecked == false) {
        return false;
    }
    return true;
}

function rblSelectedValue(lnk) {
    var ddl = $11('ddlType');
    if (lnk == 'new') {
        if (ddl.options[ddl.selectedIndex].value == 'ER') {
            $11('dvEditPA').style.display = "none";
            $11('dvEditAmt').style.display = "block";
            $11('dvHeader').innerHTML = "Create New Expense";
            $11('btnAddExpense').setAttribute("onclick", "javascript:return check_New('gvExp','0');");
        }
        else if (ddl.options[ddl.selectedIndex].value == 'PA') {
            $11('dvEditPA').style.display = "block";
            $11('dvEditAmt').style.display = "none";
            $11('dvHeader').innerHTML = "Create Pre-Approval Expense";
            $11('btnAddExpense').setAttribute("onclick", "javascript:return check_New('gvExp','1');");
        }
        else if (ddl.options[ddl.selectedIndex].value == 'PO') {
            showProgress();
            window.location.href = "pogen.aspx";
        }
    }
    else {
        if (ddl.options[ddl.selectedIndex].value == 'ER') {
            showProgress();
            window.location.href = "newexpense.aspx?sel=1";
        }
        else if (ddl.options[ddl.selectedIndex].value == 'PA') {
            showProgress();
            window.location.href = "newexpense.aspx?sel=2";
        }
    }
}

function onchangeCity(lnk, dv, txt) {
    var ddl = $11(lnk);
    if (ddl.options[ddl.selectedIndex].text == 'Other') {
        $11(dv).style.display = 'block';
    }
    else {
        $11(dv).style.display = 'none';
        $11(txt).value = '';
    }
}

function gridcityvalidation(lnk) {
    var ddl = $11('ddlEditCity');
    if (ddl.options[ddl.selectedIndex].text == 'Other') {
        $11('dvEditOtherCity').style.display = 'block'
        $11('txtEditOtherCity').style.display = 'block';
    }
    else {
        $11('dvEditOtherCity').style.display = 'none'
        $11('txtEditOtherCity').value = '';
        $11('txtEditOtherCity').style.display = 'none';
    }
}

function CalReimbt1(tt, ln, rmt, amount1, amount2) {
    var amt;
    var tottrip = $11(tt).value;
    var lnorm = $11(ln).value;
    var remib = (tottrip - lnorm);
    $11(rmt).value = Math.round((remib) * 100) / 100;
    var ddl = $11('ddlCompCar');
    if (ddl.options[ddl.selectedIndex].text == $11('hdnCmpCar').value) {
        amt = $11('hdnCPM').value;
    }
    else {
        amt = $11('hdnPPM').value;
    }
    var totAmt = Math.round((remib * amt) * 100) / 100;
    $11(amount1).value = totAmt;
    $11(amount2).value = totAmt;
}

function ChangeCheckBoxState(id, checkState) {
    var cb = $11(id);
    if (cb != null)
        cb.checked = checkState;
}

function ChangeAllCheckBoxStates(chk) {
    var checkState = chk.checked;
    // Toggles through all of the checkboxes defined in the CheckBoxIDs array
    // and updates their value to the checkState input parameter
    if (CheckBoxIDs != null) {
        for (var i = 0; i < CheckBoxIDs.length; i++)
            ChangeCheckBoxState(CheckBoxIDs[i], checkState);
    }
}

function validateComents() {
    $11('dvErrorc').innerHTML = '';
    if ($11('txtComments').value == 0) {
        $11('dvErrorc').innerHTML = 'Please enter Comments.';
        $11('txtComments').focus();
        return false;
    }
}

function ValidationExpMaster() {
    $11('dvError').innerHTML = '';
    var selectedValue = 0;
    var listItemArray = document.getElementsByName('rblExpType');
    var isItemChecked = false;
    for (var i = 0; i < listItemArray.length; i++) {
        var listItem = listItemArray[i];
        if (listItem.checked) {
            isItemChecked = true;
            selectedValue = listItem.value;
        }
    }
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";

    if ($11('txtTripStartDate').value == 0) {
        errStr += 'TripstartDate, ';
    }
    if (selectedValue == '1') {
        if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtTripStartDate').value)) {
            errStr += 'earlier TripStartDate, ';
        }
        if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdMaxDate').value)) {
            errStr += ' Tripstartdate which should not exceed ' + $11('hdMaxDays').value + ' days prior to current date, ';
        }
    }
    else if (selectedValue == '2') {
        if (Date.parse($11('txtTripStartDate').value) < Date.parse($11('hdCurrDate').value)) {
            errStr += 'TripStartDate which is future or current date, ';
        }
    }
    if ($11('txtPurpose').value == 0) {
        errStr += 'Purpose. ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        return false;
    }
    else {
        return true;
    }
}

function ValidateBudget() {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtAccCode').value == 0) {
        errStr += 'AccountCode, ';
    }
    if ($11('txtBudgetAlloc').value == 0) {
        errStr += 'Budget Allocated, ';
    }
    if (!validateAmount4('txtBudgetAlloc')) {
        errStr += 'Numeric values for Budget Allocated, ';
    }
    if ($11('txtRemBudget').value == 0) {
        errStr += 'Remaining Budget, ';
    }
    if (!validateBudgetAmount('txtRemBudget')) {
        errStr += 'Numeric values for Remaining Budget, ';
    }
    if (!validateAmount4('txtFixdCost')) {
        errStr += 'Numeric values for Fixed Cost, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        return false;
    }
    else {
        return true;
    }
}

function CalReimbt() {
    if (validateAmount4('txtQuantity')) {
        var tottrip = $11('txtQuantity').value;
        var lnorm = $11('txtUnitPrice').value;
        var remib = (tottrip * lnorm);
        $11('txtPoAmount').value = Math.round((remib));
        if ($11('hdnIsPOEdit').value == 'true') {
            if ($11('hdnPORowTotAmnt').value > 0 && $11('txtRemain').value > 0) {
                var bal = parseFloat($11('txtRemain').value) - (parseFloat($11('txtPoAmount').value) + parseFloat($11('hdnPOOldAmount').value));
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else if ($11('hdnPORowTotAmnt').value > 0) {
                var bal = 0 - (parseFloat($11('txtPoAmount').value) + parseFloat($11('hdnPOOldAmount').value));
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else if ($11('txtRemain').value > 0) {
                var bal = parseFloat($11('txtRemain').value) - parseFloat($11('txtPoAmount').value);
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else {
                var bal = 0 - parseFloat($11('txtPoAmount').value);
                $11('txtBalAfterPO').value = Math.round(bal);
            }
        }
        else {
            if ($11('hdnPORowTotAmnt').value > 0 && $11('txtRemain').value > 0) {
                var bal = parseFloat($11('txtRemain').value) - (parseFloat($11('hdnPORowTotAmnt').value) + parseFloat($11('txtPoAmount').value));
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else if ($11('hdnPORowTotAmnt').value > 0) {
                var bal = 0 - (parseFloat($11('hdnPORowTotAmnt').value) + parseFloat($11('txtPoAmount').value));
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else if ($11('txtRemain').value > 0) {
                var bal = parseFloat($11('txtRemain').value) - parseFloat($11('txtPoAmount').value);
                $11('txtBalAfterPO').value = Math.round(bal);
            }
            else {
                var bal = 0 - parseFloat($11('txtPoAmount').value);
                $11('txtBalAfterPO').value = Math.round(bal);
            }
        }
    }
    else {
        $11('dvPOErrMsg').style.color = "Red";
        $11('dvPOErrMsg').innerHTML = "Please enter valid Numeric values for Quantity.";
        $11('txtQuantity').value = '';
    }
}

//validate PO header
function validateExpNewMaster() {
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    var ddl = $11('ddlType');
    var errStr = 'Please enter ';

    if ($11('txtPOTripStrtDate').value == 0) {
        errStr += 'startDate, ';
    }
    if ($11('txtPurpose').value == 0) {
        errStr += 'Purpose, ';
    }
    if (ddl.options[ddl.selectedIndex].value == 'ER') {
        if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtPOTripStrtDate').value)) {
            errStr += 'earlier StartDate, ';
        }
        if (Date.parse($11('txtPOTripStrtDate').value) < Date.parse($11('hdMaxDate').value)) {
            errStr += ' startdate which should not exceed ' + $11('hdMaxDays').value + ' days prior to current date, ';
        }
    }
    else if (ddl.options[ddl.selectedIndex].value == 'PA') {
        if (Date.parse($11('txtPOTripStrtDate').value) < Date.parse($11('hdCurrDate').value)) {
            errStr += 'StartDate which is future or current date, ';
        }
    }
    else if (ddl.options[ddl.selectedIndex].value == 'PO') {
        if (Date.parse($11('txtPOTripStrtDate').value) < Date.parse($11('hdCurrDate').value)) {
            errStr += 'StartDate which is future or current date, ';
        }
        if ($11('ddlBillTo').selectedIndex == 0) {
            errStr += 'Vendor, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        return false;
    }
    else {
        return true;
    }
}
//validate PO header

//validate PO header in view expense screen
function validateExpViewMaster() {
    var ddl = $11('ddlType');
    var errStr = 'Please enter ';
    $11('dvPoError').innerHTML = '';
    $11('dvPoError').style.color = "red";
    if (ddl.options[ddl.selectedIndex].value == 'PO') {
        if ($11('txtPOTripStrtDate').value == 0) {
            errStr += 'startDate, ';
        }
        if ($11('ddlPreVendor').selectedIndex == 0) {
            errStr += 'Vendor, ';
        }
        if ($11('txtPoPurpose').value == 0) {
            errStr += 'Purpose, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvPoError').innerHTML = errStr;
        return false;
    }
    else {
        return true;
    }
}
//validate PO header in view expense screen

//warn if an expense is already placed with same vendor and line amount
function validateSimilarVendForExpInit(vend, amnt) {
    var url = 'Invoice.ashx?func=19&vend=' + vend.replace("&", "`") + "&amt=" + amnt;
    validateSimilarVendForExpMed(url, '');
}

function validateSimilarVendForExpMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, validateSimilarVendForExpFinal, false);
    }
}

function validateSimilarVendForExpFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType.toLowerCase() == 'y') {
        $find('popSimilarVendAlert').show();
        return false;
    }
    else {
        return true;
        showProgress();
    }
}
//warn if an expense is already placed with same vendor and line amount

//Validate expense line item
function ValidateNew() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    var ddl = $11('ddlType');
    if (ddl.options[ddl.selectedIndex].value == 'ER') {
        var ddl = $11('ddlEditExpType');
        if ($11('ddlEditExpType').selectedIndex == 0) {
            errStr += 'Expense Type, ';
        }
        if (ddl.options[ddl.selectedIndex].text == 'JOB') {
            if ($11('ddlEditJobs').selectedIndex == 0) {
                errStr += 'Jobe Code, ';
            }
            if ($11('ddlEditPhases').selectedIndex == 0) {
                errStr += 'Phase Code, ';
            }
            if ($11('ddlEditCategories').selectedIndex == 0) {
                errStr += 'Job Category, ';
            }
        }
        var ddl = $11('ddlEditExpenseItem');
        if ($11('ddlAccountCodes').selectedIndex == 0) {
            errStr += 'Account Name, ';
        }
        if ($11('ddlAccountCodes').selectedIndex != 0) {
            if ($11('hdnCodeValue2').value == 'Y') {
                if ($11('txtEditExpDate').value == 0) {
                    errStr += 'Expense Date, ';
                }
                if ($11('txtEditExpDate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditExpDate').value)) {
                        errStr += 'Earlier Expens eDate, ';
                    }
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditExpDate').value)) {
                        errStr += 'Expense Date which is not less than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdMaxDate').value)) {
                        errStr += 'Expense Date not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                    }
                }
            }
            if ($11('hdnCodeValue3').value == 'Y') {
                if ($11('txtEditFromdate').value == 0) {
                    errStr += 'From Date, ';
                }
                if ($11('txtEditFromdate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditFromdate').value)) {
                        errStr += 'Earlier From Date, ';
                    }
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditFromdate').value)) {
                        errStr += 'From Date which is not less than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditFromdate').value) < Date.parse($11('hdMaxDate').value)) {
                        errStr += 'From Date not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                    }
                }
                if ($11('txtEditTodate').value == 0) {
                    errStr += 'To Date, ';
                }
                if ($11('txtEditTodate').value != 0) {
                    if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditTodate').value)) {
                        errStr += 'Earlier To Date, ';
                    }
                    if (Date.parse($11('txtEditFromdate').value) > Date.parse($11('txtEditTodate').value)) {
                        errStr += 'To Date which is not less than From Date, ';
                    }
                }
            }
            if ($11('hdnCodeValue4').value == 'Y') {
                if ($11('txtCityVisited').value == 0) {
                    errStr += 'City Visited, ';
                }
            }
            if ($11('hdnCodeValue5').value == 'Y') {
                if ($11('txtFromCity').value == 0) {
                    errStr += 'From City, ';
                }
                if ($11('dvEditToCity').style.display == 'block') {
                    if ($11('txtToCity').value == 0) {
                        errStr += 'To City, ';
                    }
                }
                var ddl1 = $11('ddlEditFromcity');
                var ddl2 = $11('ddlEditTocity');
                if ($11('dvEditFromcity').style.display == 'block' && $11('dvEditToCity').style.display == 'block') {

                    if ($11('txtFromCity').value == $11('txtToCity').value) {
                        errStr += 'From City which is not similar to To City, ';
                    }
                }
            }
            if ($11('hdnCodeValue1').value == 'Y') {
                if ($11('txtPrefVendor').value == 0) {
                    errStr += 'Vendor, ';
                }
            }
            if ($11('hdnCodeValue6').value == 'Y') {
                if ($11('txtEditTotTrip').value == 0) {
                    errStr += 'Total Trip, ';
                }
                if ($11('txtEditTotTrip').value != 0) {
                    if (!validateAmount4('txtEditTotTrip')) {
                        errStr += 'valid Total Trip, ';
                    }
                }
                if (parseFloat($11('txtEditLNorm').value) >= parseFloat($11('txtEditTotTrip').value)) {
                    errStr += 'LessNorm which is less than Total Trip, ';
                }
            }
            if ($11('hdnCodeValue6').value == '') {
                if ($11('txtEditActAmnt').value == 0) {
                    errStr += 'Amount, ';
                }
                if ($11('txtEditActAmnt').value != 0) {
                    if (!validateAmount4('txtEditActAmnt')) {
                        errStr += 'valid Amount, ';
                    }
                }
            }
            if (parseFloat($11('txtEditSalesTax').value == '' ? 0 : $11('txtEditSalesTax').value) > parseFloat($11('txtEditActAmnt').value == '' ? 0 : $11('txtEditActAmnt').value)) {
                errStr += 'Sales Tax not exceeding Total Amount, ';
            }
            if (parseFloat($11('txtEditFoodTax').value == '' ? 0 : $11('txtEditFoodTax').value) > parseFloat($11('txtEditActAmnt').value == '' ? 0 : $11('txtEditActAmnt').value)) {
                errStr += 'Food Tax not exceeding Total Amount, ';
            }

            var fTax = $11('txtEditFoodTax').value;
            var lAmnt = $11('txtEditActAmnt').value;
            var fTaxPercnt = (parseFloat(fTax) / parseFloat(lAmnt)) * 100;
            if (parseFloat(fTaxPercnt) > parseFloat($11('hdnFoodTax').value)) {
                errStr += "Food tax not more than " + $11('hdnFoodTax').value + "% of line amount, ";
            }

            if (parseFloat($11('txtEditFoodTax').value == '' ? 0 : $11('txtEditFoodTax').value) + parseFloat($11('txtEditSalesTax').value == '' ? 0 : $11('txtEditSalesTax').value) >= parseFloat($11('txtEditActAmnt').value == '' ? 0 : $11('txtEditActAmnt').value)) {
                errStr += 'Total Tax less than Expense Amount, ';
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'Payment Mode, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
            if ($11('hdnCodeValue6').value == '' && $11('hdnAttMandtry').value == 'Y') {
                if ($11('lblFileName').innerHTML == '' && $11('hdnDftCnt').value == '') {
                    if ($11('lblEditAtt').innerHTML == 0) {
                        if (errStr.length > 13) {
                            errStr = errStr.substring(0, errStr.length - 2);
                            errStr += ' and Attach receipts. ';
                        }
                        else {
                            errStr = 'Please Attach receipts. ';
                        }
                    }
                }
            }
        }
        else {
            if ($11('txtEditActAmnt').value == 0) {
                errStr += 'Amount, ';
            }
            if ($11('txtEditActAmnt').value != 0) {
                if (!validateAmount4('txtEditActAmnt')) {
                    errStr += 'valid Amount, ';
                }
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'Payment Mode, ';
            }
            if (parseFloat($11('txtEditSalesTax').value) > parseFloat($11('txtEditActAmnt').value)) {
                errStr += 'Sales Tax not exceeding Total Amount, ';
            }
            if (parseFloat($11('txtEditFoodTax').value) > parseFloat($11('txtEditActAmnt').value)) {
                errStr += 'Food Tax not exceeding Total Amount, ';
            }
            var fTax = $11('txtEditFoodTax').value;
            var lAmnt = $11('txtEditActAmnt').value;
            var fTaxPercnt = (parseFloat(fTax) / parseFloat(lAmnt)) * 100;
            if (parseFloat(fTaxPercnt) > parseFloat($11('hdnFoodTax').value)) {
                errStr += "Food tax not more than " + $11('hdnFoodTax').value + "% of line amount.";
            }

            if (parseFloat($11('txtEditFoodTax').value) + parseFloat($11('txtEditSalesTax').value) >= parseFloat($11('txtEditActAmnt').value)) {
                errStr += 'Total Tax less than Expense Amount, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
            if ($11('hdnCodeValue6').value == '' && $11('hdnAttMandtry').value == 'Y') {
                if ($11('lblFileName').innerHTML == '' && $11('hdnDftCnt').value == '') {
                    if ($11('lblEditAtt').innerHTML == 0) {
                        if (errStr.length > 13) {
                            errStr = errStr.substring(0, errStr.length - 2);
                            errStr += ' and Attach receipts. ';
                        }
                        else {
                            errStr = 'Please Attach receipts. ';
                        }
                    }
                }
            }
        }
        errStr = errStr.substring(0, errStr.length - 2);
        if (errStr.length > 13) {
            $11('dvExpError').innerHTML = errStr;
            $11('dvExpError').scrollIntoView();
            return false;
        }
        else if (parseFloat(hdnMaxApprLimit.value) < ((parseFloat(hdnTotalActAmnt.value) - parseFloat(hdnCurrExpAmnt.value)) + parseFloat($11('txtEditActAmnt').value))) {
            $11('dvExpError').innerHTML = 'Total expense amount cannot exceed maximum approval limit (' + hdnMaxApprLimit.value + ')';
            return false;
        }
        showProgress();
    }
    else if (ddl.options[ddl.selectedIndex].value == 'PA') {
        var ddl = $11('ddlEditExpType');
        if ($11('ddlEditExpType').selectedIndex == 0) {
            errStr += 'ExpenseType, ';
        }
        if (ddl.options[ddl.selectedIndex].text == 'JOB') {
            if ($11('ddlEditJobs').selectedIndex == 0) {
                errStr += 'Job Code, ';
            }
            if ($11('ddlEditPhases').selectedIndex == 0) {
                errStr += 'Phase Code, ';
            }
            if ($11('ddlEditCategories').selectedIndex == 0) {
                errStr += 'Job Category, ';
            }
        }
        //var ddl = $11('ddlEditExpenseItem');
        //if ($11('ddlEditExpenseItem').selectedIndex == 0) {
        //    errStr += 'ExpenseItem, ';
        //}
        if ($11('ddlAccountCodes').selectedIndex != 0) {
            if ($11('hdnCodeValue2').value == 'Y') {
                if ($11('txtEditExpDate').value == 0) {
                    errStr += 'ExpenseDate, ';
                }
                if ($11('txtEditExpDate').value != 0) {
                    if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdCurrDate').value)) {
                        errStr += 'Future ExpenseDate, ';
                    }
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditExpDate').value)) {
                        errStr += 'Expense date which is not less than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdMaxDate').value)) {
                        errStr += 'ExpenseDate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                    }
                }
            }
            if ($11('hdnCodeValue3').value == 'Y') {
                if ($11('txtEditFromdate').value == 0) {
                    errStr += 'FromDate, ';
                }
                if ($11('txtEditFromdate').value != 0) {
                    if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditFromdate').value)) {
                        errStr += 'From Date which is greater than TripStartDate, ';
                    }
                    if (Date.parse($11('txtEditFromdate').value) < Date.parse($11('hdCurrDate').value)) {
                        errStr += 'FromDate which is future or current date, ';
                    }
                }
                if ($11('txtEditTodate').value == 0) {
                    errStr += 'FromDate, ';
                }
                if ($11('txtEditTodate').value != 0) {
                    if (Date.parse($11('txtEditFromdate').value) > Date.parse($11('txtEditTodate').value)) {
                        errStr += 'To date which is not less than FromDate, ';
                    }
                }
            }
            if ($11('hdnCodeValue4').value == 'Y') {
                if ($11('txtCityVisited').value == 0) {
                    errStr += 'City Visited, ';
                }
            }
            if ($11('hdnCodeValue5').value == 'Y') {
                if ($11('txtFromCity').value == 0) {
                    errStr += 'FromCity, ';
                }
                if ($11('dvEditToCity').style.display == 'block') {
                    if ($11('txtToCity').selectedIndex == 0) {
                        errStr += 'ToCity, ';
                    }
                }
                var ddl1 = $11('ddlEditFromcity');
                var ddl2 = $11('ddlEditTocity');
                if ($11('dvEditFromcity').style.display == 'block' && $11('dvEditToCity').style.display == 'block') {

                    if ($11('txtFromCity').value == $11('txtToCity').value) {
                        errStr += 'FromCity which is not similar to ToCity, ';
                    }
                }
            }
            if ($11('hdnCodeValue6').value == 'Y') {
                if ($11('txtEditTotTrip').value == 0) {
                    errStr += 'TotalTrip, ';
                }
                if ($11('txtEditTotTrip').value != 0) {
                    if (!validateAmount4('txtEditTotTrip')) {
                        errStr += 'valid TotalTrip, ';
                    }
                }
                if (parseFloat($11('txtEditLNorm').value) >= parseFloat($11('txtEditTotTrip').value)) {
                    errStr += 'Lessnorm which is less than TotalTrip, ';
                }
            }
            if ($11('hdnCodeValue6').value == '') {
                if ($11('txtEditPreAmnt').value == 0) {
                    errStr += 'Pre-Amount, ';
                }
                if ($11('txtEditPreAmnt').value != 0) {
                    if (!validateAmount4('txtEditPreAmnt')) {
                        errStr += 'valid Pre-Amount, ';
                    }
                }
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'PaymentMode, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
        }
        else {
            if ($11('txtEditPreAmnt').value == 0) {
                errStr += 'Pre-Amount, ';
            }
            if ($11('txtEditPreAmnt').value != 0) {
                if (!validateAmount4('txtEditPreAmnt')) {
                    errStr += 'valid Pre-Amount, ';
                }
            }
            if ($11('ddlEditPaymentType').selectedIndex == 0) {
                errStr += 'PaymentMode, ';
            }
            if ($11('txtEditComments').value == 0) {
                errStr += 'Description, ';
            }
            if ($11('txtEditComments').value.length > 500) {
                errStr += 'Description Length not exceeding 500 characters, ';
            }
        }
        errStr = errStr.substring(0, errStr.length - 2);
        if (errStr.length > 13) {
            $11('dvExpError').innerHTML = errStr;
            $11('dvExpError').scrollIntoView();
            return false;
        }
        else if (parseFloat(hdnMaxApprLimit.value) < ((parseFloat(hdnTotalPreAmnt.value) - parseFloat(hdnCurrExpAmnt.value)) + parseFloat($11('txtEditPreAmnt').value))) {
            $11('dvExpError').innerHTML = 'Total expense amount cannot exceed maximum approval limit (' + hdnMaxApprLimit.value + ')';
            return false;
        }
        else {
            return true;
        }
        showProgress();
    }
}
//Validate expense line item

function ValidateNewPO() {
    var errStr = 'Please enter ';
    $11('dvPOErrMsg').innerHTML = '';
    $11('dvPOErrMsg').style.color = "red";
    if ($11('txtReqDelDate').value != 0) {
        if (Date.parse($11('txtReqDelDate').value) < Date.parse($11('txtPOTripStrtDate').value)) {
            errStr += 'Req. Del.Date which is not prior to Start Date, ';
        }
        if (Date.parse($11('txtReqDelDate').value) < Date.parse($11('hdCurrDate').value)) {
            errStr += 'Req. Del.Date which is not prior to current date, ';
        }
    }
    if ($11('ddlExpItem').selectedIndex == 0) {
        errStr += 'Account Name, ';
    }
    if ($11('txtAccCode').value == 0) {
        errStr += 'Account Code, ';
    }
    if ($11('ddlItemCode').selectedIndex == 0) {
        errStr += 'Item Code, ';
    }
    if ($11('txtQuantity').value == 0) {
        errStr += 'Quantity, ';
    }
    if ($11('txtPkgUnit').value == 0) {
        errStr += 'Package/Unit, ';
    }
    if ($11('txtUnitPrice').value == 0) {
        errStr += 'Unit Price, ';
    }
    if ($11('txtDescr').value == 0) {
        errStr += 'Description, ';
    }
    if ($11('txtUnitPrice').value != 0) {
        if (parseFloat($11('txtUnitPrice').value) < 0) {
            errStr += 'valid Numeric values for UnitPrice, ';
        }
    }
    if ($11('txtQuantity').value != 0) {
        if (parseFloat($11('txtQuantity').value) < 0) {
            errStr += 'valid Numeric values for Quantity, ';
        }
    }
    if ($11('txtShipCost').value != 0) {
        if (parseFloat($11('txtShipCost').value) < 0) {
            errStr += 'valid Numeric values for shipingCost, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvPOErrMsg').innerHTML = errStr;
        $11('dvPOErrMsg').scrollIntoView();
        return false;
    }
    else {
        return true;
    }
    showProgress();
}

//Functions related to Invoice Validations
function ValidateInvDetails(currDate) {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtInvAmount').value == 0 || $11('txtInvAmount').value == '0' || $11('txtInvAmount').value == '') {
        errStr += 'Amount, ';
    }
    else if (!validateAmount4('txtInvAmount')) {
        errStr += 'valid Amount, ';
    }
    if ($11('txtInvNumber').value == 0) {
        errStr += 'Invoice Number, ';
    }
    if ($11('txtInvDate').value == 0) {
        errStr += 'Invoice Date, ';
    }
    if (Date.parse($11('txtInvDate').value) > Date.parse(currDate)) {
        errStr += 'Invoice Date which is prior to current date, ';
    }
    if ($11('txtInvDueDate').value == 0) {
        errStr += 'Invoice Due Date, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        return false;
    }
    else {
        var ddl = $11('ddlInvPONO');
        if (ddl.options.length == 0) {
            $11('dvMsg').innerHTML = 'Please select a Vendor which have Purchase Orders.';
            return false;
        }
    }
    showProgress();
}
//Functions related to Invoice Validations

function ValidateCSNewExpense() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";
    var ddl = $11('ddlEditExpType');
    if ($11('ddlEditExpType').selectedIndex == 0) {
        errStr += 'ExpenseType, ';
    }
    if (ddl.options[ddl.selectedIndex].text == 'JOB') {
        if ($11('ddlEditJobs').selectedIndex == 0) {
            errStr += 'Jobe Code, ';
        }
        if ($11('ddlEditPhases').selectedIndex == 0) {
            errStr += 'Phase Code, ';
        }
        if ($11('ddlEditCategories').selectedIndex == 0) {
            errStr += 'Job Category, ';
        }
    }
    var ddl = $11('ddlEditExpenseItem');
    if ($11('ddlEditExpenseItem').selectedIndex == 0) {
        errStr += 'ExpenseItem, ';
    }
    if ($11('ddlEditExpenseItem').selectedIndex != 0) {
        if ($11('hdnCodeValue2').value == 'Y') {
            if ($11('txtEditExpDate').value == 0) {
                errStr += 'ExpenseDate, ';
            }
            if ($11('txtEditExpDate').value != 0) {
                if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditExpDate').value)) {
                    errStr += 'Earlier ExpenseDate, ';
                }
                if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditExpDate').value)) {
                    errStr += 'Expense date which is not less than TripStartDate, ';
                }
                if (Date.parse($11('txtEditExpDate').value) < Date.parse($11('hdMaxDate').value)) {
                    errStr += 'ExpenseDate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                }
            }
        }
        if ($11('hdnCodeValue3').value == 'Y') {
            if ($11('txtEditFromdate').value == 0) {
                errStr += 'FromDate, ';
            }
            if ($11('txtEditFromdate').value != 0) {
                if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditFromdate').value)) {
                    errStr += 'Earlier FromDate, ';
                }
                if (Date.parse($11('txtTripStartDate').value) > Date.parse($11('txtEditFromdate').value)) {
                    errStr += 'From date which is not less than TripStartDate, ';
                }
                if (Date.parse($11('txtEditFromdate').value) < Date.parse($11('hdMaxDate').value)) {
                    errStr += 'Fromdate not exceeding ' + $11('hdMaxDays').value + ' days prior to current date and please check TripStartDate.';
                }
            }
            if ($11('txtEditTodate').value == 0) {
                errStr += 'ToDate, ';
            }
            if ($11('txtEditTodate').value != 0) {
                if (Date.parse($11('hdCurrDate').value) < Date.parse($11('txtEditTodate').value)) {
                    errStr += 'Earlier ToDate, ';
                }
                if (Date.parse($11('txtEditFromdate').value) > Date.parse($11('txtEditTodate').value)) {
                    errStr += 'Todate which is not less than FromDate, ';
                }
            }
        }

        if ($11('hdnCodeValue4').value == 'Y') {
            if ($11('txtCityVisited').value == 0) {
                errStr += 'City Visited, ';
            }
        }
        if ($11('hdnCodeValue5').value == 'Y') {
            if ($11('txtFromCity').value == 0) {
                errStr += 'FromCity, ';
            }
            if ($11('dvEditToCity').style.visibility = 'visible') {
                if ($11('txtToCity').selectedIndex == 0) {
                    errStr += 'ToCity, ';
                }
            }
            var ddl1 = $11('ddlEditFromcity');
            var ddl2 = $11('ddlEditTocity');
            if ($11('dvEditFromcity').style.display == 'block' && $11('dvEditToCity').style.display == 'block') {
                if ($11('txtFromCity').value == $11('txtToCity').value) {
                    errStr += 'FromCity which is not similar to ToCity, ';
                }
            }
        }
        if ($11('hdnCodeValue6').value == 'Y') {
            if ($11('txtEditTotTrip').value == 0) {
                errStr += 'TotalTrip, ';
            }
            if ($11('txtEditTotTrip').value != 0) {
                if (!validateAmount4('txtEditTotTrip')) {
                    errStr += 'valid TotalTrip, ';
                }
            }
            if (parseFloat($11('txtEditLNorm').value) >= parseFloat($11('txtEditTotTrip').value)) {
                errStr += 'Lessnorm which is less than TotalTrip, ';
            }

        }
        if ($11('hdnCodeValue6').value == '') {
            if ($11('txtEditActAmnt').value == 0) {
                errStr += 'Amount, ';
            }
            if ($11('txtEditActAmnt').value != 0) {
                if (!validateAmount4('txtEditActAmnt')) {
                    errStr += 'valid Amount, ';
                }
            }
        }
        if ($11('ddlEditPaymentType').selectedIndex == 0) {
            errStr += 'Payment Mode, ';
        }
        if ($11('txtEditComments').value == 0) {
            errStr += 'Description, ';
        }
        if ($11('txtEditComments').value.length > 500) {
            errStr += 'Description Length not exceeding 500 characters, ';
        }
    }
    else {
        if ($11('txtEditActAmnt').value == 0) {
            errStr += 'Amount, ';
        }
        if ($11('txtEditActAmnt').value != 0) {
            if (!validateAmount4('txtEditActAmnt')) {
                errStr += 'valid Amount, ';
            }
        }
        if ($11('ddlEditPaymentType').selectedIndex == 0) {
            errStr += 'Payment Mode, ';
        }
        if ($11('txtEditComments').value == 0) {
            errStr += 'Description, ';
        }
        if ($11('txtEditComments').value.length > 500) {
            errStr += 'Description Length not exceeding 500 characters, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        $11('dvError').scrollIntoView();
        return false;
    }
    showProgress();
}

function validatedetails() {
    var errStr = 'Please enter ';
    $11('dvReimError').innerHTML = '';
    $11('dvReimError').style.color = "red";
    var type = $11('ddlPayMode').value;
    if ($11('txAmount').value == 0) {
        errStr += 'Amount, ';
    }
    if ($11('txtDesc').value == 0) {
        errStr += 'Description, ';
    }
    if (type == 'Cheque') {
        if ($11('txtchqNO').value == 0) {
            errStr += 'Cheque No, ';
        }
        if ($11('txtChqDate').value == 0) {
            errStr += 'ChequeDate, ';
        }
        if ($11('txtBank').value == 0) {
            errStr += 'Bank, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvReimError').innerHTML = errStr;
        window.scroll(0, 0);
        return false;
    }
}

///Validate ItemCodes
function validateItemCodes(descr, notes) {
    var errStr = 'Please enter ';
    $11('dvMainMsg').innerHTML = '';
    $11('dvMainMsg').style.color = "red";
    if ($11(descr).value == '') {
        errStr += 'Description, ';
    }
    if ($11(descr).value.length > 200) {
        errStr += 'Description not exceeding 200 chars, ';
    }
    if ($11(notes).value.length > 500) {
        errStr += 'Notes not exceeding 500 chars, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMainMsg').innerHTML = errStr;
        setTimeout('clearData()', 5000);
        return false;
    }
}
///Validate ItemCodes

///Validate Edited PO from Approvals
function ValidateApprovalsEditPO(tripstartDate, expitem, desc, dvcomnts, comments, qty, untPrice, shipCst, pckgUnt, error) {
    var errStr = 'Please enter ';
    $11(error).innerHTML = '';
    $11(error).style.color = "red";
    if ($11(dvcomnts).style.display == 'block') {
        if ($11(comments) == 0) {
            errStr += 'comments, ';
        }
    }
    if ($11(expitem).selectedIndex == 0) {
        errStr += 'Account Name, ';
    }
    if ($11(qty).value == 0) {
        errStr += 'Quantity, ';
    }
    if ($11(pckgUnt).value == 0) {
        errStr += 'Package/Unit, ';
    }
    if ($11(untPrice).value == 0) {
        errStr += 'Unit Price, ';
    }
    if ($11(desc).value == 0) {
        errStr += 'Description, ';
    }
    if ($11(untPrice).value != 0) {
        if (parseFloat($11(untPrice).value) < 0) {
            errStr += 'valid Numeric values for UnitPrice, ';
        }
    }
    if ($11(qty).value != 0) {
        if (parseFloat($11(qty).value) < 0) {
            errStr += 'valid Numeric values for Quantity, ';
        }
    }
    if ($11(shipCst).value != 0) {
        if (parseFloat($11(shipCst).value) < 0) {
            errStr += 'valid Numeric values for shipingCost, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11(error).innerHTML = errStr;
        $11(error).scrollIntoView();
        return false;
    }
    else {
        return true;
    }
    showProgress();
}
///Validate Edited PO from Approvals

///Validate Parked PO
function validateParkPO(num, cmnts, error, currDate) {
    var errStr = 'Please enter ';
    $11(error).innerHTML = '';
    $11(error).style.color = "red";
    if ($11(num).value == 0) {
        errStr += 'Park Date, ';
    }
    if (Date.parse($11(num).value) <= Date.parse(currDate)) {
        errStr += 'Park Date which is after current date, ';
    }
    if ($11(cmnts).value == 0) {
        errStr += 'Comments, ';
    }
    if ($11(cmnts).value.length > 200) {
        errStr += 'Comments not exceeding 200 chars, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11(error).innerHTML = errStr;
        $11(error).scrollIntoView();
        return false;
    }
    showProgressAppr();
}
///Validate Parked PO

///Validate User Group creation
function validateUgerGroupCreation(grpId, descr, apprLimit, tolrAmnt, error) {
    var errStr = 'Please enter ';
    $11(error).innerHTML = '';
    $11(error).style.color = "red";
    if ($11(grpId).value == 0) {
        errStr += 'GroupID, ';
    }
    if ($11(descr).value == 0) {
        errStr += 'Description, ';
    }
    if ($11(apprLimit).value == 0) {
        errStr += 'Approvl Limit, ';
    }
    if ($11(apprLimit).value != 0) {
        if (isNaN($11(apprLimit).value)) {
            errStr += 'valid Numeric values for Approval Limit, ';
        }
    }
    if ($11(tolrAmnt).value == 0) {
        errStr += 'Tolerance Amount, ';
    }
    if ($11(tolrAmnt).value != 0) {
        if (isNaN($11(tolrAmnt).value)) {
            errStr += 'valid Numeric values for Tolerance Amount, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11(error).innerHTML = errStr;
        $11(error).scrollIntoView();
        return false;
    }
}
///Validate User Group creation

//////Get Budget Classification on ItemCode entry
function GetBudgetClss() {
    var url1 = '../Invoice.ashx?func=2&itemCode=' + $11('txtItemCode').value;
    GetItemCodeInfo(url1, 'Invoice');
}

function GetItemCodeInfo(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FillBudgetClassification, false)
    }
}
//////Get Budget Classification on ItemCode entry

function FillBudgetClassification(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (ResultType.length == 5) {
        $11('dvMainMsg').innerHTML = 'There must be some technical problem. Pls try after sometime.';
    }
    else {
        var resp = ResultType;
        var VenueDDL;
        var ageString = "";
        var optionsList;
        var iterator;
        VenueDDL = $11("ddlClassification");
        VenueDDL.disabled = true;
        VenueDDL.options.length = 1;
        VenueDDL.options[0].text = "Loading...";
        ageString = resp;
        optionsList = ageString.split("~");
        VenueDDL.options.length = optionsList.length - 1;

        if (ageString != "") {
            for (iterator = 0; iterator < optionsList.length - 1; iterator++) {
                var singleOption;
                var valueText;

                singleOption = optionsList[iterator];
                valueText = singleOption.split(":");

                VenueDDL.options[iterator].text = valueText[1];
                VenueDDL.options[iterator].value = valueText[0];
            }
            VenueDDL.disabled = false;
            return false;
        }
    }
}

//Fetch OrgCode/CompCode according to Org name/CompName respectively
function GetOrgCode(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchOrgCode, false)
    }
}

function FetchOrgCode(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "GetOrgCode") {
        $11('txtOrgcode').value = ResultType;
    }
    else {
        $11('txtCompCode').value = ResultType;
    }
}
//Fetch OrgCode/CompCode according to Org name/CompName respectively

//Fetch Vendor number by Vendor name
function GetVendorNum(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchVendorNum, false)
    }
}

function FetchVendorNum(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "GetVendorNum") {
        $11('lblVendNo').textContent = ResultType;
        $11('hdnVendCode').value = ResultType;
    }
}
//Fetch Vendor number by Vendor name

//Get Selected item purchase history in PO creation
function FetchItemPurchHist(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, LoadItemPurchHist, false)
    }
}

function LoadItemPurchHist(response) {
    var ResultType = "";
    ResultType = response.responseText;
}
//Get Selected item purchase history in PO creation

//Validate OnBehalfOf user name in the existing list
function validateOnBehalfOf() {
    if ($11('txtOnBehalfOf').value != '' && $11('txtOnBehalfOf').value != ' ') {
        var url = 'Invoice.ashx?func=11&obh=' + $11('txtOnBehalfOf').value.replace("&", "`");
        GetOnBehalfOf(url, 'GetOnBehalfOf');
        if ($11('hdnOnBehalfOfCnt').value == "0" || $11('hdnOnBehalfOfCnt').value == '' || $11('hdnOnBehalfOfCnt').value == ' ' || $11('hdnOnBehalfOfCnt').value == null)
            return false;
        else
            return true;
    }
    else
        return true;
}

function GetOnBehalfOf(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, AddOnBehalfOf, false)
    }
}

function AddOnBehalfOf(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "GetOnBehalfOf") {
        if (ResultType == "0") {
            $11('hdnOnBehalfOfCnt').value = "0";
            $11('lblOnBehalfOfConfText').innerHTML = "The name '" + $11('txtOnBehalfOf').value + "' provided as 'Payable To' will be printed on cheque. Please make sure the name is accurate.";
            $find('popAddOnBehalfOf').show();
            $11('btnCancelOnBehalfOf').setAttribute('onclick', 'javascript: return closeConfAddOnBehalfOf();');
        }
        else
            $11('hdnOnBehalfOfCnt').value = "1";
    }
}

function closeConfAddOnBehalfOf() {
    //$11('txtOnBehalfOf').value = '';
    $11('txtOnBehalfOf').focus();
    $find('popAddOnBehalfOf').hide();
    return false;
}
//Validate OnBehalfOf user name in the existing list

function validateVendBillTo() {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtBillNum').value == 0) {
        errStr += 'Vendor Bill Number, ';
    }
    if ($11('txtVendName1').value == 0) {
        errStr += 'Vendor Name1, ';
    }
    if ($11('txtVendName2').value == 0) {
        errStr += 'Vendor Name2, ';
    }
    if ($11('txtVendPrefName').value == 0) {
        errStr += 'Vendor Preferred Name, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if (!checkEmail('txtEmail')) {
        errStr += 'valid Email, ';
    }
    if ($11('txtPassword').value == 0) {
        errStr += 'Password, ';
    }
    if ($11('txtPassword').value.length < 6) {
        errStr += 'Password of length minimum of 6 chars, ';
    }
    if ($11('txtConfPwd').value == 0) {
        errStr += 'Confirm Password, ';
    }
    if ($11('txtPassword').value != $11('txtConfPwd').value) {
        errStr += 'Password mismatch, ';
    }
    if ($11('txtAddr1').value == 0) {
        errStr += 'Address1, ';
    }
    if ($11('ddlCity').value == 0) {
        errStr += 'City, ';
    }
    if ($11('ddlStates').value == 0) {
        errStr += 'State, ';
    }
    if ($11('ddlCountry').value == 0) {
        errStr += 'Country, ';
    }
    if ($11('txtZip').value == 0) {
        errStr += 'ZipCode, ';
    }
    if (isNaN($11('txtZip').value)) {
        errStr += 'ZipCode without characters, ';
    }
    if ($11('ddlCurrency').value == 0) {
        errStr += 'Currency, ';
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone1, ';
    }
    if ($11('txtPhone').value != 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone1 in the format xxx-xxx-xxxx, ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone1 Number, ';
        }
    }
    if ($11('ddlPayMode').value == 0) {
        errStr += 'Payment Mode, ';
    }
    if ($11('txtCat').value == 0) {
        errStr += 'Category, ';
    }
    if ($11('txtSubCat').value == 0) {
        errStr += 'Sub-Category, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        setTimeout(function () { $11('dvMsg').innerHTML = ''; }, 3000);
        return false;
    }
}

function resetBillTo() {
    $11('dvMsg').innerHTML = '';
    $11('txtBillNum').value = '';
    $11('txtVendName1').value = '';
    $11('txtVendName2').value = '';
    $11('txtVendPrefName').value = '';
    $11('txtEmail').value = '';
    $11('txtPassword').value = '';
    $11('txtConfPwd').value = '';
    $11('txtAddr1').value = '';
    $11('txtAddr2').value = '';
    $11('txtAddr3').value = '';
    $11('ddlCity').value = 0;
    $11('ddlStates').value = 0;
    $11('ddlCountry').value = 0;
    $11('txtZip').value = '';
    $11('txtWebsite').value = '';
    $11('ddlCurrency').value = 0;
    $11('txtPhone').value = '';
    $11('txtPhone2').value = '';
    $11('txtFax').value = '';
    $11('ddlPayMode').value = 0;
    $11('txtPayterms').value = '';
    $11('txtCat').value = '';
    $11('txtSubCat').value = '';
    $11('chkMultiLoc').checked = false;
    return false;
}

function validateVendShipTo() {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtShipNum').value == 0) {
        errStr += 'Vendor Ship Number, ';
    }
    if ($11('txtVendName1').value == 0) {
        errStr += 'Vendor Name1, ';
    }
    if ($11('txtVendName2').value == 0) {
        errStr += 'Vendor Name2, ';
    }
    if ($11('txtVendPrefName').value == 0) {
        errStr += 'Vendor Preferred Name, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if (!checkEmail('txtEmail')) {
        errStr += 'valid Email, ';
    }
    if ($11('txtAddr1').value == 0) {
        errStr += 'Address1, ';
    }
    if ($11('ddlCity').value == 0) {
        errStr += 'City, ';
    }
    if ($11('ddlStates').value == 0) {
        errStr += 'State, ';
    }
    if ($11('ddlCountry').value == 0) {
        errStr += 'Country, ';
    }
    if ($11('txtZip').value == 0) {
        errStr += 'ZipCode, ';
    }
    if (isNaN($11('txtZip').value)) {
        errStr += 'ZipCode without characters, ';
    }
    if ($11('txtPhone').value == 0) {
        errStr += 'Phone1, ';
    }
    if ($11('txtPhone').value != 0) {
        if (!(validatePhoneNumber())) {
            errStr += 'Phone1 in the format xxx-xxx-xxxx, ';
        }
        if (!(validatePhone())) {
            errStr += 'valid Phone1 Number, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        setTimeout(function () { $11('dvMsg').innerHTML = ''; }, 3000);
        return false;
    }
}

function resetShipTo() {
    $11('dvMsg').innerHTML = '';
    $11('txtShipNum').value = '';
    $11('txtVendName1').value = '';
    $11('txtVendName2').value = '';
    $11('txtVendPrefName').value = '';
    $11('txtEmail').value = '';
    $11('txtAddr1').value = '';
    $11('txtAddr2').value = '';
    $11('txtAddr3').value = '';
    $11('ddlCity').value = 0;
    $11('ddlStates').value = 0;
    $11('ddlCountry').value = 0;
    $11('txtZip').value = '';
    $11('txtWebsite').value = '';
    $11('txtPhone').value = '';
    $11('txtPhone2').value = '';
    $11('txtFax').value = '';
    return false;
}

function validateVendContact() {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtFirstName').value == 0) {
        errStr += 'FirstName, ';
    }
    if ($11('txtLastName').value == 0) {
        errStr += 'Last Name, ';
    }
    if ($11('txtPreferName').value == 0) {
        errStr += 'Prefer Name, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if (!checkEmail('txtEmail')) {
        errStr += 'valid Email, ';
    }
    if ($11('txtDesign').value == 0) {
        errStr += 'Designation, ';
    }
    if ($11('ddlContType').value == 0) {
        errStr += 'Contact Type, ';
    }
    if ($11('ddlContMethod').value == 0) {
        errStr += 'Contact Method, ';
    }
    if ($11('txtMobile').value == 0) {
        errStr += 'Mobile, ';
    }
    if ($11('ddlNewType').value == 0) {
        errStr += 'Type, ';
    }
    if ($11('ddlSelectedNewType').value == 0) {
        errStr += 'BillTo/ShipTo, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        setTimeout(function () { $11('dvMsg').innerHTML = ''; }, 3000);
        return false;
    }
}

function resetVendContact() {
    $11('dvMsg').innerHTML = '';
    $11('txtFirstName').value = '';
    $11('txtMidName').value = '';
    $11('txtLastName').value = '';
    $11('txtPreferName').value = '';
    $11('ddlContMethod').value = 0;
    $11('txtDesign').value = '';
    $11('txtPhone').value = '';
    $11('txtMobile').value = '';
    $11('txtFax').value = '';
    $11('txtEmail').value = '';
    $11('ddlContType').value = 0;
    $11('ddlNewType').value = 0;
    $11('dvType').style.display = "none";
    return false;
}

function validateCustQuoteHeader() {
    var errStr = 'Please enter ';
    $11('dvMsg').innerHTML = '';
    $11('dvMsg').style.color = "red";
    if ($11('txtShipLoc').value == 0) {
        errStr += 'Shipping Location, ';
    }
    if ($11('txtQuoteDesc').value == 0) {
        errStr += 'Quote Description, ';
    }
    if ($11('txtRespBy').value == 0) {
        errStr += 'Response By, ';
    }
    if (Date.parse($11('txtRespBy').value) < Date.parse($11('hdnCurrDate').value)) {
        errStr += 'Response By which is not prior to current date, ';
    }
    if ($11('txtContName').value == 0) {
        errStr += 'Contact Name, ';
    }
    if ($11('ddlContType').value == 0) {
        errStr += 'Contact Type, ';
    }
    if ($11('txtContPhone').value == 0) {
        errStr += 'Phone, ';
    }
    if ($11('txtEmail').value == 0) {
        errStr += 'Email, ';
    }
    if ($11('txtEmail').value != 0) {
        if (!checkEmail('txtEmail')) {
            errStr += 'valid Email, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMsg').innerHTML = errStr;
        setTimeout(function () { $11('dvMsg').innerHTML = ''; }, 3000);
        return false;
    }
}

/*Get CompCode info*/
function GetShipLoc() {
    var url1 = '../Invoice.ashx?func=6&compCode=' + $11('ddlCompCode').value;
    GetCompCodeInfo(url1, 'CompCode');
}

function GetCompCodeInfo(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchCompCode, false)
    }
}

function FetchCompCode(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "CompCode") {
        $11('txtShipLoc').value = ResultType;
    }
}
/*Get CompCode info*/

/*Get Preferred Vendor Discount Percent*/
function GetVendDisc(id) {
    var url1 = 'Invoice.ashx?func=7&vend=' + id.value.replace("&", "`");
    GetVendorDiscount(url1, 'vendDiscPercent');
}

function GetVendorDiscount(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchVendorDiscount, false)
    }
}

function FetchVendorDiscount(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "vendDiscPercent") {
        var str = ResultType.split(',');
        $11('hdnVendDiscount').value = str[0];
        $11('hdnVendPromoCode').value = str[1];
    }
}
/*Get Preferred Vendor Discount Percent*/

/*Get Preferred Vendor Discount Percent for Parked Expenses in  Approvals*/
function GetVendDiscPark(id) {
    var url1 = 'Invoice.ashx?func=7&vend=' + id.value.replace("&", "`");
    GetVendorDiscountPark(url1, 'vendDiscPercent');
}

function GetVendorDiscountPark(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchVendorDiscountPark, false)
    }
}

function FetchVendorDiscountPark(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "vendDiscPercent") {
        var str = ResultType.split(',');
        $11('hdnVendDiscountPark').value = str[0];
        $11('hdnVendPromoCodePark').value = str[1];
    }
}
/*Get Preferred Vendor Discount Percent for Parked Expenses in  Approvals*/

/*Get count of Manager pending and parked expenses/POs*/
function GetPendingExp(val) {
    var url1 = 'Invoice.ashx?func=9&preappr=' + val;
    GetPendingExpenses(url1, 'pendParkCnt');
}

function GetPendingExpenses(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchPendingExpenses, false)
    }
}

function FetchPendingExpenses(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "pendParkCnt") {
    }
}
/*Get count of Manager pending and parked expenses/POs*/

/*Get count of AP pending and parked expenses/POs*/
function GetAPPendingExp(val) {
    var url1 = 'Invoice.ashx?func=10&preappr=' + val;
    GetAPPendingExpenses(url1, 'pendParkCnt');
}

function GetAPPendingExpenses(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, FetchAPPendingExpenses, false);
    }
}

function FetchAPPendingExpenses(response) {
    var ResultType = "";
    ResultType = response.responseText;
    if (currentpageurl == "pendParkCnt") {
    }
}
/*Get count of AP pending and parked expenses/POs*/

/*Validation for input fields in Integration screen*/
function validateTypes() {
    var errStr = 'Please enter ';
    $11('dvError').innerHTML = '';
    $11('dvError').style.color = "red";

    if ($11('ddlTypes').value == 1) {
        if ($11('txtQBCompanyId').value == 0) {
            errStr += 'Company Id, ';
        }
        if ($11('txtQBConsumerKey').value == 0) {
            errStr += 'Consumer Key, ';
        }
        if ($11('txtQBConsumerSecret').value == 0) {
            errStr += 'Consumer Secret, ';
        }
        if ($11('txtQBAccessToken').value == 0) {
            errStr += 'Access Token, ';
        }
        if ($11('txtQBAccessTokenSecret').value == 0) {
            errStr += 'Access Token Secret, ';
        }
        if ($11('txtQBAppToken').value == 0) {
            errStr += 'App Token, ';
        }
    } else if ($11('ddlTypes').value == 2) {
        if ($11('txtXeroConsumerKey').value == 0) {
            errStr += 'Consumer Key, ';
        }
        if ($11('txtXeroConsumerSecret').value == 0) {
            errStr += 'Consumer Secret, ';
        }
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvError').innerHTML = errStr;
        window.scroll(0, 0);
        return false;
    }
}
/*Validation for input fields in Integration screen*/

/*Clear input fields in Integration screen*/
function clearTypes() {
    $11('txtQBCompanyId').value = '';
    $11('txtQBConsumerKey').value = '';
    $11('txtQBConsumerSecret').value = '';
    $11('txtQBAccessToken').value = '';
    $11('txtQBAccessTokenSecret').value = '';
    $11('txtQBAppToken').value = '';
    $11('txtXeroConsumerKey').value = '';
    $11('txtXeroConsumerSecret').value = '';
}
/*Clear input fields in Integration screen*/

/*Validate Add New Expense Item while expense creation*/
function validateAddNewExpItem() {
    var errStr = 'Please enter ';
    $11('dvAddExpItemErr').innerHTML = '';
    $11('dvAddExpItemErr').style.color = "red";
    if ($11('txtAddExpCode').value == 0) {
        errStr += 'Expense Code, ';
    }
    if ($11('txtAddExpCode').value.length > 50) {
        errStr += 'Expense Code length not exceeding 50 characters, ';
    }
    if ($11('txtAddExpDescr').value == 0) {
        errStr += 'Description, ';
    }
    if ($11('txtAddExpDescr').value.length > 50) {
        errStr += 'Description length not exceeding 200 characters, ';
    }
    if ($11('txtAddExpAccCode').value.length > 50) {
        errStr += 'Account Code length not exceeding 50 characters, ';
    }
    if ($11('txtAddExpMaxLmt').value == 0) {
        errStr += 'Maximum Limit, ';
    }
    if ($11('txtAddExpMaxLmt').value.length > 50) {
        errStr += 'Maximum Limit length not exceeding 50 characters, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvAddExpItemErr').innerHTML = errStr;
        return false;
    }
}
/*Validate Add New Expense Item while expense creation*/

/*Validate Item Code block creating from PO line*/
function validatePOItemCode() {
    var errStr = 'Please enter ';
    $11('dvItemErrMsg').innerHTML = '';
    $11('dvItemErrMsg').style.color = "red";
    if ($11('txtItemCode').value == 0) {
        errStr += 'Item Code, ';
    }
    if ($11('txtItemDescription').value == 0) {
        errStr += 'Description, ';
    }
    if ($11('txtItemDescription').value.length > 200) {
        errStr += 'Description length not exceeding 200 characters, ';
    }
    if ($11('txtItemNotes').value.length > 500) {
        errStr += 'Notes Limit length not exceeding 500 characters, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvItemErrMsg').innerHTML = errStr;
        return false;
    }
}
/*Validate Item Code block creating from PO line*/


//Timesheet Job Validations
function validateJobDetails() {
    var errStr = 'Please enter ';
    $11('dvErr').innerHTML = '';
    $11('dvErr').style.color = "red";

    //Job Code
    if ($11('txtJobCode').value == 0) {
        errStr += 'Job Code, ';
    }
    //Job Name
    if ($11('txtJobName').value == 0) {
        errStr += 'Job Name, ';
    }
    //Account
    if ($11('lstAssignedAcc').length == 0) {
        errStr += 'Account, ';
    }
    //Users
    if ($11('lstAssignedUsers').length == 0) {
        errStr += 'Users, ';
    }
    //Total Job hours
    if ($11('txtHours').value == 0) {
        errStr += 'Total Job Hours, ';
    }
    else if (isNaN($11('txtHours').value)) {
        errStr += 'valid Total Job Hours, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErr').innerHTML = errStr;
        return false;
    }
}
//Timesheet Job Validations

//Timesheet Task Validation
function validateTaskDetails() {
    var errStr = 'Please enter ';
    $11('dvErr').innerHTML = '';
    $11('dvErr').style.color = "red";
    if ($11('ddlJobCode').value == 0) {
        errStr += 'Job Code, ';
    }
    if ($11('txtTaskCode').value == 0) {
        errStr += 'Task Code, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvErr').innerHTML = errStr;
        return false;
    }
}
//Timesheet Task Validation

//Load Lots/Bins with selected location
function LoadLotsByLoc(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, LoadLotsByLocation, false)
    }
}

function LoadLotsByLocation(response) {
    var ResultType = "";
    ResultType = response.responseText;
}


//Show available lot quantity of destination lot
function ShowAvailLotQty(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, ShowAvailLotQuantity, false)
    }
}

function ShowAvailLotQuantity(response) {
    var ResultType = "";
    ResultType = response.responseText;
    var lst = ResultType.split('~');
    $11('lblTotalQtyAvailTo').innerHTML = lst[0];
    $11('hdnTrsfrToJob').value = lst[1];
}

//load agent and other details related to vendor, show alert if vendor is not registered
function getVendAgentInit(vend) {
    if (vend.value != '') {
        var url = 'Invoice.ashx?func=20&vend=' + vend.value.replace("&", "`");
        getVendAgentMed(url, '');
    }
    else {
        $11('hdnQBVendID').value = "";
        $11('txtEditAgentName').value = "";
    }
}

function getVendAgentMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, getVendAgentFinal, false);
    }
}

function getVendAgentFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType != "") {
        var splitStr = resultType.split('~');
        $11('hdnQBVendID').value = splitStr[0];
        $11('txtEditAgentName').value = splitStr[1];
    }
    else {
        $11('hdnQBVendID').value = "";
        $11('txtEditAgentName').value = "";
        $find('popVendCreatAlert').show();
    }
    return false;
}
//load agent and other details related to vendor, show alert if vendor is not registered

//validate food tax with line amount
function validateFoodTax() {
    if ($11('txtEditFoodTax').value != '' && $11('txtEditActAmnt').value != '') {
        var fTax = $11('txtEditFoodTax').value;
        var lAmnt = $11('txtEditActAmnt').value;
        var fTaxPercnt = (parseFloat(fTax) / parseFloat(lAmnt)) * 100;
        if (parseFloat(fTaxPercnt) > parseFloat($11('hdnFoodTax').value)) {
            $11('dvExpError').style.color = "Red";
            $11('dvExpError').innerHTML = "Food tax cannot be more than " + $11('hdnFoodTax').value + "% of line amount.";
        }
        else
            $11('dvExpError').innerHTML = "";
    }
    return false;
}
//validate food tax with line amount

//Get vendor agreement details of selected item
function getVendItemAgrmntInit(obj) {
    var vend = $11(obj).value;
    var vendItem = $11('txtVendPtNo').value;
    var url = 'Invoice.ashx?func=21&vend=' + vend.replace("&", "`") + '&item=' + vendItem;
    getVendItemAgrmntMed(url, '');
}

function getVendItemAgrmntMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, getVendItemAgrmntFinal, false);
    }
}

function getVendItemAgrmntFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType != "") {
        if (resultType == "-1") {
            //$11('lnkAgreement').style.display = 'none';
            setPriceFlagVal('MN');
            $11('hdnAgreementCnt').value = '0';
            $11('dvPOErrMsg').style.color = "Red";
            $11('dvPOErrMsg').innerHTML = "No agreement details available for the item!";
        }
        else if (resultType == "0") {
            //$11('lnkAgreement').style.display = 'block';
            setPriceFlagVal('LP');
            $11('hdnAgreementCnt').value = '1';
        }
        else {
            //$11('lnkAgreement').style.display = 'block';
            $11('txtUnitPrice').value = resultType;
            CalcBudgetDetails();
            setPriceFlagVal('AG');
            $11('hdnAgreementCnt').value = '1';
        }
    }
    else {
        $11('lnkAgreement').style.display = 'none';
    }
    upEnable();
}
//Get vendor agreement details of selected item

//calculate  unitprice based on provided quantity
function getVolDiscUnitPriceInit() {
    var qty = $11('txtQuantity').value;
    var url = 'Invoice.ashx?func=22&qty=' + qty;
    getVolDiscUnitPriceMed(url, '');
}

function getVolDiscUnitPriceMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, getVolDiscUnitPriceFinal, false);
    }
}

function getVolDiscUnitPriceFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType != "") {
        $11('txtUnitPrice').value = resultType;
    }
    CalcBudgetDetails();
}
//calculate  unitprice based on provided quantity

//disable/enable unitprice field based on priceflag
function modifyUnitPriceField() {
    upEnable();
    if ($11('ddlPriceFlag').value == 'AG') {
        if ($11('hdnAgreementCnt').value == '1')
            getVendItemAgrmntInit('ddlBillTo');
        else {
            $11('dvPOErrMsg').style.color = "Red";
            $11('dvPOErrMsg').innerHTML = "No agreement details available for the Vendor Part No.!";
        }
    }
    else if ($11('ddlPriceFlag').value == 'LP') {
        if ($11('hdnAgreementCnt').value == '1')
            getListPriceInit();
        else {
            $11('dvPOErrMsg').style.color = "Red";
            $11('dvPOErrMsg').innerHTML = "No List Price available for the item!";
        }
    }
    else
        $11('dvPOErrMsg').innerHTML = "";
    return false;
}

function upEnable() {
    var priceFlag = $11('ddlPriceFlag').value;
    if (priceFlag == "MN") {
        $11('txtUnitPrice').removeAttribute('readonly');
        $11('txtUnitPrice').style.backgroundColor = '#fff';
        $11('lnkAgreement').style.display = 'none';
    }
    else if (priceFlag == "LP") {
        $11('txtUnitPrice').setAttribute('readonly', 'readonly');
        $11('txtUnitPrice').style.backgroundColor = '#ccc';
        $11('lnkAgreement').style.display = 'none';
    }
    else if (priceFlag == "AG") {
        $11('txtUnitPrice').setAttribute('readonly', 'readonly');
        $11('txtUnitPrice').style.backgroundColor = '#ccc';
        if ($11('hdnAgreementCnt').value == '1')
            $11('lnkAgreement').style.display = 'block';
        else
            $11('lnkAgreement').style.display = 'none';
    }
}

function setPriceFlagVal(val) {
    var a = $11('ddlPriceFlag');
    for (i = 0; i < a.length; i++) {
        if (a.options[i].value == val) {
            a.selectedIndex = i;
        }
    }
    var selectedText = $11('ddlPriceFlag').options[$11('ddlPriceFlag').selectedIndex].text;
    $11('ufd-ddlPriceFlag').value = selectedText;
}
//disable/enable unitprice field based on priceflag

//display listprice of the selected item
function getListPriceInit() {
    var url = 'Invoice.ashx?func=23';
    getListPriceMed(url, '');
}

function getListPriceMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, getListPriceFinal, false);
    }
}

function getListPriceFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType != "") {
        $11('txtUnitPrice').value = resultType;
    }
    else
        $11('txtUnitPrice').value = '0';
    CalcBudgetDetails();
}
//display listprice of the selected item

//Vendor Module Validations
//validate catgories
function validateCategory() {
    var errStr = 'Please enter ';
    $11('dvCatMsg').innerHTML = '';
    $11('dvCatMsg').style.color = "red";

    //Category Code
    if ($11('txtCatCode').value == 0) {
        errStr += 'Category Code, ';
        DisplayErrFields($11('txtCatCode'));
    }
    //Category Descr.
    if ($11('txtCatDescr').value == 0) {
        errStr += 'Description, ';
        DisplayErrFields($11('txtCatDescr'));
    }
    if ($11('txtCatDescr').value.length > 200) {
        errStr += 'Description must not me more than 200 chars, ';
        DisplayErrFields($11('txtCatDescr'));
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvCatMsg').innerHTML = errStr;
        return false;
    }
}
//validate catgories
//validate sub-catgories
function validateSubCategory() {
    var errStr = 'Please enter ';
    $11('dvSubCatMsg').innerHTML = '';
    $11('dvSubCatMsg').style.color = "red";

    //Category Code
    if ($11('txtCatForsubCat').value == 0) {
        errStr += 'Category Code, ';
        DisplayErrFields($11('txtCatForsubCat'));
    }
    if ($11('txtSubCatCode').value == 0) {
        errStr += 'Sub-Category Code, ';
        DisplayErrFields($11('txtSubCatCode'));
    }
    if ($11('txtSubCatDescr').value == 0) {
        errStr += 'Description, ';
        DisplayErrFields($11('txtSubCatDescr'));
    }
    if ($11('txtSubCatDescr').value.length > 200) {
        errStr += 'Description must not me more than 200 chars, ';
        DisplayErrFields($11('txtSubCatDescr'));
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvSubCatMsg').innerHTML = errStr;
        return false;
    }
}
//validate sub-catgories
//validate products
function validateProduct() {
    var errStr = 'Please enter ';
    $11('dvItemMsg').innerHTML = '';
    $11('dvItemMsg').style.color = "red";

    //Category Code
    if ($11('txtItemCat').value == 0) {
        errStr += 'Category, ';
        DisplayErrFields($11('txtItemCat'));
    }
    if ($11('txtItemCode').value == 0) {
        errStr += 'Item Code, ';
        DisplayErrFields($11('txtItemCode'));
    }
    if ($11('txtItemDescr').value == 0) {
        errStr += 'Description, ';
        DisplayErrFields($11('txtItemDescr'));
    }
    if ($11('txtItemDescr').value.length > 200) {
        errStr += 'Description must not me more than 200 chars, ';
        DisplayErrFields($11('txtItemDescr'));
    }
    if ($11('txtItemUOM').value == 0) {
        errStr += 'UOM, ';
        DisplayErrFields($11('txtItemUOM'));
    }
    if ($11('txtItemListPrice').value == 0) {
        errStr += 'List Price, ';
        DisplayErrFields($11('txtItemListPrice'));
    }
    if (!validateAgreementDisc('txtItemListPrice')) {
        errStr += 'valid List Price, ';
        DisplayErrFields($11('txtItemListPrice'));
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvItemMsg').innerHTML = errStr;
        return false;
    }
}
//validate products
//validate agreements
function validateAgreementDisc(id) {
    //   var reg = /^[+]?[1-9]*\.?[0-9]+([eE]-+]?[0-9]+)?$/;
    var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
    if (reg.test($11(id).value) || $11(id).value == '') {
        return true;
    }
}
//validate agreements
//validate customer agreements
function validateCustAgreement() {
    var errStr = 'Please enter ';
    $11('dvAggrMsg').innerHTML = '';
    $11('dvAggrMsg').style.color = "red";

    if ($11('txtEditItem').value == 0) {
        errStr += 'Item, ';
        DisplayErrFields($11('txtEditItem'));
    }
    if ($11('txtAggr').value == 0) {
        errStr += 'Agreement, ';
        DisplayErrFields($11('txtAggr'));
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvAggrMsg').innerHTML = errStr;
        return false;
    }
}
//validate customer agreements

function DisplayErrFields(obj) {
    obj.style.borderRight = "1px Solid Red";
    obj.style.borderTop = "1px Solid Red";
    obj.style.borderBottom = "1px Solid Red";
}

function DisplayNormalFields(obj) {
    obj.style.borderRight = "1px Solid #ccc";
    obj.style.borderTop = "1px Solid #ccc";
    obj.style.borderBottom = "1px Solid #ccc";
}
//Vendor Module Validations


//receipt store search
function validateReceiptStoreGoClick(currDate) {
    if ($11('txtFrom').value == '') {
        $11('dvSearchError').innerHTML = 'Please provide From Date.';
        $11('dvSearchError').style.color = "red";
    }
    else if ($11('txtTo').value == '') {
        $11('dvSearchError').innerHTML = 'Please provide To Date.';
        $11('dvSearchError').style.color = "red";
    }
    else if (Date.parse($11('txtFrom').value) > Date.parse(currDate)) {
        $11('dvSearchError').innerHTML = 'From Date cannot be greater than todays date.';
        $11('dvSearchError').style.color = "red";
    }
    else if (Date.parse($11('txtFrom').value) > Date.parse($11('txtTo').value)) {
        $11('dvSearchError').innerHTML = 'From Date cannot be greater than To Date.';
        $11('dvSearchError').style.color = "red";
    }
    else {
        $11('dvSearchError').innerHTML = '&nbsp;';
    }
    setTimeout('clearReceiptStoreGoClickMsg();', 3000);
    if ($11('dvSearchError').innerHTML == '&nbsp;')
        return true;
    else
        return false;
}

function clearReceiptStoreGoClickMsg() {
    $11('dvSearchError').innerHTML = '&nbsp;';
}

//receipt store search

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
    try {
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

    } catch (e) {
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
    try {
        if (cnt > 0)
            showButtons("block");
        else
            showButtons("none");

    } catch (e) {

    }
}
/*When checkbox in the header row is checked*/

//validate vendor item form
function validateVendItem(ddlVendor, txtVendPartNo, txtVendPartDesc, txtVendUOM, txtVendUnitPrice) {
    var errStr = 'Please provide ';
    $11('dvMainMsg').innerHTML = '';
    $11('dvMainMsg').style.color = "red";
    if (ddlVendor != '0') {
        if ($11(ddlVendor).selectedIndex == 0) {
            errStr += 'Vendor, ';
        }
    }
    if ($11(txtVendPartNo).value == 0) {
        errStr += 'Vendor Part#, ';
    }
    if ($11(txtVendPartDesc).value == 0) {
        errStr += 'Vendor Part Description, ';
    }
    if ($11(txtVendUOM).value == 0) {
        errStr += 'UOM, ';
    }
    if ($11(txtVendUnitPrice).value == 0) {
        errStr += 'Unit Price, ';
    }
    else if (isNaN($11(txtVendUnitPrice).value)) {
        if (errStr.indexOf(',') >= 0)
            errStr += 'characters not allowed for unit price, ';
        else
            errStr = 'Characters not allowed for unit price, ';
    }
    errStr = errStr.substring(0, errStr.length - 2);
    if (errStr.length > 13) {
        $11('dvMainMsg').innerHTML = errStr;
        return false;
    }
}
//validate vendor item form

//display description of the selected vendor item
function getVendItemDesc(vendItem) {
    var url = '../Invoice.ashx?func=24&item=' + $11(vendItem).value.replace("&", "`");
    getVendItemDescMed(url, '');
}

function getVendItemDescMed(UpdateURL, pagename) {
    if (UpdateURL != "") {
        currentpageurl = pagename;
        MakeAjaxRequest(UpdateURL, getVendItemDescFinal, false);
    }
}

function getVendItemDescFinal(response) {
    var resultType = "";
    resultType = response.responseText;
    if (resultType != "") {
        $11('txtVendItemDesc').value = resultType;
    }
    else
        $11('txtVendItemDesc').value = '';
}
//display description of the selected vendor item

//Company Codes nested grid details
function getCompanyCodeDetailsGrid(compCode, index, img) {
    var result = [];
    var columns = [];
    var filteredData = [];
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'Compcodecreation.aspx/getSelectedCompCode',
        data: "{'compCode':'" + compCode + "'}",
        //data: "{'compCode':'HIL'}",
        dataType: "json",
        success: function (data) {
            var headerList = [];
            var columnList = ["expLineNo", "deptCode", "accountCode", "expItem", "vendpartno", "itemCode", "comments", "quantity", "unitPrice", "PreAmount", "budget", "balAfterPo"];
            displaySubDetails(data, index, img, headerList, columnList);
        },
        error: function (err) {
            console.log("inside error: " + JSON.stringify(err));
        }
    });
    return result;
}
//Company Codes nested grid details

//Manager Approvals nested grid PENDING details
function getMgrApprPendingDetailsGrid(requestID, index, img) {
    var result = [];
    var columns = [];
    var filteredData = [];
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'MgrApproveReject.aspx/getSelectedRequestDetails',
        data: "{'requestID':'" + requestID + "'}",
        //data: "{'compCode':'HIL'}",
        dataType: "json",
        success: function (data) {
            var headerList = ["LineNo.", "Department", "Account#", "AccountDescr.", "VendorPart#", "Item", "Descr", "Qty", "UnitPrice($)", "LineAmount($)", "Budget"];
            var columnList = ["expLineNo", "deptCode", "accountCode", "expItem", "vendPartno", "itemCode", "comments", "quantity", "unitPrice", "preAmount", "budget"];
            displaySubDetails(data, index, img, headerList, columnList);
        },
        error: function (err) {
            console.log("inside error: " + JSON.stringify(err));
        }
    });
    return result;
}
//Manager Approvals nested grid PENDING details

//My Invoices nested grid details
function getInvoiceDetailsGrid(invoiceNo, vendNo, index, img) {
    var result = [];
    var columns = [];
    var filteredData = [];
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'ViewInvc.aspx/getSelectedInvoiceDetails',
        data: "{'invoiceNo':'" + invoiceNo + "', 'vendNo':'" + vendNo + "'}",
        dataType: "json",
        success: function (data) {
            var headerList = ["PONo.", "Line#", "Account#", "Description", "POAmount", "Qty", "InvoiceQty", "Tax($)", "ShippingCost($)", "InvoiceAmount($)", "InvLine#"];
            var columnList = ["ourRefNo", "expLineNo", "accountCode", "description", "poAmount", "quantity", "qtyReceived", "taxAmount1", "shippingCost", "poInvAmount", "invLineNo"];
            displaySubDetails(data, index, img, headerList, columnList);
        },
        error: function (err) {
            console.log("inside error: " + JSON.stringify(err));
        }
    });
    return result;
}
//My Invoices nested grid details

//load details data upon row expansion
function displaySubDetails(data, index, img, headerList, columnList) {
    var json = JSON.parse(data.d);
    //var col = headerList;
    var col = columnList;

    var table = document.createElement("table");

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < headerList.length; i++) {
        var th = document.createElement("td");      // TABLE HEADER.
        th.innerHTML = headerList[i];
        th.style.borderBottom = "1px solid #ccc";
        th.style.backgroundColor = "#3B6AA0";
        th.style.color = "#fff ";
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    //console.log("json: " + JSON.stringify(json));
    for (var i = 0; i < json.length; i++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.style.borderBottom = "1px solid #ccc";
            //console.log("json[i][col[j]]: " + json[i][col[j]]);
            tabCell.innerHTML = json[i][col[j]];
        }
    }
    table.className = "dummy" + index;
    $(table).insertAfter(img);
    img.src = "../images/uparrow.jpg";
    img.onerror = function () {
        img.src = "images/uparrow.jpg";
    }
}

function getDetailsDataOnImgClick(img, index, grid) {
    var hdnRowLst = grid.getElementsByClassName("detailrows");
    var detailID = hdnRowLst[index].textContent;
    if (img.src.indexOf("down") >= 0) {
        showDetailsLoader(img);
        if (window.location.href.toLowerCase().indexOf("compcode") >= 0)
            getCompanyCodeDetailsGrid(detailID, index, img);
        else if (window.location.href.toLowerCase().indexOf("mgrapprovereject") >= 0)
            getMgrApprPendingDetailsGrid(detailID, index, img);
        else if (window.location.href.toLowerCase().indexOf("viewinv") >= 0) {
            var hdnRowLstVend = grid.getElementsByClassName("detailrowsVend");
            var VendID = hdnRowLstVend[index].textContent;
            getInvoiceDetailsGrid(detailID, VendID, index, img);
        }
    }
    else if (img.src.indexOf("up") >= 0) {
        for (var i = 0; i < grid.rows.length; i++)
            if (i == index)
                $(".dummy" + index).remove();

        img.src = "../images/downarrow.jpg";
        img.onerror = function () {
            img.src = "images/downarrow.jpg";
        }
    }
}

function showDetailsLoader(img) {
    img.src = "../images/ajax-loader.gif";
    img.onerror = function () {
        img.src = "images/ajax-loader.gif";
    }
}
//load details data upon row expansion
