<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ccreconile.aspx.cs" Inherits="Ccreconile" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Credi Card Reconcilation</title>
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
    <link href="htmls/css/tables.css" rel="stylesheet" type="text/css" />
    <link href="Autosuggest/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="Styles/leftmenu/styles.css" />
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
    <script src="js/Ajax.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>
    <script>
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();

        function showConfirmation(sender, args) {
            document.getElementById('lblFileName').innerHTML = args.get_fileName();
        }

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
        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .maintbl {
            width: 100%;
        }

            .maintbl td {
                padding: 5px;
            }

        .tblexp {
            width: 100%;
        }

            .tblexp th {
                padding: 10px;
                border: 1px solid #ccc;
            }

            .tblexp td {
                padding: 10px;
                border: 1px solid #ccc;
            }

        .lnk {
            color: white;
        }


        #gvExpDetailsjEsCoOl_headerDiv, #gvCCjEsCoOl_headerDiv, #gvUnMatchedCCTransjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvExpDetailsjEsCoOl_headerDiv div table tbody tr th, #gvCCjEsCoOl_headerDiv div table tbody tr th,
            #gvUnMatchedCCTransjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvExpDetails tbody tr td, #gvCC tbody tr td, #gvUnMatchedCCTrans tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            padding: 5px;
            text-align: center;
        }

            #gvExpDetails tbody tr td .ref, #gvCC tbody tr td .ref, #gvUnMatchedCCTrans tbody tr td .ref {
                text-overflow: ellipsis;
                overflow: hidden;
            }

        #gvExpDetailsjEsCoOl_mainDiv, #gvUnMatchedCCTransjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvExpDetails TR TD, #gvExpDetails TR TH, #gvExpDetails TR TH div, #gvExpDetails TR TD div,
        #gvCC TR TD, #gvCC TR TH, #gvCC TR TH div, #gvCC TR TD div,
        #gvUnMatchedCCTrans TR TD, #gvUnMatchedCCTrans TR TH, #gvUnMatchedCCTrans TR TH div, #gvUnMatchedCCTrans TR TD div {
            overflow: visible;
        }

        .multi label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
            padding: 5px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <form id="form" runat="server">
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
        </cc1:ToolkitScriptManager>
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

                        <asp:Timer ID="Timer1" runat="server" Interval="100000000">
                        </asp:Timer>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:PostBackTrigger ControlID="btnUpload" />
                            </Triggers>
                            <ContentTemplate>
                                <div class="main-content grid_4 alpha" style="width: 115%; margin-left: 0;">
                                    <header>
                                        <table width="100%">
                                            <tr>
                                                <td width="50%">

                                                    <h2>Credit Card Reconciliation
                                                    </h2>

                                                </td>
                                                <td style="width: 50%; height: 40px; text-align: right; vertical-align: bottom">
                                                    <asp:Button ID="btnUnmatchedCCTrans" runat="server" Text="Unmatched CC Transactions" CssClass="buttonnew-blue" OnClick="BtnUnmatchedCCTrans_Click" />
                                                    <asp:Button ID="btnBackToMainRecon" runat="server" Text="Back To Main Recon" CssClass="buttonnew-blue" OnClick="BtnBackToMainRecon_Click" Visible="false" />
                                                    <asp:Button ID="btnHMoveReconciled" runat="server" Text="Move Reconciled" CssClass="buttonnew-blue" OnClick="BtnMoveReconciled_Click" Visible="false" />
                                                    <asp:Button ID="btnResetData" runat="server" Text="Reset" CssClass="buttonnew-blue" OnClick="BtnResetData_Click" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div id="dvMainMessage" runat="server" style="text-align: center; font-size: 1.4em"></div>
                                        <div id="dvMainRecon" runat="server">
                                            <table class="maintbl">
                                                <tr>
                                                    <td style="width: 45%; vertical-align: top">
                                                        <div id="dvExpErrMsg" runat="server" style="width: 460px">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div class="message info" style="width: 460px">
                                                                        <small>
                                                                            <label><b><em>*</em></b>&nbsp;Select which months transactions to reconcile.</label>
                                                                            <br />
                                                                            <br />
                                                                    </div>
                                                                    <div>
                                                                        <asp:DropDownCheckBoxes ID="ddlEmployee" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                            Width="170px" CssClass="multi" OnSelectedIndexChanged="DdlEmployee_SelectedIndexChanged" AutoPostBack="true">
                                                                            <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Employee(s)" />
                                                                        </asp:DropDownCheckBoxes>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                                          <asp:DropDownCheckBoxes ID="ddlMonth" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                              Width="150px" CssClass="multi" OnSelectedIndexChanged="DdlMonth_SelectedIndexChanged" AutoPostBack="true">
                                                                              <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Month(s)" />
                                                                          </asp:DropDownCheckBoxes>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp; 
                                                                        <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="BtnGo_Click" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div>
                                                                        <isx:CoolGridView AllowPaging="false" ID="gvExpDetails" runat="server" AutoGenerateColumns="false"
                                                                            Width="500px" Height="350px" GridLines="None" ShowHeader="true" OnRowDataBound="GvExpDetails_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField>
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chkExpRow" runat="server" OnCheckedChanged="ChkExpRow_CheckedChanged" AutoPostBack="true" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Request ID">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkRequestID" runat="server" Text="Request ID" CommandArgument="ReqID"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblRequestId" runat="server" Text='<%#Eval("ReqID")%>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkAccount" runat="server" Text="Account" CommandArgument="expItem"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblExpAccount" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkAccountCode" runat="server" Text="Code" CommandArgument="comments"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblExpAccountCode" runat="server" Text='<%#Eval("comments") %>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="110px" ItemStyle-Width="110px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkStartDate" runat="server" Text="Expense Date" CommandArgument="expDate"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblExpStartDate" runat="server" Text='<%#Eval("expDate") %>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Amount($)">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkActAmount" runat="server" Text="Amount($)" CommandArgument="actualAmount"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblExpAmount" runat="server" Text='<%#Eval("actualAmount") %>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkPurpose" runat="server" Text="Purpose" CommandArgument="purpose"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("purpose") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Purpose" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        CC Reference#
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label class="ref">
                                                                                            <asp:Label ID="lblExpCCRefNo" runat="server"></asp:Label></label>
                                                                                        <asp:HiddenField ID="hdnReconciled" runat="server" />
                                                                                        <asp:HiddenField ID="hdnReconciledType" runat="server" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px">
                                                                                    <label>No data found.</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvExpLegend" runat="server" style="display: none">
                                                                        <span style="background-color: #70DB93">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                                        <label>Auto Reconciled</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <span style="background-color: #FA9A50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                                        <label>Manually Reconciled</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvExpReconcileSummary" runat="server" class="message info" style="width: 96%; display: none">
                                                                        <table class="maintbl">
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblExpTotalAmount" runat="server"></asp:Label></b></label></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Auto Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblExpTotalAmountReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Manually Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblExpTotalAmountManualReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Not Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblExpTotalAmountNotReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="width: 10%; padding: 0px;">
                                                        <%-- <asp:DropDownList ID="ddlReconcileType" runat="server" Width="150px">
                                                            <asp:ListItem Value="Auto">Automatic</asp:ListItem>
                                                            <asp:ListItem Value="Manual">Manual</asp:ListItem>
                                                        </asp:DropDownList>
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnReconcile" runat="server" CssClass="buttonnew-blue" Text="Reconcile" OnClick="btnReconcile_Click" Width="130px" />
                                                        <br />
                                                        <br />--%>
                                                        <asp:Button ID="btnAutoMatch" runat="server" CssClass="buttonnew-blue" Text="Auto Reconcile" OnClick="BtnMatch_Click" Width="130px" Visible="false" />
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnManualMatch" runat="server" CssClass="buttonnew-blue" Text="Manual Reconciliation" OnClick="BtnManualMatch_Click" Style="white-space: normal; width: 130px; height: 50px" Visible="false" />
                                                    </td>
                                                    <td style="width: 45%; vertical-align: top">
                                                        <div id="dvCCErrMsg" runat="server" style="width: 460px">
                                                        </div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <div class="message info">
                                                                        <small>
                                                                            <label>
                                                                                <b><em>*</em></b>&nbsp;Upload Credit Card statement to reconcile (<b>file type must be .csv or .qif</b>) or
                                                                                <asp:LinkButton ID="lnkSavedCCTransactions" runat="server" Text="click here" OnClick="LnkSavedCCTransactions_Click"></asp:LinkButton>
                                                                                to load saved transactions.</label>
                                                                    </div>
                                                                    <div>
                                                                        <div style="float: left">
                                                                            <%-- <asp:FileUpload ID="fupd" runat="server" ClientIDMode="Static" onchange="this.form.submit()"/>--%>
                                                                            <cc1:AsyncFileUpload ID="fupd" CompleteBackColor="White" runat="server"
                                                                                UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnUploadedComplete="FileUploadComplete"
                                                                                OnClientUploadComplete="showConfirmation" Style="border: 1px solid #aaaaaa" Width="75px" />
                                                                            <asp:Label ID="lblFileName" runat="server"></asp:Label>
                                                                            <asp:Label ID="Throbber" runat="server" Style="display: none">
                                                                                            <img src="images/indicator.gif" align="absmiddle" alt="loading" />
                                                                            </asp:Label>
                                                                        </div>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                                          <asp:DropDownCheckBoxes ID="ddlCCMonth" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                              Width="150px" CssClass="multi" OnSelectedIndexChanged="DdlCCMonth_SelectedIndexChanged" AutoPostBack="true">
                                                                              <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Month(s)" />
                                                                          </asp:DropDownCheckBoxes>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp; 
                                                                        <asp:Button ID="btnUpload" runat="server" Text="Go" CssClass="buttonnew-blue" OnClick="BtnUpload_Click" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div>
                                                                        <isx:CoolGridView ID="gvCC" runat="server" AutoGenerateColumns="false" Width="500px" Height="350px"
                                                                            GridLines="None" ShowHeader="true" OnRowDataBound="GvCC_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField>
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chkCCRow" runat="server" OnCheckedChanged="ChkCCRow_CheckedChanged" AutoPostBack="true" />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkRefNum" runat="server" Text="Reference#" CommandArgument="Reference_Number"
                                                                                            OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label class="refNo" title='<%# Eval("Reference_Number")%>'>
                                                                                            <asp:Label ID="lblCCRefNo" runat="server" Text='<%# Eval("Reference_Number")%>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkPostedDate" runat="server" Text="Posted Date" CommandArgument="Posted_Date"
                                                                                            OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblCCPostedDate" runat="server" Text='<%# string.IsNullOrEmpty(Eval("Posted_Date").ToString()) ? string.Empty : Convert.ToDateTime(Eval("Posted_Date")).ToShortDateString()%>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Amount($)" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount($)" CommandArgument="Amount"
                                                                                            OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblCCAmount" runat="server" Text='<%# Eval("Amount")%>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkPayee" runat="server" Text="Description" CommandArgument="Payee"
                                                                                            OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblCCDesc" runat="server" Text='<%# Eval("Payee")%>'></asp:Label></label>
                                                                                        <asp:HiddenField ID="hdnReconciled" runat="server" />
                                                                                        <asp:HiddenField ID="hdnReconciledType" runat="server" />
                                                                                        <asp:HiddenField ID="hdnCCAddress" runat="server" Value='<%# Eval("Address") %>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px">
                                                                                    <label>No data found.</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvCCLegend" runat="server" style="display: none">
                                                                        <span style="background-color: #70DB93">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                                        <label>Auto Reconciled</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <span style="background-color: #FA9A50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                                        <label>Manually Reconciled</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div id="dvCCReconcileSummary" runat="server" class="message info" style="width: 96%; display: none">
                                                                        <table class="maintbl">
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Tolerance :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblCCTolerancePercentage" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount ($):</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblCCTotalAmount" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Auto Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblCCTotalAmountReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Manually Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblCCTotalAmountManualReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style="padding: 0px" colspan="2">
                                                                                    <hr>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <label>
                                                                                        Total Amount Not Reconciled :</label></td>
                                                                                <td style="text-align: right">
                                                                                    <label>
                                                                                        <b>
                                                                                            <asp:Label ID="lblCCTotalAmountNotReconciled" runat="server"></asp:Label></b></label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <asp:Button ID="btnMoveReconciled" runat="server" Text="Move Reconciled" CssClass="buttonnew-blue" OnClick="BtnMoveReconciled_Click" Visible="false" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="dvUnmatchedCCTrans" runat="server" style="display: none">
                                            <isx:CoolGridView ID="gvUnMatchedCCTrans" runat="server" AutoGenerateColumns="false" Width="670px" Height="450px"
                                                GridLines="None" ShowHeader="true" OnRowDataBound="GvUnMatchedCCTrans_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkRefNum" runat="server" Text="Reference#" CommandArgument="Reference_Number"
                                                                OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label class="refNo" title='<%# Eval("Reference_Number")%>'>
                                                                <asp:Label ID="lblCCRefNo" runat="server" Text='<%# Eval("Reference_Number")%>'></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Account" HeaderStyle-Width="200px" ControlStyle-Width="150px">
                                                        <ItemTemplate>
                                                            <asp:DropDownList ID="ddlAccountCode" runat="server"></asp:DropDownList>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkPostedDate" runat="server" Text="Posted Date" CommandArgument="Posted_Date"
                                                                OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblCCPostedDate" runat="server" Text='<%# string.IsNullOrEmpty(Eval("Posted_Date").ToString()) ? string.Empty : Convert.ToDateTime(Eval("Posted_Date")).ToShortDateString()%>'></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Amount($)" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount($)" CommandArgument="Amount"
                                                                OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblCCAmount" runat="server" Text='<%# Eval("Amount")%>'></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                        <HeaderTemplate>
                                                            <asp:LinkButton ID="lnkPayee" runat="server" Text="Description" CommandArgument="Payee"
                                                                OnCommand="SortExpressionCC" CssClass="lnk"></asp:LinkButton>
                                                        </HeaderTemplate>
                                                        <ItemTemplate>
                                                            <label>
                                                                <asp:Label ID="lblCCDesc" runat="server" Text='<%# Eval("Payee")%>'></asp:Label></label>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                            </isx:CoolGridView>
                                            <br />
                                            <br />
                                            <asp:Button ID="btnSubmitUnmatched" runat="server" CssClass="buttonnew-blue" Text="Submit" OnClick="BtnSubmitUnmatched_Click" />
                                        </div>
                                    </section>
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>
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
