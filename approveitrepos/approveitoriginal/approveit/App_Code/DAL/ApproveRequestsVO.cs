using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ApproveRequestsVO
/// </summary>
public class ApproveRequestsVO
{
    public ApproveRequestsVO()
    {

    }

    private int _orgID = 0;
    public int OrgID
    {
        get { return _orgID; }
        set { _orgID = value; }
    }

    private string _compCode = string.Empty;
    public string CompCode
    {
        get { return _compCode; }
        set { _compCode = value; }
    }

    private string _mgrGroupCode = string.Empty;
    public string MgrGroupCode
    {
        get { return _mgrGroupCode; }
        set { _mgrGroupCode = value; }
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

    private string _userName = string.Empty;
    public string UserName
    {
        get { return _userName; }
        set { _userName = value; }
    }

    private string _createdOn = string.Empty;
    public string CreatedOn
    {
        get { return _createdOn; }
        set { _createdOn = value; }
    }

    private int _preApproved = 0;
    public int PreApproved
    {
        get { return _preApproved; }
        set { _preApproved = value; }
    }

    private bool _isManagerPreApproved = false;
    public bool IsManagerPreApproved
    {
        get { return _isManagerPreApproved; }
        set { _isManagerPreApproved = value; }
    }

    private int _managerId = 0;
    public int ManagerID
    {
        get { return _managerId; }
        set { _managerId = value; }
    }

    private double _preAmount = 0;
    public double PreAmount
    {
        get { return _preAmount; }
        set { _preAmount = value; }
    }

    private double _actualAmount = 0;
    public double ActualAmount
    {
        get { return _actualAmount; }
        set { _actualAmount = value; }
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

    private string _commentsCnt = string.Empty;
    public string CommentsCnt
    {
        get { return _commentsCnt; }
        set { _commentsCnt = value; }
    }

    private string _managerEmail = string.Empty;
    public string ManagerEmail
    {
        get { return _managerEmail; }
        set { _managerEmail = value; }
    }

    private string _limitExceeded = string.Empty;
    public string LimitExceeded
    {
        get { return _limitExceeded; }
        set { _limitExceeded = value; }
    }

    private string _status = string.Empty;
    public string Status
    {
        get { return _status; }
        set { _status = value; }
    }

    private string _actionDate = string.Empty;
    public string ActionDate
    {
        get { return _actionDate; }
        set { _actionDate = value; }
    }

    private string _expItem = string.Empty;
    public string ExpItem
    {
        get { return _expItem; }
        set { _expItem = value; }
    }

    private string _budgetLimit = string.Empty;
    public string BudgetLimit
    {
        get { return _budgetLimit; }
        set { _budgetLimit = value; }
    }

    private int _invCnt = 0;
    public int InvCnt
    {
        get { return _invCnt; }
        set { _invCnt = value; }
    }

    private string _signatureText = string.Empty;
    public string SignatureText
    {
        get { return _signatureText; }
        set { _signatureText = value; }
    }

    private string _poNotes = string.Empty;
    public string PoNotes
    {
        get { return _poNotes; }
        set { _poNotes = value; }
    }

    private string _jobTitle = string.Empty;
    public string JobTitle
    {
        get { return _jobTitle; }
        set { _jobTitle = value; }
    }

    private string _userTitle = string.Empty;
    public string UserTitle
    {
        get { return _userTitle; }
        set { _userTitle = value; }
    }

    private string _userSignature = string.Empty;
    public string UserSignature
    {
        get { return _userSignature; }
        set { _userSignature = value; }
    }

    private string _preferredVendor = string.Empty;
    public string preferredVendor
    {
        get { return _preferredVendor; }
        set { _preferredVendor = value; }
    }

    private string _ourRefNo = string.Empty;
    public string OurRefNo
    {
        get { return _ourRefNo; }
        set { _ourRefNo = value; }
    }

    private int _reimburseCnt = 0;
    public int reimburseCnt
    {
        get { return _reimburseCnt; }
        set { _reimburseCnt = value; }
    }

    private int _statusId = 0;
    public int statusId
    {
        get { return _statusId; }
        set { _statusId = value; }
    }

    private int _receiveCnt = 0;
    public int receiveCnt
    {
        get { return _receiveCnt; }
        set { _receiveCnt = value; }
    }

    private string _parkComment = string.Empty;
    public string parkComment
    {
        get { return _parkComment; }
        set { _parkComment = value; }
    }

    private int _parkDays = 0;
    public int parkDays
    {
        get { return _parkDays; }
        set { _parkDays = value; }
    }

    private string _vendorFlag = string.Empty;
    public string VendorFlag
    {
        get { return _vendorFlag; }
        set { _vendorFlag = value; }
    }

    private int _parkedUser = 0;
    public int ParkedUser
    {
        get { return _parkedUser; }
        set { _parkedUser = value; }
    }
}