<%@ WebHandler Language="C#" Class="venddata" %>

using System;
using System.Web;
using System.Data;
using System.Web.SessionState;
using System.Collections.Generic;
using System.Text;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;

public class venddata : IHttpHandler, IRequiresSessionState
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    string str = string.Empty;

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        int func = ut.NullSafeInteger(context.Request.QueryString["func"].ToString());
        if (func == 1)
        {
            DataTable dt = (DataTable)context.Session["ItemCat"];
            string catCode = context.Request.QueryString["cat"].Replace("`", "&");
            DataView dv = new DataView(dt, "categoryCode = '" + catCode + "'", "categoryCode", DataViewRowState.CurrentRows);
            context.Session["ItemSubCat"] = dv.ToTable(true, "subCategoryCode", "subCategoryDescr");
        }
        if (func == 2)
        {
            string agrCode = context.Request.QueryString["agr"].Replace("`", "&");
            string item = context.Request.QueryString["it"].Replace("`", "&");
            string lpId = context.Request.QueryString["lpid"];
            string opId = context.Request.QueryString["opid"];
            string hlp = context.Request.QueryString["hlp"];
            string hop = context.Request.QueryString["hop"];
            DataTable dtItems = (DataTable)context.Session["Items"];
            DataView dvItems = new DataView(dtItems, "itemCode= '" + item + "'", "itemCode", DataViewRowState.CurrentRows);
            double listPrice = ut.NullSafeDouble(dvItems.ToTable().Rows[0]["listPrice"]);
            double ourPrice = 0;
            DataTable dtAgr = (DataTable)context.Session["Agreements"];
            DataView dvAgr = new DataView(dtAgr, "agreementCode = '" + agrCode + "'", "agreementCode", DataViewRowState.CurrentRows);
            if (dvAgr.ToTable().Rows.Count > 0)
            {
                if (dvAgr.ToTable().Rows[0]["isVolumeDiscnt"].ToString() != "Y")
                {
                    if (dvAgr.ToTable().Rows[0]["discntType"].ToString() == "0")//discount type is PRICE
                        ourPrice = listPrice - ut.NullSafeDouble(dvAgr.ToTable().Rows[0]["discntValue"]);
                    else if (dvAgr.ToTable().Rows[0]["discntType"].ToString() == "1")//discount type is PERCENTAGE
                        ourPrice = listPrice - ((ut.NullSafeDouble(dvAgr.ToTable().Rows[0]["discntValue"]) * listPrice) / 100);
                }
            }
            context.Response.Write(listPrice.ToString() + "~" + ourPrice.ToString() + "~" + lpId + "~" + opId + "~" + hlp + "~" + hop);

            //double listPrice = ut.NullSafeDouble(context.Request.QueryString["lp"]);
            //double ourPrice = 0;
            //DataTable dt = (DataTable)context.Session["Agreements"];
            //DataView dv = new DataView(dt, "agreementCode = '" + agrCode + "'", "agreementCode", DataViewRowState.CurrentRows);
            //if (dv.ToTable().Rows.Count > 0)
            //{
            //    if (dv.ToTable().Rows[0]["isVolumeDiscnt"].ToString() != "Y")
            //    {
            //        if (dv.ToTable().Rows[0]["discntType"].ToString() == "0")//discount type is PRICE
            //            ourPrice = listPrice - ut.NullSafeDouble(dv.ToTable().Rows[0]["discntValue"]);
            //        else if (dv.ToTable().Rows[0]["discntType"].ToString() == "1")//discount type is PERCENTAGE
            //            ourPrice = listPrice - ((ut.NullSafeDouble(dv.ToTable().Rows[0]["discntValue"]) * listPrice) / 100);
            //    }
            //}
            //context.Response.Write(ourPrice.ToString());
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}