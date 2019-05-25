using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for EMailVO
/// </summary>
public class EMailVO
{
	public EMailVO()
	{
		
	}

    private string  _email = string.Empty;
    public string Email
    {
        get { return _email; }
        set { _email = value; }
    }

    private int _userId = 0;
    public int UserID
    {
        get { return _userId; }
        set { _userId = value; }
    }
}