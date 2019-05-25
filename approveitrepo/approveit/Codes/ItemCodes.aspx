<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ItemCodes.aspx.cs" Inherits="Codes_ItemCodes" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
<%@ Register TagPrefix="uc2" TagName="top" Src="../Controls/jobsitetop.ascx" %>
<%@ Register TagPrefix="uc3" TagName="sitebar" Src="../Controls/jobsiteleft.ascx" %>
<%@ Register TagPrefix="uc5" TagName="footer" Src="../Controls/jobsitefooter.ascx" %>
<%@ Register TagPrefix="uc7" TagName="siteadmin" Src="../Controls/siteadminleft.ascx" %>
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
    <title>ApproveIt - ItemCodes Maintenance</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="../latestdesign/css/bootstrap-select.min.css" />
    <link href="../latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../latestdesign/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../latestdesign/css/reset.css" />
    <link rel="stylesheet" href="../latestdesign/css/inner-page-style.css" />
    <%-- <link href="../Styles/udf/ufd-base.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/udf/plain/plain.css" rel="stylesheet" type="text/css" />--%>

    <style>
        .modalBackground1 {
            background: #000 none repeat scroll 0 0;
            filter: Alpha(Opacity=65);
            opacity: 0.65;
            -moz-opacity: 0.65;
            z-index: 999 !important;
        }

        .lnk {
            color: White;
        }

        .lbl {
            text-align: right;
        }

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1em;
            color: #555555;
        }

        .popover-content {
            min-width: 250px;
        }

        .mesg_info {
            font-size: 15px;
            line-height: 25px;
        }

        label em {
            font-weight: bold;
        }


        #dvAIItemInput {
            display: inline-flex !important;
        }

        #gvItemCdjEsCoOl_headerDiv, #gvVendItemjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

            #gvItemCdjEsCoOl_headerDiv div table tbody tr th, #gvVendItemjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                line-height: 20px;
                color: white;
                text-align: center;
                font-family: "Open Sans", sans-serif;
                font-size: 13px !important;
                font-weight: normal;
                border: 0.5px solid rgba(0,0,0,0.1);
                padding: 0px 5px;
            }

        #gvItemCd tbody tr td, #gvVendItem tbody tr td {
            height: 30px;
            line-height: 27px;
            border: 0.5px solid rgba(0,0,0,0.1);
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px !important;
        }

        #gvItemCdjEsCoOl_mainDiv, #gvVendItemjEsCoOl_mainDiv {
            height: 200px;
            overflow: auto;
            width: 100% !important;
        }

        #gvItemCd TR TD, #gvItemCd TR TH, #gvItemCd TR TH div, #gvItemCd TR TD div,
        #gvVendItem TR TD, #gvVendItem TR TH, #gvVendItem TR TH div, #gvVendItem TR TD div {
            overflow: visible;
        }

        .dvhalign {
            height: 425px;
            padding: 20px;
        }

        /*.form-control {
            padding: 6px 12px !important;
            height: 34px !important;
        }*/

        div.dd_chk_drop {
            background-color: white;
            border: 1px solid #CCCCCC;
            text-align: left;
            z-index: 1000;
            left: -1px;
            top: 33px !important;
            min-width: 100%;
        }


        /**tooltip style**/
        a#tooltip, a#tooltip1, a#tooltip2 {
            outline: none;
        }

            a#tooltip:hover, a#tooltip1:hover, a#tooltip2:hover {
                text-decoration: none;
            }

            a#tooltip span, a#tooltip1 span, a#tooltip2 span {
                z-index: 10;
                display: none;
                padding: 14px 20px;
                margin-top: -30px;
                margin-left: 0px;
                width: 300px;
                line-height: 16px;
                border-radius: 4px;
            }

            a#tooltip:hover span, a#tooltip1:hover span, a#tooltip2:hover span {
                display: inline;
                position: absolute;
                color: #111;
                border: 1px solid #DCA;
                background: #fffAF0;
            }
        /**tooltip style**/
        .completionList {
            border: solid 1px Gray;
            margin: 0px;
            padding: 3px;
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

        .deptmulti label {
            /*font-family: 'Lucida Grande', 'Lucida Sans Unicode', ' Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif';*/
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.0em;
            color: #555555;
        }
    </style>

    <%--<script src="../js/html5shiv.js" type="text/javascript"></script>--%>
    <script src="../latestdesign/js/modernizr.js"></script>
    <script src="../js/Ajax.js" type="text/javascript"></script>
    <script src="../js/Validation.js" type="text/javascript"></script>
    <%--<script src="../js/jquery.tools.min.js" type="text/javascript"></script>--%>
    <script src="../latestdesign/js/jquery-2.1.4.js"></script>
    <script src="../latestdesign/js/bootstrap.min.js"></script>
    <script src="../latestdesign/js/jquery.menu-aim.js"></script>
    <script src="../latestdesign/js/main.js"></script>
    <%--<script src="../Scripts/jquery-ui-1.8.13.js" type="text/javascript"></script>
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

        (function () {
            var html5elmeents = "address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time|video|label1".split('|');
            for (var i = 0; i < html5elmeents.length; i++) {
                document.createElement(html5elmeents[i]);
            }
        })();

        function pageLoad() {



        }

        function DoOnAjaxPostback() {

            //$(function () {
            //    $("#ddlCompCode").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlIntDepartment").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlIntClassification").ufd({ log: true });
            //});
            //$(function () {
            //    $("#ddlImpItemCodes").ufd({ log: true });
            //});
        }

        $(document).ready(function () {
            //    $(function () {
            //        $("#ddlCompCode").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlIntDepartment").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlIntClassification").ufd({ log: true });
            //    });
            //    $(function () {
            //        $("#ddlImpItemCodes").ufd({ log: true });
            //    });
        });

        function refreshExp() {
            $(".btnRefresh").click();
        }

        function clearData() {
            $11('dvMainMsg').innerHTML = '';
        }

        //Filter Item Codes gridview
        function Filter(Obj, grid) {
            var grid = document.getElementById(grid);
            var terms = Obj.value.toUpperCase();
            var cellNr = 0; //your grid cellindex like name
            var ele;
            for (var r = 0; r < grid.rows.length; r++) {
                ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                if (ele.toUpperCase().indexOf(terms) >= 0)
                    grid.rows[r].style.display = '';
                else grid.rows[r].style.display = 'none';
            }
            Obj.setFocus();
        }
        //Filter Item Codes gridview

        //Show/Hide add options
        function showField(type) {
            if (type == 0) {
                $11('dvQBItemInput').style.display = "none";
                $11('dvAIItemInput').style.display = "block";
                $11('hdnIsQBItemVisible').value = "0";
                $11('lblItemTooltip').innerText = "Type in item code and must be unique.";
            }
            if (type == 1) {
                $11('dvQBItemInput').style.display = "block";
                $11('dvAIItemInput').style.display = "none";
                $11('hdnIsQBItemVisible').value = "1";
                $11('lblItemTooltip').innerText = "Select Item from the list OR Click '+' Sign to create new Item. Must be unique.";
            }
        }
        //Show/Hide add options

        //Redirect to Sync screen
        function transferToSync() {
            showProgress();
            window.location.href = "../SyncAcc.aspx";
        }
        //Redirect to Sync screen

        //import QB vendors
        function showConfirmationImportQBItem(sender, args) {
            $11('lblImpExpQBItemFileName').innerHTML = args.get_fileName();
        }
        //import QB vendors
    </script>
    <!-- 
This javascript code is required if you are using a CoolGridView inside an update pannel.
-->
    <script type="text/javascript">
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

</head>
<body style="overflow-x: hidden;">
    <form id="form1" runat="server">
        <!--header-->
        <uc2:top ID="top1" runat="server" />
        <!--header-->


        <div class="row menu-bg">

            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 " style="padding: 0px; margin: 0px;">
                <uc8:leftmenu ID="leftmenu" runat="server" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style="padding: 0px;">
                <div class=" container-fluid  cd-main-content">
                    <!-- Main Section -->
                    <section class="grid_7" style="padding-top: 0px; margin-top: 70px;">
                        <!-- the tabs -->
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
                        <div class="clear">
                            <br />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                            <Triggers>
                                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                                <asp:AsyncPostBackTrigger ControlID="btnRefresh" EventName="Click" />
                                <asp:PostBackTrigger ControlID="lnkExportQBItem" />
                            </Triggers>
                            <ContentTemplate>
                                <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                <div class="main-content" style="width: 100%;">
                                    <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="page-title">Item Maintenance</div>
                                        </div>

                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="pull-right">
                                                <asp:Button ID="btnImportExport" runat="server" Text="Import/Export Items" CssClass="btn btn-info" OnClick="btnImportExport_Click" />
                                                <asp:Button ID="btnSyncWithQB" runat="server" Text="Synchronize" CssClass="btn btn-info" />
                                                <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass="btn btn-warning" OnClick="ReloadData" />
                                            </div>
                                        </div>
                                    </div>

                                    <section>
                                        <div class="divfieldset">
                                            <div class="  ">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb20 mt10 text-center">
                                                    <div id="dvMainMsg" runat="server" style="font-weight: bold"></div>
                                                </div>
                                                <div class="clearfix"></div>

                                                <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="col-sm-5 padd-zero">
                                                        <label class="form-label label_setting" for="orgcode">CompanyCode:</label>
                                                    </div>
                                                    <div class="col-sm-7 padd-zero">
                                                        <asp:DropDownList ID="ddlCompCode" runat="server" OnSelectedIndexChanged="ddlCompCode_SelectedIndexChanged"
                                                            DataTextField="BusinessType" DataValueField="CompCode" AutoPostBack="true" CssClass="form-control selectpicker" data-live-serach="true">
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <%-- <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="col-sm-5">
                                                        <label class="form-label label_setting" for="orgcode">Organization</label>
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <label style="padding-top: 7px; font-weight: bold;">
                                                            <asp:Label ID="lblOrgID" runat="server"></asp:Label>
                                                        </label>
                                                    </div>
                                                </div>--%>


                                                <div id="dvItemsByAcc" runat="server">
                                                    <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="alert alert-info">
                                                            <label class="mesg_info"><em>*</em>Please type in the ItemCode to get list of Accounts based on the selected department(s).</label>
                                                        </div>
                                                    </div>


                                                    <div class="clearfix"></div>


                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5" style="display: inline-flex">
                                                            <label class="form-label label_setting" for="orgcode">
                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>Department:
                                                             <a href="#" data-toggle="popover" data-trigger="hover" data-content="Select any department to get list of all the account names assigned for it." data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <div>
                                                                <asp:DropDownCheckBoxes ID="ddlDepartment" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                    DataTextField="Description" DataValueField="CodeKey" OnSelectedIndexChanged="ddlDepartment_SelectedIndexChanged" AutoPostBack="true" CssClass="deptmulti form-control">
                                                                    <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Departments" />
                                                                </asp:DropDownCheckBoxes>
                                                                <asp:DropDownList ID="ddlIntDepartment" runat="server" Width="180px" DataTextField="Description" DataValueField="CodeKey" OnSelectedIndexChanged="ddlIntDepartment_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                <asp:HiddenField ID="hdnIsThirdPartyIntegrated" runat="server" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5" style="display: inline-flex">
                                                            <label class="form-label label_setting" for="orgcode">
                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>Account Name:
                                                                 <a href="#" data-toggle="popover" data-trigger="hover" data-content="Select any account name to assign new item to be created." data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <asp:DropDownCheckBoxes ID="ddlClassification" runat="server" UseButtons="true" UseSelectAllNode="true" AddJQueryReference="true"
                                                                DataTextField="AccountClss" DataValueField="expcode" Width="200px" AutoPostBack="true" OnSelectedIndexChanged="ddlClassification_SelectedIndexChanged1" CssClass="deptmulti form-control">
                                                                <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" SelectBoxCaption="Select Multiple Accounts" />
                                                            </asp:DropDownCheckBoxes>
                                                            <asp:DropDownList ID="ddlIntClassification" runat="server" Width="180px" DataTextField="AccountClss" DataValueField="expcode" OnSelectedIndexChanged="ddlIntClassification_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>


                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5" style="display: inline-flex">
                                                            <label class="form-label label_setting" for="orgcode">
                                                                <i class="fa fa-star maroon-text" aria-hidden="true"></i>ItemCode: 
                                                                 <a href="#" data-toggle="popover" data-trigger="hover" data-content=" Select Item from the list     OR  Click '+' Sign to create new Item. Must be unique." data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <asp:HiddenField ID="hdnIsQBItemVisible" runat="server" />
                                                            <asp:HiddenField ID="hdnQBItemID" runat="server" />
                                                            <div id="dvQBItemInput" runat="server">
                                                                <asp:DropDownList ID="ddlImpItemCodes" runat="server" DataTextField="itemCode" DataValueField="itemCode" Width="180px"></asp:DropDownList>
                                                                <a href="#" id="iconQB" onclick="showField(0);" class="addItem btn btn-info" title="Add new item" style="text-decoration: none">&nbsp;<i class="fa fa-plus" aria-hidden="true"></i>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <div id="dvAIItemInput" runat="server">
                                                                    <asp:TextBox ID="txtItemCode" runat="server" CssClass="form-control"></asp:TextBox>
                                                                    &nbsp; &nbsp; &nbsp;
                                                                    <cc1:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtItemCode"
                                                                        MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="100" ServiceMethod="GetVendors" UseContextKey="True" CompletionListCssClass="completionList"
                                                                        CompletionListItemCssClass="listItem"
                                                                        CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                    </cc1:AutoCompleteExtender>
                                                                    <a href="#" id="iconNew" onclick="showField(1);" class="import button btn btn-info" title="Show imported items" style="text-decoration: none;">&nbsp;<i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i>Description: </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <asp:TextBox ID="txtDescr" runat="server" TextMode="MultiLine" Width="165px" CssClass="form-control"></asp:TextBox>
                                                        </div>
                                                    </div>



                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Notes: </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <asp:TextBox ID="txtItemNotes" runat="server" CssClass="form-control" TextMode="MultiLine" Width="165px"></asp:TextBox>
                                                        </div>
                                                    </div>


                                                    <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12 text">
                                                        <asp:Button ID="btnAdd" runat="server" Text="Add" CssClass="btn btn-success" OnClick="AddItemCode"></asp:Button>
                                                    </div>

                                                    <div class="clearfix"></div>

                                                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

                                                        <asp:Panel ID="pnlImportHover" runat="server" Style="display: none">
                                                            <div class="main-content" style="margin: 0px 0px 0px 5px; background-color: #ccc; padding: 0 0px 5px 0px; min-height: 115px; min-width: 130px; height: 85px;">
                                                                <div style="padding: 5px;">
                                                                    <div class="divfieldset" style="background-color: white">

                                                                        <ul style="line-height: 25px; text-align: center">
                                                                            <li style="border-bottom: 0.5px solid #eaeaea;">
                                                                                <asp:LinkButton ID="lnkImportQBItem" runat="server" Text="Import Items From Excel"></asp:LinkButton></li>
                                                                            <li>
                                                                                <asp:LinkButton ID="lnkExportQBItem" runat="server" Text="Export Items To Excel" OnClick="lnkExportQBItemData_Click"></asp:LinkButton></li>

                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </asp:Panel>
                                                        <cc1:HoverMenuExtender ID="hveImpItem" runat="server" TargetControlID="btnImportExport"
                                                            PopupControlID="pnlImportHover" PopupPosition="Bottom">
                                                        </cc1:HoverMenuExtender>
                                                    </div>


                                                    <div class="clearfix"></div>

                                                    <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata  form-control" runat="server" Width="250px" placeholder="Type Item or Descr or Account Name or Notes  to search.." />
                                                    </div>

                                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                        <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode">Filter By Account Name: </label>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <asp:DropDownCheckBoxes ID="ddlAllClass" runat="server" UseButtons="true" UseSelectAllNode="true"
                                                                AutoPostBack="true" OnSelectedIndexChanged="AllClassificationChanged" DataTextField="AccountClss"
                                                                DataValueField="expcode" Width="150px" CssClass="form-control">
                                                                <Texts OkButton="OK" CancelButton="Cancel" SelectAllNode="ALL" />
                                                            </asp:DropDownCheckBoxes>
                                                        </div>
                                                    </div>


                                                    <div class="  col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom: 100px;">
                                                        <div class=" ">
                                                            <table width="100%">
                                                                <tr>
                                                                    <td colspan="3" width="100%">
                                                                        <isx:CoolGridView ID="gvItemCd" runat="server" AutoGenerateColumns="false"
                                                                            Height="280px" GridLines="None" OnRowDataBound="gvItemCd_RowDataBound" OnRowCommand="gvItemCd_RowCommand"
                                                                            OnRowDeleting="gvItemCd_RowDeleting" OnRowCancelingEdit="gvItemCd_RowCancelingEdit"
                                                                            OnRowEditing="gvItemCd_RowEditing" OnRowUpdating="gvItemCd_RowUpdating">
                                                                            <Columns>
                                                                                <asp:TemplateField>
                                                                                    <HeaderTemplate>
                                                                                        Action
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <asp:LinkButton ID="lnkEdit" runat="server" ToolTip="Update" CommandName="Edit"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>
                                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" CommandName="Delete">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <asp:LinkButton ID="lnkUpdate" runat="server" ToolTip="Update" CommandName="Update"><img src="../images/icons/tick.png" alt="Update"></asp:LinkButton>
                                                                                        <asp:LinkButton ID="lnkCancel" runat="server" ToolTip="Cancel" CommandName="Cancel"><img src="../images/icons/cancel.png" alt="Cancel"/></asp:LinkButton>
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkItemCode" runat="server" Text="ItemCode" CommandArgument="itemCode"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <%#Eval("itemCode")%></label>
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditItemCode" runat="server" Text='<%#Eval("itemCode")%>'></asp:Label></label>
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkDescription" runat="server" Text="Description" CommandArgument="description"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <%#Eval("description")%></label>
                                                                                        <asp:HiddenField ID="hdnItemId" runat="server" Value='<%#Eval("itemId")%>' />
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <asp:TextBox ID="txtEditDescr" runat="server" Text='<%#Eval("description")%>' Width="150px"></asp:TextBox>
                                                                                        <asp:HiddenField ID="hdnEditItemId" runat="server" Value='<%#Eval("itemId")%>' />
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkClassification" runat="server" Text="Account Name" CommandArgument="budgetClassification"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <%#Eval("budgetClassification")%></label>
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditBudgClss" runat="server" Text='<%#Eval("budgetClassification")%>'></asp:Label></label>
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField ItemStyle-Width="150px" HeaderStyle-Width="150px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkDept" runat="server" Text="Department" CommandArgument="deptCode"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <%#Eval("deptCode")%></label>
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <label>
                                                                                            <asp:Label ID="lblEditDept" runat="server" Text='<%#Eval("deptCode")%>'></asp:Label></label>
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                                <asp:TemplateField ItemStyle-Width="200px" HeaderStyle-Width="200px">
                                                                                    <HeaderTemplate>
                                                                                        <asp:LinkButton ID="lnkNotes" runat="server" Text="Notes" CommandArgument="itemNotes"
                                                                                            OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                                    </HeaderTemplate>
                                                                                    <ItemTemplate>
                                                                                        <label>
                                                                                            <%#Eval("itemNotes")%></label>
                                                                                    </ItemTemplate>
                                                                                    <EditItemTemplate>
                                                                                        <asp:TextBox ID="txtEditNotes" runat="server" Text='<%#Eval("itemNotes")%>' Width="70px"></asp:TextBox>
                                                                                    </EditItemTemplate>
                                                                                </asp:TemplateField>
                                                                            </Columns>
                                                                            <EmptyDataTemplate>
                                                                                <div style="width: 400px">
                                                                                    <label>
                                                                                        No ItemCodes available for selected Account Name(s)</label>
                                                                                </div>
                                                                            </EmptyDataTemplate>
                                                                        </isx:CoolGridView>
                                                                        <asp:HiddenField ID="hdnMisc" runat="server" />
                                                                        <asp:HiddenField ID="hdnItemCode" runat="server" />
                                                                        <asp:HiddenField ID="hdnClassification" runat="server" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="clear: both"></div>
                                                <div id="dvItemsByVend" runat="server" style="padding: 5px 20px;">

                                                    <div class="row ">
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; Vendor Name:     
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:DropDownList ID="ddlVendor" runat="server" DataTextField="preferredVendor"
                                                                    DataValueField="vendorId" AutoPostBack="true" OnSelectedIndexChanged="ddlVendor_SelectedIndexChanged" CssClass="form-control selectpicker" data-show-subtext="true" data-live-search="true">
                                                                </asp:DropDownList>

                                                            </div>

                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    Vendor Code:    
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendCode" runat="server" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="row ">
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Vendor Part# 
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">

                                                                <asp:TextBox ID="txtVendPartNo" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>

                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Vendor Part Descr. 
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendPartDesc" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>

                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp; UOM    
                                                                </label>
                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendUOM" CssClass="form-control" runat="server"></asp:TextBox>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <!--**********************************************-->
                                                    <div class="row ">
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    <i class="fa fa-star maroon-text" aria-hidden="true"></i>&nbsp;Unit Price ($)     
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendUnitPrice" CssClass="form-control" runat="server"></asp:TextBox>

                                                            </div>

                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    Internal Item#     
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendItemCode" runat="server" CssClass="form-control" autocomplete="off"></asp:TextBox>
                                                                <cc1:AutoCompleteExtender ID="AutoCompleteExtender2" runat="server" TargetControlID="txtVendItemCode"
                                                                    MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000" ServiceMethod="GetItems" UseContextKey="True" CompletionListCssClass="completionList"
                                                                    CompletionListItemCssClass="listItem"
                                                                    CompletionListHighlightedItemCssClass="itemHighlighted">
                                                                </cc1:AutoCompleteExtender>

                                                            </div>

                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <div class="col-sm-5 padd-zero">

                                                                <label class="form-label label_setting" for="lastname">
                                                                    Internal Item Descr.    
                                                                </label>

                                                            </div>

                                                            <div class="col-sm-7 padd-zero">
                                                                <asp:TextBox ID="txtVendItemDesc" runat="server" CssClass="form-control" autocomplete="off"></asp:TextBox>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <!--**********************************************-->
                                                    <div class="row ">
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 padd-zero">
                                                            <asp:TextBox ID="txtVendItemSearch" CssClass="filterdata  form-control" runat="server" Width="250px" placeholder="Type here to search items"></asp:TextBox>
                                                        </div>
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 padd-zero">
                                                            <asp:Button ID="btnAddvendItem" runat="server" Text="Add Item" CssClass="btn btn-info pull-right" OnClick="btnAddvendItem_Click" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-zero">
                                                            <div style="width: 100%; overflow: auto;">
                                                                <isx:CoolGridView ID="gvVendItem" runat="server" OnRowDataBound="gvVendItem_RowDataBound" OnRowEditing="gvVendItem_RowEditing"
                                                                    OnRowUpdating="gvVendItem_RowUpdating" OnRowDeleting="gvVendItem_RowDeleting" OnRowCancelingEdit="gvVendItem_RowCancelingEdit"
                                                                    OnRowCommand="gvVendItem_RowCommand" AutoGenerateColumns="false" GridLines="None" Width="1020px" Height="250px" ShowHeader="true">
                                                                    <Columns>
                                                                        <asp:TemplateField>
                                                                            <HeaderTemplate>
                                                                                Action
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <asp:LinkButton ID="lnkEdit" runat="server" ToolTip="Update" CommandName="Edit"><img src="../images/icons/pencil.png" alt="Edit"/></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <asp:LinkButton ID="lnkDelete" runat="server" ToolTip="Delete" CommandName="Delete">
                                                                <img src="../images/icons/dialog_cancel.png" alt="Delete"/></asp:LinkButton>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:LinkButton ID="lnkUpdate" runat="server" ToolTip="Update" CommandName="Update"><img src="../images/icons/tick.png" alt="Update"></asp:LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <asp:LinkButton ID="lnkCancel" runat="server" ToolTip="Cancel" CommandName="Cancel"><img src="../images/icons/cancel.png" alt="Cancel"/></asp:LinkButton>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderText="vendor" HeaderStyle-Width="200px" ControlStyle-Width="200px">
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <asp:Label ID="lblVendor" runat="server"></asp:Label></label>
                                                                                <asp:HiddenField ID="hdnVendID" runat="server" Value='<%#Eval("vendorID")%>' />
                                                                            </ItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="100px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkVendorPartNo" runat="server" Text="Vendor Part#" CommandArgument="vendPartNo"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("vendPartNo")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditVendPartNo" runat="server" Text='<%#Eval("vendPartNo")%>' Width="130px"></asp:TextBox>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="150px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkVendPartDesc" runat="server" Text="Vendor Part Descr." CommandArgument="vendPartDesc"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("vendPartDesc")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditVendPartDescr" runat="server" Text='<%#Eval("vendPartDesc")%>' Width="180px"></asp:TextBox>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="80px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkUOM" runat="server" Text="UOM" CommandArgument="uom"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("uom")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditUOM" runat="server" Text='<%#Eval("uom")%>' Width="80px"></asp:TextBox>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="100px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkUnitPrice" runat="server" Text="Unit Price ($)" CommandArgument="unitPrice"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("unitPrice")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditUnitPrice" runat="server" Text='<%#Eval("unitPrice")%>' Width="80px"></asp:TextBox>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="100px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkItemCode" runat="server" Text="Internal Item#" CommandArgument="itemCode"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("itemCode")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditItemCode" runat="server" Text='<%#Eval("itemCode")%>' Width="130px"></asp:TextBox>
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                        <asp:TemplateField HeaderStyle-Width="150px">
                                                                            <HeaderTemplate>
                                                                                <asp:LinkButton ID="lnkItemDesc" runat="server" Text="Internal Item Descr." CommandArgument="itemDesc"
                                                                                    OnCommand="SortVendItemExpression" CssClass="lnk"></asp:LinkButton>
                                                                            </HeaderTemplate>
                                                                            <ItemTemplate>
                                                                                <label>
                                                                                    <%#Eval("itemDesc")%></label>
                                                                            </ItemTemplate>
                                                                            <EditItemTemplate>
                                                                                <asp:TextBox ID="txtEditItemDesc" runat="server" Text='<%#Eval("itemDesc")%>' Width="170px"></asp:TextBox>
                                                                                <asp:HiddenField ID="hdnVenditemID" runat="server" Value='<%#Eval("itemID")%>' />
                                                                                <asp:HiddenField ID="hdnVendID" runat="server" Value='<%#Eval("vendorID")%>' />
                                                                            </EditItemTemplate>
                                                                        </asp:TemplateField>
                                                                    </Columns>
                                                                    <EmptyDataTemplate>
                                                                        <div style="width: 400px">
                                                                            <label>
                                                                                No items available for selected vendor.</label>
                                                                        </div>
                                                                    </EmptyDataTemplate>
                                                                </isx:CoolGridView>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!--*****************-->
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <asp:Panel ID="pnlAlert" runat="server" DefaultButton="btnYes" Style="display: none">
                                    <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                        <div class="pop-page-title">
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                        <div id="dvAddFiscalCal">Alert</div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnYes" runat="server" OnClick="DeleteConfirm" Text="Yes" CssClass="buttonnew-blue" />
                                                        <asp:Button ID="btnNo" runat="server" Text="No" CssClass="buttonnew-blue" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <section>
                                            <div class="divfieldset" style="padding: 20px;">
                                                <small class="alert alert-danger">
                                                    <label>Are you sure you want to delete this ItemCode?</label></small>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <asp:LinkButton ID="lnkAlert" runat="server"></asp:LinkButton>
                                <cc1:ModalPopupExtender ID="popAlert" runat="server" DropShadow="false" PopupControlID="pnlAlert"
                                    TargetControlID="lnkAlert" BackgroundCssClass="modalBackground1" CancelControlID="btnNo">
                                </cc1:ModalPopupExtender>
                                <asp:Panel ID="pnlImpExpQBItem" runat="server" Style="display: none">
                                    <div class="main-content" id="Div3" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 450px">

                                        <div class="pop-page-title">
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                        <div>Import/Export Items</div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">

                                                        <asp:Button ID="btnImpExpQBItemClose" runat="server" Text="Close" CssClass="btn btn-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <section>
                                            <div class="divfieldset">
                                                <div id="dvImpExpErr" runat="server"></div>
                                                <%--<div class="message info">
                                                    <label><em>*</em>This wizard allows you to integrate items data with Quick Books desktop version.</label>
                                                </div>--%>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <table class="tablemain">
                                                                <tr>
                                                                    <td width="30%">
                                                                        <cc1:AsyncFileUpload ID="fupImpExpQBItem" CompleteBackColor="White" runat="server" CssClass="fupdqbvend form-control"
                                                                            UploaderStyle="Traditional" UploadingBackColor="#CCFFFF" ThrobberID="lblImpExpQBItemThrobber" OnUploadedComplete="fupImpExpQBItem_UploadedComplete"
                                                                            OnClientUploadComplete="showConfirmationImportQBItem" Style="float: left; border: 1px solid #aaaaaa; width: 300px !important;" />
                                                                        <div style="float: right; padding-left: 0.5em">
                                                                            <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .csv, .xls and .xlsx" data-original-title="" title=""><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="70%">
                                                                        <asp:Button ID="btnImpExpQBItemConfirm" runat="server" Text="Import" CssClass="btn btn-warning"
                                                                            OnClick="btnImpExpQBItemConfirm_Click" />
                                                                        <a href="../DownloadFile.aspx?typ=19">Click here</a> to download template.
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <asp:Label ID="lblImpExpQBItemFileName" runat="server"></asp:Label>
                                                            <asp:Label ID="lblImpExpQBItemThrobber" runat="server" Style="display: none">
                                                                            <img src="../images/indicator.gif" align="absmiddle" alt="loading" />
                                                            </asp:Label>
                                                        </td>
                                                    </tr>
                                                    <%-- <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h4>
                                                                <asp:LinkButton ID="lnkExportQBItemData" runat="server" OnClick="lnkExportQBItemData_Click">Click here</asp:LinkButton>
                                                                to download items data.</h4>
                                                        </td>
                                                    </tr>--%>
                                                </table>
                                            </div>
                                        </section>
                                    </div>
                                </asp:Panel>
                                <cc1:ModalPopupExtender ID="popImpExpQBItem" runat="server" PopupControlID="pnlImpExpQBItem" TargetControlID="lnkImportQBItem"
                                    CancelControlID="btnImpExpQBItemClose" DropShadow="false" BackgroundCssClass="modalBackground1">
                                </cc1:ModalPopupExtender>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </section>
                    <!-- Main Section End -->
                </div>
                <div class="clearfix">
                    <br />
                </div>
            </div>
        </div>
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
    </form>
</body>
</html>
