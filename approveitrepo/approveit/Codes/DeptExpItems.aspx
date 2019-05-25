<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DeptExpItems.aspx.cs" Inherits="Codes_DeptExpItems" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
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
    <title>ApproveIt - Chart of Accounts</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
       
    <%--<link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

         

        #dvChgAccDeptMsg {
        text-align:center;
        font-weight:bold;
        margin-bottom:10px;
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
        .modalBackground {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99 !important;
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
            color: White;
        }

        .validationMsg {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px;
            background-color: Black;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 3px;
            }

        .lbl {
            text-align: right;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        #gvImpExpItemsjEsCoOl_headerDiv, #gvDeptExpjEsCoOl_headerDiv, #gvClassjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvImpExpItemsjEsCoOl_headerDiv div table tbody tr th, #gvDeptExpjEsCoOl_headerDiv div table tbody tr th,
            #gvClassjEsCoOl_headerDiv div table tbody tr th {
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

        #gvImpExpItems tbody tr td, #gvDeptExp tbody tr td, #gvClass tbody tr td {
           height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
    text-overflow: ellipsis;
        }

        #gvImpExpItemsjEsCoOl_mainDiv, #gvDeptExpjEsCoOl_mainDiv, #gvClassjEsCoOl_mainDiv {
            width:96% !important;
            height: 200px;
            overflow: hidden;
        }

        #gvDeptExp TR TD, #gvDeptExp TR TH, #gvDeptExp TR TH div, #gvDeptExp TR TD div,
        #gvImpExpItems TR TD, #gvImpExpItems TR TH, #gvImpExpItems TR TH div, #gvImpExpItems TR TD div,
        #gvClass TR TD, #gvClass TR TH, #gvClass TR TH div, #gvClass TR TD div {
            overflow: visible;
        }

        .tablepop {
            width: 100%;
        }

            .tablepop td {
            }

                .tablepop td table {
                    width: 100%;
                }

        .deptmulti label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
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
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px; margin-top: 70px;">
                <!-- the tabs -->
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
                        <asp:PostBackTrigger ControlID="btnDisplayData" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                        <div class="main-content">



                             <div class="row ">
                                           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                                              <div class="page-title"><span >CHART OF ACCOUNTS  </span></div>
                                            </div>
                                         </div>

                            <div class=" "> 
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div id="dvMainMsg" runat="server" style="font-weight: bold">

                                </div>
                            </div>
                         
                            <section>
                                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  " style="margin-top: 10px;padding:0px;">
                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                                            <div class="col-sm-5" style="padding:0px;">
                                                            <label class="form-label label_setting">Organization:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                            <b><asp:Label ID="lblOrgID" runat="server" style="font-weight:bold;text-align:center"></asp:Label></b>
                                                            </div> 
                                                        </div>

                                      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8" style="padding:0px;">
                                          <div class="pull-right">
                                               <asp:Button ID="lnkAddNewExp" OnClick="AddNewExp" runat="server" Text="Add Account" CssClass="btn btn-success" />
                                            <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="btn btn-info" />
                                            <asp:Button ID="btnClasses" runat="server" Text="Classes" CssClass="btn btn-warning" OnClick="ShowClasses" />
                                            <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-danger" OnClick="ReloadData" />
                                          <asp:Button ID="btnChangeAccDept" runat="server" Text="Modify Accounts by Dept." CssClass="btn btn-info" OnClick="btnChangeAccDept_Click" />
                                                                        <asp:Button ID="btnUpload" runat="server" Text="Import Accounts From Excel" CssClass="btn btn-danger"
                                                                            OnClick="btnUpload_Click" />
                                              </div>

                                      </div>
                                    </div>


                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;padding:0px;">
                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                                            <div class="col-sm-5" style="padding:0px;">
                                                            <label class="form-label label_setting" style="padding-top:17px;">CompanyCode:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding:10px 0px;">
                                                            <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged"
                                                                            DataTextField="BusinessType" DataValueField="CompCode" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true">
                                                                        </asp:DropDownList>
                                                            </div>
                                                        </div>


                                                         <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 " style="padding:0px;">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" style="padding-top:17px;">Department:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding:10px 0px;">
                                                            <asp:DropDownList ID="ddlDept" runat="server" OnSelectedIndexChanged="ddlDept_SelectedIndexChanged"
                                                                            DataTextField="Description" DataValueField="CodeKey" AutoPostBack="true" CssClass="form-control selectpicker" data-live-search="true">
                                                                        </asp:DropDownList>
                                                            </div>
                                                        </div>
                                 </div>



                                <div class="divfieldset">

                                     <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                                           
                                                                <div class="form-group   has-feedback"  >       
                                                              <asp:TextBox ID="txtKeywordSearch" runat="server"  CssClass="filterdata form-control" placeholder="Type in Account Name, CodeKey or Acc# to search.." />
                                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                            </div>
                                                              
                                                            </div>
                                           <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                                          
                                                             <asp:Button ID="btnSaveAll" runat="server" Text="Save" CssClass="btn btn-success" Style="display: none" OnClick="SaveAllClassifications" />
                                                            </div>
                                                        </div>

                                    :
                                    <div class=" " style="margin-bottom:100px;width:100%; ;height:auto;">
                                    <table class="table" style="width: 100% !important">
                                        <tr>
                                            <td >
                                                <isx:CoolGridView ID="gvDeptExp" runat="server" AutoGenerateColumns="false" Width="1080px"
                                                    Height="300px" GridLines="None" OnRowDataBound="gvDeptExp_RowDataBound" OnRowCommand="gvDeptExp_RowCommand" OnRowDeleting="gvDeptExp_RowDeleting">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Account Code" HeaderStyle-Width="100px" ItemStyle-HorizontalAlign="Left">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkAccCode" runat="server" Text="Account Number" CommandArgument="accountCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblAcc" runat="server" Text='<%#Eval("accountCode")%>'></asp:Label>
                                                                    <asp:Label ID="lblExpCode" runat="server" Text='<%#Eval("expcode")%>' Visible="false"></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Name" HeaderStyle-Width="200px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblExpItem" runat="server" Text='<%#Eval("expItem")%>'></asp:Label></label>
                                                                <asp:HiddenField ID="hdnSeqID" runat="server" Value='<%#Eval("seqId")%>' />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Expense Request" HeaderStyle-Width="70px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <asp:CheckBox ID="chkIsExpenseRequest" runat="server" onclick="ShowSaveButton(this);" />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Travel Specific" HeaderStyle-Width="70px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:CheckBox ID="chkTravelSpec" runat="server" onclick="ShowSaveButton(this);" /><label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Reimbursible" HeaderStyle-Width="100px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:CheckBox ID="chkReimbursible" runat="server" onclick="ShowSaveButton(this);" /></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Attachment Required" HeaderStyle-Width="100px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:CheckBox ID="chkAttachment" runat="server" onclick="ShowSaveButton(this);" /><label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Max Amount" HeaderStyle-Width="160px" ItemStyle-HorizontalAlign="Left">
                                                            <ItemTemplate>
                                                                <asp:TextBox ID="txtMaxAmount" runat="server" placeholder="Maximum Amount" CssClass="normal" onkeyup="ShowSaveButton(this);" />
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Account Type">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkAccntType" runat="server" Text="Account Type" CommandArgument="acctType"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblAccntType" runat="server" Text='<%#Eval("acctType")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Banking Type" HeaderStyle-Width="70px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkBankingType" runat="server" Text="Banking Type" CommandArgument="bankType"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label>
                                                                    <asp:Label ID="lblBankingType" runat="server" Text='<%#Eval("bankType")%>'></asp:Label></label>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:TemplateField HeaderText="Action" HeaderStyle-Width="90px">
                                                            <ItemTemplate>
                                                                <asp:LinkButton ID="lnkEdit" runat="server" ToolTip="View" CommandArgument="test"
                                                                    OnClick="Edit"><img src="../images/icons/pencil.png" alt="Modify Account"/></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete Account" CommandArgument='<%#Eval("seqId") %>'
                                                                            CommandName="Delete"><img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <EmptyDataTemplate>
                                                        <div style="width: 450px">
                                                            <label>
                                                                No Accounts available for the selected Department</label>
                                                        </div>
                                                    </EmptyDataTemplate>
                                                </isx:CoolGridView>
                                                <asp:HiddenField ID="hdnDeptExpSeqID" runat="server" />
                                                <asp:HiddenField ID="hdnQBID" runat="server" />
                                            </td>
                                        </tr>
                                    </table>
                                        </div>
                                </div>
                                <asp:Panel ID="pnlAddDeptExp" runat="server" Style="display: none" CssClass="modalPopup"
                                    DefaultButton="btnSave">
                                    <div id="Div1" class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 280px; max-width: 680px;">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                     <asp:Label ID="lblHDeptExp" runat="server"></asp:Label>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                       <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveDeptExp"></asp:Button>
                                                        <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>


                                       
                                        <section>
                                            <div class="divfieldset">

                                                <div class="row">
                                                     <div id="dvErrMsg" runat="server" style="font-weight: bold"></div>
                                                </div>

                                                      <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting">Department:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                            <asp:DropDownList ID="ddlEditDept" runat="server" Width="190px" DataTextField="Description"
                                                                DataValueField="CodeKey" OnSelectedIndexChanged="ddlEditDept_SelectedIndexChanged" AutoPostBack="true" CssClass="selectpicker form-control" data-show-subtext="true"  data-live-search="true">
                                                            </asp:DropDownList>
                                                            </div>
                                                        </div>


                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting">Parent Account:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                            <asp:DropDownList ID="ddlCtrlAccnt" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                            </div>
                                                        </div>

                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting"><em>*</em>Account:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                                <asp:TextBox ID="txtExpItem" runat="server" Width="180px" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                 <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting">Account Type:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                                <asp:DropDownList ID="ddlAccntType" runat="server" CssClass="form-control selectpicker" data-live-search="true"></asp:DropDownList>
                                                            </div>
                                                        </div>

                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting"><em>*</em>Account Number:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                                <asp:TextBox ID="txtAccCode" runat="server" CssClass="selectpicker form-control" data-live-search="true"></asp:TextBox>
                                                            <asp:DropDownList ID="ddlQBAccCode" runat="server" Visible="false"></asp:DropDownList>
                                                            </div>
                                                        </div>

                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                            <div class="col-sm-5" style="padding:10px;">
                                                            <label class="form-label label_setting">Banking Type:</label>
                                                            </div>
                                                            <div class="col-sm-7" style="padding-top:10px;">
                                                                <asp:DropDownList ID="ddlBankingType" runat="server" CssClass="selectpicker form-control" data-live-search="true"></asp:DropDownList>
                                                            </div>
                                                        </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkDeptExp" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popDeptExp" runat="server" DropShadow="false" TargetControlID="lnkDeptExp"
                                    PopupControlID="pnlAddDeptExp" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                    <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">


                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Alert
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>



                                      
                                        <section>
                                            <div style="padding: 5px;">
                                                <div class="divfieldset" style="padding:20px;">
                                                    <label class="alert alert-danger">
                                                        <asp:Label ID="lblAlert" runat="server"></asp:Label></label>
                                                    <asp:HiddenField ID="hdnAlertType" runat="server" />
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                    TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlUpload" runat="server" Style="display: none">
                                    <div id="Div2" class="main-content" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 500px">


                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-7 col-md-7 ">
                                                    <div class="pop-page-title-inner">
                                                     Upload Accounts Data
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-5 col-md-5">
                                                    <div class="pull-right">
                                                       <asp:Button ID="btnCancelUpload" runat="server" Text="Cancel" CssClass="btn btn-danger"></asp:Button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>


                                       
                                        <section>
                                            <div style="padding: 5px">
                                                <div class="divfieldset">
                                                    <div id="dvUploadErr" runat="server" style="text-align:center;">
                                                    </div>
                                                    <br />
                                                    <div style="margin:0px auto; width:200px;    display: -webkit-box;">
                                                        <asp:FileUpload ID="fupdExp" runat="server" CssClass="form-control" />
                                                         <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .xls and .xlsx" data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                    </div><br />
                                                   
                                                    <br />
                                                    <br />
                                                    <div id="dvDisplay" runat="server" style="text-align:center;">
                                                        <asp:Button ID="btnDisplayData" runat="server" Text="Load Data" CssClass="btn btn-warning"
                                                            OnClick="btlDisplayData_Click" />
                                                        <a href="../DownloadFile.aspx?typ=8">Download Template</a>
                                                    </div>
                                                    <div id="dvUpload" runat="server">
                                                        <asp:Button ID="btnUploadExpItems" runat="server" OnClick="UploadExpItems" Text="Upload" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnClearData" runat="server" Text="Clear Data" CssClass="buttonnew-blue"
                                                            OnClick="btnClearData_Click" />
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <div>
                                                        <%if (gvImpExpItems.Rows.Count > 0)
                                                          { %>
                                                        <isx:CoolGridView ID="gvImpExpItems" runat="server" AutoGenerateColumns="false" AllowPaging="false"
                                                            Width="650px" Height="200px">
                                                            <Columns>
                                                                <asp:TemplateField HeaderText="FailureMessage">
                                                                    <ItemTemplate>
                                                                        <span style="color: Red">
                                                                            <label>
                                                                                <%#Eval("FailureMessage")%></span></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="DeptCode" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("DEPARTMENTCODE")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="AccountName" HeaderStyle-Width="150px" ControlStyle-Width="150px">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("ACCOUNTNAME")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="AccountNumber">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("ACCOUNTNUMBER")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="AccountType">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("ACCOUNTTYPE")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="BankingType">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("BANKINGTYPE")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="CtrlAccount">
                                                                    <ItemTemplate>
                                                                        <label><%#Eval("CTRLACCOUNTNUMBER")%></label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                            </Columns>
                                                            <EmptyDataTemplate>
                                                                <div style="width: 400px">
                                                                    <label>
                                                                        Data uploaded successfully with out any failure.</label>
                                                                </div>
                                                            </EmptyDataTemplate>
                                                        </isx:CoolGridView>
                                                        <%} %>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkUpload" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popUpload" runat="server" DropShadow="false" PopupControlID="pnlUpload"
                                    TargetControlID="lnkUpload" BackgroundCssClass="modalBackground1" CancelControlID="btnCancelUpload">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlChangeAccDept" runat="server" Style="display: none">
                                    <div class="main-content" id="Div3" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-7 col-md-7 ">
                                                    <div class="pop-page-title-inner">
                                                     Modify Accounts Dept.
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-5 col-md-5">
                                                    <div class="pull-right">
                                                       <asp:Button ID="btnCancelChangeDept" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>



                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvChgAccDeptMsg" runat="server"></div>
                                                <div class="message info" style="text-align:center;">
                                                    <label class="alert alert-info"><em>*</em>All the actions on this screen are automatically saved.</label>
                                                </div>
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td><small>
                                                                        <label>From Department:</label></small></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlFromDept" runat="server" OnSelectedIndexChanged="ddlFromDept_SelectedIndexChanged" AutoPostBack="true" CssClass="selectpicker form-control" data-live-search="true"></asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:ListBox ID="lstFromDept" runat="server" Height="250px" Width="250px" SelectionMode="Multiple"  ></asp:ListBox>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td style="vertical-align: middle">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <asp:Button ID="btnCopyAccDept" runat="server" Text="Copy" OnClick="btnCopyAccDept_Click" CssClass="btn btn-info" /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:Button ID="btnMoveAccDept" runat="server" Text="Move" OnClick="btnMoveAccDept_Click" CssClass="btn btn-success" /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:Button ID="btnNullAccDept" runat="server" Text="Remove Dept." OnClick="btnNullAccDept_Click" CssClass="btn btn-warning" /></td>
                                                                </tr>
                                                            </table>
                                                            <asp:HiddenField ID="hdnCopyType" runat="server" />
                                                        </td>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td><small>
                                                                        <label>To Department(s):</label></small></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:DropDownCheckBoxes ID="ddlToDept" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                            CssClass="selectpicker form-control deptmulti" data-live-search="true" OnSelectedIndexChanged="ddlToDept_SelectedIndexChanged" AutoPostBack="true"  >
                                                                            <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Departments" />
                                                                        </asp:DropDownCheckBoxes>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <asp:ListBox ID="lstToDept" runat="server" Height="250px" Width="250px"></asp:ListBox>
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
                                <asp:LinkButton ID="lnkChangeAccDept" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popChangeAccDept" runat="server" TargetControlID="lnkChangeAccDept" PopupControlID="pnlChangeAccDept"
                                    DropShadow="false" CancelControlID="btnCancelChangeDept" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlChangeAccDeptAlert" runat="server" Style="display: none">
                                    <div class="main-content" id="Div5" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">

                                        <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Alert
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnConfChangeAccDept" runat="server" OnClick="btnConfChangeAccDept_Click" Text="Ok" CssClass="btn btn-success" />
                                                        <asp:Button ID="btnCancelChangeAccDept" runat="server" Text="No" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>



                                     
                                        <section>
                                            <div class="divfieldset" style="    padding: 20px 20px 98px 0px;">
                                                <asp:Label ID="lblMsgChangeAccDept" runat="server"  CssClass="alert alert-danger" style="line-height:16px;position:absolute;width: 372px;margin: 0px 14px;" ></asp:Label>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkChangeAccDeptAlert" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popAlertChangeAccDept" runat="server" TargetControlID="lnkChangeAccDeptAlert" PopupControlID="pnlChangeAccDeptAlert"
                                    DropShadow="false" BackgroundCssClass="modalBackground2" CancelControlID="btnCancelChangeAccDept">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlClass" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">


                                         <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-7 col-md-7 ">
                                                    <div class="pop-page-title-inner">
                                                     Classes
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-5 col-md-5">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnCancelClass" runat="server" Text="Cancel" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>   


                                       
                                        <section>
                                            <div class="divfieldset">
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <asp:TextBox ID="txtFilterClass" runat="server" CssClass="filterdata form-control col-sm-3" Width="150px" placeholder="Type in Class Name to search.."></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <isx:CoolGridView ID="gvClass" runat="server" AutoGenerateColumns="false" Width="400px" Height="300px" CssClass="form-control" OnRowDataBound="gvClass_RowDataBound">
                                                                            <Columns>
                                                                                <asp:TemplateField HeaderStyle-Width="300px" ItemStyle-Width="300px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkClassName" runat="server" Text="Class Name" CommandArgument="className"
                                                                                            OnCommand="SortClassExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label><%#Eval("className") %></label>
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField>
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkActive" runat="server" Text="Active" CommandArgument="active"
                                                                                            OnCommand="SortClassExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <asp:CheckBox ID="chkClssActive" runat="server" />
                                                                                        <asp:HiddenField ID="hdnIsActive" runat="server" Value='<%#Eval("active") %>' />
                                                                                    </ItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                        </isx:CoolGridView>
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
                                <asp:LinkButton ID="lnkClass" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popClass" runat="server" DropShadow="false" BackgroundCssClass="modalBackground1"
                                    TargetControlID="lnkClass" PopupControlID="pnlClass" CancelControlID="btnCancelClass">
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
       
        <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
         
        <script src="../js/Ajax.js" type="text/javascript"></script>
       

         <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
                <script src="../latestdesign/js/bootstrap-select.min.js"></script>
             <script src="../js/Validation.js" type="text/javascript"></script>
        
        <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
        
        
         
      
          
        
            
        
        <script>




            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            (function () {
                var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
                for (var i = 0; i < html5elmeents.length; i++) {
                    document.createElement(html5elmeents[i]);
                }
            })();

            var jq = $.noConflict();
            $(document).ready(function () {
                 
                $('.selectpicker').selectpicker('refresh');
            });
            function DoOnAjaxPostback() {
                $(function () {
                    $('[data-toggle="popover"]').popover()
                })


                $('.selectpicker').selectpicker('refresh');
                $('.selectpicker').selectpicker({
                    livesearch: true,
                    showtick: true,

                });



                Filter(document.getElementById('txtKeywordSearch'));
            }
            
            function refreshExp() {
                jq(".btnRefresh").click();
            }

            function CheckForFile() {
                document.getElementById('dvUploadErr').style.color = "Red";
                if (document.getElementById('fupdExp').value == 0) {
                    document.getElementById('dvUploadErr').innerHTML = "Please browse and select a file of type .xls or .xlsx";
                    return false;
                }
                showProgress();
            }

            function Filter(Obj) {
                var grid = document.getElementById('gvDeptExp');
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

            function FilterClass(Obj) {
                var grid = document.getElementById('gvClass');
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

            //Show/Hide Save all button in the header
            function ShowSaveButton(objRef) {
                var row = objRef.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                //Get the reference of GridView
                var GridView = row.parentNode;
                //Get all input elements in Gridview
                var inputList = GridView.getElementsByTagName("input");
                var checkCnt = 0;
                for (var i = 0; i < inputList.length; i++) {
                    if ((inputList[i].type == "checkbox" && inputList[i].checked) || (inputList[i].type == "text" && inputList[i].value.length > 0)) {
                        checkCnt++;
                    }
                    if (inputList[i].type == "checkbox" && inputList[i].id.indexOf("chkIsExpenseRequest") > 0 && inputList[i].checked) {
                        inputList[i + 1].disabled = false;
                        inputList[i + 2].disabled = false;
                        inputList[i + 3].disabled = false;
                    }
                    else if (inputList[i].type == "checkbox" && inputList[i].id.indexOf("chkIsExpenseRequest") > 0 && !inputList[i].checked) {
                        inputList[i + 1].disabled = true;
                        inputList[i + 1].checked = false;
                        inputList[i + 2].disabled = true;
                        inputList[i + 2].checked = false;
                        inputList[i + 3].disabled = true;
                        inputList[i + 3].value = '';
                    }
                }
                if (checkCnt > 0)
                    document.getElementById('btnSaveAll').style.display = "block";
                else
                    document.getElementById('btnSaveAll').style.display = "none";
            }
            //Show/Hide Save all button in the header

            //Redirect to Sync screen
            function transferToSync() {
                showProgress();
                window.location.href = "../SyncAcc.aspx";
            }
            //Redirect to Sync screen

            //validate if there are any pending requests with selected account which is being moved to another dept
            function validatePendReq() {

            }
            //validate if there are any pending requests with selected account which is being moved to another dept
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
        </div></div></div>
    </form>
</body>
</html>
