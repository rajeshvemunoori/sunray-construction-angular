<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Drafts.aspx.cs" Inherits="Drafts" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="IdeaSparx.CoolControls.Web" Namespace="IdeaSparx.CoolControls.Web"
    TagPrefix="isx" %>
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
    <title>ApproveIt - Drafts</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="latestdesign/img/favicon.ico">
    <link href="latestdesign/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="latestdesign/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="latestdesign/css/reset.css">
    <link rel="stylesheet" href="latestdesign/css/inner-page-style.css">
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

        label {
            font-family: Tahoma, Arial, sans-serif;
            font-size: 1.4em;
            color: #555555;
        }

            label em {
                font-weight: bold;
            }

        #gvDraftsjEsCoOl_headerDiv {
            background-color: #3B6AA0;
        }

        #gvDraftsjEsCoOl_footerDiv {

            overflow-x: hidden;
    overflow-y: hidden !important;
        }
        #gvDraftsjEsCoOl_mainDiv {

            width: 95%;
    overflow:  auto !important;
    border-color: Gray;
    border-width: 1px;
    border-style: Solid;
        }
         .popover-content {

            min-width:250px;
        }


            #gvDraftsjEsCoOl_headerDiv div table tbody tr th {
                height: 30px;
                color: white;
                text-align: center;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 1.3em;
                font-weight: normal;
            }

        #gvDrafts tbody tr td {
            /*vertical-align:middle;*/
            height: 35px;
    border-bottom: 1px solid #E6E4E4;
    /* padding-left: 10px; */
    /* padding-right: 10px; */
    border: 0.5px solid #eceaea;
        }

        #gvDraftsjEsCoOl_mainDiv {
            overflow: hidden;
            position:absolute;
            top:50px;
            bottom:50px;
        }

        #gvDrafts TR TD, #gvDrafts TR TH, #gvDrafts TR TH div, #gvDrafts TR TD div {
            overflow: visible;
        }

        #gvDraftsjEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv, #gvDraftsjEsCoOl_headerDiv {
					background-color: #3B6AA0;
				}

					#gvDraftsjEsCoOl_headerDiv div table tbody tr th, #gvDeptExpjEsCoOl_headerDiv div table tbody tr th,
					#gvDraftsjEsCoOl_headerDiv div table tbody tr th {
						 height: 30px;
						line-height:20px;
						color: white;
						text-align: center;
					   font-family: "Open Sans", sans-serif;
						font-size:13px !important;
						font-weight: normal;
						border:0.5px solid rgba(0,0,0,0.1);
						padding:0px 5px;
					}

				#gvImpExpItems tbody tr td, #gvDeptExp tbody tr td, #gvClass tbody tr td {
					height: 30px;
						line-height:27px;
				   border:0.5px solid rgba(0,0,0,0.1);
					text-align: center;
					padding-left: 10px;
					padding-right: 10px;
					 font-size:12px !important;
				}

				#gvDraftsjEsCoOl_mainDiv, #gvDeptExpjEsCoOl_mainDiv, #gvClassjEsCoOl_mainDiv {
					width: 1180px;
					height: 200px;
					overflow: hidden;
				}

				#gvDeptExp TR TD, #gvDeptExp TR TH, #gvDeptExp TR TH div, #gvDeptExp TR TD div,
				#gvImpExpItems TR TD, #gvImpExpItems TR TH, #gvImpExpItems TR TH div, #gvImpExpItems TR TD div,
				#gvClass TR TD, #gvClass TR TH, #gvClass TR TH div, #gvClass TR TD div {
					overflow: visible;
				}

				.tablepop {
					width: 100%;
				}

					.tablepop td {
					}

						.tablepop td table {
							width: 100%;
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
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-white" style=" padding:0px;">
        	<div class=" container-fluid  cd-main-content"  >

            <section class="grid_7" style="padding-top: 0px">
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
                        <asp:PostBackTrigger ControlID="btnUpload" />
                    </Triggers>
                    <ContentTemplate>
                        <div class="main-content grid_4 alpha" style="width: 100%; margin-top: 50px">

                                 <div class="row ">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 10px;">                                              
                                    <div id="dvHeader" class="page-title"> <%-- <span class="font-awesome-icon-block"><i class="fa fa-plus" aria-hidden="true"></i></span>--%>Drafts</div>
                                                 
                                            </div>

                                     
                                      <div class="clearfix"></div>
                                      <asp:Button ID='btnRefresh' runat="server" CssClass='RefreshNotes' Style='display: none' />
                                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"  > 
                                             <div id="dvError" runat="server" class="mb20" style="color: Red; font-weight: bold">
                                        </div>
                                          </div>
                                           <div class="clearfix"></div>
                                    <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                                             <div class="col-sm-5" style ="   display: inline-flex;">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Select :
                                                                 <a href="#" data-toggle="popover" data-trigger="hover" data-content="File types allowd are .png, .jpg, .jpeg, .tiff, .tif and .pdf. Maximum file size should be 10MB" style="padding:8px"><span class="infoicon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
                                                                </label>
                                                                 </div>
                                                             <div class="col-sm-7">  
                                                                  <asp:FileUpload ID="fupd1" runat="server" class="multi form-control" Style="float: left" /> 
                                                                 </div>     
                                         </div>

                                          <div class="form-group padd-zero col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                             <div class="col-sm-5">
                                                            <label class="form-label label_setting" for="orgcode"><i class="fa fa-star maroon-text" aria-hidden="true"></i> Description </label>
                                                                 </div>
                                                             <div class="col-sm-7">   
                                                                 <asp:TextBox ID="txtDescr" runat="server" Rows="2" TextMode="MultiLine"  CssClass="form-control"></asp:TextBox>                                                                
                                                                 </div>     
                                         </div>

                                            <div class=" col-xs-12 col-sm-12 col-md-4 col-lg-4 mt10">
                                                <asp:Button ID="btnUpload" runat="server" OnClick="UploadFiles" Text="Upload" CssClass="btn btn-success pull-left" />
                                                  <asp:Button ID="btnDeleteSelected" runat="server" Text="Remove Selected" CssClass="btn btn-danger pull-right"
                                                            OnClick="DeleteSelectedAttachments" Style="display: none" />&nbsp; <asp:Button ID="btnReloadData" runat="server" Text="Refresh" CssClass=" btn btn-warning" OnClick="btnReloadData_Click" />                                                                
                                            </div>

                                </div>
                            <section>
                               
                                                                          <div class="clearfix"></div>

                                        <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 mt10" style="padding:0px">
                                        <table style="width: 100%">
                                            <tr>
                                                <td style="width:200px;">
                                                    <div class="form-group   has-feedback" style="width:362px !important;">       
                                              <asp:TextBox ID="txtKeywordSearch" CssClass="filterdata form-control" runat="server"  placeholder="Type in description to search.." />
                                              <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                                  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <isx:CoolGridView ID="gvDrafts" runat="server" AllowPaging="false" Width="59.2%"
                                                          AutoGenerateColumns="false" GridLines="None" ShowHeader="true"
                                                        ShowFooter="true" OnRowDataBound="gvDrafts_RowDataBound">
                                                        <Columns>
                                                            <asp:TemplateField HeaderStyle-Width="120px" ControlStyle-Width="120px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAttachment" runat="server" Text="Draft" CommandArgument="orgName"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <asp:HiddenField ID="hdnAttOrgName" runat="server"    Value='<%# Eval("OrgFilePath")%>' />
                                                                    <asp:HiddenField ID="hdnOrgName" runat="server" Value='<%# Eval("OrgName")%>' />
                                                                    <asp:HiddenField ID="hdnDrftName" runat="server"   Value='<%#Eval("fileName") %>' />
                                                                    <asp:HiddenField ID="hdnDraftId" runat="server" Value='<%#Eval("attachmentId") %>' />
                                                                    <asp:ImageButton runat="server" ID="imgDraft"  style="width:100px;height:80px;vertical-align:middle;margin: 5px auto -8px;  display: block;" OnClick="DownLdAtt" />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField ControlStyle-Width="300px" HeaderStyle-Width="300px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkDescr" runat="server" Text="Description" CommandArgument="compCode"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label>
                                                                        <asp:LinkButton ID="lnkDescr" runat="server" Text='<%#Eval("compCode")%>' CssClass="text-center" ToolTip="click to edit"></asp:LinkButton></label>
                                                                    <asp:Panel ID="pnlDescr" runat="server" Style="display: none">
                                                                        <div class="main-content" style="margin: 0px 0px 0px 0px;   min-height: 200px; min-width: 300px;">
                                                                             <div class="pop-page-title " style="padding: 7px; font-size: 17px;">     
                                                                                  <div class="row  ">
                                                                                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                                                        <div class="pop-page-title-inner">
                                                                                        Rename
                                                                                        </div>
                                                                                    </div> 
                                                                                      <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                                                        <div class="pull-right">
                                                                                              <div id="dvCloseBtn" style="vertical-align: top; height: 10px; text-align: right;">
                                                                                                   <a href="#" id="ancClose" runat="server" onclick="return closeNewProfilePop();">
                                                                                                   <img alt="close" src="images/icons/cross.png" /></a>
                                                                                             </div>

                                                                                        </div>
                                                                                         </div>
                                                                                      </div>
                                                                                </div>

                                                                          
                                                                            <div id="dvEditErr" runat="server"></div>
                                                                            <asp:TextBox ID="txtEditDescr" runat="server" TextMode="MultiLine" Text='<%#Eval("compCode")%>'  CssClass="form-control" style="color: red;width:200px !important;margin:0px auto"></asp:TextBox>
                                                                            <br />
                                                                            <div style="text-align: right;padding: 7px;margin-top:34px;">
                                                                                <asp:Button ID="btnSaveDescr" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSaveDescr_Click" />
                                                                            </div>
                                                                        </div>
                                                                    </asp:Panel>
                                                                    <cc1:ModalPopupExtender ID="popDesc" runat="server" TargetControlID="lnkDescr" PopupControlID="pnlDescr"
                                                                        BackgroundCssClass="modalBackground1">
                                                                    </cc1:ModalPopupExtender>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField ControlStyle-Width="150px" HeaderStyle-Width="150px">
                                                                <HeaderTemplate>
                                                                    <asp:LinkButton ID="lnkAddedOn" runat="server" Text="Added On" CommandArgument="addedOn"
                                                                        OnCommand="SortExpression" CssClass="lnk"></asp:LinkButton>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <label><%# Convert.ToDateTime(Eval("addedOn")).ToShortDateString()%></label>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderText="Remove" ControlStyle-Width="90px" HeaderStyle-Width="90px">
                                                                <ItemTemplate>
                                                                    <asp:CheckBox ID="chkDelAtt" runat="server" onclick="showDeleteButton(this)" />
                                                                    <asp:HiddenField ID="hdnDrft" runat="server" Value='<%# Eval("attachmentId")%>' />
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                        </Columns>
                                                        <EmptyDataTemplate>
                                                            <div class="alert alert-warning" style="width:400px;text-align:center;font-weight:bold">
                                                                <label>
                                                                    No drafts to display.</label>
                                                            </div>
                                                        </EmptyDataTemplate>
                                                    </isx:CoolGridView>
                                                </td>
                                                <td>
                                                    <div id="LargeImageContainerDivDrft" style="width: 300px; height: 330px; text-align: center; vertical-align: middle">
                                                </td>
                                            </tr>
                                        </table>
                                            </div>
                                        <asp:Panel ID="pnlDelDrfts" runat="server" Style="display: none">
                                            <div class="main-content" id="Div4" runat="server" style="margin: 0px 0px 0px 10px; padding: 0px 0px 10px 0px; min-height: 20px; min-width: 400px">
                                               <div class="pop-page-title">     
                                              <div class="row  ">
                                                <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 ">
                                                    <div class="pop-page-title-inner">
                                                    Alert
                                                    </div>
                                                </div>

                                                            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                                    <div class="pull-right">
                                                                <asp:Button ID="btnYes" runat="server" OnClick="ConfirmDelete" Text="Yes" CssClass="btn btn-info" />
                                                                <asp:Button ID="btnNo" runat="server" Text="No" CssClass="btn btn-info" OnClick="RetainDialog" />
                                                           </div>
                                                                </div>
                                                   </div>
                                                   </div>
                                                  
                                                 <div class="form_edit" style=" padding: 20px;">
                                                    <small>
                                                        <div class="alert alert-warning">
                                                            Are you sure you want to delete this draft?</label></small>

                                                        </div>

                                                    </small>
                                                    
                                                </div>
                                            </div>
                                        </asp:Panel>
                                        <asp:LinkButton ID="lnkDelAlert" runat="server"></asp:LinkButton>
                                        <cc1:ModalPopupExtender ID="popAlert" runat="server" PopupControlID="pnlDelDrfts"
                                            TargetControlID="lnkDelAlert" CancelControlID="btnNo" BackgroundCssClass="modalBackground1">
                                        </cc1:ModalPopupExtender>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
            <!-- Main Section End -->
        </div>
        <!--footer-->
        <uc5:footer ID="footer" runat="server" />
        <!--footer-->
        </div>
             </div>
        </div>
        <script src="latestdesign/js/modernizr.js"></script>
        <script src="js/Validation.js" type="text/javascript"></script>
        <%--<script src="js/jquery.tools.min.js"></script>--%>
        <script src="latestdesign/js/jquery-2.1.4.js"></script>
        <script src="js/jquery.ui.min.js"></script>
        <script src="latestdesign/js/bootstrap.min.js"></script>
        <script src="latestdesign/js/jquery.menu-aim.js"></script>
        <script src="latestdesign/js/main.js"></script>
        <script src="js/jquery.MultiFile.js" type="text/javascript"></script>

          <script>
              $(function () {
                  $('[data-toggle="popover"]').popover()
              })
</script>


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


            function refreshExp() {
                $(".btnRefresh").click();
            }

            function pageLoad() {
                $("#fupd1").MultiFile();
            }

            function ValidateDrafts() {
                document.getElementById('dvError').innerHTML = "";
                document.getElementById('dvError').style.color = "Red";
                if (document.getElementById('fupd1').value == '') {
                    document.getElementById('dvError').innerHTML = "Please select atleast one file.";
                    return false;
                }
                if (document.getElementById('txtDescr').value == 0) {
                    document.getElementById('dvError').innerHTML = "Please enter Description.";
                    return false;
                }
                showProgress();
            }

            function $1(id) {
                return document.getElementById(id);
            }

            function showDeleteButton(objRef) {
                $1('dvError').innerHTML = '';
                var row = objRef.parentNode.parentNode.parentNode.parentNode.parentNode;
                //Get the reference of GridView
                var GridView = row.parentNode;
                //Get all input elements in Gridview
                var inputList = GridView.getElementsByTagName("input");
                var checkCnt = 0;
                var unCheckCnt = 0;
                for (var i = 0; i < inputList.length; i++) {
                    //The First element is the Header Checkbox
                    var headerCheckBox = inputList[0];

                    //Based on all or none checkboxes
                    //are checked check/uncheck Header Checkbox
                    var checked = true;
                    if (inputList[i].type == "checkbox" && inputList[i] != headerCheckBox) {
                        if (!inputList[i].checked) {
                            checked = false;
                            unCheckCnt++;//break;
                        }
                        else
                            checkCnt++;
                    }
                }
                if (parseInt(checkCnt) > 0)
                    $1("btnDeleteSelected").style.display = "block";
                else
                    $1("btnDeleteSelected").style.display = "none";
            }

            //Filter drafts grid with text provided in search box
            function Filter(Obj) {
                var grid = document.getElementById('gvDrafts');
                var terms = Obj.value.toUpperCase();
                var cellNr = 0; //your grid cellindex like name
                var ele;
                for (var r = 0; r < grid.rows.length; r++) {
                    ele = grid.rows[r].cells[1].innerHTML.replace(/<[^>]+>/g, "");
                    //ele = grid.rows[r].innerHTML.replace(/<[^>]+>/g, "");
                    if (ele.toUpperCase().indexOf(terms) >= 0)
                        grid.rows[r].style.display = '';
                    else grid.rows[r].style.display = 'none';
                }
               // Obj.setFocus();
            }
            //Filter drafts grid with text provided in search box

            //Close New profile creation popup
            function closeNewProfilePop(editDescr, descr, pop) {
                $11(editDescr).value = descr;
                $find(pop).hide();
                return false;
            }

            //validate description
            function validateDescription(editDescr, descr, pop, dv) {
                if ($11(editDescr).value == descr) {
                    $11(dv).style.color = "Red";
                    $11(dv).innerHTML = "No changes to update!";
                    $find(pop).show();
                    return false;
                }
                else
                    return true;
            }
            //validate description
        </script>
    </form>
</body>
</html>
