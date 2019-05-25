using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for AccountCodeVO
/// </summary>
public class AccountCodeVO
{
    public AccountCodeVO()
    {
    }
    private string _accountCode = string.Empty;
    public string accountCode
    {
        get { return _accountCode; }
        set { _accountCode = value; }
    }

    private string _reqId = string.Empty;
    public string reqId
    {
        get { return _reqId; }
        set { _reqId = value; }
    }

    private string _expLineNo = string.Empty;
    public string expLineNo
    {
        get { return _expLineNo; }
        set { _expLineNo = value; }
    }
}