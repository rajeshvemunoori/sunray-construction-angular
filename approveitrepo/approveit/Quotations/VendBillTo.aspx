<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendBillTo.aspx.cs" Inherits="Quotations_VendBillTo" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ApproveIt - Vendor BillTo</title>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link href="../latestdesign/css/animate.css" rel="stylesheet">
    <link href="../latestdesign/css/approveiti2.css" rel="stylesheet">
    	<link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css"/>
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="ice-bg">
    <form id="form1" runat="server" autocomplete="off">

        <header class=" ">
            <img class="applogo" src="../latestdesign/img/approveIt_logo.png">
        </header>

        <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server" ScriptMode="Release">
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
        <%--<asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                            <ProgressTemplate>
                                <div id="overlay">
                                    <div id="modalprogress">
                                        <img src="../images/Loaders/image_855859.gif" />
                                    </div>
                                </div>
                            </ProgressTemplate>
                        </asp:UpdateProgress>--%>
        <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
            </Triggers>
            <ContentTemplate>
                <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                <div class="container container-setting bg-white card">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-row">
                            <div class="page-title"><span class="font-awesome-icon-block"><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>VENDOR BILLTO</div>
                        </div>
                    </div>
                    <div class="row ">
                        <div id="dvMsg" runat="server" style="padding: 5px">
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
                          <div class="align-center">
                                      <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
		                                    <div class="col-sm-5 padd-zero">
						                        <label class="form-label label_setting" for="lastname">
			                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Vendor Bill Number</label>
                                             </div>
					                        <div class="col-sm-7 padd-zero">
					                            <asp:TextBox ID="TextBox1" runat="server" class="form-control  "></asp:TextBox>
		                                    </div>
					                  </div>
                              <div class="clearfix"></div>         
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                  <div class="col-sm-5 padd-zero">
                                        <label class="form-label label_setting" for="Vendorbillno"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Vendor Bill Number</label>
                                 </div>
                                <div class="col-sm-7 padd-zero">
                                     <asp:TextBox ID="txtBillNum" runat="server" class="form-control" ></asp:TextBox>
                                </div>
                            </div>
                             
                          
                           
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                    <label class="form-label label_setting" for="firstname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;First Name</label>
                                </div>
                                 <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtVendName1" runat="server" class="form-control  "></asp:TextBox>
                                     </div>
                            </div>
                              
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                  <div class="col-sm-5 padd-zero">
                                            <label class="form-label label_setting" for="lastname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Last Name</label>
                                  </div>
                                 <div class="col-sm-7 padd-zero">
                                    <asp:TextBox ID="txtVendName2" runat="server" class="form-control  "></asp:TextBox>
                                 </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                  <div class="col-sm-5 padd-zero">
                                        <label class="form-label  label_setting" for="displayname"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Diplay Name</label>
                                  </div>
                                  <div class="col-sm-7 padd-zero">
                                      <asp:TextBox ID="txtVendPrefName" runat="server" class="form-control  "></asp:TextBox>
                                  </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                 <div class="col-sm-5 padd-zero">
                                <label class="form-label label_setting" for="email"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;eMail</label>
                                     </div>
                                 <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtEmail" runat="server" class="form-control  "></asp:TextBox>
                                     </div>
                            </div>
                           
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                 <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="password"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Password</label>
                                </div>
                                 <div class="col-sm-7 padd-zero">
                                        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control  "></asp:TextBox>
                                </div>
                            </div
                               <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                 <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="confirmpassword"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Confirm Password</label>
                                     </div>
                                 <div class="col-sm-7 padd-zero">
                                   
                                <asp:TextBox ID="txtConfPwd" runat="server" TextMode="Password" AutoCompleteType="Disabled" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                           
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="addr1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Address 1</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtAddr1" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="addr2">Address 2</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtAddr2" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="addr3">Address 3</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtAddr3" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="selectWrapper">
                                    <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="city"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;City</label>
                                         </div>
                                  <div class="col-sm-7 padd-zero">

                                    <asp:DropDownList ID="ddlCity" runat="server" col-md-4 col-lg-4   class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                    </asp:DropDownList>
                                      </div>
                                </div>
                            </div>
                             
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="selectWrapper">
                                    <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="state"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;State</label>
                                         </div>
                                  <div class="col-sm-7 padd-zero">
                                    <asp:DropDownList ID="ddlStates" runat="server" col-md-4 col-lg-4  class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                    </asp:DropDownList>
                                      </div>
                                </div>
                            </div>
                                <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="zipcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;ZipCode</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtZip" runat="server" MaxLength="6" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                        
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="selectWrapper">
                                    <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="country"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Country</label>
                                         </div>
                                  <div class="col-sm-7 padd-zero">
                                    <asp:DropDownList ID="ddlCountry" runat="server" col-md-4 col-lg-4 class="selectBox form-control">
                                        <asp:ListItem>UnitedStates of America</asp:ListItem>
                                    </asp:DropDownList>
                                      </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="url">URL</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtWebsite" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="selectWrapper">
                                    <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="currency"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Currency</label>
                                         </div>
                                  <div class="col-sm-7 padd-zero">
                                    <asp:DropDownList ID="ddlCurrency" runat="server"  class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                    </asp:DropDownList>
                                      </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="phone1"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Phone 1</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtPhone" runat="server" MaxLength="20" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="phone2">Phone 2</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtPhone2" runat="server" MaxLength="20" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                                <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="fax">Fax</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtFax" runat="server" MaxLength="20" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="selectWrapper">
                                    <div class="col-sm-5 padd-zero">
                                    <label class="form-label  label_setting" for="paymentmode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Payment Mode</label>
                                         </div>
                                  <div class="col-sm-7 padd-zero">
                                    <asp:DropDownList ID="ddlPayMode" runat="server" col-md-4 col-lg-4 class="selectBox form-control">
                                    </asp:DropDownList>
                                      </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="paymentterm">Payment Terms</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <%--<asp:TextBox ID="txtPayterms" TextMode="MultiLine" runat="server" MaxLength="500" Width="150px" class="form-control  "></asp:TextBox>--%>
                                <textarea class="form-control" rows="2" id="txtPayterms" placeholder="Payment Term" runat="server"></textarea>
                                      </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="category"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Category</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtCat" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="col-sm-5 padd-zero">
                                <label class="form-label  label_setting" for="subcategory"><i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Sub Category</label>
                                     </div>
                                  <div class="col-sm-7 padd-zero">
                                <asp:TextBox ID="txtSubCat" runat="server" class="form-control  "></asp:TextBox>
                                      </div>
                            </div>
                             
                            <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <%--<asp:CheckBox ID="chkMultiLoc" runat="server" TextAlign="Right" class="styled-checkbox " />
                                <label for="styled-checkbox-1" style="color: #434a4f">MultipleLocation</label>--%>
                                                                <div class="checkbox">
                                                    <label>
                                                      <input type="checkbox" ID="chkMultiLoc" runat="server" />
                                                      <i class="input-helper"></i>
                                                      <span class="text-dark-gray">MultipleLocation</span>
                                                    </label>
                                                  </div> 
                            </div>

                            <div class="clearfix"></div>
                            <div class="form-group btn-lg col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="btn-group pull-right">
                                    <asp:Button ID="btnSave" runat="server" Text="Save" class="btn btn-success" OnClick="SaveDetails" />
                                    <asp:Button ID="btnReset" runat="server" Text="Reset" class="btn btn-warning"></asp:Button>
                                    <asp:Button ID="btnBack" runat="server" Text="Back To Login" class="btn btn-primary" OnClick="btnBack_Click" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ContentTemplate>
        </asp:UpdatePanel>
        <footer id="footer" class="row">
            <div class="container text-center">
                <span class="fr">&copy; 2018. All rights reserved.</span><strong>Xtramile Soft</strong> | ApproveIt
            </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="../js/jquery.ui.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../js/Validation.js" type="text/javascript"></script>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/lazyload.min.js"></script>
       <%-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>--%>
        <script src="../js/Ajax.js" type="text/javascript"></script>
       <%-- <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
        <script>
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            $(document).ready(function () {
                $(function () {
                    $("#ddlCity").ufd({ log: true });
                });
                $(function () {
                    $("#ddlStates").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCountry").ufd({ log: true });
                });
                $(function () {
                    $("#ddlCurrency").ufd({ log: true });
                });
                $(function () {
                    $("#ddlPayMode").ufd({ log: true });
                });
            });

            function redirectPage(type) {
                if (type == 1)
                    window.location = 'VendShipTo.aspx';
                else
                    window.location = 'VendContacts.aspx';
            }
        </script>
    </form>
</body>
</html>
