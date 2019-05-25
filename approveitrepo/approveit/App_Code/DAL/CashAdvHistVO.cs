using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CashAdvHistVO
/// </summary>
public class CashAdvHistVO
{
    public CashAdvHistVO()
    {
    }

    private string _oldCashAdvAmt = string.Empty;
    public string OldCashAdvAmt
    {
        get { return _oldCashAdvAmt; }
        set { _oldCashAdvAmt = value; }
    }

    private string _newCashAdvAmt = string.Empty;
    public string NewCashAdvAmt
    {
        get { return _newCashAdvAmt; }
        set { _newCashAdvAmt = value; }
    }

    private string _modifiedDate = string.Empty;
    public string ModifiedDate
    {
        get { return _modifiedDate; }
        set { _modifiedDate = value; }
    }

    private string _modifiedBy = string.Empty;
    public string ModifiedBy
    {
        get { return _modifiedBy; }
        set { _modifiedBy = value; }
    }

    private string _purpose = string.Empty;
    public string Purpose
    {
        get { return _purpose; }
        set { _purpose = value; }
    }

    private string _expItem = string.Empty;
    public string ExpItem
    {
        get { return _expItem; }
        set { _expItem = value; }
    }
}