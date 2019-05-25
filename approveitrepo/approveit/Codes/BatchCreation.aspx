<%@ Page Language="C#" AutoEventWireup="true" CodeFile="BatchCreation.aspx.cs" Inherits="Codes_BatchCreation" %>

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
	<meta name="viewport" content="width=device-width, initial-scale=1">    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Batch Creation</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <!-- CSS reset -->
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
        <link href="../latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        div.dropdown-menu.open{
  max-height: 314px !important;
  overflow: hidden;
}
ul.dropdown-menu.inner{
  max-height: 260px !important;
  overflow-y: auto;
}

        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
        }

        .modalBackground2 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        #dvByDates table tr td  label {
        
        font-size:15px;
        }


        .table_back,  .table_back small label { height: 30px;
    line-height: 20px;
    color: white;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 13px !important;
    font-weight: normal;
    
    padding: 0px 5px;
    background:#3b6aa0;
            }
        .lnk {
            color: #0D4F8B;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .actionLnk {
            color: #0D4F8B;
            font-size: 1.25em;
        }

        #gvBatchReqdetailsjEsCoOl_headerDiv, #gvBatchDetailsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvBatchReqdetailsjEsCoOl_headerDiv div table tbody tr th, #gvBatchDetailsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
                vertical-align:middle
            }

        #gvBatchReqdetails tbody tr td, #gvBatchDetails tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }

        #gvBatchReqdetailsjEsCoOl_mainDiv, #gvBatchDetailsjEsCoOl_mainDiv {
            width: 1180px;
            height: 200px;
            overflow: hidden;
        }

        #gvBatchReqdetails TR TD, #gvBatchReqdetails TR TH, #gvBatchReqdetails TR TH div, #gvBatchReqdetails TR TD div,
        #gvBatchDetails TR TD, #gvBatchDetails TR TH, #gvBatchDetails TR TH div, #gvBatchDetails TR TD div {
            overflow: visible;
        }

        .tablemain td {
            padding: 5px;
        }

        #gvBatchReqdetailsjEsCoOl_mainDiv {
            width: 800px;
    height: 250px;
    overflow: hidden;
    border-color: Gray;
    border-width: 1px;
    border-style: Solid;
    margin: 0px auto;
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
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <!-- the tabs -->
            <section class="grid_7" style="padding-top: 0px;margin-top:70px;">
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
                <div class="clear">
                    <br />
                </div>
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                        <asp:PostBackTrigger ControlID="btnExportBills" />
                        <%--<asp:PostBackTrigger ControlID="btnExport" />--%>
                        <%--<asp:PostBackTrigger ControlID="btnConfExport" />--%>
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <div class="main-content grid_4 alpha" style="padding-top: 0px">

                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title">Batch Details</div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                       <div class="pull-right">
                                           <asp:Button ID="btnExportBills" runat="server" Text="Export Bills" CssClass="btn btn-info" OnClick="ExportQBBills" />
                                            <%--<asp:Button ID="btnGetchecks" runat="server" Text="Get Checks" CssClass="buttonnew-blue" OnClick="GetChecksForPaidBills" />--%>
                                            <asp:Button ID="lnkAddNewBatch" OnClick="AddNewBatch" runat="server" Text="Add New Batch" CssClass="btn btn-success"></asp:Button>
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                         </div>
                                </div>
                            </div>
 
                            <section>
                                <div class="divfieldset">
                                    <div class="row">
 
                                      
                                             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bt10 mb30 text-center">
                                                <asp:Label ID="lblHelp" runat="server"></asp:Label>
                                            </div>
                                        <div class="clearfix"></div> 
                                            
                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"> Organization:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 <label style="font-weight:bold;padding-top:7px;"><asp:Label ID="lblOrgID" runat="server"></asp:Label></label>
                                                                 </div>     
                                         </div>

                                             <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">  Company Code:</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 <asp:DropDownList ID="ddlCompCode"   runat="server" CssClass="form-control selectpicker" DataTextField="BusinessType" DataValueField="CompCode"
                                                    AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged">
                                                </asp:DropDownList>                                                                   
                                                                 </div>     
                                         </div>
                                             
                                        </div>
                                    <div class="clearfix">
                                    </div>
                                    
                                   <div  style="width:100%;overflow-x:auto;"   >
                                    <isx:CoolGridView ID="gvBatchDetails" runat="server" AutoGenerateColumns="false"
                                        AllowPaging="false" Width="100%" Height="300px" OnRowDataBound="gvBatchDetails_OnRowDataBound">
                                        <Columns>
                                            <asp:TemplateField HeaderText="Batch#">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkBatchID" runat="server" Text='<%#Eval("batchNo") %>' OnClick="ShowBatchData"></asp:LinkButton>
                                                    </label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="Batch Date">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkBatchDate" runat="server" Text='<%#Convert.ToDateTime(Eval("batchDate")).ToShortDateString() %>'
                                                            OnClick="ShowBatchData"></asp:LinkButton></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="From Date">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkFromDate" runat="server" Text='<%#Convert.ToDateTime(Eval("fromDate")).ToShortDateString() %>'
                                                            OnClick="ShowBatchData"></asp:LinkButton></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="To Date">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkToDate" runat="server" Text='<%#Convert.ToDateTime(Eval("toDate")).ToShortDateString() %>'
                                                            OnClick="ShowBatchData"></asp:LinkButton></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="PO Amount">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkPOAmount" runat="server" Text='<%#Eval("totalPoAmt") %>' OnClick="ShowBatchData"></asp:LinkButton>
                                                    </label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="Invoice Amount">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkInvAmount" runat="server" Text='<%#Eval("totalInvAmt") %>'
                                                            OnClick="ShowBatchData"></asp:LinkButton></label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="Record Count">
                                                <ItemTemplate>
                                                    <label>
                                                        <asp:LinkButton ID="lnkRowCount" runat="server" Text='<%#Eval("totalCount")%>' OnClick="ShowBatchData"></asp:LinkButton>
                                                    </label>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                        </Columns>
                                        <EmptyDataTemplate>
                                            <div style="width: 700px;text-align:center">
                                                <label>
                                                    No batch details to display</label>
                                            </div>
                                        </EmptyDataTemplate>
                                    </isx:CoolGridView>
                                       </div>
                                </div>

                                <asp:Panel ID="pnlShowBatch" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px;background-color: White; padding: 0 0px 10px 0px; height: 500px; max-width: 900px;overflow:auto">
                                        <div class="pop-page-title">
                                                 <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner"> 
                                                                 <asp:Label ID="lblHBatch" runat="server"></asp:Label>  </div>
                                                    </div>
                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right mt10">
                                                        <asp:Button ID="btnCreateBatch" runat="server" Text="Create Batch" CssClass="btn btn-warning"
                                                            OnClick="CreateBatch" />
                                                        <asp:Button ID="btnCancelBatch" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                   
                                                   </div>
                                                          </div>
                                                     </div> 
                                            </div>
                                        
                                        <section>
                                            <div class="divfieldset">
                                                <div  class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt10 text-center" style="margin-top:10px;">
                                                         <div id="dvErr" runat="server"  class="mb20" style="font-weight: bold"></div> 
                                                     </div>
                                                    <div class="clearfix"></div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <table width="100%" align="center">
                                                    <tr>
                                                        <td> 
                                                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                            <div class="col-sm-5">
                                                                        <label class="form-label label_setting" for="orgcode"> Batch No: </label>
                                                                                </div>
                                                                            <div class="col-sm-7">  
                                                                                <label style="font-weight:bold;padding-top:7px;"><asp:Label ID="txtBatchNo" runat="server"></asp:Label></b>&nbsp;&nbsp; </label>
                                                                                </div>     
                                                                    </div>
                                                                                                            
                                                                    
                                                                   
                                                                    <td>
                                                                        <div id="dvBatchDetails" runat="server">
                                                                            <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                                <div class="col-sm-5">
                                                                            <label class="form-label label_setting" for="orgcode">Batch Date:</label>
                                                                                    </div>
                                                                                <div class="col-sm-7"> 
                                                                                   
                                                                                                                           
                                                                                <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                                    <asp:TextBox ID="txtBatchDate" runat="server"></asp:TextBox>  
                                                                                    <div class="input-group-addon">
                                                                                        <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                    </div>                                                              
                                                                                    </div>     
                                                                             </div> 
                                                                        </div>
                                                                    </td>
                                                                  
                                                             
                                                        </td>
                                                        <td> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20 mt10 text-center" style="margin-top:10px;">
                                                                        <asp:LinkButton ID="lnkShowPrevBatch" runat="server" Text="Previous batch details"></asp:LinkButton> 
                                                                <asp:Button ID="btnGetBatch" runat="server" OnClick="ShowBatchTemp" Text="Done" CssClass="btn btn-success" />

                                                                </div></td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td>
                                                            <div id="dvByDates" runat="server">
                                                                <table width="100%" align="center" class="table table-bordered" style="margin-left: 50px;">
                                                                    <thead class="table_back">
                                                                    <tr>
                                                                        <td>From Post Date</td>
                                                                        
                                                                        <td>
                                                                            <%if (ddlFromHours.Visible)
                                                                              {%>
                                                                            <small>
                                                                                <label>
                                                                                    HH</label></small><%} %></td>
                                                                        <td>
                                                                            <%if (ddlFromMin.Visible)
                                                                              {%>
                                                                            <small>
                                                                                <label>
                                                                                    MM</label></small><%} %></td>
                                                                         
                                                                        <td>To Post Date</td>
                                                                        <td>
                                                                            <%if (ddlToHours.Visible)
                                                                              {%>
                                                                            <small>
                                                                                <label>
                                                                                    HH</label></small><%} %></td>
                                                                        <td>
                                                                            <%if (ddlToMin.Visible)
                                                                              {%>
                                                                            <small>
                                                                                <label>
                                                                                    MM</label></small><%} %></td>
                                                                         
                                                                    </tr>
                                                                        </thead>
                                                                    <tr>
                                                                        
                                                                        <td>
                                                                             <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                            <asp:TextBox ID="txtFromDate" runat="server" type="text" name="date" class="date form-control"></asp:TextBox>
                                                                            <div class="input-group-addon">
                                                                  <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                </div>
                                                              </div> 
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlFromHours" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlFromMin" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        
                                                                        <td>
                                                                             <div class="input-group date" data-date-format="dd.mm.yyyy" style="z-index:0">
                                                                            <asp:TextBox ID="txtToDate" runat="server" type="text" name="date" class="date form-control"></asp:TextBox>
                                                                            <div class="input-group-addon">
                                                                              <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                                            </div>
                                                                          </div> 
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlToHours" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlToMin" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>
                                                                            &nbsp;&nbsp;
                                                                        </td>
                                                                        
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div id="dvByVend" runat="server">
                                                                <table>
                                                                    <tr>
                                                                        <td align="right">
                                                                            <small>
                                                                                <label>
                                                                                    Select Vendor:
                                                                                </label>
                                                                            </small>
                                                                            &nbsp;&nbsp;
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="ddlVendors" runat="server"></asp:DropDownList>
                                                                            &nbsp;&nbsp;
                                                                        </td>
                                                                        <td>
                                                                            <asp:Button ID="btnSelectByDates" runat="server" Text="Select By Dates" CssClass="button button-blue" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div id="dvShowBatchHead" runat="server">
                                                                <table>
                                                                    <tr>
                                                                        <td><small>
                                                                            <label>From Post Date:</label></small>&nbsp;&nbsp;
                                                                                    <b>
                                                                                        <asp:Label ID="lblFromPostDate" runat="server"></asp:Label></b>
                                                                        </td>
                                                                        <td>&nbsp;&nbsp;</td>
                                                                        <td>&nbsp;&nbsp;</td>
                                                                        <td><small>
                                                                            <label>To Post Date:</label></small>&nbsp;&nbsp;
                                                                                    <b>
                                                                                        <asp:Label ID="lblToPostDate" runat="server"></asp:Label></b>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <asp:HiddenField ID="hdnSelectedType" runat="server" />
                                                            <asp:Button ID="btnExport" runat="server" Text="Export Data" CssClass="btn btn-info" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                                        </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div  style="width:100%;overflow-x:auto;"   >
                                                <isx:CoolGridView ID="gvBatchReqdetails" runat="server" AutoGenerateColumns="false"
                                                    AllowPaging="false" Width="800" Height="250px" OnRowDataBound="gvBatchReqdetails_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="CompanyID">
                                                            <ItemTemplate>
                                                                <label><%#Eval("companyId")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="PropertyID">
                                                            <ItemTemplate>
                                                                <label><%#Eval("propertyId")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Vendor#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("vendorNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="VendorName" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("preferredVendor")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Phone">
                                                            <ItemTemplate>
                                                                <label><%#Eval("phone")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Email" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("vendorEmail")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="AddrLine1" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("addressLine1")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="AddrLine2" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("addressLine2")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="City" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("cityState")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Zip">
                                                            <ItemTemplate>
                                                                <label><%#Eval("zip")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="ContactName" ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("contactName")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Invoice#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("invNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Line Seq.">
                                                            <ItemTemplate>
                                                                <label><%#Eval("invLineNum")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Line Amount">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblInvAmount" runat="server" Text='<%#Eval("invAmount")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Invoice Date">
                                                            <ItemTemplate>
                                                                <label><%# Eval("invDate")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Post Date">
                                                            <ItemTemplate>
                                                                <label><%# Eval("postDate")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Due Date">
                                                            <ItemTemplate>
                                                                <label><%# Eval("dueDate")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Total Inv. Amount">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblTotalInvAmount" runat="server" Text='<%#Eval("amount")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("accountCode")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("acctName")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Item Description" ControlStyle-Width="200px" HeaderStyle-Width="200px">
                                                            <ItemTemplate>
                                                                <label><%#Eval("description")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="PO#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("ourRefNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="PO Line#">
                                                            <ItemTemplate>
                                                                <label><%#Eval("expLineNo")%></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="PO Line Amnt.">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblPOAmount" runat="server" Text='<%#Eval("poAmount")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 170px">
                                                            <label>
                                                                No Batch details to display</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                            </div>
                                              </div>
                                                <div id="dvTotals" runat="server" class="alert alert-info" style="    display: block; clear: both;width: 800px;margin: 5px auto;">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="30%">
                                                                <b>
                                                                    <label>
                                                                        <asp:Label ID="lblRowCount" runat="server"></asp:Label></label></b>
                                                            </td>
                                                            <td width="30%">
                                                                <b>
                                                                    <label>
                                                                        <asp:Label ID="lblTotPOAmnt" runat="server"></asp:Label></label></b>
                                                            </td>
                                                            <td width="30%">
                                                                <b>
                                                                    <label>
                                                                        <asp:Label ID="lblTotInvAmnt" runat="server"></asp:Label></label></b>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                                </div>

                                            <asp:Panel ID="pnlPrevBatch" runat="server" Style="display: none">
                                                <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 100%; min-width: 230px; height: 145px;">
                                                    <div style="padding: 10px;">
                                                        <div class="divfieldset" style="background-color: white">
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td style="text-align: right"><small>
                                                                        <label>Batch No:</label></small></td>
                                                                    <td>
                                                                        <b>
                                                                            <asp:Label ID="lblPrevBatchNum" runat="server"></asp:Label></b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right"><small>
                                                                        <label>Batch Date:</label></small></td>
                                                                    <td>
                                                                        <b>
                                                                            <asp:Label ID="lblPrevBatchDate" runat="server"></asp:Label></b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right"><small>
                                                                        <label>From Post Date:</label></small></td>
                                                                    <td>
                                                                        <b>
                                                                            <asp:Label ID="lblPrevFromPostDate" runat="server"></asp:Label></b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: right"><small>
                                                                        <label>To Post Date:</label></small></td>
                                                                    <td>
                                                                        <b>
                                                                            <asp:Label ID="lblPrevToPostDate" runat="server"></asp:Label></b></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </asp:Panel>
                                            <cc1:HoverMenuExtender ID="hvePrevBatch" runat="server" TargetControlID="lnkShowPrevBatch"
                                                PopupControlID="pnlPrevBatch" PopupPosition="Bottom">
                                            </cc1:HoverMenuExtender>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkShowBatch" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popShowBatch" runat="server" DropShadow="false" PopupControlID="pnlShowBatch"
                                    TargetControlID="lnkShowBatch" CancelControlID="btnCancelBatch" BackgroundCssClass="modalBackground">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlBatchOptions" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: -55px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 1150px;">
                                        <header style="height: 4%">
                                            <table width="100%">
                                                <tr>
                                                    <td width="50%">
                                                        <h2 class="pophead">Batch Details
                                                        </h2>
                                                    </td>
                                                    <td width="50%" align="right">
                                                        <asp:Button ID="btnOptionsClose" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <asp:LinkButton ID="lnkApprPosted" runat="server" Text="Click here to view Batch details of Approved and Posted POs"
                                                    OnCommand="GetSelectedBatchData" CommandArgument="1" CssClass="actionLnk"></asp:LinkButton><br />
                                                <br />
                                                <asp:LinkButton ID="lnkApprNotPosted" runat="server" Text="Click here to view Batch details of Approved but not Posted POs"
                                                    OnCommand="GetSelectedBatchData" CommandArgument="2" CssClass="actionLnk"></asp:LinkButton><br />
                                                <br />
                                                <asp:LinkButton ID="lnkApprPostedNotInc" runat="server" Text="Click here to view Batch details of Approved and Posted POs but not included in any Batch"
                                                    OnCommand="GetSelectedBatchData" CommandArgument="3" CssClass="actionLnk"></asp:LinkButton>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkOptions" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popOptions" runat="server" DropShadow="false" TargetControlID="lnkOptions"
                                    PopupControlID="pnlBatchOptions" BackgroundCssClass="modalBackground" CancelControlID="btnOptionsClose">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlConfirmBatchCreate" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: -55px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 850px;">
                                        <header style="height: 4%">
                                            <table width="100%">
                                                <tr>
                                                    <td width="20%">
                                                        <h2 class="pophead">Confirm Create
                                                        </h2>
                                                    </td>
                                                    <td width="80%" align="right">
                                                        <asp:Button ID="btnConfExport" runat="server" Text="Ok" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnYes" runat="server" OnClick="ConfirmCreateBatch" Text="Ok" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnNo" runat="server" Text="Cancel" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <label>
                                                    <asp:Label ID="lblConfirmText" runat="server"></asp:Label></label>
                                                <asp:HiddenField ID="hdnIsBatchExp" runat="server" />
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkConfirmBatchCreate" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popConfirmCreate" runat="server" DropShadow="false" TargetControlID="lnkConfirmBatchCreate"
                                    PopupControlID="pnlConfirmBatchCreate" BackgroundCssClass="modalBackground2"
                                    CancelControlID="btnNo">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
            </div>
             <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
            </div>
        </div>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%-- <script src="../js/html5shiv.js" type="text/javascript"></script>
        <script src="../js/jquery.tools.min.js"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <%--<script src="../js/jquery.ui.min.js"></script>--%>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
       <%-- <script src="../js/DateSetup.js" type="text/javascript"></script>--%>
        <script src="../js/Ajax.js" type="text/javascript"></script>
        <script src="../latestdesign/js/bootstrap-select.min.js"></script>
        <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
        <script>

            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function DoOnAjaxPostback() {
                //setupDatePicker();
                //$('#date').dateinput({
                //    format: 'mm/dd/yyyy',
                //    trigger: false
                //});
                 
                $('.date').datepicker({
                    format: "mm/dd/yyyy",
                    autoclose: true,
                    showOnFocus: true,
                    todayHighlight: true,
                }).on('changeDate', function (ev) {
                    $(this).datepicker('hide');
                });
                


                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });


            }

            //validate filter fields upon fetching invoice data
            function OnGetBatch() {
                $11('dvErr').style.color = "Red";
                var errStr = 'Please select ';
                if ($11("dvByDates").style.display == "block") {
                    if ($11('txtFromDate').value == 0) {
                        errStr += "From Date, ";
                    }
                    if ($11('txtToDate').value == 0) {
                        errStr += "To Date, ";
                    }
                    if (Date.parse($11('txtToDate').value) < Date.parse($11('txtFromDate').value)) {
                        errStr += "To Date which is not more than From Date, ";
                    }
                }
                else if ($11("dvByVend").style.display == "block") {
                    if ($11('ddlVendors').value == 0) {
                        errStr += "Vendor";
                    }
                }
                errStr = errStr.substring(0, errStr.length - 2);
                if (errStr.length > 13) {
                    $11('dvErr').innerHTML = errStr;
                    return false;
                }
            }
            //validate filter fields upon fetching invoice data

            //Show filter options based on selected type
            function selectBatchLoadType(type) {
                if (type == '1') {
                    $11("dvByDates").style.display = "block";
                    $11("dvByVend").style.display = "none";
                    $11('hdnSelectedType').value = "date";
                }
                else if (type == '2') {
                    $11("dvByDates").style.display = "none";
                    $11("dvByVend").style.display = "block";
                    $11('hdnSelectedType').value = "vend";
                }
                return false;
            }
            //Show filter options based on selected type

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
