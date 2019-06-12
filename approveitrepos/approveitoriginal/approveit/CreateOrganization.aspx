<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateOrganization.aspx.cs"
    Inherits="CreateOrganization" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt | Organization Registration</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <!--[if lt IE 9]>
<script src="js/html5.js"></script>
<script src="js/PIE.js"></script>
<![endif]-->
    <!--[if lte IE 9]>
<link rel="stylesheet" media="screen" href="css/ie.css" />
<script type="text/javascript" src="js/ie.js"></script>
<![endif]-->
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
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

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input[type=text], .tablemain input[type=password] {
                width: 170px;
                height: 20px;
            }


            .tablemain select {
                width: 185px;
                height: 20px;
            }

        .lbl {
            text-align: right;
        }

        .uploader input {
            width: 100px;
        }

        .bgcolor {
            background-color: #82CFFD;
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
            font-size: 0.8em;
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
    </style>
</head>
<body onload="LoadList()">
    <form id="form" runat="server" autocomplete="off">
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
        </cc1:ToolkitScriptManager>
        <div id="wrapper">
            <header style="position: fixed">
                <h1 class="grid_1">
                    <img src="images/approveIt_logo.png" alt="ApproveIt" width="100" /></h1>
            </header>
            <section>
                <div class="container_8 clearfix">
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="margin-left: 134px">
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
                                <asp:AsyncPostBackTrigger ControlID="btnRefreshAlarms" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefreshAlarms' class='btnRefreshAlarms' runat='server' Style='display: none;' />
                                <div class="main-content">
                                    <header style="padding: 8px 30px;">
                                        <table width="100%">
                                            <tr>
                                                <td width="65%" style="vertical-align: top">
                                                    <h2>Organization Registration
                                                    </h2>
                                                </td>
                                                <td width="35%" align="right">
                                                    <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click"></asp:Button>
                                                    <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue" OnClick="btnReset_Click"></asp:Button>
                                                    <asp:Button ID="btnBack" runat="server" Text="Back To Login" CssClass="buttonnew-blue" OnClick="btnBack_Click" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section class="container_1 clearfix">
                                        <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                            <div class="divfieldset">
                                                <div id="dvError" runat="server" style="color: Red; text-align: center; font-size: 1.15em;">
                                                </div>
                                                <table class="tablemain">
                                                    <tr>
                                                        <td colspan="3">
                                                            <div class="subheader">
                                                                <h4>Organization Details</h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="90%">
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Organization Name:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtOrganizationName" runat="server" onkeyup="fillFields();" onchange="javascript:OrgName('txtOrganizationName')"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Organization Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtOrgcode" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Company Name:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCompName" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Company Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCompCode" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Address1:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAddr1" runat="server" TextMode="MultiLine" Width="170px" Height="50px" Style="resize: none"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Address2:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAddr2" runat="server" TextMode="MultiLine" Width="170px" Height="50px" Style="resize: none"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Country:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>State:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>City:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCities" runat="server" onchange="javascript:splitCityZip(this);"></asp:TextBox>
                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                            CompletionListItemCssClass="listItem"
                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                        </cc1:AutoCompleteExtender>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                ZipCode:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtZipCode" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Industry Type:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlIndType" runat="server" DataTextField="Description" DataValueField="CodeKey">
                                                                        </asp:DropDownList>
                                                                        <asp:HiddenField ID="hdnApp" runat="server" />
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Url:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtUrl" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Company Logo:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server" UploaderStyle="Traditional"
                                                                                        CssClass="uploader" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnClientUploadComplete="showConfirmation" Width="200px"
                                                                                        OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" />
                                                                                    <div style="float: right; padding-left: 0.5em">
                                                                                        <a href="#" id="tooltip">
                                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                            <span><small>
                                                                                                <label>File types allowd are .png, .jpg, .jpeg, .tiff and .tif. Maximum file size should be 2MB.</label></small>
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:Label ID="Throbber" runat="server" Style="display: none">
            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                                    </asp:Label>
                                                                                    <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td colspan="2">&nbsp;
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3">
                                                            <div class="subheader">
                                                                <h4>Admin Details</h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="90%">
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Admin FirstName:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAdminFName" runat="server" onchange="javascript:captalize('txtAdminFName')"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Admin LastName:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAdminLName" runat="server" onchange="javascript:captalize('txtAdminLName')"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Phone:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Email:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAdminEmail" runat="server" Style="float: left"></asp:TextBox>
                                                                        <div style="float: left; padding-left: 0.5em">
                                                                            <a href="#" id="tooltip1">
                                                                                <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                <span><small>
                                                                                    <label>This email will be your login email as admin user for this organization and company.</label></small>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <%--<div style="float: right">
                                                                                    <asp:Panel ID="Panel2" runat="server">
                                                                                        <small>
                                                                                            <label>
                                                                                                This email will be your login email as admin user for this organization and company.</label></small>
                                                                                    </asp:Panel>
                                                                                    <asp:Panel ID="Panel3" runat="server" Height="30px" Width="30px">
                                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                    </asp:Panel>
                                                                                    <cc1:BalloonPopupExtender ID="BalloonPopupExtender2" runat="server" TargetControlID="Panel3"
                                                                                        BalloonPopupControlID="Panel2" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
                                                                                        ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
                                                                                    </cc1:BalloonPopupExtender>--%>
                                                                                    
                                                                              

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Password:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Confirm Password:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtConfirmPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Currency:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Measures:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlMeasure" runat="server" DataTextField="CodeKey" DataValueField="CodeKey">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>JobTitle:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtJobTitle" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>EmployeeID:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtEmpID" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Department:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlDept" runat="server" DataTextField="Description" DataValueField="CodeKey">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Group:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlGroup" runat="server" DataValueField="userGroup" DataTextField="groupDesc"
                                                                            OnSelectedIndexChanged="GroupSelected" AutoPostBack="true">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">
                                                            <table>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div id="dvApprLmt" runat="server" style="display: none; margin-left: 67px">
                                                                            <small>
                                                                                <label>
                                                                                    Approval Limit:</label></small>&nbsp;&nbsp;
                                                                        <label>
                                                                            <asp:Label ID="lblApprovalLimit" runat="server"></asp:Label></label>
                                                                            <div style="float: right">
                                                                                <asp:Panel ID="Panel1" runat="server">
                                                                                    <small>
                                                                                        <label>
                                                                                            Apprival Limit can be adjusted in Code Allocation screen, updating CodeName 'ERUSERGROUPS'
                                                                                    after successful registration.</label></small>
                                                                                </asp:Panel>
                                                                                <asp:Panel ID="pnlApprLimitTip" runat="server" Height="30px" Width="30px">
                                                                                    <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                                </asp:Panel>
                                                                                <cc1:BalloonPopupExtender ID="BalloonPopupExtender1" runat="server" TargetControlID="pnlApprLimitTip"
                                                                                    BalloonPopupControlID="Panel1" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
                                                                                    ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
                                                                                </cc1:BalloonPopupExtender>
                                                                            </div>
                                                                    </td>
                                                                    <td style="padding-left:100px">
                                                                        <asp:CheckBox ID="chkSelfAppr" runat="server" Width="20px"/><label>Small Business Self Approval</label>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </asp:Panel>
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
        <uc5:footer ID="footer" runat="server" />
    </form>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>

        function redirectPage() {
            window.location = 'Login.aspx';
        }

        function DisplayApprLimit() {
            if (document.getElementById("cbManager").checked) {
                document.getElementById("dvApprLmt").style.display = 'block';
                if (document.getElementById("hdnApp").value == "1")
                    document.getElementById("cbAP").checked = true;
                else
                    document.getElementById("cbAP").checked = false;
            }
            else {
                document.getElementById("cbAP").checked = false;
                document.getElementById("dvApprLmt").style.display = 'none';
                document.getElementById("txtApprLimit").value = '';
            }
        }

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlIndType").ufd({ log: true });
                //$("#ddlIndType").realFocusEvent();
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
                //$("#ddlRgnCode").realFocusEvent();
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlCurrency").ufd({ log: true });
            });
            $(function () {
                $("#ddlMeasure").ufd({ log: true });
            });
            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlDept").ufd({ log: true });
            });
            LoadList();
        }

        function OrgName(txtId) {
            if(document.getElementById('txtOrganizationName').value != '') {
                capitaliseFirstLetter(txtId);
                document.getElementById('txtCompName').value = document.getElementById('txtOrganizationName').value;
                var url = 'Invoice.ashx?func=4&orgname=' + document.getElementById('txtOrganizationName').value + '&typ=1';
                GetOrgCode(url, 'GetOrgCode');
            }
            else
                document.getElementById('txtOrgcode').value = '';
        }


        function fillFields() {
            document.getElementById('txtCompCode').value = document.getElementById('txtOrganizationName').value.replace(/\s+/g, "").substring(0, 3).toUpperCase();
            document.getElementById('txtCompName').value = document.getElementById('txtOrganizationName').value;
        }


        $(document).ready(function () {
            $(function () {
                $("#ddlIndType").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlCurrency").ufd({ log: true });
            });
            $(function () {
                $("#ddlMeasure").ufd({ log: true });
            });
            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlDept").ufd({ log: true });
            });
            LoadList();
        });

        //Autocomplete organization name textbox begin
        function LoadList() {
            var ds = <%=listFilter %>;
            $("#txtOrganizationName").autocomplete({
                source: ds,
                select: function (event, ui) {
                    capitaliseFirstLetter('txtOrganizationName');
                    document.getElementById('txtCompName').value = ui.item.label;
                    document.getElementById('txtOrgcode').value = ui.item.label.replace(/\s+/g, "").substring(0, 3);
                    document.getElementById('txtCompCode').value = ui.item.label.replace(/\s+/g, "").substring(0, 3).toUpperCase();
                }
            });
        }
        //Autocomplete organization name textbox end

        function showConfirmation(sender, args) {
            document.getElementById('lblFileName').innerHTML = args.get_fileName();
        }  
        
        //Split City and Zip from City text field
        function splitCityZip(txt) {
            if(txt.value.indexOf("-") !=-1){
                var arr = txt.value.split("-");
                document.getElementById('txtZipCode').value = arr[1];
            }
            else
                document.getElementById('txtZipCode').value = "";
        }
        //Split City and Zip from City text field
    </script>
</body>
</html>
