using ExpenseServiceBeta;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Quotations_test : System.Web.UI.Page
{
    public string list = string.Empty;
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    protected void Page_Load(object sender, EventArgs e)
    {
        DataTable dt = new DataTable();
        DataTable dtCust = new DataTable();
        string str = xms.getVendorAgreements(1082, string.Empty, string.Empty);
        List<AgreementVO> lst = ser.Deserialize<List<AgreementVO>>(str);
        dt = Utility.ConvertToDataTable(lst);

        string strCust = xms.getAgrmentTransaction(1082, string.Empty);
        List<AgrmntTransactionVO> lstCust = ser.Deserialize<List<AgrmntTransactionVO>>(strCust);
        dtCust = Utility.ConvertToDataTable(lstCust);

        DataTable dtAgr = dt.Clone();
        string[] arrAgr = dtCust.AsEnumerable().Select(r => r.Field<string>("agrmntCode")).ToArray();
        for (int i = 0; i < dt.Rows.Count; i++)
            if (!arrAgr.Contains(dt.Rows[i]["agreementCode"].ToString()))
                dtAgr.ImportRow(dt.Rows[i]);
        DataTable dtTemp = dtAgr.Clone();

        if (!dtTemp.Columns.Contains("value"))
            dtTemp.Columns.Add("value");

        int j = 0;
        foreach (DataRow row in dtAgr.Rows)
        {
            dtTemp.ImportRow(row);
            dtTemp.Rows[j]["value"] = dtTemp.Rows[j]["agreementCode"];
            j++;
        }

        list = ConvertDataTableToJSON(dtTemp);
        //list = "[{value: 'jquery', label: 'jQuery', desc: 'the write less, do more, JavaScript library', from: '07/27/2015', to: '07/31/2015', icon: 'jquery_32x32.png'}," +
        //      "{value: 'jquery-ui', label: 'jQuery UI', desc: 'the official user interface library for jQuery', from: '07/27/2015', to: '07/31/2015', icon: 'jqueryui_32x32.png'}," +
        //      "{value: 'sizzlejs', label: 'Sizzle JS', desc: 'a pure-JavaScript CSS selector engine', from: '07/27/2015', to: '07/31/2015', icon: 'sizzlejs_32x32.png' }]";
        list = list.Replace("'", "\"");
    }

    private static jquery GetItem<jquery>(DataRow dr)
    {
        Type temp = typeof(jquery);
        jquery obj = Activator.CreateInstance<jquery>();

        foreach (DataColumn column in dr.Table.Columns)
        {
            foreach (PropertyInfo pro in temp.GetProperties())
            {
                if (pro.Name == column.ColumnName)
                    pro.SetValue(obj, dr[column.ColumnName], null);
                else
                    continue;
            }
        }
        return obj;
    }

    private string ConvertDataTableToJSON(DataTable dt)
    {
        string str = string.Empty;
        str += "[";
        for (int i = 0; i < dt.Rows.Count; i++)//Rows
        {
            str += "{";
            for (int j = 0; j < dt.Columns.Count; j++)//Columns
                str += dt.Columns[j].ColumnName.ToString() + ":" + "'" + dt.Rows[i][j].ToString() + "', ";
            str = str.Substring(0, str.Length - 2) + "}, ";
        }
        return str.Substring(0, str.Length - 2) + "]";
    }
}