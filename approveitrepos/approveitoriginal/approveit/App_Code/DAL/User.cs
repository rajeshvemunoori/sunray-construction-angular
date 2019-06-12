using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for User
/// </summary>
public class User
{
    public User()
    {
        //
        // TODO: Add constructor logic here
        //

    }

    [Class1(MaxLength = 10)]
    public string username { get; set; }
    public string email { get; set; }
    public string address { get; set; }


}