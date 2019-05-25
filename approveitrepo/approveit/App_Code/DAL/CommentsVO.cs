using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CommentsVO
/// </summary>
public class CommentsVO
{
    public CommentsVO()
    {

    }

    private string _commentId = string.Empty;
    public string CommentID
    {
        get { return _commentId; }
        set { _commentId = value; }
    }

    private string _requestId = string.Empty;
    public string RequestID
    {
        get { return _requestId; }
        set { _requestId = value; }
    }

    private string _comments = string.Empty;
    public string Comments
    {
        get { return _comments; }
        set { _comments = value; }
    }

    private string _addedOn = string.Empty;
    public string AddedOn
    {
        get { return _addedOn; }
        set { _addedOn = value; }
    }

    private string _orgId = string.Empty;
    public string OrgID
    {
        get { return _orgId; }
        set { _orgId = value; }
    }

    private string _userId = string.Empty;
    public string UserID
    {
        get { return _userId; }
        set { _userId = value; }
    }

    private string _email = string.Empty;
    public string Email
    {
        get { return _email; }
        set { _email = value; }
    }
}