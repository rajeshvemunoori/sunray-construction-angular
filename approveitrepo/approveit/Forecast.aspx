<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Forecast.aspx.cs" Inherits="Forecast" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc1" TagName="keywords" Src="controls/jobsitekeywords.ascx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html> 
<html lang="en">
<head id="Head1" runat="server">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Forecast Details</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
    <link href="latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <style>
        .rowcolor {
            background-color: #EEB4B4;
        }

        .lnk {
            color: #0D4F8B;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .pnlCSS {
            /* font-weight: bold;*/
            cursor: pointer;
            border: solid 1px #c0c0c0;
            width: 99%;
        }

        .pnlColl {
            border: 1px solid #cadcea;
            background: #e1f2fc;
            background: -webkit-gradient(linear, left top, left bottom, from(#e1f2fc), to(#cae9fd));
            background: -moz-linear-gradient(top, #e1f2fc, #cae9fd);
            -pie-background: linear-gradient(top, #e1f2fc, #cae9fd);
            color: #225b86;
            text-shadow: 0 1px 0 #fff;
        }

        .hatchTab {
            border: 1px solid #cae9fd;
        }

        .hatchTab thead tr td {
    background: #3B6AA0;
    font-size: 11px;
    color: #fff;
}

            .hatchTab thead tr td label {
                color:#fff;
                font-weight:bold;
            }
            .hatchTab td {
                border: 1px solid #cae9fd;
                padding:6px;
            }

            .hatchTab td label{
              
                font-weight:bold;
                font-size:14px;
            }
                .hatchTab td .num {
                    text-align: right;
                }

                .hatchTab td .field {
                    text-align: center;
                }

            .hatchTab thead td {
                background-color: #cae9fd;
            }

        .head {
            background-color: #cae9fd;
        }
        iframe {
           width:100%;
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
        	<div class=" container-fluid  cd-main-content" style="margin-top:70px"   >

            <section class="grid_7" style="padding-top: 0px">
                <!-- the tabs -->
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
                <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="updNotes">
                    <ProgressTemplate>
                        <div id="overlay">
                            <div id="modalprogress">
                                <img src="images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:PostBackTrigger ControlID="btnExport" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                        <div class="main-content grid_4 alpha" style="width: 100%; padding-top: 0px">

                              <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">                                              
                                         <div id="dvHeader" class="page-title"> <%-- <span class="font-awesome-icon-block"><i class="fa fa-plus" aria-hidden="true"></i></span>--%>Rooms Department</div>
                                      </div>

                                  <div class="clearfix"></div>

                                  <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%> Organization</label>
                                                                 </div>
                                                             <div class="col-sm-7" style="font-weight:bold;padding-top:10px">
                                                                  <asp:Label ID="lblOrgID" runat="server"></asp:Label></b>                                                                   
                                                                 </div>     
                                         </div>

                                  <div class="clearfix"></div>

                                  


                                  <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%>Company Code: </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                 <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="GetForecastData"
                                                                                AutoPostBack="true" class="selectpicker form-control" data-show-subtext="true" data-live-search="true">
                                                                            </asp:DropDownList>                                                                 
                                                                 </div>     
                                         </div>


                                  <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%> Year :</label>
                                                                 </div>
                                                             <div class="col-sm-7">
                                                                 <asp:DropDownList ID="ddlYear" runat="server" AutoPostBack="true" class="selectpicker form-control" data-show-subtext="true" data-live-search="true" OnSelectedIndexChanged="GetForecastData"></asp:DropDownList>                                                                   
                                                                 </div>     
                                         </div>

                                   <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><%--<i class="fa fa-star maroon-text" aria-hidden="true"></i>--%> Month :</label>
                                                                 </div>
                                                             <div class="col-sm-7">    
                                                                 <asp:DropDownList ID="ddlMonth" runat="server" OnSelectedIndexChanged="GetForecastData" class="selectpicker form-control" data-show-subtext="true" data-live-search="true"
                                                                                AutoPostBack="true">
                                                                            </asp:DropDownList>                                                               
                                                                 </div>     
                                         </div>

                                    <div class="clearfix"></div>
                                  <div id="dvMsg" runat="server">
                                                            </div>
                             <div class="clearfix"></div>


                            <section>
                                <div class="divfieldset">
                                    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px;">
                                 <div class="table-responsive">
                                                <table class="table table-striped table-condensed table-hover table-bordered">
                                                     
                                                     
                                                    <tr>
                                                        <td>
                                                            <table class="hatchTab" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td style="text-align: center"><small>
                                                                            <label>
                                                                                #Rooms</label></small></td>
                                                                        <td style="text-align: center"><small>
                                                                            <label>
                                                                                Rms Avail.</label></small></td>
                                                                        <td style="text-align: center">
                                                                            <small>
                                                                                <label>
                                                                                    Rms Sold</label></small></td>
                                                                        <td style="text-align: center">
                                                                            <small>
                                                                                <label>
                                                                                    Occ%</label></small></td>
                                                                        <td style="text-align: center">
                                                                            <small>
                                                                                <label>
                                                                                    ADR</label></small></td>
                                                                        <td style="text-align: center">
                                                                            <small>
                                                                                <label>
                                                                                    RevPar</label></small></td>
                                                                        <td style="text-align: center">
                                                                            <small>
                                                                                <label>
                                                                                    Revenue</label></small></td>
                                                                    </tr>
                                                                </thead>
                                                                <tr>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Budget</label></small>
                                                                    </td>

                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmNum" runat="server"></asp:Label></label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmAvail" runat="server"></asp:Label></label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmSld" runat="server"></asp:Label></label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmOcc" runat="server" Text="0.00"></asp:Label>%</label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $<asp:Label ID="lblADR" runat="server" Text="0.00"></asp:Label></label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $<asp:Label ID="lblRevPar" runat="server" Text="0.00"></asp:Label></label></small>
                                                                    </td>

                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $<asp:Label ID="lblRmsBdg" runat="server"></asp:Label></label></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                Hatch</label></small>
                                                                    </td>

                                                                    <td style="text-align: right">
                                                                        <asp:TextBox ID="txtRmNum" runat="server" Width="90%"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <asp:TextBox ID="txtRmAvail" runat="server" Width="90%" onkeyup="javascript:return calculateOccBudg('txtRmAvail', 'txtRmSld');"
                                                                            onchange="javascript:return calculateOccBudg('txtRmAvail', 'txtRmSld');"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <asp:TextBox ID="txtRmSld" runat="server" Width="90%" onkeyup="javascript:return calculateOccBudg('txtRmAvail', 'txtRmSld');"
                                                                            onchange="javascript:return calculateOccBudg('txtRmAvail', 'txtRmSld');"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmOccBgd" runat="server"></asp:Label>%</label></small>
                                                                        <asp:HiddenField ID="hdnRmOccBdg" runat="server" />
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $</label>
                                                                        </small>
                                                                        <asp:TextBox ID="txtADR" runat="server" Width="90%" onkeyup="javascript:return CalculateHatchRevenue();" onchange="javascript:return CalculateHatchRevenue();"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $</label></small><asp:TextBox ID="txtRevPar" runat="server" Width="90%"></asp:TextBox>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                $</label><asp:TextBox ID="txtRmsHct" runat="server" Width="90%" onkeyup="javascript:return calculateRevenue('lblRmsBdg', 'txtRmsHct');"
                                                                                    onchange="javascript:return calculateRevenue('lblRmsBdg', 'txtRmsHct');"></asp:TextBox></small>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                    <td>&nbsp;</td>
                                                                    <td>&nbsp;</td>
                                                                    <td>&nbsp;</td>
                                                                    <td>&nbsp;</td>
                                                                    <td>&nbsp;</td>
                                                                    <td class="head" style="text-align: center">
                                                                        <small>
                                                                            <label>
                                                                                <b>+/-</b></label></small>
                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <small>
                                                                            <label>
                                                                                <asp:Label ID="lblRmsAddRem" runat="server"></asp:Label>%</label></small>
                                                                        <asp:HiddenField ID="hdnRmsAddRem" runat="server" />
                                                                        <asp:HiddenField ID="hdnIsDataPresent" runat="server" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                       
                                            </div>
    </div>
                                    <br />
                                    <div style="text-align: center" class="mt20">
                                        <asp:Button ID="btnGetData" runat="server" Text="GetData" CssClass="btn btn-info mt20"
                                            OnClick="GetCalculatedData" />
                                        <asp:Button ID="btnUpdateBudget" runat="server" Text="Update" CssClass="btn btn-success mt20 "
                                            OnClick="UpdateBudget" />
                                        <asp:Button ID="btnExport" runat="server" Text="Export" CssClass="btn btn-warning mt20"
                                            OnClick="ExportData" />
                                    </div>
                                    <br />
                                    <div>
                                        <asp:PlaceHolder ID="plc" runat="server"></asp:PlaceHolder>
                                    </div>
                                </div>
                            </section>
                                  </div>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
             <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->

             <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="js/Ajax.js" type="text/javascript"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <%--<script src="Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script src="latestdesign/js/bootstrap-select.min.js" type="text/javascript"></script>
    <script src="latestdesign/js/bootstrap-select.min.js"></script>
        <script type="text/javascript">


            function pageLoad() {
                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });
            }

            function DoOnAjaxPostback() {


                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });

            }
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            function $1(id) {
                return document.getElementById(id);
            }

            function showProgress() {
                var updateProgress = $1("UpdateProgress1");
                updateProgress.style.display = "block";
            }

            function validateAmount(id) {
                // var reg = /^(?:\d*\.\d{1,5}|\d+)$/;
                var reg = /^[0-9]\d*(?:\.\d{0,9})?$/;
                if (reg.test($1(id).value) || $1(id).value == '') {
                    return true;
                }
            }

            //Calculate Rooms Occupancy
            function calculateOccBudg(rmAvail, rmSld) {
                if (!validateAmount(rmAvail) || !validateAmount(rmSld)) {
                    DisplayMsg('Please entera valid amount', 'Red');
                    return false;
                }
                else
                    DisplayMsg('', '');
                var rA = $1(rmAvail).value == '' ? 0 : $1(rmAvail).value;
                var rS = $1(rmSld).value == '' ? 0 : $1(rmSld).value;
                if (parseFloat(rA) > 0) {
                    var occ = (parseFloat(rS) / parseFloat(rA)) * 100;
                    occ = occ.toFixed(2);
                    $1('lblRmOccBgd').innerHTML = occ;
                    $1('hdnRmOccBdg').value = occ;
                }
                else {
                    $1('lblRmOccBgd').innerHTML = "0.00";
                    $1('hdnRmOccBdg').value = "0.00";
                }
                CalculateHatchRevenue();
            }

            //Calculate % Revenue
            function calculateRevenue(rvBudget, rvHatch) {
                validateRoomsBudget();
                if (!validateAmount(rvHatch)) {
                    DisplayMsg('Please entera valid number', 'Red');
                    return false;
                }
                else
                    DisplayMsg('', '');
                var rH = $1(rvHatch).value == '' ? 0 : $1(rvHatch).value;
                var rB = $1(rvBudget).innerHTML == '' ? 0 : $1(rvBudget).innerHTML;
                if (parseFloat(rB) > 0) {
                    var revenue = ((parseFloat(rH) - parseFloat(rB)) / parseFloat(rB)) * 100;
                    revenue = revenue.toFixed(2);
                    if (parseFloat(rH) < parseFloat(rB)) {
                        //revenue = parseFloat(revenue) * -1;
                        $1('lblRmsAddRem').style.color = "Red";
                    }
                    else {
                        $1('lblRmsAddRem').style.color = "Black";
                        if (parseFloat(revenue) < 0)
                            revenue = parseFloat(revenue) * -1;
                    }
                    $1('lblRmsAddRem').innerText = revenue;
                    $1('hdnRmsAddRem').value = revenue;
                }
                else {
                    $1('lblRmsAddRem').innerText = "0.00";
                    $1('hdnRmsAddRem').value = "0.00";
                }
            }

            function DisplayMsg(msg, color) {
                $1('dvMsg').innerHTML = msg;
                $1('dvMsg').style.color = color;
            }

            function validateRoomsBudget() {
                var errStr = 'Please enter ';
                $1('dvMsg').innerHTML = '';
                $1('dvMsg').style.color = "red";
                if ($1('txtRmNum').value == 0) {
                    errStr += 'No. of Rooms, ';
                }
                if ($1('txtRmAvail').value == 0) {
                    errStr += 'Rooms Available, ';
                }
                if ($1('txtRmSld').value == 0) {
                    errStr += 'Rooms Sold, ';
                }
                if ($1('txtADR').value == 0) {
                    errStr += 'ADR, ';
                }
                if ($1('txtRevPar').value == 0) {
                    errStr += 'RevPar, ';
                }
                //if ($1('txtRmsBdg').value == 0) {
                //    errStr += 'Budget, ';
                //}
                errStr = errStr.substring(0, errStr.length - 2);
                if (errStr.length > 13) {
                    $1('dvMsg').innerHTML = errStr;
                    return false;
                }
            }

            function CalculateHatchRevenue() {
                var rmsSold = $1('txtRmSld').value == '' ? '0' : $1('txtRmSld').value;
                var adr = $1('txtADR').value == '' ? '0' : $1('txtADR').value;
                if (!validateAmount('txtRmSld')) {
                    DisplayMsg('Please entera valid number', 'Red');
                    return false;
                }
                else if (!validateAmount('txtADR')) {
                    DisplayMsg('Please entera valid number', 'Red');
                    return false;
                }
                else {
                    DisplayMsg('', '');
                    $1('txtRmsHct').value = parseFloat(parseFloat(rmsSold) * parseFloat(adr)).toFixed(2);
                }
            }

        </script>
            </div>
     </div>
        </div>
    </form>
   
</body>
</html>
