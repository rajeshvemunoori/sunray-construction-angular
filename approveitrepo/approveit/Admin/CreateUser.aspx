<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateUser.aspx.cs" Inherits="Admin_CreateUser"
    EnableEventValidation="false" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|fieldset|label1|wrapper".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        }
  )();
    </script>
    <title>ApproveIt-Create User</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css" />
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
    <style>
        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 14px;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        .subheader {
            color: #403e3e;
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 13px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            background-color: #C6E2FF;
            padding-left: 10px;
        }

        .tablemain {
            width: 100%;
        }

            .tablemain table {
                width: 100%;
            }

            .tablemain th, td {
                padding: 5px;
            }

            .tablemain input {
                width: 135px;
            }

        .lbl {
            text-align: right;
        }

        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
            height: 120px;
            overflow: auto;
            background-color: #FFFFFF;
            /*border-radius: 3px 3px;*/
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
            /*background-color:#e4e4e4; Upper gradient
            background-color:#e3e3e3; Lower gradient
            background-color:#9e9e9e; border*/
            /*border-radius: 3px;*/
            border: 1px solid #aaaaaa;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form" runat="server" autocomplete="off">
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
        <div id="wrapper">
            <!--header-->
            <uc2:top ID="top" runat="server" />
            <!--header-->
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <div class="row ">

                        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                            <uc8:leftmenu ID="leftmenu" runat="server" />
                        </div>
                        <!-- Sidebar End -->
                        <!-- Main Section -->
                        <!-- Main Section -->
                        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style="">
                            <div class=" container-fluid  cd-main-content">
                                <section class="main-section grid_7">
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

                                            <div class="row ">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 70px;">
                                                    <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Create User</div>
                                                </div>
                                            </div>








                                            <div class="main-content" style="width: 100%; padding-bottom: 100px;">

                                                <header>
                                                    <table width="100%">
                                                        <tr>

                                                            <td align="right" style="vertical-align: top">
                                                                <asp:Button ID="btnSave" runat="server" Text="   Save" CssClass="btn btn-success" OnClick="btnSave_Click" />
                                                                <asp:Button ID="btnReset" runat="server" Text="   Reset" CssClass="btn btn-info" OnClick="btnReset_Click" />
                                                                <input type="button" value="   List of Users" class="btn btn-info" onclick="window.location.href = 'Users1.aspx'; showProgress();" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </header>
                                                <section class="container_1 clearfix">
                                                    <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                                        <div class="divfieldset">
                                                            <div id="dvError" runat="server" style="color: Red; text-align: center; font-size: 1.15em;">
                                                            </div>
                                                          <%--  <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="subheader">
                                                                        <h4>Personal Details</h4>
                                                                    </div>
                                                                </div>
                                                            </div>--%>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <small>
                                                                        <label>Organization:</label></small><b><%=Session["SOrgName"] %></b>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix" style="margin-bottom: 20px;"></div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; FirstName:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtFirstName" CssClass="form-control" runat="server" onchange="javascript:captalize('txtFirstName')"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; LastName:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtLastName" runat="server" CssClass="form-control" onchange="javascript:captalize('txtLastName')"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Phone:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtPhone" CssClass="form-control" runat="server"></asp:TextBox>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Email:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">

                                                                            <asp:TextBox ID="txtEmail" CssClass="form-control" runat="server"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Password:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled" CssClass="form-control"></asp:TextBox>

                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Confirm Password:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtConfirmPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled" CssClass="form-control"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                                                        <%--<input type="checkbox" id="chkPwd" runat="server" cssclass="form3Checkbox6" />--%>
                                                                        <asp:CheckBox ID="chkPwd" runat="server" />
                                                                        <label><small>Change password on First Login</small></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Job Title:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">

                                                                            <asp:TextBox ID="txtDesignation" runat="server" CssClass="form-control"></asp:TextBox>
                                                                            <asp:HiddenField ID="hdnApCnt" runat="server" />
                                                                            <asp:HiddenField ID="hdnMgrCnt" runat="server" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Employee ID:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtEmpID" runat="server" CssClass="form-control"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Company Code:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="BusinessType" DataValueField="CompCode"
                                                                                class="selectpicker form-control" data-show-subtext="true" data-live-search="true" AutoPostBack="true" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged">
                                                                            </asp:DropDownList>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Department Code:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">

                                                                            <asp:DropDownList ID="ddlDeptCodes" runat="server" DataValueField="CodeKey" DataTextField="CodeKey"
                                                                                class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; State:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true"
                                                                                class="selectpicker form-control" data-show-subtext="true">
                                                                            </asp:DropDownList>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;City:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtCities" runat="server" class=" form-control"></asp:TextBox>
                                                                            <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                                                                MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                                                                CompletionListItemCssClass="listItem"
                                                                                CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                            </cc1:AutoCompleteExtender>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Group:    
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:DropDownList ID="ddlGroups" runat="server" DataValueField="userGroup" DataTextField="groupDesc"
                                                                                OnSelectedIndexChanged="ddlGroups_SelectedIndexChanged" AutoPostBack="true" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>

                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8  ">
                                                                        <div id="dvGroupTip" runat="server" style="float: left; padding-left: 0.5em">
                                                                            <asp:Panel ID="Panel1" runat="server">
                                                                                <small>
                                                                                    <label>
                                                                                        To view profiles assigned to the selected group, open <a href="../UserGroups.aspx"
                                                                                            target="_blank" onclick="openGroups()">Group Profiles</a> screen.</label></small>
                                                                            </asp:Panel>
                                                                            <asp:Panel ID="pnlApprLimitTip" runat="server" Height="30px" Width="30px">
                                                                                <img src="../images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
                                                                            </asp:Panel>
                                                                            <cc1:BalloonPopupExtender ID="BalloonPopupExtender1" runat="server" TargetControlID="pnlApprLimitTip"
                                                                                BalloonPopupControlID="Panel1" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
                                                                                ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
                                                                            </cc1:BalloonPopupExtender>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>
                                                            <div class="row">

                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">

                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div id="dvLimit" runat="server">
                                                                            <div class="col-sm-5 padd-zero">
                                                                                <label class="form-label label_setting" for="lastname">
                                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Approval Limit   
                                                                                </label>
                                                                            </div>
                                                                            <div class="col-sm-7 padd-zero">
                                                                                <asp:Label ID="lblApprLimit" runat="server"></asp:Label></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        &nbsp;
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="clearfix"></div>
                                                            <div class="row">

                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">

                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div id="dvManager" runat="server">
                                                                            <div class="col-sm-5 padd-zero">
                                                                                <label class="form-label label_setting" for="lastname">
                                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;  Manager Email:   
                                                                                </label>
                                                                            </div>
                                                                            <div class="col-sm-7 padd-zero">

                                                                                <asp:DropDownList ID="ddlManagers" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" name="ddlManagers"
                                                                                    ClientIDMode="Static">
                                                                                </asp:DropDownList>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div id="dvCompCar" runat="server" style="">
                                                                            <%-- <div class="checkbox">--%>
                                                                            <asp:CheckBox ID="chkCompCar" runat="server" />
                                                                            <small>
                                                                                <label>
                                                                                    Company Car</label>
                                                                            </small>
                                                                            <%--</div>--%>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div id="dvApproval" runat="server" style="display: none;">

                                                                            <div class="col-sm-5 padd-zero">
                                                                                <label class="form-label label_setting" for="lastname">Approval Limit can't exceed</label>
                                                                            </div>
                                                                            <div class="col-sm-7 padd-zero">
                                                                                <asp:TextBox runat="server" class="form-control" ID="lblApproval" ReadOnly="true"></asp:TextBox>
                                                                            </div>

                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="row">

                                                                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 ">
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div class="col-sm-5 padd-zero">
                                                                            <label class="form-label label_setting" for="lastname">
                                                                                Cash Advance(<%=currencySymbol %>):  
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-sm-7 padd-zero">
                                                                            <asp:TextBox ID="txtCashAdv" class="form-control" runat="server"></asp:TextBox>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <div id="dvCsFlag">
                                                                            <asp:CheckBox ID="chkCSEnb" runat="server" CssClass="form3Checkbox1"
                                                                                AutoPostBack="true" onchange="javascript:DisReviewFlag()"
                                                                                OnCheckedChanged="chkCSEnb_Changed" />
                                                                            <small>
                                                                                <label>
                                                                                    Customer Service Enabled</label></small>

                                                                        </div>

                                                                    </div>
                                                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  ">
                                                                        <%if (Session["OrgSelfAppr"].ToString() == "1")
                                                                          {%>
                                                                        <div id="dvSelfAppr" runat="server" style="text-align: center">

                                                                            <asp:CheckBox ID="chkSelfAppr" runat="server" CssClass="form3Checkbox1"
                                                                                OnCheckedChanged="chkSelfAppr_CheckChanged" AutoPostBack="true" />
                                                                            <small>
                                                                                <label>
                                                                                    Small Business Self Approval</label>
                                                                            </small>

                                                                        </div>
                                                                        <%} %>
                                                                        <div id="dvReview" runat="server">
                                                                            <asp:CheckBox ID="chkReview" runat="server" CssClass="form3Checkbox1" />
                                                                            <small>
                                                                                <label>
                                                                                    Review Before Submit</label></small>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </asp:Panel>
                                                </section>
                                            </div>
                                        </ContentTemplate>
                                    </asp:UpdatePanel>
                                </section>
                            </div>
                            <!-- Main Section End -->
                        </div>
                        <div id="push">
                        </div>
                    </div>
                </div>

            </section>
        </div>

        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
    <script src="../latestdesign/js/modernizr.js"></script>
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js"></script>
    <%--<script src="../js/jquery.tools.min.js"></script>--%>
    <script src="../latestdesign/js/jquery-2.1.4.js"></script>
    <script src="../latestdesign/js/bootstrap.min.js"></script>
    <script src="../latestdesign/js/jquery.menu-aim.js"></script>
    <script src="../latestdesign/js/main.js"></script>
    <script src="../latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
    <%--    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
    <script type="text/javascript">
        $('.selectpicker').selectpicker();
        document.onmousedown = disableclick;
        function disableclick(e) {
            if (e.button == 2) {
                alert("Right Click Disabled");
                return false;
            }
        }

        function DoOnAjaxPostback() {
            $(function () {
                //    $("#ddlManagers").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlCompCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlDeptCodes").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlRgnCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlGroups").ufd({ log: true });
                //});
            }

        $(document).ready(function () {
            $(function () {
                //    $("#ddlManagers").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlCompCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlDeptCodes").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlRgnCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlGroups").ufd({ log: true });
                //});
            });

            function openGroups() {
                return confirm('This link will be opened in a new tab. Click Ok to continue.');
            }

            function DisReviewFlag() {
                if (document.getElementById('chkCSEnb').checked) {
                    document.getElementById('dvReview').style.display = 'block';
                    document.getElementById('chkReview').style.display = 'block';
                    document.getElementById('chkReview').checked == false;
                } else {
                    document.getElementById('dvReview').style.display = 'none';
                    document.getElementById('chkReview').style.display = 'none';
                    document.getElementById('chkReview').checked == false;
                }
            }
    </script>
    </div>
</body>
</html>
