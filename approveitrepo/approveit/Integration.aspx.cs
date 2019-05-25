using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using System.Data;
using ExpenseServiceBeta;

public partial class Integration : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private int actionSize = 0;
    private bool _refreshExp = false;

    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        btnSave.Attributes.Add("onclick", "javascript:return validateTypes();");
        lnkTestConn.Attributes.Add("onclick", "javascript:return validateTypes();");
        //cblExport.Attributes.Add("onclick", "showIntOptions('" + cblExport.SelectedValue + "')");
        if (!Page.IsPostBack)
        {
            ShowDefaultData();
            GetIntegrationTypes();
            rblIntOptions.Attributes.Add("onchange", "javascript:displayMsg('" + rblIntOptions.ClientID + "');");
            btnNo.Attributes.Add("onclick", "javascript:confirmChanges(" + 0 + ");");
        }
    }

    protected void SelectedTypeChanged(object sender, EventArgs e)
    {
        Session.Remove("RetOptionString");
        Session.Remove("RetIntTypeString");
        ClearFields();
        if (ddlTypes.SelectedValue == "1")
        {
            dvQuickBooks.Style["display"] = "block";
            dvMicroDynamics.Style["display"] = "none";
            dvXero.Style["display"] = "none";
            dvOptions.Style["display"] = "block";
            btnSave.Visible = true;
            lnkTestConn.Visible = true;
            chkTempStop.Visible = true;
        }
        else if (ddlTypes.SelectedValue == "2")
        {
            dvQuickBooks.Style["display"] = "none";
            dvMicroDynamics.Style["display"] = "none";
            dvXero.Style["display"] = "block";
            dvOptions.Style["display"] = "block";
            btnSave.Visible = true;
            lnkTestConn.Visible = true;
            chkTempStop.Visible = true;
        }
        else if (ddlTypes.SelectedValue == "3")
        {
            dvQuickBooks.Style["display"] = "none";
            dvMicroDynamics.Style["display"] = "block";
            dvXero.Style["display"] = "none";
            dvOptions.Style["display"] = "block";
            btnSave.Visible = true;
            lnkTestConn.Visible = true;
            chkTempStop.Visible = true;
        }
        else
        {
            dvQuickBooks.Style["display"] = "none";
            dvMicroDynamics.Style["display"] = "none";
            dvXero.Style["display"] = "none";
            dvOptions.Style["display"] = "none";
            btnSave.Visible = false;
            lnkTestConn.Visible = false;
            chkTempStop.Visible = false;
        }
        GetSelectedOptionsAndTypes();
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        string alertMsg = "You want to sync ";
        foreach (ListItem item in cblExport.Items)
        {
            if (item.Value == "VENDOR" && item.Selected)
                alertMsg += "Vendors, ";
            else if (item.Value == "ITEM" && item.Selected)
                alertMsg += "Items, ";
            else if (item.Value == "ACCOUNTS" && item.Selected)
                alertMsg += "Accounts, ";
        }
        alertMsg = alertMsg.TrimEnd().TrimEnd(',');
        dvSyncConfMsg.InnerHtml = alertMsg + " now?";
        popSyncConf.Show();
    }

    protected void btnYes_Click(object sender, EventArgs e)
    {
        SaveData(0);
        SyncData();
    }

    protected void btnYesSyncConf_Click(object sender, EventArgs e)
    {
        SaveData(0);
    }

    protected void btnNoSyncConf_Click(object sender, EventArgs e)
    {
        SaveData(1);
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);
        if (ScriptManager.GetCurrent(this).IsInAsyncPostBack)
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "DoOnAjaxPostback() ;", true);
            if (_refreshExp)
                ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshAlarms", "setTimeout('refreshExp();', 800);", true);
        }
    }

    protected void lnkTestConn_Click(object sender, EventArgs e)
    {
        string retStr = xms.getQBDetailsTest(txtQBCompanyId.Text, txtQBAppToken.Text, txtQBConsumerKey.Text, txtQBConsumerSecret.Text, txtQBAccessToken.Text,
            txtQBAccessTokenSecret.Text);
        if (retStr.ToLower().Contains("succes"))
        {
            dvConnMsg.Style["color"] = "Green";
            dvConnMsg.InnerHtml = "Test connection successful.";
        }
        else
        {
            dvConnMsg.Style["color"] = "Red";
            dvConnMsg.InnerHtml = "Test connection failed.";
        }
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        GetSelectedOptionsAndTypes();
    }

    #endregion

    #region private methods

    private void ShowDefaultData()
    {
        hdnChangesSaved.Value = "0";
        btnSave.Visible = false;
        lnkTestConn.Visible = false;
        chkTempStop.Visible = false;
    }

    private void GetIntegrationTypes()
    {
        //bind types dropdown
        var typeData = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "INTEGRATION");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(typeData);
        ddlTypes.DataSource = lst;
        ddlTypes.DataTextField = "CodeKey";
        ddlTypes.DataValueField = "CodeValue1";
        ddlTypes.DataBind();
        ddlTypes.Items.Insert(0, "Please Select");
        ddlTypes.Items.FindByText("Please Select").Value = "0";
    }

    private void GetSelectedOptionsAndTypes()
    {
        //bind types checkboxlist (Accounts, Vendors, Items etc.)
        string strInt = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "INTTYPE");
        List<CodeValueVO> lstInt = ser.Deserialize<List<CodeValueVO>>(strInt);
        DataTable dtInt = Utility.ConvertToDataTable(lstInt);
        dtInt.DefaultView.Sort = "Description DESC";
        cblExport.DataSource = dtInt;
        cblExport.DataTextField = "Description";
        cblExport.DataValueField = "CodeKey";
        cblExport.DataBind();

        //bind options checkboxlist (By Comp, By Dept etc.)
        string strIntOpt = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "INTOPTIONS");
        List<CodeValueVO> lstIntOpt = ser.Deserialize<List<CodeValueVO>>(strIntOpt);
        rblIntOptions.DataSource = lstIntOpt;
        rblIntOptions.DataTextField = "Description";
        rblIntOptions.DataValueField = "CodeKey";
        rblIntOptions.DataBind();
        //rblIntOptions.Style["display"] = "none";
        if (rblIntOptions.Items.Count > 0)
            rblIntOptions.SelectedIndex = 0;
        dvAccntQtn.InnerHtml = "How do you wish to maintain your company account numbers?";

        //Get data and fill in the form
        string strIntDetails = xms.getIntegrationDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<IntegrationVO> lst = ser.Deserialize<List<IntegrationVO>>(strIntDetails);
        //IntegrationVO i = new IntegrationVO();
        //i.tempStop
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "IntegrationType = '" + ddlTypes.SelectedItem.Text + "'", "IntegrationType", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            //Fill input fields
            txtQBCompanyId.Text = dt.Rows[0]["companyId"].ToString();
            hdnIntgrID.Value = dt.Rows[0]["integrationId"].ToString();
            txtQBAccessToken.Text = dt.Rows[0]["accessToken"].ToString();
            txtQBAccessTokenSecret.Text = dt.Rows[0]["accessTokenSecret"].ToString();
            txtQBAppToken.Text = dt.Rows[0]["appToken"].ToString();
            if (ut.NullSafeInteger(ddlTypes.SelectedValue) == 1)
            {
                txtQBConsumerKey.Text = dt.Rows[0]["consumerKey"].ToString();
                txtQBConsumerSecret.Text = dt.Rows[0]["consumerSecret"].ToString();
            }
            else if (ut.NullSafeInteger(ddlTypes.SelectedValue) == 2)
            {
                txtXeroConsumerKey.Text = dt.Rows[0]["consumerKey"].ToString();
                txtXeroConsumerSecret.Text = dt.Rows[0]["consumerSecret"].ToString();
            }
            try
            {
                if (!string.IsNullOrEmpty(dt.Rows[0]["isAcct"].ToString()))
                {
                    rblIntOptions.SelectedValue = dt.Rows[0]["isAcct"].ToString();
                    rblIntOptions.Style["display"] = "block";
                    if (rblIntOptions.SelectedValue == "COMP")
                        dvMsgByOption.InnerHtml = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' />Using this option we will load all your account numbers to be accessed by every department for their expenses or purchases.";
                    else
                        dvMsgByOption.InnerHtml = "<img src='images/lightbulb_32.png' class='fl' alt='Tip' height='20px' width='20px' />By using this option you will be allowed to assign all your account numbers to different departments of your company in <a onclick='confirmChanges(1);' class='synclink'>Sync Data</a> screen.";
                }
            }
            catch (Exception ex)
            {
                rblIntOptions.Style["display"] = "block";
            }
            //Get saved options
            Session["RetIntTypeString"] = dt.Rows[0]["actionType"].ToString();

            //display option for Temp stop
            //chkTempStop.Checked = dt.Rows[0]["tempStop"].ToString().ToLower() == "y" ? true : false;
            chkTempStop.Checked = dt.Rows[0]["sendtoqb"].ToString().ToLower() == "n" ? false : true;

            //display checkbox items according to saved types.
            string[] str = Session["RetIntTypeString"].ToString().Split(',');
            for (int i = 0; i < str.Length; i++)
                foreach (ListItem item in cblExport.Items)
                    if (item.Value == str[i])
                        item.Selected = true;
            if (str.Contains("ACCOUNTS"))
            {
                dvAccntOptions.Style["display"] = "block";
                dvAccntQtn.InnerHtml = "How do you wish to maintain your company account numbers?";
            }
            else
                dvAccntOptions.Style["display"] = "none";
        }
        else
            dvAccntOptions.Style["display"] = "none";
    }

    private string CombineIntTypeString()
    {
        string str = string.Empty;
        if (Session["RetIntTypeString"] != null)
        {
            string[] prevStr = Session["RetIntTypeString"].ToString().Split(',');
            List<string> lst = new List<string>(prevStr);

            foreach (ListItem item in cblExport.Items)
                if (!(item.Selected && prevStr.Contains(item.Value)))
                    str += item.Value + ":" + (item.Selected ? "Y" : "N") + ",";
        }
        else
        {
            foreach (ListItem item in cblExport.Items)
                str += item.Value + ":" + (item.Selected ? "Y" : "N") + ",";
        }
        str = str.TrimEnd(',');
        if (str.Length > 0)
            actionSize = str.Split(',').Length;
        else
            actionSize = 0;
        return str;
    }

    private void SaveData(int type)
    {
        string acctFlag = "N"; string itemFlag = "N"; string vendFlag = "N";
        //Check whether Accounts Type is checkod or not
        int i = 0;
        foreach (ListItem item in cblExport.Items)
        {
            if (item.Value == "VENDOR" && item.Selected)
                vendFlag = "Y";
            else if (item.Value == "ITEM" && item.Selected)
                itemFlag = "Y";
            else if (item.Value == "ACCOUNTS" && item.Selected)
            {
                acctFlag = "Y";
                i++;
            }
        }
        //Check whether Accounts Type is checkod or not

        IntegrationVO integrationVOObj = new IntegrationVO();
        integrationVOObj.orgId = ut.NullSafeInteger(Session["OrgID"]);
        integrationVOObj.compCode = Session["CompCode"].ToString();
        integrationVOObj.addedBy = ut.NullSafeInteger(Session["UserID"]);
        integrationVOObj.integrationType = ddlTypes.SelectedItem.Text;
        integrationVOObj.companyId = txtQBCompanyId.Text.Trim();
        if (ut.NullSafeInteger(ddlTypes.SelectedValue) == 1)
        {
            integrationVOObj.consumerKey = txtQBConsumerKey.Text.Trim();
            integrationVOObj.consumerSecret = txtQBConsumerSecret.Text.Trim();
        }
        else if (ut.NullSafeInteger(ddlTypes.SelectedValue) == 2)
        {
            integrationVOObj.consumerKey = txtXeroConsumerKey.Text.Trim();
            integrationVOObj.consumerSecret = txtXeroConsumerSecret.Text.Trim();
        }
        integrationVOObj.accessToken = txtQBAccessToken.Text.Trim();
        integrationVOObj.accessTokenSecret = txtQBAccessTokenSecret.Text.Trim();
        integrationVOObj.appToken = txtQBAppToken.Text.Trim();
        integrationVOObj.type = Convert.ToInt32(ddlTypes.SelectedValue);
        integrationVOObj.actionType = CombineIntTypeString();
        integrationVOObj.integrationId = (hdnIntgrID.Value == string.Empty ? 0 : ut.NullSafeInteger(hdnIntgrID.Value));
        integrationVOObj.actionSize = actionSize;
        integrationVOObj.compName = "test";
        integrationVOObj.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        integrationVOObj.isAcct = (i > 0 ? rblIntOptions.SelectedValue : string.Empty);
        integrationVOObj.accountFlag = acctFlag;
        integrationVOObj.itemFlag = itemFlag;
        integrationVOObj.vendorFlag = vendFlag;
        integrationVOObj.syncFlag = type;
        integrationVOObj.sendtoqb = chkTempStop.Checked ? "Y" : "N";
        string retStr = xms.addIntegration(integrationVOObj);
        dvError.InnerHtml = retStr;
        if (retStr.ToLower().Contains("succes"))
        {
            dvError.Style["color"] = "Green";
            hdnChangesSaved.Value = "0";
            if (i > 0)
                Session["AccountBy"] = rblIntOptions.SelectedValue;
            else
                Session["AccountBy"] = string.Empty;
        }
        else
        {
            dvError.Style["color"] = "Red ";
            if (retStr.ToLower().Contains("authentication failed"))
                dvError.InnerHtml = "Failed to connect to QuickBooks. Please try again with proper details.";
        }
    }

    private void SyncData()
    {
        string acctFlag = "N"; string itemFlag = "N"; string vendFlag = "N";
        foreach (ListItem item in cblExport.Items)
        {
            if (item.Value == "VENDOR" && item.Selected)
                vendFlag = "Y";
            else if (item.Value == "ITEM" && item.Selected)
                itemFlag = "Y";
            else if (item.Value == "ACCOUNTS" && item.Selected)
                acctFlag = "Y";
        }

        string retStrAcc = string.Empty;
        string retStrItem = string.Empty;
        string retStrVend = string.Empty;
        string displayStr = string.Empty;
        if (acctFlag == "y")
            retStrAcc = xms.importQBAccounts(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ut.NullSafeInteger(Session["UserID"]));
        if (itemFlag == "y")
            retStrItem = xms.importQBItems(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ut.NullSafeInteger(Session["UserID"]));
        if (vendFlag == "y")
            retStrVend = xms.importQBVend(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), ut.NullSafeInteger(Session["UserID"]));


        if (retStrAcc.ToLower().Contains("succes"))
            displayStr += "Accounts,";
        if (retStrItem.ToLower().Contains("succes"))
            displayStr += " Items, ";
        if (retStrVend.ToLower().Contains("succes"))
            displayStr += " Vendors";


        if (displayStr.Length > 0)
        {
            dvError.Style["color"] = "Green";
            dvError.InnerHtml = displayStr.TrimEnd(',') + " updated successfully.";
        }
        else
        {
            dvError.Style["color"] = "Red";
            dvError.InnerHtml = "Failed to import the data. Please go to <a onclick='confirmChanges(0);' class='synclink'>Accounts SYNC</a> screen and try again.";
        }
    }

    private void ClearFields()
    {
        txtQBAccessToken.Text = txtQBAccessTokenSecret.Text = txtQBAppToken.Text = txtQBCompanyId.Text = txtQBConsumerKey.Text = txtQBConsumerSecret.Text = txtXeroConsumerKey.Text =
            txtXeroConsumerSecret.Text = string.Empty;
        foreach (ListItem item in cblExport.Items)
            item.Selected = false;
        foreach (ListItem item in rblIntOptions.Items)
            item.Selected = false;
        hdnIntgrID.Value = string.Empty;
    }

    #endregion
}