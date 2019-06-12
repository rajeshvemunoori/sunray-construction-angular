<%@ Page Language="C#" AutoEventWireup="true" CodeFile="InventoryMgmt.aspx.cs" Inherits="Inventory_InventoryMgmt" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Inventory Adjustment</title>
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
    <script src="../js/DateSetup.js" type="text/javascript"></script>
    <script src="../js/Ajax.js" type="text/javascript"></script>
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

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlReason").ufd({ log: true });
            });
            $(function () {
                $("#ddlTrsfrFromLoc").ufd({ log: true });
            });
            $(function () {
                $("#ddlTrsfrToLoc").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlReason").ufd({ log: true });
            });
            $(function () {
                $("#ddlTrsfrFromLoc").ufd({ log: true });
            });
            $(function () {
                $("#ddlTrsfrToLoc").ufd({ log: true });
            });
        });

        $("[src*=down]").live("click", function () {
            $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>")
            $(this).attr("src", "../images/uparrow.jpg");
        });
        $("[src*=up]").live("click", function () {
            $(this).attr("src", "../images/downarrow.jpg");
            $(this).closest("tr").next().remove();
        });

        //Validate qty adjustment fields upon save
        function validateQty(id) {
            var val = id.value;
            //var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            var reg = /^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/;
            if (reg.test(val) || val == '') {
                $11('dvMainMag').innerHTML = "";
                return true;
            }
            else {
                $11('dvMainMag').innerHTML = "Please provide valid input for quantity.";
                $11('dvMainMag').style.color = "Red";
            }
        }

        function manipulateAdjustQty(adjQty, hdnQtyId, actQty) {
            $11(hdnQtyId).value = parseFloat(actQty) + parseFloat(adjQty);
            alert(adjQty);
            alert(actQty);
            alert($11(hdnQtyId).value);
        }

        function validateAdjFieldsOnSave() {
            var grid = $11('<%=gvInvItemData.ClientID %>');
            var rowItems = grid.getElementsByClassName("adjQty");
            var cnt = 0;
            for (var i = 0; i < grid.rows.length; i++) {
                if (rowItems[i].value != 0)
                    cnt++;
            }
            if (cnt == 0) {
                $11('dvMainMag').innerHTML = "No changes to update.";
                $11('dvMainMag').style.color = "Red";
                return false;
            }
            else {
                $11('dvMainMag').innerHTML = "";
                return true;
            }
        }
        //Validate qty adjustment fields upon save

        //Filter history grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvInvItemHist');
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
        //Filter history grid with text provided in search box

        //Load Lots/Bins with selected location
        function loadLots(loc, itemCode) {
            $11('txtTrsfrToLot').value = '';
            var location = $11(loc).value;
            var url = '../Invoice.ashx?func=13&loc=' + location + '&item=' + itemCode;
            LoadLotsByLoc(url, '');
            $11('txtTrsfrToLot').focus();
        }
        //Load Lots/Bins with selected location

        //validate lot quantities in inventory transfer
        function validateBudgetAmount1(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test(id.value) || id.value == '')
                return true;
        }

        function validatelotQtyTrsfr(lotQty, jobSts, jobStsVal) {
            var calculate = true;
            if ($11(jobStsVal).value == '1') {
                calculate = true;
            }
            else if ($11(jobStsVal).value == '0') {
                var conf = confirm("Job is closed! Are you sure you want to continue?");
                if (conf) {
                    $11(jobStsVal).value = '1';
                    calculate = true;
                }
                else {
                    calculate = false;
                }
            }

            if (calculate) {
                var allFldVal = 0;
                var errCnt = 0;
                var totQtyTrsfr = 0;
                var inputList = $11('gvFromLotList').getElementsByClassName("trfrQty");
                for (var i = 0; i < inputList.length; i++) {
                    var inputVal = (inputList[i].value == '' || inputList[i].value == ' ') ? "0" : inputList[i].value;
                    if (!validateBudgetAmount1(inputList[i]) || parseFloat(inputVal) > parseFloat(lotQty)) {
                        errCnt++;
                        inputList[i].style.border = "1px solid Red";
                    }
                    else {
                        inputList[i].style.border = "1px solid #ccc";
                        totQtyTrsfr += parseFloat(inputVal);
                        if (inputList[i].value != 0) {
                            allFldVal++;
                        }
                    }
                }

                if (allFldVal == 0 && lotQty == 0) {
                    $11('dvTrsfrError').innerHTML = "Please select valid quantity from atleast one lot.";
                    $11('dvTrsfrError').style.color = "Red";
                    return false;
                }
                else {
                    if (lotQty > 0) {
                        $11('lblTotalItemQtyTrsfr').innerHTML = totQtyTrsfr;
                        $11('lblTotalQtyAftrTrsfrFrom').innerHTML = parseFloat($11('lblTotalQtyAvailFrom').innerHTML) - parseFloat(totQtyTrsfr);
                    }

                    if (errCnt > 0) {
                        $11('dvTrsfrError').innerHTML = "Please enter valid numeric values for quantity not more than lot quantity.";
                        $11('dvTrsfrError').style.color = "Red";
                        return false;
                    }
                    else {
                        $11('dvTrsfrError').innerHTML = "";
                        return true;
                    }
                }
            }
            else
                return true;
        }
        //validate lot quantities in inventory transfer

        //show destination lot quantity
        function ShowLotQty(lotId) {
            var lotNum = lotId.value;
            var url = '../Invoice.ashx?func=15&lot=' + lotNum;
            ShowAvailLotQty(url, '');
        }
        //show destination lot quantity

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
        .lnk {
            color: White;
        }

        .tablemain td {
            padding: 5px;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
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
            border: 1px solid #aaaaaa;
        }

        #gvInvItemDatajEsCoOl_headerDiv, #gvInvItemHistjEsCoOl_headerDiv, #gvInvTrsfrHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvInvTrsfrHistjEsCoOl_headerDiv div table tbody tr th, #gvInvItemDatajEsCoOl_headerDiv div table tbody tr th, #gvInvItemHistjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvInvItemData tbody tr td, #gvInvItemHist tbody tr td, #gvInvTrsfrHist tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
        }

        #gvInvItemDatajEsCoOl_mainDiv, #gvInvItemHistjEsCoOl_mainDiv, #gvInvTrsfrHistjEsCoOl_mainDiv {
            overflow: hidden;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvInvItemData TR TD, #gvInvItemData TR TH, #gvInvItemData TR TH div, #gvInvItemData TR TD div,
        #gvInvItemHist TR TD, #gvInvItemHist TR TH, #gvInvItemHist TR TH div, #gvInvItemHist TR TD div,
        #gvInvTrsfrHist TR TD, #gvInvTrsfrHist TR TH, #gvInvTrsfrHist TR TH div, #gvInvTrsfrHist TR TD div {
            overflow: visible;
        }

        .adjQty {
        }

        .trfrQty {
        }

        .tdlbl {
            text-align: right;
            width: 45%;
        }

        .tdfld {
            text-align: left;
            width: 55%;
        }

        .tabtflot td, .tabtflot th {
            border: 1px solid #ccc;
        }

        #gvFromLotList td, #gvFromLotList th {
            padding: 7px;
            border: 1px solid #ccc;
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
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="60%">
                                                    <hgroup>
                                                        <h2>
                                                            <asp:Label ID="lblInvHeaderLabel" runat="server"></asp:Label>
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="40%" align="right">
                                                    <asp:Button ID="btnInvHist" runat="server" Text="Inventory Transaction History" CssClass="buttonnew-blue" OnClick="ShowTransactionHistory" />
                                                    <asp:Button ID="btnInvAdjust" runat="server" Text="Inventory" CssClass="buttonnew-blue" OnClick="ShowInventory" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvInvAdjustment" runat="server">
                                                <div id="dvMainMag" runat="server" style="font-weight: bold;">
                                                </div>
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>Location:</label>
                                                            </small>
                                                            <br />
                                                            <asp:TextBox ID="txtLocations" runat="server" AutoPostBack="true" OnTextChanged="txtLocations_TextChanged" Width="270px" placeholder="Enter location.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLocations"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                                ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                        <td><small>
                                                            <label>Reason:</label></small>
                                                            <br />
                                                            <asp:DropDownList ID="ddlReason" runat="server" DataTextField="Description" DataValueField="CodeValue1"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlReason_SelectedIndexChanged">
                                                            </asp:DropDownList>
                                                        </td>
                                                        <td style="vertical-align: bottom">
                                                            <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveAdjustedInventory" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div id="dvNormalAdj" runat="server">
                                                    <isx:CoolGridView ID="gvInvItemData" runat="server" AutoGenerateColumns="false" Width="760px" Height="550px"
                                                        ShowHeader="true" OnRowDataBound="gvInvItemData_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                <ItemTemplate>
                                                                    <img id="imgItemRowSelect" alt="" style="cursor: pointer" src="../images/downarrow.jpg" />
                                                                    <asp:Panel ID="pnlItems" runat="server" Style="display: none;">
                                                                        <asp:GridView ID="gvInvLots" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvInvLots_RowDataBound" Width="700px" GridLines="Both">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Lot/Bin#" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                    <ItemTemplate>
                                                                                        <small>
                                                                                            <label>
                                                                                                <asp:Label ID="lblLotNum" runat="server" Text='<%#Eval("lotNum") %>'></asp:Label>
                                                                                            </label>
                                                                                        </small>
                                                                                        <asp:HiddenField ID="hdnItem" runat="server" Value='<%#Eval("expItem") %>'></asp:HiddenField>
                                                                                        <asp:HiddenField ID="hdnSubLot" runat="server" Value='<%#Eval("subLot") %>'></asp:HiddenField>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Job Code" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                                    <ItemTemplate>
                                                                                        <small>
                                                                                            <label>
                                                                                                <asp:Label ID="lblJobcode" runat="server" Text='<%#Eval("jobCode") %>'></asp:Label>
                                                                                            </label>
                                                                                        </small>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Actual Quantity">
                                                                                    <ItemTemplate>
                                                                                        <small>
                                                                                            <label>
                                                                                                <asp:Label ID="lblJobQtyLot" runat="server" Text='<%#Eval("qtyLot") %>'></asp:Label>
                                                                                            </label>
                                                                                        </small>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Available Quantity">
                                                                                    <ItemTemplate>
                                                                                        <small>
                                                                                            <label>
                                                                                                <asp:Label ID="lblAvailQty" runat="server" Text='<%#Eval("availableToUse") %>'></asp:Label>
                                                                                            </label>
                                                                                        </small>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Adjust Quantity">
                                                                                    <ItemTemplate>
                                                                                        <asp:TextBox ID="txtAdjQty" runat="server" CssClass="adjQty" onkeyup="javascript: return validateQty(this);"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnQty" runat="server" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <HeaderStyle BackColor="#3B6AA0" Font-Bold="false" ForeColor="White" Height="30px" Font-Size="1em"></HeaderStyle>
                                                                            <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                            <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                            <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px"><label>No data found.</label></div>
                                                                            </EmptyDataTemplate>
                                                                        </asp:GridView>
                                                                    </asp:Panel>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Item" HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                                <ItemTemplate>
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblItem" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label></small>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Total Quantity" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <ItemTemplate>
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblQtyStock" runat="server" Text='<%#Eval("qtyStock") %>'></asp:Label></label></small>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 150px"><label>No data found.</label></div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>
                                                <div id="dvTrasfrQty" runat="server">
                                                    <table class="tablemain" width="90%">
                                                        <tr>
                                                            <td colspan="2"><small>
                                                                <label>Item:</label></small>
                                                                <br />
                                                                <asp:TextBox ID="txtItemTrsfr" runat="server" AutoPostBack="true" OnTextChanged="txtItemTrsfr_TextChanged" Width="270px" placeholder="Enter item.."></asp:TextBox>
                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender3" runat="server" TargetControlID="txtItemTrsfr"
                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                                    ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                                    CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                </cc1:AutoCompleteExtender>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="message info">
                                                                    <div id="dvTrsfrError" runat="server" style="font-weight: bold"></div>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td width="50%" style="vertical-align: top">
                                                                                <div id="dvFromLoc">
                                                                                    <table width="100%">
                                                                                        <tr>
                                                                                            <td colspan="2">
                                                                                                <i>
                                                                                                    <h3>From</h3>
                                                                                                </i>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="2"><small>
                                                                                                <label>Location:</label></small><br />
                                                                                                <asp:DropDownList ID="ddlTrsfrFromLoc" runat="server" OnSelectedIndexChanged="ddlTrsfrFromLoc_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="2" width="100%">
                                                                                                <div id="dvLotList" runat="server">
                                                                                                </div>
                                                                                                <asp:GridView ID="gvFromLotList" runat="server" GridLines="Both" AutoGenerateColumns="false" OnRowDataBound="gvFromLotList_RowDataBound">
                                                                                                    <Columns>
                                                                                                        <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblLotNum" runat="server" Text='<%#Eval("LotNum") %>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Job">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblLotJob" runat="server" Text='<%#Eval("jobCode") %>'></asp:Label></label>
                                                                                                                <asp:HiddenField ID="hdnJobStatus" runat="server" Value='<%#Eval("status") %>' />
                                                                                                                <asp:HiddenField ID="hdnJobStsVal" runat="server" />
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Qty. Avail.">
                                                                                                            <ItemTemplate>
                                                                                                                <label>
                                                                                                                    <asp:Label ID="lblQtyAvailLot" runat="server" Text='<%#Eval("QtyLot") %>'></asp:Label></label>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                        <asp:TemplateField HeaderText="Select Qty.">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:TextBox ID="txtLotSelQty" runat="server" CssClass="trfrQty"></asp:TextBox>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                    </Columns>
                                                                                                </asp:GridView>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="tdlbl"><small>
                                                                                                <label>Total quantity to transfer:</label></small></td>
                                                                                            <td class="tdfld">
                                                                                                <asp:Label ID="lblTotalItemQtyTrsfr" runat="server"></asp:Label></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="tdlbl">
                                                                                                <small>
                                                                                                    <label>
                                                                                                        Total quantity available:<i>
                                                                                                    </label>
                                                                                                </small></td>
                                                                                            <td class="tdfld">
                                                                                                <asp:Label ID="lblTotalQtyAvailFrom" runat="server"></asp:Label></i>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <div id="dvQtyAftrTrsfrFrom" runat="server">
                                                                                            <tr>
                                                                                                <td class="tdlbl">
                                                                                                    <small>
                                                                                                        <label>
                                                                                                            Total quantity after transfer:</label>
                                                                                                    </small>
                                                                                                </td>
                                                                                                <td class="tdfld">
                                                                                                    <asp:Label ID="lblTotalQtyAftrTrsfrFrom" runat="server"></asp:Label>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </div>
                                                                                        <tr>
                                                                                            <td colspan="2" class="tdlbl">
                                                                                                <asp:Button ID="btnTransferItem" runat="server" Text="Transfer" CssClass="buttonnew-blue" OnClick="InitiateItemTransfer" /></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                            <td width="10%">&nbsp;</td>
                                                                            <td width="40%" style="vertical-align: top">
                                                                                <div id="dvToLoc">
                                                                                    <table width="100%">
                                                                                        <tr>
                                                                                            <td colspan="2">
                                                                                                <i>
                                                                                                    <h3>To</h3>
                                                                                                </i>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="2"><small>
                                                                                                <label>Location:</label></small><br />
                                                                                                <asp:DropDownList ID="ddlTrsfrToLoc" runat="server"></asp:DropDownList></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="2"><small>
                                                                                                <label>Lot:</label></small><br />
                                                                                                <asp:TextBox ID="txtTrsfrToLot" runat="server" onchange="ShowLotQty(this);"></asp:TextBox>
                                                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender4" runat="server" TargetControlID="txtTrsfrToLot"
                                                                                                    MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                                    ServiceMethod="GetLotsByLocation" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                                    CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                                </cc1:AutoCompleteExtender>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="tdlbl" style="width: 60%">
                                                                                                <small>
                                                                                                    <label>
                                                                                                        Total quantity available:<i></label>
                                                                                                </small></td>
                                                                                            <td class="tdfld" style="width: 40%">
                                                                                                <asp:Label ID="lblTotalQtyAvailTo" runat="server"></asp:Label></i>
                                                                                                <asp:HiddenField ID="hdnTrsfrToJob" runat="server" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div id="dvInvHist" runat="server">
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>Location:</label>
                                                            </small>
                                                            <br />
                                                            <asp:TextBox ID="txtLocHist" runat="server" AutoPostBack="true" OnTextChanged="txtLocHist_TextChanged" Width="270px" placeholder="Enter location.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtLocHist"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                                ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox ID="txtFilterItemHist" CssClass="filterdata" runat="server" Width="300px" placeholder="Type in item name to search.."></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <isx:CoolGridView ID="gvInvItemHist" runat="server" AutoGenerateColumns="false" Height="300px" Width="950px"
                                                                OnRowDataBound="gvInvItemHist_RowDataBound" ShowHeader="true">
                                                                <Columns>
                                                                    <asp:TemplateField ItemStyle-Width="50px" HeaderStyle-Width="50px">
                                                                        <ItemTemplate>
                                                                            <img id="imgItemRowSelect" alt="" style="cursor: pointer" src="../images/downarrow.jpg" />
                                                                            <asp:Panel ID="pnlItems" runat="server" Style="display: none;">
                                                                                <asp:GridView ID="gvInvItemLotHist" runat="server" Width="850px" AutoGenerateColumns="false" ShowHeader="true" OnRowDataBound="gvInvItemLotHist_RowDataBound">
                                                                                    <Columns>
                                                                                        <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("LotNum") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField HeaderText="TransRefNo./Job Code">
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("transRefno") %>/<%#Eval("jobCode") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField HeaderText="Trans. Qty">
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("qtyTrans") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField HeaderText="Date Modified">
                                                                                            <ItemTemplate>
                                                                                                <label>
                                                                                                    <asp:Label ID="lblModifiedOn" runat="server" Text='<%# Convert.ToDateTime(Eval("addedOn")) %>'></asp:Label></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField HeaderText="Modified By">
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("userName") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                        <asp:TemplateField HeaderText="Reason">
                                                                                            <ItemTemplate>
                                                                                                <label><%#Eval("description") %></label>
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>
                                                                                    </Columns>
                                                                                    <FooterStyle BackColor="#CCCCCC" ForeColor="Black"></FooterStyle>
                                                                                    <HeaderStyle BackColor="#3B6AA0" Font-Bold="false" ForeColor="White" Height="30px" Font-Size="1em"></HeaderStyle>
                                                                                    <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                                    <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                                    <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                                    <EmptyDataTemplate>
                                                                                        <div style="width: 150px"><label>No data found.</label></div>
                                                                                    </EmptyDataTemplate>
                                                                                </asp:GridView>
                                                                            </asp:Panel>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Item" HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblItem" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Total Quantity" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                        <ItemTemplate>
                                                                            <small>
                                                                                <label>
                                                                                    <asp:Label ID="lblQtyStock" runat="server" Text='<%#Eval("qtyStock") %>'></asp:Label></label></small>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 150px"><label>No data found.</label></div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div id="dvInvTransferHist" runat="server">
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                <label>
                                                                    Item:
                                                                </label>
                                                            </small>
                                                            <br />
                                                            <asp:TextBox ID="txtItemTrsfrHist" runat="server" AutoPostBack="true" OnTextChanged="txtItemTrsfrHist_TextChanged" Width="270px" placeholder="Enter item.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender5" runat="server" TargetControlID="txtItemTrsfrHist"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                                ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox ID="txtFilterTrsfrFromLoc" runat="server" CssClass="filterdata" Width="300px" placeholder="Type in location name to search.."></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <isx:CoolGridView ID="gvInvTrsfrHist" runat="server" AutoGenerateColumns="false" Width="800px" Height="300px" OnRowDataBound="gvInvTrsfrHist_RowDataBound" ShowHeader="true">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="From Location">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("locName") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="From Lot/Bin#">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("lotNum") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Job">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("jobCode") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Qty Trsfr">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("qtyTrans") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="To Location">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("locCode") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="To Lot/Bin#">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("dlotNum") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Job">
                                                                        <ItemTemplate>
                                                                            <label><%#Eval("djobCode") %></label>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                                <EmptyDataTemplate>
                                                                    <div style="width: 170px"><label>
                                                                        No data to display.</label>
                                                                    </div>
                                                                </EmptyDataTemplate>
                                                            </isx:CoolGridView>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>
</body>
</html>
