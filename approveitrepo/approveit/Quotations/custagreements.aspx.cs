using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Web.UI.HtmlControls;
using System.Reflection;

public partial class Quotations_custagreements : System.Web.UI.Page
{
    #region public variables
    public string list = string.Empty;
    #endregion

    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Customer Agreements

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            //btnAddTrans.Attributes.Add("onclick", "javascript:return animateDiv('#" + dvAggrDetails.ClientID + "', '" + dvAggrDetails.ClientID + "', '" + dvAggrMsg.ClientID + "')");
            btnCloseTransAdd.Attributes.Add("onclick", "javascript:return  clearFields('" + dvAggrDetails.ClientID + "', '#" + dvAggrGrid.ClientID + "')");
            btnSaveTrans.Attributes.Add("onclick", "javascript:return validateCustAgreement();");
            if (!IsPostBack)
            {
                Session.Remove("CustAgreements");
                LoadAgreementsGrid();
                LoadInitialData();
                txtAgreement.Focus();
                btnSaveTrans.Visible = false;
                if (Request.QueryString.Count > 0)
                {
                    ShowSelectedAgreement();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void ShowSelectedAgreement()
    {
        string agrCode = Request.QueryString["a"];
        DataTable dtAgr = (DataTable)Session["Agreements"];
        DataView dvAgr = new DataView(dtAgr, "agreementCode = '" + agrCode + "'", "agreementCode", DataViewRowState.CurrentRows);
        txtAgreement.Text = dvAgr.ToTable().Rows[0]["agreementCode"].ToString() + "--" + dvAgr.ToTable().Rows[0]["agreementDescr"].ToString();
        FilterAgreementItems();
    }

    private void LoadInitialData()
    {
        //Load items
        DataTable dt = new DataTable();
        if (Session["Items"] == null)
        {
            string str = xms.getItems(ut.NullSafeInteger(Session["VendBillID"]));
            List<ItemCategoryVO> lst = ser.Deserialize<List<ItemCategoryVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Items"] = dt;
        }

        //Load Agreements
        if (Session["Agreements"] == null)
        {
            string str = xms.getVendorAgreements(ut.NullSafeInteger(Session["VendBillID"]), string.Empty, string.Empty);
            List<AgreementVO> lst = ser.Deserialize<List<AgreementVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Agreements"] = dt;
        }

        //Load Customers
        DataTable dtCust = new DataTable();
        if (Session["Customers"] == null)
        {
            string strCust = xms.getCSOrgDetails(0);
            List<CustomerServiceVO> lstCust = ser.Deserialize<List<CustomerServiceVO>>(strCust);
            dtCust = Utility.ConvertToDataTable(lstCust);
            Session["Customers"] = dtCust.DefaultView.ToTable(true, "orgname", "orgid");
        }
        LoadAgreementForAutoPopulate();
    }

    private void LoadAgreementForAutoPopulate()
    { //load agreements autocomplete 
        DataTable dt = ((DataTable)Session["Agreements"]).DefaultView.ToTable(true, "agreementCode", "agreementDescr", "customerID", "validFrom", "validTo");
        DataTable dtCust = (DataTable)Session["CustAgreements"];
        DataTable dtAgr = dt.Clone();
        string[] arrAgr = dtCust.AsEnumerable().Select(r => r.Field<string>("agrmntCode")).ToArray();

        for (int i = 0; i < dt.Rows.Count; i++)
            //if (!arrAgr.Contains(dt.Rows[i]["agreementCode"].ToString()))
            dtAgr.ImportRow(dt.Rows[i]);
        DataTable dtTemp = dtAgr.Clone();

        //add new column in dtTemp named 'value' to use in jQuery autocomplete
        if (!dtTemp.Columns.Contains("value"))
            dtTemp.Columns.Add("value");
        //add new column in dtTemp named 'customer' to use in jQuery autocomplete
        if (!dtTemp.Columns.Contains("custName"))
            dtTemp.Columns.Add("custName");

        int j = 0;
        foreach (DataRow row in dtAgr.Rows)
        {
            dtTemp.ImportRow(row);
            dtTemp.Rows[j]["value"] = dtTemp.Rows[j]["agreementCode"];
            dtTemp.Rows[j]["custName"] = GetCustName(ut.NullSafeInteger(dtTemp.Rows[j]["customerID"]));
            j++;
        }
        //add new column in dtTemp named 'value' to use in jQuery autocomplete

        if (dtTemp.Rows.Count > 0)
        {
            //convert datatabel data required json string for use in jQuery autocomplete
            list = ConvertDataTableToJSON(dtTemp);
            //convert datatabel data required json string for use in jQuery autocomplete

            list = list.Replace("'", "\"");
            //load agreements autocomplete 
        }
    }

    private DataTable LoadAgreements()
    {
        DataTable dt = new DataTable();
        string itemCode = txtItem.Text.Trim().Split(new string[] { "--" }, StringSplitOptions.None)[0];
        if (Session["CustAgreements"] == null)
        {
            string str = xms.getAgrmentTransaction(ut.NullSafeInteger(Session["VendBillID"]), string.Empty);
            List<AgrmntTransactionVO> lst = ser.Deserialize<List<AgrmntTransactionVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["CustAgreements"] = dt;
        }
        else
            dt = (DataTable)Session["CustAgreements"];
        return dt;
    }

    private void LoadAgreementsGrid()
    {
        DataTable dt = LoadAgreements();
        if ((Session["SortExpr_Cust"] != null) && Session["SortDir_Cust"] != null)
        {
            DataView view = dt.DefaultView;
            view.Sort = Session["SortExpr_Cust"].ToString() + " " + Session["SortDir_Cust"].ToString();
            gvCustAggr.DataSource = view;
        }
        else
            gvCustAggr.DataSource = dt;
        gvCustAggr.DataBind();
    }

    protected void SearchAgreementItems(object sender, EventArgs e)
    {
        FilterAgreementItems();
    }

    private void FilterAgreementItems()
    {
        DataTable dt = (DataTable)Session["CustAgreements"];
        string[] agr = !string.IsNullOrEmpty(txtAgreement.Text) ? (txtAgreement.Text.Trim().Split(new string[] { "--" }, StringSplitOptions.None)) : new string[0];
        string[] cust = !string.IsNullOrEmpty(txtCust.Text) ? (txtCust.Text.Trim().Split(new string[] { "--" }, StringSplitOptions.None)) : new string[0];
        string[] item = !string.IsNullOrEmpty(txtItem.Text) ? (txtItem.Text.Trim().Split(new string[] { "--" }, StringSplitOptions.None)) : new string[0];

        string filterCondition = "";
        if (agr.Length != 0)
            filterCondition += "agrmntCode = '" + agr[0] + "' and ";
        if (cust.Length != 0)
            filterCondition += "orgName = '" + cust[0] + "' and ";
        if (item.Length != 0)
            filterCondition += "itemCode = '" + item[0] + "' and ";

        if (!string.IsNullOrEmpty(filterCondition))
        {
            filterCondition = filterCondition.Substring(0, filterCondition.Length - 5);
            DataView dv = new DataView(dt, filterCondition, "itemCode", DataViewRowState.CurrentRows);
            gvCustAggr.DataSource = dv;
        }
        else
            gvCustAggr.DataSource = dt;
        gvCustAggr.DataBind();
    }

    protected void gvCustAggr_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Cells[0].Style["text-align"] = "center";
            e.Row.Cells[4].Style["text-align"] = "right";
            e.Row.Cells[5].Style["text-align"] = "right";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            if (Session["SortDir_Cust"] != null && Session["Control_Cust"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_Cust"].ToString());
                if (Session["SortDir_Cust"].ToString() == "Asc")
                    sortLink.Text += "<img src='../images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='../images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_Cust"] = lnk.ID;

        if (Session["SortDir_Cust"] == null || Session["SortDir_Cust"].ToString() == "Desc")
            Session["SortDir_Cust"] = "Asc";
        else
            Session["SortDir_Cust"] = "Desc";

        Session["SortExpr_Cust"] = e.CommandArgument;
        LoadAgreementsGrid();
    }

    protected void btnReload_Click(object sender, EventArgs e)
    {
        dvMainMsg.InnerHtml = string.Empty;
        Session.Remove("CustAgreements");
        LoadAgreementsGrid();
    }

    protected void btnAddTrans_Click(object sender, EventArgs e)
    {
        gvItemAssts.DataSource = null;
        gvItemAssts.DataBind();
        LoadAgreementForAutoPopulate();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "animateDiv('#" + dvAggrDetails.ClientID + "', '" + dvAggrDetails.ClientID + "', '" + dvAggrMsg.ClientID + "')", true);
    }

    private string ConvertDataTableToJSON(DataTable dt)
    {
        string str = string.Empty;
        str += "[";
        for (int i = 0; i < dt.Rows.Count; i++)//Rows
        {
            str += "{";
            for (int j = 0; j < dt.Columns.Count; j++)//Columns
                str += dt.Columns[j].ColumnName.ToString() + ":" + "'" + dt.Rows[i][j].ToString() + "', ";
            str = str.Substring(0, str.Length - 2) + "}, ";
        }
        return str.Substring(0, str.Length - 2) + "]";
    }

    private int GetCustID(int agrId)
    {
        DataTable dt = (DataTable)Session["CustAgreements"];
        DataView dv = new DataView(dt, "agreementID = " + agrId, "agreementID", DataViewRowState.CurrentRows);
        return ut.NullSafeInteger(dv.ToTable().Rows[0]["customerID"]);
    }

    private string GetCustName(int custId)
    {
        string custName = string.Empty;
        DataTable dt = (DataTable)Session["Customers"];
        DataView dv = new DataView(dt, "orgId = " + custId, "orgId", DataViewRowState.CurrentRows);
        custName = dv.ToTable().Rows[0]["orgName"].ToString();
        return custName;
    }

    #endregion

    #region Edit Agreement

    protected void lnkEditAgreement_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnCustID = (HiddenField)row.FindControl("hdnCustID");
        Label lblAgrCode = (Label)row.FindControl("lblAgrCode");
        DataTable dt = (DataTable)Session["CustAgreements"];
        DataView dv = new DataView(dt, "agrmntCode = '" + lblAgrCode.Text + "'", "agrmntCode", DataViewRowState.CurrentRows);
        txtAggr.Text = dv.ToTable().Rows[0]["agrmntCode"].ToString() + "--" + dv.ToTable().Rows[0]["agrmntDescr"].ToString();
        gvItemAssts.DataSource = dv;
        gvItemAssts.DataBind();

        foreach (GridViewRow itemRow in gvItemAssts.Rows)
        {
            TextBox txtEditItem = (TextBox)itemRow.FindControl("txtEditItem");
            Label lblListPrice = (Label)itemRow.FindControl("lblListPrice");
            Label lblOurPrice = (Label)itemRow.FindControl("lblOurPrice");
            HiddenField hdnListPrice = (HiddenField)itemRow.FindControl("hdnListPrice");
            HiddenField hdnOurPrice = (HiddenField)itemRow.FindControl("hdnOurPrice");

            txtEditItem.Text = dv.ToTable().Rows[itemRow.RowIndex]["itemCode"].ToString() + "--" + dv.ToTable().Rows[itemRow.RowIndex]["itemDescr"].ToString();
            lblListPrice.Text = hdnListPrice.Value = dv.ToTable().Rows[itemRow.RowIndex]["listPrice"].ToString();
            lblOurPrice.Text = hdnOurPrice.Value = dv.ToTable().Rows[itemRow.RowIndex]["ourPrice"].ToString();
        }
        LoadAgreementForAutoPopulate();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "animateDiv('#" + dvAggrDetails.ClientID + "', '" + dvAggrDetails.ClientID + "', '" + dvAggrMsg.ClientID + "')", true);
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        DataTable dt = new DataTable();
        dt = AddColumns(dt);
        SetInitialData(dt);
        DataRow dr = dt.NewRow();
        dt.Rows.Add(AddEmptyRow(dr));
        gvItemAssts.DataSource = dt;
        gvItemAssts.DataBind();
        SetPreviousData(dt);
        dvAggrDetails.Style["display"] = "block";
        btnSaveTrans.Visible = true;
    }

    private DataTable AddColumns(DataTable dt)
    {
        dt.Columns.Add("vendItem");
        dt.Columns.Add("listPrice");
        dt.Columns.Add("ourPrice");
        //dt.Columns.Add("status");
        return dt;
    }

    private DataRow AddEmptyRow(DataRow dr)
    {
        dr["vendItem"] = dr["listPrice"] = dr["ourPrice"] = string.Empty;
        return dr;
    }

    private void SetInitialData(DataTable dt)
    {
        DataRow dr;
        for (int i = 0; i < gvItemAssts.Rows.Count; i++)
        {
            TextBox txtEditItem = (TextBox)gvItemAssts.Rows[i].FindControl("txtEditItem");
            //Label txtListPrice = (Label)gvItemAssts.Rows[i].FindControl("lblListPrice");
            //Label txtOurPrice = (Label)gvItemAssts.Rows[i].FindControl("lblOurPrice");
            HiddenField hdnListPrice = (HiddenField)gvItemAssts.Rows[i].FindControl("hdnListPrice");
            HiddenField hdnOurPrice = (HiddenField)gvItemAssts.Rows[i].FindControl("hdnOurPrice");

            dr = dt.NewRow();
            dr["vendItem"] = txtEditItem.Text;
            dr["listPrice"] = hdnListPrice.Value;
            dr["ourPrice"] = hdnOurPrice.Value;
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        gvItemAssts.DataSource = dt;
    }

    private void SetPreviousData(DataTable dt)
    {
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                TextBox txtEditItem = (TextBox)gvItemAssts.Rows[i].FindControl("txtEditItem");
                Label txtListPrice = (Label)gvItemAssts.Rows[i].FindControl("lblListPrice");
                Label txtOurPrice = (Label)gvItemAssts.Rows[i].FindControl("lblOurPrice");
                HiddenField hdnListPrice = (HiddenField)gvItemAssts.Rows[i].FindControl("hdnListPrice");
                HiddenField hdnOurPrice = (HiddenField)gvItemAssts.Rows[i].FindControl("hdnOurPrice");
                txtEditItem.Text = dt.Rows[i]["vendItem"].ToString();
                txtListPrice.Text = dt.Rows[i]["listPrice"].ToString();
                txtOurPrice.Text = dt.Rows[i]["ourPrice"].ToString();
                hdnListPrice.Value = dt.Rows[i]["listPrice"].ToString();
                hdnOurPrice.Value = dt.Rows[i]["ourPrice"].ToString();
            }
        }
    }

    protected void btnDel_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((Button)sender).Parent.Parent;
        DataTable dt = new DataTable();
        dt = AddColumns(dt);
        SetInitialData(dt);
        dt.Rows.RemoveAt(row.RowIndex);
        dt.AcceptChanges();
        gvItemAssts.DataSource = dt;
        gvItemAssts.DataBind();
        SetPreviousData(dt);
        dvAggrDetails.Style["display"] = "block";
        if (gvItemAssts.Rows.Count == 0)
            btnSaveTrans.Visible = false;
    }

    protected void gvItemAssts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            TextBox txtEditItem = (TextBox)e.Row.FindControl("txtEditItem");
            Label lblListPrice = (Label)e.Row.FindControl("lblListPrice");
            Label lblOurPrice = (Label)e.Row.FindControl("lblOurPrice");
            HiddenField hdnListPrice = (HiddenField)e.Row.FindControl("hdnListPrice");
            HiddenField hdnOurPrice = (HiddenField)e.Row.FindControl("hdnOurPrice");
            txtEditItem.Attributes.Add("onchange", "javascript:return calcOurPriceInit('" + txtEditItem.ClientID + "', '" + lblListPrice.ClientID + "', '" + lblOurPrice.ClientID + "', '" + hdnListPrice.ClientID + "', '" + hdnOurPrice.ClientID + "');");
            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "right";
            e.Row.Cells[2].Style["text-align"] = "right";
            e.Row.Cells[3].Style["text-align"] = "center";
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            e.Row.Cells[0].Style["text-align"] = "left";
            e.Row.Cells[1].Style["text-align"] = "right";
            e.Row.Cells[2].Style["text-align"] = "right";
            e.Row.Cells[3].Style["text-align"] = "center";
        }
    }

    protected void btnSaveTrans_Click(object sender, EventArgs e)
    {
        string agreementID, agrmntCode, ourPrice, userID, vendItemID, customerID;
        agreementID = agrmntCode = ourPrice = userID = vendItemID = customerID = string.Empty;
        string appString = "###";
        int itemId = 0, agrId = 0, custId = 0;
        agrId = GetAgreementId(txtAggr.Text.Trim());
        custId = GetCustID(agrId);
        foreach (GridViewRow row in gvItemAssts.Rows)
        {
            TextBox txtEditItem = (TextBox)row.FindControl("txtEditItem");
            Label txtListPrice = (Label)row.FindControl("lblListPrice");
            Label txtOurPrice = (Label)row.FindControl("lblOurPrice");
            HiddenField hdnListPrice = (HiddenField)row.FindControl("hdnListPrice");
            HiddenField hdnOurPrice = (HiddenField)row.FindControl("hdnOurPrice");
            if (!string.IsNullOrEmpty(txtEditItem.Text))
            {
                itemId = GetItemID(txtEditItem.Text.Trim().Split(new string[] { "--" }, StringSplitOptions.None)[0]);
                agreementID += agrId + appString;
                agrmntCode += txtAggr.Text.Trim() + appString;
                ourPrice += hdnOurPrice.Value.Trim() + appString;
                userID += Session["VendBillID"].ToString() + appString;
                vendItemID += itemId + appString;
                customerID += custId + appString;
            }
        }

        AgrmntTransactionMulVO agr = new AgrmntTransactionMulVO();
        agr.agreementID = agreementID.Substring(0, agreementID.Length - 3);
        agr.agrmntCode = agrmntCode.Substring(0, agrmntCode.Length - 3);
        agr.ourPrice = ourPrice.Substring(0, ourPrice.Length - 3);
        agr.userID = userID.Substring(0, userID.Length - 3);
        agr.vendItemID = vendItemID.Substring(0, vendItemID.Length - 3);
        agr.customerID = customerID.Substring(0, customerID.Length - 3);
        string retStr = xms.addAgrmentTransactionMul(agr);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg("Green", retStr);
            Session.Remove("CustAgreements");
            LoadAgreementsGrid();
            ScriptManager.RegisterStartupScript(this, this.GetType(), "test", "clearFields('" + dvAggrDetails.ClientID + "', '#" + dvAggrGrid.ClientID + "')", true);
        }
        else
        {
            DisplayMsg("Green", retStr);
            dvAggrDetails.Style["display"] = "block";
        }
    }

    private void DisplayMsg(string color, string msg)
    {
        dvMainMsg.InnerHtml = msg;
        dvMainMsg.Style["color"] = color;
    }

    private int GetItemID(string itemCode)
    {
        DataTable dt = (DataTable)Session["Items"];
        DataView dv = new DataView(dt, "itemCode = '" + itemCode + "'", "itemCode", DataViewRowState.CurrentRows);
        return ut.NullSafeInteger(dv.ToTable().Rows[0]["itemID"]);
    }

    private int GetAgreementId(string agrCode)
    {
        int agrId = 0;
        DataTable dt = (DataTable)Session["Agreements"];
        DataView dv = new DataView(dt, "agreementCode = '" + agrCode + "'", "agreementCode", DataViewRowState.CurrentRows);
        agrId = ut.NullSafeInteger(dv.ToTable().Rows[0]["agreementID"]);
        return agrId;
    }

    #endregion

    #region Web Methods

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetItems(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Items"];
        DataTable dtTemp = dt.DefaultView.ToTable(true, "itemCode", "itemDescr");
        DataView dv = new DataView(dtTemp, "itemCode LIKE '%" + prefixText + "%' OR itemDescr LIKE '%" + prefixText + "%'", "itemDescr", DataViewRowState.CurrentRows);
        string[] items = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            items[i] = dv.ToTable().Rows[i]["itemCode"].ToString() + "--" + dv.ToTable().Rows[i]["itemDescr"].ToString();
        return items;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetAgreements(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Agreements"];
        DataTable dtTemp = dt.DefaultView.ToTable(true, "agreementCode", "agreementDescr");
        DataView dv = new DataView(dtTemp, "agreementCode LIKE '%" + prefixText + "%' OR agreementDescr LIKE '%" + prefixText + "%'", "agreementDescr", DataViewRowState.CurrentRows);
        string[] agrCodes = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            agrCodes[i] = dv.ToTable().Rows[i]["agreementCode"].ToString() + "--" + dv.ToTable().Rows[i]["agreementDescr"].ToString();
        return agrCodes;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetCustomers(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Customers"];
        DataView dv = new DataView(dt, "orgname LIKE '%" + prefixText + "%'", "orgname", DataViewRowState.CurrentRows);
        string[] cust = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            cust[i] = dv.ToTable().Rows[i]["orgname"].ToString();
        return cust;
    }

    [System.Web.Services.WebMethodAttribute(), System.Web.Script.Services.ScriptMethod()]
    public static string[] GetAgreementsNotAssigned(string prefixText, int count, string contextKey)
    {
        DataTable dt = (DataTable)HttpContext.Current.Session["Agreements"];
        DataTable dtCust = (DataTable)HttpContext.Current.Session["CustAgreements"];
        DataTable dtAgr = dt.Clone();
        string[] arrAgr = dtCust.AsEnumerable().Select(r => r.Field<string>("agrmntCode")).ToArray();
        //AgrmntTransactionVO a = new AgrmntTransactionVO();
        //a.agrmntCode
        //a.agrmntDescr
        for (int i = 0; i < dt.Rows.Count; i++)
            if (!arrAgr.Contains(dt.Rows[i]["agreementCode"].ToString()))
                dtAgr.ImportRow(dt.Rows[i]);


        DataTable dtTemp = dtAgr.DefaultView.ToTable(true, "agreementCode", "agreementDescr");
        DataView dv = new DataView(dtTemp, "agreementCode LIKE '%" + prefixText + "%' OR agreementDescr LIKE '%" + prefixText + "%'", "agreementDescr", DataViewRowState.CurrentRows);
        string[] agrCodes = new string[dv.ToTable().Rows.Count];
        for (int i = 0; i < dv.ToTable().Rows.Count; i++)
            agrCodes[i] = dv.ToTable().Rows[i]["agreementCode"].ToString() + "--" + dv.ToTable().Rows[i]["agreementDescr"].ToString();
        return agrCodes;
    }

    #endregion
}