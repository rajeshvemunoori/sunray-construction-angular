using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for MasterDetailsVO
/// </summary>
public class MasterDetailsVO
{
	public MasterDetailsVO()
	{
	}

    private int _requestID = 0;
    public int RequestID
    {
        get { return _requestID; }
        set { _requestID = value; }
    }

    private int _userID = 0;
    public int UserID
    {
        get { return _userID; }
        set { _userID = value; }
    }

    private int _managerID = 0;
    public int ManagerID
    {
        get { return _managerID; }
        set { _managerID = value; }
    }

    private DateTime _createdOn = DateTime.Now;
    public DateTime CreatedOn
    {
        get { return _createdOn; }
        set { _createdOn = value; }
    }

    private bool _preApproved = false;
    public bool PreApproved
    {
        get { return _preApproved; }
        set { _preApproved = value; }
    }

    private bool _isMgrPreApproved = false;
    public bool IsMgrPreApproved
    {
        get { return _isMgrPreApproved; }
        set { _isMgrPreApproved = value; }
    }

    private DateTime _startDate = DateTime.Now;
    public DateTime StartDate
    {
        get { return _startDate; }
        set { _startDate = value; }
    }

    private int _orgID = 0;
    public int OrgID
    {
        get { return _orgID; }
        set { _orgID = value; }
    }

    private int _statusID = 0;
    public int StatusID
    {
        get { return _statusID; }
        set { _statusID = value; }
    }

    private string _purpose = string.Empty;
    public string Purpose
    {
        get { return _purpose; }
        set { _purpose = value; }
    }

    private string _status = string.Empty;
    public string Status
    {
        get { return _status; }
        set { _status = value; }
    }               

}