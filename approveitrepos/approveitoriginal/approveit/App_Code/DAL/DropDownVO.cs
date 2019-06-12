using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RequestVO
/// </summary>
public class DropDownVO
{
    public DropDownVO()
    {

    }

    private string  _codeValue = string.Empty;
    public string CodeValue
    {
        get { return _codeValue; }
        set { _codeValue = value; }
    }

    private string _codeID = string.Empty;
    public string CodeID
    {
        get { return _codeID; }
        set { _codeID = value; }
    }

    private string _codeKey = string.Empty;
    public string CodeKey
    {
        get { return _codeKey; }
        set { _codeKey = value; }
    }

    private string _description = string.Empty;
    public string Description
    {
        get { return _description; }
        set { _description = value; }
    }

}