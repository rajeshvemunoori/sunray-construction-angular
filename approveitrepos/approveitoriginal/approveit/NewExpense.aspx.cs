using System;
using System.Collections.Generic;
//using System.ComponentModel;
//using System.Configuration;
using System.Data;
using System.Data.OleDb;
//using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
//using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using Money = System.Double;
using Shares = System.Double;

public partial class NewExpense : System.Web.UI.Page
{
    #region public variables

    public string listFilterCities = null;
    public string listFiltervendors = null;
    public char currencySymbol;

    #endregion

    #region private variables

    int reqId;
    int expId = 0;
    int x;
    int orgId = 0;
    int maxDays = 0;
    int id = 0;
    string newPath = ("ERTemp");
    string randomValue = string.Empty;
    string tripMonth = string.Empty;
    bool preApproval = false;
    double allRowsAmntVal = 0;
    private bool _refreshExp = false;
    Utility ut = new Utility();
    DataTable dt = new DataTable();
    DataRow dr;
    DataSet dsOrg = new DataSet();
    DataSet dsApEmail = new DataSet();
    DataSet dsmgrcnt = new DataSet();
    DataSet dsDrafts = new DataSet();
    DataTable dtSelDfts = new DataTable();
    DataSet dsFiscalDate = new DataSet();
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    string req, expItem, expLineNo, expDate, citiesVstd, comments, orgId1, expenseType, jobCode, phaseCode, JCatCode, compCode, purpose, preAmount, currency, autoMFlag, otherFromCity, toFromCity, otherToCity,
     sts, stsId, managerId, startDate, payMode, preApproved, actualAmount, othercity, detailsFlag, userId, masterFlag, autoFlag, agentName, bookedDate,
                fromCity, toCity, preferredVendor, itinararyNo, fromDate, toDate, accCode, lessNorm, mgrEmail, reimbursement, totalTrip, otherPlace, companyCar, outOfCity, quantity, unitPrice, pckUnit, shipCost, balAfterPO,
                taxAmount1, taxAmount2, taxAmount3, reimburse, taxCalCulated, vendPtNo, lineNo, lineSeq, csUserId, taxPercent, mgrGroupCode, itemCode, deptChngCmt, deptCode, discFlg, discPrcnt, linePromoCode, reqDelDate, onBehalfOf,
                lastUpdatedSource, qbAcctId, qbVendId, qbItemId, className, classRefId, sendToQB, priceFlag;
    #endregion

    #region NewExpense

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            hdCurrDate.Value = System.DateTime.Now.ToString("MM/dd/yyyy");

            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            else
            {
                orgId = Convert.ToInt32(Session["OrgID"]);
                if (!IsPostBack)
                {
                    Session.Remove("dataset");
                    Session.Remove("dt");
                    Session.Remove("Sectiondt");
                    Session.Remove("AddExp");
                    Session.Remove("NewEditExp");
                    Session.Remove("fStream");
                    Session.Remove("RctFileName");
                    Session.Remove("FileExt");
                    Session.Remove("AccountCodes");
                    Session.Remove("Classes");

                    //Exp Process Type
                    BindExpProcessTypes();
                    if (Session["NewReqID"] == null)
                    {
                        string strReq = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "SEQ");
                        List<CodeValueVO> lstReq = ser.Deserialize<List<CodeValueVO>>(strReq);
                        DataSet dsReq = new DataSet();
                        dsReq.Tables.Add(Utility.ConvertToDataTable(lstReq));
                        reqId = Convert.ToInt32(dsReq.Tables[0].Rows[0]["CodeValue1"]);
                        Session["NewReqID"] = reqId;
                    }
                    else
                        reqId = Convert.ToInt32(Session["NewReqID"]);
                    if (Request.QueryString.Count > 0)
                    {
                        if (Request.QueryString["sel"] == "1")
                            ddlType.SelectedValue = "ER";
                        else
                            ddlType.SelectedValue = "PA";
                        reqId = Convert.ToInt32(Session["NewReqID"]);
                    }
                    else
                    {
                        if (hdnExpProcessType.Value == "PO")
                        {
                            ScriptManager.RegisterStartupScript(this, this.GetType(), "showprogress", "ShowProgress();", true);
                            Response.Redirect("pogen.aspx");
                        }
                        else if (hdnExpProcessType.Value == "ER")
                        {
                            dvEditPA.Style["display"] = "none";
                            dvEditAmt.Style["display"] = "block";
                        }
                        else
                        {
                            dvEditPA.Style["display"] = "block";
                            dvEditAmt.Style["display"] = "none";
                        }
                    }
                    //Exp Process Type

                    string expr = "CODEID = 'MAXD'";
                    DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
                    DataTable dt = view.ToTable();
                    maxDays = Convert.ToInt32(dt.Rows[0]["CodeValue1"]);

                    hdMaxDate.Value = System.DateTime.Now.AddDays(-maxDays).ToString("MM/dd/yyyy");
                    hdMaxDays.Value = maxDays.ToString();


                    int ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
                    btnSave.Attributes.Add("onclick", "javascript:return check_New('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
                    btnSubmit.Attributes.Add("onclick", "javascript:return check_New('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
                    btnAddExpense.Attributes.Add("onclick", "javascript:return check_New('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
                    btnAddExpense.Attributes.Add("onfocus", "javascript: return validateOnBehalfOf();");
                    btnSaveExp.Attributes.Add("onclick", "javascript:return ValidateNew();");

                    var apmanagersList = xms.getManagers(Convert.ToInt32(Session["UserID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 1);
                    List<UserVO> apmanagers = ser.Deserialize<List<UserVO>>(apmanagersList);
                    DataSet dsManager = new DataSet();
                    dsManager.Tables.Add(Utility.ConvertToDataTable(apmanagers));
                    if (dsManager.Tables[0].Rows.Count > 0)
                    {
                        ddlManagerEmail.DataSource = dsManager;
                        ddlManagerEmail.DataTextField = "Email";
                        ddlManagerEmail.DataValueField = "UserID";
                        ddlManagerEmail.DataBind();
                        ddlManagerEmail.SelectedValue = Session["ManagerID"].ToString();
                    }
                    else
                        ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('There is no manager assigned to you yet. Please contact your administrator.');window.location='ViewRequest.aspx';", true);

                    //display send to QB checkbox only if QB integration is enable.
                    CheckSendToQB();
                    listFiltervendors = BindSearchPrefName(string.Empty);
                }
                else
                    reqId = Convert.ToInt32(Session["NewReqID"]);
                //listFilterCities = BindCities();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void GetCities()
    {
        if (Session["Cities"] == null)
        {
            string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "USCITIES");
            List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);
            Session["Cities"] = dt;
        }
    }

    private string BindCities()
    {
        DataTable dt = (DataTable)Session["Cities"];
        StringBuilder output = new StringBuilder();
        output.Append("[");
        for (int i = 0; i < dt.Rows.Count; ++i)
        {
            output.Append("\"" + dt.Rows[i]["CodeKey"].ToString() + "\"");

            if (i != (dt.Rows.Count - 1))
            {
                output.Append(",");
            }
        }
        output.Append("];");
        return output.ToString();
    }

    private void BindManagers()
    {
        string str = xms.getManagers(Convert.ToInt32(Session["UserID"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
        List<UserVO> lst = ser.Deserialize<List<UserVO>>(str);
        DataTable dtManager = Utility.ConvertToDataTable(lst);
        ddlManagerEmail.DataSource = dtManager;
        ddlManagerEmail.DataTextField = "Email";
        ddlManagerEmail.DataValueField = "UserID";
        ddlManagerEmail.DataBind();
        ddlManagerEmail.SelectedValue = Session["ManagerID"].ToString();
    }

    private void BindExpProcessTypes()
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        hdnExpProcessType.Value = dt1.Rows[0]["CodeKey"].ToString();

        expr = "CODEID = 'ORGEXPTYPELIST'";
        view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt = view.ToTable();
        ddlType.DataSource = dt;
        ddlType.DataTextField = "Description";
        ddlType.DataValueField = "CodeKey";
        ddlType.DataBind();
        if (Request.QueryString.Count == 0)
            ddlType.SelectedValue = hdnExpProcessType.Value;
    }

    private void BindVendors(string prefVendor, string city)
    {
        listFiltervendors = null;
        listFiltervendors = BindSearchPrefName(city);
        Session["VendorsList"] = listFiltervendors;
        hdnVendors.Value = listFiltervendors;
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "LoadVendList(" + listFiltervendors + ")", true);
    }

    private string BindSearchPrefName(string city)
    {
        //txtPrefVendor.Text = string.Empty;
        DataTable dt = null;
        string strVend = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, city);
        List<VendorsVO> productList = ser.Deserialize<List<VendorsVO>>(strVend);
        dt = Utility.ConvertToDataTable(productList);
        Session["PreferredVendorList"] = dt;
        StringBuilder output = new StringBuilder();
        output.Append("[");
        for (int i = 0; i < dt.Rows.Count; ++i)
        {
            output.Append("\"" + dt.Rows[i]["PreferredVendor"].ToString() + "\"");

            if (i != (dt.Rows.Count - 1))
            {
                output.Append(",");
            }
        }
        output.Append("];");
        return output.ToString();
    }

    protected void VendorSearch(object sender, EventArgs e)
    {
        DataTable dt = (DataTable)Session["PreferredVendorList"];
        string exp = "PreferredVendor like '%" + txtPrefVendor.Text.Replace("'", "''") + "%'";
        DataView dtv = new DataView(dt, exp, "PreferredVendor", DataViewRowState.CurrentRows);
        DataTable dt1 = dtv.ToTable();
        if (dt1.Rows.Count == 0)
        {
            popVendCreatAlert.Show();
            popup_Edit.Show();
        }
        if (dt1.Rows.Count > 0)
        {
            hdnQBVendID.Value = dt1.Rows[0]["qbVendId"].ToString();
            txtEditAgentName.Text = dt1.Rows[0]["AgentName"].ToString();
            if (txtPrefVendor.Text == string.Empty)
                txtEditItNo.Enabled = false;
            else
                txtEditItNo.Enabled = true;

            //Display attachments in line data if already exists
            if (Session["RctFileName"] != null)
                lblFileName.Text = Session["RctFileName"].ToString();

        }
        //string listFiltervendors1 = string.Empty;
        //listFiltervendors1 = Session["VendorsList"].ToString();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "dsvend = " + listFiltervendors1 + ";jq( \"#txtPrefVendor\" ).autocomplete({source: dsvend});", true);
    }

    private void BindData()
    {
        DataTable dtCodes1 = new DataTable();
        DataSet dsCodes1 = new DataSet();
        DataSet dsItems = new DataSet();
        DataTable dtCodes = new DataTable();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            Session["Codes"] = expCodes;
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
            DataTable dtTable = dsCodes1.Tables[0];
            DataView dtview = new DataView(dtTable);
            dtview.Sort = "CodeID ASC";
            dtCodes1 = dtview.ToTable();
            Session["dsCodes"] = dtCodes1;

        }
        else
            dtCodes1 = (DataTable)Session["dsCodes"];

        dtCodes = dtCodes1;

        //Classifications
        GetAccountCodeByExpenseItem(ddlAccountCodes);

        //Payment Types
        string exprPymt = "CodeID='PAYMENT'";
        DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
        ddlEditPaymentType.DataSource = viewPymt;
        ddlEditPaymentType.DataBind();
        ddlEditPaymentType.Items.Insert(0, "Please Select");
        ddlEditPaymentType.Items.FindByText("Please Select").Value = "0";

        //Cities
        txtCityVisited.Text = Session["City"].ToString();
        txtFromCity.Text = Session["City"].ToString();

        //ExpenseTypes
        string exprExpType = "CodeID='EXPTYPE'";
        DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
        ddlEditExpType.DataSource = viewExpType;
        ddlEditExpType.DataBind();
        ddlEditExpType.Items.Insert(0, "Please Select");
        ddlEditExpType.Items.FindByText("Please Select").Value = "0";

        //Max Days
        string exprMaxD = "CodeID='MAXD'";
        DataView viewMaxD = new DataView(dtCodes, exprMaxD, "CODEID", DataViewRowState.CurrentRows);
        maxDays = Convert.ToInt32(viewMaxD[0]["CodeValue1"]);
        hdMaxDate.Value = System.DateTime.Now.AddDays(-maxDays).ToString("MM/dd/yyyy");
        hdMaxDays.Value = maxDays.ToString();

        string exprPPM = "CodeID = 'PPM'";
        DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
        hdnPPM.Value = viewPPM[1]["CodeValue1"].ToString();
        hdnCPM.Value = viewPPM[0]["CodeValue1"].ToString();
        hdnCmpCar.Value = viewPPM[0]["CodeValue2"].ToString();
        hdnPrsnCar.Value = viewPPM[1]["CodeValue2"].ToString();

        //Food Tax
        string exprFt = "CodeID = 'FOODTAX'";
        DataView viewFT = new DataView(dtCodes, exprFt, "CODEID", DataViewRowState.CurrentRows);
        hdnFoodTax.Value = string.IsNullOrEmpty(viewFT[0]["CodeKey"].ToString()) ? "0" : viewFT[0]["CodeKey"].ToString();

        //CompCar
        ddlCompCar.DataSource = viewPPM;
        ddlCompCar.DataTextField = "CodeValue2";
        ddlCompCar.DataValueField = "CodeValue2";
        ddlCompCar.DataBind();

        //Jobs
        dvEditJob.Style["display"] = "none";
        dvEditPhs.Style["display"] = "none";
        dvEditJC.Style["display"] = "none";

        //classes
        GetClasses();
        //classes
    }

    private void BindJobs(DropDownList ddl)
    {
        var strJob = xms.getJobCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<JobVO> lstJob = ser.Deserialize<List<JobVO>>(strJob);
        DataSet dsJob = new DataSet();
        dsJob.Tables.Add(Utility.ConvertToDataTable(lstJob));
        ddl.DataSource = dsJob;
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
    }

    private void BindPhases(DropDownList ddlP, DropDownList ddlJ)
    {
        var strPh = xms.getPhsCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlJ.SelectedValue);
        List<JobVO> lstPh = ser.Deserialize<List<JobVO>>(strPh);
        DataSet dsPh = new DataSet();
        dsPh.Tables.Add(Utility.ConvertToDataTable(lstPh));

        ddlP.DataSource = dsPh;
        ddlP.DataBind();
        ddlP.Items.Insert(0, "Please Select");
        ddlP.Items.FindByText("Please Select").Value = "0";
    }

    private void BindCategories(DropDownList ddlC, DropDownList ddlP)
    {
        var strJC = xms.getJobCatCode(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlP.SelectedValue);
        List<JobVO> lstJC = ser.Deserialize<List<JobVO>>(strJC);
        DataSet dsJC = new DataSet();
        dsJC.Tables.Add(Utility.ConvertToDataTable(lstJC));

        ddlC.DataSource = dsJC;
        ddlC.DataBind();
        ddlC.Items.Insert(0, "Please Select");
        ddlC.Items.FindByText("Please Select").Value = "0";
    }

    private void GetClasses()
    {
        DataTable dt = new DataTable();
        if (Session["Classes"] == null)
        {
            string str = xms.getClassRef(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
            List<ImportQBClasVO> lst = ser.Deserialize<List<ImportQBClasVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["Classes"] = GetHierarchicalData(dt, "className");
        }
        else
            dt = (DataTable)Session["Classes"];

        ddlClass.DataSource = dt;
        ddlClass.DataTextField = "className";
        ddlClass.DataValueField = "classRefId";
        ddlClass.DataBind();
        ddlClass.Items.Insert(0, "Please Select");
        ddlClass.Items.FindByText("Please Select").Value = "0";
    }

    private void CheckSendToQB()
    {
        string str = xms.getIntegrationDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<IntegrationVO> lst = ser.Deserialize<List<IntegrationVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        if (dt.Rows.Count > 0)
        {
            if (dt.Rows[0]["sendtoqb"].ToString().ToLower() == "y")
            {
                ChkSendToQB.Visible = true;
                ChkSendToQB.Checked = true;
            }
            else
            {
                ChkSendToQB.Visible = false;
                ChkSendToQB.Checked = false;
            }
        }
        else
        {
            ChkSendToQB.Visible = false;
            ChkSendToQB.Checked = false;
        }
    }

    private void GetData()
    {
        gvExp.DataSource = dt;
        gvExp.DataBind();
    }

    protected void AddNewExpense(object sender, EventArgs e)
    {
        if (ddlType.SelectedValue == "PA")
        {
            id = 2;
            preApproval = true;
            dvEditPA.Style["display"] = "block";
            dvEditAmt.Style["display"] = "none";
            txtEditPreAmnt.Text = string.Empty;
            Session["PreApp"] = preApproval;
            Session.Remove("dtSelDfts");

            if (gvExp.Rows.Count == 0)
            {
                //Fetch max approval limit in the organization
                if (Session["UserSelfAppr"].ToString() == "0")
                    hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 2).ToString();
                else
                    hdnMaxApprLimit.Value = xms.getApprovalLimit(Convert.ToInt32(Session["UserID"]), 1).ToString();
            }
        }
        else if (ddlType.SelectedValue == "ER")
        {
            id = 1;
            preApproval = false;
            dvEditPA.Style["display"] = "none";
            dvEditAmt.Style["display"] = "block";
            txtEditActAmnt.Text = string.Empty;
            Session["PreApp"] = preApproval;
            hdnQBVendID.Value = hdnQBAcctID.Value = string.Empty;
            if (gvExp.Rows.Count == 0)
            {
                if (Session["AppFlag"].ToString().ToLower() == "y")
                {
                    //Fetch max approval limit in the organization
                    if (Session["UserSelfAppr"].ToString() == "0")
                        hdnMaxApprLimit.Value = xms.getApprovalLimit(ut.NullSafeInteger(Session["UserID"]), 2).ToString();
                    else
                        hdnMaxApprLimit.Value = xms.getApprovalLimit(ut.NullSafeInteger(Session["UserID"]), 1).ToString();
                }
                else
                    hdnMaxApprLimit.Value = "99999";
            }
        }

        int ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        btnSave.Attributes.Add("onclick", "javascript:return check_New('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
        btnSubmit.Attributes.Add("onclick", "javascript:return check_New('" + gvExp.ClientID + "','" + ddlTypeVar + "');");
        btnAppend.Attributes.Add("onclick", "javascript:return ValidateNew();");

        Session.Remove("Sectiondt");
        ddlType.Enabled = false;
        BindData();
        ddlEditExpType.SelectedValue = "GENERAL";
        ddlEditPaymentType.SelectedValue = "Credit Card Corporate";
        if (ddlAccountCodes.Items.Count > 0)
            ddlAccountCodes.SelectedValue = "0";
        lblPopHeading.Text = "Add New Expense";
        LnkcurrAttachments.Style["display"] = "none";
        BlockFields();
        txtEditExpDate.Text = txtTripStartDate.Text;
        txtEditFromdate.Text = txtTripStartDate.Text;
        txtEditComments.Text = string.Empty;
        txtEditTodate.Text = string.Empty;
        txtCityVisited.Text = string.Empty;
        txtFromCity.Text = string.Empty;
        txtToCity.Text = string.Empty;
        txtEditItNo.Text = string.Empty;
        txtExpCurrBal.Text = string.Empty;
        txtExpBudg.Text = string.Empty;
        txtExpRemBudg.Text = string.Empty;
        txtExpBalAfter.Text = string.Empty;
        txtEditSalesTax.Text = string.Empty;
        txtEditFoodTax.Text = string.Empty;
        dvExpError.InnerHtml = string.Empty;
        btnPrev.Visible = false;
        btnNext.Visible = false;
        btnSaveExp.Visible = false;
        btnDelete.Visible = false;
        btnAppend.Visible = true;
        DivEdit.Visible = true;
        DivView.Visible = false;
        chkReimb.Checked = false;
        ValidateMaxApprLimit();
        BindDrafts();
        AssignAttributesToBudgetFields();
        int seqId = gvExp.Rows.Count + 1;
        Session["AddExp"] = "1";
        Session["NewSeqId"] = seqId;
        Session.Remove("fStream");
        Session.Remove("RctFileName");
        Session.Remove("FileExt");
        hdnSeq1.Value = seqId.ToString();

        if (gvDrafts.Rows.Count > 0)
            lnkShowDraft.Style["display"] = "block";
        else
            lnkShowDraft.Style["display"] = "none";
        Session["NewAddedFlag"] = "1";

        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
        hdnYear.Value = dateTime.Year.ToString();

        MonthFilter(ut.NullSafeInteger(hdnYear.Value));
        popup_Edit.Show();
    }

    protected void btnAppend_Click(object sender, EventArgs e)
    {
        string str = ValidateSimilarVendForExp();
        if (str.ToLower() == "y")
        {
            popup_Edit.Show();
            popSimilarVendAlert.Show();
        }
        else
            SaveNewLine();
    }

    private void SaveNewLine()
    {
        LnkcurrAttachments.Style["display"] = "none";
        reqId = Convert.ToInt32(Session["NewReqID"]);
        int seqId = Convert.ToInt32(Session["NewSeqId"]);
        if (Session["dt"] == null)
            AddColumns();
        else
            dt = (DataTable)Session["dt"];

        /***file upload to temp directory**/
        string str = "";
        if (Session["RctFileName"] != null || Session["dtSelDfts"] != null)
            str = UploadFiles(Server.MapPath(newPath), seqId);
        else
            str = "File exists";
        /***file upload to temp directory**/

        if (str != string.Empty || Convert.ToBoolean(Session["PreApp"]) == true || hdnCodeValue6.Value.ToLower() == "y" || hdnDftCnt.Value != null)
        {
            double amnt = 0;
            DataView view = (DataView)Session["Sectiondt"];
            if (view != null)
            {
                DataTable dtCode = view.ToTable();

                if (dtCode.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    if (Convert.ToBoolean(Session["PreApp"]) == true)
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                    else
                        amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                }
                else
                {
                    if (Convert.ToBoolean(Session["PreApp"]) == true)
                        amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                    else
                        amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                }
            }
            else
            {
                if (Convert.ToBoolean(Session["PreApp"]) == true)
                    amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                else
                    amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
            }
            if (txtEditPreAmnt.Text == string.Empty)
                txtEditPreAmnt.Text = "0";

            if (txtEditActAmnt.Text == string.Empty)
                txtEditActAmnt.Text = "0";

            //Get Account Code from selected classification
            string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            //Get Account Code from selected classification
            dr = dt.NewRow();
            if (ddlEditExpType.SelectedItem.Text == "GENERAL")
            {
                dr["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text.ToUpper();
                dr["JOB_CODE"] = string.Empty;
                dr["JPHS_CODE"] = string.Empty;
                dr["JCAT_CODE"] = string.Empty;
                dr["CodeID_ET"] = ddlEditExpType.SelectedValue.ToUpper();
                dr["Code_Job"] = string.Empty;
                dr["Code_Phs"] = string.Empty;
                dr["Code_JC"] = string.Empty;
                dr["CodeID"] = ddlAccountCodes.SelectedValue;
                dr["ExpenseItem"] = arr[1].Trim();
                dr["ExpenseDate"] = txtEditExpDate.Text;
                dr["otherPlace"] = txtEditLocalLocation.Text;
                dr["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                dr["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";

                if (dvEditCV.Style["display"] == "block")
                {
                    //City text begin
                    if (txtCityVisited.Text == string.Empty)
                        dr["CitiesVisited"] = string.Empty;
                    else
                        dr["CitiesVisited"] = txtCityVisited.Text;
                    //City text end
                    dr["OtherCities"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["CitiesVisited"] = txtFromCity.Text;
                    //City text end
                    dr["OtherCities"] = string.Empty;
                }
                dr["Comments"] = txtEditComments.Text;
                dr["FileName"] = str;
                dr["RequestID"] = reqId;
                dr["ExpLineNo"] = seqId;
                dr["StateID"] = txtCityVisited.Text;
                if (Convert.ToBoolean(Session["PreApp"]) == true)
                {
                    dr["PreAmount"] = amnt;
                    dr["ActualAmount"] = 0;
                }
                else
                {
                    dr["ActualAmount"] = amnt;
                    dr["PreAmount"] = 0;
                }
                dr["PaymentID"] = ddlEditPaymentType.SelectedValue;

                if (ddlEditPaymentType.SelectedValue == "0")
                    dr["PaymentType"] = string.Empty;
                else
                    dr["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;

                //if (dvEditVendor.Style["display"] == "block")
                //{
                //    if (txtPrefVendor.Text == string.Empty)
                //        dr["PreferredVendor"] = string.Empty;
                //    else
                dr["PreferredVendor"] = txtPrefVendor.Text;
                //}
                //else
                //    dr["PreferredVendor"] = string.Empty;
                dr["AgentName"] = txtEditAgentName.Text;
                dr["ItinararyNo"] = txtEditItNo.Text;
                dr["FromDate"] = txtEditFromdate.Text;
                dr["ToDate"] = txtEditTodate.Text;

                if (dvEditFromcity.Style["display"] == "block")
                {
                    //City text begin
                    if (txtFromCity.Text == string.Empty)
                        dr["FromCity"] = string.Empty;
                    else
                        dr["FromCity"] = txtFromCity.Text;
                    //City text end
                    dr["FromOtherCity"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["FromCity"] = string.Empty;
                    //City text end
                    dr["FromOtherCity"] = string.Empty;
                }
                if (dvEditToCity.Style["display"] == "block")
                {
                    //City text begin
                    if (txtToCity.Text == string.Empty)
                        dr["toCity"] = string.Empty;
                    else
                        dr["toCity"] = txtToCity.Text;
                    //City text end
                    dr["ToOtherCity"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["toCity"] = string.Empty;
                    //City text end
                    dr["ToOtherCity"] = string.Empty;
                }
                dr["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                dr["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                dr["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                dr["AccountCode"] = arr[0].Trim();
                if (str.ToLower() == "y" || !string.IsNullOrEmpty(hdnDftCnt.Value))
                    dr["AttachmentCnt"] = "1";
                else
                    dr["AttachmentCnt"] = "0";
                dr["budget"] = ut.NullSafeDouble(txtExpBudg.Text);
                dr["currentBalance"] = ut.NullSafeDouble(txtExpCurrBal.Text);
                dr["remaining"] = ut.NullSafeDouble(txtExpRemBudg.Text);
                dr["balanceAfterpo"] = ut.NullSafeDouble(txtExpBalAfter.Text);
                dr["AccountClss"] = ddlAccountCodes.SelectedItem.Text;
                dr["qbAcctId"] = hdnQBAcctID.Value;
                dr["qbVendId"] = hdnQBVendID.Value;
                dr["salesTax"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                dr["foodTax"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                dr["className"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedItem.Text.Trim() : string.Empty);
                dr["classRefId"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedValue : string.Empty);
            }
            else
            {
                dr["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                dr["JOB_CODE"] = ddlEditJobs.SelectedItem.Text;
                dr["JPHS_CODE"] = ddlEditPhases.SelectedItem.Text;
                dr["JCAT_CODE"] = ddlEditCategories.SelectedItem.Text;
                dr["CodeID_ET"] = ddlEditExpType.SelectedValue;
                dr["Code_Job"] = ddlEditJobs.SelectedValue;
                dr["Code_Phs"] = ddlEditPhases.SelectedValue;
                dr["Code_JC"] = ddlEditCategories.SelectedValue;
                dr["CodeID"] = ddlAccountCodes.SelectedValue;
                dr["ExpenseItem"] = arr[1].Trim();
                dr["ExpenseDate"] = txtEditExpDate.Text;
                dr["otherPlace"] = txtEditLocalLocation.Text;
                dr["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                dr["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                dr["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";

                if (dvEditCV.Style["display"] == "block")
                {
                    //City text begin
                    if (txtCityVisited.Text == string.Empty)
                        dr["CitiesVisited"] = string.Empty;
                    else
                        dr["CitiesVisited"] = txtCityVisited.Text;
                    //City text end
                    dr["OtherCities"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["CitiesVisited"] = txtFromCity.Text;
                    //City text end
                    dr["OtherCities"] = string.Empty;
                    //dr["CitiesVisited"] = ddlEditFromcity.SelectedItem.Text;
                }
                dr["Comments"] = txtEditComments.Text;
                dr["FileName"] = str;
                dr["RequestID"] = reqId;
                dr["ExpLineNo"] = seqId;
                //dr["StateID"] = ddlEditCity.SelectedValue;
                dr["StateID"] = txtCityVisited.Text;
                if (Convert.ToBoolean(Session["PreApp"]) == true)
                {
                    dr["PreAmount"] = amnt;
                    dr["ActualAmount"] = 0;
                }
                else
                {
                    dr["ActualAmount"] = amnt;
                    dr["PreAmount"] = 0;
                }
                dr["PaymentID"] = ddlEditPaymentType.SelectedValue;

                if (ddlEditPaymentType.SelectedValue == "0")
                    dr["PaymentType"] = string.Empty;
                else
                    dr["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;

                if (dvEditVendor.Style["display"] == "block")
                {
                    if (txtPrefVendor.Text == string.Empty)
                        dr["PreferredVendor"] = string.Empty;
                    else
                        dr["PreferredVendor"] = txtPrefVendor.Text;
                }
                else
                    dr["PreferredVendor"] = string.Empty;

                //if (dvEditAgName.Style["display"] == "block")
                //{
                //    if (ddlEditAgName.SelectedValue == "0")
                //        dr["AgentName"] = string.Empty;
                //    else
                //        dr["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                //}
                //else
                dr["AgentName"] = txtEditAgentName.Text;

                dr["ItinararyNo"] = txtEditItNo.Text;
                dr["FromDate"] = txtEditFromdate.Text;
                dr["ToDate"] = txtEditTodate.Text;

                if (dvEditFromcity.Style["display"] == "block")
                {
                    //City text begin
                    if (txtFromCity.Text == string.Empty)
                        dr["FromCity"] = string.Empty;
                    else
                        dr["FromCity"] = txtFromCity.Text;
                    //City text end
                    dr["FromOtherCity"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["FromCity"] = string.Empty;
                    //City text end
                    dr["FromOtherCity"] = string.Empty;
                }
                if (dvEditToCity.Style["display"] == "block")
                {
                    //City text begin
                    if (txtToCity.Text == string.Empty)
                        dr["toCity"] = string.Empty;
                    else
                        dr["toCity"] = txtToCity.Text;
                    //City text end
                    dr["ToOtherCity"] = string.Empty;
                }
                else
                {
                    //City text begin
                    dr["toCity"] = string.Empty;
                    //City text end
                    dr["ToOtherCity"] = string.Empty;
                }
                dr["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                dr["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                dr["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                dr["AccountCode"] = arr[0].Trim();
                if (str.ToLower() == "y" || !string.IsNullOrEmpty(hdnDftCnt.Value))
                    dr["AttachmentCnt"] = "1";
                else
                    dr["AttachmentCnt"] = "0";
                dr["budget"] = ut.NullSafeDouble(txtExpBudg.Text);
                dr["currentBalance"] = ut.NullSafeDouble(txtExpCurrBal.Text);
                dr["remaining"] = ut.NullSafeDouble(txtExpRemBudg.Text);
                dr["balanceAfterpo"] = ut.NullSafeDouble(txtExpBalAfter.Text);
                dr["AccountClss"] = ddlAccountCodes.SelectedItem.Text;
                dr["qbAcctId"] = hdnQBAcctID.Value;
                dr["qbVendId"] = hdnQBVendID.Value;
                dr["salesTax"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                dr["foodTax"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                dr["className"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedItem.Text.Trim() : string.Empty);
                dr["classRefId"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedValue : string.Empty);
            }
            dt.Rows.Add(dr);
            dt.AcceptChanges();
            Session["dt"] = dt;
            Session.Remove("dtSelDfts");
            Session["Unload"] = true;
            this.GetData();
            ClearFields();
            btnSubmit.Visible = true;
            btnSave.Visible = true;
            ddlEditJobs.Items.Clear();
            ddlEditPhases.Items.Clear();
            ddlEditCategories.Items.Clear();
            dvEditJob.Style["display"] = "none";
            dvEditPhs.Style["display"] = "none";
            dvEditJC.Style["display"] = "none";
            popup_Edit.Hide();
        }
        else
        {
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 10MB";
            popup_Edit.Show();
        }
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        reqId = Convert.ToInt32(Session["NewReqID"]);
        dt = (DataTable)Session["dt"];
        int mFlag = 0;
        string appString = "###";
        string strOnBehalfOf = string.Empty;
        string user = Session["username"] + " " + Session["lastname"] + "(" + Session["EmpID"] + ")";
        //if (!string.IsNullOrEmpty(txtOnBehalfOf.Text))
        //{
        //    if (txtOnBehalfOf.Text.Contains(','))
        //    {
        //        string[] arrOnBehalfOf = txtOnBehalfOf.Text.Split(',');
        //        strOnBehalfOf = arrOnBehalfOf[0].Trim();
        //        string fName = strOnBehalfOf.Split(' ')[0];
        //        string lName = strOnBehalfOf.Split(' ')[1];
        //        DataSet dsUsers = (DataSet)Session["Users"];
        //        DataView dvUser = new DataView(dsUsers.Tables[0], "FIRSTNAME = '" + fName.Trim() + "' AND LASTNAME = '" + lName.Trim() +
        //            "' AND DESIGNATION = '" + arrOnBehalfOf[1].Trim() + "'", "Designation", DataViewRowState.CurrentRows);
        //        intOnBehalfOfId = ut.NullSafeInteger(dvUser.ToTable().Rows[0]["UserID"]);
        //    }
        //    else
        //    {
        strOnBehalfOf = (txtOnBehalfOf.Text == string.Empty || string.Compare(user, txtOnBehalfOf.Text) == 0) ? " " : txtOnBehalfOf.Text;
        //intOnBehalfOfId = 0;
        //    }
        //}
        //else
        //{
        //    strOnBehalfOf = " ";
        //    intOnBehalfOfId = -1;
        //}

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblExpType = (Label)row1.FindControl("lblExpType");
            Label lblExpItem = (Label)row1.FindControl("lblExpItem");
            Label lblJobs = (Label)row1.FindControl("lblJobs");
            Label lblPhases = (Label)row1.FindControl("lblPhases");
            Label lblCategories = (Label)row1.FindControl("lblCategories");
            Label lblCodeID_ET = (Label)row1.FindControl("lblCodeID_ET");
            Label lblCode_Job = (Label)row1.FindControl("lblCode_Job");
            Label lblCode_Phs = (Label)row1.FindControl("lblCode_Phs");
            Label lblCode_JC = (Label)row1.FindControl("lblCode_JC");
            Label lblCodeID = (Label)row1.FindControl("lblCodeID");
            Label lblExpDate = (Label)row1.FindControl("lblExpDate");
            Label lblCity = (Label)row1.FindControl("lblCity");
            Label lblAmnt = (Label)row1.FindControl("lblPreAmnt");
            Label lblComments = (Label)row1.FindControl("lblComments");
            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            Label lblPaymentID = (Label)row1.FindControl("lblPaymentID");
            Label lblOtherCity = (Label)row1.FindControl("lblOtherCity");
            Label lblClassification = (Label)row1.FindControl("lblClassification");
            HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");

            //Get Account code from selected classification
            string[] arr = lblClassification.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            //Get Account code from selected classification
            lblCodeID.Text = dt.Rows[row1.RowIndex]["CodeID"].ToString();
            lblCodeID_ET.Text = dt.Rows[row1.RowIndex]["CodeID_ET"].ToString();
            lblCode_Job.Text = dt.Rows[row1.RowIndex]["Code_Job"].ToString();
            lblCode_Phs.Text = dt.Rows[row1.RowIndex]["Code_Phs"].ToString();
            lblCode_JC.Text = dt.Rows[row1.RowIndex]["Code_JC"].ToString();

            if (lblActAmnt.Text == string.Empty)
                lblActAmnt.Text = "0";
            if (lblAmnt.Text == string.Empty)
                lblAmnt.Text = "0";
            if (lblCode_Job.Text == string.Empty)
                lblCode_Job.Text = " ";
            if (lblCode_Phs.Text == string.Empty)
                lblCode_Phs.Text = " ";
            if (lblCode_JC.Text == string.Empty)
                lblCode_JC.Text = " ";

            req += reqId + appString;
            expItem += arr[1].Trim() + appString;
            expLineNo += Convert.ToInt32(hdnSeq.Value) + appString;
            expDate += lblExpDate.Text + appString;
            citiesVstd += lblCity.Text + appString;
            comments += lblComments.Text + appString;
            orgId1 += Session["OrgID"].ToString() + appString;
            expenseType += lblExpType.Text + appString;
            jobCode += lblCode_Job.Text + appString;
            phaseCode += lblCode_Phs.Text + appString;
            JCatCode += lblCode_JC.Text + appString;
            compCode += Session["CompCode"].ToString() + appString;
            purpose += txtPurpose.Text + appString;
            preAmount += ut.NullSafeDouble(lblAmnt.Text) + appString;
            currency += Session["Currency"].ToString() + appString;
            sts += "Saved" + appString;
            stsId += 3 + appString;
            managerId += Convert.ToInt32(ddlManagerEmail.SelectedValue) + appString;
            startDate += txtTripStartDate.Text + appString;
            payMode += lblPaymentID.Text + appString;
            preApproved += (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2)) + appString;
            actualAmount += ut.NullSafeDouble(lblActAmnt.Text) + appString;
            othercity += (lblOtherCity.Text == string.Empty ? " " : lblOtherCity.Text) + appString;
            detailsFlag += 1 + appString;
            if (mFlag == 0)
            {
                masterFlag += 1 + appString;
                mFlag = 1;
            }
            else
                masterFlag += 0 + appString;
            accCode += dt.Rows[row1.RowIndex]["AccountCode"].ToString() + appString;
            autoFlag += 1 + appString;
            agentName += (dt.Rows[row1.RowIndex]["AgentName"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["AgentName"].ToString()) + appString;
            bookedDate += " " + appString;
            fromCity += (dt.Rows[row1.RowIndex]["FromCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromCity"].ToString()) + appString;
            otherFromCity += (dt.Rows[row1.RowIndex]["FromOtherCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromOtherCity"].ToString()) + appString;
            toCity += (dt.Rows[row1.RowIndex]["toCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["toCity"].ToString()) + appString;
            otherToCity += (dt.Rows[row1.RowIndex]["ToOtherCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ToOtherCity"].ToString()) + appString;
            preferredVendor += (dt.Rows[row1.RowIndex]["PreferredVendor"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["PreferredVendor"].ToString()) + appString;
            itinararyNo += (dt.Rows[row1.RowIndex]["ItinararyNo"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ItinararyNo"].ToString()) + appString;
            fromDate += (dt.Rows[row1.RowIndex]["FromDate"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromDate"].ToString()) + appString;
            toDate += (dt.Rows[row1.RowIndex]["ToDate"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ToDate"].ToString()) + appString;
            lessNorm += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["LessNorm"].ToString())) + appString;
            totalTrip += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["TotalTrip"].ToString())) + appString;
            reimbursement += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["Reimbt"].ToString())) + appString;
            companyCar += (dt.Rows[row1.RowIndex]["companyCar"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["companyCar"].ToString()) + appString;
            otherPlace += (dt.Rows[row1.RowIndex]["otherPlace"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["otherPlace"].ToString()) + appString;
            outOfCity += (dt.Rows[row1.RowIndex]["outOfCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["outOfCity"].ToString()) + appString;
            quantity += 0 + appString;
            unitPrice += 0 + appString;
            pckUnit += " " + appString;
            shipCost += 0 + appString;
            taxAmount1 += dt.Rows[row1.RowIndex]["salesTax"].ToString() + appString;
            taxAmount2 += dt.Rows[row1.RowIndex]["foodTax"].ToString() + appString;
            taxAmount3 += 0 + appString;
            reimburse += dt.Rows[row1.RowIndex]["Reimbursable"].ToString() + appString;
            taxCalCulated += 0 + appString;
            vendPtNo += " " + appString;
            lineSeq += 0 + appString;
            csUserId += 0 + appString;
            taxPercent += 0 + appString;
            userId += Session["UserID"].ToString() + appString;
            string[] arrMgr = new string[3];
            arrMgr = ddlManagerEmail.SelectedItem.Text.Split(' ');
            mgrGroupCode += arrMgr[2] + appString;
            itemCode += " " + appString;
            deptChngCmt += " " + appString;
            deptCode += Session["DepartmentCode"].ToString() + appString;
            discFlg += " " + appString;
            discPrcnt += "0" + appString;
            linePromoCode += " " + appString;
            balAfterPO += dt.Rows[row1.RowIndex]["balanceAfterpo"].ToString() + appString;
            reqDelDate += " " + appString;
            //onBehalfOf += (txtOnBehalfOf.Text == string.Empty ? " " : txtOnBehalfOf.Text) + appString;
            onBehalfOf += strOnBehalfOf + appString;
            lastUpdatedSource += "Web" + appString;
            qbAcctId += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["qbAcctId"].ToString()) ? "0" : dt.Rows[row1.RowIndex]["qbAcctId"].ToString()) + appString;
            qbVendId += dt.Rows[row1.RowIndex]["qbVendId"].ToString() + appString;
            qbItemId += 0 + appString;
            className += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["className"].ToString()) ? " " : dt.Rows[row1.RowIndex]["className"].ToString()) + appString;
            classRefId += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["classRefId"].ToString()) ? "0" : dt.Rows[row1.RowIndex]["classRefId"].ToString()) + appString;
            sendToQB += (ChkSendToQB.Checked ? "Y" : "N") + appString;
            priceFlag += " " + appString;
        }

        AddExpensesVO expensedetails = new AddExpensesVO();
        expensedetails.reqId = req.Substring(0, req.Length - 3);
        expensedetails.expItem = expItem.Substring(0, expItem.Length - 3);
        expensedetails.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
        expensedetails.expDate = expDate.Substring(0, expDate.Length - 3);
        expensedetails.citiesVstd = citiesVstd.Substring(0, citiesVstd.Length - 3);
        expensedetails.comments = comments.Substring(0, comments.Length - 3);
        expensedetails.orgId = orgId1.Substring(0, orgId1.Length - 3);
        expensedetails.expType = expenseType.Substring(0, expenseType.Length - 3);
        expensedetails.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        expensedetails.phaseCode = phaseCode.Substring(0, phaseCode.Length - 3);
        expensedetails.JCatCode = JCatCode.Substring(0, JCatCode.Length - 3);
        expensedetails.compCode = compCode.Substring(0, compCode.Length - 3);
        expensedetails.purpose = purpose.Substring(0, purpose.Length - 3);
        expensedetails.preAmount = preAmount.Substring(0, preAmount.Length - 3);
        expensedetails.currency = currency.Substring(0, currency.Length - 3);
        expensedetails.status = sts.Substring(0, sts.Length - 3);
        expensedetails.statusId = stsId.Substring(0, stsId.Length - 3);
        expensedetails.managerId = managerId.Substring(0, managerId.Length - 3);
        expensedetails.startDate = startDate.Substring(0, startDate.Length - 3);
        expensedetails.payMode = payMode.Substring(0, payMode.Length - 3);
        expensedetails.preApproved = preApproved.Substring(0, preApproved.Length - 3);
        expensedetails.actualAmount = actualAmount.Substring(0, actualAmount.Length - 3);
        expensedetails.othercity = othercity.Substring(0, othercity.Length - 3);
        expensedetails.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
        expensedetails.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
        expensedetails.automileageFlag = autoFlag.Substring(0, autoFlag.Length - 3);
        expensedetails.fromCity = fromCity.Substring(0, fromCity.Length - 3);
        expensedetails.toCity = toCity.Substring(0, toCity.Length - 3);
        expensedetails.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
        expensedetails.agentName = agentName.Substring(0, agentName.Length - 3);
        expensedetails.itinararyNo = itinararyNo.Substring(0, itinararyNo.Length - 3);
        expensedetails.bookedDate = bookedDate.Substring(0, bookedDate.Length - 3);
        expensedetails.fromDate = fromDate.Substring(0, fromDate.Length - 3);
        expensedetails.toDate = toDate.Substring(0, toDate.Length - 3);
        expensedetails.accountCode = accCode.Substring(0, accCode.Length - 3);
        expensedetails.reimbt = reimbursement.Substring(0, reimbursement.Length - 3);
        expensedetails.LNorm = lessNorm.Substring(0, lessNorm.Length - 3);
        expensedetails.totTrip = totalTrip.Substring(0, totalTrip.Length - 3);
        expensedetails.otherFromCity = otherFromCity.Substring(0, otherFromCity.Length - 3);
        expensedetails.otherToCity = otherToCity.Substring(0, otherToCity.Length - 3);
        expensedetails.userId = userId.Substring(0, userId.Length - 3);
        expensedetails.companyCar = companyCar.Substring(0, companyCar.Length - 3);
        expensedetails.otherPlace = otherPlace.Substring(0, otherPlace.Length - 3);
        expensedetails.outOfCity = outOfCity.Substring(0, outOfCity.Length - 3);
        expensedetails.quantity = quantity.Substring(0, quantity.Length - 3);
        expensedetails.unitPrice = unitPrice.Substring(0, unitPrice.Length - 3);
        expensedetails.packageUnit = pckUnit.Substring(0, pckUnit.Length - 3);
        expensedetails.shippingCost = shipCost.Substring(0, shipCost.Length - 3);
        expensedetails.balAfterPO = balAfterPO.Substring(0, balAfterPO.Length - 3);
        expensedetails.taxAmount1 = taxAmount1.Substring(0, taxAmount1.Length - 3);
        expensedetails.taxAmount2 = taxAmount2.Substring(0, taxAmount2.Length - 3);
        expensedetails.taxAmount3 = taxAmount3.Substring(0, taxAmount3.Length - 3);
        expensedetails.reimbursable = reimburse.Substring(0, reimburse.Length - 3);
        expensedetails.taxCalculated = taxCalCulated.Substring(0, taxCalCulated.Length - 3);
        expensedetails.vendPartno = vendPtNo.Substring(0, vendPtNo.Length - 3);
        expensedetails.polineseq = lineSeq.Substring(0, lineSeq.Length - 3);
        expensedetails.csuserid = csUserId.Substring(0, csUserId.Length - 3);
        expensedetails.taxPercent = taxPercent.Substring(0, taxPercent.Length - 3);
        expensedetails.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
        expensedetails.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        expensedetails.deptChgCmt = deptChngCmt.Substring(0, deptChngCmt.Length - 3);
        expensedetails.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        expensedetails.discount = discPrcnt.Substring(0, discPrcnt.Length - 3);
        expensedetails.discountFlag = discFlg.Substring(0, discFlg.Length - 3);
        expensedetails.promoCode = linePromoCode.Substring(0, linePromoCode.Length - 3);
        expensedetails.reqDeliveryDate = reqDelDate.Substring(0, reqDelDate.Length - 3);
        expensedetails.onBeHalfOf = onBehalfOf.Substring(0, onBehalfOf.Length - 3);
        expensedetails.lastUpdSource = lastUpdatedSource.Substring(0, lastUpdatedSource.Length - 3);
        expensedetails.qbAcctId = qbAcctId.Substring(0, qbAcctId.Length - 3);
        expensedetails.qbVendId = qbVendId.Substring(0, qbVendId.Length - 3);
        expensedetails.qbItemId = qbItemId.Substring(0, qbItemId.Length - 3);
        expensedetails.className = className.Substring(0, className.Length - 3);
        expensedetails.classRefId = classRefId.Substring(0, classRefId.Length - 3);
        expensedetails.sendtoqb = sendToQB.Substring(0, sendToQB.Length - 3);
        expensedetails.priceFlag = priceFlag.Substring(0, priceFlag.Length - 3);
        string retStr = xms.addExpense1(expensedetails);

        xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));
        Session["FromSession"] = (ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2);
        Session.Remove("dt");
        Session.Remove("Unload");
        Session.Remove("ReqID");
        Response.Redirect("ViewRequest.aspx");
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        reqId = Convert.ToInt32(Session["NewReqID"]);
        string appString = "###";

        dt = (DataTable)Session["dt"];
        int mFlag = 0;

        string strOnBehalfOf = string.Empty;
        string user = Session["username"] + " " + Session["lastname"] + "(" + Session["EmpID"] + ")";
        //if (!string.IsNullOrEmpty(txtOnBehalfOf.Text))
        //{
        //    if (txtOnBehalfOf.Text.Contains(','))
        //    {
        //        string[] arrOnBehalfOf = txtOnBehalfOf.Text.Split(',');
        //        strOnBehalfOf = arrOnBehalfOf[0].Trim();
        //        string fName = strOnBehalfOf.Split(' ')[0];
        //        string lName = strOnBehalfOf.Split(' ')[1];
        //        DataSet dsUsers = (DataSet)Session["Users"];
        //        DataView dvUser = new DataView(dsUsers.Tables[0], "FIRSTNAME = '" + fName.Trim() + "' AND LASTNAME = '" + lName.Trim() +
        //            "' AND DESIGNATION = '" + arrOnBehalfOf[1].Trim() + "'", "Designation", DataViewRowState.CurrentRows);
        //        intOnBehalfOfId = ut.NullSafeInteger(dvUser.ToTable().Rows[0]["UserID"]);
        //    }
        //    else
        //    {
        strOnBehalfOf = (txtOnBehalfOf.Text == string.Empty || string.Compare(user, txtOnBehalfOf.Text) == 0) ? " " : txtOnBehalfOf.Text;
        //        intOnBehalfOfId = 0;
        //    }
        //}
        //else
        //{
        //    strOnBehalfOf = " ";
        //    intOnBehalfOfId = -1;
        //}

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblExpType = (Label)row1.FindControl("lblExpType");
            Label lblExpItem = (Label)row1.FindControl("lblExpItem");
            Label lblJobs = (Label)row1.FindControl("lblJobs");
            Label lblPhases = (Label)row1.FindControl("lblPhases");
            Label lblCategories = (Label)row1.FindControl("lblCategories");
            Label lblCodeID_ET = (Label)row1.FindControl("lblCodeID_ET");
            Label lblCode_Job = (Label)row1.FindControl("lblCode_Job");
            Label lblCode_Phs = (Label)row1.FindControl("lblCode_Phs");
            Label lblCode_JC = (Label)row1.FindControl("lblCode_JC");
            Label lblCodeID = (Label)row1.FindControl("lblCodeID");
            Label lblExpDate = (Label)row1.FindControl("lblExpDate");
            Label lblCity = (Label)row1.FindControl("lblCity");
            Label lblAmnt = (Label)row1.FindControl("lblPreAmnt");
            Label lblComments = (Label)row1.FindControl("lblComments");
            HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");
            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            Label lblPaymentID = (Label)row1.FindControl("lblPaymentID");
            Label lblOtherCity = (Label)row1.FindControl("lblOtherCity");

            lblCodeID.Text = dt.Rows[row1.RowIndex]["CodeID"].ToString();
            lblCodeID_ET.Text = dt.Rows[row1.RowIndex]["CodeID_ET"].ToString();
            lblCode_Job.Text = dt.Rows[row1.RowIndex]["Code_Job"].ToString();
            lblCode_Phs.Text = dt.Rows[row1.RowIndex]["Code_Phs"].ToString();
            lblCode_JC.Text = dt.Rows[row1.RowIndex]["Code_JC"].ToString();
            lblCity.Text = dt.Rows[row1.RowIndex]["CitiesVisited"].ToString();
            lblOtherCity.Text = dt.Rows[row1.RowIndex]["OtherCities"].ToString();
            lblPaymentID.Text = dt.Rows[row1.RowIndex]["PaymentID"].ToString();

            if (lblActAmnt.Text == string.Empty)
                lblActAmnt.Text = "0";
            if (lblAmnt.Text == string.Empty)
                lblAmnt.Text = "0";
            if (lblCode_Job.Text == string.Empty)
                lblCode_Job.Text = " ";
            if (lblCode_Phs.Text == string.Empty)
                lblCode_Phs.Text = " ";
            if (lblCode_JC.Text == string.Empty)
                lblCode_JC.Text = " ";

            req += reqId + appString;
            expItem += lblExpItem.Text + appString;
            expLineNo += Convert.ToInt32(hdnSeq.Value) + appString;
            expDate += lblExpDate.Text + appString;
            citiesVstd += lblCity.Text + appString;
            comments += lblComments.Text + appString;
            orgId1 += Session["OrgID"].ToString() + appString;
            expenseType += lblExpType.Text + appString;
            jobCode += lblCode_Job.Text + appString;
            phaseCode += lblCode_Phs.Text + appString;
            JCatCode += lblCode_JC.Text + appString;
            compCode += Session["CompCode"].ToString() + appString;
            purpose += txtPurpose.Text + appString;
            preAmount += ut.NullSafeDouble(lblAmnt.Text) + appString;
            currency += Session["Currency"].ToString() + appString;
            sts += " " + appString;
            stsId += 0 + appString;
            managerId += Convert.ToInt32(ddlManagerEmail.SelectedValue) + appString;
            startDate += txtTripStartDate.Text + appString;
            payMode += lblPaymentID.Text + appString;
            preApproved += (ddlType.SelectedValue == "ER" ? 0 : (ddlType.SelectedValue == "PA" ? 1 : 2)) + appString;
            actualAmount += ut.NullSafeDouble(lblActAmnt.Text) + appString;
            othercity += (lblOtherCity.Text == string.Empty ? " " : lblOtherCity.Text) + appString;
            detailsFlag += 1 + appString;
            if (mFlag == 0)
            {
                masterFlag += 1 + appString;
                mFlag = 1;
            }
            else
                masterFlag += 0 + appString;
            accCode += dt.Rows[row1.RowIndex]["AccountCode"].ToString() + appString;
            autoFlag += 1 + appString;
            agentName += (dt.Rows[row1.RowIndex]["AgentName"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["AgentName"].ToString()) + appString;
            bookedDate += " " + appString;
            fromCity += (dt.Rows[row1.RowIndex]["FromCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromCity"].ToString()) + appString;
            otherFromCity += (dt.Rows[row1.RowIndex]["FromOtherCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromOtherCity"].ToString()) + appString;
            toCity += (dt.Rows[row1.RowIndex]["toCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["toCity"].ToString()) + appString;
            otherToCity += (dt.Rows[row1.RowIndex]["ToOtherCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ToOtherCity"].ToString()) + appString;
            preferredVendor += (dt.Rows[row1.RowIndex]["PreferredVendor"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["PreferredVendor"].ToString()) + appString;
            itinararyNo += (dt.Rows[row1.RowIndex]["ItinararyNo"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ItinararyNo"].ToString()) + appString;
            fromDate += (dt.Rows[row1.RowIndex]["FromDate"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["FromDate"].ToString()) + appString;
            toDate += (dt.Rows[row1.RowIndex]["ToDate"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["ToDate"].ToString()) + appString;
            lessNorm += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["LessNorm"].ToString())) + appString;
            totalTrip += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["TotalTrip"].ToString())) + appString;
            reimbursement += Convert.ToDouble(ut.NullSafeDouble(dt.Rows[row1.RowIndex]["Reimbt"].ToString())) + appString;
            companyCar += (dt.Rows[row1.RowIndex]["companyCar"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["companyCar"].ToString()) + appString;
            otherPlace += (dt.Rows[row1.RowIndex]["otherPlace"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["otherPlace"].ToString()) + appString;
            outOfCity += (dt.Rows[row1.RowIndex]["outOfCity"].ToString() == string.Empty ? " " : dt.Rows[row1.RowIndex]["outOfCity"].ToString()) + appString;
            quantity += 0 + appString;
            unitPrice += 0 + appString;
            pckUnit += " " + appString;
            shipCost += 0 + appString;
            taxAmount1 += dt.Rows[row1.RowIndex]["salesTax"].ToString() + appString;
            taxAmount2 += dt.Rows[row1.RowIndex]["foodTax"].ToString() + appString;
            taxAmount3 += 0 + appString;
            reimburse += dt.Rows[row1.RowIndex]["Reimbursable"].ToString() + appString;
            taxCalCulated += 0 + appString;
            vendPtNo += " " + appString;
            lineSeq += 0 + appString;
            csUserId += 0 + appString;
            taxPercent += 0 + appString;
            userId += Session["UserID"].ToString() + appString;

            string[] arr = new string[3];
            arr = ddlManagerEmail.SelectedItem.Text.Split('-');
            mgrGroupCode += arr[2].Trim() + appString;
            itemCode += " " + appString;
            deptChngCmt += " " + appString;
            deptCode += Session["DepartmentCode"].ToString() + appString;
            discFlg += " " + appString;
            discPrcnt += "0" + appString;
            linePromoCode += " " + appString;
            balAfterPO += dt.Rows[row1.RowIndex]["balanceAfterpo"].ToString() + appString;
            reqDelDate += " " + appString;
            //onBehalfOf += (txtOnBehalfOf.Text == string.Empty ? " " : txtOnBehalfOf.Text) + appString;
            onBehalfOf += strOnBehalfOf + appString;
            lastUpdatedSource += "Web" + appString;
            qbAcctId += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["qbAcctId"].ToString()) ? "0" : dt.Rows[row1.RowIndex]["qbAcctId"].ToString()) + appString;
            qbVendId += dt.Rows[row1.RowIndex]["qbVendId"].ToString() + appString;
            qbItemId += 0 + appString;
            className += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["className"].ToString()) ? " " : dt.Rows[row1.RowIndex]["className"].ToString()) + appString;
            classRefId += (string.IsNullOrEmpty(dt.Rows[row1.RowIndex]["classRefId"].ToString()) ? "0" : dt.Rows[row1.RowIndex]["classRefId"].ToString()) + appString;
            sendToQB += (ChkSendToQB.Checked ? "Y" : "N") + appString;
            priceFlag += " " + appString;
        }

        AddExpensesVO expensedetails = new AddExpensesVO();
        expensedetails.reqId = req.Substring(0, req.Length - 3);
        expensedetails.expItem = expItem.Substring(0, expItem.Length - 3);
        expensedetails.expLineNo = expLineNo.Substring(0, expLineNo.Length - 3);
        expensedetails.expDate = expDate.Substring(0, expDate.Length - 3);
        expensedetails.citiesVstd = citiesVstd.Substring(0, citiesVstd.Length - 3);
        expensedetails.comments = comments.Substring(0, comments.Length - 3);
        expensedetails.orgId = orgId1.Substring(0, orgId1.Length - 3);
        expensedetails.expType = expenseType.Substring(0, expenseType.Length - 3);
        expensedetails.jobCode = jobCode.Substring(0, jobCode.Length - 3);
        expensedetails.phaseCode = phaseCode.Substring(0, phaseCode.Length - 3);
        expensedetails.JCatCode = JCatCode.Substring(0, JCatCode.Length - 3);
        expensedetails.compCode = compCode.Substring(0, compCode.Length - 3);
        expensedetails.purpose = purpose.Substring(0, purpose.Length - 3);
        expensedetails.preAmount = preAmount.Substring(0, preAmount.Length - 3);
        expensedetails.currency = currency.Substring(0, currency.Length - 3);
        expensedetails.status = sts.Substring(0, sts.Length - 3);
        expensedetails.statusId = stsId.Substring(0, stsId.Length - 3);
        expensedetails.managerId = managerId.Substring(0, managerId.Length - 3);
        expensedetails.startDate = startDate.Substring(0, startDate.Length - 3);
        expensedetails.payMode = payMode.Substring(0, payMode.Length - 3);
        expensedetails.preApproved = preApproved.Substring(0, preApproved.Length - 3);
        expensedetails.actualAmount = actualAmount.Substring(0, actualAmount.Length - 3);
        expensedetails.othercity = othercity.Substring(0, othercity.Length - 3);
        expensedetails.masterFlag = masterFlag.Substring(0, masterFlag.Length - 3);
        expensedetails.detailsFlag = detailsFlag.Substring(0, detailsFlag.Length - 3);
        expensedetails.automileageFlag = autoFlag.Substring(0, autoFlag.Length - 3);
        expensedetails.fromCity = fromCity.Substring(0, fromCity.Length - 3);
        expensedetails.toCity = toCity.Substring(0, toCity.Length - 3);
        expensedetails.preferredVendor = preferredVendor.Substring(0, preferredVendor.Length - 3);
        expensedetails.agentName = agentName.Substring(0, agentName.Length - 3);
        expensedetails.itinararyNo = itinararyNo.Substring(0, itinararyNo.Length - 3);
        expensedetails.bookedDate = bookedDate.Substring(0, bookedDate.Length - 3);
        expensedetails.fromDate = fromDate.Substring(0, fromDate.Length - 3);
        expensedetails.toDate = toDate.Substring(0, toDate.Length - 3);
        expensedetails.accountCode = accCode.Substring(0, accCode.Length - 3);
        expensedetails.reimbt = reimbursement.Substring(0, reimbursement.Length - 3);
        expensedetails.LNorm = lessNorm.Substring(0, lessNorm.Length - 3);
        expensedetails.totTrip = totalTrip.Substring(0, totalTrip.Length - 3);
        expensedetails.otherFromCity = otherFromCity.Substring(0, otherFromCity.Length - 3);
        expensedetails.otherToCity = otherToCity.Substring(0, otherToCity.Length - 3);
        expensedetails.userId = userId.Substring(0, userId.Length - 3);
        expensedetails.companyCar = companyCar.Substring(0, companyCar.Length - 3);
        expensedetails.otherPlace = otherPlace.Substring(0, otherPlace.Length - 3);
        expensedetails.outOfCity = outOfCity.Substring(0, outOfCity.Length - 3);
        expensedetails.quantity = quantity.Substring(0, quantity.Length - 3);
        expensedetails.unitPrice = unitPrice.Substring(0, unitPrice.Length - 3);
        expensedetails.packageUnit = pckUnit.Substring(0, pckUnit.Length - 3);
        expensedetails.shippingCost = shipCost.Substring(0, shipCost.Length - 3);
        expensedetails.balAfterPO = balAfterPO.Substring(0, balAfterPO.Length - 3);
        expensedetails.taxAmount1 = taxAmount1.Substring(0, taxAmount1.Length - 3);
        expensedetails.taxAmount2 = taxAmount2.Substring(0, taxAmount2.Length - 3);
        expensedetails.taxAmount3 = taxAmount3.Substring(0, taxAmount3.Length - 3);
        expensedetails.reimbursable = reimburse.Substring(0, reimburse.Length - 3);
        expensedetails.taxCalculated = taxCalCulated.Substring(0, taxCalCulated.Length - 3);
        expensedetails.vendPartno = vendPtNo.Substring(0, vendPtNo.Length - 3);
        expensedetails.polineseq = lineSeq.Substring(0, lineSeq.Length - 3);
        expensedetails.csuserid = csUserId.Substring(0, csUserId.Length - 3);
        expensedetails.taxPercent = taxPercent.Substring(0, taxPercent.Length - 3);
        expensedetails.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
        expensedetails.itemCode = itemCode.Substring(0, itemCode.Length - 3);
        expensedetails.deptChgCmt = deptChngCmt.Substring(0, deptChngCmt.Length - 3);
        expensedetails.deptCode = deptCode.Substring(0, deptCode.Length - 3);
        expensedetails.discount = discPrcnt.Substring(0, discPrcnt.Length - 3);
        expensedetails.discountFlag = discFlg.Substring(0, discFlg.Length - 3);
        expensedetails.promoCode = linePromoCode.Substring(0, linePromoCode.Length - 3);
        expensedetails.reqDeliveryDate = reqDelDate.Substring(0, reqDelDate.Length - 3);
        expensedetails.onBeHalfOf = onBehalfOf.Substring(0, onBehalfOf.Length - 3);
        expensedetails.lastUpdSource = lastUpdatedSource.Substring(0, lastUpdatedSource.Length - 3);
        expensedetails.qbAcctId = qbAcctId.Substring(0, qbAcctId.Length - 3);
        expensedetails.qbVendId = qbVendId.Substring(0, qbVendId.Length - 3);
        expensedetails.qbItemId = qbItemId.Substring(0, qbItemId.Length - 3);
        expensedetails.className = className.Substring(0, className.Length - 3);
        expensedetails.classRefId = classRefId.Substring(0, classRefId.Length - 3);
        expensedetails.sendtoqb = sendToQB.Substring(0, sendToQB.Length - 3);
        expensedetails.priceFlag = priceFlag.Substring(0, priceFlag.Length - 3);
        string ret = xms.addExpense1(expensedetails);

        ddlManagerEmail.SelectedIndex = 0;
        xms.deleteAll_Temp(reqId, Convert.ToInt32(Session["OrgID"]));

        Session["FromSession"] = (ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2);
        Session.Remove("dt");
        Session.Remove("Unload");
        Session.Remove("ReqID");
        Response.Redirect("ViewRequest.aspx");
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ddlType.Enabled = true;
        ddlType.SelectedValue = "ER";
        txtTripStartDate.Text = string.Empty;
        txtPurpose.Text = string.Empty;
        txtOnBehalfOf.Text = string.Empty;
        ClearFields();
        gvExp.DataBind();
        btnSubmit.Visible = false;
        btnSave.Visible = false;
        xms.deleteAll_Temp(Convert.ToInt32(Session["NewReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session.Remove("dt");
        Session.Remove("Unload");
    }

    protected void fileUploadComplete(object sender, AjaxControlToolkit.AsyncFileUploadEventArgs e)
    {
        string ext = Path.GetExtension(fupd1.PostedFile.FileName);
        int len = fupd1.PostedFile.ContentLength;
        if (ext.ToLower() == ".png" || ext.ToLower() == ".jpg" || ext.ToLower() == ".jpeg" || ext.ToLower() == ".tiff" || ext.ToLower() == ".pdf")
        {
            if (len > 0 && len < 10485760)//currently file size is limited to 2MB, need to be 10485760 (10MB)
            {
                Session["fStream"] = fupd1.FileContent;
                Session["FileExt"] = Path.GetExtension(fupd1.PostedFile.FileName);
                Session["RctFileName"] = fupd1.PostedFile.FileName;
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of size greater than 0MB not exceeding 10MB');", true);
                //dvExpError.InnerHtml = "Please upload file of size greater than 0MB not exceeding 10MB";
                //dvExpError.Style["color"] = "Red";
            }
        }
        else
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(), "myalert", "alert('Please upload file of type .png/.jpg/.jpeg/.tiff/.pdf');", true);
            //dvExpError.InnerHtml = "Please upload file of type .png/.jpg/.jpeg/.tiff/.pdf";
            //dvExpError.Style["color"] = "Red";
        }
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

    private string UploadFiles(string path1, int expId)
    {
        string str = string.Empty;
        if (Session["RctFileName"] != null)
        {
            byte[] fileData = null;
            Random random = new Random();
            reqId = Convert.ToInt32(Session["hdnReq"]);
            int index = Session["RctFileName"].ToString().IndexOf('.');
            string fName = Session["RctFileName"].ToString().Substring(0, index);
            string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
            AttachmentVO att = new AttachmentVO();
            att.addedOn = DateTime.Now.ToShortDateString();
            att.attachmentId = 0;
            att.compCode = Session["CompCode"].ToString();
            att.expLineNo = expId;
            //att.fileName = Session["NewReqID"].ToString() + "_" + expId + "_" + Session["OrgID"].ToString() + "_" + ddlEditExpenseItem.SelectedItem.Text.Replace('/', '_') + "_" + fName + random.Next();
            att.fileName = Session["NewReqID"].ToString() + "_" + expId + "_" + Session["OrgID"].ToString() + "_" + arr[1].Trim().Replace('/', '_') + "_" + fName + random.Next();
            att.orgId = Convert.ToInt32(Session["OrgID"]);
            att.orgName = string.Empty;
            att.requestId = Convert.ToInt32(Session["NewReqID"]);
            fileData = SavedFileData();
            str = xms.addAttachmentsNew(fileData, att, ut.NullSafeInteger(hdnRctFileType.Value), 1);
        }
        return str;
    }

    private void ClearFields()
    {
        //ddlJobs.Items.Clear();
        //ddlPhases.Items.Clear();
        //ddlCategories.Items.Clear();
        //txtExpDate.Text = string.Empty;
        //txtPreAmount.Text = string.Empty;
        //txtOtherCity.Text = string.Empty;
        //txtComments.Text = string.Empty;
        //txtActAmount.Text = string.Empty;
        //ddlCities.SelectedIndex = 0;
        //ddlExpType.SelectedIndex = 0;
        //ddlPayments.SelectedIndex = 0;
        //ddlExpenseItem.SelectedIndex = 0;
        ddlEditJobs.Items.Clear();
        ddlEditPhases.Items.Clear();
        ddlEditCategories.Items.Clear();
        //txtEditOtherCity.Text = string.Empty;
        txtEditExpDate.Text = string.Empty;
        txtEditComments.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
        //ddlEditCity.SelectedIndex = 0;
        txtEditFromdate.Text = string.Empty;
        txtEditTodate.Text = string.Empty;
        //if (ddlEditPreVendor.Items.Count > 0)
        //    ddlEditPreVendor.SelectedIndex = 0;
        txtPrefVendor.Text = string.Empty;
        //if (ddlEditAgName.Items.Count > 0)
        //    ddlEditAgName.SelectedIndex = 0;
        txtEditAgentName.Text = string.Empty;
        txtEditItNo.Text = string.Empty;
        //ddlEditFromcity.SelectedIndex = 0;
        //txtEditOtherFromCity.Text = string.Empty;
        //txtEditOtherToCity.Text = string.Empty;
        //ddlEditTocity.SelectedIndex = 0;
        txtFromCity.Text = string.Empty;
        txtToCity.Text = string.Empty;
        txtCityVisited.Text = string.Empty;
        txtEditTotTrip.Text = string.Empty;
        txtEditLNorm.Text = string.Empty;
        txtEditReimbt.Text = string.Empty;
        txtEditPreAmnt.Text = string.Empty;
        txtEditActAmnt.Text = string.Empty;
    }

    private int GetSeqId()
    {
        int seq = xms.getExpLineNo(reqId, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
        return seq;
    }

    protected void gvExp_RowEditing(object sender, GridViewEditEventArgs e)
    {
    }

    protected void gvExp_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvExp.PageIndex = e.NewPageIndex;
        dt = (DataTable)Session["dt"];
        GetData();
    }

    protected void gvExp_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {

        }
    }

    protected void gvExp_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        hdnRowIndex.Value = e.RowIndex.ToString();
        popAlert.Show();
    }

    protected void gvExp_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            if (hdnSeq != null)
            {
                HiddenField lblAtt = (HiddenField)e.Row.FindControl("lblAtt");
                DataTable dsAtt = (DataTable)Session["dt"];
                if (dsAtt.Rows[e.Row.RowIndex]["AttachmentCnt"].ToString() == "1")
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }

            Label lblCity = (Label)e.Row.FindControl("lblCity");
            Label lblFromCity = (Label)e.Row.FindControl("lblFromCity");
            Label lblFromOtherCity = (Label)e.Row.FindControl("lblFromOtherCity");
            Label lblComments = (Label)e.Row.FindControl("lblComments");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");
            Label lblOtherCity = (Label)e.Row.FindControl("lblOtherCity");
            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");

            lblCity.Text = (lblCity.Text == string.Empty ? (lblFromCity.Text.ToLower() == "other" ? lblFromOtherCity.Text : lblFromCity.Text) : lblCity.Text);

            if (lblCity != null && lblCity.Text == "Other")
                lblCity.Visible = false;

            ///////Display Line in color depending budget availability
            //DataTable dsCodes = (DataTable)Session["dsCodes"];
            //string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //DataView view = new DataView(dsCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //DataTable dt = view.ToTable();
            //string lmt = dt.Rows[0]["CodeValue2"].ToString();
            //if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
            //    {
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //    }
            //}
            //else
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
            //    {
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //    }
            //}
            HiddenField hdnBalAfterPO = (HiddenField)e.Row.FindControl("hdnBalAfterPO");
            if (hdnBalAfterPO.Value.Contains("-"))
            {
                e.Row.ToolTip = "This expense item has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }

            ///////Display Line in color depending budget availability

            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
                lblExpDate.Text = lblFromDate.Text;

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
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

    protected void ddlExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlExpType")
        {
            //if (ddlExpType.SelectedValue == "JOB")
            //{
            //    dvJob.Style["display"] = "block";

            //    //BindJobs
            //    BindJobs(ddlJobs);
            //}
            //else if (ddlExpType.SelectedValue == "GENERAL")
            //{
            //    dvJob.Style["display"] = "none";
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";

            //    ddlJobs.Items.Clear();
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();
            //}
            //else
            //{
            //    ddlJobs.Items.Clear();
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();

            //    dvJob.Style["display"] = "none";
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";
            //}
            //RetainFields();
        }
        else
        {
            if (ddl.SelectedItem.Text == "JOB")
            {
                dvEditJob.Style["display"] = "block";

                //Bind Jobs
                BindJobs(ddlEditJobs);
            }
            else if (ddl.SelectedItem.Text == "GENERAL")
            {
                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";

                ddlEditJobs.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();
            }
            else
            {
                ddlEditJobs.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();

                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            RetainFields();
            RetainVendorFields();
            DivEdit.Visible = true;
            DivView.Visible = false;
            popup_Edit.Show();
        }
    }

    protected void ddlJobs_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl.ID == "ddlJobs")
        {
            //if (ddlJobs.SelectedValue == "0")
            //{
            //    ddlPhases.Items.Clear();
            //    ddlCategories.Items.Clear();
            //    dvPhs.Style["display"] = "none";
            //    dvJC.Style["display"] = "none";
            //}
            //else
            //{
            //    dvPhs.Style["display"] = "block";
            //    BindPhases(ddlPhases, ddlJobs);
            //}
            //RetainFields();
        }
        else
        {
            if (ddlEditJobs.SelectedValue == "0")
            {
                ddlEditPhases.Items.Clear();
                ddlEditCategories.Items.Clear();
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditPhs.Style["display"] = "block";
                BindPhases(ddlEditPhases, ddlEditJobs);
            }
            RetainFields();
            RetainVendorFields();
            DivEdit.Visible = true;
            DivView.Visible = false;
            popup_Edit.Show();
        }
    }

    protected void ddlPhases_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;

        if (ddl.ID == "ddlPhases")
        {
            //if (ddlPhases.SelectedValue == "0")
            //{
            //    ddlCategories.Items.Clear();
            //    dvJC.Style["display"] = "none";
            //}
            //else
            //{
            //    dvJC.Style["display"] = "block";
            //    BindCategories(ddlCategories, ddlPhases);
            //}
            //RetainFields();
        }
        else
        {
            if (ddlEditPhases.SelectedValue == "0")
            {
                ddlEditCategories.Items.Clear();
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditJC.Style["display"] = "block";
                BindCategories(ddlEditCategories, ddlEditPhases);
            }
            RetainFields();
            RetainVendorFields();
            popup_Edit.Show();
        }
    }

    private void GetAccountCodeByExpenseItem(DropDownList ddlAccountCodes)
    {
        //Load all account codes and create a corresponding a session
        DataTable dt = new DataTable();
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = Session["DepartmentCode"].ToString();
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = string.Empty;

        if (Session["AccountCodes"] == null)
        {
            string str = xms.erGetClassificDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), deptCode, "ER");
            List<ClassificationVO> lst = ser.Deserialize<List<ClassificationVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["AccountCodes"] = dt;
        }
        else
            dt = (DataTable)Session["AccountCodes"];

        //Concatenate Account Code and Classification
        if (!dt.Columns.Contains("AccountClss"))
            dt.Columns.Add("AccountClss");
        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AccountClss"] = dt.Rows[i]["accountCode"].ToString() + "--" + dt.Rows[i]["expItem"].ToString();
        //Concatenate Account Code and Classification

        if (dt.Rows.Count > 0)
        {
            dvExpError.InnerHtml = string.Empty;
            if (ddlAccountCodes.Items.Count == 0)
            {
                ddlAccountCodes.DataSource = GetHierarchicalData(dt, "AccountClss");
                ddlAccountCodes.DataBind();
                ddlAccountCodes.Items.Insert(0, "Please Select");
                ddlAccountCodes.Items.FindByText("Please Select").Value = "0";
            }
        }
        else
        {
            dvExpError.Style["color"] = "Red";
            dvExpError.InnerHtml = "No Account Codes registered.";
        }
    }

    protected void SaveAccountCode(object sender, EventArgs e)
    {

    }

    private DataView GetExpItemSections(DataTable dt)
    {
        DataTable dt1 = dt;
        dt1.DefaultView.RowFilter = "CodeID LIKE '%EXPITEMSECTION%'";
        DataTable dt2 = dt1.DefaultView.ToTable();
        dt2.DefaultView.RowFilter = "CODEKEY = '" + hdnExpItem.Value + "'";
        DataTable dt3 = dt2.DefaultView.ToTable();

        DataView view1 = dt3.DefaultView;
        view1.Sort = "CodeID Asc";
        return view1.ToTable().Rows.Count > 0 ? view1 : null;
    }

    protected void CitiesTextChanged(object sender, EventArgs e)
    {
        TextBox txtcity = sender as TextBox;
        DataView view = (DataView)Session["Sectiondt"];
        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                BindVendors(string.Empty, txtcity.Text);
                txtEditAgentName.Text = string.Empty;
                //ddlEditAgName.Items.Clear();
                RetainVendorFields();
            }
        }

        if (view != null)
        {
            DataTable dt = view.ToTable();
            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                if (chkIsOutOfCity.Checked)
                {
                    dvEditToCity.Style["display"] = "block";
                    dvLocalLocation.Style["display"] = "none";
                }
                else
                {
                    dvEditToCity.Style["display"] = "none";
                    dvLocalLocation.Style["display"] = "block";
                }
            }
        }
        popup_Edit.Show();
    }

    private void AddColumns()
    {
        dt.Columns.Add("EXP_TYPE", Type.GetType("System.String"));
        dt.Columns.Add("JOB_CODE", Type.GetType("System.String"));
        dt.Columns.Add("JPHS_CODE", Type.GetType("System.String"));
        dt.Columns.Add("JCAT_CODE", Type.GetType("System.String"));
        dt.Columns.Add("CodeID_ET", Type.GetType("System.String"));
        dt.Columns.Add("Code_Job", Type.GetType("System.String"));
        dt.Columns.Add("Code_Phs", Type.GetType("System.String"));
        dt.Columns.Add("Code_JC", Type.GetType("System.String"));
        dt.Columns.Add("CodeID", Type.GetType("System.String"));
        dt.Columns.Add("ExpenseItem", Type.GetType("System.String"));
        dt.Columns.Add("ExpenseDate", Type.GetType("System.String"));
        dt.Columns.Add("CitiesVisited", Type.GetType("System.String"));
        dt.Columns.Add("PreAmount", Type.GetType("System.String"));
        dt.Columns.Add("Comments", Type.GetType("System.String"));
        dt.Columns.Add("FileName", Type.GetType("System.String"));
        dt.Columns.Add("RequestID", Type.GetType("System.String"));
        dt.Columns.Add("ExpLineNo", Type.GetType("System.String"));
        dt.Columns.Add("StateID", Type.GetType("System.String"));
        dt.Columns.Add("ActualAmount", Type.GetType("System.String"));
        dt.Columns.Add("PaymentID", Type.GetType("System.String"));
        dt.Columns.Add("PaymentType", Type.GetType("System.String"));
        dt.Columns.Add("OtherCities", Type.GetType("System.String"));
        dt.Columns.Add("PreferredVendor", Type.GetType("System.String"));
        dt.Columns.Add("AgentName", Type.GetType("System.String"));
        dt.Columns.Add("ItinararyNo", Type.GetType("System.String"));
        dt.Columns.Add("FromDate", Type.GetType("System.String"));
        dt.Columns.Add("ToDate", Type.GetType("System.String"));
        dt.Columns.Add("FromCity", Type.GetType("System.String"));
        dt.Columns.Add("toCity", Type.GetType("System.String"));
        dt.Columns.Add("FromOtherCity", Type.GetType("System.String"));
        dt.Columns.Add("ToOtherCity", Type.GetType("System.String"));
        dt.Columns.Add("TotalTrip", Type.GetType("System.String"));
        dt.Columns.Add("LessNorm", Type.GetType("System.String"));
        dt.Columns.Add("Reimbt", Type.GetType("System.String"));
        dt.Columns.Add("AccountCode", Type.GetType("System.String"));
        dt.Columns.Add("AttachmentCnt", Type.GetType("System.String"));
        dt.Columns.Add("companyCar", Type.GetType("System.String"));
        dt.Columns.Add("otherPlace", Type.GetType("System.String"));
        dt.Columns.Add("outOfCity", Type.GetType("System.String"));
        dt.Columns.Add("Reimbursable", Type.GetType("System.String"));
        dt.Columns.Add("budget", Type.GetType("System.String"));
        dt.Columns.Add("currentBalance", Type.GetType("System.String"));
        dt.Columns.Add("remaining", Type.GetType("System.String"));
        dt.Columns.Add("balanceAfterpo", Type.GetType("System.String"));
        dt.Columns.Add("AccountClss", Type.GetType("System.String"));
        dt.Columns.Add("qbAcctId", Type.GetType("System.String"));
        dt.Columns.Add("qbVendId", Type.GetType("System.String"));
        dt.Columns.Add("salesTax", Type.GetType("System.String"));
        dt.Columns.Add("className", Type.GetType("System.String"));
        dt.Columns.Add("classRefId", Type.GetType("System.String"));
        dt.Columns.Add("foodTax", Type.GetType("System.String"));
    }

    protected void DeleteExpItem(object sender, EventArgs e)
    {
        int index = Convert.ToInt32(hdnRowIndex.Value);
        dt = (DataTable)Session["dt"];
        dt.Rows[index].Delete();
        dt.AcceptChanges();
        Session["dt"] = dt;

        GetData();
        if (gvExp.Rows.Count == 0)
        {
            btnSave.Visible = false;
            btnSubmit.Visible = false;
            ddlType.Enabled = true;
        }
        else
        {
            btnSave.Visible = true;
            btnSubmit.Visible = true;
        }
        Session["Unload"] = false;
    }

    private void RetainFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();

            //AutoMileage Fields
            if (dt.Rows[1]["CodeValue1"].ToString() == "Y")
            {
                dvEditTT.Style["display"] = "block";
                dvEditLN.Style["display"] = "block";
                dvChkOutOfCity.Style["display"] = "block";
                dvEditSalesTax.Style["display"] = "none";
                txtEditActAmnt.ReadOnly = true;
                txtEditPreAmnt.ReadOnly = true;
                chkIsOutOfCity.Checked = true;
                dvEditCompCar.Style["display"] = "block";
                ddlCompCar.SelectedValue = Session["CompCar"].ToString().ToLower() == "false" ? hdnPrsnCar.Value : hdnCmpCar.Value;
                hdnCodeValue6.Value = dt.Rows[1]["CodeValue1"].ToString();
            }
            else
            {
                dvChkOutOfCity.Style["display"] = "none";
                dvEditTT.Style["display"] = "none";
                dvEditLN.Style["display"] = "none";
                dvEditCompCar.Style["display"] = "none";
                dvEditSalesTax.Style["display"] = "block";
                txtEditActAmnt.ReadOnly = false;
                txtEditPreAmnt.ReadOnly = false;
                txtEditLocalLocation.Text = string.Empty;
                txtEditTotTrip.Text = string.Empty;
                txtEditLNorm.Text = string.Empty;
                hdnCodeValue6.Value = string.Empty;
            }
            //ExpenseDate Fields
            if (dt.Rows[0]["CodeValue2"].ToString() == "Y")
            {
                dvEditED.Style["display"] = "block";
                hdnCodeValue2.Value = dt.Rows[0]["CodeValue2"].ToString();
            }
            else
            {
                dvEditED.Style["display"] = "none";
                txtEditExpDate.Text = string.Empty;
                hdnCodeValue2.Value = string.Empty;
            }

            //From/To Date Fields
            if (dt.Rows[0]["CodeValue3"].ToString() == "Y")
            {
                dvEditFD.Style["display"] = "block";
                dvEditTD.Style["display"] = "block";
                hdnCodeValue3.Value = dt.Rows[0]["CodeValue3"].ToString();
            }
            else
            {
                dvEditFD.Style["display"] = "none";
                dvEditTD.Style["display"] = "none";
                txtEditFromdate.Text = string.Empty;
                txtEditTodate.Text = string.Empty;
                hdnCodeValue3.Value = string.Empty;
            }

            //CitiesVisited Fields
            if (dt.Rows[0]["CodeValue4"].ToString() == "Y")
            {
                dvEditCV.Style["display"] = "block";
                hdnCodeValue4.Value = dt.Rows[0]["CodeValue4"].ToString();
                if (Session["City"].ToString() == "")
                    txtCityVisited.Text = string.Empty;
                else
                    txtCityVisited.Text = Session["City"].ToString();
                if (lblPopHeading.Text.ToLower().Contains("new"))
                {
                    DataView view1 = (DataView)Session["Sectiondt"];
                    if (view1 != null)
                    {
                        DataTable dt1 = view1.ToTable();
                        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                        {
                            BindVendors(txtPrefVendor.Text, txtCityVisited.Text);
                            txtEditAgentName.Text = string.Empty;
                            //ddlEditAgName.Items.Clear();
                            RetainVendorFields();
                        }
                    }
                }
                //}
            }
            else
            {
                dvEditCV.Style["display"] = "none";
                hdnCodeValue4.Value = string.Empty;
            }

            //From/To City Fields
            if (dt.Rows[0]["CodeValue5"].ToString() == "Y")
            {
                dvEditFromcity.Style["display"] = "block";
                dvEditToCity.Style["display"] = "block";
                hdnCodeValue5.Value = dt.Rows[0]["CodeValue5"].ToString();
                if (Session["City"].ToString() == "")
                    txtCityVisited.Text = string.Empty;
                else
                    txtFromCity.Text = Session["City"].ToString();
                if (lblPopHeading.Text.ToLower().Contains("new"))
                {
                    DataView view1 = (DataView)Session["Sectiondt"];
                    if (view1 != null)
                    {
                        DataTable dt1 = view1.ToTable();
                        if (dt1.Rows[0]["CodeValue1"].ToString() == "Y")
                        {
                            BindVendors(txtPrefVendor.Text, txtFromCity.Text);
                            txtEditAgentName.Text = string.Empty;
                            //ddlEditAgName.Items.Clear();
                            RetainVendorFields();
                        }
                    }
                }
                //}
            }
            else
            {
                dvEditFromcity.Style["display"] = "none";
                dvEditToCity.Style["display"] = "none";
                hdnCodeValue5.Value = string.Empty;
            }
        }
        else
        {
            txtEditActAmnt.Enabled = true;
            if (Session["TestExp"] == "1")
            {
                dvEditED.Style["display"] = "block";
                hdnCodeValue2.Value = "Y";
            }
            else
            {
                dvEditED.Style["display"] = "none";
                hdnCodeValue2.Value = string.Empty;
            }
            dvEditFD.Style["display"] = "none";
            dvEditTD.Style["display"] = "none";
            if (Session["TestExp"] == "1")
            {
                hdnCodeValue4.Value = "Y";
                dvEditCV.Style["display"] = "block";
            }
            else
            {
                hdnCodeValue4.Value = string.Empty;
                dvEditCV.Style["display"] = "none";
            }
            dvEditFromcity.Style["display"] = "none";
            dvEditToCity.Style["display"] = "none";
            dvEditTT.Style["display"] = "none";
            dvEditLN.Style["display"] = "none";
            dvChkOutOfCity.Style["display"] = "none";
            dvEditCompCar.Style["display"] = "none";
            dvLocalLocation.Style["display"] = "none";
            hdnCodeValue1.Value = string.Empty;
            hdnCodeValue3.Value = string.Empty;
            hdnCodeValue5.Value = string.Empty;
            hdnCodeValue6.Value = string.Empty;
        }
    }

    private void RetainVendorFields()
    {
        DataView view = (DataView)Session["Sectiondt"];

        if (view != null)
        {
            DataTable dt = view.ToTable();
            //if (dt.Rows[0]["CodeValue1"].ToString() == "Y" && ddlEditPreVendor.Items.Count > 1)
            if (dt.Rows[0]["CodeValue1"].ToString() == "Y")
            {
                dvEditVendor.Style["display"] = "block";
                dvEditAgName.Style["display"] = "block";
                dvEditItNo.Style["display"] = "block";
                hdnCodeValue1.Value = dt.Rows[0]["CodeValue1"].ToString();
            }
            else
            {
                dvEditVendor.Style["display"] = "none";
                dvEditAgName.Style["display"] = "none";
                dvEditItNo.Style["display"] = "none";
                hdnCodeValue1.Value = string.Empty;
            }
        }
        else
        {
            dvEditVendor.Style["display"] = "none";
            dvEditAgName.Style["display"] = "none";
            dvEditItNo.Style["display"] = "none";
        }
    }

    private void BlockFields()
    {
        dvEditFromcity.Style["display"] = "none";
        dvEditToCity.Style["display"] = "none";
        dvEditFD.Style["display"] = "none";
        dvEditTD.Style["display"] = "none";
        dvEditED.Style["display"] = "none";
        dvEditCV.Style["display"] = "none";
        dvEditTT.Style["display"] = "none";
        dvEditLN.Style["display"] = "none";
        dvEditReimbt.Style["display"] = "none";
        // dvEditFromOther.Style["display"] = "none";
        //dvEditToOther.Style["display"] = "none";
        dvEditVendor.Style["display"] = "none";
        dvEditAgName.Style["display"] = "none";
        dvEditItNo.Style["display"] = "none";
        //dvEditOtherCity.Style["display"] = "none";

    }

    private void BlockViewFields()
    {
        dvEditVPreVendor.Style["display"] = "none";
        dvEditVAgName.Style["display"] = "none";
        dvEditVItNo.Style["display"] = "none";
        dvEditVED.Style["display"] = "none";
        dvEditVCV.Style["display"] = "none";
        //SpVOthercity.Style["display"] = "none";
        dvEditVFromcity.Style["display"] = "none";
        //dvEditVFromOther.Style["display"] = "none";
        dvEditVToCity.Style["display"] = "none";
        //dvEditVToOther.Style["display"] = "none";
        dvEditVFD.Style["display"] = "none";
        dvEditVTD.Style["display"] = "none";
        dvEditVTT.Style["display"] = "none";
        dvEditVLN.Style["display"] = "none";
        dvEditVReimbt.Style["display"] = "none";
        dvEditVPA.Style["display"] = "none";
    }

    private void ValidateMaxApprLimit()
    {
        double totPreAmnt = 0;
        double totActAmnt = 0;
        if (gvExp.Rows.Count > 0)
        {
            foreach (GridViewRow row in gvExp.Rows)
            {
                Label lblPreAmnt = (Label)row.FindControl("lblPreAmnt");
                totPreAmnt += ut.NullSafeDouble(lblPreAmnt.Text);
                Label lblActAmnt = (Label)row.FindControl("lblActAmnt");
                totActAmnt += ut.NullSafeDouble(lblActAmnt.Text);
            }
        }
        hdnTotalActAmnt.Value = totActAmnt.ToString();
        hdnTotalPreAmnt.Value = totPreAmnt.ToString();
        int ddlTypevar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        hdnCurrExpAmnt.Value = ddlTypevar == 1 ? ut.NullSafeDouble(txtEditPreAmnt.Text).ToString() : ut.NullSafeDouble(txtEditActAmnt.Text).ToString();
    }

    protected void CreateVendor(object sender, EventArgs e)
    {
        //btnVendSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendorNew();");
        btnVendSave.Attributes.Add("onclick", "javascript:return ValidatePrefVendor();");
        txtPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtPhone', 'dvErrMsg');");
        txtVendAltPhone.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtVendAltPhone', 'dvErrMsg');");
        txtAgentPh.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('txtAgentPh', 'dvErrMsg');");
        if (dvEditCV.Style["display"] == "block")
            txtVendCity.Text = txtCityVisited.Text;
        else if (dvEditFromcity.Style["display"] == "block")
            txtVendCity.Text = txtFromCity.Text;
        txtVendName.Text = txtPrefVendor.Text;
        dvSysOrders.Style["display"] = "none";
        ScriptManager.RegisterStartupScript(this, this.GetType(), "GetVendNum", "getVendCode();", true);
        txtVendName.Focus();
        BindStatesAndCountry();
        BindCurrencyAndPayTerms();

        //Display attachments in line data if already exists
        if (Session["RctFileName"] != null)
            lblFileName.Text = Session["RctFileName"].ToString();

        popAddVendor.Show();
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
        txtVendCity.Text = string.Empty;
        lblVendNo.Text = hdnVendCode.Value;
        txtVendCity.Focus();
        popAddVendor.Show();
    }

    protected void btnVendClose_Click(object sender, EventArgs e)
    {
        //Display attachments in line data if already exists
        if (Session["RctFileName"] != null)
            lblFileName.Text = Session["RctFileName"].ToString();

        txtPrefVendor.Text = string.Empty;
        popAddVendor.Hide();
        popup_Edit.Show();
    }

    protected void btnVendNo_Click(object sender, EventArgs e)
    {
        //string listFiltervendors1 = string.Empty;
        //listFiltervendors1 = Session["VendorsList"].ToString();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", " var dsvend=null; dsvend = " + listFiltervendors1 + ";jq( \"#txtPrefVendor\" ).autocomplete({source: dsvend});", true);
        txtPrefVendor.Text = string.Empty;
        txtPrefVendor.Focus();

        //Display attachments in line data if already exists
        if (Session["RctFileName"] != null)
            lblFileName.Text = Session["RctFileName"].ToString();

        popup_Edit.Show();
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
        vend.isPreferVend = "N";
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
        //vend.expenseItem = string.Empty;
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
        //vend.state = ddlRgnCode.SelectedValue;
        //vend.country = ddlCountry.SelectedValue;
        //vend.promoCode = txtPromoCode.Text;
        //vend.vendDiscPercent = txtVendDisc.Text == string.Empty ? 0 : Convert.ToInt32(txtVendDisc.Text);
        //vend.startDate = txtStartDate.Text;
        //vend.expiryDate = txtExpiryDate.Text;
        //vend.emailFlag = chkSysOrders.Checked == true ? 1 : 0;
        //vend.vendorEmail = txtEmailFax.Text;
        //vend.isPreferVend = "N";
        string ret = xms.addPreferredVend(vend);
        if (ret.ToLower().Contains("succes"))
        {
            dvExpError.InnerHtml = ret;
            Session["VenSaved"] = "1";
            dvExpError.Style["color"] = "Green";
            Session["NVend"] = txtVendName.Text;
            BindVendors(string.Empty, txtVendCity.Text);

            DataTable dt = (DataTable)Session["PreferredVendorList"];
            string exp = "PreferredVendor like '%" + Session["NVend"].ToString().Replace("'", "''") + "%'";
            DataView dtv = new DataView(dt, exp, "PreferredVendor", DataViewRowState.CurrentRows);
            DataTable dt1 = dtv.ToTable();
            if (dt1.Rows.Count > 0)
            {
                hdnQBVendID.Value = dt1.Rows[0]["qbVendId"].ToString();
                txtEditAgentName.Text = dt1.Rows[0]["AgentName"].ToString();
            }
            txtPrefVendor.Text = Session["NVend"].ToString();
            Session.Remove("NVend");

            //Display attachments in line data if already exists
            if (Session["RctFileName"] != null)
                lblFileName.Text = Session["RctFileName"].ToString();

            popup_Edit.Show();
            popAddVendor.Hide();
        }
        else
        {
            dvErrMsg.InnerHtml = ret;
            dvExpError.Style["color"] = "Red";
            popAddVendor.Show();
        }
    }

    protected void btnAddOnBehalfOf_Click(object sender, EventArgs e)
    {
        string onBehalfOf = txtOnBehalfOf.Text + "(external)";
        VendorsVO vend = new VendorsVO();
        vend.addedBy = Convert.ToInt32(Session["UserID"]);
        vend.agentName = string.Empty;
        vend.agentPhoneNo = string.Empty;
        vend.city = string.Empty;
        vend.compCode = Session["CompCode"].ToString();
        vend.expenseItem = string.Empty;
        vend.modifiedBy = Convert.ToInt32(Session["UserID"]);
        vend.orgId = Session["OrgID"].ToString();
        vend.preferagent = string.Empty;
        vend.preference = string.Empty;
        vend.preferredVendor = onBehalfOf;
        vend.type = 1;
        vend.vendAddress1 = string.Empty;
        vend.vendAddress2 = string.Empty;
        vend.vendAddress3 = string.Empty;
        vend.vendContact = string.Empty;
        vend.vendorno = string.Empty;
        vend.vendorId = "0";
        vend.vendPhoneNo = string.Empty;
        vend.vendZipCode = string.Empty;
        vend.promoCode = string.Empty;
        vend.vendDiscPercent = 0;
        vend.startDate = string.Empty;
        vend.expiryDate = string.Empty;
        vend.emailFlag = 0;
        vend.vendorEmail = string.Empty;
        vend.isPreferVend = "N";
        string ret = xms.addPreferredVend(vend);
        if (ret.ToLower().Contains("succes"))
        {
            Session.Remove("PreferredVendorList");
            BindVendors(string.Empty, string.Empty);
            txtOnBehalfOf.Text = onBehalfOf;
            dvError.Style["color"] = "Green";
        }
        else
            dvError.Style["color"] = "Red";
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

    [WebMethod]
    public static string[] searchCity(string cityname)
    {
        XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
        JavaScriptSerializer ser = new JavaScriptSerializer();
        string str = xms.searchCity(cityname);
        List<OrgListVO> cityList = ser.Deserialize<List<OrgListVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(cityList);
        string[] arr = new string[dt.Rows.Count];
        for (int i = 0; i < dt.Rows.Count; i++)
            arr[i] = dt.Rows[i]["City"].ToString();
        return arr;
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        Session["SeqIdForAtt"] = hdnSeq.Value;
        //dvAtt.InnerHtml = 
        Attachments(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        btnDeleteSelected.Attributes.Add("onclick", "javascript:return CheckAttDel();");
        popup_Att.Show();
    }

    private string Attachments(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["NewReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        Session["AttchList"] = ds;
        string str1 = ds.Tables[0].Rows.Count.ToString();
        return str1;
    }

    protected void gvAttchmnts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmnt");
            //System.Web.UI.WebControls.Image imgAttchmnt = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgAttchmnt");
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

            CheckBox chkDelAtt = (CheckBox)e.Row.FindControl("chkDelAtt");
            if (ds.Tables[0].Rows.Count == 1)
                chkDelAtt.Visible = false;
            else
                chkDelAtt.Visible = true;

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
        ImageButton img = (ImageButton)sender;
        if (img.ID == "imgAttchmnt")
            popup_Att.Show();
        else if (img.ID == "imgDraft")
            popDraftsAtt.Show();
    }

    protected void btnAttClose_Click(object sender, EventArgs e)
    {
        popup_Att.Hide();
    }

    protected void DisplayLineAttachments(object sender, EventArgs e)
    {
        Attachments(Convert.ToInt32(hdnSeq1.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        //popup.Show();
        popup_Edit.Show();
        popup_Att.Show();
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void DelAtt(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnattId = (HiddenField)row.Cells[0].FindControl("hdnattId");
        HiddenField hdnAttOrgName = (HiddenField)row.Cells[0].FindControl("hdnAttOrgName");
        HiddenField hdnAttName = (HiddenField)row.Cells[0].FindControl("hdnAttName");
        Session["hdnattId"] = hdnattId.Value;
        Session["hdnAttOrgName"] = hdnAttOrgName.Value;
        Session["hdnAttName"] = hdnAttName.Value;
        popup_Att.Show();
        popup_Edit.Show();
        popDelAtt.Show();
    }

    protected void ConfirmDelete(object sender, EventArgs e)
    {
        string attId = string.Empty;
        string dftId = string.Empty;
        string attPrps = string.Empty;

        string[] arrAttPrps = hdnAttIdsRet.Value.TrimStart('`').Split('`');
        string[] arrPurpose = new string[arrAttPrps.Length];
        string[] arrAttId = new string[arrAttPrps.Length];

        for (int i = 0; i < arrAttPrps.Length; i++)
        {
            string[] arr = new string[2];
            arr = arrAttPrps[i].Split('~');
            arrPurpose[i] = arr[1];
        }

        for (int i = 0; i < arrAttPrps.Length; i++)
        {
            string[] arr = new string[2];
            arr = arrAttPrps[i].Split('~');
            arrAttId[i] = arr[0];
        }

        foreach (GridViewRow row in gvAttchmnts.Rows)
        {
            CheckBox chkDelAtt = (CheckBox)row.FindControl("chkDelAtt");
            HiddenField hdnattId = (HiddenField)row.FindControl("hdnattId");
            if (chkDelAtt.Checked)
            {
                if (arrAttId.Contains(hdnattId.Value))
                {
                    for (int i = 0; i < arrAttPrps.Length; i++)
                    {
                        if (hdnattId.Value == arrAttId[i])
                        {
                            attPrps += arrAttPrps[i] + "`";
                            dftId += arrAttId[i] + "~";
                        }
                    }
                }
                else
                    attId += hdnattId.Value + "~";
            }
        }

        attPrps = attPrps.TrimEnd('`');
        dftId = dftId.TrimEnd('~');
        attId = attId.TrimEnd('~');
        string retStr1 = string.Empty;
        string retStr = string.Empty;
        if (dftId != string.Empty)
            retStr1 = xms.deleteMulAttachment(dftId, 1, attPrps, 0, 0, string.Empty);
        retStr = xms.deleteMulAttachment(attId, 2, string.Empty, 0, 0, string.Empty);
        if (retStr.ToLower().Contains("succes"))
        {
            dvAtt.InnerText = retStr;
            dvAtt.Style["color"] = "Green";
            Attachments(Convert.ToInt32(Session["SeqIdForAtt"]));
            ds = (DataSet)Session["AttchList"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                gvAttchmnts.DataSource = ds;
                gvAttchmnts.DataBind();
                popup_Att.Show();
            }
            else
                popup_Att.Hide();
        }
        else
        {
            dvAtt.InnerText = "An error occured while deleting attachment. Please try again later.";
            dvAtt.Style["color"] = "Red";
            popDelAtt.Hide();
        }
        if (Session["AddExp"].ToString() != null || Session["NewEditExp"].ToString() != null)
            popup_Edit.Show();
    }

    protected void RetainAttDialog(object sender, EventArgs e)
    {
        Attachments(Convert.ToInt32(Session["SeqIdForAtt"]));
        if (Session["AddExp"].ToString() != null || Session["NewEditExp"].ToString() != null)
            popup_Edit.Show();
    }

    protected void DeleteSelectedAttachments(object sender, EventArgs e)
    {
        btnDeleteSelected.Style["display"] = "block";
        popup_Att.Show();
        if (Session["AddExp"].ToString() != null || Session["NewEditExp"].ToString() != null)
            popup_Edit.Show();
        popDelAtt.Show();
    }

    #endregion

    #region Drafts

    protected void DisplayDrafts(object sender, EventArgs e)
    {
        //BindDrafts();
        foreach (GridViewRow gvr in gvDrafts.Rows)
        {
            //Get a programmatic reference to the CheckBox control
            CheckBox cb = (CheckBox)gvr.FindControl("chkgvDft");
            ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
        }
        popDraftsAtt.Show();
        popup_Edit.Show();
    }

    private void BindDrafts()
    {
        string uID = Session["UserID"].ToString();

        Session["NewLogUId"] = uID;
        var strDrafts = xms.getDraftItems(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(uID));
        List<AttachmentVO> lstdrats = ser.Deserialize<List<AttachmentVO>>(strDrafts);
        dsDrafts.Tables.Add(Utility.ConvertToDataTable(lstdrats));
        Session["dsDrafts"] = dsDrafts;

        gvDrafts.DataSource = dsDrafts;
        gvDrafts.DataBind();
    }

    protected void SelectDrafts(object sender, EventArgs e)
    {
        DataRow drSelRow;
        dtSelDfts.Columns.Add("SelFile");
        dtSelDfts.Columns.Add("DraftID");
        foreach (GridViewRow row1 in gvDrafts.Rows)
        {
            CheckBox chk = (CheckBox)row1.FindControl("chkgvDft");
            dsDrafts = (DataSet)Session["dsDrafts"];

            if (chk.Checked == true)
            {
                drSelRow = dtSelDfts.NewRow();
                drSelRow["SelFile"] = dsDrafts.Tables[0].Rows[row1.RowIndex]["fileName"].ToString();
                drSelRow["DraftID"] = dsDrafts.Tables[0].Rows[row1.RowIndex]["attachmentId"].ToString();
                dtSelDfts.Rows.Add(drSelRow);
            }
        }
        if (dtSelDfts.Rows.Count > 0)
        {
            Session["dtSelDfts"] = dtSelDfts;
            AddDrafts(dtSelDfts);
        }
        else
        {
            Session.Remove("dtSelDfts");
            LnkcurrAttachments.Style["display"] = "none";
        }
        //popDraftsAtt.Hide();
        popup_Edit.Show();
    }

    private void AddDrafts(DataTable dtSelDfts)
    {
        Session["dtSelDfts"] = dtSelDfts;
        StringBuilder sb = new StringBuilder();
        string dft = string.Empty;
        for (int i = 0; i < dtSelDfts.Rows.Count; i++)
        {
            dft = sb.Append(dtSelDfts.Rows[i]["DraftID"].ToString() + ",").ToString();
        }
        string FinalDft = dft.TrimEnd(',');

        ImagesVO img = new ImagesVO();
        img.requestId = Convert.ToInt32(Session["NewReqID"]);
        img.compCode = Session["Compcode"].ToString();
        img.attachmentId = 0;
        img.expLineNo = Convert.ToInt32(hdnSeq1.Value);
        img.orgId = Convert.ToInt32(Session["OrgID"]);
        img.orgName = string.Empty;
        img.fileName = dtSelDfts.Rows[0]["SelFile"].ToString();//sending random file name,as not considered in db
        img.draftIds = FinalDft;
        string ret = xms.addExpensewithDrafts(img);

        if (ret.ToLower().Contains("fail"))
        {
            dvExpError.InnerHtml = ret;
            dvExpError.Style["color"] = "Red";
            LnkcurrAttachments.Style["display"] = "none";
            dvDrftErr.InnerHtml = ret;
            popDraftsAtt.Show();
        }
        else
        {
            dvExpError.InnerHtml = "Drafts added successfully.";
            dvExpError.Style["color"] = "Green";
            LnkcurrAttachments.Style["display"] = "block";
            if (gvDrafts.Rows.Count > 1)
                lnkShowDraft.Style["display"] = "block";
            else
                lnkShowDraft.Style["display"] = "none";
            Session["NewAddFrmDrfts"] = 1;
            hdnDftCnt.Value = FinalDft;
            hdnAttIdsRet.Value = ret;
            popDraftsAtt.Hide();
        }
    }

    protected void gvDrafts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnDrftName = (HiddenField)e.Row.FindControl("hdnDrftName");
            ImageButton imgDraft = (ImageButton)e.Row.FindControl("imgDraft");
            //System.Web.UI.WebControls.Image imgDraft = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgDraft");
            string extension = Path.GetExtension(hdnDrftName.Value);
            if (extension.ToLower().Contains("pdf"))
                imgDraft.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] strReq = xms.getExpDraftsById(hdnDrftName.Value, 2);
                string base64ImageString = ConvertBytesToBase64(strReq);
                imgDraft.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void ConfirmDraftDel(object sender, EventArgs e)
    {
        string delstr = string.Empty;
        string Attret = string.Empty;
        string tilted = string.Empty;
        string sp = hdnAttIdsRet.Value.TrimStart('`');
        string[] firstAtts = new string[sp.Split('`').Length];
        firstAtts = sp.Split('`');
        foreach (string att in firstAtts)
        {
            string[] secAtts = new string[2];
            secAtts = att.Split('~');
            Attret = secAtts[0];
            tilted += Attret + '~';
        }
        delstr = xms.deleteMulAttachment(tilted.TrimEnd('~'), 1, hdnAttIdsRet.Value.TrimStart('`'), Convert.ToInt32(Session["NewLogUId"]), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        if (delstr.ToLower().Contains("succes"))
            popup_Edit.Hide();
        else
        {
            dvExpError.InnerText = "An error occured while deleting draft please try later.";
            popup_Edit.Show();
        }
        Session.Remove("NewAddFrmDrfts");
        Session.Remove("NewAddedFlag");
        if (gvExp.Rows.Count == 0)
            ddlType.Enabled = true;
        else
            ddlType.Enabled = false;
    }

    #endregion

    #region Credit card Transactions

    string str = string.Empty;
    DataSet ds = new DataSet();
    bool isEmpty = true;

    protected void UploadCCT(object sender, EventArgs e)
    {
        btnImport.Visible = false;
        popup_CC.Show();
    }

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        Session.Remove("dataset");
        Session.Remove("colmod");
        string filename = Session["NewReqID"] + "_" + Session["OrgID"] + "_" + fUpdCC.FileName;
        string path = Server.MapPath(newPath) + "\\" + filename;
        if (Path.GetExtension(path).ToLower() == ".qif")
        {
            fUpdCC.SaveAs(path);
            var pq = new QIFParser(path, QIFParserBase.LoadOptions.Transactions);
            ds = (DataSet)Session["dataset"];
            ValidateCCData(ds, path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else if (Path.GetExtension(path).ToLower() == ".csv")
        {
            fUpdCC.SaveAs(path);
            DataTable dt = readCSV(path);
            ds.Tables.Add(dt);
            Session["dataset"] = ds;
            ValidateCCData(ds, path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else if (Path.GetExtension(path).ToLower() == ".qbt")
        {
            fUpdCC.SaveAs(path);
            dvErrCC.InnerHtml = string.Empty;
        }
        else
            dvErrCC.InnerHtml = "Please upload a file of type .QIF, .CSV or .QBT!";
        popup_CC.Show();
    }

    private void ValidateCCData(DataSet ds, string path)
    {
        //Remove empty rows in the dataset

        if (ds != null)
        {
            for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            {
                isEmpty = true;
                for (int j = 0; j < ds.Tables[0].Columns.Count; j++)
                {
                    if (string.IsNullOrEmpty(ds.Tables[0].Rows[i][j].ToString()) == false)
                    {
                        isEmpty = false;
                        break;
                    }
                }
                if (isEmpty == true)
                {
                    ds.Tables[0].Rows.RemoveAt(i);
                    i--;
                }
            }
            BindGridData(ds);
            foreach (GridViewRow gvr in gvCC.Rows)
            {
                //Get a programmatic reference to the CheckBox control
                CheckBox cb = (CheckBox)gvr.FindControl("chkgvQIF");

                ClientScript.RegisterArrayDeclaration("CheckBoxIDs", string.Concat("'", cb.ClientID, "'"));
            }
            System.IO.File.Delete(path);
        }
        else
        {
            dvErrCC.InnerHtml = "Please upload a valid file!";
            popup_CC.Show();
        }
    }

    private void BindGridData(DataSet ds)
    {
        gvCC.Visible = true;
        gvCC.DataSource = ds;
        gvCC.DataBind();

        foreach (GridViewRow row in gvCC.Rows)
        {
            DropDownList ddlCCExpItems = (DropDownList)row.FindControl("ddlCCExpItems");
            GetAccountCodeByExpenseItem(ddlCCExpItems);
        }

        btnImport.Visible = true;
        popup_CC.Show();
    }

    protected void gvCC_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        gvCC.PageIndex = e.NewPageIndex;
        BindGridData((DataSet)Session["dataset"]);
    }

    protected void gvCC_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox childchk = (CheckBox)e.Row.FindControl("chkgvQIF");
            childchk.Attributes.Add("onclick", "javascript:ChangeHeaderAsNeeded()");

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnImport_Click(object sender, EventArgs e)
    {
        int x = 0;
        AddColumns();
        int cnt = 0;
        if (cnt == 0)
        {
            ds.Tables[0].Columns["Posted Date"].ColumnName = "ExpenseDate";
            ds.Tables[0].Columns["Amount"].ColumnName = "ActualAmount";
            cnt++;
        }

        foreach (GridViewRow row in gvCC.Rows)
        {
            CheckBox chkgvQIF = (CheckBox)row.FindControl("chkgvQIF");
            DropDownList ddlCCExpItems = (DropDownList)row.FindControl("ddlCCExpItems");
            Label lblCodeID = (Label)row.FindControl("lblCodeID");

            if (chkgvQIF.Checked == true)
            {
                if (ddlCCExpItems.SelectedIndex == 0)
                {
                    dvErrCC.InnerHtml = "Please select Expense item for selected transactions!";
                    ddlCCExpItems.Focus();
                    x = 0;
                }
                else
                {
                    //Get Account Code from selected classification
                    string[] arr = ddlCCExpItems.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                    //Get Account Code from selected classification

                    int seqId = GetSeqId();

                    if (Session["dt"] != null)
                        dt = (DataTable)Session["dt"];

                    dr = dt.NewRow();
                    dr["EXP_TYPE"] = "GENERAL";
                    dr["JOB_CODE"] = string.Empty;
                    dr["JPHS_CODE"] = string.Empty;
                    dr["JCAT_CODE"] = string.Empty;
                    dr["CodeID_ET"] = "GENERAL";
                    dr["Code_Job"] = string.Empty;
                    dr["Code_Phs"] = string.Empty;
                    dr["Code_JC"] = string.Empty;
                    dr["CodeID"] = ddlCCExpItems.SelectedValue;
                    dr["ExpenseItem"] = arr[1].Trim();
                    dr["ExpenseDate"] = Convert.ToDateTime(ds.Tables[0].Rows[row.RowIndex]["ExpenseDate"]).ToShortDateString();
                    dr["otherPlace"] = string.Empty;
                    dr["companyCar"] = string.Empty;
                    dr["outOfCity"] = "false";
                    dr["Reimbursable"] = "Y";
                    dr["CitiesVisited"] = string.Empty;
                    dr["OtherCities"] = string.Empty;
                    dr["Comments"] = string.Empty;
                    dr["FileName"] = string.Empty;
                    dr["RequestID"] = reqId;
                    dr["ExpLineNo"] = seqId;
                    dr["StateID"] = string.Empty;
                    dr["ActualAmount"] = ds.Tables[0].Rows[row.RowIndex]["ActualAmount"]; ;
                    dr["PreAmount"] = 0;
                    dr["PaymentID"] = 0;
                    dr["PaymentType"] = string.Empty;
                    dr["PreferredVendor"] = string.Empty;
                    dr["AgentName"] = string.Empty;
                    dr["ItinararyNo"] = string.Empty;
                    dr["FromDate"] = string.Empty;
                    dr["ToDate"] = string.Empty;
                    dr["FromCity"] = string.Empty;
                    dr["FromOtherCity"] = string.Empty;
                    dr["toCity"] = string.Empty;
                    dr["ToOtherCity"] = string.Empty;
                    dr["TotalTrip"] = 0;
                    dr["LessNorm"] = 0;
                    dr["Reimbt"] = 0;
                    dr["AccountCode"] = arr[0].Trim();
                    dr["AttachmentCnt"] = "0";
                    dr["budget"] = ut.NullSafeDouble(txtExpBudg.Text);
                    dr["currentBalance"] = ut.NullSafeDouble(txtExpCurrBal.Text);
                    dr["remaining"] = ut.NullSafeDouble(txtExpRemBudg.Text);
                    dr["balanceAfterpo"] = ut.NullSafeDouble(txtExpBalAfter.Text);
                    dr["AccountClss"] = ddlCCExpItems.SelectedItem.Text;
                    dr["qbAcctId"] = string.Empty;
                    dr["qbVendId"] = string.Empty;
                    dr["salesTax"] = 0;
                    dr["foodTax"] = 0;
                    dr["className"] = string.Empty;
                    dr["classRefId"] = string.Empty;

                    dt.Rows.Add(dr);
                    dt.AcceptChanges();
                    //dr = dt.NewRow();
                    //dr["EXP_TYPE"] = "GENERAL";
                    //dr["JOB_CODE"] = string.Empty;
                    //dr["JPHS_CODE"] = string.Empty;
                    //dr["JCAT_CODE"] = string.Empty;
                    //dr["CodeID_ET"] = "GENERAL";
                    //dr["Code_Job"] = string.Empty;
                    //dr["Code_Phs"] = string.Empty;
                    //dr["Code_JC"] = string.Empty;
                    //dr["CodeID"] = ddlCCExpItems.SelectedItem.Text;
                    //dr["ExpenseItem"] = ddlCCExpItems.SelectedItem.Text;
                    //dr["ExpenseDate"] = Convert.ToDateTime(ds.Tables[0].Rows[row.RowIndex]["ExpenseDate"]).ToShortDateString();
                    //dr["CitiesVisited"] = string.Empty;
                    //dr["OtherCities"] = string.Empty;
                    //dr["PreAmount"] = 0;
                    //dr["Comments"] = string.Empty;
                    //dr["FileName"] = string.Empty;
                    //dr["RequestID"] = reqId;
                    //dr["ExpLineNo"] = seqId;
                    //dr["StateID"] = string.Empty;
                    //dr["ActualAmount"] = ds.Tables[0].Rows[row.RowIndex]["ActualAmount"];
                    //dr["PaymentID"] = 0;
                    //dr["PaymentType"] = string.Empty;
                    //dr["PreferredVendor"] = string.Empty;
                    //dr["AgentName"] = string.Empty;
                    //dr["ItinararyNo"] = txtEditItNo.Text;
                    //dr["FromDate"] = string.Empty;
                    //dr["ToDate"] = string.Empty;
                    //dr["FromCity"] = string.Empty;
                    //dr["toCity"] = string.Empty;
                    //dr["FromOtherCity"] = string.Empty;
                    //dr["ToOtherCity"] = string.Empty;
                    //dr["TotalTrip"] = 0;
                    //dr["LessNorm"] = 0;
                    //dr["Reimbt"] = 0;
                    //dr["AccountCode"] = lblCodeID.Text;
                    //dt.Rows.Add(dr);
                    //dt.AcceptChanges();
                    x++;
                }
            }
        }
        if (x == 0)
        {
            popup_CC.Show();
        }
        else
        {
            Session["dt"] = dt;
            this.GetData();
            gvCC.DataSource = null;
            gvCC.DataBind();
            popup_CC.Hide();
            ClearFields();
            btnSubmit.Visible = true;
            btnSave.Visible = true;
        }
    }

    protected void btnClose_Click(object sender, EventArgs e)
    {
        gvCC.DataSource = null;
        gvCC.DataBind();
        popup_CC.Hide();
    }

    protected void ddlCCExpItems_SelectedIndexChanged(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        GridViewRow row = (GridViewRow)ddl.NamingContainer;
        Label lblCodeID = (Label)row.FindControl("lblCodeID");

        //DataSet dsCodes = new DataSet();
        //DataTable dtCodes = new DataTable();
        //DataTable dtCodes1 = new DataTable();
        //DataSet dsCodes1 = new DataSet();
        //if (Session["dsCodes"] == null)
        //{

        //    string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
        //    Session["Codes"] = expCodes;
        //    string[] arrExpCodes = new string[2];
        //    arrExpCodes = expCodes.Split('~');
        //    List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
        //    dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
        //    DataTable dtTable = dsCodes1.Tables[0];
        //    DataView dtview = new DataView(dtTable);
        //    dtview.Sort = "CodeID ASC";
        //    dtCodes1 = dtview.ToTable();
        //    Session["dsCodes"] = dtCodes1;

        //}
        //else
        //    dtCodes1 = (DataTable)Session["dsCodes"];

        //dtCodes = dtCodes1;

        //string expr = "CodeID = 'EXPITEM' and Description = '" + ddl.SelectedItem.Text + "'";
        //DataView view = new DataView(dtCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
        //DataTable dt = view.ToTable();
        //lblCodeID.Text = dt.Rows[0]["CodeValue1"].ToString();
        popup_CC.Show();
    }

    #region QIF

    abstract class QIFParserBase
    {

        public enum LoadOptions
        {
            All,
            Prices,
            Securities,
            Transactions
        }

        protected abstract void AddPrice(DateTime date, string ticker, double price);
        protected abstract void AddTransaction(DateTime date, string action, string companyName, double price, double shares, double amount, double notKnownT, double commission, string comment);
        protected abstract void ParseHeader(string[] blocks);

        public QIFParserBase(string fileName, LoadOptions opt)
        {

            string content = File.ReadAllText(fileName);

            string[] blocks = content.Split(new string[] { "!Type:", "!Option:" }, StringSplitOptions.RemoveEmptyEntries);

            parseFuncs[opt](this, blocks);
        }

        static readonly Dictionary<LoadOptions, Action<QIFParserBase, string[]>> parseFuncs = new Dictionary<LoadOptions, Action<QIFParserBase, string[]>> {

        {LoadOptions.All, (q,c) => q.ParseAll(c)},
        {LoadOptions.Prices, (q,c) => q.ParsePricesBlocks(c)},
        {LoadOptions.Securities, (q,c) => q.ParseSecurityBlocks(c)},
        {LoadOptions.Transactions, (q,c) => q.ParseTransactionBlocks(c)}
    };

        private void ParseAll(string[] blocks)
        {

            ParseHeader(blocks);
            ParseSecurityBlocks(blocks);
            ParseTransactionBlocks(blocks);
            ParsePricesBlocks(blocks);
        }

        private void ParsePricesBlocks(string[] blocks)
        {

            var priceBlocks = from b in blocks
                              where b.StartsWith("Prices")
                              select b;

            foreach (var b in priceBlocks)
                ParsePriceBlock(b.Substring(7));
        }

        static readonly char[] trimChars = new char[] { '\n', '\r', '^', '"' };

        private void ParsePriceBlock(string b)
        {

            var subBlocks = b.Split(new string[] { "," }, StringSplitOptions.RemoveEmptyEntries);

            string ticker = subBlocks[0].Trim(trimChars);
            Money price = Money.Parse(subBlocks[1]);
            DateTime date = ParseDate(subBlocks[2].Trim(trimChars));

            AddPrice(date, ticker, price);
        }

        private void ParseTransactionBlocks(string[] blocks)
        {

            var tranBlocks = from b in blocks
                             where b.StartsWith("CCard")
                             select b;

            foreach (var t in tranBlocks)
                ParseTransactions(t);

        }

        private void ParseTransactions(string t)
        {
            //StreamWriter oWrite_Vendor = new StreamWriter(@"D:\RajeshVemunooriDir\MyProjects\ExpenseReports\ReadQBTFile\NewTextDocument.txt");
            var transactions = t.Substring(5).Split(new char[] { '^' }, StringSplitOptions.RemoveEmptyEntries);

            DataTable dt = new DataTable();
            DataColumn col = null;
            DataRow row = null;

            col = new DataColumn("Posted Date");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Reference Number");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Payee");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Address");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("Amount");
            dt.Columns.Add(col);
            col = null;

            foreach (var tran in transactions)
            {
                var lines = tran.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

                DateTime date = new DateTime(); //D
                string action = "";  //N
                string purpose = ""; //Y
                string place = ""; //I
                Money amount = 0; //U

                row = dt.NewRow();
                foreach (var line in lines)
                {
                    if (line[0] == 'D')
                    {
                        date = ParseDate(line.Substring(1).Trim());
                        row["Posted Date"] = date;
                    }
                    if (line[0] == 'N')
                    {
                        action = line.Substring(1);
                        row["Reference Number"] = action;
                    }
                    if (line[0] == 'P')
                    {
                        purpose = line.Substring(1).Trim();
                        row["Payee"] = purpose;
                    }
                    if (line[0] == 'A')
                    {
                        place = line.Substring(1);
                        row["Address"] = place;
                    }
                    //if (line[0] == 'Q')
                    //{
                    //    shares = Shares.Parse(line.Substring(1));
                    //    row["shares"] = shares;
                    //}
                    if (line[0] == 'T')
                    {
                        amount = Money.Parse(line.Substring(1));
                        row["Amount"] = amount;
                    }
                    //if (line[0] == 'T')
                    //{
                    //    notKnownT = Money.Parse(line.Substring(1));
                    //    row["notKnownT"] = notKnownT;
                    //}
                    //if (line[0] == 'O')
                    //{
                    //    commission = Money.Parse(line.Substring(1));
                    //    row["commission"] = commission;
                    //}
                    //if (line[0] == 'M')
                    //{
                    //    comment = line.Substring(1).Trim();
                    //    row["comment"] = comment;
                    //}
                }
                //oWrite_Vendor.WriteLine(date + "\t" + action + "\t" + purpose + "\t" + place + "\t" + amount);
                dt.Rows.Add(row);
            }
            DataSet ds = new DataSet();
            ds.Tables.Add(dt);
            //oWrite_Vendor.Close();
            HttpContext.Current.Session["dataset"] = ds;
            //return ds;
            //ParseTransaction(tran);
        }

        private void ParseTransaction(string t)
        {
            var lines = t.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

            DataTable dt = new DataTable();
            DataColumn col = null;
            DataRow row = null;

            col = new DataColumn("date");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("action");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("companyName");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("price");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("shares");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("amount");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("notKnownT");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("commission");
            dt.Columns.Add(col);
            col = null;
            col = new DataColumn("comment");
            dt.Columns.Add(col);
            col = null;

            DateTime date = new DateTime(); //D
            string action = "";  //N
            string companyName = ""; //Y
            Money price = 0; //I
            Shares shares = 0; //Q
            Money amount = 0; //U
            Money notKnownT = 0; //T
            Money commission = 0; //O
            string comment = ""; //M

            foreach (var line in lines)
            {
                if (line[0] == 'D')
                {
                    date = ParseDate(line.Substring(1).Trim());
                }
                if (line[0] == 'N')
                {
                    action = line.Substring(1);
                }
                if (line[0] == 'Y')
                {
                    companyName = line.Substring(1).Trim();
                }
                if (line[0] == 'I')
                {
                    price = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'Q')
                {
                    shares = Shares.Parse(line.Substring(1));
                }
                if (line[0] == 'U')
                {
                    amount = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'T')
                {
                    notKnownT = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'O')
                {
                    commission = Money.Parse(line.Substring(1));
                }
                if (line[0] == 'M')
                {
                    comment = line.Substring(1).Trim();
                }
                //dt.Rows.Add(row);
            }
            if (companyName != "")
            {

                //AddTransaction(date, action, companyName, price, shares, amount, notKnownT, commission, comment);
            }
        }

        private DateTime ParseDate(string p)
        {

            string parseable = p.Replace('\'', '/').Replace(' ', '0');

            return DateTime.Parse(parseable);
        }

        private void ParseSecurityBlocks(string[] blocks)
        {

            var secBlocks = from b in blocks
                            where b.StartsWith("Security")
                            select b;

            foreach (var s in secBlocks)
                ParseSecBlock(s);
        }

        private void ParseSecBlock(string s)
        {

            string ticker = "";
            string name = "";
            string type = "";

            var subBlocks = s.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var sec in subBlocks)
            {

                if (sec[0] == 'N')
                    name = sec.Substring(1).Trim();
                if (sec[0] == 'S')
                    ticker = sec.Substring(1).Trim();
                if (sec[0] == 'T')
                    type = sec.Substring(1).Trim();
            }

            if (ticker != "")
                AddSecurity(ticker, name, type);
        }

        protected abstract void AddSecurity(string ticker, string name, string type);
    }

    class QIFParser : QIFParserBase
    {
        Dictionary<string, string> nameToTicker = new Dictionary<string, string>();

        public QIFParser(string fileName, LoadOptions lo) : base(fileName, lo) { }

        protected override void ParseHeader(string[] blocks) { }

        protected override void AddSecurity(string ticker, string name, string type)
        {

            if (!nameToTicker.ContainsKey(name))
                nameToTicker[name] = ticker;

            Utils.WriteLine(ticker + "\t" + name + "\t" + type);
        }

        protected override void AddTransaction(DateTime date, string action, string companyName, double price, double shares, double amount, double notKnownT, double commission, string comment)
        {

            if (!nameToTicker.ContainsKey(companyName))
                Utils.Exception("Reading transactions, There is no ticker for " + companyName);

            Utils.WriteLine(date + "\t" + action + "\t" + companyName + "\t" + price + "\t" + shares + "\t" + amount + "\t" + commission + "\t" + comment);
        }

        protected override void AddPrice(DateTime date, string ticker, double price)
        {

            if (!nameToTicker.ContainsValue(ticker))
                Utils.Exception("Reading prices, There is not company for " + ticker);
            Utils.WriteLine(date + "\t" + ticker + "\t" + price);
        }
    }

    static class Utils
    {
        public static void WriteLine(string s)
        {
            StreamWriter oWrite_Vendor = new StreamWriter(@"D:\RajeshVemunooriDir\MyProjects\ExpenseReports\ReadQBTFile\NewTextDocument.txt");
            oWrite_Vendor.WriteLine(s);
            oWrite_Vendor.Close();
            //Console.WriteLine(s);
        }

        public static void Exception(string s)
        {
            Console.WriteLine(s.ToUpper());
            //throw new Exception(s);
        }
    }

    #endregion

    #region CSV

    private static DataTable readCSV(string filename)
    {
        string path = System.IO.Path.GetDirectoryName(filename);
        string file = System.IO.Path.GetFileName(filename);

        DataTable dt = new DataTable();
        using (OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='" + path + "';Extended Properties='text;HDR=Yes;FMT=Delimited'"))
        {
            OleDbDataAdapter da = new OleDbDataAdapter("SELECT * FROM " + file, conn);
            da.Fill(dt);
        }
        return dt;
    }

    #endregion

    #region QBT

    #endregion

    #endregion

    #region Edit ExpenseItem

    protected void EditNewDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        if (ddlType.SelectedValue == "PA")
        {
            id = 2;
            preApproval = true;
        }
        else if (ddlType.SelectedValue == "ER")
            id = 1;
        //btnSaveExp.Attributes.Add("onclick", "javascript:return validateExpLineItem('" + id + "','" + preApproval + "' );");
        btnSaveExp.Attributes.Add("onclick", "javascript:return ValidateNew();");
        Session.Remove("dtSelDfts");
        Session.Remove("fStream");
        Session.Remove("RctFileName");
        Session.Remove("FileExt");
        dvExpError.InnerHtml = string.Empty;
        lblPopHeading.Text = "Edit Expense";
        btnPrev.Visible = true;
        btnNext.Visible = true;
        btnSaveExp.Visible = true;
        btnDelete.Visible = true;
        btnAppend.Visible = false;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");

        if (row.RowIndex == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (row.RowIndex == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;

        reqId = Convert.ToInt32(Session["NewReqID"]);
        hdnSeq1.Value = hdnSeq.Value;

        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;
        lblEditAtt.Text = Attachments(Convert.ToInt32(hdnSeq1.Value));
        Session["AttachmentCnt"] = dsExpEditDetails.Rows[index]["AttachmentCnt"].ToString();
        //lblEditAtt.Visible = false;
        LnkcurrAttachments.Style["display"] = "block";
        AssignAttributesToBudgetFields();

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            if (hdnAccCode.Value == dsExpEditDetails.Rows[index]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
        }
        hdnExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(dsExpEditDetails.Rows[index]["preamount"])).ToString();
        Session["onEditPreAmnt"] = dsExpEditDetails.Rows[index]["preamount"];
        Session["allRowsAmntVal"] = allRowsAmntVal;
        GetExpItemData(dsExpEditDetails, index);
        ValidateMaxApprLimit();

        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
        hdnYear.Value = dateTime.Year.ToString();
        MonthFilter(ut.NullSafeInteger(hdnYear.Value));

        Session["NewEditExp"] = "1";
    }

    protected void btnSaveExp_Click(object sender, EventArgs e)
    {
        dt = (DataTable)Session["dt"];
        DataTable dt_Temp = (DataTable)Session["dt_Temp"];
        if (Session["RctFileName"] != null || Session["dtSelDfts"] != null)
            str = UploadFiles(string.Empty, ut.NullSafeInteger(dt_Temp.Rows[0]["expLineNo"]));
        else
            str = "File exists";

        if (str != string.Empty || ddlType.SelectedValue == "PA" || hdnCodeValue6.Value.ToLower() == "y" || hdnDftCnt.Value != null)
        {
            int edFlag = 0;
            if (ddlEditExpType.SelectedItem.Text != dt_Temp.Rows[0]["EXP_TYPE"].ToString())
                edFlag = 1;
            if (ddlClass.SelectedItem.Text.Trim() != dt_Temp.Rows[0]["className"].ToString())
                edFlag = 1;
            //else if (ddlAccountCodes.SelectedItem.Text != dt_Temp.Rows[0]["ExpenseItem"].ToString())
            //    edFlag = 1;
            else if (txtEditExpDate.Text != dt_Temp.Rows[0]["ExpenseDate"].ToString())
                edFlag = 1;
            else if (txtEditSalesTax.Text != dt_Temp.Rows[0]["salesTax"].ToString())
                edFlag = 1;
            else if (txtEditFoodTax.Text != dt_Temp.Rows[0]["foodTax"].ToString())
                edFlag = 1;
            else if (txtEditPreAmnt.Text != dt_Temp.Rows[0]["PreAmount"].ToString())
                edFlag = 1;
            else if (txtEditActAmnt.Text != dt_Temp.Rows[0]["ActualAmount"].ToString())
                edFlag = 1;
            else if (ddlEditPaymentType.SelectedItem.Text != dt_Temp.Rows[0]["PaymentType"].ToString())
                edFlag = 1;
            else if (dvEditCV.Style["display"] == "block")
            {
                if (txtCityVisited.Text != dt_Temp.Rows[0]["CitiesVisited"].ToString())
                    edFlag = 1;
            }
            else if (txtEditComments.Text != dt_Temp.Rows[0]["Comments"].ToString())
                edFlag = 1;
            if (ddlEditExpType.SelectedItem.Text == "JOB")
            {
                if (ddlEditJobs.SelectedItem.Text != dt_Temp.Rows[0]["JOB_CODE"].ToString())
                    edFlag = 1;
                else if (ddlEditPhases.SelectedItem.Text != dt_Temp.Rows[0]["JPHS_CODE"].ToString())
                    edFlag = 1;
                else if (ddlEditCategories.SelectedItem.Text != dt_Temp.Rows[0]["JCAT_CODE"].ToString())
                    edFlag = 1;
            }
            if (dvEditVendor.Style["display"] == "block")
                if (txtPrefVendor.Text != dt_Temp.Rows[0]["PreferredVendor"].ToString())
                    edFlag = 1;
            if (dvEditAgName.Style["display"] == "block")
                if (txtEditAgentName.Text != dt_Temp.Rows[0]["AgentName"].ToString())
                    edFlag = 1;
            if (dvEditItNo.Style["display"] == "block")
                if (txtEditItNo.Text != dt_Temp.Rows[0]["ItinararyNo"].ToString())
                    edFlag = 1;
            if (dvEditFD.Style["display"] == "block")
                if (txtEditFromdate.Text != dt_Temp.Rows[0]["FromDate"].ToString())
                    edFlag = 1;
            if (dvEditTD.Style["display"] == "block")
                if (txtEditTodate.Text != dt_Temp.Rows[0]["ToDate"].ToString())
                    edFlag = 1;
            if (dvEditTT.Style["display"] == "block")
                if (txtEditTotTrip.Text != dt_Temp.Rows[0]["TotalTrip"].ToString())
                    edFlag = 1;
            if (dvEditLN.Style["display"] == "block")
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["LessNorm"].ToString())
                    edFlag = 1;
            if (dvChkOutOfCity.Style["display"] == "block")
                if (chkIsOutOfCity.Checked != (dt_Temp.Rows[0]["outOfCity"].ToString() == "1" ? true : false))
                    edFlag = 1;
            if (dvLocalLocation.Style["display"] == "block")
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["otherPlace"].ToString())
                    edFlag = 1;
            if (dvEditCompCar.Style["display"] == "block")
                if (txtEditLNorm.Text != dt_Temp.Rows[0]["companyCar"].ToString())
                    edFlag = 1;
            if (dvEditReimbt.Style["display"] == "block")
                if (txtEditReimbt.Text != dt_Temp.Rows[0]["Reimbt"].ToString())
                    edFlag = 1;
            if (dvEditFromcity.Style["display"] == "block")
                if (txtFromCity.Text != dt_Temp.Rows[0]["FromCity"].ToString())
                    edFlag = 1;
            if (dvEditToCity.Style["display"] == "block")
                if (txtToCity.Text != dt_Temp.Rows[0]["toCity"].ToString())
                    edFlag = 1;
            if (edFlag == 1)
            {
                double amnt = 0;
                DataView view = (DataView)Session["Sectiondt"];
                if (view != null)
                {
                    DataTable dtCode = view.ToTable();

                    if (dtCode.Rows[1]["CodeValue1"].ToString() == "Y")
                    {
                        if (Convert.ToBoolean(Session["PreApp"]) == true)
                            amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                        else
                            amnt = (ut.NullSafeDouble(txtEditTotTrip.Text) - ut.NullSafeInteger(txtEditLNorm.Text)) * (ddlCompCar.SelectedValue == hdnCmpCar.Value ? ut.NullSafeDouble(hdnCPM.Value) : ut.NullSafeDouble(hdnPPM.Value));
                    }
                    else
                    {
                        if (Convert.ToBoolean(Session["PreApp"]) == true)
                            amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                        else
                            amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                    }
                }
                else
                {
                    if (Convert.ToBoolean(Session["PreApp"]) == true)
                        amnt = ut.NullSafeDouble(txtEditPreAmnt.Text);
                    else
                        amnt = ut.NullSafeDouble(txtEditActAmnt.Text);
                }

                ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();
                expensedetails.reqId = reqId;
                expensedetails.expLineNo = Convert.ToInt32(hdnSeq1.Value);
                expensedetails.expItem = string.Empty;//ddlEditExpenseItem.SelectedItem.Text;
                expensedetails.expDate = txtEditExpDate.Text;
                expensedetails.citiesVstd = txtCityVisited.Text;
                expensedetails.comments = txtEditComments.Text;
                expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
                expensedetails.expType = ddlEditExpType.SelectedValue;
                expensedetails.jobCode = ddlEditJobs.SelectedValue;
                expensedetails.phaseCode = ddlEditPhases.SelectedValue;
                expensedetails.JCatCode = ddlEditCategories.SelectedValue;
                expensedetails.compCode = Session["CompCode"].ToString();

                if (ddlEditExpType.SelectedItem.Text == "GENERAL")
                {
                    expensedetails.jobCode = string.Empty;
                    expensedetails.phaseCode = string.Empty;
                    expensedetails.JCatCode = string.Empty;
                }
                else
                {
                    expensedetails.jobCode = ddlEditJobs.SelectedValue;
                    expensedetails.phaseCode = ddlEditPhases.SelectedValue;
                    expensedetails.JCatCode = ddlEditCategories.SelectedValue;
                }
                xms.updateExp_Temp(expensedetails);

                string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
                int index = Convert.ToInt32(hdnRowIndex.Value);
                if (ddlEditExpType.SelectedItem.Text == "GENERAL")
                {
                    dt.Rows[index]["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                    dt.Rows[index]["JOB_CODE"] = string.Empty;
                    dt.Rows[index]["JPHS_CODE"] = string.Empty;
                    dt.Rows[index]["JCAT_CODE"] = string.Empty;
                    dt.Rows[index]["CodeID_ET"] = ddlEditExpType.SelectedValue;
                    dt.Rows[index]["Code_Job"] = string.Empty;
                    dt.Rows[index]["Code_Phs"] = string.Empty;
                    dt.Rows[index]["Code_JC"] = string.Empty;
                    dt.Rows[index]["CodeID"] = string.Empty;//ddlEditExpenseItem.SelectedValue;
                    dt.Rows[index]["ExpenseItem"] = arr[1].Trim();
                    dt.Rows[index]["ExpenseDate"] = txtEditExpDate.Text;
                    dt.Rows[index]["otherPlace"] = txtEditLocalLocation.Text;
                    dt.Rows[index]["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                    dt.Rows[index]["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                    dt.Rows[index]["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";

                    if (dvEditCV.Style["display"] == "block")
                    {
                        dt.Rows[index]["OtherCities"] = string.Empty;
                        dt.Rows[index]["CitiesVisited"] = txtCityVisited.Text;
                    }
                    else
                    {
                        dt.Rows[index]["OtherCities"] = string.Empty;
                        dt.Rows[index]["CitiesVisited"] = txtFromCity.Text;
                    }
                    dt.Rows[index]["PreAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == false ? 0 : amnt;
                    dt.Rows[index]["ActualAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == true ? 0 : amnt;
                    dt.Rows[index]["Comments"] = txtEditComments.Text;
                    dt.Rows[index]["StateID"] = txtCityVisited.Text;
                    dt.Rows[index]["PaymentID"] = ddlEditPaymentType.SelectedValue;
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dt.Rows[index]["PaymentType"] = string.Empty;
                    else
                        dt.Rows[index]["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;
                    if (dvEditVendor.Style["display"] == "block")
                    {
                        if (txtPrefVendor.Text == "0")
                            dt.Rows[index]["PreferredVendor"] = string.Empty;
                        else
                            dt.Rows[index]["PreferredVendor"] = txtPrefVendor.Text;
                    }
                    else
                        dt.Rows[index]["PreferredVendor"] = string.Empty;

                    //if (dvEditAgName.Style["display"] == "block")
                    //{
                    //    if (ddlEditAgName.SelectedValue == "0")
                    //        dt.Rows[index]["AgentName"] = string.Empty;
                    //    else
                    //        dt.Rows[index]["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    //}
                    //else
                    //    dt.Rows[index]["AgentName"] = string.Empty;
                    dt.Rows[index]["AgentName"] = txtEditAgentName.Text;
                    dt.Rows[index]["ItinararyNo"] = txtEditItNo.Text;
                    dt.Rows[index]["FromDate"] = txtEditFromdate.Text;
                    dt.Rows[index]["ToDate"] = txtEditTodate.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (txtFromCity.Text == string.Empty)
                            dt.Rows[index]["FromCity"] = string.Empty;
                        else
                            dt.Rows[index]["FromCity"] = txtFromCity.Text;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["FromCity"] = string.Empty;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (txtToCity.Text == string.Empty)
                            dt.Rows[index]["toCity"] = string.Empty;
                        else
                            dt.Rows[index]["toCity"] = txtToCity.Text;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["toCity"] = string.Empty;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    dt.Rows[index]["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                    dt.Rows[index]["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                    dt.Rows[index]["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                    dt.Rows[index]["AccountCode"] = arr[0].Trim();
                    dt.Rows[index]["qbAcctId"] = hdnQBAcctID.Value;
                    dt.Rows[index]["qbVendId"] = hdnQBVendID.Value;
                    dt.Rows[index]["salesTax"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                    dt.Rows[index]["foodTax"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                    dt.Rows[index]["className"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedItem.Text.Trim() : string.Empty);
                    dt.Rows[index]["classRefId"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedValue : "0");
                }
                else
                {
                    dt.Rows[index]["EXP_TYPE"] = ddlEditExpType.SelectedItem.Text;
                    dt.Rows[index]["JOB_CODE"] = ddlEditJobs.SelectedItem.Text;
                    dt.Rows[index]["JPHS_CODE"] = ddlEditPhases.SelectedItem.Text;
                    dt.Rows[index]["JCAT_CODE"] = ddlEditCategories.SelectedItem.Text;
                    dt.Rows[index]["CodeID_ET"] = ddlEditExpType.SelectedValue;
                    dt.Rows[index]["Code_Job"] = ddlEditJobs.SelectedValue;
                    dt.Rows[index]["Code_Phs"] = ddlEditPhases.SelectedValue;
                    dt.Rows[index]["Code_JC"] = ddlEditCategories.SelectedValue;
                    dt.Rows[index]["CodeID"] = string.Empty;// ddlEditExpenseItem.SelectedValue;
                    dt.Rows[index]["ExpenseItem"] = arr[1].Trim();
                    dt.Rows[index]["ExpenseDate"] = txtEditExpDate.Text;
                    dt.Rows[index]["otherPlace"] = txtEditLocalLocation.Text;
                    dt.Rows[index]["companyCar"] = dvEditCompCar.Style["display"] == "block" ? ddlCompCar.SelectedValue : string.Empty;
                    dt.Rows[index]["outOfCity"] = chkIsOutOfCity.Checked == true ? "true" : "false";
                    dt.Rows[index]["Reimbursable"] = chkReimb.Checked == true ? "Y" : "N";
                    if (dvEditCV.Style["display"] == "block")
                    {
                        if (txtCityVisited.Text == string.Empty)
                            dt.Rows[index]["CitiesVisited"] = string.Empty;
                        dt.Rows[index]["OtherCities"] = string.Empty;
                        dt.Rows[index]["CitiesVisited"] = txtCityVisited.Text;
                    }
                    else
                    {
                        dt.Rows[index]["OtherCities"] = string.Empty;
                        dt.Rows[index]["CitiesVisited"] = txtFromCity.Text;
                    }
                    dt.Rows[index]["PreAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == false ? 0 : amnt;
                    dt.Rows[index]["ActualAmount"] = ut.NullSafeBoolean(Session["PreApp"]) == true ? 0 : amnt;
                    dt.Rows[index]["Comments"] = txtEditComments.Text;
                    dt.Rows[index]["StateID"] = txtCityVisited.Text;
                    dt.Rows[index]["PaymentID"] = ddlEditPaymentType.SelectedValue;
                    if (ddlEditPaymentType.SelectedValue == "0")
                        dt.Rows[index]["PaymentType"] = string.Empty;
                    else
                        dt.Rows[index]["PaymentType"] = ddlEditPaymentType.SelectedItem.Text;
                    if (dvEditVendor.Style["display"] == "block")
                    {
                        if (txtPrefVendor.Text == string.Empty)
                            dt.Rows[index]["PreferredVendor"] = string.Empty;
                        else
                            dt.Rows[index]["PreferredVendor"] = txtPrefVendor.Text;
                    }
                    else
                        dt.Rows[index]["PreferredVendor"] = string.Empty;
                    //if (dvEditAgName.Style["display"] == "block")
                    //{
                    //    if (ddlEditAgName.SelectedValue == "0")
                    //        dt.Rows[index]["AgentName"] = string.Empty;
                    //    else
                    //        dt.Rows[index]["AgentName"] = ddlEditAgName.Items.Count > 0 ? ddlEditAgName.SelectedItem.Text : string.Empty;
                    //}
                    //else
                    //    dt.Rows[index]["AgentName"] = string.Empty;
                    dt.Rows[index]["AgentName"] = txtEditAgentName.Text;
                    dt.Rows[index]["ItinararyNo"] = txtEditItNo.Text;
                    dt.Rows[index]["FromDate"] = txtEditFromdate.Text;
                    dt.Rows[index]["ToDate"] = txtEditTodate.Text;
                    if (dvEditFromcity.Style["display"] == "block")
                    {
                        if (txtFromCity.Text == string.Empty)
                            dt.Rows[index]["FromCity"] = string.Empty;
                        else
                            dt.Rows[index]["FromCity"] = txtFromCity.Text;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["FromCity"] = string.Empty;
                        dt.Rows[index]["FromOtherCity"] = string.Empty;
                    }
                    if (dvEditToCity.Style["display"] == "block")
                    {
                        if (txtToCity.Text == string.Empty)
                            dt.Rows[index]["toCity"] = string.Empty;
                        else
                            dt.Rows[index]["toCity"] = txtToCity.Text;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    else
                    {
                        dt.Rows[index]["toCity"] = string.Empty;
                        dt.Rows[index]["ToOtherCity"] = string.Empty;
                    }
                    dt.Rows[index]["FromOtherCity"] = string.Empty;
                    dt.Rows[index]["ToOtherCity"] = string.Empty;
                    dt.Rows[index]["TotalTrip"] = ut.NullSafeDouble(txtEditTotTrip.Text);
                    dt.Rows[index]["LessNorm"] = ut.NullSafeDouble(txtEditLNorm.Text);
                    dt.Rows[index]["Reimbt"] = ut.NullSafeDouble(txtEditReimbt.Text);
                    dt.Rows[index]["AccountCode"] = arr[0].Trim();
                    dt.Rows[index]["qbAcctId"] = hdnQBAcctID.Value;
                    dt.Rows[index]["qbVendId"] = hdnQBVendID.Value;
                    dt.Rows[index]["salesTax"] = (string.IsNullOrEmpty(txtEditSalesTax.Text) ? 0 : ut.NullSafeDouble(txtEditSalesTax.Text));
                    dt.Rows[index]["foodTax"] = (string.IsNullOrEmpty(txtEditFoodTax.Text) ? 0 : ut.NullSafeDouble(txtEditFoodTax.Text));
                    dt.Rows[index]["className"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedItem.Text.Trim() : string.Empty);
                    dt.Rows[index]["classRefId"] = (ddlClass.SelectedValue != "0" ? ddlClass.SelectedValue : "0");
                }
                dt.AcceptChanges();
                Session["dt"] = dt;
                Session.Remove("dtSelDfts");
                GetData();
                LnkcurrAttachments.Style["display"] = "block";
                dvExpError.Visible = true;
                dvExpError.Style["color"] = "Green";
                dvExpError.InnerHtml = "Details saved sucessfully.";
            }
            else
            {
                dvExpError.Style["color"] = "Red";
                dvExpError.InnerHtml = "No changes to update!";
            }
            popup_Edit.Hide();
        }
        else
        {
            dvExpError.InnerHtml = "Please upload file of size greater than zero not exceeding 2MB";
            popup_Edit.Show();
        }
    }

    private double CalAutoMilReimbrseAmount(double ppm, double totTrip, double lNorm)
    {
        double amnt = 0;
        return amnt = (totTrip - lNorm) * ppm;
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        popup_Edit.Show();
        popAlert.Show();
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        if (gvExp.Rows.Count == 0)
            ddlType.Enabled = true;
        else
            ddlType.Enabled = false;
        if (Session["NewAddFrmDrfts"] != null)
        {
            if (Session["NewAddFrmDrfts"].ToString() == "1" && Session["NewAddedFlag"].ToString() == "1")
            {
                popAlertDrftDel.Show();
                popup_Edit.Show();
            }
            else
            {
                popAlertDrftDel.Hide();
                popup_Edit.Hide();
            }
        }
        else
            popup_Edit.Hide();
    }

    protected void ViewNewDetails(object sender, CommandEventArgs e)
    {
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        reqId = Convert.ToInt32(Session["NewReqID"]);
        lblViewAtt.Text = Attachments(Convert.ToInt32(hdnSeq1.Value));
        Session["AttCnt"] = lblViewAtt.Text;
        lblViewAtt.Visible = false;
        DataTable dsExpEditDetails = (DataTable)Session["dt"];

        GetViewExpItemData(dsExpEditDetails, index);
    }

    protected void btnVCancel_Click(object sender, EventArgs e)
    {
        popup_Edit.Hide();
    }

    protected void PreviousExp(object sender, EventArgs e)
    {
        dvExpError.InnerHtml = string.Empty;
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;
        Session["AttachmentCnt"] = dsExpEditDetails.Rows[index]["AttachmentCnt"].ToString();
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockFields();
        GetExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;
    }

    protected void NextExp(object sender, EventArgs e)
    {
        dvExpError.InnerHtml = string.Empty;
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        DataTable dt_Temp = dsExpEditDetails.Clone();
        dt_Temp.ImportRow(dsExpEditDetails.Rows[index]);
        Session["dt_Temp"] = dt_Temp;

        Session["AttachmentCnt"] = dsExpEditDetails.Rows[index]["AttachmentCnt"].ToString();
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockFields();
        GetExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnPrev.Visible = false;
        else
            btnPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnNext.Visible = false;
        else
            btnNext.Visible = true;
    }

    protected void ViewPreviousExp(object sender, EventArgs e)
    {
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        Session["AttachmentCnt"] = dsExpEditDetails.Rows[index]["AttachmentCnt"].ToString();
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewFields();
        GetViewExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;
    }

    protected void ViewNextExp(object sender, EventArgs e)
    {
        hdnRowIndex.Value = (Convert.ToInt32(hdnRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        Session["AttachmentCnt"] = dsExpEditDetails.Rows[index]["AttachmentCnt"].ToString();
        BlockViewFields();
        GetViewExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPrev.Visible = false;
        else
            btnVPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVNext.Visible = false;
        else
            btnVNext.Visible = true;
    }

    private void GetExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockFields();

        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataTable dtCodes = (DataTable)Session["dsCodes"];

            GetAccountCodeByExpenseItem(ddlAccountCodes);
            GetClassificationAttributes();
            DataTable dtAcc = (DataTable)Session["AccountCodes"];
            DataView dvAcc = new DataView(dtAcc, "TRIM(AccountCode) = '" + dsExpEditDetails.Rows[index]["AccountCode"].ToString() + "'", "AccountCode", DataViewRowState.CurrentRows);
            ddlAccountCodes.SelectedValue = dvAcc.ToTable().Rows[0]["expCode"].ToString();

            //classes
            GetClasses();
            if (dsExpEditDetails.Rows[index]["classRefId"].ToString() != string.Empty)
                ddlAccountCodes.SelectedValue = dsExpEditDetails.Rows[index]["classRefId"].ToString();


            //Payment Types
            string exprPymt = "CodeID='PAYMENT'";
            DataView viewPymt = new DataView(dtCodes, exprPymt, "CODEID", DataViewRowState.CurrentRows);
            ddlEditPaymentType.DataSource = viewPymt;
            ddlEditPaymentType.DataBind();
            ddlEditPaymentType.Items.Insert(0, "Please Select");
            ddlEditPaymentType.Items.FindByText("Please Select").Value = "0";
            ddlEditPaymentType.SelectedValue = dsExpEditDetails.Rows[index]["PaymentID"].ToString();

            //US Cities
            string exprCities = "CodeID='USCITIES'";
            DataView viewCities = new DataView(dtCodes, exprCities, "CODEID", DataViewRowState.CurrentRows);
            viewCities.Sort = "CodeKey ASC";

            //CompCar
            string exprPPM = "CodeID = 'PPM'";
            DataView viewPPM = new DataView(dtCodes, exprPPM, "CODEID", DataViewRowState.CurrentRows);
            ddlCompCar.DataSource = viewPPM;
            ddlCompCar.DataTextField = "CodeValue2";
            ddlCompCar.DataValueField = "CodeValue2";
            ddlCompCar.DataBind();

            //ExpenseTypes
            string exprExpType = "CodeID='EXPTYPE'";
            DataView viewExpType = new DataView(dtCodes, exprExpType, "CODEID", DataViewRowState.CurrentRows);
            ddlEditExpType.DataSource = viewExpType;
            ddlEditExpType.DataBind();
            ddlEditExpType.Items.Insert(0, "Please Select");
            ddlEditExpType.Items.FindByText("Please Select").Value = "0";
            ddlEditExpType.SelectedValue = dsExpEditDetails.Rows[index]["CodeID_ET"].ToString();

            //Food Tax
            string exprFt = "CodeID = 'FOODTAX'";
            DataView viewFT = new DataView(dtCodes, exprFt, "CODEID", DataViewRowState.CurrentRows);
            hdnFoodTax.Value = string.IsNullOrEmpty(viewFT[0]["CodeKey"].ToString()) ? "0" : viewFT[0]["CodeKey"].ToString();

            string expType = string.Empty;
            if (ddlType.SelectedValue == "ER")
            {
                expType = ddlEditExpType.SelectedItem.Text;
                divExptype.Visible = true;
                txtEditPreAmnt.Enabled = false;
                txtEditActAmnt.Enabled = true;
            }
            else
            {
                expType = ddlEditExpType.SelectedItem.Text;
                txtEditPreAmnt.Enabled = true;
                txtEditActAmnt.Enabled = false;
            }
            if (expType == "GENERAL")
            {
                ddlEditCategories.Items.Clear();
                ddlEditPhases.Items.Clear();
                ddlEditJobs.Items.Clear();
                dvEditJob.Style["display"] = "none";
                dvEditPhs.Style["display"] = "none";
                dvEditJC.Style["display"] = "none";
            }
            else
            {
                dvEditJob.Style["display"] = "block";
                dvEditPhs.Style["display"] = "block";
                dvEditJC.Style["display"] = "block";
                BindJobs(ddlEditJobs);
                ddlEditJobs.SelectedValue = dsExpEditDetails.Rows[index]["code_Job"].ToString();
                BindPhases(ddlEditPhases, ddlEditJobs);
                ddlEditPhases.SelectedValue = dsExpEditDetails.Rows[index]["code_Phs"].ToString();
                BindCategories(ddlEditCategories, ddlEditPhases);
                ddlEditCategories.SelectedValue = dsExpEditDetails.Rows[index]["code_JC"].ToString();
            }
            txtEditActAmnt.ReadOnly = false;
            txtEditPreAmnt.ReadOnly = false;

            //Classes
            GetClasses();
            //ddlClass.SelectedValue = "";
            //Classes

            //Display fields Begin
            //depending on the values fetched from database for a selected ExpenseItem
            string city = string.Empty;
            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = new DataTable();
            Session["TestExp1"] = "1";
            if (viewSec != null)
            {
                Session.Remove("TestExp1");
                dtSec = viewSec.ToTable();
                Session["Sectiondt"] = viewSec;

                //ExpenseDate Fields
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    txtEditExpDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
                    hdnCodeValue2.Value = dtSec.Rows[0]["CodeValue2"].ToString();
                }
                else
                {
                    dvEditED.Style["display"] = "none";
                    hdnCodeValue2.Value = string.Empty;
                }

                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditFD.Style["display"] = "block";
                    dvEditTD.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    txtEditFromdate.Text = dsExpEditDetails.Rows[index]["FromDate"].ToString();
                    txtEditTodate.Text = dsExpEditDetails.Rows[index]["ToDate"].ToString();
                    hdnCodeValue3.Value = dtSec.Rows[0]["CodeValue3"].ToString();
                }
                else
                {
                    dvEditFD.Style["display"] = "none";
                    dvEditTD.Style["display"] = "none";
                    hdnCodeValue3.Value = string.Empty;
                }

                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditCV.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    if (dsExpEditDetails.Rows[index]["CitiesVisited"].ToString() == string.Empty)
                        txtCityVisited.Text = string.Empty;
                    else
                    {
                        txtCityVisited.Text = dsExpEditDetails.Rows[index]["CitiesVisited"].ToString();
                        city = txtCityVisited.Text;
                    }
                    hdnCodeValue4.Value = dtSec.Rows[0]["CodeValue4"].ToString();
                }
                else
                {
                    dvEditCV.Style["display"] = "none";
                    hdnCodeValue4.Value = string.Empty;
                }

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditFromcity.Style["display"] = "block";
                    dvEditToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    if (dsExpEditDetails.Rows[index]["fromCity"].ToString() == string.Empty)
                        txtFromCity.Text = string.Empty;
                    else
                    {
                        txtFromCity.Text = dsExpEditDetails.Rows[index]["fromCity"].ToString();
                        city = txtFromCity.Text;
                    }
                    //Assign values to ToCity field
                    if (dsExpEditDetails.Rows[index]["toCity"].ToString() == string.Empty)
                        //ddlEditTocity.SelectedValue = "0";
                        txtToCity.Text = string.Empty;
                    else
                        txtToCity.Text = dsExpEditDetails.Rows[index]["toCity"].ToString();

                    hdnCodeValue5.Value = dtSec.Rows[0]["CodeValue5"].ToString();
                }
                else
                {
                    dvEditFromcity.Style["display"] = "none";
                    dvEditToCity.Style["display"] = "none";
                    hdnCodeValue5.Value = string.Empty;
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditTT.Style["display"] = "block";
                    dvEditLN.Style["display"] = "block";
                    dvEditCompCar.Style["display"] = "block";
                    dvEditSalesTax.Style["display"] = "none";
                    dvLocalLocation.Style["display"] = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "false" ? "block" : "none";
                    chkIsOutOfCity.Checked = dsExpEditDetails.Rows[index]["outOfCity"].ToString() == "true" ? true : false;
                    txtEditLocalLocation.Text = dsExpEditDetails.Rows[index]["otherPlace"].ToString();
                    ddlCompCar.SelectedValue = dsExpEditDetails.Rows[index]["companyCar"].ToString();
                    txtEditTotTrip.Text = dsExpEditDetails.Rows[index]["TotalTrip"].ToString();
                    txtEditLNorm.Text = dsExpEditDetails.Rows[index]["LessNorm"].ToString();
                    txtEditReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                    txtEditActAmnt.ReadOnly = true;
                    txtEditPreAmnt.ReadOnly = true;
                    if (chkIsOutOfCity.Checked)
                    {
                        dvEditToCity.Style["display"] = "block";
                        dvLocalLocation.Style["display"] = "none";
                        dvChkOutOfCity.Style["display"] = "none";
                    }
                    else
                    {
                        dvEditToCity.Style["display"] = "none";
                        dvLocalLocation.Style["display"] = "block";
                        dvChkOutOfCity.Style["display"] = "block";
                    }
                    hdnCodeValue6.Value = dtSec.Rows[1]["CodeValue1"].ToString();
                }
                else
                {
                    dvChkOutOfCity.Style["display"] = "none";
                    dvEditTT.Style["display"] = "none";
                    dvEditLN.Style["display"] = "none";
                    dvEditCompCar.Style["display"] = "none";
                    dvEditSalesTax.Style["display"] = "block";
                    txtEditActAmnt.ReadOnly = false;
                    txtEditPreAmnt.ReadOnly = false;
                    hdnCodeValue6.Value = string.Empty;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    BindVendors(txtPrefVendor.Text, city);
                    DataTable dsVendors = (DataTable)Session["PreferredVendorList"];
                    if (dsVendors.Rows.Count >= 1)
                    {
                        dvEditVendor.Style["display"] = "block";
                        dvEditAgName.Style["display"] = "block";
                        dvEditItNo.Style["display"] = "block";
                        if (dsExpEditDetails.Rows[index]["preferredVendor"].ToString() == string.Empty)
                            txtPrefVendor.Text = string.Empty;
                        else
                            txtPrefVendor.Text = dsExpEditDetails.Rows[index]["preferredVendor"].ToString();
                        txtEditAgentName.Text = dsExpEditDetails.Rows[index]["agentName"].ToString();
                        hdnCodeValue1.Value = "Y";
                    }
                    else
                    {
                        dvEditVendor.Style["display"] = "none";
                        dvEditAgName.Style["display"] = "none";
                        dvEditItNo.Style["display"] = "none";
                        hdnCodeValue1.Value = string.Empty;
                    }
                }
                else
                {
                    dvEditVendor.Style["display"] = "none";
                    dvEditAgName.Style["display"] = "none";
                    dvEditItNo.Style["display"] = "none";
                    hdnCodeValue1.Value = string.Empty;
                }
            }
            else if (Session["TestExp1"] == "1")
            {
                dvEditED.Style["display"] = "block";
                txtEditExpDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
                dvEditCV.Style["display"] = "block";
                txtCityVisited.Text = dsExpEditDetails.Rows[index]["CitiesVisited"].ToString();
                hdnCodeValue2.Value = "Y";
                hdnCodeValue4.Value = "Y";
            }
            else
            {
                Session.Remove("TestExp1");
                dvEditED.Style["display"] = "none";
                dvEditCV.Style["display"] = "none";
                hdnCodeValue2.Value = string.Empty;
                hdnCodeValue4.Value = string.Empty;
            }
            //Display fields End

            hdnAcc.Value = dsExpEditDetails.Rows[index]["AccountCode"].ToString();
            txtEditSalesTax.Text = dsExpEditDetails.Rows[index]["salesTax"].ToString();
            txtEditFoodTax.Text = dsExpEditDetails.Rows[index]["foodTax"].ToString();
            txtEditPreAmnt.Text = dsExpEditDetails.Rows[index]["preAmount"].ToString();
            txtEditActAmnt.Text = dsExpEditDetails.Rows[index]["ActualAmount"].ToString();
            txtEditComments.Text = dsExpEditDetails.Rows[index]["Comments"].ToString();
            chkReimb.Checked = dsExpEditDetails.Rows[index]["Reimbursable"].ToString() == "Y" ? true : false;
            txtExpBudg.Text = dsExpEditDetails.Rows[index]["budget"].ToString();
            txtExpCurrBal.Text = dsExpEditDetails.Rows[index]["currentBalance"].ToString();
            txtExpRemBudg.Text = dsExpEditDetails.Rows[index]["remaining"].ToString();
            txtExpBalAfter.Text = dsExpEditDetails.Rows[index]["balanceAfterpo"].ToString();

            if (Session["AttachmentCnt"].ToString() == "1")
            {
                LnkcurrAttachments.Style["display"] = "block";
                lblEAttMsg.Text = string.Empty;
            }
            else
            {
                LnkcurrAttachments.Style["display"] = "none";
                lblEAttMsg.Text = "<div class='message info' style='padding:5px'>No attachments to display</div>";
            }
            DivEdit.Visible = true;
            DivView.Visible = false;
            popup_Edit.Show();
        }
    }

    private void GetViewExpItemData(DataTable dsExpEditDetails, int index)
    {
        BlockViewFields();
        if (dsExpEditDetails.Rows.Count > 0)
        {
            DataTable dsCodes = (DataTable)Session["dsCodes"];
            DataTable dtCodes = dsCodes;

            lblVExpCd.Text = dsExpEditDetails.Rows[index]["ExpenseItem"].ToString();

            txtVAccCode.Text = dsExpEditDetails.Rows[index]["AccountCode"].ToString();
            string expHdnItem = "description='" + lblVExpCd.Text + "'";
            DataView viewExpItem1 = new DataView(dtCodes, expHdnItem, "CODEID", DataViewRowState.CurrentRows);
            dt = viewExpItem1.ToTable();
            hdnExpItem.Value = dt.Rows[0]["codeKey"].ToString();
            lblddlVExpType.Text = dsExpEditDetails.Rows[index]["EXP_TYPE"].ToString();
            txtVClass.Text = dsExpEditDetails.Rows[index]["className"].ToString();

            if (ddlType.SelectedValue == "ER")
            {
                divExptype.Visible = true;
                dvEditVPA.Style["display"] = "none";
                dvEditVAmt.Style["display"] = "block";
                txtEditPreAmnt.Enabled = false;
                txtEditActAmnt.Enabled = true;
            }
            else
            {
                txtEditPreAmnt.Enabled = true;
                txtEditActAmnt.Enabled = false;
                dvEditVPA.Style["display"] = "block";
                dvEditVAmt.Style["display"] = "none";
            }
            if (lblddlVExpType.Text == "GENERAL")
            {
                lblVCatCode.Text = string.Empty;
                lblddlVJobCd.Text = string.Empty;
                lblVPhcd.Text = string.Empty;
                dvEditVJob.Style["display"] = "none";
                dvEditVPhs.Style["display"] = "none";
                dvEditVJC.Style["display"] = "none";
            }
            else
            {
                dvEditVJob.Style["display"] = "block";
                dvEditVPhs.Style["display"] = "block";
                dvEditVJC.Style["display"] = "block";
                lblddlVJobCd.Text = dsExpEditDetails.Rows[index]["JOB_CODE"].ToString();
                lblVPhcd.Text = dsExpEditDetails.Rows[index]["JPHS_CODE"].ToString();
                lblVCatCode.Text = dsExpEditDetails.Rows[index]["JCAT_CODE"].ToString();
            }

            lblVDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();


            DataView viewSec = GetExpItemSections(dtCodes);
            DataTable dtSec = new DataTable();
            Session["TestExp1"] = "1";
            if (viewSec != null)
            {
                Session.Remove("TestExp1");
                dtSec = viewSec.ToTable();
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
                }
                else
                {
                    dvEditVED.Style["display"] = "none";
                }
                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditVFD.Style["display"] = "block";
                    dvEditVTD.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    lblVFromdate.Text = dsExpEditDetails.Rows[index]["FromDate"].ToString();
                    lblVTodate.Text = dsExpEditDetails.Rows[index]["ToDate"].ToString();
                }
                else
                {
                    dvEditVFD.Style["display"] = "none";
                    dvEditVTD.Style["display"] = "none";
                }
                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditVCV.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    lblVCity.Text = dsExpEditDetails.Rows[index]["CitiesVisited"].ToString();
                }
                else
                    dvEditVCV.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVFromcity.Style["display"] = "block";
                    dvEditVToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVFromcity.Text = dsExpEditDetails.Rows[index]["fromCity"].ToString();

                    //Assign values to ToCity field
                    lblVTocity.Text = dsExpEditDetails.Rows[index]["toCity"].ToString();
                }
                else
                {
                    dvEditVFromcity.Style["display"] = "none";
                    dvEditVToCity.Style["display"] = "none";
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVTT.Style["display"] = "block";
                    dvEditVLN.Style["display"] = "block";
                    dvEditVAmt.Style["display"] = "block";
                    dvEditVSalesTax.Style["display"] = "none";
                    lblVTotTrip.Text = dsExpEditDetails.Rows[index]["TotalTrip"].ToString();
                    lblVLNorm.Text = dsExpEditDetails.Rows[index]["LessNorm"].ToString();
                    lblVReimbt.Text = dsExpEditDetails.Rows[index]["Reimbt"].ToString();
                    lblVActAmt.ReadOnly = true;
                    lblVPreAmt.ReadOnly = true;
                }
                else
                {
                    dvEditVTT.Style["display"] = "none";
                    dvEditVLN.Style["display"] = "none";
                    dvEditVAmt.Style["display"] = "none";
                    dvEditVSalesTax.Style["display"] = "block";
                    lblVActAmt.ReadOnly = false;
                    lblVPreAmt.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVPreVendor.Style["display"] = "block";
                    dvEditVAgName.Style["display"] = "block";
                    dvEditVItNo.Style["display"] = "block";
                    lblVPreVendor.Text = dsExpEditDetails.Rows[index]["PreferredVendor"].ToString();
                    lblAgName.Text = dsExpEditDetails.Rows[index]["AgentName"].ToString();
                    lblVItNo.Text = dsExpEditDetails.Rows[index]["ItinararyNo"].ToString();
                }
                else
                {
                    dvEditVPreVendor.Style["display"] = "none";
                    dvEditVAgName.Style["display"] = "none";
                    dvEditVItNo.Style["display"] = "none";
                }
            }
            else if (Session["TestExp1"] == "1")
            {
                dvEditVED.Style["display"] = "block";
                lblVDate.Text = dsExpEditDetails.Rows[index]["ExpenseDate"].ToString();
                dvEditVCV.Style["display"] = "block";
                lblVCity.Text = dsExpEditDetails.Rows[index]["CitiesVisited"].ToString();
            }
            else
            {
                Session.Remove("TestExp1");
                dvEditED.Style["display"] = "none";
                dvEditCV.Style["display"] = "none";
            }
            lblVSalesTax.Text = dsExpEditDetails.Rows[index]["salesTax"].ToString();
            lblVFoodTax.Text = dsExpEditDetails.Rows[index]["foodTax"].ToString();
            lblVActAmt.Text = dsExpEditDetails.Rows[index]["ActualAmount"].ToString();
            lblVPreAmt.Text = dsExpEditDetails.Rows[index]["PreAmount"].ToString();

            lblVPayMode.Text = dsExpEditDetails.Rows[index]["PaymentID"].ToString();
            lblVcomnts.Text = dsExpEditDetails.Rows[index]["Comments"].ToString();
            chkVReimb.Checked = dsExpEditDetails.Rows[index]["Reimbursable"].ToString() == "Y" ? true : false;
            txtVExpBudg.Text = dsExpEditDetails.Rows[index]["budget"].ToString();
            txtVExpCurrBal.Text = dsExpEditDetails.Rows[index]["currentBalance"].ToString();
            txtVExpRemBudg.Text = dsExpEditDetails.Rows[index]["remaining"].ToString();
            txtVExpBalAfter.Text = dsExpEditDetails.Rows[index]["balanceAfterpo"].ToString();

            if (Session["AttachmentCnt"].ToString() == "1")
                LinkViewAttachments.Style["diaplay"] = "block";
            else
                LinkViewAttachments.Style["diaplay"] = "none";

            DivEdit.Visible = false;
            DivView.Visible = true;
            popup_Edit.Show();
        }
    }

    private void ToggleFields(bool check)
    {
        ddlEditExpType.Enabled = check;
        //ddlEditExpenseItem.Enabled = check;
        ddlEditJobs.Enabled = check;
        ddlEditPhases.Enabled = check;
        ddlEditCategories.Enabled = check;
        ddlAccountCodes.Enabled = check;
        txtEditExpDate.Enabled = check;
        txtEditFromdate.Enabled = check;
        txtEditTodate.Enabled = check;
        txtCityVisited.Enabled = check;
        txtFromCity.Enabled = check;
        txtToCity.Enabled = check;
        txtEditLocalLocation.Enabled = check;
        chkIsOutOfCity.Enabled = check;
        txtPrefVendor.Enabled = check;
        txtEditAgentName.Enabled = check;
        //ddlEditAgName.Enabled = check;
        txtEditItNo.Enabled = check;
        ddlCompCar.Enabled = check;
        txtEditTotTrip.Enabled = check;
        txtEditLNorm.Enabled = check;
        txtEditReimbt.Enabled = check;
        txtEditPreAmnt.Enabled = check;
        txtEditActAmnt.Enabled = check;
        ddlEditPaymentType.Enabled = check;
        txtEditComments.Enabled = check;
    }

    #endregion

    #region Calculate Budget

    protected void AccountCodeChanged(object sender, EventArgs e)
    {
        //Get Budget by selected account code
        GetBudgetData();
        GetClassificationAttributes();
        hdnExpItem.Value = ddlAccountCodes.SelectedValue;
        Session["Sectiondt"] = GetExpItemSections((DataTable)Session["dsCodes"]);
        txtCityVisited.Text = Session["City"].ToString() == string.Empty ? string.Empty : Session["City"].ToString();
        txtFromCity.Text = Session["City"].ToString() == string.Empty ? string.Empty : Session["City"].ToString();
        dvEditVendor.Style["display"] = dvEditAgName.Style["display"] = dvEditItNo.Style["display"] = "none";
        Session["TestExp"] = "1";
        RetainFields();
        Session.Remove("TestExp");
        DivEdit.Visible = true;
        DivView.Visible = false;
        popup_Edit.Show();
    }

    private void GetClassificationAttributes()
    {
        //get reimbursable and attachment attributes
        DataTable dtAcc = (DataTable)Session["AccountCodes"];
        string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
        DataView dvAcc = new DataView(dtAcc, "acctCode = '" + arr[0].Trim() + "'", "AccountCode", DataViewRowState.CurrentRows);
        if (dvAcc != null)
            if (dvAcc.ToTable().Rows.Count > 0)
            {
                string reimb = dvAcc.ToTable().Rows[0]["reimbursable"].ToString();
                string attch = dvAcc.ToTable().Rows[0]["attachment"].ToString();
                hdnQBAcctID.Value = dvAcc.ToTable().Rows[0]["qbAccID"].ToString();
                chkReimb.Checked = (string.IsNullOrEmpty(reimb) ? false : (reimb == "Y" ? true : false));
                hdnAttMandtry.Value = (string.IsNullOrEmpty(attch) ? "N" : attch);
            }
        //get reimbursable and attachment attributes
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
                if ((Convert.ToDateTime(txtTripStartDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
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

    private void GetBudgetData()
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
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
                    if ((Convert.ToDateTime(txtTripStartDate.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        ////Fetch budget details by selected classification
        string deptCode = string.Empty;
        if (Session["AccountBy"].ToString() == "DEPT" || string.IsNullOrEmpty(Session["AccountBy"].ToString()))
            deptCode = Session["DepartmentCode"].ToString();
        else if (Session["AccountBy"].ToString() == "COMP")
            deptCode = "All";

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = ddlAccountCodes.SelectedValue;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = deptCode;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string[] arr = ddlAccountCodes.SelectedItem.Text.Split(new string[] { "--" }, StringSplitOptions.None);
        string expression = "accountCode = '" + arr[0].Trim() + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();

        if (dtAcccode.Rows.Count == 0 || ut.NullSafeDouble(dtAcccode.Rows[0]["budget"].ToString()) == 0)
        {
            txtExpBudg.Text = txtExpCurrBal.Text = txtExpRemBudg.Text = txtExpBalAfter.Text = string.Empty;
            dvExpError.Style["color"] = "Red";
            dvExpError.InnerHtml = "No Budget allocated for this fiscal month. Please check your budget or contact your administrator.";
        }
        else
        {
            dvExpError.InnerHtml = string.Empty;
            txtExpBudg.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtExpCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtExpRemBudg.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                if (hdnAccCode.Value == ddlAccountCodes.SelectedValue)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtEditActAmnt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtExpBalAfter.Text = (ut.NullSafeDouble(txtExpRemBudg.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(txtEditActAmnt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFields()
    {
        txtExpBalAfter.Attributes.Add("readonly", "readonly");
        txtExpCurrBal.Attributes.Add("readonly", "readonly");
        txtExpRemBudg.Attributes.Add("readonly", "readonly");
        txtExpBudg.Attributes.Add("readonly", "readonly");
    }

    #endregion

    #region Add Expense Item

    protected void AddExpenseItem(object sender, EventArgs e)
    {
        btnAddExpItemSave.Attributes.Add("onclick", "javascript:return validateAddNewExpItem();");
        ClearAddExpItemFields();
        txtAddExpCode.Focus();

        //Get currency symbol
        DataTable dtCodes = (DataTable)Session["dsCodes"];
        DataView dv = new DataView(dtCodes, "CODEID = 'CURRENCY' AND CODEKEY = '" + Session["Currency"].ToString() + "'", "CodeValue1", DataViewRowState.CurrentRows);
        currencySymbol = Convert.ToChar(dv.ToTable().Rows[0]["CodeValue1"]);

        popup_Edit.Hide();
        popAddExpItem.Show();
    }

    protected void btnAddExpItemSave_Click(object sender, EventArgs e)
    {
        CodeValueVO code = new CodeValueVO();
        code.addedBy = Session["UserID"].ToString();
        code.addedOn = DateTime.Now.ToShortDateString();
        code.codeId = "EXPITEM";
        code.codeKey = txtAddExpCode.Text;
        code.codeValue1 = txtAddExpAccCode.Text;
        code.codeValue2 = txtAddExpMaxLmt.Text;
        code.codeValue3 = rdTravelSpec.SelectedValue;
        code.codeValue4 = rdReimb.SelectedValue;
        code.codeValue5 = rdAtt.SelectedValue;
        code.compCode = "ALL";
        code.description = txtAddExpDescr.Text;
        code.modifiedBy = Session["UserID"].ToString();
        code.modifiedOn = DateTime.Now.ToShortDateString();
        code.orgId = Session["OrgID"].ToString();
        string retStr = xms.addCodeValues(code, 2);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayAddExpItemMessage("Green", retStr);
            Session.Remove("dsItems");
            //BindExpItemsAfterAdd(txtAddExpDescr.Text);
            txtCityVisited.Text = Session["City"].ToString();
            Session["TestExp"] = "1";
            RetainFields();
            GetAccountCodeByExpenseItem(ddlAccountCodes);
            ClearAddExpItemFields();
            popAddExpItem.Hide();
            popup_Edit.Show();
        }
        else
        {
            DisplayAddExpItemMessage("Red", retStr);
            popAddExpItem.Show();
            popup_Edit.Hide();
        }
    }

    protected void btnAddExpItemCancel_Click(object sender, EventArgs e)
    {
        popAddExpItem.Hide();
        popup_Edit.Show();
    }

    private void ClearAddExpItemFields()
    {
        txtAddExpCode.Text = txtAddExpAccCode.Text = txtAddExpDescr.Text = txtAddExpMaxLmt.Text = string.Empty;
    }

    void DisplayAddExpItemMessage(string color, string msg)
    {
        dvAddExpItemErr.Style["color"] = color;
        dvAddExpItemErr.InnerHtml = msg;
    }

    //private void BindExpItemsAfterAdd(string expItemValue)
    //{
    //    DataSet dsItems = new DataSet();
    //    string expItem = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["DepartmentCode"].ToString(), 1, string.Empty);
    //    List<DeptVO> eItems = ser.Deserialize<List<DeptVO>>(expItem);
    //    dsItems.Tables.Add(Utility.ConvertToDataTable(eItems));
    //    Session["dsItems"] = dsItems;
    //    ddlEditExpenseItem.DataSource = dsItems;
    //    ddlEditExpenseItem.DataBind();
    //    ddlEditExpenseItem.Items.Insert(0, "Please Select");
    //    ddlEditExpenseItem.Items.FindByText("Please Select").Value = "0";
    //    ddlEditExpenseItem.SelectedValue = expItemValue;
    //}

    #endregion

    #region Check for Similar Vendor and Amount

    private string ValidateSimilarVendForExp()
    {
        string str = xms.checkVendorExist(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(),
                       ut.NullSafeInteger(Session["UserID"]), txtPrefVendor.Text, ut.NullSafeInteger(txtEditActAmnt.Text));
        return str;
    }

    protected void btnSimilarVendAlertYes_Click(object sender, EventArgs e)
    {
        SaveNewLine();
    }

    #endregion

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
}



