using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Data;
using System.Web.Script.Serialization;
using Saplin.Controls;

public partial class DownloadPOs : System.Web.UI.Page
{
    #region private constructors
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    Utility ut = new Utility();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    #endregion

    #region protected events

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
            Response.Redirect("Logout.aspx");
        if (!IsPostBack)
        {
            txtFrom.Text = DateTime.Now.AddMonths(-1).ToShortDateString();
            txtTo.Text = DateTime.Now.ToShortDateString();
            loadStatus();
        }
    }

    protected void btnExportPO_Click(object sender, EventArgs e)
    {
        string fromDate = string.Empty;
        string toDate = string.Empty;
        getDates(out fromDate, out toDate);
        string str = xms.getAllPOs(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, 2, fromDate, toDate);
        List<ExpeseDetailsVO> lstAlPOs = ser.Deserialize<List<ExpeseDetailsVO>>(str);
        List<ExpeseDetailsVO> lst = new List<ExpeseDetailsVO>();

        getStatusSelected();
        foreach (ExpeseDetailsVO item in lstAlPOs)
        {
            string[] arr = hdnStatus.Value.Split(',');

            if ((new int[] { 6, 2, 5, 1, 3, 10, 17, 18, 11, 8, 9 }).Contains(item.attCnt))
                item.ourRefNo = "Unallocated";

            if (arr.Contains(item.attCnt.ToString()) || arr.Contains(item.automileageFlag.ToString()))
                lst.Add(item);
        }

        lst = lst.OrderBy(o => o.addedOn).ToList();

        DataTable dtExport = getPOsToExport(lst);

        if (dtExport.Rows.Count > 0)
        {
            Session["allPODgrid"] = dtExport;
            Response.Redirect("DownloadFile.aspx?typ=99");
        }
        else
        {
            dvError.InnerText = "No data found!";
            dvError.Style["color"] = "Red";
        }
    }

    #endregion

    #region private members

    /// <summary>
    /// gets formatted table in pivot format with suim of po amount department wise
    /// </summary>
    /// <param name="lst">list of raw POs</param>
    /// <returns>pivot formatted datatable</returns>
    private DataTable getPOsToExport(List<ExpeseDetailsVO> lst)
    {
        DataTable dtFormatted = new DataTable();
        dtFormatted.Columns.Add("A/C Date");
        dtFormatted.Columns.Add("PO#");
        dtFormatted.Columns.Add("A/C#");
        dtFormatted.Columns.Add("Description");

        List<string> lstDept = getDepartments();

        foreach (string item in lstDept)
            dtFormatted.Columns.Add(item);

        foreach (ExpeseDetailsVO item in lst)
        {
            if (!dtFormatted.AsEnumerable().Any(row => row.Field<String>("PO#").Equals(item.ourRefNo)) ||
                !dtFormatted.AsEnumerable().Any(row => row.Field<String>("A/C#").Equals(item.accountCode)))
            {
                DataRow dr = dtFormatted.NewRow();
                dr["PO#"] = item.ourRefNo;
                dr["Description"] = item.purpose;
                dr["A/C Date"] = item.startDate;
                dr["A/C#"] = item.accountCode;
                dr[item.deptCode] = item.preAmount;
                dtFormatted.Rows.Add(dr);
                dtFormatted.AcceptChanges();
            }
            else
            {
                foreach (DataRow dr in dtFormatted.Rows)
                {
                    if (dr["PO#"].ToString() == item.ourRefNo && dr["A/C#"].ToString() == item.accountCode)
                    {
                        double count = ut.NullSafeDouble(dr[item.deptCode]);
                        count += item.preAmount;
                        dr[item.deptCode] = count;
                    }
                }
            }
        }


        return dtFormatted;
    }

    /// <summary>
    /// get and load status from database
    /// </summary>
    private void loadStatus()
    {
        List<string> lstStatus = new List<string>();
        lstStatus.Add("Approved");
        lstStatus.Add("Forwarded");
        lstStatus.Add("Invoiced");
        lstStatus.Add("Pending Approval");
        lstStatus.Add("Parked");
        lstStatus.Add("Ready For Payment");

        string expr = "CODEID = 'STATUS' AND CODEVALUE1 <> ''";
        DataView view = new DataView((DataTable)Session["dsCodes"], expr, "CodeID", DataViewRowState.CurrentRows);
        cblStatus.DataSource = view.ToTable();
        cblStatus.DataTextField = "Description";
        cblStatus.DataValueField = "CodeValue1";
        cblStatus.DataBind();

        for (int i = 0; i < cblStatus.Items.Count; i++)
        {
            if (cblStatus.Items[i].ToString().ToLower().Contains("approve") || cblStatus.Items[i].ToString().ToLower().Contains("forward") || cblStatus.Items[i].ToString().ToLower().Contains("manager review"))
                cblStatus.Items[i].Selected = true;
        }

        //ddlStatus.DataSource = view.ToTable();
        //ddlStatus.DataTextField = "Description";
        //ddlStatus.DataValueField = "CodeValue1";
        //ddlStatus.DataBind();
    }

    /// <summary>
    /// get comma separated status values selected in dropdown list
    /// </summary>
    private void getStatusSelected()
    {
        string expStr = string.Empty;
        string caption = string.Empty;
        int i = 0;
        //foreach (ListItem item in ddlStatus.Items)
        foreach (ListItem item in cblStatus.Items)
        {
            if (item.Selected)
            {
                if (i < 1)
                    caption += item + ",";
                expStr += item.Value + ",";
                i++;
            }
        }

        hdnStatus.Value = expStr.TrimEnd(',');
        ScriptManager.RegisterStartupScript(this, this.GetType(), "key", "showDateWindow();", true);
    }

    /// <summary>
    /// get from and to dates based on selection
    /// </summary>
    /// <param name="fromDate"></param>
    /// <param name="toDate"></param>
    private void getDates(out string fromDate, out string toDate)
    {
        if (ddlPeriod.SelectedValue == "1")
        {
            fromDate = DateTime.Now.AddYears(-1).ToShortDateString();
            toDate = DateTime.Now.ToShortDateString();
        }
        else if (ddlPeriod.SelectedValue == "2")
        {
            fromDate = DateTime.Now.AddMonths(-3).ToShortDateString();
            toDate = DateTime.Now.ToShortDateString();
        }
        else if (ddlPeriod.SelectedValue == "3")
        {
            fromDate = DateTime.Now.AddMonths(-1).ToShortDateString();
            toDate = DateTime.Now.ToShortDateString();
        }
        else
        {
            fromDate = txtFrom.Text;
            toDate = txtTo.Text;
        }
    }

    /// <summary>
    /// load department list for pivot
    /// </summary>
    /// <returns></returns>
    private List<string> getDepartments()
    {
        string str = xms.getCodes(Convert.ToInt32(Session["OrgID"]), Session["CompCode"].ToString(), "DEPT");
        List<CodeValueVO> lst = ser.Deserialize<List<CodeValueVO>>(str);
        return (lst.Select(x => x.codeKey).Distinct()).ToList();
    }

    #endregion
}