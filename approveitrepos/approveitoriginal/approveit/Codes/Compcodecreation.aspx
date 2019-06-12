<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Compcodecreation.aspx.cs"
    Inherits="Compcodecreation" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="../Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Company Code Creation</title>
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
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link href="../css/_styles.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css">
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/global.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
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

        function Displayddl() {
            if (document.getElementById('chkCopyCodes').checked || document.getElementById('chkCopyVendors').checked ||
            document.getElementById('chkCopyFiscCal').checked || document.getElementById('chkCopyExpItems').checked)
                document.getElementById('dvCopyCodes').style.display = "block";
            else
                document.getElementById('dvCopyCodes').style.display = "none";
        }

        function DoOnAjaxPostback() {
            searchCity();
            $(function () {
                $("#ddlOrg").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
        }

        $(document).ready(function () {
            searchCity();
            $(function () {
                $("#ddlOrg").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
        });

        function pageLoad() {
            searchCity();
            $(function () {
                $("#ddlOrg").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
        }

        //Autocomplete city textbox begin

        function searchCity() {
            $(".autosuggest1").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Compcodecreation.aspx/searchCity",
                        data: "{'cityname':'" + document.getElementById('txtCities').value + "'}",
                        dataType: "json",
                        success: function (data) {
                            response(data.d);
                        },
                        error: function (result) {
                            dvError.innerHTML = "An error occurred while fetching the data. Please try again.";
                        }
                    });
                }
            });
        }
        //Autocomplete city textbox end

        function CompName(txtId) {
            if (document.getElementById('txtCompName').value != '') {
                capitaliseFirstLetter(txtId);
                var url = '../Invoice.ashx?func=4&orgname=' + document.getElementById('txtCompName').value + '&typ=2';
                GetOrgCode(url, 'GetCompCode');
            }
            else
                document.getElementById('txtOrgcode').value = '';
        }

        function DisplayBillComp() {
            if (document.getElementById('chkBillAddr').checked)
                document.getElementById('dvBillComp').style.display = "none";
            else
                document.getElementById('dvBillComp').style.display = "block";
        }

        function Filter(Obj) {
            var grid = document.getElementById('gvCompCodes');
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
            z-index: 99 !important;
        }

        .modalBackground1 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 3000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        #gvCompCodesjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

        #gvCompCodesjEsCoOl_headerDiv div table tbody tr th {
            height: 30px;
            color: white;
            text-align: center;
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.3em;
            font-weight: normal;
        }

        #gvCompCodes tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvCompCodesjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 20px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain td {
                padding: 1px;
            }

            .tablemain input[type=text] {
                width: 135px;
            }

            .tablemain input[type=checkbox] {
                width: 25px;
            }

            .tablemain label {
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
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
                    <!-- the tabs -->
                    <section class="grid_7" style="padding-top: 0px">
                        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
                        </cc1:ToolkitScriptManager>
                        <%--<asp:ScriptManager ID="ScriptManager1" runat="server">
                    </asp:ScriptManager>--%>
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
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content grid_4 alpha" style="width: 115%; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td width="60%">
                                                    <hgroup>
                                                        <h2>Company Codes
                                                        </h2>
                                                    </hgroup>
                                                </td>
                                                <td width="40%" align="right">
                                                    <asp:Button ID="lnkAddNewCompCode" OnClick="AddNewCompCode" runat="server" Text="Add Company Code" CssClass="buttonnew-blue"></asp:Button>
                                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset" style="height: 400px">
                                            <table style="width: 100%">
                                                <tr>
                                                    <td width="100%">
                                                        <table width="100%">
                                                            <tr>
                                                                <td>
                                                                    <div id="dvMainMsg" runat="server">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">
                                                                    <small>
                                                                        <label>
                                                                            Organization :&nbsp;&nbsp;
                                                                        </label>
                                                                    </small>
                                                                    <label>
                                                                        <b>
                                                                            <asp:DropDownList ID="ddlOrg" runat="server" AutoPostBack="true" OnSelectedIndexChanged="SelectedOrganization">
                                                                            </asp:DropDownList>
                                                                            <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%=Session["SOrgName"] %>' />
                                                                        </b>
                                                                    </label>
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
                                                    <td>
                                                        <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="350px" placeholder="Type in CompanyCode, Name, Address1 or City to search.." />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <%if (gvCompCodes.Rows.Count > 0)
                                                          {  %>
                                                        <isx:CoolGridView ID="gvCompCodes" runat="server" AutoGenerateColumns="false" Width="780px"
                                                            Height="300px" GridLines="None" ShowHeader="true" OnRowDataBound="gvCompCodes_RowDataBound"
                                                            OnRowCommand="gvCompCodes_RowCommand" OnRowDeleting="gvCompCodes_RowDeleting">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="Action" HeaderStyle-Width="100px" ItemStyle-Width="100px">
                                                                    <ItemTemplate>
                                                                        <asp:LinkButton ID="lnkEditCompCode" runat="server" ToolTip="View Code" CommandArgument="test"
                                                                            OnClick="EditCompCode"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;
                                                                        <asp:LinkButton ID="lnkDeleteCompCode" runat="server" ToolTip="Delete Code" CommandArgument='<%#(Eval("CompCode") + "~"+Eval("countryCode") + "~"+Eval("orgId")) %>'
                                                                            CommandName="Delete">
                                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkCompCode" runat="server" Text="Company Code" CommandArgument="CompCode"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label style="text-transform: uppercase"><asp:LinkButton ID="lnkEditCC" runat="server" Text='<%#Eval("CompCode") %>' OnClick="EditCompCode"></asp:LinkButton></label>
                                                                        <asp:HiddenField ID="hdnRowOrgID" runat="server" Value='<%#Eval("orgId") %>' />
                                                                        <asp:HiddenField ID="hdnRowCompCode" runat="server" Value='<%#Eval("CompCode") %>' />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkCompName" runat="server" Text="Company Name" CommandArgument="CompName"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("CompName") %></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkAddr1" runat="server" Text="Address1" CommandArgument="Address1"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("Address1") %></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderStyle-Width="160px" ControlStyle-Width="160px">
                                                                    <HeaderTemplate>
                                                                        <asp:LinkButton ID="lnkCity" runat="server" Text="City" CommandArgument="City"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("City") %></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                        </isx:CoolGridView>
                                                        <%} %>
                                                        <asp:HiddenField ID="hdnCode" runat="server" />
                                                        <asp:HiddenField ID="hdnCountry" runat="server" />
                                                        <asp:HiddenField ID="hdnOrgID" runat="server" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <asp:Panel ID="pnlAddCompCode" runat="server" CssClass="modalPopup" Style="display: none"
                                                DefaultButton="btnSave">
                                                <div id="Div1" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 80%; min-width: 570px;">
                                                    <header style="height: 4%">
                                                        <table width="100%">
                                                            <tr>
                                                                <td width="50%">
                                                                    <h2 class="pophead">
                                                                        <asp:Label ID="lblHCompCode" runat="server"></asp:Label>
                                                                    </h2>
                                                                </td>
                                                                <td width="50%" align="right">
                                                                    <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveCompCode"></asp:Button>
                                                                    <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="DeleteCompCode" />
                                                                    <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <section style="height: 455px">
                                                        <div class="divfieldset" style="height: 440px; width: 675px">
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div id="dvErrMsg" runat="server" style="font-weight: bold">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table class="tablemain">
                                                                            <tr>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Company Name:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCompName" runat="server" onchange="javascript:CompName('txtCompName')"></asp:TextBox>
                                                                                </td>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Company Code:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCompCode" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader">
                                                                                        <h4>Shipping Address</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Address1:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtAddr1" runat="server"></asp:TextBox>
                                                                                </td>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            Address2:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtAddr2" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>City:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCities" runat="server" class="autosuggest1"></asp:TextBox>
                                                                                </td>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>State:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:DropDownList ID="ddlRgnCode" runat="server" Width="120px">
                                                                                    </asp:DropDownList>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Country:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                        Width="120px" name="ddlCountry" ClientIDMode="Static">
                                                                                    </asp:DropDownList>
                                                                                </td>
                                                                                <td align="right">
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>ZipCode:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtZipCode" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader" id="dvCopyOptions" runat="server">
                                                                                        <h4>Copy data from existing company</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <table width="100%">
                                                                                        <tr>
                                                                                            <td width="50%">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyCodes" runat="server" Text="&nbsp;&nbsp;CodeValues"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyVendors" runat="server" Text="&nbsp;&nbsp;Vendors"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyFiscCal" runat="server" Text="&nbsp;&nbsp;Fiscal Calendar"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyExpItems" runat="server" Text="&nbsp;&nbsp;Accounts"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                            <td width="50%">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <div id="dvCopyCodes" style="display: none;" runat="server">
                                                                                                                <table>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <b><span style="color: Red">*</span></b>&nbsp;<small><label>Please select company code from below list 
                                                                                                                            <br />
                                                                                                                                &nbsp;to copy corresponding codevalues
                                                                                                                            </label>
                                                                                                                            </small>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <asp:DropDownList ID="ddlCopyCodes" runat="server" DataTextField="CompCode" DataValueField="CompCode">
                                                                                                                            </asp:DropDownList>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader">
                                                                                        <h4>Billing Address</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <small>
                                                                                        <p>
                                                                                            <asp:CheckBox ID="chkBillAddr" runat="server" TextAlign="Right" Text="&nbsp;&nbsp;&nbsp;Billing Address is same as Shipping Address" onclick="DisplayBillComp();" />
                                                                                        </p>
                                                                                    </small>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div id="dvBillComp" style="display: none" runat="server">
                                                                                        <b>
                                                                                            <span style="color: Red">*</span>
                                                                                        </b>
                                                                                        <small>
                                                                                            <label>
                                                                                                To assign any other Shipping Address please select a company code
                                                                                            </label>
                                                                                        </small>
                                                                                        <asp:DropDownList ID="ddlBillComp" runat="server" DataTextField="CompBillAddress" DataValueField="CompCode">
                                                                                        </asp:DropDownList>
                                                                                    </div>
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
                                            <asp:LinkButton ID="lnkAddCompCode" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popAddCompCode" runat="server" DropShadow="false" PopupControlID="pnlAddCompCode"
                                                TargetControlID="lnkAddCompCode" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
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
                                                                    <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="buttonnew-blue" />&nbsp;&nbsp;&nbsp;
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <section>
                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 20px;">
                                                            <small>
                                                                <label>
                                                                    <asp:Label ID="lblAlert" runat="server"></asp:Label></label></small>
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
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                        <!-- Main Section End -->
                    </section>
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
