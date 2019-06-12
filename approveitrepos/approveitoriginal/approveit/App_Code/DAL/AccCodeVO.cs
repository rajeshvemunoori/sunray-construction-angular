using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for AccCodeVO
/// </summary>
public class AccCodeVO
{
	public AccCodeVO()
	{
    }
    private string _accountCode = string.Empty;
    public string accountCode
    {
        get { return _accountCode; }
        set { _accountCode = value; }
    }

    private string _compCode = string.Empty;
    public string compCode
    {
        get { return _compCode; }
        set { _compCode = value; }
    }

    private int _orgId = 0;
    public int orgId
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _deptCode = string.Empty;
    public string deptCode
    {
        get { return _deptCode; }
        set { _deptCode = value; }
    }

    private string _expCode = string.Empty;
    public string expCode
    {
        get { return _expCode; }
        set { _expCode = value; }
    }

    private string _expItem = string.Empty;
    public string expItem
    {
        get { return _expItem; }
        set { _expItem = value; }
    }
}