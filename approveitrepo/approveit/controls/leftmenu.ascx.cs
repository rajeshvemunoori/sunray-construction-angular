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
                //str += "<li class='has-children' style='text-transform: uppercase'><a href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + "Dashboard.aspx'><i class='glyphicon glyphicon-dashboard'></i>&nbsp;&nbsp;Dashboard</a></li>";
                string headerLevel = "";
                for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                {
                    if (!headerLevel.Contains(ds.Tables[0].Rows[i]["CodeValue3"].ToString()) && !ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower().Contains("top"))
                    {
                        headerLevel += ds.Tables[0].Rows[i]["CodeValue3"].ToString() + ",";
                        str += "<li class='has-children' style='text-transform: uppercase'><a href='javascript:void(0)'>";
                        if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "admin")
                            str += "<i class='glyphicon glyphicon-user'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "accounts payable")
                            str += "<i class='glyphicon glyphicon-list-alt'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "expenses")
                            str += "<i class='glyphicon glyphicon-usd'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "purchase orders")
                            str += "<i class='glyphicon glyphicon-usd'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "approvals")
                            str += "<i class='glyphicon glyphicon-ok'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "invoice")
                            str += "<i class='glyphicon glyphicon-file'></i>";
                        else if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == "timesheet")
                            str += "<i class='glyphicon glyphicon-time'></i>";
                        str += "&nbsp;&nbsp;" + ds.Tables[0].Rows[i]["CodeValue3"].ToString() + "</a>" +
                          "<ul>";

                        for (int j = 0; j < ds.Tables[0].Rows.Count; j++)
                        {
                            if (ds.Tables[0].Rows[i]["CodeValue3"].ToString().ToLower() == ds.Tables[0].Rows[j]["CodeValue3"].ToString().ToLower())
                            {
                                if (Request.RawUrl.ToLower().ToString().Contains(ds.Tables[0].Rows[j]["CodeValue1"].ToString().ToLower()))
                                {
                                    str += "<li><a href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + ds.Tables[0].Rows[j]["CodeValue1"].ToString() + "' onclick='showProgress();'>" + ds.Tables[0].Rows[j]["Description"].ToString() + "</a></li>";
                                }
                                else
                                {
                                    str += "<li><a href='" + ConfigurationManager.AppSettings["BetaSiteLink"] + ds.Tables[0].Rows[j]["CodeValue1"].ToString() + "' onclick='showProgress();'>" + ds.Tables[0].Rows[j]["Description"].ToString() + "</a></li>";
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