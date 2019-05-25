<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Tasks.aspx.cs" Inherits="TimeSheet_Tasks" %>

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
    <title>ApproveIt - Task Maintenance</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="../latestdesign/img/favicon.ico">
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../latestdesign/css/reset.css">
     <link href="../latestdesign/css/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../latestdesign/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <!-- CSS reset -->
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css">
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

        .lnk {
            color: White;
            text-decoration: underline;
        }

        label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

        .tab td {
            padding: 5px;
        }

        .tdlbl {
            text-align: right;
        }

        .tdfld {
            text-align: left;
        }

        #gvTasksjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvTasksjEsCoOl_headerDiv div table tbody tr th {
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

        #gvTasks tbody tr td {
                height: 30px;
    line-height: 27px;
    border: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px !important;
            border: 0.5px solid #eaeaea;
        }

        #gvTasksjEsCoOl_mainDiv {
            height: 200px;
            overflow: hidden;
            border-color: Gray;
            border-width: 1px;
            border-style: Solid;
        }

        #gvTasks TR TD, #gvTasks TR TH, #gvTasks TR TH div, #gvTasks TR TD div {
            overflow: visible;
        }
         
    </style>
</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
        <div class="row menu-bg">
	                    
	<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style=" padding:0px;">
            <uc8:leftmenu ID="leftmenu" runat="server" />
        </div>
            <!-- Main Section -->
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" ">
        	<div class=" container-fluid  cd-main-content"  >
            <section class="grid_7" style="padding-top: 0px;margin-top:70px;">
                <cc1:ToolkitScriptManager ID="ScriptManager2" runat="server">
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
                                <img src="../images/Loaders/image_855859.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
                <asp:UpdatePanel ID="updNotes" runat="server" UpdateMode="Conditional">
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                    </Triggers>
                    <ContentTemplate>
                        <asp:Button ID="btnRefresh" runat="server" CssClass="RefreshNotes" Style="display: none" />
                        <div class="main-content grid_4 alpha" style="padding-top: 0px">


                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                       <div class="page-title"> Tasks</div>
                                </div>

                                <div class="clearfix"></div>
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                      <asp:Button ID="btnReloadData" runat="server" CssClass="btn btn-warning pull-right" OnClick="ReloadData" Text="Refresh" />
                                     </div>
                            </div>
                             
                            <section>
                                <div class="divfieldset">
                                    <div class="row">
                                        <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div class="col-sm-4">
                                            <label class="form-label label_setting" for="orgname">Filter by Job: </label>
                                            </div>
                                            <div class="col-sm-7"> 
                                                <asp:DropDownList ID="ddlJobName" runat="server"  CssClass="form-control selectpicker" data-live-search="true" OnSelectedIndexChanged="ddlJobName_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                            </div>
                                        </div>
                                         <div class="form-group    col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                              <asp:Button ID="btnAddTask" runat="server" Text="Add New Task" CssClass="btn btn-success pull-left" OnClick="AddNewTask" Style="float: right" />
                                           </div>
 
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>
                                        <div  style="width:100%;overflow-x:auto;"   >
                                        <isx:CoolGridView ID="gvTasks" runat="server" AutoGenerateColumns="false" AllowPaging="false" Width="700px" Height="300px"
                                            OnRowDataBound="gvTasks_RowDataBound">
                                            <Columns>
                                                <asp:TemplateField HeaderText="Task Code" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkTaskCode" runat="server" Text="Task Code" CommandArgument="taskCode"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label>
                                                            <asp:LinkButton ID="lnkTaskCode" runat="server" Text='<%#Eval("taskCode")%>' ToolTip="View/Edit Task" CommandArgument='<%#Eval("taskId") %>'
                                                                OnCommand="EditTask"></asp:LinkButton></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Description" HeaderStyle-Width="200px" ItemStyle-Width="200px">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkDescription" runat="server" Text="Description" CommandArgument="description"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("description")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Status">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkStatus" runat="server" Text="Status" CommandArgument="status"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <label><%#Eval("status")%></label>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Active">
                                                    <HeaderTemplate>
                                                        <asp:LinkButton ID="lnkIsActive" runat="server" Text="Active" CommandArgument="isActive"
                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chkIsActive" runat="server" />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Action">
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnkEditTask" runat="server" ToolTip="View/Edit Task" CommandArgument='<%#Eval("taskId") %>'
                                                            OnCommand="EditTask"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;
                                                                    <asp:HiddenField ID="hdnTaskID" runat="server" Value='<%#Eval("taskId") %>' />
                                                        <asp:HiddenField ID="hdnJobID" runat="server" Value='<%#Eval("jobId") %>' />
                                                        <asp:HiddenField ID="hdnIsActive" runat="server" Value='<%#Eval("isActive") %>' />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <EmptyDataTemplate>
                                                <div style="width: 150px">
                                                    <label>
                                                        No data to display</label>
                                                </div>
                                            </EmptyDataTemplate>
                                        </isx:CoolGridView>
                                            </div>
                                        <asp:HiddenField ID="hdnExtTaskID" runat="server" />
                                        <asp:HiddenField ID="hdnExtJobID" runat="server" />
                                    </div>
                                    <div>
                                        <asp:Panel ID="pnlViewTask" runat="server" Style="display: none;"
                                            DefaultButton="btnSave">
                                            <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; max-width: 600px; height: 270px;">
                                                <div class="pop-page-title">
                                                <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    <span ><asp:Label ID="lblHTask" runat="server"></asp:Label> </span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="btn btn-success" OnClick="SaveTask"></asp:Button>
                                                                <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="btn btn-danger"></asp:Button>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                                
                                                <section>
                                                    <div class="divfieldset">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-md-12 col-sm-12 col-lg-12 text-center mt10 mb10"><div id="dvErr" runat="server"></div></div>
                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Job Code: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            
                                                             <asp:DropDownList ID="ddlJobCode" CssClass="form-control selectpicker" data-live-search="true" runat="server"></asp:DropDownList>
                                                            </div>
                                                        </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Task Code: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                            
                                                            <asp:TextBox ID="txtTaskCode" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>
                                                                </div>
                                                            <div class="clearfix"></div>
                                                                <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Status: </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                             <asp:DropDownList ID="ddlStatus" CssClass="form-control selectpicker" data-live-search="true"  runat="server" ></asp:DropDownList>
                                                            </div>
                                                        </div>

                                                            <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Description:	 </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                             <asp:TextBox ID="txtDescr" CssClass="form-control" runat="server" TextMode="MultiLine"></asp:TextBox>
                                                            </div>
                                                        </div>

                                                            <div class="clearfix"></div>
                                                            
                                                                <div class="form-group padd-zero padd-zero col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                     <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgname">Active:	 </label>
                                                            </div>
                                                            <div class="col-sm-7">
                                                                 <asp:CheckBox ID="chkIsActive" runat="server"></asp:CheckBox>
                                                                    </div>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                </section>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkViewTask" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popViewTask" runat="server" DropShadow="false" PopupControlID="pnlViewTask"
                                            TargetControlID="lnkViewTask" BackgroundCssClass="modalBackground" CancelControlID="btnCancel">
                                        </cc1:ModalPopupExtender>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
        </div>
        <script src="../js/Validation.js" type="text/javascript"></script>
        <%--<script src="../js/html5shiv.js" type="text/javascript"></script>
        <script src="../js/jquery.tools.min.js"></script>--%>
        <script src="../latestdesign/js/jquery-2.1.4.js"></script>
        <script src="../js/jquery.ui.min.js"></script>
        <%--  <script src="../js/global.js"></script>
        <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
        <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>--%>
        <script src="../latestdesign/js/bootstrap.min.js"></script>
        <script src="../latestdesign/js/jquery.menu-aim.js"></script>
        <script src="../latestdesign/js/main.js"></script>
             <script src="../latestdesign/js/bootstrap-select.min.js"></script>
            <script src="../latestdesign/js/bootstrap-datepicker.min.js"></script>
        <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
-->
        <script type="text/javascript">
            document.onmousedown = disableclick;
            function disableclick(e) {
                if (e.button == 2) {
                    alert("Right Click Disabled");
                    return false;
                }
            }

            $('.date').datepicker({
                format: "mm/dd/yyyy",
                autoclose: true,
                showonfocus: true,
                todayhighlight: true,
            }).on('changedate', function (ev) {
                $(this).datepicker('hide');
            });

            function DoOnAjaxPostback() {

                $('.selectpicker').selectpicker({
                    liveSearch: true,
                    showTick: true,
                    width: 'auto'
                });


                $('.date').datepicker({
                    format: "mm/dd/yyyy",
                    autoclose: true,
                    showonfocus: true,
                    todayhighlight: true,
                }).on('changedate', function (ev) {
                    $(this).datepicker('hide');
                });

                //$(function () {
                //    $("#ddlJobName").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlJobCode").ufd({ log: true });
                //});
                //$(function () {
                //    $("#ddlStatus").ufd({ log: true });
                //});
            }

            $(document).ready(function () {
                $(function () {
                    $("#ddlJobName").ufd({ log: true });
                });
            });

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
