using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CCTransactionVO
/// </summary>
public class CCTransactionVO
{
    public CCTransactionVO()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    private int transactionID;
    public int TransactionID
    {
        get { return transactionID; }
        set { transactionID = value; }
    }

    private int orgID;
    public int OrgID
    {
        get { return orgID; }
        set { orgID = value; }
    }

    private string compCode;
    public string CompCode
    {
        get { return compCode; }
        set { compCode = value; }
    }

    private string reference_Number;
    public string Reference_Number
    {
        get { return reference_Number; }
        set { reference_Number = value; }
    }

    //private string Posted_Date;
    private string posted_Date;
    public string Posted_Date
    {
        get { return posted_Date; }
        set { posted_Date = value; }
    }

    //private Double Amount;
    private double amount;
    public double Amount
    {
        get { return amount; }
        set { amount = value; }
    }

    //private string Payee;
    private string payee;
    public string Payee
    {
        get { return payee; }
        set { payee = value; }
    }

    //private string Address;
    private string address;
    public string Address
    {
        get { return address; }
        set { address = value; }
    }

    //private string Reconciled;
    private string reconciled;
    public string Reconciled
    {
        get { return reconciled; }
        set { reconciled = value; }
    }

    //private int AddedBy;
    private int addedBy;
    public int AddedBy
    {
        get { return addedBy; }
        set { addedBy = value; }
    }

    //private string AddedOn;

    private string addedOn;
    public string AddedOn
    {
        get { return addedOn; }
        set { addedOn = value; }
    }

}