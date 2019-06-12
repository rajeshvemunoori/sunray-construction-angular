<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EditOrganization.aspx.cs"
    EnableEventValidation="false" Inherits="EditOrganization" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt-Edit Organization</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
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

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 135px;
            }

        .lbl {
            text-align: right;
        }

        .uploader input {
            width: 200px;
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
<body>
    <form id="form" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="padding-top: 0px;">
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
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content " style="width: 115%">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="45%" style="vertical-align: top">
                                                    <h2>Organization Info
                                                    </h2>
                                                </td>
                                                <td width="55%" align="right">
                                                    <asp:Button ID="btnSave" runat="server" Text="   Save" CssClass="buttonnew-green" OnClick="btnSave_Click"></asp:Button>
                                                    <asp:Button ID="btnReloadData" runat="server" Text="   Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                        <div style="padding: 20px">
                                            <div class="divfieldset">
                                                <div id="dvError" runat="server" style="color: Red">
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
                                                            <table width="100%">
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Organization Name:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtOrganizationName" runat="server" Width="190px"></asp:TextBox>
                                                                        <asp:TextBox ID="txtAdminName" runat="server" Visible="false"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Email:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtAdminEmail" runat="server" Width="190px"></asp:TextBox>
                                                                        <asp:HiddenField ID="hdnManager" runat="server" />
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
                                                                                <em>*</em>Country Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                            Width="200px" name="ddlCountry" ClientIDMode="Static">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>State:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlRgnCode" runat="server" DataTextField="state" DataValueField="regionCode"
                                                                            Width="200px" name="ddlRgnCode" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true">
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
                                                                        <asp:TextBox ID="txtCities" runat="server" onchange="javascript:splitCityZip(this);" Width="190px"></asp:TextBox>
                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                            CompletionListItemCssClass="listItem"
                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                        </cc1:AutoCompleteExtender>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>ZipCode:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtZipCode" runat="server" Width="190px"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Industry Type:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlIndType" runat="server" DataTextField="Description" DataValueField="Description"
                                                                            Width="200px" name="ddlIndType" ClientIDMode="Static">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Organization Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtOrgcode" runat="server" Width="190px"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Measures:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlMeasure" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                            Width="200px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Currency:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                            Width="200px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Phone:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtPhone" runat="server" Width="190px"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Url:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtUrl" runat="server" Width="190px"></asp:TextBox>
                                                                        <asp:HiddenField ID="hdnAPCount" runat="server" />
                                                                        <asp:HiddenField ID="hdnMgrCount" runat="server" />
                                                                        <asp:HiddenField ID="hdnLmtAmnt1" runat="server" />
                                                                        <asp:HiddenField ID="hdnVarAP" runat="server" />
                                                                        <asp:HiddenField ID="hdnVarMgr" runat="server" />
                                                                        <asp:HiddenField ID="hdnLogoCnt" runat="server" />
                                                                        <asp:HiddenField ID="hdnIsActive" runat="server" />
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
                                                                                        CssClass="uploader" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnClientUploadComplete="showConfirmation"
                                                                                        OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" Width="200px"/>
                                                                                    <div style="float: right; padding-left: 0.5em">
                                                                                        <a href="#" id="tooltip">
                                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
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
            <img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                                                    </asp:Label>
                                                                                    <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td>
                                                                        <div id="divLogoatt" runat="server">
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <div class="subheader">
                                                                            <h4>Additional Roles Details</h4>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <div style="float: left">
                                                                                        <asp:CheckBox ID="chkSelfAppr" runat="server" class="form3Checkbox1" Width="130px"
                                                                                            Style="margin-left: -50px" /><small><label>Small Business Self Approval</label></small>
                                                                                    </div>
                                                                                    <div style="float: left; padding-left: 0.5em">
                                                                                        <a href="#" id="tooltip1">
                                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                            <span><small>
                                                                                                <label>This feature allows you to Approve/Reject requests placed by you and your sub-ordinates.</label></small>
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <%--</td>
                                                                                <td aign="left">
                                                                                    <div>
                                                                                        <asp:Panel ID="Panel2" runat="server">
                                                                                            <small>
                                                                                                <label>
                                                                                                    This feature allows you to Approve/Reject requests placed by you and your sub-ordinates.</label></small>
                                                                                        </asp:Panel>
                                                                                        <asp:Panel ID="Panel3" runat="server" Height="30px" Width="30px">
                                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                                        </asp:Panel>
                                                                                        <cc1:BalloonPopupExtender ID="BalloonPopupExtender2" runat="server" TargetControlID="Panel3"
                                                                                            BalloonPopupControlID="Panel2" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
                                                                                            ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
                                                                                        </cc1:BalloonPopupExtender>
                                                                                    </div>--%>
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
                                    </asp:Panel>
                                    <asp:Panel ID="pnlAtt_Appr" runat="server" Style="display: none">
                                        <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                            <header>
                                                <table width="100%">
                                                    <tr>
                                                        <td style="width: 90%;">
                                                            <h2 class="pophead">Logo</h2>
                                                        </td>
                                                        <td align="right" style="width: 10%">
                                                            <asp:Button ID="btnAttClose_Appr" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </header>
                                            <div style="padding: 20px;">
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <div id="dvLogo" runat="server">
                                                                <asp:ImageButton runat="server" ID="imgDraft" Width="225px" Height="500px" OnClick="DownLoadLogo" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAtt_Appr" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt_Appr"
                                        TargetControlID="lnkAtt_Appr" CancelControlID="btnAttClose_Appr">
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
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->

        <script src="../js/Validation.js" type="text/javascript"></script>
        <script type="text/javascript" src="../js/html5shiv.js"></script>
        <script src="../js/jquery.tools.min.js"></script>
        <script src="../js/jquery.ui.min.js"></script>
        <script src="../js/global.js"></script>
        <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
        <script>

            //document.onmousedown = disableclick;
            //function disableclick(e) {
            //    if (e.button == 2) {
            //        alert("Right Click Disabled");
            //        return false;
            //    }
            //}

            function DoOnAjaxPostback() {
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
                    $("#ddlMeasure").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCurrency").ufd({ log: true });
                });
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
                    $("#ddlMeasure").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCurrency").ufd({ log: true });
                });
            });

            function showConfirmation(sender, args) {
                document.getElementById('lblFileName').innerHTML = args.get_fileName();
            }

            //Split City and Zip from City text field
            function splitCityZip(txt) {
                if (txt.value.indexOf("-") != -1) {
                    var arr = txt.value.split("-");
                    document.getElementById('txtZipCode').value = arr[1];
                }
                else
                    document.getElementById('txtZipCode').value = "";
            }
            //Split City and Zip from City text field
        </script>
    </form>
</body>
</html>
