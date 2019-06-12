<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MyAccount.aspx.cs" Inherits="MyAccount" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc9" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|fieldset|fieldset1|footer|header|hgroup|keygen|label|label1|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt - MyAccount</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href='http://fonts.googleapis.com/css?family=Dr+Sugiyama' rel='stylesheet'
        type='text/css'>
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link href="JQImgCrop/jquery.Jcrop.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.js"></script>
    <script src="JQImgCrop/jquery.Jcrop.js" type="text/javascript"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        $(document).ready(function () {
            //$(function () {
            //    $("#ddlRegion").ufd({ log: true });
            //});
        });

        function DoOnAjaxPostback() {
            cropImg();
            //$(function () {
            //    $("#ddlRegion").ufd({ log: true });
            //});
        }

        //Validations Begin
        function ClearMsg() {
            var div = document.getElementById('dvError') //$(DivID)
            div.className = '';
            div.innerHTML = "";
        }

        function signText() {
            if (document.getElementById('txtsignText').value != 0)
                document.getElementById('dvSign').innerHTML = document.getElementById('txtsignText').value;
            else
                document.getElementById('dvSign').innerHTML = document.getElementById('txtFirstName').value + " " + document.getElementById('txtLastName').value
        }

        function showsignature() {
            if (document.getElementById('chkDgtSign').checked) {
                document.getElementById('dvSign').style.display = "block";
                document.getElementById('dvSign').innerHTML = document.getElementById('txtFirstName').value + " " + document.getElementById('txtLastName').value;
                document.getElementById('txtsignText').style.display = "block";
                document.getElementById('txtsignText').value = document.getElementById('txtFirstName').value + " " + document.getElementById('txtLastName').value;
                document.getElementById('dvlbl').style.display = "block";
            }
            else {
                document.getElementById('dvSign').style.display = "none";
                document.getElementById('txtsignText').style.display = "none";
                document.getElementById('dvlbl').style.display = "none";
            }
        }

        //Crop image
        function cropImg() {
            $(function () {
                $('#imgFull').Jcrop({
                    onSelect: getcroparea
                });
            })
        }

        function getcroparea(c) {
            $('#hdnx').val(c.x);
            $('#hdny').val(c.y);
            $('#hdnw').val(c.w);
            $('#hdnh').val(c.h);
        };
        //Crop image

        //Fileupload file name
        function signatureUploadComplete(sender, args) {
            var fileName = args.get_fileName();
            if (fileName.toLowerCase().indexOf(".jpg") > 0 || fileName.toLowerCase().indexOf(".jpeg") > 0 || fileName.toLowerCase().indexOf(".png") > 0) {
                $11('lnkLoad').textContent = fileName;
                $11('dvError').innerHTML = '';
            }
            else
                $11('dvError').innerHTML = 'Please upload images of type .png/.jpg/.jpeg.';
        }
    </script>
    <style>
        .modalBackground1 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 3000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground2 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 90000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .sign {
            font-family: 'Dr Sugiyama', cursive;
            font-size: 23px;
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

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 5px;
            }

        .tdlbl {
            vertical-align: top;
            text-align: right;
        }

        .tdfld {
            text-align: left;
        }

        .lnk {
            text-decoration: underline;
            color: White;
        }

        #gvCAHistjEsCoOl_headerDiv, #gvCAReqHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvCAHistjEsCoOl_headerDiv div table tbody tr th, #gvCAReqHistjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvCAHist tbody tr td, #gvCAReqHist tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvCAHistjEsCoOl_mainDiv, #gvCAReqHistjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvCAHist TR TD, #gvCAHist TR TH, #gvCAHist TR TH div, #gvCAHist TR TD div,
        #gvCAReqHist TR TD, #gvCAReqHist TR TH, #gvCAReqHist TR TH div, #gvCAReqHist TR TD div {
            overflow: visible;
        }
        /**tooltip style**/
        a#tooltip, a#tooltip1, a#tooltip2 {
            outline: none;
        }

            a#tooltip:hover, a#tooltip1:hover, a#tooltip2:hover {
                text-decoration: none;
            }

            a#tooltip span, a#tooltip1 span, a#tooltip2 span {
                z-index: 10;
                display: none;
                padding: 14px 20px;
                margin-top: -30px;
                margin-left: 0px;
                width: 300px;
                line-height: 16px;
                border-radius: 4px;
            }

            a#tooltip:hover span, a#tooltip1:hover span, a#tooltip2:hover span {
                display: inline;
                position: absolute;
                color: #111;
                border: 1px solid #DCA;
                background: #fffAF0;
            }
        /**tooltip style**/

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
                    <%if (Convert.ToInt32(Session["OrgID"]) != 0)
                      {%>
                    <uc9:leftmenu ID="leftmenu" runat="server" />
                    <%
                      }
                      else
                      {%>
                    <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
                    <%} %>
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7">
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
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                    <div class="main-content" style="width: 100%;">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td style="width: 55%;">
                                                        <h2>My Account
                                                        </h2>
                                                    </td>
                                                    <td align="right" style="width: 45%">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click"></asp:Button>
                                                        <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="Reload" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvError" runat="server" style="color: Red; text-align: center;">
                                                </div>
                                                <table width="100%">
                                                    <tr>
                                                        <td>
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label><em>*</em>FirstName:</label></small><br />
                                                                        <asp:TextBox ID="txtFirstName" runat="server" Width="150px"></asp:TextBox>
                                                                    </td>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label><em>*</em>LastName:</label></small><br />
                                                                        <asp:TextBox ID="txtLastName" runat="server" Width="150px"></asp:TextBox>
                                                                    </td>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label>Email:</label></small><br />
                                                                        <asp:TextBox ID="txtEmail" runat="server" Width="150px" ReadOnly="true" BackColor="AliceBlue"></asp:TextBox>
                                                                    </td>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label><em>*</em>Phone:</label></small><br />
                                                                        <asp:TextBox ID="txtPhone" runat="server" Width="150px"></asp:TextBox></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label>Department:</label></small><br />
                                                                        <asp:TextBox ID="txtDept" runat="server" Width="150px" ReadOnly="true" BackColor="AliceBlue"></asp:TextBox>
                                                                    </td>
                                                                    <td class="tdfld"><small>
                                                                        <label>State:</label></small><br />
                                                                        <asp:DropDownList ID="ddlRegion" runat="server" Width="150px" AutoPostBack="true" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged"></asp:DropDownList>
                                                                    </td>
                                                                    <td class="tdfld">
                                                                        <label>City:</label></small><br />
                                                                        <asp:TextBox ID="txtCity" runat="server" Width="150px"></asp:TextBox>
                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCity"
                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                            CompletionListItemCssClass="listItem"
                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                        </cc1:AutoCompleteExtender>
                                                                    </td>
                                                                    <td class="tdfld">
                                                                        <label>User Group:</label></small><br />
                                                                        <asp:TextBox ID="txtUserGrp" runat="server" Width="150px" ReadOnly="true" BackColor="AliceBlue"></asp:TextBox></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Job Title:</label1></small><br />
                                                                        <asp:TextBox ID="txtDesignation" runat="server" Width="150px"></asp:TextBox></td>
                                                                    <td class="tdfld">
                                                                        <small>
                                                                            <label>CashAdvance(<%=currencySymbol %>):</label></small><br />
                                                                        <asp:TextBox ID="txtCashAdv" runat="server" ReadOnly="true" Width="150px"></asp:TextBox>&nbsp;
                                                                <asp:LinkButton ID="lnkCashAdvHistory" runat="server" Text="Show History" CommandArgument="test"
                                                                    OnClick="DisplayCashAdvHistory" ToolTip="Show Cash Advance History">
                                                                    <img src="images/icons/history_clear.png" alt="Show History"/></asp:LinkButton></td>
                                                                    <td colspan="3" class="tdfld">
                                                                        <%if (Session["IsAdmin"].ToString().ToLower() == "false")
                                                                          { %>
                                                                        <small>
                                                                            <label>Manager Email:</label></small><br />
                                                                        <asp:TextBox ID="txtManager" runat="server" Width="150px" ReadOnly="true" BackColor="AliceBlue"></asp:TextBox>
                                                                        <%} %></td>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td width="30%">
                                                                        <div id="dvSmallImage" style="text-align: left">
                                                                            <small>
                                                                                <label>Your Signature (as it appears in the reports):</label></small><br />
                                                                            <table style="width: 200px; height: 50px; border: 1px solid #000;">
                                                                                <tr>
                                                                                    <td>
                                                                                        <img id="imgCropped" runat="server" width="200" height="50" />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                        <div>
                                                                            <asp:Label ID="lblOrglDownload" runat="server"></asp:Label>
                                                                        </div>
                                                                    </td>
                                                                    <td width="70%">
                                                                        <table class="tablemain">
                                                                            <tr>
                                                                                <td>
                                                                                    <div style="float: left">
                                                                                        <%--<a href="#" id="tooltip">--%>
                                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15" width="15" />
                                                                                        <%--<span><small>--%>
                                                                                        <b>
                                                                                            <label>Upload image containing your signature and click on the link beside to load image to crop. The image should be of type .png/.jpg/.jpeg. <a href="DownloadFile.aspx?typ=14">Click here</a> to download template.</label></b><%--</small>
                                                                                </span>
                                                                            </a>--%>
                                                                                    </div>
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    <small>
                                                                                        <label>Upload Signature File:</label></small>
                                                                                    <br />
                                                                                    <div style="float: left">
                                                                                        <asp:HiddenField ID="hdnSignFileNameOriginal" runat="server" />
                                                                                        <asp:HiddenField ID="hdnSignFileName" runat="server" />
                                                                                        <cc1:AsyncFileUpload ID="fupdInv" CompleteBackColor="White" runat="server" Style="float: left; border: 1px solid #aaaaaa" Width="300px"
                                                                                            UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="fileUploadComplete" OnClientUploadComplete="signatureUploadComplete" />
                                                                                    </div>
                                                                                    <div style="float: left; padding-left: 0.5em">
                                                                                        <a href="#" id="tooltip">
                                                                                            <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                            <span><small>
                                                                                                <label>File types allowd are .png, .jpg and .jpeg.</label></small>
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                             <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                                    </asp:Label>&nbsp;&nbsp;
                                                                        <asp:LinkButton ID="lnkLoad" runat="server" Font-Size="Large" Font-Italic="true" Font-Bold="true" OnClick="lnkLoad_Click"></asp:LinkButton>&nbsp;&nbsp;
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:LinkButton ID="btnClearImg" runat="server" OnClick="btnClearImg_Click" Text="Clear All" Font-Size="Large" Font-Italic="true" Font-Bold="true" />
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
                                <asp:Panel ID="pnlCropImg" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td style="text-align: right">
                                                        <asp:Button ID="btncrop" runat="server" OnClick="btncrop_Click" Text="Crop Image" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnClodeCrop" runat="server" Text="Close" CssClass="buttonnew-blue" /></td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div id="dvCropErr" runat="server" style="color: red; font-weight: bold"></div>
                                            <div style="overflow-x: auto; overflow-y: auto; height: 450px; width: 1100px">
                                                <div id="dvLargeImage" runat="server">
                                                    <img id="imgFull" runat="server" />
                                                    <asp:HiddenField ID="hdnx" runat="server" />
                                                    <asp:HiddenField ID="hdny" runat="server" />
                                                    <asp:HiddenField ID="hdnw" runat="server" />
                                                    <asp:HiddenField ID="hdnh" runat="server" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCropImg" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCropImg" runat="server" DropShadow="false" PopupControlID="pnlCropImg"
                                    TargetControlID="lnkCropImg" BackgroundCssClass="modalBackground1" CancelControlID="btnClodeCrop">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlCAHist" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td width="55%" style="vertical-align: top">
                                                        <h2 class="pophead">Cash Advance History
                                                        </h2>
                                                    </td>
                                                    <td width="55%" align="right">
                                                        <asp:Button ID="btnCloseCAHist" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="form_edit" style="border: 1px solid #0099CC; padding: 20px;">
                                                <isx:CoolGridView ID="gvCAHist" runat="server" AutoGenerateColumns="false"
                                                    Width="1000px" Height="300px" OnRowDataBound="gvCAHist_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkExpItem" runat="server" Text="ExpenseItem" CommandArgument="expItem"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("expItem")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkOldCAAmnt" runat="server" Text="Old CashAdv Amount" CommandArgument="oldCashAdvAmt"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate><%#Eval("oldCashAdvAmt")%></ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkNewCAAmnt" runat="server" Text="New CashAdv Amount" CommandArgument="newCashAdvAmt"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate><%#Eval("newCashAdvAmt")%></ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="purpose"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate><%#Eval("purpose")%></ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkModifiedDate" runat="server" Text="Modified Date" CommandArgument="modifiedDate"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <asp:Label ID="lblModfifiedOn" runat="server" Text='<%# Convert.ToDateTime(Eval("modifiedDate")).ToShortDateString()%>'></asp:Label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="120px" ItemStyle-Width="120px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkModifiedBy" runat="server" Text="ModifiedBy" CommandArgument="modifiedBy"
                                                                    OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                </asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <asp:Label ID="lblModifiedBy" runat="server" Text=' <%#Eval("modifiedBy")%>'></asp:Label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="View Req. Hist.">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkEditCAReqHist" runat="server" Text="Edit" CommandArgument="test"
                                                                    OnCommand="DisplayCAReqHist"><img src="images/icons/pencil.png" alt="View"/></asp:LinkButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 150px">
                                                            <label>
                                                                No history to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCAHist" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCAHist" runat="server" DropShadow="false" PopupControlID="pnlCAHist"
                                    TargetControlID="lnkCAHist" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseCAHist">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlCAReqHist" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td width="55%" style="vertical-align: top">
                                                        <h2 class="pophead">Expenses History
                                                        </h2>
                                                    </td>
                                                    <td width="55%" align="right">
                                                        <asp:Button ID="btnCAReqHistClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="form_edit" style="border: 1px solid #0099CC; padding: 20px;">
                                                <asp:HiddenField ID="hdnReqModDate" runat="server" />
                                                <isx:CoolGridView ID="gvCAReqHist" runat="server" AutoGenerateColumns="false"
                                                    Width="900px" Height="300px">
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="LinkButton1" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                    OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("RequestID")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="LinkButton4" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                    OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("Purpose")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="LinkButton5" runat="server" Text="ExpenseItem" CommandArgument="expItem"
                                                                    OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("expItem")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="LinkButton3" runat="server" Text="PreAmount" CommandArgument="PreAmount"
                                                                    OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("PreAmount")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="LinkButton2" runat="server" Text="ActualAmount" CommandArgument="ActualAmount"
                                                                    OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <%#Eval("ActualAmount")%>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 150px">
                                                            <label>
                                                                No history to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCAReqHist" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCAReqHist" runat="server" DropShadow="false" PopupControlID="pnlCAReqHist"
                                    TargetControlID="lnkCAReqHist" BackgroundCssClass="modalBackground2" CancelControlID="btnCAReqHistClose">
                                </cc1:ModalPopupExtender>
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
