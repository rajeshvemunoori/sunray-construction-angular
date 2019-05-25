using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html.simpleparser;
using System.Net.Mail;
using System.IO;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Reports : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    #endregion

    #region Reports

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("Logout.aspx");
            else
            {
                if (!IsPostBack)
                {
                    ddlVendors.Items.Insert(0, "Preferred Vendor");
                    ddlVendors.Items.FindByText("Preferred Vendor").Value = "0";
                    ddlVendors.Items.Insert(1, "User");
                    ddlVendors.Items.FindByText("User").Value = "1";
                    ddlVendors.Items.Insert(2, "Year");
                    ddlVendors.Items.FindByText("Year").Value = "2";
                    GetChartsByDropdownItem();
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    void BindReports(int type, int dlType)
    {
        pcReport.Controls.Add(new LiteralControl("<iframe src='Frame.aspx?type=" + type + "&dlType=" + dlType + "' marginheight='0px' marginwidth='0px' frameborder='0' allowtransparency='true' scrolling='no' width='900px' height='300px'></iframe>"));
    }

    protected void ddlVendors_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("Reports");
        if (ddlType.SelectedItem.Text == "Purchase Order")
            GetChartsByType();
        else
            GetChartsByDropdownItem();
    }

    protected void ddlType_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session.Remove("Reports");
        if (ddlType.SelectedItem.Text == "Purchase Order")
        {
            ddlVendors.Items.Clear();
            ddlVendors.Items.Insert(0, "Preferred Vendor");
            ddlVendors.Items.FindByText("Preferred Vendor").Value = "0";
            ddlVendors.Items.Insert(1, "Usage");
            ddlVendors.Items.FindByText("Usage").Value = "1";
            ddlVendors.Items.Insert(2, "Overage");
            ddlVendors.Items.FindByText("Overage").Value = "2";
            GetChartsByType();
        }
        else
        {
            ddlVendors.Items.Clear();
            ddlVendors.Items.Insert(0, "Preferred Vendor");
            ddlVendors.Items.FindByText("Preferred Vendor").Value = "0";
            ddlVendors.Items.Insert(1, "User");
            ddlVendors.Items.FindByText("User").Value = "1";
            ddlVendors.Items.Insert(2, "Year");
            ddlVendors.Items.FindByText("Year").Value = "2";
            GetChartsByDropdownItem();
        }
    }

    void GetChartsByType()//PO
    {
        if (ddlVendors.SelectedItem.Text == "Preferred Vendor")
            BindReports(1, 2);
        else if (ddlVendors.SelectedItem.Text == "Usage")
            BindReports(2, 2);
        else if (ddlVendors.SelectedItem.Text == "Overage")
            BindReports(4, 2);
    }

    void GetChartsByDropdownItem()//Expense
    {
        if (ddlVendors.SelectedItem.Text == "Preferred Vendor")
            BindReports(1, 1);
        else if (ddlVendors.SelectedItem.Text == "User")
            BindReports(2, 1);
        else
            BindReports(3, 1);
    }

    #endregion
}