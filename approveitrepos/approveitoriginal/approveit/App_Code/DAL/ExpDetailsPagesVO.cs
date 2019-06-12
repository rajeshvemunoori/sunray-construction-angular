using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ExpDetailsPagesVO
/// </summary>
public class ExpDetailsPagesVO
{
    public ExpDetailsPagesVO()
    {

    }

    private string _statusID = string.Empty;
    public string StatusID
    {
        get { return _statusID; }
        set { _statusID = value; }
    }

    private string _status = string.Empty;
    public string Status
    {
        get { return _status; }
        set { _status = value; }
    }

    private string _requestID = string.Empty;
    public string RequestID
    {
        get { return _requestID; }
        set { _requestID = value; }
    }

    private string _preApproved = string.Empty;
    public string PreApproved
    {
        get { return _preApproved; }
        set { _preApproved = value; }
    }

    private string _isMgrPreApproved = string.Empty;
    public string IsMgrPreApproved
    {
        get { return _isMgrPreApproved; }
        set { _isMgrPreApproved = value; }
    }

    private string _purpose = string.Empty;
    public string Purpose
    {
        get { return _purpose; }
        set { _purpose = value; }
    }

    private string _startDate = string.Empty;
    public string StartDate
    {
        get { return _startDate; }
        set { _startDate = value; }
    }

    private string _preAmount = string.Empty;
    public string PreAmount
    {
        get { return _preAmount; }
        set { _preAmount = value; }
    }

    private string _actualAmount = string.Empty;
    public string ActualAmount
    {
        get { return _actualAmount; }
        set { _actualAmount = value; }
    }

    private string _commentsCnt = string.Empty;
    public string CommentsCnt
    {
        get { return _commentsCnt; }
        set { _commentsCnt = value; }
    }

    private string _userID = string.Empty;
    public string UserID
    {
        get { return _userID; }
        set { _userID = value; }
    }

    private string _limitExceeded = string.Empty;
    public string LimitExceeded
    {
        get { return _limitExceeded; }
        set { _limitExceeded = value; }
    }

    private string _budgetLimit = string.Empty;
    public string BudgetLimit
    {
        get { return _budgetLimit; }
        set { _budgetLimit = value; }
    }

    private string _ourRefNo = string.Empty;
    public string OurRefNo
    {
        get { return _ourRefNo; }
        set { _ourRefNo = value; }
    }

    private string _preferredvendor = string.Empty;
    public string preferredVendor
    {
        get { return _preferredvendor; }
        set { _preferredvendor = value; }
    }

    private string _userName = string.Empty;
    public string userName
    {
        get { return _userName; }
        set { _userName = value; }
    }

    private string _actionDate = string.Empty;
    public string actionDate
    {
        get { return _actionDate; }
        set { _actionDate = value; }
    }

    private string _vendorFlag = string.Empty;
    public string vendorFlag
    {
        get { return _vendorFlag; }
        set { _vendorFlag = value; }
    }

    private string _onBeHalfOf = string.Empty;
    public string OnBeHalfOf
    {
        get { return _onBeHalfOf; }
        set { _onBeHalfOf = value; }
    }

    private string _reimburseFlag = string.Empty;
    public string ReimburseFlag
    {
        get { return _reimburseFlag; }
        set { _reimburseFlag = value; }
    }

    private string _sendToqb = string.Empty;
    public string SendToqb
    {
        get { return _sendToqb; }
        set { _sendToqb = value; }
    }
}