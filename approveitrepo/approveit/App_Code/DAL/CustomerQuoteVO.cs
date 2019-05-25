using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CustomerQuote
/// </summary>
public class CustomerQuoteVO
{
    public CustomerQuoteVO()
    {
    }

    private int _detailsOrgId = 0;
    public int DetailsOrgId
    {
        get { return _detailsOrgId; }
        set { _detailsOrgId = value; }
    }

    private string _detailsCompCode = string.Empty;
    public string DetailsCompCode
    {
        get { return _detailsCompCode; }
        set { _detailsCompCode = value; }
    }

    private int _detailsQuoteId = 0;
    public int DetailsQuoteId
    {
        get { return _detailsQuoteId; }
        set { _detailsQuoteId = value; }
    }

    private int _lineNo = 0;
    public int LineNo
    {
        get { return _lineNo; }
        set { _lineNo = value; }
    }

    private string _itemId = string.Empty;
    public string ItemId
    {
        get { return _itemId; }
        set { _itemId = value; }
    }

    private string _itemDesc = string.Empty;
    public string ItemDesc
    {
        get { return _itemDesc; }
        set { _itemDesc = value; }
    }

    private int _qty = 0;
    public int Qty
    {
        get { return _qty; }
        set { _qty = value; }
    }

    private string _uom = string.Empty;
    public string Uom
    {
        get { return _uom; }
        set { _uom = value; }
    }

    private string _reqDelvryDate = string.Empty;
    public string ReqDelvryDate
    {
        get { return _reqDelvryDate; }
        set { _reqDelvryDate = value; }
    }

    private int _quoteId = 0;
    public int QuoteId
    {
        get { return _quoteId; }
        set { _quoteId = value; }
    }

    private int _orgId = 0;
    public int OrgId
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _compCode = string.Empty;
    public string CompCode
    {
        get { return _compCode; }
        set { _compCode = value; }
    }

    private string _quoteNum = string.Empty;
    public string QuoteNum
    {
        get { return _quoteNum; }
        set { _quoteNum = value; }
    }

    private string _quoteDesc = string.Empty;
    public string QuoteDesc
    {
        get { return _quoteDesc; }
        set { _quoteDesc = value; }
    }

    private string _quoteStatus = string.Empty;
    public string QuoteStatus
    {
        get { return _quoteStatus; }
        set { _quoteStatus = value; }
    }

    private int _userId = 0;
    public int UserId
    {
        get { return _userId; }
        set { _userId = value; }
    }

    private string _contactType = string.Empty;
    public string ContactType
    {
        get { return _contactType; }
        set { _contactType = value; }
    }

    private string _contactName = string.Empty;
    public string ContactName
    {
        get { return _contactName; }
        set { _contactName = value; }
    }

    private string _contactPhone = string.Empty;
    public string ContactPhone
    {
        get { return _contactPhone; }
        set { _contactPhone = value; }
    }

    private string _contactEmail = string.Empty;
    public string ContactEmail
    {
        get { return _contactEmail; }
        set { _contactEmail = value; }
    }

    private string _contactFax = string.Empty;
    public string ContactFax
    {
        get { return _contactFax; }
        set { _contactFax = value; }
    }

    private string _responseBy = string.Empty;
    public string ResponseBy
    {
        get { return _responseBy; }
        set { _responseBy = value; }
    }

    private int _sorgId = 0;
    public int SOrgId
    {
        get { return _sorgId; }
        set { _sorgId = value; }
    }

    private string _scompCode = string.Empty;
    public string SCompCode
    {
        get { return _scompCode; }
        set { _scompCode = value; }
    }

    private int _squoteId = 0;
    public int SQuoteId
    {
        get { return _squoteId; }
        set { _squoteId = value; }
    }

    private int _vendBillId = 0;
    public int VendBillId 
    {
        get { return _vendBillId; }
        set { _vendBillId = value; }
    }

    private string _vendShipId = string.Empty;
    public string VendShipId
    {
        get { return _vendShipId; }
        set { _vendShipId = value; }
    }

    private string _quoteDescription = string.Empty;
    public string QuoteDescription
    {
        get { return _quoteDescription; }
        set { _quoteDescription = value; }
    }

    private string _shipLocation = string.Empty;
    public string ShipLocation
    {
        get { return _shipLocation; }
        set { _shipLocation = value; }
    }

    private string _altProductAlwed = string.Empty;
    public string AltProductAlwed
    {
        get { return _altProductAlwed; }
        set { _altProductAlwed = value; }
    }
}