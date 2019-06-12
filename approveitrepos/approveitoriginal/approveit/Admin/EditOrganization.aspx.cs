using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Web.Services;
using System.Text;

public partial class EditOrganization : System.Web.UI.Page
{
    #region public variables

    public int orgID = 0;
    public int mgrcnt = 0;
    public int apCnt = 0;
    public int Level = 0;
    public int userid = 0;
    public int userid_AP = 0;
    public int uId = 0;
    public int isMgr = 0;
    byte[] fileData;

    #endregion

    #region private variables

    int mgrId = 0;
    string email = string.Empty;
    string mgrStr = string.Empty;
    private bool _refreshUsers = false;
    DataSet dsorg = new DataSet();
    Mails mails = new Mails();
    Encryption encrypt = new Encryption();
    Utility ut = new Utility();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    #endregion

    #region Edit Org

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvError');");
            btnSave.Attributes.Add("onclick", "javascript:return validateEditOrganization();");
            orgID = Convert.ToInt32(Session["OrgID"]);
            email = Session["Email"].ToString();
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            else
            {
                if (!IsPostBack)
                {
                    Session.Remove("fStream");
                    Session.Remove("fName");
                    LoadData();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        Session.Remove("apCnt");
        Session.Remove("mgrcnt");
        Session.Remove("userCnt");

        dsorg = BindOrgDetails();
        Session["OrgDetails"] = dsorg;
        if (dsorg.Tables[0].Rows.Count > 0)
        {
            BindAllDropdowns();
            txtOrganizationName.Text = dsorg.Tables[0].Rows[0]["Name"].ToString();
            txtAdminName.Text = dsorg.Tables[0].Rows[0]["FirstName"].ToString();
            txtAdminEmail.Text = email;
            txtPhone.Text = dsorg.Tables[0].Rows[0]["Phone"].ToString();
            txtOrgcode.Text = dsorg.Tables[0].Rows[0]["orgCode"].ToString();
            ddlCurrency.SelectedValue = dsorg.Tables[0].Rows[0]["Currency"].ToString();
            ddlMeasure.SelectedValue = dsorg.Tables[0].Rows[0]["Measurement"].ToString();
            txtCities.Text = dsorg.Tables[0].Rows[0]["City"].ToString();
            ddlRgnCode.SelectedValue = dsorg.Tables[0].Rows[0]["State"].ToString();
            txtUrl.Text = dsorg.Tables[0].Rows[0]["Url"].ToString();
            txtAddr1.Text = dsorg.Tables[0].Rows[0]["Address1"].ToString();
            txtAddr2.Text = dsorg.Tables[0].Rows[0]["Address2"].ToString();
            ddlCountry.SelectedValue = dsorg.Tables[0].Rows[0]["CountryCode"].ToString();
            ddlIndType.SelectedValue = dsorg.Tables[0].Rows[0]["BusinessType"].ToString();
            txtZipCode.Text = dsorg.Tables[0].Rows[0]["ZipCode"].ToString();
            txtOrganizationName.Enabled = false;
            txtAdminEmail.Enabled = false;
            txtOrgcode.Enabled = false;
            txtZipCode.Enabled = false;
            BindCities();
            if (dsorg.Tables[0].Rows[0]["LogoPath"].ToString() != string.Empty)
            {
                Session["CurrLogo"] = dsorg.Tables[0].Rows[0]["LogoPath"].ToString();
                Encryption enc = new Encryption();
                string key = enc.GenerateAPassKey("POExistAtt");
                string filepath = enc.Encrypt(Session["CurrLogo"].ToString(), key);
                string fileName = enc.Encrypt(Session["CurrLogo"].ToString(), key);
                divLogoatt.InnerHtml = "<a href='../downloadFile.aspx?typ=5&aid=" + filepath + "&ext=" + fileName + "'>Current Logo</a>";
                divLogoatt.Style["display"] = "block";
            }
            else
                divLogoatt.Style["display"] = "none";

            //Fetch Approval Limit 
            string expr = "ApprovalLimit > 0";
            DataView dvAppr = new DataView(dsorg.Tables[0], expr, "ApprovalLimit", DataViewRowState.CurrentRows);
            DataTable dtAppr = dvAppr.ToTable();
            if (dtAppr.Rows.Count > 0)
                Session["Appr"] = dtAppr.Rows[0]["ApprovalLimit"];
            else
                Session["Appr"] = "0";

            Session["mgrcnt"] = 0;
            Session["apCnt"] = 0;
            Session["userCnt"] = 0;

            DataSet dslist = new DataSet();
            int selfAppCnt = 0;
            int j = 0;
            if (Session["OrgSelfAppr"].ToString() == "1")
                chkSelfAppr.Checked = true;
            else
                chkSelfAppr.Checked = false;
            if (Session["Users"] == null)
            {
                string compcode = Session["GAdmin"] == null ? Session["CompCode"].ToString() : "All";
                string str = xms.getUsersList(Convert.ToInt32(Session["OrgID"]), compcode);
                List<UserVO> lst = ser.Deserialize<List<UserVO>>(str);
                dslist.Tables.Add(Utility.ConvertToDataTable(lst));
                Session["Users"] = dslist;
            }
            dslist = (DataSet)Session["Users"];

            for (j = 0; j < dslist.Tables[0].Rows.Count; j++)
                if (dslist.Tables[0].Rows[j]["IsSelfApproval"].ToString() == "1")
                    selfAppCnt++;

            if (selfAppCnt > 0)
                chkSelfAppr.Enabled = false;
            else
                chkSelfAppr.Enabled = true;
        }
    }

    protected void ShowImage(object sender, EventArgs e)
    {
        BindImage(Session["CurrLogo"].ToString());
    }

    private void BindImage(string originalFilename)
    {
        byte[] strReq = xms.getExpDraftsById(originalFilename, 2);
        string base64ImageString = ConvertBytesToBase64(strReq);
        imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;
        popup_Att.Show();
    }

    protected void DownLoadLogo(object sender, EventArgs e)
    {
        string str = Session["CurrLogo"].ToString();
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(str, key);
        string fileName = enc.Encrypt(str, key);
        Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    private void BindCurrency()
    {
        var currencyData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "CURRENCY");
        List<CodeValueVO> currency = ser.Deserialize<List<CodeValueVO>>(currencyData);

        ddlCurrency.DataSource = currency;
        ddlCurrency.DataBind();
        ddlCurrency.Items.Insert(0, "Please Select");
        ddlCurrency.Items.FindByText("Please Select").Value = "0";
    }

    private void BindMeasures()
    {
        var measureData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "MEASURE");
        List<CodeValueVO> measure = ser.Deserialize<List<CodeValueVO>>(measureData);
        ddlMeasure.DataSource = measure;
        ddlMeasure.DataBind();
        ddlMeasure.Items.Insert(0, "Please Select");
        ddlMeasure.Items.FindByText("Please Select").Value = "0";
    }

    private void BindAllDropdowns()
    {
        BindCurrency();
        BindMeasures();

        var RgnData = xms.getRegions();
        List<RegionVO> RgnCod = ser.Deserialize<List<RegionVO>>(RgnData);
        DataTable dt = Utility.ConvertToDataTable(RgnCod);
        DataView dv = dt.DefaultView;
        dv.Sort = "State ASC";
        ddlRgnCode.DataSource = dv;
        ddlRgnCode.DataBind();
        ddlRgnCode.Items.Insert(0, "Please Select");
        ddlRgnCode.Items.FindByText("Please Select").Value = "0";

        DataSet dsCountries = new DataSet();
        var country = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "ERCOUNTRYCD");
        List<CodeValueVO> countries = ser.Deserialize<List<CodeValueVO>>(country);
        dsCountries.Tables.Add(Utility.ConvertToDataTable(countries));
        ddlCountry.DataSource = dsCountries;
        ddlCountry.DataBind();
        //ddlCountry.Items.Insert(0, "Please Select");
        //ddlCountry.Items.FindByText("Please Select").Value = "0";

        DataSet dsBType = new DataSet();
        var bType = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "ERBUSINESSTYPE");
        List<CodeValueVO> busiType = ser.Deserialize<List<CodeValueVO>>(bType);
        dsBType.Tables.Add(Utility.ConvertToDataTable(busiType));
        ddlIndType.DataSource = dsBType;
        ddlIndType.DataBind();
        ddlIndType.Items.Insert(0, "Please Select");
        ddlIndType.Items.FindByText("Please Select").Value = "0";
    }

    private void BindCities()
    {
        string str = xms.getCities(ddlRgnCode.SelectedValue);
        List<CityVO> lst = ser.Deserialize<List<CityVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        dt.Columns.Add("CityZip");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["CityZip"] = dt.Rows[i]["City"].ToString() + "-" + dt.Rows[i]["ZipCode"].ToString();

        dt.AcceptChanges();
        DataView dv = dt.DefaultView;
        dv.Sort = "City ASC";
        Session["CitiesByRegion"] = dv.ToTable();
    }

    public DataSet BindOrgDetails()
    {
        DataSet ds = new DataSet();
        var orgDetails = xms.getOrgDetails(Convert.ToInt32(Session["OrgID"]), Session["Email"].ToString());
        List<OrgListVO> org = ser.Deserialize<List<OrgListVO>>(orgDetails);
        ds.Tables.Add(Utility.ConvertToDataTable(org));
        return ds;
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindCities();
        txtCities.Text = string.Empty;
        txtZipCode.Text = string.Empty;
        txtCities.Focus();
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1.PostedFile.FileName);
        int len = fupd1.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".gif")
        {
            if (len > 0 && len < 1048576)
            {
                HttpPostedFile hpf = fupd1.PostedFile;
                Session["fStream"] = fupd1.FileContent;
                Session["fName"] = fupd1.FileName;
            }
            else
            {
                dvError.InnerHtml = "Please upload file of size not exceeding 2MB.";
                dvError.Style["color"] = "Red";
            }
        }
        else
        {
            dvError.InnerHtml = "Please upload file of type .png/.jpg/.jpeg/.tiff/.gif.";
            dvError.Style["color"] = "Red";
        }
    }

    private byte[] SavedFileData()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStream"];
        BinaryReader br = new BinaryReader(sf);
        sf.Position = 0;
        fileData = br.ReadBytes((int)sf.Length);
        return fileData;
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "ShowProgerss() ;", true);
        UpdateOrgDetails();
    }

    private void UpdateOrgDetails()
    {

        bool isUpdate = false;
        dsorg = (DataSet)Session["OrgDetails"];

        //check for any field updates to call database
        if (txtPhone.Text != dsorg.Tables[0].Rows[0]["Phone"].ToString())
            isUpdate = true;
        if (ddlCurrency.SelectedValue != dsorg.Tables[0].Rows[0]["Currency"].ToString())
            isUpdate = true;
        if (ddlMeasure.SelectedValue != dsorg.Tables[0].Rows[0]["Measurement"].ToString())
            isUpdate = true;
        if (txtUrl.Text != dsorg.Tables[0].Rows[0]["URL"].ToString())
            isUpdate = true;
        if (txtAddr1.Text != dsorg.Tables[0].Rows[0]["Address1"].ToString())
            isUpdate = true;
        if (txtAddr2.Text != dsorg.Tables[0].Rows[0]["Address2"].ToString())
            isUpdate = true;
        if (txtZipCode.Text != dsorg.Tables[0].Rows[0]["ZipCode"].ToString())
            isUpdate = true;
        if (ddlCountry.SelectedValue != dsorg.Tables[0].Rows[0]["CountryCode"].ToString())
            isUpdate = true;
        if (ddlIndType.SelectedValue != dsorg.Tables[0].Rows[0]["Businesstype"].ToString())
            isUpdate = true;
        if (ddlRgnCode.SelectedValue != dsorg.Tables[0].Rows[0]["State"].ToString())
            isUpdate = true;
        if (txtOrgcode.Text != dsorg.Tables[0].Rows[0]["orgCode"].ToString())
            isUpdate = true;
        if (txtCities.Text != dsorg.Tables[0].Rows[0]["City"].ToString())
            isUpdate = true;
        if (Convert.ToInt32(Session["OrgSelfAppr"]) == 1)
        {
            if (!chkSelfAppr.Checked)
                isUpdate = true;
        }
        else
        {
            if (chkSelfAppr.Checked)
                isUpdate = true;
        }
        if (Session["fStream"] != null)
        {
            fileData = SavedFileData();
            isUpdate = true;
        }
        if (isUpdate)
        {
            if (Session["CurrLogo"] != null && fileData == null)
                fileData = xms.getExpDraftsById(Session["CurrLogo"].ToString(), 1);

            string[] mgrArray = new string[mgrStr.Length];
            mgrArray = mgrStr.Split(',');
            dsorg = (DataSet)Session["OrgDetails"];
            OrganizationVO orgDetails = new OrganizationVO();
            orgDetails.phone = txtPhone.Text;
            orgDetails.currency = ddlCurrency.SelectedValue;
            orgDetails.measurement = ddlMeasure.SelectedValue;
            orgDetails.url = txtUrl.Text;
            orgDetails.orgId = Session["OrgID"].ToString();
            orgDetails.isSelfApproval = chkSelfAppr.Checked ? 1 : 0;
            orgDetails.state = ddlRgnCode.SelectedValue;
            orgDetails.city = txtCities.Text;
            orgDetails.modifiedBy = Convert.ToInt32(Session["UserID"]);
            orgDetails.address1 = txtAddr1.Text;
            orgDetails.address2 = txtAddr2.Text;
            orgDetails.countryCode = ddlCountry.SelectedValue;
            orgDetails.businessType = ddlIndType.SelectedItem.Text;
            orgDetails.zipCode = txtZipCode.Text;
            orgDetails.orgCode = txtOrgcode.Text;
            orgDetails.logo = fileData;
            orgDetails.logoPath = fileData != null ? txtOrganizationName.Text.Trim() : " ";

            string returnStr = xms.updateOrgDetails(orgDetails);
            if (chkSelfAppr.Checked)
                Session["OrgSelfAppr"] = 1;
            else
                Session["OrgSelfAppr"] = 0;

            string orgSub = "Hi " + Session["username"].ToString() + ",<br/><br/><table><tr><td>Organization:</td><td>&nbsp;&nbsp;" + dsorg.Tables[0].Rows[0]["Name"].ToString() + "</td></tr><tr><td>Phone:</td><td>" +
                "&nbsp;&nbsp;" + txtPhone.Text + "</td></tr><tr><td>Currency:</td><td>&nbsp;&nbsp;" + ddlCurrency.SelectedValue + "</td></tr><tr><td>Measurement:" +
                "</td><td>&nbsp;&nbsp;" + ddlMeasure.SelectedValue + "</td></tr><tr><td>Url:</td><td>&nbsp;&nbsp;" + txtUrl.Text + " </td></tr><tr><td>SelfApproval for Organization:</td><td>&nbsp;&nbsp;" + (chkSelfAppr.Checked ? "Assigned" : "Not Assigned") + " </td></tr></table>";
            string apSub = string.Empty;
            string mgrSub = string.Empty;

            DataSet dsUser = (DataSet)Session["OrgDetails"];
            orgSub = orgSub + "<br/><br/>" + apSub + "<br/>" + mgrSub;
            xms.sendMail(Session["Email"].ToString(), string.Empty, "ER-Update Organization", orgSub, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["CompCode"].ToString());
            if (dsUser.Tables[0].Rows.Count > 1)
            {
                for (int i = 0; i < dsUser.Tables[0].Rows.Count; i++)
                {
                    if (Convert.ToInt32(dsUser.Tables[0].Rows[i]["ManagerID"]) > 0)
                    {
                        Session["ManagerID"] = dsUser.Tables[0].Rows[i]["ManagerID"];
                        Session["UserID_Mgr"] = dsUser.Tables[0].Rows[i]["UserID"];
                        Session["AppLmt"] = dsUser.Tables[0].Rows[i]["ApprovalLimit"];
                    }
                }
            }
            Session.Remove("OrgDetails");
            LoadData();
            Session["BusinessType"] = ddlIndType.SelectedValue;

            dvError.Visible = true;
            dvError.InnerHtml = "Updated details Successfully! An email has been sent to given mail id.";
            dvError.Style["color"] = "Green";
            lblFileName.Text = string.Empty;

        }
        else
        {
            dvError.Visible = true;
            dvError.InnerHtml = "No changes to update.";
            dvError.Style["color"] = "Red";
        }
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            //ScriptManager.RegisterClientScriptInclude(this, this.GetType(), "markitup", ResolveUrl("~/markitup/jquery.markitup.js"));
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);

            if (_refreshUsers)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshUsers", "setTimeout('refreshUsers();', 800);", true);
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        LoadData();
    }

    protected void chkSelfAppr_CheckedChanged(object sender, EventArgs e)
    {
        DataSet dslist = new DataSet();
        int selfAppCnt = 0;
        int i = 0;
        if (!chkSelfAppr.Checked)
            dslist = (DataSet)Session["Users"];
        for (i = 0; i < dslist.Tables[0].Rows.Count; i++)
        {
            if (dslist.Tables[0].Rows[i]["IsSelfApproval"].ToString() == "1")
                selfAppCnt = 1;
        }
        if (selfAppCnt == 1)
        {
            chkSelfAppr.Checked = true;
            dvError.InnerHtml = "You cannot uncheck Self Approval as the organization has users with this Approval flag.";
        }
        else
        {
            chkSelfAppr.Checked = false;
            dvError.InnerHtml = string.Empty;
        }
        lblFileName.Text = Session["fName"].ToString();
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCities(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["CitiesByRegion"];
        DataView dv = new DataView(dt, "CityZip LIKE '%" + prefixText + "%'", "CityZip", DataViewRowState.CurrentRows);
        string[] CountryNames = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            CountryNames[i] = dv.ToTable().Rows[i][6].ToString();
        return CountryNames;
    }
    #endregion
}