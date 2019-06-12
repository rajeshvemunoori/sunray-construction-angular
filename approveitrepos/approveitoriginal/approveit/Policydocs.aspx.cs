using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Policydocs : System.Web.UI.Page
{
    #region private variables
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    #endregion

    #region PolicyDocuments

    #region Load data

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        try
        {
            if (!IsPostBack)
            {
                Session.Remove("dsPolicies");
                Session.Remove("dtPolicy");
                GetPolicyDocs();
                if (Session["IsAdmin"].ToString() == "false")
                {
                    if (Session["IsAP"] == null)
                        btnUploadPDocs.Visible = false;
                    else
                        btnUploadPDocs.Visible = true;
                }
                else
                    btnUploadPDocs.Visible = true;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void GetPolicyDocs()
    {
        string str = xms.getPolicyDocs(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<PoliciesVO> lst = ser.Deserialize<List<PoliciesVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lst));
        Session["dsPolicies"] = ds;
        gvPolicyDocs.DataSource = ds;
        gvPolicyDocs.DataBind();
    }

    protected void gvPolicyDocs_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvPolicyDocs.PageIndex = e.NewPageIndex;
        GetPolicyDocs();
    }

    protected void gvPolicyDocs_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblSl = (Label)e.Row.FindControl("lblSl");
            lblSl.Text = Convert.ToInt32(e.Row.RowIndex + 1).ToString();

            LinkButton lnkDelete = (LinkButton)e.Row.FindControl("lnkDelete");
            if (Session["IsAdmin"].ToString() == "false")
            {
                if (Session["IsAP"] == null)
                    lnkDelete.Visible = false;
                else
                    lnkDelete.Visible = true;
            }
            else
                lnkDelete.Visible = true;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            e.Row.Cells[0].Style["text-align"] = "right";
            e.Row.Cells[1].Style["text-align"] = "left";
            e.Row.Cells[2].Style["text-align"] = "left";
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("dsPolicies");
        GetPolicyDocs();
    }

    #endregion

    #region Edit Policy

    protected void EditPolicy(object sender, CommandEventArgs e)
    {
        btnSaveEdit.Attributes.Add("onclick", "javascript:showProgress();");
        Session.Remove("dtPolicy");
        DataSet ds = (DataSet)Session["dsPolicies"];
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        Label lblPolicyID = (Label)row.FindControl("lblPolicyID");
        string expr = "PolicyID = " + lblPolicyID.Text;
        DataView view = new DataView(ds.Tables[0], expr, "PolicyID", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        Session["dtPolicy"] = dt;
        lblFNameLnk.Text = "<a href = 'DownloadPolicy.aspx?pid=" + dt.Rows[0]["PolicyID"].ToString() + "'>" + dt.Rows[0]["FileName"].ToString() + "</a>";
        txtEditDesc.Text = dt.Rows[0]["Description"].ToString();
        hdnDescr.Value = dt.Rows[0]["Description"].ToString();
        if (Session["IsAdmin"].ToString() == "false")
        {
            if (Session["IsAP"] == null)
            {
                btnSaveEdit.Visible = false;
                DvUpPolicy.Visible = false;
            }
            else
            {
                btnSaveEdit.Visible = true;
                DvUpPolicy.Visible = true;
            }
        }
        else
        {
            btnSaveEdit.Visible = true;
            DvUpPolicy.Visible = true;
        }
        dvMsgEdit.InnerHtml = string.Empty;
        popEdit.Show();
    }

    protected void UpdatePolicy(object sender, EventArgs e)
    {
        dvMsg.InnerHtml = string.Empty;
        string retStr = string.Empty;
        string fName = string.Empty;
        bool fileToBeUploaded = fupdEdit.HasFile;
        PoliciesVO policy = new PoliciesVO();
        DataTable dt = (DataTable)Session["dtPolicy"];
        if (fileToBeUploaded || hdnDescr.Value != txtEditDesc.Text)
        {
            if (fileToBeUploaded)
            {
                string targetPath = Server.MapPath("Policies");
                fName = fupdEdit.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupdEdit.SaveAs(path);
                policy.addedBy = Session["UserID"].ToString();
                policy.addedOn = DateTime.Now.ToShortDateString();
                policy.compCode = Session["CompCode"].ToString();
                policy.description = txtEditDesc.Text;
                policy.dirPath = path;
                policy.filename = fName;
                policy.modifiedBy = Session["UserID"].ToString();
                policy.modifiedOn = DateTime.Now.ToShortDateString();
                policy.orgId = Convert.ToInt32(Session["OrgID"]);
                policy.policyId = Convert.ToInt32(dt.Rows[0]["PolicyID"]);
            }
            else
            {
                policy.addedBy = Session["UserID"].ToString();
                policy.addedOn = DateTime.Now.ToShortDateString();
                policy.compCode = Session["CompCode"].ToString();
                policy.description = txtEditDesc.Text;
                policy.dirPath = dt.Rows[0]["DirPath"].ToString();
                policy.filename = dt.Rows[0]["fileName"].ToString();
                policy.modifiedBy = Session["UserID"].ToString();
                policy.modifiedOn = DateTime.Now.ToShortDateString();
                policy.orgId = Convert.ToInt32(Session["OrgID"]);
                policy.policyId = Convert.ToInt32(dt.Rows[0]["PolicyID"]);
            }

            retStr = xms.addOrgPolicies(policy);
            if (retStr.ToLower().Contains("fail"))
                dvMsgEdit.Style["color"] = "Red";
            else
            {
                dvMsgEdit.Style["color"] = "Green";
                GetPolicyDocs();
                if (fName != string.Empty)
                    lblFNameLnk.Text = "<a href = 'DownloadPolicy.aspx?pid=" + dt.Rows[0]["PolicyID"].ToString() + "'>" + fName + "</a>";
            }
            dvMsgEdit.InnerHtml = retStr;
        }
        else
        {
            dvMsgEdit.InnerHtml = "No changes to update";
            dvMsgEdit.Style["color"] = "Red";
        }
        popEdit.Show();
    }

    #endregion

    #region Delete Policy

    protected void DeletePolicy(object sender, CommandEventArgs e)
    {
        hdnPID.Value = e.CommandArgument.ToString();
        popDel.Show();
    }

    protected void DeleteConfirm(object sender, EventArgs e)
    {
        xms.deletePolicy(Convert.ToInt32(Session["OrgID"]), Convert.ToInt32(hdnPID.Value));
        popDel.Hide();
        GetPolicyDocs();
    }

    #endregion

    #region UploadFiles

    protected void UploadNewDocs(object sender, EventArgs e)
    {
        btnUpload.Attributes.Add("onclick", "javascript:return validatePolicyUploads();");
        btnMore.Attributes.Add("onclick", "javascript:return ShowMore();");
        dvMore.Style["display"] = "none";
        dvMsg.InnerHtml = "Please select files of type .doc/.docx/.pdf/.txt";
        dvMsg.Style["color"] = "Red";
        btnMore.Visible = true;
        lblOrg.Text = Session["SOrgName"].ToString();
        lblComp.Text = Session["CompCode"].ToString();
        popup.Show();
    }

    protected void UploadFiles(object sender, EventArgs e)
    {
        string errFile = string.Empty;
        if (fupd1.HasFile)
        {
            //Upload fiiles1
            string targetPath = Server.MapPath("Policies");
            string fName = fupd1.FileName;
            fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
            string path = targetPath + "\\" + fName;
            fupd1.SaveAs(path);
            string retStr = CallDBForUpload(fName, txtDesc1.Text, path);
            if (retStr.ToLower().Contains("fail"))
                errFile += fupd1.FileName + ", ";
        }
        if (fupd2.HasFile)
        {
            //Upload fiiles2
            string targetPath = Server.MapPath("Policies");
            string fName = fupd2.FileName;
            fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
            string path = targetPath + "\\" + fName;
            fupd1.SaveAs(path);
            string retStr = CallDBForUpload(fName, txtDesc2.Text, path);
            if (retStr.ToLower().Contains("fail"))
                errFile += fupd2.FileName + ", ";
        }
        if (fupd3.HasFile)
        {
            //Upload fiiles3
            string targetPath = Server.MapPath("Policies");
            string fName = fupd3.FileName;
            fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
            string path = targetPath + "\\" + fName;
            fupd1.SaveAs(path);
            string retStr = CallDBForUpload(fName, txtDesc3.Text, path);
            if (retStr.ToLower().Contains("fail"))
                errFile += fupd3.FileName + ", ";
        }
        if (fupd4.HasFile)
        {
            //Upload fiiles4
            string targetPath = Server.MapPath("Policies");
            string fName = fupd4.FileName;
            fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
            string path = targetPath + "\\" + fName;
            fupd1.SaveAs(path);
            string retStr = CallDBForUpload(fName, txtDesc4.Text, path);
            if (retStr.ToLower().Contains("fail"))
                errFile += fupd4.FileName + ", ";
        }
        if (fupd5.HasFile)
        {
            //Upload fiiles5
            string targetPath = Server.MapPath("Policies");
            string fName = fupd5.FileName;
            fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
            string path = targetPath + "\\" + fName;
            fupd5.SaveAs(path);
            string retStr = CallDBForUpload(fName, txtDesc5.Text, path);
            if (retStr.ToLower().Contains("fail"))
                errFile += fupd5.FileName + ", ";
        }
        //if (dvMore.Style["display"] == "block")
        if (dvMore.Visible == true)
        {
            if (fupd6.HasFile)
            {
                //Upload fiiles1
                string targetPath = Server.MapPath("Policies");
                string fName = fupd6.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupd6.SaveAs(path);
                string retStr = CallDBForUpload(fName, txtDesc6.Text, path);
                if (retStr.ToLower().Contains("fail"))
                    errFile += fupd6.FileName + ", ";
            }
            if (fupd7.HasFile)
            {
                //Upload fiiles2
                string targetPath = Server.MapPath("Policies");
                string fName = fupd7.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupd7.SaveAs(path);
                string retStr = CallDBForUpload(fName, txtDesc7.Text, path);
                if (retStr.ToLower().Contains("fail"))
                    errFile += fupd7.FileName + ", ";
            }
            if (fupd8.HasFile)
            {
                //Upload fiiles3
                string targetPath = Server.MapPath("Policies");
                string fName = fupd8.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupd8.SaveAs(path);
                string retStr = CallDBForUpload(fName, txtDesc8.Text, path);
                if (retStr.ToLower().Contains("fail"))
                    errFile += fupd8.FileName + ", ";
            }
            if (fupd9.HasFile)
            {
                //Upload fiiles4
                string targetPath = Server.MapPath("Policies");
                string fName = fupd9.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupd9.SaveAs(path);
                string retStr = CallDBForUpload(fName, txtDesc9.Text, path);
                if (retStr.ToLower().Contains("fail"))
                    errFile += fupd9.FileName + ", ";
            }
            if (fupd10.HasFile)
            {
                //Upload fiiles5
                string targetPath = Server.MapPath("Policies");
                string fName = fupd10.FileName;
                fName = Session["OrgID"].ToString() + "_" + Session["CompCode"].ToString() + "_" + fName;
                string path = targetPath + "\\" + fName;
                fupd10.SaveAs(path);
                string retStr = CallDBForUpload(fName, txtDesc10.Text, path);
                if (retStr.ToLower().Contains("fail"))
                    errFile += fupd10.FileName + ", ";
            }
        }
        if (!string.IsNullOrEmpty(errFile))
        {
            dvMsg.Style["color"] = "Red";
            errFile = errFile.TrimEnd(',');
            dvMsg.InnerHtml = "Failed uploading file(s) " + errFile;
            popup.Show();
        }
        else
        {
            dvMsg.Style["color"] = "Green";
            dvMsg.InnerHtml = "Uploaded files successfully.";
            txtDesc1.Text = txtDesc2.Text = txtDesc3.Text = txtDesc4.Text = txtDesc5.Text = string.Empty;
            GetPolicyDocs();
            popup.Hide();
        }
        dvMore.Style["display"] = "none";
    }

    protected void MoreUploads(object sender, EventArgs e)
    {
        dvMore.Style["display"] = "block";
        btnMore.Visible = false;
        popup.Show();
    }

    string CallDBForUpload(string fileName, string description, string path)
    {
        PoliciesVO policy = new PoliciesVO();
        policy.addedBy = Session["UserID"].ToString();
        policy.addedOn = DateTime.Now.ToShortDateString();
        policy.compCode = Session["CompCode"].ToString();
        policy.description = description;
        policy.dirPath = path;
        policy.filename = fileName;
        policy.modifiedBy = Session["UserID"].ToString();
        policy.modifiedOn = DateTime.Now.ToShortDateString();
        policy.orgId = Convert.ToInt32(Session["OrgID"]);
        policy.policyId = 0;
        return xms.addOrgPolicies(policy);
    }

    #endregion

    #endregion
}