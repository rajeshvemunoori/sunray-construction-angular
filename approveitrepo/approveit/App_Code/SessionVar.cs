using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.IO;

/// <summary>
/// Summary description for SessionVar
/// </summary>
public class SessionVar : Months
{
    public SessionVar()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    
    public static DataTable dtAllExpenses { get; set; }
    public static DataTable dtExpenses { get; set; }
    public static DataTable dtCC { get; set; }
    public static DataTable dtReconciledExpenses { get; set; }
    public static DataTable dtReconciledCCTransactions { get; set; }
    public static DataTable dtNonReconciledCCTransactions { get; set; }
    public static DataTable dtAccountCodes { get; set; }

   
    public static double tolerancePercent { get; set; }
    [Class1(MaxLength = 10)]
    public static string reconcileType { get; set; }
    public static string selectedEmployees { get; set; }
    public static string selectedMonths { get; set; }
    public static string selectedCCMonths { get; set; }
    public static DataTable dtAllCCTransactions { get; set; }

    public string test(string a)
    {
        return a.ToUpper();
    }

    public int test(int i)
    {        
        return i;
    }

    public int test123(int i)
    {
        return i;
    }
}