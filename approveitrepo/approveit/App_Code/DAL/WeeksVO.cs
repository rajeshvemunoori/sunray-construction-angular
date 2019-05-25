using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for WeeksVO
/// </summary>
public class WeeksVO
{
    public WeeksVO()
    {
    }

    private string _monday = string.Empty;
    public string Monday
    {
        get { return _monday; }
        set { _monday = value; }
    }

    private string _tuesday = string.Empty;
    public string Tuesday
    {
        get { return _tuesday; }
        set { _tuesday = value; }
    }

    private string _wednesday = string.Empty;
    public string Wednesday
    {
        get { return _wednesday; }
        set { _wednesday = value; }
    }

    private string _thursday = string.Empty;
    public string Thursday
    {
        get { return _thursday; }
        set { _thursday = value; }
    }

    private string _friday = string.Empty;
    public string Friday
    {
        get { return _friday; }
        set { _friday = value; }
    }

    private string _saturday = string.Empty;
    public string Saturday
    {
        get { return _saturday; }
        set { _saturday = value; }
    }

    private string _sunday = string.Empty;
    public string Sunday
    {
        get { return _sunday; }
        set { _sunday = value; }
    }
}