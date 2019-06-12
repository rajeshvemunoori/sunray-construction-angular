using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;

public partial class PONotes : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;

    #endregion

    #region Notes

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");
            if (!IsPostBack)
            {
                btnSave.Attributes.Add("onclick", "javascript:return ValidateText();");
                LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void LoadData()
    {
        lblOrgID.Text = Session["SOrgName"].ToString();
        BindCompCodes();
        BindNotesTypes();
        GetNotes();
    }

    void BindCompCodes()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string strCmpCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> lstCmpCodes = ser.Deserialize<List<CompanyCodesVO>>(strCmpCodes);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(lstCmpCodes));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataTextField = "CompCode";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    void BindNotesTypes()
    {
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "NOTES");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        ddlNotesType.DataSource = dt;
        ddlNotesType.DataTextField = "CodeKey";
        ddlNotesType.DataValueField = "CodeKey";
        ddlNotesType.DataBind();
    }

    void GetNotes()
    {
        string str = xms.getNotes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ddlNotesType.SelectedValue);
        List<AddNotesVO> lst = ser.Deserialize<List<AddNotesVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (dt.Rows.Count > 0)
        {
            hdnNotesCnt.Value = "1";
            hdnNotesID.Value = dt.Rows[0]["notesId"].ToString();
            txtNotes.Text = dt.Rows[0]["notes"].ToString();
            btnDelete.Visible = true;
        }
        else
        {
            hdnNotesCnt.Value = "0";
            btnDelete.Visible = false;
        }
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        ClearFields();
        BindNotesTypes();
        GetNotes();
    }

    protected void ddlNotesType_SelectedIndexChanged(object sender, EventArgs e)
    {
        ClearFields();
        GetNotes();
    }

    protected void SaveNotes(object sender, EventArgs e)
    {
        if (ut.NullSafeInteger(hdnNotesCnt.Value) == 1)
            AddNotes(2, ut.NullSafeInteger(hdnNotesID.Value));
        else
            AddNotes(1, 0);
        btnDelete.Visible = true;
    }

    protected void DeleteNotes(object sender, EventArgs e)
    {
        AddNotes(3, ut.NullSafeInteger(hdnNotesID.Value));
        txtNotes.Text = string.Empty;
        btnDelete.Visible = false;
    }

    void AddNotes(int type, int notesId)
    {
        AddNotesVO add = new AddNotesVO();
        add.addedBy = ut.NullSafeInteger(Session["UserID"]);
        add.compCode = ddlCompCode.SelectedValue;
        add.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        add.notes = txtNotes.Text;
        add.orgId = ut.NullSafeInteger(Session["OrgID"]);
        add.txtType = ddlNotesType.SelectedValue;
        add.type = type;
        add.notesId = notesId;
        string retStr = xms.addNotes(add);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('hideMsg()', 5000);", true);
        }
        else
            DisplayMsg("Red", retStr);
        dvCharCnt.Style["display"] = "none";
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        LoadData();
    }

    void DisplayMsg(string color, string msg)
    {
        dvMsg.Style["color"] = color;
        dvMsg.InnerHtml = msg;
    }

    void ClearFields()
    {
        txtNotes.Text = string.Empty;
        dvMsg.InnerHtml = string.Empty;
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshExp", "setTimeout('refreshExp();', 800);", true);
        }
    }

    #endregion
}