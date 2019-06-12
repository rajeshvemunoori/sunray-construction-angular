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

public partial class controls_leftmenu : System.Web.UI.UserControl
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
                string strProfiles = xms.getProfileDetails(ut.NullSafeInteger(Session["OrgID"]), Session["CompCode"].ToString(), string.Empty, Session["UserGroup"].ToString());
                List<ProfileVO> listProfiles = ser.Deserialize<List<ProfileVO>>(strProfiles);
                ds.Tables.Add(Utility.ConvertToDataTable(listProfiles));
                Session["MenuNav"] = ds;
            }
            else
                ds = (DataSet)Session["MenuNav"];
            if (ds.Tables[0].Rows.Count > 0)
            {
                string headerLevel = "";
                for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                {
                    if (!headerLevel.Contains(ds.Tables[0].Rows[i]["CodeValue3"].ToString()) && !ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower().Contains("top"))
                    {
                        headerLevel += ds.Tables[0].Rows[i]["CodeValue3"].ToString() + ",";
                        str += "<li><a href='javascript:void(0)'><span>" + ds.Tables[0].Rows[i]["CodeValue3"].ToString() + "</span></a>" +
                          "<ul>";

                        for (int j = 0; j < ds.Tables[0].Rows.Count; j++)
                        {
                            if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == ds.Tables[0].Rows[j]["CodeValue3"].ToString().ToLower())
                            {
                                if (Request.RawUrl.ToLower().ToString().Contains(ds.Tables[0].Rows[j]["CodeValue1"].ToString().ToLower()))
                                {
                                    str += "<li class='active'><a class='nav-icon icon-admin' href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + ds.Tables[0].Rows[j]["CodeValue1"].ToString() + "' onclick='showProgress();'><span>" + ds.Tables[0].Rows[j]["Description"].ToString() + "</span></a></li>";
                                }
                                else
                                {
                                    str += "<li><a href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + ds.Tables[0].Rows[j]["CodeValue1"].ToString() + "' onclick='showProgress();'><span>" + ds.Tables[0].Rows[j]["Description"].ToString() + "</span></a></li>";
                                }
                            }
                        }
                        str += "</ul></li>";
                    }
                }
            }
        }
        catch (Exception ex)
        {
            xms.exceptionLog(ex.Message, ex.ToString(), ut.NullSafeInteger(Session["UserID"]));
        }
    }
}