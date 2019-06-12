using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.UI.HtmlControls;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.IO;
using System.Data.OleDb;

public partial class POGen : System.Web.UI.Page
{
    #region public variables

    public char currencySymbol;
    public int copyDesc = 0;

    #endregion

    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private string expItem, accCode, qnty, pkgUnit, unitPrice, amnt, descr, billTo, startDate, expLineNo, sts, stsId, masterFlag, detailsFlag, orgId, compCode, userId, reqId,
    expDate, cVstd, eType, jCode, pCode, jcCode, prpse, preAmnt, currency, mgrID, payMode, preAppr, oCity, autoFlg, fCity, tcity, agName, itNo, bkDate, fDate, tDate, reimbt, lNorm, tTrip,
    oFCity, oTCity, cCar, oPlace, outOfCity, shipCost, balAfterPo, taxAmount1, taxAmount2, taxAmount3, reimburse, taxCalCulated, vendPtNo, lineNo, lineSeq, csUserId, taxPercent,
    mgrGroupCode, deptCode, deptChgCmt, itemCode, discFlg, discPrcnt, linePromoCode, reqDelDate, onBehalfOf, lastUpdatedSource, qbAcctId, qbVendId, qbItemId, className, classRefId, sendToQB, priceFlag;
    DataSet dsFiscalDate = new DataSet();
    DataTable dtPO = new DataTable();
    DataTable dtCopyPO = new DataTable();
    string tripMonth = string.Empty;
    DataRow drPO;
    private bool _refreshExp = false;
    string newPath = ("ERTemp");
    #endregion

    #region NewPO

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");

            if (!IsPostBack)
            {
                int reqId = 0;
                if (Session["NewReqID"] == null)
                {
                    string strReq = xms.getCodes(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), "SEQ");
                    List<CodeValueVO> lstReq = ser.Deserialize<List<CodeValueVO>>(strReq);
                    DataSet dsReq = new DataSet();
                    dsReq.Tables.Add(Utility.ConvertToDataTable(lstReq));
                    reqId = ut.NullSafeInteger(dsReq.Tables[0].Rows[0]["CodeValue1"]);
                    Session["NewReqID"] = reqId;
                }
                else
                    reqId = ut.NullSafeInteger(Session["NewReqID"]);
                lblPONo.Text = reqId.ToString();
                BindExpProcessTypes();
                BindPrefVendors();
                BindManagers();
                Session.Remove("TSJobsList");
                BindJobs();
                hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");
                txtPOTripStrtDate.Text = hdCurrDate.Value;
                btnAddPO.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                btnSavePOItem.Attributes.Add("onclick", "javascript:return ValidateNewPO();");
                btnSave.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                btnHSave.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                btnSubmit.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                btnHSubmit.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                btnUploadPOLines.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
                GetShippingAddress();
                GetBillingAddress();
                btnAttach.Text = "   Attachments(0)";
                Session.Remove("dtPO");
                Session.Remove("dtExpItem");
                Session.Remove("fStream");
                Session.Remove("FileExt");
                Session.Remove("RctFileName");
                //Session.Remove("PreferredVendorList");
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    private void GetShippingAddress()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            lblShipAddr.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipCompName.Text = dv.ToTable().Rows[0]["CompName"].ToString();
            lblShipAddr1.Text = dv.ToTable().Rows[0]["Address1"].ToString();
            lblShipAddr2.Text = dv.ToTable().Rows[0]["Address2"].ToString();
            lblShipCity.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipState.Text = dv.ToTable().Rows[0]["State"].ToString();
            lblShipCountry.Text = dv.ToTable().Rows[0]["CountryCode"].ToString();
            lblShipZipCode.Text = dv.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void GetBillingAddress()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        DataView dvBillComp = new DataView(dsCompCode.Tables[0], "CompCode = '" + dv.ToTable().Rows[0]["billToCompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dvBillComp.ToTable().Rows.Count > 0)
        {
            lblBillAddr.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillCompName.Text = dvBillComp.ToTable().Rows[0]["CompName"].ToString();
            lblBillAddr1.Text = dvBillComp.ToTable().Rows[0]["Address1"].ToString();
            lblBillAddr2.Text = dvBillComp.ToTable().Rows[0]["Address2"].ToString();
            lblBillCity.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillState.Text = dvBillComp.ToTable().Rows[0]["State"].ToString();
            lblBillCountry.Text = dvBillComp.ToTable().Rows[0]["CountryCode"].ToString();
            lblBillZipCode.Text = dvBillComp.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void BindExpProcessTypes()
    {
        DataTable dt;
        if (Session["ORGEXPTYPELIST"] == null)
        {
            DataView view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'ORGEXPTYPELIST'", "CodeID", DataViewRowState.CurrentRows);
            dt = view.ToTable();
            Session["ORGEXPTYPELIST"] = dt;
        }
        else
            dt = (DataTable)Session["ORGEXPTYPELIST"];

        ddlType.DataSource = dt;
        ddlType.DataTextField = "Description";
        ddlType.DataValueField = "CodeKey";
        ddlType.DataBind();
        ddlType.SelectedValue = "PO";
    }

    private void BindExpenseItems(int type)
    {
        DataTable dt = new DataTable();
        DataTable dtv = new DataTable();
        string deptCode = string.Empty;
        //dept = ddlDepartment.SelectedValue;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = ddlDepartment.SelectedValue;
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = string.Empty;
        if (Session["dtExpItem"] == null)
        {
            string str = string.Empty;
            str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), deptCode, 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);

            dt = Utility.ConvertToDataTable(lst);
            DataView dtview = new DataView(dt);
            dtv = dtview.ToTable();

            //add new column containing account number and account name seperated with --
            if (!dtv.Columns.Contains("AcountClss"))
                dtv.Columns.Add("AcountClss");

            for (int i = 0; i < dtv.Rows.Count; i++)
                dtv.Rows[i]["AcountClss"] = dtv.Rows[i]["acctLongCode"].ToString() + "--" + dtv.Rows[i]["accName"].ToString();
            //add new column containing account number and account name seperated with --

            Session["dtExpItem"] = GetHierarchicalData(dtv, "AcountClss");
        }
    }

    private void BindPrefVendors()
    {
        DataTable dt;
        if (Session["PreferredVendorList"] == null)
        {
            string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["PreferredVendorList"] = dt;
        }
        else
            dt = (DataTable)Session["PreferredVendorList"];

        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlBillTo.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlBillTo.DataBind();
        ddlBillTo.Items.Insert(0, "Please Select");
        ddlBillTo.Items.FindByText("Please Select").Value = "0";
    }

    private void BindJobs()
    {
        DataTable dt = new DataTable();
        if (Session["TSJobsList"] == null)
        {
            string str = xms.getTSJobs(ut.NullSafeInteger(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSJobsList"] = dt;
        }
        else
            dt = (DataTable)Session["TSJobsList"];
        ddlJobs.DataSource = dt;
        ddlJobs.DataTextField = "JobName";
        ddlJobs.DataValueField = "jobCode";
        ddlJobs.DataBind();
        ddlJobs.Items.Insert(0, "Please Select");
        ddlJobs.Items.FindByText("Please Select").Value = "0";
    }

    private void BindGridData()
    {
        dtPO = (DataTable)Session["dtPO"];
        gvPOrder.DataSource = dtPO;
        gvPOrder.DataBind();
    }

    private void BindManagers()
    {
        DataTable dtManager = new DataTable();
        if (Session["Managers"] == null)
        {
            string str = xms.getManagers(Convert.ToInt32(Session["UserID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
            List<UserVO> lst = ser.Deserialize<List<UserVO>>(str);
            dtManager = Utility.ConvertToDataTable(lst);
            Session["Managers"] = dtManager;
        }
        else
            dtManager = (DataTable)Session["Managers"];
        ddlManagerEmail.DataSource = dtManager;
        ddlManagerEmail.DataTextField = "Email";
        ddlManagerEmail.DataValueField = "UserID";
        ddlManagerEmail.DataBind();
        ddlManagerEmail.SelectedValue = Session["ManagerID"].ToString();
    }

    private void BindDepartments(DropDownList ddl, int type)
    {
        //Bind Departments
        DataTable dt = new DataTable();
        if (Session["DeptCodes"] == null)
        {
            string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["DeptCodes"] = dt;
        }
        else
            dt = (DataTable)Session["DeptCodes"];
        if (type == 1)
        {
            ddl.DataSource = dt;
            ddl.DataBind();
            //ddl.Items.Insert(0, "All");
            //ddl.Items.FindByText("All").Value = "0";
        }
    }

    private void BindPriceFlag()
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'PRICINGFLAG'";
        DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        ddlPriceFlag.DataSource = dv;
        ddlPriceFlag.DataTextField = "Description";
        ddlPriceFlag.DataValueField = "CodeKey";
        ddlPriceFlag.DataBind();
    }

    protected void AddNewPurchaseOrder(object sender, EventArgs e)
    {
        dvError.InnerHtml = string.Empty;
        dvPOErrMsg.InnerHtml = string.Empty;

        //load departments and accounts according to the job selected
        if (ddlJobs.SelectedValue != "0")
            LoadDetailsByJob(false);
        else
        {
            BindDepartments(ddlDepartment, 1);
            ddlDepartment.SelectedValue = Session["DepartmentCode"].ToString();
            if (Session["dtExpItem"] == null)
                BindExpenseItems(1);
            DataTable dt = (DataTable)Session["dtExpItem"];

            ddlExpItem.DataSource = dt.DefaultView.ToTable(true, "AcountClss", "accName");
            ddlExpItem.DataBind();
            ddlExpItem.Items.Insert(0, "Please Select");
            ddlExpItem.Items.FindByText("Please Select").Value = "0";
            ddlItemCode.Items.Clear();
        }
        txtchangeComnts.Text = string.Empty;
        dvCommts.Style["display"] = "none";
        lblHeading.Text = "Add PO Details";
        btnSavePOItem.Visible = false;
        btnAppend.Visible = true;
        btnAppend.Attributes.Add("onclick", "javascript:return ValidateNewPO();");
        btnAddPO.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
        MakeCalcFieldsReadOnly();
        ClearFields();
        txtPkgUnit.Text = "EACH";
        txtQuantity.Text = "1";
        chkDisc.Checked = true;
        txtDisc.Text = hdnVendDiscount.Value;
        txtLinePromoCode.Text = hdnVendPromoCode.Value;
        chkCalTax.Checked = true;
        txtTaxPercent.Text = Session["Tax"].ToString();
        txttax.Text = ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(Session["Tax"])) / 100)).ToString("#.##");
        hdnTax.Value = txtTaxPercent.Text;
        txttax.ReadOnly = true;
        hdnIsPOEdit.Value = "false";
        lnkAgreement.Style["display"] = "none";
        Session.Remove("Edit");
        BindPriceFlag();
        ddlPriceFlag.SelectedValue = "MN";
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;
        hdnYear.Value = year.ToString();
        tripMonth = MonthFilter(year);
        hdnAgreementCnt.Value = "0";

        //get qb vendor id
        DataTable dtVend = (DataTable)Session["PreferredVendorList"];
        DataView dv = new DataView(dtVend, "PreferredVendor = '" + ddlBillTo.SelectedValue.Replace("'", "''") + "'", "PreferredVendor", DataViewRowState.CurrentRows);
        hdnQBVendID.Value = dv.ToTable().Rows[0]["qbVendId"].ToString();
        //get qb vendor id

        if (tripMonth != "" || tripMonth != string.Empty)
            popAddPO.Show();
        else
        {
            dvError.InnerHtml = "Please check current fiscal calendar or contact your administrator.";
            dvError.Style["color"] = "Red";
        }
        lnkShowItemInventory.Style["display"] = "none";
    }

    private void LoadDetailsByJob(bool deptLoaded)
    {
        string str = xms.getJobDetail(ddlJobs.SelectedValue, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
        DataTable dtJobs = Utility.ConvertToDataTable(lst);

        if (!deptLoaded)
        {
            //Load departments
            DataView dvDept = dtJobs.DefaultView;
            dvDept = dvDept.ToTable(true, "DeptCode").DefaultView;

            BindDepartments(ddlDepartment, 0);
            DataTable dt = (DataTable)Session["DeptCodes"];
            DataTable dtDept = dt.Clone();
            string[] arrDept = dvDept.ToTable().AsEnumerable().Select(r => r.Field<string>("DeptCode")).ToArray();

            for (int i = 0; i < dt.Rows.Count; i++)
                if (arrDept.Contains(dt.Rows[i]["CodeKey"].ToString()))
                    dtDept.ImportRow(dt.Rows[i]);

            ddlDepartment.DataSource = dtDept;
            ddlDepartment.DataBind();
            try
            {
                ddlDepartment.SelectedValue = Session["DepartmentCode"].ToString();
            }
            catch
            {
            }
        }
        //load accounts
        if (Session["dtExpItem"] == null)
            BindExpenseItems(1);
        DataTable dtBdgClss = (DataTable)Session["dtExpItem"];
        DataTable dtCloneBdgClss = dtBdgClss.Clone();
        string[] arrAcc = dtJobs.AsEnumerable().Select(r => r.Field<string>("AccountCode")).ToArray();
        for (int i = 0; i < dtBdgClss.Rows.Count; i++)
            if (arrAcc.Contains(dtBdgClss.Rows[i]["AccountCode"]))
                dtCloneBdgClss.ImportRow(dtBdgClss.Rows[i]);
        ddlExpItem.DataSource = dtCloneBdgClss.DefaultView.ToTable(true, "AcountClss", "accName");
        ddlExpItem.DataBind();
        ddlExpItem.Items.Insert(0, "Please Select");
        ddlExpItem.Items.FindByText("Please Select").Value = "0";
        ddlItemCode.Items.Clear();
    }

    private string MonthFilter(int year)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDate"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth;
    }

    protected void gvPOrder_PageIndexChanging(object sender, GridViewPageEventArgs e)
    { }

    protected void gvPOrder_RowEditing(object sender, GridViewEditEventArgs e)
    { }

    protected void gvPOrder_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblPOAccCode = (Label)e.Row.FindControl("lblPOAccCode");
            DataTable dsPO = new DataTable();
            dsPO = (DataTable)Session["dtPO"];

            if (hdnIsCopy.Value == "1")
            {
                DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
                int year = dateTime.Year;

                if (hdnYear.Value != year.ToString())
                    MonthFilter(year);
                else
                {
                    dsFiscalDate = (DataSet)Session["FiscalDate"];
                    if (dsFiscalDate.Tables[0].Rows.Count > 0)
                    {
                        for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                        {
                            if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                            {
                                tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                                break;
                            }
                        }
                    }
                    else
                        dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
                }

                POBudgetVO budget = new POBudgetVO();
                budget.accountCode = dsPO.Rows[e.Row.RowIndex]["accountCode"].ToString();
                budget.compCode = Session["CompCOde"].ToString();
                budget.deptCode = Session["DepartmentCode"].ToString();
                budget.orgId = Convert.ToInt32(Session["OrgID"]);
                budget.year = year;
                budget.month = tripMonth;

                var str = xms.getDeptBudgetDetails(budget);
                List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
                DataSet dsSt = new DataSet();
                dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

                string expression = "accountCode = '" + dsPO.Rows[e.Row.RowIndex]["accountCode"].ToString() + "'";
                DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
                DataTable dtAcccode = accCodes.ToTable();

                if (!dsPO.Columns.Contains("budget"))
                    dsPO.Columns.Add("budget");
                if (!dsPO.Columns.Contains("currentBalance"))
                    dsPO.Columns.Add("currentBalance");
                if (!dsPO.Columns.Contains("remaining"))
                    dsPO.Columns.Add("remaining");

                dsPO.Rows[e.Row.RowIndex]["budget"] = dtAcccode.Rows[0]["budget"].ToString();
                dsPO.Rows[e.Row.RowIndex]["currentBalance"] = dtAcccode.Rows[0]["currentBalance"].ToString();
                dsPO.Rows[e.Row.RowIndex]["remaining"] = dtAcccode.Rows[0]["remaining"].ToString();
                Session["dtPO"] = dsPO;
                //hdnCopyBud.Value = dtAcccode.Rows[0]["budget"].ToString();
                //hdnCopyCurrBal.Value = dtAcccode.Rows[0]["currentBalance"].ToString();
                //hdnCopyRemain.Value = dtAcccode.Rows[0]["remaining"].ToString();
            }
            if (dsPO.Rows[e.Row.RowIndex]["balAfterPO"].ToString().Contains("-"))
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvPOrder_RowCommand(object sender, GridViewCommandEventArgs e)
    { }

    protected void gvPOrder_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        hdnRowIndex.Value = e.RowIndex.ToString();
        popAlert.Show();
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (hdnYear.Value != year.ToString())
            MonthFilter(year);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }
        if (tripMonth != "" || tripMonth != string.Empty)
        {
            if (ValidateBelowToleranceAmount())
            {
                dtPO = (DataTable)Session["dtPO"];

                if (ut.NullSafeDouble(dtPO.Rows[dtPO.Rows.Count - 1]["balAfterPO"]) <= 0)
                    Save(string.Empty, 0);
                else
                {
                    DataTable dtCodes = (DataTable)Session["dsCodes"];
                    string expr = "CodeID = 'STATUS' and CodeKey = 'APPR'";
                    DataView dv = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
                    Save(dv.ToTable().Rows[0]["Description"].ToString(), ut.NullSafeInteger(dv.ToTable().Rows[0]["CodeValue1"].ToString()));
                }
            }
            else
                Save(string.Empty, 0);
        }
        else
            dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (hdnYear.Value != year.ToString())
            MonthFilter(year);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                }
            }
            else
                dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        if (tripMonth != "" || tripMonth != string.Empty)
            Save("Saved", 3);
        else
            dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ddlType.Enabled = true;
        ddlType.SelectedValue = "PO";
        txtPOTripStrtDate.Text = System.DateTime.Now.ToString("MM/dd/yyyy");
        ddlBillTo.SelectedValue = "0";
        txtPurpose.Text = string.Empty;
        //  ClearFields();
        gvPOrder.DataBind();
        btnSubmit.Visible = false;
        btnSave.Visible = false;
        btnHSubmit.Visible = false;
        btnHSave.Visible = false;
        Session.Remove("dtPO");
        Session.Remove("Edit");
    }

    protected void ddlExpItem_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlExpItem.SelectedValue != "0")
        {
            BindItemsCode();
            DataTable dt = (DataTable)Session["dtExpItem"];
            string expr = "accName = '" + ddlExpItem.SelectedValue + "'";
            DataView view = new DataView(dt, expr, "accName", DataViewRowState.CurrentRows);
            txtAccCode.Text = view.ToTable().Rows[0]["accountCode"].ToString();
            hdnQBAcctID.Value = view.ToTable().Rows[0]["qbAccID"].ToString();

            //Find fiscal month from the given start date
            DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
            int year = dateTime.Year;
            if (hdnYear.Value != year.ToString())
                MonthFilter(year);
            else
            {
                dsFiscalDate = (DataSet)Session["FiscalDate"];
                if (dsFiscalDate.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                    {
                        if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                        {
                            tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                            break;
                        }
                    }
                }
                else
                    dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
            }
            //Find fiscal month from the given start date

            //Fetch budget details by selected classification
            POBudgetVO budget = new POBudgetVO();
            budget.accountCode = txtAccCode.Text;
            budget.compCode = Session["CompCode"].ToString();
            budget.deptCode = ddlDepartment.SelectedValue;
            budget.orgId = Convert.ToInt32(Session["OrgID"]);
            budget.year = year;
            budget.month = tripMonth;
            var str = xms.getDeptBudgetDetails(budget);
            List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
            DataSet dsSt = new DataSet();
            dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
            Session["BudgetData"] = dsSt.Tables[0];

            string expression = "accountCode = '" + txtAccCode.Text + "'";
            DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
            DataTable dtAcccode = accCodes.ToTable();
            if (dtAcccode.Rows.Count == 0 || ut.NullSafeDouble(dtAcccode.Rows[0]["budget"].ToString()) == 0)
            {
                txtBudget.Text = txtCurrBal.Text = txtRemain.Text = txtBalAfterPO.Text = string.Empty;
                dvPOErrMsg.Style["color"] = "Red";
                dvPOErrMsg.InnerHtml = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
            }
            else
            {
                dvPOErrMsg.InnerHtml = string.Empty;
                txtBudget.Text = dtAcccode.Rows[0]["budget"].ToString();
                txtCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
                txtRemain.Text = dtAcccode.Rows[0]["remaining"].ToString();

                //Calculate Amount/BalAfterPO
                double allRowsAmntVal = 0;
                foreach (GridViewRow row1 in gvPOrder.Rows)
                {
                    Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                    Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
                    if (lblPOAccCode.Text == txtAccCode.Text)
                        allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
                }
                hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
                Session["allRowsAmntVal"] = allRowsAmntVal;
                txtPoAmount.Text = "0";
                txtUnitPrice.Text = "0";
                txtShipCost.Text = "0";
                txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(txtPoAmount.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
                ddlItemCode.Focus();
            }
        }
        popAddPO.Show();
    }

    protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
        {
            Session.Remove("dtExpItem");
            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(true);
            else
            {
                var str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlDepartment.SelectedValue, 2, string.Empty);
                List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
                DataTable dt1 = Utility.ConvertToDataTable(lst);

                //add new column containing account number and account name seperated with --
                if (!dt1.Columns.Contains("AcountClss"))
                    dt1.Columns.Add("AcountClss");

                for (int i = 0; i < dt1.Rows.Count; i++)
                    dt1.Rows[i]["AcountClss"] = dt1.Rows[i]["acctLongCode"].ToString() + "--" + dt1.Rows[i]["accName"].ToString();
                //add new column containing account number and account name seperated with --

                Session["dtExpItem"] = GetHierarchicalData(dt1, "AcountClss");
                ddlExpItem.DataSource = dt1.DefaultView.ToTable(true, "AcountClss", "accName");
                ddlExpItem.DataBind();
                ddlExpItem.Items.Insert(0, "Please Select");
                ddlExpItem.Items.FindByText("Please Select").Value = "0";
            }
        }
        if (Session["DepartmentCode"].ToString() != ddlDepartment.SelectedValue)
            dvCommts.Style["display"] = "block";
        else
            dvCommts.Style["display"] = "none";
        popAddPO.Show();
    }

    private void BindItemsCode()
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        string exp = "accName='" + ddlExpItem.SelectedValue + "' and itemCode <> ''";
        DataView dt1 = new DataView(dt, exp, "accName", DataViewRowState.CurrentRows);
        ddlItemCode.DataSource = dt1;
        ddlItemCode.DataBind();
        ddlItemCode.Items.Insert(0, "Please Select");
        ddlItemCode.Items.FindByText("Please Select").Value = "0";
        Session["ItemCodes"] = dt1.ToTable();
    }

    protected void ddlItemCode_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlItemCode.SelectedValue != "0")
        {
            DataTable dt = (DataTable)Session["ItemCodes"];
            string exp = "ItemCode='" + ddlItemCode.SelectedValue + "'";
            DataView dvitems = new DataView(dt, exp, "ItemCode", DataViewRowState.CurrentRows);
            DataTable dtemp = dvitems.ToTable();
            txtDescr.Text = dtemp.Rows[0]["Description"].ToString();

            //Load selected item inventory details
            DataTable dtInv = GetItemInventoryDetails(ddlItemCode.SelectedValue);
            DataView dvInv = dtInv.DefaultView;
            gvItemInventory.DataSource = dvInv.ToTable(true, "locCode", "locName", "locAddress1");
            gvItemInventory.DataBind();
            lnkShowItemInventory.Style["display"] = "block";
            txtVendPtNo.Focus();
        }
        else if (ddlItemCode.SelectedValue == "0")
            lnkShowItemInventory.Style["display"] = "none";
        popAddPO.Show();
    }

    private void Save(string status, int statusId)
    {
        string appString = "###";
        AddExpensesVO addPO = new AddExpensesVO();
        dtPO = (DataTable)Session["dtPO"];
        int mFlag = 0;
        string uID = Session["UserID"].ToString();
        for (int i = 0; i < dtPO.Rows.Count; i++)
        {
            expItem += dtPO.Rows[i]["expItem"].ToString() + appString;
            accCode += dtPO.Rows[i]["accountCode"].ToString() + appString;
            qnty += dtPO.Rows[i]["quantity"].ToString() + appString;
            pkgUnit += dtPO.Rows[i]["packageUnit"].ToString() + appString;
            unitPrice += dtPO.Rows[i]["unitPrice"].ToString() + appString;
            preAmnt += dtPO.Rows[i]["preamount"].ToString() + appString;
            descr += (string.IsNullOrEmpty(dtPO.Rows[i]["comments"].ToString()) ? " " : dtPO.Rows[i]["comments"].ToString()) + appString;
            billTo += ddlBillTo.SelectedValue + appString;
            shipCost += dtPO.Rows[i]["shippingCost"].ToString() == string.Empty ? "0" + appString : dtPO.Rows[i]["shippingCost"].ToString() + appString;
            balAfterPo += dtPO.Rows[i]["balAfterPO"].ToString() + appString;
            taxAmount1 += dtPO.Rows[i]["taxAmount1"].ToString() == string.Empty ? "0" + appString : dtPO.Rows[i]["taxAmount1"].ToString() + appString;
            taxAmount2 += 0 + appString;
            taxAmount3 += 0 + appString;
            taxPercent += dtPO.Rows[i]["TaxPercent"].ToString() == string.Empty ? "0" + appString : dtPO.Rows[i]["TaxPercent"].ToString() + appString;
            taxCalCulated += (dtPO.Rows[i]["taxCalCulated"].ToString() == "True" ? 1 : 0) + appString;
            vendPtNo += dtPO.Rows[i]["VendPartNo"].ToString() == string.Empty ? " " + appString : dtPO.Rows[i]["VendPartNo"].ToString() + appString;
            mgrGroupCode += dtPO.Rows[i]["mgrGroupCode"].ToString() == string.Empty ? " " + appString : dtPO.Rows[i]["mgrGroupCode"].ToString() + appString;
            deptChgCmt += dtPO.Rows[i]["DeptChgCmt"].ToString() == string.Empty ? " " + appString : dtPO.Rows[i]["DeptChgCmt"].ToString() + appString;
            itemCode += dtPO.Rows[i]["ItemCode"].ToString() == string.Empty ? " " + appString : dtPO.Rows[i]["ItemCode"].ToString() + appString;
            deptCode += dtPO.Rows[i]["DeptCode"].ToString() + appString;
            reimburse += " " + appString;
            startDate += txtPOTripStrtDate.Text + appString;
            expLineNo += (i + 1) + appString;
            sts += (status == string.Empty ? " " : status) + appString;
            stsId += statusId.ToString() + appString;
            orgId += Session["OrgID"].ToString() + appString;
            compCode += Session["CompCode"].ToString() + appString;
            if (mFlag == 0)
            {
                masterFlag += 1 + appString;
                mFlag = 1;
            }
            else
                masterFlag += 0 + appString;
            detailsFlag += 1 + appString;
            userId += uID + appString;
            reqId += Convert.ToInt32(Session["NewReqID"]) + appString;
            expDate += " " + appString;
            cVstd += " " + appString;
            eType += " " + appString;
            jCode += (ddlJobs.SelectedValue == "0" ? " " : ddlJobs.SelectedValue) + appString;
            pCode += " " + appString;
            jcCode += " " + appString;
            prpse += txtPurpose.Text + appString;
            currency += " " + appString;
            amnt += 0 + appString;
            mgrID += Convert.ToInt32(ddlManagerEmail.SelectedValue) + appString;
            payMode += " " + appString;
            preAppr += 2 + appString;
            oCity += " " + appString;
            autoFlg += "1" + appString;
            fCity += " " + appString;
            tcity += " " + appString;
            agName += " " + appString;
            itNo += 0 + appString;
            bkDate += " " + appString;
            fDate += " " + appString;
            tDate += " " + appString;
            reimbt += 0 + appString;
            lNorm += 0 + appString;
            tTrip += 0 + appString;
            oFCity += " " + appString;
            oTCity += " " + appString;
            cCar += " " + appString;
            oPlace += " " + appString;
            outOfCity += " " + appString;
            lineSeq += 0 + appString;
            csUserId += 0 + appString;
            discFlg += (dtPO.Rows[i]["discountFlag"].ToString() == "True" ? "Y" : "N") + appString;
            discPrcnt += dtPO.Rows[i]["discount"].ToString() + appString;
            linePromoCode += (dtPO.Rows[i]["PromoCode"].ToString() == string.Empty ? " " : dtPO.Rows[i]["PromoCode"].ToString()) + appString;
            reqDelDate += (dtPO.Rows[i]["reqDeliveryDate"].ToString() == string.Empty ? " " : dtPO.Rows[i]["reqDeliveryDate"].ToString()) + appString;
            onBehalfOf += " " + appString;
            lastUpdatedSource += "Web" + appString;
            //qbAcctId += dtPO.Rows[i]["qbAcctId"].ToString() + appString;
            qbAcctId += (string.IsNullOrEmpty(dtPO.Rows[i]["qbAcctId"].ToString()) ? "0" : dtPO.Rows[i]["qbAcctId"].ToString()) + appString;
            qbVendId += dtPO.Rows[i]["qbVendId"].ToString() + appString;
            qbItemId += dtPO.Rows[i]["qbItemId"].ToString() + appString;
            priceFlag += dtPO.Rows[i]["priceFlag"].ToString() + appString;
            className += " " + appString;
            classRefId += "0" + appString;
            sendToQB += " " + appString;
        }
        addPO.expItem = expItem.Substring(0, expItem.Length - 3);
        addPO.accountCode = accCode.Substring(0, accCode.Length - 3);
        addPO.quantity = qnty.Substring(0, qnty.Length - 3);
        addPO.packageUnit = pkgUnit.Substring(0, pkgUnit.Length - 3);
        addPO.unitPrice = unitPrice.Substring(0, unitPrice.Length - 3);
        addPO.actualAmount = amnt.Substring(0, amnt.Length - 3);
        addPO.comments = descr.Substring(0, descr.Length - 3);
        addPO.startDate = startDate.Substring(0, startDate.Length - 3);
        addPO.preferredVendor = billTo.Substring(0, billTo.Length - 3);
        addPO.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
        addPO.expDate = expDate.Substring(0, expDate.Length - 3);
        addPO.citiesVstd = cVstd.Substring(0, cVstd.Length - 3);
        addPO.orgId = orgId.Substring(0, orgId.Length - 3);
        addPO.expType = eType.Substring(0, eType.Length - 3);
        addPO.jobCode = jCode.Substring(0, jCode.Length - 3);
        addPO.phaseCode = pCode.Substring(0, pCode.Length - 3);
        addPO.JCatCode = jcCode.Substring(0, jcCode.Length - 3);
        addPO.compCode = compCode.Substring(0, compCode.Length - 3);
        addPO.purpose = prpse.Substring(0, prpse.Length - 3);
        addPO.preAmount = preAmnt.Substring(0, preAmnt.Length - 3);
        addPO.currency = currency.Substring(0, currency.Length - 3);
        addPO.status = sts.Substring(0, sts.Length - 3);
        addPO.statusId = stsId.Substring(0, stsId.Length - 3);
        addPO.managerId = mgrID.Substring(0, mgrID.Length - 3);
        addPO.payMode = payMode.Substring(0, payMode.Length - 3);
        addPO.preApproved = preAppr.Substring(0, preAppr.Length - 3);
        addPO.othercity = oCity.Substring(0, oCity.Length - 3);
        addPO.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
        addPO.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
        addPO.automileageFlag = autoFlg.Substring(0, autoFlg.Length - 3);
        addPO.fromCity = fCity.Substring(0, fCity.Length - 3);
        addPO.toCity = tcity.Substring(0, tcity.Length - 3);
        addPO.agentName = agName.Substring(0, agName.Length - 3);
        addPO.itinararyNo = itNo.Substring(0, itNo.Length - 3);
        addPO.bookedDate = bkDate.Substring(0, bkDate.Length - 3);
        addPO.fromDate = fDate.Substring(0, fDate.Length - 3);
        addPO.toDate = tDate.Substring(0, tDate.Length - 3);
        addPO.reimbt = reimbt.Substring(0, reimbt.Length - 3);
        addPO.LNorm = lNorm.Substring(0, lNorm.Length - 3);
        addPO.totTrip = tTrip.Substring(0, tTrip.Length - 3);
        addPO.otherFromCity = oFCity.Substring(0, oFCity.Length - 3);
        addPO.otherToCity = oTCity.Substring(0, oTCity.Length - 3);
        addPO.userId = userId.Substring(0, userId.Length - 3);
        addPO.companyCar = cCar.Substring(0, cCar.Length - 3);
        addPO.otherPlace = oPlace.Substring(0, oPlace.Length - 3);
        addPO.outOfCity = outOfCity.Substring(0, outOfCity.Length - 3);
        addPO.reqId = reqId.Substring(0, reqId.Length - 3);
        addPO.shippingCost = shipCost.Substring(0, shipCost.Length - 3);
        addPO.balAfterPO = balAfterPo.Substring(0, balAfterPo.Length - 3);
        addPO.taxAmount1 = taxAmount1.Substring(0, taxAmount1.Length - 3);
        addPO.taxAmount2 = taxAmount2.Substring(0, taxAmount2.Length - 3);
        addPO.taxAmount3 = taxAmount3.Substring(0, taxAmount3.Length - 3);
        addPO.reimbursable = reimburse.Substring(0, reimburse.Length - 3);
        addPO.taxCalculated = taxCalCulated.Substring(0, taxCalCulated.Length - 3);
        addPO.vendPartno = vendPtNo.Substring(0, vendPtNo.Length - 3);
        addPO.polineseq = lineSeq.Substring(0, lineSeq.Length - 3);
        addPO.csuserid = csUserId.Substring(0, csUserId.Length - 3);
        addPO.taxPercent = taxPercent.Substring(0, taxPercent.Length - 3);
        addPO.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
        addPO.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        addPO.deptChgCmt = deptChgCmt.Substring(0, deptChgCmt.Length - 3);
        addPO.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        addPO.discountFlag = discFlg.Substring(0, discFlg.Length - 3);
        addPO.discount = discPrcnt.Substring(0, discPrcnt.Length - 3);
        addPO.promoCode = linePromoCode.Substring(0, linePromoCode.Length - 3);
        addPO.reqDeliveryDate = reqDelDate.Substring(0, reqDelDate.Length - 3);
        addPO.onBeHalfOf = onBehalfOf.Substring(0, onBehalfOf.Length - 3);
        addPO.lastUpdSource = lastUpdatedSource.Substring(0, lastUpdatedSource.Length - 3);
        addPO.qbAcctId = qbAcctId.Substring(0, qbAcctId.Length - 3);
        addPO.qbVendId = qbVendId.Substring(0, qbVendId.Length - 3);
        addPO.qbItemId = qbItemId.Substring(0, qbItemId.Length - 3);
        addPO.className = className.Substring(0, className.Length - 3);
        addPO.classRefId = classRefId.Substring(0, classRefId.Length - 3);
        addPO.sendtoqb = sendToQB.Substring(0, sendToQB.Length - 3);
        addPO.priceFlag = priceFlag.Substring(0, priceFlag.Length - 3);

        string retStr = xms.addExpense1(addPO);
        if (retStr.ToLower().Contains("succes"))
        {
            int ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            Session["FromSession"] = ddlTypeVar;
            Response.Redirect("ViewRequest.aspx");
            Session.Remove("dtPO");
        }
        else
            dvError.InnerHtml = retStr;
    }

    private void ClearFields()
    {
        ddlExpItem.SelectedIndex = 0;
        txtAccCode.Text = string.Empty;
        txtQuantity.Text = string.Empty;
        txtPkgUnit.Text = string.Empty;
        txtUnitPrice.Text = string.Empty;
        txtPoAmount.Text = string.Empty;
        txtDescr.Text = string.Empty;
        txtBalAfterPO.Text = string.Empty;
        txtRemain.Text = string.Empty;
        txtCurrBal.Text = string.Empty;
        txtBudget.Text = string.Empty;
        txttax.Text = string.Empty;
        txtShipCost.Text = string.Empty;
        txtBalAfterPO.Text = string.Empty;
        txtVendPtNo.Text = string.Empty;
        txtReqDelDate.Text = string.Empty;
    }

    protected void AddVendor(object sender, EventArgs e)
    {
        btnVendSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendor();");
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvErrMsg');");
        txtVendAltPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtVendAltPhone', 'dvErrMsg');");
        txtAgentPh.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtAgentPh', 'dvErrMsg');");
        dvSysOrders.Style["display"] = "none";
        BindStatesAndCountry();
        BindCurrencyAndPayTerms();
        //Avoid normal users check IsPreferVend option
        if (Session["IsAdmin"] == "true" || Session["GAdmin"] == "true" || Session["IsAP"] == "true" || Session["IsManager"] == "true")
            chkIsPrefVend.Enabled = true;
        else
            chkIsPrefVend.Enabled = false;
        //Avoid normal users check IsPreferVend option

        txtVendName.Focus();
        popAddVendor.Show();
    }

    private void ClearVendorFields()
    {
        lblVendNo.Text = txtVendName.Text = txtVendContact.Text = txtPhone.Text = txtVendAddr1.Text = txtVendAddr2.Text = txtVendAddr3.Text = txtVendCity.Text =
            txtVendZip.Text = txtUrl.Text = txtVendDisc.Text = txtStartDate.Text = txtExpiryDate.Text = txtPromoCode.Text = txtAgent.Text = txtAgentName.Text =
            txtAgentPh.Text = string.Empty;
        chkIsPrefVend.Checked = false;
        ddlRgnCode.SelectedValue = "0";
        chkSysOrders.Checked = false;
    }

    private void BindCurrencyAndPayTerms()
    {
        //LOAD CURRENCY
        string currencyData = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "CURRENCY");
        List<CodeValueVO> currency = ser.Deserialize<List<CodeValueVO>>(currencyData);
        ddlVendCurrency.DataSource = currency;
        ddlVendCurrency.DataBind();
        ddlVendCurrency.Items.Insert(0, "Please Select");
        ddlVendCurrency.Items.FindByText("Please Select").Value = "0";

        //LOAD PAYMENT TERMS
        string strPayTerm = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "PAYTERMS");
        List<CodeValueVO> lstPayTerm = ser.Deserialize<List<CodeValueVO>>(strPayTerm);
        ddlPayTerms.DataSource = lstPayTerm;
        ddlPayTerms.DataBind();
        ddlPayTerms.Items.Insert(0, "Please Select");
        ddlPayTerms.Items.FindByText("Please Select").Value = "0";
    }

    private void BindStatesAndCountry()
    {
        string str = xms.getRegions();
        List<RegionVO> lst = ser.Deserialize<List<RegionVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = dt.DefaultView;
        dv.Sort = "State ASC";
        ddlRgnCode.DataSource = dv;
        ddlRgnCode.DataTextField = "state";
        ddlRgnCode.DataValueField = "regionCode";
        ddlRgnCode.DataBind();
        ddlRgnCode.Items.Insert(0, "Please Select");
        ddlRgnCode.Items.FindByText("Please Select").Value = "0";

        DataTable dtC = (DataTable)Session["dsCodes"];
        DataView dvC = new DataView(dtC, "CodeID = 'ERCOUNTRYCD'", "CodeKey", DataViewRowState.CurrentRows);
        ddlCountry.DataSource = dvC;
        ddlCountry.DataBind();
    }

    protected void ddlRgnCode_SelectedIndexChanged(object sender, EventArgs e)
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
        //txtCities.Text = string.Empty;
        txtVendZip.Text = string.Empty;
        lblVendNo.Text = hdnVendCode.Value;
        txtVendCity.Focus();
        popAddVendor.Show();
    }

    protected void SaveVendor(object sender, EventArgs e)
    {
        //split city and zipcode
        string city = string.Empty;
        if (!string.IsNullOrEmpty(txtVendCity.Text))
        {
            if (txtVendCity.Text.Contains('-'))
            {
                string[] arrCity = txtVendCity.Text.Split('-');
                city = arrCity[0];
            }
            else
                city = txtVendCity.Text;
        }
        //split city and zipcode

        VendorsVO vend = new VendorsVO();
        vend.acceptSysOrders = chkSysOrders.Checked == true ? 1 : 0;
        vend.acctNum = txtVendAccNum.Text;
        vend.addedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.agentName = txtAgentName.Text;
        vend.agentPhoneNo = txtAgentPh.Text;
        vend.altContact = txtVendAltContact.Text;
        vend.altPhoneno = txtVendAltPhone.Text;
        vend.city = city;
        vend.comments = string.Empty;
        vend.compCode = Session["CompCode"].ToString();
        vend.country = ddlCountry.SelectedValue;
        vend.currency = ddlVendCurrency.SelectedValue;

        if (chkSysOrders.Checked)
        {
            vend.emailFlag = rblEmail.SelectedIndex == 0 ? 1 : 0;
            if (rblEmail.SelectedIndex == 0)
            {
                vend.vendorEmail = txtEmailFax.Text;
                vend.fax = string.Empty;
            }
            else if (rblEmail.SelectedIndex == 1)
            {
                vend.fax = txtEmailFax.Text;
                vend.vendorEmail = string.Empty;
            }
        }
        else
        {
            vend.emailFlag = 0;
            vend.fax = string.Empty;
            vend.vendorEmail = string.Empty;
        }

        vend.expenseItem = string.Empty;
        vend.expiryDate = txtExpiryDate.Text;
        vend.familyName = "";
        vend.firstName = txtVendFirstName.Text;
        vend.isPreferVend = chkIsPrefVend.Checked ? "Y" : "N";
        vend.lastName = txtVendLastName.Text;
        vend.middleName = txtVendMidName.Text;
        vend.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        vend.openBal = txtVendBalance.Text;
        vend.orgId = Session["OrgID"].ToString();
        vend.payTerm = ddlPayTerms.SelectedValue;
        vend.preferagent = txtAgent.Text;
        vend.preference = string.Empty;
        vend.preferredVendor = txtVendName.Text;
        vend.promoCode = txtPromoCode.Text;
        vend.qbVendId = 0;
        vend.shipAddress1 = string.Empty;
        vend.shipAddress2 = string.Empty;
        vend.shipAddress3 = string.Empty;
        vend.startDate = txtStartDate.Text;
        vend.state = ddlRgnCode.SelectedValue;
        vend.taxCode = txtVendTaxCode.Text;
        vend.title = (ddlVendTitle.SelectedValue == "0" ? string.Empty : ddlVendTitle.SelectedValue);
        vend.type = 1;
        vend.vend1099 = txt1099.Text;
        vend.vendAddress1 = txtVendAddr1.Text;
        vend.vendAddress2 = txtVendAddr2.Text;
        vend.vendAddress3 = txtVendAddr3.Text;
        vend.vendContact = txtVendContact.Text;
        vend.vendDiscPercent = txtVendDisc.Text == string.Empty ? 0 : Convert.ToInt32(txtVendDisc.Text);
        vend.vendorId = "0";
        vend.vendorno = lblVendNo.Text;
        vend.vendPhoneNo = txtPhone.Text;
        vend.vendStatus = "";
        vend.vendZipCode = txtVendZip.Text;
        vend.website = txtUrl.Text;
        //vend.addedBy = Convert.ToInt32(Session["UserID"]);
        //vend.agentName = txtAgentName.Text;
        //vend.agentPhoneNo = txtAgentPh.Text;
        //vend.city = city;
        //vend.compCode = Session["CompCode"].ToString();
        //vend.expenseItem = string.Empty;//ddlVendExpItem.SelectedValue;
        //vend.modifiedBy = Convert.ToInt32(Session["UserID"]);
        //vend.orgId = Session["OrgID"].ToString();
        //vend.preferagent = txtAgent.Text;
        //vend.preference = string.Empty;//ddlVendPref.SelectedItem.Text;
        //vend.preferredVendor = txtVendName.Text;
        //vend.type = 1;
        //vend.vendAddress1 = txtVendAddr1.Text;
        //vend.vendAddress2 = txtVendAddr2.Text;
        //vend.vendAddress3 = txtVendAddr3.Text;
        //vend.vendContact = txtVendContact.Text;
        //vend.vendorno = lblVendNo.Text;
        //vend.vendorId = "0";
        //vend.vendPhoneNo = txtPhone.Text;
        //vend.vendZipCode = txtVendZip.Text;
        //vend.promoCode = txtPromoCode.Text;
        //vend.vendDiscPercent = txtVendDisc.Text == string.Empty ? 0 : Convert.ToInt32(txtVendDisc.Text);
        //vend.startDate = txtStartDate.Text;
        //vend.expiryDate = txtExpiryDate.Text;
        //vend.emailFlag = chkSysOrders.Checked == true ? 1 : 0;
        //vend.vendorEmail = txtEmailFax.Text;
        //vend.state = ddlRgnCode.SelectedValue;
        //vend.country = ddlCountry.SelectedValue;
        //vend.website = txtUrl.Text;
        string ret = xms.addPreferredVend(vend);
        if (ret.ToLower().Contains("succes"))
        {
            dvError.InnerHtml = ret;
            dvError.Style["color"] = "Green";
            Session.Remove("PreferredVendorList");
            BindPrefVendors();
            if (chkIsPrefVend.Checked)
                ddlBillTo.SelectedValue = txtVendName.Text;
            Session.Remove("NVend");
            ClearVendorFields();
            popAddVendor.Hide();
        }
        else
        {
            dvErrMsg.InnerHtml = ret;
            dvErrMsg.Style["color"] = "Red";
            popAddVendor.Show();
        }
    }

    private bool ValidateBelowToleranceAmount()
    {
        DataTable dtPO = (DataTable)Session["dtPO"];
        string[] mgrArr = ddlManagerEmail.SelectedItem.Text.Split(new string[] { " -- " }, StringSplitOptions.None);
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        string expr = "CodeID = 'ERUSERGROUPS' and CodeKey = '" + mgrArr[1] + "'";
        DataView dvGrp = new DataView(dtCodes, expr, "CodeKey", DataViewRowState.CurrentRows);
        double totalAmnt = 0;
        for (int i = 0; i < dtPO.Rows.Count; i++)
        {
            totalAmnt += ut.NullSafeDouble(dtPO.Rows[i]["preamount"]);
        }
        double toleranceAmnt = ut.NullSafeDouble(dvGrp.ToTable().Rows[0]["CodeValue2"]);
        if (totalAmnt > toleranceAmnt)
            return false;
        else
            return true;
    }

    private DataTable GetHierarchicalData(DataTable dt, string col)
    {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            int cnt = 0;
            string s = dt.Rows[i][col].ToString();
            char[] arr = dt.Rows[i][col].ToString().ToCharArray();
            for (int j = 0; j < arr.Length; j++)
            {
                if (arr[j] == ' ')
                    cnt++;
                else
                    break;
            }

            string c = "";
            for (int j = 0; j < cnt; j++)
                c += "&#160;";
            dt.Rows[i][col] = Server.HtmlDecode((c) + s);
        }
        return dt;
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

    # region Copy PO

    protected void AddCopyPO(object sender, EventArgs e)
    {
        btnCopyPODetails.Attributes.Add("onclick", "javascript:return validateExpNewMaster();");
        dvError.InnerHtml = string.Empty;
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;
        hdnYear.Value = year.ToString();

        MonthFilter(year);
        if (tripMonth != "" || tripMonth != string.Empty)
        {
            DataSet dsCopy = new DataSet();
            string uID = string.Empty;
            uID = Session["UserID"].ToString();
            var strExp = xms.getExpenses(Convert.ToInt32(uID), string.Empty, string.Empty, 2);
            List<ExpDetailsPagesVO> lstExp = ser.Deserialize<List<ExpDetailsPagesVO>>(strExp);
            dsCopy.Tables.Add(Utility.ConvertToDataTable(lstExp));

            string expression = "preferredVendor='" + ddlBillTo.SelectedItem.Text + "'";
            DataView pref = new DataView(dsCopy.Tables[0], expression, "OurRefNo", DataViewRowState.CurrentRows);
            DataTable dtPref = pref.ToTable();
            DataTable dt = new DataTable();
            dt.Columns.Add("RequestID");
            dt.Columns.Add("OurRefNo");
            DataRow dr;
            if (dtPref.Rows.Count > 0)
            {
                for (int i = 0; i < dtPref.Rows.Count; i++)
                {
                    dr = dt.NewRow();
                    dr["OurRefNo"] = dtPref.Rows[i]["OurRefNo"].ToString() + "--" + dtPref.Rows[i]["Purpose"].ToString();
                    dr["RequestID"] = dtPref.Rows[i]["RequestID"].ToString();
                    dt.Rows.Add(dr);
                }
                dt.AcceptChanges();
                if (dt.Rows.Count > 0)
                {
                    ddlCopyPONum.DataSource = dt;
                    ddlCopyPONum.DataBind();
                    popCopyPO.Show();
                }
                else
                    dvError.InnerHtml = "No PO exists with selected Vendor to copy.";
            }
            else
                dvError.InnerHtml = "No PO exists with selected Vendor to copy.";
        }
    }

    protected void CopyPO(object sender, EventArgs e)
    {
        hdnIsCopy.Value = "1";

        if (Session["dtPO"] != null)
            dtCopyPO = (DataTable)Session["dtPO"];
        else
        {
            dtCopyPO.Columns.Add("expItem");
            dtCopyPO.Columns.Add("accountCode");
            dtCopyPO.Columns.Add("quantity");
            dtCopyPO.Columns.Add("packageUnit");
            dtCopyPO.Columns.Add("unitPrice");
            dtCopyPO.Columns.Add("preAmount");
            dtCopyPO.Columns.Add("comments");
            dtCopyPO.Columns.Add("budget");
            dtCopyPO.Columns.Add("currentBalance");
            dtCopyPO.Columns.Add("remaining");
            dtCopyPO.Columns.Add("balAfterPO");
            dtCopyPO.Columns.Add("shippingCost");
            dtCopyPO.Columns.Add("taxAmount1");
            dtCopyPO.Columns.Add("taxCalCulated");
            dtCopyPO.Columns.Add("VendPartNo");
            dtCopyPO.Columns.Add("TaxPercent");
            dtCopyPO.Columns.Add("ItemCode");
            dtCopyPO.Columns.Add("MgrGroupCode");
            dtCopyPO.Columns.Add("DeptCode");
            dtCopyPO.Columns.Add("DeptChgCmt");
            dtCopyPO.Columns.Add("discountFlag");
            dtCopyPO.Columns.Add("discount");
            dtCopyPO.Columns.Add("promoCode");
        }
        DataSet dsCopyPoReq = new DataSet();
        string strPoReqID = xms.getExpDetailsByReqId(Convert.ToInt32(ddlCopyPONum.SelectedValue), Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstPOBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strPoReqID);
        dsCopyPoReq.Tables.Add(Utility.ConvertToDataTable(lstPOBtReq));
        dtCopyPO = dsCopyPoReq.Tables[0];
        Session["dtPO"] = dtCopyPO;
        gvPOrder.DataSource = dtCopyPO;
        gvPOrder.DataBind();
        hdnIsCopy.Value = "1";
        if (gvPOrder.Rows.Count > 0)
        {
            btnSave.Visible = true;
            btnSubmit.Visible = true;
            btnHSave.Visible = true;
            btnHSubmit.Visible = true;
            if (Session["dtExpItem"] == null)
                BindExpenseItems(1);
            DataTable dt = (DataTable)Session["dtExpItem"];
            ddlExpItem.DataSource = dt.DefaultView.ToTable(true, "AcountClss", "accName");
            ddlExpItem.DataBind();
            hdnTax.Value = Session["Tax"].ToString();
        }
        else
        {
            btnSave.Visible = false;
            btnSubmit.Visible = false;
            btnHSave.Visible = false;
            btnHSubmit.Visible = false;
        }

    }

    # endregion

    #region Edit POItem

    double allRowsAmntVal = 0;

    protected void EditNewDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        btnSavePOItem.Attributes.Add("onclick", "javascript:return ValidateNewPO();");
        MakeCalcFieldsReadOnly();

        int rowIndex = Convert.ToInt32(e.CommandArgument);
        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = dtPO.Clone();
        dtPO_Temp.ImportRow(dtPO.Rows[rowIndex]);
        Session["dtPO_Temp"] = dtPO_Temp;
        lblHeading.Text = "Edit PO Details";

        foreach (GridViewRow row1 in gvPOrder.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[rowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(dtPO.Rows[rowIndex]["preamount"])).ToString();
        Session["onEditPreAmnt"] = dtPO.Rows[rowIndex]["preamount"];
        Session["allRowsAmntVal"] = allRowsAmntVal;
        GetPOLineItemData(dtPO, rowIndex);

        hdnRowIndex.Value = rowIndex.ToString();
        Session["Edit"] = "y";
        ToggleFields(true);
        txtTaxPercent.Enabled = chkCalTax.Checked == true ? true : false;

        hdnIsPOEdit.Value = "false";
        btnSavePOItem.Visible = true;

        btnSavePOItem.Visible = true;
        btnAppend.Visible = false;
    }

    protected void ViewNewDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        int rowIndex = Convert.ToInt32(e.CommandArgument);
        dtPO = (DataTable)Session["dtPO"];

        foreach (GridViewRow row1 in gvPOrder.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(dtPO.Rows[rowIndex]["preamount"])).ToString();

        GetPOLineItemData(dtPO, rowIndex);
        lblHeading.Text = "View PO Details";
        ToggleFields(false);
        btnAppend.Visible = false;
        btnSavePOItem.Visible = false;
    }

    protected void Delete(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
    }

    private void GetPOLineItemData(DataTable dt, int index)
    {
        if (ddlJobs.SelectedValue != "0")
            LoadDetailsByJob(false);
        else
        {
            BindDepartments(ddlDepartment, 1);
            ddlDepartment.SelectedValue = dt.Rows[index]["DeptCode"].ToString();
            DataTable dt1 = (DataTable)Session["dtExpItem"];
            ddlExpItem.DataSource = dt1.DefaultView.ToTable(true, "AcountClss", "accName");
            ddlExpItem.DataBind();
            ddlExpItem.Items.Insert(0, "Please Select");
            ddlExpItem.Items.FindByText("Please Select").Value = "0";
            ddlExpItem.SelectedValue = dt.Rows[index]["expItem"].ToString();
        }
        txtAccCode.Text = dt.Rows[index]["accountCode"].ToString();
        txtQuantity.Text = dt.Rows[index]["quantity"].ToString();
        txtPkgUnit.Text = dt.Rows[index]["packageUnit"].ToString();
        txtUnitPrice.Text = dt.Rows[index]["unitPrice"].ToString();
        txtPoAmount.Text = dt.Rows[index]["preamount"].ToString();
        txtDescr.Text = dt.Rows[index]["comments"].ToString();
        txtBudget.Text = dt.Rows[index]["budget"].ToString();
        txtCurrBal.Text = dt.Rows[index]["currentBalance"].ToString();
        txtRemain.Text = dt.Rows[index]["remaining"].ToString();
        txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal))).ToString("#.##");
        txtShipCost.Text = (ut.NullSafeDouble(dt.Rows[index]["shippingCost"])).ToString();
        chkCalTax.Checked = dt.Rows[index]["taxCalCulated"].ToString() == "True" ? true : false;
        txtTaxPercent.Text = chkCalTax.Checked == true ? dt.Rows[index]["TaxPercent"].ToString() : Session["Tax"].ToString();
        double x = 0;
        x = ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(dt.Rows[index]["taxPercent"].ToString())) / 100));
        txttax.Text = chkCalTax.Checked == true ? (x.ToString() != "0" ? x.ToString("#.##") : x.ToString()) : "0.00";
        //txttax2.Text = txtPoAmount.Text + txttax2.Text;
        txtVendPtNo.Text = dt.Rows[index]["VendPartNo"].ToString();
        txtReqDelDate.Text = dt.Rows[index]["reqDeliveryDate"].ToString();
        BindItemsCode();
        if (dt.Rows[index]["ItemCode"] != null && dt.Rows[index]["ItemCode"].ToString() != " " && dt.Rows[index]["ItemCode"].ToString() != string.Empty)
            ddlItemCode.SelectedValue = dt.Rows[index]["ItemCode"].ToString();
        txtchangeComnts.Text = dt.Rows[index]["DeptChgCmt"].ToString();
        chkDisc.Checked = dt.Rows[index]["discountFlag"].ToString() == "True" ? true : false;
        txtDisc.Text = dt.Rows[index]["discount"].ToString();
        txtLinePromoCode.Text = dt.Rows[index]["PromoCode"].ToString();
        popAddPO.Show();
    }

    private void MakeCalcFieldsReadOnly()
    {
        txtDisc.Attributes.Add("readonly", "readonly");
        txttax.Attributes.Add("readonly", "readonly");
        txtPoAmount.Attributes.Add("readonly", "readonly");
        txtBudget.Attributes.Add("readonly", "readonly");
        txtCurrBal.Attributes.Add("readonly", "readonly");
        txtRemain.Attributes.Add("readonly", "readonly");
        txtBalAfterPO.Attributes.Add("readonly", "readonly");
        txtLinePromoCode.Attributes.Add("readonly", "readonly");
    }

    private void ToggleFields(bool check)
    {
        ddlExpItem.Enabled = check;
        txtAccCode.Enabled = check;
        txtQuantity.Enabled = check;
        txtPkgUnit.Enabled = check;
        txtUnitPrice.Enabled = check;
        txtPoAmount.Enabled = check;
        txtDescr.Enabled = check;
        txtShipCost.Enabled = check;
        txttax.Enabled = check;
        txtTaxPercent.Enabled = check;
        ddlDepartment.Enabled = check;
        ddlItemCode.Enabled = check;
        txtchangeComnts.Enabled = check;
        txtReqDelDate.Enabled = check;
        ddlPriceFlag.Enabled = check;
    }

    protected void DeleteExpItem(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(hdnRowIndex.Value);
        dtPO = dtPO = (DataTable)Session["dtPO"];

        foreach (GridViewRow row1 in gvPOrder.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == dtPO.Rows[index]["accountCode"].ToString())
                dtPO.Rows[row1.RowIndex]["balAfterPO"] = (ut.NullSafeDouble(dtPO.Rows[row1.RowIndex]["balAfterPO"]) + (ut.NullSafeDouble(dtPO.Rows[index]["preamount"]))).ToString("#.##");
        }
        dtPO.Rows[index].Delete();
        dtPO.AcceptChanges();
        Session["dtPO"] = dtPO;
        BindGridData();
        if (gvPOrder.Rows.Count == 0)
        {
            btnSave.Visible = false;
            btnSubmit.Visible = false;
            btnHSave.Visible = false;
            btnHSubmit.Visible = false;
            ddlType.Enabled = true;
        }
        else
        {
            btnSave.Visible = true;
            btnSubmit.Visible = true;
            btnHSave.Visible = true;
            btnHSubmit.Visible = true;
        }
    }

    protected void btnClosePOItem_Click(object sender, EventArgs e)
    {
        if (gvPOrder.Rows.Count == 0)
            ddlType.Enabled = true;
        else
            ddlType.Enabled = false;
        popAddPO.Hide();
    }

    protected void btnSavePO_Click(object sender, EventArgs e)
    {
        DataTable dtBudget = (DataTable)Session["BudgetData"];
        if (dtBudget.Rows[0]["period"].ToString().ToLower() != "close")
        {
            foreach (GridViewRow row1 in gvPOrder.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
                if (lblPOAccCode.Text == txtAccCode.Text)
                    allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
            }
            hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(Session["onEditPreAmnt"] == null ? 0 : Session["onEditPreAmnt"])).ToString();

            //get QBITemID according to selected item code.
            //DeptVO d = new DeptVO();
            //d.qbItemId
            DataTable dtExpItem = (DataTable)Session["dtExpItem"];
            DataView dvItem = new DataView(dtExpItem, "accName = '" + ddlExpItem.SelectedValue + "' AND ITEMCODE = '" + ddlItemCode.SelectedValue + "'", "", DataViewRowState.CurrentRows);
            hdnQBItemID.Value = dvItem.ToTable().Rows[0]["qbItemId"].ToString();
            //get QBITemID according to selected item code.

            if (Session["dtPO"] == null)
            {
                dtPO.Columns.Add("expItem");
                dtPO.Columns.Add("accountCode");
                dtPO.Columns.Add("quantity");
                dtPO.Columns.Add("packageUnit");
                dtPO.Columns.Add("unitPrice");
                dtPO.Columns.Add("preAmount");
                dtPO.Columns.Add("comments");
                dtPO.Columns.Add("budget");
                dtPO.Columns.Add("currentBalance");
                dtPO.Columns.Add("remaining");
                dtPO.Columns.Add("balAfterPO");
                dtPO.Columns.Add("shippingCost");
                dtPO.Columns.Add("taxAmount1");
                dtPO.Columns.Add("taxCalCulated");
                dtPO.Columns.Add("VendPartNo");
                dtPO.Columns.Add("TaxPercent");
                dtPO.Columns.Add("ItemCode");
                dtPO.Columns.Add("MgrGroupCode");
                dtPO.Columns.Add("DeptCode");
                dtPO.Columns.Add("DeptChgCmt");
                dtPO.Columns.Add("discountFlag");
                dtPO.Columns.Add("discount");
                dtPO.Columns.Add("PromoCode");
                dtPO.Columns.Add("reqDeliveryDate");
                dtPO.Columns.Add("qbAcctId");
                dtPO.Columns.Add("qbVendId");
                dtPO.Columns.Add("qbItemId");
                dtPO.Columns.Add("priceFlag");
            }
            else
                dtPO = (DataTable)Session["dtPO"];

            if (Session["Edit"] == "y")
            {
                int row = Convert.ToInt32(hdnRowIndex.Value);
                dtPO.Rows[row]["expItem"] = ddlExpItem.SelectedValue.Trim();
                dtPO.Rows[row]["accountCode"] = txtAccCode.Text;
                dtPO.Rows[row]["quantity"] = ut.NullSafeDouble(txtQuantity.Text).ToString("#.##");
                dtPO.Rows[row]["packageUnit"] = txtPkgUnit.Text;
                dtPO.Rows[row]["unitPrice"] = ut.NullSafeDouble(txtUnitPrice.Text).ToString("#.##");
                dtPO.Rows[row]["shippingCost"] = txtShipCost.Text == string.Empty ? "0" : txtShipCost.Text;
                double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
                dtPO.Rows[row]["TaxPercent"] = taxPercent;
                dtPO.Rows[row]["preAmount"] = txtPoAmount.Text;
                dtPO.Rows[row]["comments"] = txtDescr.Text;
                dtPO.Rows[row]["budget"] = txtBudget.Text;
                dtPO.Rows[row]["currentBalance"] = txtCurrBal.Text;
                dtPO.Rows[row]["remaining"] = txtRemain.Text;
                dtPO.Rows[row]["balAfterPO"] = txtBalAfterPO.Text;//ut.NullSafeDouble((ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - ((allRowsAmntVal - ut.NullSafeDouble(Session["onEditPreAmnt"])) + ut.NullSafeDouble(amnt))).ToString("#.##"));
                Session["balAfterPO"] = dtPO.Rows[row]["balAfterPO"];
                dtPO.Rows[row]["taxAmount1"] = ut.NullSafeDouble(txttax.Text == string.Empty ? "0" : txttax.Text);
                dtPO.Rows[row]["taxCalCulated"] = chkCalTax.Checked;
                dtPO.Rows[row]["VendPartNo"] = txtVendPtNo.Text;
                string[] arr = new string[3];
                arr = ddlManagerEmail.SelectedItem.Text.Split(' ');
                dtPO.Rows[row]["MgrGroupCode"] = arr[2];
                dtPO.Rows[row]["DeptCode"] = ddlDepartment.SelectedValue;
                dtPO.Rows[row]["DeptChgCmt"] = txtchangeComnts.Text == string.Empty ? " " : txtchangeComnts.Text;
                dtPO.Rows[row]["ItemCode"] = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
                dtPO.Rows[row]["discountFlag"] = chkDisc.Checked;
                dtPO.Rows[row]["discount"] = txtDisc.Text;
                dtPO.Rows[row]["PromoCode"] = txtLinePromoCode.Text;
                dtPO.Rows[row]["reqDeliveryDate"] = txtReqDelDate.Text;
                dtPO.Rows[row]["qbAcctId"] = hdnQBAcctID.Value;
                dtPO.Rows[row]["qbVendId"] = hdnQBVendID.Value;
                dtPO.Rows[row]["qbItemId"] = hdnQBItemID.Value;
                dtPO.Rows[row]["priceFlag"] = ddlPriceFlag.SelectedValue;
            }
            else
            {
                drPO = dtPO.NewRow();
                drPO["expItem"] = ddlExpItem.SelectedValue.Trim();
                drPO["accountCode"] = txtAccCode.Text;
                drPO["quantity"] = ut.NullSafeDouble(txtQuantity.Text);
                drPO["packageUnit"] = txtPkgUnit.Text;
                drPO["unitPrice"] = ut.NullSafeDouble(txtUnitPrice.Text).ToString("#.##");
                drPO["shippingCost"] = ut.NullSafeDouble(txtShipCost.Text == string.Empty ? "0" : txtShipCost.Text);
                double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
                drPO["TaxPercent"] = taxPercent;
                drPO["preAmount"] = txtPoAmount.Text;
                drPO["comments"] = txtDescr.Text;
                drPO["budget"] = txtBudget.Text;
                drPO["currentBalance"] = txtCurrBal.Text;
                drPO["remaining"] = txtRemain.Text;
                drPO["balAfterPO"] = txtBalAfterPO.Text;//ut.NullSafeDouble((ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - ((allRowsAmntVal - ut.NullSafeDouble(Session["onEditPreAmnt"])) + ut.NullSafeDouble(amnt))).ToString("#.##"));
                Session["balAfterPO"] = drPO["balAfterPO"];
                drPO["taxAmount1"] = ut.NullSafeDouble(txttax.Text == string.Empty ? "0" : txttax.Text);
                drPO["taxCalCulated"] = chkCalTax.Checked;
                drPO["VendPartNo"] = txtVendPtNo.Text;
                string[] arr = new string[3];
                arr = ddlManagerEmail.SelectedItem.Text.Split(' ');
                drPO["MgrGroupCode"] = arr[2];
                drPO["DeptCode"] = ddlDepartment.SelectedValue;
                drPO["DeptChgCmt"] = txtchangeComnts.Text;
                drPO["ItemCode"] = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
                drPO["discountFlag"] = chkDisc.Checked;
                drPO["discount"] = txtDisc.Text;
                drPO["PromoCode"] = txtLinePromoCode.Text;
                drPO["reqDeliveryDate"] = txtReqDelDate.Text;
                drPO["qbAcctId"] = hdnQBAcctID.Value;
                drPO["qbVendId"] = hdnQBVendID.Value;
                drPO["qbItemId"] = hdnQBItemID.Value;
                drPO["priceFlag"] = ddlPriceFlag.SelectedValue;
                dtPO.Rows.Add(drPO);
            }
            dtPO.AcceptChanges();
            Session["dtPO"] = dtPO;
            foreach (GridViewRow row1 in gvPOrder.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                if (lblPOAccCode.Text == txtAccCode.Text)
                    dtPO.Rows[row1.RowIndex]["balAfterPO"] = Session["balAfterPO"].ToString();
            }
            Session.Remove("onEditPreAmnt");
            Session.Remove("balAfterPO");
            BindGridData();
            btnSave.Visible = true;
            btnSubmit.Visible = true;
            btnHSave.Visible = true;
            btnHSubmit.Visible = true;
        }
        else
        {
            dvPOErrMsg.Style["color"] = "Red";
            dvPOErrMsg.InnerHtml = "You Cannot modify (or) add any new details, period of " + ddlDepartment.SelectedItem.Text + " department is closed for FiscalMonth " + DateTime.Now.AddMonths(0).ToString("MMMM").ToUpper();
            popAddPO.Show();
        }
    }

    #endregion

    #region Attachments

    protected void btnAttach_Click(object sender, EventArgs e)
    {
        GetAttachments();
        popup_Att.Show();
    }

    private void GetAttachments()
    {
        Attachments();
        DataSet ds = (DataSet)Session["AttchList"];
        gvAttchmnts.DataSource = ds;
        gvAttchmnts.DataBind();
        btnAttach.Text = "   Attachments(" + gvAttchmnts.Rows.Count + ")";
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1.PostedFile.FileName);
        int len = fupd1.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".pdf" || ext.ToLower() == ".doc" || ext.ToLower() == ".docx")
        {
            if (len > 0 && len < 10485760)
            {
                Session["fStream"] = fupd1.FileContent;
                Session["FileExt"] = Path.GetExtension(fupd1.PostedFile.FileName);
                Session["RctFileName"] = fupd1.PostedFile.FileName;
            }
            else
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
        }
        else
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
    }

    protected void UploadPOAttachments(object sender, EventArgs e)
    {
        string str = string.Empty;
        dvAtt.InnerHtml = string.Empty;
        if (Session["RctFileName"] != null)
        {
            byte[] fileData = null;
            Random random = new Random();
            int index = Session["RctFileName"].ToString().IndexOf('.');
            string fName = Session["RctFileName"].ToString().Substring(0, index);
            AttachmentVO att = new AttachmentVO();
            att.addedOn = DateTime.Now.ToShortDateString();
            att.attachmentId = 0;
            att.compCode = Session["CompCode"].ToString();
            att.expLineNo = 0;
            att.fileName = Session["NewReqID"].ToString() + "_0_" + Session["OrgID"].ToString() + "_" + ddlBillTo.SelectedValue.Replace('/', '_') + "_" + fName + random.Next();
            att.orgId = Convert.ToInt32(Session["OrgID"]);
            att.orgName = string.Empty;
            att.requestId = Convert.ToInt32(Session["NewReqID"]);
            fileData = SavedFileData();
            str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 1);
            if (str.ToLower().Contains("y"))
            {
                dvAtt.Style["color"] = "Green";
                dvAtt.InnerHtml = "File attached successfully";
                GetAttachments();
                Session.Remove("RctFileName");
                Session.Remove("fStream");
                Session.Remove("FileExt");
            }
            else
            {
                dvAtt.Style["color"] = "Red";
                dvAtt.InnerHtml = "An error occurred while uploading file. Please try again.";
            }
        }
        popup_Att.Show();
    }

    private byte[] SavedFileData()
    {
        byte[] fileData = null;
        Stream sf = (Stream)Session["fStream"];
        BinaryReader br = new BinaryReader(sf);
        sf.Position = 0;
        if (Session["FileExt"].ToString().ToLower() == ".pdf")
        {
            int fileSize;
            fileSize = ut.NullSafeInteger(sf.Length);
            Stream fileStream = sf;
            fileData = new byte[fileSize];
            fileStream.Read(fileData, 0, 2097152);
            hdnRctFileType.Value = "2";//for pdf format
        }
        else
        {
            fileData = br.ReadBytes((int)sf.Length);
            hdnRctFileType.Value = "1";//for image (.jpg/.jpeg/.tiff/.png)
        }
        return fileData;
    }

    protected void gvAttchmnts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
                if (extension.ToLower().Contains("pdf"))
                    imgAttchmnt.ImageUrl = "images/pdfIcon.png";
                else
                {
                    byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                    string base64ImageString = ConvertBytesToBase64(bytes);
                    imgAttchmnt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
                }
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void DownLdAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgName");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgName");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup_Att.Show();
    }

    private string Attachments()
    {
        string str = xms.getAttachmentItems(ut.NullSafeInteger(lblPONo.Text), 0, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        Session["AttchList"] = ds;
        string str1 = ds.Tables[0].Rows.Count.ToString();
        return str1;
    }

    protected void DeleteSelectedAttachments(object sender, EventArgs e)
    {
        //btnDeleteSelected.Style["display"] = "block";
        popup_Att.Show();
        popDelAtt.Show();
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void ConfirmDelete(object sender, EventArgs e)
    {
        string attId = string.Empty;
        foreach (GridViewRow row in gvAttchmnts.Rows)
        {
            CheckBox chkDelAtt = (CheckBox)row.FindControl("chkDelAtt");
            HiddenField hdnattId = (HiddenField)row.FindControl("hdnattId");
            if (chkDelAtt.Checked)
                attId += hdnattId.Value + "~";
        }
        attId = attId.TrimEnd('~');
        string retStr = xms.deleteMulAttachment(attId, 2, string.Empty, 0, 0, string.Empty);
        if (retStr.ToLower().Contains("succes"))
        {
            dvAtt.InnerText = retStr;
            dvAtt.Style["color"] = "Green";
            dvAtt.Style["font-weight"] = "normal";
            GetAttachments();
            popup_Att.Show();
        }
        else
        {
            dvAtt.InnerText = "An error occured while deleting draft please try later";
            dvAtt.Style["color"] = "Red";
            dvAtt.Style["font-weight"] = "bold";
        }
        popDelAtt.Hide();
        popup_Att.Show();
    }

    #endregion

    #region Create Item Code

    protected void AddItemCode(object sender, EventArgs e)
    {
        ClearItemFields();
        if (ddlExpItem.SelectedValue == "0")
            DisplayItemMessage("Red", "Please select Budget Classification before creating Item Code.");
        else
            lblBdgClssForItem.Text = ddlExpItem.SelectedValue.Trim();
        btnSaveAddItemCode.Attributes.Add("onclick", "javascript:return validatePOItemCode();");
        txtItemCode.Focus();
        popAddPO.Hide();
        popAddItemCode.Show();
    }

    protected void SaveItemCode(object sender, EventArgs e)
    {
        ItemCodesVO item = new ItemCodesVO();
        item.addedBy = ut.NullSafeInteger(Session["UserID"]);
        item.budgetClassification = lblBdgClssForItem.Text.Trim();
        item.compCode = Session["CompCode"].ToString();
        item.description = txtItemDescription.Text;
        item.itemCode = txtItemCode.Text;
        item.itemId = 0;
        item.itemNotes = txtItemNotes.Text;
        item.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        item.orgId = ut.NullSafeInteger(Session["OrgID"]);
        item.type = 1;
        item.deptCode = ddlDepartment.SelectedValue;
        item.qbAccId = ut.NullSafeInteger(hdnQBAcctID.Value);
        item.qbItemId = 0;
        string retStr = xms.addItemCodes(item);
        if (retStr.ToLower().Contains("succes"))
        {
            dvPOErrMsg.Style["color"] = "Green";
            dvPOErrMsg.InnerHtml = retStr;
            Session.Remove("dtExpItem");
            Session.Remove("ItemCodes");
            BindExpenseItems(1);
            BindItemsCode();
            ddlItemCode.SelectedValue = txtItemCode.Text;
            txtDescr.Text = txtItemDescription.Text;
            lnkShowItemInventory.Style["display"] = "none";
            ClearItemFields();
            popAddItemCode.Hide();
            popAddPO.Show();
        }
        else
        {
            DisplayItemMessage("Red", retStr);
            popAddItemCode.Show();
        }
    }

    protected void CancelAddItemCode(object sender, EventArgs e)
    {
        ClearItemFields();
        popAddItemCode.Hide();
        popAddPO.Show();
    }

    private void DisplayItemMessage(string color, string msg)
    {
        dvItemErrMsg.Style["color"] = color;
        dvItemErrMsg.InnerHtml = msg;
    }

    private void ClearItemFields()
    {
        dvItemErrMsg.InnerHtml = lblBdgClssForItem.Text = txtItemCode.Text = txtItemDescription.Text = txtItemNotes.Text = string.Empty;
    }

    #endregion

    #region Item Inventory and Purchase History

    protected void gvItemInventory_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            Label lblLocation = (Label)e.Row.FindControl("lblLocation");
            Label lblTotalQty = (Label)e.Row.FindControl("lblTotalQty");
            GridView gvItemInventoryLot = (GridView)e.Row.FindControl("gvItemInventoryLot");
            DataTable dt = (DataTable)Session["ItemInventory"];
            DataView dv = new DataView(dt, "LocCode = '" + lblLocation.Text + "'", "LotNum", DataViewRowState.CurrentRows);

            // Display total qty in all the lots of the location
            double totQty = 0;
            for (int i = 0; i < dv.ToTable().Rows.Count; i++)
                totQty += ut.NullSafeDouble(dv.ToTable().Rows[i]["QtyLot"]);
            lblTotalQty.Text = totQty.ToString();

            //bind inner grid with list of lots of selected location
            gvItemInventoryLot.DataSource = dv;
            gvItemInventoryLot.DataBind();
        }
    }

    protected void gvItemInventoryLot_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        { }
    }

    private DataTable GetItemInventoryDetails(string itemCode)
    {
        string str = xms.getInvItemDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), itemCode);
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["ItemInventory"] = dt;
        return dt;
    }

    protected void gvItemPurchHist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

        }
        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    protected void DisplayItemPurchHistory(object sender, EventArgs e)
    {
        //Display currency symbol at unit price.
        GetCurrencySymbol();

        //load data grid
        DataTable dt = (DataTable)Session["ItemPurchHist"];
        DataView dv = dt.DefaultView;
        dv.Sort = "unitPrice ASC";
        gvItemPurchHist.DataSource = dv;
        gvItemPurchHist.DataBind();
        popItemPurchHist.Show();
        popAddPO.Show();
    }

    private void GetCurrencySymbol()
    {
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv.ToTable().Rows[0]["CodeValue1"]);
    }

    #endregion

    #region Upload Purchase Order Lines

    protected void btnUploadPOLines_Click(object sender, EventArgs e)
    {
        ClearUploadData(1);
        popUploadPO.Show();
    }

    private void ClearUploadData(int type)
    {
        dvUploadPOErr.InnerHtml = string.Empty;
        gvUploadPOLines.DataBind();
        btnSaveUploadedPO.Visible = false;
        lblUploadPOFileName.Text = string.Empty;
        if (type == 1)
            Session.Remove("dtPOLinesUpd");
    }

    protected void btnSaveUploadedPO_Click(object sender, EventArgs e)
    {
        if (Session["dtPO"] == null)
        {
            dtPO.Columns.Add("expItem");
            dtPO.Columns.Add("accountCode");
            dtPO.Columns.Add("quantity");
            dtPO.Columns.Add("packageUnit");
            dtPO.Columns.Add("unitPrice");
            dtPO.Columns.Add("preAmount");
            dtPO.Columns.Add("comments");
            dtPO.Columns.Add("budget");
            dtPO.Columns.Add("currentBalance");
            dtPO.Columns.Add("remaining");
            dtPO.Columns.Add("balAfterPO");
            dtPO.Columns.Add("shippingCost");
            dtPO.Columns.Add("taxAmount1");
            dtPO.Columns.Add("taxCalCulated");
            dtPO.Columns.Add("VendPartNo");
            dtPO.Columns.Add("TaxPercent");
            dtPO.Columns.Add("ItemCode");
            dtPO.Columns.Add("MgrGroupCode");
            dtPO.Columns.Add("DeptCode");
            dtPO.Columns.Add("DeptChgCmt");
            dtPO.Columns.Add("discountFlag");
            dtPO.Columns.Add("discount");
            dtPO.Columns.Add("PromoCode");
            dtPO.Columns.Add("reqDeliveryDate");
            dtPO.Columns.Add("qbAcctId");
            dtPO.Columns.Add("qbVendId");
            dtPO.Columns.Add("qbItemId");
        }
        else
            dtPO = (DataTable)Session["dtPO"];

        DataTable dtUpd = (DataTable)Session["dtPOLinesUpd"];

        for (int i = 0; i < dtUpd.Rows.Count; i++)
        {
            drPO = dtPO.NewRow();
            drPO["expItem"] = dtUpd.Rows[i]["BUDGETCLASSIFICATION"];
            drPO["accountCode"] = dtUpd.Rows[i]["ACCOUNTCODE"];
            drPO["quantity"] = ut.NullSafeDouble(dtUpd.Rows[i]["QUANTITY"]);
            drPO["packageUnit"] = dtUpd.Rows[i]["PACKAGE_UNIT"];
            drPO["unitPrice"] = ut.NullSafeDouble(dtUpd.Rows[i]["UNITPRICE"]).ToString("#.##");
            drPO["shippingCost"] = ut.NullSafeDouble(dtUpd.Rows[i]["SHIPCOST"]);
            //double taxPercent = chkTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
            drPO["TaxPercent"] = dtUpd.Rows[i]["TAXPERCENT"];
            drPO["preAmount"] = dtUpd.Rows[i]["LINEAMOUNT"];
            drPO["comments"] = dtUpd.Rows[i]["DESCRIPTION"];
            drPO["budget"] = dtUpd.Rows[i]["BUDGET"];
            drPO["currentBalance"] = dtUpd.Rows[i]["CURRBAL"];
            drPO["remaining"] = dtUpd.Rows[i]["REMAINING"];
            drPO["balAfterPO"] = dtUpd.Rows[i]["BALAFTRPO"];
            drPO["taxAmount1"] = dtUpd.Rows[i]["TAXAMOUNT"];
            drPO["taxCalCulated"] = (dtUpd.Rows[i]["INCLUDETAX"].ToString() == string.Empty || dtUpd.Rows[i]["INCLUDETAX"].ToString().ToLower() == "n") ? false : true;
            drPO["VendPartNo"] = dtUpd.Rows[i]["VENDPARTNUM"];
            string[] arr = new string[3];
            arr = ddlManagerEmail.SelectedItem.Text.Split(' ');
            drPO["MgrGroupCode"] = arr[2];
            drPO["DeptCode"] = dtUpd.Rows[i]["DEPARTMENTCODE"];
            drPO["DeptChgCmt"] = dtUpd.Rows[i]["COMMENTS"];
            drPO["ItemCode"] = dtUpd.Rows[i]["ITEMCODE"];
            drPO["discountFlag"] = (dtUpd.Rows[i]["INCLUDEVENDORDISC"].ToString() == string.Empty || dtUpd.Rows[i]["INCLUDEVENDORDISC"].ToString().ToLower() == "n") ? false : true;
            drPO["discount"] = dtUpd.Rows[i]["DISCOUNTPERCENT"];
            drPO["PromoCode"] = dtUpd.Rows[i]["PROMOCODE"];
            drPO["reqDeliveryDate"] = dtUpd.Rows[i]["REQUESTDELIVERYDATE"];
            drPO["qbAcctId"] = "0";
            drPO["qbVendId"] = "0";
            drPO["qbItemId"] = "0";
            dtPO.Rows.Add(drPO);
        }

        dtPO.AcceptChanges();
        Session["dtPO"] = dtPO;
        BindGridData();
        btnSave.Visible = true;
        btnSubmit.Visible = true;
        btnHSave.Visible = true;
        btnHSubmit.Visible = true;
        popUploadPO.Hide();
    }

    protected void btnUploadPOConfirm_Click(object sender, EventArgs e)
    {
        DataTable dtUpd = new DataTable();
        if (gvUploadPOLines.Rows.Count > 0)//if already uploaded and modified data in gridview
        {
            dtUpd = GetGridViewModifiedData();
        }
        else//if uploaded new excel sheet containing PO lines
        {
            dtUpd = (DataTable)Session["dtPOLinesUpd"];
        }
        ValidateUploadedPOData(dtUpd);
        popUploadPO.Show();
    }

    private DataTable GetGridViewModifiedData()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt = ((DataTable)Session["dtPOLinesUpd"]).Clone();
        foreach (GridView row in gvUploadPOLines.Rows)
        {
            //define all grid editable controls
            DropDownList ddlDept = (DropDownList)row.FindControl("ddlDept");
            TextBox txtComments = (TextBox)row.FindControl("txtComments");
            TextBox txtVendPart = (TextBox)row.FindControl("txtVendPart");
            TextBox txtRDD = (TextBox)row.FindControl("txtRDD");
            DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
            TextBox txtAccCode = (TextBox)row.FindControl("txtAccCode");
            DropDownList ddlItemCode = (DropDownList)row.FindControl("ddlItemCode");
            TextBox txtDescr = (TextBox)row.FindControl("txtDescr");
            TextBox txtQty = (TextBox)row.FindControl("txtQty");
            TextBox txtUnitPrice = (TextBox)row.FindControl("txtUnitPrice");
            TextBox txtShipCost = (TextBox)row.FindControl("txtShipCost");
            TextBox txtPackageUnit = (TextBox)row.FindControl("txtPackageUnit");
            CheckBox chkVendDisc = (CheckBox)row.FindControl("chkVendDisc");
            TextBox txtPromoCode = (TextBox)row.FindControl("txtPromoCode");
            CheckBox chkTax = (CheckBox)row.FindControl("chkTax");

            //load datatable rows with modified grid data
            dr = dt.NewRow();
            dr["DEPARTMENTCODE"] = ddlDept.SelectedValue;
            dr["COMMENTS"] = txtComments.Text;
            dr["VENDPARTNUM"] = txtVendPart.Text;
            dr["REQUESTDELIVERYDATE"] = txtRDD.Text;
            dr["BUDGETCLASSIFICATION"] = ddlBudgClss.SelectedValue;
            dr["ACCOUNTCODE"] = txtAccCode.Text;
            dr["ITEMCODE"] = ddlItemCode.SelectedValue;
            dr["DESCRIPTION"] = txtDescr.Text;
            dr["QUANTITY"] = txtQty.Text;
            dr["UNITPRICE"] = txtUnitPrice.Text;
            dr["SHIPCOST"] = txtShipCost.Text;
            dr["PACKAGE_UNIT"] = txtPackageUnit.Text;
            dr["INCLUDEVENDORDISC"] = chkVendDisc.Checked ? "Y" : "N";
            dr["PROMOCODE"] = txtPromoCode.Text;
            dr["INCLUDETAX"] = chkTax.Checked ? "Y" : "N";
            dt.Rows.Add(dr);
        }
        dt.AcceptChanges();
        Session["dtPOLinesUpd"] = dt;
        return dt;
    }

    protected void fupdPOLines_UploadedComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupdPOLines.PostedFile.FileName);
        int len = fupdPOLines.PostedFile.ContentLength;
        if (ext.ToLower() == ".xls" || ext.ToLower() == ".xlsx")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2097152 (2MB), need to be 10485760 (10MB)
            {
                string connectionString = "";
                string fileName = Path.GetFileName(fupdPOLines.PostedFile.FileName);
                string fileExtension = Path.GetExtension(fupdPOLines.PostedFile.FileName);
                string fileLocation = Server.MapPath(newPath) + "\\" + fileName;
                fupdPOLines.SaveAs(fileLocation);

                //Check whether file extension is xls or xslx
                if (fileExtension == ".xls")
                    connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
                else if (fileExtension == ".xlsx")
                    connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";
                //Create OleDB Connection and OleDb Command

                OleDbConnection con = new OleDbConnection(connectionString);
                OleDbCommand cmd = new OleDbCommand();
                cmd.CommandType = System.Data.CommandType.Text;
                cmd.Connection = con;
                OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
                DataTable dtExcelRecords = new DataTable();
                con.Open();
                DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
                string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
                cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
                dAdapter.SelectCommand = cmd;
                dAdapter.Fill(dtExcelRecords);
                con.Close();
                System.IO.File.Delete(fileLocation);
                Session["dtPOLinesUpd"] = dtExcelRecords;
            }
            else
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
        }
        else
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
    }

    protected void gvUploadPOLines_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            DropDownList ddlDept = (DropDownList)e.Row.FindControl("ddlDept");
            DropDownList ddlBudgClss = (DropDownList)e.Row.FindControl("ddlBudgClss");
            DropDownList ddlItemCode = (DropDownList)e.Row.FindControl("ddlItemCode");
            CheckBox chkVendDisc = (CheckBox)e.Row.FindControl("chkVendDisc");
            CheckBox chkTax = (CheckBox)e.Row.FindControl("chkTax");
            HiddenField hdnDeptCode = (HiddenField)e.Row.FindControl("hdnDeptCode");
            HiddenField hdnBudgClss = (HiddenField)e.Row.FindControl("hdnBudgClss");
            HiddenField hdnItemCode = (HiddenField)e.Row.FindControl("hdnItemCode");
            HiddenField hdnVendDisc = (HiddenField)e.Row.FindControl("hdnVendDisc");
            HiddenField hdnTax = (HiddenField)e.Row.FindControl("hdnTax");
            Label lblFailureMsg = (Label)e.Row.FindControl("lblFailureMsg");

            //Load Departments
            ddlDept.DataSource = LoadDeptartmentsForPOUpload();
            ddlDept.DataTextField = "Description";
            ddlDept.DataValueField = "CodeKey";
            ddlDept.DataBind();
            ddlDept.Items.Insert(0, "Please Select");
            ddlDept.Items.FindByText("Please Select").Value = "0";
            ddlDept.SelectedValue = hdnDeptCode.Value;
            //Load Departments

            //Load Budget Classifications
            DataTable dtBudgClss = GetClassifications(hdnDeptCode.Value);
            DataTable dtTempBudgClss = dtBudgClss.DefaultView.ToTable(true, "expItem", "accName");
            ddlBudgClss.DataSource = dtTempBudgClss;
            ddlBudgClss.DataTextField = "expItem";
            ddlBudgClss.DataValueField = "expItem";
            ddlBudgClss.DataBind();
            ddlBudgClss.Items.Insert(0, "Please Select");
            ddlBudgClss.Items.FindByText("Please Select").Value = "0";
            ddlBudgClss.SelectedValue = hdnBudgClss.Value;
            //Load Budget Classifications

            //Load Items
            string exp = "expitem='" + hdnBudgClss.Value + "' and itemCode <> ''";
            DataView dv = new DataView(dtBudgClss, exp, "expitem", DataViewRowState.CurrentRows);
            ddlItemCode.DataSource = dv;
            ddlItemCode.DataTextField = "ItemCode";
            ddlItemCode.DataValueField = "ItemCode";
            ddlItemCode.DataBind();
            ddlItemCode.Items.Insert(0, "Please Select");
            ddlItemCode.Items.FindByText("Please Select").Value = "0";
            ddlItemCode.SelectedValue = hdnItemCode.Value;
            //Load Items

            //check discount and tax check boxes
            chkVendDisc.Checked = (hdnVendDisc.Value == "Y" ? true : false);
            chkTax.Checked = (hdnTax.Value == "Y" ? true : false);
            //check discount and tax check boxes

            //display row in red color if any error esists
            if (!string.IsNullOrEmpty(lblFailureMsg.Text))
                e.Row.Style["background-color"] = "#FFCCCC";
            //display row in red color if any error esists
        }

        if (e.Row.RowType == DataControlRowType.Header)
        { }
    }

    private void ValidateUploadedPOData(DataTable dtUpd)
    {
        //create required columns in the temporary datatable
        if (!(dtUpd.Columns.Contains("FailureMessage")))//new column for displaying failure messages
            dtUpd.Columns.Add("FailureMessage");
        if (!(dtUpd.Columns.Contains("DISCOUNTPERCENT")))//new column for vendor discount percentage
            dtUpd.Columns.Add("DISCOUNTPERCENT");
        if (!(dtUpd.Columns.Contains("TAXPERCENT")))//new column for vendor discount percentage
            dtUpd.Columns.Add("TAXPERCENT");
        if (!(dtUpd.Columns.Contains("DISCOUNTAMOUNT")))//new column for discount amount
            dtUpd.Columns.Add("DISCOUNTAMOUNT");
        if (!(dtUpd.Columns.Contains("TAXAMOUNT")))//new column for tax amount
            dtUpd.Columns.Add("TAXAMOUNT");
        if (!(dtUpd.Columns.Contains("LINEAMOUNT")))//new column for line amount
            dtUpd.Columns.Add("LINEAMOUNT");
        if (!(dtUpd.Columns.Contains("BUDGET")))//new column for budget
            dtUpd.Columns.Add("BUDGET");
        if (!(dtUpd.Columns.Contains("CURRBAL")))//new column for current budget balance
            dtUpd.Columns.Add("CURRBAL");
        if (!(dtUpd.Columns.Contains("REMAINING")))//new column for remaining budget
            dtUpd.Columns.Add("REMAINING");
        if (!(dtUpd.Columns.Contains("BALAFTRPO")))//new column for budget balance of PO
            dtUpd.Columns.Add("BALAFTRPO");

        DataTable dtFailed = new DataTable();
        dtFailed = dtUpd.Clone();
        DateTime date = DateTime.Now;
        double qty = 0;
        double unitPrice = 0;
        double shipCost = 0;
        double noTaxAmount = 0;
        double discAmount = 0;
        double taxAmount = 0;
        double lineAmount = 0;
        for (int i = 0; i < dtUpd.Rows.Count; i++)
        {
            string[] deptList = GetDeptList();
            //validate department
            if (deptList.Contains(dtUpd.Rows[i]["DEPARTMENTCODE"].ToString()))
            {
                //validate comments if provided department is not belonging to the user
                if (dtUpd.Rows[i]["DEPARTMENTCODE"].ToString() != Session["DepartmentCode"].ToString() && string.IsNullOrEmpty(dtUpd.Rows[i]["COMMENTS"].ToString()))
                    dtUpd.Rows[i]["FailureMessage"] = "Provide Comments.";
                else
                {
                    //validate request delivery date
                    if (string.IsNullOrEmpty(dtUpd.Rows[i]["REQUESTDELIVERYDATE"].ToString()) || (DateTime.TryParse(dtUpd.Rows[i]["REQUESTDELIVERYDATE"].ToString(), out date) && Convert.ToDateTime(date) >= DateTime.Now))
                    {
                        //compare given request delivery date with current date
                        //if (Convert.ToDateTime(date) >= DateTime.Now)
                        //{
                        //get list of classifications checking whether any job is selected in PO header or not.
                        string[] ClassList = GetClassificationsList(dtUpd.Rows[i]["DEPARTMENTCODE"].ToString());
                        if (ClassList.Contains(dtUpd.Rows[i]["BUDGETCLASSIFICATION"].ToString()))
                        {
                            //vaidate account code
                            if (ValidateAccountCode(dtUpd.Rows[i]["BUDGETCLASSIFICATION"].ToString(), dtUpd.Rows[i]["ACCOUNTCODE"].ToString()))
                            {
                                //validate item
                                if (ValidateItemCode(dtUpd.Rows[i]["BUDGETCLASSIFICATION"].ToString(), dtUpd.Rows[i]["ITEMCODE"].ToString()))
                                {
                                    //validate quantity
                                    if (dtUpd.Rows[i]["QUANTITY"].ToString() != string.Empty && double.TryParse(dtUpd.Rows[i]["QUANTITY"].ToString(), out qty))
                                    {
                                        if (qty > 0)
                                        {
                                            //validate unitprice
                                            if (dtUpd.Rows[i]["UNITPRICE"].ToString() != string.Empty && double.TryParse(dtUpd.Rows[i]["UNITPRICE"].ToString(), out unitPrice) && unitPrice > 0)
                                            {

                                                //validate Shipment Cost
                                                if (string.IsNullOrEmpty(dtUpd.Rows[i]["SHIPCOST"].ToString()) || (double.TryParse(dtUpd.Rows[i]["SHIPCOST"].ToString(), out shipCost) && shipCost > 0))
                                                {
                                                    //default package/unit
                                                    if (dtUpd.Rows[i]["PACKAGE_UNIT"].ToString() == string.Empty)
                                                        dtUpd.Rows[i]["PACKAGE_UNIT"] = "EACH";

                                                    //get promocode and discount of selected vendor
                                                    string str = GetVendorPromoCode(ddlBillTo.SelectedValue);
                                                    dtUpd.Rows[i]["PROMOCODE"] = str.Split('~')[0];
                                                    dtUpd.Rows[i]["DISCOUNTPERCENT"] = str.Split('~')[1];
                                                    dtUpd.Rows[i]["TAXPERCENT"] = ut.NullSafeDouble(Session["Tax"]);
                                                    //get promocode and discount of selected vendor

                                                    //calculate amount without tax and discount
                                                    noTaxAmount = ut.NullSafeDouble(dtUpd.Rows[i]["QUANTITY"].ToString()) * ut.NullSafeDouble(dtUpd.Rows[i]["UNITPRICE"].ToString());
                                                    //calculate amount without tax and discount

                                                    //check to include vendor discount and tax
                                                    if (dtUpd.Rows[i]["INCLUDEVENDORDISC"].ToString().ToLower() == "y")
                                                    {
                                                        //calculate discount amount
                                                        discAmount = ut.NullSafeDouble(dtUpd.Rows[i]["DISCOUNTPERCENT"]) / 100;
                                                        noTaxAmount = noTaxAmount - (noTaxAmount * discAmount);
                                                    }
                                                    if (dtUpd.Rows[i]["INCLUDETAX"].ToString().ToLower() == "y")
                                                    {
                                                        //calculate get tax amount
                                                        taxAmount = ut.NullSafeDouble(Session["Tax"]) / 100;
                                                    }
                                                    //check to include vendor discount and tax

                                                    //calculate line amount
                                                    lineAmount = (noTaxAmount * taxAmount) + noTaxAmount;
                                                    dtUpd.Rows[i]["LINEAMOUNT"] = lineAmount.ToString("#.##");
                                                    //calculate line amount

                                                    //Calculate budget details
                                                    string strBudgTemp = GetBudgetDetails(dtUpd.Rows[i]["DEPARTMENTCODE"].ToString(), dtUpd.Rows[i]["ACCOUNTCODE"].ToString(),
                                                        dtUpd, i);
                                                    if (!strBudgTemp.Contains("~"))
                                                        dtUpd.Rows[i]["FailureMessage"] = strBudgTemp;
                                                    else
                                                    {
                                                        string[] arrStrBudg = strBudgTemp.Split('~');
                                                        dtUpd.Rows[i]["BUDGET"] = arrStrBudg[0];
                                                        dtUpd.Rows[i]["CURRBAL"] = arrStrBudg[1];
                                                        dtUpd.Rows[i]["REMAINING"] = arrStrBudg[2];
                                                        dtUpd.Rows[i]["BALAFTRPO"] = arrStrBudg[3];
                                                    }
                                                    //Calculate budget details
                                                }
                                                else
                                                    dtUpd.Rows[i]["FailureMessage"] = "Provide only numbers for ShipCost and should not be less than 0.";
                                            }
                                            else
                                                dtUpd.Rows[i]["FailureMessage"] = "Provide only numbers for UnitPrice and should be greater than 0.";
                                        }
                                        else
                                            dtUpd.Rows[i]["FailureMessage"] = "Provide only numbers for Quantity and should be greater than 0.";
                                    }
                                    else
                                        dtUpd.Rows[i]["FailureMessage"] = "Provide only numbers for Quantity and should be greater than 0.";
                                }
                                else
                                    dtUpd.Rows[i]["FailureMessage"] = "Item does not belong to budget classification.";
                            }
                            else
                                dtUpd.Rows[i]["FailureMessage"] = "Account not matching with budget classification.";
                        }
                        else
                            dtUpd.Rows[i]["FailureMessage"] = "Invalid Budget Classification.";
                        //}
                        //else
                        //    dtUpd.Rows[i]["FailureMessage"] = "RequestDeliveryDate should not be prior to current date.";
                    }
                    else
                        dtUpd.Rows[i]["FailureMessage"] = "Provide valid RequestDeliveryDate.";
                }
            }
            else
                dtUpd.Rows[i]["FailureMessage"] = "Invalid department.";
            dtFailed.ImportRow(dtUpd.Rows[i]);
        }
        Session["dtPOLinesUpd"] = dtUpd;
        DisplayUploadedData(dtUpd);
    }

    private DataTable LoadDeptartmentsForPOUpload()
    {
        DataTable dtFinalDept = new DataTable();
        DataTable dt = new DataTable();

        if (Session["DeptCodes"] == null)
        {
            string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["DeptCodes"] = dt;
        }
        else
            dt = (DataTable)Session["DeptCodes"];

        if (ddlJobs.SelectedValue != "0")
        {
            DataTable dtJobs = new DataTable();
            if (Session["DeptByJob"] == null)
            {
                string str = xms.getJobDetail(ddlJobs.SelectedValue, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
                List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
                dtJobs = Utility.ConvertToDataTable(lst);
                Session["DeptByJob"] = dtJobs;
            }
            else
                dtJobs = (DataTable)Session["DeptByJob"];

            DataView dvDept = dtJobs.DefaultView;
            dvDept = dvDept.ToTable(true, "DeptCode").DefaultView;

            DataTable dtDept = dt.Clone();
            string[] arrDept = dvDept.ToTable().AsEnumerable().Select(r => r.Field<string>("DeptCode")).ToArray();

            for (int i = 0; i < dt.Rows.Count; i++)
                if (arrDept.Contains(dt.Rows[i]["CodeKey"].ToString()))
                    dtDept.ImportRow(dt.Rows[i]);
            dtFinalDept = dtDept;
        }
        else
            dtFinalDept = dt;
        return dtFinalDept;
    }

    private string[] GetDeptList()
    {
        DataTable dt = LoadDeptartmentsForPOUpload();
        string[] arrFinalDept;
        arrFinalDept = dt.AsEnumerable().Select(r => r.Field<string>("CodeKey")).ToArray();
        return arrFinalDept;
    }

    private DataTable GetClassifications(string dept)
    {
        DataTable dt;
        DataTable dtv;
        DataTable dtJobs;
        DataTable dtBdgClss;
        DataTable dt1;
        string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), dept, 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        dt = Utility.ConvertToDataTable(lst);
        DataView dtview = new DataView(dt);
        //dtview.Sort = "expItem ASC";
        dtv = dtview.ToTable();
        Session["dtExpItem"] = GetHierarchicalData(dtv, "expItem");

        if (ddlJobs.SelectedValue != "0")
        {
            dtBdgClss = dtv;
            dtJobs = (DataTable)Session["DeptByJob"];
            DataTable dtCloneBdgClss = dtBdgClss.Clone();
            string[] arrAcc = dtJobs.AsEnumerable().Select(r => r.Field<string>("AccountCode")).ToArray();
            for (int i = 0; i < dtBdgClss.Rows.Count; i++)
                if (arrAcc.Contains(dtBdgClss.Rows[i]["AccountCode"]))
                    dtCloneBdgClss.ImportRow(dtBdgClss.Rows[i]);
            //dt1 = dtCloneBdgClss.DefaultView.ToTable(true, "expItem");
            dt1 = dtCloneBdgClss;
        }
        else
            dt1 = dtv;
        return dt1;
    }

    private string[] GetClassificationsList(string dept)
    {
        string[] arrFinalClss;
        DataTable dt = GetClassifications(dept);
        arrFinalClss = dt.AsEnumerable().Select(r => r.Field<string>("expItem")).ToArray();
        return arrFinalClss;
    }

    private bool ValidateAccountCode(string clss, string accCode)
    {
        bool valid = false;
        DataTable dt = (DataTable)Session["dtExpItem"];
        DataView dv = new DataView(dt, "expitem = '" + clss + "' AND accountCode = '" + accCode + "'", "expitem", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
            valid = true;
        return valid;
    }

    private bool ValidateItemCode(string expItem, string itemCode)
    {
        bool valid = false;
        DataTable dt = (DataTable)Session["dtExpItem"];
        string exp = "expitem='" + expItem + "' and itemCode <> ''";
        DataView dv = new DataView(dt, exp, "expitem", DataViewRowState.CurrentRows);
        string[] arrFinalItems = dv.ToTable().AsEnumerable().Select(r => r.Field<string>("itemCode")).ToArray();
        if (arrFinalItems.Contains(itemCode))
            valid = true;
        //if (dv.ToTable().Rows.Count > 0)
        //    valid = true;
        return valid;
    }

    private string GetVendorPromoCode(string vendor)
    {
        VendorsVO v = new VendorsVO();
        //v.vendDiscPercent
        DataTable dt = (DataTable)Session["PreferredVendorList"];
        DataView dv = new DataView(dt, "PreferredVendor = '" + vendor.Replace("'", "''") + "'", "PreferredVendor", DataViewRowState.CurrentRows);
        return dv.ToTable().Rows[0]["promoCode"].ToString() + "~" + dv.ToTable().Rows[0]["vendDiscPercent"].ToString();
    }

    private string GetBudgetDetails(string dept, string accCode, DataTable dtUpd, int rowIndex)
    {
        string budget, currBal, remBudget, balAftrPO, returnStr;
        budget = currBal = remBudget = balAftrPO = returnStr = string.Empty;
        bool validfiscalCal = false;
        //Find fiscal month from the given start date
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;
        //if (hdnYear.Value != year.ToString())
        MonthFilter(year);
        dsFiscalDate = (DataSet)Session["FiscalDate"];
        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(txtPOTripStrtDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
            validfiscalCal = true;
        }
        else
            validfiscalCal = false;
        //Find fiscal month from the given start date

        if (validfiscalCal)
        {
            //Fetch budget details by selected classification
            POBudgetVO budg = new POBudgetVO();
            budg.accountCode = accCode;
            budg.compCode = Session["CompCode"].ToString();
            budg.deptCode = dept;
            budg.orgId = Convert.ToInt32(Session["OrgID"]);
            budg.year = year;
            budg.month = tripMonth;
            var str = xms.getDeptBudgetDetails(budg);
            List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
            DataSet dsSt = new DataSet();
            dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

            string expression = "accountCode = '" + accCode + "'";
            DataView dvAccCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
            DataTable dtAcccode = dvAccCodes.ToTable();
            if (dtAcccode.Rows.Count == 0 || ut.NullSafeDouble(dtAcccode.Rows[0]["budget"].ToString()) == 0)
                returnStr = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
            else
            {
                budget = dtAcccode.Rows[0]["budget"].ToString();
                currBal = dtAcccode.Rows[0]["currentBalance"].ToString();
                remBudget = dtAcccode.Rows[0]["remaining"].ToString();

                //Calculate Amount/BalAfterPO
                double allRowsAmntVal = 0;
                foreach (DataRow row1 in dtUpd.Rows)
                    if (row1["ACCOUNTCODE"].ToString() == accCode)
                        allRowsAmntVal += ut.NullSafeDouble(row1["LINEAMOUNT"]);

                balAftrPO = (ut.NullSafeDouble(remBudget) - (ut.NullSafeDouble(allRowsAmntVal) == 0 ? ut.NullSafeDouble(dtUpd.Rows[rowIndex]["LINEAMOUNT"]) : ut.NullSafeDouble(allRowsAmntVal))).ToString();
                returnStr = ut.NullSafeDouble(budget).ToString("#.##") + "~" + ut.NullSafeDouble(currBal).ToString("#.##") + "~" +
                    ut.NullSafeDouble(remBudget).ToString("#.##") + "~" + ut.NullSafeDouble(balAftrPO).ToString("#.##");
            }
        }
        else
            returnStr = "Fiscal Calendar is not setup for this year, Please contact Admin";
        return returnStr;
    }

    private void DisplayUploadedData(DataTable dtUpd)
    {
        gvUploadPOLines.DataSource = dtUpd;
        gvUploadPOLines.DataBind();

        int cnt = 0;
        for (int i = 0; i < dtUpd.Rows.Count; i++)
            if (!string.IsNullOrEmpty(dtUpd.Rows[i]["FailureMessage"].ToString()))
                cnt++;
        if (cnt > 0)
        {
            btnSaveUploadedPO.Visible = false;
            dvUploadPOErr.Style["color"] = "Red";
            dvUploadPOErr.InnerHtml = "Please resolve the errors in the below data and click 'Upload and Validate'";
        }
        else
        {
            btnSaveUploadedPO.Visible = true;
            dvUploadPOErr.InnerHtml = string.Empty;
        }
    }

    protected void UploadDeptChanged(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((DropDownList)sender).Parent.Parent;
        DropDownList ddlDept = (DropDownList)row.FindControl("ddlDept");
        DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
        ddlBudgClss.DataSource = GetClassifications(ddlDept.SelectedValue);
        ddlBudgClss.DataTextField = "expItem";
        ddlBudgClss.DataValueField = "expItem";
        ddlBudgClss.DataBind();
        ddlBudgClss.Items.Insert(0, "Please Select");
        ddlBudgClss.Items.FindByText("Please Select").Value = "0";
        popUploadPO.Show();
    }

    protected void UploadClassChanged(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((DropDownList)sender).Parent.Parent;
        DropDownList ddlDept = (DropDownList)row.FindControl("ddlDept");
        DropDownList ddlItemCode = (DropDownList)row.FindControl("ddlItemCode");
        TextBox txtAccCode = (TextBox)row.FindControl("txtAccCode");
        Label lblBudget = (Label)row.FindControl("lblBudget");
        Label lblCurrBudg = (Label)row.FindControl("lblCurrBudg");
        Label lblRemBudg = (Label)row.FindControl("lblRemBudg");
        Label lblBalAftrPO = (Label)row.FindControl("lblBalAftrPO");
        DropDownList ddlClss = (DropDownList)sender;
        DataTable dt = GetClassifications(ddlDept.SelectedValue);
        //DataTable dt = (DataTable)Session["dtExpItem"];
        string exp = "expitem='" + ddlClss.SelectedValue + "' and itemCode <> ''";
        DataView dv = new DataView(dt, exp, "expitem", DataViewRowState.CurrentRows);

        //load account code according to selected classification
        txtAccCode.Text = dv.ToTable().Rows[0]["accountCode"].ToString();

        ddlItemCode.DataSource = dv;
        ddlItemCode.DataTextField = "ItemCode";
        ddlItemCode.DataValueField = "ItemCode";
        ddlItemCode.DataBind();
        ddlItemCode.Items.Insert(0, "Please Select");
        ddlItemCode.Items.FindByText("Please Select").Value = "0";

        //load budget details
        string strBudg = GetBudgetDetails(ddlDept.SelectedValue, txtAccCode.Text, (DataTable)Session["dtPOLinesUpd"], row.RowIndex);
        if (strBudg.Contains('~'))
        {
            string[] arrStrBudg = strBudg.Split('~');
            lblBudget.Text = arrStrBudg[0];
            lblCurrBudg.Text = arrStrBudg[1];
            lblRemBudg.Text = arrStrBudg[2];
            lblBalAftrPO.Text = arrStrBudg[3];
        }
        else
        {
            dvUploadPOErr.InnerHtml = "Selected classification does not have budget allocated.";
            dvUploadPOErr.Style["color"] = "Red";
        }
        //load budget details

        popUploadPO.Show();
    }

    protected void UploadItemChanged(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((DropDownList)sender).Parent.Parent;
        DropDownList ddlItemCode = (DropDownList)row.FindControl("ddlItemCode");
        DropDownList ddlBudgClss = (DropDownList)row.FindControl("ddlBudgClss");
        DropDownList txtDescr = (DropDownList)row.FindControl("txtDescr");

        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        string exp = "expitem='" + ddlExpItem.SelectedValue + "' and itemCode = '" + ddlItemCode.SelectedValue + "'";
        DataView dt1 = new DataView(dt, exp, "expitem", DataViewRowState.CurrentRows);
        txtDescr.Text = dt1.ToTable().Rows[0]["Description"].ToString();
        popUploadPO.Show();
    }

    protected void btnClearUploadPO_Click(object sender, EventArgs e)
    {
        ClearUploadData(1);
        popUploadPO.Show();
    }

    #endregion

    #region Item Agreement

    protected void lnkAgreement_Click(object sender, EventArgs e)
    {
        if (Session["VendItemAgreement"] != null)
        {
            DataTable dt = (DataTable)Session["VendItemAgreement"];
            txtAgreementCode.Text = dt.Rows[0]["agreementCode"].ToString();
            txtAgreementDescr.Text = dt.Rows[0]["agreementDescr"].ToString();
            txtDiscType.Text = (dt.Rows[0]["discntType"].ToString() == "0" ? "Price" : "Percentage");
            txtDiscVal.Text = dt.Rows[0]["discntValue"].ToString();
            txtValidFrom.Text = Convert.ToDateTime(dt.Rows[0]["validFrom"]).ToShortDateString();
            txtValidTo.Text = Convert.ToDateTime(dt.Rows[0]["validTo"]).ToShortDateString();
            txtListPrice.Text = dt.Rows[0]["listPrice"].ToString();
            txtOurPrice.Text = dt.Rows[0]["ourPrice"].ToString();
            chkIsVolDisc.Checked = (dt.Rows[0]["isVolumeDiscnt"].ToString() == "Y" ? true : false);
            if (chkIsVolDisc.Checked)
            {
                DataView dv = dt.DefaultView;
                dv.Sort = "fromQty ASC";
                gvAgrQtyBreaks.DataSource = dv;
                gvAgrQtyBreaks.DataBind();
                dvMsgVolDisc.Style["display"] = "block";
            }
            else
                dvMsgVolDisc.Style["display"] = "none";
            chkIsVolDisc.Enabled = false;
            lnkAgreement.Style["display"] = "block";
            popAddPO.Show();
            popAgreement.Show();
        }
    }

    #endregion
}