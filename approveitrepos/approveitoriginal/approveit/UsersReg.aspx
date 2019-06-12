<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UsersReg.aspx.cs" Inherits="UsersReg"
    EnableEventValidation="false" ValidateRequest="false" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Users Registration</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <!--[if lt IE 9]>
<script src="js/html5.js"></script>
<script src="js/PIE.js"></script>
<![endif]-->
    <!-- jquerytools -->
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
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

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
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

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
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
        <script type="text/javascript">
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_initializeRequest(InitializeRequest);
            prm.add_endRequest(EndRequest);

            function InitializeRequest(sender, args) {
            }

            function EndRequest(sender, args) {
                //$(".date").datepicker();
                //
            }
        </script>
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
                                <asp:AsyncPostBackTrigger ControlID="btnSave" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefreshAlarms' class='btnRefreshAlarms' runat='server' Style='display: none;' />
                                <div class="main-content">
                                    <header style="padding: 8px 30px;">
                                        <table width="100%">
                                            <tr>
                                                <td width="55%" style="vertical-align: top">
                                                    <h2>User Registration
                                                    </h2>
                                                </td>
                                                <td width="45%" align="right">
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
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <div id="dvError" runat="server" style="color: Red; text-align: center; font-size: 1.25em;">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="subheader">
                                                                <h4>Organization Details</h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <table>
                                                                                <tr>
                                                                                    <td class="lbl">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Organization:</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtOrganization" runat="server" OnTextChanged="txtOrganization_TextChanged"
                                                                                            AutoPostBack="true" Width="300px"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnOrg" runat="server" />
                                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtOrganization"
                                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetOrgs" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                            CompletionListItemCssClass="listItem"
                                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                        </cc1:AutoCompleteExtender>
                                                                                    </td>
                                                                                    <td class="lbl"></td>
                                                                                    <td></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div id="dvDept" runat="server">
                                                                            <table>
                                                                                <tr>
                                                                                    <td class="lbl">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Company:</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="CompCode" DataValueField="CompCode"
                                                                                            OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </td>
                                                                                    <td class="lbl">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Department:</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:DropDownList ID="ddlDeptCodes" runat="server" DataValueField="Description" DataTextField="CodeKey">
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
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="subheader">
                                                                <h4>User Details</h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>FirstName:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtFirstName" runat="server" onchange="javascript:captalize('txtFirstName')"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>LastName:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtLastName" runat="server" onchange="javascript:captalize('txtLastName')"></asp:TextBox>
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
                                                                        <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
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
                                                                                <em>*</em>Job Title:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesignation" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Employee ID:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtEmpID" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Manager Email:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtManager" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>City:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCities" runat="server"></asp:TextBox>
                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                            CompletionListItemCssClass="listItem"
                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                        </cc1:AutoCompleteExtender>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>Group:</label>
                                                                        </small>

                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlGroup" runat="server" DataTextField="groupDesc" DataValueField="userGroup"></asp:DropDownList>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <div id="dvCompCar" runat="server" style="text-align: right; width: 293px">
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:CheckBox ID="chkCompCar" runat="server" CssClass="form3Checkbox1" Width="150px"
                                                                                            Style="margin-left: -50px" />
                                                                                        <small>
                                                                                            <label>Company Car</label></small>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">
                                                            <table>
                                                                <%--<tr>
                                                                    <td>
                                                                        <div class="subheader">
                                                                            <h4>Profiles</h4>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                    <tr>
                                                                    <td>
                                                                        <table>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <asp:CheckBox ID="cbUser" runat="server" class="form3Checkbox1" Style="margin-left: -50px"
                                                                                        Width="130px" onclick="DisplayApprLimit('cbUser', 'cbManager');"></asp:CheckBox>
                                                                                    <smal><label>User</label></smal>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <asp:CheckBox ID="cbManager" runat="server" class="form3Checkbox1" onclick="DisplayApprLimit('cbManager', 'cbUser');"
                                                                                        Width="130px" Style="margin-left: -50px"></asp:CheckBox>
                                                                                    <smal><label>Manager</label></smal>
                                                                                </td>
                                                                                <td>
                                                                                    <div id="dvApprLmt" runat="server" style="display: none">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Approval Limit:</label></small>&nbsp;&nbsp;
                                                                                    <asp:TextBox ID="txtApprLimit" runat="server"></asp:TextBox>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>--%>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <br />
                                                <br />
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
    <%--<script src="js/global.js"></script>--%>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script>
        function DisplayApprLimit(id1, id2) {
            if (document.getElementById(id1).checked) {
                document.getElementById(id2).checked = false;
                if (id1 == 'cbManager')
                    document.getElementById("dvApprLmt").style.display = 'block';
                else {
                    document.getElementById("dvApprLmt").style.display = 'none';
                    document.getElementById("txtApprLimit").value = '';
                }
            }
            else {
                document.getElementById("dvApprLmt").style.display = 'none';
                document.getElementById("txtApprLimit").value = '';
            }
        }

        //Autocomplete Organization textbox begin
        $(document).ready(function () {
            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            document.getElementById("hdnOrg").value = document.getElementById('txtOrganization').value;
            LoadList();
        });

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            document.getElementById("hdnOrg").value = document.getElementById('txtOrganization').value;
            LoadList();
        }

        function LoadList() {

        }

    </script>
</body>
</html>
