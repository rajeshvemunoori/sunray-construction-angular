using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Collections;

public partial class UserAccess : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    ArrayList arrayList1 = new ArrayList();
    ArrayList arrayList2 = new ArrayList();
    string addedBy, modifiedBy, groupId, userGroup, userProfile, orgId, compCode;
    DataSet dsGroupsList = new DataSet();
    string appString = "###";
    private bool _refreshExp = false;

    #endregion

    #region Profiles

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                btnSaveProfile.Attributes.Add("onclick", "javascript: return validateNewProfile();");
                BindProfiles();
                dvGroupErr.InnerHtml = string.Empty;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserId"]));
        }
    }

    void BindProfiles()
    {
        GetProfiles();
        LoadScreensInLists();
    }

    private void GetProfiles()
    {
        //string str = xms.getCodes(0, "ALL", "ERROLES");
        string str = xms.getCodes(ut.NullSafeInteger(Session["OrgID"].ToString()), Session["CompCode"].ToString(), "ERROLES");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "Description ASC";
        ddlProfiles.DataSource = dv;
        ddlProfiles.DataTextField = "Description";
        ddlProfiles.DataValueField = "CodeKey";
        ddlProfiles.DataBind();
    }

    protected void ddlProfiles_SelectedIndexChanged(object sender, EventArgs e)
    {
        LoadScreensInLists();
    }

    private void LoadScreensInLists()
    {
        //Load assigned screens list
        DataTable dt = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dt, "CODEID = 'ERSCREENS'", "CODEKEY", DataViewRowState.CurrentRows);
        DataTable dtAssigned = LoadAssignedScreens();
        DataView dvSort = new DataView();

        //get list of all screen ids in to an array
        string[] arrScrID = dtAssigned.AsEnumerable().Select(r => r.Field<string>("CodeKey")).ToArray();

        if (dtAssigned.Rows.Count > 0)
        {
            DataTable dtClone = dv.ToTable().Clone();
            for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            {
                //for (int j = 0; j < dv.ToTable().Rows.Count; j++)
                //{
                //if (dtAssigned.Rows[i]["scrnId"].ToString() == dv.ToTable().Rows[j]["CodeKey"].ToString())
                if (arrScrID.Contains(dv.ToTable().Rows[i]["CodeKey"].ToString()))
                { }
                else
                    dtClone.ImportRow(dv.ToTable().Rows[i]);
                //}
            }

            dvSort = dtClone.DefaultView;
            dvSort.Sort = "Description ASC";
            gvAllScreens.DataSource = dtClone;
        }
        else
        {
            dv.Sort = "Description ASC";
            gvAllScreens.DataSource = dv;
        }
        gvAllScreens.DataBind();
    }

    private DataTable LoadAssignedScreens()
    {
        //Load assigned screens list
        string strAssigned = xms.getProfileDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ddlProfiles.SelectedValue, string.Empty);
        List<ProfileVO> lstAssigned = ser.Deserialize<List<ProfileVO>>(strAssigned);
        DataTable dtAssigned = Utility.ConvertToDataTable(lstAssigned);

        DataView dv = dtAssigned.DefaultView;
        dv.Sort = "Description ASC";
        gvSelectedScreens.DataSource = dv;
        gvSelectedScreens.DataBind();
        return dtAssigned;
    }

    protected void gv_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSelect = (HiddenField)e.Row.FindControl("hdnSelect");
            RadioButtonList rblRW = (RadioButtonList)e.Row.FindControl("rblRW");
            //Highlight row backcolor on mouse over
            //e.Row.Attributes.Add("onmouseover", "mouseOverRow(this);");
            //e.Row.Attributes.Add("onmouseout", "mouseOutRow(this);");
            e.Row.Style["cursor"] = "default";
            e.Row.Attributes.Add("onclick", "selectRowGvAll(this, '" + hdnSelect.ClientID + "', '1');");
            rblRW.Attributes.Add("onclick", "selectRowGvAll(this, '" + hdnSelect.ClientID + "', '0');");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvSelectedScreens_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSelect = (HiddenField)e.Row.FindControl("hdnSelect");
            //Highlight row backcolor on mouse over
            //e.Row.Attributes.Add("onmouseover", "mouseOverRowGvAll(this);");
            //e.Row.Attributes.Add("onmouseout", "mouseOutRowGvAll(this);");
            e.Row.Style["cursor"] = "default";
            e.Row.Attributes.Add("onclick", "selectRowGvAll(this, '" + hdnSelect.ClientID + "', '1');");
            //Highlight row backcolor on mouse over 
        }
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback();", true);

            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshExp", "setTimeout('refreshExp();', 800);", true);
        }
    }

    protected void btnRefresh_Click(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        BindProfiles();
    }

    #endregion

    #region AllowedScreens

    protected void AllowSelectedScreens(object sender, EventArgs e)
    {
        SaveSelectedScreensToAssignAccess(1);
    }

    protected void AllowMultipleScreens(object sender, EventArgs e)
    {
        SaveSelectedScreensToAssignAccess(0);
    }

    private void SaveSelectedScreensToAssignAccess(int type)
    {
        string appString = "###";
        string compCode, crossId, orgId, profileId, profileName, readAccess, scrnDesc, scrnId, scrnName, userId, usrGrp, writeAccess;
        compCode = crossId = orgId = profileId = profileName = readAccess = scrnDesc = scrnId = scrnName = userId = usrGrp = writeAccess = string.Empty;
        int cnt = 0;

        foreach (GridViewRow row in gvAllScreens.Rows)
        {
            HiddenField hdnSelect = (HiddenField)row.FindControl("hdnSelect");
            HiddenField hdnCodeKey = (HiddenField)row.FindControl("hdnCodeKey");
            HiddenField hdnCodeValue1 = (HiddenField)row.FindControl("hdnCodeValue1");
            Label lblScreenDescr = (Label)row.FindControl("lblScreenDescr");
            RadioButtonList rblRW = (RadioButtonList)row.FindControl("rblRW");
            if (type == 1)
            {
                if (hdnSelect.Value == "1")
                {
                    compCode += Session["CompCode"].ToString() + appString;
                    crossId += "0" + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    profileId += "0" + appString;
                    profileName += ddlProfiles.SelectedValue + appString;
                    scrnDesc += lblScreenDescr.Text + appString;
                    scrnId += hdnCodeKey.Value + appString;
                    scrnName += hdnCodeValue1.Value + appString;
                    userId += Session["UserID"].ToString() + appString;
                    usrGrp += " " + appString;
                    if (ddlProfiles.SelectedValue.ToLower() == "admin")
                    {
                        readAccess += "Y" + appString;
                        writeAccess += "Y" + appString;
                    }
                    else
                    {
                        readAccess += (rblRW.SelectedValue == "R" ? "Y" : "N") + appString;
                        writeAccess += (rblRW.SelectedValue == "W" ? "Y" : "N") + appString;
                    }
                    cnt++;
                }
            }
            else if (type == 0)
            {
                compCode += Session["CompCode"].ToString() + appString;
                crossId += "0" + appString;
                orgId += Session["OrgID"].ToString() + appString;
                profileId += "0" + appString;
                profileName += ddlProfiles.SelectedValue + appString;
                scrnDesc += lblScreenDescr.Text + appString;
                scrnId += hdnCodeKey.Value + appString;
                scrnName += hdnCodeValue1.Value + appString;
                userId += Session["UserID"].ToString() + appString;
                usrGrp += " " + appString;
                if (ddlProfiles.SelectedValue.ToLower() == "admin")
                {
                    readAccess += "Y" + appString;
                    writeAccess += "Y" + appString;
                }
                else
                {
                    readAccess += (rblRW.SelectedValue == "R" ? "Y" : "N") + appString;
                    writeAccess += (rblRW.SelectedValue == "W" ? "Y" : "N") + appString;
                }
            }
        }
        if (type == 1 && cnt == 0)
            DisplayMainMessage("Red", "Please select atleast one screen to assign access.");
        else
        {
            ProfileMulVO prof = new ProfileMulVO();
            prof.compCode = compCode.Substring(0, compCode.Length - 3);
            prof.crossId = crossId.Substring(0, crossId.Length - 3);
            prof.orgId = orgId.Substring(0, orgId.Length - 3);
            prof.profileId = profileId.Substring(0, profileId.Length - 3);
            prof.profileName = profileName.Substring(0, profileName.Length - 3);
            prof.readAccess = readAccess.Substring(0, readAccess.Length - 3);
            prof.scrnDesc = scrnDesc.Substring(0, scrnDesc.Length - 3);
            prof.scrnId = scrnId.Substring(0, scrnId.Length - 3);
            prof.scrnName = scrnName.Substring(0, scrnName.Length - 3);
            prof.userId = userId.Substring(0, userId.Length - 3);
            prof.usrGrp = usrGrp.Substring(0, usrGrp.Length - 3);
            prof.writeAccess = writeAccess.Substring(0, writeAccess.Length - 3);
            string retStr = xms.addProfileDetailsMul(prof);
            if (retStr.ToLower().Contains("succes"))
            {
                DisplayMessage("Green", retStr);
                LoadScreensInLists();
            }
            else
                DisplayMessage("Red", retStr);
        }
    }

    protected void BlockSelectedScreens(object sender, EventArgs e)
    {
        SaveSelectedScreensToBlockAccess(1);
    }

    protected void BlockMultipleScreens(object sender, EventArgs e)
    {
        SaveSelectedScreensToBlockAccess(0);
    }

    private void SaveSelectedScreensToBlockAccess(int type)
    {

        string appString = "###";
        string compCode, crossId, orgId, profileId, profileName, readAccess, scrnDesc, scrnId, scrnName, userId, usrGrp, writeAccess;
        compCode = crossId = orgId = profileId = profileName = readAccess = scrnDesc = scrnId = scrnName = userId = usrGrp = writeAccess = string.Empty;
        int cnt = 0;

        foreach (GridViewRow row in gvSelectedScreens.Rows)
        {
            HiddenField hdnSelect = (HiddenField)row.FindControl("hdnSelect");
            HiddenField hdnCrossID = (HiddenField)row.FindControl("hdnCrossID");
            if (type == 1)
            {
                if (hdnSelect.Value == "1")
                {
                    compCode += Session["CompCode"].ToString() + appString;
                    crossId += hdnCrossID.Value + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    profileId += "0" + appString;
                    profileName += ddlProfiles.SelectedValue + appString;
                    readAccess += " " + appString;
                    scrnDesc += " " + appString;
                    scrnId += " " + appString;
                    scrnName += " " + appString;
                    userId += Session["UserID"].ToString() + appString;
                    usrGrp += " " + appString;
                    writeAccess += " " + appString;
                    cnt++;
                }
            }
            else if (type == 0)
            {
                compCode += Session["CompCode"].ToString() + appString;
                crossId += hdnCrossID.Value + appString;
                orgId += Session["OrgID"].ToString() + appString;
                profileId += "0" + appString;
                profileName += ddlProfiles.SelectedValue + appString;
                readAccess += " " + appString;
                scrnDesc += " " + appString;
                scrnId += " " + appString;
                scrnName += " " + appString;
                userId += Session["UserID"].ToString() + appString;
                usrGrp += " " + appString;
                writeAccess += " " + appString;
            }
        }

        if (type == 1 && cnt == 0)
            DisplayMainMessage("Red", "Please select atleast one screen to block access.");

        ProfileMulVO prof = new ProfileMulVO();
        prof.compCode = compCode.Substring(0, compCode.Length - 3);
        prof.crossId = crossId.Substring(0, crossId.Length - 3);
        prof.orgId = orgId.Substring(0, orgId.Length - 3);
        prof.profileId = profileId.Substring(0, profileId.Length - 3);
        prof.profileName = profileName.Substring(0, profileName.Length - 3);
        prof.readAccess = readAccess.Substring(0, readAccess.Length - 3);
        prof.scrnDesc = scrnDesc.Substring(0, scrnDesc.Length - 3);
        prof.scrnId = scrnId.Substring(0, scrnId.Length - 3);
        prof.scrnName = scrnName.Substring(0, scrnName.Length - 3);
        prof.userId = userId.Substring(0, userId.Length - 3);
        prof.usrGrp = usrGrp.Substring(0, usrGrp.Length - 3);
        prof.writeAccess = writeAccess.Substring(0, writeAccess.Length - 3);
        string retStr = xms.addProfileDetailsMul(prof);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMessage("Green", retStr);
            LoadScreensInLists();
        }
        else
            DisplayMessage("Red", retStr);
    }

    private void DisplayMessage(string color, string msg)
    {
        dvGroupErr.Style["color"] = color;
        dvGroupErr.InnerHtml = msg;
    }

    #endregion

    #region Create Profile

    protected void SaveProfile(object sender, EventArgs e)
    {
        CodeValueVO code = new CodeValueVO();
        code.addedBy = Session["UserID"].ToString();
        code.addedOn = DateTime.Now.ToShortDateString();
        code.codeId = "ERROLES";
        code.codeKey = txtProfile.Text;
        code.codeValue1 = "0";
        code.codeValue2 = string.Empty;
        code.codeValue3 = string.Empty;
        code.codeValue4 = string.Empty;
        code.codeValue5 = string.Empty;
        code.compCode = Session["CompCode"].ToString();
        code.description = txtProfDescr.Text;
        code.modifiedBy = Session["UserID"].ToString();
        code.modifiedOn = DateTime.Now.ToShortDateString();
        code.orgId = Session["OrgID"].ToString();
        string retStr =  xms.addCodeValues(code, 2);
        if (retStr.ToLower().Contains("succes"))
        {
            string strSelProf = ddlProfiles.SelectedValue;
            GetProfiles();
            ddlProfiles.SelectedValue = strSelProf;
            DisplayMainMessage("Green", retStr);
            //popNewProfile.Hide();
        }
        else
        {
            DisplayNewProfMessage("Red", retStr);
            //popNewProfile.Show();
        }
    }

    private void DisplayMainMessage(string color, string msg)
    {
        dvGroupErr.Style["color"] = color;
        dvGroupErr.InnerHtml = msg;
    }

    private void DisplayNewProfMessage(string color, string msg)
    {
        dvNewProfErr.Style["color"] = color;
        dvNewProfErr.InnerHtml = msg;
    }

    #endregion
}