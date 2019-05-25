using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CityVO
/// </summary>
public class CityVO
{
    public CityVO()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    private string _zipCode = string.Empty;
    public string zipCode
    {
        get { return _zipCode; }
        set { _zipCode = value; }
    }

    private string _country = string.Empty;
    public string country
    {
        get { return _country; }
        set { _country = value; }
    }

    private string _city = string.Empty;
    public string city
    {
        get { return _city; }
        set { _city = value; }
    }

    private string _latitude = string.Empty;
    public string latitude
    {
        get { return _latitude; }
        set { _latitude = value; }
    }

    private string _logitude = string.Empty;
    public string longitude
    {
        get { return _logitude; }
        set { _logitude = value; }
    }

    private string _regionCode = string.Empty;
    public string regionCode
    {
        get { return _regionCode; }
        set { _regionCode = value; }
    }
}