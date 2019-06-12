<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendBillTo.aspx.cs" Inherits="Quotations_VendBillTo" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc8" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ApproveIt - Vendor BillTo</title>
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
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
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

        $(document).ready(function () {
            $(function () {
                $("#ddlCity").ufd({ log: true });
            });
            $(function () {
                $("#ddlStates").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
            $(function () {
                $("#ddlCurrency").ufd({ log: true });
            });
            $(function () {
                $("#ddlPayMode").ufd({ log: true });
            });
        });

        function redirectPage(type) {
            if (type == 1)
                window.location = 'VendShipTo.aspx';
            else
                window.location = 'VendContacts.aspx';
        }
    </script>
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: Red;
                font-size: 1em;
                font-weight: bold;
            }

        .lbl {
            text-align: right;
        }

        .tab td {
            padding: 5px;
            vertical-align: top;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 150px;
            }
    </style>
</head>
<body>
    <form id="form1" runat="server" autocomplete="off">
        <div id="wrapper">
            <header>
                <h1 class="grid_1">ApproveIt
                </h1>
            </header>
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="margin-left: 134px">
                        <!-- the tabs -->
                        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server" ScriptMode="Release">
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
                                <div class="main-content grid_4 alpha" style="width: 1080px; padding-top: 0px">
                                    <header class="clearfix">
                                        <hgroup>
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%">
                                                        <h2>Vendor BillTo
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveDetails" />
                                                        <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue"></asp:Button>
                                                        <asp:Button ID="btnBack" runat="server" Text="Back To Login" CssClass="buttonnew-blue" OnClick="btnBack_Click" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section class="container_1 clearfix">
                                        <div class="divfieldset">
                                            <div id="dvMsg" runat="server">
                                            </div>
                                            <table class="tablemain">
                                                <tr>
                                                    <td>
                                                        <table width="90%">
                                                            <tr>
                                                                <td style="text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Vendor Bill Number:&nbsp;&nbsp;</label></small>
                                                                </td>
                                                                <td style="text-align: left">
                                                                    <asp:TextBox ID="txtBillNum" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>First Name:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtVendName1" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Last Name:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtVendName2" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Display Name:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtVendPrefName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Email:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Password:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Confirm Password:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtConfPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Address1:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddr1" runat="server"></asp:TextBox>

                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Address2:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddr2" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Address3:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtAddr3" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>City:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="ddlCity" runat="server" Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>State:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="ddlStates" runat="server"  Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="lbl"><small>
                                                                    <label>
                                                                        <em>*</em>ZipCode:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtZip" runat="server" MaxLength="6"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Country:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="ddlCountry" runat="server"  Width="160px">
                                                                        <asp:ListItem>UnitedStates of America</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            URL:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtWebsite" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Currency:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="ddlCurrency" runat="server" Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Phone1:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtPhone" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Phone2:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtPhone2" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Fax:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtFax" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Payment Mode:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="ddlPayMode" runat="server" Width="160px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            Payment Terms:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtPayterms" TextMode="MultiLine" runat="server" MaxLength="500" Width="150px"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Category:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtCat" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Sub-Category:</label></small>
                                                                </td>
                                                                <td>
                                                                    <asp:TextBox ID="txtSubCat" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="lbl">
                                                                    <small>
                                                                        <p>
                                                                            <asp:CheckBox ID="chkMultiLoc" runat="server" Text="Multiple Locations" TextAlign="Right" />
                                                                        </p>
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
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
