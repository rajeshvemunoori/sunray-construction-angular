<%@ Page Language="C#" AutoEventWireup="true" CodeFile="NewExpense.aspx.cs" Inherits="NewExpense" %>

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
    <title>ApproveIt-New Expense</title>
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
    <link href="Autosuggest/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/html5shiv.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>

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

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 20px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        label1 {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
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
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
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

        .lbl {
            text-align: left;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvAttchmntsjEsCoOl_headerDiv, #gvExpjEsCoOl_headerDiv, #gvCCjEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th, #gvExpjEsCoOl_headerDiv div table tbody tr th, #gvCCjEsCoOl_headerDiv div table tbody tr th,
            #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvAttchmnts tbody tr td, #gvExp tbody tr td, #gvCC tbody tr td, #gvDrafts tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvAttchmntsjEsCoOl_mainDiv, #gvExpjEsCoOl_mainDiv, #gvCCjEsCoOl_mainDiv, #gvDraftsjEsCoOl_mainDiv {
            width: 500px;
            height: 200px;
            overflow: hidden;
        }

        .budgfld {
            background-color: #CDCDCD;
        }

        .vendNum {
            font-size: 1.5em;
            font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold';
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

        #ChkSendToQB {
            margin: 6px;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
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
            //window.onbeforeunload = function () {
            //    hideProgress();
            //    return 'Are you sure you want to leave?';
            //};

            //Validations Begin

            function refreshNotes() {
                window.location = window.location;
            }

            function addDDLStyle() {
                $(function () {
                    $("#ddlType").ufd({ log: true });
                });
                $(function () {
                    $("#ddlManagerEmail").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditExpType").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditJobs").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditPhases").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditCategories").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditExpenseItem").ufd({ log: true });
                });
                $(function () {
                    $("#ddlAccountCodes").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditAgName").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCompCar").ufd({ log: true });
                });
                $(function () {
                    $("#ddlEditPaymentType").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCountry").ufd({ log: true });
                });
                $(function () {
                    $("#ddlRgnCode").ufd({ log: true });
                });
                $(function () {
                    $("#ddlClass").ufd({ log: true });
                });
            }

            var x;
            function DoOnAjaxPostback() {
                addDDLStyle();
                LoadCityList();
            }

            $(document).ready(function () {
                LoadVendList();
            });

            var jq = $.noConflict();

            function refreshExp() {
                $(".btnRefresh").click();
            }

            function pageLoad() {
                addDDLStyle();
                LoadVendList();
            }

            function TabIndex(lnk, e) {
                var evt = window.event || e;
                if (evt.keyCode == 9) {
                    if (document.getElementById(lnk)) {
                        setTimeout(function () { document.getElementById(lnk).focus(); }, 1);
                    }
                    if (!lnk.toLowerCase().contains('date')) {
                        $(document).ready(function () {
                            setupDatePicker();
                            $(".date").dateinput('hide');
                        });
                    }
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

            function onchangeoutofcity(chk) {
                if (document.getElementById(chk).checked) {
                    document.getElementById('dvLocalLocation').style.display = 'none';
                    document.getElementById('dvEditToCity').style.display = 'block';
                    document.getElementById('txtEditLocalLocation').value = '';

                    //display 'other' text fields if city selected is Other.
                    var ddl2 = document.getElementById('ddlEditTocity');
                    if (ddl2.options[ddl2.selectedIndex].text == 'Other') {
                        document.getElementById('dvEditToOther').style.display = 'block';
                    }
                    else {
                        document.getElementById('dvEditToOther').style.display = 'none';
                    }
                }
                else {
                    document.getElementById('dvLocalLocation').style.display = 'block';
                    document.getElementById('dvEditToCity').style.display = 'none';
                    document.getElementById('dvEditToOther').style.display = 'none';
                }
            }

            //Load Cities AutoSuggest  

            function LoadCityList() {
                MakeAjaxRequest('Invoice.ashx?func=3', LoadList, false);
            }

            function LoadList(response) {
                var dsCities = null;
                dsCities = jq.parseJSON(response.responseText);
                jq("#txtCityVisited").autocomplete({
                    source: dsCities
                });

                jq("#txtToCity").autocomplete({
                    source: dsCities
                });

                jq("#txtFromCity").autocomplete({
                    source: dsCities
                });
                LoadVendList();
            }
            //Load Cities AutoSuggest  

            //Load Preferred Vendors AutoSuggest   
            function LoadVendList() {
                //var dsVend = null;
                //jq("#txtPrefVendor").autocomplete({
                //   source: dsVend
                //});
                // jq("#txtOnBehalfOf").autocomplete({
                //    source: dsVend
                // });
            }
            //Load Preferred Vendors AutoSuggest  

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

            function ShowBiggerImageDrft(obj) {
                document.getElementById("LargeImageContainerDivDrft").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style='border: 10px solid #ccc'>";
            }

            function ShowDefaultImageDrft(obj) {
                document.getElementById("LargeImageContainerDivDrft").innerHTML = "";
            }

            function move_Area1(event) {
                event = event || window.event;
                LargeImageContainerDivDrft.style.left = event.clientX + document.body.scrollLeft + 10;
                LargeImageContainerDivDrft.style.top = event.clientY + document.body.scrollTop + 10;
            }

            function $1(id) {
                return document.getElementById(id);
            }

            function showAccCodes() {
                $find('popAccCode').show();

            }

            function CheckAttDel() {
                var total = 0;
                var grid = $1('<%=gvAttchmnts.ClientID %>');
                for (var i = 2; i <= grid.rows.length + 1; i++) {
                    if (i <= 9) {
                        i = '0' + i;
                    }
                    if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                        total++;
                    }
                }
                if (parseInt(total) == parseInt(grid.rows.length)) {
                    $1('dvAtt').innerHTML = "You cannot delete all the attachments.";
                    $1('dvAtt').style.color = "Red";
                    return false;
                }
            }

            function showDeleteButton() {
                $1('dvAtt').innerHTML = '';
                var total = 0;
                var grid = $1('<%=gvAttchmnts.ClientID %>');
                for (var i = 2; i <= grid.rows.length + 1; i++) {
                    if (i <= 9) {
                        i = '0' + i;
                    }
                    if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                        total++;
                    }
                }
                if (parseInt(total) > 0)
                    $1("btnDeleteSelected").style.display = "block";
                else
                    $1("btnDeleteSelected").style.display = "none";
            }


            function showConfirmation(sender, args) {
                document.getElementById('lblFileName').innerHTML = args.get_fileName();
            }

            function validateBudgetAmount1(id) {
                //   var reg = /^[+]?[1-9]*\.?[0-9]+([eE]-+]?[0-9]+)?$/;
                var reg = /^(?:\d*\.\d{1,4}|\d+)$/;
                if (reg.test($11(id).value) || $11(id).value == '') {
                    return true;
                }
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
                    $11('txtExpBalAfter').value = parseFloat(bal).toFixed(4);
                    if (type == 2)
                        validateFoodTax();
                }
            }

            function DisplayEmailOption() {
                if ($11('chkSysOrders').checked) {
                    $11('dvSysOrders').style.display = "block";
                    var radioButtonlist = document.getElementsByName("<%=rblEmail.ClientID%>");
                    radioButtonlist[0].checked = true;
                    $11('txtEmailFax').value = '';
                } else
                    $11('dvSysOrders').style.display = "none";
            }

            //Get Vendor Number by passing Vendor name to db
            function getVendCode() {
                if ($11('txtVendName').value != '') {
                    var url = 'Invoice.ashx?func=4&orgname=' + $11('txtVendName').value + '&typ=3';
                    GetVendorNum(url, 'GetVendorNum');
                }
                else
                    $11('lblVendNo').value = '';
            }
            //Get Vendor Number by passing Vendor name to db

            //Split City and Zip from City text field
            function splitCityZip(txt) {
                var arr = txt.value.split("-");
                document.getElementById('txtVendZip').value = arr[1];
            }
            //Split City and Zip from City text field

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
                        <div class="main-content grid_4" style="width: 115%; margin-left: 0;">
                            <header>
                                <h2>
                                    <div id="dvHeader">
                                        <%if (Request.QueryString["sel"] == "2")
                                          { %>
                                    Create Pre-Approval Expense
                                    <%}
                                          else
                                          { %>
                                    Create New Expense
                                    <%} %>
                                    </div>
                                </h2>
                            </header>
                            <section class="" style="width: 1050px;">
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
                                        <%--<asp:PostBackTrigger ControlID="gvDrafts" />
                                        <asp:PostBackTrigger ControlID="gvAttchmnts" />--%>
                                        <asp:PostBackTrigger ControlID="btnUpload" />
                                    </Triggers>
                                    <ContentTemplate>
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <div id="dvinv" visible="true">
                                            <asp:Panel ID="p" runat="server" DefaultButton="btnAddExpense">
                                                <div class="divfieldset">
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td colspan="4">
                                                                <div id="dvError" runat="server" style="color: Red; font-weight: bold">
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="vertical-align: top; text-align: left">
                                                                <small>
                                                                    <label>
                                                                        Request ID:
                                                                    </label>
                                                                </small>
                                                                <span style="font-size: 1.5em; font-family: 'Segoe UI','Segoe UI Semibold','Segoe UI Bold'"><%=Session["NewReqID"]%></span>
                                                            </td>
                                                            <td width="75%">
                                                                <small>
                                                                    <label>
                                                                        Expense Type:
                                                                    </label>
                                                                </small>
                                                                &nbsp;&nbsp;&nbsp;
                                                                <asp:DropDownList ID="ddlType" runat="server" onchange="rblSelectedValue('new');"
                                                                    Width="200px">
                                                                </asp:DropDownList>
                                                                <asp:HiddenField ID="hdnExpProcessType" runat="server" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br />
                                                    <table width="90%">
                                                        <tr>
                                                            <td>
                                                                <small>
                                                                    <label1><b><em>*</em></b>Manager Email:</label1>
                                                                </small>
                                                                <br />
                                                                <asp:DropDownList ID="ddlManagerEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                    Width="190px">
                                                                </asp:DropDownList>
                                                            </td>
                                                            <td>
                                                                <small>
                                                                    <label1><b><em>*</em></b>Start Date:</label1>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtTripStartDate" runat="server" class="date"></asp:TextBox>
                                                                <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtTripStartDate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                </cc1:CalendarExtender>
                                                                <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                <asp:HiddenField ID="ReqID" runat="server" />
                                                                <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                                <asp:HiddenField ID="hdnRctFileName" runat="server" />
                                                                <asp:HiddenField ID="hdnAttMandtry" runat="server" />
                                                                <asp:HiddenField ID="hdnQBAcctID" runat="server" />
                                                                <asp:HiddenField ID="hdnQBVendID" runat="server" />
                                                                <asp:HiddenField ID="hdnFoodTax" runat="server" />
                                                            </td>
                                                            <td>
                                                                <small>
                                                                    <label1><b><em>*</em></b>Purpose:</label1>
                                                                </small>
                                                                <br />
                                                                <asp:TextBox ID="txtPurpose" runat="server"></asp:TextBox>
                                                            </td>
                                                            <td><small>
                                                                <label>Payable To:</label></small><br />
                                                                <asp:TextBox ID="txtOnBehalfOf" runat="server" onchange="javascript:return validateOnBehalfOf();"></asp:TextBox>
                                                                <asp:HiddenField ID="hdnOnBehalfOfCnt" runat="server" />
                                                            </td>
                                                            <td>
                                                                <asp:CheckBox ID="ChkSendToQB" runat="server" Text="Send to QB" TextAlign="Right" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div class="divfieldset">
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="text-align: right">
                                                                <asp:Button ID="lnkCCT" runat="server" OnClick="UploadCCT" Text="Import Creditcard Transactions" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnAddExpense" runat="server" OnClick="AddNewExpense" Text="Add New Expense" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br />
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <%if (gvExp.Rows.Count > 0)
                                                                  {  %>
                                                                <isx:CoolGridView ID="gvExp" runat="server" AutoGenerateColumns="False" OnRowDataBound="gvExp_RowDataBound"
                                                                    OnRowEditing="gvExp_RowEditing" OnRowCommand="gvExp_RowCommand" OnRowDeleting="gvExp_RowDeleting"
                                                                    Width="981px" Height="200px">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Action">
                                                                            <ItemTemplate>
                                                                                <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" Text="Edit" OnCommand="EditNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkview" Text="View" CommandName="View" OnCommand="ViewNewDetails"
                                                                                    CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                                <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("ExpLineNo")%>'
                                                                                    CommandName="Delete"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="ExpenseType">
                                                                            <ItemTemplate>
                                                                                <asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label>
                                                                                <asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label>
                                                                                <asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label>
                                                                                <asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label>
                                                                                <asp:Label runat="server" ID="lblExpType" Text='<%#Eval("EXP_TYPE")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblJobs" Text='<%#Eval("JOB_CODE")%>' Visible="false" />
                                                                                <asp:Label runat="server" ID="lblPhases" Text='<%#Eval("JPHS_CODE")%>' Visible="false" />
                                                                                <asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCAT_CODE")%>' Visible="false" />
                                                                                <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                                                <asp:Label runat="server" ID="lblExpItem" Visible="false" Text='<%#Eval("ExpenseItem")%>' />
                                                                                <asp:Label runat="server" ID="lblClassification" Text='<%#Eval("AccountClss")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Expense Date">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("FromDate")%>' Style="display: none" />
                                                                                <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("ToDate")%>' Style="display: none" />
                                                                                <asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("ExpenseDate")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Pre-Amount">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("PreAmount")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Total Amount (with Tax)" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("ActualAmount")%>' />
                                                                                <asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("PaymentType") %>' Visible="false" />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="City" HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblCity" Text='<%#Eval("CitiesVisited")%>' />
                                                                                <asp:Label runat="server" ID="lblFromCity" Text='<%#Eval("FromCity")%>' Visible="false" />
                                                                                <asp:Label runat="server" ID="lblFromOtherCity" Text='<%#Eval("FromOtherCity")%>'
                                                                                    Visible="false" />
                                                                                <span id="splblOtherCity" runat="server">
                                                                                    <asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("OtherCities")%>' />
                                                                                </span>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Attachments">
                                                                            <ItemTemplate>
                                                                                <asp:Label runat="server" ID="lblComments" Text='<%#Eval("Comments")%>' Visible="false" />
                                                                                <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                    Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                <asp:HiddenField ID="lblAtt" runat="server" Value='<%#Eval("AttachmentCnt") %>' />
                                                                                <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("ExpLineNo") %>' />
                                                                                <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                <asp:HiddenField ID="hdnBalAfterPO" runat="server" Value='<%#Eval("balanceAfterpo") %>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width:150px"><label>
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
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </asp:Panel>
                                            <div class="action" id="dvSave" runat="server">
                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" OnClick="btnSubmit_Click" Visible="false"></asp:Button>
                                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue" OnClick="btnReset_Click"></asp:Button>
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 90%;">
                                                                <h2 class="pophead">Attachments</h2>
                                                            </td>
                                                            <td align="right" style="width: 10%">
                                                                <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
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
                                                                <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="button button-blue"
                                                                    OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <asp:HiddenField ID="hdnAttIdsRet" runat="server" />
                                                    <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground1" CancelControlID="btnAttClose">
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
                                                                <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RetainAttDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete this Attachment?</label>
                                                        </small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                            TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground2">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddEdit" runat="server" DefaultButton="btnSaveExp" Style="display: none;">
                                            <div class="main-content" id="DivEdit" runat="server" style="margin: 0px 0px 0px -15px; background-color: White; padding: 0 0px 10px 0px; width: 110%; min-height: 200px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblPopHeading" runat="server"> </asp:Label></h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSaveExp" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSaveExp_Click" />
                                                                <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="btnDelete_Click" />
                                                                <asp:Button ID="btnAppend" runat="server" Text="Done" CssClass="buttonnew-blue" OnClick="btnAppend_Click" />
                                                                <asp:Button ID="btnCancel" runat="server" Text="Cancel" CssClass="buttonnew-blue" OnClick="btnCancel_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <b>
                                                            <div id="dvExpError" runat="server" style="color: Red; font-weight: bold">
                                                            </div>
                                                        </b>
                                                        <div style="text-align: right">
                                                            <asp:Button ID="btnPrev" runat="server" Text="Previous" CssClass="buttonnew-blue" OnClick="PreviousExp" />
                                                            <asp:Button ID="btnNext" runat="server" Text="Next" CssClass="buttonnew-blue" OnClick="NextExp" />
                                                        </div>
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
                                                                                            OnSelectedIndexChanged="ddlJobs_SelectedIndexChanged" Width="150px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditPhs" runat="server" style="display: none; float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Phase Code</label></small><br />
                                                                                        <asp:DropDownList ID="ddlEditPhases" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            OnSelectedIndexChanged="ddlPhases_SelectedIndexChanged" Width="150px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditJC" runat="server" style="display: none; float: left">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Job Category</label></small><br />
                                                                                        <asp:DropDownList ID="ddlEditCategories" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            Width="150px">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvAccCode" runat="server" style="float: left">
                                                                                        <small>
                                                                                            <label><em>*</em>Account Name</label>
                                                                                        </small>
                                                                                        <br />
                                                                                        <asp:DropDownList ID="ddlAccountCodes" runat="server" DataTextField="AccountClss" DataValueField="ExpCode" Width="150px" AutoPostBack="true" OnSelectedIndexChanged="AccountCodeChanged"></asp:DropDownList>
                                                                                        <asp:HiddenField ID="hdnCodeValue6" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCodeValue5" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCodeValue4" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCodeValue3" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCodeValue2" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCodeValue1" runat="server" />
                                                                                        <asp:HiddenField ID="hdnExpItem" runat="server" />
                                                                                        <asp:HiddenField ID="hdnAtt" runat="server" />
                                                                                        <asp:HiddenField ID="hdnAcc" runat="server" />
                                                                                        <small>
                                                                                            <p>
                                                                                                <asp:CheckBox ID="chkReimb" runat="server" Text="Reimbursable" Enabled="false" TextAlign="right" Width="110px" />
                                                                                            </p>
                                                                                        </small>
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
                                                                                    <asp:TextBox runat="server" ID="txtEditExpDate" class="date"
                                                                                        onkeydown="if(document.getElementById('txtEditPreAmnt').disabled == false){TabIndex('txtEditPreAmnt', event);}else{TabIndex('txtEditActAmnt', event);}" />
                                                                                    <cc1:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtEditExpDate" Format="MM/dd/yyyy" CssClass="cal_Theme1">
                                                                                    </cc1:CalendarExtender>
                                                                                </div>
                                                                                <div id="dvEditFD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>From Date</label></small><br />
                                                                                    <asp:TextBox ID="txtEditFromdate" runat="server" class="date"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditTD" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>To Date</label></small><br />
                                                                                    <asp:TextBox ID="txtEditTodate" runat="server" class="date"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditCV" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>City visited</label></small><br />
                                                                                    <asp:TextBox ID="txtCityVisited" runat="server"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdnVendors" runat="server" />
                                                                                </div>
                                                                                <div id="dvEditFromcity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>From City</label></small><br />
                                                                                    <asp:TextBox ID="txtFromCity" runat="server" OnTextChanged="CitiesTextChanged" AutoPostBack="true"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditToCity" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>To City</label></small><br />
                                                                                    <asp:TextBox ID="txtToCity" runat="server"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvLocalLocation" runat="server" style="float: left; display: none">
                                                                                    <small>
                                                                                        <label>
                                                                                            Location</label></small><br />
                                                                                    <asp:TextBox ID="txtEditLocalLocation" runat="server" Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvChkOutOfCity" runat="server" style="float: left; display: none">
                                                                                    <small>
                                                                                        <asp:CheckBox ID="chkIsOutOfCity" runat="server" Text="Out Of City" TextAlign="Right"
                                                                                            onclick="javascript: onchangeoutofcity('chkIsOutOfCity');" />
                                                                                    </small>
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
                                                                                </div>
                                                                                <div id="dvEditAgName" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Agent Name</label></small><br />
                                                                                    <asp:TextBox ID="txtEditAgentName" runat="server"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditItNo" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Itinerary Number</label></small><br />
                                                                                    <asp:TextBox ID="txtEditItNo" runat="server"></asp:TextBox>
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
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <asp:HiddenField ID="hdnCmpCar" runat="server" />
                                                                                <asp:HiddenField ID="hdnPrsnCar" runat="server" />
                                                                                <div id="dvEditTT" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Total Trip</label></small><br />
                                                                                    <asp:TextBox ID="txtEditTotTrip" runat="server" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditLN" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            LessNorm</label></small><br />
                                                                                    <asp:TextBox ID="txtEditLNorm" runat="server" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditReimbt" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Reimbursement</label></small><br />
                                                                                    <asp:TextBox ID="txtEditReimbt" runat="server"></asp:TextBox>
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
                                                                                    <asp:TextBox runat="server" ID="txtEditPreAmnt"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditAmt" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Total Amount (with Tax)</label></small><br />
                                                                                    <asp:TextBox runat="server" ID="txtEditActAmnt" onkeyup='javascript:CalcExpenseBudget(1);' onchange='javascript:CalcExpenseBudget(2);' />
                                                                                </div>
                                                                                <div id="dvEditPM" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Payment Mode</label></small><br />
                                                                                    <asp:DropDownList ID="ddlEditPaymentType" runat="server" DataTextField="Description" DataValueField="Description" Width="150px">
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
                                                                <td style="vertical-align: top; width: 40%">
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
                                                                                            <asp:HiddenField ID="hdnYear" runat="server" />
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
                                                                <td style="vertical-align: top; width: 60%">
                                                                    <table class="tableatt">
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                    <div style="float:left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Add Attachment</label></small>
                                                                                    <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server"
                                                                                        UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete"
                                                                                        OnClientUploadComplete="showConfirmation" style="border: 1px solid #aaaaaa" Width="200px"/>
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
                                                                                    <asp:HiddenField ID="hdnPPM" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCPM" runat="server" />
                                                                                    <asp:Label ID="lblEditAtt" runat="server" Style="display: none"></asp:Label>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding-top:10px">
                                                                                <div>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:LinkButton ID="LnkcurrAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                                    Text="View Current Attachments" Style="margin-top: 13px; width: 145px" CssClass="button button-blue"></asp:LinkButton>
                                                                                                <asp:Label ID="lblEAttMsg" runat="server"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:LinkButton ID="lnkShowDraft" runat="server" CommandArgument="test" OnClick="DisplayDrafts"
                                                                                                    Width="115px" Text="Attach from Drafts" ToolTip="Click to import attachments from Drafts"
                                                                                                    CssClass="button button-blue"></asp:LinkButton>
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="main-content" id="DivView" runat="server" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 200px; width: 110%">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="90%" style="vertical-align: top">
                                                                <h2 class="pophead">View Expense</h2>
                                                            </td>
                                                            <td width="10%" align="right">
                                                                <asp:Button ID="btnVCancel" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnVCancel_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <div style="text-align: right">
                                                            <asp:Button ID="btnVPrev" runat="server" Text="Previous" CssClass="buttonnew-blue" OnClick="ViewPreviousExp" />
                                                            <asp:Button ID="btnVNext" runat="server" Text="Next" CssClass="buttonnew-blue" OnClick="ViewNextExp" />
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
                                                                                <div id="dvEditVItem" runat="server" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Account Name:</label></small><br />
                                                                                    <asp:TextBox ID="lblVExpCd" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                    <small>
                                                                                        <p>
                                                                                            <asp:CheckBox ID="chkVReimb" runat="server" Enabled="false" Text="Reimbursable" TextAlign="Right" />
                                                                                        </p>
                                                                                    </small>
                                                                                </div>
                                                                                <div id="dvVAccCode" style="float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Account Code:</label></small><br />
                                                                                    <asp:TextBox ID="txtVAccCode" runat="server"></asp:TextBox>
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
                                                            <%--<tr>
                                                                <td colspan="2">
                                                                    <div class="subheader" style="width: 1140px; margin-top: -10px">
                                                                        <h4>Expense Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>--%>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td width="100%">
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
                                                                                            Preferred Vendor:</label></small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVPreVendor" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVAgName" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Agent Name:</label></small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblAgName" runat="server" ReadOnly="true">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVItNo" runat="server" style="display: none; float: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Itinerary number:
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
                                                                        <%--<tr>
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
                                                                                            <asp:TextBox runat="server" ID="txtVExpBudg" CssClass="budgfld" />
                                                                                            <asp:HiddenField ID="hdnVYear" runat="server" />
                                                                                            <asp:HiddenField ID="hdnVExpRowTotAmnt" runat="server" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Current Balance</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpCurrBal" CssClass="budgfld" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Remaining$</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpRemBudg" CssClass="budgfld" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <small>
                                                                                                <label>
                                                                                                    Bal. After Expense</label></small><br />
                                                                                            <asp:TextBox runat="server" ID="txtVExpBalAfter" CssClass="budgfld" />
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
                                                                                    <asp:Label ID="lblViewAtt" runat="server"></asp:Label>
                                                                                    <asp:LinkButton ID="LinkViewAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                                        Text="View Current attachments"></asp:LinkButton>
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
                                        <asp:LinkButton ID="lnkEdit" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Edit" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                                            TargetControlID="lnkEdit" BackgroundCssClass="modalBackground">
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
                                                                <asp:Button ID="btnImport" runat="server" Text="Import" CssClass="buttonnew-blue" OnClick="btnImport_Click" />&nbsp;&nbsp;&nbsp;
                                                            <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnClose_Click" />
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
                                                        <asp:Button ID="btnUpload" runat="server" Text="Import" CssClass="buttonnew-blue" OnClick="btnUpload_Click" />
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div id="dvGirdCC">
                                                            <isx:CoolGridView ID="gvCC" runat="server" AutoGenerateColumns="false" Width="981px" Height="300px"
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
                                                                    <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ControlStyle-Width="170px">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label>
                                                                            <asp:DropDownList ID="ddlCCExpItems" runat="server" DataTextField="AccountClss" DataValueField="ExpCode"
                                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlCCExpItems_SelectedIndexChanged">
                                                                            </asp:DropDownList>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Posted Date" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <%# string.IsNullOrEmpty(Eval("Posted Date").ToString()) ? string.Empty : Convert.ToDateTime(Eval("Posted Date")).ToShortDateString()%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <%# Eval("Payee")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Reference Amount" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                        <ItemTemplate>
                                                                            <%# Eval("Amount")%>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                             <asp:Label ID="lblCCBudget" runat="server"/>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <asp:Label ID="lblCCCurrBalance" runat="server"/>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                              <asp:Label ID="lblCCRemaining" runat="server"/>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                                    <asp:Label ID="lblCCBalAfterExp" runat="server"/>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </isx:CoolGridView>
                                                        </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCC" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_CC" runat="server" DropShadow="false" PopupControlID="pnlCC"
                                            TargetControlID="lnkCC" BackgroundCssClass="modalBackground">
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
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>Are you sure you want to delete this item?</label>
                                                    </small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDraftAtt" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 60%;">
                                                                <h2 class="pophead">Drafts</h2>
                                                            </td>
                                                            <td align="right" style="width: 40%">
                                                                <asp:Button ID="btnDftOk" runat="server" OnClick="SelectDrafts" Text="Ok" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnDraftsClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvDrftErr" runat="server">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvDrafts" runat="server" Width="380px" Height="250px"
                                                                        AutoGenerateColumns="false" GridLines="None" ShowHeader="true" ShowFooter="true"
                                                                        OnRowDataBound="gvDrafts_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField>
                                                                                <HeaderTemplate>
                                                                                    <strong>Attachment</strong>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                    <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                                                    <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdAtt" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField>
                                                                                <HeaderTemplate>
                                                                                    <strong>Description</strong>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <%#Eval("compCode")%>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField>
                                                                                <HeaderTemplate>
                                                                                    <asp:CheckBox ID="checkAll" runat="server" CssClass="chkHeader" />
                                                                                    Select All
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkgvDft" runat="server" CssClass="chkItem" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                                <td>
                                                                    <div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDraftAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDraftsAtt" runat="server" DropShadow="false" PopupControlID="pnlDraftAtt"
                                            TargetControlID="lnkDraftAtt" BackgroundCssClass="modalBackground1" CancelControlID="btnDraftsClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnldelAddedDrft" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert!</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnDelDrft" runat="server" OnClick="ConfirmDraftDel" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCancelDelDrft" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>
                                                            your changes will be lost if you close without saving.</label></small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDelAddDrft" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlertDrftDel" runat="server" DropShadow="false" PopupControlID="pnldelAddedDrft"
                                            TargetControlID="lnkDelAddDrft" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelDelDrft">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddVendor" runat="server" Style="display: none;"
                                            DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 1200px; height: 400px;">
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
                                                                <asp:Button ID="btnVendColse" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnVendClose_Click"></asp:Button>
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
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="lbl"></td>
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
                                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnVendC" runat="server" OnClick="CreateVendor" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnVendNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="btnVendNo_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="form_edit" style="border: 1px solid #0099CC; padding: 20px;">
                                                        <small>
                                                            <label>
                                                                This vendor doesnot exist in the Vendor list, Do you want to add this vendor to List?</label>
                                                        </small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkConfVendAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popVendCreatAlert" runat="server" DropShadow="false"
                                            PopupControlID="pnlVendCreatAlert" TargetControlID="lnkConfVendAlert" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddExpItem" runat="server" DefaultButton="btnAddExpItemSave" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 510px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Add Account Name</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnAddExpItemSave" runat="server" OnClick="btnAddExpItemSave_Click" Text="Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnAddExpItemCancel" runat="server" OnClick="btnAddExpItemCancel_Click" Text="Cancel" CssClass="buttonnew-blue" />
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
                                        <asp:Panel ID="pnlAddOnBehalfOf" runat="server" DefaultButton="btnAddOnBehalfOf" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 540px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 15%;">
                                                                <h2 class="pophead">Create</h2>
                                                            </td>
                                                            <td align="right" style="width: 85%">
                                                                <asp:Button ID="btnAddOnBehalfOf" runat="server" OnClick="btnAddOnBehalfOf_Click" Text="Yes, the name is accurate" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCancelOnBehalfOf" runat="server" Text="No! I want to change the name" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>
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
                                        <asp:Panel ID="pnlSimilarVendAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnSimilarVendAlertYes" runat="server" OnClick="btnSimilarVendAlertYes_Click" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnSimilarVendAlertNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <small>
                                                        <label>The selected vendor has been already paid this amount? Are you sure you want to continue?</label>
                                                    </small>
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkSimilarVendAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popSimilarVendAlert" runat="server" DropShadow="false" PopupControlID="pnlSimilarVendAlert"
                                            TargetControlID="lnkSimilarVendAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnSimilarVendAlertNo">
                                        </cc1:ModalPopupExtender>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </section>
                        </div>
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
