using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for JobStatusVO
/// </summary>
public class JobStatusVO
{
    public JobStatusVO()
    {

    }

    private int _batchNum = 0;
    public int BatchNum
    {
        get { return _batchNum; }
        set { _batchNum = value; }
    }

    private string _jobName = string.Empty;
    public string JobName
    {
        get { return _jobName; }
        set { _jobName = value; }
    }

    private string _startTime = string.Empty;
    public string StartTime
    {
        get { return _startTime; }
        set { _startTime = value; }
    }

    private string _endTime = string.Empty;
    public string EndTime
    {
        get { return _endTime; }
        set { _endTime = value; }
    }

    private string _status = string.Empty;
    public string Status
    {
        get { return _status; }
        set { _status = value; }
    }

}