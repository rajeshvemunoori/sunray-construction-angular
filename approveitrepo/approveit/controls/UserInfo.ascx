<%@ Control Language="C#" AutoEventWireup="true" CodeFile="UserInfo.ascx.cs" Inherits="controls_UserInfo" %>
<div class="preview-pane grid_3 omega">
    <h3>
        <small>
            <%if (Session["lastname"].ToString() == string.Empty)
              {%>
            <%=Session["username"]%>'s contact information<%
          }
              else
              { %>
            <%=Session["lastname"]%>'s contact information
            <%} %></small></h3>
    <ul class="profile-info">
        <li>
            <%=Session["username"] + " " + Session["lastname"]%><span>Name</span></li>
        <li>
            <%=Session["Email"]%><span>Email</span></li>
        <li>
            <%=Session["Designation"]%><span>Job Name</span></li>
    </ul>
    <%if (Session["ManagerEmail"] != null)
      {
          if (Session["IsAdmin"].ToString().ToLower() == "false")
          {%>
    <h3>
        <small>Manager's information</small></h3>
    <ul class="profile-info">
        <li>
            <%=Session["ManagerName"]%><span>Name</span></li>
        <li>
            <%=Session["ManagerEmail"]%><span>Email</span></li>
    </ul>
    <%}
      }
    %>
    <br />
    <br />
    <div class="message info">
        <h3>
            <small>Helpful Tips</small></h3>
        <p>
            <% if (Request.RawUrl.ToLower().Contains("viewrequest.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Click on the expand icon on any request to edit the expense details.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("recieptstore.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Click on the attachment link of any request to add/view/download attachments.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("myaccount.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Fill in the fields to modify your details and save.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("editpassword.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Enter required fields to change your password and save.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("searchresults.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Click on the expand icon to get detailed view of the Request and automobile icon
            for Auto Details of the Request.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("viewinvc.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Click on the expand icon to get detailed view of the invoice.
            <%} %>
            <%else if (Request.RawUrl.ToLower().Contains("integration.aspx"))
               {%>
            <img src="images/lightbulb_32.png" class="fl" alt="Help" />
            Select required Type, add or edit company details and click Save to save data.
            <%} %>
        </p>
    </div>
    <div class="preview">
    </div>
</div>
