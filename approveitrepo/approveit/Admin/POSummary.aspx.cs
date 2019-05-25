using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Data;
using System.Text;

public partial class Admin_POSummary : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    private bool _refreshExp = false;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            string str = xms.getBillToPOCount(707, "IOSMAC");
            List<FiscalCalendarVO> lst = ser.Deserialize<List<FiscalCalendarVO>>(str);
            DataTable dt = Utility.ConvertToDataTable(lst);
            Session["dtBillTo"] = dt;
            DataTable dtCompCodes = dt.DefaultView.ToTable(true, "CompCode");

            rptCompCodes.DataSource = dtCompCodes;
            rptCompCodes.DataBind();
        }
    }

    protected void rptCompCodes_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (e.CommandName == "view")
        {
            ImageButton ib = (ImageButton)e.Item.FindControl("btnView");
            if (ib.ImageUrl.Contains("add.png"))
            {
                ib.ImageUrl = "~/images/icons/cancelInvicon.png";
                DataTable dt = (DataTable)Session["dtBillTo"];
                DataView view = new DataView((DataTable)dt, "CompCode = '" + e.CommandArgument + "'", "CompCode", DataViewRowState.CurrentRows);
                DataTable dtYears = view.ToTable(true, "year", "compcode");

                Repeater rpt = (Repeater)e.Item.FindControl("rptYears");
                rpt.DataSource = dtYears;
                rpt.DataBind();
                rpt.Visible = true;
            }
            else
            {
                ib.ImageUrl = "~/images/icons/add.png";
                Repeater rptYears = (Repeater)e.Item.FindControl("rptYears");
                rptYears.Visible = false;
            }
        }
        else if (e.CommandName == "show")
        {
            LinkButton lb = (LinkButton)e.Item.FindControl("lbCompCodes");
            BindPODetails(Convert.ToInt32(Session["OrgID"]), e.CommandArgument.ToString(), 0, string.Empty, Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void rptYears_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (e.CommandName == "view")
        {
            ImageButton ib = (ImageButton)e.Item.FindControl("btnViewMonths");
            string[] splitStr = e.CommandArgument.ToString().Split('|');
            if (ib.ImageUrl.Contains("add.png"))
            {
                ib.ImageUrl = "~/images/icons/cancelInvicon.png";
                DataTable dt = (DataTable)Session["dtBillTo"];
                DataView view = new DataView((DataTable)dt, "Year = '" + splitStr[0] + "' and CompCode = '" + splitStr[1] + "'", "Year", DataViewRowState.CurrentRows);
                DataTable dtMonths = view.ToTable();

                Repeater rpt = (Repeater)e.Item.FindControl("rptMonths");
                rpt.DataSource = dtMonths;
                rpt.DataBind();
                rpt.Visible = true;
            }
            else
            {
                ib.ImageUrl = "~/images/icons/add.png";

                Repeater rptMonths = (Repeater)e.Item.FindControl("rptMonths");
                rptMonths.Visible = false;
            }
        }
        else if (e.CommandName == "show")
        {
            LinkButton lb = (LinkButton)e.Item.FindControl("lbYear");
            string[] splitStr = e.CommandArgument.ToString().Split('|');
            BindPODetails(Convert.ToInt32(Session["OrgID"]), splitStr[1], Convert.ToInt32(splitStr[0]), string.Empty, Convert.ToInt32(Session["UserID"]));
        }
    }

    protected void rptMonths_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (e.CommandName == "show")
        {
            LinkButton lb = (LinkButton)e.Item.FindControl("lbMonth");
            string[] splitStr = e.CommandArgument.ToString().Split('|');
            BindPODetails(Convert.ToInt32(Session["OrgID"]), splitStr[2], Convert.ToInt32(splitStr[0]), splitStr[1], Convert.ToInt32(Session["UserID"]));
        }
    }

    void BindPODetails(int orgId, string compCode, int fiscalYear, string fiscalMonth, int userId)
    {
        string str = xms.getBillToPODetails(orgId, compCode, fiscalYear, fiscalMonth, userId);
        List<ExpDetailsPagesVO> lst = ser.Deserialize<List<ExpDetailsPagesVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        Session["dtPODetails"] = dt;
        gvPODetails.DataSource = dt;
        gvPODetails.DataBind();

        popup.Show();
    }

    protected void gvPODetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            LinkButton lnkReqEdit = (LinkButton)e.Row.FindControl("lnkReqEdit");
            Label lblAmnt = (Label)e.Row.FindControl("lblAmnt");
            Label lblPurpose = (Label)e.Row.FindControl("lblPurpose");
            HiddenField hdnPreApproved = (HiddenField)e.Row.FindControl("hdnPreApproved");
            if (hdnPreApproved.Value == "0")
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "ActualAmount").ToString();
            else
                lblAmnt.Text = DataBinder.Eval(e.Row.DataItem, "PreAmount").ToString();

            if (hdnPreApproved.Value == "2")
            {
                lblPurpose.Text = DataBinder.Eval(e.Row.DataItem, "PreferredVendor").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "OurRefNo").ToString();
            }
            else
            {
                lblPurpose.Text = DataBinder.Eval(e.Row.DataItem, "Purpose").ToString();
                lnkReqEdit.Text = DataBinder.Eval(e.Row.DataItem, "RequestId").ToString();
            }

            HiddenField hdnLmtExceeded = (HiddenField)e.Row.FindControl("hdnLmtExceeded");
            HiddenField hdnBudgetLimitExceeded = (HiddenField)e.Row.FindControl("hdnBudgetLimitExceeded");
            int x = 0;
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

            HiddenField hdStatus = (HiddenField)e.Row.FindControl("hdStatus");
            HiddenField hdnStatusID = (HiddenField)e.Row.FindControl("hdnStatusID");
            string status = hdnStatusID.Value;

            Label lblColor = (Label)e.Row.FindControl("lblColor");
            if (status == "4")
            {
                lblColor.Style.Add("background-image", "url(~/images/icons/tick.png)");
                lblColor.ToolTip = "Approved";
            }
            else if (status == "2")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/Chief.png)");
                lblColor.ToolTip = "AP Review";
            }
            else if (status == "5" || status == "6")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/delet_cancel.png)");
                lblColor.ToolTip = "Rejected";
            }
            else if (status == "3")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/disk.png)");
                lblColor.ToolTip = "Saved";
            }
            else if (status == "4")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = "Approved";
            }
            else if (status == "7")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/tick.png)");
                lblColor.ToolTip = "PreApproved";
            }
            else if (status == "1")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/user_suit.png)");
                lblColor.ToolTip = "Manager Review";
            }
            else if (status == "11")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/cancelled.png)");
                lblColor.ToolTip = "Cancelled";
            }
            else if (status == "17")
            {
                lblColor.Style.Add(" background-image", "url(images/icons/park.png)");
                lblColor.ToolTip = "Parked";
            }
        }

        if (e.Row.RowType == DataControlRowType.Header)
        {
            LinkButton lnkActAmount = (LinkButton)e.Row.FindControl("lnkActAmount");
            LinkButton lnkPurpose = (LinkButton)e.Row.FindControl("lnkPurpose");
            LinkButton lnkRequestID = (LinkButton)e.Row.FindControl("lnkRequestID");

            lnkPurpose.Text = "PreferredVendor";
            lnkPurpose.CommandArgument = "PreferredVendor";
            lnkActAmount.CommandArgument = "PreAmount";
            lnkRequestID.Text = "PONo";
            lnkRequestID.CommandArgument = "OurRefNo";

            if (Session["SortDir_ViewPo"] != null && Session["Control_ViewPo"] != null)
            {
                LinkButton sortLink = (LinkButton)e.Row.FindControl(Session["Control_ViewPo"].ToString());
                if (Session["SortDir_ViewPo"].ToString() == "Asc")
                    sortLink.Text += "<img src='images/arrow_down blue.png' width='11px' height='11px'/>";
                else
                    sortLink.Text += "<img src='images/arrow_up blue.png' width='11px' height='11px' />";
            }

        }
    }

    protected void SortExpression(Object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Session["Control_ViewPo"] = lnk.ID;
        if (Session["SortDir_ViewPo"] == null || Session["SortDir_ViewPo"].ToString() == "Desc")
            Session["SortDir_ViewPo"] = "Asc";
        else
            Session["SortDir_ViewPo"] = "Desc";

        Session["SortExpr_ViewPo"] = e.CommandArgument;

        SortGrid();
    }

    private void SortGrid()
    {
        DataTable dt = (DataTable)Session["dtPODetails"];
        DataView sortedView = new DataView(dt);

        if ((Session["SortExpr_ViewPo"] != null) && Session["SortDir_ViewPo"] != null)
        {
            if (Session["SortExpr_ViewPo"].ToString() == "PreAmount")
            {
                DataTable dt2 = dt.Clone();
                dt2.Columns["PreAmount"].DataType = Type.GetType("System.Double");
                foreach (DataRow dr in dt.Rows)
                {
                    dt2.ImportRow(dr);
                }
                dt2.AcceptChanges();
                sortedView = dt2.DefaultView;
            }
            sortedView.Sort = Session["SortExpr_ViewPo"].ToString() + " " + Session["SortDir_ViewPo"].ToString();
            gvPODetails.DataSource = sortedView;
        }
        else
            gvPODetails.DataSource = dt;

        gvPODetails.DataBind();
    }
}