<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ItemCodes.aspx.cs" Inherits="Codes_ItemCodes" %>

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
    <title>ApproveIt - ItemCodes Maintenance</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link rel="stylesheet" type="text/css" href="../css/tables.css" />
    <link rel="Stylesheet" type="text/css" href="../Styles/CustomDDStyles.css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
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

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlIntDepartment").ufd({ log: true });
            });
            $(function () {
                $("#ddlIntClassification").ufd({ log: true });
            });
            $(function () {
                $("#ddlImpItemCodes").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlIntDepartment").ufd({ log: true });
            });
            $(function () {
                $("#ddlIntClassification").ufd({ log: true });
            });
            $(function () {
                $("#ddlImpItemCodes").ufd({ log: true });
            });
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function clearData() {
            $11('dvMainMsg').innerHTML = '';
        }

        //Filter Item Codes gridview
        function Filter(Obj) {
            var grid = document.getElementById('gvItemCd');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }
        //Filter Item Codes gridview

        //Show/Hide add options
        function showField(type) {
            if (type == 0) {
                $11('dvQBItemInput').style.display = "none";
                $11('dvAIItemInput').style.display = "block";
                $11('hdnIsQBItemVisible').value = "0";
                $11('lblItemTooltip').innerText = "Type in item code and must be unique.";
            }
            if (type == 1) {
                $11('dvQBItemInput').style.display = "block";
                $11('dvAIItemInput').style.display = "none";
                $11('hdnIsQBItemVisible').value = "1";
                $11('lblItemTooltip').innerText = "Select Item from the list OR Click '+' Sign to create new Item. Must be unique.";
            }
        }
        //Show/Hide add options

        //Redirect to Sync screen
        function transferToSync() {
            showProgress();
            window.location.href = "../SyncAcc.aspx";
        }
        //Redirect to Sync screen

        //import QB vendors
        function showConfirmationImportQBItem(sender, args) {
            $11('lblImpExpQBItemFileName').innerHTML = args.get_fileName();
        }
        //import QB vendors
    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
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

        #gvItemCdjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvItemCdjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvItemCd tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            text-overflow: ellipsis;
        }

        #gvItemCdjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        #gvItemCd TR TD, #gvItemCd TR TH, #gvItemCd TR TH div, #gvItemCd TR TD div {
            overflow: visible;
        }

        .dvhalign {
            height: 425px;
            padding: 20px;
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
            font-size: 1em;
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
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="lnkExportQBItem" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%;">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <hgroup>
                                                        <h2>Item Maintenance
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="buttonnew-blue" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <table width="100%">
                                                <tr>
                                                    <td colspan="2" align="center">
                                                        <div id="dvMainMsg" runat="server" style="font-weight: bold">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="35%">
                                                        <table>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table>
                                                                        <tr>
                                                                            <td align="right">
                                                                                <small>
                                                                                    <label>
                                                                                        Organization:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td align="left">
                                                                                <b>
                                                                                    <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>
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
                                                                <td colspan="2">
                                                                    <div class="message info" style="width: 90%">
                                                                        <small>
                                                                            <label><em>*</em>Please type in the ItemCode to get list of Accounts based on the selected department(s).</label></small>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            CompanyCode:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged"
                                                                        DataTextField="BusinessType" DataValueField="CompCode" AutoPostBack="true" Width="180px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Department:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <div style="float: left">
                                                                        <asp:DropDownCheckBoxes ID="ddlDepartment" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                            DataTextField="Description" DataValueField="CodeKey" Width="200px" OnSelectedIndexChanged="ddlDepartment_SelectedIndexChanged" AutoPostBack="true" CssClass="deptmulti">
                                                                            <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Departments" />
                                                                        </asp:DropDownCheckBoxes>
                                                                        <asp:DropDownList ID="ddlIntDepartment" runat="server" Width="180px" DataTextField="Description" DataValueField="CodeKey" OnSelectedIndexChanged="ddlIntDepartment_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                        <asp:HiddenField ID="hdnIsThirdPartyIntegrated" runat="server" />
                                                                    </div>
                                                                    <div style="float: left; padding-left: 0.5em">
                                                                        <a href="#" id="tooltip">
                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            <span><small>
                                                                                <label>Select any department to get list of all the account names assigned for it.</label></small>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Account Name:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <div style="float: left">
                                                                        <asp:DropDownCheckBoxes ID="ddlClassification" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                            DataTextField="AccountClss" DataValueField="expcode" Width="200px" AutoPostBack="true" OnSelectedIndexChanged="ddlClassification_SelectedIndexChanged1" CssClass="deptmulti">
                                                                            <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Accounts" />
                                                                        </asp:DropDownCheckBoxes>
                                                                        <asp:DropDownList ID="ddlIntClassification" runat="server" Width="180px" DataTextField="AccountClss" DataValueField="expcode" OnSelectedIndexChanged="ddlIntClassification_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                    </div>
                                                                    <div style="float: left; padding-left: 0.5em">
                                                                        <a href="#" id="tooltip1">
                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            <span><small>
                                                                                <label>Select any account name to assign new item to be created.</label></small>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>ItemCode:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <div style="float: left">
                                                                        <%-- <asp:TextBox ID="txtItemCode" runat="server" Width="165px" OnTextChanged="txtItemCode_TextChanged"
                                                                            AutoPostBack="true"></asp:TextBox>--%>
                                                                        <asp:HiddenField ID="hdnIsQBItemVisible" runat="server" />
                                                                        <asp:HiddenField ID="hdnQBItemID" runat="server" />
                                                                        <div id="dvQBItemInput" runat="server">
                                                                            <asp:DropDownList ID="ddlImpItemCodes" runat="server" DataTextField="itemCode" DataValueField="itemCode" Width="180px"></asp:DropDownList>
                                                                            <a href="#" id="iconQB" onclick="showField(0);" class="addItem button button-blue" title="Add new item" style="text-decoration: none">&nbsp;</a>
                                                                        </div>
                                                                        <div id="dvAIItemInput" runat="server">
                                                                            <asp:TextBox ID="txtItemCode" runat="server" Width="165px"></asp:TextBox>
                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtItemCode"
                                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetVendors" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                CompletionListItemCssClass="listItem"
                                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                            </cc1:AutoCompleteExtender>
                                                                            <a href="#" id="iconNew" onclick="showField(1);" class="import button button-blue" title="Show imported items" style="text-decoration: none;">&nbsp;</a>
                                                                        </div>
                                                                    </div>
                                                                    <div style="float: left; padding-left: 0.5em">
                                                                        <a href="#" id="tooltip2">
                                                                            <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            <span><small>
                                                                                <label id="lblItemTooltip">
                                                                                    Select Item from the list 
	    OR
	    Click '+' Sign to create new Item. Must be unique.</label></small>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Description:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine" Width="165px"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right">
                                                                    <small>
                                                                        <label>
                                                                            Notes:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td align="left">
                                                                    <asp:TextBox ID="txtItemNotes" runat="server" TextMode="MultiLine" Width="165px"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" align="center">
                                                                    <asp:Button ID="btnAdd" runat="server" Text="Add" CssClass="buttonnew-blue" OnClick="AddItemCode"></asp:Button>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="65%" style="vertical-align: top">
                                                        <table width="100%">
                                                            <tr>
                                                                <td colspan="2" style="vertical-align: top; text-align: right">
                                                                    <asp:Button ID="btnImportExport" runat="server" Text="Import/Export Items" CssClass="buttonnew-blue" OnClick="btnImportExport_Click" />
                                                                    <asp:Panel ID="pnlImportHover" runat="server" Style="display: none">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 100%; min-width: 130px; height: 85px;">
                                                                            <div style="padding: 5px;">
                                                                                <div class="divfieldset" style="background-color: white">
                                                                                    <table style="width: 100%">
                                                                                        <tr>
                                                                                            <td style="text-align: center">
                                                                                                <label>
                                                                                                    <asp:LinkButton ID="lnkImportQBItem" runat="server" Text="Import Items From Excel"></asp:LinkButton></label></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <hr />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="text-align: center">
                                                                                                <label>
                                                                                                    <asp:LinkButton ID="lnkExportQBItem" runat="server" Text="Export Items To Excel" OnClick="lnkExportQBItemData_Click"></asp:LinkButton></label>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <cc1:HoverMenuExtender ID="hveImpItem" runat="server" TargetControlID="btnImportExport"
                                                                        PopupControlID="pnlImportHover" PopupPosition="Bottom">
                                                                    </cc1:HoverMenuExtender>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="35%">
                                                                    <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="250px" placeholder="Type Item or Descr or Account Name or Notes  to search.." />
                                                                </td>
                                                                <td width="25%" style="text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            Filter By Account Name:&nbsp;</label></small>
                                                                </td>
                                                                <td width="40%" style="text-align: left">
                                                                    <asp:DropDownCheckBoxes ID="ddlAllClass" runat="server" UseButtons="true" UseSelectAllNode="true"
                                                                        AutoPostBack="true" OnSelectedIndexChanged="AllClassificationChanged" DataTextField="AccountClss"
                                                                        DataValueField="expcode" Width="150px">
                                                                        <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" />
                                                                    </asp:DropDownCheckBoxes>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3" width="100%">
                                                                    <isx:CoolGridView ID="gvItemCd" runat="server" AutoGenerateColumns="false"
                                                                        Height="280px" GridLines="None" OnRowDataBound="gvItemCd_RowDataBound" OnRowCommand="gvItemCd_RowCommand"
                                                                        OnRowDeleting="gvItemCd_RowDeleting" OnRowCancelingEdit="gvItemCd_RowCancelingEdit"
                                                                        OnRowEditing="gvItemCd_RowEditing" OnRowUpdating="gvItemCd_RowUpdating">
                                                                        <Columns>
                                                                            <asp:TemplateField>
                                                                                <HeaderTemplate>
                                                                                    Action
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <asp:LinkButton ID="lnkEdit" runat="server" ToolTip="Update" CommandName="Edit"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                                    <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" CommandName="Delete">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <asp:LinkButton ID="lnkUpdate" runat="server" ToolTip="Update" CommandName="Update"><img src="../images/icons/tick.png" alt="Update"></asp:LinkButton>
                                                                                    <asp:LinkButton ID="lnkCancel" runat="server" ToolTip="Cancel" CommandName="Cancel"><img src="../images/icons/cancel.png" alt="Cancel"/></asp:LinkButton>
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                <HeaderTemplate>
                                                                                    <asp:LinkButton ID="lnkItemCode" runat="server" Text="ItemCode" CommandArgument="itemCode"
                                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <%#Eval("itemCode")%></label>
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblEditItemCode" runat="server" Text='<%#Eval("itemCode")%>'></asp:Label></label>
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                                <HeaderTemplate>
                                                                                    <asp:LinkButton ID="lnkDescription" runat="server" Text="Description" CommandArgument="description"
                                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <%#Eval("description")%></label>
                                                                                    <asp:HiddenField ID="hdnItemId" runat="server" Value='<%#Eval("itemId")%>' />
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <asp:TextBox ID="txtEditDescr" runat="server" Text='<%#Eval("description")%>' Width="150px"></asp:TextBox>
                                                                                    <asp:HiddenField ID="hdnEditItemId" runat="server" Value='<%#Eval("itemId")%>' />
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                <HeaderTemplate>
                                                                                    <asp:LinkButton ID="lnkClassification" runat="server" Text="Account Name" CommandArgument="budgetClassification"
                                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <%#Eval("budgetClassification")%></label>
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblEditBudgClss" runat="server" Text='<%#Eval("budgetClassification")%>'></asp:Label></label>
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                <HeaderTemplate>
                                                                                    <asp:LinkButton ID="lnkDept" runat="server" Text="Department" CommandArgument="deptCode"
                                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <%#Eval("deptCode")%></label>
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <label>
                                                                                        <asp:Label ID="lblEditDept" runat="server" Text='<%#Eval("deptCode")%>'></asp:Label></label>
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                                <HeaderTemplate>
                                                                                    <asp:LinkButton ID="lnkNotes" runat="server" Text="Notes" CommandArgument="itemNotes"
                                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <label>
                                                                                        <%#Eval("itemNotes")%></label>
                                                                                </ItemTemplate>
                                                                                <EditItemTemplate>
                                                                                    <asp:TextBox ID="txtEditNotes" runat="server" Text='<%#Eval("itemNotes")%>' Width="70px"></asp:TextBox>
                                                                                </EditItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 400px">
                                                                                <label>
                                                                                    No ItemCodes available for selected Account Name(s)</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                    <asp:HiddenField ID="hdnMisc" runat="server" />
                                                                    <asp:HiddenField ID="hdnItemCode" runat="server" />
                                                                    <asp:HiddenField ID="hdnClassification" runat="server" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </section>
                                </div>
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
                                            <div class="divfieldset">
                                                <small>
                                                    <label>Are you sure you want to delete this ItemCode?</label></small>
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
                                <asp:Panel ID="pnlImpExpQBItem" runat="server" Style="display: none">
                                    <div class="main-content" id="Div3" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 450px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td style="width: 50%;">
                                                        <h2 class="pophead">Import/Export Items</h2>
                                                    </td>
                                                    <td align="right" style="width: 50%">
                                                        <asp:Button ID="btnImpExpQBItemClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvImpExpErr" runat="server"></div>
                                                <%--<div class="message info">
                                                    <label><em>*</em>This wizard allows you to integrate items data with Quick Books desktop version.</label>
                                                </div>--%>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td width="30%">
                                                                        <cc1:AsyncFileUpload ID="fupImpExpQBItem" CompleteBackColor="White" runat="server" CssClass="fupdqbvend"
                                                                            UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="lblImpExpQBItemThrobber" OnUploadedComplete="fupImpExpQBItem_UploadedComplete"
                                                                            OnClientUploadComplete="showConfirmationImportQBItem" Style="float: left; border: 1px solid #aaaaaa" Width="300px" />
                                                                        <div style="float: right; padding-left: 0.5em">
                                                                            <a href="#" id="tooltip3">
                                                                                <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                                <span><small>
                                                                                    <label>File types allowd are .xls and .xlsx</label></small>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="70%">
                                                                        <asp:Button ID="btnImpExpQBItemConfirm" runat="server" Text="Import" CssClass="buttonnew-blue"
                                                                            OnClick="btnImpExpQBItemConfirm_Click" />
                                                                        <a href="../DownloadFile.aspx?typ=19">Click here</a> to download template.
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <asp:Label ID="lblImpExpQBItemFileName" runat="server"></asp:Label>
                                                            <asp:Label ID="lblImpExpQBItemThrobber" runat="server" Style="display: none">
                                                                            <img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                            </asp:Label>
                                                        </td>
                                                    </tr>
                                                    <%-- <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h4>
                                                                <asp:LinkButton ID="lnkExportQBItemData" runat="server" OnClick="lnkExportQBItemData_Click">Click here</asp:LinkButton>
                                                                to download items data.</h4>
                                                        </td>
                                                    </tr>--%>
                                                </table>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <cc1:ModalPopupExtender ID="popImpExpQBItem" runat="server" PopupControlID="pnlImpExpQBItem" TargetControlID="lnkImportQBItem"
                                    CancelControlID="btnImpExpQBItemClose" DropShadow="false" BackgroundCssClass="modalBackground1">
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
        <div class="clearfix">
            <br />
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
