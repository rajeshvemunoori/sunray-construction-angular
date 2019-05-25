<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Locations.aspx.cs" Inherits="Inventory_Locations" %>

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
    <title>ApproveIt - Inventory Locations</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
<%--    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <style>
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        .tablemain td {
            padding: 5px;
        }
        div.dropdown-menu.open{
  max-height: 314px !important;
  overflow: hidden;
}
ul.dropdown-menu.inner{
  max-height: 260px !important;
  overflow-y: auto;
}

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                color: red;
                font-weight: bold;
            }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            border-radius: 3px 3px;
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
            border-radius: 3px;
            border: 1px solid #aaaaaa;
        }

        #gvLotsjEsCoOl_headerDiv, #gvLocationsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvLotsjEsCoOl_headerDiv div table tbody tr th, #gvLocationsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center; 
                font-weight: normal;
                vertical-align: middle;
    white-space: nowrap;
            }

        #gvLotsjEsCoOl_headerDiv {

            overflow-x: visible !important;
    overflow-y: visible;
        }

        #gvLots tbody tr td, #gvLocations tbody tr td {
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
          border:0.5px solid  #eaeaea
        }

         #gvLotsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                line-height:27px;
                color: white;
                text-align: center;
               font-family: "Open Sans", sans-serif;
                font-size:13px !important;
                font-weight: normal;
                border:0.5px solid rgba(0,0,0,0.1);
                padding:0px 5px;
                vertical-align:middle;
                white-space:nowrap;
            }

        #gvLots tbody tr td {
            height: 30px;
                line-height:27px;
           border:0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
             font-size:12px !important;
        }

        #gvLotsjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
        }
        #gvLotsjEsCoOl_mainDiv {
        
        margin:0 auto;
        overflow-y:auto !important;
        }
        #gvLotsjEsCoOl_mainDiv, #gvLocationsjEsCoOl_mainDiv {
            overflow: hidden;
        }

        #gvLots TR TD, #gvLots TR TH, #gvLots TR TH div, #gvLots TR TD div,
        #gvLocations TR TD, #gvLocations TR TH, #gvLocations TR TH div, #gvLocations TR TD div {
            overflow: visible;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
       <!--header-->
        <div class="row menu-bg ">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px; margin-top:70px;">
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
                                         <div id="dvHeader" class="page-title"> <%-- <span class="font-awesome-icon-block"><i class="fa fa-plus" aria-hidden="true"></i></span>--%>Inventory Locations</div>
                                      </div>

                                 <div class="clearfix"></div>
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">  
                                     <div class="pull-right">
                                      <asp:Button ID="btnAddLocation" runat="server" Text="Add New Location" CssClass="btn btn-success" OnClick="AddLocation" />
                                        <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />  
                                         </div>                                     
                                     </div>

                                  <div class="clearfix"></div>
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;"> 
                                   <div id="dvMainMsg" runat="server">
                                    </div>
                                     </div>
                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                    </label></small>&nbsp;&nbsp;<b>
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%> Organization: </label>
                                                                 </div>
                                                             <div class="col-sm-7" style="font-weight:bold;padding-top:17px;"> 
                                                                      <asp:Label ID="lblOrgID" runat="server"></asp:Label></b></td>                                                              
                                                              </div>     
                                </div>


                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%>   Company Code:</label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                 <asp:DropDownList ID="ddlCompCodes" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlCompCodes_SelectedIndexChanged" class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
>
                                                    </asp:DropDownList>                                                                 
                                                                 </div>     
                                         </div>

                            
                            <section>
                                <div class="divfieldset">
                                  <div class="col-xs-12 col-sm-12 col-mg-12 col-lg-12">
                                    <div class="form-group   has-feedback" style="width:350px !important;margin-left: 7px;">       
                                       <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server"   placeholder="Type in Location Name, Location Code or City to search.." />
                                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                    </div>
                                                
                                         <div class="table-responsive">
                                        <table class="tablemain" width="100%">
                                        <tr>
                                            <td colspan="2">
                                               
                                                <isx:CoolGridView ID="gvLocations" runat="server" AutoGenerateColumns="false" ShowHeader="true" GridLines="None"
                                                    Height="300px" Width="900px" OnRowDataBound="gvLocations_RowDataBound" OnRowDeleting="gvLocations_RowDeleting"
                                                    OnRowCommand="gvLocations_RowCommand">
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHLocCode" runat="server" Text="Location Code" OnCommand="SortExpression" CommandArgument="locCode" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:LinkButton ID="lnkLocCode" runat="server" OnClick="EditLocation" Text='<%#Eval("locCode") %>'></asp:LinkButton></label>
                                                                <asp:HiddenField ID="hdnLocName" runat="server" Value='<%#Eval("locName") %>' />
                                                                <asp:HiddenField ID="hdnAddr1" runat="server" Value='<%#Eval("locAddress1") %>' />
                                                                <asp:HiddenField ID="hdnAddr2" runat="server" Value='<%#Eval("locAddress2") %>' />
                                                                <asp:HiddenField ID="hdnCity" runat="server" Value='<%#Eval("city") %>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHLocName" runat="server" Text="Location Name" OnCommand="SortExpression" CommandArgument="locName" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("locName") %></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="250px" ItemStyle-Width="250px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHAddr1" runat="server" Text="Address1" OnCommand="SortExpression" CommandArgument="locAddress1" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("locAddress1") %></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkHCity" runat="server" Text="City" OnCommand="SortExpression" CommandArgument="city" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><%#Eval("city") %></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 180px">
                                                            <label>No locations to display.</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                  
                                            </td>
                                        </tr>
                                    </table>
                                               </div>
                                      </div>
                                </div>
                               
                                <asp:Panel ID="pnlManageLoc" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 800px; height: 480px;">
                                         
                                         <div class="pop-page-title">     
                                              <div class="row  ">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                   Manage Inventory Location
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveLocation"></asp:Button>
                                                        <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="btn btn-info"></asp:Button>
                                                   
                                                        </div>
                                                    </div>
                                                  </div>
                                             </div>

                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvMsg" runat="server" style="font-weight: bold"></div>

                                                 
                                                       <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Location Code:</label>
                                                                 </div>
                                                             <div class="col-sm-6">  
                                                                  <asp:TextBox ID="txtLocCode" runat="server" CssClass="form-control" MaxLength="10"></asp:TextBox></td>                                                                 
                                                                 </div>     
                                         </div>
                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Location Name:</label>
                                                                 </div>
                                                             <div class="col-sm-6">       
                                                                 <asp:TextBox ID="txtLocName" runat="server" CssClass="form-control"  MaxLength="100"></asp:TextBox>                                                            
                                                                 </div>     
                                         </div>

                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>  Address1:</label>
                                                                 </div>
                                                             <div class="col-sm-6">  
                                                                  <asp:TextBox ID="txtLocAddr1" runat="server"  CssClass="form-control" MaxLength="200"></asp:TextBox>                                                                 
                                                                 </div>     
                                         </div>

                                                        <div class="clearfix"></div>
                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode">Address2: </label>
                                                                 </div>
                                                             <div class="col-sm-6">  
                                                                 <asp:TextBox ID="txtLocAddr2" runat="server" CssClass="form-control"  MaxLength="200"></asp:TextBox>                                                                 
                                                                 </div>     
                                         </div>

                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode">State: </label>
                                                                 </div>
                                                             <div class="col-sm-6"> 
                                                                 <asp:DropDownList ID="ddlRgnCode"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true"  runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                 </div>     
                                         </div>

                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-6">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> City: </label>
                                                                 </div>
                                                             <div class="col-sm-6"> 
                                                                  <asp:TextBox ID="txtLocCity"  CssClass="form-control"  runat="server"></asp:TextBox>
                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtLocCity"
                                                                MinimumPrefixLength="1" EnableCaching="false" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                CompletionListItemCssClass="listItem"
                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                            </cc1:AutoCompleteExtender>                                                                  
                                                                 </div>     
                                         </div>


                                                        <div class="clearfix"></div>
                                                

                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                 <div class="tablemain pull-right "> 
                                                            <asp:Button ID="btnAddNewLot" runat="server" Text="Add Lot/Bin" CssClass="btn btn-warning" OnClick="btnAddNewLot_Click" />
                                                        
                                                </div>
                                                <div class="table-responsive">
                                                <isx:CoolGridView ID="gvLots" runat="server" AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                    Height="220px" Width="35%" OnRowDataBound="gvLots_RowDataBound" OnRowCommand="gvLots_RowCommand" OnRowDeleting="gvLots_RowDeleting">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Lot/Bin#" HeaderStyle-Width="300px" >
                                                            <ItemTemplate>
                                                                <asp:TextBox ID="txtLotNum" runat="server" CssClass="form-control" Text='<%#Eval("lotNum") %>'></asp:TextBox>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                </isx:CoolGridView>
                                             </div>
                                                  </div>
                                               </div>
                                    </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkManageLoc" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popManageLoc" runat="server" PopupControlID="pnlManageLoc" TargetControlID="lnkManageLoc"
                                    BackgroundCssClass="modalBackground" CancelControlID="btnCancel" DropShadow="false">
                                </cc1:ModalPopupExtender>
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
        <script src="../latestdesign/js/modernizr.js"></script>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
        <script src="../js/Ajax.js" type="text/javascript"></script>
      <%--  <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
            <script src="../latestdesign/js/bootstrap-select.min.js"></script>

        <script type="text/javascript">
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function pageLoad() {


                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });
            }
            function DoOnAjaxPostback() {
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

                //$(function () {
                //    $("#ddlCompCodes").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlRgnCode").ufd({ log: true });
                //});
            }

            //$(document).ready(function () {
            //    $(function () {
            //        $("#ddlCompCodes").ufd({ log: true });
            //    });
            //});

            //Filter vendors grid with text provided in search box
            function Filter(Obj) {
                var grid = document.getElementById('gvLocations');
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
                // Obj.setFocus();
            }

            //Fetch cities by selected region
            function GetCitiesByRegion(obj) {
                var region = obj.value;
                var url = '../Invoice.ashx?func=12&rgn=' + region;
                GetCities(url, 'GetCities');
            }

            function GetCities(UpdateURL, pagename) {
                if (UpdateURL != "") {
                    currentpageurl = pagename;
                    MakeAjaxRequest(UpdateURL, LoadCities, false)
                }
            }

            function LoadCities(response) {

            }
            //Fetch cities by selected region

            //Validate Locations
            function locationDetails() {
                var errStr = 'Please enter ';
                $11('dvMsg').innerHTML = '';
                $11('dvMsg').style.color = "red";
                if ($11('txtLocCode').value == 0) {
                    errStr += 'Location Code, ';
                }
                if ($11('txtLocName').value == 0) {
                    errStr += 'Location Name, ';
                }
                if ($11('txtLocAddr1').value == 0) {
                    errStr += 'Address1, ';
                }
                //if ($11('ddlRgnCode').value == 0) {
                //    errStr += 'Region, ';
                //}
                if ($11('txtLocCity').value == 0) {
                    errStr += 'City, ';
                }
                errStr = errStr.substring(0, errStr.length - 2);
                if (errStr.length > 13) {
                    $11('dvMsg').innerHTML = errStr;
                    return false;
                }
            }
            //Validate Locations

            //This javascript code is required if you are using a CoolGridView inside an update panel.

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
