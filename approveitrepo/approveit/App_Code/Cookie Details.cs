using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Cookie_Details
/// </summary>
public class Cookie_Details
{
    public Cookie_Details()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    public static bool SetCookie(string cookieName, string cookieValue, int iDaysToExpire)
    {
        try
        {
            HttpCookie appCookie = new HttpCookie(cookieName);
            appCookie.Value = cookieValue;
            DateTime dtExpiry = DateTime.Now.AddDays(iDaysToExpire);
            appCookie.Expires = dtExpiry;
            HttpContext.Current.Response.Cookies.Add(appCookie);
        }
        catch (Exception ex)
        {
            return false;
        }

        return true;
    }

    public static string GetCookie(string cookieName)
    {
        string cookieValue = "";

        try
        {
            cookieValue = HttpContext.Current.Request.Cookies[cookieName].Value;
        }
        catch (Exception ex)
        {
            cookieValue = "";
        }

        return cookieValue;
    }

    public static void ClearCookies()
    {
        HttpContext.Current.Response.Cookies.Clear();
    }

    public static void DeleteCookie(string cookieName)
    {
        HttpContext.Current.Response.Cookies[cookieName].Expires = DateTime.Now.AddDays(-1);
    }
}