using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ImportQBClasVO
/// </summary>
public class ImportQBClasVO
{
    public ImportQBClasVO()
    {
    }

    private int _orgId = 0;
    public int orgId
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _compCode = string.Empty;
    public string compCode
    {
        get { return _compCode; }
        set { _compCode = value; }
    }

    private string _className = string.Empty;
    public string className
    {
        get { return _className; }
        set { _className = value; }
    }

    private string _classRefId = string.Empty;
    public string classRefId
    {
        get { return _classRefId; }
        set { _classRefId = value; }
    }

    private string _syncToken = string.Empty;
    public string syncToken
    {
        get { return _syncToken; }
        set { _syncToken = value; }
    }

    private string _active = string.Empty;
    public string active
    {
        get { return _active; }
        set { _active = value; }
    }

    private string _subClass = string.Empty;
    public string subClass
    {
        get { return _subClass; }
        set { _subClass = value; }
    }

    private string _subClassRefId = string.Empty;
    public string subClassRefId
    {
        get { return _subClassRefId; }
        set { _subClassRefId = value; }
    }

    private int _type = 0;
    public int type
    {
        get { return _type; }
        set { _type = value; }
    }

    private string _displayName = string.Empty;
    public string displayName
    {
        get { return _displayName; }
        set { _displayName = value; }
    }

    private int _addedBy = 0;
    public int addedBy
    {
        get { return _addedBy; }
        set { _addedBy = value; }
    }
}