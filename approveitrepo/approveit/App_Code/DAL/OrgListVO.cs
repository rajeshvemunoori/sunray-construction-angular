using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for OrgListVO
/// </summary>
public class OrgListVO
{
    public OrgListVO()
    {
    }

    private int _orgId = 0;
    public int OrgID
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _name = string.Empty;
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    private string _phone = string.Empty;
    public string Phone
    {
        get { return _phone; }
        set { _phone = value; }
    }

    private string _url = string.Empty;
    public string URL
    {
        get { return _url; }
        set { _url = value; }
    }

    private string _currency = string.Empty;
    public string Currency
    {
        get { return _currency; }
        set { _currency = value; }
    }

    private string _measurement = string.Empty;
    public string Measurement
    {
        get { return _measurement; }
        set { _measurement = value; }
    }

    private bool _isActive = false;
    public bool IsActive
    {
        get { return _isActive; }
        set { _isActive = value; }
    }

    private string _firstName = string.Empty;
    public string FirstName
    {
        get { return _firstName; }
        set { _firstName = value; }
    }

    private int _levelId = 0;
    public int LevelId
    {
        get { return _levelId; }
        set { _levelId = value; }
    }

    private double _approvalLimit = 0;
    public double ApprovalLimit
    {
        get { return _approvalLimit; }
        set { _approvalLimit = value; }
    }

    private int _userId = 0;
    public int UserId
    {
        get { return _userId; }
        set { _userId = value; }
    }

    private int _managerId = 0;
    public int ManagerId
    {
        get { return _managerId; }
        set { _managerId = value; }
    }

    private string _state = string.Empty;
    public string State
    {
        get { return _state; }
        set { _state = value; }
    }

    private string _city = string.Empty;
    public string City
    {
        get { return _city; }
        set { _city = value; }
    }

    private string _address1 = string.Empty;
    public string Address1
    {
        get { return _address1; }
        set { _address1 = value; }
    }

    private string _address2 = string.Empty;
    public string Address2
    {
        get { return _address2; }
        set { _address2 = value; }
    }

    private string _countryCode = string.Empty;
    public string CountryCode
    {
        get { return _countryCode; }
        set { _countryCode = value; }
    }

    private string _zipCode = string.Empty;
    public string ZipCode
    {
        get { return _zipCode; }
        set { _zipCode = value; }
    }

    private string _bussinessType = string.Empty;
    public string BusinessType
    {
        get { return _bussinessType; }
        set { _bussinessType = value; }
    }

    private int _selfApprovalFlag = 0;
    public int SelApprovalFlag
    {
        get { return _selfApprovalFlag; }
        set { _selfApprovalFlag = value; }
    }

    private string _setLogoPath = string.Empty;
    public string LogoPath
    {
        get { return _setLogoPath; }
        set { _setLogoPath = value; }
    }

    private byte[] _logo;
    public byte[] Logo
    {
        get { return _logo; }
        set { _logo = value; }
    }

    private string _orgCode = string.Empty;
    public string orgCode
    {
        get { return _orgCode; }
        set { _orgCode = value; }
    }

}