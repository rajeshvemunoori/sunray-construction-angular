using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public partial class controls_UserInfo : System.Web.UI.UserControl
{
    #region public variables

    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    public DataSet dsManager = new DataSet();

    #endregion

    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (Session["UserID"] == null)
            {
                Response.Redirect("Logout.aspx");
            }
            else
            {
                if (Session["Cnt"] == "1")
                {
                    if (Session["ReqID"].ToString() != "All")
                    {                        
                        //string strMgr = xms.getUserDetails(Session["ManagerEmail"].ToString());
                        //List<UserVO> lstMgr = ser.Deserialize<List<UserVO>>(strMgr);
                        //dsManager.Tables.Add(Utility.ConvertToDataTable(lstMgr));
                    }
                }
            }
        }
        catch (Exception ex)
        {
            //eBLL.ExceptionLog(ex.Message, ex.ToString(), Convert.ToInt32(Session["UserID"]));
        }
    }
}