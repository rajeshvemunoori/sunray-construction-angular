<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DefaultTest.aspx.cs" Inherits="DefaultTest" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        /*Calendar Control CSS*/
        .cal_Theme1 .ajax__calendar_container {
            background-color: #DEF1F4;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_header {
            background-color: #ffffff;
            margin-bottom: 4px;
        }

        .cal_Theme1 .ajax__calendar_title,
        .cal_Theme1 .ajax__calendar_next,
        .cal_Theme1 .ajax__calendar_prev {
            color: #004080;
            padding-top: 3px;
        }

        .cal_Theme1 .ajax__calendar_body {
            background-color: #ffffff;
            border: solid 1px #77D5F7;
        }

        .cal_Theme1 .ajax__calendar_dayname {
            text-align: center;
            font-weight: bold;
            margin-bottom: 4px;
            margin-top: 2px;
            color: #004080;
        }

        .cal_Theme1 .ajax__calendar_day {
            color: #004080;
            text-align: center;
        }

        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_day,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_month,
        .cal_Theme1 .ajax__calendar_hover .ajax__calendar_year,
        .cal_Theme1 .ajax__calendar_active {
            color: #004080;
            font-weight: bold;
            background-color: #DEF1F4;
        }

        .cal_Theme1 .ajax__calendar_today {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <cc1:ToolkitScriptManager ID="ScriptManager1" runat="server">
        </cc1:ToolkitScriptManager>
        <div>
            <asp:TextBox ID="txt" runat="server"></asp:TextBox>
            <cc1:CalendarExtender
                ID="cal10" runat="server" TargetControlID="txt" Format="MM/dd/yyyy" CssClass=" cal_Theme1">
            </cc1:CalendarExtender>
            <asp:FileUpload ID="fupdBudget" runat="server" />
            <asp:Button ID="btn" runat="server" Text="Submit" OnClick="btn_Click" />
        </div>

        <div>
          <%--  <asp:GridView ID="gv" runat="server" AutoGenerateColumns="false" ShowFooter="true">
                <Columns>
                    <asp:TemplateField HeaderText="JAN" HeaderStyle-Width="60px" ControlStyle-Width="40px">
                        <ItemTemplate>
                            <%#Eval("Col1") %>
                        </ItemTemplate>
                        <FooterTemplate>
                            <marquee>This is sample text</marquee>
                        </FooterTemplate>
                    </asp:TemplateField>
                </Columns>

            </asp:GridView>--%>
        </div>
    </form>
</body>
</html>
