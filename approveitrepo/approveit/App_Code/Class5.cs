using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Class5
/// </summary>
public class Class5 : Class4
{
    public Class5()
    {
        //
        // TODO: Add constructor logic here
        //

        Class4 c = new Class4();
        string x = c.test123().ToString();
        string y = Class4.test().ToString();

        User u = new User();
        u.username = "";


        //save
        string a = u.username;
    }
}

