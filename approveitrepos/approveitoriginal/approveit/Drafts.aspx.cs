using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Configuration;
using System.Data.OleDb;
using Money = System.Double;
using Shares = System.Double;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.ComponentModel;

public partial class Drafts : System.Web.UI.Page
{
    #region Private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    string str = string.Empty;

    #endregion

    #region Drafts

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            btnUpload.Attributes.Add("onclick", "javascript:return ValidateDrafts();");
            if (!IsPostBack)
            {
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                Session.Remove("dsDrafts");
                BindDrafts();
                txtKeywordSearch.Focus();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + "-- From Drafts.aspx", ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void BindDrafts()
    {
        DataSet dsDrafts = new DataSet();
        if (Session["dsDrafts"] == null)
        {
            var strDrafts = xms.getDraftItems(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ut.NullSafeInteger(Session["UserID"]));
            List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(strDrafts);
            dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
            Session["dsDrafts"] = dsDrafts;
        }
        else
            dsDrafts = (DataSet)Session["dsDrafts"];

        if ((Session["SortExpr"] != null) && Session["SortDir"] != null)
        {
            DataView sortedView = new DataView(dsDrafts.Tables[0]);
            sortedView.Sort = Session["SortExpr"].ToString() + " " + Session["SortDir"].ToString();
            gvDrafts.DataSource = sortedView;
        }
        else
            gvDrafts.DataSource = dsDrafts;

        gvDrafts.DataBind();
    }

    protected void gvDrafts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnAttOrgName = (HiddenField)e.Row.FindControl("hdnAttOrgName");
            HiddenField hdnDrftName = (HiddenField)e.Row.FindControl("hdnDrftName");
            ImageButton imgDraft = (ImageButton)e.Row.FindControl("imgDraft");
            HtmlControl ancClose = (HtmlControl)e.Row.FindControl("ancClose");
            HtmlControl dvEditErr = (HtmlControl)e.Row.FindControl("dvEditErr");
            TextBox txtEditDescr = (TextBox)e.Row.FindControl("txtEditDescr");
            LinkButton lnkDescr = (LinkButton)e.Row.FindControl("lnkDescr");
            Button btnSaveDescr = (Button)e.Row.FindControl("btnSaveDescr");
            AjaxControlToolkit.ModalPopupExtender popDesc = (AjaxControlToolkit.ModalPopupExtender)e.Row.FindControl("popDesc");
            string extension = Path.GetExtension(hdnDrftName.Value);
            if (extension.ToLower().Contains("pdf"))
                imgDraft.ImageUrl = "images/pdfIcon.png";
            else
            {
                //System.Net.WebClient webClient = new System.Net.WebClient();
                //string base64ImageString = webClient.DownloadString(ConfigurationManager.AppSettings["BetaSiteLink"] + "invoice.ashx?func=18&dn=" + hdnAttOrgName.Value.Replace("/", "~"));
                byte[] strReq = xms.getExpDraftsById(hdnDrftName.Value, 2);
                string base64ImageString = ConvertBytesToBase64(strReq);
                imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[1].Style["padding-left"] = "20px";
            e.Row.Cells[1].Style["padding-right"] = "20px";
            e.Row.Cells[2].Style["text-align"] = "left";
            e.Row.Cells[3].Style["text-align"] = "center";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
            ancClose.Attributes.Add("onclick", "javascript: return closeNewProfilePop('" + txtEditDescr.ClientID + "', '" + lnkDescr.Text + "', '" + popDesc.ClientID + "');");
            btnSaveDescr.Attributes.Add("onclick", "javascript: return validateDescription('" + txtEditDescr.ClientID + "', '" + lnkDescr.Text + "', '" + popDesc.ClientID + "', '" + dvEditErr.ClientID + "');");
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir"] != null && Session["Control"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control"].ToString());
                if (Session["SortDir"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void DownLdAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgName");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgName");
        HiddenField hdnDrftName = (HiddenField)row.FindControl("hdnDrftName");

        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control"] = lnk.ID;

        if (Session["SortDir"] == null || Session["SortDir"].ToString() == "Desc")
            Session["SortDir"] = "Asc";
        else
            Session["SortDir"] = "Desc";

        Session["SortExpr"] = e.CommandArgument;
        BindDrafts();
    }

    protected void UploadFiles(object sender, EventArgs e)
    {
        str = UploadMoreFiles();
        if (str.ToLower().Contains("y"))
        {
            dvError.Style.Add("color", "Green");
            dvError.InnerHtml = "Drafts added Successfully";
            Session.Remove("dsDrafts");
            BindDrafts();
            ClearFields();
        }
        else
        {
            dvError.Style.Add("color", "Red");
            dvError.InnerHtml = "An Error occurred while uploading a draft please try again.";
        }
    }

    protected void DelDraft(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnDrft = (HiddenField)row.Cells[0].FindControl("hdnDrft");
        Session["hdndrft"] = hdnDrft.Value;
        popAlert.Show();
    }

    protected void ConfirmDelete(object sender, EventArgs e)
    {
        //string ret = xms.deleteExpDrafts(Convert.ToInt32(Session["hdndrft"]));
        string attId = string.Empty;
        foreach (GridViewRow row in gvDrafts.Rows)
        {
            CheckBox chkDelAtt = (CheckBox)row.FindControl("chkDelAtt");
            HiddenField hdnDrft = (HiddenField)row.FindControl("hdnDrft");
            if (chkDelAtt.Checked)
                attId += hdnDrft.Value + "~";
        }
        attId = attId.TrimEnd('~');
        string retStr = xms.deleteMulAttachment(attId, 3, string.Empty, 0, 0, string.Empty);
        if (retStr.ToLower().Contains("succes"))
        {
            dvError.Style.Add("color", "Green");
            dvError.InnerText = retStr;
            Session.Remove("dsDrafts");
            BindDrafts();
            btnDeleteSelected.Style["display"] = "none";
        }
        else
        {
            dvError.Style.Add("color", "Red");
            dvError.InnerText = "An error occured while deleting draft(s). Please try later.";
        }
        popAlert.Hide();
    }

    protected void RetainDialog(object sender, EventArgs e)
    {
        BindDrafts();
    }

    private string UploadMoreFiles()
    {
        Random random = new Random();
        HttpFileCollection hfc = Request.Files;
        string[] orgFileNames = new string[hfc.Count];
        for (int i = 0; i < hfc.Count; i++)
        {
            HttpPostedFile hpf = hfc[i];
            if (hpf.ContentLength > 0 && hpf.ContentLength < 10485760)
            {
                string ext = Path.GetExtension(hpf.FileName);
                int index = hpf.FileName.IndexOf('.');
                string fName = hpf.FileName.Substring(0, index);
                AttachmentVO att = new AttachmentVO();
                att.addedOn = DateTime.Now.ToShortDateString();
                att.attachmentId = 0;
                att.compCode = Session["CompCode"].ToString();
                att.expLineNo = 0;
                att.fileName = ut.NullSafeInteger(Session["UserID"]) + "_drafts_" + fName + random.Next();
                att.orgId = ut.NullSafeInteger(Session["OrgID"]);
                att.orgName = Path.GetFileName(hpf.FileName);
                att.requestId = 0;
                att.orgFilePath = " ";
                att.hdFileName = " ";
                if (ext.ToLower() == ".pdf")
                {
                    int fileSize;
                    fileSize = hpf.ContentLength;
                    Stream fileStream = fupd1.PostedFile.InputStream;
                    byte[] bArray = new byte[fileSize];
                    fileStream.Read(bArray, 0, 2097152);
                    str = xms.addExpDraftsNew(bArray, att, 2, ut.NullSafeInteger(Session["UserID"]), txtDescr.Text);
                }

                else
                {
                    byte[] fileData = null;
                    using (var binaryReader = new BinaryReader(Request.Files[i].InputStream))
                    {
                        fileData = binaryReader.ReadBytes(Request.Files[i].ContentLength);
                    }
                    str = xms.addExpDraftsNew(fileData, att, 1, ut.NullSafeInteger(Session["UserID"]), txtDescr.Text);
                }
            }
            else
                ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('Please upload file of size greater than zero not exceeding 10MB');", true);
        }
        return str;
    }

    private void ClearFields()
    {
        txtDescr.Text = string.Empty;
    }

    protected void DeleteSelectedAttachments(object sender, EventArgs e)
    {
        btnDeleteSelected.Style["display"] = "block";
        popAlert.Show();
    }

    protected void btnReloadData_Click(object sender, EventArgs e)
    {
        Session.Remove("dsDrafts");
        dvError.InnerHtml = string.Empty;
        BindDrafts();
        txtKeywordSearch.Text = string.Empty;
        txtKeywordSearch.Focus();
    }

    protected void btnSaveDescr_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((Button)sender).Parent.Parent.Parent;
        HiddenField hdnDraftId = (HiddenField)row.FindControl("hdnDraftId");
        TextBox txtEditDescr = (TextBox)row.FindControl("txtEditDescr");

        DraftDetailsVO draft = new DraftDetailsVO();
        draft.compCode = Session["CompCode"].ToString();
        draft.desc = txtEditDescr.Text;
        draft.draftId = ut.NullSafeInteger(hdnDraftId.Value);
        draft.orgId = ut.NullSafeInteger(Session["OrgID"]);
        string retStr = xms.updateExpDrafts(draft);
        if (retStr.ToLower().Contains("succes"))
        {
            dvError.Style["color"] = "Green";
            Session.Remove("dsDrafts");
            BindDrafts();
        }
        else
            dvError.Style["color"] = "Red";
        dvError.InnerHtml = retStr;
    }
}
    #endregion