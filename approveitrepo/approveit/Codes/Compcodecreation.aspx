<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Compcodecreation.aspx.cs"
    Inherits="Compcodecreation" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="../Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Company Code Creation</title>
    <link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <%-- <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <style>
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
        .form-control-feedback {
            font-size:14px !important;
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

div.dropdown-menu.open{
  max-height: 314px !important;
  overflow: hidden;
}
ul.dropdown-menu.inner{
  max-height: 260px !important;
  overflow-y: auto;
}

        #gvCompCodesjEsCoOl_mainDiv {

            width:91%;
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
            <div class="row  menu-bg">
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 left-block" style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
            <!-- the tabs -->
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 right-block bg-white" style="padding:0px; ">
	<div class=" container-fluid  cd-main-content"  >
	
            <section class="grid_7" style="padding-top: 0px">
                <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
                </cc1:ToolkitScriptManager>
                <%--<asp:ScriptManager ID="ScriptManager1" runat="server">
                    </asp:ScriptManager>--%>
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
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <div class="  ">
                            <div class="row " style="margin-top:70px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-info-circle"></i></span>Company Codes</div>
                                </div>
                            </div>
                            <div class="clear-fix "></div>

                            <div class="row " style="padding: 0px; height: 0px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <asp:Button ID="lnkAddNewCompCode" OnClick="AddNewCompCode" runat="server" Text="Add Company Code" CssClass="btn btn-info"></asp:Button>
                                    <asp:Button ID="btnReloadData" runat="server" Text="Refresh"  CssClass="btn btn-info" OnClick="ReloadData" />
                                </div>
                            </div>
                            <div class="clear-fix "></div>

                            <div class="row ">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">



                                    <table style="width: 100%">
                                        <tr>
                                            <td width="100%">
                                                <table width="100%">
                                                    <tr>
                                                        <td>
                                                            <div id="dvMainMsg" runat="server">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <small>
                                                                <label>
                                                                    Organization :&nbsp;&nbsp;
                                                                </label>
                                                            </small>
                                                            <label style="width:121px;">
                                                                <b>
                                                                    <asp:DropDownList ID="ddlOrg" runat="server" AutoPostBack="true" OnSelectedIndexChanged="SelectedOrganization" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                    </asp:DropDownList>
                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%=Session["SOrgName"] %>' />
                                                                </b>
                                                            </label>
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
                                               <div class="form-group   has-feedback" style="width:350px !important;">       
                                              <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server"  placeholder="Type in CompanyCode, Name, Address1 or City to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                             
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;
                                            </td>
                                        </tr>
                                         </table>
                                        <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <%if (gvCompCodes.Rows.Count > 0)
                                                  {  %>
                                                <div style="" class="table-responsive">
                                                    <table>
                                                    <tr>
                                                        <td>
                                                    <isx:CoolGridView ID="gvCompCodes" runat="server" AutoGenerateColumns="false"
                                                        Height="300px" GridLines="None" ShowHeader="true" OnRowDataBound="gvCompCodes_RowDataBound"
                                                        OnRowCommand="gvCompCodes_RowCommand" OnRowDeleting="gvCompCodes_RowDeleting">
                                                        <Columns>
                                                            <asp:TemplateField HeaderText="Action" HeaderStyle-Width="100px" ItemStyle-Width="100px">
                                                                <ItemTemplate>
                                                                    <asp:LinkButton ID="lnkEditCompCode" runat="server" ToolTip="View Code" CommandArgument="test"
                                                                        OnClick="EditCompCode"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;
                                                                        <asp:LinkButton ID="lnkDeleteCompCode" runat="server" ToolTip="Delete Code" CommandArgument='<%#(Eval("CompCode") + "~"+Eval("countryCode") + "~"+Eval("orgId")) %>'
                                                                            CommandName="Delete">
                                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkCompCode" runat="server" Text="Company Code" CommandArgument="CompCode"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label style="text-transform: uppercase">
                                                                        <asp:LinkButton ID="lnkEditCC" runat="server" Text='<%#Eval("CompCode") %>' OnClick="EditCompCode"></asp:LinkButton></label>
                                                                    <asp:HiddenField ID="hdnRowOrgID" runat="server" Value='<%#Eval("orgId") %>' />
                                                                    <asp:HiddenField ID="hdnRowCompCode" runat="server" Value='<%#Eval("CompCode") %>' />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkCompName" runat="server" Text="Company Name" CommandArgument="CompName"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("CompName") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAddr1" runat="server" Text="Address1" CommandArgument="Address1"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("Address1") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="160px" ControlStyle-Width="160px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkCity" runat="server" Text="City" CommandArgument="City"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("City") %></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                    </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <%} %>
                                                </div>
                                        </div>
                                                
                                                <asp:HiddenField ID="hdnCode" runat="server" />
                                                <asp:HiddenField ID="hdnCountry" runat="server" />
                                                <asp:HiddenField ID="hdnOrgID" runat="server" />
                                            </td>
                                        </tr>
                                    </table>
                                    <asp:Panel ID="pnlAddCompCode" runat="server" CssClass="modalPopup" Style="display: none"
                                        DefaultButton="btnSave">
                                        <div id="Div1" class="main-content">
                                            <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    <asp:Label ID="lblHCompCode" runat="server"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveCompCode"></asp:Button>
                                                        <asp:Button ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-info" OnClick="DeleteCompCode" />
                                                        <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="btn btn-info"></asp:Button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            

                                          <section  >
                                                <div class="divfieldset" style="height: auto;overflow:auto; width: 675px">


                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">

                                                        <div class="align-center">
                                                            <div class="clearfix"></div>
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div id="dvErrMsg" runat="server" style="font-weight: bold">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <table class="tablemain">
                                                                            <tr>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Company Name:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCompName" runat="server" CssClass="form-control" onchange="javascript:CompName('txtCompName')"></asp:TextBox>
                                                                                </td>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Company Code:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCompCode" CssClass="form-control" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader">
                                                                                        <h4>Shipping Address</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Address1:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtAddr1" CssClass="form-control" runat="server"></asp:TextBox>
                                                                                </td>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            Address2:&nbsp;
                                                                                        </label>
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtAddr2" CssClass="form-control" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>City:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtCities" runat="server" CssClass="form-control" class="autosuggest1"></asp:TextBox>
                                                                                </td>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>State:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:DropDownList ID="ddlRgnCode" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                                    </asp:DropDownList>
                                                                                </td>
                                                                            </tr>
                                                                             
                                                                            <tr>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>Country:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey"
                                                                                       class="selectpicker form-control" data-show-subtext="true" data-live-search="true" name="ddlCountry" ClientIDMode="Static">
                                                                                    </asp:DropDownList>
                                                                                </td>
                                                                                <td>
                                                                                    <small>
                                                                                        <label>
                                                                                            <em>*</em>ZipCode:&nbsp;</label></small>
                                                                                </td>
                                                                                <td>
                                                                                    <asp:TextBox ID="txtZipCode" CssClass=" form-control" runat="server"></asp:TextBox>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader" id="dvCopyOptions" runat="server">
                                                                                        <h4>Copy data from existing company</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <table width="100%">
                                                                                        <tr>
                                                                                            <td width="50%">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyCodes" runat="server" Text="&nbsp;&nbsp;CodeValues"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyVendors" runat="server" Text="&nbsp;&nbsp;Vendors"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyFiscCal" runat="server" Text="&nbsp;&nbsp;Fiscal Calendar"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <small>
                                                                                                                <p>
                                                                                                                    <asp:CheckBox ID="chkCopyExpItems" runat="server" Text="&nbsp;&nbsp;Accounts"
                                                                                                                        TextAlign="Right" onclick="Displayddl();" />
                                                                                                                </p>
                                                                                                            </small>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                            <td width="50%">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <div id="dvCopyCodes" style="display: none;" runat="server">
                                                                                                                <table>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <b><span style="color: Red">*</span></b>&nbsp;<small><label>Please select company code from below list 
                                                                                                                            <br />
                                                                                                                                &nbsp;to copy corresponding codevalues
                                                                                                                            </label>
                                                                                                                            </small>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <asp:DropDownList ID="ddlCopyCodes" runat="server" DataTextField="CompCode" DataValueField="CompCode" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                                                                            </asp:DropDownList>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div class="subheader">
                                                                                        <h4>Billing Address</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <small>
                                                                                        <p>
                                                                                            <asp:CheckBox ID="chkBillAddr" runat="server" TextAlign="Right" Text="&nbsp;&nbsp;&nbsp;Billing Address is same as Shipping Address" onclick="DisplayBillComp();" />
                                                                                        </p>
                                                                                    </small>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="4">
                                                                                    <div id="dvBillComp" style="display: none" runat="server">
                                                                                        <b>
                                                                                            <span style="color: Red">*</span>
                                                                                        </b>
                                                                                        <small>
                                                                                            <div class="alert alert-info">
                                                                                                <small>To assign any other Shipping Address please select a company code</small>
                                                                                            </div>
                                                                                        </small>
                                                                                        <asp:DropDownList ID="ddlBillComp" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" DataTextField="CompBillAddress" DataValueField="CompCode">
                                                                                        </asp:DropDownList>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAddCompCode" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popAddCompCode" runat="server" DropShadow="false" PopupControlID="pnlAddCompCode"
                                        TargetControlID="lnkAddCompCode" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
                                    </cc1:ModalPopupExtender>
                                    <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                        <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                               <div class="pop-page-title">     
                                              <div class="row  ">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Alert
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="btn btn-info" />&nbsp;&nbsp;&nbsp;
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                                   </div>
                                            
                                            
                                              
                                           
                                            <section>
                                                <div class="form_edit" style=" padding: 20px;">
                                                    <small>
                                                        <div class="alert alert-warning">
                                                            <asp:Label ID="lblAlert" runat="server"></asp:Label>

                                                        </div>

                                                    </small>
                                                    
                                                </div>
                                            </section>
                                        </div>
                                    </asp:Panel>
                                    <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                    <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                        TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                    </cc1:ModalPopupExtender>


                                </div>
                            </div>








                        </div>





                        <div>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <!-- Main Section End -->
            </section>
        </div>
                    </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/modernizr.js"></script>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <script src="../js/jquery.ui.min.js"></script>
        <script src="../js/Ajax.js" type="text/javascript"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
        <%--<script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
        <script type="text/javascript">

            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function Displayddl() {
                if (document.getElementById('chkCopyCodes').checked || document.getElementById('chkCopyVendors').checked ||
                document.getElementById('chkCopyFiscCal').checked || document.getElementById('chkCopyExpItems').checked)
                    document.getElementById('dvCopyCodes').style.display = "block";
                else
                    document.getElementById('dvCopyCodes').style.display = "none";
            }

            function DoOnAjaxPostback() {

                $('.selectpicker').selectpicker({
                            liveSearch: true,
                            showTick: true,
                            width: 'auto'
                        });
                         

                //    searchCity();
                //    $(function () {
                //        $("#ddlOrg").ufd({ log: true });
                //    });
                //    $(function () {
                //        $("#ddlRgnCode").ufd({ log: true });
                //    });
                //    $(function () {
                //        $("#ddlCountry").ufd({ log: true });
                //    });
            }

            //$(document).ready(function () {
            //    searchCity();
            //    $(function () {
            //        $("#ddlOrg").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlRgnCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCountry").ufd({ log: true });
            //    });
            //});

            //function pageLoad() {
            //    searchCity();
            //    $(function () {
            //        $("#ddlOrg").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlRgnCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlCountry").ufd({ log: true });
            //    });
            //}

            //Autocomplete city textbox begin

            //function searchCity() {
            //    $(".autosuggest1").autocomplete({
            //        source: function (request, response) {
            //            $.ajax({
            //                type: "POST",
            //                contentType: "application/json; charset=utf-8",
            //                url: "Compcodecreation.aspx/searchCity",
            //                data: "{'cityname':'" + document.getElementById('txtCities').value + "'}",
            //                dataType: "json",
            //                success: function (data) {
            //                    response(data.d);
            //                },
            //                error: function (result) {
            //                    dvError.innerHTML = "An error occurred while fetching the data. Please try again.";
            //                }
            //            });
            //        }
            //    });
            //}
            //Autocomplete city textbox end

            function CompName(txtId) {
                if (document.getElementById('txtCompName').value != '') {
                    capitaliseFirstLetter(txtId);
                    var url = '../Invoice.ashx?func=4&orgname=' + document.getElementById('txtCompName').value + '&typ=2';
                    GetOrgCode(url, 'GetCompCode');
                }
                else
                    document.getElementById('txtOrgcode').value = '';
            }

            function DisplayBillComp() {
                if (document.getElementById('chkBillAddr').checked)
                    document.getElementById('dvBillComp').style.display = "none";
                else
                    document.getElementById('dvBillComp').style.display = "block";
            }

            function Filter(Obj) {
                var grid = document.getElementById('gvCompCodes');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    //ele = grid.rows[r].cells[2].innerHTML.replace(/<[^>]+>/g, "");
                    ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
                Obj.setFocus();
            }
            $('.selectpicker').selectpicker();
        </script>
    </form>
    </div>
</body>
</html>
