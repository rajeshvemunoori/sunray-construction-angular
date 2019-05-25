using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;

/// <summary>
/// Summary description for Mails
/// </summary>
public class Mails
{
	public Mails()
	{     
        

	}

    public void SendMails(string subject, string body, string mailTo)
    {

        SmtpClient smtp = new SmtpClient("smtp.gmail.com");
        MailMessage msg = new MailMessage();
        MailAddress fromAddr = new MailAddress("xtramiletesting@gmail.com", "Xtramilesoft");
        msg.From = fromAddr;
        msg.To.Add(mailTo);
       // msg.To.Add("reetukarnati@gmail.com");//manager id
        //msg.CC.Add("rajesh93180@gmail.com");//user id		
        msg.Subject = subject;
        msg.IsBodyHtml = true;
        msg.Body = body;
        System.Net.NetworkCredential basicCredential = new System.Net.NetworkCredential("Xtramiletesting@gmail.com", "xms123@test");
        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        smtp.EnableSsl = true;
        smtp.UseDefaultCredentials = true;
        smtp.Credentials = basicCredential;
        smtp.Send(msg);

       
    }

    public bool CheckTextArea(string strValue)
    {
        if (strValue.ToLower().IndexOf("insert") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("update") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("delete") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("<") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf(">") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf(";") >= 0)
        {
            return false;
        }
        else if (strValue.ToLower().IndexOf("truncate") >= 0)
        {
            return false;
        }
        return true;
    }
}
