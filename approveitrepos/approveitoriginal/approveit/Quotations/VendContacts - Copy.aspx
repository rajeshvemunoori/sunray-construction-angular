<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendContacts.aspx.cs" Inherits="Quotations_VendContacts"
    EnableEventValidation="false" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc1" TagName="vTop" Src="../Controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc2" TagName="vLeft" Src="../controls/VendLeft.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>ApproveIt - Vendor Contacts</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="../css/_styles.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../Styles/leftmenu/styles.css" media="screen" />
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/Ajax.js"></script>
    <script>
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        var currentpageurl = "";
        function GetSelectedBillToData() {
            var type;
            var ddl = document.getElementById('ddlNewType');
            if (document.getElementById("ddlNewType").value != 0) {
                document.getElementById("dvType").style.display = "block";
                document.getElementById("lblTypeText").innerHTML = ddl.options[ddl.selectedIndex].text;
                //GetBillShipTo(document.getElementById("ddlNewType").value);
            }
            else
                document.getElementById("dvType").style.display = "none";
        }
        function GetBillShipTo(text) {
            var url1 = '../Invoice.ashx?func=5&type=' + text;
            GetBillShipToInfo(url1, 'Invoice');
        }


        function GetBillShipToInfo(UpdateURL, pagename) {
            if (UpdateURL != "") {
                currentpageurl = pagename;
                MakeAjaxRequest(UpdateURL, FillBillShipTo, false)
            }
        }

        function FillBillShipTo(response) {
            var ResultType = "";
            ResultType = response.responseText;
            if (ResultType.length == 5) {
                document.getElementById('dvMsg').innerHTML = 'There must be some technical problem. Pls try after sometime.';
            }
            else {
                var resp = ResultType;
                var VenueDDL;
                var ageString = "";
                var optionsList;
                var iterator;
                VenueDDL = document.getElementById("ddlSelectedNewType");
                VenueDDL.disabled = true;
                VenueDDL.options.length = 1;
                VenueDDL.options[0].text = "Loading...";
                ageString = resp;
                optionsList = ageString.split("~");
                VenueDDL.options.length = optionsList.length - 1;

                if (ageString != "") {
                    for (iterator = 0; iterator < optionsList.length - 1; iterator++) {
                        var singleOption;
                        var valueText;

                        singleOption = optionsList[iterator];
                        valueText = singleOption.split(":");

                        VenueDDL.options[iterator].text = valueText[1];
                        VenueDDL.options[iterator].value = valueText[0];
                    }
                    VenueDDL.disabled = false;
                    return false;
                }
            }
        }
    </script>
    <style>
        .modalBackground
        {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 999999 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }
        label
        {
            font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , 'Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';
            font-size: 1.4em;
            color: #555555;
        }
        label em
        {
            color: Red;
            font-size: 1em;
        }
        .tab td
        {
            padding: 5px;
        }
        .maintab td
        {
            padding: 10px;
        }
        .navlnk
        {
            font-weight: bold;
            font-size: 1.5em;
            width: 40px;
            font-family: Franklin Gothic Demi;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position:fixed">
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
                            <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                            <div class="main-content grid_4 alpha" style="width: 900px; padding-top: 0px">
                                <header class="clearfix">
                                    <hgroup>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">
                                                    <h2>
                                                        Assign Contacts
                                                    </h2>
                                                </td>
                                                <td width="50%" align="right">
                                                    <asp:Button ID="btnNew" runat="server" Text="New Contact" CssClass="buttonnew-blue" OnClick="AddNewContact" />
                                                    <asp:Button ID="btnReload" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData"></asp:Button>
                                                </td>
                                            </tr>
                                        </table>
                                    </hgroup>
                                </header>
                                <section>
                                    <div class="divfieldset">
                                        <div id="dvMainMsg" runat="server">
                                        </div>
                                        <table class="maintab">
                                            <tr>
                                                <td colspan="3">
                                                    <table>
                                                        <tr>
                                                            <td align="right">
                                                                <small><label>
                                                                    Type:</label></small>
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList ID="ddlType" runat="server" AutoPostBack="true" OnSelectedIndexChanged="TypeChanged">
                                                                    <asp:ListItem Text="BillTo" Value="B"></asp:ListItem>
                                                                    <asp:ListItem Text="ShipTo" Value="S"></asp:ListItem>
                                                                </asp:DropDownList>
                                                            </td>
                                                            <td align="right">
                                                                <small><label>
                                                                    <asp:Label ID="lblType" runat="server"></asp:Label>:</label></small>
                                                            </td>
                                                            <td>
                                                                <asp:DropDownList ID="ddlSelectedType" runat="server" AutoPostBack="true" OnSelectedIndexChanged="SelectedTypeChanged">
                                                                </asp:DropDownList>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <div class="message info">
                                                        <span style="color: Red"><b>*</b></span><span style="color: Black">Please note, assigning/removing
                                                            contact(s) will be saved to database automatically.</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small><label>
                                                        List of Contacts:</label></small><br />
                                                    <asp:ListBox ID="lstErCont" runat="server" DataValueField="contactId" DataTextField="contactPerferName"
                                                        SelectionMode="Multiple" Width="200px" Height="200px"></asp:ListBox>
                                                </td>
                                                <td>
                                                    <asp:LinkButton ID="lnkAssSelectedContacts" runat="server" OnClick="AssignSelectedContacts"
                                                        CssClass="button button-gray navlnk" Text=">" ToolTip="Assign Selected Contact" /><br />
                                                    <br />
                                                    <asp:LinkButton ID="lnkAssMulContacts" runat="server" OnClick="AssignMultipleContacts"
                                                        CssClass="button button-gray navlnk" Text=">>" ToolTip="Assign All Contacts" />
                                                </td>
                                                <td>
                                                    <small><label>
                                                        Assigned Contacts:</label></small><br />
                                                    <asp:ListBox ID="lstAssgnCont" runat="server" DataValueField="contactId" DataTextField="contactPerferName"
                                                        SelectionMode="Multiple" Width="200px" Height="200px"></asp:ListBox>
                                                </td>
                                            </tr>
                                        </table>
                                        <asp:Panel ID="pnlNew" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px;
                                                min-height: 20px; min-width: 750px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <h2 class="pophead">
                                                                    Add Contact Details
                                                                </h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveDetails" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="CloseWindow"></asp:Button>
                                                                <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="buttonnew-blue" ></asp:Button>
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
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>First Name:</label></small><br />
                                                                    <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        Middle Name:</label></small><br />
                                                                    <asp:TextBox ID="txtMidName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Last Name:</label></small><br />
                                                                    <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Preferred Name:</label></small><br />
                                                                    <asp:TextBox ID="txtPreferName" runat="server"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Email:</label></small><br />
                                                                    <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Designation:</label></small><br />
                                                                    <asp:TextBox ID="txtDesign" runat="server"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Contact Type:</label></small><br />
                                                                    <asp:DropDownList ID="ddlContType" runat="server" Width="135px">
                                                                        <asp:ListItem Value="0">Please Select</asp:ListItem>
                                                                        <asp:ListItem>Sales</asp:ListItem>
                                                                        <asp:ListItem>AR</asp:ListItem>
                                                                        <asp:ListItem>AP</asp:ListItem>
                                                                        <asp:ListItem>CS</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Contact Method:</label></small><br />
                                                                    <asp:DropDownList ID="ddlContMethod" runat="server" Width="135px">
                                                                        <asp:ListItem Value="0">Please Select</asp:ListItem>
                                                                        <asp:ListItem>Phone</asp:ListItem>
                                                                        <asp:ListItem>Email</asp:ListItem>
                                                                        <asp:ListItem>Fax</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small><label>
                                                                        Phone:</label></small><br />
                                                                    <asp:TextBox ID="txtPhone" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        <em>*</em>Mobile:</label></small><br />
                                                                    <asp:TextBox ID="txtMobile" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                                <td>
                                                                    <small><label>
                                                                        Fax:</label></small><br />
                                                                    <asp:TextBox ID="txtFax" runat="server" MaxLength="20"></asp:TextBox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small><label>
                                                                        Type:</label></small><br />
                                                                    <asp:DropDownList ID="ddlNewType" runat="server" OnSelectedIndexChanged="NewTypeSelected"
                                                                        AutoPostBack="true" Width="135px">
                                                                        <asp:ListItem Text="Please Select" Value="0"></asp:ListItem>
                                                                        <asp:ListItem Text="BillTo" Value="B"></asp:ListItem>
                                                                        <asp:ListItem Text="ShipTo" Value="S"></asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <div id="dvType" style="display: none" runat="server">
                                                                        <small><label id="lblTypeText" runat="server">
                                                                        </label>
                                                                        <label>
                                                                            :</label></small><br />
                                                                        <asp:DropDownList ID="ddlSelectedNewType" runat="server">
                                                                        </asp:DropDownList>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkNew" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popNew" runat="server" BackgroundCssClass="modalBackground"
                                            TargetControlID="lnkNew" PopupControlID="pnlNew" CancelControlID="btnClose" DropShadow="false">
                                        </cc1:ModalPopupExtender>
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
