using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Web.UI.HtmlControls;
using System.Web.Services;

public partial class Quotations_VendContacts : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dt = new DataTable();
    string addedBy, contactDesignation, contactEmail, contactFax, contactFirstName, contactId, contactLastName, contactMethod, contactMiddleName, contactMobile,
        contactPerferName, contactPhone, contactType, modifiedBy, type, userEmail, vendorBillShipType, vendorId;

    #endregion

    #region Load Contacts

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");
            if (!IsPostBack)
                LoadData();
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        lblType.Text = ddlType.SelectedItem.Text;
        int type = ddlType.SelectedValue == "S" ? 1 : 0;
        if (Session["VendContacts"] == null)
        {
            string str = xms.getBSContacts(ut.NullSafeInteger(Session["VendBillID"]), 1);
            List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["VendContacts"] = dt;
        }
        else
            dt = (DataTable)Session["VendContacts"];
        LoadBillToShipTo(dt);
    }

    private void FillDropdowns()
    {

    }

    protected void TypeChanged(object sender, EventArgs e)
    {
        LoadData();
    }

    private void LoadBillToShipTo(DataTable dt)
    {
        string billID = Session["VendBillID"].ToString();
        if (ddlType.SelectedValue == "B")
            FillDropDownWithBillTo(ddlSelectedType, billID);
        else
        {
            if (dt.Rows.Count > 0)
            {
                ddlSelectedType.DataSource = LoadShipToDetails();
                ddlSelectedType.DataTextField = "vendShipId";
                ddlSelectedType.DataValueField = "vendShipId";
                ddlSelectedType.DataBind();
            }
            else
                ddlSelectedType.Items.Clear();
        }
        LoadContacts(dt);
    }

    private DataTable LoadShipToDetails()
    {
        DataTable dtTemp = new DataTable();
        //string expr1 = "vendorBillShipType = '" + ddlType.SelectedValue + "";
        //DataView dv1 = new DataView(dtTemp, expr1, "vendorId", DataViewRowState.CurrentRows);
        if (Session["VendShips"] == null)
        {
            string retStr = xms.getBillShiptToDetails(ut.NullSafeInteger(Session["VendBillID"]), 1);
            List<VendorVO> lst = ser.Deserialize<List<VendorVO>>(retStr);
            dtTemp = Utility.ConvertToDataTable(lst);
            Session["VendShips"] = dtTemp;
        }
        else
            dtTemp = (DataTable)Session["VendShips"];
        dtTemp.DefaultView.Sort = "vendShipId Asc";
        return dtTemp;
    }

    private void LoadContacts(DataTable dt)
    {
        //Fill list with Contacts which are not yet assigned
        DataTable dtTemp1 = dt;
        string expr1 = "vendorId = '" + ddlSelectedType.SelectedValue + "'";
        DataView dv1 = new DataView(dtTemp1, expr1, "vendBillId", DataViewRowState.CurrentRows);
        lstAssgnCont.DataSource = dv1;
        lstAssgnCont.DataBind();

        string lstEmail = string.Empty;
        for (int i = 0; i < dv1.ToTable().Rows.Count; i++)
            lstEmail += "'" + dv1.ToTable().Rows[i]["contactEmail"].ToString() + "', ";

        //Fill already assigned Contacts list
        DataTable dtTemp = dt;
        string expr = string.Empty;
        if (lstEmail != string.Empty)
            expr = "vendorId <> '" + ut.NullSafeInteger(ddlSelectedType.SelectedValue) + "' And contactEmail Not in (" + lstEmail.TrimEnd(' ').TrimEnd(',') + ")";
        else
            expr = "vendorId <> '" + ddlSelectedType.SelectedValue + "'";
        DataView dv = new DataView(dtTemp, expr, "vendBillId", DataViewRowState.CurrentRows);

        //Get distinct contacts which are not assigned
        DataTable dtTemp2 = dv.ToTable(true, "contactEmail");
        DataTable dtClone = dv.ToTable().Clone();

        for (int i = 0; i < dtTemp2.Rows.Count; i++)
        {
            string expr2 = "contactEmail = '" + dtTemp2.Rows[i]["contactEmail"].ToString() + "'";
            DataView dv2 = new DataView(dv.ToTable(), expr2, "contactEmail", DataViewRowState.CurrentRows);
            if (dv2.ToTable().Rows.Count > 0)
                dtClone.ImportRow(dv2.ToTable().Rows[0]);
        }

        lstErCont.DataSource = dtClone;
        lstErCont.DataBind();
    }

    protected void SelectedTypeChanged(object sender, EventArgs e)
    {
        dt = (DataTable)Session["VendContacts"];
        LoadContacts(dt);
    }

    protected void AssignContact(object sender, EventArgs e)
    {
        Session.Remove("VendContacts");
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("VendContacts");
        LoadData();
    }

    #endregion

    #region New Contact

    protected void AddNewContact(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return validateVendContact();");
        btnReset.Attributes.Add("onclick", "javascript:return resetVendContact();");
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvMsg');");
        txtMobile.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtMobile', 'dvMsg');");
        txtFax.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtFax', 'dvMsg');");
        //ddlNewType.Attributes.Add("onchange", "javascript:return GetSelectedBillToData();");
        ClearFields();
        popNew.Show();
    }

    protected void NewTypeSelected(object sender, EventArgs e)
    {
        if (ddlNewType.SelectedValue != "0")
        {
            dvType.Style["display"] = "block";
            lblTypeText.InnerHtml = ddlNewType.SelectedItem.Text;
        }
        else
            dvType.Style["display"] = "none";
        if (ddlNewType.SelectedValue.ToLower() == "b")
            FillDropDownWithBillTo(ddlSelectedNewType, Session["VendBillID"].ToString());
        else
        {
            ddlSelectedNewType.DataSource = LoadShipToDetails();
            ddlSelectedNewType.DataTextField = "vendshipId";
            ddlSelectedNewType.DataValueField = "vendshipId";
            ddlSelectedNewType.DataBind();
        }
        popNew.Show();
    }

    private void FillDropDownWithBillTo(DropDownList ddl, string billID)
    {
        DataTable dtTemp = new DataTable();
        dtTemp.Columns.Add("VendBillID");
        DataRow drTemp;
        drTemp = dtTemp.NewRow();
        drTemp["VendBillID"] = billID;
        dtTemp.Rows.Add(drTemp);
        dtTemp.AcceptChanges();
        ddl.DataSource = dtTemp;
        ddl.DataValueField = "VendBillID";
        ddl.DataTextField = "VendBillID";
        ddl.DataBind();
    }

    protected void SaveDetails(object sender, EventArgs e)
    {
        string retStr = string.Empty;
        VendorVO vend = new VendorVO();
        vend.vendorId = ddlSelectedNewType.SelectedItem.Text;
        vend.vendorBillShipType = ddlNewType.SelectedValue;
        vend.contactId = 0;
        vend.contactDesignation = txtDesign.Text;
        vend.contactType = ddlContType.SelectedValue;
        vend.contactFirstName = txtFirstName.Text;
        vend.contactLastName = txtLastName.Text;
        vend.contactMiddleName = txtMidName.Text;
        vend.contactPerferName = txtPreferName.Text;
        vend.contactMethod = ddlContMethod.SelectedValue;
        vend.contactEmail = txtEmail.Text;
        vend.contactPhone = txtPhone.Text;
        vend.contactFax = txtFax.Text;
        vend.contactMobile = txtMobile.Text;
        vend.addedBy = "0";
        vend.modifiedBy = "0";
        vend.type = 1;
        retStr = xms.addVendContacts(vend);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMainMsg("Green", retStr);
            Session.Remove("VendContacts");
            LoadData();
            ClearFields();
            popNew.Hide();
        }
        else
        {
            DisplayMsg("Red", retStr);
            popNew.Show();
        }
    }

    protected void CloseWindow(object sender, EventArgs e)
    {
        popNew.Hide();
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMsg.InnerHtml = msg;
        dvMsg.Style["color"] = color;
    }

    private void DisplayMainMsg(string color, string msg)
    {
        dvMainMsg.InnerHtml = msg;
        dvMainMsg.Style["color"] = color;
    }

    private void ClearFields()
    {
        txtFirstName.Text = txtLastName.Text = txtMidName.Text = txtPreferName.Text = txtEmail.Text = txtDesign.Text = txtPhone.Text = txtMobile.Text = txtFax.Text = string.Empty;
        ddlContMethod.SelectedIndex = ddlContType.SelectedIndex = ddlNewType.SelectedIndex = 0;
        dvType.Style["display"] = "none";
    }

    #endregion

    #region Assign Contact

    protected void AssignSelectedContacts(object sender, EventArgs e)
    {
        dt = (DataTable)Session["VendContacts"];
        //Add selected contact to assigned list
        if (lstErCont.SelectedIndex >= 0)
        {
            DisplayMainMsg(string.Empty, string.Empty);
            int cnt = lstErCont.Items.Count;
            for (int i = 0; i < cnt; i++)
                if (lstErCont.Items[i].Selected)
                    if (!lstAssgnCont.Items.Contains(lstErCont.Items[i]))
                        lstAssgnCont.Items.Add(lstErCont.Items[i]);
            //Remove selected items in Profiles Listbox
            List<ListItem> itemsToRemove = new List<ListItem>();

            foreach (ListItem listItem in lstErCont.Items)
                if (listItem.Selected)
                    itemsToRemove.Add(listItem);
            foreach (ListItem listItem in itemsToRemove)
                lstErCont.Items.Remove(listItem);

            //Save changes to database
            AddAssignedContacts(itemsToRemove);
        }
        else
            DisplayMainMsg("Red", "Please select atleast one contact to assign.");
    }

    protected void AssignMultipleContacts(object sender, EventArgs e)
    {
        List<ListItem> lstMovedItems = new List<ListItem>();
        if (lstErCont.Items.Count > 0)
        {
            DisplayMainMsg(string.Empty, string.Empty);
            int cnt = lstErCont.Items.Count;
            for (int i = 0; i < cnt; i++)
            {
                lstMovedItems.Add(lstErCont.Items[0]);
                //Assign Selected contacts from Listbox1 to Listbox2
                lstAssgnCont.Items.Add(lstErCont.Items[0]);
                //Remove selected items in contacts Listbox
                lstErCont.Items.Remove(lstErCont.Items[0]);
            }

            //Save changes to database
            AddAssignedContacts(lstMovedItems);
        }
        else
            DisplayMainMsg("Red", "There are no contacts to assign.");
    }

    private void AddAssignedContacts(List<ListItem> lst)
    {
        dt = (DataTable)Session["VendContacts"];
        string appString = "#";
        foreach (ListItem item in lst)
        {
            string expr = "contactId = " + item.Value;
            DataView dv = new DataView(dt, expr, "contactId", DataViewRowState.CurrentRows);
            addedBy = dv.ToTable().Rows[0]["addedBy"].ToString() + appString;
            contactDesignation = dv.ToTable().Rows[0]["contactDesignation"].ToString() + appString;
            contactEmail = dv.ToTable().Rows[0]["contactEmail"].ToString() + appString;
            contactFax = dv.ToTable().Rows[0]["contactFax"].ToString() + appString;
            contactFirstName = dv.ToTable().Rows[0]["contactFirstName"].ToString() + appString;
            contactId = dv.ToTable().Rows[0]["contactId"].ToString() + appString;
            contactLastName = dv.ToTable().Rows[0]["contactLastName"].ToString() + appString;
            contactMethod = dv.ToTable().Rows[0]["contactMethod"].ToString() + appString;
            contactMiddleName = dv.ToTable().Rows[0]["contactMiddleName"].ToString() + appString;
            contactMobile = dv.ToTable().Rows[0]["contactMobile"].ToString() + appString;
            contactPerferName = dv.ToTable().Rows[0]["contactPerferName"].ToString() + appString;
            contactPhone = dv.ToTable().Rows[0]["contactPhone"].ToString() + appString;
            contactType = dv.ToTable().Rows[0]["contactType"].ToString() + appString;
            modifiedBy = dv.ToTable().Rows[0]["modifiedBy"].ToString() + appString;
            type = "1" + appString;
            userEmail = Session["LogEmail"].ToString() + appString;
            vendorBillShipType = ddlType.SelectedValue + appString;
            vendorId = ddlSelectedType.SelectedValue + appString;
        }
        VendorMulVO vend = new VendorMulVO();
        vend.addedBy = addedBy.TrimEnd('#');
        vend.contactDesignation = contactDesignation.TrimEnd('#');
        vend.contactEmail = contactEmail.TrimEnd('#');
        vend.contactFax = contactFax.TrimEnd('#');
        vend.contactFirstName = contactFirstName.TrimEnd('#');
        vend.contactId = contactId.TrimEnd('#');
        vend.contactLastName = contactLastName.TrimEnd('#');
        vend.contactMethod = contactMethod.TrimEnd('#');
        vend.contactMiddleName = contactMiddleName.TrimEnd('#');
        vend.contactMobile = contactMobile.TrimEnd('#');
        vend.contactPerferName = contactPerferName.TrimEnd('#');
        vend.contactPhone = contactPhone.TrimEnd('#');
        vend.contactType = contactType.TrimEnd('#');
        vend.modifiedBy = modifiedBy.TrimEnd('#');
        vend.type = type.TrimEnd('#');
        vend.userEmail = userEmail.TrimEnd('#');
        vend.vendorBillShipType = vendorBillShipType.TrimEnd('#');
        vend.vendorId = vendorId.TrimEnd('#');
        string retStr = xms.addVendContactsMul(vend);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMainMsg("Green", retStr);
            Session.Remove("VendContacts");
            LoadData();
        }
        else
            DisplayMainMsg("Red", retStr);
    }

    #endregion
}