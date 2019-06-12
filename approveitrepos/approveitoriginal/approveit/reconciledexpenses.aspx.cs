using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Globalization;
using System.Web.UI.HtmlControls;
using Saplin.Controls;

public partial class Reconciledexpenses : System.Web.UI.Page
{
    #region constructors

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();

    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            if (!IsPostBack)
            {
                GetUsers();
                GetMonths();
                SessionVar.dtReconciledExpenses = null;
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }

    protected void GvExpDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //Highlight row backcolor on mouse over
            e.Row.Attributes.Add("onmouseover", "this.originalstyle=this.style.backgroundColor;this.style.backgroundColor='#C6E2FF'");
            e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=this.originalstyle;");
            //Highlight row backcolor on mouse over
        }
    }

    protected void SortExpression(object sender, CommandEventArgs e)
    {
        LinkButton lnk = sender as LinkButton;
        Sort.ControlReconExp = lnk.ID;
        if (Sort.SortDirReconExp == null || Sort.SortDirReconExp == "Desc")
            Sort.SortDirReconExp = "Asc";
        else
            Sort.SortDirReconExp = "Desc";

        Sort.SortExprReconExp = e.CommandArgument.ToString();

        GetReconciledExpenses();
    }

    protected void BtnRefresh_Click(object sender, EventArgs e)
    {
        GetReconciledExpenses();
    }

    protected void BtnGo_Click(object sender, EventArgs e)
    {
        if (ddlEmployee.SelectedValue != "0")
        {
            GetReconciledExpenses();
            dvMainMessage.InnerHtml = string.Empty;
        }
        else
            DisplayErrorMessage(dvMainMessage, "Please select Employee", "Red");
    }

    protected void DdlEmployee_SelectedIndexChanged(object sender, EventArgs e)
    {
        SessionVar.selectedEmployees = GetSelectedEmployees();
    }

    protected void DdlMonth_SelectedIndexChanged(object sender, EventArgs e)
    {
        SessionVar.selectedMonths = GetSelectedMonths();
    }

    #endregion

    #region private methods

    private void GetUsers()
    {
        var users = xms.getUsersList(ut.NullSafeInteger(Session["OrgId"]), Session["CompCode"].ToString());
        List<UserVO> usersList = ser.Deserialize<List<UserVO>>(users);
        DataTable dtUsers = Utility.ConvertToDataTable(usersList);
        dtUsers.Columns.Add("fullName", typeof(string));

        foreach (DataRow row in dtUsers.Rows)
            row["fullName"] = row["fName"].ToString() + " " + row["lName"].ToString() + " (" + row["email"] + ")";

        ddlEmployee.DataSource = dtUsers;
        ddlEmployee.DataTextField = "fullName";
        ddlEmployee.DataValueField = "userId";
        ddlEmployee.DataBind();
        //ddlEmployee.Items.Insert(0, "Select Employee");
        //ddlEmployee.Items.FindByText("Select Employee").Value = "0";
    }

    private void GetMonths()
    {
        List<Months> monthsList = new List<Months>();

        for (int i = 1; i <= 12; i++)
        {
            Months month = new Months
            {
                monthId = i,
                monthName = DateTimeFormatInfo.CurrentInfo.GetMonthName(i)
            };
            monthsList.Add(month);
        }

        ddlMonth.DataSource = monthsList;
        ddlMonth.DataTextField = "monthName";
        ddlMonth.DataValueField = "monthId";
        ddlMonth.DataBind();
        ddlMonth.Items.Insert(0, "Please select Month");
        ddlMonth.Items.FindByText("Please select Month").Value = "0";
    }

    private void GetReconciledExpenses()
    {
        DataTable dtExpenses = new DataTable();
        if (SessionVar.dtReconciledExpenses == null)
        {
            string reconciledExp = xms.getReconciledRequests(ut.NullSafeInteger(Session["OrgID"]));
            List<ExpeseDetailsVO> reconcileExpList = ser.Deserialize<List<ExpeseDetailsVO>>(reconciledExp);
            dtExpenses = Utility.ConvertToDataTable(reconcileExpList);
        }
        else
            dtExpenses = SessionVar.dtReconciledExpenses;

        DataView dvExpenses = new DataView(dtExpenses);
        string selectedEmployees = SessionVar.selectedEmployees;
        string selectedMonths = SessionVar.selectedMonths;

        if (ddlMonth.SelectedValue != "0" && ddlMonth.SelectedValue != string.Empty)
        {
            //dvExpenses.RowFilter = "expDate LIKE '" + (ddlMonth.SelectedValue.Length == 2 ? ddlMonth.SelectedValue : "0" + ddlMonth.SelectedValue) + "/*' AND userId IN (" + GetParamFormatted(selectedEmployees) + ")";
            string rowFilter = string.Empty;
            string[] arrMonths = selectedMonths.Split(',');
            rowFilter = "(";

            for (int i = 0; i < arrMonths.Length; i++)
                rowFilter += "expDate LIKE '" + (arrMonths[i].Length == 2 ? arrMonths[i] : "0" + arrMonths[i]) + "/*' OR ";

            rowFilter = rowFilter.Substring(0, rowFilter.Length - 4);
            rowFilter += ") AND attCnt IN (" + GetParamFormatted(selectedEmployees) + ")";
            dvExpenses.RowFilter = rowFilter;
        }
        else
            dvExpenses.RowFilter = "userId IN (" + GetParamFormatted(selectedEmployees) + ")";

        if (dvExpenses.ToTable().Rows.Count > 0)
        {
            if ((!string.IsNullOrEmpty(Sort.SortExprReconExp)) && (!string.IsNullOrEmpty(Sort.SortDirReconExp)))
            {
                DataView dvSortedView = new DataView(dvExpenses.ToTable())
                {
                    Sort = Sort.SortExprReconExp + " " + Sort.SortDirReconExp
                };
                gvExpDetails.DataSource = dvSortedView;
            }
            else
                gvExpDetails.DataSource = dvExpenses.ToTable();
        }
        gvExpDetails.DataBind();
    }

    private void DisplayErrorMessage(HtmlGenericControl div, string message, string color)
    {
        div.InnerHtml = message;
        div.Style["color"] = color;
    }

    private string GetSelectedEmployees()
    {
        return GetMultiDropdownFormatted(ddlEmployee, "ddlEmployee");
    }

    private string GetSelectedMonths()
    {
        return GetMultiDropdownFormatted(ddlMonth, "ddlMonth");
    }

    private string GetMultiDropdownFormatted(DropDownCheckBoxes ddlId, string ddlName)
    {
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        DropDownCheckBoxes ddl = (DropDownCheckBoxes)this.FindControl(ddlName);
        foreach (ListItem item in ddl.Items)
        {
            if (item.Selected)
            {
                if (i < 1)
                    caption += item + ",";
                expStr += item.Value + ",";
                i++;
            }
        }
        if (i > 0)
            ddl.Texts.SelectBoxCaption = caption.TrimEnd(',') + "..";
        else
            ddlId.Texts.SelectBoxCaption = ddlName == "ddlMonth" ? "Select Month(s)" : "Select Employee(s)";
        return expStr.TrimEnd(',');
    }

    private string GetParamFormatted(string param)
    {
        string[] arr;
        if (param.Contains(","))
        {
            arr = new string[param.Split(',').Length];
            arr = param.Split(',');
        }
        else
        {
            List<String> lst = new List<string>
            {
                param
            };
            arr = lst.ToArray();
        }
        string str = string.Empty;
        for (int i = 0; i < arr.Length; i++)
            str += "'" + arr[i] + "', ";
        str = str.Substring(0, str.Length - 2);
        return str;
    }

    #endregion
}
