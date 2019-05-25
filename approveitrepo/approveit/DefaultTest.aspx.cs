using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class DefaultTest : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        cal10.SelectedDate = DateTime.Now.AddDays(-5);
        cal10.SelectedDate = DateTime.Now.AddDays(-3);
        cal10.SelectedDate = DateTime.Now.AddDays(-1);

        DateTime a = DateTime.Now;
        DateTime b = DateTime.Now.AddDays(-5);

        int x = (a.Subtract(b)).Days;

        //DataTable dt = new DataTable();
        //dt.Columns.Add("Col1");
        //DataRow dr;
        //for (int i = 0; i < 10; i++) 
        //{
        //    dr = dt.NewRow();
        //    dr["Col1"] = "Text"+i;
        //    dt.Rows.Add(dr);
        //}
        //dt.AcceptChanges();
        //gv.DataSource = dt;
        //gv.DataBind();

        string data = "Hello World!.How are<br> you?";
        string searchStr = "How are you?";
        string result = "Hello World!.I am good";

        string test = data.Replace("<br>", "").Replace(searchStr, "I am good");
        Response.Write(test);
    }
    protected void btn_Click(object sender, EventArgs e)
    {
        string newPath = ("ERTemp");
        string connectionString = "";
        string fileName = Path.GetFileName(fupdBudget.PostedFile.FileName);
        string fileExtension = Path.GetExtension(fupdBudget.PostedFile.FileName);
        string fileLocation = Server.MapPath(newPath) + "\\" + fileName;
        fupdBudget.SaveAs(fileLocation);

        //Check whether file extension is xls or xslx


        if (fileExtension == ".xls")
            connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
        else if (fileExtension == ".xlsx")
            connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";

        //Create OleDB Connection and OleDb Command

        OleDbConnection con = new OleDbConnection(connectionString);
        OleDbCommand cmd = new OleDbCommand();
        cmd.CommandType = System.Data.CommandType.Text;
        cmd.Connection = con;
        OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
        DataTable dtExcelRecords = new DataTable();
        con.Open();
        DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
        cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
        dAdapter.SelectCommand = cmd;
        dAdapter.Fill(dtExcelRecords);
        con.Close();
        System.IO.File.Delete(fileLocation);
    }
}