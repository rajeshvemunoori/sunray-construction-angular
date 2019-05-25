<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EditPassword.aspx.cs" Inherits="EditPassword" %>

<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc6" TagName="vendtop" Src="~/controls/VendTop.ascx" %>
<%@ Register TagPrefix="uc7" TagName="vendleftmenu" Src="Controls/VendLeft.ascx" %>
<%@ Register TagPrefix="uc8" TagName="hostsiteadmin" Src="Controls/hostsiteleft.ascx" %>
<%@ Register TagPrefix="uc9" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html>
<html lang="en">
<head >
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript">
        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
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

    </script>
    <title>ApproveIt - Edit Password</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
   <link rel="stylesheet" href="latestdesign/css/bootstrap-select.min.css"/>
     <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="latestdesign/css/reset.css"/>
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css"/>
    <style>
        label em {
            font-weight: bold;
        }
    </style>
</head>

<body style="overflow-x: hidden;">
    <form id="form" runat="server" autocomplete="off">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <!--header-->
      
            <%if (Convert.ToInt32(Session["OrgID"]) != 0)
              {%>
            <uc2:top ID="top" runat="server" />
            <% }
              else if (Session["VendBillID"] != null)
              {
            %>
            <uc6:vendtop ID="vendtop" runat="server" />
            <%
              } %>
        </div>
        <!--header-->
        <div class="cd-main-content">
              <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 padd-zero"  style="margin-left:-3px;" >
            <!-- Sidebar -->
            <%if (Convert.ToInt32(Session["OrgID"]) != 0)
              {%>
            <uc9:leftmenu ID="leftmenu" runat="server" />
            <%
              }
              else if (Session["VendBillID"] != null)
              {
            %>
            <uc7:vendleftmenu ID="vendleftmenu" runat="server" />
            <%
              }
              else
              {%>
            <uc8:hostsiteadmin ID="hostsiteadmin" runat="server" />
            <%} %>
                  </div>
            <!-- Sidebar End -->
            <!-- Main Section -->
             <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
                <div class="row " style="margin-top:70px;">
            <section class=" grid_7">
                <div class=" grid_4" style="width: 100%">
                  

                         <div class="row ">
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
               <div class="page-title"><span class="font-awesome-info-block"><i class="fa fa-info-circel" aria-hidden="true"></i></span>Change Password</div>
       </div>
 </div>                                  
       <div class="row ">
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">
              <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success pull-right" OnClick="btnSave_Click"></asp:Button>&nbsp;
                             
       </div>
 </div>    

                         
                    <section class="container_6 clearfix">
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
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <asp:Panel ID="p" runat="server" DefaultButton="btnSave">
                                     <div class="row ">
                                          <div id="dvError" runat="server" style="text-align: center">
                                            </div>
                                              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">
			                                            <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Old Password:      </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                <asp:TextBox ID="txtOldPassword" TextMode="Password" CssClass="form-control" runat="server"></asp:TextBox>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">
			                                            <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;  New Password:    </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                    <asp:TextBox ID="txtNewPassword" TextMode="Password"  CssClass="form-control"  runat="server"></asp:TextBox>
			                                      </div>
                                              </div>
                                             <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 "> 
                                                  <div class="col-sm-5 padd-zero">
						                                <label class="form-label label_setting" for="lastname">
			                                            <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Re-enter New Password:     </label>

		                                          </div>
					                              <div class="col-sm-7 padd-zero">
						                                     <asp:TextBox ID="txtReenterPassword" TextMode="Password"  CssClass="form-control"  runat="server"></asp:TextBox>
			                                      </div>
                                              </div>
	
                                         </div>
                                  
                                </asp:Panel>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                </div>
            </section>
                    </div>
            <!-- Main Section End -->
         </div>
                 </div>
            </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <%--<script src="js/global.js"></script>--%>
        <script src="js/Ajax.js"></script>
        <script src="js/DateSetup.js" type="text/javascript"></script>
    </form>
</body>
</html>
