<%@ Page Language="C#" AutoEventWireup="true" CodeFile="custagreements.aspx.cs" Inherits="Quotations_custagreements" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web" TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>ApproveIt - Agreements - Items</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/Ajax.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <style>
        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: Red;
                font-size: 1em;
            }

        input[type="text"] {
            font-size: 24px;
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

        .tableMain td {
            padding: 10px;
        }

        #gvCustAggrjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvCustAggrjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvCustAggr tbody tr td {
            height: 35px;
            border: 1px solid #E6E4E4;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvCustAggrjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border: none;
        }

        #gvCustAggr TR TD, #gvCustAggr TR TH, #gvCustAggr TR TH div, #gvCustAggr TR TD div {
            overflow: visible;
        }

        #txtEditItem, #txtAggr {
            border-left-color: Red;
            border-left-style: solid;
            border-left-width: 5px;
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
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            /*border-radius: 3px;*/
            border: 1px solid #aaaaaa;
        }

        .tabqtybrk tr th {
            background-color: #3B6AA0;
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        .tabqtybrk tr td {
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
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
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="35%">
                                                        <h2>Agreement Items
                                                        </h2>
                                                    </td>
                                                    <td width="65%" align="right">
                                                        <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="btnReload_Click"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                                        <div class="divfieldset">
                                            <div id="dvMainMsg" runat="server"></div>
                                            <div id="dvAggrGrid" runat="server">
                                                <table class="tableMain" style="width: 96%">
                                                    <tr>
                                                        <td>
                                                            <label>Select Agreement:</label><br />
                                                            <asp:TextBox ID="txtAgreement" runat="server" OnTextChanged="SearchAgreementItems" AutoPostBack="true" placeholder="Type in agreement.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender5" runat="server" TargetControlID="txtAgreement"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetAgreements" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                        <td>
                                                            <label>Select Customer:</label><br />
                                                            <asp:TextBox ID="txtCust" runat="server" OnTextChanged="SearchAgreementItems" AutoPostBack="true" placeholder="Type in customer.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtCust"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCustomers" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                        <td>
                                                            <label>Select Item:</label><br />
                                                            <asp:TextBox ID="txtItem" runat="server" OnTextChanged="SearchAgreementItems" AutoPostBack="true" placeholder="Type in item.."></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtItem"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>
                                                        </td>
                                                        <td style="text-align: right">
                                                            <asp:Button ID="btnAddTrans" runat="server" Text="Add Item" CssClass="buttonnew-blue" OnClick="btnAddTrans_Click" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div>
                                                    <isx:CoolGridView ID="gvCustAggr" runat="server" Width="85%" Height="400px" AutoGenerateColumns="false" OnRowDataBound="gvCustAggr_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="Action">
                                                                <ItemTemplate>
                                                                    <asp:LinkButton ID="lnkEditAgreement" runat="server" ToolTip="Edit Agreement"
                                                                        OnClick="lnkEditAgreement_Click"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="290px" ControlStyle-Width="290px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkHCustName" runat="server" Text="Customer" CommandArgument="orgName"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("orgName")%></label>
                                                                    <asp:HiddenField ID="hdnCustID" runat="server" Value='<%#Eval("customerID") %>' />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkHAgreement" runat="server" Text="Agreement" CommandArgument="agrmntCode"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label>
                                                                        <asp:Label ID="lblAgrCode" runat="server" Text='<%#Eval("agrmntCode")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkHItem" runat="server" Text="Item" CommandArgument="itemCode"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("itemCode")%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="145px" ControlStyle-Width="145px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkHListPrice" runat="server" Text="List Price" CommandArgument="listPrice"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("listPrice")%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="145px" ControlStyle-Width="145px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkHOurPrice" runat="server" Text="Our Price" CommandArgument="ourPrice"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("ourPrice")%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 200px">
                                                                <label>
                                                                No data to display!</labe>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>
                                            </div>
                                            <div id="dvAggrDetails" runat="server" style="display: none">
                                                <table class="tableMain" style="width: 60%">
                                                    <tr>
                                                        <td colspan="2">
                                                            <label>
                                                                <div id="dvAggrMsg" runat="server"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>Agreement:</label><br />
                                                            <asp:TextBox ID="txtAggr" runat="server"></asp:TextBox>
                                                            <%--<cc1:AutoCompleteExtender ID="AutoCompleteExtender3" runat="server" TargetControlID="txtAggr"
                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetAgreementsNotAssigned" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem"
                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>--%>
                                                        </td>
                                                        <td style="vertical-align: bottom">
                                                            <asp:Button ID="btnAdd" runat="server" Text="Add Item" OnClick="btnAdd_Click" CssClass="buttonnew-blue" /></td>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <asp:GridView ID="gvItemAssts" runat="server" AutoGenerateColumns="false" GridLines="None" CssClass="tabqtybrk" OnRowDataBound="gvItemAssts_RowDataBound">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="&nbsp;&nbsp;Item" HeaderStyle-Width="250px" ControlStyle-Width="250px">
                                                                        <ItemTemplate>
                                                                            <asp:TextBox ID="txtEditItem" runat="server"></asp:TextBox>
                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender4" runat="server" TargetControlID="txtEditItem"
                                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                            </cc1:AutoCompleteExtender>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="List Price" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblListPrice" runat="server"></asp:Label></label>
                                                                            <asp:HiddenField ID="hdnListPrice" runat="server" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Our Price" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <label>
                                                                                <asp:Label ID="lblOurPrice" runat="server"></asp:Label></label>
                                                                            <asp:HiddenField ID="hdnOurPrice" runat="server" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Status" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                        <ItemTemplate>
                                                                            <asp:LinkButton ID="lnkStatus" runat="server"></asp:LinkButton>
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField>
                                                                        <ItemTemplate>
                                                                            <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDel_Click" CssClass="buttonnew-blue" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </asp:GridView>
                                                            <asp:HiddenField ID="hdnEditAgrItem" runat="server" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <asp:Button ID="btnSaveTrans" runat="server" Text="Save" CssClass="buttonnew-blue" OnClick="btnSaveTrans_Click" />
                                                            <asp:Button ID="btnCloseTransAdd" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
        </div>
    </form>

    <script type="text/javascript">
        function $11(id) {
            return document.getElementById(id);
        }

        function pageLoad() {
            loadAgrAutoPopulate();
        }

        function animateDiv(dv, dvOrg, dvMsg) {
            $11(dvOrg).style.display = "block";
            $('html, body').animate({
                scrollTop: $(dv).offset().top
            }, 2000);
            $11(dvMsg).innerHTML = "";
            var inputList = document.getElementsByTagName("input");
            for (var i = 0; i < inputList.length; i++) {
                DisplayNormalFields(inputList[i]);
            }
            return false;
        }

        function clearFields(dvCurr, dvScrollTo) {
            var inputFields = $11(dvCurr).getElementsByTagName("input");
            for (var i = 0; i < inputFields.length; i++) {
                if (inputFields[i].type == "text")
                    inputFields[i].value = '';
            }
            $("[id*=gvItemAssts] tr").not($("[id*=gvItemAssts] tr:first-child")).remove();
            $11(dvCurr).style.display = "none";
            //$11("btnSaveTrans").style.display = "none";

            $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
            });
            return false;
        }

        //calculate ourprice according to selected agreement code
        function calcOurPriceInit(itemCode, listPrice, ourPrice, hdnLP, hdnOP) {
            var agrCode = $11('txtAggr').value.split('--');
            var item = $11(itemCode).value.split('--');
            //var listPrice = $11('txtListPrice').innerHTML;
            var url = 'venddata.ashx?func=2&agr=' + agrCode[0].replace("&", "`") + '&it=' + item[0].replace("&", "`") + '&lpid=' + listPrice + '&opid=' + ourPrice + '&hlp=' + hdnLP + '&hop=' + hdnOP;
            calcOurPriceMed(url, '');
        }

        function calcOurPriceMed(UpdateURL, pagename) {
            if (UpdateURL != "") {
                currentpageurl = pagename;
                MakeAjaxRequest(UpdateURL, calcOurPriceFinal, false);
            }
        }

        function calcOurPriceFinal(response) {
            var resultType = "";
            resultType = response.responseText;
            if (resultType != "") {
                var price = resultType.split('~');
                $11(price[2]).innerHTML = price[0];
                $11(price[3]).innerHTML = price[1];
                $11(price[4]).value = price[0];
                $11(price[5]).value = price[1];
                //if (parseFloat(resultType) > 0) {
                //    $11('txtOurPrice').value = resultType;
                //    $11('dvOurPriceMsg').innerHTML = '<span style="color:Red">*</span>OurPrice is calculated based on discount defined in the selected agreement.';
                //}
                //else {
                //    $11('txtOurPrice').value = $11('txtListPrice').innerHTML;
                //    $11('dvOurPriceMsg').innerHTML = '<span style="color:Red">*</span>OurPrice is equal to ListPrice since no agreement is defined or selected agreement is of type volume discount.';
                //}
            }
        }

        function loadAgrAutoPopulate() {
            $(function () {
                var projects = "<%=list %>";
                $("#txtAggr").autocomplete({
                    minLength: 0,
                    source: projects,
                    url: '',
                    select: function (event, ui) {
                        $("#txtAggr").val(ui.item.value);
                        return false;
                    }
                })
                .autocomplete("instance")._renderItem = function (ul, item) {
                    return $("<li>")
                      .append("<a>" + item.value + "<br/><small>" + item.agreementDescr + "</small><br/>With&nbsp;" + item.custName.toUpperCase() + "<br/><i><small>Valid from&nbsp;&nbsp;" + item.validFrom + "&nbsp;&nbsp;to&nbsp;&nbsp;" + item.validTo + "</small></i></a><hr/>")
                      .appendTo(ul);
                };
            });
        }
    </script>
</body>
</html>
