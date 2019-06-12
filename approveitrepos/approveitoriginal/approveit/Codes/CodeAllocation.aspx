<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CodeAllocation.aspx.cs" Inherits="CodeAllocation" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Code Allocation</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery-1.3.2.min.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="../js/DateSetup.js" type="text/javascript"></script>
    <script type="text/javascript">

        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        $(document).ready(function () {
        });

        function pageLoad() {
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlARUsers").ufd({ log: true });
            });
            $(function () {
                $("#ddlJobName").ufd({ log: true });
            });
            setupDatePicker();
            $('.date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            Filter(document.getElementById('txtKeywordSearch'));
        }

        function DoOnAjaxPostback() {
        }

        function DisplayFields(ddlFT, txtLen, txtDec) {
            var ddl = document.getElementById(ddlFT);
            if (ddl.options[ddl.selectedIndex].text.toLowerCase() == "varchar2") {
                document.getElementById(txtLen).disabled = false;
                document.getElementById(txtDec).disabled = true;
                document.getElementById(txtDec).value = '';
            }
            else if (ddl.options[ddl.selectedIndex].text.toLowerCase() == "numeric") {
                document.getElementById(txtLen).disabled = false;
                document.getElementById(txtDec).disabled = false;
            }
            else {
                document.getElementById(txtLen).disabled = true;
                document.getElementById(txtLen).value = '';
                document.getElementById(txtDec).disabled = true;
                document.getElementById(txtDec).value = '';
            }
        }

        function DisableFields() {
            if (document.getElementById('chkIsOneRow').checked)
                FieldSet(true);
            else
                FieldSet(false);
        }

        function FieldSet(val) {
            document.getElementById('txtCV1Label').disabled = val;
            document.getElementById('ddlCV1FType').disabled = val;
            document.getElementById('ddlCV1Length').disabled = val;
            document.getElementById('txtCV1Decimals').disabled = val;
            document.getElementById('chkCV1Mnd').disabled = val;

            document.getElementById('txtCV2Label').disabled = val;
            document.getElementById('ddlCV2FType').disabled = val;
            document.getElementById('ddlCV2Length').disabled = val;
            document.getElementById('txtCV2Decimals').disabled = val;
            document.getElementById('chkCV2Mnd').disabled = val;

            document.getElementById('txtCV3Label').disabled = val;
            document.getElementById('ddlCV3FType').disabled = val;
            document.getElementById('ddlCV3Length').disabled = val;
            document.getElementById('txtCV3Decimals').disabled = val;
            document.getElementById('chkCV3Mnd').disabled = val;

            document.getElementById('txtCV4Label').disabled = val;
            document.getElementById('ddlCV4FType').disabled = val;
            document.getElementById('ddlCV4Length').disabled = val;
            document.getElementById('txtCV4Decimals').disabled = val;
            document.getElementById('chkCV4Mnd').disabled = val;

            document.getElementById('txtCV5Label').disabled = val;
            document.getElementById('ddlCV5FType').disabled = val;
            document.getElementById('ddlCV5Length').disabled = val;
            document.getElementById('txtCV5Decimals').disabled = val;
            document.getElementById('chkCV5Mnd').disabled = val;
        }

        function Filter(Obj) {
            var grid = document.getElementById('gvCodeAlloc');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[cellNr].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            //Obj.set();
        }
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
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

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
            font-weight: normal;
        }

        .radioButtonList input[type="radio"] {
            float: right;
            margin: 3px -20px 0px -150px;
        }

        .radioButtonList label {
            width: 180px;
            display: block;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
            font-weight: normal;
        }

        .col1 {
            height: 30px;
            background-image: url('../img/th.png');
            background-repeat: no-repeat;
            color: white;
            text-shadow: #012b4d 2px 2px 2px;
            text-align: center;
            font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';
            font-size: 1em;
            font-weight: normal;
        }
        /*gvJobStatus*/

        #gvCodeAllocjEsCoOl_headerDiv, #gvEditCodejEsCoOl_headerDiv, #gvJobStatusjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvCodeAllocjEsCoOl_headerDiv div table tbody tr th, #gvEditCodejEsCoOl_headerDiv div table tbody tr th,
            #gvJobStatusjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvCodeAlloc tbody tr td, #gvEditCode tbody tr td, #gvJobStatus tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            font-size: 0.9em;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvCodeAllocjEsCoOl_mainDiv, #gvEditCodejEsCoOl_mainDiv, #gvJobStatusjEsCoOl_mainDiv {
            /*width: 500px;*/
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvCodeAlloc TR TD, #gvCodeAlloc TR TH, #gvCodeAlloc TR TH div, #gvCodeAlloc TR TD div,
        #gvEditCode TR TD, #gvEditCode TR TH, #gvEditCode TR TH div, #gvEditCode TR TD div,
        #gvJobStatus TR TD, #gvJobStatus TR TH, #gvJobStatus TR TH div, #gvJobStatus TR TD div {
            overflow: visible;
        }

        .tablemain td {
            padding: 10px;
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
                        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
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
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="../images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%" style="vertical-align: top">
                                                        <h2>Code Allocation
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnJobStatus" runat="server" Text="Running Jobs" CssClass="buttonnew-blue" OnClick="btnJobStatus_Click" />
                                                        <asp:Button ID="btnAddNewCode" runat="server" Text="Add Code" CssClass="buttonnew-blue" OnClick="AddNewCode" />
                                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table width="100%">
                                                <tr>
                                                    <td colspan="3">
                                                        <asp:Label ID="lblHelp" runat="server"></asp:Label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <small>
                                                            <label>
                                                                Company Code:&nbsp;&nbsp;</label></small>
                                                        <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                            AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" Width="200px">
                                                        </asp:DropDownList>
                                                    </td>
                                                </tr>
                                            </table>
                                            <br />
                                            <br />
                                            <asp:TextBox ID="txtKeywordSearch" runat="server" Width="300px" CssClass="filterdata" placeholder="Type in CodeName or Description to search.." />
                                            <asp:HiddenField ID="hdnKeywordSearch" runat="server" />
                                            <br />
                                            <br />
                                            <isx:CoolGridView ID="gvCodeAlloc" runat="server" AllowPaging="false" AutoGenerateColumns="false"
                                                Height="300px" Width="650px" OnRowDataBound="gvCodeAlloc_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkCodeID" runat="server" Text="CodeName" CommandArgument="CodeID"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:LinkButton ID="lnkCodeID" runat="server" OnClick="Edit" Text='<%#Eval("CodeID")%>'></asp:LinkButton></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkDescr" runat="server" Text="Decription" CommandArgument="Descr"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label><%#Eval("Descr")%></label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="RequestID">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkDeletable" runat="server" Text="Deletable" CommandArgument="IsDeletable"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:CheckBox ID="chkEnable" runat="server" Enabled="false" />
                                                            <asp:HiddenField ID="hdnCodeID" runat="server" Value='<%#Eval("CodeID") %>' />
                                                            <asp:HiddenField ID="hdnDescr" runat="server" Value='<%#Eval("Descr") %>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="View">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkEditBtn" runat="server" ToolTip="View Code" CommandArgument="test"
                                                                OnClick="Edit" Text="Edit"><img src="../images/icons/arrow_out.png" /></asp:LinkButton>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 150px"><label>
                                                        No data to display</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                        </div>
                                        <asp:Panel ID="pnlDisplayCode" runat="server" Style="display: none;">
                                            <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; height: 518px; width: 100%">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="30%">
                                                                <h2 class="pophead">View Code Details</h2>
                                                            </td>
                                                            <td width="70%" align="right">
                                                                <asp:Button ID="btnEditCode" runat="server" Text="Edit Code" CssClass="buttonnew-blue" OnClick="EditSyCode" />
                                                                <asp:Button ID="btnRefreshCodeData" Text="Refresh" CssClass="buttonnew-blue" runat="server" OnClick="RefreshCodeData" />
                                                                <asp:Button ID="btnDisplayCodeClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvErrMsg" runat="server" style="color: Red; font-weight: bold">
                                                        </div>
                                                        <table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Company Code :&nbsp;&nbsp;</label></small>
                                                                    <label>
                                                                        <asp:Label ID="lblCompCode" runat="server"></asp:Label></label></td>
                                                                <td style="text-align: right">
                                                                    <asp:Button ID="btnAddLkpCode" runat="server" Text="Add New Code" CssClass="buttonnew-blue" OnClick="AddLkpCode" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="35%" colspan="1">
                                                                    <small>
                                                                        <label>
                                                                            Code Name :&nbsp;&nbsp;</label></small>
                                                                    <asp:Label ID="lblCodeID" runat="server"></asp:Label>
                                                                </td>
                                                                <td width="65%" colspan="2">
                                                                    <small>
                                                                        <label>
                                                                            Description : &nbsp;&nbsp;</label></small>
                                                                    <label>
                                                                        <asp:Label ID="lblCodeDescr" runat="server"></asp:Label></label>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <br />
                                                        <br />
                                                        <isx:CoolGridView ID="gvEditCode" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                            Height="300px" OnRowDataBound="gvEditCode_RowDataBound" OnRowDeleting="gvEditCode_RowDeleting"
                                                            OnRowCommand="gvEditCode_RowCommand">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="Action">
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:LinkButton ID="lnkEditCode" runat="server" ToolTip="View Code" CommandArgument="test"
                                                                                OnClick="EditLkpCode" Text="Edit"><img src="../images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;
                                                                    <asp:LinkButton ID="lnkDeleteCode" runat="server" ToolTip="Delete Code" Text="Delete"
                                                                        CommandArgument='<%#Eval("CodeKey")%>' CommandName="Delete"><img src="../images/icons/dialog_cancel.png" /></asp:LinkButton></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel1" runat="server" CommandArgument="CodeKey"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                        <asp:Label ID="lblBreak" runat="server"></asp:Label>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCKey" runat="server" Text='<%#Eval("CodeKey")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel2" runat="server" CommandArgument="Description"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblDescr" runat="server" Text='<%#Eval("Description")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel3" runat="server" CommandArgument="CodeValue1"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCV1" runat="server" Text='<%#Eval("CodeValue1")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel4" runat="server" CommandArgument="CodeValue2"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCV2" runat="server" Text='<%#Eval("CodeValue2")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel5" runat="server" CommandArgument="CodeValue3"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCV3" runat="server" Text='<%#Eval("CodeValue3")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel6" runat="server" CommandArgument="CodeValue4"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCV4" runat="server" Text='<%#Eval("CodeValue4")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lblHeaderLabel7" runat="server" CommandArgument="CodeValue5"
                                                                            OnCommand="SortExpressionEdit" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblCV5" runat="server" Text='<%#Eval("CodeValue5")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 150px"><label>
                                                                    No data to display</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                        <asp:HiddenField ID="hdnCompCode" runat="server" />
                                                        <asp:HiddenField ID="hdnCodeKey" runat="server" />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDisplayCode" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDisplayCode" runat="server" DropShadow="false" PopupControlID="pnlDisplayCode"
                                            TargetControlID="lnkDisplayCode" BackgroundCssClass="modalBackground" CancelControlID="btnDisplayCodeClose">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlCreateCode" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div id="Div1" class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 80%; width: 100%;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="60%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHCreateCode" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="40%" style="text-align: right">
                                                                <asp:Button ID="btnCCSave" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="SaveNewSyCode"></asp:Button>
                                                                <asp:Button ID="btnCCDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" Visible="false"></asp:Button>
                                                                <asp:Button ID="btnCCClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnCCClose_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div id="dvScroll" style="overflow-x: hidden; overflow-y: scroll; height: 400px">
                                                        <div class="divfieldset" style="width: 800px">
                                                            <div id="dvErrCreateCode" runat="server" style="font-weight: bold">
                                                            </div>
                                                            <table style="width: 100%">
                                                                <tr>
                                                                    <td>
                                                                        <table width="100%">
                                                                            <%--<tr>
                                                                                <td style="width: 25%; text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Organization:<label></small>
                                                                                </td>
                                                                                <td>&nbsp;&nbsp; <b>
                                                                                    <asp:Label ID="lblCCOrgID" runat="server"> <%=hdnOrgName.Value%></asp:Label></b>
                                                                                </td>
                                                                            </tr>--%>
                                                                            <tr>
                                                                                <td>&nbsp;
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="width: 20%; text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            CodeID:</label></small>
                                                                                </td>
                                                                                <td>&nbsp;&nbsp;<b>
                                                                                    <asp:TextBox ID="txtCCCodeID" runat="server"></asp:TextBox></b>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>&nbsp;
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="width: 20%; text-align: right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Description:<label></small>
                                                                                </td>
                                                                                <td>&nbsp;&nbsp;<b>
                                                                                    <asp:TextBox ID="txtCCDescription" runat="server"></asp:TextBox></b>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td>
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td colspan="2" style="text-align: left">
                                                                                    <asp:RadioButtonList ID="rblOrgLevel" runat="server" RepeatDirection="Horizontal"
                                                                                        CssClass="radioButtonList">
                                                                                        <asp:ListItem Text="OrgLevel Only" Value="1"></asp:ListItem>
                                                                                        <asp:ListItem Text="Add to all Companies" Value="2"></asp:ListItem>
                                                                                    </asp:RadioButtonList>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>&nbsp;
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td style="text-align: left; padding-left: 105px;">
                                                                                                <small>
                                                                                                    <asp:CheckBox ID="chkIsDeletable" runat="server" Font-Bold="true" Text="IsDeletable&nbsp;&nbsp;&nbsp;"
                                                                                                        TextAlign="Left" /></small>
                                                                                            </td>
                                                                                            <td style="text-align: left; padding-left: 95px;">
                                                                                                <small>
                                                                                                    <asp:CheckBox ID="chkIsOneRow" runat="server" Font-Bold="true" Text="IsOneRow&nbsp;&nbsp;&nbsp;"
                                                                                                        TextAlign="Left" onclick="DisableFields();" /></small>
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
                                                        <div class="divfieldset" style="width: 800px">
                                                            <table style="width: 80%;">
                                                                <tr>
                                                                    <td></td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Label</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                FieldType</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Length</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Decimals</label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeKey:<label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCodeKeyLabel" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCodeKeyFType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCodeKeyLength" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCodeKeyDecimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                Description:<label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtDescLabel" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlDescFType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlDescLength" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtDescDecimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div class="divfieldset" style="width: 800px">
                                                            <table style="width: 85%;">
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Label</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                FieldType</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Length</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Decimals</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Mandatory</label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeValue1:</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV1Label" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV1FType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV1Length" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV1Decimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:CheckBox ID="chkCV1Mnd" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeValue2:</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV2Label" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV2FType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV2Length" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV2Decimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:CheckBox ID="chkCV2Mnd" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeValue3:</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV3Label" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV3FType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV3Length" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV3Decimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:CheckBox ID="chkCV3Mnd" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeValue4:<label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV4Label" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV4FType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV4Length" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV4Decimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:CheckBox ID="chkCV4Mnd" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                CodeValue5:</label></small>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV5Label" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV5FType" runat="server" Width="120px" AutoPostBack="true"
                                                                            OnSelectedIndexChanged="ChangeLengths">
                                                                            <asp:ListItem Text="Varchar2" Value="Varchar2"></asp:ListItem>
                                                                            <asp:ListItem Text="Numeric" Value="Numeric"></asp:ListItem>
                                                                            <asp:ListItem Text="DateTime" Value="DateTime"></asp:ListItem>
                                                                            <asp:ListItem Text="YesNo" Value="YesNo"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:DropDownList ID="ddlCV5Length" runat="server" Width="50px" DataTextField="Length"
                                                                            DataValueField="Length">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:TextBox ID="txtCV5Decimals" runat="server" Width="50px"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: center">
                                                                        <asp:CheckBox ID="chkCV5Mnd" runat="server" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkCreateCode" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popCreateCode" runat="server" DropShadow="false" PopupControlID="pnlCreateCode"
                                            TargetControlID="lnkCreateCode" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlEditLkpCode" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div id="Div3" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 80%; min-width: 670px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="60%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHEditLkpCode" runat="server"></asp:Label></h2>
                                                            </td>
                                                            <td width="40%" style="text-align: right">
                                                                <asp:Button ID="btnEditLkpCodeSave" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="SaveLkpCode" TabIndex="8"></asp:Button>
                                                                <asp:Button ID="btnEditLkpCodeDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="DeleteLkpCode" TabIndex="9"></asp:Button>
                                                                <asp:Button ID="btnEditLkpCodeClose" runat="server" Text="Close" CssClass="buttonnew-blue" TabIndex="10" OnClick="btnEditLkpCodeClose_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvErrEditLkpCode" runat="server" style="font-weight: bold">
                                                        </div>
                                                        <br />
                                                        <table width="60%">
                                                            <tr>
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel" runat="server"></asp:Label>
                                                                                            &nbsp;:&nbsp;</label></small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel" runat="server" TabIndex="1"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeDescr" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeDescr" runat="server"></asp:Label>
                                                                                            &nbsp;:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeDescr" runat="server" TabIndex="2"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel1" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel1" runat="server"></asp:Label>
                                                                                            &nbsp; :&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel1" runat="server" TabIndex="3"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel2" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel2" runat="server"></asp:Label>
                                                                                            &nbsp; :&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel2" runat="server" TabIndex="4"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel3" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel3" runat="server"></asp:Label>
                                                                                            &nbsp;:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel3" runat="server" TabIndex="5"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel4" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel4" runat="server"></asp:Label>
                                                                                            &nbsp;:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel4" runat="server" TabIndex="6"></asp:TextBox>
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
                                                                <td width="100%">
                                                                    <div id="dvEditCodeLabel5" runat="server">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%" align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditCodeLabel5" runat="server"></asp:Label>
                                                                                            &nbsp;:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td width="50%" align="left">
                                                                                    <asp:TextBox ID="txtEditCodeLabel5" runat="server" TabIndex="7"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkEditLkpcode" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popEditLkpcode" runat="server" DropShadow="false" PopupControlID="pnlEditLkpCode"
                                            TargetControlID="lnkEditLkpcode" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteCode" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>Are you sure you want to delete this code?</label>
                                                        </small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAssignRole" runat="server" Style="display: none">
                                            <div class="main-content" id="Div5" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Assign AP Profile</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnARSave" runat="server" OnClick="AssignAPRole" Text="Save" CssClass="buttonnew-green" />
                                                                <asp:Button ID="btnARCancel" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvErrAssignRole" runat="server">
                                                        </div>
                                                        <br />
                                                        <small>
                                                            <label>Please selected any user from the list to assign AP Profile.</label></small> &nbsp;&nbsp;&nbsp;
                                                    <asp:DropDownList ID="ddlARUsers" runat="server" DataTextField="Email" DataValueField="UserID"
                                                        ClientIDMode="Static" name="ddlARUsers">
                                                    </asp:DropDownList>
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAssignRole" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAssignRole" runat="server" DropShadow="false" PopupControlID="pnlAssignRole"
                                            TargetControlID="lnkAssignRole" BackgroundCssClass="modalBackground1" CancelControlID="btnARCancel">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlertforAPSts" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div6" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYesAPSts" runat="server" OnClick="UpdateAutoAPFlag" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNoAPSts" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <small>
                                                            <label>
                                                                There are requests with AP Review status currently. You really want to auto approve
                                                    those requests?</label></small>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlertforAPSts" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlertforAPSts" runat="server" DropShadow="false" PopupControlID="pnlAlertforAPSts"
                                            TargetControlID="lnkAlertforAPSts" BackgroundCssClass="modalBackground1" CancelControlID="btnNoAPSts">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlJobStatus" runat="server" Style="display: none">
                                            <div class="main-content" id="Div7" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Running Jobs</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnRefreshJobs" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnRefreshJobs_Click" />
                                                                <asp:Button ID="btnJobStatusCancel" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <table width="50%">
                                                                        <tr>
                                                                            <td align="right"><small>
                                                                                <label>Select Job Name:&nbsp;</label></small></td>
                                                                            <td>
                                                                                <asp:DropDownList ID="ddlJobName" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlJobName_SelectedIndexChanged"></asp:DropDownList></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvJobStatus" runat="server" Width="750px" Height="300px" AutoGenerateColumns="false"
                                                                        ShowHeader="true" OnRowDataBound="gvJobStatus_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Job Name" HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                                <ItemTemplate>
                                                                                    <label><%#Eval("JobName") %></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Start Time" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <label><%#Convert.ToDateTime(Eval("StartTime")) %></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="End Time" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                                <ItemTemplate>
                                                                                    <label><%#Convert.ToDateTime(Eval("EndTime")) %></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Status">
                                                                                <ItemTemplate>
                                                                                    <label><%#Eval("Status") %></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Batch#">
                                                                                <ItemTemplate>
                                                                                    <label><%#Eval("BatchNum") %></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 150px"><label>No data to display</label></div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkJobStatus" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popJobStatus" runat="server" PopupControlID="pnlJobStatus" TargetControlID="lnkJobStatus"
                                            DropShadow="false" BackgroundCssClass="modalBackground" CancelControlID="btnJobStatusCancel">
                                        </cc1:ModalPopupExtender>
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
</body>
</html>
