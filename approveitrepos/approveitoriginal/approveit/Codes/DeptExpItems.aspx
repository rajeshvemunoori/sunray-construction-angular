<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DeptExpItems.aspx.cs" Inherits="Codes_DeptExpItems" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Chart of Accounts</title>
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
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css" />
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
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

        var jq = $.noConflict();

        function DoOnAjaxPostback() {
            jq(function () {
                jq("#ddlEditDept").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCompCode").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlDept").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlAccntType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCtrlAccnt").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlBankingType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlFromDept").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlToDept").ufd({ log: true });
            });
            Filter(document.getElementById('txtKeywordSearch'));
        }

        $(document).ready(function () {
            jq(function () {
                jq("#ddlEditDept").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCompCode").ufd({ log: true });
            });
            jq(function () {
                $("#ddlDept").ufd({ log: true });
            });
            $(function () {
                jq("#ddlAccntType").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlCtrlAccnt").ufd({ log: true });
            });
            jq(function () {
                jq("#ddlBankingType").ufd({ log: true });
            });
        });

        function refreshExp() {
            jq(".btnRefresh").click();
        }

        function CheckForFile() {
            document.getElementById('dvUploadErr').style.color = "Red";
            if (document.getElementById('fupdExp').value == 0) {
                document.getElementById('dvUploadErr').innerHTML = "Please browse and select a file of type .xls or .xlsx";
                return false;
            }
            showProgress();
        }

        function Filter(Obj) {
            var grid = document.getElementById('gvDeptExp');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }

        function FilterClass(Obj) {
            var grid = document.getElementById('gvClass');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }

        //Show/Hide Save all button in the header
        function ShowSaveButton(objRef) {
            var row = objRef.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            //Get the reference of GridView
            var GridView = row.parentNode;
            //Get all input elements in Gridview
            var inputList = GridView.getElementsByTagName("input");
            var checkCnt = 0;
            for (var i = 0; i < inputList.length; i++) {
                if ((inputList[i].type == "checkbox" && inputList[i].checked) || (inputList[i].type == "text" && inputList[i].value.length > 0)) {
                    checkCnt++;
                }
                if (inputList[i].type == "checkbox" && inputList[i].id.indexOf("chkIsExpenseRequest") > 0 && inputList[i].checked) {
                    inputList[i + 1].disabled = false;
                    inputList[i + 2].disabled = false;
                    inputList[i + 3].disabled = false;
                }
                else if (inputList[i].type == "checkbox" && inputList[i].id.indexOf("chkIsExpenseRequest") > 0 && !inputList[i].checked) {
                    inputList[i + 1].disabled = true;
                    inputList[i + 1].checked = false;
                    inputList[i + 2].disabled = true;
                    inputList[i + 2].checked = false;
                    inputList[i + 3].disabled = true;
                    inputList[i + 3].value = '';
                }
            }
            if (checkCnt > 0)
                document.getElementById('btnSaveAll').style.display = "block";
            else
                document.getElementById('btnSaveAll').style.display = "none";
        }
        //Show/Hide Save all button in the header

        //Redirect to Sync screen
        function transferToSync() {
            showProgress();
            window.location.href = "../SyncAcc.aspx";
        }
        //Redirect to Sync screen

        //validate if there are any pending requests with selected account which is being moved to another dept
        function validatePendReq() {

        }
        //validate if there are any pending requests with selected account which is being moved to another dept
    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update panel.
-->
    <script type="text/javascript">
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
        .rowcolor {
            background-color: #EEB4B4;
        }

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

        .modalBackground2 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .markItUp {
            width: 300px;
        }

        .lnk {
            color: White;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px;
            background-color: Black;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 3px;
            }

        .lbl {
            text-align: right;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        #gvImpExpItemsjEsCoOl_headerDiv, #gvDeptExpjEsCoOl_headerDiv, #gvClassjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvImpExpItemsjEsCoOl_headerDiv div table tbody tr th, #gvDeptExpjEsCoOl_headerDiv div table tbody tr th,
            #gvClassjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvImpExpItems tbody tr td, #gvDeptExp tbody tr td, #gvClass tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvImpExpItemsjEsCoOl_mainDiv, #gvDeptExpjEsCoOl_mainDiv, #gvClassjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvDeptExp TR TD, #gvDeptExp TR TH, #gvDeptExp TR TH div, #gvDeptExp TR TD div,
        #gvImpExpItems TR TD, #gvImpExpItems TR TH, #gvImpExpItems TR TH div, #gvImpExpItems TR TD div,
        #gvClass TR TD, #gvClass TR TH, #gvClass TR TH div, #gvClass TR TD div {
            overflow: visible;
        }

        .tablepop {
            width: 100%;
        }

            .tablepop td {
            }

                .tablepop td table {
                    width: 100%;
                }

        .deptmulti label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
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
                                        <img src="../images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="btnDisplayData" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%;">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <hgroup>
                                                        <h2>Chart of Accounts
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="lnkAddNewExp" OnClick="AddNewExp" runat="server" Text="Add Account" CssClass="buttonnew-blue" />
                                                    <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="buttonnew-blue" />
                                                    <asp:Button ID="btnClasses" runat="server" Text="Classes" CssClass="buttonnew-blue" OnClick="ShowClasses" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table style="width: 100%">
                                                <tr>
                                                    <td width="100%">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvMainMsg" runat="server" style="font-weight: bold">
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%" colspan="2">
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td style="text-align: left">
                                                                                <small>
                                                                                    <label>
                                                                                        Organization:&nbsp;&nbsp;</label></small>
                                                                                <b>
                                                                                    <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
                                                                            </td>
                                                                            <td style="text-align: right">
                                                                                <asp:Button ID="btnChangeAccDept" runat="server" Text="Modify Accounts by Dept." CssClass="buttonnew-blue" OnClick="btnChangeAccDept_Click" />
                                                                                <asp:Button ID="btnUpload" runat="server" Text="Import Accounts From Excel" CssClass="buttonnew-blue"
                                                                                    OnClick="btnUpload_Click" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: left">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        CompanyCode:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged"
                                                                                    DataTextField="BusinessType" DataValueField="CompCode" AutoPostBack="true" Width="200px">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="text-align: left">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <small>
                                                                                    <label>
                                                                                        Department:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td>
                                                                                <asp:DropDownList ID="ddlDept" runat="server" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged"
                                                                                    DataTextField="Description" DataValueField="CodeKey" AutoPostBack="true">
                                                                                </asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        <div style="width: 55%; float: left">
                                                            <asp:TextBox ID="txtKeywordSearch" runat="server" Width="275px" CssClass="filterdata" placeholder="Type in Account Name, CodeKey or Acc# to search.." />
                                                        </div>
                                                        <div style="width: 45%; float: left">
                                                            <asp:Button ID="btnSaveAll" runat="server" Text="Save" CssClass="buttonnew-blue" Style="display: none" OnClick="SaveAllClassifications" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%">
                                                        <isx:CoolGridView ID="gvDeptExp" runat="server" AutoGenerateColumns="false" Width="730px"
                                                            Height="300px" GridLines="None" OnRowDataBound="gvDeptExp_RowDataBound" OnRowCommand="gvDeptExp_RowCommand" OnRowDeleting="gvDeptExp_RowDeleting">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="Account Code" HeaderStyle-Width="200px" ItemStyle-HorizontalAlign="Left">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkAccCode" runat="server" Text="Account Number" CommandArgument="accountCode"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblAcc" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label>
                                                                            <asp:Label ID="lblExpCode" runat="server" Text='<%#Eval("expcode")%>' Visible="false"></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField ControlStyle-Width="200px" HeaderStyle-Width="200px" ItemStyle-HorizontalAlign="Left">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkExpItem" runat="server" Text="Account Name" CommandArgument="expItem"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblExpItem" runat="server" Text='<%#Eval("expItem")%>'></asp:Label></label>
                                                                        <asp:HiddenField ID="hdnSeqID" runat="server" Value='<%#Eval("seqId")%>' />
                                                                        <asp:LinkButton ID="lnkHve" runat="server"></asp:LinkButton>
                                                                        <cc1:HoverMenuExtender ID="hveAction" runat="server" TargetControlID="lnkHve"
                                                                            PopupControlID="pnlAct" PopupPosition="Bottom">
                                                                        </cc1:HoverMenuExtender>
                                                                        <%--TargetControlID="lblExpItem"--%>
                                                                        <asp:Panel ID="pnlAct" runat="server" Style="display: none">
                                                                            <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 100%; min-width: 350px; height: 150px;">
                                                                                <div style="padding: 10px;">
                                                                                    <div class="divfieldset" style="background-color: white">
                                                                                        <table class="tablepop">
                                                                                            <tr>
                                                                                                <td colspan="2" style="text-align: left; padding-left: 10px;">
                                                                                                    <asp:CheckBox ID="chkIsExpenseRequest" runat="server" TextAlign="Right" Text="   Expense" onclick="ShowSaveButton(this);" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="text-align: left; padding-left: 10px;">
                                                                                                    <asp:CheckBox ID="chkTravelSpec" runat="server" TextAlign="Right" Text="   Travel Specific" onclick="ShowSaveButton(this);" /></td>
                                                                                                <td style="text-align: left; padding-left: 10px;">
                                                                                                    <asp:CheckBox ID="chkReimbursible" runat="server" TextAlign="Right" Text="   Reimbursible" onclick="ShowSaveButton(this);" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="text-align: left; padding-left: 10px;">
                                                                                                    <asp:CheckBox ID="chkAttachment" runat="server" TextAlign="Right" Text="   Attachment" onclick="ShowSaveButton(this);" /></td>
                                                                                                <td style="text-align: left; padding-left: 5px">
                                                                                                    <asp:TextBox ID="txtMaxAmount" runat="server" placeholder="Maximum Amount" CssClass="normal" onkeyup="ShowSaveButton(this);" /></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </asp:Panel>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Account Type">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkAccntType" runat="server" Text="Account Type" CommandArgument="acctType"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblAccntType" runat="server" Text='<%#Eval("acctType")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Banking Type">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkBankingType" runat="server" Text="Banking Type" CommandArgument="bankType"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:Label ID="lblBankingType" runat="server" Text='<%#Eval("bankType")%>'></asp:Label></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Action">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnkEdit" runat="server" ToolTip="View" CommandArgument="test"
                                                                            OnClick="Edit"><img src="../images/icons/pencil.png" alt="Modify Account"/></asp:LinkButton>
                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete Account" CommandArgument='<%#Eval("seqId") %>'
                                                                            CommandName="Delete"><img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 450px">
                                                                    <label>
                                                                        No Accounts available for the selected Department</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                        <asp:HiddenField ID="hdnDeptExpSeqID" runat="server" />
                                                        <asp:HiddenField ID="hdnQBID" runat="server" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <asp:Panel ID="pnlAddDeptExp" runat="server" Style="display: none" CssClass="modalPopup"
                                            DefaultButton="btnSave">
                                            <div id="Div1" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 570px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHDeptExp" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveDeptExp"></asp:Button>
                                                                <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvErrMsg" runat="server" style="font-weight: bold">
                                                        </div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>Department:</label></small><br />
                                                                    <asp:DropDownList ID="ddlEditDept" runat="server" Width="190px" DataTextField="Description"
                                                                        DataValueField="CodeKey" OnSelectedIndexChanged="ddlEditDept_SelectedIndexChanged" AutoPostBack="true">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td><small>
                                                                    <label>Parent Account:</label></small><br />
                                                                    <asp:DropDownList ID="ddlCtrlAccnt" runat="server" Width="190px"></asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label><em>*</em>Account:</label></small><br />
                                                                    <asp:TextBox ID="txtExpItem" runat="server" Width="180px"></asp:TextBox>
                                                                </td>
                                                                <td><small>
                                                                    <label>Account Type:</label></small><br />
                                                                    <asp:DropDownList ID="ddlAccntType" runat="server" Width="190px"></asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label><em>*</em>Account Number:</label></small><br />
                                                                    <asp:TextBox ID="txtAccCode" runat="server" Width="180px"></asp:TextBox>
                                                                    <asp:DropDownList ID="ddlQBAccCode" runat="server" Visible="false"></asp:DropDownList>
                                                                    <br />
                                                                </td>
                                                                <td><small>
                                                                    <label>Banking Type:</label></small><br />
                                                                    <asp:DropDownList ID="ddlBankingType" runat="server" Width="190px"></asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDeptExp" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popDeptExp" runat="server" DropShadow="false" TargetControlID="lnkDeptExp"
                                            PopupControlID="pnlAddDeptExp" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
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
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="padding: 5px;">
                                                        <div class="divfieldset">
                                                            <label>
                                                                <asp:Label ID="lblAlert" runat="server"></asp:Label></label>
                                                            <asp:HiddenField ID="hdnAlertType" runat="server" />
                                                            <br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlUpload" runat="server" Style="display: none">
                                            <div id="Div2" class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td>
                                                                <h2 class="pophead">Upload Accounts Data
                                                                </h2>
                                                            </td>
                                                            <td align="right">
                                                                <asp:Button ID="btnCancelUpload" runat="server" Text="Cancel" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="padding: 5px">
                                                        <div class="divfieldset">
                                                            <div id="dvUploadErr" runat="server">
                                                            </div>
                                                            <br />
                                                            <div style="float: left">
                                                                <asp:FileUpload ID="fupdExp" runat="server" />
                                                            </div>
                                                            <div style="float: left; padding-left: 0.5em">
                                                                <a href="#" id="tooltip">
                                                                    <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                    <span><small>
                                                                        <label>File types allowd are .xls and .xlsx</label></small>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <br />
                                                            <br />
                                                            <div id="dvDisplay" runat="server">
                                                                <asp:Button ID="btnDisplayData" runat="server" Text="Load Data" CssClass="buttonnew-blue"
                                                                    OnClick="btlDisplayData_Click" />
                                                                <a href="../DownloadFile.aspx?typ=8">Download Template</a>
                                                            </div>
                                                            <div id="dvUpload" runat="server">
                                                                <asp:Button ID="btnUploadExpItems" runat="server" OnClick="UploadExpItems" Text="Upload" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnClearData" runat="server" Text="Clear Data" CssClass="buttonnew-blue"
                                                                    OnClick="btnClearData_Click" />
                                                            </div>
                                                            <br />
                                                            <br />
                                                            <div>
                                                                <%if (gvImpExpItems.Rows.Count > 0)
                                                                  { %>
                                                                <isx:CoolGridView ID="gvImpExpItems" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                                    Width="650px" Height="200px">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="FailureMessage">
                                                                            <ItemTemplate>
                                                                                <span style="color: Red">
                                                                                    <label>
                                                                                        <%#Eval("FailureMessage")%></span></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="DeptCode" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("DEPARTMENTCODE")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="AccountName" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("ACCOUNTNAME")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="AccountNumber">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("ACCOUNTNUMBER")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="AccountType">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("ACCOUNTTYPE")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="BankingType">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("BANKINGTYPE")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="CtrlAccount">
                                                                            <ItemTemplate>
                                                                                <label><%#Eval("CTRLACCOUNTNUMBER")%></label>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 400px">
                                                                            <label>
                                                                                Data uploaded successfully with out any failure.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                                <%} %>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkUpload" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popUpload" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                            TargetControlID="lnkUpload" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelUpload">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlChangeAccDept" runat="server" Style="display: none">
                                            <div class="main-content" id="Div3" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Modify Accounts Dept.</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnCancelChangeDept" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvChgAccDeptMsg" runat="server"></div>
                                                        <div class="message info">
                                                            <label><em>*</em>All the actions on this screen are automatically saved.</label>
                                                        </div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td><small>
                                                                                <label>From Department:</label></small></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:DropDownList ID="ddlFromDept" runat="server" OnSelectedIndexChanged="ddlFromDept_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:ListBox ID="lstFromDept" runat="server" Height="250px" Width="250px" SelectionMode="Multiple"></asp:ListBox>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="vertical-align: middle">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Button ID="btnCopyAccDept" runat="server" Text="Copy" OnClick="btnCopyAccDept_Click" CssClass="buttonnew-blue" /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Button ID="btnMoveAccDept" runat="server" Text="Move" OnClick="btnMoveAccDept_Click" CssClass="buttonnew-blue" /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Button ID="btnNullAccDept" runat="server" Text="Remove Dept." OnClick="btnNullAccDept_Click" CssClass="buttonnew-blue" /></td>
                                                                        </tr>
                                                                    </table>
                                                                    <asp:HiddenField ID="hdnCopyType" runat="server" />
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td><small>
                                                                                <label>To Department(s):</label></small></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:DropDownCheckBoxes ID="ddlToDept" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                                    Width="200px" OnSelectedIndexChanged="ddlToDept_SelectedIndexChanged" AutoPostBack="true" CssClass="deptmulti">
                                                                                    <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Departments" />
                                                                                </asp:DropDownCheckBoxes>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:ListBox ID="lstToDept" runat="server" Height="250px" Width="250px"></asp:ListBox>
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
                                        <asp:LinkButton ID="lnkChangeAccDept" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popChangeAccDept" runat="server" TargetControlID="lnkChangeAccDept" PopupControlID="pnlChangeAccDept"
                                            DropShadow="false" CancelControlID="btnCancelChangeDept" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlChangeAccDeptAlert" runat="server" Style="display: none">
                                            <div class="main-content" id="Div5" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnConfChangeAccDept" runat="server" OnClick="btnConfChangeAccDept_Click" Text="Ok" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCancelChangeAccDept" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <asp:Label ID="lblMsgChangeAccDept" runat="server"></asp:Label>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkChangeAccDeptAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlertChangeAccDept" runat="server" TargetControlID="lnkChangeAccDeptAlert" PopupControlID="pnlChangeAccDeptAlert"
                                            DropShadow="false" BackgroundCssClass="modalBackground2" CancelControlID="btnCancelChangeAccDept">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlClass" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 30%;">
                                                                <h2 class="pophead">Classes</h2>
                                                            </td>
                                                            <td align="right" style="width: 70%">
                                                                <asp:Button ID="btnCancelClass" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <asp:TextBox ID="txtFilterClass" runat="server" CssClass="filterdata" Width="250px" placeholder="Type in Class Name to search.."></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <isx:CoolGridView ID="gvClass" runat="server" AutoGenerateColumns="false" Width="500px" Height="300px" OnRowDataBound="gvClass_RowDataBound">
                                                                                    <Columns>
                                                                                        <asp:TemplateField HeaderStyle-Width="300px" ItemStyle-Width="300px">
                                                                                            <HeaderTemplate>
                                                                                                <asp:LinkButton ID="lnkClassName" runat="server" Text="Class Name" CommandArgument="className"
                                                                                                    OnCommand="SortClassExpression" CssClass="lnk"></asp:LinkButton>
                                                                                            </HeaderTemplate>
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("className") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField>
                                                                                            <HeaderTemplate>
                                                                                                <asp:LinkButton ID="lnkActive" runat="server" Text="Active" CommandArgument="active"
                                                                                                    OnCommand="SortClassExpression" CssClass="lnk"></asp:LinkButton>
                                                                                            </HeaderTemplate>
                                                                                            <ItemTemplate>
                                                                                                <asp:CheckBox ID="chkClssActive" runat="server" />
                                                                                                <asp:HiddenField ID="hdnIsActive" runat="server" Value='<%#Eval("active") %>' />
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                    </Columns>
                                                                                </isx:CoolGridView>
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
                                        <asp:LinkButton ID="lnkClass" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popClass" runat="server" DropShadow="false" BackgroundCssClass="modalBackground1"
                                            TargetControlID="lnkClass" PopupControlID="pnlClass" CancelControlID="btnCancelClass">
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
