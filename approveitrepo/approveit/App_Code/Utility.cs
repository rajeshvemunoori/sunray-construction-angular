using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Configuration;
using System.IO;
using System.Text;
using System.Data.SqlClient;
using System.Xml;
using System.Web;
using System.ComponentModel;
using System.Web.Script.Serialization;



public class Utility
{

    public const int WILDCARD_ID = -1;
    //<summary>
    // Converts null string to empty string
    //</summary>
    //<param name="arg"></param>
    //<returns>returns a string</returns>
    public static string NullSafeString(object arg)
    {
        string returnIfEmpty = "";
        string returnValue = null;

        if ((object.ReferenceEquals(arg, DBNull.Value)) || (arg == null) || (object.ReferenceEquals(arg, string.Empty)))
        {
            returnValue = returnIfEmpty;
        }
        else
        {
            try
            {
                returnValue = Convert.ToString(arg).Trim();
            }
            catch
            {
                returnValue = returnIfEmpty;
            }

        }

        return returnValue;

    }

    /// <summary>
    /// Handles nulls on integers
    /// </summary>
    /// <param name="arg"></param>
    /// <param name="returnIfEmpty"></param>
    /// <returns></returns>
    /// <remarks></remarks>
    public int NullSafeInteger(object arg)
    {

        int returnIfEmpty = 0;
        int returnValue = 0;

        if ((object.ReferenceEquals(arg, DBNull.Value)) || (arg == null) || (object.ReferenceEquals(arg, string.Empty)))
        {
            returnValue = returnIfEmpty;
        }
        else
        {
            try
            {
                returnValue = Convert.ToInt32(arg);
            }
            catch
            {
                returnValue = returnIfEmpty;
            }
        }

        return returnValue;

    }

    /// <summary>
    /// Handles DBNulls and Nulls on doubles
    /// </summary>
    /// <param name="arg"></param>
    /// <param name="returnIfEmpty"></param>
    /// <returns></returns>
    /// <remarks></remarks>
    public double NullSafeDouble(object arg)
    {

        double returnValue = 0;
        double returnIfEmpty = 0;

        if ((object.ReferenceEquals(arg, DBNull.Value)) || (arg == null) || (object.ReferenceEquals(arg, string.Empty)))
        {
            returnValue = returnIfEmpty;
        }
        else
        {
            try
            {
                returnValue = Convert.ToDouble(arg);
            }
            catch
            {
                returnValue = returnIfEmpty;
            }
        }

        return returnValue;

    }

    /// <summary>
    /// Handles DBNulls and Nulls on Boolean Values
    /// </summary>
    /// <param name="arg"></param>
    /// <returns></returns>
    /// <remarks></remarks>
    public bool NullSafeBoolean(object arg)
    {

        bool returnValue = false;

        if ((object.ReferenceEquals(arg, DBNull.Value)) || (arg == null) || (object.ReferenceEquals(arg, string.Empty)))
        {
            returnValue = false;
        }
        else
        {
            try
            {
                returnValue = Convert.ToBoolean(arg);
            }
            catch
            {
                returnValue = false;
            }
        }

        return returnValue;

    }
    /// <summary>
    /// Creating the Text file into the Logs folder
    /// </summary>
    /// <param name="inputString"></param>
    /// <param name="pFileName"></param>
    /// <remarks></remarks>

    public void WriteToFile(string inputString, string pFileName)
    {
        StreamWriter fp = null;

        try
        {
            fp = File.AppendText(HttpContext.Current.Server.MapPath(".\\Logs\\") + pFileName);
            fp.WriteLine(inputString);
            fp.Close();
        }
        catch (Exception err)
        {
            throw new Exception("File Creation failed. Reason is as follows" + err.ToString());

        }
        finally
        {
        }
    }

    public string SplitStringWithoutSpace(string displayText)
    {
        string test = string.Empty;
        string[] sSplit = displayText.Split(' ');
        if (sSplit.Length > 1)
        { test = displayText; }
        else
        {
            int dLength = displayText.Length;
            if (dLength > 40)
            {
                for (int i = 0; i < dLength; i += 40)
                {
                    if (i + 40 > displayText.Length)
                    {
                        test += displayText.Substring(i);
                    }
                    else
                    {
                        test += displayText.Substring(i, 40) + "<br>";
                    }
                }
            }
            else
            {
                test = displayText;
            }
        }
        return test;
    }

    public string SplitString(string test)
    {
        string str = test;
        string[] strArr = str.Split(' ');
        int i = 0;
        if (strArr.Length > 20)
        {
            string str2New = "";
            for (i = 0; i <= 19; i++)
            {
                str2New += strArr[i] + " ";
            }
            str = str2New + "....";
        }
        return str;
    }

    public bool CheckTextArea(string strValue)
    {
        if (strValue.ToLower().IndexOf("insert") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("update") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("delete") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("<") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf(">") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf(";") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("truncate") >= 0)
        {
            return false;
        }
        return true;
    }

    public static DataTable ConvertToDataTable<T>(IList<T> data)
    {
        PropertyDescriptorCollection properties =
              TypeDescriptor.GetProperties(typeof(T));
        DataTable table = new DataTable();
        foreach (PropertyDescriptor prop in properties)
            table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
        foreach (T item in data)
        {
            DataRow row = table.NewRow();
            foreach (PropertyDescriptor prop in properties)
                row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
            table.Rows.Add(row);
        }
        return table;
    }

    public static string ConvertDatatableToJSON(DataTable dt)
    {
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
        Dictionary<string, object> row;
        foreach (DataRow dr in dt.Rows)
        {
            row = new Dictionary<string, object>();
            foreach (DataColumn col in dt.Columns)
            {
                row.Add(col.ColumnName, dr[col]);
            }
            rows.Add(row);
        }

        return serializer.Serialize(rows);
    }
}
