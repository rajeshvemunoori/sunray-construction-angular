using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ReqStatusVO
/// </summary>
public class ReqStatusVO
{
    public ReqStatusVO()
    {

    }

    private string _modifiedOn = string.Empty;
    public string ModifiedOn
    {
        get { return _modifiedOn; }
        set { _modifiedOn = value; }
    }

    private string _oldStatus = string.Empty;
    public string OldStatus
    {
        get { return _oldStatus; }
        set { _oldStatus = value; }
    }

    private string _nStatus = string.Empty;
    public string NStatus
    {
        get { return _nStatus; }
        set { _nStatus = value; }
    }

    private string _empId = string.Empty;
    public string EmpId
    {
        get { return _empId; }
        set { _empId = value; }
    }

    private string _manager = string.Empty;
    public string Manager
    {
        get { return _manager; }
        set { _manager = value; }
    }

    private string _mgrEmail = string.Empty;
    public string MgrEmail
    {
        get { return _mgrEmail; }
        set { _mgrEmail = value; }
    }

    private string _reqId = string.Empty;
    public string ReqId
    {
        get { return _reqId; }
        set { _reqId = value; }
    }

    private string _orgId = string.Empty;
    public string OrgId
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _compCode = string.Empty;
    public string CompCode
    {
        get { return _compCode; }
        set { _compCode = value; }
    }

    private string _colType = string.Empty;
    public string ColType
    {
        get { return _colType; }
        set { _colType = value; }
    }

    private string _updatedOn = string.Empty;
    public string UpdatedOn
    {
        get { return _updatedOn; }
        set { _updatedOn = value; }
    }
}