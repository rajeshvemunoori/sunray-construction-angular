<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendShipTo.aspx.cs" Inherits="Quotations_VendShipTo" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>ApproveIt - ShipTo Details</title>
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

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlCity").ufd({ log: true });
            });
            $(function () {
                $("#ddlStates").ufd({ log: true });
            });
            $(function () {
                $("#ddlCountry").ufd({ log: true });
            });
        }

        function redirectPage() {
            window.location = 'VendContacts.aspx';
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
            z-index: 999 !important;
        }

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

        .tab td {
            padding: 5px;
        }

        #gvShipDetailsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvShipDetailsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvShipDetails tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvShipDetailsjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        .lnk {
            color: White;
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
                                                        <h2>ShipTo Information
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnNewShip" runat="server" Text="New ShipTo" CssClass="buttonnew-blue" OnClick="CreateNewShipTo" />
                                                        <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </hgroup>
                                    </header>
                                    <section>
                                        <div id="dvMainMsg" runat="server">
                                        </div>
                                        <isx:CoolGridView ID="gvShipDetails" runat="server" Width="900px" Height="400px"
                                            AutoGenerateColumns="false" OnRowDataBound="gvShipDetails_RowDataBound">
                                            <Columns>
                                                <asp:TemplateField ItemStyle-Width="90px" HeaderStyle-Width="90px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkShipNum" runat="server" Text="Ship#" CommandArgument="vendShipNum"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><asp:Label ID="lblShipNum" runat="server" Text='<%#Eval("vendShipNum")%>'></asp:Label></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField>
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkName1" runat="server" Text="Name1" CommandArgument="vendorName1"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("vendorName1")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField>
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkName2" runat="server" Text="Name2" CommandArgument="vendorName2"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("vendorName2")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-Width="170px" HeaderStyle-Width="170px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkPrefName" runat="server" Text="Preferred Name" CommandArgument="vendorPerferName"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("vendorPerferName")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkEmail" runat="server" Text="Email" CommandArgument="shipEmail"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("shipEmail")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField ItemStyle-Width="160px" HeaderStyle-Width="160px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkCity" runat="server" Text="City" CommandArgument="shipCity"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("shipCity")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Action" ItemStyle-Width="80px" HeaderStyle-Width="80px">
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnkEdit" runat="server" OnClick="Edit" Text="Edit"><img src="../images/icons/pencil.png" /></asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                        </isx:CoolGridView>
                                        <asp:HiddenField ID="hdnIsEdit" runat="server" />
                                        <asp:Panel ID="pnlNewShip" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 750px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    <%if (hdnIsEdit.Value == "Y")
                                                                      {  %>
                                                                View ShipTo Details
                                                                <%}
                                                                      else
                                                                      {%>
                                                                Add ShipTo Details
                                                                <%} %>
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveDetails" />
                                                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue"></asp:Button>
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="divfieldset">
                                                        <div id="dvMsg" runat="server">
                                                        </div>
                                                        <table class="tab">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="text-align: right">
                                                                                <small>
                                                                                    <label>
                                                                                        <em>*</em>Vendor Ship Number:&nbsp;&nbsp;</label></small>
                                                                            </td>
                                                                            <td style="text-align: left">
                                                                                <asp:TextBox ID="txtShipNum" runat="server"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Name1:</label></small><br />
                                                                    <asp:TextBox ID="txtVendName1" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Name2:</label></small><br />
                                                                    <asp:TextBox ID="txtVendName2" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Preferred Name:</label></small><br />
                                                                    <asp:TextBox ID="txtVendPrefName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Email:</label></small><br />
                                                                    <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Address1:</label></small><br />
                                                                    <asp:TextBox ID="txtAddr1" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Address2:</label></small><br />
                                                                    <asp:TextBox ID="txtAddr2" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Address3:</label></small><br />
                                                                    <asp:TextBox ID="txtAddr3" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>City:</label></small><br />
                                                                    <asp:DropDownList ID="ddlCity" runat="server" Width="135px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>State:</label></small><br />
                                                                    <asp:DropDownList ID="ddlStates" runat="server" Width="135px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Country:</label></small><br />
                                                                    <asp:DropDownList ID="ddlCountry" runat="server" Width="135px">
                                                                        <asp:ListItem>UnitedStates of America</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>ZipCode:</label></small><br />
                                                                    <asp:TextBox ID="txtZip" runat="server" MaxLength="6"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            URL:</label></small><br />
                                                                    <asp:TextBox ID="txtWebsite" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            <em>*</em>Phone1:</label></small><br />
                                                                    <asp:TextBox ID="txtPhone" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Phone2:</label></small><br />
                                                                    <asp:TextBox ID="txtPhone2" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>
                                                                            Fax:</label></small><br />
                                                                    <asp:TextBox ID="txtFax" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkNewShip" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popNewShip" runat="server" BackgroundCssClass="modalBackground"
                                            TargetControlID="lnkNewShip" PopupControlID="pnlNewShip" DropShadow="false" CancelControlID="btnClose">
                                        </cc1:ModalPopupExtender>
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
