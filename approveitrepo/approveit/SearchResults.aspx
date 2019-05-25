<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SearchResults.aspx.cs" Inherits="SearchResults" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Search Results</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/DateSetup.js" type="text/javascript"></script>
    <script src="js/jquery.MultiFile.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script type="text/javascript">
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
        function refreshNotes() {
            window.location = window.location;
        }
        function DoOnAjaxPostback() {
            setupDatePicker();
            //            setupPreviewPane();
            $('#date').dateinput({
                format: 'mm/dd/yyyy',
                trigger: false
            });

            $(function () {
                $("#ddlEditCity").ufd({ log: true });
            });

            $(function () {
                $("#ddlEditFromcity").ufd({ log: true });
            });

            $(function () {
                $("#ddlEditTocity").ufd({ log: true });
            });
        }

        function refreshExp() {
            $(".btnRefresh").click();
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlEditCity").ufd({ log: true });
            });

            $(function () {
                $("#ddlEditFromcity").ufd({ log: true });
            });

            $(function () {
                $("#ddlEditTocity").ufd({ log: true });
            });
        });

        function TabIndex(lnk, e) {
            var evt = window.event || e;
            if (evt.keyCode == 9) {
                if (document.getElementById(lnk)) {
                    setTimeout(function () { document.getElementById(lnk).focus(); }, 1);
                }
                if (!lnk.toLowerCase().contains('date')) {
                    $(document).ready(function () {
                        setupDatePicker();
                        $(".date").dateinput('hide');
                    });
                }
            }
        }


        function collapse(lnk, col) {
            if (document.getElementById(col).style.display == "block") {
                document.getElementById(col).style.display = "none";
                document.getElementById(lnk).innerHTML = "[+] Show details";
            }
            else {
                document.getElementById(col).style.display = "block";
                document.getElementById(lnk).innerHTML = "[-] Hide details";
            }
        }

        function pageLoad() {
            $("#fupd1").MultiFile();
        }


    </script>
    <style>
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

        .rowcolor {
            background-color: #EEB4B4;
        }

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

        .markItUp {
            width: 300px;
        }

        .Cpagination {
            line-height: 50px;
        }

            .Cpagination td {
                border-width: 0;
                padding: 0 2px; /*font-weight: bold;*/
                color: #fff;
            }

            .Cpagination a:hover {
                border: solid 1px #486694;
                text-decoration: none;
            }

            .Cpagination span {
                padding: 2px 6px 2px 6px;
                border: solid 1px #9ECDE7;
                text-decoration: none;
                white-space: nowrap;
                background: #486694;
                background-color: White;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: #555;
                text-shadow: 1 1px 0 #fff;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
            }

            .Cpagination:hover {
                text-decoration: none;
            }

            .Cpagination a, .Cpagination a:visited {
                background: #f1f1f1;
                background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
                background: -moz-linear-gradient(top, #e9e9e9, #d1d1d1);
                -pie-background: linear-gradient(top, #e9e9e9, #d1d1d1);
                border: 1px solid #bbb;
                color: Blue;
                text-shadow: 1 1px 0 #fff;
                text-decoration: none;
                padding: 2px 6px 2px 6px;
                white-space: nowrap;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                -khtml-border-radius: 3px;
                border-radius: 3px;
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
                border: 1px solid #aaa;
                background: #ececec;
                background: -webkit-gradient(linear, left top, left bottom, from(#e1e1e1), to(#c1c1c1));
                background: -moz-linear-gradient(top, #e1e1e1, #c1c1c1);
                -pie-background: linear-gradient(top, #e1e1e1, #c1c1c1);
            }

        .rbl input[type="radio"] {
            margin-left: -100%;
            margin-right: 5%;
        }

        .lnk {
            color: #0D4F8B;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain input {
                width: 135px;
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
    <form id="form" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <div id="wrapper">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="main-section grid_7" style="padding-top: 0px">
                        <div class="main-content grid_4 alpha">
                            <header style="color: Fuchsia">
                                <table width="100%">
                                    <tr>
                                        <td width="95%" style="vertical-align: top">
                                            <h2>Search Results
                                            </h2>
                                        </td>
                                    </tr>
                                </table>
                            </header>
                            <section>
                                <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                                </asp:Timer>
                                <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                                    <ProgressTemplate>
                                        <div id="overlay">
                                            <div id="modalprogress">
                                                <img src="images/Loaders/image_855859.gif" />
                                            </div>
                                        </div>
                                    </ProgressTemplate>
                                </asp:UpdateProgress>
                                <div class="clear">
                                </div>
                                <br />
                                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                                    <Triggers>
                                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                        <asp:AsyncPostBackTrigger ControlID="gvResults" />
                                        <asp:PostBackTrigger ControlID="btnAppend" />
                                        <asp:PostBackTrigger ControlID="btnSaveExp" />
                                    </Triggers>
                                    <ContentTemplate>
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                        <asp:GridView AllowPaging="true" ID="gvResults" runat="server" AutoGenerateColumns="false"
                                            Width="100%" GridLines="None" ShowHeader="true" ShowFooter="false" OnRowDataBound="gvResults_RowDataBound">
                                            <PagerStyle HorizontalAlign="Left" CssClass="Cpagination" />
                                            <PagerSettings Mode="NumericFirstLast" NextPageText="&amp;laquo;" PageButtonCount="5"
                                                PreviousPageText="&amp;raquo;" Position="Bottom" />
                                            <Columns>
                                                <asp:TemplateField>
                                                    <HeaderTemplate>
                                                        <table class="datatable paginate sortable1 full">
                                                            <thead>
                                                                <tr>
                                                                    <th width="21%" align="center" id="headerstyle">
                                                                        <asp:LinkButton ID="lnkRequestID" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </th>
                                                                    <th width="25%" align="center" id="headerstyle">
                                                                        <%--<asp:LinkButton ID="lnkPreAmount" runat="server" Text="Pre-Amount" CommandArgument="PreAmount"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>--%>
                                                                        <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </th>
                                                                    <th width="24%" align="center" id="headerstyle">
                                                                        <asp:LinkButton ID="lnkActAmount" runat="server" Text="Amount" CommandArgument="ActualAmount"
                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                    </th>
                                                                    <th width="10%" align="center" id="headerstyle">
                                                                        <strong>Status</strong>
                                                                    </th>
                                                                    <th width="20%" align="center" id="headerstyle">
                                                                        <strong>View Details</strong>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <table class="datatable paginate sortable1 full" width="100%" style="margin-top: -1.9%; height: 41px;">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="21%" align="right" id="td1" runat="server">
                                                                        <asp:LinkButton ID="lnkReqEdit" runat="server" CommandArgument="test" OnClick="Edit"
                                                                            Text='<%#Eval("RequestID")%>' Font-Bold="false" Font-Underline="true"></asp:LinkButton>
                                                                    </td>
                                                                    <td width="25%" align="right" id="td2" runat="server">
                                                                        <%#Eval("Purpose") %>
                                                                    </td>
                                                                    <td width="24%" align="right" id="td3" runat="server">
                                                                        <asp:Label ID="lblAmnt" runat="server"></asp:Label>
                                                                        <%--<%#Eval("ActualAmount")%><%#Eval("PreAmount")%>--%>
                                                                    </td>
                                                                    <td width="10%" align="center" id="td4" runat="server">
                                                                        <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label>
                                                                    </td>
                                                                    <td width="20%" align="center" id="td5" runat="server">
                                                                        <asp:LinkButton ID="lnkEditBtn" runat="server" OnClick="Edit" Text="Edit" ToolTip="View Expense"><img src="images/icons/arrow_out.png" /></asp:LinkButton>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <asp:HiddenField ID="hdStatus" runat="server" Value='<%#Eval("Status")%>' />
                                                        <asp:HiddenField ID="hdnReq" runat="server" Value='<%#Eval("RequestID")%>' />
                                                        <asp:HiddenField ID="hdnIsMgrPreApproved" runat="server" Value='<%#Eval("IsMgrPreApproved")%>' />
                                                        <asp:HiddenField ID="hdnPreApproved" runat="server" Value='<%#Eval("PreApproved")%>' />
                                                        <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%#Eval("StatusID")%>' />
                                                        <asp:HiddenField ID="hdnPurpose" runat="server" Value='<%#Eval("Purpose")%>' />
                                                        <asp:HiddenField ID="hdnStartDate" runat="server" Value='<%#Eval("StartDate")%>' />
                                                        <asp:HiddenField ID="hdnUserID" runat="server" Value='<%#Eval("userId")%>' />
                                                        <asp:HiddenField ID="hdnCommentsCnt" runat="server" Value='<%#Eval("CommentsCnt")%>' />
                                                        <asp:HiddenField ID="hdnLmtExceeded" runat="server" Value='<%#Eval("LimitExceeded")%>' />
                                                    </ItemTemplate>
                                                    <FooterTemplate>
                                                        <table width="98%">
                                                            <tr>
                                                                <td>&nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%" align="right">
                                                                    <strong>Page Total Amount:</strong>&nbsp;&nbsp;
                                                                <asp:Label ID="lblTotalAmount" runat="server" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </FooterTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <EmptyDataTemplate>
                                                No expenses to display
                                            </EmptyDataTemplate>
                                        </asp:GridView>
                                        <asp:HiddenField ID="ReqID" runat="server" />
                                        <asp:HiddenField ID="hdnExp" runat="server" />
                                        <asp:Panel ID="pnlAddEdit" runat="server" Style="display: none;">
                                            <div id="Div2" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 518px">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="67%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblHeading" runat="server"></asp:Label>
                                                                </h2>
                                                            </td>
                                                            <td width="33%" align="right">
                                                                <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSave_Click" Visible="true" />
                                                                <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="buttonnew-blue" Visible="true" OnClick="btnSubmit_Click" />
                                                                <asp:Button ID="btnConvert" runat="server" Text="Convert" CssClass="buttonnew-blue" Visible="false" OnClick="btnConvert_Click" />
                                                                <asp:Button ID="btnClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnReloadEditData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadEditData" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section style="padding: 20px;">
                                                    <div style="overflow-x: hidden; overflow-y: scroll; height: 370px">
                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px; width: 1179px">
                                                            <table>
                                                                <tr>
                                                                    <td colspan="3">
                                                                        <div id="dvError" runat="server" style="color: Red; font-weight: bold">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2" align="left">
                                                                        <table width="100%">
                                                                            <tr>
                                                                                <td width="50%">
                                                                                    <label1>RequestID:</label1>
                                                                                    <label3>&nbsp;
                                            <%=Session["ReqID"]%>
                                      </label3>
                                                                                </td>
                                                                                <td width="50%">
                                                                                    <label1>Status:</label1>
                                                                                    <label3>&nbsp;<span id="spnStatus" runat="server"><%=Session["Status"] %></span></label3>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        <td align="right">
                                                                            <asp:HiddenField ID="hdnPreType" runat="server" />
                                                                            <asp:LinkButton ID="lknCmnt" runat="server" CommandArgument="test" OnClick="Comments"
                                                                                Text="View Comments"></asp:LinkButton>
                                                                            </a>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label1>Manager Email<em>*</em></label1>
                                                                        <asp:DropDownList ID="ddlManagerEmail" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                            Width="183px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td>
                                                                        <label1>Trip StartDate <em>*</em></label1>
                                                                        <asp:TextBox ID="txtTripStartDate" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                        <asp:HiddenField ID="hdMaxDays" runat="server" />
                                                                        <asp:HiddenField ID="hdMaxDate" runat="server" />
                                                                        <asp:HiddenField ID="hdCurrDate" runat="server" />
                                                                        <asp:HiddenField ID="hdtripStrtDate" runat="server" />
                                                                    </td>
                                                                    <td>
                                                                        <label1>Purpose <em>*</em></label1>
                                                                        <asp:TextBox ID="txtPurpose" runat="server"></asp:TextBox>
                                                                    </td>
                                                                    <td></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <br />
                                                        <a id="lnk" href="javascript:void(0)" onclick="collapse('lnk', 'col')">[-]Hide details</a>
                                                        <div id="col" class="form_edit" style="border: 1px solid #0099CC; padding: 8px; display: block; width: 1179px">
                                                            <table width="60%">
                                                                <tr>
                                                                    <td>
                                                                        <div id="dvExpDetails" runat="server">
                                                                            <div id="dvExpError1" runat="server" style="color: Red">
                                                                            </div>
                                                                            <table width="94%">
                                                                                <tr>
                                                                                    <td align="center">
                                                                                        <asp:Button ID="btnAddExpense" runat="server" OnClick="AddNewExpense" Text="Add New Expense" CssClass="buttonnew-blue" />
                                                                                    </td>
                                                                                    <td align="center">&nbsp;&nbsp;&nbsp;
                                                                                    <asp:LinkButton ID="lnkCCT" runat="server" Text="Import CredSitcard Transactions" CssClass="buttonnew-blue"></asp:LinkButton>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                    <td algn="left">
                                                                        <asp:Button ID="btnHistLoad" runat="server" OnClick="ShowHistory" Text="Show History" CssClass="buttonnew-blue" />
                                                                    </td>
                                                                    <td>
                                                                        <asp:LinkButton ID="lnkExptDetails" runat="server" CommandArgument="test" OnClick="Export"
                                                                            Text="Export Expense Details" Visible="false" CssClass="button"></asp:LinkButton>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <div class="clearfix">
                                                                <br />
                                                            </div>
                                                            <br />
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <asp:GridView ID="gvExp" runat="server" AllowPaging="True" PageSize="10" AutoGenerateColumns="False"
                                                                            Width="1145px" GridLines="None" OnPageIndexChanging="gvExp_PageIndexChanging"
                                                                            OnRowCommand="gvExp_RowCommand" CellPadding="4" ForeColor="#333333" OnRowDataBound="gvExp_RowDataBound"
                                                                            OnRowEditing="gvExp_RowEditing" OnRowDeleting="gvExp_RowDeleting">
                                                                            <Columns>
                                                                                <asp:TemplateField>
                                                                                    <HeaderTemplate>
                                                                                        <table class="datatable paginate sortable1 full">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th style="width: 15%; font-size: 1.1em" id="headerstyle">ExpenseType
                                                                                                    </th>
                                                                                                    <th style="width: 15%; font-size: 1.1em" id="headerstyle">ExpenseItem
                                                                                                    </th>
                                                                                                    <th style="width: 10%; font-size: 1.1em" id="headerstyle">ExpenseDate
                                                                                                    </th>
                                                                                                    <th style="width: 10%; font-size: 1.1em" id="headerstyle">Pre-Amount
                                                                                                    </th>
                                                                                                    <th style="width: 10%; font-size: 1.1em" id="headerstyle">Expense Amount
                                                                                                    </th>
                                                                                                    <th style="width: 15%; font-size: 1.1em" id="headerstyle">City
                                                                                                    </th>
                                                                                                    <th style="width: 15%; font-size: 1.1em" id="headerstyle">Attachments
                                                                                                    </th>
                                                                                                    <th style="width: 10%; font-size: 1.1em" id="headerstyle">Action
                                                                                                    </th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <table class="datatable paginate sortable1 full" style="margin-top: -0.4%; height: 38px">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="width: 15%; text-align: center" id="td1" runat="server">
                                                                                                        <label3><asp:Label ID="lblCodeID_ET" runat="server" Visible="false"></asp:Label></label3>
                                                                                                        <label3><asp:Label ID="lblCode_Job" runat="server" Visible="false"></asp:Label></label3>
                                                                                                        <label3><asp:Label ID="lblCode_Phs" runat="server" Visible="false"></asp:Label></label3>
                                                                                                        <label3><asp:Label ID="lblCode_JC" runat="server" Visible="false"></asp:Label></label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblExpType" Text='<%#Eval("expType")%>' />
                                                                                                    </td>
                                                                                                    <td style="width: 15%; text-align: center" id="td2" runat="server">
                                                                                                        <label3><asp:Label runat="server" ID="lblJobs" Text='<%#Eval("jobCode")%>' Visible="false" /></label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblPhases" Text='<%#Eval("phaseCode")%>' Visible="false" /></label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblCategories" Text='<%#Eval("JCatCode")%>' Visible="false" /></label3>
                                                                                                        <label3><asp:Label ID="lblCodeID" runat="server" Visible="false"></asp:Label></label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblExpItem" Text='<%#Eval("expItem")%>' /></label3>
                                                                                                    </td>
                                                                                                    <td style="width: 10%; text-align: center" id="td3" runat="server">
                                                                                                        <asp:Label runat="server" ID="lblFromDate" Text='<%#Eval("fromDate")%>' Style="display: none" />
                                                                                                        <asp:Label runat="server" ID="lblToDate" Text='<%#Eval("toDate")%>' Style="display: none" />
                                                                                                        <label3><asp:Label runat="server" ID="lblExpDate" Text='<%#Eval("expDate")%>' /></label3>
                                                                                                    </td>
                                                                                                    <td style="width: 10%; text-align: right" id="td4" runat="server">
                                                                                                        <label3><asp:Label runat="server" ID="lblPreAmnt" Text='<%#Eval("preAmount")%>' /></label3>
                                                                                                        <label3> <asp:HiddenField runat="server" ID="hdnAmount" Value='<%#Eval("amtSpent")%>' /></label3>
                                                                                                    </td>
                                                                                                    <td style="width: 10%; text-align: right" id="td5" runat="server">
                                                                                                        <label3><asp:Label runat="server" ID="lblActAmnt" Text='<%#Eval("actualAmount")%>' /></label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblPaymentID" Text='<%#Eval("payMode") %>' Visible="false" /></label3>
                                                                                                    </td>
                                                                                                    <td style="width: 15%; text-align: center" id="td6" runat="server">
                                                                                                        <label3><asp:Label runat="server" ID="lblCity" Text='<%#Eval("citiesVstd")%>' /> </label3>
                                                                                                        <label3><asp:Label runat="server" ID="lblOtherCity" Text='<%#Eval("otherCity")%>' /></label3>
                                                                                                    </td>
                                                                                                    <td style="width: 15%; text-align: center" id="td7" runat="server">
                                                                                                        <asp:Label runat="server" ID="lblComments" Text='<%#Eval("comments")%>' Visible="false" />
                                                                                                        <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                                                            Text="Attachments" ToolTip="Click to download attachments"><img src="images/icons/attachment_blue_24x24.png"/></asp:LinkButton>
                                                                                                        <asp:HiddenField ID="hdnRequest" runat="server" Value='<%# Eval("reqId") %>' />
                                                                                                        <asp:HiddenField ID="hdnSeq" runat="server" Value='<%#Eval("expLineNo") %>' />
                                                                                                        <asp:HiddenField ID="hdnPreAppr" runat="server" Value='<%#Eval("preApproved") %>' />
                                                                                                        <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%#Eval("attCnt") %>' />
                                                                                                        <asp:HiddenField ID="hdnAccCode" runat="server" Value='<%#Eval("accountCode") %>' />
                                                                                                    </td>
                                                                                                    <td style="width: 10%; text-align: right" id="td8" runat="server">
                                                                                                        <asp:LinkButton runat="server" ID="lnkEdit" CommandName="Edit" OnCommand="EditNewDetails"
                                                                                                            Style="margin-left: -24px" CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/pencil.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                    <asp:LinkButton runat="server" ID="lnkview" CommandName="View" OnCommand="ViewNewDetails"
                                                                                                        CommandArgument='<%# ((GridViewRow)Container).RowIndex+ ";" +Eval("expLineNo")%>'><img src="images/icons/arrow_out.png" /></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                    <asp:LinkButton runat="server" ID="lnkDelete" CommandArgument='<%# ((GridViewRow)Container).RowIndex + ";" +Eval("expLineNo")%>'
                                                                                                        CommandName="Delete"><img src="images/icons/dialog_cancel.png" /></asp:LinkButton>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <PagerStyle CssClass="Cpagination" />
                                                                            <PagerSettings Mode="NumericFirstLast" NextPageText="»" PageButtonCount="5" PreviousPageText="«" />
                                                                        </asp:GridView>
                                                                        <asp:HiddenField ID="hdnRowIndex" runat="server" />
                                                                        <asp:HiddenField ID="hdnSeq1" runat="server" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <asp:HiddenField runat="server" ID="hdnComments" />
                                                        </div>
                                                    </div>
                                                    <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px; width: 1179px">
                                                        <table style="font-weight: bold; width: 100%" align="center">
                                                            <tr>
                                                                <td style="text-align: right; width: 12%">
                                                                    <label3>Pre-Expenses Total :</label3>
                                                                </td>
                                                                <td style="text-align: left; width: 12%">
                                                                    <label3> <%=preExpTotal %></label3>
                                                                </td>
                                                                <td style="text-align: right; width: 12%">
                                                                    <label3>Expenses Total :</label3>
                                                                </td>
                                                                <td style="text-align: left; width: 12%">
                                                                    <label3> <%=expTotal %></label3>
                                                                </td>
                                                                <td style="text-align: right; width: 12%; color: Green">
                                                                    <label3><asp:Label ID="lblGrandTotal" Text = "Grand Total : " runat="server"></asp:Label></label3>
                                                                </td>
                                                                <td style="text-align: left; width: 12%; color: Green">
                                                                    <label3> <asp:Label ID="lblGrandTotalAmnt" runat="server"></asp:Label></label3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkFake" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                                            TargetControlID="lnkFake" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAuto" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div id="dvAuto" class="main-content" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0px 0px 10px 0px; border-radius: 8px">
                                                <header>
                                                    <h2 class="pophead">Edit Auto-Mileage</h2>
                                                </header>
                                                <section>
                                                    <div>
                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px; width: 1125px">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <div id="dvAutoError" runat="server" style="color: Red">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label1>RequestID:</label1>
                                                                        <label3>&nbsp;
                    <%=Session["ReqID"]%></label3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label1>Manager Email </label1>
                                                                        <span style="color: Red">*</span>
                                                                        <asp:DropDownList ID="ddlManagerEmail_Auto" runat="server" DataTextField="Email"
                                                                            DataValueField="UserID" Style="background-color: White; color: Black" Width="193px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td>
                                                                        <label1>Trip StartDate </label1>
                                                                        <span style="color: Red">*</span>
                                                                        <asp:TextBox ID="txtTripStartDate_Auto" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                    </td>
                                                                    <td>
                                                                        <label1>Purpose </label1>
                                                                        <span style="color: Red">*</span>
                                                                        <asp:TextBox ID="txtPurpose_Auto" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <br />
                                                        <div class="form_edit" style="border: 1px solid #0099CC; padding: 8px; width: 1125px">
                                                            <div id="dvAutoDetails" runat="server">
                                                                <table>
                                                                    <tr>
                                                                        <td align="left">
                                                                            <label1>Travelled From<em>*</em></label1>
                                                                        </td>
                                                                        <td align="left">
                                                                            <label1>Travelled To<em>*</em></label1>
                                                                        </td>
                                                                        <td align="left">
                                                                            <label1>Travel Date<em>*</em></label1>
                                                                        </td>
                                                                        <td align="left">
                                                                            <label1>Total Trip<em>*</em></label1>
                                                                        </td>
                                                                        <td align="left">
                                                                            <label1>LessNorm<em></em></label1>
                                                                        </td>
                                                                        <td align="left">
                                                                            <label1>Mileage Reimbursed</label1>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:TextBox ID="txtEFrom" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="txtETo" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="txtETravelDate" runat="server" type="date" name="date" class="date"></asp:TextBox>
                                                                            <asp:HiddenField ID="HiddenField3" runat="server" />
                                                                            <asp:HiddenField ID="HiddenField4" runat="server" />
                                                                            <asp:HiddenField ID="hdnExpType" runat="server" />
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="txtETotTrip" runat="server" onkeyup='javascript:CalReimbt();'></asp:TextBox>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="txtELessNorm" runat="server" onkeyup='javascript:CalReimbt();'></asp:TextBox>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="txtEReimbt" runat="server"></asp:TextBox>
                                                                        </td>
                                                                        <td style="vertical-align: bottom; text-align: right" align="right">
                                                                            <asp:Button ID="btnAutoAppend" runat="server" Text="Add" CssClass="buttonnew-blue" OnClick="btnAutoAppend_Click" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <br />
                                                            <table>
                                                                <tr>
                                                                    <td width="1025px">
                                                                        <asp:GridView ID="gvEditAuto" runat="server" AllowPaging="True" AutoGenerateColumns="False"
                                                                            Width="1010px" GridLines="None" ForeColor="#333333" CellPadding="4" OnPageIndexChanging="gvEditAuto_PageIndexChanging"
                                                                            OnRowCancelingEdit="gvEditAuto_RowCancelingEdit" OnRowCommand="gvEditAuto_RowCommand"
                                                                            OnRowDeleting="gvEditAuto_RowDeleting" OnRowEditing="gvEditAuto_RowEditing" OnRowUpdating="gvEditAuto_RowUpdating"
                                                                            OnRowDataBound="gvEditAuto_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField>
                                                                                    <HeaderTemplate>
                                                                                        <table class="datatable paginate sortable1 full">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th>Travlled From
                                                                                                    </th>
                                                                                                    <th>Travlled To
                                                                                                    </th>
                                                                                                    <th>Travel Date
                                                                                                    </th>
                                                                                                    <th>Total Trip
                                                                                                    </th>
                                                                                                    <th>LessNorm
                                                                                                    </th>
                                                                                                    <th>Reimbursement
                                                                                                    </th>
                                                                                                    <th>Amount
                                                                                                    </th>
                                                                                                    <th>Action
                                                                                                    </th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                        </table>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <table class="datatable paginate sortable1 full">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblFrom" Text='<%#Eval("From") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblTo" Text='<%#Eval("To") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblTravelDate" Text=' <%# DateTime.Parse(Eval("TravelDate").ToString()).ToShortDateString() %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblTotalTrip" Text='<%#Eval("TotTrip") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblLessNorm" Text='<%#Eval("LNorm") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblReimbt" Text='<%#Eval("Reimbt") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:Label runat="server" ID="lblAmount" Text='<%#Eval("Amount") %>' />
                                                                                                        <asp:Label runat="server" ID="lblAutoId" Visible="false" Text='<%#Eval("AutoID") %>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:LinkButton ID="lnkEdit" Text="Edit" runat="server" CommandName="Edit" Width="30px"
                                                                                                            OnCommand="EditAutoLineItem" CommandArgument='<%# ((GridViewRow)Container).RowIndex + ";" +Eval("AutoID")%>' />
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <asp:LinkButton runat="server" ID="lnkview" Text="View" CommandName="View" OnCommand="ViewAutoDetails"
                                                                                                            CommandArgument='<%# ((GridViewRow)Container).RowIndex + ";" +Eval("AutoID")  %>' />
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </asp:GridView>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <br />
                                                        <table width="1125px">
                                                            <tr>
                                                                <td width="100%" align="left">
                                                                    <asp:Button ID="btnAutoSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnAutoSave_Click"
                                                                        Visible="true"></asp:Button>&nbsp;
                                                                <asp:Button ID="btnAutoClose" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnAutoClose_Click" />&nbsp;
                                                                <asp:HiddenField ID="hdnPPM" runat="server" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkFake_Auto" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Auto" runat="server" DropShadow="false" PopupControlID="pnlAuto"
                                            TargetControlID="lnkFake_Auto" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlComments" runat="server" CssClass="modalPopup" Style="display: none">
                                            <div id="dvCmnts" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 70%;">
                                                                <h2 class="pophead">Comments</h2>
                                                            </td>
                                                            <td align="right" style="width: 30%">
                                                                <asp:Button ID="btnCommentsClose" runat="server" OnClick="btnCommentsClose_Click" Text="Close" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnCommentsSave" runat="server" Text="Ok" CssClass="buttonnew-blue" OnClick="btnCommentsSave_Click"></asp:Button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div style="overflow: hidden; overflow-y: scroll; height: 275px; width: 500px">
                                                        <div id="dvErrorc" runat="server" style="color: Red">
                                                        </div>
                                                        <br />
                                                        <div id="dvCommentsPop" runat="server">
                                                            <div id="widgetComments" runat="server" style="font-size: 12px; font-family: 'Lucida Grande' , Verdana, Arial, 'Bitstream Vera Sans' , sans-serif;">
                                                            </div>
                                                            <br />
                                                            <asp:TextBox ID="txtPopComments" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkFake_Cmt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Comments" runat="server" DropShadow="false" PopupControlID="pnlComments"
                                            TargetControlID="lnkFake_Cmt" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAtt" runat="server" Style="display: none">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px; opacity: 0.9">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 90%;">
                                                                <h2 class="pophead">Attachments</h2>
                                                            </td>
                                                            <td align="right" style="width: 10%">
                                                                <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div id="dvAtt" runat="server">
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Att" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                            TargetControlID="lnkAtt" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlVAddEdit" runat="server" CssClass="modalPopup" DefaultButton="btnSaveExp"
                                            Style="display: none;">
                                            <div class="main-content" id="DivEdit" runat="server" style="margin: 0px 0px 0px -15px; background-color: White; padding: 0 0px 10px 0px; height: 397px; min-width: 1222px;">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%" style="vertical-align: top">
                                                                <h2 class="pophead">
                                                                    <asp:Label ID="lblPopHeading" runat="server"> </asp:Label></h2>
                                                            </td>
                                                            <td width="50%" align="right">
                                                                <asp:Button ID="btnSaveExp" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSaveExp_Click" />
                                                                &nbsp;
                                                            <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="btnDelete_Click" />
                                                                <asp:Button ID="btnAppend" runat="server" Text="Done" CssClass="buttonnew-blue" OnClick="btnAppend_Click" />&nbsp;
                                                            <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnCancel_Click" />&nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <%--<section>--%>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td style="width: 60%">
                                                                    <b>
                                                                        <div id="dvExpError" runat="server" style="color: Red; font-weight: bold; text-align: left">
                                                                        </div>
                                                                    </b>
                                                                </td>
                                                                <td style="width: 40%; text-align: right">
                                                                    <div style="text-align: right">
                                                                        <asp:Button ID="btnPrev" runat="server" Text="Previous" CssClass="buttonnew-blue" OnClick="PreviousExp" />
                                                                        <asp:Button ID="btnNext" runat="server" Text="Next" CssClass="buttonnew-blue" OnClick="NextExp" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="divExptype" runat="server">
                                                                                    <div id="dvEditType" style="width: 20%; float: left">
                                                                                        <label>
                                                                                            Expense Type<em>*</em>
                                                                                        </label>
                                                                                        <asp:DropDownList ID="ddlEditExpType" runat="server" DataValueField="Description"
                                                                                            onkeydown="if(document.getElementById('ddlEditJobs').disabled == false){TabIndex('ddlEditJobs', event);}else{TabIndex('ddlEditExpenseItem', event);}"
                                                                                            DataTextField="Description" Width="180px" AutoPostBack="true" OnSelectedIndexChanged="ddlExpType_SelectedIndexChanged">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditJob" runat="server" style="display: none; width: 20%; float: left">
                                                                                        <label>
                                                                                            Job Code<em>*</em>
                                                                                        </label>
                                                                                        <asp:DropDownList ID="ddlEditJobs" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            onkeydown="TabIndex('ddlEditPhases', event)" OnSelectedIndexChanged="ddlJobs_SelectedIndexChanged"
                                                                                            Width="180px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditPhs" runat="server" style="display: none; width: 20%; float: left">
                                                                                        <label>
                                                                                            Phase Code<em>*</em></label>
                                                                                        <asp:DropDownList ID="ddlEditPhases" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            onkeydown="TabIndex('ddlEditCategories', event)" OnSelectedIndexChanged="ddlPhases_SelectedIndexChanged"
                                                                                            Width="180px" AutoPostBack="true">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                    <div id="dvEditJC" runat="server" style="display: none; width: 20%; float: left">
                                                                                        <label>
                                                                                            Job Category<em>*</em></label>
                                                                                        <asp:DropDownList ID="ddlEditCategories" runat="server" DataTextField="Name" DataValueField="Code"
                                                                                            onkeydown="TabIndex('ddlEditExpenseItem', event)" Width="180px">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="dvEditItem" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Expense Item<em>*</em></label>
                                                                                    <asp:DropDownList ID="ddlEditExpenseItem" onkeydown="TabIndex('txtEditExpDate', event)"
                                                                                        runat="server" DataTextField="Description" DataValueField="Description" Width="180px"
                                                                                        AutoPostBack="true" OnSelectedIndexChanged="ddlExpenseItem_SelectedIndexChanged">
                                                                                    </asp:DropDownList>
                                                                                    <asp:HiddenField ID="hdnCodeValue6" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue5" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue4" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue3" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue2" runat="server" />
                                                                                    <asp:HiddenField ID="hdnCodeValue1" runat="server" />
                                                                                    <asp:HiddenField ID="hdnExpItem" runat="server" />
                                                                                    <asp:HiddenField ID="hdnAcc" runat="server" />
                                                                                </div>
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
                                                                    <div class="subheader" style="width: 1140px; margin-top: -10px">
                                                                        <h4>Expense Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td width="100%">
                                                                                <div id="dvEditED" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        Expense Date<em>*</em></label>
                                                                                    <asp:TextBox runat="server" ID="txtEditExpDate" type="date" name="date" class="date"
                                                                                        onkeydown="if(document.getElementById('txtEditPreAmnt').disabled == false){TabIndex('txtEditPreAmnt', event);}else{TabIndex('txtEditActAmnt', event);}"
                                                                                        Width="170px" />
                                                                                </div>
                                                                                <div id="dvEditCV" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        Cities visited<em>*</em></label>
                                                                                    <asp:DropDownList ID="ddlEditCity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                        OnSelectedIndexChanged="CitiesSelectedIndexChanged" AutoPostBack="true" onkeydown="TabIndex('txtEditComments', event)"
                                                                                        name="ddlEditCity" ClientIDMode="Static" Width="170px" Height="21px" onchange="javascript:gridcityvalidation(this);">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditOtherCity" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        Enter City<em>*</em></label>
                                                                                    <asp:TextBox runat="server" ID="txtEditOtherCity" Width="170px" onkeydown="TabIndex('txtEditComments', event)" />
                                                                                </div>
                                                                                <div id="dvEditFromcity" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        From City<em>*</em></label>
                                                                                    <asp:DropDownList ID="ddlEditFromcity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                        AutoPostBack="true" OnSelectedIndexChanged="CitiesSelectedIndexChanged" Width="170px"
                                                                                        name="ddlEditFromcity" ClientIDMode="Static">
                                                                                    </asp:DropDownList>
                                                                                    <%-- <asp:DropDownList ID="DropDownList1" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                    AutoPostBack="true" OnSelectedIndexChanged="CitiesSelectedIndexChanged" Width="170px"
                                                                                    onchange="javascript:onchangeCity('ddlEditFromcity','dvEditFromOther', 'txtEditOtherFromCity');"
                                                                                    name="ddlEditFromcity" ClientIDMode="Static">
                                                                                </asp:DropDownList>--%>
                                                                                </div>
                                                                                <div id="dvEditFromOther" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        Other City<em>*</em></label>
                                                                                    <asp:TextBox ID="txtEditOtherFromCity" runat="server" Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditToCity" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        To City<em>*</em></label>
                                                                                    <asp:DropDownList ID="ddlEditTocity" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                        Width="170px" name="ddlEditTocity" ClientIDMode="Static" onchange="javascript:onchangeCity('ddlEditTocity', 'dvEditToOther', 'txtEditOtherToCity')">
                                                                                    </asp:DropDownList>
                                                                                    <%--  <asp:DropDownList ID="DropDownList1" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                                    Width="170px" onchange="javascript:onchangeCity('ddlEditTocity','dvEditToOther', 'txtEditOtherToCity');"
                                                                                    name="ddlEditTocity" ClientIDMode="Static">
                                                                                </asp:DropDownList>--%>
                                                                                </div>
                                                                                <div id="dvEditToOther" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        Other City<em>*</em></label>
                                                                                    <asp:TextBox ID="txtEditOtherToCity" runat="server" Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditFD" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        From Date<em>*</em></label>
                                                                                    <asp:TextBox ID="txtEditFromdate" runat="server" type="date" name="date" class="date"
                                                                                        Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditTD" runat="server" style="display: none; width: 18%; float: left">
                                                                                    <label>
                                                                                        To Date<em>*</em></label>
                                                                                    <asp:TextBox ID="txtEditTodate" runat="server" type="date" name="date" class="date"
                                                                                        Width="170px"></asp:TextBox>
                                                                                </div>
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
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVendor" runat="server" style="display: none; width: 25%; float: left">
                                                                                    <label>
                                                                                        Prefered Vendor</label>
                                                                                    <asp:DropDownList ID="ddlEditPreVendor" runat="server" DataTextField="Description"
                                                                                        AutoPostBack="true" DataValueField="Description" Width="200px" OnSelectedIndexChanged="ddlEditPreVendor_SelectedIndexChanged">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditAgName" runat="server" style="display: none; width: 23%; float: left">
                                                                                    <label>
                                                                                        Agent Name</label>
                                                                                    <asp:DropDownList ID="ddlEditAgName" runat="server" DataTextField="Description" DataValueField="Description"
                                                                                        Width="200px">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditItNo" runat="server" style="display: none; width: 25%; float: left">
                                                                                    <label>
                                                                                        Itinary Number</label>
                                                                                    <asp:TextBox ID="txtEditItNo" runat="server" Width="207px"></asp:TextBox>
                                                                                </div>
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
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditTT" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Total Trip<em>*</em></label>
                                                                                    <asp:TextBox ID="TextBox1" runat="server" Width="170px" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditLN" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        LessNorm</label>
                                                                                    <asp:TextBox ID="txtEditLNorm" runat="server" Width="170px" onkeyup='javascript:CalReimbt1("txtEditTotTrip", "txtEditLNorm", "txtEditReimbt", "txtEditActAmnt", "txtEditPreAmnt");'></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditReimbt" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Reimbursement<em>*</em></label>
                                                                                    <asp:TextBox ID="TextBox2" runat="server" Width="170px"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditPA" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Pre-Amount<em>*</em></label>
                                                                                    <asp:TextBox runat="server" ID="txtEditPreAmnt" Width="170px" onkeydown="TabIndex('txtEditActAmnt', event)"></asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditAmt" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Expense Amount<em>*</em></label>
                                                                                    <asp:TextBox runat="server" ID="txtEditActAmnt" Width="170px" onkeydown="TabIndex('ddlEditPaymentType', event)" />
                                                                                </div>
                                                                                <div id="dvEditPM" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Payment Mode<em>*</em></label>
                                                                                    <asp:DropDownList ID="ddlEditPaymentType" runat="server" DataTextField="Description"
                                                                                        onkeydown="TabIndex('ddlEditCity', event)" DataValueField="Description" Width="180px">
                                                                                    </asp:DropDownList>
                                                                                </div>
                                                                                <div id="dvEditCmt" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Comments<em>*</em></label>
                                                                                    <asp:TextBox runat="server" ID="txtEditComments" TextMode="MultiLine" Width="170px"
                                                                                        onkeydown="TabIndex('fupd1', event)" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <%--  <tr>
                                                            <td>
                                                                &nbsp;
                                                            </td>
                                                        </tr>--%>
                                                            <tr>
                                                                <td>
                                                                    <div class="subheader" style="width: 1140px; margin-top: -10px">
                                                                        <h4>Attachment Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div style="overflow: hidden; overflow-y: scroll; height: 52px;">
                                                                        <div style="width: 23%; float: left">
                                                                            <label>
                                                                                Attachments</label>
                                                                            <asp:FileUpload ID="fupd1" runat="server" Width="274px" class="multi" onkeydown="TabIndex('btnSaveExp', event)" />
                                                                            <asp:Label ID="lblEditAtt" runat="server" Style="display: none"></asp:Label>
                                                                        </div>
                                                                        <asp:LinkButton ID="LnkcurrAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                            Text="View Current attachments"></asp:LinkButton>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <%--  </section>--%>
                                            </div>
                                            <div class="main-content" id="DivView" runat="server" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; height: 543px; width: 1222px">
                                                <header style="height: 4%">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="90%" style="vertical-align: top">
                                                                <h2 class="pophead">View ExpenseItem</h2>
                                                            </td>
                                                            <td width="10%" align="right">
                                                                <asp:Button ID="btnVCancel" runat="server" Text="Close" CssClass="buttonnew-blue" OnClick="btnVCancel_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <%-- <section>--%>
                                                <div style="padding: 20px">
                                                    <div class="divfieldset">
                                                        <div style="text-align: right">
                                                            <asp:Button ID="btnVPrev" runat="server" Text="Previous" CssClass="buttonnew-blue" OnClick="ViewPreviousExp" />
                                                            <asp:Button ID="btnVNext" runat="server" Text="Next" CssClass="buttonnew-blue" OnClick="ViewNextExp" />
                                                        </div>
                                                        <table class="tablemain">
                                                            <tr>
                                                                <td>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVType" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Expense Type
                                                                                    </label>
                                                                                    <asp:TextBox ID="lblddlVExpType" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVJob" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Job Code
                                                                                    </label>
                                                                                    <asp:TextBox ID="lblddlVJobCd" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPhs" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Phase Code
                                                                                    </label>
                                                                                    <asp:TextBox ID="lblVPhcd" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVJC" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Job Category
                                                                                    </label>
                                                                                    <asp:TextBox ID="lblVCatCode" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVItem" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Expense Item</label>
                                                                                    <asp:TextBox ID="lblVExpCd" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
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
                                                                    <div class="subheader" style="width: 1140px; margin-top: -10px">
                                                                        <h4>Expense Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVED" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        Expense Date</label>
                                                                                    <asp:TextBox ID="lblVDate" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVCV" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        Cities visited<small></small></label>
                                                                                    <asp:TextBox ID="lblVCity" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div>
                                                                                    <span id="SpVOthercity" runat="server" style="display: none; width: 17%; float: left">
                                                                                        <label>
                                                                                            Other City</label>
                                                                                        <asp:TextBox ID="lblVOther" runat="server" ReadOnly="true" Width="170px">
                                                                                        </asp:TextBox>
                                                                                    </span>
                                                                                </div>
                                                                                <div id="dvEditVFromcity" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        From City<small></small></label>
                                                                                    <asp:TextBox ID="lblVFromcity" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVFromOther" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        Other City<small></small></label>
                                                                                    <asp:TextBox ID="lblVOtherFromCity" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVToCity" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        To City<small></small></label>
                                                                                    <asp:TextBox ID="lblVTocity" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVToOther" runat="server" style="display: none; width: 16%; float: left">
                                                                                    <label>
                                                                                        Other City<small></small></label>
                                                                                    <asp:TextBox ID="lblVOtherToCity" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVFD" runat="server" style="display: none; width: 17%; float: left">
                                                                                    <label>
                                                                                        From Date</label>
                                                                                    <asp:TextBox ID="lblVFromdate" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVTD" runat="server" style="display: none; width: 18%; float: left">
                                                                                    <label>
                                                                                        To Date</label>
                                                                                    <asp:TextBox ID="lblVTodate" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
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
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVPreVendor" runat="server" style="display: none; width: 25%; float: left">
                                                                                    <label>
                                                                                        Preferred Vendor</label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVPreVendor" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVAgName" runat="server" style="display: none; width: 23%; float: left">
                                                                                    <label>
                                                                                        Agent Name</label><br />
                                                                                    <asp:TextBox ID="lblAgName" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVItNo" runat="server" style="display: none; width: 25%; float: left">
                                                                                    <label>
                                                                                        Itinarary number
                                                                                    </label>
                                                                                    <br />
                                                                                    <asp:TextBox ID="lblVItNo" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
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
                                                                    <table width="100%">
                                                                        <tr>
                                                                            <td>
                                                                                <div id="dvEditVTT" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Total Trip</label>
                                                                                    <asp:TextBox ID="TextBox3" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVLN" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        LessNorm<small></small></label>
                                                                                    <asp:TextBox ID="lblVLNorm" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVReimbt" runat="server" style="display: none; width: 20%; float: left">
                                                                                    <label>
                                                                                        Reimbursement<small></small></label>
                                                                                    <asp:TextBox ID="lblVReimbt" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPA" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Pre-Amount<small></small></label>
                                                                                    <asp:TextBox ID="lblVPreAmt" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVAmt" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Expense Amount<small></small></label>
                                                                                    <asp:TextBox ID="lblVActAmt" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="dvEditVPM" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Payment Mode</label>
                                                                                    <asp:TextBox ID="lblVPayMode" runat="server" ReadOnly="true" Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
                                                                                <div id="Div3" runat="server" style="width: 20%; float: left">
                                                                                    <label>
                                                                                        Comments</label>
                                                                                    <asp:TextBox ID="lblVcomnts" TextMode="MultiLine" runat="server" ReadOnly="true"
                                                                                        Width="170px">
                                                                                    </asp:TextBox>
                                                                                </div>
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
                                                                    <div class="subheader" style="width: 1140px; margin-top: -10px">
                                                                        <h4>Attachment Details</h4>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div style="overflow: hidden; overflow-y: scroll; height: 52px;">
                                                                        <asp:LinkButton ID="LinkViewAttachments" runat="server" CommandArgument="test" OnClick="DisplayLineAttachments"
                                                                            Text="View Current attachments"></asp:LinkButton>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <%-- </section>--%>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkVEdit" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_Edit" runat="server" DropShadow="false" PopupControlID="pnlVAddEdit"
                                            TargetControlID="lnkVEdit" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAddEditAuto" runat="server" CssClass="modalPopup" DefaultButton="btnSubmitEdit"
                                            Style="display: none">
                                            <div class="main-content form grid_6" id="dvEditAuto" runat="server" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0 0px 10px 0px; border-radius: 8px">
                                                <header>
                                                    <h2 class="pophead">Edit Auto</h2>
                                                </header>
                                                <section>
                                                    <fieldset>
                                                        <b>
                                                            <div id="dvEditAutoError" runat="server" style="color: Red">
                                                            </div>
                                                        </b>
                                                        <asp:HiddenField runat="server" ID="hdnRowIndex1" />
                                                        <asp:HiddenField runat="server" ID="hdnEReimbt" />
                                                        <label>
                                                            Travelled from<small>Enter Expense date</small></label>
                                                        <asp:TextBox runat="server" ID="txtEditFrom" Width="207px" />
                                                        <label>
                                                            Travelled To<em>*</em><small>Enter Travelled To</small></label>
                                                        <asp:TextBox runat="server" ID="txtEditTo" Width="207px"></asp:TextBox>
                                                        <label>
                                                            Travel Date<em>*</em><small>Enter Travel Date</small></label>
                                                        <asp:TextBox runat="server" ID="txtEditTravelDate" Width="207px" type="date" name="date"
                                                            class="date" />
                                                        <label>
                                                            Total Trip<em>*</em><small>Enter Total Trip</small></label>
                                                        <asp:TextBox runat="server" ID="txtEditTotTrip" Width="207px" onkeyup='javascript:CalReimbt1(this);' />
                                                        <label>
                                                            LessNorm<small>Enter LessNorm</small></label>
                                                        <asp:TextBox runat="server" ID="txtEditLessNorm" Width="207px" onkeyup='javascript:CalReimbt1(this);' />
                                                        <label>
                                                            Amount</label>
                                                        <asp:TextBox runat="server" ID="lblAmnt" Width="207px" />
                                                        <label>
                                                            Mileage Reiembursed</label>
                                                        <asp:TextBox runat="server" ID="txtEditReimbt"></asp:TextBox>
                                                        <div class="action">
                                                            <asp:Button ID="btnSubmitEdit" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="btnSubmitEdit_Click" />
                                                            <asp:Button ID="btnCancelEdit" runat="server" Text="Cancel" CssClass="buttonnew-blue" OnClick="btnCancelEdit_Click" />
                                                            <asp:Button ID="btnDeleteEdit" runat="server" Text="Delete" CssClass="buttonnew-blue" OnClick="btnDeleteEdit_Click" />
                                                        </div>
                                                    </fieldset>
                                                </section>
                                            </div>
                                            <div class="main-content form grid_6" id="dvViewAuto" runat="server" style="margin: 0px 0px 0px 30px; background-color: White; padding: 0 0px 10px 0px; border-radius: 8px">
                                                <header>
                                                    <h2 class="pophead">View Auto</h2>
                                                </header>
                                                <section>
                                                    <fieldset>
                                                        <label>
                                                            Travelled From</label>
                                                        <asp:TextBox ID="lblVFrom" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            Travelled To
                                                        </label>
                                                        <asp:TextBox ID="lblVTo" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            TravelDate
                                                        </label>
                                                        <asp:TextBox ID="lblVTravelDate" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            Total Trip
                                                        </label>
                                                        <asp:TextBox ID="lblVTotTrip" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            Less Norm</label>
                                                        <asp:TextBox ID="lblVLessNorm" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            Amount</label>
                                                        <asp:TextBox ID="lblVAmount" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <label>
                                                            Reiembursment</label>
                                                        <asp:TextBox ID="lblVReiembt" runat="server" ReadOnly="true">
                                                        </asp:TextBox>
                                                        <div class="action">
                                                            <asp:Button ID="btnAVCancel" runat="server" Text="Cancel" CssClass="buttonnew-blue" OnClick="btnAVCancel_Click" />
                                                        </div>
                                                    </fieldset>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkEdit" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popup_EditAuto" runat="server" DropShadow="false" PopupControlID="pnlAddEditAuto"
                                            TargetControlID="lnkEdit" BackgroundCssClass="modalBackground">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                            <div class="main-content" id="Div1" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">Alert</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="DeleteExpItem" Text="Yes" CssClass="buttonnew-blue" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" OnClick="RetainDialog" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    Are you sure you want to delete this item?
                                                    <br />
                                                    <br />
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                            TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                        </cc1:ModalPopupExtender>
                                        <asp:Panel ID="pnlHist" runat="server" Style="display: none">
                                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                <header>
                                                    <table width="100%">
                                                        <tr>
                                                            <td style="width: 50%;">
                                                                <h2 class="pophead">History</h2>
                                                            </td>
                                                            <td align="right" style="width: 50%">
                                                                <asp:Button ID="btnHistClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section>
                                                    <div class="form_edit" style="border: 1px solid #0099CC; padding: 12px;">
                                                        <asp:GridView ID="gvHist" runat="server" AutoGenerateColumns="false" AllowPaging="true"
                                                            PageSize="10" OnPageIndexChanging="gvHist_PageIndexChanging" Width="700px">
                                                            <PagerStyle HorizontalAlign="Left" CssClass="Cpagination" />
                                                            <PagerSettings Mode="NumericFirstLast" NextPageText="&amp;laquo;" PageButtonCount="5"
                                                                PreviousPageText="&amp;raquo;" />
                                                            <Columns>
                                                                <asp:TemplateField>
                                                                    <HeaderTemplate>
                                                                        <table class="datatable paginate sortable1 full" style="width: 100%">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th width="20%" align="center">Date
                                                                                    </th>
                                                                                    <th width="80%" align="center">Modified
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                        </table>
                                                                    </HeaderTemplate>
                                                                    <ItemTemplate>
                                                                        <table class="datatable paginate sortable1 full" style="margin-top: -0.7%; width: 100%; height: 41px">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="20%" align="center">
                                                                                        <%#Eval("Date")%>
                                                                                    </td>
                                                                                    <td width="80%" align="center">
                                                                                        <%#Eval("Text")%>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                No history data available
                                                            </EmptyDataTemplate>
                                                        </asp:GridView>
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkHist" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender runat="server" ID="popHist" DropShadow="false" PopupControlID="pnlHist"
                                            TargetControlID="lnkHist" BackgroundCssClass="modalBackground1" CancelControlID="btnHistClose">
                                        </cc1:ModalPopupExtender>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </section>
                        </div>
                        <uc6:userinfo ID="userinfo" runat="server" />
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
