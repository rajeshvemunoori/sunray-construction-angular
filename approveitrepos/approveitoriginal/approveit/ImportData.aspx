<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ImportData.aspx.cs" Inherits="ImportData" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc8" TagName="leftmenu" Src="Controls/leftmenu.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>ApproveIt - Import Data</title>
    <link rel="icon" href="images/icons/fav-icon.ico" />
    <link rel="stylesheet" media="screen" href="css/reset.css" />
    <link rel="stylesheet" media="screen" href="css/grid.css" />
    <link rel="stylesheet" media="screen" href="css/style.css" />
    <link rel="stylesheet" media="screen" href="css/messages.css" />
    <link rel="stylesheet" media="screen" href="css/forms.css" />
    <link href="css/tables.css" rel="stylesheet" type="text/css" />
    <script src="js/Validation.js" type="text/javascript"></script>
    <script src="js/html5shiv.js" type="text/javascript"></script>
    <script src="js/jquery.tools.min.js"></script>
    <script src="js/jquery.ui.min.js"></script>
    <script src="js/global.js"></script>
    <script type="text/javascript">

    </script>
    <style>
        .rowcolor
        {
            background-color: #EEB4B4;
        }
        .markItUp
        {
            width: 300px;
        }
        .Cpagination
        {
            line-height: 50px;
        }
        .Cpagination td
        {
            border-width: 0;
            padding: 0 2px; /*font-weight: bold;*/
            color: #fff;
        }
        .Cpagination a:hover
        {
            border: solid 1px #486694;
            text-decoration: none;
        }
        .Cpagination span
        {
            padding: 2px 6px 2px 6px;
            border: solid 1px #9ECDE7;
            text-decoration: none;
            white-space: nowrap;
            background: #486694;
            background-color: White;
            background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
            background: -moz-linear-gradient(top,  #e9e9e9,  #d1d1d1);
            -pie-background: linear-gradient(top,  #e9e9e9,  #d1d1d1);
            border: 1px solid #bbb;
            color: #555;
            text-shadow: 1 1px 0 #fff;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            -khtml-border-radius: 3px;
            border-radius: 3px;
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            border: 1px solid #aaa;
        }
        .Cpagination:hover
        {
            text-decoration: none;
        }
        .Cpagination a, .Cpagination a:visited
        {
            background: #f1f1f1;
            background: -webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#d1d1d1));
            background: -moz-linear-gradient(top,  #e9e9e9,  #d1d1d1);
            -pie-background: linear-gradient(top,  #e9e9e9,  #d1d1d1);
            border: 1px solid #bbb;
            color: #555;
            text-shadow: 1 1px 0 #fff;
            text-decoration: none;
            padding: 2px 6px 2px 6px;
            white-space: nowrap;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            -khtml-border-radius: 3px;
            border-radius: 3px;
            -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
            border: 1px solid #aaa;
            background: #ececec;
            background: -webkit-gradient(linear, left top, left bottom, from(#e1e1e1), to(#c1c1c1));
            background: -moz-linear-gradient(top,  #e1e1e1,  #c1c1c1);
            -pie-background: linear-gradient(top,  #e1e1e1,  #c1c1c1);
        }
        .rbl input[type="radio"]
        {
            margin-left: -100%;
            margin-right: 5%;
        }
        .lnk
        {
            color: #0D4F8B;
        }
        .validationMsg
        {
            margin-left: 10px;
            color: Red;
            float: left;
            padding: 5px; /*background-color: #DEDEDE;*/
            background-color: Black;
        }
        .radioButtonList td
        {
            vertical-align: bottom;
            text-align: right;
            font-weight: bold;
        }
        .radioButtonList input[type="radio"]
        {
            float: right;
            margin: 3px -20px 0px -150px;
        }
        .radioButtonList label
        {
            width: 180px;
            display: block;
        }
        label
        {
            font-family: 'Lucida Grande' , 'Lucida Sans Unicode' , ' Helvetica Neue' , 'Helvetica' , 'Arial' , 'Verdana' , 'sans-serif';
            font-size: 1.4em;
            color: #555555;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="header1" style="margin-top: 0px; margin-bottom: 0px; position:fixed">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->
    </div>
    <div id="wrapper">
        <section>
            <div class="container_8 clearfix">
                <!-- Sidebar -->
                <uc8:leftmenu ID="leftmenu" runat="server"/>
                <!-- Sidebar End -->
                <!-- Main Section -->
                <!-- the tabs -->
                <section class="grid_7" style="padding-top: 0px">
                    <asp:ScriptManager ID="ScriptManager1" runat="server">
                    </asp:ScriptManager>
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
                            <div class="main-content grid_4 alpha" style="width: 800px; padding-top: 0px">
                                <header class="clearfix">
                                    <hgroup>
                                        <h2>
                                            Import Data
                                        </h2>
                                    </hgroup>
                                </header>
                                <section>
                                    <table>
                                        <tr>
                                            <td>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:DropDownList ID="ddlTypeOfData" runat="server">
                                                    <asp:ListItem>ExpenseItems</asp:ListItem>
                                                    <asp:ListItem>Departments</asp:ListItem>
                                                    <asp:ListItem>PreferredVendors</asp:ListItem>
                                                    <asp:ListItem>Users</asp:ListItem>
                                                </asp:DropDownList>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:FileUpload ID="fupd" runat="server" class="multi" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="dvData" runat="server" style="display: none">
                                                    <asp:GridView ID="gvDataImported" runat="server">
                                                        <Columns>
                                                            <asp:TemplateField>
                                                                <HeaderTemplate>
                                                                    <table class="datatable paginate sortable1 full" style="width: 100%">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <table class="datatable paginate sortable1 full" style="margin-top: -0.7%; width: 100%;
                                                                        height: 41px">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                    </asp:GridView>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </section>
                            </div>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                    <!-- Main Section End -->
                </section>
            </div>
            <div id="push">
            </div>
        </section>
    </div>
    <!--footer-->
    <uc5:footer ID="footer" runat="server" />
    <!--footer-->
    </form>
</body>
</html>
