<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RecieptStore.aspx.cs" Inherits="RecieptStore" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">

        (function () {

            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {

                document.createElement(html5elmeents[i]);

            }

        }

  )();

    </script>
    <title>ApproveIt - Reciept Store</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground3 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .markItUp {
            width: 300px;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .lnk {
            color: White;
        }

        #gvAttchmntsjEsCoOl_headerDiv, #gvRctStorejEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAttchmntsjEsCoOl_headerDiv div table tbody tr th, #gvRctStorejEsCoOl_headerDiv div table tbody tr th, #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvAttchmnts tbody tr td, #gvRctStore tbody tr td, #gvDrafts tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvAttchmntsjEsCoOl_mainDiv, #gvRctStorejEsCoOl_mainDiv, #gvDraftsjEsCoOl_mainDiv {
            width: 500px;
            height: 200px;
            overflow: hidden;
        }

        #gvRctStore TR TD, #gvRctStore TR TH, #gvRctStore TR TH div, #gvRctStore TR TD div, #gvAttchmnts TR TD, #gvAttchmnts TR TH, #gvAttchmnts TR TH div, #gvAttchmnts TR TD div,
        #gvDrafts TR TD, #gvDrafts TR TH, #gvDrafts TR TH div, #gvDrafts TR TD div {
            overflow: visible;
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

    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
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

        function refreshNotes() {
            window.location = window.location;
        }

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlExpenseID").ufd({ log: true });
            });
            $(function () {
                $("#ddlExpType").ufd({ log: true });
            });
            Filter(document.getElementById('txtKeywordSearch'));
        }

        function refreshAlarms() {
            $(".btnRefresh").click();
        }

        $(document).ready(function () {
            $(function () {
                $("#ddlExpenseID").ufd({ log: true });
            });
            $(function () {
                $("#ddlExpType").ufd({ log: true });
            });
        });

        function pageLoad() {
            $(function () {
                $("#ddlExpenseID").ufd({ log: true });
            });
        }

        function $1(id) {
            return document.getElementById(id);
        }

        function ShowBiggerImage(obj) {
            $1("LargeImageContainerDiv").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImage(obj) {
            $1("LargeImageContainerDiv").innerHTML = "";
        }

        function move_Area(event) {
            event = event || window.event;
            LargeImageContainerDiv.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDiv.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function ShowBiggerImageDrft(obj) {
            $1("LargeImageContainerDivDrft").innerHTML = "<img src='" + obj.src + "'+'width=750 height=300' style=' border: 10px solid #ccc'>";
        }

        function ShowDefaultImageDrft(obj) {
            $1("LargeImageContainerDivDrft").innerHTML = "";
        }

        function move_Area1(event) {
            event = event || window.event;
            LargeImageContainerDivDrft.style.left = event.clientX + document.body.scrollLeft + 10;
            LargeImageContainerDivDrft.style.top = event.clientY + document.body.scrollTop + 10;
        }

        function CheckAttDel() {
            var total = 0;
            var grid = $1('<%=gvAttchmnts.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                    total++;
                }
            }
            if (parseInt(total) == parseInt(grid.rows.length)) {
                $1('dvAtt').innerHTML = "You cannot delete all the attachments.";
                $1('dvAtt').style.color = "Red";
                return false;
            }
        }

        function showDeleteButton() {
            $1('dvAtt').innerHTML = '';
            var total = 0;
            var grid = $1('<%=gvAttchmnts.ClientID %>');
            for (var i = 2; i <= grid.rows.length + 1; i++) {
                if (i <= 9) {
                    i = '0' + i;
                }
                if ($1(grid.id + '_ctl' + i + '_chkDelAtt').checked) {
                    total++;
                }
            }
            if (parseInt(total) > 0)
                $1("btnDeleteSelected").style.display = "block";
            else
                $1("btnDeleteSelected").style.display = "none";
        }

        function showConfirmation(sender, args) {
            document.getElementById('lblFileName').innerHTML = args.get_fileName();
        }

        //Filter receipt store grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvRctStore');
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
            Obj.focus();
        }
        //Filter receipt store grid with text provided in search box

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
    <form id="form" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <script type="text/javascript">
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_initializeRequest(InitializeRequest);
            prm.add_endRequest(EndRequest);

            function InitializeRequest(sender, args) {
            }

            function EndRequest(sender, args) {
                //$(".date").datepicker();
                //
            }
        </script>
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
                    <section class="main-section grid_7">
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
                        <div class="main-content grid_4 alpha" style="width: 115%;">
                            <header>
                                <table width="100%">
                                    <tr>
                                        <td width="95%">
                                            <h2>Reciept Store
                                            </h2>
                                        </td>
                                        <td width="5%">
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="buttonnew-blue" OnClick="ReloadData" />
                                        </td>
                                    </tr>
                                </table>
                            </header>
                            <section>
                                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                                    <Triggers>
                                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                        <asp:AsyncPostBackTrigger ControlID="gvRctStore" />
                                    </Triggers>
                                    <ContentTemplate>
                                        <div class="divfieldset">
                                            <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style='display: none' />
                                            <table width="100%">
                                                <%if (Convert.ToInt32(Session["ReqCnt"]) > 0)
                                                  { %>
                                                <tr>
                                                    <td colspan="3">
                                                        <table width="35%">
                                                            <tr>
                                                                <td style="vertical-align: top; text-align: right">
                                                                    <small>
                                                                        <label>
                                                                            Select Type:&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </label>
                                                                    </small>
                                                                </td>
                                                                <td align="center" style="margin: 25px">
                                                                    <asp:DropDownList ID="ddlExpType" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                        AutoPostBack="True" OnSelectedIndexChanged="rblExpType_SelectedIndexChanged" Width="200px">
                                                                    </asp:DropDownList>
                                                                    <asp:HiddenField ID="hdnExpProcessType" runat="server" />
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
                                                    <td colspan="3">
                                                        <table width="40%">
                                                            <tr>
                                                                <div id="dvSearchError">&nbsp;</div>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>
                                                                        <label>From:</label></small>&nbsp;
                                                    <asp:TextBox ID="txtFrom" runat="server" Width="100px" class="date"></asp:TextBox>
                                                                    <cc1:CalendarExtender ID="cal1" runat="server" TargetControlID="txtFrom" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                    </cc1:CalendarExtender>
                                                                </td>
                                                                <td>
                                                                    <small>
                                                                        <label>To:</label></small>&nbsp;
                                                    <asp:TextBox ID="txtTo" runat="server" Width="100px" class="date"></asp:TextBox>
                                                                    <cc1:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtTo" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
                                                                    </cc1:CalendarExtender>
                                                                </td>
                                                                <td>
                                                                    <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="btnGo_Click" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <%if (Session["Cnt"] == "1")
                                                          { %>
                                                        <table width="35%">
                                                            <tr>
                                                                <td align="center" width="35%">
                                                                    <small>
                                                                        <label>
                                                                            Select RequestID:</label></small>
                                                                </td>
                                                                <td width="65%">
                                                                    <asp:DropDownList ID="ddlExpenseID" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlExpenseID_SelectedIndexChanged" Width="200px">
                                                                    </asp:DropDownList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <%}
                                                  }
                                                  else
                                                  { %>
                                                        <span id="newBtn" runat="server">
                                                            <input type="button" value="New Expense" class="buttonnew-blue" onclick="window.location.href = 'NewExpense.aspx'; showProgress()" /></span>
                                                        <%} %>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata" runat="server" Width="300px" placeholder="Type to search expenses.." />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                            <isx:CoolGridView AllowPaging="false" ID="gvRctStore" runat="server" AutoGenerateColumns="false"
                                                Width="75%" Height="270px" ShowHeader="true" OnRowDataBound="gvRctStore_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkRequestID" runat="server"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblReqId" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkExpenseItem" runat="server"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblExpItem" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="120px" ItemStyle-Width="120px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkDate" runat="server"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblExpDate" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="120px" ItemStyle-Width="120px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkActAmount" runat="server"
                                                                OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblAmnt" runat="server"></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="75px" ItemStyle-Width="75px">
                                                        <HeaderTemplate>
                                                            Status
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblColor" runat="server" Height="16px" Width="16px">&nbsp;&nbsp;&nbsp;&nbsp;</asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="75px" ItemStyle-Width="75px">
                                                        <HeaderTemplate>
                                                            Action
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="lnkShowAtt" runat="server" CommandArgument="test" OnClick="DisplayAttachments"
                                                                ToolTip="Click to view attachments"></asp:LinkButton>
                                                            <asp:HiddenField ID="hdStatus" runat="server" Value='<%#Eval("Status")%>' />
                                                            <asp:HiddenField ID="hdnReq" runat="server" Value='<%# Eval("reqId")%>' />
                                                            <asp:HiddenField ID="hdnSeq" runat="server" Value='<%# Eval("expLineNo")%>' />
                                                            <asp:HiddenField ID="hdnStatusID" runat="server" Value='<%# Eval("statusId")%>' />
                                                            <asp:HiddenField ID="hdnAttCnt" runat="server" Value='<%# Eval("attCnt")%>' />
                                                            <asp:HiddenField ID="hdnExpItem" runat="server" Value='<%# Eval("expItem")%>' />
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                                <EmptyDataTemplate>
                                                    <div style="width: 350px">
                                                        <label>
                                                            No Receipts to display with in the date range.</label>
                                                    </div>
                                                </EmptyDataTemplate>
                                            </isx:CoolGridView>
                                            <asp:Panel ID="pnlAtt" runat="server" CssClass="modalPopup" Style="display: none">
                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                    <header>
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="width: 50%;">
                                                                    <h2 class="pophead">Attachments</h2>
                                                                </td>
                                                                <td align="right" style="width: 50%">
                                                                    <asp:Button ID="btnUpload" OnClick="UploadMoreFiles" runat="server" Text="Upload" CssClass="buttonnew-blue" />
                                                                    <asp:Button ID="btnAttClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <section>
                                                        <div class="divfieldset">
                                                            <div id="dvAtt" runat="server">
                                                            </div>
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView ID="gvAttchmnts" runat="server" AllowPaging="false" Width="380px"
                                                                            Height="300px" AutoGenerateColumns="false" ShowHeader="true" ShowFooter="true"
                                                                            OnRowDataBound="gvAttchmnts_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Attachment">
                                                                                    <ItemTemplate>
                                                                                        <asp:ImageButton runat="server" ID="imgAttchmnt" Width="55px" Height="65px" OnClick="DownLdAtt"></asp:ImageButton>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Remove">
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chkDelAtt" runat="server" onchange="showDeleteButton();" />
                                                                                        <asp:HiddenField ID="hdnattId" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                                        <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                        <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                        <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName")%>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px">
                                                                                    <label>
                                                                                        No Data to display</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </td>
                                                                    <td>
                                                                        <div id="LargeImageContainerDiv" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <div id="dvMoreUpload" runat="server">
                                                                <asp:HiddenField ID="hdnRctFileType" runat="server" />
                                                                <asp:HiddenField ID="hdnRctFileName" runat="server" />
                                                                <cc1:AsyncFileUpload ID="fUpdMore" CompleteBackColor="White" runat="server"
                                                                    UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber"
                                                                    OnUploadedComplete="fileUploadComplete" OnClientUploadComplete="showConfirmation" style="float:left; border: 1px solid #aaaaaa" Width="300px"/>
                                                                <div style="float: left; padding-left: 0.5em">
                                                                    <a href="#" id="tooltip">
                                                                        <img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
                                                                        <span><small>
                                                                            <label>File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB.</label></small>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <br />
                                                                <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                </asp:Label>
                                                                <br />
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="buttonnew-blue" OnClick="DeleteSelectedAttachments" Style="display: none" />
                                                                        </td>
                                                                        <td>&nbsp;
                                                                        </td>
                                                                        <td>
                                                                            <asp:Button ID="btnShowDraft" runat="server" OnClick="DisplayDrafts" Text="Get from Drafts" CssClass="buttonnew-blue" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </asp:Panel>
                                            <asp:LinkButton ID="lnkAtt" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAtt"
                                                TargetControlID="lnkAtt" BackgroundCssClass="modalBackground" CancelControlID="btnAttClose">
                                            </cc1:ModalPopupExtender>
                                            <asp:Panel ID="pnlDelAtt" runat="server" Style="display: none">
                                                <div class="main-content" id="Div10" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                                    <header>
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="width: 50%;">
                                                                    <h2 class="pophead">Alert</h2>
                                                                </td>
                                                                <td align="right" style="width: 50%">
                                                                    <asp:Button ID="btnAttDelYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="buttonnew-blue" />
                                                                    <asp:Button ID="btnAttDelNo" runat="server" Text="No" CssClass="buttonnew-blue"
                                                                        OnClick="RetainAttDialog" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <section>
                                                        <small>
                                                            <label>Are you sure you want to delete this Attachment?</label></small>
                                                        <br />
                                                        <br />
                                                    </section>
                                                </div>
                                            </asp:Panel>
                                            <asp:LinkButton ID="lnkAttDelAlert" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popDelAtt" runat="server" PopupControlID="pnlDelAtt"
                                                TargetControlID="lnkAttDelAlert" CancelControlID="btnAttDelNo" BackgroundCssClass="modalBackground3">
                                            </cc1:ModalPopupExtender>
                                            <asp:Panel ID="pnlDraftAtt" runat="server" Style="display: none">
                                                <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 300px;">
                                                    <header>
                                                        <table width="100%">
                                                            <tr>
                                                                <td style="width: 60%;">
                                                                    <h2 class="pophead">Drafts</h2>
                                                                </td>
                                                                <td align="right" style="width: 40%">
                                                                    <asp:Button ID="btnDftOk" runat="server" OnClick="SelectDrafts" Text="Ok" CssClass="buttonnew-blue" />
                                                                    <asp:Button ID="btnDraftsClose" runat="server" Text="Close" CssClass="buttonnew-blue" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </header>
                                                    <section>
                                                        <div id="dvDrftError" runat="server">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <isx:CoolGridView ID="gvDrafts" runat="server" AllowPaging="false" Width="580px"
                                                                        Height="300px" AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                                        ShowFooter="true" OnRowDataBound="gvDrafts_RowDataBound">
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderText="Attachment">
                                                                                <ItemTemplate>
                                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server" Value='<%# Eval("OrgFilePath")%>' />
                                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                                    <asp:HiddenField ID="hdnDrftName" runat="server" Value='<%#Eval("fileName")%>' />
                                                                                    <asp:ImageButton runat="server" ID="imgDraft" Width="55px" Height="66px" OnClick="DownLdDrafts" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Description">
                                                                                <ItemTemplate>
                                                                                    <label><%#Eval("compCode")%></label>
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField>
                                                                                <HeaderTemplate>
                                                                                    <asp:CheckBox ID="checkAll" runat="server" CssClass="chkHeader" />
                                                                                    Select All
                                                                                </HeaderTemplate>
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="chkgvDft" runat="server" CssClass="chkItem" />
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                        </Columns>
                                                                        <EmptyDataTemplate>
                                                                            <div style="width: 150px">
                                                                                <label>
                                                                                    No data to display</label>
                                                                            </div>
                                                                        </EmptyDataTemplate>
                                                                    </isx:CoolGridView>
                                                                </td>
                                                                <td>
                                                                    <%--<div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; float: right; text-align: center; vertical-align: middle">
                                                                    --%></td>
                                                            </tr>
                                                        </table>
                                                        <asp:HiddenField ID="hdnDftCnt" runat="server" />
                                                    </section>
                                                </div>
                                            </asp:Panel>
                                            <asp:LinkButton ID="lnkDraftAtt" runat="server"></asp:LinkButton>
                                            <cc1:ModalPopupExtender ID="popDraftsAtt" runat="server" DropShadow="false" PopupControlID="pnlDraftAtt"
                                                TargetControlID="lnkDraftAtt" BackgroundCssClass="modalBackground3" CancelControlID="btnDraftsClose">
                                            </cc1:ModalPopupExtender>
                                        </div>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                                <br />
                                <br />
                            </section>
                        </div>
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
