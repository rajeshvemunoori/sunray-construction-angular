using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Quotations_products : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Items main

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            btnAddCat.Attributes.Add("onclick", "javascript:return animateDiv('#" + dvCatDetails.ClientID + "', '" + dvCatDetails.ClientID + "', '" + dvCatMsg.ClientID + "')");
            btnAddSubCat.Attributes.Add("onclick", "javascript:return  animateDiv('#" + dvSubCatDetails.ClientID + "', '" + dvSubCatDetails.ClientID + "', '" + dvSubCatMsg.ClientID + "')");
            btnAddItem.Attributes.Add("onclick", "javascript:return  animateDiv('#" + dvItemDetails.ClientID + "', '" + dvItemDetails.ClientID + "', '" + dvItemMsg.ClientID + "')");
            //btnManageItems.Attributes.Add("onclick", "javascript:return  animateDiv('#" + dvManageLP.ClientID + "', '" + dvManageLP.ClientID + "', '" + dvManageItemsMsg.ClientID + "')");
            btnCloseCatAdd.Attributes.Add("onclick", "javascript:return  clearFields('" + dvCatDetails.ClientID + "', '#" + dvCatGrid.ClientID + "')");
            btnCloseSubCatAdd.Attributes.Add("onclick", "javascript:return  clearFields('" + dvSubCatDetails.ClientID + "', '#" + dvSubCatGrid.ClientID + "')");
            btnCloseItemAdd.Attributes.Add("onclick", "javascript:return  clearFields('" + dvItemDetails.ClientID + "', '#" + dvItemGrid.ClientID + "')");
            btnCloseManageLP.Attributes.Add("onclick", "javascript:return  clearManageLPFields('" + dvManageLP.ClientID + "', '#" + dvItemGrid.ClientID + "')");
            btnSaveCat.Attributes.Add("onclick", "javascript:return  validateCategory();");
            btnSaveSubCat.Attributes.Add("onclick", "javascript:return  validateSubCategory();");
            btnSaveItem.Attributes.Add("onclick", "javascript:return  validateProduct();");
            btnSaveManageLP.Attributes.Add("onclick", "javascript:return validateManageLP();");
            if (!IsPostBack)
            {
                Session.Remove("ItemCat");
                Session.Remove("Items");
                LoadMainData();
                LoadCatData();
                LoadSubCatData(string.Empty);
                LoadItemData(string.Empty, string.Empty);
                LoadAgreements();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void LoadMainData()
    {
        string str = xms.getItemCategories(ut.NullSafeInteger(Session["VendBillID"]));
        List<ItemCategoryVO> lst = ser.Deserialize<List<ItemCategoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["ItemCat"] = dt;
    }

    private void LoadAgreements()
    {
        DataTable dt = new DataTable();
        if (Session["Agreements"] == null)
        {
            string str = xms.getVendorAgreements(ut.NullSafeInteger(Session["VendBillID"]), string.Empty, string.Empty);
            List<AgreementVO> lst = ser.Deserialize<List<AgreementVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Agreements"] = dt;
        }

        DataTable dtUnits = new DataTable();
        if (Session["UOM"] == null)
        {
            string str = xms.getCodes(0, "ALL", "UOM");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dtUnits = Utility.ConvertToDataTable(lst);
            Session["UOM"] = dtUnits;
        }
    }

    protected void btnReload_Click(object sender, EventArgs e)
    {
        dvCatMainMsg.InnerHtml = dvSubCatMainMsg.InnerHtml = dvItemMainMsg.InnerHtml = string.Empty;
        Session.Remove("ItemCat");
        Session.Remove("Items");
        LoadMainData();
        LoadCatData();
        LoadSubCatData(string.Empty);
        LoadItemData(string.Empty, string.Empty);
    }

    #endregion

    #region Categories

    protected void lnkEditCat_Click(object sender, EventArgs e)
    {

    }

    private void ClearCatFields()
    {
        txtCatCode.Text = txtCatDescr.Text = string.Empty;
    }

    protected void SortCategoryExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Category"] = lnk.ID;

        if (Session["SortDir_Category"] == null || Session["SortDir_Category"].ToString() == "Desc")
            Session["SortDir_Category"] = "Asc";
        else
            Session["SortDir_Category"] = "Desc";

        Session["SortExpr_Category"] = e.CommandArgument;
        LoadCatData();
    }

    private void LoadCatData()
    {
        DataTable dt = (DataTable)Session["ItemCat"];

        DataTable dtCat = dt.DefaultView.ToTable(true, "categoryCode", "categoryDescr");
        if ((Session["SortExpr_Category"] != null) && Session["SortDir_Category"] != null)
        {
            DataView view = new DataView(dtCat);
            view.Sort = Session["SortExpr_Category"].ToString() + " " + Session["SortDir_Category"].ToString();
            gvCategory.DataSource = view;
        }
        else
            gvCategory.DataSource = dtCat;
        gvCategory.DataBind();
    }

    protected void gvCategory_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkEditCat = (LinkButton)e.Row.FindControl("lnkEditCat");
            lnkEditCat.Attributes.Add("onclick", "javascript:return editCat(" + e.Row.RowIndex + ");");
            e.Row.Cells[0].Style["text-align"] = "center";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Category"] != null && Session["Control_Category"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Category"].ToString());
                if (Session["SortDir_Category"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnSaveCat_Click(object sender, EventArgs e)
    {
        ItemCategoryVO itc = new ItemCategoryVO();
        itc.categoryCode = txtCatCode.Text.Trim();
        itc.categoryDescr = txtCatDescr.Text.Trim();
        itc.isActive = "Y";
        itc.vendorID = ut.NullSafeInteger(Session["VendBillID"]);
        itc.userID = ut.NullSafeInteger(Session["UserID"]);
        string retStr = xms.addItemCategory(itc);
        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("ItemCat");
            LoadMainData();
            LoadCatData();
            LoadSubCatData(string.Empty);
            DisplayMessage(dvCatMainMsg, retStr, "Green");
            ClearCatFields();
        }
        else
            DisplayMessage(dvCatMainMsg, retStr, "Red");
    }

    #endregion

    #region Sub-Categories

    private void ClearSubCatFields()
    {
        txtSubCatCode.Text = txtSubCatDescr.Text = string.Empty;
    }

    protected void lnkEditSubCat_Click(object sender, EventArgs e)
    {

    }

    protected void SortSubCategoryExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_SubCategory"] = lnk.ID;

        if (Session["SortDir_SubCategory"] == null || Session["SortDir_SubCategory"].ToString() == "Desc")
            Session["SortDir_SubCategory"] = "Asc";
        else
            Session["SortDir_SubCategory"] = "Desc";

        Session["SortExpr_SubCategory"] = e.CommandArgument;
        string catCode = txtSelCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        LoadSubCatData(catCode);
    }

    private void LoadSubCatData(string catCode)
    {
        DataTable dt = (DataTable)Session["ItemCat"];
        DataView dvSubCat;
        if (!string.IsNullOrEmpty(catCode))
            dvSubCat = new DataView(dt, "categoryCode = '" + catCode + "'", "categoryCode", DataViewRowState.CurrentRows);
        else
            dvSubCat = dt.DefaultView;
        if ((Session["SortExpr_SubCategory"] != null) && Session["SortDir_SubCategory"] != null)
        {
            dvSubCat.Sort = Session["SortExpr_SubCategory"].ToString() + " " + Session["SortDir_SubCategory"].ToString();
            gvSubCat.DataSource = RemoveEmptyRows(dvSubCat.ToTable());
        }
        else
            gvSubCat.DataSource = RemoveEmptyRows(dvSubCat.ToTable());
        gvSubCat.DataBind();
    }

    protected void txtSelCat_TextChanged(object sender, EventArgs e)
    {
        string catCode = txtSelCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        LoadSubCatData(catCode);
    }

    protected void gvSubCat_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkEditSubCat = (LinkButton)e.Row.FindControl("lnkEditSubCat");
            lnkEditSubCat.Attributes.Add("onclick", "javascript:return editSubCat(" + e.Row.RowIndex + ");");
            e.Row.Cells[0].Style["text-align"] = "center";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_SubCategory"] != null && Session["Control_SubCategory"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_SubCategory"].ToString());
                if (Session["SortDir_SubCategory"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnSaveSubCat_Click(object sender, EventArgs e)
    {
        string catCode = txtCatForsubCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        ItemCategoryVO itc = new ItemCategoryVO();
        //itc.categoryCode = txtCatForsubCat.Text.Trim();
        itc.categoryCode = catCode;
        itc.subCategoryCode = txtSubCatCode.Text.Trim();
        itc.subCategoryDescr = txtSubCatDescr.Text.Trim();
        itc.vendorID = ut.NullSafeInteger(Session["VendBillID"]);
        itc.userID = ut.NullSafeInteger(Session["UserID"]);
        string retStr = xms.addItemSubCategory(itc);
        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("ItemCat");
            LoadMainData();
            LoadCatData();
            LoadSubCatData(string.Empty);
            DisplayMessage(dvSubCatMainMsg, retStr, "Green");
            ClearSubCatFields();
        }
        else
            DisplayMessage(dvSubCatMainMsg, retStr, "Red");
    }

    #endregion

    #region Items

    private void ClearItemFields()
    {
        txtItemCode.Text = txtItemDescr.Text = txtItemCat.Text = txtItemSubCat.Text = txtItemNotes.Text = string.Empty;
        //txtItemVendNum.Text = string.Empty;
    }

    protected void lnkEditItem_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnItemID = (HiddenField)row.FindControl("hdnItemID");

        DataTable dt = (DataTable)Session["Items"];
        DataView dv = new DataView(dt, "itemID = " + hdnItemID.Value, "itemID", DataViewRowState.CurrentRows);
        txtItemCat.Text = dv.ToTable().Rows[0]["categoryCode"].ToString() + "--" + dv.ToTable().Rows[0]["categoryDescr"].ToString();
        txtItemSubCat.Text = dv.ToTable().Rows[0]["subCategoryCode"].ToString() + "--" + dv.ToTable().Rows[0]["subCategoryDescr"].ToString();
        txtItemCode.Text = dv.ToTable().Rows[0]["itemCode"].ToString();
        txtItemDescr.Text = dv.ToTable().Rows[0]["itemDescr"].ToString();
        txtItemUOM.Text = dv.ToTable().Rows[0]["uomCode"].ToString() + "--" + dv.ToTable().Rows[0]["uomDescr"].ToString();
        //txtItemUOMDescr.Text = dv.ToTable().Rows[0]["uomDescr"].ToString();
        txtItemListPrice.Text = dv.ToTable().Rows[0]["listPrice"].ToString();
        txtItemNotes.Text = dv.ToTable().Rows[0]["itemNotes"].ToString();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "animateDiv('#" + dvItemDetails.ClientID + "', '" + dvItemDetails.ClientID + "', '" + dvItemMsg.ClientID + "')", true);
    }

    protected void SortItemExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Item"] = lnk.ID;

        if (Session["SortDir_Item"] == null || Session["SortDir_Item"].ToString() == "Desc")
            Session["SortDir_Item"] = "Asc";
        else
            Session["SortDir_Item"] = "Desc";

        Session["SortExpr_Item"] = e.CommandArgument;
        string catCode = txtSelCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        string subCatCode = txtSubCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        LoadItemData(catCode, subCatCode);
    }

    private void LoadItemData(string catCode, string subCatCode)
    {
        DataTable dt = new DataTable();
        if (Session["Items"] == null)
        {
            string str = xms.getItems(ut.NullSafeInteger(Session["VendBillID"]));
            List<ItemCategoryVO> lst = ser.Deserialize<List<ItemCategoryVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Items"] = dt;
        }
        else
            dt = (DataTable)Session["Items"];
        DataView dv;
        if (!string.IsNullOrEmpty(catCode) && !string.IsNullOrEmpty(subCatCode))
            dv = new DataView(dt, "categoryCode = '" + catCode + "' and subCategoryCode = '" + subCatCode + "'", "categoryCode", DataViewRowState.CurrentRows);
        else if (!string.IsNullOrEmpty(catCode) && string.IsNullOrEmpty(subCatCode))
            dv = new DataView(dt, "categoryCode = '" + catCode + "'", "categoryCode", DataViewRowState.CurrentRows);
        else if (string.IsNullOrEmpty(catCode) && !string.IsNullOrEmpty(subCatCode))
            dv = new DataView(dt, "subCategoryCode = '" + subCatCode + "'", "subCategoryCode", DataViewRowState.CurrentRows);
        else
            dv = dt.DefaultView;
        if ((Session["SortExpr_Item"] != null) && Session["SortDir_Item"] != null)
        {
            dv.Sort = Session["SortExpr_Item"].ToString() + " " + Session["SortDir_Item"].ToString();
            gvItems.DataSource = RemoveEmptyRows(dv.ToTable());
        }
        else
            gvItems.DataSource = RemoveEmptyRows(dv.ToTable());
        gvItems.DataBind();
    }

    protected void txtSelCatForItem_TextChanged(object sender, EventArgs e)
    {
        txtSubCatForItem.Text = string.Empty;
        DataTable dt = (DataTable)Session["ItemCat"];
        string catCode = txtSelCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        DataView dv = new DataView(dt, "categoryCode = '" + catCode + "'", "categoryCode", DataViewRowState.CurrentRows);
        Session["ItemSubCat"] = dv.ToTable(true, "subCategoryCode", "subCategoryDescr");
        LoadItemData(catCode, string.Empty);
    }

    protected void txtItemCat_TextChanged(object sender, EventArgs e)
    {
        txtItemSubCat.Text = string.Empty;
        DataTable dt = (DataTable)Session["ItemCat"];
        string catCode = txtItemCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        DataView dv = new DataView(dt, "categoryCode = '" + catCode + "'", "categoryCode", DataViewRowState.CurrentRows);
        Session["ItemSubCat"] = dv.ToTable(true, "subCategoryCode", "subCategoryDescr");
    }

    protected void txtSubCatForItem_TextChanged(object sender, EventArgs e)
    {
        string catCode = txtSelCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        string subCatCode = txtSubCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        LoadItemData(catCode, subCatCode);
    }

    protected void gvItems_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkEditItem = (LinkButton)e.Row.FindControl("lnkEditItem");
            //lnkEditItem.Attributes.Add("onclick", "javascript:return editItem(" + e.Row.RowIndex + ");");
            e.Row.Cells[0].Style["text-align"] = "center";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Item"] != null && Session["Control_Item"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Item"].ToString());
                if (Session["SortDir_Item"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnSaveItem_Click(object sender, EventArgs e)
    {
        string catCode = txtItemCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        string subCatCode = txtItemSubCat.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
        string[] uom = txtItemUOM.Text.Split(new string[] { "--" }, StringSplitOptions.None);
        ItemCategoryVO itc = new ItemCategoryVO();
        itc.agreementCode = string.Empty;
        itc.categoryCode = catCode.Trim();
        itc.itemCode = txtItemCode.Text.Trim();
        itc.itemDescr = txtItemDescr.Text.Trim();
        itc.itemNotes = txtItemNotes.Text.Trim();
        itc.listPrice = ut.NullSafeDouble(txtItemListPrice.Text);
        itc.subCategoryCode = subCatCode.Trim();
        itc.uomCode = uom[0];
        itc.uomDescr = uom[1];
        itc.userID = ut.NullSafeInteger(Session["UserID"]);
        itc.vendorID = ut.NullSafeInteger(Session["VendBillID"]);
        string retStr = xms.addVendItem(itc);
        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("Items");
            string catCodeExt = txtSelCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
            string subCatCodeExt = txtSubCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
            LoadItemData(catCodeExt, subCatCodeExt);
            DisplayMessage(dvItemMainMsg, retStr, "Green");
            ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "clearFields('" + dvItemDetails.ClientID + "', '#" + dvItemDetails.ClientID + "')", true);
            //ClearItemFields();
        }
        else
            DisplayMessage(dvItemMainMsg, retStr, "Red");
    }

    #region Manage LP

    protected void btnSaveManageLP_Click(object sender, EventArgs e)
    {
        string vendorId, itemCode, priceOption, value, user, appString = "###";
        vendorId = itemCode = priceOption = value = user = string.Empty;

        foreach (GridViewRow row in gvItems.Rows)
        {
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                HiddenField hdnItemCode = (HiddenField)row.FindControl("hdnItemCode");
                vendorId += Session["VendBillID"].ToString() + appString;
                itemCode += hdnItemCode.Value + appString;
                priceOption += ddlLPOption.SelectedValue + appString;
                value += txtLPChangeVal.Text + appString;
                user += Session["UserID"].ToString() + appString;
            }
        }
        ItemPriceMulVO item = new ItemPriceMulVO();
        //item.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        item.priceOption = priceOption.Substring(0, priceOption.Length - 3);
        item.user = user.Substring(0, user.Length - 3);
        item.value = value.Substring(0, value.Length - 3);
        item.vendorId = vendorId.Substring(0, vendorId.Length - 3);
        string retStr = xms.updateItemPriceMul(item);
        if (retStr.ToLower().Contains("succes"))
        {
            Session.Remove("Items");
            string catCodeExt = txtSelCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
            string subCatCodeExt = txtSubCatForItem.Text.Split(new string[] { "--" }, StringSplitOptions.None)[0];
            LoadItemData(catCodeExt, subCatCodeExt);
            DisplayMessage(dvItemMainMsg, retStr, "Green");
            ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "clearManageLPFields('" + dvManageLP.ClientID + "', '#" + dvManageLP.ClientID + "')", true);
        }
        else
            DisplayMessage(dvManageItemsMsg, retStr, "Red");
    }

    #endregion

    #endregion

    #region Misc

    private void DisplayMessage(HtmlGenericControl dv, string msg, string color)
    {
        dv.Style["color"] = color;
        dv.InnerHtml = msg;
    }

    private DataTable RemoveEmptyRows(DataTable dt)
    {
        bool isEmpty;
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            isEmpty = true;
            for (int j = 0; j < dt.Columns.Count; j++)
            {
                if (string.IsNullOrEmpty(dt.Rows[i][j].ToString()) == false)
                {
                    isEmpty = false;
                    break;
                }
            }
            if (isEmpty == true)
            {
                dt.Rows.RemoveAt(i);
                i--;
            }
        }
        return dt;
    }

    #endregion

    #region Web Methods

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCategories(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["ItemCat"];
        DataTable dtTemp = dt.DefaultView.ToTable(true, "categoryCode", "categoryDescr");
        DataView dv = new DataView(dtTemp, "categoryCode LIKE '%" + prefixText + "%' OR categoryDescr LIKE '%" + prefixText + "%'", "categoryCode", DataViewRowState.CurrentRows);
        string[] catCodes = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            catCodes[i] = dv.ToTable().Rows[i]["categoryCode"].ToString() + "--" + dv.ToTable().Rows[i]["categoryDescr"].ToString();
        return catCodes;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetSubCategories(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["ItemCat"];
        DataView dv = new DataView(dt, "subCategoryCode LIKE '%" + prefixText + "%' OR subCategoryDescr LIKE '%" + prefixText + "%'", "subCategoryCode", DataViewRowState.CurrentRows);
        string[] subCatCodes = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            subCatCodes[i] = dv.ToTable().Rows[i]["subCategoryCode"].ToString() + "--" + dv.ToTable().Rows[i]["subCategoryDescr"].ToString();
        return subCatCodes;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetUnits(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["UOM"];
        DataView dv = new DataView(dt, "CodeKey LIKE '%" + prefixText + "%' OR Description LIKE '%" + prefixText + "%'", "CodeKey", DataViewRowState.CurrentRows);
        string[] uom = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            uom[i] = dv.ToTable().Rows[i]["CodeKey"].ToString() + "--" + dv.ToTable().Rows[i]["Description"].ToString();
        return uom;
    }

    #endregion
}