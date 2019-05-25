using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CodeVO
/// </summary>
public class JobVO
{
    public JobVO()
    {

    }

    private string _code = string.Empty;
    public string Code
    {
        get { return _code; }
        set { _code = value; }
    }

    private string _name = string.Empty;
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
}