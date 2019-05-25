<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Budget.aspx.cs" Inherits="Budget" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
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
    <title>ApproveIt - Budget Maintenance</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <%--<link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>

    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .popover-content {

            min-width:250px;
        }
        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .modalBackground2 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .markItUp {
            width: 300px;
        }

        .lnk {
            color: white;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        #gvBudgetjEsCoOl_headerDiv, #gvImpBudgjEsCoOl_headerDiv, #gvHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvBudgetjEsCoOl_headerDiv div table tbody tr th, #gvImpBudgjEsCoOl_headerDiv div table tbody tr th, #gvHistjEsCoOl_headerDiv div table tbody tr th {
               height: 30px;
    line-height: 27px;
    color: white;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 13px !important;
    font-weight: normal;
    border: 0.5px solid rgba(0,0,0,0.1);
    padding: 0px 5px;
            }

        #gvBudget tbody tr td {
          height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
            text-overflow: ellipsis;
        }

        #gvBudget tbody tr td, #gvImpBudg tbody tr td, #gvHist tbody tr td {
               height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
            text-overflow: ellipsis;
        }

        #gvBudgetjEsCoOl_mainDiv, #gvImpBudgjEsCoOl_mainDiv, #gvHistjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        #gvBudget TR TD, #gvBudget TR TH, #gvBudget TR TH div, #gvBudget TR TD div, #gvHist TR TD, #gvHist TR TH, #gvHist TR TH div, #gvHist TR TD div {
            overflow: visible;
        }

        .tablemain td {
            padding: 5px;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="cd-main-content">
            <!-- Sidebar -->
             <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px; ">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="margin-top:70px;">
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
                                <img src="images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                        <asp:PostBackTrigger ControlID="btnDisplayData" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                        <div class="main-content grid_4 alpha" style="width: 100%;">
                             <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                      <div class="page-title"> Budget</div>
                                 </div>
                              
                                
                             </div>
                           
                            <section>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6   text-center">

                                     <div id="dvCopyConfMsg" runat="server" style="font-weight: bold;margin-bottom:10px;   " >
                                 </div>

                                     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12     text-center">
                                     <div id="dvMainMsg" runat="server" style="font-weight: bold;margin-bottom:10px;   ">
                                            </div>
                                         </div>
                                </div>
                                     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn  btn-warning pull-right" OnClick="ReloadData" />
                                 </div>
                                 
                                  <div class="clearfix"></div>

                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname"> Company Code: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="GetBudgetDetails"
                                                                AutoPostBack="true" class="selectpicker form-control"   data-live-search="true" >
                                                            </asp:DropDownList>                                                            
                                                            </div>
                                                        </div>

                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Department: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                             <asp:DropDownList ID="ddlDept" runat="server" OnSelectedIndexChanged="GetBudgetDetails"
                                                                AutoPostBack="true" class="selectpicker form-control"   data-live-search="true" >
                                                            </asp:DropDownList>
                                                            </div>
                                                        </div>

                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Period: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                             <asp:TextBox ID="txtPeriod" runat="server" ReadOnly="true"
                                                                CssClass="form-control" ></asp:TextBox>
                                        
                                                            
                                                            </div>
                                                        </div>

                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                          <asp:Button ID="btnSavePeriod" runat="server" OnClick="SaveCategory" CssClass="btn btn-danger" Text="Close" />
                                        </div>


                                      <div class="clearfix"></div>

                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Year: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            <asp:DropDownList ID="ddlYear" runat="server" OnSelectedIndexChanged="GetBudgetDetails" class="selectpicker form-control"   data-live-search="true" 
                                                            AutoPostBack="true">
                                                        </asp:DropDownList>
                                                            
                                                            </div>
                                                        </div>


                                    <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname"> Month: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                             <asp:DropDownList ID="ddlMonth" runat="server" OnSelectedIndexChanged="GetBudgetDetails"
                                                           class="selectpicker form-control"   data-live-search="true"    AutoPostBack="true">
                                                        </asp:DropDownList>
                                                            
                                                            </div>
                                                        </div>

                                       <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                           <asp:Button ID="btnCopyBudgetForYear" runat="server" OnClick="CopyAccountCodes" Text="Copy Account Codes" CssClass="btn btn-info" />
                                            <asp:Button ID="btnCopyBudgetForMonth" runat="server" Text="Copy Budget Details" CssClass="btn btn-info" OnClick="CopyBudgetDetails" />
                                                        <asp:HiddenField ID="hdnCopyType" runat="server" />
                                           <asp:Button ID="btnUploadData" runat="server" Text="Import Budget Data" CssClass="btn btn-success" OnClick="UploadBudgetData" />
                                        </div>

                                </div>
                                 
                                <div class="divfieldset" style="margin-bottom:100px;">
                                    <div id="dvMsg" runat="server" style="text-align: center;font-weight:bold;font-size:17px !important;">
                                    </div>
                                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
                                           <asp:Button ID="btnEditGrid" runat="server" Text="Modify Budget" CssClass="btn btn-info" OnClick="EditBudgetGrid" />
                                                <asp:Button ID="btnSaveGrid" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveBudgetGrid" />
                                                <asp:Button ID="btnCancelEditGrid" runat="server" Text="Cancel" CssClass="btn btn-danger    " OnClick="CancelGridEdit" />
                                          </div>

                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                         <div class="form-group   has-feedback"  >       
                                              <asp:TextBox ID="txtKeywordSearch" runat="server"   CssClass="filterdata form-control" placeholder="Type to search.." />
                                    <asp:HiddenField ID="hdnKeywordSearch" runat="server" />   
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                                                                               
                                         </div>

                                      <div class="clearfix"></div>
                                    <div style="margin-bottom:100px;width:100%;overflow:auto;height:auto;">
                                    <table>
                                        
                                        <tr>
                                            <td>
                                               
                                                <isx:CoolGridView ID="gvBudget" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                    Height="400px" Width="100%" OnPageIndexChanging="gvBudget_PageIndexChanging"
                                                    OnRowCommand="gvBudget_RowCommand" OnRowEditing="gvBudget_RowEditing" OnRowDataBound="gvBudget_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Department">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkDeptCode" runat="server" Text="Department" CommandArgument="deptCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lbldeptCode" runat="server" Text='<%#Eval("deptCode")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Code">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkAccCode" runat="server" Text="Account Code" CommandArgument="accountCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblAccCode" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="200px"
                                                            HeaderStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBudgClss" runat="server" Text="Account Name" CommandArgument="budgetClassification"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblBudgClss" runat="server" Text='<%#Eval("budgetClassification")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Allocated">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBudgetAlloc" runat="server" Text="Allocated" CommandArgument="budget"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblBudget" runat="server" Text='<%#Eval("budget")%>'></asp:Label></label>
                                                                <asp:TextBox ID="txtEditBudget" runat="server" Visible="false" Width="70px"></asp:TextBox>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Remaining">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkRemaining" runat="server" Text="Remaining" CommandArgument="remaining"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblRem" runat="server" Text='<%#Eval("remaining")%>'></asp:Label></label>
                                                                <asp:TextBox ID="txtEditRem" runat="server" Visible="false" Width="70px"></asp:TextBox>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Fixed Cost">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkFixdCost" runat="server" Text="Fixed Cost" CommandArgument="fixedCost"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblFxdCost" runat="server" Text='<%#Eval("fixedCost")%>'></asp:Label></label>
                                                                <asp:TextBox ID="txtEditFxdCost" runat="server" Visible="false" Width="70px"></asp:TextBox>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Reason" HeaderStyle-Width="230px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkDescr" runat="server" Text="Reason" CommandArgument="description"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblDescr" runat="server" Text='<%#Eval("description")%>'></asp:Label></label>
                                                                <asp:TextBox ID="txtEditDescr" runat="server" Visible="false" Width="185px"></asp:TextBox>
                                                                <div style="float: right">
                                                                    <label id="lblMandt" runat="server" visible="false" style="float: left"><em>*</em></label>
                                                                </div>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="History">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkBdgHistory" runat="server" Text="" CommandArgument="test"
                                                                    ToolTip="Show History" OnClick="DisplayBudgetHistory" Style="background-image: url(images/icons/history_clear.png); width: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        </asp:LinkButton>
                                                                <asp:HiddenField ID="hdnRemFlag" runat="server" Value='<%#Eval("remainingFlag")%>' />
                                                                <asp:HiddenField ID="hdnCurrEditBudget" runat="server" />
                                                                <asp:HiddenField ID="hdnCurrEditRem" runat="server" />
                                                                <asp:HiddenField ID="hdnCurrEditFxdCost" runat="server" />
                                                                <asp:HiddenField ID="hdnDept" runat="server" Value='<%#Eval("deptCode")%>' />
                                                                <asp:HiddenField ID="hdnAccntCtrlFlg" runat="server" Value='<%#Eval("ctrlAccntFlag")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 250px">
                                                            <label>
                                                                No budget details to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnIndex" runat="server" />
                                                <asp:HiddenField ID="hdnDeptExt" runat="server" />
                                                   
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="dvTotals" runat="server" class="alert alert-info">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="50%">
                                                                <label>Total Allocated Amount :</label>&nbsp;&nbsp;<%=currencySymbol %>
                                                                <asp:Label ID="lblTotAllcAmnt" runat="server"></asp:Label>
                                                            </td>
                                                            <td width="50%">
                                                                <label>Total Remaining Amount :</label>&nbsp;&nbsp;<%=currencySymbol %>
                                                                <asp:Label ID="lblTotRemAmnt" runat="server"></asp:Label>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <br />
                                <asp:HiddenField ID="hdnCount" runat="server" Value="0" />
                                <asp:HiddenField ID="hdnLatestRem" runat="server" />
                                <asp:HiddenField ID="hdnChecked" runat="server" />
                                <asp:HiddenField ID="hdnCurrBudget" runat="server" />
                                <asp:HiddenField ID="hdnCurrRemBudget" runat="server" />
                                <asp:HiddenField ID="hdnCurrFixedCost" runat="server" />
                                <asp:Panel ID="pnlBudgetHist" runat="server" Style="display: none">
                                    <div class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; width: 1100px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    <span  >Budget History </span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnCloseHist" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>


                                      
                                        <section>
                                            <div class="divfieldset">
                                                <isx:CoolGridView ID="gvHist" runat="server" AutoGenerateColumns="false"
                                                    OnRowDataBound="gvHist_RowDataBound" Height="300px">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="ReqID">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkReqID" runat="server" Text="ReqID" CommandArgument="reqId"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("reqId")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Start Date">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkStartDt" runat="server" Text="Start Date" CommandArgument="startDate"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Convert.ToDateTime(Eval("startDate")).ToShortDateString()%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Line#">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkExpLineNo" runat="server" Text="Line#" CommandArgument="expLineNo"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("expLineNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Line#">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkPOLineSeq" runat="server" Text="LineSeq" CommandArgument="poLineSeq"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("poLineSeq")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="PO#">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkRefNo" runat="server" Text="PO#" CommandArgument="ourRefNo"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("ourRefNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="200px"
                                                            HeaderStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBudgClass" runat="server" Text="Account Name" CommandArgument="budgetClassification"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("budgetClassification")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account#">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkAccCode" runat="server" Text="Account#" CommandArgument="accountCode"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("accountCode")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Preferred Vendor" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkPrefVend" runat="server" Text="Preferred Vendor" CommandArgument="prefVendor"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("prefVendor")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Line Amount">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkActAmnt" runat="server" Text="Line Amount" CommandArgument="amount"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("amount")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Budget Allowed">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBudgetAllowed" runat="server" Text="Budget Allowed" CommandArgument="budget"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("budget")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Budget Rem.">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBudgetAfterPO" runat="server" Text="Budget Rem." CommandArgument="remaining"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("remaining")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Descr">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkDescr" runat="server" Text="Descr" CommandArgument="description"
                                                                    OnCommand="SortExpression_Hist" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("description")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 500px">
                                                            <label>
                                                                No history details to display for this AccountCode</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnSelAccCode" runat="server" />
                                                <div class="alert alert-info mt10 text-center" id="dvBudgHistGridRecCount" runat="server">
                                                    <table style="width: 40%">
                                                        <tr>
                                                            <td>
                                                                <label>
                                                                    No. of Transactions:&nbsp;<asp:Label ID="lblBudgHistGridRowCount" runat="server"></asp:Label>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label>
                                                                    Total Amount:&nbsp;<asp:Label ID="lblBudgHistGridTotalAmount" runat="server"></asp:Label>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkHist" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popHist" runat="server" DropShadow="false" PopupControlID="pnlBudgetHist"
                                    CancelControlID="btnCloseHist" TargetControlID="lnkHist" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlCopy" runat="server" Style="display: none">
                                    <div class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 600px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                   Copy Budget Details
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnCpoyCancel" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                     
                                        <section>
                                            <div class="divfieldset">
                                                <div class="row" style="padding:30px;">
                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center">  <div id="dvCopyMsg" runat="server">   </div> </div>
                                                    <div class="clearfix"></div>

                                                    
                                               
                                              
                                                <table style="width:100%">
                                                    <tr>
                                                        <td>
                                                            <b>
                                                                <small>
                                                                    <label class="label_setting"  style="font-weight:bold">
                                                                        From:
                                                                    </label>
                                                                </small>
                                                            </b>
                                                            <div class="divfieldset">
                                                                <asp:DropDownList ID="ddlCopyFromYear" runat="server"  class="selectpicker form-control"   data-live-search="true" >
                                                                </asp:DropDownList>
                                                                &nbsp;&nbsp;&nbsp;
                                                                    <asp:DropDownList ID="ddlCopyFromMonth" runat="server" class="selectpicker form-control"   data-live-search="true" >
                                                                    </asp:DropDownList>
                                                            </div>
                                                        </td>
                                                        <td>&nbsp;
                                                        </td>
                                                        <td>&nbsp;
                                                        </td>
                                                        <td>
                                                            <b>
                                                                <small>
                                                                    <label class="label_setting" style="font-weight:bold">
                                                                        To:
                                                                    </labe>
                                                                </small>
                                                            </b>
                                                            <div class="divfieldset">
                                                                <asp:DropDownList ID="ddlCopyToYear" runat="server"  class="selectpicker form-control"   data-live-search="true" >
                                                                </asp:DropDownList>
                                                                &nbsp;&nbsp;&nbsp;
                                                                    <asp:DropDownList ID="ddlCopyToMonth" runat="server"  class="selectpicker form-control"   data-live-search="true" >
                                                                    </asp:DropDownList>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                    
                                                <br />
                                                <table width="100%">
                                                    <tr>
                                                        <td align="right">
                                                            <asp:Button ID="btnCopySelected" runat="server" Text="Copy" CssClass="btn btn-success " OnClick="CopySelected" />
                                                        </td>
                                                    </tr>
                                                </table>
                                                      </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCopy" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCopyBudget" runat="server" DropShadow="false" PopupControlID="pnlCopy"
                                    TargetControlID="lnkCopy" CancelControlID="btnCpoyCancel" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlConfirmCopy" runat="server" Style="display: none">
                                    <div class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 50px; min-width: 600px">
                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    <span> Copy Account Codes</span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         <asp:Button ID="btnConfirmCopyYes" runat="server" Text="Ok" CssClass="btn btn-success" OnClick="ConfirmCopy" />
                                                        <asp:Button ID="btnConfirmCopyNo" runat="server" Text="Cancel" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                      
                                        <section>
                                            <div class="divfieldset" style="padding:26px">
                                                <label class="alert alert-danger">
                                                    <asp:Label ID="lblCopyAlert" runat="server"></asp:Label></label>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCopyConfirm" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCopyConfirm" runat="server" DropShadow="false" BackgroundCssClass="modalBackground2"
                                    TargetControlID="lnkCopyConfirm" CancelControlID="btnConfirmCopyNo" PopupControlID="pnlConfirmCopy">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlUpload" runat="server" Style="display: none">
                                    <div class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                               Import Budget Data
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                                        <asp:Button ID="btnCancelUpload" runat="server" Text="Cancel" CssClass="btn btn-danger"></asp:Button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

  
                                        <section>
                                            <div class="divfieldset text-center" style="padding:20px">
                                                <div id="dvUploadErr" runat="server">
                                                </div>
                                                <br />
                                                <div style="float: left">
                                                    <asp:FileUpload ID="fupdBudget" runat="server" CssClass="form-control"/>
                                                </div>
                                                <div style="float: left; padding-left: 0.5em">
                                                    <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .xls and .xlsx" data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>                                                    
                                                </div>
                                                <br />
                                                <br />
                                                <div id="dvDisplay" runat="server" class="mt10 pull-left" >
                                                    <asp:Button ID="btnDisplayData" runat="server" Text="Load Data" CssClass="btn btn-info"
                                                        OnClick="btlDisplayData_Click" />
                                                    <a href="DownloadFile.aspx?typ=7" class="btn btn-info">Download Template</a>
                                                </div>
                                                <div id="dvUpload" runat="server" class="mt10">
                                                    <asp:Button ID="btnUploadBudget" runat="server" OnClick="UploadBudget" Text="Import" CssClass="btn btn-success" />
                                                    <asp:Button ID="btnClearData" runat="server" Text="Clear Data" CssClass="btn btn-warning" OnClick="btnClearData_Click" />
                                                </div>
                                                <br />
                                                <br />
                                                <%if (gvImpBudg.Rows.Count > 0)
                                                  { %>
                                                <isx:CoolGridView ID="gvImpBudg" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                    Width="900px" Height="300px">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="FailureMessage">
                                                            <ItemTemplate>
                                                                <span style="color: Red">
                                                                    <label><%#Eval("FailureMessage")%></label></span>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="DeptCode">
                                                            <ItemTemplate>
                                                                <label><%#Eval("DEPARTMENT")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Year">
                                                            <ItemTemplate>
                                                                <label><%#Eval("YEAR")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Month">
                                                            <ItemTemplate>
                                                                <label><%#Eval("MONTH")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="200px"
                                                            HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("ACCOUNTNAME")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("ACCOUNTCODE")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Budget Allowed">
                                                            <ItemTemplate>
                                                                <label><%#Eval("BUDGET")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 500px">
                                                            <label>
                                                                Data imported successfully with out any failure.</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <%} %>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkUpload" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popUpload" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                    TargetControlID="lnkUpload" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelUpload">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlConfirmPeriodUpd" runat="server" Style="display: none">
                                    <div class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Confirm Period Update
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnConfirmChange" runat="server" Text="Ok" CssClass="btn btn-info" OnClick="ConfirmPeriodChange" />
                                                        <asp:Button ID="btnCancelChange" runat="server" Text="Cancel" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

 
                                        <section>
                                            <div class="divfieldset" style="padding:20px;">
                                                <label class="alert alert-danger" >
                                                    <asp:Label ID="lblConfirmPeriodChange" runat="server"></asp:Label></label>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkConfirmPeriodUpd" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popConfirmPeriodUpd" runat="server" DropShadow="false"
                                    BackgroundCssClass="modalBackground1" TargetControlID="lnkConfirmPeriodUpd" CancelControlID="btnConfirmCopyNo"
                                    PopupControlID="pnlConfirmPeriodUpd">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
          

        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
            <script src="latestdesign/js/bootstrap-select.min.js"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
       <%-- <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script>
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function Filter(Obj) {
                var grid = document.getElementById('gvBudget');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    //ele = grid.rows[r].cells[cellNr].innerHTML.replace(/<[^>]+>/g, "");
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                //Obj.set();
            }

            var cntFC = 0;
            var oldFCRem;
            var cntAC = 0;
            var oldACRem;

            function DoOnAjaxPostback() {

                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });


                $(function () {
                    $('[data-toggle="popover"]').popover()
                })


            //    $(function () {
            //        $("#ddlBudgClss").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCompCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlDept").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyFromYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyFromMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyToYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyToMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCategory").ufd({ log: true });
            //    });
            //    cntFC = 0;
            //    cntAC = 0;
            }

            //$(document).ready(function () {
            //    $(function () {
            //        $("#ddlBudgClss").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCompCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlDept").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyFromYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyFromMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyToYear").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCopyToMonth").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCategory").ufd({ log: true });
            //    });
            //});

            function validateBudgetAmount1(id) {
                var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
                if (reg.test(document.getElementById(id).value) || document.getElementById(id).value == '') {
                    return true;
                }
            }

            function OnChangeGridBudget(budget, remaining, fixedCost, currBudget, currFixedCost, currRemaining, index, e) {
                var evt = window.event || e;
                if (evt.keyCode != 9 || !(evt.shiftKey && evt.keyCode == 9)) {
                    if (!validateBudgetAmount1(budget)) {
                        document.getElementById('dvMsg').style.color = "Red";
                        document.getElementById('dvMsg').innerHTML = "Please enter Numeric values for Budget Allocated";
                        //document.getElementById(budget).value = '';
                        document.getElementById(budget).style.border = '1px solid Red';
                    }
                    else if (!validateBudgetAmount1(fixedCost)) {
                        document.getElementById('dvMsg').style.color = "Red";
                        document.getElementById('dvMsg').innerHTML = "Please enter Numeric values for Fixed Cost";
                        //document.getElementById(fixedCost).value = '';
                        document.getElementById(fixedCost).style.border = '1px solid Red';
                    }
                    else {
                        document.getElementById(budget).style.border = '1px solid #ccc';
                        document.getElementById(fixedCost).style.border = '1px solid #ccc';
                        document.getElementById('dvMsg').innerHTML = '';
                        var rem;
                        var currRem = parseFloat(document.getElementById(currRemaining).value == '' ? '0' : document.getElementById(currRemaining).value);
                        var fxdCst = parseFloat(document.getElementById(fixedCost).value == '' ? '0' : document.getElementById(fixedCost).value);
                        var currFxdCst = parseFloat(document.getElementById(currFixedCost).value == '' ? '0' : document.getElementById(currFixedCost).value);
                        var budg = parseFloat(document.getElementById(budget).value == '' ? '0' : document.getElementById(budget).value);
                        var currBudg = parseFloat(document.getElementById(currBudget).value == '' ? '0' : document.getElementById(currBudget).value);
                        rem = budg - currBudg - fxdCst + currFxdCst + currRem;
                        document.getElementById(remaining).value = parseFloat(rem).toFixed(2);
                    }
                }
            }

            function CheckForFile() {
                document.getElementById('dvUploadErr').style.color = "Red";
                if (document.getElementById('fupdBudget').value == 0) {
                    document.getElementById('dvUploadErr').innerHTML = "Please browse and select a file of type .xls or .xlsx";
                    return false;
                }
                showProgress();
            }

        </script>
        <!-- 
This javascript code is required if you are using a CoolGridView inside an update panel.
-->
        <script type="text/javascript">
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
            
            </div>
                 <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
                 </div>
            </div>

        
    </form>
</body>
</html>
