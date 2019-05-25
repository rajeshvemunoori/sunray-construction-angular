<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SyncAcc.aspx.cs" Inherits="SyncAcc" %>

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
    <title>ApproveIt - Sync Accounts, Items and Vendors</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <%--<link href="Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
   <%-- <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <style>
        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        #gvAccountsjEsCoOl_headerDiv, #gvAccountsByDeptjEsCoOl_headerDiv,
        #gvDeptUnAssignedItemsjEsCoOl_headerDiv, #gvDeptAssignedItemsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvAccountsjEsCoOl_headerDiv div table tbody tr th, #gvAccountsByDeptjEsCoOl_headerDiv div table tbody tr th,
            #gvDeptUnAssignedItemsjEsCoOl_headerDiv div table tbody tr th, #gvDeptAssignedItemsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvAccounts tbody tr td, #gvAccountsByDept tbody tr td, #gvDeptUnAssignedItems tbody tr td, #gvDeptAssignedItems tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvAccountsjEsCoOl_mainDiv, #gvAccountsByDeptjEsCoOl_mainDiv, #gvDeptUnAssignedItemsjEsCoOl_mainDiv, #gvDeptAssignedItemsjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvAccounts TR TD, #gvAccounts TR TH, #gvAccounts TR TH div, #gvAccounts TR TD div,
        #gvAccountsByDept TR TD, #gvAccountsByDept TR TH, #gvAccountsByDept TR TH div, #gvAccountsByDept TR TD div,
        #gvDeptUnAssignedItems TR TD, #gvDeptUnAssignedItems TR TH, #gvDeptUnAssignedItems TR TH div, #gvDeptUnAssignedItems TR TD div,
        #gvDeptAssignedItems TR TD, #gvDeptAssignedItems TR TH, #gvDeptAssignedItems TR TH div, #gvDeptAssignedItems TR TD div {
            overflow: visible;
        }

        .lnk {
            color: White;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 5px;
            }

            .tablemain label {
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.4em;
                color: #555555;
            }

                .tablemain label em {
                    font-weight: bold;
                    color: red;
                }

        .tablepop {
            width: 100%;
        }

        .tablepop tbody tr td label{
            font-size:14px;
        }
            .tablepop td {
                padding: 5px;
            }

        .heading_sync {
          padding:15px;
          font-size:13px;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px;margin-top:70px;">
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
                                <img src="images/Loaders/image_855859.gif" />
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
                        <div class="main-content grid_4 alpha" style=" padding-top: 0px">
                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title">Sync Data</div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <table width="100%">
                                        <tr> 
                                            <td style="text-align: right">
                                                <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="btn btn-info" />
                                                <cc1:HoverMenuExtender ID="hveAction" runat="server" TargetControlID="btnSyncWithQB"
                                                    PopupControlID="pnlAct" PopupPosition="Bottom">
                                                </cc1:HoverMenuExtender>
                                                <asp:Panel ID="pnlAct" runat="server" Style="display: none">
                                                    <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 90px; min-width: 180px;">
                                                        <div style="padding: 8px;">
                                                            <div class="divfieldset" style="background-color: white">
                                                                <table class="tablepop" id="tbSyncItems">
                                                                    <tr>
                                                                        <td style="text-align: left; padding-left: 10px;">
                                                                            <asp:CheckBox ID="chkAccounts" runat="server" TextAlign="Right" Text="   Accounts" onclick="ShowSyncButton();" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="text-align: left; padding-left: 10px;">
                                                                            <asp:CheckBox ID="chkVendors" runat="server" TextAlign="Right" Text="   Vendors" onclick="ShowSyncButton();" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="text-align: left; padding-left: 10px;">
                                                                            <asp:CheckBox ID="chkItems" runat="server" TextAlign="Right" Text="   Items" onclick="ShowSyncButton();" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="text-align: left; padding-left: 10px;">
                                                                            <asp:CheckBox ID="chkClasses" runat="server" TextAlign="Right" Text="   Classes" onclick="ShowSyncButton();" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div id="dvSync" style="display: none">
                                                                                <asp:Button ID="btnSyncSelectedData" runat="server" Text="Sync Selected Data" CssClass="btn btn-info" OnClick="btnSyncWithQB_Click" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </asp:Panel>
                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                         
                            <section>
                                <div class="divfieldset">
                                    <div class="row"> 
                                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mb20" style="margin-top:10px;font-weight:bold;">
                                                  <div id="dvMsg" runat="server"></div>
                                                </div>
                                        <div class="clearfix"></div>


                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Organization </label>
                                                                 </div>
                                                             <div class="col-sm-7" style="padding:10px;font-weight:bold;">  
                                                                 <b>
                                                                <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>                                                                 
                                                                 </div>     
                                         </div>

                                          <div class="clearfix"></div>

                                        
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Company: </label>
                                                                 </div>
                                                             <div class="col-sm-7">        
                                                                 <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged"
                                                                DataTextField="BusinessType" CssClass="form-control selectpicker"  data-live-search="true"  DataValueField="CompCode" AutoPostBack="true" Width="200px">
                                                            </asp:DropDownList>                                                           
                                                                 </div>     
                                         </div>


                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Load: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                  <asp:DropDownList ID="ddlTypes" CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlTypes_SelectedIndexChanged"></asp:DropDownList>                                                                 
                                                                 </div>     
                                         </div>
                                        

                                      

                                        </div>

                                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="padding:0px;">
                                            <div class="alert alert-info" style="line-height:21px;">

                                                <label style="font-size:15px;font-weight:bold;">Please note :</label><br />
                                                    <small>
                                                        <label  style="font-size:12px;font-weight:bold;">This screen will help you sync Accounts, Items and Vendors and assign department.</label>
                                                        <label  style="font-size:12px;font-weight:bold;">Allocate/Unallocate would save the changes to database automatically. </small>
                                            </div>
                                        </div>
                                    
                                   
                                    <div class="clearfix"></div>


                                    <div id="dvAccounts" runat="server">

                                        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" style="padding:0px;">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                <div class="form-group   has-feedback" >       
                                              <asp:TextBox ID="txtKeywordSearchUnAssigned" CssClass="filterdata form-control" runat="server"   placeholder="Type in Account Number or Account Name to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div> 
                                           </div>
                                            <div class="clearfix"></div>
                                             <h3 class="heading_sync lable label-info mt10 mb10" style="color:#fff">Unallocated Account Numbers</h3>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                 <isx:CoolGridView ID="gvAccounts" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None" Width="100%" Height="300px"
                                                        OnRowDataBound="gvAccounts_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                <HeaderTemplate>
                                                                    <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this, 1);" />
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this, 1)" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAccountNumber" runat="server" Text="Account Number" CommandArgument="accNum"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accNum") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAccountName" runat="server" Text="Account Name" CommandArgument="accName"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accName") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkSyncDate" runat="server" Text="Date Synced" CommandArgument="synDate"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%# Convert.ToDateTime(Eval("synDate")).ToShortDateString() %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkType" runat="server" Text="Type" CommandArgument="accType"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accType") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="amount"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("amount") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 460px;font-size: 13px;text-align: center; padding: 21px;">
                                                                <label>
                                                                    No data to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>

                                         </div>

                                         <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 mt40">
                                             <label class="label_setting form-label">Department</label> <br />
                                                    <asp:DropDownList ID="ddlDept" runat="server" DataTextField="Description" DataValueField="CodeKey"   OnSelectedIndexChanged="ddlDept_SelectedIndexChanged" AutoPostBack="true" CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    </asp:DropDownList>
                                                    <asp:HiddenField ID="hdnAlloc" runat="server" />
                                                    <div id="dvAlloc" runat="server">
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnAllocate" runat="server" Text="Allocate >>" CssClass="button button-blue" Width="120px" OnClick="btnAllocate_Click" />
                                                    </div>
                                                    <div id="dvUnAlloc" runat="server">
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnUnAllocate" runat="server" Text="<< Unallocate" CssClass="button button-blue" Width="120px" OnClick="btnUnAllocate_Click" />
                                                    </div>
                                             </div>

                                              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" style="padding:0px;">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                <div class="form-group   has-feedback" >       
                                               <asp:TextBox ID="txtKeywordSearchAssigned" CssClass="filterdata form-control" runat="server"     placeholder="Type in Account Number or Account Name to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div> 
                                           </div>
                                                  <div class="clearfix"></div>
                                                   <h3 class="heading_sync lable label-info mb10 mt10" style="color:#fff">Allocated Account Numbers</h3>
                                                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                      <isx:CoolGridView ID="gvAccountsByDept" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None" Width="100%" Height="300px" OnRowDataBound="gvAccountsByDept_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                <HeaderTemplate>
                                                                    <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this, 2);" />
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this, 2)" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAccountNumber" runat="server" Text="Account Number" CommandArgument="accNum"
                                                                        OnCommand="SortExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accNum") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAccountName" runat="server" Text="Account Name" CommandArgument="accName"
                                                                        OnCommand="SortExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accName") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkDepartment" runat="server" Text="Department" CommandArgument="description"
                                                                        OnCommand="SortExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("description") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAmount" runat="server" Text="Amount" CommandArgument="amount"
                                                                        OnCommand="SortExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("amount") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkType" runat="server" Text="Type" CommandArgument="accType"
                                                                        OnCommand="SortExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("accType") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                           <div style="width: 460px;font-size: 13px;text-align: center; padding: 21px;">
                                                                <label>
                                                                    No data to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                 </div>

                                         </div>
                                          
                                    </div>

                                    <div id="dvItems" runat="server">


                                         <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" style="padding:0px;">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                <div class="form-group   has-feedback">       
                                               <asp:TextBox ID="txtItemKeywordSearchUnAssigned" CssClass="filterdata form-control" runat="server"     placeholder="Type in Item Code, Desctiption or Classification to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>                                             
                                           </div>
                                            <div class="clearfix"></div>
                                             <h3 class="heading_sync lable label-info mt10 mb10 " style="color:#fff;">Unallocated Items</h3>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                  <isx:CoolGridView ID="gvDeptUnAssignedItems" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None" Width="100%" Height="300px"
                                                        OnRowDataBound="gvDeptUnAssignedItems_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                <HeaderTemplate>
                                                                    <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this, 3);" />
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this, 3)" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkItemCode" runat="server" Text="Item Code" CommandArgument="itemCode"
                                                                        OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("itemCode") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkItemDescr" runat="server" Text="Description" CommandArgument="itemDesc"
                                                                        OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("itemDesc") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkClassification" runat="server" Text="Classification" CommandArgument="classification"
                                                                        OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("classification") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkSyncDate" runat="server" Text="Date Synced" CommandArgument="syncDate"
                                                                        OnCommand="SortItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("syncDate") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                           <div style="width: 460px;font-size: 13px;text-align: center; padding: 21px;">
                                                                <label>
                                                                    No data to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>

                                         </div>

                                         <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 mt40">
                                             <label class="label_setting form-label">Department</label> <br />
                                                    <asp:DropDownList ID="ddlItemDept" runat="server" DataTextField="Description"   CssClass="selectpicker form-control" data-show-subtext="true" data-live-search="true"  DataValueField="CodeKey" Width="120px" OnSelectedIndexChanged="ddlItemDept_SelectedIndexChanged" AutoPostBack="true">
                                                    </asp:DropDownList>
                                                    <div id="dvITemsAlloc" runat="server">
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnDeptITemAllocate" runat="server" Text="Allocate >>" CssClass="button button-blue" Width="120px" OnClick="btnDeptITemAllocate_Click" />
                                                    </div>
                                                    <div id="dvItemsUnAlloc" runat="server">
                                                        <br />
                                                        <br />
                                                        <asp:Button ID="btnDeptItemUnAllocate" runat="server" Text="<< Unallocate" CssClass="button button-blue" Width="120px" OnClick="btnDeptItemUnAllocate_Click" />
                                                    </div>
                                             </div>

                                              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" style="padding:0px;">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                <div class="form-group   has-feedback">       
                                              <asp:TextBox ID="txtItemKeywordSearchAssigned" CssClass="filterdata form-control" runat="server"   placeholder="Type in Item Code, Desctiption or Classification to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>                                               
                                           </div>
                                                  <div class="clearfix"></div>
                                                 <h3 class="heading_sync lable label-info mb10 mt10" style="color:#fff">Allocated Items</h3>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px;">
                                                        <isx:CoolGridView ID="gvDeptAssignedItems" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None" Width="100%" Height="300px" OnRowDataBound="gvDeptAssignedItems_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                                <HeaderTemplate>
                                                                    <asp:CheckBox ID="chkHeader" runat="server" onclick="checkAll(this, 4);" />
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:CheckBox ID="chk" runat="server" onclick="Check_Click(this, 4)" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkItemCode" runat="server" Text="Item Code" CommandArgument="itemCode"
                                                                        OnCommand="SortItemExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("itemCode") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkDescription" runat="server" Text="Description" CommandArgument="itemDesc"
                                                                        OnCommand="SortItemExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("itemDesc") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkClassification" runat="server" Text="Classification" CommandArgument="classification"
                                                                        OnCommand="SortItemExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("classification") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkDepartment" runat="server" Text="Department" CommandArgument="deptCode"
                                                                        OnCommand="SortItemExpressionDeptAssnd" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("deptCode") %>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 460px;font-size: 13px;text-align: center; padding: 21px;">
                                                                <label>
                                                                    No data to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                        </div>

                                         </div>
                                        
                                    </div>
                                     </div>
                                </div>





                                <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                    <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                               Alert  </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                        <asp:Button ID="btnYes" runat="server" OnClick="SyncConfirm" Text="Yes" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
 
                                        <section>
                                            <div style="padding: 5px;">
                                                <div class="divfieldset " style="padding:20px;">
                                                    <label class="alert alert-danger">
                                                    <asp:Label ID="lblAlert" runat="server"></asp:Label>
                                                  </label>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                    TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                          <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
                        </label>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <script src="js/DateSetup.js" type="text/javascript"></script>
        <%--<script src="js/global.js"></script>--%>
        <script src="js/Ajax.js" type="text/javascript"></script>
            <script src="latestdesign/js/bootstrap-select.min.js"></script>
      <%--  <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script>

            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function DoOnAjaxPostback() {
                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });
                //$(function () {
                //    $("#ddlCompCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlTypes").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlDept").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlItemDept").ufd({ log: true });
                //});
                ShowSyncButton();
            }

            $(document).ready(function () {
                //$(function () {
                //    $("#ddlCompCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlTypes").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlDept").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlItemDept").ufd({ log: true });
                //});
            });

            /*When checkbox in the row is checked*/
            function Check_Click(objRef, type) {
                //Get the Row based on checkbox
                var row = objRef.parentNode.parentNode.parentNode.parentNode.parentNode;
                //Get the reference of GridView
                var GridView = row.parentNode;
                //Get all input elements in Gridview
                var inputList = GridView.getElementsByTagName("input");
                var checkCnt = 0;
                var unCheckCnt = 0;
                for (var i = 0; i < inputList.length; i++) {
                    //The First element is the Header Checkbox
                    var headerCheckBox = inputList[0];

                    //Based on all or none checkboxes
                    //are checked check/uncheck Header Checkbox
                    var checked = true;
                    if (inputList[i].type == "checkbox" && inputList[i] != headerCheckBox) {
                        if (!inputList[i].checked) {
                            checked = false;
                            unCheckCnt++;//break;
                        }
                        else
                            checkCnt++;
                    }
                }
                if (checkCnt > 0) {
                    if (type == 1)
                        showAllocButtons("block");
                    else if (type == 2)
                        showUnAllocButtons("block");
                    else if (type == 3)
                        showItemsAllocButtons("block");
                    else if (type == 4)
                        showItemsUnAllocButtons("block");
                }
                else {
                    if (type == 1)
                        showAllocButtons("none");
                    else if (type == 2)
                        showUnAllocButtons("none");
                    else if (type == 3)
                        showItemsAllocButtons("none");
                    else if (type == 4)
                        showItemsUnAllocButtons("none");
                }
                if (unCheckCnt > 0)
                    headerCheckBox.checked = false;
                else
                    headerCheckBox.checked = true;
            }
            /*When checkbox in the row is checked*/

            /*When checkbox in the header row is checked*/
            function checkAll(objRef, type) {
                var GridView = objRef.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                var inputList = GridView.getElementsByTagName("input");
                var cnt = 0;
                for (var i = 0; i < inputList.length; i++) {
                    //Get the Cell To find out ColumnIndex
                    var row = inputList[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                    if (inputList[i].type == "checkbox" && objRef != inputList[i]) {
                        if (objRef.checked) {
                            //If the header checkbox is checked
                            //check all checkboxes
                            if (!inputList[i].disabled) {
                                inputList[i].checked = true;
                                cnt++
                            };
                        }
                        else {
                            //If the header checkbox is checked
                            //uncheck all checkboxes
                            inputList[i].checked = false;
                        }
                    }
                }
                if (cnt > 0) {
                    if (type == 1)
                        showAllocButtons("block");
                    else if (type == 2)
                        showUnAllocButtons("block");
                    else if (type == 3)
                        showItemsAllocButtons("block");
                    else if (type == 4)
                        showItemsUnAllocButtons("block");
                }
                else {
                    if (type == 1)
                        showAllocButtons("none");
                    else if (type == 2)
                        showUnAllocButtons("none");
                    else if (type == 3)
                        showItemsAllocButtons("none");
                    else if (type == 4)
                        showItemsUnAllocButtons("none");
                }
            }
            /*When checkbox in the header row is checked*/

            /*Show/Hide buttons upon checkbox check*/
            function showAllocButtons(visibleParam) {
                $11('dvAlloc').style.display = visibleParam;
                $11('hdnAlloc').value = visibleParam;
            }

            function showUnAllocButtons(visibleParam) {
                $11('dvUnAlloc').style.display = visibleParam;
            }

            function showItemsAllocButtons(visibleParam) {
                $11('dvITemsAlloc').style.display = visibleParam;
                $11('hdnAlloc').value = visibleParam;
            }

            function showItemsUnAllocButtons(visibleParam) {
                $11('dvItemsUnAlloc').style.display = visibleParam;
            }
            /*Show/Hide buttons upon checkbox check*/

            /*Validate checkboxes upon allocate*/
            function validateAccCheckBoxes(type) {
                if (type == 1) {
                    var grid = $11('<%=gvAccounts.ClientID%>');
                    var inputs = grid.getElementsByTagName("input");
                    var cnt = 0;
                    for (var i = 0; i < inputs.length; i++) {
                        if (inputs[i].type == "checkbox") {
                            if (inputs[i].checked == true)
                                cnt++;
                        }
                    }
                    if (cnt == 0) {
                        $11('dvMsg').style["color"] = "Red";
                        $11('dvMsg').innerHTML = "Please select atlease one account.";
                        return false;
                    }
                    else
                        return true;
                }
            }
            /*Validate checkboxes upon allocate*/

            /*Filter option in asssigned and unassigned gridviews*/
            function FilterUnAssngd(Obj, type) {
                var grid;
                if (type == 1)
                    grid = document.getElementById('gvAccounts');
                else if (type == 2)
                    grid = document.getElementById('gvDeptUnAssignedItems');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.setFocus();
            }

            function FilterAssngd(Obj, type) {
                var grid;
                if (type == 1)
                    grid = document.getElementById('gvAccountsByDept');
                else if (type == 2)
                    grid = document.getElementById('gvDeptAssignedItems');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.setFocus();
            }
            /*Filter option in asssigned and unassigned gridviews*/

            function ShowSyncButton() {
                var cnt = 0;
                var inputList = document.getElementById('tbSyncItems').getElementsByTagName("input");
                for (var i = 0; i < inputList.length; i++) {
                    if (inputList[i].type == "checkbox")
                        if (inputList[i].checked)
                            cnt++;
                }
                if (cnt > 0)
                    $11('dvSync').style.display = "block";
                else
                    $11('dvSync').style.display = "none";
            }

        </script>
    </form>
</body>
</html>
