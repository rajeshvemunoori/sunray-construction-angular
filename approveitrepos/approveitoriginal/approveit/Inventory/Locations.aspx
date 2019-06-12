<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Locations.aspx.cs" Inherits="Inventory_Locations" %>

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
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Inventory Locations</title>
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

    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {
            setupDatePicker();
            $('.date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });
            $(function () {
                $("#ddlCompCodes").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlCompCodes").ufd({ log: true });
            });
        });

        //Filter vendors grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvLocations');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                //ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }

        //Fetch cities by selected region
        function GetCitiesByRegion(obj) {
            var region = obj.value;
            var url = '../Invoice.ashx?func=12&rgn=' + region;
            GetCities(url, 'GetCities');
        }

        function GetCities(UpdateURL, pagename) {
            if (UpdateURL != "") {
                currentpageurl = pagename;
                MakeAjaxRequest(UpdateURL, LoadCities, false)
            }
        }

        function LoadCities(response) {

        }
        //Fetch cities by selected region

        //Validate Locations
        function locationDetails() {
            var errStr = 'Please enter ';
            $11('dvMsg').innerHTML = '';
            $11('dvMsg').style.color = "red";
            if ($11('txtLocCode').value == 0) {
                errStr += 'Location Code, ';
            }
            if ($11('txtLocName').value == 0) {
                errStr += 'Location Name, ';
            }
            if ($11('txtLocAddr1').value == 0) {
                errStr += 'Address1, ';
            }
            //if ($11('ddlRgnCode').value == 0) {
            //    errStr += 'Region, ';
            //}
            if ($11('txtLocCity').value == 0) {
                errStr += 'City, ';
            }
            errStr = errStr.substring(0, errStr.length - 2);
            if (errStr.length > 13) {
                $11('dvMsg').innerHTML = errStr;
                return false;
            }
        }
        //Validate Locations

        //This javascript code is required if you are using a CoolGridView inside an update panel.

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
            z-index: 999 !important;
        }

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

            label em {
                color: red;
                font-weight: bold;
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

        #gvLotsjEsCoOl_headerDiv, #gvLocationsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvLotsjEsCoOl_headerDiv div table tbody tr th, #gvLocationsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvLots tbody tr td, #gvLocations tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvLotsjEsCoOl_mainDiv, #gvLocationsjEsCoOl_mainDiv {
            overflow: hidden;
        }

        #gvLots TR TD, #gvLots TR TH, #gvLots TR TH div, #gvLots TR TD div,
        #gvLocations TR TD, #gvLocations TR TH, #gvLocations TR TH div, #gvLocations TR TD div {
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
                                                <td width="50%">
                                                    <hgroup>
                                                        <h2>Inventory Locations
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnAddLocation" runat="server" Text="Add New Location" CssClass="buttonnew-blue" OnClick="AddLocation" />
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div id="dvMainMsg" runat="server">
                                            </div>
                                            <table class="tablemain" width="100%">
                                                <tr>
                                                    <td><small>
                                                        <label>
                                                            Organization:</label></small>&nbsp;&nbsp;<b>
                                                                <asp:Label ID="lblOrgID" runat="server"></asp:Label></b></td>
                                                    <td><small>
                                                        <label>
                                                            Company Code:</label></small>
                                                        &nbsp;&nbsp;
                                                    <asp:DropDownList ID="ddlCompCodes" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlCompCodes_SelectedIndexChanged" Width="200px">
                                                    </asp:DropDownList></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="320px" placeholder="Type in Location Name, Location Code or City to search.." />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <isx:CoolGridView ID="gvLocations" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None"
                                                            Height="300px" Width="600px" OnRowDataBound="gvLocations_RowDataBound" OnRowDeleting="gvLocations_RowDeleting"
                                                            OnRowCommand="gvLocations_RowCommand">
                                                            <Columns>
                                                                <asp:TemplateField>
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHLocCode" runat="server" Text="Location Code" OnCommand="SortExpression" CommandArgument="locCode" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label>
                                                                            <asp:LinkButton ID="lnkLocCode" runat="server" OnClick="EditLocation" Text='<%#Eval("locCode") %>'></asp:LinkButton></label>
                                                                        <asp:HiddenField ID="hdnLocName" runat="server" Value='<%#Eval("locName") %>' />
                                                                        <asp:HiddenField ID="hdnAddr1" runat="server" Value='<%#Eval("locAddress1") %>' />
                                                                        <asp:HiddenField ID="hdnAddr2" runat="server" Value='<%#Eval("locAddress2") %>' />
                                                                        <asp:HiddenField ID="hdnCity" runat="server" Value='<%#Eval("city") %>' />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHLocName" runat="server" Text="Location Name" OnCommand="SortExpression" CommandArgument="locName" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("locName") %></label></ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHAddr1" runat="server" Text="Address1" OnCommand="SortExpression" CommandArgument="locAddress1" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("locAddress1") %></label></ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkHCity" runat="server" Text="City" OnCommand="SortExpression" CommandArgument="city" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("city") %></label></ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 180px"><label>No locations to display.</label></div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <asp:Panel ID="pnlManageLoc" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 800px; height: 430px;">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 30%">
                                                                <h2 class="pophead">Manage Inventory Location</h2>
                                                            </td>
                                                            <td style="width: 70%; text-align: right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveLocation"></asp:Button>
                                                                <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server" style="font-weight: bold"></div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td><small>
                                                                    <label><em>*</em>Location Code:</label></small><br />
                                                                    <asp:TextBox ID="txtLocCode" runat="server" MaxLength="10"></asp:TextBox></td>
                                                                <td><small>
                                                                    <label><em>*</em>Location Name:</label></small><br />
                                                                    <asp:TextBox ID="txtLocName" runat="server" MaxLength="100"></asp:TextBox></td>
                                                                <td><small>
                                                                    <label><em>*</em>Address1:</label></small><br />
                                                                    <asp:TextBox ID="txtLocAddr1" runat="server" MaxLength="200"></asp:TextBox></td>
                                                                <td><small>
                                                                    <label>Address2:</label></small><br />
                                                                    <asp:TextBox ID="txtLocAddr2" runat="server" MaxLength="200"></asp:TextBox></td>
                                                                <td><small>
                                                                    <label>State:</label></small><br />
                                                                    <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList></td>
                                                                <td><small>
                                                                    <label><em>*</em>City:</label></small><br />
                                                                    <asp:TextBox ID="txtLocCity" runat="server"></asp:TextBox>
                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLocCity"
                                                                        MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                        CompletionListItemCssClass="listItem"
                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                    </cc1:AutoCompleteExtender>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" align="right">
                                                                    <asp:Button ID="btnAddNewLot" runat="server" Text="Add Lot/Bin" CssClass="buttonnew-blue" OnClick="btnAddNewLot_Click" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <isx:CoolGridView ID="gvLots" runat="server" AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                            Height="220px" Width="35%" OnRowDataBound="gvLots_RowDataBound" OnRowCommand="gvLots_RowCommand" OnRowDeleting="gvLots_RowDeleting">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="Lot/Bin#" HeaderStyle-Width="300px" ControlStyle-Width="220px">
                                                                    <ItemTemplate>
                                                                        <asp:TextBox ID="txtLotNum" runat="server" Text='<%#Eval("lotNum") %>'></asp:TextBox>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                        </isx:CoolGridView>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkManageLoc" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popManageLoc" runat="server" PopupControlID="pnlManageLoc" TargetControlID="lnkManageLoc"
                                            BackgroundCssClass="modalBackground" CancelControlID="btnCancel" DropShadow="false">
                                        </cc1:ModalPopupExtender>
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
