using System;
using System.Data;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using System.Collections;
using System.IO.Compression;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.IO;
using System.Net.Mail;

public partial class APApproveReject : System.Web.UI.Page
{
    #region public variables App/Rej

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    public int reqId = 0;
    int statusID = 0;
    int resultPerPage = Convert.ToInt32(ConfigurationManager.AppSettings["resultsPerPage"]);
    DataSet dsCnt = new DataSet();
    DataSet dsExp = new DataSet();
    public DataSet dsDetails = new DataSet();
    Encryption encrypt = new Encryption();
    Mails mails = new Mails();
    bool preApproved = false;
    int userId = 0;
    public int ddlTypeVar = 0;
    public int pendReqNum = 0;
    public int apprReqNum = 0;
    public int rejReqNum = 0;
    public int parkedReqNum = 0;
    private bool _refreshExp = false;

    #endregion

    #region public variables Edit Exp
    int doUpdate = 0;
    public string navfrom = string.Empty;
    public string expType = string.Empty;
    DataTable dt = new DataTable();
    DataTable dtPO = new DataTable();
    DataRow dr;
    string attachmentPath = ("Attachments");
    public string[] resultFileNames;
    string delExp = string.Empty;
    DataSet dsApEmail = new DataSet();
    public double expTotal = 0, autoTotal = 0, grandTotal = 0, preExpTotal = 0;
    Utility ut = new Utility();
    DataSet dsFiscalDate = new DataSet();
    string tripMonth = string.Empty;
    string tripMonth_Appr = string.Empty;
    string tripMonth_Rej = string.Empty;
    DataSet ds = new DataSet();
    string remb, compCode, modifiedby, orgId, requestid, explineNo;


    #endregion

    #region public variables Auto Exp
    public int autoid = 0;
    public double ppm;
    string delAuto = string.Empty;
    DataTable dt_Auto = new DataTable();
    #endregion

    #region Load Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                if (Request.QueryString.Count > 0)
                    CreateBasicSessions();
                Batchdetails.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
                txtKeywordSearch.Attributes.Add("onkeyup", "Filter(this);");
                txtKeywordSearchAppr.Attributes.Add("onkeyup", "FilterAppr(this);");
                txtKeywordSearchRej.Attributes.Add("onkeyup", "FilterRej(this);");
                txtKeywordSearchPark.Attributes.Add("onkeyup", "FilterPark(this);");
                btnClearAdvSearch.Attributes.Add("onclick", "javascript:return clearAdvSearch();");
                LoadData();
            }
            btnHApprove.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
            LoadUserControls();
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + " -- AP Approvals", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void CreateBasicSessions()
    {
        DataSet dsCompCodes = new DataSet();
        if (Session["CompCodesList"] == null)
        {
            string strCompCodes = xms.getCompCodes(Session["OrgID"].ToString(), 2);
            List<CompanyCodesVO> lstCompCode = ser.Deserialize<List<CompanyCodesVO>>(strCompCodes);
            dsCompCodes.Tables.Add(Utility.ConvertToDataTable(lstCompCode));
            Session["CompCodesList"] = dsCompCodes;
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];


        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            DataTable dtCodes = new DataTable();
            dtCodes = Utility.ConvertToDataTable(codes);
            Session["dsCodes"] = dtCodes;
        }

        ////Get Tax details/////
        if (Session["Tax"] == null)
        {
            string expression1 = "CompCode ='" + Session["CompCode"].ToString() + "'";
            DataTable dtCompCodes = dsCompCodes.Tables[0];
            DataView dvCompCodes = new DataView(dtCompCodes, expression1, "CompCode", DataViewRowState.CurrentRows);

            DataView view = new DataView((DataTable)Session["dsCodes"], "CODEID = 'REGIONCD'", "CodeID", DataViewRowState.CurrentRows);
            DataTable dt = view.ToTable();

            for (int i = 0; i < dt.Rows.Count; i++)
                if (dvCompCodes.ToTable().Rows[0]["State"].ToString() == dt.Rows[i]["CodeKey"].ToString())
                    Session["Tax"] = dt.Rows[i]["CodeValue1"].ToString();
        }
    }

    private void LoadData()
    {
        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("dsSt_park_po");
        BindExpProcessTypes();
        if (Session["ApExpType"] != null)
            ddlTypeVar = Convert.ToInt32(Session["ApExpType"]);
        else
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            BindPark_APGrid();
        }
        if (Session["AppFlag"].ToString().ToLower() == "n")
        {
            plcPending.Visible = true;
            plcRejected.Visible = true;
        }
        else
        {
            plcPending.Visible = false;
            plcRejected.Visible = false;
        }
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

        if (Session["ApExpType"] != null)
            ddlType.SelectedValue = Convert.ToInt32(Session["ApExpType"]) == 0 ? "ER" : Convert.ToInt32(Session["ApExpType"]) == 1 ? "PA" : "PO";
        else
            ddlType.SelectedValue = hdnExpProcessType.Value;
    }

    private void BindApGrid()
    {
        if (Session["dsSt_pen"] == null)
        {
            dsExp = BindDetails(2, 0);
            Session["dsSt_pen"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_pen"];
        pendReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApExp"] != null) && Session["SortDir_ApExp"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApExp"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApExp"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApExp"].ToString() + " " + Session["SortDir_ApExp"].ToString();
            gvApDetails.DataSource = sortedView;
        }
        else
            gvApDetails.DataSource = dsExp;

        gvApDetails.DataBind();
    }

    private void BindApAppGrid()
    {
        if (Session["dsSt_App"] == null)
        {
            dsExp = BindDetails(4, 0);
            Session["dsSt_App"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_App"];
        apprReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApExpApp"] != null) && Session["SortDir_ApExpApp"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApExpApp"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApExpApp"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApExpApp"].ToString() + " " + Session["SortDir_ApExpApp"].ToString();
            gvApproved.DataSource = sortedView;
        }
        else
            gvApproved.DataSource = dsExp;

        gvApproved.DataBind();

    }

    private void BindApRejGrid()
    {
        if (Session["dsSt_Rej"] == null)
        {
            dsExp = BindDetails(6, 0);
            Session["dsSt_Rej"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_Rej"];
        rejReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApExpRej"] != null) && Session["SortDir_ApExpRej"] != null)
        {
            //    DataTable dtSt = dsExp.Tables[0];
            //    DataTable dtSt_Clone = dtSt.Clone();
            //    dtSt_Clone.Columns[Session["SortExpr_ApExpRej"].ToString()].DataType = Type.GetType("System.Double");
            //    foreach (DataRow dr in dtSt.Rows)
            //    {
            //        dtSt_Clone.ImportRow(dr);
            //    }
            //    dtSt_Clone.AcceptChanges();
            //    DataView sortedView = new DataView(dtSt_Clone);

            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApExpRej"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApExpRej"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApExpRej"].ToString() + " " + Session["SortDir_ApExpRej"].ToString();
            gvRejected.DataSource = sortedView;
        }
        else
            gvRejected.DataSource = dsExp;

        gvRejected.DataBind();
    }

    private void BindPen_APGrid_Pre()
    {
        if (Session["dsSt_pen_pre"] == null)
        {
            dsExp = BindDetails(2, 1);
            Session["dsSt_pen_pre"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_pen_pre"];
        pendReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApPre"] != null) && Session["SortDir_ApPre"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPre"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPre"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPre"].ToString() + " " + Session["SortDir_ApPre"].ToString();
            gvApDetails.DataSource = sortedView;
        }
        else
            gvApDetails.DataSource = dsExp;

        gvApDetails.DataBind();
    }

    private void BindApp_APGrid_Pre()
    {
        if (Session["dsSt_App_pre"] == null)
        {
            dsExp = BindDetails(4, 1);
            Session["dsSt_App_pre"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_App_pre"];
        apprReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApPreApp"] != null) && Session["SortDir_ApPreApp"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPreApp"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPreApp"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPreApp"].ToString() + " " + Session["SortDir_ApPreApp"].ToString();
            gvApproved.DataSource = sortedView;
        }
        else
            gvApproved.DataSource = dsExp;

        gvApproved.DataBind();

    }

    private void BindRej_APGrid_Pre()
    {
        if (Session["dsSt_Rej_pre"] == null)
        {
            dsExp = BindDetails(6, 1);
            Session["dsSt_Rej_pre"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_Rej_pre"];
        rejReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApPreRej"] != null) && Session["SortDir_ApPreRej"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPreRej"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPreRej"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPreRej"].ToString() + " " + Session["SortDir_ApPreRej"].ToString();
            gvRejected.DataSource = sortedView;
        }
        else
            gvRejected.DataSource = dsExp;

        gvRejected.DataBind();
    }

    private void BindPen_APGrid_PO()
    {
        if (Session["dsSt_pen_po"] == null)
        {
            dsExp = BindDetails(2, 2);
            Session["dsSt_pen_po"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_pen_po"];

        /////Filter data for pending POs
        //DataSet dsAll = new DataSet();
        //string expr = "statusId = 2";
        //DataView dvPending = new DataView(dsExp.Tables[0], expr, "statusId", DataViewRowState.CurrentRows);
        //dsAll.Tables.Add(dvPending.ToTable());
        pendReqNum = dsExp.Tables[0].Rows.Count;

        /////Filter data for parked POs
        //string expr1 = "statusId = 18";
        //DataView dvParked = new DataView(dsExp.Tables[0], expr1, "statusId", DataViewRowState.CurrentRows);
        //BindPark_APGrid(dvParked.ToTable());
        //parkedReqNum = dvParked.ToTable().Rows.Count;

        if ((Session["SortExpr_ApPo"] != null) && Session["SortDir_ApPo"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPo"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPo"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPo"].ToString() + " " + Session["SortDir_ApPo"].ToString();
            gvApDetails.DataSource = sortedView;
        }
        else
            gvApDetails.DataSource = dsExp;

        gvApDetails.DataBind();
    }

    private void BindApp_APGrid_PO()
    {
        if (Session["dsSt_App_po"] == null)
        {
            dsExp = BindDetails(4, 2);
            Session["dsSt_App_po"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_App_po"];
        apprReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApPoApp"] != null) && Session["SortDir_ApPoApp"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPoApp"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPoApp"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPoApp"].ToString() + " " + Session["SortDir_ApPoApp"].ToString();
            gvApproved.DataSource = sortedView;
        }
        else
            gvApproved.DataSource = dsExp;

        gvApproved.DataBind();

    }

    private void BindRej_APGrid_PO()
    {
        if (Session["dsSt_Rej_po"] == null)
        {
            dsExp = BindDetails(6, 2);
            Session["dsSt_Rej_po"] = dsExp;
        }
        else
            dsExp = (DataSet)Session["dsSt_Rej_po"];
        rejReqNum = dsExp.Tables[0].Rows.Count;

        if ((Session["SortExpr_ApPoRej"] != null) && Session["SortDir_ApPoRej"] != null)
        {
            DataView sortedView = new DataView(dsExp.Tables[0]);
            if (Session["SortExpr_ApPoRej"].ToString() == "ActualAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ApPoRej"].ToString() == "PreAmount")
            {
                DataTable dtSt = dsExp.Tables[0];
                DataTable dtSt_Clone = dtSt.Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dtSt.Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ApPoRej"].ToString() + " " + Session["SortDir_ApPoRej"].ToString();
            gvRejected.DataSource = sortedView;
        }
        else
            gvRejected.DataSource = dsExp;

        gvRejected.DataBind();
    }

    private void BindPark_APGrid()
    {
        DataSet dsParked = new DataSet();
        if (Session["dsSt_park_po"] == null)
        {
            dsParked = BindDetails(18, 2);
            Session["dsSt_park_po"] = dsExp;
        }
        else
            dsParked = (DataSet)Session["dsSt_park_po"];

        if (Session["dsSt_park_po"] == null)
            Session["dsSt_park_po"] = dsParked;
        parkedReqNum = dsParked.Tables[0].Rows.Count;

        if ((Session["SortExpr_ParkPo"] != null) && Session["SortDir_ParkPo"] != null)
        {
            DataView sortedView = new DataView(dsParked.Tables[0]);
            if (Session["SortExpr_ParkPo"].ToString() == "ActualAmount")
            {
                DataTable dtSt_Clone = dsParked.Tables[0].Clone();
                dtSt_Clone.Columns["ActualAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dsParked.Tables[0].Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            else if (Session["SortExpr_ParkPo"].ToString() == "PreAmount")
            {
                DataTable dtSt_Clone = dsParked.Tables[0].Clone();
                dtSt_Clone.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dsParked.Tables[0].Rows)
                {
                    dtSt_Clone.ImportRow(dr);
                }
                dtSt_Clone.AcceptChanges();
                sortedView = new DataView(dtSt_Clone);
            }
            sortedView.Sort = Session["SortExpr_ParkPo"].ToString() + " " + Session["SortDir_ParkPo"].ToString();
            gvApDetailsPark.DataSource = sortedView;
        }
        else
            gvApDetailsPark.DataSource = dsParked.Tables[0];

        gvApDetailsPark.DataBind();
    }

    protected void gvApDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            Label lblPAmnt = (Label)e.Row.FindControl("lblPAmnt");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            LinkButton lnkReqAllocated = (LinkButton)e.Row.FindControl("lnkReqAllocated");

            lnkReqAllocated.Text = "Unallocated";
            if (ddlTypeVar == 2)
            {
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "preferredVendor").ToString();
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
                gvApDetails.Columns[1].ItemStyle.Width = 170;
                gvApDetails.Columns[1].HeaderStyle.Width = 170;
            }
            else
            {
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
                //gvApDetails.Columns[1].ItemStyle.Width = 90;
                //gvApDetails.Columns[1].HeaderStyle.Width = 90;
            }

            int x = 0;
            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");

            if (hdnLmtExceeded.Value.ToLower() == "y" && hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit and one of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "One of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnLmtExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit.";
            }
            if (x > 0)
                e.Row.Style["background-color"] = "#FFCCCC";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkPreAmount = (LinkButton)e.Row.FindControl("lnkPreAmount");
            LinkButton lnkAmount = (LinkButton)e.Row.FindControl("lnkAmount");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            if (ddlTypeVar == 2)
            {
                lnkPreAmount.Text = "Vendor";
                lnkPreAmount.CommandArgument = "PreferredVendor";
                lnkAmount.Text = "PoAmount";
                lnkAmount.CommandArgument = "PreAmount";
                lnkRequestID.Text = "PONo";
                lnkRequestID.CommandArgument = "OurRefNo";
            }
            else
            {
                lnkPreAmount.Text = "PreAmount";
                lnkPreAmount.CommandArgument = "PreAmount";
                lnkAmount.Text = "ActualAmount";
                lnkAmount.CommandArgument = "ActualAmount";
                lnkRequestID.Text = "RequestId";
                lnkRequestID.CommandArgument = "RequestId";
            }
            if (ddlTypeVar == 0)
            {
                if (Session["SortDir_ApExp"] != null && Session["Control_ApExp"] != null)
                {
                    //foreach (TableCell cell in e.Row.Cells)
                    //{
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApExp"].ToString());
                    if (Session["SortDir_ApExp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                    //}
                }
            }
            else if (ddlTypeVar == 1)
            {
                if (Session["SortDir_ApPre"] != null && Session["Control_ApPre"] != null)
                {
                    //foreach (TableCell cell in e.Row.Cells)
                    //{
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPre"].ToString());
                    if (Session["SortDir_ApPre"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                    //}
                }
            }
            else if (ddlTypeVar == 2)
            {
                if (Session["SortDir_ApPo"] != null && Session["Control_ApPo"] != null)
                {
                    //foreach (TableCell cell in e.Row.Cells)
                    //{
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPo"].ToString());
                    if (Session["SortDir_ApPo"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                    //}
                }
            }
        }
    }

    protected void btnCommentsSave_Click(object sender, EventArgs e)
    {
        int uID = Convert.ToInt32(Session["UserID"]);

        RequestVO req = new RequestVO();
        req.approved = "2";
        req.preApproved = (Convert.ToInt32(Session["Type"]));
        req.orgId = Session["OrgID"].ToString();
        req.reqId = Session["ReqID"].ToString();
        req.type = "0";
        req.seqId = Session["UserID"].ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = Session["User_Req"].ToString();
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = txtComments.Text;
        req.vendorEmail = string.Empty;
        req.emailFaxFlag = string.Empty;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        req.mgrGroupCode = string.Empty;
        req.parkComment = string.Empty;
        req.parkDate = string.Empty;
        req.parkDays = 0;
        bool pre = false;
        if (Convert.ToInt32(Session["Type"]) == 1)
            pre = true;
        string retStr = xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));
        txtComments.Text = string.Empty;

        Session.Remove("dsSt_pen");
        //Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        //Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        //Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            //BindApAppGrid();
            BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            //BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
        }
        else
        {
            BindPen_APGrid_PO();
            //BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        ReloadUserControls();
        popup_Comments.Hide();
    }

    protected void rblExpType_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        lblAGrandTotalAmnt.Text = string.Empty;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        Session["ApExpType"] = ddlTypeVar;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            BindPark_APGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        ReloadUserControls();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        ReloadUserControls();
    }

    protected void BatchData(object sender, EventArgs e)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "showProgressAppr() ;", true);
        Response.Redirect("Codes/BatchCreation.aspx");
    }

    protected void SortExpressionPen(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
            Session["Control_ApExp"] = lnk.ID;
        else if (ddlTypeVar == 1)
            Session["Control_ApPre"] = lnk.ID;
        else if (ddlTypeVar == 2)
            Session["Control_ApPo"] = lnk.ID;
        if (ddlTypeVar == 0)
        {
            if (Session["SortDir_ApExp"] == null || Session["SortDir_ApExp"].ToString() == "Desc")
                Session["SortDir_ApExp"] = "Asc";
            else
                Session["SortDir_ApExp"] = "Desc";
        }
        else if (ddlTypeVar == 1)
        {
            if (Session["SortDir_ApPre"] == null || Session["SortDir_ApPre"].ToString() == "Desc")
                Session["SortDir_ApPre"] = "Asc";
            else
                Session["SortDir_ApPre"] = "Desc";
        }
        else if (ddlTypeVar == 2)
        {
            if (Session["SortDir_ApPo"] == null || Session["SortDir_ApPo"].ToString() == "Desc")
                Session["SortDir_ApPo"] = "Asc";
            else
                Session["SortDir_ApPo"] = "Desc";
        }

        if (ddlTypeVar == 0)
            Session["SortExpr_ApExp"] = e.CommandArgument;
        else if (ddlTypeVar == 1)
            Session["SortExpr_ApPre"] = e.CommandArgument;
        else if (ddlTypeVar == 2)
            Session["SortExpr_ApPo"] = e.CommandArgument;

        if (ddlTypeVar == 0)
            BindApGrid();
        else if (ddlTypeVar == 1)
            BindPen_APGrid_Pre();
        else
            BindPen_APGrid_PO();

    }

    private void LoadUserControls()
    {
        //var ctrl = LoadControl("Controls/jobsiteleft.ascx");
        //ctrl.ID = "siteLeft";
        //pcSiteLeft.Controls.Add(ctrl);
        //var ctrl1 = LoadControl("Controls/siteadminleft.ascx");
        //ctrl1.ID = "siteAdmin";
        //pcSiteAdminLeft.Controls.Add(ctrl1);
    }

    private void ReloadUserControls()
    {
        //pcSiteLeft.Controls.Clear();
        //pcSiteAdminLeft.Controls.Clear();
        LoadUserControls();
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

    #endregion

    #region Bind Approved/Rejected Requests

    private DataSet BindDetails(int statusID, int expType)
    {
        string strAPExp = xms.getRequestsForAPApproval(Convert.ToInt32(Session["OrgID"]), statusID, Session["CompCode"].ToString(), expType);
        List<ApproveRequestVO> lstApExp = ser.Deserialize<List<ApproveRequestVO>>(strAPExp);
        DataSet dsExp = new DataSet();
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstApExp));
        return dsExp;
    }

    private DataView GetExpCodeDetails(string expItem)
    {
        DataSet dsCodes = new DataSet();
        DataSet dsCodes1 = new DataSet();
        DataTable dtCodes1 = new DataTable();
        DataTable dtCodes = new DataTable();
        if (Session["dsCodes"] == null)
        {
            string expCodes = xms.getExpCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), 2);
            string[] arrExpCodes = new string[2];
            arrExpCodes = expCodes.Split('~');
            List<CodeValueVO> codes = ser.Deserialize<List<CodeValueVO>>(arrExpCodes[0]);
            dsCodes1.Tables.Add(Utility.ConvertToDataTable(codes));
            dtCodes1 = dsCodes1.Tables[0];
            Session["dsCodes"] = dtCodes;
        }
        else
            dtCodes1 = (DataTable)Session["dsCodes"];

        dtCodes = dtCodes1;

        //string expr = "CODEID = 'EXPITEM' and DESCRIPTION = '" + expItem + "'";
        //DataView view = new DataView(dtCodes, expr, "CodeID", DataViewRowState.CurrentRows);
        //DataSet dsExp = new DataSet();
        //dsExp.Tables.Add(view.ToTable());

        //string cKey = dsExp.Tables[0].Rows[0]["CodeKey"].ToString();

        DataTable dt1 = dtCodes;
        dt1.DefaultView.RowFilter = "CodeID LIKE '%EXPITEMSECTION%'";
        DataTable dt2 = dt1.DefaultView.ToTable();
        dt2.DefaultView.RowFilter = "DESCRIPTION = '" + expItem + "'";
        DataTable dt3 = dt2.DefaultView.ToTable();
        DataView view1 = dt3.DefaultView;
        view1.Sort = "CodeID Asc";
        return view1.ToTable().Rows.Count > 0 ? view1 : null;
    }

    #endregion

    #region Pending Requests

    #region Edit Expense

    protected void Edit(object sender, EventArgs e)
    {
        Session.Remove("LmtExceeded");
        Session.Remove("ReqID");
        HiddenField hdnPreApproved = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            Session["Type"] = hdnPreApproved.Value;
        }
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            LoadEditPOData(sender);
        else
            LoadEditData(sender);
    }

    private void LoadEditData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session.Remove("LmtExceeded");
        Session.Remove("forward");

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");

        dvError_Pen.InnerHtml = string.Empty;
        btnApprove.Visible = true;
        btnReject.Visible = true;

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnPreAmnt = new HiddenField();
        HiddenField hdnActAmnt = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnOnBehalfOf = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnPreAmnt = (HiddenField)row.Cells[0].FindControl("hdnPreAmnt");
            hdnActAmnt = (HiddenField)row.Cells[0].FindControl("hdnActAmnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnOnBehalfOf = (HiddenField)row.Cells[0].FindControl("hdnOnBehalfOf");
        }
        else
        {
            foreach (GridViewRow row1 in gvApDetails.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnPreAmnt = (HiddenField)row1.FindControl("hdnPreAmnt");
                    hdnActAmnt = (HiddenField)row1.FindControl("hdnActAmnt");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnOnBehalfOf = (HiddenField)row1.FindControl("hdnOnBehalfOf");
                    break;
                }
            }
        }
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;

        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");

        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlManagerEmail.DataSource = dtManager;
        ddlManagerEmail.DataBind();

        txtPurpose.Text = hdnPurpose.Value;
        txtTripStartDate.Text = Convert.ToDateTime(hdnStartDate.Value).ToShortDateString();
        txtOnBehalfOf.Text = hdnOnBehalfOf.Value;
        txtPurpose.ReadOnly = txtTripStartDate.ReadOnly = txtOnBehalfOf.ReadOnly = true;

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        Session["dsExp"] = dsExp;
        if (dsExp != null)
        {
            dt = dsExp.Tables[0];
            Session["dt"] = dt;
            GetData();
        }

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lknCmnt.Enabled = true;
            lknCmnt.Style["text-decoration"] = "none";
            lknCmnt.CssClass = "button button-blue";
            lknCmnt.ToolTip = "Click to view comments";
        }
        else
        {
            lknCmnt.Enabled = false;
            lknCmnt.Style["text-decoration"] = "none";
            lknCmnt.CssClass = "button button-gray";
            lknCmnt.ToolTip = "No comments for this expense";
        }

        //Calculate totals
        expTotal = 0; grandTotal = 0; preExpTotal = 0;// autoTotal = 0;

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblPGrandTotalAmnt.Text = grandTotal.ToString();
        Session["AmountToExp"] = lblPGrandTotalAmnt.Text;
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblPGrandTotal.Style["color"] = lblPGrandTotalAmnt.Style["color"] = "Red";
            lblPGrandTotal.ToolTip = lblPGrandTotalAmnt.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblPGrandTotal.Style["color"] = lblPGrandTotalAmnt.Style["color"] = "Green";
            lblPGrandTotal.ToolTip = lblPGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }

        //try
        //{
        //    //Printing PO Begin
        //    string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["Email"].ToString());
        //    //hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //    btnPrintPO_pen.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //    //Printing PO End
        //}
        //catch (Exception ex) { }
        dvError_Pen.InnerHtml = string.Empty;
        btnApprove.Visible = true;
        btnReject.Visible = true;
        btnApprove.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
        popup.Show();
    }

    private DataTable BindPrefVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlPreVendor.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlPreVendor.DataBind();
        ddlPreVendor.Items.Insert(0, "Please Select");
        ddlPreVendor.Items.FindByText("Please Select").Value = "0";
        return dt;
    }

    private void BindJobs(int userId, DropDownList ddl)
    {
        DataTable dt = new DataTable();
        if (Session["TSJobsList"] == null)
        {
            string str = xms.getTSJobs(ut.NullSafeInteger(Session["OrgID"]), userId, Session["CompCode"].ToString(), string.Empty, string.Empty);
            List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
            dt = Utility.ConvertToDataTable(lst);
            Session["TSJobsList"] = dt;
        }
        else
            dt = (DataTable)Session["TSJobsList"];
        ddl.DataSource = dt;
        ddl.DataTextField = "JobName";
        ddl.DataValueField = "jobCode";
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
    }

    private void LoadEditPOData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("AttchList");

        dvError_Pen.InnerHtml = string.Empty;
        btnApprove.Visible = true;
        btnReject.Visible = true;

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
        }
        else
        {
            foreach (GridViewRow row1 in gvApDetails.Rows)
            {
                hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(hdnMGReqID.Value) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    break;
                }
            }
        }
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;

        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");

        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlPOMgrEmail.DataSource = dtManager;
        ddlPOMgrEmail.DataBind();

        txtPOTripStrtDate.Text = Convert.ToDateTime(hdnStartDate.Value).ToShortDateString();
        txtPOTripStrtDate.ReadOnly = true;
        txtPoPurpose.Text = hdnPurpose.Value;
        txtPoPurpose.ReadOnly = true;
        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dtPO = dsExp.Tables[0];
            Session["dtPO"] = dtPO;
            GetPOData();
        }

        //Get Data for forwarding PO to Vendor
        hdnSysOrderFlg.Value = dsExp.Tables[0].Rows[0]["otherFromCity"].ToString();
        hdnVendEmailFlg.Value = dsExp.Tables[0].Rows[0]["otherToCity"].ToString();
        hdnVendEmail.Value = hdnSysOrderFlg.Value == "Y" ? dsExp.Tables[0].Rows[0]["otherToCity"].ToString() : string.Empty;

        DataTable dt = BindPrefVendors();
        ddlPreVendor.SelectedValue = dsExp.Tables[0].Rows[0]["preferredVendor"].ToString();
        ddlPreVendor.Enabled = false;
        Session["PONum"] = Utility.NullSafeString(dsExp.Tables[0].Rows[0]["ourRefNo"]);

        string expr = "preferredVendor = '" + dsExp.Tables[0].Rows[0]["preferredVendor"].ToString().Replace("'", "''") + "'";
        DataView dv = new DataView(dt, expr, "preferredVendor", DataViewRowState.CurrentRows);
        hdnVendEmail.Value = dv.ToTable().Rows[0]["vendorEmail"].ToString();

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lnkPOCmnts.Enabled = true;
            lnkPOCmnts.Style["text-decoration"] = "none";
            lnkPOCmnts.CssClass = "button button-blue";
            lnkPOCmnts.ToolTip = "Click to view comments";
        }
        else
        {
            lnkPOCmnts.Enabled = false;
            lnkPOCmnts.Style["text-decoration"] = "none";
            lnkPOCmnts.CssClass = "button button-gray";
            lnkPOCmnts.ToolTip = "No comments for this PO";
        }

        //try
        //{
        //    //Printing PO Begin
        //    string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), txtPOTripStrtDate.Text, Session["Email"].ToString());
        //    //hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //    btnPrintPO_pen.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //    //Printing PO End
        //}
        //catch (Exception ex)
        //{ }
        GetShippingAddress();
        GetBillingAddress();

        //Load Jobs
        BindJobs(ut.NullSafeInteger(hdnUserID.Value), ddlJobs);
        if (!string.IsNullOrEmpty(dsExp.Tables[0].Rows[0]["jobCode"].ToString()))
        {
            //string[] arrJob = dsExp.Tables[0].Rows[0]["jobCode"].ToString().Split('-');
            ddlJobs.SelectedValue = dsExp.Tables[0].Rows[0]["jobCode"].ToString();// arrJob[0];
        }

        //Get PO attachments count
        Attachments(0);
        ds = (DataSet)Session["AttchList"];
        btnAttach.Text = "   Attachments(" + ds.Tables[0].Rows.Count + ")";
        //Get PO attachments count
        dvPoError.InnerHtml = string.Empty;
        btnApprovePO.Visible = true;
        btnRejectPO.Visible = true;
        pop_EditPO.Show();
    }

    private void GetData()
    {
        gvExp.DataSource = dt;
        gvExp.DataBind();
    }

    private void GetPOData()
    {
        gvPO.DataSource = dtPO;
        gvPO.DataBind();
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

    private DataTable LoadDetailsByJob(bool deptLoaded, DropDownList ddlJob, DropDownList ddlDept, DropDownList ddlExp, string deptCode)
    {
        string str = xms.getJobDetail(ddlJob.SelectedValue, ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString());
        List<TSJobsVO> lst = ser.Deserialize<List<TSJobsVO>>(str);
        DataTable dtJobs = Utility.ConvertToDataTable(lst);

        if (!deptLoaded)
        {
            //Load departments
            DataView dvDept = dtJobs.DefaultView;
            dvDept = dvDept.ToTable(true, "DeptCode").DefaultView;

            BindDepartments(ddlDept, 0);
            DataTable dt = (DataTable)Session["DeptCodes"];
            DataTable dtDept = dt.Clone();
            string[] arrDept = dvDept.ToTable().AsEnumerable().Select(r => r.Field<string>("DeptCode")).ToArray();

            for (int i = 0; i < dt.Rows.Count; i++)
                if (arrDept.Contains(dt.Rows[i]["CodeKey"].ToString()))
                    dtDept.ImportRow(dt.Rows[i]);

            ddlDept.DataSource = dtDept;
            ddlDept.DataBind();
            //ddlDepartment.Items.Insert(0, "All");
            //ddlDepartment.Items.FindByText("All").Value = "0";
            ddlDept.SelectedValue = deptCode;
        }
        //load accounts
        if (Session["dtExpItem"] == null)
            BindPoApprExpenseItems(ddlExp, deptCode, 0);
        DataTable dtBdgClss = (DataTable)Session["dtExpItem"];
        DataTable dtCloneBdgClss = dtBdgClss.Clone();
        string[] arrAcc = dtJobs.AsEnumerable().Select(r => r.Field<string>("AccountCode")).ToArray();
        for (int i = 0; i < dtBdgClss.Rows.Count; i++)
            if (arrAcc.Contains(dtBdgClss.Rows[i]["AccountCode"]))
                dtCloneBdgClss.ImportRow(dtBdgClss.Rows[i]);
        ddlExp.DataSource = dtCloneBdgClss.DefaultView.ToTable(true, "expItem", "accName");
        ddlExp.DataBind();
        ddlExp.Items.Insert(0, "Please Select");
        ddlExp.Items.FindByText("Please Select").Value = "0";
        return dtCloneBdgClss;

    }

    protected void gvExp_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            if (hdnSeq != null)
            {
                LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
                if (Convert.ToInt32(hdnAttCnt.Value) > 0)
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }
            Label lblCity = (Label)e.Row.FindControl("lblCity");
            if (lblCity != null && lblCity.Text == "Other")
            {
                lblCity.Visible = false;
            }
            CheckBox chkIsPenReimb = (CheckBox)e.Row.FindControl("chkIsPenReimb");
            HiddenField hdnReimbChk = (HiddenField)e.Row.FindControl("hdnReimbChk");
            if (hdnReimbChk.Value.ToLower() == "y")
                chkIsPenReimb.Checked = true;
            else
                chkIsPenReimb.Checked = false;
            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            //DataSet dsCodes = new DataSet();
            //DataTable dtCodes = new DataTable();
            //DataTable dt = new DataTable();
            //DataView view;
            //if (Session["dsCodes"] != null)
            //{
            //    dtCodes = (DataTable)Session["dsCodes"];
            //    string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //    view = new DataView(dtCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //    dt = view.ToTable();
            //}
            //else
            //{
            //    string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
            //    List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
            //    dsCodes.Tables.Add(Utility.ConvertToDataTable(lstExp));
            //    dt = dsCodes.Tables[0];
            //}
            //string lmt = dt.Rows[0]["CodeValue2"].ToString();
            //if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}
            //else
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}
            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
            {
                lblExpDate.Text = lblFromDate.Text;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvPO_RowCommand(object sender, GridViewCommandEventArgs e)
    {
    }

    private void CalculateTotals()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;// autoTotal = 0;

        foreach (GridViewRow row1 in gvExp.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);

            //HiddenField hdnAmount = (HiddenField)row1.FindControl("hdnAmount");
            //autoTotal = Convert.ToDouble(hdnAmount.Value);
        }

        grandTotal = expTotal + preExpTotal;//+ autoTotal 

        //if (autoTotal == 0)
        //    lbtnAuto.Visible = false;
        //else
        //    lbtnAuto.Visible = true;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;// +autoTotal;

        lblPGrandTotalAmnt.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblPGrandTotal.Style["color"] = lblPGrandTotalAmnt.Style["color"] = "Red";
            lblPGrandTotal.ToolTip = lblPGrandTotalAmnt.ToolTip = "Amount has exceeded the maximum limit.";
        }
        else
        {
            lblPGrandTotal.Style["color"] = lblPGrandTotalAmnt.Style["color"] = "Green";
            lblPGrandTotal.ToolTip = lblPGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
    }

    protected void btnApprove_Click(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            btnSendToVendYes.Attributes.Add("onclick", "javascript:return ValEmail('" + txtVendEmailAppr.ClientID + "', '" + dvVendMsg.ClientID + "');");
            btnSendToVendNo.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
            txtVendEmailAppr.Text = hdnVendEmail.Value == null ? string.Empty : hdnVendEmail.Value;
            pop_EditPO.Show();
            popConfirm.Show();
            txtVendEmailAppr.Focus();
        }
        else
        {
            ApproveWithVendorFlag(string.Empty, string.Empty);
            //CalculateTotals();
            //popup.Show();
        }
    }

    protected void btnReject_Click(object sender, EventArgs e)
    {
        btnCommentsSave.Attributes.Add("onclick", "javascript:return validateComents('" + txtComments.ClientID + "', '" + dvErrorc.ClientID + "');");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPO.Show();
        else
        {
            CalculateTotals();
            popup.Show();
        }
        popup_Comments.Show();
        dvErrorc.InnerHtml = "Please provide comments to Reject the request. Press Close to cancel.";
        txtComments.Visible = true;
        btnCommentsSave.Visible = true;
        btnCommentsClose.Visible = true;
        widgetComments.InnerHtml = ShowPreviousComments();
    }

    protected void btnClose_Click(object sender, EventArgs e)
    {
        BindApGrid();
        popup.Hide();
    }

    protected void LoadEditData(object sender, EventArgs e)
    {
        LoadEditData(null);
    }

    protected void LoadEditPOData(object sender, EventArgs e)
    {
        LoadEditPOData(null);
    }

    protected void EditAccountCode(object sender, CommandEventArgs e)
    {
        dvAccMsg.InnerHtml = string.Empty;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        string accCode = arg[0];
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            hdnSeq1.Value = arg[1];
            txtEditAccCode.Text = accCode;
            hdnRowIndex.Value = txtEditAccCode.Text;
            pop_EditPO.Show();
        }
        else
        {
            CalculateTotals();
            hdnPSeq1.Value = arg[1];
            txtEditAccCode.Text = accCode;
            hdnPRowIndex.Value = txtEditAccCode.Text;
            popup.Show();
        }
        popAcc.Show();
    }

    protected void btnAccSave_Click(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            if (txtEditAccCode.Text != hdnPRowIndex.Value)
            {
                string retStr = xms.updateAccCd(txtEditAccCode.Text, Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(hdnSeq1.Value), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["UserID"].ToString());
                if (retStr.ToLower().Contains("fail"))
                    dvAccMsg.Style.Add("color", "Red");
                else
                    dvAccMsg.Style.Add("color", "Green");
                dvAccMsg.InnerHtml = retStr;
            }
            else
            {
                dvAccMsg.Style.Add("color", "Red");
                dvAccMsg.InnerHtml = "No changes to update.";
            }
            LoadEditPOData(null);
            pop_EditPO.Show();
        }
        else
        {
            if (txtEditAccCode.Text != hdnPRowIndex.Value)
            {
                string retStr = xms.updateAccCd(txtEditAccCode.Text, Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(hdnPSeq1.Value), Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["UserID"].ToString());
                if (retStr.ToLower().Contains("fail"))
                    dvAccMsg.Style.Add("color", "Red");
                else
                    dvAccMsg.Style.Add("color", "Green");
                dvAccMsg.InnerHtml = retStr;
            }
            else
            {
                dvAccMsg.Style.Add("color", "Red");
                dvAccMsg.InnerHtml = "No changes to update.";
            }
            CalculateTotals();
            LoadEditData(null);
            popup.Show();
        }
        popAcc.Show();
    }

    protected void btnSendToVendYes_Click(object sender, EventArgs e)
    {
        string vendEmail = rblVend.SelectedIndex == 0 ? txtVendEmailAppr.Text : txtVendEmailAppr.Text + "@emailfax.com";
        string emailFaxFlg = rblVend.SelectedIndex == 0 ? "Y" : "N";
        ApproveWithVendorFlag(vendEmail, emailFaxFlg);
    }

    protected void btnSendToVendNo_Click(object sender, EventArgs e)
    {
        ApproveWithVendorFlag(string.Empty, string.Empty);
    }

    private void ApproveWithVendorFlag(string vendEmail, string emaiFaxFlg)
    {
        string expLineNo = string.Empty, reqID1 = string.Empty;
        string appString = "###";
        foreach (GridViewRow row1 in gvExp.Rows)
        {
            HiddenField hdnRequest = (HiddenField)row1.FindControl("hdnRequest");
            HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");

            expLineNo += hdnSeq.Value + appString;
            reqID1 += hdnRequest.Value + appString;
        }
        int uID = Convert.ToInt32(Session["UserID"]);

        if (ddlTypeVar == 0)
        {
            int Cnt = 0;
            DataSet dt = (DataSet)Session["dsExp"];
            ReimburseMulVO rem = new ReimburseMulVO();

            foreach (GridViewRow gvr in gvExp.Rows)
            {
                CheckBox cb = (CheckBox)gvr.FindControl("chkIsPenReimb");
                if (cb.Checked != (dt.Tables[0].Rows[gvr.RowIndex]["reimbursable"].ToString() == "Y" ? true : false))
                {
                    remb += cb.Checked == true ? "Y" + appString : "N" + appString;
                    compCode += Session["CompCode"] + appString;
                    modifiedby += uID + appString;
                    orgId += Session["OrgID"] + appString;
                    requestid += Session["ReqID"].ToString() + appString;
                    explineNo += dt.Tables[0].Rows[gvr.RowIndex]["expLineNo"].ToString() + appString;
                    Cnt++;
                }
            }
            if (Cnt > 0)
            {
                rem.reimbursable = remb.Substring(0, remb.Length - 3);
                rem.compCode = compCode.Substring(0, compCode.Length - 3);
                rem.modifiedBy = modifiedby.Substring(0, modifiedby.Length - 3);
                rem.orgId = orgId.Substring(0, orgId.Length - 3);
                rem.requestId = requestid.Substring(0, requestid.Length - 3);
                rem.expLineNo = explineNo.Substring(0, explineNo.Length - 3);
                string retRemb = xms.updateReqreimburseMul(rem);
            }
        }

        RequestVO req = new RequestVO();
        req.approved = "1";
        req.preApproved = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        req.orgId = Session["OrgID"].ToString();
        req.reqId = Session["ReqID"].ToString();
        req.type = "0";
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = Session["User_Req"].ToString();
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = string.Empty;
        req.vendorEmail = vendEmail;
        req.emailFaxFlag = emaiFaxFlg;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        req.mgrGroupCode = string.Empty;
        req.parkComment = string.Empty;
        req.parkDate = string.Empty;
        req.parkDays = 0;
        bool pre = false;
        if (Convert.ToInt32(Session["Type"]) == 1)
            pre = true;
        string retStr = string.Empty;
        try
        {
            retStr = xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));
        }
        catch (System.Net.WebException ex)
        {
            
        }

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        //Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        //Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        //Session.Remove("dsSt_Rej_po");

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            //BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            //BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            //BindRej_APGrid_PO();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        updApproved.Update();
        ReloadUserControls();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            dvPoError.InnerHtml = "Request has been approved.";
            dvPoError.Style.Add("color", "Green");
            btnApprovePO.Visible = false;
            btnRejectPO.Visible = false;
            pop_EditPO.Hide();
        }
        else
        {
            dvError_Pen.InnerHtml = "Request has been approved.";
            dvError_Pen.Style.Add("color", "Green");
            btnApprove.Visible = false;
            btnReject.Visible = false;
            popup.Hide();
        }
    }

    #endregion

    # region Export

    protected void ExportPen(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
            //btnExpVendEmail_Pen.Visible = false;
        }
        else
        {
            //btnExpVendEmail_Pen.Visible = true;
            pop_EditPO.Show();
        }
        popExpData_Pen.Show();
    }

    private string PrintAndEmailPen()
    {
        string retStr = string.Empty;
        string pdfText = string.Empty;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (hdnMailTo_pen.Value.ToLower().Contains("vendor"))
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), "VENDOR", Session["Email"].ToString());
        else
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), ddlTypeVar == 0 || ddlTypeVar == 1 ? string.Empty : txtPOTripStrtDate.Text, Session["Email"].ToString());

        string[] arrExpCodes = new string[txtMulEmail_pen.Text.Split(',').Length];
        arrExpCodes = txtMulEmail_pen.Text.Split(',');
        for (int i = 0; i < arrExpCodes.Length; i++)
        {
            if (ddlTypeVar == 0 || ddlTypeVar == 1)
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            else
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
        }
        if (dvCCEmail_pen.Style["display"] == "block" && txtCCEmail_pen.Text != null)
        {
            string[] arrCCEmails = new string[txtCCEmail_pen.Text.Split(',').Length];
            arrCCEmails = txtCCEmail_pen.Text.Split(',');
            for (int i = 0; i < arrCCEmails.Length; i++)
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                else
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            }
        }
        txtMulEmail_pen.Text = string.Empty;
        txtCCEmail_pen.Text = string.Empty;
        return retStr;
    }

    protected void PenExportAndEmail(object sender, EventArgs e)
    {
        btnSave_pen.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_pen.Text + "', '" + DivEmailErr_pen.ClientID + "');");
        hdnMailTo_pen.Value = "User";
        dvExpDataMsg_pen.InnerHtml = string.Empty;
        DivEmailErr_pen.InnerHtml = string.Empty;
        txtMulEmail_pen.Text = string.Empty;
        dvCCEmail_pen.Style["display"] = "none";
        popMulEmail_pen.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
        popExpData_Pen.Show();
    }

    protected void AddPenCCEmail(object sender, EventArgs e)
    {
        dvCCEmail_pen.Style["display"] = "block";
        txtCCEmail_pen.Text = string.Empty;
        popMulEmail_pen.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
        popExpData_Pen.Show();
    }

    protected void ValidateEmail_pen(object sender, EventArgs e)
    {
        try
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            string str = PrintAndEmailPen();
            if (str.ToLower().Contains("succes"))
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                {
                    dvError_Pen.Style["color"] = "Green";
                    dvError_Pen.InnerHtml = "Mail sent successfully.";
                }
                else
                {
                    dvPoError.Style["color"] = "Green";
                    dvPoError.InnerHtml = "Mail sent successfully.";
                }
                popMulEmail_pen.Hide();
                popExpData_Pen.Hide();
            }
            else
            {
                DivEmailErr_pen.Style["color"] = "Red";
                DivEmailErr_pen.InnerHtml = "Unable to send email. Please try again.";
                popMulEmail_pen.Show();
                popExpData_Pen.Show();
            }
        }
        catch (Exception ex)
        {
            DivEmailErr_pen.Style["color"] = "Red";
            DivEmailErr_pen.InnerHtml = "Unable to send email. Please try again.";
            popMulEmail_pen.Show();
            popExpData_Pen.Show();
        }
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
    }

    protected void PrintPO_Pen(object sender, EventArgs e)
    {
        string startDate = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStrtDate.Text;

        //encrypt email
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Encrypt(Session["Email"].ToString(), key);
        //encrypt email

        ScriptManager.RegisterStartupScript(this, GetType(), "Print Expense", "window.open('print.aspx?rq=" + Session["ReqID"].ToString() + "&sd=" + startDate + "&em=" + eMail + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);

        popExpData_Pen.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
    }

    protected void SendExpVendorEmail_pen(object sender, EventArgs e)
    {
        btnSave_pen.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_pen.ClientID + "', '" + DivEmailErr_pen.ClientID + "');");

        hdnMailTo_pen.Value = "Vendor";
        dvExpDataMsg_pen.InnerHtml = string.Empty;
        DivEmailErr_pen.InnerHtml = string.Empty;
        txtMulEmail_pen.Text = string.Empty;
        dvCCEmail_pen.Style["display"] = "none";
        popMulEmail_pen.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    #endregion

    #region View ExpenseItems

    private void BlockViewPendingFields()
    {
        dvEditVPPreVendor.Style["display"] = "none";
        dvEditVPAgName.Style["display"] = "none";
        dvEditVPItNo.Style["display"] = "none";
        dvEditVPED.Style["display"] = "none";
        dvEditVPCV.Style["display"] = "none";
        SpVPOthercity.Style["display"] = "none";
        dvEditVPFromcity.Style["display"] = "none";
        dvEditVPFromOther.Style["display"] = "none";
        dvEditVPToCity.Style["display"] = "none";
        dvEditVPToOther.Style["display"] = "none";
        dvEditVPFD.Style["display"] = "none";
        dvEditVPTD.Style["display"] = "none";
        dvEditVPTT.Style["display"] = "none";
        dvEditVPLN.Style["display"] = "none";
        dvEditVPReimbt.Style["display"] = "none";
        dvEditVPPA.Style["display"] = "none";
    }

    protected void ViewPendingDetails(object sender, CommandEventArgs e)
    {
        string[] arg = new string[1];
        arg = e.CommandArgument.ToString().Split(';');
        hdnPRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);

        if (index == 0)
            btnVPPrev.Visible = false;
        else
            btnVPPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVPNext.Visible = false;
        else
            btnVPNext.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;
        hdnPSeq1.Value = hdnSeq.Value;
        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dsExpPendingDetails = (DataTable)Session["dt"];
        GetViewPenExpItemData(dsExpPendingDetails, index);
        CalculateTotals();
    }

    private void GetViewPenExpItemData(DataTable dsExpDetails, int index)
    {
        BlockViewPendingFields();
        if (dsExpDetails.Rows.Count > 0)
        {
            DataSet dsCodes = new DataSet();
            DataTable dtCodes = new DataTable();
            //lblVPExpCd.Text = dsExpDetails.Rows[index]["expItem"].ToString();
            //txtVAccCode.Text = dsExpDetails.Rows[index]["expItemAccCode"].ToString();
            txtVAccCode.Text = dsExpDetails.Rows[index]["AccountCode"].ToString() + "-" + dsExpDetails.Rows[index]["expItem"].ToString();
            txtVClass.Text = dsExpDetails.Rows[index]["className"].ToString();

            lblddlVPExpType.Text = dsExpDetails.Rows[index]["expType"].ToString();
            if (lblddlVPExpType.Text == "GENERAL")
            {
                lblVPCatCode.Text = string.Empty;
                lblddlVPJobCd.Text = string.Empty;
                lblVPPhcd.Text = string.Empty;
                dvEditVPJob.Style["display"] = "none";
                dvEditVPPhs.Style["display"] = "none";
                dvEditVPJC.Style["display"] = "none";
            }
            else
            {
                dvEditVPJob.Style["display"] = "block";
                dvEditVPPhs.Style["display"] = "block";
                dvEditVPJC.Style["display"] = "block";
                lblddlVPJobCd.Text = dsExpDetails.Rows[index]["jobCode"].ToString();
                lblVPPhcd.Text = dsExpDetails.Rows[index]["phaseCode"].ToString();
                lblVPCatCode.Text = dsExpDetails.Rows[index]["JCatCode"].ToString();
            }

            lblVPDate.Text = dsExpDetails.Rows[index]["expDate"].ToString();

            string[] arr = txtVAccCode.Text.Split('-');
            DataView dvCodes = GetExpCodeDetails(arr[1].Trim());
            Session["TestViewExp1"] = "1";

            if (dvCodes != null)
            {
                Session.Remove("TestViewExp1");
                DataTable dtSec = dvCodes.ToTable();
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVPED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVPDate.Text = dsExpDetails.Rows[index]["expDate"].ToString();
                }
                else
                {
                    dvEditVPED.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditVPFD.Style["display"] = "block";
                    dvEditVPTD.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    lblVPFromdate.Text = dsExpDetails.Rows[index]["FromDate"].ToString();
                    lblVPTodate.Text = dsExpDetails.Rows[index]["ToDate"].ToString();
                }
                else
                {
                    dvEditVPFD.Style["display"] = "none";
                    dvEditVPTD.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditVPCV.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    if (dsExpDetails.Rows[index]["citiesVstd"].ToString() == string.Empty)
                        lblVPCity.Text = "0";
                    else
                        lblVPCity.Text = dsExpDetails.Rows[index]["citiesVstd"].ToString();
                    if (lblVPCity.Text == "Other")
                    {
                        SpVPOthercity.Style.Add("Display", "block");
                        lblVPOther.Text = dsExpDetails.Rows[index]["otherCity"].ToString();
                    }
                    else
                        SpVPOthercity.Style.Add("Display", "none");
                }
                else
                    dvEditVPCV.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVPFromcity.Style["display"] = "block";
                    dvEditVPToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVPFromcity.Text = dsExpDetails.Rows[index]["FromCity"].ToString();
                    if (lblVPOtherFromCity.Text == "Other")
                    {
                        dvEditVPFromOther.Style["display"] = "block";
                        lblVPOtherFromCity.Text = dsExpDetails.Rows[index]["FromOtherCity"].ToString();
                    }
                    else
                        dvEditVPFromOther.Style.Add("Display", "none");

                    //Assign values to ToCity field
                    lblVPTocity.Text = dsExpDetails.Rows[index]["ToCity"].ToString();
                    if (lblVPTocity.Text == "Other")
                    {
                        dvEditVPToOther.Style["display"] = "block";
                        lblVPOtherToCity.Text = dsExpDetails.Rows[index]["ToOtherCity"].ToString();
                    }
                    else
                        dvEditVPToOther.Style["display"] = "none";
                }
                else
                {
                    dvEditVPFromcity.Style["display"] = "none";
                    dvEditVPToCity.Style["display"] = "none";
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVPTT.Style["display"] = "block";
                    dvEditVPLN.Style["display"] = "block";
                    dvEditVPAmt.Style["display"] = "block";
                    dvEditVSalesTax.Style["display"] = "none";
                    lblVPTotTrip.Text = dsExpDetails.Rows[index]["totTrip"].ToString();
                    lblVPLNorm.Text = dsExpDetails.Rows[index]["LNorm"].ToString();
                    lblVPReimbt.Text = dsExpDetails.Rows[index]["Reimbt"].ToString();
                    lblVPActAmt.ReadOnly = true;
                    lblVPPreAmt.ReadOnly = true;
                }
                else
                {
                    dvEditVPTT.Style["display"] = "none";
                    dvEditVPLN.Style["display"] = "none";
                    //dvEditVPAmt.Style["display"] = "none";
                    dvEditVSalesTax.Style["display"] = "block";
                    lblVPActAmt.ReadOnly = false;
                    lblVPPreAmt.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    lblVPPreVendor.Text = dsExpDetails.Rows[index]["PreferredVendor"].ToString();
                    lblPAgName.Text = dsExpDetails.Rows[index]["AgentName"].ToString();
                    lblVPItNo.Text = dsExpDetails.Rows[index]["ItinararyNo"].ToString();

                    //if (lblVPPreVendor.Text == string.Empty)
                    //{
                    //    dvEditVPPreVendor.Style["display"] = "none";
                    //    dvEditVPAgName.Style["display"] = "none";
                    //    dvEditVPItNo.Style["display"] = "none";
                    //}
                    //else
                    //{
                    dvEditVPPreVendor.Style["display"] = "block";
                    dvEditVPAgName.Style["display"] = "block";
                    dvEditVPItNo.Style["display"] = "block";
                    //}
                }
                else
                {
                    dvEditVPPreVendor.Style["display"] = "none";
                    dvEditVPAgName.Style["display"] = "none";
                    dvEditVPItNo.Style["display"] = "none";
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditVPED.Style["display"] = "block";
                lblVPDate.Text = dsExpDetails.Rows[index]["ExpDate"].ToString();
                dvEditVPCV.Style["display"] = "block";
                lblVPCity.Text = dsExpDetails.Rows[index]["CitiesVstd"].ToString();
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditVPED.Style["display"] = "none";
                dvEditVPCV.Style["display"] = "none";
            }

            lblVSalesTax.Text = dsExpDetails.Rows[index]["taxAmount1"].ToString();
            lblVFoodTax.Text = dsExpDetails.Rows[index]["taxAmount2"].ToString();
            lblVPActAmt.Text = dsExpDetails.Rows[index]["actualAmount"].ToString();
            lblVPPreAmt.Text = dsExpDetails.Rows[index]["preAmount"].ToString();
            lblVPPayMode.Text = dsExpDetails.Rows[index]["payMode"].ToString();
            lblVPCity.Text = dsExpDetails.Rows[index]["citiesVstd"].ToString();
            if (lblVPCity.Text == "Other")
            {
                SpVPOthercity.Visible = true;
                lblVPOther.Text = dsExpDetails.Rows[index]["otherCity"].ToString();
            }
            else
                SpVPOthercity.Visible = false;

            lblVPcomnts.Text = dsExpDetails.Rows[index]["comments"].ToString();
            GetViewBudgetData(dsExpDetails.Rows[index]["accountCode"].ToString());
            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LinkViewAttachments.Style["display"] = "block";
                lblPenAtt.Style["display"] = "none";
            }
            else
            {
                LinkViewAttachments.Style["display"] = "none";
                lblPenAtt.Style["display"] = "block";
                lblPenAtt.InnerText = "No attachments to display.";
            }
            popup.Show();
            popup_PendingExp.Show();
        }
    }

    protected void btnVPCancel_Click(object sender, EventArgs e)
    {
        popup_PendingExp.Hide();
        popup.Show();
    }

    protected void ViewPreviousExp_Pending(object sender, EventArgs e)
    {
        hdnPRowIndex.Value = (Convert.ToInt32(hdnPRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnPRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnPSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewPendingFields();
        GetViewPenExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPPrev.Visible = false;
        else
            btnVPPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVPNext.Visible = false;
        else
            btnVPNext.Visible = true;
    }

    protected void ViewNextExp_Pending(object sender, EventArgs e)
    {
        hdnPRowIndex.Value = (Convert.ToInt32(hdnPRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnPRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnPSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewPendingFields();
        GetViewPenExpItemData(dsExpEditDetails, index);

        if (index == 0)
            btnVPPrev.Visible = false;
        else
            btnVPPrev.Visible = true;
        if (index == gvExp.Rows.Count - 1)
            btnVPNext.Visible = false;
        else
            btnVPNext.Visible = true;
    }

    #endregion

    #region Comments

    protected void Comments(object sender, EventArgs e)
    {
        //dvCommentsEntry.Visible = false;
        txtComments.Visible = false;
        btnCommentsSave.Visible = false;
        widgetComments.Visible = true;
        widgetComments.InnerHtml = ShowPreviousComments();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPO.Show();
        else
        {
            CalculateTotals();
            popup.Show();
        }
        popup_Comments.Show();
    }

    private string ShowPreviousComments()
    {
        var strCmnts = xms.getComments(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataSet dsComments = new DataSet();
        dsComments.Tables.Add(Utility.ConvertToDataTable(lstCmnts));

        string str = "<table width='100%'>";
        for (int i = 0; i < dsComments.Tables[0].Rows.Count; i++)
        {
            str += "<tr><td>" + dsComments.Tables[0].Rows[i]["Comments"] + "</td></tr><tr><td style='color:Black;'>by&nbsp;&nbsp;&nbsp;<small><i>" + dsComments.Tables[0].Rows[i]["Email"] + " on " + dsComments.Tables[0].Rows[i]["AddedOn"] + "</i></small></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
        }
        str += "</table>";
        return str;
    }

    protected void btnCommentsClose_Click(object sender, EventArgs e)
    {
        //BindApGrid();
        //BindApAppGrid();
        //BindApRejGrid();

        if (Session["Type"].ToString() == "2")
            pop_EditPO.Show();
        else
        {
            CalculateTotals();
            popup.Show();
        }
        popup_Comments.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        Session["SeqIdForAtt"] = hdnSeq.Value;
        Attachments(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        //dvAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq.Value));
        CalculateTotals();
        popup.Show();
        popup_Att.Show();
    }

    private void Attachments(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        Session["AttchList"] = ds;
    }

    protected void gvAttchmnts_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmnt");
            //System.Web.UI.WebControls.Image imgAttchmnt = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
            if (extension.ToLower().Contains("pdf"))
                imgAttchmnt.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                string base64ImageString = ConvertBytesToBase64(bytes);
                imgAttchmnt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
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
        popup.Show();
    }

    private string ConvertBytesToBase64(byte[] strReq)
    {
        return Convert.ToBase64String(strReq);
    }

    protected void btnAttClose_Click(object sender, EventArgs e)
    {
        CalculateTotals();
        popup.Show();
        popup_Att.Hide();
    }

    protected void DisplayLineAttachments(object sender, EventArgs e)
    {
        //dvAtt.InnerHtml = Attachments(Convert.ToInt32(hdnPSeq1.Value));
        Attachments(Convert.ToInt32(hdnPSeq1.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts.DataSource = ds;
            gvAttchmnts.DataBind();
        }
        popup.Show();
        popup_Att.Show();
    }

    #endregion

    # region ViewEditPOLineItems

    double allRowsAmntVal = 0;

    private void BindPoExpenseItems()
    {
        string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["DepartmentCode"].ToString(), 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        //add new column containing account number and account name seperated with --
        if (!dt.Columns.Contains("AcountClss"))
            dt.Columns.Add("AcountClss");

        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AcountClss"] = dt.Rows[i]["acctLongCode"].ToString() + "--" + dt.Rows[i]["accName"].ToString();
        //add new column containing account number and account name seperated with --

        Session["dtExpItem"] = dt;
        ddlExpItem.DataSource = GetHierarchicalData(dt.DefaultView.ToTable(true, "AcountClss", "accName"), "AcountClss");
        ddlExpItem.DataBind();
        ddlExpItem.Items.Insert(0, "Please Select");
        ddlExpItem.Items.FindByText("Please Select").Value = "0";
    }

    protected void ddlDepartment_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["AccountBy"].ToString() == "DEPT")
        {
            Session.Remove("dtExpItem");
            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(true, ddlJobs, ddlDepartment, ddlExpItem, string.Empty);
            else
            {
                var str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlDepartment.SelectedValue, 2, string.Empty);
                List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
                DataTable dt1 = Utility.ConvertToDataTable(lst);
                ddlExpItem.DataSource = dt1.DefaultView.ToTable(true, "expItem", "accName");
                ddlExpItem.DataBind();
                ddlExpItem.Items.Insert(0, "Please Select");
                ddlExpItem.Items.FindByText("Please Select").Value = "0";
            }
        }
        if (Session["UserDept"] == null)
            GetUserDept();
        if (Session["UserDept"].ToString() != ddlDepartment.SelectedValue)
            dvCommts_Pen.Visible = true;
        else
            dvCommts_Pen.Visible = false;

        pop_EditPO.Show();
        popAddPO.Show();
    }

    protected void ddlExpItem_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlExpItem.SelectedValue != "0")
        {
            BindItemsCode(ddlItemCode, ddlExpItem.SelectedValue);
            DataTable dt = (DataTable)Session["dtExpItem"];
            string expr = "accName = '" + ddlExpItem.SelectedValue + "'";
            DataView view = new DataView(dt, expr, "accName", DataViewRowState.CurrentRows);
            txtAccCode.Text = view.ToTable().Rows[0]["accountCode"].ToString();

            CalOnAccCode();

            //Calculate Amount/BalAfterPO

            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvPO.Rows)
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
        }
        pop_EditPO.Show();
        popAddPO.Show();
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
        }
        pop_EditPO.Show();
        popAddPO.Show();
    }

    protected void EditPODetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("UserDept");
        dvPOErrMsg.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        Session["RowIndex"] = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];
        Session["Seq1"] = arg[1];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = dtPO.Clone();
        dtPO_Temp.ImportRow(dtPO.Rows[index]);
        Session["dtPO_Temp"] = dtPO_Temp;

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (Session["FiscalDate"] == null)
            MonthFilter(year, txtPOTripStrtDate.Text);

        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;
        //btnSavePO.Visible = true;
        GetPOLineItemData(dtPO, index);
        lbPOlHeading_pen.Text = "Edit PO Details";
        ToggleFields(true);
        btSaveEditPO.Attributes.Add("onclick", "javascript:return ValidateApprovalsEditPO('" + ddlExpItem.ClientID + "', '" + txtDescr.ClientID + "','" + dvCommts_Pen.ClientID + "''" + txtComnts.ClientID + "','" + txtQuantity.ClientID + "','" + txtUnitPrice.ClientID + "','" + txtShipCost.ClientID + "','" + txtPkgUnit.ClientID + "','" + dvPOErrMsg.ClientID + "');");
        popAddPO.Show();
    }

    protected void ViewPODetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        dvPOErrMsg.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        dtPO = (DataTable)Session["dtPO"];

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (Session["dsFiscalDate"] == null)
            MonthFilter(year, txtPOTripStrtDate.Text);

        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;
        GetPOLineItemData(dtPO, index);
        lbPOlHeading_pen.Text = "View PO Details";
        btSaveEditPO.Visible = false;
        ToggleFields(false);
        popAddPO.Show();
    }

    protected void gvPO_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkItemCode = (LinkButton)e.Row.FindControl("lnkItemCode");
            Label lblItemCode = (Label)e.Row.FindControl("lblItemCode");
            HiddenField hdnItemNote = (HiddenField)e.Row.FindControl("hdnItemNote");
            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }
            else
            {
                if (txtBalAfterPO.Text.Contains("-"))
                {
                    e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                    e.Row.Style["background-color"] = "#FFCCCC";
                }
            }
            if (hdnItemNote.Value == string.Empty)
            {
                lblItemCode.Visible = true;
                lnkItemCode.Visible = false;
            }
            else
            {
                lblItemCode.Visible = false;
                lnkItemCode.Visible = true;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void GetPOLineItemData(DataTable dt, int index)
    {
        Session.Remove("dtExpItem");
        if (ddlJobs.SelectedValue != "0")
            LoadDetailsByJob(false, ddlJobs, ddlDepartment, ddlExpItem, dt.Rows[index]["deptCode"].ToString());
        else
        {
            BindDepartments(ddlDepartment, 1);
            ddlDepartment.SelectedValue = dt.Rows[index]["deptCode"].ToString();
            BindPoApprExpenseItems(ddlExpItem, ddlDepartment.SelectedValue, 1);
        }
        ddlExpItem.SelectedValue = dt.Rows[index]["expItem"].ToString();
        BindItemsCode(ddlItemCode, ddlExpItem.SelectedValue);
        try
        {
            ddlItemCode.SelectedValue = dt.Rows[index]["ItemCode"].ToString();
        }
        catch
        {
        }
        txtQuantity.Text = dt.Rows[index]["quantity"].ToString();
        txtPkgUnit.Text = dt.Rows[index]["packageUnit"].ToString();
        txtUnitPrice.Text = dt.Rows[index]["unitPrice"].ToString();
        txtPoAmount.Text = dt.Rows[index]["PreAmount"].ToString();
        txtDescr.Text = dt.Rows[index]["comments"].ToString();
        txtShipCost.Text = (ut.NullSafeDouble(dt.Rows[index]["shippingCost"])).ToString();
        chkCalTax.Checked = dt.Rows[index]["taxCalCulated"].ToString() == "1" ? true : false;
        txttax.Text = chkCalTax.Checked == true ? ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(Session["Tax"])) / 100)).ToString() : "0.00";
        txtBalAfterPO.Text = dt.Rows[index]["balAfterPo"].ToString();
        txtVendPtNo.Text = dt.Rows[index]["vendpartno"].ToString();
        txtReqDelDate.Text = dt.Rows[index]["reqDeliveryDate"].ToString();
        txtTaxPercent.Text = chkCalTax.Checked == true ? dt.Rows[index]["TaxPercent"].ToString() : Session["Tax"].ToString();

        string expr = "expItem = '" + ddlExpItem.SelectedValue + "'";
        DataView view = new DataView(dt, expr, "expItem", DataViewRowState.CurrentRows);
        txtAccCode.Text = view.ToTable().Rows[0]["accountCode"].ToString();
        double x = 0;
        x = ((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * ((ut.NullSafeDouble(dt.Rows[index]["taxPercent"].ToString())) / 100));
        txttax.Text = chkCalTax.Checked == true ? (x.ToString() != "0" ? x.ToString("#.##") : x.ToString()) : "0.00";
        CalOnAccCode();
        txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal))).ToString("#.##");

        // txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - ut.NullSafeDouble(Session["allRowsAmntVal"])).ToString();
        pop_EditPO.Show();
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
        txtComnts.Enabled = check;
        txtVendPtNo.Enabled = check;
        txtReqDelDate.Enabled = check;
    }

    protected void btSaveEditPO_Click(object sender, EventArgs e)
    {
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmount.Text)).ToString();

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
            dtPO.Columns.Add("balanceAfterpo");
            dtPO.Columns.Add("shippingCost");
            dtPO.Columns.Add("taxCalCulated");
            dtPO.Columns.Add("vendpartno");
            dtPO.Columns.Add("TaxPercent");
            dtPO.Columns.Add("ItemCode");
            dtPO.Columns.Add("MgrGroupCode");
            dtPO.Columns.Add("DeptCode");
            dtPO.Columns.Add("DeptChgCmt");
            dtPO.Columns.Add("reqDeliveryDate");
        }
        else
            dtPO = (DataTable)Session["dtPO"];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = (DataTable)Session["dtPO_Temp"];

        double taxPercent = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
        double chkTax = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent)) / 100) : 0;
        double tax = ut.NullSafeDouble(((ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax).ToString("#.##"));
        double POamnt = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax))) + ut.NullSafeDouble(txtShipCost.Text)).ToString("#.##"));

        int edPOFlag = 0;
        if (ddlExpItem.SelectedValue != dtPO_Temp.Rows[0]["expItem"].ToString())
            edPOFlag = 1;
        else if (txtAccCode.Text != dtPO_Temp.Rows[0]["accountCode"].ToString())
            edPOFlag = 1;
        else if (txtQuantity.Text != dtPO_Temp.Rows[0]["quantity"].ToString())
            edPOFlag = 1;
        else if (txtPkgUnit.Text != dtPO_Temp.Rows[0]["packageUnit"].ToString())
            edPOFlag = 1;
        else if (txtUnitPrice.Text != dtPO_Temp.Rows[0]["unitPrice"].ToString())
            edPOFlag = 1;
        else if (txtPoAmount.Text != dtPO_Temp.Rows[0]["PreAmount"].ToString())
            edPOFlag = 1;
        else if (txtDescr.Text != dtPO_Temp.Rows[0]["comments"].ToString())
            edPOFlag = 1;
        else if (txtShipCost.Text != dtPO_Temp.Rows[0]["shippingCost"].ToString())
            edPOFlag = 1;
        else if (txtVendPtNo.Text != dtPO_Temp.Rows[0]["vendpartno"].ToString())
            edPOFlag = 1;
        else if (txtReqDelDate.Text != dtPO_Temp.Rows[0]["reqDeliveryDate"].ToString())
            edPOFlag = 1;
        else if (chkCalTax.Checked != Convert.ToBoolean(dtPO_Temp.Rows[0]["taxCalCulated"]))
            edPOFlag = 1;
        if (edPOFlag == 1)
        {
            int row = Convert.ToInt32(Session["RowIndex"]);
            ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();

            expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
            expensedetails.expLineNo = Convert.ToInt32(Session["Seq1"]);
            expensedetails.expItem = ddlExpItem.SelectedValue;
            expensedetails.quantity = ut.NullSafeDouble(txtQuantity.Text);
            expensedetails.packageUnit = txtPkgUnit.Text;
            expensedetails.unitPrice = ut.NullSafeDouble(txtUnitPrice.Text);
            expensedetails.actualAmount = 0;
            expensedetails.comments = txtDescr.Text;
            expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expensedetails.compCode = Session["CompCode"].ToString();
            expensedetails.expDate = string.Empty;
            expensedetails.citiesVstd = string.Empty;
            expensedetails.othercity = string.Empty;
            expensedetails.expType = string.Empty;
            expensedetails.payMode = string.Empty;
            expensedetails.jobCode = string.Empty;
            expensedetails.phaseCode = string.Empty;
            expensedetails.JCatCode = string.Empty;
            expensedetails.preAmount = POamnt;
            expensedetails.status = "Saved";
            expensedetails.statusId = 3;
            expensedetails.stateId = string.Empty;
            expensedetails.startDate = txtPOTripStrtDate.Text;
            expensedetails.amtSpent = 0;
            expensedetails.purpose = string.Empty;
            expensedetails.agentName = string.Empty;
            expensedetails.bookedDate = string.Empty;
            expensedetails.detailsFlag = 1;
            expensedetails.masterFlag = 0;
            expensedetails.automileageFlag = 0;
            expensedetails.fromCity = string.Empty;
            expensedetails.otherFromCity = string.Empty;
            expensedetails.toCity = string.Empty;
            expensedetails.otherToCity = string.Empty;
            expensedetails.preferredVendor = ddlPreVendor.SelectedItem.Text;
            expensedetails.itinararyNo = string.Empty;
            expensedetails.fromDate = string.Empty;
            expensedetails.toDate = string.Empty;
            expensedetails.currency = string.Empty;
            expensedetails.exp = string.Empty;
            expensedetails.accountCode = txtAccCode.Text;
            expensedetails.codeId = string.Empty;
            expensedetails.codeValue = string.Empty;
            expensedetails.managerEmail = string.Empty;
            expensedetails.managerId = Convert.ToInt32(ddlPOMgrEmail.SelectedValue);
            expensedetails.LNorm = 0;
            expensedetails.totTrip = 0;
            expensedetails.reimbt = 0;
            expensedetails.userId = Convert.ToInt32(Session["UserID"]);
            expensedetails.preApproved = 2;
            expensedetails.companyCar = string.Empty;
            expensedetails.otherPlace = string.Empty;
            expensedetails.outOfCity = false;
            expensedetails.shippingCost = ut.NullSafeDouble(txtShipCost.Text);
            expensedetails.taxPercent = taxPercent;
            //expensedetails.balAfterPO = ut.NullSafeDouble((ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal) + ut.NullSafeDouble(POamnt))).ToString("#.##"));
            expensedetails.balAfterPO = ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt.Value) + ut.NullSafeDouble(POamnt)));
            expensedetails.taxAmount1 = tax;
            expensedetails.taxAmount2 = 0;
            expensedetails.taxAmount3 = 0;
            expensedetails.reimbursable = string.Empty;
            expensedetails.taxCalculated = chkCalTax.Checked == true ? 1 : 0;
            expensedetails.vendPartno = txtVendPtNo.Text;
            expensedetails.polineseq = 0;
            expensedetails.csuserid = 0;
            //Modified Today
            DataTable dt = (DataTable)Session["dtPO"];
            expensedetails.mgrGroupCode = dt.Rows[0]["mgrGroupCode"].ToString();
            expensedetails.itemCode = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
            expensedetails.deptChgCmt = txtComnts.Text == string.Empty ? " " : txtComnts.Text;
            expensedetails.deptCode = ddlDepartment.SelectedValue;
            expensedetails.reqDeliveryDate = txtReqDelDate.Text;
            expensedetails.onBeHalfOf = string.Empty;
            expensedetails.lastUpdSource = "Web";
            expensedetails.qbAcctId = 0;
            expensedetails.qbVendId = 0;
            expensedetails.className = string.Empty;
            expensedetails.classRefId = string.Empty;
            expensedetails.sendtoqb = string.Empty;
            expensedetails.priceFlag = string.Empty;
            string retStr = xms.addExpense(expensedetails);

            if (retStr.ToLower().Contains("fail"))
            {
                dvPOErrMsg.Style["color"] = "Red";
                dvPOErrMsg.InnerHtml = retStr;
                popAddPO.Show();
            }
            else if (retStr.ToLower().Contains("succes"))
            {
                dvPoError.Style["color"] = "Green";
                dvPoError.InnerHtml = retStr;
                dtPO.Rows[row]["expItem"] = ddlExpItem.SelectedValue;
                dtPO.Rows[row]["accountCode"] = txtAccCode.Text;
                dtPO.Rows[row]["quantity"] = Convert.ToDouble(txtQuantity.Text);
                dtPO.Rows[row]["packageUnit"] = txtPkgUnit.Text;
                dtPO.Rows[row]["unitPrice"] = txtUnitPrice.Text;
                double taxPercent1 = chkCalTax.Checked == true ? (ut.NullSafeDouble(txtTaxPercent.Text == string.Empty ? "0" : txtTaxPercent.Text)) : 0;
                dtPO.Rows[row]["TaxPercent"] = taxPercent1;
                double chkTax1 = chkCalTax.Checked == true ? ((ut.NullSafeDouble(taxPercent1)) / 100) : 0;
                double tax1 = (ut.NullSafeDouble(txtUnitPrice.Text) * ut.NullSafeDouble(txtQuantity.Text)) * chkTax1;
                double POamnt1 = (((ut.NullSafeDouble(txtQuantity.Text)) * (ut.NullSafeDouble(txtUnitPrice.Text))) + (ut.NullSafeDouble(tax1))) + ut.NullSafeDouble(txtShipCost.Text);
                dtPO.Rows[row]["PreAmount"] = POamnt1;
                dtPO.Rows[row]["comments"] = txtDescr.Text;
                dtPO.Rows[row]["balAfterpo"] = ut.NullSafeDouble(ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt.Value) + ut.NullSafeDouble(POamnt1)));
                Session["balAfterPO"] = dtPO.Rows[row]["balAfterpo"];
                dtPO.Rows[row]["taxCalCulated"] = chkCalTax.Checked;
                dtPO.Rows[row]["vendpartno"] = txtVendPtNo.Text;
                hdnTax.Value = chkCalTax.Checked == true ? taxPercent1.ToString() : Session["Tax"].ToString();
                //Modified Today
                DataTable dt1 = (DataTable)Session["dtPO"];
                dtPO.Rows[row]["MgrGroupCode"] = dt1.Rows[0]["mgrGroupCode"].ToString();
                dtPO.Rows[row]["DeptCode"] = ddlDepartment.SelectedValue;
                dtPO.Rows[row]["DeptChgCmt"] = txtComnts.Text == string.Empty ? " " : txtComnts.Text;
                dtPO.Rows[row]["ItemCode"] = ddlItemCode.SelectedValue == "0" ? string.Empty : ddlItemCode.SelectedValue;
                popAddPO.Hide();
            }
        }
        else
        {
            dvPOErrMsg.InnerHtml = "No changes to Update";
            popAddPO.Show();
        }
        dtPO.AcceptChanges();
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == txtAccCode.Text)
                dtPO.Rows[row1.RowIndex]["balAfterpo"] = Session["balAfterPO"].ToString();
        }
        Session.Remove("dtPO");
        LoadEditPOData(null);

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp1 = dtPO.Clone();
        dtPO_Temp1.ImportRow(dtPO.Rows[ut.NullSafeInteger(hdnRowIndex.Value)]);
        Session["dtPO_Temp"] = dtPO_Temp1;

        GetPOLineItemData(dtPO_Temp1, 0);

        // Session.Remove("dsSt");
        //SortGrid();
        btSaveEditPO.Visible = true;
        pop_EditPO.Show();
    }

    private void CalOnAccCode()
    {
        DataSet dataUsers = new DataSet();
        if (Session["UserDept"] == null)
            GetUserDept();

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDate.Text);
        int year = dateTime.Year;

        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtPOTripStrtDate.Text);
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
                dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }


        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtAccCode.Text;
        budget.compCode = Session["CompCOde"].ToString();
        //budget.deptCode = Session["UserDept"].ToString();
        budget.deptCode = ddlDepartment.SelectedValue;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;


        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

        string expression = "accountCode = '" + txtAccCode.Text + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        txtBudget.Text = dtAcccode.Rows[0]["budget"].ToString();
        txtCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
        txtRemain.Text = dtAcccode.Rows[0]["remaining"].ToString();
        pop_EditPO.Show();
        //txtBalAfterPO.Text = txtRemain.Text;
    }

    private string MonthFilter(int year, string startDate)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDate"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(startDate) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(startDate) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth;
    }

    protected void DisplayItemNotes(object sender, CommandEventArgs e)
    {
        string[] arr = e.CommandArgument.ToString().Split(';');
        string itemNotes = arr[1];
        string itemCode = arr[0];
        lblItemNotes.Text = itemNotes;
        lblDispItemCode.Text = itemCode;
        pop_EditPO.Show();
        popItemNotes.Show();
    }

    #endregion

    #region Park PO

    protected void ParkPOApproval(object sender, EventArgs e)
    {
        hdnCurrentDate.Value = DateTime.Now.ToShortDateString();
        btnParkAndSubmit.Attributes.Add("onclick", "javascript:return validateParkPO('" + txtParkingDate.ClientID + "', '" + txtParkComments.ClientID + "', '" + dvParkMsg.ClientID + "', '" + hdnCurrentDate.Value + "');");
        popParkPO.Show();
        pop_EditPO.Hide();
        txtParkingDate.Focus();
    }

    protected void ParkAndSubmitApproval(object sender, EventArgs e)
    {
        if (hdnMainApproval.Value == "Y")
        {
            string appString = "###";
            string accCode, actionBy, addedBy, approved, comments, emailFaxFlag, mgrGroupCode, modifiedBy, orgId, parkComment, parkDate, parkDays, preApproved,
                reqId, seqId, status, statusId, type, userId, vendorEmail, mgrPreApprovedAP, preApprovedAP;
            accCode = actionBy = addedBy = approved = comments = emailFaxFlag = mgrGroupCode = modifiedBy = orgId = parkComment = parkDate = parkDays = preApproved =
                reqId = seqId = status = statusId = type = userId = vendorEmail = mgrPreApprovedAP = preApprovedAP = string.Empty;
            int cnt = 0;
            foreach (GridViewRow row in gvApDetails.Rows)
            {
                HiddenField hdnIsMgrPreApproved = (HiddenField)row.FindControl("hdnIsMgrPreApproved");
                HiddenField hdnPreApproved = (HiddenField)row.FindControl("hdnPreApproved");
                CheckBox chk = (CheckBox)row.FindControl("chk");
                if (chk.Checked)
                {
                    HiddenField hdnMGReqID = (HiddenField)row.FindControl("hdnMGReqID");
                    HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
                    accCode += " " + appString;
                    actionBy += (Session["username"].ToString() + " " + Session["lastname"].ToString()) + appString;
                    addedBy += Session["UserID"] + appString;
                    approved += "7" + appString;
                    comments += " " + appString;
                    emailFaxFlag += " " + appString;
                    mgrGroupCode += " " + appString;
                    modifiedBy += Session["UserID"] + appString;
                    orgId += Session["OrgID"].ToString() + appString;
                    parkComment += txtParkComments.Text + appString;
                    parkDate += Convert.ToDateTime(txtParkingDate.Text).ToShortDateString() + appString;
                    parkDays += "0" + appString;
                    preApproved += 2 + appString;
                    reqId += hdnMGReqID.Value + appString;
                    seqId += Session["UserID"].ToString() + appString;
                    status += " " + appString;
                    statusId += " " + appString;
                    type += "5" + appString;
                    userId += hdnUserID.Value.ToString() + appString;
                    vendorEmail += " " + appString;
                    mgrPreApprovedAP += (hdnIsMgrPreApproved.Value == string.Empty ? " " : hdnIsMgrPreApproved.Value) + appString;
                    preApprovedAP += (hdnPreApproved.Value == string.Empty ? " " : hdnPreApproved.Value) + appString;
                    cnt++;
                }
            }
            if (cnt > 0)
            {
                RequestMulVO req = new RequestMulVO();
                req.accCode = accCode.Substring(0, accCode.Length - 3);
                req.actionBy = actionBy.Substring(0, actionBy.Length - 3);
                req.addedBy = addedBy.Substring(0, addedBy.Length - 3);
                req.approved = approved.Substring(0, approved.Length - 3);
                req.comments = comments.Substring(0, comments.Length - 3);
                req.emailFaxFlag = emailFaxFlag.Substring(0, emailFaxFlag.Length - 3);
                req.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
                req.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
                req.orgId = orgId.Substring(0, orgId.Length - 3);
                req.parkComment = parkComment.Substring(0, parkComment.Length - 3);
                req.parkDate = parkDate.Substring(0, parkDate.Length - 3);
                req.parkDays = parkDays.Substring(0, parkDays.Length - 3);
                req.preApproved = preApproved.Substring(0, preApproved.Length - 3);
                req.reqId = reqId.Substring(0, reqId.Length - 3);
                req.seqId = seqId.Substring(0, seqId.Length - 3);
                req.status = status.Substring(0, status.Length - 3);
                req.statusId = statusId.Substring(0, statusId.Length - 3);
                req.type = type.Substring(0, type.Length - 3);
                req.userId = userId.Substring(0, userId.Length - 3);
                req.vendorEmail = vendorEmail.Substring(0, vendorEmail.Length - 3);
                req.mgrPreApprovedAP = mgrPreApprovedAP.Substring(0, mgrPreApprovedAP.Length - 3);
                req.preApprovedAP = preApprovedAP.Substring(0, preApprovedAP.Length - 3);
                string retStr = xms.approveRequestByApMul(req);
                if (retStr.ToLower().ToString().Contains("succes"))
                {
                    dvMainMsg.Style["color"] = "Green";
                    Session.Remove("dsSt_pen_po");
                    Session.Remove("dsSt_park_po");
                    BindPen_APGrid_PO();
                    BindPark_APGrid();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
                    ReloadUserControls();
                    dvHButtons.Style["display"] = "none";
                }
                else
                    dvMainMsg.Style["color"] = "Red";
                dvMainMsg.InnerHtml = retStr;
            }
            else
            {
                dvMainMsg.Style["color"] = "Red";
                dvMainMsg.InnerHtml = "Please select atleast one row";
            }
        }
        else
        {
            int uID = Convert.ToInt32(Session["UserID"]);
            RequestVO req = new RequestVO();
            req.approved = "7";
            req.preApproved = 2;
            req.orgId = Session["OrgID"].ToString();
            req.reqId = Session["ReqID"].ToString();
            req.type = "5";
            req.accCode = string.Empty;
            req.seqId = uID.ToString();
            req.status = string.Empty;
            req.statusId = string.Empty;
            req.userId = Session["User_Req"].ToString();
            req.addedBy = Convert.ToInt32(Session["UserID"]);
            req.modifiedBy = Convert.ToInt32(Session["UserID"]);
            req.comments = string.Empty;
            req.parkDays = 0;
            req.parkDate = Convert.ToDateTime(txtParkingDate.Text).ToShortDateString();
            req.parkComment = txtParkComments.Text;
            req.mgrGroupCode = string.Empty;
            req.vendorEmail = string.Empty; bool pre = false;
            req.emailFaxFlag = string.Empty;
            req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
            if (Convert.ToInt32(Session["Type"]) == 1)
                pre = true;
            xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));

            Session.Remove("dsSt_pen_po");
            Session.Remove("dsSt_park_po");
            BindPen_APGrid_PO();
            BindPark_APGrid();
            txtParkingDate.Text = string.Empty;
            txtParkComments.Text = string.Empty;
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
            ReloadUserControls();
            popParkPO.Hide();
            pop_EditPO.Hide();
        }
    }

    protected void CloseParkPO(object sender, EventArgs e)
    {
        popParkPO.Hide();
        pop_EditPO.Show();
    }

    #endregion

    #region Calculate Budget

    private void GetViewBudgetData(string accCode)
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDate.Text);
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
        }

        ////Fetch budget details by selected classification
        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtVAccCode.Text;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = Session["DepartmentCode"].ToString();
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string expression = "accountCode = '" + accCode + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        if (dtAcccode.Rows.Count > 0)
        {
            txtVExpBudg.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtVExpCurrBal.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtVExpRemBudg.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                string strAccCode = txtVAccCode.Text.Split('-')[0];
                if (hdnAccCode.Value == strAccCode)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnVExpRowTotAmnt.Value = (allRowsAmntVal - ut.NullSafeDouble(lblVPActAmt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtVExpBalAfter.Text = (ut.NullSafeDouble(txtVExpRemBudg.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(lblVPActAmt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFields()
    {
        txtVExpBalAfter.Attributes.Add("readonly", "readonly");
        txtVExpCurrBal.Attributes.Add("readonly", "readonly");
        txtVExpRemBudg.Attributes.Add("readonly", "readonly");
        txtVExpBudg.Attributes.Add("readonly", "readonly");
    }


    #endregion

    #region PO Attachments

    protected void btnAttachPO_Click(object sender, EventArgs e)
    {
        if (Session["AttchList"] == null)
            Attachments(0);
        ds = (DataSet)Session["AttchList"];
        gvAttchmntsPO.DataSource = ds;
        gvAttchmntsPO.DataBind();
        pop_EditPO.Show();
        popup_AttPO.Show();
    }

    protected void gvAttchmntsPO_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmntPO");
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

    protected void DownLdAttPO(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgNamePO");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgNamePO");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup_AttPO.Show();
        pop_EditPO.Show();
    }

    #endregion

    #region Process Multiple Requests

    protected void ParkPO_Header(object sender, EventArgs e)
    {
        hdnMainApproval.Value = "Y";
        hdnCurrentDate.Value = DateTime.Now.ToShortDateString();
        btnParkAndSubmit.Attributes.Add("onclick", "javascript:return validateParkPO('" + txtParkingDate.ClientID + "', '" + txtParkComments.ClientID + "', '" + dvParkMsg.ClientID + "', '" + hdnCurrentDate.Value + "');");
        popParkPO.Show();
        dvHButtons.Style["display"] = "block";
        txtParkingDate.Focus();
    }

    protected void Approve_Header(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar != 2)
        {
            hdnMainApproval.Value = "Y";
            dvHButtons.Style["display"] = "block";
            ProcessRequest("1");
        }
        else
        {
            DataTable dt = new DataTable();
            DataRow dr;
            dt.Columns.Add("OurRefNo");
            dt.Columns.Add("Vendor");
            dt.Columns.Add("Purpose");
            dt.Columns.Add("UserID");
            dt.Columns.Add("MgrPreApproved");
            dt.Columns.Add("PreApproved");
            foreach (GridViewRow row in gvApDetails.Rows)
            {
                CheckBox chk = (CheckBox)row.FindControl("chk");
                HiddenField hdnMGReqID = (HiddenField)row.FindControl("hdnMGReqID");
                HiddenField hdnPurpose = (HiddenField)row.FindControl("hdnPurpose");
                HiddenField hdnVendor = (HiddenField)row.FindControl("hdnVendor");
                HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
                HiddenField hdnIsMgrPreApproved = (HiddenField)row.FindControl("hdnIsMgrPreApproved");
                HiddenField hdnPreApproved = (HiddenField)row.FindControl("hdnPreApproved");
                if (chk.Checked)
                {
                    dr = dt.NewRow();
                    dr["OurRefNo"] = hdnMGReqID.Value;
                    dr["Vendor"] = hdnVendor.Value;
                    dr["Purpose"] = hdnPurpose.Value;
                    dr["UserID"] = hdnUserID.Value;
                    dr["MgrPreApproved"] = hdnIsMgrPreApproved.Value;
                    dr["PreApproved"] = hdnPreApproved.Value;
                    dt.Rows.Add(dr);
                }
            }
            dt.AcceptChanges();
            gvMultiPOApprove.DataSource = dt;
            gvMultiPOApprove.DataBind();
            dvHButtons.Style["display"] = "block";
            btnPOMultiApprove.Attributes.Add("onclick", "javascript: return validateMultiPOVendorDetails();");
            popMultiPOApproval.Show();
        }
    }

    protected void Approve_MultiPO(object sender, EventArgs e)
    {
        ProcessPORequests();
    }

    protected void gvMultiPOApprove_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            CheckBox chk = (CheckBox)e.Row.FindControl("chk");
            RadioButtonList rdEmailFax = (RadioButtonList)e.Row.FindControl("rdEmailFax");
            TextBox txtEmailFax = (TextBox)e.Row.FindControl("txtEmailFax");
            chk.Attributes.Add("onclick", "javascript: sendToVendorMulPO('" + chk.ClientID + "', '" + rdEmailFax.ClientID + "', '" + txtEmailFax.ClientID + "', '" + gvMultiPOApprove.ClientID + "', " + e.Row.RowIndex + ")");
            //txtEmailFax.Attributes.Add("onchange", "javascript:return PhoneNumberFormat('" + txtEmailFax.ClientID + "', 'dvMultiPOErr');");

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {

        }
    }

    private void ProcessRequest(string val)
    {
        string appString = "###";
        string accCode, actionBy, addedBy, approved, comments, emailFaxFlag, mgrGroupCode, modifiedBy, orgId, parkComment, parkDate, parkDays, preApproved,
            reqId, seqId, status, statusId, type, userId, vendorEmail, mgrPreApprovedAP, preApprovedAP;
        accCode = actionBy = addedBy = approved = comments = emailFaxFlag = mgrGroupCode = modifiedBy = orgId = parkComment = parkDate = parkDays = preApproved =
            reqId = seqId = status = statusId = type = userId = vendorEmail = mgrPreApprovedAP = preApprovedAP = string.Empty;
        int cnt = 0;
        foreach (GridViewRow row in gvApDetails.Rows)
        {
            HiddenField hdnIsMgrPreApproved = (HiddenField)row.FindControl("hdnIsMgrPreApproved");
            HiddenField hdnPreApproved = (HiddenField)row.FindControl("hdnPreApproved");
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                HiddenField hdnMGReqID = (HiddenField)row.FindControl("hdnMGReqID");
                HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
                accCode += " " + appString;
                actionBy += (Session["username"].ToString() + " " + Session["lastname"].ToString()) + appString;
                addedBy += Session["UserID"] + appString;
                approved += val + appString;
                comments += " " + appString;
                emailFaxFlag += " " + appString;
                mgrGroupCode += " " + appString;
                modifiedBy += Session["UserID"] + appString;
                orgId += Session["OrgID"].ToString() + appString;
                parkComment += " " + appString;
                parkDate += " " + appString;
                parkDays += "0" + appString;
                preApproved += (ddlType.SelectedValue == "ER" ? "0" : ddlType.SelectedValue == "PA" ? "1" : "2") + appString;
                reqId += hdnMGReqID.Value + appString;
                seqId += Session["UserID"].ToString() + appString;
                status += " " + appString;
                statusId += " " + appString;
                type += "0" + appString;
                userId += hdnUserID.Value.ToString() + appString;
                vendorEmail += " " + appString;
                mgrPreApprovedAP += (hdnIsMgrPreApproved.Value == string.Empty ? " " : hdnIsMgrPreApproved.Value) + appString;
                preApprovedAP += (hdnPreApproved.Value == string.Empty ? " " : hdnPreApproved.Value) + appString;
                cnt++;
            }
        }
        if (cnt > 0)
        {
            RequestMulVO req = new RequestMulVO();
            req.accCode = accCode.Substring(0, accCode.Length - 3);
            req.actionBy = actionBy.Substring(0, actionBy.Length - 3);
            req.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            req.approved = approved.Substring(0, approved.Length - 3);
            req.comments = comments.Substring(0, comments.Length - 3);
            req.emailFaxFlag = emailFaxFlag.Substring(0, emailFaxFlag.Length - 3);
            req.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
            req.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            req.orgId = orgId.Substring(0, orgId.Length - 3);
            req.parkComment = parkComment.Substring(0, parkComment.Length - 3);
            req.parkDate = parkDate.Substring(0, parkDate.Length - 3);
            req.parkDays = parkDays.Substring(0, parkDays.Length - 3);
            req.preApproved = preApproved.Substring(0, preApproved.Length - 3);
            req.reqId = reqId.Substring(0, reqId.Length - 3);
            req.seqId = seqId.Substring(0, seqId.Length - 3);
            req.status = status.Substring(0, status.Length - 3);
            req.statusId = statusId.Substring(0, statusId.Length - 3);
            req.type = type.Substring(0, type.Length - 3);
            req.userId = userId.Substring(0, userId.Length - 3);
            req.vendorEmail = vendorEmail.Substring(0, vendorEmail.Length - 3);
            req.mgrPreApprovedAP = mgrPreApprovedAP.Substring(0, mgrPreApprovedAP.Length - 3);
            req.preApprovedAP = preApprovedAP.Substring(0, preApprovedAP.Length - 3);
            string retStr = xms.approveRequestByApMul(req);
            if (retStr.ToLower().ToString().Contains("succes"))
            {
                dvMainMsg.Style["color"] = "Green";

                Session.Remove("dsSt_pen");
                Session.Remove("dsSt_App");
                Session.Remove("dsSt_Rej");
                Session.Remove("dsSt_pen_pre");
                Session.Remove("dsSt_App_pre");
                Session.Remove("dsSt_Rej_pre");
                Session.Remove("dsSt_pen_po");
                Session.Remove("dsSt_App_po");
                Session.Remove("dsSt_Rej_po");

                ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
                if (ddlTypeVar == 0)
                {
                    BindApGrid();
                    BindApAppGrid();
                    BindApRejGrid();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
                }
                else if (ddlTypeVar == 1)
                {
                    BindPen_APGrid_Pre();
                    BindApp_APGrid_Pre();
                    BindRej_APGrid_Pre();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
                }
                else
                {
                    BindPen_APGrid_PO();
                    BindApp_APGrid_PO();
                    BindRej_APGrid_PO();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
                }
                updApproved.Update();
                ReloadUserControls();
                dvHButtons.Style["display"] = "none";
            }
            else
                dvMainMsg.Style["color"] = "Red";
            dvMainMsg.InnerHtml = retStr;
        }
        else
        {
            dvMainMsg.Style["color"] = "Red";
            dvMainMsg.InnerHtml = "Please select atleast one row";
        }
    }

    private void ProcessPORequests()
    {
        string appString = "###";
        string accCode, actionBy, addedBy, approved, comments, emailFaxFlag, mgrGroupCode, modifiedBy, orgId, parkComment, parkDate, parkDays, preApproved,
            reqId, seqId, status, statusId, type, userId, vendorEmail, mgrPreApprovedAP, preApprovedAP;
        accCode = actionBy = addedBy = approved = comments = emailFaxFlag = mgrGroupCode = modifiedBy = orgId = parkComment = parkDate = parkDays = preApproved =
            reqId = seqId = status = statusId = type = userId = vendorEmail = mgrPreApprovedAP = preApprovedAP = string.Empty;
        int cnt = 0;
        string vEmail, efFlag;
        vEmail = efFlag = string.Empty;
        foreach (GridViewRow row in gvMultiPOApprove.Rows)
        {
            HiddenField hdnIsMgrPreApproved = (HiddenField)row.FindControl("hdnIsMgrPreApproved");
            HiddenField hdnPreApproved = (HiddenField)row.FindControl("hdnPreApproved");
            HiddenField hdnOurRefNo = (HiddenField)row.FindControl("hdnOurRefNo");
            HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
            RadioButtonList rdEmailFax = (RadioButtonList)row.FindControl("rdEmailFax");
            TextBox txtEmailFax = (TextBox)row.FindControl("txtEmailFax");
            CheckBox chk = (CheckBox)row.FindControl("chk");
            if (chk.Checked)
            {
                vEmail = rdEmailFax.SelectedIndex == 0 ? txtEmailFax.Text : txtEmailFax.Text + "@emailfax.com";
                efFlag = rdEmailFax.SelectedIndex == 0 ? "Y" : "N";
            }
            else
            {
                vEmail = " ";
                efFlag = " ";
            }
            accCode += " " + appString;
            actionBy += (Session["username"].ToString() + " " + Session["lastname"].ToString()) + appString;
            addedBy += Session["UserID"] + appString;
            approved += "1" + appString;
            comments += " " + appString;
            emailFaxFlag += efFlag + appString;
            mgrGroupCode += " " + appString;
            modifiedBy += Session["UserID"] + appString;
            orgId += Session["OrgID"].ToString() + appString;
            parkComment += " " + appString;
            parkDate += " " + appString;
            parkDays += "0" + appString;
            preApproved += "2" + appString;
            reqId += hdnOurRefNo.Value + appString;
            seqId += Session["UserID"].ToString() + appString;
            status += " " + appString;
            statusId += " " + appString;
            type += "0" + appString;
            userId += hdnUserID.Value.ToString() + appString;
            vendorEmail += vEmail + appString;
            mgrPreApprovedAP += (hdnIsMgrPreApproved.Value == string.Empty ? " " : hdnIsMgrPreApproved.Value) + appString;
            preApprovedAP += (hdnPreApproved.Value == string.Empty ? " " : hdnPreApproved.Value) + appString;
            cnt++;
        }
        if (cnt > 0)
        {
            RequestMulVO req = new RequestMulVO();
            req.accCode = accCode.Substring(0, accCode.Length - 3);
            req.actionBy = actionBy.Substring(0, actionBy.Length - 3);
            req.addedBy = addedBy.Substring(0, addedBy.Length - 3);
            req.approved = approved.Substring(0, approved.Length - 3);
            req.comments = comments.Substring(0, comments.Length - 3);
            req.emailFaxFlag = emailFaxFlag.Substring(0, emailFaxFlag.Length - 3);
            req.mgrGroupCode = mgrGroupCode.Substring(0, mgrGroupCode.Length - 3);
            req.modifiedBy = modifiedBy.Substring(0, modifiedBy.Length - 3);
            req.orgId = orgId.Substring(0, orgId.Length - 3);
            req.parkComment = parkComment.Substring(0, parkComment.Length - 3);
            req.parkDate = parkDate.Substring(0, parkDate.Length - 3);
            req.parkDays = parkDays.Substring(0, parkDays.Length - 3);
            req.preApproved = preApproved.Substring(0, preApproved.Length - 3);
            req.reqId = reqId.Substring(0, reqId.Length - 3);
            req.seqId = seqId.Substring(0, seqId.Length - 3);
            req.status = status.Substring(0, status.Length - 3);
            req.statusId = statusId.Substring(0, statusId.Length - 3);
            req.type = type.Substring(0, type.Length - 3);
            req.userId = userId.Substring(0, userId.Length - 3);
            req.vendorEmail = vendorEmail.Substring(0, vendorEmail.Length - 3);
            req.mgrPreApprovedAP = mgrPreApprovedAP.Substring(0, mgrPreApprovedAP.Length - 3);
            req.preApprovedAP = preApprovedAP.Substring(0, preApprovedAP.Length - 3);
            string retStr = xms.approveRequestByApMul(req);
            if (retStr.ToLower().ToString().Contains("succes"))
            {
                dvMainMsg.Style["color"] = "Green";
                Session.Remove("dsSt_pen");
                Session.Remove("dsSt_App");
                //Session.Remove("dsSt_Rej");
                Session.Remove("dsSt_pen_pre");
                Session.Remove("dsSt_App_pre");
                //Session.Remove("dsSt_Rej_pre");
                Session.Remove("dsSt_pen_po");
                Session.Remove("dsSt_App_po");
                //Session.Remove("dsSt_Rej_po");

                ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
                if (ddlTypeVar == 0)
                {
                    BindApGrid();
                    BindApAppGrid();
                    //BindApRejGrid();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
                }
                else if (ddlTypeVar == 1)
                {
                    BindPen_APGrid_Pre();
                    BindApp_APGrid_Pre();
                    //BindRej_APGrid_Pre();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
                }
                else
                {
                    BindPen_APGrid_PO();
                    BindApp_APGrid_PO();
                    //BindRej_APGrid_PO();
                    Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
                }
                updApproved.Update();
                ReloadUserControls();
                dvHButtons.Style["display"] = "none";
            }
            else
                dvMainMsg.Style["color"] = "Red";
            dvMainMsg.InnerHtml = retStr;
        }
        else
        {
            dvMainMsg.Style["color"] = "Red";
            dvMainMsg.InnerHtml = "Please select atleast one row";
        }
    }

    #endregion

    #endregion

    #region Approved Requests

    protected void gvApproved_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

            //create objects for grid controls
            LinkButton lnkIn = (LinkButton)e.Row.FindControl("lnkIn");
            HiddenField hdnInvoiceCnt = (HiddenField)e.Row.FindControl("hdnInvoiceCnt");
            LinkButton lnkInvGen = (LinkButton)e.Row.FindControl("lnkInvGen");
            Label lblPAmnt = (Label)e.Row.FindControl("lblPAmnt");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            LinkButton lnkEditBtn = (LinkButton)e.Row.FindControl("lnkEditBtn");
            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");
            HiddenField hdnActAmnt = (HiddenField)e.Row.FindControl("hdnActAmnt");
            HiddenField hdnPreamnt = (HiddenField)e.Row.FindControl("hdnPreamnt");
            HiddenField hdnReimbCnt = (HiddenField)e.Row.FindControl("hdnReimbCnt");
            Label lblReimbAmount = (Label)e.Row.FindControl("lblReimbAmount");

            //display reimburse amount
            if (ut.NullSafeDouble(hdnReimbCnt.Value) <= 0)
                lblReimbAmount.Text = "0";
            else
                lblReimbAmount.Text = hdnReimbCnt.Value;
            //display reimburse amount

            if (ddlTypeVar == 2)
            {
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "preferredVendor").ToString();
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
            }
            else
            {
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
            }

            int x = 0;
            int y = 0;
            if (ddlTypeVar != 2)
            {
                if (hdnLmtExceeded.Value.ToLower() == "y" && hdnBudgetLimitExceeded.Value.ToLower() == "y")
                {
                    x++;
                    e.Row.ToolTip = "Total amount has exceeded allowed department limit and one of the AccountCodes has exceeded allowed budget limit.";
                }
                else if (hdnBudgetLimitExceeded.Value.ToLower() == "y")
                {
                    x++;
                    e.Row.ToolTip = "One of the AccountCodes has exceeded allowed budget limit.";
                }
                else if (hdnLmtExceeded.Value.ToLower() == "y")
                {
                    x++;
                    e.Row.ToolTip = "Total amount has exceeded allowed department limit.";
                }
            }
            else
                if (ut.NullSafeDouble(hdnPreamnt.Value) < ut.NullSafeDouble(hdnActAmnt.Value))
                {
                    y++;
                    e.Row.ToolTip = "InvoiceAmount has exceeded POAmount.";
                }

            if (x > 0)
                e.Row.Style["background-color"] = "#FFCCCC";

            if (y > 0)
                e.Row.Style["background-color"] = "#C6E2FF";

            if (ddlTypeVar == 2)
            {
                gvApproved.Columns[0].ItemStyle.Width = 170;
                gvApproved.Columns[0].HeaderStyle.Width = 170;
                gvApproved.Columns[0].ControlStyle.Width = 170;
                gvApproved.Columns[1].Visible = true;
                gvApproved.Columns[4].Visible = true;
                gvApproved.Columns[6].Visible = false;
                gvApproved.Columns[7].Visible = false;
                gvApproved.Columns[8].Visible = true;
                gvApproved.Columns[10].Visible = true;
                if (Convert.ToInt32(hdnInvoiceCnt.Value) > 0)
                {
                    lnkIn.Style.Add("background-image", "url(images/icons/invoice.png)");
                    lnkIn.Text = "";
                    lnkIn.Width = 18;
                    lnkIn.Height = 16;
                }
            }
            else
            {
                gvApproved.Columns[0].ItemStyle.Width = 90;
                gvApproved.Columns[0].HeaderStyle.Width = 90;
                gvApproved.Columns[0].ControlStyle.Width = 90;
                gvApproved.Columns[1].Visible = false;
                gvApproved.Columns[4].Visible = false;
                gvApproved.Columns[6].Visible = true;
                gvApproved.Columns[7].Visible = true;
                gvApproved.Columns[8].Visible = false;
                gvApproved.Columns[10].Visible = false;
            }

            //Add attributes to javafunction to open action popup on mouse over
            //lnkReqEdit.Attributes.Add("onmouseover", "javascript:showActionPopup(" + e.Row.RowIndex + ", '" + popAction.ClientID + "')");
            //lnkEditBtn.Attributes.Add("onmouseover", "javascript:showActionPopup(" + e.Row.RowIndex + ", '" + popAction.ClientID + "')");
            //Add attributes to javafunction to open action popup on mouse over

            //Display HoverMenuExtender on RequestID
            LinkButton lblReqID = (LinkButton)e.Row.FindControl("lnkReqEdit");
            HiddenField hdnMGReqID = (HiddenField)e.Row.FindControl("hdnMGReqID");
            HiddenField hdnUserID = (HiddenField)e.Row.FindControl("hdnUserID");
            HiddenField hdnManagerEmail = (HiddenField)e.Row.FindControl("hdnManagerEmail");
            HiddenField hdnStatusId = (HiddenField)e.Row.FindControl("hdnStatusId");
            HiddenField hdnOnBehalfOf = (HiddenField)e.Row.FindControl("hdnOnBehalfOf");
            HiddenField hdnPreApproved = (HiddenField)e.Row.FindControl("hdnPreApproved");
            LinkButton lnkOpenExpense = (LinkButton)e.Row.FindControl("lnkOpenExpense");
            LinkButton lnkRevertSts = (LinkButton)e.Row.FindControl("lnkRevertSts");
            LinkButton lnkReimburse = (LinkButton)e.Row.FindControl("lnkReimburse");
            LinkButton lnkOpnReimburse = (LinkButton)e.Row.FindControl("lnkOpnReimburse");
            hdnOnBehalfOfAppr.Value = hdnOnBehalfOf.Value;
            lnkOpenExpense.Visible = true;
            lnkOpenExpense.Text += "<hr/>";
            lnkRevertSts.Text += "<hr/>";
            lnkReimburse.Text += "<hr/>";

            if (Session["Email"].ToString() == hdnManagerEmail.Value.ToString() && Session["AppFlag"].ToString().ToLower() == "n")
            {
                if (ut.NullSafeInteger(hdnInvoiceCnt.Value) == 0)
                {
                    //lnkRevertSts.Visible = true;
                    //ScriptManager.GetCurrent(this).RegisterAsyncPostBackControl(lnkRevertSts);
                    //lnkRevertSts.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
                }
                else
                    lnkRevertSts.Visible = false;
            }
            else
                lnkRevertSts.Visible = false;

            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            if (ddlTypeVar != 2)
            {
                if (ut.NullSafeInteger(hdnStatusId.Value) == 4 && ut.NullSafeInteger(hdnReimbCnt.Value) <= 0)
                {
                    lnkReimburse.Visible = true;
                    lnkOpnReimburse.Visible = false;
                }
                else if (ut.NullSafeInteger(hdnStatusId.Value) == 4 && ut.NullSafeInteger(hdnReimbCnt.Value) > 0)
                {
                    lnkReimburse.Visible = false;
                    lnkOpnReimburse.Visible = true;
                }
                else
                {
                    lnkReimburse.Visible = false;
                    lnkOpnReimburse.Visible = false;
                }
            }
            else
            {
                lnkReimburse.Visible = false;
                lnkOpnReimburse.Visible = false;
            }
            //Display HoverMenuExtender on RequestID

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over

            //Display link to Send to QB
            LinkButton lnkSentToQB = (LinkButton)e.Row.FindControl("lnkSentToQB");
            HiddenField hdnIntgrSyncFlag = (HiddenField)e.Row.FindControl("hdnIntgrSyncFlag");
            if (ut.NullSafeInteger(hdnStatusId.Value) == 4)
            {
                if (hdnIntgrSyncFlag.Value.ToLower() == "y")
                {
                    lnkSentToQB.Text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    lnkSentToQB.ToolTip = "Already Exported";
                    lnkSentToQB.Style.Add("background-image", "url(images/icons/tick.png)");
                    lnkSentToQB.Enabled = false;
                    lnkSentToQB.Style["text-decoration"] = "none";
                }
                else if (hdnIntgrSyncFlag.Value.ToLower() == "n")
                {
                    lnkSentToQB.Text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    lnkSentToQB.ToolTip = "No, export now.";
                    lnkSentToQB.Style.Add("background-image", "url(images/icons/cross.png)");
                    lnkSentToQB.Enabled = true;
                }
                else
                    lnkSentToQB.Text = string.Empty;
            }
            else
                lnkSentToQB.Text = string.Empty;
            //Display link to Send to QB
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkPreAmount = (LinkButton)e.Row.FindControl("lnkPreAmount");
            LinkButton lnkAmount = (LinkButton)e.Row.FindControl("lnkAmount");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            if (ddlTypeVar == 2)
            {
                lnkPreAmount.Text = "Vendor";
                lnkPreAmount.CommandArgument = "PreferredVendor";
                lnkAmount.Text = "PoAmount";
                lnkAmount.CommandArgument = "PreAmount";
                lnkRequestID.Text = "PON0";
                lnkRequestID.CommandArgument = "OurRefNo";
            }
            else
            {
                lnkPreAmount.Text = "PreAmount";
                lnkPreAmount.CommandArgument = "PreAmount";
                lnkAmount.Text = "ActualAmount";
                lnkAmount.CommandArgument = "ActualAmount";
                lnkRequestID.Text = "RequestId";
                lnkRequestID.CommandArgument = "RequestId";
            }

            if (ddlTypeVar == 0)
            {
                if (Session["SortDir_ApExpApp"] != null && Session["Control_ApExpApp"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApExpApp"].ToString());
                    if (Session["SortDir_ApExpApp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 1)
            {
                if (Session["SortDir_ApPreApp"] != null && Session["Control_ApPreApp"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPreApp"].ToString());
                    if (Session["SortDir_ApPreApp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 2)
            {
                if (Session["SortDir_ApPoApp"] != null && Session["Control_ApPoApp"] != null)
                {
                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPoApp"].ToString());
                    if (Session["SortDir_ApPoApp"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
        }
    }

    protected void SortExpressionApp(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
            Session["Control_ApExpApp"] = lnk.ID;
        else if (ddlTypeVar == 1)
            Session["Control_ApPreApp"] = lnk.ID;
        else if (ddlTypeVar == 2)
            Session["Control_ApPoApp"] = lnk.ID;
        if (ddlTypeVar == 0)
        {
            if (Session["SortDir_ApExpApp"] == null || Session["SortDir_ApExpApp"].ToString() == "Desc")
                Session["SortDir_ApExpApp"] = "Asc";
            else
                Session["SortDir_ApExpApp"] = "Desc";
        }
        else if (ddlTypeVar == 1)
        {
            if (Session["SortDir_ApPreApp"] == null || Session["SortDir_ApPreApp"].ToString() == "Desc")
                Session["SortDir_ApPreApp"] = "Asc";
            else
                Session["SortDir_ApPreApp"] = "Desc";
        }
        else if (ddlTypeVar == 2)
        {
            if (Session["SortDir_ApPoApp"] == null || Session["SortDir_ApPoApp"].ToString() == "Desc")
                Session["SortDir_ApPoApp"] = "Asc";
            else
                Session["SortDir_ApPoApp"] = "Desc";
        }

        if (ddlTypeVar == 0)
            Session["SortExpr_ApExpApp"] = e.CommandArgument;
        else if (ddlTypeVar == 1)
            Session["SortExpr_ApPreApp"] = e.CommandArgument;
        else if (ddlTypeVar == 2)
            Session["SortExpr_ApPoApp"] = e.CommandArgument;

        if (ddlTypeVar == 0)
            BindApAppGrid();
        else if (ddlTypeVar == 1)
            BindApp_APGrid_Pre();
        else
            BindApp_APGrid_PO();

    }

    protected void Edit_Inv(object sender, EventArgs e)
    {
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistInv");
        string ir = string.Empty;
        string pv = string.Empty;
        string ore = string.Empty;
        if (Session["LineInvExists"] == "1")
        {
            string req = Session["ReqID"].ToString();
            string ponum = Session["PONum"].ToString();
            string prefVend = Session["PreferredVendor"].ToString();
            ir = enc.Encrypt(req, key);
            pv = enc.Encrypt(prefVend, key);
            ore = enc.Encrypt(ponum, key);
        }
        else
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            //LinkButton lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            HiddenField hdnprefVend = (HiddenField)row.Cells[0].FindControl("hdnprefVend");
            HiddenField hdnOurRefNo = (HiddenField)row.Cells[0].FindControl("hdnOurRefNo");
            HiddenField hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            ir = enc.Encrypt(hdnMGReqID.Value, key);
            pv = enc.Encrypt(hdnprefVend.Value, key);
            ore = enc.Encrypt(hdnOurRefNo.Value, key);
        }
        Session.Remove("LineInvExists");
        Session["InvExists"] = "1";
        Response.Redirect("Invoice.aspx?ir=" + ir + "&pv=" + pv + "&ore=" + ore);
    }

    protected void lnkSentToQB_Click(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
        HiddenField hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
        LinkButton lnkSentToQB = (LinkButton)row.Cells[0].FindControl("lnkSentToQB");
        string retStr = IntrSyncConfirm(ut.NullSafeInteger(hdnMGReqID.Value), ut.NullSafeInteger(hdnUserID.Value));
        dvApprovedMainMsg.InnerHtml = retStr;
        if (retStr.ToLower().Contains("succes"))
        {
            dvApprovedMainMsg.Style["color"] = "Green";
            lnkSentToQB.Text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            lnkSentToQB.ToolTip = "Already Exported";
            lnkSentToQB.Style.Add("background-image", "url(images/icons/tick.png)");
            lnkSentToQB.Enabled = false;
            lnkSentToQB.Style["text-decoration"] = "none";
        }
        else
            dvApprovedMainMsg.Style["color"] = "Red";
    }

    #region Edit Expense

    protected void Edit_Appr(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        LinkButton lnkReqID = (LinkButton)row.FindControl("lnkReqEdit");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            LoadApprEditPOData(lnkReqID);
        else
            LoadApprEditData(lnkReqID);
    }

    private void LoadApprEditData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session.Remove("dsSt_pen");
        //Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        //Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnOnBehalfOf = new HiddenField();
        HiddenField hdnIntgrSyncFlag = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnOnBehalfOf = (HiddenField)row.Cells[0].FindControl("hdnOnBehalfOf");
            hdnIntgrSyncFlag = (HiddenField)row.Cells[0].FindControl("hdnIntgrSyncFlag");
        }
        else
        {
            foreach (GridViewRow row1 in gvApproved.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                    hdnOnBehalfOf = (HiddenField)row1.FindControl("hdnOnBehalfOf");
                    hdnIntgrSyncFlag = (HiddenField)row1.FindControl("hdnIntgrSyncFlag");
                    break;
                }
            }
        }
        Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = ut.NullSafeInteger(lblReqID.Text);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;
        Session["Type"] = hdnPreApproved.Value;

        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(ut.NullSafeInteger(Session["ReqID"]), ut.NullSafeInteger(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlManagerEmail_Appr.DataSource = dtManager;
        ddlManagerEmail_Appr.DataBind();

        txtPurpose_Appr.Text = hdnPurpose.Value.ToString();
        txtTripStartDate_Appr.Text = hdnStartDate.Value.ToString();
        txtOnBehalfOfAppr.Text = hdnOnBehalfOf.Value;
        txtPurpose_Appr.ReadOnly = txtTripStartDate_Appr.ReadOnly = txtOnBehalfOfAppr.ReadOnly = true;

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, ut.NullSafeInteger(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dt = dsExp.Tables[0];
            Session["dt"] = dt;
            GetData_Appr();
        }

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lnkCmnt_Appr.Enabled = true;
            lnkCmnt_Appr.Style["text-decoration"] = "none";
            lnkCmnt_Appr.CssClass = "button button-blue";
            lnkCmnt_Appr.ToolTip = "Click to view comments";
        }
        else
        {
            lnkCmnt_Appr.Enabled = false;
            lnkCmnt_Appr.Style["text-decoration"] = "none";
            lnkCmnt_Appr.CssClass = "button button-gray";
            lnkCmnt_Appr.ToolTip = "No comments for this expense";
        }

        //Calculate totals
        expTotal = 0; grandTotal = 0; preExpTotal = 0;// autoTotal = 0;

        foreach (GridViewRow row1 in gvExp_Appr.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblAGrandTotalAmnt.Text = grandTotal.ToString();
        Session["AmountToExp"] = lblAGrandTotalAmnt.Text;
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblAGrandTotal.Style["color"] = lblAGrandTotalAmnt.Style["color"] = "Red";
            lblAGrandTotal.ToolTip = lblAGrandTotalAmnt.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblAGrandTotal.Style["color"] = lblAGrandTotalAmnt.Style["color"] = "Green";
            lblAGrandTotal.ToolTip = lblAGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
        ShowIntegrationSyncFlag(hdnIntgrSyncFlag.Value);
        //try
        //{
        //    //Printing PO Begin
        //    string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["Email"].ToString());
        //    //hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //    btnPrintPO.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //    //Printing PO End
        //}
        //catch (Exception ex) { }
        popup_Appr.Show();
    }

    private void ShowIntegrationSyncFlag(string intgrSyncFlag)
    {
        if (string.IsNullOrEmpty(intgrSyncFlag))
        {
            imgIntgrSync.Visible = false;
            dvIntgrSync.Style["display"] = "none";
            dvIntgrSync.InnerHtml = string.Empty;
        }
        else if (intgrSyncFlag.ToLower() == "y")
        {
            imgIntgrSync.Visible = true;
            imgIntgrSync.ImageUrl = "images/icons/doneIntgr.png";
            imgIntgrSync.Click -= imgPOIntgrSync_Click;
            dvIntgrSync.Style["display"] = "block";
            dvIntgrSync.InnerHtml = "This expense is already synced to QuickBooks.";
        }
        else if (intgrSyncFlag.ToLower() == "n")
        {
            imgIntgrSync.Visible = true;
            imgIntgrSync.ImageUrl = "images/icons/cancelIntgr.png";
            imgIntgrSync.Click += imgPOIntgrSync_Click;
            dvIntgrSync.Style["display"] = "block";
            dvIntgrSync.InnerHtml = "This expense is not synced to QuickBooks. Click to sync now.";
        }
    }

    private void ShowPOIntegrationSyncFlag(string intgrSyncFlag)
    {
        if (string.IsNullOrEmpty(intgrSyncFlag))
        {
            imgPOIntgrSync.Visible = false;
            dvPOIntgrSync.Style["display"] = "none";
            dvPOIntgrSync.InnerHtml = string.Empty;
        }
        else if (intgrSyncFlag.ToLower() == "y")
        {
            imgPOIntgrSync.Visible = true;
            imgPOIntgrSync.ImageUrl = "images/icons/doneIntgr.png";
            imgPOIntgrSync.Click -= imgPOIntgrSync_Click;
            dvPOIntgrSync.Style["display"] = "block";
            dvPOIntgrSync.InnerHtml = "This PO is already synced to QuickBooks.";
        }
        else if (intgrSyncFlag.ToLower() == "n")
        {
            imgPOIntgrSync.Visible = true;
            imgPOIntgrSync.ImageUrl = "images/icons/cancelIntgr.png";
            imgPOIntgrSync.Click += imgPOIntgrSync_Click;
            dvPOIntgrSync.Style["display"] = "block";
            dvPOIntgrSync.InnerHtml = "This PO is not synced to QuickBooks. Click to sync now.";
        }
    }

    protected void imgPOIntgrSync_Click(object sender, ImageClickEventArgs e)
    {
        string str = "";// IntrSyncConfirm(ut.NullSafeInteger(Session["ReqID"]), ut.NullSafeInteger(Session["User_Req"]));
        Div15.InnerHtml = str;
        popEditPO_Appr.Show();
    }

    private string IntrSyncConfirm(int requestId, int reqUserId)
    {
        int uID = Convert.ToInt32(Session["UserID"]);
        RequestVO req = new RequestVO();
        req.accCode = "";
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        req.addedBy = uID;
        req.approved = "1";
        req.comments = "";
        req.compCode = Session["CompCode"].ToString();
        req.emailFaxFlag = "";
        req.flag = 0;
        req.mailAttachment = "";
        req.mailBody = "";
        req.mailSubject = "";
        req.mailTo = "";
        req.mgrAttachment = "";
        req.mgrBody = "";
        req.mgrEmail = "";
        req.mgrGroupCode = "";
        req.mgrSubject = "";
        req.modifiedBy = uID;
        req.orgId = Session["OrgID"].ToString();
        req.parkComment = "";
        req.parkDate = "";
        req.parkDays = 0;
        req.preApproved = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        req.reqId = requestId.ToString();
        req.seqId = uID.ToString();
        req.status = "";
        req.statusId = "";
        req.successMsg = "";
        req.type = "2";
        req.userId = reqUserId.ToString();
        req.vendorEmail = "";
        return xms.exportBillsToQB(req, Session["CompCode"].ToString());
    }

    private void GetData_Appr()
    {
        gvExp_Appr.DataSource = dt;
        gvExp_Appr.DataBind();
    }

    private void GetShippingAddressAppr()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            lblShipAddrAppr.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipCompNameAppr.Text = dv.ToTable().Rows[0]["CompName"].ToString();
            lblShipAddr1Appr.Text = dv.ToTable().Rows[0]["Address1"].ToString();
            lblShipAddr2Appr.Text = dv.ToTable().Rows[0]["Address2"].ToString();
            lblShipCityAppr.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipStateAppr.Text = dv.ToTable().Rows[0]["State"].ToString();
            lblShipCountryAppr.Text = dv.ToTable().Rows[0]["CountryCode"].ToString();
            lblShipZipCodeAppr.Text = dv.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void GetBillingAddressAppr()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        DataView dvBillComp = new DataView(dsCompCode.Tables[0], "CompCode = '" + dv.ToTable().Rows[0]["billToCompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dvBillComp.ToTable().Rows.Count > 0)
        {
            lblBillAddrAppr.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillCompNameAppr.Text = dvBillComp.ToTable().Rows[0]["CompName"].ToString();
            lblBillAddr1Appr.Text = dvBillComp.ToTable().Rows[0]["Address1"].ToString();
            lblBillAddr2Appr.Text = dvBillComp.ToTable().Rows[0]["Address2"].ToString();
            lblBillCityAppr.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillStateAppr.Text = dvBillComp.ToTable().Rows[0]["State"].ToString();
            lblBillCountryAppr.Text = dvBillComp.ToTable().Rows[0]["CountryCode"].ToString();
            lblBillZipCodeAppr.Text = dvBillComp.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    protected void gvExp_Appr_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            if (hdnSeq != null)
            {
                LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
                if (Convert.ToInt32(hdnAttCnt.Value) > 0)
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }

            Label lblCity = (Label)e.Row.FindControl("lblCity");
            if (lblCity != null && lblCity.Text == "Other")
            {
                lblCity.Visible = false;
            }
            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            //DataSet dsCodes = new DataSet();
            //DataTable dtCodes = new DataTable();
            //DataTable dt = new DataTable();
            //DataView view;
            //if (Session["dsCodes"] != null)
            //{
            //    dtCodes = (DataTable)Session["dsCodes"];
            //    string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //    view = new DataView(dtCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //    dt = view.ToTable();
            //}
            //else
            //{
            //    string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
            //    List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
            //    dsCodes.Tables.Add(Utility.ConvertToDataTable(lstExp));
            //    dt = dsCodes.Tables[0];
            //}
            //string lmt = dt.Rows[0]["CodeValue2"].ToString();
            //if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}
            //else
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}

            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
            {
                lblExpDate.Text = lblFromDate.Text;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void CalculateTotals_Appr()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;// autoTotal = 0;

        foreach (GridViewRow row1 in gvExp_Appr.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblAGrandTotalAmnt.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblAGrandTotal.Style["color"] = lblAGrandTotalAmnt.Style["color"] = "Red";
            lblAGrandTotal.ToolTip = lblAGrandTotalAmnt.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblAGrandTotal.Style["color"] = lblAGrandTotalAmnt.Style["color"] = "Green";
            lblAGrandTotal.ToolTip = lblAGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
    }

    protected void btnClose_Appr_Click(object sender, EventArgs e)
    {
        statusID = 0;
        BindApGrid();
        popup_Appr.Hide();
    }

    protected void LoadApprEditData(object sender, EventArgs e)
    {
        LoadApprEditData(null);
    }

    protected void OpenExpense(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        LinkButton lnkReqID = (LinkButton)row.FindControl("lnkReqEdit");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            LoadApprEditPOData(lnkReqID);
        else
            LoadApprEditData(lnkReqID);
    }

    protected void RevertStatus(object sender, EventArgs e)
    {
        int uID = ut.NullSafeInteger(Session["UserID"]);
        bool pre = false;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        LinkButton lnkReqID = (LinkButton)row.FindControl("lnkReqEdit");
        HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
        HiddenField hdnPreApproved = (HiddenField)row.FindControl("hdnPreApproved");
        HiddenField hdnMGReqID = (HiddenField)row.FindControl("hdnMGReqID");

        RequestVO req = new RequestVO();
        req.approved = "5";
        req.preApproved = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        req.orgId = Session["OrgID"].ToString();
        req.reqId = hdnMGReqID.Value;
        req.type = "5";
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = hdnUserID.Value;
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = string.Empty;
        req.vendorEmail = string.Empty;
        req.emailFaxFlag = string.Empty;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        if (ut.NullSafeInteger(hdnPreApproved.Value) == 1)
            pre = true;

        string retStr = xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("dsSt_park_po");

        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            BindPark_APGrid();
        }
        if (ddlTypeVar == 2)
            pop_EditPO.Hide();
        else
            popup.Hide();
    }

    protected void Reimburse(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        LinkButton lnkReqID = (LinkButton)row.FindControl("lnkReqEdit");
        HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");
        HiddenField hdnUserName = (HiddenField)row.FindControl("hdnUserName");

        //Encryption enc = new Encryption();
        //string key = enc.GenerateAPassKey("POExistInv");
        //string ir1 = string.Empty;
        //string req = lnkReqID.Text;
        //ir1 = enc.Encrypt(req, key);
        //string onBehalfOf = enc.Encrypt(hdnOnBehalfOfAppr.Value, key);
        Session["OpenReimv"] = "0";
        LoadReimburseData(lnkReqID.Text, hdnUserName.Value);
        //Response.Redirect("Reimburse.aspx?userid=" + hdnUserID.Value + "&reqid=" + ir1 + "&obh=" + onBehalfOf);
        popReimb.Show();
    }

    private void LoadReimburseData(string reqId, string payableTo)
    {
        string str = string.Empty;
        if (Session["OpenReimv"] == "1")
            str = xms.getExpReimburseDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(reqId), 2);
        else
            str = xms.getExpReimburseDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(reqId), 1);
        List<ReimburseVO> lstApExp = ser.Deserialize<List<ReimburseVO>>(str);
        //ReimburseVO r = new ReimburseVO();
        //r.payableTO
        DataTable dt = Utility.ConvertToDataTable(lstApExp);
        gvReimburse.DataSource = dt;
        gvReimburse.DataBind();
        int cashAdv = Convert.ToInt32(dt.Rows[0]["cashAdvAmt"]);
        Session["cashAdv"] = cashAdv;
        Session["ReimbReqID"] = reqId;
        Session["TotalAmnt"] = dt.Rows[0]["totalAmount"].ToString();
        txtPayableTo.Text = dt.Rows[0]["payableTO"].ToString();
        if (ddlPayModeReimb.SelectedValue == "Cheque")
            Cheque1.Style.Add("display", "block");
        else
            Cheque1.Style.Add("display", "none");

        if (Session["OpenReimv"] == "1")
        {
            ddlPayModeReimb.SelectedValue = dt.Rows[0]["payMode"].ToString();
            if (ddlPayModeReimb.SelectedValue == "Cheque")
            {
                txtChqDate.Text = dt.Rows[0]["payModeDate"].ToString();
                txtchqNO.Text = dt.Rows[0]["payModeDetail1"].ToString();
                txtBank.Text = dt.Rows[0]["payModeDetail2"].ToString();
                txtBank.ReadOnly = true;
                txtChqDate.ReadOnly = true;
                txtchqNO.ReadOnly = true;
                //dvBankDetails.Style["display"] = "none";
            }
            //txtDesc.Text = dt.Rows[0]["comments"].ToString();
            txAmount.ReadOnly = true;
            //txtDesc.ReadOnly = true;
            btnSave.Visible = false;
            ddlPayModeReimb.Enabled = false;
        }
        else
        {
            clearReimburseFields();
            btnSave.Visible = true;
            ddlPayModeReimb.Enabled = true;
            txtBank.ReadOnly = false;
            txtChqDate.ReadOnly = false;
            txtchqNO.ReadOnly = false;
            txAmount.ReadOnly = false;
            //txtDesc.ReadOnly = false;
            txtPayableTo.Text = payableTo;
        }
        txAmount.Text = dt.Rows[0]["totalAmount"].ToString();
        Session.Remove("OpenReimv");
    }

    protected void clearReimburseFields()
    {
        txtChqDate.Text = "";
        txtchqNO.Text = "";
        txtBank.Text = "";
    }

    protected void OpenReimburse(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent.Parent;
        LinkButton lnkReqID = (LinkButton)row.FindControl("lnkReqEdit");
        HiddenField hdnUserID = (HiddenField)row.FindControl("hdnUserID");

        Session["OpenReimv"] = "1";
        LoadReimburseData(lnkReqID.Text, string.Empty);
        popReimb.Show();
    }

    protected void SaveReimburse(object sender, EventArgs e)
    {
        ReimburseVO reimb = new ReimburseVO();
        reimb.cashAdvAmt = Convert.ToDouble(Session["cashAdv"]);
        reimb.orgId = Convert.ToInt32(Session["OrgID"]);
        reimb.compCode = Session["CompCode"].ToString();
        reimb.requestId = Convert.ToInt32(Session["ReimbReqID"]);
        reimb.requestId1 = Session["ReimbReqID"].ToString();
        reimb.totalAmount = ut.NullSafeDouble(txAmount.Text);
        reimb.payModeDetail1 = txtchqNO.Text;
        reimb.payModeDetail2 = txtBank.Text;
        reimb.payModeDetail3 = string.Empty;
        reimb.payModeDetail4 = string.Empty;
        reimb.payModeDate = string.Empty;
        reimb.payMode = ddlPayModeReimb.SelectedValue;
        reimb.payAmount = 0;
        reimb.addedBy = ut.NullSafeInteger(Session["UserID"]);
        reimb.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        reimb.comments = string.Empty;//txtDesc.Text;
        reimb.payModeDate = txtChqDate.Text;
        reimb.payableTO = txtPayableTo.Text;
        string ret = xms.addReqReimburse(reimb);
        if (ret.ToLower().Contains("succes"))
        {
            dvEr1.Style["color"] = "Green";
            Session.Remove("dsSt_App");
            BindApAppGrid();
            popReimb.Hide();
        }
        else
        {
            dvEr1.Style["color"] = "Red";
            popReimb.Show();
        }
        dvEr1.InnerHtml = ret;
        DisplayFieldsOnPaySelect();
    }

    private void DisplayFieldsOnPaySelect()
    {
        if (ddlPayModeReimb.SelectedValue == "Cheque")
            Cheque1.Style["display"] = "block";
        else
            Cheque1.Style["display"] = "none";
    }

    protected void gvReimburse_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private DataTable BindPrefApprVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlPreVendor_Appr.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlPreVendor_Appr.DataBind();
        ddlPreVendor_Appr.Items.Insert(0, "Please Select");
        ddlPreVendor_Appr.Items.FindByText("Please Select").Value = "0";
        return dt;
    }

    private void LoadApprEditPOData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("dtPO");
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("AttchList");

        Session["LineInvExists"] = "1";
        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnActnDate = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnIntgrSyncFlag = new HiddenField();

        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnActnDate = (HiddenField)row.Cells[0].FindControl("hdnActnDate");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnIntgrSyncFlag = (HiddenField)row.Cells[0].FindControl("hdnIntgrSyncFlag");
        }
        else
        {
            foreach (GridViewRow row1 in gvApproved.Rows)
            {
                hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(hdnMGReqID.Value) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnActnDate = (HiddenField)row1.FindControl("hdnActnDate");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnIntgrSyncFlag = (HiddenField)row1.FindControl("hdnIntgrSyncFlag");
                    break;
                }
            }
        }
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;

        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;
        //hdnActionDate.Value = hdnActnDate.Value;
        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlPOMgrEmail_Appr.DataSource = dtManager;
        ddlPOMgrEmail_Appr.DataBind();
        txtPoPurpose_Appr.Text = hdnPurpose.Value;
        txtPoPurpose_Appr.ReadOnly = true;

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dtPO = dsExp.Tables[0];
            Session["dtPO"] = dtPO;
            GetPOData_Appr();
        }
        txtPOTripStartDate_Appr.Text = hdnStartDate.Value.ToString();
        txtPOTripStartDate_Appr.ReadOnly = true;
        Session["PONum"] = Utility.NullSafeString(dsExp.Tables[0].Rows[0]["ourRefNo"]);

        double grandTotal = 0;
        for (int i = 0; i < dtPO.Rows.Count; i++)
        {
            grandTotal += Convert.ToDouble(dtPO.Rows[i]["PreAmount"]);
        }
        Session["POGrandTotal"] = grandTotal;

        DataTable dt = BindPrefApprVendors();
        ddlPreVendor_Appr.SelectedValue = dsExp.Tables[0].Rows[0]["preferredVendor"].ToString();
        Session["PreferredVendor"] = ddlPreVendor_Appr.SelectedValue;
        txtPoPurpose_Appr.Text = hdnPurpose.Value;
        txtPoPurpose_Appr.Enabled = false;
        ddlPreVendor_Appr.Enabled = false;
        ddlPOMgrEmail_Appr.Enabled = false;

        if (dsExp.Tables[0].Rows[0]["vendorFlag"].ToString().ToLower() == "n")
        {
            btnSendToVend.Visible = true;
            string expr = "preferredVendor = '" + dsExp.Tables[0].Rows[0]["preferredVendor"].ToString().Replace("'", "''") + "'";
            DataView dv = new DataView(dt, expr, "preferredVendor", DataViewRowState.CurrentRows);
            hdnApprVendEmail.Value = dv.ToTable().Rows[0]["vendorEmail"].ToString();
        }
        else
            btnSendToVend.Visible = false;
        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lnkPOCmnts_Appr.Enabled = true;
            lnkPOCmnts_Appr.Style["text-decoration"] = "none";
            lnkPOCmnts_Appr.CssClass = "button button-blue";
            lnkPOCmnts_Appr.ToolTip = "Click to view comments";
        }
        else
        {
            lnkPOCmnts_Appr.Enabled = false;
            lnkPOCmnts_Appr.Style["text-decoration"] = "none";
            lnkPOCmnts_Appr.CssClass = "button button-gray";
            lnkPOCmnts_Appr.ToolTip = "No comments for this PO";
        }

        //Printing PO Begin
        //string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), txtPOTripStartDate_Appr.Text, Session["Email"].ToString());
        //btnPrintPO.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //Printing PO End
        GetShippingAddressAppr();
        GetBillingAddressAppr();

        //Load Jobs
        BindJobs(ut.NullSafeInteger(hdnUserID.Value), ddlJobsAppr);
        if (!string.IsNullOrEmpty(dsExp.Tables[0].Rows[0]["jobCode"].ToString()))
        {
            //string[] arrJob = dsExp.Tables[0].Rows[0]["jobCode"].ToString().Split('-');
            ddlJobsAppr.SelectedValue = dsExp.Tables[0].Rows[0]["jobCode"].ToString();// arrJob[0];
        }
        ddlJobsAppr.Enabled = false;

        //Get PO attachments count
        Attachments(0);
        ds = (DataSet)Session["AttchList"];
        btnAttachPOAppr.Text = "   Attachments(" + ds.Tables[0].Rows.Count + ")";
        //Get PO attachments count
        ShowPOIntegrationSyncFlag(hdnIntgrSyncFlag.Value);
        popEditPO_Appr.Show();
    }

    private void GetPOData_Appr()
    {
        gvPO_Appr.DataSource = dtPO;
        gvPO_Appr.DataBind();
    }

    protected void gvPO_Appr_RowCommand(object sender, GridViewCommandEventArgs e)
    {
    }

    protected void LoadApprEditPOData(object sender, EventArgs e)
    {
        LoadApprEditPOData(null);
    }

    protected void SendToVendor(object sender, EventArgs e)
    {
        if (string.IsNullOrEmpty(hdnApprVendEmail.Value))
        {
            dvApprVendConf.Style["display"] = "none";
            dvApprNoVendEmail.Style["display"] = "block";
            btnConfSendToVendor.Attributes.Add("onclick", "javascript:return ValEmail('" + txtApprVendEmail.ClientID + "', '" + dvApprVendMsg.ClientID + "');");
        }
        else
        {
            dvApprVendConf.Style["display"] = "block";
            dvApprNoVendEmail.Style["display"] = "none";
            btnConfSendToVendor.Attributes.Remove("onclick");
        }
        popEditPO_Appr.Show();
        popSendVend.Show();
    }

    protected void ConfirmSendToVendor(object sender, EventArgs e)
    {
        DataTable dtPO = (DataTable)Session["dtPO"];
        string ourRef = dtPO.Rows[0]["ourRefNo"].ToString();
        string prefVend = dtPO.Rows[0]["preferredVendor"].ToString();
        int reqId = ut.NullSafeInteger(dtPO.Rows[0]["reqId"]);
        int orgId = Convert.ToInt32(Session["OrgID"]);
        string compCode = Session["CompCode"].ToString();
        string userEmail = Session["Email"].ToString();
        string vendEmail = string.IsNullOrEmpty(hdnApprVendEmail.Value) ? txtApprVendEmail.Text : hdnApprVendEmail.Value;
        SendVendorVO vend = new SendVendorVO();
        vend.compCode = compCode;
        vend.emailFaxFlag = "";
        vend.orgId = orgId;
        vend.orgName = Session["SOrgName"].ToString();
        vend.ourRefNo = ourRef;
        vend.preferredVendor = prefVend;
        vend.requestId = reqId;
        vend.userEmail = userEmail;
        vend.userId = Convert.ToInt32(Session["UserID"]);
        vend.vendorEmail = vendEmail;
        //string retStr = xms.sendVendorEmail(ourRef, prefVend, reqId, orgId, compCode, userEmail, vendEmail, "", Session["SOrgName"].ToString());
        string retStr = xms.sendVendorEmail(vend);
        if (retStr.ToLower().Contains("succes"))
        {
            Div15.Style["color"] = "Green";
            btnSendToVend.Visible = false;
        }
        else
            Div15.Style["color"] = "Red";
        Div15.InnerHtml = retStr;
        popEditPO_Appr.Show();
    }

    #endregion

    # region Export

    protected void Export(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
        popExpData.Show();
    }

    private string PrintAndEmail()
    {
        string retStr = string.Empty;
        string pdfText = string.Empty;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (hdnMailTo.Value.ToLower().Contains("vendor"))
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), "VENDOR", Session["Email"].ToString());
        else
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), ddlTypeVar == 0 || ddlTypeVar == 1 ? string.Empty : txtPOTripStartDate_Appr.Text, Session["Email"].ToString());

        string[] arrExpCodes = new string[txtMulEmail.Text.Split(',').Length];
        arrExpCodes = txtMulEmail.Text.Split(',');
        for (int i = 0; i < arrExpCodes.Length; i++)
        {
            if (ddlTypeVar == 0 || ddlTypeVar == 1)
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose_Appr.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            else
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose_Appr.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            //    retStr = xms.sendMail(arrExpCodes[i], string.Empty, "Expense Report", "Hi! <br /><br /> Attached is your Expense Report for RequestID :" + Session["ReqID"].ToString() + ".", Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            //else
            //    retStr = xms.sendMail(arrExpCodes[i], string.Empty, "PO Report", "Hi! <br /><br /> Attached is your Purchase Order Report for PO Number : " + Session["PONum"].ToString() + ".", Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
        }
        if (dvCCEmail.Style["display"] == "block" && txtCCEmail.Text != null)
        {
            string[] arrCCEmails = new string[txtCCEmail.Text.Split(',').Length];
            arrCCEmails = txtCCEmail.Text.Split(',');
            for (int i = 0; i < arrCCEmails.Length; i++)
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose_Appr.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                else
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose_Appr.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                //    retStr = xms.sendMail(arrCCEmails[i], string.Empty, "Expense Report", "Hi! <br /><br /> Attached is your Expense Report for RequestID :" + Session["ReqID"].ToString() + ".", Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                //else
                //    retStr = xms.sendMail(arrCCEmails[i], string.Empty, "PO Report", "Hi! <br /><br /> Attached is your Purchase Order Report for PO Number : " + Session["PONum"].ToString() + ".", Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            }
        }
        txtMulEmail.Text = string.Empty;
        txtCCEmail.Text = string.Empty;
        return retStr;
    }

    protected void ExportAndEmail(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail.ClientID + "', '" + DivEmailErr.ClientID + "');");
        hdnMailTo.Value = "User";
        dvExpDataMsg.InnerHtml = string.Empty;
        DivEmailErr.InnerHtml = string.Empty;
        txtMulEmail.Text = string.Empty;
        dvCCEmail.Style["display"] = "none";
        popMulEmail.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
        popExpData.Show();
    }

    protected void AddCCEmail(object sender, EventArgs e)
    {
        dvCCEmail.Style["display"] = "block";
        txtCCEmail.Text = string.Empty;
        popMulEmail.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
        popExpData.Show();
    }

    protected void ValidateEmail(object sender, EventArgs e)
    {
        try
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            string str = PrintAndEmail();
            if (str.ToLower().Contains("succes"))
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                {
                    dvError_Appr.Style["color"] = "Green";
                    dvError_Appr.InnerHtml = "Mail sent successfully.";
                }
                else
                {
                    Div15.Style["color"] = "Green";
                    Div15.InnerHtml = "Mail sent successfully.";
                }
                popMulEmail.Hide();
                popExpData.Hide();
            }
            else
            {
                DivEmailErr.Style["color"] = "Red";
                DivEmailErr.InnerHtml = "Unable to send email. Please try again.";
                popMulEmail.Show();
                popExpData.Show();
            }
        }
        catch (Exception ex)
        {
            DivEmailErr.Style["color"] = "Red";
            DivEmailErr.InnerHtml = "Unable to send email. Please try again.";
            popMulEmail.Show();
            popExpData.Show();
        }
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
    }

    protected void PrintPO(object sender, EventArgs e)
    {
        string startDate = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStartDate_Appr.Text;

        //encrypt email
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Encrypt(Session["Email"].ToString(), key);
        //encrypt email

        ScriptManager.RegisterStartupScript(this, GetType(), "Print Expense", "window.open('print.aspx?rq=" + Session["ReqID"].ToString() + "&sd=" + startDate + "&em=" + eMail + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);

        popExpData.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
    }

    protected void SendExpVendorEmail(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail.Text + "', '" + DivEmailErr.ClientID + "');");

        hdnMailTo.Value = "Vendor";
        dvExpDataMsg.InnerHtml = string.Empty;
        DivEmailErr.InnerHtml = string.Empty;
        txtMulEmail.Text = string.Empty;
        dvCCEmail.Style["display"] = "none";
        popMulEmail.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        else
            popEditPO_Appr.Show();
        popExpData.Show();
    }

    protected void btnExportApproved_Click(object sender, EventArgs e)
    {
        Session.Remove("dgDgrid");
        DataTable dt = GetAdvSearchedData();

        GridView dgDgrid = new GridView();
        dgDgrid.AllowPaging = false;
        dgDgrid.DataSource = dt;

        BoundField dgc_RequestID = new BoundField();
        dgc_RequestID.DataField = ddlType.SelectedValue == "PO" ? "OurRefNo" : "RequestID";
        dgc_RequestID.HeaderText = ddlType.SelectedValue == "PO" ? "PO No." : "Request ID";
        dgDgrid.Columns.Add(dgc_RequestID);

        BoundField dgc_UserName = new BoundField();
        dgc_UserName.DataField = "UserName";
        dgc_UserName.HeaderText = "Applied By";
        dgDgrid.Columns.Add(dgc_UserName);

        BoundField dgc_ActionBy = new BoundField();
        dgc_ActionBy.DataField = "actionBy";
        dgc_ActionBy.HeaderText = "Approved By";
        dgDgrid.Columns.Add(dgc_ActionBy);

        BoundField dgc_ActionDate = new BoundField();
        dgc_ActionDate.DataField = "ActionDate";
        dgc_ActionDate.HeaderText = "Approved On";
        dgDgrid.Columns.Add(dgc_ActionDate);

        BoundField dgc_Amount = new BoundField();
        dgc_Amount.DataField = ddlType.SelectedValue == "PO" ? "PreAmount" : "ActualAmount";
        dgc_Amount.HeaderText = "Amount";
        dgDgrid.Columns.Add(dgc_Amount);

        BoundField dgc_ReimburseCnt = new BoundField();
        dgc_ReimburseCnt.DataField = ddlType.SelectedValue == "PO" ? "ActualAmount" : "reimburseCnt";
        dgc_ReimburseCnt.HeaderText = ddlType.SelectedValue == "PO" ? "Invoice Amount" : "Reimbursed Amount";
        dgDgrid.Columns.Add(dgc_ReimburseCnt);

        BoundField dgc_Purpose = new BoundField();
        dgc_Purpose.DataField = "Purpose";
        dgc_Purpose.HeaderText = "Purpose";
        dgDgrid.Columns.Add(dgc_Purpose);

        BoundField dgc_Exported = new BoundField();
        dgc_Exported.DataField = "intrSyncFlag";
        dgc_Exported.HeaderText = "Exported";
        dgDgrid.Columns.Add(dgc_Exported);

        dgDgrid.AutoGenerateColumns = false;
        dgDgrid.DataBind();

        string type = string.Empty;
        if (ddlType.SelectedValue != "PO")
        {
            dgDgrid.Caption = "<b><h3>Expense Details</h3></b>";
            type = "exp";
        }
        else
        {
            dgDgrid.Caption = "<b><h3>Purchase Order Details</h3></b>";
            type = "po";
        }

        Session["dgDgrid"] = dgDgrid;
        Response.Redirect("DownloadFile.aspx?typ=11&exp=" + type);
    }

    #endregion

    # region View Approved ExpDetails

    private void BlockViewApprFields()
    {
        dvEditVAPreVendor.Style["display"] = "none";
        dvEditVAAgName.Style["display"] = "none";
        dvEditVAItNo.Style["display"] = "none";
        dvEditVAED.Style["display"] = "none";
        dvEditVACV.Style["display"] = "none";
        SpVPOthercity.Style["display"] = "none";
        dvEditVAFromcity.Style["display"] = "none";
        dvEditVAFromOther.Style["display"] = "none";
        dvEditVAToCity.Style["display"] = "none";
        dvEditVAToOther.Style["display"] = "none";
        dvEditVAFD.Style["display"] = "none";
        dvEditVATD.Style["display"] = "none";
        dvEditVATT.Style["display"] = "none";
        dvEditVALN.Style["display"] = "none";
        dvEditVAReimbt.Style["display"] = "none";
        dvEditVAPA.Style["display"] = "none";
    }

    protected void ViewApprovedDetails(object sender, CommandEventArgs e)
    {
        string[] arg = new string[1];
        arg = e.CommandArgument.ToString().Split(';');
        hdnARowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);

        if (index == 0)
            btnVAPrev.Visible = false;
        else
            btnVAPrev.Visible = true;
        if (index == gvExp_Appr.Rows.Count - 1)
            btnVANext.Visible = false;
        else
            btnVANext.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;
        hdnASeq1.Value = hdnSeq.Value;
        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dsExpApprovedDetails = (DataTable)Session["dt"];
        GetViewAppExpItemData(dsExpApprovedDetails, index);
        CalculateTotals_Appr();
    }

    private void GetViewAppExpItemData(DataTable dsExpApprovedDetails, int index)
    {
        BlockViewApprFields();
        if (dsExpApprovedDetails.Rows.Count > 0)
        {
            DataSet dsCodes = new DataSet();
            DataTable dtCodes = new DataTable();
            //lblVAExpCd.Text = dsExpApprovedDetails.Rows[index]["expItem"].ToString();
            //txtVAAccCode.Text = dsExpApprovedDetails.Rows[index]["expItemAccCode"].ToString();
            txtVAAccCode.Text = dsExpApprovedDetails.Rows[index]["AccountCode"].ToString() + "-" + dsExpApprovedDetails.Rows[index]["expItem"].ToString();
            txtVAClass.Text = dsExpApprovedDetails.Rows[index]["className"].ToString();

            lblddlVAExpType.Text = dsExpApprovedDetails.Rows[index]["expType"].ToString();
            if (lblddlVAExpType.Text == "GENERAL")
            {
                lblVACatCode.Text = string.Empty;
                lblddlVAJobCd.Text = string.Empty;
                lblVAPhcd.Text = string.Empty;
                dvEditVAJob.Style["display"] = "none";
                dvEditVAPhs.Style["display"] = "none";
                dvEditVAJC.Style["display"] = "none";
            }
            else
            {
                dvEditVAJob.Style["display"] = "block";
                dvEditVAPhs.Style["display"] = "block";
                dvEditVAJC.Style["display"] = "block";
                lblddlVAJobCd.Text = dsExpApprovedDetails.Rows[index]["jobCode"].ToString();
                lblVAPhcd.Text = dsExpApprovedDetails.Rows[index]["phaseCode"].ToString();
                lblVACatCode.Text = dsExpApprovedDetails.Rows[index]["JCatCode"].ToString();
            }

            string[] arr = txtVAAccCode.Text.Split('-');
            DataView dvCodes = GetExpCodeDetails(arr[1].Trim());
            Session["TestViewExp1"] = "1";

            if (dvCodes != null)
            {
                Session.Remove("TestViewExp1");
                DataTable dtSec = dvCodes.ToTable();
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVAED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVADate.Text = dsExpApprovedDetails.Rows[index]["expDate"].ToString();
                }
                else
                {
                    dvEditVAED.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditVAFD.Style["display"] = "block";
                    dvEditVATD.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    lblVAFromdate.Text = dsExpApprovedDetails.Rows[index]["FromDate"].ToString();
                    lblVATodate.Text = dsExpApprovedDetails.Rows[index]["ToDate"].ToString();
                }
                else
                {
                    dvEditVAFD.Style["display"] = "none";
                    dvEditVATD.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditVACV.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    if (dsExpApprovedDetails.Rows[index]["citiesVstd"].ToString() == string.Empty)
                        lblVACity.Text = "0";
                    else
                        lblVACity.Text = dsExpApprovedDetails.Rows[index]["citiesVstd"].ToString();
                    if (lblVACity.Text == "Other")
                    {
                        SpVAOthercity.Style.Add("Display", "block");
                        lblVAOther.Text = dsExpApprovedDetails.Rows[index]["otherCity"].ToString();
                    }
                    else
                        SpVAOthercity.Style.Add("Display", "none");
                }
                else
                    dvEditVACV.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVAFromcity.Style["display"] = "block";
                    dvEditVAToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVAFromcity.Text = dsExpApprovedDetails.Rows[index]["FromCity"].ToString();
                    if (lblVAOtherFromCity.Text == "Other")
                    {
                        dvEditVAFromOther.Style["display"] = "block";
                        lblVAOtherFromCity.Text = dsExpApprovedDetails.Rows[index]["FromOtherCity"].ToString();
                    }
                    else
                        dvEditVAFromOther.Style.Add("Display", "none");

                    //Assign values to ToCity field
                    lblVATocity.Text = dsExpApprovedDetails.Rows[index]["ToCity"].ToString();
                    if (lblVATocity.Text == "Other")
                    {
                        dvEditVAToOther.Style["display"] = "block";
                        lblVAOtherToCity.Text = dsExpApprovedDetails.Rows[index]["ToOtherCity"].ToString();
                    }
                    else
                        dvEditVAToOther.Style["display"] = "none";
                }
                else
                {
                    dvEditVAFromcity.Style["display"] = "none";
                    dvEditVAToCity.Style["display"] = "none";
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVATT.Style["display"] = "block";
                    dvEditVALN.Style["display"] = "block";
                    dvEditVAAmt.Style["display"] = "block";
                    dvEditVASalesTax.Style["display"] = "none";
                    lblVATotTrip.Text = dsExpApprovedDetails.Rows[index]["totTrip"].ToString();
                    lblVALNorm.Text = dsExpApprovedDetails.Rows[index]["LNorm"].ToString();
                    lblVAReimbt.Text = dsExpApprovedDetails.Rows[index]["Reimbt"].ToString();
                    lblVAActAmt.ReadOnly = true;
                    lblVAPreAmt.ReadOnly = true;
                }
                else
                {
                    dvEditVATT.Style["display"] = "none";
                    dvEditVALN.Style["display"] = "none";
                    //dvEditVAAmt.Style["display"] = "none";
                    dvEditVASalesTax.Style["display"] = "block";
                    lblVAActAmt.ReadOnly = false;
                    lblVAPreAmt.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    lblVAPreVendor.Text = dsExpApprovedDetails.Rows[index]["PreferredVendor"].ToString();
                    lblAAgName.Text = dsExpApprovedDetails.Rows[index]["AgentName"].ToString();
                    lblVAItNo.Text = dsExpApprovedDetails.Rows[index]["ItinararyNo"].ToString();
                    //if (lblVAPreVendor.Text == string.Empty)
                    //{
                    //    dvEditVAPreVendor.Style["display"] = "none";
                    //    dvEditVAAgName.Style["display"] = "none";
                    //    dvEditVAItNo.Style["display"] = "none";
                    //}
                    //else
                    //{
                    dvEditVAPreVendor.Style["display"] = "block";
                    dvEditVAAgName.Style["display"] = "block";
                    dvEditVAItNo.Style["display"] = "block";
                    //}
                }
                else
                {
                    dvEditVAPreVendor.Style["display"] = "none";
                    dvEditVAAgName.Style["display"] = "none";
                    dvEditVAItNo.Style["display"] = "none";
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditVAED.Style["display"] = "block";
                lblVADate.Text = dsExpApprovedDetails.Rows[index]["ExpDate"].ToString();
                dvEditVACV.Style["display"] = "block";
                lblVACity.Text = dsExpApprovedDetails.Rows[index]["CitiesVstd"].ToString();
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditVAED.Style["display"] = "none";
                dvEditVACV.Style["display"] = "none";
            }

            lblVASalesTax.Text = dsExpApprovedDetails.Rows[index]["taxAmount1"].ToString();
            lblVAFoodTax.Text = dsExpApprovedDetails.Rows[index]["taxAmount2"].ToString();
            lblVAActAmt.Text = dsExpApprovedDetails.Rows[index]["actualAmount"].ToString();
            lblVAPreAmt.Text = dsExpApprovedDetails.Rows[index]["preAmount"].ToString();
            lblVAPayMode.Text = dsExpApprovedDetails.Rows[index]["payMode"].ToString();
            lblVACity.Text = dsExpApprovedDetails.Rows[index]["citiesVstd"].ToString();
            if (lblVACity.Text == "Other")
            {
                SpVAOthercity.Visible = true;
                lblVAOther.Text = dsExpApprovedDetails.Rows[index]["otherCity"].ToString();
            }
            else
                SpVAOthercity.Visible = false;

            lblVAcomnts.Text = dsExpApprovedDetails.Rows[index]["comments"].ToString();
            GetViewBudgetDataAppr(dsExpApprovedDetails.Rows[index]["accountCode"].ToString());
            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LinkViewAppAttachments.Style["display"] = "block";
                lblAppAtt.Style["display"] = "none";
            }
            else
            {
                LinkViewAppAttachments.Style["display"] = "none";
                lblAppAtt.Style["display"] = "block";
                lblAppAtt.InnerText = "No attachments to display.";
            }

            popup_Appr.Show();
            Popup_ApprovedExp.Show();
        }
    }

    protected void btnVAppCancel_Click(object sender, EventArgs e)
    {
        Popup_ApprovedExp.Show();
        popup_Appr.Show();
    }

    protected void ViewPreviousExp_Appr(object sender, EventArgs e)
    {
        hdnARowIndex.Value = (Convert.ToInt32(hdnARowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnARowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnASeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewApprFields();
        GetViewAppExpItemData(dsExpEditDetails, index);
        //CalculateTotals_Appr();
        if (index == 0)
            btnVAPrev.Visible = false;
        else
            btnVAPrev.Visible = true;
        if (index == gvExp_Appr.Rows.Count - 1)
            btnVANext.Visible = false;
        else
            btnVANext.Visible = true;
    }

    protected void ViewNextExp_Appr(object sender, EventArgs e)
    {
        hdnARowIndex.Value = (Convert.ToInt32(hdnARowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnARowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnASeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewApprFields();
        GetViewAppExpItemData(dsExpEditDetails, index);
        //CalculateTotals_Appr();
        if (index == 0)
            btnVAPrev.Visible = false;
        else
            btnVAPrev.Visible = true;
        if (index == gvExp_Appr.Rows.Count - 1)
            btnVANext.Visible = false;
        else
            btnVANext.Visible = true;
    }

    #endregion

    #region Comments

    protected void Comments_Appr(object sender, EventArgs e)
    {
        var strCmnts = xms.getComments(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataSet dsComments = new DataSet();
        dsComments.Tables.Add(Utility.ConvertToDataTable(lstCmnts));

        string str = "<table width='100%'>";
        for (int i = 0; i < dsComments.Tables[0].Rows.Count; i++)
        {
            str += "<tr><td>" + dsComments.Tables[0].Rows[i]["Comments"] + "</td></tr><tr><td>&nbsp;</td></tr><tr><td style='color:Black;'><small><i>by " + dsComments.Tables[0].Rows[i]["Email"] + " on " + dsComments.Tables[0].Rows[i]["AddedOn"] + "</i></small></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
        }
        str += "</table>";
        widgetComments_Appr.Visible = true;
        widgetComments_Appr.InnerHtml = str;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            popEditPO_Appr.Show();
        else
        {
            CalculateTotals_Appr();
            popup_Appr.Show();
        }
        popup_Comments_Appr.Show();
    }

    protected void btnCommentsClose_Appr_Click(object sender, EventArgs e)
    {
        BindApGrid();
        CalculateTotals_Appr();
        popup_Appr.Show();
        popup_Comments_Appr.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments_Appr(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        Session["SeqIdForAtt"] = hdnSeq.Value;
        AppAttachments(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts_Appr.DataSource = ds;
            gvAttchmnts_Appr.DataBind();
        }
        //dvAtt_Appr.InnerHtml = AppAttachments(Convert.ToInt32(hdnSeq.Value));
        CalculateTotals_Appr();
        popup_Appr.Show();
        popup_Att_Appr.Show();
    }

    private string AppAttachments(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        if (ds.Tables[0].Rows.Count > 0)
            Session["AttchList"] = ds;
        string str1 = string.Empty;
        //for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
        //    str1 += "<a href='downloadFile.aspx?aid=" + ds.Tables[0].Rows[i]["attachmentId"] + "&ext=" + ds.Tables[0].Rows[i]["orgName"] + "'>" + ds.Tables[0].Rows[i]["orgName"] + "</a></br>Added on : " + Convert.ToDateTime(ds.Tables[0].Rows[i]["addedOn"]).ToShortDateString() + "</br>";

        return str1;
    }

    protected void DownLdAttAppr(object sender, EventArgs e)
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
        popup_Att_Appr.Show();
        popup_Appr.Show();
    }

    protected void gvAttchmnts_Appr_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt_Appr = (ImageButton)e.Row.FindControl("imgAttchmnt_Appr");
            //System.Web.UI.WebControls.Image imgAttchmnt = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
            if (extension.ToLower().Contains("pdf"))
                imgAttchmnt_Appr.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                string base64ImageString = ConvertBytesToBase64(bytes);
                imgAttchmnt_Appr.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnAttClose_Appr_Click(object sender, EventArgs e)
    {
        CalculateTotals_Appr();
        popup_Appr.Show();
        popup_Att_Appr.Hide();
    }

    protected void DisplayAPPLineAttachments(object sender, EventArgs e)
    {
        //dvAtt_Appr.InnerHtml = AppAttachments(Convert.ToInt32(hdnASeq1.Value));
        AppAttachments(Convert.ToInt32(hdnASeq1.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmnts_Appr.DataSource = ds;
            gvAttchmnts_Appr.DataBind();
        }
        Popup_ApprovedExp.Show();
        popup_Att_Appr.Show();
    }

    #endregion

    # region ViewApprovedPOLineItems

    double allRowsAmntVal_Appr = 0;

    protected void ddlDepartment_Appr_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["AccountBy"].ToString() == "DEPT")
        {
            Session.Remove("dtExpItem");
            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(true, ddlJobsAppr, ddlDepartment_Appr, ddlExpItem_Appr, ddlDepartment_Appr.SelectedValue);
            else
            {
                var str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlDepartment_Appr.SelectedValue, 2, string.Empty);
                List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
                DataTable dt1 = Utility.ConvertToDataTable(lst);
                Session["dtExpItem"] = dt1;
                ddlExpItem_Appr.DataSource = dt1;
                ddlExpItem_Appr.DataBind();
                ddlExpItem_Appr.Items.Insert(0, "Please Select");
                ddlExpItem_Appr.Items.FindByText("Please Select").Value = "0";
            }
        }

        if (Session["UserDept"] == null)
            GetUserDept();
        if (Session["UserDept"].ToString() != ddlDepartment_Appr.SelectedValue)
            dvCommts_Appr.Visible = true;
        else
            dvCommts_Appr.Visible = false;

        popEditPO_Appr.Show();
        popAddPO_Appr.Show();
    }

    private void BindItemsCode(DropDownList ddl, string expitem)
    {
        DataTable dt = new DataTable();
        dt = (DataTable)Session["dtExpItem"];
        //var str = xms.getItemCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlExpItem_Appr.SelectedValue);
        //List<ItemCodesVO> lst = ser.Deserialize<List<ItemCodesVO>>(str);
        //DataTable dt2 = Utility.ConvertToDataTable(lst);
        string exp = "accName='" + expitem + "'";
        DataView dt1 = new DataView(dt, exp, "accName", DataViewRowState.CurrentRows);
        ddl.DataSource = dt1;
        ddl.DataBind();
        ddl.Items.Insert(0, "Please Select");
        ddl.Items.FindByText("Please Select").Value = "0";
        Session["ItemCodes"] = dt1.ToTable();
    }

    protected void ddlExpItem_Appr_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlExpItem.SelectedValue != "0")
        {
            BindItemsCode(ddlItemCode_Appr, ddlExpItem_Appr.SelectedValue);
            DataTable dt = (DataTable)Session["dtExpItem"];
            string expr = "accName = '" + ddlExpItem_Appr.SelectedValue + "'";
            DataView view = new DataView(dt, expr, "accName", DataViewRowState.CurrentRows);
            txtAccCode_Appr.Text = view.ToTable().Rows[0]["accountCode"].ToString();

            CalOnAccCode_Appr();

            //Calculate Amount/BalAfterPO

            double allRowsAmntVal_Appr = 0;
            foreach (GridViewRow row1 in gvPO_Appr.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
                if (lblPOAccCode.Text == txtAccCode.Text)
                    allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
            }
            hdnPORowTotAmnt.Value = (allRowsAmntVal_Appr - ut.NullSafeDouble(txtAmount_Appr.Text)).ToString();
            Session["allRowsAmntVal_Appr"] = allRowsAmntVal_Appr;
            txtPoAmount.Text = "0";
            txtUnitPrice.Text = "0";
            txtShipCost.Text = "0";
            txtBalAfterPO.Text = (ut.NullSafeDouble(txtRemain_Appr.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal_Appr"]) == 0 ? ut.NullSafeDouble(txtAmount_Appr.Text) : ut.NullSafeDouble(Session["allRowsAmntVal_Appr"]))).ToString();
        }
        popEditPO_Appr.Show();
        popAddPO_Appr.Show();
    }

    protected void ddlItemCode_Appr_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlItemCode_Appr.SelectedValue != "0")
        {
            DataTable dt = (DataTable)Session["ItemCodes"];
            string exp = "ItemCode='" + ddlItemCode_Appr.SelectedValue + "'";
            DataView dvitems = new DataView(dt, exp, "ItemCode", DataViewRowState.CurrentRows);
            DataTable dtemp = dvitems.ToTable();
            txtDescr_Appr.Text = dtemp.Rows[0]["Description"].ToString();
        }
        popEditPO_Appr.Show();
        popAddPO_Appr.Show();
    }

    private void BindPoApprExpenseItems(DropDownList ddl, string dept, int type)
    {
        DataTable dt = new DataTable();
        if (Session["dtExpItem"] == null)
        {
            string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), dept, 2, string.Empty);
            List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
            dt = Utility.ConvertToDataTable(lst);

            //add new column containing account number and account name seperated with --
            if (!dt.Columns.Contains("AcountClss"))
                dt.Columns.Add("AcountClss");

            for (int i = 0; i < dt.Rows.Count; i++)
                dt.Rows[i]["AcountClss"] = dt.Rows[i]["acctLongCode"].ToString() + "--" + dt.Rows[i]["accName"].ToString();
            //add new column containing account number and account name seperated with --

            Session["dtExpItem"] = dt;
        }
        else
            dt = (DataTable)Session["dtExpItem"];
        if (type == 1)
        {
            ddl.DataSource = GetHierarchicalData(dt.DefaultView.ToTable(true, "AcountClss", "accName"), "AcountClss");
            ddl.DataBind();
            ddl.Items.Insert(0, "Please Select");
            ddl.Items.FindByText("Please Select").Value = "0";
        }
    }

    protected void EditPOApprDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("UserDept");
        dvEditPOError_Appr.InnerHtml = string.Empty;
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        Session["RowIndex"] = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];
        Session["Seq1"] = arg[1];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = dtPO.Clone();
        dtPO_Temp.ImportRow(dtPO.Rows[index]);
        Session["dtPO_Temp"] = dtPO_Temp;

        DateTime dateTime = Convert.ToDateTime(txtPOTripStartDate_Appr.Text);
        int year = dateTime.Year;

        if (Session["FiscalDateAppr"] == null)
            MonthFilter_Appr(year);

        foreach (GridViewRow row1 in gvPO_Appr.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal_Appr += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal_Appr - ut.NullSafeDouble(txtAmount_Appr.Text)).ToString();
        Session["allRowsAmntVal_Appr"] = allRowsAmntVal_Appr;
        btnSavePO_Appr.Visible = true;
        GetPOApprLineItemData(dtPO, index);
        lbPOlHeading_App.Text = "Edit PO Details";
        ToggleFields_Appr(true);
        btnSavePO_Appr.Attributes.Add("onclick", "javascript:return ValidateApprovalsEditPO('" + ddlExpItem_Appr.ClientID + "', '" + txtDescr_Appr.ClientID + "','" + dvCommts_Appr.ClientID + "''" + txtcommnt_Appr.ClientID + "','" + txtQuantity_Appr.ClientID + "','" + txtunitPrice_Appr.ClientID + "','" + txtShipCost_Appr.ClientID + "','" + txtPckUnit_Appr.ClientID + "','" + dvEditPOError_Appr.ClientID + "');");
    }

    protected void ViewPOApprDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        dvEditPOError_Appr.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        dtPO = (DataTable)Session["dtPO"];

        DateTime dateTime = Convert.ToDateTime(txtPOTripStartDate_Appr.Text);
        int year = dateTime.Year;

        if (Session["FiscalDateAppr"] == null)
            MonthFilter_Appr(year);

        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal_Appr += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal_Appr - ut.NullSafeDouble(txtAmount_Appr.Text)).ToString();
        Session["allRowsAmntVal_Appr"] = allRowsAmntVal_Appr;

        GetPOApprLineItemData(dtPO, index);
        lbPOlHeading_App.Text = "View PO Details";
        btnSavePO_Appr.Visible = false;
        ToggleFields_Appr(false);
    }

    private void ToggleFields_Appr(bool check)
    {
        ddlExpItem_Appr.Enabled = check;
        txtAccCode_Appr.Enabled = check;
        txtQuantity_Appr.Enabled = check;
        txtPckUnit_Appr.Enabled = check;
        txtunitPrice_Appr.Enabled = check;
        txtAmount_Appr.Enabled = check;
        txtDescr_Appr.Enabled = check;
        txtShipCost_Appr.Enabled = check;
        txtTax_Appr.Enabled = check;
        txtTaxPercent_Appr.Enabled = check;
        ddlDepartment_Appr.Enabled = check;
        ddlItemCode_Appr.Enabled = check;
        txtcommnt_Appr.Enabled = check;
        txtVendPtNo_Appr.Enabled = check;
        txtReqDelDateAppr.Enabled = check;
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
        }
    }

    protected void gvPO_Appr_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkItemCode = (LinkButton)e.Row.FindControl("lnkItemCode");
            Label lblItemCode = (Label)e.Row.FindControl("lblItemCode");
            HiddenField hdnItemNote = (HiddenField)e.Row.FindControl("hdnItemNote");
            HiddenField hdnRowStatusID = (HiddenField)e.Row.FindControl("hdnRowStatusID");
            Label lblPOColor = (Label)e.Row.FindControl("lblPOColor");
            if (hdnRowStatusID.Value == "11")
            {
                lblPOColor.Style.Add("background-image", "url(images/icons/cancelInvicon.png)");
                lblPOColor.ToolTip = "Cancelled";
            }
            else if (hdnRowStatusID.Value == "15")
            {
                lblPOColor.Style.Add("background-image", "url(images/icons/aprRecvBtn.png)");
                lblPOColor.ToolTip = "Approved and Received";
            }
            else
            {
                lblPOColor.Style.Add(" background-image", "url(images/icons/openDoorIcon.png)");
                lblPOColor.ToolTip = "Approved";
            }

            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }
            else
            {
                if (txtBalAfterPO.Text.Contains("-"))
                {
                    e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                    e.Row.Style["background-color"] = "#FFCCCC";
                }
            }

            HiddenField hdnInvCnt = (HiddenField)e.Row.FindControl("hdnInvCnt");
            LinkButton lnkInvGen = (LinkButton)e.Row.FindControl("lnkInvGen");
            Label lblInvColor = (Label)e.Row.FindControl("lblInvColor");
            if (ut.NullSafeInteger(hdnInvCnt.Value) > 0)
                lnkInvGen.Visible = true;
            else
                lnkInvGen.Visible = false;
            if (hdnItemNote.Value == string.Empty)
            {
                lblItemCode.Visible = true;
                lnkItemCode.Visible = false;
            }
            else
            {
                lblItemCode.Visible = false;
                lnkItemCode.Visible = true;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void GetPOApprLineItemData(DataTable dt, int index)
    {
        Session.Remove("dtExpItem");
        if (ddlJobsAppr.SelectedValue != "0")
            LoadDetailsByJob(false, ddlJobsAppr, ddlDepartment_Appr, ddlExpItem_Appr, dt.Rows[index]["deptCode"].ToString());
        else
        {
            BindDepartments(ddlDepartment_Appr, 1);
            ddlDepartment_Appr.SelectedValue = dt.Rows[index]["deptCode"].ToString();
            BindPoApprExpenseItems(ddlExpItem_Appr, ddlDepartment_Appr.SelectedValue, 1);
        }
        ddlExpItem_Appr.SelectedValue = dt.Rows[index]["expItem"].ToString();
        BindItemsCode(ddlItemCode_Appr, ddlExpItem_Appr.SelectedValue);
        try
        {
            ddlItemCode_Appr.SelectedValue = dt.Rows[index]["ItemCode"].ToString();
        }
        catch
        {
            ddlItemCode_Appr.SelectedValue = "0";
        }
        txtcommnt_Appr.Text = dt.Rows[index]["DeptChgCmt"].ToString();
        txtQuantity_Appr.Text = dt.Rows[index]["quantity"].ToString();
        txtPckUnit_Appr.Text = dt.Rows[index]["packageUnit"].ToString();
        txtunitPrice_Appr.Text = dt.Rows[index]["unitPrice"].ToString();
        txtAmount_Appr.Text = dt.Rows[index]["PreAmount"].ToString();
        txtDescr_Appr.Text = dt.Rows[index]["comments"].ToString();
        txtShipCost_Appr.Text = (ut.NullSafeDouble(dt.Rows[index]["shippingCost"])).ToString();
        chkCalTax_Appr.Checked = dt.Rows[index]["taxCalCulated"].ToString() == "1" ? true : false;
        txtVendPtNo_Appr.Text = dt.Rows[index]["vendpartno"].ToString();
        txtReqDelDateAppr.Text = dt.Rows[index]["reqDeliveryDate"].ToString();
        txtTaxPercent_Appr.Text = chkCalTax.Checked == true ? dt.Rows[index]["TaxPercent"].ToString() : Session["Tax"].ToString();
        hdnTax.Value = txtTaxPercent_Appr.Text;

        string expr = "expItem = '" + ddlExpItem_Appr.SelectedValue + "'";
        DataView view = new DataView(dt, expr, "expItem", DataViewRowState.CurrentRows);
        txtAccCode_Appr.Text = view.ToTable().Rows[0]["accountCode"].ToString();
        double x = 0;
        x = ((ut.NullSafeDouble(txtunitPrice_Appr.Text) * ut.NullSafeDouble(txtQuantity_Appr.Text)) * ((ut.NullSafeDouble(dt.Rows[index]["taxPercent"].ToString())) / 100));
        txtTax_Appr.Text = chkCalTax_Appr.Checked == true ? (x.ToString() != "0" ? x.ToString("#.##") : x.ToString()) : "0.00";

        CalOnAccCode_Appr();
        txtBalAfterPO_Appr.Text = (ut.NullSafeDouble(txtRemain_Appr.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain_Appr.Text)) - (ut.NullSafeDouble(allRowsAmntVal_Appr))).ToString("#.##");

        popEditPO_Appr.Show();
        popAddPO_Appr.Show();
    }

    private void GetUserDept()
    {
        DataSet dataUsers = new DataSet();
        var AccntDetails = xms.getUserDetailsForMyAcc(Convert.ToInt32(Session["User_Req"]));
        List<UserVO> users = ser.Deserialize<List<UserVO>>(AccntDetails);
        dataUsers.Tables.Add(Utility.ConvertToDataTable(users));
        Session["UserDept"] = dataUsers.Tables[0].Rows[0]["DepartmentCode"].ToString();
    }

    protected void btnSavePO_Appr_Click(object sender, EventArgs e)
    {
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCode_Appr.Text)
                allRowsAmntVal_Appr += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmnt.Value = (allRowsAmntVal_Appr - ut.NullSafeDouble(txtAmount_Appr.Text)).ToString();

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
            dtPO.Columns.Add("balanceAfterpo");
            dtPO.Columns.Add("shippingCost");
            dtPO.Columns.Add("taxCalCulated");
            dtPO.Columns.Add("vendpartno");
            dtPO.Columns.Add("TaxPercent");
            dtPO.Columns.Add("ItemCode");
            dtPO.Columns.Add("MgrGroupCode");
            dtPO.Columns.Add("DeptCode");
            dtPO.Columns.Add("DeptChgCmt");
            dtPO.Columns.Add("reqDeliveryDate");
        }
        else
            dtPO = (DataTable)Session["dtPO"];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = (DataTable)Session["dtPO_Temp"];

        double taxPercent = chkCalTax_Appr.Checked == true ? (ut.NullSafeDouble(txtTaxPercent_Appr.Text == string.Empty ? "0" : txtTaxPercent_Appr.Text)) : 0;
        double chkTax = chkCalTax_Appr.Checked == true ? ((ut.NullSafeDouble(taxPercent)) / 100) : 0;
        double tax = ut.NullSafeDouble(((ut.NullSafeDouble(txtunitPrice_Appr.Text) * ut.NullSafeDouble(txtQuantity_Appr.Text)) * chkTax).ToString("#.##"));
        double POamnt = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantity_Appr.Text)) * (ut.NullSafeDouble(txtunitPrice_Appr.Text))) + (ut.NullSafeDouble(tax))) + ut.NullSafeDouble(txtShipCost_Appr.Text)).ToString("#.##"));

        int edPOFlag = 0;
        if (ddlExpItem_Appr.SelectedValue != dtPO_Temp.Rows[0]["expItem"].ToString())
            edPOFlag = 1;
        else if (txtAccCode_Appr.Text != dtPO_Temp.Rows[0]["accountCode"].ToString())
            edPOFlag = 1;
        else if (txtQuantity_Appr.Text != dtPO_Temp.Rows[0]["quantity"].ToString())
            edPOFlag = 1;
        else if (txtPckUnit_Appr.Text != dtPO_Temp.Rows[0]["packageUnit"].ToString())
            edPOFlag = 1;
        else if (txtunitPrice_Appr.Text != dtPO_Temp.Rows[0]["unitPrice"].ToString())
            edPOFlag = 1;
        else if (txtAmount_Appr.Text != dtPO_Temp.Rows[0]["PreAmount"].ToString())
            edPOFlag = 1;
        else if (txtDescr_Appr.Text != dtPO_Temp.Rows[0]["comments"].ToString())
            edPOFlag = 1;
        else if (txtShipCost_Appr.Text != dtPO_Temp.Rows[0]["shippingCost"].ToString())
            edPOFlag = 1;
        else if (txtVendPtNo_Appr.Text != dtPO_Temp.Rows[0]["vendpartno"].ToString())
            edPOFlag = 1;
        else if (txtReqDelDateAppr.Text != dtPO_Temp.Rows[0]["reqDeliveryDate"].ToString())
            edPOFlag = 1;
        else if (chkCalTax_Appr.Checked != Convert.ToBoolean(dtPO_Temp.Rows[0]["taxCalCulated"]))
            edPOFlag = 1;
        if (edPOFlag == 1)
        {
            int row = Convert.ToInt32(Session["RowIndex"]);
            ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();

            expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
            expensedetails.expLineNo = Convert.ToInt32(Session["Seq1"]);
            expensedetails.expItem = ddlExpItem_Appr.SelectedValue;
            expensedetails.quantity = ut.NullSafeDouble(txtQuantity_Appr.Text);
            expensedetails.packageUnit = txtPckUnit_Appr.Text;
            expensedetails.unitPrice = ut.NullSafeDouble(txtunitPrice_Appr.Text);
            expensedetails.actualAmount = 0;
            expensedetails.comments = txtDescr_Appr.Text;
            expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expensedetails.compCode = Session["CompCode"].ToString();
            expensedetails.expDate = string.Empty;
            expensedetails.citiesVstd = string.Empty;
            expensedetails.othercity = string.Empty;
            expensedetails.expType = string.Empty;
            expensedetails.payMode = string.Empty;
            expensedetails.jobCode = string.Empty;
            expensedetails.phaseCode = string.Empty;
            expensedetails.JCatCode = string.Empty;
            expensedetails.preAmount = POamnt;
            expensedetails.status = "Saved";
            expensedetails.statusId = 3;
            expensedetails.stateId = string.Empty;
            expensedetails.startDate = txtPOTripStartDate_Appr.Text;
            expensedetails.amtSpent = 0;
            expensedetails.purpose = string.Empty;
            expensedetails.agentName = string.Empty;
            expensedetails.bookedDate = string.Empty;
            expensedetails.detailsFlag = 1;
            expensedetails.masterFlag = 0;
            expensedetails.automileageFlag = 0;
            expensedetails.fromCity = string.Empty;
            expensedetails.otherFromCity = string.Empty;
            expensedetails.toCity = string.Empty;
            expensedetails.otherToCity = string.Empty;
            expensedetails.preferredVendor = ddlPreVendor_Appr.SelectedItem.Text;
            expensedetails.itinararyNo = string.Empty;
            expensedetails.fromDate = string.Empty;
            expensedetails.toDate = string.Empty;
            expensedetails.currency = string.Empty;
            expensedetails.exp = string.Empty;
            expensedetails.accountCode = txtAccCode_Appr.Text;
            expensedetails.codeId = string.Empty;
            expensedetails.codeValue = string.Empty;
            expensedetails.managerEmail = string.Empty;
            expensedetails.managerId = Convert.ToInt32(ddlPOMgrEmail_Appr.SelectedValue);
            expensedetails.LNorm = 0;
            expensedetails.totTrip = 0;
            expensedetails.reimbt = 0;
            expensedetails.userId = Convert.ToInt32(Session["UserID"]);
            expensedetails.preApproved = 2;
            expensedetails.companyCar = string.Empty;
            expensedetails.otherPlace = string.Empty;
            expensedetails.outOfCity = false;
            expensedetails.shippingCost = ut.NullSafeDouble(txtShipCost_Appr.Text);
            expensedetails.taxPercent = taxPercent;
            //expensedetails.balAfterPO = ut.NullSafeDouble((ut.NullSafeDouble(txtRemain.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain.Text)) - (ut.NullSafeDouble(allRowsAmntVal) + ut.NullSafeDouble(POamnt))).ToString("#.##"));
            expensedetails.balAfterPO = ut.NullSafeDouble(ut.NullSafeDouble(txtRemain_Appr.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain_Appr.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt.Value) + ut.NullSafeDouble(POamnt)));
            expensedetails.taxAmount1 = tax;
            expensedetails.taxAmount2 = 0;
            expensedetails.taxAmount3 = 0;
            expensedetails.reimbursable = string.Empty;
            expensedetails.taxCalculated = chkCalTax_Appr.Checked == true ? 1 : 0;
            expensedetails.vendPartno = txtVendPtNo_Appr.Text;
            expensedetails.polineseq = 0;
            expensedetails.csuserid = 0;
            //Modified Today
            DataTable dt = (DataTable)Session["dtPO"];
            expensedetails.mgrGroupCode = dt.Rows[0]["mgrGroupCode"].ToString();
            expensedetails.itemCode = ddlItemCode_Appr.SelectedValue == "0" ? string.Empty : ddlItemCode_Appr.SelectedValue;
            expensedetails.deptChgCmt = txtcommnt_Appr.Text == string.Empty ? " " : txtcommnt_Appr.Text;
            expensedetails.deptCode = ddlDepartment_Appr.SelectedValue;
            expensedetails.reqDeliveryDate = txtReqDelDateAppr.Text;
            expensedetails.onBeHalfOf = string.Empty;
            expensedetails.lastUpdSource = "Web";
            expensedetails.qbAcctId = 0;
            expensedetails.qbVendId = 0;
            expensedetails.className = string.Empty;
            expensedetails.classRefId = string.Empty;
            expensedetails.sendtoqb = string.Empty;
            expensedetails.priceFlag = string.Empty;

            string retStr = xms.addExpense(expensedetails);

            if (retStr.ToLower().Contains("fail"))
            {
                dvEditPOError_Appr.Style["color"] = "Red";
                dvEditPOError_Appr.InnerHtml = retStr;
                popAddPO_Appr.Show();
            }
            else if (retStr.ToLower().Contains("succes"))
            {
                Div15.Style["color"] = "Green";
                Div15.InnerHtml = retStr;
                dtPO.Rows[row]["expItem"] = ddlExpItem_Appr.SelectedValue;
                dtPO.Rows[row]["accountCode"] = txtAccCode_Appr.Text;
                dtPO.Rows[row]["quantity"] = Convert.ToDouble(txtQuantity_Appr.Text);
                dtPO.Rows[row]["packageUnit"] = txtPckUnit_Appr.Text;
                dtPO.Rows[row]["unitPrice"] = txtunitPrice_Appr.Text;
                double taxPercent1 = chkCalTax_Appr.Checked == true ? (ut.NullSafeDouble(txtTaxPercent_Appr.Text == string.Empty ? "0" : txtTaxPercent_Appr.Text)) : 0;
                dtPO.Rows[row]["TaxPercent"] = taxPercent1;
                double chkTax1 = chkCalTax_Appr.Checked == true ? ((ut.NullSafeDouble(taxPercent1)) / 100) : 0;
                double tax1 = (ut.NullSafeDouble(txtunitPrice_Appr.Text) * ut.NullSafeDouble(txtQuantity_Appr.Text)) * chkTax1;
                double POamnt1 = (((ut.NullSafeDouble(txtQuantity_Appr.Text)) * (ut.NullSafeDouble(txtunitPrice_Appr.Text))) + (ut.NullSafeDouble(tax1))) + ut.NullSafeDouble(txtShipCost_Appr.Text);
                dtPO.Rows[row]["PreAmount"] = POamnt1;
                dtPO.Rows[row]["comments"] = txtDescr.Text;
                dtPO.Rows[row]["balAfterpo"] = ut.NullSafeDouble(ut.NullSafeDouble(txtRemain_Appr.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain_Appr.Text)) - (ut.NullSafeDouble(hdnPORowTotAmnt.Value) + ut.NullSafeDouble(POamnt1)));
                Session["balAfterPO"] = dtPO.Rows[row]["balAfterpo"];
                dtPO.Rows[row]["taxCalCulated"] = chkCalTax_Appr.Checked;
                dtPO.Rows[row]["vendpartno"] = txtVendPtNo_Appr.Text;
                hdnTax.Value = chkCalTax_Appr.Checked == true ? taxPercent1.ToString() : Session["Tax"].ToString();
                //Modified Today
                DataTable dt1 = (DataTable)Session["dtPO"];
                dtPO.Rows[row]["MgrGroupCode"] = dt1.Rows[0]["mgrGroupCode"].ToString();
                dtPO.Rows[row]["DeptCode"] = ddlDepartment_Appr.SelectedValue;
                dtPO.Rows[row]["DeptChgCmt"] = txtcommnt_Appr.Text == string.Empty ? " " : txtcommnt_Appr.Text;
                dtPO.Rows[row]["ItemCode"] = ddlItemCode_Appr.SelectedValue == "0" ? string.Empty : ddlItemCode_Appr.SelectedValue;
                dtPO.Rows[row]["reqDeliveryDate"] = txtReqDelDateAppr.Text;
                popAddPO_Appr.Hide();
            }
        }
        else
        {
            dvEditPOError_Appr.InnerHtml = "No changes to Update";
            popAddPO_Appr.Show();
        }
        dtPO.AcceptChanges();
        foreach (GridViewRow row1 in gvPO.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == txtAccCode_Appr.Text)
                dtPO.Rows[row1.RowIndex]["balAfterpo"] = Session["balAfterPO"].ToString();
        }
        Session.Remove("dtPO");
        LoadApprEditPOData(null);

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp1 = dtPO.Clone();
        dtPO_Temp1.ImportRow(dtPO.Rows[ut.NullSafeInteger(hdnRowIndex.Value)]);
        Session["dtPO_Temp"] = dtPO_Temp1;

        GetPOApprLineItemData(dtPO_Temp1, 0);

        btnSavePO_Appr.Visible = true;
        popEditPO_Appr.Show();
    }

    private void CalOnAccCode_Appr()
    {
        DataSet dataUsers = new DataSet();
        if (Session["UserDept"] == null)
            GetUserDept();

        DateTime dateTime = Convert.ToDateTime(txtPOTripStartDate_Appr.Text);
        int year = dateTime.Year;

        if (hdnYear_Appr.Value != year.ToString())
            MonthFilter_Appr(year);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDateAppr"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStartDate_Appr.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStartDate_Appr.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth_Appr = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }

            else
                dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtAccCode_Appr.Text;
        budget.compCode = Session["CompCOde"].ToString();
        //budget.deptCode = Session["UserDept"].ToString();
        budget.deptCode = ddlDepartment_Appr.SelectedValue;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth_Appr;


        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

        string expression = "accountCode ='" + txtAccCode_Appr.Text + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        txtBudget_Appr.Text = dtAcccode.Rows[0]["budget"].ToString();
        txtCurrBal_appr.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
        txtRemain_Appr.Text = dtAcccode.Rows[0]["remaining"].ToString();
        popEditPO_Appr.Show();
        //txtBalAfterPO_Appr.Text = txtRemain_Appr.Text;
    }

    private string MonthFilter_Appr(int year)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDateAppr"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(txtPOTripStartDate_Appr.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStartDate_Appr.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth_Appr = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth_Appr;
    }

    protected void DisplayItemNotesAppr(object sender, CommandEventArgs e)
    {
        string[] arr = e.CommandArgument.ToString().Split(';');
        string itemNotes = arr[1];
        string itemCode = arr[0];
        lblItemNotesAppr.Text = itemNotes;
        lblDispItemCodeAppr.Text = itemCode;
        popEditPO_Appr.Show();
        popItemNotesAppr.Show();
    }

    #endregion

    #region Calculate Budget

    private void GetViewBudgetDataAppr(string accCode)
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate_Appr.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDate_Appr.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtTripStartDate_Appr.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate_Appr.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
            else
                dvError_Appr.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        ////Fetch budget details by selected classification
        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtVAAccCode.Text;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = Session["DepartmentCode"].ToString();
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string expression = "accountCode = '" + accCode + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        if (dtAcccode.Rows.Count > 0)
        {
            txtVExpBudgAppr.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtVExpCurrBalAppr.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtVExpRemBudgAppr.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp_Appr.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                string strAccCode = txtVAAccCode.Text.Split('-')[0];
                if (hdnAccCode.Value == strAccCode)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnVExpRowTotAmntAppr.Value = (allRowsAmntVal - ut.NullSafeDouble(lblVAActAmt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtVExpBalAfterAppr.Text = (ut.NullSafeDouble(txtVExpRemBudgAppr.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(lblVAActAmt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFieldsAppr()
    {
        txtVExpBalAfterAppr.Attributes.Add("readonly", "readonly");
        txtVExpCurrBalAppr.Attributes.Add("readonly", "readonly");
        txtVExpRemBudgAppr.Attributes.Add("readonly", "readonly");
        txtVExpBudgAppr.Attributes.Add("readonly", "readonly");
    }

    #endregion

    #region PO Attachments

    protected void btnAttachPOAppr_Click(object sender, EventArgs e)
    {
        if (Session["AttchList"] == null)
            Attachments(0);
        ds = (DataSet)Session["AttchList"];
        gvAttchmntsPOAppr.DataSource = ds;
        gvAttchmntsPOAppr.DataBind();
        popEditPO_Appr.Show();
        popup_AttPOAppr.Show();
    }

    protected void gvAttchmntsPOAppr_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmntPO");
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

    protected void DownLdAttPOAppr(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgNamePO");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgNamePO");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup_AttPOAppr.Show();
        popEditPO_Appr.Show();
    }

    #endregion

    #region Advanced Search

    private DataTable GetAdvSearchedData()
    {
        DataSet ds = new DataSet();
        if (ddlType.SelectedValue == "ER")
            ds = (DataSet)Session["dsSt_App"];
        else if (ddlType.SelectedValue == "PA")
            ds = (DataSet)Session["dsSt_App_pre"];
        else if (ddlType.SelectedValue == "PO")
            ds = (DataSet)Session["dsSt_App_po"];

        string expr = string.Empty;
        string amountField = string.Empty;
        if (ddlType.SelectedValue == "ER")
            amountField = "ActualAmount";
        else
            amountField = "PreAmount";

        if (!string.IsNullOrEmpty(txtFrmDtAdvSearchAppr.Text))
            expr = "StartDate >= #" + txtFrmDtAdvSearchAppr.Text + "# AND StartDate <= #" + txtToDtAdvSearchAppr.Text + "#";
        if (!string.IsNullOrEmpty(txtAmntSearchAdvSearchAppr.Text))
        {
            if (string.IsNullOrEmpty(expr))
                expr = amountField + ddlAmntSearchAdvSearchAppr.SelectedValue + " " + txtAmntSearchAdvSearchAppr.Text;
            else
                expr += " AND " + amountField + ddlAmntSearchAdvSearchAppr.SelectedValue + " " + txtAmntSearchAdvSearchAppr.Text;
        }
        if (!string.IsNullOrEmpty(expr))
        {
            DataView dv = new DataView(ds.Tables[0], expr, "RequestID", DataViewRowState.CurrentRows);
            return dv.ToTable();
        }
        else
            return ds.Tables[0];
    }

    protected void btnAdvSearchAppr_Click(object sender, EventArgs e)
    {
        btnSendToVendNo.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
        gvApproved.DataSource = GetAdvSearchedData();
        gvApproved.DataBind();
        updApproved.Update();
    }

    protected void lnkClearSearch_Click(object sender, EventArgs e)
    {
        //clear search fields
        btnSendToVendNo.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
        txtFrmDtAdvSearchAppr.Text = txtToDtAdvSearchAppr.Text = txtAmntSearchAdvSearchAppr.Text = string.Empty;
        ddlAmntSearchAdvSearchAppr.SelectedValue = "=";
        //clear search fields

        //bind gridview with data fetched
        DataSet ds = new DataSet();
        if (ddlType.SelectedValue == "ER")
            ds = (DataSet)Session["dsSt_App"];
        else if (ddlType.SelectedValue == "PA")
            ds = (DataSet)Session["dsSt_App_pre"];
        else if (ddlType.SelectedValue == "PO")
            ds = (DataSet)Session["dsSt_App_po"];
        gvApproved.DataSource = ds;
        gvApproved.DataBind();
        updApproved.Update();
        //bind gridview with data fetched
    }

    #endregion

    #endregion

    #region Rejected Requests

    protected void SortExpressionRej(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
            Session["Control_ApExpRej"] = lnk.ID;
        else if (ddlTypeVar == 1)
            Session["Control_ApPreRej"] = lnk.ID;
        else if (ddlTypeVar == 2)
            Session["Control_ApPoRej"] = lnk.ID;
        if (ddlTypeVar == 0)
        {
            if (Session["SortDir_ApExpRej"] == null || Session["SortDir_ApExpRej"].ToString() == "Desc")
                Session["SortDir_ApExpRej"] = "Asc";
            else
                Session["SortDir_ApExp"] = "Desc";
        }
        else if (ddlTypeVar == 1)
        {
            if (Session["SortDir_ApPreRej"] == null || Session["SortDir_ApPreRej"].ToString() == "Desc")
                Session["SortDir_ApPreRej"] = "Asc";
            else
                Session["SortDir_ApPreRej"] = "Desc";
        }
        else if (ddlTypeVar == 2)
        {
            if (Session["SortDir_ApPoRej"] == null || Session["SortDir_ApPoRej"].ToString() == "Desc")
                Session["SortDir_ApPoRej"] = "Asc";
            else
                Session["SortDir_ApPoRej"] = "Desc";
        }

        if (ddlTypeVar == 0)
            Session["SortExpr_ApExpRej"] = e.CommandArgument;
        else if (ddlTypeVar == 1)
            Session["SortExpr_ApPreRej"] = e.CommandArgument;
        else if (ddlTypeVar == 2)
            Session["SortExpr_ApPoRej"] = e.CommandArgument;

        if (ddlTypeVar == 0)
            BindApRejGrid();
        else if (ddlTypeVar == 1)
            BindRej_APGrid_Pre();
        else
            BindRej_APGrid_PO();

    }

    protected void gvRejected_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //HiddenField hdnPreApproved = (HiddenField)e.Row.FindControl("hdnPreApproved");
            //Label lblType = (Label)e.Row.FindControl("lblType");
            //if (hdnPreApproved.Value == "0")
            //    lblType.Text = "Expense";iran
            //else if (hdnPreApproved.Value == "1")
            //    lblType.Text = "PreApproval";
            //else
            //    lblType.Text = "PO";

            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            Label lblPAmnt = (Label)e.Row.FindControl("lblPAmnt");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            LinkButton lnkReqAllocated = (LinkButton)e.Row.FindControl("lnkReqAllocated");

            lnkReqAllocated.Text = "Unallocated";
            if (ddlTypeVar == 2)
            {
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "preferredVendor").ToString();
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
            }
            else
            {
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
            }

            int x = 0;
            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");

            if (hdnLmtExceeded.Value.ToLower() == "y" && hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit and one of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "One of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnLmtExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit.";
            }
            if (x > 0)
                e.Row.Style["background-color"] = "#FFCCCC";

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkPreAmount = (LinkButton)e.Row.FindControl("lnkPreAmount");
            LinkButton lnkAmount = (LinkButton)e.Row.FindControl("lnkAmount");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            if (ddlTypeVar == 2)
            {
                lnkPreAmount.Text = "Vendor";
                lnkPreAmount.CommandArgument = "PreferredVendor";
                lnkAmount.Text = "PoAmount";
                lnkAmount.CommandArgument = "PreAmount";
                lnkRequestID.Text = "PONo";
                lnkRequestID.CommandArgument = "OurRefNo";
            }
            else
            {
                lnkPreAmount.Text = "PreAmount";
                lnkPreAmount.CommandArgument = "PreAmount";
                lnkAmount.Text = "ActualAmount";
                lnkAmount.CommandArgument = "ActualAmount";
                lnkRequestID.Text = "RequestId";
                lnkRequestID.CommandArgument = "RequestId";
            }

            if (ddlTypeVar == 0)
            {
                if (Session["SortDir_ApExpRej"] != null && Session["Control_ApExpRej"] != null)
                {

                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApExpRej"].ToString());
                    if (Session["SortDir_ApExpRej"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 1)
            {
                if (Session["SortDir_ApPreRej"] != null && Session["Control_ApPreRej"] != null)
                {

                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPreRej"].ToString());
                    if (Session["SortDir_ApPreRej"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
            else if (ddlTypeVar == 2)
            {
                if (Session["SortExpr_ApPoRej"] != null && Session["Control_ApPoRej"] != null)
                {

                    LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ApPoRej"].ToString());
                    if (Session["SortExpr_ApPoRej"].ToString() == "Asc")
                        sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                    else
                        sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
                }
            }
        }
    }

    #region Edit Expense

    protected void Edit_Rej(object sender, EventArgs e)
    {
        Session.Remove("ReqID");
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnPreApproved = new HiddenField();
        if (sender != null)
        {
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            Session["Type"] = hdnPreApproved.Value;
        }
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            LoadRejEditPOData(sender);
        else
            LoadRejEditData(sender);
    }

    private void LoadRejEditData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnOnBehalfOf = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnOnBehalfOf = (HiddenField)row.Cells[0].FindControl("hdnOnBehalfOf");
        }
        else
        {
            foreach (GridViewRow row1 in gvRejected.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnOnBehalfOf = (HiddenField)row1.FindControl("hdnOnBehalfOf");
                    break;
                }
            }
        }

        Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlManagerEmail_Rej.DataSource = dtManager;
        ddlManagerEmail_Rej.DataBind();

        txtPurpose_Rej.Text = hdnPurpose.Value.ToString();
        txtTripStartDate_Rej.Text = hdnStartDate.Value.ToString();
        txtOnBehalfOfRej.Text = hdnOnBehalfOf.Value;
        txtPurpose_Rej.ReadOnly = txtTripStartDate_Rej.ReadOnly = txtOnBehalfOfRej.ReadOnly = true;

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dt = dsExp.Tables[0];
            Session["dt"] = dt;
            GetData_Rej();
        }

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
            showComments();
        else
            dvRejectedComments1.Visible = false;

        //if (cmnts > 0)
        //{
        //    lnkCmnt_Rej.Enabled = true;
        //    lnkCmnt_Rej.Style["text-decoration"] = "none";
        //    lnkCmnt_Rej.CssClass = "button button-blue";
        //    lnkCmnt_Rej.ToolTip = "Click to view comments";
        //}
        //else
        //{
        //    lnkCmnt_Rej.Enabled = false;
        //    lnkCmnt_Rej.Style["text-decoration"] = "none";
        //    lnkCmnt_Rej.CssClass = "button button-gray";
        //    lnkCmnt_Rej.ToolTip = "No comments for this expense";
        //}

        //Calculate totals
        expTotal = 0; grandTotal = 0; preExpTotal = 0;

        foreach (GridViewRow row1 in gvExp_Rej.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblRGrandTotalAmnt.Text = grandTotal.ToString();
        Session["AmountToExp"] = lblRGrandTotalAmnt.Text;
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblRGrandTotal.Style["color"] = lblRGrandTotalAmnt.Style["color"] = "Red";
            lblRGrandTotal.ToolTip = lblRGrandTotalAmnt.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblRGrandTotal.Style["color"] = lblRGrandTotalAmnt.Style["color"] = "Green";
            lblRGrandTotal.ToolTip = lblRGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }

        //try
        //{
        //Printing PO Begin
        //string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["Email"].ToString());
        ////hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //btnPrintPO_Rej.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //Printing PO End
        //}
        //catch (Exception ex) { }
        popup_Rej.Show();
    }

    private void GetData_Rej()
    {
        gvExp_Rej.DataSource = dt;
        gvExp_Rej.DataBind();
    }

    protected void gvExp_Rej_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            if (hdnSeq != null)
            {
                LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
                if (Convert.ToInt32(hdnAttCnt.Value) > 0)
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }

            Label lblCity = (Label)e.Row.FindControl("lblCity");
            if (lblCity != null && lblCity.Text == "Other")
                lblCity.Visible = false;

            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            //DataSet dsCodes = new DataSet();
            //DataTable dtCodes = new DataTable();
            //DataTable dt = new DataTable();
            //DataView view;
            //if (Session["dsCodes"] != null)
            //{
            //    dtCodes = (DataTable)Session["dsCodes"];
            //    string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //    view = new DataView(dtCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //    dt = view.ToTable();
            //}
            //else
            //{
            //    string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
            //    List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
            //    dsCodes.Tables.Add(Utility.ConvertToDataTable(lstExp));
            //    dt = dsCodes.Tables[0];
            //}
            //string lmt = dt.Rows[0]["CodeValue2"].ToString();
            //if (ut.NullSafeDouble(lblActAmnt.Text) == 0)
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblPreAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}
            //else
            //{
            //    if (ut.NullSafeDouble(lmt) < ut.NullSafeDouble(lblActAmnt.Text))
            //    {
            //        e.Row.Style["background-color"] = "#FFCCCC";
            //        e.Row.ToolTip = "This Expenseitem has exceeded max limit.";
            //    }
            //}
            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
            {
                lblExpDate.Text = lblFromDate.Text;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void GetShippingAddressRej()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            lblShipAddrRej.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipCompNameRej.Text = dv.ToTable().Rows[0]["CompName"].ToString();
            lblShipAddr1Rej.Text = dv.ToTable().Rows[0]["Address1"].ToString();
            lblShipAddr2Rej.Text = dv.ToTable().Rows[0]["Address2"].ToString();
            lblShipCityRej.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipStateRej.Text = dv.ToTable().Rows[0]["State"].ToString();
            lblShipCountryRej.Text = dv.ToTable().Rows[0]["CountryCode"].ToString();
            lblShipZipCodeRej.Text = dv.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void GetBillingAddressRej()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        DataView dvBillComp = new DataView(dsCompCode.Tables[0], "CompCode = '" + dv.ToTable().Rows[0]["billToCompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dvBillComp.ToTable().Rows.Count > 0)
        {
            lblBillAddrRej.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillCompNameRej.Text = dvBillComp.ToTable().Rows[0]["CompName"].ToString();
            lblBillAddr1Rej.Text = dvBillComp.ToTable().Rows[0]["Address1"].ToString();
            lblBillAddr2Rej.Text = dvBillComp.ToTable().Rows[0]["Address2"].ToString();
            lblBillCityRej.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillStateRej.Text = dvBillComp.ToTable().Rows[0]["State"].ToString();
            lblBillCountryRej.Text = dvBillComp.ToTable().Rows[0]["CountryCode"].ToString();
            lblBillZipCodeRej.Text = dvBillComp.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void CalculateTotals_Rej()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;// autoTotal = 0;

        foreach (GridViewRow row1 in gvExp_Rej.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);

            //HiddenField hdnAmount = (HiddenField)row1.FindControl("hdnAmount");
            //autoTotal = Convert.ToDouble(hdnAmount.Value);
        }

        grandTotal = expTotal + preExpTotal;// + autoTotal

        //if (autoTotal == 0)
        //    lbtnAuto_Rej.Visible = false;
        //else
        //    lbtnAuto_Rej.Visible = true;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;// +autoTotal;

        lblRGrandTotalAmnt.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblRGrandTotal.Style["color"] = lblRGrandTotalAmnt.Style["color"] = "Red";
            lblRGrandTotal.ToolTip = lblRGrandTotalAmnt.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblRGrandTotal.Style["color"] = lblRGrandTotalAmnt.Style["color"] = "Green";
            lblRGrandTotal.ToolTip = lblRGrandTotalAmnt.ToolTip = "Amount is within the maximum limit.";
        }
    }

    protected void btnClose_Rej_Click(object sender, EventArgs e)
    {
        statusID = 0;// eBLL.GetStatusId("AP Review");
        BindApGrid();
        popup_Rej.Hide();
    }

    protected void LoadRejEditData(object sender, EventArgs e)
    {
        LoadRejEditData(null);
    }

    private void BindPrefRejVendors()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlPreVendor_Rej.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlPreVendor_Rej.DataBind();
        ddlPreVendor_Rej.Items.Insert(0, "Please Select");
        ddlPreVendor_Rej.Items.FindByText("Please Select").Value = "0";
    }

    private void LoadRejEditPOData(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("dtPO");
        Session.Remove("dsSt");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("AttchList");

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnRequestID = new HiddenField();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnRequestID = (HiddenField)row.Cells[0].FindControl("hdnRequestID");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
        }
        else
        {
            foreach (GridViewRow row1 in gvRejected.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnRequestID = (HiddenField)row1.FindControl("hdnRequestID");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    break;
                }
            }
        }


        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnRequestID.Value);
        Session["ReqID"] = reqId;
        ReqID.Value = reqId.ToString();
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        Session["IsMgrPreApproved"] = hdnIsMgrPreApproved.Value;

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlPOMgrEmail_Rej.DataSource = dtManager;
        ddlPOMgrEmail_Rej.DataBind();

        txtPOTripStartDate_Rej.Text = hdnStartDate.Value.ToString();
        txtPOTripStartDate_Rej.ReadOnly = true;
        txtPoPurpose_Rej.Text = hdnPurpose.Value;
        txtPoPurpose_Rej.ReadOnly = true;
        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dtPO = dsExp.Tables[0];
            Session["dtPO"] = dtPO;
            GetPOData_Rej();
        }

        BindPrefRejVendors();
        ddlPreVendor_Rej.SelectedValue = dsExp.Tables[0].Rows[0]["preferredVendor"].ToString();
        Session["PONum"] = Utility.NullSafeString(dsExp.Tables[0].Rows[0]["ourRefNo"]);
        txtPoPurpose_Rej.Text = hdnPurpose.Value;
        txtPoPurpose_Rej.Enabled = false;
        ddlPOMgrEmail_Rej.Enabled = false;
        ddlPreVendor_Rej.Enabled = false;

        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
            showComments();
        else
            dvRejectedComments.Visible = false;

        //if (cmnts > 0)
        //{
        //    lnkPOCmnts_Rej.Enabled = true;
        //    lnkPOCmnts_Rej.Style["text-decoration"] = "none";
        //    lnkPOCmnts_Rej.CssClass = "button button-blue";
        //    lnkPOCmnts_Rej.ToolTip = "Click to view comments";
        //}
        //else
        //{
        //    lnkPOCmnts_Rej.Enabled = false;
        //    lnkPOCmnts_Rej.Style["text-decoration"] = "none";
        //    lnkPOCmnts_Rej.CssClass = "button button-gray";
        //    lnkPOCmnts_Rej.ToolTip = "No comments for this PO";
        //}

        //try
        //{
        //    //Printing PO Begin
        //    string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), txtTripStartDate_Rej.Text, Session["Email"].ToString());
        //    //hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //    btnPrintPO_Rej.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //    //Printing PO End
        //}
        //catch (Exception ex) { }

        GetShippingAddressRej();
        GetBillingAddressRej();

        //Load Jobs
        BindJobs(ut.NullSafeInteger(hdnUserID.Value), ddlJobsRej);
        if (!string.IsNullOrEmpty(dsExp.Tables[0].Rows[0]["jobCode"].ToString()))
        {
            //string[] arrJob = dsExp.Tables[0].Rows[0]["jobCode"].ToString().Split('-');
            ddlJobsRej.SelectedValue = dsExp.Tables[0].Rows[0]["jobCode"].ToString();//arrJob[0];
        }
        ddlJobsRej.Enabled = false;
        //Get PO attachments count
        Attachments(0);
        ds = (DataSet)Session["AttchList"];
        btnAttachPORej.Text = "   Attachments(" + ds.Tables[0].Rows.Count + ")";
        //Get PO attachments count
        popEditPO_Rej.Show();
    }

    private void GetPOData_Rej()
    {
        gvPO_Rej.DataSource = dtPO;
        gvPO_Rej.DataBind();
    }

    protected void gvPO_Rej_RowCommand(object sender, GridViewCommandEventArgs e)
    {
    }

    protected void LoadRejPOEditData(object sender, EventArgs e)
    {
        LoadRejEditPOData(null);
    }

    #endregion

    # region Export

    protected void ExportRej(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup_Rej.Show();
            //btnExpVendEmail_Pen.Visible = false;
        }
        else
        {
            //btnExpVendEmail_Pen.Visible = true;
            popEditPO_Rej.Show();
        }
        popExpData_Rej.Show();
    }

    private string PrintAndEmailRej()
    {
        string retStr = string.Empty;
        string pdfText = string.Empty;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (hdnMailTo_Rej.Value.ToLower().Contains("vendor"))
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), "VENDOR", Session["Email"].ToString());
        else
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), ddlTypeVar == 0 || ddlTypeVar == 1 ? string.Empty : txtPOTripStartDate_Rej.Text, Session["Email"].ToString());

        string[] arrExpCodes = new string[txtMulEmail_Rej.Text.Split(',').Length];
        arrExpCodes = txtMulEmail_Rej.Text.Split(',');
        for (int i = 0; i < arrExpCodes.Length; i++)
        {
            if (ddlTypeVar == 0 || ddlTypeVar == 1)
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose_Rej.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            else
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose_Rej.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
        }
        if (dvCCEmail_Rej.Style["display"] == "block" && txtCCEmail_Rej.Text != null)
        {
            string[] arrCCEmails = new string[txtCCEmail_Rej.Text.Split(',').Length];
            arrCCEmails = txtCCEmail_Rej.Text.Split(',');
            for (int i = 0; i < arrCCEmails.Length; i++)
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurpose_Rej.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                else
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurpose_Rej.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            }
        }
        txtMulEmail_Rej.Text = string.Empty;
        txtCCEmail_Rej.Text = string.Empty;
        return retStr;
    }

    protected void RejExportAndEmail(object sender, EventArgs e)
    {
        btnSave_Rej.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_Rej.Text + "', '" + DivEmailErr_Rej.ClientID + "');");
        hdnMailTo_Rej.Value = "User";
        dvExpDataMsg_rej.InnerHtml = string.Empty;
        DivEmailErr_Rej.InnerHtml = string.Empty;
        txtMulEmail_Rej.Text = string.Empty;
        dvCCEmail_Rej.Style["display"] = "none";
        popMulEmail_Rej.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Rej();
            popup_Rej.Show();
        }
        else
            popEditPO_Rej.Show();
        popExpData_Rej.Show();
    }

    protected void AddRejCCEmail(object sender, EventArgs e)
    {
        dvCCEmail_Rej.Style["display"] = "block";
        txtCCEmail_Rej.Text = string.Empty;
        popMulEmail_Rej.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Rej();
            popup_Rej.Show();
        }
        else
            popEditPO_Rej.Show();
        popExpData_Rej.Show();
    }

    protected void ValidateEmail_Rej(object sender, EventArgs e)
    {
        try
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            string str = PrintAndEmailRej();
            if (str.ToLower().Contains("succes"))
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                {
                    Div8.Style["color"] = "Green";
                    Div8.InnerHtml = "Mail sent successfully.";
                }
                else
                {
                    Div21.Style["color"] = "Green";
                    Div21.InnerHtml = "Mail sent successfully.";
                }
                popMulEmail_Rej.Hide();
                popExpData_Rej.Hide();
            }
            else
            {
                DivEmailErr_Rej.Style["color"] = "Red";
                DivEmailErr_Rej.InnerHtml = "Unable to send email. Please try again.";
                popMulEmail_Rej.Show();
                popExpData_Rej.Show();
            }
        }
        catch (Exception ex)
        {
            DivEmailErr_Rej.Style["color"] = "Red";
            DivEmailErr_Rej.InnerHtml = "Unable to send email. Please try again.";
            popMulEmail_Rej.Show();
            popExpData_Rej.Show();
        }
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Rej();
            popup_Rej.Show();
        }
        else
            popEditPO_Rej.Show();
    }

    protected void PrintPO_Rej(object sender, EventArgs e)
    {
        string startDate = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStartDate_Rej.Text;

        //encrypt email
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Encrypt(Session["Email"].ToString(), key);
        //encrypt email

        ScriptManager.RegisterStartupScript(this, GetType(), "Print Expense", "window.open('print.aspx?rq=" + Session["ReqID"].ToString() + "&sd=" + startDate + "&em=" + eMail + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);
        popExpData_Rej.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals_Rej();
            popup_Rej.Show();
        }
        else
            popEditPO_Rej.Show();
    }

    protected void SendExpVendorEmail_Rej(object sender, EventArgs e)
    {
        btnSave.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_Rej.Text + "', '" + DivEmailErr_Rej.ClientID + "');");

        hdnMailTo.Value = "Vendor";
        dvExpDataMsg_pen.InnerHtml = string.Empty;
        DivEmailErr_Rej.InnerHtml = string.Empty;
        txtMulEmail_Rej.Text = string.Empty;
        dvCCEmail_pen.Style["display"] = "none";
        popMulEmail_pen.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotals();
            popup.Show();
        }
        else
            pop_EditPO.Show();
        popExpData.Show();
    }

    #endregion

    # region View Rejected ExpDetails

    private void BlockViewRejFields()
    {
        dvEditVRPreVendor.Style["display"] = "none";
        dvEditVRAgName.Style["display"] = "none";
        dvEditVRItNo.Style["display"] = "none";
        dvEditVRED.Style["display"] = "none";
        dvEditVRCV.Style["display"] = "none";
        SpVPOthercity.Style["display"] = "none";
        dvEditVRFromcity.Style["display"] = "none";
        dvEditVRFromOther.Style["display"] = "none";
        dvEditVRToCity.Style["display"] = "none";
        dvEditVRToOther.Style["display"] = "none";
        dvEditVRFD.Style["display"] = "none";
        dvEditVRTD.Style["display"] = "none";
        dvEditVRTT.Style["display"] = "none";
        dvEditVRLN.Style["display"] = "none";
        dvEditVRReimbt.Style["display"] = "none";
        dvEditVRPA.Style["display"] = "none";
    }

    protected void ViewRejDetails(object sender, CommandEventArgs e)
    {
        string[] arg = new string[1];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);

        if (index == 0)
            btnVRPrev.Visible = false;
        else
            btnVRPrev.Visible = true;
        if (index == gvExp_Rej.Rows.Count - 1)
            btnVRNext.Visible = false;
        else
            btnVRNext.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdseq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;
        hdnRSeq1.Value = hdseq.Value;
        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dsExpRejectedDetails = (DataTable)Session["dt"];
        GetViewRejExpItemData(dsExpRejectedDetails, index);
        CalculateTotals_Rej();
    }

    private void GetViewRejExpItemData(DataTable dsExpRejectedDetails, int index)
    {
        BlockViewRejFields();
        if (dsExpRejectedDetails.Rows.Count > 0)
        {
            DataSet dsCodes = new DataSet();
            DataTable dtCodes = new DataTable();
            //lblVRExpCd.Text = dsExpRejectedDetails.Rows[index]["expItem"].ToString();
            //txtVRAccCode.Text = dsExpRejectedDetails.Rows[index]["expItemAccCode"].ToString();
            txtVRAccCode.Text = dsExpRejectedDetails.Rows[index]["AccountCode"].ToString() + "-" + dsExpRejectedDetails.Rows[index]["expItem"].ToString();
            txtVRClass.Text = dsExpRejectedDetails.Rows[index]["className"].ToString();

            lblddlVRExpType.Text = dsExpRejectedDetails.Rows[index]["expType"].ToString();
            if (lblddlVRExpType.Text == "GENERAL")
            {
                lblVRCatCode.Text = string.Empty;
                lblddlVRJobCd.Text = string.Empty;
                lblVRPhcd.Text = string.Empty;
                dvEditVRJob.Style["display"] = "none";
                dvEditVRPhs.Style["display"] = "none";
                dvEditVRJC.Style["display"] = "none";
            }
            else
            {
                dvEditVRJob.Style["display"] = "block";
                dvEditVRPhs.Style["display"] = "block";
                dvEditVRJC.Style["display"] = "block";
                lblddlVRJobCd.Text = dsExpRejectedDetails.Rows[index]["jobCode"].ToString();
                lblVRPhcd.Text = dsExpRejectedDetails.Rows[index]["phaseCode"].ToString();
                lblVRCatCode.Text = dsExpRejectedDetails.Rows[index]["JCatCode"].ToString();
            }

            string[] arr = txtVRAccCode.Text.Split('-');
            DataView dvCodes = GetExpCodeDetails(arr[1].Trim());
            Session["TestViewExp1"] = "1";

            if (dvCodes != null)
            {
                Session.Remove("TestViewExp1");
                DataTable dtSec = dvCodes.ToTable();
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVRED.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVRDate.Text = dsExpRejectedDetails.Rows[index]["expDate"].ToString();
                }
                else
                {
                    dvEditVRED.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditVRFD.Style["display"] = "block";
                    dvEditVRTD.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    lblVRFromdate.Text = dsExpRejectedDetails.Rows[index]["FromDate"].ToString();
                    lblVRTodate.Text = dsExpRejectedDetails.Rows[index]["ToDate"].ToString();
                }
                else
                {
                    dvEditVRFD.Style["display"] = "none";
                    dvEditVRTD.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditVRCV.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    if (dsExpRejectedDetails.Rows[index]["citiesVstd"].ToString() == string.Empty)
                        lblVRCity.Text = "0";
                    else
                        lblVRCity.Text = dsExpRejectedDetails.Rows[index]["citiesVstd"].ToString();
                    if (lblVRCity.Text == "Other")
                    {
                        SpVROthercity.Style.Add("Display", "block");
                        lblVROther.Text = dsExpRejectedDetails.Rows[index]["otherCity"].ToString();
                    }
                    else
                        SpVROthercity.Style.Add("Display", "none");
                }
                else
                    dvEditVRCV.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVRFromcity.Style["display"] = "block";
                    dvEditVRToCity.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVRFromcity.Text = dsExpRejectedDetails.Rows[index]["FromCity"].ToString();
                    if (lblVROtherFromCity.Text == "Other")
                    {
                        dvEditVRFromOther.Style["display"] = "block";
                        lblVROtherFromCity.Text = dsExpRejectedDetails.Rows[index]["FromOtherCity"].ToString();
                    }
                    else
                        dvEditVRFromOther.Style.Add("Display", "none");

                    //Assign values to ToCity field
                    lblVRTocity.Text = dsExpRejectedDetails.Rows[index]["ToCity"].ToString();
                    if (lblVRTocity.Text == "Other")
                    {
                        dvEditVRToOther.Style["display"] = "block";
                        lblVROtherToCity.Text = dsExpRejectedDetails.Rows[index]["ToOtherCity"].ToString();
                    }
                    else
                        dvEditVRToOther.Style["display"] = "none";
                }
                else
                {
                    dvEditVRFromcity.Style["display"] = "none";
                    dvEditVRToCity.Style["display"] = "none";
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVRTT.Style["display"] = "block";
                    dvEditVRLN.Style["display"] = "block";
                    dvEditVRAmt.Style["display"] = "block";
                    dvEditVRSalesTax.Style["display"] = "none";
                    lblVRTotTrip.Text = dsExpRejectedDetails.Rows[index]["totTrip"].ToString();
                    lblVRLNorm.Text = dsExpRejectedDetails.Rows[index]["LNorm"].ToString();
                    lblVRReimbt.Text = dsExpRejectedDetails.Rows[index]["Reimbt"].ToString();
                    lblVRActAmt.ReadOnly = true;
                    lblVRPreAmt.ReadOnly = true;
                }
                else
                {
                    dvEditVRTT.Style["display"] = "none";
                    dvEditVRLN.Style["display"] = "none";
                    //dvEditVRAmt.Style["display"] = "none";
                    dvEditVRSalesTax.Style["display"] = "block";
                    lblVRActAmt.ReadOnly = false;
                    lblVRPreAmt.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {

                    lblVRPreVendor.Text = dsExpRejectedDetails.Rows[index]["PreferredVendor"].ToString();
                    lblRAgName.Text = dsExpRejectedDetails.Rows[index]["AgentName"].ToString();
                    lblVRItNo.Text = dsExpRejectedDetails.Rows[index]["ItinararyNo"].ToString();

                    //if (lblVRPreVendor.Text == string.Empty)
                    //{
                    //    dvEditVRPreVendor.Style["display"] = "none";
                    //    dvEditVRAgName.Style["display"] = "none";
                    //    dvEditVRItNo.Style["display"] = "none";
                    //}
                    //else
                    //{
                    dvEditVRPreVendor.Style["display"] = "block";
                    dvEditVRAgName.Style["display"] = "block";
                    dvEditVRItNo.Style["display"] = "block";
                    //}
                }
                else
                {
                    dvEditVRPreVendor.Style["display"] = "none";
                    dvEditVRAgName.Style["display"] = "none";
                    dvEditVRItNo.Style["display"] = "none";
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditVRED.Style["display"] = "block";
                lblVRDate.Text = dsExpRejectedDetails.Rows[index]["ExpDate"].ToString();
                dvEditVRCV.Style["display"] = "block";
                lblVRCity.Text = dsExpRejectedDetails.Rows[index]["CitiesVstd"].ToString();
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditVRED.Style["display"] = "none";
                dvEditVRCV.Style["display"] = "none";
            }

            lblVRSalesTax.Text = dsExpRejectedDetails.Rows[index]["taxAmount1"].ToString();
            lblVRFoodTax.Text = dsExpRejectedDetails.Rows[index]["taxAmount2"].ToString();
            lblVRActAmt.Text = dsExpRejectedDetails.Rows[index]["actualAmount"].ToString();
            lblVRPreAmt.Text = dsExpRejectedDetails.Rows[index]["preAmount"].ToString();
            lblVRPayMode.Text = dsExpRejectedDetails.Rows[index]["payMode"].ToString();
            lblVRCity.Text = dsExpRejectedDetails.Rows[index]["citiesVstd"].ToString();
            if (lblVRCity.Text == "Other")
            {
                SpVROthercity.Visible = true;
                lblVROther.Text = dsExpRejectedDetails.Rows[index]["otherCity"].ToString();
            }
            else
                SpVROthercity.Visible = false;

            lblVRcomnts.Text = dsExpRejectedDetails.Rows[index]["comments"].ToString();
            GetViewBudgetDataRej(dsExpRejectedDetails.Rows[index]["accountCode"].ToString());
            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                LinkViewRejAttachments.Style["display"] = "block";
                lblRejAtt.Style["display"] = "none";
            }
            else
            {
                LinkViewRejAttachments.Style["display"] = "none";
                lblRejAtt.Style["display"] = "block";
                lblRejAtt.InnerText = "No attachments to display.";
            }
            popup_Rej.Show();
            Popup_RejExp.Show();
        }
    }

    protected void ViewPreviousExp_Rej(object sender, EventArgs e)
    {
        hdnRRowIndex.Value = (Convert.ToInt32(hdnRRowIndex.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnRSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewRejFields();
        GetViewRejExpItemData(dsExpEditDetails, index);
        CalculateTotals_Rej();
        if (index == 0)
            btnVRPrev.Visible = false;
        else
            btnVRPrev.Visible = true;
        if (index == gvExp_Rej.Rows.Count - 1)
            btnVRNext.Visible = false;
        else
            btnVRNext.Visible = true;
    }

    protected void ViewNextExp_Rej(object sender, EventArgs e)
    {
        hdnRRowIndex.Value = (Convert.ToInt32(hdnRRowIndex.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRRowIndex.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnRSeq1.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewRejFields();
        GetViewRejExpItemData(dsExpEditDetails, index);
        CalculateTotals_Rej();

        if (index == 0)
            btnVRPrev.Visible = false;
        else
            btnVRPrev.Visible = true;
        if (index == gvExp_Rej.Rows.Count - 1)
            btnVRNext.Visible = false;
        else
            btnVRNext.Visible = true;
    }

    #endregion

    #region Comments

    protected void Comments_Rej(object sender, EventArgs e)
    {
        //showComments();
    }

    public void showComments()
    {
        var strCmnts = xms.getComments(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));
        List<CommentsVO> lstCmnts = ser.Deserialize<List<CommentsVO>>(strCmnts);
        DataSet dsComments = new DataSet();
        dsComments.Tables.Add(Utility.ConvertToDataTable(lstCmnts));

        string str = "<table width='100%'>";
        for (int i = 0; i < dsComments.Tables[0].Rows.Count; i++)
        {
            str += "<tr><td>" + dsComments.Tables[0].Rows[i]["Comments"] + "</td></tr><tr><td>&nbsp;</td></tr><tr><td style='color:Black;'><small><i>by " + dsComments.Tables[0].Rows[i]["Email"] + " on " + dsComments.Tables[0].Rows[i]["AddedOn"] + "</i></small></td></tr><tr><td colspan='2' width='100%'><hr /></td></tr>";
        }
        str += "</table>";
        
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            widgetComments_Rej.Visible = true;
            widgetComments_Rej.InnerHtml = str;
            popEditPO_Rej.Show();
        }
        else
        {
            widgetComments_Rej1.Visible = true;
            widgetComments_Rej1.InnerHtml = str;
            CalculateTotals_Rej();
            popup_Rej.Show();
        }
        //popup_Comments_Rej.Show();
    }

    protected void btnCommentsClose_Rej_Click(object sender, EventArgs e)
    {
        BindApGrid();
        CalculateTotals_Rej();
        popup_Rej.Show();
        popup_Comments_Rej.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachments_Rej(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;
        //dvAtt_Rej.InnerHtml = RejAttachments(Convert.ToInt32(hdnSeq.Value));
        RejAttachments(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmntsRej.DataSource = ds;
            gvAttchmntsRej.DataBind();
        }
        CalculateTotals_Rej();
        popup_Rej.Show();
        popup_Att_Rej.Show();
    }

    private string RejAttachments(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        if (ds.Tables[0].Rows.Count > 0)
            Session["AttchList"] = ds;
        string str1 = string.Empty;
        //for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
        //    str1 += "<a href='downloadFile.aspx?aid=" + ds.Tables[0].Rows[i]["attachmentId"] + "&ext=" + ds.Tables[0].Rows[i]["orgName"] + "'>" + ds.Tables[0].Rows[i]["orgName"] + "</a></br>Added on : " + Convert.ToDateTime(ds.Tables[0].Rows[i]["addedOn"]).ToShortDateString() + "</br>";

        return str1;
    }

    protected void DownLdAttRej(object sender, EventArgs e)
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
        popup_Att_Rej.Show();
        popup_Rej.Show();
    }

    protected void gvAttchmntsRej_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt_Rej = (ImageButton)e.Row.FindControl("imgAttchmnt_Rej");
            //System.Web.UI.WebControls.Image imgAttchmnt = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
            if (extension.ToLower().Contains("pdf"))
                imgAttchmnt_Rej.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                string base64ImageString = ConvertBytesToBase64(bytes);
                imgAttchmnt_Rej.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void btnAttClose_Rej_Click(object sender, EventArgs e)
    {
        CalculateTotals_Rej();
        popup_Rej.Show();
        popup_Att_Rej.Hide();
    }

    protected void DisplayRejLineAttachments(object sender, EventArgs e)
    {
        //dvAtt_Rej.InnerHtml = RejAttachments(Convert.ToInt32(hdnRSeq1.Value));
        RejAttachments(Convert.ToInt32(hdnRSeq1.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmntsRej.DataSource = ds;
            gvAttchmntsRej.DataBind();
        }
        Popup_RejExp.Show();
        popup_Rej.Show();
        popup_Att_Rej.Show();
    }

    #endregion

    # region ViewApprovedPOLineItems

    double allRowsAmntVal_Rej = 0;

    private void BindPoRejExpenseItems()
    {
        string str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Session["DepartmentCode"].ToString(), 2, string.Empty);
        List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);

        //add new column containing account number and account name seperated with --
        if (!dt.Columns.Contains("AcountClss"))
            dt.Columns.Add("AcountClss");

        for (int i = 0; i < dt.Rows.Count; i++)
            dt.Rows[i]["AcountClss"] = dt.Rows[i]["acctLongCode"].ToString() + "--" + dt.Rows[i]["accName"].ToString();
        //add new column containing account number and account name seperated with --

        Session["dtExpItem"] = dt;
        ddlExpItem_Rej.DataSource = GetHierarchicalData(dt.DefaultView.ToTable(true, "AcountClss", "accName"), "AcountClss");
        ddlExpItem_Rej.DataBind();
        ddlExpItem_Rej.Items.Insert(0, "Please Select");
        ddlExpItem_Rej.Items.FindByText("Please Select").Value = "0";

    }

    protected void ViewPORejDetails(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndex.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1.Value = arg[1];

        dtPO = (DataTable)Session["dtPO"];
        GetPORejLineItemData(dtPO, index);
        lbPOlHeading_Rej.Text = "View Rejected PO Details";
    }

    protected void gvPO_Rej_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkItemCode = (LinkButton)e.Row.FindControl("lnkItemCode");
            Label lblItemCode = (Label)e.Row.FindControl("lblItemCode");
            HiddenField hdnItemNote = (HiddenField)e.Row.FindControl("hdnItemNote");
            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }
            else
            {
                if (txtBalAfterPO.Text.Contains("-"))
                {
                    e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                    e.Row.Style["background-color"] = "#FFCCCC";
                }
            }
            if (hdnItemNote.Value == string.Empty)
            {
                lblItemCode.Visible = true;
                lnkItemCode.Visible = false;
            }
            else
            {
                lblItemCode.Visible = false;
                lnkItemCode.Visible = true;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void GetPORejLineItemData(DataTable dt, int index)
    {
        Session.Remove("dtExpItem");
        if (ddlJobsRej.SelectedValue != "0")
            LoadDetailsByJob(true, ddlJobsRej, null, ddlExpItem_Rej, dt.Rows[index]["deptCode"].ToString());
        else
            BindPoRejExpenseItems();
        ddlExpItem_Rej.SelectedValue = dt.Rows[index]["expItem"].ToString();
        txtquantity_Rej.Text = dt.Rows[index]["quantity"].ToString();
        txtPackUnit_Rej.Text = dt.Rows[index]["packageUnit"].ToString();
        txtUnitPrice_Rej.Text = dt.Rows[index]["unitPrice"].ToString();
        txtPOAmount_Rej.Text = dt.Rows[index]["PreAmount"].ToString();
        txtDescr_Rej.Text = dt.Rows[index]["comments"].ToString();
        txtShipCost_Rej.Text = dt.Rows[index]["shippingCost"].ToString();
        chkCalTax_Rej.Checked = Convert.ToBoolean(dt.Rows[index]["taxCalCulated"]);
        txtTax_Rej.Text = chkCalTax_Rej.Checked == true ? ((ut.NullSafeDouble(txtUnitPrice_Rej.Text) * ut.NullSafeDouble(txtquantity_Rej.Text)) * ((ut.NullSafeDouble(Session["Tax"])) / 100)).ToString() : "0.00";
        txtBalAfterPO_Rej.Text = dt.Rows[index]["balAfterPo"].ToString();
        txtVendPtNo_Rej.Text = dt.Rows[index]["vendpartno"].ToString();
        txtTaxPercent_Rej.Text = dt.Rows[index]["taxPercent"].ToString();
        txtReqDelDateRej.Text = dt.Rows[index]["reqDeliveryDate"].ToString();

        string expr = "expItem = '" + ddlExpItem_Rej.SelectedValue + "'";
        DataView view = new DataView(dt, expr, "expItem", DataViewRowState.CurrentRows);
        txtAccCode_Rej.Text = view.ToTable().Rows[0]["accountCode"].ToString();
        CalOnAccCode_Rej(dt.Rows[index]["deptCode"].ToString());
        //txtBalAfterPO_Rej.Text = (ut.NullSafeDouble(txtRemain_Rej.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemain_Rej.Text)) - ut.NullSafeDouble(Session["allRowsAmntVal_Rej"])).ToString();

        popEditPO_Rej.Show();
        popAddPO_Rej.Show();
    }

    private void CalOnAccCode_Rej(string deptCode)
    {
        //DataSet dataUsers = new DataSet();
        //var AccntDetails = xms.getUserDetailsForMyAcc(Convert.ToInt32(Session["User_Req"]));
        //List<UserVO> users = ser.Deserialize<List<UserVO>>(AccntDetails);
        //dataUsers.Tables.Add(Utility.ConvertToDataTable(users));

        DateTime dateTime = Convert.ToDateTime(txtPOTripStartDate_Rej.Text);
        int year = dateTime.Year;

        if (hdnYear_Rej.Value != year.ToString())
            MonthFilter_Rej(year);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDateRej"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStartDate_Rej.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStartDate_Rej.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth_Rej = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }

            else
                dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }


        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtAccCode_Rej.Text;
        budget.compCode = Session["CompCode"].ToString();
        //budget.deptCode = dataUsers.Tables[0].Rows[0]["DepartmentCode"].ToString();
        budget.deptCode = deptCode;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth_Rej;


        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

        string expression = "accountCode ='" + txtAccCode_Rej.Text + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        txtBudget_Rej.Text = dtAcccode.Rows[0]["budget"].ToString();
        txtCurrBal_Rej.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
        txtRemain_Rej.Text = dtAcccode.Rows[0]["remaining"].ToString();
        popEditPO_Rej.Show();
        txtBalAfterPO_Rej.Text = txtRemain_Rej.Text;
    }

    private string MonthFilter_Rej(int year)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDateRej"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(txtPOTripStartDate_Rej.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStartDate_Rej.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth_Rej = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvPoError.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth_Rej;
    }

    protected void DisplayItemNotesRej(object sender, CommandEventArgs e)
    {
        string[] arr = e.CommandArgument.ToString().Split(';');
        string itemNotes = arr[1];
        string itemCode = arr[0];
        lblItemNotesRej.Text = itemNotes;
        lblDispItemCodeRej.Text = itemCode;
        popEditPO_Rej.Show();
        popItemNotesRej.Show();
    }

    #endregion

    #region Calculate Budget

    private void GetViewBudgetDataRej(string accCode)
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDate_Rej.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDate_Rej.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtTripStartDate_Rej.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDate_Rej.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
        }

        ////Fetch budget details by selected classification
        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtVRAccCode.Text;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = Session["DepartmentCode"].ToString();
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string expression = "accountCode = '" + accCode + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        if (dtAcccode.Rows.Count > 0)
        {
            txtVExpBudgRej.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtVExpCurrBalRej.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtVExpRemBudgRej.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExp_Rej.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                string strAccCode = txtVRAccCode.Text.Split('-')[0];
                if (hdnAccCode.Value == strAccCode)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnVExpRowTotAmntRej.Value = (allRowsAmntVal - ut.NullSafeDouble(lblVRActAmt.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtVExpBalAfterRej.Text = (ut.NullSafeDouble(txtVExpRemBudgRej.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(lblVRActAmt.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFieldsRej()
    {
        txtVExpBalAfterRej.Attributes.Add("readonly", "readonly");
        txtVExpCurrBalRej.Attributes.Add("readonly", "readonly");
        txtVExpRemBudgRej.Attributes.Add("readonly", "readonly");
        txtVExpBudgRej.Attributes.Add("readonly", "readonly");
    }


    #endregion

    #region PO Attachments

    protected void btnAttachPORej_Click(object sender, EventArgs e)
    {
        if (Session["AttchList"] == null)
            Attachments(0);
        ds = (DataSet)Session["AttchList"];
        gvAttchmntsPORej.DataSource = ds;
        gvAttchmntsPORej.DataBind();
        popEditPO_Rej.Show();
        popup_AttPORej.Show();
    }

    protected void gvAttchmntsPORej_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmntPO");
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

    protected void DownLdAttPORej(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgNamePO");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgNamePO");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup_AttPORej.Show();
        popEditPO_Rej.Show();
    }

    #endregion

    #endregion

    #region Parked Requests

    protected void gvApDetailsPark_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            Label lblPAmnt = (Label)e.Row.FindControl("lblPAmnt");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            if (ddlTypeVar == 2)
            {
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreferredVendor").ToString();
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
            }
            else
            {
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();
                lblPAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
            }

            int x = 0;

            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");
            if (hdnLmtExceeded.Value.ToLower() == "y" && hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit and one of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnBudgetLimitExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "One of the AccountCodes has exceeded allowed budget limit.";
            }
            else if (hdnLmtExceeded.Value.ToLower() == "y")
            {
                x++;
                e.Row.ToolTip = "Total amount has exceeded allowed department limit.";
            }

            if (x > 0)
            {
                e.Row.Style["background-color"] = "#FFCCCC";

            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkPreAmount = (LinkButton)e.Row.FindControl("lnkPreAmount");
            //if (ddlTypeVar == 2)
            //    lnkPreAmount.Text = "PreferredVendor";
            LinkButton lnkAmount = (LinkButton)e.Row.FindControl("lnkAmount");
            LinkButton lnkPOINVAmount = (LinkButton)e.Row.FindControl("lnkPOINVAmount");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");
            if (ddlTypeVar == 2)
            {
                lnkPreAmount.Text = "Vendor";
                lnkPreAmount.CommandArgument = "PreferredVendor";
                lnkAmount.Text = "PoAmount";
                lnkAmount.CommandArgument = "PreAmount";
                lnkRequestID.Text = "PONo";
                lnkRequestID.CommandArgument = "OurRefNo";
            }
            else
            {
                lnkPreAmount.Text = "PreAmount";
                lnkPreAmount.CommandArgument = "PreAmount";
                lnkAmount.Text = "ActualAmount";
                lnkAmount.CommandArgument = "ActualAmount";
                lnkRequestID.Text = "RequestId";
                lnkRequestID.CommandArgument = "RequestId";
            }
            if (Session["SortDir_ParkPo"] != null && Session["Control_ParkPo"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ParkPo"].ToString());
                if (Session["SortDir_ParkPo"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }
        }
    }

    protected void btnCommentsSavePark_Click(object sender, EventArgs e)
    {
        int uID = Convert.ToInt32(Session["UserID"]);

        RequestVO req = new RequestVO();
        req.approved = "2";
        req.preApproved = (Convert.ToInt32(Session["Type"]));
        req.orgId = Session["OrgID"].ToString();
        req.reqId = Session["ReqID"].ToString();
        req.type = "0";
        req.seqId = Session["UserID"].ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = Session["User_Req"].ToString();
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = txtCommentsPark.Text;
        req.vendorEmail = string.Empty;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        req.emailFaxFlag = string.Empty;
        bool pre = false;
        if (Convert.ToInt32(Session["Type"]) == 1)
            pre = true;
        string retStr = xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));

        txtCommentsPark.Text = string.Empty;

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            BindPark_APGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        ReloadUserControls();

        popup_CommentsPark.Hide();
    }

    protected void SortExpressionPark(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        Session["Control_ParkPo"] = lnk.ID;

        if (Session["SortDir_ParkPo"] == null || Session["SortDir_ParkPo"].ToString() == "Desc")
            Session["SortDir_ParkPo"] = "Asc";
        else
            Session["SortDir_ParkPo"] = "Desc";

        Session["SortExpr_ParkPo"] = e.CommandArgument;
        BindPark_APGrid();
    }

    #region Edit Expense

    protected void EditPark(object sender, EventArgs e)
    {
        Session.Remove("LmtExceeded");
        Session.Remove("ReqID");
        Session.Remove("forward");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            LoadEditPODataPark(sender);
        else
            LoadEditDataPark(sender);
    }

    private DataTable BindPrefVendorsPark()
    {
        string str = xms.getPreferredVendors(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, string.Empty);
        List<VendorsVO> lst = ser.Deserialize<List<VendorsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        DataView dv = new DataView(dt, "isPreferVend = 'Y'", "isPreferVend", DataViewRowState.CurrentRows);
        ddlPreVendorPark.DataSource = dv.ToTable(true, "PreferredVendor");
        ddlPreVendorPark.DataBind();
        ddlPreVendorPark.Items.Insert(0, "Please Select");
        ddlPreVendorPark.Items.FindByText("Please Select").Value = "0";
        return dt;
    }

    private void LoadEditPODataPark(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("dtPO");
        Session.Remove("dsSt");
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session.Remove("LmtExceeded");
        Session.Remove("forward");

        Session.Remove("dsSt");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("dsSt_park_po");
        Session.Remove("AttchList");

        dvErrorPark.InnerHtml = string.Empty;

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnPreAmnt = new HiddenField();
        HiddenField hdnActAmnt = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnParkedUser = new HiddenField();

        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnPreAmnt = (HiddenField)row.Cells[0].FindControl("hdnPreAmnt");
            hdnActAmnt = (HiddenField)row.Cells[0].FindControl("hdnActAmnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnParkedUser = (HiddenField)row.Cells[0].FindControl("hdnParkedUser");
        }
        else
        {
            foreach (GridViewRow row1 in gvApDetailsPark.Rows)
            {
                hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(hdnMGReqID.Value) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnPreAmnt = (HiddenField)row1.FindControl("hdnPreAmnt");
                    hdnActAmnt = (HiddenField)row1.FindControl("hdnActAmnt");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnParkedUser = (HiddenField)row1.FindControl("hdnParkedUser");
                    break;
                }
            }
        }

        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqIDPark.Value = reqId.ToString();
        Session["SeqCnt"] = "0";
        Session["UserNametoExp"] = hdnUserName.Value;
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlPOMgrEmailPark.DataSource = dtManager;
        ddlPOMgrEmailPark.DataBind();
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        if (dsExp != null)
        {
            dtPO = dsExp.Tables[0];
            Session["dtPO"] = dtPO;
            GetPODataPark();
            double gtotal = 0;
            for (int i = 0; i < dsExp.Tables[0].Rows.Count; i++)
            {
                gtotal += ut.NullSafeDouble(dsExp.Tables[0].Rows[i]["PreAmount"]);
            }
            lblGrandTotalAmntPark.Text = gtotal.ToString();
        }

        txtPOTripStrtDatePark.Text = hdnStartDate.Value.ToString();
        txtPOTripStrtDatePark.ReadOnly = true;
        txtPoPurposePark.Text = hdnPurpose.Value;
        txtPoPurposePark.ReadOnly = true;
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDatePark.Text);
        int year = dateTime.Year;
        hdnYearPark.Value = year.ToString();

        hdnSysOrderFlgPark.Value = dsExp.Tables[0].Rows[0]["otherFromCity"].ToString();
        hdnVendEmailFlgPark.Value = dsExp.Tables[0].Rows[0]["otherToCity"].ToString();
        hdnVendEmailPark.Value = hdnSysOrderFlgPark.Value == "Y" ? dsExp.Tables[0].Rows[0]["otherToCity"].ToString() : string.Empty;
        Session["PONum"] = Utility.NullSafeString(dsExp.Tables[0].Rows[0]["ourRefNo"]);

        DataTable dt = BindPrefVendorsPark();
        ddlPreVendorPark.SelectedValue = dsExp.Tables[0].Rows[0]["preferredVendor"].ToString();
        ddlPreVendorPark.Enabled = false;
        ddlPOMgrEmailPark.Enabled = false;

        string expr = "preferredVendor = '" + dsExp.Tables[0].Rows[0]["preferredVendor"].ToString().Replace("'", "''") + "'";
        DataView dv = new DataView(dt, expr, "preferredVendor", DataViewRowState.CurrentRows);
        hdnVendEmailPark.Value = dv.ToTable().Rows[0]["vendorEmail"].ToString();

        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lnkPOCmntsPark.Enabled = true;
            lnkPOCmntsPark.Style["text-decoration"] = "none";
            lnkPOCmntsPark.CssClass = "button button-blue";
            lnkPOCmntsPark.ToolTip = "Click to view comments";
        }
        else
        {
            lnkPOCmntsPark.Enabled = false;
            lnkPOCmntsPark.Style["text-decoration"] = "none";
            lnkPOCmntsPark.CssClass = "button button-gray";
            lnkPOCmntsPark.ToolTip = "No comments for this PO";
        }

        //Hide options if the PO is not parked by the logged in user
        if (ut.NullSafeInteger(hdnParkedUser.Value) == ut.NullSafeInteger(Session["UserID"]))
        {
            //btnExtendParkPO.Visible = true;
            btnApprovePOPark.Visible = true;
            btnRejectPOPark.Visible = true;
            btnLoadEditPODataPark.Visible = true;
            foreach (GridViewRow row1 in gvPOPark.Rows)
            {
                LinkButton lnk = (LinkButton)row1.FindControl("lnkpoEdit");
                lnk.Visible = true;
            }
        }
        else
        {
            //btnExtendParkPO.Visible = false;
            btnApprovePOPark.Visible = false;
            btnRejectPOPark.Visible = false;
            btnLoadEditPODataPark.Visible = false;
            foreach (GridViewRow row1 in gvPOPark.Rows)
            {
                LinkButton lnk = (LinkButton)row1.FindControl("lnkpoEdit");
                lnk.Visible = false;
            }
        }

        //Printing PO Begin
        //string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), txtPOTripStrtDatePark.Text, Session["Email"].ToString());
        ////hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //btnPrintPO_penPark.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //Printing PO End
        GetShippingAddressPark();
        GetBillingAddressPark();
        //Get PO attachments count

        //Load Jobs
        BindJobs(ut.NullSafeInteger(hdnUserID.Value), ddlJobsPark);
        if (!string.IsNullOrEmpty(dsExp.Tables[0].Rows[0]["jobCode"].ToString()))
        {
            //string[] arrJob = dsExp.Tables[0].Rows[0]["jobCode"].ToString().Split('-');
            ddlJobsPark.SelectedValue = dsExp.Tables[0].Rows[0]["jobCode"].ToString();//arrJob[0];
        }
        ddlJobsPark.Enabled = false;

        Attachments(0);
        ds = (DataSet)Session["AttchList"];
        btnAttachPOPark.Text = "   Attachments(" + ds.Tables[0].Rows.Count + ")";
        //Get PO attachments count
        pop_EditPOPark.Show();
    }

    private void LoadEditDataPark(object sender)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");

        Session.Remove("Expense");
        Session.Remove("Status");
        Session.Remove("StatusID");
        Session.Remove("dt");
        Session.Remove("dsSt");
        Session.Remove("PreAmt");
        Session.Remove("PreApproval");
        Session.Remove("delExp");
        Session.Remove("IsMgrPreApproved");
        Session.Remove("LmtExceeded");
        Session.Remove("forward");

        Session.Remove("dsSt");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("dsSt_park_po");

        dvErrorPark.InnerHtml = string.Empty;

        LinkButton lblReqID = new LinkButton();
        HiddenField hdnIsMgrPreApproved = new HiddenField();
        HiddenField hdnPreApproved = new HiddenField();
        HiddenField hdnPurpose = new HiddenField();
        HiddenField hdnStartDate = new HiddenField();
        HiddenField hdnCommentsCnt = new HiddenField();
        HiddenField hdnUserID = new HiddenField();
        HiddenField hdnManagerID = new HiddenField();
        HiddenField hdnManagerEmail = new HiddenField();
        HiddenField hdnPreAmnt = new HiddenField();
        HiddenField hdnActAmnt = new HiddenField();
        HiddenField hdnLmtExceeded = new HiddenField();
        HiddenField hdnMGReqID = new HiddenField();
        HiddenField hdnUserName = new HiddenField();
        HiddenField hdnOnBehalfOf = new HiddenField();

        if (sender != null)
        {
            GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
            lblReqID = (LinkButton)row.Cells[0].FindControl("lnkReqEdit");
            hdnIsMgrPreApproved = (HiddenField)row.Cells[0].FindControl("hdnIsMgrPreApproved");
            hdnPreApproved = (HiddenField)row.Cells[0].FindControl("hdnPreApproved");
            hdnPurpose = (HiddenField)row.Cells[0].FindControl("hdnPurpose");
            hdnStartDate = (HiddenField)row.Cells[0].FindControl("hdnStartDate");
            hdnCommentsCnt = (HiddenField)row.Cells[0].FindControl("hdnCommentsCnt");
            hdnUserID = (HiddenField)row.Cells[0].FindControl("hdnUserID");
            hdnManagerID = (HiddenField)row.Cells[0].FindControl("hdnManagerID");
            hdnManagerEmail = (HiddenField)row.Cells[0].FindControl("hdnManagerEmail");
            hdnPreAmnt = (HiddenField)row.Cells[0].FindControl("hdnPreAmnt");
            hdnActAmnt = (HiddenField)row.Cells[0].FindControl("hdnActAmnt");
            hdnLmtExceeded = (HiddenField)row.Cells[0].FindControl("hdnLmtExceeded");
            hdnMGReqID = (HiddenField)row.Cells[0].FindControl("hdnMGReqID");
            hdnUserName = (HiddenField)row.Cells[0].FindControl("hdnUserName");
            hdnOnBehalfOf = (HiddenField)row.Cells[0].FindControl("hdnOnBehalfOf");
        }
        else
        {
            foreach (GridViewRow row1 in gvApDetailsPark.Rows)
            {
                lblReqID = (LinkButton)row1.FindControl("lnkReqEdit");
                if (Convert.ToInt32(lblReqID.Text) == Convert.ToInt32(Session["ReqID"]))
                {
                    hdnIsMgrPreApproved = (HiddenField)row1.FindControl("hdnIsMgrPreApproved");
                    hdnPreApproved = (HiddenField)row1.FindControl("hdnPreApproved");
                    hdnPurpose = (HiddenField)row1.FindControl("hdnPurpose");
                    hdnStartDate = (HiddenField)row1.FindControl("hdnStartDate");
                    hdnCommentsCnt = (HiddenField)row1.FindControl("hdnCommentsCnt");
                    hdnUserID = (HiddenField)row1.FindControl("hdnUserID");
                    hdnManagerID = (HiddenField)row1.FindControl("hdnManagerID");
                    hdnManagerEmail = (HiddenField)row1.FindControl("hdnManagerEmail");
                    hdnPreAmnt = (HiddenField)row1.FindControl("hdnPreAmnt");
                    hdnActAmnt = (HiddenField)row1.FindControl("hdnActAmnt");
                    hdnLmtExceeded = (HiddenField)row1.FindControl("hdnLmtExceeded");
                    hdnMGReqID = (HiddenField)row1.FindControl("hdnMGReqID");
                    hdnUserName = (HiddenField)row1.FindControl("hdnUserName");
                    hdnOnBehalfOf = (HiddenField)row1.FindControl("hdnOnBehalfOf");
                    break;
                }
            }
        }
        if (Session["LmtExceeded"] == null)
            Session["LmtExceeded"] = hdnLmtExceeded.Value;
        Session["User_Req"] = hdnUserID.Value;
        reqId = Convert.ToInt32(hdnMGReqID.Value);
        Session["ReqID"] = reqId;
        ReqIDPark.Value = reqId.ToString();
        Session["UserNametoExp"] = hdnUserName.Value;
        Session["SeqCnt"] = "0";
        xms.deleteAll_Temp(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]));

        //Bind Manager
        DataTable dtManager = new DataTable();
        DataRow drManager;
        dtManager.Columns.Add("UserID");
        dtManager.Columns.Add("Email");
        drManager = dtManager.NewRow();
        drManager["UserID"] = hdnManagerID.Value;
        drManager["Email"] = hdnManagerEmail.Value;
        dtManager.Rows.Add(drManager);

        ddlManagerEmailPark.DataSource = dtManager;
        ddlManagerEmailPark.DataBind();

        txtPurposePark.Text = hdnPurpose.Value.ToString();
        txtTripStartDatePark.Text = hdnStartDate.Value.ToString();
        txtOnBehalfOfPark.Text = hdnOnBehalfOf.Value;
        txtPurposePark.ReadOnly = txtTripStartDatePark.ReadOnly = txtOnBehalfOfPark.ReadOnly = true;

        //Bind Grid
        DataSet dsExp = new DataSet();
        var strExpbyReq = xms.getExpDetailsByReqId(reqId, Convert.ToInt32(Session["OrgID"]));
        List<ExpeseDetailsVO> lstExpBtReq = ser.Deserialize<List<ExpeseDetailsVO>>(strExpbyReq);
        dsExp.Tables.Add(Utility.ConvertToDataTable(lstExpBtReq));
        Session["dsExp"] = dsExp;
        if (dsExp != null)
        {
            dt = dsExp.Tables[0];
            Session["dt"] = dt;
            GetDataPark();
        }
        //Display/Hide Comments link
        int cmnts = Convert.ToInt32(hdnCommentsCnt.Value);
        if (cmnts > 0)
        {
            lknCmntPark.Enabled = true;
            lknCmntPark.Style["text-decoration"] = "none";
            lknCmntPark.CssClass = "button button-blue";
            lknCmntPark.ToolTip = "Click to view comments";
        }
        else
        {
            lknCmntPark.Enabled = false;
            lknCmntPark.Style["text-decoration"] = "none";
            lknCmntPark.CssClass = "button button-gray";
            lknCmntPark.ToolTip = "No comments for this expense";
        }

        //Calculate totals
        expTotal = 0;
        grandTotal = 0; preExpTotal = 0;
        foreach (GridViewRow row1 in gvExpPark.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }
        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblGrandTotalAmntPark.Text = grandTotal.ToString();
        Session["AmountToExp"] = lblGrandTotalAmntPark.Text;
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblGrandTotalPark.Style["color"] = lblGrandTotalAmntPark.Style["color"] = "Red";
            lblGrandTotalPark.ToolTip = lblGrandTotalAmntPark.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblGrandTotalPark.Style["color"] = lblGrandTotalAmntPark.Style["color"] = "Green";
            lblGrandTotalPark.ToolTip = lblGrandTotalAmntPark.ToolTip = "Amount is within the maximum limit.";
        }
        //try
        //{
        //    //Printing PO Begin
        //    string htmlString = xms.getExpReceiptToAttach(reqId, Convert.ToInt32(Session["OrgID"]), string.Empty, Session["Email"].ToString());
        //    //hdnPOPrint.Value = htmlString.Replace("'", "\"");
        //    btnPrintPO_penPark.Attributes.Add("onclick", "PrintGridView('" + htmlString.Replace("'", "\"") + "');");
        //    //Printing PO End
        //}
        //catch (Exception ex) { }
        popupPark.Show();
    }

    private void GetDataPark()
    {
        gvExpPark.DataSource = dt;
        gvExpPark.DataBind();
    }

    private void GetPODataPark()
    {
        gvPOPark.DataSource = dtPO;
        gvPOPark.DataBind();
    }

    private void GetShippingAddressPark()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dv.ToTable().Rows.Count > 0)
        {
            lblShipAddrPark.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipCompNamePark.Text = dv.ToTable().Rows[0]["CompName"].ToString();
            lblShipAddr1Park.Text = dv.ToTable().Rows[0]["Address1"].ToString();
            lblShipAddr2Park.Text = dv.ToTable().Rows[0]["Address2"].ToString();
            lblShipCityPark.Text = dv.ToTable().Rows[0]["City"].ToString();
            lblShipStatePark.Text = dv.ToTable().Rows[0]["State"].ToString();
            lblShipCountryPark.Text = dv.ToTable().Rows[0]["CountryCode"].ToString();
            lblShipZipCodePark.Text = dv.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    private void GetBillingAddressPark()
    {
        DataSet dsCompCode = (DataSet)Session["CompCodesList"];
        DataView dv = new DataView(dsCompCode.Tables[0], "CompCode = '" + Session["CompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        DataView dvBillComp = new DataView(dsCompCode.Tables[0], "CompCode = '" + dv.ToTable().Rows[0]["billToCompCode"].ToString() + "'", "CompCode", DataViewRowState.CurrentRows);
        if (dvBillComp.ToTable().Rows.Count > 0)
        {
            lblBillAddrPark.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillCompNamePark.Text = dvBillComp.ToTable().Rows[0]["CompName"].ToString();
            lblBillAddr1Park.Text = dvBillComp.ToTable().Rows[0]["Address1"].ToString();
            lblBillAddr2Park.Text = dvBillComp.ToTable().Rows[0]["Address2"].ToString();
            lblBillCityPark.Text = dvBillComp.ToTable().Rows[0]["City"].ToString();
            lblBillStatePark.Text = dvBillComp.ToTable().Rows[0]["State"].ToString();
            lblBillCountryPark.Text = dvBillComp.ToTable().Rows[0]["CountryCode"].ToString();
            lblBillZipCodePark.Text = dvBillComp.ToTable().Rows[0]["ZipCode"].ToString();
        }
    }

    protected void gvExpPark_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            HiddenField hdnSeq = (HiddenField)e.Row.FindControl("hdnSeq");
            HiddenField hdnAttCnt = (HiddenField)e.Row.FindControl("hdnAttCnt");
            if (hdnSeq.Value != null)
            {
                LinkButton lnkShowAtt = (LinkButton)e.Row.FindControl("lnkShowAtt");
                if (Convert.ToInt32(hdnAttCnt.Value) > 0)
                    lnkShowAtt.Visible = true;
                else
                    lnkShowAtt.Visible = false;
            }
            Label lblCity = (Label)e.Row.FindControl("lblCity");
            if (lblCity != null && lblCity.Text == "Other")
            {
                lblCity.Visible = false;
            }
            CheckBox chkIsPenReimb = (CheckBox)e.Row.FindControl("chkIsPenReimb");
            HiddenField hdnReimbChk = (HiddenField)e.Row.FindControl("hdnReimbChk");
            if (hdnReimbChk.Value.ToLower() == "y")
                chkIsPenReimb.Checked = true;
            else
                chkIsPenReimb.Checked = false;

            Label lblActAmnt = (Label)e.Row.FindControl("lblActAmnt");
            Label lblPreAmnt = (Label)e.Row.FindControl("lblPreAmnt");
            Label lblExpItem = (Label)e.Row.FindControl("lblExpItem");

            //DataSet dsCodes = new DataSet();
            //DataTable dtCodes = new DataTable();
            //DataTable dt = new DataTable();
            //DataView view;
            //if (Session["dsCodes"] != null)
            //{
            //    dtCodes = (DataTable)Session["dsCodes"];
            //    string expr = "CodeID = 'EXPITEM' and Description = '" + lblExpItem.Text + "'";
            //    view = new DataView(dtCodes, expr, "CodeValue1", DataViewRowState.CurrentRows);
            //    dt = view.ToTable();
            //}
            //else
            //{
            //    string strExp = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "EXPITEM");
            //    List<CodeValueVO> lstExp = ser.Deserialize<List<CodeValueVO>>(strExp);
            //    dsCodes.Tables.Add(Utility.ConvertToDataTable(lstExp));
            //    dt = dsCodes.Tables[0];
            //}
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
            Label lblExpDate = (Label)e.Row.FindControl("lblExpDate");
            Label lblFromDate = (Label)e.Row.FindControl("lblFromDate");
            if (lblExpDate.Text == string.Empty)
            {
                lblExpDate.Text = lblFromDate.Text;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void gvPOPark_RowCommand(object sender, GridViewCommandEventArgs e)
    {
    }

    private void CalculateTotalsPark()
    {
        expTotal = 0; grandTotal = 0; preExpTotal = 0;

        foreach (GridViewRow row1 in gvExpPark.Rows)
        {
            Label lblPreAmnt = (Label)row1.FindControl("lblPreAmnt");
            preExpTotal = preExpTotal + Convert.ToDouble(lblPreAmnt.Text);

            Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
            expTotal = expTotal + Convert.ToDouble(lblActAmnt.Text);
        }

        grandTotal = expTotal + preExpTotal;

        if (expTotal == 0)
            grandTotal = preExpTotal;
        else
            grandTotal = expTotal;

        lblGrandTotalAmntPark.Text = grandTotal.ToString();
        if (Session["LmtExceeded"].ToString().ToLower() == "y")
        {
            lblGrandTotalPark.Style["color"] = lblGrandTotalAmntPark.Style["color"] = "Red";
            lblGrandTotalPark.ToolTip = lblGrandTotalAmntPark.ToolTip = "Amount exceeded maximum limit.";
        }
        else
        {
            lblGrandTotalPark.Style["color"] = lblGrandTotalAmntPark.Style["color"] = "Green";
            lblGrandTotalPark.ToolTip = lblGrandTotalAmntPark.ToolTip = "Amount is within the maximum limit.";
        }
    }

    protected void btnApprovePark_Click(object sender, EventArgs e)
    {
        btnSendToVendYesPark.Attributes.Add("onclick", "javascript:return ValEmail('" + txtVendEmailApprPark.ClientID + "', '" + dvVendMsgPark.ClientID + "');");
        btnSendToVendNoPark.Attributes.Add("onclick", "javascript:showLoadOnTypeChnge();");
        txtVendEmailApprPark.Text = hdnVendEmailPark.Value == null ? string.Empty : hdnVendEmailPark.Value;
        pop_EditPOPark.Show();
        popConfirmPark.Show();
        txtVendEmailApprPark.Focus();
    }

    protected void btnRejectPark_Click(object sender, EventArgs e)
    {
        btnCommentsSavePark.Attributes.Add("onclick", "javascript:return validateComents('" + txtCommentsPark.ClientID + "', '" + dvErrorcPark.ClientID + "');");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPOPark.Show();
        else
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        popup_CommentsPark.Show();
        dvErrorcPark.InnerHtml = "Please provide comments to Reject the request. Press Close to undo.";
        dvErrorcPark.Style["color"] = "Red";
        txtCommentsPark.Visible = true;
        btnCommentsSavePark.Visible = true;
        btnCommentsClosePark.Visible = true;
        widgetCommentsPark.InnerHtml = ShowPreviousComments();
    }

    protected void LoadEditDataPark(object sender, EventArgs e)
    {
        LoadEditDataPark(null);
    }

    protected void LoadEditPODataPark(object sender, EventArgs e)
    {
        LoadEditPODataPark(null);
    }

    protected void btnSendToVendYesPark_Click(object sender, EventArgs e)
    {
        string vendEmail = rblVendPark.SelectedIndex == 0 ? txtVendEmailApprPark.Text : txtVendEmailApprPark.Text + "@emailfax.com";
        string emailFaxFlg = rblVendPark.SelectedIndex == 0 ? "Y" : "N";
        ApproveWithVendorFlagPark(vendEmail, emailFaxFlg);
    }

    protected void btnSendToVendNoPark_Click(object sender, EventArgs e)
    {
        ApproveWithVendorFlagPark(string.Empty, string.Empty);
    }

    void ApproveWithVendorFlagPark(string vendEmail, string emailFaxFlg)
    {
        string expLineNo = string.Empty, reqID1 = string.Empty;
        string appString = "###";
        foreach (GridViewRow row1 in gvExp.Rows)
        {
            HiddenField hdnRequest = (HiddenField)row1.FindControl("hdnRequest");
            HiddenField hdnSeq = (HiddenField)row1.FindControl("hdnSeq");

            expLineNo += hdnSeq.Value + appString;
            reqID1 += hdnRequest.Value + appString;
        }
        int uID = Convert.ToInt32(Session["UserID"]);

        if (ddlTypeVar == 0)
        {
            int Cnt = 0;
            DataSet dt = (DataSet)Session["dsExp"];
            ReimburseMulVO rem = new ReimburseMulVO();

            foreach (GridViewRow gvr in gvExpPark.Rows)
            {
                CheckBox cb = (CheckBox)gvr.FindControl("chkIsPenReimb");
                if (cb.Checked != (dt.Tables[0].Rows[gvr.RowIndex]["reimbursable"].ToString() == "Y" ? true : false))
                {
                    remb += cb.Checked == true ? "Y" + appString : "N" + appString;
                    compCode += Session["CompCode"] + appString;
                    modifiedby += uID + appString;
                    orgId += Session["OrgID"] + appString;
                    requestid += Session["ReqID"].ToString() + appString;
                    explineNo += dt.Tables[0].Rows[gvr.RowIndex]["expLineNo"].ToString() + appString;
                    Cnt++;
                }
            }
            if (Cnt > 0)
            {
                rem.reimbursable = remb.Substring(0, remb.Length - 3);
                rem.compCode = compCode.Substring(0, compCode.Length - 3);
                rem.modifiedBy = modifiedby.Substring(0, modifiedby.Length - 3);
                rem.orgId = orgId.Substring(0, orgId.Length - 3);
                rem.requestId = requestid.Substring(0, requestid.Length - 3);
                rem.expLineNo = explineNo.Substring(0, explineNo.Length - 3);
                string retRemb = xms.updateReqreimburseMul(rem);
            }
        }

        RequestVO req = new RequestVO();
        req.approved = "1";
        req.preApproved = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        req.orgId = Session["OrgID"].ToString();
        req.reqId = Session["ReqID"].ToString();
        req.type = "0";
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = Session["User_Req"].ToString();
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = string.Empty;
        req.vendorEmail = vendEmail;
        req.emailFaxFlag = emailFaxFlg;
        req.parkDate = string.Empty;
        req.parkDays = 0;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        bool pre = false;
        if (Convert.ToInt32(Session["Type"]) == 1)
            pre = true;

        string retStr = xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));

        Session.Remove("dsSt_pen");
        Session.Remove("dsSt_App");
        Session.Remove("dsSt_Rej");
        Session.Remove("dsSt_pen_pre");
        Session.Remove("dsSt_App_pre");
        Session.Remove("dsSt_Rej_pre");
        Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_App_po");
        Session.Remove("dsSt_Rej_po");
        Session.Remove("dsSt_park_po");

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
        {
            BindApGrid();
            BindApAppGrid();
            BindApRejGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen"]).Tables[0].Rows.Count;
            gvApDetailsPark.DataBind();
        }
        else if (ddlTypeVar == 1)
        {
            BindPen_APGrid_Pre();
            BindApp_APGrid_Pre();
            BindRej_APGrid_Pre();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_pre"]).Tables[0].Rows.Count;
            gvApDetailsPark.DataBind();
        }
        else
        {
            BindPen_APGrid_PO();
            BindApp_APGrid_PO();
            BindRej_APGrid_PO();
            BindPark_APGrid();
            Session["APPendingExpensesCnt"] = ((DataSet)Session["dsSt_pen_po"]).Tables[0].Rows.Count;
        }
        ReloadUserControls();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
        {
            dvPoError.InnerHtml = "Request has been approved.";
            dvPoError.Style.Add("color", "Green");
            btnApprovePO.Visible = false;
            btnRejectPO.Visible = false;
            pop_EditPO.Hide();
        }
        else
        {
            dvError_Pen.InnerHtml = "Request has been approved.";
            dvError_Pen.Style.Add("color", "Green");
            btnApprove.Visible = false;
            btnReject.Visible = false;
            popup.Hide();
        }
    }

    #endregion

    # region Export

    protected void ExportPark(object sender, EventArgs e)
    {
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
        popExpData_PenPark.Show();
    }

    private string PrintAndEmailPenPark()
    {
        string retStr = string.Empty;
        string pdfText = string.Empty;
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;

        if (hdnMailTo_penPark.Value.ToLower().Contains("vendor"))
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), "VENDOR", Session["Email"].ToString());
        else
            pdfText = xms.getExpReceiptToAttach(Convert.ToInt32(Session["ReqID"]), Convert.ToInt32(Session["OrgID"]), ddlTypeVar == 0 || ddlTypeVar == 1 ? string.Empty : txtPOTripStrtDatePark.Text, Session["Email"].ToString());

        string[] arrExpCodes = new string[txtMulEmail_penPark.Text.Split(',').Length];
        arrExpCodes = txtMulEmail_penPark.Text.Split(',');
        for (int i = 0; i < arrExpCodes.Length; i++)
        {
            if (ddlTypeVar == 0 || ddlTypeVar == 1)
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurposePark.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            else
                retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurposePark.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
        }
        if (dvCCEmail_penPark.Style["display"] == "block" && txtCCEmail_penPark.Text != null)
        {
            string[] arrCCEmails = new string[txtCCEmail_penPark.Text.Split(',').Length];
            arrCCEmails = txtCCEmail_penPark.Text.Split(',');
            for (int i = 0; i < arrCCEmails.Length; i++)
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: Expense Report RequestID:" + Session["ReqID"].ToString() + " - $" + Convert.ToInt32(Session["AmountToExp"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Expense Report<br /><br /> RequestID&nbsp; :" + Session["ReqID"].ToString() + ".<br />Purpose&nbsp;:" + txtPurposePark.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["AmountToExp"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
                else
                    retStr = xms.sendMailWithAttachment(arrExpCodes[i], string.Empty, "ApproveIt: PO Report PONO:" + Session["PONum"].ToString() + " - $" + Convert.ToDouble(Session["POGrandTotal"]) + " - " + Session["UserNametoExp"].ToString(), "Hi! <br /><br /> Attached is your Purchase Order Report<br /><br /> PONO&nbsp; :" + Session["PONum"].ToString() + ".<br />Purpose&nbsp;:" + txtPoPurposePark.Text + ".<br />AddedBy&nbsp;:" + Session["UserNametoExp"].ToString() + ".<br />Amount&nbsp;:$" + Convert.ToInt32(Session["POGrandTotal"]), Convert.ToInt32(Session["OrgID"]), pdfText, Session["CompCode"].ToString());
            }
        }
        txtMulEmail_penPark.Text = string.Empty;
        txtCCEmail_penPark.Text = string.Empty;
        return retStr;
    }

    protected void PenExportAndEmailPark(object sender, EventArgs e)
    {
        btnSave_penPark.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_penPark.Text + "', '" + DivEmailErr_penPark.ClientID + "');");
        hdnMailTo_penPark.Value = "User";
        dvExpDataMsg_penPark.InnerHtml = string.Empty;
        DivEmailErr_penPark.InnerHtml = string.Empty;
        txtMulEmail_penPark.Text = string.Empty;
        dvCCEmail_penPark.Style["display"] = "none";
        popMulEmail_penPark.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
        popExpData_PenPark.Show();
    }

    protected void AddPenCCEmailPark(object sender, EventArgs e)
    {
        dvCCEmail_penPark.Style["display"] = "block";
        txtCCEmail_penPark.Text = string.Empty;
        popMulEmail_penPark.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
        popExpData_PenPark.Show();
    }

    protected void ValidateEmail_penPark(object sender, EventArgs e)
    {
        try
        {
            ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
            string str = PrintAndEmailPenPark();
            if (str.ToLower().Contains("succes"))
            {
                if (ddlTypeVar == 0 || ddlTypeVar == 1)
                {
                    dvErrorPark.Style["color"] = "Green";
                    dvErrorPark.InnerHtml = "Mail sent successfully.";
                }
                else
                {
                    dvPoErrorPark.Style["color"] = "Green";
                    dvPoErrorPark.InnerHtml = "Mail sent successfully.";
                }
                popMulEmail_penPark.Hide();
                popExpData_PenPark.Hide();
            }
            else
            {
                DivEmailErr_penPark.Style["color"] = "Red";
                DivEmailErr_penPark.InnerHtml = "Unable to send email. Please try again.";
                popMulEmail_penPark.Show();
                popExpData_PenPark.Show();
            }
        }
        catch (Exception ex)
        {
            DivEmailErr_penPark.Style["color"] = "Red";
            DivEmailErr_penPark.InnerHtml = "Unable to send email. Please try again.";
            popMulEmail_penPark.Show();
            popExpData_PenPark.Show();
        }
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
    }

    protected void PrintPOPark(object sender, EventArgs e)
    {
        string startDate = ddlType.SelectedValue == "ER" || ddlType.SelectedValue == "PA" ? string.Empty : txtPOTripStrtDatePark.Text;

        //encrypt email
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string eMail = enc.Encrypt(Session["Email"].ToString(), key);
        //encrypt email

        ScriptManager.RegisterStartupScript(this, GetType(), "Print Expense", "window.open('print.aspx?rq=" + Session["ReqID"].ToString() + "&sd=" + startDate + "&em=" + eMail + "', 'Attachment', 'resizable=1, scrollbars=1, width=800, height=800');", true);

        popExpData_PenPark.Show();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
    }

    protected void SendExpVendorEmail_penPark(object sender, EventArgs e)
    {
        btnSave_penPark.Attributes.Add("onclick", "javascript:return ValEmail('" + txtMulEmail_penPark.ClientID + "', '" + DivEmailErr_penPark.ClientID + "');");
        //btnSave.Attributes.Add("onclick", "javascript:return ValEmail();");

        hdnMailTo_penPark.Value = "Vendor";
        dvExpDataMsg_penPark.InnerHtml = string.Empty;
        DivEmailErr_penPark.InnerHtml = string.Empty;
        txtMulEmail_penPark.Text = string.Empty;
        dvCCEmail_penPark.Style["display"] = "none";
        popMulEmail_penPark.Show();

        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
        popExpData_PenPark.Show();
    }

    #endregion

    # region View ExpLineItems

    private void BlockViewFieldsPark()
    {
        dvEditVPreVendorPark.Style["display"] = "none";
        dvEditVAgNamePark.Style["display"] = "none";
        dvEditVItNoPark.Style["display"] = "none";
        dvEditVEDPark.Style["display"] = "none";
        dvEditVCVPark.Style["display"] = "none";
        SpVOthercityPark.Style["display"] = "none";
        dvEditVFromcityPark.Style["display"] = "none";
        dvEditVFromOtherPark.Style["display"] = "none";
        dvEditVToCityPark.Style["display"] = "none";
        dvEditVToOtherPark.Style["display"] = "none";
        dvEditVFDPark.Style["display"] = "none";
        dvEditVTDPark.Style["display"] = "none";
        dvEditVTTPark.Style["display"] = "none";
        dvEditVLNPark.Style["display"] = "none";
        dvEditVReimbtPark.Style["display"] = "none";
        dvEditVPAPark.Style["display"] = "none";
    }

    protected void ViewExpDetailsPark(object sender, CommandEventArgs e)
    {
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndexPark.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);

        if (index == 0)
            btnVPrevPark.Visible = false;
        else
            btnVPrevPark.Visible = true;
        if (index == gvExpPark.Rows.Count - 1)
            btnVNextPark.Visible = false;
        else
            btnVNextPark.Visible = true;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnSeq = (HiddenField)row.Cells[0].FindControl("hdnSeq");
        HiddenField hdnAttCnt = (HiddenField)row.Cells[0].FindControl("hdnAttCnt");
        Session["AttCnt"] = hdnAttCnt.Value;
        hdnSeq1Park.Value = hdnSeq.Value;
        reqId = Convert.ToInt32(Session["ReqID"]);
        DataTable dsExpViewDetails = (DataTable)Session["dt"];
        GetViewExpItemData_Park(dsExpViewDetails, index);
    }

    private void GetViewExpItemData_Park(DataTable dsExpDetails, int index)
    {
        BlockViewFieldsPark();
        if (dsExpDetails.Rows.Count > 0)
        {
            DataSet dsCodes = new DataSet();
            DataTable dtCodes = new DataTable();
            //lblVExpCdPark.Text = dsExpDetails.Rows[index]["expItem"].ToString();
            //txtVAccCodePark.Text = dsExpDetails.Rows[index]["expItemAccCode"].ToString();
            txtVAccCodePark.Text = dsExpDetails.Rows[index]["AccountCode"].ToString() + "-" + dsExpDetails.Rows[index]["expItem"].ToString();
            txtVClassPark.Text = dsExpDetails.Rows[index]["className"].ToString();

            lblddlVExpTypePark.Text = dsExpDetails.Rows[index]["expType"].ToString();
            if (lblddlVExpTypePark.Text == "GENERAL")
            {
                lblVCatCodePark.Text = string.Empty;
                lblddlVJobCdPark.Text = string.Empty;
                lblVPhcdPark.Text = string.Empty;
                dvEditVJobPark.Style["display"] = "none";
                dvEditVPhsPark.Style["display"] = "none";
                dvEditVJCPark.Style["display"] = "none";
            }
            else
            {
                dvEditVJobPark.Style["display"] = "block";
                dvEditVPhsPark.Style["display"] = "block";
                dvEditVJCPark.Style["display"] = "block";
                lblddlVJobCdPark.Text = dsExpDetails.Rows[index]["jobCode"].ToString();
                lblVPhcdPark.Text = dsExpDetails.Rows[index]["phaseCode"].ToString();
                lblVCatCodePark.Text = dsExpDetails.Rows[index]["JCatCode"].ToString();
            }

            string[] arr = txtVAccCodePark.Text.Split('-');
            DataView dvCodes = GetExpCodeDetails(arr[1].Trim());
            Session["TestViewExp1"] = "1";

            if (dvCodes != null)
            {
                Session.Remove("TestViewExp1");
                DataTable dtSec = dvCodes.ToTable();
                if (dtSec.Rows[0]["CodeValue2"].ToString() == "Y")
                {
                    dvEditVEDPark.Style["display"] = "block";
                    //Assign values to ExpenseDate field
                    lblVDatePark.Text = dsExpDetails.Rows[index]["expDate"].ToString();
                }
                else
                {
                    dvEditVEDPark.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue3"].ToString() == "Y")
                {
                    dvEditVFDPark.Style["display"] = "block";
                    dvEditVTDPark.Style["display"] = "block";
                    //Assign values to From/To Dates field
                    lblVFromdatePark.Text = dsExpDetails.Rows[index]["FromDate"].ToString();
                    lblVTodatePark.Text = dsExpDetails.Rows[index]["ToDate"].ToString();
                }
                else
                {
                    dvEditVFDPark.Style["display"] = "none";
                    dvEditVTDPark.Style["display"] = "none";
                }

                if (dtSec.Rows[0]["CodeValue4"].ToString() == "Y")
                {
                    dvEditVCVPark.Style["display"] = "block";
                    //Assign values to CitiesVisited field
                    if (dsExpDetails.Rows[index]["citiesVstd"].ToString() == string.Empty)
                        lblVCityPark.Text = "0";
                    else
                        lblVCityPark.Text = dsExpDetails.Rows[index]["citiesVstd"].ToString();
                    if (lblVCityPark.Text == "Other")
                    {
                        SpVOthercityPark.Style.Add("Display", "block");
                        lblVOtherPark.Text = dsExpDetails.Rows[index]["otherCity"].ToString();
                    }
                    else
                        SpVOthercityPark.Style.Add("Display", "none");
                }
                else
                    dvEditVCVPark.Style["display"] = "none";

                if (dtSec.Rows[0]["CodeValue5"].ToString() == "Y")
                {
                    dvEditVFromcityPark.Style["display"] = "block";
                    dvEditVToCityPark.Style["display"] = "block";
                    //Assign values to FromCity field
                    lblVFromcityPark.Text = dsExpDetails.Rows[index]["FromCity"].ToString();
                    if (lblVOtherFromCityPark.Text == "Other")
                    {
                        dvEditVFromOtherPark.Style["display"] = "block";
                        lblVOtherFromCityPark.Text = dsExpDetails.Rows[index]["FromOtherCity"].ToString();
                    }
                    else
                        dvEditVFromOtherPark.Style.Add("Display", "none");

                    //Assign values to ToCity field
                    lblVTocityPark.Text = dsExpDetails.Rows[index]["ToCity"].ToString();
                    if (lblVTocityPark.Text == "Other")
                    {
                        dvEditVToOtherPark.Style["display"] = "block";
                        lblVOtherToCityPark.Text = dsExpDetails.Rows[index]["ToOtherCity"].ToString();
                    }
                    else
                        dvEditVToOtherPark.Style["display"] = "none";
                }
                else
                {
                    dvEditVFromcityPark.Style["display"] = "none";
                    dvEditVToCityPark.Style["display"] = "none";
                }

                if (dtSec.Rows[1]["CodeValue1"].ToString() == "Y")
                {
                    dvEditVTTPark.Style["display"] = "block";
                    dvEditVLNPark.Style["display"] = "block";
                    dvEditVAmtPark.Style["display"] = "block";
                    dvEditVSalesTaxPark.Style["display"] = "none";
                    lblVTotTripPark.Text = dsExpDetails.Rows[index]["totTrip"].ToString();
                    lblVLNormPark.Text = dsExpDetails.Rows[index]["LNorm"].ToString();
                    lblVReimbtPark.Text = dsExpDetails.Rows[index]["Reimbt"].ToString();
                    lblVActAmtPark.ReadOnly = true;
                    lblVPreAmtPark.ReadOnly = true;
                }
                else
                {
                    dvEditVTTPark.Style["display"] = "none";
                    dvEditVLNPark.Style["display"] = "none";
                    //dvEditVAmtPark.Style["display"] = "none";
                    dvEditVSalesTaxPark.Style["display"] = "block";
                    lblVActAmtPark.ReadOnly = false;
                    lblVPreAmtPark.ReadOnly = false;
                }

                if (dtSec.Rows[0]["CodeValue1"].ToString() == "Y")
                {
                    lblVPreVendorPark.Text = dsExpDetails.Rows[index]["PreferredVendor"].ToString();
                    lblAgNamePark.Text = dsExpDetails.Rows[index]["AgentName"].ToString();
                    lblVItNoPark.Text = dsExpDetails.Rows[index]["ItinararyNo"].ToString();
                    //if (lblVPreVendorPark.Text == string.Empty)
                    //{
                    //    dvEditVPreVendorPark.Style["display"] = "none";
                    //    dvEditVAgNamePark.Style["display"] = "none";
                    //    dvEditVItNoPark.Style["display"] = "none";
                    //}
                    //else
                    //{
                    dvEditVPreVendorPark.Style["display"] = "block";
                    dvEditVAgNamePark.Style["display"] = "block";
                    dvEditVItNoPark.Style["display"] = "block";
                    //}
                }
                else
                {
                    dvEditVPreVendorPark.Style["display"] = "none";
                    dvEditVAgNamePark.Style["display"] = "none";
                    dvEditVItNoPark.Style["display"] = "none";
                }
            }
            else if (Session["TestViewExp1"] == "1")
            {
                dvEditVEDPark.Style["display"] = "block";
                lblVDatePark.Text = dsExpDetails.Rows[index]["ExpDate"].ToString();
                dvEditVCVPark.Style["display"] = "block";
                lblVCityPark.Text = dsExpDetails.Rows[index]["CitiesVstd"].ToString();
            }
            else
            {
                Session.Remove("TestViewExp1");
                dvEditVEDPark.Style["display"] = "none";
                dvEditVCVPark.Style["display"] = "none";
            }

            lblVSalesTaxPark.Text = dsExpDetails.Rows[index]["taxAmount1"].ToString();
            lblVFoodTaxPark.Text = dsExpDetails.Rows[index]["taxAmount2"].ToString();
            lblVActAmtPark.Text = dsExpDetails.Rows[index]["actualAmount"].ToString();
            lblVPreAmtPark.Text = dsExpDetails.Rows[index]["preAmount"].ToString();
            lblVPayModePark.Text = dsExpDetails.Rows[index]["payMode"].ToString();
            lblVCityPark.Text = dsExpDetails.Rows[index]["citiesVstd"].ToString();
            if (lblVCityPark.Text == "Other")
            {
                SpVOthercityPark.Visible = true;
                lblVOtherPark.Text = dsExpDetails.Rows[index]["otherCity"].ToString();
            }
            else
                SpVOthercityPark.Visible = false;

            lblVcomntsPark.Text = dsExpDetails.Rows[index]["comments"].ToString();
            GetViewBudgetDataPark(dsExpDetails.Rows[index]["accountCode"].ToString());
            if (Convert.ToInt32(Session["AttCnt"]) > 0)
            {
                lnkViewAttachmentsPark.Style["display"] = "block";
                lblPenAttPark.Style["display"] = "none";
            }
            else
            {
                lnkViewAttachmentsPark.Style["display"] = "none";
                lblPenAttPark.Style["display"] = "block";
                lblPenAttPark.InnerText = "No attachments to display.";
            }

            popup_VExpPark.Show();
            popupPark.Show();
        }
    }

    protected void btnVCancelPark_Click(object sender, EventArgs e)
    {
        CalculateTotalsPark();
        popup_VExpPark.Hide();
        popupPark.Show();
    }

    protected void ViewPreviousExpPark(object sender, EventArgs e)
    {
        hdnRowIndexPark.Value = (Convert.ToInt32(hdnRowIndexPark.Value) - 1).ToString();
        int index = Convert.ToInt32(hdnRowIndexPark.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnSeq1Park.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewFieldsPark();
        GetViewExpItemData_Park(dsExpEditDetails, index);

        if (index == 0)
            btnVPrevPark.Visible = false;
        else
            btnVPrevPark.Visible = true;
        if (index == gvExpPark.Rows.Count - 1)
            btnVNextPark.Visible = false;
        else
            btnVNextPark.Visible = true;
    }

    protected void ViewNextExpPark(object sender, EventArgs e)
    {
        hdnRowIndexPark.Value = (Convert.ToInt32(hdnRowIndexPark.Value) + 1).ToString();
        int index = Convert.ToInt32(hdnRowIndexPark.Value);
        DataTable dsExpEditDetails = (DataTable)Session["dt"];
        hdnSeq1Park.Value = dsExpEditDetails.Rows[index]["ExpLineNo"].ToString();
        BlockViewFieldsPark();
        GetViewExpItemData_Park(dsExpEditDetails, index);

        if (index == 0)
            btnVPrevPark.Visible = false;
        else
            btnVPrevPark.Visible = true;
        if (index == gvExpPark.Rows.Count - 1)
            btnVNextPark.Visible = false;
        else
            btnVNextPark.Visible = true;
    }

    #endregion

    #region Comments

    protected void CommentsPark(object sender, EventArgs e)
    {
        //dvCommentsEntry.Visible = false;
        txtCommentsPark.Visible = false;
        btnCommentsSavePark.Visible = false;
        widgetCommentsPark.Visible = true;
        widgetCommentsPark.InnerHtml = ShowPreviousComments();
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 2)
            pop_EditPOPark.Show();
        else
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        popup_CommentsPark.Show();
    }

    protected void btnCommentsClosePark_Click(object sender, EventArgs e)
    {
        txtCommentsPark.Text = string.Empty;
        Session.Remove("dsSt");
        ddlTypeVar = ddlType.SelectedValue == "ER" ? 0 : ddlType.SelectedValue == "PA" ? 1 : 2;
        if (ddlTypeVar == 0)
            BindApGrid();
        else if (ddlTypeVar == 1)
            BindPen_APGrid_Pre();
        else
        {
            //BindPen_APGrid_PO();
            BindPark_APGrid();
        }
        if (ddlTypeVar == 0 || ddlTypeVar == 1)
        {
            CalculateTotalsPark();
            popupPark.Show();
        }
        else
            pop_EditPOPark.Show();
        popup_CommentsPark.Hide();
    }

    #endregion

    #region Attachments

    protected void DisplayAttachmentsPark(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        HiddenField hdnReq = row.FindControl("hdnReq") as HiddenField;
        HiddenField hdnSeq = row.FindControl("hdnSeq") as HiddenField;

        //dvAtt.InnerHtml = Attachments(Convert.ToInt32(hdnSeq.Value));
        Session["SeqIdForAtt"] = hdnSeq.Value;
        AttachmentsPark(Convert.ToInt32(hdnSeq.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmntsPark.DataSource = ds;
            gvAttchmntsPark.DataBind();
        }
        CalculateTotalsPark();
        popupPark.Show();
        popup_AttPark.Show();
    }

    private string AttachmentsPark(int seq)
    {
        string str = xms.getAttachmentItems(Convert.ToInt32(Session["ReqID"]), seq, Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString());
        List<AttachmentVO> lstAtt = ser.Deserialize<List<AttachmentVO>>(str);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(lstAtt));
        if (ds.Tables[0].Rows.Count > 0)
            Session["AttchList"] = ds;
        string str1 = string.Empty;
        return str1;
    }

    protected void gvAttchmntsPark_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmnt");
            //System.Web.UI.WebControls.Image imgAttchmnt = (System.Web.UI.WebControls.Image)e.Row.FindControl("imgAttchmnt");
            DataSet ds = (DataSet)Session["AttchList"];
            string extension = Path.GetExtension(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString());
            if (extension.ToLower().Contains("pdf"))
                imgAttchmnt.ImageUrl = "images/pdfIcon.png";
            else
            {
                byte[] bytes = xms.getExpDraftsById(ds.Tables[0].Rows[e.Row.RowIndex]["fileName"].ToString(), 2);
                string base64ImageString = ConvertBytesToBase64(bytes);
                imgAttchmnt.ImageUrl = "data:image/jpg;base64," + base64ImageString;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void DownLdAttPark(object sender, EventArgs e)
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
        popup_AttPark.Show();
        popupPark.Show();
    }

    protected void DisplayLineAttachmentsPark(object sender, EventArgs e)
    {
        AttachmentsPark(Convert.ToInt32(hdnSeq1Park.Value));
        ds = (DataSet)Session["AttchList"];
        if (ds.Tables[0].Rows.Count > 0)
        {
            gvAttchmntsPark.DataSource = ds;
            gvAttchmntsPark.DataBind();
        }
        popupPark.Show();
        popup_VExpPark.Show();
        popup_AttPark.Show();
    }
    #endregion

    # region ViewEditPOLineItems

    protected void ddlDepartmentPark_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (Session["AccountBy"].ToString() == "DEPT")
        {
            Session.Remove("dtExpItem");
            if (ddlJobs.SelectedValue != "0")
                LoadDetailsByJob(true, ddlJobsPark, ddlDepartmentPark, ddlExpItemPark, ddlDepartmentPark.SelectedValue);
            else
            {
                var str = xms.getExpItemsByDept(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), ddlDepartmentPark.SelectedValue, 2, string.Empty);
                List<DeptVO> lst = ser.Deserialize<List<DeptVO>>(str);
                DataTable dt1 = Utility.ConvertToDataTable(lst);
                ddlExpItemPark.DataSource = dt1.DefaultView.ToTable(true, "expItem", "accName");
                ddlExpItemPark.DataBind();
                ddlExpItemPark.Items.Insert(0, "Please Select");
                ddlExpItemPark.Items.FindByText("Please Select").Value = "0";
            }
        }
        if (Session["UserDept"] == null)
            GetUserDept();
        if (Session["UserDept"].ToString() != ddlDepartmentPark.SelectedValue)
            dvCommts_PenPark.Visible = true;
        else
            dvCommts_PenPark.Visible = false;

        pop_EditPOPark.Show();
        popAddPOPark.Show();
    }

    protected void ddlExpItemPark_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlExpItemPark.SelectedValue != "0")
        {
            BindItemsCode(ddlItemCodePark, ddlExpItemPark.SelectedValue);
            DataTable dt = (DataTable)Session["dtExpItem"];
            string expr = "accName = '" + ddlExpItemPark.SelectedValue + "'";
            DataView view = new DataView(dt, expr, "accName", DataViewRowState.CurrentRows);
            txtAccCodePark.Text = view.ToTable().Rows[0]["accountCode"].ToString();

            CalOnAccCode_Park();

            //Calculate Amount/BalAfterPO

            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvPOPark.Rows)
            {
                Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
                Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
                if (lblPOAccCode.Text == txtAccCodePark.Text)
                    allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
            }
            hdnPORowTotAmntPark.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmountPark.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtPoAmountPark.Text = "0";
            txtUnitPricePark.Text = "0";
            txtShipCostPark.Text = "0";
            txtBalAfterPOPark.Text = (ut.NullSafeDouble(txtRemainPark.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(txtPoAmountPark.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
        pop_EditPOPark.Show();
        popAddPOPark.Show();
    }

    protected void ddlItemCodePark_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlItemCodePark.SelectedValue != "0")
        {
            DataTable dt = (DataTable)Session["ItemCodes"];
            string exp = "ItemCode='" + ddlItemCodePark.SelectedValue + "'";
            DataView dvitems = new DataView(dt, exp, "ItemCode", DataViewRowState.CurrentRows);
            DataTable dtemp = dvitems.ToTable();
            txtDescrPark.Text = dtemp.Rows[0]["Description"].ToString();
        }
        pop_EditPOPark.Show();
        popAddPOPark.Show();
    }

    protected void EditPODetailsPark(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        Session.Remove("UserDept");
        dvPOErrMsgPark.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndexPark.Value = arg[0];
        Session["RowIndex"] = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1Park.Value = arg[1];
        Session["Seq1"] = arg[1];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = dtPO.Clone();
        dtPO_Temp.ImportRow(dtPO.Rows[index]);
        Session["dtPO_Temp"] = dtPO_Temp;

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDatePark.Text);
        int year = dateTime.Year;

        if (Session["FiscalDate"] == null)
            MonthFilterPark(year);

        foreach (GridViewRow row1 in gvPOPark.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmntPark.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmountPark.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;
        //btnSavePO.Visible = true;
        GetPOLineItemDataPark(dtPO, index);
        lbPOlHeading_penPark.Text = "Edit PO Details";
        ToggleFieldsPark(true);
        btSaveEditPOPark.Attributes.Add("onclick", "javascript:return ValidateApprovalsEditPO('" + ddlExpItemPark.ClientID + "', '" + txtDescrPark.ClientID + "','" + dvCommts_PenPark.ClientID + "''" + txtComntsPark.ClientID + "','" + txtQuantityPark.ClientID + "','" + txtUnitPricePark.ClientID + "','" + txtShipCostPark.ClientID + "','" + txtPkgUnitPark.ClientID + "','" + dvPOErrMsgPark.ClientID + "');");
    }

    protected void ViewPODetailsPark(object sender, CommandEventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        dvPOErrMsgPark.InnerHtml = string.Empty;

        GridViewRow row = (GridViewRow)((LinkButton)sender).Parent.Parent;
        string[] arg = new string[2];
        arg = e.CommandArgument.ToString().Split(';');
        hdnRowIndexPark.Value = arg[0];
        int index = Convert.ToInt32(arg[0]);
        hdnSeq1Park.Value = arg[1];

        dtPO = (DataTable)Session["dtPO"];
        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDatePark.Text);
        int year = dateTime.Year;

        if (Session["dsFiscalDate"] == null)
            MonthFilterPark(year);

        foreach (GridViewRow row1 in gvPOPark.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == dtPO.Rows[row.RowIndex]["accountCode"].ToString())
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmntPark.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmountPark.Text)).ToString();
        Session["allRowsAmntVal"] = allRowsAmntVal;

        GetPOLineItemDataPark(dtPO, index);
        lbPOlHeading_penPark.Text = "View PO Details";
        btSaveEditPOPark.Visible = false;
        ToggleFieldsPark(false);
    }

    protected void gvPOPark_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkItemCode = (LinkButton)e.Row.FindControl("lnkItemCode");
            Label lblItemCode = (Label)e.Row.FindControl("lblItemCode");
            HiddenField hdnItemNote = (HiddenField)e.Row.FindControl("hdnItemNote");
            HiddenField hdnBdgLmt = (HiddenField)e.Row.FindControl("hdnBdgLmt");
            if (hdnBdgLmt.Value.ToLower() == "y")
            {
                e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                e.Row.Style["background-color"] = "#FFCCCC";
            }
            else
            {
                if (txtBalAfterPOPark.Text.Contains("-"))
                {
                    e.Row.ToolTip = "This POItem has exceeded Budget limit.";
                    e.Row.Style["background-color"] = "#FFCCCC";
                }
            }
            if (hdnItemNote.Value == string.Empty)
            {
                lblItemCode.Visible = true;
                lnkItemCode.Visible = false;
            }
            else
            {
                lblItemCode.Visible = false;
                lnkItemCode.Visible = true;
            }

            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    private void GetPOLineItemDataPark(DataTable dt, int index)
    {
        Session.Remove("dtExpItem");
        if (ddlJobsPark.SelectedValue != "0")
            LoadDetailsByJob(false, ddlJobsPark, ddlDepartmentPark, ddlExpItemPark, dt.Rows[index]["deptCode"].ToString());
        else
        {
            BindDepartments(ddlDepartmentPark, 1);
            ddlDepartmentPark.SelectedValue = dt.Rows[index]["deptCode"].ToString();
            BindPoApprExpenseItems(ddlExpItemPark, ddlDepartmentPark.SelectedValue, 1);
        }
        ddlExpItemPark.SelectedValue = dt.Rows[index]["expItem"].ToString();
        BindItemsCode(ddlItemCodePark, ddlExpItemPark.SelectedValue);
        txtQuantityPark.Text = dt.Rows[index]["quantity"].ToString();
        txtPkgUnitPark.Text = dt.Rows[index]["packageUnit"].ToString();
        txtUnitPricePark.Text = dt.Rows[index]["unitPrice"].ToString();
        txtPoAmountPark.Text = dt.Rows[index]["PreAmount"].ToString();
        txtDescrPark.Text = dt.Rows[index]["comments"].ToString();
        txtShipCostPark.Text = (ut.NullSafeDouble(dt.Rows[index]["shippingCost"])).ToString();
        chkCalTaxPark.Checked = dt.Rows[index]["taxCalCulated"].ToString() == "1" ? true : false;
        txtVendPtNoPark.Text = dt.Rows[index]["vendpartno"].ToString();
        txtTaxPercentPark.Text = chkCalTaxPark.Checked == true ? dt.Rows[index]["TaxPercent"].ToString() : Session["Tax"].ToString();
        ddlItemCodePark.SelectedValue = dt.Rows[index]["ItemCode"].ToString();
        txtReqDelDatePark.Text = dt.Rows[index]["reqDeliveryDate"].ToString();

        string expr = "expItem = '" + ddlExpItemPark.SelectedValue + "'";
        DataView view = new DataView(dt, expr, "expItem", DataViewRowState.CurrentRows);
        txtAccCodePark.Text = view.ToTable().Rows[0]["accountCode"].ToString();
        double x = 0;
        x = ((ut.NullSafeDouble(txtUnitPricePark.Text) * ut.NullSafeDouble(txtQuantityPark.Text)) * ((ut.NullSafeDouble(dt.Rows[index]["taxPercent"].ToString())) / 100));
        txttaxPark.Text = chkCalTaxPark.Checked == true ? (x.ToString() != "0" ? x.ToString("#.##") : x.ToString()) : "0.00";
        CalOnAccCode_Park();
        txtBalAfterPOPark.Text = (ut.NullSafeDouble(txtRemainPark.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemainPark.Text)) - (ut.NullSafeDouble(allRowsAmntVal))).ToString("#.##");

        pop_EditPOPark.Show();
        popAddPOPark.Show();
    }

    private void ToggleFieldsPark(bool check)
    {
        ddlExpItemPark.Enabled = check;
        txtAccCodePark.Enabled = check;
        txtQuantityPark.Enabled = check;
        txtPkgUnitPark.Enabled = check;
        txtUnitPricePark.Enabled = check;
        txtPoAmountPark.Enabled = check;
        txtDescrPark.Enabled = check;
        txtShipCostPark.Enabled = check;
        txttaxPark.Enabled = check;
        txtTaxPercentPark.Enabled = check;
        ddlDepartmentPark.Enabled = check;
        ddlItemCodePark.Enabled = check;
        txtComntsPark.Enabled = check;
        txtVendPtNoPark.Enabled = check;
        txtReqDelDatePark.Enabled = check;
    }

    protected void btSaveEditPOPark_Click(object sender, EventArgs e)
    {
        foreach (GridViewRow row1 in gvPOPark.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            Label lblPOAmnt = (Label)row1.FindControl("lblPOAmnt");
            if (lblPOAccCode.Text == txtAccCodePark.Text)
                allRowsAmntVal += ut.NullSafeDouble(lblPOAmnt.Text);
        }
        hdnPORowTotAmntPark.Value = (allRowsAmntVal - ut.NullSafeDouble(txtPoAmountPark.Text)).ToString();

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
            dtPO.Columns.Add("balanceAfterpo");
            dtPO.Columns.Add("shippingCost");
            dtPO.Columns.Add("taxCalCulated");
            dtPO.Columns.Add("vendpartno");
            dtPO.Columns.Add("TaxPercent");
            dtPO.Columns.Add("ItemCode");
            dtPO.Columns.Add("MgrGroupCode");
            dtPO.Columns.Add("DeptCode");
            dtPO.Columns.Add("DeptChgCmt");
            dtPO.Columns.Add("reqDeliveryDate");
        }
        else
            dtPO = (DataTable)Session["dtPO"];

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp = (DataTable)Session["dtPO_Temp"];

        double taxPercent = chkCalTaxPark.Checked == true ? (ut.NullSafeDouble(txtTaxPercentPark.Text == string.Empty ? "0" : txtTaxPercentPark.Text)) : 0;
        double chkTax = chkCalTaxPark.Checked == true ? ((ut.NullSafeDouble(taxPercent)) / 100) : 0;
        double tax = ut.NullSafeDouble(((ut.NullSafeDouble(txtUnitPricePark.Text) * ut.NullSafeDouble(txtQuantityPark.Text)) * chkTax).ToString("#.##"));
        double POamnt = ut.NullSafeDouble(((((ut.NullSafeDouble(txtQuantityPark.Text)) * (ut.NullSafeDouble(txtUnitPricePark.Text))) + (ut.NullSafeDouble(tax))) + ut.NullSafeDouble(txtShipCostPark.Text)).ToString("#.##"));

        int edPOFlag = 0;
        if (ddlExpItemPark.SelectedValue != dtPO_Temp.Rows[0]["expItem"].ToString())
            edPOFlag = 1;
        else if (txtAccCodePark.Text != dtPO_Temp.Rows[0]["accountCode"].ToString())
            edPOFlag = 1;
        else if (txtQuantityPark.Text != dtPO_Temp.Rows[0]["quantity"].ToString())
            edPOFlag = 1;
        else if (txtPkgUnitPark.Text != dtPO_Temp.Rows[0]["packageUnit"].ToString())
            edPOFlag = 1;
        else if (txtUnitPricePark.Text != dtPO_Temp.Rows[0]["unitPrice"].ToString())
            edPOFlag = 1;
        else if (txtPoAmountPark.Text != dtPO_Temp.Rows[0]["PreAmount"].ToString())
            edPOFlag = 1;
        else if (txtDescrPark.Text != dtPO_Temp.Rows[0]["comments"].ToString())
            edPOFlag = 1;
        else if (txtShipCostPark.Text != dtPO_Temp.Rows[0]["shippingCost"].ToString())
            edPOFlag = 1;
        else if (txtVendPtNoPark.Text != dtPO_Temp.Rows[0]["vendpartno"].ToString())
            edPOFlag = 1;
        else if (txtReqDelDatePark.Text != dtPO_Temp.Rows[0]["reqDeliveryDate"].ToString())
            edPOFlag = 1;
        else if (chkCalTaxPark.Checked != Convert.ToBoolean(dtPO_Temp.Rows[0]["taxCalCulated"]))
            edPOFlag = 1;
        if (edPOFlag == 1)
        {
            int row = Convert.ToInt32(Session["RowIndex"]);
            ExpeseDetailsVO expensedetails = new ExpeseDetailsVO();

            expensedetails.reqId = Convert.ToInt32(Session["ReqID"]);
            expensedetails.expLineNo = Convert.ToInt32(Session["Seq1"]);
            expensedetails.expItem = ddlExpItemPark.SelectedValue;
            expensedetails.quantity = ut.NullSafeDouble(txtQuantityPark.Text);
            expensedetails.packageUnit = txtPkgUnitPark.Text;
            expensedetails.unitPrice = ut.NullSafeDouble(txtUnitPricePark.Text);
            expensedetails.actualAmount = 0;
            expensedetails.comments = txtDescrPark.Text;
            expensedetails.orgId = Convert.ToInt32(Session["OrgID"]);
            expensedetails.compCode = Session["CompCode"].ToString();
            expensedetails.expDate = string.Empty;
            expensedetails.citiesVstd = string.Empty;
            expensedetails.othercity = string.Empty;
            expensedetails.expType = string.Empty;
            expensedetails.payMode = string.Empty;
            expensedetails.jobCode = string.Empty;
            expensedetails.phaseCode = string.Empty;
            expensedetails.JCatCode = string.Empty;
            expensedetails.preAmount = POamnt;
            expensedetails.status = "Saved";
            expensedetails.statusId = 3;
            expensedetails.stateId = string.Empty;
            expensedetails.startDate = txtPOTripStrtDatePark.Text;
            expensedetails.amtSpent = 0;
            expensedetails.purpose = string.Empty;
            expensedetails.agentName = string.Empty;
            expensedetails.bookedDate = string.Empty;
            expensedetails.detailsFlag = 1;
            expensedetails.masterFlag = 0;
            expensedetails.automileageFlag = 0;
            expensedetails.fromCity = string.Empty;
            expensedetails.otherFromCity = string.Empty;
            expensedetails.toCity = string.Empty;
            expensedetails.otherToCity = string.Empty;
            expensedetails.preferredVendor = ddlPreVendorPark.SelectedItem.Text;
            expensedetails.itinararyNo = string.Empty;
            expensedetails.fromDate = string.Empty;
            expensedetails.toDate = string.Empty;
            expensedetails.currency = string.Empty;
            expensedetails.exp = string.Empty;
            expensedetails.accountCode = txtAccCodePark.Text;
            expensedetails.codeId = string.Empty;
            expensedetails.codeValue = string.Empty;
            expensedetails.managerEmail = string.Empty;
            expensedetails.managerId = Convert.ToInt32(ddlPOMgrEmailPark.SelectedValue);
            expensedetails.LNorm = 0;
            expensedetails.totTrip = 0;
            expensedetails.reimbt = 0;
            expensedetails.userId = Convert.ToInt32(Session["UserID"]);
            expensedetails.preApproved = 2;
            expensedetails.companyCar = string.Empty;
            expensedetails.otherPlace = string.Empty;
            expensedetails.outOfCity = false;
            expensedetails.shippingCost = ut.NullSafeDouble(txtShipCostPark.Text);
            expensedetails.taxPercent = taxPercent;
            expensedetails.balAfterPO = ut.NullSafeDouble(ut.NullSafeDouble(txtRemainPark.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemainPark.Text)) - (ut.NullSafeDouble(hdnPORowTotAmntPark.Value) + ut.NullSafeDouble(POamnt)));
            expensedetails.taxAmount1 = tax;
            expensedetails.taxAmount2 = 0;
            expensedetails.taxAmount3 = 0;
            expensedetails.reimbursable = string.Empty;
            expensedetails.taxCalculated = chkCalTaxPark.Checked == true ? 1 : 0;
            expensedetails.vendPartno = txtVendPtNoPark.Text;
            expensedetails.polineseq = 0;
            expensedetails.csuserid = 0;
            DataTable dt = (DataTable)Session["dtPO"];
            expensedetails.mgrGroupCode = dt.Rows[0]["mgrGroupCode"].ToString();
            expensedetails.itemCode = ddlItemCodePark.SelectedValue == "0" ? string.Empty : ddlItemCodePark.SelectedValue;
            expensedetails.deptChgCmt = txtComntsPark.Text == string.Empty ? " " : txtComntsPark.Text;
            expensedetails.deptCode = ddlDepartmentPark.SelectedValue;
            expensedetails.reqDeliveryDate = txtReqDelDatePark.Text;
            expensedetails.onBeHalfOf = string.Empty;
            expensedetails.lastUpdSource = "Web";
            expensedetails.qbAcctId = 0;
            expensedetails.qbVendId = 0;
            expensedetails.className = string.Empty;
            expensedetails.classRefId = string.Empty;
            expensedetails.sendtoqb = string.Empty;
            expensedetails.priceFlag = string.Empty;

            string retStr = xms.addExpense(expensedetails);

            if (retStr.ToLower().Contains("fail"))
            {
                dvPOErrMsgPark.Style["color"] = "Red";
                dvPOErrMsgPark.InnerHtml = retStr;
            }
            else if (retStr.ToLower().Contains("succes"))
            {
                dvPOErrMsgPark.Style["color"] = "Green";
                dvPOErrMsgPark.InnerHtml = retStr;
                dtPO.Rows[row]["expItem"] = ddlExpItemPark.SelectedValue;
                dtPO.Rows[row]["accountCode"] = txtAccCodePark.Text;
                dtPO.Rows[row]["quantity"] = Convert.ToDouble(txtQuantityPark.Text);
                dtPO.Rows[row]["packageUnit"] = txtPkgUnitPark.Text;
                dtPO.Rows[row]["unitPrice"] = txtUnitPricePark.Text;
                double taxPercent1 = chkCalTaxPark.Checked == true ? (ut.NullSafeDouble(txtTaxPercentPark.Text == string.Empty ? "0" : txtTaxPercentPark.Text)) : 0;
                dtPO.Rows[row]["TaxPercent"] = taxPercent1;
                double chkTax1 = chkCalTaxPark.Checked == true ? ((ut.NullSafeDouble(taxPercent1)) / 100) : 0;
                double tax1 = (ut.NullSafeDouble(txtUnitPricePark.Text) * ut.NullSafeDouble(txtQuantityPark.Text)) * chkTax1;
                double POamnt1 = (((ut.NullSafeDouble(txtQuantityPark.Text)) * (ut.NullSafeDouble(txtUnitPricePark.Text))) + (ut.NullSafeDouble(tax1))) + ut.NullSafeDouble(txtShipCostPark.Text);
                dtPO.Rows[row]["PreAmount"] = POamnt1;
                dtPO.Rows[row]["comments"] = txtDescrPark.Text;
                dtPO.Rows[row]["balAfterpo"] = ut.NullSafeDouble(ut.NullSafeDouble(txtRemainPark.Text == string.Empty ? 0 : ut.NullSafeDouble(txtRemainPark.Text)) - (ut.NullSafeDouble(hdnPORowTotAmntPark.Value) + ut.NullSafeDouble(POamnt1)));
                Session["balAfterPO"] = dtPO.Rows[row]["balAfterpo"];
                dtPO.Rows[row]["taxCalCulated"] = chkCalTaxPark.Checked;
                dtPO.Rows[row]["vendpartno"] = txtVendPtNoPark.Text;
                hdnTaxPark.Value = chkCalTaxPark.Checked == true ? taxPercent1.ToString() : Session["Tax"].ToString();
                DataTable dt1 = (DataTable)Session["dtPO"];
                dtPO.Rows[row]["MgrGroupCode"] = dt1.Rows[0]["mgrGroupCode"].ToString();
                dtPO.Rows[row]["DeptCode"] = ddlDepartmentPark.SelectedValue;
                dtPO.Rows[row]["DeptChgCmt"] = txtComntsPark.Text == string.Empty ? " " : txtComntsPark.Text;
                dtPO.Rows[row]["ItemCode"] = ddlItemCodePark.SelectedValue == "0" ? string.Empty : ddlItemCodePark.SelectedValue;
                dtPO.Rows[row]["reqDeliveryDate"] = txtReqDelDatePark.Text;
            }
        }
        else
        {
            dvPOErrMsgPark.InnerHtml = "No changes to Update";
        }
        dtPO.AcceptChanges();
        foreach (GridViewRow row1 in gvPOPark.Rows)
        {
            Label lblPOAccCode = (Label)row1.FindControl("lblPOAccCode");
            if (lblPOAccCode.Text == txtAccCodePark.Text)
                dtPO.Rows[row1.RowIndex]["balAfterpo"] = Session["balAfterPO"].ToString();
        }
        Session.Remove("dtPO");
        LoadEditPODataPark(null);

        dtPO = (DataTable)Session["dtPO"];
        DataTable dtPO_Temp1 = dtPO.Clone();
        dtPO_Temp1.ImportRow(dtPO.Rows[ut.NullSafeInteger(hdnRowIndexPark.Value)]);
        Session["dtPO_Temp"] = dtPO_Temp1;

        GetPOLineItemDataPark(dtPO_Temp1, 0);

        btSaveEditPOPark.Visible = true;
        pop_EditPOPark.Show();
        popAddPOPark.Show();
    }

    private void CalOnAccCode_Park()
    {
        DataSet dataUsers = new DataSet();
        if (Session["UserDept"] == null)
            GetUserDept();

        DateTime dateTime = Convert.ToDateTime(txtPOTripStrtDatePark.Text);
        int year = dateTime.Year;

        if (hdnYearPark.Value != year.ToString())
            MonthFilterPark(year);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtPOTripStrtDatePark.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDatePark.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }

            else
                dvPoErrorPark.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";
        }

        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtAccCodePark.Text;
        budget.compCode = Session["CompCode"].ToString();
        //budget.deptCode = Session["UserDept"].ToString();
        budget.deptCode = ddlDepartmentPark.SelectedValue;
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;

        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));

        string expression = "accountCode = '" + txtAccCodePark.Text + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        txtBudgetPark.Text = dtAcccode.Rows[0]["budget"].ToString();
        txtCurrBalPark.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
        txtRemainPark.Text = dtAcccode.Rows[0]["remaining"].ToString();
        pop_EditPOPark.Show();
    }

    private string MonthFilterPark(int year)
    {
        string fiDate = xms.getFiscalCalendar(Convert.ToInt32(Session["OrgID"]), Session["CompCOde"].ToString(), year);
        List<FiscalCalendarVO> lstFisDate = ser.Deserialize<List<FiscalCalendarVO>>(fiDate);
        dsFiscalDate.Tables.Add(Utility.ConvertToDataTable(lstFisDate));
        Session["FiscalDate"] = dsFiscalDate;

        if (dsFiscalDate.Tables[0].Rows.Count > 0)
        {
            for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
            {
                if ((Convert.ToDateTime(txtPOTripStrtDatePark.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtPOTripStrtDatePark.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                {
                    tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                    break;
                }
            }
        }
        else
            dvPoErrorPark.InnerHtml = "Fiscal Calendar is not setup for this year, Please contact Admin";

        return tripMonth;
    }

    protected void DisplayItemNotesPark(object sender, CommandEventArgs e)
    {
        string[] arr = e.CommandArgument.ToString().Split(';');
        string itemNotes = arr[1];
        string itemCode = arr[0];
        lblItemNotesPark.Text = itemNotes;
        lblDispItemCodePark.Text = itemCode;
        pop_EditPOPark.Show();
        popItemNotesPark.Show();
    }

    #endregion

    #region Extend Park PO

    protected void ExtendParkPOApproval(object sender, EventArgs e)
    {
        hdnCurrentDate.Value = DateTime.Now.ToShortDateString();
        btnExtendParkSubmit.Attributes.Add("onclick", "javascript:return validateParkPO('" + txtExtendParkDate.ClientID + "', '" + txtExtendParkComments.ClientID + "', '" + dvExtendParkMsg.ClientID + "', '" + hdnCurrentDate.Value + "');");
        popExtendPark.Show();
        pop_EditPO.Hide();
    }

    protected void ExtendParkAndSubmitApproval(object sender, EventArgs e)
    {
        int uID = Convert.ToInt32(Session["UserID"]);
        RequestVO req = new RequestVO();
        //req.approved = "6";
        //req.preApproved = 2;
        //req.orgId = Session["OrgID"].ToString();
        //req.reqId = Session["ReqID"].ToString();
        //req.type = "5";
        //req.accCode = string.Empty;
        //req.seqId = uID.ToString();
        //req.status = string.Empty;
        //req.statusId = string.Empty;
        //req.userId = Session["User_Req"].ToString();
        //req.addedBy = Convert.ToInt32(Session["UserID"]);
        //req.modifiedBy = Convert.ToInt32(Session["UserID"]);
        //req.comments = string.Empty;
        //req.parkDays = 0;
        //req.parkDate = Convert.ToDateTime(txtExtendParkDate.Text).ToShortDateString();
        //req.parkComment = txtExtendParkComments.Text;
        //req.mgrGroupCode = string.Empty;
        //req.vendorEmail = string.Empty;
        //req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        //xms.approveRequestByMgr(req);
        req.approved = "7";
        req.preApproved = 2;
        req.orgId = Session["OrgID"].ToString();
        req.reqId = Session["ReqID"].ToString();
        req.type = "5";
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = Session["User_Req"].ToString();
        req.addedBy = Convert.ToInt32(Session["UserID"]);
        req.modifiedBy = Convert.ToInt32(Session["UserID"]);
        req.comments = string.Empty;
        req.parkDays = 0;
        req.parkDate = Convert.ToDateTime(txtExtendParkDate.Text).ToShortDateString();
        req.parkComment = txtParkComments.Text;
        req.mgrGroupCode = string.Empty;
        req.vendorEmail = string.Empty; bool pre = false;
        req.emailFaxFlag = string.Empty;
        req.actionBy = Session["username"].ToString() + " " + Session["lastname"].ToString();
        if (Convert.ToInt32(Session["Type"]) == 1)
            pre = true;
        xms.approveRequestByAP(req, pre, Convert.ToBoolean(Session["IsMgrPreApproved"]));
        txtExtendParkDate.Text = string.Empty;
        txtExtendParkComments.Text = string.Empty;
        //Session.Remove("dsSt_pen_po");
        Session.Remove("dsSt_park_po");
        //BindPen_APGrid_PO();
        BindPark_APGrid();
        popExtendPark.Hide();
        pop_EditPO.Hide();
    }

    protected void CloseExtendParkPO(object sender, EventArgs e)
    {
        popExtendPark.Hide();
        pop_EditPOPark.Show();
    }

    #endregion

    #region Calculate Budget

    private void GetViewBudgetDataPark(string accCode)
    {
        DateTime dateTime = Convert.ToDateTime(txtTripStartDatePark.Text);
        int year = dateTime.Year;
        if (hdnYear.Value != year.ToString())
            MonthFilter(year, txtTripStartDatePark.Text);
        else
        {
            dsFiscalDate = (DataSet)Session["FiscalDate"];
            if (dsFiscalDate.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < dsFiscalDate.Tables[0].Rows.Count; i++)
                {
                    if ((Convert.ToDateTime(txtTripStartDatePark.Text) >= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["fromDate"].ToString())) && (Convert.ToDateTime(txtTripStartDatePark.Text) <= Convert.ToDateTime(dsFiscalDate.Tables[0].Rows[i]["toDate"].ToString())))
                    {
                        tripMonth = dsFiscalDate.Tables[0].Rows[i]["Month"].ToString();
                        break;
                    }
                }
            }
        }

        ////Fetch budget details by selected classification
        POBudgetVO budget = new POBudgetVO();
        budget.accountCode = txtVAccCodePark.Text;
        budget.compCode = Session["CompCode"].ToString();
        budget.deptCode = Session["DepartmentCode"].ToString();
        budget.orgId = Convert.ToInt32(Session["OrgID"]);
        budget.year = year;
        budget.month = tripMonth;
        var str = xms.getDeptBudgetDetails(budget);
        List<POBudgetVO> lstBud = ser.Deserialize<List<POBudgetVO>>(str);
        DataSet dsSt = new DataSet();
        dsSt.Tables.Add(Utility.ConvertToDataTable(lstBud));
        Session["BudgetData"] = dsSt.Tables[0];

        string expression = "accountCode = '" + accCode + "'";
        DataView accCodes = new DataView(dsSt.Tables[0], expression, "accountCode", DataViewRowState.CurrentRows);
        DataTable dtAcccode = accCodes.ToTable();
        if (dtAcccode.Rows.Count > 0)
        {
            txtVExpBudgPark.Text = dtAcccode.Rows[0]["budget"].ToString();
            txtVExpCurrBalPark.Text = dtAcccode.Rows[0]["currentBalance"].ToString();
            txtVExpRemBudgPark.Text = dtAcccode.Rows[0]["remaining"].ToString();

            //Calculate Amount/BalAfterPO
            double allRowsAmntVal = 0;
            foreach (GridViewRow row1 in gvExpPark.Rows)
            {
                HiddenField hdnAccCode = (HiddenField)row1.FindControl("hdnAccCode");
                Label lblActAmnt = (Label)row1.FindControl("lblActAmnt");
                string strAccCode = txtVAccCodePark.Text.Split('-')[0];
                if (hdnAccCode.Value == txtVAccCodePark.Text)
                    allRowsAmntVal += ut.NullSafeDouble(lblActAmnt.Text);
            }
            hdnVExpRowTotAmntPark.Value = (allRowsAmntVal - ut.NullSafeDouble(lblVActAmtPark.Text)).ToString();
            Session["allRowsAmntVal"] = allRowsAmntVal;
            txtVExpBalAfterPark.Text = (ut.NullSafeDouble(txtVExpRemBudgPark.Text) - (ut.NullSafeDouble(Session["allRowsAmntVal"]) == 0 ? ut.NullSafeDouble(lblVActAmtPark.Text) : ut.NullSafeDouble(Session["allRowsAmntVal"]))).ToString();
        }
    }

    protected void AssignAttributesToBudgetFieldsPark()
    {
        txtVExpBalAfterPark.Attributes.Add("readonly", "readonly");
        txtVExpCurrBalPark.Attributes.Add("readonly", "readonly");
        txtVExpRemBudgPark.Attributes.Add("readonly", "readonly");
        txtVExpBudgPark.Attributes.Add("readonly", "readonly");
    }


    #endregion

    #region PO Attachments

    protected void btnAttachPOPark_Click(object sender, EventArgs e)
    {
        if (Session["AttchList"] == null)
            Attachments(0);
        ds = (DataSet)Session["AttchList"];
        gvAttchmntsPOPark.DataSource = ds;
        gvAttchmntsPOPark.DataBind();
        pop_EditPOPark.Show();
        popup_AttPOPark.Show();
    }

    protected void gvAttchmntsPOPark_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            ImageButton imgAttchmnt = (ImageButton)e.Row.FindControl("imgAttchmntPO");
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

    protected void DownLdAttPOPark(object sender, EventArgs e)
    {
        GridViewRow row = (GridViewRow)((ImageButton)sender).Parent.Parent;
        HiddenField hdnAttOrgName = (HiddenField)row.FindControl("hdnAttOrgNamePO");
        HiddenField hdnOrgName = (HiddenField)row.FindControl("hdnOrgNamePO");
        Encryption enc = new Encryption();
        string key = enc.GenerateAPassKey("POExistAtt");
        string filepath = enc.Encrypt(hdnAttOrgName.Value, key);
        string fileName = enc.Encrypt(hdnOrgName.Value, key);
        //Response.Redirect("downloadFile.aspx?aid=" + filepath + "&ext=" + fileName + "&typ=2");
        ScriptManager.RegisterStartupScript(this, GetType(), "View Attachment", "window.open('AttImage.aspx?att=" + filepath + "&org=" + fileName + "', 'Attachment', 'resizable=1, scrollbars=1, height=800,width=800');", true);
        popup_AttPOPark.Show();
        pop_EditPOPark.Show();
    }

    #endregion

    #endregion
}