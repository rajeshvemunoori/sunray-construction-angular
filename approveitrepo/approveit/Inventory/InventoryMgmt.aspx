<%@ Page Language="C#" AutoEventWireup="true" CodeFile="InventoryMgmt.aspx.cs" Inherits="Inventory_InventoryMgmt" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>

 
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Inventory Adjustment</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
   <%-- <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <style>
        .lnk {
            color: White;
        }

        .tablemain td {
            padding: 5px;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            font-family: Verdana,Arial,sans-serif;
            font-size: 1em;
            border: 1px solid #aaaaaa;
        }
        
        .listItem {
            padding: 4px;
            color: #472147;
        }

        .itemHighlighted {
            padding: 3px;
            background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png);
            border: 1px solid #aaaaaa;
        }
        #gvInvItemDatajEsCoOl_mainDiv {
       margin: 0px 22px auto;
        }
        #gvInvItemDatajEsCoOl_headerDiv, #gvInvItemHistjEsCoOl_headerDiv, #gvInvTrsfrHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvInvTrsfrHistjEsCoOl_headerDiv div table tbody tr th, #gvInvItemDatajEsCoOl_headerDiv div table tbody tr th, #gvInvItemHistjEsCoOl_headerDiv div table tbody tr th {
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

        #gvInvItemData tbody tr td, #gvInvItemHist tbody tr td, #gvInvTrsfrHist tbody tr td {
               height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
}
        #gvInvItemHistjEsCoOl_mainDiv {

            margin: 0px 16px auto;
        }
        #gvInvItemDatajEsCoOl_mainDiv, #gvInvItemHistjEsCoOl_mainDiv, #gvInvTrsfrHistjEsCoOl_mainDiv {
            overflow: hidden;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvInvItemData TR TD, #gvInvItemData TR TH, #gvInvItemData TR TH div, #gvInvItemData TR TD div,
        #gvInvItemHist TR TD, #gvInvItemHist TR TH, #gvInvItemHist TR TH div, #gvInvItemHist TR TD div,
        #gvInvTrsfrHist TR TD, #gvInvTrsfrHist TR TH, #gvInvTrsfrHist TR TH div, #gvInvTrsfrHist TR TD div {
            overflow: visible;
        }

        .adjQty {
        }

        .trfrQty {
        }

        .tdlbl {
            text-align: right;
            width: 45%;
        }

        .tdfld {
            text-align: left;
            width: 55%;
        }

        .tabtflot td, .tabtflot th {
            border: 1px solid #ccc;
        }

        #gvFromLotList td, #gvFromLotList th {
            padding: 7px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <<div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px ">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px; margin-top:50px;">
                <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
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
                <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
                    <ProgressTemplate>
                        <div id="overlay">
                            <div id="modalprogress">
                                <img src="../images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <div class="main-content" style="padding-top: 0px">
                             <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">                                              
                                         <div id="dvHeader" class="page-title">  <asp:Label ID="lblInvHeaderLabel" runat="server"></asp:Label> </div>
                                      </div>

                                 <div class="clearfix"></div>
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20" style="margin-top: 10px;">  
                                     <div class="pull-right">
                                              <asp:Button ID="btnInvHist" runat="server" Text="Inventory Transaction History" CssClass="btn btn-info" OnClick="ShowTransactionHistory" />
                                            <asp:Button ID="btnInvAdjust" runat="server" Text="Inventory" CssClass="btn btn-info" OnClick="ShowInventory" />
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                     </div>
                                 </div>


 
                                    <div id="dvInvAdjustment" runat="server" class=" mt10 mb20">
                                        <div id="dvMainMag" runat="server"  class="mb20" style="font-weight: bold;">
                                        </div>
                                     <div class="clearfix"></div>
                                  <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Location: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                  <asp:TextBox ID="txtLocations" runat="server" AutoPostBack="true" OnTextChanged="txtLocations_TextChanged" CssClass="form-control" placeholder="Enter location.."></asp:TextBox>
                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLocations"
                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                        ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                        CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                    </cc1:AutoCompleteExtender>                                                                  
                                                                 </div>     
                                         </div>


                                  <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Reason: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                 <asp:DropDownList ID="ddlReason" runat="server" DataTextField="Description" DataValueField="CodeValue1"
                                                        AutoPostBack="true" OnSelectedIndexChanged="ddlReason_SelectedIndexChanged" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                    </asp:DropDownList>                                                                 
                                                                 </div>     
                                         </div>

                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green btn btn-success" OnClick="SaveAdjustedInventory" />
                                        </div>

                                
                                        <!--Removed class="table-responsive" from below div in order to display the grid -->
                                        <div id="dvNormalAdj" runat="server" >
                                            <div  style="width:100%;overflow-x:auto;"   >
                                            <isx:CoolGridView ID="gvInvItemData" runat="server" AutoGenerateColumns="false" Width="800px" Height="400px"
                                                ShowHeader="true" OnRowDataBound="gvInvItemData_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderStyle-Width="50px" ItemStyle-Width="50px">
                                                        <ItemTemplate>
                                                            <img id="imgItemRowSelect" alt="" style="cursor: pointer" src="../images/downarrow.jpg" />
                                                            <asp:Panel ID="pnlItems" runat="server" Style="display: none;">
                                                                <asp:GridView ID="gvInvLots" runat="server" AutoGenerateColumns="false" OnRowDataBound="gvInvLots_RowDataBound" Width="700px" GridLines="Both">
                                                                    <Columns>
                                                                        <asp:TemplateField HeaderText="Lot/Bin#" HeaderStyle-Width="100px" ControlStyle-Width="100px">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblLotNum" runat="server" Text='<%#Eval("lotNum") %>'></asp:Label>
                                                                                    </label>
                                                                                </small>
                                                                                <asp:HiddenField ID="hdnItem" runat="server" Value='<%#Eval("expItem") %>'></asp:HiddenField>
                                                                                <asp:HiddenField ID="hdnSubLot" runat="server" Value='<%#Eval("subLot") %>'></asp:HiddenField>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Job Code" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblJobcode" runat="server" Text='<%#Eval("jobCode") %>'></asp:Label>
                                                                                    </label>
                                                                                </small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Actual Quantity">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblJobQtyLot" runat="server" Text='<%#Eval("qtyLot") %>'></asp:Label>
                                                                                    </label>
                                                                                </small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Available Quantity">
                                                                            <ItemTemplate>
                                                                                <small>
                                                                                    <label>
                                                                                        <asp:Label ID="lblAvailQty" runat="server" Text='<%#Eval("availableToUse") %>'></asp:Label>
                                                                                    </label>
                                                                                </small>
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="Adjust Quantity">
                                                                            <ItemTemplate>
                                                                                <asp:TextBox ID="txtAdjQty" runat="server" CssClass="adjQty" onkeyup="javascript: return validateQty(this);"></asp:TextBox>
                                                                                <asp:HiddenField ID="hdnQty" runat="server" />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <HeaderStyle BackColor="#3B6AA0" Font-Bold="false" ForeColor="White" Height="30px" Font-Size="1em"></HeaderStyle>
                                                                    <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                    <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                    <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 150px">
                                                                            <label>No data found.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </asp:GridView>
                                                            </asp:Panel>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Item" HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                        <ItemTemplate>
                                                            <small>
                                                                <label>
                                                                    <asp:Label ID="lblItem" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label></small>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Total Quantity" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                        <ItemTemplate>
                                                            <small>
                                                                <label>
                                                                    <asp:Label ID="lblQtyStock" runat="server" Text='<%#Eval("qtyStock") %>'></asp:Label></label></small>
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
                                        <div id="dvTrasfrQty" runat="server">
                                            <div class="clearfix"></div>
                                            
                                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Item: </label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                   <asp:TextBox ID="txtItemTrsfr" runat="server" AutoPostBack="true" CssClass="form-control" OnTextChanged="txtItemTrsfr_TextChanged" Width="270px" placeholder="Enter item.."></asp:TextBox>
                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender3" runat="server" TargetControlID="txtItemTrsfr"
                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                            ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                            CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                        </cc1:AutoCompleteExtender>                                                                  
                                                                 </div>     
                                             </div>
                                            <div class="clearfix"></div>
                                                                                              
                                                
                                                        <div class="message info">
                                                            
                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt10 mb20" style="margin-top:10px;">
                                                                <div id="dvTrsfrError" runat="server" style="font-weight: bold"></div>
                                                              </div>
                                                                        
                                                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                        <div id="dvFromLoc"> 
                                                                            
                                                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   mb10">
                                                                                    <h3 style="font-weight:bold"><b>From:</b></h3>
                                                                                </div>
                                                                                <div class="clearfix"></div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Location: </label>
                                                                                    </div>
                                                                                <div class="col-sm-7"> 
                                                                                    <asp:DropDownList ID="ddlTrsfrFromLoc" runat="server" CssClass="form-control" OnSelectedIndexChanged="ddlTrsfrFromLoc_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>                                                                  
                                                                                    </div>     
                                                                             </div>
                                                                                 <div class="clearfix"></div>
                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                          <div id="dvLotList" runat="server">
                                                                                        </div>
                                                                                        <asp:GridView ID="gvFromLotList" runat="server" GridLines="Both" AutoGenerateColumns="false" OnRowDataBound="gvFromLotList_RowDataBound">
                                                                                            <Columns>
                                                                                                <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                                    <ItemTemplate>
                                                                                                        <label>
                                                                                                            <asp:Label ID="lblLotNum" runat="server" Text='<%#Eval("LotNum") %>'></asp:Label></label>
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                                <asp:TemplateField HeaderText="Job">
                                                                                                    <ItemTemplate>
                                                                                                        <label>
                                                                                                            <asp:Label ID="lblLotJob" runat="server" Text='<%#Eval("jobCode") %>'></asp:Label></label>
                                                                                                        <asp:HiddenField ID="hdnJobStatus" runat="server" Value='<%#Eval("status") %>' />
                                                                                                        <asp:HiddenField ID="hdnJobStsVal" runat="server" />
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                                <asp:TemplateField HeaderText="Qty. Avail.">
                                                                                                    <ItemTemplate>
                                                                                                        <label>
                                                                                                            <asp:Label ID="lblQtyAvailLot" runat="server" Text='<%#Eval("QtyLot") %>'></asp:Label></label>
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                                <asp:TemplateField HeaderText="Select Qty.">
                                                                                                    <ItemTemplate>
                                                                                                        <asp:TextBox ID="txtLotSelQty" runat="server" CssClass="trfrQty"></asp:TextBox>
                                                                                                    </ItemTemplate>
                                                                                                </asp:TemplateField>
                                                                                            </Columns>
                                                                                        </asp:GridView>
                                                                                  
                                                                                    </div>


                                                                                <div class="clearfix"></div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Total quantity to transfer: </label>
                                                                                    </div>
                                                                                <div class="col-sm-7">   
                                                                                     <asp:Label ID="lblTotalItemQtyTrsfr" runat="server"></asp:Label>                                                              
                                                                                    </div>     
                                                                             </div>

                                                                                <div class="clearfix"></div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">   Total quantity available:</label>
                                                                                    </div>
                                                                                <div class="col-sm-7">   
                                                                                     <asp:Label ID="lblTotalQtyAvailFrom" runat="server"></asp:Label>                                                                
                                                                                    </div>     
                                                                             </div>

                                                                                <div class="clearfix"></div>

                                                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                     <div id="dvQtyAftrTrsfrFrom" runat="server">
                                                                                <div class="col-sm-6">
                                                                            <label class="form-label label_setting" for="orgcode">Total quantity after transfer: </label>
                                                                                    </div>
                                                                                <div class="col-sm-6">  
                                                                                     <asp:Label ID="lblTotalQtyAftrTrsfrFrom" runat="server"></asp:Label>                                                                 
                                                                                    </div>     
                                                                             </div>
                                                                                    </div>
                                         
                                                                               
                                                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                                                                     
                                                                                        <asp:Button ID="btnTransferItem" runat="server" Text="Transfer" CssClass="pull-right btn btn-success" OnClick="InitiateItemTransfer" />
                                                                              </div>
                                                                             
                                                                        </div>
                                                                            </div>
                                                                   
                                                                          
                                                                         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                        <div id="dvToLoc">
                                                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb10">
                                                                                <h3 style="font-weight:bold;">To:</h3>
                                                                            </div>
                                                                             <div class="clearfix"></div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-128 col-lg-12">
                                                                                                 <div class="col-sm-5">
                                                                                                <label class="form-label label_setting" for="orgcode">Location:  </label>
                                                                                                     </div>
                                                                                                 <div class="col-sm-7">   
                                                                                                     <asp:DropDownList ID="ddlTrsfrToLoc" CssClass="form-control" runat="server"></asp:DropDownList>                                                                 
                                                                                                     </div>     
                                                                             </div>
                                                                             <div class="clearfix"></div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                                 <div class="col-sm-5">
                                                                                                <label class="form-label label_setting" for="orgcode">Lot:  </label>
                                                                                                     </div>
                                                                                                 <div class="col-sm-7">     
                                                                                                                <asp:TextBox ID="txtTrsfrToLot" CssClass="form-control" runat="server" onchange="ShowLotQty(this);"></asp:TextBox>
                                                                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender4" runat="server" TargetControlID="txtTrsfrToLot"
                                                                                            MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100"
                                                                                            ServiceMethod="GetLotsByLocation" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                            CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                                        </cc1:AutoCompleteExtender>                                                   
                                                                                                     </div>     
                                                                             </div>
                                                                             <div class="clearfix"></div>

                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Total quantity available:  </label>
                                                                                    </div>
                                                                                <div class="col-sm-7"> 
                                                                                     <asp:Label ID="lblTotalQtyAvailTo" runat="server"></asp:Label></i>
                                                                                                <asp:HiddenField ID="hdnTrsfrToJob" runat="server" />                                                                  
                                                                                    </div>     
                                                                         </div> 
                                                                        </div>
                                                                          </div>
                                                            
                                                        </div>
                                                    
                                            
                                            
                                        </div>
                                    </div>
                                    <div id="dvInvHist" runat="server">
                                        <div class=" ">

                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Location: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                 <asp:TextBox ID="txtLocHist" runat="server" CssClass="form-control" AutoPostBack="true" OnTextChanged="txtLocHist_TextChanged" Width="270px" placeholder="Enter location.."></asp:TextBox>
                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtLocHist"
                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                        ServiceMethod="GetLocations" UseContextKey="True" CompletionListCssClass="completionList"
                                                        CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                    </cc1:AutoCompleteExtender>                                                                  
                                                                 </div>     
                                         </div>
                                            <div class="clearfix"></div>
                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="margin-top:10px;">
                                                <div class="form-group   has-feedback" >       
                                              <asp:TextBox ID="txtFilterItemHist" CssClass="filterdata form-control" runat="server"   placeholder="Type in item name to search.."></asp:TextBox>
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                             
                                             </div>
                                            </div>
                                        <table>
                                            <tr>
                                                <td>
                                                    <small>
                                                        <label></label>
                                                    </small>
                                                    <br />
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                   
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <isx:CoolGridView ID="gvInvItemHist" runat="server" AutoGenerateColumns="false" Height="300px" Width="950px"
                                                        OnRowDataBound="gvInvItemHist_RowDataBound" ShowHeader="true">
                                                        <Columns>
                                                            <asp:TemplateField ItemStyle-Width="50px" HeaderStyle-Width="50px">
                                                                <ItemTemplate>
                                                                    <img id="imgItemRowSelect" alt="" style="cursor: pointer" src="../images/downarrow.jpg" />
                                                                    <asp:Panel ID="pnlItems" runat="server" Style="display: none;">
                                                                        <asp:GridView ID="gvInvItemLotHist" runat="server" Width="850px" AutoGenerateColumns="false" ShowHeader="true" OnRowDataBound="gvInvItemLotHist_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderText="Lot/Bin#">
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("LotNum") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="TransRefNo./Job Code">
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("transRefno") %>/<%#Eval("jobCode") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Trans. Qty">
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("qtyTrans") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Date Modified">
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblModifiedOn" runat="server" Text='<%# Convert.ToDateTime(Eval("addedOn")) %>'></asp:Label></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Modified By">
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("userName") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField HeaderText="Reason">
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("description") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <FooterStyle BackColor="#CCCCCC" ForeColor="Black"></FooterStyle>
                                                                            <HeaderStyle BackColor="#3B6AA0" Font-Bold="false" ForeColor="White" Height="30px" Font-Size="1em"></HeaderStyle>
                                                                            <PagerStyle HorizontalAlign="Center" BackColor="#999999" ForeColor="Black"></PagerStyle>
                                                                            <RowStyle BackColor="White" ForeColor="Black"></RowStyle>
                                                                            <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White"></SelectedRowStyle>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 150px">
                                                                                    <label>No data found.</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </asp:GridView>
                                                                    </asp:Panel>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Item" HeaderStyle-Width="300px" ControlStyle-Width="300px">
                                                                <ItemTemplate>
                                                                    <label>
                                                                        <asp:Label ID="lblItem" runat="server" Text='<%#Eval("expItem") %>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Total Quantity" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <ItemTemplate>
                                                                    <small>
                                                                        <label>
                                                                            <asp:Label ID="lblQtyStock" runat="server" Text='<%#Eval("qtyStock") %>'></asp:Label></label></small>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 150px">
                                                                <label>No data found.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="dvInvTransferHist" runat="server">
                                        
                                            
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Item: </label>
                                                                 </div>
                                                             <div class="col-sm-7"> 
                                                                   <asp:TextBox ID="txtItemTrsfrHist" CssClass="form-control" runat="server" AutoPostBack="true" OnTextChanged="txtItemTrsfrHist_TextChanged" Width="270px" placeholder="Enter item.."></asp:TextBox>
                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender5" runat="server" TargetControlID="txtItemTrsfrHist"
                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100"
                                                        ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                        CompletionListItemCssClass="listItem" CompletionListHighlightedItemCssClass="itemHighlighted">
                                                    </cc1:AutoCompleteExtender>                                                                  
                                                                 </div>     
                                                 </div>

                                            <div class="clearfix"></div>
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <asp:TextBox ID="txtFilterTrsfrFromLoc" runat="server" CssClass="filterdata form-control" Width="300px" placeholder="Type in location name to search.."></asp:TextBox>
                                            </div>

                                        <table class="tablemain"> 
                                            <tr>
                                                <td>
                                                    <isx:CoolGridView ID="gvInvTrsfrHist" runat="server" AutoGenerateColumns="false" Width="800px" Height="300px" OnRowDataBound="gvInvTrsfrHist_RowDataBound" ShowHeader="true">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="From Location">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("locName") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="From Lot/Bin#">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("lotNum") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Job">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("jobCode") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Qty Trsfr">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("qtyTrans") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="To Location">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("locCode") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="To Lot/Bin#">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("dlotNum") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Job">
                                                                <ItemTemplate>
                                                                    <label><%#Eval("djobCode") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 170px">
                                                                <label>
                                                                    No data to display.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </td>
                                            </tr>
                                        </table>
                                           
                                    </div>
                                </div>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
            <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="../latestdesign/js/modernizr.js"></script>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
       <script src="../js/html5shiv.js" type="text/javascript"></script>
     <script src="../latestdesign/js/bootstrap-select.min.js"></script>
   <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
    <%-- <script src="../js/DateSetup.js" type="text/javascript"></script>--%>
    
  <%--  <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>

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
            //    $("#ddlReason").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlTrsfrFromLoc").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlTrsfrToLoc").ufd({ log: true });
            //});
        }

        $(document).ready(function () {
            //$(function () {
            //    $("#ddlReason").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlTrsfrFromLoc").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlTrsfrToLoc").ufd({ log: true });
            //});
        });

        $("[src*=down]").live("click", function () {
            $(this).closest("tr").after("<tr><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>")
            $(this).attr("src", "../images/uparrow.jpg");
        });
        $("[src*=up]").live("click", function () {
            $(this).attr("src", "../images/downarrow.jpg");
            $(this).closest("tr").next().remove();
        });

        //Validate qty adjustment fields upon save
        function validateQty(id) {
            var val = id.value;
            //var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            var reg = /^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/;
            if (reg.test(val) || val == '') {
                $11('dvMainMag').innerHTML = "";
                return true;
            }
            else {
                $11('dvMainMag').innerHTML = "Please provide valid input for quantity.";
                $11('dvMainMag').style.color = "Red";
            }
        }

        function manipulateAdjustQty(adjQty, hdnQtyId, actQty) {
            $11(hdnQtyId).value = parseFloat(actQty) + parseFloat(adjQty);
            alert(adjQty);
            alert(actQty);
            alert($11(hdnQtyId).value);
        }

        function validateAdjFieldsOnSave() {
            var grid = $11('gvInvItemData');
            var rowItems = grid.getElementsByClassName("adjQty");
            var cnt = 0;
            for (var i = 0; i < grid.rows.length; i++) {
                if (rowItems[i].value != 0)
                    cnt++;
            }
            if (cnt == 0) {
                $11('dvMainMag').innerHTML = "No changes to update.";
                $11('dvMainMag').style.color = "Red";
                return false;
            }
            else {
                $11('dvMainMag').innerHTML = "";
                return true;
            }
        }
        //Validate qty adjustment fields upon save

        //Filter history grid with text provided in search box
        function Filter(Obj) {
            var grid = document.getElementById('gvInvItemHist');
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }
        //Filter history grid with text provided in search box

        //Load Lots/Bins with selected location
        function loadLots(loc, itemCode) {
            $11('txtTrsfrToLot').value = '';
            var location = $11(loc).value;
            var url = '../Invoice.ashx?func=13&loc=' + location + '&item=' + itemCode;
            LoadLotsByLoc(url, '');
            $11('txtTrsfrToLot').focus();
        }
        //Load Lots/Bins with selected location

        //validate lot quantities in inventory transfer
        function validateBudgetAmount1(id) {
            var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
            if (reg.test(id.value) || id.value == '')
                return true;
        }

        function validatelotQtyTrsfr(lotQty, jobSts, jobStsVal) {
            var calculate = true;
            if ($11(jobStsVal).value == '1') {
                calculate = true;
            }
            else if ($11(jobStsVal).value == '0') {
                var conf = confirm("Job is closed! Are you sure you want to continue?");
                if (conf) {
                    $11(jobStsVal).value = '1';
                    calculate = true;
                }
                else {
                    calculate = false;
                }
            }

            if (calculate) {
                var allFldVal = 0;
                var errCnt = 0;
                var totQtyTrsfr = 0;
                var inputList = $11('gvFromLotList').getElementsByClassName("trfrQty");
                for (var i = 0; i < inputList.length; i++) {
                    var inputVal = (inputList[i].value == '' || inputList[i].value == ' ') ? "0" : inputList[i].value;
                    if (!validateBudgetAmount1(inputList[i]) || parseFloat(inputVal) > parseFloat(lotQty)) {
                        errCnt++;
                        inputList[i].style.border = "1px solid Red";
                    }
                    else {
                        inputList[i].style.border = "1px solid #ccc";
                        totQtyTrsfr += parseFloat(inputVal);
                        if (inputList[i].value != 0) {
                            allFldVal++;
                        }
                    }
                }

                if (allFldVal == 0 && lotQty == 0) {
                    $11('dvTrsfrError').innerHTML = "Please select valid quantity from atleast one lot.";
                    $11('dvTrsfrError').style.color = "Red";
                    return false;
                }
                else {
                    if (lotQty > 0) {
                        $11('lblTotalItemQtyTrsfr').innerHTML = totQtyTrsfr;
                        $11('lblTotalQtyAftrTrsfrFrom').innerHTML = parseFloat($11('lblTotalQtyAvailFrom').innerHTML) - parseFloat(totQtyTrsfr);
                    }

                    if (errCnt > 0) {
                        $11('dvTrsfrError').innerHTML = "Please enter valid numeric values for quantity not more than lot quantity.";
                        $11('dvTrsfrError').style.color = "Red";
                        return false;
                    }
                    else {
                        $11('dvTrsfrError').innerHTML = "";
                        return true;
                    }
                }
            }
            else
                return true;
        }
        //validate lot quantities in inventory transfer

        //show destination lot quantity
        function ShowLotQty(lotId) {
            var lotNum = lotId.value;
            var url = '../Invoice.ashx?func=15&lot=' + lotNum;
            ShowAvailLotQty(url, '');
        }
        //show destination lot quantity

    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
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
    </form>
</body>
</html>
