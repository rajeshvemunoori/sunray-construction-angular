using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using AjaxControlToolkit;

public partial class Forecast : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;
    AjaxControlToolkit.TabContainer tbcDynamic;

    #endregion

    #region Forecast Rooms Data

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");
            if (!IsPostBack)
            {
                lblOrgID.Text = Session["SOrgName"].ToString();
                BindCompCodes();
                BindYears();
                BindMonths();
                ClearFields();
                GetRoomsData();
                btnExport.Visible = false;
                btnUpdateBudget.Visible = false;
                txtRmsHct.Attributes.Add("readonly", "readonly");
                //btnGetData.Attributes.Add("onclick", "javascript:calculateRevenue('lblRmsHct', 'txtRmsBdg'); calculateOccBudg('txtRmAvail', 'txtRmSld');");
                //BindReport();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
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
            //c.BusinessType
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataTextField = "BusinessType";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == null)
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    void BindMonths()
    {
        DataTable dt = new DataTable();
        dt.Columns.Add("Month");
        DataRow row;
        for (int i = -1; i < 2; i++)
        {
            row = dt.NewRow();
            row["Month"] = DateTime.Now.AddMonths(i).ToString("MMMM").ToUpper();
            dt.Rows.Add(row);
        }
        dt.AcceptChanges();
        ddlMonth.DataSource = dt;
        ddlMonth.DataTextField = "Month";
        ddlMonth.DataValueField = "Month";
        ddlMonth.DataBind();
        ddlMonth.SelectedValue = DateTime.Now.AddMonths(0).ToString("MMMM").ToUpper();
    }

    void BindYears()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Year");
        int yr = DateTime.Now.AddYears(0).Year;
        dr = dt.NewRow();
        dr["Year"] = yr;
        dt.Rows.Add(dr);
        dt.AcceptChanges();

        ddlYear.DataSource = dt;
        ddlYear.DataTextField = "Year";
        ddlYear.DataValueField = "Year";
        ddlYear.DataBind();
    }

    void GetRoomsData()
    {
        //string month = Convert.ToDateTime("01-" + ddlMonth.SelectedValue + DateTime.Now.Year.ToString()).AddMonths(-1).ToString("MMMM").ToUpper() + "," + ddlMonth.SelectedValue;
        string month = Convert.ToDateTime("01-" + ddlMonth.SelectedValue + ddlYear.SelectedValue).AddMonths(-1).ToString("MMMM").ToUpper() + "," + ddlMonth.SelectedValue;
        RoomsVO room = new RoomsVO();
        room.addedBy = 0;
        room.adr = 0;
        room.availPerMonth = 0;
        room.compCode = ddlCompCode.SelectedValue;
        room.month = month;
        //room.month = ddlMonth.SelectedValue;
        room.orgId = Convert.ToInt32(Session["OrgID"]);
        room.revenue = 0;
        room.revPar = 0;
        room.roomId = 0;
        room.roomsPerDay = 0;
        room.soldPerMonth = 0;
        room.year = DateTime.Now.Year;
        string str = xms.getRoomDetails(room);
        List<RoomsVO> lst = ser.Deserialize<List<RoomsVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (dt.Rows.Count > 0)
        {
            lblRmNum.Text = dt.Rows[0]["roomsPerDay"].ToString();
            lblRmAvail.Text = dt.Rows[0]["availPerMonth"].ToString();
            lblRmSld.Text = dt.Rows[0]["soldPerMonth"].ToString();
            double rA = ut.NullSafeDouble(lblRmAvail.Text);
            double rS = ut.NullSafeDouble(lblRmSld.Text);
            double occ = 0;
            if (rA > 0)
                occ = (rS / rA) * 100;
            lblRmOcc.Text = occ.ToString("#.##");
            lblADR.Text = dt.Rows[0]["adr"].ToString();
            lblRevPar.Text = dt.Rows[0]["revPar"].ToString();
            lblRmsBdg.Text = dt.Rows[0]["revenue"].ToString();
            if (dt.Rows.Count > 1)
            {
                btnUpdateBudget.Visible = false;
                txtRmNum.Text = dt.Rows[1]["roomsPerDay"].ToString();
                txtRmAvail.Text = dt.Rows[1]["availPerMonth"].ToString();
                txtRmSld.Text = dt.Rows[1]["soldPerMonth"].ToString();
                double rAB = ut.NullSafeDouble(txtRmAvail.Text);
                double rSB = ut.NullSafeDouble(txtRmSld.Text);
                double occB = 0;
                if (rA > 0)
                    occB = (rSB / rAB) * 100;
                lblRmOccBgd.Text = occB.ToString("#.##");
                hdnRmOccBdg.Value = occB.ToString("#.##");
                txtADR.Text = dt.Rows[1]["adr"].ToString();
                txtRevPar.Text = dt.Rows[1]["revPar"].ToString();
                txtRmsHct.Text = dt.Rows[1]["revenue"].ToString();
                double rB = ut.NullSafeDouble(lblRmsBdg.Text);
                double rH = ut.NullSafeDouble(txtRmsHct.Text);
                double rev = ((rH - rB) / rB) * 100;
                if (rev < 0)
                    lblRmsAddRem.Style["color"] = "Red";
                else
                    lblRmsAddRem.Style["color"] = "Black";
                lblRmsAddRem.Text = rev.ToString("#.##");
                hdnIsDataPresent.Value = "Y";
            }
            else
                hdnIsDataPresent.Value = "N";
        }
        else
            ClearBudget();
    }

    void BindReport()
    {
        plc.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=room&type=1&yr=" + DateTime.Now.Year + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "&dt=ROOMS&prc=" + hdnRmsAddRem.Value + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
    }

    protected void GetCalculatedData(object sender, EventArgs e)
    {
        CalculatePercentages();
        BindReport();
        if (hdnIsDataPresent.Value == "N")
            btnUpdateBudget.Visible = true;
        else
            btnUpdateBudget.Visible = false;
        btnExport.Visible = true;
    }

    protected void UpdateBudget(object sender, EventArgs e)
    {
        CalculatePercentages();
        RoomsVO room = new RoomsVO();
        room.addedBy = Convert.ToInt32(Session["UserID"]);
        room.adr = ut.NullSafeDouble(txtADR.Text);
        room.availPerMonth = ut.NullSafeInteger(txtRmAvail.Text);
        room.compCode = ddlCompCode.SelectedValue;
        room.month = ddlMonth.SelectedValue;
        room.orgId = Convert.ToInt32(Session["OrgID"]);
        room.revenue = ut.NullSafeDouble(txtRmsHct.Text);
        room.revPar = ut.NullSafeDouble(txtRevPar.Text);
        room.roomId = 0;
        room.roomsPerDay = ut.NullSafeInteger(txtRmNum.Text);
        room.soldPerMonth = ut.NullSafeInteger(txtRmSld.Text);
        room.year = DateTime.Now.Year;
        string retStr = xms.addRoomDetails(room);
        if (retStr.ToLower().Contains("succes"))
        {
            DisplayMsg(retStr, "Green");
            BindReport();
            btnUpdateBudget.Visible = false;
        }
        else
            DisplayMsg(retStr, "Red");
    }

    protected void GetForecastData(object sender, EventArgs e)
    {
        ClearFields();
        ClearBudget();
        GetRoomsData();
        btnUpdateBudget.Visible = false;
        btnExport.Visible = false;
    }

    void DisplayMsg(string msg, string color)
    {
        dvMsg.InnerHtml = msg;
        dvMsg.Style["color"] = color;
    }

    void CalculatePercentages()
    {
        //Calculate Occupancy;
        double rA = ut.NullSafeDouble(txtRmAvail.Text);
        double rS = ut.NullSafeDouble(txtRmSld.Text);
        double occ = (rS / rA) * 100;
        lblRmOccBgd.Text = occ.ToString("#.##");

        //Calculate Revenue
        double rB = ut.NullSafeDouble(lblRmsBdg.Text);
        double rH = ut.NullSafeDouble(txtRmsHct.Text);
        if (rB > 0)
        {
            double rev = ((rH - rB) / rB) * 100;
            if (rH < rB)
                lblRmsAddRem.Style["color"] = "Red";
            else
                lblRmsAddRem.Style["color"] = "Black";
            lblRmsAddRem.Text = rev.ToString("#.##");
            hdnRmsAddRem.Value = rev.ToString("#.##");
        }
        else
        {
            lblRmsAddRem.Text = "0.00";
            hdnRmsAddRem.Value = "0.00";
        }
    }

    #endregion

    #region Export Data

    protected void ExportData(object sender, EventArgs e)
    {
        Response.Redirect("DownloadFile.aspx?typ=12&cc=" + ddlCompCode.SelectedValue.ToUpper() + "&mn=" + ddlMonth.SelectedValue);
    }

    #endregion

    #region Input Field Operations

    void ClearBudget()
    {
        lblRmNum.Text = lblRmAvail.Text = lblRmSld.Text = string.Empty;
        lblADR.Text = lblRevPar.Text = lblRmsBdg.Text = "0";
        lblRmOcc.Text = "0.00";
    }

    void ClearFields()
    {
        dvMsg.InnerHtml = txtRmNum.Text = txtRmAvail.Text = txtRmSld.Text = txtADR.Text = txtRevPar.Text = txtRmsHct.Text = string.Empty;
        lblRmOccBgd.Text = lblRmsAddRem.Text = "0.00";
        lblRmsAddRem.Style["color"] = "Black";
    }

    #endregion
}