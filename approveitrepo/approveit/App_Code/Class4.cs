using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Class4
/// </summary>
public class Class4
{
    public Class4()
    {
        //
        // TODO: Add constructor logic here
        //
        string x = test123().ToString();
        string y = test123("test");
    }

    [Obsolete("no longer in use", false)]
    public int test123()
    {
        DataTable dt = new DataTable();
        int a = 10;
        int b = 20;
        int c = a + b;
        return c;

        string[] arr = new string[10];
        //arr = ;
        List<string> lst = new List<string>();

    }

    /// <summary>
    /// test method
    /// </summary>
    /// <param name="msg">message</param>
    /// <returns></returns>
    public string test123(string msg)
    {
        return "This is a C# program";
    }

    public static int test()
    {
        int a = 10;
        int b = 20;
        int c = a + b;
        return c;
    }
}