<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Drafts.aspx.cs" Inherits="Drafts" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Drafts</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/jquery.MultiFile.js" type="text/javascript"></script>
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


        function refreshExp() {
            $(".btnRefresh").click();
        }

        function pageLoad() {
            $("#fupd1").MultiFile();
        }

        function ValidateDrafts() {
            document.getElementById('dvError').innerHTML = "";
            document.getElementById('dvError').style.color = "Red";
            if (document.getElementById('fupd1').value == '') {
                document.getElementById('dvError').innerHTML = "Please select atleast one file.";
                return false;
            }
            if (document.getElementById('txtDescr').value == 0) {
                document.getElementById('dvError').innerHTML = "Please enter Description.";
                return false;
            }
            showProgress();
        }

        function $1(id) {
            return document.getElementById(id);
        }

        function showDeleteButton(objRef) {
            $1('dvError').innerHTML = '';
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
            if (parseInt(checkCnt) > 0)
                $1("btnDeleteSelected").style.display = "block";
            else
                $1("btnDeleteSelected").style.display = "none";
        }

        //Filter drafts grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvDrafts');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }
        //Filter drafts grid with text provided in search box

        //Close New profile creation popup
        function closeNewProfilePop(editDescr, descr, pop) {
            $11(editDescr).value = descr;
            $find(pop).hide();
            return false;
        }

        //validate description
        function validateDescription(editDescr, descr, pop, dv) {
            if ($11(editDescr).value == descr) {
                $11(dv).style.color = "Red";
                $11(dv).innerHTML = "No changes to update!";
                $find(pop).show();
                return false;
            }
            else
                return true;
        }
        //validate description
    </script>
    <style>
        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvDrafts tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvDraftsjEsCoOl_mainDiv {
            overflow: hidden;
        }

        #gvDrafts TR TD, #gvDrafts TR TH, #gvDrafts TR TH div, #gvDrafts TR TD div {
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
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
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
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header style="color: Fuchsia">
                                        <table width="100%">
                                            <tr>
                                                <td width="50%" style="vertical-align: top">
                                                    <h2>Drafts
                                                    </h2>
                                                </td>
                                                <td width="50%" style="text-align: right">
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReloadData_Click" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <div class="divfieldset">
                                            <section>
                                                <div>
                                                    <div id="dvError" runat="server" style="color: Red; font-weight: bold">
                                                    </div>
                                                    <table style="text-align: left">
                                                        <tr>
                                                            <td>
                                                                <small>
                                                                    <label>
                                                                        <em>*</em>Select:</label></small>

                                                                <asp:FileUpload ID="fupd1" runat="server" class="multi" Style="float: left" />
                                                                <div style="float: right; padding-left: 0.5em">
                                                                    <a href="#" id="tooltip">
                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                        <span><small>
                                                                            <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB.</label></small>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td style="vertical-align: top">
                                                                <small>
                                                                    <label>
                                                                        <em>*</em>Description:&nbsp;&nbsp;&nbsp;
                                                                    </label>
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine" Width="200px" Height="80px"></asp:TextBox>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div>
                                                    <table width="30%">
                                                        <tr>
                                                            <td>
                                                                <asp:Button ID="btnUpload" runat="server" OnClick="UploadFiles" Text="Upload" CssClass="buttonnew-blue" />
                                                            </td>
                                                            <td>
                                                                <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="buttonnew-blue"
                                                                    OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <br />
                                                <table style="width: 100%">
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="300px" placeholder="Type in description to search.." />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <isx:CoolGridView ID="gvDrafts" runat="server" AllowPaging="false" Width="85%"
                                                                Height="284px" AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                                ShowFooter="true" OnRowDataBound="gvDrafts_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderStyle-Width="90px" ControlStyle-Width="90px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAttachment" runat="server" Text="Draft" CommandArgument="orgName"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                            <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                            <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName") %>' />
                                                                            <asp:HiddenField ID="hdnDraftId" runat="server" Value='<%#Eval("attachmentId") %>' />
                                                                            <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdAtt" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField ControlStyle-Width="300px" HeaderStyle-Width="300px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkDescr" runat="server" Text="Description" CommandArgument="compCode"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:LinkButton ID="lnkDescr" runat="server" Text='<%#Eval("compCode")%>' ToolTip="click to edit"></asp:LinkButton></label>
                                                                            <asp:Panel ID="pnlDescr" runat="server" Style="display: none">
                                                                                <div class="main-content" style="margin: 0px 0px 0px 0px; padding: 10px; min-height: 20px; min-width: 280px">
                                                                                    <div id="dvCloseBtn" style="vertical-align: top; height: 10px; text-align: right;">
                                                                                        <a href="#" id="ancClose" runat="server" onclick="return closeNewProfilePop();">
                                                                                            <img alt="close" src="images/icons/cross.png" /></a>
                                                                                    </div>
                                                                                    <div id="dvEditErr" runat="server"></div>
                                                                                    <asp:TextBox ID="txtEditDescr" runat="server" TextMode="MultiLine" Text='<%#Eval("compCode")%>' Height="90px" Width="200px"></asp:TextBox>
                                                                                    <br />
                                                                                    <div style="text-align: right">
                                                                                        <asp:Button ID="btnSaveDescr" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSaveDescr_Click" />
                                                                                    </div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                            <cc1:ModalPopupExtender ID="popDesc" runat="server" TargetControlID="lnkDescr" PopupControlID="pnlDescr"
                                                                                BackgroundCssClass="modalBackground1">
                                                                            </cc1:ModalPopupExtender>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                        <HeaderTemplate>
                                                                            <asp:LinkButton ID="lnkAddedOn" runat="server" Text="Added On" CommandArgument="addedOn"
                                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                        </HeaderTemplate>
                                                                        <ItemTemplate>
                                                                            <label><%# Convert.ToDateTime(Eval("addedOn")).ToShortDateString()%></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Remove" ControlStyle-Width="90px" HeaderStyle-Width="90px">
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkDelAtt" runat="server" onclick="showDeleteButton(this)" />
                                                                            <asp:HiddenField ID="hdnDrft" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 170px">
                                                                        <label>
                                                                            No drafts to display.</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </td>
                                                        <td>
                                                            <div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; text-align: center; vertical-align: middle">
                                                        </td>
                                                    </tr>
                                                </table>
                                                <asp:Panel ID="pnlDelDrfts" runat="server" Style="display: none">
                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                        <header>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td style="width: 50%;">
                                                                        <h2 class="pophead">Alert</h2>
                                                                    </td>
                                                                    <td align="right" style="width: 50%">
                                                                        <asp:Button ID="btnYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="buttonnew-blue" />
                                                                        <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RetainDialog" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </header>
                                                        <section>
                                                            <div class="divfieldset">
                                                                <small>
                                                                    <label>
                                                                        Are you sure you want to delete this draft?</label></small>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </asp:Panel>
                                                <asp:LinkButton ID="lnkDelAlert" runat="server"></asp:LinkButton>
                                                <cc1:ModalPopupExtender ID="popAlert" runat="server" PopupControlID="pnlDelDrfts"
                                                    TargetControlID="lnkDelAlert" CancelControlID="btnNo" BackgroundCssClass="modalBackground1">
                                                </cc1:ModalPopupExtender>
                                            </section>
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
            </section>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
