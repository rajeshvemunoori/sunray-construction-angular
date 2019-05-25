<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Users1.aspx.cs" Inherits="Users1" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/siteadminleft.ascx" %>
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
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>ApproveIt - Users List</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css"/>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <%--<link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />--%>
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

        .modalBackground2 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 5000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 9999 !important;
        }

        .modalBackground3 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 90000000 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 99999 !important;
        }

        .modalBackground4 {
            /*background: repeating-linear-gradient( 135deg, #3D3D3D, #3D3D3D 7px, #000000 8px, #000000 2px );
            position: absolute;
            z-index: 100000016 !important;*/
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999999 !important;
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
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }

        label {
             font-family: "Open Sans", sans-serif;
            font-size: 13px;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        .subheader {
            color: #fff;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
             font-family: "Open Sans", sans-serif;
            font-size: 13px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            text-shadow: 0px 1px 1px #000;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain td {
                padding: 7px;
            }

            .tablemain input {
                width: 135px;
            }

            .tablemain label {
                /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
                   font-family: "Open Sans", sans-serif !important;
                font-size: 13px !important;
                text-align:left !important;
                font-weight:bold;
                color: #555555;
           
            }

                .tablemain label em {
                    font-weight: bold;
                }

        .lbl {
            text-align: left !important;
        }

        #gvUsersListjEsCoOl_headerDiv, #gvCAHistjEsCoOl_headerDiv, #gvCAReqHistjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvUsersListjEsCoOl_headerDiv div table tbody tr th, #gvCAHistjEsCoOl_headerDiv div table tbody tr th, #gvCAReqHistjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                line-height:27px;
                color: white;
                text-align: center;
               font-family: "Open Sans", sans-serif;
                font-size:13px !important;
                font-weight: normal;
                border:0.5px solid rgba(0,0,0,0.1);
                padding:0px 5px;
            }
            
 

        #gvUsersList tbody tr td, #gvCAHist tbody tr td, #gvCAReqHist tbody tr td {
            height: 30px;
                line-height:27px;
           border:0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
             font-size:12px !important;
        }

        #gvUsersListjEsCoOl_mainDiv, #gvCAHistjEsCoOl_mainDiv, #gvCAReqHistjEsCoOl_mainDiv {
            /*width: 500px;*/
            height: 200px;
            overflow: hidden;
        }

        #gvUsersList TR TD, #gvUsersList TR TH, #gvUsersList TR TH div, #gvUsersList TR TD div, #gvCAHist TR TD, #gvCAHist TR TH, #gvCAHist TR TH div, #gvCAHist TR TD div,
        #gvCAReqHist TR TD, #gvCAReqHist TR TH, #gvCAReqHist TR TH div, #gvCAReqHist TR TD div {
            overflow: visible;
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
            font-size: 0.8em;
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
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
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
        <div class="cd-main-content">
            <!-- Sidebar -->
            <div class="row menu-bg">
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2" style=" padding:0px;margin:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
                  <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px">
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
                        <div class="row " style="margin-top:70px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="main-content" style="width: 100%;">
                            <div class="row ">
                                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"  >
                                           <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-info-circle" aria-hidden="true"></i></span><%=Session["SOrgName"].ToString().ToUpper() %> Users</div>
                                   </div>
                             </div>
                            
                             <div class="row ">
                                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                            
                            
                            <header>
                                <table width="100%">
                                    <tr>
                                        <td width="75%">
                                            <h2>
                                            </h2>
                                        </td>
                                        <td width="25%" style="text-align: right">
                                            <input type="button" value="   Add New User" class="btn btn-info" onclick="window.location.href = 'CreateUser.aspx'; showProgress()" />
                                            <asp:Button ID="btnReloadData" runat="server" Text="   Refresh" CssClass="btn btn-info" OnClick="ReloadData" />
                                        </td>
                                    </tr>
                                </table>
                            </header>
                                       </div>
                                 </div>

                            <section>
                                <div id="dvinv" runat="server" visible="true">
                                    <div>
                                        <div class="row ">
                                                <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-zero">
                                                         <asp:Label ID="lblMsg" runat="server" CssClass=" " ForeColor="Red"></asp:Label>
                                                </div>
                                        </div>
                                        <div class="row ">
                                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 padd-zero">
                                                    <div class="col-sm-5 padd-zero">
                                                        <label class="form-label label_setting" for="lastname"> Select users from Company Code:&nbsp;
			                                             </label>
                                                        </div>
                                                        <div class="col-sm-7 padd-zero">
                                                            <asp:DropDownList  ID="ddlAllCompCodes" runat="server" DataTextField="BusinessType" DataValueField="CompCode" class="selectpicker form-contro" data-show-subtext="true" data-live-search="true"
                                                                AutoPostBack="true" OnSelectedIndexChanged="ddlAllCompCodes_SelectedIndexChanged" Width="200px">
                                                            </asp:DropDownList>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                         
                                        <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />

                                    <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                   <div style="" class="table-responsive">
                                                    <table width="100%">
                                                    <tr>
                                                        <td>
                                                            
                                        <isx:CoolGridView AllowPaging="false" ID="gvUsersList" runat="server" Height="400px"
                                            AutoGenerateColumns="false" GridLines="None" ShowHeader="true" OnRowDataBound="gvUsersList_RowDataBound" >
                                            <Columns>
                                                <asp:TemplateField>
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkFName" runat="server" Text="FirstName" CommandArgument="FName"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%# Eval("FName")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="LastName">
                                                    <ItemTemplate>
                                                        <label><%# Eval("LName")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="260px" ControlStyle-Width="260px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkEmail" runat="server" Text="Email" CommandArgument="Email"
                                                            OnCommand="SortExpression" CssClass="lnk">
                                                        </asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%# Eval("Email")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText=" Job Title" HeaderStyle-Width="185px" ControlStyle-Width="185px">
                                                    <ItemTemplate>
                                                        <label><%# Eval("Designation")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="180px" ControlStyle-Width="180px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkMgrName" runat="server" Text="Manager Name" CommandArgument="ManagerEmail"
                                                            OnCommand="SortExpression" CssClass="lnk">
                                                        </asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%# Eval("ManagerEmail")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField>
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkLevel" runat="server" Text="UserGroup" CommandArgument="UserGroup"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%# Eval("UserGroup")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Edit" HeaderStyle-Width="70px" ControlStyle-Width="70px">
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnkEditBtn" runat="server" OnClick="Edit" Text="Edit"><img src="../images/icons/pencil.png" /></asp:LinkButton>
                                                        <asp:HiddenField ID="hdnLvl" runat="server" Value='<%# Eval("Subdomain")%>' />
                                                        <asp:HiddenField ID="hdnLvlID" runat="server" Value='<%# Eval("LevelID")%>' />
                                                        <asp:HiddenField ID="hdnSelUserID" runat="server" Value='<%# Eval("UserID")%>' />
                                                        <asp:HiddenField ID="hdnSelEmail" runat="server" Value='<%# Eval("Email")%>' />
                                                        <asp:HiddenField ID="hdnSelAppFlag" runat="server" Value='<%# Eval("AppFlag")%>' />
                                                        <asp:HiddenField ID="hdnSelSlfFlag" runat="server" Value='<%# Eval("IsSelfApproval")%>' />
                                                        <asp:HiddenField ID="hdnUserGroup" runat="server" Value='<%# Eval("userGroup")%>' />
                                                        <asp:HiddenField ID="hdnCompCode" runat="server" Value='<%# Eval("compCode")%>' />
                                                        <asp:HiddenField ID="hdnIsActive" runat="server" Value='<%# Eval("IsActive")%>' />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderStyle-Width="70px" ItemStyle-Width="70px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="LinkButton1" runat="server" Text="Action" CommandArgument="IsActive"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnkBinDelete" runat="server" OnClick="Delete" Text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                        </isx:CoolGridView>
                                                            </td>
                                                        </tr>
                                                            </table>
                                        </div></div>
                                        </div>
                                    <asp:HiddenField ID="hdnAPCount" runat="server" />
                                    <asp:HiddenField ID="hdnAdminCount" runat="server" />
                                    <asp:HiddenField ID="hdnMgrCount" runat="server" />
                                    <asp:HiddenField ID="hdnIsActive1" runat="server" />
                                </div>
                                <asp:Panel ID="pnlAddEdit" runat="server" DefaultButton="btnSubmit1" Style="display: none;">
                                    <div class="main-content" style="height: auto; width: auto">
                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                     User Details
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                          <asp:Button ID="btnSubmit1" runat="server" type="submit" Text="   Save" CssClass="btn btn-info" OnClick="btnSubmit_Click" />&nbsp;
                                                            <asp:Button Width="70" ID="btnCancel1" runat="server" Text="   Close" CssClass="btn btn-info" />

                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        <header>
                                             
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <table class="tablemain">
                                                    <tr>
                                                        <td>
                                                            <div id="dvError" runat="server"  style="width:600px;">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>First Name:
                                                                            </label>
                                                                        </small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox runat="server" ID="txtFirstName"  CssClass="form-control" onchange="javascript:captalize('txtFirstName')" />
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Last Name:
                                                                            </label>
                                                                        </small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox runat="server" ID="txtLastName"  CssClass="form-control" onchange="javascript:captalize('txtLastName')" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Email:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox  CssClass="form-control" runat="server" ID="txtEmail" />
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Phone:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox  CssClass="form-control" runat="server" ID="txtPhone" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Job Title:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox  CssClass="form-control" runat="server" ID="txtDesignation" />
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Employee ID:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox  CssClass="form-control" ID="txtEmpID" runat="server"></asp:TextBox>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Company Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCompCode"  CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>Department Code:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlDeptCodes"  CssClass="form-control" runat="server" DataValueField="CodeKey" DataTextField="CodeKey"
                                                                            Width="150px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>State:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlRgnCode"  CssClass="form-control" runat="server" DataTextField="CodeKey" DataValueField="CodeKey"
                                                                            Width="150px" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>City:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCities"  CssClass="form-control" runat="server"></asp:TextBox>
                                                                        <cc1:AutoCompleteExtender   ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                            CompletionListItemCssClass="listItem"
                                                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                        </cc1:AutoCompleteExtender>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                <em>*</em>User Group:</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:DropDownList ID="ddlGroups"  CssClass="form-control" runat="server" DataValueField="userGroup" DataTextField="groupDesc"
                                                                            OnSelectedIndexChanged="ddlGroups_SelectedIndexChanged" AutoPostBack="true" Width="150px">
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td colspan="2" width="50%">
                                                                        <div id="dvLmtAmnt" runat="server">
                                                                            <table width="100%">
                                                                                <tr>
                                                                                    <td class="lbl" style="width: 44%">
                                                                                        <small>
                                                                                            <label>
                                                                                                Approval Limit:</label></small>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label>
                                                                                            <asp:Label  CssClass="form-control" ID="lblApprovalLimit" Style="width:100% !important;" runat="server"></asp:Label></label>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <div id="dvManager" style="width: 100%">
                                                                            <table style="width: 100%">
                                                                                <tr>
                                                                                    <td class="lbl" style="width: 35%">
                                                                                        <small>
                                                                                            <label>
                                                                                                Manager Email:</label></small>
                                                                                    </td>
                                                                                    <td style="width: 65%">
                                                                                        <asp:DropDownList CssClass="form-control"  ID="ddlManagers" runat="server" DataTextField="Email" DataValueField="UserID"
                                                                                              name="ddlManagers" ClientIDMode="Static">
                                                                                        </asp:DropDownList>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <div id="dvCompCar" runat="server" style="text-align: left">
                                                                            
                                                                                        <asp:CheckBox ID="chkCompCar" runat="server" CssClass="form3Checkbox1" 
                                                                                            OnCheckedChanged="chkSelfAppr_CheckChanged"   />
                                                                                        <small>
                                                                                            <label style="text-align:left;">
                                                                                                Company car</label></small>
                                                                                     
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="lbl">
                                                                        <small>
                                                                            <label>
                                                                                Cash Advance(<%=currencySymbol %>):</label></small>
                                                                    </td>
                                                                    <td>
                                                                        <asp:TextBox ID="txtCashAdv" CssClass="form-control"  runat="server"></asp:TextBox>&nbsp;&nbsp;
                                                                            <asp:LinkButton ID="lnkCashAdvHistory"  runat="server" Text="Show History" CommandArgument="test"
                                                                                OnClick="DisplayCashAdvHistory" ToolTip="Show Cash Advance History">
                                                                    <img src="../images/icons/history_clear.png" alt="Show History"/></asp:LinkButton>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <table>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <div id="dvCsFlag">
                                                                                        <asp:CheckBox ID="chkCSEnb" runat="server" CssClass="form3Checkbox1" 
                                                                                            AutoPostBack="true"   onchange="javascript:DisReviewFlag()"
                                                                                            OnCheckedChanged="chkCSEnb_Changed" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Customer Service Enabled
                                                                                            </label>
                                                                                        </small>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <%if (Session["OrgSelfAppr"].ToString() == "1")
                                                                          {%>
                                                                        <div id="dvSelfAppr" style="text-align: center" runat="server">
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <asp:CheckBox ID="chkSelfAppr" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            OnCheckedChanged="chkSelfAppr_CheckChanged" AutoPostBack="true" Style="margin-left: -19px" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Small Business Self Approval</label></small>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                        <%} %>
                                                                    </td>
                                                                    <td colspan="2">
                                                                        <div id="dvReview" runat="server">
                                                                            <table>
                                                                                <tr>
                                                                                    <td align="left">
                                                                                        <asp:CheckBox ID="chkReview" runat="server" CssClass="form3Checkbox1" Width="130px"
                                                                                            Style="margin-left: 90px" />
                                                                                        <small>
                                                                                            <label>
                                                                                                Review Before Submit</label></small>
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
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkUsers" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popup" runat="server" DropShadow="false" PopupControlID="pnlAddEdit"
                                    TargetControlID="lnkUsers" BackgroundCssClass="modalBackground" CancelControlID="btnCancel1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlDelete" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                     Transfer Responsibilities
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                            <asp:Button Width="70" ID="btnOk" runat="server" Text="   Ok" CssClass="btn btn-info" OnClick="btnOk_Click" />
                                                        <asp:Button Width="70" ID="btnClose" runat="server" Text="   Close" CssClass="btn btn-info" />

                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                      
                                        <div style="padding: 20px">
                                            <div class="divfieldset">
                                                <table style="width: 100%">
                                                    <tr>
                                                        <td colspan="2">
                                                            <label>
                                                                <div id="dvError1" runat="server" class="alert alert-warning">
                                                                </div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div id="dvManagers1" runat="server">
                                                                <table>
                                                                    <tr>
                                                                        <td style="width: 30%; text-align: right"><small>
                                                                            <label>Manager:&nbsp;&nbsp;&nbsp;</label></small>
                                                                        </td>
                                                                        <td style="width: 70%">
                                                                            <asp:DropDownList CssClass="form-control" ID="ddlManagers1" runat="server" DataValueField="UserID" DataTextField="Email"
                                                                                Width="263px" name="ddlManagers1" ClientIDMode="Static">
                                                                            </asp:DropDownList>
                                                                            <asp:HiddenField ID="lblUID" runat="server" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkDelete" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popDelete" runat="server" DropShadow="false" PopupControlID="pnlDelete"
                                    TargetControlID="lnkDelete" BackgroundCssClass="modalBackground1" CancelControlID="btnClose">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlMessage" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td width="55%" style="vertical-align: top">
                                                        <h2 class="pophead">Alert!</h2>
                                                    </td>
                                                    <td width="45%" align="right">
                                                        <asp:Button Width="70" ID="btnMsgOK" runat="server" Text="   Ok" CssClass="buttonnew-blue" OnClick="btnMsgOK_Click" />
                                                        <asp:Button Width="70" ID="btnMsgCancel" runat="server" Text="   Close" CssClass="buttonnew-blue" OnClick="btnMsgCancel_Click" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvMessage" runat="server">
                                                </div>
                                            </div>
                                            <br />
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkMessage" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popMessage" runat="server" DropShadow="false" PopupControlID="pnlMessage"
                                    TargetControlID="lnkMessage" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="PnlReqMgrs" runat="server" CssClass="modalPopup" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td width="55%" style="vertical-align: top">
                                                        <h2 class="pophead">Transfer Responsibilities</h2>
                                                    </td>
                                                    <td width="45%" align="right">
                                                        <asp:Button Width="70" ID="btnYes" runat="server" Text="   Yes" CssClass="buttonnew-blue" OnClick="DeleteManager" />
                                                        <asp:Button Width="70" ID="btnNo" runat="server" Text="   No" CssClass="buttonnew-blue" OnClick="RetainDialog" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvReqError" runat="server">
                                                </div>
                                            </div>
                                            <br />
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkReqMgrs" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popReqMgrs" runat="server" DropShadow="false" PopupControlID="PnlReqMgrs"
                                    TargetControlID="lnkReqMgrs" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlCAHist" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">

                                        <div class="pop-page-title">
                                                <div class="row" >
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                     Cash Advance History
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                         
                                                        <asp:Button ID="btnCloseCAHist" runat="server" Text="   Close" CssClass="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                       
                                        <section>
                                            <div style="padding: 20px">
                                                <div class="divfieldset">
                                                    <isx:CoolGridView ID="gvCAHist" runat="server" AutoGenerateColumns="false"
                                                        Width="1000px" Height="300px" OnRowDataBound="gvCAHist_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkOldCAAmnt" runat="server" Text="Old CashAdv Amount" CommandArgument="oldCashAdvAmt"
                                                                        OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                    </asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("oldCashAdvAmt")%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkNewCAAmnt" runat="server" Text="New CashAdv Amount" CommandArgument="newCashAdvAmt"
                                                                        OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                    </asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%#Eval("newCashAdvAmt")%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="150px" ItemStyle-Width="150px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkModifiedDate" runat="server" Text="Modified Date" CommandArgument="modifiedDate"
                                                                        OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                    </asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label>
                                                                        <asp:Label ID="lblModfifiedOn" runat="server" Text='<%#Convert.ToDateTime(Eval("modifiedDate")).ToShortDateString()%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="120px" ItemStyle-Width="120px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkModifiedBy" runat="server" Text="ModifiedBy" CommandArgument="modifiedBy"
                                                                        OnCommand="SortExpression_CAHist" CssClass="lnk">
                                                                    </asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label>
                                                                        <asp:Label ID="lblModifiedBy" runat="server" Text=' <%#Eval("modifiedBy")%>'></asp:Label></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="View Req. Hist.">
                                                                <ItemTemplate>
                                                                    <asp:LinkButton ID="lnkEditCAReqHist" runat="server" Text="Edit" CommandArgument="test"
                                                                        OnCommand="DisplayCAReqHist"><img src="../images/icons/pencil.png" alt="View"/></asp:LinkButton>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 250px">
                                                                <label>
                                                                    No history to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCAHist" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCAHist" runat="server" DropShadow="false" PopupControlID="pnlCAHist"
                                    TargetControlID="lnkCAHist" BackgroundCssClass="modalBackground1" CancelControlID="btnCloseCAHist">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlCAReqHist" runat="server" Style="display: none">
                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0px 0px 10px 0px; min-height: 160px; min-width: 400px">
                                        <header>
                                            <table width="100%">
                                                <tr>
                                                    <td width="55%" style="vertical-align: top">
                                                        <h2 class="pophead">Expenses History
                                                        </h2>
                                                    </td>
                                                    <td width="55%" align="right">
                                                        <asp:Button ID="btnCAReqHistClose" runat="server" Text="   Close" CssClass="buttonnew-blue" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </header>
                                        <section>
                                            <div style="padding: 20px;">
                                                <div class="divfieldset">
                                                    <asp:HiddenField ID="hdnReqModDate" runat="server" />
                                                    <isx:CoolGridView ID="gvCAReqHist" runat="server" AutoGenerateColumns="false"
                                                        Width="900px" Height="300px">
                                                        <Columns>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkExpItem" runat="server" Text="RequestID" CommandArgument="RequestID"
                                                                        OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("RequestID")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="LinkButton4" runat="server" Text="Purpose" CommandArgument="Purpose"
                                                                        OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("Purpose")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="LinkButton5" runat="server" Text="ExpenseItem" CommandArgument="expItem"
                                                                        OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("expItem")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="LinkButton3" runat="server" Text="PreAmount" CommandArgument="PreAmount"
                                                                        OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("PreAmount")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="LinkButton2" runat="server" Text="ActualAmount" CommandArgument="ActualAmount"
                                                                        OnCommand="SortExpression_CAReqHist" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <%#Eval("ActualAmount")%>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div style="width: 170px">
                                                                <label>No history to display</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkCAReqHist" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popCAReqHist" runat="server" DropShadow="false" PopupControlID="pnlCAReqHist"
                                    TargetControlID="lnkCAReqHist" BackgroundCssClass="modalBackground2" CancelControlID="btnCAReqHistClose">
                                </cc1:ModalPopupExtender>
                            </section>
                        </div>
                                    </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
                      </div>
                </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->

        <script src="../js/Ajax.js"></script>
        <script src="../latestdesign/js/modernizr.js"></script>
        <script src="../js/Validation.js"></script>
        <%--<script src="../js/jquery.tools.min.js"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
         
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
            <script src="../latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
       <%-- <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script type="text/javascript">

            (function () {
                var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video".split('|');
                for (var i = 0; i < html5elmeents.length; i++) {
                    document.createElement(html5elmeents[i]);
                }
            }
      )();

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
                    $("#ddlManagers").ufd({ log: true });
                });
                $(function () {
                    $("#ddlManagers1").ufd({ log: true });
                });
                $(function () {
                    $("#ddlDeptCodes").ufd({ log: true });
                });
                $(function () {
                    $("#ddlRgnCode").ufd({ log: true });
                });
                $(function () {
                    $("#ddlGroups").ufd({ log: true });
                });
                $(function () {
                    $("#ddlAllCompCodes").ufd({ log: true });
                });
            }

            function refreshUsers() {
                $(".btnRefresh").click();
            }

            $(document).ready(function () {
                $(function () {
                    $("#ddlAllCompCodes").ufd({ log: true });
                });
            });

            function DisReviewFlag() {
                if (document.getElementById('chkCSEnb').checked) {
                    document.getElementById('dvReview').style.display = 'block';
                    document.getElementById('chkReview').style.display = 'block';
                    document.getElementById('chkReview').checked = false;
                } else {
                    document.getElementById('dvReview').style.display = 'none';
                    document.getElementById('chkReview').style.display = 'none';
                    document.getElementById('chkReview').checked = false;
                }
            }
        </script>
    </form>
</body>
</html>
