using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RegionVO
/// </summary>
public class RegionVO
{
	public RegionVO()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    private string _state = string.Empty;
    public string state
    {
        get { return _state; }
        set { _state = value; }
    }

    private string _regionCode = string.Empty;
    public string regionCode
    {
        get { return _regionCode; }
        set { _regionCode = value; }
    }
}