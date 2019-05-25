using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;

public partial class DashBoard : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Dashboard Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                string compCode = string.Empty;
                if (Session["GAdmin"] != null || Session["IsAdmin"].ToString().ToLower() == "true")
                {
                    BindCompCodes();
                    dvCompCode.Style["display"] = "block";
                    compCode = ddlCompCode.SelectedValue;
                }
                else
                {
                    dvCompCode.Style["display"] = "none";
                    compCode = Session["CompCode"].ToString();
                }
                Session["SelCC"] = compCode;
                BindReports(compCode);
                DataSet dsUser = new DataSet();

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
                    {
                        if (dvCompCodes.ToTable().Rows[0]["State"].ToString() == dt.Rows[i]["CodeKey"].ToString())
                            Session["Tax"] = dt.Rows[i]["CodeValue1"].ToString();
                    }
                }

                //Fetch pending Expense/PO count
                if (Session["IsAP"] != null || Session["IsManager"] != null || Session["ReceivngMgr"] != null)
                    GetApprovalRequestCount();

                //Load default panel depending ORGDEFLOAD
                string expr = "CODEID = 'ORGDEFLOAD'";
                DataView dv = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
                DataTable dt1 = dv.ToTable();
                if (dt1.Rows[0]["CodeKey"].ToString() == "PO")
                    tc1.ActiveTab = tpPOs;

                //Focus on CompCode dropdown initially
                ddlCompCode.Focus();
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
            CompanyCodesVO c = new CompanyCodesVO();
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataTextField = "BusinessType";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    void BindReports(string compCode)
    {
        pcReport.Controls.Add(new LiteralControl("<iframe src='DashboardFrame.aspx?e=po' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='no' width='920px' height='540px'></iframe>"));
        pcExpReport.Controls.Add(new LiteralControl("<iframe src='DashboardFrame.aspx?e=er' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='no' width='920px' height='600px'></iframe>"));
    }

    protected void GetDashBoardData(object sender, EventArgs e)
    {
        Session.Remove("DashBoard");
        BindReports(ddlCompCode.SelectedValue);
        Session["SelCC"] = ddlCompCode.SelectedValue;
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        Session.Remove("DashBoard");
        string compCode = string.Empty;
        if (Session["GAdmin"] != null || Session["IsAdmin"].ToString().ToLower() == "true")
        {
            BindCompCodes();
            dvCompCode.Style["display"] = "block";
            compCode = ddlCompCode.SelectedValue;
        }
        else
        {
            dvCompCode.Style["display"] = "none";
            compCode = Session["CompCode"].ToString();
        }
        BindReports(compCode);
    }

    private void GetApprovalRequestCount()
    {
        string expr = "CODEID = 'ORGDEFLOAD'";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        DataTable dt1 = view.ToTable();
        int expType = dt1.Rows[0]["CodeKey"].ToString() == "ER" ? 0 : (dt1.Rows[0]["CodeKey"].ToString() == "PA" ? 1 : 2);

        //Pending Requests for Manager Approval
        string strReqMgr = xms.getReqForApprovalMgr(ut.NullSafeInteger(Session["OrgID"]), ut.NullSafeInteger(Session["UserID"]), 1, expType);
        List<ApproveRequestVO> lstReqMgr = ser.Deserialize<List<ApproveRequestVO>>(strReqMgr);
        DataTable dt = Utility.ConvertToDataTable(lstReqMgr);
        if (Session["AppFlag"].ToString() == "Y")
            Session["MgrPendingExpensesCnt"] = dt.Rows.Count;
        else
        {
            string expr1 = "StatusID <> 17";
            DataView dv = new DataView(dt, expr1, "StatusID", DataViewRowState.CurrentRows);
            Session["MgrPendingExpensesCnt"] = dv.ToTable().Rows.Count;
        }
        //Pending Requests for Manager Approval

        //Pending Requests for AP Approval 
        dt.Rows.Clear();
        string strAPExp = xms.getRequestsForAPApproval(Convert.ToInt32(Session["OrgID"]), 2, Session["CompCode"].ToString(), expType);
        List<ApproveRequestVO> lstApExp = ser.Deserialize<List<ApproveRequestVO>>(strAPExp);
        dt = Utility.ConvertToDataTable(lstApExp);
        Session["APPendingExpensesCnt"] = dt.Rows.Count;
        //Pending Requests for AP Approval
    }

    #endregion
}