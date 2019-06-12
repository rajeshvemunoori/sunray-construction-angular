<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Policydocs.aspx.cs" Inherits="Policydocs" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
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
    <title>ApproveIt - Policy Documents</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script type="text/javascript">

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function refreshNotes() {
            window.location = window.location;
        }

        $(document).ready(function () {

        });

        function refreshUsers() {
            $(".btnRefresh").click();
        }

        function validatePolicyUploads() {
            if (document.getElementById('fupd1').value == "" && document.getElementById('fupd2').value == "" && document.getElementById('fupd3').value == "" && document.getElementById('fupd4').value == "" && document.getElementById('fupd5').value == "") {
                document.getElementById('dvMsg').style.color = "Red";
                document.getElementById('dvMsg').innerHTML = "Please browse atleast one file and click Upload to upload filies or Click Add More to select more files.";
                return false;
            }
        }

        function ShowMore() {
            if (document.getElementById('fupd1').value == "" || document.getElementById('fupd2').value == "" || document.getElementById('fupd3').value == "" || document.getElementById('fupd4').value == "" || document.getElementById('fupd5').value == "") {
                document.getElementById('dvMsg').style.color = "Red";
                document.getElementById('dvMsg').innerHTML = "Please select all the files and click Add More to select more files.";
                return false;
            }
            else {
                if (document.getElementById('dvMore').style.display == "block") {
                    document.getElementById('dvMore').style.display = "none";
                }
                else {
                    document.getElementById('dvMsg').innerHTML = '';
                    document.getElementById('dvMore').style.display = "block";
                    document.getElementById('btnMore').style.display = "none";
                }
                return false;
            }
        }
    </script>
    <style>
        .modalBackground {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
            font-weight: normal;
        }

        #gvPolicyDocsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvPolicyDocsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvPolicyDocs tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvPolicyDocsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvPolicyDocs TR TD, #gvPolicyDocs TR TH, #gvPolicyDocs TR TH div, #gvPolicyDocs TR TD div {
            overflow: visible;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
        </cc1:ToolkitScriptManager>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px;">
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
                                <asp:PostBackTrigger ControlID="btnUpload" />
                                <asp:PostBackTrigger ControlID="btnSaveEdit" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content" style="min-height: 580px; width: 900px">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%" style="vertical-align: top">
                                                    <h2>Policy Documents
                                                    </h2>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnUploadPDocs" runat="server" Text="Upload New" CssClass="buttonnew-blue" OnClick="UploadNewDocs" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div id="dvinv" runat="server" visible="true">
                                            <div class="grid_6" style="margin-left: 42px">
                                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                                <isx:CoolGridView ID="gvPolicyDocs" runat="server" ShowHeader="true" Height="300px"
                                                    OnRowDataBound="gvPolicyDocs_RowDataBound" AutoGenerateColumns="false"
                                                    Width="800px" GridLines="None">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Sl#">
                                                            <ItemTemplate>
                                                               <label> <asp:Label ID="lblSl" runat="server"></asp:Label>
                                                                <asp:Label ID="lblPolicyID" Visible="false" Text='<%#Eval("PolicyID") %>' runat="server"></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Description" HeaderStyle-Width="250px" ItemStyle-Width="250px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate><label><%#Eval("Description") %></label></ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Document" HeaderStyle-Width="300px" ItemStyle-Width="300px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate><label><%#Eval("FileName") %></label></ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Action" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                            <ItemTemplate>
                                                                <a href='DownloadPolicy.aspx?pid=<%#Eval("PolicyID") %>'><img src="images/icons/attachment_blue_24x24.png" /></a>&nbsp;&nbsp;&nbsp;
                                                                <asp:LinkButton ID="lnkEdit" runat="server" Text="Edit" OnCommand="EditPolicy" ToolTip="Update Document"><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;
                                                                <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete Document" CommandArgument='<%#Eval("PolicyID") %>' Text="Delete" OnCommand="DeletePolicy"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 300px">
                                                            <label>
                                                                No Policy documents to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnPID" runat="server" />
                                            </div>
                                        </div>
                                        <asp:Panel ID="pnlUpload" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; width: 700px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="80%" style="vertical-align: top">
                                                                <h2 class="pophead"><small>Company Travel Guidelines/Policies</small>
                                                                </h2>
                                                            </td>
                                                            <td width="20%" align="right">
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server" style="font-weight: bold">
                                                        </div>
                                                        <small>
                                                            <label>OrgName:</label></small>
                                                        <b>
                                                            <asp:Label ID="lblOrg" runat="server"></asp:Label></b>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;<small>
                                                            <label>CompName:</label></small>
                                                        <b>
                                                            <asp:Label ID="lblComp" runat="server"></asp:Label></b>
                                                        <br />
                                                        <br />
                                                        <div style="overflow-x: hidden; overflow-y: auto; height: 300px">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td>
                                                                        <small>
                                                                            <label>Sl#</label></small>
                                                                    </td>
                                                                    <td align="center">
                                                                        <small>
                                                                            <label>File</label></small>
                                                                    </td>
                                                                    <td align="center">
                                                                        <small>
                                                                            <label>Description</label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top">1
                                                                    </td>
                                                                    <td>
                                                                        <asp:FileUpload ID="fupd1" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesc1" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top">2
                                                                    </td>
                                                                    <td>
                                                                        <asp:FileUpload ID="fupd2" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesc2" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top">3
                                                                    </td>
                                                                    <td>
                                                                        <asp:FileUpload ID="fupd3" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesc3" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top">4
                                                                    </td>
                                                                    <td>
                                                                        <asp:FileUpload ID="fupd4" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesc4" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top">5
                                                                    </td>
                                                                    <td>
                                                                        <asp:FileUpload ID="fupd5" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtDesc5" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                        <div id="dvMore" runat="server" style="display: none">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td style="vertical-align: top">6
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:FileUpload ID="fupd6" runat="server" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtDesc6" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="vertical-align: top">7
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:FileUpload ID="fupd7" runat="server" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtDesc7" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="vertical-align: top">8
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:FileUpload ID="fupd8" runat="server" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtDesc8" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="vertical-align: top">9
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:FileUpload ID="fupd9" runat="server" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtDesc9" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="vertical-align: top">10
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:FileUpload ID="fupd10" runat="server" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <asp:TextBox ID="txtDesc10" runat="server"></asp:TextBox>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                        <asp:Button ID="btnMore" runat="server" Text="Add More" CssClass="buttonnew-blue" />
                                                                        <asp:Button ID="btnUpload" runat="server" Text="Upload" CssClass="buttonnew-blue" OnClick="UploadFiles" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUpd" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                            TargetControlID="lnkUpd" BackgroundCssClass="modalBackground" CancelControlID="btnClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlDelete" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="104%">
                                                        <tr>
                                                            <td width="50%" style="vertical-align: top">
                                                                <h2 class="pophead">Confirm Delete</h2>
                                                            </td>
                                                            <td width="50%" align="right" style="text-align: right">
                                                                <asp:Button ID="btnDelOK" runat="server" OnClick="DeleteConfirm" Text="Ok" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnDelClose" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete?</label></small>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDel" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDel" runat="server" DropShadow="false" PopupControlID="pnlDelete"
                                            TargetControlID="lnkDel" BackgroundCssClass="modalBackground" CancelControlID="btnDelClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlEditPolicy" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 20px; min-width: 700px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="62%" style="vertical-align: top">
                                                                <h2 class="pophead">Company Travel Guidelines/Policies</h2>
                                                            </td>
                                                            <td width="38%" align="right">
                                                                <asp:Button ID="btnSaveEdit" runat="server" OnClick="UpdatePolicy" Text="Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnCloseEdit" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <span style="font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif; font-size: 1.1em">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div id="dvMsgEdit" runat="server">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            File Name :</label>
                                                                    </td>
                                                                    <td>
                                                                        <asp:Label ID="lblFNameLnk" runat="server" ToolTip="Click to download"></asp:Label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            Description :
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtEditDesc" runat="server"></asp:TextBox>
                                                                        <asp:HiddenField ID="hdnDescr" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <div id="DvUpPolicy" runat="server">
                                                                    <tr>
                                                                        <td>Replace Document :
                                                                        </td>
                                                                        <td>
                                                                            <asp:FileUpload ID="fupdEdit" runat="server" />
                                                                        </td>
                                                                    </tr>
                                                                </div>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2"></td>
                                                                </tr>
                                                            </table>
                                                        </span>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkEdit" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popEdit" runat="server" DropShadow="false" PopupControlID="pnlEditPolicy"
                                            TargetControlID="lnkEdit" BackgroundCssClass="modalBackground" CancelControlID="btnCloseEdit">
                                        </cc1:ModalPopupExtender>
                                    </section>
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
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
