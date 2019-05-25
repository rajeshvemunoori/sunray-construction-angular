<%@ Page Language="C#" AutoEventWireup="true" CodeFile="reconciledexpenses.aspx.cs" Inherits="Reconciledexpenses" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="userinfo" Src="Controls/UserInfo.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Reconciled Expenses</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
      <script src="js/Validation.js" type="text/javascript"></script>
   <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="js/Ajax.js" type="text/javascript"></script>
        <%--  <script src="Autosuggest/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Autosuggest/jquery-ui.js" type="text/javascript"></script>--%>
        <script>
            (function () {
                var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
                for (var i = 0; i < html5elmeents.length; i++) {
                    document.createElement(html5elmeents[i]);
                }
            })();
        </script>
    <style>


        .form-control {
    padding: 6px 12px !important;
    height: 34px !important;
}

        div.dd_chk_drop div#buttons {
    padding: 0px !important;
    text-align: right;
    min-width: 154px;
}

        div.dd_chk_drop {
    background-color: white;
    border: 1px solid #CCCCCC;
    text-align: left;
    z-index: 1000;
    left: -1px;
    top: 33px !important;
    min-width: 100%;
}

        .lnk {
            color: white;
        }

        #gvExpDetailsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvExpDetailsjEsCoOl_headerDiv div table tbody tr th {
               height: 30px;
    line-height: 20px;
    color: white;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 13px !important;
    font-weight: normal;
    border: 0.5px solid rgba(0,0,0,0.1);
    padding: 0px 5px;
            }

        #gvExpDetails tbody tr td {
               height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
        }

        #gvExpDetailsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvExpDetails TR TD, #gvExpDetails TR TH, #gvExpDetails TR TH div, #gvExpDetails TR TD div {
            overflow: visible;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .multi label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
            padding: 5px;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <asp:ScriptManager ID="Scr1" runat="server" EnablePageMethods="true">
        </asp:ScriptManager>
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px;margin-top:70px;">

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
                    </Triggers>
                    <ContentTemplate>
                        <div class="main-content  " style=" margin-left: 0;">
                             <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title">Reconciled Expenses</div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                       <div class="pull-right">
                                              <asp:Button ID="btnRefresh" runat="server" CssClass="btn btn-warning" Text="Refresh" OnClick="BtnRefresh_Click" />
                                         </div>
                                </div>
                            </div>

                          
                            <section>
                                <div id="dvMainMessage" runat="server" style="text-align: center; font-size: 1.4em"></div>
                                <div class="alert alert-info" style="width: 460px">
                                    <small >
                                        <label style="font-size:15px;font-weight:bold;"> <i class="fa fa-star maroon-text" aria-hidden="true"></i> Select which months transactions to reconcile.</label>
                                </div>
                                  <div  >
                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <asp:DropDownCheckBoxes ID="ddlEmployee" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                        Width="170px" CssClass="multi form-control" OnSelectedIndexChanged="DdlEmployee_SelectedIndexChanged" AutoPostBack="true">
                                        <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Employee(s)" />
                                    </asp:DropDownCheckBoxes>                   
                                         </div>


                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                             <asp:DropDownCheckBoxes ID="ddlMonth" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                 Width="150px" CssClass="multi form-control" OnSelectedIndexChanged="DdlMonth_SelectedIndexChanged" AutoPostBack="true">
                                                 <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="Select All" SelectBoxCaption="Select Month(s)" />
                                             </asp:DropDownCheckBoxes>    
                                         </div>


                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                      <asp:Button ID="btnGo" runat="server" Text="Go" CssClass="btn btn-success" OnClick="BtnGo_Click" />
                                   </div>
                                      </div>
                                 <div class="clearfix"></div> 
                                <div  >
                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                                      <div style="" class="table-responsive">
                                <isx:CoolGridView AllowPaging="false" ID="gvExpDetails" runat="server" AutoGenerateColumns="false"
                                    Width="975px" Height="450px" GridLines="None" ShowHeader="true" OnRowDataBound="GvExpDetails_RowDataBound">
                                    <Columns>
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
                                                    <asp:Label ID="lblExpAccountCode" runat="server" Text='<%#Eval("accountCode") %>'></asp:Label></label>
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
                                        <asp:TemplateField HeaderText="Purpose" ControlStyle-Width="220px" HeaderStyle-Width="220px">
                                            <HeaderTemplate>
                                                <asp:LinkButton ID="lnkCCRefNo" runat="server" Text="CC Reference#" CommandArgument="comments"
                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <label><%#Eval("comments") %></label>
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
                                    </div>
                                </div>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
            <!-- Main Section End -->
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
            </form>
         <script src="latestdesign/js/modernizr.js"></script>
        
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
    <script src="latestdesign/js/bootstrap-datepicker.min.js"></script>
            <script src="latestdesign/js/bootstrap-select.min.js"></script>
    <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.ui.min.js"></script>--%>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        


    
</body>
</html>
