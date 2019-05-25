using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Reimburse : System.Web.UI.Page
{
    #region private variables
    
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    Encryption enc = new Encryption();
    
    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                btnSave.Attributes.Add("onclick", "javascript:return validatedetails();");
                if (Request.QueryString.Count > 0)
                {
                    string key = enc.GenerateAPassKey("POExistInv");
                    string req = enc.Decrypt((Request.QueryString["reqid"].Replace(' ', '+')), key);
                    string onBehalfOf = enc.Decrypt(Request.QueryString["obh"].Replace(' ', '+'), key);
                    var str = string.Empty;
                    if (Session["OpenReimv"] == "1")
                        str = xms.getExpReimburseDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(req), 2);
                    else
                        str = xms.getExpReimburseDetails(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), Convert.ToInt32(req), 1);
                    List<ReimburseVO> lstApExp = ser.Deserialize<List<ReimburseVO>>(str);
                    //ReimburseVO r = new ReimburseVO();
                    //r.payableTO
                    DataTable dt = Utility.ConvertToDataTable(lstApExp);
                    gvReimburse.DataSource = dt;
                    gvReimburse.DataBind();
                    int cashAdv = Convert.ToInt32(dt.Rows[0]["cashAdvAmt"]);
                    Session["cashAdv"] = cashAdv;
                    Session["ReimbReqID"] = req;
                    Session["TotalAmnt"] = dt.Rows[0]["totalAmount"].ToString();
                    ddlPayMode.SelectedValue = dt.Rows[0]["payMode"].ToString();
                    txtPayableTo.Text = dt.Rows[0]["payableTO"].ToString();
                    if (ddlPayMode.SelectedValue == "Cheque")
                        Cheque1.Style.Add("display", "block");
                    else
                        Cheque1.Style.Add("display", "none");

                    if (Session["OpenReimv"] == "1")
                    {
                        if (ddlPayMode.SelectedValue == "Cheque")
                        {
                            txtChqDate.Text = dt.Rows[0]["payModeDate"].ToString();
                            txtchqNO.Text = dt.Rows[0]["payModeDetail1"].ToString();
                            txtBank.Text = dt.Rows[0]["payModeDetail2"].ToString();
                            txtBank.ReadOnly = true;
                            txtChqDate.ReadOnly = true;
                            txtchqNO.ReadOnly = true;
                            dvBankDetails.Style["display"] = "none";
                        }
                        //txtDesc.Text = dt.Rows[0]["comments"].ToString();
                        txAmount.ReadOnly = true;
                        //txtDesc.ReadOnly = true;
                        btnSave.Visible = false;
                        ddlPayMode.Enabled = false;
                    }
                    else
                    {
                        btnSave.Visible = true;
                        ddlPayMode.Enabled = true;
                        txtBank.ReadOnly = false;
                        txtChqDate.ReadOnly = false;
                        txtchqNO.ReadOnly = false;
                        txAmount.ReadOnly = false;
                        //txtDesc.ReadOnly = false;
                    }
                    txAmount.Text = dt.Rows[0]["totalAmount"].ToString();
                    Session.Remove("OpenReimv");
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message + "-- From Reimburse.aspx", ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void SaveReimburse(object sender, EventArgs e)
    {
        ReimburseVO reimb = new ReimburseVO();
        reimb.cashAdvAmt = Convert.ToDouble(Session["cashAdv"]);
        reimb.orgId = Convert.ToInt32(Session["OrgID"]);
        reimb.compCode = Session["CompCode"].ToString();
        reimb.requestId = Convert.ToInt32(Session["ReimbReqID"]);
        reimb.totalAmount = ut.NullSafeDouble(txAmount.Text);
        reimb.payModeDetail1 = txtchqNO.Text;
        reimb.payModeDetail2 = txtBank.Text;
        reimb.payModeDetail3 = string.Empty;
        reimb.payModeDetail4 = string.Empty;
        reimb.payModeDate = string.Empty;
        reimb.payMode = ddlPayMode.SelectedValue;
        reimb.payAmount = 0;
        reimb.addedBy = ut.NullSafeInteger(Session["UserID"]);
        reimb.modifiedBy = ut.NullSafeInteger(Session["UserID"]);
        reimb.comments = string.Empty;//txtDesc.Text;
        reimb.payModeDate = txtChqDate.Text;
        reimb.payableTO = txtPayableTo.Text;
        string ret = xms.addReqReimburse(reimb);
        if (ret.ToLower().Contains("succes"))
            dvEr1.Style["color"] = "Green";
        else
            dvEr1.Style["color"] = "Red";
        dvEr1.InnerHtml = ret;
        DisplayFieldsOnPaySelect();
    }

    private void DisplayFieldsOnPaySelect()
    {
        if (ddlPayMode.SelectedValue == "Cheque")
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
}