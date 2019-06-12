<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateUser.aspx.cs" Inherits="Admin_CreateUser"
    EnableEventValidation="false" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|fieldset|label1|wrapper".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt-Create User</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
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

            .tablemain table {
                width: 100%;
            }

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 135px;
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
            /*border-radius: 3px 3px;*/
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
            /*background-color:#e4e4e4; Upper gradient
            background-color:#e3e3e3; Lower gradient
            background-color:#9e9e9e; border*/
            /*border-radius: 3px;*/
            border: 1px solid #aaaaaa;
        }
    </style>
</head>
<body>
    <form id="form" runat="server" autocomplete="off">
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
        <div id="wrapper">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7">
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
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%;">
                                    <header style="height: 30px">
                                        <table width="100%">
                                            <tr>
                                                <td width="55%" style="vertical-align: top">
                                                    <h2>Create User
                                                    </h2>
                                                </td>
                                                <td width="45%" align="right" style="vertical-align: top">
                                                    <asp:Button ID="btnSave" runat="server" Text="   Save" CssClass="buttonnew-green" OnClick="btnSave_Click" />
                                                    <asp:Button ID="btnReset" runat="server" Text="   Reset" CssClass="buttonnew-blue" OnClick="btnReset_Click" />
                                                    <input type="button" value="   List of Users" class="buttonnew-blue" onclick="window.location.href = 'Users1.aspx'; showProgress();" />
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
                                                        <td>
                                                            <div class="subheader">
                                                                <h4>Personal Details</h4>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td style="width: 10%">
                                                                        <small>
                                                                            <label>Organization:</label></small></td>
                                                                    <td style="width: 90%"><b><%=Session["SOrgName"] %></b></td>
                                                                </tr>
                                                            </table>
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
                                                                    <td class="lbl" style="text-align: left" colspan="4">
                                                                        <asp:CheckBox ID="chkPwd" runat="server" CssClass="form3Checkbox6" Width="130px"
                                                                            Style="margin-left: -2px" />
                                                                        <small>
                                                                            <label style="text-align: right; margin-left: 57px">
                                                                                Change password on First Login</label></small>
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
                                                                        <asp:HiddenField ID="hdnApCnt" runat="server" />
                                                                        <asp:HiddenField ID="hdnMgrCnt" runat="server" />
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
                                                                                <em>*</em>Company Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                            Width="150px" AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Department Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlDeptCodes" runat="server" DataValueField="CodeKey" DataTextField="CodeKey"
                                                                            Width="150px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>State:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                            Width="150px">
                                                                        </asp:DropDownList>
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
                                                                    <td colspan="2" width="50%">
                                                                        <table style="width: 100%">
                                                                            <tr>
                                                                                <td class="lbl" style="width: 36%">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Group:</label></small>
                                                                                </td>
                                                                                <td style="width: 50%">
                                                                                    <asp:DropDownList ID="ddlGroups" runat="server" DataValueField="userGroup" DataTextField="groupDesc"
                                                                                        OnSelectedIndexChanged="ddlGroups_SelectedIndexChanged" AutoPostBack="true" Width="150px"
                                                                                        Style="float: left">
                                                                                    </asp:DropDownList>
                                                                                    <div id="dvGroupTip" runat="server" style="float: left; padding-left:0.5em">
                                                                                        <asp:Panel ID="Panel1" runat="server">
                                                                                            <small>
                                                                                                <label>
                                                                                                    To view profiles assigned to the selected group, open <a href="../UserGroups.aspx"
                                                                                                        target="_blank" onclick="openGroups()">Group Profiles</a> screen.</label></small>
                                                                                        </asp:Panel>
                                                                                        <asp:Panel ID="pnlApprLimitTip" runat="server" Height="30px" Width="30px">
                                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                                        </asp:Panel>
                                                                                        <cc1:BalloonPopupExtender ID="BalloonPopupExtender1" runat="server" TargetControlID="pnlApprLimitTip"
                                                                                            BalloonPopupControlID="Panel1" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
                                                                                            ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
                                                                                        </cc1:BalloonPopupExtender>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td colspan="2" width="50%">
                                                                        <div id="dvLimit" runat="server">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td class="lbl" style="width: 45%">
                                                                                        <small>
                                                                                            <label>
                                                                                                <em>*</em>Approval Limit:</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label>
                                                                                            <asp:Label ID="lblApprLimit" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2" width="50%">
                                                                        <div id="dvManager" runat="server">
                                                                            <table style="width: 100%">
                                                                                <tr>
                                                                                    <td class="lbl" style="width: 36%">
                                                                                        <small>
                                                                                            <label>
                                                                                                Manager Email:</label></small>
                                                                                    </td>
                                                                                    <td style="width: 50%">
                                                                                        <asp:DropDownList ID="ddlManagers" runat="server" Width="150px" name="ddlManagers"
                                                                                            ClientIDMode="Static">
                                                                                        </asp:DropDownList>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <div id="dvCompCar" runat="server" style="text-align: center">
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:CheckBox ID="chkCompCar" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            Style="margin-left: -103px" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Company Car</label></small>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                    <td colspan="2" width="50%">
                                                                        <div id="dvApproval" runat="server" style="display: none;">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td class="lbl" style="width: 45%">
                                                                                        <small>
                                                                                            <label>
                                                                                                Approval Limit can't exceed</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox runat="server" ID="lblApproval" ReadOnly="true"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Cash Advance(<%=currencySymbol %>):</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCashAdv" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <table>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <div id="dvCsFlag">
                                                                                        <asp:CheckBox ID="chkCSEnb" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            AutoPostBack="true" Style="margin-left: 55px" onchange="javascript:DisReviewFlag()"
                                                                                            OnCheckedChanged="chkCSEnb_Changed" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Customer Service Enabled</label></small>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <%if (Session["OrgSelfAppr"].ToString() == "1")
                                                                          {%>
                                                                        <div id="dvSelfAppr" runat="server" style="text-align: center">
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:CheckBox ID="chkSelfAppr" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            Style="margin-left: -50px" OnCheckedChanged="chkSelfAppr_CheckChanged" AutoPostBack="true" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Small Business Self Approval</label>
                                                                                        </small>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                        <%} %>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <div id="dvReview" runat="server">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="left">
                                                                                        <asp:CheckBox ID="chkReview" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            Style="margin-left: 85px" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Review Before Submit</label></small>
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
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script type="text/javascript">

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlManagers").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlGroups").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlManagers").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlGroups").ufd({ log: true });
            });
        });

        function openGroups() {
            return confirm('This link will be opened in a new tab. Click Ok to continue.');
        }

        function DisReviewFlag() {
            if (document.getElementById('chkCSEnb').checked) {
                document.getElementById('dvReview').style.display = 'block';
                document.getElementById('chkReview').style.display = 'block';
                document.getElementById('chkReview').checked == false;
            } else {
                document.getElementById('dvReview').style.display = 'none';
                document.getElementById('chkReview').style.display = 'none';
                document.getElementById('chkReview').checked == false;
            }
        }
    </script>
</body>
</html>
