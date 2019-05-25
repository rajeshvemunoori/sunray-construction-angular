using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for GZip
/// </summary>
public class GZip
{
    public GZip()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    public static void GZipEncodePage()
    {
        HttpResponse Response = HttpContext.Current.Response;

        if (IsGZipSupported())
        {
            string AcceptEncoding = HttpContext.Current.Request.Headers["Accept-Encoding"];
            if (AcceptEncoding.Contains("deflate"))
            {
                Response.Filter = new System.IO.Compression.DeflateStream(Response.Filter,
                                           System.IO.Compression.CompressionMode.Compress);
                Response.AppendHeader("Content-Encoding", "deflate");
            }
            else
            {
                Response.Filter = new System.IO.Compression.GZipStream(Response.Filter,
                                          System.IO.Compression.CompressionMode.Compress);
                Response.AppendHeader("Content-Encoding", "gzip");
            }
        }

        // Allow proxy servers to cache encoded and unencoded versions separately
        Response.AppendHeader("Vary", "Content-Encoding");
    }

    public static bool IsGZipSupported()
    {
        string AcceptEncoding = HttpContext.Current.Request.Headers["Accept-Encoding"];

        if (!string.IsNullOrEmpty(AcceptEncoding) && AcceptEncoding.Contains("gzip") || AcceptEncoding.Contains("deflate"))
            return true;
     
        return false;
    }
}