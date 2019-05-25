<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UsersReg.aspx.cs" Inherits="UsersReg"
    EnableEventValidation="false" ValidateRequest="false" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Users Registration</title>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <!-- Bootstrap -->
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    	<link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="latestdesign/css/animate.css" rel="stylesheet">
    <link href="latestdesign/css/approveiti2.css" rel="stylesheet">
   <%-- <link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
    <link href="latestdesign/css/inner-page-style.css" rel="stylesheet">
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <!--[if lt IE 9]>
<script src="js/html5.js"></script>
<script src="js/PIE.js"></script>
<![endif]-->
    <!-- jquerytools -->
    <style>
        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 0px;
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
    </style>
</head>
<body onload="LoadList()" class="ice-bg">
    
    <form id="form" runat="server" autocomplete="off">
        <cc1:ToolkitScriptManager ID="Scr1" runat="server">
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
        <header class=" ">
            <img class="applogo" src="latestdesign/img/approveIt_logo.png">
        </header>
        <!-- Main Section -->
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
        <div class="clear">
            <br />
        </div>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                <asp:AsyncPostBackTrigger ControlID="btnRefreshAlarms" EventName="Click" />
                <asp:AsyncPostBackTrigger ControlID="btnSave" EventName="Click" />
            </Triggers>
            <ContentTemplate>
                <div class="container">
                <asp:Button ID='btnRefreshAlarms' class='btnRefreshAlarms' runat='server' Style='display: none;' />
                <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                    <div class="container container-setting bg-white card">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                                <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-pencil" aria-hidden="true"></i></span>USER REGISTRATION</div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                                <div class="block-title">ORGANIZATION DETAILS</div>
                            </div>
                            <div id="dvError" style="padding: 2px" runat="server"></div>
                            <div class="col-xs-12 col-sm-12 col-md-4 padd-zero" style="margin-top: 10px;">
                                <div class="form-group">
                                     <div class="col-sm-5"> 
                                    <label class="form-label label_setting" for="pwd"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Organization:</label>
                                  </div>
<div class="col-sm-7">  <asp:TextBox ID="txtOrganization" runat="server" OnTextChanged="txtOrganization_TextChanged"
                                        AutoPostBack="true" class="form-control "></asp:TextBox>
                                    <asp:HiddenField ID="hdnOrg" runat="server" />
                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtOrganization"
                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetOrgs" UseContextKey="True" CompletionListCssClass="completionList"
                                        CompletionListItemCssClass="listItem"
                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                    </cc1:AutoCompleteExtender>
                                </div>   </div>
                            </div>
							<div class="clearfix"></div>
                            <br />
                            <div id="dvDept" runat="server">
                               
                                    <div class="align-center">
                                        <div class="form-group col-xs-12 col-sm-12 col-md-4  padd-zero">
                                            <div class="selectWrapper">
                                            <div class="col-sm-5">    <label class="form-label label_setting" for="group"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Company</label>
                                                <br />
												</div>
<div class="col-sm-7">
                                                <asp:DropDownList ID="ddlCompCode" runat="server" DataTextField="CompCode" DataValueField="CompCode"
                                                    OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged" AutoPostBack="true" class="selectBox form-control">
                                                </asp:DropDownList>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                            <div class="selectWrapper">
                                              <div class="col-sm-5">  <label class="form-label label_setting" for="group"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Department</label>
                                                <br />
												</div>
<div class="col-sm-7">
                                                <asp:DropDownList ID="ddlDeptCodes" runat="server" DataValueField="Description" DataTextField="CodeKey" class="selectBox form-control">
                                                </asp:DropDownList>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                            <div class="selectWrapper">
                                             <div class="col-sm-5">   <label class="form-label label_setting" for="group"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;State</label>
                                                <br />
												</div>
<div class="col-sm-7">
                                                <asp:DropDownList ID="ddlRgnCode" runat="server" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true" class="selectBox form-control">
                                                </asp:DropDownList>
                                            </div> </div>
                                        </div>
                                    </div>
                               
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                                <div class="block-title">USER DETAILS</div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="align-center">
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                      <div class="col-sm-5">  <label class="form-label label_setting" for="firstname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;First Name</label>
                                      </div>
<div class="col-sm-7">  <asp:TextBox ID="txtFirstName" runat="server" onchange="javascript:captalize('txtFirstName')" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="col-sm-5"><label class="form-label label_setting" for="lastname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Last Name</label>
                                      </div>
<div class="col-sm-7">  <asp:TextBox ID="txtLastName" runat="server" onchange="javascript:captalize('txtLastName')" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                  
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="col-sm-5"><label class="form-label label_setting" for="phonenumber"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Phone Number</label>
                                       </div>
<div class="col-sm-7"> <asp:TextBox ID="txtPhone" runat="server" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="col-sm-5"><label class="form-label label_setting" for="email"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;eMail</label>
                                        </div>
<div class="col-sm-7"><asp:TextBox ID="txtEmail" runat="server" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                   
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="col-sm-5"><label class="form-label label_setting" for="password"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Password</label>
                                       </div>
<div class="col-sm-7"> <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                       <div class="col-sm-5"> <label class="form-label label_setting" for="confirmpassword"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Confirm Password</label>
                                     </div>
<div class="col-sm-7">   <asp:TextBox ID="txtConfirmPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                   

                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="col-sm-5"><label class="form-label label_setting" for="jobtitle"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Job Title</label>
                                     </div>
<div class="col-sm-7">   <asp:TextBox ID="txtDesignation" runat="server" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                       <div class="col-sm-5"> <label class="form-label label_setting" for="employeeid"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Employee ID</label>
                                    </div>
<div class="col-sm-7">    <asp:TextBox ID="txtEmpID" runat="server" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                  
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                      <div class="col-sm-5">  <label class="form-label label_setting" for="manageremail"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Manager eMail</label>
                                      </div>
<div class="col-sm-7">  <asp:TextBox ID="txtManager" runat="server" class="form-control "></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                     <div class="col-sm-5">   <label class="form-label label_setting" for="city"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;City</label>
                                   </div>
<div class="col-sm-7">     <asp:TextBox ID="txtCities" runat="server" class="form-control "></asp:TextBox>
                                        <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
                                            MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
                                            CompletionListItemCssClass="listItem"
                                            CompletionListHighlightedItemCssClass="itemHighlighted">
                                        </cc1:AutoCompleteExtender>
                                    </div>
                                    </div>
                                   
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                        <div class="selectWrapper">
                                        <div class="col-sm-5">    <label class="form-label label_setting" for="group">Group</label>
                                            <br /></div>
<div class="col-sm-7">
                                            <asp:DropDownList ID="ddlGroup" runat="server" DataTextField="groupDesc" DataValueField="userGroup"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true"></asp:DropDownList>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-4 padd-zero">
                                      <div class="col-sm-12">
                                       <%-- <asp:CheckBox ID="chkCompCar" runat="server" />
                                        <label for="chkCompCar" style="color: #434a4f">Company Car</label>--%>
                                           <div class="checkbox">
                                                    <label>
                                                      <input type="checkbox" ID="chkCompCar" runat="server" />
                                                      <i class="input-helper"></i>
                                                      <span class="text-dark-gray">Company Car</span>
                                                    </label>
                                                  </div> 
                                      </div>  
                                       
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="form-group btn-lg col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="pull-right">
                                            <asp:Button ID="btnSave" runat="server" Text="Save" class="btn btn-success" OnClick="btnSave_Click"></asp:Button>
                                            <asp:Button ID="btnReset" runat="server" Text="Reset" class="btn btn-warning" OnClick="btnReset_Click"></asp:Button>
                                            <asp:Button ID="btnBack" runat="server" Text="Back To Login" class="btn btn-primary" OnClick="btnBack_Click" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </asp:Panel>
                    </div>
            </ContentTemplate>
        </asp:UpdatePanel>
        <footer id="footer" class="row">
            <div class="container text-center">
                <span class="fr">&copy; 2018. All rights reserved. </span><strong>Xtramile Soft</strong> | ApproveIt
            </div>
        </footer>
        <!-- Main Section End -->
    </form>
    <%--<script src="js/jquery.tools.min.js"></script>--%>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <%--<script src="js/jquery.ui.min.js"></script>--%>
    <%--<script src="js/global.js"></script>--%>
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="latestdesign/js/bootstrap.min.js"></script>
    <script src="latestdesign/js/lazyload.min.js"></script>
    
<script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>

    <%--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>--%>
    <%--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>--%>
    <script src="js/Ajax.js" type="text/javascript"></script>
<%--    <script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
    <script>
        function DisplayApprLimit(id1, id2) {
            if (document.getElementById(id1).checked) {
                document.getElementById(id2).checked = false;
                if (id1 == 'cbManager')
                    document.getElementById("dvApprLmt").style.display = 'block';
                else {
                    document.getElementById("dvApprLmt").style.display = 'none';
                    document.getElementById("txtApprLimit").value = '';
                }
            }
            else {
                document.getElementById("dvApprLmt").style.display = 'none';
                document.getElementById("txtApprLimit").value = '';
            }
        }

        //Autocomplete Organization textbox begin
        $(document).ready(function () {

            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            document.getElementById("hdnOrg").value = document.getElementById('txtOrganization').value;
            LoadList();
        });

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlGroup").ufd({ log: true });
            });
            $(function () {
                $("#ddlCompCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlRgnCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlDeptCodes").ufd({ log: true });
            });
            document.getElementById("hdnOrg").value = document.getElementById('txtOrganization').value;
            LoadList();
        }

        function LoadList() {

        }

    </script>
</body>
</html>
