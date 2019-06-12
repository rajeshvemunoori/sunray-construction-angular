using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class Codes_License : System.Web.UI.Page
{
    #region private variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();

    #endregion

    #region View License

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Login.aspx");

            if (!IsPostBack)
            {
                LoadData();
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }

    private void LoadData()
    {
        GetOrgName();
    }

    protected void ReloadData(object sender, EventArgs e)
    {
        LoadData();
    }

    private void GetOrgName()
    {
        var orgDetails = xms.getOrgDetails(Convert.ToInt32(Session["OrgID"]), Session["Email"].ToString());
        List<OrgListVO> org = ser.Deserialize<List<OrgListVO>>(orgDetails);
        DataTable dt = Utility.ConvertToDataTable(org);
        txtOrgName.Text = dt.Rows[0]["Name"].ToString();
    }

    #endregion

    #region AllocateLicenses

    protected void AllocateLicenses(object sender, EventArgs e)
    { }

    #endregion

    #region Buy Licenses

    protected void BuyLicenses(object sender, EventArgs e)
    {

    }

    protected void PayForLicenses(object sender, EventArgs e)
    {

    }

    #endregion
}