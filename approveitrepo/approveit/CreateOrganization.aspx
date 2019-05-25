

	<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateOrganization.aspx.cs"
	   Inherits="CreateOrganization" %>
	<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
	
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
		  <title>ApproveIt | Organization Registration</title>
		  <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/approveIt_favicon.png">
           <link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
		  <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
		  <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
		  <link href="latestdesign/css/inner-page-style.css" rel="stylesheet">
		  <link href="latestdesign/css/animate.css" rel="stylesheet">
		  <link href="latestdesign/css/approveiti2.css" rel="stylesheet">
           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/css/bootstrap-select.min.css" />
		  <%--<link href="Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
		  <link href="Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>
		  

		  <!--[if lt IE 9]>
		  <script src="js/html5.js"></script>
		  <script src="js/PIE.js"></script>
		  <![endif]-->
		  <!--[if lte IE 9]>
		  <link rel="stylesheet" media="screen" href="css/ie.css" />
		  <script type="text/javascript" src="js/ie.js"></script>
		  <![endif]-->
		  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		  <!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		  <![endif]-->
		  <style>
			 /*label {            
			 font-family: Tahoma, Arial, sans-serif;
			 font-size: 1.4em;
			 color: #555555;
			 }
			 label em {
			 font-weight: bold;
			 }
			 .subheader {
			 color: #fff;
			 font-family: Tahoma, Arial, sans-serif;
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
			 .tablemain th, td {
			 padding: 5px;
			 }
			 .tablemain input[type=text], .tablemain input[type=password] {
			 width: 170px;
			 height: 20px;
			 }
			 .tablemain select {
			 width: 185px;
			 height: 20px;
			 }
			 .lbl {
			 text-align: right;
			 }
			 .uploader input {
			 width: 100px;
			 }
			 .bgcolor {
			 background-color: #82CFFD;
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
			 }*/
		      .selectpicker > li {
		      margin:0;}
		      .popover-content {
		      min-width:200px;
              }
		  </style>
	   </head>
	   <body onload="LoadList()" class="ice-bg">
		  <form id="form" runat="server">
			 <cc1:ToolkitScriptManager ID="Scr1" runat="server">
			 </cc1:ToolkitScriptManager>
			 <header class=" ">
				<img class="applogo" src="latestdesign/img/approveIt_logo.png">
			 </header>
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
			 <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
				<Triggers>
				   <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
				   <asp:AsyncPostBackTrigger ControlID="btnRefreshAlarms" EventName="Click" />
				</Triggers>
				<ContentTemplate>
				   <asp:Button ID='btnRefreshAlarms' class='btnRefreshAlarms' runat='server' Style='display: none;' />
				   <div class="container container-setting bg-white card">
				   <div class="row">
					  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
						 <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-building" aria-hidden="true"></i></span>ORGANIZATION REGISTRATION</div>
					  </div>
				   </div>
				   <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
					  <div class="row ">
						 <div id="dvError" runat="server" style="color: Red; text-align: center; font-size: 1.15em;">
						 </div>
						 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
							<div class="block-title">ORGANIZATION DETAILS</div>
						 </div>
						 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
							<div class="align-center">
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="orgname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Organization Name</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtOrganizationName" runat="server" class="form-control  " onkeyup="fillFields();" onchange="javascript:OrgName('txtOrganizationName')"></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Organization Code</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtOrgcode" class="form-control" runat="server"></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="companyname">Company Name</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtCompName" class="form-control" runat="server"></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="companycode">Company Code</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtCompCode" runat="server" class="form-control"></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="addr1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Address 1</label>
								  </div>
								  <div class="col-sm-7">
									 <textarea class="form-control" rows="2" id="txtAddr1" runat="server" ></textarea>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="addr2">Address 2</label>
								  </div>
								  <div class="col-sm-7">
									 <textarea class="form-control" rows="2" id="txtAddr2" runat="server" ></textarea>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="city"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;City</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtCities" runat="server" class="form-control  " onchange="javascript:splitCityZip(this);"></asp:TextBox>
									 <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtCities"
										MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetCities" UseContextKey="True" CompletionListCssClass="completionList"
										CompletionListItemCssClass="listItem"
										CompletionListHighlightedItemCssClass="itemHighlighted">
									 </cc1:AutoCompleteExtender>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="state"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;State</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlRgnCode" runat="server" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" OnSelectedIndexChanged="ddlRgnCode_SelectedIndexChanged" AutoPostBack="true">
										</asp:DropDownList>
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="country"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Country</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlCountry" runat="server" DataTextField="Description" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" >
										</asp:DropDownList>
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="zipcode">ZipCode</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtZipCode" class="form-control" runat="server"></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="industrytype"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Industry type</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlIndType" runat="server" DataTextField="Description" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" >
										</asp:DropDownList>
										<asp:HiddenField ID="hdnApp" runat="server" />
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="url">URL</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtUrl" runat="server" class="form-control"></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label for="companylogo" class="form-label label_setting">Company Logo<a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff and .tif. Maximum file size should be 2MB."><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
									 </label>
								  </div>
								  <div class="col-sm-7">
									 <cc1:AsyncFileUpload ID="fupd1" CompleteBackColor="White" runat="server" UploaderStyle="Traditional"
										CssClass="uploader" UploadingBackColor="#CCFFFF" ThrobberID="Throbber" OnClientUploadComplete="showConfirmation" Width="200px"
										OnUploadedComplete="fileUploadComplete" Style="float: left; border: 1px solid #aaaaaa" />
									 <%-- <div style="float: right; padding-left: 0.5em">
										<a href="#" id="tooltip">
											<img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
											<span><small>
												<label>File types allowd are .png, .jpg, .jpeg, .tiff and .tif. Maximum file size should be 2MB.</label></small>
											</span>
										</a>
										</div>--%>
									 <asp:Label ID="Throbber" runat="server" Style="display: none">
										<img src="images/indicator.gif" align="absmiddle" alt="loading" />
									 </asp:Label>
									 <asp:Label ID="lblFileName" runat="server"></asp:Label>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							</div>
						 </div>
						 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
							<div class="block-title">ADMIN DETAILS</div>
						 </div>
						 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
							<div class="align-center">
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="adminfirstname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Admin Firstname</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtAdminFName" runat="server" onchange="javascript:captalize('txtAdminFName')" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="adminlastname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Admin Lastname</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtAdminLName" runat="server" onchange="javascript:captalize('txtAdminLName')" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="phonenumber"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Phone</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtPhone" runat="server" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="email"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Email
									 <a href="#" data-toggle="popover" data-trigger="hover" data-content="This email will be your login email as admin user for this organization and company."><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
									 </label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtAdminEmail" runat="server" class="form-control  "></asp:TextBox>
									 <%--<div style="float: left; padding-left: 0.5em">
										<a href="#" id="tooltip1">
											<img src="images/lightbulb_32.png" class="fl" alt="Tip" height="15px" width="15px" />
											<span><small>
												<label>This email will be your login email as admin user for this organization and company.</label></small>
											</span>
										</a>
										</div>--%>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="password"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Password</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="confirmpassword"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Confirm Password</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtConfirmPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="currency"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Currency</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlCurrency" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" >
										</asp:DropDownList>
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="measures"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Measures</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlMeasure" runat="server" DataTextField="CodeKey" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" >
										</asp:DropDownList>
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5">
									 <label class="form-label label_setting" for="jobtitle"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Job Title</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtJobTitle" runat="server" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="clearfix"></div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="col-sm-5"><label class="form-label label_setting" for="employeeid"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Employee ID</label>
								  </div>
								  <div class="col-sm-7">
									 <asp:TextBox ID="txtEmpID" runat="server" class="form-control  "></asp:TextBox>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5">
										<label class="form-label label_setting" for="department">Department</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlDept" runat="server" DataTextField="Description" DataValueField="CodeKey" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" >
										</asp:DropDownList>
									 </div>
								  </div>
							   </div>
							   <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
								  <div class="selectWrapper">
									 <div class="col-sm-5"><label class="form-label label_setting" for="group">Security Role</label><br />
									 </div>
									 <div class="col-sm-7">
										<asp:DropDownList ID="ddlGroup" runat="server" DataValueField="userGroup" DataTextField="groupDesc" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" 
										   OnSelectedIndexChanged="GroupSelected" AutoPostBack="true">
										</asp:DropDownList>
									 </div>
								  </div>
								  <div id="dvApprLmt" runat="server" style="display: none;">
									 <div class="form-group col-xs-12 col-sm-12 padd-zero">
									 <div class="col-sm-5">
										<label class="form-label label_setting">APPROVAL LIMIT</label>
									</div>	
									<div class="col-sm-7">
									
                                        <label class="form-label label_setting">
									<asp:Label ID="lblApprovalLimit" runat="server" class="form-label"></asp:Label>
										<a href="#" data-toggle="popover" data-trigger="hover" data-content="Apprival Limit can be adjusted in Code Allocation screen, updating CodeName 'ERUSERGROUPS'
										   after successful registration."><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
										
										</label>
										</div>	
									 </div>
									 <div class="clearfix"></div>
									 <%-- <div style="float: right">
										<asp:Panel ID="Panel1" runat="server">
											<small>
												<label>
													Apprival Limit can be adjusted in Code Allocation screen, updating CodeName 'ERUSERGROUPS'
																after successful registration.</label></small>
										</asp:Panel>
										<asp:Panel ID="pnlApprLimitTip" runat="server" Height="30px" Width="30px">
											<img src="images/lightbulb_32.png" class="fl" alt="Tip" height="20px" width="20px" />
										</asp:Panel>
										<cc1:BalloonPopupExtender ID="BalloonPopupExtender1" runat="server" TargetControlID="pnlApprLimitTip"
											BalloonPopupControlID="Panel1" BalloonStyle="Rectangle" BalloonSize="Small" UseShadow="false"
											ScrollBars="Auto" DisplayOnFocus="true" DisplayOnClick="true">
										</cc1:BalloonPopupExtender>
										</div>--%>
									 <div class="form-group col-xs-12 col-sm-12  padd-zero">
										<div class="col-sm-12">
                                               <%--  <asp:CheckBox ID="chkSelfAppr" runat="server"   />
										                                                <label for="chkSelfAppr" style="color: #434a4f">Small Business Self Approval</label>--%>
                                            <div class="checkbox">
                                                    <label>
                                                      <input type="checkbox" ID="chkSelfAppr" runat="server" />
                                                      <i class="input-helper"></i>
                                                      <span class="text-dark-gray">Small Business Self Approval</span>
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
			 <!-- Main Section End -->
			 <footer id="footer" class="row">
				<div class="container text-center">
				   <span class="fr">&copy; 2018. All rights reserved. </span><strong>Xtramile Soft</strong> | ApproveIt
				</div>
			 </footer>
		  </form>
		  <%--<script src="js/jquery.tools.min.js"></script>--%>
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		  <%--<script src="js/jquery.ui.min.js"></script>--%>
		  <script src="latestdesign/js/bootstrap.min.js"></script>
		  <%--<script src="latestdesign/js/lazyload.min.js"></script>--%>
		  <script src="js/Validation.js" type="text/javascript"></script>
		 <script src="js/Ajax.js" type="text/javascript"></script>
           <script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
           <%--<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/js/bootstrap-select.min.js">    --%>
		  <%--<script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
		  <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
		  <script>
		      function redirectPage() {
		          window.location = 'Login.aspx';
		      }
			 
		      function DisplayApprLimit() {
		          if (document.getElementById("cbManager").checked) {
		              document.getElementById("dvApprLmt").style.display = 'block';
		              if (document.getElementById("hdnApp").value == "1")
		                  document.getElementById("cbAP").checked = true;
		              else
		                  document.getElementById("cbAP").checked = false;
		          }
		          else {
		              document.getElementById("cbAP").checked = false;
		              document.getElementById("dvApprLmt").style.display = 'none';
		              document.getElementById("txtApprLimit").value = '';
		          }
		      }
			 
		      //function DoOnAjaxPostback() {
		      //    $(function () {
		      //        $("#ddlIndType").ufd({ log: true });
		      //        //$("#ddlIndType").realFocusEvent();
		      //    });
		      //    $(function () {
		      //        $("#ddlRgnCode").ufd({ log: true });
		      //        //$("#ddlRgnCode").realFocusEvent();
		      //    });
		      //    $(function () {
		      //        $("#ddlCountry").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlCurrency").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlMeasure").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlGroup").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlDept").ufd({ log: true });
		      //    });
		      //    LoadList();
		      //}
			 
		      function OrgName(txtId) {
		          if(document.getElementById('txtOrganizationName').value != '') {
		              capitaliseFirstLetter(txtId);
		              document.getElementById('txtCompName').value = document.getElementById('txtOrganizationName').value;
		              var url = 'Invoice.ashx?func=4&orgname=' + document.getElementById('txtOrganizationName').value + '&typ=1';
		              GetOrgCode(url, 'GetOrgCode');
		          }
		          else
		              document.getElementById('txtOrgcode').value = '';
		      }
			 
			 
		      function fillFields() {
		          document.getElementById('txtCompCode').value = document.getElementById('txtOrganizationName').value.replace(/\s+/g, "").substring(0, 3).toUpperCase();
		          document.getElementById('txtCompName').value = document.getElementById('txtOrganizationName').value;
		      }
			 
		    
		      //$(document).ready(function () {
		      //    $('[data-toggle="popover"]').popover();   
		      //    $('.burger').click(function(){
		      //        $('header').toggleClass('clicked');
		      //    });
		      //    $(function () {
		      //        $("#ddlIndType").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlRgnCode").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlCountry").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlCurrency").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlMeasure").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlGroup").ufd({ log: true });
		      //    });
		      //    $(function () {
		      //        $("#ddlDept").ufd({ log: true });
		      //    });
		      //    LoadList();
		      //});
			 
		      //Autocomplete organization name textbox begin
		      function LoadList() {
		          var ds = <%=listFilter %>;
			      $("#txtOrganizationName").autocomplete({
			          source: ds,
			          select: function (event, ui) {
			              capitaliseFirstLetter('txtOrganizationName');
			              document.getElementById('txtCompName').value = ui.item.label;
			              document.getElementById('txtOrgcode').value = ui.item.label.replace(/\s+/g, "").substring(0, 3);
			              document.getElementById('txtCompCode').value = ui.item.label.replace(/\s+/g, "").substring(0, 3).toUpperCase();
			          }
			      });
			  }
			  //Autocomplete organization name textbox end
			 
			  function showConfirmation(sender, args) {
			      document.getElementById('lblFileName').innerHTML = args.get_fileName();
			  }  
			 
			  //Split City and Zip from City text field
			  function splitCityZip(txt) {
			      if(txt.value.indexOf("-") !=-1){
			          var arr = txt.value.split("-");
			          document.getElementById('txtZipCode').value = arr[1];
			      }
			      else
			          document.getElementById('txtZipCode').value = "";
			  }
		      //Split City and Zip from City text field

			  $(function () {
			      $('[data-toggle="popover"]').popover()
			  })
		  </script>
	   </body>
	</html>

    