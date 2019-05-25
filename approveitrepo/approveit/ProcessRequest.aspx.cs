using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;

public partial class ProcessRequest : System.Web.UI.Page
{
    #region Private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region Approval

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");
            if (!Page.IsPostBack)
            {
                hdnEMail.Value = Request.QueryString["em"];
                hdnReqID.Value = Request.QueryString["rid"];
                hdnUserIDReq.Value = Request.QueryString["ur"];
                hdnPreApproved.Value = Request.QueryString["pr"];//0-ER;1-PA;2-PO
                hdnApproved.Value = Request.QueryString["ar"];//1-Approve; 2-Reject; 3-Forward; 4-Approve&Forward
                hdnType.Value = Request.QueryString["tp"];//0-AP; 2-Manager
                btnReject.Attributes.Add("onclick", "javascript:return validateComments();");

                if (ValidateUser())
                {
                    if (ut.NullSafeInteger(hdnApproved.Value) == 2)
                        dvComments.Style["display"] = "block";
                    else
                    {
                        dvMsg.InnerHtml = ApproveRequest();
                        CreateBasicSessions();
                        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "redirectPage('" + hdnType.Value + "') ;", true);
                    }
                }
                else
                {
                    dvMsg.Style["color"] = "Red";
                    dvMsg.InnerHtml = "You are not authorized to process this request.";
                    ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "setTimeout('navigateHome()', 3000);", true);
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    void CreateBasicSessions()
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
            {
                if (dvCompCodes.ToTable().Rows[0]["State"].ToString() == dt.Rows[i]["CodeKey"].ToString())
                    Session["Tax"] = dt.Rows[i]["CodeValue1"].ToString();
            }
        }
    }

    bool ValidateUser()
    {
        string email = xms.getStrDecrypt(hdnEMail.Value);
        if (email.Contains(','))
        {
            int cnt = 0;
            string[] arr = email.Split(',');
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] == Session["Email"].ToString())
                    cnt++;
            }
            if (cnt > 0)
                return true;
            else
                return false;
        }
        else
        {
            if (email == Session["Email"].ToString())
                return true;
            else
                return false;
        }
    }

    string RejectRequest()
    {
        int uID = Convert.ToInt32(Session["UserID"]);

        RequestVO req = new RequestVO();
        req.approved = hdnApproved.Value;//2 to Reject
        req.preApproved = ut.NullSafeInteger(hdnPreApproved.Value);
        req.orgId = Session["OrgID"].ToString();
        req.reqId = hdnReqID.Value;
        req.type = hdnType.Value;//Manager Approval
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = hdnUserIDReq.Value;
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = txtComments.Text;
        req.vendorEmail = string.Empty;
        req.emailFaxFlag = string.Empty;
        req.parkDate = "";
        req.parkDays = 0;
        req.actionBy = (Session["username"] == null ? string.Empty : Session["username"].ToString()) + " " + (Session["username"] == null ? string.Empty : Session["lastname"].ToString());

        string retStr = string.Empty;
        if (hdnType.Value == "2")
            retStr = xms.approveRequestByMgr(req);
        else
            retStr = xms.approveRequestByAP(req, hdnPreApproved.Value == "1" ? true : false, false);

        if (retStr.ToLower().Contains("succes"))
        {
            dvMsg.Style["color"] = "Green";
            dvComments.Style["display"] = "none";
            txtComments.Text = string.Empty;
            return "Request rejected successfully.";
        }
        else
        {
            dvMsg.Style["color"] = "Red";
            return "Failed to process the request.";
        }
    }

    string ApproveRequest()
    {
        int uID = Convert.ToInt32(Session["UserID"]);

        RequestVO req = new RequestVO();
        req.approved = hdnApproved.Value;//1 to Approve
        req.preApproved = ut.NullSafeInteger(hdnPreApproved.Value);
        req.orgId = Session["OrgID"].ToString();
        req.reqId = hdnReqID.Value;
        req.type = hdnType.Value;
        req.accCode = string.Empty;
        req.seqId = uID.ToString();
        req.status = string.Empty;
        req.statusId = string.Empty;
        req.userId = hdnUserIDReq.Value;
        req.addedBy = uID;
        req.modifiedBy = uID;
        req.comments = string.Empty;
        req.vendorEmail = string.Empty;
        req.emailFaxFlag = string.Empty;
        req.parkDate = "";
        req.parkDays = 0;
        req.actionBy = (Session["username"] == null ? string.Empty : Session["username"].ToString()) + " " + (Session["username"] == null ? string.Empty : Session["lastname"].ToString());
        string retStr = string.Empty;
        if (hdnType.Value == "2")
            retStr = xms.approveRequestByMgr(req);
        else
            retStr = xms.approveRequestByAP(req, hdnPreApproved.Value == "1" ? true : false, false);
        if (retStr.ToLower().Contains("succes"))
        {
            dvMsg.Style["color"] = "Green";
            return "Request approved successfully.";
        }
        else
        {
            dvMsg.Style["color"] = "Red";
            return "Failed to process the request.";
        }
    }

    string ForwardRequest()
    {
        return "";
    }

    protected void btnReject_Click(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Login.aspx");
        dvMsg.InnerHtml = RejectRequest();
        CreateBasicSessions();
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "redirectPage('" + hdnType.Value + "') ;", true);
    }

    protected void NavigateHome(object sender, EventArgs e)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), "setupPreviewPane", "navigateHome();", true);
    }

    #endregion
}