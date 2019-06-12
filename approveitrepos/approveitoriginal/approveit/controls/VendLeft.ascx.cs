using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ExpenseServiceBeta;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Data;

public partial class controls_VendLeft : System.Web.UI.UserControl
{
    #region private variables
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    #endregion

    #region public variables
    public string str = "";
    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
                Response.Redirect("../Logout.aspx");
            DataSet ds = new DataSet();
            DataView dv = new DataView();
            if (Session["MenuNav"] == null)
            {
                string strProfiles = xms.getVendScreens();
                List<ProfileVO> listProfiles = ser.Deserialize<List<ProfileVO>>(strProfiles);
                ds.Tables.Add(Utility.ConvertToDataTable(listProfiles));
                Session["MenuNav"] = ds;
            }
            else
                ds = (DataSet)Session["MenuNav"];
            if (ds.Tables[0].Rows.Count > 0)
                for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    str += "<li><a href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + ds.Tables[0].Rows[i]["CodeValue1"].ToString() + "' onclick='showProgress();'><span>" + ds.Tables[0].Rows[i]["CodeValue3"].ToString() + "</span></a></li>";
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }
}