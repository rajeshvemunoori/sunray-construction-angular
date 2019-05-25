<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CSNewExpense.aspx.cs" Inherits="CSNewExpense" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
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
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - New Expense</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
     <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="latestdesign/css/reset.css"/>
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css"/>
    <script src="js/html5shiv.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
      <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/jquery.menu-aim.js"></script>
     <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
    
    <script src="latestdesign/js/main.js"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></scrip
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

        //Validations Begin

        function refreshNotes() {
            window.location = window.location;
        }

        function DoOnAjaxPostback() {
            setupDatePicker();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            //document.getElementById('fupd1').className = 'multi';

            $(function () {
                $("#ddlEditCity").ufd({ log: true });
            });
            $(function () {
                $("#ddlEditFromcity").ufd({ log: true });
            });
            $(function () {
                $("#ddlEditTocity").ufd({ log: true });
            });
            $(function () {
                $("#ddlEditExpenseItem").ufd({ log: true });
            });
        }

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function pageLoad() {
            //$("#fupd1").MultiFile();
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


    </script>
    <script type="text/javascript" language="javascript">
        function callservermethod(orgId, managerId, managerEmail, compCode, selectedUserId, currency) {
            //alert('success');
            document.getElementById('lblManager').innerHTML = managerEmail;
            document.getElementById('hdnManagerId').value = managerId;
            document.getElementById('hdnManagerEmail').value = managerEmail;
            document.getElementById('hdnCompCode').value = compCode;
            document.getElementById('hdnSelectedUserID').value = selectedUserId;
            document.getElementById('hdnCurrency').value = currency;
            PageMethods.getRequestId(orgId, compCode, OnSuccess, OnFailure);
        }
        function OnSuccess(result) {
            if (result) {
                document.getElementById('lblReqId').innerHTML = result;
                document.getElementById('hdnReqID').value = result;
                getApprovalLimit();
            }
        }
        function OnFailure(error) {

        }

        function getApprovalLimit() {
            PageMethods.getApprovalLimit(document.getElementById('hdnSelectedUserID').value, 1, OnApprovalSuccess, OnApprovalFailure);
        }

        function OnApprovalSuccess(result) {
            if (result) {
                document.getElementById('hdnMaxApprLimit').value = result;
            }
        }

        function OnApprovalFailure(error) {
            alert(error);
        }
    </script>
    <style>
        .tablestyle {
            font-size: 50;
            font-family: Calibri;
        }

        .rowheader {
            background-color: #4F81BD;
            font-weight: bold;
        }

        .rowcolor1 {
            background-color: #D0D8E8;
            height: 35px;
        }

        .rowcolor2 {
            background-color: #E9EDF4;
            height: 35px;
        }

        .rowheight {
            height: 30px;
        }

        .btn {
            background-color: #B13835;
            color: #FFFF00;
            font-weight: bold;
            border: 0px solid #aaa;
            border-collapse: separate;
            border-spacing: 0;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            -khtml-border-radius: 5px;
            border-radius: 5px;
        }

        .normal {
            background-color: white;
        }

        .highlight {
            background-color: #cccccc;
        }

        .rowcolor {
            background-color: #EEB4B4;
        }

        .modalBackground {
            background-color: #F8F8F8;
            filter: alpha(opacity=70);
            opacity: 0.9;
            position: absolute;
            z-index: 999999 !important;
        }

        .modalBackground1 {
            position: absolute;
            background-color: #F8F8F8;
            filter: alpha(opacity=70);
            opacity: 0.7;
            z-index: 3000000 !important;
        }

        .subheader {
            color: #fff;
            font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';
            font-size: 13px;
            line-height: 20px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        label {
            /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        label1 {
            /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .Cpagination {
            line-height: 50px;
        }

            .Cpagination td {
                border-width: 0;
                padding: 0 2px; /*font-weight: bold;*/
                color: #fff;
            }

            .Cpagination a:hover {
                border: solid 1px #486694;
                text-decoration: none;
            }

            .Cpagination span {
                padding: 2px 6px 2px 6px;
                border: solid 1px #9ECDE7;
                text-decoration: none;
                white-space: nowrap;
                background: #486694;
                background-color: White;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: #555;
                text-shadow: 1 1px 0 #fff;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
            }

            .Cpagination:hover {
                text-decoration: none;
            }

            .Cpagination a, .Cpagination a:visited {
                background: #f1f1f1;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: #555;
                text-shadow: 1 1px 0 #fff;
                text-decoration: none;
                padding: 2px 6px 2px 6px;
                white-space: nowrap;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
                background: #ececec;
                background: -webkit-gradient(linear, left top, left bottom, from(#e1e1e1), to(#c1c1c1));
                background: -moz-linear-gradient(top, #e1e1e1, #c1c1c1);
                -pie-background: linear-gradient(top, #e1e1e1, #c1c1c1);
            }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        .radioButtonList td {
            vertical-align: bottom;
            text-align: right;
        }

        .radioButtonList input[type="radio"] {
            float: right;
            margin: 3px -40px 0px -50px;
        }

        .radioButtonList label {
            width: 150px;
            display: block;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain input {
                width: 135px;
            }

            .tablemain label {
                /*font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';*/
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
                }

        .Grid td {
            background-color: #A1DCF2;
            color: black;
            font-size: 10pt;
            line-height: 200%;
        }

        .Grid th {
            background-color: #3AC0F2;
            color: White;
            font-size: 10pt;
            line-height: 200%;
        }

        .ChildGrid td {
            background-color: #eee !important;
            color: black;
            font-size: 10pt;
            line-height: 200%;
        }

        .ChildGrid th {
            background-color: #6C6C6C !important;
            color: White;
            font-size: 10pt;
            line-height: 200%;
        }

        .Nested_ChildGrid td {
            background-color: #fff !important;
            color: black;
            font-size: 10pt;
            line-height: 200%;
        }

        .Nested_ChildGrid th {
            background-color: #2B579A !important;
            color: White;
            font-size: 10pt;
            line-height: 200%;
        }

        nav ul {
            list-style: none;
        }
    </style>
    <script type="text/javascript">
        $(function () {
            $("[id*=imgOrdersShow]").each(function () {
                if ($(this)[0].src.indexOf("minus") != -1) {
                    $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>");
                    $(this).next().remove();
                }
            });
            $("[id*=imgProductsShow]").each(function () {
                if ($(this)[0].src.indexOf("minus") != -1) {
                    $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>");
                    $(this).next().remove();
                }
            });
        });
    </script>
</head>

<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <asp:ScriptManager ID="Scr1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        
 <!--header-->
        <uc2:top ID="top1" runat="server" />
 <!--header-->
        
 <div class="row ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>

  <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style="padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >

                <section class="main-section grid_7" style="padding-top: 0px">
                    <div class="main-content grid_4" style="width: 1000px; margin-left: 0;">
                        <header>
                            <h2>
                                Create New Expense
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
                                    <%--<asp:PostBackTrigger ControlID="btnAppend" />
                                    <asp:PostBackTrigger ControlID="btnUpload" />
                                    <asp:PostBackTrigger ControlID="btnSaveExp" />--%>
                                </Triggers>
                                <ContentTemplate>
                                    <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                    <div>
                                        <table width="95%" border="0" cellpadding="2" cellspacing="5" style="font-size: 12px;"
                                            align="left">
                                            <tr>
                                                <td valign="top" height="430px" width="150px" runat="server" id="tdDynMenu">
                                                    <%--<div id="dvDynMenu" runat="server" style="overflow-x: hidden; overflow-y: auto; border: 1px solid #0099CC;
                        vertical-align: top;">
                    </div>--%>
                                                    <div style="overflow-x: hidden; overflow-y: auto; border: 0px solid #0099CC; vertical-align: top;
                                                        height: 430px;">
                                                        <asp:GridView ID="gvCustomers" runat="server" Width="150px" AutoGenerateColumns="false"
                                                            ShowHeader="False" CssClass="Grid">
                                                            <Columns>
                                                                <asp:TemplateField>
                                                                    <ItemTemplate>
                                                                        <asp:ImageButton ID="imgOrdersShow" runat="server" OnClick="Show_Hide_OrdersGrid"
                                                                            ImageUrl="images/plus.png" CommandArgument="Show" />
                                                                        <asp:Label ID="lblOrgname" runat="server" Text='<%#Eval("orgname") %>' />
                                                                        <asp:Label ID="lblCompname" runat="server" Text='<%#Eval("compname") %>' />
                                                                        <asp:Label ID="hdnMOrgId" runat="server" Visible="false" Text='<%#Eval("orgid") %>' />
                                                                        <asp:Panel ID="pnlOrders" runat="server" Visible="false">
                                                                            <asp:GridView ID="gvOrders" runat="server" Width="200px" AutoGenerateColumns="false"
                                                                                CssClass="ChildGrid" ShowHeader="False">
                                                                                <Columns>
                                                                                    <asp:TemplateField>
                                                                                        <ItemTemplate>
                                                                                            <asp:ImageButton ID="imgProductsShow" runat="server" OnClick="Show_Hide_ProductsGrid"
                                                                                                ImageUrl="images/plus.png" CommandArgument="Show" />
                                                                                            <%#Eval("username") %>&nbsp;(<%#Eval("draftcnt")%>)
                                                                                            <asp:Panel ID="pnlProducts" runat="server" Visible="false">
                                                                                                <asp:GridView ID="gvProducts" runat="server" AutoGenerateColumns="false" CssClass="Nested_ChildGrid"
                                                                                                    ShowHeader="false" OnRowDataBound="gvProducts_RowDataBound" OnRowCreated="gvProducts_RowCreated">
                                                                                                    <Columns>
                                                                                                        <asp:TemplateField>
                                                                                                            <ItemTemplate>
                                                                                                                <asp:ImageButton ID="imgEdit" runat="server" OnClick="Edit_ProductsGrid" ImageUrl="images/icons/pencil.png"
                                                                                                                    CommandArgument="Show" />
                                                                                                                <asp:Label ID="lblFileName" runat="server" Text='<%#Eval("filename") %>' />
                                                                                                                <asp:Label ID="lblAttachmentId" runat="server" Visible="false" Text='<%#Eval("attachmentId") %>' />
                                                                                                                <asp:HiddenField ID="hdnFilename" runat="server" Value='<%#Eval("filename") %>' />
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <%--<asp:BoundField DataField="attachmentId" HeaderText="Draft Id" />
                                                    <asp:BoundField DataField="filename" HeaderText="file name" />
                                                    <asp:BoundField ItemStyle-Width="50px" DataField="filename" HeaderText="Description" />--%>
                                                                                                    </Columns>
                                                                                                </asp:GridView>
                                                                                            </asp:Panel>
                                                                                            <asp:HiddenField ID="hdnCompCode" runat="server" Value='<%#Eval("compcode") %>' />
                                                                                            <asp:HiddenField ID="hdnUserId" runat="server" Value='<%#Eval("userid") %>' />
                                                                                            <asp:HiddenField ID="hdnOrgId" runat="server" Value='<%#Eval("orgid") %>' />
                                                                                            <asp:HiddenField ID="hdnsCurrency" runat="server" Value='<%#Eval("currency") %>' />
                                                                                            <asp:HiddenField ID="hdnManagersId" runat="server" Value='<%#Eval("managerid") %>' />
                                                                                            <asp:HiddenField ID="hdnManagersEmail" runat="server" Value='<%#Eval("email") %>' />
                                                                                            <asp:HiddenField ID="hdnDeptCodes" runat="server" Value='<%#Eval("deptcode") %>' />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>
                                                                                </Columns>
                                                                            </asp:GridView>
                                                                        </asp:Panel>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <%--<asp:BoundField DataField="orgname" HeaderText="Org Name" />
            <asp:BoundField DataField="compname" HeaderText="Comp Name" />--%>
                                                            </Columns>
                                                        </asp:GridView>
                                                    </div>
                                                </td>
                                                <td valign="top">
                                                    <table width="90%" border="0" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td valign="top">
                                                                <table width="100%" border="0" cellpadding="3" cellspacing="2" style="border: 1px solid #0099CC;">
                                                                    <tr class="rowcolor1">
                                                                        <td colspan="2" style="width: 100%">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td style="width: 30%">
                                                                                        &nbsp;<b>Request ID</b>&nbsp;:&nbsp;<asp:Label ID="lblReqId" runat="server"></asp:Label>
                                                                                        <asp:HiddenField ID="hdnReqID" runat="server" />
                                                                                    </td>
                                                                                    <td style="width: 30%">
                                                                                        <b>Organization:</b> &nbsp;
                                                                                        <asp:Label ID="lblOrg" runat="server"></asp:Label>
                                                                                    </td>
                                                                                    <td style="width: 30%">
                                                                                        <b>Company:</b> &nbsp;
                                                                                        <asp:Label ID="lblComp" runat="server"></asp:Label>
                                                                                    </td>
                                                                                    <td style="width: 10%" align="right">
                                                                                        <asp:Button ID="btnSave" Visible="false" runat="server" Text="SAVE" OnClick="btnSave_Click"
                                                                                            CssClass="button button-blue" />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="rowcolor2">
                                                                        <td style="width: 40%">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <b>Expense Type</b>&nbsp;:
                                                                                    </td>
                                                                                    <td>
                                                                                        Expense Request
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td style="width: 40%">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <b>Manager</b>&nbsp;:
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:Label ID="lblManager" runat="server"></asp:Label>
                                                                                        <asp:HiddenField ID="hdnManagerEmail" runat="server" />
                                                                                        <asp:HiddenField ID="hdnSelectedOrgid" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCurrency" runat="server" />
                                                                                        <asp:HiddenField ID="hdnManagerId" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCompCode" runat="server" />
                                                                                        <asp:HiddenField ID="hdnSelectedUserID" runat="server" />
                                                                                        <asp:HiddenField ID="hdnMaxApprLimit" runat="server" />
                                                                                        <asp:HiddenField ID="hdnTotalActAmnt" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCurrExpAmnt" runat="server" />
                                                                                        <asp:HiddenField ID="hdnDraftId" runat="server" />
                                                                                        <asp:HiddenField ID="hdnPrevSelOrgId" runat="server" Value="0" />
                                                                                        <asp:HiddenField ID="hdnDeptCode" runat="server" />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="rowcolor1">
                                                                        <td style="width: 50%">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right" nowrap>
                                                                                        <b>Start Date</b>&nbsp;:
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtTripStartDate" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                                        <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                                        <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                                        <asp:HiddenField ID="ReqID" runat="server" />
                                                                                        <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td style="width: 40%">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="right">
                                                                                        <b>Purpose</b>&nbsp;:
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtPurpose" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td valign="top">
                                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin: 10px 0 10px 0">
                                                                    <tr>
                                                                        <td width="40%" valign="top" id="tdLineItems" runat="server">
                                                                            <table width="95%" style="border: 1px solid #0099CC;">
                                                                                <tr>
                                                                                    <td valign="top">
                                                                                        <asp:GridView ID="gvShowExpItems" runat="server" AutoGenerateColumns="False" Width="100%"
                                                                                            OnRowDataBound="gvShowExpItems_RowDataBound" OnSelectedIndexChanged="gvShowExpItems_SelectedIndexChanged"
                                                                                            OnRowCreated="gvShowExpItems_RowCreated">
                                                                                            <HeaderStyle HorizontalAlign="Left" BackColor="#D0D8E8" Font-Bold="true" />
                                                                                            <RowStyle Height="35px" />
                                                                                            <AlternatingRowStyle BackColor="#EFF3EA" />
                                                                                            <Columns>
                                                                                                <asp:TemplateField>
                                                                                                    <HeaderTemplate>
                                                                                                        <table width="100%">
                                                                                                            <tr>
                                                                                                                <td width="80%">
                                                                                                                    Exp Lines
                                                                                                                </td>
                                                                                                                <td align="right">
                                                                                                                    <%--<a href="#" class="button button-blue" runat="server"><span class="add"></span></a>
                                                                                    <asp:Button ID="btnAdd" runat="server" CssClass="button button-blue" OnClick="btnAdd_Click" Text="+"></asp:Button>--%>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </HeaderTemplate>
                                                                                                    <ItemTemplate>
                                                                                                        <asp:Label ID="lblExpItems" runat="server"></asp:Label>
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                        </asp:GridView>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td width="60%" valign="top">
                                                                            <div style="border: 1px solid #0099CC; height: 350px; overflow-x: hidden; overflow-y: auto;
                                                                                width: 100%">
                                                                                <table style="padding: 3px; width: 100%" cellpadding="0" cellspacing="0">
                                                                                    <tr style="background-color: #D0D8E8;">
                                                                                        <td style="width: 25%" class="rowheight">
                                                                                            <strong>Line Details</strong>
                                                                                        </td>
                                                                                        <td style="width: 75%" align="right">
                                                                                            <asp:Button ID="btnDelete" runat="server" Text="DELETE" OnClick="DeleteExpItem" Visible="false"
                                                                                                CssClass="button button-blue" />&nbsp;
                                                                                            <asp:Button ID="btnAppend" runat="server" Text="ADD" OnClick="btnAppend_Click" Visible="false"
                                                                                                CssClass="button button-blue" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2">
                                                                                            <div id="dvError" runat="server">
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr class="rowheight">
                                                                                        <td>
                                                                                            <strong>Line No</strong>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:Label ID="lblLineNO" runat="server"></asp:Label>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <div id="divExptype" runat="server">
                                                                                        <div id="dvEditType" style="float: left">
                                                                                            <tr class="rowheight">
                                                                                                <td>
                                                                                                    Expense Type
                                                                                                </td>
                                                                                                <td>
                                                                                                    <asp:DropDownList ID="ddlEditExpType" runat="server" DataValueField="Description"
                                                                                                        onkeydown="if(document.getElementById('ddlEditJobs').disabled == false){TabIndex('ddlEditJobs', event);}else{TabIndex('ddlEditExpenseItem', event);}"
                                                                                                        DataTextField="Description" Width="160px" AutoPostBack="true" OnSelectedIndexChanged="ddlExpType_SelectedIndexChanged">
                                                                                                    </asp:DropDownList>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                        <div id="dvEditJob" runat="server" visible="false" style="float: left">
                                                                                            <tr class="rowheight">
                                                                                                <td>
                                                                                                    Job Code
                                                                                                </td>
                                                                                                <td>
                                                                                                    <asp:DropDownList ID="ddlEditJobs" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                                        onkeydown="TabIndex('ddlEditPhases', event)" Width="160px" AutoPostBack="true"
                                                                                                        OnSelectedIndexChanged="ddlJobs_SelectedIndexChanged">
                                                                                                    </asp:DropDownList>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                        <div id="dvEditPhs" runat="server" visible="false" style="float: left">
                                                                                            <tr class="rowheight">
                                                                                                <td>
                                                                                                    Phase Code
                                                                                                </td>
                                                                                                <td>
                                                                                                    <asp:DropDownList ID="ddlEditPhases" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                                        onkeydown="TabIndex('ddlEditCategories', event)" Width="160px" AutoPostBack="true"
                                                                                                        OnSelectedIndexChanged="ddlPhases_SelectedIndexChanged">
                                                                                                    </asp:DropDownList>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                        <div id="dvEditJC" runat="server" visible="false" style="float: left">
                                                                                            <tr class="rowheight">
                                                                                                <td>
                                                                                                    Job Category
                                                                                                </td>
                                                                                                <td>
                                                                                                    <asp:DropDownList ID="ddlEditCategories" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                                        onkeydown="TabIndex('ddlEditExpenseItem', event)" Width="160px">
                                                                                                    </asp:DropDownList>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                        <div id="dvEditItem" style="float: left">
                                                                                            <tr class="rowheight">
                                                                                                <td>
                                                                                                    Expense Item
                                                                                                </td>
                                                                                                <td>
                                                                                                    <asp:DropDownList ID="ddlEditExpenseItem" onkeydown="TabIndex('txtEditExpDate', event)"
                                                                                                        runat="server" DataTextField="ExpItem" DataValueField="ExpItem" Width="160px"
                                                                                                        AutoPostBack="true" OnSelectedIndexChanged="ddlExpenseItem_SelectedIndexChanged"
                                                                                                        name="ddlEditExpenseItem">
                                                                                                    </asp:DropDownList>
                                                                                                    <asp:HiddenField ID="hdnCodeValue6" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCodeValue5" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCodeValue4" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCodeValue3" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCodeValue2" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCodeValue1" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnExpItem" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnAtt" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnAcc" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnPPM" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnCPM" runat="server" />
                                                                                                    <asp:HiddenField ID="hdnReimt" runat="server" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="dvEditED" runat="server" visible="false" style="width: 17%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Expense Date
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox runat="server" ID="txtEditExpDate" type="date" name="date" class="date"
                                                                                                    onkeydown="if(document.getElementById('txtEditPreAmnt').disabled == false){TabIndex('txtEditPreAmnt', event);}else{TabIndex('txtEditActAmnt', event);}"
                                                                                                    Width="170px" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditFD" runat="server" visible="false" style="width: 17%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                From Date
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditFromdate" runat="server" type="date" name="date" class="date"
                                                                                                    Width="170px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditTD" runat="server" visible="false" style="width: 17%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                To Date
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditTodate" runat="server" type="date" name="date" class="date"
                                                                                                    Width="170px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditCV" runat="server" visible="false" style="width: 17%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                City visited
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditCity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                                    AutoPostBack="true" OnSelectedIndexChanged="CitiesSelectedIndexChanged" Width="170px"
                                                                                                    Height="21px" name="ddlEditCity" ClientIDMode="Static">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditOtherCity" runat="server" visible="false" style="width: 17%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Enter City
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox runat="server" ID="txtEditOtherCity" Width="170px" onkeydown="TabIndex('txtEditComments', event)" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditFromcity" runat="server" visible="false" style="width: 16%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                From City
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditFromcity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                                    AutoPostBack="true" OnSelectedIndexChanged="CitiesSelectedIndexChanged" Width="170px"
                                                                                                    name="ddlEditFromcity" ClientIDMode="Static">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditFromOther" runat="server" visible="false" style="width: 16%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Other City
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditOtherFromCity" runat="server" Width="170px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditToCity" runat="server" visible="false" style="width: 16%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                To City
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditTocity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                                    Width="170px" name="ddlEditTocity" ClientIDMode="Static">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditToOther" runat="server" visible="false" style="width: 16%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Other City
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditOtherToCity" runat="server" Width="170px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvLocalLocation" runat="server" visible="false" style="width: 16%; float: left;">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Location
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditLocalLocation" runat="server" Width="170px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvChkOutOfCity" runat="server" visible="false" style="width: 16%; float: left;">
                                                                                        <tr class="rowheight">
                                                                                            <td colspan="2">
                                                                                                <asp:CheckBox ID="chkIsOutOfCity" runat="server" class="form3Checkbox1" Width="130px"
                                                                                                    Style="margin-left: -50px" onclick="javascript: onchangeoutofcity('chkIsOutOfCity');" />
                                                                                                Out Of City
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditVendor" runat="server" visible="false" style="width: 25%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Preferred Vendor
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditPreVendor" runat="server" DataTextField="Description"
                                                                                                    AutoPostBack="true" DataValueField="Description" Width="200px" OnSelectedIndexChanged="ddlEditPreVendor_SelectedIndexChanged">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditAgName" runat="server" visible="false" style="width: 23%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Agent Name
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditAgName" runat="server" DataTextField="Description" DataValueField="Description"
                                                                                                    Width="200px">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditItNo" runat="server" visible="false" style="width: 25%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                itinerary Number
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditItNo" runat="server" Width="207px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditCompCar" runat="server" visible="false" style="float: left; width: 15%">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Type of Car
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlCompCar" runat="server" Width="140px" onchange='javascript:CalReimbt2("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'>
                                                                                                </asp:DropDownList>
                                                                                                <asp:HiddenField ID="hdnCmpCar" runat="server" />
                                                                                                <asp:HiddenField ID="hdnPrsnCar" runat="server" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditTT" runat="server" visible="false" style="width: 15%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Total Trip
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditTotTrip" runat="server" Width="130px" onkeyup='javascript:CalReimbt2("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditLN" runat="server" visible="false" style="width: 15%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                LessNorm
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditLNorm" runat="server" Width="130px" onkeyup='javascript:CalReimbt2("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditReimbt" runat="server" visible="false" style="width: 15%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Reimbursement
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="txtEditReimbt" runat="server" Width="130px"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditPA" runat="server" style="width: 15%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Pre-Amount
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox runat="server" ID="txtEditPreAmnt" Width="130px" onkeydown="TabIndex('txtEditActAmnt', event)"></asp:TextBox>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditAmt" runat="server" style="width: 15%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Expense Amount
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox runat="server" ID="txtEditActAmnt" Width="130px" onkeydown="TabIndex('ddlEditPaymentType', event)" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditPM" style="width: 20%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Payment Mode
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:DropDownList ID="ddlEditPaymentType" runat="server" DataTextField="Description"
                                                                                                    onkeydown="TabIndex('ddlEditCity', event)" DataValueField="Description" Width="180px">
                                                                                                </asp:DropDownList>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                    <div id="dvEditCmt" style="width: 20%; float: left">
                                                                                        <tr class="rowheight">
                                                                                            <td>
                                                                                                Description
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox runat="server" ID="txtEditComments" TextMode="MultiLine" Width="170px"
                                                                                                    onkeydown="TabIndex('fupd1', event)" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </div>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td valign="top" align="left" width="30%" id="tdReceipts" runat="server">
                                                    <table align="center" style="border: 1px solid #0099CC; vertical-align: top;">
                                                        <tr>
                                                            <td align="center" style="background-color: #D0D8E8; height: 25px;">
                                                                <b>RECEIPTS</b>
                                                                <%--<asp:Button ID="btnAttachments" runat="server" Text="RECEIPTS" CssClass="button button-blue" ReadOnly="true" />--%>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td valign="top">
                                                                <asp:Image runat="server" ID="imgDraft" Width="225px" Height="500px" />
                                                                <%--<asp:GridView ID="gvAttachments" runat="server" AutoGenerateColumns="false">
                                <Columns>
                                    <asp:TemplateField>
                                        <ItemTemplate>
                                            <%#Eval("orgName")%>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                </Columns>
                            </asp:GridView>--%>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
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
        </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
     </div>
        </div>
    </form>
</body>
</html>
