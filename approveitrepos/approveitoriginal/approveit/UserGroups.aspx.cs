using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Collections;

public partial class UserGroups : System.Web.UI.Page
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

    #endregion

    #region Groups

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                Session.Remove("UGCodes");
                BindUserGroups(Session["CompCode"].ToString());
                BindCompCodes();
                //lblOrgName.Text = Session["SOrgName"].ToString();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserId"]));
        }
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
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();

        if (Session["GAdmin"] == "false")
        {
            ddlCompCode.SelectedValue = Session["CompCode"].ToString();
            ddlCompCode.Enabled = false;
        }
        else
            ddlCompCode.Enabled = true;
    }

    void BindUserGroups(string compCode)
    {
        string str = string.Empty;
        if (Session["UGCodes"] == null)
        {
            str = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), compCode, 5);
            Session["UGCodes"] = str;
        }
        else
            str = (string)Session["UGCodes"];
        string[] arrExpCodes = new string[2];
        arrExpCodes = str.Split('~');
        List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
        DataSet dsGroups = new DataSet();
        dsGroups.Tables.Add(Utility.ConvertToDataTable(codes));
        Session["GrpRoles"] = dsGroups;

        string exprPymt = "CodeID='ERUSERGROUPS'";
        DataView viewPymt = new DataView(dsGroups.Tables[0], exprPymt, "CODEID", DataViewRowState.CurrentRows);
        ddlGroups.DataSource = viewPymt;
        ddlGroups.DataBind();

        GetProfiles(compCode);
        string expr = "userGroup='" + ddlGroups.SelectedValue + "'";
        DataView dvGrp = new DataView(dsGroupsList.Tables[0], expr, "userGroup", DataViewRowState.CurrentRows);
        DataTable dttemplist = dvGrp.ToTable();

        string exproles = "CodeID='ERROLES'";
        DataView viewerRoles = new DataView(dsGroups.Tables[0], exproles, "CODEID", DataViewRowState.CurrentRows);
        DataTable dtErRoles = viewerRoles.ToTable();
        DataTable dtAssgclone = dtErRoles.Clone();
        DataTable dtclone = dtErRoles.Clone();
        foreach (DataRow row in dtErRoles.Rows)
            dtclone.ImportRow(row);

        for (int i = 0; i < dttemplist.Rows.Count; i++)
            for (int j = 0; j < dtErRoles.Rows.Count; j++)
                if (dtErRoles.Rows[j]["CodeKey"].ToString() == dttemplist.Rows[i]["userProfile"].ToString())
                    dtAssgclone.ImportRow(dtErRoles.Rows[j]);

        lstErRoles.DataSource = dtclone;
        lstErRoles.DataBind();

        lstAssgnRoles.DataSource = dtAssgclone;
        lstAssgnRoles.DataBind();

        //Hide GADMIN profile access to un authorized users.
        ListItem item;
        if (Session["GAdmin"] == "false")
        {
            item = lstErRoles.Items.FindByText("GADMIN");
            lstErRoles.Items.Remove(item);

            item = lstAssgnRoles.Items.FindByText("GADMIN");
            lstAssgnRoles.Items.Remove(item);
        }
        //Hide GADMIN profile access to un authorized users.

        //Remove Assigned profiles from List of Remaining Profiles
        List<ListItem> itemsToRemove = new List<ListItem>();
        foreach (ListItem listItem in lstAssgnRoles.Items)
            itemsToRemove.Add(listItem);
        foreach (ListItem listItem in itemsToRemove)
            lstErRoles.Items.Remove(listItem);
    }

    void GetProfiles(string compCode)
    {
        UserGroupVO uGroup = new UserGroupVO();
        uGroup.addedBy = 0;
        uGroup.compCode = compCode;
        uGroup.groupId = 0;
        uGroup.modifiedBy = 0;
        uGroup.orgId = Convert.ToInt32(Session["OrgID"]);
        uGroup.userGroup = string.Empty;
        uGroup.userProfile = string.Empty;
        var str1 = xms.getUserGrpProfile(uGroup);
        List<UserGroupVO> listGroups = ser.Deserialize<List<UserGroupVO>>(str1);
        dsGroupsList.Tables.Add(Utility.ConvertToDataTable(listGroups));
        Session["Groups"] = dsGroupsList.Tables[0];
    }

    protected void ddlGroups_SelectedIndexChanged(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        DataTable dsGroups = (DataTable)Session["Groups"];
        DataSet dsRoles = (DataSet)Session["GrpRoles"];

        string expr = "userGroup = '" + ddlGroups.SelectedValue + "'";
        DataView dvGrp = new DataView(dsGroups, expr, "userGroup", DataViewRowState.CurrentRows);
        DataTable dtGrouplist = dvGrp.ToTable();

        string exproles = "CodeID = 'ERROLES'";
        DataView viewerRoles = new DataView(dsRoles.Tables[0], exproles, "CODEID", DataViewRowState.CurrentRows);
        DataTable dtErRoles = viewerRoles.ToTable();

        DataTable dtAssgClone = dtErRoles.Clone();
        DataTable dtClone = dtErRoles.Clone();

        foreach (DataRow row in dtErRoles.Rows)
            dtClone.ImportRow(row);

        //Add items to Assigned Profiles list
        for (int i = 0; i < dtGrouplist.Rows.Count; i++)
            for (int j = 0; j < dtErRoles.Rows.Count; j++)
                if (dtErRoles.Rows[j]["CodeKey"].ToString() == dtGrouplist.Rows[i]["userProfile"].ToString())
                    dtAssgClone.ImportRow(dtErRoles.Rows[j]);

        lstErRoles.DataSource = dtClone;//Assign to list of remaining profiles. Initially add all the profiles.
        lstErRoles.DataBind();

        lstAssgnRoles.DataSource = dtAssgClone;//Assign to list of selected profiles
        lstAssgnRoles.DataBind();

        //Remove Assigned profiles from List of Remaining Profiles
        List<ListItem> itemsToRemove = new List<ListItem>();
        foreach (ListItem listItem in lstAssgnRoles.Items)
            itemsToRemove.Add(listItem);
        foreach (ListItem listItem in itemsToRemove)
            lstErRoles.Items.Remove(listItem);
    }

    protected void ddlCompCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        BindUserGroups(ddlCompCode.SelectedValue);
    }

    #endregion

    #region AssignProfiles

    protected void AssignSelectedProfiles(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        //Assign Selected profiles from Listbox1 to Listbox2
        if (lstErRoles.SelectedIndex >= 0)
        {
            int cnt = lstErRoles.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                if (lstErRoles.Items[i].Selected)
                {
                    if (!lstAssgnRoles.Items.Contains(lstErRoles.Items[i]))
                        lstAssgnRoles.Items.Add(lstErRoles.Items[i]);
                }
            }

            //Remove selected items in Profiles Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstErRoles.Items)
            {
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            }
            foreach (ListItem listItem in itemsToRemove)
            {
                lstErRoles.Items.Remove(listItem);
            }

            //Save changes to database
            foreach (ListItem item in itemsToRemove)
            {
                addedBy += Session["UserID"].ToString() + appString;
                modifiedBy += Session["UserID"].ToString() + appString;
                orgId += Session["OrgID"].ToString() + appString;
                compCode += ddlCompCode.SelectedValue + appString;
                userGroup += ddlGroups.SelectedValue + appString;
                userProfile += item.Value + appString;
                groupId += 0 + appString;
            }
            UserGroupMulVO userMul = new UserGroupMulVO();
            userMul.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            userMul.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            userMul.orgId = orgId.Substring(0, orgId.Length - 3);
            userMul.compCode = compCode.Substring(0, compCode.Length - 3);
            userMul.userGroup = userGroup.Substring(0, userGroup.Length - 3);
            userMul.userProfile = userProfile.Substring(0, userProfile.Length - 3);
            userMul.groupId = groupId.Substring(0, groupId.Length - 3);

            string retstr = xms.addUserGroupsMul(userMul);

            if (retstr.ToLower().Contains("succes"))
            {
                DisplayMainMessage("Green", retstr);
                GetProfiles(ddlCompCode.SelectedValue);
            }
            else
                DisplayMainMessage("Red", "Failed to assign the profile(s).");
        }
        else
            DisplayMainMessage("Red", "Please select atleast one profile to assign.");
    }

    protected void AssignMultipleProfiles(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        List<string> lstMovedItems = new List<string>();
        if (lstErRoles.Items.Count > 0)
        {
            int cnt = lstErRoles.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                lstMovedItems.Add(lstErRoles.Items[0].Value);
                //Assign Selected profiles from Listbox1 to Listbox2
                lstAssgnRoles.Items.Add(lstErRoles.Items[0]);
                //Remove selected items in Profiles Listbox
                lstErRoles.Items.Remove(lstErRoles.Items[0]);
            }

            //Save changes to database
            foreach (string item in lstMovedItems)
            {
                addedBy += Session["UserID"].ToString() + appString;
                modifiedBy += Session["UserID"].ToString() + appString;
                orgId += Session["OrgID"].ToString() + appString;
                compCode += ddlCompCode.SelectedValue + appString;
                userGroup += ddlGroups.SelectedValue + appString;
                userProfile += item + appString;
                groupId += 0 + appString;
            }
            UserGroupMulVO userMul = new UserGroupMulVO();
            userMul.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            userMul.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            userMul.orgId = orgId.Substring(0, orgId.Length - 3);
            userMul.compCode = compCode.Substring(0, compCode.Length - 3);
            userMul.userGroup = userGroup.Substring(0, userGroup.Length - 3);
            userMul.userProfile = userProfile.Substring(0, userProfile.Length - 3);
            userMul.groupId = groupId.Substring(0, groupId.Length - 3);

            string retstr = xms.addUserGroupsMul(userMul);

            if (retstr.ToLower().Contains("succes"))
            {
                DisplayMainMessage("Green", retstr);
                GetProfiles(ddlCompCode.SelectedValue);
            }
            else
                DisplayMainMessage("Red", "Failed to assign the profile(s).");
        }
        else
            DisplayMainMessage("Red", "There are no profiles to assign.");
    }

    protected void RemoveSelectedProfiles(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        //Assign Selected profiles from Listbox1 to Listbox2
        if (lstAssgnRoles.SelectedIndex >= 0)
        {
            DataTable dsGroups = (DataTable)Session["Groups"];
            string[] arr = new string[lstAssgnRoles.Items.Count];
            for (int i = 0; i < lstAssgnRoles.Items.Count; i++)
            {
                if (lstAssgnRoles.Items[i].Selected)
                    arr[i] = lstAssgnRoles.Items[i].Value;
            }

            int cnt = lstAssgnRoles.Items.Count;

            for (int i = 0; i < cnt; i++)
                if (lstAssgnRoles.Items[i].Selected)
                    if (!lstErRoles.Items.Contains(lstAssgnRoles.Items[i]))
                        lstErRoles.Items.Add(lstAssgnRoles.Items[i]);

            //Remove selected items in Profiles Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstAssgnRoles.Items)
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            foreach (ListItem listItem in itemsToRemove)
                lstAssgnRoles.Items.Remove(listItem);

            //Save changes to database
            for (int i = 0; i < arr.Length; i++)
            {
                if (!string.IsNullOrEmpty(arr[i]))
                {
                    string expr = "userGroup = '" + ddlGroups.SelectedValue + "' and userProfile = '" + arr[i] + "'";
                    DataView dvGroups = new DataView(dsGroups, expr, "UserGroup", DataViewRowState.CurrentRows);

                    addedBy += Session["UserID"].ToString() + appString;
                    modifiedBy += Session["UserID"].ToString() + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    compCode += ddlCompCode.SelectedValue + appString;
                    userGroup += ddlGroups.SelectedValue + appString;
                    userProfile += arr[i] + appString;
                    groupId += ut.NullSafeInteger(dvGroups.ToTable().Rows[0]["groupId"]) + appString;
                }
            }
            UserGroupMulVO userMul = new UserGroupMulVO();
            userMul.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            userMul.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            userMul.orgId = orgId.Substring(0, orgId.Length - 3);
            userMul.compCode = compCode.Substring(0, compCode.Length - 3);
            userMul.userGroup = userGroup.Substring(0, userGroup.Length - 3);
            userMul.userProfile = userProfile.Substring(0, userProfile.Length - 3);
            userMul.groupId = groupId.Substring(0, groupId.Length - 3);

            string retstr = xms.addUserGroupsMul(userMul);
            if (retstr.ToLower().Contains("succes"))
            {
                DisplayMainMessage("Green", retstr);
                GetProfiles(ddlCompCode.SelectedValue);
            }
            else
                DisplayMainMessage("Red", "Failed to remove the profile(s).");
        }
        else
            DisplayMainMessage("Red", "Please select atleast one profile to remove");
    }

    protected void RemoveMultipleProfiles(object sender, EventArgs e)
    {
        dvGroupErr.InnerHtml = string.Empty;
        if (lstAssgnRoles.Items.Count > 0)
        {
            DataTable dsGroups = (DataTable)Session["Groups"];

            string[] arr = new string[lstAssgnRoles.Items.Count];
            for (int i = 0; i < lstAssgnRoles.Items.Count; i++)
                arr[i] = lstAssgnRoles.Items[i].Value;

            int cnt = lstAssgnRoles.Items.Count;

            for (int i = 0; i < cnt; i++)
            {
                lstErRoles.Items.Add(lstAssgnRoles.Items[0]);
                lstAssgnRoles.Items.Remove(lstAssgnRoles.Items[0]);
            }

            for (int i = 0; i < arr.Length; i++)
            {
                string expr = "userGroup = '" + ddlGroups.SelectedValue + "' and userProfile = '" + arr[i] + "'";
                DataView dvGroups = new DataView(dsGroups, expr, "UserGroup", DataViewRowState.CurrentRows);

                addedBy += Session["UserID"].ToString() + appString;
                modifiedBy += Session["UserID"].ToString() + appString;
                orgId += Session["OrgID"].ToString() + appString;
                compCode += ddlCompCode.SelectedValue + appString;
                userGroup += ddlGroups.SelectedValue + appString;
                userProfile += arr[i] + appString;
                groupId += ut.NullSafeInteger(dvGroups.ToTable().Rows[0]["groupId"]) + appString;
            }
            UserGroupMulVO userMul = new UserGroupMulVO();
            userMul.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            userMul.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            userMul.orgId = orgId.Substring(0, orgId.Length - 3);
            userMul.compCode = compCode.Substring(0, compCode.Length - 3);
            userMul.userGroup = userGroup.Substring(0, userGroup.Length - 3);
            userMul.userProfile = userProfile.Substring(0, userProfile.Length - 3);
            userMul.groupId = groupId.Substring(0, groupId.Length - 3);

            string retstr = xms.addUserGroupsMul(userMul);
            if (retstr.ToLower().Contains("succes"))
            {
                DisplayMainMessage("Green", retstr);
                GetProfiles(ddlCompCode.SelectedValue);
            }
            else
                DisplayMainMessage("Red", "Failed to remove the profile(s).");
        }
        else
            DisplayMainMessage("Red", "There are no profiles to remove.");
    }

    #endregion

    #region CreateGroup

    protected void CreateGroup(object sender, EventArgs e)
    {
        dvError.InnerHtml = dvGroupErr.InnerHtml = string.Empty;
        ClearFields();
        btnSaveGrp.Attributes.Add("onclick", "javascript:return validateUgerGroupCreation('" + txtGrpID.ClientID + "', '" + txtDescr.ClientID + "', '" + txtApprLmt.ClientID + "', '" + txtTolAmnt.ClientID + "', '" + dvError.ClientID + "')");
        popCreateGrp.Show();
    }

    protected void SaveGroup(object sender, EventArgs e)
    {
        CodeValueVO code = new CodeValueVO();
        code.addedBy = Session["UserID"].ToString();
        code.addedOn = DateTime.Now.ToShortDateString();
        code.codeId = "ERUSERGROUPS";
        code.codeKey = txtGrpID.Text;
        code.codeValue1 = txtApprLmt.Text;
        code.codeValue2 = txtTolAmnt.Text;
        code.codeValue3 = string.Empty;
        code.codeValue4 = string.Empty;
        code.codeValue5 = string.Empty;
        code.compCode = ddlCompCode.SelectedValue;
        code.description = txtDescr.Text;
        code.modifiedBy = Session["UserID"].ToString();
        code.modifiedOn = DateTime.Now.ToShortDateString();
        code.orgId = Session["OrgID"].ToString();
        string retStr = xms.addCodeValues(code, 2);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMainMessage("Green", retStr);
            Session.Remove("UGCodes");
            BindUserGroups(ddlCompCode.SelectedValue);
            ClearFields();
            popCreateGrp.Hide();
        }
        else
        {
            DisplayMessage("Red", retStr);
            popCreateGrp.Show();
        }
    }

    void DisplayMainMessage(string color, string msg)
    {
        dvGroupErr.Style["color"] = color;
        dvGroupErr.InnerHtml = msg;
    }

    void DisplayMessage(string color, string msg)
    {
        dvError.Style["color"] = color;
        dvError.InnerHtml = msg;
    }

    void ClearFields()
    {
        dvError.InnerHtml = txtDescr.Text = txtGrpID.Text = txtApprLmt.Text = txtTolAmnt.Text = string.Empty;
    }

    #endregion
}