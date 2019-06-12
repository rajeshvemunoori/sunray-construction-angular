using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using ExpenseServiceBeta;
using System.Web.Script.Serialization;
using System.Text;
using System.Net;
using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using HtmlAgilityPack;
using System.Text.RegularExpressions;

public partial class Test1 : System.Web.UI.Page
{
    XmsExpenseServiceImplService xms = new XmsExpenseServiceImplService();
    JavaScriptSerializer ser = new JavaScriptSerializer();
    Utility ut = new Utility();
    DataTable dt = new DataTable();
    public string listFilterCities = string.Empty;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

        }
    }

    public bool TestEmailRegex(string emailAddress)
    {
        //                string patternLenient = @"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*";
        //                Regex reLenient = new Regex(patternLenient);

        //string patternStrict = @"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";
        string patternStrict = @"^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
        Regex reStrict = new Regex(patternStrict);
        bool isStrictMatch = reStrict.IsMatch(emailAddress);
        return isStrictMatch;
    }

    private void TestMethod()
    {
        //////////**********Add Styles to dynimically created div**********/////////
        //HtmlGenericControl div = new HtmlGenericControl("div");
        //div.Attributes.Add("id", "dv1");
        //div.Style.Add("height", "200px");
        //div.Style.Add("background-color", "Red");
        //div.Style.Add("width", "300px");
        //div.Style.Add("border", "1px solid black");
        //form1.Controls.Add(div);
        //////////**********Add Styles to dynimically created div**********/////////



        /////////**********Create n labels dynamically**********/////////////////
        //string[] arr = { "Test1", "Test2", "Test3" };
        //HtmlControl form = (HtmlControl)this.FindControl("form1");
        //for (int i = 0; i < arr.Length; i++)
        //{
        //    Label lbl = new Label();
        //    lbl.ID = "lbl" + i + 1;
        //    lbl.Text = arr[i];
        //    form.Controls.Add(lbl);
        //}
        /////////**********Create n labels dynamically**********/////////////////



        ////////**********Copy rows from one datatable to another which have different columns**********///////
        //DataTable dt = new DataTable();
        //dt.Columns.Add("Name");
        //dt.Columns.Add("City");
        //DataRow row;
        //for (int i = 0; i < 2; i++)
        //{
        //    row = dt.NewRow();
        //    row["Name"] = "User" + i;
        //    row["City"] = "Texas" + i;
        //    dt.Rows.Add(row);
        //}
        //dt.AcceptChanges();

        //DataTable dt1 = new DataTable();
        //dt1.Columns.Add("UserName");
        //dt1.Columns.Add("UserCity");

        //DataRow dr;
        //for (int i = 0; i < dt.Rows.Count; i++)
        //{
        //    dr = dt1.NewRow();
        //    dr["UserName"] = dt.Rows[i]["Name"].ToString();
        //    dr["UserCity"] = dt.Rows[i]["City"].ToString();
        //    dt1.Rows.Add(dr);
        //}
        //dt1.AcceptChanges();
        ////////**********Copy rows from one datatable to another which have different columns**********///////



        ////////**********Page refresh after every two seconds**********////////
        //<meta http-equiv="refresh" content="2"> in the head tag of html.
        //System.Threading.Thread.Sleep(3000);
        ////////**********Page refresh after every two seconds**********////////



        //////**********Add Two times in C#*************///////
        //string time1 = "05:30";
        //string time2 = "03:40";//09:10
        //int m1 = ((ut.NullSafeInteger(time1.Substring(0, time1.IndexOf(':'))) * 60) + ut.NullSafeInteger(time1.Substring(time1.IndexOf(':') + 1))) +
        //    ((ut.NullSafeInteger(time2.Substring(0, time2.IndexOf(':'))) * 60) + ut.NullSafeInteger(time2.Substring(time2.IndexOf(':') + 1)));
        //int h1 = (m1 / 60);
        //string f1 = h1.ToString() + ':' + (m1 - (h1 * 60));
        //Response.Write(f1);
        //////**********Add Two times in C#*************///////

        UserActivityVO userAct = new UserActivityVO();
        //userAct.activityId = "";
        //userAct.addedOn = "";
        //userAct.createdDate = "";
        //userAct.createdOn = "";
        //userAct.day1 = "";
        //userAct.day2 = "";
        //userAct.day3 = "";
        //userAct.day4 = "";
        //userAct.day5 = "";
        //userAct.day6 = "";
        //userAct.day7 = "";
        //userAct.detailFlag = "";
        //userAct.detailsCreatedOn = "";
        //userAct.detailsTotalHrs = "";
        //userAct.detailsUpdatedOn = "";
        //userAct.endTime = "";
        //userAct.jobDescription = "";
        //userAct.jobId = "";
        //userAct.jobName = "";
        //userAct.lastUpdSource = "";
        //userAct.lstUpdtdSrce = "";
        //userAct.masterFlag = "";
        //userAct.modifiedOn = "";
        //userAct.notes = "";
        //userAct.notes1 = "";
        //userAct.notes2 = "";
        //userAct.notes3 = "";
        //userAct.notes4 = "";
        //userAct.notes5 = "";
        //userAct.notes6 = "";
        //userAct.notes7 = "";
        //userAct.startDate = "";
        //userAct.startTime = "";
        //userAct.status = "";
        //userAct.statusId = "";
        //userAct.taskCnt = "";
        //userAct.taskDate = "";
        //userAct.taskId = "";
        //userAct.taskInfo = "";
        //userAct.timeDiff = "";
        //userAct.timeSheetId = "";
        //userAct.totalHrs = "";
        //userAct.totalJobHrs = "";
        //userAct.trackType = "";
        //userAct.updatedOn = "";
        //userAct.userId = "";
        //userAct.userName = "";
        //userAct.weeklyTimeSheetId = "";
        //userAct.weekTotalHrs = "";

        TSJobsVO tsj = new TSJobsVO();
        //tsj.accountCode = "";
        //tsj.addedBy = "";
        //tsj.addedOn = "";
        //tsj.compCode = "";
        //tsj.deptCode = "";
        //tsj.endDate = "";
        //tsj.hours = "";
        //tsj.hoursPer = "";
        //tsj.isActive = "";
        //tsj.jobCode = "";
        //tsj.jobDescription = "";
        //tsj.jobId = "";
        //tsj.jobName = "";
        //tsj.jobRole = "";
        //tsj.jobType = "";
        //tsj.managerId = "";
        //tsj.modifiedOn = "";
        //tsj.orgId = "";
        //tsj.rate = "";
        //tsj.startDate = "";
        //tsj.status = "";
        //tsj.totalDayHrs = "";
        //tsj.type = "";
        //tsj.userId = "";
        //tsj.userListSize = "";
        //tsj.usersList = "";



        ///////*********Get difference between two times*********///////
        //string date1 = "5:36 PM";
        //string date2 = "5:38 PM";
        //string timeDiff = (Convert.ToDateTime(date2).Subtract(Convert.ToDateTime(date1))).Duration().ToString();
        //timeDiff = timeDiff.Substring(0, timeDiff.Length - 3);
        //Response.Write(timeDiff);
        ///////*********Get difference between two times*********///////



        ///////*********Get start of the week*********///////
        //DateTime input = Convert.ToDateTime("07/23/2014");
        //int delta = DayOfWeek.Monday - input.DayOfWeek;
        //DateTime monday = input.AddDays(delta);
        //Response.Write(monday.ToString("MM/dd/yyyy"));
        //Response.Write((Convert.ToDateTime("07/28/2014") - Convert.ToDateTime("07/14/2014")).TotalDays);
        ///////*********Get start of the week*********///////



        ///////*********Get local time*********///////
        //txt.Text = DateTime.Now.ToString();
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "", "document.write(Date());", true);
        ///////*********Get local time*********///////



        ///////*********Get difference between two dates as number of days*********///////
        //Response.Write((DateTime.Now - Convert.ToDateTime("01/06/2014")).TotalDays);
        ///////*********Get difference between two dates as number of days*********///////



        //////******Compare two different time durations******//////
        //string minTaskTime = "00:15";
        //string timeDiff = "00:10"; 
        //string[] arrMinTime = minTaskTime.Split(':');
        //string[] arrtimeDiff = timeDiff.Split(':');
        //int count = 0;
        //if (ut.NullSafeInteger(arrtimeDiff[0]) < ut.NullSafeInteger(arrMinTime[0]))
        //    count++;
        //else if (ut.NullSafeInteger(arrtimeDiff[0]) == ut.NullSafeInteger(arrMinTime[0]))
        //    if (ut.NullSafeInteger(arrtimeDiff[1]) < ut.NullSafeInteger(arrMinTime[1]))
        //        count++;
        //Response.Write(count);
        //////******Compare two different time durations******//////



        //////******Get number of given day in week******//////
        //Response.Write((int)DateTime.Now.DayOfWeek);
        //////******Get number of given day in week******//////



        //////******Get difference between two time durations******//////
        //string time1 = "10:00";
        //string time2 = "12:14";
        //int m1 = ((ut.NullSafeInteger(time1.Substring(0, time1.IndexOf(':'))) * 60) + ut.NullSafeInteger(time1.Substring(time1.IndexOf(':') + 1)));
        //int m2 = ((ut.NullSafeInteger(time2.Substring(0, time2.IndexOf(':'))) * 60) + ut.NullSafeInteger(time2.Substring(time2.IndexOf(':') + 1)));
        //int m = m1 - m2;
        //int hours = (m - m % 60) / 60;
        //int min = m - hours * 60;
        //Response.Write(hours.ToString("00") + ":" + (min < 0 ? min * -1 : min));
        //////******Get difference between two time durations******//////



        //////******Format single digit number to double digit******//////
        //int x = 200;
        //Response.Write(x.ToString("D2"));
        //////******Format single digit number to double digit******//////



        //////******String comparision******//////
        Response.Write(string.Compare("rajesh", "rajesh"));
        //////******String comparision******//////




        //////******Excel download with multiple sheets******//////
        //        string str = @"<table border='1'>
        //                                            <tr border='1'>
        //                                                <th>table1 Heading 1</th>
        //                                                <th>table1 Heading 2</th>
        //                                            </tr>
        //                                            <tr border='1'>
        //                                                <td>
        //                                                    <table>
        //                                                        <tr>
        //                                                            <td>sample row</td>
        //                                                        </tr>
        //                                                    </table>
        //                                                </td>
        //                                                <td>row 1, cell 1</td>
        //                                                <td>row 1, cell 2</td>
        //                                            </tr>
        //                                            <tr>
        //                                                <td>row 2, cell 1</td>
        //                                                <td>row 2, cell 2</td>
        //                                            </tr>
        //                                        </table>
        //                                        <table>
        //                                            <tr border='1'>
        //                                                <th>table2 Heading 1</th>
        //                                                <th>table2 Heading 2</th>
        //                                            </tr>
        //                                            <tr>
        //                                                <td>row 11, cell 11</td>
        //                                                <td>row 11, cell 22</td>
        //                                            </tr>
        //                                            <tr border='1'>
        //                                                <td>row 22, cell 11</td>
        //                                                <td>row 22, cell 22</td>
        //                                            </tr>
        //                                        </table>
        //                                        <table>
        //                                            <tr border='1'>
        //                                                <th>table3 Heading 1</th>
        //                                                <th>table3 Heading 2</th>
        //                                            </tr>
        //                                            <tr>
        //                                                <td>row 111, cell 111</td>
        //                                                <td>row 111, cell 222</td>
        //                                            </tr>
        //                                            <tr border='1'>
        //                                                <td>row 222, cell 111</td>
        //                                                <td>row 222, cell 222</td>
        //                                            </tr>
        //                                        </table>";
        //        var doc = new HtmlDocument();
        //        doc.LoadHtml(str);
        //        var nodes = doc.DocumentNode.SelectNodes("//table/tr");
        //        var table = new DataTable("MyTable");
        //        var table1 = new DataTable("MyTable1");
        //        var table2 = new DataTable("MyTable2");

        //        //Table1
        //        var headers = nodes[0]
        //                .Elements("th")
        //                .Select(th => th.InnerText.Trim());
        //        foreach (var header in headers)
        //            table.Columns.Add(header);

        //        var rows = nodes.Skip(1).Select(tr => tr
        //            .Elements("td")
        //            .Select(td => td.InnerText.Trim())
        //            .ToArray());
        //        foreach (var row in rows)
        //            table.Rows.Add(row);
        //        //Table1

        //        //Table2
        //        //var headers1 = nodes[1]
        //        //        .Elements("th")
        //        //        .Select(th => th.InnerText.Trim());
        //        //foreach (var header in headers1)
        //        //    table1.Columns.Add(header);

        //        //var rows1 = nodes.Skip(4).Select(tr => tr
        //        //    .Elements("td")
        //        //    .Select(td => td.InnerText.Trim())
        //        //    .ToArray());
        //        //foreach (var row in rows1)
        //        //    table1.Rows.Add(row);
        //        ////Table2

        //        ////Table3
        //        //var headers2 = nodes[2]
        //        //        .Elements("th")
        //        //        .Select(th => th.InnerText.Trim());
        //        //foreach (var header in headers2)
        //        //    table2.Columns.Add(header);

        //        //var rows2 = nodes.Skip(7).Select(tr => tr
        //        //    .Elements("td")
        //        //    .Select(td => td.InnerText.Trim())
        //        //    .ToArray());
        //        //foreach (var row in rows2)
        //        //    table2.Rows.Add(row);
        //        //Table3

        //        var ds = new DataSet();

        //        ds.Tables.Add(table);
        //        //ds.Tables.Add(table1);
        //        //ds.Tables.Add(table2);
        //        ExcelHelper.ToExcel(ds, "test.xls", Page.Response);
        //////******Excel download with multiple sheets******//////

        //IntegrationItemVO i = new IntegrationItemVO();
        //i.addedOn = "";
        //i.classification = "";
        //i.compCode = "";
        //i.deptAssigned = "";
        //i.deptCode = "";
        //i.description = "";
        //i.itemAssigned = "";
        //i.itemCode = "";
        //i.itemDesc = "";
        //i.itemSeqId = 0;
        //i.orgId = 0;
        //i.qbAccId = 0;
        //i.qbItemId = 0;
        //i.syncDate = "";
        //i.type = 0;
        //i.userId = 0;
        JobStatusVO j = new JobStatusVO();
        j.BatchNum = 0;
        j.EndTime = "";
        j.JobName = "";
        j.StartTime = "";
        j.Status = "";


        DataTable dt = new DataTable();
        DataTable dtGroup = new DataTable();
        string table = string.Empty;

        for (int i = 0; i < dtGroup.Rows.Count; i++)
        {
            for (int k = 0; k < dt.Rows.Count; k++)
            {
                table += "<tr>" +
                    "<td>" + dtGroup.Rows[i]["Column1"].ToString() + "</td>" +
                    "<td colspan='2'>" + dtGroup.Rows[i]["Column2"].ToString() + "</td>" +
                    "</tr>";
                if (dtGroup.Rows[i]["Column1"].ToString() == dt.Rows[k]["Column1"].ToString() &&
                    dtGroup.Rows[i]["Column2"].ToString() == dt.Rows[k]["Column2"].ToString())
                {
                    table += "<tr>" +
                    "<td>" + dt.Rows[k]["Column3"].ToString() + "</td>" +
                    "<td>" + dt.Rows[k]["Column4"].ToString() + "</td>" +
                    "<td>" + dt.Rows[k]["Column5"].ToString() + "</td>" +
                    "</tr>";
                }
            }
        }
    }

    protected void timer1_Tick(object sender, EventArgs e)
    {
        //lbl.Text = DateTime.Now.ToLongTimeString();
    }

    private void InvMethods()
    {
        int orgid = 707;
        string compcode = "IOSMAC";
        int locId = 0;
        string jobCode = "";
        string item = "";
        string locCode = "LOC1";
        string str = xms.getInvDetails(orgid, compcode, locId.ToString(), jobCode, item);//
        List<InventoryVO> lst = ser.Deserialize<List<InventoryVO>>(str);
        DataTable dt = Utility.ConvertToDataTable(lst);
        //xms.getInvTransDetails(orgid, compcode, locId, jobCode, item);//
        //xms.getInvLocations(orgid, compcode);//get list of locations
        //xms.getInvLotLocations(orgid, compcode, locCode);//get list of lots based on loc code    
        //xms.addInvAdjustMul(
        InventoryVO inv = new InventoryVO();
    }

    protected void btn_Click2(object sender, EventArgs e)
    {
        //for (int i = 0; i < 5; i++)
        //{
        //    txt.Text = i.ToString();
        //    upd.Update();
        //    System.Threading.Thread.Sleep(3000);
        //}
    }
}