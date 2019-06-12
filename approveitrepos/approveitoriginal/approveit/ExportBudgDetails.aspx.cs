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

public partial class ExportBudgDetails : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    bool _refreshExp = false;
    AjaxControlToolkit.TabContainer tbcDynamic;

    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Login.aspx");

            if (!IsPostBack)
            {
                lblOrgID.Text = Session["SOrgName"].ToString();

                if (ddlCompCode.Items.Count == 0)
                    BindCompCodes();
                if (ddlYear.Items.Count == 0)
                    BindYears();
                if (ddlMonth.Items.Count == 0)
                    BindMonths();
                LoadWeekData();
                CollapsiblePanelExtender1.Collapsed = false;
            }
            BuildDeptTabs();
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    string GetOrgName()
    {
        var orgDetails = xms.getOrgDetails(Convert.ToInt32(Session["OrgID"]), Session["Email"].ToString());
        List<OrgListVO> org = ser.Deserialize<List<OrgListVO>>(orgDetails);
        DataSet ds = new DataSet();
        ds.Tables.Add(Utility.ConvertToDataTable(org));
        return ds.Tables[0].Rows[0]["Name"].ToString();
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
        }
        else
            dsCompCodes = (DataSet)Session["CompCodesList"];

        ddlCompCode.DataSource = dsCompCodes;
        ddlCompCode.DataTextField = "CompCode";
        ddlCompCode.DataValueField = "CompCode";
        ddlCompCode.DataBind();
        ddlCompCode.SelectedValue = Session["CompCode"].ToString();
        if (Session["GAdmin"] == "false")
            ddlCompCode.Enabled = false;
        else
            ddlCompCode.Enabled = true;
    }

    void BindYears()
    {
        DataTable dt = new DataTable();
        DataRow dr;
        dt.Columns.Add("Year");
        dr = dt.NewRow();
        dr["Year"] = DateTime.Now.AddYears(0).Year;
        dt.Rows.Add(dr);
        dt.AcceptChanges();
        DataView vw = dt.DefaultView;
        vw.Sort = "Year Desc";
        ddlYear.DataSource = vw;
        ddlYear.DataTextField = "Year";
        ddlYear.DataValueField = "Year";
        ddlYear.DataBind();
    }

    void BindMonths()
    {
        DateTime month = Convert.ToDateTime("1/1/2000");
        for (int i = 0; i < 12; i++)
        {
            DateTime NextMont = month.AddMonths(i);
            ListItem list = new ListItem();
            list.Text = NextMont.ToString("MMMM").ToUpper();
            list.Value = NextMont.ToString("MMMM").ToUpper();
            ddlMonth.Items.Add(list);
        }
        ddlMonth.SelectedValue = DateTime.Now.AddMonths(0).ToString("MMMM").ToUpper();
    }

    protected void GetWeekWiseData(object sender, EventArgs e)
    {
        LoadWeekData();
    }

    void LoadWeekData()
    {
        dvWeekTabs.Style["display"] = "block";
        dvDeptTabs.Style["display"] = "block";
        pcWeek1.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=week&type=1&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
        pcWeek2.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=week&type=2&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
        pcWeek3.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=week&type=3&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
        pcWeek4.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=week&type=4&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
        if (ddlMonth.SelectedValue.ToLower().Contains("march") || ddlMonth.SelectedValue.ToLower().Contains("june") || ddlMonth.SelectedValue.ToLower().Contains("september") ||
            ddlMonth.SelectedValue.ToLower().Contains("december"))
        {
            tpWeek5.Visible = true;
            pcWeek5.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=week&type=5&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));
        }
        else
            tpWeek5.Visible = false;
    }

    protected void ExportLnkDetails(object sender, CommandEventArgs e)
    {
        int type = ut.NullSafeInteger(e.CommandArgument);

        string str = xms.getPODetailsByDept(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(ddlYear.SelectedValue), ddlMonth.SelectedValue, Session["Email"].ToString(), type);
        Response.Clear();
        Response.ContentType = "application/vnd.ms-excel";
        Response.AddHeader("content-disposition", "attachment;filename= " + ddlCompCode.SelectedValue.ToUpper() + "_" + ddlYear.SelectedValue.ToUpper() + "_" + ddlMonth.SelectedValue + "_Week" + type + ".xls");
        Response.Charset = "";
        System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        stringWrite.WriteLine(str);
        System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        Response.Write(stringWrite.ToString());
        Response.BufferOutput = true;
        Response.Flush();
        Response.Close();
    }

    #region Dynamic AJAX TabContainer

    void BuildDeptTabs()
    {
        DataTable dtDept = new DataTable();
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        if (Session["IsAdmin"] == "false" && Session["GAdmin"] == "false")
        {
            string expr = "codeKey = '" + Session["DepartmentCode"].ToString() + "'";
            DataView dv = new DataView(dt, expr, "CodeKey", DataViewRowState.CurrentRows);
            dtDept = dv.ToTable();
        }
        else
        {
            dtDept = dt;
        }
        Session["Export_Dept"] = dtDept;
        CreateTab();

        for (int i = 0; i < dtDept.Rows.Count; i++)
        {
            Table tb1 = new Table();
            TableRow tr = new TableRow();
            TableCell tc = new TableCell();

            LinkButton lnkExportDept = new LinkButton();
            lnkExportDept.ID = "lnkExpDept" + i;
            //lnkExportDept.Style["background-image"] = "url(images/Bluebutns/exportData.png)";
            //lnkExportDept.Style["border-style"] = "none";
            //lnkExportDept.Style["border-radius"] = "5px";
            //lnkExportDept.Style["cursor"] = "pointer";
            //lnkExportDept.Height = 26;
            //lnkExportDept.Width = 100;
            lnkExportDept.Text = "Export Data";
            lnkExportDept.CssClass = "buttonnew-blue";
            lnkExportDept.CommandArgument = dtDept.Rows[i]["CodeKey"].ToString();
            lnkExportDept.Command += new CommandEventHandler(this.lnkExportDept_Click);

            tc.Controls.Add(lnkExportDept);
            tc.Style["text-align"] = "right";
            tr.Cells.Add(tc);
            tb1.Rows.Add(tr);

            TableRow tr1 = new TableRow();
            TableCell tc1 = new TableCell();
            tc1.Controls.Add(new LiteralControl("</br>"));
            tr1.Cells.Add(tc1);
            tb1.Rows.Add(tr1);

            TableRow tr2 = new TableRow();
            TableCell tc2 = new TableCell();
            PlaceHolder plcDept = new PlaceHolder();
            plcDept.Controls.Add(new LiteralControl("<iframe src='BudgetExportFrame.aspx?str=dept&type=1&yr=" + ddlYear.SelectedValue + "&mn=" + ddlMonth.SelectedValue + "&cc=" + ddlCompCode.SelectedValue + "&dt=" + dtDept.Rows[i]["CodeKey"].ToString() + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='yes' width='1020px' height='300px'></iframe>"));

            tc2.Controls.Add(plcDept);
            tr2.Cells.Add(tc2);
            tb1.Rows.Add(tr2);
            tbcDynamic.Tabs[i].Controls.Add(tb1);
            ScriptManager.GetCurrent(this).RegisterPostBackControl(lnkExportDept);
        }

        plc.Controls.Add(tbcDynamic);
    }

    protected void lnkExportDept_Click(object sender, CommandEventArgs e)
    {
        string deptType = e.CommandArgument.ToString();

        string str = xms.getPODetailsByDeptAcc(Convert.ToInt32(Session["OrgID"]), ddlCompCode.SelectedValue, ut.NullSafeInteger(ddlYear.SelectedValue), ddlMonth.SelectedValue, deptType, Session["Email"].ToString(), 1, 0);
        Response.Clear();
        Response.ContentType = "application/vnd.ms-excel";
        Response.AddHeader("content-disposition", "attachment;filename= " + ddlCompCode.SelectedValue.ToUpper() + "_" + ddlYear.SelectedValue.ToUpper() + "_" + ddlMonth.SelectedValue + "_" + deptType + ".xls");
        Response.Charset = "";
        System.IO.StringWriter stringWrite = new System.IO.StringWriter();
        stringWrite.WriteLine(str);
        System.Web.UI.HtmlTextWriter htmlWrite = new HtmlTextWriter(stringWrite);
        Response.Write(stringWrite.ToString());
        Response.BufferOutput = true;
        Response.Flush();
        Response.Close();
    }

    private void CreateTab()
    {
        DataTable dt = (DataTable)Session["Export_Dept"];
        tbcDynamic = new AjaxControlToolkit.TabContainer();
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            TabPanel tbpnlProcessCategory = new TabPanel();
            tbpnlProcessCategory.HeaderText = dt.Rows[i]["Description"].ToString();
            tbpnlProcessCategory.ID = "Tab" + i.ToString();
            tbcDynamic.Tabs.Add(tbpnlProcessCategory);
            tbcDynamic.CssClass = "ajax__tab_lightblue-theme";
        }
    }

    #endregion
}