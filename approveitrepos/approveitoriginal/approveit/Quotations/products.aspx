<%@ Page Language="C#" AutoEventWireup="true" CodeFile="products.aspx.cs" Inherits="Quotations_products" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ApproveIt - Products</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/Ajax.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/Tab.js"></script>
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: Red;
                font-size: 1em;
            }

        .tab td {
            padding: 5px;
        }

        .maintab td {
            padding: 10px;
        }

        .navlnk {
            font-weight: bold;
            font-size: 1.5em;
            width: 40px;
            font-family: Franklin Gothic Demi;
        }

        input[type="text"] {
            font-size: 3em;
            width: 270px;
            height: 30px;
        }

        select {
            font-size: 3em;
            width: 290px;
            height: 40px;
        }

        textarea {
            width: 300px;
            height: 70px;
        }

        .lnk {
            color: White;
        }

        #txtCatCode, #txtCatDescr, #txtSubCatCode, #txtSubCatDescr, #txtItemCode, #txtItemDescr, #txtItemCat, #txtItemListPrice, #txtCatForsubCat, #txtItemUOM,
        #txtItemUOMDescr, #txtLPChangeVal {
            border-left-color: Red;
            border-left-style: solid;
            border-left-width: 5px;
        }

        #gvCategoryjEsCoOl_headerDiv, #gvSubCatjEsCoOl_headerDiv, #gvItemsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvCategoryjEsCoOl_headerDiv div table tbody tr th, #gvSubCatjEsCoOl_headerDiv div table tbody tr th, #gvItemsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvCategory tbody tr td, #gvSubCat tbody tr td, #gvItems tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvCategoryjEsCoOl_mainDiv, #gvSubCatjEsCoOl_mainDiv, #gvItemsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border: none;
        }

        #gvCategory TR TD, #gvCategory TR TH, #gvCategory TR TH div, #gvCategory TR TD div,
        #gvSubCat TR TD, #gvSubCat TR TH, #gvSubCat TR TH div, #gvSubCat TR TD div,
        #gvItems TR TD, #gvItems TR TH, #gvItems TR TH div, #gvItems TR TD div {
            overflow: visible;
        }

        .completionList {
            border: solid 1px #ccc;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.2em;
            border: 1px solid #aaaaaa;
        }

        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            /*border-radius: 3px;*/
            border: 1px solid #aaaaaa;
        }
        /*Calendar Control CSS*/
        .cal_Theme1 .ajax__calendar_container {
            background-color: #DEF1F4;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_header {
            background-color: #ffffff;
            margin-bottom: 4px;
        }

        .cal_Theme1 .ajax__calendar_title,
        .cal_Theme1 .ajax__calendar_next,
        .cal_Theme1 .ajax__calendar_prev {
            color: #004080;
            padding-top: 3px;
        }

        .cal_Theme1 .ajax__calendar_body {
            background-color: #ffffff;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_dayname {
            text-align: center;
            font-weight: bold;
            margin-bottom: 4px;
            margin-top: 2px;
            color: #004080;
        }

        .cal_Theme1 .ajax__calendar_day {
            color: #004080;
            text-align: center;
        }

        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_day,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_month,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_year,
        .cal_Theme1 .ajax__calendar_active {
            color: #004080;
            font-weight: bold;
            background-color: #DEF1F4;
        }

        .cal_Theme1 .ajax__calendar_today {
            font-weight: bold;
        }

        .cal_Theme1 .ajax__calendar_other,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_today,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_title {
            color: #bbbbbb;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc1:vTop ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc2:vLeft ID="left1" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
                        <div class="main-content grid_4" style="width: 115%; padding-top: 0px">
                            <header>
                                <hgroup>
                                    <table style="width: 100%">
                                        <tr>
                                            <td style="width: 30%">
                                                <h2>Products
                                                </h2>
                                            </td>
                                            <td style="width: 70%; text-align: right">
                                                <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReload_Click"></asp:Button>
                                            </td>
                                        </tr>
                                    </table>
                                </hgroup>
                            </header>
                            <section>
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
                                <div>
                                    <ul class="approvaltabs">
                                        <li>
                                            <label><a href="#" class="parked">Category</a></label></li>
                                        <li>
                                            <label><a href="#" class="parked">Sub-Category</a></label></li>
                                        <li>
                                            <label><a href="#" class="parked">Item</a></label></li>
                                    </ul>
                                    <div class="panes clearfix">
                                        <!--Categories tab-->
                                        <section>
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
                                                    <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                                    <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                                    <asp:PostBackTrigger ControlID="btnSaveCat" />
                                                </Triggers>
                                                <ContentTemplate>
                                                    <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                                    <div>
                                                        <div id="dvCatMainMsg" runat="server">
                                                        </div>
                                                        <div id="dvCatGrid" runat="server">
                                                            <table class="tab" width="100%">
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <asp:Button ID="btnAddCat" runat="server" Text="New Category" CssClass="buttonnew-blue" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView AutoGenerateColumns="false" ID="gvCategory" runat="server" Width="700px" Height="400px" OnRowDataBound="gvCategory_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Action">
                                                                                    <ItemTemplate>
                                                                                        <asp:LinkButton ID="lnkEditCat" runat="server" ToolTip="Edit Category"
                                                                                            OnClick="lnkEditCat_Click"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="250px" ControlStyle-Width="250px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHCatCode" runat="server" Text="Category Code" CommandArgument="categoryCode"
                                                                                            OnCommand="SortCategoryExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("categoryCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="350px" ControlStyle-Width="350px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHCatDescr" runat="server" Text="Description" CommandArgument="categoryDescr"
                                                                                            OnCommand="SortCategoryExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("categoryDescr")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px"><label>No data to display.</label></div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvCatDetails" runat="server" style="display: none">
                                                            <table class="tab">
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <div id="dvCatMsg" runat="server"></div>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Category Code:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtCatCode" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Category Description:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtCatDescr" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:Button ID="btnSaveCat" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveCat_Click" />
                                                                                    <asp:Button ID="btnCloseCatAdd" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </section>
                                        <!--Sub-Categories tab-->
                                        <section>
                                            <asp:Timer ID="Timer2" runat="server" Interval="100000000">
                                            </asp:Timer>
                                            <asp:UpdateProgress ID="UpdateProgress2" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
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
                                                    <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
                                                    <asp:AsyncPostBackTrigger ControlID="btnRefresh1" EventName="Click" />
                                                </Triggers>
                                                <ContentTemplate>
                                                    <asp:Button ID="btnRefresh1" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                                    <div>
                                                        <div id="dvSubCatMainMsg" runat="server">
                                                        </div>
                                                        <div id="dvSubCatGrid" runat="server">
                                                            <table class="tab" width="100%">
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <table style="width: 100%">
                                                                            <tr>
                                                                                <td style="text-align: left">
                                                                                    <small>
                                                                                        <label>
                                                                                            Category:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtSelCat" runat="server" AutoPostBack="true" OnTextChanged="txtSelCat_TextChanged" placeholder="Search category.."></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtSelCat"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                                <td style="text-align: right">
                                                                                    <asp:Button ID="btnAddSubCat" runat="server" Text="New Sub-Category" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView ID="gvSubCat" runat="server" AutoGenerateColumns="false" Width="950px" Height="400px" OnRowDataBound="gvSubCat_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Action">
                                                                                    <ItemTemplate>
                                                                                        <asp:LinkButton ID="lnkEditSubCat" runat="server" ToolTip="Edit Sub-Category"
                                                                                            OnClick="lnkEditSubCat_Click"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="250px" ControlStyle-Width="250px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHCategoryCode" runat="server" Text="Category Code" CommandArgument="categoryCode"
                                                                                            OnCommand="SortSubCategoryExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("categoryCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="250px" ControlStyle-Width="250px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHSubCategoryCode" runat="server" Text="Sub-Category Code" CommandArgument="subCategoryCode"
                                                                                            OnCommand="SortSubCategoryExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("subCategoryCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="350px" ControlStyle-Width="350px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHSubCategoryDescr" runat="server" Text="Sub-Category Descr" CommandArgument="subCategoryDescr"
                                                                                            OnCommand="SortSubCategoryExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("subCategoryDescr")%></label>
                                                                                        <asp:HiddenField ID="hdnCatDescr" runat="server" Value='<%#Eval("categoryDescr") %>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px"><label>No data to display.</label></div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvSubCatDetails" runat="server" style="display: none">
                                                            <table class="tab">
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <div id="dvSubCatMsg" runat="server"></div>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <label>
                                                                                        Category Code:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtCatForsubCat" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender4" runat="server" TargetControlID="txtCatForsubCat"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Sub-Category Code:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtSubCatCode" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                                <td>
                                                                                    <label>
                                                                                        Sub-Category Description:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtSubCatDescr" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:Button ID="btnSaveSubCat" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveSubCat_Click" />
                                                                                    <asp:Button ID="btnCloseSubCatAdd" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </section>
                                        <!--Items tab-->
                                        <section>
                                            <asp:Timer ID="Timer3" runat="server" Interval="100000000">
                                            </asp:Timer>
                                            <asp:UpdateProgress ID="UpdateProgress3" runat="server" AssociatedUpdatePanelID="UpdatePanel2">
                                                <ProgressTemplate>
                                                    <div id="overlay">
                                                        <div id="modalprogress">
                                                            <img src="../images/Loaders/image_855859.gif" />
                                                        </div>
                                                    </div>
                                                </ProgressTemplate>
                                            </asp:UpdateProgress>
                                            <asp:UpdatePanel ID="UpdatePanel2" runat="server" UpdateMode="Conditional">
                                                <Triggers>
                                                    <asp:AsyncPostBackTrigger ControlID="Timer3" EventName="Tick" />
                                                    <asp:AsyncPostBackTrigger ControlID="btnRefresh2" EventName="Click" />
                                                </Triggers>
                                                <ContentTemplate>
                                                    <asp:Button ID="btnRefresh2" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                                    <div>
                                                        <div id="dvItemMainMsg" runat="server">
                                                        </div>
                                                        <div id="dvItemGrid" runat="server">
                                                            <table class="tab" width="100%">
                                                                <tr>
                                                                    <td style="text-align: right">
                                                                        <table style="width: 100%">
                                                                            <tr>
                                                                                <td style="text-align: left; width: 30%">
                                                                                    <small>
                                                                                        <label>
                                                                                            Category:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtSelCatForItem" runat="server" AutoPostBack="true" OnTextChanged="txtSelCatForItem_TextChanged" placeholder="Search category.."></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtSelCatForItem"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                                <td style="text-align: left; width: 30%">
                                                                                    <small>
                                                                                        <label>
                                                                                            Sub-Category:
                                                                                        </label>
                                                                                    </small>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtSubCatForItem" runat="server" AutoPostBack="true" OnTextChanged="txtSubCatForItem_TextChanged" placeholder="Search sub-category.."></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender3" runat="server" TargetControlID="txtSubCatForItem"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetSubCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                                <td style="text-align: right; width: 40%">
                                                                                    <asp:Button ID="btnManageItems" runat="server" Text="Manage List Price" CssClass="buttonnew-blue" Style="visibility: hidden" />
                                                                                    <asp:Button ID="btnAddItem" runat="server" Text="New Item" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView ID="gvItems" runat="server" AutoGenerateColumns="false" Width="1000px" Height="400px" OnRowDataBound="gvItems_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this);" />
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this)" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Action" HeaderStyle-Width="80px" ControlStyle-Width="80px">
                                                                                    <ItemTemplate>
                                                                                        <asp:LinkButton ID="lnkEditItem" runat="server" ToolTip="Edit Item"
                                                                                            OnClick="lnkEditItem_Click"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHItemCode" runat="server" Text="Item Code" CommandArgument="itemCode"
                                                                                            OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("itemCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHListPrice" runat="server" Text="List Price" CommandArgument="listPrice"
                                                                                            OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("listPrice")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHCategoryCode" runat="server" Text="Cat. Code" CommandArgument="categoryCode"
                                                                                            OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("categoryCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHSubCategoryCode" runat="server" Text="Sub-Cat. Code" CommandArgument="subCategoryCode"
                                                                                            OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("subCategoryCode")%></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkHItemDescr" runat="server" Text="Item Descr" CommandArgument="itemDescr"
                                                                                            OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("itemDescr")%></label>
                                                                                        <asp:HiddenField ID="hdnItemCode" runat="server" Value='<%#Eval("itemCode")%>' />
                                                                                        <%--<asp:HiddenField ID="hdnUOMDescr" runat="server" Value='<%#Eval("uomDescr")%>' />
                                                                                        <asp:HiddenField ID="hdnItemNotes" runat="server" Value='<%#Eval("itemNotes")%>' />
                                                                                        <asp:HiddenField ID="hdnCatDescr" runat="server" Value='<%#Eval("categoryDescr")%>' />
                                                                                        <asp:HiddenField ID="hdnSubCatDescr" runat="server" Value='<%#Eval("subCategoryDescr")%>' />--%>
                                                                                        <asp:HiddenField ID="hdnItemID" runat="server" Value='<%#Eval("itemID")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 200px">
                                                                                    <label>No data to display.</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvItemDetails" runat="server" style="display: none">
                                                            <table class="tab" style="width: 100%">
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <div id="dvItemMsg" runat="server"></div>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table style="width: 70%">
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Category:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemCat" runat="server" CssClass="mndt" onchange="javascript:return getSubCatInit(this);"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender5" runat="server" TargetControlID="txtItemCat"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                                <td>
                                                                                    <label>
                                                                                        Sub-Category:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemSubCat" runat="server"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender6" runat="server" TargetControlID="txtItemSubCat"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetSubCategories" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                        CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Item Code:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemCode" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                                <td>
                                                                                    <label>
                                                                                        Description:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemDescr" runat="server" CssClass="mndt"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        UOM:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemUOM" runat="server"></asp:TextBox>
                                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender7" runat="server" TargetControlID="txtItemUOM"
                                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetUnits"
                                                                                        UseContextKey="True" CompletionListCssClass="completionList" CompletionListItemCssClass="listItem"
                                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                    </cc1:AutoCompleteExtender>
                                                                                </td>
                                                                                <td>
                                                                                    <label>
                                                                                        List Price($):
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemListPrice" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Notes:
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="txtItemNotes" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <asp:Button ID="btnSaveItem" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveItem_Click" />
                                                                                    <asp:Button ID="btnCloseItemAdd" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div id="dvManageLP" runat="server" style="display: none">
                                                            <table class="tab" style="width: 100%">
                                                                <tr>
                                                                    <td>
                                                                        <label>
                                                                            <div id="dvManageItemsMsg" runat="server"></div>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table style="width: 100%">
                                                                            <tr>
                                                                                <td style="width: 40%">
                                                                                    <label>Select Option:</label><br />
                                                                                    <asp:DropDownList ID="ddlLPOption" runat="server" onchange="javascript:return showDiscSymbol(this);">
                                                                                        <asp:ListItem Value="0">Increase List Price by amount($)</asp:ListItem>
                                                                                        <asp:ListItem Value="1">Increase List Price by percent(%)</asp:ListItem>
                                                                                        <asp:ListItem Value="2">Decrease List Price by amount($)</asp:ListItem>
                                                                                        <asp:ListItem Value="3">Decrease List Price by percent(%)</asp:ListItem>
                                                                                    </asp:DropDownList>
                                                                                </td>
                                                                                <td style="width: 60%">
                                                                                    <label>Value:</label><br />
                                                                                    <asp:TextBox ID="txtLPChangeVal" runat="server"></asp:TextBox><label id="lblDiscSymb">$</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <asp:Button ID="btnSaveManageLP" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveManageLP_Click" />
                                                                                    <asp:Button ID="btnCloseManageLP" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </form>

    <script>
        function $11(id) {
            return document.getElementById(id);
        }

        function pageLoad() {
        }

        function animateDiv(dv, dvOrg, dvMsg) {
            $11(dvOrg).style.display = "block";
            $('html, body').animate({
                scrollTop: $(dv).offset().top
            }, 2000);
            $11(dvMsg).innerHTML = '';
            var inputList = document.getElementsByTagName("input");
            for (var i = 0; i < inputList.length; i++) {
                DisplayNormalFields(inputList[i]);
            }
            return false;
        }

        function clearFields(dvCurr, dvScrollTo) {
            var inputFields = $11(dvCurr).getElementsByTagName("input");
            var textAreaFields = $11(dvCurr).getElementsByTagName("textarea");
            for (var i = 0; i < inputFields.length; i++) {
                if (inputFields[i].type == "text")
                    inputFields[i].value = '';
            }
            for (var i = 0; i < textAreaFields.length; i++) {
                textAreaFields[i].value = '';
            }

            $11(dvCurr).style.display = "none";
            $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
            });
            return false;
        }

        //filter sub-categories according to selected categori while fetching items
        function getSubCatInit(obj) {
            var catCode = obj.value.split('--');
            var url = 'venddata.ashx?func=1&cat=' + catCode[0].replace("&", "`");
            getSubCatMed(url, '');
        }

        function getSubCatMed(UpdateURL, pagename) {
            if (UpdateURL != "") {
                currentpageurl = pagename;
                MakeAjaxRequest(UpdateURL, getSubCatFinal, false);
            }
        }

        function getSubCatFinal(response) {
            var resultType = "";
            resultType = response.responseText;
            $11('txtItemSubCat').value = '';
            if (resultType != "") {
            }
        }
        //filter sub-categories according to selected categori while fetching items

        //Edit categories
        function editCat(rowIndex) {
            var grid = $11('<%=gvCategory.ClientID %>');
            for (var i = 0; i < grid.rows.length; i++) {
                if (i == rowIndex) {
                    var label = grid.rows[i].getElementsByTagName("label");
                    $11('txtCatCode').value = label[0].innerHTML;
                    $11('txtCatDescr').value = label[1].innerHTML;
                    animateDiv('#dvCatDetails', 'dvCatDetails', 'dvCatMsg');
                    break;
                }
            }
            return false;
        }
        //Edit categories

        //Edit Sub-categories
        function editSubCat(rowIndex) {
            var grid = $11('<%=gvSubCat.ClientID %>');
            for (var i = 0; i < grid.rows.length; i++) {
                if (i == rowIndex) {
                    var label = grid.rows[i].getElementsByTagName("label");
                    var input = grid.rows[i].getElementsByTagName("input");
                    $11('txtCatForsubCat').value = label[0].innerHTML + '--' + input[0].value;
                    $11('txtSubCatCode').value = label[1].innerHTML;
                    $11('txtSubCatDescr').value = label[2].innerHTML;
                    animateDiv('#dvSubCatDetails', 'dvSubCatDetails', 'dvSubCatMsg');
                    break;
                }
            }
            return false;
        }
        //Edit Sub-categories

        //Edit Items
        function editItem(rowIndex) {
            var grid = $11('<%=gvItems.ClientID %>');
            for (var i = 0; i < grid.rows.length; i++) {
                if (i == rowIndex) {
                    var label = grid.rows[i].getElementsByTagName("label");
                    var input = grid.rows[i].getElementsByTagName("input");
                    $11('txtItemCat').value = label[0].innerHTML;
                    $11('txtItemSubCat').value = label[1].innerHTML;
                    $11('txtItemCode').value = label[2].innerHTML;
                    $11('txtItemDescr').value = label[3].innerHTML;
                    $11('txtItemListPrice').value = label[4].innerHTML;
                    $11('txtItemUOM').value = input[0].value;
                    $11('txtItemUOMDescr').value = input[1].value;
                    $11('txtItemNotes').value = input[2].value;

                    animateDiv('#dvItemDetails', 'dvItemDetails', 'dvItemMsg');
                    break;
                }
            }
            return false;
        }
        //Edit Items

        /*When checkbox in the row is checked*/
        function Check_Click(objRef) {
            //Get the Row based on checkbox
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
            if (checkCnt > 0) {
                showButtons("visible");
            }
            else {
                showButtons("hidden");
            }
            if (unCheckCnt > 0)
                headerCheckBox.checked = false;
            else
                headerCheckBox.checked = true;
        }
        /*When checkbox in the row is checked*/

        /*When checkbox in the header row is checked*/
        function checkAll(objRef) {
            var GridView = objRef.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var inputList = GridView.getElementsByTagName("input");
            var cnt = 0;
            for (var i = 0; i < inputList.length; i++) {
                //Get the Cell To find out ColumnIndex
                var row = inputList[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                if (inputList[i].type == "checkbox" && objRef != inputList[i]) {
                    if (objRef.checked) {
                        //If the header checkbox is checked
                        //check all checkboxes
                        if (!inputList[i].disabled) {
                            inputList[i].checked = true;
                            cnt++
                        };
                    }
                    else {
                        //If the header checkbox is checked
                        //uncheck all checkboxes
                        inputList[i].checked = false;
                    }
                }
            }
            if (cnt > 0)
                showButtons("visible");
            else
                showButtons("hidden");
        }
        /*When checkbox in the header row is checked*/

        function showButtons(visibleParam) {
            $11('btnManageItems').style.visibility = visibleParam;
        }

        function showDiscSymbol(obj) {
            var discType = obj.value;
            if (discType == "0" || discType == "2")
                $11('lblDiscSymb').innerHTML = '$';
            else if (discType == "1" || discType == "3")
                $11('lblDiscSymb').innerHTML = '%';
            else
                $11('lblDiscSymb').innerHTML = '';
        }

        function validateManageLP() {
            if ($11('txtLPChangeVal').value == 0) {
                $11('dvManageItemsMsg').style.color = 'Red';
                $11('dvManageItemsMsg').innerHTML = 'Please enter Value';
                DisplayErrFields($11('txtLPChangeVal'));
                return false;
            }
            else if (!validateAgreementDisc('txtLPChangeVal')) {
                $11('dvManageItemsMsg').style.color = 'Red';
                $11('dvManageItemsMsg').innerHTML = 'Please enter valid Value';
                DisplayErrFields($11('txtLPChangeVal'));
                return false;
            }
            else
                return true;
        }

        function clearManageLPFields(dvCurr, dvScrollTo) {
            var GridView = $11('<%=gvItems.ClientID %>');
            var inputList = GridView.getElementsByTagName("input");
            for (var i = 0; i < inputList.length; i++) {
                if (inputList[i].type == "checkbox") {
                    inputList[i].checked = false;
                }
            }
            showButtons("hidden");
            clearFields(dvCurr, dvScrollTo);
        }
    </script>
</body>
</html>
