<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Tasks.aspx.cs" Inherits="TimeSheet_Tasks" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="../Controls/leftmenu.ascx" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Task Maintenance</title>
    <link rel="icon" href="../images/icons/fav-icon.ico" />
    <link href="../Content/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" media="screen" href="../css/reset.css" />
    <link rel="stylesheet" media="screen" href="../css/grid.css" />
    <link rel="stylesheet" media="screen" href="../css/style.css" />
    <link rel="stylesheet" media="screen" href="../css/messages.css" />
    <link rel="stylesheet" media="screen" href="../css/forms.css" />
    <link href="../css/tables.css" rel="stylesheet" type="text/css" />
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../Styles/leftmenu/styles.css" />
    <script src="../js/Validation.js" type="text/javascript"></script>
    <script src="../js/html5shiv.js" type="text/javascript"></script>
    <script src="../js/jquery.tools.min.js"></script>
    <script src="../js/jquery.ui.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
    <script src="../Scripts/jquery.ui.ufd.js" type="text/javascript"></script>
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

        function DoOnAjaxPostback() {
            $(function () {
                $("#ddlJobName").ufd({ log: true });
            });
            $(function () {
                $("#ddlJobCode").ufd({ log: true });
            });
            $(function () {
                $("#ddlStatus").ufd({ log: true });
            });
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
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvTasks tbody tr td {
            padding: 5px;
            height: 35px;
            border-bottom: 1px solid #E6E4E4;
            text-align: center;
            text-overflow: ellipsis;
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
<body>
    <form id="form1" runat="server">
        <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position: fixed">
            <!--header-->
            <uc2:top ID="top1" runat="server" />
            <!--header-->
        </div>
        <div id="wrapper">
            <section>
                <div class="container_8 clearfix">
                    <!-- Sidebar -->
                    <uc8:leftmenu ID="leftmenu" runat="server" />
                    <!-- Sidebar End -->
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px">
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
                                <div class="main-content grid_4 alpha" style="width: 850px; padding-top: 0px">
                                    <header class="clearfix">
                                        <table width="100%">
                                            <tr>
                                                <td>
                                                    <h2>Tasks
                                                    </h2>
                                                </td>
                                                <td style="text-align: right">
                                                    <asp:Button ID="btnReloadData" runat="server" CssClass="buttonnew-blue" OnClick="ReloadData" Text="Refresh" />
                                                </td>
                                            </tr>
                                        </table>
                                    </header>
                                    <section>
                                        <div class="divfieldset">
                                            <div>
                                                <table class="tab" width="100%">
                                                    <tr>
                                                        <td class="tdlbl" width="20%"><small>
                                                            <label>Filter by Job:</label></small></td>
                                                        <td width="20%">
                                                            <asp:DropDownList ID="ddlJobName" runat="server" Width="150px" OnSelectedIndexChanged="ddlJobName_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                        </td>
                                                        <td width="20%"></td>
                                                        <td width="40%">
                                                            <asp:Button ID="btnAddTask" runat="server" Text="Add New Task" CssClass="buttonnew-blue" OnClick="AddNewTask" Style="float: right" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>
                                                <isx:CoolGridView ID="gvTasks" runat="server" AutoGenerateColumns="false" AllowPaging="false" Width="700px" Height="300px"
                                                    OnRowDataBound="gvTasks_RowDataBound">
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Task Code" HeaderStyle-Width="180px" ItemStyle-Width="180px">
                                                            <HeaderTemplate>
                                                                <asp:LinkButton ID="lnkTaskCode" runat="server" Text="Task Code" CommandArgument="taskCode"
                                                                    OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                            </HeaderTemplate>
                                                            <ItemTemplate>
                                                                <label><asp:LinkButton ID="lnkTaskCode" runat="server" Text='<%#Eval("taskCode")%>' ToolTip="View/Edit Task" CommandArgument='<%#Eval("taskId") %>'
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
                                                <asp:HiddenField ID="hdnExtTaskID" runat="server" />
                                                <asp:HiddenField ID="hdnExtJobID" runat="server" />
                                            </div>
                                            <div>
                                                <asp:Panel ID="pnlViewTask" runat="server" Style="display: none;"
                                                    DefaultButton="btnSave">
                                                    <div class="main-content" style="margin: 0px 0px 0px 10px; background-color: White; padding: 0 0px 10px 0px; min-height: 80%; min-width: 600px; height: 270px;">
                                                        <header>
                                                            <table width="100%">
                                                                <tr>
                                                                    <td width="50%">
                                                                        <h2 class="pophead">
                                                                            <asp:Label ID="lblHTask" runat="server"></asp:Label>
                                                                        </h2>
                                                                    </td>
                                                                    <td width="50%" align="right">
                                                                        <asp:Button ID="btnSave" runat="server" Text="Save" CssClass="buttonnew-green" OnClick="SaveTask"></asp:Button>
                                                                        <asp:Button ID="btnCancel" runat="server" Text="Close" CssClass="buttonnew-blue"></asp:Button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </header>
                                                        <section>
                                                            <div class="divfieldset">
                                                                <div id="dvErr" runat="server"></div>
                                                                <table class="tab">
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Job Code:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:DropDownList ID="ddlJobCode" runat="server"></asp:DropDownList></td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Task Code:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtTaskCode" runat="server"></asp:TextBox></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Status:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:DropDownList ID="ddlStatus" runat="server" Width="135px"></asp:DropDownList></td>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Description:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine"></asp:TextBox></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tdlbl"><small>
                                                                            <label>Active:</label></small></td>
                                                                        <td class="tdfld">
                                                                            <asp:CheckBox ID="chkIsActive" runat="server"></asp:CheckBox>
                                                                        </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </table>
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
            </section>
        </div>
    </form>
</body>
</html>
